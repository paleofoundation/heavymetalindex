// Rice arsenic Ground Truth contract.
//
// Reads data/evidence/geo_hist.jsonl (geography, time, and practice fields)
// and joins each row back to the ledger record it points at. A row enters the
// public contract only when the ledger already has a sampling country, a
// sampling year, and inorganic or total arsenic on a rice matrix. No
// concentration is pooled, no year span is split, and no government limit is
// copied onto the contract.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"
import { parseCsv } from "./geo-hist.mjs"

const GENERATED_ON = "2026-09-26"
const ARSENIC_SPECIES = new Set(["iAs", "tAs"])
const ORGANIC_SPECIES = new Set(["oAs", "DMA", "MMA"])
const GRAIN_SLUGS = new Set(["rice", "rice-bulk-grain", "brown-rice", "white-rice", "rice-grain"])
const SAMPLE_MARKERS = [
  "fda_tds_fy2018_2020_element_results_samples.csv",
  "category1_fda_baby_food_compliance_samples.csv",
  "category1_formula_special_survey_samples.csv",
  "category5_fda2018_juice_pb_non_apple_samples.csv",
  "category5_fda2018_juice_pb_apple_containing_samples.csv",
  "category1_fda2016_infant_cereal_ias_samples.csv",
  "category5_grape_juice_inorganic_arsenic_samples.csv",
  "category5_apple_juice_arsenic_speciation_samples.csv",
  "category1_toledo2024_infant_cereal_brazil_samples.csv",
]
const REPORTED_NUMERIC = [
  "concentration_original",
  "concentration_ppb_equivalent",
  "reporting_limit_original",
  "reporting_limit_ppb_equivalent",
  "concentration_lower_bound_ppb",
  "concentration_upper_bound_ppb",
  "reported_value_ppb",
  "numeric_lower_bound_ppb",
  "mean_ppb",
  "median_ppb",
  "min_ppb",
  "max_ppb",
  "p50_ppb",
  "p90_ppb",
  "p95_ppb",
  "p100_ppb",
  "original_value",
  "normalized_value",
]
const PLACE_NAMES = [
  "Heilongjiang", "Anhui", "Jiangsu", "Hunan", "Guangdong", "Henan", "Yunnan",
  "Sichuan", "Hubei", "Jiangxi", "Zhejiang", "Guangxi", "Fujian", "Shandong",
  "Guizhou", "Shaanxi", "Liaoning", "Jilin", "Hainan", "Chongqing", "Chengdu",
  "Beijing", "Shanghai",
]

export function riceMatrixClass(matrix, foodText) {
  const slug = String(matrix || "").trim().toLowerCase()
  const food = String(foodText || "").trim()
  if (/non-rice|non_rice/.test(slug)) return null
  const slugHasRice = slug === "rice" || slug.includes("rice")
  const foodHasRice = /\brice\b/i.test(food) && !/\bnon-rice\b/i.test(food)
  if (!slugHasRice && !foodHasRice) return null
  if (!slugHasRice && foodHasRice) {
    if (slug === "mixed-meals" || slug.startsWith("mixed-meals")) return "rice_containing_mixture"
    if (!slug) return classFromFood(food)
    return null
  }
  if (GRAIN_SLUGS.has(slug)) return "rice_grain"
  if (slug.includes("cereal")) return "rice_cereal"
  if (slug.includes("mixed-meal")) return "rice_containing_mixture"
  return "rice_product"
}

function classFromFood(food) {
  if (/\bmixed\b/i.test(food) || /\band rice\b/i.test(food)) return "rice_containing_mixture"
  if (/\bcereal\b/i.test(food)) return "rice_cereal"
  if (/^\s*rice\b/i.test(food)) return "rice_grain"
  return "rice_product"
}

function foodTextOf(row) {
  if (!row) return ""
  return [
    row.tds_food_description,
    row.sample_description,
    row.food_name,
    row.product_label,
    row.matrix,
  ].filter((value) => value != null && String(value).trim() !== "").join(" ")
}

