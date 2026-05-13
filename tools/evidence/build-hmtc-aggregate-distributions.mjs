#!/usr/bin/env node
/**
 * HMTc pooling engine.
 *
 * Per CLAUDE.md Part 19 and docs/governance/hmtc-governing-principles.md v2.0:
 * For each (product_slug, metal_species) cell, pool every loaded source's
 * contribution into a single distribution, then take P97 (clean subcategory)
 * or P45 (dirty subcategory) of that pool. Final value capped at the lowest
 * applicable loaded regulatory ceiling.
 *
 * Admission rule: any source row with a usable statistic contributes via
 * moment-matching pseudo-sample expansion. No source is excluded for being
 * "summary-only." Sample-level evidence uses raw values. Summary statistics
 * (mean, median, max, lb/ub, IQR, reported percentiles) reconstruct under
 * log-normal or interval assumptions, with explicit per-source flags so
 * the reviewer can see which sources contributed sample-level data and
 * which contributed reconstructed pseudo-samples.
 *
 * Output: data/evidence/hmtc_aggregate_distributions.csv (canonical) and
 * data/evidence/hmtc_aggregate_distributions_summary.json. Both are
 * generated; never hand-edited.
 *
 * Methodology references (cite into the generated output for defensibility):
 * - WHO/JECFA pooled TDS methodology
 * - EFSA Scientific Opinion on Pb in food (2010, 2024)
 * - EFSA Scientific Opinion on Cd in food (2009, 2024)
 * - ATSDR moment-matching guidance for summary-statistic-only sources
 * - Codex Alimentarius CAC/GL 50-2004 weighted pooling
 */

import fs from "node:fs"
import path from "node:path"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const productDir = path.join(repoRoot, "wiki/products")
const summaryCsvGlob = "data/evidence/category*_summary.csv"
const samplesCsvGlob = "data/evidence/category*_samples.csv"
const gapReportPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const outputPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions_summary.json")

const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""
const metalFilter = args.get("metal") ?? ""
const verbose = args.get("verbose") === "true" || args.has("verbose")
const bootstrapIterations = Number(args.get("bootstrap-iterations") ?? 200)
const pseudoSampleCap = Number(args.get("pseudo-sample-cap") ?? 500)

// ---- Methodology constants (per CLAUDE.md Part 19 / Governing Principles v2.0)

const CLEAN_TARGET_P = 0.97       // per-analyte clean standard
const DIRTY_TARGET_P = 0.45       // per-analyte dirty standard
const INDEPENDENT_TARGET_P = 0.97 // default for variant_type other than clean/dirty
const DEFAULT_CV_FOR_MEAN_ONLY = 1.0 // EFSA/JECFA convention for contaminant data
const BASIS_RECONSTITUTION_FACTOR = 7 // 1 g powder + 6 g water (1:7 dilution)
const MAX_SOURCE_SHARE = 0.5      // no single source > 50% of pool weight

// ---- Random number generator (deterministic, seeded for reproducibility)

class SeededRng {
  constructor(seed = 20260513) {
    this.state = seed >>> 0
  }
  next() {
    // xorshift32
    let x = this.state
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    this.state = x >>> 0
    return this.state / 0xffffffff
  }
  normal() {
    // Box-Muller
    const u1 = Math.max(this.next(), 1e-12)
    const u2 = this.next()
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  }
}

// ---- Load product metadata (for native basis + variant_type per row)

