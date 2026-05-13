---
title: Mixed Meals, Non-Rice
type: product-category
category: mixed-meals-non-rice
hmtc_row: 12
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Mixed meals, non-rice"
base_taxonomy: mixed-meals
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [mixed-meals, non-rice-grains, vegetables, meat]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-6-60mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: mixed-meals-rice-containing
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 4
---

# Mixed Meals, Non-Rice

This page is a structural scaffold for HMTc Category 1 row 12. FDA compliance samples now provide a direct non-rice mixed-meal lower-bound distribution, while broader savoury infant-food evidence remains useful context.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on non-rice mixed meals typically center on lead and cadmium from vegetable and grain ingredients. Source provenance and basis labeling (as-sold vs prepared) are the defensive core. Compare with <a href="/products/mixed-meals-rice-containing">Mixed Meals Rice Containing</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=mixed-meals-non-rice">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for non-rice mixed meals, against the FDA 2025 baby-food lead cap.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, pooling math) lives in the local staff Standards Workbench tool and under <code>data/workbench/standards/</code>, never on this public page or anywhere else under <code>wiki/</code>. See CLAUDE.md Part 19.</dd>
    </div>
  </dl>
</div>
<!-- END: hmi-stakeholder-guide -->
<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | Regulatory value loaded for mixtures; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until mixed-meal rows are extracted. | [[regulations/eu-2023-915-cadmium]]; [[sources/fera2014-fsa-metals-infant-foods-formula]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-rice grain-based mixed meal. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | non-rice grain-based (summary-only / supporting context) | highest reported 9 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/cadmium\|Cd]] | non-rice grain-based (summary-only / supporting context) | mean/median 2.2 to 10 ppb (3 sources); highest reported 44.4 ppb | 86% detected (66/77, Fda 2024, as-sold) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 3 cited | medium (3 sources) | as-sold; mixed-or-source-reported; as-consumed |
| [[metals/lead\|Pb]] | non-rice grain-based (summary-only / supporting context) | median 1.6 ppb (1 source); highest reported 13 ppb | 76% detected (59/78, Fda 2024, as-sold) | [[regulations/fda2025-lead-processed-baby-foods]]: 10 ppb (as sold or ready-to-eat as applicable) | 2 cited | low (1-2 sources) | as-sold; as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby-food mixture | Mixtures including grain- and meat-based mixtures for babies and young children under 2 |
| EU 2023/915 | 20 ppb | baby food as placed on market | EU maximum level. |
| Prop 65 MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g; toddler dinner RACC is 170 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb; the Prop 65 equivalent is about 4.5 ppb at 110 g/day or 2.9 ppb at 170 g/day. | Use FDA 10 ppb as regulatory cap/context and keep rice status separate so non-rice occurrence is not silently pooled with rice-containing meals. |

Mixed meals often have ingredient-driven variance; the ppb table helps distinguish legal compliance from actual category position.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold with broad mixed-meal evidence; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted sources; row-fit caveats remain in the table.
- Next ingest target: mixed-meal datasets for non-rice products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Distribution Context

<!-- audience: regulator, educator, app -->

The current source set does not yet support a non-rice mixed-meal HMTc clean-platform P90. UK category-average data are structured as EF-4 context and broad Gardener 2019 all-sample percentiles can support screening context, but rice status and mixed-meal formulation must be resolved before threshold-setting use. [[sources/fsa2016-infant-food-formula-metals-survey]] [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]

