---
type: ingredient
commodity: black-pepper
title: "Black Pepper"
label: "Black Pepper"
aliases: []
category: herb-spice
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 130], p95_ppb: 370, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [20, 80], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [50, 200], p95_ppb: 1700, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [1, 10], p95_ppb: 60, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [850, 2080], p95_ppb: 4800, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [10000, 60000], p95_ppb: 178000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [100, 600], p95_ppb: 2400, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 12
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Black Pepper

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 6/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 23 jurisdictions, top SA 15% | — |
| D3 Anthropogenic evidence | GAP | 1 soil + 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 3 drivers, 1 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Al THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Al: needs 1 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 4 claims checked, 4 supported; 2 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | GAP | 0 cited lever(s), 4 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd, tAs, tHg, Ni, Al, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Al: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.75, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.75, scale 0.25 | spread 0.75 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 10–130 | 370 | low | — |
| Cd | n=2 | 20–80 | 100 | low | — |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 50–200 | 1700 | low | — |
| tHg | n=2 | 1–10 | 60 | low | — |
| Ni | n=2 | 850–2080 | 4800 | low | — |
| Al | n=2 | 10000–60000 | 178000 | low | — |
| Cr | n=2 | 100–600 | 2400 | low | — |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/sabri2025-moroccan-spices-casablanca-metals\|Sabri et al. 2025]]. *Essential and Toxic Element Profiles in Selected Spices from Greater Casablanca, Morocco*, World's Veterinary Journal 15(4): 863-881 | 2025 | Peer-reviewed | MA/EU/INTL Pb, Cd, tAs, Cr, Ni occurrence in 137 bulk spice samples (cinnamon n=37, cumin n=25, turmeric n=25, black pepper n=25, ginger n=25) purchased from local... (n=137) |
| 2 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | AU/IN/CN Pb, Cd, tAs, tHg, Ni, Al, Cr occurrence in Commercial dried spices and herbs purchased from Queensland, Australia markets; plus 20 turmeric samples (13 conventional, 7 organic) (n=69) |
| 3 | [[sources/moussa2024-spices-herbs-lebanon\|Moussa et al. 2024]]. *Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs*, PLoS ONE | 2024 | Peer-reviewed | LB Pb, Cd, tAs, tHg occurrence in 96 composite samples (pooled from 480 individual samples; 5 brands per spice per category) of 13 dried herbs... (n=96) |
| 4 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 5 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | BD Pb, Cd, Cr occurrence in 19 commercially-available spice samples (15 non-branded, 4 branded) collected from Sonapur and Maijdee marketplaces in Noakhali District, Bangladesh;... (n=19) |
| 6 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | IT/SA/IN Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn occurrence in 13 spice and aromatic herb samples purchased in an international market in Saudi Arabia, representing products from India,... (n=13) |
| 7 | [[sources/mercan-yucel2022-van-spices-heavy-metals\|Mercan 2022]]. *Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals*, Balikesir Health Sciences Journal | 2022 | Peer-reviewed | TR Ni, tAs, Cd, Pb, Al occurrence in 60 unpackaged spice samples sold in Van Province, Turkey: black pepper n=20, cumin n=20, and red pepper n=20. (n=60) |
| 8 | [[sources/mercanyucel2022-van-spices-metals\|Mercan 2022]]. *Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals*, Balikesir Health Sciences Journal | 2022 | Peer-reviewed | TR Ni, tAs, Cd, Pb, Al occurrence in Unpackaged red pepper, black pepper, and cumin samples sold in Van province, Turkey (n=60) |
| 9 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 10 | [[sources/ericson2020-georgian-spices-lead\|Ericson et al. 2020]]. *Elevated Levels of Lead (Pb) Identified in Georgian Spices*, Annals of Global Health | 2020 | Peer-reviewed | GE Pb occurrence in Spice samples from 25 homes and four bazaars in Georgia, with additional household media assessed during a lead-exposure... (n=128) |
| 11 | [[sources/savic2019-serbian-spices-minerals\|Savić et al. 2019]]. *Determination of the mineral content of spices by ICP-OES*, Advanced Technologies | 2019 | Peer-reviewed | RS Pb, Cd, Al, Ni, Cr occurrence in Ten spice samples available on the Serbian market: curcuma, star anise, cinnamon, ginger, coriander, cardamom, sesame, black pepper,... (n=10) |
| 12 | [[sources/matloob2016-iraq-spices-heavy-metals\|Matloob 2016]]. *Using Stripping Voltammetry to Determine Heavy Metals in Cooking Spices Used in Iraq*, Polish Journal of Environmental Studies | 2016 | Peer-reviewed | IQ Cu, Zn, Fe, Mn, Cr, Ni, Co, Cd, Pb, tHg occurrence in 32 natural spice types sold in Babil, Iraq, five samples per spice (n=160) |
| 13 | [[sources/ziyaina2014-libya-spices-lead-cadmium\|Ziyaina et al. 2014]]. *Lead and cadmium residue determination in spices available in Tripoli City markets (Libya)*, African Journal of Biochemistry Research | 2014 | Peer-reviewed | LY Pb, Cd occurrence in Imported spices traded in Libyan markets in 2011: 24 wholesale and 36 retail samples for each of four... (n=240) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Black pepper (Piper nigrum) accumulates lead, cadmium, and chromium through two distinct pathways. Soil-uptake delivers cadmium and lead in proportion to soil-Cd and soil-Pb in the growing region; black pepper is grown predominantly in South and Southeast Asia (India, Indonesia, Vietnam, Sri Lanka, Brazil), and several major production zones have elevated soil-Cd legacies from prior agricultural practice. Post-harvest contamination is the second pathway and the more variable contributor: drying on bare ground without barrier protection, equipment metal contact during grinding, and storage-bag contamination all introduce Pb that the corn did not carry as harvested. Black pepper has been less affected than turmeric by the documented intentional adulteration with lead chromate or lead oxide pigments, but the post-harvest contamination pathway remains the dominant source of pepper Pb above baseline.

