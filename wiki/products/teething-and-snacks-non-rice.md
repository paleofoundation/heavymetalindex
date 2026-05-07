---
title: Teething & Snacks (Non-Rice)
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
updated: 2026-05-03
sources: 5
---

# Teething & Snacks (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 15. FDA compliance samples add broad grain-based snack context, but non-rice snack-specific p10/p90/p100 distributions are still pending because rice status is not isolated.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | No federal product-specific limit loaded in this crosswalk. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | Not established | No snack-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes snack foods such as puffs, rusks, and teething biscuits |
| EU 2023/915 | 20 ppb | processed cereal-based food as placed on market | EU maximum level if classified as processed cereal-based infant/young-child food. |
| Prop 65 MADL screen | 71.4 ppb | 21 CFR 101.12 infant teething/snack dry grain product RACC of 7 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | The FDA entry is a not-established status; EU can be 20 ppb if the product is in the processed-cereal infant-food scope; Prop 65 is 71.4 ppb at 7 g/day. | Use occurrence evidence only until product-scope review confirms applicable regulation; do not borrow dry infant cereal action levels for snacks. |

Small serving size makes the one-serving Prop 65 ppb equivalent high, but frequent consumption or larger servings lower the equivalent.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with broad snack evidence; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: teething-food and snack datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice snack p10/p90/p100 concentration spread. Existing snack evidence either does not split rice status or reports broad all-sample baby-food percentiles that cannot be treated as a non-rice benchmark. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA broad grain-based snack context | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Grain-Based Snacks rows where rice status is not isolated | tAs 91; Cd 91; Pb 91; tHg 28 | lower-bound p50, p90, p95, max | tAs p50 61 ppb, p90 224 ppb, p95 383 ppb, max 561 ppb; Cd p90 27 ppb, max 41 ppb; Pb p90 15 ppb, max 23.7 ppb; tHg p90 2.5 ppb, max 3.3 ppb | Context only | Rice status is not isolated; do not assign this distribution directly to non-rice snacks. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK snack category average | [[metals/aluminum|Aluminum]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 5185 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average/range | 58 to 62 ppb | Does not support p10/p90/p100 | Broad snack group; likely includes rice-containing products. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/cadmium|Cadmium]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 24 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/lead|Lead]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Snack evidence is strong at the broad infant-snack level, but current sources do not split rice-based from non-rice snacks cleanly.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA broad grain-based snack context, rice status not isolated | p50 61 ppb; p90 224 ppb; p95 383 ppb; max 561 ppb | p50 61 ppb; p90 224 ppb; p95 383 ppb; max 561 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Context only; cannot distinguish non-rice from rice-based snacks. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA broad grain-based snack context, rice status not isolated | Cd p90 27 ppb, max 41 ppb; Pb p90 15 ppb, max 23.7 ppb | Cd p90 27 ppb, max 41 ppb; Pb p90 15 ppb, max 23.7 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Context only; not a non-rice row distribution. |
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

A 2025 global scoping review identifies cereals as a Cd-priority baby-food group, with median Cd of 0.013 mg/kg among detected items, but the cereal category does not separate non-rice teething snacks from rice-based products. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice teething foods and snacks should be documented only after sources distinguish grain type, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate non-rice from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/non-rice-grains]], and snack-format targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting Row-Fit Review

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc p90 or p95 calculations unless a later extraction resolves product row fit, basis, analyte species, and statistic fit.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Analytical Results for Arsenic, Lead, Cadmium, and Mercury in... | baby-cereals-dry-non-rice; baby-cereals-dry-rice-based; fruit-purees; non-root-vegetable-purees | tAs; Pb; Cd; tHg | Broad product context only until row fit, basis, species, and statistic type are resolved. |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Broad product context only until row fit, basis, species, and statistic type are resolved. |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Broad product context only until row fit, basis, species, and statistic type are resolved. |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Broad product context only until row fit, basis, species, and statistic type are resolved. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
