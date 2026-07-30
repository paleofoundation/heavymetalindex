---
title: "Vegetable Purees"
type: ingredient
commodity: vegetable-purees
label: "Vegetable Purees"
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
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Vegetable Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 2 claims checked, 2 supported; 3 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming vegetable-purees: collado-lopez2025-heavy-metals-baby-food-formula, houlihan2019-hbbf-whats-in-baby-food, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 1 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.00 | — |

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

Vegetable purees inherit heavy metals from the source vegetables. The Cat 1 Step 0 lock splits vegetable purees into two row categories based on source-vegetable Cd/Pb accumulation:

**[[products/root-vegetable-purees]]** — carrot, sweet potato, potato, beet, parsnip, turnip puree. Root vegetables accumulate Cd and Pb from soil at moderate efficiency (see [[ingredients/carrots]], [[ingredients/sweet-potato]], [[ingredients/root-vegetables]]). This row carries the higher Cd loading.

**[[products/non-root-vegetable-purees]]** — spinach, kale, broccoli, peas, green-bean, squash, zucchini, tomato puree. Non-root vegetables include leafy greens (high-Cd-accumulator) and non-leafy non-root vegetables (lower-Cd-accumulator). Spinach specifically is at the upper end and is split as a Cat 4 higher-contamination row (see [[ingredients/spinach]]).

The HMTc panel concerns for vegetable purees are dominantly Cd and Pb, with subcategory variance driven by source-vegetable choice. The infant exposure pathway concentrates per-body-weight intake.

## Ranges by source, region, and variety

Root vegetable purees: carrot puree typically dominates per-volume Cd among single-ingredient root-vegetable purees because carrots are moderate Cd accumulators and carrot puree is the most common single-ingredient infant root-vegetable product. Sweet potato and potato purees carry lower Cd typically. Spinach and leafy-green purees carry the highest Cd among non-root vegetable purees because of the leafy-green Cd-accumulation pathway.

[[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]] and [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019 (HBBF)]] characterize Spanish-market and US-market baby food vegetable purees respectively.

## Processing effects

Vegetable puree processing (washing, peeling for root vegetables, blanching, pureeing, heat treatment, packaging) does not change source-vegetable metal content meaningfully. Washing and peeling at the manufacturer stage remove surface-deposited Pb for root vegetables (see [[ingredients/carrots]] for the washing-and-peeling discussion). Blanching does not reduce panel metals. Heat treatment for shelf-stability does not change panel metals.

## Ingredient-derivative risk

Vegetable purees are themselves finished retail products. Concentrated vegetable puree (used as flavor or color in compounded products) carries elevated per-mass metal. Vegetable-puree-based finished products (vegetable pouches, vegetable-and-meat combinations, vegetable-and-grain combinations) inherit the source-puree profile proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Vegetable-source-region sourcing from documented low-Cd-Pb production areas, hydroponic-or-greenhouse sourcing for leafy-green-containing purees, and supplier soil verification.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the upstream vegetable-production stage (see per-vegetable ingredient pages).

**Processing levers** ([[mitigation/processing]]) include washing and peeling for root vegetables (effective for surface-deposited Pb), blanching-water-discard (small additional fraction).

**Formulation levers** ([[mitigation/formulation]]) include vegetable-species substitution (substituting lower-Cd-accumulator vegetables for spinach in spinach-containing infant pouches reduces per-serving Cd substantially), vegetable-percentage adjustment, and single-vegetable vs mixed-vegetable formulation choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and Pb testing on finished vegetable purees, particularly for infant-targeted products. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include pouch and jar material specifications.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action levels for processed baby foods: 10 ppb for non-root-vegetable purees, 20 ppb for single-ingredient carrot or sweet-potato root-vegetable purees.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Cd and Pb maximum levels for infant-and-young-child vegetable-based foods. Spinach-specific Cd ML applies to spinach purees.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Cd and Pb MADLs applied to vegetable purees sold in California.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. (2025). *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*. Nutrition Reviews. [https://doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138). Peer-reviewed, A-tier. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Source record]]
2. Jane Houlihan and Charlotte Brody (2019). *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*. Healthy Babies Bright Futures. [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food). Nonprofit, B-tier. [[sources/houlihan2019-hbbf-whats-in-baby-food|Source record]]
3. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [378d999f9](https://github.com/paleofoundation/heavymetalindex/commit/378d999f9) | 2026-05-17 | minor | Narrative text revised |
| [a7179d2c8](https://github.com/paleofoundation/heavymetalindex/commit/a7179d2c8) | 2026-05-17 | major | 3 sources added; narrative text revised |
<!-- END: hmi-page-history -->
