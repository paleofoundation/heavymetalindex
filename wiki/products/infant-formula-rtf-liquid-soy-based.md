---
title: Infant Formula, RTF Liquid (Soy-Based)
dek: "Soy based liquid formula is supplied ready to feed. This page examines metal measurements and distinguishes direct liquid evidence from powdered soy formula and broader formula studies."
rail_highlights:
  - label: Exposure
    text: Lead and cadmium measured in ready to feed formula
    source: sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum
    source_label: Canadian survey
  - label: Key distinction
    text: Canadian results describe formula as consumed
    source: sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum
    source_label: Canadian survey
type: product-category
category: infant-formula-rtf-liquid-soy-based
hmtc_row: 4
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Infant formula, RTF liquid (soy-based)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: higher-contamination-sibling
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 14
hero_image: /static/heroes/soy-formula-powder-liquid-context.webp
hero_image_alt: "Unmarked powdered and liquid formula containers with a separate dish of soybeans illustrating infant Formula, RTF Liquid (Soy-Based) product-format context."
---

# Infant Formula, RTF Liquid (Soy-Based)

## Overview

This page is a structural scaffold for HMTc Category 1 row 4. One broad infant-formula source has been promoted; ready-to-feed-specific and Al/Ni-specific evidence is still pending.

## Who this page is for

<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading the page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Ready-to-feed soy-based formula has the thinnest occurrence evidence in the formula family. The <a href="#literature-evidence-summary">Literature Evidence Summary</a> reports source count and confidence rating per analyte so the gaps are explicit. Compare with the <a href="/products/infant-formula-powder-soy-based">soy-based powder</a> format-sibling.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The <a href="#federal--regulatory-limits-vs-field-findings">Federal / Regulatory Limits vs Field Findings</a> section compares the applicable regulatory cap to cited field evidence. Ready-to-feed evidence often comes from prepared-for-feeding studies that need a basis caveat before comparison.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=infant-formula-rtf-liquid-soy-based">Lab Result Comparator</a> to position a single lab value inside the cited literature for this matrix.</dd>
 </div>
 <div>
 <dt>Regulators, journalists, and adversarial readers</dt>
 <dd>Every numeric claim traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
 </div>
 <div>
 <dt>HMT&amp;C staff (internal)</dt>
 <dd>HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https://heavymetalcertified.com">heavymetalcertified.com</a>, not on this public page. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="/methodology">methodology</a> for the separation.</dd>
 </div>
 </dl>
</div>

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in soy-based ready-to-feed liquid infant formula. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Methylmercury (MeHg) and total mercury (tHg) are reported separately for the same reason. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations in formula can be reported on at least three bases: powder as placed on the market, powder prepared for feeding (reconstituted with water at the manufacturer-specified dilution), or formula as consumed by an infant. Values on different bases are not directly comparable. Each table below labels the source basis explicitly. Where a basis conversion is provided, the conversion factor and assumptions are stated alongside the converted value, and the converted value is marked as indicative.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row on two axes: matrix (cow milk-based vs soy-based vs hydrolyzed) and format (powder vs ready-to-feed vs concentrated liquid). Each axis is classified independently as exact, partial, or unknown.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** Certification thresholds are developed under the program at heavymetalcertified.com, not on this page. See the [methodology](/methodology) for the wiki/HMT&C separation.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 ready-to-feed soy subset: N=3; Pb detected 0.2-0.4 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available; matrix, analyte species, and unit basis match. Not an HMTc certification limit. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 10 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid and manufactured from soy protein isolates alone or mixed with cow's milk proteins. Basis: product as placed on market. | FDA 2026 ready-to-feed soy subset: N=3; Cd detected 0.8-1.1 ug/kg; ready-to-feed values are the relevant liquid basis. | Direct comparison available; matrix, analyte species, and unit basis match. Not an HMTc certification limit. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 10 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as liquid. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | No conversion offered. Regulatory ceiling is on inorganic arsenic; cited occurrence row reports total arsenic. The two are toxicologically and regulatorily distinct. See the page [Methodology](#methodology) section for the non-substitutability rule on speciation. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in soy-based, ready-to-feed liquid infant formula. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | soy-based, ready-to-feed liquid (summary-only / supporting context) | mean 730 ppb (1 source); highest reported 1121 ppb | 100% detected (14/14, Dabeka 2011, as-consumed) | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
| [[metals/nickel\|Ni]] | soy-based, ready-to-feed liquid (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | soy-based, ready-to-feed liquid (direct row-fit) | mean/median 0.9 to 2.35 ppb (3 sources); highest reported 7.55 ppb | 100% detected (16/16, Dabeka 1987, as-consumed) | [[regulations/eu-2023-915-cadmium]]: 10 ppb (product as placed on market) | 3 cited | medium (3 sources) | prepared-for-feeding; as-consumed |
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

RTF soy formula needs basis-matched occurrence review; the Prop 65 ppb screen is driven by assumed daily intake volume.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: formula-specific [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]] data for soy-based ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

