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
label: "Infant formula, powder (soy-based)"
base_taxonomy: infant-formula-powder
variant_type: higher-contamination-sibling
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
updated: 2026-05-03
sources: 25
---

# Infant Formula, Powder (Soy-Based)

This page is a structural scaffold for HMTc Category 1 row 2. Soy-specific powder evidence now includes UK dry soy-formula category values, historical Canadian milk-free/soy-base powder cadmium distributions, and EU pooled soy-formula basket values; current-market soy-powder product-level distributions remain incomplete.

## Who this page is for

<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading the page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>The cited sources are listed at the bottom of this page. Soy-based powdered formula evidence is thinner than its non-soy sibling; the <a href="#literature-evidence-summary">Literature Evidence Summary</a> reports source count and confidence rating per analyte so the gaps are visible. Compare with <a href="/products/infant-formula-powder-non-soy">non-soy powder</a> for the within-matrix sibling.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The <a href="#federal--regulatory-limits-vs-field-findings">Federal / Regulatory Limits vs Field Findings</a> section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=infant-formula-powder-soy-based">Lab Result Comparator</a> to position a single lab value inside the cited literature for this matrix, against the applicable regulatory cap.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https://heavymetaltested.com">heavymetaltested.com</a>, not on this public page. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="/methodology">methodology</a> for the separation.</dd>
    </div>
  </dl>
