---
type: source
raw_handle: manual-fetch-kimi
cite_key: fda-tds-elements-2018-2020
title: "Total Diet Study Report: Fiscal Years 2018-2020 Elements Data"
authors: ["U.S. Food and Drug Administration"]
year: 2022
publication: "U.S. Food and Drug Administration, Total Diet Study Program"
doi: null
no_doi_assigned: true
access_url: "https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results"
source_type: gov-report
evidence_tier: A
license: "us-government-work"
raw_path: "raw/reports/2022_07_14_TDSElementsReport_1436.pdf"
sha256: ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef
duplicate_filesystem_copies:
  - path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/FDA_TDS_FY2018-2020_Elements_Report.pdf"
    sha256: "ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef"
    note: "Byte-identical copy of the canonical raw_path; Kimi agent filed the FDA TDS FY2018–FY2020 Elements report PDF in the snacks/canned/prepared subfolder of the corruption-issue folder tree. Recorded 2026-06-02 so future manual-fetch identity-check cycles recognize this Kimi-folder location as already-ingested."
  - path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/FDA Total Diet Study Report_ Fiscal Years 2018-2020 Elements Data.pdf"
    sha256: "ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef"
    note: "Third byte-identical copy of the canonical raw_path; Kimi agent placed the same report PDF under the June 8 fruit-products extraction subtree of the corruption-issue folder. Recorded 2026-06-08 so the manual-fetch loop recognizes this Kimi-folder location as already-ingested."
access_date: 2026-04-25
metals: [Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb]
other_elements_in_file: [Calcium, Magnesium, Phosphorus, Potassium, Sodium, Copper, Iron, Strontium, Zinc, Manganese, Molybdenum, Selenium, Vanadium, Iodine, Barium, Beryllium, Thallium]
ingredients: ["[[ingredients/rice]]", "[[ingredients/crisped-rice-cereal]]", "[[ingredients/infant-rice-cereal]]", "[[ingredients/spinach]]", "[[ingredients/sunflower-seeds]]", "[[ingredients/potato-chips]]", "[[ingredients/sweet-potato]]", "[[ingredients/iceberg-lettuce]]", "[[ingredients/celery]]", "[[ingredients/apple-juice]]", "[[ingredients/grape-juice]]", "[[ingredients/cantaloupe]]", "[[ingredients/raisins]]", "[[ingredients/blueberries]]", "[[ingredients/grapes]]", "[[ingredients/peach]]", "[[ingredients/pear]]", "[[ingredients/mango]]", "[[ingredients/strawberries]]", "[[ingredients/canned-tuna]]", "[[ingredients/processed-american-cheese]]", "[[ingredients/oat-ring-cereal]]", "[[ingredients/oatmeal]]", "[[ingredients/peanuts]]", "[[ingredients/peanut-butter]]", "[[ingredients/walnuts]]", "[[ingredients/eggs]]"]
products: ["[[products/chocolate]]", "[[products/bottled-drinking-water]]", "[[products/fruit-juices-apple-containing]]", "[[products/infant-cereal]]", "[[products/baby-food]]", "[[products/infant-and-child-foods-master]]"]
matrices: [total-diet-study-prepared-food, baby-food, bottled-drinking-water]
jurisdictions: [US]
near_duplicates: ["[[sources/fda2022-tds-elements-fy2018-fy2020]]", "[[sources/fda2022-tds-elements-analytical-key]]"]
sample_n: 3276
sample_population: "Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions (West, North Central, Mid-Atlantic, Northeast, Southeast, Southwest) and one national-collection point (KCL, Lenexa KS) over fiscal years 2018–2020 (winter Oct–Mar + summer Apr–Sep regional collections, plus a national collection); 384 of the food/beverage samples are baby foods (FY2019 expanded baby-food sampling); 54 samples were further analyzed for three arsenic species (iAs, DMA, MMA)."
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-08
---

# FDA TDS — Fiscal Years 2018-2020 Elements Data Report

## Overview

