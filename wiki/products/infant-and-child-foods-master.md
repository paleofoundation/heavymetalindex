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
  - "[[products/fruit-purees]]"
  - "[[products/root-vegetable-purees]]"
  - "[[products/non-root-vegetable-purees]]"
  - "[[products/teething-and-snacks-rice-based]]"
  - "[[products/teething-and-snacks-non-rice]]"
updated: 2026-05-08
---

# Infant and Child Foods — Master CC Candidate Summary

This page rolls up CC candidate status across the four Karen-named Infant and Child Foods subcategories under the [Part 19 clean/dirty subcategory framework](../../CLAUDE.md). One master table per HMT&C analyte (ten total) shows each subcategory's clean or dirty designation, the corresponding standard target (clean p90 or dirty p30), p100 for context, n, n_a_tier, confidence per CLAUDE.md Part 6, and CC eligibility against the readiness bar (Path A with n_a_tier ≥ 2 and confidence ≥ medium, or Path B with 5× LOQ noted, or explicit data gap with documented rationale).

The four subcategories are:

1. **Infant rice cereal** — primary page [[products/baby-cereals-dry-rice-based]]; cross-row pair with [[products/baby-cereals-dry-non-rice]] for clean/dirty determination on Pb, Cd, tAs, iAs, tHg.
2. **Milk-based powdered infant formula** — primary page [[products/infant-formula-powder-non-soy]]; cross-row pair with [[products/infant-formula-powder-soy-based]] for Pb, Cd, tAs, tHg (FDA 2026 sample-level non-soy/soy splits).
3. **Infant fruit and vegetable purees** — three constituent pages: [[products/fruit-purees]] (independent, no within-row pair), [[products/root-vegetable-purees]] vs [[products/non-root-vegetable-purees]] (cross-row pair for Cd, Pb). The master tables below show the dominant-data sub-page per analyte and note multi-sub-page splits where they matter.
4. **Toddler snacks** — two constituent pages: [[products/teething-and-snacks-rice-based]] vs [[products/teething-and-snacks-non-rice]] (cross-row pair for iAs, Cd, Pb).

Per Part 19, clean and dirty are per-analyte empirical designations within a parent category; the same subcategory can be clean for one analyte and dirty for another. Final HMT&C values must remain no higher than the lowest applicable loaded regulatory cap regardless of where p90 or p30 falls.

Numeric values for Pb, Cd, tAs, and tHg are computed from FDA sample-level data (`data/evidence/category1_fda_baby_food_compliance_samples.csv` for FY2009-FY2024 baby-food compliance samples; `data/evidence/category1_formula_special_survey_samples.csv` for FDA FY2023-FY2025 formula special survey). iAs values are from `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` (FDA 2016 inorganic arsenic infant/toddler foods). Lower-bound treatment with `<LOD` and `NDb` set to 0 for FY2009-FY2024 compliance samples; trace `TR (x.x)` values preserved as numeric for FDA 2016. All percentiles are linear-interpolation between sorted samples.

## Lead (Pb)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | dirty (vs non-rice partner) | dirty p30 = **2.85 ppb** | 32.00 ppb | 256 | 1 | low | Path A thin (n_a_tier=1); needs second fit sample-level source | <sup>1</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | clean (vs soy-based partner) | clean p90 = **0.4 ppb** | 0.6 ppb | 230 | 5 | medium | **At readiness bar** | <sup>2,3,4,5,6</sup> |
| Infant fruit and vegetable purees ([[products/root-vegetable-purees]] dominant) | dirty (root-veg vs non-root-veg partner) | dirty p30 = **3.74 ppb** | 27.30 ppb | 59 | 1 | low | Path A thin; root-veg subset is the dirty side per FDA 2024 sample-level (rice-veg p90 15.58 vs non-root 1.76) | <sup>1</sup> |
| Toddler snacks ([[products/teething-and-snacks-rice-based]] dominant) | dirty (vs non-rice partner) | rice-based snacks data thin (n=2 in FDA 2024) | 6.50 ppb | 2 | 1 | data-thin | Below readiness bar; n=2 is too small for a defensible p30. Phase 3b ingest needed. | <sup>1</sup> |

