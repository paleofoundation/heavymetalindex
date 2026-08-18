---
title: Infant Formula, RTF Liquid (Non-Soy)
type: product-category
category: infant-formula-rtf-liquid-non-soy
hmtc_row: 3
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Infant formula, RTF liquid (non-soy)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 29
---

# Infant Formula, RTF Liquid (Non-Soy)

## Overview

This page is a structural scaffold for HMTc Category 1 row 3. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

## Who this page is for

<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading the page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Ready-to-feed-specific occurrence evidence on this matrix is thin; the <a href="#literature-evidence-summary">Literature Evidence Summary</a> reports source count and confidence rating per analyte so the gaps are explicit. Compare with the <a href="/products/infant-formula-powder-non-soy">non-soy powder</a> format-sibling for the more populated matrix.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The <a href="#federal--regulatory-limits-vs-field-findings">Federal / Regulatory Limits vs Field Findings</a> section compares the applicable regulatory cap to cited field evidence. Note that ready-to-feed liquid evidence often comes from prepared-for-feeding studies that need a basis caveat before comparison.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=infant-formula-rtf-liquid-non-soy">Lab Result Comparator</a> to position a single lab value inside the cited literature for this matrix.</dd>
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

This page reports what the cited sources say about heavy-metal concentrations in non-soy (cow milk-based) ready-to-feed liquid infant formula. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

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
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 ready-to-feed cow-milk subset: N=20; Pb detected 0.2-0.5 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available; matrix, analyte species, and unit basis match. Not an HMTc certification limit. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 5 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid and manufactured from cow's milk proteins or cow's milk protein hydrolysates. Basis: product as placed on market. | FDA 2026 ready-to-feed cow-milk subset: N=20; Cd detected 0.09-0.7 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available; matrix, analyte species, and unit basis match. Not an HMTc certification limit. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | No conversion offered. Regulatory ceiling is on inorganic arsenic; cited occurrence row reports total arsenic. The two are toxicologically and regulatorily distinct. See the page [Methodology](#methodology) section for the non-substitutability rule on speciation. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-soy (cow milk-based), ready-to-feed liquid infant formula. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | non-soy (cow milk-based), ready-to-feed liquid (direct row-fit) | mean 437 ppb (1 source); highest reported 3442 ppb | 100% detected (67/67, Dabeka 2011, as-consumed) | No applicable cap loaded | 4 cited | medium (4 sources) | as-consumed |
| [[metals/nickel\|Ni]] | non-soy (cow milk-based), ready-to-feed liquid (summary-only / supporting context) | highest reported 9 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/cadmium\|Cd]] | non-soy (cow milk-based), ready-to-feed liquid (direct row-fit) | mean/median 0.09 to 0.27 ppb (3 sources); highest reported 1.26 ppb | 100% detected (67/67, Dabeka 2011, as-consumed) | [[regulations/eu-2023-915-cadmium]]: 5 ppb (product as placed on market) | 4 cited | medium (4 sources) | prepared-for-feeding; as-consumed |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | Not established | No current formula-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes infant formula |
| [[regulations/eu-2023-915|EU 2023/915]] | 10 ppb | as placed on market as liquid | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 0.625 ppb | Illustrative 800 g/day ready-to-feed intake screen; formula-specific exposure model required | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | All values are shown in ppb, but the FDA entry is a not-established status and the Prop 65 value is an exposure conversion, not a commodity limit. | Do not compare RTF formula to dry-powder limits; use prepared/liquid occurrence data and the EU liquid ceiling as external legal context. |

