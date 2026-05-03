---
title: Infant Formula, Powder (Soy-Based)
type: product-category
category: infant-formula-powder-soy-based
hmtc_row: 2
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, powder (soy-based)"
base_taxonomy: infant-formula-powder
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
ingredient_targets: [infant-formula-powder, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-powder-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-02
sources: 12
---

# Infant Formula, Powder (Soy-Based)

This page is a structural scaffold for Category 1 row 2. Soy-specific powder evidence now includes UK dry soy-formula category values, historical Canadian milk-free/soy-base powder cadmium distributions, and EU pooled soy-formula basket values; current-market soy-powder product-level distributions remain incomplete.

<!-- BEGIN: hmi-product-crosswalk -->
<span id="regulatory-match-status"></span>

## Standards Evidence Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This is the product evidence matrix for standards development. It does not treat a single study statistic as a finished standard. The page shows the metal, extracted N, loaded source statistics, regulatory reference values, resources, and evidence gaps so cited calculations can be run from approved rows.

<p class="hmi-standards-readiness-note"><strong>Calculation boundary:</strong> public product pages show inputs and completeness, not final standards math. A single distribution-capable source or summary/range-only evidence remains an input until the fit-source pool, basis/species decisions, censoring rules, and calculation trace are documented.</p>

<table class="hmi-standards-evidence-table">
<thead>
<tr>
<th>Metal</th>
<th>N</th>
<th>Loaded source values</th>
<th>Regulatory reference values</th>
<th>Resources</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a></td>
<td><strong>57</strong>
<span class="hmi-crosswalk-status-note">3 sources; prepared-for-feeding and as-sold</span></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a>: N=38; prepared-for-feeding; highest 1.1 ppb</li><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a>: N=15; prepared-for-feeding; median 1.27; highest 1.9 ppb</li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a>: N=4; as-sold; mean 109.4; range 98.6-119; highest 119 ppb</li></ul></td>
<td><ul class="hmi-compact-list"><li><strong>EU:</strong> 20 ug/kg Pb; as sold; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li><li>FDA: no formula-specific regulatory value loaded for this metal/species.</li></ul></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></li><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><strong>57</strong>
<span class="hmi-crosswalk-status-note">3 sources; prepared-for-feeding and as-sold</span></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a>: N=38; prepared-for-feeding; highest 1.4 ppb</li><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a>: N=15; prepared-for-feeding; mean 1.56; median 1.39; highest 3.47 ppb</li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a>: N=4; as-sold; mean 11.7; range 8.3-14.5; highest 14.5 ppb</li></ul></td>
<td><ul class="hmi-compact-list"><li><strong>EU:</strong> 20 ug/kg Cd; as sold; <a href="../regulations/eu-2023-915-cadmium" class="internal" data-slug="regulations/eu-2023-915-cadmium">EU 2023-915</a></li><li>FDA: no formula-specific regulatory value loaded for this metal/species.</li></ul></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></li><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/arsenic-inorganic" class="internal" data-slug="metals/arsenic-inorganic">iAs</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No inorganic-arsenic values are loaded. Total arsenic is present elsewhere but cannot substitute for iAs.</td>
<td><ul class="hmi-compact-list"><li><strong>EU:</strong> 20 ug/kg iAs; as sold; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li><li>FDA: no formula-specific regulatory value loaded for this metal/species.</li></ul></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/arsenic-total" class="internal" data-slug="metals/arsenic-total">tAs</a></td>
<td><strong>38</strong>
<span class="hmi-crosswalk-status-note">1 source; prepared-for-feeding</span></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a>: N=38; prepared-for-feeding; highest 2.2 ppb</li></ul></td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/mercury-total" class="internal" data-slug="metals/mercury-total">tHg</a></td>
<td><strong>38</strong>
<span class="hmi-crosswalk-status-note">1 source; prepared-for-feeding</span></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a>: N=38; prepared-for-feeding; highest 0.3 ppb</li></ul></td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/nickel" class="internal" data-slug="metals/nickel">Ni</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><ul class="hmi-compact-list"><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><strong>22</strong>
<span class="hmi-crosswalk-status-note">4 sources; prepared-for-feeding and as-sold</span></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a>: N=15; prepared-for-feeding; mean 733; median 713; highest 1461 ppb</li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a>: N=4; as-sold; mean 2270; range 1740-2720; highest 2720 ppb</li><li><a href="../sources/burrell2010-aluminium-in-infant-formulas" class="internal" data-slug="sources/burrell2010-aluminium-in-infant-formulas">Burrell 2010</a>: N=1; as-sold; range 629-629; highest 629 ppb</li><li><a href="../sources/chuchu2013-aluminium-in-infant-formulas" class="internal" data-slug="sources/chuchu2013-aluminium-in-infant-formulas">Chuchu 2013</a>: N=2; as-sold; range 656-756; highest 756 ppb</li></ul></td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><ul class="hmi-compact-list"><li><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></li><li><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></li><li><a href="../sources/burrell2010-aluminium-in-infant-formulas" class="internal" data-slug="sources/burrell2010-aluminium-in-infant-formulas">Burrell 2010</a></li><li><a href="../sources/chuchu2013-aluminium-in-infant-formulas" class="internal" data-slug="sources/chuchu2013-aluminium-in-infant-formulas">Chuchu 2013</a></li><li>17 routed sources still need follow-up. 17 have matched local source files but still need extraction or review.</li></ul></td>
</tr>
</tbody>
</table>

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
<td>4 metals have at least one distribution-capable row loaded (tAs, Pb, Cd, and tHg); standards math still requires source-fit and basis review. Standards matrix tracks 7 metal/species rows (Pb, Cd, iAs, tAs, tHg, Al, and Ni). 17 routed sources still need follow-up before the evidence pool is complete. 17 have matched local source files but still need extraction or review.</td>
<td>Use the standards evidence matrix as the row index; add missing sources, normalize basis/species, then run the standards calculation only after the source pool is complete enough.</td>
</tr>
<tr>
<td><strong>Retail/spec programs</strong></td>
<td>See regulatory reference values beside the extracted evidence record, without treating either one as the other.</td>
<td>3 regulatory reference values loaded (EU). 3 rows are visible as context but blocked for direct comparison.</td>
<td>Use the loaded FDA/EU values as jurisdiction-specific guardrails; keep basis, status, and analyte labels visible in any procurement spec.</td>
</tr>
<tr>
<td><strong>Brand QC operations</strong></td>
<td>Turn the evidence pool into a test plan: which metals, which product form, which lab basis, and what data fields must be captured.</td>
<td>12 measured-value rows loaded across 5 metals; current basis: prepared-for-feeding and as-sold.</td>
<td>Match lab testing to the product row and metal species; capture sample count, LOD/LOQ, censoring, unit basis, and prepared-vs-as-sold handling.</td>
</tr>
<tr>
<td><strong>Legal/claims defense</strong></td>
<td>Separate evidence, standards work, and legal reference values so claims do not overstate comparability.</td>
<td>3 comparison rows are blocked by basis, species, or scope and should be described as context only. 17 routed sources still need follow-up before the evidence pool is complete. 17 have matched local source files but still need extraction or review.</td>
<td>Prioritize pending extraction and row-fit sources, then cite each conclusion with source, product row, metal species, basis, jurisdiction, and comparison status.</td>
</tr>
</tbody>
</table>

<details class="hmi-crosswalk-details">
<summary>Scope details and evidence-use notes</summary>
<ul>
<li><strong>Pb:</strong> Limit scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as powder. Basis: product as placed on market. Comparison note: EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. Use: External EU legal ceiling; use for standards context only after basis conversion.</li>
<li><strong>Cd:</strong> Limit scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder and manufactured from soy protein isolates alone or mixed with cow's milk proteins. Basis: product as placed on market. Comparison note: EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. Use: External EU legal ceiling; use for standards context only after basis conversion.</li>
<li><strong>iAs:</strong> Limit scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder. Basis: product as placed on market. Comparison note: EU maximum level loaded; comparison blocked because occurrence row is total arsenic and prepared-for-feeding while EU value is inorganic arsenic and product-as-placed. Use: External EU legal ceiling and speciation gap marker; not a direct comparison.</li>
</ul>
</details>


## Measured Values At A Glance

<!-- audience: regulator, educator, consumer, app -->

This table is the fast route from a metal name to the loaded product-row values. It is an extraction ledger for N, mean, median, high/low context, basis, and source resources. It is not where final standards values are selected.

<table class="hmi-measured-values-table">
<thead>
<tr>
<th>Metal</th>
<th>Study</th>
<th>Product/basis</th>
<th>N</th>
<th>Loaded values</th>
<th>Use in standards work</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a></td>
<td><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></td>
<td>Infant formula powder, soy-based, as consumed<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>15</td>
<td>median 1.27; highest 1.9 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a></td>
<td><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></td>
<td>Infant Formula, Powder, Soy-based<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>38</td>
<td>highest 1.1 ppb</td>
<td>Distribution-capable input after row fit, basis, censoring, and clean-row review; not a standalone standard.</td>
</tr>
<tr>
<td><a href="../metals/lead" class="internal" data-slug="metals/lead">Pb</a></td>
<td><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></td>
<td>Soy-based infant formula powder, pasted Table 3<br><span class="hmi-crosswalk-status-note">as-sold</span></td>
<td>4</td>
<td>mean 109.4; range 98.6-119; highest 119 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></td>
<td>Infant formula powder, soy-based, as consumed<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>15</td>
<td>mean 1.56; median 1.39; highest 3.47 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></td>
<td>Infant Formula, Powder, Soy-based<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>38</td>
<td>highest 1.4 ppb</td>
<td>Distribution-capable input after row fit, basis, censoring, and clean-row review; not a standalone standard.</td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></td>
<td>Soy-based infant formula powder, pasted Table 3<br><span class="hmi-crosswalk-status-note">as-sold</span></td>
<td>4</td>
<td>mean 11.7; range 8.3-14.5; highest 14.5 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/arsenic-total" class="internal" data-slug="metals/arsenic-total">tAs</a></td>
<td><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></td>
<td>Infant Formula, Powder, Soy-based<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>38</td>
<td>highest 2.2 ppb</td>
<td>Distribution-capable input after row fit, basis, censoring, and clean-row review; not a standalone standard.</td>
</tr>
<tr>
<td><a href="../metals/mercury-total" class="internal" data-slug="metals/mercury-total">tHg</a></td>
<td><a href="../sources/fda2026-infant-formula-toxic-elements-special-survey" class="internal" data-slug="sources/fda2026-infant-formula-toxic-elements-special-survey">FDA 2026</a></td>
<td>Infant Formula, Powder, Soy-based<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>38</td>
<td>highest 0.3 ppb</td>
<td>Distribution-capable input after row fit, basis, censoring, and clean-row review; not a standalone standard.</td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><a href="../sources/burrell2010-aluminium-in-infant-formulas" class="internal" data-slug="sources/burrell2010-aluminium-in-infant-formulas">Burrell 2010</a></td>
<td>Soy-based formula powder, prepared estimate<br><span class="hmi-crosswalk-status-note">as-sold</span></td>
<td>1</td>
<td>range 629-629; highest 629 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><a href="../sources/chuchu2013-aluminium-in-infant-formulas" class="internal" data-slug="sources/chuchu2013-aluminium-in-infant-formulas">Chuchu 2013</a></td>
<td>Soy-based formula products, prepared estimate<br><span class="hmi-crosswalk-status-note">as-sold</span></td>
<td>2</td>
<td>range 656-756; highest 756 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><a href="../sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum" class="internal" data-slug="sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum">Dabeka 2011</a></td>
<td>Infant formula powder, soy-based, as consumed<br><span class="hmi-crosswalk-status-note">prepared-for-feeding</span></td>
<td>15</td>
<td>mean 733; median 713; highest 1461 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
<tr>
<td><a href="../metals/aluminum" class="internal" data-slug="metals/aluminum">Al</a></td>
<td><a href="../sources/kazi2009-toxic-elements-in-infant-formulae" class="internal" data-slug="sources/kazi2009-toxic-elements-in-infant-formulae">Kazi 2009</a></td>
<td>Soy-based infant formula powder, pasted Table 3<br><span class="hmi-crosswalk-status-note">as-sold</span></td>
<td>4</td>
<td>mean 2270; range 1740-2720; highest 2720 ppb</td>
<td>Summary/range input for evidence context; not enough for aggregate distribution math alone.</td>
</tr>
</tbody>
</table>

<p class="hmi-source-route-summary"><strong>Source routing check:</strong> 5 sources already have structured value rows for this product, 7 sources are cited on the page without structured value rows, and 10 declared formula sources are not yet visible here.</p>
<details class="hmi-crosswalk-details hmi-source-routing-audit" open>
<summary>Declared formula sources not yet visible on this page</summary>
<p>These rows are an inclusion audit, not a standards math table. Broad formula sources should be visible for traceability, but they stay out of standards calculations until powder/liquid, soy/non-soy, analyte species, basis, and distribution fitness are resolved.</p>
<table class="hmi-source-routing-table">
<thead>
<tr>
<th>Status</th>
<th>Declared route</th>
<th>Next action</th>
<th>Study</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--blocked">Needs routing</span></td>
<td>Exact product link</td>
<td>Promote this source to the product page, then decide whether structured values can be extracted.</td>
<td><a href="../sources/chung2021-china-infant-formula-toxic-elements" class="internal" data-slug="sources/chung2021-china-infant-formula-toxic-elements" title="Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market">Chung 2021</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--blocked">Needs routing</span></td>
<td>Exact product link</td>
<td>Promote this source to the product page, then decide whether structured values can be extracted.</td>
<td><a href="../sources/gardener2019-lead-cadmium-infant-formula-baby-food" class="internal" data-slug="sources/gardener2019-lead-cadmium-infant-formula-baby-food" title="Lead and cadmium contamination in a large sample of United States infant formulas and baby foods">Gardener 2019</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad powder</span></td>
<td>Broad powdered formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin" class="internal" data-slug="sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin" title="Determination of aflatoxin M1 and heavy metals in infant formula milk brands available in Pakistani markets">Akhtar 2017</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad powder</span></td>
<td>Broad powdered formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/almeida2022-brazil-infant-formula-toxic-metals" class="internal" data-slug="sources/almeida2022-brazil-infant-formula-toxic-metals" title="Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk">Almeida 2022</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad powder</span></td>
<td>Broad powdered formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/astolfi2021-italy-powdered-infant-formula-elements" class="internal" data-slug="sources/astolfi2021-italy-powdered-infant-formula-elements" title="Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment">Astolfi 2021</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad powder</span></td>
<td>Broad powdered formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/lutfullah2014-peshawar-dried-fluid-milk-metals" class="internal" data-slug="sources/lutfullah2014-peshawar-dried-fluid-milk-metals" title="Comparative study of heavy metals in dried and fluid milk in Peshawar by atomic absorption spectrophotometry">Lutfullah 2014</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad powder</span></td>
<td>Broad powdered formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/meli2024-chemical-characterization-baby-food-italy" class="internal" data-slug="sources/meli2024-chemical-characterization-baby-food-italy" title="Chemical characterization of baby food consumed in Italy">Meli 2024</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad formula</span></td>
<td>Broad formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/amarh2023-ghana-infant-food-heavy-metals" class="internal" data-slug="sources/amarh2023-ghana-infant-food-heavy-metals" title="Health risk assessment of some selected heavy metals in infant food sold in Wa, Ghana">Amarh 2023</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad formula</span></td>
<td>Broad formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/efsa-cadmium-contam-2009" class="internal" data-slug="sources/efsa-cadmium-contam-2009" title="Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food">Efsa Cadmium Contam 2009</a></td>
</tr>
<tr>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Broad formula</span></td>
<td>Broad formula</td>
<td>Promote as broad formula context; do not use in standards calculations until row fit is resolved.</td>
<td><a href="../sources/tatsuta2024-methylmercury-intake-children-duplicate-diet" class="internal" data-slug="sources/tatsuta2024-methylmercury-intake-children-duplicate-diet" title="Dietary intake of methylmercury by 0-5 years children using the duplicate diet method in Japan">Tatsuta 2024</a></td>
</tr>
</tbody>
</table>
</details>

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with first soy-specific distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: current soy-based powdered infant formula datasets that distinguish protein source while measuring [[metals/aluminum|Al]], [[metals/nickel|Ni]], [[metals/cadmium|Cd]], and the full testing panel.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set still does not support a modern soy-powder product-level concentration distribution. Dabeka 1987 provides N, mean, median, and range for milk-free or soy-base formula powders, but it is historical Canadian evidence and should be treated as formulation/packaging variance evidence rather than a current-market benchmark. [[sources/dabeka1987-canada-infant-formula-lead-cadmium]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| Historical formula powder distribution | [[metals/cadmium|Cadmium]] | Milk-free or soy-base infant formula powders | 15 | mean, median, range | mean 13.3 ppb; median 12.0 ppb; range 1.1-35 ppb | Supports median/max only | Historical Canadian formula data; milk-free and soy-base grouped. [[sources/dabeka1987-canada-infant-formula-lead-cadmium]] |
| UK category average | [[metals/aluminum|Aluminum]] | UK dry soy-based formula, as sold | 47 formula total; category n not reported | category average | 2550 ppb | Summary context only | Direct soy dry-formula category average; UK market. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK category average | [[metals/cadmium|Cadmium]] | UK dry soy-based formula, as sold | 47 formula total; category n not reported | category average | 11 ppb | Summary context only | Direct soy dry-formula category average; UK market. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK category average | [[metals/nickel|Nickel]] | UK dry soy-based formula, as sold | 47 formula total; category n not reported | category average | 200 ppb | Summary context only | Direct soy dry-formula category average; UK market. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| EU pooled market-basket concentration | [[metals/cadmium|Cadmium]] | EU starting and follow-on soy formula baskets | 42 total formula products pooled into baskets | basket values | 15.8 to 18.3 ppb | Summary context only | Pooled baskets, not individual products; unit normalization still needs source-table QA. [[sources/pandelova2012-eu-baby-food-formula-elements]] |
| EU pooled market-basket concentration | [[metals/lead|Lead]] | EU starting and follow-on soy formula baskets | 42 total formula products pooled into baskets | basket values | 20.1 to 30.5 ppb | Summary context only | Pooled baskets, not individual products; unit normalization still needs source-table QA. [[sources/pandelova2012-eu-baby-food-formula-elements]] |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey provides a product-label subset for soy-based powdered formula, expressed as prepared for feeding. These rows are useful for structured evidence review, but they still require review for row fit, non-detect policy, basis matching, jurisdiction composition, and confidence before standards use. The sample-level rows are retained in `data/evidence/category1_formula_special_survey_samples.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 38 | 38 | 0 | prepared for feeding; <LOD=0 lower-bound | 2.2 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 38 | 38 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.1 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 38 | 38 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.4 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 38 | 4 | 34 | prepared for feeding; <LOD=0 lower-bound | 0.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

Digest formula papers add soy-specific aluminum and cadmium context, mostly as source-reported means, medians, ranges, or maxima.

| Source | Metal | N | Basis | Mean | Median | Maximum | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 15 | as consumed | 733 | 713 | 1461 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 15 | as consumed | 1.56 | 1.39 | 3.47 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 15 | as consumed |  | 1.27 | 1.9 | Pb mean in the OCR table is ambiguous; median/range retained only. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/aluminum|Al]] | 4 soy-based rows in pasted Table 3 | dried powder | 2270 |  | 2720 | Direct soy-based powder context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/cadmium|Cd]] | 4 soy-based rows in pasted Table 3 | dried powder | 11.7 |  | 14.5 | Direct soy-based powder context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/lead|Pb]] | 4 soy-based rows in pasted Table 3 | dried powder | 109.4 |  | 119 | Direct soy-based powder context; source text has subgroup-count conflict. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 1 | source-reported prepared estimate | 629 |  | 629 | Direct soy-powder row; N=1, source reports prepared estimate and range only. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 2 | source-reported prepared estimate | 706 |  | 756 | Direct soy-powder row; N=2, source reports prepared estimates and range only. |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Soy-specific formula evidence is thinner than broad formula evidence, but the UK survey provides a direct dry soy-formula row and Jackson 2012 provides an ingredient-specific soy toddler-formula arsenic contrast.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/aluminum|Aluminum]] | UK dry soy-based formula, as sold | 2550 ug/kg | 2550 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Direct soy dry-formula category average; UK market. |
| [[metals/aluminum|Aluminum]] | UK soy-based formula powder, prepared estimate | 4.3 ug/g powder; 629 ug/L prepared estimate | 629 ppb prepared estimate | [[sources/burrell2010-aluminium-in-infant-formulas]] | Direct soy powder but N=1; useful source-scope maximum. |
| [[metals/aluminum|Aluminum]] | UK soy-based formula powders, prepared estimates | 3.92 to 5.27 ug/g powder; 656 to 756 ug/L prepared estimates | 656 to 756 ppb prepared estimate | [[sources/chuchu2013-aluminium-in-infant-formulas]] | Direct soy powder but N=2; useful source-scope range. |
| [[metals/arsenic-total|Total arsenic]] | UK dry soy-based formula, as sold | 7 ug/kg | 7 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Total arsenic; UK category average. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK dry soy-based formula, as sold | 4.6 ug/kg | 4.6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | iAs estimated/reported per survey method. |
| [[metals/cadmium|Cadmium]] | UK dry soy-based formula, as sold | 11 ug/kg | 11 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Direct soy dry-formula category average. |
| [[metals/cadmium|Cadmium]] | Historical Canadian milk-free or soy-base formula powders | mean 13.3 ppb; median 12.0 ppb; range 1.1-35 ppb | mean 13.3 ppb; median 12.0 ppb; range 1.1-35 ppb | [[sources/dabeka1987-canada-infant-formula-lead-cadmium]] | Historical data; milk-free and soy-base grouped. |
| [[metals/cadmium|Cadmium]] | EU soy formula pooled baskets | 15.8 to 18.3 ppb | 15.8 to 18.3 ppb | [[sources/pandelova2012-eu-baby-food-formula-elements]] | Pooled market baskets, not individual products. |
| [[metals/lead|Lead]] | EU soy formula pooled baskets | 20.1 to 30.5 ppb | 20.1 to 30.5 ppb | [[sources/pandelova2012-eu-baby-food-formula-elements]] | Pooled market baskets, not individual products. |
| [[metals/lead|Lead]] | UK dry soy-based formula, as sold | 0 to 5 ug/kg | 0 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/nickel|Nickel]] | UK dry soy-based formula, as sold | 200 ug/kg | 200 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Direct soy dry-formula category average. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Reconstituted organic brown-rice-syrup soy toddler formula | 1.5 to 2.5 times the 10 ug/L drinking-water standard | approximately 15 to 25 ppb in liquid formula | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Toddler formula with organic brown rice syrup, not standard infant soy powder. |

## Row Relationship

This row is the contamination-platform counterpart to [[products/infant-formula-powder-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 84% of soy-based formula items and Cd in 91% of soy-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Dabeka 1987 and Pandelova 2012 both support a soy-formula cadmium signal relative to milk-based formula comparators, but both need careful handling because one is historical and the other is pooled market-basket evidence. [[sources/dabeka1987-canada-infant-formula-lead-cadmium]] [[sources/pandelova2012-eu-baby-food-formula-elements]]

Soy-powder-specific risk characterization remains pending. <!-- UNCITED: Need current soy-based powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing soy-based powder from non-soy powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates soy-based formulas from cow-based and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for soy-based powdered formula should be documented only after sources distinguish soy inputs, mineral premix, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate soy-based powder from non-soy powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]], [[ingredients/soy-based-infant-formula]], and [[ingredients/soy-protein-isolate]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/dabeka1987-canada-infant-formula-lead-cadmium]]
- [[sources/pandelova2012-eu-baby-food-formula-elements]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- [[sources/kazi2009-toxic-elements-in-infant-formulae]]
- [[sources/burrell2010-aluminium-in-infant-formulas]]
- [[sources/chuchu2013-aluminium-in-infant-formulas]]