## Cadmium (Cd)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | clean (vs non-rice partner; non-rice grains accumulate Cd more) | clean p90 = **22.00 ppb** | 40.50 ppb | 252 | 1 | low | Path A thin; needs second fit sample-level source | <sup>1</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | clean (vs soy-based partner; soy plants accumulate Cd) | clean p90 = **0.4 ppb** | 1.3 ppb | 230 | 6 | medium | **At readiness bar** | <sup>2,3,4,5,6,7</sup> |
| Infant fruit and vegetable purees ([[products/root-vegetable-purees]] dominant) | dirty (root-veg vs non-root-veg partner) | dirty p30 = **3.95 ppb** | 42.00 ppb | 54 | 1 | low | Path A thin; root-veg subset is dirty side per FDA 2024 sample-level (rice-veg p90 30.90 vs non-root 11.90) | <sup>1</sup> |
| Toddler snacks ([[products/teething-and-snacks-rice-based]] dominant) | dirty (sample-level n=2 only) | rice-based snacks p100 = 3.50 ppb | 3.50 ppb | 2 | 1 | data-thin | Below readiness bar; Phase 3b ingest needed | <sup>1</sup> |

## Total Arsenic (tAs)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | dirty (vs non-rice partner) | dirty p30 = **102.00 ppb** | 348.00 ppb | 253 | 1 | low | Path A thin; FDA total arsenic (iAs covered separately) | <sup>1</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | clean (marginal at p90) | clean p90 = **1.3 ppb** | 4.7 ppb | 230 | 3 | medium | **At readiness bar** | <sup>2,4,8</sup> |
| Infant fruit and vegetable purees ([[products/root-vegetable-purees]] dominant) | dirty (vs non-root partner; rice-rooted vegetables accumulate As) | dirty p30 = data-pool-too-low (root-veg p30 0.00 from FDA 2024 sample-level due to high non-detect rate) | 11.00 ppb non-root; 10.30 ppb root-veg | 54 root-veg + 20 non-root | 1 | data-thin | Below readiness bar for absolute p30 (non-detects dominate root-veg p30); secondary signal: root-veg p90 6.28 vs non-root p90 1.11 (root-veg dirtier) | <sup>1</sup> |
| Toddler snacks ([[products/teething-and-snacks-rice-based]] dominant) | dirty (vs non-rice partner; FDA n=2 rice-named subset shows tAs p90/max 171 ppb; FDA broad grain-based snacks n=91 p90 224 ppb context) | rice-based snacks subset p30 = **118.71 ppb** (n=2; data-thin) | 171 ppb (n=2 rice-named); 561 ppb (broad grain-based n=91) | 2 | 1 | data-thin | Below readiness bar; n=2 too small. Broader grain-based snack pool (n=91) gives p90 224 ppb but rice status not isolated. | <sup>1</sup> |

