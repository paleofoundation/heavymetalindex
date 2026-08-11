#!/usr/bin/env node
// build-n-deficit-queue.mjs
//
// The acquisition worklist, ordered by what it costs to fix.
//
// A cell is blocked for one of two very different reasons and the gap report
// does not currently separate them:
//
//   NO DATA        no source contributes anything. Fixing it means finding
//                  literature that does not yet exist in the corpus.
//   THIN           sources exist and pool, but the effective sample size is
//                  below what the assigned percentile can carry
//                  (ceil(ln(0.05)/ln(P)): 29 for P90, 59 for P95, 99 for P97).
//                  Fixing it means adding observations to a pool that already
//                  works, which is far cheaper per cell.
//
// Only the second class has a meaningful "how much more do we need" number, and
// it is the class worth fetching first: a cell 9 samples short of a defensible
// P97 is the cheapest standard the program will ever publish, while a cell with
// zero sources needs a literature campaign.
//
// Reads:  data/evidence/hmtc_aggregate_distributions.csv
// Writes: data/evidence/hmtc_n_deficit_queue.csv
//         (product_slug, metal_species, class, effective_n, n_required,
//          deficit, best_supportable_percentile, priority)
//
// Feeds tools/wishlist/build-targeted-queries.mjs, which already turns
// per-(product, metal) gaps into OpenAlex queries for the fetch pipeline.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ev = (f) => path.join(repoRoot, "data/evidence", f)

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

const PANEL = new Set(["Pb", "tAs", "Cd", "MeHg", "tHg", "iAs", "Ni", "Al", "Cr-VI", "Sn"])
const nMin = (p) => Math.ceil(Math.log(0.05) / Math.log(p))
// Highest percentile a given effective n can carry at 95% confidence.
const bestP = (n) => {
  for (const p of [0.97, 0.95, 0.9, 0.75, 0.5]) if (n >= nMin(p)) return p
  return null
}

const dist = parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8"))
const out = []
for (const r of dist) {
  const metal = r.metal_species
  if (!PANEL.has(metal)) continue
  const targetP = num(r.target_p)
  if (targetP === null || targetP < 0.5) continue
  const eff = num(r.pooled_n_effective) ?? num(r.pooled_n) ?? 0
  const sources = num(r.sources_contributing) ?? 0
  const required = nMin(targetP)
  if (eff >= required) continue

  const cls = sources === 0 || eff === 0 ? "NO_DATA" : "THIN"
  const supportable = bestP(eff)
  out.push({
    product_slug: r.product_slug,
    product_label: (r.product_label || "").replace(/\s+/g, " ").trim(),
    metal_species: metal,
    class: cls,
    target_percentile: targetP,
    effective_n: Math.round(eff),
    n_required: required,
    deficit: required - Math.round(eff),
    best_supportable_percentile: supportable === null ? "" : supportable,
    distinct_sources: r.distinct_sources || "0",
    sample_level_sources: r.sample_level_contributing || "0",
    // THIN cells sort first and by smallest deficit: cheapest defensible
    // standards first. NO_DATA cells trail, ordered arbitrarily since their
    // cost is a literature search rather than a sample count.
    priority: cls === "THIN" ? required - Math.round(eff) : 100000,
  })
}
out.sort((a, b) => a.priority - b.priority || a.product_slug.localeCompare(b.product_slug))

const cols = ["priority", "class", "product_slug", "product_label", "metal_species",
  "target_percentile", "effective_n", "n_required", "deficit",
  "best_supportable_percentile", "distinct_sources", "sample_level_sources"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(ev("hmtc_n_deficit_queue.csv"),
  [cols.join(","), ...out.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

const thin = out.filter((r) => r.class === "THIN")
const nodata = out.filter((r) => r.class === "NO_DATA")
console.log(`n-deficit queue — ${out.length} cells short of their target percentile`)
console.log(`  ${String(thin.length).padStart(4)}  THIN     (pool works, needs more observations)`)
console.log(`  ${String(nodata.length).padStart(4)}  NO_DATA  (no contributing source; needs literature)`)
console.log(`\nCheapest 20 THIN cells — closest to a defensible standard:`)
for (const r of thin.slice(0, 20))
  console.log(`  +${String(r.deficit).padStart(3)} samples  ${r.product_slug.slice(0, 34).padEnd(36)}${r.metal_species.padEnd(6)}` +
    ` eff_n=${String(r.effective_n).padStart(3)}  (can carry P${r.best_supportable_percentile ? r.best_supportable_percentile * 100 : "--"} today)`)
console.log(`\nWrote data/evidence/hmtc_n_deficit_queue.csv`)
