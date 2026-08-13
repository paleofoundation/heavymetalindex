// Unit tests for the HMTc pooling engine. Run via `npm test`.
//
// Coverage focuses on the bug classes Karen surfaced and fixed in commit
// f4c801a (de-dup, share cap, source-level bootstrap, basis conversion,
// status mapping). The tests are property-style where possible: given
// known inputs, the engine produces values within expected ranges and
// the engine's own assertions hold.

import test, { describe } from "node:test"
import assert from "node:assert"

import {
  SeededRng,
  pool,
  reconstructPseudoSamples,
  lognormalFromMeanCV,
  convertBasis,
  percentile,
  interpolatePercentile,
  bootstrapCI_sourceLevel,
  deriveNativeBasis,
  assertSamplesReplacedSummary,
  assertPoolShareCap,
  downsampleUniform,
  MAX_SOURCE_SHARE,
  BASIS_RECONSTITUTION_FACTOR,
  DESCRIPTIVE_UPPER_TAIL_P,
  DEFAULT_CV_FOR_MEAN_ONLY,
} from "./build-hmtc-aggregate-distributions.mjs"

// --------------------------------------------------------------------------
// Descriptive occurrence constants (not certification methodology)
// --------------------------------------------------------------------------

describe("descriptive occurrence constants", () => {
  test("upper-tail sensitivity statistic = P95", () => {
    assert.strictEqual(DESCRIPTIVE_UPPER_TAIL_P, 0.95)
  })
  test("infant-formula reconstitution factor = 8", () => {
    assert.strictEqual(BASIS_RECONSTITUTION_FACTOR, 8)
  })
  test("max source share = 50%", () => {
    assert.strictEqual(MAX_SOURCE_SHARE, 0.5)
  })
  test("default CV for mean-only sources = 1.0 (EFSA/JECFA convention)", () => {
    assert.strictEqual(DEFAULT_CV_FOR_MEAN_ONLY, 1.0)
  })
})

// --------------------------------------------------------------------------
// Percentile math
// --------------------------------------------------------------------------

describe("percentile()", () => {
  test("p50 of [1..10] is between 5 and 6 (linear interp)", () => {
    const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const p50 = percentile(v, 0.5)
    assert.ok(p50 >= 5 && p50 <= 6, `p50=${p50}`)
  })
  test("p10 and p90 sandwich the bulk of [1..100]", () => {
    const v = Array.from({ length: 100 }, (_, i) => i + 1)
    assert.ok(percentile(v, 0.1) < 15)
    assert.ok(percentile(v, 0.9) > 85)
  })
  test("p95 > p90 strictly for a strictly increasing sample", () => {
    const v = Array.from({ length: 100 }, (_, i) => i + 1)
    assert.ok(percentile(v, 0.95) > percentile(v, 0.9))
  })
  test("returns null for empty input", () => {
    assert.strictEqual(percentile([], 0.5), null)
  })
})

// --------------------------------------------------------------------------
// Basis conversion (locked 8:1 and infant-formula-only)
// --------------------------------------------------------------------------

describe("convertBasis()", () => {
  test("infant-formula powder → prepared divides by 8", () => {
    const r = convertBasis(20, "powder_as_placed", "prepared_for_feeding", "infant-formula-powder-non-soy")
    assert.ok(Math.abs(r.value - 20 / 8) < 1e-9, `got ${r.value}`)
    assert.strictEqual(r.factor, 1 / BASIS_RECONSTITUTION_FACTOR)
  })
  test("infant-formula prepared → powder multiplies by 8", () => {
    const r = convertBasis(0.4, "prepared_for_feeding", "powder_as_placed", "infant-formula-powder-non-soy")
    assert.ok(Math.abs(r.value - 0.4 * 8) < 1e-9, `got ${r.value}`)
    assert.strictEqual(r.factor, BASIS_RECONSTITUTION_FACTOR)
  })
  test("same basis is identity", () => {
    const r = convertBasis(5, "as_sold", "as_sold")
    assert.strictEqual(r.value, 5)
    assert.strictEqual(r.factor, 1)
  })
  test("as_sold and powder_as_placed treated as within-class (factor 1)", () => {
    const r = convertBasis(5, "as_sold", "powder_as_placed")
    assert.strictEqual(r.value, 5)
    assert.strictEqual(r.factor, 1)
  })
  test("unknown → unknown passes through with flag", () => {
    const r = convertBasis(5, "exotic_basis", "powder_as_placed")
    assert.strictEqual(r.value, 5)
    assert.strictEqual(r.unknown_conversion, true)
  })
  test("non-formula cross-class conversion is not inferred", () => {
    const r = convertBasis(20, "dry_as_sold", "as_consumed", "baby-cereals-dry-rice-based")
    assert.strictEqual(r.value, 20)
    assert.strictEqual(r.factor, 1)
    assert.strictEqual(r.unknown_conversion, true)
  })
})

// --------------------------------------------------------------------------
// Pseudo-sample reconstruction
// --------------------------------------------------------------------------

