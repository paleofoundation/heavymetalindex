---
type: product-category
category: fruit-juices-apple-containing
hmtc_category: 5
hmtc_row: 2
label: "Fruit juices, apple-containing"
base_taxonomy: fruit-juices
variant_type: higher-contamination-sibling
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice, apple]
primary_metals_of_concern: [iAs, Pb]
vulnerable_population: general_population
applicable_regulations: [fda2023_ias_apple_juice_10, fda2022_draft_pb_apple_juice_10]
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: phase3
hmtc_threshold_status: at_bar_iAs_dirty_p30
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 5
---

# Fruit Juices, Apple-Containing

This page is HMTc Category 5 row 2 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on apple-containing juice typically center on inorganic arsenic (the FDA 2022 draft 10 ppb action level is the public number) and on lead from imported concentrate. Sourcing geography (US vs Chinese vs Argentine concentrate) and apple-cinnamon co-occurrence (Wanabana 2024) are the defensive core. Compare with <a href="/products/fruit-juices-non-apple">Fruit Juices Non Apple</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=fruit-juices-apple-containing">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for apple-containing juice, against the FDA 2022 draft iAs cap and the FDA 2022 draft Pb cap.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, candidate-cell status) lives on the staff workbench snapshot at <a href="/workbench/standards/fruit-juices-apple-containing">/workbench/standards/fruit-juices-apple-containing</a>, not on this public page.</dd>
    </div>
  </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in apple-containing fruit juices. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (ready-to-eat), dry weight, or as sold. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**Standards-program math sits elsewhere.** Percentile selection and final certification threshold decisions are tracked in the HMT&C staff workbench and are not published on this page.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | At readiness bar for iAs (n=94 sample-level + regulatory cap); approaching for Pb (3-source corpus, sample-level extraction pending). |
