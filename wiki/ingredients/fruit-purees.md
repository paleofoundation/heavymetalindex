---
title: "Fruit Purees"
type: ingredient
commodity: fruit-purees
label: "Fruit Purees"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.036, 4.02]
    p95_ppb: 5.24
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-30
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
    typical_ppb: [0.056, 5]
    p95_ppb: 5
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-30
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
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 1
---

# Fruit Purees

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

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | WanaBana apple-cinnamon fruit puree pouch Pb outbreak from intentional Ecuadorian cinnamon adulteration with finished product at 1.9–3.0 ppm Pb |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Fruit purees inherit heavy metals from the source fruit (see [[ingredients/fruits]] and per-fruit pages like [[ingredients/apple]], [[ingredients/banana]], [[ingredients/peach]], [[ingredients/pear]], [[ingredients/mango]]). The pureeing process does not change total source-fruit metal load; it homogenizes the source fruit into a smooth texture suitable for infant feeding. Apple, pear, and banana are the most common infant-fruit-puree ingredients in commercial Cat 1 product lines; berry purees and mango/peach purees are common premium variants.

The dominant metal-load contributor in fruit purees is Pb from soil-uptake and atmospheric-deposition pathways at the source orchard. Apple specifically carries a legacy iAs concern from historic lead-arsenate-pesticide orchards (though the iAs in apple is generally lower than in apple juice because juicing concentrates the metal); see [[ingredients/apple]]. Cd in fruit purees is generally low.

The HMTc panel concerns for fruit purees are dominantly Pb, with iAs as a secondary concern for apple-containing products and Cd as a minor concern.

## Ranges by source, region, and variety

Fruit puree metal load tracks the source fruit. Apple purees carry the highest Pb among common fruit-puree species, particularly apples from regions with historic lead-arsenate pesticide use. Pear purees from cleaner orchards carry lower Pb. Banana purees (from tropical-soil-grown bananas in Central and South America) carry low Pb across the board. Peach and apricot purees can carry trace Cd from stone-fruit-specific pathways.

[[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]] is the broad baby-food + fruit puree synthesis source documenting Spanish-market fruit baby food. [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]] (HBBF) characterized US-market baby food including fruit purees.

## Processing effects

Fruit puree processing (washing, peeling, coring, pureeing, heat treatment for shelf-stability, pH adjustment, packaging) does not change total source-fruit metal content meaningfully. Washing and peeling at the manufacturer stage remove surface-deposited Pb (relevant for tree fruits grown in atmospheric-Pb regions). Heat treatment for retort sterilization or aseptic packaging does not change panel metals.

Fortification additives (vitamin C, citric acid, mineral additives) can contribute trace metals at parts-per-billion levels depending on supplier specification.

## Ingredient-derivative risk

Fruit purees are themselves finished retail products targeting infant and toddler markets. Concentrated fruit puree (used as flavor or color in compounded products) carries elevated per-mass metal because water has been removed.

Fruit-puree-based finished products (fruit pouches, fruit-and-veggie pouches, fruit-and-yogurt combinations) inherit the source-fruit-puree profile proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-origin sourcing from documented low-Pb production regions, fruit-supplier soil-Pb verification (especially for apples and pears from legacy-orchard regions), and avoidance of lead-arsenate-history orchards.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the orchard level (see [[ingredients/fruits]]).

**Processing levers** ([[mitigation/processing]]) include washing and peeling at the manufacturer stage, which removes surface-deposited Pb effectively.

**Formulation levers** ([[mitigation/formulation]]) include fruit-species substitution (substituting banana or pear puree for apple puree reduces Pb), single-fruit vs mixed-fruit formulation, and added-ingredient minimization.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb testing on finished fruit purees, particularly for apple-containing products targeted at infants. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include jar-and-foil-cap specification, pouch-material specification, and food-contact-substance compliance.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action level for processed baby foods covers fruit purees at 10 ppb Pb.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child fruit-based foods.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to fruit purees sold in California; the serving-based screen is stringent for infant-targeted products.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [88d0a47](https://github.com/paleofoundation/heavymetalindex/commit/88d0a47) | 2026-05-30 | autonomy: checkpoint [deterministic-phase] 2026-05-30T03-41-54Z |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
