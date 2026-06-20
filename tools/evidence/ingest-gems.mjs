#!/usr/bin/env node
// WHO GEMS/Food occurrence-data adapter — STAGE 1 of the GEMS path.
//
// GEMS is raw individual-measurement data (one row = one sample of one metal in
// one food), hundreds of thousands of rows per metal. It is NOT a paper, so the
// Cochrane PDF pipeline can't touch it. This adapter streams the CSVs and emits
// a COMPACT per-(metal, food, basis) distribution aggregate to a staging file:
//
//   data/evidence/gems-aggregates.jsonl
//
// It does NOT write to wiki pages. Landing these on contamination_profile blocks
// requires (a) the GEMS-food -> wiki-slug crosswalk and (b) a censoring/basis
// methodology sign-off — both deliberately downstream of this safe staging step.
//
// Handles the things that matter for a defensible aggregate:
//   - Units normalized to ppb (µg/kg):  mg/kg ×1000,  ug/kg/µg/kg ×1
//   - Censoring: ResultText "0"/empty = below detection (BDL); counted as
//     n_censored, NOT as a literal 0 (which would wreck percentiles). We report
//     %censored AND the detected-value distribution so the methodology step can
//     choose a substitution rule (LOD/2, etc.) later.
//   - Basis kept separate: GEMS "As is" (wet) vs "Dry weight" never pooled.
//   - Provenance: every aggregate carries source_id = who-gems-food-database.
//
// Usage:
//   node tools/evidence/ingest-gems.mjs --dir="raw/Manual Fetch Kimi /June 1 GEMS data " [--limit=200000]

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import readline from "node:readline"

const REPO = process.env.HMI_REPO_ROOT || path.join(os.homedir(), "Desktop/heavy-metal-index")
const args = new Map()
for (const a of process.argv.slice(2)) {
  if (a.startsWith("--")) { const e = a.indexOf("="); e > 0 ? args.set(a.slice(2, e), a.slice(e + 1)) : args.set(a.slice(2), "true") }
}
const dir = args.get("dir")
const rowLimit = args.get("limit") ? Number(args.get("limit")) : Infinity
if (!dir) { console.error('ERROR: --dir required'); process.exit(1) }
const absDir = path.isAbsolute(dir) ? dir : path.join(REPO, dir)

const SOURCE_ID = "who-gems-food-database"
const OUT = path.join(REPO, "data/evidence/gems-aggregates.jsonl")
const MAX_VALUES_PER_GROUP = 200000 // memory guard; reservoir beyond this

const METAL = { // GEMS ContaminantName -> wiki analyte symbol
  lead: "Pb", cadmium: "Cd",
  // mercury species — "Mercury"/"Total mercury" both = total Hg (tHg); methyl
  // and inorganic kept distinct. (2026-06-20: the WHO export names total Hg as
  // "Total mercury", which previously fell through to a literal bucket and split
  // tHg in two — 180k rows mislabeled. Same for "Arsenic (total)" -> tAs.)
  mercury: "tHg", "total mercury": "tHg",
  methylmercury: "MeHg", "methyl mercury": "MeHg",
  "mercury (inorganic)": "Hg-inorganic",
  arsenic: "tAs", "arsenic (total)": "tAs",
  "arsenic (inorganic)": "iAs", "arsenic, inorganic": "iAs",
  "arsenic (organic)": "As-organic",
  aluminum: "Al", aluminium: "Al", chromium: "Cr", nickel: "Ni", tin: "Sn",
}
function metalSymbol(name) { return METAL[(name || "").trim().toLowerCase()] || (name || "").trim() }
function basisOf(s) {
  const v = (s || "").toLowerCase()
  if (v.includes("dry")) return "dry"
  if (v.includes("fat")) return "fat"
  if (v.includes("whole")) return "whole"
  return "as-is" // "As is" = wet weight, the GEMS default
}
function toPpb(valueStr, unit) {
  const v = Number(valueStr)
  if (!Number.isFinite(v)) return null
  const u = (unit || "").toLowerCase()
  if (u.includes("mg/kg") || u.includes("ppm")) return v * 1000
  if (u.includes("ug/kg") || u.includes("µg/kg") || u.includes("ppb")) return v
  if (u.includes("g/kg")) return v * 1e6
  return null // unknown unit -> skip
}
// Quote-aware CSV line split (FoodName can be "Rice, white").
function splitCsv(line) {
  const out = []; let cur = "", q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (c === '"') q = false; else cur += c }
    else { if (c === '"') q = true; else if (c === ",") { out.push(cur); cur = "" } else cur += c }
  }
  out.push(cur); return out
}
function pct(sorted, p) {
  if (!sorted.length) return null
  const idx = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length))
  return Math.round(sorted[idx] * 100) / 100
}

