---
type: product-category
category: infant-formula-rtf-liquid-non-soy
hmtc_row: 3
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, RTF liquid (non-soy)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 5
---

# Infant Formula, RTF Liquid (Non-Soy)

This page is a structural scaffold for HMTc Category 1 row 3. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: formula-specific [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]] data for non-soy ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Direct ready-to-feed liquid evidence is available from the UK survey. Values are liquid concentrations in ug/L, displayed as ppb-equivalent for water-like liquids.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/aluminum|Aluminum]] | UK ready-to-feed first/hungrier milk | 18 to 34 ug/L | 18 to 34 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Non-soy not explicitly stated; first/hungrier milk is treated as standard formula category. |
| [[metals/arsenic-total|Total arsenic]] | UK ready-to-feed first/hungrier milk | 0 to 0.3 ug/L | 0 to 0.3 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | iAs estimated/reported per survey method. |
| [[metals/cadmium|Cadmium]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/lead|Lead]] | UK ready-to-feed first/hungrier milk | 0 to 0.4 ug/L | 0 to 0.4 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/mercury-total|Total mercury]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Total mercury, not MeHg. |
| [[metals/nickel|Nickel]] | UK ready-to-feed first/hungrier milk | 0 to 9 ug/L | 0 to 9 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey provides a product-label subset for ready-to-feed cow milk-based formula, expressed as prepared for feeding. The extraction uses nearest-rank percentiles and treats `<LOD` as 0 for a lower-bound summary; any certification candidate still needs basis matching, jurisdiction metadata, and 95% confidence review. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | p10 | p50 | p90 | p95 | p100 | Citation |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| [[metals/arsenic-total|tAs]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.3 | 0.7 | 1.2 | 1.3 | 3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.2 | 0.3 | 0.4 | 0.5 | 0.5 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 20 | 11 | 9 | prepared for feeding; <LOD=0 lower-bound | 0 | 0.09 | 0.6 | 0.6 | 0.7 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 20 | 0 | 20 | prepared for feeding; <LOD=0 lower-bound | 0 | 0 | 0 | 0 | 0 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima, but not p90.

| Source | Metal | N | Basis | Mean | Median / p50 | Max / p100 | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 67 | as consumed | 437 | 365 | 3442 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 67 | as consumed | 0.23 | 0.11 | 1.26 | Source reports summary statistics but not p90. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 67 | as consumed | 0.9 | 0.84 | 2.46 | Source reports summary statistics but not p90. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 8 | ready-made liquid formula | 344.8 |  | 700.4 | Product-format evidence; includes first, follow-on, growing-up, and preterm ready-made products, no soy-ready-made row. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French formula categories as consumed after preparation. These values are liquid-consumption-basis context, but the source does not isolate commercial ready-to-feed products or non-soy status. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Infant formulae | 28 | as consumed | 196 / 585 ppb | 1.61 / 4 ppb | 0.39 / 1 ppb | 20.8 / 38 ppb | 25.9 / 50 ppb | 42 / 42 ppb |
| Follow-on formulae | 34 | as consumed | 276 / 1140 ppb | 1.68 / 3 ppb | 0.43 / 2 ppb | 22.1 / 78 ppb | 26.5 / 50 ppb | 42 / 42 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-rtf-liquid-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Ready-to-feed-specific risk characterization for [[metals/aluminum|Al]] and [[metals/nickel|Ni]] remains pending. <!-- UNCITED: Need non-soy ready-to-feed liquid infant formula sources that measure Al and Ni and distinguish ready-to-feed liquid from powder. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for non-soy ready-to-feed formula should be documented only after sources distinguish formulation, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate ready-to-feed liquid formula from powdered formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-rtf-liquid]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need formula-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
