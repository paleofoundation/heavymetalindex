---
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 17
---

# Infant Formula, Powder (Non-Soy)

This page is the Category 1 row 1 evidence page for powdered non-soy infant formula. It is now organized around certification-relevant concentration data first, with exposure estimates and broad formula studies separated so they do not get mistaken for ppb product distributions.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: corrected pilot product-category evidence format.
- Strongest current row-fit evidence: cow-milk formula concentration ranges from China, Brazil, the UK, Canada, and pooled EU formula baskets.
- Main gap: the current corpus still does not provide a validated Step 0F CC Source Data Package with a selected Path A p90 or Path B LOQ value for every analyte.
- Next ingest target: datasets that distinguish powder from ready-to-feed liquid, non-soy from soy-based formula, and individual-product concentrations from pooled baskets or exposure estimates.

## Source Evidence Inventory

<!-- audience: regulator, educator, app -->

This table lists what each source actually reports. It does not calculate the HMT&C p90. Max/p100 here means the highest value reported within that source's stated scope, not the aggregate clean-platform p100 for the certification row.

| Metal | Evidence scope | N | Statistic type | Reported values | Max / p100 in source scope | Row-fit and CC-use note | Citation |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| [[metals/lead|Pb]] | China cow milk-based formulas | 93 | mean and range | mean 2.03 ppb; range 0.36 to 5.75 ppb | 5.75 ppb | Direct cow-milk formula evidence; eligible as supporting occurrence evidence, but not a validated aggregate p90 by itself. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/cadmium|Cd]] | China cow milk-based formulas | 93 | mean and range | mean 0.98 ppb; range 0.13 to 3.58 ppb | 3.58 ppb | Direct cow-milk formula evidence; eligible as supporting occurrence evidence, but not a validated aggregate p90 by itself. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/arsenic-total|tAs]] | China cow milk-based formulas | 93 | mean and range | mean 3.32 ppb; range 0.89 to 7.87 ppb | 7.87 ppb | Direct cow-milk formula evidence; total arsenic only, not iAs. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/chromium|Cr]] | China cow milk-based formulas | 93 | mean and range | mean 27.38 ppb; range 2.51 to 83.80 ppb | 83.80 ppb | Total chromium only; excluded from Cr-VI CC math unless a source speciates Cr-VI. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/aluminum|Al]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 432 to 1241 ppb | 1241 ppb | Direct cow-milk powder evidence; supports aggregate occurrence review but does not establish p90 by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-total|tAs]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 12 to 34 ppb | 34 ppb | Direct cow-milk powder evidence; total arsenic only. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/tin|Sn]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 7 to 95 ppb | 95 ppb | Direct cow-milk powder evidence; supports aggregate occurrence review but does not establish p90 by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/mercury-total|tHg]] | Brazil cow-milk phase 1/2 formulas | not extracted | non-detect / below LOQ | not detected or below LOQ | below LOQ | Total mercury only; MeHg not measured. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-inorganic|iAs]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 0.7 to 1.8 ppb | 1.8 ppb | UK category value; supports context but not an individual-product p90. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 3 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product p90. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/lead|Pb]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 1 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product p90. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/nickel|Ni]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 18 to 54 ppb | 54 ppb | UK category value; supports nickel context but not an individual-product p90. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | Canada milk-base infant formula powder, historical | 17 | median and range | median 0.6 ppb; range not detected to 4.3 ppb | 4.3 ppb | Direct milk-base powder evidence, but historical Canadian data. | [[sources/dabeka1987-canada-infant-formula-lead-cadmium|4]] |
| [[metals/cadmium|Cd]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 3.3 to 4.5 ppb | 4.5 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/lead|Pb]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 8.2 to 43.9 ppb | 43.9 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/arsenic-total|tAs]] | Infant formulas without organic brown rice syrup | 15 | range | 2 to 12 ppb | 12 ppb | Broad infant-formula evidence; powder/non-soy/soy not split. | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]] |
| [[metals/nickel|Ni]] | Peshawar infant formula group | not extracted from 46 total milk/formula samples | mean and range | mean 27.7 ppb; range 22 to 32 ppb | 32 ppb | Formula powder context; not soy-resolved and not a p90 distribution by itself. | [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals|13]] |
| [[metals/nickel|Ni]] | Pakistan infant formula milk brands | 13 brands | range | below 1 to 50,903 ppb | 50,903 ppb | High source-scope maximum requiring PDF image QA before standards math; not soy-resolved and not a p90 distribution by itself. | [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin|14]] |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey is the first source in this row that gives a reconstructable product-label subset with p50, p90, and p100 values. These values are expressed as prepared for feeding, so they should not be silently pooled with dry-powder-as-sold ppb values. The extraction below uses nearest-rank percentiles and treats `<LOD` as 0 for a lower-bound summary; the full extracted register is in `data/evidence/category1_formula_concentration_summary.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | p10 | p50 | p90 | p95 | p100 | Citation |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| [[metals/arsenic-total|tAs]] | 230 | 212 | 18 | prepared for feeding; <LOD=0 lower-bound | 0.2 | 0.4 | 1.3 | 2 | 4.7 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 230 | 169 | 61 | prepared for feeding; <LOD=0 lower-bound | 0 | 0.2 | 0.4 | 0.5 | 0.6 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 230 | 145 | 85 | prepared for feeding; <LOD=0 lower-bound | 0 | 0.2 | 0.4 | 0.5 | 1.3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 230 | 3 | 227 | prepared for feeding; <LOD=0 lower-bound | 0 | 0 | 0 | 0 | 0.3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Digest formula papers add useful source-scope rows, but they mostly report means, medians, ranges, or maxima rather than p90. These rows support the evidence pool and p100/max context; they do not by themselves select a final aggregate p90.

| Source | Metal | N | Basis | Mean | Median / p50 | Max / p100 | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 57 | as consumed | 177 | 44 | 1004 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 57 | as consumed | 0.17 | 0.06 | 1.21 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 57 | as consumed | 0.65 | 0.34 | 3.46 | Source reports summary statistics but not p90. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/aluminum|Al]] | 17 | as sold or source-reported |  |  | 2170 | Range supports source-scope p100/max only; it does not establish p50 or p90. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/cadmium|Cd]] | 17 | as sold or source-reported |  |  | 34.4 | Range supports source-scope p100/max only; it does not establish p50 or p90. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/lead|Pb]] | 17 | as sold or source-reported |  |  | 119 | Range supports source-scope p100/max only; it does not establish p50 or p90. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 7 | prepared estimate from powder | 446.8 |  | 592.4 | Source reports product means/ranges and prepared estimates; non-soy powder products are grouped, no p90. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 18 | prepared estimate from powder | 194.8 |  | 411 | Source reports product means and prepared estimates; non-soy powder products are grouped, no p90. |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | [[metals/nickel|Ni]] | 11 formulas; 22 packs | powder as sold | 61.8 |  | 98 | Broad powdered-formula context; soy status not separated, no p90. |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | [[metals/cadmium|Cd]] | 11 formulas; 22 packs | powder as sold | 2 |  | 6.2 | Broad powdered-formula context; soy status not separated, no p90. |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | [[metals/lead|Pb]] | 11 formulas; 22 packs | powder as sold | 2 |  | 2.8 | Broad powdered-formula context; soy status not separated, no p90. |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | [[metals/tin|Sn]] | 11 formulas; 22 packs | powder as sold | 20 |  | 96.9 | Calculated from Table 4 formula-level means; broad powdered-formula context, no p90. |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | [[metals/nickel|Ni]] | not extracted | as sold or source-reported | 27.7 |  | 32 | Infant-formula group mean/range; source does not report p90 or soy status. |
| [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]] | [[metals/nickel|Ni]] | 13 brands | as sold or source-reported |  |  | 50903 | Range-only source-scope maximum; high value needs PDF image QA before standards math. |

## CC Candidate Summary

<!-- audience: regulator, educator, app -->

This is the standards-facing summary for Step 0F logic. The p90 belongs here only after a clean-platform distribution has been selected or aggregated. The FDA 2026 special survey now provides a lower-bound prepared-for-feeding p90 subset for tAs, Pb, Cd, and tHg, but those values still need review for clean-platform inclusion, basis matching, non-detect handling, and 95% confidence before they become a validated CC Source Data Package.

| HMT&C analyte | Path A p90 status | Current CC candidate status | What is still needed |
| --- | --- | --- | --- |
| [[metals/lead|Pb]] | Not selected. Current sources include ranges, category values, historical data, and pooled baskets, but no validated clean-platform aggregate p90. | Pending Step 0F. Path B may apply if no qualifying p90 dataset is found. | Qualifying clean-platform occurrence distribution for non-soy powdered formula with documented jurisdiction composition and 95% confidence, or validated LOQ for Path B. |
| [[metals/arsenic-total|tAs]] | Not selected. Several total arsenic ranges exist, but no validated aggregate p90. | Pending Step 0F. | Same row-fit occurrence distribution or validated LOQ. |
| [[metals/cadmium|Cd]] | Not selected. Multiple supporting sources exist, but pooled, historical, basis-mismatched, and mixed-jurisdiction scopes must be adjudicated before Path A. | Pending Step 0F. | Inclusion/exclusion decision and aggregate clean-platform distribution, or validated LOQ. |
| [[metals/mercury-methyl|MeHg]] | No row-fit product concentration distribution identified. | Pending Step 0F. Likely Path B unless new occurrence data is found. | MeHg-specific formula method LOQ or qualifying occurrence data. |
| [[metals/mercury-total|tHg]] | No validated aggregate p90; one source reports non-detect/below LOQ for tHg. | Pending Step 0F. | tHg occurrence distribution or validated LOQ. |
| [[metals/arsenic-inorganic|iAs]] | No validated aggregate p90; UK category values exist. | Pending Step 0F. | iAs-specific formula occurrence distribution or validated LOQ. |
| [[metals/nickel|Ni]] | No validated aggregate p90; UK category values and additional formula context exist. | Pending Step 0F. | Ni formula occurrence distribution with individual-product values, or validated LOQ. |
| [[metals/aluminum|Al]] | No validated aggregate p90; Brazil range exists. | Pending Step 0F. | Al formula occurrence distribution or validated LOQ. |
| [[metals/chromium-hexavalent|Cr-VI]] | No Cr-VI row-fit evidence identified; total Cr values are not Cr-VI. | Pending Step 0F. Likely Path B unless Cr-VI data is found. | Cr-VI-specific occurrence data or validated LOQ. |
| [[metals/tin|Sn]] | No validated aggregate p90; Brazil range exists. | Pending Step 0F. | Sn formula occurrence distribution or validated LOQ. |

## How Standards Math Uses This Page

<!-- audience: regulator, educator, consumer, app -->

For lower-is-better metals, p100/max in a source evidence row is the highest observed value inside that source's scoped pool. It is useful because it shows the upper edge of the reported evidence, but it is not by itself the HMT&C clean-counterpart value.

p90 is the cutoff at which roughly 90 percent of the selected clean-platform pool would pass. Under HMT&C methodology, that value is selected during Step 0F as the Path A CC candidate when adequate occurrence data exists. If adequate occurrence data does not exist, the cell uses Path B, defined as 5 times the analytical LOQ for that analyte and matrix.

The current page should therefore be read as an evidence inventory, not as a completed limit table. It identifies sources that may feed the CC Source Data Package, but the aggregate p90, Path B LOQ fallback, tightening formula, regulatory floor check, and final published HMT&C limit are separate standards-build outputs.

## Evidence Used For This Row

<!-- audience: regulator, educator, app -->

The direct row-fit evidence is strongest when a study measures cow-milk or milk-base powdered formula as a product concentration. Chung 2021, Almeida 2022, FSA 2016, Dabeka 1987, and Pandelova 2012 are therefore more useful for this row than broad baby-food papers, but each still has a limitation that prevents it from becoming a final HMT&C threshold distribution.

The largest interpretive issue is scope. China-market, Brazil-market, UK-market, Canada-historical, EU-pooled-basket, and U.S. prepared-for-feeding values should not be silently merged without basis matching, row-fit review, and jurisdiction metadata. They can show what has been observed in formula, and they may contribute to an aggregate evidence pool when the standards workflow can document comparability and 95% confidence.

## Exposure Estimates From Formula Consumption

<!-- audience: regulator, educator, consumer, app -->

Gardener 2019 is useful because it reports percentile-style infant exposure estimates from formula consumption. It is not a product concentration table and should not be used as ppb threshold evidence.

| Metal | Product or exposure scope | N | p50 | p75 | p90 | p95 | p100 / max | Unit | Threshold use | Citation |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | --- |
| [[metals/lead|Pb]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 0.00 | 0.43 | 0.78 | 1.06 | 2.68 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |
| [[metals/cadmium|Cd]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 0.00 | 3.86 | 6.11 | 8.04 | 23.33 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French infant formula, follow-on formula, and growing-up milk values as consumed after preparation; it does not separate powder from ready-to-feed, soy from non-soy, or cow-milk from other formulas, so these rows support broad formula occurrence context rather than a row-specific p90. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Infant formulae | 28 | as consumed | 196 / 585 ppb | 1.61 / 4 ppb | 0.39 / 1 ppb | 20.8 / 38 ppb | 25.9 / 50 ppb | 42 / 42 ppb |
| Follow-on formulae | 34 | as consumed | 276 / 1140 ppb | 1.68 / 3 ppb | 0.43 / 2 ppb | 22.1 / 78 ppb | 26.5 / 50 ppb | 42 / 42 ppb |
| Growing-up milks | 9 | as consumed | 189 / 724 ppb | 2.11 / 4 ppb | 0.71 / 4 ppb | 27.7 / 61 ppb | 25 / 25 ppb | 42 / 42 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63 percent of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73 percent of cow-based formula items and Cd in 44 percent of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

A 2012 arsenic speciation study reported total arsenic concentrations of 2 to 12 ng/g in 15 infant formulas without organic brown rice syrup; because 1 ng/g equals 1 ug/kg, this corresponds to 2 to 12 ppb total arsenic in formula powder, though the study does not isolate non-soy formula powder as a row-specific category. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|9]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Non-soy-specific risk characterization remains pending. <!-- UNCITED: Need non-soy powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Pandelova 2012 reported higher cadmium values in pooled soy-formula baskets than in pooled milk-formula and hypoallergenic-formula baskets, but pooled market baskets cannot be used as an individual-product percentile distribution. [[sources/pandelova2012-eu-baby-food-formula-elements|5]]

Potential variance drivers for non-soy powdered formula should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need formula-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Source Legend

1. [[sources/chung2021-china-infant-formula-toxic-elements|Chung 2021]]: China cow milk-based infant formula concentrations for Pb, Cd, tAs, and total Cr.
2. [[sources/almeida2022-brazil-infant-formula-toxic-metals|Almeida 2022]]: Brazil cow-milk infant formula powder ranges for Al, tAs, Sn, and tHg.
3. [[sources/fsa2016-infant-food-formula-metals-survey|FSA 2016]]: UK dry first/hungrier milk category values for iAs, Cd, Pb, and Ni.
4. [[sources/dabeka1987-canada-infant-formula-lead-cadmium|Dabeka 1987]]: historical Canadian milk-base infant formula powder data for cadmium and lead.
5. [[sources/pandelova2012-eu-baby-food-formula-elements|Pandelova 2012]]: EU pooled market-basket formula values, including milk-formula and soy-formula baskets.
6. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson 2012]]: infant formula total arsenic values in products without organic brown rice syrup.
7. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|Gardener 2019]]: percentile-style infant exposure estimates from formula consumption.
8. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]]: global scoping review of baby foods and infant formulas.
9. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor 2018]]: infant dietary arsenic and biomarker context.
10. [[sources/meli2024-chemical-characterization-baby-food-italy|Meli 2024]]: European baby-food and powdered-milk analytical context.
11. [[sources/spungen2024-fda-tds-infant-lead-cadmium|Spungen 2024]]: FDA Total Diet Study infant lead and cadmium context.
12. [[sources/efsa-cadmium-contam-2009|EFSA 2009]]: cadmium toxicology and regulatory context.
13. [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals|Lutfullah 2014]]: Peshawar infant-formula and milk nickel mean/range context.
14. [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin|Akhtar 2017]]: Pakistan infant formula milk brand nickel range context.

## Sources

- [[sources/chung2021-china-infant-formula-toxic-elements]]
- [[sources/almeida2022-brazil-infant-formula-toxic-metals]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/dabeka1987-canada-infant-formula-lead-cadmium]]
- [[sources/pandelova2012-eu-baby-food-formula-elements]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/efsa-cadmium-contam-2009]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- [[sources/kazi2009-toxic-elements-in-infant-formulae]]
- [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]]
- [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]]
