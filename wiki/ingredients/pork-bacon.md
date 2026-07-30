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
    typical_ppb: [0, 7]
    p95_ppb: 7
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: pork-bacon-oven-cooked-wet-weight
    speciation: total-Hg-only
    note: "Bacon-specific FDA TDS (n=27) fully below 1 µg/kg reporting limit; upper bound is a pork-muscle proxy (Zhang2022 China-market fitted central 7 µg/kg, basis unstated), not a bacon measurement."
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
updated: 2026-06-11
sources: 3
---

# Pork bacon

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=16 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 2 jurisdictions, top RO 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: THIN; Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 1/10 populated cells declare a basis token | 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 12 claims checked, 12 supported; 6 citations, 0 orphan, 4 foreign | 4 foreign citation(s) not naming pork-bacon: fda2022-tds-elements-fy2018-fy2020, zhang2022-pork-heavy-metals-china, dibella2020-augusta-meat-milk-seafood-metals |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN; Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 20, "Pork bacon, oven-cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Pork bacon is produced from pork belly (subcutaneous fat and underlying muscle from the ventral trunk), cured with salt, nitrites, and often additional flavourings, then typically smoked and sliced. The heavy metal profile of pork bacon reflects the general characteristics of pork muscle and adipose tissue, which are low in cadmium, lead, and mercury relative to organ tissues (kidney, liver) because these metals do not bioaccumulate efficiently in mammalian muscle or fat. Cadmium in mammals concentrates preferentially in the renal cortex and, to a lesser extent, the liver; skeletal muscle and adipose tissue carry Cd at concentrations generally an order of magnitude lower than kidney.

Pigs accumulate metals primarily through dietary intake and, in outdoor production systems, through soil ingestion. Commercial swine production relies on formulated compound feed, and feed Cd levels are regulated in the EU and by Codex to limit accumulation in edible tissues. Lead in pork muscle is low because Pb distributes primarily to bone rather than soft tissue after intestinal absorption. Total mercury in pork is low because terrestrial livestock are not exposed to methylmercury, the marine-origin form that bioaccumulates in fish; the tHg detected in pork represents inorganic Hg from feed and environmental background at low levels. The bacon-specific FDA Total Diet Study composite (TDS Food 20, n=27) fell below the 1 µg/kg reporting limit in every sample, so the bacon-direct floor is a left-censored bound rather than a measured zero. The low but non-zero pork-muscle central used here is carried as a same-species proxy (see the Synthesis basis and censoring treatment section), because no bacon-specific positive total-mercury measurement exists in the corpus.

The curing process (salt and nitrite immersion or dry application) introduces no significant metals. Smoking introduces polycyclic aromatic hydrocarbons but does not add lead, cadmium, or mercury at analytically significant concentrations. The FDA TDS FY2018-FY2020 data for oven-cooked pork bacon (TDS Food 20, n=27) shows Cd, Pb, and most other analytes predominantly at or near zero in the flesh, with some Cr detections at the p90 (40 ppb) and Ni at the p90 (16 ppb), consistent with the expected low-accumulation profile of pork muscle and fat tissue. For total mercury specifically, all 27 bacon composites fell below the 1 µg/kg reporting limit, so the bacon-direct values are fully left-censored and the upper bound carried in the profile is a pork-muscle proxy rather than a bacon measurement.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0–4.5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.1 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=4 | 0–7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/zhang2022-pork-heavy-metals-china\|Zhang 2022]], [[sources/dibella2020-augusta-meat-milk-seafood-metals\|Di Bella 2020]] |
| Ni | n=2 | 0–16.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–40 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–3.2 | high | — |

## Synthesis basis and censoring treatment

The total-mercury cell was resynthesized on 2026-06-11 on a pork-bacon (oven-cooked) wet-weight basis. The earlier profile reported tHg at typical and 95th-percentile values of zero at high confidence with two contributing studies. Both figures were defects. The literal zeros were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Pork bacon, oven-cooked" (n=27), in which all 27 samples fell below the 1 µg/kg mercury reporting limit and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The study count of two was also unsupported: the two non-FDA sources routed to this page, [[sources/hoha2014-pork-pb-cd-cu-zn-romania|Hoha et al. 2014]] (Romanian bacon, Pb/Cd/Cu/Zn only) and [[sources/ren2018-crvi-pork-electron-beam|Ren et al. 2018]] (a Cr(VI) electron-beam mitigation experiment), do not measure mercury at all, so the FDA composite was the only bacon-specific mercury source.

