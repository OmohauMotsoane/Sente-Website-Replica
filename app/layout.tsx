import type { Metadata } from "next";
import SiteTags from "@/components/site-tags";
import Motion from "@/components/motion";
import CodeComponents from "@/components/codecomponents";
import Ticker from "@/components/ticker";
import Forms from "@/components/forms";
import "./globals.css";
import "@/components/motion.css";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.SITE_URL ?? "https://www.sente.finance"),
	icons: [
		{ rel: "icon", url: "/assets/images/8nayez0lfuad485hetwej7tkpo-aa849886fd.svg", media: "(prefers-color-scheme: light)" },
		{ rel: "icon", url: "/assets/images/04szbuhumzl3o1xfhzzexinjqi-5125e968e4.svg", media: "(prefers-color-scheme: dark)" },
		{ rel: "apple-touch-icon", url: "/assets/images/6lsc0uo6npvrji9kyyk1v5ke7xa-2fc1348110.png" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-redirect-timezone="1" dir="ltr" className="lenis lenis-autoToggle">
			<body>
				{children}
				<SiteTags />
				<Motion />
				<CodeComponents />
				<Ticker />
				<Forms />
			</body>
		</html>
	);
}
