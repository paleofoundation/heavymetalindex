---
title: Fruit Juice (Not Canned)
type: product-category
category: fruit-juice-not-canned
hmtc_row: 14
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Fruit juice (not canned)"
base_taxonomy: fruit-juice
variant_type: independent_scope_qualified
provenance: base_taxonomy
scope_exclusions: [canned-fruit-juice]
ingredient_targets: [fruit-juice, apple-juice, grape-juice]
primary_metals_of_concern: [iAs, Ni, Cd, Pb]
vulnerable_population: children-0-60mo
applicable_regulations: []
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 41
---

# Fruit Juice (Not Canned)

## Overview

This page is a structural scaffold for HMTc Category 1 row 14. Broad infant/toddler-food evidence is promoted, FDA 2011 apple-juice speciation rows are routed as apple-only inorganic-arsenic context, FDA 2016 grape-category inorganic-arsenic rows are routed as non-apple/blend juice context, FDA TDS apple-juice finished-food rows are routed as small-N not-canned juice context, and Chekri/Weldegebriel fruit-juice rows are now structured as context-only evidence.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Cherry-pick attack vectors on packaged fruit juices typically center on lead in juice-bottled-from-concentrate plus inorganic arsenic in apple-containing varieties. Source provenance and varietal disclosure are the defensive core. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=fruit-juice-not-canned">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for packaged fruit juices, against the FDA 2022 draft lead and iAs caps.</dd>
 </div>
 <div>
 <dt>Regulators, journalists, and adversarial readers</dt>
 <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
 </div>
 <div>
 <dt>HMT&amp;C staff (internal)</dt>
 <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, pooling math) lives in the local staff Standards Workbench tool and under <code>data/workbench/standards/</code>, never on this public page or anywhere else under <code>wiki/</code>. See.</dd>
 </div>
 </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in fruit juice (not canned) for infants and young children. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

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
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: Federal FDA final action level: 10 ug/kg iAs. Scope: apple juice. Basis: juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb. FDA 2016 grape-category rows add 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. | Apple-juice-specific comparison is routeable; the grape-category row adds non-apple/blend context but is still not a full not-canned fruit-juice aggregate. | [[regulations/fda2023-inorganic-arsenic-apple-juice]]; [[sources/fera2014-fsa-metals-infant-foods-formula]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb. FDA 2016 grape-category rows add 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. | Apple-juice and grape-category subset comparisons are available; broader not-canned fruit-juice aggregation still needs additional fit sources. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 10 ug/kg Pb. Scope: single-strength apple juice. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fera2014-fsa-metals-infant-foods-formula]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/fda2004-juice-haccp-lead]]: Federal FDA guidance hazard-control level: 50 ug/kg Pb. Scope: ready-to-drink fruit juices including fruit nectars. Basis: ready-to-drink juice. | FDA TDS apple juice N=3 had Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; grapefruit juice N=3 had Pb reported as 0 ppb. | Current older juice guidance context; use as legal/regulatory context, not an HMTc value. | [[regulations/fda2004-juice-haccp-lead]]; [[sources/fera2014-fsa-metals-infant-foods-formula]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS apple juice N=3 had Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; grapefruit juice route review remains product-specific to the non-apple row. | EU maximum level loaded; one small-N apple-juice TDS row is below 30 ug/kg, but this is occurrence context and not an HMTc category distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Fruit juice (not canned). Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | Fruit juice (not canned) (summary-only / supporting context) | mean 1 to 12.91 ppb (3 sources); highest reported 49.6 ppb | 97% detected (91/94, Fda 2011, single-strength-juice) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: 10 ppb (juice) | 3 cited | medium (3 sources) | as-consumed; single-strength-juice; ready-to-drink-juice-1-ml-1-g |
| [[metals/nickel\|Ni]] | Fruit juice (not canned) (direct row-fit) | mean/median 0 to 78 ppb (3 sources); highest reported 80 ppb | 33% detected (1/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | No applicable cap loaded | 4 cited | medium (4 sources) | as-consumed; FDA TDS prepared food/composite; reported concentration values retained |
| [[metals/cadmium\|Cd]] | Fruit juice (not canned) (direct row-fit) | mean/median 0 to 80 ppb (4 sources); highest reported 100 ppb | 0% detected (0/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | No applicable cap loaded | 4 cited | medium (4 sources) | as-consumed; FDA TDS prepared food/composite; reported concentration values retained |
| [[metals/lead\|Pb]] | Fruit juice (not canned) (summary-only / supporting context) | mean/median 1.5 to 35 ppb (3 sources); highest reported 40 ppb | 67% detected (2/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | [[regulations/fda2022-draft-lead-juice]]: 10 ppb (single-strength ready-to-drink juice) | 3 cited | medium (3 sources) | as-consumed; FDA TDS prepared food/composite; reported concentration values retained |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 50 ppb (FDA current Juice HACCP guidance hazard-control level) | ready-to-drink fruit juices and fruit nectars | Current FDA guidance context; 2022 draft lead-in-juice guidance is not final and not for implementation |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | infant/young-child drink ready-to-use basis; ordinary juices have different EU lead levels | EU maximum level if labelled for infants/young children. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.2 ppb | 21 CFR 101.12 infant/young-child juice RACC of 120 mL, approximated as 120 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA current context is 50 ppb; EU infant-labelled juice is 20 ppb; Prop 65 is about 4.2 ppb at 120 g/day. | Use 50 ppb as current FDA context, keep the 10/20 ppb FDA juice values as draft-only context, and split apple/non-apple before standards use. |

Juice is the clearest example where a current federal context value can look loose relative to Prop 65 and modern occurrence data.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Regulatory Guidance Source Handling

The FDA 2022 draft juice guidance and the FDA 2004 Juice HACCP guidance are retained here as regulatory source context, not fruit-juice occurrence evidence. They document the draft 10/20 ppb lead context and current 50 ppb Juice HACCP context used in the crosswalk, but neither source reports measured product concentration rows for this locked HMTc category. [[sources/fda2022-draft-lead-juice]] [[sources/fda2004-juice-haccp-lead]]

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: fruit juice monitoring reports that distinguish the not-canned scope where possible.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

No promoted source currently gives a full not-canned fruit-juice-only concentration distribution. FDA 2011 apple juice is routed as apple-only inorganic-arsenic context, FDA 2016 grape-category rows are routed as grape/blend inorganic-arsenic context, FDA TDS apple juice is routed as a small-N finished-food row, and broader UK baby-drinks and packaged fruit-juice sources are structured as context only until row-fit filtering resolves fruit type, canned status, analyte species, and statistic fit.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2011 single-strength apple juice | N=94; lower-bound p50 4.9 ppb; p90 7.7 ppb; p95 8.2 ppb; max 9.8 ppb | retained ppb summary | [[sources/fda2011-apple-juice-arsenic-speciation]] | Apple-only subcategory context; not a full not-canned fruit-juice aggregate. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2016 grape and grape-containing juice category | 58 quantified iAs cells from 61 source rows; quantified-cell p50 11.2 ppb; p90 22.6 ppb; p95 25.6 ppb; max 49.6 ppb | retained ppb summary | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] | Grape-category subcategory context; includes grape blends, apple-grape blends, and one FDA-designated white-grape-peach row; not a full not-canned fruit-juice aggregate. |
| [[metals/lead|Lead]] | FDA TDS 99 apple juice, bottled | N=3; p50 1.5 ppb; p90 2.46 ppb; p95 2.58 ppb; max 2.7 ppb | retained ppb summary | [[sources/fda2022-tds-elements-fy2018-fy2020]] | Small-N apple bottled juice route; not a not-canned juice aggregate. |
| [[metals/cadmium|Cadmium]] | FDA TDS 99 apple juice, bottled | N=3; all reported concentrations 0 ppb | 0 ppb reported concentration summary; reporting limit 1 ppb | [[sources/fda2022-tds-elements-fy2018-fy2020]] | Small-N apple bottled juice route; reported zeroes retained as FDA reported. |
| [[metals/arsenic-total|Total arsenic]] | FDA TDS 99 apple juice, bottled | N=3; p50 2.4 ppb; p90 4 ppb; p95 4.2 ppb; max 4.4 ppb | retained ppb summary | [[sources/fda2022-tds-elements-fy2018-fy2020]] | Total arsenic only; not inorganic arsenic. |
| [[metals/nickel|Nickel]] | FDA TDS 99 apple juice, bottled | N=3; p50 0 ppb; p90 16 ppb; p95 18 ppb; max 20 ppb | retained ppb summary; reporting limit 20 ppb | [[sources/fda2022-tds-elements-fy2018-fy2020]] | Small-N row with high reporting limit; occurrence context only. |
| [[metals/arsenic-total|Total arsenic]] | UK baby drinks | 2 ug/kg | 2 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK baby drinks | 1 ug/kg | 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/cadmium|Cadmium]] | UK baby drinks | 0 ug/kg | 0 ppb lower-bound category value | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound treatment; not juice-specific. |
| [[metals/lead|Lead]] | UK baby drinks | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/nickel|Nickel]] | UK baby drinks | 0 to 9 ug/kg | 0 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/nickel|Nickel]] | Ethiopia packaged fruit juices consumed by children | range 0.0025 to 0.08 mg/L; median 0.078 mg/L | range 2.5 to 80 ppb; median 78 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; canned products must be excluded for this row. |
| [[metals/nickel|Nickel]] | Ethiopia mango, pineapple, strawberry, and cocktail juice medians | mango 34 ppb; pineapple 70 ppb; strawberry 62 ppb; cocktail 56.5 ppb | 34 to 70 ppb fruit-type medians | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Fruit-type medians are not packaging-filtered p90 values. |
| [[metals/cadmium|Cadmium]] | Ethiopia packaged fruit juices consumed by children | range 0.01 to 0.1 mg/L; median 0.08 mg/L | range 10 to 100 ppb; median 80 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; row-fit filtering pending. |
| [[metals/lead|Lead]] | Ethiopia packaged fruit juices consumed by children | range 0.01 to 0.04 mg/L; median 0.035 mg/L | range 10 to 40 ppb; median 35 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; row-fit filtering pending. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French infant fruit-juice category with N=4. The source does not identify canned status, so the values are supportive context for this not-canned juice row rather than a clean row-specific distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Fruit juices | 4 | as consumed | 191 / 314 ppb | 2 / 2 ppb | 0.30 / 0.30 ppb | 21 / 29 ppb | 25 / 25 ppb | 62.5 / 83 ppb |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review states that the few U.S. infant-food-specific heavy-metal guidance exceptions at the time included maximum lead and arsenic levels in certain fruit juices. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Not-canned fruit juice risk characterization remains pending because the promoted source does not provide not-canned juice concentration distributions for apple or grape juice. <!-- UNCITED: Need fruit juice datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for fruit juice should be documented only after sources distinguish fruit type, concentrate use, water inputs, packaging, canned versus not-canned scope, and analytical method. <!-- UNCITED: Need juice-specific sources that report metal concentrations, scope qualifiers, and methods such as [[testing/icp-ms]]. -->

