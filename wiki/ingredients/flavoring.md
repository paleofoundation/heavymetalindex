---
title: "Flavoring"
type: ingredient
commodity: flavoring
label: "Flavoring"
aliases: ["natural flavor", "fruit flavoring", bouillon, seasoning-powder, condiments-sauces, vanilla, fish-sauce, baking-powder]
category: additive
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
used_in_products: [flavored-waters]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
hero_image: /static/heroes/carbonated-water-flavoring-vials.webp
hero_image_alt: "An unmarked bottle and glass of clear carbonated water beside two small liquid vials illustrating flavoring ingredient context."
---

# Flavoring

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

This node is linked from [[products/flavored-waters]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Flavoring is the aggregate ingredient label for natural and artificial flavoring agents used in food and beverage manufacturing. The category spans natural extracts (vanilla, citrus oils, spice extracts, fruit extracts), nature-identical compounds (synthesized molecules identical to natural flavor compounds), and artificial flavorings (synthetic compounds without natural counterparts). Heavy-metal load in flavoring ingredients comes from three pathways: source-plant inheritance for natural extracts (which carry source-spice or source-fruit metals); synthesis-route impurities for nature-identical and artificial compounds (the synthesis precursors and catalysts can carry trace metal impurities); and solvent and carrier inheritance (flavor compounds are typically delivered in solvents — ethanol, propylene glycol, vegetable oil — that carry their own trace metals).

Natural flavorings from spice and herb extracts carry the elevated metals documented on [[ingredients/spices|spices]] and [[ingredients/herbal-botanicals|herbal-botanicals]] pages; concentrated extracts can amplify per-mass metals via solvent removal and concentration. The HMTc panel concerns for flavoring are case-by-case depending on the specific flavor chemistry; natural-extract-based flavorings carry source-plant Pb and Cd; synthetic flavorings carry potential synthesis-pathway trace metals.

## Ranges by source, region, and variety

Variance within flavoring tracks flavor-source category (natural extract vs nature-identical vs artificial), source-plant origin region for natural extracts, synthesis-pathway and supplier specifications for synthetic compounds, and carrier-solvent quality. Major commercial flavor-house suppliers operate to tight impurity specifications; smaller specialty suppliers and craft producers vary widely.

## Processing effects

Flavor manufacturing varies by category: natural extracts are produced by distillation, extraction, or expression of source plant material; nature-identical and artificial compounds are synthesized in chemical-manufacturing facilities. Extraction and distillation generally do not introduce additional metals beyond the source material; chemical synthesis can introduce trace catalyst metals (Pd, Pt, Ni — depending on the synthesis route) that must be removed by purification steps to achieve food-grade specifications.

## Ingredient-derivative risk

Flavoring routes into virtually all processed food products at low inclusion rates (typically 0.01-1%). The per-finished-product impact of flavoring impurities is small because of the dilution factor, but consistent across countless products. Concentrated flavor essences for home baking and consumer use carry per-mass metals at higher concentrations than the formulated flavorings used in commercial production.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Flavor-house supplier specification at food-grade impurity tier; supplier audit programs verifying source-material and synthesis-pathway quality; and contractual specification of Pb/Cd/Ni ceiling on incoming flavoring.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-plant cultivation stage for natural-extract flavorings; see [[ingredients/spices|spices]] for upstream interventions.

**Processing levers** ([[mitigation/processing]]) include post-synthesis purification specifications for synthetic flavorings; distillation and extraction quality control for natural extracts.

**Formulation levers** ([[mitigation/formulation]]) include alternative-flavor substitution where impurity profiles differ between competing flavor systems; reformulation to reduce reliance on high-impurity flavor sources.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Ni testing on incoming flavoring concentrates. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; standard flavor-storage specifications (lined containers, opaque bottles, refrigeration as required) apply.

## Regulatory limits that apply

- US FDA regulates flavoring ingredients under 21 CFR 101.22 and 21 CFR 172/182 (GRAS framework); heavy-metal impurity limits are addressed via general food-additive purity specifications.
- US Pharmacopeia (USP) Chapter <2232> sets elemental impurity limits for food ingredients including flavorings.
- EU Regulation 1334/2008 (Food Flavourings) sets specifications for flavoring substances.
- FEMA (Flavor and Extract Manufacturers Association) GRAS list provides industry-aligned safety assessments for flavor compounds.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to flavoring-containing products sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
