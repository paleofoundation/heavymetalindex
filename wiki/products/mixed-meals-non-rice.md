---
title: Mixed Meals, Non-Rice
type: product-category
category: mixed-meals-non-rice
aliases: [mixed-dishes]
hmtc_row: 12
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
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
wiki_doi: null
updated: 2026-05-03
sources: 27
---

# Mixed Meals, Non-Rice

This page is a structural scaffold for HMTc Category 1 row 12. FDA compliance samples now provide a direct non-rice mixed-meal lower-bound distribution, while broader savoury infant-food evidence remains useful context.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Cherry-pick attack vectors on non-rice mixed meals typically center on lead and cadmium from vegetable and grain ingredients. Source provenance and basis labeling (as-sold vs prepared) are the defensive core. Compare with <a href="/products/mixed-meals-rice-containing">Mixed Meals Rice Containing</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=mixed-meals-non-rice">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for non-rice mixed meals, against the FDA 2025 baby-food lead cap.</dd>
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

This page reports what the cited sources say about heavy-metal concentrations in non-rice mixed meals for infants and young children. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (ready-to-eat), dry weight, or as sold. Each table below labels the source basis explicitly.

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
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for mixtures; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-rice grain-based mixed meal. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | non-rice grain-based (summary-only / supporting context) | highest reported 9 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/cadmium\|Cd]] | non-rice grain-based (summary-only / supporting context) | mean/median 2.2 to 10 ppb (3 sources); highest reported 44.4 ppb | 86% detected (66/77, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 3 cited | medium (3 sources) | as-sold; mixed-or-source-reported; as-consumed |
| [[metals/lead\|Pb]] | non-rice grain-based (summary-only / supporting context) | median 1.6 ppb (1 source); highest reported 13 ppb | 76% detected (59/78, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 10 ppb (as sold or ready-to-eat as applicable) | 2 cited | low (1-2 sources) | as-sold; as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby-food mixture | Mixtures including grain- and meat-based mixtures for babies and young children under 2 |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | baby food as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g; toddler dinner RACC is 170 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
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

The current source set does not yet support a non-rice mixed-meal HMTc the lower-end of the literature distribution. UK category-average data are structured as EF-4 context and broad Gardener 2019 all-sample percentiles can support screening context, but rice status and mixed-meal formulation must be resolved before threshold-setting use. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Mixtures rows with no rice named | tAs 77; Cd 77; Pb 78; tHg 36 | lower-bound p50, p90, p95, max | tAs p50 3 ppb, p90 5.6 ppb, max 13.6 ppb; Cd p50 2.2 ppb, p90 5.2 ppb, max 44.4 ppb; Pb p50 1.6 ppb, p90 6.8 ppb, max 13 ppb; tHg p90 0, max 0.4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK savoury category average | [[metals/aluminum|Aluminum]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 1995 to 1999 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 7 to 9 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/cadmium|Cadmium]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/lead|Lead]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 3 to 5 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| Scoping-review mixed-food median | [[metals/cadmium|Cadmium]] | Mixed foods excluding meat, fish, and rice | review-level baby-food grouping | median and exceedance share | median 8 ppb; 19% of detected items exceeded the Cd ML used by the authors | Broad context only | Secondary review category; not a product-specific distribution. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice mixed-meal lower-contamination row aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice mixed-meal lower-contamination row aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Source Evidence Inventory

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

## Levers to reduce contamination

Non-rice mixed meals (meat and vegetable combinations, pasta or oat-based blends) have a diverse contamination profile depending on ingredient composition. Lead and cadmium are the primary concerns in vegetable components; methylmercury is a concern in fish-containing mixed meals.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source root vegetable components from low-Pb/Cd soil regions; source any fish components from low-trophic species with documented low MeHg burden. | _Quantified magnitude data not yet ingested from cited sources for non-rice mixed meal matrix; ingredient-level data applies upstream._ | — |
| 2 | Agronomic | Soil management at vegetable growing site reduces Pb and Cd in root and leafy vegetable components; upstream supplier lever. | _Quantified magnitude data not yet ingested; section will be expanded when intervention studies are available._ | — |
| 3 | Processing | Washing, peeling, and blanching of vegetable components reduces surface-deposited Pb; cooking meat components to discard drippings reduces some fat-soluble contaminants. | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 4 | Formulation | Balance ingredient proportions to avoid over-reliance on high-Pb/Cd components; review full analyte panel for each ingredient category in the recipe before finalization. | _Quantified magnitude data not yet ingested for mixed-meal formulation trade-offs._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming ingredients (vegetables, grains, meat/fish) plus finished product testing for full HMT&C analyte panel. | _Quantified magnitude data not yet ingested for detection-power modeling._ | — |
| 6 | Packaging and storage | Not a primary lever for jarred or pouched mixed meals under normal conditions. | — | — |

Cross-links: relevant ingredient pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

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
<!-- BEGIN: hmi-v3-drivers -->
## Ingredient drivers

Ingredients the corpus routes into this category. Contamination in a category is inherited from what goes into it, so these are where an occurrence signal originates.

- [[ingredients/meat-and-poultry|Meat and Poultry]]
- [[ingredients/meat|Meat and poultry]]
- [[ingredients/mixed-meals|Mixed Meals]]
- [[ingredients/non-rice-grains|Non Rice Grains]]
- [[ingredients/vegetables|Vegetables]]

_Routed from each ingredient's own declared use. An ingredient listed here is not a finding about this category; read its page for the occurrence evidence._
<!-- END: hmi-v3-drivers -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
7. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
8. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
9. [[sources/fda-iAs-rice-cereal-2020|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods) reporting Pb, Cd, As, and Hg detection rates and medians; mixed foods category had highest reported Cd median (0.008 mg/kg) among all baby-food categories in the review |
| 3 | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|Ibrahim et al. 2025]]. *Dietary Exposure and Health Risk Assessment of Selected Toxic and Essential Metals in Various Flavored Dairy Products*, Biological Trace Element Research | 2025 | Peer-reviewed | EG Pb, tAs, Cd, tHg, Al, Sb, Ni, Cr occurrence in Flavored dairy products (UHT milk, pasteurized milk, milk powder, yogurt, drinking yogurt, ice cream) collected from Giza governorates,... (n=180) |
| 4 | [[sources/introduction2025-concentrations-heavy-metals-processed\|Introduction 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Unknown journal | 2025 | Peer reviewed review | global As, Cd, Pb, tHg occurrence in Processed infant foods and infant formula products (n=Scoping review; multiple studies synthesized) |
| 5 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | Sample-level FDA Pb dataset for 386 processed baby foods (FY2023) covering mixed-ingredient categories; contributes to the evidence base for the 10 ppb Pb action level applied to mixtures under FDA 2025 guidance |
| 6 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FDA compliance-program tAs, Pb, Cd, and tHg dataset for baby and young-child foods from FY2009–FY2024, including mixed-meal (non-rice-specified) baby-food rows (1,944 sample/analyte rows across all categories) |
| 7 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | ICP-MS measurement of tAs, Cd, tHg, and Pb in US baby food categories including leguminous-vegetable and grain-based mixed products from the Pittsburgh market; provides detection frequency, mean, and maximum for mixed-ingredient baby foods |
| 8 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby-food products purchased Dec 2020 – Sep 2021 on the Polish market for children aged... (n=397) |
| 9 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | Sample-level FDA Pb dataset for 416 baby foods from FY2021 covering mixed-ingredient pouched and jarred products; mixed-meal products (non-rice-specified) contribute to this source's scope alongside fruit-based and vegetable-based categories |
| 10 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | ICP-OES total Al measurement in 43 Brazilian commercial salty purees (mixed-ingredient infant meals up to 2,760 µg/kg) plus in vitro bioaccessibility data; primary Al occurrence source for the non-rice mixed-meals row |
| 11 | [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|Shaltout et al. 2020]]. *Prevalence of Some Chemical Hazards in Some Meat Products*, Concepts of Dairy & Veterinary Sciences (Lupine Publishers) 3(4):000166 | 2020 | Peer-reviewed | EG Pb, Cd occurrence in 60 random meat product samples (15 each of minced meat, beef burger, sausage, luncheon) from supermarkets and shops... (n=60) |
| 12 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant and toddler TDS reporting category-level mean concentrations for Al, Sb, tAs, Cd, Cr, Ni, Sn, and V in soups/purees (Al mean 653 µg/kg) and vegetable-based ready-to-eat meals; context for mixed non-rice infant meals |
| 13 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | LC-ICP-MS speciation of Cr(VI) and total Cr in French cereal and dairy products; Cr(VI) not detected in any sample; provides Cr-VI-not-detected mechanism cascade for mixed-meal matrices containing cereal or dairy components |
| 14 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 15 | [[sources/deroma2017-prepared-meals-italy-metals\|De et al. 2017]]. *Occurrence of cadmium, lead, mercury, and arsenic in prepared meals in Italy: Potential relevance for intake assessment*, Journal of Food Composition and Analysis | 2017 | Peer-reviewed | IT Cd, Pb, tHg, tAs occurrence in Seventeen pooled prepared-meal composites collected from Italian baby food, school canteen, office canteen, fast food, duplicate-portion, vegetarian, and... (n=17) |
| 16 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 17 | [[sources/zhang2017-red-raspberry-nutrient-profile\|Zhang et al. 2017]]. *Characterization of the nutrient profile of processed red raspberries for use in nutrition labeling and promoting healthy food choices*, Nutrition and Healthy Aging | 2017 | Peer-reviewed | This market basket study characterised the nutrient content and variation in processed red raspberry (Rubus idaeus L.) products, including individually... |
| 18 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK FSA survey reporting multi-metal category-level means in savoury infant foods/dishes without meat (Al 1,995–1,999 µg/kg, tAs 15 µg/kg, iAs 7–9 µg/kg, Cd 10 µg/kg, Pb 3–5 µg/kg, Ni 66–97 µg/kg); relevant to non-rice mixed-meal category |
| 19 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 20 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 21 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | GFAAS measurement of Pb, Cd, Al, Mn, Cr, and Co in 12 mixed infant foods (cereals + milk + fruit + vegetables) from Ankara markets; provides mixed-food category means for an Eastern European/West Asian market context |
| 22 | [[sources/starska2011-noxious-elements-milk-products-poland\|Starska et al. 2011]]. *Noxious Elements in Milk and Milk Products in Poland*, Polish Journal of Environmental Studies | 2011 | Peer-reviewed | PL Pb, Cd, tHg, tAs occurrence in 483 milk and dairy product samples from all 16 Polish voivodships (2006–2007); 92% domestic production, 8% imported from... (n=483) |
| 23 | [[sources/buchet1983-belgium-duplicate-meal-metals\|Buchet et al. 1983]]. *Oral daily intake of cadmium, lead, manganese, copper, chromium, mercury, calcium, zinc and arsenic in Belgium: a duplicate meal study*, Food and Chemical Toxicology | 1983 | Peer-reviewed | BE Cd, Pb, Mn, Cu, Cr, tHg, Ca, Zn, tAs occurrence in One hundred twenty-four 24-hour duplicate meals and beverages collected from Brussels, Liege, Charleroi, and a Brussels hospital kitchen... (n=124) |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 7 sources added; 2 sections added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
