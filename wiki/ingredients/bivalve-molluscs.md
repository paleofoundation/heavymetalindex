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
drivers: [filter-feeding, marine-water-cadmium, bioaccumulation, species, harvest-region]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/wild-harvested-near-estuaries]]", "[[ingredients/older-specimens]]"]
used_in_products: ["[[products/clam-chowder]]", "[[products/frozen-shellfish-mixes]]", "[[products/prepared-seafood]]", "[[products/shellfish-sauces]]", "[[products/seafood-supplements]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/bao2024-sp-icp-ms-nps-mussels\|Bao 2024]]. *Single-particle ICP-MS characterisation of metal nanoparticles in mussels*, unknown | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/dogruyol2024-mediterranean-mussels-health-risk\|Dogruyol et al. 2024]]. *Evaluation of Health Risks Attributed to Toxic Trace Elements and Selenium in Farmed Mediterranean Mussels from Türkiye and Bulgaria*, Environmental Science and Pollution Research (published online 1 February 2024) | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | *[awaiting synthesis]* |
| 5 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | *[awaiting synthesis]* |
| 6 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | *[awaiting synthesis]* |
| 7 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

