// Country-year rice arsenic ledger for the Ground Truth download.
//
// Concentrations are copied from a printed table or from the Canada white-rice
// extract. Rows with a sample count and no printed concentration are count-only.
// Unknown origin, a year that was not stated, and a species that was not split
// stay in the gap file. China by province is listed there and is not a country row.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")

const SHA = {
  efsaDerived: "4d83524afe1ddac1fefff9de023ea237c245ae2a180cd3a5c769137ef8a839fb",
  efsaAnnex: "3ca8ad9a55b090a918c6cf503a5d8fe6555a24e3e9e880235c1d428a3f889f23",
  jp2012: "f6fd32baf595c08e63a9e68d28b7a6bd6240f355088ea140e0b73111e8192f94",
  jp1719: "59a5c122a2404547d89adc3eaa40bdc7dd22dcb75fb30e846ac95de3b6929e87",
  jp2224: "534a96b5da42e1c637152ed6f5111454af71b8e837748688a241f4327ec5e417",
  fda: "a505b8708ba5177d8fd21b0703120c829f9f4a60758c378ff1114f30c8c9cafd",
  au23: "ada92b0ac472e48d9731fad4d15b4ec819c9c0acb37426c71cdbb16c381da275",
  au25: "e807eb6e4ab33086069f7eaf7b59a8e66047c86aca042fad87ec497e7909b095",
  caExtract: "92864695e40c41510e78959bddbd9710c048313c5ba65a4f3da775bd502de0d1",
  caUpstream: "a48f8da22cdd0c437d0c3337411f962fe63617390bc53b17b07962f88999681d",
  alrashdi: "1cdb19d927f28ce4c60e882f31a0021ca9a326152a6c2abb08a8d863a3de3bd8",
  chu: "6ac02b090cb7cbc37fdca31733b55b083f41174443d00788607422e328af8425",
  fernandez: "ccc3c6f9505c7c82fffab9c4464de0ffe6d4fc8305739a55e850c1860f12b416",
  hasan: "36b429f3ec70b8834e34727249c9dfcb04c34277bc49aff4f2be4ee55a7da962",
  majumder: "3ba4d49f4dcf85d9385ba0e8e98b9e53d78c5a5c8311ba115a89ca1ebd2cc6b6",
  murphy2018: "5c32f846918145f1fe8b5a5e00227ad137cf776375d489ff283df00fcbc1964c",
  murphy2019: "6c24d9c5d8637cb3d9acbe018c08ccaa2788ca70606a2163e9495a05a9e80f28",
  murphy2020: "d357194bd2a85aa5483fe96afbfbffa4b9c06b688ab3ee3112bb9e0d8db8626d",
  myatsoe: "16028b45b863534abcdcc18717dd2cf540d16b7cb83899fbeb3a638fd76393a4",
  norton: "324a8198541e0aac146366508365838f6de12b035c709abe8922f5c1569ebe92",
  saini: "c1f99f7fea21ddfaf1c6a149e79563a7e0d1c7b993505a2e06932c7d49694df4",
  seyfferth: "36b6bb0c4ae5a7aa78918130e4267959e8ed643d91f09a74bb71e85c03082cd2",
  shaheen: "a59dd6a2722a883d60bc41a00dc8621b5986f7c9f048a442dc3de7a3cf38f757",
  shao: "319262a51ae267a9c2c60e59bd9ecdcd8a587255fc78b2b3a877adaad927ab28",
  tatah: "84b46a041b2c817e261809c05352faaf459e55f73e5df1ee46a3733ab22c148e",
  yuliani: "c904a1d148aaba3d33613301fe4e80f592557e9b6aa4eb98886aef4c04562eaf",
}

const LEDGER_COLUMNS = [
  "source_id", "metal_species", "matrix", "food_name", "basis", "n", "coverage_kind",
  "sampling_country", "calendar_year", "year_min", "year_max",
  "mean_ppb", "median_ppb", "min_ppb", "max_ppb",
  "original_value", "original_unit", "statistic_type", "statistic_scope",
  "field_value_summary", "page_table", "sha256", "notes",
]

const ISO = {
  Italy: "IT", Germany: "DE", Thailand: "TH", Spain: "ES", India: "IN", Hungary: "HU",
  Pakistan: "PK", Cambodia: "KH", Myanmar: "MM", Netherlands: "NL", France: "FR",
  Portugal: "PT", Belgium: "BE", Vietnam: "VN", Austria: "AT", "United States": "US",
  Greece: "GR", "United Kingdom": "GB", Poland: "PL", Lithuania: "LT", Estonia: "EE",
  Montenegro: "ME", Brazil: "BR", Ghana: "GH",
}

function csvCell(value) {
  if (value == null) return ""
  const text = String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}

function writeCsv(relativePath, columns, rows) {
  const lines = [columns.join(",")]
  for (const row of rows) lines.push(columns.map((column) => csvCell(row[column])).join(","))
  fs.writeFileSync(path.join(repoRoot, relativePath), `${lines.join("\n")}\n`)
}

function blank() {
  return Object.fromEntries(LEDGER_COLUMNS.map((column) => [column, ""]))
}

function countRow(fields) {
  return { ...blank(), coverage_kind: "count_only", statistic_type: "count", ...fields }
}

function concentrationRow(fields) {
  return { ...blank(), coverage_kind: "concentration", ...fields }
}

function ppbFromMg(mg) {
  return Math.round(mg * 1000)
}

function efsaRows() {
  const file = path.join(repoRoot, "data/evidence/rice_as_efsa2021_origin_year.csv")
  const text = fs.readFileSync(file, "utf8").replace(/\r/g, "").trim().split("\n").slice(1)
  const rows = []
  for (const line of text) {
    const [code, species, year, n] = line.split(",")
    if (!/^[A-Z]{2}$/.test(code) || code === "EU" || code === "XX" || code === "XD") continue
    rows.push(countRow({
      source_id: "efsa2021-rice-arsenic-annex-a-origin-year",
      metal_species: species,
      matrix: "rice-grain",
      food_name: "rice grain",
      n,
      sampling_country: code,
      calendar_year: year,
      statistic_scope: "origin-year result rows",
      page_table: "Derived origin-year count from Annex A rice grain categories",
      sha256: SHA.efsaDerived,
      notes: `Origin code ${code}. n is the count of result rows. The upstream Annex A file is not stored here. Its sha256 is ${SHA.efsaAnnex}. No concentration is copied.`,
    }))
  }
  return rows
}

function japanPair(sourceId, year, species, matrix, food, n, medianMg, meanMg, maxMg, sha, page, extra) {
  return concentrationRow({
    source_id: sourceId,
    metal_species: species,
    matrix,
    food_name: food,
    basis: "as_reported",
    n: String(n),
    sampling_country: "JP",
    calendar_year: String(year),
    mean_ppb: String(ppbFromMg(meanMg)),
    median_ppb: String(ppbFromMg(medianMg)),
    max_ppb: String(ppbFromMg(maxMg)),
    original_value: String(meanMg),
    original_unit: "mg/kg",
    statistic_type: "mean",
    statistic_scope: "national survey",
    field_value_summary: `Printed median ${medianMg} mg/kg, mean ${meanMg} mg/kg, maximum ${maxMg} mg/kg. Micrograms per kilogram equal the printed milligrams per kilogram times 1000. ${extra}`,
    page_table: page,
    sha256: sha,
    notes: extra,
  })
}

