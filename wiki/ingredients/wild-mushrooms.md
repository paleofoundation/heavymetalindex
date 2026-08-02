---
title: Wild Mushrooms
type: ingredient
commodity: wild-mushrooms
aliases: [fungi, "wild-harvested mushrooms", porcini, chanterelle, morel, boletus, "foraged mushrooms", "mushroom powder", porcini-mushroom]
category: fungi
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [200, 1200]
    p95_ppb: 2600
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [400, 2000]
    p95_ppb: 4000
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [50, 200]
    p95_ppb: 400
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [100, 3000]
    p95_ppb: 5000
    confidence: low
    n_studies: 3
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
    typical_ppb: [280, 900]
    p95_ppb: 1500
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-substrate-cadmium, species-efficient-accumulator, wild-harvest-vs-cultivated, mycelium-surface-area]
lower_risk_variants: ["[[ingredients/cultivated-button-mushrooms]]", "[[ingredients/cultivated-portobello]]"]
higher_risk_variants: ["[[ingredients/wild-porcini]]", "[[ingredients/wild-chanterelle]]", "[[ingredients/boletus-species]]", "[[ingredients/dried-wild-mushroom]]", "[[ingredients/mushroom-extract-supplements]]"]
used_in_products: ["[[products/dried-mushroom]]", "[[products/mushroom-powder]]", "[[products/mushroom-supplements]]", "[[products/mushroom-sauces]]", "[[products/pates]]", "[[products/foraged-mushroom-products]]"]
audience: [regulator, educator, consumer, app]
sources: 27
wiki_doi: null
updated: 2026-05-16
---

# Wild Mushrooms

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=19 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 22 jurisdictions, top EU 39% | only 22 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | 1 drinking-water + 4 soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 5 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, iAs THIN, tHg THIN, tAs THIN | iAs: needs 1 more study(ies); tHg: THIN; tAs: THIN |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | OK | 13 claims checked, 13 supported; 1 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | Mitigation options section empty/missing |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, tAs; pairing 0 paired, 5 single, 0 unpaired | iAs: THIN, needs 1 more study(ies); tHg: THIN; tAs: THIN; basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.63, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


