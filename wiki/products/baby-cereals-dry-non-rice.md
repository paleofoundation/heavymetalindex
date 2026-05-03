---
title: Baby Cereals / Grain Products, Dry (Non-Rice)
type: product-category
category: baby-cereals-dry-non-rice
hmtc_row: 5
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Baby cereals / grain products, dry (non-rice)"
base_taxonomy: baby-cereals-dry
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, non-rice-grains, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-cereal-20ppb]
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: baby-cereals-dry-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 8
---

# Baby Cereals / Grain Products, Dry (Non-Rice)

This page is a structural scaffold for Category 1 row 5. FDA compliance samples now provide a direct non-rice dry-cereal lower-bound distribution, while broader cereal and infant-food sources remain useful context.

<!-- BEGIN: hmi-product-crosswalk -->
<span id="regulatory-match-status"></span>

## Standards Evidence Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This is the product evidence matrix for standards development. It does not treat a single study statistic as a finished standard. The page shows the metal, extracted N, grouped source statistics, regulatory reference values, source pages, and evidence gaps so cited calculations can be run from approved rows.

<p class="hmi-standards-readiness-note"><strong>Calculation boundary:</strong> public product pages show inputs and completeness, not final standards math. A single distribution-capable source or summary/range-only evidence remains an input until the fit-source pool, basis/species decisions, censoring rules, and calculation trace are documented.</p>

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
<td><ul class="hmi-compact-list"><li><strong>FDA:</strong> 20 ug/kg Pb; dry infant cereal; <a href="../regulations/fda2025-lead-processed-baby-foods" class="internal" data-slug="regulations/fda2025-lead-processed-baby-foods">FDA 2025 guidance</a></li><li><strong>EU:</strong> 20 ug/kg Pb; as sold; <a href="../regulations/eu2023-contaminants-maximum-levels" class="internal" data-slug="regulations/eu2023-contaminants-maximum-levels">EU 2023-915</a></li></ul></td>
<td><div class="hmi-source-chip-row"><a href="../sources/fera2014-fsa-metals-infant-foods-formula" class="internal hmi-source-chip" data-slug="sources/fera2014-fsa-metals-infant-foods-formula">Fera 2014</a></div></td>
</tr>
<tr>
<td><a href="../metals/cadmium" class="internal" data-slug="metals/cadmium">Cd</a></td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured values loaded for this metal/species.</td>
<td><ul class="hmi-compact-list"><li><strong>EU:</strong> 40 ug/kg Cd; as sold; <a href="../regulations/eu-2023-915-cadmium" class="internal" data-slug="regulations/eu-2023-915-cadmium">EU 2023-915</a></li></ul></td>
<td><div class="hmi-source-chip-row"><a href="../sources/fera2014-fsa-metals-infant-foods-formula" class="internal hmi-source-chip" data-slug="sources/fera2014-fsa-metals-infant-foods-formula">Fera 2014</a></div></td>
</tr>
<tr>
<td><a href="../metals/arsenic-inorganic" class="internal" data-slug="metals/arsenic-inorganic">iAs</a></td>
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
<li><strong>Pb:</strong> Limit scope: dry infant cereals for children under 2. Basis: dry infant cereal. Comparison note: Regulatory value loaded; field-finding comparison blocked until structured occurrence rows are extracted. Use: Use as external regulatory cap/context, not standards value.</li>
<li><strong>Pb:</strong> Limit scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. Use: Use as external EU legal context, not standards value.</li>
<li><strong>Cd:</strong> Limit scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. Comparison note: EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. Use: Use as external EU legal context, not standards value.</li>
</ul>
</details>



