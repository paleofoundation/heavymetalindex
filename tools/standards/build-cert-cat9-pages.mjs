#!/usr/bin/env node
// build-cert-cat9-pages.mjs — emit the HMTc Category-9 (Infant & Child CONTACT Products) standard as
// CUSTOM cert-site pages (content/standards/<slug>.md, custom_page: true) in the heavymetalcertified repo.
//
// Reads the compiled derivation (data/workbench/standards/cat9-compiled/<slug>.json) produced by
// compile-cat9.mjs. Every number traces to a named register row; this generator only renders.
//
// FIREWALL (CLAUDE.md Part 2): writes to the CERT repo only. Values are sovereign government limits
// (public record) + the program's tiering. One-way citation OUT to the heavymetalindex.com literature
// baseline. No wiki import. Contact-product basis is NEVER conflated: migration, total-content, and
// skin-extraction limits are rendered as distinct rows with their basis stated.
//
// Design tokens copied from build-cert-standard-pages.mjs / the seafood pages for visual parity:
// NO markdown bold; one canonical table style (#9f2727 header); mg/kg display (natural unit for
// migration/content limits); "$" avoided (cert renderer treats it as math).

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const REPO = process.cwd()

// PUBLICATION GATE (invariant-first): a standard page may not be published while any of its
// not-material cells is contradicted by a source routed to the row. This makes the diaper-class
// error — shipping "Sn not material" while a routed paper measured tin — impossible to generate,
// rather than something an after-the-fact audit hopes to catch. The check is the single source of
// truth (tools/evidence/audit-not-material-integrity.mjs); the generator refuses to emit on a
// non-zero exit. Run before writing each page.
function gateOrThrow(slug) {
  try {
    execFileSync("node", ["tools/evidence/audit-not-material-integrity.mjs", `--row=${slug}`], { cwd: REPO, stdio: "pipe" })
  } catch (e) {
    const out = (e.stdout ? e.stdout.toString() : "") + (e.stderr ? e.stderr.toString() : "")
    throw new Error(`PUBLICATION BLOCKED for ${slug}: a not-material cell is contradicted by routed evidence. Re-adjudicate before publishing.\n${out}`)
  }
}
const CERT = path.join(process.env.HOME, "Desktop/heavymetalcertified")
const OUT = path.join(CERT, "content/standards")
const CDIR = path.join(REPO, "data/workbench/standards/cat9-compiled")
const REG = parse(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(REG.map((r) => [r.regulatory_limit_id, r]))
function parse(t) { const L = t.replace(/\r/g, "").trim().split("\n"); const H = sp(L[0]); return L.slice(1).map((l) => Object.fromEntries(sp(l).map((v, i) => [H[i], v]))) }
function sp(line) { const o = []; let c = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = "" } else c += ch } o.push(c); return o.map((s) => s.replace(/^"|"$/g, "")) }

const today = new Date().toISOString().slice(0, 10)
const STD_VERSION = "1.0 (2026-08-10)"
const METHODOLOGY = "Method v2.0 — strictest credible government limit per analyte, in the correct basis (CLAUDE.md Part 19)"

const ANALYTE_DISP = { Pb: "Lead (Pb)", tAs: "Arsenic, total (tAs)", iAs: "Inorganic arsenic (iAs)", Cd: "Cadmium (Cd)", tHg: "Mercury, total (tHg)", MeHg: "Methylmercury (MeHg)", Ni: "Nickel (Ni)", Al: "Aluminium (Al)", "Cr-VI": "Chromium VI (Cr-VI)", Sn: "Tin (Sn)" }
const TIER1 = new Set(["Pb", "Cd", "iAs", "tHg", "MeHg"])
const PANEL = ["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Cr-VI", "Sn"]
const GOVNAME = { EU: "European Union", "US-WA": "Washington State", US: "United States (ASTM F963 / CPSIA)", MX: "Mexico", CA: "Canada", "US-CPSC": "US (CPSC)" }

// mg/kg display from a µg/kg register value
const mg = (ug) => {
  if (ug == null) return "&mdash;"
  const v = ug / 1000
  if (v >= 100) return String(Math.round(v))
  if (v >= 1) return String(Math.round(v * 10) / 10).replace(/\.0$/, "")
  if (v >= 0.001) return String(Number(v.toPrecision(2)))
  return String(v)
}
const govLabel = (id) => { const r = byId.get(id); if (!r) return "" ; return GOVNAME[r.jurisdiction] || r.jurisdiction }

