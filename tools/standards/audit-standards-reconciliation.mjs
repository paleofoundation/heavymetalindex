#!/usr/bin/env node
// audit-standards-reconciliation.mjs
//
// THE RECONCILIATION ANCHOR (plan 2026-07-21 §5.A).
//
// The pooling engine emits a per-cell confidence derived ONLY from the pool's
// sensitivity band: build-category-standards-tables.mjs labels a cell "firm"
// whenever sens_band == "stable". That logic is blind to the human adjudication
// layer (data/evidence/standards-outlier-adjudication.csv) and to the
// not-material list (data/evidence/standards-not-material.csv). So a cell the
// adjudication WITHDREW (wrong analyte), HELD (structural defect / suspect), or
// flagged HOLD-PROVISIONAL can still be presented as a firm published standard.
// The worked example: fish-marine-non-predatory tAs = 83,014 ppb reads "firm"
// (sens_band stable) while adjudication WITHDREW total-As as arsenobetaine-
// dominated and toxicologically wrong.
//
// This audit reconciles the two. For every pooled cell it compares the engine's
// auto-confidence against the LATEST adjudication disposition for that
// (row, analyte) and against the not-material list, and reports every conflict
// where the engine over-claims relative to ground truth. HIGH conflicts fail the
// build (a firm/published value for an adjudicated-away cell); MEDIUM conflicts
// are advisory (a value shown where "adjudication pending" is the honest render).
//
// This does not change any threshold value. It makes the presented confidence
// honor the adjudication that already exists — moving the artifact toward the
// literature (CLAUDE.md Part 2 direction check: exposes gaps, never hides them).
//
// Usage:
//   node tools/standards/audit-standards-reconciliation.mjs            # exit 1 on HIGH
//   node tools/standards/audit-standards-reconciliation.mjs --warn-only # always exit 0
//   node tools/standards/audit-standards-reconciliation.mjs --category=6

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const catArg = (args.find((a) => a.startsWith("--category=")) || "").split("=")[1] || null

const distPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const adjPath = path.join(repoRoot, "data/evidence/standards-outlier-adjudication.csv")
const nmPath = path.join(repoRoot, "data/evidence/standards-not-material.csv")
const readinessPath = path.join(repoRoot, "data/evidence/category-standards-readiness.json")
const outMd = path.join(repoRoot, "data/workbench/standards/2026-07-21-standards-reconciliation-audit.md")
const outCsv = path.join(repoRoot, "data/evidence/standards-reconciliation-conflicts.csv")

// ── dependency-free CSV (same dialect as build-category-standards-tables.mjs) ──
function split(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
const readCsv = (p) => (fs.existsSync(p) ? parseCsv(fs.readFileSync(p, "utf8")) : [])
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }
const key = (slug, metal) => `${slug}|${metal}`

// ── slug -> category map (for grouping) from the readiness JSON ────────────────
const slugCat = new Map()
if (fs.existsSync(readinessPath)) {
  const r = JSON.parse(fs.readFileSync(readinessPath, "utf8"))
  for (const [cat, v] of Object.entries(r)) for (const row of v.rows || []) slugCat.set(row.slug, cat)
}

// ── classify an adjudication disposition string into a controlled verdict ──────
// Ground-truth vocabulary read from standards-outlier-adjudication.csv (2026-06).
function classify(disp) {
  const d = (disp || "").trim()
  const u = d.toUpperCase()
  if (u.startsWith("WITHDRAWN") || u.startsWith("HELD/WITHDRAWN") || /\bPUBLISH NO\b/.test(u)) return "withdrawn"
  if (u.startsWith("NOT SHIPPABLE")) return "not-shippable"
  if (u.startsWith("HOLD")) return "hold-provisional"
  if (u.startsWith("HELD")) return "held"
  if (u.startsWith("REVIEW")) return "review"
  if (u.startsWith("CLEARED")) return "cleared"
  return "other"
}
// verdicts that mean "the engine must not present this cell as a firm/published value"
const MUST_NOT_PUBLISH = new Set(["withdrawn", "not-shippable"]) // no value at all
const MUST_NOT_BE_FIRM = new Set(["held", "hold-provisional", "review"]) // pending, not firm

// ── latest adjudication disposition per (slug, metal) ─────────────────────────
const adjLatest = new Map()
for (const r of readCsv(adjPath)) {
  const k = key(r.row_slug, r.metal_species)
  const prev = adjLatest.get(k)
  if (!prev || String(r.date) >= String(prev.date)) adjLatest.set(k, r)
}
// not-material cells (suppressed: no published value for that matrix/analyte)
const notMaterial = new Map()
for (const r of readCsv(nmPath)) notMaterial.set(key(r.row_slug, r.metal_species), r)

// ── replicate the engine's presented state (build-category-standards-tables.mjs) ─
function presented(r) {
  const p97 = num(r.pooled_p97); const cap = num(r.lowest_regulatory_cap_ppb); const cand = num(r.candidate_value_ppb)
  const final = cand ?? (p97 !== null && cap !== null ? Math.min(p97, cap) : (cap ?? p97))
  const sens = (r.sens_band || "").toLowerCase()
  const conf = final === null ? "no data" : (sens === "stable" ? "firm" : sens === "no_data" ? "no data" : "provisional")
  return { final, conf }
}

