---
title: Root-Vegetable Purees
type: product-category
category: root-vegetable-purees
hmtc_row: 9
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Root-vegetable purees"
base_taxonomy: vegetable-purees
variant_type: higher-contamination-sibling
platform_metals: [Cd, Pb]
provenance: base_taxonomy
ingredient_targets: [root-vegetable-purees, carrot, sweet-potato, beet]
primary_metals_of_concern: [Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-rootveg-20ppb]
cc_relationship:
  role: contamination_platform
  scope: cross_row
  partners:
    - slug: non-root-vegetable-purees
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Cd, Pb]
      notes: "Cross-row CC: clean counterpart lives in row 8, not as a sibling within a vegetable-purees base split."
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 25
---

# Root-Vegetable Purees

This page is a structural scaffold for HMTc Category 1 row 9. Quantitative evidence now includes FDA compliance root-vegetable samples, a small root-vegetable baby-food distribution, FDA TDS named baby food sweet potato lead data, and broader UK vegetable/potato category values.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Cherry-pick attack vectors on root-vegetable purees typically center on lead and cadmium uptake from soil; root vegetables sit under a wider FDA 2025 cap (20 ppb Pb) than other baby-food categories specifically because the literature shows higher baseline values. Geographic and soil-pH variance is the defensive core; basis is straightforward (as-sold). Compare with <a href="/products/non-root-vegetable-purees">Non Root Vegetable Purees</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=root-vegetable-purees">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for root-vegetable purees, against the FDA 2025 20 ppb root-vegetable cap.</dd>
 </div>
 <div>
 <dt>Regulators, journalists, and adversarial readers</dt>
 <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
 </div>
 <div>
 <dt>HMT&amp;C staff (internal)</dt>
 <dd>HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https://heavymetaltested.com">heavymetaltested.com</a>, not on this public page. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="/methodology">methodology</a> for the separation.</dd>
 </div>
 </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in root-vegetable purees. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (as consumed/ready-to-eat) or dry weight, or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

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

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Root-vegetable purees. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

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

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

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
10. [[sources/fda-iAs-rice-cereal-2020|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review of Pb, Cd, As, and Hg in baby foods including a roots/tubers category, providing detection rates and median concentrations that supply broad product-context for root-vegetable purees |
| 3 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance establishing the 20 ppb Pb action level for single-ingredient root-vegetable baby foods, the regulatory benchmark loaded in the crosswalk section |
| 4 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | 386-sample FY2023 FDA Pb survey across baby-food categories including root vegetables, the most recent analytical dataset directly supporting the 2025 final guidance action levels |
| 5 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FY2009-FY2024 FDA compliance program providing tAs, Pb, Cd, and tHg sample-level distributions for the name-based root-vegetable subset (carrot, sweet potato, beet, parsnip), the primary occurrence dataset on this page |
| 6 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 7 | [[sources/spungen2024-fda-tds-infant-lead-cadmium\|Spungen et al. 2024]]. *Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020*, Food Additives & Contaminants: Part A | 2024 | Peer-reviewed | FDA Total Diet Study exposure analysis identifying sweet-potato baby food as a named Pb signal (21 ppb hybrid mean) and supplying exposure-context for root-vegetable purees in infant diet |
| 8 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM biokinetic Monte Carlo modeling Pb intake reduction from FDA action levels including the 20 ppb root-vegetable cap; ~26% dietary Pb reduction across fruits, root vegetables, and dry infant cereal combined |
| 9 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US narrative review summarizing Parker 2022 detection rates for root-vegetable baby foods (As 100%, Pb 88%, Cd 67%) and evaluating FDA policy as context for this category's contamination concern |
| 10 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US baby-food occurrence study measuring tAs, Cd, Pb, and tHg in a root-vegetable group (N=9) with min/mean/median/max statistics; highest Pb maximum (48 ppb) in this source set |
| 11 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | 416-sample FY2020-FY2021 FDA Pb survey including root and non-root vegetable purees, contributing to the multi-year evidence base behind the 2025 final guidance |
| 12 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 13 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Brazilian market Al occurrence and bioaccessibility survey covering salty purees with sweet potato and vegetable combinations, providing Al concentration and bioaccessibility data for root-containing infant food matrices |
| 14 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS reporting multi-element concentrations (Al, Sb, tAs, Cd, Cr, Ni, Sn, and others) in infant soups/purees and vegetable-based ready-to-eat meals; root/non-root split not resolved, so used as broad vegetable-puree context |
| 15 | [[sources/depaiva2019-baby-food-infant-formula-inorganic-contaminants\|Paiva et al. 2019]]. *Occurrence and determination of inorganic contaminants in baby food and infant formula*, Current Opinion in Food Science | 2019 | Peer reviewed review | global/BR/CN tAs, iAs, Cd, Pb, Al, Cu, tHg, MeHg, Zn, Ni occurrence in Baby foods and infant formulas, including infant formula, follow-on formula, cereals, purees, teething biscuits, rice-based baby foods, and... (n=Review article; multiple cited studies) |
| 16 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF/Brooks Applied Labs 168-container US baby-food survey including sweet potato and carrot puree categories; four-metal detection rates and modeled IQ-loss attribution including root-vegetable contribution |
| 17 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Infant biomarker study finding vegetable intake associated with urinary arsenic during weaning (Spearman rho=0.86, p=0.01), supporting vegetable purees as an arsenic exposure pathway; vegetable category not split by root vs non-root |
| 18 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK survey providing category-average Cd (21 ppb potatoes) and Pb (0-1 ppb potatoes) for UK infant-diet vegetable ingredients, plus mixed-vegetable group averages, as European occurrence context |
| 19 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 20 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 21 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | 1980 Canadian national baseline measuring Cd, Cr, Co, Cu, Fe, Pb, Mn, Ni, and Zn in 330 baby-food samples including strained and junior vegetables by AAS; LOD 10 ppb makes values a historical ceiling rather than a modern distribution source |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5a033e122](https://github.com/paleofoundation/heavymetalindex/commit/5a033e122) | 2026-08-02 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 6 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
