---
type: product-category
category: fruit-juices-apple-containing
hmtc_category: 5
hmtc_row: 2
label: "Fruit juices, apple-containing"
base_taxonomy: fruit-juices
variant_type: contamination_platform
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice, apple]
primary_metals_of_concern: [iAs, Pb]
vulnerable_population: general_population
applicable_regulations: [fda2023_ias_apple_juice_10, fda2022_draft_pb_apple_juice_10]
evidence_fitness: EF-5
public_evidence_label: Data gap
review_state: draft
hmtc_threshold_status: data_gap
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 2
---

# Fruit Juices, Apple-Containing

This page is Category 5 row 2 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction started |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| standards use | Routing and evidence-gap tracking only; not a certification threshold |


<!-- BEGIN: hmi-product-crosswalk -->
<span id="regulatory-match-status"></span>

## Standards Evidence Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This is the product evidence matrix for standards development. It does not treat a single study statistic as a finished standard. The page shows the metal, extracted N, grouped source statistics, regulatory reference values, source pages, and evidence gaps so cited calculations can be run from approved rows.

<p class="hmi-standards-readiness-note"><strong>Calculation boundary:</strong> public product pages show inputs and completeness, not final standards math. A single distribution-capable source or summary/range-only evidence remains an input until the fit-source pool, basis/species decisions, censoring rules, and calculation trace are documented.</p>

## Platform And Normalization Snapshot

<!-- audience: standards-development, regulator, retailer, brand, legal, app -->

This is the computation layer between the source inventory and any standards calculation. It makes the row relationship, basis state, and source-specific distribution inputs visible without turning them into a finished HMTc limit. The method boundary is summarized on the <a href="../methodology" class="internal" data-slug="methodology">methodology page</a>.

<div class="table-container">
<table class="hmi-platform-map-table">
<thead>
<tr>
<th>Row</th>
<th>Platform role</th>
<th>Relationship</th>
<th>Platform metals</th>
<th>Basis states</th>
<th>Computation use</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../products/fruit-juices-apple-containing" class="internal" data-slug="products/fruit-juices-apple-containing">Fruit juices, apple-containing</a></td>
<td>Contamination platform</td>
<td>Current row</td>
<td>none</td>
<td>none</td>
<td>May supply dirty P10 source inputs for affected metals; without fit dirty data the row remains held to clean.</td>
</tr>
</tbody>
</table>
</div>

<h3>Normalization Workflow</h3>
<div class="table-container">
<table class="hmi-normalization-table">
<thead>
<tr>
<th>Step</th>
<th>Status</th>
<th>Current handling</th>
<th>Blocked until</th>
</tr>
</thead>
<tbody>
<tr>
<td>Basis tagging</td>
<td><span class="hmi-confidence-chip hmi-confidence-chip--gap">Missing</span></td>
<td>No structured measured rows are loaded.</td>
<td>Every value used for computation carries basis, unit, matrix, and censoring fields.</td>
</tr>
<tr>
<td>Within-basis distribution</td>
<td><span class="hmi-confidence-chip hmi-confidence-chip--gap">No input</span></td>
<td>No direct product-row distribution statistic is loaded for this row.</td>
<td>Fit-source pool is reviewed and competing source rows are adjudicated.</td>
</tr>
<tr>
<td>Cross-basis conversion</td>
<td><span class="hmi-confidence-chip hmi-confidence-chip--review">No conversion applied</span></td>
<td>No cross-basis pooling is applied on the public page.</td>
<td>A source-backed preparation factor or product-specific conversion model is approved and logged.</td>
</tr>
<tr>
<td>Platform relationship</td>
<td><span class="hmi-confidence-chip hmi-confidence-chip--gap">Unpaired</span></td>
<td>No clean/contamination counterpart is declared for this row.</td>
<td>Affected metals, clean floor, and held-to-clean behavior are reviewed by row.</td>
</tr>
<tr>
<td>Calculation handoff</td>
<td><span class="hmi-confidence-chip hmi-confidence-chip--gap">Not computable</span></td>
<td>The row remains a source inventory and gap map until distribution inputs exist.</td>
<td>Records are approved for internal use and the deterministic standards workbench produces a calculation trace.</td>
</tr>
</tbody>
</table>
</div>

<div class="table-container">
<table class="hmi-standards-evidence-table">
<thead>
<tr>
<th>Metal</th>
<th>N</th>
<th>Loaded source values</th>
<th>Regulatory reference values</th>
<th>Source pages</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td><ul class="hmi-compact-list"><li><strong>FDA:</strong> 10 ug/kg Pb; ready-to-drink; <a href="../regulations/fda2022-draft-lead-juice" class="internal" data-slug="regulations/fda2022-draft-lead-juice">FDA 2022 draft</a></li><li><strong>EU:</strong> 30 ug/kg Pb; wet/reconstituted; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li></ul></td>
<td><div class="hmi-source-chip-row"><a href="../sources/fda2022-tds-elements-fy2018-fy2020" class="internal hmi-source-chip" data-slug="sources/fda2022-tds-elements-fy2018-fy2020">Fda 2022</a></div></td>
</tr>
<tr>
<td><a href="../metals/arsenic-inorganic" class="internal" data-slug="metals/arsenic-inorganic">iAs</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td><ul class="hmi-compact-list"><li><strong>FDA:</strong> 10 ug/kg iAs; juice; <a href="../regulations/fda2023-inorganic-arsenic-apple-juice" class="internal" data-slug="regulations/fda2023-inorganic-arsenic-apple-juice">FDA 2023 guidance</a></li><li><strong>EU:</strong> 20 ug/kg iAs; wet/reconstituted; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li></ul></td>
<td><div class="hmi-source-chip-row"><a href="../sources/fda2022-tds-elements-fy2018-fy2020" class="internal hmi-source-chip" data-slug="sources/fda2022-tds-elements-fy2018-fy2020">Fda 2022</a></div></td>
</tr>
</tbody>
</table>
</div>