function japanRows() {
  const rows = []
  const fy = "maff2014-japan-rice-arsenic-fy2012"
  const allAbove = "Every reported result was at or above the quantitation limit."
  const forms = [
    ["brown-rice", "brown rice", 600],
    ["white-rice", "white rice", 600],
  ]
  const fyStats = {
    "brown-rice": { tAs: [0.21, 0.23, 0.80], iAs: [0.20, 0.21, 0.59] },
    "white-rice": { tAs: [0.13, 0.14, 0.44], iAs: [0.12, 0.12, 0.26] },
  }
  for (const [matrix, food, n] of forms) {
    for (const species of ["tAs", "iAs"]) {
      const [median, mean, max] = fyStats[matrix][species]
      rows.push(japanPair(fy, 2012, species, matrix, food, n, median, mean, max, SHA.jp2012, "p1 table", allAbove))
    }
  }
  const mid = "maff2022-japan-rice-inorganic-arsenic-2017-2019"
  const midNote = "Inorganic arsenic only. Brown and polished rice are separate rows."
  const midStats = {
    2017: { "brown-rice": [500, 0.14, 0.15, 0.38], "white-rice": [500, 0.08, 0.092, 0.26] },
    2018: { "brown-rice": [500, 0.14, 0.15, 0.37], "white-rice": [500, 0.10, 0.098, 0.25] },
    2019: { "brown-rice": [500, 0.16, 0.17, 0.60] },
  }
  for (const year of [2017, 2018, 2019]) {
    for (const [matrix, stats] of Object.entries(midStats[year])) {
      const [n, median, mean, max] = stats
      const food = matrix === "brown-rice" ? "brown rice" : "white rice"
      rows.push(japanPair(mid, year, "iAs", matrix, food, n, median, mean, max, SHA.jp1719, "p1 table", midNote))
    }
  }
  const late = "maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024"
  const lateNote = "The printed mean uses half the quantitation limit for results below that limit. Recovery was not corrected."
  const lateStats = {
    2022: {
      "brown-rice": [300, 0.12, 0.13, 0.37, "LOQ 0.01 mg/kg, results below the limit: 0"],
      "white-rice": [300, 0.08, 0.09, 0.23, "LOQ 0.01 mg/kg, results below the limit: 0"],
    },
    2023: {
      "brown-rice": [300, 0.12, 0.12, 0.35, "LOQ 0.01 mg/kg, results below the limit: 2"],
      "white-rice": [300, 0.09, 0.09, 0.20, "LOQ 0.01 mg/kg, results below the limit: 5"],
    },
    2024: {
      "brown-rice": [299, 0.12, 0.13, 0.34, "LOQ 0.02 mg/kg, results below the limit: 1"],
      "white-rice": [299, 0.09, 0.09, 0.21, "LOQ 0.02 mg/kg, results below the limit: 1"],
    },
  }
  for (const year of [2022, 2023, 2024]) {
    for (const [matrix, stats] of Object.entries(lateStats[year])) {
      const [n, median, mean, max, loq] = stats
      const food = matrix === "brown-rice" ? "brown rice" : "white rice"
      rows.push(japanPair(late, year, "iAs", matrix, food, n, median, mean, max, SHA.jp2224, "Tables 2-1 and 2-2", `${lateNote} ${loq}.`))
    }
  }
  return rows
}

function fdaRows() {
  const note = "September 2012 sampling, reported September 2013. State counts for US packaging origin: Arkansas 152, California 99, Texas 41, Louisiana 39, and packaging marked USA with no state 99. Those states are not separate rows. The survey was not designed for state comparisons. The serving summary is micrograms per serving and is not used as a country mean in ppb."
  const rows = []
  for (const species of ["tAs", "iAs"]) {
    rows.push(countRow({
      source_id: "fda2013-ias-rice-products-sampling",
      metal_species: species,
      matrix: "rice-bulk-grain",
      food_name: "rice",
      n: "430",
      sampling_country: "US",
      calendar_year: "2012",
      statistic_scope: "packaging origin count",
      page_table: "Full Analytical Results pp31-46",
      sha256: SHA.fda,
      notes: note,
    }))
    rows.push(countRow({
      source_id: "fda2013-ias-rice-products-sampling",
      metal_species: species,
      matrix: "rice-bulk-grain",
      food_name: "rice",
      n: "34",
      sampling_country: "IN",
      calendar_year: "2012",
      statistic_scope: "packaging origin count",
      page_table: "Full Analytical Results pp31-46",
      sha256: SHA.fda,
      notes: "Imported rice. Origin was read from packaging. No country mean in ppb is computed from the sample table.",
    }))
    rows.push(countRow({
      source_id: "fda2013-ias-rice-products-sampling",
      metal_species: species,
      matrix: "rice-bulk-grain",
      food_name: "rice",
      n: "10",
      sampling_country: "TH",
      calendar_year: "2012",
      statistic_scope: "packaging origin count",
      page_table: "Full Analytical Results pp31-46",
      sha256: SHA.fda,
      notes: "Imported rice. Origin was read from packaging. No country mean in ppb is computed from the sample table.",
    }))
  }
  return rows
}

function australiaRows() {
  return [
    concentrationRow({
      source_id: "fsanz2011-23rd-atds-appendices-arsenic",
      metal_species: "tAs",
      matrix: "white-rice",
      food_name: "white rice",
      basis: "as_consumed",
      n: "4",
      sampling_country: "AU",
      calendar_year: "2008",
      mean_ppb: "88",
      median_ppb: "82",
      min_ppb: "70",
      max_ppb: "120",
      original_value: "0.088",
      original_unit: "mg/kg",
      statistic_type: "mean",
      statistic_scope: "retail composite",
      field_value_summary: "Table A10.2, white long-grain rice, 2008. n=4, zero non-detects. Mean 0.088 mg/kg under both non-detect treatments, median 0.082, minimum 0.070, maximum 0.12.",
      page_table: "Table A10.2 p53",
      sha256: SHA.au23,
      notes: "Both non-detect treatments print the same mean.",
    }),
    concentrationRow({
      source_id: "fsanz2019-25th-atds-appendices-arsenic",
      metal_species: "iAs",
      matrix: "white-rice",
      food_name: "white rice",
      basis: "as_consumed",
      n: "4",
      sampling_country: "AU",
      year_min: "2013",
      year_max: "2014",
      mean_ppb: "30",
      median_ppb: "30",
      min_ppb: "20",
      max_ppb: "40",
      original_value: "0.03",
      original_unit: "mg/kg",
      statistic_type: "mean",
      statistic_scope: "retail composite",
      field_value_summary: "Table A.1, white long grain rice, May 2013 and February 2014 kept as one span. n=4, four of four detects. Mean 0.03 mg/kg, P50 0.03, minimum 0.02, maximum 0.04.",
      page_table: "Table A.1 p7",
      sha256: SHA.au25,
      notes: "The two sampling months stay one row.",
    }),
    concentrationRow({
      source_id: "fsanz2019-25th-atds-appendices-arsenic",
      metal_species: "tAs",
      matrix: "white-rice",
      food_name: "white rice",
      basis: "as_consumed",
      n: "4",
      sampling_country: "AU",
      year_min: "2013",
      year_max: "2014",
      mean_ppb: "41",
      median_ppb: "41",
      min_ppb: "31",
      max_ppb: "52",
      original_value: "0.041",
      original_unit: "mg/kg",
      statistic_type: "mean",
      statistic_scope: "retail composite",
      field_value_summary: "Table A.2, same food and span. Mean 0.041 mg/kg when non-detects are zero and 0.042 mg/kg when non-detects equal the limit of reporting. P50 0.041 and 0.042. Minimum 0.031 mg/kg. Maximum 0.052 mg/kg. Four of four detects. The stored mean is the non-detect-equals-zero figure.",
      page_table: "Table A.2 p11",
      sha256: SHA.au25,
      notes: "Both printed means are in the summary. They are not averaged.",
    }),
  ]
}

function canadaRows() {
  const samples = [
    [2004, 63.6, "Winnipeg"],
    [2005, 99.2, "Toronto"],
    [2006, 92.5, "Halifax"],
    [2007, 90, "Vancouver"],
    [2008, 32.1, "Quebec City"],
    [2009, 53.05, "Calgary"],
    [2010, 45.8, "St. John's"],
    [2011, 66.90511452, "Ottawa"],
    [2012, 63.72882227, "Vancouver"],
    [2016, 59.04939407, "Quebec City"],
    [2017, 67.90907378, "Toronto"],
    [2018, 56.41075816, "Calgary"],
  ]
  return samples.map(([year, value, city]) => concentrationRow({
    source_id: "hc2018-canadian-tds-trace-elements-white-rice",
    metal_species: "tAs",
    matrix: "white-rice",
    food_name: "white rice",
    basis: "as_consumed",
    n: "1",
    sampling_country: "CA",
    calendar_year: String(year),
    mean_ppb: String(value),
    original_value: String(value),
    original_unit: "ng/g",
    statistic_type: "composite",
    statistic_scope: "one composite for the year",
    field_value_summary: `White rice composite, analyte Arsenic (As), ${value} ng/g. ng/g is equal to µg/kg. Purchase city ${city}. Origin was not recorded.`,
    page_table: "White rice rows in the trace-element extract",
    sha256: SHA.caExtract,
    notes: `Purchase city ${city}. The full open-data file was not fetched. Its sha256 is ${SHA.caUpstream}. Bran cereal and fried rice rows were not included.`,
  }))
}

