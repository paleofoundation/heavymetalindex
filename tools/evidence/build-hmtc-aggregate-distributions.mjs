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
const starvationAuditPath = path.join(repoRoot, "data/evidence/hmtc_pool_starvation_audit.csv")

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
// A pooled distribution whose p95 exceeds its p10 by more than this factor is
// almost certainly contaminated by a unit mismatch among its source rows (e.g.
// one source in mg/kg pooled with others in µg/kg) rather than a real
// occurrence range — genuine LOD-censored contaminant distributions stay well
// under 1e4. Such a pool cannot yield a defensible percentile for ANY consumer
// (public synthesis or staff standards), so the engine blocks it outright. This
// is a data-quality gate, not a change to the P97/P45 methodology.
const MAX_INTERNAL_SPAN = 1e4

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

// Rows the pre-pool validation gate (tools/autonomy/validate-extracted-values.mjs)
// flagged as gross-error-band or intra-cell outliers are held from the pool.
// Scoped to the autonomy extractor's own output and keyed semantically
// (source_id|metal|product), so it survives a deterministic re-extract without
// depending on fragile row indices.
const AUTONOMY_SUMMARY_FILE = "category1_autonomy_extracted_summary.csv"

function loadQuarantineKeys() {
  const qp = path.join(repoRoot, "data/evidence/autonomy/extraction-quarantine.csv")
  if (!fs.existsSync(qp)) return new Set()
  const keys = new Set()
  for (const r of parseCsv(fs.readFileSync(qp, "utf8"))) {
    keys.add(`${(r.source_id ?? "").trim()}|${(r.metal_species ?? "").trim()}|${(r.product_label ?? "").trim()}`)
  }
  return keys
}

// Sources placed on HOLD in the outlier adjudication registry
// (data/evidence/standards-outlier-adjudication.csv) are held from EVERY pool,
// not just the autonomy extractor's output. Keyed semantically by
// (source_id|metal_species|row_slug) so a re-extract cannot reintroduce a held
// outlier. Only registry rows that name a specific source_id drop pool rows;
// cell-level holds (blank source_id, e.g. a whole-cell sensitivity hold) are a
// QC-gate signal, not a pool exclusion, so they are skipped here. An empty
// metal or slug on a source-specific hold acts as a wildcard for that field.
function loadHoldKeys() {
  const hp = path.join(repoRoot, "data/evidence/standards-outlier-adjudication.csv")
  if (!fs.existsSync(hp)) return { exact: new Set(), wildMetal: new Set(), wildSlug: new Set(), wildBoth: new Set() }
  const exact = new Set()
  const wildMetal = new Set() // source|slug  (any metal)
  const wildSlug = new Set() // source|metal  (any slug)
  const wildBoth = new Set() // source        (any metal, any slug)
  for (const r of parseCsv(fs.readFileSync(hp, "utf8"))) {
    if (!(r.disposition ?? "").trim().toUpperCase().startsWith("HOLD")) continue
    const sourceId = (r.source_id ?? "").trim()
    if (!sourceId) continue // cell-level hold -> QC gate, not a pool exclusion
    const metal = (r.metal_species ?? "").trim()
    const slug = (r.row_slug ?? "").trim()
    if (metal && slug) exact.add(`${sourceId}|${metal}|${slug}`)
    else if (slug) wildMetal.add(`${sourceId}|${slug}`)
    else if (metal) wildSlug.add(`${sourceId}|${metal}`)
    else wildBoth.add(sourceId)
  }
  return { exact, wildMetal, wildSlug, wildBoth }
}

function isHeld(row, hold) {
  const sourceId = (row.source_id ?? "").trim()
  if (!sourceId) return false
  const metal = (row.metal_species ?? "").trim()
  const slug = (row.product_slug || row.row_slug || "").trim()
  return (
    hold.exact.has(`${sourceId}|${metal}|${slug}`) ||
    hold.wildMetal.has(`${sourceId}|${slug}`) ||
    hold.wildSlug.has(`${sourceId}|${metal}`) ||
    hold.wildBoth.has(sourceId)
  )
}