The July 2022 FDA Total Diet Study Report is the first analytical report from the modernized TDS (population-based sampling across six US regions, redesigned food list, expanded baby-food sampling). It summarizes element concentrations for lead, total and inorganic arsenic, cadmium, total mercury, nickel, chromium, uranium, and select nutrient elements across 3,276 composite food/beverage/water samples collected in fiscal years 2018–2020 and analyzed for up to 25 elements per sample by ICP-AES and ICP-MS, with HPLC-ICP-MS speciation of total arsenic in 54 selected samples. Toxic elements were not detected in the majority of analytical results (68%); all measured concentrations for foods covered by FDA Action Levels (apple juice, chocolate/hard candy, infant rice cereal) or bottled-water standards fell below those levels. This report is the narrative companion to the row-level CSV dataset captured by [[sources/fda2022-tds-elements-fy2018-fy2020]] and the field-definition documentation in [[sources/fda2022-tds-elements-analytical-key]].

## Key numbers

**Scope and sampling design** (Executive Summary; §2; Table 1):

| Parameter | Value |
| --- | --- |
| Reporting cycle | Fiscal Years 2018–2020 (Oct 2017–Sep 2020) |
| Publication date | July 2022 |
| Foods sampled | 307 foods (including foods, beverages, and water); 259 core foods collected in all 3 years; 7 deleted, 18 added |
| Food/beverage samples | 3,241 samples; 21 analytes; 68,061 analytical results |
| Bottled-water samples | 35 samples (regular + baby-food water); 22 analytes; 770 analytical results |
| Total composite samples | 3,276 |
| Arsenic-speciation subset | 54 samples; 3 species (iAs, DMA, MMA); 162 speciation results |
| Baby-food samples (FY2019 expansion) | 384 samples |
| Sampling design | Six US regions (population-balanced); winter (Oct–Mar) + summer (Apr–Sep) collections; three cities per region per collection; national collection at KCL once per year |
| Furloughs/COVID disruption | FY2019 lost Jan/Feb regional collections (government shutdown); FY2020 lost Apr–Sep collections (COVID-19) |

**Toxic-element detection rates and ranges** (Executive Summary; Table 3 §4.1):

| Analyte | % Not Detected | Range | Top-5 foods by mean concentration |
| --- | --- | --- | --- |
| Lead (Pb) | 86% | ND – 164 ppb (next-highest detect 63 ppb) | BF sweet potatoes; BF teething biscuits; sandwich cookies; white wine; ranch salad dressing (low-calorie) |
| Total arsenic (tAs) | 57% | ND – 10,900 ppb (next-highest 9,100 ppb) | Baked cod; canned tuna; fish sticks; baked salmon; pre-cooked shrimp |
| Inorganic arsenic (iAs)¹ | 0% (within speciated subset) | 6.1 – 103 ppb (next-highest 90 ppb) | Crisped rice cereal; BF rice cereal (dry); white rice; BF puffed snacks; BF mixed cereal (multi-grain) |
| Cadmium (Cd) | 39% | ND – 400 ppb (next-highest 300 ppb) | Sunflower seeds; spinach; potato chips; leaf lettuce; french fries |
| Total mercury (tHg) | 93% | ND – 250 ppb (next-highest 220 ppb) | Canned tuna; baked cod; baked salmon; pan-cooked catfish; pre-cooked shrimp |
| Chromium (Cr, total) | 87% | not stated as a range in Table 3 | Chocolate-flavored syrup; sandwich cookies; milk chocolate candy bar; BF sweet potato/apple/spinach pouch; American cheese |
| Nickel (Ni) | 55% | not stated as a range in Table 3 | Sunflower seeds; walnuts; oat ring cereal; BF oatmeal cereal; honey oat ring cereal |
| Uranium (U) | 75% | not stated as a range in Table 3 | American cheese; BF teething biscuits; BF mixed cereal (multi-grain); BF oatmeal cereal; honey oat ring cereal |

¹ Inorganic arsenic was reported only in the 54-sample speciation subset (rice-containing foods, juice, wine; speciation thresholds in Appendix B Table 10).

**FDA Action Levels (AL) and bottled-water standards** — all TDS results below (Executive Summary §"Action Levels"):

