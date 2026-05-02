---
title: Infant Formula, RTF Liquid (Soy-Based)
type: product-category
category: infant-formula-rtf-liquid-soy-based
hmtc_row: 4
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, RTF liquid (soy-based)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 5
---

# Infant Formula, RTF Liquid (Soy-Based)

This page is a structural scaffold for HMTc Category 1 row 4. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd); [[metals/arsenic-total]] (tAs); [[metals/mercury-total]] (tHg) | No product-specific value loaded in this crosswalk. | tAs: N=3, detected 0.9-1.3 ug/kg, P90=1.28 ug/kg; Pb: N=3, detected 0.2-0.4 ug/kg, P90=0.36 ug/kg; Cd: N=3, detected 0.8-1.1 ug/kg, P90=1.06 ug/kg; tHg: N=3, detected 0.08-0.08 ug/kg, P90=0.064 ug/kg | No matched FDA formula action level loaded; do not compare formula occurrence values to processed-baby-food action levels. | Occurrence evidence for HMTc review; not a regulatory exceedance table. | [[sources/fda2026-infant-formula-product-testing-results]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: formula-specific [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]] data for soy-based ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

No promoted source currently gives a ready-to-feed soy-formula concentration table. The closest direct evidence is ready-to-feed formula without a soy split and dry soy formula as sold.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | UK ready-to-feed first/hungrier milk | 0 to 0.4 ug/L | 0 to 0.4 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ready-to-feed formula, but not soy-specific. |
| [[metals/cadmium|Cadmium]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ready-to-feed formula, but not soy-specific. |
| [[metals/aluminum|Aluminum]] | UK dry soy-based formula, as sold | 2550 ug/kg | 2550 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |
| [[metals/cadmium|Cadmium]] | UK dry soy-based formula, as sold | 11 ug/kg | 11 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |
| [[metals/nickel|Nickel]] | UK dry soy-based formula, as sold | 200 ug/kg | 200 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey has a very small ready-to-feed soy-based subset (`n=3`). The p50/p90/p100 values below are mechanically reproducible, but this subset is too small to use directly as a stable threshold distribution. The extraction uses nearest-rank percentiles and treats `<LOD` as 0 for a lower-bound summary; the sample-level rows are retained in `data/evidence/category1_formula_special_survey_samples.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | p10 | p50 | p90 | p95 | p100 | Citation |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| [[metals/arsenic-total|tAs]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.9 | 1.2 | 1.3 | 1.3 | 1.3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.2 | 0.2 | 0.4 | 0.4 | 0.4 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.8 | 0.9 | 1.1 | 1.1 | 1.1 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 3 | 1 | 2 | prepared for feeding; <LOD=0 lower-bound | 0 | 0 | 0.08 | 0.08 | 0.08 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use soy-based source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima, but not p90.

| Source | Metal | N | Basis | Mean | Median / p50 | Max / p100 | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 14 | as consumed | 730 | 769 | 1121 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 14 | as consumed | 1.18 | 1.06 | 2.95 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 14 | as consumed | 1.45 | 1.36 | 2.1 | Source reports summary statistics but not p90. |

## Row Relationship

This row is the contamination-platform counterpart to [[products/infant-formula-rtf-liquid-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 84% of soy-based formula items and Cd in 91% of soy-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Ready-to-feed-specific risk characterization for [[metals/aluminum|Al]] and [[metals/nickel|Ni]] remains pending. <!-- UNCITED: Need soy-based ready-to-feed liquid infant formula sources that measure Al and Ni and distinguish ready-to-feed liquid from powder. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates soy-based formulas from cow-based and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for soy-based ready-to-feed formula should be documented only after sources distinguish soy inputs, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate soy-based ready-to-feed liquid formula from non-soy ready-to-feed liquid formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-rtf-liquid]], [[ingredients/soy-based-infant-formula]], and [[ingredients/soy-protein-isolate]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
