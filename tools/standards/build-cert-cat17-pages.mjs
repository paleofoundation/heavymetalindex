#!/usr/bin/env node
// Category-17 (Pet Foods) CERT PAGE EMITTER.
//
// Reads the frozen human-grade derivation records (data/workbench/standards/cat17-compiled/*.json,
// produced by compile-cat17.mjs) and writes 10 self-contained, seafood-styled certification pages
// into the cert repo's content/standards/. Cross-repo, cat9-style: one script emits the whole page
// (frontmatter, completeness flag, method, master limit table, the distinctive human-grade
// disclosure table, derivation, source regulations, cite, version history).
//
// Design canon (docs/design-canon): NO BOLD on the reading surface (font-weight 400/500 only),
// accent #9f2727, Lora headings, IBM Plex Mono for labels/measured values, links #1c43ad, one
// burgundy table head. Values are mono, never inside prose. No data-firm-ppb / no bold firm values,
// so the cert firewall FIRM_VALUE_MISMATCH stays at zero (matching the seafood pages).
//
// Usage: node tools/standards/build-cert-cat17-pages.mjs [--cert=<cert content root>] [--only=slug,...]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CERT = args.get("cert") || path.join(process.env.HOME, "Desktop/heavymetalcertified/.claude/worktrees/cat17-petfood")
const ONLY = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const COMPILED = path.join(REPO, "data/workbench/standards/cat17-compiled")
const OUT = path.join(CERT, "content/standards")
const EFFECTIVE = "2026-08-13"
const VERSION = `1.0 (${EFFECTIVE})`

const JUR = {
  EU: "European Union", UK: "United Kingdom", CODEX: "Codex Alimentarius", US: "US FDA",
  CA: "Canada", "AU-NZ": "Australia / New Zealand", CN: "China", IN: "India", BR: "Brazil",
  GSO: "Gulf (GSO)", KR: "South Korea", MX: "Mexico", TR: "Türkiye", PY: "Paraguay",
  MERCOSUR: "Mercosur", IL: "Israel", TH: "Thailand", VN: "Vietnam", PH: "Philippines",
  SG: "Singapore", CL: "Chile", CO: "Colombia", PA: "Panama", FJ: "Fiji", GY: "Guyana",
  MA: "Morocco", international: "Codex / international",
}
const jl = (j) => JUR[j] || j

// analyte display + tiering (Status A–E framework: Tier 1 zero-tolerance, Tier 2 capped)
const ANALYTES = [
  { k: "Pb", label: "Lead (Pb)", tier: 1 },
  { k: "Cd", label: "Cadmium (Cd)", tier: 1 },
  { k: "tAs", label: "Total arsenic (tAs)", tier: 2 },
  { k: "iAs", label: "Inorganic arsenic (iAs)", tier: 1 },
  { k: "tHg", label: "Mercury, total (tHg)", tier: 1 },
  { k: "MeHg", label: "Methylmercury (MeHg)", tier: 1 },
  { k: "Ni", label: "Nickel (Ni)", tier: 2 },
  { k: "Sn", label: "Tin (Sn)", tier: 2 },
  { k: "Al", label: "Aluminium (Al)", tier: 2 },
  { k: "Cr", label: "Total chromium (Cr)", tier: 2 },
  { k: "Cr-VI", label: "Hexavalent chromium (Cr-VI)", tier: 2 },
]
const REQUIRED = ["Pb", "Cd", "tAs", "iAs", "tHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"] // 10-analyte required panel

