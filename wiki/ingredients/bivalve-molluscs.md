---
title: Bivalve Molluscs (Excluding Oysters)
type: ingredient
commodity: bivalve-molluscs
aliases: [clams, mussels, scallops, cockles, razor-clams, oysters-separate-page, quahog, geoduck]
category: shellfish-mollusc
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
drivers: [filter-feeding, marine-water-cadmium, bioaccumulation, species, harvest-region]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/wild-harvested-near-estuaries]]", "[[ingredients/older-specimens]]"]
used_in_products: ["[[products/clam-chowder]]", "[[products/frozen-shellfish-mixes]]", "[[products/prepared-seafood]]", "[[products/shellfish-sauces]]", "[[products/seafood-supplements]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
---

# Bivalve Molluscs (excluding Oysters)

_Stub page. Contamination profile populates on the next ingest wave. Bivalve molluscs other than oysters are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as the food category with the highest mean cadmium concentration in the European occurrence dataset, and regular consumers of this commodity show mean dietary cadmium exposure at approximately twice the EFSA tolerable weekly intake. Oysters are held in a separate analytic category because their cadmium concentrations and biological behavior diverge sufficiently to warrant distinct treatment; that split will be reflected in the wiki when a dedicated oysters page is created._

## Why this commodity accumulates cadmium

Bivalve molluscs are filter-feeders that accumulate cadmium directly from seawater across their gill and mantle tissues, concentrating the metal at levels orders of magnitude above the dissolved seawater concentration. Species vary substantially in bioaccumulation factor; clams, mussels, scallops, and cockles (the species grouped in the EFSA "bivalve molluscs other than oysters" category) consistently show higher cadmium concentrations than oysters under the same environmental conditions. Older specimens, larger specimens, and specimens harvested from waters with elevated cadmium (estuaries near historical industrial discharge, rivers draining cadmium-mineralized watersheds) carry higher cadmium than younger specimens from cleaner waters.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for bivalve molluscs (excluding oysters) of 0.380 mg/kg, the highest mean in the entire EFSA food-commodity ranking. Crustaceans separately mean 0.093 mg/kg and cephalopods 0.285 mg/kg. Regular consumers of bivalve molluscs show mean dietary cadmium exposure of 4.6 µg/kg b.w./week, approximately twofold the EFSA mean adult exposure of 2.3 and approximately twofold the EFSA TWI of 2.5._

## Processing effects

_Pending. Cadmium is incorporated into the bivalve tissue and is not meaningfully removed by cooking, canning, or freezing. Removing the digestive gland (the "hepatopancreas" or "tomalley" in lobsters, the analogous tissue in bivalves) can reduce cadmium intake from some species because the metal preferentially accumulates there, but consumer-level preparation rarely separates these tissues in bivalve molluscs._

## Ingredient-derivative risk

Prepared shellfish dishes, shellfish-based sauces, clam chowders, and frozen shellfish mixes carry cadmium at the concentration of the source bivalves. Shellfish-based nutritional supplements and traditional preparations (such as fermented mussel or clam products in some Asian cuisines) can concentrate cadmium further through water loss during processing.

## Mitigation options

_Pending. Harvest-region selection, species selection within the broader bivalve category, and regulatory testing programs are the primary mitigation levers. The OEHHA Proposition 65 Cd MADL of 4.1 µg/day is relevant for retail bivalve products sold in California; regular consumers can approach or exceed this daily threshold from several servings per week._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for bivalve molluscs (pending ingest of CXS 193-1995); historically one of the higher matrix-specific values in CXS 193, reflecting the biological reality of filter-feeder bioaccumulation.
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for bivalve molluscs are 1.0 mg/kg (1000 ug/kg) Cd and 1.50 mg/kg (1500 ug/kg) Pb; the general EU mercury maximum level for crustaceans, molluscs, and non-listed fish is 0.50 mg/kg (500 ug/kg). For Pecten maximus, the Cd/Pb rows apply to adductor muscle and gonad only.
- [[regulations/oehha-cadmium-prop65]] — OEHHA Prop 65 MADL of 4.1 µg/day oral applies to consumer products sold in California; frequent bivalve mollusc consumption can trigger the Prop 65 warning threshold.

<!-- BEGIN: hmi-gemsfood-arsenic-context -->

## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food provides direct arsenic rows for mussels, clams, and oysters. This belongs on the bivalve node as occurrence context, with oysters called out as a future split because the current HMI page excludes oysters in its title but GEMS reports them beside other bivalves.

| Routed GEMS food row | Arsenic species | Region | N | P50 ug/kg | P95 ug/kg | Max ug/kg | Use note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| Mussels | iAs | EURO | 434 | 11 | 106.7 | 1,500 | Bivalve iAs context. |
| Mussels | iAs | EURO | 283 | 19 | 138.7 | 1,300 | Bivalve iAs context. |
| Mussels | tAs | EURO | 824 | 2,060 | 3,985 | 39,700 | Total arsenic; not iAs. |
| Clams | iAs | EURO | 83 | 40 | 180 | 420 | Bivalve iAs context. |
| Oysters | iAs | EURO | 94 | 4.95 | 65.45 | 266 | Future oysters page candidate. |

[[sources/who-gemsfood-heavy-metal-contaminants]]

<!-- END: hmi-gemsfood-arsenic-context -->

## Sources

- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
