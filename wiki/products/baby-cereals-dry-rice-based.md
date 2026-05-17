---
title: Baby Cereals / Grain Products, Dry (Rice-Based)
type: product-category
category: baby-cereals-dry-rice-based
hmtc_row: 6
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Baby cereals / grain products, dry (rice-based)"
base_taxonomy: baby-cereals-dry
variant_type: higher-contamination-sibling
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, rice-flour, rice-cereal, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-cereal-20ppb, fda-iAs-rice-cereal-100ppb]
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: baby-cereals-dry-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 59
---

# Baby Cereals / Grain Products, Dry (Rice-Based)

This page is a structural scaffold for HMTc Category 1 row 6. Quantitative evidence now includes FDA rice-cereal compliance samples, rice/rice-mix review evidence, a small grain baby-food distribution, a large U.S. baby-food lead/cadmium survey, and regulatory action-level context.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Inorganic arsenic in infant rice cereal is the highest-profile cherry-pick target in the entire HMT&C product set; the FDA 2020 100 ppb action level is the public number a plaintiff's expert anchors on. The literature shows wide cultivar, geography, and cooking-water variance, and basis (dry vs as-served) shifts values by 4-5x. Source provenance, geographic breakdown (when populated), and rinsing-and-cooking-method context are the defensive core. Compare with <a href="/products/baby-cereals-dry-non-rice">Baby Cereals Dry Non Rice</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=baby-cereals-dry-rice-based">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for rice cereal, against the FDA 2020 cap and EU 2023/915, with basis conversion explicit.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, pooling math) lives in the local staff Standards Workbench tool and under <code>data/workbench/standards/</code>, never on this public page or anywhere else under <code>wiki/</code>. See CLAUDE.md Part 19.</dd>
    </div>
  </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in rice-based dry baby cereals. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as dry weight (as sold), wet weight (as consumed/prepared), or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its limit of detection (LOD) or limit of quantification (LOQ), this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources whose LOQs, sampling periods, geographies, and analytical bases differ. Cross-source pooling, when needed for standards work, is performed in staff tooling and is not published on this page.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix and format. Partial or unknown fit means the author uses a broader category. Row-fit determines whether a source contributes direct evidence or supporting context.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. C-tier: news and press. Synthesis leans on A-tier.

**Confidence rating.** Low: 1-2 sources. Medium: 3-10 sources. High: more than 10 sources. Confidence reflects volume and agreement of evidence, not regulatory pass/fail status.

