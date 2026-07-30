---
title: "Root Vegetable Purees"
type: ingredient
commodity: root-vegetable-purees
label: "Root Vegetable Purees"
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
    typical_ppb: [0.433, 5]
    p95_ppb: 5
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
  tAs:
    status: populated
    typical_ppb: [0.053, 12]
    p95_ppb: 12
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
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
used_in_products: [root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Root Vegetable Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=6 | only 3/10 analytes have evidence |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Cd THIN, tHg THIN, tAs THIN | Cd: needs 1 more study(ies); tHg: needs 1 more study(ies); tAs: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming root-vegetable-purees: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | OK | 1 cited lever(s), 6 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Cd, tHg, tAs |
| D11 Standards-readiness | NOT-READY | priority: Cd, tHg, tAs; pairing 0 paired, 3 single, 0 unpaired | Cd: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | n=2 | 0.433–5 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0.053–12 | low | — |
| tHg | n=2 | 0–1.5 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Root vegetable purees is the aggregate ingredient label for infant-and-toddler purees made from root-vegetable bases including [[ingredients/carrots|carrots]], sweet potatoes, [[ingredients/beet|beets]], parsnips, white potatoes, and similar tuber-and-root crops. Root vegetables accumulate [[metals/lead|Pb]] at the soil-root interface and [[metals/cadmium|Cd]] via cortical uptake during plant growth; this is documented in detail on the [[ingredients/vegetables|vegetables]] aggregate page. Root-vegetable purees inherit the source-vegetable metal profile, with Pb particularly concentrated relative to non-root vegetables because root vegetables grow directly in soil where legacy Pb-contamination concentrates.

The FDA Closer to Zero baby-food Pb action level differentiates root vegetable purees (20 ppb Pb) from non-root vegetable purees (10 ppb Pb) specifically because root vegetables carry the higher baseline Pb from soil-contact. The HMTc panel concerns for root vegetable purees are Pb (dominant), Cd, and trace iAs (in root vegetables grown in As-affected regions). Routes into [[products/root-vegetable-purees|root-vegetable-purees]] (Cat 1 row for infant root-vegetable products).

## Ranges by source, region, and variety

Variance within root vegetable purees tracks the source-vegetable mix (carrot-only vs sweet-potato-only vs mixed-root-vegetable formulations), source-region soil profile (industrial-region or urban-garden production carries elevated Pb; commercial agricultural production sits at moderate baseline; certified-clean-soil production sits at lower baseline), and processing tier. Carrot-based purees are the most common single-vegetable infant product; sweet potato is the second-most-common; beet, parsnip, and white potato purees are less common.

## Processing effects

Root-vegetable puree manufacturing involves washing, peeling (substantial Pb reduction by removing surface-deposited Pb), cooking, pureeing, and packaging (jar, pouch, or aseptic carton). Peeling is the dominant processing-stage mitigation lever for root-vegetable Pb; the peeled-and-cooked puree carries substantially lower per-mass Pb than the unpeeled raw vegetable. Sterilization (retort processing for jarred and pouched products) does not affect metals.

## Ingredient-derivative risk

Root vegetable purees route into Cat 1 row [[products/root-vegetable-purees|root-vegetable-purees]] as the primary infant feeding product family. Derivatives include single-vegetable purees (carrot puree, sweet potato puree, beet puree) and mixed-root-vegetable purees. Mixed-meals products containing root vegetables alongside grains, proteins, or other ingredients dilute the per-product root-vegetable metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-vegetable origin specification favoring documented low-soil-Pb production regions; supplier-soil verification programs; and contractual Pb/Cd ceiling on incoming root vegetables for infant-product manufacturers operating to tight specifications.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the root-vegetable cultivation stage. Soil pH management; soil amendments (biochar, lime); cultivar selection; remediation of urban-and-industrial production sites.

**Processing levers** ([[mitigation/processing]]) include thorough peeling for maximum Pb reduction; washing optimization; and avoidance of equipment-cleaning chemicals that could introduce metals.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of higher-Pb root vegetables (beet) with lower-Pb alternatives (carrot, sweet potato) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on finished root-vegetable purees against FDA Closer to Zero 20 ppb Pb action level for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include glass-jar, pouch, or aseptic-carton packaging (modern infant-food packaging); avoidance of older soldered or unlined-metal storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child foods.
- FDA Closer to Zero baby-food Pb action level: 20 ppb for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to root-vegetable-puree products sold in California.

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
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [7b3c5c5db](https://github.com/paleofoundation/heavymetalindex/commit/7b3c5c5db) | 2026-05-31 | major | Contamination-profile values revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