| Evidence type | Analyte | Product or row fit | N | Statistic available | Values | Distribution use | Caveat |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| FDA compliance sample-level distribution | [[metals/arsenic-total|Total arsenic]], [[metals/cadmium|Cadmium]], [[metals/lead|Lead]], [[metals/mercury-total|Total mercury]] | FDA Mixtures rows with no rice named | tAs 77; Cd 77; Pb 78; tHg 36 | lower-bound p50, p90, p95, max | tAs p50 3 ppb, p90 5.6 ppb, max 13.6 ppb; Cd p50 2.2 ppb, p90 5.2 ppb, max 44.4 ppb; Pb p50 1.6 ppb, p90 6.8 ppb, max 13 ppb; tHg p90 0, max 0.4 ppb | Supports source-scope lower-bound distribution after review | Machine-extracted; `<LOD` treated as 0; "no rice named" is not ingredient-list confirmation. [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] |
| UK savoury category average | [[metals/aluminum|Aluminum]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 1995 to 1999 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/arsenic-inorganic|Inorganic arsenic]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 7 to 9 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group; rice status not isolated. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/cadmium|Cadmium]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average | 10 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| UK savoury category average | [[metals/lead|Lead]] | Other savoury based infant foods/dishes, no meat | 200 infant-food total; category n not reported | category average/range | 3 to 5 ppb | Does not support p10/p90/p100 | Broad savoury mixed-food group. [[sources/fsa2016-infant-food-formula-metals-survey]] |
| Scoping-review mixed-food median | [[metals/cadmium|Cadmium]] | Mixed foods excluding meat, fish, and rice | review-level baby-food grouping | median and exceedance share | median 8 ppb; 19% of detected items exceeded the Cd ML used by the authors | Broad context only | Secondary review category; not a product-specific distribution. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] |
| All-sample baby-food/formula distribution | [[metals/cadmium|Cadmium]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 2.76 ppb; p75 9.54 ppb; p90 20.75 ppb; p95 29.44 ppb; p99 42.50 ppb; max 103.90 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice mixed-meal clean-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |
| All-sample baby-food/formula distribution | [[metals/lead|Lead]] | Broad U.S. baby foods and formulas | 564 | p50, p75, p90, p95, p99, max | p50 0 ppb; p75 5.60 ppb; p90 10.80 ppb; p95 18.50 ppb; p99 62.75 ppb; max 183.60 ppb | Broad source-scope context only | Main paper Table 1 combines all categories; it does not publish mixed-meal or rice-status-specific concentration percentiles. Sample-level or supplemental data would be needed before this source can support the non-rice mixed-meal clean-platform aggregate. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Non-rice mixed meal evidence is currently broad. The closest values come from UK savoury infant foods without meat and meat/fish based dishes.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | FDA FY2009-FY2024 mixture baby-food samples with no rice named | p50 3 ppb; p90 5.6 ppb; p95 6.2 ppb; max 13.6 ppb | p50 3 ppb; p90 5.6 ppb; p95 6.2 ppb; max 13.6 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; source reports As, not iAs. |
| [[metals/cadmium|Cadmium]] and [[metals/lead|Lead]] | FDA FY2009-FY2024 mixture baby-food samples with no rice named | Cd p90 5.2 ppb, max 44.4 ppb; Pb p90 6.8 ppb, max 13 ppb | Cd p90 5.2 ppb, max 44.4 ppb; Pb p90 6.8 ppb, max 13 ppb | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]] | Lower-bound machine extraction; product name does not prove absence of rice ingredients. |
| [[metals/aluminum|Aluminum]] | UK other savoury based infant foods/dishes, no meat | 1995 to 1999 ug/kg | 1995 to 1999 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/arsenic-total|Total arsenic]] | UK other savoury based infant foods/dishes, no meat | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK other savoury based infant foods/dishes, no meat | 7 to 9 ug/kg | 7 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group; rice status not isolated. |
| [[metals/cadmium|Cadmium]] | UK other savoury based infant foods/dishes, no meat | 10 ug/kg | 10 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/lead|Lead]] | UK other savoury based infant foods/dishes, no meat | 3 to 5 ug/kg | 3 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |
| [[metals/nickel|Nickel]] | UK other savoury based infant foods/dishes, no meat | 66 to 97 ug/kg | 66 to 97 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Broad savoury mixed-food group. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French vegetable-based and meat/fish-based ready-to-eat infant meals. The table does not split rice-containing from non-rice meals, so these rows are useful mixed-meal context but not a row-specific p90 distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Vegetable-based ready-to-eat meals | 27 | as consumed | 575 / 2480 ppb | 3.33 / 17 ppb | 9.26 / 18 ppb | 50.4 / 92 ppb | 71.5 / 137 ppb | 59.5 / 143 ppb |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/mixed-meals-rice-containing]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

