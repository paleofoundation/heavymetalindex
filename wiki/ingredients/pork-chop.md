---
title: "Pork chop"
type: ingredient
commodity: pork-chop
label: "Pork chop"
aliases: ["Pork chop, pan-cooked with oil", "pork chop"]
category: meat
tds_food:
  number: 18
  description: "Pork chop, pan-cooked with oil"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 4
---

# Pork chop

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 5/10 HMTc analytes, total n=14 | common tier expects total n>=15; have 14 |
| D2 Regional coverage | below-tier | 1 jurisdictions, top CN 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 3 claims checked, 3 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming pork-chop: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 18, "Pork chop, pan-cooked with oil." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Pork chop is a cut of pork loin or rib, comprising skeletal muscle with associated intramuscular fat and, depending on the cut, a bone. The heavy metal profile of pork loin muscle is among the lowest observed in the monitored food supply. Cadmium in mammals distributes preferentially to the renal cortex (kidney) and liver after intestinal absorption, with skeletal muscle retaining only a small fraction of the body burden; as a result, pork loin muscle Cd is consistently near or below analytical detection limits in food monitoring surveys. Lead distributes primarily to bone and other calcified tissue after absorption, with skeletal muscle again retaining very little. Total mercury in pork muscle is negligible because terrestrial pigs are not exposed to methylmercury, the marine bioaccumulation form; any tHg reflects inorganic mercury in feed at trace background levels.

Feed composition is the primary determinant of pork muscle metal content. Commercial swine compound feed is regulated for cadmium content in the EU and under Codex standards to prevent accumulation in edible tissues; compliance with these regulations effectively caps the dietary Cd input to pigs and limits the Cd that can distribute to muscle. The FDA TDS FY2018-FY2020 data for pan-cooked pork chop (TDS Food 18, n=27) shows all measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) at zero across all 27 samples, confirming the expectation that pork loin muscle is essentially free of detectable heavy metals under normal production conditions ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0 | high | — |

## Ranges by source, region, and variety

Pork loin muscle metal concentrations are consistently at or below detection limits across US and European monitoring data, reflecting the systemic biology of metal distribution in pigs rather than geographic or production-system variation. No material difference by production region, breed, or production system (indoor vs outdoor, organic vs conventional) is documented in the current corpus for pork loin Cd or Pb. The TDS data (n=27, all zero across all analytes) represent US market pork chops and are consistent with European monitoring results for pork muscle from regulatory monitoring programs.

## Processing effects

Pan cooking with oil, as in the TDS preparation protocol, drives moisture loss from the muscle and concentrates metals slightly on a wet-weight basis. Given that all measured values are at zero in n=27 TDS samples ([[sources/fda2022-tds-elements-fy2018-fy2020]]), this concentration effect is not analytically meaningful. Marinating in acidic solutions (wine, vinegar) does not mobilise metals from the muscle matrix at concentrations relevant to food safety. Bone-in chops carry bone tissue, which has higher Pb than muscle; consuming the bone tissue or bone marrow is not standard, and the bone fraction does not affect the muscle-tissue profile.

## Ingredient-derivative risk

Pork loin as a raw material is the base form. Pork loin used as an ingredient in composite meat products (reformed pork products, pre-marinated chops) carries the same low metal profile as raw loin muscle. Ground pork that includes loin as one component maintains a low metal profile unless organ meat (liver, kidney) is included in the blend, in which case organ-meat metal concentrations dominate. Pork loin broth or cooking jus would carry water-soluble metal fractions leached from the muscle, but given near-zero muscle concentrations, broth metal concentrations are expected to be very low.

## Mitigation options

### Sourcing levers

Feed Cd compliance is the primary upstream control for pork muscle Cd, and is managed through feed regulation rather than by buyers of the finished meat cut. No evidence supports geographic sourcing as a lever for pork chop metal concentrations specifically.

### Agronomic levers

Not applicable to pork chop as a slaughterhouse-derived muscle cut. Feed raw material quality management (specifically phosphate ingredient Cd screening) is the upstream lever at the feed-manufacture stage.

### Processing levers

No processing lever is required or documented for pork chop, given that metal concentrations in the muscle are consistently at zero across a 27-sample US dataset. The standard butchering practice of separating bone-in from boneless cuts does not affect muscle metal concentrations.

### Formulation levers

Pork chop is not typically a fractional ingredient in composite products. Where pork loin trimmings are used in composite products, their low metal contribution does not require mitigation.

### Testing and QC levers

Routine heavy metal testing of pork chop for QA purposes is not expected to be a primary programme requirement given the all-zero TDS dataset. Where regulatory compliance testing is required for EU exports (EU Cd ML for pork muscle: 0.050 mg/kg), ICP-MS testing of representative loin samples provides the required documentation.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in pork muscle meat is 0.050 mg/kg fresh weight, and for lead in pork muscle meat is 0.10 mg/kg fresh weight. These apply to pork chop as a cut of pork muscle. Pork organ meats (kidney, liver) carry higher, separate regulatory limits for Cd that are not applicable to this page but are cross-referenced on the relevant organ-meat pages.

No US FDA action level for Cd or Pb in pork muscle applies under the current regulatory framework. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not list pork chop as a priority category. Codex Alimentarius Cd ML for muscle meat applies; the relevant Codex document is [[regulations/codex-cadmium-mls]].

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pork chop, pan-cooked with oil" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Pork chop, pan-cooked with oil (n=27); all analytes reported as zero (BDL) |
| 2 | [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|Maikanov et al. 2021]]. *Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan*, Veterinary World 14(6):1615-1621 | 2021 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Meat from markets in the Shuchinsk-Burabay resort zone: beef 166, horse 42, pork 67, mutton 8, poultry 15. (n=298) |
| 3 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 4 | [[sources/ren2018-crvi-pork-electron-beam\|Ren et al. 2018]]. *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*, Journal of Food Science | 2018 | Peer-reviewed | CN Cr-VI, Cr occurrence in Laboratory experiment using lean, fat, and marbled pork purchased from a market in Hefei, China; pork tissues (2... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
