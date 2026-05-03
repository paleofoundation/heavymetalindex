---
title: Teething & Snacks (Non-Rice)
type: product-category
category: teething-and-snacks-non-rice
hmtc_row: 15
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Teething & snacks (non-rice)"
base_taxonomy: teething-and-snacks
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [teething-and-snacks, non-rice-grains, oat, wheat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: teething-and-snacks-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 5
---

# Teething & Snacks (Non-Rice)

This page is a structural scaffold for Category 1 row 15. FDA compliance samples add broad grain-based snack context, but non-rice snack-specific source percentile/max distributions are still pending because rice status is not isolated.

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
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fera2014-fsa-metals-infant-foods-formula" class="internal" data-slug="sources/fera2014-fsa-metals-infant-foods-formula">Fera 2014</a></li></ul></td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No extracted source resource is attached yet.</td>
</tr>
<tr>
<td><a href="../metals/arsenic-inorganic" class="internal" data-slug="metals/arsenic-inorganic">iAs</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No extracted source resource is attached yet.</td>
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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 3 metal/species rows (Pb, iAs, and Cd).</td>
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
<li><strong>Pb:</strong> Limit scope: No product-specific value loaded in this crosswalk.. Comparison note: No exact product-specific regulatory value loaded for non-rice teething/snack row. Use: Occurrence evidence only until regulatory scope is resolved.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with broad snack evidence; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: teething-food and snack datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice snack source percentile/max concentration spread. Existing snack evidence either does not split rice status or reports broad all-sample baby-food percentiles that cannot be treated as a non-rice benchmark. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA broad grain-based snack context | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Grain-Based Snacks rows where rice status is not isolated | tAs 91; Cd 91; Pb 91; tHg 28 | lower-bound p50, upper-percentile, p95, max | tAs p50 61 ppb, upper-percentile 224 ppb, p95 383 ppb, max 561 ppb; Cd upper-percentile 27 ppb, max 41 ppb; Pb upper-percentile 15 ppb, max 23.7 ppb; tHg upper-percentile 2.5 ppb, max 3.3 ppb | Context only | Rice status is not isolated; do not assign this distribution directly to non-rice snacks. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK snack category average | [[metals/aluminum|Aluminum]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 5185 ppb | Does not support source percentile/max | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average/range | 58 to 62 ppb | Does not support source percentile/max | Broad snack group; likely includes rice-containing products. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/cadmium|Cadmium]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 24 ppb | Does not support source percentile/max | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/lead|Lead]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support source percentile/max | Broad snack group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; upper-percentile 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 0 ppb; p75 5.60 ppb; upper-percentile 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; snack-specific and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Snack evidence is strong at the broad infant-snack level, but current sources do not split rice-based from non-rice snacks cleanly.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA broad grain-based snack context, rice status not isolated | p50 61 ppb; upper-percentile 224 ppb; p95 383 ppb; max 561 ppb | p50 61 ppb; upper-percentile 224 ppb; p95 383 ppb; max 561 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Context only; cannot distinguish non-rice from rice-based snacks. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA broad grain-based snack context, rice status not isolated | Cd upper-percentile 27 ppb, max 41 ppb; Pb upper-percentile 15 ppb, max 23.7 ppb | Cd upper-percentile 27 ppb, max 41 ppb; Pb upper-percentile 15 ppb, max 23.7 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Context only; not a non-rice row distribution. |
| [[metals/lead|Lead]] | FDA TDS baby food teething biscuits | 18 ug/kg hybrid mean | 18 ppb | [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Teething biscuit signal; rice status not specified. |
| [[metals/aluminum|Aluminum]] | UK sweet and savoury snacks | 5185 ug/kg | 5185 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/arsenic-total|Total arsenic]] | UK sweet and savoury snacks | 98 ug/kg | 98 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK sweet and savoury snacks | 58 to 62 ug/kg | 58 to 62 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; likely includes rice-containing products. |
| [[metals/cadmium|Cadmium]] | UK sweet and savoury snacks | 24 ug/kg | 24 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/lead|Lead]] | UK sweet and savoury snacks | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |
| [[metals/nickel|Nickel]] | UK sweet and savoury snacks | 292 ug/kg | 292 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snacks group; rice status not isolated. |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/teething-and-snacks-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

Risk characterization for this row is pending source ingest that can separate rice from non-rice snack products. <!-- UNCITED: Need teething-food and snack datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats, which means oat- and wheat-based snacks should not be treated as automatically clean without product-specific evidence. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

A 2025 global scoping review identifies cereals as a Cd-priority baby-food group, with median Cd of 0.013 mg/kg among detected items, but the cereal category does not separate non-rice teething snacks from rice-based products. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice teething foods and snacks should be documented only after sources distinguish grain type, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate non-rice from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/non-rice-grains]], and snack-format targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
