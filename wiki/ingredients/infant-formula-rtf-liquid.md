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
sources: 1
---

# Infant Formula Rtf Liquid

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

This node is linked from [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta\|Saraiva et al. 2021]]. *Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products*, Talanta 222 (2021) 121538 | 2021 | Peer-reviewed | FR/DK Cr, Cr-VI occurrence in Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL... (n=3) |
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
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
