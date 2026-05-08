---
type: product-category
category: plant-milks-soy-based
hmtc_category: 5
hmtc_row: 6
label: "Plant milks, soy-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, soy]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Plant Milks, Soy-Based

This page is Category 5 row 6. It is no longer a pure scaffold: the row has early finished-product occurrence evidence, but the evidence is still insufficient for standards threshold-setting.

## Decision Snapshot

| Field                 | Status                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| Row state             | Early occurrence evidence promoted                                                 |
| Best current source   | [[sources/milani2023-trace-elements-soy-based-beverages]]                          |
| Support source        | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                    |
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn; not threshold-ready                          |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/soy]]                                    |
| standards use              | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

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
<td><a href="../products/plant-milks-soy-based" class="internal" data-slug="products/plant-milks-soy-based">Plant milks, soy-based</a></td>
<td>Contamination platform</td>
<td>Current row</td>
<td>Al, Ni, and Cd</td>
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
<td><span class="hmi-confidence-chip hmi-confidence-chip--blocked">Blocked</span></td>
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
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/nickel" class="internal" data-slug="metals/nickel">Ni</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><div class="hmi-source-chip-row"><a href="../sources/milani2023-trace-elements-soy-based-beverages" class="internal hmi-source-chip" data-slug="sources/milani2023-trace-elements-soy-based-beverages">Milani 2023</a></div></td>
</tr>
<tr>
<td><a href="../metals/arsenic-total" class="internal" data-slug="metals/arsenic-total">tAs</a>; <a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a>; <a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a>; <a href="../metals/tin" class="internal" data-slug="metals/tin">Sn</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><div class="hmi-source-chip-row"><a href="../sources/milani2023-trace-elements-soy-based-beverages" class="internal hmi-source-chip" data-slug="sources/milani2023-trace-elements-soy-based-beverages">Milani 2023</a></div></td>
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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 4 metal/species rows (Al, tAs; Cd; Pb; Sn, Ni, and Cd).</td>
<td>Promote structured product-row values first; an HMTc standard cannot be selected from source coverage, a single study, or regulatory limits alone.</td>
</tr>
<tr>
<td><strong>Retail/spec programs</strong></td>
<td>See regulatory reference values beside the extracted evidence record, without treating either one as the other.</td>
<td>No FDA or EU product-specific reference value is loaded for this row.</td>
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
<td>No blocked comparison row is flagged in the loaded crosswalk.</td>
<td>For any external claim, cite the source row and legal reference separately; when basis or species differ, state that no direct exceedance read is supported.</td>
</tr>
</tbody>
</table>

<details class="hmi-crosswalk-details">
<summary>Scope details and evidence-use notes</summary>
<ul>
<li><strong>Al:</strong> Limit scope: No product-specific Al value loaded for soy-based beverages.. Comparison note: Occurrence evidence only; PTWI estimate is not a product limit. Use: Prioritization input; not a compliance row.</li>
<li><strong>tAs; Cd; Pb; Sn:</strong> Limit scope: Milani 2023 compares As, Cd, Pb, and Sn to Brazilian/MERCOSUR thresholds, but direct legal rows are not loaded yet.. Comparison note: Blocked for compliance until direct legal text, unit basis, density conversion, and As species are reviewed. Use: Context only.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

## Sources

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