// ---- design tokens ----
const H2 = 'style="font-family:Lora,serif;font-weight:400;font-size:30px;line-height:1.2;color:#2b1f1f;border-bottom:1px solid #e8e1db;padding-bottom:10px;margin:0 0 20px"'
const TH = "style=\"text-align:left;padding:11px 15px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase\""
const THR = TH.replace("text-align:left", "text-align:right")
const TD = "padding:11px 15px;vertical-align:top;border-bottom:1px solid #f2ece7"
const P = 'style="font-size:15.5px;line-height:1.75;color:#3f3a3a;margin:0 0 16px;max-width:84ch"'
const PMUT = 'style="font-size:11.5px;line-height:1.55;color:#a9a1a1;max-width:84ch;margin:0 0 14px"'

function limitDisplay(cell) {
  if (cell.type === "not_material") return { v: "n/m", note: "not material" }
  if (cell.type === "read_across") return { v: cell.not_detectable ? `ND (&lt;${mg(cell.value)})` : mg(cell.value), note: "read-across" }
  if (cell.type === "special") return { v: `${cell.value} ${cell.unit || ""}`, note: "special basis" }
  if (cell.not_detectable) return { v: `ND (&lt;${mg(cell.value)})`, note: "not detectable" }
  if (cell.value != null) return { v: mg(cell.value), note: "gov" }
  return { v: "&mdash;", note: "" }
}

function bindingName(cell) {
  if (cell.type === "gov") return `${GOVNAME[cell.binding_jurisdiction] || cell.binding_jurisdiction}`
  if (cell.type === "read_across") return `${GOVNAME[cell.source_jurisdiction] || cell.source_jurisdiction} (read-across)`
  if (cell.type === "special") return cell.jurisdiction
  return ""
}

function masterTable(rec) {
  const rows = []
  let i = 0
  for (const a of PANEL) {
    const c = rec.cells[a]
    if (!c) continue
    if (c.type === "not_material") continue // not-material analytes move to the "Screened, not limited" block
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    i++
    const tier = TIER1.has(a) ? "Tier 1" : "Tier 2"
    const ld = limitDisplay(c)
    const basis = c.basis || ""
    const gov = bindingName(c)
    const rationale = "regulatory-alignment"
    rows.push(`      <tr${z}><td style="${TD};color:#2b1f1f">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12px">${tier}</td><td style="${TD};font-family:'IBM Plex Mono',monospace;color:#2b1f1f;text-align:right;white-space:nowrap">${ld.v}</td><td style="${TD};color:#736b6b;font-size:12.5px">${basis}</td><td style="${TD};color:#736b6b;font-size:12.5px">${gov}</td><td style="${TD};color:#736b6b;font-size:12px">${rationale}</td></tr>`)
    // companion ceilings as annotated sub-rows
    for (const comp of c.companion || []) {
      if (comp.error) continue
      const cd = comp.not_detectable ? `ND (&lt;${mg(comp.value)})` : mg(comp.value)
      rows.push(`      <tr${z}><td style="${TD};color:#736b6b;padding-left:28px;font-size:12.5px">&#8627; ${comp.label}</td><td style="${TD};color:#736b6b;font-size:12px"></td><td style="${TD};font-family:'IBM Plex Mono',monospace;color:#736b6b;text-align:right;white-space:nowrap">${cd}</td><td style="${TD};color:#736b6b;font-size:12.5px">${comp.basis}</td><td style="${TD};color:#736b6b;font-size:12.5px">${GOVNAME[comp.binding_jurisdiction] || comp.binding_jurisdiction}</td><td style="${TD};color:#736b6b;font-size:12px">companion ceiling</td></tr>`)
    }
  }
  return rows.join("\n")
}

function screenedBlock(rec) {
  const nm = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type === "not_material")
  if (!nm.length) return ""
  const rows = nm.map((a, i) => {
    const c = rec.cells[a]
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    const why = (c.rationale ? String(c.rationale) : c.bounded_by ? `Bounded by ${ANALYTE_DISP[c.bounded_by] || c.bounded_by}.` : "No exposure pathway and no government limit.").replace(/</g, "&lt;")
    return `      <tr${z}><td style="${TD};color:#2b1f1f;white-space:nowrap">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12.5px;line-height:1.6">${why}</td></tr>`
  }).join("\n")
  return `<section id="screened" style="margin-bottom:52px"><h2 ${H2}>Screened, not limited</h2>
<p ${PMUT}>All ten HMTc certification analytes are accounted for. The analytes below carry no published ceiling for this product because no exposure pathway and no government limit exist; each determination is recorded here rather than left as a silent gap. They are screened during certification, not certified against a number.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:40rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Why it carries no ceiling for this product</th></tr></thead>
<tbody>
${rows}
</tbody></table></div></section>

`
}

