---
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 11
---

# Infant Formula, Powder (Non-Soy)

This page is a product-category evidence page for HMTc Category 1 row 1. The current corpus contains broad infant-formula, formula-powder, and powdered-milk evidence, but non-soy-specific evidence remains incomplete.

## Scaffold Status

- Page state: evidence-backed scaffold with a first distribution table; row-specific synthesis remains incomplete.
- Source coverage: measured-values and distribution tables populated from promoted A-tier and B-tier sources; row-fit caveats remain in the tables.
- Next ingest target: non-soy powdered infant formula datasets that distinguish protein source and report product-level concentration distributions for [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|tAs]], [[metals/arsenic-inorganic|iAs]], [[metals/mercury-total|tHg]], [[metals/mercury-methyl|MeHg]], [[metals/nickel|Ni]], [[metals/aluminum|Al]], [[metals/chromium-hexavalent|Cr-VI]], and [[metals/tin|Sn]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Summary For Threshold Work

<!-- audience: regulator, educator, app -->

The current source set does not yet support a finished p10/p90/p100 concentration spread for non-soy powdered infant formula. The strongest percentile-style evidence found so far is Gardener 2019, but that table reports estimated infant exposure from formula consumption, not product concentration in ppb. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Use for p10/p90/p100? | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| Formula exposure distribution | [[metals/lead|Lead]] | Broad infant formula | 91 | p50, p75, p90, p95, max | p50 0.00 ug/day; p75 0.43 ug/day; p90 0.78 ug/day; p95 1.06 ug/day; max 2.68 ug/day | Supports exposure p90/p95/max only | Derived from a 31 oz/day formula-intake assumption for a 4-month-old infant; not a ppb concentration distribution. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| Formula exposure distribution | [[metals/cadmium|Cadmium]] | Broad infant formula | 91 | p50, p75, p90, p95, max | p50 0.00 ug/day; p75 3.86 ug/day; p90 6.11 ug/day; p95 8.04 ug/day; max 23.33 ug/day | Supports exposure p90/p95/max only | Derived from a 31 oz/day formula-intake assumption for a 4-month-old infant; not a ppb concentration distribution. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| Product concentration range | [[metals/aluminum|Aluminum]] | Brazilian cow-milk phase 1/2 formulas | not extracted | range | 432 to 1241 ppb | Supports range/max only | Cow-milk powder, Brazil market; no p10/p90. [[sources/almeida2022-brazil-infant-formula-toxic-metals]] |
| Product concentration range | [[metals/arsenic-total|Total arsenic]] | Brazilian cow-milk phase 1/2 formulas | not extracted | range | 12 to 34 ppb | Supports range/max only | Total arsenic, not iAs; cow-milk powder, Brazil market; no p10/p90. [[sources/almeida2022-brazil-infant-formula-toxic-metals]] |
| Product concentration range | [[metals/tin|Tin]] | Brazilian cow-milk phase 1/2 formulas | not extracted | range | 7 to 95 ppb | Supports range/max only | Cow-milk powder, Brazil market; no p10/p90. [[sources/almeida2022-brazil-infant-formula-toxic-metals]] |
| Product concentration mean/range | [[metals/arsenic-total|Total arsenic]] | China cow milk-based formulas | 93 | mean, min, max | mean 3.32 ppb; range 0.89 to 7.87 ppb | Supports mean/range/max only | Cow-milk formula; arsenic species not resolved; no p10/p90. [[sources/chung2021-china-infant-formula-toxic-elements]] |
| Product concentration mean/range | [[metals/cadmium|Cadmium]] | China cow milk-based formulas | 93 | mean, min, max | mean 0.98 ppb; range 0.13 to 3.58 ppb | Supports mean/range/max only | Cow-milk formula; does not split HMTc powder/RTF; no p10/p90. [[sources/chung2021-china-infant-formula-toxic-elements]] |
| Product concentration mean/range | [[metals/lead|Lead]] | China cow milk-based formulas | 93 | mean, min, max | mean 2.03 ppb; range 0.36 to 5.75 ppb | Supports mean/range/max only | Cow-milk formula; does not split HMTc powder/RTF; no p10/p90. [[sources/chung2021-china-infant-formula-toxic-elements]] |
| UK category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | UK dry first/hungrier milk, as sold | not extracted | category average/range | 0.7 to 1.8 ppb | Does not support p10/p90/p100 | Category-level UK survey; not brand-level or row-specific. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK category average | [[metals/cadmium|Cadmium]] | UK dry first/hungrier milk, as sold | not extracted | category average/range | 3 to 4 ppb | Does not support p10/p90/p100 | Category-level UK survey; not brand-level or row-specific. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK category average | [[metals/lead|Lead]] | UK dry first/hungrier milk, as sold | not extracted | category average/range | 1 to 4 ppb | Does not support p10/p90/p100 | Category-level UK survey; not brand-level or row-specific. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| EU pooled market-basket concentration | [[metals/cadmium|Cadmium]] | EU milk, soy, and hypoallergenic formula baskets | 42 formula products pooled into baskets | basket values | milk formula baskets 3.3 to 4.5 ppb; soy formula baskets 15.8 to 18.3 ppb; hypoallergenic formula baskets 3.9 to 4.2 ppb | Does not support p10/p90/p100 | Pooled baskets, not individual products; unit normalization still needs source-table QA. [[sources/pandelova2012-eu-baby-food-formula-elements]] |
| EU pooled market-basket concentration | [[metals/lead|Lead]] | EU milk, soy, and hypoallergenic formula baskets | 42 formula products pooled into baskets | basket values | milk formula baskets 8.2 to 43.9 ppb; soy formula baskets 20.1 to 30.5 ppb; hypoallergenic formula baskets 9.3 to 13.2 ppb | Does not support p10/p90/p100 | Pooled baskets, not individual products; unit normalization still needs source-table QA. [[sources/pandelova2012-eu-baby-food-formula-elements]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

The current evidence base supports broad cow-milk infant-formula, formula-powder, and powdered-milk values, but not a finished non-soy powder distribution. Values below are tagged by product-match strength rather than presented as a final row-specific ppb spread.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/aluminum|Aluminum]] | Brazilian cow-milk phase 1/2 formulas | 0.432 to 1.241 mg/kg | 432 to 1241 ppb | [[sources/almeida2022-brazil-infant-formula-toxic-metals]] | Cow-milk formula powder; market-specific to Brazil. |
| [[metals/arsenic-total|Total arsenic]] | Brazilian cow-milk phase 1/2 formulas | 0.012 to 0.034 mg/kg | 12 to 34 ppb | [[sources/almeida2022-brazil-infant-formula-toxic-metals]] | Total arsenic, not iAs; cow-milk formula powder. |
| [[metals/arsenic-total|Total arsenic]] | 15 infant formulas without organic brown rice syrup | 2 to 12 ng/g | 2 to 12 ppb | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Broad infant-formula evidence; does not split powder/non-soy/soy. |
| [[metals/arsenic-total|Total arsenic]] | China cow milk-based formulas, n=93 | mean 3.32 ug/kg; range 0.89 to 7.87 ug/kg | mean 3.32 ppb; range 0.89 to 7.87 ppb | [[sources/chung2021-china-infant-formula-toxic-elements]] | Cow-milk formula; arsenic species not resolved. |
| [[metals/cadmium|Cadmium]] | China cow milk-based formulas, n=93 | mean 0.98 ug/kg; range 0.13 to 3.58 ug/kg | mean 0.98 ppb; range 0.13 to 3.58 ppb | [[sources/chung2021-china-infant-formula-toxic-elements]] | Cow-milk formula; does not split HMTc powder/RTF. |
| [[metals/lead|Lead]] | China cow milk-based formulas, n=93 | mean 2.03 ug/kg; range 0.36 to 5.75 ug/kg | mean 2.03 ppb; range 0.36 to 5.75 ppb | [[sources/chung2021-china-infant-formula-toxic-elements]] | Cow-milk formula; does not split HMTc powder/RTF. |
| [[metals/chromium|Chromium]] | China cow milk-based formulas, n=93 | mean 27.38 ug/kg; range 2.51 to 83.80 ug/kg | mean 27.38 ppb; range 2.51 to 83.80 ppb | [[sources/chung2021-china-infant-formula-toxic-elements]] | Total chromium, not Cr-VI. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK dry first/hungrier milk, as sold | 0.7 to 1.8 ug/kg | 0.7 to 1.8 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | UK category average; not brand-level. |
| [[metals/cadmium|Cadmium]] | UK dry first/hungrier milk, as sold | 3 to 4 ug/kg | 3 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | UK category average; not brand-level. |
| [[metals/lead|Lead]] | UK dry first/hungrier milk, as sold | 1 to 4 ug/kg | 1 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | UK category average; not brand-level. |
| [[metals/tin|Tin]] | Brazilian cow-milk phase 1/2 formulas | 0.007 to 0.095 mg/kg | 7 to 95 ppb | [[sources/almeida2022-brazil-infant-formula-toxic-metals]] | Cow-milk formula powder; market-specific to Brazil. |
| [[metals/mercury-total|Total mercury]] | Brazilian cow-milk phase 1/2 formulas | not detected or below LOQ | below method LOQ | [[sources/almeida2022-brazil-infant-formula-toxic-metals]] | Total mercury; MeHg not measured. |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2012 arsenic speciation study reported total arsenic concentrations of 2 to 12 ng/g in 15 infant formulas without organic brown rice syrup; because 1 ng/g equals 1 ug/kg, this corresponds to approximately 2 to 12 ppb total arsenic in formula powder, though the study does not isolate non-soy formula powder as a row-specific category. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

Gardener 2019 provides the clearest current percentile-style infant-formula evidence for lead and cadmium exposure, but it does not report a non-soy powdered formula ppb concentration distribution. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

Non-soy-specific risk characterization remains pending. <!-- UNCITED: Need non-soy powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy]]

Pandelova 2012 reported higher cadmium values in pooled soy-formula baskets than in pooled milk-formula and hypoallergenic-formula baskets, but pooled market baskets cannot be used as an individual-product percentile distribution. [[sources/pandelova2012-eu-baby-food-formula-elements]]

Potential variance drivers for non-soy powdered formula should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need formula-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/almeida2022-brazil-infant-formula-toxic-metals]]
- [[sources/chung2021-china-infant-formula-toxic-elements]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/pandelova2012-eu-baby-food-formula-elements]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/efsa-cadmium-contam-2009]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
