import { FORMS } from "@/lib/forms";

// A form's submission (components/forms.tsx), sent on to where the site's owner says:
//   FORMS_WEBHOOK_URL   POSTed as JSON: { form, name, page, fields, submittedAt }
//   FORMS_NOTIFY_EMAIL  emailed, over SMTP_URL (smtp://user:password@host:587, or smtps://… on 465),
//                       from FORMS_FROM_EMAIL (else the SMTP user)
// Either, or both. With neither, it goes to Letter (LETTER_FORMS_URL and LETTER_FORMS_KEY, the README's), which
// keeps it for the site's organization and emails its admins. With none of them, a submission is answered 503
// and kept nowhere: the form shows its error.

const MAX_VALUE = 10_000;

type Submission = {
	form: string;
	name: string;
	page: string | null;
	fields: Record<string, string | string[]>;
	submittedAt: string;
};

function clip(value: unknown): string | null {
	return typeof value === "string" ? value.slice(0, MAX_VALUE) : null;
}

export async function POST(request: Request, ctx: { params: Promise<{ form: string }> }) {
	const { form: id } = await ctx.params;
	const form = Object.hasOwn(FORMS, id) ? FORMS[id] : undefined;
	if (!form) return Response.json({ error: "There is no such form." }, { status: 404 });
	let body: { page?: unknown; fields?: unknown };
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Send the form's fields as JSON." }, { status: 400 });
	}
	const given = body.fields && typeof body.fields === "object" ? (body.fields as Record<string, unknown>) : {};
	if (form.traps.some((t) => given[t] !== undefined && given[t] !== "")) return Response.json({ ok: true });
	const fields: Submission["fields"] = {};
	for (const name of form.fields) {
		const value = given[name];
		if (Array.isArray(value)) fields[name] = value.map(clip).filter((v): v is string => v !== null).slice(0, 50);
		else {
			const text = clip(value);
			if (text !== null) fields[name] = text;
		}
	}
	const submission: Submission = {
		form: id,
		name: form.name,
		page: clip(body.page),
		fields,
		submittedAt: new Date().toISOString(),
	};
	const webhook = process.env.FORMS_WEBHOOK_URL;
	const email = process.env.FORMS_NOTIFY_EMAIL;
	const letter = !webhook && !email ? letterDestination() : null;
	if (!webhook && !email && !letter) {
		console.warn("forms: " + id + " was submitted, and neither FORMS_WEBHOOK_URL nor FORMS_NOTIFY_EMAIL is set");
		return Response.json({ error: "This form has nowhere to send to yet." }, { status: 503 });
	}
	const sent = await Promise.allSettled([
		...(webhook ? [toWebhook(webhook, submission)] : []),
		...(email ? [toEmail(email, submission)] : []),
		...(letter ? [toWebhook(letter, submission, submitterOf(request))] : []),
	]);
	for (const s of sent) if (s.status === "rejected") console.error("forms: " + id + ": " + String(s.reason));
	// Kept somewhere is sent: a webhook that's down doesn't lose a submission the email carried.
	if (!sent.some((s) => s.status === "fulfilled"))
		return Response.json({ error: "The form couldn't be sent." }, { status: 502 });
	return Response.json({ ok: true });
}

/** Letter's address for this site's submissions, when both of its names are set. */
function letterDestination(): string | null {
	const base = process.env.LETTER_FORMS_URL;
	const key = process.env.LETTER_FORMS_KEY;
	return base && key ? base.replace(/[/]+$/, "") + "/" + encodeURIComponent(key) : null;
}

/** Who sent it (the first address the request was forwarded for): Letter limits how often one person sends. */
function submitterOf(request: Request): string | null {
	return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip");
}

async function toWebhook(url: string, submission: Submission, submitter?: string | null): Promise<void> {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			...(submitter ? { "x-letter-forms-submitter": submitter } : {}),
		},
		body: JSON.stringify(submission),
		signal: AbortSignal.timeout(10_000),
	});
	if (!res.ok) throw new Error("the webhook answered " + res.status);
}

async function toEmail(to: string, submission: Submission): Promise<void> {
	const smtp = process.env.SMTP_URL;
	if (!smtp) throw new Error("FORMS_NOTIFY_EMAIL is set and SMTP_URL isn't");
	const { createTransport } = await import("nodemailer");
	const transport = createTransport(smtp);
	const from = process.env.FORMS_FROM_EMAIL || decodeURIComponent(new URL(smtp).username) || to;
	const lines = Object.entries(submission.fields).map(
		([name, value]) => name + ": " + (Array.isArray(value) ? value.join(", ") : value)
	);
	const replyTo = Object.values(submission.fields)
		.flat()
		.find((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
	await transport.sendMail({
		from,
		to,
		...(replyTo ? { replyTo } : {}),
		subject: submission.name + (submission.page ? " on " + submission.page : ""),
		text: [...lines, "", "Sent " + submission.submittedAt + (submission.page ? " from " + submission.page : "")].join("\n"),
	});
}
