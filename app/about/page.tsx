import type { Metadata, Viewport } from "next";
import Cta from "@/components/cta";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "About Sente | Your money, in perspective" },
	description: "Why Sente exists: to help people and households understand their money, plan ahead and see the bigger picture.",
	alternates: { canonical: "/about", },
	robots: "max-image-preview:large",
	openGraph: {
		title: "About Sente | Your money, in perspective",
		description: "Why Sente exists: to help people and households understand their money, plan ahead and see the bigger picture.",
		type: "website",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Sente | Your money, in perspective",
		description: "Why Sente exists: to help people and households understand their money, plan ahead and see the bigger picture.",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	other: {
		"og:url": "https://www.sente.finance/about",
	},
};

export const viewport: Viewport = { width: "device-width", initialScale: undefined };

export default function Page() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function p(){function s(e){let t=new URL(e);return`${t.origin}${t.pathname}`.replace(/\\/$/u,\"\")}function c(e){return e.split(\"-\")[0]}function g(){let e=window.location.hostname,t=new Map;return document.querySelectorAll('link[rel=\"alternate\"]').forEach(n=>{let r=n.getAttribute(\"hreflang\"),o=n.getAttribute(\"href\");!r||!o||new URL(o).hostname!==e||t.set(r,o)}),t}function d(e,t){return t.has(\"x-default\")?t.get(e)===t.get(\"x-default\"):!1}function h(){let e=navigator.languages;try{let t=localStorage.preferredLocale;return t?[t,...e]:e}catch{return e}}function i(e){s(window.location.href)!==s(e)&&window.location.replace(e+window.location.search+window.location.hash)}if(navigator.webdriver||/bot|-google|google-|yandex|ia_archiver|crawl|spider/i.test(navigator.userAgent))return;let l=document.documentElement,u=l.getAttribute(\"lang\");if(!u)return;let a=g();if(!d(u,a))return;let f=h();if(l.hasAttribute(\"data-redirect-timezone\")){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=f[0]?.startsWith(\"en\"),n=e===\"Europe/London\";if(t&&!n||!t&&n)return;let r=a.get(\"en-GB\");if(t&&n&&r){i(r);return}}for(let e of f){let t=a.get(e);if(t){i(t);return}let n=c(e);for(let[r,o]of a)if(c(r)===n){i(o);return}}}return p})()()" }} />
			<div id="main">
				<div className="framer-ywV1D framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-o1vz9d" data-layout-template="true" style={{ "--107bztt": "var(--token-63179b8e-7207-4483-969d-30dad423295a, rgb(235, 237, 250))", minHeight: "100vh", width: "auto" }}>
					<SiteHeader path={"/about"} />
					<div className="framer-avlNZ framer-e6oiu framer-yVzhh framer-QQ1ys framer-30n5j framer-jeyCq framer-exZOv framer-eH0iv framer-njxkw" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
						<section className="framer-dunod5" id="hero">
							<div className="framer-1ee53v">
								<div className="framer-1n32x9e" id="nav-trig">
									<div className="framer-1siys5v">
										<div className="ssr-variant">
											<div className="framer-thqvcs-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
												<div className="framer-uFf4G framer-QQ1ys framer-yVzhh framer-qFJhv framer-1eactox" data-border="true" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-92f79d8c-5684-4d83-98a0-358c9a114f12, rgba(0, 0, 0, 0.5))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
													<div className="framer-1i3j5t7" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
														<svg className="framer-RRogn framer-zxalav" role="presentation" viewBox="0 0 24 24" style={{ "--1m6trwb": "0", "--21h8s6": "rgb(0, 0, 0)", "--pgex8v": "1.5", transform: "translate(-50%, -50%)" }}>
															<use href="#147218253" />
														</svg>
													</div>
													<div className="framer-os12c" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-wZ9kK1zmf-bkjB1FjjJ": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(0, 0, 0))", transform: "none" }}>
														<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-wZ9kK1zmf-bkjB1FjjJ))" }}>
															About Sente
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="framer-1b4ujq" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center" }}>
												A household deserves more than a balance.
											</h1>
										</div>
										<div className="framer-1dr2edc" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-alignment": "center" }}>
												Sente is being built to turn fragmented financial information into a coherent understanding of your money. What you have. What you owe. What you can prepare for.
											</p>
										</div>
									</div>
									<div className="ssr-variant hidden-1olw1ak hidden-160ed12">
										<div className="framer-v4w4n7-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-ms7h6x framer-h192bh" data-reset="button" href="/" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
												<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
													<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(0, 0, 0))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
														<div className="framer-182q4et">
															<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																	Explore Sente
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
														<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgb(0, 0, 0)", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
															<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																Explore Sente
															</p>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw">
										<div className="framer-v4w4n7-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
											<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-uuvcib framer-h192bh" data-reset="button" href="/" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
												<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
													<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(0, 0, 0))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
														<div className="framer-182q4et">
															<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																	Explore Sente
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
														<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgb(0, 0, 0)", opacity: "1", transform: "none" }}>
															<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																Explore Sente
															</p>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="framer-15ignq4">
							<div className="framer-18nktqf">
								<div className="framer-64sy4l">
									<div className="framer-judjw1">
										<div className="framer-1bcr6ul" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#ffffff" }}>
												<span style={{ "--framer-text-color": "#ffffff" }} className="framer-text">WHY WE EXIST</span>
											</p>
										</div>
										<div className="framer-17jpiyc" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<h2 className="framer-text framer-styles-preset-2x9gcz" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													Financial intelligence belongs in every household.
												</span>
											</h2>
										</div>
									</div>
									<div className="framer-18ejcwn">
										<div className="framer-177bjt7" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													The decisions made within a household carry consequences for years. Yet the information behind them is often divided between accounts, statements and services. Access to data has advanced. The ability to understand it has not kept pace.
												</span>
											</p>
										</div>
										<div className="framer-esuxss" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													We believe financial understanding should not depend on specialist knowledge, expensive advice or hours spent maintaining a spreadsheet. People should be able to examine their position with the depth their decisions deserve.
												</span>
											</p>
										</div>
										<div className="framer-chq6sz" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													That is the purpose of Sente: to connect income, spending, commitments, assets and debts in one intelligible system. To make the relationship between today’s decisions and tomorrow’s position easier to see.
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="framer-v90whh">
							<div className="framer-19ts483">
								<div className="framer-1bomx7j">
									<div className="framer-gx14eq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">HOUSEHOLD MONEY</span>
										</p>
									</div>
									<div className="framer-p54bjq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h2 className="framer-text framer-styles-preset-2x9gcz" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											Built around your household.
											<br className="framer-text" />
											Designed for its future.
										</h2>
									</div>
									<div className="framer-1gzurl2" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">
												A household is a financial system in its own right. It has recurring commitments, changing needs and ambitions that extend far beyond the next payment. Sente starts from that reality.
											</span>
										</p>
									</div>
									<div className="framer-197ikdj">
										<div className="framer-1o6wh5v" data-border="true">
											<div className="framer-1gkznko" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#000000" }}>
													<span style={{ "--framer-text-color": "#000000" }} className="framer-text">01 / EVERYDAY</span>
												</p>
											</div>
											<div className="framer-1nl3nz3" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">Command of the present</span>
												</h3>
											</div>
											<div className="framer-199wvb6" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">
														Understanding what is available requires more than knowing what is held. Income, essential spending and upcoming commitments need to be considered together. That distinction is the foundation of a workable plan.
													</span>
												</p>
											</div>
										</div>
										<div className="framer-1e5yzfl" data-border="true">
											<div className="framer-12xo8un" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#000000" }}>
													<span style={{ "--framer-text-color": "#000000" }} className="framer-text">02 / TOGETHER</span>
												</p>
											</div>
											<div className="framer-vzlbm9" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">A shared understanding</span>
												</h3>
											</div>
											<div className="framer-d5ad2y" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">
														Where responsibilities are shared, financial understanding should be shared too. A common view creates a basis for informed conversations, clear priorities and decisions that reflect the household as a whole.
													</span>
												</p>
											</div>
										</div>
										<div className="framer-9t74q6" data-border="true">
											<div className="framer-1fya4hk" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#000000" }}>
													<span style={{ "--framer-text-color": "#000000" }} className="framer-text">03 / TOMORROW</span>
												</p>
											</div>
											<div className="framer-l6nmc6" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">
														Preparation for what follows
													</span>
												</h3>
											</div>
											<div className="framer-14jejik" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
													<span style={{ "--framer-text-color": "rgb(0, 0, 0)" }} className="framer-text">
														Long-term plans are shaped by repeated decisions. Building reserves, reducing debt and setting money aside for future costs belong within the same view as everyday spending, not in a separate exercise.
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="framer-88c2ud">
							<div className="framer-2myq0i">
								<div className="framer-plupyh">
									<div className="framer-y9d2s8" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#ffffff" }}>
											<span style={{ "--framer-text-color": "#ffffff" }} className="framer-text">WHAT WE BELIEVE</span>
										</p>
									</div>
									<div className="framer-1cecroa" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h2 className="framer-text framer-styles-preset-2x9gcz" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
												Conviction, translated into standards.
											</span>
										</h2>
									</div>
									<div className="framer-1yh5x7j" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
												Our ambition has to hold up in the product. These principles define what we believe household financial intelligence should make possible and where its limits must remain clear.
											</span>
										</p>
									</div>
								</div>
								<div className="framer-16lt8bj">
									<div className="ssr-variant hidden-1olw1ak">
										<div className="framer-1lhslin-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", height: "100%", width: "100%" }}>
												<svg className="framer-qQQ9K framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1749036910" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Intelligence must be intelligible
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Depth is only useful when it can be understood. Financial information should explain a position, reveal the relevant relationships and give people a sound basis for their next question.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw hidden-160ed12">
										<div className="framer-1lhslin-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-qQQ9K framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1749036910" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Intelligence must be intelligible
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Depth is only useful when it can be understood. Financial information should explain a position, reveal the relevant relationships and give people a sound basis for their next question.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-1olw1ak">
										<div className="framer-1b3y1td-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", height: "100%", width: "100%" }}>
												<svg className="framer-gOdIk framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1922846671" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Respect the individual
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																No household can be reduced to a score or a comparison. Circumstances differ. The role of the product is to inform decisions with precision and respect, not assign a judgement to the person making them.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw hidden-160ed12">
										<div className="framer-1b3y1td-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-gOdIk framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#1922846671" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Respect the individual
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																No household can be reduced to a score or a comparison. Circumstances differ. The role of the product is to inform decisions with precision and respect, not assign a judgement to the person making them.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-1olw1ak">
										<div className="framer-191a9jv-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", height: "100%", width: "100%" }}>
												<svg className="framer-uPtLp framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#2577776947" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Preserve the distinctions
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Income is not wealth. Available cash is not uncommitted cash. Assets do not erase obligations. A credible financial view must make these distinctions explicit while showing how they affect one another.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw hidden-160ed12">
										<div className="framer-191a9jv-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-uPtLp framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#2577776947" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Preserve the distinctions
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Income is not wealth. Available cash is not uncommitted cash. Assets do not erase obligations. A credible financial view must make these distinctions explicit while showing how they affect one another.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-1olw1ak">
										<div className="framer-1ks4q1u-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", height: "100%", width: "100%" }}>
												<svg className="framer-cBorc framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#2709262235" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Keep judgement human
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-1200 from-1200 from-810 from-810">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																A forecast is conditional. An insight is an interpretation. Technology should extend a person’s ability to reason about money, with clear limits and room for priorities no system can decide on their behalf.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw hidden-160ed12">
										<div className="framer-1ks4q1u-container">
											<div className="framer-P6BgF framer-qFJhv framer-QQ1ys framer-1jxvq7v" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(255, 255, 255))", width: "100%" }}>
												<svg className="framer-cBorc framer-y58dt" role="presentation" viewBox="0 0 24 24" style={{ "--1ww558a": "1.5", "--4rxgx6": "rgb(255, 255, 255)" }}>
													<use href="#2709262235" />
												</svg>
												<div className="framer-1e24xx7">
													<div className="framer-1c76k">
														<div className="framer-dvu80y" data-framer-component-type="RichTextContainer" style={{ "--extracted-1lwpl3i": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 24px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<h5 className="framer-text framer-styles-preset-xbj4qr" dir="auto" style={{ "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																Keep judgement human
															</h5>
														</div>
														<div className="framer-17j0de3" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-H5LE8Bakk-d_c4PPE5G)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-H5LE8Bakk-d_c4PPE5G": "var(--token-42b4fbef-08cc-4d25-ac51-777c039675b0, rgb(20, 20, 45))", "--from-opacity": "0", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-out": "motion-opacity-out, motion-translate-out", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="reveal" data-motion-once="" data-motion-at="from-0 from-0">
															<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-H5LE8Bakk-d_c4PPE5G))" }}>
																A forecast is conditional. An insight is an interpretation. Technology should extend a person’s ability to reason about money, with clear limits and room for priorities no system can decide on their behalf.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="framer-11fkhz7" id="careers">
							<div className="framer-br8pqg">
								<div className="framer-pj3vex">
									<div className="framer-8nv52i">
										<div className="framer-1tfn0mr" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#ffffff" }}>
												<span style={{ "--framer-text-color": "#ffffff" }} className="framer-text">OUR APPROACH</span>
											</p>
										</div>
										<div className="framer-oujiz1" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<h2 className="framer-text framer-styles-preset-2x9gcz" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													From financial records to financial understanding.
												</span>
											</h2>
										</div>
										<div className="framer-1xl3pdj" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
												<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
													Recording a transaction tells you what happened. Understanding its place in a household’s finances helps you decide what happens next. Sente is being built to connect the two.
												</span>
											</p>
										</div>
									</div>
									<div className="framer-15co34w">
										<div className="framer-1b041ef">
											<div className="framer-rn5pz0" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h4 className="framer-text framer-styles-preset-1dgiycx" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">Establish the context</span>
												</h4>
											</div>
											<div className="framer-atlbiv" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
														An amount has limited meaning on its own. Its significance depends on timing, recurrence and the commitments around it. Bringing those relationships into view makes financial information more useful than a collection of isolated figures.
													</span>
												</p>
											</div>
										</div>
										<div className="framer-1t5v6g0">
											<div className="framer-cw0w35" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h4 className="framer-text framer-styles-preset-1dgiycx" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
														Examine the possibilities
													</span>
												</h4>
											</div>
											<div className="framer-idfoxi" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
														A change in income, a new commitment or a different savings target can alter the months ahead. Forecasting offers a way to examine those effects before acting, with assumptions that can be questioned and revised.
													</span>
												</p>
											</div>
										</div>
										<div className="framer-19shlk">
											<div className="framer-t23cvo" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<h4 className="framer-text framer-styles-preset-1dgiycx" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
														Understand the full position
													</span>
												</h4>
											</div>
											<div className="framer-8slvda" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
														Available cash, accumulated assets and outstanding debts answer different questions. Sente’s approach is to preserve those distinctions while revealing their connections. AI-assisted insights can support that examination; they do not constitute personalised financial advice.
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="framer-1mnhzwd" data-border="true">
									<div className="framer-sxz6aj" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">OUR DIRECTION</span>
										</p>
									</div>
									<div className="framer-1ymmyp0" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
												A higher standard for household finance.
											</span>
										</h3>
									</div>
									<div className="framer-125w0gt" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
												Our ambition is for financial understanding to become a lasting capability within every household. Not an occasional review, but a reliable basis for decisions as circumstances, responsibilities and priorities evolve. Sente is being built towards that standard.
											</span>
										</p>
									</div>
									<div className="framer-s5vh7t" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
												The work must remain accountable to the people it serves. If you share this ambition, we welcome your questions, experience and perspective on what household finance should become.
											</span>
										</p>
									</div>
									<div className="ssr-variant hidden-1olw1ak hidden-160ed12">
										<div className="framer-btgjih-container">
											<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-ms7h6x framer-h192bh" data-reset="button" href="/contact" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
												<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
													<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(0, 0, 0))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
														<div className="framer-182q4et">
															<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																	Contact Sente
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
														<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgb(0, 0, 0)", opacity: "var(--hover-opacity, 1)", transform: "none" }}>
															<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																Contact Sente
															</p>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="ssr-variant hidden-njxkw">
										<div className="framer-btgjih-container">
											<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-uuvcib framer-h192bh" data-reset="button" href="/contact" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
												<div className="framer-dh6mte" style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
													<div className="framer-1mfh61l" style={{ backgroundColor: "var(--token-ccbbe51b-ea16-4c07-831c-16f31cf5f239, rgb(0, 0, 0))", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: "1" }}>
														<div className="framer-182q4et">
															<div className="framer-1h6j910" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-RTOKqKX9Q-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-RTOKqKX9Q-liMtXIE85": "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))", opacity: "1", transform: "none" }}>
																<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-RTOKqKX9Q-liMtXIE85))" }}>
																	Contact Sente
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
														<div className="framer-5nhak8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-QBuB5tLeV-liMtXIE85)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-QBuB5tLeV-liMtXIE85": "rgb(0, 0, 0)", opacity: "1", transform: "none" }}>
															<p className="framer-text framer-styles-preset-g4x60t" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-QBuB5tLeV-liMtXIE85))" }}>
																Contact Sente
															</p>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="framer-1x60usy" data-border="true">
									<div className="framer-e5oxt0" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
											<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">COMPANY INFORMATION</span>
										</p>
									</div>
									<div className="framer-1h6tkru" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
											<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">Built with a clear identity.</span>
										</h3>
									</div>
									<div className="framer-m3470z" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
											<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
												Sente is a private company incorporated in South Africa on 8 May 2026. Company registration number: 2026/370381/07. The company is governed by South African company law.
											</span>
										</p>
									</div>
									<div className="framer-dyw00j" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
											<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
												Sente develops software to help households understand their financial information. Sente does not hold customer money. Information presented through the service is not a substitute for personalised financial, investment, tax or legal advice.
											</span>
										</p>
									</div>
									<div className="framer-3xnz5a" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
											<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
												Registration with the Companies and Intellectual Property Commission establishes the company’s incorporation. It is not an authorisation to provide regulated financial services. Product scope and the applicable regulatory requirements are being reviewed before launch. Any authorisations required for a regulated activity must be in place before that activity is offered.
											</span>
										</p>
									</div>
									<div className="framer-10sq0lp">
										<div className="ssr-variant hidden-1olw1ak hidden-160ed12">
											<div className="framer-13pmb15" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="mailto:hello@sente.finance" rel="">
														<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">hello@sente.finance</span>
													</a>
												</p>
											</div>
										</div>
										<div className="ssr-variant hidden-njxkw">
											<div className="framer-13pmb15" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="mailto:hello@sente.finance" rel="">
														<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">hello@sente.finance</span>
													</a>
												</p>
											</div>
										</div>
										<div className="ssr-variant hidden-1olw1ak hidden-160ed12">
											<div className="framer-nfsqfl" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="tel:+27824309085" rel="">
														<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">+27 82 430 9085</span>
													</a>
												</p>
											</div>
										</div>
										<div className="ssr-variant hidden-njxkw">
											<div className="framer-nfsqfl" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
												<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
													<a className="framer-text framer-styles-preset-1ioamtf" href="tel:+27824309085" rel="">
														<span style={{ "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">+27 82 430 9085</span>
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div id="overlay" />
					<div className="framer-bdvkym" />
					<Cta path={"/about"} />
					<SiteFooter path={"/about"} />
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
				<svg id="2202960551" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="LjE0Ycn76" transform="translate(3.75 3.75)" width="16.5px" />
					<path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="oSDwjLCvX" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px" />
					<path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="H9XwXWiXU" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px" />
				</svg>
				{" "}
				<svg id="3950368055" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 18 7 L 0 7 M 0 7 L 7 0 M 0 7 L 7 14" fill="transparent" height="14px" id="GQQ_BEHVE" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 5)" width="18px" />
				</svg>
				{" "}
				<svg id="147218253" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0 17.25 C 0 16.007 1.007 15 2.25 15 L 15 15 L 15 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.25px" id="rwSjL0zxZ" transform="translate(4.5 3)" width="15px" />
					<path d="M 0 17.25 C 0 16.007 1.007 15 2.25 15 L 15 15 L 15 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 Z" fill="transparent" height="17.25px" id="uGzgr0vL7" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3)" width="15px" />
					<path d="M 0 0 L 0 0.75 L 13.5 0.75" fill="transparent" height="1px" id="J0wY0mdtc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 20.25)" width="13.5px" />
				</svg>
				{" "}
				<svg id="1749036910" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 9.993 2.136 C 7.994 -0.202 4.66 -0.83 2.155 1.31 C -0.35 3.45 -0.703 7.029 1.264 9.56 C 2.9 11.665 7.85 16.104 9.472 17.541 C 9.654 17.702 9.744 17.782 9.85 17.814 C 9.943 17.841 10.044 17.841 10.136 17.814 C 10.242 17.782 10.333 17.702 10.514 17.541 C 12.137 16.104 17.087 11.665 18.722 9.56 C 20.689 7.029 20.38 3.428 17.832 1.31 C 15.284 -0.808 11.993 -0.202 9.993 2.136 Z" fill="transparent" height="17.834202051583222px" id="wkOguib3l" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="19.999979971729495px" />
				</svg>
				{" "}
				<svg id="1922846671" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="xtPEt2w6q" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px" />
				</svg>
				{" "}
				<svg id="2577776947" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 16 13.091 C 14.833 13.755 11.6 14.789 8 13.195 C 6.5 12.364 2.8 11.097 0 13.091 M 0 20 L 0 1.064 C 2.8 -0.929 6.5 0.337 8 1.168 C 11.6 2.762 14.833 1.728 16 1.064 L 16 13.023" fill="transparent" height="19.99998364141371px" id="FJtuNa3PH" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(4 1.933)" width="16px" />
				</svg>
				{" "}
				<svg id="2709262235" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M 11 13.5 L 11 19 L 14.707 15.293 C 14.895 15.105 15 14.851 15 14.586 L 15 8 L 17 6 C 18.146 4.854 19 3.41 19 1.789 L 19 0 L 17.211 0 C 15.59 0 14.146 0.854 13 2 L 11.08 4 L 4.414 4 C 4.149 4 3.895 4.105 3.707 4.293 L 0 8 L 5.5 8 M 10 9 L 5 14" fill="transparent" height="19px" id="qXDTZC_YF" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="19px" />
				</svg>
			</div>
		</>
	);
}