function foodLabelOf(row, matrix) {
  for (const key of ["tds_food_description", "sample_description", "food_name", "product_label"]) {
    const text = textOrNull(row?.[key])
    if (text) return text
  }
  const printedMatrix = textOrNull(row?.matrix)
  if (printedMatrix && printedMatrix !== matrix) return printedMatrix
  return matrix || ""
}

function plainNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (value == null) return null
  const text = String(value).trim()
  if (!text || !/^-?\d+(?:\.\d+)?$/.test(text)) return null
  return Number(text)
}

function textOrNull(value) {
  if (value == null) return null
  const text = String(value).trim()
  return text || null
}

function reportedFrom(row) {
  const reported = {}
  if (!row) return reported
  for (const key of REPORTED_NUMERIC) {
    const number = plainNumber(row[key])
    if (number != null) reported[key] = number
  }
  for (const key of ["units_original", "original_unit", "normalized_unit", "field_value_summary"]) {
    const text = textOrNull(row[key])
    if (text) reported[key] = text
  }
  reported.unit = textOrNull(row.unit) || textOrNull(row.field_unit) || textOrNull(row.original_unit) || textOrNull(row.normalized_unit)
  if (!reported.unit) delete reported.unit
  return reported
}

function hasReportedConcentration(reported) {
  if (reported.field_value_summary) return true
  return REPORTED_NUMERIC.some((key) => reported[key] != null)
}

function rowKind(rowId) {
  return SAMPLE_MARKERS.some((marker) => rowId.includes(marker)) ? "sample" : "summary"
}

function speciesOf(row) {
  return textOrNull(row?.metal_species) || ""
}

function sourceAnalyteLabel(row) {
  return textOrNull(row?.analyte) || textOrNull(row?.source_analyte) || textOrNull(row?.contaminant_name)
}

function loadValues(repoRoot) {
  const map = new Map()
  const file = path.join(repoRoot, "data/evidence/values.jsonl")
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    if (!line.trim()) continue
    const record = JSON.parse(line)
    if (record.value_id) map.set(record.value_id, record)
  }
  return map
}

function loadGeo(repoRoot) {
  const file = path.join(repoRoot, "data/evidence/geo_hist.jsonl")
  return fs.readFileSync(file, "utf8").split("\n").filter((line) => line.trim()).map((line) => JSON.parse(line))
}

function csvCache(repoRoot) {
  const cache = new Map()
  return (relativePath) => {
    if (cache.has(relativePath)) return cache.get(relativePath)
    const full = path.join(repoRoot, relativePath)
    const rows = parseCsv(fs.readFileSync(full, "utf8"))
    const byLine = new Map(rows.map((row) => [row.__line, row]))
    cache.set(relativePath, byLine)
    return byLine
  }
}

function ledgerRecord(geoRow, values, readCsv) {
  if (geoRow.row_id.startsWith("value:")) {
    return { record: values.get(geoRow.row_id.slice(6)) || null, ledgerPath: "data/evidence/values.jsonl" }
  }
  const match = geoRow.row_id.match(/^csv:(.+):(\d+)$/)
  if (!match) return { record: null, ledgerPath: "" }
  const relativePath = match[1]
  const line = Number(match[2])
  return { record: readCsv(relativePath).get(line) || null, ledgerPath: relativePath }
}

function countMap(rows, keyFn) {
  const counts = new Map()
  for (const row of rows) {
    const key = keyFn(row)
    counts.set(key, (counts.get(key) || 0) + 1)
  }
  return Object.fromEntries([...counts.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]))))
}