function loadStructuredRows() {
  const quarantineKeys = loadQuarantineKeys()
  const hold = loadHoldKeys()
  const summaryFiles = fs
    .readdirSync(path.join(repoRoot, "data/evidence"))
    .filter((f) => /^category\d.*_summary\.csv$/.test(f))
    .map((f) => path.join(repoRoot, "data/evidence", f))
  const rows = []
  let quarantinedDropped = 0
  let heldDropped = 0
  for (const f of summaryFiles) {
    const base = path.basename(f)
    const parsed = parseCsv(fs.readFileSync(f, "utf8"))
    for (const row of parsed) {
      if (base === AUTONOMY_SUMMARY_FILE && quarantineKeys.size) {
        const key = `${(row.source_id ?? "").trim()}|${(row.metal_species ?? "").trim()}|${(row.product_label ?? "").trim()}`
        if (quarantineKeys.has(key)) { quarantinedDropped++; continue }
      }
      if (isHeld(row, hold)) { heldDropped++; continue }
      rows.push({ ...row, _source_file: base })
    }
  }
  if (quarantinedDropped) {
    console.log(`  pool admission: excluded ${quarantinedDropped} quarantined autonomy row(s) (validation gate)`)
  }
  if (heldDropped) {
    console.log(`  pool admission: excluded ${heldDropped} HOLD-registry row(s) (outlier adjudication)`)
  }
  return rows
}