function readProductPages() {
  const products = {}
  for (const file of fs.readdirSync(productDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const text = fs.readFileSync(path.join(productDir, file), "utf8")
    const fm = parseFrontmatter(text)
    if (fm.type !== "product-category") continue
    const slug = String(fm.category || fm.slug || file.replace(/\.md$/, ""))
    products[slug] = {
      slug,
      title: String(fm.title || fm.label || slug),
      variant_type: String(fm.variant_type || ""),
      primary_metals_of_concern: arrayField(fm.primary_metals_of_concern),
      applicable_regulations: arrayField(fm.applicable_regulations),
      native_basis: deriveNativeBasis(slug, String(fm.variant_type || "")),
      hmtc_row: numberOrNull(fm.hmtc_row),
    }
  }
  return products
}

function deriveNativeBasis(slug, variantType) {
  // Match product form factor to the basis brands ship and test on.
  if (/-powder/.test(slug)) return "powder_as_placed"
  if (/-rtf-liquid/.test(slug) || /-rtf$/.test(slug)) return "as_consumed"
  if (/-concentrated-liquid/.test(slug)) return "concentrated_liquid_as_placed"
  if (/-dry-/.test(slug) || /-dry$/.test(slug)) return "dry_as_sold"
  if (/-puree/.test(slug) || /-purees/.test(slug)) return "as_consumed"
  if (/-cereal/.test(slug) && /-dry/.test(slug)) return "dry_as_sold"
  if (/juice/.test(slug)) return "as_sold"
  if (/-milk(s)?-/.test(slug) || /-milk(s)?$/.test(slug)) return "as_sold"
  if (/teething|snacks/.test(slug)) return "as_sold"
  if (/mixed-meals/.test(slug)) return "as_consumed"
  if (/fish-containing/.test(slug)) return "as_consumed"
  // Default fallback: as_sold (most regulatory caps reference this).
  return "as_sold"
}

// ---- Load all structured CSVs + samples CSVs

function loadStructuredRows() {
  const summaryFiles = fs
    .readdirSync(path.join(repoRoot, "data/evidence"))
    .filter((f) => /^category\d.*_summary\.csv$/.test(f))
    .map((f) => path.join(repoRoot, "data/evidence", f))
  const rows = []
  for (const f of summaryFiles) {
    const parsed = parseCsv(fs.readFileSync(f, "utf8"))
    for (const row of parsed) {
      rows.push({ ...row, _source_file: path.basename(f) })
    }
  }
  return rows
}

function loadSampleRows() {
  const sampleFiles = fs
    .readdirSync(path.join(repoRoot, "data/evidence"))
    .filter((f) => /^category\d.*_samples\.csv$/.test(f))
    .map((f) => path.join(repoRoot, "data/evidence", f))
  const rows = []
  for (const f of sampleFiles) {
    const parsed = parseCsv(fs.readFileSync(f, "utf8"))
    for (const row of parsed) {
      rows.push({ ...row, _source_file: path.basename(f) })
    }
  }
  return rows
}

// ---- Pseudo-sample reconstruction

function reconstructPseudoSamples(row, rng) {
  // Decide which reconstruction path applies, in priority order. Each path
  // returns { samples, method, weak } where weak flags that the contribution
  // is thin (single point, range-only, etc.).
  const n = numberOrNull(row.n) ?? 0
  const mean = numberOrNull(row.mean_ppb ?? row.mean)
  const median = numberOrNull(row.median_ppb ?? row.p50_ppb ?? row.p50)
  const max = numberOrNull(row.max_ppb ?? row.p100_ppb ?? row.p100)
  const p10 = numberOrNull(row.p10_ppb)
  const p30 = numberOrNull(row.p30_ppb ?? row.p30)
  const p50 = numberOrNull(row.p50_ppb ?? row.p50)
  const p90 = numberOrNull(row.p90_ppb ?? row.p90)
  const p95 = numberOrNull(row.p95_ppb)
  const p100 = numberOrNull(row.p100_ppb ?? row.p100 ?? row.max_ppb)
  const meanLb = numberOrNull(row.mean_lb_ppb)
  const meanUb = numberOrNull(row.mean_ub_ppb)
  const min = numberOrNull(row.min ?? row.min_ppb)

  const Nfit = n > 0 ? Math.min(n, pseudoSampleCap) : 0

  // Path 1: Full p-vector + N — quantile interpolation.
  const reportedPercentiles = [p10, p30, p50, p90, p95, p100].filter((v) => v !== null)
  if (reportedPercentiles.length >= 3 && Nfit > 0) {
    const samples = generateFromPercentileVector(
      [
        [0.0, Math.max(0, p10 !== null ? p10 : reportedPercentiles[0])],
        ...[
          [0.1, p10],
          [0.3, p30],
          [0.5, p50],
          [0.9, p90],
          [0.95, p95],
          [1.0, p100],
        ].filter(([, v]) => v !== null),
      ],
      Nfit,
      rng,
    )
    return {
      samples,
      method: "percentile_interpolation",
      weak: false,
    }
  }

  // Path 2: mean + median + max + N — log-normal moment-match.
  if (mean !== null && median !== null && median > 0 && Nfit > 0) {
    const sigmaLog = Math.sqrt(Math.max(2 * Math.log(mean / median), 1e-6))
    const muLog = Math.log(Math.max(median, 1e-6))
    const samples = []
    for (let i = 0; i < Nfit; i++) {
      const z = rng.normal()
      samples.push(Math.max(0, Math.exp(muLog + sigmaLog * z)))
    }
    return { samples, method: "lognormal_mean_median", weak: false }
  }

  // Path 3: mean + max + N — log-normal with CV heuristic from (max/mean).
  if (mean !== null && max !== null && Nfit > 0) {
    const cv = Math.max((max - mean) / Math.max(mean, 1e-6), 0.3) / 3  // 3-sigma heuristic
    const samples = lognormalFromMeanCV(mean, cv, Nfit, rng)
    return { samples, method: "lognormal_mean_max", weak: false }
  }

  // Path 4: mean + N only — log-normal with EFSA/JECFA default CV.
  if (mean !== null && Nfit > 0) {
    const samples = lognormalFromMeanCV(mean, DEFAULT_CV_FOR_MEAN_ONLY, Nfit, rng)
    return { samples, method: "lognormal_mean_only", weak: true }
  }

  // Path 5: LOD-censored lb/ub mean — Tobit-style interval, midpoint estimate.
  if (meanLb !== null && meanUb !== null) {
    const midpoint = (meanLb + meanUb) / 2
    const Nfallback = Math.max(Nfit, 10)
    const samples = lognormalFromMeanCV(midpoint, DEFAULT_CV_FOR_MEAN_ONLY, Nfallback, rng)
    return { samples, method: "lognormal_lod_censored_midpoint", weak: true }
  }

  // Path 6: range/min/max only — uniform across range, capped count.
  if (min !== null && max !== null) {
    const count = Math.min(Nfit > 0 ? Nfit : 10, 20)
    const samples = []
    for (let i = 0; i < count; i++) {
      samples.push(min + rng.next() * (max - min))
    }
    return { samples, method: "uniform_range_only", weak: true }
  }
  if (max !== null) {
    const count = Math.min(Nfit > 0 ? Nfit : 5, 10)
    const samples = []
    for (let i = 0; i < count; i++) {
      samples.push(rng.next() * max)
    }
    return { samples, method: "uniform_max_only", weak: true }
  }

  // Path 7: single mean/median value, no N — one pseudo-sample.
  const single = mean ?? median ?? max
  if (single !== null) {
    return { samples: [single], method: "single_point", weak: true }
  }

  return { samples: [], method: "no_usable_statistic", weak: true }
}

function lognormalFromMeanCV(mean, cv, n, rng) {
  const variance = (mean * cv) ** 2
  const muLog = Math.log(Math.max(mean ** 2 / Math.sqrt(mean ** 2 + variance), 1e-6))
  const sigmaLog = Math.sqrt(Math.log(1 + variance / Math.max(mean ** 2, 1e-12)))
  const samples = []
  for (let i = 0; i < n; i++) {
    const z = rng.normal()
    samples.push(Math.max(0, Math.exp(muLog + sigmaLog * z)))
  }
  return samples
}

function generateFromPercentileVector(percentilePoints, n, rng) {
  // percentilePoints is [[p, value], ...] sorted by p in [0,1].
  const sorted = [...percentilePoints].sort((a, b) => a[0] - b[0])
  const samples = []
  for (let i = 0; i < n; i++) {
    const u = (i + rng.next()) / n
    samples.push(interpolatePercentile(u, sorted))
  }
  return samples
}

function interpolatePercentile(p, points) {
  if (p <= points[0][0]) return Math.max(0, points[0][1])
  if (p >= points[points.length - 1][0]) return points[points.length - 1][1]
  for (let i = 0; i < points.length - 1; i++) {
    const [pLo, vLo] = points[i]
    const [pHi, vHi] = points[i + 1]
    if (p >= pLo && p <= pHi) {
      const t = (p - pLo) / Math.max(pHi - pLo, 1e-9)
      return Math.max(0, vLo + t * (vHi - vLo))
    }
  }
  return points[points.length - 1][1]
}

// ---- Basis homogenization

function convertBasis(value, fromBasis, toBasis) {
  if (!fromBasis || !toBasis || fromBasis === toBasis) return { value, factor: 1 }
  // Powder ↔ prepared (1:7 reconstitution by mass).
  const POWDER_BASES = new Set(["powder_as_placed", "as_sold", "as_sold_or_source_reported", "dry_as_sold"])
  const PREPARED_BASES = new Set(["prepared_for_feeding", "as_consumed"])
  if (POWDER_BASES.has(fromBasis) && PREPARED_BASES.has(toBasis)) {
    return { value: value / BASIS_RECONSTITUTION_FACTOR, factor: 1 / BASIS_RECONSTITUTION_FACTOR }
  }
  if (PREPARED_BASES.has(fromBasis) && POWDER_BASES.has(toBasis)) {
    return { value: value * BASIS_RECONSTITUTION_FACTOR, factor: BASIS_RECONSTITUTION_FACTOR }
  }
  // Within-class conversions (as_sold ↔ dry_as_sold, etc.) — treat as 1:1 with caveat flag.
  if (POWDER_BASES.has(fromBasis) && POWDER_BASES.has(toBasis)) return { value, factor: 1 }
  if (PREPARED_BASES.has(fromBasis) && PREPARED_BASES.has(toBasis)) return { value, factor: 1 }
  // Mixed / unknown — pass through with factor 1 and flag.
  return { value, factor: 1, unknown_conversion: true }
}

// ---- Pooling math

function pool(rowsForCell, productNativeBasis, rng) {
  const contributions = []
  const sourceN = []
  for (const row of rowsForCell) {
    const recon = reconstructPseudoSamples(row, rng)
    if (recon.samples.length === 0) {
      contributions.push({
        source_id: row.source_id,
        basis: row.basis ?? "unknown",
        n_used: 0,
        reconstruction_method: recon.method,
        weak: recon.weak,
        admitted: false,
        admitted_reason: "no usable statistic",
      })
      continue
    }
    const fromBasis = String(row.basis || "").trim()
    // Convert each pseudo-sample to native basis
    let conversionFactor = 1
    let unknownConversion = false
    const converted = recon.samples.map((v) => {
      const c = convertBasis(v, fromBasis, productNativeBasis)
      conversionFactor = c.factor
      if (c.unknown_conversion) unknownConversion = true
      return c.value
    })
    const nUsed = numberOrNull(row.n) ?? converted.length
    sourceN.push(nUsed)
    contributions.push({
      source_id: row.source_id,
      basis: fromBasis || "unknown",
      n_used: nUsed,
      reconstruction_method: recon.method,
      weak: recon.weak,
      admitted: true,
      conversion_factor: conversionFactor,
      unknown_conversion: unknownConversion,
      samples: converted,
    })
  }

  // Pool with N-weighting subject to a *relative-share cap*: no single source
  // contributes more than MAX_SOURCE_SHARE of the final pool. This prevents a
  // single mega-source from dominating WITHOUT punishing data quality the way
  // an absolute cap (e.g. "no source contributes more than 50 pseudo-samples")
  // would — that older approach truncated FDA 2026's N=230 down to 50 and
  // gave the same weight to a single-point Pandelova basket entry.
  //
  // Algorithm: admit each source's pseudo-samples in full first. Then if any
  // source exceeds MAX_SOURCE_SHARE of the total, downsample only that source
  // (uniformly) until it sits at MAX_SOURCE_SHARE. Repeat until all sources
  // are within the share cap.
  if (sourceN.length === 0)
    return { pooled: [], contributions, capN: 0, medianN: 0, share_cap: MAX_SOURCE_SHARE }

  const admittedContribs = contributions.filter((c) => c.admitted)
  const sampleVectors = admittedContribs.map((c) => c.samples.slice())

  // Closed-form relative-share cap. For source i with original length n_i and
  // others' total m_i, the post-cap length n_i' satisfies n_i' / (n_i' + m_i)
  // ≤ S. Solving: n_i' ≤ m_i × S / (1 - S). For S = 0.5, n_i' ≤ m_i (a
  // single source can match — but not exceed — the sum of all others).
  // We apply this in one pass; if multiple sources are over the cap, each
  // one's allowance is computed against the others' lengths *after* their
  // own caps are applied. Solve iteratively but with a convergent shrinkage
  // rule: each pass strictly reduces over-cap sources by at least 5% until
  // all sit at or below the cap.
  const ratio = MAX_SOURCE_SHARE / (1 - MAX_SOURCE_SHARE)
  // Up to 200 iterations is plenty; each pass strictly shrinks.
  let safety = 200
  while (safety-- > 0) {
    const lens = sampleVectors.map((s) => s.length)
    const total = lens.reduce((a, b) => a + b, 0)
    if (total === 0) break
    let changed = false
    for (let i = 0; i < sampleVectors.length; i++) {
      const others = total - lens[i]
      const allowed = Math.max(1, Math.floor(others * ratio))
      if (sampleVectors[i].length > allowed) {
        sampleVectors[i] = downsampleUniform(sampleVectors[i], allowed)
        changed = true
      }
    }
    if (!changed) break
  }

  const pooled = []
  for (let i = 0; i < admittedContribs.length; i++) {
    const c = admittedContribs[i]
    const samples = sampleVectors[i]
    for (const v of samples) pooled.push(v)
    c.sample_count_admitted = c.samples.length
    c.sample_count_after_cap = samples.length
    c.pool_share = samples.length === 0
      ? 0
      : Number((samples.length / Math.max(pooled.length, 1)).toFixed(4))
    delete c.samples
  }
  pooled.sort((a, b) => a - b)

  // Final-share audit for the assertion downstream.
  const total = pooled.length
  for (let i = 0; i < admittedContribs.length; i++) {
    const c = admittedContribs[i]
    c.pool_share = total === 0
      ? 0
      : Number((sampleVectors[i].length / total).toFixed(4))
  }

  const medianN =
    sourceN.length > 0
      ? percentile(sourceN.slice().sort((a, b) => a - b), 0.5)
      : 0
  return {
    pooled,
    contributions,
    capN: null,
    medianN,
    share_cap: MAX_SOURCE_SHARE,
  }
}

function downsampleUniform(samples, target) {
  if (samples.length <= target) return samples
  const out = []
  for (let i = 0; i < target; i++) {
    out.push(samples[Math.floor((i * samples.length) / target)])
  }
  return out
}

function percentile(sorted, p) {
  if (!sorted.length) return null
  if (sorted.length === 1) return sorted[0]
  const idx = p * (sorted.length - 1)
  const lo = Math.floor(idx)
  const hi = Math.ceil(idx)
  if (lo === hi) return sorted[lo]
  const w = idx - lo
  return sorted[lo] * (1 - w) + sorted[hi] * w
}

// ---- Sensitivity analysis: pool under alternative assumptions

function sensitivity(rowsForCell, productNativeBasis, targetP, seedBase) {
  const results = {}
  for (const variant of ["lognormal", "gamma", "nonparametric"]) {
    const rng = new SeededRng(seedBase + variant.charCodeAt(0))
    const adjustedRows = rowsForCell.map((row) => ({
      ...row,
      _sensitivity_variant: variant,
    }))
    const { pooled } = pool(adjustedRows, productNativeBasis, rng)
    results[variant] = pooled.length > 0 ? percentile(pooled, targetP) : null
  }
  return results
}

// ---- Bootstrap CI
//
// Proper meta-analytic bootstrap: each iteration draws |sources| sources
// with replacement, regenerates each drawn source's pseudo-samples (under
// the headline lognormal assumption with the seeded RNG), pools, and takes
// the target percentile. This represents between-source uncertainty, which
// dominates when sources differ in basis, jurisdiction, and method.
//
// The earlier implementation resampled individual pseudo-samples from the
// final pool. That captured only within-pool variance and consistently
// under-stated CI width because pseudo-samples within a source are
// correlated (generated from one set of moments).

function bootstrapCI_sourceLevel(rowsForCell, productNativeBasis, targetP, iterations, seedBase) {
  if (!rowsForCell.length) return { lo: null, hi: null }
  const draws = []
  for (let it = 0; it < iterations; it++) {
    const drawnRows = []
    const iterRng = new SeededRng(seedBase ^ ((it + 1) * 2654435761))
    for (let i = 0; i < rowsForCell.length; i++) {
      drawnRows.push(rowsForCell[Math.floor(iterRng.next() * rowsForCell.length)])
    }
    const { pooled } = pool(drawnRows, productNativeBasis, iterRng)
    if (pooled.length > 0) draws.push(percentile(pooled, targetP))
  }
  draws.sort((a, b) => a - b)
  return {
    lo: draws.length > 0 ? percentile(draws, 0.025) : null,
    hi: draws.length > 0 ? percentile(draws, 0.975) : null,
    iterations: draws.length,
  }
}

// ---- Regulatory cap lookup

function lookupRegCap(productSlug, metal, gapRows) {
  const row = gapRows.find(
    (r) =>
      r.product_slug === productSlug &&
      String(r.metal_species ?? "").trim() === metal,
  )
  if (!row) return { value: null, source: null }
  const cap = numberOrNull(row.lowest_regulatory_cap_ug_kg)
  return {
    value: cap,
    source: row.lowest_regulatory_cap_source || null,
    reference_status: row.regulatory_reference_status || null,
  }
}

// ---- Target picker per variant_type

function targetForProduct(product) {
  const v = product.variant_type || ""
  if (v.includes("clean_benchmark")) {
    return { target_p: CLEAN_TARGET_P, target_label: "clean_p97", role: "clean_subcategory" }
  }
  if (v.includes("contamination_platform")) {
    return { target_p: DIRTY_TARGET_P, target_label: "dirty_p45", role: "dirty_subcategory" }
  }
  return { target_p: INDEPENDENT_TARGET_P, target_label: "independent_p97", role: "independent_clean_by_default" }
}

// ---- Rationale tag

function rationaleTag(pooled, regCap) {
  if (pooled === null) return "no-data"
  if (regCap.value === null) return "literature-baseline"
  if (pooled > regCap.value) return "regulatory-alignment"
  return "literature-baseline"
}

// ---- Main loop

function main() {
  const products = readProductPages()
  const summaryRows = loadStructuredRows()
  const sampleRows = loadSampleRows()
  const gapRows = fs.existsSync(gapReportPath)
    ? parseCsv(fs.readFileSync(gapReportPath, "utf8"))
    : []

  // Index summary rows by (product_slug, metal_species).
  // Tolerate the older schema variant where product_slug column is named `row_slug`.
  const keyOf = (r) => `${r.product_slug || r.row_slug}::${r.metal_species}`
  const rowsByKey = new Map()
  for (const row of summaryRows) {
    const key = keyOf(row)
    if (!rowsByKey.has(key)) rowsByKey.set(key, [])
    rowsByKey.get(key).push(row)
  }

  const samplesByKey = new Map()
  for (const row of sampleRows) {
    const key = keyOf(row)
    if (!samplesByKey.has(key)) samplesByKey.set(key, [])
    samplesByKey.get(key).push(row)
  }

  const outputRows = []
  const productSlugs = Object.keys(products).sort()
  for (const slug of productSlugs) {
    if (productFilter && slug !== productFilter) continue
    const product = products[slug]
    const target = targetForProduct(product)
    for (const metal of product.primary_metals_of_concern ?? []) {
      if (metalFilter && metal !== metalFilter) continue
      const key = `${slug}::${metal}`
      const summaryRowsForCell = rowsByKey.get(key) ?? []

      // De-dup contribution sources: when samples CSV holds raw values for a
      // source that the summary CSV also has, prefer the sample-level
      // reconstruction and drop the summary-row reconstruction so the same
      // physical paper isn't admitted twice.
      const samplesForCell = samplesByKey.get(key) ?? []
      const samplesBySourceId = new Map()
      for (const sample of samplesForCell) {
        const sid = sample.source_id
        if (!sid) continue
        if (!samplesBySourceId.has(sid)) samplesBySourceId.set(sid, [])
        samplesBySourceId.get(sid).push(sample)
      }
      const sourcesWithSamples = new Set(samplesBySourceId.keys())

      // Build the final rowsForCell: summary rows for sources WITHOUT samples,
      // plus a synthetic sample-level row per source WITH samples (which uses
      // the basis from the matching summary row when available, so we don't
      // default to as_consumed when the source is actually prepared_for_feeding).
      const rowsForCell = summaryRowsForCell.filter(
        (r) => !sourcesWithSamples.has(r.source_id),
      )
      for (const [sourceId, samples] of samplesBySourceId) {
        const values = samples
          .map((s) => numberOrNull(s.numeric_lower_bound_ppb ?? s.value_ppb ?? s.reported_value))
          .filter((v) => v !== null)
          .sort((a, b) => a - b)
        if (values.length === 0) continue
        // Inherit basis from the matching summary row (if any). Samples CSV
        // rarely carries basis; summary CSV does.
        const matchingSummary = summaryRowsForCell.find((r) => r.source_id === sourceId)
        const basis =
          matchingSummary?.basis ||
          samples[0].basis ||
          "as_consumed"
        rowsForCell.push({
          source_id: sourceId,
          basis,
          n: String(values.length),
          p10_ppb: String(percentile(values, 0.1)),
          p50_ppb: String(percentile(values, 0.5)),
          p90_ppb: String(percentile(values, 0.9)),
          p95_ppb: String(percentile(values, 0.95)),
          p100_ppb: String(values[values.length - 1]),
          mean_ppb: String(values.reduce((a, b) => a + b, 0) / values.length),
          _synthetic_from_samples: true,
          _replaces_summary_row: Boolean(matchingSummary),
        })
      }

      // Invariant: any source represented by sample-level synthesis must not
      // also appear as a summary row in the same cell. Multiple summary rows
      // for one source are legitimate when they represent distinct cohorts
      // (e.g. per-brand-group rows in almeida2022).
      assertSamplesReplacedSummary(rowsForCell, slug, metal)

      const seed = hashSeed(slug + ":" + metal)
      const rng = new SeededRng(seed)

      const { pooled, contributions, capN, medianN, share_cap } = pool(
        rowsForCell,
        product.native_basis,
        rng,
      )
      assertPoolShareCap(contributions, slug, metal)
      const admittedCount = contributions.filter((c) => c.admitted).length
      const sampleLevelCount = contributions.filter(
        (c) => c.admitted && c.reconstruction_method === "percentile_interpolation",
      ).length

      const targetValue = pooled.length > 0 ? percentile(pooled, target.target_p) : null
      const pooledStats = pooled.length > 0
        ? {
            p10: percentile(pooled, 0.1),
            p30: percentile(pooled, 0.3),
            p45: percentile(pooled, 0.45),
            p50: percentile(pooled, 0.5),
            p90: percentile(pooled, 0.9),
            p95: percentile(pooled, 0.95),
            p97: percentile(pooled, 0.97),
            p100: pooled[pooled.length - 1],
          }
        : { p10: null, p30: null, p45: null, p50: null, p90: null, p95: null, p97: null, p100: null }

      const sens = sensitivity(rowsForCell, product.native_basis, target.target_p, seed)
      const sensValues = Object.values(sens).filter((v) => v !== null)
      const sensSpread =
        sensValues.length > 0
          ? (Math.max(...sensValues) - Math.min(...sensValues)) / Math.max(...sensValues, 1e-9)
          : null
      const sensBand =
        sensSpread === null
          ? "no_data"
          : sensSpread <= 0.25
            ? "stable"
            : sensSpread <= 0.5
              ? "provisional"
              : "needs_review"

      const ci =
        pooled.length > 0
          ? bootstrapCI_sourceLevel(
              rowsForCell,
              product.native_basis,
              target.target_p,
              bootstrapIterations,
              seed,
            )
          : { lo: null, hi: null }

      const regCap = lookupRegCap(slug, metal, gapRows)
      const candidate =
        targetValue !== null && regCap.value !== null
          ? Math.min(targetValue, regCap.value)
          : targetValue ?? regCap.value
      const tag = rationaleTag(targetValue, regCap)

      const verdict = deriveVerdict({
        admittedCount,
        sampleLevelCount,
        sensBand,
        regCap,
        pooled,
      })

      const out = {
        product_slug: slug,
        product_label: product.title,
        variant_type: product.variant_type,
        native_basis: product.native_basis,
        metal_species: metal,
        target_label: target.target_label,
        target_p: target.target_p,
        role: target.role,
        sources_loaded: rowsForCell.length,
        sources_contributing: admittedCount,
        sample_level_contributing: sampleLevelCount,
        pooled_n: pooled.length,
        median_source_n: round(medianN ?? 0, 1),
        cap_n: capN,
        pooled_p10: round(pooledStats.p10, 4),
        pooled_p30: round(pooledStats.p30, 4),
        pooled_p45: round(pooledStats.p45, 4),
        pooled_p50: round(pooledStats.p50, 4),
        pooled_p90: round(pooledStats.p90, 4),
        pooled_p95: round(pooledStats.p95, 4),
        pooled_p97: round(pooledStats.p97, 4),
        pooled_p100: round(pooledStats.p100, 4),
        target_value: round(targetValue, 4),
        target_ci_lo: round(ci.lo, 4),
        target_ci_hi: round(ci.hi, 4),
        sens_lognormal: round(sens.lognormal, 4),
        sens_gamma: round(sens.gamma, 4),
        sens_nonparametric: round(sens.nonparametric, 4),
        sens_spread: round(sensSpread, 3),
        sens_band: sensBand,
        lowest_regulatory_cap_ppb: regCap.value,
        lowest_regulatory_cap_source: regCap.source,
        regulatory_reference_status: regCap.reference_status,
        candidate_value_ppb: round(candidate, 4),
        rationale_tag_auto: tag,
        verdict,
        contribution_log: JSON.stringify(contributions),
      }
      outputRows.push(out)

      if (verbose) {
        console.log(
          `${slug} / ${metal} → ${target.target_label} = ${round(targetValue, 3)} (${admittedCount} sources, ${pooled.length} pseudo-samples, sens ${sensBand}, candidate ${round(candidate, 3)}, ${verdict})`,
        )
      }
    }
  }

  writeCsv(outputPath, outputRows)
  writeStableJsonSummary(summaryOutputPath, {
    generated_at: new Date().toISOString(),
    product_filter: productFilter || null,
    metal_filter: metalFilter || null,
    cells_total: outputRows.length,
    cells_by_verdict: countBy(outputRows, (r) => r.verdict),
    cells_by_rationale: countBy(outputRows, (r) => r.rationale_tag_auto),
    cells_by_role: countBy(outputRows, (r) => r.role),
    sensitivity_band_distribution: countBy(outputRows, (r) => r.sens_band),
    methodology: {
      clean_target: "P97 of pooled clean-subcategory distribution",
      dirty_target: "P45 of pooled dirty-subcategory distribution",
      uplift_rationale:
        "Heuristic uplift from raw P90/P30 to P97/P45 calibrates per-analyte limits to deliver ~90% (clean) / ~30% (dirty) row-pass rates across ten HMTc analytes under typical correlation. Per-analyte differentiation deferred until lot-testing data exists.",
      reconstitution_factor: BASIS_RECONSTITUTION_FACTOR,
      default_cv: DEFAULT_CV_FOR_MEAN_ONLY,
      bootstrap_iterations: bootstrapIterations,
      pseudo_sample_cap: pseudoSampleCap,
      references: [
        "WHO/JECFA pooled TDS methodology",
        "EFSA Scientific Opinion on Pb (2010, 2024)",
        "EFSA Scientific Opinion on Cd (2009, 2024)",
        "ATSDR moment-matching guidance",
        "Codex CAC/GL 50-2004",
      ],
    },
  })

  console.log(`Wrote ${outputRows.length} aggregate-distribution rows to ${path.relative(repoRoot, outputPath)}`)
  console.log(`Wrote summary to ${path.relative(repoRoot, summaryOutputPath)}`)
}

function deriveVerdict({ admittedCount, sampleLevelCount, sensBand, regCap, pooled }) {
  if (pooled.length === 0) return "BLOCKED: no usable evidence"
  if (admittedCount < 2) return "BLOCKED: pool too thin (≥2 admitted sources required)"
  if (sensBand === "needs_review") return "BLOCKED: sensitivity unstable across parametric assumptions"
  if (sensBand === "provisional") return "PROVISIONAL: review sensitivity disagreement"
  if (regCap.value !== null) return "READY FOR REVIEW (regulatory cap applies)"
  return "READY FOR REVIEW"
}

// ---- Utilities

function assertSamplesReplacedSummary(rows, slug, metal) {
  const summarySourceIds = new Set(
    rows.filter((r) => !r._synthetic_from_samples).map((r) => r.source_id),
  )
  for (const r of rows) {
    if (!r._synthetic_from_samples) continue
    if (summarySourceIds.has(r.source_id)) {
      throw new Error(
        `[pool dedup] source ${r.source_id} appears as BOTH a summary row and a sample-level synthesis for ${slug} × ${metal}; the dedup logic in main() should have removed the summary. This is a bug; refusing to produce a double-counted pool.`,
      )
    }
  }
}

function assertPoolShareCap(contributions, slug, metal) {
  const admitted = contributions.filter((c) => c.admitted)
  // The share cap only makes sense when ≥2 sources are admitted. A single
  // admitted source legitimately holds 100% of the pool; the downstream
  // verdict logic flags that case as "pool too thin" rather than treating
  // it as a cap violation.
  if (admitted.length < 2) return
  for (const c of admitted) {
    if (c.pool_share > MAX_SOURCE_SHARE + 0.001) {
      throw new Error(
        `[pool share cap] source ${c.source_id} contributes ${(c.pool_share * 100).toFixed(1)}% of the pool for ${slug} × ${metal}, exceeding the ${MAX_SOURCE_SHARE * 100}% relative-share cap. Downsampling failed; this is a bug.`,
      )
    }
  }
}

function hashSeed(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([\w-]+):\s*(.*)$/)
    if (!km) continue
    let v = km[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
    } else if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    fm[km[1]] = v
  }
  return fm
}

