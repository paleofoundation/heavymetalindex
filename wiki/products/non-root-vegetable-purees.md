---
type: product-category
category: non-root-vegetable-purees
hmtc_row: 8
label: "Non-root vegetable purees"
base_taxonomy: vegetable-purees
variant_type: independent_serves_as_cross_row_cc
provenance: base_taxonomy
ingredient_targets: [vegetable-purees, non-root-vegetables, leafy-greens, squash]
primary_metals_of_concern: [Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: cross_row
  partners:
    - slug: root-vegetable-purees
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Cd, Pb]
      notes: "Non-root vegetable purees serve as the clean cross-row CC source for root-vegetable purees on Cd and Pb. Within row 8 itself, no within-row contamination split exists."
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 5
---

# Non-Root Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 8. Quantitative evidence now includes a small leguminous-vegetable baby-food distribution and broader UK green/other vegetable category values; non-root puree p10/p90/p100 distributions remain incomplete.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: non-root vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Summary For Threshold Work

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small leguminous-vegetable baby-food distribution with N=9. It is relevant to non-root vegetable purees, but it does not cover all non-root vegetables, does not provide p10 or p90, and should not be generalized to leafy greens or squash without additional sources. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Use for p10/p90/p100? | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| Leguminous vegetable baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Leguminous vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 4.2 ppb; median 5 ppb; max 5 ppb; detected 7/9 | Supports median/max only | Total arsenic, not iAs; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/cadmium|Cadmium]] | Leguminous vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/lead|Lead]] | Leguminous vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 2.3 ppb; median 1.5 ppb; max 5 ppb; detected 2/9 | Supports median/max only | Small N; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/mercury-total|Total mercury]] | Leguminous vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| UK category average | [[metals/nickel|Nickel]] | UK green vegetables used in infant diet modeling | not extracted | category average | 210 ppb | Does not support p10/p90/p100 | Ingredient group, not finished puree. [[sources/fsa2016-infant-food-formula-metals-survey]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-root vegetable puree values remain approximate because sources group vegetables differently from the HMTc row. Parker 2022 provides a leguminous-vegetable baby-food subset, while the UK survey provides green-vegetable and other-vegetable concentration rows.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | Parker 2022 leguminous vegetable baby foods | mean 2.3 ppb; median 1.5 ppb; max 5 ppb | mean 2.3 ppb; median 1.5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Leguminous vegetable group, N=9; no p10/p90. |
| [[metals/cadmium|Cadmium]] | Parker 2022 leguminous vegetable baby foods | no detections; substitution value 1.5 ppb | no detections; substitution value 1.5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | ND substitution, not measured detected Cd. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 leguminous vegetable baby foods | mean 4.2 ppb; median 5 ppb; max 5 ppb | mean 4.2 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Popular fruit and vegetable purees cited in infant arsenic study | up to 20 ug/kg | up to 20 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation combines fruit and vegetable purees. |
| [[metals/cadmium|Cadmium]] | UK green vegetables used in infant diet modeling | 5 ug/kg | 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/lead|Lead]] | UK green vegetables used in infant diet modeling | 2 ug/kg | 2 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/nickel|Nickel]] | UK green vegetables used in infant diet modeling | 210 ug/kg | 210 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/cadmium|Cadmium]] | UK other vegetables used in infant diet modeling | 17 ug/kg | 17 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |
| [[metals/lead|Lead]] | UK other vegetables used in infant diet modeling | 7 to 8 ug/kg | 7 to 8 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 78% of leguminous vegetable baby-food samples and lead in 22% of leguminous vegetable samples. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating non-root vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Non-root vegetable puree risk remains only partially supported because the promoted sources do not yet distinguish leafy greens, squash, legumes, finished purees, or row-specific non-root vegetables. <!-- UNCITED: Need non-root vegetable puree datasets or ingredient-level sources before describing Cd or Pb risk for this exact row. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-root vegetable purees should be documented only after sources distinguish vegetable type, growing region, soil contribution, processing, and analytical method. <!-- UNCITED: Need puree or ingredient-level vegetable sources that report metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/non-root-vegetable-purees]], [[ingredients/leafy-greens]], and [[ingredients/squash]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 10 ppb for fruits and vegetables. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
