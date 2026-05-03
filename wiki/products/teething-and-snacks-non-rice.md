---
type: product-category
category: teething-and-snacks-non-rice
hmtc_row: 15
label: "Teething & snacks (non-rice)"
base_taxonomy: teething-and-snacks
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [teething-and-snacks, non-rice-grains, oat, wheat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: teething-and-snacks-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
---

# Teething & Snacks (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 15. FSA/Fera government monitoring now provides the first promoted Category 1 source for non-rice-labeled infant snacks and teething foods.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 1 A-tier / 0 B-tier sources.
- Next ingest target: teething-food and snack datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/teething-and-snacks-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

The FSA/Fera 2014 UK survey measured infant biscuits, rusks, nibbly fingers, puffs, and other snack-like baby foods as sold with a 16-element ICP-MS panel. Non-rice-labeled snacks route here, while rice cakes and rice-containing snacks route to the rice-based counterpart. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Risk characterization for this row remains limited until the report is parsed into snack-format subgroups. <!-- UNCITED: Need teething-food and snack datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice teething foods and snacks should be documented only after sources distinguish grain type, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate non-rice from rice-based products and report methods such as [[testing/icp-ms]]. -->

The FSA/Fera product descriptions are enough to prevent a zero-source gap, but not enough by themselves to assign ingredient-level risk without structured parsing. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/non-rice-grains]], and snack-format targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | FSA/Fera occurrence evidence is promoted; structured row extraction pending. | Occurrence evidence only until regulatory scope is resolved. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fera2014-fsa-metals-infant-foods-formula]]
