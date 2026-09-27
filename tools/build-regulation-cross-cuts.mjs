#!/usr/bin/env node
// Build two cross-cut pages derived from wiki/regulations/*.md frontmatter:
//   1. wiki/regulations/by-jurisdiction.md — a country/region × metal matrix
//      surface so brand-legal and regulatory-affairs readers can compare how
//      different jurisdictions regulate the same metal at a glance.
//   2. wiki/regulations/timeline.md — a chronological view of regulatory
//      tightening so the same readers can see the trajectory: which limits
//      came in when, which superseded what, and where the floor is heading.
//
// Both pages are fully regenerated from on-disk frontmatter on every prebuild
// — no hand maintenance. Pages declare themselves auto-generated so future
// sessions don't edit them by hand.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const regulationsDir = path.join(repoRoot, "wiki/regulations")
const byJurisdictionPath = path.join(regulationsDir, "by-jurisdiction.md")
const timelinePath = path.join(regulationsDir, "timeline.md")

const JURISDICTION_LABELS = {
  EU: "European Union",
  US: "United States (federal)",
  "US-CA": "United States — California",
  "US-WA": "United States — Washington State",
  CN: "China",
  MX: "Mexico",
  AU: "Australia",
  NZ: "New Zealand",
  EC: "Ecuador",
  TR: "Turkey",
  international: "International (Codex / JECFA / WHO)",
}

const METAL_LABELS = {
  Pb: "Lead",
  Cd: "Cadmium",
  iAs: "Inorganic arsenic",
  tAs: "Total arsenic",
  tHg: "Total mercury",
  MeHg: "Methylmercury",
  iHg: "Inorganic mercury",
  Ni: "Nickel",
  Al: "Aluminium",
  Cr: "Chromium",
  "Cr-VI": "Hexavalent chromium",
  Sn: "Tin",
  Sb: "Antimony",
  U: "Uranium",
}

const METAL_DISPLAY_ORDER = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U"]

const today = new Date().toISOString().slice(0, 10)

const regs = []
const files = fs.readdirSync(regulationsDir).filter((f) => f.endsWith(".md") && f !== "index.md" && f !== "by-jurisdiction.md" && f !== "timeline.md")

for (const file of files) {
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(regulationsDir, file), "utf8")
  const fm = matter(raw).data
  const title = String(fm.title || fm.short_title || slug)
  const jurisdiction = normaliseList(fm.jurisdiction ?? fm.jurisdictions)
  const agency = String(fm.agency || fm.authority || "").trim()
  const metals = normaliseList(fm.metals ?? fm.metal ?? fm.metal_scope)
  const matrix = normaliseList(fm.matrix ?? fm.matrices)
  const limitValue = fm.limit_value !== undefined && fm.limit_value !== null ? String(fm.limit_value) : ""
  const limitUnit = String(fm.limit_unit || "").trim()
  const status = String(fm.status || "").trim()
  const program = String(fm.program || "").trim()
  const effective = toIsoDate(fm.effective_date)
  const sunset = toIsoDate(fm.sunset_date)
  regs.push({
    slug,
    title,
    jurisdiction,
    agency,
    metals,
    matrix,
    limitValue,
    limitUnit,
    status,
    program,
    effective,
    sunset,
  })
}

writeByJurisdictionPage()
writeTimelinePage()

console.log(`build-regulation-cross-cuts: wrote ${path.relative(repoRoot, byJurisdictionPath)} and ${path.relative(repoRoot, timelinePath)} from ${regs.length} regulation pages.`)

// ---------- by-jurisdiction page ----------

