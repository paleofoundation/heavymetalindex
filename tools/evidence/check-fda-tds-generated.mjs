#!/usr/bin/env node
/**
 * Verify committed FDA extracts against their primary-reconciliation receipt.
 * This CI/build check reads no raw files and has no Python/XLSX dependency.
 * It does not replace build-fda-tds-evidence.py --check, which reopens and
 * reconciles both immutable primary sources during local ingest verification.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseCsvRows } from './lib/csv.mjs'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const PREFIX = 'fda_tds_fy2018_2020_'
const SOURCE = 'fda2022-tds-elements-fy2018-fy2020'
const ALIAS = 'fda-tds-elements-2018-2020'
const SPECIATION = new Set(['Total inorganic arsenic', 'Dimethylarsinic acid', 'Monomethylarsonic acid'])
const SPECIES = { Lead: 'Pb', Cadmium: 'Cd', 'Arsenic (total)': 'tAs', 'Total inorganic arsenic': 'iAs', Mercury: 'tHg', Nickel: 'Ni', Chromium: 'Cr', Uranium: 'U', Antimony: 'Sb' }
const ARTIFACTS = ['element_results_samples.csv', 'summary_by_food_analyte.csv', 'routing_gaps.csv', 'source_statistic_differences.csv', 'source_context_dispositions.csv', 'ingredient_routes.csv']
const PRIMARY_HASHES = ['e358bdff4203eba66825edb8cc131669cdc3205cce752c2e898b5a2aa9e6c46c', 'f9f35ff6ab3fb9dc2dcd2b403c8279c0794463cf971787a97c393493d48aea19']
const sha256 = (content) => createHash('sha256').update(content).digest('hex')
const equal = (actual, expected, context) => assert.deepEqual(actual, expected, context)
const finite = (value, context) => {
  assert(value !== '' && Number.isFinite(Number(value)), `Missing/non-finite numeric value: ${context}`)
  return Number(value)
}
const close = (actual, expected, context) => {
  const numeric = finite(actual, context)
  assert(Math.abs(numeric - expected) <= Math.max(1e-9, Math.abs(expected) * 1e-10), `${context}: ${actual} != ${expected}`)
}

function csv(content, context) {
  const [header, ...rows] = parseCsvRows(content.toString('utf8'))
  assert(header?.length > 1 && new Set(header).size === header.length, `Invalid CSV header: ${context}`)
  return rows.map((cells, index) => {
    equal(cells.length, header.length, `CSV width ${context}:${index + 2}`)
    return Object.fromEntries(header.map((name, column) => [name, cells[column]]))
  })
}

function statistics(values) {
  const ordered = [...values].sort((a, b) => a - b)
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length
  const result = { min: ordered[0], max: ordered.at(-1), mean, sd: values.length > 1 ? Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1)) : null }
  for (const percent of [10, 50, 90, 95]) {
    const position = (ordered.length - 1) * percent / 100
    result[`p${percent}`] = ordered[Math.floor(position)] + (ordered[Math.ceil(position)] - ordered[Math.floor(position)]) * (position - Math.floor(position))
  }
  return result
}

export function verifyGenerated({ root = ROOT, read = readFileSync, exists = existsSync } = {}) {
  const evidence = (name) => path.join(root, 'data/evidence', name)
  const published = (name) => path.join(root, 'wiki/static/data', name)
  const receiptName = `${PREFIX}reconciliation.json`
  const receiptContent = read(evidence(receiptName))
  equal(read(published(receiptName)), receiptContent, 'Public reconciliation receipt is stale')
  const receipt = JSON.parse(receiptContent.toString('utf8'))
  equal(receipt.source_id, SOURCE, 'Receipt source')
  equal(receipt.schema_version, 2, 'Receipt schema')
  equal(receipt.review_state, 'primary_reconciled', 'Receipt must record completed primary reconciliation')
  equal(receipt.verification_mode, 'primary_source_reconciliation', 'Receipt provenance mode')
  equal(receipt.raw_sources.map((row) => row.sha256).sort(), PRIMARY_HASHES.toSorted(), 'Receipt primary SHA fingerprints')
  equal(Object.keys(receipt.artifacts).sort(), ARTIFACTS.map((name) => PREFIX + name).sort(), 'Receipt must cover every generated CSV and route CSV')
  const tables = new Map()
  for (const suffix of ARTIFACTS) {
    const name = PREFIX + suffix
    const content = read(evidence(name))
    const fingerprint = receipt.artifacts[name]
    equal(content.length, fingerprint.bytes, `${name}: byte count differs from primary receipt`)
    equal(sha256(content), fingerprint.sha256, `${name}: SHA differs from primary receipt`)
    equal(read(published(name)), content, `Public ${name} is stale`)
    tables.set(suffix, csv(content, name))
  }
  const samples = tables.get('element_results_samples.csv')
  const summaries = tables.get('summary_by_food_analyte.csv')
  const routes = tables.get('ingredient_routes.csv')
  const expectedCounts = { official_result_rows: 68993, normalized_result_rows: 68993, official_food_count: 307, routed_food_count: 307, composite_samples: 3276, summary_groups: 6479, published_supplement_groups_verified: 6449, speciation_results: 162, inorganic_arsenic_results: 54, routing_gap_count: 0, source_statistic_differences_retained: 0 }
  for (const [field, expected] of Object.entries(expectedCounts)) equal(receipt[field], expected, `Receipt ${field}`)
  equal(samples.length, receipt.normalized_result_rows, 'Complete analytical row count')
  equal(summaries.length, receipt.summary_groups, 'Complete food/analyte group count')
  equal(routes.length, receipt.routed_food_count, 'Complete food route count')
  equal(tables.get('routing_gaps.csv').length, receipt.routing_gap_count, 'Routing gap register count')
  equal(tables.get('source_statistic_differences.csv').length, receipt.source_statistic_differences_retained, 'Source statistic difference register count')
  equal(tables.get('source_context_dispositions.csv').length, 1, 'Narrative discrepancy remains visible')
  const routeMap = new Map(routes.map((row) => [row.tds_food_number, row]))
  equal(routeMap.size, 307, 'Unique food routes')
  for (const route of routes) {
    equal(route.source_id, SOURCE, 'Route source')
    equal(route.ingredient_page, `wiki/ingredients/${route.ingredient_slug}.md`, 'Ingredient route slug/path agreement')
    assert(/^[a-z0-9-]+$/.test(route.ingredient_slug), 'Safe ingredient destination slug')
    assert(exists(path.join(root, route.ingredient_page)), `Missing destination ${route.ingredient_page}`)
  }
  const foodIds = new Set(), sampleIds = new Set(), analytes = new Set(), analyticalIds = new Set()
  const groups = new Map(), censoringCounts = { detected: 0, non_detect: 0 }
  let speciationResults = 0, inorganicResults = 0
  for (const [index, row] of samples.entries()) {
    equal(row.source_id, SOURCE, 'Analytical source')
    equal(Number(row.source_row_number), index + 2, 'Preserved primary row sequence')
    const route = routeMap.get(row.tds_food_number)
    assert(route, `Unrouted sample food ${row.tds_food_number}`)
    equal(row.ingredient_slug, route.ingredient_slug, 'Sample destination route agreement')
    equal(row.tds_food_description, route.tds_food_description, 'Source food identity preserved by route')
    assert(['ppb', 'ppm'].includes(row.units_original), 'Explicit recognized original unit')
    const factor = row.units_original === 'ppm' ? 1000 : 1
    const value = finite(row.concentration_original, 'concentration') * factor
    const limit = finite(row.reporting_limit_original, 'reporting limit') * factor
    assert(value >= 0 && limit > 0, 'Valid concentration/reporting limit')
    close(row.concentration_ppb_equivalent, value, 'Sample unit conversion')
    close(row.reporting_limit_ppb_equivalent, limit, 'Reporting limit unit conversion')
    close(row.concentration_lower_bound_ppb, value, 'Sample lower bound')
    close(row.concentration_upper_bound_ppb, value === 0 ? limit : value, 'Sample upper bound')
    equal(row.result_status, value === 0 ? 'non_detect' : 'detected', 'Zero code is a non-detect; positive source results remain detected')
    equal(row.metal_species, SPECIES[row.analyte] ?? '', 'Analyte species separation')
    assert(row.basis && row.censoring_note && row.route_disposition, 'Sample basis/censoring/route metadata')
    const identity = `${row.sample_id}|${row.analyte}`
    assert(!analyticalIds.has(identity), `Duplicate analytical identity ${identity}`)
    analyticalIds.add(identity)
    foodIds.add(row.tds_food_number); sampleIds.add(row.sample_id); analytes.add(row.analyte)
    censoringCounts[row.result_status]++
    if (SPECIATION.has(row.analyte)) speciationResults++
    if (row.metal_species === 'iAs') inorganicResults++
    const key = `${row.tds_food_number}|${row.analyte}`
    if (!groups.has(key)) groups.set(key, { rows: [], lower: [], upper: [], limits: [], detects: [] })
    const group = groups.get(key)
    group.rows.push(row); group.lower.push(value); group.upper.push(value === 0 ? limit : value); group.limits.push(limit)
    if (value !== 0) group.detects.push(value)
  }
  equal([...foodIds].sort(), [...routeMap.keys()].sort(), 'All sampled foods have exactly one route')
  equal(sampleIds.size, receipt.composite_samples, 'Unique composite count')
  equal(analytes.size, 28, 'Analyte count')
  equal([...analytes].sort(), receipt.analytes, 'Analyte inventory')
  equal(groups.size, receipt.summary_groups, 'Analytical food/analyte groups')
  equal(censoringCounts, receipt.censoring_counts, 'Detected/non-detect row counts')
  equal(speciationResults, receipt.speciation_results, 'Speciation row count')
  equal(inorganicResults, receipt.inorganic_arsenic_results, 'Inorganic arsenic row count')
  let verifiedGroups = 0
  const summarized = new Set()
  for (const row of summaries) {
    const key = `${row.tds_food_number}|${row.analyte}`
    assert(!summarized.has(key), `Duplicate summary group ${key}`)
    summarized.add(key)
    const group = groups.get(key)
    assert(group, `Summary without analytical results ${key}`)
    const n = group.rows.length, detected = group.detects.length, nd = n - detected
    equal(row.source_id, SOURCE, 'Summary source')
    for (const field of ['ingredient_slug', 'basis', 'metal_species', 'units_original', 'tds_food_description']) equal(row[field], group.rows[0][field], `Summary ${field}: ${key}`)
    for (const [field, value] of Object.entries({ n, detected_n: detected, non_detect_n: nd, reported_zero_n: nd })) equal(Number(row[field]), value, `Summary ${field}: ${key}`)
    equal(row.censoring, nd === n ? 'all_non_detect' : nd ? 'partially_censored' : 'none', `Summary censoring: ${key}`)
    assert(row.statistic_basis.includes('lower_bound_ND_zero') && row.statistic_basis.includes('upper_bound_ND_reporting_limit'), 'Summary bounds must be labeled')
    const lower = statistics(group.lower), upper = statistics(group.upper)
    for (const stat of ['min', 'max', 'p10', 'p50', 'p90', 'p95']) {
      close(row[`${stat}_ppb_equivalent`], lower[stat], `${key}: lower ${stat}`)
      close(row[`${stat}_upper_bound_ppb`], upper[stat], `${key}: upper ${stat}`)
    }
    for (const [name, values] of [['lower', lower], ['upper', upper]]) {
      close(row[`mean_${name}_bound_ppb`], values.mean, `${key}: ${name} mean`)
      if (values.sd === null) equal(row[`sd_${name}_bound_ppb`], '', `${key}: undefined SD`)
      else close(row[`sd_${name}_bound_ppb`], values.sd, `${key}: ${name} SD`)
    }
    close(row.reporting_limit_min_ppb_equivalent, Math.min(...group.limits), `${key}: minimum reporting limit`)
    close(row.reporting_limit_max_ppb_equivalent, Math.max(...group.limits), `${key}: maximum reporting limit`)
    if (detected) {
      close(row.min_detected_ppb, Math.min(...group.detects), `${key}: detected minimum`)
      close(row.max_detected_ppb, Math.max(...group.detects), `${key}: detected maximum`)
    } else {
      equal(row.min_detected_ppb, '', `${key}: no measured minimum for all-ND group`)
      equal(row.max_detected_ppb, '', `${key}: no measured maximum for all-ND group`)
    }
    if (SPECIATION.has(row.analyte)) equal(row.source_summary_reconciliation, 'speciation_not_tabulated_in_supplement', 'Speciation provenance')
    else {
      verifiedGroups++
      equal(row.source_summary_reconciliation, 'counts_and_extrema_verified', 'Primary summary reconciliation status')
      for (const [field, value] of Object.entries({ n, detected_n: detected, non_detect_n: nd })) equal(Number(row[`source_reported_${field}`]), value, `Preserved source ${field}: ${key}`)
      if (!detected) for (const stat of ['mean', 'sd']) equal(row[`source_reported_${stat}_original`], 'N/A', 'FDA all-ND source statistic must remain N/A')
    }
  }
  equal(verifiedGroups, receipt.published_supplement_groups_verified, 'Preserved primary supplement group count')
  for (const name of ['category1_autonomy_extracted_summary.csv', 'category1_autonomy_matrix_routed_summary.csv']) {
    assert(!csv(read(evidence(name)), name).some((row) => [SOURCE, ALIAS].includes(row.source_id)), `Superseded FDA narrative extraction reappeared: ${name}`)
  }
  return { verification_mode: 'committed_outputs_only', primary_sources_reopened: false, result_rows: samples.length, foods: foodIds.size, composite_samples: sampleIds.size, analytes: analytes.size, summary_groups: groups.size, artifacts_verified: ARTIFACTS.length, public_copies_verified: ARTIFACTS.length + 1 }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    assert(process.argv.slice(2).every((arg) => arg === '--check-generated'), 'Usage: node tools/evidence/check-fda-tds-generated.mjs --check-generated')
    console.log(JSON.stringify(verifyGenerated(), null, 2))
    console.log('Committed outputs match the primary-reconciliation receipt. Raw primary inputs were not reopened; run the separate Python --check for local primary verification.')
  } catch (error) {
    console.error(`FDA TDS committed-output verification failed: ${error.message}`)
    process.exitCode = 1
  }
}
