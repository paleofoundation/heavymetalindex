---
title: Fish-Containing Baby Foods
type: product-category
category: fish-containing-baby-foods
hmtc_row: 11
hmtc_category: 1
category_label: Infant and Child Foods
age_range: 0-5
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: Fish-containing baby foods
base_taxonomy: fish-containing-baby-foods
variant_type: higher-contamination-sibling
platform_metals:
  - MeHg
provenance: added_step_0c_contamination_platform
ingredient_targets:
  - fish-containing-baby-foods
  - fish
  - seafood
primary_metals_of_concern:
  - MeHg
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: aggregate_source
  partners:
    - slug: 'aggregate:category-1-non-fish-baby-foods'
      partner_type: row_aggregate
      role_of_partner: clean_benchmark
      metals:
        - MeHg
      notes: >-
        MeHg variation across fish species is handled in the CC derivation for
        this row, not as additional rows.
  aggregate_definition:
    handle: category-1-non-fish-baby-foods
    member_slugs:
      - infant-formula-powder-non-soy
      - infant-formula-powder-soy-based
      - infant-formula-rtf-liquid-non-soy
      - infant-formula-rtf-liquid-soy-based
      - baby-cereals-dry-non-rice
      - baby-cereals-dry-rice-based
      - fruit-purees
      - non-root-vegetable-purees
      - root-vegetable-purees
      - meat-and-poultry-purees
      - mixed-meals-non-rice
      - mixed-meals-rice-containing
      - fruit-juice-not-canned
      - teething-and-snacks-non-rice
      - teething-and-snacks-rice-based
    rationale: >-
      Non-fish baby foods constitute the lower-end reference distribution for
      MeHg in Category 1; fish-containing baby foods diverge from this
      distribution because of bioaccumulation, which is the higher-contamination
      row characterized by this page.
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-03T00:00:00.000Z
sources: 17
kind: Subcategory
dek: >-
  A category profile assembled from its inputs. It reports what the routed
  literature says about the ingredients that drive it, not brand-by-brand
  product tests.
snapshot:
  - k: Corpus sources
    v: '17'
  - k: Ingredient inputs
    v: '3'
  - k: Applicable limits
    v: '3'
  - k: Jurisdictions
    v: '2'
---

# Fish-Containing Baby Foods

<!-- BEGIN: hmi-subcategory-v3 -->
## Overview

<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div><p>This is a category risk profile assembled from the ingredients that drive it. It does not test products, name brands, or publish brand-by-brand tables. The metals that govern it, in the routed corpus, are Methylmercury.</p></div>

## Ingredient drivers

The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit.

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/seafood">Seafood</a><span class="hmi-driver-metal">Inorganic arsenic</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--1" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading inorganic arsenic driver among this category's routed inputs — p95 100 ppb, 18 sources, high confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/fish">Fish</a><span class="hmi-driver-metal">Cadmium</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--2" style="width: 91%"></div></div><p class="hmi-driver-desc">Leading cadmium driver among this category's routed inputs — p95 2000 ppb, 48 sources, high confidence.</p></div>

## Limits applicable to this category

The category inherits the maximum levels and action levels that apply to it. These are regulatory limits, not certification thresholds.

| Instrument | Metal | Value | Status |
| --- | --- | --- | --- |
| [[regulations/fda2025-lead-processed-baby-foods\|FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children]] | Lead | 10 µg/kg | <span class="hmi-status hmi-status--guidance">Guidance</span> |
| [[regulations/eu2023-contaminants-maximum-levels\|EU Regulation 2023/915 maximum levels for contaminants in food]] | Lead | 20 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |
| [[regulations/eu-2023-915-cadmium\|Commission Regulation (EU) 2023/915 cadmium maximum levels]] | Cadmium | 40 µg/kg | <span class="hmi-status hmi-status--binding">Binding</span> |

## Testing and verification posture

Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.

