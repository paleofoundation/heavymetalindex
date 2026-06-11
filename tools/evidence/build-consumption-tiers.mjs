#!/usr/bin/env node
// build-consumption-tiers.mjs
//
// Autonomously assembles data/reference/consumption-tiers.csv — the one
// non-corpus input the completeness scorecard's D1-depth and D11 depth-gate
// read (docs/page-completeness-scorecard.md Part 3).
//
// This is a deterministic build step, NOT a human-curated table and NOT a
// model-guessed one. It reads a committed public per-capita intake dataset and
// bins each ingredient by the FIXED g/day cutoffs below. The tier therefore
// traces to an external figure plus a fixed rule, which is the firewall against
// the FRANK failure mode (the system never silently estimates that "chocolate
// should have more data than kumquat").
//
// Intake source (committed, version-controlled): data/reference/intake-source.csv
//   columns: ingredient_slug, g_per_day, source
//   `source` is the per-capita intake citation (FAO Food Balance Sheets /
//   EFSA Comprehensive Food Consumption Database / USDA WWEIA), figure-level.
//   (The repo's data/evidence/intake-*.csv files are ingest-NOVELTY logs and are
//   explicitly NOT a source for this — see Part 3.)
//
// If the intake source is not present yet, this step writes nothing and exits 0
// (non-blocking): the scorecard degrades gracefully to `tier-unset` and its gap
// register carries an autonomous `assemble-intake-figure` task. No person is
// ever routed; an autonomous fetch step drops intake-source.csv in, then this
// assembler runs.
//
// Usage:
//   node tools/evidence/build-consumption-tiers.mjs

import fs from "node:fs"
import path from "node:path"
import { parseCsv, csvLine } from "./lib/csv.mjs"

const repoRoot = process.cwd()
const referenceDir = path.join(repoRoot, "data/reference")
const intakePath = path.join(referenceDir, "intake-source.csv")
const outPath = path.join(referenceDir, "consumption-tiers.csv")

// Fixed binning rule (docs/page-completeness-scorecard.md Part 3). The exact
// cutoffs are committed alongside the table so anyone can re-derive a tier.
const BINS = [
  { tier: "staple", min: 50, max: Infinity },
  { tier: "common", min: 5, max: 50 },
  { tier: "occasional", min: 0.5, max: 5 },
  { tier: "rare", min: 0, max: 0.5 },
]

function tierFor(gPerDay) {
  for (const b of BINS) {
    if (gPerDay >= b.min && gPerDay < b.max) return b.tier
  }
  return "rare"
}

if (!fs.existsSync(intakePath)) {
  console.log(
    `build-consumption-tiers: intake source not present at ${path.relative(repoRoot, intakePath)}.`,
  )
  console.log(
    "  Nothing assembled (non-blocking). The scorecard renders D1-depth/D11-gate as tier-unset and",
  )
  console.log(
    "  registers an autonomous assemble-intake-figure task. Drop a committed FAO/EFSA/USDA per-capita",
  )
  console.log(
    "  intake dataset at data/reference/intake-source.csv (columns: ingredient_slug,g_per_day,source),",
  )
  console.log("  then re-run this step. Tiers are never hand-curated and never model-guessed.")
  process.exit(0)
}

const rows = parseCsv(fs.readFileSync(intakePath, "utf8"))
const assembledAt = new Date().toISOString().slice(0, 10)
let written = 0
const sorted = rows
  .filter((r) => r.ingredient_slug && String(r.g_per_day).trim() !== "")
  .sort((a, b) => a.ingredient_slug.localeCompare(b.ingredient_slug))
const lines = ["ingredient_slug,consumption_tier,g_per_day,source,assembled_at"]
for (const r of sorted) {
  const g = Number(r.g_per_day)
  if (!Number.isFinite(g)) continue
  lines.push(csvLine([r.ingredient_slug, tierFor(g), g, r.source || "", assembledAt]))
  written++
}
fs.writeFileSync(outPath, lines.join("\n") + "\n")
console.log(`build-consumption-tiers: wrote ${written} tier row(s) to ${path.relative(repoRoot, outPath)} (binned by fixed g/day cutoffs).`)
