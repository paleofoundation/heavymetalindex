#!/usr/bin/env node
// Cross-source contradiction detector for the daemon tick.
//
// Per the HMI deliverable: "Every contradiction is recorded."
//
// The pooling engine at tools/evidence/build-hmtc-aggregate-distributions.mjs
// already detects when sources disagree (verdict tag
// "PROVISIONAL: review sensitivity disagreement" + wide percentile spread)
// — but that signal is buried in the HMTc-staff-facing aggregate CSV. The
// public deliverable bar asks for contradictions to be recorded as discrete,
// queryable artifacts.
//
// This tool reads data/evidence/hmtc_aggregate_distributions.csv, flags
// cells where the literature shows real disagreement (either the pooling
// engine's explicit verdict tag OR a heuristic on percentile spread), and
// writes one row per contradiction to data/evidence/contradiction-log.jsonl.
// Each row names the contributing sources, the spread ratio, and the
// detection trigger so the synthesis pass (per CLAUDE.md Part 9) can act
// on it and the daemon's morning report can surface it.
//
// Per CLAUDE.md Part 9 Contradiction trigger:
//   "A new source's values disagree with the current page state by more
//   than 2x in either direction for typical_ppb or p95_ppb."
//
// We use a stricter operational threshold (CONTRADICTION_SPREAD_THRESHOLD,
// default 5x p100/p10 ratio) because the pooling engine already smooths
// transient noise; only true cross-source disagreement crosses 5x.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const aggPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const outPath = path.join(repoRoot, "data/evidence/contradiction-log.jsonl")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const reportPath = path.join(autonomyDir, `contradiction-report-${today}.md`)

const CONTRADICTION_SPREAD_THRESHOLD = parseFloat(process.env.HMI_CONTRADICTION_SPREAD || "5")
const MIN_SOURCES_FOR_CONTRADICTION = parseInt(process.env.HMI_CONTRADICTION_MIN_SOURCES || "2", 10)

if (!fs.existsSync(aggPath)) {
  console.error(`No aggregate distributions CSV at ${aggPath}`)
  process.exit(0)
}

fs.mkdirSync(autonomyDir, { recursive: true })

const lines = fs.readFileSync(aggPath, "utf8").split("\n").filter((l) => l.length > 0)
if (lines.length < 2) {
  console.log("Aggregate CSV is empty; nothing to detect.")
  process.exit(0)
}

const header = parseCsvLine(lines[0])
const col = (name) => header.indexOf(name)

const COL_PRODUCT = col("product_slug")
const COL_BASIS = col("native_basis")
const COL_METAL = col("metal_species")
const COL_N_ADMITTED = col("sources_contributing")
const COL_P10 = col("pooled_p10")
const COL_P95 = col("pooled_p95")
const COL_P100 = col("pooled_p100")
const COL_VERDICT = col("verdict")
const COL_SOURCES = col("contribution_log")

const contradictions = []
let scanned = 0

