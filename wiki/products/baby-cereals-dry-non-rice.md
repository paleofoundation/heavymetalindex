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
updated: 2026-05-03
sources: 8
---

# Baby Cereals / Grain Products, Dry (Non-Rice)

This page is a structural scaffold for HMTc Category 1 row 5. FDA compliance samples now provide a direct non-rice dry-cereal lower-bound distribution, while broader cereal and infant-food sources remain useful context.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 20 ug/kg Pb. Scope: dry infant cereals for children under 2. Basis: dry infant cereal. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded; field-finding comparison blocked until structured occurrence rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until structured occurrence rows are extracted and EU product scope is confirmed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## CC Candidate Summary (Part 19 framework)

<!-- audience: regulator, educator, app -->

This block was rebuilt 2026-05-08 in Phase 3 against the [Part 19 clean/dirty subcategory framework](../../CLAUDE.md). Clean and dirty are per-analyte empirical designations within the parent category (Infant and Child Foods → dry baby cereals). For each HMT&C analyte, the non-rice subcategory is classified clean or dirty by comparing its empirical distribution against its sibling subcategory on [[products/baby-cereals-dry-rice-based]]. The clean subcategory standard is p90 (lenient bar). The dirty subcategory standard is p30 (strict bar; 70% of samples in the dirtier subcategory currently fail it, creating market-ratcheting pressure per Part 2). Both standards are reported alongside p100 (max observed in the subcategory). Final HMT&C values must remain no higher than the lowest applicable loaded regulatory cap regardless of where p90 or p30 falls.

p30, p50, p90, and p100 values for Pb, Cd, tAs, iAs, and tHg are computed directly from FDA sample-level data filtered to this subcategory's row_slug: tAs/Cd/Pb/tHg from `data/evidence/category1_fda_baby_food_compliance_samples.csv` (FDA FY2009-FY2024 compliance samples, lower-bound `<LOD`/`NDb`=0); iAs from `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` (FDA 2016 inorganic arsenic infant/toddler foods, trace TR(x.x) values preserved as reported).

| Analyte | Subcategory designation | Standard target | n | n_a_tier | Sources | Confidence | CC eligibility | Regulatory cap |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | non-rice **[clean]** (non-rice p90 7.84 ppb vs rice 19.10 ppb; non-rice p50 4.00 ppb vs rice 5.00 ppb) | clean p90 = **7.84 ppb** (p100 = 9.90 ppb) | 25 | 1 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | low (Part 6: 1-2 studies = low; n_a_tier=1 below readiness bar) | Path A thin; second fit sample-level source needed before publishing | 20 ug/kg ([[regulations/fda2025-lead-processed-baby-foods]]) |
| [[metals/cadmium\|Cd]] | non-rice **[dirty]** (non-rice p90 27.28 ppb vs rice 22.00 ppb; non-rice p50 15.00 ppb vs rice 10.20 ppb — Cd accumulates higher in non-rice grains like wheat, oats, quinoa than in rice) | dirty p30 = **11.36 ppb** (p100 = 62.90 ppb) | 25 | 1 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | low | Path A thin; second fit sample-level source needed before publishing | 40 ug/kg ([[regulations/eu-2023-915-cadmium]]) |
| [[metals/arsenic-total\|tAs]] | non-rice **[clean]** (non-rice p90 36.00 ppb vs rice 135.00 ppb; non-rice p50 12.90 ppb vs rice 115.00 ppb) | clean p90 = **36.00 ppb** (p100 = 54.80 ppb) | 25 | 1 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | low | Path A thin; FDA total arsenic; iAs covered separately below | No loaded cap |
| [[metals/arsenic-inorganic\|iAs]] | non-rice **[clean]** (FDA 2016 sample-level non-rice p90 25.71 ppb vs rice-based 124.90 ppb) | clean p90 = **25.71 ppb** (p100 = 68.30 ppb) | 30 | 1 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] (n=30 sample-level; oats/corn/wheat/multigrain with no rice per FDA footnote 6) | low (n_a_tier=1) | Path A; second A-tier sample-level non-rice infant cereal iAs source needed before publishing | No loaded cap (FDA CTZ rice-cereal cap of 100 ppb does not apply to non-rice cereal) |
| [[metals/mercury-methyl\|MeHg]] | (no measured-MeHg source for either subcategory) | data gap | 0 | 0 | none | data gap | **Phase 3b ingest needed**; speciation source required (tHg cannot substitute) | No loaded cap |
| [[metals/mercury-total\|tHg]] | non-rice **[clean (data-thin)]** (non-rice all lower-bound 0; rice-based p90 2.10 ppb; non-rice subcategory shows no detection in the FDA n=9 subset) | clean p90 = **0 ppb** (p100 = 0 ppb); detection sparse | 9 | 1 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | data-thin (n=9, all lower-bound) | Path A formal but values are entirely lower-bound; second source with broader detection range needed | No loaded cap |
| [[metals/nickel\|Ni]] | (broad-cereal sources only; FSA 2016 reports 124-127 ppb broad cereal but doesn't isolate non-rice; no per-subcategory empirical distribution) | data gap | 0 non-rice-specific | 0 | [[sources/fsa2016-infant-food-formula-metals-survey]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] (broad cereal only) | data gap | **Phase 3b ingest needed**; non-rice-specific Ni source required | No loaded cap |
| [[metals/aluminum\|Al]] | (broad-cereal sources only; no per-subcategory split) | data gap | 0 non-rice-specific | 0 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] (broad cereal only) | data gap | **Phase 3b ingest needed** | No loaded cap |
| [[metals/chromium-hexavalent\|Cr-VI]] | (no Cr-VI source for either subcategory) | data gap | 0 | 0 | none | data gap | **Phase 3b ingest needed**; Cr-VI requires speciation (total Cr cannot substitute per CLAUDE.md Part 14) | No loaded cap |
| [[metals/tin\|Sn]] | (broad-cereal sources only; no per-subcategory split) | data gap | 0 non-rice-specific | 0 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] (broad cereal only) | data gap | **Phase 3b ingest needed** | No loaded cap |

