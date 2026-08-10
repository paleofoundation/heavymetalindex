#!/usr/bin/env node
// build-standards-qc-gate.mjs
//
// The Publication QC Gate (docs/architecture/standards-publication-qc-gate.md).
// Deterministic per-(row,metal) validation that a value is defensible before it may
// publish as a firm standard. The answer to the 2026-06-16 Principle-4 scare: stop
// finding defects by tripping over them — make publication conditional on passing.
//
// Verdict per cell: CRITICAL_FAIL (blocks the build) / FAIL / DEMOTE / HOLD / WARN / PASS.
// Exits non-zero if any CRITICAL_FAIL, so it can gate the build.
//
// Reads:  data/evidence/hmtc_aggregate_distributions.csv  (the values)
//         data/evidence/standards-outlier-adjudication.csv (held cells)
// Writes: data/evidence/standards-qc-gate-report.csv + a console summary.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ev = (f) => path.join(repoRoot, "data/evidence", f)
const args = new Set(process.argv.slice(2))
const filterSlug = (process.argv.find((a) => a.startsWith("--product=")) || "").split("=")[1] || ""

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
const BIG4 = new Set(["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg"]) // toxics regulated almost everywhere
const isFirmVerdict = (v) => v.startsWith("READY FOR REVIEW") && !/interim/.test(v)

const dist = parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8"))
const adj = fs.existsSync(ev("standards-outlier-adjudication.csv")) ? parseCsv(fs.readFileSync(ev("standards-outlier-adjudication.csv"), "utf8")) : []
const heldSet = new Set(
  adj.filter((r) => !/^cleared/i.test(r.disposition || "")).map((r) => `${r.row_slug}|${r.metal_species}`),
)

// per-metal median of candidate values among trusted (>=3 distinct sources) cells — the
// multi-source baseline the artifact check measures thin-source outliers against.
const trustedMedian = {}
{
  const byMetal = {}
  for (const r of dist) {
    const m = r.metal_species, c = num(r.candidate_value_ppb), d = num(r.distinct_sources) ?? 0
    if (!PANEL.has(m) || c === null || d < 3) continue
    ;(byMetal[m] ||= []).push(c)
  }
  for (const [m, vs] of Object.entries(byMetal)) {
    vs.sort((a, b) => a - b)
    trustedMedian[m] = vs[Math.floor((vs.length - 1) / 2)]
  }
}

// not-material registry: cells where the analyte is definitively not a material contaminant for
// this matrix (structural non-partition, additive-not-contaminant, accumulator-natural). These
// resolve to NOT_MATERIAL — a deliberate scientific judgment, no published value, not a defect.
const notMaterialSet = new Set(
  (fs.existsSync(ev("standards-not-material.csv")) ? parseCsv(fs.readFileSync(ev("standards-not-material.csv"), "utf8")) : [])
    .map((r) => `${r.row_slug}|${r.metal_species}`),
)
// not-material substantiation verdicts (tools/evidence/audit-not-material-substantiation.mjs, run
// earlier in prebuild). A not-material cell no longer short-circuits to a free pass: it must have
// been affirmatively substantiated (schema + class + no contradicting occurrence/ML/routed source).
// A FAIL or an unaudited cell is a CRITICAL_FAIL — this is the loophole Karen flagged 2026-08-10.
const notMaterialAudit = new Map(
  (fs.existsSync(ev("standards-not-material-audit.csv")) ? parseCsv(fs.readFileSync(ev("standards-not-material-audit.csv"), "utf8")) : [])
    .map((r) => [`${r.row_slug}|${r.metal_species}`, { verdict: r.verdict, reasons: r.reasons }]),
)
// confirmed-no-ML registry: cells verified to have no regulatory ML in any jurisdiction, so a
// literature-baseline value with no mapped cap is COMPLETE, not an unmapped-cap defect (silences C1b).
const noMlSet = new Set(
  (fs.existsSync(ev("standards-no-ml-confirmed.csv")) ? parseCsv(fs.readFileSync(ev("standards-no-ml-confirmed.csv"), "utf8")) : [])
    .map((r) => `${r.row_slug}|${r.metal_species}`),
)
// process-control screens: manufacturing-anomaly tripwires that are NOT health standards
// (e.g. total-Cr equipment-leaching screen). They flow through the gate as their own verdict
// type so downstream consumers (standards tables, manual) surface them, and the gate validates
// each screen is well-formed and does not collide with a health limit on the same cell.
const processScreens = (fs.existsSync(ev("standards-process-screens.csv"))
  ? parseCsv(fs.readFileSync(ev("standards-process-screens.csv"), "utf8"))
  : [])