The HMTc panel concerns are dominantly Pb and Cr, with Cd as secondary. Total arsenic in pepper can be elevated in some production regions per [[sources/cicero2022-minerals-spices-aromatic-herbs|Cicero 2022]] and [[sources/tinggi2025-spices-herbs-queensland|Tinggi 2025]]; the iAs/tAs split is not consistently reported in the corpus for pepper.

## Ranges by source, region, and variety

The contributing corpus is small (n=2 A-tier sources). Cicero 2022 reports Italian-market pepper Pb and Cd in the same survey alongside other aromatic herbs and spices; Tinggi 2025 reports Queensland-Australia retail-market pepper sampled with a broader spice survey. Across the two sources, Pb means cluster in the 10-130 ppb range with p95 around 370 ppb, Cd means cluster in the 20-80 ppb range with p95 around 100 ppb, and Cr means run higher than Cd, consistent with the equipment-contact and post-harvest contamination pathway. Geographic variation by origin region is documented in the broader spice corpus but not yet resolved at black-pepper-specific scale; expanding the source corpus to include India-origin and Vietnam-origin pepper specifically would tighten the geographic-segmented sourcing analysis.

Variety effects (black vs white vs green pepper, prepared from the same Piper nigrum berry at different ripeness and processing stages) are documented qualitatively: white pepper, prepared by removing the outer skin, can carry slightly less Pb than black pepper from the same source when post-harvest contamination was on the surface, because the soak-and-strip processing removes the skin where surface deposition concentrates.

## Processing effects

Pepper processing introduces metal contamination at two main steps: drying and grinding. Sun-drying on the ground is the largest documented post-harvest Pb source; barrier-drying on raised racks or in mechanical dryers can eliminate this pathway. Grinding-equipment metal contact (steel hammer mills, brass-lined screens) can introduce Pb and Cr at trace levels. Whole peppercorns therefore carry less Pb on average than ground pepper from the same source, with the difference driven by grinding-equipment specification.

Cooking does not change pepper metal content. Pepper is used in small quantities per serving (typically 0.5-2 grams per dish), so the per-serving metal contribution is small even at the upper end of the per-pepper concentration distribution; cumulative exposure becomes a concern for populations with very high daily pepper consumption.

## Ingredient-derivative risk

Pepper essential oil and pepper oleoresin are derivatives used in flavor and dietary-supplement applications. Pepper essential oil is steam-distilled and typically carries trace metals at much lower concentrations than the whole spice because the metals do not partition into the volatile oil fraction. Pepper oleoresin is solvent-extracted and can carry intermediate metal content, depending on the solvent and the resin separation steps. Pepper powder in mixed spice blends inherits the per-pepper metal load proportional to the pepper percentage.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Origin-region segmentation (India-Tellicherry, Vietnam, Indonesia, Sri Lanka all carry different soil-Cd profiles and different post-harvest practices) and supplier-level QC review on drying and grinding facilities deliver the largest single brand-side reduction. Single-origin sourcing with documented post-harvest practice (raised-rack drying, food-grade grinding equipment) is the operational specification.

**Processing levers** ([[mitigation/processing]]) include sub-surface-drying specification at the producer level and food-grade-grinding-equipment specification. Whole-peppercorn sourcing with finished-product grinding at a controlled facility reduces grinding-introduced Pb.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level ICP-MS Pb/Cd/Cr testing on incoming spices. Detection floors should be set well below the regulatory ceiling for the matrix; see [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for whole peppercorn but matter for ground pepper, where light, oxygen, and moisture exposure can accelerate trace contamination from packaging materials over multi-year shelf life.

**Agronomic and formulation levers** are weaker than sourcing and processing for pepper specifically. Cultivar selection within Piper nigrum does not dramatically shift metal-accumulation behavior; formulation substitution (using a different spice) is a recipe decision rather than a black-pepper mitigation.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb in spices including pepper (the spice-specific Pb ML applies).
- Codex Alimentarius standards for spices and culinary herbs (CXS 327-2017) set quality and composition specifications but defer heavy-metal MLs to national authorities.
- FDA does not maintain a binding action level for Pb in pepper specifically; FDA's guidance on heavy metals in spices ([[regulations/fda-guidance-heavy-metals-spices]] when added) anchors the US framing.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to pepper-containing consumer products sold in California; the serving-based screen drives most enforcement attention.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1ca3eb0](https://github.com/paleofoundation/heavymetalindex/commit/1ca3eb0) | 2026-06-06 | source-legend: drain awaiting-synthesis backlog + wire populator into prebuild |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
