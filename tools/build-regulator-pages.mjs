#!/usr/bin/env node
// Generates the regulatory-BODY pages under wiki/regulators/ — a parent layer
// above the per-instrument wiki/regulations/ pages. Each body page is mostly
// generated from wiki/static/regulations.json (filtered to the body via
// tools/regulators/agency-map.json) and carries four marker-bounded generated
// blocks the prebuild regenerates, plus hand-authored prose (Quick read,
// Mandate & scope, divergence interpretation) that is preserved across runs.
//
// Generated blocks (BEGIN/END marker convention, mirrors build-source-legend.mjs):
//   hmi-regulator-positions   — Positions across metals (the core table)
//   hmi-regulator-divergence  — Where it diverges (cross-body, per metal)
//   hmi-regulator-updatelog   — Update log (regulatory events from the dataset)
//   hmi-regulator-keydocs     — Key documents (instrument source pages)
//
// Also emits:
//   wiki/regulators/by-metal.md            (auto cross-cut: every body's stance per metal)
//   wiki/regulators/index.md               (auto catalog grouped by jurisdiction)
//   data/evidence/regulator-divergences.csv (cross-body same-metal comparison)
//
// DEFENSIBILITY: values in different units/bases (µg/kg-bw/week intake vs ppb
// concentration vs BMDL) are NOT directly comparable. The divergence block lists
// each body's position side by side and only annotates a ratio when value-type
// AND unit match. It never fabricates a "Nx divergence" across incomparable bases.
// Per CLAUDE.md Part 2, body pages report what the body officially states.

import fs from "node:fs"
import path from "node:path"

import { withGeneratedHero } from "./lib/generated-hero-fields.mjs"

const repoRoot = process.cwd()
const regulationsJsonPath = path.join(repoRoot, "wiki/static/regulations.json")
const mapPath = path.join(repoRoot, "tools/regulators/agency-map.json")
const regulatorsDir = path.join(repoRoot, "wiki/regulators")
const divergenceCsvPath = path.join(repoRoot, "data/evidence/regulator-divergences.csv")
const today = new Date().toISOString().slice(0, 10)

const METAL_LABELS = {
  Pb: "Lead", Cd: "Cadmium", iAs: "Inorganic arsenic", tAs: "Total arsenic",
  tHg: "Total mercury", MeHg: "Methylmercury", iHg: "Inorganic mercury",
  Ni: "Nickel", Al: "Aluminium", Cr: "Chromium", "Cr-VI": "Hexavalent chromium",
  Sn: "Tin", Sb: "Antimony", U: "Uranium",
}
const METAL_ORDER = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U"]

if (!fs.existsSync(regulationsJsonPath)) {
  console.error(`build-regulator-pages: ${path.relative(repoRoot, regulationsJsonPath)} not found — run build-regulations-dataset.mjs first.`)
  process.exit(1)
}
fs.mkdirSync(regulatorsDir, { recursive: true })

const { records } = JSON.parse(fs.readFileSync(regulationsJsonPath, "utf8"))
const { bodies } = JSON.parse(fs.readFileSync(mapPath, "utf8"))

// ---------- match each regulation to a body ----------

