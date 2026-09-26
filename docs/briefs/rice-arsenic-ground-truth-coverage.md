---
title: Rice arsenic Ground Truth coverage
schema_version: 1.0.0
generated_on: 2026-09-26
---

# Rice arsenic Ground Truth coverage

Generated 2026-09-26 by `tools/evidence/build-rice-arsenic-baseline.mjs`. This file is a coverage brief. It is not a public wiki page. It does not set a limit.

Operated by the Institute of Contaminant Standards.

© 2026 Paleo Certified, Inc. All rights reserved.

Depends on `data/evidence/geo_hist.jsonl` from draft pull request 163 (`cursor/geo-hist-evidence-fields-e169`). This brief does not retarget that work.

## Fields used

| Field | Where it was read |
| --- | --- |
| sampling_country, sampling_region, sampling_year_start, sampling_year_end, practice, geo_precision, geo_source, geo_provenance, food_group, matrix, source_id, source_page, row_id | `data/evidence/geo_hist.jsonl` |
| metal_species, basis, n, concentration and summary fields, censoring, result_status, review_state, food description | The CSV line or `values.jsonl` record named by `row_id` |

A row qualifies when all of the following are already true:

- The geo-hist row is a rice matrix. The matrix slug contains rice, and slugs containing non-rice are out. Mixed meals qualify only when the printed food name contains the word rice. An empty matrix qualifies only when the printed food name contains the word rice.
- `metal_species` is `iAs` or `tAs`.
- `sampling_country` is present.
- `sampling_year_start` or `sampling_year_end` is present.
- The joined record has a numeric concentration field or a `field_value_summary`.

## Counts after those filters

| Measure | Count |
| --- | ---: |
| geo_hist.jsonl rows | 42824 |
| Rice-matrix iAs or tAs rows in geo_hist | 572 |
| Qualifying rows (country and year and concentration) | 133 |
| Qualifying iAs | 28 |
| Qualifying tAs | 105 |
| Single-year qualifying rows | 117 |
| Year-span qualifying rows, not expanded | 16 |
| Qualifying rows with sampling_region | 0 |
| Qualifying rows with sampling_country CN | 0 |
| Qualifying China province rows | 0 |
| Qualifying rows with practice | 0 |
| Organic arsenic rows on a rice matrix, excluded | 12 |
| Rice-matrix iAs or tAs rows missing sampling_country | 426 |
| Rice-matrix iAs or tAs rows with country and no year | 13 |
| Rows dropped for lack of a concentration field | 0 |
| Value rows whose source is absent from the rice-arsenic geo-hist set | 15 |

Qualifying rows by source:

| Source | Rows |
| --- | ---: |
| fda2022-tds-elements-fy2018-fy2020 | 116 |
| toledo2024-essential-toxic-elements-infant-cereal-brazil | 14 |
| damato2026-inorganic-arsenic-rice-based-beverages | 2 |
| noh2023-arsenic-rice-snacks-korea | 1 |

## Gaps that block a fully cited baseline

### China by province

Qualifying China province rows: 0. Qualifying sampling_country CN rows: 0. The geography ledger did not copy an admin-1 name onto a qualifying rice arsenic row.

`jurisdictions: [CN]` is not a sampling country. 27 rice arsenic source pages carry jurisdiction CN and an empty `sampling_locations` array. The contract does not promote that array.

Source pages below name a Chinese place in the title or in `sample_population`, and the title or a matrix names rice, while `sampling_locations` is empty. The place names are not sampling_region values, and they are not in the download. A page can name a province and still omit a concentration for that province. Tian 2024's source page says the paper does not provide a per-province breakdown of the inorganic arsenic values. A province baseline needs both a copied admin-1 field and a concentration tied to that province.