| Category hub | [[products/category-5-beverages]] |
| Cat 5 master | [[products/category-5-beverages-master]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | iAs cell publishable as literature evidence Part 19 dirty p30 = 3.0 ppb (n=94 from FDA 2011 single-strength apple juice). Other cells routing or evidence-tracking only. |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

FDA TDS food 99 routes to this row as bottled apple juice for total-element context, and FDA 2011 apple-juice speciation rows provide routeable inorganic-arsenic occurrence evidence. These source summaries are useful occurrence context, but no aggregate HMTc threshold is published from one source alone. [[sources/fda2022-tds-elements-fy2018-fy2020]] [[sources/fda2011-apple-juice-arsenic-speciation]]

| Analyte | Evidence scope | Reported value | Source-use caveat |
| --- | --- | --- | --- |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2011 single-strength apple juice | N=94; lower-bound p50 4.9 ppb; p90 7.7 ppb; p95 8.2 ppb; max 9.8 ppb | Species-specific FDA sample distribution; TR values treated as 0 ppb only for the documented lower-bound summary. |
| [[metals/lead|Lead]] | TDS 99 apple juice, bottled | N=3; p50 1.5 ppb; p90 2.46 ppb; p95 2.58 ppb; max 2.7 ppb | Small-N single-food route; draft FDA lead value remains draft-only context. |
| [[metals/arsenic-total|Total arsenic]] | TDS 99 apple juice, bottled | N=3; p50 2.4 ppb; p90 4 ppb; p95 4.2 ppb; max 4.4 ppb | Total arsenic only; do not use as inorganic arsenic evidence. |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: Federal FDA final action level: 10 ug/kg iAs. Scope: apple juice. Basis: juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb; TR values are treated as 0 ppb for the documented lower-bound deterministic summary. | Direct iAs field comparison is available; this 2011 FDA dataset is below the 10 ug/kg action level at p95 and max, but it is one historical source dataset and not an HMTc aggregate. | [[regulations/fda2023-inorganic-arsenic-apple-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb; TR values are treated as 0 ppb for the documented lower-bound deterministic summary. | Direct iAs field comparison is available; this 2011 FDA dataset is below the 20 ug/kg EU fruit-juice maximum at p95 and max, but it is one historical source dataset and not an HMTc aggregate. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]] |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 10 ug/kg Pb. Scope: single-strength apple juice. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | EU maximum level loaded; the small-N apple-juice TDS row is below 30 ug/kg, but this is occurrence context and not an HMTc category distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in apple-containing fruit juice. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | apple-containing (direct row-fit) | mean 4.09 ppb (1 source); highest reported 9.8 ppb | 97% detected (91/94, Fda 2011, single-strength-juice) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: 10 ppb (juice) | 1 cited | low (1-2 sources) | single-strength-juice |
| [[metals/lead\|Pb]] | apple-containing (summary-only / supporting context) | median 1.5 ppb (1 source); highest reported 2.7 ppb | 67% detected (2/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | [[regulations/fda2022-draft-lead-juice]]: 10 ppb (single-strength ready-to-drink juice) | 1 cited | low (1-2 sources) | FDA TDS prepared food/composite; reported concentration values retained |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

_Generator-managed section: will be populated when the routing audit identifies sources whose author-stated scope is broader than this row._

<!-- END: hmi-broad-context-sources -->

## Levers to reduce contamination

The primary contamination concern in apple-containing juices is lead (Pb), documented by widespread regulatory monitoring and at least one high-profile enforcement action. Inorganic arsenic is a secondary concern due to carry-through from apple-growing practices in some regions. Levers are ordered by approximate impact on Pb.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source apples from orchards with documented low soil lead and no legacy arsenical pesticide history. Historical US apple orchards in the Northeast and mid-Atlantic commonly have residual lead arsenate contamination from pre-1950s pesticide use; Pacific Northwest and newer growing regions typically have lower baseline Pb. | _Quantified magnitude data not yet ingested from cited sources for origin-stratified apple juice Pb data._ | — |
| 2 | Agronomic | Soil remediation and pH management at orchard level reduces Pb bioavailability and uptake into fruit; upstream supplier lever. | _Quantified magnitude data not yet ingested; section will be expanded when orchard-level intervention studies are available._ | — |
| 3 | Processing | Peeling apples before pressing removes surface-deposited Pb; clarification and filtration steps during juice processing may reduce particulate Pb. | _Quantified magnitude data not yet ingested from cited sources for processing effects on apple juice Pb._ | — |
| 4 | Formulation | Blend with non-apple juice bases or dilute to reduce per-serving Pb contribution where apple juice Pb is elevated. | _Quantified magnitude data not yet ingested; linear dilution effect expected proportional to apple juice fraction._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming apple juice concentrate and finished product. FDA compliance program detects Pb in apple juice at relevant concentrations; routine testing is the primary detection mechanism. | _Quantified magnitude data not yet ingested for detection-power modeling at specific sample sizes._ | — |
| 6 | Packaging and storage | Avoid lead-soldered can seams (historical; eliminated in modern production); glass and PET packaging do not contribute Pb migration under normal conditions. | Elimination of lead solder is complete in modern food-grade packaging; not a residual lever for compliant producers. | — |

Cross-links: [[ingredients/apple-juice]] if it exists; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as the p90 or p95 of the fitted distribution across the full source pool. Percentile selection, clean/dirty subcategory designation, and final HMT&C certification threshold decisions are tracked in the staff Standards Workbench, rebuilt from the routing audit when new sources are added.

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

_No row-specific regulatory recall or enforcement action has been added to this page. Future entries will be framed as regulatory events, not as brand rankings, per the wiki's brand-firewall rule (CLAUDE.md Part 12). Historical regulatory events relevant to this category should be sourced from FDA enforcement databases and framed at the category level._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS multi-element dataset (FY2018–FY2020) covering apple juice composites; provides Pb, Cd, tAs, iAs, and Ni occurrence data for apple-containing juice in the US diet |
| 2 | [[sources/fda2018-lead-in-juice-fy2005-fy2018\|FDA 2018]]. *Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)*, FDA analytical results table | 2018 | Government dataset | FDA compliance-program Pb dataset for 1,643 juice samples (FY2005–FY2018) including apple and apple-mixed juices; primary Pb occurrence source for this row across a 13-year US sampling window |
| 3 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | B-tier Indonesian study examining factors affecting Sn release in canned beverages including canned apple juice; provides mechanistic context for Sn leaching into canned apple-containing juice formats |
| 4 | [[sources/fda2011-apple-juice-arsenic-speciation\|FDA 2011]]. *Results of Arsenic Analysis in Single-Strength Apple Juice 2011 (ORA Sampling Assignment 2011102701)*, U.S. Food and Drug Administration | 2011 | Government dataset | FDA 2011 ORA apple-juice sampling assignment reporting iAs, DMA, MMA, and tAs in 94 single-strength apple juice samples; primary iAs speciation source for the apple-containing juice row |
| 5 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | ATSDR toxicological profile for Sn documenting occurrence data in canned apple juice and other canned fruit products; provides regulatory and hazard-characterisation context for Sn in apple-containing canned juice |
| 6 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | Historical UK study documenting Sn toxicity in canned fruit juices; provides early evidence of Sn leaching as a food-contact hazard mechanism relevant to canned apple-containing juice formats |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | FDA 2018, FDA 2022 TDS (n=3), Weldegebriel 2025 (n=80; apple-subset extraction pending) | FDA 2022 draft cap | 3 distribution + 1 cap |
| Cd | FDA 2022 TDS (n=3), Weldegebriel 2025 | — | 2 distribution |
| tAs | FDA 2011 (n=94 co-measured), FDA 2022 TDS (n=3) | — | 2 distribution |
| **iAs** | **FDA 2011 (n=94)** + FDA 2016 grape-subset context (n=58) | FDA CTZ + EU cap | **2 distribution + 2 caps** |
| Ni | Weldegebriel 2025 (n=80) | — | 1 distribution |
| Cr-total | Weldegebriel 2025 (n=80) | — | 1 distribution |
| Al, MeHg, tHg, Cr-VI, Sn | data gap | — | 0 |
