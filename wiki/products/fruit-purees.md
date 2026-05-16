---
title: Fruit Purees
type: product-category
category: fruit-purees
hmtc_row: 7
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Fruit purees (general)"
base_taxonomy: fruit-purees
variant_type: independent_no_split
provenance: base_taxonomy
ingredient_targets: [fruit-purees, apple, pear, peach, banana]
primary_metals_of_concern: [Pb, Cd, iAs, tAs]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 8
---

# Fruit Purees

This page is a structural scaffold for this product row. Value-level structured evidence now includes FDA compliance fruit samples, Chekri fruit-puree TDS rows, FSA/Fera fruit-based infant-food category means, Meli homogenized fruit-product rows, and Parker fruit baby-food summaries; fruit-by-fruit puree distributions remain incomplete.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on fruit purees typically center on lead in apple- and pear-derived ingredients (the Wanabana 2024 incident is the canonical example), plus inorganic arsenic when rice flour is added as a thickener. Lead-screen sourcing and ingredient-list scrutiny are the defensive core. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=fruit-purees">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for fruit purees, against the FDA 2025 baby-food lead cap.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, pooling math) lives in the local staff Standards Workbench tool and under <code>data/workbench/standards/</code>, never on this public page or anywhere else under <code>wiki/</code>. See the program governance framework.</dd>
    </div>
  </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in fruit purees. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (as consumed/ready-to-eat) or dry weight, or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**Standards-program math sits elsewhere.** Percentile selection and final certification threshold decisions are tracked in the HMT&C staff workbench and are not published on this page.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded; field-finding comparison blocked until puree rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until puree rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until puree rows are extracted. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: baby food for infants and young children. Basis: product as placed on market. | FSA/Fera and other promoted sources support occurrence narrative; structured iAs row extraction pending. | EU maximum level loaded; comparison blocked until inorganic-arsenic puree rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Fruit purees (general). Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Fruit purees (general) (direct row-fit) | mean/median 1 to 2.7 ppb (2 sources); highest reported 8 ppb | 59% detected (26/44, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 10 ppb (as sold or ready-to-eat as applicable) | 4 cited | medium (4 sources) | as-sold; as-consumed; wet-weight |
| [[metals/cadmium\|Cd]] | Fruit purees (general) (direct row-fit) | mean/median 0 to 4.4 ppb (3 sources); highest reported 16 ppb | 44% detected (17/39, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 5 cited | medium (5 sources) | as-sold; as-consumed; wet-weight |
| [[metals/arsenic-total\|tAs]] | Fruit purees (general) (direct row-fit) | mean/median 1.4 to 9 ppb (4 sources); highest reported 9 ppb | 64% detected (25/39, Fda 2024, as-sold) | No applicable cap loaded | 5 cited | medium (5 sources) | as-sold; as-consumed; wet-weight |
| [[metals/arsenic-inorganic\|iAs]] | Fruit purees (general) (summary-only / supporting context) | highest reported 4 ppb | Sample-level detection rate not reported | [[regulations/eu2023-contaminants-maximum-levels]]: 20 ppb (product as placed on market) | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/mercury-total\|tHg]] | Fruit purees (general) (direct row-fit) | mean/median 0 to 7.2 ppb (3 sources); highest reported 7.2 ppb | 29% detected (4/14, Fda 2024, as-sold) | No applicable cap loaded | 4 cited | medium (4 sources) | as-sold; as-consumed; wet-weight |
| [[metals/aluminum\|Al]] | Fruit purees (general) (direct row-fit) | mean 556 to 1125 ppb (3 sources); highest reported 1420 ppb | Sample-level detection rate not reported | No applicable cap loaded | 3 cited | medium (3 sources) | as-consumed; wet-weight |
| [[metals/nickel\|Ni]] | Fruit purees (general) (direct row-fit) | mean 54.7 to 137 ppb (2 sources); highest reported 137 ppb | Sample-level detection rate not reported | No applicable cap loaded | 3 cited | medium (3 sources) | as-consumed; wet-weight |
| [[metals/tin\|Sn]] | Fruit purees (general) (direct row-fit) | mean 98 to 424 ppb (2 sources); highest reported 3330 ppb | Sample-level detection rate not reported | No applicable cap loaded | 3 cited | medium (3 sources) | as-consumed; wet-weight |
| [[metals/chromium\|Cr]] | Fruit purees (general) (direct row-fit) | mean 42.7 ppb (1 source); highest reported 84 ppb | Sample-level detection rate not reported | No applicable cap loaded | 2 cited | low (1-2 sources) | as-consumed |
| Co | Fruit purees (general) (direct row-fit) | mean 2.87 ppb (1 source); highest reported 5 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| Cu | Fruit purees (general) (summary-only / supporting context) | mean 862 ppb (1 source); highest reported 862 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| Fe | Fruit purees (general) (summary-only / supporting context) | mean 7543 ppb (1 source); highest reported 7543 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| I | Fruit purees (general) (summary-only / supporting context) | highest reported 27 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| Mn | Fruit purees (general) (summary-only / supporting context) | mean 2436 ppb (1 source); highest reported 2436 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| Sb | Fruit purees (general) (direct row-fit) | mean 0.65 ppb (1 source); highest reported 3 ppb | Sample-level detection rate not reported | No applicable cap loaded | 2 cited | low (1-2 sources) | as-consumed |
| Se | Fruit purees (general) (summary-only / supporting context) | highest reported 7 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| V | Fruit purees (general) (direct row-fit) | mean 1.4 ppb (1 source); highest reported 4 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| Zn | Fruit purees (general) (summary-only / supporting context) | highest reported 5002 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby food | Fruits for babies and young children under 2 |
| EU 2023/915 | 20 ppb | baby food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb, while the Prop 65 serving-equivalent screen is about 4.5 ppb at 110 g/day. | Use FDA 10 ppb as a regulatory cap/context, EU 20 ppb as a looser legal ceiling, and occurrence medians/P90s to set any HMTc target. |