### Per-analyte clean/dirty classification record

For audit traceability, the within-row classification used the central-tendency comparison below.

| Analyte | Non-rice p50 | Rice-based p50 | Non-rice p90 | Rice-based p90 | Non-rice role | Comparator basis |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Pb | 4.00 | 5.00 | 7.84 | 19.10 | clean | FDA sample-level; non-rice p90 < rice p90 |
| Cd | 15.00 | 10.20 | 27.28 | 22.00 | dirty | FDA sample-level; non-rice p90 > rice p90 (non-rice grains accumulate Cd more) |
| tAs | 12.90 | 115.00 | 36.00 | 135.00 | clean | FDA sample-level; non-rice p90 << rice p90 |
| iAs | 10.35 | 99.40 | 25.71 | 124.90 | clean | FDA 2016 sample-level; non-rice << rice (rice efficiently accumulates iAs from flooded paddies) |
| MeHg | n/a | n/a | n/a | n/a | unclassifiable | both data gap |
| tHg | 0.00 | 0.00 | 0.00 | 2.10 | clean (data-thin) | FDA sample-level; both subcategories sparse detection |
| Ni | n/a | n/a | n/a | n/a | unclassifiable | broad sources only on both sides |
| Al | n/a | n/a | n/a | n/a | unclassifiable | broad sources only on both sides |
| Cr-VI | n/a | n/a | n/a | n/a | unclassifiable | both data gap |
| Sn | n/a | n/a | n/a | n/a | unclassifiable | broad sources only on both sides |

<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 20 ppb (FDA final guidance action level) | dry infant cereal, as sold | Dry infant cereals for children under 2; FDA does not split the lead action level by rice versus non-rice |
| EU 2023/915 | 20 ppb | processed cereal-based food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 33.3 ppb | 21 CFR 101.12 dry instant infant cereal RACC of 15 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA and EU both map to 20 ppb for lead; the Prop 65 value is a one-serving exposure conversion and would fall with higher daily intake. | Use 20 ppb as an external regulatory cap/context; occurrence percentiles decide whether HMTc can justify a lower standard. |

