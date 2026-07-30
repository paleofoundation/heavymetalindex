---
title: "Teething And Snacks"
type: ingredient
commodity: teething-and-snacks
label: "Teething And Snacks"
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
used_in_products: [teething-and-snacks-non-rice, teething-and-snacks-rice-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Teething And Snacks

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
| D8 Provenance integrity | GAP | 1 claims checked, 1 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming teething-and-snacks: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | — |
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

This node is linked from [[products/teething-and-snacks-non-rice]], [[products/teething-and-snacks-rice-based]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Teething and snacks is the aggregate ingredient label for infant teething products and toddler snack foods consumed during the 6-month-to-3-year age range. The product family includes teething biscuits, rice-based teething wafers, freeze-dried fruit and vegetable snacks, cracker-style snacks, puff cereals, and yogurt-based melts. The dominant heavy-metal concern is [[ingredients/rice-puffs|rice-based]] teething and snack products, which inherit the source-rice [[metals/arsenic-inorganic|iAs]] profile documented on [[ingredients/rice-cereal|rice cereal]] and [[ingredients/rice-flour|rice flour]] pages. Non-rice teething-and-snack products (oat-based, fruit-and-vegetable-based, dairy-based) sit at substantially lower per-product iAs but carry their own per-ingredient profiles.

The high-frequency feeding context of teething-and-snacks products (consumed daily during weaning and toddler-feeding stages) elevates the per-day cumulative-exposure significance even at modest per-serving metal levels. The HMTc panel concerns for this category include iAs (rice-based products), Pb (across all infant products from vitamin-mineral-premix and source-ingredient inheritance), Cd (especially in fruit-vegetable-based snacks containing leafy or root-vegetable components), and Sn for canned snack products. Routes into [[products/teething-and-snacks-rice-based|teething-and-snacks-rice-based]] and the broader Cat 1 infant-food product family.

## Ranges by source, region, and variety

Variance within teething and snacks tracks ingredient composition (rice-based vs non-rice; fruit-based vs vegetable-based vs cereal-grain based), source-ingredient origin region, and product format (extruded puff vs freeze-dried whole-food snack vs cracker). Rice-based products dominate the iAs concern; non-rice products avoid that pathway but introduce other per-ingredient profiles.

## Processing effects

Teething-and-snacks manufacturing involves base-ingredient preparation (cooking, drying, or freeze-drying), forming (extrusion for puffs, pressing for crackers/wafers, baking for biscuits, freeze-drying for whole-food snacks), and packaging. The forming and finishing steps do not appreciably introduce or remove metals beyond the source-ingredient inheritance. Freeze-drying preserves the source-ingredient metal profile at concentrated per-mass levels. Extrusion produces puffed products that retain source-grain metals.

## Ingredient-derivative risk

Teething-and-snacks products route into the Cat 1 infant-and-young-child food family. Derivatives within this category span rice-based teething wafers, oat-based puff cereals, multigrain crackers, freeze-dried fruit and vegetable snacks, yogurt-and-fruit-based melts, and protein-bar-style toddler snacks. Each carries the source-ingredient metal profile.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant for teething-and-snacks given the high-frequency infant-feeding context. Source-ingredient specification (rice with low iAs per [[ingredients/rice|rice]]; non-rice alternatives where possible); supplier audit programs; and contractual Pb/Cd/iAs ceiling on incoming ingredients.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-ingredient cultivation stage; see [[ingredients/rice|rice]], [[ingredients/oat|oat]], and per-fruit-vegetable pages for upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; rinse-and-prep steps for source rice; equipment-cleaning protocols.

**Formulation levers** ([[mitigation/formulation]]) are dominant. Non-rice formulations (oat-based, fruit-and-vegetable-based, multigrain) substantially reduce iAs concern; reducing the rice fraction in mixed-ingredient products dilutes per-product iAs.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, iAs testing on finished teething-and-snacks products against FDA Closer to Zero infant-and-young-child food action levels.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; moisture-barrier packaging is standard for product quality.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant-and-young-child cereal-based foods including teething-and-snacks products.
- FDA Closer to Zero baby-food Pb action levels ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]): applicable to teething-and-snacks products.
- FDA Closer to Zero infant-rice-cereal iAs 100 ppb action level applies to rice-based teething products.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-and-young-child food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to teething-and-snacks products sold in California.

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2025). *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*. U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program. [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children). Government guidance, A-tier. [[sources/fda-ctz-Pb-babyfood-2025|Source record]]
2. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [801565b9b](https://github.com/paleofoundation/heavymetalindex/commit/801565b9b) | 2026-05-17 | major | 2 sources added; narrative text revised |
| [e3c860eb5](https://github.com/paleofoundation/heavymetalindex/commit/e3c860eb5) | 2026-05-17 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