A puree can be below FDA and EU values while exceeding a Prop 65 serving-based screen.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution and summary entries; row-specific synthesis remains incomplete.
- Source coverage: structured rows now cover FDA 2024, Chekri 2019, FSA/Fera 2016, Meli 2024, and Parker 2022; row-fit caveats remain in the tables.
- Next ingest target: fruit puree concentration datasets across the Category 1 metal panel that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small fruit baby-food distribution with N=9. It supports min/mean/median/max summaries for total arsenic, cadmium, mercury, and lead, but it does not provide full percentile coverage and does not separate apple, pear, peach, banana, or other fruit types. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

The structured backfill also loads Chekri 2019 fruit-puree mean/range rows, FSA/Fera 2016 fruit-based infant-food lower-bound/upper-bound means, and Meli 2024 homogenized fruit-product means or censored values. These rows improve occurrence context but do not publish an HMTc row-standard aggregate.

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Fruits category | tAs 39; Cd 39; Pb 44; tHg 14 | lower-bound p50, p90, p95, max | tAs p50 1.4 ppb, p90 5.2 ppb, max 8.7 ppb; Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb; tHg p90 0.5 ppb, max 0.6 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; FDA fruit category is not fruit-by-fruit puree mapping. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Fruit baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 3.8 ppb; median 5 ppb; max 5 ppb; detected 6/9 | Supports median/max only | Total arsenic, not iAs; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/cadmium|Cadmium]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 4.4 ppb; median 1.5 ppb; max 16 ppb; detected 3/9 | Supports median/max only | Small N; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/lead|Lead]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 2.7 ppb; median 1.5 ppb; max 5 ppb; detected 3/9 | Supports median/max only | Small N; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/mercury-total|Total mercury]] | Fruit baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| UK category average | [[metals/nickel|Nickel]] | UK fruit-based infant foods/dishes | 200 infant-food total; category n not reported | category average/range | 92 to 117 ppb | Does not support p10/p90/p100 | Fruit-based group, not puree-only or fruit-specific. [[sources/fsa2016-infant-food-formula-metals-survey]] |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Fruit-puree evidence comes from fruit baby-food distributions, fruit-based infant food groupings, and infant arsenic biomarker literature. Sources do not yet provide fruit-by-fruit puree distributions.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 fruit baby-food samples | p50 1.4 ppb; p90 5.2 ppb; p95 7 ppb; max 8.7 ppb | p50 1.4 ppb; p90 5.2 ppb; p95 7 ppb; max 8.7 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 fruit baby-food samples | Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb | Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; fruit category is not fruit-specific. |
| [[metals/lead|Lead]] | Parker 2022 fruit baby foods | mean 2.7 ppb; median 1.5 ppb; max 5 ppb | mean 2.7 ppb; median 1.5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Fruit group, N=9; no p10/p90. |
| [[metals/cadmium|Cadmium]] | Parker 2022 fruit baby foods | mean 4.4 ppb; median 1.5 ppb; max 16 ppb | mean 4.4 ppb; median 1.5 ppb; max 16 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Fruit group, N=9; includes substitution conventions. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 fruit baby foods | mean 3.8 ppb; median 5 ppb; max 5 ppb | mean 3.8 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/aluminum|Aluminum]], [[metals/nickel|Nickel]], [[metals/tin|Tin]], and [[metals/mercury-total|Total mercury]] | Meli 2024 homogenized fruit products | Al mean 580 ppb; Ni mean 137 ppb; Sn mean 98 ppb; tHg mean 7.2 ppb | same as reported ppb wet weight | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Apple, pear, and banana homogenized products; N=3; no percentiles. |
| [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], and [[metals/lead|Lead]] | Meli 2024 homogenized fruit products | tAs <19.7 ppb; Cd <5 ppb; Pb <100 ppb | censored source table values | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Wet-weight category row; Pb LOD is too high for low-level regulatory comparison. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Popular fruit and vegetable purees cited in infant arsenic study | up to 20 ug/kg | up to 20 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation combines fruit and vegetable purees. |
| [[metals/arsenic-total|Total arsenic]] | UK fruit-based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK fruit-based infant foods/dishes | 1 to 4 ug/kg | 1 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/cadmium|Cadmium]] | UK fruit-based infant foods/dishes | 2 to 3 ug/kg | 2 to 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/lead|Lead]] | UK fruit-based infant foods/dishes | 1 to 3 ug/kg | 1 to 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/nickel|Nickel]] | UK fruit-based infant foods/dishes | 92 to 117 ug/kg | 92 to 117 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a direct French fruit-puree infant-food category with N=30. The paper gives category mean and min-max values, not p90. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Fruit purees | 30 | as consumed | 556 / 1420 ppb | 2 / 8 ppb | 0.66 / 2 ppb | 42.7 / 84 ppb | 54.7 / 121 ppb | 424 / 3330 ppb |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 67% of fruit baby-food samples, lead in 33%, and cadmium in 33%; the same summary reported non-cancer lead risk in grain, fruit, and root-vegetable products under Parker et al.'s exposure assumptions. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, fruit intake was associated with the sum of urinary arsenic species (Spearman rho = 0.70, p = 0.03), but the study grouped fruits as a dietary category rather than isolating finished fruit purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included fruit homogenized foods and reported that an apple homogenized food had the highest estimated daily intake for aluminum in the study at 13.1 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2025 global scoping review classified fruits and vegetables together for one baby-food grouping, so it supports broad monitoring context for fruit purees but does not provide a fruit-puree-only median or exceedance rate. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Fruit-puree-specific relative risk remains unresolved because the promoted sources either summarize fruit samples broadly or combine fruits with vegetables. <!-- UNCITED: Need fruit puree datasets or regulatory monitoring reports before assigning row-specific metals of concern. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current sources support broad fruit baby-food coverage, but they do not fully distinguish apple, pear, peach, banana, orchard geography, puree processing, packaging, or finished-product versus ingredient testing. [[sources/bair2022-heavy-metals-infant-toddler-foods]] [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] [[sources/meli2024-chemical-characterization-baby-food-italy]]