// per-subcategory page metadata
const META = {
  "pet-food-dry-kibble": { title: "Dry pet food (complete & balanced kibble)", hmi: "pet-food-dry-kibble" },
  "pet-food-canned-wet": { title: "Canned / wet pet food (complete & balanced)", hmi: "pet-food-canned-wet" },
  "pet-food-semi-moist": { title: "Semi-moist pet food", hmi: "pet-food-semi-moist" },
  "pet-food-raw": { title: "Raw pet food (frozen / chilled raw diets)", hmi: "pet-food-raw" },
  "pet-food-freeze-dried": { title: "Freeze-dried / dehydrated pet food (including freeze-dried raw)", hmi: "pet-food-freeze-dried" },
  "pet-treats-snacks": { title: "Pet treats & snacks", hmi: "pet-treats-snacks" },
  "pet-chews-dental": { title: "Pet chews (including dental chews)", hmi: "pet-chews-dental" },
  "pet-toppers-mixers-broths": { title: "Pet toppers, mixers & broths", hmi: "pet-toppers-mixers-broths" },
  "pet-milk-replacers-specialty-liquids": { title: "Pet milk replacers & specialty liquids", hmi: "pet-milk-replacers-specialty-liquids" },
  "pet-food-fish-marine-protein": { title: "Fish-based / marine-protein pet diets", hmi: "pet-food-fish-marine-protein" },
}

// --- styling helpers (verbatim from the seafood/cert design canon) ------------
const H2 = "font-family:Lora,serif;font-weight:400;font-size:30px;line-height:1.2;color:#2b1f1f;border-bottom:1px solid #e8e1db;padding-bottom:10px;margin:0 0 20px"
const P = "font-size:15.5px;line-height:1.75;color:#3f3a3a;margin:0 0 16px;max-width:84ch"
const NOTE = "font-size:11.5px;line-height:1.55;color:#a9a1a1;max-width:84ch"
const TH = "text-align:left;padding:11px 15px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase"
const THR = "text-align:right;padding:11px 15px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase"
const TD = "padding:10px 15px;color:#2b1f1f"
const TDG = "padding:10px 15px;color:#736b6b;font-size:12.5px"
const TDMONO = "padding:10px 15px;text-align:right;font-family:'IBM Plex Mono',monospace;color:#2b1f1f"

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const num = (v) => (typeof v === "number" ? v.toLocaleString("en-US") : v)
// Concise analog phrase for table cells: the ingredient clause between an em-dash and a parenthetical,
// else the text before the parenthetical, else the whole label. Keeps the verbose config label out of tables.
function shortAnalog(label) {
  if (!label) return "human-food analog"
  let s = label
  const dash = s.indexOf(" — ")
  if (dash !== -1) s = s.slice(dash + 3)
  const paren = s.indexOf(" (")
  if (paren !== -1) s = s.slice(0, paren)
  return s.trim()
}

function cellDisplay(cell) {
  if (cell.value != null) return num(cell.value)
  if (cell.type === "not_material") return "n/m"
  if (cell.type === "control") return "control"
  if (cell.type === "subsumed") return "≤ tHg"
  return "—"
}
function feedFloorMax(cell) {
  if (!cell.feed_floor || !cell.feed_floor.length) return null
  const vals = cell.feed_floor.map((f) => f.value).filter((v) => typeof v === "number")
  return vals.length ? Math.max(...vals) : null
}
function feedFloorSources(cell) {
  if (!cell.feed_floor || !cell.feed_floor.length) return ""
  const seen = new Set()
  const names = []
  for (const f of cell.feed_floor) {
    const nm = f.id.startsWith("eu2002_32") ? "EU 2002/32" : f.id.startsWith("jp_petfood") ? "Japan FAMIC" : f.id.startsWith("cn_petfood") ? "China (draft)" : jl(f.jurisdiction)
    if (!seen.has(nm)) { seen.add(nm); names.push(nm) }
  }
  return names.join(", ")
}