function writeByJurisdictionPage() {
  const jurisdictions = Array.from(new Set(regs.flatMap((r) => r.jurisdiction))).sort(compareJurisdictions)

  // Matrix: rows = metals, cols = jurisdictions, cell = count of regs covering both
  const metalsCovered = METAL_DISPLAY_ORDER.filter((m) => regs.some((r) => r.metals.includes(m)))

  let md = ""
  md += `---
title: "Regulations by jurisdiction"
description: "Compare the regulations tracked by Heavy Metal Index across jurisdictions and metals."
audience: [regulator, brand-legal, brand-qa, educator, journalist]
auto_generated: true
updated: ${today}
noindex: false
---

# Regulations by jurisdiction

This page is the cross-cut view of every regulation the Heavy Metal Index tracks, organised by jurisdiction. Brand-legal and regulatory-affairs readers comparing how different jurisdictions regulate the same metal should land here.

Each entry links to the corresponding regulation, including its scope, legal status, and supporting sources. Coverage reflects the instruments currently documented in the index.

## Coverage matrix

How many regulation pages the index carries for each (metal, jurisdiction) cell. A blank cell means the index has no documented entry for that combination. It does not establish that no applicable legal limit exists.

| Metal | ${jurisdictions.map((j) => escapePipes(JURISDICTION_LABELS[j] || j)).join(" | ")} | Total |
| --- | ${jurisdictions.map(() => "---:").join(" | ")} | ---: |
`
  for (const metal of metalsCovered) {
    const cells = jurisdictions.map((j) => {
      const matched = regs.filter((r) => r.metals.includes(metal) && r.jurisdiction.includes(j))
      return matched.length ? String(matched.length) : ""
    })
    const total = regs.filter((r) => r.metals.includes(metal)).length
    md += `| ${METAL_LABELS[metal] || metal} | ${cells.join(" | ")} | ${total} |\n`
  }

  md += `\n## Regulations grouped by jurisdiction\n\n`
  for (const j of jurisdictions) {
    md += `### ${JURISDICTION_LABELS[j] || j}\n\n`
    const inJ = regs
      .filter((r) => r.jurisdiction.includes(j))
      .sort((a, b) => (a.effective || "9999").localeCompare(b.effective || "9999"))
    if (inJ.length === 0) {
      md += `_No regulations tracked yet._\n\n`
      continue
    }
    md += `| Title | Agency | Metals | Limit | Status | Effective |\n`
    md += `| --- | --- | --- | --- | --- | --- |\n`
    for (const r of inJ) {
      const limitCell = r.limitValue
        ? `${escapePipes(r.limitValue)}${r.limitUnit ? ` ${escapePipes(r.limitUnit)}` : ""}`
        : (r.limitUnit ? escapePipes(r.limitUnit) : "")
      md += `| [[regulations/${r.slug}\\|${escapePipes(r.title)}]] | ${escapePipes(r.agency)} | ${r.metals.map((m) => METAL_LABELS[m] || m).join(", ")} | ${limitCell || "—"} | ${escapePipes(r.status) || "—"} | ${r.effective || "—"} |\n`
    }
    md += `\n`
  }

  md += `## How to read this surface\n\nThis is a navigation index, not a substitute for reading the underlying regulations. Limits expressed in different units (mg/kg vs µg/kg-bw/week vs ppb) are not directly comparable across rows — use the limit column to confirm the basis before comparing values. Where a cell carries multiple regulations for the same metal, the most recent supersedes the older one unless both remain in force in different matrices. The [[regulations/timeline|timeline view]] shows the chronological tightening.\n\nThe wiki tracks regulatory limits as published; it does not endorse them. See [[CLAUDE|wiki/HMTc separation policy]] for why the wiki's reporting of regulatory values is kept architecturally separate from the [Heavy Metal Tested & Certified](https://heavymetalcertified.com) certification program's threshold-setting.\n`

  fs.writeFileSync(byJurisdictionPath, md, "utf8")
}

// ---------- timeline page ----------

