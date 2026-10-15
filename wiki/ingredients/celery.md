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
    typical_ppb: [0, 6]
    p95_ppb: 15
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [20, 59.4]
    p95_ppb: 73.3
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: []
    evidence_note: "The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis."
  tAs:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 4.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::114::mercury","role":"value","food_id":"114","food_name":"Celery, raw","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
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
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::114::chromium","role":"context","food_id":"114","food_name":"Celery, raw","metal_species":"Cr","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":26,"reporting_limit_min_ppb":50,"reporting_limit_max_ppb":50,"min_lower_bound_ppb":0,"max_lower_bound_ppb":69,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::114::uranium","role":"value","food_id":"114","food_name":"Celery, raw","metal_species":"U","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 9
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
| Pb | n=3 | 0–6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]] |
| Cd | n=3 | 20–59.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | Source context | Not quantified | — | — |
| tAs | n=2 | 0–3.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|2]] |
| tHg | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–59.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | Source context | Not quantified | — | — |
| Sn | data gap | — | — | — |
| U | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

## Synthesis basis and censoring treatment

The FDA Total Diet Study reported lead below its 4 ppb reporting limit in all 27 raw-celery composites ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The former [0,0] value was a left-censored non-detect rather than a measured zero and is corrected here. The New Zealand survey measured the Apium genus, which includes celery, and found lead below the detection limit in most composites ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]), while the Jiaozuo Chinese-market survey reported a vegetable-group lead mean of 0.013 mg/kg (13 ppb) fresh weight ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]).

The synthesized central range for celery lead is 0 to 6 ppb on a fresh-weight basis, held above the reporting-limit floor. Celery is a high-transpiration stalk vegetable and draws divalent cations more readily than fruiting vegetables, which supports retaining a small non-zero central band above the reporting-limit floor rather than collapsing the estimate to zero. Elevated values from contaminated-irrigation or hotspot sourcing are treated as right-tail context and are excluded from the central estimate.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 114: Celery, raw | tAs | 27 | 4 | 3.5–9 | 3 |
| 114: Celery, raw | Cd | 27 | 27 | 12–100 | 1 |
| 114: Celery, raw | Cr | 27 | 1 | 69 | 50 |
| 114: Celery, raw | Pb | 27 | 0 | ND in all composites | 4 |
| 114: Celery, raw | tHg | 27 | 0 | ND in all composites | 1 |
| 114: Celery, raw | Ni | 27 | 6 | 41–71 | 40 |
| 114: Celery, raw | U | 27 | 0 | ND in all composites | 1 |
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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**iAs.** The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis.

Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: [[sources/codex-cxs-193-1995]].

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: [[sources/codex-cxs-193-1995]].

**Cr.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.

Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: [[sources/islam2007-dietary-toxicity-vegetables-food-crops]].

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/islam2007-dietary-toxicity-vegetables-food-crops|Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops]]<span class="hmi-ref-meta">Islam EU, Yang XE, He ZL, and Mahmood Q · Journal of Zhejiang University Science B · 2007 · [doi.org/10.1631/jzus.2007.B0001](https://doi.org/10.1631/jzus.2007.B0001)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/chen2024-shanghai-hydroponic-vegetables\|Chen et al. 2024]]. *Occurrence and Risk Assessment of Pesticides, Phthalates, and Heavy Metal Residues in Vegetables from Hydroponic and Conventional Cultivation*, Foods 13, 1151 | 2024 | Peer-reviewed | CN Pb, Cd occurrence in Shanghai farms, 2022–2023: hydroponic/conventional lettuce 32/26, celery 15/20, tomato 20/22, cucumber 19/23; total 86/91. (n=177) |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Celery, raw (n=27); detectable concentrations for Cd, Cr, Ni, tAs |
| 6 | [[sources/oprea2022-sibiu-celery-root-metals\|Oprea et al. 2022]]. *HEAVY METALS ACCUMULATION IN SOIL AND CELERY ROOT (APIUM GRAVEOLENS L.) HARVESTED FROM THE POLLUTED AREAS IN SIBIU COUNTY, CENTRAL ROMANIA*, Annals of the University of Craiova—Agriculture,Montanology,Cadastre52(1):422–429 | 2022 | Peer-reviewed | RO Cd, Pb, Zn, Cu occurrence in Paired soil and celery-root collections from26households in seven Copsa Mica-area settlements,SibiuCounty,2021–2022. (n=26) |
| 7 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 8 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 9 | [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|Islam EU 2007]]. *Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops*, Journal of Zhejiang University Science B | 2007 | Review | Cd accumulation in celery shoot and root tissue from Zhejiang pot experiments with soil-Cd threshold derivation for safe vegetable production |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | major | 2 sources added; contamination-profile values revised; 2 sections added and 1 removed |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 2 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 2 sources added; narrative text revised |
| [0a907f56a4](https://github.com/paleofoundation/heavymetalindex/commit/0a907f56a4) | 2026-08-09 | correction | Narrative text revised |
| [942bc6b1bb](https://github.com/paleofoundation/heavymetalindex/commit/942bc6b1bb) | 2026-08-09 | correction | 3 sources added; contamination-profile values revised; 1 section added |
<!-- END: hmi-page-history -->
