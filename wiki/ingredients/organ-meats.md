---
title: Organ Meats (Kidney and Liver)
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
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [bioaccumulation-in-target-organ, animal-age, species, feed-cadmium]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/older-animal-organ-meat]]", "[[ingredients/horsemeat-offal]]"]
used_in_products: ["[[products/pate]]", "[[products/sausages]]", "[[products/organ-meat-pies]]", "[[products/liver-based-baby-food]]", "[[products/nutritional-supplements]]", "[[products/pet-food]]"]
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
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU Cd maximum levels are 0.50 mg/kg (500 ug/kg) for liver and 1.0 mg/kg (1000 ug/kg) for kidney of bovine animals, sheep, pig, poultry, and horse. EU Pb offal maximum levels are 0.20 mg/kg for bovine animals and sheep, 0.15 mg/kg for pig, and 0.10 mg/kg for poultry.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; organ meats (especially kidney) identified as a high-Cd category in national food-basket contributions |
| 2 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter; explains the mechanism of Cd accumulation in mammalian kidney and liver and its implications for organ-meat dietary exposure |
| 3 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA Cd dietary exposure evaluation; organ meats considered among the leading per-serving Cd sources in food-basket models |
| 4 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA Pb exposure assessment; organ meats included in the dietary Pb occurrence dataset as a contributing source for European populations |
| 5 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; kidney and liver reported as the highest-mean-Cd organ meats in the European occurrence dataset (kidney 0.201 mg/kg, liver 0.116 mg/kg) |
| 6 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international Cd and Pb maximum levels for edible offal matrices; organ-specific MLs are higher than muscle-meat MLs across Codex tables |
<!-- END: hmi-source-legend -->

