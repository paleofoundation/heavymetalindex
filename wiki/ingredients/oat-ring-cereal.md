---
title: "Oat ring cereal"
type: ingredient
commodity: oat-ring-cereal
label: "Oat ring cereal"
aliases: ["Cereal, oat ring", "oat ring cereal"]
category: breakfast-cereal
tds_food:
  number: 77
  description: "Cereal, oat ring"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.9, 6]
    p95_ppb: 6.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [16.6, 23.8]
    p95_ppb: 24.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [24.8, 33.6]
    p95_ppb: 34.3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [2080, 3040]
    p95_ppb: 3120
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [10, 250]
    p95_ppb: 275
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [7.2, 8.8]
    p95_ppb: 9.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 2
---

# Oat ring cereal

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 1 jurisdictions, top US 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 9 claims checked, 9 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming oat-ring-cereal: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 77, "Cereal, oat ring." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Oat ring cereal (a ring-shaped extruded breakfast cereal made predominantly from whole oat flour) inherits the metal profile of the oat grain from which it is produced, with modifications introduced by extrusion processing and fortification. Oats are notable among cereal grains for their relatively high nickel (Ni) content: oat grain accumulates Ni from soil through root uptake, and Ni is retained in the grain during milling because it is distributed throughout the endosperm rather than concentrated exclusively in the bran. EFSA's 2020 scientific opinion on nickel in food identifies cereals including oats as one of the major dietary sources of Ni across European populations. Cadmium in oat grain follows the standard cereal-grain pathway: Cd is absorbed from soil via root uptake and partitions into the grain, with higher concentrations in the outer bran layer than in the inner endosperm. Whole-grain oat products therefore carry more Cd than products made from refined or low-extraction oat flour. Lead concentrations in oat grain are generally low because Pb transfer from soil to grain is inefficient, but surface deposition during field growth and dust contamination in grain handling can contribute. Inorganic arsenic is not a significant analyte of concern for oats under typical production conditions; oats are grown on aerobic (non-flooded) soils where iAs mobilization is far lower than in flooded rice paddies.

The FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for oat ring cereal (TDS Food 77, n=3) confirm detectable concentrations for Ni (median 2,400 ppb, max 3,200 ppb), Cd (median 19 ppb, max 25 ppb), and tAs (median 28 ppb, max 35 ppb), with Pb, tHg, and Cr all at low or below-detection levels in this sample set.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0.9–6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 16.6–23.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 24.8–33.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 2080–3040 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 10–250 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 7.2–8.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cereal, oat ring" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 16 | 25 | in profile |
| Cr | 3 | 0 | 300 | in profile |
| Ni | 3 | 2000 | 3200 | in profile |
| Pb | 3 | 0 | 6.4 | in profile |
| U | 3 | 7.1 | 9.2 | in profile |
| tAs | 3 | 24 | 35 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The Ni and Cd concentration range in oat ring cereal reflects the geographic and agronomic variation in oat grain composition. Oats grown in regions with higher soil Ni (certain Scandinavian, Irish, and Scottish growing regions) can produce grain with Ni concentrations at the upper end of the range reported in European dietary exposure assessments. Cd in oat grain varies with soil pH and soil Cd levels; low-pH soils mobilize more Cd for root uptake. The extrusion process used to produce the ring shape does not substantially change the grain's metal profile; the product's metal content therefore primarily tracks the oat grain input. The FDA TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] provide the current corpus's quantitative anchor for this product in the US retail market (n=3 composites), with Ni ranging from 2,000 to 3,200 ppb across the three samples. Additional geographic breakdown data will be incorporated as further source pages are ingested.

## Processing effects

Extrusion, the process used to shape oat ring cereal, involves high temperature and pressure followed by expansion through a die. Extrusion does not volatilize or remove metals; concentrations in the extruded product track those of the oat flour input on a dry weight basis. The puffing-and-expansion step dilutes concentrations slightly on a volumetric basis but not on a mass basis. Fortification with mineral premixes (iron, zinc, calcium, and vitamins) is standard in commercial oat ring cereals and does not add Pb, Cd, or Ni at levels of concern when food-grade mineral sources are used, though fortification-grade ferrous sulfate and zinc oxide can carry trace amounts of co-contaminants if not specified to pharmaceutical-grade purity. Cooking the cereal in milk or water before consumption does not significantly leach metals from the extruded product in a typical 1 to 5 minute soak.

## Ingredient-derivative risk

Oat flour, the primary ingredient in oat ring cereal, is itself a derivative of whole oats that may show different metal profiles depending on the degree of bran retention: high-bran oat flour carries more Cd than low-bran oat flour. Oat milk produced by aqueous extraction of oat flour or rolled oats carries a different Ni and Cd profile than the intact grain, as the extraction process solubilizes a portion of the water-soluble metal fraction. Oat bran, separated during milling, concentrates Cd relative to the whole grain and warrants separate characterization. These derivative pages (oat-flour, oat-bran, oat-milk) are not yet populated in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing oat grain or oat flour from regions with documented low soil Ni and low soil Cd provides the most material reduction for the primary analytes of concern. Supplier disclosure of grain-level Ni and Cd occurrence data enables lot-level assessment rather than reliance on regional averages.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Selecting oat flour with a reduced bran fraction (lower extraction rate) reduces Cd concentration in the finished product, since Cd concentrates in the outer bran layer. This is a formulation trade-off between nutritional positioning (whole-grain versus refined) and metal content.

### Formulation levers

Blending oat flour with lower-Ni cereal flours (rice flour, tapioca starch) reduces the Ni contribution per serving, though this alters the ingredient composition and the product's whole-grain claims.

### Testing and QC levers

Lot-level ICP-MS testing of incoming oat flour for Ni and Cd is the most reliable quality-control lever given the relatively high and variable Ni concentrations documented in this category. For products marketed to populations with nickel sensitivity (a clinically recognized condition), testing and labeling guidance is particularly relevant.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg Cd for processed cereal-based foods (including ready-to-eat breakfast cereals) and 0.20 mg/kg Pb. The EU cadmium limit for cereal-based products including oat-based breakfast cereals is established under [[regulations/eu-2023-915-cadmium]]. No specific EU maximum level for Ni applies to oat ring cereal or oat-based foods generally; Ni exposure is managed through dietary assessment rather than per-food limits in European regulatory practice. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) provides Pb reference levels for cereal products. See [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, oat ring (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
