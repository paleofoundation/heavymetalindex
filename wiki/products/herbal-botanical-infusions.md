---
type: product-category
category: herbal-botanical-infusions
hmtc_category: 5
hmtc_row: 10
label: "Herbal/botanical infusions"
base_taxonomy: tea-taxonomy
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Al, Pb, Cd]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 0
---

# Herbal/Botanical Infusions

This page is HMTc Category 5 row 10 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land. Herbal and botanical infusions cover all hot-water infusion beverages prepared from non-Camellia-sinensis plant material: chamomile, peppermint, rooibos, hibiscus, lemon balm, valerian, sage, ginger, and dozens of single-herb and blended preparations. The category is heterogeneous; per-species metal accumulation varies by an order of magnitude or more, with valerian root, lemon balm leaves, common sage, and chamomile flowers documented as higher lead accumulators in the European-market literature ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]). The single currently loaded source for this row reports cadmium and chromium in three commonly consumed Nigerian medicinal botanicals (baobab, guava leaf, papaya leaf) but does not extract sample-level concentration values into structured form ([[sources/njinga2022-nigeria-herbal-cd-cr]]).

## Who this page is for

This product-category page reports what the peer-reviewed and regulatory literature says about heavy metals in herbal and botanical infusions. The HTML stakeholder guide below names the four primary readers. The category's species-level heterogeneity means brand-specific risk depends heavily on the actual botanical mix; the per-species data lives on the ingredient pages ([[ingredients/herbal-botanicals]], [[ingredients/dried-herbs]], [[ingredients/herbs-and-spices]]) and is summarized at the product layer only when the finished-infusion concentration distribution has independent measurement. HMT&C threshold-selection arithmetic does not appear on this public page; it lives in the local staff Standards Workbench tool per CLAUDE.md Part 19.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on herbal and botanical infusions typically center on lead and cadmium from the underlying plant species, with wide variance by species and growing region. Sourcing transparency is the defensive core. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=herbal-botanical-infusions">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for herbal and botanical infusions.</dd>
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
## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction pending |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |

## Methodology

Herbal and botanical infusions report contamination at two distinct measurement points: the dry botanical material (mg/kg dry weight) and the prepared infusion (mg/L beverage as consumed). The two are connected by an extraction factor that depends on plant species, plant part (leaf vs root vs flower), grind size, infusion temperature, and infusion time; for water-soluble metals like cadmium and arsenic species, hot-water infusion typically extracts 20–60% of the dry-material content into the brewed beverage. For less-soluble forms (much of the lead bound in plant cell walls), extraction is closer to 10–30%. The loaded sources on this row report dry-material concentrations; finished-infusion concentrations are derived rather than directly measured. Speciation follows source convention (arsenic as total tAs, mercury as total tHg). Source pooling is not performed with one source; the regulatory comparison anchors to the cited source's species-level maxima rather than to a pooled marginal distribution.

## Source Evidence Inventory

