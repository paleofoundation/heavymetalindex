---
title: "Infant Formula Concentrated Liquid"
type: ingredient
commodity: infant-formula-concentrated-liquid
label: "Infant Formula Concentrated Liquid"
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
used_in_products: [infant-formula-concentrated-liquid-non-soy, infant-formula-concentrated-liquid-soy-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Infant Formula Concentrated Liquid

## Overview

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

This node is linked from [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-concentrated-liquid-soy-based]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Concentrated liquid infant formula is an intermediate format between RTF liquid and powder: approximately 1:1 dilution at the consumer point (consumer mixes equal parts concentrate and water). The heavy-metal pathway is the same as powder formula (ingredient inheritance plus packaging considerations); the per-mass-of-concentrate metal load is approximately 2× the RTF and approximately 1/4 the powder, reflecting the intermediate water-content.

The Cat 1 Step 0 lock splits concentrated liquid into non-soy and soy-based rows ([[products/infant-formula-concentrated-liquid-non-soy]] and [[products/infant-formula-concentrated-liquid-soy-based]]) for the same base-ingredient-class reasons as other formula formats.

Concentrated liquid is a less-common format in modern markets than powder or RTF; the format persists primarily in cost-sensitive or institutional channels. The HMTc panel concerns are identical to powder and RTF on a per-feed basis after dilution.

## Ranges by source, region, and variety

The dominant variance drivers are identical to powder and RTF formula. The format-specific consideration is that concentrated liquid involves manufacturing-water inputs (similar to RTF), plus consumer-side dilution water that is additional to those inputs.

## Processing effects

Concentrated liquid formula manufacturing involves combining ingredients and water, homogenizing, heat treating (retort or aseptic), and packaging in cans or cartons. Processing does not change source-ingredient metal load; manufacturing water is the variable input.

## Ingredient-derivative risk

Concentrated liquid formula is itself a finished retail product. The consumer-side preparation step adds dilution water; high-Pb tap water at the consumer location would add to the as-fed Pb. Documented-low-Pb water sources are the standard recommendation for consumer reconstitution.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are identical to powder and RTF formula at the per-ingredient stage.

**Agronomic, Processing, Formulation levers** are identical to powder formula at the per-ingredient stage.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, iAs testing on finished concentrated liquid. EU 10 ppb Pb ML for prepared-for-feeding applies after 1:1 dilution.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the standard Sn-migration consideration for canned concentrated liquid (which is a common format for this category specifically).

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets MLs for infant formula on prepared-for-feeding basis; concentrated liquid is converted at the 1:1 dilution before comparison.
- Codex Alimentarius CXS 72-1981 and CXS 156-1987 — infant formula composition standards.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