| Food / matrix | Analyte | Action Level / standard | TDS observation |
| --- | --- | --- | --- |
| Apple juice (FDA draft guidance for Pb in juice, FDA 2022d-context) | Pb | 10 ppb | All apple-juice samples below 10 ppb |
| Apple juice (FDA 2013 iAs draft guidance) | iAs | 10 ppb iAs (speciation runs at 10 ppb tAs trigger; FDA 2013 is the iAs action-level draft guidance) | No apple-juice sample exceeded 10 ppb tAs; no speciation needed |
| Chocolate and hard candy (FDA 2006 guidance) | Pb | 100 ppb | All 9 chocolate/sugar-candy results below 100 ppb; max detect 8.3 ppb; 6 of 9 ND |
| Infant rice cereal (FDA 2020a guidance) | iAs | 100 ppb | All infant-rice-cereal iAs results below 100 ppb (infant rice cereal was the food with the largest number of speciated samples and all of its iAs results were below the AL; see §4.1.2). Separately, *crisped* rice cereal — a different TDS food — had a mean iAs of 93 ppb across 3 speciated samples ranging 8.9–103 ppb; one of the three crisped-rice-cereal samples reached 103 ppb on speciation but the mean stayed below the 100 ppb AL (the AL is set for infant rice cereal specifically). |
| Bottled water (21 CFR 165.110) | Pb | 5 ppb | All bottled-water samples below 5 ppb |
| Bottled water (21 CFR 165.110) | Total arsenic | 10 ppb | All bottled-water samples below 10 ppb |
| Bottled water (21 CFR 165.110) | Cd | 5 ppb | All bottled-water samples below 5 ppb |
| Bottled water (21 CFR 165.110) | Hg | 2 ppb | All bottled-water samples below 2 ppb |
| Fish/shellfish/crustaceans (FDA CPG 540.600, methylmercury) | tHg as MeHg surrogate | 1 ppm (1,000 ppb) | All 33 foods with detectable Hg (mostly seafood) below 1,000 ppb; canned tuna mean 230 ppb (highest), baked cod 83 ppb, baked salmon 21 ppb |

The 540.600 ppm-level Action Level governs methylmercury; the TDS measures total mercury and reports against that benchmark for screening purposes only.

**Arsenic speciation in baby foods** (Table 4 §4.4):

| Baby Food Type | tAs mean (ppb) | n (tAs) | iAs mean (ppb) | n (iAs) |
| --- | --- | --- | --- | --- |
| Grape juice | 9.2 | 8 | 7.4 | 3 |
| Puffed snack | 42 | 8 | 31 | 8 |
| Mixed cereal (multi-grain), dry | 32 | 7 | 26 | 6 |
| Rice cereal, dry | 109 | 9 | 73 | 9 |
| Rice cereal, prepared with water | 23 | 13 | 17 | 13 |
| Teething biscuits | 24 | 8 | 23 | 8 |

**Cadmium-in-vegetables** (Figure 10, ten vegetables with highest mean Cd; values read from the chart and rounded to 5-ppb resolution; the source presents Min/Mean/Max as a bar chart, not a table):

| Vegetable | Approx. Min (ppb) | Approx. Mean (ppb) | Approx. Max (ppb) |
| --- | --- | --- | --- |
| Garlic | ~0 | ~20 | ~40 |
| Baby carrots | ~5 | ~20 | ~80 |
| Potato (peeled, boiled) | ~10 | ~20 | ~40 |
| Collards | ~5 | ~20 | ~65 |
| Kale (fresh, pan-cooked) | ~10 | ~25 | ~80 |
| Iceberg lettuce | ~15 | ~35 | ~75 |
| Celery | ~15 | ~40 | ~100 |
| Potato (with peel, baked) | ~20 | ~40 | ~65 |
| Leaf lettuce | ~15 | ~60 | ~200 |
| Spinach (raw) | ~100 | ~220 | ~400 |

Exact per-food means and percentiles for these and all other TDS foods are available in the row-level dataset and summary captured by [[sources/fda2022-tds-elements-fy2018-fy2020]] and at the TDS results page (FDA 2022c).

**Total-arsenic in fruits** (Figure 12, ten fruits with highest mean tAs; values rounded to ppb-level resolution from the bar chart):

