---
type: product-category
category: fruit-juices-non-apple
hmtc_category: 5
hmtc_row: 1
label: "Fruit juices, non-apple"
base_taxonomy: fruit-juices
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice]
primary_metals_of_concern: [Pb, iAs]
vulnerable_population: general_population
applicable_regulations: [fda2022_draft_pb_other_juice_20, fda2004_juice_haccp_pb_50]
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: phase3
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 12
---

# Fruit Juices, Non-Apple

This page is HMTc Category 5 row 1 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on non-apple juices typically center on lead in grape juice (FDA 2022 draft action level applies to all juices) plus inorganic arsenic in cross-juice context. Source provenance and varietal disclosure are the defensive core. Compare with <a href="/products/fruit-juices-apple-containing">Fruit Juices Apple Containing</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=fruit-juices-non-apple">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for non-apple juice, against the FDA 2022 draft lead and iAs caps.</dd>
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

This page reports what the cited sources say about heavy-metal concentrations in non-apple fruit juices. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (ready-to-eat), dry weight, or as sold. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction started |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

FDA TDS food 100 routes to this row as bottled/cartoned grapefruit juice. FDA 2016 routes to this row as grape and grape-containing juice inorganic-arsenic context. These source summaries are useful occurrence context, but neither source is a full non-apple juice distribution. [[sources/fda2022-tds-elements-fy2018-fy2020]] [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]]

