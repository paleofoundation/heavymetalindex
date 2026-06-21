#!/usr/bin/env node
// audit-threshold-drift.mjs
//
// FIRST automated implementation of the "Silent threshold deviation" lint check
// named in docs/lint.md and mandated by CLAUDE.md Part 2 ("the single most
// important rule") and Part 19 (rationale-tag discipline on staged standards).
//
// Part 2 forbids silent drift between the literature baseline and the HMT&C
// certification threshold. Part 19 requires every staged standard to carry
// exactly one rationale tag from {literature-baseline, regulatory-alignment,
// precautionary, feasibility-driven}, and the gap to the literature must be
// stated, not hidden. docs/lint.md lists this check, but a code audit found NO
// tool implemented it. This is that tool, scoped to what is mechanically
// verifiable from the structured staged-standards artifact today.
//
// ---------------------------------------------------------------------------
// WHAT THIS TOOL CHECKS (over every staged standard row)
//
//   (a) MISSING_RATIONALE_TAG  — a staged value (candidate present) with no
//       rationale tag, or a tag outside the allowed four. This is the Part-19
//       lint failure. Note: the pooling engine currently emits `no-data` as a
//       sentinel; a `no-data` tag on a row that nonetheless carries a staged
//       value is flagged here, because a published value must carry one of the
//       four real tags.
//
//   (b) UNEXPLAINED_GAP        — both a pooled/literature value and a final
//       value are present and differ beyond GAP_TOLERANCE (relative). The row
//       MUST carry a non-`literature-baseline` tag (regulatory-alignment /
//       precautionary / feasibility-driven) explaining the gap. A divergent
//       value still tagged `literature-baseline` is a contradiction: the tag
//       claims the pooled value binds, but it does not.
//
//   (c) TAG_VALUE_MISMATCH     — the tag is internally inconsistent with the
//       numbers, only emitted when the needed numbers are present:
//         * regulatory-alignment but final != regulatory cap (cap available)
//         * feasibility-driven   but final  < pooled (feasibility raises, not lowers)
//         * precautionary        but final >= min(pooled, cap) (precautionary lowers)
//
// ---------------------------------------------------------------------------
// SCHEMA ASSUMPTIONS (documented so a future session can verify / extend)
//
//   Primary artifact: data/evidence/hmtc_aggregate_distributions.csv
//   This is the pooling engine's output (build-hmtc-aggregate-distributions.mjs)
//   and the upstream structured source from which both the cat<N>-standards-
//   tables.md files and the Standards Briefings are generated. It carries one
//   row per (product_slug, metal_species) with machine-readable fields:
//     - candidate_value_ppb     -> the FINAL staged standard ("" when none)
//     - rationale_tag_auto      -> the rationale tag
//     - target_value / pooled_p97 / pooled_p45 -> the LITERATURE baseline value
//       (target_value is the value at the row's target percentile: P97 for
//        clean/independent rows, P45 for dirty rows; we prefer target_value and
//        fall back to pooled_p97 then pooled_p45)
//     - lowest_regulatory_cap_ppb -> the regulatory cap ("" when none)
//     - role / target_label     -> clean vs dirty vs independent (percentile)
//
//   A row is treated as a STAGED STANDARD iff candidate_value_ppb is a finite
//   number. Rows with an empty candidate (pure data-gap / BLOCKED-no-evidence)
//   are NOT staged standards and are skipped — there is no threshold to drift.
//
//   Allowed rationale tags (CLAUDE.md Part 19): literature-baseline,
//   regulatory-alignment, precautionary, feasibility-driven.
//
// ---------------------------------------------------------------------------
// WHAT THIS TOOL DOES NOT YET CHECK (and why)
//
//   * The cat<N>-standards-tables.md markdown files and the per-row workbench
//     snapshots are NOT parsed. They are GENERATED from the CSV above, so
//     auditing the CSV catches drift at the source; auditing the rendered
//     markdown would duplicate and could mask a generator bug. If the markdown
//     tables ever carry hand-edited values that diverge from the CSV, a
//     separate generator-consistency check (not drift) would be needed.
//   * data/evidence/category1_standards_decisions.csv is currently header-only
//     (no approved decisions staged), so there is nothing to audit there yet.
//     When that file is populated with `final_standard_ppb` + a rationale, this
//     tool should be extended to read it as a second staged-standards source.
//   * "precautionary" and "feasibility-driven" tags do not appear in live data
//     yet; their TAG_VALUE_MISMATCH logic is implemented and unit-tested but
//     unexercised by live rows.
//   * Basis mismatch (powder vs prepared) between pooled and cap is NOT checked
//     here; the pooling engine is responsible for converting to native basis
//     before emitting. A future version could cross-check native_basis.
//   * Whether the cap is truly the LOWEST applicable cap is not re-derived;
//     we trust lowest_regulatory_cap_ppb as emitted.
//
// ---------------------------------------------------------------------------
// OUTPUT
//   data/evidence/threshold-drift-audit.csv  (one row per finding)
//   columns: category, row_slug, analyte, finding_type, detail
//   Prints a summary with per-finding-type counts.
//
// EXIT CODE
//   Default: 0 (report-only) so it can be wired into prebuild as --warn-only
//   without breaking CI. With --strict: exit 1 if any finding is present.
//
// USAGE
//   node tools/standards/audit-threshold-drift.mjs            # report-only
//   node tools/standards/audit-threshold-drift.mjs --strict   # fail on finding
//   node tools/standards/audit-threshold-drift.mjs --warn-only # explicit no-fail

