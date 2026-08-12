#!/usr/bin/env node
// RETIRED 2026-08-12: this classifier implements the superseded occurrence-selected method.
console.error("RETIRED: current HMTc initial limits are government-limit-only.")
process.exit(2)
/**
 * Standards row classifier — the autonomous loop's brain and its distance-to-done meter.
 *
 * For every (product row × analyte) in the standards universe, decide the ONE
 * next action that would move it toward a legally defensible standard, and
 * measure how many rows are already defensible. A row is DEFENSIBLE when it
 * carries a Part-19 rationale tag: literature-baseline, regulatory-alignment,
 * precautionary, or feasibility-driven. The loop terminates when every in-scope
 * row is DEFENSIBLE or ADJUDICATE (a documented human decision), NOT when every
 * PDF is ingested.
 *
 * Inputs (all existing artifacts — this tool asserts nothing new):
 *   data/evidence/hmtc_standards_gap_report.csv          — the row universe + evidence-presence status
 *   data/evidence/hmtc_aggregate_distributions.csv       — pooled verdict, rationale tag, cap, source count
 *   data/evidence/product_regulatory_crosswalk.csv       — which (product,metal) have a regulatory cap available
 *   wiki/products/*.md                                   — hmtc_category per product
 *
 * Output:
 *   data/evidence/standards-row-classifier.csv           — one row per (product,scope,metal): status, next_action, reason
 *   console dashboard                                     — counts by status + next_action, and by hmtc_category
 *
 * next_action vocabulary (what the governed loop dispatches):
 *   DONE            — defensible now (READY, literature-baseline or regulatory-alignment)
 *   CAP_MAP         — no occurrence data, but a regulatory cap is available → load it → defensible-by-cap
 *   EXTRACT_SYNTH   — evidence is owned/pooling but thin or unextracted → recover + synthesize (no fetch)
 *   FETCH_INGEST    — genuinely missing literature and no cap → acquire papers
 *   FIX_POOL        — pool internally inconsistent (unit/matrix artifact) → extraction fix + re-pool
 *   ADJUDICATE      — no data, no cap, no literature path → human precautionary/feasibility decision
 *   OUT_OF_SCOPE    — excluded from standards (context-only / out-of-scope)
 */

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const REPO = process.cwd()
const gapPath = path.join(REPO, "data/evidence/hmtc_standards_gap_report.csv")
const poolPath = path.join(REPO, "data/evidence/hmtc_aggregate_distributions.csv")
const xwalkPath = path.join(REPO, "data/evidence/product_regulatory_crosswalk.csv")
const outPath = path.join(REPO, "data/evidence/standards-row-classifier.csv")

const gap = readCsv(gapPath)
const pool = indexBy(readCsv(poolPath), (r) => key(r.product_slug, r.metal_species))
const capAvailable = new Set()
for (const r of readCsv(xwalkPath)) {
  const v = (r.regulatory_value_ug_kg ?? "").trim()
  if (v && v !== "0") capAvailable.add(key(r.product_slug, r.metal_species))
}
const productCategory = buildProductCategoryIndex()

