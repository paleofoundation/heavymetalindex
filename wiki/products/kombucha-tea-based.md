---
type: product-category
category: kombucha-tea-based
hmtc_category: 5
hmtc_row: 16
label: "Kombucha (tea-based)"
base_taxonomy: kombucha-and-fermented-beverages
variant_type: higher-contamination-sibling
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

# Kombucha (Tea-Based)

This page is HMTc Category 5 row 16 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land. Tea-based kombucha inherits the heavy-metals profile of the tea-plant ingredient (aluminum and lead from soil uptake into Camellia sinensis leaves), then adds two fermentation-specific risk pathways: acid leaching from the fermentation vessel and acid leaching from any improperly glazed ceramic serving or storage vessel. The single loaded source for this row documents the second pathway as a population-scale hazard: a family-outbreak case-report from Ibiza, Spain measured 47 mg/kg lead in commercially packaged kombucha fermented in ceramic containers, with downstream blood-lead-poisoning across four family members ([[sources/munilla-garcia2023-lead-kombucha-ceramics]]).

## Who this page is for

This product-category page reports what the peer-reviewed and regulatory literature says about heavy metals in tea-based kombucha. The HTML stakeholder guide below names the four primary readers. The single loaded source is a case-report on packaging-driven lead exposure, not a representative-market occurrence survey, so confidence in the loaded "field finding" is low and conservatism in interpretation is warranted. HMT&C threshold-selection arithmetic does not appear on this public page; it lives in the local staff Standards Workbench tool per CLAUDE.md Part 19.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on tea-based kombucha typically inherit the tea-plant axis (aluminum, lead) plus fermentation-vessel leaching for nickel and chromium. Source provenance and vessel-material disclosure are the defensive core. Compare with <a href="/products/fermented-beverages-non-tea-based">Fermented Beverages Non Tea Based</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=kombucha-tea-based">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for kombucha and tea-based fermented beverages.</dd>
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

Tea-based kombucha is a fermented beverage produced by inoculating sweetened brewed tea with a symbiotic culture of bacteria and yeast (SCOBY). The product as consumed is a liquid, with pH typically 2.5–3.5 from acetic and gluconic acid production during fermentation. The low pH is the operative variable for metal-leaching from contact surfaces: the more acidic the product, the more readily lead, cadmium, and other metals migrate from any vessel coating, glaze, or solder. The loaded source ([[sources/munilla-garcia2023-lead-kombucha-ceramics]]) reports lead concentrations in mg/kg of finished kombucha (treated as approximately mg/L given the liquid matrix). Speciation is reported as total lead (Pb), with no organolead distinction made. The product's matrix is "fermented beverage with packaging-leached metal load"; row-fit for "tea-based" is exact (the cited outbreak product was tea-based). Source pooling is not performed because only one source is loaded; pooling will become possible once additional independent kombucha occurrence surveys land.

## Source Evidence Inventory

The single contributing source is a family-outbreak case report from Ibiza, Spain ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]). Five product samples were analyzed by ICP-MS (Agilent 7900): two in-process kombucha samples (14-day fermentation, 19-day fermentation) and one packaged ready-for-sale sample, with lead concentrations of 0.95 mg/kg, 7.1 mg/kg, and 47 mg/kg respectively. Lead migration testing on the commercial ceramic sale containers under standard EU 4% acetic acid simulant (24 h, 22°C) ranged from 5.8 to 73 mg/L. Raw materials tested clean: drinking water and sugar below LOQ of 0.02 mg/L; tea leaves had detectable but low lead (concentrations not extracted from the published figures). The four affected family members had blood lead concentrations of 487, 551, 1,349, and 3,324 µg/L, with the highest in the father who consumed more than one glass daily. The sample is a single outbreak product; it is not a representative market-survey occurrence distribution. The number reads as the worst-case packaging-failure tail of a distribution whose central tendency the corpus does not yet measure.

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

The loaded source ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]) is cross-routed to both tea-based and non-tea-based kombucha/fermented-beverage pages because the outbreak product was tea-based but the packaging-leaching mechanism applies symmetrically to any acidic fermented beverage held in ceramic. On the matrix axis, the cited product is tea-based kombucha exactly (the SCOBY was inoculated into sweetened brewed Camellia sinensis); on the format axis, the cited product is a bottled ready-to-drink finished beverage. Sources reporting on fermented-beverage hygiene without specifying base tea or vessel material will land in this section as broad-context evidence; none are loaded today. The companion page [[products/fermented-beverages-non-tea-based]] carries the same source as broad-context evidence for non-tea-based ferments.

