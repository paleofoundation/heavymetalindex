---
type: product-category
category: meat-and-poultry-purees
hmtc_row: 10
label: "Meat and poultry purees"
base_taxonomy: meat-and-poultry-purees
variant_type: independent_added_step_0c
provenance: added_step_0c_no_existing_home
ingredient_targets: [meat-and-poultry-purees, poultry, beef, turkey]
primary_metals_of_concern: []
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Meat And Poultry Purees

This page is a structural scaffold for HMTc Category 1 row 10. Two broad baby-food analytical sources have been promoted from `raw/` to `wiki/sources/`; FSA/Fera now adds government monitoring evidence for meat- and poultry-containing finished baby foods.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 2 A-tier / 0 B-tier sources.
- Next ingest target: meat and poultry baby-food monitoring data across the Category 1 metal panel.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2024 analytical study of European baby foods included homogenized meat foods and reported that cadmium and lead were below the study LOD in all samples, but the study did not isolate HMTc-style meat-and-poultry puree distributions. [[sources/meli2024-chemical-characterization-baby-food-italy]]

The FSA/Fera 2014 UK survey measured chicken, beef, lamb, pork, and turkey-containing infant foods as sold with a 16-element ICP-MS panel. Mixed meals with meat remain finished-product evidence, not a pure meat ingredient distribution. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Risk characterization for this row remains limited. <!-- UNCITED: Need meat and poultry puree datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for meat and poultry purees should be documented only after sources distinguish meat type, organ-meat inclusion if relevant, feed or environmental inputs, processing, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report meat and poultry puree metal concentrations and methods such as [[testing/icp-ms]]. -->

The FSA/Fera source should be used cautiously for this row because many meat/poultry records are mixed meals; app use needs structured ingredient-share and rice-inclusion parsing first. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/meat-and-poultry-purees]], [[ingredients/poultry]], and [[ingredients/beef]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

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

- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
