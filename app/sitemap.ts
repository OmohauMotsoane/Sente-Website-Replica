import type { MetadataRoute } from "next";

// The pages the original site's sitemap listed, and its collections' items (an item the
// original left out says `sitemap: false`): a new item is listed the moment its file is added.
const PAGES: string[] = [
	"/",
	"/contact",
	"/about",
	"/changelog",
	"/blog",
	"/launch",
	"/institutions",
	"/cookie-policy",
	"/privacy-policy",
	"/terms-of-use",
	"/bots"
];

export default function sitemap(): MetadataRoute.Sitemap {
	const base = (process.env.SITE_URL ?? "https://www.sente.finance").replace(/\/$/, "");
	return [
		...PAGES.map((path) => ({ url: `${base}${path === "/" ? "" : path}` || base })),
	];
}
