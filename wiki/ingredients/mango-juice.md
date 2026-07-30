---
type: ingredient
commodity: mango-juice
title: "Mango Juice"
label: "Mango Juice"
aliases: []
category: juice
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-14
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Mango Juice

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | OK | 6 jurisdictions, top ES 20% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 3 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 5 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming mango-juice: fda2022-draft-lead-juice, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.00 | — |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
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

<!-- BEGIN: hmi-page-references -->
## References

The 5 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Farid SM and Enani MA (2010). *Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia*. Medical Journal of Islamic World Academy of Sciences. Peer-reviewed, A-tier. [[sources/farid2010-fruit-juices-jeddah-trace-elements|Source record]]
2. Paudel N, Dhakal A, and Pradhanang SS (2024). *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*. International Journal of Applied Sciences and Biotechnology 12(3): 158-165. [https://doi.org/10.3126/ijasbt.v12i3.70167](https://doi.org/10.3126/ijasbt.v12i3.70167). Peer-reviewed, B-tier. [[sources/paudel2024-packaged-fruit-juices-nepal|Source record]]
3. Sobhanardakani S, Shahmoradi B, and Jahangard A (2017). *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*. Annals of Military and Health Sciences Research. [https://doi.org/10.5812/amh.68743](https://doi.org/10.5812/amh.68743). Peer-reviewed, A-tier. [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Source record]]
4. U.S. Food and Drug Administration (2022). *Draft Guidance for Industry: Action Levels for Lead in Juice*. FDA Draft Guidance for Industry. [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/draft-guidance-industry-action-levels-lead-juice). Government guidance, A-tier. [[sources/fda2022-draft-lead-juice|Source record]]
5. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals\|Weldegebriel et al. 2025]]. *Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia*, Scientific Reports 15:36868 | 2025 | Peer-reviewed | ET Cd, Pb, Cr, Ni occurrence in Eighty packaged fruit juice samples drawn from eight Ethiopian-manufactured brands (10 samples per brand) and analyzed for Cd,... (n=80) |
| 2 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | NP Pb occurrence in 16 commercially packaged fruit juice samples of 4 flavors (orange, apple, mango, lychee) from 4 popular brands sold... (n=16) |
| 3 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 4 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | IR Al occurrence in 48 commercially packaged fruit juice samples of 4 types (cherry, mango, orange, pineapple) from 4 popular brands, purchased... (n=48) |
| 5 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | SA Cr, Ni occurrence in 129 commercial fruit juice samples (42 apple, 45 orange, 42 mango) of 15 brands purchased from supermarkets in... (n=129) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Mango juice is the liquid extracted or processed from mango fruit (Mangifera indica). Mango cultivation is concentrated in tropical regions (India, Pakistan, Mexico, Brazil, Thailand, Philippines, parts of Africa) where soil-uptake and irrigation-water inheritance drive the per-mass heavy-metal load. Mango is a moderate soil-uptake commodity for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] (less efficient than leafy vegetables, more efficient than fleshy temperate fruits), and the warmer growing climates with documented industrial and agrochemical contamination histories elevate baseline loads relative to temperate fruit juices. The [[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid 2010]] Jeddah Saudi Arabia commercial fruit juice survey documents trace elements in mango juice on the Middle Eastern market; the [[sources/paudel2024-packaged-fruit-juices-nepal|Paudel 2024]] Nepalese packaged juice survey extends the evidence to South Asian product; the [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani 2017]] Iranian commercial juice survey adds Al and Cu data to the regional juice corpus.

The HMTc panel concerns for mango juice are [[metals/aluminum|Al]] (notable in regional surveys from cans-and-foil-packaged products), trace Pb and Cd, and Sn for canned mango juice. Mango juice imported into US, EU, and other developed markets typically reflects the upstream source region's metal profile filtered through importer specification.

## Ranges by source, region, and variety

Variance within mango juice tracks four dimensions: source-fruit origin region (Indian Alphonso, Pakistani Sindhri, Mexican Ataulfo, Thai Nam Dok Mai, Brazilian Tommy Atkins each from different soil-and-water contexts); the variety's natural metal-uptake efficiency (no documented per-cultivar differences in the corpus); processing scale and infrastructure (commodity-scale vs craft production); and packaging (canned mango juice carries Sn; aseptic carton or PET packaging eliminates that pathway).

The Middle Eastern and South Asian commercial juice surveys ([[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid 2010]], [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani 2017]], [[sources/paudel2024-packaged-fruit-juices-nepal|Paudel 2024]]) collectively document elevated Pb, Cd, and Al in some mango-juice products relative to EU and US developed-market baselines, reflecting weaker upstream raw-material quality control in some emerging-market supply chains.

## Processing effects

Mango juice manufacturing involves washing, pulping or pressing, screening, optional enzymatic clarification, pasteurization, optional concentration, and packaging. The pulp-and-skin removal step partitions the source-fruit metal load between juice and solids; mango skin and seed carry the majority of source-fruit Pb and Cd, leaving the juice fraction with reduced per-mass metals relative to the whole fruit. Pasteurization does not affect metals. Concentration via evaporation concentrates per-mass solute including metals. Canned mango juice introduces Sn migration; aseptic carton packaging does not.

## Ingredient-derivative risk

Mango juice routes into the broader fruit-juice product family. Derivatives include mango juice concentrate (primary intermediate for reconstituted juice), mango nectar (typically thicker, may contain pulp; per-mass profile slightly different from clarified juice), mango-flavored beverages, and mango-based smoothie products. Dried mango (mango leather, candied mango) concentrates per-mass metals via moisture removal. Mango chutney and mango-based sauces carry weighted-average metal profiles from mango plus other ingredients.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention for mango juice given the upstream-region variability. Origin-region specification favoring documented low-soil-Pb production areas; supplier audit programs verifying processing infrastructure quality; and contractual specification of Pb/Cd/Al ceiling on incoming juice or concentrate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the mango-cultivation stage. Soil pH management; avoidance of high-Pb agrochemical inputs (some legacy pesticides and fertilizers in tropical-mango regions carry elevated Pb); and irrigation-water specification.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification (stainless-steel-only contact surfaces); pulp-removal optimization to maximize Pb partitioning to solids; and clarification with bentonite to remove additional trace metals.

**Formulation levers** ([[mitigation/formulation]]) include juice-blend formulations (blending mango with lower-Pb juices in tropical-blend products); juice-to-water dilution in mango-flavored beverage formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Al testing on incoming juice and concentrate against EU 30 ppb Pb juice maximum level and FDA 2022 draft 20 ppb non-apple-juice action level. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned mango juice (BPA-NI epoxy, full lacquering); aseptic carton, glass, or PET packaging eliminates Sn migration entirely; avoidance of aluminum-foil-lined packaging where Al is a concern.

## Regulatory limits that apply

- [[sources/fda2022-draft-lead-juice|FDA 2022]] draft action level of 20 ppb Pb for non-apple juices applies to mango juice in the US market.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb in fruit juice at 30 ppb (general) including mango juice.
- Codex Alimentarius CXS 247-2005 (General Standard for Fruit Juices and Nectars) includes contaminant provisions referencing [[sources/codex-cxs-193-1995|CXS 193-1995]].
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to mango-juice products sold in California.
- EU Sn-in-canned-food regulation sets 100 mg/kg maximum level for canned beverages including mango juice.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [7b9099a2f](https://github.com/paleofoundation/heavymetalindex/commit/7b9099a2f) | 2026-05-17 | major | 5 sources added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
| [e3c860eb5](https://github.com/paleofoundation/heavymetalindex/commit/e3c860eb5) | 2026-05-17 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
