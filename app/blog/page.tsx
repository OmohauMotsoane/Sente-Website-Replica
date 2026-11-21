import type { Metadata, Viewport } from "next";
import Toggle from "@/components/toggle";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Sente | Personal Finance, In One Place" },
	description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
	alternates: { canonical: "/blog", },
	robots: "max-image-preview:large",
	openGraph: {
		title: "Sente | Personal Finance, In One Place",
		description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
		type: "website",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sente | Personal Finance, In One Place",
		description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	other: {
		"og:url": "https://www.sente.finance/blog",
	},
};

export const viewport: Viewport = { width: "device-width", initialScale: undefined };

export default function Page() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function p(){function s(e){let t=new URL(e);return`${t.origin}${t.pathname}`.replace(/\\/$/u,\"\")}function c(e){return e.split(\"-\")[0]}function g(){let e=window.location.hostname,t=new Map;return document.querySelectorAll('link[rel=\"alternate\"]').forEach(n=>{let r=n.getAttribute(\"hreflang\"),o=n.getAttribute(\"href\");!r||!o||new URL(o).hostname!==e||t.set(r,o)}),t}function d(e,t){return t.has(\"x-default\")?t.get(e)===t.get(\"x-default\"):!1}function h(){let e=navigator.languages;try{let t=localStorage.preferredLocale;return t?[t,...e]:e}catch{return e}}function i(e){s(window.location.href)!==s(e)&&window.location.replace(e+window.location.search+window.location.hash)}if(navigator.webdriver||/bot|-google|google-|yandex|ia_archiver|crawl|spider/i.test(navigator.userAgent))return;let l=document.documentElement,u=l.getAttribute(\"lang\");if(!u)return;let a=g();if(!d(u,a))return;let f=h();if(l.hasAttribute(\"data-redirect-timezone\")){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=f[0]?.startsWith(\"en\"),n=e===\"Europe/London\";if(t&&!n||!t&&n)return;let r=a.get(\"en-GB\");if(t&&n&&r){i(r);return}}for(let e of f){let t=a.get(e);if(t){i(t);return}let n=c(e);for(let[r,o]of a)if(c(r)===n){i(o);return}}}return p})()()" }} />
			<div id="main">
				<div className="framer-ywV1D framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-o1vz9d" data-layout-template="true" style={{ "--107bztt": "var(--token-63179b8e-7207-4483-969d-30dad423295a, rgb(235, 237, 250))", minHeight: "100vh", width: "auto" }}>
					<Toggle id="t6ea76772" open={
						<>
							<div className="framer-1pjef6k-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px -80px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
								<div className="ssr-variant hidden-o1vz9d">
									<nav className="framer-FqwrZ framer-QQ1ys framer-eH0iv framer-8C4pO framer-sa5ze framer-a6gcv2 framer-v-2x76bh" style={{ width: "100%", transform: "none", transformOrigin: "50% 50% 0px" }}>
										<div className="framer-x1lkxr" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239)", willChange: "auto", transform: "none", transformOrigin: "50% 50% 0px" }}>
											<div className="framer-zrg6ep" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
												<a className="framer-6gbpnt framer-xe6ccp" href="/" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
													<img alt="" className="framer-yDtge framer-1xpf2hp" src={"data:image/svg+xml,<svg display=\"block\" id=\"3375308364\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"vQrDtBADy\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.98823366859972px\" id=\"Y4atzCHU3\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(255, 255, 255)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.964633047234315px\" id=\"F_tPleDid\" width=\"40px\"/></g></svg>"} style={{ "--o4jego": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", transform: "none", transformOrigin: "50% 50% 0px" }} />
												</a>
												<div className="framer-1kf9bok-container" aria-expanded="true" aria-label="Close navigation" style={{ transform: "none", transformOrigin: "50% 50% 0px" }} data-rp-toggle="t6ea76772">
													<div className="framer-2Y7a7 framer-1mpyq25 framer-v-uc0zpc" tabIndex={0} style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
														<div className="framer-rjj7k1" style={{ backgroundColor: "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", borderRadius: "50% / 1000%", transform: "rotate(-45deg)", willChange: "transform", transformOrigin: "50% 50% 0px" }} />
														<div className="framer-1c52wdg" style={{ backgroundColor: "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", borderRadius: "50% / 1000%", transform: "rotate(45deg)", willChange: "transform", transformOrigin: "50% 50% 0px" }} />
													</div>
												</div>
											</div>
											<div className="framer-10lmnm" style={{ opacity: "1", willChange: "transform", transform: "none", transformOrigin: "50% 50% 0px" }}>
												<div className="framer-utaw3n" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none", transformOrigin: "50% 50% 0px" }} tabIndex={0}>
													<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/">Home</a>
													</p>
												</div>
												<div className="framer-1gj43b5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none", transformOrigin: "50% 50% 0px" }} tabIndex={0}>
													<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/about">Company</a>
													</p>
												</div>
												<div className="framer-fqo0hv" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none", transformOrigin: "50% 50% 0px" }} tabIndex={0}>
													<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/blog" data-framer-page-link-current="true">Blog</a>
													</p>
												</div>
												<div className="framer-17vxnuu" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none", transformOrigin: "50% 50% 0px" }} tabIndex={0}>
													<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/changelog">Updates</a>
													</p>
												</div>
												<div className="framer-1dm8v9w" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none", transformOrigin: "50% 50% 0px" }} tabIndex={0}>
													<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/contact">Contact</a>
													</p>
												</div>
											</div>
											<div className="framer-ywrr35" style={{ opacity: "1", willChange: "transform", transform: "none", transformOrigin: "50% 50% 0px" }}>
												<div className="framer-77d56h-container" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
													<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-x6zijj framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(52, 54, 71))", transform: "none", transformOrigin: "50% 50% 0px" }}>
														<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(52, 54, 71))", transform: "none", transformOrigin: "50% 50% 0px" }}>
															<div className="framer-1mfh61l" style={{ backgroundColor: "rgb(0, 0, 0)", borderRadius: "0px", opacity: "1", transform: "none", transformOrigin: "50% 50% 0px" }}>
																<div className="framer-182q4et" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
																	<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "1", transform: "none", transformOrigin: "50% 50% 0px" }}>
																		<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																			Get started
																		</p>
																	</div>
																</div>
																<div className="framer-jljtre" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
																	<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", transform: "none", transformOrigin: "50% 50% 0px" }}>
																		<use href="#2047441354" />
																	</svg>
																</div>
															</div>
															<div className="framer-bfq796" style={{ opacity: "1", transform: "none", transformOrigin: "50% 50% 0px" }}>
																<div className="framer-1mxkgk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none", transformOrigin: "50% 50% 0px" }}>
																	<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																		Get started
																	</p>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
										<div className="framer-ptikzx-container" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
											<div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "1", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.1875px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "2", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.375px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "3", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.75px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "4", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(1.5px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "5", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(3px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "6", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(6px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "7", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(12px)" }} />
												<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "8", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(24px)" }} />
											</div>
										</div>
									</nav>
								</div>
							</div>
							<div className="framer-cipNL framer-e6oiu framer-yVzhh framer-1din4jl" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
								<section className="framer-6h3kz1" id="hero">
									<div className="framer-vzy9ga">
										<div className="framer-1sllg5e" id="nav-trig">
											<div className="ssr-variant">
												<div className="framer-2km9yi-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
													<div className="framer-uFf4G framer-QQ1ys framer-yVzhh framer-qFJhv framer-1eactox" data-border="true" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgba(0, 0, 0, 0.5))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0px", opacity: "1" }}>
														<div className="framer-1i3j5t7" style={{ backgroundColor: "rgb(255, 255, 255)", opacity: "1" }}>
															<svg className="framer-0nw0H framer-zxalav" role="presentation" viewBox="0 0 24 24" style={{ "--1m6trwb": "0", "--21h8s6": "rgb(0, 0, 0)", "--pgex8v": "1.5", transform: "translate(-50%, -50%)", opacity: "1" }}>
																<use href="#1523066278" />
															</svg>
														</div>
														<div className="framer-os12c" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-wZ9kK1zmf-bkjB1FjjJ": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))", transform: "none", opacity: "1" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ))" }}>
																Blog
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="framer-12webea" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
												<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center" }}>
													A closer look at household finance.
												</h1>
											</div>
											<div className="framer-1w2s3vu" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgba(255, 255, 255, 0.75)" }}>
													<span style={{ "--framer-text-color": "rgba(255, 255, 255, 0.75)" }} className="framer-text">
														Publication begins on 1 December 2026, alongside Sente Beta Version 1. We’re preparing practical writing on household cash flow, shared financial decisions and the information behind them. Articles will appear here when they are ready to be useful, not simply to fill a feed.
													</span>
												</p>
											</div>
										</div>
									</div>
								</section>
								<section className="framer-2mu6e6">
									<div className="framer-yr6svv">
										<div className="framer-bw6rw0">
											<div className="ssr-variant">
												<div className="framer-1ascdrl-container" />
											</div>
										</div>
									</div>
								</section>
							</div>
							<div id="overlay" />
							<div className="framer-bdvkym" />
							<section className="framer-hqw45e">
								<div className="framer-tj1wkb">
									<div className="framer-fsxqme">
										<div className="framer-1xp6nhi">
											<div className="framer-1ijobej">
												<img alt="" className="framer-WxhmQ framer-1vm5nwj" src={"data:image/svg+xml,<svg display=\"block\" id=\"1361896474\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"i89qsUkhJ\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(0, 0, 0)\" height=\"39.98823366859972px\" id=\"fgc4QtRyx\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(0, 0, 0)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(0, 0, 0)\" height=\"39.964633047234315px\" id=\"mf4vCSWbT\" width=\"40px\"/></g></svg>"} style={{ willChange: "transform", opacity: "1", transform: "none" }} />
												<div className="framer-volkim" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: "1", transform: "none" }}>
													<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
														Get to know your money.
													</h1>
												</div>
												<div className="framer-vvvaue" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: "1", transform: "none" }}>
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
														Understand what you earn, what you spend, what you own, and what you owe, then see how it all connects to the life you're building and the decisions still ahead.
													</p>
												</div>
											</div>
											<div className="framer-16jtt5c-container" style={{ "--from-opacity": "0", "--from-translate": "0px 96px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="">
												<div className="ssr-variant hidden-o1vz9d hidden-18g6p6c">
													<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-uuvcib framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "rgb(0, 0, 0)", opacity: "1" }}>
														<div className="framer-dh6mte" style={{ backgroundColor: "rgb(0, 0, 0)", opacity: "1" }}>
															<div className="framer-1mfh61l" style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
																<div className="framer-182q4et" style={{ opacity: "1" }}>
																	<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																			Get Started
																		</p>
																	</div>
																</div>
																<div className="framer-jljtre" style={{ opacity: "1" }}>
																	<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1" }}>
																		<use href="#2047441354" />
																	</svg>
																</div>
															</div>
															<div className="framer-bfq796" style={{ opacity: "1" }}>
																<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																		Get Started
																	</p>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
										<div className="framer-ywxxy1">
											<div className="ssr-variant">
												<div className="framer-g59em3" style={{ willChange: "transform", height: "auto", aspectRatio: "1.76759 / 1", opacity: "1", transform: "perspective(1200px) translateY(66px) rotateX(8deg)" }}>
													<div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
														<img decoding="auto" width="1909" height="1080" sizes="(min-width: 1200px) calc(min(100vw - 32px, 1200px) - 20px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 8px, 1200px) - 20px), (max-width: 809.98px) calc(min(100vw - 8px, 1200px) - 8px)" srcSet="/assets/images/gl1adv7zctwmda6noze1iwv4ouq-dba8b8cc31.png 512w, /assets/images/gl1adv7zctwmda6noze1iwv4ouq-37b76922b4.png 1024w, /assets/images/gl1adv7zctwmda6noze1iwv4ouq-6977b19c0c.png 1909w" src="/assets/images/gl1adv7zctwmda6noze1iwv4ouq-6977b19c0c.png" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<footer className="framer-4ci17t">
								<div className="framer-1he0b7y">
									<div className="framer-1cvijec">
										<div className="framer-y05n1n">
											<div className="framer-blkg1e">
												<div className="framer-48xza5">
													<div className="framer-1c8dihg" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
															<strong className="framer-text">© 2026 Sente (Pty) Ltd. All Rights reserved.</strong>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="framer-zqsmk2">
											<div className="framer-hiubw3">
												<div className="framer-1hy3fqo">
													<div className="framer-1ef7bri" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
															<strong className="framer-text">Index</strong>
														</p>
													</div>
													<div className="framer-6mn5qe">
														<div className="framer-1lvrftj" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/#hero">Go to top</a>
															</p>
														</div>
														<div className="framer-1w2fe7b" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/#card-1">Features</a>
															</p>
														</div>
														<div className="framer-1hc1h47" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/#pricing">Pricing</a>
															</p>
														</div>
														<div className="framer-1rdpqno" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/#faq">FAQ</a>
															</p>
														</div>
													</div>
												</div>
												<div className="framer-1uuv6qn">
													<div className="framer-1p73xip" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
															<strong className="framer-text">Company</strong>
														</p>
													</div>
													<div className="framer-40dfnd">
														<div className="framer-yuayn1" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/about">About us</a>
															</p>
														</div>
														<div className="framer-ekn7ge" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/changelog">Updates</a>
															</p>
														</div>
														<div className="framer-1wfesal" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/contact">Contact</a>
															</p>
														</div>
														<div className="framer-5d043s" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/blog" data-framer-page-link-current="true">Blog</a>
															</p>
														</div>
														<div className="framer-vl1dbo" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/institutions">Institutions</a>
															</p>
														</div>
													</div>
												</div>
												<div className="framer-vxgbxp">
													<div className="framer-btbbsd" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
															<strong className="framer-text">Legal</strong>
														</p>
													</div>
													<div className="framer-80pc19">
														<div className="framer-1aq22m1" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/terms-of-use">Terms of Use</a>
															</p>
														</div>
														<div className="framer-1xwxtfw" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/privacy-policy">Privacy Policy</a>
															</p>
														</div>
														<div className="framer-2r3oiq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/cookie-policy">Cookie policy</a>
															</p>
														</div>
														<div className="framer-tvxe6p" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
																<a className="framer-text framer-styles-preset-1ioamtf" href="/bots">Bots</a>
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="framer-gtsb1f">
												<div className="ssr-variant hidden-o1vz9d">
													<svg className="framer-ms8g6c" data-framer-component-type="RichTextContainer" viewBox="0 0 85.52 45" style={{ transform: "none" }}>
														<foreignObject width="100%" height="100%" className="framer-fit-text" transform="scale(1)" style={{ overflow: "visible", transformOrigin: "center center" }}>
															<h1 dir="auto" style={{ "--font-selector": "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk", "--framer-font-family": "\"Inter Display\", \"Inter Display Placeholder\", sans-serif", "--framer-font-size": "36px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.07em", "--framer-line-height": "1.25em", "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))" }} className="framer-text">
																Sente
															</h1>
														</foreignObject>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</footer>
							<div className="framer-15r8o0p-container" />
							<div className="framer-fhtixq">
								<div className="framer-14tq56t" />
							</div>
						</>
					}>
						<div className="framer-1pjef6k-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px -80px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
							<div className="ssr-variant hidden-18g6p6c hidden-37kff1">
								<nav className="framer-FqwrZ framer-QQ1ys framer-eH0iv framer-8C4pO framer-sa5ze framer-a6gcv2" style={{ width: "100%" }}>
									<div className="framer-x1lkxr" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
										<div className="framer-zrg6ep">
											<a className="framer-6gbpnt framer-xe6ccp" href="/">
												<img alt="" className="framer-yDtge framer-1xpf2hp" src={"data:image/svg+xml,<svg display=\"block\" id=\"3375308364\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"vQrDtBADy\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.98823366859972px\" id=\"Y4atzCHU3\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(255, 255, 255)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.964633047234315px\" id=\"F_tPleDid\" width=\"40px\"/></g></svg>"} style={{ "--o4jego": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))" }} />
											</a>
										</div>
										<div className="framer-10lmnm" style={{ opacity: "1" }}>
											<div className="framer-utaw3n" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/">Home</a>
												</p>
											</div>
											<div className="framer-1gj43b5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/about">Company</a>
												</p>
											</div>
											<div className="framer-fqo0hv" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/blog" data-framer-page-link-current="true">Blog</a>
												</p>
											</div>
											<div className="framer-17vxnuu" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/changelog">Updates</a>
												</p>
											</div>
											<div className="framer-1dm8v9w" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/contact">Contact</a>
												</p>
											</div>
										</div>
										<div className="framer-ywrr35" style={{ opacity: "1" }}>
											<div className="framer-77d56h-container">
												<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-el9epz framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(255, 255, 255))" }}>
													<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(255, 255, 255))" }}>
														<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-63179b8e-7207-4483-969d-30dad423295a, rgb(235, 237, 250))", borderBottomLeftRadius: "var(--hover-border-bottom-left-radius, 0px)", borderBottomRightRadius: "var(--hover-border-bottom-right-radius, 0px)", borderTopLeftRadius: "var(--hover-border-top-left-radius, 0px)", borderTopRightRadius: "var(--hover-border-top-right-radius, 0px)", opacity: "1" }}>
															<div className="framer-182q4et">
																<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																		Get started
																	</p>
																</div>
															</div>
															<div className="framer-jljtre">
																<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
																	<use href="#2047441354" />
																</svg>
															</div>
														</div>
														<div className="framer-bfq796" style={{ opacity: "1" }}>
															<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(0, 0, 0))", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
																<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																	Get started
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div className="framer-ptikzx-container">
										<div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "1", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.1875px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "2", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.375px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "3", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.75px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "4", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(1.5px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "5", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(3px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "6", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(6px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "7", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(12px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "8", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(24px)" }} />
										</div>
									</div>
								</nav>
							</div>
							<div className="ssr-variant hidden-o1vz9d">
								<nav className="framer-FqwrZ framer-QQ1ys framer-eH0iv framer-8C4pO framer-sa5ze framer-a6gcv2 framer-v-8ihwrf" style={{ width: "100%" }}>
									<div className="framer-x1lkxr" style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}>
										<div className="framer-zrg6ep">
											<a className="framer-6gbpnt framer-xe6ccp" href="/">
												<img alt="" className="framer-yDtge framer-1xpf2hp" src={"data:image/svg+xml,<svg display=\"block\" id=\"3375308364\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"vQrDtBADy\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.98823366859972px\" id=\"Y4atzCHU3\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(255, 255, 255)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.964633047234315px\" id=\"F_tPleDid\" width=\"40px\"/></g></svg>"} style={{ "--o4jego": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))" }} />
											</a>
											<div className="framer-1kf9bok-container" aria-expanded="false" aria-label="Open navigation" data-rp-toggle="t6ea76772">
												<div className="framer-2Y7a7 framer-1mpyq25" tabIndex={0}>
													<div className="framer-rjj7k1" style={{ backgroundColor: "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "none" }} />
													<div className="framer-1c52wdg" style={{ backgroundColor: "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "none" }} />
												</div>
											</div>
										</div>
										<div className="framer-10lmnm" style={{ opacity: "0" }}>
											<div className="framer-utaw3n" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/">Home</a>
												</p>
											</div>
											<div className="framer-1gj43b5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/about">Company</a>
												</p>
											</div>
											<div className="framer-fqo0hv" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/blog" data-framer-page-link-current="true">Blog</a>
												</p>
											</div>
											<div className="framer-17vxnuu" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/changelog">Updates</a>
												</p>
											</div>
											<div className="framer-1dm8v9w" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94))", transform: "none" }}>
												<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6a468a94-f17b-47df-8134-c371f0077abe, rgb(51, 51, 94)))" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="/contact">Contact</a>
												</p>
											</div>
										</div>
										<div className="framer-ywrr35" style={{ opacity: "0" }}>
											<div className="framer-77d56h-container">
												<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-x6zijj framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(52, 54, 71))" }}>
													<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(52, 54, 71))" }}>
														<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-dbe2c2e3-57cd-4cb1-9c18-3b13c4096349, rgb(217, 255, 92))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
															<div className="framer-182q4et">
																<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																		Get started
																	</p>
																</div>
															</div>
															<div className="framer-jljtre">
																<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))" }}>
																	<use href="#2047441354" />
																</svg>
															</div>
														</div>
														<div className="framer-bfq796" style={{ opacity: "1" }}>
															<div className="framer-1mxkgk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																	Get started
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div className="framer-ptikzx-container">
										<div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "1", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.1875px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "2", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.375px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "3", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(0.75px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "4", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(1.5px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "5", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(3px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "6", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(6px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "7", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(12px)" }} />
											<div style={{ opacity: "1", position: "absolute", inset: "0", zIndex: "8", maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)", borderRadius: "0px", pointerEvents: "none", backdropFilter: "blur(24px)" }} />
										</div>
									</div>
								</nav>
							</div>
						</div>
						<div className="framer-cipNL framer-e6oiu framer-yVzhh framer-1din4jl" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
							<section className="framer-6h3kz1" id="hero">
								<div className="framer-vzy9ga">
									<div className="framer-1sllg5e" id="nav-trig">
										<div className="ssr-variant">
											<div className="framer-2km9yi-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
												<div className="framer-uFf4G framer-QQ1ys framer-yVzhh framer-qFJhv framer-1eactox" data-border="true" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgba(0, 0, 0, 0.5))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
													<div className="framer-1i3j5t7" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
														<svg className="framer-0nw0H framer-zxalav" role="presentation" viewBox="0 0 24 24" style={{ "--1m6trwb": "0", "--21h8s6": "rgb(0, 0, 0)", "--pgex8v": "1.5", transform: "translate(-50%, -50%)" }}>
															<use href="#1523066278" />
														</svg>
													</div>
													<div className="framer-os12c" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-wZ9kK1zmf-bkjB1FjjJ": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))", transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ))" }}>
															Blog
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="framer-12webea" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center" }}>
												A closer look at household finance.
											</h1>
										</div>
										<div className="framer-1w2s3vu" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgba(255, 255, 255, 0.75)" }}>
												<span style={{ "--framer-text-color": "rgba(255, 255, 255, 0.75)" }} className="framer-text">
													Publication begins on 1 December 2026, alongside Sente Beta Version 1. We’re preparing practical writing on household cash flow, shared financial decisions and the information behind them. Articles will appear here when they are ready to be useful, not simply to fill a feed.
												</span>
											</p>
										</div>
									</div>
								</div>
							</section>
							<section className="framer-2mu6e6">
								<div className="framer-yr6svv">
									<div className="framer-bw6rw0">
										<div className="ssr-variant">
											<div className="framer-1ascdrl-container" />
										</div>
									</div>
								</div>
							</section>
						</div>
						<div id="overlay" />
						<div className="framer-bdvkym" />
						<section className="framer-hqw45e">
							<div className="framer-tj1wkb">
								<div className="framer-fsxqme">
									<div className="framer-1xp6nhi">
										<div className="framer-1ijobej">
											<img alt="" className="framer-WxhmQ framer-1vm5nwj" src={"data:image/svg+xml,<svg display=\"block\" id=\"1361896474\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"i89qsUkhJ\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(0, 0, 0)\" height=\"39.98823366859972px\" id=\"fgc4QtRyx\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(0, 0, 0)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(0, 0, 0)\" height=\"39.964633047234315px\" id=\"mf4vCSWbT\" width=\"40px\"/></g></svg>"} style={{ "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" />
											<div className="framer-volkim" data-framer-component-type="RichTextContainer" style={{ "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="">
												<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
													Get to know your money.
												</h1>
											</div>
											<div className="framer-vvvaue" data-framer-component-type="RichTextContainer" style={{ "--from-opacity": "0", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="">
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
													Understand what you earn, what you spend, what you own, and what you owe, then see how it all connects to the life you're building and the decisions still ahead.
												</p>
											</div>
										</div>
										<div className="framer-16jtt5c-container" style={{ willChange: "transform", opacity: "0", transform: "translateY(96px)" }}>
											<div className="ssr-variant hidden-18g6p6c hidden-37kff1">
												<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-9wmjhx framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "rgb(0, 0, 0)" }}>
													<div className="framer-dh6mte" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
														<div className="framer-1mfh61l" style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
															<div className="framer-182q4et">
																<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																		Get Started
																	</p>
																</div>
															</div>
															<div className="framer-jljtre">
																<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))" }}>
																	<use href="#2047441354" />
																</svg>
															</div>
														</div>
														<div className="framer-bfq796" style={{ opacity: "1" }}>
															<div className="framer-1mxkgk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
																<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																	Get Started
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
											<div className="ssr-variant hidden-o1vz9d hidden-37kff1">
												<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-x6zijj framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "rgb(0, 0, 0)" }}>
													<div className="framer-dh6mte" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
														<div className="framer-1mfh61l" style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
															<div className="framer-182q4et">
																<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																		Get Started
																	</p>
																</div>
															</div>
															<div className="framer-jljtre">
																<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))" }}>
																	<use href="#2047441354" />
																</svg>
															</div>
														</div>
														<div className="framer-bfq796" style={{ opacity: "1" }}>
															<div className="framer-1mxkgk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-14sjhwi" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																	Get Started
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
											<div className="ssr-variant hidden-o1vz9d hidden-18g6p6c">
												<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-uuvcib framer-h192bh" data-reset="button" href="/launch" tabIndex={0} style={{ backgroundColor: "rgb(0, 0, 0)" }}>
													<div className="framer-dh6mte" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
														<div className="framer-1mfh61l" style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
															<div className="framer-182q4et">
																<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																		Get Started
																	</p>
																</div>
															</div>
															<div className="framer-jljtre">
																<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))" }}>
																	<use href="#2047441354" />
																</svg>
															</div>
														</div>
														<div className="framer-bfq796" style={{ opacity: "1" }}>
															<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																	Get Started
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div className="framer-ywxxy1">
										<div className="ssr-variant">
											<div className="framer-g59em3" style={{ willChange: "transform", height: "auto", aspectRatio: "1.7675925925925926", opacity: "1", transform: "perspective(1200px) translateY(66px) rotateX(8deg)" }}>
												<div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
													<img decoding="async" width="1909" height="1080" sizes="(min-width: 1200px) calc(min(100vw - 32px, 1200px) - 20px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 8px, 1200px) - 20px), (max-width: 809.98px) calc(min(100vw - 8px, 1200px) - 8px)" srcSet="/assets/images/gl1adv7zctwmda6noze1iwv4ouq-dba8b8cc31.png 512w, /assets/images/gl1adv7zctwmda6noze1iwv4ouq-37b76922b4.png 1024w, /assets/images/gl1adv7zctwmda6noze1iwv4ouq-6977b19c0c.png 1909w" src="/assets/images/gl1adv7zctwmda6noze1iwv4ouq-6977b19c0c.png" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<footer className="framer-4ci17t">
							<div className="framer-1he0b7y">
								<div className="framer-1cvijec">
									<div className="framer-y05n1n">
										<div className="framer-1bzndpn hidden-37kff1">
											<img alt="" className="framer-yDtge framer-hda1bv" src={"data:image/svg+xml,<svg display=\"block\" id=\"3375308364\" role=\"presentation\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"transparent\" height=\"39.99999962547838px\" id=\"vQrDtBADy\" transform=\"translate(0 0.001)\" width=\"40px\"><path d=\"M 0 39.988 L 19.937 39.937 C 20.318 27.928 11.072 19.971 0 19.971 Z M 39.949 0 L 20.011 0.051 C 19.631 12.06 28.877 20.018 39.949 20.018 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.98823366859972px\" id=\"Y4atzCHU3\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(255, 255, 255)\" transform=\"translate(0.035 0.012)\" width=\"39.948646591646934px\"/><path d=\"M 24.664 39.965 L 40 39.965 C 39.988 38.334 39.696 35.834 38.645 32.868 C 37.585 29.873 35.358 26.756 32.862 24.639 C 30.671 22.78 28.123 21.877 25.3 19.794 C 21.899 17.284 17.809 12.803 16.16 6.26 C 15.589 4.248 15.336 2.523 15.336 0 L 0 0 C 0 2.37 0.318 6.944 3.757 11.777 C 6.914 15.715 8.127 16.198 9.623 17.094 C 10.37 17.541 12.193 18.331 14.276 19.805 C 16.365 21.285 18.716 23.453 20.459 26.136 C 24.971 33.08 24.664 39.234 24.664 39.965 Z\" fill=\"rgb(255, 255, 255)\" height=\"39.964633047234315px\" id=\"F_tPleDid\" width=\"40px\"/></g></svg>"} />
										</div>
										<div className="framer-blkg1e">
											<div className="framer-48xza5">
												<div className="framer-1c8dihg" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
														<strong className="framer-text">© 2026 Sente (Pty) Ltd. All Rights reserved.</strong>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="framer-zqsmk2">
										<div className="framer-hiubw3">
											<div className="framer-1hy3fqo">
												<div className="framer-1ef7bri" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
														<strong className="framer-text">Index</strong>
													</p>
												</div>
												<div className="framer-6mn5qe">
													<div className="framer-1lvrftj" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/#hero">Go to top</a>
														</p>
													</div>
													<div className="framer-1w2fe7b" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/#card-1">Features</a>
														</p>
													</div>
													<div className="framer-1hc1h47" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/#pricing">Pricing</a>
														</p>
													</div>
													<div className="framer-1rdpqno" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/#faq">FAQ</a>
														</p>
													</div>
												</div>
											</div>
											<div className="framer-1uuv6qn">
												<div className="framer-1p73xip" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
														<strong className="framer-text">Company</strong>
													</p>
												</div>
												<div className="framer-40dfnd">
													<div className="framer-yuayn1" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/about">About us</a>
														</p>
													</div>
													<div className="framer-ekn7ge" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/changelog">Updates</a>
														</p>
													</div>
													<div className="framer-1wfesal" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/contact">Contact</a>
														</p>
													</div>
													<div className="framer-5d043s" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/blog" data-framer-page-link-current="true">Blog</a>
														</p>
													</div>
													<div className="framer-vl1dbo" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/institutions">Institutions</a>
														</p>
													</div>
												</div>
											</div>
											<div className="framer-vxgbxp">
												<div className="framer-btbbsd" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto">
														<strong className="framer-text">Legal</strong>
													</p>
												</div>
												<div className="framer-80pc19">
													<div className="framer-1aq22m1" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/terms-of-use">Terms of Use</a>
														</p>
													</div>
													<div className="framer-1xwxtfw" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/privacy-policy">Privacy Policy</a>
														</p>
													</div>
													<div className="framer-2r3oiq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/cookie-policy">Cookie policy</a>
														</p>
													</div>
													<div className="framer-tvxe6p" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<a className="framer-text framer-styles-preset-1ioamtf" href="/bots">Bots</a>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="framer-gtsb1f">
											<div className="ssr-variant hidden-18g6p6c hidden-37kff1">
												<svg className="framer-ms8g6c" data-framer-component-type="RichTextContainer" viewBox="0 0 751 395" style={{ transform: "none" }}>
													<foreignObject width="100%" height="100%" className="framer-fit-text" transform="scale(1)" style={{ overflow: "visible", transformOrigin: "center center" }}>
														<h1 dir="auto" style={{ "--font-selector": "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk", "--framer-font-family": "\"Inter Display\", \"Inter Display Placeholder\", sans-serif", "--framer-font-size": "294.85408028820757px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.07em", "--framer-line-height": "1.25em", "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))" }} className="framer-text">
															<span style={{ "--framer-font-size": "315.5970040962239px" }} className="framer-text">Sente</span>
														</h1>
													</foreignObject>
												</svg>
											</div>
											<div className="ssr-variant hidden-o1vz9d">
												<svg className="framer-ms8g6c" data-framer-component-type="RichTextContainer" viewBox="0 0 85.52 45" style={{ transform: "none" }}>
													<foreignObject width="100%" height="100%" className="framer-fit-text" transform="scale(1)" style={{ overflow: "visible", transformOrigin: "center center" }}>
														<h1 dir="auto" style={{ "--font-selector": "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk", "--framer-font-family": "\"Inter Display\", \"Inter Display Placeholder\", sans-serif", "--framer-font-size": "36px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.07em", "--framer-line-height": "1.25em", "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))" }} className="framer-text">
															Sente
														</h1>
													</foreignObject>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</footer>
						<div className="framer-15r8o0p-container" />
						<div className="framer-fhtixq">
							<div className="framer-14tq56t" />
						</div>
					</Toggle>
				</div>
				<div id="template-overlay" />
			</div>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function u(){function n(t,e,i){let r=document.createElement(\"a\");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener(\"click\",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute(\"href\");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,\"\",\"_blank\");let r=this.getAttribute(\"rel\")??\"\",c=this.getAttribute(\"target\")??\"\";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener(\"auxclick\",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute(\"href\");e&&n(e,\"\",\"_blank\")}function s(t){if(this.dataset.hydrated){this.removeEventListener(\"keydown\",s);return}if(t.key!==\"Enter\")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute(\"href\");if(!e)return;let i=this.getAttribute(\"rel\")??\"\",r=this.getAttribute(\"target\")??\"\";n(e,i,r)}document.querySelectorAll(\"[data-nested-link]\").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener(\"click\",o),t.addEventListener(\"auxclick\",a),t.addEventListener(\"keydown\",s))})}return u})()()" }} />
			<script dangerouslySetInnerHTML={{ __html: "var animator=(()=>{var Y=(e,t,r)=>r>t?t:r<e?e:r;var H=()=>{};function Z(e){let t;return()=>(t===void 0&&(t=e()),t)}var q=e=>e;var D=e=>e*1e3,P=e=>e/1e3;var U=e=>Array.isArray(e)&&typeof e[0]==\"number\";var F=(e,t,r=10)=>{let n=\"\",o=Math.max(Math.round(t/r),2);for(let i=0;i<o;i++)n+=Math.round(e(i/(o-1))*1e4)/1e4+\", \";return`linear(${n.substring(0,n.length-2)})`};function N(e,t=50,r=2e4,n){let o=0,i=e.next(o);for(n?.push(i.value);!i.done&&o<r;)o+=t,i=e.next(o),n?.push(i.value);return o>=r?1/0:o}function xe(e,t=100,r){let{keyframes:n,velocity:o}=e,i=n&&n[n.length-1]-n[0],a=r({...e,velocity:o&&i?o*t/i:o,keyframes:[0,t]}),f=Math.min(N(a),2e4);return{type:\"keyframes\",ease:s=>a.next(f*s).value/t,duration:P(f)}}var A={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},ge=e=>e<0?1/Math.max(1+e,A.minDamping):Math.max(1-e,A.minDamping);function ye(e,t){if(!(e>1))return 1;let r=Math.sqrt(e*e-1),n=e-r,o=e+r,i=2*r*Math.exp(-t)*(1+t);return Ae(a=>o*Math.exp(-n*a)-n*Math.exp(-o*a)-i,a=>Math.exp(-o*a)-Math.exp(-n*a),t)/t}function ee(e,t){return e*Math.sqrt(1-t*t)}var Be=12;function Ae(e,t,r){let n=r;for(let o=1;o<Be;o++)n=n-e(n)/t(n);return n}var Q=.001;function Ke({duration:e=A.duration,bounce:t=A.bounce}){let r,n;H(e<=D(A.maxDuration),\"Spring duration must be 10 seconds or less\",\"spring-duration-limit\");let o=ge(t);e=Y(A.minDuration,A.maxDuration,P(e)),o<1?(r=m=>{let p=m*o,c=p*e,x=ee(m,o),g=Math.exp(-c);return Q-p/x*g},n=m=>{let c=m*o*e,x=o*o*m*m*e,g=Math.exp(-c),y=ee(m*m,o);return(-r(m)+Q>0?-1:1)*-x*g/y}):(r=m=>{let p=Math.exp(-m*e),c=m*e+1;return-Q+p*c},n=m=>{let p=Math.exp(-m*e),c=-m*(e*e);return p*c});let i=5/e,a=Ae(r,n,i),f=a*ye(o,a*e),s=f*f;return{stiffness:s,damping:o*2*Math.sqrt(s),duration:D(e)}}var te=(e,t)=>(t?e>=0:e>0)&&e<1/0;function J(e,t){if(te(e,t))return e}function Ge(e){let t=J(e.stiffness),r=J(e.damping,!0),n=J(e.mass),o={...e,stiffness:t??A.stiffness,damping:r??A.damping,mass:n??A.mass,isResolvedFromDuration:!1,isTimeDefined:(t??r??n)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(o.isTimeDefined){if(e.visualDuration){let i=ge(e.bounce||0),a=2*Math.PI/(e.visualDuration*1.2)*ye(i,2*Math.PI/1.2);o.stiffness=a*a,o.damping=2*i*Math.sqrt(o.stiffness)}else Object.assign(o,Ke(o)),o.isResolvedFromDuration=!0;(!te(o.stiffness)||!te(o.damping,!0))&&(o.stiffness=A.stiffness,o.damping=A.damping)}return o}function E(e=A.visualDuration,t=A.bounce){let r=typeof e!=\"object\"?{visualDuration:e,keyframes:[0,1],bounce:t}:e,n=r.keyframes[0],o=r.keyframes[r.keyframes.length-1],i={done:!1,value:n},{stiffness:a,damping:f,mass:s,duration:m,isResolvedFromDuration:p,isTimeDefined:c}=Ge({...r}),x=d=>c?0:-P(d),g=f/(2*Math.sqrt(a*s)),y=P(Math.sqrt(a/s)),h=g*y,u={target:o,delta:o-n,velocity:x(r.velocity||0)||0,restSpeed:0,restDelta:0},K=()=>{let d=Math.abs(u.delta)<5;u.restSpeed=r.restSpeed||(d?A.restSpeed.granular:A.restSpeed.default),u.restDelta=r.restDelta||(d?A.restDelta.granular:A.restDelta.default)};K();let O,v,b;if(g<1){let d=ee(y,g),l={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{l.A=(u.velocity+h*u.delta)/d,l.sinC=h*l.A+u.delta*d,l.cosC=h*u.delta-l.A*d};let V=S=>{S!==l.t&&(l.t=S,l.env=Math.exp(-h*S),l.sin=Math.sin(d*S),l.cos=Math.cos(d*S))};O=S=>(V(S),u.target-l.env*(l.A*l.sin+u.delta*l.cos)),v=S=>(V(S),l.env*(l.sinC*l.sin+l.cosC*l.cos))}else if(g===1){O=l=>u.target-Math.exp(-y*l)*(u.delta+(u.velocity+y*u.delta)*l);let d={C:0};b=()=>{d.C=u.velocity+y*u.delta},v=l=>Math.exp(-y*l)*(y*d.C*l-u.velocity)}else{let d=y*Math.sqrt(g*g-1),l=h-d,V=h+d,S=c?1/0:300/d,z=(T,X)=>Math.exp(X>S?-T*S-h*(X-S):-T*X),C={S:0,F:0};b=()=>{let T=(u.velocity+h*u.delta)/d;C.S=(u.delta+T)/2,C.F=(u.delta-T)/2},O=T=>u.target-C.S*z(l,T)-C.F*z(V,T),v=T=>l*C.S*z(l,T)+V*C.F*z(V,T)}b();let de=p&&m||null,R={calculatedDuration:de,retarget:(d,l)=>{u.target=d[d.length-1],u.delta=u.target-d[0],u.velocity=x(l),r.restSpeed&&r.restDelta||K(),R.calculatedDuration=de,i.done=!1,b()},velocity:d=>D(v(d)),next:d=>{let l=O(d);if(p)i.done=d>=m;else{let V=D(v(d));i.done=Math.abs(V)<=u.restSpeed&&Math.abs(u.target-l)<=u.restDelta}return i.value=i.done?u.target:l,i},toString:()=>{let d=Math.min(N(R),2e4),l=F(V=>R.next(d*V).value,d,30);return d+\"ms \"+l},toTransition:()=>{}};return R}E.applyToOptions=e=>{let t=xe(e,100,E);return e.ease=t.ease,e.duration=D(t.duration),e.type=\"keyframes\",e};var he=[\"transformPerspective\",\"x\",\"y\",\"z\",\"translateX\",\"translateY\",\"translateZ\",\"scale\",\"scaleX\",\"scaleY\",\"rotate\",\"rotateX\",\"rotateY\",\"rotateZ\",\"skew\",\"skewX\",\"skewY\"],re=new Set([...he,\"pathRotation\"]);var Se={};function Te(e,t){let r=Z(e);return()=>Se[t]??r()}var Ve=Te(()=>{try{document.createElement(\"div\").animate({opacity:0},{easing:\"linear(0, 1)\"})}catch{return!1}return!0},\"linearEasing\");var w=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`;var oe={linear:\"linear\",ease:\"ease\",easeIn:\"ease-in\",easeOut:\"ease-out\",easeInOut:\"ease-in-out\",circIn:w([0,.65,.55,1]),circOut:w([.55,0,1,.45]),backIn:w([.31,.01,.66,-.59]),backOut:w([.33,1.53,.69,.99])};function ne(e,t){if(e)return typeof e==\"function\"?Ve()?F(e,t):\"ease-out\":U(e)?w(e):Array.isArray(e)?e.map(r=>ne(r,t)||oe.easeOut):oe[e]}function $(e,t,r,{delay:n=0,duration:o=300,repeat:i=0,repeatType:a=\"loop\",ease:f=\"easeOut\",times:s}={},m=void 0){let p={[t]:r};s&&(p.offset=s);let c=ne(f,o);Array.isArray(c)&&(p.easing=c);let x={delay:n,duration:o,easing:Array.isArray(c)?\"linear\":c,fill:\"both\",iterations:i+1,direction:a===\"reverse\"?\"alternate\":\"normal\"};return m&&(x.pseudoElement=m),e.animate(p,x)}function Me(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}var j=\"framerAppearId\",ie=\"data-\"+Me(j);function ae(e){return e.props[ie]}var M=new Map,k=new Map;var I=(e,t)=>{let r=re.has(t)?\"transform\":t;return`${e}: ${r}`};function se(e,t,r){let n=I(e,t),o=M.get(n);if(!o)return null;let{animation:i,startTime:a}=o;function f(){window.MotionCancelOptimisedAnimation?.(e,t,r)}return i.onfinish=f,a===null||window.MotionHandoffIsComplete?.(e)?(f(),null):a}var W,B,pe=new Set;function Le(){pe.forEach(e=>{e.animation.play(),e.animation.startTime=e.startTime}),pe.clear()}function me(e,t,r,n,o){if(window.MotionIsMounted)return;let i=e.dataset[j];if(!i)return;window.MotionHandoffAnimation=se;let a=I(i,t);B||(B=$(e,t,[r[0],r[0]],{duration:1e4,ease:\"linear\"}),M.set(a,{animation:B,startTime:null}),window.MotionHandoffAnimation=se,window.MotionHasOptimisedAnimation=(s,m)=>{if(!s)return!1;if(!m)return k.has(s);let p=I(s,m);return!!M.get(p)},window.MotionHandoffMarkAsComplete=s=>{k.has(s)&&k.set(s,!0)},window.MotionHandoffIsComplete=s=>k.get(s)===!0,window.MotionCancelOptimisedAnimation=(s,m,p,c)=>{let x=I(s,m),g=M.get(x);g&&(p&&c===void 0?p.postRender(()=>{p.postRender(()=>{g.animation.cancel()})}):g.animation.cancel(),p&&c?(pe.add(g),p.render(Le)):(M.delete(x),M.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(s,m,p)=>{let c=ae(s);if(!c)return;let x=window.MotionHasOptimisedAnimation?.(c,m),g=s.props.values?.[m];if(!x||!g)return;let y=p.on(\"change\",h=>{g.get()!==h&&(window.MotionCancelOptimisedAnimation?.(c,m),y())});return y});let f=()=>{B.cancel();let s=$(e,t,r,n);W===void 0&&(W=performance.now()),s.startTime=W,M.set(a,{animation:s,startTime:W}),o&&o(s)};k.set(i,!1),B.ready?B.ready.then(f).catch(q):f()}var fe=[\"transformPerspective\",\"x\",\"y\",\"z\",\"translateX\",\"translateY\",\"translateZ\",\"scale\",\"scaleX\",\"scaleY\",\"rotate\",\"rotateX\",\"rotateY\",\"rotateZ\",\"skew\",\"skewX\",\"skewY\"],Re={x:\"translateX\",y:\"translateY\",z:\"translateZ\",transformPerspective:\"perspective\"},ze={translateX:\"px\",translateY:\"px\",translateZ:\"px\",x:\"px\",y:\"px\",z:\"px\",perspective:\"px\",transformPerspective:\"px\",rotate:\"deg\",rotateX:\"deg\",rotateY:\"deg\"};function ve(e,t){let r=ze[e];return!r||typeof t==\"string\"&&t.endsWith(r)?t:`${t}${r}`}function ce(e){return fe.includes(e)}var Fe=(e,t)=>fe.indexOf(e)-fe.indexOf(t);function be({transform:e,transformKeys:t},r){let n={},o=!0,i=\"\";t.sort(Fe);for(let a of t){let f=e[a],s=!0;typeof f==\"number\"?s=f===(a.startsWith(\"scale\")?1:0):s=parseFloat(f)===0,s||(o=!1,i+=`${Re[a]||a}(${e[a]}) `),r&&(n[a]=e[a])}return i=i.trim(),r?i=r(n,i):o&&(i=\"none\"),i}function le(e,t){let r=new Set(Object.keys(e));for(let n in t)r.add(n);return Array.from(r)}function ue(e,t){let r=t-e.length;if(r<=0)return e;let n=new Array(r).fill(e[e.length-1]);return e.concat(n)}function G(e){return e*1e3}var Ee={duration:.001},L={opacity:1,scale:1,translateX:0,translateY:0,translateZ:0,x:0,y:0,z:0,rotate:0,rotateX:0,rotateY:0};function we(e,t,r,n,o){return r.delay&&(r.delay=G(r.delay)),r.type===\"spring\"?$e(e,t,r,n,o):We(e,t,r,n,o)}function Ne(e,t,r){let n={},o=0,i=0;for(let a of le(e,t)){let f=e[a]??L[a],s=t[a]??L[a];if(f===void 0||s===void 0||a!==\"transformPerspective\"&&f===s&&f===L[a])continue;a===\"transformPerspective\"&&(n[a]=[f,s]);let m=qe(f,s,r),{duration:p,keyframes:c}=m;p===void 0||c===void 0||(p>o&&(o=p,i=c.length),n[a]=c)}return{keyframeValuesByProps:n,longestDuration:o,longestLength:i}}function $e(e,t,r,n,o){let i={},{keyframeValuesByProps:a,longestDuration:f,longestLength:s}=Ne(e,t,r);if(!s)return i;let m={ease:\"linear\",duration:f,delay:r.delay},p=o?Ee:m,c={};for(let[g,y]of Object.entries(a))ce(g)?c[g]=ue(y,s):i[g]={keyframes:ue(y,s),options:g===\"opacity\"?m:p};let x=Ce(c,n);return x&&(i.transform={keyframes:x,options:p}),i}function je(e){let{type:t,duration:r,...n}=e;return{duration:G(r),...n}}function We(e,t,r,n,o){let i=je(r);if(!i)return;let a={},f=o?Ee:i,s={};for(let p of le(e,t)){let c=e[p]??L[p],x=t[p]??L[p];c===void 0||x===void 0||p!==\"transformPerspective\"&&c===x||(ce(p)?s[p]=[c,x]:a[p]={keyframes:[c,x],options:p===\"opacity\"?i:f})}let m=Ce(s,n);return m&&(a.transform={keyframes:m,options:f}),a}var Xe=[\"duration\",\"bounce\"],Ye=[\"stiffness\",\"damping\",\"mass\"];function Oe(e){return Ye.some(t=>t in e)?!1:Xe.some(t=>t in e)}function He(e,t,r){return Oe(r)?`${e}-${t}-${r.duration}-${r.bounce}`:`${e}-${t}-${r.damping}-${r.stiffness}-${r.mass}`}function Ze(e){return Oe(e)?{...e,duration:G(e.duration)}:e}var De=new Map,Pe=10;function qe(e,t,r){let n=He(e,t,r),o=De.get(n);if(o)return o;let i=[e,t],a=E({...Ze(r),keyframes:i}),f={done:!1,value:i[0]},s=[],m=0;for(;!f.done&&m<G(10);)f=a.next(m),s.push(f.value),m+=Pe;i=s;let p=m-Pe,x={keyframes:i,duration:p,ease:\"linear\"};return De.set(n,x),x}function Ce(e,t){let r=[],n=Object.values(e)[0]?.length;if(!n)return;let o=Object.keys(e);for(let i=0;i<n;i++){let a={};for(let[s,m]of Object.entries(e)){let p=m[i];p!==void 0&&(a[s]=ve(s,p))}let f=be({transform:a,transformKeys:o},t);r.push(f)}return r}function Ue(e,t){if(!t)for(let r in e){let n=e[r];return n?.legacy===!0?n:void 0}}function ke(e,t,r,n,o,i){for(let[a,f]of Object.entries(e)){let s=i?f[i]:void 0;if(s===null||!s&&f.default===null)continue;let m=s??f.default??Ue(f,i);if(!m)continue;let{initial:p,animate:c,transformTemplate:x}=m;if(!p||!c)continue;let{transition:g,...y}=c,h=we(p,y,g,_e(x,n),o);if(!h)continue;let u={},K={};for(let[v,b]of Object.entries(h))u[v]=b.keyframes,K[v]=b.options;let O=i?`:not(.hidden-${i}) `:\"\";t(`${O}[${r}=\"${a}\"]`,u,K)}}function _e(e,t){if(!(!e||!t))return(r,n)=>e.replace(t,n)}function Ie(e){return e?e.find(r=>r.mediaQuery?window.matchMedia(r.mediaQuery).matches===!0:!1)?.hash:void 0}var br={animateAppearEffects:ke,getActiveVariantHash:Ie,spring:E,startOptimizedAppearAnimation:me};return br})()" }} />
			<script dangerouslySetInnerHTML={{ __html: "typeof document<\"u\"&&(window.process={...window.process,env:{...window.process?.env,NODE_ENV:\"production\"}});" }} />
			<div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
				<svg id="2047441354" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0 7 L 18 7 M 18 7 L 11 0 M 18 7 L 11 14" fill="transparent" height="14px" id="OkGDCS1yo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 5)" width="18px" />
				</svg>
				{" "}
				<svg id="1523066278" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 12.75 0 C 11.093 0 9.75 1.343 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 L 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 C 9.75 14.843 11.093 13.5 12.75 13.5 L 19.5 13.5 L 19.5 0 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="VaJ0SXoYw" transform="translate(2.25 5.25)" width="19.5px" />
					<path d="M 0 3 C 0 1.343 1.343 0 3 0 L 9.75 0 L 9.75 13.5 L 3 13.5 C 1.343 13.5 0 14.843 0 16.5" fill="transparent" height="16.5px" id="oAakIlfTx" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 5.25)" width="9.75px" />
					<path d="M 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 L 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 Z" fill="transparent" height="16.5px" id="imv5_mFb8" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 5.25)" width="9.75px" />
				</svg>
			</div>
		</>
	);
}
