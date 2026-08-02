---
title: "Celery"
type: ingredient
commodity: celery
label: "Celery"
aliases: ["Celery, raw", "celery"]
category: vegetable
tds_food:
  number: 114
  description: "Celery, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 31]
    p95_ppb: 74
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-23
    basis: celery-raw-wet-weight
    censoring: left-censored; FDA 27 composites all below 4 µg/kg reporting limit and Bora celery below LOD, central rests on the single detected fresh-weight celery distribution (Rusin 2021)
  Cd:
    status: populated
    typical_ppb: [20, 59.4]
    p95_ppb: 73.3
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 4.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: celery-raw-wet-weight
    speciation: total-Hg-only; not derived from MeHg
    censoring: left-censored; every contributing value below reporting/detection limit
  Ni:
    status: populated
    typical_ppb: [0, 59.8]
    p95_ppb: 67.7
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
    p95_ppb: 69
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: celery-raw-wet-weight
    speciation: total-Cr-only; no Cr-VI measurement in corpus
    censoring: left-censored; 26 of 27 FDA composites below 50 µg/kg reporting limit, single detect at 69 µg/kg
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
updated: 2026-06-23
sources: 8
---

# Celery

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 114, "Celery, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Celery is a high-water-content stalk vegetable that draws metals into its petioles primarily through root uptake from soil and irrigation water. The plant's physiology, which relies on high transpiration rates to move water and dissolved solutes upward through its hollow stalks, also transports cadmium, nickel, and other divalent cations that enter the root zone from soil or irrigation sources. Cadmium is the metal of primary concern in celery; the FDA Total Diet Study FY2018-FY2020 reports a median Cd concentration of 32 ppb wet weight (n=27), with a 90th-percentile value of 59.4 ppb and a maximum of 100 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. The Codex Alimentarius maximum level for cadmium in celery is 0.1 mg/kg fresh weight [[sources/codex-cxs-193-1995]], substantially higher than limits for most other vegetables, reflecting empirical recognition that celery accumulates cadmium at higher rates than lower-accumulating crops such as root vegetables or legumes. The stalk includes both the petiole (lower metal accumulation) and attached leaves (higher Pb and Cd per unit mass due to smaller cross-sectional area and higher surface-to-volume ratio); survey values reported for whole celery or unspecified plant parts reflect the combined tissue profile.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–31 | low | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|3]] |
| Cd | n=3 | 20–59.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | n=2 | 0–2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=2 | 0–3.6 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Ni | n=2 | 0–59.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw celery wet-weight basis, the form in which the vegetable enters the supply chain and the basis FDA Total Diet Study Food 114 ("Celery, raw") reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported all three analytes at typical and 95th-percentile values of zero at high confidence; those figures were an artifact of the FDA Total Diet Study composites for raw celery, in which every sample (or all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]).

Total mercury rests on two wet-weight contributors, both fully non-detect. FDA reported all 27 raw-celery composites below the 1 µg/kg reporting limit; the New Zealand Hawke's Bay market-garden survey ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]) found mercury below its 0.01 mg/kg (10 µg/kg) fresh-weight limit of detection in all 153 vegetable composites across 17 genera, the celery genus (*Apium graveolens*) among them, and excluded mercury from statistical analysis on that basis. Because every contributing value is left-censored and no positive celery total-mercury measurement exists in the corpus, the cell is carried at a left-censored floor (numeric low bound zero, with the FDA 1 µg/kg reporting limit and the Dearing 10 µg/kg fresh-weight limit of detection stated here in prose) at low confidence. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only; no celery hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. On the wet-weight FDA distribution, 26 of 27 raw-celery composites fell below the 50 µg/kg reporting limit, with a single detect at the maximum of 69 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); that single detect is the only positive wet-weight celery total-chromium value in the corpus and is carried as the 95th-percentile anchor, with the typical range held at the left-censored floor (numeric low bound zero, FDA 50 µg/kg reporting limit stated in prose). The Dearing New Zealand survey corroborates a low fresh-weight chromium central for the vegetable corpus (all-included median 0.01 mg/kg fresh weight; excluding the four below-detection composites, mean 0.33 and median 0.208 mg/kg fresh weight, maximum 0.84 mg/kg fresh weight), but reports chromium only as a 153-sample, 17-genus aggregate and does not break out a celery-genus chromium concentration, so it enters as a broad-vegetable wet-weight proxy at low confidence rather than as a celery-specific anchor. Confidence is capped at low because the central rests on a single censored wet-weight distribution with one detect and a non-commodity-specific corroborating aggregate.