<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>
<!-- END: hmi-subcategory-v3 -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in fish-containing baby foods. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Methylmercury (MeHg) and total mercury (tHg) are reported separately; the toxicological and regulatory significance of methylmercury in fish-based foods is the primary concern, and tHg is not substituted for MeHg unless the source explicitly reports MeHg.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (as consumed/ready-to-eat) or dry weight, or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Meli 2024 reports Pb <100 ug/kg wet weight in three homogenized fish products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | Regulatory applicability and comparison both need review; FDA row language does not isolate fish-containing baby foods and the Pb reporting limit is higher than the reference value. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Meli 2024 reports Pb <100 ug/kg wet weight in three homogenized fish products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | EU baby-food maximum level loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Meli 2024 reports Cd <5 ug/kg wet weight in three homogenized fish products; this is a censored small-N source summary. | EU baby-food maximum level loaded; censored upper bound is below 40 ug/kg but remains summary evidence only. | [[regulations/eu-2023-915-cadmium]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Fish-containing baby foods. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/mercury-methyl\|MeHg]] | Fish-containing baby foods (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 10 ppb (FDA final guidance action level when covered as a mixture) | processed baby-food mixture | No separate single-ingredient fish lead value in FDA 2025 baby-food guidance; fish-containing mixtures can map to the mixture value |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | baby food or infant/young-child mixed meal as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | The FDA 10 ppb value is a scope-dependent mixture mapping; the Prop 65 serving-equivalent screen is about 4.5 ppb at 110 g/day. | Use as external context only until product-scope review confirms whether the specific fish product is a covered mixture. |

Fish-containing foods need separate mercury/speciation treatment; the lead ppb row should not be treated as the whole risk story.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: fish-containing baby-food or fish ingredient datasets that report both [[metals/mercury-total|tHg]] and [[metals/mercury-methyl|MeHg]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Fish-containing baby foods have arsenic and mercury signals, but many sources group fish with mixed fish/meat foods or total diet stages.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Arsenic]] | Fish/fish-mix baby foods in global scoping review | median 0.165 mg/kg | 165 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad fish/fish-mix category. |
| [[metals/mercury-total|Mercury]] | Fish/fish-mix baby foods in global scoping review | median 0.016 mg/kg | 16 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Mercury species not guaranteed across included studies. |
| [[metals/mercury-total|Total mercury]] | Baby food stage 3 duplicate-diet stage | median 0.445 ng/g wet weight | 0.445 ppb wet weight | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan]] | Total diet stage, not isolated commercial fish baby food. |
| [[metals/methylmercury|Methylmercury]] | Baby food stage 3 duplicate-diet stage | median intake 22.5 ng/kg bw/day | not a concentration ppb value | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan]] | Intake estimate; fish is a likely driver. |
| [[metals/arsenic-total|Total arsenic]] | UK meat and fish based infant foods/dishes | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |
| [[metals/cadmium|Cadmium]] | UK meat and fish based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |
| [[metals/lead|Lead]] | UK meat and fish based infant foods/dishes | 4 to 5 ug/kg | 4 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish. |
| [[metals/aluminum|Aluminum]], [[metals/arsenic-total|total arsenic]], [[metals/mercury-total|total mercury]], [[metals/nickel|nickel]], [[metals/tin|tin]], [[metals/cadmium|cadmium]], and [[metals/lead|lead]] | Italian homogenized fish products | Al 390 ppb; tAs 60 ppb; tHg 6.8 ppb; Ni 80 ppb; Sn <75 ppb; Cd <5 ppb; Pb <100 ppb | same numeric ppb wet weight | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Small N=3 wet-weight category means/censored values; summary evidence only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French meat/fish-based ready-to-eat infant-meal category with N=45. The row is relevant to fish-containing baby foods, but it also includes meat meals and does not isolate fish products. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row uses an aggregate non-fish Category 1 reference relationship in the row architecture for [[metals/mercury-methyl|MeHg]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review found that fish/fish-mix baby foods had the highest median arsenic concentration among baby-food groups in the review at 0.165 mg/kg and the highest median mercury concentration at 0.016 mg/kg; Hg was detected in 100% of fish/fish-mix items in that review's baby-food grouping. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2024 analytical study of European baby foods reported wet-weight Table 5 summary rows for three homogenized fish products, including Al 390 ppb, total arsenic 60 ppb, total mercury 6.8 ppb, Ni 80 ppb, Sn <75 ppb, Cd <5 ppb, and Pb <100 ppb. The same study reported that a salmon homogenized food had the highest estimated daily intake for total arsenic in the study at 0.143 ug/kg body weight per day, but it did not speciate methylmercury. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2024 duplicate-diet study of Japanese children aged 0-5 measured both total mercury and methylmercury; among diet samples with total mercury at or above 1 ng/g, methylmercury had a median concentration of 1.70 ng/g and accounted for 90.0% of total mercury. [[sources/tatsuta2024-mehg-duplicate-diet-children-japan]]

Finished-product MeHg characterization remains incomplete because the promoted methylmercury source is diet-stage-based rather than limited to commercial fish-containing baby foods. <!-- UNCITED: Need fish-containing baby-food datasets, or clearly labeled fish ingredient datasets, that distinguish [[metals/mercury-methyl|MeHg]] from total mercury. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted scoping review supports fish/fish-mix products as a priority group for Hg and As, but it does not resolve fish species, formulation share, or mercury speciation. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted duplicate-diet study links higher methylmercury intake during later baby-food stages to fish-consumption patterns, but it does not isolate the commercial product share of each diet sample. [[sources/tatsuta2024-mehg-duplicate-diet-children-japan]]

Potential variance drivers for fish-containing baby foods should be documented only after sources distinguish fish species, serving form, formulation share, sourcing, processing, and analytical method. <!-- UNCITED: Need fish baby-food or fish ingredient sources that report MeHg or tHg concentrations and methods such as [[testing/icp-ms]] or mercury speciation. -->

One structural variance driver warrants flagging now: climate-driven methylmercury trajectory. [[sources/wu2025-climate-meghan-freshwater-fish-china|Wu et al. 2025]] (PNAS, n ≈ 13,000) projects that MeHg concentrations in freshwater wild fish will rise by approximately 60 percent by 2031 to 2060 under moderate and high emission pathways, driven primarily by enhanced solar-radiation-mediated methylation. The FDA-EPA fish consumption advice for pregnant women and children is calibrated against historical fish Hg data that does not reflect this trajectory. For fish-containing baby foods sourced from freshwater fish or freshwater-derived ingredients, the near-future MeHg baseline may be materially higher than the baseline against which current advisories and certification standards were set. See [[synthesis/climate-metals-tradeoffs]] and [[ingredients/freshwater-fish]] (climate-driven methylmercury trajectory section).

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fish-containing-baby-foods]], [[ingredients/fish]], and [[ingredients/seafood]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Levers to reduce contamination

Fish-containing baby foods present a distinct contamination profile: methylmercury (MeHg) is the primary concern and it is bioconcentrated through the marine food chain, not via soil or agricultural pathways. Lead and cadmium from fish are generally lower than for terrestrial products, but total mercury (tHg) and speciation (MeHg vs inorganic Hg) are the critical determinants.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Source fish from species with characteristically low MeHg burden. Low-trophic-level, short-lived species (salmon, sardines, tilapia, cod) carry substantially lower MeHg than high-trophic-level species (tuna, swordfish, shark). FDA and EPA guidance identifies specific species for infant and child feeding. | Species-level MeHg differences are 10–100× between high- and low-trophic species; species selection is the dominant lever. | — (FDA/EPA species guidance) |
| 2 | Agronomic | Not applicable to fish-based products; mercury bioconcentration is a marine ecosystem process, not an agricultural intervention target. | — | — |
| 3 | Processing | Fish processing method has limited effect on MeHg because MeHg is bound to protein in muscle tissue and is not water-soluble. Cooking may reduce some inorganic contaminants but does not substantially reduce MeHg. | _Quantified magnitude data not yet ingested for processing effects on MeHg in infant food formulations._ | — |
| 4 | Formulation | Limit the proportion of high-trophic fish in the formulation; blend with low-mercury fish or non-fish ingredients to reduce per-serving MeHg contribution. | _Linear dilution effect proportional to blend ratio; quantified magnitude data not yet ingested from cited sources._ | — |
| 5 | Testing and QC | Lot-level tHg and MeHg speciation testing on incoming fish ingredient. Total mercury alone is insufficient because MeHg/tHg ratios vary substantially by species and processing; iAs speciation is needed if rice-based ingredients are co-formulated. | MeHg speciation required to close the tHg-to-MeHg data gap documented in the cited literature. | — |
| 6 | Packaging and storage | Not a primary lever for retort-pouched or glass-jarred fish baby foods under normal conditions. | — | — |

Cross-links: [[ingredients/fish]] (the canonical ingredient page covering finfish broadly), [[ingredients/freshwater-fish]], [[ingredients/seafood]], [[ingredients/canned-tuna]], [[products/seafood]], [[products/canned-fish]], [[products/fresh-fish]] (the adult-category counterparts) for the same evidence base read at the adult-product level. [[metals/mercury-methyl]] for MeHg mechanisms and toxicology.

## How standards math uses this page

This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Source Evidence Inventory |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/meli2024-chemical-characterization-baby-food-italy|Chemical characterization of baby food consumed in Italy]]<span class="hmi-ref-meta">Meli MA, Desideri D, Sisti D, Fagiolino I, and Roselli C · PLOS ONE · 2024 · [doi.org/10.1371/journal.pone.0297158](https://doi.org/10.1371/journal.pone.0297158)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/tatsuta2024-mehg-duplicate-diet-children-japan|Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan]]<span class="hmi-ref-meta">Tatsuta N, Asato K, Iwai-Shimada M, Iwai K, Nakayama SF, Yamazaki S, et al. · Environmental Health and Preventive Medicine · 2024 · [doi.org/10.1265/ehpm.24-00048](https://doi.org/10.1265/ehpm.24-00048)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/wu2025-climate-meghan-freshwater-fish-china|Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers]]<span class="hmi-ref-meta">Wu M, Wu X, Saiz-Lopez A, Blanchfield PJ, Ren H, and Zhong H · Proceedings of the National Academy of Sciences · 2025 · [doi.org/10.1073/pnas.2421921122](https://doi.org/10.1073/pnas.2421921122)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
7. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
8. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
9. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
10. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
11. [[sources/fda2020-ias-infant-rice-cereal-guidance|Inorganic Arsenic in Rice Cereals for Infants: Action Level, Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Guidance</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods) reporting Pb, Cd, As, and Hg detection rates and medians; fish mixes had the highest reported Pb median (0.008 mg/kg) among all baby-food categories in the review |
| 3 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-element (Al, tAs, Cd, tHg, Ni, Pb, Sn) ICP-MS measurement in 25 European baby foods including fish homogenized products consumed in Italy; Sn and Hg detectable in 100% of samples including fish category |
| 4 | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | Duplicate-diet MeHg study in 276 Japanese child diet observations across infant stages; fish consumption from baby-food stage 3 onward drove median MeHg intake up to 36.9 ng/kg bw/day; primary MeHg occurrence source for fish-containing baby foods |
| 5 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | Multi-metal ICP-MS concentrations (tAs, tHg, Pb, Cd, Ni, Al, Cr, U) in 40 commercial fish baby purees from Spain (n=40); fish category had highest tAs medians (212–346 ng/g wet weight) and highest tHg values among puree types |
| 6 | [[sources/silva2022-total-mercury-baby-food\|Silva et al. 2022]]. *Determination of total mercury in Spanish samples of baby food, fast food, and daily meal*, Research Square (preprint, posted 2022-05-05) | 2022 | Preprint | ES tHg occurrence in Twenty-eight composite meal samples purchased in Valencia, Spain, classified into three intake categories: 13 commercial jarred baby foods... (n=28) |
| 7 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | ICP-MS and AAS measurement of tAs, Cd, tHg, and Pb in 397 Polish ready-to-eat baby foods; fish dinner subcategory had highest reported Cd (max 20.15 µg/kg) among product groups tested |
| 8 | [[sources/mielech2021-contamination-food-infants-toddlers\|Mielech et al. 2021]]. *Assessment of the Risk of Contamination of Food for Infants and Toddlers*, Nutrients | 2021 | Review | PL/NO/US Pb, Cd, tAs, iAs, tHg occurrence in Narrative literature review of 83 publications (2004–2021, mainly October 2020–March 2021 search window) on contaminants in foods for... |
| 9 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant and toddler TDS reporting category-level mean concentrations for Al, Sb, tAs, Cd, Cr, Ni, Sn, and V in meat/fish-based ready-to-eat meals; fish-category context for multi-metal occurrence in complementary feeding |
| 10 | [[sources/eaglessmith2016-freshwater-fish-mercury-western-us-canada\|Eagles-Smith et al. 2016]]. *Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada*, Science of The Total Environment (2016, in press 2015) | 2016 | Peer-reviewed | USGS broad synthesis of THg in 96,310 freshwater fish across Western US and Canada (1969–2014); 30% exceed EPA Fish Tissue Residue Criterion and 3.9% exceed FDA 1.0 µg/g action level, anchoring upstream Hg distribution for freshwater fish entering infant supply chains |
| 11 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK FSA survey reporting multi-metal category-level means in meat/fish-containing savoury infant foods; provides UK 2013–2014 multi-metal occurrence context including Al, tAs, iAs, Cd, Pb, Ni, and Sn for fish-based baby-food categories |
| 12 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 13 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 14 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 15 | [[sources/cot2003-infant-food-metals\|Committee on Toxicity of 2003]]. *COT statement on a survey of metals in infant food*, Committee on Toxicity statement | 2003 | Government report | GB Al, Sb, tAs, Cd, Cr, Cu, Pb, tHg, Ni, Se, Sn, Zn occurrence in Commercial UK baby foods and formulae, including infant formulae, manufactured baby foods, desserts, rusks, and infant drinks, surveyed... (n=189) |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda2020-ias-infant-rice-cereal-guidance|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [aa06ad499](https://github.com/paleofoundation/heavymetalindex/commit/aa06ad499) | 2026-08-09 | correction | 1 source added and 1 removed; narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 5 sources added; 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
