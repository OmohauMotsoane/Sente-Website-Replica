import type { Metadata, Viewport } from "next";
import Cta from "@/components/cta";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Sente | Personal Finance, In One Place" },
	description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
	alternates: { canonical: "/contact", },
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
		"og:url": "https://www.sente.finance/contact",
	},
};

export const viewport: Viewport = { width: "device-width", initialScale: undefined };

export default function Page() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function p(){function s(e){let t=new URL(e);return`${t.origin}${t.pathname}`.replace(/\\/$/u,\"\")}function c(e){return e.split(\"-\")[0]}function g(){let e=window.location.hostname,t=new Map;return document.querySelectorAll('link[rel=\"alternate\"]').forEach(n=>{let r=n.getAttribute(\"hreflang\"),o=n.getAttribute(\"href\");!r||!o||new URL(o).hostname!==e||t.set(r,o)}),t}function d(e,t){return t.has(\"x-default\")?t.get(e)===t.get(\"x-default\"):!1}function h(){let e=navigator.languages;try{let t=localStorage.preferredLocale;return t?[t,...e]:e}catch{return e}}function i(e){s(window.location.href)!==s(e)&&window.location.replace(e+window.location.search+window.location.hash)}if(navigator.webdriver||/bot|-google|google-|yandex|ia_archiver|crawl|spider/i.test(navigator.userAgent))return;let l=document.documentElement,u=l.getAttribute(\"lang\");if(!u)return;let a=g();if(!d(u,a))return;let f=h();if(l.hasAttribute(\"data-redirect-timezone\")){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=f[0]?.startsWith(\"en\"),n=e===\"Europe/London\";if(t&&!n||!t&&n)return;let r=a.get(\"en-GB\");if(t&&n&&r){i(r);return}}for(let e of f){let t=a.get(e);if(t){i(t);return}let n=c(e);for(let[r,o]of a)if(c(r)===n){i(o);return}}}return p})()()" }} />
			<div id="main">
				<div className="framer-ywV1D framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-o1vz9d" data-layout-template="true" style={{ "--107bztt": "var(--token-63179b8e-7207-4483-969d-30dad423295a, rgb(235, 237, 250))", minHeight: "100vh", width: "auto" }}>
					<SiteHeader path={"/contact"} />
					<div className="framer-XUIwS framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-jeyCq framer-8C4pO framer-12uyuu7" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
						<section className="framer-1lurkzg">
							<div className="framer-1u6ikfu">
								<div className="framer-nuxgkh">
									<div className="framer-1alfhfr">
										<div className="framer-1situqr" id="nav-trig">
											<div className="framer-pva52c">
												<div className="framer-1hnf3vw-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
													<div className="framer-uFf4G framer-QQ1ys framer-yVzhh framer-qFJhv framer-1eactox" data-border="true" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgba(0, 0, 0, 0.5))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
														<div className="framer-1i3j5t7" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
															<svg className="framer-C6MlI framer-zxalav" role="presentation" viewBox="0 0 24 24" style={{ "--1m6trwb": "0", "--21h8s6": "rgb(0, 0, 0)", "--pgex8v": "1.5", transform: "translate(-50%, -50%)" }}>
																<use href="#986463349" />
															</svg>
														</div>
														<div className="framer-os12c" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-wZ9kK1zmf-bkjB1FjjJ": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))", transform: "none" }}>
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ))" }}>
																Talk to Us
															</p>
														</div>
													</div>
												</div>
												<div className="ssr-variant hidden-9tzjdz">
													<div className="framer-1xslu78" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
														<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto">Speak to the people building Sente.</h1>
													</div>
												</div>
												<div className="ssr-variant hidden-1j75tiq hidden-12uyuu7">
													<div className="framer-1xslu78" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
														<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center" }}>
															Speak to the people building Sente.
														</h1>
													</div>
												</div>
											</div>
											<div className="ssr-variant hidden-9tzjdz">
												<div className="framer-es4tkn" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "left" }}>
														Questions about the December beta, household access or connecting your accounts? Tell us what you need to know. Write to hello@sente.finance or use the form below.
													</p>
												</div>
											</div>
											<div className="ssr-variant hidden-1j75tiq hidden-12uyuu7">
												<div className="framer-es4tkn" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
													<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center" }}>
														Questions about the December beta, household access or connecting your accounts? Tell us what you need to know. Write to hello@sente.finance or use the form below.
													</p>
												</div>
											</div>
										</div>
										<div className="framer-1w5mxve" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<div className="ssr-variant hidden-9tzjdz">
												<div className="framer-1vx107s" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgb(147, 145, 184))" }}>
														<a className="framer-text framer-styles-preset-1ioamtf" href="/institutions">
															<span style={{ "--framer-text-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgb(147, 145, 184))" }} className="framer-text">
																<strong className="framer-text">Explore the institution directory.</strong>
															</span>
														</a>
													</p>
												</div>
											</div>
											<div className="ssr-variant hidden-1j75tiq hidden-12uyuu7">
												<div className="framer-1vx107s" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgb(147, 145, 184))" }}>
														<span style={{ "--framer-text-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgb(147, 145, 184))" }} className="framer-text">
															<strong className="framer-text">Explore the institution directory.</strong>
														</span>
													</p>
												</div>
											</div>
											<div className="framer-1cddh7t" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
													<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
														Confirmed coverage will be listed ahead of the beta. Check the directory before relying on a particular connection.
													</span>
												</p>
											</div>
										</div>
									</div>
									<div className="framer-ueax54" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
										<div className="framer-19njaug">
											<div className="ssr-variant hidden-9tzjdz hidden-1j75tiq">
												<div className="framer-1ceqwq6" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "rgb(0, 0, 0)" }}>
														Contact Us
													</h3>
												</div>
											</div>
											<div className="ssr-variant hidden-12uyuu7">
												<div className="framer-1ceqwq6" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgb(0, 0, 0)" }}>
														Contact Us
													</h3>
												</div>
											</div>
											<div className="ssr-variant hidden-9tzjdz hidden-1j75tiq">
												<div className="framer-1wmbitq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "right", "--framer-text-color": "rgba(0, 0, 0, 0.75)" }}>
														{"Feel free to fill the contact form, or reach us via "}
														<a className="framer-text framer-styles-preset-1jyh17t" href="mailto:hello@sente.finance" rel="">
															hello@sente.finance
														</a>
													</p>
												</div>
											</div>
											<div className="ssr-variant hidden-12uyuu7">
												<div className="framer-1wmbitq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "rgba(0, 0, 0, 0.75)" }}>
														{"Feel free to fill the contact form, or reach us via "}
														<a className="framer-text framer-styles-preset-1jyh17t" href="mailto:hello@sente.finance" rel="">
															hello@sente.finance
														</a>
													</p>
												</div>
											</div>
										</div>
										<form className="framer-ow07qo" method="post" data-form="form">
											<div className="framer-2ip2qn">
												<label className="framer-bmzfub">
													<div className="framer-zcvdw4" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<strong className="framer-text">First Name*</strong>
														</p>
													</div>
													<div className="framer-form-text-input framer-form-input-wrapper framer-1rvcvfv framer-form-text-input-type">
														<input type="text" required name="First Name" placeholder="James" className="framer-form-input framer-form-input-empty" defaultValue="" />
													</div>
												</label>
												<label className="framer-1t0wm4x">
													<div className="framer-oiolt" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
															<strong className="framer-text">Last Name*</strong>
														</p>
													</div>
													<div className="framer-form-text-input framer-form-input-wrapper framer-1jhkqq1 framer-form-text-input-type">
														<input type="text" required name="Last Name" placeholder="Smith" className="framer-form-input framer-form-input-empty" defaultValue="" />
													</div>
												</label>
											</div>
											<label className="framer-144y6hv">
												<div className="framer-117ph6k" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
														<strong className="framer-text">Email Address*</strong>
													</p>
												</div>
												<div className="framer-form-text-input framer-form-input-wrapper framer-z246u7">
													<input type="email" required name="Email" placeholder="you@example.com" className="framer-form-input framer-form-input-empty" defaultValue="" />
												</div>
											</label>
											<label className="framer-1fg8trk">
												<div className="framer-10neah8" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
														<strong className="framer-text">Phone Number</strong>
													</p>
												</div>
												<div className="framer-form-text-input framer-form-input-wrapper framer-e8xpga framer-form-text-input-type">
													<input type="text" name="Company Name" placeholder="+00 ..." className="framer-form-input framer-form-input-empty" defaultValue="" />
												</div>
											</label>
											<label className="framer-8ew3wr">
												<div className="framer-u0oo5m" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
													<p className="framer-text framer-styles-preset-ftfde0" dir="auto">
														<strong className="framer-text">How can we help?*</strong>
													</p>
												</div>
												<div className="framer-form-text-input framer-form-input-wrapper framer-1tvk69e framer-form-textarea-input-type">
													<textarea required name="Company Name" placeholder="Let us know how we can help." className="framer-form-input" />
												</div>
											</label>
											<div className="ssr-variant hidden-9tzjdz hidden-1j75tiq">
												<div className="framer-1tvjq6v-container">
													<button name="Action Wrapper" type="submit" className="framer-0AkP6 framer-sa5ze framer-QQ1ys framer-O2uCb framer-cg6z9f framer-v-1ar64gm" data-reset="button" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", width: "100%" }}>
														<div className="framer-yebsdj" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
															<div className="framer-x94yz9" style={{ backgroundColor: "rgb(0, 0, 0)", opacity: "1" }}>
																<div className="framer-1yjlrfb">
																	<div className="framer-fskvd5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-WvjfsTsUS)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-WvjfsTsUS": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "var(--hover-opacity, 0)", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-WvjfsTsUS))" }}>
																			Send
																		</p>
																	</div>
																</div>
																<div className="framer-3ibys2">
																	<svg className="framer-m6IyR framer-iv5xls" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
																		<use href="#2047441354" />
																	</svg>
																</div>
															</div>
															<div className="framer-h8i3pj" style={{ opacity: "1" }}>
																<div className="framer-18vv53d" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-WvjfsTsUS)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-WvjfsTsUS": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-WvjfsTsUS))" }}>
																		Send
																	</p>
																</div>
															</div>
														</div>
													</button>
												</div>
											</div>
											<div className="ssr-variant hidden-12uyuu7">
												<div className="framer-1tvjq6v-container">
													<button name="Action Wrapper" type="submit" className="framer-0AkP6 framer-sa5ze framer-QQ1ys framer-O2uCb framer-cg6z9f framer-v-c0bypb" data-reset="button" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", width: "100%" }}>
														<div className="framer-yebsdj" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
															<div className="framer-x94yz9" style={{ backgroundColor: "rgb(0, 0, 0)", opacity: "1" }}>
																<div className="framer-1yjlrfb">
																	<div className="framer-fskvd5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-WvjfsTsUS)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-WvjfsTsUS": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "0", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-WvjfsTsUS))" }}>
																			Send
																		</p>
																	</div>
																</div>
																<div className="framer-3ibys2">
																	<svg className="framer-m6IyR framer-iv5xls" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
																		<use href="#2047441354" />
																	</svg>
																</div>
															</div>
															<div className="framer-h8i3pj" style={{ opacity: "1" }}>
																<div className="framer-18vv53d" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-WvjfsTsUS)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-WvjfsTsUS": "var(--token-ff87850c-0097-46f6-ba62-c7ecc38e2ea8, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
																	<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-WvjfsTsUS))" }}>
																		Send
																	</p>
																</div>
															</div>
														</div>
													</button>
												</div>
											</div>
											<input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="message" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="subject" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="title" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="description" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="feedback" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="notes" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="details" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="remarks" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
											<input type="text" name="comments" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: "absolute", transform: "scale(0)" }} defaultValue="" />
										</form>
									</div>
								</div>
								<div className="framer-wqqxam">
									<div className="ssr-variant hidden-9tzjdz hidden-1j75tiq">
										<div className="framer-1yqne08-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-qcYld framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1337855821" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Questions before launch
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Explore how Sente approaches household finances, forecasts and account connections.
															</p>
														</div>
													</div>
													<div className="framer-immxzi-container">
														<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-el9epz framer-h192bh" data-reset="button" href="/#faq" tabIndex={0} style={{ backgroundColor: "rgb(255, 255, 255)" }}>
															<div className="framer-dh6mte" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
																<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", borderBottomLeftRadius: "var(--hover-border-bottom-left-radius, 0px)", borderBottomRightRadius: "var(--hover-border-bottom-right-radius, 0px)", borderTopLeftRadius: "var(--hover-border-top-left-radius, 0px)", borderTopRightRadius: "var(--hover-border-top-right-radius, 0px)", opacity: "1" }}>
																	<div className="framer-182q4et">
																		<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "rgba(255, 255, 255, 0.75)", opacity: "1", transform: "none" }}>
																			<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																				Read the FAQ
																			</p>
																		</div>
																	</div>
																	<div className="framer-jljtre">
																		<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgba(255, 255, 255, 0.75)" }}>
																			<use href="#2047441354" />
																		</svg>
																	</div>
																</div>
																<div className="framer-bfq796" style={{ opacity: "1" }}>
																	<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgba(0, 0, 0, 0.75)", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																			Read the FAQ
																		</p>
																	</div>
																</div>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-12uyuu7">
										<div className="framer-1yqne08-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-qcYld framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1337855821" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Questions before launch
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Explore how Sente approaches household finances, forecasts and account connections.
															</p>
														</div>
													</div>
													<div className="framer-immxzi-container">
														<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-wqcabq framer-h192bh" data-reset="button" href="/#faq" tabIndex={0} style={{ backgroundColor: "rgb(255, 255, 255)" }}>
															<div className="framer-dh6mte" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
																<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
																	<div className="framer-182q4et">
																		<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "rgba(255, 255, 255, 0.75)", opacity: "1", transform: "none" }}>
																			<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																				Read the FAQ
																			</p>
																		</div>
																	</div>
																	<div className="framer-jljtre">
																		<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgba(255, 255, 255, 0.75)" }}>
																			<use href="#2047441354" />
																		</svg>
																	</div>
																</div>
																<div className="framer-bfq796" style={{ opacity: "1" }}>
																	<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgba(0, 0, 0, 0.75)", opacity: "1", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																			Read the FAQ
																		</p>
																	</div>
																</div>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant">
										<div className="framer-12er9xb-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-bkyOk framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#4011614651" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Changelog
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Beta Version 1 is scheduled for 1 December 2026. Follow the release notes as Sente develops.
															</p>
														</div>
													</div>
													<div className="framer-immxzi-container">
														<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-el9epz framer-h192bh" data-reset="button" href="/changelog" tabIndex={0} style={{ backgroundColor: "rgb(255, 255, 255)" }}>
															<div className="framer-dh6mte" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
																<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", borderBottomLeftRadius: "var(--hover-border-bottom-left-radius, 0px)", borderBottomRightRadius: "var(--hover-border-bottom-right-radius, 0px)", borderTopLeftRadius: "var(--hover-border-top-left-radius, 0px)", borderTopRightRadius: "var(--hover-border-top-right-radius, 0px)", opacity: "1" }}>
																	<div className="framer-182q4et">
																		<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "rgba(255, 255, 255, 0.75)", opacity: "1", transform: "none" }}>
																			<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																				View Updates
																			</p>
																		</div>
																	</div>
																	<div className="framer-jljtre">
																		<svg className="framer-m6IyR framer-25945m" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgba(255, 255, 255, 0.75)" }}>
																			<use href="#2047441354" />
																		</svg>
																	</div>
																</div>
																<div className="framer-bfq796" style={{ opacity: "1" }}>
																	<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgba(0, 0, 0, 0.75)", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
																		<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																			View Updates
																		</p>
																	</div>
																</div>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div id="overlay" />
					<div className="framer-bdvkym" />
					<Cta path={"/contact"} />
					<SiteFooter path={"/contact"} />
					<div className="framer-15r8o0p-container" />
					<div className="framer-fhtixq">
						<div className="framer-14tq56t" />
					</div>
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
				{" "}
				<svg id="986463349" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.2496431275787px" id="OGSK26yEB" transform="translate(3.75 3)" width="17.249643127578704px" />
					<path d="M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z" fill="transparent" height="17.2496431275787px" id="adDXvOUTL" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3)" width="17.249643127578704px" />
				</svg>
				{" "}
				<svg id="1337855821" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 10 2 C 6 -0.667 4 -0.667 0 2 L 0 18 C 4 15.5 6 15.5 10 18 M 10 2 L 10 18 M 10 2 C 14 -0.667 16 -0.667 20 2 L 20 18 C 16 15.5 14 15.5 10 18" fill="transparent" height="18px" id="LvEHq2RXw" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="20px" />
				</svg>
				{" "}
				<svg id="4011614651" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0 7 C 3.866 7 7 3.866 7 0 C 7 3.866 10.134 7 14 7 C 10.134 7 7 10.134 7 14 C 7 10.134 3.866 7 0 7 Z" fill="transparent" height="14px" id="kiaVtanAf" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(7 7)" width="14px" />
					<path d="M 0 3.5 C 1.933 3.5 3.5 1.933 3.5 0 C 3.5 1.933 5.067 3.5 7 3.5 C 5.067 3.5 3.5 5.067 3.5 7 C 3.5 5.067 1.933 3.5 0 3.5 Z" fill="transparent" height="7px" id="fCSr0otN3" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="7px" />
				</svg>
			</div>
		</>
	);
}