describe("reconstructPseudoSamples()", () => {
  test("full p-vector + N uses percentile_interpolation", () => {
    const rng = new SeededRng(1)
    const row = {
      n: "100",
      p10_ppb: "1",
      p50_ppb: "5",
      p90_ppb: "20",
      p95_ppb: "30",
      p100_ppb: "50",
    }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "percentile_interpolation")
    assert.strictEqual(r.weak, false)
    assert.strictEqual(r.samples.length, 100)
  })

  test("mean + median + max + N uses log-normal moment-match (mean_median)", () => {
    const rng = new SeededRng(2)
    const row = { n: "50", mean_ppb: "10", median_ppb: "5", max_ppb: "100" }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "lognormal_mean_median")
    assert.strictEqual(r.samples.length, 50)
    // Generated mean should be in the right ballpark (within 2x given small N + log-normal variance)
    const m = r.samples.reduce((a, b) => a + b, 0) / r.samples.length
    assert.ok(m > 1 && m < 50, `mean of pseudo-samples = ${m}, expected near 10`)
  })

  test("mean only with N uses log-normal at default CV", () => {
    const rng = new SeededRng(3)
    const row = { n: "30", mean_ppb: "10" }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "lognormal_mean_only")
    assert.strictEqual(r.weak, true)
    assert.strictEqual(r.samples.length, 30)
  })

  test("LOD-censored lb/ub uses Tobit-style midpoint", () => {
    const rng = new SeededRng(4)
    const row = { mean_lb_ppb: "0", mean_ub_ppb: "10" }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "lognormal_lod_censored_midpoint")
    assert.ok(r.samples.length > 0)
  })

  test("range-only emits weak contribution", () => {
    const rng = new SeededRng(5)
    const row = { min: "1", max_ppb: "10" }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "uniform_range_only")
    assert.strictEqual(r.weak, true)
    for (const v of r.samples) assert.ok(v >= 1 && v <= 10)
  })

  test("no usable statistic returns empty samples", () => {
    const rng = new SeededRng(6)
    const row = { /* nothing */ }
    const r = reconstructPseudoSamples(row, rng)
    assert.strictEqual(r.method, "no_usable_statistic")
    assert.strictEqual(r.samples.length, 0)
  })
})

// --------------------------------------------------------------------------
// Pool() — the relative-share cap and dedup invariants
// --------------------------------------------------------------------------

describe("pool() relative-share cap", () => {
  test("a giant source is capped at the share cap when ≥2 sources are admitted", () => {
    const rng = new SeededRng(10)
    const rows = [
      // Giant source: N=1000, full p-vector.
      {
        source_id: "giant",
        basis: "as_sold",
        n: "1000",
        p10_ppb: "0",
        p50_ppb: "5",
        p90_ppb: "20",
        p95_ppb: "30",
        p100_ppb: "50",
      },
      // Small source: N=10, mean only.
      { source_id: "small_a", basis: "as_sold", n: "10", mean_ppb: "5" },
      // Another small: N=10, mean only.
      { source_id: "small_b", basis: "as_sold", n: "10", mean_ppb: "8" },
    ]
    const { pooled, contributions } = pool(rows, "as_sold", rng)
    assert.ok(pooled.length > 0, "pool produced samples")
    const giant = contributions.find((c) => c.source_id === "giant")
    assert.ok(giant.admitted)
    assert.ok(
      giant.pool_share <= MAX_SOURCE_SHARE + 0.001,
      `giant.pool_share=${giant.pool_share} should be ≤ ${MAX_SOURCE_SHARE}`,
    )
    // And the assertion helper agrees.
    assert.doesNotThrow(() =>
      assertPoolShareCap(contributions, "test-product", "test-metal"),
    )
  })

  test("a single admitted source legitimately holds 100% — assertion skips the share check", () => {
    const rng = new SeededRng(11)
    const rows = [
      {
        source_id: "only_source",
        basis: "as_sold",
        n: "50",
        p10_ppb: "0",
        p50_ppb: "5",
        p90_ppb: "20",
        p95_ppb: "30",
        p100_ppb: "50",
      },
    ]
    const { contributions } = pool(rows, "as_sold", rng)
    // The single source has pool_share = 1.0; the assertion must NOT throw.
    assert.doesNotThrow(() =>
      assertPoolShareCap(contributions, "test-product", "test-metal"),
    )
  })
})

describe("pool() dedup invariant", () => {
  test("assertSamplesReplacedSummary throws when same source has both summary and sample-level rows", () => {
    const bad = [
      { source_id: "X", basis: "as_sold", mean_ppb: "5", n: "10" },
      {
        source_id: "X",
        basis: "as_sold",
        mean_ppb: "5",
        n: "10",
        _synthetic_from_samples: true,
      },
    ]
    assert.throws(
      () => assertSamplesReplacedSummary(bad, "test-product", "test-metal"),
      /appears as BOTH a summary row and a sample-level synthesis/,
    )
  })

  test("multiple summary rows for the same source are legitimate (per-cohort)", () => {
    const ok = [
      { source_id: "almeida2022", basis: "as_sold", mean_ppb: "11", n: "1" },
      { source_id: "almeida2022", basis: "as_sold", mean_ppb: "16", n: "1" },
      { source_id: "almeida2022", basis: "as_sold", mean_ppb: "23", n: "1" },
    ]
    assert.doesNotThrow(() =>
      assertSamplesReplacedSummary(ok, "test-product", "test-metal"),
    )
  })
})