## Inorganic Arsenic (iAs)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | dirty (vs non-rice partner; rice efficiently accumulates iAs from flooded paddies) | dirty p30 = **90.62 ppb** | 176.00 ppb | 82 | 2 | low (Part 6: n_a_tier=2 is at the floor for medium-3-studies threshold) | Path A approaching bar; n_a_tier=2 (FDA 2016 + Signes-Pastor 2016). Final HMT&C value capped at 100 ppb regulatory cap. | <sup>9,10</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | likely clean (FSA 2016 UK first/hungrier dry milk 0.7-1.8 ppb category-level; Jackson 2012 sample-level U.S. infant formula iAs speciation; rice-cereal subcategory rice-based p90 124.90 for context) | Path A established; basis-matched aggregate not yet pooled | per Jackson 2012 sample-level + 1.8 ppb FSA 2016 UK category upper bound | 2 | 2 | low (Part 6: n_a_tier=2 = low; medium requires 3+ studies) | Approaching readiness bar; Path A formally established with [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods|Jackson 2012]] sample-level + [[sources/fsa2016-infant-food-formula-metals-survey|FSA 2016]] summary. Triangulating biomarker evidence: [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]], [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort|Carignan 2016 cohort]], [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk|Pikounis et al.]]. Recent systematic-review citation: [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]]. Third sample-level source would clear medium-confidence bar. | <sup>8,17,18,19,20,21</sup> |
| Infant fruit and vegetable purees ([[products/fruit-purees]] / [[products/non-root-vegetable-purees]]) | data gap (FDA 2024 reports tAs not iAs for purees; Signes-Pastor 2018 fruit/vegetable iAs combined median up to 20 ppb, not separable) | data gap | up to 20 ppb (combined fruit + vegetable signs-pastor 2018) | 0 sample-level | 1 | data-thin | Below readiness bar; speciation extraction needed | <sup>11</sup> |
| Toddler snacks ([[products/teething-and-snacks-rice-based]]) | dirty (Signes-Pastor 2016 rice crackers n=199 EU+US: median 79-111 ppb, max 273; rice-products are dirty by author scope) | rice-based snacks median ~79-111 ppb (source-reported) | 273 ppb (Signes-Pastor 2016 rice crackers) | 199 source-summary | 1 | low | Path A approaching; Signes-Pastor 2016 is the primary source. FDA 2016 rice-cereal data does not include rice-based snacks specifically. | <sup>10</sup> |

## Methylmercury (MeHg)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal | (no measured-MeHg source) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** Speciation source required (tHg cannot substitute per CLAUDE.md Part 14). Rationale: raw/reports/+studies/+Digest/ filename scan returned no MeHg-in-rice-cereal candidate. | — |
| Milk-based powdered infant formula | (no measured-MeHg source for either powder subcategory) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** Same rationale. | — |
| Infant fruit and vegetable purees | (no measured-MeHg source for any puree subcategory) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |
| Toddler snacks | (no measured-MeHg source) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |

## Total Mercury (tHg)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | dirty (data-thin) | dirty p30 = **0 ppb**; both subcategories sparse detection | 4.00 ppb | 64 | 1 | data-thin | Path A formal; Meli 2024 outlier (n=3, max 40 ppb cereal-cream) flagged for follow-up | <sup>1,12</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | clean (data-thin; non-soy 3/230 detected vs soy 1/38) | clean p90 = **0 ppb** | 0.3 ppb | 230 | 3 | data-thin | Path A formal but sparse detection | <sup>2,4,5</sup> |
| Infant fruit and vegetable purees ([[products/fruit-purees]] dominant) | (data-thin; root-veg sparse, fruit p90 0.41) | clean p90 = **0.41 ppb** (fruit-purees) / 0.18 ppb (root-veg) / 0.00 ppb (non-root-veg) | 0.6 ppb (fruit) | 14 fruit + 25 root-veg + 13 non-root | 1 | data-thin | Path A formal but data-thin | <sup>1</sup> |
| Toddler snacks ([[products/teething-and-snacks-rice-based]]) | (data-thin; rice-based n=3 p90 0.24) | data-thin (n=3) | 0.30 ppb (rice-based n=3) | 3 | 1 | data-thin | Below readiness bar; insufficient n | <sup>1</sup> |