No bacon-specific positive total-mercury value exists in the corpus. The honest bacon-direct floor is the FDA reporting limit expressed as a left-censored bound (reported as "<1"), not a measured zero. The non-zero upper bound carried in the profile is a same-species pork-muscle proxy and is labelled as such: Zhang et al. 2022 ([[sources/zhang2022-pork-heavy-metals-china|Zhang et al. 2022]]) aggregated 22 Chinese published pork mercury records and fitted a central pork concentration of 0.007 mg/kg (7 µg/kg); the wet-versus-dry basis is not exposed in the source, so this value is carried as a low-confidence proxy rather than a basis-matched bacon measurement. Two further pork surveys corroborate the low picture without adding a positive value: Di Bella et al. 2020 ([[sources/dibella2020-augusta-meat-milk-seafood-metals|Di Bella et al. 2020]]) reported pork mercury below the limit of detection in an industrial-impacted area of southern Italy, and Maikanov et al. 2021 ([[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]]) reported all 67 Kazakhstan pork samples below detection for mercury. The cell is therefore typical 0–7 µg/kg, 95th percentile 7 µg/kg, at low confidence over four contributing sources (one bacon-direct, fully censored; one positive pork-muscle proxy; two censored pork surveys).

Total mercury is held distinct from methylmercury and is not derived from it; only total-mercury measurements populate this cell. The pork-muscle proxy is a cross-preparation (muscle versus cured belly), same-species substitution made explicit here so it is not mistaken for a bacon-specific occurrence value; it should be replaced as soon as a bacon-specific positive mercury measurement is ingested.

## Ranges by source, region, and variety

Pork bacon Cd and Pb concentrations are consistently low across production regions in US and European monitoring data because the relevant factors (feed Cd content and tissue distribution dynamics) are controlled by feed regulation and veterinary practice rather than by pork-producing country geography. Organic and free-range production, where pigs may have greater soil ingestion, could theoretically elevate Cd slightly relative to intensive indoor production, but this difference has not been quantified at commercially relevant levels in the current corpus. US market pork bacon as measured by the FDA TDS FY2018-FY2020 dataset (n=27) shows predominantly non-detect values for Cd, Pb, and Hg in the oven-cooked form, with sporadic Cr and Ni detections that may reflect sampling or analytical variability ([[sources/fda2022-tds-elements-fy2018-fy2020]]). For total mercury, all 27 bacon composites fell below the 1 µg/kg reporting limit and are carried as left-censored bounds rather than measured zeros; the low non-zero central in the profile is a same-species pork-muscle proxy, detailed in the Synthesis basis and censoring treatment section.

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

<!-- BEGIN: hmi-page-references -->
## References

The 6 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Hoha GV, Costăchescu E, Leahu A, and Păsărin B (2014). *Heavy metals contamination levels in processed meat marketed in Romania*. Environmental Engineering and Management Journal. [omicron.ch.tuiasi.ro](http://omicron.ch.tuiasi.ro/EEMJ/). Peer-reviewed, B-tier. [[sources/hoha2014-pork-pb-cd-cu-zn-romania|Source record]]
3. Ren J, Zhang G, Wang D, Han J, Wu Z, and Cai D (2018). *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*. Journal of Food Science. [https://doi.org/10.1111/1750-3841.14088](https://doi.org/10.1111/1750-3841.14088). Peer-reviewed, A-tier. [[sources/ren2018-crvi-pork-electron-beam|Source record]]
4. Zhang H, Zhou G, Zhang S, Yang Y, Dev S, Su Q, et al. (2022). *Risk assessment of heavy metals contamination in pork*. Food Control. [https://doi.org/10.1016/j.foodcont.2021.108793](https://doi.org/10.1016/j.foodcont.2021.108793). Peer-reviewed, C-tier. [[sources/zhang2022-pork-heavy-metals-china|Source record]]
5. Di Bella C, Traina A, Giosue C, Carpintieri D, Lo Dico GM, Bellante A, et al. (2020). *Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment*. Frontiers in Public Health 8:273. [https://doi.org/10.3389/fpubh.2020.00273](https://doi.org/10.3389/fpubh.2020.00273). Peer-reviewed, A-tier. [[sources/dibella2020-augusta-meat-milk-seafood-metals|Source record]]
6. Maikanov BS, Ismagulova GT, Auteleyeva LT, Kemeshov ZO, and Zhanabayeva DK (2021). *Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan*. Veterinary World 14(6):1615-1621. [https://doi.org/10.14202/vetworld.2021.1615-1621](https://doi.org/10.14202/vetworld.2021.1615-1621). Peer-reviewed, B-tier. [[sources/maikanov2021-meats-shuchinsk-burabay-metals|Source record]]
<!-- END: hmi-page-references -->

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
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