function peerRows() {
  return [
    concentrationRow({
      source_id: "alrashdi2024-myanmar-rice-arsenic",
      metal_species: "tAs",
      matrix: "rice-grain",
      food_name: "rice grain",
      basis: "as_reported",
      n: "50",
      sampling_country: "MM",
      year_min: "2016",
      year_max: "2018",
      mean_ppb: "110",
      original_value: "110",
      original_unit: "µg/kg",
      statistic_type: "mean",
      statistic_scope: "all samples in the abstract",
      field_value_summary: "Abstract mean 110 µg/kg, interquartile range 75 to 142 µg/kg, for all 50 samples. The 2016 and 2018 collections stay one span. The mean is not split by year.",
      page_table: "abstract",
      sha256: SHA.alrashdi,
      notes: "Interquartile range is not stored as a minimum or maximum.",
    }),
    concentrationRow({
      source_id: "alrashdi2024-myanmar-rice-arsenic",
      metal_species: "iAs",
      matrix: "rice-grain",
      food_name: "rice grain",
      basis: "as_reported",
      n: "50",
      sampling_country: "MM",
      year_min: "2016",
      year_max: "2018",
      mean_ppb: "86",
      original_value: "86",
      original_unit: "µg/kg",
      statistic_type: "mean",
      statistic_scope: "all samples in the abstract",
      field_value_summary: "Abstract mean 86 µg/kg inorganic arsenic, interquartile range 58 to 113 µg/kg, for the same 50 samples. The mean is not split by year.",
      page_table: "abstract",
      sha256: SHA.alrashdi,
      notes: "The abstract prints the inorganic mean for the 50 samples.",
    }),
    concentrationRow({
      source_id: "myatsoe2023-myanmar-rice-metals",
      metal_species: "tAs",
      matrix: "white-rice",
      food_name: "white rice",
      basis: "dry_weight",
      n: "120",
      sampling_country: "MM",
      calendar_year: "2018",
      mean_ppb: "160",
      original_value: "0.16",
      original_unit: "mg/kg",
      statistic_type: "mean",
      statistic_scope: "white rice from rainfed paddies",
      field_value_summary: "Total arsenic mean 0.16 mg/kg. Samples collected in April 2018. A 30 percent inorganic share used in the risk section is an assumption, not a measured inorganic result.",
      page_table: "abstract and results",
      sha256: SHA.myatsoe,
      notes: "No inorganic arsenic measurement is copied.",
    }),
    countRow({
      source_id: "shao2023-nepal-rice-heavy-metals",
      metal_species: "tAs",
      matrix: "rice-grain",
      food_name: "rice grain",
      n: "170",
      sampling_country: "NP",
      calendar_year: "2019",
      statistic_scope: "country-year count",
      page_table: "p3",
      sha256: SHA.shao,
      notes: "Sample count for 2019. No concentration is copied into this row.",
    }),
    countRow({
      source_id: "chu2021-vietnam-rice-arsenic",
      metal_species: "tAs",
      matrix: "rice-grain",
      food_name: "rice grain",
      n: "70",
      sampling_country: "VN",
      year_min: "2018",
      year_max: "2019",
      statistic_scope: "country-year count",
      page_table: "p3",
      sha256: SHA.chu,
      notes: "2018 and 2019 stay one span. No concentration is copied into this row.",
    }),
  ]
}

function gapRows() {
  const efsa = (code, year, species, n, reason, label) => ({
    gap_id: `efsa-${code}-${year}-${species}`,
    country_label: label,
    sampling_years: String(year),
    analyte: species,
    n: String(n),
    source_id: "efsa2021-rice-arsenic-annex-a-origin-year",
    reason,
    detail: "Origin code is not a sampling country. The count stays out of the country-year rows.",
  })
  return [
    efsa("XX", 2016, "tAs", 1, "unknown_origin", "unknown origin (EFSA XX)"),
    efsa("XX", 2017, "tAs", 1, "unknown_origin", "unknown origin (EFSA XX)"),
    efsa("XX", 2018, "tAs", 54, "unknown_origin", "unknown origin (EFSA XX)"),
    efsa("XX", 2018, "iAs", 33, "unknown_origin", "unknown origin (EFSA XX)"),
    efsa("XD", 2018, "tAs", 8, "unknown_origin", "unknown origin (EFSA XD)"),
    efsa("XD", 2018, "iAs", 1, "unknown_origin", "unknown origin (EFSA XD)"),
    efsa("EU", 2018, "tAs", 10, "not_a_country", "EU (unspecified)"),
    {
      gap_id: "yuliani2025-tas",
      country_label: "Indonesia",
      sampling_years: "not stated",
      analyte: "tAs",
      n: "not extracted",
      source_id: "yuliani2025-indonesia-rice-metals",
      reason: "not_extracted",
      detail: "Year not stated and the concentration was not extracted. A second reason, year_not_stated, also applies.",
    },
    {
      gap_id: "yuliani2025-ias",
      country_label: "Indonesia",
      sampling_years: "not stated",
      analyte: "iAs",
      n: "not extracted",
      source_id: "yuliani2025-indonesia-rice-metals",
      reason: "not_extracted",
      detail: "Inorganic arsenic on a subset of provinces. Year not stated and the concentration was not extracted.",
    },
    {
      gap_id: "murphy2018-tas",
      country_label: "Cambodia",
      sampling_years: "not stated",
      analyte: "tAs",
      n: "105",
      source_id: "murphy2018-cambodia-rice-arsenic",
      reason: "year_not_stated",
      detail: "The abstract states 105 rice samples. No sampling year is stated, so the count is not a country-year row.",
    },
    {
      gap_id: "murphy2019-tas",
      country_label: "Cambodia",
      sampling_years: "2016",
      analyte: "tAs",
      n: "not extracted",
      source_id: "murphy2019-cambodia-rice-arsenic",
      reason: "not_extracted",
      detail: "Most samples are described as 2016. The concentration and the exact n were not extracted.",
    },
    {
      gap_id: "murphy2020-species",
      country_label: "Cambodia",
      sampling_years: "2016",
      analyte: "tAs; iAs",
      n: "70",
      source_id: "murphy2020-cambodia-rice-arsenic-species",
      reason: "species_not_separated",
      detail: "Total arsenic and inorganic arsenic are not split into separate numeric rows. DMA is also discussed. Most samples are 2016.",
    },
    {
      gap_id: "hasan2022-tas",
      country_label: "Bangladesh",
      sampling_years: "2021",
      analyte: "tAs",
      n: "not extracted",
      source_id: "hasan2022-bangladesh-industrial-rice-metals",
      reason: "not_extracted",
      detail: "Industrial-area rice. The concentration was not extracted.",
    },
    {
      gap_id: "shaheen2024-tas",
      country_label: "Bangladesh",
      sampling_years: "not stated",
      analyte: "tAs",
      n: "not extracted",
      source_id: "shaheen2024-dhaka-rice-cultivars",
      reason: "not_extracted",
      detail: "Purchase city is Dhaka. Growing region and year were not stated. The concentration was not extracted.",
    },
    {
      gap_id: "saini2025-tas",
      country_label: "India",
      sampling_years: "2023",
      analyte: "tAs",
      n: "not extracted",
      source_id: "saini2025-india-rice-grain-arsenic",
      reason: "not_extracted",
      detail: "Field trial of genotypes at two sites. The concentration was not extracted.",
    },
    {
      gap_id: "tatahmentan2020-tas",
      country_label: "United States",
      sampling_years: "not stated",
      analyte: "tAs",
      n: "39",
      source_id: "tatahmentan2020-rice-grains-elements",
      reason: "year_not_stated",
      detail: "n=39 rice samples. The sampling year was not stated, so the count is not a country-year row.",
    },
    {
      gap_id: "fernandezbaca2020-ias",
      country_label: "United States",
      sampling_years: "2013; 2014",
      analyte: "iAs",
      n: "not extracted",
      source_id: "fernandezbaca2020-rice-ias-irrigation",
      reason: "not_extracted",
      detail: "Irrigation trial. The concentration was not extracted. Practice is not a launch-cut split.",
    },
    {
      gap_id: "seyfferth2025-species",
      country_label: "United States",
      sampling_years: "2016; 2017",
      analyte: "tAs; iAs",
      n: "not extracted",
      source_id: "seyfferth2025-rice-water-management-as-hg-cd",
      reason: "species_not_separated",
      detail: "Total and inorganic arsenic are not split into separate extracted rows. The concentration was not extracted.",
    },
    {
      gap_id: "norton2017-tas",
      country_label: "Bangladesh",
      sampling_years: "2014",
      analyte: "tAs",
      n: "not extracted",
      source_id: "norton2017-bangladesh-awd-rice",
      reason: "not_extracted",
      detail: "Cultivar and water-management trial. The concentration was not extracted.",
    },
    {
      gap_id: "majumder2021-species",
      country_label: "India",
      sampling_years: "not stated",
      analyte: "tAs; iAs",
      n: "not extracted",
      source_id: "majumder2021-west-bengal-rice-water-regimes",
      reason: "species_not_separated",
      detail: "Year not stated. Total and inorganic arsenic were not extracted as separate country-year rows.",
    },
    {
      gap_id: "guo2025-china-province",
      country_label: "China",
      sampling_years: "post-v1",
      analyte: "iAs",
      n: "",
      source_id: "guo2025",
      reason: "post_v1_china_province",
      detail: "Guo et al. (2025). Journal of Environmental Management, 388, 126024. https://doi.org/10.1016/j.jenvman.2025.126024. Province rows are a later pass. No coauthor list is recorded here.",
    },
  ]
}

