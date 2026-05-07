---
title: Infant Formula, RTF Liquid (Non-Soy)
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
updated: 2026-05-03
sources: 5
---

# Infant Formula, RTF Liquid (Non-Soy)

This page is a structural scaffold for HMTc Category 1 row 3. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 ready-to-feed cow-milk subset: N=20; Pb detected 0.2-0.5 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 5 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid and manufactured from cow's milk proteins or cow's milk protein hydrolysates. Basis: product as placed on market. | FDA 2026 ready-to-feed cow-milk subset: N=20; Cd detected 0.09-0.7 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | EU maximum level loaded; comparison blocked because occurrence row reports total arsenic rather than inorganic arsenic. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

This row's standards target is **clean-platform P90**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean-platform P90 | 3 sources; 1 distribution source; 1 summary source; N=87 | Below confidence gate: only one fit distribution source is loaded. | 10 ug/kg (eu2023_pb_formula_liquid_10) |
| [[metals/cadmium]] (Cd) | clean-platform P90 | 4 sources; 1 distribution source; 2 summary sources; N=100 | Below confidence gate: only one fit distribution source is loaded. | 5 ug/kg (eu2023_cd_formula_cow_liquid_5) |
| [[metals/arsenic-total]] (tAs) | clean-platform P90 | 2 sources; 1 distribution source; 0 summary sources; N=20 | Below confidence gate: only one fit distribution source is loaded. | No loaded cap |
| [[metals/arsenic-inorganic]] (iAs) | clean-platform P90 | 1 source; 0 distribution sources; 0 summary sources; N not loaded | Blocked: evidence fitness review needed before confidence work. | 10 ug/kg (eu2023_ias_formula_liquid_10) |
| [[metals/mercury-total]] (tHg) | clean-platform P90 | 2 sources; 1 distribution source; 0 summary sources; N=20 | Below confidence gate: only one fit distribution source is loaded. | No loaded cap |
| [[metals/aluminum]] (Al) | clean-platform P90 | 4 sources; 0 distribution sources; 3 summary sources; N=85 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/nickel]] (Ni) | clean-platform P90 | 1 source; 0 distribution sources; 0 summary sources; N not loaded | Blocked: evidence fitness review needed before confidence work. | No loaded cap |
| [[metals/tin]] (Sn) | clean-platform P90 | 1 source; 0 distribution sources; 0 summary sources; N not loaded | Blocked: evidence fitness review needed before confidence work. | No loaded cap |
| Cr-total | clean-platform P90 | 1 source; 0 distribution sources; 0 summary sources; N not loaded | Blocked: evidence fitness review needed before confidence work. | No loaded cap |
| Cu | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| Fe | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| I | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| Mn | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| Sb | clean-platform P90 | 1 source; 0 distribution sources; 0 summary sources; N not loaded | Blocked: evidence fitness review needed before confidence work. | No loaded cap |
| Se | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| Zn | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |

<!-- END: hmi-hmtc-evidence-summary -->

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

RTF formula usually has low ppb concentrations because it is already diluted, so serving-based exposure screens can be much lower than legal ceilings.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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

The FDA 2026 special survey provides a product-label subset for ready-to-feed cow milk-based formula, expressed as prepared for feeding. Standards review still needs basis matching, jurisdiction metadata, and confidence review. The sample-level rows are retained in `data/evidence/category1_formula_special_survey_samples.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.5 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 20 | 11 | 9 | prepared for feeding; <LOD=0 lower-bound | 0.7 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 20 | 0 | 20 | prepared for feeding; <LOD=0 lower-bound | 0 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima.

| Source | Metal | N | Basis | Mean | Median | Maximum | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 67 | as consumed | 437 | 365 | 3442 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 67 | as consumed | 0.23 | 0.11 | 1.26 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 67 | as consumed | 0.9 | 0.84 | 2.46 | Source reports summary statistics only. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 8 | ready-made liquid formula | 344.8 |  | 700.4 | Product-format evidence; includes first, follow-on, growing-up, and preterm ready-made products, no soy-ready-made row. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 10 | ready-to-drink liquid formula | 249.5 |  | 422 | Product-format evidence; includes first, follow-on, toddler/growing-up ready-to-drink products, no soy-ready-made row. |

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
