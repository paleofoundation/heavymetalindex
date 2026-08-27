---
title: Root-Vegetable Purees
type: product-category
category: root-vegetable-purees
hmtc_row: 9
hmtc_category: 1
category_label: Infant and Child Foods
age_range: 0-5
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: Root-vegetable purees
base_taxonomy: vegetable-purees
variant_type: higher-contamination-sibling
platform_metals:
  - Cd
  - Pb
provenance: base_taxonomy
ingredient_targets:
  - root-vegetable-purees
  - carrot
  - sweet-potato
  - beet
primary_metals_of_concern:
  - Cd
  - Pb
vulnerable_population: infants-0-24mo
applicable_regulations:
  - fda-ctz-Pb-rootveg-20ppb
cc_relationship:
  role: contamination_platform
  scope: cross_row
  partners:
    - slug: non-root-vegetable-purees
      partner_type: row
      role_of_partner: clean_benchmark
      metals:
        - Cd
        - Pb
      notes: >-
        Cross-row CC: clean counterpart lives in row 8, not as a sibling within
        a vegetable-purees base split.
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-03T00:00:00.000Z
sources: 184
kind: Subcategory
dek: >-
  A category profile assembled from its inputs. It reports what the routed
  literature says about the ingredients that drive it, not brand-by-brand
  product tests.
snapshot:
  - k: Corpus sources
    v: '184'
  - k: Ingredient inputs
    v: '4'
  - k: Applicable limits
    v: '3'
  - k: Jurisdictions
    v: '2'
---

# Root-Vegetable Purees

<!-- BEGIN: hmi-subcategory-v3 -->
## Overview

<div class="hmi-variant-group"><div class="hmi-variant-head"><span class="hmi-variant-kicker">Variant group · vegetable purees</span><span class="hmi-variant-tabs"><span class="hmi-variant-tab hmi-variant-tab--active">Root-vegetable purees</span><a class="hmi-variant-tab" href="/products/non-root-vegetable-purees">Non-root vegetable purees</a></span><span class="hmi-variant-note">Same category framing, different contamination profile. Both pages are separately citable.</span></div><div class="hmi-variant-grid"><div class="hmi-variant-k">Diverges on</div><div class="hmi-variant-a">Cadmium · Lead</div><div class="hmi-variant-b">Cadmium · Lead</div><div class="hmi-variant-k">Corpus depth</div><div class="hmi-variant-a">184 sources</div><div class="hmi-variant-b">23 sources</div></div></div>

<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div><p>This is a category risk profile assembled from the ingredients that drive it. It does not test products, name brands, or publish brand-by-brand tables. The metals that govern it, in the routed corpus, are Cadmium and Lead.</p></div>

## Ingredient drivers

The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit.

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/carrot">Carrot</a><span class="hmi-driver-metal">Inorganic arsenic</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--1" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading inorganic arsenic driver among this category's routed inputs — p95 384.2 ppb, 1 source, low confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/sweet-potato">Sweet potato</a><span class="hmi-driver-metal">Lead</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--2" style="width: 41%"></div></div><p class="hmi-driver-desc">Leading lead driver among this category's routed inputs — p95 56.9 ppb, 7 sources, medium confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/beet">Beet</a><span class="hmi-driver-metal">Lead</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--3" style="width: 25%"></div></div><p class="hmi-driver-desc">Leading lead driver among this category's routed inputs — 2 sources, low confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/root-vegetable-purees">Root Vegetable Purees</a><span class="hmi-driver-metal">Lead</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--4" style="width: 8%"></div></div><p class="hmi-driver-desc">Leading lead driver among this category's routed inputs — p95 7.94 ppb, 3 sources, low confidence.</p></div>

## Limits applicable to this category

The category inherits the maximum levels and action levels that apply to it. These are regulatory limits, not certification thresholds.

| Instrument | Metal | Value | Status |
| --- | --- | --- | --- |
| [[regulations/fda2025-lead-processed-baby-foods\|FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children]] | Lead | 20 µg/kg | <span class="hmi-status hmi-status--guidance">Guidance</span> |
| [[regulations/eu2023-contaminants-maximum-levels\|EU Regulation 2023/915 maximum levels for contaminants in food]] | Lead | 20 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |
| [[regulations/eu-2023-915-cadmium\|Commission Regulation (EU) 2023/915 cadmium maximum levels]] | Cadmium | 40 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |

## Testing and verification posture

Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.

