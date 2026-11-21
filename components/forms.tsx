"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The site's forms: a form marked data-form sends its fields as JSON to /api/forms/<data-form>
 * (app/api/forms/[form]/route.ts), which sends them on. While it sends, a submit button with
 * data-wait says so. Then the block beside it marked data-form-done shows and the form hides, or
 * the one marked data-form-fail shows; a form without them says it on its button.
 */
export default function Forms() {
	const path = usePathname();
	useEffect(() => {
		const stops = Array.from(document.querySelectorAll<HTMLFormElement>("form[data-form]")).map(wire);
		return () => stops.forEach((stop) => stop());
	}, [path]);
	return null;
}

type Fields = Record<string, string | string[]>;

function read(form: HTMLFormElement): Fields {
	const fields: Fields = {};
	new FormData(form).forEach((value, name) => {
		const text = typeof value === "string" ? value : value.name;
		const had = fields[name];
		fields[name] = had === undefined ? text : (Array.isArray(had) ? had : [had]).concat(text);
	});
	return fields;
}

function beside(form: HTMLFormElement, attr: string): HTMLElement | null {
	const parent = form.parentElement;
	if (!parent) return null;
	for (const el of Array.from(parent.children)) if (el !== form && el.hasAttribute(attr)) return el as HTMLElement;
	return null;
}

/** The submit buttons' words: an input's value, or a button's last line of text. */
function labels(form: HTMLFormElement): { set: (text: string | null) => void; restore: () => void } {
	const slots: { get: () => string; put: (text: string) => void; wait: string | null }[] = [];
	for (const el of Array.from(form.querySelectorAll<HTMLElement>("button, input[type=submit]"))) {
		if (el instanceof HTMLButtonElement && el.type !== "submit") continue;
		if (el instanceof HTMLInputElement) {
			slots.push({ get: () => el.value, put: (t) => (el.value = t), wait: el.getAttribute("data-wait") });
			continue;
		}
		const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
		let last: Text | null = null;
		for (let n = walker.nextNode(); n; n = walker.nextNode()) if (n.textContent?.trim()) last = n as Text;
		if (last) {
			const node = last;
			slots.push({ get: () => node.data, put: (t) => (node.data = t), wait: el.getAttribute("data-wait") });
		}
	}
	const was = slots.map((s) => s.get());
	return {
		set: (text) => slots.forEach((s) => (text === null ? s.wait !== null && s.put(s.wait) : s.put(text))),
		restore: () => slots.forEach((s, i) => s.put(was[i])),
	};
}

function wire(form: HTMLFormElement): () => void {
	const done = beside(form, "data-form-done");
	const fail = beside(form, "data-form-fail");
	const words = labels(form);
	let timer: ReturnType<typeof setTimeout> | undefined;
	const submit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (form.dataset.formState === "sending") return;
		clearTimeout(timer);
		words.restore();
		form.dataset.formState = "sending";
		form.setAttribute("aria-busy", "true");
		if (fail) fail.style.display = "none";
		words.set(null);
		let ok = false;
		try {
			const res = await fetch("/api/forms/" + encodeURIComponent(form.dataset.form ?? ""), {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ page: location.pathname, fields: read(form) }),
			});
			ok = res.ok;
		} catch {
			ok = false;
		}
		form.removeAttribute("aria-busy");
		form.dataset.formState = ok ? "sent" : "failed";
		words.restore();
		if (ok) {
			form.reset();
			if (done) {
				form.style.display = "none";
				done.style.display = "block";
				done.setAttribute("role", "status");
			} else words.set("Thank you!");
		} else if (fail) {
			fail.style.display = "block";
			fail.setAttribute("role", "alert");
		} else {
			words.set("Something went wrong. Try again.");
			timer = setTimeout(words.restore, 4000);
		}
	};
	form.addEventListener("submit", submit);
	return () => {
		clearTimeout(timer);
		form.removeEventListener("submit", submit);
	};
}
