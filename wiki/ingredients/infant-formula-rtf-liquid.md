---
title: "Infant Formula Rtf Liquid"
type: ingredient
commodity: infant-formula-rtf-liquid
label: "Infant Formula Rtf Liquid"
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
used_in_products: [infant-formula-rtf-liquid-non-soy, infant-formula-rtf-liquid-soy-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 3
hero_image: /static/heroes/liquid-formula-closed-unmarked-bottles.webp
hero_image_alt: "Two closed unmarked feeding bottles and a sealed container illustrating infant formula rtf liquid ingredient context."
---

# Infant Formula Rtf Liquid

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

This node is linked from [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta\|Saraiva et al. 2021]]. *Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products*, Talanta 222 (2021) 121538 | 2021 | Peer-reviewed | FR/DK Cr, Cr-VI occurrence in Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL... (n=3) |
| 2 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 3 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Ready-to-feed (RTF) liquid infant formula carries the same ingredient-inheritance pathway as powder formula (see [[ingredients/infant-formula-powder]]) but in as-consumed liquid form rather than spray-dried powder form. The per-volume metal concentration is approximately the powder formula divided by the reconstitution ratio (the 1:7 powder-to-water reconstitution is the canonical conservative factor; commercial RTF liquid product is at the manufacturer-specified ratio). RTF formula therefore typically carries 1/7 the per-mass metal of the same recipe in powder form, with the per-feed serving size also adjusted (a 4-ounce RTF bottle delivers approximately the same dose as 1 teaspoon of powder + 4 ounces water).

The Cat 1 Step 0 lock splits RTF liquid into non-soy and soy-based rows ([[products/infant-formula-rtf-liquid-non-soy]] and [[products/infant-formula-rtf-liquid-soy-based]]) for the same base-ingredient-class reasons as powder formula.

The HMTc panel concerns for RTF liquid are the same as powder formula on a per-feed basis, with the additional consideration that the pre-mixed water in the manufacturing process is a metal-input pathway distinct from consumer-side reconstitution water.

## Ranges by source, region, and variety

The dominant variance drivers are identical to powder formula (see [[ingredients/infant-formula-powder]]): base-ingredient class (cow-milk vs soy vs hydrolysate vs amino-acid), source market (regulatory regime), historical generation (post-2020 vs pre-2010), and brand/manufacturer.

RTF-specific consideration: the manufacturing water source. RTF formula uses purified water at the bottling plant; high-Pb municipal water at the plant location would contribute to product Pb. Commercial RTF manufacturers use water-treatment systems (reverse osmosis, deionization) that remove Pb effectively, but the source-water specification is an ongoing QC concern.

## Processing effects

RTF formula manufacturing involves: ingredient combining (protein base, fat blend, carbohydrate, vitamin-mineral premix, water), homogenization, heat treatment (UHT or retort sterilization for shelf-stability), packaging into ready-to-feed bottles or cartons. The processing does not change source-ingredient metal load; the manufacturing water is the variable input.

UHT and retort processing does not change panel metals. Aseptic packaging is the dominant format for shelf-stable RTF; can-lined retort packaging adds the standard tinplate-Sn-migration consideration.

## Ingredient-derivative risk

RTF formula is itself a finished retail product. Concentrated liquid formula (different format, ~50 percent concentrate; see [[ingredients/infant-formula-concentrated-liquid]]) sits between powder and RTF in format.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the per-ingredient stage identically to powder formula (see [[ingredients/infant-formula-powder]]). The RTF-specific addition is plant-water-source specification.

**Agronomic, Processing, Formulation levers** are identical to powder formula at the per-ingredient stage.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, iAs testing on finished RTF formula. The EU 10 ppb Pb ML for prepared-for-feeding (powder converted to as-fed liquid) applies directly to RTF.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned RTF (uncommon in modern markets) and food-contact-substance compliance for plastic and carton formats.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Pb at 0.010 mg/kg (10 ppb) RTF liquid; Cd at 0.005 mg/kg (5 ppb); iAs at 0.020 mg/kg (20 ppb); Hg at 0.020 mg/kg (20 ppb) for infant formula.
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero iAs framework applies to rice-containing formula.
- Codex Alimentarius CXS 72-1981 and CXS 156-1987 — infant formula composition standards.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant formula yields stringent serving-based screen.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