const report = []
for (const r of dist) {
  const slug = r.product_slug, metal = r.metal_species
  if (!PANEL.has(metal)) continue
  if (filterSlug && slug !== filterSlug) continue
  const cand = num(r.candidate_value_ppb)
  const cap = num(r.lowest_regulatory_cap_ppb)
  const distinct = num(r.distinct_sources) ?? 0
  const rat = (r.rationale_tag_auto || "").trim()
  const verdict = (r.verdict || "").trim()
  const sens = (r.sens_band || "").toLowerCase()
  // Effective (Kish) n where the pooling engine reports it, raw n otherwise.
  // Unequal source weighting buys less precision than the raw count suggests,
  // and the minimum-n gate must be judged against what the pool actually
  // delivers, not against how many rows went into it.
  const n = num(r.pooled_n_effective) ?? num(r.pooled_n) ?? 0
  const targetP = num(r.target_p)
  const firm = isFirmVerdict(verdict)
  const held = heldSet.has(`${slug}|${metal}`)
  const noMl = noMlSet.has(`${slug}|${metal}`)

  // NOT_MATERIAL: a definitively-immaterial analyte renders no value. This is no longer a free
  // short-circuit — the not-material substantiation audit must have PASSED the cell. An audit FAIL
  // (occurrence/ML/routed-source contradicts, or the claim is unsubstantiated) or an unaudited cell
  // is a CRITICAL_FAIL, because a false "not material" understates contamination on a certification
  // reference (Karen 2026-08-10). Run audit-not-material-substantiation.mjs to regenerate the audit.
  if (notMaterialSet.has(`${slug}|${metal}`)) {
    const a = notMaterialAudit.get(`${slug}|${metal}`)
    if (!a)
      report.push({ product_slug: slug, metal_species: metal, candidate_value_ppb: r.candidate_value_ppb,
        cap: cap ?? "", rationale: "not-material", verdict_level: "CRITICAL_FAIL",
        reasons: "not-material cell not present in the substantiation audit — run audit-not-material-substantiation.mjs before publishing" })
    else if (a.verdict === "FAIL")
      report.push({ product_slug: slug, metal_species: metal, candidate_value_ppb: r.candidate_value_ppb,
        cap: cap ?? "", rationale: "not-material", verdict_level: "CRITICAL_FAIL",
        reasons: `not-material substantiation FAILED — ${a.reasons}` })
    else
      report.push({ product_slug: slug, metal_species: metal, candidate_value_ppb: r.candidate_value_ppb,
        cap: cap ?? "", rationale: "not-material", verdict_level: "NOT_MATERIAL",
        reasons: `substantiated not-material (${a.verdict}) — analyte is not a material contaminant for this matrix (standards-not-material.csv)` })
    continue
  }

  const checks = []
  // C1 — CRITICAL: a published value may never exceed its regulatory cap (Principle 4)
  if (cand !== null && cap !== null && cand > cap * 1.0001)
    checks.push({ level: "CRITICAL_FAIL", check: "C1-value-exceeds-cap", detail: `candidate ${cand} > cap ${cap}` })
  // C1b — WARN: cap-completeness. A big-4 toxic published on literature with NO mapped cap
  // is the fish-Pb class — a regulatory ML very likely exists and must be loaded.
  if (BIG4.has(metal) && rat === "literature-baseline" && cap === null && cand !== null && !noMl)
    checks.push({ level: "WARN", check: "C1b-cap-completeness", detail: `big-4 toxic, literature-baseline, NO mapped cap — verify/map the regulatory ML` })
  // C8 — FAIL: rationale honesty. If the cap binds (value == cap) the tag must be regulatory-alignment.
  if (cand !== null && cap !== null && Math.abs(cand - cap) < 0.5 && rat !== "regulatory-alignment")
    checks.push({ level: "FAIL", check: "C8-rationale-mislabel", detail: `value==cap but rationale='${rat}' (should be regulatory-alignment)` })
  // C4 — DEMOTE: distinct-source floor. A firm cell needs >=2 distinct sources.
  if (firm && distinct < 2 && !held)
    checks.push({ level: "DEMOTE", check: "C4-distinct-source-floor", detail: `firm with distinct_sources=${distinct} (<2) — must be provisional` })
  // C7 — WARN: reconstruction sanity. needs_review sensitivity or a single-point pool can't be firm.
  if (firm && (sens === "needs_review" || n <= 1) && !held)
    checks.push({ level: "WARN", check: "C7-reconstruction-sanity", detail: `firm but sens='${sens}' n=${n} — single-point/unstable, not firm` })
  // C11 — the minimum-n gate. A percentile is only as real as the sample it is read from.
  //
  // For an upper-tail target, the smallest n at which a one-sided 95% nonparametric bound on
  // the P-th percentile exists at all is ceil(ln(0.05)/ln(P)): 29 for P90, 59 for P95, 99 for
  // P97. Below that there is no bound — the "percentile" is the sample maximum wearing a
  // percentile's name, and it moves with the dirtiest lot in the pool rather than with the
  // distribution. The 59 figure is the same minimum Codex states for a 95th-percentile estimate
  // at 95% confidence (CCCF guidance on data analysis for ML development); it is not a
  // convention borrowed from there but the value that formula returns.
  //
  // Two tiers, because two different things go wrong:
  //   (a) HOLD — target_p sits beyond 1 - 1/n, so fewer than one observation is expected above
  //       it. The value is extrapolated past the resolution of the pool. Nothing measured
  //       supports it and no confidence statement can be made about it.
  //   (b) DEMOTE — a bound exists in principle but n is under the minimum, so the value is set
  //       by the top one or two order statistics. Publishable as provisional (the ratchet
  //       tightens it as data accumulates), never as firm.
  //
  // This is deliberately independent of C4: distinct_sources counts SOURCES, pooled_n counts
  // SAMPLES, and a three-source pool of twenty samples clears C4 while failing this.
  // Applies ONLY where the pooled percentile is the published value, i.e.
  // rationale literature-baseline. When the rationale is regulatory-alignment the
  // published number is the legal ceiling; when it is precautionary or
  // feasibility-driven it is a staff selection. In none of those cases is the
  // value an estimate of a percentile, so the pool's resolution and the n-floor
  // for a 95% bound say nothing about it. Firing here previously demoted
  // cap-bound cells to provisional on the depth of a pool the value never used.
  if (targetP !== null && targetP >= 0.5 && cand !== null && !held && rat === "literature-baseline") {
    const nMin = Math.ceil(Math.log(0.05) / Math.log(targetP))
    if (n > 0 && targetP > 1 - 1 / n)
      checks.push({ level: "HOLD", check: "C11a-percentile-beyond-sample",
        detail: `target P${(targetP * 100).toFixed(0)} with pooled_n=${n} — fewer than one observation expected above it; the value is extrapolation past the pool's resolution, not a percentile` })
    else if (firm && n < nMin)
      checks.push({ level: "DEMOTE", check: "C11b-minimum-n-floor",
        detail: `firm at P${(targetP * 100).toFixed(0)} with pooled_n=${n} (<${nMin}) — no 95% bound exists at this n; must be provisional` })
  }
  // C6 — HOLD: a cell in the adjudication register must not render firm.
  if (held && firm)
    checks.push({ level: "HOLD", check: "C6-adjudication-register", detail: `in outlier/suspect register but verdict is firm — must render pending` })
  // C10 — HOLD: a BLOCKED pool (mixed units / internally inconsistent, p95/p10 > 1e4) is not
  // publishable even though it carries a candidate value — units must be fixed before use.
  // (spices Cd: 21-source pool, p95/p10 > 1e4 — a real value is unrecoverable until units align.)
  if (/^BLOCKED/.test(verdict))
    checks.push({ level: "HOLD", check: "C10-blocked-pool", detail: verdict })
  // C9 — HOLD: artifact / non-meaningful-limit plausibility. Two ways a literature-baseline
  // value is indefensible as a published standard:
  //   (a) absolute: > 100 mg/kg. No food *contaminant* standard is that high. Either an
  //       artifact, or a no-cap accumulator analyte (Al/Ni in spices) that is not-material and
  //       must resolve by feasibility/not-material, not a literature P97. Fires regardless of n.
  //   (b) thin-source outlier: < 3 distinct sources AND > 15x the metal's multi-source median —
  //       a unit / single-sample / censoring artifact (salt Al 164,000 ppb n=1).
  // (salt Al 164,000 n=1; spices Al 846,635 multi-source). Hold until verified — never publish.
  if (cand !== null && rat === "literature-baseline") {
    const med = trustedMedian[metal]
    if (cand > 100000)
      checks.push({ level: "HOLD", check: "C9-artifact-implausible", detail: `value ${cand} ppb > 100 mg/kg — no literature contaminant standard is that high; artifact or not-material/feasibility analyte; verify before publishing` })
    else if (distinct < 3 && med != null && med > 0 && cand > 15 * med)
      checks.push({ level: "HOLD", check: "C9-artifact-implausible", detail: `thin-source (distinct=${distinct}) value ${cand} ppb > 15x ${metal} multi-source median ${Math.round(med)} — likely unit/single-sample artifact; verify before publishing` })
  }

  const level = checks.some((c) => c.level === "CRITICAL_FAIL") ? "CRITICAL_FAIL"
    : checks.some((c) => c.level === "FAIL") ? "FAIL"
    : checks.some((c) => c.level === "DEMOTE") ? "DEMOTE"
    : checks.some((c) => c.level === "HOLD") ? "HOLD"
    : checks.some((c) => c.level === "WARN") ? "WARN"
    : "PASS"
  if (cand === null && !held) continue // no value to gate (genuine no-data, handled upstream)
  report.push({ product_slug: slug, metal_species: metal, candidate_value_ppb: r.candidate_value_ppb,
    cap: cap ?? "", rationale: rat, verdict_level: level,
    reasons: checks.map((c) => `${c.check}: ${c.detail}`).join(" | ") })
}

