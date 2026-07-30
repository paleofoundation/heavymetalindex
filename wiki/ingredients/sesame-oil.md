---
type: ingredient
commodity: sesame-oil
title: "Sesame Oil"
label: "Sesame Oil"
aliases: [sesame, sesame-seeds, tahini]
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [9, 17], p95_ppb: 17, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [5, 9], p95_ppb: 9, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [18, 91], p95_ppb: 124, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [seed-source, extraction-method, refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 14
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Sesame Oil

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=9 | only 3/10 analytes have evidence |
| D2 Regional coverage | OK | 24 jurisdictions, top IR 50% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 4 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | POOLABLE | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE | — |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 4 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming sesame-oil: codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd, tAs |
| D11 Standards-readiness | PARTIAL | priority: Pb, Cd, tAs; pairing 0 paired, 3 single, 0 unpaired | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.75 | spread 0.75 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 9–17 | medium | — |
| Cd | n=3 | 5–9 | medium | — |
| iAs | data gap | — | — | — |
| tAs | n=3 | 18–91 | medium | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

The 4 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Mehri F, Heshmati A, Talebi Ghane E, Khazaei M, Mahmudiono T, and Fakhri Y (2024). *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*. BMC Public Health. [https://doi.org/10.1186/s12889-023-17624-1](https://doi.org/10.1186/s12889-023-17624-1). Peer-reviewed, A-tier. [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Source record]]
2. Lee JG, Hwang JY, Lee HE, Kim TH, Choi JD, and Gang GJ (2019). *Effects of food processing methods on migration of heavy metals to food*. Applied Biological Chemistry. [https://doi.org/10.1186/s13765-019-0470-0](https://doi.org/10.1186/s13765-019-0470-0). Peer-reviewed, A-tier. [[sources/lee2019-food-processing-heavy-metals-migration|Source record]]
3. Ashraf MW (2012). *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*. Asian Journal of Chemistry (Uncorrected Proof). Peer-reviewed, A-tier. [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Source record]]
4. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 2 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr, Al, Cu, Zn, Fe, Mn, V, tHg occurrence in Systematic review of 35 studies meeting eligibility criteria (of 125 articles screened), including 7 studies on contaminants (PAHs... |
| 3 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 4 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | IR Pb, Cd, tAs, Fe, Zn occurrence in Traditional and industrial edible vegetable oils (peanut, sunflower, olive, sesame) from Hamadan, western Iran, 2022; n=20 traditional +... (n=40) |
| 5 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 6 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg, Al, Cu, Zn occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
| 7 | [[sources/kheirati-rounizi2021-sesame-oil-heavy-metals\|Rounizi et al. 2021]]. *The chemical composition and heavy metal content of sesame oil produced by different methods: A risk assessment study*, Food Science & Nutrition | 2021 | Peer-reviewed | IR tAs, Pb, Cd, Zn, Cu occurrence in Sesame seed plus three sesame-oil preparations: traditional Ardeh oil, cold-pressed virgin sesame oil, and refined sesame oil; samples... (n=4) |
| 8 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biological Chemistry | 2019 | Peer-reviewed | KR/LK Pb, Cd, tAs, Al occurrence in Korean market oilseeds (sesame, perilla, flaxseed), noodles (flour and glass), and teas (black, green, Solomon's seal) — 3... (n=27) |
| 9 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | SA Pb, Cd, tAs, Cu, Zn, Fe, Mn occurrence in 161 edible vegetable oil samples (32 corn, 28 sunflower, 21 soybean, 19 sesame, 17 rapeseed, 17 peanut, 27... (n=161) |
| 10 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 11 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Sesame oil is extracted from sesame seeds (Sesamum indicum), an aerial-fruiting oilseed cultivated dominantly in India, Sudan, Ethiopia, Myanmar, China, Tanzania, and Nigeria. Sesame plants are documented Cd accumulators — sesame seeds carry Cd at concentrations multiples higher than most other oilseeds when grown in moderately Cd-contaminated soils, and this profile partially partitions into the oil fraction during extraction. The Iranian Hamadan PTE survey ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri 2024]]), Korean food-processing migration study ([[sources/lee2019-food-processing-heavy-metals-migration|Lee 2019]]), and Saudi Arabia vegetable oils survey ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]]) collectively document sesame oil at Pb 9-17 ppb, Cd 5-9 ppb, and tAs 18-91 ppb across multiple regional markets.

