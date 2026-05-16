---
type: ingredient
commodity: guava
title: "Guava"
label: "Guava"
aliases: [psidium-guajava]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [12, 12]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [33, 33]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  iAs:
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
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [11, 11]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [111, 111]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
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
drivers: [soil-uptake, geography, industrialization-level]
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

Guava (Psidium guajava) is a tropical fruit principally cultivated in South Asia, Latin America, and parts of Africa. The available evidence for guava-specific contamination in the current corpus comes from a Pakistani market survey of 11 commonly consumed fruits ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]) and a systematic review of Bangladeshi fruit heavy metal data ([[sources/islam2024-heavy-metals-bangladeshi-fruits-review|Islam et al. 2024]]). The Pakistani dataset places guava in the low-to-moderate range relative to other fruits in the same study, with all measured analytes substantially below WHO permissible limits on a dry-weight basis. The geographic scope of available evidence (predominantly Pakistan and Bangladesh) means the values represent the South Asian production context rather than a global mean.

## Why this commodity accumulates heavy metals

Guava accumulates heavy metals through soil uptake by the guava tree, with the fruit concentrating metals from the tree's vascular and reproductive tissues. The guava tree grows in a wide range of tropical soils, including marginal and degraded soils where it produces commercially viable fruit. The Pakistani Rahim 2020 dataset documents that guava from Khyber Pakhtunkhwa, a predominantly mountainous and minimally industrialized region, carries low absolute concentrations of Pb, Cd, Ni, and Cr ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]). Guava grown in industrialized or mining-impacted regions, urban-fringe agricultural zones, or near roadways with traffic-related Pb deposition would be expected to carry higher metal loads than the Pakistani baseline; the [[sources/islam2024-heavy-metals-bangladeshi-fruits-review|Islam et al. 2024]] systematic review of Bangladeshi fruit data documents this geographic variation pattern.

## Heavy metal contamination profile

Values below are reported on a dry-weight basis as collected in the Pakistani source. For fresh-weight comparison with regulatory limits, divide by approximately 5 (guava is roughly 80 to 85 percent water).

| Analyte | Coverage | Typical (ppb, DW) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 12 | — | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Cd  | n=1 | 33 | — | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 11 | — | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Al  | data gap | — | — | — | — |
| Cr  | n=1 | 111 | — | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Pakistani Khyber Pakhtunkhwa survey of 11 commonly consumed fruits across 28 markets reports guava at Cr 0.1108 mg/kg, Ni 0.0109 mg/kg, Cd 0.0333 mg/kg, and Pb 0.0117 mg/kg, all on a dry-weight basis ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]). All values fall substantially below WHO permissible limits (Cr 2.3 mg/kg, Ni 70 mg/kg, Cd 0.1 mg/kg, Pb 0.3 mg/kg DW). Within the 11-fruit study, guava ranked fourth for Cr (after lemon, grapes, mango), low for Pb (eleventh out of eleven), low-moderate for Cd (third lowest), and low for Ni. The authors attribute the overall low values to limited industrialization and minimal pesticide use in the mountainous KPK region.

The Islam 2024 systematic review of Bangladeshi fruit heavy metal data covers guava as one of multiple commonly consumed fruits, with the Bangladeshi context (lower-altitude agricultural delta with significant industrial and irrigation-water contamination in some regions) producing different per-region values than the Pakistani mountain dataset ([[sources/islam2024-heavy-metals-bangladeshi-fruits-review|Islam et al. 2024]]). Specific Bangladeshi guava per-analyte values from the review are not in the accessible data slice; the review's contribution is qualitative confirmation that Bangladeshi guava can carry materially higher metals than the Pakistani baseline in industrially-impacted regions.

Regional and varietal variation beyond the two South Asian datasets is not resolved in the current corpus. No US, EU, or Latin American guava-specific source is in the current routing for this page.

## Processing effects

Processing-state effects on guava metal load are limited in the current evidence base. Fresh guava is the dominant consumption form globally. Guava juice (single-strength or concentrate) extracts metals into the juice fraction; the concentration step proportionally elevates metals on a per-mass basis until reconstitution. Guava paste and guava jelly (commercial preserves) concentrate the fruit through evaporation and proportionally elevate all components including metals. Dried guava and guava powder concentrate metals by mass loss. The contributing sources do not provide quantitative processing-effect data for guava specifically.

## Ingredient-derivative risk

Guava produces several derivatives. Fresh guava is the baseline form. Guava juice and guava nectar carry the source-fruit metals in a juice or diluted-juice matrix. Guava paste (membrillo de guayaba) and guava jelly are common in Latin American and Caribbean cuisine and concentrate metals proportionally with the evaporative concentration. Guava-flavored fruit products, including yogurts, beverages, and baked goods, carry guava-derived metals proportionally to the guava content. Guava seed oil is a niche ingredient with its own metal partition based on seed-to-oil transfer characteristics; not characterized in the current corpus.

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing guava from low-industrial regions with documented clean irrigation water is the upstream lever. The Pakistani Khyber Pakhtunkhwa dataset establishes that minimally industrialized regions produce guava with metal levels substantially below WHO limits.

Agronomic levers operate on the guava producer. Soil testing, irrigation-water management, and avoidance of urban-fringe and roadside production for export are documented practices in the broader plant-food agronomic literature.

Processing levers are limited for fresh guava. Washing removes surface-deposited Pb. Peeling the skin (where atmospheric deposition concentrates) reduces surface load at the cost of nutritional content.

Formulation levers operate on the brand. Substituting other tropical fruits with lower documented metal loads is the available adjustment where formulation permits.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming guava raw material against a sourcing specification catches origin-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for guava in the current evidence base.

## Regulatory limits that apply

The Codex Alimentarius CXS 193-1995 establishes Pb in fruits at 0.1 mg/kg (100 ppb) on a wet-weight basis as placed on the market. The European Union Regulation (EU) 2023/915 establishes Pb in fresh fruit at 0.10 mg/kg (100 ppb) and Cd in fruits and tree nuts at 0.050 mg/kg (50 ppb), with stricter values for specific subcategories ([[regulations/eu2023-contaminants-maximum-levels]]). The WHO permissible limits used as the reference in the Pakistani exceedance analysis (Cr 2.3, Ni 70, Cd 0.1, Pb 0.3 mg/kg DW) are dry-weight basis values; fresh-weight regulatory limits are typically 5- to 10-fold lower in absolute terms reflecting the moisture content of fresh fruit. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in whole fresh guava under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | Systematic review of Bangladeshi fruit heavy metal data including guava; provides qualitative confirmation of geographic variation in guava metal loads between Pakistani mountain and Bangladeshi delta production contexts |
| 2 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Primary occurrence data for guava from Pakistani Khyber Pakhtunkhwa markets in 11-fruit comparison (FAAS, dry-weight basis); Pb 12 ppb DW, Cd 33 ppb DW, Ni 11 ppb DW, Cr 111 ppb DW, all well below WHO permissible limits |
<!-- END: hmi-source-legend -->
