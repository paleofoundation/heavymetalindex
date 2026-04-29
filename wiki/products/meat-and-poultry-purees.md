---
type: product-category
category: meat-and-poultry-purees
hmtc_row: 10
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
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
updated: 2026-04-28
sources: 1
---

# Meat And Poultry Purees

This page is a structural scaffold for HMTc Category 1 row 10. One broad baby-food analytical source has been promoted from `raw/` to `wiki/sources/`; meat-and-poultry puree-specific distributions are still pending.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: meat and poultry baby-food monitoring data across the Category 1 metal panel.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Meat and poultry puree evidence is currently grouped with meat/fish infant foods or homogenized meat foods; poultry-specific values are not yet resolved.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | UK meat and fish based infant foods/dishes | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK meat and fish based infant foods/dishes | 2 to 4 ug/kg | 2 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/cadmium|Cadmium]] | UK meat and fish based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/lead|Lead]] | UK meat and fish based infant foods/dishes | 4 to 5 ug/kg | 4 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/nickel|Nickel]] | UK meat and fish based infant foods/dishes | 43 to 72 ug/kg | 43 to 72 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | Italian homogenized baby foods including meat | below LOD in all samples | below method LOD | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Study includes meat homogenized foods, but source page does not yet extract meat-only concentration table. |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2024 analytical study of European baby foods included homogenized meat foods and reported that cadmium and lead were below the study LOD in all samples, but the study did not isolate HMTc-style meat-and-poultry puree distributions. [[sources/meli2024-chemical-characterization-baby-food-italy]]

Risk characterization for this row remains limited. <!-- UNCITED: Need meat and poultry puree datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for meat and poultry purees should be documented only after sources distinguish meat type, organ-meat inclusion if relevant, feed or environmental inputs, processing, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report meat and poultry puree metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/meat-and-poultry-purees]], [[ingredients/poultry]], and [[ingredients/beef]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need meat and poultry baby-food-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
