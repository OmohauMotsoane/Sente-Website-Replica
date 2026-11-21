// The replica's own small module for code written against Framer's `framer` package: what a site's
// code components import from it, without Framer's runtime. Property controls only describe a
// component to Framer's editor, so here they do nothing; the page is never Framer's canvas or a
// static render; motion is the open-source framer-motion, which `framer` re-exports.
import { type ComponentType, createElement } from "react";

export * from "framer-motion";

export function addPropertyControls(component: unknown, controls: unknown): void {
	(component as { propertyControls?: unknown }).propertyControls = controls;
}

/** Every control type reads as its own name: only Framer's editor reads them. */
export const ControlType: Record<string, string> = new Proxy({} as Record<string, string>, {
	get: (_, key) => String(key),
});

export const RenderTarget = {
	canvas: "CANVAS",
	export: "EXPORT",
	thumbnail: "THUMBNAIL",
	preview: "PREVIEW",
	current: () => "PREVIEW",
	hasRestrictions: () => false,
};

export function useIsStaticRenderer(): boolean {
	return false;
}

export function useIsOnFramerCanvas(): boolean {
	return false;
}

/** A component with CSS of its own: the rules are added to the page once, then it renders. */
export function withCSS<P>(Component: ComponentType<P>, css: string | string[]): ComponentType<P> {
	const rules = Array.isArray(css) ? css.join("\n") : css;
	let added = false;
	return function WithCSS(props: P) {
		if (!added && typeof document !== "undefined") {
			const style = document.createElement("style");
			style.textContent = rules;
			document.head.appendChild(style);
			added = true;
		}
		return createElement(Component as ComponentType<object>, props as object);
	};
}
