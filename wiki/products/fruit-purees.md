---
title: Fruit Purees
type: product-category
category: fruit-purees
hmtc_row: 7
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Fruit purees (general)"
base_taxonomy: fruit-purees
variant_type: independent_no_split
provenance: base_taxonomy
ingredient_targets: [fruit-purees, apple, pear, peach, banana]
primary_metals_of_concern: []
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 8
---

# Fruit Purees

This page is a structural scaffold for HMTc Category 1 row 7. Quantitative evidence now includes FDA compliance fruit samples, a small fruit baby-food distribution, and broader fruit-based infant-food category values; fruit-by-fruit puree p10/p90/p100 distributions remain incomplete.

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]] (US-FDA final guidance action level): 10 ug/kg Pb (as sold or ready-to-eat as applicable; fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2). | FSA/Fera and other promoted sources support occurrence narrative; structured row extraction pending. | Regulatory value loaded; field-finding comparison blocked until puree rows are extracted. | Use as external regulatory cap/context, not HMTc value. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: fruit puree concentration datasets across the Category 1 metal panel that report individual-product percentile distributions.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small fruit baby-food distribution with N=9. It supports min/mean/median/max summaries for total arsenic, cadmium, mercury, and lead, but it does not provide p10 or p90 and does not separate apple, pear, peach, banana, or other fruit types. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Fruits category | tAs 39; Cd 39; Pb 44; tHg 14 | lower-bound p50, p90, p95, max | tAs p50 1.4 ppb, p90 5.2 ppb, max 8.7 ppb; Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb; tHg p90 0.5 ppb, max 0.6 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; FDA fruit category is not fruit-by-fruit puree mapping. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Fruit baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 3.8 ppb; median 5 ppb; max 5 ppb; detected 6/9 | Supports median/max only | Total arsenic, not iAs; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/cadmium|Cadmium]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 4.4 ppb; median 1.5 ppb; max 16 ppb; detected 3/9 | Supports median/max only | Small N; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/lead|Lead]] | Fruit baby foods | 9 | min, mean, median, max, detection rate | min 1.5 ppb; mean 2.7 ppb; median 1.5 ppb; max 5 ppb; detected 3/9 | Supports median/max only | Small N; no p10/p90; includes study substitution conventions. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Fruit baby-food distribution | [[metals/mercury-total|Total mercury]] | Fruit baby foods | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| UK category average | [[metals/nickel|Nickel]] | UK fruit-based infant foods/dishes | 200 infant-food total; category n not reported | category average/range | 92 to 117 ppb | Does not support p10/p90/p100 | Fruit-based group, not puree-only or fruit-specific. [[sources/fsa2016-infant-food-formula-metals-survey]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Fruit-puree evidence comes from fruit baby-food distributions, fruit-based infant food groupings, and infant arsenic biomarker literature. Sources do not yet provide fruit-by-fruit puree distributions.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 fruit baby-food samples | p50 1.4 ppb; p90 5.2 ppb; p95 7 ppb; max 8.7 ppb | p50 1.4 ppb; p90 5.2 ppb; p95 7 ppb; max 8.7 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 fruit baby-food samples | Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb | Cd p90 2.2 ppb, max 4 ppb; Pb p90 2.4 ppb, max 8 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; fruit category is not fruit-specific. |
| [[metals/lead|Lead]] | Parker 2022 fruit baby foods | mean 2.7 ppb; median 1.5 ppb; max 5 ppb | mean 2.7 ppb; median 1.5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Fruit group, N=9; no p10/p90. |
| [[metals/cadmium|Cadmium]] | Parker 2022 fruit baby foods | mean 4.4 ppb; median 1.5 ppb; max 16 ppb | mean 4.4 ppb; median 1.5 ppb; max 16 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Fruit group, N=9; includes substitution conventions. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 fruit baby foods | mean 3.8 ppb; median 5 ppb; max 5 ppb | mean 3.8 ppb; median 5 ppb; max 5 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Total arsenic, not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Popular fruit and vegetable purees cited in infant arsenic study | up to 20 ug/kg | up to 20 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation combines fruit and vegetable purees. |
| [[metals/arsenic-total|Total arsenic]] | UK fruit-based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK fruit-based infant foods/dishes | 1 to 4 ug/kg | 1 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/cadmium|Cadmium]] | UK fruit-based infant foods/dishes | 2 to 3 ug/kg | 2 to 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/lead|Lead]] | UK fruit-based infant foods/dishes | 1 to 3 ug/kg | 1 to 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |
| [[metals/nickel|Nickel]] | UK fruit-based infant foods/dishes | 92 to 117 ug/kg | 92 to 117 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Fruit-based group, not puree-only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a direct French fruit-puree infant-food category with N=30. The paper gives category mean and min-max values, not p90. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Fruit purees | 30 | as consumed | 556 / 1420 ppb | 2 / 8 ppb | 0.66 / 2 ppb | 42.7 / 84 ppb | 54.7 / 121 ppb | 424 / 3330 ppb |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review summarized Parker et al. 2022 as finding arsenic in 67% of fruit baby-food samples, lead in 33%, and cadmium in 33%; the same summary reported non-cancer lead risk in grain, fruit, and root-vegetable products under Parker et al.'s exposure assumptions. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, fruit intake was associated with the sum of urinary arsenic species (Spearman rho = 0.70, p = 0.03), but the study grouped fruits as a dietary category rather than isolating finished fruit purees. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included fruit homogenized foods and reported that an apple homogenized food had the highest estimated daily intake for aluminum in the study at 13.1 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2025 global scoping review classified fruits and vegetables together for one baby-food grouping, so it supports broad monitoring context for fruit purees but does not provide a fruit-puree-only median or exceedance rate. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Fruit-puree-specific relative risk remains unresolved because the promoted sources either summarize fruit samples broadly or combine fruits with vegetables. <!-- UNCITED: Need fruit puree datasets or regulatory monitoring reports before assigning row-specific metals of concern. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current sources support broad fruit baby-food coverage, but they do not fully distinguish apple, pear, peach, banana, orchard geography, puree processing, packaging, or finished-product versus ingredient testing. [[sources/bair2022-heavy-metals-infant-toddler-foods]] [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] [[sources/meli2024-chemical-characterization-baby-food-italy]]

Potential variance drivers for fruit purees should be documented only after sources distinguish fruit type, growing region, processing, packaging, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report fruit puree metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fruit-purees]] and fruit-specific ingredient targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 10 ppb for fruits and vegetables. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
