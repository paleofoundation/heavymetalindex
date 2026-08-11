#!/usr/bin/env node
// build-standards-recovery-worklist.mjs
//
// Systematizes the recover-and-adjudicate campaign (Karen 2026-06-16). For every
// locked (row, metal) cell it reports:
//   - pool completeness: distinct contributing sources + verdict
//   - stranded-recoverable: declared-but-unpooled sources that have a local PDF
//     (best-effort from the routing audit + reingest queue; NOTE the routing
//     audit's missing_metal_species OVER-counts — many "missing" are correctly
//     excluded context/below-LoD, so this is a worklist to TRIAGE, not a gap count)
//   - status: COMPLETE / RECOVERABLE / THIN / EMPTY
//   - outlier flag: heavy-tail cells (pooled_p97/pooled_p50 above a threshold) are
//     review candidates — a single high source may be dominating (e.g. an elevated
//     regional market). Flagged for adjudication, NOT auto-excluded; genuinely
//     bimodal matrices (hijiki) also trip this and are confirmed legitimate on review.
//
// Outputs:
//   data/evidence/standards-recovery-worklist.csv
//   appends new heavy-tail flags to data/evidence/standards-outlier-adjudication.csv

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const ev = (f) => path.join(repoRoot, "data/evidence", f)
const productDir = path.join(repoRoot, "wiki/products")

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const split = (line) => {
    const out = []; let cur = ""; let q = false
    for (let i = 0; i < line.length; i++) { const ch = line[i]
      if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
      else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
    out.push(cur); return out
  }
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }
const hasMetal = (field, m) => (field || "").replace(/,/g, ";").split(";").map((s) => s.trim().toLowerCase()).includes(m.toLowerCase())

const dist = fs.existsSync(ev("hmtc_aggregate_distributions.csv")) ? parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8")) : []
const cell = new Map()
for (const r of dist) cell.set(`${r.product_slug}|${r.metal_species}`, r)
const routing = fs.existsSync(ev("product_source_routing_audit.csv")) ? parseCsv(fs.readFileSync(ev("product_source_routing_audit.csv"), "utf8")) : []
const queue = fs.existsSync(ev("local_reingest_queue.csv")) ? parseCsv(fs.readFileSync(ev("local_reingest_queue.csv"), "utf8")) : []
const queuedPdf = new Set()
for (const q of queue) if (/found/i.test(q.local_pdf_status || "")) queuedPdf.add(`${q.product_slug}|${q.source_id}`)

// locked rows + their priority metals
const lockedRows = []
for (const f of fs.readdirSync(productDir)) {
  if (!f.endsWith(".md") || f === "index.md") continue
  const d = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
  if (d.products_status !== "locked") continue
  const slug = String(d.category || path.basename(f, ".md"))
  const metals = Array.isArray(d.primary_metals_of_concern) ? d.primary_metals_of_concern.map(String) : []
  lockedRows.push({ slug, cat: Number(d.hmtc_category), metals })
}

const HEAVY_TAIL = 20 // p97/p50 above this ⇒ outlier-tail review candidate
const out = []
const newFlags = []
for (const row of lockedRows) {
  const routed = routing.filter((r) => r.product_slug === row.slug)
  for (const m of row.metals) {
    const c = cell.get(`${row.slug}|${m}`)
    const poolDistinct = c ? num(c.distinct_sources) ?? 0 : 0
    const p50 = c ? num(c.pooled_p50) : null
    const p97 = c ? num(c.pooled_p97) : null
    const verdict = c ? c.verdict || "" : "(no cell)"
    // stranded-recoverable: sources that declare this metal for this row, have a local PDF, beyond the pooled count
    const declarers = new Set(routed.filter((r) => hasMetal(r.declared_metal_species, m) || hasMetal(r.metal_species, m) || hasMetal(r.missing_metal_species, m)).map((r) => r.source_id))
    const recoverable = [...declarers].filter((sid) => queuedPdf.has(`${row.slug}|${sid}`))
    let status
    if (poolDistinct === 0) status = recoverable.length ? "EMPTY-RECOVERABLE" : "EMPTY"
    else if (poolDistinct < 3) status = recoverable.length ? "THIN-RECOVERABLE" : "THIN"
    else if (recoverable.length >= poolDistinct) status = "OK-MORE-AVAILABLE"
    else status = "OK"
    const tail = p50 && p50 > 0 && p97 ? p97 / p50 : null
    const outlierFlag = tail && tail > HEAVY_TAIL ? `heavy-tail p97/p50=${tail.toFixed(1)}` : ""
    if (outlierFlag && !verdict.startsWith("BLOCKED")) {
      newFlags.push({ row_slug: row.slug, metal_species: m, source_id: "(tail-scan)", source_value_ppb: "",
        pool_context: `${outlierFlag} (candidate ${c.candidate_value_ppb || ""} ppb) — single high source or bimodal matrix; confirm on review`,
        flag: "heavy-tail-review", policy: "global-pool-flag-and-adjudicate (Karen 2026-06-16)",
        disposition: "REVIEW before publishing firm", date: "2026-06-16" })
    }
    out.push({ cat: row.cat, row_slug: row.slug, metal: m, pool_distinct: poolDistinct, pool_n: c ? c.pooled_n || 0 : 0,
      verdict: verdict.split(":")[0].trim(), candidate_ppb: c ? c.candidate_value_ppb || "" : "", status,
      recoverable_with_pdf: recoverable.length, recoverable_sources: recoverable.slice(0, 6).join(" "), outlier_flag: outlierFlag })
  }
}

// write worklist
const wlCols = ["cat", "row_slug", "metal", "pool_distinct", "pool_n", "verdict", "candidate_ppb", "status", "recoverable_with_pdf", "recoverable_sources", "outlier_flag"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(ev("standards-recovery-worklist.csv"), [wlCols.join(","), ...out.map((r) => wlCols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

// merge heavy-tail flags into the adjudication register (skip ones already present for the cell)
const adjPath = ev("standards-outlier-adjudication.csv")
const existing = fs.existsSync(adjPath) ? parseCsv(fs.readFileSync(adjPath, "utf8")) : []
const adjCols = ["row_slug", "metal_species", "source_id", "source_value_ppb", "pool_context", "flag", "policy", "disposition", "date"]
const seen = new Set(existing.map((r) => `${r.row_slug}|${r.metal_species}`))
const merged = [...existing]
for (const f of newFlags) if (!seen.has(`${f.row_slug}|${f.metal_species}`)) { merged.push(f); seen.add(`${f.row_slug}|${f.metal_species}`) }
fs.writeFileSync(adjPath, [adjCols.join(","), ...merged.map((r) => adjCols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

// console summary
const byStatus = {}
for (const r of out) byStatus[r.status] = (byStatus[r.status] || 0) + 1
console.log(`Locked material cells: ${out.length}`)
for (const [k, v] of Object.entries(byStatus).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`)
console.log(`Heavy-tail outlier flags added: ${newFlags.length} → standards-outlier-adjudication.csv`)
console.log(`Wrote data/evidence/standards-recovery-worklist.csv`)
