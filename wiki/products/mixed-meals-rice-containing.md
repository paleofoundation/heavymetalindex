---
title: 'Mixed Meals, Rice-Containing'
type: product-category
category: mixed-meals-rice-containing
hmtc_row: 13
hmtc_category: 1
category_label: Infant and Child Foods
age_range: 0-5
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: 'Mixed meals, rice-containing'
base_taxonomy: mixed-meals
variant_type: higher-contamination-sibling
platform_metals:
  - iAs
  - Cd
  - Pb
provenance: split_from_base
ingredient_targets:
  - mixed-meals
  - rice
  - rice-flour
  - vegetables
  - meat
primary_metals_of_concern:
  - iAs
  - Cd
  - Pb
vulnerable_population: infants-6-60mo
applicable_regulations:
  - fda-ctz-Pb-babyfood-10ppb
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: mixed-meals-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals:
        - iAs
        - Cd
        - Pb
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-03T00:00:00.000Z
sources: 26
kind: Subcategory
dek: >-
  A category profile assembled from its inputs. It reports what the routed
  literature says about the ingredients that drive it, not brand-by-brand
  product tests.
snapshot:
  - k: Corpus sources
    v: '26'
  - k: Ingredient inputs
    v: '5'
  - k: Applicable limits
    v: '3'
  - k: Jurisdictions
    v: '2'
---

# Mixed Meals, Rice-Containing

<!-- BEGIN: hmi-subcategory-v3 -->
## Overview

<div class="hmi-variant-group"><div class="hmi-variant-head"><span class="hmi-variant-kicker">Variant group · mixed meals</span><span class="hmi-variant-tabs"><span class="hmi-variant-tab hmi-variant-tab--active">Mixed meals, rice-containing</span><a class="hmi-variant-tab" href="/products/mixed-meals-non-rice">Mixed meals, non-rice</a></span><span class="hmi-variant-note">Same category framing, different contamination profile. Both pages are separately citable.</span></div><div class="hmi-variant-grid"><div class="hmi-variant-k">Diverges on</div><div class="hmi-variant-a">Inorganic arsenic · Cadmium · Lead</div><div class="hmi-variant-b">Inorganic arsenic · Cadmium · Lead</div><div class="hmi-variant-k">Corpus depth</div><div class="hmi-variant-a">26 sources</div><div class="hmi-variant-b">27 sources</div></div></div>

<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div><p>This is a category risk profile assembled from the ingredients that drive it. It does not test products, name brands, or publish brand-by-brand tables. The metals that govern it, in the routed corpus, are Inorganic arsenic, Cadmium and Lead.</p></div>

## Ingredient drivers

The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit.

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/vegetables">Vegetables</a><span class="hmi-driver-metal">Cadmium</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--1" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading cadmium driver among this category's routed inputs — p95 300 ppb, 41 sources, high confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/rice">Rice</a><span class="hmi-driver-metal">Inorganic arsenic</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--2" style="width: 66%"></div></div><p class="hmi-driver-desc">Leading inorganic arsenic driver among this category's routed inputs — p95 190 ppb, 8 sources, medium confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/rice-flour">Rice Flour</a><span class="hmi-driver-metal">Inorganic arsenic</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--3" style="width: 63%"></div></div><p class="hmi-driver-desc">Leading inorganic arsenic driver among this category's routed inputs — 2 sources, low confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/meat">Meat and poultry</a><span class="hmi-driver-metal">Lead</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--4" style="width: 11%"></div></div><p class="hmi-driver-desc">Leading lead driver among this category's routed inputs — p95 28.4 ppb, 15 sources, high confidence.</p></div>

## Limits applicable to this category

The category inherits the maximum levels and action levels that apply to it. These are regulatory limits, not certification thresholds.

| Instrument | Metal | Value | Status |
| --- | --- | --- | --- |
| [[regulations/fda2025-lead-processed-baby-foods\|FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children]] | Lead | 10 µg/kg | <span class="hmi-status hmi-status--guidance">Guidance</span> |
| [[regulations/eu2023-contaminants-maximum-levels\|EU Regulation 2023/915 maximum levels for contaminants in food]] | Lead | 20 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |
| [[regulations/eu-2023-915-cadmium\|Commission Regulation (EU) 2023/915 cadmium maximum levels]] | Cadmium | 40 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |

