# GEO-HIST coverage

Generated 2026-09-29 by `tools/evidence/geo-hist.mjs`. This file is a ledger coverage brief. It is not a public wiki page.

## What was counted

A measurement row is one numeric literature-finding record in `data/evidence/values.jsonl`, or one row in a per-study concentration CSV. Where a sample-level CSV exists for a source, those sample rows are the measurements and the matching summary rows in `values.jsonl` are not counted again. Summary CSVs are counted only for sources that have neither a sample file nor a `values.jsonl` literature row, and only when the row carries a concentration statistic or a count-only coverage row with n greater than zero. WHO GEMS/Food grouped summaries count when a lower-bound µg/kg percentile is filled. Rows in that file with an empty percentile and `n_numeric_or_censored` of 0 are omitted. A category phrase that begins with "excluding" is ignored when the food group is chosen, so "excluding cocoa products" does not place tea in the cocoa group. A non-rice token is removed before the food-group rules run, so a slug such as mixed-meals-non-rice is not placed in Rice. FDA Total Diet Study rows are limited to the heavy-metal species on the row (`metal_species` in Pb, Cd, iAs, tAs, MeHg, tHg, Hg, Ni, Al, Cr, Cr-VI, Cr-total, Sn, Sb, U). Nutrient rows in that file are not concentration rows for this brief.

## What was copied

Filled fields come from source-page `sampling_locations`, `sampling_year_range`, and explicit collection wording in `sample_population`, or from CSV columns that already name a place, year, or practice (`country_of_origin`, `market`, `market_region`, `calendar_year`, `fiscal_year`, `fiscal_year_min`, `fiscal_year_max`, `sampling_period`, `year_min`, `year_max`). `geo_provenance` records the file and field. `jurisdictions` is not copied. Author affiliation is not copied. A printed FDA or WHO program name is not treated as a country. WHO GEMS/Food `region_name` values (EURO, WPRO, PAHO, SEARO, AFRO, EMRO, European Union, Codex Committee Near-East) and `food_origins` values (Domestic, Imported, Unknown, Mixed) are not sampling countries and are not copied. A CSV cell that says Unknown or Not Specified blocks country inheritance for that row. FDA Total Diet Study region names (National, Southeast, Northeast, West, Mid-Atlantic, Southwest, North Central) are not admin-1 names, so `sampling_region` stays empty. `practice: unknown` is not written as a placeholder.

## Ledger totals

| Measure | Count |
| --- | ---: |
| Measurement rows | 52969 |
| Rows with any geography, year, or practice field | 42914 |
| Rows with sampling country | 23972 |
| Rows with admin-1 region | 40 |
| Rows with sampling year | 42158 |
| Rows with practice | 91 |
| Rows with a printed lat/lon pair | 0 |

## Coverage by food or matrix group