function chinaPlaceNotes(repoRoot) {
  const dir = path.join(repoRoot, "wiki/sources")
  const notes = []
  let cnJurisdictionEmptyLocation = 0
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(dir, file), "utf8")
    if (!/rice/i.test(raw)) continue
    if (!/arsen|iAs|tAs/.test(raw)) continue
    let data
    try {
      data = matter(raw).data
    } catch {
      continue
    }
    const metals = Array.isArray(data.metals) ? data.metals.map(String) : []
    const arsenic = metals.some((metal) => /^(iAs|tAs|As)$/i.test(metal) || /arsen/i.test(metal))
    if (!arsenic) continue
    const matrices = JSON.stringify(data.matrices || "")
    const title = String(data.title || "")
    const rice = /\brice\b/i.test(title) || /rice/i.test(matrices)
    if (!rice) continue
    const locations = data.sampling_locations
    const emptyLocations = locations == null || (Array.isArray(locations) && locations.length === 0) || locations === ""
    const jurisdictions = Array.isArray(data.jurisdictions) ? data.jurisdictions.map(String) : []
    if (jurisdictions.includes("CN") && emptyLocations) cnJurisdictionEmptyLocation += 1
    const population = String(data.sample_population || "")
    const haystack = `${title} ${population}`
    const places = PLACE_NAMES.filter((name) => new RegExp(`\\b${name}\\b`).test(haystack))
    if (!places.length || !emptyLocations) continue
    notes.push({
      source_id: data.cite_key || file.replace(/\.md$/, ""),
      source_page: `wiki/sources/${file}`,
      places,
      sampling_year_range: data.sampling_year_range ?? null,
      jurisdictions,
    })
  }
  notes.sort((a, b) => a.source_id.localeCompare(b.source_id))
  return { notes, cnJurisdictionEmptyLocation }
}

function contractRow(geoRow, record) {
  const matrix = textOrNull(geoRow.matrix) || textOrNull(record.row_slug) || textOrNull(record.product_matrix) || textOrNull(record.ingredient_slug) || textOrNull(record.product_slug) || ""
  const food = foodTextOf(record)
  const matrixClass = riceMatrixClass(matrix, food)
  const reported = reportedFrom(record)
  return {
    matrix,
    matrixClass,
    food,
    reported,
    row: {
      row_id: geoRow.row_id,
      ledger: geoRow.ledger,
      source_id: geoRow.source_id,
      source_page: geoRow.source_page || "",
      sampling_country: geoRow.sampling_country,
      sampling_region: geoRow.sampling_region || null,
      sampling_year_start: geoRow.sampling_year_start ?? null,
      sampling_year_end: geoRow.sampling_year_end ?? null,
      single_year: geoRow.sampling_year_start != null && geoRow.sampling_year_start === geoRow.sampling_year_end,
      practice: geoRow.practice || null,
      geo_precision: geoRow.geo_precision || null,
      geo_source: geoRow.geo_source || null,
      geo_provenance: geoRow.geo_provenance || {},
      metal_species: speciesOf(record),
      source_analyte_label: sourceAnalyteLabel(record),
      matrix,
      matrix_class: matrixClass,
      food_group: geoRow.food_group || "",
      food_label: foodLabelOf(record, matrix),
      basis: textOrNull(record.basis),
      n: plainNumber(record.n) ?? textOrNull(record.n),
      row_kind: rowKind(geoRow.row_id),
      statistic_type: textOrNull(record.statistic_type),
      statistic_scope: textOrNull(record.statistic_scope),
      result_status: textOrNull(record.result_status),
      censoring_status: textOrNull(record.censoring_status) || textOrNull(record.censoring_note),
      review_state: textOrNull(record.review_state),
      evidence_fitness_verdict: textOrNull(record.evidence_fitness_verdict),
      sample_id: textOrNull(record.sample_id),
      reported,
    },
  }
}