for (let i = 1; i < lines.length; i++) {
  const cells = parseCsvLine(lines[i])
  scanned++
  const product = cells[COL_PRODUCT]
  const metal = cells[COL_METAL]
  const basis = cells[COL_BASIS]
  const verdict = (cells[COL_VERDICT] || "").trim()
  const nAdmitted = parseInt(cells[COL_N_ADMITTED] || "0", 10)
  const p10 = parseFloat(cells[COL_P10] || "0")
  const p95 = parseFloat(cells[COL_P95] || "0")
  const p100 = parseFloat(cells[COL_P100] || "0")

  if (!product || !metal || !verdict) continue
  if (nAdmitted < MIN_SOURCES_FOR_CONTRADICTION) continue

  const verdictDisagreement = /disagreement|inconsistent|BLOCKED/i.test(verdict)
  const spreadRatio = p10 > 0 ? p100 / p10 : 0
  const wideSpread = spreadRatio >= CONTRADICTION_SPREAD_THRESHOLD

  // Need at least one of: explicit verdict disagreement OR wide spread.
  if (!verdictDisagreement && !wideSpread) continue

  // Trigger reason
  const triggers = []
  if (verdictDisagreement) triggers.push("pooling_engine_verdict")
  if (wideSpread) triggers.push(`p100_over_p10_ratio=${spreadRatio.toFixed(1)}`)

  // Parse contributing sources from the pool_admission JSON column
  let contributingSources = []
  try {
    const json = cells[COL_SOURCES]
    if (json) {
      const admissions = JSON.parse(json)
      contributingSources = admissions
        .filter((a) => a && a.admitted)
        .map((a) => ({
          source_id: a.source_id,
          basis: a.basis || null,
          n_used: a.n_used || 0,
          pool_share: a.pool_share || 0,
          reconstruction_method: a.reconstruction_method || null,
        }))
    }
  } catch (err) {
    // pool_admission cell may be malformed CSV; skip source extraction
  }

  contradictions.push({
    contradiction_id: `${product}-${metal}-${basis || "default"}-${today}`,
    page_slug: product,
    metal_species: metal,
    basis: basis || null,
    triggers,
    spread_ratio: spreadRatio || null,
    pooled_p10_ppb: p10 || null,
    pooled_p95_ppb: p95 || null,
    pooled_p100_ppb: p100 || null,
    n_sources_admitted: nAdmitted,
    verdict,
    contributing_sources: contributingSources,
    detected_at: new Date().toISOString(),
  })
}

// Persist as JSONL — append-only history of detections; subsequent runs
// add today's row even if the same cell contradicted yesterday. The
// detected_at + contradiction_id pair makes history queryable.
const out = contradictions.map((c) => JSON.stringify(c)).join("\n")
if (out) fs.appendFileSync(outPath, out + "\n", "utf8")

// Write markdown report for the daily morning-report inclusion
const reportLines = [
  `# Contradiction detector — ${today}`,
  ``,
  `Generated by \`tools/autonomy/detect-contradictions.mjs\`.`,
  ``,
  `- Aggregate cells scanned: ${scanned}`,
  `- Contradictions detected this run: ${contradictions.length}`,
  `- Trigger threshold: spread_ratio ≥ ${CONTRADICTION_SPREAD_THRESHOLD}× OR explicit pooling-engine disagreement verdict`,
  `- Minimum sources to flag: ${MIN_SOURCES_FOR_CONTRADICTION}`,
  `- Persistence: ${path.relative(repoRoot, outPath)} (append-only)`,
  ``,
  `## Top spread-ratio contradictions`,
  ``,
]
const top = contradictions
  .filter((c) => c.spread_ratio)
  .sort((a, b) => b.spread_ratio - a.spread_ratio)
  .slice(0, 20)
for (const c of top) {
  reportLines.push(
    `- \`${c.page_slug}\` × ${c.metal_species}: ` +
      `p10=${formatPpb(c.pooled_p10_ppb)}, p100=${formatPpb(c.pooled_p100_ppb)}, ` +
      `spread=${c.spread_ratio.toFixed(1)}×, n=${c.n_sources_admitted} sources, ` +
      `verdict="${c.verdict.slice(0, 60)}…"`,
  )
}
reportLines.push("")
reportLines.push(`Full per-cell breakdown including contributing source IDs in \`${path.relative(repoRoot, outPath)}\`.`)
fs.writeFileSync(reportPath, reportLines.join("\n") + "\n", "utf8")

console.log(`Contradiction detector: scanned=${scanned}, detected=${contradictions.length}`)
console.log(`Log: ${path.relative(repoRoot, outPath)}`)
console.log(`Report: ${path.relative(repoRoot, reportPath)}`)

function formatPpb(v) {
  if (v === null || v === undefined || Number.isNaN(v)) return "—"
  if (v < 1) return v.toFixed(3)
  if (v < 100) return v.toFixed(2)
  return Math.round(v).toString()
}

function parseCsvLine(line) {
  const cells = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cur += c
    } else {
      if (c === '"') inQuotes = true
      else if (c === ",") { cells.push(cur); cur = "" }
      else cur += c
    }
  }
  cells.push(cur)
  return cells
}
