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
updated: 2026-05-03
sources: 5
---

# Infant Formula, RTF Liquid (Soy-Based)

This page is a structural scaffold for HMTc Category 1 row 4. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 ready-to-feed soy subset: N=3; Pb detected 0.2-0.4 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 10 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid and manufactured from soy protein isolates alone or mixed with cow's milk proteins. Basis: product as placed on market. | FDA 2026 ready-to-feed soy subset: N=3; Cd detected 0.8-1.1 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | EU maximum level loaded; comparison blocked because occurrence row reports total arsenic rather than inorganic arsenic. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

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
| Current FDA | Not established | No current formula-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes infant formula |
| EU 2023/915 | 10 ppb | as placed on market as liquid | EU maximum level. |
| Prop 65 MADL screen | 0.625 ppb | Illustrative 800 g/day ready-to-feed intake screen; formula-specific exposure model required | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | All values are shown in ppb, but the FDA entry is a not-established status and the Prop 65 value is an exposure conversion, not a commodity limit. | Do not compare RTF formula to dry-powder limits; use prepared/liquid occurrence data and the EU liquid ceiling as external legal context. |

RTF soy formula needs basis-matched occurrence review; the Prop 65 ppb screen is driven by assumed daily intake volume.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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

The FDA 2026 special survey has a very small ready-to-feed soy-based subset (`n=3`). The values below are retained for traceability, but this subset is too small to use directly as a stable threshold distribution. The sample-level rows are retained in `data/evidence/category1_formula_special_survey_samples.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.4 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.1 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 3 | 1 | 2 | prepared for feeding; <LOD=0 lower-bound | 0.08 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use soy-based source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima.

| Source | Metal | N | Basis | Mean | Median | Maximum | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 14 | as consumed | 730 | 769 | 1121 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 14 | as consumed | 1.18 | 1.06 | 2.95 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 14 | as consumed | 1.45 | 1.36 | 2.1 | Source reports summary statistics only. |

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

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting AI Adjudication

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc standards-percentile calculations unless the AI adjudication layer writes an auditable extraction, row-fit, basis, analyte-species, and statistic-fit decision. Human review is reserved for low-confidence, high-impact, or policy-conflict exceptions.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/amarh2023-ghana-infant-food-heavy-metals]] | Health risk assessment of some selected heavy metals in infan... | infant-foods; infant-formula | tAs; Cd; Cr; tHg; Mn; Ni; Pb; Sb | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/chung2021-china-infant-formula-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in ... | infant-formula | Cr; tAs; Cd; Pb | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | chocolate; infant-formula; breast-milk | Cd | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Arsenic, Organic Foods, and Brown Rice Syrup | infant-formula; toddler-formula; rice-containing-products | tAs; iAs | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/marques2021-trace-elements-milks-plant-based-drinks]] | Essential and Non-essential Trace Elements in Milks and Plant... | plant-milks-soy-based; plant-milks-rice-based; plant-milks-non-soy-non-rice; infant-formula | Pb; tHg; Ni; U | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |
| [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Dietary intake of methylmercury by 0-5 years children using t... | fish-containing-baby-foods; infant-formula; baby-foods; toddler-meals | tHg; MeHg | Broad formula context only until AI adjudication resolves format and soy/non-soy fit. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