| Fruit | Approx. Min (ppb) | Approx. Mean (ppb) | Approx. Max (ppb) |
| --- | --- | --- | --- |
| Mango (fresh/frozen) | ~1 | ~2.5 | ~5 |
| Apple juice (bottled) | ~1 | ~3 | ~4 |
| Strawberry (raw/frozen) | ~3 | ~3 | ~8 |
| Seedless grapes (red/green, raw) | ~3 | ~3 | ~9 |
| Peach (raw/frozen) | ~4 | ~4 | ~12 |
| Pear (with peel, raw) | ~4 | ~4 | ~9 |
| Blueberries (raw) | ~5 | ~5 | ~35 |
| Grape juice (bottled) | ~4 | ~7 | ~10 |
| Cantaloupe (raw/frozen) | ~9 | ~25 | ~26 |
| Raisins | ~13 | ~23 | ~32 |

**Food-group toxic-element findings** (§4.2.2 Figs 9, 11, 13):

| Group | tAs % detect (range) | Cd % detect (range) | Pb % detect (range) | Hg % detect (range) |
| --- | --- | --- | --- | --- |
| Vegetables (719 samples) | 35% (ND – 15 ppb) | 93% (ND – 222 ppb) | 10% (ND – 12 ppb) | 6% (ND – 1.8 ppb) |
| Fruits (357 samples) | 39% (ND – 23 ppb) | 28% (ND – 9.3 ppb) | 4% (ND – 9.7 ppb) | 1% (ND – 1.3 ppb; only raisins had any detectable Hg) |
| Dairy (290 samples) | 2% (ND – 8.2 ppb) | 3% (ND – 4.9 ppb) | 1% (ND – 2.1 ppb) | 0% (all ND) |

Nutrient-element ranges for the same groups (mean concentrations across foods within each group; from §4.2.1):

- Vegetables: Ca 8.7 – 3,100 ppm; iodine ND – 640 ppb; iron ND – 32,000 ppb; potassium 570 – 6,700 ppm (Ca, K detected in 100% of samples; Fe in 99% [715/719]; iodine in ~half).
- Fruits: Ca ND – 560 ppm; iodine ND – 460 ppb; iron ND – 26,000 ppb; potassium 590 – 9,200 ppm (Ca, Fe, K detected in >90% of samples; iodine in ~40%).
- Dairy: Ca 620 – 18,500 ppm; iodine 130 – 4,400 ppb; iron ND – 13,000 ppb; potassium 640 – 3,100 ppm (Ca, iodine, K in 100% of samples; Fe in ~half).

**Baby foods (FY2019 expanded sampling; §4.4):**

- 384 baby-food samples; 1,536 toxic-element analytical results; 65% ND, 35% detect.
- tAs: ~51% detect; highest tAs in infant cereals and snacks (teething biscuits, puffed snacks). Six baby foods exceeded the speciation trigger and were further analyzed for iAs (Table 4).
- Cd: 35% ND; highest single result 49 ppb in a baby food containing spinach; 41 ppb in baby food carrots; mean 20 ppb across 14 baby food carrot samples.
- Pb: 79% ND; highest single result 38 ppb in a baby food sweet potatoes sample.
- Hg: 97% ND; 13 detects, all < 3 ppb.
- Bottled water intended for infants (BF water): no detectable Pb, As, Cd, or Hg.
- Region and season did not show meaningful effects on element concentrations in baby foods (the FY2019 expanded baby-food collection was paired with select regional collections for this comparison).

**New / changed TDS foods (§4.3):**

- Coconut water (first collected FY2018): potassium mean 1,500 ppm; manganese mean 2,367 ppb.
- Chicken broth: high sodium (as expected); no toxic elements detected; only nutrient elements detected.
- Eggplant changed from peeled-boiled to baked-with-peel starting FY2018 Collection 7: iron mean 2,076 ppb (baked w/ peel) vs 1,667 ppb (peeled, boiled); potassium 2,214 ppm (baked w/ peel) vs 1,067 ppm (peeled, boiled). The report notes further analysis is needed to identify whether the differences reflect peel retention, water uptake during boiling, or both.