Weldegebriel 2025 supports packaging and fruit type as candidate variance drivers because it reports higher nickel in pineapple, strawberry, and cocktail juice than mango juice, while also flagging packaging type as a contamination variable; this source still requires canned/not-canned filtering before it can support the locked row distribution. [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fruit-juice]], [[ingredients/apple-juice]], and [[ingredients/grape-juice]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

Non-canned fruit juices (glass, PET, Tetra Pak, and similar formats) present a simplified packaging contamination pathway compared to canned products: tin migration is eliminated, but lead and arsenic from fruit ingredients remain the primary concerns. The driving contamination sources are identical to the ingredient levers above.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source fruit from documented low-Pb/Cd growing regions; for apple juice specifically, avoid orchards with legacy arsenical pesticide history. | _Quantified magnitude data not yet ingested from cited sources for origin-stratified non-canned fruit juice data._ | — |
| 2 | Agronomic | Soil management at growing site reduces Pb and Cd uptake; upstream supplier lever. | _Quantified magnitude data not yet ingested._ | — |
| 3 | Processing | Clarification and filtration during juice processing may reduce particulate metal content; the effectiveness depends on the speciation of metals (particulate vs dissolved). | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 4 | Formulation | Blend fruit juice types to reduce per-serving contribution from high-Pb/Cd fruit sources. | _Quantified magnitude data not yet ingested; dilution effect expected proportional to high-metal fraction._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming juice concentrates and finished product. Non-canned packaging eliminates Sn migration concern, so the full analyte panel focuses on Pb, Cd, iAs, and tAs from fruit-origin sources. | _Quantified magnitude data not yet ingested for detection-power modeling._ | — |
| 6 | Packaging and storage | Non-canned packaging eliminates tin migration as a concern. Ensure glass containers are lead-free per modern food-contact material regulations. Not a residual lever for compliant glass or plastic packaging. | Sn migration eliminated; Pb from food-contact glass is not a demonstrated concern in modern food-grade manufacturing. | — |

Cross-links: relevant ingredient pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Primary FDA juice action-level documents are now captured in the page-level crosswalk above; exact use still requires apple/non-apple and canned/not-canned scope review.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | (context only) |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-draft-lead-juice|Draft Guidance for Industry: Action Levels for Lead in Juice]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Draft Guidance for Industry · 2022 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/draft-guidance-industry-action-levels-lead-juice)</span><span class="hmi-ref-tag">Guidance</span>
2. [[sources/fda2004-juice-haccp-lead|Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Guidance for Industry · 2004 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first)</span><span class="hmi-ref-tag">Guidance</span>
3. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals|Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia]]<span class="hmi-ref-meta">Fasika Weldegebriel, Zemichael Gizaw, Mulat Gebrehiwot, Lamrot Yohannes, Jember Azanaw, Mengesha Genet, et al. · Scientific Reports 15:36868 · 2025 · [doi.org/10.1038/s41598-025-20789-x](https://doi.org/10.1038/s41598-025-20789-x)</span><span class="hmi-ref-tag">Review</span>
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
| 2 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 3 | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals\|Weldegebriel et al. 2025]]. *Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia*, Scientific Reports 15:36868 | 2025 | Peer-reviewed | Cd, Pb, Cr, and Ni concentrations in 80 packaged fruit juices (tetra pack, glass, carton, and canned) in Ethiopia; includes packaging-type and fruit-type medians relevant to not-canned format filtering, but canned products must be excluded before HMTc row distribution is computed |
| 4 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | Nepal packaged apple, orange, mango, and lychee juice Pb screen by FAAS (n=16; all 16 below Pb LOD) |
| 5 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 6 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US narrative review noting the absence of comprehensive infant-food-specific guidance for fruit juices at the time and summarizing the available regulatory and occurrence context for juice metals |
| 7 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 8 | [[sources/fda2022-draft-lead-juice\|FDA 2022]]. *Draft Guidance for Industry: Action Levels for Lead in Juice*, FDA Draft Guidance for Industry | 2022 | Government guidance | FDA April 2022 draft guidance proposing 10 ppb Pb for single-strength apple juice and 20 ppb for other single-strength juices, loaded as regulatory context only; not finalized, not used as an HMTc threshold |
| 9 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA Total Diet Study FY2018-FY2020 providing Pb, Cd, tAs, and Ni measurements for bottled apple juice (N=3) and grapefruit juice rows, the primary US occurrence rows on this page for not-canned fruit juice |
| 10 | [[sources/subedi2022-fruit-juices-heavy-metals\|Subedi et al. 2022]]. *Determination of heavy metals in varieties of fresh and packaged fruit juices along with powdered fruit drink mixes in Kathmandu Valley*, Journal of Balkumari College | 2022 | Peer-reviewed | NP Fe, Mn, Zn, Pb occurrence in Fresh juices, packaged juices, and powdered fruit drink mixes sold in Kathmandu Valley, Nepal |
| 11 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby-food products purchased Dec 2020 – Sep 2021 on the Polish market for children aged... (n=397) |
| 12 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 13 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 14 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS reporting multi-element concentrations in a French infant fruit-juice category (N=4); canned status not identified, so used as supportive context rather than a clean not-canned distribution |
| 15 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF 168-sample US baby-food survey including a fruit-juice category with detection rates for tAs, Pb, Cd, and tHg; broad product context only, B-tier |
| 16 | [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|Kubachka et al. 2019]]. *Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS*, Food Analytical Methods | 2019 | Peer-reviewed | FDA HPLC-ICPMS arsenic speciation reference method (AOAC First Action 2016.04) for fruit juices; validates the 10 ppb iAs action level analytical basis |
| 17 | [[sources/balalimood2018-fruit-juice-mashhad-pb-as\|Balali-Mood et al. 2018]]. *Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran*, Iranian Journal of Toxicology | 2018 | Peer-reviewed | IR Pb, tAs occurrence in 50 commercial packaged fruit juice samples from Mashhad, Iran local markets in spring and winter 2016; grape, apple,... (n=50) |
| 18 | [[sources/fda2018-lead-in-juice-fy2005-fy2018\|FDA 2018]]. *Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)*, FDA analytical results table | 2018 | Government dataset | 1,643-sample FY2005-FY2018 FDA compliance-program Pb dataset for juice on a single-strength basis, the principal sample-level evidence behind the FDA Closer to Zero juice lead action level development |
| 19 | [[sources/youssao2018-fruit-juices-syrup-benin\|Youssao et al. 2018]]. *Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic*, International Journal of Chemistry | 2018 | Peer-reviewed | BJ/FR Al, tAs, Ba, Be, Cd, Hg, Pb, Sn, Tl, U occurrence in 92 fruit-juice and syrup samples: 85 Benin-produced bottled pineapple juices/cocktails from artisanal and semi-industrial units, 6 French pineapple... (n=92) |
| 20 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | Iran Tetra-Pak packaged cherry, mango, orange, and pineapple juice Al concentrations (n=48; mean 1.24 mg/L, range 0.10–3.30 mg/L), documenting Al-leaching from Tetra-Pak packaging in acidic juices well above the WHO drinking-water MPL |
| 21 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 22 | [[sources/alzagtat2016-fruit-nectars-libya-heavy-metals\|Alzagtat et al. 2016]]. *Conformity of Fruit Nectar Samples to Libyan Specification Standards*, Turkish Journal of Agriculture - Food Science and Technology | 2016 | Peer-reviewed | LY Cu, Zn, Fe, tAs, Pb, Cd occurrence in Local and imported fruit nectar samples from Libyan markets |
| 23 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | FDA 2016 iAs dataset providing 61 grape and grape-containing juice rows with quantified iAs concentrations (p50 11.2 ppb, p90 22.6 ppb, max 49.6 ppb), the grape-category subcategory context on this page |
| 24 | [[sources/izah2016-beverages-heavy-metals-nigeria\|Izah et al. 2016]]. *A Review of Heavy Metal Concentration and Potential Health Implications of Beverages Consumed in Nigeria*, Toxics | 2016 | Peer-reviewed | NG/GLOBAL Pb, Cd, tAs, tHg, Cr, Ni, Sn, Sb, Cu, Mn, Zn occurrence in Narrative review of secondary data from Nigerian beverage studies published 2007-2016. No new measurements. Section 2 states the... |
| 25 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | ID Sn occurrence in 9 brand variants from each of three canned beverage categories (carbonated, beer, juice), tested at two expiration cohorts... (n=27) |
| 26 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 27 | [[sources/paula2015-fruit-juices-elements-portugal\|Paula et al. 2015]]. *Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices*, Czech Journal of Food Sciences | 2015 | Peer-reviewed | PT Cd, Cr, Pb, Ni, Zn, Fe occurrence in 62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species,... (n=62) |
| 28 | [[sources/savic2015-clear-orange-juice-minerals\|Savic et al. 2015]]. *The Presence of Minerals in Clear Orange Juices*, Advanced Technologies | 2015 | Peer-reviewed | RS Ag, Al, tAs, Cd, Co, Cr, Cu, Fe, Li, Mg, Mn, Mo, Ni, Pb, Sb, Zn occurrence in Seven clear orange-juice samples with 50% fruit content, produced by different manufacturers and purchased from the local market... (n=7) |
| 29 | [[sources/fsanz2012-arsenic-apple-pear-juice-australia-nz\|Zealand 2012]]. *Survey of total arsenic and inorganic arsenic in apple and pear juice*, Food Standards Australia New Zealand (FSANZ) targeted analytical survey, published February 2013 | 2012 | Government report | FSANZ 2012 targeted analytical survey of 96 apple juices and 4 pear juices reporting tAs and speciated iAs (apple iAs range 2.5–11.3 µg/kg in samples >LOR; AsV predominant), directly supporting the FDA 10 ppb iAs apple-juice action-level basis |
| 30 | [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|Magdas et al. 2012]]. *Isotopic and Elemental Determination in Some Romanian Apple Fruit Juices*, The Scientific World Journal | 2012 | Peer-reviewed | 31 Romanian organic single-strength apple juices by ICP-MS reporting Pb, Cd, tAs, Ni, Cr, and U concentrations by Transylvanian region (Ni and Cr exceeded US-EPA drinking-water limits in some regions; Pb, Cd, tAs, U within limits) |
| 31 | [[sources/fda2011-apple-juice-arsenic-speciation\|FDA 2011]]. *Results of Arsenic Analysis in Single-Strength Apple Juice 2011 (ORA Sampling Assignment 2011102701)*, U.S. Food and Drug Administration | 2011 | Government dataset | 94-sample FDA single-strength apple-juice iAs speciation dataset (p50 4.9 ppb, p90 7.7 ppb, max 9.8 ppb), the direct species-specific apple-juice occurrence evidence on this page |
| 32 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | Saudi Arabia 129-sample apple, orange, and mango commercial juice Cr (total) and Ni concentrations by GFAAS (means ~5–8 µg/L); no Pb, Cd, As, Hg, or Sn measured |
| 33 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | ATSDR comprehensive toxicological profile for Sn establishing the health basis for tin limits in fruit juices and documenting the distinction between inorganic tin (food-contact migration from tinplate) and organic tin compounds |
| 34 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | PL Cr occurrence in Fresh fruits, vegetables, and wheat grains collected in 2001 from commercial plantations in three Polish provinces (Mazowieckie, Lubelskie,... (n=272) |
| 35 | [[sources/fda2004-juice-haccp-lead\|FDA 2004]]. *Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice*, FDA Guidance for Industry | 2004 | Government guidance | FDA Juice HACCP guidance recommending lead controls at 50 ppb for ready-to-drink fruit juices; loaded as legacy regulatory context that the 2022 draft guidance would replace if finalized |
| 36 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 37 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | 1971 animal and human Sn-toxicity study motivated by a Kuwait food poisoning outbreak, establishing vomiting thresholds for dissolved tin in canned juices and documenting the local-irritation mechanism; relevant to the tin-in-canned-juice risk framing but not to not-canned product occurrence |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 8 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