The HMTc panel concerns for sesame oil are Cd (the sesame-plant accumulation signature), Pb (elevated relative to less-contaminated-region oils), and trace tAs in some emerging-market supply. The wide tAs range (18-91 ppb) reflects the contributing studies' coverage of multiple regional markets with different upstream supply quality.

## Ranges by source, region, and variety

Variance within sesame oil tracks source-sesame origin region (Ethiopian and Sudanese sesame production from regions with documented industrial-deposition or As-affected groundwater carries higher tAs; Indian and Chinese sesame production carries moderate baseline; Mediterranean and Mexican sesame production sits at lower baseline), cultivar choice (some Sesamum indicum cultivars are higher Cd accumulators than others), extraction method (cold-pressed toasted-sesame oil for culinary use vs solvent-extracted refined sesame oil for industrial use), and refining tier. Cold-pressed unrefined toasted sesame oil (the dark amber Asian-cuisine staple) retains more of the source-seed metal load; refined light sesame oil sits at lower levels.

## Processing effects

Sesame oil manufacturing varies by product type. Toasted (dark) sesame oil is made by roasting sesame seeds before cold-pressing; this preserves the source-seed flavor compounds and metal load with minimal refining. Refined (light) sesame oil undergoes standard refining (degumming, neutralization, bleaching, deodorization) that reduces trace metals. The food-processing migration study by [[sources/lee2019-food-processing-heavy-metals-migration|Lee 2019]] documents how processing-method choice affects metal migration in oils including sesame oil; cooking with sesame oil at high temperatures can mobilize trace metals from oil-contact cookware into the oil-and-food matrix.

## Ingredient-derivative risk

Sesame oil routes into culinary applications (Asian cuisine, salad dressings, marinades). Derivatives include tahini ([[ingredients/sesame-oil|sesame paste]]) which is made from whole-ground roasted sesame seeds and carries the full source-seed metal load (not partitioned to lipid fraction); halvah and other sesame-based confectionery; and gomashio and similar sesame-seasoning products. Whole sesame seeds carry the full Cd and tAs load and are nutritionally desirable but heavy-metal-rich; sesame oil is the partitioned-lipid-fraction with lower per-mass metals.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-sesame origin specification favoring documented low-soil-Cd production regions; refinery-tier specification (refined for lower metals; cold-pressed for flavor at the cost of higher metals); and contractual specification of Cd ceiling on incoming oil.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the sesame-cultivation stage. Soil pH management (raising pH reduces Cd plant availability); cultivar selection (low-Cd sesame cultivars under agronomic research); and avoidance of high-Cd organic amendments.

**Processing levers** ([[mitigation/processing]]) include refining-stage interventions (bleaching, deodorization, multi-pass refining) that substantially reduce per-mass trace metals; choice of refined vs unrefined product is the practical brand-side lever.

**Formulation levers** ([[mitigation/formulation]]) include alternative-oil substitution where the matrix permits ([[ingredients/peanut-oil|peanut oil]], olive oil for non-Asian applications; toasted [[ingredients/rice-bran-oil|rice bran oil]] as an alternative high-flavor Asian-cuisine oil).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, tAs testing on incoming oil against EU 2023/915 maximum levels. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification; glass or food-grade-lined containers maintain finished-oil quality.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set sesame-oil-specific maximum levels for Pb or Cd; general EU food-safety law applies; oilseed-related contaminant provisions reference [[sources/codex-cxs-193-1995|CXS 193-1995]].
- Codex Alimentarius CXS 210-1999 (Named Vegetable Oils) provides composition standards for sesame oil.
- FDA does not set a quantitative action level specific to sesame oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb and Cd MADLs apply to sesame-oil products sold in California; Cd in sesame products has been a subject of California Prop 65 settlements in some cases.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [ba5c99128](https://github.com/paleofoundation/heavymetalindex/commit/ba5c99128) | 2026-05-17 | major | 4 sources added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
| [e3c860eb5](https://github.com/paleofoundation/heavymetalindex/commit/e3c860eb5) | 2026-05-17 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