## Methods (brief)

**Sample collection.** Six regions (West, North Central, Mid-Atlantic, Northeast, Southeast, Southwest) population-balanced; three cities per region per regional collection, selected with probability proportional to population; foods purchased at retail outlets (grocery, warehouse, liquor stores, restaurants) near randomly selected residential addresses. Regional collections done monthly (12 per fiscal year); national collection done once per year at the Kansas City Laboratory (KCL, Lenexa KS). Winter = Oct–Mar, summer = Apr–Sep. The FY2018–FY2020 reporting cycle extends beyond the typical two-year cycle because of two disruptions: the Dec-22-2018-to-Jan-25-2019 federal government shutdown (lost FY2019 Jan and Feb regional collections) and the COVID-19 pandemic (lost FY2020 Apr–Sep collections).

**Sample preparation.** Composites prepared at KCL after unpacking and inspection. Foods are prepared as a consumer would prepare them (bananas peeled, meats cooked, eggs hard-boiled and peeled, brownies made from a box mix, etc.) using deionized water where water is required. Foods are then homogenized — juices and baby foods mixed in a bowl with a spoon, cheese and meat blended in a knife-mill industrial food processor. For each regional collection, equal portions from the three city-level samples are combined into a single composite. Regional collections weigh > 1,000 lb in aggregate; national collections > 800 lb. (See Appendix A Table 5 for per-food prep details.)

**Analytical methods (food/beverage; Appendix B Tables 7 and 9, FDA Elemental Analysis Manual reference):**

- ICP-AES (EAM 4.4; Agilent 5100): Ca, Mg, P, K, Na (units ppm); Cu, Fe, Sr, Zn (units ppb, instrument output ppm then converted).
- ICP-MS (EAM 4.7; Agilent 7700, 7900, and 8900): As (total), Cd, Cr, Pb, Mn, Hg, Mo, Ni, Se, U, V (ppb).
- ICP-MS (EAM 4.13; Agilent 7900): Iodine (ppb).
- HPLC in combination with ICP-MS (EAM 4.10 and 4.11; Agilent 7700 and 7900 coupled to Agilent 1200 or 1260): inorganic arsenic, dimethylarsinic acid (DMA), and monomethylarsonic acid (MMA) (ppb).

Reporting limits vary by sample weight; representative values for ICP-MS in foods/beverages: Cd 1.0–3.0 ppb, Cr 25–130 ppb, Pb 1.0–10 ppb, Hg 1.0–3.0 ppb, Ni 20–100 ppb, As (total) 1.0–7.0 ppb, U 1.0–2.5 ppb. Speciation reporting limits for iAs, DMA, MMA: 0.4–1.0 ppb (Appendix B Table 9).

**Analytical methods (water; Appendix B Table 8):**

- ICP-AES (modified EAM 4.4; Agilent 5100): Ca, Mg, K, Na (ppm); Sr (ppb, converted).
- ICP-MS (draft EAM 4.12; Agilent 7700/7900/8900): Sb 0.04, As (total) 0.05, Ba 0.5, Be 0.04, Cd 0.03, Cr 4, Cu 2.5, Fe 25, Pb 0.4, Mn 0.4, Hg 0.03, Ni 2, Se 0.4, Tl 0.3, U 0.05, Zn 9 ppb reporting limits at 25 g sample weight.
- ICP-MS (EAM 4.13; Agilent 7900): Iodine, 3 ppb reporting limit at 5 g sample weight.

The four water-only analytes (antimony, barium, beryllium, thallium) are included because they are named in the bottled-water regulation 21 CFR 165.110. Per Table 3 footnote 13, all four were detected in regular bottled water; thallium was additionally also detected in bottled water intended for infants (BF water), uniquely among the four.

**Speciation trigger.** Total arsenic was speciated when a sample's tAs exceeded a food-specific threshold (Appendix B Table 10): 10 ppb tAs for juices and wines (red, white, apple, grape, pear, cranberry cocktail, grapefruit, lemon, orange, pineapple, tomato-vegetable, fruit drinks, fruit juice blends, baby-food juices), 10 ppb for baby food rice/cereal products and mixed-grain cereals, 10 ppb for puffed snacks and teething biscuits, 100 ppb for crisped rice cereal, 125 ppb for cooked brown rice, 70 ppb for cooked white enriched rice. Fish and seafood were not speciated in this reporting cycle (analytical methods used in FY2018–FY2020 were not capable of speciating arsenic in fish/seafood matrices).

