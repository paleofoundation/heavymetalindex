---
title: Fish-Containing Baby Foods
type: product-category
category: fish-containing-baby-foods
hmtc_row: 11
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
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
updated: 2026-05-03
sources: 4
---

# Fish-Containing Baby Foods

This page is a structural scaffold for HMTc Category 1 row 11. Four fish, mercury, or baby-food sources have been promoted, including a small Meli 2024 fish-homogenate summary; fish baby-food distributions and methylmercury-specific product rows are still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Meli 2024 reports Pb <100 ug/kg wet weight in three homogenized fish products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | Regulatory applicability and comparison both need review; FDA row language does not isolate fish-containing baby foods and the Pb reporting limit is higher than the reference value. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Meli 2024 reports Pb <100 ug/kg wet weight in three homogenized fish products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | EU baby-food maximum level loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Meli 2024 reports Cd <5 ug/kg wet weight in three homogenized fish products; this is a censored small-N source summary. | EU baby-food maximum level loaded; censored upper bound is below 40 ug/kg but remains summary evidence only. | [[regulations/eu-2023-915-cadmium]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

This row's standards target is **contaminated-platform P10**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | contaminated-platform P10 | 2 sources; 0 distribution sources; 2 summary sources; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | 10 ug/kg (fda2025_pb_baby_food_10) |
| [[metals/cadmium]] (Cd) | contaminated-platform P10 | 1 source; 0 distribution sources; 1 summary source; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | 40 ug/kg (eu2023_cd_babyfood_cereal_40) |
| [[metals/arsenic-total]] (tAs) | contaminated-platform P10 | 2 sources; 0 distribution sources; 2 summary sources; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/mercury-total]] (tHg) | contaminated-platform P10 | 2 sources; 0 distribution sources; 2 summary sources; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/mercury-methyl]] (MeHg) | contaminated-platform P10 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: exact analyte species is missing. | No loaded cap |
| [[metals/aluminum]] (Al) | contaminated-platform P10 | 1 source; 0 distribution sources; 1 summary source; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/nickel]] (Ni) | contaminated-platform P10 | 1 source; 0 distribution sources; 1 summary source; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/tin]] (Sn) | contaminated-platform P10 | 1 source; 0 distribution sources; 1 summary source; N=3 | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |

<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 10 ppb (FDA final guidance action level when covered as a mixture) | processed baby-food mixture | No separate single-ingredient fish lead value in FDA 2025 baby-food guidance; fish-containing mixtures can map to the mixture value |
| EU 2023/915 | 20 ppb | baby food or infant/young-child mixed meal as placed on market | EU maximum level. |
| Prop 65 MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | The FDA 10 ppb value is a scope-dependent mixture mapping; the Prop 65 serving-equivalent screen is about 4.5 ppb at 110 g/day. | Use as external context only until product-scope review confirms whether the specific fish product is a covered mixture. |

Fish-containing foods need separate mercury/speciation treatment; the lead ppb row should not be treated as the whole risk story.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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
| [[metals/aluminum|Aluminum]], [[metals/arsenic-total|total arsenic]], [[metals/mercury-total|total mercury]], [[metals/nickel|nickel]], [[metals/tin|tin]], [[metals/cadmium|cadmium]], and [[metals/lead|lead]] | Italian homogenized fish products | Al 390 ppb; tAs 60 ppb; tHg 6.8 ppb; Ni 80 ppb; Sn <75 ppb; Cd <5 ppb; Pb <100 ppb | same numeric ppb wet weight | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Small N=3 wet-weight category means/censored values; summary evidence only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French meat/fish-based ready-to-eat infant-meal category with N=45. The row is relevant to fish-containing baby foods, but it also includes meat meals and does not isolate fish products. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row uses an aggregate non-fish Category 1 reference relationship in the row architecture for [[metals/mercury-methyl|MeHg]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review found that fish/fish-mix baby foods had the highest median arsenic concentration among baby-food groups in the review at 0.165 mg/kg and the highest median mercury concentration at 0.016 mg/kg; Hg was detected in 100% of fish/fish-mix items in that review's baby-food grouping. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2024 analytical study of European baby foods reported wet-weight Table 5 summary rows for three homogenized fish products, including Al 390 ppb, total arsenic 60 ppb, total mercury 6.8 ppb, Ni 80 ppb, Sn <75 ppb, Cd <5 ppb, and Pb <100 ppb. The same study reported that a salmon homogenized food had the highest estimated daily intake for total arsenic in the study at 0.143 ug/kg body weight per day, but it did not speciate methylmercury. [[sources/meli2024-chemical-characterization-baby-food-italy]]

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

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting AI Adjudication

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc standards-percentile calculations unless the AI adjudication layer writes an auditable extraction, row-fit, basis, analyte-species, and statistic-fit decision. Human review is reserved for low-confidence, high-impact, or policy-conflict exceptions.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]]