import fs from "node:fs"
import path from "node:path"

export const ALLOWED_TAGS = [
  "literature-baseline",
  "regulatory-alignment",
  "precautionary",
  "feasibility-driven",
]

// Relative tolerance for "the final value differs from the literature value".
// 5% per the task spec; rounding-to-ladder noise stays under this for the
// non-cap-bound rows in live data.
export const GAP_TOLERANCE = 0.05

// Small absolute/relative slack when comparing final to cap for the
// regulatory-alignment check, to absorb ladder rounding.
const CAP_MATCH_TOLERANCE = 0.05

// ---------- pure audit core (no I/O; unit-tested directly) ----------

function num(v) {
  if (v === null || v === undefined || String(v).trim() === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

// The literature baseline value for a row: the pooled value at the row's
// target percentile. Prefer the explicit target_value; fall back to pooled_p97
// (clean/independent default) then pooled_p45 (dirty).
function literatureValue(row) {
  return num(row.target_value) ?? num(row.pooled_p97) ?? num(row.pooled_p45)
}

function relDiff(a, b) {
  if (a === null || b === null) return null
  const denom = Math.abs(a)
  if (denom === 0) return b === 0 ? 0 : Infinity
  return Math.abs(a - b) / denom
}

/**
 * Audit a single staged-standard row.
 * @param {object} row  parsed CSV row (string fields)
 * @returns {Array<{finding_type, detail}>}  zero or more findings
 *
 * A row is only audited if it carries a finite candidate_value_ppb (a staged
 * value). Callers should filter; this function also guards.
 */
export function auditRow(row) {
  const findings = []
  const final = num(row.candidate_value_ppb)
  if (final === null) return findings // not a staged standard; nothing to drift

  const tag = (row.rationale_tag_auto || "").trim()
  const lit = literatureValue(row)
  const cap = num(row.lowest_regulatory_cap_ppb)

  // (a) MISSING_RATIONALE_TAG
  const tagAllowed = ALLOWED_TAGS.includes(tag)
  if (!tagAllowed) {
    findings.push({
      finding_type: "MISSING_RATIONALE_TAG",
      detail: tag === ""
        ? `staged value ${final} ppb has no rationale tag (Part 19 requires one of ${ALLOWED_TAGS.join("|")})`
        : `staged value ${final} ppb carries tag "${tag}" which is outside the allowed four (${ALLOWED_TAGS.join("|")})`,
    })
  }

  // (b) UNEXPLAINED_GAP — only when both literature and final are present.
  if (lit !== null) {
    const rd = relDiff(lit, final)
    if (rd !== null && rd > GAP_TOLERANCE) {
      // A divergent value MUST carry a non-literature-baseline explaining tag.
      if (tag === "literature-baseline") {
        findings.push({
          finding_type: "UNEXPLAINED_GAP",
          detail: `final ${final} ppb differs from literature ${round(lit)} ppb by ${(rd * 100).toFixed(1)}% but is tagged literature-baseline (the tag claims the pooled value binds; it does not). Gap must be explained by regulatory-alignment/precautionary/feasibility-driven.`,
        })
      } else if (!tagAllowed) {
        // Divergent AND tag is not one of the four explaining tags. The
        // MISSING_RATIONALE_TAG finding already fired; add the gap context so
        // the unexplained-gap is visible too.
        findings.push({
          finding_type: "UNEXPLAINED_GAP",
          detail: `final ${final} ppb differs from literature ${round(lit)} ppb by ${(rd * 100).toFixed(1)}% and carries no valid explaining tag (tag="${tag || "(empty)"}").`,
        })
      }
      // If tag is regulatory-alignment / precautionary / feasibility-driven,
      // the gap is explained; TAG_VALUE_MISMATCH below checks it is consistent.
    }
  }

  // (c) TAG_VALUE_MISMATCH — only when the numbers needed are present.
  if (tag === "regulatory-alignment" && cap !== null) {
    const rd = relDiff(cap, final)
    if (rd !== null && rd > CAP_MATCH_TOLERANCE) {
      findings.push({
        finding_type: "TAG_VALUE_MISMATCH",
        detail: `tag regulatory-alignment but final ${final} ppb != regulatory cap ${round(cap)} ppb (differs ${(rd * 100).toFixed(1)}%). The cap is supposed to bind.`,
      })
    }
  }
  if (tag === "feasibility-driven" && lit !== null) {
    // feasibility-driven means staff picked a value HIGHER than the pooled
    // value because methods/supply chain can't support the tighter value.
    if (final < lit * (1 - GAP_TOLERANCE)) {
      findings.push({
        finding_type: "TAG_VALUE_MISMATCH",
        detail: `tag feasibility-driven but final ${final} ppb < pooled ${round(lit)} ppb. Feasibility-driven raises the value above the literature floor; it does not lower it.`,
      })
    }
  }
  if (tag === "precautionary") {
    // precautionary means staff picked a value BELOW both pooled and cap.
    const floor = (lit !== null && cap !== null) ? Math.min(lit, cap) : (lit ?? cap)
    if (floor !== null && final >= floor * (1 - GAP_TOLERANCE)) {
      findings.push({
        finding_type: "TAG_VALUE_MISMATCH",
        detail: `tag precautionary but final ${final} ppb is not below min(pooled, cap)=${round(floor)} ppb. Precautionary selects a value tighter than both the pooled percentile and the regulatory cap.`,
      })
    }
  }

  return findings
}

function round(n) {
  if (n === null) return "—"
  return n >= 100 ? Math.round(n).toString() : Number(n.toFixed(2)).toString()
}

// ---------- CSV parsing (quote-aware) ----------

export function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const H = parseCsvLine(lines[0])
  return lines.slice(1).map((l) => {
    const c = parseCsvLine(l)
    const o = {}
    H.forEach((h, i) => (o[h] = c[i] ?? ""))
    return o
  })
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (ch === '"') q = false
      else cur += ch
    } else {
      if (ch === '"') q = true
      else if (ch === ",") { out.push(cur); cur = "" }
      else cur += ch
    }
  }
  out.push(cur)
  return out
}