**Reporting convention.** Concentrations below the reporting limit are coded "not detected" (ND); reporting limits are administrative limits derived from per-analysis LOD/LOQ values aggregated across the cycle. Mean calculations include ND-as-zero substitution (Table 3 footnote 12). The report uses "concentration" and "level" interchangeably; 1 ppm = 1 mg/kg, 1 ppb = 1 µg/kg.

**Statistical analysis.** Per the acknowledgements, the CFSAN Office of Analytics and Outreach's Biostatistics Team assisted with the statistical analysis; the report itself presents descriptive summaries (means, ranges, % detect / non-detect, top-five-by-mean lists).

## Implications

**Certification.** The TDS provides per-food-category mean and range distributions that define the typical US-market concentration profile for each toxic element in each food category. As an A-tier US-government monitoring dataset with row-level concentrations published openly (FDA 2022c), it is suitable input for ingredient-page contamination_profile sub-blocks via the Part 9 synthesis pass and for product-page Literature Evidence Summaries via the routing audit. The dataset is convenience-sampled at the within-region level (retail outlets chosen for collector efficiency from a population-balanced city set) and concentrations are reported in the prepared/as-consumed basis, so values are not directly comparable to raw-commodity studies without basis adjustment.

**Courses.** The TDS is the canonical example of long-term food-monitoring methodology in the US. Its continuous operation since 1961 (with the modernization beginning in FY2018) supplies the longitudinal data backbone for population-level trend analysis of dietary toxic-element exposure. The modernization narrative (move from convenience to population-based sampling, food-list refresh, expanded baby-food sampling, addition of arsenic speciation) is a useful teaching case for how a national monitoring program updates to track changing diet patterns and changing scientific consensus on health-relevant analyte species.

**App.** Per-food mean and percentile values from FY2018–FY2020 are high-confidence input for the app contamination_profile layer for foods covered by the modernized TDS market basket. The row-level dataset is captured by [[sources/fda2022-tds-elements-fy2018-fy2020]] which is the structured-data destination; this narrative report supplies the context and methodology any app-side claim needs to cite.

**Microbiome.** No direct microbiome endpoint.

## Provenance notes

License `us-government-work`. The TDS data is published on the FDA website at the URL in `access_url`; the 2022 summary report PDF is the narrative companion to the analytical results CSV (FDA 2022b) and the analytical results key (FDA 2022a). This page summarizes the narrative report; the CSV companion ([[sources/fda2022-tds-elements-fy2018-fy2020]]) carries the row-level values; the key companion ([[sources/fda2022-tds-elements-analytical-key]]) carries the field-definition methodology.

## Verification notes

- 2026-05-20 merge-enhance pass: page predates the 2026-05-08 template refresh and the 2026-05-17 schema lockdown. Changes applied:
  - Frontmatter: removed invalid metal `MeHg` (this report measures total mercury only; the only references to MeHg are to the 1 ppm CPG 540.600 Action Level, against which total-mercury results are compared as a screening surrogate) and `Al` (aluminum was not in the 25-analyte food panel or the 22-analyte water panel; cross-checked against Appendix B Tables 7, 8, 9 and Figure 4). Added `U` and `Sb` (both measured per Figure 4 and Appendix B). Promoted `Cu, Fe, Zn, Mn, Mo` to a separate `other_elements_in_file` field per the convention used on [[sources/fda2022-tds-elements-fy2018-fy2020]], to keep the `metals:` array scoped to HMI-relevant toxic/heavy metals.
  - Added `raw_handle: manual-fetch-kimi` (this PDF was supplied via the Manual Fetch Kimi /01_Fruits_and_Fruit_Products folder; SHA-256 matches `raw/reports/2022_07_14_TDSElementsReport_1436.pdf` exactly, so `raw_path` was preserved as the original-location path rather than re-rooted to the MFK copy).
  - Added `near_duplicates` to point at the two companion source pages (CSV dataset and analytical key) so the routing audit and reader both understand the trio is one underlying body of evidence with three filed artifacts.
  - Added `sample_n: 3276` and a `sample_population` description with the sampling-design summary.
  - Populated `products` with the five product categories the narrative report discusses with explicit Action-Level or standards comparisons (chocolate, bottled drinking water, apple-containing fruit juices, infant cereal, baby food). Per-food routing is delegated to the CSV companion to avoid double-routing the same underlying values.
  - Populated `ingredients` with the foods named with quantitative values in the narrative (top-5-by-mean lists, baby-food speciation, fruit/vegetable Figure 10/12 panels). Per-food row-level routing is in the CSV companion.
  - Populated `matrices` with `total-diet-study-prepared-food` (the basis label inherited by all TDS values) plus `baby-food` and `bottled-drinking-water` to reflect the two sub-matrices with distinct sampling design.