const groups = new Map() // key metal|food|basis -> {meta, n, nBdl, vals:[]}
let totalRows = 0, kept = 0, skippedUnit = 0

async function processFile(file) {
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity })
  let header = null, idx = {}
  for await (const line of rl) {
    if (!line) continue
    if (!header) {
      header = splitCsv(line)
      header.forEach((h, i) => (idx[h.trim()] = i))
      continue
    }
    if (totalRows >= rowLimit) break
    totalRows++
    const f = splitCsv(line)
    const metal = metalSymbol(f[idx.ContaminantName])
    const food = (f[idx.FoodName] || "").trim()
    if (!metal || !food) continue
    const basis = basisOf(f[idx.ResultBasisName])
    const key = `${metal}|${food}|${basis}`
    let g = groups.get(key)
    if (!g) {
      g = { metal, food, basis, food_category: (f[idx.FoodCategory] || "").trim(), food_code: (f[idx.FoodCode] || "").trim(), n: 0, nBdl: 0, vals: [], years: new Set(), regions: new Set() }
      groups.set(key, g)
    }
    g.n++
    const yr = f[idx.Year]; if (yr) g.years.add(yr)
    const rg = f[idx.RegionName]; if (rg) g.regions.add(rg)
    const rt = (f[idx.ResultText] || "").trim()
    if (rt === "" || Number(rt) <= 0) { g.nBdl++; continue } // below detection
    const ppb = toPpb(rt, f[idx.UnitName])
    if (ppb == null) { skippedUnit++; continue }
    kept++
    if (g.vals.length < MAX_VALUES_PER_GROUP) g.vals.push(ppb)
    else { const j = Math.floor(Math.random() * g.n); if (j < MAX_VALUES_PER_GROUP) g.vals[j] = ppb } // reservoir
  }
}

const csvs = fs.readdirSync(absDir).filter((f) => f.toLowerCase().endsWith(".csv"))
console.log(`GEMS adapter: ${csvs.length} CSV(s) under ${dir}`)
for (const c of csvs) {
  process.stdout.write(`  streaming ${c} ... `)
  const before = totalRows
  await processFile(path.join(absDir, c))
  console.log(`${totalRows - before} rows`)
  if (totalRows >= rowLimit) { console.log(`  (row limit ${rowLimit} reached)`); break }
}

// Emit aggregates (drop tiny groups: n < 3 is not a distribution).
const out = []
for (const g of groups.values()) {
  if (g.n < 3) continue
  const sorted = g.vals.slice().sort((a, b) => a - b)
  out.push({
    source_id: SOURCE_ID,
    metal_species: g.metal,
    gems_food: g.food,
    gems_food_category: g.food_category,
    gems_food_code: g.food_code,
    basis: g.basis,
    n_total: g.n,
    n_censored: g.nBdl,
    pct_censored: Math.round((g.nBdl / g.n) * 1000) / 10,
    n_detected: sorted.length,
    detected_ppb: sorted.length ? { p50: pct(sorted, 50), p75: pct(sorted, 75), p90: pct(sorted, 90), p95: pct(sorted, 95), max: pct(sorted, 100) } : null,
    years: [...g.years].filter(Boolean).sort(),
    n_regions: g.regions.size,
  })
}
out.sort((a, b) => b.n_total - a.n_total)
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, out.map((o) => JSON.stringify(o)).join("\n") + "\n")

console.log(`\nRows read: ${totalRows} | detected values kept: ${kept} | skipped (bad unit): ${skippedUnit}`)
console.log(`Aggregates (metal × food × basis, n>=3): ${out.length}`)
console.log(`Wrote ${path.relative(REPO, OUT)}`)
console.log(`\nTop aggregates by sample count:`)
for (const o of out.slice(0, 8)) {
  console.log(`  ${o.metal_species.padEnd(4)} ${o.gems_food.slice(0, 32).padEnd(33)} n=${o.n_total} (${o.pct_censored}% BDL) p50=${o.detected_ppb?.p50 ?? "-"} p95=${o.detected_ppb?.p95 ?? "-"} ppb`)
}
