---
title: Infant and Child Foods — Master CC Candidate Summary
type: master-summary
category_label: Infant and Child Foods
hmtc_category: 1
audience: [regulator, educator, app]
constituent_pages:
  - "[[products/baby-cereals-dry-rice-based]]"
  - "[[products/baby-cereals-dry-non-rice]]"
  - "[[products/infant-formula-powder-non-soy]]"
  - "[[products/infant-formula-powder-soy-based]]"
  - "[[products/infant-formula-rtf-liquid-non-soy]]"
  - "[[products/infant-formula-rtf-liquid-soy-based]]"
  - "[[products/fruit-purees]]"
  - "[[products/non-root-vegetable-purees]]"
  - "[[products/root-vegetable-purees]]"
  - "[[products/meat-and-poultry-purees]]"
  - "[[products/fish-containing-baby-foods]]"
  - "[[products/mixed-meals-rice-containing]]"
  - "[[products/mixed-meals-non-rice]]"
  - "[[products/teething-and-snacks-rice-based]]"
  - "[[products/teething-and-snacks-non-rice]]"
  - "[[products/fruit-juice-not-canned]]"
n_subcategories: 16
n_analytes: 10
n_cells: 160
updated: 2026-05-09
---

# Infant and Child Foods — Master CC Candidate Summary (16-subcategory expansion)

Generated 2026-05-09 under Karen's overnight Expansion 1 directive. This master summary covers all 16 HMTc Category 1 product-category pages × 10 HMT&C analytes = 160 cells. Each cell carries the within-pair clean/dirty designation per the [Part 19 framework](../../CLAUDE.md), the corresponding standard target (clean p90 or dirty p30), p100 for context, n, n_a_tier, confidence per CLAUDE.md Part 6, and CC eligibility against the readiness bar.

Pair-based clean/dirty classification applies within these pairs:

- Powder formulae: non-soy ↔ soy-based
- RTF liquid formulae: non-soy ↔ soy-based
- Dry baby cereal: rice-based ↔ non-rice
- Mixed meals: rice-containing ↔ non-rice
- Teething & snacks: rice-based ↔ non-rice
- Vegetable purees: root ↔ non-root

Standalone subcategories (no within-pair partner): fruit-purees, meat-and-poultry-purees, fish-containing-baby-foods, fruit-juice-not-canned. These are provisionally assigned clean p90 of their own distribution where sample-level data exists, marked accordingly.

Numeric values for Pb, Cd, tAs, and tHg are computed from FDA sample-level data: `data/evidence/category1_fda_baby_food_compliance_samples.csv` (FY2009-FY2024 baby-food compliance) and `data/evidence/category1_formula_special_survey_samples.csv` (FDA FY2023-FY2025 formula special survey). iAs values are from `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` (FDA 2016 inorganic arsenic infant/toddler foods) and the FDA 2011 + 2016 juice iAs speciation extracts. Lower-bound treatment with `<LOD` and `NDb` set to 0 for FDA compliance samples; trace `TR (x.x)` values preserved as numeric for FDA 2016. All percentiles are linear-interpolation between sorted samples.

## Lead (Pb)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | **dirty** | dirty p30 = **2.85 ppb** | 32.00 ppb | 256 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | **clean** | clean p90 = **7.84 ppb** | 9.90 ppb | 25 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | **clean** | clean p90 = **0.40 ppb** | 0.60 ppb | 230 | 5 | medium | **At readiness bar.** Path A n_a_tier=5 medium confidence. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | **dirty** | dirty p30 = **0.30 ppb** | 1.10 ppb | 38 | 4 | medium | **At readiness bar.** Path A n_a_tier=4 medium confidence. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | **dirty** | dirty p30 = **0.20 ppb** | 0.50 ppb | 20 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | **clean** | clean p90 = **0.36 ppb** | 0.40 ppb | 3 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. Sample-size warning: n=3 below 10-sample defensibility floor. |
| Fruit purees ([[products/fruit-purees]]) | **standalone** (provisional p90) | clean p90 = **2.37 ppb** | 8.00 ppb | 44 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | **clean** | clean p90 = **1.76 ppb** | 7.60 ppb | 29 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | **dirty** | dirty p30 = **3.74 ppb** | 27.30 ppb | 59 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | **clean** | clean p90 = **3.92 ppb** | 11.60 ppb | 9 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=9 below 10-sample defensibility floor. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | **dirty** | dirty p30 = **1.00 ppb** | 13.00 ppb | 78 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | **provisional** (partner data thin/missing) | p90 = 5.85 ppb | 6.50 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |

