#!/usr/bin/env node
// build-cert-cat12-pages.mjs — emit the HMTc Category-12 (Household Cleaning and Dishwashing) standard
// as CUSTOM cert-site pages (content/standards/<slug>.md, custom_page: true) in the heavymetalcertified
// repo. Forked from build-cert-cat9-pages.mjs; adds the `grouped` and `control` cell renderings this
// (largely unregulated) consumer-chemical category needs.
//
// Reads the compiled derivation (data/workbench/standards/cat12-compiled/<slug>.json) produced by
// compile-cat12.mjs. Every number traces to a named register row (or an inline sovereign grouped
// ceiling); this generator only renders.
//
// FIREWALL (CLAUDE.md Part 2): writes to the CERT repo only. Values are sovereign government limits
// (GB 14930.1 detergent limits; NMPA 2015 cosmetic read-across) — public record. One-way citation OUT
// to the heavymetalindex.com literature baseline. No wiki import. Basis is NEVER conflated: total
// content in product is the single native basis; food-contact migration limits are not rendered as a
// numeric ceiling. `control` cells publish an analytical method + escalation rule, never an invented
// number. No `data-firm-ppb` marker / no `**N ppb**` render (firewall-cert-lint firm-value integrity)
// and no occurrence/percentile prose (method-drift-lint).
//
// Design tokens copied from build-cert-cat9-pages.mjs for visual parity: NO markdown bold; one
// canonical table (#9f2727 header); mg/kg display; "$" avoided.
//
// Usage: node tools/standards/build-cert-cat12-pages.mjs [--only=slug1,slug2] [--cert-dir=PATH]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const arg = (k) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || "").split("=")[1] || ""
const CERT = arg("cert-dir") || path.join(process.env.HOME, "Desktop/heavymetalcertified")
const OUT = path.join(CERT, "content/standards")
const CDIR = path.join(REPO, "data/workbench/standards/cat12-compiled")
const REG = parse(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(REG.map((r) => [r.regulatory_limit_id, r]))
function parse(t) { const L = t.replace(/\r/g, "").trim().split("\n"); const H = sp(L[0]); return L.slice(1).map((l) => Object.fromEntries(sp(l).map((v, i) => [H[i], v]))) }
function sp(line) { const o = []; let c = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = "" } else c += ch } o.push(c); return o.map((s) => s.replace(/^"|"$/g, "")) }

const today = new Date().toISOString().slice(0, 10)
const STD_VERSION = "1.0 (2026-08-13)"
const METHODOLOGY = "Method v2.0 — strictest credible government limit per analyte, in the correct basis (CLAUDE.md Part 19)"

const ANALYTE_DISP = { Pb: "Lead (Pb)", tAs: "Arsenic, total (tAs)", iAs: "Inorganic arsenic (iAs)", Cd: "Cadmium (Cd)", tHg: "Mercury, total (tHg)", MeHg: "Methylmercury (MeHg)", Ni: "Nickel (Ni)", Al: "Aluminium (Al)", "Cr-total": "Chromium, total (Cr)", "Cr-VI": "Chromium VI (Cr-VI)", Sn: "Tin (Sn)" }
const TIER1 = new Set(["Pb", "Cd", "iAs", "tHg", "MeHg"])
const PANEL = ["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Cr-total", "Cr-VI", "Sn"]
const GOVNAME = { CN: "China", EU: "European Union", US: "United States", CA: "Canada" }

// mg/kg display from a µg/kg register value
const mg = (ug) => {
  if (ug == null) return "&mdash;"
  const v = ug / 1000
  if (v >= 100) return String(Math.round(v))
  if (v >= 1) return String(Math.round(v * 10) / 10).replace(/\.0$/, "")
  if (v >= 0.001) return String(Number(v.toPrecision(2)))
  return String(v)
}

