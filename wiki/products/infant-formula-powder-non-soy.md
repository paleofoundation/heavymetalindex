---
title: Infant Formula, Powder (Non-Soy)
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn]
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
updated: 2026-05-03
sources: 15
---

# Infant Formula, Powder (Non-Soy)

<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Powdered non-soy infant formula has usable but incomplete heavy-metal occurrence evidence. Structured rows summarize published concentration data; they do not establish certification limits.</p>
  <ul>
    <li><strong>Evidence status:</strong> modeled or limited evidence, with one reconstructable FDA prepared-for-feeding dataset for total arsenic, lead, cadmium, and total mercury.</li>
    <li><strong>Main concern:</strong> infants are the exposed population, so row-fit, basis matching, and non-detect handling matter before any standards interpretation.</li>
    <li><strong>Best use:</strong> read the summaries first, then use the source tables below only when you need the underlying evidence.</li>
  </ul>
  <div class="hmi-pill-row">
    <span class="hmi-pill">Pb</span>
    <span class="hmi-pill">Cd</span>
    <span class="hmi-pill">tAs</span>
    <span class="hmi-pill">tHg</span>
    <span class="hmi-pill">Al</span>
    <span class="hmi-pill">Ni</span>
    <span class="hmi-pill">Sn</span>
    <span class="hmi-pill">Cr</span>
  </div>
</div>

This page is the public evidence page for powdered non-soy infant formula. It is organized around source-backed product concentration evidence, with exposure estimates and broad formula studies separated so they do not get mistaken for direct ppb product measurements.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 prepared-for-feeding cow-milk powder subset: N=230; Pb detected 0.1-0.6 ug/kg; values are not powder-as-placed. | EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 10 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder and manufactured from cow's milk proteins or cow's milk protein hydrolysates. Basis: product as placed on market. | FDA 2026 prepared-for-feeding cow-milk powder subset: N=230; Cd detected 0.1-1.3 ug/kg; values are not powder-as-placed. | EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | EU maximum level loaded; comparison blocked because occurrence row is total arsenic and prepared-for-feeding while EU value is inorganic arsenic and product-as-placed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level extraction and standards review are tracked separately in staff tooling.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | Not established | No current formula-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes infant formula |
| EU 2023/915 | 20 ppb | as placed on market as powder | EU maximum level. |
| Prop 65 MADL screen | 5 ppb | Illustrative 100 g/day powder-intake screen; formula-specific exposure model required | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | All values are shown in ppb, but the FDA entry is a not-established status and the Prop 65 value is an exposure conversion, not a commodity limit. | Do not borrow FDA processed-baby-food action levels for formula; use basis-matched occurrence data and the EU powder ceiling as external legal context. |

No U.S. FDA formula-specific lead action level is currently established; the EU powder ceiling is a legal backstop, not a clean-product target.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: corrected pilot product-category evidence format.
- Strongest current row-fit evidence: cow-milk formula concentration ranges from China, Brazil, the UK, Canada, and pooled EU formula baskets.
- Main gap: the current corpus still does not provide enough comparable product-level occurrence data for every analyte.
- Next ingest target: datasets that distinguish powder from ready-to-feed liquid, non-soy from soy-based formula, and individual-product concentrations from pooled baskets or exposure estimates.

## Source Evidence Inventory

<!-- audience: regulator, educator, app -->

This table lists what each source actually reports. Highest values are source-scope observations, not public certification limits or cross-source standards.