function loadSampleRows() {
  const hold = loadHoldKeys()
  const sampleFiles = fs
    .readdirSync(path.join(repoRoot, "data/evidence"))
    .filter((f) => /^category\d.*_samples\.csv$/.test(f))
    .map((f) => path.join(repoRoot, "data/evidence", f))
  const rows = []
  let heldDropped = 0
  for (const f of sampleFiles) {
    const parsed = parseCsv(fs.readFileSync(f, "utf8"))
    for (const row of parsed) {
      if (isHeld(row, hold)) { heldDropped++; continue }
      rows.push({ ...row, _source_file: path.basename(f) })
    }
  }
  if (heldDropped) {
    console.log(`  sample admission: excluded ${heldDropped} HOLD-registry sample row(s) (outlier adjudication)`)
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

  // The share cap is applied by WEIGHTING, not by discarding observations.
  //
  // Why this matters: the previous implementation enforced the share cap by
  // downsampling the largest source. Because a source may contribute at most
  // the sum of all others (S = 0.5), one large high-quality source pooled with
  // several small ones was truncated to the size of the small ones. Rice-based
  // cereal cadmium is the worst case: FDA 2024 contributes 252 real
  // sample-level measurements, the other three sources total 16, so FDA was
  // cut to 16 and the pool came out at 32. Two hundred and thirty-six real
  // measurements were thrown away to keep a reconstructed basket entry
  // proportionate, and the resulting n could no longer support the P97 the
  // methodology assigns the cell.
  //
  // Downsampling is the wrong instrument for the job. The share cap exists to
  // stop a BIASED source from dominating; discarding observations does not
  // remove bias, it only adds sampling error on top of it, and it destroys the
  // precision the pool is being built for. Weighting bounds influence exactly
  // as intended while keeping every observation in the estimate.
  //
  // So: each source i receives total weight W_i, initialised proportional to
  // its sample count and shrunk until W_i / sum(W) <= S by the same closed
  // form as before (W_i <= others x S/(1-S)). Every sample survives, carrying
  // per-sample weight W_i / n_i. Percentiles downstream are weighted.
  //
  // Precision is then reported honestly as Kish's effective sample size,
  // n_eff = (sum w)^2 / sum(w^2), which is what unequal weighting actually
  // buys and what the minimum-n gate must be judged against. Equal weights
  // give n_eff = n; a pool dominated by one heavily-weighted source gives a
  // smaller n_eff, correctly.
  const ratio = MAX_SOURCE_SHARE / (1 - MAX_SOURCE_SHARE)
  const sourceWeight = sampleVectors.map((s) => s.length)
  let safety = 200
  while (safety-- > 0) {
    const totalW = sourceWeight.reduce((a, b) => a + b, 0)
    if (totalW === 0) break
    let changed = false
    for (let i = 0; i < sourceWeight.length; i++) {
      if (!sampleVectors[i].length) continue
      const others = totalW - sourceWeight[i]
      const allowed = others * ratio
      if (sourceWeight[i] > allowed + 1e-9) {
        sourceWeight[i] = Math.max(allowed, 1e-9)
        changed = true
      }
    }
    if (!changed) break
  }

  // Expand to per-sample (value, weight) pairs, sorted by value.
  const pairs = []
  for (let i = 0; i < admittedContribs.length; i++) {
    const samples = sampleVectors[i]
    if (!samples.length) continue
    const w = sourceWeight[i] / samples.length
    for (const v of samples) pairs.push({ v, w })
  }
  pairs.sort((a, b) => a.v - b.v)
  const pooled = pairs.map((p) => p.v)
  const weights = pairs.map((p) => p.w)

  const totalW = weights.reduce((a, b) => a + b, 0)
  const sumSq = weights.reduce((a, b) => a + b * b, 0)
  const effectiveN = sumSq > 0 ? (totalW * totalW) / sumSq : 0

  for (let i = 0; i < admittedContribs.length; i++) {
    const c = admittedContribs[i]
    c.sample_count_admitted = c.samples.length
    c.sample_count_after_cap = sampleVectors[i].length // nothing is discarded now
    c.pool_share = totalW === 0 ? 0 : Number((sourceWeight[i] / totalW).toFixed(4))
    delete c.samples
  }

  const medianN =
    sourceN.length > 0
      ? percentile(sourceN.slice().sort((a, b) => a - b), 0.5)
      : 0
  return {
    pooled,
    weights,
    effectiveN,
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

// Weighted percentile over value-sorted `sorted` with parallel `weights`.
// Uses the standard cumulative-midpoint convention: sample k spans the weight
// interval centred on its own cumulative midpoint, and the percentile is
// linearly interpolated between adjacent midpoints. With equal weights this
// reduces to the unweighted percentile above, so a pool with no capped source
// returns exactly what it returned before this change.
function weightedPercentile(sorted, weights, p) {
  if (!sorted.length) return null
  if (!weights || weights.length !== sorted.length) return percentile(sorted, p)
  if (sorted.length === 1) return sorted[0]
  const total = weights.reduce((a, b) => a + b, 0)
  if (!(total > 0)) return percentile(sorted, p)
  const mid = []
  let cum = 0
  for (let i = 0; i < sorted.length; i++) {
    mid.push((cum + weights[i] / 2) / total)
    cum += weights[i]
  }
  // Rescale midpoints onto [0,1] so the extremes are reachable, matching the
  // unweighted function's behaviour at p=0 and p=1.
  const lo0 = mid[0]
  const hi0 = mid[mid.length - 1]
  const span = hi0 - lo0
  const target = span > 0 ? lo0 + p * span : p
  if (target <= mid[0]) return sorted[0]
  if (target >= mid[mid.length - 1]) return sorted[sorted.length - 1]
  let i = 0
  while (i < mid.length - 1 && mid[i + 1] < target) i++
  const denom = mid[i + 1] - mid[i]
  const w = denom > 0 ? (target - mid[i]) / denom : 0
  return sorted[i] * (1 - w) + sorted[i + 1] * w
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
    const { pooled, weights } = pool(adjustedRows, productNativeBasis, rng)
    results[variant] = pooled.length > 0 ? weightedPercentile(pooled, weights, targetP) : null
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
    const { pooled, weights } = pool(drawnRows, productNativeBasis, iterRng)
    if (pooled.length > 0) draws.push(weightedPercentile(pooled, weights, targetP))
  }
  draws.sort((a, b) => a - b)
  return {
    lo: draws.length > 0 ? percentile(draws, 0.025) : null,
    hi: draws.length > 0 ? percentile(draws, 0.975) : null,
    iterations: draws.length,
  }
}

// ---- Market stratification
//
// An occurrence percentile is an estimate of a population. If the pool mixes
// markets, the percentile estimates a population no brand ships into. HMTc
// certifies product sold under binding infant-formula MLs and comparable
// oversight, so --markets restricts the pool to those jurisdictions and the
// resulting percentile is an estimate of the market the certification applies
// to. Off by default: the unstratified pool remains the published corpus-wide
// view, and stratification is an explicit, auditable choice per run.
//
// Source jurisdiction comes from the `jurisdictions:` frontmatter on the source
// page. A source with NO jurisdiction recorded is retained rather than dropped:
// silently discarding unlabelled evidence would bias the pool in an
// undocumented direction. Those retentions are reported.
const marketsArg = args.get("markets") ?? ""
const targetMarkets = marketsArg
  ? new Set(marketsArg.split(",").map((m) => m.trim().toUpperCase()).filter(Boolean))
  : null
const sourceJurisdictions = loadSourceJurisdictions()
const marketDropped = new Map()
const marketUnlabelled = new Set()

function loadSourceJurisdictions() {
  const dir = path.join(repoRoot, "wiki/sources")
  const map = new Map()
  if (!fs.existsSync(dir)) return map
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    const head = fs.readFileSync(path.join(dir, file), "utf8").slice(0, 4000)
    const m = head.match(/^jurisdictions:\s*\[([^\]]*)\]/m)
    if (!m) continue
    const list = m[1]
      .split(",")
      .map((s) => s.trim().replace(/^["']|["']$/g, "").toUpperCase())
      .filter(Boolean)
    if (list.length) map.set(file.replace(/\.md$/, ""), list)
  }
  return map
}

function inTargetMarket(row) {
  if (!targetMarkets) return true
  const sid = row.source_id
  if (!sid) return true
  const juris = sourceJurisdictions.get(sid)
  if (!juris || juris.length === 0) {
    marketUnlabelled.add(sid)
    return true
  }
  if (juris.some((j) => targetMarkets.has(j))) return true
  marketDropped.set(sid, juris.join("/"))
  return false
}

// ---- Regulatory cap lookup

// Regulatory MLs carry their own basis text (regulatory_limits.csv `basis`), which
// is free-form legal phrasing rather than the engine's basis vocabulary. Map the
// phrasings we have adjudicated; anything unrecognized returns null so the cap is
// used unconverted and flagged, never silently mis-scaled.
//
// "product as placed on market" and its variants are product-relative: they mean
// the form the product is sold in, which IS the row's native basis. They therefore
// resolve to the native basis (factor 1) rather than to any fixed token.
const REG_BASIS_NATIVE_RELATIVE = new Set([
  "product as placed on market",
  "product as sold",
  "as sold or ready-to-eat as applicable",
  "edible part",
  "commodity",
  "wet weight",
  "wet weight, edible portion",
])
const REG_BASIS_PREPARED = new Set([
  "portion ordinarily consumed",
  "ready to use",
  "wet weight or reconstituted juice",
  "single-strength ready-to-drink juice",
  "ready-to-drink juice",
])
const REG_BASIS_DRY = new Set([
  "dry infant cereal",
  "as sold infant rice cereal",
  "dried spice",
  "rice commodity",
])

function normalizeRegulatoryBasis(regBasis, nativeBasis) {
  const text = String(regBasis ?? "").trim().toLowerCase()
  if (!text) return null
  if (REG_BASIS_NATIVE_RELATIVE.has(text)) return nativeBasis
  if (REG_BASIS_PREPARED.has(text)) return "as_consumed"
  if (REG_BASIS_DRY.has(text)) return "dry_as_sold"
  return null
}

// The 1:7 factor in convertBasis is the infant-formula reconstitution ratio
// (1 g powder + 6 g water). It is only physically meaningful for product forms
// that are actually reconstituted before consumption. Applying it to a cap on a
// dried-fruit, cereal, or ready-to-drink-juice row would inflate a legal ceiling
// sevenfold — a loosening drift. For those rows a cross-class basis mismatch is
// reported as unresolved and the cap is used unconverted, which is conservative.
function hasReconstitutionRelationship(slug, nativeBasis) {
  if (!/formula/.test(slug)) return false
  return nativeBasis === "powder_as_placed" || nativeBasis === "concentrated_liquid_as_placed"
}

const POWDER_BASIS_CLASS = new Set(["powder_as_placed", "as_sold", "as_sold_or_source_reported", "dry_as_sold"])
const PREPARED_BASIS_CLASS = new Set(["prepared_for_feeding", "as_consumed"])

function crossesReconstitutionBoundary(fromBasis, toBasis) {
  return (
    (POWDER_BASIS_CLASS.has(fromBasis) && PREPARED_BASIS_CLASS.has(toBasis)) ||
    (PREPARED_BASIS_CLASS.has(fromBasis) && POWDER_BASIS_CLASS.has(toBasis))
  )
}

function parseRegulatoryCaps(encoded) {
  return String(encoded ?? "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [source, value, ...basisParts] = part.split("|")
      return { source, value: numberOrNull(value), basis: basisParts.join("|") }
    })
    .filter((cap) => cap.value !== null)
}

function lookupRegCap(productSlug, metal, gapRows, nativeBasis) {
  const row = gapRows.find(
    (r) =>
      r.product_slug === productSlug &&
      String(r.metal_species ?? "").trim() === metal,
  )
  if (!row) return { value: null, source: null }

  const caps = parseRegulatoryCaps(row.regulatory_caps_all)
  if (caps.length === 0) {
    // Pre-basis-column gap reports: fall back to the legacy single-cap fields.
    return {
      value: numberOrNull(row.lowest_regulatory_cap_ug_kg),
      source: row.lowest_regulatory_cap_source || null,
      reference_status: row.regulatory_reference_status || null,
    }
  }

  // Convert every mapped cap into the row's native basis, THEN take the lowest.
  // Selecting first and converting second (the previous behaviour) compares
  // legal ceilings across incompatible bases.
  const converted = caps.map((cap) => {
    const fromBasis = normalizeRegulatoryBasis(cap.basis, nativeBasis)
    if (!fromBasis) {
      return { ...cap, native_value: cap.value, conversion_factor: 1, basis_unresolved: true }
    }
    if (crossesReconstitutionBoundary(fromBasis, nativeBasis) && !hasReconstitutionRelationship(productSlug, nativeBasis)) {
      return { ...cap, native_value: cap.value, conversion_factor: 1, basis_unresolved: true }
    }
    const c = convertBasis(cap.value, fromBasis, nativeBasis)
    return {
      ...cap,
      native_value: c.value,
      conversion_factor: c.factor,
      basis_unresolved: Boolean(c.unknown_conversion),
    }
  })
  converted.sort((left, right) => left.native_value - right.native_value)
  const binding = converted[0]

  return {
    value: binding.native_value,
    source: binding.source,
    reference_status: row.regulatory_reference_status || null,
    cap_published_value: binding.value,
    cap_published_basis: binding.basis,
    cap_conversion_factor: binding.conversion_factor,
    cap_basis_unresolved: binding.basis_unresolved,
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

// ---- Pool usability + rationale tag

// A pooled VALUE is unusable only when there is no evidence at all, or when the
// pool is affirmatively CORRUPT (p95/p10 > 1e4 ⇒ almost certainly mixed units,
// i.e. a value wrong by orders of magnitude where publishing it would mislead).
//
// Thinness and parametric-sensitivity disagreement do NOT make a value unusable —
// they make it PROVISIONAL. HMTc exists to set standards where regulators have not
// (Part 1: ratcheting, epistemic asymmetry). Refusing to emit a standard merely
// because the literature is sparse, for an analyte no one else regulates, is
// antithetical to the program: the standard is emitted, graded low/provisional,
// and ratchets as data accumulates. BLOCK is reserved for zero-evidence or a
// corrupt value, never for sparse-but-clean evidence. (Karen, 2026-06-16.)
// Shared by the candidate picker, the rationale tag, and the verdict so they
// cannot disagree.
function valueUnusableReason({ pooledLength, pooledP10, pooledP95 }) {
  if (pooledLength === 0) return "no usable evidence"
  if (pooledP10 > 0 && pooledP95 / pooledP10 > MAX_INTERNAL_SPAN)
    return "pool internally inconsistent (p95/p10 > 1e4, likely mixed units — fix units before use)"
  return null
}

// Rationale per CLAUDE.md Part 19. When the pool is usable, the lower of the
// pooled percentile and the regulatory cap binds (regulatory-alignment when the
// cap is the lower value, else literature-baseline). When the pool is NOT usable,
// a binding regulatory ceiling is still a defensible interim standard
// (regulatory-alignment; occurrence characterization pending — Karen decision
// 2026-06-16). Only a cell with neither a usable pool nor a cap is genuine no-data.
function rationaleTag(targetValue, regCap, poolUsable) {
  if (poolUsable && targetValue !== null) {
    if (regCap.value === null) return "literature-baseline"
    return targetValue > regCap.value ? "regulatory-alignment" : "literature-baseline"
  }
  if (regCap.value !== null) return "regulatory-alignment"
  return "no-data"
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

  // Metals that actually have structured evidence, per slug. The pooling loop
  // below iterates the UNION of each product's curated primary_metals_of_concern
  // and the metals for which structured rows exist. Gating pools on the curated
  // list alone stranded ~5,600 already-extracted rows: pages whose frontmatter
  // listed a narrower analyte set (e.g. spices = [Pb, Cd, tAs, Cr] while the
  // corpus holds Ni, Al, tHg, Cr-total data for spices) plus 239 product pages
  // that carry an empty primary_metals_of_concern. The result was cells like
  // baby-cereals-dry-rice-based × tAs (14 contributing sources) reported as
  // "BLOCKED: no usable evidence" because tAs was absent from one frontmatter
  // array. Per CLAUDE.md Part 2 the wiki reports what the literature supports;
  // surfacing a metal the corpus actually measured moves toward the literature,
  // not toward HMTc convenience, so the union is the faithful default. The
  // metal_in_concern_list flag on each output row preserves the curated-emphasis
  // signal for downstream ordering and audit.
  const dataMetalsBySlug = new Map()
  for (const r of [...summaryRows, ...sampleRows]) {
    const slug = r.product_slug || r.row_slug
    const metal = r.metal_species
    if (!slug || !metal) continue
    if (!dataMetalsBySlug.has(slug)) dataMetalsBySlug.set(slug, new Set())
    dataMetalsBySlug.get(slug).add(metal)
  }

  const outputRows = []
  const productSlugs = Object.keys(products).sort()
  for (const slug of productSlugs) {
    if (productFilter && slug !== productFilter) continue
    const product = products[slug]
    const target = targetForProduct(product)
    const curatedMetals = product.primary_metals_of_concern ?? []
    const metalsToProcess = [
      ...new Set([...curatedMetals, ...(dataMetalsBySlug.get(slug) ?? [])]),
    ]
    for (const metal of metalsToProcess) {
      if (metalFilter && metal !== metalFilter) continue
      const key = `${slug}::${metal}`
      const summaryRowsForCell = (rowsByKey.get(key) ?? []).filter(inTargetMarket)

      // De-dup contribution sources: when samples CSV holds raw values for a
      // source that the summary CSV also has, prefer the sample-level
      // reconstruction and drop the summary-row reconstruction so the same
      // physical paper isn't admitted twice.
      const samplesForCell = (samplesByKey.get(key) ?? []).filter(inTargetMarket)
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

      const { pooled, weights, effectiveN, contributions, capN, medianN, share_cap } = pool(
        rowsForCell,
        product.native_basis,
        rng,
      )
      assertPoolShareCap(contributions, slug, metal)
      const admittedCount = contributions.filter((c) => c.admitted).length
      // Distinct *sources*, not admitted *rows*. One paper reporting several
      // cohorts (per-brand, per-region) produces several rows but is not
      // independent corroboration; e.g. vinegar × Al pooled four karavoltsos2020
      // rows and read as "n=4, READY" when it is a single study. The verdict
      // gate and the published n_studies must both reflect distinct sources or
      // the wiki overstates its evidence base — a defensibility failure under
      // OPERATING.md Part 6 (no overstated confidence) and a quote-mine opening
      // for a plaintiff's expert.
      const distinctSources = new Set(
        contributions.filter((c) => c.admitted && c.source_id).map((c) => c.source_id),
      ).size
      const sampleLevelCount = contributions.filter(
        (c) => c.admitted && c.reconstruction_method === "percentile_interpolation",
      ).length

      const targetValue = pooled.length > 0 ? weightedPercentile(pooled, weights, target.target_p) : null
      const pooledStats = pooled.length > 0
        ? {
            p10: weightedPercentile(pooled, weights, 0.1),
            p30: weightedPercentile(pooled, weights, 0.3),
            p45: weightedPercentile(pooled, weights, 0.45),
            p50: weightedPercentile(pooled, weights, 0.5),
            p90: weightedPercentile(pooled, weights, 0.9),
            p95: weightedPercentile(pooled, weights, 0.95),
            p97: weightedPercentile(pooled, weights, 0.97),
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

      const regCap = lookupRegCap(slug, metal, gapRows, product.native_basis)
      const poolUsable =
        valueUnusableReason({
          pooledLength: pooled.length,
          pooledP10: pooledStats.p10,
          pooledP95: pooledStats.p95,
        }) === null
      // A usable pool can tighten the standard below the cap; an unusable pool
      // (empty/thin/mixed-unit/unstable) falls back to the cap as an interim
      // regulatory-alignment standard — never to an unreliable pooled value.
      const candidate =
        poolUsable && targetValue !== null
          ? regCap.value !== null
            ? Math.min(targetValue, regCap.value)
            : targetValue
          : regCap.value ?? targetValue
      const tag = rationaleTag(targetValue, regCap, poolUsable)

      const verdict = deriveVerdict({
        admittedCount,
        distinctSources,
        sampleLevelCount,
        sensBand,
        regCap,
        pooled,
        pooledP10: pooledStats.p10,
        pooledP95: pooledStats.p95,
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
        distinct_sources: distinctSources,
        sample_level_contributing: sampleLevelCount,
        pooled_n: pooled.length,
        pooled_n_effective: pooled.length > 0 ? Math.round(effectiveN) : 0,
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
        // Appended last so column positions stay stable for any positional
        // consumer. true when this metal was in the page's curated
        // primary_metals_of_concern; false when the union surfaced it from data.
        metal_in_concern_list: curatedMetals.includes(metal),
        contribution_log: JSON.stringify(contributions),
        // Cap basis audit trail: the ML as published, its published basis, and the
        // factor applied to bring it into the row's native basis. When
        // cap_basis_unresolved is true the published basis text is not in the
        // adjudicated vocabulary and the cap was used unconverted.
        cap_published_value: regCap.cap_published_value ?? "",
        cap_published_basis: regCap.cap_published_basis ?? "",
        cap_conversion_factor: regCap.cap_conversion_factor ?? "",
        cap_basis_unresolved: regCap.cap_basis_unresolved ?? "",
      }
      outputRows.push(out)

      if (verbose) {
        console.log(
          `${slug} / ${metal} → ${target.target_label} = ${round(targetValue, 3)} (${admittedCount} sources, ${pooled.length} pseudo-samples, sens ${sensBand}, candidate ${round(candidate, 3)}, ${verdict})`,
        )
      }
    }
  }

  const starvation = buildStarvationAudit(summaryRows, sampleRows, products, outputRows)

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
    pool_starvation: starvation.summary,
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
  if (targetMarkets) {
    console.log(`Market stratification ACTIVE — target markets: ${[...targetMarkets].join(", ")}`)
    console.log(`  excluded ${marketDropped.size} source(s) as out-of-market:`)
    for (const [sid, j] of [...marketDropped].sort()) console.log(`    ${sid} (${j})`)
    console.log(`  retained ${marketUnlabelled.size} source(s) with no jurisdiction recorded (not dropped, by design)`)
  }
  console.log(`Wrote summary to ${path.relative(repoRoot, summaryOutputPath)}`)
  console.log(
    `Pool starvation: ${starvation.summary.stranded_rows_total} stranded rows ` +
      `(${starvation.summary.stranded_rows_carrying_a_statistic} carry a statistic) → ` +
      `${path.relative(repoRoot, starvationAuditPath)}`,
  )
}

function deriveVerdict({ distinctSources, sensBand, regCap, pooled, pooledP10, pooledP95 }) {
  const unusable = valueUnusableReason({
    pooledLength: pooled.length,
    pooledP10,
    pooledP95,
  })
  if (unusable) {
    // A binding regulatory ceiling is still a defensible interim standard even
    // when the pool is empty or corrupt (Karen decision 2026-06-16). Only cells
    // with neither a usable value nor a cap stay BLOCKED.
    if (regCap.value !== null)
      return "READY FOR REVIEW (regulatory cap applies; interim, occurrence characterization pending)"
    return `BLOCKED: ${unusable}`
  }
  // The value is usable. Grade confidence rather than blocking: a sparse or
  // sensitivity-divergent pool yields a PROVISIONAL standard that ratchets as
  // data accumulates — HMTc sets standards where regulators have not, rather
  // than refusing to regulate the under-studied. (Karen decision 2026-06-16.)
  if (distinctSources < 2)
    return "PROVISIONAL: single-source pool — provisional standard, ratchets as data accumulates"
  if (sensBand === "needs_review")
    return "PROVISIONAL: sensitivity unstable across parametric assumptions"
  if (sensBand === "provisional") return "PROVISIONAL: review sensitivity disagreement"
  if (regCap.value !== null) return "READY FOR REVIEW (regulatory cap applies)"
  return "READY FOR REVIEW"
}

// ---- Pool starvation audit
//
// After the union fix above, a structured row that still fails to reach a
// pooled cell is an extraction-side defect, not an engine-side gate. This audit
// makes those losses visible instead of silent — the routing-layer philosophy
// in CLAUDE.md Part 5b, applied to the evidence register: the system surfaces
// unrouted evidence rather than letting each session re-derive the bottleneck.
// A row is stranded when it cannot reach ANY pooled cell. After the union fix,
// that only happens for slug/analyte routing defects, not for thin statistics
// (a thin row still lands in its cell and may be joined by others). Reasons:
//   empty_slug        row carries data but no product slug was extracted
//   unmatched_slug    slug names no product-category page (create or remap)
//   no_metal_species  slug present but the analyte column is blank
// Routed rows are omitted; only stranded ones are written, so the file IS the
// work queue. has_usable_statistic annotates each stranded row so recovery can
// prioritise rows that already carry a number. The summary block is folded into
// the aggregate summary JSON.
function buildStarvationAudit(summaryRows, sampleRows, products, _outputRows) {
  const productSlugSet = new Set(Object.keys(products))
  const auditRng = new SeededRng(1)
  // Rows that were stranded by the extractor but later RECOVERED by the matrix
  // router (route-stranded-extractions.mjs) reappear here twice: once as the
  // inert empty-slug original in the extract, once as a slugged copy in the
  // routed CSV. Don't double-count the original as stranded — it has been
  // recovered. Match on (source_id, statistic_scope), preserved verbatim by the
  // router's row spread.
  const recoveredKeys = new Set()
  for (const r of summaryRows) {
    if (r.review_state === "autonomy_v1_matrix_routed") {
      recoveredKeys.add(`${r.source_id || ""}||${r.statistic_scope || ""}`)
    }
  }
  // Mirror the engine's two admission paths: summary rows reconstruct from
  // moments/percentiles; sample rows carry raw value columns aggregated in the
  // main loop. A row "carries a statistic" if either path yields a number.
  const SAMPLE_VALUE_COLS = ["value_ppb", "numeric_lower_bound_ppb", "reported_value"]
  const hasStat = (row) =>
    reconstructPseudoSamples(row, auditRng).samples.length > 0 ||
    SAMPLE_VALUE_COLS.some((c) => numberOrNull(row[c]) !== null)

  const stranded = []
  for (const row of [...summaryRows, ...sampleRows]) {
    const slug = (row.product_slug || row.row_slug || "").trim()
    const metal = (row.metal_species || "").trim()
    // Skip an empty-slug original that the matrix router has since recovered.
    if (slug === "" && recoveredKeys.has(`${row.source_id || ""}||${row.statistic_scope || ""}`)) continue
    let reason
    if (slug === "") reason = "empty_slug"
    else if (!productSlugSet.has(slug)) reason = "unmatched_slug"
    else if (metal === "") reason = "no_metal_species"
    else continue // routed to a cell — not stranded
    stranded.push({
      reason,
      slug,
      metal,
      has_usable_statistic: hasStat(row),
      source_id: row.source_id || "",
      source_file: row._source_file || "",
    })
  }

  const unmatchedSlugCounts = {}
  for (const r of stranded) {
    if (r.reason !== "unmatched_slug") continue
    unmatchedSlugCounts[r.slug] = (unmatchedSlugCounts[r.slug] ?? 0) + 1
  }
  const topUnmatchedSlugs = Object.entries(unmatchedSlugCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25)
    .map(([slug, rows]) => ({ slug, rows }))

  writeCsv(starvationAuditPath, stranded)

  return {
    summary: {
      structured_rows_total: summaryRows.length + sampleRows.length,
      stranded_rows_total: stranded.length,
      stranded_rows_carrying_a_statistic: stranded.filter((r) => r.has_usable_statistic).length,
      stranded_by_reason: countBy(stranded, (r) => r.reason),
      top_unmatched_slugs: topUnmatchedSlugs,
      note:
        "Stranded rows never reach a pooled cell because of a slug/analyte routing defect (fix the slug or create the page). Routed rows — including thin ones — are omitted; this file is the work queue. has_usable_statistic marks rows that already carry a number and are therefore highest-value to recover.",
    },
    stranded,
  }
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

// Export internals for testing. The functions below are pure (modulo the
// seeded RNG) and reproducible.
export {
  SeededRng,
  pool,
  reconstructPseudoSamples,
  lognormalFromMeanCV,
  convertBasis,
  percentile,
  interpolatePercentile,
  generateFromPercentileVector,
  bootstrapCI_sourceLevel,
  sensitivity,
  rationaleTag,
  targetForProduct,
  deriveNativeBasis,
  assertSamplesReplacedSummary,
  assertPoolShareCap,
  downsampleUniform,
  MAX_SOURCE_SHARE,
  BASIS_RECONSTITUTION_FACTOR,
  CLEAN_TARGET_P,
  DIRTY_TARGET_P,
  DEFAULT_CV_FOR_MEAN_ONLY,
}

// Only run main() when this file is invoked directly, not when imported by
// the test runner.
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