## Nickel (Ni)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | data gap (broad-cereal sources only) | data gap | n/a | 0 rice-specific | 0 | data gap | **Below readiness bar.** FSA 2016 and Chekri 2019 give broad-cereal Ni context but no rice-specific split. Phase 3b ingest needed. | <sup>8,13</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | clean signal (FSA 2016 UK first/hungrier milk Ni 18-54 ppb; n=47 broad formula) | summary range 18-54 ppb | 54 ppb (FSA 2016 UK upper bound) | 47 broad formula | 2 | low | Path B candidate (5×LOQ ≈ 25 ppb on wet basis); sample-level non-soy distribution required for Path A | <sup>8,7</sup> |
| Infant fruit and vegetable purees ([[products/fruit-purees]] / [[products/root-vegetable-purees]]) | data gap (broad-puree summary only) | data gap | n/a | 0 sample-level | 1-2 | data gap | **Below readiness bar.** Meli 2024 reports Ni mean 137 ppb in fruit homogenized (N=3). FSA 2016 fruit-based 92-117 ppb category. No sample-level distribution. | <sup>8,12</sup> |
| Toddler snacks | (no Ni source for snacks specifically) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |

## Aluminum (Al)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | data gap (Chekri 2019 broad cereal mean 630 max 3810 ppb; n=17 broad cereal, no rice split) | summary range up to 3810 ppb (broad cereal) | 3810 ppb (Chekri 2019 broad cereal max) | 17 broad cereal | 1 | data gap | **Below readiness bar.** Phase 3b ingest needed for rice-specific Al. | <sup>13</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | non-soy approaching (multiple A-tier summary sources; cow-milk powder ranges 432-1241 ppb Almeida; 446.8 mean Burrell; 1004 max Dabeka) | summary range 432-1241 ppb (cow-milk powder, Almeida 2022 n=44); aggregate not yet pooled | 1241 ppb (Almeida 2022 cow-milk max) | n=44 cow-milk + n=18 + n=7 + n=57 across sources | 5 | medium | **Approaching readiness bar.** n_a_tier=5 with medium confidence by source count, but no sample-level distribution; basis matching needed (powder-as-sold vs as-consumed). | <sup>3,4,5,14,15</sup> |
| Infant fruit and vegetable purees ([[products/fruit-purees]]) | data gap (Meli 2024 fruit homogenized Al mean 580 ppb N=3; Chekri 2019 fruit purees mean 556 max 1420) | summary range up to 1420 ppb | 1420 ppb (Chekri 2019 fruit puree max) | 3 + 30 broad | 2 | low | **Below readiness bar.** Path A blocked by lack of sample-level distribution. | <sup>12,13</sup> |
| Toddler snacks ([[products/teething-and-snacks-non-rice]]) | non-rice signal (FSA 2016 sweet and savoury snacks Al 5185 ppb broad category) | summary 5185 ppb broad UK category | 5185 ppb (FSA 2016 UK upper) | 200 broad UK category | 1 | low | **Below readiness bar.** Single A-tier source. | <sup>8</sup> |

## Hexavalent Chromium (Cr-VI)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal | (no Cr-VI source for rice cereal) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** Cr-VI requires speciation (total Cr cannot substitute per CLAUDE.md Part 14). | — |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | non-soy summary signal (Soares 2000 Portugal powdered milk infant formulas n=7, mean 24 ppb, range <10-75; follow-up milks n=5 mean 12 ppb; dietetic milks n=8 mean 33 ppb) | summary range <10-75 ppb (group means) | 75 ppb (Soares 2000 max) | 7 milk-formula | 1 | low | **Below readiness bar.** Path B candidate: Soares 2000 LOD 1.8 ug/L reconstituted milk ≈ 1.8 ppb wet; 5×LOQ ≈ 10 ppb wet. Sample-level non-soy Cr-VI distribution needed for Path A. | <sup>16</sup> |
| Infant fruit and vegetable purees | (no Cr-VI source) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |
| Toddler snacks | (no Cr-VI source) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |

## Tin (Sn)