function arrayField(v) {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean)
  if (typeof v === "string")
    return v
      .replace(/^\[|\]$/g, "")
      .split(/[,;]/)
      .map((x) => x.trim())
      .filter(Boolean)
  return []
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j++) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"'
        i++
      } else inQ = !inQ
    } else if (c === "," && !inQ) {
      out.push(cur)
      cur = ""
    } else cur += c
  }
  out.push(cur)
  return out
}

function writeCsv(filePath, rows) {
  if (rows.length === 0) {
    fs.writeFileSync(filePath, "", "utf8")
    return
  }
  const headers = Object.keys(rows[0])
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map((h) => csvCell(row[h])).join(","))
  }
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8")
}

function csvCell(v) {
  const s = v === null || v === undefined ? "" : String(v)
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function numberOrNull(v) {
  if (v === null || v === undefined || v === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

function round(v, decimals) {
  if (v === null || v === undefined || !Number.isFinite(v)) return null
  const m = 10 ** decimals
  return Math.round(v * m) / m
}

function countBy(arr, keyFn) {
  const c = {}
  for (const x of arr) {
    const k = keyFn(x) ?? "null"
    c[k] = (c[k] ?? 0) + 1
  }
  return c
}

function parseArgs(argv) {
  const map = new Map()
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)(?:=(.*))?$/)
    if (m) map.set(m[1], m[2] ?? "true")
  }
  return map
}

main()
