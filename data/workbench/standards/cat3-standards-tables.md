# Category 3 — Grains, Cereals, and Rice Products: HMTc standards tables (staff-side)

Generated 2026-08-10 by `tools/standards/render-cat3-standards-tables.mjs` from the government-limit compiler output in `data/workbench/standards/cat3-compiled/`. **Staff/HMTc content — not a public wiki page** (Part 2 / Part 19 firewall). Values in ppb (µg/kg). Native basis per subcategory. Method: HMTc Method v2.0 government-limit default (strictest credible government ML by lookup, converted to native basis; occurrence pooling not invoked — see the derivation note). Full HMTc 10-analyte panel (Pb, iAs, tAs, tHg, MeHg, Cd, Cr-VI, Ni, Sn, Al); every cell resolves explicitly to a government limit or a substantiated not-material determination. "n/m" = registered not-material or confirmed no-ML (see `standards-not-material.csv` / `standards-no-ml-confirmed.csv`).

## Binding limit per (subcategory, analyte)

| # | Subcategory | Role | Basis | Pb | iAs | tAs | tHg | MeHg | Cd | Cr-VI | Ni | Sn | Al |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Flour (wheat, corn, other — non-rice) | clean (non-rice) | as_sold | **100** CU | n/m | **200** PY | **30** IL | n/m | **100** EU | n/m | **800** EU | n/m | 100000 (RA CN) |
| 2 | Bread and baked goods (non-rice) | clean (non-rice) | as_sold | **100** CU | n/m | **300** PY | **30** IL | n/m | **100** EU | n/m | **800** EU | n/m | **100000** CN |
| 3 | Pasta (wheat-based) | clean (non-rice) | as_sold | **100** CU | n/m | **200** PY | **30** IL | n/m | **100** EU | n/m | **800** EU | n/m | n/m |
| 4 | Breakfast cereal (non-rice) | clean (non-rice) | as_sold | **100** CU | n/m | **200** PY | **30** IL | n/m | **100** EU | n/m | **800** EU | n/m | 100000 (RA CN) |
| 5 | Other grain products (oat, millet, quinoa, barley) | clean (non-rice) | as_sold | **100** CU | n/m | **300** PY | **30** IL | n/m | **50** EU | n/m | **800** EU | n/m | n/m |
| 6 | Grain-based snacks (crackers, biscuits, cookies, popcorn, pretzels — non-rice) | clean (non-rice) | as_sold | **100** CU | n/m | **300** PY | **30** IL | n/m | **100** EU | n/m | **800** EU | n/m | **100000** CN |
| 7 | Rice (white, brown, wild — bulk grain) | dirty (rice) | as_sold | **200** PY | **150** EU | **300** PY | **30** IL | n/m | **100** AU-NZ | n/m | **1500** EU | n/m | n/m |
| 8 | Pasta (rice-based) | dirty (rice) | as_sold | **200** PY | **250** EU | **300** PY | **30** IL | n/m | **100** AU-NZ | n/m | **1500** EU | n/m | **200000** CN |
| 9 | Rice noodles | dirty (rice) | as_sold | **200** PY | **250** EU | **300** PY | **30** IL | n/m | **100** AU-NZ | n/m | **1500** EU | n/m | **200000** CN |
| 10 | Breakfast cereal (rice-based) | dirty (rice) | as_sold | **200** PY | **300** EU | **300** PY | **30** IL | n/m | **100** AU-NZ | n/m | **1500** EU | n/m | 100000 (RA CN) |
| 11 | Rice snacks / crackers (rice cakes, wafers) | dirty (rice) | as_sold | **200** PY | **300** EU | **300** PY | **30** IL | n/m | **100** AU-NZ | n/m | **1500** EU | n/m | 100000 (RA CN) |
| 12 | Rice beverages (rice milk) | dirty (rice) | as_consumed | n/m | **30** EU | n/m | n/m | n/m | n/m | n/m | n/m | n/m | n/m |

## Provenance — binding register row per cell


### Flour (wheat, corn, other — non-rice) `flour-non-rice` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 200 | gov | `py_decreto1335_2019_wheat_derivatives_except_oil_tas_200` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `eu2023_cd_cereals_general_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | read_across | `cn_gb2760_2024_al_baked_foods_100000` |

### Bread and baked goods (non-rice) `bread-and-baked-goods` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 300 | gov | `py_decreto1335_2019_cereals_excluding_wheat_rice_oils_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `eu2023_cd_cereals_general_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | gov | `cn_gb2760_2024_al_baked_foods_100000` |