| Subcategory | Clean/dirty | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility | Citations |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Infant rice cereal ([[products/baby-cereals-dry-rice-based]]) | data gap (Chekri 2019 broad cereal mean 49.2 max 83 ppb; no rice split) | summary range up to 83 ppb (broad cereal) | 83 ppb | 17 broad cereal | 1 | data gap | **Below readiness bar.** Phase 3b ingest needed. | <sup>13</sup> |
| Milk-based powdered infant formula ([[products/infant-formula-powder-non-soy]]) | non-soy approaching (Almeida 2022 cow-milk n=44 range 7-95 ppb; FSA 2016 broad formula Sn) | summary range 7-95 ppb | 95 ppb (Almeida 2022) | 44 cow-milk | 2 | low | **Approaching readiness bar.** n_a_tier=2 but at low confidence per Part 6. Sample-level extraction from Almeida 2022 table would firm Path A. | <sup>4,8</sup> |
| Infant fruit and vegetable purees ([[products/fruit-purees]]) | data gap (Meli 2024 fruit homogenized Sn mean 98 ppb N=3; Chekri 2019 fruit purees mean 424 max 3330 ppb) | summary range up to 3330 ppb | 3330 ppb (Chekri 2019 fruit puree max — note Sn often elevated in canned products) | 3 + 30 broad | 2 | low | **Below readiness bar.** | <sup>12,13</sup> |
| Toddler snacks | (no Sn source for snacks specifically) | data gap | n/a | 0 | 0 | data gap | **Below readiness bar.** | — |

## Subcategory Readiness Summary

Per Karen's per-subcategory readiness bar (Path A with n_a_tier ≥ 2 AND confidence ≥ medium, OR Path B 5× LOQ noted, OR explicit data gap with documented rationale):

| Subcategory | Pb | Cd | tAs | iAs | MeHg | tHg | Ni | Al | Cr-VI | Sn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Infant rice cereal | thin | thin | thin | approaching | gap | thin | gap | gap | gap | gap |
| Milk-based formula (non-soy powder) | **AT BAR** | **AT BAR** | **AT BAR** | approaching | gap | thin | low | approaching | gap | approaching |
| Infant fruit and vegetable purees | thin | thin | data-thin | gap | gap | thin | gap | gap | gap | gap |
| Toddler snacks | gap | gap | thin | approaching (rice subset) | gap | thin | gap | gap | gap | gap |

**At readiness bar (3 cells):** Pb, Cd, tAs in milk-based powdered infant formula. Driven by FDA 2026 special-survey sample-level data (n=230 non-soy powder) plus 3-6 supporting A-tier summary sources per analyte, satisfying n_a_tier ≥ 2 and confidence ≥ medium per Part 6.

**Approaching (5 cells):** iAs in rice cereal (n_a_tier=2 at floor of low/medium boundary; FDA 2016 + Signes-Pastor 2016); iAs in milk-based powdered formula (Path A formally established 2026-05-09 via Jackson 2012 + FSA 2016; n_a_tier=2 with low confidence; triangulating biomarker support from Carignan 2015 + Carignan 2016 + Pikounis); iAs in toddler snacks rice-based subset (Signes-Pastor 2016 rice crackers n=199 source-summary); Al in milk-based formula (n_a_tier=5 across multiple A-tier summaries but no sample-level pool); Sn in milk-based formula (n_a_tier=2 summary).

**Path A thin (5 cells):** Pb, Cd, tAs in infant rice cereal (FDA 2024 n=256 sample-level but only one fit source); Pb, Cd in purees root-veg subset (FDA 2024 n=54-59 sample-level); tAs in toddler snacks rice subset (FDA 2024 n=2, very thin).

**Data gaps with rationale (28 cells):** see per-table CC eligibility notes. Dominant gap drivers are (a) lack of sample-level non-soy/non-rice splits in summary-only sources, (b) MeHg requires speciation that no IandC source has performed, (c) Cr-VI requires speciation that only Soares 2000 milk-formula has performed.

## Source Legend

1. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] — FDA FY2009-FY2024 baby-food/young-child compliance samples; sample-level totals for Pb, Cd, tAs, tHg by row_slug.
2. [[sources/fda2026-infant-formula-toxic-elements-special-survey]] — FDA FY2023-FY2025 infant formula special survey; sample-level totals for Pb, Cd, tAs, tHg with explicit non-soy/soy/RTF/concentrated splits.
3. [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian infant formulae, oral electrolytes and glucose solutions; Al, Cd, Pb summary by non-soy/soy/RTF/concentrated split.
4. [[sources/almeida2022-brazil-infant-formula-toxic-metals]] — Brazilian phase 1/2 cow-milk infant formula powder; Al, tAs, Cd, Sn, tHg, Pb, U range/summary.
5. [[sources/kazi2009-toxic-elements-in-infant-formulae]] — Pakistani milk-based and soy-based infant formulae; Al, Cd, Pb summary.
6. [[sources/pandelova2012-eu-baby-food-formula-elements]] — EU pooled market-basket formula; Cd, Pb pooled-basket summary.
7. [[sources/dabeka1987-canada-infant-formula-lead-cadmium]] — Canadian milk-base infant formula powder historical Cd, Pb.
8. [[sources/fsa2016-infant-food-formula-metals-survey]] — UK FSA infant foods/formula survey; broad category averages for Al, tAs, iAs, Cd, Pb, Ni, Sn across infant-formula and infant-food categories.
9. [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] — FDA 2016 inorganic arsenic in infant/toddler foods; sample-level iAs for rice (n=76), multigrain-with-rice (n=6), non-rice (n=30), Juice-Grape (n=61).
10. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] — Inorganic arsenic in rice-based products for infants; baby rice n=29, rice cereals n=53, rice crackers n=199 (EU + US); source-reported medians/ranges (dry weight).
11. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] — Infant biomarker study; dietary arsenic context, fruit and vegetable purees combined up to 20 ppb iAs (citation-only).
12. [[sources/meli2024-chemical-characterization-baby-food-italy]] — Italian baby foods; Al, tAs, Cd, tHg, Ni, Pb, Sn for powdered milk, fruit homogenized, meat, fish, cereal-cream subsets (small N=3-15 per subset).
13. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] — French TDS infant/toddler; Al, Sb, tAs, Cd, Cr, Co, Ni, Sn, V across cereal-based infant foods (n=17), fruit purees (n=30), formula (n=28-34), and other categories.
14. [[sources/burrell2010-aluminium-in-infant-formulas]] — UK infant formula aluminium; n=7 non-soy/soy/RTF grouped means.
15. [[sources/chuchu2013-aluminium-in-infant-formulas]] — UK infant formula aluminium follow-up; n=18 non-soy/soy/RTF grouped means.
16. [[sources/soares2000-chromium-vi-powdered-milk-formulas]] — Portuguese powdered milk infant formulas; Cr(VI) means/ranges by infant/follow-up/dietetic subset (n=7/5/8); the original "milk-based or soy-based" hedge that motivated the CLAUDE.md Part 6 row-fit rule was on this source's downstream routing.
17. [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods]] — Dartmouth U.S. infant formulas and first foods; sample-level As speciation by HPLC-ICP-MS; primary occurrence source for milk-based powdered formula iAs.
18. [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants]] — Dartmouth U.S. New Hampshire Birth Cohort; urinary arsenic biomarker comparison of breastfed vs formula-fed infants; triangulating biomarker evidence for the formula-iAs case.
19. [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort]] — Dartmouth NHBC longitudinal first-year-of-life arsenic exposure by feeding mode; companion to Carignan 2015.
20. [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk]] — Dartmouth + Brigham/Harvard infant cohort; urinary biomarkers of toxic and essential elements by feeding mode (As, Pb, Cd, Hg, Mn).
21. [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review]] — AJCN 2025 U.S. systematic review of As, Cd, Pb, Hg, and PFAS in human milk and infant formula; canonical recent synthesis source.