<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>
<!-- END: hmi-subcategory-v3 -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in root-vegetable purees. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (as consumed/ready-to-eat) or dry weight, or on other bases. Each table below labels the source basis explicitly.

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
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 20 ug/kg Pb. Scope: single-ingredient root vegetables for children under 2. Basis: as sold or ready-to-eat as applicable. | FDA root vegetable baby-food samples: Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb. Parker 2022 root-vegetable baby foods: Pb mean 15.8 ppb, median 5 ppb, max 48 ppb. | Root-vegetable occurrence is close to or above the 20 ppb FDA action level at upper-end observations; the contaminated-platform HMTc P10 aggregate still needs a second fit distribution-capable source. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]; [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | FDA root vegetable baby-food samples: Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb. Parker 2022 root-vegetable baby foods: Pb mean 15.8 ppb, median 5 ppb, max 48 ppb. | Some upper-end product-row values exceed the EU 20 ppb maximum where comparable; the contaminated-platform HMTc P10 aggregate still needs a second fit distribution-capable source. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]; [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | FDA root vegetable baby-food samples: Cd p50 8.7 ppb, p90 31.5 ppb, p95 39.6 ppb, max 42 ppb. Parker 2022 root-vegetable baby foods: Cd mean 3.8 ppb, median 5 ppb, max 5 ppb. | FDA lower-bound p90 and p95 sit below the EU 40 ppb maximum, while the FDA max slightly exceeds it; the contaminated-platform HMTc P10 aggregate still needs a second fit distribution-capable source. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]; [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Root-vegetable purees. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/cadmium\|Cd]] | Root-vegetable purees (direct row-fit) | mean/median 3.8 to 8.7 ppb (2 sources); highest reported 42 ppb | 93% detected (50/54, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 2 cited | low (1-2 sources) | as-sold; as-consumed |
| [[metals/lead\|Pb]] | Root-vegetable purees (direct row-fit) | mean/median 5.1 to 15.8 ppb (3 sources); highest reported 48 ppb | 93% detected (55/59, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 20 ppb (as sold or ready-to-eat as applicable) | 3 cited | medium (3 sources) | as-sold; mixed-or-source-reported; as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 20 ppb (FDA final guidance action level for covered single-ingredient root vegetables) | single-ingredient carrot or sweet potato baby food, as sold | Single-ingredient carrots or sweet potatoes; root mixtures can route to the 10 ppb mixture value |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | baby food as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | The FDA 20 ppb value applies only to covered single-ingredient root vegetables; the Prop 65 screen is about 4.5 ppb at 110 g/day. | Use the FDA root-vegetable cap only when the product scope matches; compare root occurrence separately because soil uptake drives the upper tail. |

Root purees can be under the FDA root value and still be high relative to fruit or non-root vegetable occurrence.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: root-vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small root-vegetable baby-food distribution with N=9. It supports min/mean/median/max summaries for total arsenic, cadmium, mercury, and lead, but it does not provide p10 or p90 and does not resolve individual root vegetables such as sweet potato versus carrot. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Vegetables rows with carrot, sweet potato, beet, or parsnip terms | tAs 54; Cd 54; Pb 59; tHg 25 | lower-bound p50, p90, p95, max | tAs p90 6.4 ppb, max 10.3 ppb; Cd p50 8.7 ppb, p90 31.5 ppb, max 42 ppb; Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tHg p90 0.3 ppb, max 1.1 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; root split is name-based. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Root-vegetable baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 10.8 ppb; median 12 ppb; max 22 ppb; detected 9/9 | Supports median/max only | Total arsenic, not iAs; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/cadmium|Cadmium]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 3.8 ppb; median 5 ppb; max 5 ppb; detected 6/9 | Supports median/max only | Small N; no p10/p90; values include study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/lead|Lead]] | Root-vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 15.8 ppb; median 5 ppb; max 48 ppb; detected 8/9 | Supports median/max only | Small N; no p10/p90; values include study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Root-vegetable baby-food distribution | [[metals/mercury-total|Total mercury]] | Root-vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Named baby-food concentration | [[metals/lead|Lead]] | FDA TDS baby food sweet potatoes | not extracted | hybrid mean | 21 ppb | Does not support p10/p90/p100 | Named food signal, not a full root-puree distribution. [[sources/spungen2024-fda-tds-infant-lead-cadmium]] |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Root-vegetable evidence includes Parker 2022 root-vegetable distributions, FDA TDS named baby food sweet potato lead data, and broader UK vegetable/potato categories.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/cadmium|Cadmium]] | FDA FY2009-FY2024 root vegetable baby-food samples | p50 8.7 ppb; p90 31.5 ppb; p95 39.6 ppb; max 42 ppb | p50 8.7 ppb; p90 31.5 ppb; p95 39.6 ppb; max 42 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; name-based root subset. |
| [[metals/lead|Lead]] and [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 root vegetable baby-food samples | Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tAs p90 6.4 ppb, max 10.3 ppb | Pb p50 5.1 ppb, p90 15.9 ppb, max 27.3 ppb; tAs p90 6.4 ppb, max 10.3 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/lead|Lead]] | Parker 2022 root-vegetable baby foods | mean 15.8 ppb; median 5 ppb; max 48 ppb | mean 15.8 ppb; median 5 ppb; max 48 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Root group, N=9; no p10/p90. |
| [[metals/cadmium|Cadmium]] | Parker 2022 root-vegetable baby foods | mean 3.8 ppb; median 5 ppb; max 5 ppb | mean 3.8 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Root group, N=9; includes substitution conventions. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 root-vegetable baby foods | mean 10.8 ppb; median 12 ppb; max 22 ppb | mean 10.8 ppb; median 12 ppb; max 22 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/lead|Lead]] | FDA TDS baby food sweet potatoes | 21 ug/kg hybrid mean | 21 ppb | [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Specific baby-food sweet-potato signal; not all root purees. |
| [[metals/lead|Lead]] | FDA proposed lead action level for root vegetables | 20 ppb | 20 ppb | [[sources/price2023-baby-food-lead-biokinetic-models]] | Regulatory proposal/action-level context, not occurrence distribution. |
| [[metals/cadmium|Cadmium]] | UK potatoes used in infant diet modeling | 21 ug/kg | 21 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/lead|Lead]] | UK potatoes used in infant diet modeling | 0 to 1 ug/kg | 0 to 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/cadmium|Cadmium]] | UK other vegetables used in infant diet modeling | 17 ug/kg | 17 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |
| [[metals/lead|Lead]] | UK other vegetables used in infant diet modeling | 7 to 8 ug/kg | 7 to 8 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French soups/purees and vegetable-based ready-to-eat infant meals. The source does not split root vegetables from non-root vegetables, so these rows are context until the sample list is mapped to the HMTc split. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Soups/purees | 11 | as consumed | 653 / 2140 ppb | 4.82 / 9 ppb | 7.36 / 15 ppb | 39 / 57 ppb | 57.7 / 106 ppb | 42 / 42 ppb |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |

## Row Relationship

