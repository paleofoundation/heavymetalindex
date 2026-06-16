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
  // A literature-baseline standard is "firm" only with a stable, multi-source pool.
  // Single-source standards are emitted (HMTc regulates the under-studied) but
  // graded provisional — never firm — so the firewall is not violated by
  // over-claiming evidence the pool does not support.
  if (p97 !== null && sens === "stable" && distinct >= 2)
    return { state: "resolved", basis: "literature-baseline", confidence: "firm", value }
  if (p97 !== null) return { state: "resolved", basis: "literature-baseline", confidence: "provisional", value }
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
