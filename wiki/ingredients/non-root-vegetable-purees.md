---
title: "Non-root vegetable purees"
type: ingredient
commodity: non-root-vegetable-purees
label: "Non-root vegetable purees"
aliases: [vegetable puree, squash puree, pea puree]
category: vegetable-preparation
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
    typical_ppb: [0.016, 1.5]
    p95_ppb: 1.51
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  tHg:
    status: populated
    typical_ppb: [0, 1.5]
    p95_ppb: 1.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
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
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Non-root Vegetable Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=6 | only 3/10 analytes have evidence |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Cd THIN, tAs THIN, tHg THIN | Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming non-root-vegetable-purees: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | OK | 1 cited lever(s), 6 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Cd, tAs, tHg |
| D11 Standards-readiness | NOT-READY | priority: Cd, tAs, tHg; pairing 0 paired, 3 single, 0 unpaired | Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node for non-root vegetable puree inputs. Ingredient-level values belong here once parsed; finished-product values belong on [[products/non-root-vegetable-purees]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | n=2 | 0.016–1.5 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5 | low | — |
| tHg | n=2 | 0–1.5 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Non-root vegetable purees is the aggregate ingredient label for infant-and-toddler purees made from non-root-vegetable bases including [[ingredients/squash|squash and pumpkin]], green beans, [[ingredients/leafy-greens|leafy greens]] (spinach, peas), cauliflower, broccoli, [[ingredients/cucumbers|cucumber]], zucchini, and similar fruit-vegetables and aerial vegetables. Non-root vegetables sit at lower per-mass [[metals/lead|Pb]] than root vegetables because they do not grow in direct soil-contact, but leafy non-root vegetables (spinach, kale, peas) can carry elevated [[metals/cadmium|Cd]] via the leafy-vegetable accumulation pathway documented on [[ingredients/leafy-greens|leafy-greens]].

The FDA Closer to Zero baby-food Pb action level differentiates non-root vegetable purees (10 ppb Pb) from root vegetable purees (20 ppb Pb) — the tighter limit on non-root reflects the lower baseline plus consumer expectation of lower contamination. The HMTc panel concerns for non-root vegetable purees are Cd (notably in leafy-green-containing formulations like spinach puree, green-pea puree), trace Pb, and trace iAs. Routes into [[products/non-root-vegetable-purees|non-root-vegetable-purees]] (Cat 1 row for infant non-root-vegetable products).

## Ranges by source, region, and variety

Variance within non-root vegetable purees tracks the source-vegetable mix (squash-only vs spinach-only vs mixed-vegetable formulations), source-region soil profile, and processing tier. Squash and butternut purees sit at the lower end of the non-root vegetable Pb/Cd range. Leafy-green purees (spinach, kale, pea) sit at the higher end, particularly for Cd.

## Processing effects

Non-root-vegetable puree manufacturing involves washing, cooking, pureeing, and packaging. Washing reduces surface-deposited Pb. Cooking does not reduce internalized metals (Cd in leafy tissue). Pureeing concentrates per-mass metals slightly via water-content reduction. Sterilization (retort processing for jarred and pouched products) does not affect metals.

## Ingredient-derivative risk

Non-root vegetable purees route into the Cat 1 row [[products/non-root-vegetable-purees|non-root-vegetable-purees]] product family. Derivatives include single-vegetable purees (squash puree, spinach puree, green-bean puree) and mixed-vegetable purees. Mixed-meals products containing non-root vegetables alongside grains, proteins, or other ingredients dilute the per-product metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-vegetable origin specification; supplier-soil verification programs (particularly for leafy-vegetable suppliers); greenhouse-and-hydroponic production specification where the matrix permits; and contractual Pb/Cd ceiling on incoming non-root vegetables.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the non-root-vegetable cultivation stage. Soil pH management; soil amendments; cultivar selection (low-Cd-accumulating spinach and pea cultivars are documented).

**Processing levers** ([[mitigation/processing]]) include washing optimization for surface-Pb removal; processing-equipment material specification.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of higher-Cd leafy-vegetable bases (spinach) with lower-Cd alternatives (squash, green beans) where the matrix permits; reducing the leafy-vegetable fraction in mixed-non-root-vegetable formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on finished non-root-vegetable purees against FDA Closer to Zero 10 ppb Pb action level for non-root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include modern glass-jar, pouch, or aseptic-carton packaging.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child foods.
- FDA Closer to Zero baby-food Pb action level: 10 ppb for non-root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to non-root-vegetable-puree products sold in California.

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
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [7b3c5c5db](https://github.com/paleofoundation/heavymetalindex/commit/7b3c5c5db) | 2026-05-31 | major | Contamination-profile values revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [801565b9b](https://github.com/paleofoundation/heavymetalindex/commit/801565b9b) | 2026-05-17 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
