---
title: "Quinoa"
type: ingredient
commodity: quinoa
label: "Quinoa"
aliases: [Chenopodium quinoa, Andean grain, pseudocereal]
category: pseudocereal
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [40, 1070]
    p95_ppb: 1540
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 300]
    p95_ppb: 750
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [60, 60]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [andean-soil-geochemistry, mining-impacted-watersheds, irrigation-water, cultivar, altitude]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 12
---

# Quinoa

## Overview

Quinoa is a pseudocereal indigenous to the Andean highlands of Peru, Bolivia, and Ecuador. It is botanically distinct from true cereals (Poaceae) but functions as a grain in human diets and is regulated alongside cereals in most jurisdictions. The heavy-metal contamination signal for quinoa is dominated by **cadmium**, which it accumulates from Andean soils whose geochemistry is shaped by the same mining-belt minerology that drives Cd in regional cacao (see [[ingredients/cocoa]] for the parallel pattern). Lead and arsenic are secondary concerns, primarily in samples sourced from mining-impacted watersheds (Moquegua, Huancavelica, certain altiplano basins).

The growing global popularity of quinoa as a gluten-free pseudocereal in infant and child foods, energy bars, and breakfast products makes its contamination profile increasingly relevant to certification: a product that substitutes quinoa for rice to lower iAs may simultaneously elevate Cd if the quinoa is sourced from a Cd-rich region. The Peru/Bolivia regional variance is large enough that origin-specific sourcing matters for HMTc literature evidence threshold setting.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 40–1070 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/gul2024-quinoa-cadmium-lead-stress\|2]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|3]] |
| Cd | n=5 | 20–300 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/gul2024-quinoa-cadmium-lead-stress\|2]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 60 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|2]], [[sources/rosales-huamani2023-quinoa-peru-ptes\|3]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

Direct evidence for quinoa lands here. Andean-wide multi-crop surveys also touch [[ingredients/cocoa]] and the cereals umbrella. Product-level routing will flow through breakfast cereal and infant cereal pages once Phase 2 ingest connects quinoa-bearing products to this commodity.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd will be the first synthesis target given six contributing source pages already in scope; geographic variance (Peru vs Bolivia vs Ecuador, valley vs altiplano, mining-proximate vs non-proximate) is the principal organizing axis for that synthesis.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 522: Quinoa, cooked | tAs | 3 | 1 | 10 | 3 |
| 522: Quinoa, cooked | Cd | 3 | 3 | 2.5–19 | 1 |
| 522: Quinoa, cooked | Cr | 3 | 1 | 300 | 50 |
| 522: Quinoa, cooked | Pb | 3 | 1 | 11 | 4 |
| 522: Quinoa, cooked | tHg | 3 | 0 | ND in all composites | 1 |
| 522: Quinoa, cooked | Ni | 3 | 2 | 140–160 | 40 |
| 522: Quinoa, cooked | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|Ccopi et al. 2026]]. *Bioaccumulation of heavy metals in high Andean crops of the Peruvian Andes: comparative evaluation between irrigated and dry systems*, Journal of Agriculture and Food Research | 2026 | Peer-reviewed | Measured Cd, Pb, tAs, Cr, and Ni in quinoa grain and soil from Mantaro Valley, Peru (n=218); irrigated vs rainfed comparison with bioaccumulation factor data |
| 2 | [[sources/hbbf2025-rice-arsenic-cadmium-145-samples\|Houlihan et al. 2025]]. *What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try*, Healthy Babies Bright Futures (HBBF) report | 2025 | Government report | US tAs, iAs, Cd, Pb, tHg occurrence in 211 retail grain containers (145 rice samples across 105 brands and 66 alternative-grain samples) purchased in 20 US... (n=211) |
| 3 | [[sources/gul2024-quinoa-cadmium-lead-stress\|Gül et al. 2024]]. *Effects of cadmium and lead stress on quinoa (Chenopodium quinoa Willd.) plant growth and antioxidant enzyme activities*, Turkish Journal of Nature and Science | 2024 | Peer-reviewed | Greenhouse pot study on Cd and Pb phytotoxicity and tissue accumulation in quinoa under spiked-soil conditions; phytotoxicity framing rather than ambient occurrence |
| 4 | [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|Bedoya-Perales et al. 2023]]. *Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru*, Scientific Data | 2023 | Peer-reviewed | Open-access occurrence dataset for tAs, Cd, Pb, Cu, and Zn in food crops and soils from Moquegua mining region, Peru (341 sites); includes quinoa samples |
| 5 | [[sources/rosales-huamani2023-quinoa-peru-ptes\|Rosales-Huamani et al. 2023]]. *Determination of Potentially Toxic Elements in Quinoa Crops Located in the Huacaybamba-Huanuco-Peru Area*, International Journal of Membrane Science and Technology | 2023 | Peer-reviewed | Measured tAs, Pb, Cd, Cu, and Zn in 50 agricultural soil samples from a quinoa-producing area in Huancaybamba, Peru; 100% of Cd samples exceeded Peruvian soil quality standards |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 7 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 8 | [[sources/roman-ochoa2021-arequipa-grains-health-risk\|Román-Ochoa et al. 2021]]. *Heavy metal contamination and health risk assessment in grains and grain-based processed food in Arequipa region of Peru*, Chemosphere | 2021 | Peer-reviewed | Measured tAs, Cd, Sn, Pb, and tHg in quinoa and rice grains plus processed grain products from Arequipa, Peru (n=53); Pb dramatically elevated in processed vs raw grain |
| 9 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 10 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | US-FDA iAs, tAs concentrations (n=415) |
| 11 | [[sources/cr-fsasc2014-arsenic-rice-grains\|CR 2014]]. *Analysis of Arsenic in Rice and Other Grains*, Consumer Reports Food Safety and Sustainability Center | 2014 | Industry | 697-sample iAs/tAs dataset covering rice types and alternative grains; quinoa showed significantly lower inorganic arsenic than rice of any type tested |
| 12 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | international Cd, Pb, Hg, MeHg, iAs, tAs, Sn concentrations |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Quinoa (Chenopodium quinoa) is a pseudocereal cultivated dominantly in the Andean highlands of Peru, Bolivia, Ecuador, and Chile. Quinoa accumulates moderate heavy-metal load primarily via soil-uptake and irrigation-water inheritance from the Andean region, which has documented mining-impacted watershed geochemistry. The Andean soils contain naturally elevated As (from arsenopyrite mineral deposits) and locally elevated Cd from volcanic-soil and mining-residue influence; quinoa grown in these soils accumulates trace tAs at 60 ppb medium confidence per the contributing source corpus. Quinoa is celebrated as a gluten-free grain alternative and a complete protein source for vegetarian and infant feeding applications; this market positioning has driven demand growth that intersects with the Andean source-region contamination concerns.

