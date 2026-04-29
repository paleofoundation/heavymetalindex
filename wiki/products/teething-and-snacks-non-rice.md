---
type: product-category
category: teething-and-snacks-non-rice
hmtc_row: 15
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
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
updated: 2026-04-29
sources: 3
---

# Teething & Snacks (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 15. Broad snack and teething-biscuit evidence is available, but non-rice snack-specific p10/p90/p100 distributions are still pending.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: evidence-backed scaffold with broad snack evidence; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: teething-food and snack datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Summary For Threshold Work

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice snack p10/p90/p100 concentration spread. Existing snack evidence either does not split rice status or reports broad all-sample baby-food percentiles that cannot be treated as a non-rice benchmark. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Use for p10/p90/p100? | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| UK snack category average | [[metals/aluminum|Aluminum]] | Sweet and savoury snacks | not extracted | category average | 5185 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Sweet and savoury snacks | not extracted | category average/range | 58 to 62 ppb | Does not support p10/p90/p100 | Broad snack group; likely includes rice-containing products. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/cadmium|Cadmium]] | Sweet and savoury snacks | not extracted | category average | 24 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/lead|Lead]] | Sweet and savoury snacks | not extracted | category average | 10 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Snack evidence is strong at the broad infant-snack level, but current sources do not split rice-based from non-rice snacks cleanly.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | FDA TDS baby food teething biscuits | 18 ug/kg hybrid mean | 18 ppb | [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Teething biscuit signal; rice status not specified. |
| [[metals/aluminum|Aluminum]] | UK sweet and savoury snacks | 5185 ug/kg | 5185 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/arsenic-total|Total arsenic]] | UK sweet and savoury snacks | 98 ug/kg | 98 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK sweet and savoury snacks | 58 to 62 ug/kg | 58 to 62 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; likely includes rice-containing products. |
| [[metals/cadmium|Cadmium]] | UK sweet and savoury snacks | 24 ug/kg | 24 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/lead|Lead]] | UK sweet and savoury snacks | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/nickel|Nickel]] | UK sweet and savoury snacks | 292 ug/kg | 292 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/teething-and-snacks-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

Risk characterization for this row is pending source ingest that can separate rice from non-rice snack products. <!-- UNCITED: Need teething-food and snack datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats, which means oat- and wheat-based snacks should not be treated as automatically clean without product-specific evidence. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice teething foods and snacks should be documented only after sources distinguish grain type, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate non-rice from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/non-rice-grains]], and snack-format targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need teething-food or snack-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
