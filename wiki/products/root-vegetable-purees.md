---
type: product-category
category: root-vegetable-purees
hmtc_row: 9
label: "Root-vegetable purees"
base_taxonomy: vegetable-purees
variant_type: contamination_platform_cross_row
platform_metals: [Cd, Pb]
provenance: base_taxonomy
ingredient_targets: [root-vegetable-purees, carrot, sweet-potato, beet]
primary_metals_of_concern: [Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: []
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
updated: 2026-04-28
sources: 4
---

# Root-Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 9. Four broad Category 1 sources have been promoted; puree-specific concentration distributions are still pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 4 A-tier / 0 B-tier sources.
- Next ingest target: root-vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the contamination-platform counterpart to [[products/non-root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 100% of root-vegetable baby-food samples, lead in 88%, and cadmium in 67%; the same review reported that Parker et al. found non-cancer lead risk in grain, fruit, and root-vegetable products under that study's exposure assumptions. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2025 scoping review reported that Pb was detected in 97% of roots-and-tubers baby-food items and that roots/tubers had a median Pb concentration of 0.007 mg/kg among detected items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating root-vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

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

- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