// --------------------------------------------------------------------------
// Source-level bootstrap — heterogeneous pool should give wider CI than homogeneous
// --------------------------------------------------------------------------

describe("bootstrapCI_sourceLevel()", () => {
  test("heterogeneous source pool yields wider CI than homogeneous pool", () => {
    // Homogeneous: three sources all reporting similar values.
    const homog = [
      { source_id: "a", basis: "as_sold", n: "50", mean_ppb: "10", median_ppb: "8", max_ppb: "30" },
      { source_id: "b", basis: "as_sold", n: "50", mean_ppb: "11", median_ppb: "9", max_ppb: "32" },
      { source_id: "c", basis: "as_sold", n: "50", mean_ppb: "9", median_ppb: "7", max_ppb: "28" },
    ]
    const ciHomog = bootstrapCI_sourceLevel(homog, "as_sold", 0.9, 100, 100)

    // Heterogeneous: three sources reporting wildly different values.
    const heterog = [
      { source_id: "a", basis: "as_sold", n: "50", mean_ppb: "1", median_ppb: "0.5", max_ppb: "5" },
      { source_id: "b", basis: "as_sold", n: "50", mean_ppb: "30", median_ppb: "25", max_ppb: "100" },
      { source_id: "c", basis: "as_sold", n: "50", mean_ppb: "100", median_ppb: "80", max_ppb: "400" },
    ]
    const ciHeterog = bootstrapCI_sourceLevel(heterog, "as_sold", 0.9, 100, 200)

    const widthHomog = ciHomog.hi - ciHomog.lo
    const widthHeterog = ciHeterog.hi - ciHeterog.lo
    assert.ok(
      widthHeterog > widthHomog * 2,
      `heterogeneous CI width ${widthHeterog.toFixed(2)} should be much wider than homogeneous ${widthHomog.toFixed(2)}`,
    )
  })
})

// --------------------------------------------------------------------------
// Native basis derivation (the source of Karen's "0.4 → 20" confusion)
// --------------------------------------------------------------------------

describe("deriveNativeBasis()", () => {
  test("powder slug maps to powder_as_placed", () => {
    assert.strictEqual(
      deriveNativeBasis("infant-formula-powder-non-soy", "clean_benchmark"),
      "powder_as_placed",
    )
  })
  test("RTF slug maps to as_consumed", () => {
    assert.strictEqual(
      deriveNativeBasis("infant-formula-rtf-liquid-non-soy", "clean_benchmark"),
      "as_consumed",
    )
  })
  test("dry cereal slug maps to dry_as_sold", () => {
    assert.strictEqual(
      deriveNativeBasis("baby-cereals-dry-rice-based", "contamination_platform"),
      "dry_as_sold",
    )
  })
  test("puree slug maps to as_consumed", () => {
    assert.strictEqual(
      deriveNativeBasis("root-vegetable-purees", "contamination_platform"),
      "as_consumed",
    )
  })
  test("juice slug maps to as_sold", () => {
    assert.strictEqual(
      deriveNativeBasis("fruit-juices-apple-containing", "contamination_platform"),
      "as_sold",
    )
  })
})

// --------------------------------------------------------------------------
// Determinism / reproducibility
// --------------------------------------------------------------------------

describe("determinism", () => {
  test("two runs with the same seed produce identical pseudo-samples", () => {
    const row = { n: "50", mean_ppb: "10", median_ppb: "5", max_ppb: "100" }
    const a = reconstructPseudoSamples(row, new SeededRng(42))
    const b = reconstructPseudoSamples(row, new SeededRng(42))
    assert.deepStrictEqual(a.samples, b.samples)
  })

  test("two runs with different seeds produce different pseudo-samples", () => {
    const row = { n: "50", mean_ppb: "10", median_ppb: "5", max_ppb: "100" }
    const a = reconstructPseudoSamples(row, new SeededRng(1))
    const b = reconstructPseudoSamples(row, new SeededRng(2))
    assert.notDeepStrictEqual(a.samples, b.samples)
  })
})

// --------------------------------------------------------------------------
// downsampleUniform — the building block for the share cap
// --------------------------------------------------------------------------

describe("downsampleUniform()", () => {
  test("returns input unchanged when target ≥ length", () => {
    const v = [1, 2, 3]
    assert.strictEqual(downsampleUniform(v, 10), v)
  })
  test("preserves spread when downsampling", () => {
    const v = Array.from({ length: 100 }, (_, i) => i)
    const down = downsampleUniform(v, 10)
    assert.strictEqual(down.length, 10)
    // Should span roughly the full input range.
    assert.ok(Math.max(...down) >= 80)
    assert.ok(Math.min(...down) <= 20)
  })
})
