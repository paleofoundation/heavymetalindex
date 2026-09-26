---
title: Rice arsenic Ground Truth coverage
schema_version: 1.1.0
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
- The joined record is a concentration row (a numeric concentration field or a `field_value_summary`) or a count-only row (`coverage_kind` is `count_only`, `n` is greater than zero, and no concentration field is present).

## Counts after those filters

| Measure | Count |
| --- | ---: |
| geo_hist.jsonl rows | 42914 |
| Rice-matrix iAs or tAs rows in geo_hist | 662 |
| Qualifying rows (country and year, concentration or count-only) | 223 |
| Concentration rows | 166 |
| Count-only rows | 57 |
| Qualifying iAs | 60 |
| Qualifying tAs | 163 |
| Single-year qualifying rows | 202 |
| Year-span qualifying rows, not expanded | 21 |
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
| efsa2021-rice-arsenic-annex-a-origin-year | 49 |
| toledo2024-essential-toxic-elements-infant-cereal-brazil | 14 |
| hc2018-canadian-tds-trace-elements-white-rice | 12 |
| fda2013-ias-rice-products-sampling | 6 |
| maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024 | 6 |
| maff2022-japan-rice-inorganic-arsenic-2017-2019 | 5 |
| maff2014-japan-rice-arsenic-fy2012 | 4 |
| alrashdi2024-myanmar-rice-arsenic | 2 |
| damato2026-inorganic-arsenic-rice-based-beverages | 2 |
| fsanz2019-25th-atds-appendices-arsenic | 2 |
| chu2021-vietnam-rice-arsenic | 1 |
| fsanz2011-23rd-atds-appendices-arsenic | 1 |
| myatsoe2023-myanmar-rice-metals | 1 |
| noh2023-arsenic-rice-snacks-korea | 1 |
| shao2023-nepal-rice-heavy-metals | 1 |

## Gaps that block a fully cited baseline

### Rows kept out of the country table

Unknown origin, a label that is not a country, a year that was not stated, a concentration that was not extracted, a mixed species label, and China by province stay in `data/evidence/rice_arsenic_baseline_gaps.csv`. They are not country-year rows.

| Gap | Country label | Years | Analyte | n | Reason |
| --- | --- | --- | --- | --- | --- |
| efsa-XX-2016-tAs | unknown origin (EFSA XX) | 2016 | tAs | 1 | unknown_origin |
| efsa-XX-2017-tAs | unknown origin (EFSA XX) | 2017 | tAs | 1 | unknown_origin |
| efsa-XX-2018-tAs | unknown origin (EFSA XX) | 2018 | tAs | 54 | unknown_origin |
| efsa-XX-2018-iAs | unknown origin (EFSA XX) | 2018 | iAs | 33 | unknown_origin |
| efsa-XD-2018-tAs | unknown origin (EFSA XD) | 2018 | tAs | 8 | unknown_origin |
| efsa-XD-2018-iAs | unknown origin (EFSA XD) | 2018 | iAs | 1 | unknown_origin |
| efsa-EU-2018-tAs | EU (unspecified) | 2018 | tAs | 10 | not_a_country |
| yuliani2025-tas | Indonesia | not stated | tAs | not extracted | not_extracted |
| yuliani2025-ias | Indonesia | not stated | iAs | not extracted | not_extracted |
| murphy2018-tas | Cambodia | not stated | tAs | 105 | year_not_stated |
| murphy2019-tas | Cambodia | 2016 | tAs | not extracted | not_extracted |
| murphy2020-species | Cambodia | 2016 | tAs; iAs | 70 | species_not_separated |
| hasan2022-tas | Bangladesh | 2021 | tAs | not extracted | not_extracted |
| shaheen2024-tas | Bangladesh | not stated | tAs | not extracted | not_extracted |
| saini2025-tas | India | 2023 | tAs | not extracted | not_extracted |
| tatahmentan2020-tas | United States | not stated | tAs | 39 | year_not_stated |
| fernandezbaca2020-ias | United States | 2013; 2014 | iAs | not extracted | not_extracted |
| seyfferth2025-species | United States | 2016; 2017 | tAs; iAs | not extracted | species_not_separated |
| norton2017-tas | Bangladesh | 2014 | tAs | not extracted | not_extracted |
| majumder2021-species | India | not stated | tAs; iAs | not extracted | species_not_separated |
| guo2025-china-province | China | post-v1 | iAs |  | post_v1_china_province |

### Lu 2023 manifest

lu2023 (2023), Foods 12:542, p2. Analytes: Cd; Cr; iAs. Corrected analyte list. Lead and mercury are not on this manifest. The PDF is not in the attached archives. No DOI is recorded. Province concentrations are not extracted. This row is not a completed ingest.

### China by province

Qualifying China province rows: 0. Qualifying sampling_country CN rows: 0. China by province is not in this version. Guo et al. (2025), Journal of Environmental Management, 388, 126024, https://doi.org/10.1016/j.jenvman.2025.126024, is the lead for a later province pass. The geography ledger did not copy an admin-1 name onto a qualifying rice arsenic row.

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

The qualifying download has 60 inorganic arsenic rows and 163 total arsenic rows. 25 of the inorganic rows are rice cereal, and 28 of the inorganic rows have sampling country US. Qualifying rice-grain rows with a sampling country other than US: 87. The next table lists sources that stored a country and no sampling year.

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

21 qualifying rows have a start year different from the end year. They stay one row. Filling a single calendar year from a span would invent a year.

Matrix classes in the download are `rice_grain`, `rice_cereal`, `rice_product`, and `rice_containing_mixture`. Mixed meals that name rice are not rice grain. Infant cereal that also names another grain stays in `rice_cereal` with the printed food label.

Rows whose summary text says HMR while the matrix slug is rice-bulk-grain. The slug was not relabeled. Each of these rows carries slug_flag.

| row_id | source | species | matrix | statistic_scope |
| --- | --- | --- | --- | --- |
| csv:data/evidence/category1_autonomy_extracted_summary.csv:430 | noh2023-arsenic-rice-snacks-korea | iAs | rice-bulk-grain | - HMR rice: ND–90.5 µg/kg, mean 30.9, iAs/tAs 29% |

### Practice

Qualifying rows with a practice field: 0. Flooded, alternate wetting and drying, and upland management are not available as a split on this contract.

### What would unblock the baseline

A fully cited country-by-year grid needs sampling country and a single sampling year on the same rice-matrix row, with iAs and tAs kept apart, and with the basis left as reported. A China province grid needs `sampling_region` copied from a stated province, plus a concentration for that province. Pages that already name a province in `sample_population` need that statement copied into `sampling_locations` before it can enter this contract. Pages whose primary PDF is not in the repo still need the file fetched before a new row can be extracted. This pass did not fetch files and did not edit source pages.
