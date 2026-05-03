---
type: product-category
category: mixed-meals-rice-containing
hmtc_row: 13
label: "Mixed meals, rice-containing"
base_taxonomy: mixed-meals
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [mixed-meals, rice, rice-flour, vegetables, meat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: mixed-meals-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 3
---

# Mixed Meals, Rice-Containing

This page is a structural scaffold for HMTc Category 1 row 13. Broad rice/rice-mix sources have been promoted; FSA/Fera now adds government monitoring evidence for rice-containing finished mixed meals.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 3 A-tier / 0 B-tier sources.
- Next ingest target: mixed-meal datasets for rice-containing products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the contamination-platform counterpart to [[products/mixed-meals-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items, with 31% of detected rice/rice-mix items exceeding the Pb maximum level used by the authors and 30% exceeding the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The FSA/Fera 2014 UK survey measured rice-containing infant meals and fruit/cereal combinations as sold, including risotto, baby rice combinations, and rice-labeled mixed foods. These route here rather than to the non-rice mixed-meal clean-counterpart. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Rice-containing mixed-meal risk remains only partially supported because the promoted source's rice/rice-mix grouping does not specify complete mixed-meal formulation or rice share. <!-- UNCITED: Need mixed-meal datasets that distinguish rice-containing products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice as a priority ingredient platform, but they do not resolve rice ingredient form, meal composition, or arsenic speciation for mixed meals. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

The FSA/Fera source supports manual rice-containing meal routing, but app scoring still needs structured extraction to separate rice ingredient form, formulation share, and triggered inorganic arsenic results. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for rice-containing mixed meals should be documented only after sources distinguish rice ingredient form, formulation share, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate rice-containing from non-rice meals and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]], [[ingredients/rice]], and [[ingredients/rice-flour]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb | 10 ug/kg [[regulations/fda2025-lead-processed-baby-foods]] | final guidance action level; fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2 | FSA/Fera occurrence evidence is promoted; structured row extraction pending. | Use as external regulatory cap/context, not HMTc value. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
