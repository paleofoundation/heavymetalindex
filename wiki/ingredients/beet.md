---
title: "Beet"
type: ingredient
commodity: beet
label: "Beet"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 35]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 15]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
---

# Beet

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5–35 | low | [[sources/katebe2024-vegetables-lubumbashi\|1]], [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|2]] |
| Cd | n=2 | 5–15 | low | [[sources/katebe2024-vegetables-lubumbashi\|1]], [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|2]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/katebe2024-vegetables-lubumbashi\|Katebe et al. 2024]]. *Application of soil amendments to reduce the transfer of trace metal elements from contaminated soils of Lubumbashi (Democratic Republic of the Congo) to vegetables*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CD Pb, Cd, tAs occurrence in Greenhouse pot experiment; four vegetable species (Brassica chinensis, Amaranthus vulgaris, Beta vulgaris, Brassica carinata) grown on soils from... (n=60) |
| 3 | [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|Brzezinska-Rojek et al. 2023]]. *Evaluation of the Safety and Potential Benefits of Beetroot-Based Dietary Supplements According to Their Elemental Composition*, Biological Trace Element Research (published online 7 October 2023) | 2023 | Peer-reviewed | Cd, Pb, and Al in 37 beetroot dietary supplements (tablets, capsules, powders) from Polish market by MP-AES; Cd exceeded PTMI in 5 products; Pb BDL in all |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Beet (Beta vulgaris) is a root vegetable cultivated for the swollen taproot (red beet, sugar beet, gold beet). Beets are documented moderate-to-strong accumulators of [[metals/cadmium|Cd]], [[metals/lead|Pb]], and trace [[metals/nickel|Ni]] via soil-uptake at the root-soil interface, with the taproot acting as the primary metal-accumulation organ. The deep tap-root growth habit places the root directly in contact with subsurface soil where legacy Pb-contaminated deposits often concentrate, elevating per-mass Pb in beets grown in industrial or urban-legacy soils. Beet leaves (used as beet greens and Swiss chard, which is the same species selected for leaf production) accumulate Cd and Pb via the leafy-vegetable pathway and carry separately elevated profiles per [[ingredients/leafy-greens|leafy greens]].

The HMTc panel concerns for beet are Cd (dominant soil-uptake driver), Pb (legacy-soil contamination, particularly in urban-and-industrial production), and trace Ni. Beet routes into [[products/root-vegetable-purees|root-vegetable-purees]] for infant feeding and into beet juice, pickled beet, beet powder, and (for sugar beets) refined sugar production.

## Ranges by source, region, and variety

Variance within beet tracks source-region soil profile (industrial-region or urban-garden production carries elevated Pb; agricultural-region commercial production sits at moderate baseline; certified-clean-soil production sits at lower baseline), cultivar (red beet, sugar beet, gold beet, Chioggia, and Detroit Dark Red carry slightly different metal-accumulation profiles), and harvest age (older beets sitting longer in soil accumulate proportionally more metals). The broader [[ingredients/vegetables|vegetables]] page corpus documents the geographic spread; the [[ingredients/root-vegetable-purees|root-vegetable-purees]] page covers the infant-puree market subset.

## Processing effects

Beet processing for fresh-market consumption involves washing, trimming, and storage; metal load is essentially the field-harvest level. Industrial beet processing for canning, freezing, or pickling involves washing, peeling, cooking, and packaging; peeling removes a substantial fraction of root-surface-deposited Pb (peeling reduces Pb by 30-50% on root vegetables). Beet juice manufacturing presses fresh or lightly-blanched beets and concentrates per-mass metals in the juice fraction relative to whole-beet wet weight. Beet powder (dehydrated beet products used in nutritional supplements, smoothie blends, and natural-color applications) concentrates per-mass metals via moisture removal (typically 8-10× concentration). Sugar beet processing involves extracting sucrose from sugar beets via diffusion, carbonatation, and crystallization; the refined sugar product carries trace residual metals at much lower levels than the source beet because the carbonatation step precipitates and removes most heavy metals.

## Ingredient-derivative risk

Beet derivatives span fresh and frozen beet, canned beet, pickled beet, beet juice, beet powder (concentrated), and (for sugar beet) refined sugar (per [[ingredients/white-sugar|white sugar]], at low metal levels). Beet powder in particular carries per-mass metals at concentrated levels because of the moisture-removal factor and is consumed in functional-food and supplement contexts where per-serving doses can be substantial. Beet greens (the leafy tops) carry the leafy-vegetable Cd/Pb profile and route to [[ingredients/leafy-greens|leafy greens]] when consumed as a separate product.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Geographic-segmented sourcing from documented low-soil-Pb production regions; supplier-soil verification for beet farms (testing for legacy industrial or urban-garden contamination); and contractual specification of Pb/Cd ceiling on incoming beet supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the beet-cultivation stage. Soil pH management (raising pH from 5.5 to 6.5-7.0 reduces Cd plant availability substantially); soil amendments (biochar, lime); cultivar selection (some sugar-beet cultivars are documented lower Cd accumulators); rotation away from Cd-accumulating crops in known-contaminated soils; and remediation of urban-and-industrial soils for high-risk production sites.

**Processing levers** ([[mitigation/processing]]) include peeling (substantial Pb reduction on root surface), washing optimization, and avoidance of older soldered cans for canned beet products.

**Formulation levers** ([[mitigation/formulation]]) include substituting beet with lower-Pb root vegetables (carrot, sweet potato) in mixed-meals products where the matrix permits; reducing the beet fraction in root-vegetable purees.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Ni testing on incoming beet supply and finished beet products. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned beet; aseptic or glass packaging eliminates Sn migration; standard storage-condition specifications apply.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for root vegetables: Pb 100 ppb, Cd 100 ppb (root and tuber vegetables). These apply to beet.
- FDA Closer to Zero infant-food Pb action level: 20 ppb for root vegetable purees including beet-containing purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets root-vegetable category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to beet products sold in California.
- EU Sn-in-canned-food regulation sets 200 mg/kg for canned vegetables including canned beet, 50 mg/kg for canned infant food.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [3a0d086](https://github.com/paleofoundation/heavymetalindex/commit/3a0d086) | 2026-05-20 | autonomy: daemon tick 2026-05-20T06-40-52Z — gap-healing + extraction + pooling + briefings |
| [4fe0a95](https://github.com/paleofoundation/heavymetalindex/commit/4fe0a95) | 2026-05-19 | autonomy: daemon tick 2026-05-19T18-38-11Z — gap-healing + extraction + pooling + briefings |
| [378d999](https://github.com/paleofoundation/heavymetalindex/commit/378d999) | 2026-05-17 | autonomy: daemon tick 2026-05-17T13-07-28Z — gap-healing + extraction + pooling + briefings |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
<!-- END: hmi-page-history -->
