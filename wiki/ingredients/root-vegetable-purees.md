---
title: "Root Vegetable Purees"
type: ingredient
commodity: root-vegetable-purees
label: "Root Vegetable Purees"
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
    typical_ppb: [0.433, 5]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1.5]
    p95_ppb: 1.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
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
    typical_ppb: [0.053, 12]
    p95_ppb: 12
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
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
sources: 0
---

# Root Vegetable Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=6 | only 3/10 analytes have evidence |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Cd THIN, tHg THIN, tAs THIN | Cd: needs 1 more study(ies); tHg: needs 1 more study(ies); tAs: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming root-vegetable-purees: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | OK | 1 cited lever(s), 6 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Cd, tHg, tAs |
| D11 Standards-readiness | NOT-READY | priority: Cd, tHg, tAs; pairing 0 paired, 3 single, 0 unpaired | Cd: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | n=2 | 0.433–5 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0.053–12 | low | — |
| tHg | n=2 | 0–1.5 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Root vegetable purees is the aggregate ingredient label for infant-and-toddler purees made from root-vegetable bases including [[ingredients/carrots|carrots]], sweet potatoes, [[ingredients/beet|beets]], parsnips, white potatoes, and similar tuber-and-root crops. Root vegetables accumulate [[metals/lead|Pb]] at the soil-root interface and [[metals/cadmium|Cd]] via cortical uptake during plant growth; this is documented in detail on the [[ingredients/vegetables|vegetables]] aggregate page. Root-vegetable purees inherit the source-vegetable metal profile, with Pb particularly concentrated relative to non-root vegetables because root vegetables grow directly in soil where legacy Pb-contamination concentrates.

The FDA Closer to Zero baby-food Pb action level differentiates root vegetable purees (20 ppb Pb) from non-root vegetable purees (10 ppb Pb) specifically because root vegetables carry the higher baseline Pb from soil-contact. The HMTc panel concerns for root vegetable purees are Pb (dominant), Cd, and trace iAs (in root vegetables grown in As-affected regions). Routes into [[products/root-vegetable-purees|root-vegetable-purees]] (Cat 1 row for infant root-vegetable products).

## Ranges by source, region, and variety

Variance within root vegetable purees tracks the source-vegetable mix (carrot-only vs sweet-potato-only vs mixed-root-vegetable formulations), source-region soil profile (industrial-region or urban-garden production carries elevated Pb; commercial agricultural production sits at moderate baseline; certified-clean-soil production sits at lower baseline), and processing tier. Carrot-based purees are the most common single-vegetable infant product; sweet potato is the second-most-common; beet, parsnip, and white potato purees are less common.

## Processing effects

Root-vegetable puree manufacturing involves washing, peeling (substantial Pb reduction by removing surface-deposited Pb), cooking, pureeing, and packaging (jar, pouch, or aseptic carton). Peeling is the dominant processing-stage mitigation lever for root-vegetable Pb; the peeled-and-cooked puree carries substantially lower per-mass Pb than the unpeeled raw vegetable. Sterilization (retort processing for jarred and pouched products) does not affect metals.

## Ingredient-derivative risk

Root vegetable purees route into Cat 1 row [[products/root-vegetable-purees|root-vegetable-purees]] as the primary infant feeding product family. Derivatives include single-vegetable purees (carrot puree, sweet potato puree, beet puree) and mixed-root-vegetable purees. Mixed-meals products containing root vegetables alongside grains, proteins, or other ingredients dilute the per-product root-vegetable metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-vegetable origin specification favoring documented low-soil-Pb production regions; supplier-soil verification programs; and contractual Pb/Cd ceiling on incoming root vegetables for infant-product manufacturers operating to tight specifications.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the root-vegetable cultivation stage. Soil pH management; soil amendments (biochar, lime); cultivar selection; remediation of urban-and-industrial production sites.

**Processing levers** ([[mitigation/processing]]) include thorough peeling for maximum Pb reduction; washing optimization; and avoidance of equipment-cleaning chemicals that could introduce metals.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of higher-Pb root vegetables (beet) with lower-Pb alternatives (carrot, sweet potato) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on finished root-vegetable purees against FDA Closer to Zero 20 ppb Pb action level for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include glass-jar, pouch, or aseptic-carton packaging (modern infant-food packaging); avoidance of older soldered or unlined-metal storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child foods.
- FDA Closer to Zero baby-food Pb action level: 20 ppb for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to root-vegetable-puree products sold in California.

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
