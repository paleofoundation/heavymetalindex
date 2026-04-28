---
type: product-category
category: fish-containing-baby-foods
hmtc_row: 11
label: "Fish-containing baby foods"
base_taxonomy: fish-containing-baby-foods
variant_type: contamination_platform_added_step_0c
platform_metals: [MeHg]
provenance: added_step_0c_contamination_platform
ingredient_targets: [fish-containing-baby-foods, fish, seafood]
primary_metals_of_concern: [MeHg]
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: aggregate_source
  partners:
    - slug: "aggregate:category-1-non-fish-baby-foods"
      partner_type: row_aggregate
      role_of_partner: clean_benchmark
      metals: [MeHg]
      notes: "MeHg variation across fish species is handled in the CC derivation for this row, not as additional rows."
  aggregate_definition:
    handle: category-1-non-fish-baby-foods
    member_slugs:
      - infant-formula-powder-non-soy
      - infant-formula-powder-soy-based
      - infant-formula-rtf-liquid-non-soy
      - infant-formula-rtf-liquid-soy-based
      - baby-cereals-dry-non-rice
      - baby-cereals-dry-rice-based
      - fruit-purees
      - non-root-vegetable-purees
      - root-vegetable-purees
      - meat-and-poultry-purees
      - mixed-meals-non-rice
      - mixed-meals-rice-containing
      - fruit-juice-not-canned
      - teething-and-snacks-non-rice
      - teething-and-snacks-rice-based
    rationale: "Non-fish baby foods constitute the clean reference distribution for MeHg in Category 1; fish-containing baby foods diverge from this distribution because of bioaccumulation, which is the contamination platform being characterized."
audience: [regulator, educator, consumer, app]
updated: 2026-04-28
sources: 1
---

# Fish-Containing Baby Foods

This page is a structural scaffold for HMTc Category 1 row 11. One broad baby-food scoping review has been promoted; methylmercury-specific baby-food sources are still pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 1 A-tier / 0 B-tier sources.
- Next ingest target: fish-containing baby-food or fish ingredient datasets for [[metals/mercury-methyl|MeHg]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row uses an aggregate non-fish Category 1 reference relationship in the row architecture for [[metals/mercury-methyl|MeHg]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review found that fish/fish-mix baby foods had the highest median arsenic concentration among baby-food groups in the review at 0.165 mg/kg and the highest median mercury concentration at 0.016 mg/kg; Hg was detected in 100% of fish/fish-mix items in that review's baby-food grouping. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

MeHg-specific risk characterization remains pending because the promoted source reports Hg at the grouped review level rather than a full methylmercury speciation profile for fish-containing baby foods. <!-- UNCITED: Need fish-containing baby-food datasets, or clearly labeled fish ingredient datasets, that distinguish [[metals/mercury-methyl|MeHg]] from total mercury. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted scoping review supports fish/fish-mix products as a priority group for Hg and As, but it does not resolve fish species, formulation share, or mercury speciation. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for fish-containing baby foods should be documented only after sources distinguish fish species, serving form, formulation share, sourcing, processing, and analytical method. <!-- UNCITED: Need fish baby-food or fish ingredient sources that report MeHg or tHg concentrations and methods such as [[testing/icp-ms]] or mercury speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fish-containing-baby-foods]], [[ingredients/fish]], and [[ingredients/seafood]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need fish-containing baby-food or fish advisory sources from FDA, EU, Codex, or other agencies before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