<p class="hmi-source-route-summary"><strong>Reading note:</strong> Loaded source values are grouped by source here. Use the downloadable measured-values ledger below when you need every extracted product-row entry.</p>

## Standards Decision Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This matrix translates the product evidence into the decisions the page needs to support. It keeps HMTc standards calculations, regulatory references, operational QC, and legal defensibility separate so a visible limit is not mistaken for a finished HMTc standard.

<table class="hmi-decision-matrix-table">
<thead>
<tr>
<th>Decision lane</th>
<th>Question this page should answer</th>
<th>Current read</th>
<th>Next action</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HMTc standards development</strong></td>
<td>Build a defensible clean-subcategory standard only after source inclusion, product fit, metal species, basis, censoring, and confidence are resolved.</td>
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 2 metal/species rows (iAs and Pb).</td>
<td>Promote structured product-row values first; an HMTc standard cannot be selected from source coverage, a single study, or regulatory limits alone.</td>
</tr>
<tr>
<td><strong>Retail/spec programs</strong></td>
<td>See regulatory reference values beside the extracted evidence record, without treating either one as the other.</td>
<td>4 regulatory reference values loaded (FDA and EU). 1 row is visible as context but blocked for direct comparison.</td>
<td>Use the loaded FDA/EU values as jurisdiction-specific guardrails; keep basis, status, and analyte labels visible in any procurement spec.</td>
</tr>
<tr>
<td><strong>Brand QC operations</strong></td>
<td>Turn the evidence pool into a test plan: which metals, which product form, which lab basis, and what data fields must be captured.</td>
<td>No structured measured-value rows are loaded yet; QC can only use the crosswalk narrative as a gap map.</td>
<td>Match lab testing to the product row and metal species; capture sample count, LOD/LOQ, censoring, unit basis, and prepared-vs-as-sold handling.</td>
</tr>
<tr>
<td><strong>Legal/claims defense</strong></td>
<td>Separate evidence, standards work, and legal reference values so claims do not overstate comparability.</td>
<td>1 comparison row is blocked by basis, species, or scope and should be described as context only.</td>
<td>For any external claim, cite the source row and legal reference separately; when basis or species differ, state that no direct exceedance read is supported.</td>
</tr>
</tbody>
</table>

<details class="hmi-crosswalk-details">
<summary>Scope details and evidence-use notes</summary>
<ul>
<li><strong>iAs:</strong> Limit scope: apple juice. Basis: juice. Comparison note: Final apple-juice action level; direct iAs comparison remains blocked until apple-juice iAs rows are loaded. Use: Regulatory context and split trigger.</li>
<li><strong>iAs:</strong> Limit scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. Comparison note: EU maximum level loaded; field-finding comparison blocked until beverage occurrence sources are promoted with arsenic species. Use: External EU legal context alongside FDA apple-juice guidance; not standards value.</li>
<li><strong>Pb:</strong> Limit scope: single-strength apple juice. Basis: single-strength ready-to-drink juice. Comparison note: Draft apple-juice value only; not for implementation; occurrence data are not a final regulatory comparison. Use: Draft context only.</li>
<li><strong>Pb:</strong> Limit scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. Comparison note: EU maximum level loaded; field-finding comparison blocked until beverage occurrence sources are promoted and berry/small-fruit scope is separated. Use: External EU legal context alongside FDA juice guidance; not standards value.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-gemsfood-arsenic-context -->
## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food adds broad fruit-juice inorganic arsenic context and upstream apple-fruit context for this apple-containing juice category. Because no exact Apple juice row is present in the export, these rows are routed as occurrence context next to FDA/EU reference values, not as final standards inputs or direct legal exceedance reads. Displayed values are ppm, converted from the GEMS ug/kg summary values by dividing by 1,000. [[sources/who-gemsfood-heavy-metal-contaminants]]

| Routed GEMS food row | Arsenic species | Region | N | P50 ppm | P95 ppm | Max ppm | Use note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fruit juice | iAs | PAHO | 619 | 0.00125 | 0.008664 | 0.0555 | Best available juice-context row; GEMS does not label it apple-only. |
| Fruit or vegetable juice NES | iAs | PAHO | 240 | 0.00057 | 0.003036 | 0.01297 | Broader juice row; use as beverage context. |
| Fruit juice | iAs | EURO | 70 | 0 | 0.00555 | 0.03 | Additional fruit-juice iAs context. |
| Fruit juice | tAs | EURO | 1,358 | 0 | 0.013 | 0.382 | Total arsenic; not interchangeable with iAs. |
| Apple | iAs | PAHO | 39 | 0.00071 | 0.01261 | 0.0546 | Upstream apple-fruit row; not a juice matrix. |
| Apple | tAs | EURO | 639 | 0 | 0.02 | 0.102 | Upstream apple-fruit row; not a juice matrix. |
<!-- END: hmi-gemsfood-arsenic-context -->

## Sources


- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/who-gemsfood-heavy-metal-contaminants]]