| Analyte | Evidence scope | Reported value | Source-use caveat |
| --- | --- | --- | --- |
| [[metals/lead|Lead]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Small-N single-food route; not an aggregate non-apple juice distribution. |
| [[metals/arsenic-total|Total arsenic]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Total arsenic only; do not use as inorganic arsenic evidence. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2016 grape and grape-containing juice category | 58 quantified iAs cells from 61 source rows; quantified-cell p50 11.2 ppb; p90 22.6 ppb; p95 25.6 ppb; max 49.6 ppb | Grape-category bridge context; includes grape blends, apple-grape blends, and one FDA-designated white-grape-peach row; not a full non-apple juice aggregate. |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 20 ug/kg Pb. Scope: other single-strength juices and juice blends. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/fda2004-juice-haccp-lead]]: Federal FDA guidance hazard-control level: 50 ug/kg Pb. Scope: ready-to-drink fruit juices including fruit nectars. Basis: ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Current older juice guidance context; direct compliance interpretation remains scope-limited. | [[regulations/fda2004-juice-haccp-lead]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows. | EU maximum level loaded; the TDS grapefruit row is below 30 ug/kg but is a single small-N food route rather than a full non-apple juice distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2016 grape-category rows provide 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. FDA TDS grapefruit rows report total arsenic only and remain separate. | No conversion offered. Regulatory ceiling is on inorganic arsenic; cited occurrence row reports total arsenic. The two are toxicologically and regulatorily distinct. See the page [Methodology](#methodology) section for the non-substitutability rule on speciation. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-apple fruit juice. Values are pulled directly from cited sources without re-aggregation. Aggregation, comparability review, and HMT&C certification threshold decisions are handled separately under the certification program; see the [methodology](/methodology) for the wiki/HMT&C separation.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | non-apple (summary-only / supporting context) | median 0 ppb (1 source); highest reported 0 ppb | 0% detected (0/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | [[regulations/fda2022-draft-lead-juice]]: 20 ppb (single-strength ready-to-drink juice) | 1 cited | low (1-2 sources) | FDA TDS prepared food/composite; reported concentration values retained |
| [[metals/arsenic-inorganic\|iAs]] | non-apple (summary-only / supporting context) | mean 12.91 ppb (1 source); highest reported 49.6 ppb | 100% detected (58/58, Fda 2016, ready-to-drink-juice-1-ml-1-g) | [[regulations/eu2023-contaminants-maximum-levels]]: 20 ppb (wet weight or reconstituted juice) | 1 cited | low (1-2 sources) | ready-to-drink-juice-1-ml-1-g |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

_Generator-managed section: will be populated when the routing audit identifies sources whose author-stated scope is broader than this row._

<!-- END: hmi-broad-context-sources -->

## Levers to reduce contamination

Non-apple fruit juices (grape, prune, pear, mixed fruit) have varying contamination profiles by fruit type. Grape and prune juices are associated with elevated lead and cadmium from soil accumulation; tropical fruit juices may carry arsenic from certain growing regions.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source grape and prune ingredients from growing regions with documented low soil Pb and Cd. Lead and cadmium in grape juice are driven by vineyard soil contamination; European wine-growing regions vary substantially in soil Pb history. | _Quantified magnitude data not yet ingested from cited sources for origin-stratified grape juice data._ | — |
| 2 | Agronomic | Soil pH management and amendment at vineyard/orchard level reduces Pb and Cd uptake into fruit. | _Quantified magnitude data not yet ingested; section will be expanded when intervention studies are available._ | — |
| 3 | Processing | Juice clarification and filtration removes particulate-bound metals; chelation-based clarification agents may further reduce soluble metal content. | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 4 | Formulation | Avoid disproportionate use of high-Pb/Cd fruit concentrates; blend to reduce per-serving contribution. | _Quantified magnitude data not yet ingested; dilution effect expected proportional to concentration fraction._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming juice concentrates and finished product. Routine testing is the primary mechanism given the variability in fruit-origin soil chemistry. | _Quantified magnitude data not yet ingested for detection-power modeling._ | — |
| 6 | Packaging and storage | Not a primary lever for modern glass or PET juice packaging under normal storage conditions. | — | — |

Cross-links: relevant ingredient pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

_No row-specific regulatory recall or enforcement action has been added to this page. Future entries will be framed as regulatory events, not as brand rankings, per the wiki's brand-firewall rule (CLAUDE.md Part 12). Historical regulatory events relevant to this category should be sourced from FDA enforcement databases and framed at the category level._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals\|Weldegebriel et al. 2025]]. *Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS multi-element dataset (FY2018–FY2020) covering grapefruit juice and other non-apple juice composites; provides Pb, Cd, tAs, iAs, and Ni occurrence data for non-apple juice categories in the US diet |
| 4 | [[sources/fda2018-lead-in-juice-fy2005-fy2018\|FDA 2018]]. *Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)*, FDA analytical results table | 2018 | Government dataset | FDA compliance-program Pb dataset for 1,643 juice samples (FY2005–FY2018) including pomegranate and other non-apple juices; highest-reporting pomegranate samples reached 91–115 ppb Pb; primary Pb occurrence source for non-apple juice |
| 5 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | FDA iAs measurement in grape juice and other non-apple juices (n=58 quantified grape samples); primary iAs occurrence source for the non-apple juice row alongside tAs co-measurement |
| 7 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | B-tier Indonesian study examining factors affecting Sn release in canned beverages; provides mechanistic context for Sn leaching into canned fruit juices relevant to non-apple canned juice categories |
| 8 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | ATSDR toxicological profile for Sn documenting occurrence data in canned fruit juices and foods; provides regulatory and hazard-characterisation context for Sn in canned non-apple juice formats |
| 9 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | Historical UK study documenting Sn toxicity in canned fruit juices including orange juice and mixed canned products; provides early evidence of Sn leaching as a food-contact hazard mechanism in canned juice matrices |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | FDA 2018 (extraction pending), FDA 2022 TDS grapefruit n=3, Weldegebriel 2025 (extraction pending) | FDA 2022 draft cap | 3 distribution + 1 cap |
| Cd | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| tAs | FDA 2016 grape co-measurement, FDA 2022 TDS grapefruit | — | 2 summary |
| **iAs** | **FDA 2016 grape category (n=58 quantified)** + FDA 2022 TDS grapefruit (no iAs row) | EU cap | **1 distribution sample-level + 1 cap** |
| Ni | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| Cr-total | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| Al, MeHg, tHg, Cr-VI, Sn | data gap | — | 0 |