function ruleSlug(rec) {
  return String(rec.slug || "").replace(/^regulations\//, "")
}
function matchBody(rec) {
  const slug = ruleSlug(rec)
  const agency = String(rec.agency || "").trim()
  const program = String(rec.program || "").trim()
  // 1) slug prefix (reliable even when agency is null)
  for (const b of bodies) {
    if ((b.match.slugPrefix || []).some((p) => slug.startsWith(p))) return b
  }
  // 2) exact agency string
  for (const b of bodies) {
    if ((b.match.agency || []).some((a) => a.toLowerCase() === agency.toLowerCase())) return b
  }
  // 3) program
  for (const b of bodies) {
    if (program && (b.match.program || []).some((p) => p.toLowerCase() === program.toLowerCase())) return b
  }
  return null
}

const byBody = new Map(bodies.map((b) => [b.slug, []]))
const unmapped = []
for (const rec of records) {
  const b = matchBody(rec)
  if (!b) { unmapped.push({ slug: ruleSlug(rec), agency: rec.agency, program: rec.program }); continue }
  byBody.get(b.slug).push(rec)
}

// ---------- value/type rendering ----------

function metalsOf(rec) {
  const m = Array.isArray(rec.metals) ? rec.metals : (rec.metal ? [rec.metal] : [])
  return m.filter(Boolean)
}
function deriveType(rec) {
  const status = String(rec.status || "").toLowerCase()
  const unit = String(rec.limit_unit || "").toLowerCase()
  const t = `${rec.title || ""} ${rec.program || ""} ${rec.limit_unit || ""}`.toLowerCase()
  // BMDL / no-threshold first, so a "No-PTWI Position" title isn't mis-read as a PTWI
  if (/bmdl/.test(unit) || /no-?threshold|no threshold/.test(status) || /no-?ptwi/.test(t)) return "BMDL (no threshold)"
  if (/provisional tolerable monthly|ptmi/.test(t)) return "PTMI"
  if (/provisional tolerable weekly/.test(t) || /\bptwi\b/.test(t)) return "PTWI"
  if (/tolerable weekly|twi/.test(t)) return "TWI"
  if (/tolerable daily|tdi/.test(t)) return "TDI"
  if (/minimal risk level|mrl/.test(t)) return "MRL"
  if (/reference dose|rfd/.test(t)) return "Oral RfD"
  if (/maximum contaminant level|mcl/.test(t)) return "MCL (water)"
  if (/action level|closer to zero|cpg|compliance policy/.test(t)) return "Action level"
  if (/proposition 65|prop 65|madl|nsrl|listing/.test(t)) return "Prop 65"
  if (/bmdl/.test(t)) return "BMDL"
  if (/monitoring/.test(t)) return "Monitoring"
  if (/directive/.test(t)) return "Directive"
  if (/maximum level|max level|maximum allowable/.test(t)) return "Maximum level"
  return "—"
}
function cleanUnit(u) {
  return String(u || "").replace(/-/g, " ").trim()
}
function renderValue(rec) {
  const status = String(rec.status || "").toLowerCase()
  if (/withdrawn/.test(status)) return "withdrawn"
  const v = rec.limit_value
  const unit = rec.limit_unit
  if (Array.isArray(v)) return "multiple — see instrument"
  if (typeof v === "number") return `${v} ${cleanUnit(unit)}`.trim()
  const sv = v == null ? "" : String(v).trim()
  if (sv === "multiple") return "multiple — see instrument"
  if (/^monitoring/i.test(sv)) return "monitoring recommendation"
  if (sv === "") {
    const su = String(unit || "").toLowerCase()
    if (/bmdl/.test(su) || /no-?threshold/.test(status)) return "no numeric threshold (BMDL basis)"
    if (/pending|not-derived|nsrl-pending|pending-extraction/.test(su)) return "value pending"
    return "see instrument"  // a bare unit with no number is not a value
  }
  return `${sv} ${cleanUnit(unit)}`.trim()
}
function shortLabel(rec) {
  let s = String(rec.title || rec.rule_id || ruleSlug(rec))
  s = s.replace(/^(EFSA|JECFA|FDA|EPA|ATSDR|OEHHA|Codex[^—-]*|California Proposition 65|Commission [^—]*|EU [^—]*)\s*[—:-]\s*/i, "")
  s = s.split(/,|;| \(/)[0].trim()  // cut unit-laden tails at the first clause boundary
  // Quartz's wikilink alias parser splits display text on "/" and shows only the
  // last segment — strip slashes so the whole label renders (µg/kg → µg kg).
  s = s.replace(/\//g, " ").replace(/\s+/g, " ").trim()
  if (s.length > 52) s = s.slice(0, 50).trimEnd() + "…"
  return escapePipes(s)
}
function instLink(rec) {
  return `[[regulations/${ruleSlug(rec)}\\|${shortLabel(rec)}]]`
}
function effYear(rec) {
  const d = toIsoDate(rec.effective_date)
  return d ? d.slice(0, 4) : "—"
}

// ---------- generated-block renderers ----------

const M = (name) => ({ begin: `<!-- BEGIN: hmi-regulator-${name} -->`, end: `<!-- END: hmi-regulator-${name} -->` })

function renderPositions(insts) {
  if (insts.length === 0) {
    return "_No food-limit instruments for this body are tracked in the index. See Mandate & scope for what this body does set._"
  }
  // one row per (metal, instrument) pair, sorted by metal display order then date
  const rows = []
  for (const rec of insts) {
    for (const m of metalsOf(rec)) {
      rows.push({ m, rec })
    }
  }
  rows.sort((a, b) => {
    const ia = METAL_ORDER.indexOf(a.m), ib = METAL_ORDER.indexOf(b.m)
    if (ia !== ib) return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib)
    return (toIsoDate(a.rec.effective_date) || "0").localeCompare(toIsoDate(b.rec.effective_date) || "0")
  })
  const out = [
    "| Metal | Type | Value | Instrument | Effective | Status |",
    "| --- | --- | --- | --- | ---: | --- |",
  ]
  for (const { m, rec } of rows) {
    out.push(`| ${METAL_LABELS[m] || m} | ${deriveType(rec)} | ${renderValue(rec)} | ${instLink(rec)} | ${effYear(rec)} | ${escapePipes(rec.status) || "—"} |`)
  }
  return out.join("\n")
}

function comparable(a, b) {
  // directly comparable only when value-type matches AND unit matches AND both numeric
  return deriveType(a) === deriveType(b) &&
    String(a.limit_unit) === String(b.limit_unit) &&
    typeof a.limit_value === "number" && typeof b.limit_value === "number"
}
function renderDivergence(body, insts, allByBody) {
  const myMetals = [...new Set(insts.flatMap(metalsOf))].sort((a, b) => METAL_ORDER.indexOf(a) - METAL_ORDER.indexOf(b))
  if (myMetals.length === 0) return "_No tracked positions to compare._"
  const sections = []
  for (const m of myMetals) {
    // every body's positions on this metal
    const rowsByBody = []
    for (const b of bodies) {
      for (const rec of (allByBody.get(b.slug) || [])) {
        if (metalsOf(rec).includes(m)) rowsByBody.push({ b, rec })
      }
    }
    const otherBodies = new Set(rowsByBody.map((r) => r.b.slug))
    otherBodies.delete(body.slug)
    if (otherBodies.size === 0) {
      sections.push(`### ${METAL_LABELS[m] || m}\n\n_No other tracked body sets a position for ${(METAL_LABELS[m] || m).toLowerCase()}; ${body.abbreviation} is the only one in the index._`)
      continue
    }
    const lines = [
      `### ${METAL_LABELS[m] || m}`,
      "",
      "| Body | Type | Value | Instrument |",
      "| --- | --- | --- | --- |",
    ]
    rowsByBody.sort((x, y) => x.b.slug === body.slug ? -1 : y.b.slug === body.slug ? 1 : 0)
    for (const { b, rec } of rowsByBody) {
      const self = b.slug === body.slug
      const label = self ? `**${b.abbreviation}**` : `[[regulators/${b.slug}\\|${b.abbreviation}]]`
      lines.push(`| ${label} | ${deriveType(rec)} | ${renderValue(rec)} | ${instLink(rec)} |`)
    }
    sections.push(lines.join("\n"))
  }
  return sections.join("\n\n")
}

function renderUpdateLog(insts) {
  if (insts.length === 0) return "_No dated regulatory events tracked for this body._"
  const events = []
  for (const rec of insts) {
    const eff = toIsoDate(rec.effective_date)
    const sun = toIsoDate(rec.sunset_date)
    const status = String(rec.status || "").toLowerCase()
    if (eff) {
      const verb = /withdrawn/.test(status) ? "Withdrawn" : /superseded/.test(status) ? "Superseded basis" : "Issued / in force"
      events.push({ date: eff, event: verb, rec })
    }
    if (sun) events.push({ date: sun, event: "Superseded / sunset", rec })
  }
  if (events.length === 0) return "_Instruments tracked, but none carry a dated regulatory event yet._"
  events.sort((a, b) => a.date.localeCompare(b.date))
  const out = ["| Date | Event | Instrument | Status |", "| ---: | --- | --- | --- |"]
  for (const e of events) {
    out.push(`| ${e.date} | ${e.event} | ${instLink(e.rec)} | ${escapePipes(e.rec.status) || "—"} |`)
  }
  return out.join("\n")
}

function renderKeyDocs(insts) {
  const seen = new Set()
  const rows = []
  for (const rec of insts) {
    for (const ref of (rec.source_refs || [])) {
      const key = String(ref).replace(/^sources\//, "")
      if (!key || seen.has(key + "|" + ruleSlug(rec))) continue
      seen.add(key + "|" + ruleSlug(rec))
      rows.push(`| [[sources/${key}\\|${escapePipes(key)}]] | ${instLink(rec)} |`)
    }
  }
  if (rows.length === 0) return "_No source documents are linked to this body's instruments yet._"
  return ["| Source document | Instrument |", "| --- | --- |", ...rows].join("\n")
}

// ---------- scaffold + upsert ----------

function block(name, body) {
  const m = M(name)
  return `${m.begin}\n${body}\n${m.end}`
}
function upsertBlock(raw, name, body) {
  const m = M(name)
  if (raw.includes(m.begin) && raw.includes(m.end)) {
    const re = new RegExp(`${escapeRe(m.begin)}[\\s\\S]*?${escapeRe(m.end)}`)
    return raw.replace(re, () => `${m.begin}\n${body}\n${m.end}`)
  }
  return raw
}

// The masthead carries the operator attribution, so it has to stay regenerable:
// it was previously emitted by scaffold() only, which meant an existing page
// kept whatever name it was created with forever (found 2026-07-31, when the
// Institute for → Institute of correction did not reach the nine live pages).
// Pages created before the marker existed carry a bare italic line instead, so
// adopt that line into the block on first run.
const MASTHEAD_LINE = /^\*[^\n]*Authored by \[Karen Pendergrass\][^\n]*\*$/m
function upsertMasthead(raw, body) {
  const m = M("masthead")
  if (raw.includes(m.begin) && raw.includes(m.end)) return upsertBlock(raw, "masthead", body)
  if (MASTHEAD_LINE.test(raw)) return raw.replace(MASTHEAD_LINE, () => block("masthead", body))
  return raw
}

function mastheadLine(b) {
  const urlMd = String(b.url).replace(/\(/g, "%28").replace(/\)/g, "%29")  // parens break markdown link targets
  return `*${b.jurisdiction} · ${b.kind_label} · Established ${b.established} · Authored by [Karen Pendergrass](https://orcid.org/0000-0002-2348-7259), Institute of Contaminant Standards · [${prettyUrl(b.url)}](${urlMd})*`
}

function scaffold(b, blocks) {
  const sameAs = [b.url, b.wikidata].filter(Boolean)
  const fm = [
    "---",
    "type: regulator",
    `regulator_id: ${b.slug}`,
    `title: "${b.name} (${b.abbreviation})"`,
    `name: "${b.name}"`,
    `abbreviation: "${b.abbreviation}"`,
    `jurisdiction: [${(b.jurisdiction_codes || []).join(", ")}]`,
    `regulator_kind: ${b.kind}`,
    `established: "${b.established}"`,
    `homepage: ${b.url}`,
    `sameAs: [${sameAs.map((s) => `"${s}"`).join(", ")}]`,
    "audience: [regulator, brand-legal, brand-qa, educator, journalist]",
    "wiki_doi: null",
    `updated: ${today}`,
    "---",
  ].join("\n")
  return [
    fm,
    "",
    `# ${b.name} (${b.abbreviation})`,
    "",
    block("masthead", mastheadLine(b)),
    "",
    "## Quick read",
    "",
    `_[Hand-authored quick read — replace this placeholder. 2–3 sentences: what ${b.abbreviation} is, whether it sets binding limits or health-based guidance, and the one thing to know to read its numbers correctly.]_`,
    "",
    "## Mandate & scope",
    "",
    `_[Hand-authored — replace this placeholder. ~120–180 words: ${b.abbreviation}'s authority/statutory basis, binding-vs-advisory, which metals and matrices it covers, when established.]_`,
    "",
    "## Positions across metals",
    "",
    block("positions", blocks.positions),
    "",
    "## Where it diverges",
    "",
    "_[Hand-authored interpretation — replace this placeholder. Explain the meaningful divergences below: which are methodological (different uncertainty factors, basis, population) vs genuine disagreement. Values in different units are not directly comparable.]_",
    "",
    block("divergence", blocks.divergence),
    "",
    "## Update log",
    "",
    block("updatelog", blocks.updatelog),
    "",
    "## Key documents",
    "",
    block("keydocs", blocks.keydocs),
    "",
    "## References",
    "",
    `Positions, the update log, and key documents above are generated from the per-instrument [[regulations/index|regulation pages]] this body issues, via \`tools/build-regulator-pages.mjs\`. The wiki reports what ${b.abbreviation} has published; it does not endorse it. See [[CLAUDE|the wiki/HMTc separation policy]] for why reporting regulatory values is kept architecturally separate from certification threshold-setting.`,
    "",
  ].join("\n")
}

let created = 0, updated = 0, unchanged = 0
for (const b of bodies) {
  const insts = byBody.get(b.slug) || []
  const blocks = {
    positions: renderPositions(insts),
    divergence: renderDivergence(b, insts, byBody),
    updatelog: renderUpdateLog(insts),
    keydocs: renderKeyDocs(insts),
  }
  const pagePath = path.join(regulatorsDir, `${b.slug}.md`)
  if (!fs.existsSync(pagePath)) {
    fs.writeFileSync(pagePath, scaffold(b, blocks))
    created++
    continue
  }
  const raw = fs.readFileSync(pagePath, "utf8")
  let next = raw
  next = upsertMasthead(next, mastheadLine(b))
  next = upsertBlock(next, "positions", blocks.positions)
  next = upsertBlock(next, "divergence", blocks.divergence)
  next = upsertBlock(next, "updatelog", blocks.updatelog)
  next = upsertBlock(next, "keydocs", blocks.keydocs)
  if (next !== raw) { fs.writeFileSync(pagePath, next); updated++ } else { unchanged++ }
}

// ---------- by-metal cross-cut (auto) ----------

writeByMetal()
writeIndex()
writeDivergenceCsv()

console.log(`build-regulator-pages: ${bodies.length} bodies (${created} created, ${updated} updated, ${unchanged} unchanged); ${unmapped.length} regulation(s) unmapped.`)
if (unmapped.length) {
  const agencies = [...new Set(unmapped.map((u) => u.agency || `(null) ${u.slug}`))]
  console.log(`  unmapped agencies (no body page this round): ${agencies.join("; ")}`)
}

function writeByMetal() {
  let md = `---
title: "Regulatory positions by metal"
description: "Every tracked regulatory body's stance on each metal, side by side. Auto-regenerated from wiki/static/regulations.json on every build."
audience: [regulator, brand-legal, brand-qa, educator, journalist]
auto_generated: true
updated: ${today}
---

# Regulatory positions by metal

For each metal, every regulatory body the index profiles and the position it has set. Values in different units (intake limits vs concentration limits vs benchmark doses) are **not directly comparable** — confirm the type and basis before comparing. For the per-body view, see each [[regulators/index|regulator profile]].

`
  for (const m of METAL_ORDER) {
    const rows = []
    for (const b of bodies) {
      for (const rec of (byBody.get(b.slug) || [])) {
        if (metalsOf(rec).includes(m)) rows.push({ b, rec })
      }
    }
    if (rows.length === 0) continue
    md += `## ${METAL_LABELS[m] || m}\n\n`
    md += "| Body | Type | Value | Instrument | Effective |\n| --- | --- | --- | --- | ---: |\n"
    for (const { b, rec } of rows) {
      md += `| [[regulators/${b.slug}\\|${b.abbreviation}]] | ${deriveType(rec)} | ${renderValue(rec)} | ${instLink(rec)} | ${effYear(rec)} |\n`
    }
    md += "\n"
  }
  fs.writeFileSync(path.join(regulatorsDir, "by-metal.md"), withGeneratedHero(md, "wiki/regulators/by-metal.md"))
}

function writeIndex() {
  const groups = new Map()
  for (const b of bodies) {
    const key = b.jurisdiction
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(b)
  }
  let md = `---
title: "Regulatory bodies"
description: "Profiles of every regulatory body that sets heavy-metal limits or guidance the Heavy Metal Index tracks — what each body is, its positions across metals, where it diverges, and how it has changed. Auto-regenerated."
audience: [regulator, brand-legal, brand-qa, educator, journalist]
auto_generated: true
updated: ${today}
---

# Regulatory bodies

Each body below has a profile page: what it is and whether its numbers are binding, its positions across every metal, where it diverges from other bodies, its update log, and its key documents. These are the parent pages above the per-instrument [[regulations/index|regulation pages]]. See also [[regulators/by-metal|positions by metal]].

`
  for (const [jur, list] of groups) {
    md += `## ${jur}\n\n`
    for (const b of list) {
      const n = (byBody.get(b.slug) || []).length
      const count = n === 0 ? "no food-limit instruments tracked" : `${n} instrument${n === 1 ? "" : "s"}`
      md += `- [[regulators/${b.slug}\\|${b.name} (${b.abbreviation})]] — ${b.kind_label}. ${count}.\n`
    }
    md += "\n"
  }
  fs.writeFileSync(path.join(regulatorsDir, "index.md"), withGeneratedHero(md, "wiki/regulators/index.md"))
}

function writeDivergenceCsv() {
  const lines = ["metal,body_a,type_a,value_a,unit_a,body_b,type_b,value_b,unit_b,directly_comparable,ratio_a_over_b"]
  for (const m of METAL_ORDER) {
    const positions = []
    for (const b of bodies) {
      for (const rec of (byBody.get(b.slug) || [])) {
        if (metalsOf(rec).includes(m)) positions.push({ b, rec })
      }
    }
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const A = positions[i], B = positions[j]
        if (A.b.slug === B.b.slug) continue
        const comp = comparable(A.rec, B.rec)
        const ratio = comp && B.rec.limit_value !== 0 ? (A.rec.limit_value / B.rec.limit_value).toFixed(3) : ""
        lines.push([
          m, A.b.slug, deriveType(A.rec), csvVal(A.rec.limit_value), A.rec.limit_unit,
          B.b.slug, deriveType(B.rec), csvVal(B.rec.limit_value), B.rec.limit_unit,
          comp, ratio,
        ].map(csv).join(","))
      }
    }
  }
  fs.writeFileSync(divergenceCsvPath, lines.join("\n") + "\n")
}

// ---------- helpers ----------

function csvVal(v) { return Array.isArray(v) ? "multiple" : (v == null ? "" : String(v)) }
function csv(v) {
  const s = v === null || v === undefined ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}
function escapePipes(v) { return String(v == null ? "" : v).replace(/\|/g, "\\|") }
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") }
// Fall back to the bare host only when the full path would swamp the masthead
// byline. JECFA's homepage is a 75-character path; Codex's 37-character one is
// informative (www.fao.org alone is not Codex) and must survive. Found when the
// masthead became generator-owned on 2026-07-31.
function prettyUrl(u) {
  const s = String(u).replace(/^https?:\/\//, "").replace(/\/$/, "")
  if (s.length <= 48) return s  // literal, not a const: this runs before the module's tail is initialized
  const slash = s.indexOf("/")
  return slash === -1 ? s : s.slice(0, slash)
}
function toIsoDate(value) {
  if (!value) return ""
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  if (/^\d{4}$/.test(s)) return `${s}-01-01`
  const parsed = new Date(s)
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10)
}
