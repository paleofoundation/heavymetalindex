---
title: Wild Mushrooms
type: ingredient
commodity: wild-mushrooms
aliases: [fungi, wild-harvested mushrooms, porcini, chanterelle, morel, boletus, foraged mushrooms, mushroom powder]
category: fungi
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-substrate-cadmium, species-efficient-accumulator, wild-harvest-vs-cultivated, mycelium-surface-area]
lower_risk_variants: ["[[ingredients/cultivated-button-mushrooms]]", "[[ingredients/cultivated-portobello]]"]
higher_risk_variants: ["[[ingredients/wild-porcini]]", "[[ingredients/wild-chanterelle]]", "[[ingredients/boletus-species]]", "[[ingredients/dried-wild-mushroom]]", "[[ingredients/mushroom-extract-supplements]]"]
used_in_products: ["[[products/dried-mushroom]]", "[[products/mushroom-powder]]", "[[products/mushroom-supplements]]", "[[products/mushroom-sauces]]", "[[products/pates]]", "[[products/foraged-mushroom-products]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
---

# Wild Mushrooms

_Stub page. Contamination profile populates on the next ingest wave. Wild mushrooms, as distinct from cultivated mushrooms, are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] within the "fungi" category as among the highest-cadmium food commodities; regular consumers show mean dietary cadmium exposure of 4.3 µg/kg b.w./week, above the EFSA tolerable weekly intake of 2.5._

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

<!-- BEGIN: hmi-gemsfood-arsenic-context -->

## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food has enough fungi and mushroom arsenic rows to mark mushrooms as an arsenic-routing target. These rows are broad and should be split by cultivated mushrooms, wild fungi, species, and preparation before any consumer-facing risk ranking.

| Routed GEMS food row | Arsenic species | Region | N | P50 ug/kg | P95 ug/kg | Max ug/kg | Use note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| Mushrooms | tAs | EURO | 821 | 0 | 419 | 19,200 | Mushroom context. |
| Fungi, edible (not including mushrooms) | tAs | EURO | 707 | 9 | 327.6 | 108,700 | Wild/other fungi candidate. |
| Mushrooms | tAs | EURO | 489 | 15.8 | 1,316 | 12,700 | Mushroom context. |
| Fungi, edible (not including mushrooms) | iAs | EURO | 95 | 0 | 184.8 | 820 | Speciated fungi context. |
| Mushrooms | iAs | EURO | 71 | 23.55 | 616.1 | 3,300 | Speciated mushroom context. |

[[sources/who-gemsfood-heavy-metal-contaminants]]

<!-- END: hmi-gemsfood-arsenic-context -->

## Sources

- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