This row is the sibling row in the same category to [[products/non-root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 100% of root-vegetable baby-food samples, lead in 88%, and cadmium in 67%; the same review reported that Parker et al. found non-cancer lead risk in grain, fruit, and root-vegetable products under that study's exposure assumptions. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2025 scoping review reported that Pb was detected in 97% of roots-and-tubers baby-food items and that roots/tubers had a median Pb concentration of 0.007 mg/kg among detected items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating root-vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Parker 2022 found the highest lead maximum in its root-vegetable group, with N=9, 88% detection, mean 15.8 ppb, median 5 ppb, and max 48 ppb. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 reported elevated lead values in foods containing sweet potatoes, making sweet-potato-containing purees a priority follow-up target. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support root/tuber and vegetable concern at a broad baby-food category level, but they do not yet separate carrot, sweet potato, beet, puree processing, or brand formulation. [[sources/bair2022-heavy-metals-infant-toddler-foods]] [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Potential variance drivers for root-vegetable purees should be documented only after sources distinguish root vegetable type, growing region, soil contribution, processing, and analytical method. <!-- UNCITED: Need puree or ingredient-level root vegetable sources that report metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/root-vegetable-purees]], [[ingredients/carrot]], and [[ingredients/sweet-potato]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for root vegetables and dry infant cereals, and FDA estimated a reduction in 90th-percentile dietary lead intake for fruits, root vegetables, and dry infant cereal combined if those action levels were implemented. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Levers to reduce contamination

Root vegetables (carrots, sweet potatoes, beets, parsnips) accumulate heavy metals, particularly lead and cadmium, from soil via root uptake. This accumulation pattern differs from above-ground produce because the edible portion is in direct soil contact. Levers are ordered by approximate impact on the dominant concerns (Pb, Cd).

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source root vegetables from fields with documented low Pb and Cd soil concentration. Heavy metal uptake into roots is driven by soil concentration; supplier specification for soil testing at growing site is the primary control. | _Quantified magnitude data not yet ingested from cited sources; section will be expanded when origin-stratified soil-to-root transfer data is available._ | — |
| 2 | Agronomic | Soil pH management and calcium amendment at growing site reduces Pb and Cd availability to roots. Liming is an established intervention for Cd in soils. | _Quantified magnitude data not yet ingested; section will be expanded when field-intervention studies are available._ | — |
| 3 | Processing | Peeling removes the outer root layer, which concentrates surface-deposited and near-surface Pb. Blanching before puréeing may reduce some soluble metals. | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 4 | Formulation | Blend root vegetables with lower-metal vegetables or non-root puree bases to reduce the heavy metal contribution per serving. | _Quantified magnitude data not yet ingested._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming raw root vegetable ingredients, not finished product only. Incoming raw-ingredient testing before processing is more effective than finished-product testing alone for root vegetables. | _Quantified magnitude data not yet ingested for detection-power modeling._ | — |
| 6 | Packaging and storage | Not a primary lever for root vegetable purees under normal storage conditions. | — | — |

Cross-links: [[ingredients/carrots]] if the page exists; [[ingredients/sweet-potatoes]] if the page exists; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Source Evidence Inventory |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Why This Category Is High-Risk |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk|Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods]]<span class="hmi-ref-meta">Parker GH, Gillie CE, Miller JV, Badger DE, and Kreider ML · Toxicology Reports · 2022 · [doi.org/10.1016/j.toxrep.2022.02.001](https://doi.org/10.1016/j.toxrep.2022.02.001)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Infants' dietary arsenic exposure during transition to solid food]]<span class="hmi-ref-meta">Signes-Pastor AJ, Cottingham KL, Carey M, Sayarath V, Palys T, Meharg AA, et al. · Scientific Reports 8(1):7114 · 2018 · [doi.org/10.1038/s41598-018-25372-1](https://doi.org/10.1038/s41598-018-25372-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
7. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
8. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
9. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
10. [[sources/fda2020-ias-infant-rice-cereal-guidance|Inorganic Arsenic in Rice Cereals for Infants: Action Level, Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Guidance</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/authors2026-1-fisheries-laboratory-department-of-zoology-university-of\|authors 2026]]. *1 Fisheries Laboratory, Department of Zoology, University of Azad Jammu and Kashmir, King Abdullah*, Peer-reviewed article | 2026 | Peer-reviewed | US tHg, Cd, Pb, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 2 | [[sources/authors2026-chromium-using-fusarium\|authors 2026]]. *chromium using Fusarium*, Peer-reviewed article | 2026 | Peer-reviewed | US Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 3 | [[sources/authors2026-craig-t-martin-department-head\|authors 2026]]. *Craig T. Martin, Department Head*, Peer-reviewed article | 2026 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 4 | [[sources/authors2026-departamento-de-investigacio-n-en-toxicologi-a-y\|authors 2026]]. *Departamento de Investigación en Toxicología y Medicina Ambiental, Instituto Nacional de*, Peer-reviewed article | 2026 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 5 | [[sources/authors2026-draws-on-data-retrieved-from-the-web-of\|authors 2026]]. *draws on data retrieved from the Web of Science, Scopus, and functional foods fortified with health-promoting ingredi-*, Peer-reviewed article | 2026 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 6 | [[sources/authors2026-influence-of-the-gstp1-rs1695-polymorphism-on-mercury\|authors 2026]]. *Influence of the GSTP1 rs1695 Polymorphism on Mercury Levels*, Peer-reviewed article | 2026 | Peer-reviewed | US MeHg, tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 7 | [[sources/authors2026-muhammad-shoaib-rana-gel-alleviates-chromium\|authors 2026]]. *Muhammad Shoaib Rana, gel alleviates chromium*, Peer-reviewed article | 2026 | Peer-reviewed | US tHg, Cd, Pb, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 8 | [[sources/authors2026-the-hazards-of-metal-exposure-mediated-by-crops\|authors 2026]]. *The hazards of metal exposure mediated by crops to*, Peer-reviewed article | 2026 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 9 | [[sources/authors2026-the-human-body-either-directly-or-indirectly-the\|authors 2026]]. *the human body, either directly or indirectly. The excessive usage of heavy metals, like Cr(VI), Pb(II), As(II),*, Peer-reviewed article | 2026 | Peer-reviewed | US tHg, Pb occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 10 | [[sources/authors2026-when-citing-please-reference-the-published-version\|authors 2026]]. *When citing, please reference the published version.*, Peer-reviewed article | 2026 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 11 | [[sources/manuscript2026-rev-environ-contam-toxicol-author-manuscript-available-in\|manuscript et al. 2026]]. *Rev Environ Contam Toxicol. Author manuscript; available in PMC 2026 June 06.*, Peer-reviewed article | 2026 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 12 | [[sources/authors2025-a-method-has-been-developed-and-validated-for\|authors 2025]]. *A method has been developed and validated for vitamin ­B12 (cobalamin) measurement in nutritional products (infant formula,*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 13 | [[sources/authors2025-adsorption-of-heavy-metals-onto\|authors 2025]]. *Adsorption of heavy metals onto*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, iAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 14 | [[sources/authors2025-amazon-about-mehg-intoxication\|authors 2025]]. *Amazon about MeHg intoxication*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 15 | [[sources/authors2025-assessment-of-heavy-metal-contamination-in-soils-and\|authors 2025]]. *ASSESSMENT OF HEAVY METAL CONTAMINATION IN SOILS AND VEGETABLE CROPS FROM*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 16 | [[sources/authors2025-associated-with-fresh-pet-food-evaluating-scientific-evidence\|authors 2025]]. *Associated with Fresh Pet Food: Evaluating Scientific Evidence*, Peer-reviewed article | 2025 | Peer-reviewed | US Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 17 | [[sources/authors2025-background-objectives-trace-minerals-tms-both-essential-and\|authors 2025]]. *Background/Objectives: Trace minerals (TMs), both essential and toxic, are integral to hu-*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 18 | [[sources/authors2025-bioaccumulation-of-heavy-metals-17-elements-in-the\|authors 2025]]. *Bioaccumulation of Heavy Metals (17 Elements) in the Liver and*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 19 | [[sources/authors2025-complementary-foods-in-infants-an-in-vitro-study\|authors 2025]]. *Complementary foods in infants: an in vitro study*, Peer-reviewed article | 2025 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 20 | [[sources/authors2025-concentrations-in-commonly-consumed-seafood-species\|authors 2025]]. *Concentrations in Commonly Consumed Seafood Species*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 21 | [[sources/authors2025-current-research-in-toxicology-9-2025-100268\|authors 2025]]. *Current Research in Toxicology 9 (2025) 100268*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 22 | [[sources/authors2025-detection-of-heavy-metals-concentration-in-vegetables-and\|authors 2025]]. *Detection of heavy metals concentration in vegetables and*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 23 | [[sources/authors2025-evaluating-leaves-and-flowers-for-medicinal-applications\|authors 2025]]. *Evaluating Leaves and Flowers for Medicinal Applications*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 24 | [[sources/authors2025-exposure-among-conventional-and-organic-farmers-structured-interviews\|authors 2025]]. *exposure among conventional and organic farmers structured interviews and biological sampling (hair*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 25 | [[sources/authors2025-glucose-potato-broth-and-malt-broth-for-the\|authors 2025]]. *Glucose-Potato Broth, and Malt Broth), for the biosorption of hexavalent chromium (Cr(VI)) from aqueous solutions. A series of*, Peer-reviewed article | 2025 | Peer-reviewed | US Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 26 | [[sources/authors2025-heavy-metal-induced-variability-in-leaf-nutrient\|authors 2025]]. *Heavy Metal-Induced Variability in Leaf Nutrient*, Peer-reviewed article | 2025 | Peer-reviewed | US Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 27 | [[sources/authors2025-heavy-metal-toxicity-in-clinical-and-environmental-health\|authors 2025]]. *Heavy Metal Toxicity in Clinical and Environmental Health:*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 28 | [[sources/authors2025-heavy-metals-in-soils-and-selected-root\|authors 2025]]. *Heavy metals in soils and selected root*, Peer-reviewed article | 2025 | Peer-reviewed | US Cd, Pb occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 29 | [[sources/authors2025-hexavalent-chromium-induces-defense-responses\|authors 2025]]. *Hexavalent Chromium Induces Defense Responses,*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 30 | [[sources/authors2025-in-the-periodic-table-the-metalloids-boron-b\|authors 2025]]. *In the periodic table, the metalloids boron (B), silicon (Si), germanium (Ge), arsenic (As), antimony (Sb), and tellurium (Te)*, Peer-reviewed article | 2025 | Peer-reviewed | US tAs, Ni, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 31 | [[sources/authors2025-instrumentation-for-monitoring-toxic-elements-in-food-matrices\|authors 2025]]. *instrumentation for monitoring toxic elements in food matrices:*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 32 | [[sources/authors2025-ionizing-radiation-for-quality-control-and-mitigating-microbial\|authors 2025]]. *Ionizing Radiation for Quality Control and Mitigating Microbial*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 33 | [[sources/authors2025-mercury-induced-anxiety-disorders-using-network-toxicology\|authors 2025]]. *Mercury-Induced Anxiety Disorders Using Network Toxicology,*, Peer-reviewed article | 2025 | Peer-reviewed | CN MeHg, tHg, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 34 | [[sources/authors2025-of-four-tissues-with-distinct-embryological-origins-the\|authors 2025]]. *of four tissues with distinct embryological origins- the alveolar bone, cementum, gingiva, and periodontal*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 35 | [[sources/authors2025-pollutants-like-pesticides-fertilizers-fungicides-herbicides-heavy-met\|authors 2025]]. *pollutants like pesticides, fertilizers, fungicides, herbicides, heavy metals, dyes, and other*, Peer-reviewed article | 2025 | Peer-reviewed | US Cd, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 36 | [[sources/authors2025-profile-and-associated-health-risks-resulting-from-untreated\|authors 2025]]. *profile and associated health risks resulting from untreated tannery wastewater discharges in*, Peer-reviewed article | 2025 | Peer-reviewed | US Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 37 | [[sources/authors2025-pyrolyzed-biochar-showed-high-cation-exchange-capacity-cec\|authors 2025]]. *pyrolyzed biochar showed high cation exchange capacity (CEC) resulting from improved*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 38 | [[sources/authors2025-reused-oil-savory-snacks-public-health-toxic-vitamins\|authors 2025]]. *Reused Oil, Savory Snacks, Public Health, Toxic vitamins. Frying is a common method for preparing many foods, but the deep-frying process can*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 39 | [[sources/authors2025-setac-europe-35-th-annual-meeting\|authors 2025]]. *SETAC EUROPE 35 TH ANNUAL MEETING*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 40 | [[sources/authors2025-the-presence-of-fungal-species-fungal-loads-mycotoxins\|authors 2025]]. *The presence of fungal species, fungal loads, mycotoxins, and toxic metals was assessed in commercial*, Peer-reviewed article | 2025 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 41 | [[sources/authors2025-toxicological-safety-antimicrobial-efficacy-and-sensory\|authors 2025]]. *Toxicological Safety, Antimicrobial Efficacy, and Sensory*, Peer-reviewed article | 2025 | Peer-reviewed | US Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 42 | [[sources/authors2025-using-big-data-mediating-effect-of-blood-heavy\|authors 2025]]. *using Big Data – Mediating Effect of Blood Heavy Metal Concentration*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Cd, Pb occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 43 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 44 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review of Pb, Cd, As, and Hg in baby foods including a roots/tubers category, providing detection rates and median concentrations that supply broad product-context for root-vegetable purees |
| 45 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance establishing the 20 ppb Pb action level for single-ingredient root-vegetable baby foods, the regulatory benchmark loaded in the crosswalk section |
| 46 | [[sources/liu2025-mercury-poisoning-associated-membranous\|Liu et al. 2025]]. *Mercury poisoning-associated membranous*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg, Pb occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 47 | [[sources/n2025-development-of-a-reference-material-for-mercury-in\|Garzón et al. 2025]]. *Development of a reference material for mercury in fish: certified*, Peer-reviewed article | 2025 | Peer-reviewed | US MeHg, tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 48 | [[sources/university2025-bioaccumulation-of-arsenic\|University et al. 2025]]. *bioaccumulation of arsenic*, Peer-reviewed article | 2025 | Peer-reviewed | US Cd, Pb, iAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 49 | [[sources/authors2024-against-arsenic-stress-in\|authors 2024]]. *against arsenic stress in*, Peer-reviewed article | 2024 | Peer-reviewed | US Cd, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 50 | [[sources/authors2024-assessment-of-heavy-metal-conc-issnanzene-online-et2616\|authors 2024]]. *ASSESSMENT OF HEAVY METAL CONC… ISSNAnzene online:et2616-1370*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 51 | [[sources/authors2024-augments-the-immune-system-furthermore-red-beetroot-is\|authors 2024]]. *augments the immune system. Furthermore, red beetroot is known to improve stomach and intestine functions, stop lipid*, Peer-reviewed article | 2024 | Peer-reviewed | US Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 52 | [[sources/authors2024-detection-of-heavy-metals-in-some-edible\|authors 2024]]. *Detection of Heavy Metals in Some Edible*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Cd, Pb, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 53 | [[sources/authors2024-effect-of-graded-levels-of-essential-heavy-metals\|authors 2024]]. *EFFECT OF GRADED LEVELS OF ESSENTIAL HEAVY METALS ON THE*, Peer-reviewed article | 2024 | Peer-reviewed | US Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 54 | [[sources/authors2024-evaluation-of-the-metabolite-profile-of-fish-oil\|authors 2024]]. *Evaluation of the Metabolite Profile of Fish Oil Omega-3 Fatty*, Peer-reviewed article | 2024 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 55 | [[sources/authors2024-finding-the-achilles-heel-investigating-how-to\|authors 2024]]. *FINDING THE ACHILLES HEEL: INVESTIGATING HOW TO*, Peer-reviewed article | 2024 | Peer-reviewed | US Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 56 | [[sources/authors2024-for-the-deposit-and-dissemination-of-scientific-re-2\|authors 2024]]. *for the deposit and dissemination of scientific re- tinée au dépôt et à la diffusion de documents scien-*, Peer-reviewed article | 2024 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 57 | [[sources/authors2024-fungi-in-remediating-toxic-metals\|authors 2024]]. *fungi in remediating toxic metals*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 58 | [[sources/authors2024-impact-of-arsenic-stress-on-the-antioxidant-system\|authors 2024]]. *Impact of Arsenic Stress on the Antioxidant System and*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 59 | [[sources/authors2024-lenop-can-bind-transition-and-heavy-metals-metal\|authors 2024]]. *LENOP), can bind transition and heavy metals. Metal ion homeostasis accomplishes the*, Peer-reviewed article | 2024 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 60 | [[sources/authors2024-nanobiochar-to-enhance-mercury-ion-removal-from-water\|authors 2024]]. *Nanobiochar to Enhance Mercury Ion Removal from Water Systems*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 61 | [[sources/authors2024-obsessive-skincare-and-liver-toxicity-a-case-report\|authors 2024]]. *Obsessive skincare and liver toxicity: a case report on*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 62 | [[sources/authors2024-phytoremediation-of-soils-contaminated-with-potentially-toxic\|authors 2024]]. *phytoremediation of soils contaminated with potentially toxic*, Peer-reviewed article | 2024 | Peer-reviewed | US Cd, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 63 | [[sources/authors2024-rapid-and-in-situ-detection-of-different-heavy\|authors 2024]]. *rapid and in-situ detection of different heavy metals in*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 64 | [[sources/authors2024-rare-earth-and-platinum-group-elements-in-environmental\|authors 2024]]. *Rare Earth and Platinum Group Elements In Environmental Health Insights*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 65 | [[sources/authors2024-to-heavy-metals-are-differentially\|authors 2024]]. *to heavy metals are differentially*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg, Cd, Pb, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 66 | [[sources/authors2024-transfer-of-heavy-metals-from-soil-to-vegetables\|authors 2024]]. *Transfer of heavy metals from soil to vegetables: A comparative*, Peer-reviewed article | 2024 | Peer-reviewed | PE tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 67 | [[sources/elder2024-culture-of-antiquity-and-later-times-starting-with\|Elder et al. 2024]]. *culture of antiquity and later times, starting with the mythological*, Peer-reviewed article | 2024 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 68 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | 386-sample FY2023 FDA Pb survey across baby-food categories including root vegetables, the most recent analytical dataset directly supporting the 2025 final guidance action levels |
| 69 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FY2009-FY2024 FDA compliance program providing tAs, Pb, Cd, and tHg sample-level distributions for the name-based root-vegetable subset (carrot, sweet potato, beet, parsnip), the primary occurrence dataset on this page |
| 70 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 71 | [[sources/spungen2024-fda-tds-infant-lead-cadmium\|Spungen et al. 2024]]. *Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020*, Food Additives & Contaminants: Part A | 2024 | Peer-reviewed | FDA Total Diet Study exposure analysis identifying sweet-potato baby food as a named Pb signal (21 ppb hybrid mean) and supplying exposure-context for root-vegetable purees in infant diet |
| 72 | [[sources/years2024-barrier-phototoxicity-caused-by-overexposure-especially-to-ultraviolet\|years 2024]]. *barrier. Phototoxicity caused by overexposure, especially to ultraviolet radiation (UVR), results*, Peer-reviewed article | 2024 | Peer-reviewed | US tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 73 | [[sources/aranzazu2023-intoxication-in-a-a-n-amercury\|Aranzazu et al. 2023]]. *Intoxication in a A N Amercury*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 74 | [[sources/article2023-assessment-of-heavy-metals-accumulation-and-translocation-potential\|Article 2023]]. *Assessment of Heavy Metals Accumulation and Translocation Potential*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 75 | [[sources/authors2023-crops-a-step-towards-incorporating-genomic-tools\|authors 2023]]. *Crops: A step towards incorporating genomic tools*, Peer-reviewed article | 2023 | Peer-reviewed | US MeHg, iAs, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 76 | [[sources/authors2023-drinking-water-several-pfas-have-multiple-toxic-effects\|authors 2023]]. *drinking water. Several PFAS have multiple toxic effects, particularly affecting liver, kidney, thyroid, and the immune*, Peer-reviewed article | 2023 | Peer-reviewed | US Cd, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 77 | [[sources/authors2023-effects-of-environmental-toxicant-methylmercury\|authors 2023]]. *Effects of Environmental Toxicant, Methylmercury*, Peer-reviewed article | 2023 | Peer-reviewed | US MeHg, tHg, Cd, tAs, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 78 | [[sources/authors2023-essential-and-non-essential-heavy-metals\|authors 2023]]. *Essential and non-essential heavy metals*, Peer-reviewed article | 2023 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 79 | [[sources/authors2023-health-risk-assessment-for-human-exposure-to-heavy\|authors 2023]]. *Health Risk Assessment for Human Exposure to Heavy Metals*, Peer-reviewed article | 2023 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 80 | [[sources/authors2023-imidazole-derivatives-including-2-2-hydroxyphenyl-1-h\|authors 2023]]. *imidazole derivatives, including 2-(2-hydroxyphenyl)-1-H benzimidazole (HPBI) and its aluminum*, Peer-reviewed article | 2023 | Peer-reviewed | US Cd, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 81 | [[sources/authors2023-kerala-university-of-fisheries-and-ocean\|authors 2023]]. *Kerala University of Fisheries and Ocean*, Peer-reviewed article | 2023 | Peer-reviewed | US Cd, tAs, Al, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 82 | [[sources/authors2023-nitrogen-species-rns-resulting-in-skin-damage-cosmetic\|authors 2023]]. *nitrogen species (RNS), resulting in skin damage. Cosmetic industries have adopted a strategy to*, Peer-reviewed article | 2023 | Peer-reviewed | US tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 83 | [[sources/authors2023-open-access-reconstituting-the-main\|authors 2023]]. *OPEN ACCESS reconstituting the main*, Peer-reviewed article | 2023 | Peer-reviewed | US MeHg, tHg, Pb occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 84 | [[sources/authors2023-potential-ecological-risk-assessment-of-heavy-metals-associated\|authors 2023]]. *Potential ecological risk assessment of heavy metals associated*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 85 | [[sources/authors2023-skin-aging-dna-damage-and-even-skin-cancer\|authors 2023]]. *skin aging, DNA damage, and even skin cancer. Therefore, it is worth supporting skin protection*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 86 | [[sources/authors2023-systems-biology-of-chromium\|authors 2023]]. *Systems biology of chromium-*, Peer-reviewed article | 2023 | Peer-reviewed | US Cd, Pb, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 87 | [[sources/authors2023-the-inception-of-agriculture-farmers-and-plant-breeders\|authors 2023]]. *the inception of agriculture. Farmers and plant breeders continue to use these*, Peer-reviewed article | 2023 | Peer-reviewed | US Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 88 | [[sources/authors2023-the-paper-provides-an-overview-of-biocosmetics-which\|authors 2023]]. *The paper provides an overview of biocosmetics, which has tremendous potential for growth and is attracting huge business*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Cd, Pb, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 89 | [[sources/ezema2023-evaluation-of-pesticide-residues-and-heavy-metals\|Ezema et al. 2023]]. *Evaluation of pesticide residues and heavy metals*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 90 | [[sources/july2023-arsenic-contamination-in-rice-radiation-and-chemical-methods\|/ 2023]]. *Arsenic contamination in rice, radiation and chemical methods*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Cd, iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 91 | [[sources/li2023-ready-to-eat-seafood\|Li et al. 2023]]. *ready-to-eat seafood:*, Peer-reviewed article | 2023 | Peer-reviewed | US tHg, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 92 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM biokinetic Monte Carlo modeling Pb intake reduction from FDA action levels including the 20 ppb root-vegetable cap; ~26% dietary Pb reduction across fruits, root vegetables, and dry infant cereal combined |
| 93 | [[sources/authors2022-accepted-29-august-2022-an-efficient-alternative-surpassing\|authors 2022]]. *ACCEPTED 29 August 2022 an efﬁcient alternative surpassing the existing physical and chemical approaches*, Peer-reviewed article | 2022 | Peer-reviewed | US Cd, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 94 | [[sources/authors2022-bioaccumulation-and-translocation-of-heavy-metals\|authors 2022]]. *Bioaccumulation and Translocation of Heavy Metals*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, Cd, Pb, iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 95 | [[sources/authors2022-chromium-through-cr-stressed-life-sciences-faculty-of\|authors 2022]]. *chromium through Cr-stressed Life Sciences, Faculty of Food Science and Technology, University of Agricultural Sciences and*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, Cd, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 96 | [[sources/authors2022-compared-to-the-chemical-fertilizer-in-organic-fertilizer\|authors 2022]]. *compared to the chemical fertilizer. In organic fertilizer applications, heavy metal contents such as arsenic, chrome, cobalt, and nickel were found to*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 97 | [[sources/authors2022-compounds-that-can-be-further-valorized-in-the\|authors 2022]]. *compounds that can be further valorized in the formulation of food, nutraceuticals, and pharmacological prod-*, Peer-reviewed article | 2022 | Peer-reviewed | US Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 98 | [[sources/authors2022-dietary-intake-of-toxic-heavy-metals-with-major\|authors 2022]]. *Dietary Intake of Toxic Heavy Metals with Major Groups of*, Peer-reviewed article | 2022 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 99 | [[sources/authors2022-effect-of-rice-husk-on-arsenic-accumulation-in\|authors 2022]]. *EFFECT OF RICE HUSK ON ARSENIC ACCUMULATION IN*, Peer-reviewed article | 2022 | Peer-reviewed | KR Cd, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 100 | [[sources/authors2022-frontiers-in-microbiology-remediate-heavy-metals-but-the\|authors 2022]]. *Frontiers in Microbiology remediate heavy metals, but the use of microorganisms is cheap, less*, Peer-reviewed article | 2022 | Peer-reviewed | US Pb, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 101 | [[sources/authors2022-heavy-metals-halogenated-hydrocarbons-phthalates-glyphosate\|authors 2022]]. *Heavy Metals, Halogenated Hydrocarbons, Phthalates, Glyphosate,*, Peer-reviewed article | 2022 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 102 | [[sources/authors2022-inducement-due-to-radiation-exposure-is-within-the\|authors 2022]]. *inducement due to radiation exposure is within the acceptable limits for both mining sites.*, Peer-reviewed article | 2022 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 103 | [[sources/authors2022-janet-m-roseland-judith-h-spungen2-kristine-y\|authors 2022]]. *Janet M. Roseland , Judith H. Spungen2, Kristine Y. Patterson1,*, Peer-reviewed article | 2022 | Peer-reviewed | US tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 104 | [[sources/authors2022-lead-and-other-toxic-metals-in-plastic-play\|authors 2022]]. *Lead and other toxic metals in plastic play foods: Results from testing*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, Cd, Pb, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 105 | [[sources/authors2022-microbial-proteases-for-by-product-valorization-through-hydrol\|authors 2022]]. *microbial proteases for by-product valorization through hydrol- operating conditions (temperature, pH, salinity, and organic*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, tAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 106 | [[sources/authors2022-selenium-status-its-interactions-with-dietary-mercury\|authors 2022]]. *Selenium Status: Its Interactions with Dietary Mercury*, Peer-reviewed article | 2022 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 107 | [[sources/authors2022-the-concentration-of-potentially-toxic-elements-ptes-in\|authors 2022]]. *The concentration of potentially toxic elements (PTEs) in the coffee products: a*, Peer-reviewed article | 2022 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 108 | [[sources/authors2022-the-who-recommends-monitoring-iodine-status-in-all\|authors 2022]]. *The WHO recommends monitoring iodine status in all populations with median urinary iodine concentration (UIC) below 100 μg/l suggesting*, Peer-reviewed article | 2022 | Peer-reviewed | PE MeHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 109 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US narrative review summarizing Parker 2022 detection rates for root-vegetable baby foods (As 100%, Pb 88%, Cd 67%) and evaluating FDA policy as context for this category's contamination concern |
| 110 | [[sources/chemistry2022-bio-accumulation-of-heavy-metals-in-some-north\|INDIAN LEAFY VEGETABLES AND 2022]]. *BIO-ACCUMULATION OF HEAVY METALS IN SOME NORTH*, Peer-reviewed article | 2022 | Peer-reviewed | US Cd, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 111 | [[sources/manuscript2022-investigate-processes-causing-attenuation-of-a-hexavalent-chromium\|manuscript et al. 2022]]. *investigate processes causing attenuation of a hexavalent chromium (Cr(VI)) plume in sedimentary*, Peer-reviewed article | 2022 | Peer-reviewed | US Cd, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 112 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US baby-food occurrence study measuring tAs, Cd, Pb, and tHg in a root-vegetable group (N=9) with min/mean/median/max statistics; highest Pb maximum (48 ppb) in this source set |
| 113 | [[sources/r2022-heavy-metal-stress-insights-into-life-sciences-faculty\|Rupa et al. 2022]]. *heavy metal stress-insights into Life Sciences, Faculty of Food Science and Technology, University of Agricultural Sciences and*, Peer-reviewed article | 2022 | Peer-reviewed | US Cd, Pb, tAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 114 | [[sources/authors2021-a-review-on-emerging-micropollutants-sources-environmental-concentrati\|authors 2021]]. *A review on emerging micropollutants: sources, environmental concentration and toxicity*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 115 | [[sources/authors2021-accepted-16-august-2021-abstract-silicon-si-is\|authors 2021]]. *Accepted: 16 August 2021 Abstract: Silicon (Si) is considered a non-essential element similar to cadmium, arsenic, lead, etc.,*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd, tAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 116 | [[sources/authors2021-ariane-krause-1-franziska-ha-fner-florian-augustin\|authors 2021]]. *Ariane Krause 1 & Franziska Häfner & Florian Augustin & Kai M. Udert*, Peer-reviewed article | 2021 | Peer-reviewed | US Cd, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 117 | [[sources/authors2021-benefits-toxicity-and-pathologies\|authors 2021]]. *Benefits, Toxicity and Pathologies*, Peer-reviewed article | 2021 | Peer-reviewed | US MeHg, tHg, Cd, Pb, iAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 118 | [[sources/authors2021-chemical-composition-and-antigenotoxic-properties\|authors 2021]]. *Chemical Composition and Antigenotoxic Properties*, Peer-reviewed article | 2021 | Peer-reviewed | US MeHg, Cd, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 119 | [[sources/authors2021-environmental-toxicology-and-chemistry-volume-40-number-10\|authors 2021]]. *Environmental Toxicology and Chemistry—Volume 40, Number 10—pp. 2813–2824, 2021*, Peer-reviewed article | 2021 | Peer-reviewed | US MeHg, tHg, Cd, Pb, Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 120 | [[sources/authors2021-ileana-ielo-5-dario-drommi-6-elisabetta-scali\|authors 2021]]. *Ileana Ielo 5 , Dario Drommi 6 , Elisabetta Scali 7 , Maria Rosaria Plutino 5 , Giuseppe Rosace 8*, Peer-reviewed article | 2021 | Peer-reviewed | US Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 121 | [[sources/authors2021-journal-of-nutrition-fasting-and-health\|authors 2021]]. *JOURNAL OF NUTRITION FASTING AND HEALTH*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 122 | [[sources/authors2021-methods-of-extracting-the-compounds-of-interest-in\|authors 2021]]. *methods of extracting the compounds of interest. In the case of northwest Spain, five algae species are*, Peer-reviewed article | 2021 | Peer-reviewed | US iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 123 | [[sources/authors2021-printed-edition-of-the-special-issue-published-in\|authors 2021]]. *Printed Edition of the Special Issue Published in Toxics*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 124 | [[sources/authors2021-total-and-bioaccessible-heavy-metals-in-cabbage\|authors 2021]]. *Total and bioaccessible heavy metals in cabbage*, Peer-reviewed article | 2021 | Peer-reviewed | US Cd, tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 125 | [[sources/caracciolo2021-rhizosphere-microbial-communities-and-heavy-metals\|Caracciolo et al. 2021]]. *Rhizosphere Microbial Communities and Heavy Metals*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 126 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | 416-sample FY2020-FY2021 FDA Pb survey including root and non-root vegetable purees, contributing to the multi-year evidence base behind the 2025 final guidance |
| 127 | [[sources/ganguly2021-mercury-and-movement-disorders\|Ganguly et al. 2021]]. *Mercury and Movement Disorders:*, Peer-reviewed article | 2021 | Peer-reviewed | US MeHg, tHg, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 128 | [[sources/state2021-health-risk-evaluation-of-selected-heavy-metals-in\|State et al. 2021]]. *Health Risk Evaluation of Selected Heavy Metals in Infant Nutrition Formula in Cross*, Peer-reviewed article | 2021 | Peer-reviewed | US tHg, Cd, Pb, tAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 129 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 130 | [[sources/authors2020-eid-et-al-evaluating-the-uptake-of-ten\|authors 2020]]. *Eid et al.: Evaluating the uptake of ten heavy metals by kidney bean (Phaseolus vulgaris L.) grown in a soil-sludge mixture using a*, Peer-reviewed article | 2020 | Peer-reviewed | US Cd, Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 131 | [[sources/authors2020-giuseppe-de-santis-olubukunmi-amos-ilori-diana-marisol\|authors 2020]]. *Giuseppe De Santis, Olubukunmi Amos Ilori , Diana Marisol Abrego-Guandique , Pierluigi Plastina ,*, Peer-reviewed article | 2020 | Peer-reviewed | US Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 132 | [[sources/authors2020-heavy-metals-in-food-waste-water-with-environmental\|authors 2020]]. *Heavy Metals in Food Waste Water with Environmental Effects*, Peer-reviewed article | 2020 | Peer-reviewed | US Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 133 | [[sources/authors2020-iodine-and-mercury-content-in-raw-boiled\|authors 2020]]. *Iodine and Mercury Content in Raw, Boiled,*, Peer-reviewed article | 2020 | Peer-reviewed | US MeHg, tHg, Cd, tAs, Ni, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 134 | [[sources/authors2020-seafood-wine-rice-vegetables-and-other-food-items\|authors 2020]]. *Seafood, wine, rice, vegetables, and other food items associated*, Peer-reviewed article | 2020 | Peer-reviewed | US MeHg, tHg, Cd, iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 135 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Brazilian market Al occurrence and bioaccessibility survey covering salty purees with sweet potato and vegetable combinations, providing Al concentration and bioaccessibility data for root-containing infant food matrices |
| 136 | [[sources/properties2020-catello-pane-aldo-tava-and-cristina-bignami\|Properties et al. 2020]]. *Catello Pane, Aldo Tava and Cristina Bignami*, Peer-reviewed article | 2020 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 137 | [[sources/authors2019-approach-to-speciation-analysis-as-in-previous-years\|authors 2019]]. *approach to speciation analysis. As in previous years, As speciation continues to dominate the*, Peer-reviewed article | 2019 | Peer-reviewed | US MeHg, tHg, iAs, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 138 | [[sources/authors2019-christina-oh-1-emily-c-keats-1-and\|authors 2019]]. *Christina Oh 1 , Emily C. Keats 1 and Zulfiqar A. Bhutta 1,2, **, Peer-reviewed article | 2019 | Peer-reviewed | US Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 139 | [[sources/authors2019-integrating-environmental-health-and-genomics-research-in\|authors 2019]]. *Integrating environmental health and genomics research in*, Peer-reviewed article | 2019 | Peer-reviewed | US Cd, Pb, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 140 | [[sources/authors2019-journal-of-toxicology\|authors 2019]]. *Journal of Toxicology*, Peer-reviewed article | 2019 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 141 | [[sources/authors2019-or-part-contained-in-the-work-will-not\|authors 2019]]. *or part contained in the work will not infringe on the rights of those third parties. The risk of claims resulting from*, Peer-reviewed article | 2019 | Peer-reviewed | US tHg, Cd, Pb, tAs, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 142 | [[sources/authors2019-role-of-silicon-in-mitigation-of-heavy-metal\|authors 2019]]. *Role of Silicon in Mitigation of Heavy Metal Stresses*, Peer-reviewed article | 2019 | Peer-reviewed | US Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 143 | [[sources/authors2019-sources-through-catalytic-titration-with-hexavalent-chromium\|authors 2019]]. *Sources Through Catalytic Titration with Hexavalent Chromium*, Peer-reviewed article | 2019 | Peer-reviewed | US Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 144 | [[sources/authors2019-spatial-contamination-and-health-risks-of-heavy-metal\|authors 2019]]. *Spatial contamination and health risks of heavy metal(loid)s*, Peer-reviewed article | 2019 | Peer-reviewed | US Cd, Pb, tAs, Ni, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 145 | [[sources/authors2019-the-soil-quality-1-soil-is-also-contaminated\|authors 2019]]. *the soil quality [1]. Soil is also contaminated by heavy metals through various human*, Peer-reviewed article | 2019 | Peer-reviewed | US Cd, Pb, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 146 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS reporting multi-element concentrations (Al, Sb, tAs, Cd, Cr, Ni, Sn, and others) in infant soups/purees and vegetable-based ready-to-eat meals; root/non-root split not resolved, so used as broad vegetable-puree context |
| 147 | [[sources/depaiva2019-baby-food-infant-formula-inorganic-contaminants\|Paiva et al. 2019]]. *Occurrence and determination of inorganic contaminants in baby food and infant formula*, Current Opinion in Food Science | 2019 | Peer reviewed review | global/BR/CN tAs, iAs, Cd, Pb, Al, Cu, tHg, MeHg, Zn, Ni occurrence in Baby foods and infant formulas, including infant formula, follow-on formula, cereals, purees, teething biscuits, rice-based baby foods, and... (n=Review article; multiple cited studies) |
| 148 | [[sources/feed2019-occurrence-data-of-nickel-in-feed-and-animal\|APPROVED: May doi: ./j.efsa.. 2019]]. *Occurrence data of nickel in feed and animal exposure*, Peer-reviewed article | 2019 | Peer-reviewed | US Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 149 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF/Brooks Applied Labs 168-container US baby-food survey including sweet potato and carrot puree categories; four-metal detection rates and modeled IQ-loss attribution including root-vegetable contribution |
| 150 | [[sources/manuscript2019-gerald-geroldinger1-matthias-tonner1-judith-quirgst1-martin-walter2\|manuscript et al. 2019]]. *Gerald Geroldinger1, Matthias Tonner1, Judith Quirgst1, Martin Walter2, Sritama De*, Peer-reviewed article | 2019 | Peer-reviewed | US Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 151 | [[sources/authors2018-and-retention-of-dha-and-epa-in-selected\|authors 2018]]. *and retention of DHA and EPA in selected fish fillets*, Peer-reviewed article | 2018 | Peer-reviewed | US MeHg, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 152 | [[sources/authors2018-cooperation-i-received-from-very-distinguished-professors-lecturers\|authors 2018]]. *cooperation I received from very distinguished Professors, Lecturers and other contributors who took time off*, Peer-reviewed article | 2018 | Peer-reviewed | US Cd, Ni, Al, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 153 | [[sources/authors2018-davidson-christine-m-and-mertz-kraus-regina-2018\|authors 2018]]. *Davidson, Christine M. and Mertz-Kraus, Regina (2018) Atomic*, Peer-reviewed article | 2018 | Peer-reviewed | US tHg, iAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 154 | [[sources/authors2018-minerals-and-heavy-metals-in\|authors 2018]]. *minerals and heavy metals in*, Peer-reviewed article | 2018 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Al, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 155 | [[sources/authors2018-toxic-metals-like-arsenic-cadmium-and-lead-as\|authors 2018]]. *toxic metals like arsenic, cadmium and lead; as well as process contaminants such as acrylamide.*, Peer-reviewed article | 2018 | Peer-reviewed | US tHg, Cd, Pb, iAs, Ni occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 156 | [[sources/contamination2018-timothy-d-scheibe-and-david-c-mays\|Contamination et al. 2018]]. *Timothy D. Scheibe and David C. Mays*, Peer-reviewed article | 2018 | Peer-reviewed | US tAs, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 157 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Infant biomarker study finding vegetable intake associated with urinary arsenic during weaning (Spearman rho=0.86, p=0.01), supporting vegetable purees as an arsenic exposure pathway; vegetable category not split by root vs non-root |
| 158 | [[sources/authors2017-int-j-curr-microbiol-app-sci-2017-6\|authors 2017]]. *Int.J.Curr.Microbiol.App.Sci (2017) 6(7): 168-181*, Peer-reviewed article | 2017 | Peer-reviewed | US Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 159 | [[sources/authors2017-levels-dietary-intake-and-health-risk-of-potentially\|authors 2017]]. *Levels, dietary intake, and health risk of potentially toxic metals*, Peer-reviewed article | 2017 | Peer-reviewed | US Cd, Pb, iAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 160 | [[sources/authors2017-mercury-removal-hot-paper\|authors 2017]]. *& Mercury Removal \| Hot Paper \|*, Peer-reviewed article | 2017 | Peer-reviewed | US MeHg, tHg occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 161 | [[sources/authors2016-and-evaluates-the-resulting-threats-to-food-intake\|authors 2016]]. *and evaluates the resulting threats to food intake and public health in Bangladesh by*, Peer-reviewed article | 2016 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Sn, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 162 | [[sources/azevedo2016-cadmium-application-in-tomato-nutritional-imbalance\|Azevedo 2016]]. *Cadmium Application in Tomato: Nutritional Imbalance*, Peer-reviewed article | 2016 | Peer-reviewed | US Cd, tAs, Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 163 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK survey providing category-average Cd (21 ppb potatoes) and Pb (0-1 ppb potatoes) for UK infant-diet vegetable ingredients, plus mixed-vegetable group averages, as European occurrence context |
| 164 | [[sources/authors2015-and-trade-repercussions-regular-economical-and-straightforward-feed\|authors 2015]]. *and trade repercussions. Regular, economical and straightforward feed testing is critical to reach a*, Peer-reviewed article | 2015 | Peer-reviewed | US Cd occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 165 | [[sources/authors2015-increasingly-shows-that-chronic-exposure-to-a-broad\|authors 2015]]. *increasingly shows that chronic exposure to a broad range of toxins—including persistent*, Peer-reviewed article | 2015 | Peer-reviewed | US tHg, Cd, Pb, iAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 166 | [[sources/authors2015-the-increase-in-the-possible-exposure-pathways-for\|authors 2015]]. *the increase in the possible exposure pathways for humans. ly monitored in the environment, though having the potential*, Peer-reviewed article | 2015 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 167 | [[sources/authors2015-topoisomerases-by-organomercury\|authors 2015]]. *Topoisomerases by Organomercury*, Peer-reviewed article | 2015 | Peer-reviewed | US tHg, tAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 168 | [[sources/authors2015-toxic-trace-elements-in-meat-and-meat-products\|authors 2015]]. *Toxic Trace Elements in Meat and Meat Products Across Asia:*, Peer-reviewed article | 2015 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 169 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 170 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 171 | [[sources/authors2013-estimates-of-dietary-exposure-to-bisphenol-a-bpa\|authors 2013]]. *Estimates of dietary exposure to bisphenol A (BPA) from light metal packaging using food*, Peer-reviewed article | 2013 | Peer-reviewed | US Al occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 172 | [[sources/agwaramgbo2012-there-is-a-growing-global-concern-for-the\|Agwaramgbo et al. 2012]]. *There is a growing global concern for the environmental and health hazards posed by heavy metal contaminants, espe-*, Peer-reviewed article | 2012 | Peer-reviewed | US Pb, tAs, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 173 | [[sources/authors2011-cx-using-the-following-formula-qs-1-4\|authors 2011]]. *(CX), using the following formula: qS ¼*, Peer-reviewed article | 2011 | Peer-reviewed | IT tHg, Cd, Ni, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 174 | [[sources/authors2011-income-levels-and-continents\|authors 2011]]. *Income Levels and Continents*, Peer-reviewed article | 2011 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 175 | [[sources/authors2011-part-of-the-study-begins-by-describing-its\|authors 2011]]. *part of the study begins by describing its research methods consisting of research interviews,*, Peer-reviewed article | 2011 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 176 | [[sources/authors2010-the-case-for-visual-analytics-of-arsenic-concentrations\|authors 2010]]. *The Case for Visual Analytics of Arsenic Concentrations in*, Peer-reviewed article | 2010 | Peer-reviewed | US Cd, iAs occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 177 | [[sources/authors2007-or-posting-on-open-internet-sites-your-personal\|authors 2007]]. *or posting on open internet sites, your personal or institution’s*, Peer-reviewed article | 2007 | Peer-reviewed | US Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 178 | [[sources/authors2000-4-fisheries-administration-phnom-penh-120101-cambodia-chhounchamnan\|authors 2000]]. *4 Fisheries Administration, Phnom Penh 120101, Cambodia; chhounchamnan@gmail.com (C.C.);*, Peer-reviewed article | 2000 | Peer-reviewed | US MeHg, tHg, Cd, Pb, tAs, Sn occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 179 | [[sources/sources1990-heavy-metals-in-air-soil-and\|Sources et al. 1990]]. *Heavy Metals in Air, Soil, and*, Peer-reviewed article | 1990 | Peer-reviewed | US tHg, Cd, Pb, tAs, Ni, Al, Cr occurrence in Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors. |
| 180 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | 1980 Canadian national baseline measuring Cd, Cr, Co, Cu, Fe, Pb, Mn, Ni, and Zn in 330 baby-food samples including strained and junior vegetables by AAS; LOD 10 ppb makes values a historical ceiling rather than a modern distribution source |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda2020-ias-infant-rice-cereal-guidance|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 4 sources added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
<!-- END: hmi-page-history -->
