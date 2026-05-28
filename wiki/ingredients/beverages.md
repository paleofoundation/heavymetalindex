---
type: ingredient
commodity: beverages
title: "Beverages"
label: "Beverages"
aliases: []
category: beverage
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-14
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Beverages

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn occurrence in Hong Kong general adult population; 150 TDS food items purchased on 4 occasions (March 2010 to February 2011),... (n=1800) |
| 2 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | HK iAs, tAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for non-water beverages (beverages other than drinking water, which is at [[ingredients/water]]). The category spans Cat 5 beverages and several Cat 1 infant beverage rows. See per-beverage ingredient pages for synthesis: [[ingredients/coffee]], [[ingredients/tea]] / [[ingredients/camellia-sinensis]], [[ingredients/fruit-juice]], [[ingredients/grape-juice]], [[ingredients/mango-juice]], [[ingredients/orange-juice]], [[ingredients/apple-juice]], [[ingredients/vegetable-juice]], [[ingredients/plant-milk]], [[ingredients/sports-drink-bases]], [[ingredients/fermented-beverage-bases]], [[ingredients/soft-drink-bases]].

Beverages inherit heavy metals through three pathways: source ingredient (fruit, vegetable, grain, plant-base, tea/coffee leaf), processing water (the dominant pathway in low-source-ingredient beverages like sports drinks and flavored waters), and packaging contact (can-lining Sn migration, aluminum-foil-carton Al migration, plastic-bottle migration for some specific contaminants).

The HMTc panel concerns vary by beverage class. Apple juice has documented Pb concerns; rice-based beverages have iAs concerns; soy plant milk has Al/Ni concerns; tea has Al concerns; canned beverages have Sn concerns.

## Ranges by source, region, and variety

Variance within "beverages" is enormous because the category spans completely different ingredient-input profiles. See per-beverage pages for sub-category synthesis. The Cat 5 Step 0 lock splits beverages into 9 product rows ([[products/fruit-juices-general]], [[products/vegetable-juices]], [[products/plant-milks-general]] split further into 3 row variants, [[products/flavored-waters]], [[products/sports-energy-drinks]], [[products/tea-conventional]], [[products/coffee]], [[products/soft-drinks-carbonated-beverages]], [[products/kombucha-and-fermented-beverages]]) to manage this variance.

## Processing effects

Beverage processing covers: extraction (juicing, brewing, steeping), formulation (mixing with water, sweeteners, flavors), heat treatment (pasteurization, UHT, retort), carbonation, packaging. Each step has different metal-affecting potential. See per-beverage pages.

## Ingredient-derivative risk

Beverage concentrates and powders carry per-mass metal at multiples of the as-consumed beverage because water has been removed. Beverage powders (drink mixes, instant coffee, dried tea) carry concentrated source-ingredient metals.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the per-source-ingredient level: low-iAs rice for rice-based beverages, low-Pb apple for apple juice, low-Al tea origin for tea-based beverages, etc.

**Processing levers** ([[mitigation/processing]]) include processing-water specification (the dominant lever for water-dominant beverages like sports drinks, flavored waters, and sodas), extraction-method specification, and packaging-material specification.

**Formulation levers** ([[mitigation/formulation]]) include source-ingredient substitution within the beverage class (oat-based vs rice-based plant milk for low-iAs; non-tea-based vs tea-based for low-Al).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level finished-beverage testing against the applicable regulatory cap. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (Sn migration), aluminum-foil-carton specification (Al migration), and plastic-bottle specification.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets beverage-specific MLs (juice, plant-milk, infant-and-young-child-beverage variants).
- [[regulations/codex-cadmium-mls]] — Codex Cd ML framework.
- FDA action level for Pb in juices (including apple juice).
- California Prop 65 ([[regulations/california-prop65]]) MADLs apply to beverages sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [6dcb44d](https://github.com/paleofoundation/heavymetalindex/commit/6dcb44d) | 2026-05-19 | autonomy: daemon tick 2026-05-18T21-04-04Z — gap-healing + extraction + pooling + briefings |
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
| [f97c3e2](https://github.com/paleofoundation/heavymetalindex/commit/f97c3e2) | 2026-05-18 | autonomy: daemon tick 2026-05-18T03-29-36Z — gap-healing + extraction + pooling + briefings |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
<!-- END: hmi-page-history -->
