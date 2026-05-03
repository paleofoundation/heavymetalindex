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
updated: 2026-05-01
sources: 4
---

# Non-Root Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 8. Broad vegetable and baby-food sources have been promoted; FSA/Fera now adds government monitoring evidence for finished non-root vegetable baby foods.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 4 A-tier / 0 B-tier sources.
- Next ingest target: non-root vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 78% of leguminous vegetable baby-food samples and lead in 22% of leguminous vegetable samples. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating non-root vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

The FSA/Fera 2014 UK survey measured finished vegetable baby foods as sold, including non-root vegetable products and vegetable-containing meals, with a 16-element ICP-MS panel. Root/tuber products such as carrot, parsnip, potato, and sweet potato route to the root-vegetable row instead. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Non-root vegetable puree risk remains only partially supported because the promoted sources do not yet distinguish leafy greens, squash, legumes, finished purees, or row-specific non-root vegetables. <!-- UNCITED: Need non-root vegetable puree datasets or ingredient-level sources before describing Cd or Pb risk for this exact row. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-root vegetable purees should be documented only after sources distinguish vegetable type, growing region, soil contribution, processing, and analytical method. <!-- UNCITED: Need puree or ingredient-level vegetable sources that report metal concentrations and methods such as [[testing/icp-ms]]. -->

The FSA/Fera source improves root/non-root routing, but Table 6 non-infant vegetable composites should remain future ingredient/app evidence unless explicitly admitted as comparator evidence. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/non-root-vegetable-purees]], [[ingredients/leafy-greens]], and [[ingredients/squash]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb | 10 ug/kg [[regulations/fda2025-lead-processed-baby-foods]] | final guidance action level; fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2 | FSA/Fera occurrence evidence is promoted; structured row extraction pending. | Use as external regulatory cap/context, not HMTc value. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 10 ppb for fruits and vegetables. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
