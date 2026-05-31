---
title: "Soft drink bases"
type: ingredient
commodity: soft-drink-bases
label: "Soft drink bases"
aliases: [carbonated beverage base, cola base]
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
used_in_products: [soft-drinks-carbonated-beverages]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Soft drink bases

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

This node is linked from [[products/soft-drinks-carbonated-beverages]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Soft drink bases is the aggregate ingredient label for the syrup-and-concentrate ingredients used in carbonated soft drinks (cola, lemon-lime, root beer, fruit-flavored sodas), including flavoring concentrates, sweetener syrups (high-fructose corn syrup, refined sugar syrup, or non-nutritive sweetener solutions), acidulants (phosphoric acid in cola, citric acid in citrus sodas), and color compounds (caramel coloring in cola). Heavy-metal load in soft drink bases comes from four pathways: source-sweetener inheritance ([[ingredients/white-sugar|sugar]] at low metal baseline; HFCS at slightly different baseline reflecting corn-source metals); flavoring-and-color concentrate impurities (some natural colorings, particularly older caramel coloring formulations, carry trace metals); acidulant impurities (phosphoric acid produced from phosphate rock can carry trace Pb and Cd from the source phosphate rock); and packaging migration (canned soft drinks introduce Sn from tinplate; bottled soft drinks in glass or PET avoid that pathway).

Soft drink concentrates and syrups can also carry trace metals from processing-equipment contact and from the formulation water. The HMTc panel concerns for soft drink bases are trace Pb (dominantly from phosphoric-acid acidulant and some colorings), trace Cd, and Sn from canned-product migration. Sugar-sweetened soft drinks have been a subject of FDA and Consumer Reports surveillance for As contamination in older formulations using As-derived raw materials, though current formulations have largely eliminated those pathways.

## Ranges by source, region, and variety

Variance within soft drink bases tracks sweetener choice (HFCS vs cane sugar vs non-nutritive sweetener — different baseline impurity profiles), acidulant choice (phosphoric acid carries more impurities than citric acid), color and flavoring source (natural vs artificial; certain natural-color concentrates from plant sources carry source-plant metals), and formulation-water quality (RO water is standard for major brand soft-drink production). Major brand commercial soft drinks operate to tight impurity specifications; emerging-market and craft soft drinks may carry higher metals.

## Processing effects

Soft drink manufacturing involves preparing the syrup concentrate (combining sweetener, flavoring, acidulant, color), diluting with carbonated water to finished-product strength, and packaging. The dilution step proportionally reduces per-mass metals from the concentrate. Carbonation does not affect metals. Packaging is the final processing step; aluminum-can packaging (with epoxy lining) is standard for canned soft drinks and minimizes Al-migration risk under modern can-stock specifications.

## Ingredient-derivative risk

Soft drink bases route into [[products/soft-drinks-carbonated-beverages|soft-drinks-carbonated-beverages]] product family. Derivatives include cola, lemon-lime soda, ginger ale, root beer, fruit-flavored carbonated beverages, and diet/zero-sugar variants. Each carries the per-base profile diluted by carbonated water and adjusted for any per-format additions.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include sweetener supplier specification ([[ingredients/white-sugar|refined sugar]] or HFCS at food-grade impurity tier); acidulant supplier specification (food-grade phosphoric acid with documented impurity limits, or citric acid as a lower-impurity alternative); flavoring and color concentrate supplier specification.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-ingredient cultivation stage (sugar cane, sugar beet for refined sugar; corn for HFCS); see [[ingredients/maize|corn]] and per-sweetener pages for upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; formulation-water quality (RO or equivalent purification standard).

**Formulation levers** ([[mitigation/formulation]]) include acidulant choice (citric vs phosphoric) and color/flavor concentrate substitution where impurity tier differs by supplier.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming sweetener, acidulant, and color concentrate, and on finished product. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (modern epoxy lining minimizes Al and Sn migration); glass and PET packaging eliminate metal-migration pathways entirely.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set soft-drink-specific maximum levels; general EU food-safety law applies plus the lead-in-beverages context.
- FDA does not currently set quantitative action levels specific to soft drinks; general FDA enforcement on toxic-element contamination applies.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets general beverage contaminant provisions.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to soft drink products sold in California.
- EU Sn-in-canned-food regulation sets 100 mg/kg maximum level for canned beverages including canned soft drinks.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
<!-- END: hmi-page-history -->
