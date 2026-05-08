---
title: Infant Formula Powder
type: product-category
category: infant-formula-powder
category_label: Infant and Child Foods
base_taxonomy: infant-formula-powder
variant_type: base
child_rows: ["[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-powder-soy-based]]"]
primary_metals_of_concern: [Al, Ni, Cd, Pb, tAs, iAs, tHg, MeHg, Cr-VI, Sn]
vulnerable_population: infants-0-12mo
audience: [regulator, educator, consumer, app]
review_state: draft
updated: 2026-04-29
---

# Infant Formula Powder

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
<td><a href="../products/infant-formula-powder" class="internal" data-slug="products/infant-formula-powder">Infant Formula Powder</a></td>
<td>Base</td>
<td>Current row</td>
<td>none</td>
<td>none</td>
<td>Use only after row identity, basis, and source fitness are reviewed.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-powder-non-soy" class="internal" data-slug="products/infant-formula-powder-non-soy">Infant Formula, Powder (Non-Soy)</a></td>
<td>Clean benchmark</td>
<td>Related formula context</td>
<td>tAs, Pb, Cd, tHg, Al, Sn, Cr-total, iAs, and Ni</td>
<td>prepared-for-feeding and as-sold</td>
<td>May supply clean P90 source inputs after Evidence Fitness, basis, and source-pool review.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-powder-soy-based" class="internal" data-slug="products/infant-formula-powder-soy-based">Infant Formula, Powder (Soy-Based)</a></td>
<td>Contamination platform</td>
<td>Related formula context</td>
<td>Al, Ni, Cd, tAs, Pb, and tHg</td>
<td>prepared-for-feeding and as-sold</td>
<td>May supply dirty P10 source inputs for affected metals; without fit dirty data the row remains held to clean.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-rtf-liquid-non-soy" class="internal" data-slug="products/infant-formula-rtf-liquid-non-soy">Infant Formula, RTF Liquid (Non-Soy)</a></td>
<td>Clean benchmark</td>
<td>Related formula context</td>
<td>tAs, Pb, Cd, tHg, and Al</td>
<td>prepared-for-feeding</td>
<td>May supply clean P90 source inputs after Evidence Fitness, basis, and source-pool review.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-rtf-liquid-soy-based" class="internal" data-slug="products/infant-formula-rtf-liquid-soy-based">Infant Formula, RTF Liquid (Soy-Based)</a></td>
<td>Contamination platform</td>
<td>Related formula context</td>
<td>Al, Ni, Cd, tAs, Pb, and tHg</td>
<td>prepared-for-feeding</td>
<td>May supply dirty P10 source inputs for affected metals; without fit dirty data the row remains held to clean.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-concentrated-liquid-non-soy" class="internal" data-slug="products/infant-formula-concentrated-liquid-non-soy">Infant Formula, Concentrated Liquid (Non-Soy)</a></td>
<td>Bridge/context</td>
<td>Bridge formula context; not a locked row</td>
<td>tAs, Pb, Cd, and tHg</td>
<td>prepared-for-feeding</td>
<td>Retained for context only; do not merge into locked rows without an explicit taxonomy decision.</td>
</tr>
<tr>
<td><a href="../products/infant-formula-concentrated-liquid-soy-based" class="internal" data-slug="products/infant-formula-concentrated-liquid-soy-based">Infant Formula, Concentrated Liquid (Soy-Based)</a></td>
<td>Bridge/context</td>
<td>Bridge formula context; not a locked row</td>
<td>tAs, Pb, Cd, and tHg</td>
<td>prepared-for-feeding</td>
<td>Retained for context only; do not merge into locked rows without an explicit taxonomy decision.</td>
</tr>
<tr>
<td>Infant formula, powder, amino acid-based</td>
<td>Specialty/out-of-scope</td>
<td>Specialty/out-of-scope formula context</td>
<td>tAs, Pb, Cd, and tHg</td>
<td>prepared-for-feeding</td>
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
<td><a href="../metals/arsenic-inorganic" class="internal" data-slug="metals/arsenic-inorganic">iAs</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/arsenic-total" class="internal" data-slug="metals/arsenic-total">tAs</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/mercury-total" class="internal" data-slug="metals/mercury-total">tHg</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/mercury-methyl" class="internal" data-slug="metals/mercury-methyl">MeHg</a></td>
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
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/tin" class="internal" data-slug="metals/tin">Sn</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No loaded source page yet.</td>
</tr>
<tr>
<td><a href="../metals/chromium-vi" class="internal" data-slug="metals/chromium-vi">Cr-VI</a></td>
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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 10 metal/species rows (Al, Ni, Cd, Pb, tAs, iAs, tHg, MeHg, Cr-VI, and Sn).</td>
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

_Stub page. This base product node exists for sources that report powdered infant formula without separating non-soy from soy-based formulas. The Category 1 row pages remain [[products/infant-formula-powder-non-soy]] and [[products/infant-formula-powder-soy-based]]._

## Current Source Links

- [[sources/astolfi2021-italy-powdered-infant-formula-elements]] — Italian powdered infant formula survey; 11 formulas, 22 packs, 40 elements by ICP-MS.
- [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] — Peshawar infant-formula nickel mean/range context; formula subgroup is not cow-milk/non-soy resolved.
- [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]] — Pakistan infant formula milk brand nickel range context; formula brands are not cow-milk/non-soy resolved.

## Row Mapping

Use this page when a source supports powdered infant formula generally but does not provide enough information to map cleanly to non-soy or soy-based subrows. Do not compute public high-end distribution values on this base page; move row-fit values to the appropriate standards row only when soy status, matrix basis, and statistic type are clear.

## Broad Formula Context

These sources can inform retrieval priorities and source-scope context, but they should not appear as direct evidence on [[products/infant-formula-powder-non-soy]] or [[products/infant-formula-powder-soy-based]] until the original data can classify the formula type.

| Source | What it contributes | Why it stays on the base page |
| --- | --- | --- |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | Powdered infant formula metals from Italy, including Ni, Cd, Pb, and Sn summaries. | Powder format is clear, but soy/non-soy status is not separated in the extracted text. |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | Peshawar infant-formula nickel mean and range. | Infant-formula subgroup is not cow-milk/non-soy resolved. |
| [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]] | Pakistan infant formula milk brand nickel range and high source-scope maximum. | Formula brands are not cow-milk/non-soy resolved, and the high nickel maximum still needs PDF image QA. |