function derivationTable(rec) {
  // one compact row per analyte listing every candidate government value considered
  const rows = []
  let i = 0
  for (const a of PANEL) {
    const c = rec.cells[a]
    if (!c || c.type === "not_material") continue
    const cands = (c.candidates || []).map((x) => `${GOVNAME[x.jurisdiction] || x.jurisdiction} ${mg(x.value)}`).join(" &middot; ") || (c.type === "read_across" ? `${GOVNAME[c.source_jurisdiction] || c.source_jurisdiction} ${mg(c.value)} (read-across)` : "")
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    i++
    const ld = limitDisplay(c)
    rows.push(`      <tr${z}><td style="${TD};color:#2b1f1f">${ANALYTE_DISP[a]}</td><td style="${TD};color:#736b6b;font-size:12.5px">${cands}</td><td style="${TD};font-family:'IBM Plex Mono',monospace;color:#9f2727;text-align:right;font-weight:500">${ld.v}</td><td style="${TD};color:#736b6b;font-size:12px">${bindingName(c)}</td></tr>`)
  }
  return rows.join("\n")
}

function sourceRegs(rec) {
  const ids = new Set()
  for (const a of PANEL) {
    const c = rec.cells[a]; if (!c) continue
    if (c.binding_id) ids.add(c.binding_id)
    if (c.source_id) ids.add(c.source_id)
    for (const comp of c.companion || []) if (comp.binding_id) ids.add(comp.binding_id)
  }
  const pages = new Map()
  for (const id of ids) { const r = byId.get(id); if (!r) continue; const key = r.regulation_page || r.regulatory_limit_id; if (!pages.has(key)) pages.set(key, r) }
  const lines = ["| # | Regulation | Instrument | Basis | Role in this standard |", "| --- | --- | --- | --- | --- |"]
  let n = 1
  for (const [pageKey, r] of pages) {
    const nm = regName(r)
    // Firewall: cert cites the INDEX regulation record one-way (absolute URL out to heavymetalindex.com).
    const href = r.regulation_page ? `https://heavymetalindex.com/regulations/${r.regulation_page.replace(/^regulations\//, "")}` : null
    const cell = href ? `[${nm}](${href})` : nm
    lines.push(`| ${n++} | ${cell} | ${instrument(r)} | ${basisFamily(r)} | ${role(r)} |`)
  }
  return lines.join("\n")
}
function regName(r) {
  const p = r.regulation_page || ""
  if (p.includes("eu-2009-48")) return "EU Toy Safety Directive 2009/48/EC (Annex II Pt III)"
  if (p.includes("eu-10-2011")) return "EU Regulation 10/2011 (plastic food-contact, Annex II)"
  if (p.includes("astm-f963")) return "ASTM F963 (mandatory under CPSIA s.106)"
  if (p.includes("washington-cspa")) return "Washington Children's Safe Product Act"
  if (p.includes("us-cpsia")) return "US CPSIA (total lead in children's products)"
  if (p.includes("eu-reach-2015-628")) return "EU REACH entry 63 (lead in mouthable articles)"
  if (p.includes("eu-reach-2018-1513")) return "EU REACH entry 72 (metals in consumer textiles)"
  if (p.includes("mexico-nom-252")) return "Mexico NOM-252-SSA1-2011 (toy/school-article metals)"
  if (p.includes("canada-sor-2011-17")) return "Canada Toys Regulations SOR/2011-17"
  return r.authority || r.jurisdiction
}
function instrument(r) { return /migration|soluble|specific migration/i.test(r.basis) ? "Migration limit" : /total|content|percent|coating/i.test(r.basis) ? "Content limit" : /extraction/i.test(r.basis) ? "Extraction limit" : "Limit" }
function basisFamily(r) {
  const b = r.basis || ""
  if (/specific migration into food/i.test(b)) return "specific migration into food"
  if (/element migration|soluble/i.test(b)) return "acid-soluble migration from material"
  if (/after extraction/i.test(b)) return "skin-contact extraction"
  if (/total|percent|content|coating/i.test(b)) return "total content"
  return b.slice(0, 40)
}
function role(r) {
  const b = r.basis || ""
  if (/specific migration|element migration|soluble|after extraction/i.test(b)) return "Binds one or more migration/extraction limits"
  return "Companion total-content ceiling"
}