A 20 ppb cereal can be legally aligned while still not representing best-in-class occurrence if the category median is lower.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with first distribution caveats; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: infant cereal datasets for non-rice dry grain products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice dry cereal HMTc clean-platform P90. Parker 2022 provides a small grain baby-food distribution, but the authors report that two of three grain-product types were rice-based, so the table is more appropriate as a grain-category warning than a non-rice benchmark. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Dry Infant Cereals with no rice named | tAs 25; Cd 25; Pb 25; tHg 9 | lower-bound p50, p90, p95, max | tAs p50 12.9 ppb, p90 37.8 ppb, max 54.8 ppb; Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb; tHg all lower-bound 0 | Supports source-scope lower-bound distribution after review for tAs, Cd, and Pb; Hg subset is small | Machine-extracted; `<LOD` and `NDb` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| Grain baby-food distribution | [[metals/arsenic-total|Total arsenic]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 10 ppb; mean 90.4 ppb; median 126 ppb; max 132 ppb; detected 9/9 | Not for non-rice threshold setting | Total arsenic, not iAs; row fit is weak because the grain group is mostly rice-containing. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/cadmium|Cadmium]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 12 ppb; mean 25.8 ppb; median 20 ppb; max 61 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| Grain baby-food distribution | [[metals/lead|Lead]] | Grain baby foods, mostly rice-containing | 9 | min, mean, median, max, detection rate | min 5 ppb; mean 9.7 ppb; median 5 ppb; max 20 ppb; detected 9/9 | Not for non-rice threshold setting | Row fit is weak because the grain group is mostly rice-containing; no p10/p90. [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or non-rice cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice cereal clean-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish cereal-specific or non-rice cereal concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice cereal clean-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-rice cereal evidence remains mixed because many infant cereal sources combine rice and non-rice cereals. Values below are included only with scope caveats.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | p50 12.9 ppb; p90 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | p50 12.9 ppb; p90 37.8 ppb; p95 40.4 ppb; max 54.8 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 dry infant cereal samples with no rice named | Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb | Cd p90 27.4 ppb, max 62.9 ppb; Pb p90 8 ppb, max 9.9 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; product name does not prove absence of rice ingredients. |
| [[metals/cadmium|Cadmium]] | Processed baby-food cereal category in global scoping review | median 0.013 mg/kg | 13 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad cereal category; may include rice and non-rice products. |
| [[metals/cadmium|Cadmium]] | Parker 2022 grain baby foods | mean 25.8 ppb; median 20 ppb; max 61 ppb | mean 25.8 ppb; median 20 ppb; max 61 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/lead|Lead]] | Parker 2022 grain baby foods | mean 9.7 ppb; median 5 ppb; max 20 ppb | mean 9.7 ppb; median 5 ppb; max 20 ppb | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Grain group, mostly rice-containing; weak row fit for non-rice. |
| [[metals/arsenic-total|Total arsenic]] | UK cereal-based infant foods/dishes | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |
| [[metals/lead|Lead]] | UK cereal-based infant foods/dishes | 0 to 1 ug/kg | 0 to 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/nickel|Nickel]] | UK cereal-based infant foods/dishes | 124 to 127 ug/kg | 124 to 127 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based infant foods/dishes; rice status not isolated. |

## Gardener 2019 Cereal Exceedance Context

Gardener 2019 includes 30 baby cereal products in the solid-food exceedance tables. These rows support cereal-level risk context, but they still do not split rice from non-rice cereals and do not provide cereal-specific concentration percentiles.

| Analyte | Broad cereal row | Scenario | Result | Standards use |
| --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | Baby cereals | FDA daily lead limit at 300 calories | 1/30, 3.33% exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/lead|Lead]] | Baby cereals | California Prop 65 lead daily limit at 300 calories | 13/30, 43.33% exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/cadmium|Cadmium]] | Baby cereals | WHO cadmium daily limit for a 9 kg baby at 300 calories | 0/30 exceeded | Exceedance context only; not a concentration percentile. |
| [[metals/cadmium|Cadmium]] | Baby cereals | California Prop 65 cadmium daily limit at 300 calories | 0/30 exceeded | Exceedance context only; not a concentration percentile. |

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

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting AI Adjudication

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc standards-percentile calculations unless the AI adjudication layer writes an auditable extraction, row-fit, basis, analyte-species, and statistic-fit decision. Human review is reserved for low-confidence, high-impact, or policy-conflict exceptions.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
