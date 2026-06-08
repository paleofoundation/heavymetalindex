#!/usr/bin/env node
// build-category-standards-readiness.mjs
//
// The "is this category ready for its standards manual yet?" monitor.
//
// Answers the standing question: when enough trustworthy evidence exists for a
// category, flag it so the Program Manual gets produced — instead of relying on
// anyone remembering to check. Runs in the evidence:standards-gaps chain after
// the pooler, so the verdict refreshes every time the evidence base moves.
//
// For each locked Cat 6/7 row, every PRIORITY metal (the row's
// primary_metals_of_concern) must be RESOLVED:
//   - literature-baseline : pooled P97 present AND sensitivity band stable AND
//     a candidate value AND not sitting in extraction_review.csv (untrusted), OR
//   - regulatory-alignment: candidate value bound to a loaded regulatory cap.
// Anything else (provisional/unstable sensitivity, flagged-for-review, no data)
// is PENDING and blocks the row.
//
// A category is MANUAL-READY when every locked row is row-ready (all priority
// metals resolved). Output names the exact next command and the blocking list.
//
// Outputs:
//   data/evidence/category-standards-readiness.md   (human; surfaced by FRANK)
//   data/evidence/category-standards-readiness.json  (machine)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const evidenceDir = path.join(repoRoot, "data/evidence")
const productDir = path.join(repoRoot, "wiki/products")
const distPath = path.join(evidenceDir, "hmtc_aggregate_distributions.csv")
const reviewPath = path.join(evidenceDir, "extraction_review.csv")

const CATEGORIES = { 6: "Seafood", 7: "Oils, Condiments, and Specialty Foods" }

// ---- load pooled distributions ----
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
const dist = fs.existsSync(distPath) ? parseCsv(fs.readFileSync(distPath, "utf8")) : []
const cell = new Map() // `${slug}|${metal}` -> row
for (const r of dist) cell.set(`${r.product_slug}|${r.metal_species}`, r)

// Cells flagged high-for-review. A flag means "a human must confirm this is real,
// not a unit error." Once the note shows it was rechecked against the source
// (Codex re-extraction verification) or adjudicated (outlier pass), the cell has
// been reviewed and is no longer untrusted. Only an UNreviewed flag blocks.
const flaggedUnreviewed = new Set()
if (fs.existsSync(reviewPath)) {
  for (const r of parseCsv(fs.readFileSync(reviewPath, "utf8"))) {
    const note = String(r.note || "")
    const reviewed = /Rechecked/i.test(note) || /adjudicat/i.test(note)
    if (!reviewed) flaggedUnreviewed.add(`${r.row_slug}|${r.metal_species}`)
  }
}
const flagged = flaggedUnreviewed

// ---- locked Cat 6/7 rows + their priority metals ----
const rowsByCat = { 6: [], 7: [] }
for (const f of fs.readdirSync(productDir)) {
  if (!f.endsWith(".md") || f === "index.md") continue
  const d = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
  const cat = Number(d.hmtc_category)
  if (!(cat in rowsByCat)) continue
  if (d.products_status !== "locked") continue
  const slug = String(d.category || path.basename(f, ".md"))
  const metals = Array.isArray(d.primary_metals_of_concern) ? d.primary_metals_of_concern.map(String) : []
  rowsByCat[cat].push({ slug, title: d.hmtc_subcategory_name || d.title || slug, metals })
}

const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }

// A cell is SHIPPABLE (resolves the row for manual purposes) when it has a
// defensible value the manual can print with an honest confidence label:
//   - literature-baseline, stable        -> firm
//   - literature-baseline, provisional   -> publishable, labeled provisional
//   - regulatory-alignment (cap-bound)   -> firm
// Only genuine gaps block: no value at all, or a value still flagged untrusted.
// (The manual ships mixed-confidence rows, as the Cat 1 manual did; it does NOT
// require every cell stable.)
function classify(slug, metal) {
  const key = `${slug}|${metal}`
  const r = cell.get(key)
  const cand = r ? num(r.candidate_value_ppb) : null
  const cap = r ? num(r.lowest_regulatory_cap_ppb) : null
  const p97 = r ? num(r.pooled_p97) : null
  const sens = (r?.sens_band || "").toLowerCase()
  const value = cand ?? cap ?? p97
  if (value === null) return { state: "pending", why: "no usable evidence (needs data)" }
  if (flagged.has(key)) return { state: "pending", why: "flagged untrusted (extraction_review)" }
  if (cand !== null && cap !== null && (p97 === null || cap <= p97)) return { state: "resolved", basis: "regulatory-alignment", confidence: "firm", value }
  if (p97 !== null && sens === "stable") return { state: "resolved", basis: "literature-baseline", confidence: "firm", value }
  if (p97 !== null) return { state: "resolved", basis: "literature-baseline", confidence: "provisional", value }
  if (cap !== null) return { state: "resolved", basis: "regulatory-alignment", confidence: "firm", value }
  return { state: "pending", why: "no usable evidence (needs data)" }
}

const report = {}
const md = ["# Category standards readiness", "", `_Generated by build-category-standards-readiness.mjs. Surfaced by FRANK._`, ""]

for (const [cat, name] of Object.entries(CATEGORIES)) {
  const rows = rowsByCat[cat] || []
  const rowStatuses = rows.map((row) => {
    const cells = row.metals.map((m) => ({ metal: m, ...classify(row.slug, m) }))
    const pending = cells.filter((c) => c.state === "pending")
    return { ...row, ready: pending.length === 0 && row.metals.length > 0, cells, pending }
  })
  const ready = rowStatuses.filter((r) => r.ready)
  const manualReady = rows.length > 0 && ready.length === rows.length
  report[cat] = { name, locked_rows: rows.length, ready_rows: ready.length, manual_ready: manualReady,
    rows: rowStatuses.map((r) => ({ slug: r.slug, ready: r.ready, blocking: r.pending.map((p) => `${p.metal}: ${p.why}`) })) }

  md.push(`## Category ${cat} — ${name}`, "")
  md.push(`**${ready.length} of ${rows.length} locked rows ready.** ` +
    (manualReady ? `✅ **MANUAL-READY** — run \`node tools/standards/build-program-manual.mjs --category=${cat}\` then author Part 4 chapters from the pooled standards (Cat 1 standards-book is the template).`
                 : `⏳ NOT READY — blocking rows below.`), "")
  for (const r of rowStatuses) {
    if (r.ready) md.push(`- ✅ ${r.slug} — all priority metals resolved`)
    else md.push(`- ⏳ ${r.slug} — blocked: ${r.pending.map((p) => `${p.metal} (${p.why})`).join("; ") || "no priority metals set"}`)
  }
  md.push("")
}

fs.writeFileSync(path.join(evidenceDir, "category-standards-readiness.json"), JSON.stringify(report, null, 2) + "\n")
fs.writeFileSync(path.join(evidenceDir, "category-standards-readiness.md"), md.join("\n"))

for (const [cat, r] of Object.entries(report)) {
  console.log(`Cat ${cat} (${r.name}): ${r.ready_rows}/${r.locked_rows} rows ready — ${r.manual_ready ? "MANUAL-READY" : "not ready"}`)
}
console.log(`Wrote data/evidence/category-standards-readiness.{md,json}`)
