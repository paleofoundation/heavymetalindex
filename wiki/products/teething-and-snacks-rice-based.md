---
title: Teething & Snacks (Rice-Based)
type: product-category
category: teething-and-snacks-rice-based
hmtc_row: 16
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Teething & snacks (rice-based)"
base_taxonomy: teething-and-snacks
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [teething-and-snacks, rice, rice-flour, rice-puffs]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: teething-and-snacks-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 6
---

# Teething & Snacks (Rice-Based)

This page is a structural scaffold for HMTc Category 1 row 16. FDA compliance samples provide a very small rice-named snack subset and a broad grain-based snack context signal; broader rice/rice-mix baby-food, snack, and teething-biscuit sources remain important context.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 300 ug/kg iAs. Scope: rice waffles, rice wafers, rice crackers, rice cakes, rice flakes, and popped breakfast rice. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Use as regulatory context only until product scope is confirmed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## CC Candidate Summary (Part 19 framework)

<!-- audience: regulator, educator, app -->

This block was rebuilt 2026-05-09 in Phase 3 against the [Part 19 clean/dirty subcategory framework](../../CLAUDE.md). Clean and dirty are per-analyte empirical designations within the parent category (Infant and Child Foods → teething & snacks (rice-based)). For each HMT&C analyte, this subcategory is classified clean or dirty by comparing its empirical distribution against its sibling subcategory on [[products/teething-and-snacks-non-rice]] (the within-pair partner). The clean subcategory standard is p90 (lenient bar). The dirty subcategory standard is p30 (strict bar; 70% of samples in the dirtier subcategory currently fail it, creating market-ratcheting pressure per Part 2). Both standards are reported alongside p100 (max observed in the subcategory). Final HMT&C values must remain no higher than the lowest applicable loaded regulatory cap regardless of where p90 or p30 falls.

Per-analyte synthesis is mirrored from [[products/infant-and-child-foods-master]] (the canonical 16-subcategory × 10-analyte master summary). Sample-level distributions for Pb, Cd, tAs, and tHg derive from FDA FY2009-FY2024 baby-food compliance data and FDA FY2023-FY2025 formula special survey where applicable; iAs from FDA 2016 inorganic arsenic infant/toddler dataset; remaining analytes from summary-only sources or carry explicit data gaps as noted per row.