RTF formula usually has low ppb concentrations because it is already diluted, so serving-based exposure screens can be much lower than legal ceilings.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: formula-specific [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]] data for non-soy ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Direct ready-to-feed liquid evidence is available from the UK survey. Values are liquid concentrations in ug/L, displayed as ppb-equivalent for water-like liquids.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/aluminum|Aluminum]] | UK ready-to-feed first/hungrier milk | 18 to 34 ug/L | 18 to 34 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Non-soy not explicitly stated; first/hungrier milk is treated as standard formula category. |
| [[metals/arsenic-total|Total arsenic]] | UK ready-to-feed first/hungrier milk | 0 to 0.3 ug/L | 0 to 0.3 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | iAs estimated/reported per survey method. |
| [[metals/cadmium|Cadmium]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/lead|Lead]] | UK ready-to-feed first/hungrier milk | 0 to 0.4 ug/L | 0 to 0.4 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |
| [[metals/mercury-total|Total mercury]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Total mercury, not MeHg. |
| [[metals/nickel|Nickel]] | UK ready-to-feed first/hungrier milk | 0 to 9 ug/L | 0 to 9 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound non-detect treatment. |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey provides a product-label subset for ready-to-feed cow milk-based formula, expressed as prepared for feeding. Standards review still needs basis matching, jurisdiction metadata, and confidence review. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 20 | 20 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.5 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 20 | 11 | 9 | prepared for feeding; <LOD=0 lower-bound | 0.7 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 20 | 0 | 20 | prepared for feeding; <LOD=0 lower-bound | 0 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima.

| Source | Metal | N | Basis | Mean | Median | Maximum | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 67 | as consumed | 437 | 365 | 3442 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 67 | as consumed | 0.23 | 0.11 | 1.26 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 67 | as consumed | 0.9 | 0.84 | 2.46 | Source reports summary statistics only. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 8 | ready-made liquid formula | 344.8 | | 700.4 | Product-format evidence; includes first, follow-on, growing-up, and preterm ready-made products, no soy-ready-made row. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 10 | ready-to-drink liquid formula | 249.5 | | 422 | Product-format evidence; includes first, follow-on, toddler/growing-up ready-to-drink products, no soy-ready-made row. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French formula categories as consumed after preparation. These values are liquid-consumption-basis context, but the source does not isolate commercial ready-to-feed products or non-soy status. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Infant formulae | 28 | as consumed | 196 / 585 ppb | 1.61 / 4 ppb | 0.39 / 1 ppb | 20.8 / 38 ppb | 25.9 / 50 ppb | 42 / 42 ppb |
| Follow-on formulae | 34 | as consumed | 276 / 1140 ppb | 1.68 / 3 ppb | 0.43 / 2 ppb | 22.1 / 78 ppb | 26.5 / 50 ppb | 42 / 42 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-rtf-liquid-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Ready-to-feed-specific risk characterization for [[metals/aluminum|Al]] and [[metals/nickel|Ni]] remains pending. <!-- UNCITED: Need non-soy ready-to-feed liquid infant formula sources that measure Al and Ni and distinguish ready-to-feed liquid from powder. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for non-soy ready-to-feed formula should be documented only after sources distinguish formulation, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate ready-to-feed liquid formula from powdered formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-rtf-liquid]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

Infant formula is a manufactured product whose heavy-metal burden is determined by its ingredient inputs (dairy or soy protein base, vitamin and mineral premix, processing water, and processing equipment contact surfaces) rather than by whole-food agricultural contamination alone. The contamination profile of the finished product reflects the aggregate of all these inputs. Levers are ordered by approximate impact magnitude based on what the cited literature supports.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify low-metal mineral premix and protein ingredient inputs. Vitamin-mineral premixes are a documented pathway for aluminum and other trace metal contamination in formula; premix supplier specification and batch testing are the primary control. | Premix origin and specification can drive substantial variation in Al and other metal concentrations; quantified magnitude data not yet ingested from cited sources for this specific lever at the formula level. | — |
| 2 | Sourcing | Specify dairy protein (cow milk protein or whey) from suppliers with documented low Cd, Al, and Pb in raw ingredient testing. Non-soy formulas consistently show lower Al and Ni relative to soy-based formulas (documented in multiple cited sources). | The cited evidence documents soy vs non-soy systematic differences for Al, Ni, and Cd; quantified lever magnitude at the ingredient-specification level not yet ingested from cited sources. | — |
| 3 | Processing | Specify process water quality: water used for reconstitution of formula concentrate and for RTF liquid processing carries its own metal burden, particularly Pb from older plumbing and Al from water treatment. Processing water testing and specification is a well-established lever. | _Quantified magnitude data not yet ingested from cited sources for water-source contribution to finished formula metal burden._ | — |
| 4 | Processing | Equipment contact surface audit: stainless steel alloys and aluminium processing equipment can contribute Al to the product stream under certain cleaning conditions. The cited Burrell 2010 and Chuchu 2013 sources both document elevated Al in ready-to-feed liquid formulas relative to reconstituted powder, consistent with a liquid-processing contribution. | [[sources/burrell2010-aluminium-in-infant-formulas]]; [[sources/chuchu2013-aluminium-in-infant-formulas]] |
| 5 | Formulation | Non-soy RTF formula is already on the lower-Al, lower-Ni side of the formula matrix. Continued supplier specification of dairy protein and premix inputs is the primary formulation lever to maintain this profile. | _Quantified magnitude data not yet ingested for formulation-lever magnitude on the non-soy Al and Ni pathways specifically._ | — |
| 6 | Testing and QC | Lot-level ICP-MS on incoming protein ingredients, mineral premix, and finished RTF product. The cited FDA 2026 survey documents N=20 cow milk-based RTF samples covering tAs, Pb, Cd, and tHg on a prepared-for-feeding basis. | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| 7 | Packaging and storage | Sn migration from non-lacquered cans is a concern for RTF and concentrated liquid formats. Specify lacquered or non-metallic can lining for this liquid format. Sn migration is more relevant to liquid than to powdered formula. | Sn migration is format-specific (liquid > powder); quantified magnitude data not yet ingested from cited sources for formula-specific Sn migration rates. | — |