export function assembleRiceArsenicBaseline(repoRoot) {
  const geoRows = loadGeo(repoRoot)
  const values = loadValues(repoRoot)
  const readCsv = csvCache(repoRoot)
  const considered = []
  let joinedMiss = 0
  for (const geoRow of geoRows) {
    const maybe = geoRow.food_group === "Rice" || /rice/i.test(geoRow.matrix || "")
    if (!maybe) continue
    const { record } = ledgerRecord(geoRow, values, readCsv)
    if (!record) {
      joinedMiss += 1
      continue
    }
    const built = contractRow(geoRow, record)
    if (!built.matrixClass) continue
    if (!ARSENIC_SPECIES.has(built.row.metal_species) && !ORGANIC_SPECIES.has(built.row.metal_species)) continue
    considered.push({ geoRow, ...built })
  }

  const organic = considered.filter((item) => ORGANIC_SPECIES.has(item.row.metal_species))
  const arsenic = considered.filter((item) => ARSENIC_SPECIES.has(item.row.metal_species))
  const qualifying = []
  let missingConcentration = 0
  for (const item of arsenic) {
    const country = item.geoRow.sampling_country
    const year = item.geoRow.sampling_year_start ?? item.geoRow.sampling_year_end
    if (!country || year == null) continue
    if (!hasReportedConcentration(item.reported)) {
      missingConcentration += 1
      continue
    }
    qualifying.push(item.row)
  }
  qualifying.sort((a, b) => (
    a.sampling_country.localeCompare(b.sampling_country)
    || (a.sampling_year_start || 0) - (b.sampling_year_start || 0)
    || a.metal_species.localeCompare(b.metal_species)
    || a.matrix.localeCompare(b.matrix)
    || a.row_id.localeCompare(b.row_id)
  ))

  const valueGaps = []
  const geoSourceIds = new Set(arsenic.map((item) => item.geoRow.source_id))
  for (const record of values.values()) {
    if (record.claim_class !== "literature_finding") continue
    if (!ARSENIC_SPECIES.has(record.metal_species)) continue
    const matrix = record.product_matrix || ""
    if (!riceMatrixClass(matrix, "")) continue
    if (geoSourceIds.has(record.source_id)) continue
    valueGaps.push({
      value_id: record.value_id,
      source_id: record.source_id,
      metal_species: record.metal_species,
      product_matrix: matrix,
    })
  }
  valueGaps.sort((a, b) => a.source_id.localeCompare(b.source_id) || a.value_id.localeCompare(b.value_id))

  const places = chinaPlaceNotes(repoRoot)
  const missingCountry = arsenic.filter((item) => !item.geoRow.sampling_country)
  const countryWithoutYear = arsenic.filter((item) => item.geoRow.sampling_country && item.geoRow.sampling_year_start == null && item.geoRow.sampling_year_end == null)

  const counts = {
    geo_hist_rows: geoRows.length,
    rice_matrix_arsenic_rows_in_geo_hist: arsenic.length,
    qualifying_rows: qualifying.length,
    by_species: countMap(qualifying, (row) => row.metal_species),
    by_country: countMap(qualifying, (row) => row.sampling_country),
    by_matrix_class: countMap(qualifying, (row) => row.matrix_class),
    by_source: countMap(qualifying, (row) => row.source_id),
    single_year_rows: qualifying.filter((row) => row.single_year).length,
    year_span_rows: qualifying.filter((row) => !row.single_year).length,
    sampling_region_rows: qualifying.filter((row) => row.sampling_region).length,
    china_country_rows: qualifying.filter((row) => row.sampling_country === "CN").length,
    china_province_rows: qualifying.filter((row) => row.sampling_country === "CN" && row.sampling_region).length,
    practice_rows: qualifying.filter((row) => row.practice).length,
    organic_species_rows_excluded: organic.length,
    organic_by_species: countMap(organic, (item) => item.row.metal_species),
    missing_country_rows: missingCountry.length,
    missing_country_by_source: countMap(missingCountry, (item) => item.geoRow.source_id),
    country_without_year_rows: countryWithoutYear.length,
    country_without_year_by_source: countMap(countryWithoutYear, (item) => item.geoRow.source_id),
    missing_concentration_rows: missingConcentration,
    ledger_join_misses: joinedMiss,
    value_rows_for_sources_absent_from_geo_hist: valueGaps.length,
    value_gap_by_source: countMap(valueGaps, (row) => row.source_id),
    china_place_pages_with_empty_sampling_locations: places.notes.length,
    cn_jurisdiction_rice_arsenic_pages_with_empty_sampling_locations: places.cnJurisdictionEmptyLocation,
  }

  const contract = {
    schema_version: "1.0.0",
    generated_on: GENERATED_ON,
    generator: "tools/evidence/build-rice-arsenic-baseline.mjs",
    dependency: "data/evidence/geo_hist.jsonl from the geography, time, and practice ledger. Draft pull request 163, branch cursor/geo-hist-evidence-fields-e169.",
    filters: {
      population: "Rows in data/evidence/geo_hist.jsonl whose food_group is Rice or whose matrix contains rice.",
      rice_matrix: "Matrix slug contains rice, excluding slugs that contain non-rice. A mixed-meals slug qualifies only when the printed food name contains the word rice. An empty matrix qualifies only when the printed food name contains the word rice. Honey and cooking-oil slugs are not rice matrices.",
      species: "metal_species is exactly iAs or tAs. oAs, DMA, and MMA stay out. source_analyte_label is copied when the ledger printed one and is not used to relabel the species.",
      country: "sampling_country is present. Author affiliation, the jurisdictions array, an agency name, and a WHO region name are not sampling countries. Those exclusions were already applied by the geo-hist backfill.",
      year: "sampling_year_start or sampling_year_end is present. A start year that differs from the end year stays one row. The span is not expanded into calendar years.",
      concentration: "The joined ledger row has at least one copied numeric concentration field or a field_value_summary. No new statistic is computed.",
      not_copied: "FDA Total Diet Study collection region, regulatory summary fields, certification-program fields, and extraction notes are not copied. sampling_region stays null unless the geo-hist row already has one.",
    },
    counts,
    china_place_pages: places.notes,
    value_gaps: valueGaps,
    rows: qualifying,
  }
  return { contract, page: renderPage(contract), brief: renderBrief(contract), csv: renderCsv(qualifying) }
}

