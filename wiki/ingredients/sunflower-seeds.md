---
title: Sunflower Seeds
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
    confidence: high
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
sources: 9
wiki_doi: null
updated: 2026-05-16
---

# Sunflower Seeds

Sunflower seeds are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] within the "oilseeds" category, which ranks among the highest-cadmium food categories in the EFSA European occurrence dataset. Sunflower is itself a well-documented efficient cadmium accumulator, to the point of being studied as a phytoremediation candidate for cadmium-contaminated soils.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–100 | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]] |
| Cd | n=6 | 100–500 | high | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]], [[sources/fu2022-sunflower-cd-cultivar-transcriptomics\|3]] |
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

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for oil seeds of 0.227 mg/kg, placing the oilseed category fifth-highest in the EFSA ranking of food commodity means by cadmium concentration. Sunflower-specific values within the oilseed category are expected to be at the upper end given the species' accumulator profile; confirmation requires dedicated commodity-level ingests._

## Processing effects

_Pending. Cadmium in sunflower seeds partitions primarily to the protein fraction rather than to the oil fraction during cold-pressing, so sunflower oil typically carries less cadmium than whole seeds by a substantial factor; the press cake (oilseed meal) concentrates the cadmium remaining after oil extraction and is used in animal feed and in some plant-protein products._

## Ingredient-derivative risk

Sunflower oil is a relatively low-cadmium derivative because cadmium partitions to the protein-rich press cake during oil extraction. Sunflower meal, sunflower protein concentrate, and sunflower butter (which retains the whole seed) carry cadmium at or above the whole-seed concentration. Plant-based protein products using sunflower protein as a primary ingredient deserve per-product characterization; the concentrating effect of protein isolation can produce derivative products with notably elevated cadmium.

## Mitigation options

_Pending. Cultivar selection, soil management, and choice of growing region are the primary mitigation levers on the production side. For downstream processors, sourcing from documented lower-cadmium growing regions and choosing oil over meal in formulation are the primary options._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for oilseeds (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum level for linseeds and sunflower seeds is 0.50 mg/kg (500 ug/kg); oilseeds generally are 0.10 mg/kg (100 ug/kg), with separate rows for rape seed, peanuts/soybeans, mustard seed, and poppy seed.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Cross-study review of tAs, Pb, Cd, tHg, Ni, and Cr in oilseeds including sunflower with regulatory-gap framing |
| 2 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL Study Ni concentrations for the legumes-nuts-oilseeds-spices food group encompassing sunflower seeds |
| 3 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 4 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | BfR MEAL Study tHg, Cd, Pb, and Ni concentrations in sunflower seeds within the German total-diet panel |
| 5 | [[sources/fu2022-sunflower-cd-cultivar-transcriptomics\|Fu et al. 2022]]. *Physiological and Transcriptomic Comparison of Two Sunflower (Helianthus annuus L.) Cultivars With High/Low Cadmium Accumulation*, Frontiers in Plant Science | 2022 | Peer-reviewed | Hydroponic Cd stress comparison of two sunflower cultivars; documents cultivar-level variation in root-to-shoot Cd translocation and the NRAMP gene-family driver |
| 6 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA-authored Cd mitigation review identifying sunflower seeds among oilseed Cd-accumulators and naming agronomic levers for plant-uptake reduction |
| 7 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying sunflower seeds as elevated-Cd oilseeds due to root-soil uptake; Cd partitioning to protein fraction during oil extraction |
| 8 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; sunflower seeds (alongside peanuts) identified as a high-Cd oilseed in the European occurrence dataset |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [1ac7363](https://github.com/paleofoundation/heavymetalindex/commit/1ac7363) | 2026-05-20 | autonomy: daemon tick 2026-05-19T22-04-26Z — gap-healing + extraction + pooling + briefings |
<!-- END: hmi-page-history -->
