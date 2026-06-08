#!/usr/bin/env node
// validate-extraction-rows.mjs
//
// Pre-pool validation gate for per-study extraction CSVs
// (category*_primary_extraction_summary.csv). Rejects rows that would poison the
// pooling engine, BEFORE build-hmtc-aggregate-distributions.mjs reads them.
//
// Built after a Codex extraction sweep produced ~200 malformed rows (basis/
// product-subtype leaked into metal_species, e.g. "as_sold"/"avocado") and
// physically-impossible values (canned-fish Pb 0.0001; infant-formula 5,437,000),
// and broke the olive-oil 69.7 reference. Nothing validated rows before pooling;
// this is that guard.
//
// REJECT (-> quarantine CSV):
//   1. metal_species not in the canonical analyte vocabulary.
//   2. row_slug whose product page is not in the file's expected hmtc_category
//      (scope creep — e.g. a Cat-6/7 file picking up Cat-1 infant-formula rows).
//   3. a detected primary statistic (mean/max/p95/p50/p100) outside the physical
//      plausibility window for that analyte.
//   4. no usable data at all (every value blank AND not flagged non_detect).
// FLAG (kept, listed for human eyes): primary stat above a per-analyte "high but
//   possibly real" line (e.g. high total-As in seafood, Sn in canned).
//
// Cleaned rows are written back to each summary file in place; rejects ->
// data/evidence/extraction_quarantine.csv; flags -> data/evidence/extraction_review.csv.
// The pre-gate file is recoverable from git.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const evidenceDir = path.join(repoRoot, "data/evidence")
const productDir = path.join(repoRoot, "wiki/products")

// Files to validate, with the hmtc_category each is scoped to.
const TARGETS = [
  { file: "category6_primary_extraction_summary.csv", category: 6 },
  { file: "category7_primary_extraction_summary.csv", category: 7 },
]

const VALID_METALS = new Set([
  "Pb","Cd","iAs","tAs","tHg","MeHg","Hg","Ni","Cr","Cr-total","Cr-VI","Sn","Al",
])

// Per-analyte plausibility window in ppb (µg/kg). Floors catch unit-collapse
// (mg-left-as-µg); ceilings catch impossible magnitudes. Generous on top where
// high values are genuinely real (total As in seafood/seaweed; Sn in cans).
const RANGE = {
  Pb:[0.01,50000], Cd:[0.01,50000], iAs:[0.01,200000], tAs:[0.01,300000],
  tHg:[0.001,50000], MeHg:[0.001,50000], Hg:[0.001,50000], Ni:[0.01,100000],
  Cr:[0.01,100000], "Cr-total":[0.01,100000], "Cr-VI":[0.01,100000],
  Sn:[0.01,400000], Al:[0.01,1000000],
}
// review-if-above (kept, not deleted: some high values are real — seafood total
// As, canned Sn, cocoa Ni — so these surface for human eyes rather than auto-drop).
// Tuned to catch the tier-2 unit-error inflations (honey Pb 8987, salt/spices Al
// 164k/846k, vinegar Cr 3333) that pass the gross-plausibility ceilings.
const HIGH_FLAG = {
  Pb:1000, Cd:2000, tHg:2000, MeHg:2000, Hg:2000, Cr:2000, "Cr-total":2000,
  "Cr-VI":2000, Ni:5000, Al:20000, tAs:50000, iAs:20000, Sn:250000,
}

// slug -> hmtc_category from product pages
const slugCategory = new Map()
for (const f of fs.readdirSync(productDir)) {
  if (!f.endsWith(".md") || f === "index.md") continue
  try {
    const d = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
    const slug = String(d.category || path.basename(f, ".md"))
    if (d.hmtc_category !== undefined) slugCategory.set(slug, Number(d.hmtc_category))
  } catch {}
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0)
  const header = splitLine(lines[0])
  return { header, rows: lines.slice(1).map((l) => { const c = splitLine(l); const o = {}; header.forEach((h, i) => (o[h] = c[i] ?? "")); o.__raw = l; return o }) }
}
function splitLine(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch }
  }
  out.push(cur); return out
}
const numOr = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }

