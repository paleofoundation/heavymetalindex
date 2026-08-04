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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 59.8]
    p95_ppb: 67.7
    confidence: low
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
    confidence: low
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 8
---

# Celery

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 114, "Celery, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Celery is a high-water-content stalk vegetable that draws metals into its petioles primarily through root uptake from soil and irrigation water. The plant's physiology, which relies on high transpiration rates to move water and dissolved solutes upward through its hollow stalks, also transports cadmium, nickel, and other divalent cations that enter the root zone from soil or irrigation sources. Cadmium is the metal of primary concern in celery; the FDA Total Diet Study FY2018-FY2020 reports a median Cd concentration of 32 ppb wet weight (n=27), with a 90th-percentile value of 59.4 ppb and a maximum of 100 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. The Codex Alimentarius maximum level for cadmium in celery is 0.1 mg/kg fresh weight [[sources/codex-cxs-193-1995]], substantially higher than limits for most other vegetables, reflecting empirical recognition that celery accumulates cadmium at higher rates than lower-accumulating crops such as root vegetables or legumes. The stalk includes both the petiole (lower metal accumulation) and attached leaves (higher Pb and Cd per unit mass due to smaller cross-sectional area and higher surface-to-volume ratio); survey values reported for whole celery or unspecified plant parts reflect the combined tissue profile.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]], [[sources/codex-cxs-193-1995\|3]] |
| Cd | n=3 | 20–59.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | n=2 | 0–2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=2 | 0–3.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| Ni | n=2 | 0–59.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Celery, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 12 | 100 | in profile |
| Cr | 27 | 0 | 69 | in profile |
| Ni | 27 | 0 | 71 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 9 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 is the primary quantitative reference for celery in the US market, reporting cadmium with a median of 32 ppb and a maximum of 100 ppb across 27 composite samples (wet weight, as consumed raw) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Nickel was detectable in some market samples but below the reporting limit at the median, indicating right-skewed distribution. Total arsenic was detectable in the upper part of the distribution, reaching a maximum of 9 ppb; lead and mercury were below reporting limits in all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. Celery cadmium is known to vary substantially with soil origin: irrigated production in arid regions using groundwater with elevated dissolved cadmium, and production on soils with elevated natural cadmium background or historical phosphate-fertiliser use, tends to produce higher concentrations. The Codex limit for celery cadmium (0.1 mg/kg, [[sources/codex-cxs-193-1995]]) is double the limit for most other fresh vegetables, which itself reflects empirical evidence that celery occupies a higher position in the cadmium accumulation spectrum than standard vegetable crops. Geographic and varietal breakdown for celery is not currently available in this corpus beyond the US TDS aggregate.

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

The Codex Alimentarius general standard CXS 193-1995 ([[regulations/codex-cadmium-mls]]) sets a cadmium maximum level of 0.1 mg/kg fresh weight specifically for celery (Apium graveolens), which is notably higher than the 0.050 mg/kg limit applied to most other fresh vegetables and reflects celery's status as a known cadmium accumulator [[sources/codex-cxs-193-1995]]. The EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) applies the general vegetable cadmium maximum of 0.050 mg/kg fresh weight to celery, and the general Pb maximum of 0.10 mg/kg fresh weight. No specific US FDA action level applies to lead or cadmium in fresh celery; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods rather than fresh vegetables. The FDA TDS median Cd (32 ppb) is 32% of the Codex celery-specific limit and 64% of the EU general vegetable limit, indicating that typical US market celery sits within regulatory bounds on average while samples in the upper part of the distribution approach the EU threshold.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
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
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
