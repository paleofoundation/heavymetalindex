---
title: Baby Cereals / Grain Products, Dry (Rice-Based)
type: product-category
category: baby-cereals-dry-rice-based
hmtc_row: 6
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Baby cereals / grain products, dry (rice-based)"
base_taxonomy: baby-cereals-dry
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, rice-flour, rice-cereal, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-cereal-20ppb, fda-iAs-rice-cereal-100ppb]
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: baby-cereals-dry-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 10
---

# Baby Cereals / Grain Products, Dry (Rice-Based)

This page is a structural scaffold for HMTc Category 1 row 6. Quantitative evidence now includes FDA rice-cereal compliance samples, rice/rice-mix review evidence, a small grain baby-food distribution, a large U.S. baby-food lead/cadmium survey, and regulatory action-level context.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 20 ug/kg Pb. Scope: dry infant cereals for children under 2. Basis: dry infant cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded; field-finding comparison blocked until structured occurrence rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]: Federal FDA final action level: 100 ug/kg iAs. Scope: all types of infant rice cereals. Basis: as sold infant rice cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for infant rice cereals only; comparison blocked until rice-cereal occurrence rows are extracted by species. | [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 20 ppb (FDA final guidance action level) | dry infant cereal, as sold | Dry infant cereals for children under 2; lead action level is not split by rice status |
| EU 2023/915 | 20 ppb | processed cereal-based food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 33.3 ppb | 21 CFR 101.12 dry instant infant cereal RACC of 15 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA and EU both map to 20 ppb for lead; rice status mainly changes arsenic concern and occurrence profile, not the lead ceiling. | Use 20 ppb as the lead regulatory cap/context, while treating rice as an ingredient-driver signal for iAs, Cd, and Pb occurrence. |

Rice-based cereal can sit near legal lead limits and still be a high-priority HMTc category because rice changes the broader contaminant profile.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution entries; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted sources; row-fit caveats remain in the tables.
- Next ingest target: infant cereal datasets for rice-based dry grain products that report individual-product distributions for [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

Parker 2022 provides a small grain baby-food concentration distribution with N=9, but the grain group is not fully equivalent to dry rice cereal; the authors report that two of three grain-product types were rice-based and that arsenic was not speciated. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 provides a much larger lead/cadmium baby-food survey and reports cereal category counts, but the primary published distribution table is for all 564 baby-food/formula samples rather than rice-cereal-only values. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Dry Infant Cereals with rice named | tAs 253; Cd 252; Pb 256; tHg 64 | lower-bound p50, p90, p95, max | tAs p50 115 ppb, p90 135 ppb, max 348 ppb; Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb; tHg p90 2.1 ppb, max 4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` and `NDb` treated as 0; arsenic is source-reported As, not iAs. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Grain baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 10 ppb; mean 90.4 ppb; median 126 ppb; max 132 ppb; detected 9/9 | Supports median/max only | Total arsenic, not iAs; small grain group, not a rice-cereal-only distribution. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/cadmium|Cadmium]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 12 ppb; mean 25.8 ppb; median 20 ppb; max 61 ppb; detected 9/9 | Supports median/max only | Small grain group, not a rice-cereal-only distribution; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/lead|Lead]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 9.7 ppb; median 5 ppb; max 20 ppb; detected 9/9 | Supports median/max only | Small grain group, not a rice-cereal-only distribution; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/mercury-total|Total mercury]] | Grain baby foods, mostly rice-containing | 9 | detection rate, substituted value | no detections; table value 1.5 ppb after ND substitution | Does not support p10/p90/p100 | ND substitution reflects the study's exposure model, not a measured concentration. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p25, p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Supports broad-context p90/p95/max only | All categories combined; cereal-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p25, p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Supports broad-context p90/p95/max only | All categories combined; cereal-specific values require source-table extraction. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| FDA action level | [[metals/arsenic-inorganic|Inorganic arsenic]] | Infant rice cereal | not applicable | regulatory level | 100 ppb | Not an occurrence distribution | Regulatory action level, not measured occurrence data. [[sources/fda-iAs-rice-cereal-2020]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Rice-based cereal has the strongest arsenic signal in Category 1. Values include rice/rice-mix baby-food evidence, grain baby-food distributions, and regulatory action levels for infant rice cereal.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 rice-named dry infant cereal samples | p50 115 ppb; p90 135 ppb; p95 141 ppb; max 348 ppb | p50 115 ppb; p90 135 ppb; p95 141 ppb; max 348 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 rice-named dry infant cereal samples | Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb | Cd p90 22 ppb, max 40.5 ppb; Pb p90 19.2 ppb, max 32 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; `<LOD` treated as 0. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA infant rice cereal action level | 100 ppb | 100 ppb | [[sources/fda-iAs-rice-cereal-2020]] | Regulatory action level, not occurrence distribution. |
| [[metals/lead|Lead]] | Rice/rice-mix baby foods in global scoping review | median 0.008 mg/kg | 8 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad rice/rice-mix baby-food category. |
| [[metals/arsenic-total|Arsenic]] | Rice/rice-mix baby foods in global scoping review | median 0.048 mg/kg | 48 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Review reports As; speciation may vary by included study. |
| [[metals/arsenic-total|Total arsenic]] | Parker 2022 grain baby foods | mean 90.4 ppb; median 126 ppb; max 132 ppb | mean 90.4 ppb; median 126 ppb; max 132 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; total arsenic, not iAs. |
| [[metals/cadmium|Cadmium]] | Parker 2022 grain baby foods | mean 25.8 ppb; median 20 ppb; max 61 ppb | mean 25.8 ppb; median 20 ppb; max 61 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; N=9. |
| [[metals/lead|Lead]] | Parker 2022 grain baby foods | mean 9.7 ppb; median 5 ppb; max 20 ppb | mean 9.7 ppb; median 5 ppb; max 20 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; N=9. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice products commonly eaten during weaning | up to 323 ug/kg | up to 323 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation for baby rice/rice cereals/rice crackers. |
| Dimethylarsenate and other arsenic species | Rice products commonly eaten during weaning | DMA up to 297 ug/kg | up to 297 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Organic arsenic species; not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |
| [[metals/mercury-total|Total mercury]] | Italian cereal-cream/grain products | max 0.040 mg/kg wet weight; mean 0.030 mg/kg wet weight; highest modeled EDI 0.573 ug/kg body weight per day | max 40 ppb; mean 30 ppb | [[sources/meli2024-chemical-characterization-baby-food-italy]] | N=3 small-sample context; total mercury, not methylmercury. The authors noted the maximum sample approximately equaled their derived mercury PTDI, but this is not a regulatory exceedance table. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French cereal-based infant-food category with N=17. The table does not split rice-based cereals from non-rice cereals, so the values below are relevant context but cannot be treated as rice-specific p90 evidence. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Cereal-based infant foods | 17 | as consumed | 630 / 3810 ppb | 3.13 / 8 ppb | 2.79 / 17 ppb | 23 / 125 ppb | 43 / 234 ppb | 49.2 / 83 ppb |

## Row Relationship

This row is the contamination-platform counterpart to [[products/baby-cereals-dry-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items; 31% of detected rice/rice-mix items exceeded the Pb maximum level used by the authors and 30% exceeded the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2022 narrative review describes rice as a key infant-food concern and cites evidence that infant urinary inorganic arsenic metabolites increased 4.5-fold after weaning with rice products. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, rice cereal intake was associated with the sum of urinary arsenic species (Spearman rho = 0.90, p = 0.03). [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

Parker 2022 found the highest total arsenic values in its grain baby-food group, with N=9, 100% detection, mean 90.4 ppb, median 126 ppb, and max 132 ppb. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Meli 2024 reported a cereal-cream/grain-product mercury exposure signal in a small Italian/European-market baby-food set, but the study did not speciate methylmercury and should be used only as a row-level monitoring flag. [[sources/meli2024-chemical-characterization-baby-food-italy]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice/rice-mix concern, but they do not yet distinguish rice flour, rice cereal, rice puffs, rice origin, or arsenic speciation for this exact dry-cereal row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-based dry baby cereals should be documented only after sources distinguish rice ingredient form, sourcing geography, processing, fortification, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate rice-based products from non-rice products and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]], [[ingredients/rice-flour]], and [[ingredients/rice-cereal]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for dry infant cereals. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fda-iAs-rice-cereal-2020]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
