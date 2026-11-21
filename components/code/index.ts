// The site's own code components, by name: what components/code-components.tsx runs in each
// container marked data-code. Each is its file as the site wrote it (see its header).
import type { ComponentType } from "react";

export type Override = (layer: ComponentType<Record<string, unknown>>) => ComponentType<Record<string, unknown>>;

export const CODE: Record<string, () => Promise<ComponentType<Record<string, unknown>>>> = {
	"BlurGradient_Prod": () =>
		import("./BlurGradient_Prod").then((m) => (m as unknown as Record<string, ComponentType<Record<string, unknown>>>)["default"]),
};

/** The site's overrides, by `<file>.<function>`: what runs on each layer marked data-code-override. */
export const OVERRIDES: Record<string, () => Promise<Override>> = {
	"GalleryController.ImageGalleryController": () =>
		import("./GalleryController").then((m) => (m as unknown as Record<string, Override>)["ImageGalleryController"]),
};

/** Pages that keep their own drawing: they matched the original better without their code running. */
export const KEEP_DRAWN: string[] = [];
