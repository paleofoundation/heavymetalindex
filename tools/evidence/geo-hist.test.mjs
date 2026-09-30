import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { ExtractionFindingSchema } from "../extract/schema.ts"
import {
  GEO_FIELD_NAMES,
  classifyFood,
  fieldsFromFrontmatter,
  geoFromCsvColumns,
  mergeGeo,
  parseYearRange,
  rowHasSummaryValue,
  validateGeoHistFields,
} from "./geo-hist.mjs"

const baseFinding = {
  claim_class: "literature_finding",
  metal_species: "iAs",
  product_matrix: "infant-rice-cereal",
  basis: "dry_weight",
  statistic_type: "median",
  original_value: 84,
  original_unit: "ug/kg",
  normalized_value: 84,
  normalized_unit: "ppb",
  quote_trace: "median 84 ug/kg dry weight",
  page_number: null,
  table_number: null,
  evidence_fitness_verdict: "EF-2",
  public_label: "Reconstructable dataset",
}

test("schemas list the geo-hist fields as optional", () => {
  for (const file of [
    "data/evidence/schema/value.schema.json",
    "data/evidence/schema/claim.schema.json",
    "data/evidence/schema/geo-hist.schema.json",
  ]) {
    const schema = JSON.parse(readFileSync(file, "utf8"))
    for (const field of GEO_FIELD_NAMES) {
      assert.ok(schema.properties[field], `${file} missing ${field}`)
    }
    const required = schema.required || []
    for (const field of GEO_FIELD_NAMES) {
      assert.equal(required.includes(field), false, `${file} required ${field}`)
    }
  }
  const extraction = JSON.parse(readFileSync("data/evidence/schema/model-extraction.schema.json", "utf8"))
  const findingProps = extraction.properties.findings.items.properties
  for (const field of GEO_FIELD_NAMES) {
    assert.ok(findingProps[field], `extraction finding missing ${field}`)
  }
  for (const field of GEO_FIELD_NAMES) {
    assert.equal(extraction.properties.findings.items.required.includes(field), false)
  }
})

test("extraction findings accept a row with no geo fields and reject a bad practice", () => {
  assert.equal(ExtractionFindingSchema.safeParse(baseFinding).success, true)
  assert.equal(ExtractionFindingSchema.safeParse({ ...baseFinding, practice: "flooded", sampling_country: "CN" }).success, true)
  assert.equal(ExtractionFindingSchema.safeParse({ ...baseFinding, practice: "paddy" }).success, false)
  assert.equal(ExtractionFindingSchema.safeParse({ ...baseFinding, sampling_country: "USA" }).success, false)
  assert.equal(ExtractionFindingSchema.safeParse({ ...baseFinding, lat: 12.5, lon: 99.1 }).success, true)
  assert.equal(ExtractionFindingSchema.safeParse({ ...baseFinding, lon: 200 }).success, false)
})

test("validateGeoHistFields allows an empty row and checks filled rows", () => {
  assert.deepEqual(validateGeoHistFields({}), [])
  assert.deepEqual(validateGeoHistFields({ value_id: "x", metal_species: "Pb" }), [])
  const ok = mergeGeo([{
    fields: { sampling_country: "BR", sampling_year_start: 2014, sampling_year_end: 2015 },
    provenance: {
      sampling_country: "wiki/sources/example.md frontmatter sampling_locations",
      sampling_year_start: "wiki/sources/example.md frontmatter sampling_year_range",
      sampling_year_end: "wiki/sources/example.md frontmatter sampling_year_range",
    },
  }])
  assert.deepEqual(validateGeoHistFields(ok), [])
  assert.ok(validateGeoHistFields({ sampling_country: "USA", geo_source: "x", geo_provenance: { sampling_country: "x" } }).length)
  assert.ok(validateGeoHistFields({ lat: 1, geo_source: "x", geo_provenance: { lat: "x" } }).length)
  assert.ok(validateGeoHistFields({
    sampling_year_start: 2020,
    sampling_year_end: 2010,
    geo_source: "x",
    geo_provenance: { sampling_year_start: "x", sampling_year_end: "x" },
  }).length)
  assert.ok(validateGeoHistFields({
    practice: "paddy",
    geo_source: "x",
    geo_provenance: { practice: "x" },
  }).length)
  assert.ok(validateGeoHistFields({
    geo_precision: "city",
    geo_source: "x",
    geo_provenance: { geo_precision: "x" },
  }).length)
  assert.ok(validateGeoHistFields({ sampling_country: "BR" }).some((error) => /geo_source/.test(error)))
})

