---
title: Mixed Meals, Rice-Containing
type: product-category
category: mixed-meals-rice-containing
hmtc_row: 13
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Mixed meals, rice-containing"
base_taxonomy: mixed-meals
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [mixed-meals, rice, rice-flour, vegetables, meat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: mixed-meals-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 5
---

# Mixed Meals, Rice-Containing

This page is a structural scaffold for Category 1 row 13. FDA compliance samples provide a small rice-named mixture subset, while broader rice/rice-mix, savoury infant-food, and U.S. baby-food survey sources remain useful context.

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
<td>No distribution-capable row is loaded for this product page yet. Standards matrix tracks 3 metal/species rows (Pb, Cd, and iAs).</td>
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
<li><strong>Pb:</strong> Limit scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. Comparison note: Regulatory value loaded for mixtures; rice-containing status does not itself make this the dry-infant-cereal action level. Use: Use as external regulatory cap/context, not standards value.</li>
<li><strong>Pb:</strong> Limit scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. Use: Use as external EU legal context, not standards value.</li>
<li><strong>Cd:</strong> Limit scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. Use: Use as external EU legal context, not standards value.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution context; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: mixed-meal datasets for rice-containing products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a rice-containing mixed-meal source percentile/max concentration spread. Gardener 2019 includes jars/meals, pouches, and kids-meals categories and provides broad all-sample lead/cadmium percentiles, but rice-containing mixed meals still need product-level extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Mixtures rows with rice named | tAs 9; Cd 9; Pb 9; tHg 3 | lower-bound p50, upper-percentile, p95, max | tAs p50 11 ppb, upper-percentile/max 28.3 ppb; Cd p50 1.3 ppb, upper-percentile/max 7 ppb; Pb p50 1 ppb, upper-percentile/max 11.6 ppb; tHg upper-percentile/max 0.3 ppb | Small source-scope context only until reviewed with more samples | Machine-extracted; `<LOD` treated as 0; small rice-named subset (`EF-3`). [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK savoury category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 7 to 9 ppb | Does not support source percentile/max | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/cadmium|Cadmium]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support source percentile/max | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/lead|Lead]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 3 to 5 ppb | Does not support source percentile/max | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; upper-percentile 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; mixed-meal and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 0 ppb; p75 5.60 ppb; upper-percentile 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; mixed-meal and rice-status-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Rice-containing mixed meals are represented by rice/rice-mix baby-food evidence and broad savoury/cereal infant-food groupings.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 rice-named mixture baby-food samples | p50 11 ppb; upper-percentile/max 28.3 ppb | p50 11 ppb; upper-percentile/max 28.3 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Small lower-bound machine-extracted subset; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 rice-named mixture baby-food samples | Cd upper-percentile/max 7 ppb; Pb upper-percentile/max 11.6 ppb | Cd upper-percentile/max 7 ppb; Pb upper-percentile/max 11.6 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Small subset; source-scope context, not threshold-ready distribution. |
| [[metals/lead|Lead]] | Rice/rice-mix baby foods in global scoping review | median 0.008 mg/kg | 8 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad rice/rice-mix baby-food category. |
| [[metals/arsenic-total|Arsenic]] | Rice/rice-mix baby foods in global scoping review | median 0.048 mg/kg | 48 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Review reports As; speciation may vary by included study. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice products commonly eaten during weaning | up to 323 ug/kg | up to 323 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation for baby rice/rice cereals/rice crackers. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK other savoury based infant foods/dishes, no meat | 7 to 9 ug/kg | 7 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK other savoury based infant foods/dishes, no meat | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/lead|Lead]] | UK other savoury based infant foods/dishes, no meat | 3 to 5 ug/kg | 3 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French vegetable-based and meat/fish-based ready-to-eat infant meals. Several high-arsenic examples named in the paper contain rice, but Table 5 does not split rice-containing from non-rice meals, so these rows are relevant context rather than rice-specific upper-percentile evidence. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is the contamination-platform counterpart to [[products/mixed-meals-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items, with 31% of detected rice/rice-mix items exceeding the Pb maximum level used by the authors and 30% exceeding the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Rice-containing mixed-meal risk remains only partially supported because the promoted source's rice/rice-mix grouping does not specify complete mixed-meal formulation or rice share. <!-- UNCITED: Need mixed-meal datasets that distinguish rice-containing products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice as a priority ingredient platform, but they do not resolve rice ingredient form, meal composition, or arsenic speciation for mixed meals. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-containing mixed meals should be documented only after sources distinguish rice ingredient form, formulation share, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate rice-containing from non-rice meals and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]], [[ingredients/rice]], and [[ingredients/rice-flour]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