// --- section builders ---------------------------------------------------------
function completenessFlag(cells) {
  const missing = REQUIRED.filter((k) => cells[k]?.value == null && cells[k]?.type !== "subsumed")
  const numericCount = REQUIRED.filter((k) => cells[k]?.value != null).length
  if (!missing.length) return "" // complete — no flag (audit tool clears it)
  const controlList = missing.filter((k) => cells[k]?.type === "control").map((k) => ANALYTES.find((a) => a.k === k).label)
  const nmList = missing.filter((k) => cells[k]?.type === "not_material").map((k) => ANALYTES.find((a) => a.k === k).label)
  const parts = []
  if (controlList.length) parts.push(`Controlled without a numeric human-food maximum: ${controlList.join(", ")}.`)
  if (nmList.length) parts.push(`Not material in this matrix: ${nmList.join(", ")}.`)
  return `<!-- BEGIN: HMTC:PANEL-AUDIT -->
<section data-panel-audit="incomplete" style="margin:0 0 40px;padding:18px 20px;border:1px solid #e6c8c4;border-left:4px solid #9f2727;background:#fdf4f3"><div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#9f2727;margin:0 0 8px">Standards completeness flag</div><p style="font-size:14px;line-height:1.7;color:#3f3a3a;margin:0;max-width:84ch">${numericCount} of 10 required analytes carry a numeric human-grade limit. ${esc(parts.join(" "))} A controlled analyte is measured on every lot with no defensible human-food number to anchor to; regulatory silence does not establish immateriality, and each not-material determination is registered and evidence-tested. This is the honest state of the science for this matrix, not a certification-readiness gap to hide.</p></section>
<!-- END: HMTC:PANEL-AUDIT -->`
}

function methodSection(rec) {
  const basisLabel = rec.native_basis === "as_sold" ? "as sold" : "as consumed"
  return `<section id="method" style="margin-bottom:52px"><h2 style="${H2}">How every number on this page is set</h2>
<p style="${P}">Pet food is legally governed by <em>feed</em> law &mdash; the EU&rsquo;s Directive 2002/32 on undesirable substances in animal feed, the US FDA Center for Veterinary Medicine&rsquo;s guidance, and the AAFCO model regulations, with enforced pet-food maxima in Japan and draft maxima in China. Those feed limits are generally far laxer than the limits the same governments set for human food. Heavy Metal Tested &amp; Certified does not certify to the feed limit. For each analyte, the standard is the strictest maximum level a credible government sets for the nearest <em>human</em> food, adopted voluntarily as a human-grade over-compliance and stated in ${esc(rec.name)}&rsquo;s own ${basisLabel} basis.</p>
<p style="${P}">This is an intentional over-compliance, and it is disclosed as one. Every row below shows the feed-law floor the product is legally allowed to meet, and the tighter human-food limit HMTc certifies to instead. That honesty is the point: a certified pet food is held to the maximum levels that govern food for people, not the looser levels that govern feed for animals. Where the nearest human food is itself unregulated for an analyte, the standard does not invent a number: the analyte is a mandatory-tested control, or a registered, evidence-tested not-material determination.</p>
<p style="${P}">Basis is never conflated. A dry product (kibble, semi-moist, freeze-dried, treats, chews) reads across only from dry human foods as sold; a wet product (canned, raw, broths, milk replacers, fish diets) only from human foods as consumed. No wet-to-dry conversion is performed, and where a human analog is published on a more concentrated basis than the pet product the adopted value is conservative, never loosened.</p></section>`
}

function masterTable(cells) {
  const rows = ANALYTES.map((a, i) => {
    const c = cells[a.k]
    const disp = cellDisplay(c)
    const bg = i % 2 ? ";background:#fbf7f5" : ""
    let basis
    if (c.value != null) basis = c.type === "read_across" ? `human-grade read-across (${jl(c.source_jurisdiction)})` : "government maximum level"
    else if (c.type === "control") basis = "controlled &mdash; no human-food maximum (see note)"
    else if (c.type === "not_material") basis = "not material in this matrix (see note)"
    else if (c.type === "subsumed") basis = "bounded by total mercury"
    else basis = "&mdash;"
    return `<tr style="border-bottom:1px solid #f2ece7${bg}"><td style="${TD}">${a.label}</td><td style="padding:10px 15px;color:#736b6b;font-size:12px">Tier ${a.tier}</td><td style="${TDMONO}">${disp}</td><td style="${TDG}">${basis}</td></tr>`
  }).join("")
  return `<section id="limits" style="margin-bottom:52px"><h2 style="${H2}">Master Limit Table</h2>
<p style="${NOTE};margin:0 0 14px">All values in ppb (&micro;g/kg). Every numeric cell is the strictest human-food sovereign maximum for the nearest analog, adopted as the human-grade limit. A brand meeting every value qualifies for the mark.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:46rem;border-collapse:collapse"><thead><tr style="background:#9f2727;color:#fff"><th style="${TH}">Analyte</th><th style="${TH}">Tier</th><th style="${THR}">HMTc limit</th><th style="${TH}">Basis</th></tr></thead><tbody>${rows}</tbody></table></div>
<p style="${NOTE};margin:14px 0 0">Tier 1 (Pb, Cd, iAs, mercury) are zero-tolerance toxics with no established safe threshold. Tier 2 (tAs, Ni, Sn, Al, chromium) carry a 150% transitional allowance under the program&rsquo;s Status A&ndash;E framework. Total arsenic and total mercury operate as reflex screens to their toxic species (iAs, MeHg). Hexavalent chromium reduces to Cr(III) in the food matrix and is bounded by total chromium. &ldquo;control&rdquo; means measured every lot with no defensible human-food number; &ldquo;n/m&rdquo; is a registered not-material determination.</p></section>`
}

