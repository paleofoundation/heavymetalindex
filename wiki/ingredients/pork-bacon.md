---
title: "Pork bacon"
type: ingredient
commodity: pork-bacon
label: "Pork bacon"
aliases: ["Pork bacon, oven-cooked", "bacon"]
category: meat
tds_food:
  number: 20
  description: "Pork bacon, oven-cooked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.0]
    p95_ppb: 4.2
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 4.5]
    p95_ppb: 5.9
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
    typical_ppb: [0, 3.1]
    p95_ppb: 3.3
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
    typical_ppb: [0, 16.4]
    p95_ppb: 50.8
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
    typical_ppb: [0, 40]
    p95_ppb: 240
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
    typical_ppb: [0, 3.2]
    p95_ppb: 4.9
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
sources: 3
---

# Pork bacon

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 2 jurisdictions, top RO 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming pork-bacon: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 20, "Pork bacon, oven-cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Pork bacon is produced from pork belly (subcutaneous fat and underlying muscle from the ventral trunk), cured with salt, nitrites, and often additional flavourings, then typically smoked and sliced. The heavy metal profile of pork bacon reflects the general characteristics of pork muscle and adipose tissue, which are low in cadmium, lead, and mercury relative to organ tissues (kidney, liver) because these metals do not bioaccumulate efficiently in mammalian muscle or fat. Cadmium in mammals concentrates preferentially in the renal cortex and, to a lesser extent, the liver; skeletal muscle and adipose tissue carry Cd at concentrations generally an order of magnitude lower than kidney.

Pigs accumulate metals primarily through dietary intake and, in outdoor production systems, through soil ingestion. Commercial swine production relies on formulated compound feed, and feed Cd levels are regulated in the EU and by Codex to limit accumulation in edible tissues. Lead in pork muscle is low because Pb distributes primarily to bone rather than soft tissue after intestinal absorption. Total mercury in pork is very low because terrestrial livestock are not exposed to methylmercury, the marine-origin form that bioaccumulates in fish; the tHg detected in pork represents inorganic Hg from feed and environmental background at trace levels.

The curing process (salt and nitrite immersion or dry application) introduces no significant metals. Smoking introduces polycyclic aromatic hydrocarbons but does not add lead, cadmium, or mercury at analytically significant concentrations. The FDA TDS FY2018-FY2020 data for oven-cooked pork bacon (TDS Food 20, n=27) shows Cd, Pb, and most other analytes predominantly at or near zero in the flesh, with some Cr detections at the p90 (40 ppb) and Ni at the p90 (16 ppb), consistent with the expected low-accumulation profile of pork muscle and fat tissue.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0–4.0 | 4.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0–4.5 | 5.9 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0–3.1 | 3.3 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–16.4 | 50.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0–40 | 240 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0–3.2 | 4.9 | high | — |

## Ranges by source, region, and variety

Pork bacon Cd and Pb concentrations are consistently low across production regions in US and European monitoring data because the relevant factors (feed Cd content and tissue distribution dynamics) are controlled by feed regulation and veterinary practice rather than by pork-producing country geography. Organic and free-range production, where pigs may have greater soil ingestion, could theoretically elevate Cd slightly relative to intensive indoor production, but this difference has not been quantified at commercially relevant levels in the current corpus. US market pork bacon as measured by the FDA TDS FY2018-FY2020 dataset (n=27) shows predominantly non-detect values for Cd, Pb, and Hg in the oven-cooked form, with sporadic Cr and Ni detections that may reflect sampling or analytical variability ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Curing (salt and nitrite application, with or without sugar and spices) does not introduce or remove heavy metals from the pork belly. Smoking at typical cold-smoke or hot-smoke temperatures does not measurably add lead or cadmium to the food, though particulate deposition from smoke could introduce trace surface deposits of metals from wood combustion. Oven cooking, as in the TDS preparation protocol, drives moisture loss and concentrates metals slightly on a wet-weight basis. Bacon fat that renders out during cooking carries negligible metals because lipid-soluble metal species are not a significant fraction of pork tissue metal burden; rendered bacon fat is therefore clean for cadmium and lead.

## Ingredient-derivative risk

Pork bacon is primarily consumed as a finished cooked product. Rendered bacon fat, produced during cooking, is very low in metals. Bacon bits (cooked, crumbled, and dried bacon) are a concentrated form where moisture removal would raise metal concentrations on a wet-weight basis proportionally, but because starting concentrations are already very low, the absolute values in bacon bits remain negligible. Bacon used as a flavouring ingredient in composite foods contributes proportionally to its inclusion level, which is typically small.

## Mitigation options

### Sourcing levers

Feed cadmium content is the primary lever governing pork muscle Cd, and this is controlled upstream through feed ingredient quality and regulatory compliance. Sourcing pork from producers with documented feed Cd monitoring and compliance with EU feed contaminants regulations (where applicable) provides supply-chain assurance. No evidence supports geography-based sourcing as a significant lever for pork bacon specifically.

### Agronomic levers

Not applicable to pork bacon as a processed animal product. Feed cadmium management (monitoring of feed phosphate ingredient Cd levels) is the relevant upstream agronomic-adjacent lever, applied at the feed manufacturer rather than the pork producer level.

### Processing levers

No validated processing lever specifically reduces metals in pork bacon below what is inherent in the raw pork belly. Moisture loss during cooking concentrates metals marginally, but the starting concentrations are so low that this effect is not practically significant. Avoiding smoking fuels with high metal content (industrial waste wood) is a minor precautionary measure.

### Formulation levers

In composite products where bacon is a flavouring inclusion, its metal contribution is proportional to its low inclusion level and is not a meaningful driver of total product metal load.

### Testing and QC levers

Routine testing of pork bacon for heavy metals is not expected to be a primary QA priority given the consistently low concentrations documented in the literature and TDS data. Where testing is required for regulatory compliance (for example, EU Cd ML for pork muscle), ICP-MS testing of incoming pork belly or finished cooked product provides the required evidence.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in meat of bovine animals, sheep, pigs, and poultry (muscle meat) is 0.050 mg/kg fresh weight, and for lead in muscle meat of bovine animals, sheep, pigs, and poultry is 0.10 mg/kg fresh weight. These limits apply to pork belly and by extension to pork bacon as a processed pork product.

No US FDA action level for Cd or Pb in pork specifically applies under the current regulatory framework. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not currently list pork bacon as a priority category. Codex Alimentarius Cd ML for meat muscle applies; the relevant Codex document is [[regulations/codex-cadmium-mls]].

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pork bacon, oven-cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 1 | 4.54 | 5.92 | 11 | in profile |
| Cr | 27 | 0 | 0 | 0 | 40 | 240 | 400 | in profile |
| Ni | 27 | 0 | 0 | 0 | 16.4 | 50.8 | 90 | in profile |
| Pb | 27 | 0 | 0 | 0 | 4.04 | 4.17 | 4.7 | in profile |
| U | 27 | 0 | 0 | 0 | 3.2 | 4.92 | 7.4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 3.14 | 3.34 | 3.8 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pork bacon, oven-cooked (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
| 2 | [[sources/ren2018-crvi-pork-electron-beam\|Ren et al. 2018]]. *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*, Journal of Food Science | 2018 | Peer-reviewed | CN Cr-VI, Cr occurrence in Laboratory experiment using lean, fat, and marbled pork purchased from a market in Hefei, China; pork tissues (2... |
| 3 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
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
