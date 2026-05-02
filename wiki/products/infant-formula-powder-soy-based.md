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

This page is a structural scaffold for HMTc Category 1 row 2. Soy-specific powder evidence now includes UK dry soy-formula category values, historical Canadian milk-free/soy-base powder cadmium distributions, and EU pooled soy-formula basket values; current-market soy-powder product-level distributions remain incomplete.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd); [[metals/arsenic-total]] (tAs); [[metals/mercury-total]] (tHg) | No federal product-specific limit loaded in this crosswalk. | tAs: N=38, detected 0.6-2.2 ug/kg; Pb: N=38, detected 0.1-1.1 ug/kg; Cd: N=38, detected 0.4-1.4 ug/kg; tHg: N=38, detected 0.08-0.3 ug/kg. FDA formula occurrence evidence is present, but no matched formula action level is loaded here. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/fda2026-infant-formula-product-testing-results]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

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