Risk characterization for this row is pending source ingest that can separate non-rice mixed meals from rice-containing mixed meals. <!-- UNCITED: Need mixed-meal datasets that distinguish non-rice products and report measured concentrations for iAs, Cd, and Pb. -->

A 2025 global scoping review reported that mixed foods excluding meat, fish, and rice had a median Cd concentration of 0.008 mg/kg among detected items, with 19% of detected items exceeding the Cd maximum level used by the authors. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for non-rice mixed meals should be documented only after sources distinguish ingredient composition, grain inclusion, vegetable inclusion, sourcing geography, processing, and analytical method. <!-- UNCITED: Need mixed-meal baby-food sources that separate non-rice from rice-containing meals and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/mixed-meals]] and non-rice ingredient targets as unresolved until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk]] | Human health risk assessment of arsenic, cadmium, lead, and m... | fruit-purees; root-vegetable-purees; non-root-vegetable-purees; baby-cereals | tAs; Cd; tHg; Pb | Matrix axis: unresolved. Format axis: unresolved. Source is broader than this row; authors do not narrow to this exact matrix/format pair. | (context only) |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods) reporting Pb, Cd, As, and Hg detection rates and medians; mixed foods category had highest reported Cd median (0.008 mg/kg) among all baby-food categories in the review |
| 2 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | Sample-level FDA Pb dataset for 386 processed baby foods (FY2023) covering mixed-ingredient categories; contributes to the evidence base for the 10 ppb Pb action level applied to mixtures under FDA 2025 guidance |
| 3 | [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024\|FDA 2024]]. *Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)*, FDA analytical results table | 2024 | Government dataset | FDA compliance-program tAs, Pb, Cd, and tHg dataset for baby and young-child foods from FY2009–FY2024, including mixed-meal (non-rice-specified) baby-food rows (1,944 sample/analyte rows across all categories) |
| 4 | [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | ICP-MS measurement of tAs, Cd, tHg, and Pb in US baby food categories including leguminous-vegetable and grain-based mixed products from the Pittsburgh market; provides detection frequency, mean, and maximum for mixed-ingredient baby foods |
| 5 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | Sample-level FDA Pb dataset for 416 baby foods from FY2021 covering mixed-ingredient pouched and jarred products; mixed-meal products (non-rice-specified) contribute to this source's scope alongside fruit-based and vegetable-based categories |
| 6 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | ICP-OES total Al measurement in 43 Brazilian commercial salty purees (mixed-ingredient infant meals up to 2,760 µg/kg) plus in vitro bioaccessibility data; primary Al occurrence source for the non-rice mixed-meals row |
| 7 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant and toddler TDS reporting category-level mean concentrations for Al, Sb, tAs, Cd, Cr, Ni, Sn, and V in soups/purees (Al mean 653 µg/kg) and vegetable-based ready-to-eat meals; context for mixed non-rice infant meals |
| 8 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | LC-ICP-MS speciation of Cr(VI) and total Cr in French cereal and dairy products; Cr(VI) not detected in any sample; provides Cr-VI-not-detected mechanism cascade for mixed-meal matrices containing cereal or dairy components |
| 9 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK FSA survey reporting multi-metal category-level means in savoury infant foods/dishes without meat (Al 1,995–1,999 µg/kg, tAs 15 µg/kg, iAs 7–9 µg/kg, Cd 10 µg/kg, Pb 3–5 µg/kg, Ni 66–97 µg/kg); relevant to non-rice mixed-meal category |
| 10 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | GFAAS measurement of Pb, Cd, Al, Mn, Cr, and Co in 12 mixed infant foods (cereals + milk + fruit + vegetables) from Ankara markets; provides mixed-food category means for an Eastern European/West Asian market context |
<!-- END: hmi-source-legend -->

