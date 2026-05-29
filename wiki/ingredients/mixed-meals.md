---
title: "Mixed Meals"
type: ingredient
commodity: mixed-meals
label: "Mixed Meals"
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
used_in_products: [mixed-meals-non-rice, mixed-meals-rice-containing]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Mixed Meals

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

This node is linked from [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Mixed meals (infant and toddler meal-combinations including meat-and-grain, vegetable-and-grain, fruit-and-vegetable, or similar combinations) inherit their heavy-metal load from the weighted sum of source ingredients. The metal profile is therefore driven by whichever ingredient in the mix is highest-loaded for each panel analyte: rice-containing meals carry rice iAs (see [[ingredients/rice]]); meat-containing meals carry the source-meat profile (see [[ingredients/beef]], [[ingredients/poultry]]); vegetable-containing meals carry the vegetable profile.

The Cat 1 Step 0 lock splits mixed meals into rice-containing and non-rice rows ([[products/mixed-meals-rice-containing]] vs [[products/mixed-meals-non-rice]]) because the rice-iAs question dominates the certification framing.

The HMTc panel concerns for mixed meals are dominantly Pb (cumulative from each ingredient) and iAs (rice-containing meals); Cd is generally moderate from vegetable and meat sources. The infant exposure pathway concentrates per-body-weight intake even when individual ingredient concentrations are moderate.

## Ranges by source, region, and variety

Rice-containing mixed meals carry the rice-iAs distribution proportional to the rice fraction in the recipe (typically 5-30 percent rice by mass in a mixed meal). Non-rice mixed meals carry combined-source profiles dominated by the dominant grain or vegetable.

Meat-and-grain combinations: lamb-and-rice, beef-and-noodle, chicken-and-rice products carry combined Pb (from meat) and iAs (from rice if present). [[ingredients/beef]], [[ingredients/poultry]], [[ingredients/rice]] address the source-ingredient profiles.

Vegetable-and-grain combinations: vegetable-and-rice, mixed-vegetable-and-quinoa carry combined Pb/Cd (from vegetables) and source-grain Cd.

## Processing effects

Mixed-meal manufacturing (combining ingredients, cooking, pureeing or chunking, packaging) does not change source-ingredient metal content. The cooking step (with or without water-discard) follows the same metal-removal profile as the dominant source ingredient.

For shelf-stable mixed-meal products (canned, jarred, pouched), the processing and packaging considerations follow the individual ingredient profiles plus packaging-specific metal-migration considerations (Sn for canned, food-contact-substance compliance for plastic and pouch).

## Ingredient-derivative risk

Mixed meals are themselves finished retail products; their derivatives are warmed-and-served preparations rather than further ingredient transformations. Mixed-meal-style ready-meals targeting older children and adults inherit the source-ingredient profiles with regulatory framework shifting from Cat 1 (infant) to Cat 7 (mixed meals / prepared foods).

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the per-ingredient level: low-iAs rice, low-Pb meat, low-Cd vegetables. Composite-recipe sourcing decisions can substantially shift the mixed-meal metal load by adjusting which ingredient contributes the most-loaded fraction.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the upstream per-ingredient stage; not at the mixed-meal-manufacturing stage directly.

**Processing levers** ([[mitigation/processing]]) include cooking-method specifications and recipe formulation choices.

**Formulation levers** ([[mitigation/formulation]]) are the dominant mixed-meal-side intervention: rice substitution (oat or wheat instead of rice in toddler meals), vegetable-percentage adjustment, meat-vs-poultry choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and iAs testing on finished mixed meals, particularly for products targeting children under 2.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned mixed meals and food-contact-substance compliance for plastic and pouch formats.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action level for processed baby foods covers mixed meals at 10-20 ppb depending on subcategory.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child mixed foods. iAs MLs for rice-containing baby foods apply.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply to mixed-ingredient foods through the source-ingredient framework.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant mixed meals yields stringent serving-based screen.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [a7179d2](https://github.com/paleofoundation/heavymetalindex/commit/a7179d2) | 2026-05-17 | synthesis: 5 Cat 1 infant ingredient nodes — baby-cereals-dry, mixed-meals, fruit-purees, vegetable-purees, fish-containing-baby-foods |
| [e3c860e](https://github.com/paleofoundation/heavymetalindex/commit/e3c860e) | 2026-05-17 | sections: autofill 76 ingredient + 6 product pages missing mandatory H2 structure |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
<!-- END: hmi-page-history -->
