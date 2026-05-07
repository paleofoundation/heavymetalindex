---
title: Meat and Poultry Purees
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
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 3
---

# Meat And Poultry Purees

This page is a structural scaffold for HMTc Category 1 row 10. Broad baby-food analytical sources and a small Meli 2024 meat-homogenate summary are promoted; meat-and-poultry puree-specific distributions are still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Meli 2024 reports Pb <100 ug/kg wet weight in four homogenized meat products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | Regulatory value loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Meli 2024 reports Pb <100 ug/kg wet weight in four homogenized meat products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | EU maximum level loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Meli 2024 reports Cd <5 ug/kg wet weight in four homogenized meat products; this is a censored small-N source summary. | EU maximum level loaded; censored upper bound is below 40 ug/kg but remains summary evidence only. | [[regulations/eu-2023-915-cadmium]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |

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
| Current FDA | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby food | Single-ingredient meats and meat-based mixtures for babies and young children under 2 |
| EU 2023/915 | 20 ppb | baby food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb, while the Prop 65 serving-equivalent screen is about 4.5 ppb at 110 g/day. | Use FDA 10 ppb as regulatory cap/context, then rely on meat/poultry occurrence evidence and ingredient drivers for any tighter HMTc threshold. |

Regulatory alignment alone does not show whether a meat puree is low relative to measured category occurrence.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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
| [[metals/aluminum|Aluminum]], [[metals/arsenic-total|total arsenic]], [[metals/mercury-total|total mercury]], [[metals/nickel|nickel]], [[metals/tin|tin]], [[metals/cadmium|cadmium]], and [[metals/lead|lead]] | Italian homogenized meat products | Al 753 ppb; tAs <17 ppb; tHg 4 ppb; Ni 86 ppb; Sn 267 ppb; Cd <5 ppb; Pb <100 ppb | same numeric ppb wet weight | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Small N=4 wet-weight category means/censored values; summary evidence only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French meat/fish-based ready-to-eat infant-meal category with N=45. The table does not split meat, poultry, fish, or rice-containing meals, so these rows are broad context for meat and poultry purees. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2024 analytical study of European baby foods reported wet-weight Table 5 summary rows for four homogenized meat products, including Al 753 ppb, tAs <17 ppb, tHg 4 ppb, Ni 86 ppb, Sn 267 ppb, Cd <5 ppb, and Pb <100 ppb; these are small-N category means or censored values, not percentile distributions. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2025 global scoping review reported Pb detection in 83% and Cd detection in 84% of meat and meat-mix baby-food determinations, but the review grouping does not isolate poultry purees or finished puree format. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Risk characterization for this row remains limited. <!-- UNCITED: Need meat and poultry puree datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for meat and poultry purees should be documented only after sources distinguish meat type, organ-meat inclusion if relevant, feed or environmental inputs, processing, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report meat and poultry puree metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/meat-and-poultry-purees]], [[ingredients/poultry]], and [[ingredients/beef]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

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

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