function csvField(v) {
  const s = String(v ?? "")
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

// ---------- main ----------

function main() {
  const argv = process.argv.slice(2)
  const strict = argv.includes("--strict")
  // --warn-only is the default behavior; accepted explicitly for prebuild wiring.

  const repoRoot = process.cwd()
  const distPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
  const outPath = path.join(repoRoot, "data/evidence/threshold-drift-audit.csv")

  if (!fs.existsSync(distPath)) {
    console.error(`[threshold-drift] staged-standards artifact not found: ${path.relative(repoRoot, distPath)}`)
    console.error("[threshold-drift] run the pooling engine (npm run evidence:pooling) first.")
    process.exit(strict ? 1 : 0)
  }

  const rows = parseCsv(fs.readFileSync(distPath, "utf8"))
  const staged = rows.filter((r) => num(r.candidate_value_ppb) !== null)

  const findings = []
  for (const r of staged) {
    const category = r.variant_type || r.role || ""
    for (const f of auditRow(r)) {
      findings.push({
        category,
        row_slug: r.product_slug || "",
        analyte: r.metal_species || "",
        finding_type: f.finding_type,
        detail: f.detail,
      })
    }
  }

  // Write CSV (always, even when empty, so the artifact is deterministic).
  const header = "category,row_slug,analyte,finding_type,detail"
  const body = findings.map((f) =>
    [f.category, f.row_slug, f.analyte, f.finding_type, f.detail].map(csvField).join(",")
  )
  fs.writeFileSync(outPath, [header, ...body].join("\n") + "\n", "utf8")

  // Summary.
  const counts = {
    MISSING_RATIONALE_TAG: 0,
    UNEXPLAINED_GAP: 0,
    TAG_VALUE_MISMATCH: 0,
  }
  for (const f of findings) counts[f.finding_type] = (counts[f.finding_type] || 0) + 1

  console.log(`[threshold-drift] staged standard rows audited: ${staged.length} (of ${rows.length} total CSV rows)`)
  console.log(`[threshold-drift] findings written to ${path.relative(repoRoot, outPath)}`)
  console.log(`[threshold-drift]   MISSING_RATIONALE_TAG: ${counts.MISSING_RATIONALE_TAG}`)
  console.log(`[threshold-drift]   UNEXPLAINED_GAP:       ${counts.UNEXPLAINED_GAP}`)
  console.log(`[threshold-drift]   TAG_VALUE_MISMATCH:    ${counts.TAG_VALUE_MISMATCH}`)
  console.log(`[threshold-drift] total findings: ${findings.length}`)

  if (findings.length > 0 && strict) {
    console.error("[threshold-drift] --strict: failing build due to drift findings.")
    process.exit(1)
  }
  process.exit(0)
}

// Only run main when invoked directly, not when imported by the test file.
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
