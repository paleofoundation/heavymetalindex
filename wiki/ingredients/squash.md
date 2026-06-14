---
title: "Squash"
type: ingredient
commodity: squash
label: "Squash"
aliases: [zucchini]
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
sources: 1
---

# Squash

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming squash: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below occasional bar |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.00 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

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

## Routing

This node is linked from [[products/non-root-vegetable-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Squash is the aggregate ingredient label for Cucurbitaceae fruit-vegetables (Cucurbita pepo, Cucurbita maxima, Cucurbita moschata), including summer squash (zucchini, yellow squash, pattypan), winter squash (butternut, acorn, kabocha, hubbard, pumpkin), and related cucurbits. As fruit-vegetables, squash sits at the lower end of the vegetable heavy-metal range, with [[metals/cadmium|Cd]] and [[metals/lead|Pb]] at moderate soil-uptake levels. Squash routes into [[products/non-root-vegetable-purees|non-root-vegetable-purees]] for infant feeding (winter-squash purees like butternut squash and pumpkin are common infant first-foods) and into adult dishes including soups, baked goods, and pumpkin-pie applications. The data gap status across analytes reflects sparse squash-specific quantitative data in the routing audit; the synthesis is grounded in the broader [[ingredients/vegetables|vegetables]] aggregate corpus.

## Ranges by source, region, and variety

Variance within squash tracks source-region soil profile, cultivar (summer squash, winter squash, pumpkin — broadly similar baselines but pumpkin in particular accumulates moderate Cd), and storage history (winter squash stored for extended periods does not appreciably change metal load but reflects field-harvest profile). Industrial-region or urban-garden production carries elevated Pb; commercial-orchard production sits at moderate baseline.

## Processing effects

Squash processing for fresh-market consumption involves washing, sorting, and packing. Industrial processing for canned pumpkin, squash puree, frozen squash, or squash-based baby food involves washing, cooking, pureeing, and packaging. Peeling and seed removal reduce Pb and Cd modestly via removal of surface-deposited contaminants. Squash puree manufacturing for [[ingredients/fruit-purees|fruit-purees]] and baby-food formulations retains the source-squash metal load. Canned pumpkin and canned squash introduce a Sn migration pathway in tinplate cans.

## Ingredient-derivative risk

Squash derivatives include fresh squash, frozen squash, canned pumpkin (a primary derivative for baking), squash puree (for infant feeding and adult applications), squash seeds (pumpkin seeds carry the full source-squash metal load at concentrated per-seed levels), pumpkin seed oil (oil partitioning reduces per-mass metals), and squash-based products including soups and baked goods.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-region soil verification; supplier-audit programs; and contractual Pb/Cd ceiling on incoming squash supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the squash-cultivation stage. Soil pH management; soil amendments; cultivar selection; greenhouse production where the matrix permits.

**Processing levers** ([[mitigation/processing]]) include washing optimization; peeling and seed-removal optimization for Pb reduction; processing-equipment material specification.

**Formulation levers** ([[mitigation/formulation]]) include substituting squash with lower-Pb vegetables where the matrix permits; reducing the squash fraction in mixed-vegetable formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming squash supply. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned pumpkin and canned squash; aseptic or glass packaging eliminates Sn migration.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Cd and Pb in non-root vegetables: Pb 50 ppb, Cd 50 ppb (general non-root vegetables, including squash).
- FDA Closer to Zero baby-food Pb action levels: 10 ppb for non-root vegetable purees including squash-containing infant products ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets non-root-vegetable category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to squash products sold in California.
- EU Sn-in-canned-food regulation sets 200 mg/kg for canned vegetables, 50 mg/kg for canned infant food including canned pumpkin and squash.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
