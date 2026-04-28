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
sources: 2
---

# Non-Root Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 8. Broad vegetable and baby-food sources have been promoted; non-root puree-specific distributions are still pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 2 A-tier / 0 B-tier sources.
- Next ingest target: non-root vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 78% of leguminous vegetable baby-food samples and lead in 22% of leguminous vegetable samples. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

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

- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