</div>

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in soy-based powdered infant formula. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Methylmercury (MeHg) and total mercury (tHg) are reported separately for the same reason. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations in formula can be reported on at least three bases: powder as placed on the market, powder prepared for feeding (reconstituted with water at the manufacturer-specified dilution), or formula as consumed by an infant. Values on different bases are not directly comparable. Each table below labels the source basis explicitly. Where a basis conversion is provided, the conversion factor and assumptions are stated alongside the converted value, and the converted value is marked as indicative.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row on two axes: matrix (cow milk-based vs soy-based vs hydrolyzed) and format (powder vs ready-to-feed vs concentrated liquid). Each axis is classified independently as exact, partial, or unknown.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** Certification thresholds are developed under the program at heavymetaltested.com, not on this page. See the [methodology](/methodology) for the wiki/HMT&C separation.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 prepared-for-feeding soy powder subset: N=38; Pb detected 0.1-1.1 ug/kg; values are not powder-as-placed. | Indicative comparison. Cited range 0.1 to 1.1 ppb prepared-for-feeding converts to approximately 0.8 to 8.8 ppb powder-as-placed at the conservative 1:7 reconstitution (1 g powder per 7 g water), within 20 ppb cap (infant formula powder placed on the market) on the converted basis. See the page [Methodology](#methodology) section for basis-conversion assumptions. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 20 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder and manufactured from soy protein isolates alone or mixed with cow's milk proteins. Basis: product as placed on market. | FDA 2026 prepared-for-feeding soy powder subset: N=38; Cd detected 0.4-1.4 ug/kg; values are not powder-as-placed. | Indicative comparison. Cited range 0.4 to 1.4 ppb prepared-for-feeding converts to approximately 3.2 to 11.2 ppb powder-as-placed at the conservative 1:7 reconstitution (1 g powder per 7 g water), within 20 ppb cap (infant formula powder manufactured from soy protein isolates alone or mixed with cow's milk proteins) on the converted basis. See the page [Methodology](#methodology) section for basis-conversion assumptions. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | No conversion offered. Regulatory ceiling is on inorganic arsenic; cited occurrence row reports total arsenic. The two are toxicologically and regulatorily distinct. See the page [Methodology](#methodology) section for the non-substitutability rule on speciation. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in soy-based, powder infant formula. Values are pulled directly from cited sources without re-aggregation. Aggregation, comparability review, and HMT&C certification threshold decisions are handled separately under the certification program; see the [methodology](/methodology) for the wiki/HMT&C separation.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | soy-based, powder (summary-only / supporting context) | mean 733 to 2550 ppb (3 sources); highest reported 2720 ppb | 100% detected (15/15, Dabeka 2011, as-consumed) | No applicable cap loaded | 5 cited | medium (5 sources) | as-consumed; as-sold-or-source-reported; as-sold |
| [[metals/nickel\|Ni]] | soy-based, powder (summary-only / supporting context) | mean 200 to 1300 ppb (2 sources); highest reported 1300 ppb | Sample-level detection rate not reported | No applicable cap loaded | 2 cited | low (1-2 sources) | as-sold |
| [[metals/cadmium\|Cd]] | soy-based, powder (direct row-fit) | mean/median 0.8 to 18.3 ppb (6 sources); highest reported 35 ppb | 100% detected (38/38, FDA 2026, prepared-for-feeding) | [[regulations/eu-2023-915-cadmium]]: 20 ppb (product as placed on market) | 6 cited | medium (6 sources) | prepared-for-feeding; as-consumed; as-sold-or-source-reported; as-sold |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | Not established | No current formula-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes infant formula |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | as placed on market as powder | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 5 ppb | Illustrative 100 g/day powder-intake screen; formula-specific exposure model required | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | All values are shown in ppb, but the FDA entry is a not-established status and the Prop 65 value is an exposure conversion, not a commodity limit. | Do not borrow FDA processed-baby-food action levels for formula; use basis-matched occurrence data and the EU powder ceiling as external legal context. |

No U.S. FDA formula-specific lead action level is currently established; soy formula needs its own occurrence review because soy/mineral inputs can shift the metal profile.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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

The FDA 2026 special survey provides a product-label subset for soy-based powdered formula, expressed as prepared for feeding. These rows are useful for structured evidence review, but they still require review for row fit, non-detect policy, basis matching, jurisdiction composition, and confidence before standards use. The full sample-level dataset is maintained in the staff Standards Workbench. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

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

## Source Evidence Inventory

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

This row is the sibling row in the same category to [[products/infant-formula-powder-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

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

## Levers to reduce contamination

Infant formula is a manufactured product whose heavy-metal burden is determined by its ingredient inputs (dairy or soy protein base, vitamin and mineral premix, processing water, and processing equipment contact surfaces) rather than by whole-food agricultural contamination alone. The contamination profile of the finished product reflects the aggregate of all these inputs. Levers are ordered by approximate impact magnitude based on what the cited literature supports.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify low-metal mineral premix and protein ingredient inputs. Vitamin-mineral premixes are a documented pathway for aluminum and other trace metal contamination in formula; premix supplier specification and batch testing are the primary control. | Premix origin and specification can drive substantial variation in Al and other metal concentrations; quantified magnitude data not yet ingested from cited sources for this specific lever at the formula level. | — |
| 2 | Sourcing | Specify soy protein concentrate or isolate from suppliers with documented low Cd, Al, and Ni in raw ingredient testing. Soy-based formulas consistently show higher Al and Ni relative to milk-based formulas (documented in multiple cited sources including [[sources/fsa2016-infant-food-formula-metals-survey]] and [[sources/kazi2009-toxic-elements-in-infant-formulae]]). | The cited evidence documents soy vs non-soy systematic differences for Al, Ni, and Cd; quantified lever magnitude at the ingredient-specification level not yet ingested from cited sources. | [[sources/fsa2016-infant-food-formula-metals-survey]]; [[sources/kazi2009-toxic-elements-in-infant-formulae]] |
| 3 | Processing | Specify process water quality: water used for reconstitution of formula concentrate and for processing carries its own metal burden, particularly Pb from older plumbing and Al from water treatment. Processing water testing and specification is a well-established lever. | _Quantified magnitude data not yet ingested from cited sources for water-source contribution to finished formula metal burden._ | — |
| 4 | Processing | Equipment contact surface audit: stainless steel alloys and aluminium processing equipment can contribute Al to the product stream under certain cleaning conditions. Processing equipment audit is a GMP control. | _Quantified magnitude data not yet ingested from cited sources for equipment-contact contribution._ | — |
| 5 | Formulation | Review the soy protein concentrate ingredient specification and consider lower-Al soy protein sources where the cited evidence shows systematic soy > non-soy Al elevation. The UK survey documents soy-formula Al of 2,550 ppb versus 388–488 ppb in non-soy dry formula. | [[sources/fsa2016-infant-food-formula-metals-survey]] reports a roughly 5-fold soy-to-non-soy Al elevation in UK market formulas; quantified magnitude for specification-driven reduction at the soy protein source level not yet ingested. | [[sources/fsa2016-infant-food-formula-metals-survey]] |
| 6 | Testing and QC | Lot-level ICP-MS on incoming soy protein, mineral premix, and finished product. Cadmium in soy-formula is the highest-evidence gap metric (EU soy basket Cd 15.8–18.3 ppb in [[sources/pandelova2012-eu-baby-food-formula-elements]]); lot testing detects outlier batches. | Lot-level testing detects outlier batches before distribution; no quantified detection-power data yet ingested from cited sources for sample-size optimization on the soy Cd pathway. | [[sources/pandelova2012-eu-baby-food-formula-elements]] |
| 7 | Packaging and storage | Not a primary lever for sealed powdered formula under normal storage conditions. Sn migration from non-lacquered cans is a concern for RTF and concentrated liquid formats but not for powdered formula. Specify lacquered or non-metallic can lining for liquid format siblings. | Sn migration is format-specific (liquid > powder); quantified magnitude data not yet ingested from cited sources for formula-specific Sn migration rates. | — |

Agronomic levers: not applicable to this product category as a direct lever. Agronomic interventions on soy crops live upstream on the relevant ingredient pages (see [[ingredients/soy-protein-concentrate]] if that page exists).

Cross-links: [[ingredients/infant-formula-powder]] if it exists; [[ingredients/soy-protein-concentrate]] if it exists; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

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
| [[sources/amarh2023-ghana-infant-food-heavy-metals]] | Health risk assessment of some selected heavy metals in infan... | infant-foods; infant-formula | tAs; Cd; Cr; tHg; Mn; Ni; Pb; Sb | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | Determination of 40 Elements in Powdered Infant Formulas and ... | infant-formula-powder | Al; tAs; Cd; Cr; Mn; Ni; Pb; Sn; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source resolves powder format but does not split soy from non-soy. | (context only) |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/chung2021-china-infant-formula-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in ... | infant-formula | Cr; tAs; Cd; Pb | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Why This Category Is High-Risk |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | chocolate; infant-formula; breast-milk | Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Arsenic, Organic Foods, and Brown Rice Syrup | infant-formula; toddler-formula; rice-containing-products | tAs; iAs | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Measured Values And Concentration Evidence |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | Comparative study of heavy metals in dried and fluid milk in ... | infant-formula-powder; powdered-milk; liquid-milk | Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source resolves powder format but does not split soy from non-soy. | (context only) |
| [[sources/marques2021-trace-elements-milks-plant-based-drinks]] | Essential and Non-essential Trace Elements in Milks and Plant... | plant-milks-soy-based; plant-milks-rice-based; plant-milks-non-soy-non-rice; infant-formula | Pb; tHg; Ni; U | Matrix axis: partial (covers both non-soy and soy without splitting). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source resolves powder format but does not split soy from non-soy. | (context only) |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source resolves powder format but does not split soy from non-soy. | Cross-reference - section: Why This Category Is High-Risk |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Sources |
| [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Dietary intake of methylmercury by 0-5 years children using t... | fish-containing-baby-foods; infant-formula; baby-foods; toddler-meals | tHg; MeHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2026-infant-formula-toxic-elements-special-survey\|FDA 2026]]. *Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey*, FDA analytical results table | 2026 | Government dataset | Sample-level prepared-for-feeding concentrations (N=38 soy powder subset) for Pb, Cd, tAs, and tHg |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review reporting Pb detected in 84% and Cd in 91% of soy-based formula items; primary-protein-source subgroup data |
| 3 | [[sources/du2025-infant-thickener-urinary-arsenic\|Du et al. 2025]]. *Heavy metal exposures in aerodigestive clinic cohort of infants with reflux or dysphagia*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | US systematic review of As, Cd, Pb, Hg in human milk and infant formula through 2024–2025; includes soy-formula evidence |
| 5 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | Mexico City market Pb monitoring; soy infant formula exceeded FAO/WHO ML for Pb, directly relevant to this row |
| 6 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | European baby-food and powdered-milk Al, tAs, Cd, tHg, Ni, Pb, Sn analytical context (powder format exact; soy/non-soy not split) |
| 8 | [[sources/spungen2024-fda-tds-infant-lead-cadmium\|Spungen et al. 2024]]. *Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020*, Food Additives & Contaminants: Part A | 2024 | Peer-reviewed | FDA Total Diet Study 2018–2020 infant Pb and Cd dietary exposure estimates including infant formula as a dietary contributor |
| 9 | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0-5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | Japanese duplicate-diet MeHg and tHg intake in children 0–5 years; formula-milk stage MeHg baseline context |
| 10 | [[sources/amarh2023-ghana-infant-food-heavy-metals\|Amarh et al. 2023]]. *Health risk assessment of some selected heavy metals in infant food sold in Wa, Ghana*, Heliyon | 2023 | Peer-reviewed | Ghana infant food and formula broad occurrence for Pb, Cd, tAs, tHg, Cr, Ni, Sb (n=22; formula/soy not split) |
| 11 | [[sources/original2020-original-a\|Alharbi et al. 2023]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition (Wiley) | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 12 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | *[awaiting synthesis]* |
| 13 | [[sources/ouyang2022-early-life-microbiota-delivery-feeding\|Ouyang et al. 2022]]. *Early Life Microbiota — Impact of Delivery Mode and Infant Feeding*, Comprehensive Gut Microbiota, Volume 2 (Elsevier), Chapter 2.03, pp. 25-38 | 2022 | Review | *[awaiting synthesis]* |
| 14 | [[sources/astolfi2021-italy-powdered-infant-formula-elements\|Astolfi et al. 2021]]. *Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Italian powdered infant formula occurrence for Al, tAs, Cd, Cr, Ni, Pb, Sn (n=22; powder format exact; soy/non-soy not split) |
| 15 | [[sources/chung2021-china-infant-formula-toxic-elements\|Chung et al. 2021]]. *Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market*, Foods 9(12):1839 | 2021 | Peer-reviewed | China infant formula Pb, Cd, tAs, Cr; cow milk-based scope — broad formula context for soy page (soy/non-soy not split) |
| 16 | [[sources/efsa2021-aluminium-food-qa\|EFSA 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Safety Authority | 2021 | Government report | *[awaiting synthesis]* |
| 17 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Spain cow milk, follow-on formula, and plant-based drinks Pb, tHg, Ni, U occurrence; broad infant-formula context only |
| 18 | [[sources/igweze2020-al-as-hg-infant-formula-nigeria\|Igweze et al. 2020]]. *Public Health and Paediatric Risk Assessment of Aluminium, Arsenic and Mercury in Infant Formulas Marketed in Nigeria*, Sultan Qaboos University Medical Journal 20(1):e63-e70 | 2020 | Peer-reviewed | Nigeria market infant formula Al, tAs, tHg concentrations; milk-based and cereal-based subsets (soy not resolved) |
| 19 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, tAs, Cd, Cr, Ni, Sn mean and max in infant formula as consumed; broad formula context (soy/non-soy not split) |
| 20 | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food\|Gardener et al. 2019]]. *Lead and cadmium contamination in a large sample of United States infant formulas and baby foods*, Science of the Total Environment | 2019 | Peer-reviewed | US infant formula and baby food Pb and Cd exposure estimates; broad formula context (soy/non-soy not split) |
| 21 | [[sources/gardener2019-pb-cd-us-infant-formula-baby-foods\|Gardener et al. 2019]]. *Lead and cadmium contamination in a large sample of United States infant formulas and baby foods*, Science of the Total Environment | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 22 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | *[awaiting synthesis]* |
| 23 | [[sources/redgrove2019-prescription-infant-formulas-aluminium\|Redgrove et al. 2019]]. *Prescription Infant Formulas Are Contaminated with Aluminium*, International Journal of Environmental Research and Public Health 16(5):899 | 2019 | Peer-reviewed | Al contamination in UK prescription infant formulas including powdered types (n=24); soy powder is in scope as a listed product category |
| 24 | [[sources/meyer2018-hydrolysed-rice-formula-arsenic\|Meyer et al. 2018]]. *Inorganic arsenic in hydrolysed rice formulas for infants*, Pediatric Allergy and Immunology | 2018 | Peer-reviewed | iAs in EU hydrolysed rice formulas for cow-milk-allergic infants; provides iAs contrast vs conventional (soy) formula baselines |
| 25 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | US infant iAs and tAs biomarker increase at weaning; formula arsenic as pre-weaning baseline; powder format but soy/non-soy not split |
| 26 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, SCHEER Opinion, European Commission | 2017 | Government report | *[awaiting synthesis]* |
| 27 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK dry soy-based formula category values for Al (2550 ppb), Cd (11 ppb), iAs (4.6 ppb), tAs (7 ppb), Ni (200 ppb), and Pb |
| 28 | [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|Pacquette et al. 2016]]. *Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation*, Journal of AOAC International, Vol. 99, No. 3, pp. 766-779 | 2016 | Peer-reviewed | ICP-MS method validation for As, Cd, Hg, Pb in soy and non-soy infant formula; analytical basis document for occurrence surveys |
| 29 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 | 2015 | Peer-reviewed | US NHBCS infant iAs and tAs biomarkers by feeding mode; soy formula included in the formula-fed cohort |
| 30 | [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals\|Lutfullah et al. 2014]]. *Comparative study of heavy metals in dried and fluid milk in Peshawar by atomic absorption spectrophotometry*, The Scientific World Journal | 2014 | Peer-reviewed | Pakistan dried infant formula Pb, Cd, Cr, Ni occurrence by AAS; powder format exact, soy/non-soy not split; broad powder context |
| 31 | [[sources/chuchu2013-aluminium-in-infant-formulas\|Chuchu et al. 2013]]. *The aluminium content of infant formulas remains too high*, BMC Pediatrics | 2013 | Peer-reviewed | Al in UK powdered infant formulas including 2 soy-powder products; 656–756 ppb prepared estimate from powder for the soy subset |
| 32 | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup\|Jackson et al. 2012]]. *Arsenic, Organic Foods, and Brown Rice Syrup*, Environmental Health Perspectives | 2012 | Peer-reviewed | tAs in soy toddler formula with organic brown rice syrup (1.5–2.5× the 10 µg/L drinking-water standard); highlights rice-syrup arsenic pathway in soy formula |
| 33 | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|Jackson et al. 2012]]. *Arsenic concentration and speciation in infant formulas and first foods*, Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 | 2012 | Peer-reviewed | US iAs and tAs speciation in soy and non-soy infant formulas by HPLC-ICP-MS; one of few primary sources with sample-level speciation data for soy formula |
| 34 | [[sources/pandelova2012-eu-baby-food-formula-elements\|Pandelova et al. 2012]]. *Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements*, Journal of Food Composition and Analysis | 2012 | Peer-reviewed | EU pooled soy formula baskets Cd (15.8–18.3 ppb) and Pb (20.1–30.5 ppb); soy basket higher than milk-formula basket for both analytes |
| 35 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Canadian soy-based formula as-consumed summary statistics for Al (n=15: mean 733, median 713, max 1461 ppb), Cd, and Pb |
| 36 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | Al in UK infant formulas including 1 soy powder; 629 ppb prepared estimate for the soy powder product |
| 37 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | Cadmium toxicology and EU TWI regulatory context; soy formula cadmium exposure within EFSA infant exposure scenarios |
| 38 | [[sources/kazi2009-toxic-elements-in-infant-formulae\|Kazi et al. 2009]]. *Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer*, Food and Chemical Toxicology | 2009 | Peer-reviewed | Pakistan soy-based infant formula dried-powder Al, Cd, and Pb concentrations (n=4 soy rows; mean Al 2270 ppb, max 2720 ppb) |
| 39 | [[sources/dabeka1987-canada-infant-formula-lead-cadmium\|Dabeka et al. 1987]]. *Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada*, Journal of Association of Official Analytical Chemists 70(4):754-757 | 1987 | Study | Historical Canadian milk-free or soy-base infant formula Cd distribution (n=15: mean 13.3, median 12.0, range 1.1–35 ppb) |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

_Pending synthesis. Public-record regulatory events for this product category will be summarized here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._


