#!/usr/bin/env node
/**
 * Contamination-profile integrity audit (CLAUDE.md Part 18 lint guard).
 *
 * Catches the censored-zero / degenerate-upper-tail artifact found by the
 * 2026-06-11 Part 2 drift audit (finding A1, rice). Two failure signatures,
 * both of which make a single-source or fully-censored value masquerade as a
 * high-confidence multi-study distribution and SOFTEN reported contamination —
 * the exact Part 2 drift this lint exists to block:
 *
 *   1. degenerate-upper-tail: a populated metal block where p95_ppb is not
 *      strictly above the typical-range maximum (typical_ppb[1]) while
 *      n_studies > 5. A real occurrence distribution pooled over >5 studies has
 *      an upper tail; p95 == p90 (or p95 == a point typical) means the tail
 *      collapsed — a degenerate single-value pool published as if it were a
 *      distribution. (Rice iAs typical [41.6, 41.6] p95 41.6 n=74.)
 *
 *   2. censored-zero-at-high-confidence: typical_ppb [0, 0] AND p95_ppb 0 at
 *      confidence: high. Exact-zero point AND tail at high confidence almost
 *      always means below-LOQ non-detects were coded as literal 0 and pooled as
 *      0 (FDA TDS reports non-detects as 0; the reporting limit, not 0, is the
 *      defensible upper bound). (Rice Pb/tHg/Cr [0,0] p95 0 high.)
 *
 *   3. censored-zero-lower-bound: a populated metal block whose typical_ppb
 *      lower bound is a literal 0 while the upper bound is > 0
 *      (typical_ppb [0, X], X > 0). A non-detect coded as a literal 0 understates
 *      the contamination floor; the reporting limit, not 0, is the defensible
 *      low end of "typical", and the consumer app reads typical_ppb[0] as the
 *      low end of the typical range. (fromage-frais Pb [0, 14.8].)
 *
 *      This signature has a committed grandfather baseline
 *      (data/evidence/contamination-integrity-censored-zero-baseline.json): the
 *      pre-existing backlog of offenders is tracked, not blocking, so the build
 *      stays green while source-grounded resynthesis drains it. Only NEW
 *      offenders absent from the baseline block the build. The full current
 *      inventory is emitted to
 *      data/evidence/contamination-integrity-censored-zero-backlog.csv.
 *
 * Both block the build (exit 1) unless --warn-only is passed. Per CLAUDE.md
 * Part 18, integrity drift that understates contamination must fail the build,
 * not merely report, because it propagates silently into the consumer app's
 * contamination_profile consumption and into HMTc limit-setting inputs.
 *
 * A populated block with p95_ppb: null is NOT failed here — a null upper tail is
 * an honest "not yet computed", not a fabricated low value. It is reported as an
 * advisory so the gap is visible.
 *
 * Usage:
 *   node tools/audit-contamination-profile-integrity.mjs            # fail-on-error
 *   node tools/audit-contamination-profile-integrity.mjs --warn-only
 *   node tools/audit-contamination-profile-integrity.mjs --json
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const evidenceDir = path.join(repoRoot, "data/evidence")
const baselinePath = path.join(evidenceDir, "contamination-integrity-censored-zero-baseline.json")
const backlogCsvPath = path.join(evidenceDir, "contamination-integrity-censored-zero-backlog.csv")
const args = new Set(process.argv.slice(2).map((a) => a.replace(/^--/, "")))
const warnOnly = args.has("warn-only")
const asJson = args.has("json")
// Regenerate the committed grandfather baseline from the current corpus and exit.
// Run once to capture the existing backlog; CI never passes this flag.
const writeBaseline = args.has("write-baseline")

// n_studies above which a collapsed upper tail is treated as an artifact rather
// than a legitimately thin pool. Below this, p95 == typical-max can be a real
// 2-3 source pool with no spread, which the low/medium confidence already signals.
const DEGENERATE_N_THRESHOLD = 5

const failures = []
const advisories = []
// Full current inventory of censored-zero-lower-bound offenders (for the backlog
// CSV and for partitioning into grandfathered vs new-blocking against the baseline).
const censoredZeroLowerAll = []

const baseline = loadBaseline()

for (const file of fs.readdirSync(ingredientsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fmMatch) continue
  const blocks = parseContaminationProfile(fmMatch[1])
  for (const b of blocks) {
    if (b.status !== "populated") continue
    const { metal, typicalLo, typicalHi, p95, confidence, nStudies } = b

    // Signature 2: censored-zero at high confidence.
    if (
      typicalLo === 0 &&
      typicalHi === 0 &&
      p95 === 0 &&
      confidence === "high"
    ) {
      failures.push({
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        signature: "censored-zero-at-high-confidence",
        detail: `typical_ppb [0, 0], p95_ppb 0, confidence high, n_studies ${nStudies}. Exact-zero distribution at high confidence — below-LOQ non-detects coded as literal 0. Re-synthesize with the reporting limit as the censored upper bound.`,
      })
      continue
    }

    // Signature 1: degenerate upper tail (p95 does not exceed typical max).
    // Checked before signature 3 so a [0, X] cell that is ALSO a collapsed-tail
    // artifact keeps its original blocking degenerate-upper-tail diagnosis.
    if (
      p95 !== null &&
      typicalHi !== null &&
      nStudies > DEGENERATE_N_THRESHOLD &&
      p95 <= typicalHi
    ) {
      failures.push({
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        signature: "degenerate-upper-tail",
        detail: `p95_ppb ${p95} does not exceed typical-max ${typicalHi} across n_studies ${nStudies} (confidence ${confidence}). A pooled distribution over >${DEGENERATE_N_THRESHOLD} studies must have a p95 above its p90; a collapsed tail is a single-value pool published as a distribution.`,
      })
      continue
    }

    // Signature 3: censored-zero lower bound. typical_ppb [0, X] with X > 0 — the
    // non-detect floor was coded as a literal 0. Does NOT double-flag the all-zero
    // case ([0, 0]), which is handled by signature 2: here typicalHi > 0 is required.
    if (typicalLo === 0 && typicalHi !== null && typicalHi > 0) {
      const key = `${slug} ${metal}`
      censoredZeroLowerAll.push({
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        typicalLo,
        typicalHi,
        p95,
        confidence,
        nStudies,
        grandfathered: baseline.has(key),
      })
      // Only NEW offenders (absent from the committed baseline) block the build.
      if (!baseline.has(key)) {
        failures.push({
          page: `wiki/ingredients/${slug}.md`,
          slug,
          metal,
          signature: "censored-zero-lower-bound",
          detail: `typical_ppb [0, ${typicalHi}] (p95_ppb ${p95}, confidence ${confidence}, n_studies ${nStudies}). Lower bound coded as literal 0 — a censored non-detect understating the contamination floor. Re-synthesize with the reporting limit as the censored lower bound. (Not in the grandfather baseline, so this is a new regression and blocks the build.)`,
        })
      }
      continue
    }

    // Advisory: populated with a null upper tail. Honest gap, not a fabrication,
    // but surfaced so it does not sit unreviewed forever.
    if (p95 === null && (typicalLo !== null || typicalHi !== null)) {
      advisories.push({
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        note: `populated with p95_ppb: null (n_studies ${nStudies}). Upper tail not yet computed.`,
      })
    }
  }
}

// Emit the full current censored-zero-lower-bound inventory to the backlog CSV so
// the source-grounded resynthesis pass has a trackable worklist. Sorted, stable.
writeBacklogCsv(censoredZeroLowerAll)

// --write-baseline: rewrite the committed grandfather baseline from the current
// inventory and exit before any pass/fail accounting. Run once to capture backlog.
if (writeBaseline) {
  const keys = censoredZeroLowerAll
    .map((o) => `${o.slug} ${o.metal}`)
    .sort()
  fs.writeFileSync(baselinePath, JSON.stringify(keys, null, 2) + "\n")
  console.log(`Wrote grandfather baseline: ${keys.length} censored-zero-lower-bound offender(s) → ${path.relative(repoRoot, baselinePath)}`)
  process.exit(0)
}

const grandfatheredCount = censoredZeroLowerAll.filter((o) => o.grandfathered).length
const newCensoredZeroCount = censoredZeroLowerAll.length - grandfatheredCount

if (asJson) {
  console.log(
    JSON.stringify(
      {
        failures,
        advisories,
        censoredZeroLowerBound: {
          total: censoredZeroLowerAll.length,
          grandfathered: grandfatheredCount,
          newBlocking: newCensoredZeroCount,
        },
      },
      null,
      2,
    ),
  )
} else {
  if (failures.length === 0) {
    console.log("contamination-profile integrity: PASS (no censored-zero or degenerate-upper-tail artifacts)")
  } else {
    console.log(`contamination-profile integrity: ${failures.length} FAILURE(S)`)
    for (const f of failures) {
      console.log(`  [${f.signature}] ${f.slug} × ${f.metal}`)
      console.log(`      ${f.detail}`)
    }
  }
  if (advisories.length > 0) {
    console.log(`\n${advisories.length} advisory(ies) — populated cells with null p95 (not build-blocking):`)
    for (const a of advisories.slice(0, 40)) console.log(`  ${a.slug} × ${a.metal}: ${a.note}`)
    if (advisories.length > 40) console.log(`  … and ${advisories.length - 40} more`)
  }
  if (censoredZeroLowerAll.length > 0) {
    console.log(
      `\ncensored-zero-lower-bound [0, X]: ${grandfatheredCount} grandfathered, ${newCensoredZeroCount} new (blocking). ` +
        `Full inventory: ${path.relative(repoRoot, backlogCsvPath)}`,
    )
  }
}

if (failures.length > 0 && !warnOnly) process.exit(1)

// ---------------------------------------------------------------------------

function parseContaminationProfile(fm) {
  const out = []
  const lines = fm.split("\n")
  let inCp = false
  let current = null
  for (const line of lines) {
    if (/^contamination_profile:\s*$/.test(line)) {
      inCp = true
      continue
    }
    if (!inCp) continue
    // A non-indented, non-blank line ends the block.
    if (line.trim() !== "" && !line.startsWith(" ")) break
    const metalMatch = line.match(/^  ([A-Za-z][A-Za-z0-9-]*):\s*$/)
    if (metalMatch) {
      if (current) out.push(current)
      current = {
        metal: metalMatch[1],
        status: null,
        typicalLo: null,
        typicalHi: null,
        p95: null,
        confidence: null,
        nStudies: 0,
      }
      continue
    }
    if (!current) continue
    const kv = line.match(/^    ([a-z0-9_]+):\s*(.*)$/)
    if (!kv) continue
    const [, key, valRaw] = kv
    const val = valRaw.trim()
    if (key === "status") current.status = val
    else if (key === "confidence") current.confidence = val
    else if (key === "n_studies") current.nStudies = Number(val) || 0
    else if (key === "p95_ppb") current.p95 = numOrNull(val)
    else if (key === "typical_ppb") {
      const m = val.match(/\[\s*([^,]+),\s*([^\]]+)\s*\]/)
      if (m) {
        current.typicalLo = numOrNull(m[1].trim())
        current.typicalHi = numOrNull(m[2].trim())
      }
    }
  }
  if (current) out.push(current)
  return out
}

function numOrNull(s) {
  if (s === undefined || s === null) return null
  const t = String(s).trim()
  if (t === "" || t === "null" || t === "~") return null
  const n = Number(t)
  return Number.isFinite(n) ? n : null
}

// Load the committed grandfather baseline of censored-zero-lower-bound offenders.
// Each entry is a "<slug> <metal>" key. Missing baseline => empty set (every
// offender is treated as new/blocking), which is the safe default for a fresh repo.
function loadBaseline() {
  try {
    const parsed = JSON.parse(fs.readFileSync(baselinePath, "utf8"))
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch {
    return new Set()
  }
}

// Write the full current censored-zero-lower-bound inventory to a stable CSV so the
// backlog is trackable for the future source-grounded resynthesis pass.
function writeBacklogCsv(rows) {
  const sorted = [...rows].sort((a, b) =>
    a.slug === b.slug ? a.metal.localeCompare(b.metal) : a.slug.localeCompare(b.slug),
  )
  const header = "page,slug,metal,typical_lo,typical_hi,p95_ppb,confidence,n_studies,grandfathered"
  const lines = sorted.map((r) =>
    [
      r.page,
      r.slug,
      r.metal,
      r.typicalLo,
      r.typicalHi,
      r.p95 === null ? "" : r.p95,
      r.confidence === null ? "" : r.confidence,
      r.nStudies,
      r.grandfathered,
    ].join(","),
  )
  fs.writeFileSync(backlogCsvPath, header + "\n" + lines.join("\n") + (lines.length ? "\n" : ""))
}
