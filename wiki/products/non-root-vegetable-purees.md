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
updated: 2026-04-28
sources: 3
---

# Non-Root Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 8. Broad vegetable and baby-food sources have been promoted; non-root puree-specific distributions are still pending.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: non-root vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-root vegetable puree values remain approximate because sources group vegetables differently from the HMTc row. The UK survey provides green-vegetable and other-vegetable concentration rows.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
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
