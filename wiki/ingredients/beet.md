---
title: "Beet"
type: ingredient
commodity: beet
label: "Beet"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 35]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 15]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
used_in_products: [root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 7
---

# Beet

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 2/10 HMTc analytes, total n=4 | only 2/10 analytes have evidence |
| D2 Regional coverage | OK | 5 jurisdictions, top PL 43% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming beet: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd; pairing 0 paired, 2 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5–35 | low | [[sources/katebe2024-vegetables-lubumbashi\|1]], [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|2]] |
| Cd | n=2 | 5–15 | low | [[sources/katebe2024-vegetables-lubumbashi\|1]], [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|2]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2025). *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*. U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program. [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children). Government guidance, A-tier. [[sources/fda-ctz-Pb-babyfood-2025|Source record]]
2. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 3 | [[sources/katebe2024-vegetables-lubumbashi\|Katebe et al. 2024]]. *Application of soil amendments to reduce the transfer of trace metal elements from contaminated soils of Lubumbashi (Democratic Republic of the Congo) to vegetables*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CD Pb, Cd, tAs occurrence in Greenhouse pot experiment; four vegetable species (Brassica chinensis, Amaranthus vulgaris, Beta vulgaris, Brassica carinata) grown on soils from... (n=60) |
| 4 | [[sources/brzezinska-rojek2023-beetroot-supplements-safety\|Brzezinska-Rojek et al. 2023]]. *Evaluation of the Safety and Potential Benefits of Beetroot-Based Dietary Supplements According to Their Elemental Composition*, Biological Trace Element Research (published online 7 October 2023) | 2023 | Peer-reviewed | Cd, Pb, and Al in 37 beetroot dietary supplements (tablets, capsules, powders) from Polish market by MP-AES; Cd exceeded PTMI in 5 products; Pb BDL in all |
| 5 | [[sources/kiczorowski2022-fermented-vegetables-metals\|Kiczorowski et al. 2022]]. *Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition*, Scientific Reports | 2022 | Peer-reviewed | PL Pb, Cd occurrence in Raw and fermented broccoli, carrot, cucumber, pepper, and red beet, four repetitions per vegetable combination (n=40) |
| 6 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 7 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Beet (Beta vulgaris) is a root vegetable cultivated for the swollen taproot (red beet, sugar beet, gold beet). Beets are documented moderate-to-strong accumulators of [[metals/cadmium|Cd]], [[metals/lead|Pb]], and trace [[metals/nickel|Ni]] via soil-uptake at the root-soil interface, with the taproot acting as the primary metal-accumulation organ. The deep tap-root growth habit places the root directly in contact with subsurface soil where legacy Pb-contaminated deposits often concentrate, elevating per-mass Pb in beets grown in industrial or urban-legacy soils. Beet leaves (used as beet greens and Swiss chard, which is the same species selected for leaf production) accumulate Cd and Pb via the leafy-vegetable pathway and carry separately elevated profiles per [[ingredients/leafy-greens|leafy greens]].

The HMTc panel concerns for beet are Cd (dominant soil-uptake driver), Pb (legacy-soil contamination, particularly in urban-and-industrial production), and trace Ni. Beet routes into [[products/root-vegetable-purees|root-vegetable-purees]] for infant feeding and into beet juice, pickled beet, beet powder, and (for sugar beets) refined sugar production.

## Ranges by source, region, and variety

Variance within beet tracks source-region soil profile (industrial-region or urban-garden production carries elevated Pb; agricultural-region commercial production sits at moderate baseline; certified-clean-soil production sits at lower baseline), cultivar (red beet, sugar beet, gold beet, Chioggia, and Detroit Dark Red carry slightly different metal-accumulation profiles), and harvest age (older beets sitting longer in soil accumulate proportionally more metals). The broader [[ingredients/vegetables|vegetables]] page corpus documents the geographic spread; the [[ingredients/root-vegetable-purees|root-vegetable-purees]] page covers the infant-puree market subset.

## Processing effects

Beet processing for fresh-market consumption involves washing, trimming, and storage; metal load is essentially the field-harvest level. Industrial beet processing for canning, freezing, or pickling involves washing, peeling, cooking, and packaging; peeling removes a substantial fraction of root-surface-deposited Pb (peeling reduces Pb by 30-50% on root vegetables). Beet juice manufacturing presses fresh or lightly-blanched beets and concentrates per-mass metals in the juice fraction relative to whole-beet wet weight. Beet powder (dehydrated beet products used in nutritional supplements, smoothie blends, and natural-color applications) concentrates per-mass metals via moisture removal (typically 8-10× concentration). Sugar beet processing involves extracting sucrose from sugar beets via diffusion, carbonatation, and crystallization; the refined sugar product carries trace residual metals at much lower levels than the source beet because the carbonatation step precipitates and removes most heavy metals.

## Ingredient-derivative risk

Beet derivatives span fresh and frozen beet, canned beet, pickled beet, beet juice, beet powder (concentrated), and (for sugar beet) refined sugar (per [[ingredients/white-sugar|white sugar]], at low metal levels). Beet powder in particular carries per-mass metals at concentrated levels because of the moisture-removal factor and is consumed in functional-food and supplement contexts where per-serving doses can be substantial. Beet greens (the leafy tops) carry the leafy-vegetable Cd/Pb profile and route to [[ingredients/leafy-greens|leafy greens]] when consumed as a separate product.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Geographic-segmented sourcing from documented low-soil-Pb production regions; supplier-soil verification for beet farms (testing for legacy industrial or urban-garden contamination); and contractual specification of Pb/Cd ceiling on incoming beet supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the beet-cultivation stage. Soil pH management (raising pH from 5.5 to 6.5-7.0 reduces Cd plant availability substantially); soil amendments (biochar, lime); cultivar selection (some sugar-beet cultivars are documented lower Cd accumulators); rotation away from Cd-accumulating crops in known-contaminated soils; and remediation of urban-and-industrial soils for high-risk production sites.

**Processing levers** ([[mitigation/processing]]) include peeling (substantial Pb reduction on root surface), washing optimization, and avoidance of older soldered cans for canned beet products.

**Formulation levers** ([[mitigation/formulation]]) include substituting beet with lower-Pb root vegetables (carrot, sweet potato) in mixed-meals products where the matrix permits; reducing the beet fraction in root-vegetable purees.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Ni testing on incoming beet supply and finished beet products. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned beet; aseptic or glass packaging eliminates Sn migration; standard storage-condition specifications apply.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for root vegetables: Pb 100 ppb, Cd 100 ppb (root and tuber vegetables). These apply to beet.
- FDA Closer to Zero infant-food Pb action level: 20 ppb for root vegetable purees including beet-containing purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets root-vegetable category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to beet products sold in California.
- EU Sn-in-canned-food regulation sets 200 mg/kg for canned vegetables including canned beet, 50 mg/kg for canned infant food.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [2d94f57a2](https://github.com/paleofoundation/heavymetalindex/commit/2d94f57a2) | 2026-05-17 | major | 2 sources added; narrative text revised |
| [e3c860eb5](https://github.com/paleofoundation/heavymetalindex/commit/e3c860eb5) | 2026-05-17 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
