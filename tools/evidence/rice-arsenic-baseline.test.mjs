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
  assert.equal(contract.counts.qualifying_rows, 133)
  assert.equal(contract.counts.by_species.iAs, 28)
  assert.equal(contract.counts.by_species.tAs, 105)
  assert.equal(contract.counts.single_year_rows, 117)
  assert.equal(contract.counts.year_span_rows, 16)
  assert.equal(contract.counts.china_country_rows, 0)
  assert.equal(contract.counts.china_province_rows, 0)
  assert.equal(contract.counts.sampling_region_rows, 0)
  assert.equal(contract.rows.length, 133)

  for (const row of contract.rows) {
    assert.ok(row.sampling_country)
    assert.ok(row.sampling_year_start != null || row.sampling_year_end != null)
    assert.ok(row.metal_species === "iAs" || row.metal_species === "tAs")
    assert.equal(row.sampling_region, null)
    assert.equal(/non-rice/.test(row.matrix), false)
    assert.equal(row.single_year, row.sampling_year_start === row.sampling_year_end)
    const reported = row.reported
    const hasNumber = Object.entries(reported).some(([key, value]) => key !== "unit" && key !== "field_value_summary" && key !== "units_original" && key !== "original_unit" && key !== "normalized_unit" && typeof value === "number")
    assert.ok(hasNumber || reported.field_value_summary)
  }

  const noh = contract.rows.find((row) => row.row_id === "csv:data/evidence/category1_autonomy_extracted_summary.csv:430")
  assert.equal(noh.sampling_country, "KR")
  assert.equal(noh.sampling_year_start, 2019)
  assert.equal(noh.metal_species, "iAs")
  assert.equal(noh.reported.mean_ppb, 30.9)
  assert.equal(noh.matrix, "rice-bulk-grain")
  assert.match(noh.statistic_scope, /HMR/)

  const sample = contract.rows.find((row) => row.row_kind === "sample" && row.reported.concentration_ppb_equivalent != null)
  const match = sample.row_id.match(/^csv:(.+):(\d+)$/)
  const csvRows = parseCsv(readFileSync(match[1], "utf8"))
  const source = csvRows.find((row) => row.__line === Number(match[2]))
  assert.equal(sample.reported.concentration_ppb_equivalent, Number(source.concentration_ppb_equivalent))
  assert.equal(sample.metal_species, source.metal_species)
  assert.equal(sample.sampling_country, "US")

  assert.equal(page.includes("\u2014"), false)
  assert.match(page, /not yet filled from the ledger/)
  assert.equal(page.includes("Zissu"), false)
  assert.equal(brief.includes("Zissu"), false)
  assert.equal(JSON.stringify(contract).includes("hmtc"), false)

  const onDisk = JSON.parse(readFileSync("wiki/static/data/rice-arsenic-ground-truth.json", "utf8"))
  assert.deepEqual(onDisk.rows.map((row) => row.row_id), contract.rows.map((row) => row.row_id))
  assert.equal(onDisk.counts.qualifying_rows, 133)
})
