---
type: product-category
category: baby-cereals-dry-non-rice
hmtc_row: 5
label: "Baby cereals / grain products, dry (non-rice)"
base_taxonomy: baby-cereals-dry
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, non-rice-grains, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: baby-cereals-dry-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 4
---

# Baby Cereals / Grain Products, Dry (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 5. Broad cereal and infant-food sources have been promoted; FSA/Fera now adds government monitoring evidence for dry cereal and grain products, with rice-containing products kept out of this clean-counterpart row.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 4 A-tier / 0 B-tier sources.
- Next ingest target: infant cereal datasets for non-rice dry grain products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/baby-cereals-dry-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that cereals had the highest median Cd concentration among baby-food groups in the review at 0.013 mg/kg, and 17% of detected cereal items exceeded the Cd maximum level used by the authors. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The FSA/Fera 2014 UK survey measured baby cereals, porridge, rusks, biscuits, and other dry grain products as sold with a 16-element ICP-MS panel. Non-rice-labeled cereals and dry grain products route here; baby rice and rice-containing grain products route to the rice-based counterpart row. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Non-rice-specific risk remains unresolved because the promoted review's cereal grouping is broader than this row and may include products not cleanly separable by grain type. <!-- UNCITED: Need infant cereal or dry grain-product datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted sources support cereal-level monitoring but do not yet distinguish oat, wheat, corn, quinoa, multigrain, fortification premix, or non-rice-only products. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

The FSA/Fera source improves row routing by listing product descriptions, but automated use still needs ingredient parsing before assigning oat, wheat, corn, or multigrain subprofiles. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for non-rice dry baby cereals should be documented only after sources distinguish grain type, fortification, sourcing geography, processing, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate non-rice grain products from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]] and [[ingredients/non-rice-grains]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb | 20 ug/kg [[regulations/fda2025-lead-processed-baby-foods]] | final guidance action level; dry infant cereals for children under 2 | Promoted source coverage exists; structured row extraction pending. | Use as external regulatory cap/context, not HMTc value. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for dry infant cereals. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