function humanGradeTable(cells, rec) {
  const rows = ANALYTES.filter((a) => a.k !== "MeHg" && a.k !== "Cr-VI").map((a, i) => {
    const c = cells[a.k]
    const ff = feedFloorMax(c)
    const ffSrc = feedFloorSources(c)
    const hmtc = cellDisplay(c)
    const bg = i % 2 ? ";background:#fbf7f5" : ""
    let ratio = ""
    if (c.value != null && ff && ff > c.value) {
      const factor = Math.round((ff / c.value) * 10) / 10
      ratio = `${factor}&times; tighter`
    } else if (c.value != null && ff) ratio = "at or below floor"
    const ffDisp = ff != null ? `${num(ff)}${ffSrc ? ` <span style="color:#a9a1a1">(${esc(ffSrc)})</span>` : ""}` : `<span style="color:#d8cfca">no feed limit set</span>`
    const analog = c.type === "read_across" ? esc(shortAnalog(c.analog_label)) : c.type === "control" ? "no human-food maximum" : c.type === "not_material" ? "not material" : "&mdash;"
    return `<tr style="border-bottom:1px solid #f2ece7${bg}"><td style="${TD}">${a.label}</td><td style="padding:10px 15px;text-align:right;font-family:'IBM Plex Mono',monospace;color:#736b6b">${ffDisp}</td><td style="${TDMONO}">${hmtc}</td><td style="padding:10px 15px;color:#736b6b;font-size:12px">${ratio}</td><td style="${TDG}">${analog}</td></tr>`
  }).join("")
  return `<section id="human-grade" style="margin-bottom:52px"><h2 style="${H2}">Feed law is the floor. HMTc certifies to human food.</h2>
<p style="${P}">The table below is the whole argument for the mark, stated plainly. The left column is the maximum a pet food is legally allowed to contain under feed law. The right columns are the tighter human-food limit HMTc certifies to instead, and the human food that limit comes from. The gap between them is the voluntary over-compliance a brand earns by certifying.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:13px;border:1px solid #e8e1db;min-width:52rem;border-collapse:collapse"><thead><tr style="background:#9f2727;color:#fff"><th style="${TH}">Analyte</th><th style="${THR}">Feed-law floor (&micro;g/kg)</th><th style="${THR}">HMTc human-grade limit</th><th style="${TH}">Over-compliance</th><th style="${TH}">Nearest human food</th></tr></thead><tbody>${rows}</tbody></table></div>
<p style="${NOTE};margin:14px 0 0">Feed-law floor is the least strict of the applicable feed maxima (EU Directive 2002/32 complete/compound pet feed; Japan FAMIC pet-food standard; China draft pet-food guidance), stated for the strongest honest contrast. It is disclosed, never used to set the HMTc number. &ldquo;No feed limit set&rdquo; means feed law leaves the analyte unregulated, so the human-grade limit is not a reduction from a floor but a limit where feed law has none.</p></section>`
}

