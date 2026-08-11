// Shared standards-readiness classifier.
//
// This is the single source of truth for the cell-level "is this a defensible
// value the standards math can print?" ladder. Both the category-readiness
// monitor (tools/evidence/build-category-standards-readiness.mjs) and the
// per-ingredient completeness scorecard (D11) import classifyCell from here so
// the per-ingredient verdict and the category monitor can never silently
// disagree (page-completeness-scorecard.md Part 2, D11).

export function num(v) {
  const n = Number(v)
  return Number.isFinite(n) && String(v).trim() !== "" ? n : null
}

// Minimum n at which a one-sided 95% nonparametric bound on the P-th percentile
// exists at all: ceil(ln(0.05)/ln(P)) — 29 for P90, 59 for P95, 99 for P97.
// Below it there is no bound; the "percentile" is the top order statistic wearing
// a percentile's name and it tracks the dirtiest lot rather than the distribution.
// Same formula the C11 gate uses (build-standards-qc-gate.mjs).
export function minNForPercentile(p) {
  if (!(p > 0 && p < 1)) return null
  return Math.ceil(Math.log(0.05) / Math.log(p))
}

// The highest standard percentile a pool of n samples can actually carry, subject
// to both conditions the gate tests: a bound must exist (n >= minN) and the target
// must sit inside the pool's resolution (p <= 1 - 1/n). Returns null when the pool
// supports no defensible upper-tail percentile.
export const PERCENTILE_LADDER = [0.97, 0.95, 0.9, 0.8, 0.75, 0.5]
export function maxSupportablePercentile(n) {
  const nn = num(n)
  if (nn === null || nn < 1) return null
  for (const p of PERCENTILE_LADDER) {
    const minN = minNForPercentile(p)
    if (nn >= minN && p <= 1 - 1 / nn) return p
  }
  return null
}

// A cell is SHIPPABLE (resolves the row for manual purposes) when it has a
// defensible value the manual can print with an honest confidence label:
//   - literature-baseline, stable        -> firm
//   - literature-baseline, provisional   -> publishable, labeled provisional
//   - regulatory-alignment (cap-bound)   -> firm
// Only genuine gaps block: no value at all, or a value still flagged untrusted.
//
// `row` is the hmtc_aggregate_distributions row for (slug, metal) or undefined.
// `flagged` is true when the cell sits unreviewed in extraction_review.csv.
export function classifyCell(row, flagged) {
  const cand = row ? num(row.candidate_value_ppb) : null
  const cap = row ? num(row.lowest_regulatory_cap_ppb) : null
  const p97 = row ? num(row.pooled_p97) : null
  const distinct = row ? num(row.distinct_sources) ?? 0 : 0
  const sens = (row?.sens_band || "").toLowerCase()
  const value = cand ?? cap ?? p97
  if (value === null) return { state: "pending", why: "no usable evidence (needs data)" }
  if (flagged) return { state: "pending", why: "flagged untrusted (extraction_review)" }
  if (cand !== null && cap !== null && (p97 === null || cap <= p97))
    return { state: "resolved", basis: "regulatory-alignment", confidence: "firm", value }
  // A literature-baseline standard is "firm" only with a stable, multi-source pool
  // AND enough SAMPLES for the target percentile to exist. distinct_sources counts
  // sources; pooled_n counts samples; a 3-source pool of 20 samples clears the
  // source gate while failing the percentile gate. Without the n test this
  // function graded 68 cells firm that the C11b gate demotes — including
  // fish-containing-baby-foods tAs/tHg at n=4 carrying a P97. Keeping the two in
  // agreement here is what stops the catalog printing "firm" on a value the QC
  // gate has already demoted.
  const targetP = num(row?.target_p)
  const pooledN = num(row?.pooled_n)
  const nMin = targetP !== null ? minNForPercentile(targetP) : null
  const nSupportsTarget =
    nMin === null || pooledN === null ? true : pooledN >= nMin && targetP <= 1 - 1 / pooledN
  if (p97 !== null && sens === "stable" && distinct >= 2 && nSupportsTarget)
    return { state: "resolved", basis: "literature-baseline", confidence: "firm", value }
  if (p97 !== null) {
    const maxP = maxSupportablePercentile(pooledN)
    return {
      state: "resolved",
      basis: "literature-baseline",
      confidence: "provisional",
      value,
      // Surfaced, not silently substituted: the gap between the target and what the
      // pool can carry is stated (CLAUDE.md Part 2 — the gap is the point).
      ...(nSupportsTarget
        ? {}
        : {
            percentile_unsupported: true,
            target_p: targetP,
            pooled_n: pooledN,
            n_required: nMin,
            max_supportable_p: maxP,
          }),
    }
  }
  if (cap !== null) return { state: "resolved", basis: "regulatory-alignment", confidence: "firm", value }
  return { state: "pending", why: "no usable evidence (needs data)" }
}

// D5 pooling-depth ladder (page-completeness-scorecard.md Part 2, D5). Thresholds
// mirror the distinct-source gate and pooled-n rules in the pooling methodology.
//   GAP       : no cell / pooled_n null
//   THIN      : distinct_sources < 3 OR sample_level_contributing == 0
//   POOLABLE  : distinct_sources >= 3 AND pooled_n >= 20 AND sens_band in {stable, provisional}
//   CONFIDENT : distinct_sources >= 3 AND sens_band == stable
export function poolingBand(row) {
  if (!row) return { band: "GAP", why: "no bridged product row" }
  const pooledN = num(row.pooled_n)
  if (pooledN === null) return { band: "GAP", why: "pooled_n null" }
  const distinct = num(row.distinct_sources) ?? 0
  const sampleLevel = num(row.sample_level_contributing) ?? 0
  const sens = (row.sens_band || "").toLowerCase()
  if (distinct < 3 || sampleLevel === 0) {
    const need = distinct < 3 ? `needs ${3 - distinct} distinct source(s)` : "needs a sample-level-backed source"
    return { band: "THIN", why: need, distinct, pooledN }
  }
  if (distinct >= 3 && sens === "stable") return { band: "CONFIDENT", why: "", distinct, pooledN }
  if (distinct >= 3 && pooledN >= 20 && (sens === "stable" || sens === "provisional"))
    return { band: "POOLABLE", why: "", distinct, pooledN }
  // distinct >= 3 but pooled_n < 20 or unstable sensitivity
  return { band: "THIN", why: pooledN < 20 ? `pooled_n ${pooledN} < 20` : `sensitivity ${sens || "unset"}`, distinct, pooledN }
}

export const BAND_ORDER = { GAP: 0, THIN: 1, POOLABLE: 2, CONFIDENT: 3 }
