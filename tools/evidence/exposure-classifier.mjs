/**
 * exposure-classifier.mjs — the occurrence-vs-exposure gate for the standards pooler.
 *
 * Problem it solves: the HMTc standards are per-analyte OCCURRENCE percentiles —
 * the concentration of a metal measured IN a food product. The corpus also holds
 * three other kinds of number that share the same ppb column but are NOT food
 * concentrations, and that silently poison an occurrence pool if admitted:
 *
 *   1. Biomarkers — metal measured in a person (hair, urine, blood, serum, nails).
 *      A hair total-mercury of 1.05 ppm is ~1050 ppb; extracted into a tHg pool it
 *      publishes a "1020 ppb formula mercury standard" that is physically impossible
 *      for a food. (tatsuta2024, statistic_scope "Hair THg (median ppm ...").
 *   2. Dietary-intake estimates — mass per kg body weight per day (ng/kg bw/day),
 *      a dose, not a concentration.
 *   3. Risk-assessment / Monte-Carlo model inputs — distribution parameters an
 *      author fed a probabilistic model, not measured samples. (shibata2016,
 *      matrices [risk-assessment-model, intake-estimate], EF-3 context-only.)
 *
 * The gate has two independent signals, either of which excludes a value:
 *
 *   Rule A (source-level): the source's frontmatter `matrices` are exposure/model
 *     ONLY — no food-concentration matrix present. Excludes the whole source.
 *     Catches pure modelling / biomonitoring papers (shibata).
 *   Rule B (row-level): the row's statistic description (statistic_scope / basis /
 *     notes) reads as a biomarker, an intake dose, or a model output. Excludes just
 *     that row, so a mixed source that ALSO reports genuine food concentrations
 *     keeps its concentration rows (tatsuta keeps its measured-food MeHg row but
 *     loses its hair-THg row).
 *
 * Every exclusion is auditable (written to standards-exposure-exclusions.csv by the
 * pooler) and overridable (data/evidence/routing-exposure-only.csv: action=keep
 * force-admits, action=exclude force-drops), so a false positive is a one-line fix,
 * not a silent data loss. This module is pure logic; the pooler owns all file I/O.
 */

// Matrices that are NOT a food-concentration measurement. A source whose matrices
// are ALL drawn from this set carries no occurrence evidence and is excluded whole.
// Deliberately EXCLUDES `breast-milk` and `human-milk` (those are an infant FOOD
// concentration, not a biomonitoring matrix) — a breast-milk biomarker is caught
// by the row-level scope regex instead.
export const EXPOSURE_MATRICES = new Set([
  "dietary-intake",
  "intake-estimate",
  "daily-intake",
  "intake",
  "exposure-estimate",
  "exposure-assessment",
  "exposure-model",
  "risk-assessment-model",
  "risk-assessment",
  "pbpk-model",
  "pbpk",
  "monte-carlo",
  "model",
  "modelled-exposure",
  "hair",
  "urine",
  "blood",
  "serum",
  "plasma",
  "toenail",
  "fingernail",
  "nail",
  "biomarker",
  "biomonitoring",
  "cord-blood",
  "meconium",
  "breast-milk-biomarker",
])

// Row-level statistic-description signals. Matched against statistic_scope, basis,
// and notes. Kept conservative: each term unambiguously names a biomarker matrix, a
// per-body-weight dose, or a risk/model output — none is a food-concentration idiom.
// (Ambiguous tokens like "MCL" and bare "exposure" are intentionally omitted; the
// override file handles the rare edge the regex misses.)
export const EXPOSURE_SCOPE_RE = new RegExp(
  [
    // biomarker matrices
    "\\bhair\\b",
    "\\burin(?:e|ary)\\b",
    "\\bwhole[-\\s]?blood\\b",
    "\\bblood\\s+(?:lead|mercury|cadmium|arsenic|level|concentration)",
    "\\bserum\\b",
    "\\bplasma\\b",
    "\\btoe[-\\s]?nail",
    "\\bfinger[-\\s]?nail",
    "\\bbiomarker",
    "\\bbiomonitor",
    "\\bcord\\s+blood\\b",
    "\\bmeconium\\b",
    "\\bbody\\s+burden\\b",
    // intake / dose (per body weight per time)
    "\\bdietary\\s+intake\\b",
    "\\bdaily\\s+intake\\b",
    "\\bestimated\\s+intake\\b",
    "\\bintake\\s+estimat",
    "\\bng/kg\\s*bw",
    "\\b[µu]g/kg\\s*bw",
    "\\bmg/kg\\s*bw",
    "/kg\\s*bw\\b",
    "\\bbw/day\\b",
    "\\bper\\s+kg\\s+body\\s*weight\\b",
    "\\bprovisional\\s+tolerable\\s+weekly\\s+intake\\b",
    // risk-assessment / model outputs
    "\\bmonte\\s*carlo\\b",
    "\\bprobabilistic\\b",
    "\\bmodell?ed\\b",
    "\\bhazard\\s+quotient\\b",
    "\\bmargin\\s+of\\s+exposure\\b",
    "\\breference\\s+dose\\b",
    "\\bslope\\s+factor\\b",
    "\\blifetime\\s+average\\s+daily\\s+dose\\b",
    "\\bchronic\\s+daily\\s+intake\\b",
    "\\baverage\\s+daily\\s+dose\\b",
  ].join("|"),
  "i",
)

/**
 * Classify a single pooled row against the gate. Pure — caller supplies the source
 * matrices (from frontmatter) and the row's text fields.
 *
 * @param {object} p
 * @param {string[]} [p.matrices]        source frontmatter matrices (lower-cased)
 * @param {string}   [p.statisticScope]  row statistic_scope
 * @param {string}   [p.basis]           row basis
 * @param {string}   [p.notes]           row notes
 * @returns {{exclude: boolean, rule: string, reason: string}}
 */
export function classifyExposure({ matrices, statisticScope, basis, notes } = {}) {
  const mats = (matrices ?? []).map((m) => String(m).trim().toLowerCase()).filter(Boolean)

  // Rule A — source is exposure/model ONLY (no concentration matrix present).
  if (mats.length > 0 && mats.every((m) => EXPOSURE_MATRICES.has(m))) {
    return {
      exclude: true,
      rule: "source-matrices",
      reason: `source carries only exposure/model matrices [${mats.join(", ")}] — no food-concentration matrix`,
    }
  }

  // Rule B — the row's own statistic reads as biomarker / intake dose / model output.
  const hay = [statisticScope, basis, notes].filter(Boolean).join(" \u2014 ")
  const m = hay.match(EXPOSURE_SCOPE_RE)
  if (m) {
    return {
      exclude: true,
      rule: "row-scope",
      reason: `row statistic is biomarker/intake/model, not a food concentration (matched "${m[0]}")`,
    }
  }

  return { exclude: false, rule: "", reason: "" }
}

/**
 * Resolve an override decision for a (source_id, metal, slug) triple against an
 * override registry. Same wildcard convention as the HOLD registry: a blank metal
 * or slug in the registry matches any. Returns "keep" | "exclude" | null.
 */
export function resolveOverride(sourceId, metal, slug, overrides) {
  if (!overrides || !sourceId) return null
  const sid = sourceId.trim()
  const met = (metal ?? "").trim()
  const slg = (slug ?? "").trim()
  const keys = [
    `${sid}|${met}|${slg}`,
    `${sid}||${slg}`,
    `${sid}|${met}|`,
    `${sid}||`,
  ]
  for (const k of keys) {
    if (overrides.has(k)) return overrides.get(k)
  }
  return null
}
