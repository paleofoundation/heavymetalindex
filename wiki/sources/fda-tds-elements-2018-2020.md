---
ingest_status: complete
audience: [regulator, researcher, educator]
evidence_fitness:
  supports:
    - Study design and narrative interpretation of FDA FY2018-FY2020 food composites
    - Source-reported summary statistics, with exact analytical values routed through the reconciled companion dataset
  does_not_support:
    - Independent replication of the same analytical dataset
    - Treating narrative next-highest values as maxima or dataset totals as per-analyte sample sizes
    - Species substitution, brand ranking, or current retail compliance inference
reconciliation_path: data/evidence/fda_tds_fy2018_2020_reconciliation.json
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
extraction_authority: primary-structured
data_path: data/evidence/fda_tds_fy2018_2020_element_results_samples.csv
summary_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
evidence_tier: A
license: "us-government-work"
raw_path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/FDA_TDS_FY2018-2020_Elements_Report.pdf"
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
updated: 2026-09-10
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
| Infant rice cereal (FDA 2020a guidance) | iAs | 100 ppb | All infant-rice-cereal iAs results below 100 ppb (infant rice cereal was the food with the largest number of speciated samples and all of its iAs results were below the AL; see §4.1.2). Separately, *crisped* rice cereal — a different TDS food — had a mean iAs of 93 ppb across 3 speciated samples (the narrative prints 8.9–103 ppb, but the primary analytical file reports 85.8, 90.4 and 103 ppb); one of the three crisped-rice-cereal samples reached 103 ppb on speciation but the mean stayed below the 100 ppb AL (the AL is set for infant rice cereal specifically). |
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

Exact per-food analytical records, source-reported means and SDs, and explicitly labelled lower/upper-bound descriptive summaries are available in the complete reconciled dataset captured by [[sources/fda2022-tds-elements-fy2018-fy2020]] and at the TDS results page (FDA 2022c).

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

**Certification.** The TDS provides per-food-category mean and range distributions that define the typical US-market concentration profile for each toxic element in each food category. As an A-tier US-government monitoring dataset with row-level concentrations published openly (FDA 2022c), it is suitable input for ingredient-page contamination_profile sub-blocks via the Part 9 synthesis pass and for product-page Literature Evidence Summaries via the source routing. The dataset is convenience-sampled at the within-region level (retail outlets chosen for collector efficiency from a population-balanced city set) and concentrations are reported in the prepared/as-consumed basis, so values are not directly comparable to raw-commodity studies without basis adjustment.

**Courses.** The TDS is the canonical example of long-term food-monitoring methodology in the US. Its continuous operation since 1961 (with the modernization beginning in FY2018) supplies the longitudinal data backbone for population-level trend analysis of dietary toxic-element exposure. The modernization narrative (move from convenience to population-based sampling, food-list refresh, expanded baby-food sampling, addition of arsenic speciation) is a useful teaching case for how a national monitoring program updates to track changing diet patterns and changing scientific consensus on health-relevant analyte species.

**App.** Per-food FY2018–FY2020 findings support source-specific occurrence context. Confidence depends on composite sample count, tested preparation and censoring; an all-non-detect group must not populate a measured zero, and small-N percentiles must not be presented as a stable market distribution. The row-level dataset is captured by [[sources/fda2022-tds-elements-fy2018-fy2020]] which is the structured-data destination; this narrative report supplies the context and methodology any app-side claim needs to cite.

**Microbiome.** No direct microbiome endpoint.

## Provenance notes

License `us-government-work`. The TDS data is published on the FDA website at the URL in `access_url`; the 2022 summary report PDF is the narrative companion to the analytical results CSV (FDA 2022b) and the analytical results key (FDA 2022a). This page summarizes the narrative report; the CSV companion ([[sources/fda2022-tds-elements-fy2018-fy2020]]) carries the row-level values; the key companion ([[sources/fda2022-tds-elements-analytical-key]]) carries the field-definition methodology.

## Related evidence

- [[regulations/fda-juice-haccp-lead-50ppb]]
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

## Analytical-file reconciliation

The complete primary analytical file contains 68,993 results for 307 food identities. The companion extract was corrected on 2026-09-10 after an audit found a truncated 29,148-row prefix. All 6,449 regular-analyte groups now reconcile with the independently published FDA summary workbook on N, detects, non-detects and extrema; source-reported means and SDs remain separate from derived lower/upper-bound statistics. [[sources/fda2022-tds-elements-fy2018-fy2020]]

The primary crisped-rice-cereal iAs records are 85.8, 90.4 and 103 ppb. The narrative report's 8.9 ppb lower endpoint conflicts with those records. The analytical values are used for the occurrence extract; the printed discrepancy is retained as a source-context disposition.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [91de7ee312](https://github.com/paleofoundation/heavymetalindex/commit/91de7ee312) | 2026-06-08 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