function csvCell(value) {
  if (value == null) return ""
  const text = typeof value === "object" ? JSON.stringify(value) : String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}

function renderCsv(rows) {
  const columns = [
    "row_id", "source_id", "source_page", "sampling_country", "sampling_region",
    "sampling_year_start", "sampling_year_end", "single_year", "metal_species",
    "source_analyte_label", "matrix", "matrix_class", "food_group", "food_label",
    "basis", "n", "row_kind", "statistic_type", "result_status", "censoring_status",
    "review_state", "evidence_fitness_verdict", "sample_id",
    "concentration_original", "concentration_ppb_equivalent", "reported_value_ppb",
    "numeric_lower_bound_ppb", "mean_ppb", "median_ppb", "min_ppb", "max_ppb",
    "original_value", "normalized_value", "unit", "field_value_summary",
  ]
  const lines = [columns.join(",")]
  for (const row of rows) {
    const flat = { ...row, ...row.reported, unit: row.reported.unit || "" }
    lines.push(columns.map((column) => csvCell(flat[column])).join(","))
  }
  return `${lines.join("\n")}\n`
}

function fmt(value) {
  return new Intl.NumberFormat("en-US").format(value)
}

function countryTable(rows) {
  const countries = [...new Set(rows.map((row) => row.sampling_country))].sort()
  const lines = ["| Sampling country | Inorganic arsenic rows | Total arsenic rows | Single-year rows | Year-span rows |", "| --- | ---: | ---: | ---: | ---: |"]
  for (const country of countries) {
    const subset = rows.filter((row) => row.sampling_country === country)
    lines.push(`| ${country} | ${subset.filter((row) => row.metal_species === "iAs").length} | ${subset.filter((row) => row.metal_species === "tAs").length} | ${subset.filter((row) => row.single_year).length} | ${subset.filter((row) => !row.single_year).length} |`)
  }
  return lines.join("\n")
}

function matrixTable(rows) {
  const classes = ["rice_grain", "rice_cereal", "rice_product", "rice_containing_mixture"]
  const lines = ["| Matrix class | Rows | Inorganic arsenic | Total arsenic |", "| --- | ---: | ---: | ---: |"]
  for (const matrixClass of classes) {
    const subset = rows.filter((row) => row.matrix_class === matrixClass)
    if (!subset.length) continue
    lines.push(`| ${matrixClass} | ${subset.length} | ${subset.filter((row) => row.metal_species === "iAs").length} | ${subset.filter((row) => row.metal_species === "tAs").length} |`)
  }
  return lines.join("\n")
}

