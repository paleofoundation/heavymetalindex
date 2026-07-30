---
title: Baby Cereals / Grain Products, Dry (Non-Rice)
type: product-category
category: baby-cereals-dry-non-rice
hmtc_row: 5
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Baby cereals / grain products, dry (non-rice)"
base_taxonomy: baby-cereals-dry
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, non-rice-grains, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-cereal-20ppb]
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: baby-cereals-dry-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 39
---

# Baby Cereals / Grain Products, Dry (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 5. FDA compliance samples now provide a direct non-rice dry-cereal lower-bound distribution, while broader cereal and infant-food sources remain useful context.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on non-rice cereal typically center on lead and cadmium in grain bases (oats, wheat, barley) where soil-uptake and harvest-year variance is wide. The Methodology section's basis preservation rule (dry cereal vs prepared) is the defensive core. Compare with <a href="/products/baby-cereals-dry-rice-based">Baby Cereals Dry Rice Based</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=baby-cereals-dry-non-rice">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for non-rice cereal grains, against the FDA 2025 dry-cereal cap.</dd>
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

This page reports what the cited sources say about heavy-metal concentrations in non-rice grain-based dry baby cereals. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as dry weight (as sold), wet weight (as consumed/prepared), or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its limit of detection (LOD) or limit of quantification (LOQ), this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources whose LOQs, sampling periods, geographies, and analytical bases differ. Cross-source pooling, when needed for standards work, is performed in staff tooling and is not published on this page.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix and format. Partial or unknown fit means the author uses a broader category. Row-fit determines whether a source contributes direct evidence or supporting context.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. C-tier: news and press. Synthesis leans on A-tier.

**Confidence rating.** Low: 1-2 sources. Medium: 3-10 sources. High: more than 10 sources. Confidence reflects volume and agreement of evidence, not regulatory pass/fail status.

**HMT&C threshold-setting is separate.** Certification thresholds are developed under the program at heavymetaltested.com, not on this page. See the [methodology](/methodology) for the wiki/HMT&C separation.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 20 ug/kg Pb. Scope: dry infant cereals for children under 2. Basis: dry infant cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded; field-finding comparison blocked until structured occurrence rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-rice grain-based, dry baby cereal. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | non-rice grain-based, dry (summary-only / supporting context) | highest reported 6 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-sold-or-source-reported |
| [[metals/cadmium\|Cd]] | non-rice grain-based, dry (direct row-fit) | mean/median 3 to 15 ppb (3 sources); highest reported 62.9 ppb | 96% detected (24/25, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 3 cited | medium (3 sources) | as-sold; as-sold-or-source-reported; mixed-or-source-reported |
| [[metals/lead\|Pb]] | non-rice grain-based, dry (direct row-fit) | median 4 to 7 ppb (2 sources); highest reported 9.9 ppb | 84% detected (21/25, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 20 ppb (dry infant cereal) | 3 cited | medium (3 sources) | as-sold; as-sold-or-source-reported; mixed-or-source-reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 20 ppb (FDA final guidance action level) | dry infant cereal, as sold | Dry infant cereals for children under 2; FDA does not split the lead action level by rice versus non-rice |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | processed cereal-based food as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 33.3 ppb | 21 CFR 101.12 dry instant infant cereal RACC of 15 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA and EU both map to 20 ppb for lead; the Prop 65 value is a one-serving exposure conversion and would fall with higher daily intake. | Use 20 ppb as an external regulatory cap/context; occurrence percentiles decide whether HMTc can justify a lower standard. |

A 20 ppb cereal can be legally aligned while still not representing best-in-class occurrence if the category median is lower.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution caveats; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: infant cereal datasets for non-rice dry grain products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice dry cereal HMTc the lower-end of the literature distribution. Parker 2022 provides a small grain baby-food distribution, but the authors report that two of three grain-product types were rice-based, so the table is more appropriate as a grain-category warning than a non-rice benchmark. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Dry Infant Cereals with no rice named | tAs 25; Cd 25; Pb 25; tHg 9 | lower-bound p50, p90, p95, max | tAs p50 12.9 ppb, p90 37.8 ppb, max 54.8 ppb; Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb; tHg all lower-bound 0 | Supports source-scope lower-bound distribution after review for tAs, Cd, and Pb; Hg subset is small | Machine-extracted; `<LOD` and `NDb` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Grain baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 10 ppb; mean 90.4 ppb; median 126 ppb; max 132 ppb; detected 9/9 | Not for non-rice threshold setting | Total arsenic, not iAs; row fit is weak because the grain group is mostly rice-containing. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/cadmium|Cadmium]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 12 ppb; mean 25.8 ppb; median 20 ppb; max 61 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/lead|Lead]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 9.7 ppb; median 5 ppb; max 20 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or non-rice cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice cereal lower-contamination row aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or non-rice cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice cereal lower-contamination row aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Non-rice cereal evidence remains mixed because many infant cereal sources combine rice and non-rice cereals. Values below are included only with scope caveats.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | p50 12.9 ppb; p90 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | p50 12.9 ppb; p90 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb | Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; product name does not prove absence of rice ingredients. |
| [[metals/cadmium|Cadmium]] | Processed baby-food cereal category in global scoping review | median 0.013 mg/kg | 13 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad cereal category; may include rice and non-rice products. |
| [[metals/cadmium|Cadmium]] | Parker 2022 grain baby foods | mean 25.8 ppb; median 20 ppb; max 61 ppb | mean 25.8 ppb; median 20 ppb; max 61 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/lead|Lead]] | Parker 2022 grain baby foods | mean 9.7 ppb; median 5 ppb; max 20 ppb | mean 9.7 ppb; median 5 ppb; max 20 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/arsenic-total|Total arsenic]] | UK cereal-based infant foods/dishes | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/lead|Lead]] | UK cereal-based infant foods/dishes | 0 to 1 ug/kg | 0 to 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/nickel|Nickel]] | UK cereal-based infant foods/dishes | 124 to 127 ug/kg | 124 to 127 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |

## Gardener 2019 Cereal Exceedance Context

Gardener 2019 includes 30 baby cereal products in the solid-food exceedance tables. These rows support cereal-level risk context, but they still do not split rice from non-rice cereals and do not provide cereal-specific concentration percentiles.

| Analyte | Broad cereal row | Scenario | Result | Standards use |
| --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | Baby cereals | FDA daily lead limit at 300 calories | 1/30, 3.33% exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/lead|Lead]] | Baby cereals | California Prop 65 lead daily limit at 300 calories | 13/30, 43.33% exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/cadmium|Cadmium]] | Baby cereals | WHO cadmium daily limit for a 9 kg baby at 300 calories | 0/30 exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/cadmium|Cadmium]] | Baby cereals | California Prop 65 cadmium daily limit at 300 calories | 0/30 exceeded | Exceedance context only; not a concentration percentile. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French cereal-based infant-food category with N=17, including baby cereals and infant biscuit/cereal products. The source does not split rice-based from non-rice cereal products, so these rows are context until the individual food list is mapped. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Cereal-based infant foods | 17 | as consumed | 630 / 3810 ppb | 3.13 / 8 ppb | 2.79 / 17 ppb | 23 / 125 ppb | 43 / 234 ppb | 49.2 / 83 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/baby-cereals-dry-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that cereals had the highest median Cd concentration among baby-food groups in the review at 0.013 mg/kg, and 17% of detected cereal items exceeded the Cd maximum level used by the authors. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats, which makes non-rice cereal subtyping necessary before treating this row as a clean benchmark. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Non-rice-specific risk remains unresolved because the promoted review's cereal grouping is broader than this row and may include products not cleanly separable by grain type. <!-- UNCITED: Need infant cereal or dry grain-product datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted sources support cereal-level monitoring but do not yet distinguish oat, wheat, corn, quinoa, multigrain, fortification premix, or non-rice-only products. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for non-rice dry baby cereals should be documented only after sources distinguish grain type, fortification, sourcing geography, processing, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate non-rice grain products from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]] and [[ingredients/non-rice-grains]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

The primary contamination concern for non-rice dry baby cereals is cadmium (Cd) in grain-based ingredients (oats, wheat, quinoa), with lead (Pb) as a secondary concern. Inorganic arsenic is substantially lower in non-rice grain products than in rice-based products.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify Cd-screened grain ingredients from regions with low soil Cd (avoid high-Cd European soils for oats and wheat). Gardener 2019 documented elevated Cd in baby foods containing quinoa, wheat, and oats versus lower-Cd grain bases. | No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested. | — |
| 2 | Agronomic | Soil pH liming and soil amendment at grain-growing level reduces Cd uptake in oats and wheat; this is an upstream supplier lever, not a finished-product formulation lever. | No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested. | — |
| 3 | Processing | Milling removes the bran layer, which concentrates Cd relative to endosperm. Whole-grain formulations carry higher Cd loads than refined-grain equivalents. | No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested. | — |
| 4 | Formulation | Grain blend optimization to reduce average Cd contribution; avoid disproportionate reliance on high-Cd grains in the blend. | No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested. | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming grain ingredients. Total arsenic screening by itself does not characterize cadmium and lead; the full analyte panel is required. | No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested. | — |
| 6 | Packaging and storage | Not applicable to this product category as a primary lever; no Sn migration pathway in dry cereal/snack packaging under normal storage conditions. | — | — |