### Pasta (wheat-based) `pasta-wheat-based` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 200 | gov | `py_decreto1335_2019_wheat_derivatives_except_oil_tas_200` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `eu2023_cd_cereals_general_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | n/m | not_material | `not-material` |

### Breakfast cereal (non-rice) `breakfast-cereal-non-rice` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 200 | gov | `py_decreto1335_2019_wheat_derivatives_except_oil_tas_200` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `eu2023_cd_cereals_general_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | read_across | `cn_gb2760_2024_al_baked_foods_100000` |

### Other grain products (oat, millet, quinoa, barley) `other-grain-products` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 300 | gov | `py_decreto1335_2019_cereals_excluding_wheat_rice_oils_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 50 | gov | `eu2023_cd_barley_rye_50` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | n/m | not_material | `not-material` |

### Grain-based snacks (crackers, biscuits, cookies, popcorn, pretzels — non-rice) `grain-based-snacks` (clean/non-rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 100 | gov | `cu_nc877_2012_pb_processed_cereals_100` |
| iAs | n/m | not_material | `not-material` |
| tAs | 300 | gov | `py_decreto1335_2019_cereals_excluding_wheat_rice_oils_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `eu2023_cd_cereals_general_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 800 | gov | `eu2024_ni_cereals_800` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | gov | `cn_gb2760_2024_al_baked_foods_100000` |

### Rice (white, brown, wild — bulk grain) `rice-bulk-grain` (dirty/rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 200 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_pb_200` |
| iAs | 150 | gov | `eu2023_ias_rice_milled_150` |
| tAs | 300 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `aunz_sch19_cd_rice_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 1500 | gov | `eu2024_ni_durum_rice_1500` |
| Sn | n/m | not_material | `not-material` |
| Al | n/m | not_material | `not-material` |

### Pasta (rice-based) `pasta-rice-based` (dirty/rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 200 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_pb_200` |
| iAs | 250 | gov | `eu2023_ias_rice_parboiled_husked_flour_250` |
| tAs | 300 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `aunz_sch19_cd_rice_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 1500 | gov | `eu2024_ni_durum_rice_1500` |
| Sn | n/m | not_material | `not-material` |
| Al | 200000 | gov | `cn_gb2760_2024_al_starch_noodles_vermicelli_200000` |

### Rice noodles `rice-noodles` (dirty/rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 200 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_pb_200` |
| iAs | 250 | gov | `eu2023_ias_rice_parboiled_husked_flour_250` |
| tAs | 300 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `aunz_sch19_cd_rice_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 1500 | gov | `eu2024_ni_durum_rice_1500` |
| Sn | n/m | not_material | `not-material` |
| Al | 200000 | gov | `cn_gb2760_2024_al_starch_noodles_vermicelli_200000` |

### Breakfast cereal (rice-based) `breakfast-cereal-rice-based` (dirty/rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 200 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_pb_200` |
| iAs | 300 | gov | `eu2023_ias_rice_products_300` |
| tAs | 300 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `aunz_sch19_cd_rice_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 1500 | gov | `eu2024_ni_durum_rice_1500` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | read_across | `cn_gb2760_2024_al_baked_foods_100000` |

### Rice snacks / crackers (rice cakes, wafers) `rice-snacks-crackers` (dirty/rice, native as_sold)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | 200 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_pb_200` |
| iAs | 300 | gov | `eu2023_ias_rice_products_300` |
| tAs | 300 | gov | `py_decreto1335_2019_rice_derivatives_except_oil_tas_300` |
| tHg | 30 | gov | `il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30` |
| MeHg | n/m | not_material | `not-material` |
| Cd | 100 | gov | `aunz_sch19_cd_rice_100` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | 1500 | gov | `eu2024_ni_durum_rice_1500` |
| Sn | n/m | not_material | `not-material` |
| Al | 100000 | read_across | `cn_gb2760_2024_al_baked_foods_100000` |

### Rice beverages (rice milk) `rice-beverages-rice-milk` (dirty/rice, native as_consumed)

| Analyte | Value (ppb) | Type | Binding row / determination |
|---|---|---|---|
| Pb | n/m | not_material | `not-material` |
| iAs | 30 | gov | `eu2023_ias_rice_drinks_30` |
| tAs | n/m | not_material | `not-material` |
| tHg | n/m | not_material | `not-material` |
| MeHg | n/m | not_material | `not-material` |
| Cd | n/m | not_material | `not-material` |
| Cr-VI | n/m | not_material | `not-material` |
| Ni | n/m | not_material | `not-material` |
| Sn | n/m | not_material | `not-material` |
| Al | n/m | not_material | `not-material` |
