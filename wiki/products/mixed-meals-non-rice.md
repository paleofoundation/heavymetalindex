---
type: product-category
category: mixed-meals-non-rice
hmtc_row: 12
label: "Mixed meals, non-rice"
base_taxonomy: mixed-meals
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [mixed-meals, non-rice-grains, vegetables, meat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: mixed-meals-rice-containing
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
---

# Mixed Meals, Non-Rice

This page is a structural scaffold for HMTc Category 1 row 12. FSA/Fera government monitoring now provides the first promoted Category 1 source for non-rice mixed meals.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 1 A-tier / 0 B-tier sources.
- Next ingest target: mixed-meal datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/mixed-meals-rice-containing]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

The FSA/Fera 2014 UK survey measured many finished infant mixed meals as sold with a 16-element ICP-MS panel. Pasta, lasagne, cottage pie, meat-and-vegetable, and other non-rice-labeled meals route here; risotto, baby rice combinations, and rice-containing meals route to the rice-containing counterpart. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Risk characterization for this row remains limited until the report is parsed into meal-format and ingredient subgroups. <!-- UNCITED: Need mixed-meal datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice mixed meals should be documented only after sources distinguish ingredient composition, grain inclusion, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate non-rice from rice-containing meals and report methods such as [[testing/icp-ms]]. -->

The FSA/Fera product labels are sufficient to prevent the row from staying empty, but app use needs explicit rice-inclusion, meat/fish inclusion, and ingredient-share fields before scoring. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]] and non-rice ingredient targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

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

- [[sources/fera2014-fsa-metals-infant-foods-formula]]