## Cadmium (Cd)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | **clean** | clean p90 = **22.00 ppb** | 40.50 ppb | 252 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | **dirty** | dirty p30 = **11.36 ppb** | 62.90 ppb | 25 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | **clean** | clean p90 = **0.40 ppb** | 1.30 ppb | 230 | 6 | medium | **At readiness bar.** Path A n_a_tier=6 medium confidence. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | **dirty** | dirty p30 = **0.60 ppb** | 1.40 ppb | 38 | 4 | medium | **At readiness bar.** Path A n_a_tier=4 medium confidence. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | **clean** | clean p90 = **0.60 ppb** | 0.70 ppb | 20 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | **dirty** | dirty p30 = **0.86 ppb** | 1.10 ppb | 3 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. Sample-size warning: n=3 below 10-sample defensibility floor. |
| Fruit purees ([[products/fruit-purees]]) | **standalone** (provisional p90) | clean p90 = **2.12 ppb** | 4.00 ppb | 39 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | **clean** | clean p90 = **11.90 ppb** | 23.10 ppb | 22 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | **dirty** | dirty p30 = **3.95 ppb** | 42.00 ppb | 54 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | **dirty** | dirty p30 = **0.00 ppb** | 7.00 ppb | 9 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=9 below 10-sample defensibility floor. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | **clean** | clean p90 = **5.08 ppb** | 44.40 ppb | 77 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | **provisional** (partner data thin/missing) | p90 = 3.15 ppb | 3.50 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |

## Total Arsenic (tAs)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | **dirty** | dirty p30 = **102.00 ppb** | 348.00 ppb | 253 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | **clean** | clean p90 = **36.00 ppb** | 54.80 ppb | 25 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | **clean** | clean p90 = **1.30 ppb** | 4.70 ppb | 230 | 3 | medium | **At readiness bar.** Path A n_a_tier=3 medium confidence. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | **dirty** | dirty p30 = **0.80 ppb** | 2.20 ppb | 38 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | **clean** | clean p90 = **1.21 ppb** | 3.00 ppb | 20 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | **dirty** | dirty p30 = **1.08 ppb** | 1.30 ppb | 3 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=3 below 10-sample defensibility floor. |
| Fruit purees ([[products/fruit-purees]]) | **standalone** (provisional p90) | clean p90 = **5.20 ppb** | 8.70 ppb | 39 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | **clean** | clean p90 = **1.11 ppb** | 11.00 ppb | 20 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | **dirty** | dirty p30 = **0.00 ppb** | 10.30 ppb | 54 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | **dirty** | dirty p30 = **5.26 ppb** | 28.30 ppb | 9 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=9 below 10-sample defensibility floor. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | **clean** | clean p90 = **5.54 ppb** | 13.60 ppb | 77 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | **provisional** (partner data thin/missing) | p90 = 163.53 ppb | 171.00 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |

## Inorganic Arsenic (iAs)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | **dirty** | dirty p30 = **90.62 ppb** | 176.00 ppb | 82 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | **clean** | clean p90 = **25.71 ppb** | 68.30 ppb | 30 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit purees ([[products/fruit-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | **standalone** (provisional p90) | clean p90 = **15.27 ppb** | 49.60 ppb | 152 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |

## Methylmercury (MeHg)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | exposure-pathway evidence; primary occurrence still data gap | — | — | 0 sample-level rice MeHg | 1 (Rothenberg 2021) | low | Path A primary occurrence still data gap (no rice MeHg sample-level pool); cohort-level rice-MeHg-exposure-and-neurodev evidence loaded ([[sources/rothenberg2021-maternal-methylmercury-rice-child-neurodevelopment-china|Rothenberg 2021]] n=391 rural China cohort, peripartum hair MeHg + Bayley scores). |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | mechanism-only evidence; primary occurrence still data gap | — | — | 0 sample-level | 1 (Coe 2023 mechanism) | low | Below bar; primary occurrence in formula MeHg still pending; gut-microbiome-MeHg demethylation mechanism evidence loaded ([[sources/coe2023-gut-microbiome-methylmercury-demethylation|Coe 2023]] gnotobiotic + cohort). |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit purees ([[products/fruit-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

## Total Mercury (tHg)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | **dirty** | dirty p30 = **0.00 ppb** | 4.00 ppb | 64 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | **clean** | clean p90 = **0.00 ppb** | 0.00 ppb | 9 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=9 below 10-sample defensibility floor. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | **clean** | clean p90 = **0.00 ppb** | 0.30 ppb | 230 | 3 | medium | **At readiness bar.** Path A n_a_tier=3 medium confidence. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | **dirty** | dirty p30 = **0.00 ppb** | 0.30 ppb | 38 | 2 | low | Approaching. Path A n_a_tier=2 (low per Part 6); third A-tier source clears bar. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | **clean** | clean p90 = **0.00 ppb** | 0.00 ppb | 20 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | **dirty** | dirty p30 = **0.00 ppb** | 0.08 ppb | 3 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=3 below 10-sample defensibility floor. |
| Fruit purees ([[products/fruit-purees]]) | **standalone** (provisional p90) | clean p90 = **0.41 ppb** | 0.60 ppb | 14 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | **clean** | clean p90 = **0.00 ppb** | 0.40 ppb | 13 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | **dirty** | dirty p30 = **0.00 ppb** | 1.10 ppb | 25 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | **dirty** | dirty p30 = **0.00 ppb** | 0.30 ppb | 3 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=3 below 10-sample defensibility floor. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | **clean** | clean p90 = **0.00 ppb** | 0.40 ppb | 36 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

## Nickel (Ni)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit purees ([[products/fruit-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |

## Aluminum (Al)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | summary-only | summary range | — | 0 | 5 | medium | Below bar; Path B candidate (no sample-level distribution); n_a_tier=5 summary-only. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | summary-only | summary range | — | 0 | 3 | medium | Below bar; Path B candidate (no sample-level distribution); n_a_tier=3 summary-only. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit purees ([[products/fruit-purees]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

## Hexavalent Chromium (Cr-VI)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit purees ([[products/fruit-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