| Source | Place names in title or sample_population | Jurisdictions | sampling_year_range |
| --- | --- | --- | --- |
| dai2024-chongqing-dietary-arsenic-exposure | Chongqing | CN |  |
| fu2025-low-accumulation-rice-hg-cd | Guizhou | CN |  |
| hao2022-probabilistic-risk-rice-mining-county | Hunan | CN |  |
| liang2019-beijing-foodstuffs-health-risk | Beijing | CN |  |
| liu2022-heavy-metals-rice-maize-chengdu | Sichuan, Chengdu | CN |  |
| liu2023-xingren-rice-paddy-soil-heavy-metals | Guizhou | CN |  |
| tan2022-organic-fertilizer-rice-cd-arsenic | Hunan | CN |  |
| tian2024-voltammetric-ias-rice | Heilongjiang, Anhui, Jiangsu, Hunan, Guangdong, Beijing | CN |  |
| wei2025-cd-as-rice-yunnan-karst-thresholds | Yunnan | CN |  |
| yan2025-rice-heavy-metals-henan-china | Henan | CN |  |
| zhang2026-trace-metals-five-crops-chongqing | Chongqing | CN |  |

### Inorganic arsenic versus total arsenic

The qualifying download has 28 inorganic arsenic rows and 105 total arsenic rows. 25 of the inorganic rows are rice cereal, and 26 of the inorganic rows have sampling country US. Qualifying rice-grain rows with a sampling country other than US: 1. The next table lists sources that stored a country and no sampling year.

Country present, year absent:

| Source | Rows |
| --- | ---: |
| alrashdi2024-rice-ias-cd-pb-hg-saudi-arabia | 4 |
| jung2017-iAs-infant-rice-snacks-korea | 3 |
| navaretnam-2025-rice-as-speciation | 2 |
| shi2020-rice-based-infant-food-cadmium-arsenic | 2 |
| wehmeier2023-ias-rice-cola-field-method | 2 |

Year present, country absent (not qualifying):

| Source | Rows |
| --- | ---: |
| fda2024-toxic-elements-baby-food-compliance-2009-2024 | 264 |
| who-gemsfood-heavy-metal-contaminants | 85 |
| fda2016-infant-toddler-foods-inorganic-arsenic | 76 |
| us-house-subcommittee2021-baby-foods-tainted-heavy-metals | 1 |

WHO GEMS/Food region names were not copied as countries. FDA program names were not copied as the United States. FDA 2016 rows whose country-of-origin cell says Not Specified do not inherit a study-level country. Those rules belong to the geo-hist backfill. This brief does not relax them.

Literature findings whose source_id never appears in the rice-arsenic geo-hist set are an additional gap. They have a concentration and no copied country or year. They are not in the download.

| Source | Value rows |
| --- | ---: |
| signes-pastor2016-inorganic-arsenic-rice-products-infants | 6 |
| fsa2016-infant-food-formula-metals-survey | 4 |
| tian2024-voltammetric-ias-rice | 3 |
| jackson2012-arsenic-organic-foods-brown-rice-syrup | 2 |

### Year spans and matrix class

16 qualifying rows have a start year different from the end year. They stay one row. Filling a single calendar year from a span would invent a year.

Matrix classes in the download are `rice_grain`, `rice_cereal`, `rice_product`, and `rice_containing_mixture`. Mixed meals that name rice are not rice grain. Infant cereal that also names another grain stays in `rice_cereal` with the printed food label.

Rows whose summary text says HMR while the matrix slug is rice-bulk-grain. The slug was not relabeled.

| row_id | source | species | matrix | statistic_scope |
| --- | --- | --- | --- | --- |
| csv:data/evidence/category1_autonomy_extracted_summary.csv:430 | noh2023-arsenic-rice-snacks-korea | iAs | rice-bulk-grain | - HMR rice: ND–90.5 µg/kg, mean 30.9, iAs/tAs 29% |

### Practice

Qualifying rows with a practice field: 0. Flooded, alternate wetting and drying, and upland management are not available as a split on this contract.

### What would unblock the baseline

A fully cited country-by-year grid needs sampling country and a single sampling year on the same rice-matrix row, with iAs and tAs kept apart, and with the basis left as reported. A China province grid needs `sampling_region` copied from a stated province, plus a concentration for that province. Pages that already name a province in `sample_population` need that statement copied into `sampling_locations` before it can enter this contract. Pages whose primary PDF is not in the repo still need the file fetched before a new row can be extracted. This pass did not fetch files and did not edit source pages.