Agronomic levers: not applicable to this product category as a direct lever. Agronomic interventions on dairy herds live upstream on the relevant ingredient pages.

Cross-links: [[products/infant-formula-rtf-liquid-soy-based]]; [[products/infant-formula-powder-non-soy]] for the format-sibling evidence base; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.

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
| [[sources/arellano2023-dairy-products-arsenic-argentina]] | Arsenic risk assessment through dairy products ingestion | infant-formula; infant-formula-powder-dairy; dairy-milk-cow; dairy-milk-goat-sheep | tAs | Matrix axis: unresolved (declares infant formula broadly). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/bair2022-infant-toddler-food-heavy-metals-policy]] | A Narrative Review of Toxic Heavy Metal Content of Infant and... | baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; infant-and-child-foods-master; fruit-purees | tAs; iAs; Pb; Cd; tHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/barber2025-baby-food-elements-us]] | Toxic elements in baby and young children's foods in the US a... | infant-and-child-foods-master; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; teething-and-snacks-rice-based | tAs; iAs; Cd; tHg; MeHg; Pb; Tl | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/bfr2022-nickel-dietary-intake-germany-meal]] | Nickel: estimate of long-term intake via food based on the Bf... | snacks-crackers-biscuits; cashews; chocolate | Ni | Matrix axis: unresolved. Format axis: unresolved. Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: French TDS Category Rows |
| [[sources/su2020-infant-formula-china-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in... | infant-formula | Cr; tAs; Cd; Pb | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Why This Category Is High-Risk |
| [[sources/dehghani2020-food-lead-cadmium-mspe]] | Magnetic Multi-Walled Carbon Nanotubes Modified with Polythio... | tea-infusions; rice-bulk-grain; infant-formula-powder; tea | Pb; Cd | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/depa2019-baby-food-lead-cadmium]] | Heavy Metals in Baby Foods and Cereal Products | infant-food-general; infant-cereal; infant-formula-powder; infant-formula | Pb; Cd | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/editor2019-manganese-levels-infant-formula]] | Manganese Levels in Infant Formula and Young Child Nutritiona... | infant-formula-powder-dairy; infant-formula-powder-soy; infant-formula-rtf-dairy; infant-formula-rtf-soy | Mn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | infant-formula; sunflower-seeds | Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/efsa2015-nickel-food-water]] | Scientific Opinion on the risks to public health related to t... | chocolate; coffee; tea; tea-infusions | Ni | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/garuba2024-heavy-metals-commercial-baby-foods]] | Evaluation of Heavy Metals in Commercial Baby Foods | baby-cereals-dry-rice-based; meat-and-poultry-purees; root-vegetable-purees; fruit-purees | Pb; Cd; tAs; Al; Zn; Cr; Ni | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/zmudzinska2022-rte-baby-foods-poland]] | Health Safety Assessment of Ready-to-Eat Products Consumed by... | infant-food-ready-to-eat; infant-food-powder; infant-formula | Pb; Cd; As; Hg | Matrix axis: unresolved (declares infant formula broadly). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/hopfner2025-infant-formula-dietary-exposure-germany]] | The contribution of infant formula to the food survey-based d... | infant-formula-powder; infant-formula | iAs; Cd; Pb; Cr; Ni; tHg; iHg; Mn; Se; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-food; mixed-meals-non-rice | As; Cd; Pb; tHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Arsenic, Organic Foods, and Brown Rice Syrup | infant-formula; toddler-formula; rice-containing-products | tAs; iAs | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/igweze2019-trace-metals-infant-formula-nigeria]] | Appropriateness of Essentials Trace Metals in Commonly Consum... | infant-formula | Cr | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/lodico2015-infant-formula-metals]] | Simultaneous Determination of As, Cu, Cr, Se, Sn, Cd, Sb and... | infant-formula | tAs; Cr; Sn; Cd; Pb; Sb | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | Comparative study of heavy metals in dried and fluid milk in... | infant-formula-powder; infant-formula | Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/meyer2018-hydrolysed-rice-formula-arsenic]] | Low inorganic arsenic in hydrolysed-rice formula used for cow... | infant-formula-dairy-free; infant-formula-powder-non-soy | iAs | Matrix axis: exact (declares non-soy specifically). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/mumtaz2025-infant-nutrition-trace-metals]] | Occurrence and Risk Evaluation of Trace Metals in Infant Nutr... | infant-formula | Pb; Cd; Ni; Zn; Fe | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/ouyang2022-early-life-microbiota-delivery-feeding]] | Early Life Microbiota - Impact of Delivery Mode and Infant Fe... | infant-formula | not declared | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/scheer2017-aluminium-tolerable-intake-toys]] | Final Opinion on tolerable intake of aluminium with regards t... | infant-formula | Al | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/tatsuta2024-mehg-duplicate-diet-children-japan]] | Dietary intake of methylmercury by 0–5 years children using t... | infant-formula-powder; fish-containing-baby-foods; infant-formula; fruit-purees | tHg; MeHg | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/shibata2016-arsenic-rice-cereal-risk-assessment-us]] | Risk Assessment of Arsenic in Rice Cereal and Other Dietary S... | infant-rice-cereal; infant-formula; infant-solid-foods-mixed | iAs | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2026-infant-formula-toxic-elements-special-survey|Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA analytical results table · 2026 · [www.fda.gov](https://www.fda.gov/media/192124/download?attachment=)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
7. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
8. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
9. [[sources/fda2020-ias-infant-rice-cereal-guidance|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2026-infant-formula-toxic-elements-special-survey\|FDA 2026]]. *Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey*, FDA analytical results table | 2026 | Government dataset | FDA special-survey tAs, Pb, Cd, and tHg concentrations for 20 ready-to-feed cow milk-based infant formula samples on a prepared-for-feeding basis (FY2023–FY2025) |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 251 infant formulas) reporting Pb, Cd, As, and Hg detection rates and medians across cow-based and soy-based formula; broad formula context without powder/RTF split |
| 4 | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|Höpfner et al. 2025]]. *The contribution of infant formula to the food survey-based dietary exposure of nine selected elements*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | DE/EU iAs, Cd, Pb, Cr, Ni, tHg, iHg, Mn, Se, Zn occurrence in German infants (0.5 to <1 year, n=51) and toddlers (1 to <3 years, n=63) consuming infant formula, from... (n=114) |
| 5 | [[sources/introduction2025-concentrations-heavy-metals-processed\|Introduction 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Unknown journal | 2025 | Peer reviewed review | global As, Cd, Pb, tHg occurrence in Processed infant foods and infant formula products (n=Scoping review; multiple studies synthesized) |
| 6 | [[sources/mumtaz2025-infant-nutrition-trace-metals\|Mumtaz et al. 2025]]. *Occurrence and Risk Evaluation of Trace Metals in Infant Nutrition Sources in Rural and Urban Multan, Pakistan*, Food and Nutrition Insights | 2025 | Peer-reviewed | PK Pb, Cd, Ni, Zn, Fe occurrence in infant nutrition sources from rural and urban Multan, Pakistan |
| 7 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | U.S. systematic review synthesizing As, Cd, Pb, and Hg evidence across human milk and infant formula through 2024; most current and comprehensive U.S. secondary synthesis for milk-based and soy-based formula toxic-elements evidence |
| 8 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 9 | [[sources/soni2024-additives-contaminants-infant-foods-review\|Soni et al. 2024]]. *Food additives and contaminants in infant foods: a critical review of their health risk, trends and recent developments*, Food Production, Processing and Nutrition | 2024 | Peer-reviewed | US/EU/IN Al occurrence in Narrative review of food additives and contaminants in infant foods; no original measurements. Synthesizes EFSA opinions, US FDA... |
| 10 | [[sources/spungen2024-fda-tds-infant-lead-cadmium\|Spungen et al. 2024]]. *Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020*, Food Additives & Contaminants: Part A | 2024 | Peer-reviewed | FDA TDS 2018–2020 Pb and Cd dietary exposure estimates for infants 0–11 months; identifies "processed baby food and infant formula" as the dominant contributor to infant Pb exposure among non-breastfed infants |
| 11 | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | Duplicate-diet tHg and MeHg measurements in Japanese children 0–5 years; formula milk stage shows low tHg (median 0.020 ng/g); documents MeHg contribution of fish-based later diet stages, not formula |
| 12 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
| 13 | [[sources/martincarrasco2023-breast-milk-infant-formula-review\|Martín-Carrasco et al. 2023]]. *Comparison between pollutants found in breast milk and infant formula in the last decade: A review*, Science of the Total Environment | 2023 | Peer reviewed review | EU/MA/NG Pb, Cd, tHg, MeHg, tAs, Al, Cr, Cu, Ni, Zn, Fe, Mn, Co, Sn, Se, Sb occurrence in Narrative review of 65 breast-milk studies and 73 infant-formula studies published 2012–2022, covering metals, heat-treatment products, pharmaceuticals, mycotoxins,... |
| 14 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review; no original measurements. Synthesizes US Congressional Subcommittee on Economic and Consumer Policy findings (Feb 2021 and... |
| 15 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | DE/EU Ni occurrence in 840 food pools from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II,... (n=840) |
| 16 | [[sources/health2022-health-safety-ready-to-eat-products\|Health 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*,  | 2022 | Peer-reviewed | Cited reference from |
| 17 | [[sources/ouyang2022-early-life-microbiota-delivery-feeding\|Ouyang et al. 2022]]. *Early Life Microbiota — Impact of Delivery Mode and Infant Feeding*, Comprehensive Gut Microbiota, Volume 2 (Elsevier), Chapter 2.03, pp. 25-38 | 2022 | Review | This **B-tier review chapter** from Elsevier's *Comprehensive Gut Microbiota* Volume 2 synthesizes ~75 cited primary studies on infant gut microbiome... |
| 18 | [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france\|Saraiva et al. 2021]]. *Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS*, Food Additives & Contaminants Part A 38(2):304-314 | 2021 | Peer-reviewed | SS-ID-HPLC-ICP-MS Cr speciation in 10 infant formula milk samples: Cr(VI) not quantified at LOQ 0.049 µg/kg; Cr is present exclusively as Cr(III) and thermal processing does not oxidise Cr(III) to Cr(VI) |
| 19 | [[sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta\|Saraiva et al. 2021]]. *Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products*, Talanta 222 (2021) 121538 | 2021 | Peer-reviewed | FR/DK Cr, Cr-VI occurrence in Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL... (n=3) |
| 20 | [[sources/cfia2020-toxic-metals-selected-foods-2018-19\|CFIA 2020]]. *Toxic Metals in Selected Foods – April 1, 2018 to March 31, 2019: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2020 | Government report | CA tAs, Cd, Pb, tHg occurrence in Retail food samples (bran products, infant formula, meal replacement beverages, protein powders, rice products) collected from 6 Canadian... (n=985) |
| 21 | [[sources/dehghani2020-food-lead-cadmium-mspe\|Zahra et al. 2020]]. *Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples*, Analytical and Bioanalytical Chemistry Research | 2020 | Peer-reviewed | IR Pb, Cd occurrence in Black tea, rice, infant dry formula milk, and cow milk samples purchased in Yazd, Iran (n=5) |
| 22 | [[sources/igweze2020-al-as-hg-infant-formula-nigeria\|Igweze et al. 2020]]. *Public Health and Paediatric Risk Assessment of Aluminium, Arsenic and Mercury in Infant Formulas Marketed in Nigeria*, Sultan Qaboos University Medical Journal 20(1):e63-e70 | 2020 | Peer-reviewed | NG Al, tAs, tHg occurrence in Twenty-six infant formula samples (locally manufactured and imported) purchased March 2017 from stores in Port Harcourt, Nigeria, across... (n=26) |
| 23 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS upper-bound mean concentrations for Al, tAs, Cd, Cr, Ni, and Sn in 28 infant formulae and 34 follow-on formulae as consumed; powder/RTF and soy/non-soy not separated |
| 24 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
| 25 | [[sources/editor2019-manganese-levels-infant-formula\|Editor 2019]]. *Manganese Levels in Infant Formula and Young Child Nutritional Beverages in the United States and France*, Unknown | 2019 | Journal article | US/FR Mn occurrence in Commercial infant formulas and nutritional beverages marketed in the United States and France (n=Unknown) |
| 26 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | LC-ICP-MS Cr speciation in 68 French milk and dairy samples: Cr(VI) not detected at LOD 0.3 µg/kg in any sample; provides chemistry-mechanism support that milk-based formula matrices do not carry Cr(VI) |
| 27 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | US tAs, iAs, Pb, Cd, tHg occurrence in 168 commercial baby food containers, 61 brands, 13 food types; purchased from 14 US metropolitan areas and 15... (n=168) |
| 28 | [[sources/redgrove2019-prescription-infant-formulas-aluminium\|Redgrove et al. 2019]]. *Prescription Infant Formulas Are Contaminated with Aluminium*, International Journal of Environmental Research and Public Health 16(5):899 | 2019 | Peer-reviewed | Al concentrations by TH-GFAAS in 24 UK prescription infant formulas (ready-to-drink and powdered); ready-to-drink range 50–1956 µg/L, demonstrating the upper bound of Al contamination in specialised RTF formula |
| 29 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 30 | [[sources/meyer2018-hydrolysed-rice-formula-arsenic\|Meyer et al. 2018]]. *Low inorganic arsenic in hydrolysed-rice formula used for cow's milk protein allergy*, Pediatric Allergy and Immunology | 2018 | Peer-reviewed | iAs by HPLC-ICP-MS in 5 hydrolysed rice formula products (EU): iAs range 10–34 µg/L as-prepared, substantially above conventional dairy-based formula; context for rice-protein specialty RTF vs standard milk-based RTF |
| 31 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), European Commission | 2017 | Government report | EU Al occurrence in Review of regulatory opinions and dietary exposure data for children and adults |
| 32 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | Multi-metal (Al, tAs, iAs, Cd, Pb, tHg, Ni, Sn) UK survey in 47 infant formula samples including ready-to-feed first milk and follow-on milk categories with per-category concentration ranges |
| 33 | [[sources/unknown2016-risk-arsenic-rice-cereal\|Shibata et al. 2016]]. *Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S.*, International Journal of Environmental Research and Public Health | 2016 | Peer reviewed journal | Cited reference from International Journal of Environmental Research and Public Health |
| 34 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 35 | [[sources/lodico2015-infant-formula-metals\|Lo et al. 2015]]. *Simultaneous Determination of As, Cu, Cr, Se, Sn, Cd, Sb and Pb Levels in Infant Formulas by ICP-MS after Microwave-Assisted Digestion: Method Validation*, Journal of Environmental & Analytical Toxicology | 2015 | Peer-reviewed | IT tAs, Cr, Sn, Cd, Pb, Sb occurrence in infant formula samples analyzed during ICP-MS method validation |
| 36 | [[sources/odhiambo2015-infant-formula-nairobi-trace-elements\|Odhiambo et al. 2015]]. *Toxic trace elements in different brands of milk infant formulae in Nairobi market, Kenya*, African Journal of Food Science | 2015 | Peer-reviewed | KE Al, Cd, Pb, Ni occurrence in Seven imported cow-milk infant formula powder products for infants aged 0-6 months, purchased from stores in Nairobi County,... (n=7) |
| 37 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 38 | [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals\|Lutfullah et al. 2014]]. *Comparative study of heavy metals in dried and fluid milk in Peshawar by atomic absorption spectrophotometry*, The Scientific World Journal | 2014 | Peer-reviewed | PK Pb, Cd, Cr, Ni, Ca, Mg, Cu, Zn, Fe, Mn occurrence in Dried infant formula, powdered milk, fresh milk, and processed milk purchased in Peshawar, Pakistan (n=46) |
| 39 | [[sources/sipahi2014-toxic-metals-infant-formulas-turkey\|Sipahi et al. 2014]]. *Safety assessment of essential and toxic metals in infant formulas*, The Turkish Journal of Pediatrics 56(4):385-391 | 2014 | Peer-reviewed | GFAAS concentrations of Pb, Cd, Al, Mn, Cr, and Co in 63 Turkish infant foods and formulas (milk-based, cereal-based, mixed); broad milk-based formula context without soy/non-soy or powder/RTF split |
| 40 | [[sources/chuchu2013-aluminium-in-infant-formulas\|Chuchu et al. 2013]]. *The aluminium content of infant formulas remains too high*, BMC Pediatrics | 2013 | Peer-reviewed | Al by TH-GFAAS in 10 UK ready-to-drink infant formula products (100–430 µg/L) and 20 powdered formulas; separates RTF from powder and identifies soy-based powder as carrying higher Al |
| 41 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 42 | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup\|Jackson et al. 2012]]. *Arsenic, Organic Foods, and Brown Rice Syrup*, Environmental Health Perspectives | 2012 | Peer-reviewed | tAs and iAs ICP-MS in 15 standard infant formulas (2–12 ppb tAs powder) and 2 organic brown-rice-syrup toddler formulas; establishes the arsenic elevation linked to brown rice syrup as a formula ingredient |
| 43 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Pb, Cd, and Al in Canadian infant formula on an as-consumed basis by format (powder, ready-to-use, concentrated liquid) and protein source (milk-based vs soy-based); n=67 ready-to-use milk-based samples with means and maxima |
| 44 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | Al by TH-GFAAS in 15 UK infant formula products comparing ready-made liquids (176–700 µg/L) with powdered formulas and one soy-based powder; format-comparative Al occurrence data |
| 45 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Panel opinion establishing the EU Cd TWI of 2.5 µg/kg body weight per week; foundational regulatory basis for Cd limits including those applied to infant formula |
| 46 | [[sources/dabeka1987-canada-infant-formula-lead-cadmium\|Dabeka et al. 1987]]. *Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada*, Journal of Association of Official Analytical Chemists 70(4):754-757 | 1987 | Study | Historical baseline Pb and Cd survey in Canadian infant formula by format (ready-to-use, concentrated liquid, powder) and protein source; primarily Cd evidence across formula subcategories; reflects lead-soldered-can era concentrations |
| 47 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | Historical baseline AAS survey (Cd, Cr, Co, Pb, Mn, Ni) in Canadian prepared and powdered formula (1975 market); documents 50-year Pb-reduction trajectory from lead-soldered-can era; not a modern-percentile source |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda2020-ias-infant-rice-cereal-guidance|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-contradiction-watch -->
## Contradiction watch

