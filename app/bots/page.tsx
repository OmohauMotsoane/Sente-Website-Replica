import type { Metadata, Viewport } from "next";
import Cta from "@/components/cta";
import SharedSection from "@/components/shared-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Bots | Sente" },
	description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
	alternates: { canonical: "/bots", },
	robots: "max-image-preview:large",
	openGraph: {
		title: "Bots | Sente",
		description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
		type: "website",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Bots | Sente",
		description: "Sente is a personal finance app that brings your bank accounts, transactions, spending, investments, assets, and debts together in one place. Track net worth, understand cash flow, monitor upcoming bills, and forecast your financial future.",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	other: {
		"og:url": "https://www.sente.finance/bots",
	},
};

export const viewport: Viewport = { width: "device-width", initialScale: undefined };

export default function Page() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function p(){function s(e){let t=new URL(e);return`${t.origin}${t.pathname}`.replace(/\\/$/u,\"\")}function c(e){return e.split(\"-\")[0]}function g(){let e=window.location.hostname,t=new Map;return document.querySelectorAll('link[rel=\"alternate\"]').forEach(n=>{let r=n.getAttribute(\"hreflang\"),o=n.getAttribute(\"href\");!r||!o||new URL(o).hostname!==e||t.set(r,o)}),t}function d(e,t){return t.has(\"x-default\")?t.get(e)===t.get(\"x-default\"):!1}function h(){let e=navigator.languages;try{let t=localStorage.preferredLocale;return t?[t,...e]:e}catch{return e}}function i(e){s(window.location.href)!==s(e)&&window.location.replace(e+window.location.search+window.location.hash)}if(navigator.webdriver||/bot|-google|google-|yandex|ia_archiver|crawl|spider/i.test(navigator.userAgent))return;let l=document.documentElement,u=l.getAttribute(\"lang\");if(!u)return;let a=g();if(!d(u,a))return;let f=h();if(l.hasAttribute(\"data-redirect-timezone\")){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=f[0]?.startsWith(\"en\"),n=e===\"Europe/London\";if(t&&!n||!t&&n)return;let r=a.get(\"en-GB\");if(t&&n&&r){i(r);return}}for(let e of f){let t=a.get(e);if(t){i(t);return}let n=c(e);for(let[r,o]of a)if(c(r)===n){i(o);return}}}return p})()()" }} />
			<div id="main">
				<div className="framer-ywV1D framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-o1vz9d" data-layout-template="true" style={{ "--107bztt": "var(--token-63179b8e-7207-4483-969d-30dad423295a, rgb(235, 237, 250))", minHeight: "100vh", width: "auto" }}>
					<SiteHeader path={"/bots"} />
					<div className="framer-913p9 framer-e6oiu framer-TLz6m framer-wiFnw framer-IQcWX framer-K5wRd framer-qFJhv framer-4DMBO framer-yVzhh framer-eH0iv framer-ktHkD framer-9jUm8 framer-1rso9gl" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
						<section className="framer-dgaa4e">
							<div className="framer-v8fhy0" id="top">
								<div className="framer-1ayesck" id="lockup">
									<div className="framer-1am6hnf">
										<div className="framer-2ilwdl">
											<div className="framer-aso5n8" data-framer-component-type="RichTextContainer" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 48px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
												<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-alignment": "center" }}>
													Bots
												</h1>
											</div>
										</div>
									</div>
								</div>
								<div className="framer-176ef59" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 120px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)", "--motion-delay": "200ms" }} data-motion="appear">
									<div className="framer-1l3p8r9">
										<div className="framer-bhx3oh" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
											<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
												SenteBot is Sente's crawler. If you have found it in your site's logs, this is what it was doing.
											</p>
											<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
												Sente is a personal finance app. When a member pays a business, their bank writes something like "POS Purchase YOURSHOP.CO.ZA 4417". SenteBot reads a business's own website so that Sente can show that member your business's name and logo instead.
											</p>
											<h2 dir="auto" className="framer-text framer-styles-preset-w2z6z2">What it reads</h2>
											<ul dir="auto" className="framer-text">
												<li className="framer-text framer-styles-preset-15gu9gr">
													<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
														{"Your "}
														<code className="framer-text framer-styles-preset-1h7sinm">{"robots.txt"}</code>
														, first. If it asks crawlers to stay away, SenteBot does.
													</p>
												</li>
												<li className="framer-text framer-styles-preset-15gu9gr">
													<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
														Your home page, and up to three pages that list other businesses (a store directory, a list of stockists).
													</p>
												</li>
												<li className="framer-text framer-styles-preset-15gu9gr">
													<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">Your logo.</p>
												</li>
											</ul>
											<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
												From these it keeps only your business's name, its logo, a line describing it, and the other businesses your pages link to. It does not keep the pages themselves, and it reads a page again no more than once a month.
											</p>
											<h2 dir="auto" className="framer-text framer-styles-preset-w2z6z2">How it identifies itself</h2>
											<div className="framer-text framer-text-module" style={{ width: "100%", height: "auto" }} data-width="fill">
												<div className="ssr-variant hidden-1xdwyiz hidden-yjyv2i">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qbqlaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qbqlaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no" dangerouslySetInnerHTML={{ __html: "<div class=\"cm-editor-0cfee5w1440 ͼ1-0cfee5w1440 ͼ2-0cfee5w1440 ͼm-0cfee5w1440\"><div class=\"cm-announced-0cfee5w1440\" aria-live=\"polite\"></div><div tabindex=\"-1\" class=\"cm-scroller\"><div spellcheck=\"false\" autocorrect=\"off\" autocapitalize=\"off\" writingsuggestions=\"false\" translate=\"no\" contenteditable=\"false\" style=\"tab-size: 4;\" class=\"cm-content\" role=\"textbox\" aria-multiline=\"true\" data-gramm=\"false\" data-lt-active=\"false\" aria-label=\"Code Editor for example.js\" tabindex=\"-1\" aria-readonly=\"true\" data-language=\"javascript\"><div class=\"cm-line-0cfee5w1440\"><span class=\"sp-syntax-plain\">SenteBot</span>/<span class=\"sp-syntax-static\">1.0</span> <span class=\"sp-syntax-punctuation\">(</span>+<span class=\"sp-syntax-plain\">https</span><span class=\"sp-syntax-punctuation\">:</span><span class=\"sp-syntax-comment\">//sente.finance/bot)</span></div></div></div></div>" }} />
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="ssr-variant hidden-1rso9gl hidden-yjyv2i">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qjqlaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qjqlaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no" dangerouslySetInnerHTML={{ __html: "<div class=\"cm-editor-0cfee5w390 ͼ1-0cfee5w390 ͼ2-0cfee5w390 ͼj-0cfee5w390\"><div class=\"cm-announced-0cfee5w390\" aria-live=\"polite\"></div><div tabindex=\"-1\" class=\"cm-scroller\"><div spellcheck=\"false\" autocorrect=\"off\" autocapitalize=\"off\" writingsuggestions=\"false\" translate=\"no\" contenteditable=\"false\" style=\"tab-size: 4;\" class=\"cm-content\" role=\"textbox\" aria-multiline=\"true\" data-gramm=\"false\" data-lt-active=\"false\" aria-label=\"Code Editor for example.js\" tabindex=\"-1\" aria-readonly=\"true\" data-language=\"javascript\"><div class=\"cm-line-0cfee5w390\"><span class=\"sp-syntax-plain\">SenteBot</span>/<span class=\"sp-syntax-static\">1.0</span> <span class=\"sp-syntax-punctuation\">(</span>+<span class=\"sp-syntax-plain\">https</span><span class=\"sp-syntax-punctuation\">:</span><span class=\"sp-syntax-comment\">//sente.finance/bot)</span></div></div></div></div>" }} />
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="ssr-variant hidden-1xdwyiz hidden-1rso9gl">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qrqlaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qrqlaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no">
																			<pre className="sp-c-fWymNx sp-pre-placeholder" style={{ marginLeft: "var(--sp-space-4)" }}>
																				<span className="sp-syntax-plain">{"SenteBot"}</span>
																				{"/"}
																				<span className="sp-syntax-static">{"1.0"}</span>
																				{" "}
																				<span className="sp-syntax-punctuation">{"("}</span>
																				{"+"}
																				<span className="sp-syntax-plain">{"https"}</span>
																				<span className="sp-syntax-punctuation">{":"}</span>
																				<span className="sp-syntax-comment">{"//sente.finance/bot)"}</span>
																			</pre>
																		</div>
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
											</div>
											<h2 dir="auto" className="framer-text framer-styles-preset-w2z6z2">Asking it to stay away</h2>
											<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
												{"Add this to your "}
												<code className="framer-text framer-styles-preset-1h7sinm">{"robots.txt"}</code>
												:
											</p>
											<div className="framer-text framer-text-module" style={{ width: "100%", height: "auto" }} data-width="fill">
												<div className="ssr-variant hidden-1xdwyiz hidden-yjyv2i">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qdalaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qdalaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no" dangerouslySetInnerHTML={{ __html: "<div class=\"cm-editor-0cfee5w1440 ͼ1-0cfee5w1440 ͼ2-0cfee5w1440 ͼn-0cfee5w1440\"><div class=\"cm-announced-0cfee5w1440\" aria-live=\"polite\"></div><div tabindex=\"-1\" class=\"cm-scroller\"><div spellcheck=\"false\" autocorrect=\"off\" autocapitalize=\"off\" writingsuggestions=\"false\" translate=\"no\" contenteditable=\"false\" style=\"tab-size: 4;\" class=\"cm-content\" role=\"textbox\" aria-multiline=\"true\" data-gramm=\"false\" data-lt-active=\"false\" aria-label=\"Code Editor for example.js\" tabindex=\"-1\" aria-readonly=\"true\" data-language=\"javascript\"><div class=\"cm-line-0cfee5w1440\"><span class=\"sp-syntax-plain\">User</span>-<span class=\"sp-syntax-plain\">agent</span><span class=\"sp-syntax-punctuation\">:</span> SenteBotDisallow<span class=\"sp-syntax-punctuation\">:</span> /</div></div></div></div>" }} />
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="ssr-variant hidden-1rso9gl hidden-yjyv2i">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qlalaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qlalaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no" dangerouslySetInnerHTML={{ __html: "<div class=\"cm-editor-0cfee5w390 ͼ1-0cfee5w390 ͼ2-0cfee5w390 ͼq-0cfee5w390\"><div class=\"cm-announced-0cfee5w390\" aria-live=\"polite\"></div><div tabindex=\"-1\" class=\"cm-scroller\"><div spellcheck=\"false\" autocorrect=\"off\" autocapitalize=\"off\" writingsuggestions=\"false\" translate=\"no\" contenteditable=\"false\" style=\"tab-size: 4;\" class=\"cm-content\" role=\"textbox\" aria-multiline=\"true\" data-gramm=\"false\" data-lt-active=\"false\" aria-label=\"Code Editor for example.js\" tabindex=\"-1\" aria-readonly=\"true\" data-language=\"javascript\"><div class=\"cm-line-0cfee5w390\"><span class=\"sp-syntax-plain\">User</span>-<span class=\"sp-syntax-plain\">agent</span><span class=\"sp-syntax-punctuation\">:</span> SenteBotDisallow<span class=\"sp-syntax-punctuation\">:</span> /</div></div></div></div>" }} />
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="ssr-variant hidden-1xdwyiz hidden-1rso9gl">
													<div className="framer-cb" style={{ "--cb-colors-surface1-light": "#161820", "--cb-colors-surface2-light": "#252525", "--cb-colors-surface3-light": "#2f2f2f", "--cb-colors-clickable-light": "#999999", "--cb-colors-base-light": "#d92121", "--cb-colors-disabled-light": "#4d4d4d", "--cb-colors-hover-light": "#c5c5c5", "--cb-colors-accent-light": "#0099ff", "--cb-colors-error-light": "#ff3366", "--cb-colors-errorSurface-light": "#ffe0e8", "--cb-syntax-color-plain-light": "#eeeeee", "--cb-syntax-color-comment-light": "#666666", "--cb-syntax-fontStyle-comment-light": "italic", "--cb-syntax-color-keyword-light": "#00BBFF", "--cb-syntax-color-tag-light": "#00BBFF", "--cb-syntax-color-punctuation-light": "#999999", "--cb-syntax-color-definition-light": "#ffcc66", "--cb-syntax-color-property-light": "#77dddd", "--cb-syntax-color-static-light": "#ff8866", "--cb-syntax-color-string-light": "#bb88ff", "--cb-color-scheme-light": "dark", "--cb-colors-surface1-dark": "#161820", "--cb-colors-surface2-dark": "#252525", "--cb-colors-surface3-dark": "#2f2f2f", "--cb-colors-clickable-dark": "#999999", "--cb-colors-base-dark": "#d92121", "--cb-colors-disabled-dark": "#4d4d4d", "--cb-colors-hover-dark": "#c5c5c5", "--cb-colors-accent-dark": "#0099ff", "--cb-colors-error-dark": "#ff3366", "--cb-colors-errorSurface-dark": "#ffe0e8", "--cb-syntax-color-plain-dark": "#eeeeee", "--cb-syntax-color-comment-dark": "#666666", "--cb-syntax-fontStyle-comment-dark": "italic", "--cb-syntax-color-keyword-dark": "#00BBFF", "--cb-syntax-color-tag-dark": "#00BBFF", "--cb-syntax-color-punctuation-dark": "#999999", "--cb-syntax-color-definition-dark": "#ffcc66", "--cb-syntax-color-property-dark": "#77dddd", "--cb-syntax-color-static-dark": "#ff8866", "--cb-syntax-color-string-dark": "#bb88ff", "--cb-color-scheme-dark": "dark", position: "relative", width: "100%", height: "100%" }}>
														<div className="sp-843366514 sp-c-fVPbOs sp-c-fVPbOs-LrWkf-variant-dark sp-wrapper" style={{ height: "100%" }}>
															<div className="sp-c-ikJbEZ" style={{ height: "100%", "--sp-layout-height": "100%", "--cb-padding": "30px", borderStyle: "none", borderColor: "unset", borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", backgroundColor: "var(--sp-colors-surface1)", borderRadius: "15px", transform: "unset", overflow: "hidden" }}>
																<div className="sp-c-euXojQ sp-editor sp-stack" style={{ letterSpacing: "0em", fontStyle: "normal", fontWeight: "400" }}>
																	<div aria-labelledby="/example.js-:R1qtalaldp:-tab" className="sp-c-gtcpyq cb-code-editor" id="/example.js-:R1qtalaldp:-tab-panel" role="tabpanel">
																		<div aria-autocomplete="list" aria-label="Code Editor for example.js" aria-multiline="true" className="sp-c-jOWzsE sp-c-jkvvao" role="textbox" tabIndex={0} translate="no">
																			<pre className="sp-c-fWymNx sp-pre-placeholder" style={{ marginLeft: "var(--sp-space-4)" }}>
																				<span className="sp-syntax-plain">{"User"}</span>
																				{"-"}
																				<span className="sp-syntax-plain">{"agent"}</span>
																				<span className="sp-syntax-punctuation">{":"}</span>
																				{" SenteBotDisallow"}
																				<span className="sp-syntax-punctuation">{":"}</span>
																			</pre>
																		</div>
																	</div>
																</div>
																<div style={{ display: "contents" }} />
															</div>
														</div>
													</div>
												</div>
											</div>
											<p dir="auto" className="framer-text framer-styles-preset-15gu9gr">
												{"SenteBot reads "}
												<code className="framer-text framer-styles-preset-1h7sinm">{"robots.txt"}</code>
												{" at most once a day, so the change takes effect within a day."}
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div id="overlay" />
					<div className="framer-bdvkym" />
					<Cta path={"/bots"} />
					<SiteFooter path={"/bots"} />
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
			<SharedSection />
		</>
	);
}
