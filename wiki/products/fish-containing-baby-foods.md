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
sources: 3
---

# Fish-Containing Baby Foods

This page is a structural scaffold for HMTc Category 1 row 11. Three fish, mercury, or baby-food sources have been promoted; finished-product fish baby-food datasets are still pending.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: fish-containing baby-food or fish ingredient datasets that report both [[metals/mercury-total|tHg]] and [[metals/mercury-methyl|MeHg]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Fish-containing baby foods have arsenic and mercury signals, but many sources group fish with mixed fish/meat foods or total diet stages.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Arsenic]] | Fish/fish-mix baby foods in global scoping review | median 0.165 mg/kg | 165 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad fish/fish-mix category. |
| [[metals/mercury-total|Mercury]] | Fish/fish-mix baby foods in global scoping review | median 0.016 mg/kg | 16 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Mercury species not guaranteed across included studies. |
| [[metals/mercury-total|Total mercury]] | Baby food stage 3 duplicate-diet stage | median 0.445 ng/g wet weight | 0.445 ppb wet weight | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Total diet stage, not isolated commercial fish baby food. |
| [[metals/methylmercury|Methylmercury]] | Baby food stage 3 duplicate-diet stage | median intake 22.5 ng/kg bw/day | not a concentration ppb value | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Intake estimate; fish is a likely driver. |
| [[metals/arsenic-total|Total arsenic]] | UK meat and fish based infant foods/dishes | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |
| [[metals/cadmium|Cadmium]] | UK meat and fish based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |
| [[metals/lead|Lead]] | UK meat and fish based infant foods/dishes | 4 to 5 ug/kg | 4 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |

## Row Relationship

This row uses an aggregate non-fish Category 1 reference relationship in the row architecture for [[metals/mercury-methyl|MeHg]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review found that fish/fish-mix baby foods had the highest median arsenic concentration among baby-food groups in the review at 0.165 mg/kg and the highest median mercury concentration at 0.016 mg/kg; Hg was detected in 100% of fish/fish-mix items in that review's baby-food grouping. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2024 analytical study of European baby foods included fish homogenized foods and reported that a salmon homogenized food had the highest estimated daily intake for total arsenic in the study at 0.143 ug/kg body weight per day; the same study reported total mercury but did not speciate methylmercury. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2024 duplicate-diet study of Japanese children aged 0-5 measured both total mercury and methylmercury; among diet samples with total mercury at or above 1 ng/g, methylmercury had a median concentration of 1.70 ng/g and accounted for 90.0% of total mercury. [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]]

Finished-product MeHg characterization remains incomplete because the promoted methylmercury source is diet-stage-based rather than limited to commercial fish-containing baby foods. <!-- UNCITED: Need fish-containing baby-food datasets, or clearly labeled fish ingredient datasets, that distinguish [[metals/mercury-methyl|MeHg]] from total mercury. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted scoping review supports fish/fish-mix products as a priority group for Hg and As, but it does not resolve fish species, formulation share, or mercury speciation. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted duplicate-diet study links higher methylmercury intake during later baby-food stages to fish-consumption patterns, but it does not isolate the commercial product share of each diet sample. [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]]

Potential variance drivers for fish-containing baby foods should be documented only after sources distinguish fish species, serving form, formulation share, sourcing, processing, and analytical method. <!-- UNCITED: Need fish baby-food or fish ingredient sources that report MeHg or tHg concentrations and methods such as [[testing/icp-ms]] or mercury speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fish-containing-baby-foods]], [[ingredients/fish]], and [[ingredients/seafood]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need fish-containing baby-food or fish advisory sources from FDA, EU, Codex, or other agencies before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]]
