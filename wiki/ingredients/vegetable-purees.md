---
title: "Vegetable Purees"
type: ingredient
commodity: vegetable-purees
label: "Vegetable Purees"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Vegetable Purees

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | data gap | — | — | — | — |
| Cd | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni | data gap | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | data gap | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/non-root-vegetable-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Vegetable purees inherit heavy metals from the source vegetables. The Cat 1 Step 0 lock splits vegetable purees into two row categories based on source-vegetable Cd/Pb accumulation:

**[[products/root-vegetable-purees]]** — carrot, sweet potato, potato, beet, parsnip, turnip puree. Root vegetables accumulate Cd and Pb from soil at moderate efficiency (see [[ingredients/carrots]], [[ingredients/sweet-potato]], [[ingredients/root-vegetables]]). This row carries the higher Cd loading.

**[[products/non-root-vegetable-purees]]** — spinach, kale, broccoli, peas, green-bean, squash, zucchini, tomato puree. Non-root vegetables include leafy greens (high-Cd-accumulator) and non-leafy non-root vegetables (lower-Cd-accumulator). Spinach specifically is at the upper end and is split as a Cat 4 higher-contamination row (see [[ingredients/spinach]]).

The HMTc panel concerns for vegetable purees are dominantly Cd and Pb, with subcategory variance driven by source-vegetable choice. The infant exposure pathway concentrates per-body-weight intake.

## Ranges by source, region, and variety

Root vegetable purees: carrot puree typically dominates per-volume Cd among single-ingredient root-vegetable purees because carrots are moderate Cd accumulators and carrot puree is the most common single-ingredient infant root-vegetable product. Sweet potato and potato purees carry lower Cd typically. Spinach and leafy-green purees carry the highest Cd among non-root vegetable purees because of the leafy-green Cd-accumulation pathway.

[[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]] and [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019 (HBBF)]] characterize Spanish-market and US-market baby food vegetable purees respectively.

## Processing effects

Vegetable puree processing (washing, peeling for root vegetables, blanching, pureeing, heat treatment, packaging) does not change source-vegetable metal content meaningfully. Washing and peeling at the manufacturer stage remove surface-deposited Pb for root vegetables (see [[ingredients/carrots]] for the washing-and-peeling discussion). Blanching does not reduce panel metals. Heat treatment for shelf-stability does not change panel metals.

## Ingredient-derivative risk

Vegetable purees are themselves finished retail products. Concentrated vegetable puree (used as flavor or color in compounded products) carries elevated per-mass metal. Vegetable-puree-based finished products (vegetable pouches, vegetable-and-meat combinations, vegetable-and-grain combinations) inherit the source-puree profile proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Vegetable-source-region sourcing from documented low-Cd-Pb production areas, hydroponic-or-greenhouse sourcing for leafy-green-containing purees, and supplier soil verification.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the upstream vegetable-production stage (see per-vegetable ingredient pages).

**Processing levers** ([[mitigation/processing]]) include washing and peeling for root vegetables (effective for surface-deposited Pb), blanching-water-discard (small additional fraction).

**Formulation levers** ([[mitigation/formulation]]) include vegetable-species substitution (substituting lower-Cd-accumulator vegetables for spinach in spinach-containing infant pouches reduces per-serving Cd substantially), vegetable-percentage adjustment, and single-vegetable vs mixed-vegetable formulation choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and Pb testing on finished vegetable purees, particularly for infant-targeted products. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include pouch and jar material specifications.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action levels for processed baby foods: 10 ppb for non-root-vegetable purees, 20 ppb for single-ingredient carrot or sweet-potato root-vegetable purees.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Cd and Pb maximum levels for infant-and-young-child vegetable-based foods. Spinach-specific Cd ML applies to spinach purees.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Cd and Pb MADLs applied to vegetable purees sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
<!-- END: hmi-page-history -->
