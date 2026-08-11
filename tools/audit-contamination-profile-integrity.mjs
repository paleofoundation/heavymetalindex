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
 *   2. censored-zero: typical_ppb [0, 0] AND p95_ppb 0 when EITHER confidence is
 *      high OR n_studies >= 3. Exact-zero point AND tail across 3+ studies (or at
 *      high confidence) almost always means below-LOQ non-detects were coded as
 *      literal 0 and pooled as 0 (FDA TDS reports non-detects as 0; the reporting
 *      limit, not 0, is the defensible upper bound). (Rice Pb/tHg/Cr [0,0] p95 0.)
 *      The trigger is keyed on n_studies, not only the confidence label, so that
 *      clamping an over-claimed confidence down to its n_studies ceiling cannot
 *      silently hide the underlying censoring artifact from this audit.
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
const args = new Set(process.argv.slice(2).map((a) => a.replace(/^--/, "")))
const warnOnly = args.has("warn-only")
const asJson = args.has("json")

// n_studies above which a collapsed upper tail is treated as an artifact rather
// than a legitimately thin pool. Below this, p95 == typical-max can be a real
// 2-3 source pool with no spread, which the low/medium confidence already signals.
const DEGENERATE_N_THRESHOLD = 5

const failures = []
const advisories = []

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

    // Signature 2: censored-zero — at high confidence OR across 3+ studies.
    if (
      typicalLo === 0 &&
      typicalHi === 0 &&
      p95 === 0 &&
      (confidence === "high" || nStudies >= 3)
    ) {
      failures.push({
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        signature: "censored-zero",
        detail: `typical_ppb [0, 0], p95_ppb 0, confidence ${confidence}, n_studies ${nStudies}. Exact-zero point AND tail ${nStudies >= 3 ? `across ${nStudies} studies` : "at high confidence"} — below-LOQ non-detects coded as literal 0. Re-synthesize with the reporting limit as the censored upper bound.`,
      })
      continue
    }

    // Signature 1: degenerate upper tail (p95 does not exceed typical max).
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

if (asJson) {
  console.log(JSON.stringify({ failures, advisories }, null, 2))
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