// ---- design tokens (verbatim from cat-9 for visual parity) ----
const H2 = 'style="font-family:Lora,serif;font-weight:400;font-size:30px;line-height:1.2;color:#2b1f1f;border-bottom:1px solid #e8e1db;padding-bottom:10px;margin:0 0 20px"'
const TH = "style=\"text-align:left;padding:11px 15px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase\""
const THR = TH.replace("text-align:left", "text-align:right")
const TD = "padding:11px 15px;vertical-align:top;border-bottom:1px solid #f2ece7"
const P = 'style="font-size:15.5px;line-height:1.75;color:#3f3a3a;margin:0 0 16px;max-width:84ch"'
const PMUT = 'style="font-size:11.5px;line-height:1.55;color:#a9a1a1;max-width:84ch;margin:0 0 14px"'

const isLimited = (c) => c && (c.type === "regulatory_alignment" || c.type === "grouped" || c.type === "read_across")

function bindingName(c) {
  if (c.type === "regulatory_alignment") return GOVNAME[c.binding_jurisdiction] || c.binding_jurisdiction
  if (c.type === "grouped") return `${GOVNAME[c.binding_jurisdiction] || c.binding_jurisdiction} (grouped ceiling)`
  if (c.type === "read_across") return `${GOVNAME[c.source_jurisdiction] || c.source_jurisdiction} (read-across)`
  return ""
}

function masterTable(rec) {
  const rows = []
  let i = 0
  for (const a of PANEL) {
    const c = rec.cells[a]
    if (!isLimited(c)) continue
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    i++
    const tier = TIER1.has(a) ? "Tier 1" : "Tier 2"
    const basis = (c.basis || "").replace(/</g, "&lt;")
    rows.push(`      <tr${z}><td style="${TD};color:#2b1f1f">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12px">${tier}</td><td style="${TD};font-family:'IBM Plex Mono',monospace;color:#2b1f1f;text-align:right;white-space:nowrap">${mg(c.value)}</td><td style="${TD};color:#736b6b;font-size:12.5px">${basis}</td><td style="${TD};color:#736b6b;font-size:12.5px">${bindingName(c)}</td><td style="${TD};color:#736b6b;font-size:12px">${c.provenance}</td></tr>`)
  }
  return rows.join("\n")
}

function controlBlock(rec) {
  const ctl = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type === "control")
  if (!ctl.length) return ""
  const rows = ctl.map((a, i) => {
    const c = rec.cells[a]
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    const method = (c.reference_method || "").replace(/</g, "&lt;")
    const esc = (c.escalation_rule || "").replace(/</g, "&lt;")
    return `      <tr${z}><td style="${TD};color:#2b1f1f;white-space:nowrap">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12.5px;line-height:1.6">${method}</td><td style="${TD};color:#736b6b;font-size:12.5px;line-height:1.6">${esc}</td></tr>`
  }).join("\n")
  return `<section id="controls" style="margin-bottom:52px"><h2 ${H2}>Screened by method &mdash; no government limit</h2>
<p ${PMUT}>No sovereign sets a heavy-metal maximum for these analytes in a household cleaning product, yet each is a real or plausible contaminant of the class. Rather than invent a number, the standard publishes the analytical method and the escalation rule for each: certification measures the analyte and escalates an out-of-band lot to ALARA review, not to a pass/fail against a fabricated threshold. This is an honest control, not a silent gap.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:46rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Analytical method</th><th ${TH}>Escalation rule</th></tr></thead>
<tbody>
${rows}
</tbody></table></div></section>

`
}

