// adjudication.mjs — single source of truth for the human adjudication ledger.
//
// Both the reconciliation audit (audit-standards-reconciliation.mjs, the gate)
// and the tables renderer (build-category-standards-tables.mjs) load their
// dispositions from HERE, so the two surfaces can never drift apart. That
// shared-ledger discipline is the whole point of the reconciliation anchor:
// "firm" must mean "reconciled with the human decision," not "the pool was
// stable." Dependency-free.
//
// Ground-truth inputs:
//   data/evidence/standards-outlier-adjudication.csv (row_slug, metal_species,
//       disposition, date, flag, ...) — the dated human verdict per cell.
//   data/evidence/standards-not-material.csv (row_slug, metal_species, rationale)
//       — analytes that carry no contaminant standard for a matrix (additive /
//       natural / does-not-partition), which must publish NO value.

import fs from "node:fs"
import path from "node:path"

export function splitCsvLine(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
export function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const H = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => { const c = splitCsvLine(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}

// Classify a free-text disposition into a controlled verdict. Vocabulary read
// from the 2026-06 adjudication ledger; order matters (most-severe token first).
export function classify(disp) {
  const u = (disp || "").trim().toUpperCase()
  if (!u) return null
  if (u.startsWith("WITHDRAWN") || u.startsWith("HELD/WITHDRAWN") || /\bPUBLISH NO\b/.test(u)) return "withdrawn"
  if (u.startsWith("NOT SHIPPABLE")) return "not-shippable"
  if (u.startsWith("HOLD")) return "hold-provisional"
  if (u.startsWith("HELD")) return "held"
  if (u.startsWith("REVIEW")) return "review"
  if (u.startsWith("CLEARED")) return "cleared"
  return "other"
}

// A cell with a SUPPRESS verdict publishes NO value (wrong analyte / not-material).
export const SUPPRESS = new Set(["withdrawn"])
// A cell with a PENDING verdict renders "adjudication pending" — never a firm value.
export const PENDING = new Set(["held", "hold-provisional", "review", "not-shippable"])

const key = (slug, metal) => `${slug}|${metal}`

export function loadAdjudication(repoRoot) {
  const adjPath = path.join(repoRoot, "data/evidence/standards-outlier-adjudication.csv")
  const nmPath = path.join(repoRoot, "data/evidence/standards-not-material.csv")

  // Latest dated disposition per (slug, metal). Cells are re-adjudicated over
  // time (e.g. a HELD that later CLEARED); the most recent date is authoritative.
  const adjLatest = new Map()
  if (fs.existsSync(adjPath)) for (const r of parseCsv(fs.readFileSync(adjPath, "utf8"))) {
    const k = key(r.row_slug, r.metal_species)
    const prev = adjLatest.get(k)
    if (!prev || String(r.date) >= String(prev.date)) adjLatest.set(k, r)
  }
  const notMaterial = new Map()
  if (fs.existsSync(nmPath)) for (const r of parseCsv(fs.readFileSync(nmPath, "utf8"))) notMaterial.set(key(r.row_slug, r.metal_species), r)

  return {
    // {klass, reason, flag, date} | null
    dispositionFor(slug, metal) {
      const r = adjLatest.get(key(slug, metal)); if (!r) return null
      return { klass: classify(r.disposition), reason: r.disposition, flag: r.flag, date: r.date }
    },
    // {reason, regulatory_basis} | null
    notMaterialFor(slug, metal) {
      const r = notMaterial.get(key(slug, metal)); if (!r) return null
      return { reason: r.rationale, regulatory_basis: r.regulatory_basis }
    },
  }
}