No promoted source currently gives a ready-to-feed soy-formula concentration table. The closest direct evidence is ready-to-feed formula without a soy split and dry soy formula as sold.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead|Lead]] | UK ready-to-feed first/hungrier milk | 0 to 0.4 ug/L | 0 to 0.4 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ready-to-feed formula, but not soy-specific. |
| [[metals/cadmium|Cadmium]] | UK ready-to-feed first/hungrier milk | 0 to 0.2 ug/L | 0 to 0.2 ppb in liquid formula | [[sources/fsa2016-infant-food-formula-metals-survey]] | Ready-to-feed formula, but not soy-specific. |
| [[metals/aluminum|Aluminum]] | UK dry soy-based formula, as sold | 2550 ug/kg | 2550 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |
| [[metals/cadmium|Cadmium]] | UK dry soy-based formula, as sold | 11 ug/kg | 11 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |
| [[metals/nickel|Nickel]] | UK dry soy-based formula, as sold | 200 ug/kg | 200 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Soy-specific, but dry powder rather than ready-to-feed liquid. |

## Extracted Formula Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey has a very small ready-to-feed soy-based subset (`n=3`). The values below are retained for traceability, but this subset is too small to use directly as a stable threshold distribution. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 0.4 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 3 | 3 | 0 | prepared for feeding; <LOD=0 lower-bound | 1.1 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 3 | 1 | 2 | prepared for feeding; <LOD=0 lower-bound | 0.08 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Canadian formula paper adds ready-to-use soy-based source-scope summary rows for Al, Cd, and Pb; it reports means, medians, and maxima.

| Source | Metal | N | Basis | Mean | Median | Maximum | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 14 | as consumed | 730 | 769 | 1121 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 14 | as consumed | 1.18 | 1.06 | 2.95 | Source reports summary statistics only. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 14 | as consumed | 1.45 | 1.36 | 2.1 | Source reports summary statistics only. |

## Row Relationship

This row is the sibling row in the same category to [[products/infant-formula-rtf-liquid-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 84% of soy-based formula items and Cd in 91% of soy-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Ready-to-feed-specific risk characterization for [[metals/aluminum|Al]] and [[metals/nickel|Ni]] remains pending. <!-- UNCITED: Need soy-based ready-to-feed liquid infant formula sources that measure Al and Ni and distinguish ready-to-feed liquid from powder. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates soy-based formulas from cow-based and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Potential variance drivers for soy-based ready-to-feed formula should be documented only after sources distinguish soy inputs, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate soy-based ready-to-feed liquid formula from non-soy ready-to-feed liquid formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-rtf-liquid]], [[ingredients/soy-based-infant-formula]], and [[ingredients/soy-protein-isolate]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Levers to reduce contamination

Infant formula is a manufactured product whose heavy-metal burden is determined by its ingredient inputs (dairy or soy protein base, vitamin and mineral premix, processing water, and processing equipment contact surfaces) rather than by whole-food agricultural contamination alone. The contamination profile of the finished product reflects the aggregate of all these inputs. Levers are ordered by approximate impact magnitude based on what the cited literature supports.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify low-metal mineral premix and protein ingredient inputs. Vitamin-mineral premixes are a documented pathway for aluminum and other trace metal contamination in formula; premix supplier specification and batch testing are the primary control. | Premix origin and specification can drive substantial variation in Al and other metal concentrations; quantified magnitude data not yet ingested from cited sources for this specific lever at the formula level. | — |
| 2 | Sourcing | Specify soy protein concentrate or isolate from suppliers with documented low Cd, Al, and Ni in raw ingredient testing. Soy-based formulas consistently show higher Al and Ni relative to milk-based formulas (documented in multiple cited sources). The Canadian RTF soy data shows mean Al of 730 ppb vs 437 ppb for non-soy RTF in Dabeka 2011. | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] |
| 3 | Processing | Specify process water quality: water used for RTF liquid processing carries its own metal burden, particularly Pb from older plumbing and Al from water treatment. Processing water testing and specification is a well-established lever. | _Quantified magnitude data not yet ingested from cited sources for water-source contribution to finished formula metal burden._ | — |
| 4 | Processing | Equipment contact surface audit: stainless steel alloys and aluminium processing equipment can contribute Al to the product stream under certain cleaning conditions. Processing equipment audit is a GMP control. | _Quantified magnitude data not yet ingested from cited sources for equipment-contact contribution._ | — |
| 5 | Formulation | Review the soy protein concentrate ingredient specification and consider lower-Al soy protein sources where the cited evidence shows systematic soy > non-soy Al elevation. The Brazilian soy-based infant drink shows Al of 2,860 µg/kg in the cited Paiva 2020 source. | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility]] |
| 6 | Testing and QC | Lot-level ICP-MS on incoming soy protein, mineral premix, and finished RTF product. The cited FDA 2026 survey documents N=3 soy-based RTF samples; this very small subset underscores the need for ongoing lot testing to characterize the soy RTF distribution. | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| 7 | Packaging and storage | Sn migration from non-lacquered cans is a concern for RTF liquid formula. Specify lacquered or non-metallic can lining for this liquid format. Sn migration is more relevant to liquid than to powdered formula. | Sn migration is format-specific (liquid > powder); quantified magnitude data not yet ingested from cited sources for formula-specific Sn migration rates. | — |

