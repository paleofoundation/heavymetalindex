---
title: "Sports drink bases"
type: ingredient
commodity: sports-drink-bases
label: "Sports drink bases"
aliases: [electrolyte drink base, energy drink base]
category: beverage-ingredient
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
used_in_products: [sports-energy-drinks]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Sports drink bases

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

This node is linked from [[products/sports-energy-drinks]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Sports drink bases is the aggregate ingredient label for the formulation ingredients in commercial sports drinks (Gatorade, Powerade, electrolyte-replenishment drinks). The formulation includes sweetener (sucrose, dextrose, or HFCS), electrolytes (sodium chloride, potassium chloride, calcium-and-magnesium salts), flavoring, color, and water. Heavy-metal load comes from four pathways: source-sweetener inheritance (per [[ingredients/white-sugar|white sugar]] or HFCS); electrolyte-salt impurities (the sodium, potassium, calcium, and magnesium salt precursors can carry trace [[metals/lead|Pb]] and [[metals/cadmium|Cd]] from upstream mineral-extraction); flavoring and color concentrate impurities; and formulation-water quality. The HMTc panel concerns for sports drink bases are trace Pb and Cd at low levels, with the electrolyte-salt-supplier specification as the dominant variance driver.

## Ranges by source, region, and variety

Variance within sports drink bases tracks sweetener choice, electrolyte-salt supplier specifications, and formulation-water quality. Major brand commercial sports drinks operate to tight impurity specifications; emerging-market and craft sports drinks may carry higher metals.

## Processing effects

Sports drink manufacturing involves preparing a base syrup (sweetener + electrolytes + flavoring + color), diluting with treated water to finished-product strength, and packaging. Pasteurization (for non-aseptic packaging) or aseptic processing finishes the product. None of these steps appreciably introduce or remove metals beyond the input-ingredient profile.

## Ingredient-derivative risk

Sports drink bases route into the broader sports-drink product family (commercial bottled sports drinks, powder mixes that consumers reconstitute, ready-to-drink pouches). Each derivative carries the per-base profile.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include sweetener and electrolyte-salt supplier specifications at food-grade impurity tier; flavoring and color concentrate supplier specifications.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-sweetener cultivation stage (sugar cane, sugar beet, corn for HFCS).

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; formulation-water quality (RO purification).

**Formulation levers** ([[mitigation/formulation]]) include electrolyte-salt-source choice; sweetener choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming electrolyte salts and finished product.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include bottle/can-lining specification; PET and glass packaging eliminate metal-migration pathways.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set sports-drink-specific maximum levels; general EU food-safety law applies plus the lead-in-beverages context.
- FDA does not currently set quantitative action levels specific to sports drinks; general FDA enforcement applies.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets general beverage contaminant provisions.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to sports drink products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [9e37a44](https://github.com/paleofoundation/heavymetalindex/commit/9e37a44) | 2026-05-17 | synthesis: fermented + soft-drink + sports-drink bases + wine-vinegar — 6 narrative sections each |
<!-- END: hmi-page-history -->