const out = []
for (const g of gap) {
  const status = (g.aggregate_hmtc_percentile_status ?? "").trim()
  const p = pool.get(key(g.product_slug, g.metal_species))
  const hasCap = capAvailable.has(key(g.product_slug, g.metal_species)) ||
    (p && (p.lowest_regulatory_cap_ppb ?? "").trim() && (p.lowest_regulatory_cap_ppb ?? "").trim() !== "")
  const verdict = (p?.verdict ?? "").trim()

  let cls, action, reason
  if (status.startsWith("OUT OF SCOPE") || status.startsWith("CONTEXT ONLY")) {
    cls = "OUT_OF_SCOPE"; action = "OUT_OF_SCOPE"; reason = status
  } else if (verdict.startsWith("READY")) {
    cls = "DEFENSIBLE"; action = "DONE"
    reason = `${p.rationale_tag_auto} — ${verdict}`
  } else if (verdict.startsWith("PROVISIONAL")) {
    cls = "PROVISIONAL"; action = "EXTRACT_SYNTH"
    reason = `${verdict} (sources_contributing=${p.sources_contributing ?? "?"}) — recover/synthesize to firm up`
  } else if (verdict.includes("internally inconsistent")) {
    cls = "BLOCKED"; action = "FIX_POOL"
    reason = `${verdict} — unit/matrix artifact; fix extraction + re-pool`
  } else if (status.startsWith("POOLING ENGINE PENDING")) {
    // Evidence exists but no usable pooled statistic yet — an extraction/routing gap.
    cls = "PROVISIONAL"; action = "EXTRACT_SYNTH"
    reason = "evidence loaded but no usable pooled statistic — extraction/routing recovery"
  } else if (hasCap) {
    // No occurrence data, but a regulatory cap is available → defensible-by-cap.
    cls = "BLOCKED"; action = "CAP_MAP"
    reason = "no occurrence data, but a regulatory cap is available → load it (regulatory-alignment)"
  } else {
    // No data, no cap. Needs literature; if none can exist, needs adjudication.
    cls = "BLOCKED"; action = "FETCH_INGEST"
    reason = "no cited evidence and no loaded cap → acquire papers (or ADJUDICATE if no literature exists)"
  }

  out.push({
    product_slug: g.product_slug,
    product_standard_scope: g.product_standard_scope ?? "",
    metal_species: g.metal_species,
    hmtc_category: productCategory.get(g.product_slug) ?? "",
    class: cls,
    next_action: action,
    verdict: verdict || status,
    reason,
  })
}

// Write CSV
const headers = ["product_slug", "product_standard_scope", "metal_species", "hmtc_category", "class", "next_action", "verdict", "reason"]
fs.writeFileSync(outPath, [headers.join(","), ...out.map((r) => headers.map((h) => csvCell(r[h])).join(","))].join("\n") + "\n")

// Dashboard
const inScope = out.filter((r) => r.next_action !== "OUT_OF_SCOPE")
const byAction = countBy(inScope, (r) => r.next_action)
const byClass = countBy(inScope, (r) => r.class)
const defensible = byClass.DEFENSIBLE ?? 0
const pct = inScope.length ? Math.round((defensible / inScope.length) * 100) : 0

console.log(`\n=== Standards row classifier ===`)
console.log(`Universe: ${out.length} rows (${out.length - inScope.length} out-of-scope) → ${inScope.length} in-scope rows needing a standard`)
console.log(`\nDISTANCE TO DONE: ${defensible}/${inScope.length} rows defensible now (${pct}%)\n`)
console.log(`By class:`)
for (const [k, v] of Object.entries(byClass).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`)
console.log(`\nBy next_action (the loop's worklist):`)
for (const [k, v] of Object.entries(byAction).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`)
console.log(`\nCAP_MAP rows are closable with ZERO occurrence data (highest-leverage, no fetch).`)
console.log(`→ ${path.relative(REPO, outPath)}`)

// ---- helpers ----
function key(a, b) { return `${(a ?? "").trim()}|${(b ?? "").trim()}` }
function indexBy(rows, fn) { const m = new Map(); for (const r of rows) m.set(fn(r), r); return m }
function countBy(rows, fn) { const c = {}; for (const r of rows) { const k = fn(r); c[k] = (c[k] ?? 0) + 1 } return c }

function buildProductCategoryIndex() {
  const dir = path.join(REPO, "wiki/products")
  const idx = new Map()
  if (!fs.existsSync(dir)) return idx
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    try {
      const fm = matter(fs.readFileSync(path.join(dir, file), "utf8")).data || {}
      const cat = (fm.hmtc_category ?? "").toString().trim()
      if (cat) idx.set(file.replace(/\.md$/, ""), cat)
    } catch {}
  }
  return idx
}

function readCsv(fp) {
  if (!fs.existsSync(fp)) return []
  const lines = fs.readFileSync(fp, "utf8").split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const headers = parseLine(lines[0])
  return lines.slice(1).map((line) => { const c = parseLine(line); const o = {}; headers.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
function parseLine(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch }
  }
  out.push(cur); return out
}
function csvCell(v) { const s = String(v ?? ""); return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