Agronomic levers: not applicable to this product category as a direct lever. Agronomic interventions on soy crops live upstream on the relevant ingredient pages (see [[ingredients/soy-protein-concentrate]] if that page exists).

Cross-links: [[products/infant-formula-rtf-liquid-non-soy]]; [[products/infant-formula-powder-soy-based]] for the format-sibling evidence base; relevant mitigation pages where they exist.

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
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/su2020-infant-formula-china-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in... | infant-formula | Cr; tAs; Cd; Pb | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Why This Category Is High-Risk |
| [[sources/dehghani2020-food-lead-cadmium-mspe]] | Magnetic Multi-Walled Carbon Nanotubes Modified with Polythio... | tea-infusions; rice-bulk-grain; infant-formula-powder; tea | Pb; Cd | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/depa2019-baby-food-lead-cadmium]] | Heavy Metals in Baby Foods and Cereal Products | infant-food-general; infant-cereal; infant-formula-powder; infant-formula | Pb; Cd | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/editor2019-manganese-levels-infant-formula]] | Manganese Levels in Infant Formula and Young Child Nutritiona... | infant-formula-powder-dairy; infant-formula-powder-soy; infant-formula-rtf-dairy; infant-formula-rtf-soy | Mn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | infant-formula; sunflower-seeds | Cd | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/efsa2015-nickel-food-water]] | Scientific Opinion on the risks to public health related to t... | chocolate; coffee; tea; tea-infusions | Ni | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: exact (powder). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | (context only) |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy. | Cross-reference - section: Source Evidence Inventory |
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

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/fda2026-infant-formula-toxic-elements-special-survey|Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA analytical results table · 2026 · [www.fda.gov](https://www.fda.gov/media/192124/download?attachment=)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
6. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
7. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
8. [[sources/fda2020-ias-infant-rice-cereal-guidance|Inorganic Arsenic in Rice Cereals for Infants: Action Level, Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Guidance</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2026-infant-formula-toxic-elements-special-survey\|FDA 2026]]. *Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey*, FDA analytical results table | 2026 | Government dataset | FDA special-survey tAs, Pb, Cd, and tHg concentrations for 312 infant formula samples on a prepared-for-feeding basis including a soy-based ready-to-feed subset (FY2023–FY2025) |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 251 infant formulas) reporting Pb, Cd, As, and Hg detection rates; soy-based formula subgroup shows Pb detected in 84% and Cd in 91% of soy-based formula items |
| 4 | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|Höpfner et al. 2025]]. *The contribution of infant formula to the food survey-based dietary exposure of nine selected elements*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | DE/EU iAs, Cd, Pb, Cr, Ni, tHg, iHg, Mn, Se, Zn occurrence in German infants (0.5 to <1 year, n=51) and toddlers (1 to <3 years, n=63) consuming infant formula, from... (n=114) |
| 5 | [[sources/introduction2025-concentrations-heavy-metals-processed\|Introduction 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Unknown journal | 2025 | Peer reviewed review | global As, Cd, Pb, tHg occurrence in Processed infant foods and infant formula products (n=Scoping review; multiple studies synthesized) |
| 6 | [[sources/mumtaz2025-infant-nutrition-trace-metals\|Mumtaz et al. 2025]]. *Occurrence and Risk Evaluation of Trace Metals in Infant Nutrition Sources in Rural and Urban Multan, Pakistan*, Food and Nutrition Insights | 2025 | Peer-reviewed | PK Pb, Cd, Ni, Zn, Fe occurrence in infant nutrition sources from rural and urban Multan, Pakistan |
| 7 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | U.S. systematic review synthesizing As, Cd, Pb, and Hg evidence across human milk and infant formula through 2024; canonical secondary synthesis source covering both milk-based and soy-based formula |
| 8 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 9 | [[sources/spungen2024-fda-tds-infant-lead-cadmium\|Spungen et al. 2024]]. *Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020*, Food Additives & Contaminants: Part A | 2024 | Peer-reviewed | FDA TDS 2018–2020 Pb and Cd dietary exposure estimates for infants 0–11 months; identifies "processed baby food and infant formula" as the dominant contributor to infant Pb exposure among non-breastfed infants |
| 10 | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | JP tHg, MeHg occurrence in 260 children aged 0–5 years from the Pacific side of Tohoku, Japan, providing 276 24-hour dietary duplicate samples... (n=276) |
| 11 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
| 12 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review; no original measurements. Synthesizes US Congressional Subcommittee on Economic and Consumer Policy findings (Feb 2021 and... |
| 13 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | DE/EU Ni occurrence in 840 food pools from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II,... (n=840) |
| 14 | [[sources/health2022-health-safety-ready-to-eat-products\|Health 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*,  | 2022 | Peer-reviewed | Cited reference from |
| 15 | [[sources/ouyang2022-early-life-microbiota-delivery-feeding\|Ouyang et al. 2022]]. *Early Life Microbiota — Impact of Delivery Mode and Infant Feeding*, Comprehensive Gut Microbiota, Volume 2 (Elsevier), Chapter 2.03, pp. 25-38 | 2022 | Review | This **B-tier review chapter** from Elsevier's *Comprehensive Gut Microbiota* Volume 2 synthesizes ~75 cited primary studies on infant gut microbiome... |
| 16 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Total Al by ICP-OES in Brazilian soy-based infant drink (2860 µg/kg) and fruit purees; also reports in-vitro bioaccessibility (0.5–48%) showing total Al overestimates bioavailable fraction; soy-based drink is the direct soy-formula context source |
| 17 | [[sources/dehghani2020-food-lead-cadmium-mspe\|Zahra et al. 2020]]. *Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples*, Analytical and Bioanalytical Chemistry Research | 2020 | Peer-reviewed | IR Pb, Cd occurrence in Black tea, rice, infant dry formula milk, and cow milk samples purchased in Yazd, Iran (n=5) |
| 18 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS upper-bound mean concentrations for Al, tAs, Cd, Cr, Ni, and Sn in 28 infant formulae and 34 follow-on formulae as consumed; powder/RTF and soy/non-soy not separated |
| 19 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
| 20 | [[sources/editor2019-manganese-levels-infant-formula\|Editor 2019]]. *Manganese Levels in Infant Formula and Young Child Nutritional Beverages in the United States and France*, Unknown | 2019 | Journal article | US/FR Mn occurrence in Commercial infant formulas and nutritional beverages marketed in the United States and France (n=Unknown) |
| 21 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 22 | [[sources/meyer2018-hydrolysed-rice-formula-arsenic\|Meyer et al. 2018]]. *Low inorganic arsenic in hydrolysed-rice formula used for cow's milk protein allergy*, Pediatric Allergy and Immunology | 2018 | Peer-reviewed | iAs by HPLC-ICP-MS in 5 hydrolysed rice formulas (EU): iAs range 10–34 µg/L as-prepared; context for rice-protein specialty formula as a high-iAs alternative to soy-based and milk-based formulas |
| 23 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), European Commission | 2017 | Government report | EU Al occurrence in Review of regulatory opinions and dietary exposure data for children and adults |
| 24 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | Multi-metal UK survey in 47 infant formula samples; includes a distinct soy-based formula category row (Al 2550 µg/kg, tAs 7 µg/kg, iAs 4.6 µg/kg, Cd 11 µg/kg, Ni 200 µg/kg) distinguishing soy from milk-based formats |
| 25 | [[sources/unknown2016-risk-arsenic-rice-cereal\|Shibata et al. 2016]]. *Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S.*, International Journal of Environmental Research and Public Health | 2016 | Peer reviewed journal | Cited reference from International Journal of Environmental Research and Public Health |
| 26 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 27 | [[sources/lodico2015-infant-formula-metals\|Lo et al. 2015]]. *Simultaneous Determination of As, Cu, Cr, Se, Sn, Cd, Sb and Pb Levels in Infant Formulas by ICP-MS after Microwave-Assisted Digestion: Method Validation*, Journal of Environmental & Analytical Toxicology | 2015 | Peer-reviewed | IT tAs, Cr, Sn, Cd, Pb, Sb occurrence in infant formula samples analyzed during ICP-MS method validation |
| 28 | [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals\|Lutfullah et al. 2014]]. *Comparative study of heavy metals in dried and fluid milk in Peshawar by atomic absorption spectrophotometry*, The Scientific World Journal | 2014 | Peer-reviewed | PK Pb, Cd, Cr, Ni, Ca, Mg, Cu, Zn, Fe, Mn occurrence in Dried infant formula, powdered milk, fresh milk, and processed milk purchased in Peshawar, Pakistan (n=46) |
| 29 | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup\|Jackson et al. 2012]]. *Arsenic, Organic Foods, and Brown Rice Syrup*, Environmental Health Perspectives | 2012 | Peer-reviewed | tAs and iAs in soy-based organic toddler formula containing brown rice syrup; reconstituted soy-based formula showed iAs approximately 1.5–2.5× the 10 µg/L drinking-water standard, establishing brown rice syrup as a high-arsenic ingredient in soy formula |
| 30 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Pb, Cd, and Al in Canadian infant formula on an as-consumed basis by format and protein source; n=14 ready-to-use soy-based samples (Al mean 730 µg/kg, Cd mean 1.18 µg/kg, Pb mean 1.45 µg/kg) with means and maxima |
| 31 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Panel opinion establishing the EU Cd TWI of 2.5 µg/kg body weight per week; foundational regulatory basis for Cd limits including those applied to infant formula |
| 32 | [[sources/jecfa-67th-aluminium-methylmercury-2007\|JECFA 2007]]. *Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 940 (Sixty-seventh meeting of JECFA, Rome, 20-29 June 2006) | 2007 | Government report | international Al, MeHg, tHg occurrence in Aluminium: total dietary exposure derived from market-basket and duplicate-diet surveys in adults (France, Germany, UK, USA, China), Total... |
| 33 | [[sources/dabeka1987-canada-infant-formula-lead-cadmium\|Dabeka et al. 1987]]. *Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada*, Journal of Association of Official Analytical Chemists 70(4):754-757 | 1987 | Study | Historical baseline Pb and Cd survey in Canadian infant formula by format and protein source; Cd evidence across soy-based formula subcategories; reflects lead-soldered-can era concentrations |
| 34 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | Contribution to this topic remains under review; see the source record for its reported scope. |
| 35 | [[sources/eu2023-915-lead-infant-young-child-foods\|EU 2023]]. *Commission Regulation (EU) 2023/915 — Lead Maximum Levels for Infant and Young-Child Foods*, Official Journal of the European Union / EUR-Lex consolidated regulation | 2023 | Regulation | Contribution to this topic remains under review; see the source record for its reported scope. |
| 36 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | Contribution to this topic remains under review; see the source record for its reported scope. |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda2020-ias-infant-rice-cereal-guidance|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-contradiction-watch -->
## Contradiction watch

The living-review detector has flagged **1** contributing source value(s) that disagree with the current synthesis by more than 2× the tolerance band. A re-synthesis pass for the affected (ingredient, metal) cell(s) is warranted; the synthesis claim is not retracted by this flag.

| Metal | Source | Reported value | Synthesis band | Spread | Direction |
| --- | --- | --- | --- | --- | --- |
| Cd | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] | 1.1 ppb | 2.95 (typical) / 7.55 (P95) | 2.68× | below-cohort-median |

Full per-flag audit at `data/evidence/synthesis-contradictions.csv`. Trigger is documented in.
<!-- END: hmi-contradiction-watch -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