## Tin (Sn)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| Infant rice cereal (dry) ([[products/baby-cereals-dry-rice-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Infant non-rice cereal (dry) ([[products/baby-cereals-dry-non-rice]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Soy-based powdered infant formula ([[products/infant-formula-powder-soy-based]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Milk-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-non-soy]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Soy-based RTF liquid infant formula ([[products/infant-formula-rtf-liquid-soy-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit purees ([[products/fruit-purees]]) | summary-only | summary range | — | 0 | 2 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=2 summary-only. |
| Non-root vegetable purees ([[products/non-root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Root-vegetable purees ([[products/root-vegetable-purees]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Meat and poultry purees ([[products/meat-and-poultry-purees]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Fish-containing baby foods ([[products/fish-containing-baby-foods]]) | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| Mixed meals (rice-containing) ([[products/mixed-meals-rice-containing]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Mixed meals (non-rice) ([[products/mixed-meals-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (rice-based) ([[products/teething-and-snacks-rice-based]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Teething & snacks (non-rice) ([[products/teething-and-snacks-non-rice]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Fruit juice (not-canned) ([[products/fruit-juice-not-canned]]) | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

## Per-Subcategory Readiness Roll-up

Each cell tagged by status: AT-BAR (Path A n_a_tier≥2 + medium confidence), APPROACHING (n_a_tier=2 low), THIN (n_a_tier=1 with sample-level), GAP (no sample-level or n_a_tier=0).

| Subcategory | At bar | Approaching | Path A thin | Data gap |
| --- | --- | --- | --- | --- |
| Infant rice cereal (dry) | — | iAs | Pb, Cd, tAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Infant non-rice cereal (dry) | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Milk-based powdered infant formula | Pb, Cd, tAs, tHg | — | MeHg, Cr-VI | iAs, Ni, Al, Sn |
| Soy-based powdered infant formula | Pb, Cd | tAs, tHg | iAs, MeHg, Ni, Cr-VI, Sn | Al |
| Milk-based RTF liquid infant formula | — | Pb, Cd | tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Soy-based RTF liquid infant formula | — | Pb, Cd | tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Fruit purees | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Cr-VI | Al, Sn |
| Non-root vegetable purees | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Root-vegetable purees | — | Pb | Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Meat and poultry purees | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Fish-containing baby foods | — | — | Pb, Cd, tAs, iAs, MeHg, Ni, Al, Cr-VI, Sn | tHg |
| Mixed meals (rice-containing) | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Mixed meals (non-rice) | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Teething & snacks (rice-based) | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Teething & snacks (non-rice) | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | — |
| Fruit juice (not-canned) | — | iAs | Cd, tAs, MeHg, tHg, Ni, Al, Cr-VI, Sn | Pb |


## Source Legend

The numbered citations would normally route here in IEEE-style; this expansion deferred per-cell numbering pending consolidation of overnight digest-batch source pages (commits 745aeed, 66af802, d5b9ea5, bccc91c added 38+ new source pages between Phase 5 v1 and this expansion). The canonical evidence inventory for each cell is on the constituent product-category page; cross-link via the subcategory column above.

Primary A-tier sources contributing to multiple cells in this master:

1. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] — FDA FY2009-FY2024 baby-food/young-child compliance samples; sample-level Pb, Cd, tAs, tHg by row_slug.
2. [[sources/fda2026-infant-formula-toxic-elements-special-survey]] — FDA FY2023-FY2025 infant formula special survey; sample-level Pb, Cd, tAs, tHg with explicit non-soy/soy/RTF/concentrated splits.
3. [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] — FDA 2016 inorganic arsenic in infant/toddler foods; sample-level iAs for rice (n=76), multigrain-with-rice (n=6), non-rice cereal (n=30), Juice-Grape (n=61).
4. [[sources/fda2011-apple-juice-arsenic-speciation]] — FDA 2011 single-strength apple juice; sample-level iAs n=94.
5. [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods]] — Dartmouth U.S. infant formulas and first foods; sample-level As speciation by HPLC-ICP-MS (added overnight via digest-batch-4).
6. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] — Inorganic arsenic in rice-based products for infants; baby rice n=29, rice cereals n=53, rice crackers n=199.
7. [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian infant formulae; Al, Cd, Pb summary by non-soy/soy/RTF/concentrated split.
8. [[sources/almeida2022-brazil-infant-formula-toxic-metals]] — Brazilian phase 1/2 cow-milk infant formula powder; Al, tAs, Cd, Sn, tHg, Pb, U range/summary.
9. [[sources/kazi2009-toxic-elements-in-infant-formulae]] — Pakistani milk-based and soy-based infant formulae; Al, Cd, Pb summary.
10. [[sources/pandelova2012-eu-baby-food-formula-elements]] — EU pooled market-basket formula; Cd, Pb pooled-basket summary.
11. [[sources/fsa2016-infant-food-formula-metals-survey]] — UK FSA infant foods/formula survey; broad category averages across 47-200 samples per category.
12. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] — French TDS infant/toddler; Al/Sb/tAs/Cd/Cr/Co/Ni/Sn/V across multiple infant-food categories.
13. [[sources/meli2024-chemical-characterization-baby-food-italy]] — Italian baby foods small-N analytical study; Al, tAs, Cd, tHg, Ni, Pb, Sn for powdered milk, fruit homogenized, meat, fish, cereal-cream subsets.
14. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] — U.S. baby foods n=36; tAs, Cd, Pb, tHg by ingredient category.
15. [[sources/burrell2010-aluminium-in-infant-formulas]] — UK infant formula Al; n=7 grouped means.
16. [[sources/chuchu2013-aluminium-in-infant-formulas]] — UK infant formula Al follow-up; n=18 grouped means.
17. [[sources/soares2000-chromium-vi-powdered-milk-formulas]] — Portuguese powdered milk infant formulas; Cr(VI) means/ranges by infant/follow-up/dietetic subset.
18. [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] — Japanese 0-5 children duplicate-diet MeHg + tHg; primary MeHg source for fish-containing baby foods.
19. [[sources/spungen2024-fda-tds-infant-lead-cadmium]] — FDA TDS infant Pb/Cd FY2018-2020 with named-food subsets including sweet potato baby food.
20. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] — Global scoping review; Pb/Cd/As/Hg in processed baby foods and infant formulas.
21. [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants]] — Dartmouth NHBC; urinary arsenic biomarker comparison of breastfed vs formula-fed infants.
22. [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort]] — Dartmouth NHBC longitudinal first-year-of-life arsenic exposure by feeding mode.
23. [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk]] — Dartmouth + Brigham/Harvard infant cohort; urinary biomarkers by feeding mode.
24. [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review]] — AJCN 2025 systematic review of As, Cd, Pb, Hg, PFAS in human milk and infant formula.
25. [[sources/rothenberg2021-maternal-methylmercury-rice-child-neurodevelopment-china]] — Rural China prospective cohort (n=391); maternal MeHg from rice ingestion paired with child Bayley neurodev outcomes through 36 months. Exposure-pathway evidence for the rice-as-MeHg-pathway (not direct rice MeHg occurrence).
26. [[sources/marques2021-trace-elements-milks-plant-based-drinks]] — Spanish cow/goat milk + soy/almond/rice/oat plant-based drinks + infant formulas; ICP-MS Hg, Pb, U, V, plus essentials. Direct primary occurrence for plant-milk and milk-based formula matrices. (Already existed on wiki at this session start; cited here for legend completeness.)
27. [[sources/chandravanshi-shiv-kumar-2021-cadmium-developmental-toxicity-infants-children-review]] — Pediatric Cd developmental toxicology review (kidneys, liver, heart, nervous system); supports vulnerable-population HMTc Cd-threshold rationale.
28. [[sources/signes-pastor2017-urinary-arsenic-speciation-children-pregnant-women-spain]] — Spanish INMA cohort; urinary As speciation in children and pregnant women. European biomarker counterpart to the Dartmouth U.S. infant-As cluster.
29. [[sources/carroquino-posada-landrigan-environmental-toxicology-children-at-risk]] — Encyclopedia of Sustainability Science and Technology pediatric environmental toxicology chapter (Landrigan); foundational secondary reference for the child-vulnerable-population framework.

For per-page primary sources see each constituent product-category page's Source Evidence Inventory.

## Phase 6 reference

Detailed cell-by-cell readiness state and the data-gap-with-rationale notes are in the Phase 6 overnight final report at [[batch-reports/infant-and-child-overnight-2026-05-09]].

## Coordination payload for Cowork (Heavy Metals in Infant and Child Foods Standards Briefing)

Per the master plan, Cowork uses the `hmtc-standards` skill to build the Standards Briefing as a .docx. The "At readiness bar" cells in the readiness roll-up are the publishable Path A targets the Briefing should center on; the rest are flagged as Path A thin / Approaching / Path B candidate / data gap with rationale.
