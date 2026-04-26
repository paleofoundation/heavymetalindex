---
type: ingredient
commodity: organ-meats
aliases: [kidney, liver, offal, variety meats, pate, liverwurst, kidney pie, liver pate, calves-liver, beef-liver, pork-kidney, sweetbreads]
category: organ-meat
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
drivers: [bioaccumulation-in-target-organ, animal-age, species, feed-cadmium]
lower_risk_variants: []
higher_risk_variants: [older-animal-organ-meat, horsemeat-offal]
used_in_products: [pate, sausages, organ-meat-pies, liver-based-baby-food, nutritional-supplements, pet-food]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Organ Meats (Kidney and Liver)

_Stub page. Contamination profile populates on the next ingest wave. Organ meats, particularly kidney and liver, are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as among the highest-cadmium food commodities because these are the organs in food animals where cadmium preferentially accumulates, mirroring the accumulation pattern in humans._

## Why this commodity accumulates cadmium

Kidney and liver are the two tissues in mammals where cadmium preferentially accumulates, bound to metallothionein, over the animal's lifetime. This is the same accumulation pattern that drives human cadmium body burden. Food-animal organs therefore carry cadmium concentrations that reflect the animal's lifetime dietary cadmium exposure, with older animals, animals raised on cadmium-rich feed, and animals from cadmium-polluted regions producing higher-cadmium offal. Horsemeat offal is particularly notable because horses are typically slaughtered at older ages than other food animals, giving more years of cadmium accumulation; Equus kidney is one of the highest-cadmium items in the EFSA European occurrence dataset.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports mean cadmium concentrations of 0.201 mg/kg for kidney and 0.116 mg/kg for liver across European samples. Horsemeat (muscle, not offal) separately carries a mean of 0.172 mg/kg, reflecting the same age-accumulation pattern._

## Processing effects

_Pending. Cadmium is incorporated into the organ tissue and is not meaningfully affected by cooking, curing, or processing into pates and sausages. Processed organ-meat products inherit the cadmium of their source organs._

## Ingredient-derivative risk

Pates, liverwurst, and organ-meat-based prepared foods carry cadmium at the concentration of the source organ. Liver-containing baby foods and nutritional supplements built around liver (traditionally iron-rich and vitamin-A-rich, historically recommended for pregnant women and children) warrant particular attention because the populations targeted are the ones most affected by iron-deficiency-enhanced cadmium absorption and by developmental sensitivity to cadmium.

## Mitigation options

_Pending. Organ meats from younger animals, animals raised on documented lower-cadmium feed, and animals from non-hotspot regions carry lower cadmium than alternatives. Given the accumulation pattern, there is no processing intervention that removes cadmium from organ meat after slaughter._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for edible offal (pending ingest of CXS 193-1995); offal-specific MLs are historically higher than muscle-meat MLs reflecting the biological reality of accumulation.
- EU Regulation (EU) 2023/915 Cd MLs for edible offal by species (pending ingest). The EU Cd ML for kidney is historically among the higher matrix-specific values (0.5 to 1.0 mg/kg range depending on species and age-at-slaughter).

## Sources

- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