function derivationSection(cells, rec) {
  const rows = ANALYTES.map((a, i) => {
    const c = cells[a.k]
    const bg = i % 2 ? ";background:#fbf7f5" : ""
    let val, src
    if (c.value != null) {
      val = num(c.value)
      src = c.type === "read_across"
        ? `${jl(c.source_jurisdiction)} &mdash; ${esc(c.analog_scope || c.analog_label || "human-food analog")}`
        : "government maximum level"
    } else if (c.type === "control") { val = "control"; src = esc(c.control || "no sovereign human-food maximum; mandatory surveillance control") }
    else if (c.type === "not_material") { val = "n/m"; src = esc(c.control || "not material in this matrix") }
    else if (c.type === "subsumed") { val = "≤ tHg"; src = esc(c.label || "bounded by total mercury") }
    else { val = "&mdash;"; src = "" }
    return `<tr style="border-bottom:1px solid #f2ece7${bg}"><td style="padding:9px 12px;color:#2b1f1f;font-size:12.5px">${a.label}</td><td style="padding:9px 12px;text-align:right;font-family:'IBM Plex Mono',monospace;color:#2b1f1f;font-size:12.5px">${val}</td><td style="padding:9px 12px;color:#736b6b;font-size:11.5px;line-height:1.5">${src}</td></tr>`
  }).join("")
  return `<section id="derivation" style="margin-bottom:52px"><h2 style="${H2}">Derivation &mdash; where each number comes from</h2>
<p style="${P};font-size:13.5px;color:#736b6b">Every cell traces to one named sovereign human-food maximum level (the strictest for the nearest analog), or to an explicit control / not-material determination. No occurrence statistic and no feed limit selects a certification value.</p>
<div style="overflow-x:auto"><table style="width:100%;font-size:12.5px;border:1px solid #e8e1db;min-width:44rem;border-collapse:collapse"><thead><tr style="background:#9f2727;color:#fff"><th style="padding:9px 12px;text-align:left;font-family:'IBM Plex Mono',monospace;font-size:9.5px;font-weight:500;letter-spacing:.08em;text-transform:uppercase">Analyte</th><th style="padding:9px 12px;text-align:right;font-family:'IBM Plex Mono',monospace;font-size:9.5px;font-weight:500;letter-spacing:.08em;text-transform:uppercase">HMTc</th><th style="padding:9px 12px;text-align:left;font-family:'IBM Plex Mono',monospace;font-size:9.5px;font-weight:500;letter-spacing:.08em;text-transform:uppercase">Human-food analog / determination</th></tr></thead><tbody>${rows}</tbody></table></div></section>`
}

