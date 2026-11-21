"use client";

import { usePathname } from "next/navigation";
import { Component, type ComponentType, createElement, type ReactNode, useEffect, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { CODE, KEEP_DRAWN, OVERRIDES } from "./code";

/**
 * The site's own code (components/code/): each container marked data-code runs its component with
 * the props in data-code-props, and each layer marked data-code-override runs its override. What the
 * page drew in a container stays until the component draws its first frame in its place, and comes
 * back if the component fails.
 */
export default function CodeComponents() {
	const path = usePathname();
	useEffect(() => {
		let live = true;
		const stops: (() => void)[] = [];
		// Each container says what became of it (data-code-state): running its component, or keeping
		// what the page drew (none here, not read at this width, or it failed).
		const keep = (box: HTMLElement) => (box.dataset.codeState = "drawn");
		// A page that matched the original better with its own drawing keeps it (and verify measures
		// a page this way, held, to tell).
		const held =
			KEEP_DRAWN.includes(path) || !!(window as unknown as { __replicaKeepDrawing?: boolean }).__replicaKeepDrawing;
		if (held) {
			document.querySelectorAll<HTMLElement>("[data-code]").forEach(keep);
			return;
		}
		for (const box of Array.from(document.querySelectorAll<HTMLElement>("[data-code]"))) {
			const load = CODE[box.dataset.code ?? ""];
			if (!load) {
				keep(box);
				continue;
			}
			let props: Record<string, unknown> = {};
			let at: { min: number | null; max: number | null; props: Record<string, unknown> }[] = [];
			try {
				props = JSON.parse(box.dataset.codeProps || "{}");
				at = JSON.parse(box.dataset.codePropsAt || "[]");
			} catch {
				keep(box);
				continue;
			}
			// The props for the window's width, when the builder handed others at other widths.
			const rangeNow = () => {
				const w = window.innerWidth;
				return at.find((r) => (r.min === null || w >= r.min) && (r.max === null || w <= r.max));
			};
			// Listed by breakpoint and none is this width's: it wasn't read here, and the drawing stays.
			if (at.length && !rangeNow()) {
				keep(box);
				continue;
			}
			const propsNow = () => rangeNow()?.props ?? props;
			load()
				.then((Code) => {
					if (live) stops.push(run(box, Code, propsNow));
				})
				.catch((error) => {
					keep(box);
					console.warn("A code component didn't load; the page keeps its drawing:", box.dataset.code, error);
				});
		}
		for (const layer of Array.from(document.querySelectorAll<HTMLElement>("[data-code-override]"))) {
			const load = OVERRIDES[layer.dataset.codeOverride ?? ""];
			if (!load) continue;
			load()
				.then((override) => {
					if (live) stops.push(wrap(layer, override));
				})
				.catch((error) => console.warn("An override didn't load:", layer.dataset.codeOverride, error));
		}
		return () => {
			live = false;
			stops.forEach((stop) => stop());
		};
	}, [path]);
	return null;
}

function run(box: HTMLElement, Code: ComponentType<Record<string, unknown>>, propsNow: () => Record<string, unknown>) {
	const drawn = Array.from(box.children) as HTMLElement[];
	// How tall what the page drew here is: a component that draws much less keeps it instead.
	const drawnHeight = box.getBoundingClientRect().height;
	const host = document.createElement("div");
	host.style.display = "contents";
	box.appendChild(host);
	const root = createRoot(host);
	const hide = () => {
		drawn.forEach((el) => (el.style.display = "none"));
		// Judged a moment after its first frame: one that draws nothing here, or leaves its box well
		// short of what the page drew (it waits on something the replica doesn't have), gives the
		// page's drawing back.
		setTimeout(() => {
			if (stopped) return;
			const sized = Array.from(host.querySelectorAll("*")).some((el) => {
				const b = el.getBoundingClientRect();
				return b.width > 0 && b.height > 0;
			});
			const height = box.getBoundingClientRect().height;
			if (!sized || (drawnHeight > 20 && height < drawnHeight * 0.75)) {
				console.warn("A code component drew less than the page did; the page keeps its drawing:", box.dataset.code);
				stop();
			} else box.dataset.codeState = "running";
		}, 1500);
	};
	const show = () => {
		drawn.forEach((el) => el.style.removeProperty("display"));
		box.dataset.codeState = "drawn";
	};
	let stopped = false;
	const stop = () => {
		if (stopped) return;
		stopped = true;
		setTimeout(() => {
			root.unmount();
			host.remove();
			show();
		});
	};
	let props = propsNow();
	const draw = () => root.render(createElement(Guard, { onError: stop, onShown: hide }, createElement(Code, props)));
	draw();
	// Across a breakpoint, the props the builder hands it there.
	const resize = () => {
		const next = propsNow();
		if (next === props) return;
		props = next;
		draw();
	};
	window.addEventListener("resize", resize);
	return () => {
		window.removeEventListener("resize", resize);
		stop();
	};
}

/** The DOM event a layer prop names (onTap is a click, onHoverStart the pointer coming in). */
const EVENTS: Record<string, string> = {
	onTap: "click",
	onTapStart: "pointerdown",
	onTapCancel: "pointercancel",
	onHoverStart: "mouseenter",
	onHoverEnd: "mouseleave",
	onDoubleClick: "dblclick",
};

/**
 * An override runs on the layer the page already drew: it is handed a stand-in for the builder's
 * layer, and what it gives that stand-in (its words, its style, what it does when touched) is
 * applied to the layer, and taken back when it stops.
 */
function wrap(layer: HTMLElement, override: (c: ComponentType<Record<string, unknown>>) => ComponentType<Record<string, unknown>>) {
	const words = Array.from(layer.querySelectorAll<HTMLElement>("p, h1, h2, h3, h4, h5, h6, li, span, a")).find(
		(el) => !el.querySelector("p, h1, h2, h3, h4, h5, h6, li") && (el.textContent ?? "").trim()
	) ?? layer;
	const html = words.innerHTML;
	const style = layer.getAttribute("style");
	let off: (() => void)[] = [];
	function Layer(props: Record<string, unknown>) {
		useLayoutEffect(() => {
			off.forEach((f) => f());
			off = [];
			if (typeof props.text === "string" || typeof props.text === "number") words.textContent = String(props.text);
			if (props.style && typeof props.style === "object") Object.assign(layer.style, props.style);
			for (const [name, fn] of Object.entries(props)) {
				if (typeof fn !== "function" || !/^on[A-Z]/.test(name)) continue;
				const type = EVENTS[name] ?? name.slice(2).toLowerCase();
				const listener = (e: Event) => (fn as (e: Event) => void)(e);
				layer.addEventListener(type, listener);
				off.push(() => layer.removeEventListener(type, listener));
			}
		});
		return null;
	}
	const host = document.createElement("div");
	const root = createRoot(host);
	root.render(createElement(Guard, { onError: () => undefined, onShown: () => undefined }, createElement(override(Layer))));
	return () => {
		setTimeout(() => {
			root.unmount();
			off.forEach((f) => f());
			words.innerHTML = html;
			if (style === null) layer.removeAttribute("style");
			else layer.setAttribute("style", style);
		});
	};
}

class Guard extends Component<{ onError: () => void; onShown: () => void; children?: ReactNode }, { failed: boolean }> {
	state = { failed: false };
	static getDerivedStateFromError() {
		return { failed: true };
	}
	componentDidCatch() {
		this.props.onError();
	}
	render() {
		return this.state.failed ? null : createElement(Shown, { onShown: this.props.onShown }, this.props.children);
	}
}

function Shown({ onShown, children }: { onShown: () => void; children?: ReactNode }) {
	useLayoutEffect(onShown, [onShown]);
	return children;
}
