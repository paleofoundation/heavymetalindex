import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { parseCsv } from "./geo-hist.mjs"
import { assembleRiceArsenicBaseline, riceMatrixClass } from "./build-rice-arsenic-baseline.mjs"

test("rice matrix class keeps non-rice slugs out", () => {
  assert.equal(riceMatrixClass("baby-cereals-dry-non-rice", "Oatmeal"), null)
  assert.equal(riceMatrixClass("mixed-meals-non-rice", "Apples, Sweet Potatoes"), null)
  assert.equal(riceMatrixClass("honey", "organic brown rice syrup"), null)
  assert.equal(riceMatrixClass("cooking-oils-other", "Refined rice bran oil"), null)
  assert.equal(riceMatrixClass("rice", "Rice, brown, cooked"), "rice_grain")
  assert.equal(riceMatrixClass("rice-bulk-grain", "rice-bulk-grain"), "rice_grain")
  assert.equal(riceMatrixClass("infant-rice-cereal", "BF, cereal, rice, dry, prepared with water"), "rice_cereal")
  assert.equal(riceMatrixClass("baby-cereals-dry-rice-based", "Rice and oat"), "rice_cereal")
  assert.equal(riceMatrixClass("mixed-meals", "BF, turkey and rice"), "rice_containing_mixture")
  assert.equal(riceMatrixClass("plant-milks-rice-based", "finished rice-based beverage"), "rice_product")
  assert.equal(riceMatrixClass("", "Rice"), "rice_grain")
})

test("qualifying rice arsenic rows are copied ledger facts", () => {
  const { contract, page, brief } = assembleRiceArsenicBaseline(process.cwd())
  assert.equal(contract.schema_version, "1.1.0")
  assert.ok(contract.counts.qualifying_rows > 133)
  assert.equal(contract.counts.china_country_rows, 0)
  assert.equal(contract.counts.china_province_rows, 0)
  assert.equal(contract.rows.length, contract.counts.qualifying_rows)
  assert.equal(contract.counts.concentration_rows + contract.counts.count_only_rows, contract.counts.qualifying_rows)

  for (const row of contract.rows) {
    assert.ok(row.sampling_country)
    assert.ok(row.sampling_year_start != null || row.sampling_year_end != null)
    assert.ok(row.metal_species === "iAs" || row.metal_species === "tAs")
    assert.ok(row.coverage_kind === "concentration" || row.coverage_kind === "count_only")
    assert.equal(/non-rice/.test(row.matrix), false)
    assert.equal(row.single_year, row.sampling_year_start === row.sampling_year_end)
    assert.notEqual(row.sampling_country, "XX")
    assert.notEqual(row.sampling_country, "XD")
    assert.notEqual(row.sampling_country, "EU")
    const reported = row.reported
    const hasNumber = Object.entries(reported).some(([key, value]) => key !== "unit" && key !== "field_value_summary" && key !== "units_original" && key !== "original_unit" && key !== "normalized_unit" && typeof value === "number")
    if (row.coverage_kind === "concentration") assert.ok(hasNumber || reported.field_value_summary)
    if (row.coverage_kind === "count_only") assert.equal(hasNumber, false)
  }

  const noh = contract.rows.find((row) => row.row_id === "csv:data/evidence/category1_autonomy_extracted_summary.csv:430")
  assert.equal(noh.sampling_country, "KR")
  assert.equal(noh.sampling_year_start, 2019)
  assert.equal(noh.metal_species, "iAs")
  assert.equal(noh.reported.mean_ppb, 30.9)
  assert.equal(noh.matrix, "rice-bulk-grain")
  assert.match(noh.statistic_scope, /HMR/)
  assert.match(noh.slug_flag, /not relabeled/)
  assert.equal(noh.coverage_kind, "concentration")

  const italy = contract.rows.find((row) => row.source_id === "efsa2021-rice-arsenic-annex-a-origin-year" && row.sampling_country === "IT" && row.sampling_year_start === 2016 && row.metal_species === "tAs")
  assert.equal(italy.coverage_kind, "count_only")
  assert.equal(italy.n, 8)

  const nepal = contract.rows.find((row) => row.source_id === "shao2023-nepal-rice-heavy-metals")
  assert.equal(nepal.coverage_kind, "concentration")
  assert.equal(nepal.sampling_country, "NP")
  assert.equal(nepal.sampling_year_start, 2019)
  assert.equal(nepal.n, 170)
  assert.equal(nepal.reported.mean_ppb, 43.4)
  assert.equal(nepal.reported.min_ppb, 6.43)
  assert.equal(nepal.reported.max_ppb, 121)
  assert.equal(nepal.statistic_type, "geometric_mean")

  const vietnam = contract.rows.find((row) => row.source_id === "chu2021-vietnam-rice-arsenic")
  assert.equal(vietnam.coverage_kind, "concentration")
  assert.equal(vietnam.sampling_country, "VN")
  assert.equal(vietnam.sampling_year_start, 2018)
  assert.equal(vietnam.sampling_year_end, 2019)
  assert.equal(vietnam.n, 70)
  assert.equal(vietnam.reported.mean_ppb, 115)
  assert.equal(vietnam.reported.original_value, 0.115)
  assert.equal(vietnam.metal_species, "tAs")

  const canada = contract.rows.find((row) => row.source_id === "hc2018-canadian-tds-trace-elements-white-rice" && row.sampling_year_start === 2004)
  assert.equal(canada.coverage_kind, "concentration")
  assert.equal(canada.reported.mean_ppb, 63.6)
  assert.equal(canada.sampling_country, "CA")

  const japanIasN = contract.rows
    .filter((row) => row.sampling_country === "JP" && row.metal_species === "iAs")
    .reduce((sum, row) => sum + Number(row.n), 0)
  assert.equal(japanIasN, 5498)

  const sample = contract.rows.find((row) => row.row_kind === "sample" && row.reported.concentration_ppb_equivalent != null)
  const match = sample.row_id.match(/^csv:(.+):(\d+)$/)
  const csvRows = parseCsv(readFileSync(match[1], "utf8"))
  const source = csvRows.find((row) => row.__line === Number(match[2]))
  assert.equal(sample.reported.concentration_ppb_equivalent, Number(source.concentration_ppb_equivalent))
  assert.equal(sample.metal_species, source.metal_species)
  assert.equal(sample.sampling_country, "US")

  assert.equal(page.includes("\u2014"), false)
  assert.match(page, /All rights reserved/)
  assert.match(page, /count-only/)
  assert.match(page, /China by province is not in this version/)
  assert.match(brief, /Guo et al\. \(2025\)/)
  assert.match(brief, /Cd; Cr; iAs/)
  assert.equal(page.includes("Zissu"), false)
  assert.equal(brief.includes("Zissu"), false)
  assert.equal(JSON.stringify(contract).includes("hmtc"), false)
  assert.equal(contract.rows.some((row) => /non-rice/.test(row.matrix)), false)

  const onDisk = JSON.parse(readFileSync("wiki/static/data/rice-arsenic-ground-truth.json", "utf8"))
  assert.deepEqual(onDisk.rows.map((row) => row.row_id), contract.rows.map((row) => row.row_id))
  assert.equal(onDisk.counts.qualifying_rows, contract.counts.qualifying_rows)
})