## Testing and verification posture

Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.

<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>
<!-- END: hmi-subcategory-v3 -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in rice-containing mixed meals for infants and young children. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (ready-to-eat), dry weight, or as sold. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for mixtures; rice-containing status does not itself make this the dry-infant-cereal action level. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Mixed meals, rice-containing. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | Mixed meals, rice-containing (summary-only / supporting context) | highest reported 9 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/cadmium\|Cd]] | Mixed meals, rice-containing (summary-only / supporting context) | mean/median 1.3 to 10 ppb (3 sources); highest reported 10 ppb | 56% detected (5/9, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 3 cited | medium (3 sources) | as-sold; mixed-or-source-reported; as-consumed |
| [[metals/lead\|Pb]] | Mixed meals, rice-containing (summary-only / supporting context) | median 1 to 8 ppb (2 sources); highest reported 11.6 ppb | 56% detected (5/9, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 10 ppb (as sold or ready-to-eat as applicable) | 3 cited | medium (3 sources) | as-sold; mixed-or-source-reported; as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby-food mixture | Mixtures including grain-based mixtures; rice-containing status does not make the dry-infant-cereal lead action level apply |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | baby food as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g; toddler dinner RACC is 170 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb; the Prop 65 equivalent is about 4.5 ppb at 110 g/day or 2.9 ppb at 170 g/day. | Use FDA 10 ppb as lead cap/context, but preserve rice as an ingredient-driver signal for arsenic and cadmium as well as lead occurrence. |

Rice-containing mixed meals need their own occurrence profile; do not substitute the dry cereal lead row.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution context; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: mixed-meal datasets for rice-containing products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a rice-containing mixed-meal HMTc contaminated-platform P10. Gardener 2019 includes jars/meals, pouches, and kids-meals categories and provides broad all-sample lead/cadmium percentiles, and the FSA other-savoury row is structured as EF-4 context only because rice-containing status is not isolated. Rice-containing mixed meals still need product-level extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] [[sources/fsa2016-infant-food-formula-metals-survey]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Mixtures rows with rice named | tAs 9; Cd 9; Pb 9; tHg 3 | lower-bound p50, p90, p95, max | tAs p50 11 ppb, p90/max 28.3 ppb; Cd p50 1.3 ppb, p90/max 7 ppb; Pb p50 1 ppb, p90/max 11.6 ppb; tHg p90/max 0.3 ppb | Small source-scope context only until reviewed with more samples | Machine-extracted; `<LOD` treated as 0; small rice-named subset (`EF-3`). [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK savoury category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 7 to 9 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/cadmium|Cadmium]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/lead|Lead]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 3 to 5 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-containing mixed-meal contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-containing mixed-meal contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Rice-containing mixed meals are represented by rice/rice-mix baby-food evidence and broad savoury/cereal infant-food groupings.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 rice-named mixture baby-food samples | p50 11 ppb; p90/max 28.3 ppb | p50 11 ppb; p90/max 28.3 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Small lower-bound machine-extracted subset; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 rice-named mixture baby-food samples | Cd p90/max 7 ppb; Pb p90/max 11.6 ppb | Cd p90/max 7 ppb; Pb p90/max 11.6 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Small subset; source-scope context, not threshold-ready distribution. |
| [[metals/lead|Lead]] | Rice/rice-mix baby foods in global scoping review | median 0.008 mg/kg | 8 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad rice/rice-mix baby-food category. |
| [[metals/arsenic-total|Arsenic]] | Rice/rice-mix baby foods in global scoping review | median 0.048 mg/kg | 48 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Review reports As; speciation may vary by included study. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice products commonly eaten during weaning | up to 323 ug/kg | up to 323 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation for baby rice/rice cereals/rice crackers. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK other savoury based infant foods/dishes, no meat | 7 to 9 ug/kg | 7 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK other savoury based infant foods/dishes, no meat | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/lead|Lead]] | UK other savoury based infant foods/dishes, no meat | 3 to 5 ug/kg | 3 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French vegetable-based and meat/fish-based ready-to-eat infant meals. Several high-arsenic examples named in the paper contain rice, but Table 5 does not split rice-containing from non-rice meals, so these rows are relevant context rather than rice-specific p90 evidence. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is the sibling row in the same category to [[products/mixed-meals-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items, with 31% of detected rice/rice-mix items exceeding the Pb maximum level used by the authors and 30% exceeding the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Rice-containing mixed-meal risk remains only partially supported because the promoted source's rice/rice-mix grouping does not specify complete mixed-meal formulation or rice share. <!-- UNCITED: Need mixed-meal datasets that distinguish rice-containing products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice as a priority ingredient platform, but they do not resolve rice ingredient form, meal composition, or arsenic speciation for mixed meals. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-containing mixed meals should be documented only after sources distinguish rice ingredient form, formulation share, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate rice-containing from non-rice meals and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]], [[ingredients/rice]], and [[ingredients/rice-flour]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

The primary contamination concern in rice-containing mixed meals is inorganic arsenic (iAs) from the rice component, compounded by cadmium and lead contributions from the rice and vegetable components. Levers address the rice ingredient and the overall mixed-meal formulation.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source rice ingredient from low-iAs origins (California medium-grain or Indian basmati rather than US long-grain from Arkansas/Louisiana/Texas) and from fields with documented low Cd. | _Quantified magnitude data for finished mixed-meal product not yet ingested from cited sources; origin effects on rice iAs documented upstream._ | — |
| 2 | Agronomic | Alternate wet-dry irrigation at paddy level reduces rice grain iAs but increases Cd; upstream supplier lever requiring soil Cd pre-screening. | _Quantified magnitude data not yet ingested for the mixed-meal matrix specifically._ | — |
| 3 | Processing | For rice-containing mixed meals, the rice cooking method prior to incorporation affects iAs carry-through; excess-water cooking methods reduce iAs 50–85% versus absorption cooking in grain form. | _Quantified magnitude data not yet ingested for finished mixed-meal products from cited sources._ | — |
| 4 | Formulation | Reduce the proportion of rice relative to total product weight; replace with lower-iAs grains or vegetables. The iAs contribution is proportional to the rice fraction. | Linear dilution effect proportional to rice-to-non-rice ratio in the formulation. | — |
| 5 | Testing and QC | Lot-level iAs speciation by HPLC-ICP-MS on incoming rice ingredient, combined with finished-product ICP-MS for the full analyte panel. | _Quantified magnitude data not yet ingested for detection-power modeling at specific sample sizes._ | — |
| 6 | Packaging and storage | Not a primary lever for jarred or pouched mixed meals under normal conditions. | — | — |

Cross-links: [[ingredients/rice]] Mitigation options; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Matrix axis: unresolved. Format axis: unresolved. Source is broader than this row; authors do not narrow to this exact matrix/format pair. | (context only) |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
7. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
8. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
9. [[sources/fda2020-ias-infant-rice-cereal-guidance|Inorganic Arsenic in Rice Cereals for Infants: Action Level, Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Guidance</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review reporting rice/rice-mix baby foods median Pb 8 ppb and median As 48 ppb, with 31% exceeding the Pb maximum; provides broad rice-category monitoring context for rice-containing mixed meals |
| 3 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | 386-sample FY2023 FDA Pb survey including mixed-ingredient baby food rows, the most recent analytical dataset supporting the 2025 final guidance 10 ppb action level for mixtures |
| 4 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FY2009-FY2024 FDA compliance program providing tAs, Cd, Pb, and tHg distributions for the rice-named mixture subset (N=9, source-scope context only) and the broad mixture pool; rice-containing status not fully isolated |
| 5 | [[sources/fagbemi2023-akure-street-foods-lead\|Fagbemi et al. 2023]]. *Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria*, IPS Journal of Public Health | 2023 | Peer-reviewed | NG Pb, Cu, Fe, Zn occurrence in Seven street-hawked food types purchased from three busy road intersections and Oba market in Akure, Ondo State, Nigeria. (n=7) |
| 6 | [[sources/noh2023-arsenic-rice-snacks-korea\|Noh et al. 2023]]. *Monitoring arsenic species concentration in rice-based processed products distributed in South Korean markets and related risk assessment*, Food Science and Biotechnology 32(10):1361-1372 | 2023 | Peer-reviewed | KR iAs, tAs occurrence in 239 rice-based processed foods purchased from South Korean domestic markets February–August 2019 across ten categories: home-meal-replacement (HMR) rice... (n=239) |
| 7 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US narrative review identifying rice as a priority higher-contamination row and summarizing the policy context for mixed infant foods containing rice, supporting the rationale for this category's arsenic concern |
| 8 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US baby-food occurrence study covering grain-category baby foods; used as broad product-context for grain-containing mixed meals given that Parker's grain group is not further split by rice-containing status |
| 9 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby-food products purchased Dec 2020 – Sep 2021 on the Polish market for children aged... (n=397) |
| 10 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | 416-sample FY2020-FY2021 FDA Pb survey including mixed-ingredient baby food rows, contributing to the multi-year evidence base behind the 2025 final guidance for mixed-food categories |
| 11 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 12 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS reporting multi-element concentrations in vegetable-based and meat/fish-based ready-to-eat infant meals, with several high-arsenic examples noted as rice-containing; rice vs non-rice not split in Table 5, so used as broad mixed-meal context |
| 13 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | French speciated-chromium study finding Cr(VI) not detected in any of 68 dairy and cereal samples including rice products; supports the Cr(VI) data-gap designation for cereal-containing mixed-meal matrices |
| 14 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 15 | [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf\|Chiger et al. 2017]]. *Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment*, Abt Associates report prepared for Healthy Babies Bright Futures | 2017 | Agency report | Abt/HBBF cost-benefit modeling of IQ loss from iAs in US infant rice cereal across ~24M children 0–6; canonical NGO/policy reference behind cost-benefit arguments for FDA's 100 ppb iAs action level on rice-cereal-containing products |
| 16 | [[sources/deroma2017-prepared-meals-italy-metals\|De et al. 2017]]. *Occurrence of cadmium, lead, mercury, and arsenic in prepared meals in Italy: Potential relevance for intake assessment*, Journal of Food Composition and Analysis | 2017 | Peer-reviewed | IT Cd, Pb, tHg, tAs occurrence in Seventeen pooled prepared-meal composites collected from Italian baby food, school canteen, office canteen, fast food, duplicate-portion, vegetarian, and... (n=17) |
| 17 | [[sources/brombach2017-methylmercury-european-commercial-rice\|C-C et al. 2016]]. *Methylmercury varies more than one order of magnitude in commercial European rice*, Food Chemistry | 2016 | Peer-reviewed | MeHg and tHg in 87 European rice products including baby-food rice, finding MeHg range 0.11-6.45 µg/kg; provides the mercury occurrence evidence for rice as an ingredient in mixed infant meals |
| 18 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK survey providing category-average iAs (7-9 ppb), Cd (10 ppb), and Pb (3-5 ppb) for UK other savoury infant foods and dishes without meat; rice-containing status not isolated, used as European mixed-meal context |
| 19 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 20 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 21 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | Turkish market Pb, Cd, Al, Mn, Cr, and Co in 63 infant foods including 12 mixed products (cereals + milk + fruit + vegetables) by GFAAS; provides European mixed-meal metals context though rice-containing status is not reported per sample |
| 22 | [[sources/meharg2008-rice-arsenic-literature-review\|Meharg et al. 2008]]. *Levels of arsenic in rice - literature review*, Food Standards Agency contract C101045 | 2008 | Government report | UK tAs, iAs occurrence in Food Standards Agency-commissioned literature review and secondary tabulation of published, FSA, and University of Aberdeen rice arsenic data,... |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda2020-ias-infant-rice-cereal-guidance|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