| Analyte | Subcategory designation | Standard target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| [[metals/lead\|Pb]] | **provisional** (partner data thin/missing) | p90 = 5.85 ppb | 6.50 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| [[metals/cadmium\|Cd]] | **provisional** (partner data thin/missing) | p90 = 3.15 ppb | 3.50 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| [[metals/arsenic-total\|tAs]] | **provisional** (partner data thin/missing) | p90 = 163.53 ppb | 171.00 ppb | 2 | 1 | low | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| [[metals/arsenic-inorganic\|iAs]] | summary-only | summary range | — | 0 | 1 | low | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| [[metals/mercury-methyl\|MeHg]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| [[metals/mercury-total\|tHg]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| [[metals/nickel\|Ni]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| [[metals/aluminum\|Al]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| [[metals/chromium-hexavalent\|Cr-VI]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| [[metals/tin\|Sn]] | data gap | — | — | 0 | 0 | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

### Per-analyte classification record

Concise audit-trail summary of the within-pair (or standalone) clean/dirty designation per analyte. For full empirical comparator basis (p50/p90 against the partner subcategory) see [[products/infant-and-child-foods-master]].

| Analyte | Designation | Eligibility note |
| --- | --- | --- |
| Pb | provisional | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| Cd | provisional | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| tAs | provisional | Path A thin (n_a_tier=1); second fit sample-level source needed. Sample-size warning: n=2 below 10-sample defensibility floor. |
| iAs | summary-only | Below bar; Path B candidate (no sample-level distribution); n_a_tier=1 summary-only. |
| MeHg | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| tHg | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Ni | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Al | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Cr-VI | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |
| Sn | data gap | Below bar; corpus exhausted within current ingest scope; raw/markdown manifest sweep needed. |

<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | Not established | No snack-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes snack foods; infant rice cereal lead/iAs values do not automatically apply to snacks |
| EU 2023/915 | 20 ppb | processed cereal-based food as placed on market | EU maximum level if classified as processed cereal-based infant/young-child food. |
| Prop 65 MADL screen | 71.4 ppb | 21 CFR 101.12 infant teething/snack dry grain product RACC of 7 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | The FDA entry is a not-established status; EU can be 20 ppb if the product is in the processed-cereal infant-food scope; Prop 65 is 71.4 ppb at 7 g/day. | Use rice as a contamination-platform flag, but do not silently attach infant-rice-cereal regulatory values to rice snacks. |

Rice-based snacks remain a priority because rice can drive arsenic and cadmium even where the FDA lead action level is not established.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution context; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: teething-food and snack datasets for rice-based products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a rice-based snack HMTc contaminated-platform P10. Gardener 2019 includes a snacks category and provides broad all-sample lead/cadmium percentiles, while the UK survey reports average sweet-and-savoury snack concentrations with notably higher arsenic, cadmium, lead, and nickel than many other infant-food categories. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] [[sources/fsa2016-infant-food-formula-metals-survey]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA explicit rice-named snack subset | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]] | FDA Grain-Based Snacks rows with rice named | tAs 2; Cd 2; Pb 2 | lower-bound p50, p90, max | tAs p50 96.3 ppb, p90/max 171 ppb; Cd p90/max 3.5 ppb; Pb p90/max 6.5 ppb | Small source-scope context only | Machine-extracted; rice-named subset is too small for row distribution use (`EF-3`). [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Rice cracker iAs summary | [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice crackers from EU present study plus US FDA survey | EU n=97; US n=199 | source-reported medians and ranges | US median 79 ppb, range 8-273 ppb; EU median 111 ppb, range 18-211 ppb | Supports species-specific summary context only | Dry-weight table values; HMTc benchmark percentiles require an admitted sample-level pool. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] |
| FDA broad grain-based snack context | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Grain-Based Snacks rows where rice status is not isolated | tAs 91; Cd 91; Pb 91; tHg 28 | lower-bound p50, p90, p95, max | tAs p50 61 ppb, p90 224 ppb, p95 383 ppb, max 561 ppb; Cd p90 27 ppb, max 41 ppb; Pb p90 15 ppb, max 23.7 ppb; tHg p90 2.5 ppb, max 3.3 ppb | Context only | Rice status is not isolated; do not assign this distribution directly to rice-based or non-rice snacks. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK snack category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average/range | 58 to 62 ppb | Does not support p10/p90/p100 | Broad snack category; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/cadmium|Cadmium]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 24 ppb | Does not support p10/p90/p100 | Broad snack category; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/lead|Lead]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad snack category; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK snack category average | [[metals/nickel|Nickel]] | Sweet and savoury snacks | 200 infant-food total; category n not reported | category average | 292 ppb | Does not support p10/p90/p100 | Broad snack category; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish snack-specific or rice-based snack concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-based snack contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish snack-specific or rice-based snack concentration percentiles. Sample-level or supplemental data would be needed before this source can support the rice-based snack contaminated-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Rice-based snack evidence combines broad snack data with rice-product arsenic evidence. Current sources do not always isolate teething/snack products from rice cereals and crackers.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 rice-named grain-based snack subset | p50 96.3 ppb; p90/max 171 ppb | p50 96.3 ppb; p90/max 171 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Only two rice-named snack rows; source reports As, not iAs. |
| [[metals/arsenic-total|Total arsenic]] | FDA broad grain-based snack context, rice status not isolated | p50 61 ppb; p90 224 ppb; p95 383 ppb; max 561 ppb | p50 61 ppb; p90 224 ppb; p95 383 ppb; max 561 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Context only; cannot distinguish rice-based from non-rice snacks. |
| [[metals/lead|Lead]] | FDA TDS baby food teething biscuits | 18 ug/kg hybrid mean | 18 ppb | [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Teething biscuit signal; rice status not specified. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice crackers from EU present study plus US FDA survey | US median 79 ppb, range 8-273 ppb; EU median 111 ppb, range 18-211 ppb | median 79-111 ppb; max 273 ppb | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] | Source-reported dry-weight medians/ranges; HMTc benchmark percentiles require an admitted sample-level pool. The later [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] paper remains biomarker/exposure context, not occurrence evidence. |
| [[metals/arsenic-total|Total arsenic]] | UK sweet and savoury snacks | 98 ug/kg | 98 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snack category; likely relevant to rice snacks but not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK sweet and savoury snacks | 58 to 62 ug/kg | 58 to 62 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snack category; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK sweet and savoury snacks | 24 ug/kg | 24 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snack category; rice status not isolated. |
| [[metals/lead|Lead]] | UK sweet and savoury snacks | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snack category; rice status not isolated. |
| [[metals/nickel|Nickel]] | UK sweet and savoury snacks | 292 ug/kg | 292 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad snack category; rice status not isolated. |

## Row Relationship

This row is the contamination-platform counterpart to [[products/teething-and-snacks-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items, with 31% of detected rice/rice-mix items exceeding the Pb maximum level used by the authors and 30% exceeding the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2022 narrative review identifies rice-based weaning products as an arsenic concern and cites evidence of increased infant urinary inorganic arsenic metabolites after weaning with rice products. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice/rice-mix concern, but they do not resolve teething-food format, puff processing, rice ingredient form, or serving pattern. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-based teething foods and snacks should be documented only after sources distinguish rice ingredient form, snack format, processing, sourcing geography, and analytical method. <!-- UNCITED: Need snack or teething-food sources that separate rice-based from non-rice products and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/teething-and-snacks]], [[ingredients/rice]], [[ingredients/rice-flour]], and [[ingredients/rice-puffs]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context — Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved (matrix axis: rice-based / non-rice / unresolved; format axis: snacks-and-teething / cereal / unresolved) per CLAUDE.md Part 6. A source counts toward this row's CC candidate n only once; sources marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Broad UK infant-foods snack category ("sweet and savoury snacks"); rice/non-rice axis not isolated by author. Cross-reference. | § Distribution Context, § Measured Values And Concentration Evidence |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | U.S. baby-foods/formula scope; rice-containing subset signal explicit per author (Cd elevated in foods containing rice, quinoa, wheat, oats; Pb elevated in foods containing rice, quinoa, sweet potatoes). Source-published table is all-categories aggregate; rice-specific concentrations not isolated. Cross-reference. | § Distribution Context |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees; mixed-cereals; rice-based-snacks | iAs; tAs | Author scope explicitly enumerates rice-based-snacks subset (`products: [..., rice-based-snacks]`). However, the source is an infant biomarker / dietary-arsenic study, not a finished-product concentration dataset; it supports exposure-context rather than direct occurrence evidence for this row. Phase 3 ingest target if subset values can be extracted. | (none — exposure context only, not occurrence evidence) |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Author scope includes teething-biscuits subset; rice/non-rice axis not split by author. Cross-reference. | § Measured Values And Concentration Evidence |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