function page(rec) {
  const firm = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type !== "not_material").length
  const nm = rec.cells.__name || rec.name
  const fm = [
    "---",
    `title: "${rec.name} — HMTc Standard"`,
    "type: standard",
    "custom_page: true",
    `firm_analytes: ${firm}`,
    `description: "The Heavy Metal Tested & Certified standard for ${rec.name.toLowerCase()}. A contact-product standard: limits are heavy-metal MIGRATION and total-content limits from toy-safety, childcare-article, and food-contact-material law — not dietary maximum levels. Each limit is the strictest credible government value in the correct basis, by lookup; basis is never conflated."`,
    "category: 9",
    'category_name: "Infant and Child Contact Products (Ages 0-5)"',
    `product_slug: ${rec.slug}`,
    `subcategory: "${rec.name}"`,
    `governing_basis: "${rec.governing_basis}"`,
    `standard_version: "${STD_VERSION}"`,
    `methodology_version: "${METHODOLOGY}"`,
    "variant_type: independent",
    `hmi_literature_link: https://heavymetalindex.com/products/${rec.slug}`,
    `effective_date: ${today}`,
    "scholar_eligible: true",
    "cert_doi: null",
    "audience: [regulator, brand-legal, retailer-compliance, certifier]",
    "rail_box:",
    `  title: "Document versions"`,
    `  body: "v1.0 &middot; 2026-08-10 &middot; current. First edition; as the standard revises, each edition keeps its own stable URL and DOI, and earlier editions stay resolvable here."`,
    "snapshot:",
    `  - { k: "Analytes limited", v: "${firm} / ${PANEL.length}" }`,
    '  - { k: "Method", v: "Strictest government limit, correct basis" }',
    `  - { k: "Governing basis", v: "${basisShort(rec.governing_basis)}" }`,
    `  - { k: "Standard version", v: "${STD_VERSION}" }`,
    "connections:",
    '  - { label: "How limits are derived", href: "/program/structure" }',
    '  - { label: "Regulation references (source documents)", href: "/regulations" }',
    `  - { label: "Heavy Metal Index — literature baseline", href: "https://heavymetalindex.com/products/${rec.slug}" }`,
    "---",
    "",
  ].join("\n")

  const scopeHtml = rec.scope_note
    ? `<p style="font-size:14px;line-height:1.7;color:#5a4141;margin:0 0 20px;max-width:84ch;padding:13px 16px;background:#fdf4f3;border-left:3px solid #9f2727"><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9f2727;margin-bottom:5px">What this standard covers</span>${rec.scope_note}</p>\n`
    : ""
  const body = `<section id="method" style="margin-bottom:52px"><h2 ${H2}>How every number on this page is set</h2>
${scopeHtml}<p ${P}>${rec.name} is a contact product, not a food. Its heavy-metal limits are ${basisSentence(rec.governing_basis)} &mdash; not dietary maximum levels. The standard for each analyte is the strictest limit set by any credible government regulator for this product in its own basis: a lookup of sovereign law, with the measured quantity stated on every row. Where no instrument directly governs the exact product form &mdash; a pacifier is excluded from the Toy Safety Directive, a disposable diaper from the REACH textile restriction &mdash; the limit is read across from the nearest applicable sovereign limit and labelled as a read-across, never asserted as direct governance. Migration limits (what leaves the article into saliva or food) and total-content limits (how much metal the article contains) are different quantities measured by different methods; they are published as separate ceilings and never combined into one number. A certified product meets every applicable limit at once, each on a like-for-like basis.</p>
<p ${P}>Inorganic arsenic and methylmercury are not published for this category: they are ingestion-and-bioaccumulation speciation forms with no migration counterpart in a contact article, and the total-element ceilings (total arsenic, total mercury) bound them. Where a cell is marked not material, no regulator sets a limit and no exposure pathway exists; the determination is recorded, not left blank.</p></section>

<section id="limits" style="margin-bottom:52px"><h2 ${H2}>Master Limit Table</h2>
<p ${PMUT}>Limits in mg/kg, in the basis named on each row. &ldquo;ND&rdquo; means not detectable at the regulation&rsquo;s stated detection limit &mdash; the strictest possible ceiling. Sub-rows (&#8627;) are companion ceilings in a different basis that also apply. Tier 1 (Pb, Cd, iAs, Hg) are zero-tolerance toxics; Tier 2 (tAs, Ni, Al, Cr-VI, Sn) carry a transitional allowance under the program&rsquo;s Status A&ndash;E framework. Antimony is regulated in the toy-migration instruments and screened, but is not one of the ten HMTc certification analytes.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:52rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Tier</th><th ${THR}>HMTc limit</th><th ${TH}>Basis</th><th ${TH}>Strictest government</th><th ${TH}>Rationale</th></tr></thead>
<tbody>
${masterTable(rec)}
</tbody></table></div></section>

${screenedBlock(rec)}<section id="derivation" style="margin-bottom:52px"><h2 ${H2}>Derivation &mdash; every government value, side by side</h2>
<p ${PMUT}>Each row lists every government limit weighed for this analyte in the governing basis, converted to mg/kg; the HMTc limit is the strictest of them. Companion total-content ceilings appear in the Master Limit Table above, not here, because they are a different measured quantity.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13px;border:1px solid #e8e1db;min-width:44rem;border-collapse:collapse">
<thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Government limits considered (mg/kg)</th><th ${THR}>HMTc</th><th ${TH}>Binds</th></tr></thead>
<tbody>
${derivationTable(rec)}
</tbody></table></div></section>

<section id="cite" style="margin-bottom:20px"><h2 ${H2}>Cite this standard</h2>
<div style="border:1px solid #e8e1db;background:#fffdfb"><div style="padding:11px 15px;border-bottom:1px solid #e8e1db;background:#fdf4f3;font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:#9f2727">Reuse this page</div>
<div style="padding:14px 15px"><p style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.75;color:#5a4141;margin:0 0 14px">Pendergrass, K. &ldquo;${rec.name}.&rdquo; In Heavy Metal Tested &amp; Certified (HMTc) Infant and Child Contact Products standard, version ${STD_VERSION}. Institute of Contaminant Standards (ICS), 2026.</p>
<p style="font-size:11.5px;line-height:1.55;color:#a9a1a1;margin:0">The evidence each limit is applied to lives on the independent <a href="https://heavymetalindex.com/products/${rec.slug}" style="color:#1c43ad">Heavy Metal Index</a>; HMTc cites it one way and never the reverse. HMTc standards are living, versioned documents; this page reflects ${STD_VERSION}.</p></div></div></section>

<!-- BEGIN: hmtc-sources -->
## Source regulations

Every government regulation weighed to set this standard, evaluated against each other in the correct basis. The strictest applicable limit binds each analyte; basis is never conflated across families.

${sourceRegs(rec)}
<!-- END: hmtc-sources -->
`
  return fm + body
}