function yamlQuote(value) {
  return JSON.stringify(value)
}

function writePage(file, data, body) {
  const lines = ["---", "type: source", `cite_key: ${data.cite_key}`, `title: ${yamlQuote(data.title)}`]
  lines.push(`authors: [${data.authors.map(yamlQuote).join(", ")}]`)
  lines.push(`year: ${data.year}`)
  lines.push(`publication: ${yamlQuote(data.publication)}`)
  lines.push(data.doi ? `doi: ${data.doi}` : "doi: null")
  if (!data.doi) lines.push("no_doi_assigned: true")
  lines.push(`access_url: ${yamlQuote(data.access_url)}`)
  lines.push(`source_type: ${data.source_type}`)
  lines.push("evidence_tier: A")
  lines.push(`license: ${yamlQuote(data.license)}`)
  lines.push("superseded_by: null")
  lines.push(`raw_path: ${yamlQuote(data.raw_path)}`)
  lines.push(`sha256: ${data.sha256}`)
  lines.push("access_date: 2026-09-26")
  lines.push(`metals: [${data.metals.join(", ")}]`)
  lines.push('ingredients: ["[[ingredients/rice]]"]')
  lines.push('products: ["[[products/rice-bulk-grain]]"]')
  lines.push(`matrices: [${data.matrices.join(", ")}]`)
  lines.push(`jurisdictions: [${data.jurisdictions.join(", ")}]`)
  lines.push("sampling_locations: []")
  lines.push("sampling_year_range: null")
  lines.push("wiki_doi: null")
  lines.push("evidence_fitness:")
  lines.push("  supports:")
  for (const item of data.supports) lines.push(`    - ${yamlQuote(item)}`)
  lines.push("  does_not_support:")
  for (const item of data.doesNot) lines.push(`    - ${yamlQuote(item)}`)
  lines.push("updated: 2026-09-26")
  lines.push("---", "", body.trim(), "")
  fs.writeFileSync(path.join(repoRoot, "wiki/sources", file), lines.join("\n"))
}

