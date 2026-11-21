<!-- letter-preview -->
Live preview: https://ec0e16f27e1677aa08f8bd28a5d466da.preview.letter.dev (up until November 22, 2026)

sente.finance rebuilt by Letter Replicator as native Next.js: 8 of 11 pages match the original at every width checked, mean match 99.32%.
<!-- /letter-preview -->

# www.sente.finance

This is https://www.sente.finance, rebuilt as a Next.js site by Letter's Replicator from the site as it was published on Framer c292b3e. Every page the original served is served here at the same path, from code and content in this repo: nothing loads from the old site.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # what a deploy runs
```

## What is where

| | |
| --- | --- |
| `app/` | One route per page. A page's own styles sit beside it (`page.css`); styles every page shares are `app/globals.css`. |
| `components/` | The sections every page shares (the navigation, the footer). |
| `public/assets/` | Every image, font and video the site uses. |
| `app/api/forms/` | Where the site's forms send what people type, on to a destination you set (below). |
| `app/sitemap.ts` | The sitemap, listing what the original listed and every collection item. |
| `replicator.json` | What was replicated, and how closely each page matched the original. |

## How close it is

8 of 11 pages match the original at every viewport (1440px, 390px) to within 0.5% of pixels; the mean match is 99.32%. Motion the original has on its own (a ticker, a video) is left out of the comparison. Per page: `replicator.json`.

## Forms

The original's form sends to `app/api/forms/[form]/route.ts` here, under the field names the original published (`lib/forms.ts`). Say where submissions go in the environment the site runs in:

| Variable | |
| --- | --- |
| `FORMS_WEBHOOK_URL` | Each submission is POSTed here as JSON: `{ form, name, page, fields, submittedAt }`. Any service that takes a webhook (a CRM, a spreadsheet, a chat channel) can receive it. |
| `FORMS_NOTIFY_EMAIL` | Each submission is emailed here, over `SMTP_URL` (`smtp://user:password@host:587`, or `smtps://…` on 465), from `FORMS_FROM_EMAIL` (else the SMTP user). |

<!-- letter-forms -->
With neither set, submissions go to Letter, which keeps each one for your organization (the Replicator lists them) and emails its admins, a reply going to the person who sent it. Letter's preview of this site is set up that way. Where you host it, set these two to keep it:

| Variable | Value |
| --- | --- |
| `LETTER_FORMS_URL` | `https://app.letterstory.com/api/sites/forms` |
| `LETTER_FORMS_KEY` | This site's key: an admin of your organization copies it from the replication's Forms tab in Letter, or runs `letterstory replicate forms <replication-id> --show-key`. |

The key says which site a submission is from: set it as a secret where the site is hosted, never in this repo. Setting `FORMS_WEBHOOK_URL` or `FORMS_NOTIFY_EMAIL` sends them there instead.
<!-- /letter-forms -->

| Form | Fields | Pages |
| --- | --- | --- |
| `form` (a form of First Name, Last Name, Email, Company Name) | First Name, Last Name, Email, Company Name | `/contact` |

To try one locally: `FORMS_WEBHOOK_URL=https://… npm run dev`, then submit the form.

## Third-party tags

The original loads these. `components/site-tags.tsx` loads them in production only, so previews and local runs don't report visits. To turn them on wherever the site runs, set `SITE_TAGS=on` in its environment:

- an inline snippet

Set `SITE_URL` to the site's address in production; the sitemap and social cards use it.
