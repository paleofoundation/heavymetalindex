---
title: Sunflower Seeds
dek: "Edible oilseeds covered through evidence on cadmium accumulation, measured occurrence and derivative products. The page distinguishes whole seeds from oil and protein rich residues."
rail_highlights:
  - label: Exposure
    text: Cadmium detected in sampled roasted sunflower seeds
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: FDA seed observations describe shelled salted roasted seeds
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: sunflower-seeds
aliases: ["sunflower kernels", "sunflower meats", "sunflower butter", "sunflower oil-press residue", "sunflower seed protein", flaxseeds, flaxseed, linseeds]
category: oilseed
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 800
    confidence: medium
    n_studies: 6
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
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [500, 3000]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, species-efficient-accumulator, phytoremediation-candidate-status]
lower_risk_variants: ["[[ingredients/sunflower-oil]]"]
higher_risk_variants: ["[[ingredients/sunflower-meal]]", "[[ingredients/sunflower-protein]]", "[[ingredients/whole-seed]]", "[[ingredients/seed-butter]]"]
used_in_products: ["[[products/snack-mixes]]", "[[products/granola-bars]]", "[[products/seed-butters]]", "[[products/baked-goods]]", "[[products/sunflower-oil]]", "[[products/protein-powder]]", "[[products/vegan-alternative-products]]"]
audience: [regulator, educator, consumer, app]
sources: 17
wiki_doi: null
updated: 2026-10-14
hero_image: /static/heroes/edible-oils-olives-sunflower-seeds.webp
hero_image_alt: "Unmarked bottles and dishes of golden and amber oils, whole olives and sunflower seeds illustrating sunflower seeds ingredient context."
---

# Sunflower Seeds

## Direct answer

For the question of cadmium in sunflower seeds, this corpus does not rank brands: FDA Total Diet Study food 343 (shelled, salted, roasted sunflower seeds) detected cadmium in 3 of 3 composites at 300 to 400 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020]], no DOI). Commission Regulation (EU) 2023/915 sets the cadmium maximum for linseeds and sunflower seeds at 0.50 mg/kg (500 µg/kg) ([[regulations/eu-2023-915-cadmium]], no DOI). Fechner et al. 2022 reported sunflower seeds, prepared as consumed, at 0.265 mg/kg (265 µg/kg), the maximum in the BfR MEAL legumes, nuts, oilseeds, and spices group ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]], DOI 10.1016/j.fochx.2022.100326).

## Overview