function renderPage(contract) {
  const rows = contract.rows
  const c = contract.counts
  return `---
title: "Rice arsenic by country and year"
description: "Scaffold for a public baseline of inorganic arsenic and total arsenic in rice by sampling country and sampling year. China by province is not yet filled from the ledger."
type: baseline
status: scaffold
license: "© 2026 Paleo Certified, Inc. All rights reserved."
audience: [regulator, educator, consumer, researcher]
updated: ${GENERATED_ON}
data_downloads:
  - label: Qualifying ledger rows (JSON)
    path: static/data/rice-arsenic-ground-truth.json
  - label: Qualifying ledger rows (CSV)
    path: static/data/rice-arsenic-ground-truth.csv
---

# Rice arsenic by country and year

Operated by the Institute of Contaminant Standards.

This page is a scaffold for a public baseline of inorganic arsenic and total arsenic in rice, arranged by the country and year where the sample was taken, with a separate section for China by province. The concentration baseline is not yet filled from the ledger. The download lists each ledger row that already has a sampling country, a sampling year, and inorganic or total arsenic on a rice matrix. Rows are not pooled. A year span is not split into single years. No government limit is stated on this page.

© 2026 Paleo Certified, Inc. All rights reserved.

## What the ledger can support today

The qualifying set has ${fmt(c.qualifying_rows)} rows. ${fmt(c.by_species.iAs || 0)} are inorganic arsenic (iAs). ${fmt(c.by_species.tAs || 0)} are total arsenic (tAs). ${fmt(c.single_year_rows)} rows name a single sampling year. ${fmt(c.year_span_rows)} rows name a year span and stay as one row. Sampling region is filled on ${fmt(c.sampling_region_rows)} qualifying rows. Sampling country CN is filled on ${fmt(c.china_country_rows)} qualifying rows.

${countryTable(rows)}

${matrixTable(rows)}

Matrix class keeps rice grain, rice cereal, other rice products, and mixed meals that name rice apart from one another. A mixed meal is not a rice-grain result.

Downloads: [qualifying rows (JSON)](/static/data/rice-arsenic-ground-truth.json) · [qualifying rows (CSV)](/static/data/rice-arsenic-ground-truth.csv)

## Country by year

A cited country-by-year concentration baseline is not yet filled from the ledger. The table above counts rows. Concentration statistics stay in the download, in the form the ledger stored, on the basis the ledger stored.

## China by province

Not yet filled from the ledger. No qualifying row has an admin-1 region, and no qualifying row has sampling country CN. A collection region on a United States market-basket file is not a province and is not in the download.

## Inorganic and total arsenic

Inorganic arsenic and total arsenic stay in separate fields. The download contains those two species. Among the rice-matrix arsenic rows in the geography ledger, ${fmt(c.missing_country_rows)} have no sampling country. Those rows stay outside the qualifying download. The largest of those groups are the FDA baby-food compliance samples, the WHO GEMS/Food rice summaries, and the FDA 2016 infant-cereal inorganic arsenic samples. See [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[sources/who-gemsfood-heavy-metal-contaminants]], and [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]].

## Related pages

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
`
}

function sourceList(map, limit = 8) {
  return Object.entries(map).slice(0, limit).map(([source, count]) => `| ${source} | ${count} |`).join("\n")
}