function pages() {
  const grain = ["rice-grain"]
  const white = ["white-rice"]
  const both = ["brown-rice", "white-rice"]
  writePage("efsa2021-rice-arsenic-annex-a-origin-year.md", {
    cite_key: "efsa2021-rice-arsenic-annex-a-origin-year",
    title: "Rice grain arsenic counts by origin country and sampling year, derived from EFSA 2021 Annex A",
    authors: ["European Food Safety Authority"],
    year: 2021,
    publication: "EFSA Journal",
    doi: null,
    access_url: "https://doi.org/10.2903/j.efsa.2021.6380",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "data/evidence/rice_as_efsa2021_origin_year.csv",
    sha256: SHA.efsaDerived,
    metals: ["iAs", "tAs"],
    matrices: grain,
    jurisdictions: ["EU"],
    supports: ["A count of rice-grain result rows by origin code and sampling year for inorganic arsenic and total arsenic."],
    doesNot: ["A concentration for any origin-year cell.", "A sampling country for origin codes XX, XD, or EU.", "The full Annex A occurrence file, which is not stored in this repository."],
  }, `
# EFSA 2021 rice grain origin-year counts

## Key numbers

The stored table counts rice-grain result rows by origin code and sampling year. Inorganic arsenic and total arsenic stay in separate rows. Known ISO country codes enter the country-year ledger as counts. Origin codes XX and XD, and the label EU, stay in the gap list. No concentration is copied from this table.

The opinion itself is https://doi.org/10.2903/j.efsa.2021.6380. The derived count file is not the 19 MB Annex A workbook. That workbook is not stored here.

## Methods (brief)

Rice grain categories were counted by the origin country reported to EFSA and by sampling year. Parameter codes follow Table 1 of the 2021 opinion. The count is a count of result rows.

## Evidence fitness

The table can support a statement that a given origin and year contributed a stated number of rice-grain result rows. It cannot support a mean, a median, or a maximum for that cell.

## Limitations

Unknown origin and an unspecified EU label are not countries. A later pass would need the Annex A workbook before any concentration could be copied.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[sources/efsa2021-chronic-exposure-iAs]]
`)

  writePage("maff2014-japan-rice-arsenic-fy2012.md", {
    cite_key: "maff2014-japan-rice-arsenic-fy2012",
    title: "Survey of total and inorganic arsenic in domestic brown rice and polished rice, 2012 crop",
    authors: ["Ministry of Agriculture, Forestry and Fisheries"],
    year: 2014,
    publication: "Ministry of Agriculture, Forestry and Fisheries",
    doi: null,
    access_url: "https://www.maff.go.jp/j/syouan/nouan/kome/k_as/attach/pdf/occurrence-1.pdf",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/JP_MAFF_rice_As_survey_FY2012_press20140221.pdf",
    sha256: SHA.jp2012,
    metals: ["iAs", "tAs"],
    matrices: both,
    jurisdictions: ["JP"],
    supports: ["National median, mean, and maximum for total arsenic and inorganic arsenic in 2012-crop brown rice and polished rice, 600 samples each."],
    doesNot: ["A province split.", "A pooled brown-plus-polished mean."],
  }, `
# Japan 2012 crop rice arsenic survey

## Key numbers

The 21 February 2014 release reports the 2012 crop. Brown rice, 600 samples: total arsenic median 0.21 mg/kg, mean 0.23 mg/kg, maximum 0.80 mg/kg; inorganic arsenic median 0.20 mg/kg, mean 0.21 mg/kg, maximum 0.59 mg/kg. Polished rice, 600 samples: total arsenic median 0.13 mg/kg, mean 0.14 mg/kg, maximum 0.44 mg/kg; inorganic arsenic median 0.12 mg/kg, mean 0.12 mg/kg, maximum 0.26 mg/kg. Every reported result was at or above the quantitation limit. Brown rice and polished rice stay separate. Values in µg/kg are the printed mg/kg figures times 1000.

## Methods (brief)

Samples were taken at collection and shipping facilities in proportion to local rice area. The release reports total arsenic and inorganic arsenic.

## Evidence fitness

The page supports four national summaries for the 2012 crop. It does not support a prefecture concentration.

## Limitations

The printed mean is the survey mean. No percentile beyond the median and maximum is added.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
`)

  writePage("maff2022-japan-rice-inorganic-arsenic-2017-2019.md", {
    cite_key: "maff2022-japan-rice-inorganic-arsenic-2017-2019",
    title: "Inorganic arsenic in domestic brown rice and polished rice, 2017 to 2019 crops",
    authors: ["Ministry of Agriculture, Forestry and Fisheries"],
    year: 2022,
    publication: "Ministry of Agriculture, Forestry and Fisheries",
    doi: null,
    access_url: "https://www.maff.go.jp/j/syouan/nouan/kome/k_as/index.html",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/JP_MAFF_rice_iAs_survey_2017-2019crops_press20220216.pdf",
    sha256: SHA.jp1719,
    metals: ["iAs"],
    matrices: both,
    jurisdictions: ["JP"],
    supports: ["National inorganic arsenic median, mean, and maximum for brown rice in 2017, 2018, and 2019, and for polished rice in 2017 and 2018."],
    doesNot: ["Total arsenic for these crops.", "Polished rice for the 2019 crop.", "A province split."],
  }, `
# Japan 2017 to 2019 inorganic arsenic in rice

## Key numbers

The 16 February 2022 release reports inorganic arsenic only. Brown rice, 500 samples each year: 2017 median 0.14 mg/kg, mean 0.15 mg/kg, maximum 0.38 mg/kg; 2018 median 0.14, mean 0.15, maximum 0.37; 2019 median 0.16, mean 0.17, maximum 0.60. Polished rice, 500 samples: 2017 median 0.08 mg/kg, mean 0.092 mg/kg, maximum 0.26 mg/kg; 2018 median 0.10, mean 0.098, maximum 0.25. No 2019 polished row is printed. Brown and polished stay separate.

## Methods (brief)

Samples were allocated by local rice area. The analyte is inorganic arsenic.

## Evidence fitness

Each crop year and rice form is its own summary. The three years are not pooled.

## Limitations

Total arsenic is not in this release. A prefecture table is not copied.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[metals/arsenic-inorganic]]
`)

  writePage("maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024.md", {
    cite_key: "maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024",
    title: "Cadmium and inorganic arsenic in domestic brown rice and polished rice, 2022 to 2024 crops",
    authors: ["Ministry of Agriculture, Forestry and Fisheries"],
    year: 2025,
    publication: "Ministry of Agriculture, Forestry and Fisheries",
    doi: null,
    access_url: "https://www.maff.go.jp/j/syouan/nouan/kome/k_as/index.html",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/JP_MAFF_press_20251219_attachment1.pdf",
    sha256: SHA.jp2224,
    metals: ["iAs", "Cd"],
    matrices: both,
    jurisdictions: ["JP"],
    supports: ["National inorganic arsenic median, mean, and maximum for brown rice and polished rice in the 2022, 2023, and 2024 crops, with the quantitation-limit treatment stated."],
    doesNot: ["A cadmium concentration on the arsenic baseline.", "A province split.", "A mean that ignores the half-limit rule."],
  }, `
# Japan 2022 to 2024 inorganic arsenic in rice

## Key numbers

Tables 2-1 and 2-2 report inorganic arsenic. Means use half the quantitation limit when a result is below that limit, and recovery was not corrected. Brown rice: 2022 n=300, limit 0.01 mg/kg, none below the limit, median 0.12, mean 0.13, maximum 0.37; 2023 n=300, limit 0.01, two below, median 0.12, mean 0.12, maximum 0.35; 2024 n=299, limit 0.02, one below, median 0.12, mean 0.13, maximum 0.34. Polished rice: 2022 n=300, limit 0.01, none below, median 0.08, mean 0.09, maximum 0.23; 2023 n=300, limit 0.01, five below, median 0.09, mean 0.09, maximum 0.20; 2024 n=299, limit 0.02, one below, median 0.09, mean 0.09, maximum 0.21. Units on the page are mg/kg.

## Methods (brief)

The attachment covers domestic brown rice and the polished rice prepared from it. Cadmium is in the same survey and is not copied onto the arsenic baseline.

## Evidence fitness

The six inorganic arsenic summaries can be cited with the half-limit rule attached. They cannot be cited as if every result were a detect.

## Limitations

No prefecture split is copied. Cadmium numbers are outside this arsenic ledger.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[metals/arsenic-inorganic]]
`)

  writePage("fsanz2011-23rd-atds-appendices-arsenic.md", {
    cite_key: "fsanz2011-23rd-atds-appendices-arsenic",
    title: "Appendices to the 23rd Australian Total Diet Study, total arsenic in white long-grain rice",
    authors: ["Food Standards Australia New Zealand"],
    year: 2011,
    publication: "Food Standards Australia New Zealand",
    doi: null,
    access_url: "https://www.foodstandards.gov.au/science-data/monitoring-safety/australian-total-diet-study",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/AU_FSANZ_23rd_ATDS_appendices.pdf",
    sha256: SHA.au23,
    metals: ["tAs"],
    matrices: white,
    jurisdictions: ["AU"],
    supports: ["Total arsenic mean, median, minimum, and maximum for white long-grain rice composites in 2008, n=4."],
    doesNot: ["Inorganic arsenic for this appendix table.", "A split of the 2008 composites into single months."],
  }, `
# 23rd Australian Total Diet Study appendices, rice arsenic

## Key numbers

Table A10.2 reports total arsenic in white long-grain rice for 2008. Four composites, zero non-detects. Mean 0.088 mg/kg under both non-detect treatments, median 0.082 mg/kg, minimum 0.070 mg/kg, maximum 0.12 mg/kg. The basis is the table-ready food.

## Methods (brief)

The appendices report analytical results for foods sampled in the 23rd study. This page copies the white long-grain rice row only.

## Evidence fitness

The row supports one 2008 total-arsenic summary for that food. It does not support inorganic arsenic.

## Limitations

Four composites are not a distribution of individual retail packs.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[sources/fsanz2011-23rd-australian-total-diet-study]]
`)

  writePage("fsanz2019-25th-atds-appendices-arsenic.md", {
    cite_key: "fsanz2019-25th-atds-appendices-arsenic",
    title: "Appendices to the 25th Australian Total Diet Study, arsenic in white long-grain rice",
    authors: ["Food Standards Australia New Zealand"],
    year: 2019,
    publication: "Food Standards Australia New Zealand",
    doi: null,
    access_url: "https://www.foodstandards.gov.au/science-data/monitoring-safety/australian-total-diet-study",
    source_type: "gov-report",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/AU_FSANZ_25th_ATDS_appendices.pdf",
    sha256: SHA.au25,
    metals: ["iAs", "tAs"],
    matrices: white,
    jurisdictions: ["AU"],
    supports: ["Inorganic and total arsenic summaries for white long-grain rice sampled in May 2013 and February 2014, kept as one span, n=4."],
    doesNot: ["A separate 2013 mean and a separate 2014 mean.", "An average of the two total-arsenic non-detect treatments."],
  }, `
# 25th Australian Total Diet Study appendices, rice arsenic

## Key numbers

White long-grain rice was sampled in May 2013 and February 2014. Those months stay one span. Inorganic arsenic, Table A.1: n=4, four of four detects, mean 0.03 mg/kg, 50th percentile 0.03 mg/kg, minimum 0.02 mg/kg, maximum 0.04 mg/kg. Total arsenic, Table A.2: mean 0.041 mg/kg when non-detects are treated as zero and 0.042 mg/kg when they are treated as the limit of reporting. The 50th percentile is 0.041 and 0.042 under those two treatments. Minimum 0.031 mg/kg. Maximum 0.052 mg/kg. Four of four detects. The stored total-arsenic mean is the zero treatment. Both printed means are kept in the summary text.

## Methods (brief)

The appendices report the analytical results. This page copies the white long-grain rice rows.

## Evidence fitness

The span can be cited as one sampling window. It cannot be split into two calendar years without inventing a year-level mean.

## Limitations

Four composites do not describe pack-to-pack variation.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[sources/fsanz2019-25th-australian-total-diet-study]]
`)

  writePage("hc2018-canadian-tds-trace-elements-white-rice.md", {
    cite_key: "hc2018-canadian-tds-trace-elements-white-rice",
    title: "Canadian Total Diet Study trace elements, white rice arsenic composites, 2004 to 2018",
    authors: ["Health Canada"],
    year: 2018,
    publication: "Health Canada open data",
    doi: null,
    access_url: "https://open.canada.ca/data/en/dataset/83934503-cfae-4773-b258-e336896c2c53",
    source_type: "gov-report",
    license: "Open Government Licence - Canada",
    raw_path: "data/evidence/ca_hc_tds_white_rice_arsenic.csv",
    sha256: SHA.caExtract,
    metals: ["tAs"],
    matrices: white,
    jurisdictions: ["CA"],
    supports: ["One total-arsenic composite result per listed year for white rice, as consumed, in ng/g."],
    doesNot: ["Inorganic arsenic.", "A country of origin for the rice.", "The full trace-element workbook, which was not fetched."],
  }, `
# Canadian Total Diet Study white rice arsenic

## Key numbers

Each year below is one white rice composite. The analyte name is Arsenic (As), which is total arsenic. The unit is ng/g, equal to µg/kg, as consumed. 2004 Winnipeg 63.6; 2005 Toronto 99.2; 2006 Halifax 92.5; 2007 Vancouver 90; 2008 Quebec City 32.1; 2009 Calgary 53.05; 2010 St. John's 45.8; 2011 Ottawa 66.90511452; 2012 Vancouver 63.72882227; 2016 Quebec City 59.04939407; 2017 Toronto 67.90907378; 2018 Calgary 56.41075816. Origin was not recorded. The purchase city is a note on the row, not a separate geographic split.

## Methods (brief)

The figures are the white rice rows from the trace-element extract. Bran cereal and fried rice rows were left out. The full open-data workbook was not fetched.

## Evidence fitness

Each composite can be cited as the total-arsenic result for that sampling year in Canada. It cannot be cited as inorganic arsenic or as a named growing country.

## Limitations

One composite is not a distribution. Years without a white rice row in the extract are absent.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[metals/arsenic-total]]
`)

  writePage("alrashdi2024-myanmar-rice-arsenic.md", {
    cite_key: "alrashdi2024-myanmar-rice-arsenic",
    title: "Total arsenic and inorganic arsenic in Myanmar rice",
    authors: ["Alrashdi, May M.", "Strashnov, Ilya", "Richards, Laura A.", "Tun, Yin Min", "Al Bualy, Ahmed", "Polya, David A."],
    year: 2024,
    publication: "Heliyon",
    doi: "10.1016/j.heliyon.2024.e40987",
    access_url: "https://doi.org/10.1016/j.heliyon.2024.e40987",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Alrashdi_2024_heliyon-2024-e40987.pdf",
    sha256: SHA.alrashdi,
    metals: ["iAs", "tAs"],
    matrices: grain,
    jurisdictions: ["MM"],
    supports: ["Abstract means for total arsenic and inorganic arsenic on 50 Myanmar rice samples collected in 2016 and 2018, kept as one span."],
    doesNot: ["A separate mean for 2016 and a separate mean for 2018.", "A province mean."],
  }, `
# Alrashdi et al. 2024, arsenic in Myanmar rice

Alrashdi, M. M., Strashnov, I., Richards, L. A., Tun, Y. M., Al Bualy, A., & Polya, D. A. (2024). Total arsenic and inorganic arsenic in Myanmar rice. Heliyon, 10, e40987. https://doi.org/10.1016/j.heliyon.2024.e40987

## Key numbers

The abstract reports 50 rice samples from southern, middle, and northern Myanmar. Total arsenic mean 110 µg/kg, interquartile range 75 to 142 µg/kg. Inorganic arsenic mean 86 µg/kg, interquartile range 58 to 113 µg/kg. Collections in 2016 and 2018 stay one span. The means describe all 50 samples. They are not split by year or by place. The interquartile range is not stored as a minimum or a maximum.

## Methods (brief)

The copied figures are the abstract means. Tables were not re-pooled.

## Evidence fitness

The abstract supports two species means for the combined sample. It does not support a 2016-only mean.

## Limitations

Place names in the paper are not admin-1 rows in this pass.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
`)

  writePage("shao2023-nepal-rice-heavy-metals.md", {
    cite_key: "shao2023-nepal-rice-heavy-metals",
    title: "Human dietary exposure to heavy metals via rice in Nepal",
    authors: ["Shao, Yuxiao", "Xu, Xiaohang", "Wang, Le", "Han, Jialiang", "Katuwal, Hem Bahadur", "Jiao, Shulin", "Qiu, Guangle"],
    year: 2023,
    publication: "International Journal of Environmental Research and Public Health",
    doi: "10.3390/ijerph20054134",
    access_url: "https://doi.org/10.3390/ijerph20054134",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Shao_2023_ijerph20054134.pdf",
    sha256: SHA.shao,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["NP"],
    supports: ["A 2019 sample count of 170 for total arsenic in rice from Nepal."],
    doesNot: ["A concentration on the country-year ledger. The value was not copied."],
  }, `
# Shao et al. 2023, metals in Nepal rice

Shao, Y., Xu, X., Wang, L., Han, J., Katuwal, H. B., Jiao, S., & Qiu, G. (2023). Human dietary exposure to heavy metals via rice in Nepal. International Journal of Environmental Research and Public Health, 20(5), 4134. https://doi.org/10.3390/ijerph20054134

## Key numbers

The country-year ledger carries n=170 for total arsenic in 2019. No concentration is copied on that row.

## Methods (brief)

The count is the sample size stated for the Nepal rice set. Province counts are not separate ledger rows.

## Evidence fitness

The row supports a sample count for Nepal in 2019. It does not support a mean.

## Limitations

A concentration pass would need the printed statistics copied in a later extract.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
`)

  writePage("chu2021-vietnam-rice-arsenic.md", {
    cite_key: "chu2021-vietnam-rice-arsenic",
    title: "Arsenic and heavy metals in Vietnamese rice",
    authors: ["Chu, Dinh Binh", "Duong, Hung Tuan", "Luu, Minh Thi Nguyet", "Vu-Thi, Hong-An", "Ly, Bich-Thuy", "Loi, Vu Duc"],
    year: 2021,
    publication: "Journal of Analytical Methods in Chemistry",
    doi: "10.1155/2021/6661955",
    access_url: "https://doi.org/10.1155/2021/6661955",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Chu_2021_2021-6661955.pdf",
    sha256: SHA.chu,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["VN"],
    supports: ["A sample count of 70 for total arsenic in Vietnamese rice collected in 2018 and 2019, kept as one span."],
    doesNot: ["A concentration on the country-year ledger.", "A split of the span into two years."],
  }, `
# Chu et al. 2021, arsenic in Vietnamese rice

Chu, D. B., Duong, H. T., Luu, M. T. N., Vu-Thi, H.-A., Ly, B.-T., & Loi, V. D. (2021). Arsenic and heavy metals in Vietnamese rice: Assessment of human exposure to these elements through rice consumption. Journal of Analytical Methods in Chemistry, 2021, 6661955. https://doi.org/10.1155/2021/6661955

## Key numbers

The country-year ledger carries n=70 for total arsenic. Sampling years 2018 and 2019 stay one span. No concentration is copied.

## Methods (brief)

The count is the sample size for the rice set. The Red River Delta and a mining-activity zone are not separate rows in this pass.

## Evidence fitness

The row supports a span count. It does not support a mean, and it does not support a single calendar year.

## Limitations

Filling 2018 or 2019 alone would invent a year.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
`)

  const gapPage = (file, data, citation, key, methods, limit) => {
    writePage(file, data, `
# ${data.title}

${citation}

## Key numbers

${key}

## Methods (brief)

${methods}

## Evidence fitness

The page records why this paper is not a country-year concentration row. It does not add a number that the extract did not copy.

## Limitations

${limit}

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
`)
  }

  gapPage("yuliani2025-indonesia-rice-metals.md", {
    cite_key: "yuliani2025-indonesia-rice-metals",
    title: "The concentration of potentially toxic elements in Indonesian rice and their health risk assessment",
    authors: ["Yuliani, Fitria", "Faridah, Didah Nur", "Andarwulan, Nuri", "Srednicka-Tober, Dominika"],
    year: 2025,
    publication: "Foods",
    doi: "10.3390/foods14213652",
    access_url: "https://doi.org/10.3390/foods14213652",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Yuliani_2025_foods14213652.pdf",
    sha256: SHA.yuliani,
    metals: ["iAs", "tAs"],
    matrices: grain,
    jurisdictions: ["ID"],
    supports: ["A bibliographic record for the Indonesian rice paper."],
    doesNot: ["A country-year concentration. The year was not stated and the values were not extracted."],
  }, "Yuliani, F., Faridah, D. N., Andarwulan, N., & Srednicka-Tober, D. (2025). The concentration of potentially toxic elements (PTEs) in Indonesian rice and their health risk assessment. Foods, 14(21), 3652. https://doi.org/10.3390/foods14213652",
  "Both the total arsenic row and the inorganic arsenic row stay in the gap list. The sampling year was not stated, and the concentrations were not extracted. Inorganic arsenic was measured on a subset of provinces.",
  "The paper was identified and the gap was recorded. Province production weights were not turned into a national mean.",
  "A later extract can copy a printed statistic. This pass does not invent one.")

  gapPage("murphy2018-cambodia-rice-arsenic.md", {
    cite_key: "murphy2018-cambodia-rice-arsenic",
    title: "Effects of arsenic, iron and fertilizers in soil on rice in Cambodia",
    authors: ["Murphy, Tom", "Phan, Kongkea", "Yumvihoze, Emmanuel", "Irvine, Kim", "Wilson, Ken", "Lean, David", "Poulain, Alexander", "Laird, Brian", "Chan, Laurie Hing Man"],
    year: 2018,
    publication: "Journal of Health and Pollution",
    doi: "10.5696/2156-9614-8.19.180910",
    access_url: "https://doi.org/10.5696/2156-9614-8.19.180910",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Murphy_2018_2156-9614-8-19-180910.pdf",
    sha256: SHA.murphy2018,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["KH"],
    supports: ["A record that 105 rice samples were collected, without a stated sampling year."],
    doesNot: ["A country-year row. The year was not stated."],
  }, "Murphy, T., Phan, K., Yumvihoze, E., Irvine, K., Wilson, K., Lean, D., Poulain, A., Laird, B., & Chan, L. H. M. (2018). Effects of arsenic, iron and fertilizers in soil on rice in Cambodia. Journal of Health and Pollution, 8(19), 180910. https://doi.org/10.5696/2156-9614-8.19.180910",
  "The paper reports 105 rice samples. No sampling year is stated on the row that would enter the country-year ledger, so the count stays in the gap list.",
  "Metals were measured by inductively coupled plasma mass spectrometry. This pass does not copy a concentration.",
  "A year has to be stated before n=105 can be a country-year row.")

  gapPage("murphy2019-cambodia-rice-arsenic.md", {
    cite_key: "murphy2019-cambodia-rice-arsenic",
    title: "Environmental and health implications of the correlation between arsenic and zinc levels in rice from an arsenic-rich zone in Cambodia",
    authors: ["Murphy, Tom", "Irvine, Kim", "Phan, Kongkea", "Lean, David", "Wilson, Ken"],
    year: 2019,
    publication: "Journal of Health and Pollution",
    doi: "10.5696/2156-9614-9.22.190603",
    access_url: "https://doi.org/10.5696/2156-9614-9.22.190603",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Murphy_2019_2156-9614-9-22-190603.pdf",
    sha256: SHA.murphy2019,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["KH"],
    supports: ["A bibliographic record for the 2019 Cambodia rice paper."],
    doesNot: ["An extracted concentration or an extracted sample count for the country-year ledger."],
  }, "Murphy, T., Irvine, K., Phan, K., Lean, D., & Wilson, K. (2019). Environmental and health implications of the correlation between arsenic and zinc levels in rice from an arsenic-rich zone in Cambodia. Journal of Health and Pollution, 9(22), 190603. https://doi.org/10.5696/2156-9614-9.22.190603",
  "Most samples are described as 2016. The concentration and the exact sample count were not extracted, so the paper stays in the gap list.",
  "The analyte of interest for a later extract is total arsenic in rice grain.",
  "This pass does not fill a 2016 mean.")

  gapPage("murphy2020-cambodia-rice-arsenic-species.md", {
    cite_key: "murphy2020-cambodia-rice-arsenic-species",
    title: "Interactions of dimethylarsinic acid, total arsenic and zinc affecting rice crop management and human health in Cambodia",
    authors: ["Murphy, Tom", "Irvine, Kim", "Phan, Kongkea", "Lean, David", "Yumvihoze, Emmanuel", "Wilson, Ken"],
    year: 2020,
    publication: "Journal of Health and Pollution",
    doi: "10.5696/2156-9614-10.26.200612",
    access_url: "https://doi.org/10.5696/2156-9614-10.26.200612",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Murphy_2020_2156-9614-10-26-200612.pdf",
    sha256: SHA.murphy2020,
    metals: ["iAs", "tAs"],
    matrices: grain,
    jurisdictions: ["KH"],
    supports: ["A record that total arsenic, inorganic arsenic, and dimethylarsinic acid are discussed together for about 70 samples."],
    doesNot: ["Separate country-year rows for inorganic arsenic and total arsenic. The species were not split."],
  }, "Murphy, T., Irvine, K., Phan, K., Lean, D., Yumvihoze, E., & Wilson, K. (2020). Interactions of dimethylarsinic acid, total arsenic and zinc affecting rice crop management and human health in Cambodia. Journal of Health and Pollution, 10(26), 200612. https://doi.org/10.5696/2156-9614-10.26.200612",
  "About 70 samples, mostly from 2016, are described with total arsenic and inorganic arsenic together, and dimethylarsinic acid is part of the same discussion. The species are not separated into ledger rows.",
  "A later extract would need a printed inorganic value and a printed total value on separate rows.",
  "A mixed species label cannot enter the inorganic or total column.")

  gapPage("hasan2022-bangladesh-industrial-rice-metals.md", {
    cite_key: "hasan2022-bangladesh-industrial-rice-metals",
    title: "Accumulation of heavy metals in rice grains cultivated in three major industrial areas of Bangladesh",
    authors: ["Hasan, G. M. M. Anwarul", "Das, Anuj Kumer", "Satter, Mohammed A."],
    year: 2022,
    publication: "Journal of Environmental and Public Health",
    doi: "10.1155/2022/1836597",
    access_url: "https://doi.org/10.1155/2022/1836597",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Hasan_2022_2022-1836597.pdf",
    sha256: SHA.hasan,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["BD"],
    supports: ["A bibliographic record for industrial-area rice sampled in 2021."],
    doesNot: ["An extracted total-arsenic concentration."],
  }, "Hasan, G. M. M. A., Das, A. K., & Satter, M. A. (2022). Accumulation of heavy metals in rice (Oryza sativa L.) grains cultivated in three major industrial areas of Bangladesh. Journal of Environmental and Public Health, 2022, 1836597. https://doi.org/10.1155/2022/1836597",
  "Sampling is described as April to August 2021. The total-arsenic concentration was not extracted.",
  "The paper measures metals in rice grain from industrial areas. This pass records the gap only.",
  "No mean is invented from the unextracted table.")

  gapPage("shaheen2024-dhaka-rice-cultivars.md", {
    cite_key: "shaheen2024-dhaka-rice-cultivars",
    title: "Carcinogenic and non-carcinogenic health hazards of potentially toxic elements in commonly consumed rice cultivars in Dhaka city, Bangladesh",
    authors: ["Shaheen, Nazma", "Hasan, Towhid", "Sultana, Marjia", "Akhter, Kazi Turjaun", "Khan, Ishrat Nourin", "Irfan, Nafis Md.", "Ahmed, Md. Kawser"],
    year: 2024,
    publication: "PLoS ONE",
    doi: "10.1371/journal.pone.0303305",
    access_url: "https://doi.org/10.1371/journal.pone.0303305",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Shaheen_2024_pone-0303305.pdf",
    sha256: SHA.shaheen,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["BD"],
    supports: ["A bibliographic record for rice cultivars purchased in Dhaka."],
    doesNot: ["A country-year concentration. The growing region and the year were not stated, and the value was not extracted."],
  }, "Shaheen, N., Hasan, T., Sultana, M., Akhter, K. T., Khan, I. N., Irfan, N. M., & Ahmed, M. K. (2024). Carcinogenic and non-carcinogenic health hazards of potentially toxic elements in commonly consumed rice cultivars in Dhaka city, Bangladesh. PLoS ONE, 19(5), e0303305. https://doi.org/10.1371/journal.pone.0303305",
  "The purchase city is Dhaka. The growing region and the sampling year were not stated. The concentration was not extracted.",
  "Results are reported by cultivar. This pass does not copy a cultivar table.",
  "A purchase city is not a sampling year.")

  gapPage("saini2025-india-rice-grain-arsenic.md", {
    cite_key: "saini2025-india-rice-grain-arsenic",
    title: "Grain arsenic accumulation is independent of agronomic traits in rice under field conditions",
    authors: ["Saini, Parminder Singh", "Pandey, Manish", "Baghel, Samrath", "Patil, Suraj", "Sahu, Parmeshwar Kumar", "Kumar, Vinay", "Das, Bikram Kishore", "Sharma, Deepak", "Srivastava, Ashish Kumar"],
    year: 2025,
    publication: "Physiology and Molecular Biology of Plants",
    doi: "10.1007/s12298-025-01597-z",
    access_url: "https://doi.org/10.1007/s12298-025-01597-z",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Saini_2025_s12298-025-01597-z.pdf",
    sha256: SHA.saini,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["IN"],
    supports: ["A bibliographic record for a 2023 field trial of rice genotypes."],
    doesNot: ["An extracted grain-arsenic concentration."],
  }, "Saini, P. S., Pandey, M., Baghel, S., Patil, S., Sahu, P. K., Kumar, V., Das, B. K., Sharma, D., & Srivastava, A. K. (2025). Grain arsenic accumulation is independent of agronomic traits in rice under field conditions. Physiology and Molecular Biology of Plants, 31(10), 1793-1798. https://doi.org/10.1007/s12298-025-01597-z",
  "The trial ran in 2023 at a control site and an arsenic-contaminated site. The concentration was not extracted. Genotype counts are not a country mean.",
  "The paper is a field trial. This pass records the gap.",
  "No genotype mean is invented.")

  gapPage("fernandezbaca2020-rice-ias-irrigation.md", {
    cite_key: "fernandezbaca2020-rice-ias-irrigation",
    title: "Grain inorganic arsenic content in rice managed through targeted introgressions and irrigation management",
    authors: ["Fernández-Baca, Cristina P.", "McClung, Anna M.", "Edwards, Jeremy D.", "Codling, Eton E.", "Reddy, Vangimalla R.", "Barnaby, Jinyoung Y."],
    year: 2020,
    publication: "Frontiers in Plant Science",
    doi: "10.3389/fpls.2020.612054",
    access_url: "https://doi.org/10.3389/fpls.2020.612054",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/FernandezBaca_2020_fpls-2020-612054.pdf",
    sha256: SHA.fernandez,
    metals: ["iAs"],
    matrices: grain,
    jurisdictions: ["US"],
    supports: ["A bibliographic record for an irrigation trial with inorganic arsenic in grain."],
    doesNot: ["An extracted inorganic arsenic concentration for 2013 or 2014."],
  }, "Fernández-Baca, C. P., McClung, A. M., Edwards, J. D., Codling, E. E., Reddy, V. R., & Barnaby, J. Y. (2020). Grain inorganic arsenic content in rice managed through targeted introgressions and irrigation management. Frontiers in Plant Science, 11, 612054. https://doi.org/10.3389/fpls.2020.612054",
  "The trial compares flooded and alternate wetting and drying management in 2013 and 2014. The inorganic arsenic concentration was not extracted.",
  "Practice and genotype are part of the design. They are not launch-cut rows.",
  "No trial mean is invented.")

  gapPage("norton2017-bangladesh-awd-rice.md", {
    cite_key: "norton2017-bangladesh-awd-rice",
    title: "Biomass and elemental concentrations of 22 rice cultivars grown under alternate wetting and drying conditions at three field sites in Bangladesh",
    authors: ["Norton, Gareth J.", "Travis, Anthony J.", "Danku, John M. C.", "Salt, David E.", "Hossain, Mahmud", "Islam, Md. Rafiqul", "Price, Adam H."],
    year: 2017,
    publication: "Food and Energy Security",
    doi: "10.1002/fes3.110",
    access_url: "https://doi.org/10.1002/fes3.110",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Norton_2017_fes3-110.pdf",
    sha256: SHA.norton,
    metals: ["tAs"],
    matrices: grain,
    jurisdictions: ["BD"],
    supports: ["A bibliographic record for a 2014 boro-season cultivar trial."],
    doesNot: ["An extracted total-arsenic concentration."],
  }, "Norton, G. J., Travis, A. J., Danku, J. M. C., Salt, D. E., Hossain, M., Islam, M. R., & Price, A. H. (2017). Biomass and elemental concentrations of 22 rice cultivars grown under alternate wetting and drying conditions at three field sites in Bangladesh. Food and Energy Security, 6(3), e110. https://doi.org/10.1002/fes3.110",
  "Twenty-two cultivars at three sites in the 2014 boro season. The total-arsenic concentration was not extracted.",
  "Water management is part of the design and is not a country-year split in this pass.",
  "No site mean is invented.")

  gapPage("majumder2021-west-bengal-rice-water-regimes.md", {
    cite_key: "majumder2021-west-bengal-rice-water-regimes",
    title: "Impact of water regimes and amendments on inorganic arsenic exposure to rice",
    authors: ["Majumder, Supriya", "Biswas, Pabitra Kumar", "Banik, Pabitra"],
    year: 2021,
    publication: "International Journal of Environmental Research and Public Health",
    doi: "10.3390/ijerph18094643",
    access_url: "https://doi.org/10.3390/ijerph18094643",
    source_type: "peer-reviewed",
    license: "public-reference-only",
    raw_path: "raw/reports/rice-arsenic-gt/Majumder_2021_ijerph18094643.pdf",
    sha256: SHA.majumder,
    metals: ["iAs", "tAs"],
    matrices: grain,
    jurisdictions: ["IN"],
    supports: ["A bibliographic record for a West Bengal water-regime trial. This is not the Bangladesh lead-pollution review that shares a similar cite stem."],
    doesNot: ["A country-year concentration. The year was not stated and the species were not extracted as separate rows."],
  }, "Majumder, S., Biswas, P. K., & Banik, P. (2021). Impact of water regimes and amendments on inorganic arsenic exposure to rice. International Journal of Environmental Research and Public Health, 18(9), 4643. https://doi.org/10.3390/ijerph18094643",
  "The trial is in Deganga block, West Bengal. The sampling year was not stated. Total arsenic and inorganic arsenic were not extracted as separate rows.",
  "Flooded and aerobic management are design factors, not launch-cut rows.",
  "This paper is distinct from the Bangladesh lead review filed under a different cite key.")
}