Two dry-weight industrial-region surveys measure celery total chromium directly and are recorded as a separate elevated stratum rather than folded into the wet-weight cell, because no documented celery dry-matter fraction is available in this worktree to convert them into the row's native wet-weight basis. The Kaduna Metropolis survey ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]]) reports celery chromium at 10.3 mg/kg dry weight by ED-XRF on oven-dried tissue, attributing the elevated burden to Kaduna River irrigation and refinery, textile, and fertilizer-industry discharge; the Erbil market survey ([[sources/sadee2022-erbil-vegetables|Sadee 2022]]) reports total chromium across ten leafy vegetables in the range 1.653 to 11.915 µg/g dry weight by ICP-MS, without a celery-specific chromium figure (the source attributes only the arsenic minimum of 0.160 µg/g to celery). Both are total chromium, not Cr-VI, and both are on a dry-weight basis roughly an order of magnitude denser than the FDA wet-weight composites; neither is adopted as the central or 95th-percentile celery value.

Uranium is recorded as a reviewed data gap. The only celery uranium measurement in the corpus is the fully censored FDA Total Diet Study cell, in which all 27 raw-celery composites fell below the 1 µg/kg reporting limit; no primary fresh-vegetable source in the corpus reports an extractable quantitative celery uranium value, so no distribution is published (the rice-uranium precedent). The earlier high-confidence zero is replaced with a null data-gap cell rather than asserting a measured absence.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Celery, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 12 | 20 | 32 | 59.4 | 73.3 | 100 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 69 | in profile |
| Ni | 27 | 0 | 0 | 0 | 59.8 | 67.7 | 71 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 3.62 | 4.01 | 9 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 is the primary quantitative reference for celery in the US market, reporting cadmium with a median of 32 ppb, 90th percentile of 59.4 ppb, and maximum of 100 ppb across 27 composite samples (wet weight, as consumed raw) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Nickel was detected at the 90th percentile (59.8 ppb) but was below the reporting limit at the median, indicating right-skewed distribution. Total arsenic was detectable at the 90th percentile (3.62 ppb) and at a maximum of 9 ppb; lead and mercury were below reporting limits in all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. Celery cadmium is known to vary substantially with soil origin: irrigated production in arid regions using groundwater with elevated dissolved cadmium, and production on soils with elevated natural cadmium background or historical phosphate-fertiliser use, tends to produce higher concentrations. The Codex limit for celery cadmium (0.1 mg/kg, [[sources/codex-cxs-193-1995]]) is double the limit for most other fresh vegetables, which itself reflects empirical evidence that celery occupies a higher position in the cadmium accumulation spectrum than standard vegetable crops. Geographic and varietal breakdown for celery is not currently available in this corpus beyond the US TDS aggregate.

## Processing effects

The FDA TDS reports celery as "Celery, raw," meaning no cooking was applied before analysis; concentrations represent the as-consumed raw product [[sources/fda2022-tds-elements-fy2018-fy2020]]. Washing whole celery stalks before cutting removes surface soil and some atmospheric particulate lead from the exterior, but does not reduce internalized cadmium. If celery is blanched or boiled (for soups and cooked preparations), cadmium leaches partially into the cooking water; the magnitude is not quantified for celery specifically in the current corpus. Celery leaves, when consumed, carry higher concentrations of cadmium and potentially lead per unit mass than the stalk tissue, owing to the higher surface-to-volume ratio and more direct atmospheric deposition pathway. Processing into celery juice concentrates or extracts may concentrate metals on a fresh-weight-equivalent basis if the juice is subsequently reduced; this derivative pathway is not characterised in the current corpus.

## Ingredient-derivative risk