test("year parser keeps leading ranges and skips prose", () => {
  assert.deepEqual(parseYearRange("2017-2020"), { start: 2017, end: 2020 })
  assert.deepEqual(parseYearRange("2015–2018"), { start: 2015, end: 2018 })
  assert.deepEqual(parseYearRange(2023), { start: 2023, end: 2023 })
  assert.deepEqual(parseYearRange([2005, 2025]), { start: 2005, end: 2025 })
  assert.equal(parseYearRange("Approximately 1972-1974 (Wellington study)"), null)
  assert.equal(parseYearRange(null), null)
})

test("frontmatter geography ignores affiliation and jurisdictions", () => {
  const ignored = fieldsFromFrontmatter({
    jurisdictions: ["US"],
    authors: ["Smith (University of Tehran, Iran)"],
    sampling_locations: ["Department of Soil Science, University of Tehran, Iran"],
    sampling_year_range: null,
    sample_population: "Forty samples. Authors are affiliated with the University of Tehran, Iran.",
  })
  assert.equal(ignored.fields.sampling_country, undefined)
  assert.equal(ignored.multiCountry, false)

  const anhui = mergeGeo([fieldsFromFrontmatter({
    sampling_locations: ["Anhui Province, China"],
    sampling_year_range: "2018",
  }, "wiki/sources/example.md")])
  assert.equal(anhui.sampling_country, "CN")
  assert.equal(anhui.sampling_region, "Anhui Province")
  assert.equal(anhui.geo_precision, "admin1")
  assert.equal(anhui.sampling_year_start, 2018)
  assert.match(anhui.geo_provenance.sampling_country, /sampling_locations/)

  const multi = mergeGeo([fieldsFromFrontmatter({
    sampling_locations: ["Bahia, Brazil", "Ecuador"],
  })])
  assert.equal(multi.sampling_country, undefined)
  assert.equal(multi.geo_precision, "multi_country")

  const tds = mergeGeo([fieldsFromFrontmatter({
    jurisdictions: ["US-FDA"],
    sampling_locations: ["US-Regional-3-cities-per-region", "US-National-KCL"],
    sampling_year_range: "2017-2020",
  })])
  assert.equal(tds.sampling_country, "US")
  assert.equal(tds.sampling_region, undefined)
  assert.equal(tds.geo_precision, "country")
  assert.equal(tds.sampling_year_start, 2017)
  assert.equal(tds.sampling_year_end, 2020)

  const carolina = mergeGeo([fieldsFromFrontmatter({
    sampling_locations: ["North Carolina, US"],
  })])
  assert.equal(carolina.sampling_country, "US")
  assert.equal(carolina.sampling_region, "North Carolina")
  assert.equal(carolina.geo_precision, "admin1")

  const population = mergeGeo([fieldsFromFrontmatter({
    sampling_locations: [],
    sampling_year_range: null,
    sample_population: "Eighteen Brazilian infant-cereal samples acquired in 2014-2015.",
  })])
  assert.equal(population.sampling_country, "BR")
  assert.equal(population.sampling_year_start, 2014)
  assert.equal(population.sampling_year_end, 2015)

  const organicArsenic = fieldsFromFrontmatter({
    sample_population: "Speciation reported organic arsenic and inorganic arsenic.",
  })
  assert.equal(organicArsenic.fields.practice, undefined)
  const certified = fieldsFromFrontmatter({
    sample_population: "Rice was grown under certified organic management.",
  })
  assert.equal(certified.fields.practice, "organic")
})

