---
type: product-category
category: teething-and-snacks-rice-based
hmtc_row: 16
label: "Teething & snacks (rice-based)"
base_taxonomy: teething-and-snacks
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [teething-and-snacks, rice, rice-flour, rice-puffs]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: teething-and-snacks-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 3
---

# Teething & Snacks (Rice-Based)

This page is a structural scaffold for HMTc Category 1 row 16. Broad rice/rice-mix baby-food sources have been promoted; FSA/Fera now adds government monitoring evidence for rice cakes and rice-containing infant snacks.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 3 A-tier / 0 B-tier sources.
- Next ingest target: teething-food and snack datasets for rice-based products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the contamination-platform counterpart to [[products/teething-and-snacks-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items, with 31% of detected rice/rice-mix items exceeding the Pb maximum level used by the authors and 30% exceeding the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2022 narrative review identifies rice-based weaning products as an arsenic concern and cites evidence of increased infant urinary inorganic arsenic metabolites after weaning with rice products. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

The FSA/Fera 2014 UK survey measured rice cakes, rice/corn snacks, and other rice-containing infant snack products as sold, with total arsenic and triggered inorganic arsenic follow-up. Rice-labeled snacks route here, not to the non-rice snack row. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice/rice-mix concern, but they do not resolve teething-food format, puff processing, rice ingredient form, or serving pattern. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

The FSA/Fera report supplies finished-product labels that can separate rice cakes from biscuits/rusks during manual ingest; automated use still needs structured parsing of rice inclusion and snack format. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for rice-based teething foods and snacks should be documented only after sources distinguish rice ingredient form, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate rice-based from non-rice products and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/rice]], [[ingredients/rice-flour]], and [[ingredients/rice-puffs]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| iAs | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | FSA/Fera occurrence evidence is promoted; structured row extraction pending. | Occurrence evidence only; avoid silent rice-cereal substitution. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