function screenedBlock(rec) {
  const nm = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type === "not_material")
  if (!nm.length) return ""
  const rows = nm.map((a, i) => {
    const c = rec.cells[a]
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    const why = (c.rationale ? String(c.rationale) : "No exposure pathway and no government limit.").replace(/</g, "&lt;")
    return `      <tr${z}><td style="${TD};color:#2b1f1f;white-space:nowrap">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12.5px;line-height:1.6">${why}</td></tr>`
  }).join("\n")
  return `<section id="screened" style="margin-bottom:52px"><h2 ${H2}>Not material for this product</h2>
<p ${PMUT}>These analytes carry no ceiling because a species-specific limit is bounded by its published total-element parent, or no source and no pathway exist in the product. Each determination is rebuttable and evidence-tested (recorded in the index register), screened during certification, and recorded here rather than left as a silent gap.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:40rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Why it carries no ceiling for this product</th></tr></thead>
<tbody>
${rows}
</tbody></table></div></section>

`
}

function derivationTable(rec) {
  const rows = []
  let i = 0
  for (const a of PANEL) {
    const c = rec.cells[a]
    if (!isLimited(c)) continue
    let cands = ""
    if (c.type === "regulatory_alignment") cands = (c.candidates || []).map((x) => `${GOVNAME[x.jurisdiction] || x.jurisdiction} ${mg(x.value)}`).join(" &middot; ")
    else if (c.type === "read_across") cands = `${GOVNAME[c.source_jurisdiction] || c.source_jurisdiction} ${mg(c.value)} (read-across)`
    else if (c.type === "grouped") cands = `${GOVNAME[c.binding_jurisdiction] || c.binding_jurisdiction} ${mg(c.value)} (grouped heavy-metals ceiling)`
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    i++
    rows.push(`      <tr${z}><td style="${TD};color:#2b1f1f">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12.5px">${cands}</td><td style="${TD};font-family:'IBM Plex Mono',monospace;color:#9f2727;text-align:right;font-weight:500">${mg(c.value)}</td><td style="${TD};color:#736b6b;font-size:12px">${bindingName(c)}</td></tr>`)
  }
  return rows.join("\n")
}