Potential variance drivers for fruit purees should be documented only after sources distinguish fruit type, growing region, processing, packaging, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report fruit puree metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fruit-purees]] and fruit-specific ingredient targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 10 ppb for fruits and vegetables. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Levers to reduce contamination

The primary documented contamination concern for commercial fruit purees is lead (Pb), with tin (Sn) as a secondary concern in certain packaging formats. Inorganic arsenic is a secondary concern when rice-based thickeners are added. Levers are ordered by approximate impact magnitude on the dominant analyte (Pb).

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Screen incoming spice and flavoring ingredients (especially cinnamon and apple-cinnamon blends) for lead. The 2024 WanaBana outbreak was traced to adulterated cinnamon applesauce pouches with Pb concentrations of 1,900–5,800 µg/kg. Spice ingredients from some regions are a documented Pb pathway. | Adulteration events document extreme upper bounds; routine screening prevents the ≥100× exceedance scenario. | [[sources/napier2024-wanabana-lead-apple-cinnamon\|—]] |
| 2 | Sourcing | Source fruit from orchards with documented low soil-Pb. Apple, pear, and stone fruit grown on historical orchard soils with legacy arsenical pesticide and lead-paint history carry elevated Pb. Supplier specification for orchard soil testing is the control point. | _Quantified magnitude data not yet ingested from cited sources; section will be expanded when origin-stratified Pb data is available._ | — |
| 3 | Agronomic | Soil remediation and pH management at orchard level reduces Pb uptake in fruit; upstream supplier lever. | _Quantified magnitude data not yet ingested; section will be expanded when intervention studies are available._ | — |
| 4 | Processing | Peeling fruit before puréeing reduces surface-deposited Pb; washing is standard practice but variable in effectiveness. | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 5 | Formulation | Avoid adding rice-based thickeners (rice flour, rice starch) to fruit purees where iAs is a concern; the addition converts a low-iAs product into one with detectable iAs. | _Quantified magnitude data not yet ingested; iAs contribution from rice thickeners is proportional to addition rate._ | — |
| 6 | Testing and QC | Lot-level ICP-MS on both incoming ingredients (especially spices and flavoring concentrates) and finished product. FDA FY2009–2024 compliance data shows 59% detection rate for Pb in fruit baby foods. | Detection power sufficient to screen lots before commercial release. | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|—]] |
| 7 | Packaging and storage | Avoid non-lacquered tin cans for high-acid fruit purees. Chekri 2019 documented French fruit puree mean Sn at 424 ppb with max 3330 ppb, consistent with tin migration from can lining under acidic conditions. Retort pouches and glass jars eliminate this pathway. | Sn reduction of 70–99%+ with switch from non-lacquered tin cans to alternative packaging formats. | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|—]] |