| Food or matrix group | Rows | With country | Country % | With admin-1 | Admin-1 % | With sampling year | Year % | With practice | Practice % | Countries | Year span |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Rice | 1094 | 772 | 70.6 | 0 | 0.0 | 975 | 89.1 | 4 | 0.4 | 35 | 1996 to 2026 |
| Baby food inputs | 5019 | 1722 | 34.3 | 0 | 0.0 | 4438 | 88.4 | 76 | 1.5 | 12 | 1998 to 2025 |
| Cocoa and chocolate | 1139 | 691 | 60.7 | 0 | 0.0 | 1068 | 93.8 | 0 | 0.0 | 3 | 1998 to 2026 |
| Chickpeas and pulses | 826 | 162 | 19.6 | 0 | 0.0 | 809 | 97.9 | 0 | 0.0 | 4 | 1995 to 2025 |
| Spices | 1706 | 410 | 24.0 | 7 | 0.4 | 1544 | 90.5 | 0 | 0.0 | 13 | 1998 to 2024 |
| Protein powders | 21 | 21 | 100.0 | 0 | 0.0 | 21 | 100.0 | 0 | 0.0 | 1 | 2018 to 2020 |
| Fruit juice | 2499 | 463 | 18.5 | 0 | 0.0 | 2325 | 93.0 | 9 | 0.4 | 3 | 1999 to 2023 |
| Tea | 200 | 21 | 10.5 | 0 | 0.0 | 194 | 97.0 | 0 | 0.0 | 1 | 1998 to 2023 |
| Seafood | 3396 | 921 | 27.1 | 18 | 0.5 | 2716 | 80.0 | 0 | 0.0 | 18 | 1969 to 2025 |
| Other | 10561 | 7687 | 72.8 | 14 | 0.1 | 8839 | 83.7 | 0 | 0.0 | 24 | 1900 to 2024 |
| Vegetables | 5666 | 2298 | 40.6 | 1 | 0.0 | 4969 | 87.7 | 0 | 0.0 | 4 | 1994 to 2024 |
| Meat and poultry | 4175 | 2930 | 70.2 | 0 | 0.0 | 4098 | 98.2 | 0 | 0.0 | 6 | 1998 to 2023 |
| Fruit | 3341 | 1398 | 41.8 | 0 | 0.0 | 3304 | 98.9 | 0 | 0.0 | 3 | 1998 to 2024 |
| Dairy and milk | 2752 | 2278 | 82.8 | 0 | 0.0 | 2700 | 98.1 | 0 | 0.0 | 4 | 1996 to 2023 |
| Grains other than rice | 2628 | 1574 | 59.9 | 0 | 0.0 | 2612 | 99.4 | 0 | 0.0 | 3 | 1995 to 2024 |
| Soil and sediment | 2516 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 |  |
| In vitro and experimental | 2094 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 |  |
| Animal feed and pet food | 978 | 1 | 0.1 | 0 | 0.0 | 26 | 2.7 | 0 | 0.0 | 1 | 2004 to 2023 |
| Nuts and seeds | 925 | 233 | 25.2 | 0 | 0.0 | 885 | 95.7 | 0 | 0.0 | 2 | 1995 to 2023 |
| Herbs and botanicals | 372 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 |  |
| Oils and fats | 310 | 254 | 81.9 | 0 | 0.0 | 228 | 73.5 | 2 | 0.6 | 9 | 2000 to 2024 |
| Environmental water | 211 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 |  |
| Coffee | 153 | 21 | 13.7 | 0 | 0.0 | 148 | 96.7 | 0 | 0.0 | 1 | 1999 to 2023 |
| Drinking water | 126 | 0 | 0.0 | 0 | 0.0 | 117 | 92.9 | 0 | 0.0 | 0 | 2001 to 2023 |
| Seaweed and algae | 75 | 12 | 16.0 | 0 | 0.0 | 31 | 41.3 | 0 | 0.0 | 5 | 2010 to 2024 |
| Plant-based beverages | 72 | 68 | 94.4 | 0 | 0.0 | 68 | 94.4 | 0 | 0.0 | 3 | 2018 to 2023 |
| Supplements | 48 | 11 | 22.9 | 0 | 0.0 | 43 | 89.6 | 0 | 0.0 | 2 | 2000 to 2023 |
| Human biomonitoring | 36 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 0 |  |
| Cosmetics and personal care | 30 | 24 | 80.0 | 0 | 0.0 | 0 | 0.0 | 0 | 0.0 | 2 |  |

Year span is the minimum `sampling_year_start` and the maximum `sampling_year_end` among rows that have a sampling year. An empty span means no row in that group had a stated sampling year.

## Top 50 source pages for a human read

Ranked by measurement rows that still lack an admin-1 region or a sampling year. One PDF read of a high-ranked page fills the most empty rows. Affiliation and `jurisdictions` were left empty on purpose, so a page can rank here even when a country code sits in `jurisdictions`.

