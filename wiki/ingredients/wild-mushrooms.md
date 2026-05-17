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
sources: 10
updated: 2026-05-16
---

# Wild Mushrooms

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|CFIA 2025]]. *Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2025 | Government report | tAs, Cd, Pb, and tHg in Canadian market dried mushrooms by ICP-MS (2022–23 CFIA targeted survey, n=470 total dataset); highest-risk commodity flagged for Cd in dried mushrooms |
| 2 | [[sources/walenta2024-arsenic-speciation-mushrooms\|Walenta et al. 2024]]. *Arsenobetaine amide: a novel arsenic species detected in several mushroom species* | 2024 | Peer-reviewed | AT/CZ tAs, iAs occurrence in 11 fruiting-body collections of four edible/wild mushroom species (Ramaria sanguinea, Amanita muscaria, Boletus edulis, Macrolepiota procera) from Austria... (n=11) |
| 3 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 4 | [[sources/zhou2023-inosperma-mushroom-elements\|Zhou et al. 2023]]. *Phylogenetic analysis, morphological studies, element profiling, and muscarine detection reveal a new toxic Inosperma (Inocybaceae, Agaricales) species from tropical China*, Frontiers in Microbiology | 2023 | Peer-reviewed | CN tAs occurrence in Inosperma wuzhishanense sp. nov., a new mushroom species from Wuzhishan City, Hainan Province, tropical China; dried basidiomata analyzed... |
| 5 | [[sources/braeuer2022-mercury-selenium-mushrooms-la-icpms\|Braeuer et al. 2022]]. *Quantitative mapping of mercury and selenium in mushroom fruit bodies with laser ablation–inductively coupled plasma-mass spectrometry*, Analytical and Bioanalytical Chemistry | 2022 | Peer-reviewed | tHg occurrence in 6 mushroom individuals: 5 porcini (Boletus edulis, B. aereus, B. pinophilus) and 1 parasol (Macrolepiota procera); collected in... (n=6) |
| 6 | [[sources/orywal2021-heavy-metals-dried-mushrooms\|Orywal et al. 2021]]. *Health risk assessment of exposure to toxic elements resulting from consumption of dried wild-grown mushrooms available for sale*, PLoS ONE | 2021 | Peer-reviewed | PL/EU tHg, Pb, Cd, tAs occurrence in 80 samples of dried wild-grown mushrooms (40 Boletus edulis, 40 Xerocomus badius) purchased from 5 European supermarket chains... (n=80) |
| 7 | [[sources/mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland\|Mirończuk-Chodakowska et al. 2013]]. *Cadmium and Lead in Wild Edible Mushrooms from the Eastern Region of Poland's 'Green Lungs'*, Polish Journal of Environmental Studies | 2013 | Peer-reviewed | PL/EU Pb, Cd occurrence in 21 mushroom species (18 wild, 3 cultivated), 3 specimens each; wild species sampled from 6 communal areas in... (n=63) |
| 8 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA dietary Cd exposure assessment identifying wild mushrooms as highest-Cd food in European diets (up to 2 mg/kg FW); foundational regulatory-scientific basis for mushroom Cd concern |
<!-- END: hmi-source-legend -->