// Emit process-control screens as their own gated rows. A screen is enforced when it is
// well-formed (positive value, recognised type) and does not collide with a same-cell health
// limit; a malformed screen or a screen sitting on a cell that also carries a firm health
// limit is a CRITICAL_FAIL (the two would be confused). PROCESS_SCREEN rows are informational
// verdicts, distinct from the health-panel verdicts, so they can never be read as a
// toxicological threshold.
for (const s of processScreens) {
  const slug = s.row_slug, metal = s.metal_species
  const val = num(s.screen_value_ppb)
  const problems = []
  if (val === null || val <= 0) problems.push(`malformed screen value '${s.screen_value_ppb}'`)
  if (s.screen_type !== "manufacturing-anomaly-tripwire") problems.push(`unknown screen_type '${s.screen_type}'`)
  // A screen must sit on a cell that is NOT a firm health limit (not-material or no-health-standard only).
  const cellIsNotMaterial = notMaterialSet.has(`${slug}|${metal}`) || notMaterialSet.has(`${slug}|${metal.replace(/-total$/, "-VI")}`)
  const healthRow = dist.find((r) => r.product_slug === slug && r.metal_species === metal && num(r.candidate_value_ppb) !== null)
  if (healthRow && !cellIsNotMaterial) problems.push(`collides with a health limit on the same cell — a process screen must not double as a health standard`)
  report.push({
    product_slug: slug, metal_species: metal, candidate_value_ppb: val ?? "",
    cap: "", rationale: "process-control-screen", verdict_level: problems.length ? "CRITICAL_FAIL" : "PROCESS_SCREEN",
    reasons: problems.length
      ? problems.map((p) => `PS-invalid: ${p}`).join(" | ")
      : `PS-enforced: ${s.screen_type} at ${val} ppb (${s.basis}); investigate-the-line threshold, not a health limit`,
  })
}

// write report
const cols = ["product_slug", "metal_species", "candidate_value_ppb", "cap", "rationale", "verdict_level", "reasons"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(ev("standards-qc-gate-report.csv"), [cols.join(","), ...report.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

// summary
const by = {}
for (const r of report) by[r.verdict_level] = (by[r.verdict_level] || 0) + 1
const order = ["CRITICAL_FAIL", "FAIL", "DEMOTE", "HOLD", "WARN", "PASS"]
console.log(`Publication QC Gate — ${report.length} cells gated${filterSlug ? ` (${filterSlug})` : ""}`)
for (const k of order) if (by[k]) console.log(`  ${String(by[k]).padStart(4)}  ${k}`)
const critical = report.filter((r) => r.verdict_level === "CRITICAL_FAIL")
if (critical.length) {
  console.log(`\nCRITICAL (build-blocking) — published values exceeding their cap:`)
  for (const r of critical) console.log(`  ${r.product_slug} / ${r.metal_species}: ${r.reasons}`)
}
console.log(`\nWrote data/evidence/standards-qc-gate-report.csv`)
if (critical.length && !args.has("--warn-only")) process.exit(1)
