// Shared descriptive occurrence-completeness helpers.
//
// These functions characterize external literature coverage only. They never
// select an initial HMTc limit or evaluate the certified-lot ratchet.

export function num(v) {
  const n = Number(v)
  return Number.isFinite(n) && String(v).trim() !== "" ? n : null
}

// Minimum n at which a one-sided 95% nonparametric bound on the P-th percentile
// exists at all: ceil(ln(0.05)/ln(P)) — 29 for P90 and 59 for P95.
// Below it there is no bound; the "percentile" is the top order statistic wearing
// a percentile's name and it tracks the dirtiest lot rather than the distribution.
export function minNForPercentile(p) {
  if (!(p > 0 && p < 1)) return null
  return Math.ceil(Math.log(0.05) / Math.log(p))
}

// The highest standard percentile a pool of n samples can actually carry, subject
// to both conditions the gate tests: a bound must exist (n >= minN) and the target
// must sit inside the pool's resolution (p <= 1 - 1/n). Returns null when the pool
// supports no defensible upper-tail percentile.
export const PERCENTILE_LADDER = [0.95, 0.9, 0.8, 0.75, 0.5]
export function maxSupportablePercentile(n) {
  const nn = num(n)
  if (nn === null || nn < 1) return null
  for (const p of PERCENTILE_LADDER) {
    const minN = minNForPercentile(p)
    if (nn >= minN && p <= 1 - 1 / nn) return p
  }
  return null
}

// Compatibility export for retired tools. A current caller may use it only to
// ask whether a descriptive occurrence cell is present and well-supported.
export function classifyCell(row, flagged) {
  const p95 = row ? num(row.pooled_p95) : null
  const distinct = row ? num(row.distinct_sources) ?? 0 : 0
  const sens = (row?.sens_band || "").toLowerCase()
  if (p95 === null) return { state: "pending", why: "no usable occurrence evidence" }
  if (flagged) return { state: "pending", why: "flagged untrusted (extraction_review)" }
  const pooledN = num(row?.pooled_n)
  const nMin = minNForPercentile(0.95)
  const nSupportsTarget =
    pooledN === null ? false : pooledN >= nMin && 0.95 <= 1 - 1 / pooledN
  if (sens === "stable" && distinct >= 2 && nSupportsTarget)
    return { state: "resolved", basis: "descriptive-occurrence", confidence: "firm", value: p95 }
  if (p95 !== null) {
    const maxP = maxSupportablePercentile(pooledN)
    return {
      state: "resolved",
      basis: "descriptive-occurrence",
      confidence: "provisional",
      value: p95,
      ...(nSupportsTarget
        ? {}
        : {
            percentile_unsupported: true,
            descriptive_p: 0.95,
            pooled_n: pooledN,
            n_required: nMin,
            max_supportable_p: maxP,
          }),
    }
  }
  return { state: "pending", why: "no usable occurrence evidence" }
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