// ── walk every pooled cell, detect conflicts ──────────────────────────────────
const conflicts = []
for (const r of readCsv(distPath)) {
  const slug = r.product_slug, metal = r.metal_species
  const cat = slugCat.get(slug) || "?"
  if (catArg && String(cat) !== String(catArg)) continue
  const { final, conf } = presented(r)
  const shown = final !== null && conf !== "no data"

  const nm = notMaterial.get(key(slug, metal))
  const adj = adjLatest.get(key(slug, metal))
  const verdict = adj ? classify(adj.disposition) : null

  // C1 — HIGH: engine shows a value for a WITHDRAWN or NOT-MATERIAL cell
  if (shown && (nm || (verdict && MUST_NOT_PUBLISH.has(verdict)))) {
    conflicts.push({ severity: "HIGH", type: nm ? "shown-but-not-material" : `shown-but-${verdict}`,
      cat, slug, metal, engine_value: final, engine_conf: conf,
      ground_truth: nm ? `not-material: ${nm.rationale}` : adj.disposition })
    continue
  }
  // C2 — HIGH: engine labels FIRM a cell the adjudication HELD / HOLD / REVIEW
  if (conf === "firm" && verdict && MUST_NOT_BE_FIRM.has(verdict)) {
    conflicts.push({ severity: "HIGH", type: `firm-but-${verdict}`,
      cat, slug, metal, engine_value: final, engine_conf: conf, ground_truth: adj.disposition })
    continue
  }
  // C3 — MEDIUM: engine shows a provisional value where adjudication wants "pending"
  if (shown && verdict && MUST_NOT_BE_FIRM.has(verdict)) {
    conflicts.push({ severity: "MEDIUM", type: `shown-provisional-but-${verdict}`,
      cat, slug, metal, engine_value: final, engine_conf: conf, ground_truth: adj.disposition })
  }
}

conflicts.sort((a, b) => (a.severity === b.severity ? String(a.cat).localeCompare(String(b.cat)) : a.severity === "HIGH" ? -1 : 1))
const high = conflicts.filter((c) => c.severity === "HIGH")
const med = conflicts.filter((c) => c.severity === "MEDIUM")

// ── emit machine CSV ──────────────────────────────────────────────────────────
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
const csvRows = [["severity", "type", "category", "row_slug", "metal_species", "engine_value_ppb", "engine_conf", "ground_truth"]]
for (const c of conflicts) csvRows.push([c.severity, c.type, c.cat, c.slug, c.metal, c.engine_value, c.engine_conf, c.ground_truth])
fs.writeFileSync(outCsv, csvRows.map((r) => r.map(esc).join(",")).join("\n") + "\n")

// ── emit human report ─────────────────────────────────────────────────────────
const md = []
md.push("---", "op: standards-reconciliation-audit", "date: 2026-07-21", "audience: [staff]",
  "generator: tools/standards/audit-standards-reconciliation.mjs", "---", "")
md.push("# Standards reconciliation audit", "")
md.push("Cross-checks the pooling engine's auto-confidence (`sens_band`→firm, per",
  "`build-category-standards-tables.mjs`) against the human adjudication layer",
  "(`standards-outlier-adjudication.csv`) and the not-material list",
  "(`standards-not-material.csv`). A conflict means the engine presents a cell more",
  "confidently than ground truth allows. No threshold value is changed here; this is",
  "the reconciliation anchor that makes 'firm' mean 'reconciled', not 'the pool was stable'.", "")
md.push("_Scope: this reads the engine's **direct-pool** layer. Thin or no-data pools are NOT",
  "flagged as conflicts — a thin cell may carry a defensible read-across in the briefing layer",
  "(the four-anchor chain: empirical / analytical / regulatory / inferential). Only cells the",
  "engine presents *more* confidently than the adjudication / not-material ground truth count._", "")
md.push(`**${high.length} HIGH** (engine publishes/firms an adjudicated-away cell) · **${med.length} MEDIUM** (value shown where 'adjudication pending' is honest).`, "")
function table(list) {
  if (!list.length) { md.push("_none_", ""); return }
  md.push("| Cat | Row | Analyte | Engine shows | Conflict | Ground truth (latest adjudication) |")
  md.push("| --- | --- | --- | --- | --- | --- |")
  for (const c of list) {
    const v = c.engine_value === null ? "—" : (c.engine_value >= 100 ? Math.round(c.engine_value) : Number(c.engine_value).toFixed(2))
    const gt = String(c.ground_truth).replace(/\s+/g, " ").slice(0, 180)
    md.push(`| ${c.cat} | ${c.slug} | ${c.metal} | ${v} ppb (${c.engine_conf}) | ${c.type} | ${gt} |`)
  }
  md.push("")
}
md.push("## HIGH — build-blocking", ""); table(high)
md.push("## MEDIUM — advisory (render 'adjudication pending')", ""); table(med)
md.push("## How to clear a conflict", "",
  "- **withdrawn / not-material:** the engine must publish no value. Fix: make the",
  "  tables/briefing generators suppress the cell (read these two files), or route the",
  "  analyte out per the not-material rationale.",
  "- **held / hold-provisional / review:** render 'adjudication pending', never a firm",
  "  number, until the governance/source-adjudication decision is recorded.",
  "- Re-run this audit after the generator is made adjudication-aware; HIGH must reach 0.", "")
fs.mkdirSync(path.dirname(outMd), { recursive: true })
fs.writeFileSync(outMd, md.join("\n") + "\n")

// ── console summary ───────────────────────────────────────────────────────────
console.log(`standards reconciliation: ${high.length} HIGH, ${med.length} MEDIUM conflicts`)
for (const c of high) console.log(`  HIGH  [cat ${c.cat}] ${c.slug} ${c.metal}: engine ${c.engine_conf} ${c.engine_value} vs ${c.type}`)
console.log(`report: ${path.relative(repoRoot, outMd)}`)
console.log(`conflicts csv: ${path.relative(repoRoot, outCsv)}`)
if (high.length && !warnOnly) process.exit(1)
