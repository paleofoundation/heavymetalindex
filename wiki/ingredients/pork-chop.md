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
    typical_ppb: [0, 38]
    p95_ppb: 38
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 8]
    p95_ppb: 8
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 18]
    p95_ppb: 18
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: pork-muscle-pan-cooked-wet-weight
    speciation: total-Cr-only
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 4
---

# Pork chop

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 18, "Pork chop, pan-cooked with oil." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Pork chop is a cut of pork loin or rib, comprising skeletal muscle with associated intramuscular fat and, depending on the cut, a bone. The heavy metal profile of pork loin muscle is among the lowest observed in the monitored food supply. Cadmium in mammals distributes preferentially to the renal cortex (kidney) and liver after intestinal absorption, with skeletal muscle retaining only a small fraction of the body burden; as a result, pork loin muscle Cd is consistently near or below analytical detection limits in food monitoring surveys. Lead distributes primarily to bone and other calcified tissue after absorption, with skeletal muscle again retaining very little. Total mercury in pork muscle is negligible because terrestrial pigs are not exposed to methylmercury, the marine bioaccumulation form; any tHg reflects inorganic mercury in feed at trace background levels.

Feed composition is the primary determinant of pork muscle metal content. Commercial swine compound feed is regulated for cadmium content in the EU and under Codex standards to prevent accumulation in edible tissues; compliance with these regulations effectively caps the dietary Cd input to pigs and limits the Cd that can distribute to muscle. The FDA TDS FY2018-FY2020 data for pan-cooked pork chop (TDS Food 18, n=27) reported every measured analyte (Cd, Cr, Ni, Pb, U, tAs, tHg) below its reporting limit across all 27 samples ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg); those below-limit results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section). The detected-occurrence picture for pork muscle is one of low but non-zero lead, cadmium, and total arsenic from broader meat-group monitoring, consistent with the well-established low-accumulator characterisation of skeletal muscle rather than with literal zeros.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 6 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 6 of 10 populated analytes declare a basis | no wet/dry basis declared: iAs, Al, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–38 | low | [[sources/wang2020-jilin-total-diet-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|3]] |
| Cd | n=3 | 0–8 | low | [[sources/wang2020-jilin-total-diet-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–18 | low | [[sources/wang2020-jilin-total-diet-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|3]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|2]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a pork-muscle pan-cooked wet-weight basis, the form FDA reports for this matrix and the form in which the cooked cut reaches the plate. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all seven of these analytes at typical and 95th-percentile values of zero at high confidence with n=2. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Pork chop, pan-cooked with oil" (TDS Food 18, n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with left-censored bounds at the FDA reporting limit (reported in the profile table as "<4", "<1", and so on) and, where a positive occurrence value exists in the broader meat literature, carries that value as the upper anchor at low confidence.

The only positive occurrence values that touch this commodity come from the Jilin Province total diet study ([[sources/wang2020-jilin-total-diet-metals|Wang et al. 2020]]), and they are reported for the whole "Meat and its products" food group, not for pork chop specifically: group means of Pb 38 µg/kg (0.038 mg/kg), total arsenic 18 µg/kg (0.018 mg/kg), and cadmium 8 µg/kg (0.008 mg/kg). These are carried as the upper anchor of the typical range and as the only available 95th-percentile reference for Pb, Cd, and tAs, but they are an all-meat aggregate spanning pork, beef, poultry, and processed meats; they are not a pork-chop-specific distribution. Confidence is held at low for every cell on that basis, and no value is relabeled as a pork-chop subgroup figure. The second corroborating result is the Kazakh market-meat survey ([[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]], pork n=67), in which pork was below detection for arsenic, cadmium, mercury, and lead across the four target analytes; that is a second censored negative pork result, consistent with the FDA censoring, and it does not supply a positive value.

Total arsenic and inorganic arsenic are kept as distinct analytes; no speciated measurement exists for this commodity, so iAs remains a reviewed data gap and is not derived from total arsenic. Total mercury is held distinct from methylmercury and is not derived from it: both the FDA composite and the Kazakh pork samples returned total mercury below the reporting limit, so the total-mercury cell carries only the left-censored FDA floor of <1 µg/kg with no positive upper bound, at low confidence.

Nickel and chromium each rest on the FDA censored floor alone. Every pork-chop composite in the FDA Total Diet Study fell below the 40 µg/kg nickel and 50 µg/kg chromium reporting limits, so the honest floor for each is that reporting limit expressed as a left-censored bound, with no positive occurrence value or upper bound published for the commodity. Chromium is reported as total chromium only at low confidence; no fluid-pork hexavalent-chromium occurrence measurement exists. The single chromium-speciation source in the corpus ([[sources/ren2018-crvi-pork-electron-beam|Ren et al. 2018]]) is an in-vitro electron-beam mitigation experiment in which lean pork was spiked with potassium dichromate to defined Cr(VI) levels, not a survey of naturally occurring chromium; its finding that lean pork retains only 2 to 4 percent of total Cr(VI) as free, unbound Cr(VI) is a speciation and mitigation result, not an occurrence value, and it is not used to populate the chromium cell. No Cr-VI value is inferred. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites with no extractable quantitative value and no other source measures it in pork, so no distribution is published (the rice-uranium and whole-milk-uranium precedent).

## Ranges by source, region, and variety

Detected occurrence values for pork muscle are scarce; the available US and Central-Asian monitoring data report pork at or below analytical detection limits, and the only positive figures come from a broad all-meat food-group composite rather than a pork-specific distribution. The FDA TDS FY2018-FY2020 data (n=27) for pan-cooked pork chop in the US reported every analyte (Cd, Cr, Ni, Pb, U, tAs, tHg) below its reporting limit throughout the distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]); these are left-censored bounds, not measured zeros. The Kazakh market-meat survey ([[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]], pork n=67) likewise reported pork below detection for arsenic, cadmium, mercury, and lead. The single set of positive numbers comes from the Jilin Province total diet study, where the all-meat group mean was Pb 38, tAs 18, and Cd 8 µg/kg ([[sources/wang2020-jilin-total-diet-metals|Wang et al. 2020]]); because this is a composite across pork, beef, poultry, and processed meats, it bounds the pork-chop estimate from above but cannot resolve variation by production region, breed, or production system (indoor vs outdoor, organic vs conventional), none of which is documented in the current corpus for pork muscle.

