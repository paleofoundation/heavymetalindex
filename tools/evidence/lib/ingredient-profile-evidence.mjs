import fs from "node:fs"
import path from "node:path"
import { parseCsv } from "./csv.mjs"

export const FDA_SOURCE = "fda2022-tds-elements-fy2018-fy2020"
export const FDA_SUMMARY = "data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv"
export const WHO_SOURCE = "who-gemsfood-heavy-metal-contaminants"
export const WHO_SUMMARY = "data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv"
export const PROFILE_METALS = ["Pb", "Cd", "iAs", "tAs", "tHg", "Ni", "Al", "Cr", "Sn", "U"]
export const numberOrNull = (v) => v === "" || v === undefined || v === null || !Number.isFinite(Number(v)) ? null : Number(v)

export function readProfileEvidence(repoRoot = process.cwd()) {
  const read = (file) => fs.existsSync(path.join(repoRoot, file)) ? parseCsv(fs.readFileSync(path.join(repoRoot, file), "utf8")) : []
  return { fda: read(FDA_SUMMARY), who: read(WHO_SUMMARY) }
}

export function fdaRowKey(row) {
  return `${row.source_id}::${row.tds_food_number}::${row.analyte_slug}`
}

export function whoRowKey(row) {
  // Basis, food state, geography and time are identity, never tie-breakers by N.
  return JSON.stringify([row.source_id, row.food_code, row.food_name, row.metal_species, row.region_name, row.food_state, row.basis, row.year_min, row.year_max])
}

export function fdaObservation(row, role = "value") {
  return {
    source_id: FDA_SOURCE, evidence_path: FDA_SUMMARY, row_key: fdaRowKey(row), role,
    food_id: row.tds_food_number, food_name: row.tds_food_description,
    metal_species: row.metal_species, basis: row.basis,
    geography: "US", year_min: 2017, year_max: 2020, period_scope: "dataset_collection_window",
    statistic_type: "source_observation", n: numberOrNull(row.n),
    non_detect_n: numberOrNull(row.non_detect_n ?? row.reported_zero_n),
    reporting_limit_min_ppb: numberOrNull(row.reporting_limit_min_ppb_equivalent),
    reporting_limit_max_ppb: numberOrNull(row.reporting_limit_max_ppb_equivalent),
    min_lower_bound_ppb: numberOrNull(row.min_ppb_equivalent), max_lower_bound_ppb: numberOrNull(row.max_ppb_equivalent),
    censoring: "FDA non-detects are zero-coded; reporting limits are retained separately",
  }
}

export function whoObservation(row, role = "context") {
  return {
    source_id: WHO_SOURCE, evidence_path: WHO_SUMMARY, row_key: whoRowKey(row), role,
    food_id: row.food_code, food_name: row.food_name, metal_species: row.metal_species,
    basis: row.basis, food_state: row.food_state, geography: row.region_name,
    year_min: numberOrNull(row.year_min), year_max: numberOrNull(row.year_max), period_scope: "record_collection_period",
    statistic_type: "source_lower_bound_summary", n: numberOrNull(row.n_rows),
    p10_ppb: numberOrNull(row.p10_lower_bound_ug_kg), p90_ppb: numberOrNull(row.p90_lower_bound_ug_kg),
    p95_ppb: numberOrNull(row.p95_lower_bound_ug_kg),
    censoring: "Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation",
  }
}

export function evidenceSources(cell) {
  return [...new Set((cell.evidence || []).filter((e) => e.role === "value").map((e) => e.source_id).filter(Boolean))]
}

export function profileEvidenceForExport(cell) {
  return {
    value_kind: cell.value_kind ?? null,
    evidence: Array.isArray(cell.evidence) ? cell.evidence : [],
    evidence_note: cell.evidence_note ?? null,
    basis_conversion: cell.basis_conversion ?? null,
  }
}

export function renderNonDetect(cell) {
  const records = (cell.evidence || []).filter((e) => e.role === "value")
  const limits = records.map((e) => numberOrNull(e.reporting_limit_max_ppb)).filter((v) => v !== null && v > 0)
  if (!records.length || limits.length !== records.length) return "Not quantified"
  const low = Math.min(...records.map((e) => numberOrNull(e.reporting_limit_min_ppb) ?? Number(e.reporting_limit_max_ppb)))
  const high = Math.max(...limits)
  return low === high ? `ND (<${high}; source reporting limit)` : `ND (reporting limits ${low}–${high})`
}

export function validateProfileEvidence(cell, slug, metal, registers) {
  const failures = []
  const evidence = Array.isArray(cell.evidence) ? cell.evidence : []
  for (const e of evidence) {
    if (e.metal_species !== metal) failures.push("evidence-species-mismatch")
    if (!e.basis || !e.geography || !e.statistic_type || !e.row_key) failures.push("incomplete-cell-provenance")
    let row
    if (e.source_id === FDA_SOURCE) {
      row = registers.fda.find((r) => fdaRowKey(r) === e.row_key)
      if (!row || row.ingredient_slug !== slug || row.metal_species !== metal) failures.push("unsupported-fda-food-species")
    } else if (e.source_id === WHO_SOURCE) {
      row = registers.who.find((r) => whoRowKey(r) === e.row_key)
      if (!row || row.metal_species !== metal) failures.push("unsupported-who-record")
    }
    if (row && e.basis !== row.basis) failures.push("evidence-basis-mismatch")
    if (row && e.role === "value" && cell.value_kind === "source_non_detect") {
      if (Number(e.n) !== Number(row.n) || Number(e.non_detect_n) !== Number(row.non_detect_n ?? row.reported_zero_n)
        || Number(e.reporting_limit_max_ppb) !== Number(row.reporting_limit_max_ppb_equivalent)) failures.push("stale-non-detect-evidence")
    }
    if (row && e.role === "value" && cell.value_kind === "source_summary") {
      const prefix = e.source_id === WHO_SOURCE ? [row.p10_lower_bound_ug_kg, row.p90_lower_bound_ug_kg, row.p95_lower_bound_ug_kg]
        : [row.p10_ppb_equivalent, row.p90_ppb_equivalent, row.p95_ppb_equivalent]
      const values = [...(cell.typical_ppb || []), cell.p95_ppb]
      if (prefix.some((v, index) => values[index] === null || Math.abs(Number(v) - Number(values[index])) > 0.051)) failures.push("source-summary-value-mismatch")
    }
  }
  const valued = evidence.filter((e) => e.role === "value")
  if (cell.value_kind === "source_non_detect") {
    if (!valued.length || valued.some((e) => !(e.n > 0 && e.non_detect_n === e.n && e.reporting_limit_max_ppb > 0))) failures.push("unsupported-non-detect")
    if ((cell.typical_ppb || []).some((v) => v !== null) || cell.p95_ppb !== null) failures.push("non-detect-as-number")
  }
  if (["source_summary", "source_non_detect"].includes(cell.value_kind) && !valued.length) failures.push("missing-value-provenance")
  if (new Set(valued.map((e) => e.basis)).size > 1 && !cell.basis_conversion) failures.push("mixed-basis-profile")
  return [...new Set(failures)]
}