function sourceRegs(rec) {
  const pages = new Map()
  for (const a of PANEL) {
    const c = rec.cells[a]; if (!c) continue
    let pageSlug = null
    if (c.binding_id) { const r = byId.get(c.binding_id); if (r) pageSlug = r.regulation_page || r.regulatory_limit_id }
    else if (c.source_id) { const r = byId.get(c.source_id); if (r) pageSlug = r.regulation_page || r.regulatory_limit_id }
    else if (c.type === "grouped" && c.source_page) pageSlug = c.source_page
    if (pageSlug && !pages.has(pageSlug)) pages.set(pageSlug, { slug: pageSlug })
  }
  const lines = ["| # | Regulation | Basis | Role in this standard |", "| --- | --- | --- | --- |"]
  let n = 1
  for (const [slug] of pages) {
    const nm = regName(slug)
    const href = `https://heavymetalindex.com/${slug.replace(/^\//, "")}`
    lines.push(`| ${n++} | [${nm}](${href}) | ${basisFamily(slug)} | ${role(slug)} |`)
  }
  return lines.join("\n")
}
function regName(slug) {
  if (slug.includes("gb14930")) return "China GB 14930.1-2022 (National food safety standard &mdash; Detergents)"
  if (slug.includes("cosmetics-safety-technical-standards-2015")) return "China Safety and Technical Standards for Cosmetics (2015, NMPA)"
  return slug.replace(/^regulations\//, "")
}
function basisFamily(slug) {
  if (slug.includes("gb14930")) return "total content in product as placed on market"
  if (slug.includes("cosmetics")) return "finished consumer-chemical product as placed on market"
  return "government limit"
}
function role(slug) {
  if (slug.includes("gb14930")) return "Binds total arsenic (Type B) and the grouped heavy-metals ceiling"
  if (slug.includes("cosmetics")) return "Read-across anchor for the toxic panel (nearest coherent statutory consumer-chemical regime)"
  return "Government limit weighed for this standard"
}

// ---- pathway-specific narrative ----
function methodParas(rec) {
  const pw = rec.pathway
  if (pw === "food-contact-cleaning") {
    return `<p ${P}>${rec.name} is a household cleaning product that contacts food or food-contact articles, not a food. Household cleaning products are largely unregulated for heavy-metal content: the ingredient-disclosure and eco-label regimes that govern the sector (EPA Safer Choice, Green Seal GS-8, California SB 258, the New York Household Cleaner Disclosure Act) set no heavy-metal maximums. The one credible sovereign that regulates this product class directly is China&rsquo;s GB 14930.1-2022 (<a href="https://heavymetalindex.com/regulations/china-gb14930-1-detergent-arsenic-limits-2022" style="color:#1c43ad">National food safety standard &mdash; Detergents</a>). Its Type B ceiling (detergents for tableware and food-contact articles) sets total arsenic directly; its grouped heavy-metals-as-lead ceiling (1.0 mg/kg, the sum of lead, cadmium, mercury and other heavy metals expressed as lead) bounds lead, cadmium and mercury individually as a conservative per-species reading. Every number on this page is in the product&rsquo;s native basis: total heavy-metal content in the product as placed on the market. That is GB 14930.1&rsquo;s own basis and the only basis a rinse-off product can be tested in.</p>
<p ${P}>Where no sovereign limit exists but the metal is a real or plausible contaminant of the class, the standard publishes an analytical method and an escalation rule rather than an invented threshold; those cells are listed under Screened by method below. Inorganic arsenic and methylmercury are speciation forms with no separate limit; their total-element parents (total arsenic, total mercury) bound them, and they are recorded as not material rather than left blank.</p>`
  }
  if (pw === "fifra-antimicrobial") {
    return `<p ${P}>${rec.name} are EPA-registered antimicrobial products under FIFRA &mdash; a distinct testing bucket. The Confidential Statement of Formula and the antimicrobial active ingredient govern registration; a metal-based active (for example silver or copper) is a declared active, not a contaminant, and is outside the ten-analyte HMTc contaminant panel. No FIFRA or FDA sanitizing-solution instrument sets a heavy-metal contaminant maximum for the product, and household cleaning products are otherwise largely unregulated for heavy-metal content (the disclosure and eco-label regimes set no maximums). The toxic panel is therefore read across from the nearest coherent statutory consumer-chemical regime, China&rsquo;s mandatory cosmetic trace-metal limits (<a href="https://heavymetalindex.com/regulations/china-cosmetics-safety-technical-standards-2015" style="color:#1c43ad">Safety and Technical Standards for Cosmetics, 2015</a>) &mdash; conservative, because a cosmetic is prolonged leave-on skin contact and an antimicrobial spray or wipe is incidental. Every number is in the product&rsquo;s native basis: total heavy-metal content as placed on the market.</p>
<p ${P}>Where no sovereign limit exists but the metal is a real or plausible contaminant, the standard publishes an analytical method and an escalation rule rather than an invented threshold (see Screened by method below); organotin is screened here because antimicrobial products are the one cleaning sub-scope with a plausible organotin-biocide pathway. Inorganic arsenic and methylmercury are bounded by their total-element parents and recorded as not material.</p>`
  }
  // hard-surface-dermal
  return `<p ${P}>${rec.name} is a hard-surface household cleaning product; the exposure of concern is incidental dermal contact. Household cleaning products are largely unregulated for heavy-metal content: the ingredient-disclosure and eco-label regimes that govern the sector (EPA Safer Choice, Green Seal GS-8, California SB 258, the New York Household Cleaner Disclosure Act) set no heavy-metal maximums, and no sovereign sets a heavy-metal maximum for hard-surface cleaners. The toxic panel is therefore read across from the nearest coherent statutory consumer-chemical regime, China&rsquo;s mandatory cosmetic trace-metal limits (<a href="https://heavymetalindex.com/regulations/china-cosmetics-safety-technical-standards-2015" style="color:#1c43ad">Safety and Technical Standards for Cosmetics, 2015</a>). Reading a cosmetic ceiling across to a hard-surface cleaner is conservative, because a cosmetic is prolonged leave-on skin contact and a cleaner is incidental. A single coherent sovereign regime is read across rather than the strictest number picked per analyte across regimes, which would build a ceiling no sovereign enforces. Every number is in the product&rsquo;s native basis: total heavy-metal content in the product as placed on the market.</p>
<p ${P}>Where no sovereign limit exists but the metal is a real or plausible contaminant of the class, the standard publishes an analytical method and an escalation rule rather than an invented threshold; those cells are listed under Screened by method below. Inorganic arsenic and methylmercury are speciation forms bounded by their total-element parents (total arsenic, total mercury) and recorded as not material rather than left blank.</p>`
}
function basisShort(pw) {
  if (pw === "food-contact-cleaning") return "detergent total-content (GB 14930.1)"
  if (pw === "fifra-antimicrobial") return "FIFRA antimicrobial; cosmetic read-across"
  return "cosmetic read-across (total content)"
}

function page(rec) {
  const limited = PANEL.filter((a) => isLimited(rec.cells[a])).length
  const scopeHtml = rec.scope_note
    ? `<p style="font-size:14px;line-height:1.7;color:#5a4141;margin:0 0 20px;max-width:84ch;padding:13px 16px;background:#fdf4f3;border-left:3px solid #9f2727"><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9f2727;margin-bottom:5px">What this standard covers</span>${rec.scope_note.replace(/</g, "&lt;")}</p>\n`
    : ""
  const fm = [
    "---",
    `title: "${rec.name} — HMTc Standard"`,
    "type: standard",
    "custom_page: true",
    `firm_analytes: ${limited}`,
    `description: "The Heavy Metal Tested & Certified standard for ${rec.name.toLowerCase()}. A consumer-chemical standard: household cleaning products are largely unregulated for heavy metals, so limits are the strictest credible government value in the product's total-content basis (China GB 14930.1 for food-contact cleaning; a cosmetic read-across otherwise), with method-and-escalation controls where no sovereign limit exists. Basis is never conflated; no occurrence-derived numbers."`,
    "category: 12",
    'category_name: "Household Cleaning and Dishwashing"',
    `product_slug: ${rec.slug}`,
    `subcategory: "${rec.name}"`,
    `governing_basis: "${rec.governing_basis.replace(/"/g, "'")}"`,
    `standard_version: "${STD_VERSION}"`,
    `methodology_version: "${METHODOLOGY}"`,
    "variant_type: independent",
    `hmi_literature_link: https://heavymetalindex.com/products/${rec.slug}`,
    `effective_date: ${today}`,
    "scholar_eligible: true",
    "cert_doi: null",
    "audience: [regulator, brand-legal, retailer-compliance, certifier]",
    "rail_box:",
    '  title: "Document versions"',
    `  body: "v1.0 &middot; 2026-08-13 &middot; current. Every edition is dated and kept at a stable permalink; earlier editions and their DOIs appear here as the standard revises."`,
    "snapshot:",
    `  - { k: "Analytes limited", v: "${limited} / ${PANEL.length}" }`,
    '  - { k: "Method", v: "Strictest government limit, correct basis" }',
    `  - { k: "Governing basis", v: "${basisShort(rec.pathway)}" }`,
    `  - { k: "Standard version", v: "${STD_VERSION}" }`,
    "connections:",
    '  - { label: "How limits are derived", href: "/program/structure" }',
    '  - { label: "Regulation references (source documents)", href: "/regulations" }',
    `  - { label: "Heavy Metal Index — literature baseline", href: "https://heavymetalindex.com/products/${rec.slug}" }`,
    "---",
    "",
  ].join("\n")

  const body = `<section id="method" style="margin-bottom:52px"><h2 ${H2}>How every number on this page is set</h2>
${scopeHtml}${methodParas(rec)}</section>

<section id="limits" style="margin-bottom:52px"><h2 ${H2}>Master Limit Table</h2>
<p ${PMUT}>Limits in mg/kg of product as placed on the market. Tier 1 (Pb, Cd, iAs, Hg) are zero-tolerance toxics; Tier 2 (tAs, Ni, Al, Cr, Sn) carry a transitional allowance under the program&rsquo;s Status A&ndash;E framework. Analytes with no government limit for this product are listed below the table (screened by method, or not material), so all ten certification analytes are accounted for.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:52rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Tier</th><th ${THR}>HMTc limit</th><th ${TH}>Basis</th><th ${TH}>Strictest government</th><th ${TH}>Rationale</th></tr></thead>
<tbody>
${masterTable(rec)}
</tbody></table></div></section>

${controlBlock(rec)}${screenedBlock(rec)}<section id="derivation" style="margin-bottom:52px"><h2 ${H2}>Derivation &mdash; every government value, side by side</h2>
<p ${PMUT}>Each row lists the government value(s) weighed for this analyte in the total-content basis, converted to mg/kg; the HMTc limit is the strictest of them (or the disclosed read-across where no direct sovereign limit exists).</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13px;border:1px solid #e8e1db;min-width:44rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Government value(s) considered (mg/kg)</th><th ${THR}>HMTc</th><th ${TH}>Binds</th></tr></thead>
<tbody>
${derivationTable(rec)}
</tbody></table></div></section>

<section id="cite" style="margin-bottom:20px"><h2 ${H2}>Cite this standard</h2>
<div style="border:1px solid #e8e1db;background:#fffdfb"><div style="padding:11px 15px;border-bottom:1px solid #e8e1db;background:#fdf4f3;font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:#9f2727">Reuse this page</div>
<div style="padding:14px 15px"><p style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.75;color:#5a4141;margin:0 0 14px">Pendergrass, K. &ldquo;${rec.name}.&rdquo; In Heavy Metal Tested &amp; Certified (HMTc) Household Cleaning and Dishwashing standard, version ${STD_VERSION}. Institute of Contaminant Standards (ICS), 2026.</p>
<p style="font-size:11.5px;line-height:1.55;color:#a9a1a1;margin:0">The evidence each limit is applied to lives on the independent <a href="https://heavymetalindex.com/products/${rec.slug}" style="color:#1c43ad">Heavy Metal Index</a>; HMTc cites it one way and never the reverse. HMTc standards are living, versioned documents; this page reflects ${STD_VERSION}.</p></div></div></section>

<!-- BEGIN: hmtc-sources -->
## Source regulations

Every government regulation weighed to set this standard, in the total-content basis of the product as placed on the market. Household cleaning products are largely unregulated for heavy-metal content; where no sovereign limit exists, the analyte is screened by method or recorded as not material rather than assigned an invented number.

${sourceRegs(rec)}
<!-- END: hmtc-sources -->
`
  return fm + body
}

// ---- drive ----
fs.mkdirSync(OUT, { recursive: true })
const only = arg("only")
const files = fs.readdirSync(CDIR).filter((f) => f.endsWith(".json")).filter((f) => !only || only.split(",").includes(f.replace(/\.json$/, "")))
for (const f of files) {
  const rec = JSON.parse(fs.readFileSync(path.join(CDIR, f), "utf8"))
  const out = path.join(OUT, `${rec.slug}.md`)
  fs.writeFileSync(out, page(rec), "utf8")
  const limited = PANEL.filter((a) => isLimited(rec.cells[a])).length
  const ctl = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type === "control").length
  const nm = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type === "not_material").length
  console.log(`wrote content/standards/${rec.slug}.md — ${limited} limited, ${ctl} control, ${nm} not-material`)
}
console.log(`\n${files.length} page(s) written to ${OUT}`)