function sourcesSection(cells, rec) {
  // human-food source jurisdictions that bind at least one cell
  const binding = new Map()
  for (const a of ANALYTES) {
    const c = cells[a.k]
    if (c.type === "read_across" && c.source_jurisdiction) {
      if (!binding.has(c.source_jurisdiction)) binding.set(c.source_jurisdiction, [])
      binding.get(c.source_jurisdiction).push(a.label.replace(/\s*\(.*$/, ""))
    }
  }
  const humanRows = [...binding.entries()].sort((a, b) => a[0].localeCompare(b[0]))
    .map(([j, list], i) => `| ${i + 1} | ${jl(j)} human-food maximum levels | Maximum levels | Binds ${list.join(", ")} |`).join("\n")
  return `## Source instruments

Two legal registers set this page. The human-food maximum levels below are the standards HMTc certifies to; the strictest for the nearest analog binds each analyte. The feed-law floor is disclosed for contrast and never sets a number.

Human-food maximum levels (the certification basis):

| # | Instrument | Type | Role in this standard |
| --- | --- | --- | --- |
${humanRows}

Feed-law floor (disclosed, not applied): EU Directive 2002/32/EC on undesirable substances in animal feed (complete and compound pet feed); Japan FAMIC pet-food standard (2021); China draft pet-food guidance. Every value weighed against these is shown in the human-grade table above.

The literature baseline for pet-food occurrence and for each analyte is maintained independently at the [Heavy Metal Index](https://heavymetalindex.com). This certification standard applies those findings; the two are kept editorially separate by design.`
}

function page(rec) {
  const cells = rec.variants.both
  const meta = META[rec.slug]
  const numericCount = REQUIRED.filter((k) => cells[k]?.value != null).length
  const basisLabel = rec.native_basis === "as_sold" ? "as sold" : "as consumed"
  const fm = `---
title: "${meta.title} — HMTc Standard"
type: standard
description: "The Heavy Metal Tested & Certified human-grade standard for ${meta.title.toLowerCase()}, stated ${basisLabel}. Pet food is legally feed; HMTc voluntarily certifies each analyte to the strictest human-food sovereign maximum for the nearest analog, with the laxer feed-law floor disclosed for contrast."
category: 17
category_name: "Pet Foods"
product_slug: ${rec.slug}
custom_page: true
subcategory: "${meta.title}"
firm_analytes: ${numericCount}
native_basis: ${rec.native_basis}
standard_version: "${VERSION}"
methodology_version: "Method v2.0 — human-grade over-compliance (CLAUDE.md Part 19; feed floor disclosed, never selected)"
variant_type: whole_row_platform
hmi_literature_link: https://heavymetalindex.com/products/${meta.hmi}
effective_date: ${EFFECTIVE}
scholar_eligible: true
cert_doi: null
audience: [regulator, brand-legal, retailer-compliance, certifier]
rail_box:
  title: "Document versions"
  body: "v1.0 · ${EFFECTIVE} · current. First edition; as the standard revises, each edition keeps its own stable URL and DOI, and earlier editions stay resolvable here. Full change history below."
snapshot:
  - { k: "Analytes limited", v: "${numericCount} / 10" }
  - { k: "Method", v: "Human-grade over-compliance" }
  - { k: "Native basis", v: "${basisLabel}" }
  - { k: "Standard version", v: "${VERSION}" }
connections:
  - { label: "How limits are derived", href: "/program/structure" }
  - { label: "Why human-grade limits for pets", href: "/briefings/heavy-metals-in-pet-food" }
  - { label: "Regulation references (source documents)", href: "/regulations" }
  - { label: "Heavy Metal Index — literature baseline", href: "https://heavymetalindex.com/products/${meta.hmi}" }
---`

  const flag = completenessFlag(cells)
  const cite = `<section id="cite" style="margin-bottom:20px"><h2 style="${H2}">Cite this standard</h2><p style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.75;color:#5a4141;margin:0 0 14px;max-width:84ch">Pendergrass, K. &ldquo;${esc(meta.title)}.&rdquo; In Heavy Metal Tested &amp; Certified (HMTc) Pet Foods standard, version 1.0. Institute of Contaminant Standards (ICS), 2026. DOI: registration pending.</p></section>`

  const version = `## Version history

The dated editions of this standard. This standard is at its first edition; as it revises, each superseded edition keeps its own stable URL and its record here, so prior citations do not break, and a hash-verified snapshot of each edition is deposited as it is finalized.

| Version | Date | Status | What changed |
| --- | --- | --- | --- |
| v1.0 | ${EFFECTIVE} | current | Initial publication. Human-grade over-compliance (Method v2.0): pet food is legally feed, but every analyte is certified to the strictest human-food sovereign maximum for the nearest analog (${basisLabel} basis), with the feed-law floor disclosed and never used to set a number. ${numericCount} of 10 analytes carry a numeric human-grade limit; the remainder are mandatory-tested controls or registered not-material determinations. |`

  const body = [flag, methodSection(rec), masterTable(cells), humanGradeTable(cells, rec), derivationSection(cells, rec), sourcesSection(cells, rec), cite, version]
    .filter(Boolean).join("\n\n")
  return `${fm}\n\n${body}\n`
}

// --- drive --------------------------------------------------------------------
if (!fs.existsSync(OUT)) { console.error(`!! cert content dir not found: ${OUT}`); process.exit(2) }
const files = fs.readdirSync(COMPILED).filter((f) => f.endsWith(".json"))
let written = 0
for (const f of files) {
  const rec = JSON.parse(fs.readFileSync(path.join(COMPILED, f), "utf8"))
  if (ONLY.length && !ONLY.includes(rec.slug)) continue
  fs.writeFileSync(path.join(OUT, `${rec.slug}.md`), page(rec))
  written++
  console.log(`wrote ${rec.slug}.md`)
}
console.log(`\n${written} pet-food cert standard page(s) -> ${path.relative(process.env.HOME, OUT)}/`)