function basisShort(g) { if (/EN 1400|soother/i.test(g)) return "soother migration (EN 1400)"; if (/specific migration into food/i.test(g)) return "food migration (SML)"; if (/scraped-off|toy/i.test(g)) return "toy migration"; if (/skin-contact|extract|REACH/i.test(g)) return "skin extraction"; return "government limit" }
function basisSentence(g) {
  if (/EN 1400|soother/i.test(g)) return "the element-migration limits required by the EN 1400 soother standard, which applies the EN 71-3 / Toy Safety Directive Category III limits. Pacifiers are excluded from the Toy Safety Directive itself (Annex I item 16), so these migration limits are read across from the toy-migration regime via the EN 1400 route; the limit values are identical"
  if (/specific migration into food/i.test(g)) return "specific migration limits into the milk or food it holds (EU Regulation 10/2011; US FDA food-contact provisions). Regulation 10/2011 is written for plastics; for glass and stainless-steel components the same limits are applied as a conservative read-across, since no stricter metal-food-contact sovereign limit exists"
  if (/scraped-off|toy/i.test(g)) return "element migration limits from the material a child mouths (EU Toy Safety Directive 2009/48/EC Category III scraped-off; ASTM F963; the EN 71-3 test standard)"
  if (/skin-contact|extract|REACH/i.test(g)) return "extractable-metal limits for the skin-contact textile and elastic components (EU REACH Annex XVII entry 72). Entry 72 excludes disposable textiles, so the limits bind reusable-cloth components directly and are read across as the benchmark for disposable-diaper skin-contact components; the absorbent core has no metal-migration pathway"
  return "government migration and content limits"
}

// ---- drive ----
fs.mkdirSync(OUT, { recursive: true })
const only = (process.argv.find((a) => a.startsWith("--only=")) || "").split("=")[1]
const files = fs.readdirSync(CDIR).filter((f) => f.endsWith(".json")).filter((f) => !only || only.split(",").includes(f.replace(/\.json$/, "")))
for (const f of files) {
  const rec = JSON.parse(fs.readFileSync(path.join(CDIR, f), "utf8"))
  gateOrThrow(rec.slug) // refuse to publish a page whose not-material cell is contradicted by routed evidence
  const out = path.join(OUT, `${rec.slug}.md`)
  fs.writeFileSync(out, page(rec), "utf8")
  const firm = PANEL.filter((a) => rec.cells[a] && rec.cells[a].type !== "not_material").length
  console.log(`wrote content/standards/${rec.slug}.md — ${firm}/${PANEL.length} limited`)
}
