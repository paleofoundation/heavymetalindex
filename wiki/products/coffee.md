---
type: product-category
category: coffee
hmtc_category: 5
hmtc_row: 13
label: "Coffee"
base_taxonomy: coffee
variant_type: independent_no_split
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Pb, Cd, tAs]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 0
---

# Coffee

This page is HMTc Category 5 row 13 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land. Coffee enters the heavy metals literature through three routes: lead and cadmium in green beans driven by soil origin, copper and aluminum from equipment in roasting and brewing, and migrating metals from packaging and serving ware. The current corpus loads one peer-reviewed Polish study with Arabica bean concentrations and reports no exceedances of any loaded regulatory cap; that finding is preliminary and not generalizable until additional independent sources land.

## Who this page is for

This product-category page reports what the peer-reviewed and regulatory literature says about heavy metals in coffee. The HTML stakeholder guide below names the four primary readers (brand legal, retailer compliance, brand QA, and regulators/journalists). HMT&C threshold-selection arithmetic does not appear on this public page; it lives in the local staff Standards Workbench tool per CLAUDE.md Part 19.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on coffee typically center on lead and cadmium in green coffee beans and on copper / aluminum from processing. Source-of-origin and processing context are the defensive core. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=coffee">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for coffee.</dd>
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

Coffee as a finished beverage is the product the consumer drinks; coffee as a roasted bean is the trade ingredient that brands purchase, and the two have different metal profiles because brewing extracts only a fraction of the bean's metal load into the liquid. The currently loaded source ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]) reports on roasted Arabica bean composition expressed in mg/kg dry matter, not on prepared brewed coffee. Brewed-coffee concentrations are derived from bean concentrations by an extraction factor that depends on brewing method (filter, espresso, French press) and roast level. Speciation is not addressed in the loaded source; arsenic is reported as total arsenic (tAs), and the inorganic-arsenic (iAs) fraction is not measured. Non-detect handling preserves the source's own reporting convention (values below LOQ marked as such). Source pooling is not performed because only one source is loaded; the regulatory comparison anchors to the per-sample maxima of that single source.

## Source Evidence Inventory

The single contributing source measured 8 roasted Arabica coffee bean samples from Lublin, Poland supermarkets, alongside herbs, spices, and tea ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland|1]]). The coffee subset reported all-sample maxima below all four loaded analyte limits: Pb at 0.005–0.791 mg/kg dry matter combined-range across tea and coffee, Cd similarly below applicable limits, tAs below limits, and tHg uniformly low (0.005–0.030 mg/kg across all matrices). Sample-level concentration breakdowns for the 8 coffee samples specifically are not extracted from the paper's tables into structured form; the value-level extraction work is queued in `data/evidence/local_reingest_queue.csv` per CLAUDE.md Part 19. Until that extraction lands, the loaded evidence is described qualitatively as "no exceedances of the loaded limits in the cited Polish sample."

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

The single contributing source ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland|1]]) addresses coffee as a distinct matrix within a multi-matrix herbs-spices-tea-coffee study; the author scope on both the matrix axis and the format axis is exact for "roasted Arabica coffee beans, Poland market." It contributes direct evidence to this product row rather than broad-context fan-out. Broader-scope sources reporting on beverages-as-a-class without specifying coffee separately, or on green-bean trade rather than roasted retail product, will appear in this section as the corpus grows. Cross-reference: tea evidence from the same source lands on [[products/tea]] and is not double-counted here.

## Levers to reduce contamination

The intervention magnitudes below are derived from the broader heavy-metals-in-coffee literature and the cited Polish study's discussion. Where the loaded corpus does not quantify a lever for coffee specifically, the lever is stated and tagged for future evidence ingestion.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Origin selection — avoid green beans from soils with documented elevated Cd background; favor origins with active heavy-metal screening at export | _Quantified magnitude data not yet ingested; the cited Polish-market sample passed all loaded caps but did not contrast origin regions._ | — |
| 2 | Processing | Roasting volatilizes a fraction of Hg and reduces Pb and Cd content modestly on a dry-weight basis through moisture loss correction; the loaded study reports roasted-bean concentrations and does not separately measure green-bean baseline | _Quantified magnitude data not yet ingested for the green-to-roasted shift in coffee specifically._ | — |
| 3 | Packaging and storage | Avoid lead-glazed ceramic mugs and unverified imported drinkware for serving; the ceramic-leaching mechanism is the canonical packaging-driven contamination pathway in adjacent beverage categories ([[sources/munilla-garcia2023-lead-kombucha-ceramics\|2]]) | Lead migration of 5.8–73 mg/L from improperly glazed ceramic serving containers under acetic-acid simulant conditions (the lower pH of brewed coffee at ~5.0 sits below the 4% acetic-acid test condition; serving-vessel risk is real but not quantified in coffee specifically) | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|2]] |
| 4 | Testing and QC | Lot-level ICP-MS testing of green beans at the importer/roaster level is the highest-information intervention for buyers concerned about origin variability | The Polish study's ICP-MS protocol (LOD Pb 0.005 mg/kg, Cd 0.01 mg/kg) is representative of the analytical floor available for routine commercial QC | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| 5 | Formulation | Coffee is a single-ingredient finished product; formulation levers (substitution, dilution) are not meaningful at the product level. The lever lives upstream at the green-bean sourcing decision. | Not applicable | — |
| 6 | Agronomic | Agronomic levers (soil amendment, irrigation source) live with growers in producing regions and are out of scope for downstream brand control. See [[ingredients/coffee]] for upstream mitigation. | Not applicable to brand-side mitigation | — |

## How standards math uses this page

This page is one row in the HMTc Category 5 (beverages) framework. Per CLAUDE.md Part 19, the per-analyte HMTc standard is derived from the pooled marginal occurrence distribution across all loaded sources for this row, with the binding value being the lower of (the row's percentile under the clean/dirty designation) and (the lowest applicable regulatory cap). With only one source loaded, the row cannot yet support standards-math derivation; the local staff Standards Workbench reports the row as `BLOCKED: insufficient sources` until additional independent coffee-specific concentration data lands. The percentile arithmetic, the clean/dirty designation, and the resulting candidate threshold all live in `data/workbench/standards/coffee.md`, never on this public page.

## Historical recalls and enforcement

No coffee-specific lead, cadmium, or arsenic recall enforcement actions are currently loaded in the corpus. The category has occasionally seen mycotoxin and pesticide enforcement (separate analytical scope) and rare lead-in-ceramic-mug consumer alerts (covered under the packaging lever above), but the heavy-metals-in-coffee enforcement record is thin. This section will be populated as recall events are ingested.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Coffee. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Coffee (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Coffee (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/arsenic-total\|tAs]] | Coffee (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
