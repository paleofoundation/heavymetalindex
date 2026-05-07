---
title: Mixed Meals, Non-Rice
type: product-category
category: mixed-meals-non-rice
hmtc_row: 12
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Mixed meals, non-rice"
base_taxonomy: mixed-meals
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [mixed-meals, non-rice-grains, vegetables, meat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: mixed-meals-rice-containing
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 4
---

# Mixed Meals, Non-Rice

This page is a structural scaffold for HMTc Category 1 row 12. FDA compliance samples now provide a direct non-rice mixed-meal lower-bound distribution, while broader savoury infant-food evidence remains useful context.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for mixtures; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

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
| Current FDA | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby-food mixture | Mixtures including grain- and meat-based mixtures for babies and young children under 2 |
| EU 2023/915 | 20 ppb | baby food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g; toddler dinner RACC is 170 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb; the Prop 65 equivalent is about 4.5 ppb at 110 g/day or 2.9 ppb at 170 g/day. | Use FDA 10 ppb as regulatory cap/context and keep rice status separate so non-rice occurrence is not silently pooled with rice-containing meals. |

Mixed meals often have ingredient-driven variance; the ppb table helps distinguish legal compliance from actual category position.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with broad mixed-meal evidence; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: mixed-meal datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice mixed-meal p10/p90/p100 concentration spread. UK category-average data and broad Gardener 2019 all-sample percentiles can support screening context, but rice status and mixed-meal formulation must be resolved before threshold-setting use. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Mixtures rows with no rice named | tAs 77; Cd 77; Pb 78; tHg 36 | lower-bound p50, p90, p95, max | tAs p50 3 ppb, p90 5.6 ppb, max 13.6 ppb; Cd p50 2.2 ppb, p90 5.2 ppb, max 44.4 ppb; Pb p50 1.6 ppb, p90 6.8 ppb, max 13 ppb; tHg p90 0, max 0.4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK savoury category average | [[metals/aluminum|Aluminum]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 1995 to 1999 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 7 to 9 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/cadmium|Cadmium]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/lead|Lead]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 3 to 5 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| Scoping-review mixed-food median | [[metals/cadmium|Cadmium]] | Mixed foods excluding meat, fish, and rice | review-level baby-food grouping | median and exceedance share | median 8 ppb; 19% of detected items exceeded the Cd ML used by the authors | Broad context only | Secondary review category; not a product-specific distribution. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; mixed-meal and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; mixed-meal and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-rice mixed meal evidence is currently broad. The closest values come from UK savoury infant foods without meat and meat/fish based dishes.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 mixture baby-food samples with no rice named | p50 3 ppb; p90 5.6 ppb; p95 6.2 ppb; max 13.6 ppb | p50 3 ppb; p90 5.6 ppb; p95 6.2 ppb; max 13.6 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 mixture baby-food samples with no rice named | Cd p90 5.2 ppb, max 44.4 ppb; Pb p90 6.8 ppb, max 13 ppb | Cd p90 5.2 ppb, max 44.4 ppb; Pb p90 6.8 ppb, max 13 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; product name does not prove absence of rice ingredients. |
| [[metals/aluminum|Aluminum]] | UK other savoury based infant foods/dishes, no meat | 1995 to 1999 ug/kg | 1995 to 1999 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/arsenic-total|Total arsenic]] | UK other savoury based infant foods/dishes, no meat | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK other savoury based infant foods/dishes, no meat | 7 to 9 ug/kg | 7 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK other savoury based infant foods/dishes, no meat | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/lead|Lead]] | UK other savoury based infant foods/dishes, no meat | 3 to 5 ug/kg | 3 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/nickel|Nickel]] | UK other savoury based infant foods/dishes, no meat | 66 to 97 ug/kg | 66 to 97 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French vegetable-based and meat/fish-based ready-to-eat infant meals. The table does not split rice-containing from non-rice meals, so these rows are useful mixed-meal context but not a row-specific p90 distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/mixed-meals-rice-containing]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

Risk characterization for this row is pending source ingest that can separate non-rice mixed meals from rice-containing mixed meals. <!-- UNCITED: Need mixed-meal datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

A 2025 global scoping review reported that mixed foods excluding meat, fish, and rice had a median Cd concentration of 0.008 mg/kg among detected items, with 19% of detected items exceeding the Cd maximum level used by the authors. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice mixed meals should be documented only after sources distinguish ingredient composition, grain inclusion, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate non-rice from rice-containing meals and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]] and non-rice ingredient targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

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
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Broad product context only until row fit, basis, species, and statistic type are resolved. |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Broad product context only until row fit, basis, species, and statistic type are resolved. |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Broad product context only until row fit, basis, species, and statistic type are resolved. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