function writeTimelinePage() {
  const dated = regs.filter((r) => r.effective).sort((a, b) => a.effective.localeCompare(b.effective))
  const undated = regs.filter((r) => !r.effective).sort((a, b) => a.title.localeCompare(b.title))

  let md = ""
  md += `---
title: "Regulatory tightening over time"
description: "Explore the effective dates of regulations tracked by Heavy Metal Index, grouped by decade."
audience: [regulator, brand-legal, brand-qa, educator, journalist]
auto_generated: true
updated: ${today}
noindex: false
---

# Regulatory tightening over time

This timeline is the historical view of every dated regulation the Heavy Metal Index tracks. Read top-to-bottom for the trajectory of the regulatory floor: which limits came in when, which superseded what, where international and EU framings drift apart from US framings.

Each entry links to the corresponding regulation, including its scope, legal status, and supporting sources. Coverage reflects the instruments currently documented in the index.

## Headline trajectory

${headlineNumbers(dated)}

`

  const decades = new Map()
  for (const r of dated) {
    const decade = `${r.effective.slice(0, 3)}0s`
    if (!decades.has(decade)) decades.set(decade, [])
    decades.get(decade).push(r)
  }
  const sortedDecades = [...decades.keys()].sort()

  md += `## Chronology by decade\n\n`
  for (const decade of sortedDecades) {
    md += `### ${decade}\n\n`
    md += `| Effective | Title | Jurisdiction | Agency | Metals | Limit | Status |\n`
    md += `| --- | --- | --- | --- | --- | --- | --- |\n`
    for (const r of decades.get(decade)) {
      const limitCell = r.limitValue
        ? `${escapePipes(r.limitValue)}${r.limitUnit ? ` ${escapePipes(r.limitUnit)}` : ""}`
        : (r.limitUnit ? escapePipes(r.limitUnit) : "")
      const jur = r.jurisdiction.map((j) => JURISDICTION_LABELS[j] || j).join(", ") || "—"
      md += `| ${r.effective} | [[regulations/${r.slug}\\|${escapePipes(r.title)}]] | ${escapePipes(jur)} | ${escapePipes(r.agency)} | ${r.metals.map((m) => METAL_LABELS[m] || m).join(", ")} | ${limitCell || "—"} | ${escapePipes(r.status) || "—"} |\n`
    }
    md += `\n`
  }

  if (undated.length > 0) {
    md += `## Undated regulations (ingest gap)\n\nThe following regulation pages exist in the index but do not yet carry an \`effective_date\` in their frontmatter. They are tracked here so the gap is visible.\n\n`
    md += `| Title | Jurisdiction | Agency | Metals | Status |\n`
    md += `| --- | --- | --- | --- | --- |\n`
    for (const r of undated) {
      const jur = r.jurisdiction.map((j) => JURISDICTION_LABELS[j] || j).join(", ") || "—"
      md += `| [[regulations/${r.slug}\\|${escapePipes(r.title)}]] | ${escapePipes(jur)} | ${escapePipes(r.agency)} | ${r.metals.map((m) => METAL_LABELS[m] || m).join(", ") || "—"} | ${escapePipes(r.status) || "—"} |\n`
    }
    md += `\n`
  }

  md += `## How to read this surface\n\nA regulation's appearance in the timeline does not imply endorsement by the Heavy Metal Index. The wiki reports what regulators have published; the [Heavy Metal Tested & Certified](https://heavymetalcertified.com) certification program sets its own thresholds, which can be tighter than the regulatory floor by design. See [[CLAUDE|wiki/HMTc separation policy]] for the rationale.\n\nFor the cross-jurisdiction matrix view, see [[regulations/by-jurisdiction]].\n`

  fs.writeFileSync(timelinePath, md, "utf8")
}

function headlineNumbers(dated) {
  if (dated.length === 0) return "_No dated regulations tracked yet._"
  const first = dated[0]
  const latest = dated[dated.length - 1]
  const counts = new Map()
  for (const r of dated) {
    const decade = `${r.effective.slice(0, 3)}0s`
    counts.set(decade, (counts.get(decade) || 0) + 1)
  }
  const decadeSummary = [...counts.entries()].sort().map(([d, n]) => `**${d}**: ${n}`).join(" · ")
  return `The index carries **${dated.length} dated regulations**. Earliest in the timeline: ${first.effective} (${escapeMd(first.title)}, ${escapeMd(first.agency)}). Most recent: ${latest.effective} (${escapeMd(latest.title)}, ${escapeMd(latest.agency)}). By decade: ${decadeSummary}.`
}

// ---------- helpers ----------

function normaliseList(value) {
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean)
  if (value === null || value === undefined || value === "") return []
  return [String(value).trim()]
}

function toIsoDate(value) {
  if (!value) return ""
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  if (/^\d{4}$/.test(s)) return `${s}-01-01`
  const parsed = new Date(s)
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  return ""
}

function escapePipes(value) {
  return String(value).replace(/\|/g, "\\|")
}

function escapeMd(value) {
  return String(value).replace(/[*_`]/g, "")
}

function compareJurisdictions(a, b) {
  const order = ["US", "US-CA", "US-WA", "EU", "international", "CN", "MX", "AU", "NZ", "EC", "TR"]
  const ai = order.indexOf(a), bi = order.indexOf(b)
  if (ai !== -1 && bi !== -1) return ai - bi
  if (ai !== -1) return -1
  if (bi !== -1) return 1
  return a.localeCompare(b)
}