Sunflower seeds are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] within the "oilseeds" category, which ranks among the highest-cadmium food categories in the EFSA European occurrence dataset. Sunflower is itself a well-documented efficient cadmium accumulator, to the point of being studied as a phytoremediation candidate for cadmium-contaminated soils.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–100 | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]] |
| Cd | n=6 | 100–500 | medium | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]], [[sources/fu2022-sunflower-cd-cultivar-transcriptomics\|3]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=2 | 1–30 | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]] |
| Ni | n=3 | 500–3000 | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]], [[sources/bfr2022-nickel-dietary-intake-germany-meal\|3]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Sunflower (Helianthus annuus) is one of several crop species with documented efficient cadmium uptake from soil, sufficiently so that the species has been investigated as a phytoremediation tool for cadmium-contaminated agricultural and industrial soils. The cadmium taken up by the plant partitions preferentially to the seeds, concentrating in the protein-rich seed tissue rather than staying in stems, leaves, or roots. Regional variation in finished-seed cadmium reflects the soil cadmium at the growing site, and cadmium levels in sunflower seeds from cadmium-rich soils can be materially higher than in seeds from lower-cadmium regions.

## Ranges by source, region, and variety

EFSA 2009 Table 1 reports a mean cadmium concentration for oil seeds of 0.227 mg/kg, placing the oilseed category fifth-highest in the EFSA ranking of food commodity means by cadmium concentration. Sunflower-specific values within the oilseed category are expected to be at the upper end given the species' accumulator profile; confirmation requires dedicated commodity-level ingests._

## Processing effects

_Pending. Cadmium in sunflower seeds partitions primarily to the protein fraction rather than to the oil fraction during cold-pressing, so sunflower oil typically carries less cadmium than whole seeds by a substantial factor; the press cake (oilseed meal) concentrates the cadmium remaining after oil extraction and is used in animal feed and in some plant-protein products._

## Ingredient-derivative risk

Sunflower oil is a relatively low-cadmium derivative because cadmium partitions to the protein-rich press cake during oil extraction. Sunflower meal, sunflower protein concentrate, and sunflower butter (which retains the whole seed) carry cadmium at or above the whole-seed concentration. Plant-based protein products using sunflower protein as a primary ingredient deserve per-product characterization; the concentrating effect of protein isolation can produce derivative products with notably elevated cadmium.

## Mitigation options

_Pending. Cultivar selection, soil management, and choice of growing region are the primary mitigation levers on the production side. For downstream processors, sourcing from documented lower-cadmium growing regions and choosing oil over meal in formulation are the primary options._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for oilseeds (CXS 193-1995, which is not yet in the library).
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum level for linseeds and sunflower seeds is 0.50 mg/kg (500 ug/kg); oilseeds generally are 0.10 mg/kg (100 ug/kg), with separate rows for rape seed, peanuts/soybeans, mustard seed, and poppy seed.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 343: Seeds, sunflower, shelled, salted, roasted | tAs | 3 | 1 | 6.5 | 4 |
| 343: Seeds, sunflower, shelled, salted, roasted | Cd | 3 | 3 | 300–400 | 2 |
| 343: Seeds, sunflower, shelled, salted, roasted | Cr | 3 | 0 | ND in all composites | 130 |
| 343: Seeds, sunflower, shelled, salted, roasted | Pb | 3 | 0 | ND in all composites | 5 |
| 343: Seeds, sunflower, shelled, salted, roasted | tHg | 3 | 1 | 1.3 | 1 |
| 343: Seeds, sunflower, shelled, salted, roasted | Ni | 3 | 3 | 4200–6200 | 60 |
| 343: Seeds, sunflower, shelled, salted, roasted | U | 3 | 0 | ND in all composites | 2 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shar2026-sunflower-seeds-heavy-metals\|Shar et al. 2026]]. *Environmental Assessment of Heavy Metal Uptake and Accumulation in Sunflower Seeds*, Planta Animalia 5(2):191-197 | 2026 | Peer-reviewed | PK Pb, Cd, Cr, Cu, Zn occurrence in 36 composite sunflower seed samples from different ecological zones of Sindh, Pakistan (n=36) |
| 2 | [[sources/muntean2024-aquaculture-protein-flours-elements\|Muntean et al. 2024]]. *Evaluation of Alternative Sources of Proteins and Other Nutrients with Potential Applications in Fish Nutrition*, Molecules | 2024 | Peer-reviewed | RO Al, Ni, tAs, Cd, Pb occurrence in Alternative protein flours for potential fish-nutrition use, including gastropod flours, hepatopancreas flour, sunflower, hemp, flax, pumpkin, coffee grounds,... (n=55) |
| 3 | [[sources/tkachuk2024-sunflower-seeds-metals\|Tkachuk et al. 2024]]. *Ecological safety of sunflower seeds in the conditions of agricultural intensification*, Scientific Horizons | 2024 | Peer-reviewed | UA Pb, Cd, Cu, Zn, tHg occurrence in sunflower seeds and soil under intensive agricultural technology (n=one production batch) |
| 4 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 5 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Cross-study review of tAs, Pb, Cd, tHg, Ni, and Cr in oilseeds including sunflower with regulatory-gap framing |
| 6 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL Study Ni concentrations for the legumes-nuts-oilseeds-spices food group encompassing sunflower seeds |
| 7 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 8 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 9 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | BfR MEAL Study tHg, Cd, Pb, and Ni concentrations in sunflower seeds within the German total-diet panel |
| 10 | [[sources/fu2022-sunflower-cd-cultivar-transcriptomics\|Fu et al. 2022]]. *Physiological and Transcriptomic Comparison of Two Sunflower (Helianthus annuus L.) Cultivars With High/Low Cadmium Accumulation*, Frontiers in Plant Science | 2022 | Peer-reviewed | Hydroponic Cd stress comparison of two sunflower cultivars; documents cultivar-level variation in root-to-shoot Cd translocation and the NRAMP gene-family driver |
| 11 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 12 | [[sources/gul2021-sunflower-seeds-metals\|Gül et al. 2021]]. *Determination of Some Heavy Metals in Oil Sunflower Seeds Grown in the North of Turkey*, European Journal of Science and Technology (EJOSAT) (23):725-729 | 2021 | Peer-reviewed | TR Al, Cd, Pb, Ni, Cr, Cu, Zn occurrence in 18 sunflower seed samples from six Middle Black Sea Region sunflower-growing areas (n=18) |
| 13 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA-authored Cd mitigation review identifying sunflower seeds among oilseed Cd-accumulators and naming agronomic levers for plant-uptake reduction |
| 14 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying sunflower seeds as elevated-Cd oilseeds due to root-soil uptake; Cd partitioning to protein fraction during oil extraction |
| 15 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; sunflower seeds (alongside peanuts) identified as a high-Cd oilseed in the European occurrence dataset |
<!-- END: hmi-source-legend -->

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
