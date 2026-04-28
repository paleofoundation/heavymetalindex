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
sources: 0
---

# Fish-Containing Baby Foods

This page is a structural scaffold for HMTc Category 1 row 11. No Category 1 source has been promoted from `raw/` to `wiki/sources/` for this row yet.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 0 A-tier / 0 B-tier sources.
- Next ingest target: fish-containing baby-food or fish ingredient datasets for [[metals/mercury-methyl|MeHg]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row uses an aggregate non-fish Category 1 reference relationship in the row architecture for [[metals/mercury-methyl|MeHg]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

Risk characterization for this row is pending source ingest. <!-- UNCITED: Need fish-containing baby-food datasets, or clearly labeled fish ingredient datasets, before describing MeHg risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for fish-containing baby foods should be documented only after sources distinguish fish species, serving form, formulation share, sourcing, processing, and analytical method. <!-- UNCITED: Need fish baby-food or fish ingredient sources that report MeHg or tHg concentrations and methods such as [[testing/icp-ms]] or mercury speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fish-containing-baby-foods]], [[ingredients/fish]], and [[ingredients/seafood]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need fish-containing baby-food or fish advisory sources from FDA, EU, Codex, or other agencies before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

No source pages are currently cited for this row. No concentration, risk, variance, regulatory, or enforcement claim should be promoted from `<!-- UNCITED -->` status until a promoted `wiki/sources/` page exists.

