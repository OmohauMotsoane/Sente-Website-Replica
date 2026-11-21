import type { Metadata, Viewport } from "next";
import Cta from "@/components/cta";
import SharedSection from "@/components/shared-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Toggle from "@/components/toggle";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Sente Beta Version 1 | 1 December 2026" },
	description: "Financial intelligence belongs in every household. Sente Beta Version 1 is scheduled for 1 December 2026 at midnight South Africa time.",
	alternates: { canonical: "/launch", },
	robots: "max-image-preview:large",
	openGraph: {
		title: "Sente Beta Version 1 | 1 December 2026",
		description: "Financial intelligence belongs in every household. Sente Beta Version 1 is scheduled for 1 December 2026 at midnight South Africa time.",
		type: "website",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sente Beta Version 1 | 1 December 2026",
		description: "Financial intelligence belongs in every household. Sente Beta Version 1 is scheduled for 1 December 2026 at midnight South Africa time.",
		images: ["/assets/images/rvqxxhs9q2xcwtznxpmurg2o5b8-95e518ac43.png"],
	},
	other: {
		"og:url": "https://www.sente.finance/launch",
	},
};

export const viewport: Viewport = { width: "device-width", initialScale: undefined };

export default function Page() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: "(()=>{function p(){function s(e){let t=new URL(e);return`${t.origin}${t.pathname}`.replace(/\\/$/u,\"\")}function c(e){return e.split(\"-\")[0]}function g(){let e=window.location.hostname,t=new Map;return document.querySelectorAll('link[rel=\"alternate\"]').forEach(n=>{let r=n.getAttribute(\"hreflang\"),o=n.getAttribute(\"href\");!r||!o||new URL(o).hostname!==e||t.set(r,o)}),t}function d(e,t){return t.has(\"x-default\")?t.get(e)===t.get(\"x-default\"):!1}function h(){let e=navigator.languages;try{let t=localStorage.preferredLocale;return t?[t,...e]:e}catch{return e}}function i(e){s(window.location.href)!==s(e)&&window.location.replace(e+window.location.search+window.location.hash)}if(navigator.webdriver||/bot|-google|google-|yandex|ia_archiver|crawl|spider/i.test(navigator.userAgent))return;let l=document.documentElement,u=l.getAttribute(\"lang\");if(!u)return;let a=g();if(!d(u,a))return;let f=h();if(l.hasAttribute(\"data-redirect-timezone\")){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=f[0]?.startsWith(\"en\"),n=e===\"Europe/London\";if(t&&!n||!t&&n)return;let r=a.get(\"en-GB\");if(t&&n&&r){i(r);return}}for(let e of f){let t=a.get(e);if(t){i(t);return}let n=c(e);for(let[r,o]of a)if(c(r)===n){i(o);return}}}return p})()()" }} />
			<div id="main">
				<div className="framer-ywV1D framer-e6oiu framer-yVzhh framer-QQ1ys framer-eH0iv framer-o1vz9d" data-layout-template="true" style={{ "--107bztt": "var(--token-63179b8e-7207-4483-969d-30dad423295a)", minHeight: "100vh", width: "auto" }}>
					<SiteHeader path={"/launch"} />
					<div className="framer-qjdOY framer-QQ1ys framer-e6oiu framer-yVzhh framer-jeyCq framer-3nnh6o" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
						<div className="framer-1llfl8a" id="launch">
							<div className="framer-fmnm5m">
								<div className="framer-1wl9vp4" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
									<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
										<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">SENTE / BETA VERSION 1</span>
									</p>
								</div>
								<div className="framer-1yco13y" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
									<h1 className="framer-text framer-styles-preset-et1lcc" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
										<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
											Financial intelligence belongs in every household.
										</span>
									</h1>
								</div>
								<div className="framer-1s0nb5a" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
									<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
										<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
											Your financial life does not happen in one account. It happens across the home you’re building, the commitments you share and the decisions still ahead. Sente is being built to bring those pieces into focus.
										</span>
									</p>
								</div>
								<div className="ssr-variant hidden-4j7727">
									<div className="framer-1iw1853" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											01 DECEMBER 2026 / 00:00 SOUTH AFRICA TIME (UTC+02:00)
										</p>
									</div>
								</div>
								<div className="ssr-variant hidden-3nnh6o hidden-1tfj3wo">
									<div className="framer-1iw1853" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-ftfde0" dir="auto" style={{ "--framer-text-color": "rgb(255, 255, 255)" }}>
											LAUNCH DATE: 01 DECEMBER 2026 / 00:00 SOUTH AFRICA TIME (UTC+02:00)
										</p>
									</div>
								</div>
							</div>
							<div className="framer-nxfrqq-container">
								<Toggle id="t326fc3ca" open={
									<>
										<div style={{ height: "100%", width: "100%", position: "relative", overflow: "hidden", background: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", fontFamily: "Outfit, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", isolation: "isolate" }}>
											<svg aria-hidden="true" viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0px", width: "100%", height: "100%", opacity: "0" }}>
												<defs>
													<radialGradient id="sente-clock-light">
														<stop offset="0" stopColor="rgb(255, 255, 255)" stopOpacity=".1" />
														<stop offset="1" stopColor="rgb(255, 255, 255)" stopOpacity="0" />
													</radialGradient>
												</defs>
												<ellipse cx="500" cy="230" rx="430" ry="225" fill="url(#sente-clock-light)" />
												<circle cx="500" cy="230" r="204" stroke="rgb(255, 255, 255)" strokeOpacity=".12" fill="none" strokeWidth="2" />
												<circle cx="500" cy="230" r="175" stroke="rgb(255, 255, 255)" strokeOpacity=".08" fill="none" />
												<line x1="500" y1="36" x2="500" y2="47" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="520.2785218739248" y1="37.06275229855498" x2="519.7558795575865" y2="42.03536177539635" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="540.3348680186454" y1="40.239365457641696" x2="539.2953095645565" y2="45.13010346131074" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="559.9492969087398" y1="45.49503583874022" x2="558.4042119368651" y2="50.25031842021599" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="578.9069087567052" y1="52.77218121733543" x2="576.8732255413263" y2="57.339908505548436" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="597" y1="61.99107166581888" x2="591.5" y2="71.51735110744772" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="614.0303389447398" y1="73.0507030912602" x2="611.0914126832774" y2="77.09578806313493" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="629.8113376336185" y1="85.82990385738552" x2="626.4656846018243" y2="89.5456279847725" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="644.1700961426145" y1="100.1886623663815" x2="640.4543720152275" y2="103.53431539817579" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="656.9492969087398" y1="115.96966105526022" x2="652.9042119368651" y2="118.90858731672257" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="668.0089283341811" y1="132.99999999999997" x2="658.4826488925523" y2="138.5" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="677.2278187826646" y1="151.09309124329474" x2="672.6600914944515" y2="153.1267744586737" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="684.5049641612597" y1="170.0507030912602" x2="679.749681579784" y2="171.59578806313493" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="689.7606345423583" y1="189.6651319813547" x2="684.8698965386893" y2="190.7046904354435" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="692.937247701445" y1="209.72147812607523" x2="687.9646382246036" y2="210.2441204424135" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="694" y1="229.99999999999994" x2="683" y2="229.99999999999994" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="692.937247701445" y1="250.27852187392475" x2="687.9646382246037" y2="249.75587955758647" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="689.7606345423583" y1="270.3348680186453" x2="684.8698965386893" y2="269.29530956455653" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="684.5049641612597" y1="289.94929690873977" x2="679.749681579784" y2="288.40421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="677.2278187826646" y1="308.9069087567052" x2="672.6600914944515" y2="306.8732255413262" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="668.0089283341811" y1="326.99999999999994" x2="658.4826488925523" y2="321.49999999999994" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="656.9492969087398" y1="344.03033894473975" x2="652.9042119368651" y2="341.0914126832774" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="644.1700961426145" y1="359.81133763361845" x2="640.4543720152276" y2="356.46568460182414" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="629.8113376336185" y1="374.17009614261445" x2="626.4656846018243" y2="370.4543720152275" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="614.0303389447398" y1="386.9492969087398" x2="611.0914126832774" y2="382.90421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="597" y1="398.0089283341811" x2="591.5" y2="388.4826488925523" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="578.9069087567052" y1="407.2278187826646" x2="576.8732255413262" y2="402.6600914944516" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="559.9492969087398" y1="414.50496416125975" x2="558.4042119368651" y2="409.749681579784" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="540.3348680186454" y1="419.7606345423583" x2="539.2953095645565" y2="414.86989653868926" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="520.2785218739248" y1="422.937247701445" x2="519.7558795575865" y2="417.9646382246037" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="500.0000000000001" y1="424" x2="500.0000000000001" y2="413" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1.5" />
												<line x1="479.7214781260753" y1="422.937247701445" x2="480.2441204424136" y2="417.9646382246037" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="459.66513198135476" y1="419.7606345423583" x2="460.7046904354435" y2="414.86989653868926" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="1" />
												<line x1="440.05070309126023" y1="414.5049641612598" x2="441.59578806313493" y2="409.749681579784" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="421.0930912432948" y1="407.2278187826646" x2="423.12677445867376" y2="402.66009149445154" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="403.00000000000006" y1="398.0089283341811" x2="408.50000000000006" y2="388.48264889255233" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
												<line x1="385.96966105526025" y1="386.9492969087398" x2="388.9085873167226" y2="382.90421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="370.1886623663815" y1="374.1700961426145" x2="373.5343153981758" y2="370.4543720152275" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="355.82990385738555" y1="359.81133763361856" x2="359.5456279847725" y2="356.46568460182425" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="343.0507030912602" y1="344.0303389447398" x2="347.09578806313493" y2="341.09141268327744" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="331.99107166581894" y1="327.0000000000001" x2="341.5173511074478" y2="321.5000000000001" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
												<line x1="322.7721812173355" y1="308.9069087567054" x2="327.33990850554846" y2="306.87322554132635" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="315.49503583874025" y1="289.9492969087398" x2="320.250318420216" y2="288.40421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="310.2393654576417" y1="270.3348680186454" x2="315.13010346131074" y2="269.2953095645566" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="307.062752298555" y1="250.27852187392492" x2="312.0353617753964" y2="249.75587955758664" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="306" y1="230.00000000000003" x2="317" y2="230.00000000000003" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
												<line x1="307.062752298555" y1="209.7214781260753" x2="312.0353617753963" y2="210.2441204424136" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="310.2393654576417" y1="189.66513198135468" x2="315.13010346131074" y2="190.70469043544347" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="315.4950358387402" y1="170.05070309126023" x2="320.250318420216" y2="171.595788063135" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="322.7721812173354" y1="151.09309124329485" x2="327.3399085055484" y2="153.12677445867385" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="331.99107166581894" y1="132.99999999999997" x2="341.5173511074477" y2="138.5" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
												<line x1="343.0507030912602" y1="115.96966105526026" x2="347.09578806313493" y2="118.90858731672262" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="355.82990385738555" y1="100.18866236638146" x2="359.5456279847725" y2="103.53431539817575" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="370.18866236638155" y1="85.82990385738552" x2="373.5343153981758" y2="89.5456279847725" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="385.9696610552602" y1="73.0507030912602" x2="388.90858731672256" y2="77.09578806313496" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="403.00000000000006" y1="61.99107166581888" x2="408.50000000000006" y2="71.5173511074477" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
												<line x1="421.0930912432948" y1="52.7721812173354" x2="423.12677445867376" y2="57.33990850554841" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="440.0507030912602" y1="45.49503583874022" x2="441.5957880631349" y2="50.25031842021599" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="459.66513198135476" y1="40.239365457641696" x2="460.7046904354436" y2="45.13010346131074" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<line x1="479.7214781260752" y1="37.06275229855498" x2="480.24412044241353" y2="42.03536177539635" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
												<circle cx="500" cy="230" r="204" fill="none" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="3" strokeLinecap="butt" strokeDasharray="685.1914108449029 596.5783918197327" strokeDashoffset="0" transform="rotate(-90 500 230)" />
												<circle cx="456.04099997435185" cy="429.20744543501644" r="4" fill="rgb(255, 255, 255)" />
												<path d="M60 230H940" stroke="rgb(255, 255, 255)" strokeOpacity=".08" />
											</svg>
											<div style={{ position: "relative", width: "100%", maxWidth: "940px", padding: "0 12px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px" }} role="timer" aria-live="off" aria-label="14 days, 01 hours, 42 minutes, 28 seconds until Sente Beta Version 1">
												<div style={{ textAlign: "center", minWidth: "0" }}>
													<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
														14
													</div>
													<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
														DAYS
													</div>
												</div>
												<div style={{ textAlign: "center", minWidth: "0" }}>
													<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
														01
													</div>
													<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
														HOURS
													</div>
												</div>
												<div style={{ textAlign: "center", minWidth: "0" }}>
													<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
														42
													</div>
													<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
														MINUTES
													</div>
												</div>
												<div style={{ textAlign: "center", minWidth: "0" }}>
													<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
														28
													</div>
													<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
														SECONDS
													</div>
												</div>
											</div>
											<div style={{ position: "absolute", bottom: "0", right: "0", display: "flex", flexDirection: "row", gap: "0", justifyContent: "flex-end", alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: ".06em" }}>
												<button style={{ background: "rgba(255,255,255,0.1)", color: "rgb(255, 255, 255)", border: "none", borderRadius: "0", minHeight: "44px", width: "96px", padding: "0", fontFamily: "Outfit", fontSize: "14px", fontWeight: "400", lineHeight: "1.5em", letterSpacing: "-0.01em", cursor: "pointer", appearance: "none" }} aria-pressed="false" aria-label="Show seconds dial" data-rp-toggle="t326fc3ca">
													Show dial
												</button>
											</div>
										</div>
									</>
								}>
									<div style={{ height: "100%", width: "100%", position: "relative", overflow: "hidden", background: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", fontFamily: "Outfit, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", isolation: "isolate" }}>
										<svg aria-hidden="true" viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", opacity: "1" }}>
											<defs>
												<radialGradient id="sente-clock-light">
													<stop offset="0" stopColor="rgb(255, 255, 255)" stopOpacity=".1" />
													<stop offset="1" stopColor="rgb(255, 255, 255)" stopOpacity="0" />
												</radialGradient>
											</defs>
											<ellipse cx="500" cy="230" rx="430" ry="225" fill="url(#sente-clock-light)" />
											<circle cx="500" cy="230" r="204" stroke="rgb(255, 255, 255)" strokeOpacity=".12" fill="none" strokeWidth="2" />
											<circle cx="500" cy="230" r="175" stroke="rgb(255, 255, 255)" strokeOpacity=".08" fill="none" />
											<line x1="500" y1="36" x2="500" y2="47" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="520.2785218739248" y1="37.06275229855498" x2="519.7558795575865" y2="42.03536177539635" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="540.3348680186454" y1="40.239365457641696" x2="539.2953095645565" y2="45.13010346131074" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="559.9492969087398" y1="45.49503583874022" x2="558.4042119368651" y2="50.25031842021599" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="578.9069087567052" y1="52.77218121733543" x2="576.8732255413263" y2="57.339908505548436" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="597" y1="61.99107166581888" x2="591.5" y2="71.51735110744772" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="614.0303389447398" y1="73.0507030912602" x2="611.0914126832774" y2="77.09578806313493" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="629.8113376336185" y1="85.82990385738552" x2="626.4656846018243" y2="89.5456279847725" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="644.1700961426145" y1="100.1886623663815" x2="640.4543720152275" y2="103.53431539817579" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="656.9492969087398" y1="115.96966105526022" x2="652.9042119368651" y2="118.90858731672257" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="668.0089283341811" y1="132.99999999999997" x2="658.4826488925523" y2="138.5" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="677.2278187826646" y1="151.09309124329474" x2="672.6600914944515" y2="153.1267744586737" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="684.5049641612597" y1="170.0507030912602" x2="679.749681579784" y2="171.59578806313493" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="689.7606345423583" y1="189.6651319813547" x2="684.8698965386893" y2="190.7046904354435" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="692.937247701445" y1="209.72147812607523" x2="687.9646382246036" y2="210.2441204424135" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="694" y1="229.99999999999994" x2="683" y2="229.99999999999994" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="692.937247701445" y1="250.27852187392475" x2="687.9646382246037" y2="249.75587955758647" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="689.7606345423583" y1="270.3348680186453" x2="684.8698965386893" y2="269.29530956455653" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="684.5049641612597" y1="289.94929690873977" x2="679.749681579784" y2="288.40421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="677.2278187826646" y1="308.9069087567052" x2="672.6600914944515" y2="306.8732255413262" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="668.0089283341811" y1="326.99999999999994" x2="658.4826488925523" y2="321.49999999999994" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="656.9492969087398" y1="344.03033894473975" x2="652.9042119368651" y2="341.0914126832774" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="644.1700961426145" y1="359.81133763361845" x2="640.4543720152276" y2="356.46568460182414" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="629.8113376336185" y1="374.17009614261445" x2="626.4656846018243" y2="370.4543720152275" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="614.0303389447398" y1="386.9492969087398" x2="611.0914126832774" y2="382.90421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="597" y1="398.0089283341811" x2="591.5" y2="388.4826488925523" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="578.9069087567052" y1="407.2278187826646" x2="576.8732255413262" y2="402.6600914944516" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="559.9492969087398" y1="414.50496416125975" x2="558.4042119368651" y2="409.749681579784" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="540.3348680186454" y1="419.7606345423583" x2="539.2953095645565" y2="414.86989653868926" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="520.2785218739248" y1="422.937247701445" x2="519.7558795575865" y2="417.9646382246037" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="500.0000000000001" y1="424" x2="500.0000000000001" y2="413" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="479.7214781260753" y1="422.937247701445" x2="480.2441204424136" y2="417.9646382246037" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="459.66513198135476" y1="419.7606345423583" x2="460.7046904354435" y2="414.86989653868926" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="440.05070309126023" y1="414.5049641612598" x2="441.59578806313493" y2="409.749681579784" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="421.0930912432948" y1="407.2278187826646" x2="423.12677445867376" y2="402.66009149445154" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="403.00000000000006" y1="398.0089283341811" x2="408.50000000000006" y2="388.48264889255233" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="385.96966105526025" y1="386.9492969087398" x2="388.9085873167226" y2="382.90421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="370.1886623663815" y1="374.1700961426145" x2="373.5343153981758" y2="370.4543720152275" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="355.82990385738555" y1="359.81133763361856" x2="359.5456279847725" y2="356.46568460182425" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="343.0507030912602" y1="344.0303389447398" x2="347.09578806313493" y2="341.09141268327744" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="331.99107166581894" y1="327.0000000000001" x2="341.5173511074478" y2="321.5000000000001" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="322.7721812173355" y1="308.9069087567054" x2="327.33990850554846" y2="306.87322554132635" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="315.49503583874025" y1="289.9492969087398" x2="320.250318420216" y2="288.40421193686507" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="310.2393654576417" y1="270.3348680186454" x2="315.13010346131074" y2="269.2953095645566" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="307.062752298555" y1="250.27852187392492" x2="312.0353617753964" y2="249.75587955758664" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="306" y1="230.00000000000003" x2="317" y2="230.00000000000003" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="307.062752298555" y1="209.7214781260753" x2="312.0353617753963" y2="210.2441204424136" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="310.2393654576417" y1="189.66513198135468" x2="315.13010346131074" y2="190.70469043544347" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="315.4950358387402" y1="170.05070309126023" x2="320.250318420216" y2="171.595788063135" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="322.7721812173354" y1="151.09309124329485" x2="327.3399085055484" y2="153.12677445867385" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="331.99107166581894" y1="132.99999999999997" x2="341.5173511074477" y2="138.5" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="343.0507030912602" y1="115.96966105526026" x2="347.09578806313493" y2="118.90858731672262" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="355.82990385738555" y1="100.18866236638146" x2="359.5456279847725" y2="103.53431539817575" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="370.18866236638155" y1="85.82990385738552" x2="373.5343153981758" y2="89.5456279847725" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="385.9696610552602" y1="73.0507030912602" x2="388.90858731672256" y2="77.09578806313496" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="403.00000000000006" y1="61.99107166581888" x2="408.50000000000006" y2="71.5173511074477" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1.5" />
											<line x1="421.0930912432948" y1="52.7721812173354" x2="423.12677445867376" y2="57.33990850554841" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="440.0507030912602" y1="45.49503583874022" x2="441.5957880631349" y2="50.25031842021599" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="459.66513198135476" y1="40.239365457641696" x2="460.7046904354436" y2="45.13010346131074" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<line x1="479.7214781260752" y1="37.06275229855498" x2="480.24412044241353" y2="42.03536177539635" stroke="rgb(255, 255, 255)" strokeOpacity="0.14" strokeWidth="1" />
											<circle cx="500" cy="230" r="204" fill="none" stroke="rgb(255, 255, 255)" strokeOpacity="1" strokeWidth="3" strokeLinecap="butt" strokeDasharray="0 1281.7698026646356" strokeDashoffset="0" transform="rotate(-90 500 230)" />
											<path d="M60 230H940" stroke="rgb(255, 255, 255)" strokeOpacity=".08" />
										</svg>
										<div style={{ position: "relative", width: "100%", maxWidth: "940px", padding: "0 12px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px" }} role="timer" aria-live="off" aria-label="Countdown to 1 December 2026">
											<div style={{ textAlign: "center", minWidth: "0" }}>
												<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
													00
												</div>
												<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
													DAYS
												</div>
											</div>
											<div style={{ textAlign: "center", minWidth: "0" }}>
												<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
													00
												</div>
												<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
													HOURS
												</div>
											</div>
											<div style={{ textAlign: "center", minWidth: "0" }}>
												<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
													00
												</div>
												<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
													MINUTES
												</div>
											</div>
											<div style={{ textAlign: "center", minWidth: "0" }}>
												<div style={{ fontSize: "clamp(38px,8vw,104px)", fontWeight: "400", lineHeight: "1.1", letterSpacing: "-.05em", fontVariantNumeric: "tabular-nums", textShadow: "0 2px 32px #000" }}>
													00
												</div>
												<div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: ".16em", marginTop: "18px", opacity: "0.6" }}>
													SECONDS
												</div>
											</div>
										</div>
										<div style={{ position: "absolute", bottom: "0", right: "0", display: "flex", flexDirection: "row", gap: "0", justifyContent: "flex-end", alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: ".06em" }}>
											<button style={{ background: "rgba(255,255,255,0.1)", color: "rgb(255, 255, 255)", border: "none", borderRadius: "0", minHeight: "44px", width: "96px", padding: "0", fontFamily: "Outfit", fontSize: "14px", fontWeight: "400", lineHeight: "1.5em", letterSpacing: "-0.01em", cursor: "pointer", appearance: "none" }} aria-pressed="true" aria-label="Hide seconds dial" data-rp-toggle="t326fc3ca">
												Hide dial
											</button>
										</div>
									</div>
								</Toggle>
							</div>
							<div className="framer-nl1fob">
								<div className="framer-28u5tu" data-border="true">
									<div className="framer-1kvfa19" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											One household. A fuller picture.
										</h3>
									</div>
									<div className="framer-1q5lo7q" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											Accounts, spending, upcoming bills and the longer view of your net worth. Sente is personal finance software designed around the household, so daily decisions can sit alongside the life they are meant to support.
										</p>
									</div>
								</div>
								<div className="framer-akkzwd" data-border="true">
									<div className="framer-ahh7jk" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											Clarity, not custody.
										</h3>
									</div>
									<div className="framer-o3hvst" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
										<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "rgb(0, 0, 0)" }}>
											Sente does not hold your money. The purpose is to help you understand your financial information, not to replace the institutions that hold your accounts or to make decisions on your behalf.
										</p>
									</div>
								</div>
							</div>
							<div className="framer-kl98ep">
								<div className="framer-197upnp" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
									<h3 className="framer-text framer-styles-preset-1ej12dw" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
										<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
											A first release. A serious beginning.
										</span>
									</h3>
								</div>
								<div className="framer-1usp6v0" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
									<p className="framer-text framer-styles-preset-15gu9gr" dir="auto" style={{ "--framer-text-color": "#FFFFFF" }}>
										<span style={{ "--framer-text-color": "#FFFFFF" }} className="framer-text">
											This is the prelaunch destination for Sente Beta Version 1, scheduled for 1 December 2026. Account registration is not open on this page. A beta is an early product, and its capabilities and institution coverage will develop as it is tested.
										</span>
									</p>
								</div>
								<div className="ssr-variant hidden-1tfj3wo">
									<div className="framer-27herf-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
										<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-ms7h6x framer-h192bh" data-reset="button" href="mailto:hello@sente.finance" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
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
								<div className="ssr-variant hidden-3nnh6o hidden-4j7727">
									<div className="framer-27herf-container" style={{ opacity: "1", transform: "none", "--from-opacity": "0.001", "--from-translate": "0px 72px", "--motion-in": "motion-opacity, motion-translate", "--motion-duration": "var(--spring-80_9-14_39-duration)", "--motion-ease": "var(--spring-80_9-14_39)" }} data-motion="appear">
										<a className="framer-4tvWS framer-sa5ze framer-QQ1ys framer-O2uCb framer-18488tr framer-v-uuvcib framer-h192bh" data-reset="button" href="mailto:hello@sente.finance" tabIndex={0} style={{ backgroundColor: "var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, rgb(15, 15, 15))" }}>
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
						</div>
					</div>
					<div id="overlay" />
					<div className="framer-bdvkym" />
					<Cta path={"/launch"} />
					<SiteFooter path={"/launch"} />
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