The living-review detector has flagged **6** contributing source value(s) that disagree with the current synthesis by more than 2× the tolerance band. A re-synthesis pass for the affected (ingredient, metal) cell(s) is warranted; the synthesis claim is not retracted by this flag.

| Metal | Source | Reported value | Synthesis band | Spread | Direction |
| --- | --- | --- | --- | --- | --- |
| Al | [[sources/fsa2016-infant-food-formula-metals-survey]] | 29 ppb | 422 (typical) / 3442 (P95) | 14.55× | below-cohort-median |
| Al | [[sources/fsa2016-infant-food-formula-metals-survey]] | 31 ppb | 422 (typical) / 3442 (P95) | 13.61× | below-cohort-median |
| Al | [[sources/fsa2016-infant-food-formula-metals-survey]] | 34 ppb | 422 (typical) / 3442 (P95) | 12.41× | below-cohort-median |
| Cd | [[sources/fsa2016-infant-food-formula-metals-survey]] | 0.2 ppb | 0.6 (typical) / 1.26 (P95) | 3× | below-cohort-median |
| Cd | [[sources/fsa2016-infant-food-formula-metals-survey]] | 0.2 ppb | 0.6 (typical) / 1.26 (P95) | 3× | below-cohort-median |
| tAs | [[sources/fsa2016-infant-food-formula-metals-survey]] | 0.3 ppb | 0.7 (typical) / 1.2 (P95) | 2.33× | below-cohort-median |

Full per-flag audit at `data/evidence/synthesis-contradictions.csv`. Trigger is documented in.
<!-- END: hmi-contradiction-watch -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
