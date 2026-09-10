#!/usr/bin/env node
// HISTORICAL METHOD: retired for live limit-setting on 2026-09-09.
// Outputs support descriptive occurrence analysis and historical reproducibility only.
// Live limits come from the government-floor method in CLAUDE.md Part 19.
// build-category-standards-tables.mjs
//
// Generates the master limit table for each locked row of a category from the
// pooled distributions (hmtc_aggregate_distributions.csv). This is the
// defensible core of the Program Manual's Part 3 (The Standards): per row, per
// HMTc panel analyte, the final HMTc limit = min(literature P97, regulatory
// cap), with basis, rationale tag, and confidence. Deterministic and idempotent.
//
// Output: data/workbench/standards/cat<N>-standards-tables.md
// (workbench-side per the wiki/HMTc firewall; feeds the per-row Standards
// Briefings that render-part3-chapter.mjs turns into manual chapters.)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const distPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const productDir = path.join(repoRoot, "wiki/products")
const outDir = path.join(repoRoot, "data/workbench/standards")

// HMTc certification analyte panel (CLAUDE.md Part 14), in report order.
const PANEL = ["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Cr-VI", "Sn", "Al"]
const CATS = { 6: "Seafood", 7: "Oils, Condiments, and Specialty Foods" }

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
function split(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }
const fmt = (n) => n === null ? "—" : (n >= 100 ? Math.round(n).toString() : n.toFixed(2).replace(/\.?0+$/, ""))

const dist = fs.existsSync(distPath) ? parseCsv(fs.readFileSync(distPath, "utf8")) : []
const cell = new Map()
for (const r of dist) cell.set(`${r.product_slug}|${r.metal_species}`, r)

// locked rows per category, in hmtc_row order
function lockedRows(cat) {
  const rows = []
  for (const f of fs.readdirSync(productDir)) {
    if (!f.endsWith(".md") || f === "index.md") continue
    const d = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
    if (Number(d.hmtc_category) !== cat || d.products_status !== "locked") continue
    rows.push({ slug: String(d.category || path.basename(f, ".md")), row: Number(d.hmtc_row) || 99,
      title: d.hmtc_subcategory_name || d.title, priority: Array.isArray(d.primary_metals_of_concern) ? d.primary_metals_of_concern.map(String) : [] })
  }
  return rows.sort((a, b) => a.row - b.row)
}

fs.mkdirSync(outDir, { recursive: true })
for (const [cat, name] of Object.entries(CATS)) {
  const rows = lockedRows(Number(cat))
  const md = [`# HMTc Category ${cat} — ${name}: Historical Occurrence Tables (retired method)`, "",
    `_RETIRED for live limit-setting since 2026-09-09. Historical reconstruction only. Generated from the pooled occurrence distributions by build-category-standards-tables.mjs. Workbench-side per the wiki/HMTc firewall. Final HMTc limit = min(pooled P97, lowest applicable regulatory cap). Values in µg/kg (ppb)._`, ""]
  for (const row of rows) {
    md.push(`## ${row.row}. ${row.title}`, "")
    md.push(`| Analyte | Retired candidate (µg/kg) | Basis | Regulatory cap | Rationale | Confidence |`)
    md.push(`| --- | ---: | --- | ---: | --- | --- |`)
    for (const metal of PANEL) {
      const r = cell.get(`${row.slug}|${metal}`)
      if (!r) { md.push(`| ${metal} | — | no data | — | — | — |`); continue }
      const p97 = num(r.pooled_p97); const cap = num(r.lowest_regulatory_cap_ppb); const cand = num(r.candidate_value_ppb)
      const final = cand ?? (p97 !== null && cap !== null ? Math.min(p97, cap) : (cap ?? p97))
      const sens = (r.sens_band || "").toLowerCase()
      const rationale = r.rationale_tag_auto || (cap !== null && (p97 === null || cap <= p97) ? "regulatory-alignment" : "literature-baseline")
      const conf = final === null ? "no data" : (sens === "stable" ? "firm" : sens === "no_data" ? "no data" : "provisional")
      const basis = p97 !== null ? `literature P97 ${fmt(p97)}` : (cap !== null ? "cap only" : "—")
      md.push(`| ${metal} | ${fmt(final)} | ${basis} | ${fmt(cap)} | ${rationale} | ${conf} |`)
    }
    md.push("")
  }
  const out = path.join(outDir, `cat${cat}-standards-tables.md`)
  fs.writeFileSync(out, md.join("\n") + "\n")
  console.log(`Cat ${cat}: ${rows.length} rows -> ${path.relative(repoRoot, out)}`)
}