function main() {
  const rows = [...efsaRows(), ...japanRows(), ...fdaRows(), ...australiaRows(), ...canadaRows(), ...peerRows()]
  writeCsv("data/evidence/rice_arsenic_country_year.csv", LEDGER_COLUMNS, rows)
  writeCsv("data/evidence/rice_arsenic_baseline_gaps.csv",
    ["gap_id", "country_label", "sampling_years", "analyte", "n", "source_id", "reason", "detail"],
    gapRows())
  writeCsv("data/evidence/rice_paper_manifest.csv",
    ["paper_id", "year", "venue", "page", "analytes", "note"],
    [{
      paper_id: "lu2023",
      year: "2023",
      venue: "Foods 12:542",
      page: "p2",
      analytes: "Cd; Cr; iAs",
      note: "Corrected analyte list. Lead and mercury are not on this manifest. The PDF is not in the attached archives. No DOI is recorded. Province concentrations are not extracted. This row is not a completed ingest.",
    }])
  pages()
  const japanIas = rows.filter((row) => row.sampling_country === "JP" && row.metal_species === "iAs")
  const japanN = japanIas.reduce((sum, row) => sum + Number(row.n), 0)
  console.log(JSON.stringify({
    ledger_rows: rows.length,
    concentration: rows.filter((row) => row.coverage_kind === "concentration").length,
    count_only: rows.filter((row) => row.coverage_kind === "count_only").length,
    japan_ias_n: japanN,
    gaps: gapRows().length,
  }, null, 2))
}

main()
