---
title: "Beef"
type: ingredient
commodity: beef
label: "Beef"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [3, 100]
    p95_ppb: 700
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 312
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 200]
    p95_ppb: 15000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 500]
    p95_ppb: 500
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 50]
    p95_ppb: 83
    confidence: medium
    n_studies: 4
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
    typical_ppb: [2, 10]
    p95_ppb: 50
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 7
---

# Beef

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 3–100 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/altalib2025-frozen-meat-libya\|3]] |
| Cd | n=7 | 1–30 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/altalib2025-frozen-meat-libya\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 2–10 | medium | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/mohamed2023-heavy-metals-beef-egypt\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| tHg | n=5 | 0–50 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|3]] |
| Ni | n=3 | 50–200 | medium | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/kasozi2021-uganda-beef-metals\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Al | n=2 | 200–500 | low | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Cr | n=4 | 10–50 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]], [[sources/kasozi2021-uganda-beef-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports (in press 2025) | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 40 beef baby purees from Spanish retail by ICP-MS; multi-metal occurrence data for beef as complementary-food matrix |
| 5 | [[sources/mohamed2023-heavy-metals-beef-egypt\|Mohamed et al. 2023]]. *Detection and health risk assessment of toxic heavy metals in chilled and frozen meat collected from Sharkia province in Egypt* | 2023 | Peer-reviewed | EG Pb, tHg, tAs, Cd occurrence in 15 chilled and 15 frozen beef samples from marketing stores, Sharkia Governorate, Egypt (n=30) |
| 6 | [[sources/kasozi2021-uganda-beef-metals\|Kasozi et al. 2021]]. *Descriptive Analysis of Heavy Metals Content of Beef From Eastern Uganda and Their Safety for Public Consumption*, Frontiers in Nutrition | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