<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution caveats; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: infant cereal datasets for non-rice dry grain products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice dry cereal source percentile/max concentration spread. Parker 2022 provides a small grain baby-food distribution, but the authors report that two of three grain-product types were rice-based, so the table is more appropriate as a grain-category warning than a non-rice benchmark. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Dry Infant Cereals with no rice named | tAs 25; Cd 25; Pb 25; tHg 9 | lower-bound p50, upper-percentile, p95, max | tAs p50 12.9 ppb, upper-percentile 37.8 ppb, max 54.8 ppb; Cd upper-percentile 27.4 ppb, max 62.9 ppb; Pb upper-percentile 8 ppb, max 9.9 ppb; tHg all lower-bound 0 | Supports source-scope lower-bound distribution after review for tAs, Cd, and Pb; Hg subset is small | Machine-extracted; `<LOD` and `NDb` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Grain baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 10 ppb; mean 90.4 ppb; median 126 ppb; max 132 ppb; detected 9/9 | Not for non-rice threshold setting | Total arsenic, not iAs; row fit is weak because the grain group is mostly rice-containing. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/cadmium|Cadmium]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 12 ppb; mean 25.8 ppb; median 20 ppb; max 61 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/upper-percentile. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/lead|Lead]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 9.7 ppb; median 5 ppb; max 20 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/upper-percentile. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; upper-percentile 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad context only | All categories combined; cereal-specific and non-rice-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, upper-percentile, p95, p99, max | p50 0 ppb; p75 5.60 ppb; upper-percentile 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad context only | All categories combined; cereal-specific and non-rice-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-rice cereal evidence remains mixed because many infant cereal sources combine rice and non-rice cereals. Values below are included only with scope caveats.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | p50 12.9 ppb; upper-percentile 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | p50 12.9 ppb; upper-percentile 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | Cd upper-percentile 27.4 ppb, max 62.9 ppb; Pb upper-percentile 8 ppb, max 9.9 ppb | Cd upper-percentile 27.4 ppb, max 62.9 ppb; Pb upper-percentile 8 ppb, max 9.9 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; product name does not prove absence of rice ingredients. |
| [[metals/cadmium|Cadmium]] | Processed baby-food cereal category in global scoping review | median 0.013 mg/kg | 13 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad cereal category; may include rice and non-rice products. |
| [[metals/cadmium|Cadmium]] | Parker 2022 grain baby foods | mean 25.8 ppb; median 20 ppb; max 61 ppb | mean 25.8 ppb; median 20 ppb; max 61 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/lead|Lead]] | Parker 2022 grain baby foods | mean 9.7 ppb; median 5 ppb; max 20 ppb | mean 9.7 ppb; median 5 ppb; max 20 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Mixed cereals marketed for weaning infants | up to 49 ug/kg | up to 49 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation; mixed cereals include wheat, barley, oat, rye, sorghum, and/or millet. |
| [[metals/arsenic-total|Total arsenic]] | UK cereal-based infant foods/dishes | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/lead|Lead]] | UK cereal-based infant foods/dishes | 0 to 1 ug/kg | 0 to 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/nickel|Nickel]] | UK cereal-based infant foods/dishes | 124 to 127 ug/kg | 124 to 127 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French cereal-based infant-food category with N=17, including baby cereals and infant biscuit/cereal products. The source does not split rice-based from non-rice cereal products, so these rows are context until the individual food list is mapped. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Cereal-based infant foods | 17 | as consumed | 630 / 3810 ppb | 3.13 / 8 ppb | 2.79 / 17 ppb | 23 / 125 ppb | 43 / 234 ppb | 49.2 / 83 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/baby-cereals-dry-rice-based]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that cereals had the highest median Cd concentration among baby-food groups in the review at 0.013 mg/kg, and 17% of detected cereal items exceeded the Cd maximum level used by the authors. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats, which makes non-rice cereal subtyping necessary before treating this row as a clean benchmark. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Non-rice-specific risk remains unresolved because the promoted review's cereal grouping is broader than this row and may include products not cleanly separable by grain type. <!-- UNCITED: Need infant cereal or dry grain-product datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted sources support cereal-level monitoring but do not yet distinguish oat, wheat, corn, quinoa, multigrain, fortification premix, or non-rice-only products. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for non-rice dry baby cereals should be documented only after sources distinguish grain type, fortification, sourcing geography, processing, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate non-rice grain products from rice-based products and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]] and [[ingredients/non-rice-grains]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for dry infant cereals. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