Fresh celery stalks represent the baseline exposure. Celery is used as a flavouring ingredient in broths, soups, and prepared dishes, where it is cooked and partially leaches metals into the liquid phase. Celery seed and celery seed extract are concentrated derivatives: drying concentrates cadmium substantially relative to fresh-weight values, and celery seed is used in seasoning blends, dietary supplements, and flavour formulations where per-serving exposures may be meaningful. Celery salt (ground celery seed mixed with salt) similarly carries concentrated cadmium. These derived forms are not individually characterised in the current corpus; users should treat celery seed and extract as potentially carrying cadmium at levels substantially above fresh stalk on a dry-weight basis.

## Mitigation options

### Sourcing levers

Selecting celery from growing regions with documented low soil cadmium background is the highest-impact lever. Key high-volume growing regions (central California in the US) have variable soil cadmium depending on field history and irrigation source. Supplier specification requiring compliance with the Codex maximum of 0.1 mg/kg Cd ([[sources/codex-cxs-193-1995]]) or the EU general vegetable limit of 0.050 mg/kg ([[regulations/eu-2023-915-cadmium]]) is appropriate for ingredient buyers seeking lower-cadmium product. The EU limit for celery specifically (where celery is categorised as a stalk/stem vegetable subject to the general vegetable limit) is more restrictive than Codex.

### Agronomic levers

Soil pH management is the primary agronomic lever; maintaining pH above 6.5 reduces cadmium bioavailability in the root zone. Avoiding phosphate fertilisers with elevated cadmium impurity reduces the ongoing cadmium load added to soil. Irrigation water quality is relevant in arid production regions where groundwater may carry dissolved cadmium; surface water irrigation generally carries lower dissolved cadmium.

_No quantified data on cultivar selection for celery cadmium in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Discarding outer leaves and removing leaf tips before sale or use reduces per-serving cadmium if leaves are a significant fraction of the consumed weight. Blanching and discarding the blanch water removes some cadmium. Washing in clean water reduces surface contamination.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

For manufacturers using celery seed or celery extract in concentrated forms, lot-level ICP-MS testing for cadmium is appropriate given the concentration effect. Fresh stalk celery at typical consumption volumes (Cd median 32 ppb, 90th-percentile 59.4 ppb) sits well below the Codex 0.1 mg/kg limit; routine lot testing is lower priority for fresh whole stalk applications unless sourcing from regions with documented elevated soil cadmium.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The Codex Alimentarius general standard CXS 193-1995 ([[regulations/codex-cadmium-mls]]) sets a cadmium maximum level of 0.1 mg/kg fresh weight specifically for celery (Apium graveolens), which is notably higher than the 0.050 mg/kg limit applied to most other fresh vegetables and reflects celery's status as a known cadmium accumulator [[sources/codex-cxs-193-1995]]. The EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) applies the general vegetable cadmium maximum of 0.050 mg/kg fresh weight to celery, and the general Pb maximum of 0.10 mg/kg fresh weight. No specific US FDA action level applies to lead or cadmium in fresh celery; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods rather than fresh vegetables. The FDA TDS median Cd (32 ppb) is 32% of the Codex celery-specific limit and 64% of the EU general vegetable limit, indicating that typical US market celery sits within regulatory bounds on average while individual samples at the 90th percentile (59.4 ppb) approach the EU threshold.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 8 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/imongben2026-kaduna-vegetables-hra|Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria]]<span class="hmi-ref-meta">Imongben CO, Tomori WB, Umoru PE, and Oyerinde WA · World Nutrition · 2026 · [doi.org/10.26596/wn.20261718-18](https://doi.org/10.26596/wn.20261718-18)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/sadee2022-erbil-vegetables|Determination of trace metals in vegetables using ICP-MS]]<span class="hmi-ref-meta">Sadee B A · ZANCO Journal of Pure and Applied Sciences · 2022 · [doi.org/10.21271/zjpas.34.3.9](https://doi.org/10.21271/zjpas.34.3.9)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Celery, raw (n=27); detectable concentrations for Cd, Cr, Ni, tAs |
| 6 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 7 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 8 | [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|Islam EU 2007]]. *Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops*, Journal of Zhejiang University Science B | 2007 | Review | Cd accumulation in celery shoot and root tissue from Zhejiang pot experiments with soil-Cd threshold derivation for safe vegetable production |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | Contamination-profile values revised |
<!-- END: hmi-page-history -->