function reviewNoteFor(row, defaultNote) {
  const notes = String(row.notes || "").trim()
  const source = String(row.source_id || "").trim()
  if (/Rechecked 2026-06-08/.test(notes)) {
    return [source, notes].filter(Boolean).join(": ")
  }
  return defaultNote
}

let totalKept = 0, totalReject = 0, totalFlag = 0
const quarantine = []
const review = []

for (const { file, category } of TARGETS) {
  const fp = path.join(evidenceDir, file)
  if (!fs.existsSync(fp)) { console.log(`skip (missing): ${file}`); continue }
  const { header, rows } = parseCsv(fs.readFileSync(fp, "utf8"))
  const kept = []
  for (const r of rows) {
    const metal = (r.metal_species || "").trim()
    const slug = (r.row_slug || "").trim()
    const isNonDetect = /non_detect/i.test(r.statistic_type || "") || /below_lod/i.test(r.censoring_status || "")
    const prim = [r.mean_ppb, r.max_ppb, r.p95_ppb, r.p50_ppb, r.median_ppb, r.p100_ppb].map(numOr).filter((x) => x !== null)

    let reason = ""
    if (!VALID_METALS.has(metal)) reason = `invalid metal_species "${metal}"`
    else if (slug && slugCategory.has(slug) && slugCategory.get(slug) !== category) reason = `scope: ${slug} is Cat ${slugCategory.get(slug)}, not ${category}`
    else if (!prim.length && !isNonDetect) reason = "no usable value and not flagged non_detect"
    else if (prim.length) {
      const [lo, hi] = RANGE[metal] || [0.01, 1000000]
      const bad = prim.find((v) => v > 0 && (v < lo || v > hi))
      if (bad !== undefined) reason = `value ${bad} ppb outside plausibility [${lo}, ${hi}] for ${metal}`
    }

    if (reason) { quarantine.push({ file, slug, metal, reason, raw: r.__raw }); totalReject++; continue }

    const hi = HIGH_FLAG[metal]
    if (hi && prim.some((v) => v > hi)) {
      const defaultNote = `above ${hi} ppb — confirm real (e.g. seafood As / canned Sn), not a unit error`
      review.push({ file, slug, metal, value: Math.max(...prim), note: reviewNoteFor(r, defaultNote) })
      totalFlag++
    }
    kept.push(r)
  }
  // rewrite cleaned file (pre-gate version recoverable from git)
  const out = [header.join(",")].concat(kept.map((r) => r.__raw)).join("\n") + "\n"
  fs.writeFileSync(fp, out, "utf8")
  totalKept += kept.length
  console.log(`${file}: kept ${kept.length}, rejected ${rows.length - kept.length}`)
}

// quarantine + review outputs
fs.writeFileSync(path.join(evidenceDir, "extraction_quarantine.csv"),
  "file,row_slug,metal_species,reject_reason,raw_row\n" +
  quarantine.map((q) => `${q.file},${q.slug},${q.metal},"${q.reason.replace(/"/g, '""')}","${(q.raw || "").replace(/"/g, '""')}"`).join("\n") + "\n", "utf8")
fs.writeFileSync(path.join(evidenceDir, "extraction_review.csv"),
  "file,row_slug,metal_species,max_value_ppb,note\n" +
  review.map((r) => `${r.file},${r.slug},${r.metal},${r.value},"${r.note}"`).join("\n") + "\n", "utf8")

console.log(`\nValidation gate: ${totalKept} kept, ${totalReject} quarantined, ${totalFlag} flagged for review.`)
console.log(`  rejects -> data/evidence/extraction_quarantine.csv`)
console.log(`  flags   -> data/evidence/extraction_review.csv`)