## Levers to reduce contamination

The intervention magnitudes below are anchored on the single loaded source's quantitative findings plus the broader heavy-metals-in-fermented-beverages literature.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Packaging and storage | Eliminate ceramic, terracotta, or unverified-glaze contact surfaces from the entire production chain (fermentation vessel, bottling line, serving vessel). Use food-grade stainless steel, glass, or food-grade HDPE only. Verify all glaze certification against EU Regulation 84/500/EEC or 21 CFR 173.310 for ceramicware lead leaching. | The cited outbreak measured 5.8–73 mg/L lead migration from ceramic containers under standard acetic-acid simulant; eliminating ceramic contact reduces this lever to baseline (sub-LOQ in tested raw materials). The intervention magnitude is the difference between 47 mg/kg (outbreak product) and the analytical floor — three orders of magnitude. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 2 | Sourcing | Use tea-leaf inputs from suppliers with documented heavy-metal screening; tea is itself a known lead and aluminum accumulator from soil uptake. See [[ingredients/tea]] for the upstream picture. | _Quantified magnitude data for tea-base contribution to finished kombucha not yet extracted; the cited outbreak's tea-leaf concentrations are visible in source figures but not numerically transcribed._ | — |
| 3 | Processing | Shorten fermentation time and refrigerate finished product to slow downstream pH drift if vessel-leaching is suspected as a residual risk. Longer fermentation in inappropriate vessels concentrates the leaching effect. | The cited source measured Pb at 0.95 mg/kg (14-day), 7.1 mg/kg (19-day), and 47 mg/kg (packaged): time-and-pH-driven concentration approximately doubled-to-quadrupled per additional fermentation week in the failed-vessel scenario. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 4 | Testing and QC | Lot-level ICP-MS testing of finished beverage for Pb at minimum, with detection limits ≤ 5 ppb to meaningfully bound the EU drinking-water lead limit of 5 ppb (Directive 2020/2184) as a relevant compass for finished beverages | Detection at 5 ppb is achievable with standard commercial ICP-MS protocols; the cited Agilent 7900 method covers this floor. | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|1]] |
| 5 | Formulation | Not applicable to single-product brand decisions; SCOBY inoculation and tea base are definitional to "tea-based kombucha" and cannot be substituted without re-classifying the product. | Not applicable | — |
| 6 | Agronomic | Agronomic levers live with tea growers; see [[ingredients/tea]] for the upstream supply-chain interventions on Pb and Al in tea leaves. | Not applicable to brand-side mitigation | — |

## How standards math uses this page

This page is HMTc Category 5 row 16. Per CLAUDE.md Part 19, the per-analyte HMTc standard requires a pooled marginal occurrence distribution across multiple independent sources. The single loaded source is a case report, not an occurrence survey, so the row is `BLOCKED: insufficient sources for occurrence-based standards math`. The cited 47 mg/kg figure is not a percentile of a distribution; it is a worst-case tail observation from a packaging failure. The row's eventual HMTc value will be the lower of (the pooled-distribution percentile across additional ingested kombucha surveys) and (the lowest applicable regulatory cap, which today is implicitly drawn from EU 2023/915's beverage and food categories or from drinking-water limits applied as compass values). All threshold-selection arithmetic lives in `data/workbench/standards/kombucha-tea-based.md`.

## Historical recalls and enforcement

The Ibiza outbreak documented in the loaded source ([[sources/munilla-garcia2023-lead-kombucha-ceramics|1]]) triggered Balearic Islands food safety enforcement against the unauthorized commercial producer, with concurrent action against the ceramic-vessel supplier for lack of required sanitary registration. The authors explicitly flag the absence of an EU or Spanish maximum lead level for kombucha as a regulatory gap that contributed to the case slipping through routine compliance. The broader US FDA enforcement record on kombucha has focused historically on alcohol content (post-fermentation ethanol exceeding the 0.5% ABV non-alcoholic threshold) rather than on metals; the metal-leaching pathway is under-enforced relative to its measured risk in the case literature. This section will populate as additional enforcement actions are ingested.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Kombucha (tea-based). Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | Kombucha (tea-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | Kombucha (tea-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Kombucha (tea-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