## Processing effects

Pan cooking with oil, as in the TDS preparation protocol, drives moisture loss from the muscle and concentrates metals slightly on a wet-weight basis. Given that every measured analyte fell below its reporting limit in the n=27 TDS samples ([[sources/fda2022-tds-elements-fy2018-fy2020]]), this concentration effect is not analytically resolvable in the FDA data; it would shift any underlying low but non-zero muscle concentration upward only slightly. Marinating in acidic solutions (wine, vinegar) does not mobilise metals from the muscle matrix at concentrations relevant to food safety. Bone-in chops carry bone tissue, which has higher Pb than muscle; consuming the bone tissue or bone marrow is not standard, and the bone fraction does not affect the muscle-tissue profile.

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

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 4 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/wang2020-jilin-total-diet-metals|Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China]]<span class="hmi-ref-meta">Wang B, Liu Y, Wang H, Cui L, Zhang Z, Guo J, et al. · Food Science & Nutrition · 2020 · [doi.org/10.1002/fsn3.1851](https://doi.org/10.1002/fsn3.1851)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/maikanov2021-meats-shuchinsk-burabay-metals|Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan]]<span class="hmi-ref-meta">Maikanov BS, Ismagulova GT, Auteleyeva LT, Kemeshov ZO, and Zhanabayeva DK · Veterinary World 14(6):1615-1621 · 2021 · [doi.org/10.14202/vetworld.2021.1615-1621](https://doi.org/10.14202/vetworld.2021.1615-1621)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/ren2018-crvi-pork-electron-beam|One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation]]<span class="hmi-ref-meta">Ren J, Zhang G, Wang D, Han J, Wu Z, and Cai D · Journal of Food Science · 2018 · [doi.org/10.1111/1750-3841.14088](https://doi.org/10.1111/1750-3841.14088)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Pork chop, pan-cooked with oil (n=27); all analytes reported as zero (BDL) |
| 2 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 3 | [[sources/ren2018-crvi-pork-electron-beam\|Ren et al. 2018]]. *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*, Journal of Food Science | 2018 | Peer-reviewed | CN Cr-VI, Cr occurrence in Laboratory experiment using lean, fat, and marbled pork purchased from a market in Hefei, China; pork tissues (2... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