The single currently loaded source ([[sources/njinga2022-nigeria-herbal-cd-cr|1]]) measured cadmium and chromium in three medicinal-and-food-use botanicals from Northern Nigeria: Adansonia digitata (baobab), Psidium guajava (guava leaf), and Carica papaya (papaya leaf), collected from Borno, Jigawa, and Kano states. The paper presents Cd and Cr as the primary chemical carcinogens of concern; specific concentration values for the three species are reported in the paper's tables but are not yet extracted into structured form in `data/evidence/values.jsonl`. Health-risk assessment used hazard quotient for non-cancer risk and incremental lifetime cancer risk for cancer risk under USEPA oral exposure equations. The companion adjacent-row source ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]) reports concentrations in 37 herb species and 12 spice species from eastern Poland and is broad-context for this row (the source's frontmatter routes it to [[ingredients/herbs-and-spices]] and [[ingredients/dried-herbs]] rather than directly to this product row).

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| No loaded row | No federal or product-specific regulatory limit loaded yet | Comparable field finding extraction pending | Evidence-gap tracking only; do not infer a pass/fail status | [[products/regulatory-crosswalk-field-findings]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

## Broad Product Context: Author-Scope Index

The loaded source ([[sources/njinga2022-nigeria-herbal-cd-cr|1]]) is direct evidence for the row at the matrix level (the three measured species are commonly consumed as infusions or food in Northern Nigeria); format-axis row-fit is partial because the paper reports dry-material concentrations rather than prepared-infusion concentrations. Adjacent-row sources reporting on Camellia sinensis tea, on dried herb ingredients without distinguishing finished-infusion from dry-material, or on herb-and-spice broad surveys land in this section as the corpus accumulates. The [[ingredients/herbal-botanicals]], [[ingredients/dried-herbs]], and [[ingredients/herbs-and-spices]] ingredient pages are the upstream sources for species-level data; this product page summarizes the prepared-infusion view.

## Levers to reduce contamination

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Species selection and origin transparency. Higher-Pb species (valerian root, lemon balm leaves, common sage, chamomile flowers in European-market data) and growing regions with documented soil-Pb or soil-Cd elevation account for most of the heavy-metals load. Single-origin and single-species sourcing dominates blend mitigation. | _Quantified per-species range_: lead in herb samples ranges from <0.010 to 5.68 mg/kg dry matter across 37 species in the European market data; cadmium and chromium in three Nigerian medicinal botanicals quantified in the source's tables (extraction queued). | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]], [[sources/njinga2022-nigeria-herbal-cd-cr\|1]] |
| 2 | Agronomic | For brand-controlled-supply operations, soil amendment (phosphate management, pH liming) and avoidance of contaminated irrigation water at the source farm reduce upstream uptake. Upstream interventions live with growers; the brand's lever is supplier specification. | _Quantified magnitude data not yet loaded for this row's specific species; agronomic literature for the broader plant-uptake mechanism is on [[metals/cadmium]] and [[metals/lead]]._ | — |
| 3 | Processing | Washing botanical material before drying removes surface dust contamination (atmospheric Pb deposition). Sieving to remove root soil for above-ground plant parts reduces Cd carry-through. Steam sterilization (used for blend production at scale) does not reduce metal load. | _Quantified magnitude data for washing-effect on botanical Pb not yet loaded for this row._ | — |
| 4 | Formulation | Blend formulation can dilute high-Pb single-herb concentrations: a 10% inclusion of high-Pb valerian root in a blend reduces finished-blend Pb to roughly 10% of the single-herb level, on a linear-mixing basis. Brand QA can specify maximum inclusion ratios for known high-accumulator species. | Linear dilution; the operative variable is the inclusion ratio of the high-accumulator species in the finished blend. | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| 5 | Testing and QC | Lot-level ICP-MS testing of single-herb inputs at the blender level, with detection floors of 0.005 mg/kg Pb and 0.01 mg/kg Cd. Spot-test of finished blends as a confirmation step. | The cited Polish-market protocol (ICP-MS, LOD Pb 0.005, LOQ 0.01 mg/kg) is representative of commercial QC capability. | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| 6 | Packaging and storage | Avoid lead-glazed ceramic teaware for brewing; the ceramic-leaching mechanism documented for kombucha applies to any acidified or hot-acidic herbal preparation (hibiscus infusions, lemon-herb blends with citric acid). | Lead migration from ceramic vessels measured at 5.8–73 mg/L under standard acetic-acid simulant in adjacent kombucha case literature; herbal-infusion-specific data not yet loaded. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|3]] |

## How standards math uses this page

This page is HMTc Category 5 row 10. Per CLAUDE.md Part 19, the per-analyte HMTc standard requires a pooled marginal occurrence distribution across multiple independent sources. The row currently has one direct-evidence source (Nigerian botanicals, Cd and Cr) and one broad-context source (Polish-market herbs and spices, Cd Pb tAs tHg); structured value-level extraction is pending. The row is `BLOCKED: insufficient extracted occurrence data` for occurrence-based standards math. The eventual HMTc value will be the lower of (the pooled finished-infusion percentile across additional sources) and (the lowest applicable regulatory cap, today implicitly drawn from EU 2023/915's beverage and food categories or from WHO guidance for herbal medicines applied as compass values). All threshold-selection arithmetic lives in `data/workbench/standards/herbal-botanical-infusions.md`.

## Historical recalls and enforcement

No herbal-infusion recall enforcement actions specifically driven by heavy-metals findings are currently loaded in the corpus. Adjacent enforcement record includes occasional FDA action on Ayurvedic and traditional-Chinese-medicine herbal products with adulterant-level lead, mercury, or arsenic (a distinct regulatory category from culinary herbal infusions). The herbal-infusion category sits in a regulatory blind spot relative to its measured per-species variance; the European data shows the variance is real and an order of magnitude. This section will populate as additional enforcement actions are ingested.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Herbal/botanical infusions. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | Herbal/botanical infusions (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | Herbal/botanical infusions (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Herbal/botanical infusions (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
