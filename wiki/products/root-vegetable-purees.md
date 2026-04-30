---
title: Root-Vegetable Purees
type: product-category
category: root-vegetable-purees
hmtc_row: 9
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Root-vegetable purees"
base_taxonomy: vegetable-purees
variant_type: contamination_platform_cross_row
platform_metals: [Cd, Pb]
provenance: base_taxonomy
ingredient_targets: [root-vegetable-purees, carrot, sweet-potato, beet]
primary_metals_of_concern: [Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-rootveg-20ppb]
cc_relationship:
  role: contamination_platform
  scope: cross_row
  partners:
    - slug: non-root-vegetable-purees
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Cd, Pb]
      notes: "Cross-row CC: clean counterpart lives in row 8, not as a sibling within a vegetable-purees base split."
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 9
---

# Root-Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 9. Quantitative evidence now includes FDA compliance root-vegetable samples, a small root-vegetable baby-food distribution, FDA TDS named baby food sweet potato lead data, and broader UK vegetable/potato category values.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: root-vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Summary For Threshold Work

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small root-vegetable baby-food distribution with N=9. It supports min/mean/median/max summaries for total arsenic, cadmium, mercury, and lead, but it does not provide p10 or p90 and does not resolve individual root vegetables such as sweet potato versus carrot. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Use for p10/p90/p100? | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Vegetables rows with carrot, sweet potato, beet, or parsnip terms | tAs 54; Cd 54; Pb 59; tHg 25 | lower-bound p50, p90, p95, max | tAs p90 6.4 ppb, max 10.3 ppb; Cd p50 8.7 ppb, p90 31.5 ppb, max 42 ppb; Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tHg p90 0.3 ppb, max 1.1 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; root split is name-based. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Root-vegetable baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 10.8 ppb; median 12 ppb; max 22 ppb; detected 9/9 | Supports median/max only | Total arsenic, not iAs; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/cadmium|Cadmium]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 3.8 ppb; median 5 ppb; max 5 ppb; detected 6/9 | Supports median/max only | Small N; no p10/p90; values include study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/lead|Lead]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 15.8 ppb; median 5 ppb; max 48 ppb; detected 8/9 | Supports median/max only | Small N; no p10/p90; values include study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/mercury-total|Total mercury]] | Root-vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Named baby-food concentration | [[metals/lead|Lead]] | FDA TDS baby food sweet potatoes | not extracted | hybrid mean | 21 ppb | Does not support p10/p90/p100 | Named food signal, not a full root-puree distribution. [[sources/spungen2024-fda-tds-infant-lead-cadmium]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Root-vegetable evidence includes Parker 2022 root-vegetable distributions, FDA TDS named baby food sweet potato lead data, and broader UK vegetable/potato categories.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/cadmium|Cadmium]] | FDA FY2009-FY2024 root vegetable baby-food samples | p50 8.7 ppb; p90 31.5 ppb; p95 39.6 ppb; max 42 ppb | p50 8.7 ppb; p90 31.5 ppb; p95 39.6 ppb; max 42 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; name-based root subset. |
| [[metals/lead|Lead]] and [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 root vegetable baby-food samples | Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tAs p90 6.4 ppb, max 10.3 ppb | Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tAs p90 6.4 ppb, max 10.3 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/lead|Lead]] | Parker 2022 root-vegetable baby foods | mean 15.8 ppb; median 5 ppb; max 48 ppb | mean 15.8 ppb; median 5 ppb; max 48 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Root group, N=9; no p10/p90. |
| [[metals/cadmium|Cadmium]] | Parker 2022 root-vegetable baby foods | mean 3.8 ppb; median 5 ppb; max 5 ppb | mean 3.8 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Root group, N=9; includes substitution conventions. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 root-vegetable baby foods | mean 10.8 ppb; median 12 ppb; max 22 ppb | mean 10.8 ppb; median 12 ppb; max 22 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/lead|Lead]] | FDA TDS baby food sweet potatoes | 21 ug/kg hybrid mean | 21 ppb | [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Specific baby-food sweet-potato signal; not all root purees. |
| [[metals/lead|Lead]] | FDA proposed lead action level for root vegetables | 20 ppb | 20 ppb | [[sources/price2023-baby-food-lead-biokinetic-models]] | Regulatory proposal/action-level context, not occurrence distribution. |
| [[metals/cadmium|Cadmium]] | UK potatoes used in infant diet modeling | 21 ug/kg | 21 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/lead|Lead]] | UK potatoes used in infant diet modeling | 0 to 1 ug/kg | 0 to 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/cadmium|Cadmium]] | UK other vegetables used in infant diet modeling | 17 ug/kg | 17 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |
| [[metals/lead|Lead]] | UK other vegetables used in infant diet modeling | 7 to 8 ug/kg | 7 to 8 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French soups/purees and vegetable-based ready-to-eat infant meals. The source does not split root vegetables from non-root vegetables, so these rows are context until the sample list is mapped to the HMTc split. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Soups/purees | 11 | as consumed | 653 / 2140 ppb | 4.82 / 9 ppb | 7.36 / 15 ppb | 39 / 57 ppb | 57.7 / 106 ppb | 42 / 42 ppb |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |

## Row Relationship

This row is the contamination-platform counterpart to [[products/non-root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 100% of root-vegetable baby-food samples, lead in 88%, and cadmium in 67%; the same review reported that Parker et al. found non-cancer lead risk in grain, fruit, and root-vegetable products under that study's exposure assumptions. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2025 scoping review reported that Pb was detected in 97% of roots-and-tubers baby-food items and that roots/tubers had a median Pb concentration of 0.007 mg/kg among detected items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating root-vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Parker 2022 found the highest lead maximum in its root-vegetable group, with N=9, 88% detection, mean 15.8 ppb, median 5 ppb, and max 48 ppb. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 reported elevated lead values in foods containing sweet potatoes, making sweet-potato-containing purees a priority follow-up target. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support root/tuber and vegetable concern at a broad baby-food category level, but they do not yet separate carrot, sweet potato, beet, puree processing, or brand formulation. [[sources/bair2022-heavy-metals-infant-toddler-foods]] [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Potential variance drivers for root-vegetable purees should be documented only after sources distinguish root vegetable type, growing region, soil contribution, processing, and analytical method. <!-- UNCITED: Need puree or ingredient-level root vegetable sources that report metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/root-vegetable-purees]], [[ingredients/carrot]], and [[ingredients/sweet-potato]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for root vegetables and dry infant cereals, and FDA estimated a reduction in 90th-percentile dietary lead intake for fruits, root vegetables, and dry infant cereal combined if those action levels were implemented. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