- Body: removed legacy `## Summary` heading (replaced with un-headed opening prose under the H1, per current template); added comprehensive `## Key numbers` (scope/sampling table, toxic-element detection-rate/range/top-5 table from Table 3, Action-Level comparison table, arsenic-speciation baby-food table from Table 4, vegetable-Cd Figure 10 chart values, fruit-tAs Figure 12 chart values, food-group detect/range table from §4.2.2, new/changed-foods bullets, baby-food bullets); added `## Methods (brief)` (sampling design, prep, ICP-AES/ICP-MS/HPLC-ICP-MS instrumentation with EAM references and Agilent model numbers per Appendix B, reporting-limit ranges, speciation trigger thresholds from Appendix B Table 10); expanded `## Implications` to be concrete rather than generic.
- Numerical fidelity note: Figure 10 and Figure 12 values are read from bar charts; the source does not provide tabular per-vegetable or per-fruit min/mean/max for the top-10 panels, so values in the wiki tables are stated as approximate and rounded to ppb-level resolution. The exact per-food values are available in the row-level CSV captured by [[sources/fda2022-tds-elements-fy2018-fy2020]].
- Brand firewall: report names no brand names in body text; instrument/reference-material vendor names (Agilent) are method-vendor names permitted by the 2026-05-17 Part 12 exception 2 and are retained in `## Methods (brief)`.
- HMTc firewall: this page reports what FDA measured and what FDA's Action Levels are; no HMTc threshold inferences are made.
- 2026-05-20 audit-subagent pass (verdict REVISE): four ❌/⚠️ findings applied; one ⚠️ rejected as false positive; remaining ✅ checks (Check 4 brand firewall, Check 5 HMTc firewall, Check 1 numerical-fidelity bulk, Check 3 speciation/methods bulk) confirmed clean.
  - Applied (Check 1 ⚠️ infant-vs-crisped rice cereal conflation): rewrote the infant-rice-cereal AL row to detach the 8.9–103 ppb range and 93 ppb mean from infant rice cereal; those values belong to crisped rice cereal per p20. Infant rice cereal's claim is restated as "all iAs below 100 ppb AL; largest number of speciated samples"; the 8.9–103 / 93 ppb numbers are now correctly stated against crisped rice cereal, with a note that the 100 ppb AL is set for infant rice cereal specifically.
  - Applied (Check 1 ⚠️ apple-juice Pb regulatory attribution): re-split the apple-juice Action-Level rows so the 10 ppb Pb row no longer cites FDA 2013 (which p20 explicitly identifies as the iAs apple-juice draft guidance). FDA 2013 is now correctly attached to the iAs row only.
  - Applied (Check 2 ❌ wrong regulation slug): replaced `[[regulations/fda-juice-haccp-lead-50ppb]]` (the 50 ppb HACCP juice-Pb action) with `[[regulations/fda2022-draft-lead-juice]]` (the 10 ppb apple-juice Pb draft action level that the TDS report actually compares against).
  - Applied (Check 3 ⚠️ thallium narrative inversion): rewrote the water-only-analytes sentence in Methods so it correctly states that Sb, Ba, Be, and Tl were all detected in regular bottled water and Tl was additionally also detected in BF water (per Table 3 footnote 13). The prior phrasing had inverted the meaning by implying Tl was detected only in BF water.
  - Applied (Check 2 ⚠️ coverage gap): added `[[regulations/fda-cpg-540-600-methylmercury-fish]]` to "Wiki pages updated on ingest" since CPG 540.600 is explicitly discussed in the Action-Level table.
  - Rejected (Check 2 ⚠️ matrices vocabulary): subagent flagged `total-diet-study-prepared-food` in `matrices:` as not in the supplied taxonomy snapshot. False positive: the matrices field uses its own controlled vocabulary that is not enumerated in `docs/gpt-collaboration/taxonomy-snapshot.md` (only ingredients/products/metals/regulations are in that file). The matrices label `total-diet-study-prepared-food` is the established convention used by the companion source page [[sources/fda2022-tds-elements-analytical-key]] (verified: that page's frontmatter carries `matrices: [total-diet-study-prepared-food]`). Keeping the same label here is intentional and correct.
  - Figure 10 / Figure 12 approximation flags: subagent confirmed approximations are directionally consistent with the source bar charts and the explicit "approximate, rounded" caveat in the wiki body is appropriate. No change needed.
- 2026-06-02 byte-identical filesystem-copy enhancement: added `duplicate_filesystem_copies` block recording the second filesystem location of the canonical July 2022 TDS Elements report PDF at `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/FDA_TDS_FY2018-2020_Elements_Report.pdf` (sha256 `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef`, byte-identical to the canonical `raw_path` under `raw/reports/`). Kimi agent filed the same report PDF in two locations; both now resolve back to this canonical source page. No claim, value, slug, exposure number, key-numbers, or HMTc-firewall change. No new audit cycle spawned because no body or evidence-bearing frontmatter changed.
- 2026-06-08 byte-identical filesystem-copy enhancement: added a third entry to `duplicate_filesystem_copies` recording the Kimi agent's June 8 placement of the same report PDF under `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/FDA Total Diet Study Report_ Fiscal Years 2018-2020 Elements Data.pdf` (sha256 verified byte-identical to canonical `raw_path`). Manual-fetch loop now recognizes this third Kimi-folder location as already-ingested. No claim, value, slug, exposure number, key-numbers, or HMTc-firewall change. No new audit cycle spawned because no body or evidence-bearing frontmatter changed.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[metals/mercury]]
- [[metals/mercury-total]]
- [[metals/nickel]]
- [[metals/chromium]]
- [[metals/uranium]]
- [[metals/antimony]]
- [[ingredients/rice]]
- [[ingredients/crisped-rice-cereal]]
- [[ingredients/infant-rice-cereal]]
- [[ingredients/spinach]]
- [[ingredients/sunflower-seeds]]
- [[ingredients/potato-chips]]
- [[ingredients/sweet-potato]]
- [[ingredients/canned-tuna]]
- [[ingredients/apple-juice]]
- [[ingredients/grape-juice]]
- [[ingredients/cantaloupe]]
- [[ingredients/raisins]]
- [[ingredients/blueberries]]
- [[ingredients/grapes]]
- [[ingredients/peach]]
- [[ingredients/pear]]
- [[ingredients/mango]]
- [[ingredients/strawberries]]
- [[products/chocolate]]
- [[products/bottled-drinking-water]]
- [[products/fruit-juices-apple-containing]]
- [[products/infant-cereal]]
- [[products/baby-food]]
- [[regulations/fda-closer-to-zero]]
- [[regulations/fda-iAs-rice-cereal-100ppb]]
- [[regulations/fda2022-draft-lead-juice]]
- [[regulations/fda-cpg-540-600-methylmercury-fish]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [91de7ee31](https://github.com/paleofoundation/heavymetalindex/commit/91de7ee31) | 2026-06-08 | minor | Narrative text revised |
| [c6f21173b](https://github.com/paleofoundation/heavymetalindex/commit/c6f21173b) | 2026-06-02 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [0d1672106](https://github.com/paleofoundation/heavymetalindex/commit/0d1672106) | 2026-05-20 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