Cross-links: [[ingredients/oats]] if the page exists; [[ingredients/wheat]] if the page exists; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review; it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for dry infant cereals. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Distribution Context |
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | (context only) |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Matrix axis: unresolved. Format axis: unresolved. Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Distribution Context |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Sources |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

The 9 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Parker GH, Gillie CE, Miller JV, Badger DE, and Kreider ML (2022). *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*. Toxicology Reports. [https://doi.org/10.1016/j.toxrep.2022.02.001](https://doi.org/10.1016/j.toxrep.2022.02.001). Peer-reviewed, A-tier. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk|Source record]]
2. Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. (2019). *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*. Journal of Food Composition and Analysis. [https://doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002). Peer-reviewed, A-tier. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Source record]]
3. Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. (2025). *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*. Nutrition Reviews. [https://doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138). Peer-reviewed, A-tier. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Source record]]
4. Napier MD and et al. (2024). *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*. MMWR Morbidity and Mortality Weekly Report. [https://doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2). Government report, A-tier. [[sources/napier2024-wanabana-lead-apple-cinnamon|Source record]]
5. Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. (2024). *Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024*. Morbidity and Mortality Weekly Report (MMWR). [https://doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2). Government report, A-tier. [[sources/troeschel2024-cinnamon-applesauce-lead|Source record]]
6. U.S. Food and Drug Administration (2024). *FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination*. FDA Import Alerts. [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html). Regulatory, A-tier. [[sources/fda-import-alert-99-42-spice-lead|Source record]]
7. Jane Houlihan and Charlotte Brody (2019). *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*. Healthy Babies Bright Futures. [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food). Nonprofit, B-tier. [[sources/houlihan2019-hbbf-whats-in-baby-food|Source record]]
8. U.S. Food and Drug Administration (2025). *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*. U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program. [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children). Government guidance, A-tier. [[sources/fda-ctz-Pb-babyfood-2025|Source record]]
9. U.S. Food and Drug Administration (2020). *Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry*. U.S. Food and Drug Administration, Federal Register Notice (Docket FDA-2016-D-1099). [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants). Government report, A-tier. [[sources/fda-iAs-rice-cereal-2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chronchol2026-dairy-free-infant-porridges-poland\|Chronchol et al. 2026]]. *Trace Element Intake from Dairy-Free Infant Porridges*, Nutrients 2026, 18, 333 | 2026 | Peer-reviewed | Pb, Cd, and Hg in 105 samples of Polish commercial dairy-free infant porridges by ICP-AES and Hg-AAS; all concentrations low (Pb 2–4 ppb wet weight, Cd <1–3 ppb) and within EU limits; contributes directly to the non-rice the lower-end of the literature distribution evidence |
| 2 | [[sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals\|Mgbemena et al. 2026]]. *Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria*, Scientific Reports 16: 13751 | 2026 | Peer-reviewed | NG Pb, Cd, Ni, Cr, Cu occurrence in 8 Baby Milk (milk-based powder) and 12 Infant Formulae (cereal-based) products purchased from supermarket and grocery retailers within... (n=20) |
| 3 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 4 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods); cereals highest Cd median among baby-food groups (0.013 mg/kg) with 17% exceedance rate; rice/non-rice not consistently separated within cereal grouping |
| 5 | [[sources/du2025-infant-thickener-urinary-arsenic\|Du et al. 2025]]. *Heavy metal exposures in aerodigestive clinic cohort of infants with reflux or dysphagia*, Scientific Reports | 2025 | Peer-reviewed | US tAs, iAs, Pb, tHg, Cd, Sn, Cr, Ni, U occurrence in Infants under 1 year of age with reflux or oropharyngeal dysphagia seen at Boston Children's Hospital aerodigestive clinic,... (n=56) |
| 6 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA final Closer to Zero guidance setting the 20 ppb Pb action level for dry infant cereals (rice and non-rice); applicable regulatory ceiling for this row |
| 7 | [[sources/hbbf2025-rice-arsenic-cadmium-145-samples\|Houlihan et al. 2025]]. *What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try*, Healthy Babies Bright Futures (HBBF) report | 2025 | Government report | US tAs, iAs, Cd, Pb, tHg occurrence in 211 retail grain containers (145 rice samples across 105 brands and 66 alternative-grain samples) purchased in 20 US... (n=211) |
| 8 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences 42(2): 614-620 | 2024 | Peer-reviewed | IR Pb, Cd occurrence in 18 brands of powdered infant milk formula and 7 brands of infant cereals/baby foods collected by census from... (n=25) |
| 9 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | FDA FY2023 386-sample Pb dataset across all processed baby-food categories; guidance-basis empirical foundation for the 20 ppb dry-cereal action level applicable to both rice and non-rice rows |
| 10 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | Primary compliance distribution source for this row: As, Pb, Cd, and Hg in FY2009–FY2024 FDA dry infant cereals with no rice named (n=25); tAs p90 37.8 ppb, Pb p90 8 ppb, Cd p90 27.4 ppb |
| 11 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-metal (Al, tAs, Cd, tHg, Ni, Pb, Sn) in 25 European baby foods; Cd and Pb below LOD in all samples; broader baby-food context; cereal compositions not split by rice vs non-rice in this study |
| 12 | [[sources/soni2024-additives-contaminants-infant-foods-review\|Soni et al. 2024]]. *Food additives and contaminants in infant foods: a critical review of their health risk, trends and recent developments*, Food Production, Processing and Nutrition | 2024 | Peer-reviewed | US/EU/IN Al occurrence in Narrative review of food additives and contaminants in infant foods; no original measurements. Synthesizes EFSA opinions, US FDA... |
| 13 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | iAs-speciated multi-metal survey in 18 Brazilian infant cereals by ICP-MS/HPLC-ICP-MS; non-rice cereal subcategory (n=4: corn, oatmeal, multi-grain) with exact author-scope matrix and format classification |
| 14 | [[sources/vincevica-gaile2024-libya-infant-toddler-food-arsenic\|Vincevica-Gaile et al. 2024]]. *Total Concentration of Arsenic in Commercial Infant/Toddler Food: A Preliminary Study in Libya*, BIO Web of Conferences | 2024 | Peer-reviewed | LY tAs occurrence in Commercial infant/toddler foods purchased in supermarkets in Sabha, Tripoli, and Benghazi, Libya. (n=36) |
| 15 | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals\|Alharbi et al. 2023]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2023 | Peer-reviewed | As, Cd, and Pb by ICP-MS in 111 Saudi baby food products (2020 NFMP); cereal-based meals (n=33) mean Pb 35.2 ppb and Cd 5.18 ppb dry weight; includes wheat-based and non-rice cereal products |
| 16 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | US Pb occurrence in US national probabilistic Monte Carlo (10,000 iterations) using AHHS 2005-2006 + AHHS II 2018-2019 + FDA TDS 2007-2013... |
| 17 | [[sources/price2023-lead-biokinetic-baby-food-us\|Price et al. 2023]]. *Biokinetic Modeling of Lead Exposures in Baby Food Consuming U.S. Infants (0–7 Years)*, Foods 12(9):1782 | 2023 | Peer-reviewed | IEUBK biokinetic model estimating blood Pb distributions in US infants 0–7 years from multi-pathway exposure; supports FDA CTZ lead action-level context for dry infant cereals; not a primary food concentration dataset |
| 18 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 19 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US-focused narrative review synthesizing Pb, Cd, As, and Hg occurrence across IandC food categories; notes Cd elevated in wheat- and oat-containing foods; supports evidence-gap framing for non-rice cereal subtyping |
| 20 | [[sources/cereal2013-cereal-juice-lead-arsenic\|Neuwirth 2022]]. *Cereal and Juice, Lead and Arsenic, Our Children at Risk: A Call for the FDA to Re-Evaluate the Allowable Limits of Lead and Arsenic That Children May Ingest*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | Cited reference from International Journal of Environmental Research and Public Health |
| 21 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 22 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US tAs, Cd, tHg, Pb occurrence in 36 baby and toddler food samples (n=9 per ingredient category: fruit, grain, leguminous vegetable, root vegetable) purchased from... (n=36) |
| 23 | [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US tAs, Cd, tHg, Pb occurrence in 36 baby and toddler food samples (n=9 per ingredient category: fruit, grain, leguminous vegetable, root vegetable) purchased from... (n=36) |
| 24 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby-food products purchased Dec 2020 – Sep 2021 on the Polish market for children aged... (n=397) |
| 25 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | FDA FY2021 416-sample Pb dataset across all processed baby-food categories including dry infant cereals; precursor to the FY2009–FY2024 multi-year TEP compliance dataset |
| 26 | [[sources/lodhi2021-methyl-inorganic-mercury-infant-formula\|Lodhi et al. 2021]]. *Evaluation of the Methyl and Inorganic Mercury in Infant Formula Milk and Cereals Samples: Estimated Risk Assessment in Children under 2.0 Years*, ACS Food Science & Technology | 2021 | Peer-reviewed | PK tHg, MeHg occurrence in 20 infant formula milk samples (starting, follow-on, grown-up) and 10 baby cereal samples purchased in Hyderabad, Pakistan (n=30) |
| 27 | [[sources/mielech2021-contamination-food-infants-toddlers\|Mielech et al. 2021]]. *Assessment of the Risk of Contamination of Food for Infants and Toddlers*, Nutrients | 2021 | Review | PL/NO/US Pb, Cd, tAs, iAs, tHg occurrence in Narrative literature review of 83 publications (2004–2021, mainly October 2020–March 2021 search window) on contaminants in foods for... |
| 28 | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry | 2021 | Peer-reviewed | CA tAs, iAs, Cr, Pb, Cd, Se occurrence in Three commercial baby rice cereal brands purchased in Kingston, Ontario, Canada; ages 6 months and up; n=6 replicates... (n=3) |
| 29 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 30 | [[sources/depaiva2020-aluminum-cereal-based-baby-foods-brazil\|de et al. 2020]]. *Aluminum content and effect of in vitro digestion on bioaccessible fraction in cereal-based baby foods*, Food Research International 131:108965 | 2020 | Peer-reviewed | Total Al and in vitro bioaccessibility in 35 Brazilian infant cereals; corn-flour-only composition (non-rice) routes to this row; corn-flour cereal Al mean 920 ppb, the lowest of all compositions tested |
| 31 | [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi\|Elsheikh et al. 2020]]. *Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES*, Asian Journal of Chemistry 32(6):1273-1278 | 2020 | Peer-reviewed | Multi-element (Al, Pb, Cd, As) in 57 Saudi children's-food and formula samples; Cerelac infant cereal included as partial-fit non-rice context; rice/non-rice composition within Cerelac not confirmed |
| 32 | [[sources/igweze2020-al-as-hg-infant-formula-nigeria\|Igweze et al. 2020]]. *Public Health and Paediatric Risk Assessment of Aluminium, Arsenic and Mercury in Infant Formulas Marketed in Nigeria*, Sultan Qaboos University Medical Journal 20(1):e63-e70 | 2020 | Peer-reviewed | Al, tAs, and tHg in 26 Nigerian infant formula samples including cereal-based (n=7) and corn-meal (n=10) categories; non-rice cereal-based context; cereal-based mean tAs 680 ppb notably elevated vs milk-based |
| 33 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS category-level Al, Sb, tAs, Cd, Cr, Ni, Sn means and maxima for cereal-based infant foods (n=17, as consumed); includes rice and non-rice products without splitting; context until individual food list is mapped |
| 34 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
| 35 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | Cr(VI) not detected in any of 68 French milk, dairy, and cereal products by LC-ICP-MS; confirms food-matrix chromium is essentially Cr(III); total Cr breakfast-cereal mean 269 ppb; extends by mechanism to non-rice infant cereal matrices |
| 36 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | US tAs, iAs, Pb, Cd, tHg occurrence in 168 commercial baby food containers, 61 brands, 13 food types; purchased from 14 US metropolitan areas and 15... (n=168) |
| 37 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 38 | [[sources/carey2018-rice-dilution-infant-food-eu-arsenic\|Carey et al. 2018]]. *Dilution of rice with other gluten free grains to lower inorganic arsenic in foods for young children in response to European Union regulations provides impetus to setting stricter standards*, PLoS ONE | 2018 | Peer-reviewed | GB/EU iAs, tAs concentrations (n=106) |
| 39 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Infant biomarker cohort linking rice cereal to urinary As increase at weaning; cites iAs up to 20 ppb in mixed-cereal weaning foods and up to 49 ppb in mixed cereals as the non-rice cereal iAs reference range |
| 40 | [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf\|Chiger et al. 2017]]. *Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment*, Abt Associates report prepared for Healthy Babies Bright Futures | 2017 | Agency report | US iAs occurrence in U.S. population modelling: 27,989,207 children aged 0-6 years (U.S. Census Bureau, 2015). Exposure scenarios use NHANES/WWEIA 2003-2010, FITS... |
| 41 | [[sources/fda2016-arsenic-rice-cereal-analytic-results\|FDA 2016]]. *Analytical Results: Inorganic Arsenic in Infant/Toddler Foods (2016)*, US Food and Drug Administration | 2016 | Government dataset | US iAs concentrations (n=547) |
| 42 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | Sample-level iAs with speciation in US non-rice infant cereals (n=30, oats/corn/wheat/multigrain with no rice); highest iAs 6 ppb; structured data extracted to `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` |
| 43 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK multi-metal category-level survey; cereal-based infant foods tAs 10 ppb, iAs 5–6 ppb, Cd 3 ppb, Pb 0–1 ppb, Ni 124–127 ppb; rice status not isolated within this category |
| 44 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 45 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 46 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 47 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | Pb, Cd, Al, Mn, Cr, Co in 63 Turkish infant foods (n=23 cereal-based wheat/rice/corn/oat); cereal-based group Cd significantly higher than milk-based (8.88 vs 0.96 ppb); rice/non-rice composition not enumerated per sample |
| 48 | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|Jackson et al. 2012]]. *Arsenic concentration and speciation in infant formulas and first foods*, Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 | 2012 | Peer-reviewed | Dartmouth group iAs speciation in US infant formulas and first foods by HPLC-ICP-MS; non-rice first foods included alongside rice cereal; provides speciation context for distinguishing rice-based from non-rice arsenic profiles |
| 49 | [[sources/cot2003-infant-food-metals\|Committee on Toxicity of 2003]]. *COT statement on a survey of metals in infant food*, Committee on Toxicity statement | 2003 | Government report | GB Al, Sb, tAs, Cd, Cr, Cu, Pb, tHg, Ni, Se, Sn, Zn occurrence in Commercial UK baby foods and formulae, including infant formulae, manufactured baby foods, desserts, rusks, and infant drinks, surveyed... (n=189) |
| 50 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | Historical baseline: Cd, Cr, Pb, Ni, Co in 330 Canadian baby-food samples (1975 market) including cereal category by AAS; LOD 10 ppb precludes modern percentile math; context for 50-year trajectory documentation |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-contradiction-watch -->
## Contradiction watch

