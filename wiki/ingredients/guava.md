---
type: ingredient
commodity: guava
title: "Guava"
label: "Guava"
aliases: []
category: fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [12, 100], p95_ppb: 2400, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [33, 200], p95_ppb: 640, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [11, 500], p95_ppb: 9000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [111, 500], p95_ppb: 2500, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Guava

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 12–100 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Cd | n=2 | 33–200 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | n=2 | 11–500 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 111–500 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | BD As, Cd, Pb, Cr, Ni, tHg occurrence in Systematic review of 10 cross-sectional studies on heavy metals in Bangladeshi fruits (2012–2022), covering banana, mango, jackfruit, papaya,... (n=10) |
| 2 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Ni, Cd, Pb occurrence in Fruit samples of 11 varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) collected from... (n=308) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Guava (Psidium guajava) is a tropical fruit cultivated dominantly in India, Pakistan, Mexico, Brazil, Egypt, Thailand, and across Latin America and Southeast Asia. Guava plants accumulate moderate heavy-metal load via soil-uptake and atmospheric deposition; warmer growing climates with documented industrial and agrochemical-contamination histories drive higher baselines than temperate fruit production. Guava is consumed fresh, as juice, in purees, and in dried/dehydrated products including guava paste (an important confectionery ingredient in Latin American cuisine). The HMTc panel concerns for guava are Pb and Cd at moderate levels reflecting tropical-region production baselines.

The data gap status across analytes in the body table reflects sparse guava-specific quantitative data in the current routing audit. The synthesis is grounded in the broader tropical-fruit and tropical-vegetable literature in [[sources/hernandez-montoya2026-heavy-metals-foods-review|Hernández-Montoya 2026]] and the [[ingredients/fruits|fruits]] aggregate page.

## Ranges by source, region, and variety

Variance within guava tracks source-region (Indian, Pakistani, Mexican, Brazilian, Egyptian guava production sit at different baselines reflecting regional soil-and-irrigation profiles), cultivar (white-flesh and pink-flesh guava cultivars, with limited documented per-cultivar metal differences), and farming system (commercial orchard vs smallholder production, with smallholder production in industrial-region peripheries often carrying elevated Pb).

## Processing effects

Guava processing for fresh-market consumption involves harvest and minimal handling. Industrial processing for guava juice involves pressing or pulping, screening, optional pasteurization, and packaging. Pressing partitions metals between juice and solid fractions. Guava puree production for [[ingredients/fruit-purees|fruit-purees]] and baby food retains the full source-fruit metal load. Guava paste (cooked-concentrated guava with sugar) concentrates per-mass metals via water removal. Dried/dehydrated guava concentrates per-mass metals proportionally.

## Ingredient-derivative risk

Guava derivatives include fresh guava, guava juice, guava nectar, guava puree (for infant feeding and bakery applications), guava paste (confectionery), and dried/dehydrated guava. Concentrated and dried products carry per-mass metals at higher levels than fresh fruit. Guava is also incorporated into mixed tropical-fruit products (smoothies, fruit cocktails, tropical-blend juices) where it contributes a fraction of the total per-product metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant for guava given tropical-region upstream supply variability. Origin-region specification favoring documented low-soil-Pb production areas; supplier audit programs verifying agrochemical-use history and irrigation-water quality; and contractual specification of Pb/Cd ceiling on incoming guava.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the guava-cultivation stage. Soil pH management; avoidance of high-Pb agrochemical inputs; and irrigation-water specification.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; washing optimization for surface-Pb removal; pulp-removal optimization to partition metals to solids in juice production.

**Formulation levers** ([[mitigation/formulation]]) include substituting guava with lower-Pb tropical fruits where the matrix permits; reducing the guava fraction in tropical-fruit blends; juice-to-water dilution in guava-flavored beverage formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming guava. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned guava products; aseptic carton, glass, or PET packaging for guava juice eliminates Sn migration.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb at 100 ppb (general fruit); Cd at 50 ppb (general fruit). These apply to guava.
- FDA Closer to Zero baby-food Pb action levels: 10 ppb for fruit purees including guava-containing infant fruit products ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets fruit-category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to guava products sold in California.


