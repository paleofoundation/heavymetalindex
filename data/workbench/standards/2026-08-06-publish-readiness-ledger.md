# HMTc standards — publish-readiness ledger

Generated 2026-08-06 from `data/workbench/standards/hmtc_standards_catalog.json` (Method v2.0 government-limit default).

## Headline

All 43 in-scope locked analyte cells already have a resolved value. **Zero are blocked on missing regulatory data; zero require ingesting another PDF.** The finish line is a review/adjudication pass, not ingest.

| Bucket | Cells | Action to publish |
|---|--:|---|
| Already published | 3 | — |
| Cap-bound firm (government ML binds) | 10 | across-row RESOLVED marker (ratified Method v2.0 lookup — verification only) |
| Occurrence firm (beats law) | 6 | clean/dirty across-row judgment, then RESOLVED marker |
| Provisional (sensitivity/single-source) | 12 | occurrence-sensitivity adjudication |
| Outlier pending | 5 | outlier adjudication |
| Other held | 7 | see held_reason |

## Cap-bound firm — government ML binds (ratified-lookup publishable) (10)

| product | analyte | value ppb | source | held_reason |
|---|---|--:|---|---|
| breakfast-cereal-non-rice | Pb | 200 | aunz_sch19_pb_cereals_200 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| breakfast-cereal-non-rice | Cd | 100 | eu2023_cd_cereals_general_100 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| breakfast-cereal-rice-based | tAs | 1000 | aunz_sch19_tas_cereal_grains_1000 | gate1:across_row_review_hook ACTIVE |
| breakfast-cereal-rice-based | iAs | 300 | eu2023_ias_rice_products_300 | gate1:across_row_review_hook ACTIVE |
| breakfast-cereal-rice-based | Cd | 150 | eu2023_cd_rice_quinoa_wheatbran_150 | gate1:across_row_review_hook ACTIVE |
| fish-freshwater | Pb | 300 | eu2023_pb_fish_muscle_300 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| fish-marine-non-predatory | tHg | 500 | eu2023_hg_fish_muscle_500 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| shellfish | Pb | 1500 | eu2023_pb_bivalve_1500 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| shellfish | Cd | 1000 | eu2023_cd_bivalve_1000 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| salt | Pb | 1000 | eu2023_pb_salt_1000 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |

## Occurrence firm — beats law (needs clean/dirty review) (6)

| product | analyte | value ppb | source | held_reason |
|---|---|--:|---|---|
| seaweed-kelp-foods | Cd | 9154.9322 | occurrence | gate1:across_row_review_hook RESOLVED but Cd HELD |
| butter-and-ghee | Pb | 20.6242 | eu2023_pb_fats_oils_100 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| butter-and-ghee | Cd | 36.9461 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| cooking-oils-other | Ni | 84.9212 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| honey | Pb | 1410.2946 | occurrence | gate1:across_row_review_hook ACTIVE |
| spices | Cd | 896.2202 | occurrence | gate1:whole_row_platform RESOLVED hook does not name Cd and cell is not cap-bound |

## Provisional — occurrence-sensitivity adjudication (12)

| product | analyte | value ppb | source | held_reason |
|---|---|--:|---|---|
| fish-marine-non-predatory | Cd | 50 | eu2023_cd_fish_muscle_50 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| fish-marine-non-predatory | MeHg | 174.69 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker); gate3:classify-provisional (literature-baseline) |
| shellfish | iAs | 109.4872 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker); gate3:classify-provisional (literature-baseline) |
| olive-oil | tAs | 607.9522 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker); gate3:classify-provisional (literature-baseline) |
| cooking-oils-other | Pb | 100 | eu2023_pb_fats_oils_100 | gate1:across_row_review_hook unresolved (no RESOLVED marker) |
| honey | Cd | 89.5319 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:classify-provisional (literature-baseline) |
| vinegar | tAs | 232.0941 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:classify-provisional (literature-baseline) |
| vinegar | Cd | 75.6352 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:classify-provisional (literature-baseline) |
| chocolate | tAs | 344.0176 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:classify-provisional (literature-baseline) |
| chocolate | Cd | 100 | eu2023_cd_chocolate_lowcocoa_100 | gate1:across_row_review_hook ACTIVE |
| spices | tAs | 702.9366 | occurrence | gate1:whole_row_platform RESOLVED hook does not name tAs and cell is not cap-bound; gate3:classify-provisional (literature-baseline) |
| salt | Cd | 16.367 | eu2023_cd_salt_500 | gate1:across_row_review_hook unresolved (no RESOLVED marker); gate3:classify-provisional (literature-baseline) |

## Outlier adjudication pending (5)

| product | analyte | value ppb | source | held_reason |
|---|---|--:|---|---|
| seaweed-kelp-foods | tAs | 139005.266 | occurrence | gate1:across_row_review_hook RESOLVED but tAs HELD; gate3:outlier-adjudication-pending; gate3:classify-provisional (literature-baseline) |
| seaweed-kelp-foods | iAs | 81905.3623 | occurrence | gate3:outlier-adjudication-pending |
| cooking-oils-other | Cd | 56.7457 | occurrence | gate1:across_row_review_hook unresolved (no RESOLVED marker); gate3:outlier-adjudication-pending; gate3:classify-provisional (literature-baseline) |
| vinegar | Pb | 848.0997 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:outlier-adjudication-pending |
| chocolate | Pb | 2113.1679 | occurrence | gate1:across_row_review_hook ACTIVE; gate3:outlier-adjudication-pending; gate3:classify-provisional (literature-baseline) |

## Already published (3)

| product | analyte | value ppb | source | held_reason |
|---|---|--:|---|---|
| fish-marine-predatory | Cd | 50 | eu2023_cd_fish_muscle_50 | — |
| fish-marine-predatory | tHg | 1000 | eu2023_hg_predatory_fish_1000 | — |
| spices | Pb | 600 | eu2023_pb_spice_fruit_600 | — |