| Metal | Evidence scope | N | Statistic type | Reported values | Highest value in source scope | Evidence note | Citation |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| [[metals/lead|Pb]] | China cow milk-based formulas | 93 | mean and range | mean 2.03 ppb; range 0.36 to 5.75 ppb | 5.75 ppb | Direct cow-milk formula evidence; useful as supporting occurrence evidence, but not a complete product distribution by itself. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/cadmium|Cd]] | China cow milk-based formulas | 93 | mean and range | mean 0.98 ppb; range 0.13 to 3.58 ppb | 3.58 ppb | Direct cow-milk formula evidence; useful as supporting occurrence evidence, but not a complete product distribution by itself. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/arsenic-total|tAs]] | China cow milk-based formulas | 93 | mean and range | mean 3.32 ppb; range 0.89 to 7.87 ppb | 7.87 ppb | Direct cow-milk formula evidence; total arsenic only, not iAs. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/chromium|Cr]] | China cow milk-based formulas | 93 | mean and range | mean 27.38 ppb; range 2.51 to 83.80 ppb | 83.80 ppb | Total chromium only; it should not be interpreted as Cr-VI unless a source speciates Cr-VI. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/aluminum|Al]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 432 to 1241 ppb | 1241 ppb | Direct cow-milk powder evidence; supports occurrence review but does not establish a full distribution by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-total|tAs]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 12 to 34 ppb | 34 ppb | Direct cow-milk powder evidence; total arsenic only. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/tin|Sn]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 7 to 95 ppb | 95 ppb | Direct cow-milk powder evidence; supports occurrence review but does not establish a full distribution by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/mercury-total|tHg]] | Brazil cow-milk phase 1/2 formulas | not extracted | non-detect / below LOQ | not detected or below LOQ | below LOQ | Total mercury only; MeHg not measured. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-inorganic|iAs]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 0.7 to 1.8 ppb | 1.8 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 3 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/lead|Pb]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 1 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/nickel|Ni]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 18 to 54 ppb | 54 ppb | UK category value; supports nickel context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | Canada milk-base infant formula powder, historical | 17 | median and range | median 0.6 ppb; range not detected to 4.3 ppb | 4.3 ppb | Direct milk-base powder evidence, but historical Canadian data. | [[sources/dabeka1987-canada-infant-formula-lead-cadmium|4]] |
| [[metals/cadmium|Cd]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 3.3 to 4.5 ppb | 4.5 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/lead|Pb]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 8.2 to 43.9 ppb | 43.9 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/arsenic-total|tAs]] | Infant formulas without organic brown rice syrup | 15 | range | 2 to 12 ppb | 12 ppb | Broad infant-formula evidence; powder/non-soy/soy not split. | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]] |

## Structured Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey is the first source in this row that gives a reconstructable product-label subset for several metals. These values are expressed as prepared for feeding, so they should not be silently pooled with dry-powder-as-sold ppb values. The extraction below is included as a traceability appendix, not as a public standard. The full sample-level extraction is in `data/evidence/category1_formula_special_survey_samples.csv`, with summary rows in `data/evidence/category1_formula_concentration_summary.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 230 | 212 | 18 | prepared for feeding; <LOD=0 lower-bound | 4.7 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 230 | 169 | 61 | prepared for feeding; <LOD=0 lower-bound | 0.6 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 230 | 145 | 85 | prepared for feeding; <LOD=0 lower-bound | 1.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 230 | 3 | 227 | prepared for feeding; <LOD=0 lower-bound | 0.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Digest formula papers add useful source-scope rows, but they mostly report means, medians, ranges, or maxima rather than full product-level distributions. These rows support the evidence pool and show high-end source context; they do not by themselves set public limits.