| Rank | Source | Page | Rows | Missing region or year | Missing country | Missing admin-1 | Missing year |
| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | fda2022-tds-elements-fy2018-fy2020 | wiki/sources/fda2022-tds-elements-fy2018-fy2020.md | 23021 | 23021 | 0 | 23021 | 0 |
| 2 | who-gemsfood-heavy-metal-contaminants | wiki/sources/who-gemsfood-heavy-metal-contaminants.md | 13872 | 13872 | 13872 | 13872 | 0 |
| 3 | fda2024-toxic-elements-baby-food-compliance-2009-2024 | wiki/sources/fda2024-toxic-elements-baby-food-compliance-2009-2024.md | 1944 | 1944 | 1944 | 1944 | 0 |
| 4 | fda2018-lead-in-juice-fy2005-fy2018 | wiki/sources/fda2018-lead-in-juice-fy2005-fy2018.md | 1643 | 1643 | 1643 | 1643 | 0 |
| 5 | fda2026-infant-formula-toxic-elements-special-survey | wiki/sources/fda2026-infant-formula-toxic-elements-special-survey.md | 1248 | 1248 | 1248 | 1248 | 0 |
| 6 | ibikunle2025-functionalized-nanotubes-chromium-removal | wiki/sources/ibikunle2025-functionalized-nanotubes-chromium-removal.md | 917 | 917 | 917 | 917 | 917 |
| 7 | authors2019-toxicology-reports-6-2019-472-481 | wiki/sources/authors2019-toxicology-reports-6-2019-472-481.md | 659 | 659 | 659 | 659 | 659 |
| 8 | dai2016-texas-animal-feed-metals | wiki/sources/dai2016-texas-animal-feed-metals.md | 621 | 621 | 621 | 621 | 621 |
| 9 | kananke2026-sri-lanka-leaf-bioaccessibility | wiki/sources/kananke2026-sri-lanka-leaf-bioaccessibility.md | 613 | 613 | 613 | 613 | 613 |
| 10 | gergen2012-banat-mining-vegetable-pca | wiki/sources/gergen2012-banat-mining-vegetable-pca.md | 581 | 581 | 581 | 581 | 581 |
| 11 | sharafi2026-nahavand-soil-water-crop-metals | wiki/sources/sharafi2026-nahavand-soil-water-crop-metals.md | 552 | 552 | 552 | 552 | 552 |
| 12 | rueda-saa2025-valle-del-cauca-agricultural-soils | wiki/sources/rueda-saa2025-valle-del-cauca-agricultural-soils.md | 518 | 518 | 518 | 518 | 518 |
| 13 | nica2012-banat-soil-nettle-snail-metals | wiki/sources/nica2012-banat-soil-nettle-snail-metals.md | 460 | 460 | 460 | 460 | 460 |
| 14 | joseph2025-gobbiya-dam-vegetable-metals | wiki/sources/joseph2025-gobbiya-dam-vegetable-metals.md | 453 | 453 | 453 | 453 | 453 |
| 15 | authors2017-risk-assessment-for-children-exposed-to-arsenic | wiki/sources/authors2017-risk-assessment-for-children-exposed-to-arsenic.md | 440 | 440 | 440 | 440 | 440 |
| 16 | authors2019-spatial-contamination-and-health-risks-of-heavy-metal | wiki/sources/authors2019-spatial-contamination-and-health-risks-of-heavy-metal.md | 375 | 375 | 375 | 375 | 375 |
| 17 | dyakova2023-voronezh-medicinal-plant-metals | wiki/sources/dyakova2023-voronezh-medicinal-plant-metals.md | 372 | 372 | 372 | 372 | 372 |
| 18 | pille2021-foamed-hydrogels-metal-removal | wiki/sources/pille2021-foamed-hydrogels-metal-removal.md | 331 | 331 | 331 | 331 | 331 |
| 19 | cat2024-individual-and-combined-contamination-of-the-heavy-metals | wiki/sources/cat2024-individual-and-combined-contamination-of-the-heavy-metals.md | 255 | 255 | 255 | 255 | 255 |
| 20 | fsa2016-infant-food-formula-metals-survey | wiki/sources/fsa2016-infant-food-formula-metals-survey.md | 201 | 201 | 201 | 201 | 201 |
| 21 | fda2016-infant-toddler-foods-inorganic-arsenic | wiki/sources/fda2016-infant-toddler-foods-inorganic-arsenic.md | 173 | 173 | 113 | 173 | 173 |
| 22 | skin2010-significant-risks-for-dermal-oral-lead-exposures-despite | wiki/sources/skin2010-significant-risks-for-dermal-oral-lead-exposures-despite.md | 169 | 169 | 169 | 169 | 169 |
| 23 | bashkin2021-vegetable-risk-review | wiki/sources/bashkin2021-vegetable-risk-review.md | 124 | 124 | 124 | 124 | 124 |
| 24 | oprea2022-sibiu-celery-root-metals | wiki/sources/oprea2022-sibiu-celery-root-metals.md | 114 | 114 | 114 | 114 | 114 |
| 25 | agwaramgbo2012-there-is-a-growing-global-concern-for-the | wiki/sources/agwaramgbo2012-there-is-a-growing-global-concern-for-the.md | 97 | 97 | 97 | 97 | 97 |
| 26 | fda2011-apple-juice-arsenic-speciation | wiki/sources/fda2011-apple-juice-arsenic-speciation.md | 94 | 94 | 94 | 94 | 94 |
| 27 | ghimire2026-jacaranda-carbon-chromium-removal | wiki/sources/ghimire2026-jacaranda-carbon-chromium-removal.md | 93 | 93 | 93 | 93 | 93 |
| 28 | toledo2024-essential-toxic-elements-infant-cereal-brazil | wiki/sources/toledo2024-essential-toxic-elements-infant-cereal-brazil.md | 90 | 90 | 0 | 90 | 0 |
| 29 | kim2018-dry-dog-food-heavy-metals | wiki/sources/kim2018-dry-dog-food-heavy-metals.md | 76 | 76 | 76 | 76 | 76 |
| 30 | rahim2023-iraq-irrigation-broccoli-cauliflower | wiki/sources/rahim2023-iraq-irrigation-broccoli-cauliflower.md | 71 | 71 | 71 | 71 | 71 |
| 31 | almeida2022-brazil-infant-formula-toxic-metals | wiki/sources/almeida2022-brazil-infant-formula-toxic-metals.md | 70 | 70 | 0 | 70 | 70 |
| 32 | shamsher2022-aloe-zinc-adsorption | wiki/sources/shamsher2022-aloe-zinc-adsorption.md | 70 | 70 | 70 | 70 | 70 |
| 33 | zandi2023-rice-root-chromium-speciation | wiki/sources/zandi2023-rice-root-chromium-speciation.md | 70 | 70 | 70 | 70 | 70 |
| 34 | lestari2022-lead-vegetable-phytoextraction | wiki/sources/lestari2022-lead-vegetable-phytoextraction.md | 66 | 66 | 66 | 66 | 66 |
| 35 | abubakar2025-faisalabad-sewage-vegetables | wiki/sources/abubakar2025-faisalabad-sewage-vegetables.md | 58 | 58 | 58 | 58 | 58 |
| 36 | khalid2008-islamabad-chromium-electrokinetic-remediation | wiki/sources/khalid2008-islamabad-chromium-electrokinetic-remediation.md | 57 | 57 | 57 | 57 | 57 |
| 37 | efsa2021-rice-arsenic-annex-a-origin-year | wiki/sources/efsa2021-rice-arsenic-annex-a-origin-year.md | 49 | 49 | 0 | 49 | 0 |
| 38 | gromakova2017-rostov-root-crop-amendment | wiki/sources/gromakova2017-rostov-root-crop-amendment.md | 47 | 47 | 47 | 47 | 47 |
| 39 | chen2024-shanghai-hydroponic-vegetables | wiki/sources/chen2024-shanghai-hydroponic-vegetables.md | 44 | 44 | 44 | 44 | 44 |
| 40 | sumalatha2019-bangalore-sludge-washing | wiki/sources/sumalatha2019-bangalore-sludge-washing.md | 42 | 42 | 42 | 42 | 42 |
| 41 | pandelova2012-eu-baby-food-formula-elements | wiki/sources/pandelova2012-eu-baby-food-formula-elements.md | 40 | 40 | 40 | 40 | 40 |
| 42 | olivas-martinez2026-spanish-girls-urinary-metals | wiki/sources/olivas-martinez2026-spanish-girls-urinary-metals.md | 36 | 36 | 36 | 36 | 36 |
| 43 | lin2024-edible-oils-taiwan-12-metals | wiki/sources/lin2024-edible-oils-taiwan-12-metals.md | 36 | 36 | 0 | 36 | 36 |
| 44 | giri2019-vigna-root-arsenic-speciation | wiki/sources/giri2019-vigna-root-arsenic-speciation.md | 34 | 34 | 34 | 34 | 34 |
| 45 | choi2016-wet-wipes-nonwoven-heavy-metals | wiki/sources/choi2016-wet-wipes-nonwoven-heavy-metals.md | 32 | 32 | 9 | 32 | 32 |
| 46 | gocer2025-baby-wet-wipes-solution-fiber-packaging | wiki/sources/gocer2025-baby-wet-wipes-solution-fiber-packaging.md | 32 | 32 | 0 | 32 | 32 |
| 47 | cpqs2026-online-baby-wipes-quality-monitoring | wiki/sources/cpqs2026-online-baby-wipes-quality-monitoring.md | 29 | 29 | 29 | 29 | 29 |
| 48 | macdonald2025-fss-uk-fishery-contaminants-review | wiki/sources/macdonald2025-fss-uk-fishery-contaminants-review.md | 28 | 28 | 28 | 28 | 0 |
| 49 | khalil2017-snacks-peshawar-pakistan-heavy-metals | wiki/sources/khalil2017-snacks-peshawar-pakistan-heavy-metals.md | 28 | 28 | 28 | 28 | 28 |
| 50 | harding2018-bay-fundy-methylmercury | wiki/sources/harding2018-bay-fundy-methylmercury.md | 26 | 26 | 26 | 26 | 26 |
