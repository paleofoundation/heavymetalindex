---
type: product-category
category: fermented-beverages-non-tea-based
hmtc_category: 5
hmtc_row: 15
label: "Fermented beverages, non-tea-based"
base_taxonomy: kombucha-and-fermented-beverages
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Pb, Cd]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 0
---

# Fermented Beverages, Non-Tea-Based

This page is HMTc Category 5 row 15 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land. Non-tea-based fermented beverages — including water kefir, jun (when made on non-tea bases such as fruit juice or coconut water), kvass, fruit-substrate kombucha variants, and other SCOBY-fermented liquids — share the packaging-leaching risk pathway documented for tea-based kombucha but with different ingredient-level exposure. The single currently loaded source documents the packaging pathway: a family-outbreak case-report from Ibiza, Spain measured 47 mg/kg lead in commercially packaged kombucha fermented in ceramic containers ([[sources/munilla-garcia2023-lead-kombucha-ceramics]]).

## Who this page is for

This product-category page reports what the peer-reviewed and regulatory literature says about heavy metals in non-tea-based fermented beverages. The HTML stakeholder guide below names the four primary readers. The single loaded source is cross-routed from the tea-based companion row because the packaging-leaching mechanism is matrix-agnostic; substrate-specific occurrence data for non-tea fermented beverages is not yet loaded. HMT&C threshold-selection arithmetic does not appear on this public page; it lives in the local staff Standards Workbench tool per CLAUDE.md Part 19.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on non-tea fermented beverages typically center on metal leaching from fermentation vessels and on metals in the underlying fruit or grain substrate. Source-of-substrate and vessel-material disclosure are the defensive core. Compare with <a href="/products/kombucha-tea-based">Kombucha Tea Based</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=fermented-beverages-non-tea-based">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for non-tea-based fermented beverages.</dd>
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

Non-tea-based fermented beverages share the operative variable of tea-based kombucha: post-fermentation pH typically in the 2.5–4.0 range drives metal-leaching from any inappropriate contact surface. Substrate-specific upstream metal loads vary widely (fruit juice substrates contribute fruit-borne Cd and Pb; grain substrates contribute grain-borne metals; coconut water substrates are generally lower-Cd than fruit-juice substrates). The cross-routed source ([[sources/munilla-garcia2023-lead-kombucha-ceramics]]) reports lead in mg/kg of finished beverage from a tea-based product; the figure's interpretation for the non-tea row is mechanistic (the packaging-leaching pathway applies) rather than as direct substrate-specific occurrence evidence. Speciation, basis preservation, non-detect handling, and source pooling follow CLAUDE.md Part 19; with one source loaded, no pooling is performed.

## Source Evidence Inventory

The single contributing source is the Ibiza family-outbreak case report ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]), cross-routed from the tea-based companion product. The matrix is tea-based kombucha; the format is finished bottled beverage. The five-sample dataset (two in-process kombucha at 0.95 and 7.1 mg/kg Pb, one packaged kombucha at 47 mg/kg Pb, plus migration testing of the ceramic containers at 5.8–73 mg/L) is reported here as packaging-mechanism evidence rather than as substrate-specific occurrence data for non-tea-based ferments. Substrate-specific occurrence data — for water kefir, fruit-juice kombucha, coconut-water kombucha, kvass, and other non-tea ferments — is not yet loaded. The standards workflow flags this row as substrate-occurrence-blocked pending corpus expansion.

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

The loaded source ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]) is cross-routed from [[products/kombucha-tea-based]] because the packaging-leaching pathway applies symmetrically across all acidic fermented beverages regardless of substrate. On the matrix axis, this source's row-fit for the non-tea row is partial: the cited product is tea-based, not water-kefir or fruit-substrate kombucha; only the packaging mechanism transfers cleanly. Substrate-specific sources reporting on water kefir, kvass, fruit-substrate kombucha, or coconut-water kombucha will populate this section as they land.

## Levers to reduce contamination

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Packaging and storage | Eliminate ceramic, terracotta, and unverified-glaze contact surfaces from the production chain. Use food-grade stainless steel, glass, or food-grade HDPE only. Verify all glaze certification against EU Regulation 84/500/EEC or 21 CFR 173.310 for ceramicware lead leaching. | The cross-routed outbreak case measured 5.8–73 mg/L lead migration from ceramic containers under standard acetic-acid simulant; eliminating ceramic contact reduces this lever to baseline. The intervention magnitude is the difference between the 47 mg/kg outbreak product and the analytical floor — three orders of magnitude. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 2 | Sourcing | Use substrate inputs (fruit juice, coconut water, grain, sugar) from suppliers with documented heavy-metal screening. Substrate is the dominant upstream contributor for non-tea-based ferments. | _Quantified magnitude data for substrate contribution to finished non-tea-based ferments not yet loaded; fruit-juice and grain-substrate occurrence surveys will quantify this lever._ | — |
| 3 | Processing | Shorten fermentation time and refrigerate finished product if vessel-leaching is suspected as a residual risk. | The cross-routed source measured Pb at 0.95 mg/kg (14-day), 7.1 mg/kg (19-day), and 47 mg/kg (packaged): time-and-pH-driven concentration roughly doubled per additional fermentation week in the failed-vessel scenario. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 4 | Testing and QC | Lot-level ICP-MS testing of finished beverage for Pb at minimum, with detection limits ≤ 5 ppb to bound the EU drinking-water lead limit (Directive 2020/2184) as a relevant compass for finished beverages | Detection at 5 ppb is achievable with standard commercial ICP-MS protocols. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 5 | Formulation | Substrate substitution is meaningful at the product level: replacing a high-Cd fruit substrate (such as cacao-pulp ferments) with a lower-Cd substrate (coconut water, sugarcane-based water-kefir base) shifts the row's substrate-load distribution. | _Quantified magnitude data not yet loaded; this lever will be expanded as substrate-specific occurrence data lands._ | — |
| 6 | Agronomic | Agronomic levers live with substrate-producing growers; see [[ingredients/fruit-juices]], [[ingredients/coconut-water]], and similar substrate-ingredient pages for the upstream picture. | Not applicable to brand-side mitigation at the finished-beverage layer | — |

## How standards math uses this page

This page is HMTc Category 5 row 15. Per CLAUDE.md Part 19, the per-analyte HMTc standard requires a pooled marginal occurrence distribution across multiple independent sources. The single loaded source is a cross-routed case report from the tea-based sibling row, not a substrate-specific occurrence survey for this row. The row is `BLOCKED: insufficient substrate-specific sources`. The row's eventual HMTc value will be the lower of the pooled-distribution percentile across newly ingested non-tea-based ferment surveys and the lowest applicable regulatory cap (today implicitly drawn from EU 2023/915's general beverage categories or from drinking-water limits applied as compass values). The threshold-selection arithmetic lives in `data/workbench/standards/fermented-beverages-non-tea-based.md`.

## Historical recalls and enforcement

No non-tea-based fermented-beverage lead, cadmium, or arsenic recall enforcement actions are currently loaded in the corpus. The Ibiza outbreak in the cross-routed source ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]) was tea-based and is documented on the [[products/kombucha-tea-based]] page; the broader enforcement record for water kefir, kvass, and other non-tea-based ferments is thin. This section will populate as substrate-specific enforcement actions are ingested.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Fermented beverages, non-tea-based. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Fermented beverages, non-tea-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Fermented beverages, non-tea-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|Munilla et al. 2023]]. *Family outbreak of lead poisoning associated with the consumption of kombucha manufactured and marketed in ceramic containers*, Revista Española de Salud Pública | 2023 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