**Standards-program math sits elsewhere.** Percentile selection, clean/dirty subcategory designation, and final certification threshold decisions are tracked in the HMT&C staff workbench and are not published on this page.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 20 ug/kg Pb. Scope: dry infant cereals for children under 2. Basis: dry infant cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded; field-finding comparison blocked until structured occurrence rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]: Federal FDA final action level: 100 ug/kg iAs. Scope: all types of infant rice cereals. Basis: as sold infant rice cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for infant rice cereals only; comparison blocked until rice-cereal occurrence rows are extracted by species. | [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in rice-based, dry baby cereal. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | rice-based, dry (direct row-fit) | median 75 to 121 ppb (1 source); highest reported 323 ppb | 100% detected (105/105, Signes 2016, dry-weight) | [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]: 100 ppb (as sold infant rice cereal) | 2 cited | low (1-2 sources) | dry-weight; as-sold-or-source-reported |
| [[metals/cadmium\|Cd]] | rice-based, dry (direct row-fit) | mean/median 3 to 10.1 ppb (3 sources); highest reported 40.5 ppb | 84% detected (212/252, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 3 cited | medium (3 sources) | as-sold; as-sold-or-source-reported; mixed-or-source-reported |
| [[metals/lead\|Pb]] | rice-based, dry (direct row-fit) | median 5 to 8 ppb (2 sources); highest reported 32 ppb | 77% detected (196/256, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 20 ppb (dry infant cereal) | 3 cited | medium (3 sources) | as-sold; as-sold-or-source-reported; mixed-or-source-reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 20 ppb (FDA final guidance action level) | dry infant cereal, as sold | Dry infant cereals for children under 2; lead action level is not split by rice status |
| EU 2023/915 | 20 ppb | processed cereal-based food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 33.3 ppb | 21 CFR 101.12 dry instant infant cereal RACC of 15 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA and EU both map to 20 ppb for lead; rice status mainly changes arsenic concern and occurrence profile, not the lead ceiling. | Use 20 ppb as the lead regulatory cap/context, while treating rice as an ingredient-driver signal for iAs, Cd, and Pb occurrence. |

Rice-based cereal can sit near legal lead limits and still be a high-priority HMTc category because rice changes the broader contaminant profile.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: infant cereal datasets for rice-based dry grain products that report individual-product distributions for [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small grain baby-food concentration distribution with N=9, but the grain group is not fully equivalent to dry rice cereal; the authors report that two of three grain-product types were rice-based and that arsenic was not speciated. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 provides a much larger lead/cadmium baby-food survey and reports cereal category counts, but the primary published distribution table is for all 564 baby-food/formula samples rather than rice-cereal-only values. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Dry Infant Cereals with rice named | tAs 253; Cd 252; Pb 256; tHg 64 | lower-bound p50, p90, p95, max | tAs p50 115 ppb, p90 135 ppb, max 348 ppb; Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb; tHg p90 2.1 ppb, max 4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` and `NDb` treated as 0; arsenic is source-reported As, not iAs. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Rice-based infant cereal iAs summary | [[metals/arsenic-inorganic|Inorganic arsenic]] | Baby rice and rice cereals from EU present study plus US FDA survey | baby rice n=29/85; rice cereals n=53/105 | source-reported medians and ranges | baby rice medians 114-121 ppb; rice cereal medians 75-91 ppb; highest rice cereal value 323 ppb | Supports species-specific summary context only | Dry-weight table values; HMTc benchmark percentiles require an admitted sample-level pool. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] |
| Grain baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 10 ppb; mean 90.4 ppb; median 126 ppb; max 132 ppb; detected 9/9 | Supports median/max only | Total arsenic, not iAs; small grain group, not a rice-cereal-only distribution. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/cadmium|Cadmium]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 12 ppb; mean 25.8 ppb; median 20 ppb; max 61 ppb; detected 9/9 | Supports median/max only | Small grain group, not a rice-cereal-only distribution; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/lead|Lead]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 9.7 ppb; median 5 ppb; max 20 ppb; detected 9/9 | Supports median/max only | Small grain group, not a rice-cereal-only distribution; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/mercury-total|Total mercury]] | Grain baby foods, mostly rice-containing | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p25, p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or rice-cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-cereal contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p25, p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or rice-cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-cereal contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| FDA action level | [[metals/arsenic-inorganic|Inorganic arsenic]] | Infant rice cereal | not applicable | regulatory level | 100 ppb | Not an occurrence distribution | Regulatory action level, not measured occurrence data. [[sources/fda-iAs-rice-cereal-2020]] |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Rice-based cereal has the strongest arsenic signal in Category 1. Values include rice/rice-mix baby-food evidence, grain baby-food distributions, and regulatory action levels for infant rice cereal.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 rice-named dry infant cereal samples | p50 115 ppb; p90 135 ppb; p95 141 ppb; max 348 ppb | p50 115 ppb; p90 135 ppb; p95 141 ppb; max 348 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 rice-named dry infant cereal samples | Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb | Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; `<LOD` treated as 0. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA infant rice cereal action level | 100 ppb | 100 ppb | [[sources/fda-iAs-rice-cereal-2020]] | Regulatory action level, not occurrence distribution. |
| [[metals/lead|Lead]] | Rice/rice-mix baby foods in global scoping review | median 0.008 mg/kg | 8 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad rice/rice-mix baby-food category. |
| [[metals/arsenic-total|Arsenic]] | Rice/rice-mix baby foods in global scoping review | median 0.048 mg/kg | 48 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Review reports As; speciation may vary by included study. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 grain baby foods | mean 90.4 ppb; median 126 ppb; max 132 ppb | mean 90.4 ppb; median 126 ppb; max 132 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; total arsenic, not iAs. |
| [[metals/cadmium|Cadmium]] | Parker 2022 grain baby foods | mean 25.8 ppb; median 20 ppb; max 61 ppb | mean 25.8 ppb; median 20 ppb; max 61 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; N=9. |
| [[metals/lead|Lead]] | Parker 2022 grain baby foods | mean 9.7 ppb; median 5 ppb; max 20 ppb | mean 9.7 ppb; median 5 ppb; max 20 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; N=9. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Baby rice and rice cereals from EU present study plus US FDA survey | baby rice medians 114-121 ppb; rice cereal medians 75-91 ppb; highest rice cereal value 323 ppb | baby rice medians 114-121 ppb; rice cereal medians 75-91 ppb; max 323 ppb | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] | Source-reported dry-weight medians/ranges; HMTc benchmark percentiles require an admitted sample-level pool. The later [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] paper remains biomarker/exposure context, not occurrence evidence. |
| Dimethylarsenate and other arsenic species | Rice products commonly eaten during weaning | DMA up to 297 ug/kg | up to 297 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Organic arsenic species; not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |
| [[metals/mercury-total|Total mercury]] | Italian cereal-cream/grain products | max 0.040 mg/kg wet weight; mean 0.030 mg/kg wet weight; highest modeled EDI 0.573 ug/kg body weight per day | max 40 ppb; mean 30 ppb | [[sources/meli2024-chemical-characterization-baby-food-italy]] | N=3 small-sample context; total mercury, not methylmercury. The authors noted the maximum sample approximately equaled their derived mercury PTDI, but this is not a regulatory exceedance table. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French cereal-based infant-food category with N=17. The table does not split rice-based cereals from non-rice cereals, so the values below are relevant context but cannot be treated as rice-specific p90 evidence. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Cereal-based infant foods | 17 | as consumed | 630 / 3810 ppb | 3.13 / 8 ppb | 2.79 / 17 ppb | 23 / 125 ppb | 43 / 234 ppb | 49.2 / 83 ppb |

## Row Relationship

This row is the sibling row in the same category to [[products/baby-cereals-dry-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items; 31% of detected rice/rice-mix items exceeded the Pb maximum level used by the authors and 30% exceeded the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2022 narrative review describes rice as a key infant-food concern and cites evidence that infant urinary inorganic arsenic metabolites increased 4.5-fold after weaning with rice products. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, rice cereal intake was associated with the sum of urinary arsenic species (Spearman rho = 0.90, p = 0.03). [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Parker 2022 found the highest total arsenic values in its grain baby-food group, with N=9, 100% detection, mean 90.4 ppb, median 126 ppb, and max 132 ppb. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Meli 2024 reported a cereal-cream/grain-product mercury exposure signal in a small Italian/European-market baby-food set, but the study did not speciate methylmercury and should be used only as a row-level monitoring flag. [[sources/meli2024-chemical-characterization-baby-food-italy]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice/rice-mix concern, but they do not yet distinguish rice flour, rice cereal, rice puffs, rice origin, or arsenic speciation for this exact dry-cereal row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-based dry baby cereals should be documented only after sources distinguish rice ingredient form, sourcing geography, processing, fortification, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate rice-based products from non-rice products and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

One emerging variance driver warrants explicit attention: irrigation regime in rice sourcing. Alternate wetting and drying (AWD), the leading climate-smart rice practice, reduces grain iAs by 30 to 50 percent relative to continuous flooding but increases grain Cd, with the driest conditions exceeding the Codex Cd maximum level of 0.4 mg/kg in experimental paddies ([[sources/limmer2024-arsenic-cadmium-rice-irrigation|Limmer and Seyfferth 2024]], [[sources/seyfferth2025-rice-water-management-as-hg-cd|Seyfferth et al. 2025]]). As AWD adoption scales across South and Southeast Asian and US rice production, the metal profile of the underlying rice ingredient is shifting. Certification standards for rice-based baby cereals locked to pre-AWD baselines, which historically treated this category as primarily an arsenic story, will need revision to account for the emerging cadmium dimension. See [[synthesis/climate-metals-tradeoffs]] and [[ingredients/rice]] (irrigation-management cadmium risk section).

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]], [[ingredients/rice-flour]], and [[ingredients/rice-cereal]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

The primary contamination concern for rice-based dry baby cereals is inorganic arsenic (iAs), with cadmium (Cd) and lead (Pb) as secondary concerns. Levers are ordered by approximate impact magnitude on the dominant analyte (iAs) based on the cited evidence on this page.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Switch from US long-grain (Arkansas, Louisiana, Texas origin) to California medium-grain or Indian basmati rice ingredient. | iAs reduction approximately 2-5x based on origin-stratified occurrence data. | [[sources/cr-fsasc2014-arsenic-rice-grains\|—]] |
| 2 | Agronomic | Alternate wet-dry (AWD) irrigation at paddy level reduces grain iAs relative to continuous-flood cultivation; note that AWD substantially increases grain Cd, so this lever requires soil Cd screening before implementation. | iAs reduction approximately 50% with risk of Cd increase; trade-off management required. | [[sources/seyfferth2025-rice-water-management-as-hg-cd\|—]] |
| 3 | Processing | Percolation (high water volume, large-excess-water) cooking reduces iAs in rice grain 50-85% versus absorption cooking; effect depends on cooking-water volume and origin of grain. Applies upstream at ingredient preparation stage, not at finished-product formulation. | iAs reduction 50-85% in cooked rice matrix. | [[sources/carey2015-rice-arsenic-percolating-cooking\|—]] |
| 4 | Formulation | Dilute rice ingredient with non-rice grains (oat, corn, wheat, millet). Carey 2018 documented that EU multi-grain porridges had median iAs of 10 ppb versus 66 ppb for pure-rice porridge following implementation of EU 100 ppb iAs ML. | iAs reduction proportional to rice-to-non-rice ratio; Carey 2018 example shows approximately 85% reduction in median iAs with multi-grain formulation. | [[sources/carey2018-rice-dilution-infant-food-eu-arsenic\|—]] |
| 5 | Testing and QC | Lot-level iAs speciation by HPLC-ICP-MS on incoming rice ingredient, not finished product spot-check only. Total arsenic screening is not a substitute for iAs speciation because the iAs/tAs ratio varies by origin and processing. | Detection power sufficient to identify outlier lots before processing. | [[sources/fda-iAs-rice-cereal-2020\|—]] |
| 6 | Packaging and storage | Not applicable to this product category; no Sn migration pathway in dry cereal packaging under normal storage conditions. | — | — |

Cross-links: [[ingredients/rice]] Mitigation options; [[mitigation/rice-ias-reduction]] if the page exists.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review; it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as the p90 or p95 of the fitted distribution across the full source pool. Percentile selection, clean/dirty subcategory designation, and final HMT&C certification threshold decisions are tracked in the staff Standards Workbench, rebuilt from the routing audit when new sources are added.

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
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Measured Values And Concentration Evidence |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Matrix axis: unresolved. Format axis: unresolved. Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Distribution Context |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Measured Values And Concentration Evidence |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/arsenic2025-unknown\|Navaretnam et al. 2025]]. *Arsenic speciation using HPLC-ICP-MS in white and brown rice and health risk assessment*, Environmental Geochemistry and Health | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods) reporting Pb, Cd, As, and Hg medians by baby-food category; rice/rice-mix highest Pb median and cereals highest Cd median among baby-food groups |
| 3 | [[sources/du2025-infant-thickener-urinary-arsenic\|Du et al. 2025]]. *Heavy metal exposures in aerodigestive clinic cohort of infants with reflux or dysphagia*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA final Closer to Zero guidance setting the 20 ppb Pb action level for dry infant cereals, underpinned by FY2009–FY2024 occurrence data |
| 5 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | *[awaiting synthesis]* |
| 6 | [[sources/scott2025-brown-white-rice-arsenic\|Scott et al. 2025]]. *Arsenic content and exposure in brown rice compared to white rice in the United States*, Risk Analysis | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/seyfferth2025-rice-water-management-as-hg-cd\|Seyfferth et al. 2025]]. *Concentrations and Health Implications of As, Hg, and Cd and Micronutrients in Rice and Emissions of CH4 From Variably Flooded Paddies*, GeoHealth | 2025 | Peer-reviewed | Field study documenting the As/Cd trade-off in US rice under variable flooding regimes: drier management reduces grain iAs and Hg but substantially raises Cd, with the driest paddy exceeding CODEX Cd limits |
| 8 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | Pb occurrence in 103 Mexican foods by GF-AAS; infant rice cereal (Brand 2) returned the highest single-sample value at 1,005 ppb Pb, exceeding FAO/WHO ML fivefold |
| 9 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/efsa2024-risk-assessment-iAs-update\|EFSA 2024]]. *Update of the risk assessment of inorganic arsenic in food*, EFSA Journal | 2024 | Government report | EFSA CONTAM Panel updated iAs risk assessment establishing BMDL₀₅ of 0.06 µg/kg bw/day from skin cancer endpoint; documents EU rice iAs MLs and confirms health concern for high rice consumers including toddlers |
| 11 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | FDA FY2023 386-sample Pb dataset across all processed baby-food categories, used as the empirical basis for the January 2025 final action levels including the 20 ppb dry-cereal level |
| 12 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | Primary compliance distribution source for this row: As, Pb, Cd, and Hg in FY2009–FY2024 FDA dry infant cereals with rice named (tAs p90 135 ppb, Pb p90 19.2 ppb, Cd p90 22 ppb; n=252–256) |
| 13 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Heavy Metals Analysis in Selected Commercial Baby Foods for Infant and Toddler: Health Risk Assessment of Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 14 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-metal (Al, tAs, Cd, tHg, Ni, Pb, Sn) measurement in 25 European baby foods including cream of rice; Cd and Pb below LOD in all samples; mercury signal in cereal-cream/grain products (max 40 ppb tHg) |
| 15 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | iAs-speciated multi-metal survey (Al, As, Cd, Cr, Ni, Pb, Sn) in 18 Brazilian infant cereals by ICP-MS/HPLC-ICP-MS; rice-based pool (n=14) tAs p90 142 ppb with rice/non-rice subcategory breakdown |
| 16 | [[sources/original2020-original-a\|Alharbi et al. 2023]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition (Wiley) | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 17 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 18 | [[sources/su2023-arsenic-brown-rice-benefits-risks\|Su et al. 2023]]. *Arsenic in brown rice: do the benefits outweigh the risks?*, Frontiers in Nutrition | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 19 | [[sources/wehmeier2023-ias-rice-cola-field-method\|Wehmeier et al. 2023]]. *Detection of Inorganic Arsenic in Rice Using a Field-Deployable Method with Cola Extraction*, Analytical and Bioanalytical Chemistry (published online 23 November 2023) | 2023 | Peer-reviewed | iAs by HPLC-ICP-MS in 30 Austrian market rice and rice products (including infant rice); iAs range 60–249 ppb; 22 of 30 samples would exceed the 100 ppb infant ML; reference method validation data for the rice-cereal iAs cell |
| 20 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US-focused narrative review synthesizing Pb, Cd, As, and Hg occurrence across IandC food categories; frames rice-based products and root vegetables as highest-flagged categories; cites infant urinary As increase 4.5-fold after rice-product weaning |
| 21 | [[sources/neuwirth2022-baby-cereals-lead-arsenic\|Neuwirth et al. 2022]]. *Cereal and Juice, Lead and Arsenic, Our Children at Risk*, International Journal of Environmental Research and Public Health 19(10):5788 | 2022 | Peer-reviewed | Opinion/commentary on Pb and iAs in US baby cereals and infant juices; no independent primary data; cites Clean Label Project survey reporting iAs up to 85 ppb in infant rice cereals |
| 22 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | tAs, Cd, Pb, and tHg in 36 US baby foods by ICP-MS; grain group (n=9, mostly rice-containing) reported highest total arsenic values: mean 90.4 ppb, median 126 ppb, max 132 ppb |
| 23 | [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 24 | [[sources/signes-pastor2022-infant-elements-nhbcs\|Signes-Pastor et al. 2022]]. *Dietary Exposure to Essential and Non-essential Elements During Infants' First Year of Life in the New Hampshire Birth Cohort Study*, Exposure and Health | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 25 | [[sources/efsa2021-chronic-exposure-iAs\|EFSA 2021]]. *Chronic dietary exposure to inorganic arsenic*, EFSA Journal | 2021 | Government report | EFSA EU-wide iAs dietary exposure assessment (13,608 results, 23 countries); rice and rice-based products identified as main iAs contributor across all age classes; toddler and infant 95th-percentile exposures reach or exceed BMDL₀₁ range |
| 26 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | FDA FY2021 416-sample sample-level Pb dataset across processed baby food categories including dry infant cereals; precursor dataset to the FY2009–FY2024 multi-year compliance programme |
| 27 | [[sources/rothenberg2021-maternal-methylmercury-rice-child-neurodevelopment-china\|Rothenberg et al. 2021]]. *Maternal methylmercury exposure through rice ingestion and child neurodevelopment in the first three years: a prospective cohort study in rural China*, Environmental Health, Vol. 20, Article 50 | 2021 | Peer-reviewed | Prospective cohort (n=391 peripartum women, rural China) establishing rice ingestion as a primary maternal MeHg exposure pathway and linking prenatal rice-derived MeHg to child neurodevelopmental outcomes through 36 months |
| 28 | [[sources/sadiq-beauchemin-2021-multielemental-baby-rice-cereals\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry 99(8):742-750 | 2021 | Peer-reviewed | iAs speciation and bioaccessibility in 3 Canadian baby rice cereal brands by HPLC-ICPMS; 95–100% of As bioaccessible; As(V) dominant inorganic species; Cr(III) confirmed; Pb 62–100% bioaccessible |
| 29 | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 30 | [[sources/depaiva2020-aluminum-cereal-based-baby-foods-brazil\|de et al. 2020]]. *Aluminum content and effect of in vitro digestion on bioaccessible fraction in cereal-based baby foods*, Food Research International 131:108965 | 2020 | Peer-reviewed | Total Al and in vitro bioaccessibility in 35 Brazilian infant cereal samples across six compositions including rice-flour and multicereal variants; Al range 920–8,820 ppb; rice-containing compositions route to this row |
| 31 | [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi\|Elsheikh et al. 2020]]. *Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES*, Asian Journal of Chemistry 32(6):1273-1278 | 2020 | Peer-reviewed | Multi-element (Al, Pb, Cd, As, Mn, Ni) by ICP-OES in 57 Saudi children's-food and formula samples; Cerelac infant cereal included; extreme Al outlier in one infant formula brand flagged; Cd and As largely undetected |
| 32 | [[sources/fda-iAs-rice-cereal-2020\|FDA 2020]]. *Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry*, U.S. Food and Drug Administration, Federal Register Notice (Docket FDA-2016-D-1099) | 2020 | Government report | FDA final action level of 100 ppb iAs for infant rice cereals (dry, as sold); the operative US federal iAs regulatory threshold for this product row |
| 33 | [[sources/fda2020-iAs-rice-cereal-supporting-doc\|FDA 2020]]. *Supporting Document for Action Level for Inorganic Arsenic in Rice Cereals for Infants*, U.S. Food and Drug Administration | 2020 | Government report | *[awaiting synthesis]* |
| 34 | [[sources/gu2020-arsenic-rice-infant-food-australia\|Gu et al. 2020]]. *Arsenic Concentrations and Dietary Exposure in Rice-Based Infant Food in Australia*, International Journal of Environmental Research and Public Health 17(2):415 | 2020 | Peer-reviewed | tAs and iAs by ICP-MS in 39 Australian rice-based infant foods including rice cereal (n=12); ~75% of rice-based samples exceeded EU 100 ppb iAs ML; rice cereal mean tAs 134 ppb |
| 35 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS category-level mean and max concentrations for Al, Sb, tAs, Cd, Cr, Ni, Sn in cereal-based infant foods (n=17, as consumed); does not split rice from non-rice cereals |
| 36 | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food\|Gardener et al. 2019]]. *Lead and cadmium contamination in a large sample of United States infant formulas and baby foods*, Science of the Total Environment | 2019 | Peer-reviewed | Pb and Cd in 564 US infant formula and baby-food products by ICP-MS; full-sample distribution table (all categories combined); notes that Cd and Pb were elevated in rice-containing foods; does not publish rice-cereal-specific percentiles |
| 37 | [[sources/gardener2019-pb-cd-us-infant-formula-baby-foods\|Gardener et al. 2019]]. *Lead and cadmium contamination in a large sample of United States infant formulas and baby foods*, Science of the Total Environment | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 38 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | Cr(VI) and total Cr by LC-ICP-MS in 68 French milk, dairy, and cereal products; Cr(VI) not detected in any sample; breakfast cereals highest total Cr (mean 269 ppb); confirms food-matrix Cr is essentially Cr(III) |
| 39 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | *[awaiting synthesis]* |
| 40 | [[sources/carey2018-rice-dilution-infant-food-eu-arsenic\|Carey et al. 2018]]. *Dilution of rice with other gluten free grains to lower inorganic arsenic in foods for young children in response to European Union regulations provides impetus to setting stricter standards*, PLoS ONE | 2018 | Peer-reviewed | iAs in UK infant rice-based foods before and after EU 100 ppb ML implementation; 2017 pure baby rice porridge median 66 ppb (down from 127 ppb in 2014); multi-grain porridge median 10 ppb; non-labelled general rice cakes at 120 ppb remain a risk vector |
| 41 | [[sources/fda2018-iAs-infant-rice-cereals-fy2018\|FDA 2018]]. *Fiscal Year 2018 Arsenic in Infant Rice Cereals Assignment Data*, U.S. Food and Drug Administration | 2018 | Government report | iAs by speciation ICP-MS in 149 US infant rice cereals (rice as only grain); mean iAs 85 ppb, range 22–142 ppb; all samples below FDA proposed 100 ppb action level; primary empirical foundation for that action level |
| 42 | [[sources/signes-pastor2018-infant-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' Dietary Arsenic Exposure During Transition to Solid Food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | NHBCS cohort (n=15 infants) documenting 49% increase in urinary iAs and 480% increase in urinary DMA at weaning; rice cereal intake correlated with sum of urinary arsenic species at Spearman rho = 0.90 |
| 43 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Infant biomarker study linking weaning solid-food introduction to elevated urinary iAs and organic arsenic species; cites iAs up to 323 ppb and DMA up to 297 ppb in rice products eaten during weaning (cross-reference of earlier source page for same paper as row 27) |
| 44 | [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf\|Chiger et al. 2017]]. *Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment*, Abt Associates report prepared for Healthy Babies Bright Futures | 2017 | Agency report | *[awaiting synthesis]* |
| 45 | [[sources/signes-pastor2017-infant-arsenic-rice-weaning\|Signes-Pastor et al. 2017]]. *Inorganic arsenic in rice-based products for infants and young children*, PLOS ONE | 2017 | Peer-reviewed | iAs by HPLC-ICP-MS in 73 rice-based infant/toddler products (Spain/UK/Italy); infant rice cereal means 115–180 ppb; dietary exposure modeling shows iAs intake exceeding health benchmarks in infants consuming rice as primary cereal |
| 46 | [[sources/brombach2017-methylmercury-european-commercial-rice\|C-C et al. 2016]]. *Methylmercury varies more than one order of magnitude in commercial European rice*, Food Chemistry | 2016 | Peer-reviewed | tHg and MeHg by SPE-HPLC-CV-AFS in 87 European commercial rice products including 9 baby-food rice items; baby-rice mean MeHg 1.71 ppb; not significantly different from other rice; MeHg/tHg 71% mean across all samples |
| 47 | [[sources/carignan2016-arsenic-infant-rice-cereal-commentary\|Carignan et al. 2016]]. *Potential Exposure to Arsenic from Infant Rice Cereal*, Annals of Global Health, Vol. 82, No. 1 | 2016 | Peer-reviewed | Dartmouth group commentary estimating per-serving infant iAs exposure from rice cereal at typical introduction-of-solids ages; argues pre-action-level concentrations exceeded chronic dietary reference values; supported FDA CTZ rulemaking process |
| 48 | [[sources/fda2016-arsenic-rice-cereal-analytic-results\|FDA 2016]]. *Analytical Results: Inorganic Arsenic in Infant/Toddler Foods (2016)*, US Food and Drug Administration | 2016 | Government dataset | *[awaiting synthesis]* |
| 49 | [[sources/fda2016-arsenic-rice-risk-assessment\|FDA 2016]]. *Arsenic in Rice and Rice Products Risk Assessment Report*, US Food and Drug Administration | 2016 | Government report | *[awaiting synthesis]* |
| 50 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | Sample-level iAs with arsenic speciation in US infant rice cereals (n=76, rice-only grain) and multigrain-with-rice (n=6); structured data extracted to `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` |
| 51 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK multi-metal (Al, tAs, iAs, Cd, Pb, tHg, Ni, Sn) category-level survey in 297 samples; cereal-based infant foods: tAs 10 ppb, iAs 5–6 ppb, Cd 3 ppb, Ni 124–127 ppb; rice vs non-rice not separated |
| 52 | [[sources/shibata2016-arsenic-rice-cereal-risk-assessment-us\|Shibata et al. 2016]]. *Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S.*, International Journal of Environmental Research and Public Health 13(4):361 | 2016 | Peer-reviewed | Monte Carlo risk model for cumulative iAs exposure in US infants 4–24 months from rice cereal, formula, water, and other foods; not a primary concentration source; modeled rice-cereal iAs range 23–283 ppb |
| 53 | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants\|Signes-Pastor et al. 2016]]. *Inorganic arsenic in rice-based products for infants and young children*, Food Chemistry | 2016 | Peer-reviewed | Direct iAs occurrence in EU and US baby rice and rice cereals; baby rice medians 114–121 ppb; rice cereal medians 75–91 ppb; highest rice cereal value 323 ppb; primary iAs occurrence source for rice cereal and teething snack rows |
| 54 | [[sources/carey2015-rice-arsenic-percolating-cooking\|Carey et al. 2015]]. *Evaluating the effectiveness of filters and cooking procedures for reducing inorganic arsenic (iAs) in rice in the context of providing healthy food for infants*, PLOS ONE | 2015 | Peer-reviewed | iAs mitigation by cooking method in 41 rice samples by HPLC-ICP-MS; percolating/filter method reduces iAs 50–85% vs raw grain; absorption cooking retains ~90%; geographic origin modulates baseline (Bangladesh and US long-grain highest) |
| 55 | [[sources/cr-fsasc2014-arsenic-rice-grains\|CR 2014]]. *Analysis of Arsenic in Rice and Other Grains*, Consumer Reports Food Safety and Sustainability Center | 2014 | Industry | B-tier: iAs in 697-sample composite (FDA data + CR 2012 + 2014); documents geographic origin effect (US Arkansas/Louisiana/Texas highest; California basmati lowest) and that alternative grains carry substantially less iAs than rice |
| 56 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | Pb, Cd, Al, Mn, Cr, Co by GFAAS in 63 Turkish infant foods (n=23 cereal-based, n=28 milk-based, n=12 mixed); Cd significantly higher in cereal-based vs milk-based; Al unit ambiguity flagged in source page |
| 57 | [[sources/fda2013-ias-rice-products-sampling\|FDA 2013]]. *Analytical Results from Inorganic Arsenic in Rice and Rice Products Sampling, September 2013*, U.S. Food and Drug Administration | 2013 | Regulation | iAs survey in ~1,300 US rice and rice-product samples; infant cereal (n=69) average 1.8 µg iAs/serving; largest US market survey of rice iAs at time of publication; geographic origin effect confirmed |
| 58 | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|Jackson et al. 2012]]. *Arsenic concentration and speciation in infant formulas and first foods*, Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 | 2012 | Peer-reviewed | Dartmouth group iAs speciation by HPLC-ICP-MS in US infant formulas and first foods; rice-containing formulas substantially higher iAs than dairy-based; As(V) dominant inorganic species; foundational speciation reference for infant-food As |
| 59 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | Historical baseline: Cd, Cr, Pb, Ni, Co in 330 Canadian baby-food samples (1975 market) by AAS; LOD 10 ppb precludes modern percentile math; principal value is documenting the ~75× Pb reduction trajectory from 1980 (30 ppb mean prepared formula) to present |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

_Pending synthesis. Public-record regulatory events for this product category will be summarized here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._