| Source | Metal | N | Basis | Mean | Median | Highest value | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 57 | as consumed | 177 | 44 | 1004 | Source reports summary statistics, not a full distribution. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 57 | as consumed | 0.17 | 0.06 | 1.21 | Source reports summary statistics, not a full distribution. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 57 | as consumed | 0.65 | 0.34 | 3.46 | Source reports summary statistics, not a full distribution. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/aluminum|Al]] | 13 milk-based rows in pasted Table 3 | dried powder | 1018.5 |  | 1520 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/cadmium|Cd]] | 13 milk-based rows in pasted Table 3 | dried powder | 7.86 |  | 12.3 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/lead|Pb]] | 13 milk-based rows in pasted Table 3 | dried powder | 64.2 |  | 97 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 7 | prepared estimate from powder | 446.8 |  | 592.4 | Source reports product means/ranges and prepared estimates; non-soy powder products are grouped. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 18 | prepared estimate from powder | 194.8 |  | 411 | Source reports product means and prepared estimates; non-soy powder products are grouped. |

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting Row-Fit Review

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc p90 or p95 calculations unless a later extraction resolves product row fit, basis, analyte species, and statistic fit.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]] | Determination of aflatoxin M1 and heavy metals in infant form... | infant-formula-powder | Ni; Pb; Cd; Fe; Zn | Powder context only until soy/non-soy fit is resolved. |
| [[sources/amarh2023-ghana-infant-food-heavy-metals]] | Health risk assessment of some selected heavy metals in infan... | infant-foods; infant-formula | tAs; Cd; Cr; tHg; Mn; Ni; Pb; Sb | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | Determination of 40 Elements in Powdered Infant Formulas and ... | infant-formula-powder | Al; tAs; Cd; Cr; Mn; Ni; Pb; Sn; Zn | Powder context only until soy/non-soy fit is resolved. |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/chung2021-china-infant-formula-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in ... | infant-formula | Cr; tAs; Cd; Pb | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | chocolate; infant-formula; breast-milk | Cd | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Arsenic, Organic Foods, and Brown Rice Syrup | infant-formula; toddler-formula; rice-containing-products | tAs; iAs | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | Comparative study of heavy metals in dried and fluid milk in ... | infant-formula-powder; powdered-milk; liquid-milk | Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn | Powder context only until soy/non-soy fit is resolved. |
| [[sources/marques2021-trace-elements-milks-plant-based-drinks]] | Essential and Non-essential Trace Elements in Milks and Plant... | plant-milks-soy-based; plant-milks-rice-based; plant-milks-non-soy-non-rice; infant-formula | Pb; tHg; Ni; U | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Powder context only until soy/non-soy fit is resolved. |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Powder context only until soy/non-soy fit is resolved. |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Broad formula context only until format and soy/non-soy fit are resolved. |
| [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Dietary intake of methylmercury by 0-5 years children using t... | fish-containing-baby-foods; infant-formula; baby-foods; toddler-meals | tHg; MeHg | Broad formula context only until format and soy/non-soy fit are resolved. |

<!-- END: hmi-broad-context-sources -->

## Internal Standards Boundary

<!-- audience: regulator, educator, app -->

This public page stops at evidence inventory and traceability. Percentile calculations, clean/dirty comparator selection, LOQ fallback decisions, confidence review, regulatory-ceiling adjudication, and final standards decisions are tracked in the staff standards workbench rather than published as public page content.

The values above should therefore be read as source-reported or structured evidence context. They are not HMT&C candidate standards, final limits, or brand pass/fail criteria.

## Evidence Used For This Row

<!-- audience: regulator, educator, app -->

The direct row-fit evidence is strongest when a study measures cow-milk or milk-base powdered formula as a product concentration. Chung 2021, Almeida 2022, FSA 2016, Dabeka 1987, and Pandelova 2012 are therefore more useful for this row than broad baby-food papers, but each still has limitations that require staff review before standards use.

The largest interpretive issue is scope. China-market, Brazil-market, UK-market, Canada-historical, EU-pooled-basket, and U.S. prepared-for-feeding values should not be silently merged without basis matching, row-fit review, and jurisdiction metadata. They can show what has been observed in formula, and they may contribute to an aggregate evidence pool when the standards workflow can document comparability and 95% confidence.

## Exposure Estimates From Formula Consumption

<!-- audience: regulator, educator, consumer, app -->

Gardener 2019 is useful because it reports infant exposure estimates from formula consumption. It is not a product concentration table and should not be used as ppb product-limit evidence.

| Metal | Product or exposure scope | N | Highest exposure estimate | Unit | Interpretation use | Citation |
| --- | --- | ---: | ---: | --- | --- | --- |
| [[metals/lead|Pb]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 2.68 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |
| [[metals/cadmium|Cd]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 23.33 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French infant formula, follow-on formula, and growing-up milk values as consumed after preparation; it does not separate powder from ready-to-feed, soy from non-soy, or cow-milk from other formulas, so these rows support broad formula occurrence context rather than a row-specific product distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Infant formulae | 28 | as consumed | 196 / 585 ppb | 1.61 / 4 ppb | 0.39 / 1 ppb | 20.8 / 38 ppb | 25.9 / 50 ppb | 42 / 42 ppb |
| Follow-on formulae | 34 | as consumed | 276 / 1140 ppb | 1.68 / 3 ppb | 0.43 / 2 ppb | 22.1 / 78 ppb | 26.5 / 50 ppb | 42 / 42 ppb |
| Growing-up milks | 9 | as consumed | 189 / 724 ppb | 2.11 / 4 ppb | 0.71 / 4 ppb | 27.7 / 61 ppb | 25 / 25 ppb | 42 / 42 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63 percent of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73 percent of cow-based formula items and Cd in 44 percent of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

A 2012 arsenic speciation study reported total arsenic concentrations of 2 to 12 ng/g in 15 infant formulas without organic brown rice syrup; because 1 ng/g equals 1 ug/kg, this corresponds to 2 to 12 ppb total arsenic in formula powder, though the study does not isolate non-soy formula powder as a row-specific category. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|9]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Non-soy-specific risk characterization remains pending. <!-- UNCITED: Need non-soy powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Pandelova 2012 reported higher cadmium values in pooled soy-formula baskets than in pooled milk-formula and hypoallergenic-formula baskets, but pooled market baskets cannot be used as an individual-product percentile distribution. [[sources/pandelova2012-eu-baby-food-formula-elements|5]]

Potential variance drivers for non-soy powdered formula should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Source Legend

1. [[sources/chung2021-china-infant-formula-toxic-elements|Chung 2021]]: China cow milk-based infant formula concentrations for Pb, Cd, tAs, and total Cr.
2. [[sources/almeida2022-brazil-infant-formula-toxic-metals|Almeida 2022]]: Brazil cow-milk infant formula powder ranges for Al, tAs, Sn, and tHg.
3. [[sources/fsa2016-infant-food-formula-metals-survey|FSA 2016]]: UK dry first/hungrier milk category values for iAs, Cd, Pb, and Ni.
4. [[sources/dabeka1987-canada-infant-formula-lead-cadmium|Dabeka 1987]]: historical Canadian milk-base infant formula powder data for cadmium and lead.
5. [[sources/pandelova2012-eu-baby-food-formula-elements|Pandelova 2012]]: EU pooled market-basket formula values, including milk-formula and soy-formula baskets.
6. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson 2012]]: infant formula total arsenic values in products without organic brown rice syrup.
7. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|Gardener 2019]]: percentile-style infant exposure estimates from formula consumption.
8. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]]: global scoping review of baby foods and infant formulas.
9. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor 2018]]: infant dietary arsenic and biomarker context.
10. [[sources/meli2024-chemical-characterization-baby-food-italy|Meli 2024]]: European baby-food and powdered-milk analytical context.
11. [[sources/spungen2024-fda-tds-infant-lead-cadmium|Spungen 2024]]: FDA Total Diet Study infant lead and cadmium context.
12. [[sources/efsa-cadmium-contam-2009|EFSA 2009]]: cadmium toxicology and regulatory context.

## Sources

- [[sources/chung2021-china-infant-formula-toxic-elements]]
- [[sources/almeida2022-brazil-infant-formula-toxic-metals]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/dabeka1987-canada-infant-formula-lead-cadmium]]
- [[sources/pandelova2012-eu-baby-food-formula-elements]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/efsa-cadmium-contam-2009]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- [[sources/kazi2009-toxic-elements-in-infant-formulae]]