The living-review detector has flagged **7** contributing source value(s) that disagree with the current synthesis by more than 2× the tolerance band. A re-synthesis pass for the affected (ingredient, metal) cell(s) is warranted; the synthesis claim is not retracted by this flag.

| Metal | Source | Reported value | Synthesis band | Spread | Direction |
| --- | --- | --- | --- | --- | --- |
| Pb | [[sources/chronchol2026-dairy-free-infant-porridges-poland]] | 3 ppb | 53.8 (typical) / 255 (P95) | 17.93× | below-cohort-median |
| Cd | [[sources/chronchol2026-dairy-free-infant-porridges-poland]] | 1.75 ppb | 21.9 (typical) / 28 (P95) | 12.51× | below-cohort-median |
| Pb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | 8 ppb | 53.8 (typical) / 255 (P95) | 6.72× | below-cohort-median |
| Cd | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals]] | 5.18 ppb | 21.9 (typical) / 28 (P95) | 4.23× | below-cohort-median |
| tAs | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals]] | 11.1 ppb | 37.8 (typical) / 179 (P95) | 3.41× | below-cohort-median |
| Cd | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals]] | 8.76 ppb | 21.9 (typical) / 28 (P95) | 2.5× | below-cohort-median |
| tAs | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals]] | 15.5 ppb | 37.8 (typical) / 179 (P95) | 2.44× | below-cohort-median |

Full per-flag audit at `data/evidence/synthesis-contradictions.csv`. Trigger is documented in [[../CLAUDE|CLAUDE.md § Part 9]].
<!-- END: hmi-contradiction-watch -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [57c298553](https://github.com/paleofoundation/heavymetalindex/commit/57c298553) | 2026-05-28 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [8530c3e2e](https://github.com/paleofoundation/heavymetalindex/commit/8530c3e2e) | 2026-05-17 | major | 6 sources added; narrative text revised |
| [4e2cdd0cc](https://github.com/paleofoundation/heavymetalindex/commit/4e2cdd0cc) | 2026-05-17 | minor | Narrative text revised |
| [ed8e81cd1](https://github.com/paleofoundation/heavymetalindex/commit/ed8e81cd1) | 2026-05-14 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
