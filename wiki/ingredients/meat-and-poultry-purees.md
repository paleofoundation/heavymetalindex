---
title: "Meat And Poultry Purees"
type: ingredient
commodity: meat-and-poultry-purees
label: "Meat And Poultry Purees"
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
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 1
---

# Meat And Poultry Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | below-tier | 1 jurisdictions, top JP 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 1 claims checked, 1 supported; 3 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming meat-and-poultry-purees: chekri2019-french-infant-toddler-tds-trace-elements, houlihan2019-hbbf-whats-in-baby-food, codex-cxs-193-1995 |
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

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. (2019). *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*. Journal of Food Composition and Analysis. [https://doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002). Peer-reviewed, A-tier. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Source record]]
2. Jane Houlihan and Charlotte Brody (2019). *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*. Healthy Babies Bright Futures. [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food). Nonprofit, B-tier. [[sources/houlihan2019-hbbf-whats-in-baby-food|Source record]]
3. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | JP tHg, MeHg occurrence in 260 children aged 0–5 years from the Pacific side of Tohoku, Japan, providing 276 24-hour dietary duplicate samples... (n=276) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Meat-and-poultry purees (Cat 1 baby food) inherit their heavy-metal load from the source meat or poultry (see [[ingredients/beef]], [[ingredients/poultry]], [[ingredients/ham]], [[ingredients/turkey]], [[ingredients/chicken]]). The pureeing process combines muscle (and sometimes a small fraction of organ meat) with water, vegetables, or grain into a smooth texture for infant feeding. Commercial baby-food meat purees typically use muscle-only (avoiding organ-Cd), with chicken and turkey as the dominant species and beef and lamb less common.

The HMTc panel concerns are dominantly Pb (from source meat and from any added vegetable or grain ingredients) and Cd (from source meat, with organ-meat-free formulation reducing this contribution). Mercury is not a meat-and-poultry-puree concern because terrestrial herbivores do not bioaccumulate MeHg.

## Ranges by source, region, and variety

Per-species: Chicken puree carries lower per-mass metal than beef puree from the same region (younger animals, shorter exposure). Turkey puree similarly. Lamb puree from certain regions can carry elevated Pb from grazing-pasture contamination.

[[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]] characterizes French infant-toddler TDS including meat-and-poultry purees. [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019 HBBF]] covers US-market baby food meat purees.

Production-system variance: Grass-fed and pasture-raised meat purees from documented clean-pasture regions carry lower Pb than feedlot-finished or industrial-feed meat purees from regions with documented feed-contamination.

## Processing effects

Meat-and-poultry puree manufacturing (slaughter, deboning, mechanical separation or cubing, cooking, blending with water/vegetable/grain, pureeing, packaging) does not change source-meat metal content. Cooking concentrates per-mass metal slightly through water loss but per-jar total metal is approximately conserved. The added water or vegetable fraction in the puree dilutes the per-mass concentration relative to source meat.

## Ingredient-derivative risk

Meat-and-poultry purees are themselves finished retail products. Toddler meal products combining meat puree with grain or vegetable bridge into Cat 1 toddler-bridging scope and Cat 7 adult-mixed-meal scope as the marketing-age boundary is crossed.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include single-source-region meat sourcing from documented low-Pb production areas (grass-fed regions, clean-feed-source operations), muscle-only specification (avoiding organ-Cd contribution), and supplier-feed-source verification.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the upstream meat-production stage.

**Processing levers** ([[mitigation/processing]]) include cooking-method specification and water-vs-broth dilution in the puree formulation.

**Formulation levers** ([[mitigation/formulation]]) include species choice (chicken or turkey preferred over beef for lowest baseline metal load), muscle-only formulation, vegetable-or-grain dilution fraction adjustment.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and Cd testing on finished meat-and-poultry purees, particularly for products targeting infants under 12 months.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned meat purees and food-contact-substance compliance for pouch and jar formats.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action level of 10 ppb for processed meat baby foods.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Pb and Cd MLs for infant-and-young-child meat-based foods. Stricter than adult meat MLs.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to meat-and-poultry purees sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [ca4d87586](https://github.com/paleofoundation/heavymetalindex/commit/ca4d87586) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