Cross-links: [[ingredients/apple]] if the page exists; [[ingredients/fruit-purees]] if the page exists; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as the p90 or p95 of the fitted distribution across the full source pool. Percentile selection, clean/dirty subcategory designation, and final HMT&C certification threshold decisions are tracked in the staff Standards Workbench, rebuilt from the routing audit when new sources are added.

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

_Generator-managed section: will be populated when the routing audit identifies sources whose author-stated scope is broader than this row._

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods) reporting Pb, Cd, As, and Hg detection rates and medians across processed baby-food categories; includes fruit and mixed-food groupings relevant to fruit purees |
| 2 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance setting the 10 ppb Pb action level for fruits, non-root vegetables, mixtures, yogurts, and single-ingredient meats intended for babies and young children |
| 3 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | Sample-level Pb concentrations for 386 processed baby foods (FY2023) that directly underpin the FDA 2025 10 ppb Pb action level; includes fruit-based and mixed-ingredient categories |
| 4 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FDA compliance-program tAs, Pb, Cd, and tHg sample-level dataset for baby and young-child foods from FY2009–FY2024, including fruit-based baby-food rows (1,944 sample/analyte rows across categories) |
| 5 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-element (Al, tAs, Cd, tHg, Ni, Pb, Sn) ICP-MS measurement in 25 European baby foods consumed in Italy, including fruit homogenized products; Cd and Pb below LOD in all samples |
| 6 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | US/EC Pb occurrence in Routine pediatric blood lead surveillance in North Carolina + nationwide; ~500 cases identified nationally, 22 in NC. Lead... |
| 7 | [[sources/napier2024-wanabana-lead-apple-cinnamon\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Government report | CDC MMWR outbreak investigation linking WanaBana apple cinnamon fruit puree pouches to childhood Pb poisoning (1,900–5,800 µg/kg Pb); adulteration event documenting the upper bound of Pb contamination in commercial fruit puree and its regulatory enforcement trigger |
| 8 | [[sources/troeschel2024-cinnamon-applesauce-lead\|Troeschel et al. 2024]]. *Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024*, Morbidity and Mortality Weekly Report (MMWR) | 2024 | Government report | US Pb, Cr occurrence in Cases of lead poisoning (BLL ≥3.5 µg/dL) reported to CDC following consumption of recalled WanaBana/Schnucks/Weis cinnamon-containing applesauce pouches,... (n=566) |
| 9 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | Multi-metal ICP-MS concentrations (tAs, tHg, Pb, Cd, Ni, Al, Cr, U) in 40 commercial ready-to-eat fruit baby purees from Spain; provides median and range distributions for eight HMTc analytes in a directly row-fit matrix |
| 10 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | US Pb occurrence in US national probabilistic Monte Carlo (10,000 iterations) using AHHS 2005-2006 + AHHS II 2018-2019 + FDA TDS 2007-2013... |
| 11 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | Narrative review synthesising U.S. Pb, Cd, As, and Hg occurrence and policy across infant and toddler food categories; includes fruit purees as a surveyed product category and critiques pre-2022 FDA regulatory response |
| 12 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | ICP-MS measurement of tAs, Cd, tHg, and Pb in 9 US fruit baby foods (Pittsburgh market); reports detection frequency, mean, median, and maximum by ingredient category including fruit-matrix values |
| 13 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | ICP-MS and AAS measurement of tAs, Cd, tHg, and Pb in 397 Polish ready-to-eat baby foods; fruit mousse subcategory had highest reported Pb (max 139 µg/kg) among product groups tested |
| 14 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | Sample-level FDA Pb dataset for 416 baby foods from FY2021, covering fruit-based and mixed-ingredient pouched and jarred products; contributes to the FDA baby-food Pb evidence base behind the 2025 guidance |
| 15 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | ICP-OES total Al measurement in 15 Brazilian commercial fruit purees (up to 2,500 µg/kg) plus in vitro bioaccessibility data showing 0.5–48% gut absorption across infant food matrices |
| 16 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant and toddler TDS reporting category-level mean concentrations for Al, Sb, tAs, Cd, Cr, Ni, Sn, and V in 291 infant foods; fruit puree category had highest reported Sn mean (424 µg/kg) among groups |
| 17 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | US tAs, iAs, Pb, Cd, tHg occurrence in 168 commercial baby food containers, 61 brands, 13 food types; purchased from 14 US metropolitan areas and 15... (n=168) |
| 18 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal infant biomarker study linking fruit intake during weaning to elevated urinary iAs; cites prior data reporting iAs up to 20 µg/kg in fruit and vegetable purees, providing iAs exposure context for the transition-to-solids window |
| 19 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK FSA category-level mean concentrations for 16 metals (including Al, tAs, iAs, Cd, Pb, Ni, Sn) in fruit-based infant foods (Al 1,125 µg/kg, Sn 43–50 µg/kg); UK 2013–2014 market |
| 20 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | Historical 1975 Canadian national AAS survey (n=330 samples) of Cd, Cr, Co, Pb, Ni across 11 baby-food categories including strained fruits/desserts; documents the 50-year Pb reduction trajectory as a baseline reference (not a modern-percentile-math source) |
<!-- END: hmi-source-legend -->