The HMTc panel concerns for quinoa are tAs (with iAs/DMA speciation variable depending on Andean cultivation region), Pb and Cd at moderate levels from soil-uptake, and trace Ni. Quinoa routes into baby cereal formulations (as a non-rice grain substitute for rice cereal — see [[ingredients/non-rice-grains|non-rice-grains]] and [[ingredients/rice-cereal|rice cereal]]), gluten-free baking, salads, and adult breakfast cereals.

## Ranges by source, region, and variety

Variance within quinoa tracks Andean origin region (Peruvian quinoa from Junín, Puno, Cusco; Bolivian quinoa from the southern Altiplano; Ecuadorian quinoa from Chimborazo and Cotopaxi — each carrying different soil-geochemistry profiles), altitude (high-altitude Altiplano quinoa is the traditional product; lower-altitude expanded production carries different baselines), cultivar (Royal, Real, multicolored, and dozens of regional cultivars with varying As-accumulation tendencies), and irrigation-water source (snow-melt vs irrigation-canal vs groundwater — each with different As-baseline). Non-Andean expanded production in North America, Europe, and Asia carries different baselines reflecting local soil profiles.

## Processing effects

Quinoa processing involves washing (essential to remove the bitter saponins from the seed coat; this also reduces surface-deposited metals), drying, and packaging. The saponin-removal washing step modestly reduces surface-Pb and surface-deposited contaminants but does not affect grain-internal As, Cd, or Ni. Quinoa flour production involves milling washed quinoa; quinoa flour carries the source-grain metal profile concentrated slightly via moisture removal. Toasted/popped quinoa products concentrate per-mass metals via additional moisture removal.

## Ingredient-derivative risk

Quinoa derivatives include whole quinoa seeds (white, red, black, multicolored), quinoa flour (gluten-free baking application), quinoa flakes (breakfast cereal), puffed/popped quinoa (snack-food and cereal applications), and quinoa milk (a plant-milk alternative, partitioning quinoa metals into liquid fraction). Quinoa is increasingly incorporated into infant cereals as a non-rice gluten-free alternative; this application warrants particular As attention because quinoa carries source-region As at levels that are not negligible even though they're lower than rice iAs.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant for quinoa given the Andean-source-region contamination concerns. Origin specification favoring documented low-As Andean production zones; supplier-soil verification programs; and contractual As/Cd ceiling on incoming quinoa.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the quinoa-cultivation stage. Irrigation-water specification (avoiding mining-impacted watersheds); soil amendments where economically feasible; cultivar selection (low-As-accumulating cultivars are under agronomic research).

**Processing levers** ([[mitigation/processing]]) include thorough washing to maximize surface-Pb removal; processing-equipment material specification.

**Formulation levers** ([[mitigation/formulation]]) include multi-grain product reformulation (quinoa-oat blends, quinoa-corn blends) to dilute per-product As load.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, tAs/iAs testing on incoming quinoa supply. HPLC-ICP-MS speciation distinguishes iAs from DMA in quinoa-source As.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; standard storage-condition specifications apply.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in cereal grains; quinoa as a pseudocereal falls under broader cereal-grain provisions.
- FDA does not currently set quantitative action levels specific to quinoa; FDA Closer to Zero baby-food framework applies to quinoa-containing infant products.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets cereal-grain category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb and As MADLs apply to quinoa products sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
