"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Tickers: a list marked data-ticker holds one set of items. It is repeated (the copies hidden
 * from assistive technology) until the row is covered with a set to spare, and moved one set's
 * length on a loop at data-speed px a second (motion.css), paused out of view, and slowed or
 * sped up under the pointer by data-hover-factor.
 */
export default function Ticker() {
	const path = usePathname();
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-ticker]")).map(run);
		return () => stops.forEach((stop) => stop());
	}, [path]);
	return null;
}

function run(row: HTMLElement): () => void {
	const vertical = row.dataset.direction === "top" || row.dataset.direction === "bottom";
	const set = Array.from(row.children).slice(0, Number(row.dataset.slides) || row.children.length) as HTMLElement[];
	// Its frame: the component's section around the row (Ticker), else the box the row moves in (a stack's ticker effect).
	const up = row.parentElement!;
	const frame = (up.tagName === "SECTION" ? up : up.parentElement?.tagName === "SECTION" ? up.parentElement : up) as HTMLElement;
	const added: Element[] = [];
	const measure = () => {
		for (const el of added.splice(0)) el.remove();
		const first = set[0].getBoundingClientRect();
		const gap = parseFloat(getComputedStyle(row)[vertical ? "rowGap" : "columnGap"]) || 0;
		const last = set[set.length - 1].getBoundingClientRect();
		const length = (vertical ? last.bottom - first.top : last.right - first.left) + gap;
		if (length <= 0) return;
		const room = vertical ? frame.clientHeight : frame.clientWidth;
		for (let n = 1; n < Math.ceil(room / length) + 1; n++)
			for (const item of set) {
				const copy = item.cloneNode(true) as HTMLElement;
				copy.setAttribute("aria-hidden", "true");
				row.appendChild(copy);
				added.push(copy);
			}
		row.style.setProperty("--ticker-to", vertical ? `0 ${-length}px` : `${-length}px 0`);
		row.style.setProperty("--ticker-duration", `${length / (Number(row.dataset.speed) || 100)}s`);
	};
	const watch = () => {
		const box = frame.getBoundingClientRect();
		row.dataset.inview = box.bottom > 0 && box.top < window.innerHeight ? "in" : "out";
	};
	const factor = Number(row.dataset.hoverFactor ?? 1);
	const rate = (r: number) => () => row.getAnimations().forEach((a) => (a.playbackRate = r));
	const enter = rate(factor);
	const leave = rate(1);
	measure();
	watch();
	window.addEventListener("scroll", watch, { passive: true });
	window.addEventListener("resize", measure);
	if (factor !== 1) {
		frame.addEventListener("pointerenter", enter);
		frame.addEventListener("pointerleave", leave);
	}
	return () => {
		for (const el of added) el.remove();
		window.removeEventListener("scroll", watch);
		window.removeEventListener("resize", measure);
		frame.removeEventListener("pointerenter", enter);
		frame.removeEventListener("pointerleave", leave);
	};
}