Wild mushrooms, as distinct from cultivated mushrooms, are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] within the "fungi" category as among the highest-cadmium food commodities; regular consumers show mean dietary cadmium exposure of 4.3 µg/kg b.w./week, above the EFSA tolerable weekly intake of 2.5.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 200–1200 | medium | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|1]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|2]], [[sources/orywal2021-heavy-metals-dried-mushrooms\|3]] |
| Cd | n=5 | 400–2000 | medium | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|1]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|2]], [[sources/orywal2021-heavy-metals-dried-mushrooms\|3]] |
| iAs | n=2 | 50–200 | low | [[sources/walenta2024-arsenic-speciation-mushrooms\|1]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|2]] |
| tAs | n=5 | 280–900 | low | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|1]], [[sources/walenta2024-arsenic-speciation-mushrooms\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| tHg | n=3 | 100–3000 | low | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|1]], [[sources/braeuer2022-mercury-selenium-mushrooms-la-icpms\|2]], [[sources/orywal2021-heavy-metals-dried-mushrooms\|3]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Mushrooms, and particularly wild-harvested species, are efficient cadmium accumulators because their mycelium networks contact very large surface areas of substrate (soil, decomposing wood, leaf litter) and take up trace metals at high bioaccumulation factors. Several wild mushroom species (Boletus edulis, Agaricus species, Macrolepiota species) are documented as especially efficient cadmium accumulators and can carry cadmium concentrations an order of magnitude above cultivated button-mushroom values. Geographic variation is substantial: wild mushrooms from forests on cadmium-rich or historically polluted soils carry substantially elevated cadmium relative to wild mushrooms from pristine areas.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for fungi of 0.209 mg/kg across European samples, placing fungi sixth-highest in the EFSA ranking of food commodity means by cadmium concentration; wild mushrooms specifically are expected to be at the upper end within the fungi category, with cultivated mushrooms substantially lower._

## Processing effects

_Pending. Drying concentrates cadmium along with the other solids as water is removed; dried mushroom powder and mushroom extract supplements can carry cadmium at several times the fresh-mushroom concentration on a weight basis. Cooking water discard can remove a modest fraction of cadmium in some species; this is variable and not a reliable mitigation strategy._

## Ingredient-derivative risk

Dried wild mushroom, mushroom powder, and mushroom extract supplements (the latter increasingly common in nutritional supplementation products targeting adaptogenic or immune effects) concentrate cadmium proportionally with the water-removal step. Per-gram cadmium in these derivatives can be 10-fold higher than in fresh mushroom because of approximately 90 percent water content in fresh mushroom. Products marketed for regular consumption (daily mushroom coffee, mushroom capsules) at typical dosing can contribute a meaningful fraction of daily cadmium intake for a regular user.

## Mitigation options

_Pending. Cultivated mushrooms grown on characterized substrates carry substantially less cadmium than wild-harvested mushrooms; substitution is the primary mitigation lever for consumer-facing products. For supplement manufacturers, sourcing from documented lower-cadmium production is the meaningful option; commercial cultivation on controlled substrate is the standard approach._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for fungi (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for fungi: wild fungi are 0.50 mg/kg (500 ug/kg) Cd and 0.80 mg/kg (800 ug/kg) Pb; cultivated fungi except oyster and shiitake are 0.050 mg/kg (50 ug/kg) Cd; oyster and shiitake mushrooms are 0.15 mg/kg (150 ug/kg) Cd; common/oyster/shiitake cultivated fungi have a Pb maximum level of 0.30 mg/kg (300 ug/kg).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|CFIA 2025]]. *Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2025 | Government report | tAs, Cd, Pb, and tHg in Canadian market dried mushrooms by ICP-MS (2022–23 CFIA targeted survey, n=470 total dataset); highest-risk commodity flagged for Cd in dried mushrooms |
| 2 | [[sources/leskova2024-transbaikal-wild-mushrooms-elements\|Leskova et al. 2024]]. *Content of some chemical elements in wild mushrooms of the Transbaikal Territory*, Innovations and Food Safety 3(45):75-83 | 2024 | Peer-reviewed | RU Cr, Mn, Fe, Co, Ni, Cu, Zn, Pb occurrence in Wild edible mushrooms collected near Smolenka village, Chita District, Transbaikal Territory, Russia. (n=Six wild edible mushroom species; at least five specimens per species) |
| 3 | [[sources/walenta2024-arsenic-speciation-mushrooms\|Walenta et al. 2024]]. *Arsenobetaine amide: a novel arsenic species detected in several mushroom species* | 2024 | Peer-reviewed | AT/CZ tAs, iAs occurrence in 11 fruiting-body collections of four edible/wild mushroom species (Ramaria sanguinea, Amanita muscaria, Boletus edulis, Macrolepiota procera) from Austria... (n=11) |
| 4 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 5 | [[sources/asensio2023-madrid-mushrooms-mercury\|Peinador 2023]]. *Study of Heavy Metals and Methyl-Mercury in Fungi in Markets of Madrid*, Spectroscopy | 2023 | Peer-reviewed | ES/EU Cd, Pb, tHg, MeHg occurrence in 48 cultivated and wild edible mushroom samples purchased in local markets in Madrid, Spain, with wild samples supplied... (n=48) |
| 6 | [[sources/keles2023-turkiye-wild-mushrooms-elements\|Keles et al. 2023]]. *Wild mushrooms from Eastern Black Sea Region (Turkiye): Element concentrations and their health risk assessment*, Anatolian Journal of Botany 7(1):50-59 | 2023 | Peer-reviewed | TR Ni, Cd, Pb, Mn, Fe, Zn, Cu occurrence in Twenty-four wild edible mushroom species collected from Bayburt, Gumushane, Rize, and Artvin in the Eastern Black Sea Region... (n=24) |
| 7 | [[sources/unguryanu2023-arkhangelsk-wild-mushrooms-berries-metals\|Unguryanu et al. 2023]]. *Assessment of the chemical and radiological safety of wild mushrooms and berries growing in the Arkhangelsk region*, Ekologiya cheloveka (Human Ecology) | 2023 | Peer-reviewed | RU tHg, tAs, Pb, Cd occurrence in 201 wild mushroom samples and 175 wild berry samples collected in the Arkhangelsk region and Nenets Autonomous Okrug,... (n=376) |
| 8 | [[sources/zhou2023-inosperma-mushroom-elements\|Zhou et al. 2023]]. *Phylogenetic analysis, morphological studies, element profiling, and muscarine detection reveal a new toxic Inosperma (Inocybaceae, Agaricales) species from tropical China*, Frontiers in Microbiology | 2023 | Peer-reviewed | CN tAs occurrence in Inosperma wuzhishanense sp. nov., a new mushroom species from Wuzhishan City, Hainan Province, tropical China; dried basidiomata analyzed... |
| 9 | [[sources/braeuer2022-mercury-selenium-mushrooms-la-icpms\|Braeuer et al. 2022]]. *Quantitative mapping of mercury and selenium in mushroom fruit bodies with laser ablation–inductively coupled plasma-mass spectrometry*, Analytical and Bioanalytical Chemistry | 2022 | Peer-reviewed | tHg occurrence in 6 mushroom individuals: 5 porcini (Boletus edulis, B. aereus, B. pinophilus) and 1 parasol (Macrolepiota procera); collected in... (n=6) |
| 10 | [[sources/falandysz2022-boletus-mercury-methylmercury\|Falandysz et al. 2022]]. *Total mercury and methylmercury (MeHg) in braised and crude Boletus edulis carpophores during various developmental stages*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | PL tHg, MeHg occurrence in Boletus edulis carpophores grouped by developmental stage (button, young-white, large-white, large-yellow), analyzed as crude mushrooms and after braising. (n=4) |
| 11 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 12 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 13 | [[sources/hanc2021-amanita-muscaria-hg-se\|Hanc et al. 2021]]. *Mercury and selenium in developing and mature fruiting bodies of Amanita muscaria*, Environmental Science and Pollution Research | 2021 | Peer-reviewed | PL tHg, Se occurrence in Amanita muscaria fruiting bodies collected in six developmental-stage pools from one Pomeranian forest site in Poland in September... (n=181) |
| 14 | [[sources/orywal2021-heavy-metals-dried-mushrooms\|Orywal et al. 2021]]. *Health risk assessment of exposure to toxic elements resulting from consumption of dried wild-grown mushrooms available for sale*, PLoS ONE | 2021 | Peer-reviewed | PL/EU tHg, Pb, Cd, tAs occurrence in 80 samples of dried wild-grown mushrooms (40 Boletus edulis, 40 Xerocomus badius) purchased from 5 European supermarket chains... (n=80) |
| 15 | [[sources/falandysz2020-yunnan-fungi-mercury\|Falandysz et al. 2020]]. *Mercury in traditionally foraged species of fungi (macromycetes) from the karst area across Yunnan province in China*, Applied Microbiology and Biotechnology | 2020 | Peer-reviewed | CN tHg occurrence in Composite samples from 42 traditionally foraged or medicinal fungal species collected at 23 sites across Yunnan province, China,... |
| 16 | [[sources/singh2020-zambia-wild-mushrooms-metals\|Singh et al. 2020]]. *Quantification of Heavy Metal Accumulation in Edible Wild-Mushrooms in Copperbelt and Western Provinces of Zambia*, Journal of Environmental Protection | 2020 | Peer-reviewed | ZM Cu, Cd, Pb, Zn, Ni, Co occurrence in Three edible wild mushroom species (Amanita zambiana, Termitomyces titaniscus, and Lactarius titaniscus) collected from Mpongwe District and Solwezi... (n=90) |
| 17 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 18 | [[sources/janco2019-boletus-reticulatus-mushroom-metals\|Janco et al. 2019]]. *The relationship between risk elements contamination of wild edible mushrooms (Boletus reticulatus Schaeff.) and underlying soil substrate*, Journal of Microbiology, Biotechnology and Food Sciences | 2019 | Peer-reviewed | SK Pb, Cd, tHg occurrence in Boletus reticulatus fruiting bodies (48 samples) and forest underlying soil substrates (48 samples) from eight eastern and central... (n=48) |
| 19 | [[sources/mititelu2019-romania-edible-mushrooms-metals\|Mititelu et al. 2019]]. *The influence of heavy metals contamination in soil on the composition of some wild edible mushrooms*, Farmacia | 2019 | Peer-reviewed | RO Pb, Cd, Cr, Ni, Cu, Fe, Zn occurrence in Boletus edulis and Hymenochaete rubiginosa collected near two Romanian urban areas with paired soil samples; concentrations reported on... (n=4) |
| 20 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 21 | [[sources/brzezicha-cirocka2016-edible-wild-mushrooms-poland\|Brzezicha-Cirocka et al. 2016]]. *Bio- and toxic elements in edible wild mushrooms from two regions of potentially different environmental conditions in eastern Poland*, Environmental Science and Pollution Research | 2016 | Peer-reviewed | PL/EU Cd, Ag, Cu, Zn, Fe, Mn occurrence in Pooled edible wild mushroom samples from Morag, north-eastern Poland, and the Tarnobrzeska Plain, south-eastern Poland; seven species with... (n=213) |
| 22 | [[sources/lalotra2016-jammu-wild-mushrooms-metals\|Lalotra et al. 2016]]. *Bioaccumulation of heavy metals in the sporocarps of some wild mushrooms*, Current Research in Environmental & Applied Mycology | 2016 | Peer-reviewed | IN Pb, Cd, Fe, Mn, Cu, Zn occurrence in Three wild macrofungi from forest areas in Jammu Province, India: Macrolepiota procera (edible), Amanita augusta (non-edible), and Boletus... (n=3) |
| 23 | [[sources/saba2016-suillus-luteus-mercury\|Saba et al. 2016]]. *Accumulation and distribution of mercury in fruiting bodies by fungus Suillus luteus foraged in Poland, Belarus and Sweden*, Environmental Science and Pollution Research | 2016 | Peer-reviewed | PL/BY/SE tHg occurrence in Suillus luteus fruiting bodies and underlying soil substratum from Central, Eastern, and Northern Europe, including Poland, Belarus, and... |
| 24 | [[sources/mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland\|Mirończuk-Chodakowska et al. 2013]]. *Cadmium and Lead in Wild Edible Mushrooms from the Eastern Region of Poland's 'Green Lungs'*, Polish Journal of Environmental Studies | 2013 | Peer-reviewed | PL/EU Pb, Cd occurrence in 21 mushroom species (18 wild, 3 cultivated), 3 specimens each; wild species sampled from 6 communal areas in... (n=63) |
| 25 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 26 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA dietary Cd exposure assessment identifying wild mushrooms as highest-Cd food in European diets (up to 2 mg/kg FW); foundational regulatory-scientific basis for mushroom Cd concern |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [f907793bb](https://github.com/paleofoundation/heavymetalindex/commit/f907793bb) | 2026-05-17 | minor | Narrative text revised |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