function renderBrief(contract) {
  const c = contract.counts
  const places = contract.china_place_pages.slice(0, 25).map((note) => (
    `| ${note.source_id} | ${note.places.join(", ")} | ${(note.jurisdictions || []).join(", ") || ""} | ${note.sampling_year_range == null ? "" : JSON.stringify(note.sampling_year_range)} |`
  )).join("\n")
  const conflicts = contract.rows.filter((row) => row.statistic_scope && /HMR/i.test(row.statistic_scope) && row.matrix === "rice-bulk-grain")
  const conflictLines = conflicts.map((row) => `| ${row.row_id} | ${row.source_id} | ${row.metal_species} | ${row.matrix} | ${row.statistic_scope} |`).join("\n")
  return `---
title: Rice arsenic Ground Truth coverage
schema_version: 1.0.0
generated_on: ${GENERATED_ON}
---

# Rice arsenic Ground Truth coverage

Generated ${GENERATED_ON} by \`tools/evidence/build-rice-arsenic-baseline.mjs\`. This file is a coverage brief. It is not a public wiki page. It does not set a limit.

Operated by the Institute of Contaminant Standards.

© 2026 Paleo Certified, Inc. All rights reserved.

Depends on \`data/evidence/geo_hist.jsonl\` from draft pull request 163 (\`cursor/geo-hist-evidence-fields-e169\`). This brief does not retarget that work.

## Fields used

| Field | Where it was read |
| --- | --- |
| sampling_country, sampling_region, sampling_year_start, sampling_year_end, practice, geo_precision, geo_source, geo_provenance, food_group, matrix, source_id, source_page, row_id | \`data/evidence/geo_hist.jsonl\` |
| metal_species, basis, n, concentration and summary fields, censoring, result_status, review_state, food description | The CSV line or \`values.jsonl\` record named by \`row_id\` |

A row qualifies when all of the following are already true:

- The geo-hist row is a rice matrix. The matrix slug contains rice, and slugs containing non-rice are out. Mixed meals qualify only when the printed food name contains the word rice. An empty matrix qualifies only when the printed food name contains the word rice.
- \`metal_species\` is \`iAs\` or \`tAs\`.
- \`sampling_country\` is present.
- \`sampling_year_start\` or \`sampling_year_end\` is present.
- The joined record has a numeric concentration field or a \`field_value_summary\`.

## Counts after those filters

| Measure | Count |
| --- | ---: |
| geo_hist.jsonl rows | ${c.geo_hist_rows} |
| Rice-matrix iAs or tAs rows in geo_hist | ${c.rice_matrix_arsenic_rows_in_geo_hist} |
| Qualifying rows (country and year and concentration) | ${c.qualifying_rows} |
| Qualifying iAs | ${c.by_species.iAs || 0} |
| Qualifying tAs | ${c.by_species.tAs || 0} |
| Single-year qualifying rows | ${c.single_year_rows} |
| Year-span qualifying rows, not expanded | ${c.year_span_rows} |
| Qualifying rows with sampling_region | ${c.sampling_region_rows} |
| Qualifying rows with sampling_country CN | ${c.china_country_rows} |
| Qualifying China province rows | ${c.china_province_rows} |
| Qualifying rows with practice | ${c.practice_rows} |
| Organic arsenic rows on a rice matrix, excluded | ${c.organic_species_rows_excluded} |
| Rice-matrix iAs or tAs rows missing sampling_country | ${c.missing_country_rows} |
| Rice-matrix iAs or tAs rows with country and no year | ${c.country_without_year_rows} |
| Rows dropped for lack of a concentration field | ${c.missing_concentration_rows} |
| Value rows whose source is absent from the rice-arsenic geo-hist set | ${c.value_rows_for_sources_absent_from_geo_hist} |

Qualifying rows by source:

| Source | Rows |
| --- | ---: |
${sourceList(c.by_source, 20)}

## Gaps that block a fully cited baseline

### China by province

Qualifying China province rows: ${c.china_province_rows}. Qualifying sampling_country CN rows: ${c.china_country_rows}. The geography ledger did not copy an admin-1 name onto a qualifying rice arsenic row.

\`jurisdictions: [CN]\` is not a sampling country. ${c.cn_jurisdiction_rice_arsenic_pages_with_empty_sampling_locations} rice arsenic source pages carry jurisdiction CN and an empty \`sampling_locations\` array. The contract does not promote that array.

Source pages below name a Chinese place in the title or in \`sample_population\`, and the title or a matrix names rice, while \`sampling_locations\` is empty. The place names are not sampling_region values, and they are not in the download. A page can name a province and still omit a concentration for that province. Tian 2024's source page says the paper does not provide a per-province breakdown of the inorganic arsenic values. A province baseline needs both a copied admin-1 field and a concentration tied to that province.

| Source | Place names in title or sample_population | Jurisdictions | sampling_year_range |
| --- | --- | --- | --- |
${places || "|  |  |  |  |"}

### Inorganic arsenic versus total arsenic

The qualifying download has ${c.by_species.iAs || 0} inorganic arsenic rows and ${c.by_species.tAs || 0} total arsenic rows. ${contract.rows.filter((row) => row.metal_species === "iAs" && row.matrix_class === "rice_cereal").length} of the inorganic rows are rice cereal, and ${contract.rows.filter((row) => row.metal_species === "iAs" && row.sampling_country === "US").length} of the inorganic rows have sampling country US. Qualifying rice-grain rows with a sampling country other than US: ${contract.rows.filter((row) => row.matrix_class === "rice_grain" && row.sampling_country !== "US").length}. The next table lists sources that stored a country and no sampling year.

Country present, year absent:

| Source | Rows |
| --- | ---: |
${sourceList(c.country_without_year_by_source, 20) || "|  | 0 |"}

Year present, country absent (not qualifying):

| Source | Rows |
| --- | ---: |
${sourceList(c.missing_country_by_source, 12)}

WHO GEMS/Food region names were not copied as countries. FDA program names were not copied as the United States. FDA 2016 rows whose country-of-origin cell says Not Specified do not inherit a study-level country. Those rules belong to the geo-hist backfill. This brief does not relax them.

Literature findings whose source_id never appears in the rice-arsenic geo-hist set are an additional gap. They have a concentration and no copied country or year. They are not in the download.

| Source | Value rows |
| --- | ---: |
${sourceList(c.value_gap_by_source, 20)}

### Year spans and matrix class

${c.year_span_rows} qualifying rows have a start year different from the end year. They stay one row. Filling a single calendar year from a span would invent a year.

Matrix classes in the download are \`rice_grain\`, \`rice_cereal\`, \`rice_product\`, and \`rice_containing_mixture\`. Mixed meals that name rice are not rice grain. Infant cereal that also names another grain stays in \`rice_cereal\` with the printed food label.

${conflicts.length ? `Rows whose summary text says HMR while the matrix slug is rice-bulk-grain. The slug was not relabeled.\n\n| row_id | source | species | matrix | statistic_scope |\n| --- | --- | --- | --- | --- |\n${conflictLines}` : "No HMR versus rice-bulk-grain label conflict was found in the qualifying rows."}

### Practice

Qualifying rows with a practice field: ${c.practice_rows}. Flooded, alternate wetting and drying, and upland management are not available as a split on this contract.

### What would unblock the baseline

A fully cited country-by-year grid needs sampling country and a single sampling year on the same rice-matrix row, with iAs and tAs kept apart, and with the basis left as reported. A China province grid needs \`sampling_region\` copied from a stated province, plus a concentration for that province. Pages that already name a province in \`sample_population\` need that statement copied into \`sampling_locations\` before it can enter this contract. Pages whose primary PDF is not in the repo still need the file fetched before a new row can be extracted. This pass did not fetch files and did not edit source pages.
`
}

export function writeRiceArsenicBaseline(repoRoot) {
  const built = assembleRiceArsenicBaseline(repoRoot)
  const jsonPath = path.join(repoRoot, "wiki/static/data/rice-arsenic-ground-truth.json")
  const csvPath = path.join(repoRoot, "wiki/static/data/rice-arsenic-ground-truth.csv")
  const pagePath = path.join(repoRoot, "wiki/baselines/rice-arsenic.md")
  const briefPath = path.join(repoRoot, "docs/briefs/rice-arsenic-ground-truth-coverage.md")
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true })
  fs.mkdirSync(path.dirname(pagePath), { recursive: true })
  fs.mkdirSync(path.dirname(briefPath), { recursive: true })
  fs.writeFileSync(jsonPath, `${JSON.stringify(built.contract, null, 2)}\n`)
  fs.writeFileSync(csvPath, built.csv)
  fs.writeFileSync(pagePath, built.page)
  fs.writeFileSync(briefPath, built.brief)
  return built.contract.counts
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
  const counts = writeRiceArsenicBaseline(repoRoot)
  console.log(JSON.stringify(counts, null, 2))
}
