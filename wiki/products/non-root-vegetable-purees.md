---
title: Non-Root Vegetable Purees
type: product-category
category: non-root-vegetable-purees
hmtc_row: 8
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Non-root vegetable purees"
base_taxonomy: vegetable-purees
variant_type: independent_serves_as_cross_row_cc
provenance: base_taxonomy
ingredient_targets: [vegetable-purees, non-root-vegetables, leafy-greens, squash]
primary_metals_of_concern: [Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: clean_benchmark
  scope: cross_row
  partners:
    - slug: root-vegetable-purees
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Cd, Pb]
      notes: "Non-root vegetable purees serve as the clean cross-row CC source for root-vegetable purees on Cd and Pb. Within row 8 itself, no within-row contamination split exists."
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 7
---

# Non-Root Vegetable Purees

This page is a structural scaffold for Category 1 row 8. Quantitative evidence now includes FDA compliance non-root vegetable samples, a small leguminous-vegetable baby-food distribution, and broader UK green/other vegetable category values.

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
<td><ul class="hmi-compact-list"><li><strong>FDA:</strong> 10 ug/kg Pb; as sold or ready-to-eat as applicable; <a href="../regulations/fda2025-lead-processed-baby-foods" class="internal" data-slug="regulations/fda2025-lead-processed-baby-foods">FDA 2025 guidance</a></li><li><strong>EU:</strong> 20 ug/kg Pb; as sold; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li></ul></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fera2014-fsa-metals-infant-foods-formula" class="internal" data-slug="sources/fera2014-fsa-metals-infant-foods-formula">Fera 2014</a></li></ul></td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td><ul class="hmi-compact-list"><li><strong>EU:</strong> 40 ug/kg Cd; as sold; <a href="../regulations/eu-2023-915-cadmium" class="internal" data-slug="regulations/eu-2023-915-cadmium">EU 2023-915</a></li></ul></td>
<td><ul class="hmi-compact-list"><li><a href="../sources/fera2014-fsa-metals-infant-foods-formula" class="internal" data-slug="sources/fera2014-fsa-metals-infant-foods-formula">Fera 2014</a></li></ul></td>
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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 2 metal/species rows (Pb and Cd).</td>
<td>Promote structured product-row values first; an HMTc standard cannot be selected from source coverage, a single study, or regulatory limits alone.</td>
</tr>
<tr>
<td><strong>Retail/spec programs</strong></td>
<td>See regulatory reference values beside the extracted evidence record, without treating either one as the other.</td>
<td>3 regulatory reference values loaded (FDA and EU).</td>
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
<li><strong>Pb:</strong> Limit scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. Comparison note: Regulatory value loaded; field-finding comparison blocked until puree rows are extracted. Use: Use as external regulatory cap/context, not standards value.</li>
<li><strong>Pb:</strong> Limit scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until puree rows are extracted. Use: Use as external EU legal context, not standards value.</li>
<li><strong>Cd:</strong> Limit scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until puree rows are extracted. Use: Use as external EU legal context, not standards value.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: non-root vegetable puree datasets for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small leguminous-vegetable baby-food distribution with N=9. It is relevant to non-root vegetable purees, but it does not cover all non-root vegetables, does not provide p10 or upper-percentile, and should not be generalized to leafy greens or squash without additional sources. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Vegetables rows without carrot, sweet potato, beet, or parsnip terms | tAs 20; Cd 22; Pb 29; tHg 13 | lower-bound p50, upper-percentile, p95, max | tAs upper-percentile 1 ppb, max 11 ppb; Cd p50 0.7 ppb, upper-percentile 12.8 ppb, max 23.1 ppb; Pb upper-percentile 2 ppb, max 7.6 ppb; tHg upper-percentile 0, max 0.4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; root/non-root split is name-based. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Leguminous vegetable baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Leguminous vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 4.2 ppb; median 5 ppb; max 5 ppb; detected 7/9 | Supports median/max only | Total arsenic, not iAs; no p10/upper-percentile; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/cadmium|Cadmium]] | Leguminous vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support source percentile/max | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/lead|Lead]] | Leguminous vegetable baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 2.3 ppb; median 1.5 ppb; max 5 ppb; detected 2/9 | Supports median/max only | Small N; no p10/upper-percentile; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Leguminous vegetable baby-food distribution | [[metals/mercury-total|Total mercury]] | Leguminous vegetable baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support source percentile/max | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| UK category average | [[metals/nickel|Nickel]] | UK green vegetables used in infant diet modeling | 50 other-food composites; category n not reported | category average | 210 ppb | Does not support source percentile/max | Ingredient group, not finished puree. [[sources/fsa2016-infant-food-formula-metals-survey]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-root vegetable puree values remain approximate because sources group vegetables differently from the standards row. Parker 2022 provides a leguminous-vegetable baby-food subset, while the UK survey provides green-vegetable and other-vegetable concentration rows.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/cadmium|Cadmium]] | FDA FY2009-FY2024 non-root vegetable baby-food samples | p50 0.7 ppb; upper-percentile 12.8 ppb; p95 21.1 ppb; max 23.1 ppb | p50 0.7 ppb; upper-percentile 12.8 ppb; p95 21.1 ppb; max 23.1 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; name-based non-root subset. |
| [[metals/lead|Lead]] and [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 non-root vegetable baby-food samples | Pb upper-percentile 2 ppb, max 7.6 ppb; tAs upper-percentile 1 ppb, max 11 ppb | Pb upper-percentile 2 ppb, max 7.6 ppb; tAs upper-percentile 1 ppb, max 11 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/lead|Lead]] | Parker 2022 leguminous vegetable baby foods | mean 2.3 ppb; median 1.5 ppb; max 5 ppb | mean 2.3 ppb; median 1.5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Leguminous vegetable group, N=9; no p10/upper-percentile. |
| [[metals/cadmium|Cadmium]] | Parker 2022 leguminous vegetable baby foods | no detections; substitution value 1.5 ppb | no detections; substitution value 1.5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | ND substitution, not measured detected Cd. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 leguminous vegetable baby foods | mean 4.2 ppb; median 5 ppb; max 5 ppb | mean 4.2 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Popular fruit and vegetable purees cited in infant arsenic study | up to 20 ug/kg | up to 20 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation combines fruit and vegetable purees. |
| [[metals/cadmium|Cadmium]] | UK green vegetables used in infant diet modeling | 5 ug/kg | 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/lead|Lead]] | UK green vegetables used in infant diet modeling | 2 ug/kg | 2 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/nickel|Nickel]] | UK green vegetables used in infant diet modeling | 210 ug/kg | 210 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ingredient group, not finished puree. |
| [[metals/cadmium|Cadmium]] | UK other vegetables used in infant diet modeling | 17 ug/kg | 17 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |
| [[metals/lead|Lead]] | UK other vegetables used in infant diet modeling | 7 to 8 ug/kg | 7 to 8 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Mixed vegetable category; may include root vegetables. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French soups/purees and vegetable-based ready-to-eat infant meals. The source does not split non-root from root vegetables, so these rows are context until the sample list is mapped to the standards split. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Soups/purees | 11 | as consumed | 653 / 2140 ppb | 4.82 / 9 ppb | 7.36 / 15 ppb | 39 / 57 ppb | 57.7 / 106 ppb | 42 / 42 ppb |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/root-vegetable-purees]] for the cross-row architecture relationship covering [[metals/cadmium|Cd]] and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 78% of leguminous vegetable baby-food samples and lead in 22% of leguminous vegetable samples. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, vegetable intake was associated with the sum of urinary arsenic species (Spearman rho = 0.86, p = 0.01), but the study grouped vegetables as a dietary category rather than isolating non-root vegetable purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2025 global scoping review classified fruits and vegetables together for one baby-food grouping, so it supports broad monitoring context for vegetable purees but does not separate non-root vegetables from root vegetables. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Non-root vegetable puree risk remains only partially supported because the promoted sources do not yet distinguish leafy greens, squash, legumes, finished purees, or row-specific non-root vegetables. <!-- UNCITED: Need non-root vegetable puree datasets or ingredient-level sources before describing Cd or Pb risk for this exact row. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-root vegetable purees should be documented only after sources distinguish vegetable type, growing region, soil contribution, processing, and analytical method. <!-- UNCITED: Need puree or ingredient-level vegetable sources that report metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/non-root-vegetable-purees]], [[ingredients/leafy-greens]], and [[ingredients/squash]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 10 ppb for fruits and vegetables. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