test("csv columns encode stated places and do not treat Unknown as a country", () => {
  const unknown = geoFromCsvColumns({ country_of_origin: "Unknown", calendar_year: "2016" }, "data/evidence/example.csv")
  assert.equal(unknown.countryExplicitlyUnknown, true)
  assert.equal(unknown.fields.sampling_country, undefined)
  const merged = mergeGeo([
    fieldsFromFrontmatter({ sampling_locations: ["Brazil"] }),
    unknown,
  ])
  assert.equal(merged.sampling_country, undefined)
  assert.equal(merged.sampling_year_start, 2016)

  const usa = mergeGeo([geoFromCsvColumns({ country_of_origin: "USA" }, "data/evidence/example.csv")])
  assert.equal(usa.sampling_country, "US")
  assert.equal(usa.geo_precision, "country")

  const split = mergeGeo([geoFromCsvColumns({ market: "KR+US" }, "data/evidence/choi.csv")])
  assert.equal(split.sampling_country, undefined)
  assert.equal(split.geo_precision, "multi_country")

  const southeast = geoFromCsvColumns({ region: "Southeast", calendar_year: "2018" }, "data/evidence/tds.csv")
  assert.equal(southeast.fields.sampling_region, undefined)
  assert.equal(southeast.fields.sampling_year_start, 2018)

  const gems = geoFromCsvColumns({
    region_name: "EURO",
    food_origins: "Domestic; Imported; Unknown",
    year_min: "2007",
    year_max: "2008",
    p50_lower_bound_ug_kg: "12",
  }, "data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv")
  assert.equal(gems.fields.sampling_country, undefined)
  assert.equal(gems.fields.sampling_region, undefined)
  assert.equal(gems.fields.sampling_year_start, 2007)
  assert.equal(gems.fields.sampling_year_end, 2008)
  assert.equal(rowHasSummaryValue({ p50_lower_bound_ug_kg: "12" }), true)
  assert.equal(rowHasSummaryValue({ n_numeric_or_censored: "0", year_min: "2007" }), false)

  const postal = mergeGeo([geoFromCsvColumns({ country_of_origin: "Los Angeles, CA" }, "data/evidence/example.csv")])
  assert.equal(postal.sampling_country, "US")
  assert.equal(postal.sampling_region, "California")

  const organic = geoFromCsvColumns({
    sample_description: "100% Organic Grape Juice",
    country_of_origin: "Argentina",
  }, "data/evidence/example.csv")
  assert.equal(organic.fields.practice, "organic")
  assert.equal(organic.fields.sampling_country, "AR")
})

test("food groups keep the required matrices distinct", () => {
  assert.equal(classifyFood("baby-cereals-dry-rice-based"), "Baby food inputs")
  assert.equal(classifyFood("infant-formula-powder-non-soy"), "Baby food inputs")
  assert.equal(classifyFood("rice"), "Rice")
  assert.equal(classifyFood("white rice"), "Rice")
  assert.equal(classifyFood("cocoa powder"), "Cocoa and chocolate")
  assert.equal(classifyFood("chickpeas"), "Chickpeas and pulses")
  assert.equal(classifyFood("black beans"), "Chickpeas and pulses")
  assert.equal(classifyFood("green beans"), "Vegetables")
  assert.equal(classifyFood("cinnamon"), "Spices")
  assert.equal(classifyFood("whey protein powder"), "Protein powders")
  assert.equal(classifyFood("apple juice"), "Fruit juice")
  assert.equal(classifyFood("apple"), "Fruit")
  assert.equal(classifyFood("true-tea-camellia-sinensis"), "Tea")
  assert.equal(classifyFood("TEAS AND HERBAL TEAS (SOLID)"), "Tea")
  assert.equal(classifyFood("Tea, green, black (black, fermented and dried)"), "Tea")
  assert.equal(classifyFood("Tea, green Stimulant beverages, dried and diluted excluding cocoa products"), "Tea")
  assert.equal(classifyFood("coffee beans excluding cocoa products"), "Coffee")
  assert.equal(classifyFood("Soft drinks excluding fruit juice"), "Other")
  assert.equal(classifyFood("Fruit juice and herbal tea for infants and young children"), "Baby food inputs")
  assert.equal(classifyFood("Job's tears"), "Other")
  assert.equal(classifyFood("canned tuna"), "Seafood")
  assert.equal(classifyFood("coffee beans"), "Coffee")
  assert.equal(classifyFood("mixed-meals-non-rice"), "Other")
  assert.equal(classifyFood("teething-and-snacks-non-rice"), "Other")
  assert.equal(classifyFood("baby-cereals-dry-non-rice"), "Baby food inputs")
  assert.equal(classifyFood("non-rice-grains"), "Grains other than rice")
  assert.equal(classifyFood("white rice"), "Rice")
})
