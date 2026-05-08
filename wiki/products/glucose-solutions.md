---
title: Glucose Solutions
type: product-category
category: glucose-solutions
category_label: Infant Support Products
base_taxonomy: glucose-solution
variant_type: bridge
primary_metals_of_concern: [Al, Cd, Pb]
vulnerable_population: infants-0-12mo
audience: [regulator, educator, consumer, app]
review_state: draft
updated: 2026-04-29
---

# Glucose Solutions

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
<td><a href="../products/glucose-solutions" class="internal" data-slug="products/glucose-solutions">Glucose Solutions</a></td>
<td>Bridge/context</td>
<td>Current row</td>
<td>none</td>
<td>none</td>
<td>Retained for context only; do not merge into locked rows without an explicit taxonomy decision.</td>
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
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
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
<td>No loaded source page yet.</td>
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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 3 metal/species rows (Al, Cd, and Pb).</td>
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




<!-- END: hmi-product-crosswalk -->

_Stub page. This bridge node exists because Dabeka et al. 2011 measured 5% glucose solutions alongside infant formulae and oral electrolytes. These products are not one of the locked Category 1 infant-food rows, but they are relevant to infant exposure context._

## Current Source Links

- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian 5% glucose solution summary: Al mean 73 ng/g and max 239 ng/g, Cd mean 0.01 ng/g, and Pb mean 0.09 ng/g as consumed.

## Row Mapping

Keep these values separate from infant formula and food rows. They may matter for infant exposure context, but they should not be pooled into formula upper-percentile or max calculations.
