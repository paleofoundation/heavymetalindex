---
title: "Cauliflower"
type: ingredient
commodity: cauliflower
label: "Cauliflower"
aliases: ["Cauliflower, fresh/frozen, boiled", "cauliflower"]
category: vegetable
tds_food:
  number: 116
  description: "Cauliflower, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: cauliflower-fresh-frozen-boiled-wet-weight
    speciation: total-Pb-only
  Cd:
    status: populated
    typical_ppb: [5.9, 18.4]
    p95_ppb: 21.1
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: cauliflower-fresh-frozen-boiled-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cauliflower-fresh-frozen-boiled-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 97]
    p95_ppb: 128
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cauliflower-fresh-frozen-boiled-wet-weight
    speciation: total-Cr-only; no Cr-VI measurement in corpus
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
    p95_ppb: 1.0
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
sources: 9
---

# Cauliflower

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 116, "Cauliflower, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cauliflower is a Brassica vegetable that accumulates cadmium primarily through root uptake from soil, a pathway common to the crucifer family. Brassicas express metal-binding proteins and organic acid secretions that actively mobilise cadmium and other divalent cations from the rhizosphere, making them moderate cadmium accumulators relative to other vegetables. The dense, compact head structure of cauliflower limits direct atmospheric deposition of lead onto edible surfaces, unlike leafy greens where large surface-area-to-mass ratios drive leaf-surface Pb contamination. Soil cadmium concentration, pH (lower pH increases cadmium availability), and phosphate fertiliser history are the primary agronomic drivers of cauliflower cadmium load. Nickel uptake follows a similar root-uptake pathway and is detectable in some surveys; the FDA Total Diet Study FY2018-FY2020 found Ni in the 90th-percentile sample at 97 ppb (wet weight, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]].

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 4 of 10 populated analytes declare a basis | no wet/dry basis declared: Cd, iAs, Ni, Al, Sn, U |
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
| Pb | n=3 | 0 | low | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|1]], [[sources/samma2024-bangladesh-vegetable-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Cd | n=2 | 5.9–18.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Ni | n=2 | 0–97 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, total-mercury, and chromium cells were resynthesized on 2026-06-11 on a cauliflower fresh/frozen/boiled wet-weight basis, the form FDA Total Diet Study Food 116 reports and the form in which the vegetable is consumed. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported all four of these analytes at typical and 95th-percentile values of zero at high confidence; those figures were an artifact of the FDA Total Diet Study composite for "Cauliflower, fresh/frozen, boiled" (n=27), in which every sample (or all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]; reporting limits Pb 4, tAs 3, tHg 1, Cr 50 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound, and recovers what the broader cauliflower-specific occurrence literature supports at the upper end. The honest floor for each analyte is the FDA reporting limit, not a measured zero.

Lead rests on the FDA censored floor plus two cauliflower-specific positive surveys, both on a dry-weight basis and both from contaminated growing contexts that are not directly comparable to the FDA boiled-wet-weight composite. The Indian market-basket survey ([[sources/salhotra2017-vegetables-fruits-heavy-metals|Salhotra et al. 2017]], single composite, Jagdalpur, Chhattisgarh) reports cauliflower lead at 0.92 mg/kg dry weight, the highest lead among the five vegetables it measured. The Bangladeshi survey of the industrialized Bogura district ([[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]]) reports cauliflower lead ranging 4.76 to 22.84 mg/kg dry weight, exceeding the Bangladesh Food Safety Authority maximum across all sites; these are industrial-district outlier values and are stratified out of the headline cell rather than pooled into it. No cauliflower-specific lead measurement on a wet-weight or boiled basis exists in the corpus, so the lead cell is published as a left-censored floor (typical [0, null]) at low confidence with no upper bound or 95th-percentile, with the dry-weight detected values carried in prose as evidence that cauliflower lead is low but non-zero in fresh produce. The pooled lead distribution moves toward the literature, away from the prior literal-zero cell, but is not given a false wet-weight quantile that the sources do not support.

Total arsenic rests on the FDA censored floor alone: the FDA TDS composite is below the 3 µg/kg reporting limit across all 27 samples, and no cauliflower-specific positive arsenic measurement exists in the corpus. The total-arsenic cell is therefore a left-censored floor (typical [0, null]) at low confidence with a single contributor. Total arsenic is held distinct from inorganic arsenic, which remains a reviewed data gap because no speciated measurement exists for this ingredient.

Total mercury rests on the FDA censored floor and a corroborating broad-survey non-detect. FDA reports cauliflower mercury below the 1 µg/kg reporting limit across all 27 composites. The New Zealand market-garden survey ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]) reported mercury below its 0.01 mg/kg fresh-weight limit of detection in all 153 vegetable composites across seventeen genera (including the Brassica group that contains cauliflower); that survey reports mercury only at the whole-survey level and not for cauliflower specifically, so it is carried as a broad-vegetable corroborating non-detect rather than as a cauliflower value. The total-mercury cell is a left-censored floor (typical [0, null]) at low confidence. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only at low confidence; no cauliflower hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The FDA TDS composite reports 26 of 27 samples below the 50 µg/kg reporting limit, with a single detect carrying the maximum to 600 µg/kg and the 95th-percentile still at the reporting floor. The cauliflower-specific positive anchor is the Nigerian market survey ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]], Kaduna Metropolis), which reports cauliflower total chromium at 12.1 mg/kg dry weight; this is a dry-weight value from a market where every vegetable except carrot exceeded the cited 0.3 mg/kg EU reference, so it sits well above the FDA wet-weight floor and is not pooled into a wet-weight quantile. The chromium cell is published as a left-censored floor (typical [0, null]) at low confidence, with the dry-weight detect and the single FDA wet-weight tail (max 600 µg/kg) carried in prose. The Bangladeshi survey reported cauliflower chromium from below detection upward, with the highest chromium in tomato rather than cauliflower, and is not a cauliflower chromium anchor.

Across all four cells the dominant cauliflower-specific positive data are dry-weight surveys from industrialized or contaminated growing regions in South Asia and West Africa, which cannot be relabeled as US boiled-wet-weight values and are not folded into the headline percentiles. The wastewater-irrigated Indian survey ([[sources/pal2017-wastewater-vegetables-heavy-metals|Jitender et al. 2017]]) measured cauliflower under domestic-wastewater irrigation in Hisar district, reporting elevated zinc and a chromium transfer factor for cauliflower; its cauliflower values are an exposure-pathway outlier for wastewater-irrigated produce and are excluded from the occurrence headline. The broad Chinese retail survey ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]) reported only category-level means for an all-vegetable pool and a combined brassica "kale" group of cauliflower, cabbage, and broccoli; it carries no cauliflower-specific row and is treated as broad-vegetable context, not a cauliflower value.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cauliflower, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3.5 | 5.92 | 11 | 18.4 | 21.1 | 28 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 600 | in profile |
| Ni | 27 | 0 | 0 | 0 | 97 | 128 | 150 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.98 | 1.9 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 provides the primary quantitative baseline for cauliflower in the US market, reporting cadmium concentrations with a median of 11 ppb and a 90th percentile of 18.4 ppb (n=27, wet weight) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Lead, total arsenic, and total mercury were below their reporting limits (4, 3, and 1 ppb respectively) in all 27 TDS composites, and chromium was below the 50 ppb reporting limit in 26 of 27 with a single detect carrying the maximum to 600 ppb; these are left-censored bounds rather than measured zeros, so they constrain the boiled-cauliflower metal burden from above rather than establishing it at zero. The low US lead result is consistent with the protected head structure of cauliflower limiting atmospheric Pb deposition, but cauliflower lead is low rather than absent: market-basket surveys that measured cauliflower by name in India ([[sources/salhotra2017-vegetables-fruits-heavy-metals|Salhotra et al. 2017]], 0.92 mg/kg dry weight) and in the industrialized Bogura district of Bangladesh ([[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]], 4.76 to 22.84 mg/kg dry weight) detect appreciable lead, and the Bangladeshi values exceed regulatory limits as an industrial-district outlier. Nickel was detectable at the 90th percentile (97 ppb) but below the reporting limit at the median, indicating a skewed distribution with a subset of samples from higher-Ni-soil origins [[sources/fda2022-tds-elements-fy2018-fy2020]]. Chromium in the Nigerian Kaduna market survey reached 12.1 mg/kg dry weight in cauliflower ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]]), again a dry-weight value from a contaminated market rather than a US wet-weight equivalent. Geographic variation in metal load is expected to be moderate to high across growing regions given differences in soil background, fertiliser inputs, and irrigation water quality, with wastewater-irrigated and industrial-district produce carrying the heaviest burdens; the current corpus supports a clean separation between the low US boiled-cauliflower baseline and these contaminated-region dry-weight outliers, but not a fully resolved region-by-region wet-weight breakdown for cauliflower specifically.

## Processing effects

Boiling is the standard preparation method for cauliflower and is the basis reported in the FDA Total Diet Study ("Cauliflower, fresh/frozen, boiled") [[sources/fda2022-tds-elements-fy2018-fy2020]]. Boiling leaches cadmium and other water-soluble metal species into cooking water; studies on related Brassicas (broccoli, cabbage) indicate that boiling can reduce cadmium content in the edible portion by 20-40% relative to raw, depending on cooking time and water volume, though the magnitude for cauliflower specifically is not quantified in the current corpus. Discarding the cooking water rather than using it as broth or stock is therefore relevant for cadmium reduction. Washing fresh cauliflower before cooking removes surface soil contamination but has minimal effect on internalized cadmium. Blanching and freezing prior to retail does not materially alter the metal distribution within the floret tissue.

## Ingredient-derivative risk

Cauliflower is consumed primarily as a whole vegetable (fresh, frozen, or as part of prepared dishes). Processed derivatives include cauliflower rice (raw riced florets), cauliflower flour (dried and milled), and cauliflower-based pizza crusts and flatbreads. Drying and milling concentrate metals on a dry-weight basis relative to fresh-weight values; a drying step that removes roughly 90% of water could increase apparent cadmium concentration approximately ten-fold on a dry-weight basis. Cauliflower rice retains the intact floret tissue and carries a similar metal profile to fresh cauliflower on a wet-weight basis. These derivatives are not currently individually characterised in the corpus; values from the whole-vegetable data should be treated as indicative but not directly equivalent for dried or highly processed cauliflower products.

## Mitigation options

### Sourcing levers

Sourcing cauliflower from regions with low background soil cadmium and documented low phosphate fertiliser use reduces cadmium load at the ingredient level. Supplier specification of soil cadmium levels or adherence to the EU cadmium maximum for vegetables (0.050 mg/kg fresh weight per [[regulations/eu-2023-915-cadmium]]) provides a regulatory floor. Certified organic production does not automatically imply lower cadmium; soil history is the determinant.

### Agronomic levers

Maintaining soil pH above 6.5 reduces cadmium bioavailability to Brassica crops by shifting cadmium to less plant-available forms. Liming acidic soils is the most widely documented lever for reducing cadmium uptake in vegetables; magnitude of effect varies by soil type and cadmium speciation. Selection of lower-accumulating cultivars is an emerging lever documented for other Brassicas but not yet characterised for cauliflower varieties specifically in the current corpus.

_No quantified data on cultivar selection for cauliflower cadmium in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling in a high water-to-vegetable ratio and discarding the cooking water reduces cadmium in the edible portion, based on analogous data from broccoli and cabbage. Washing before cutting reduces surface contamination. These are low-cost, high-availability levers for food service and home preparation contexts.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level cadmium testing by ICP-MS is appropriate for manufacturers using cauliflower in concentrated or dried formats where the amplification effect on dry weight may push values closer to applicable regulatory limits. For fresh whole cauliflower at typical consumption volumes, the TDS median cadmium (11 ppb wet weight) is well below EU and Codex regulatory ceilings; routine lot testing is lower priority unless sourcing from regions with documented elevated soil cadmium.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU Regulation (EC) No 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets a maximum level of 0.050 mg/kg fresh weight for cadmium in fresh vegetables of the Brassica genus, which includes cauliflower. The lead maximum level for fresh vegetables under the same regulation is 0.10 mg/kg fresh weight. No specific US FDA action level applies to lead or cadmium in fresh cauliflower; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) is focused on infant and toddler foods rather than fresh vegetables. The Codex general standard for contaminants (CXS 193-1995, [[regulations/codex-cadmium-mls]]) provides an international cadmium maximum of 0.050 mg/kg for Brassica vegetables. The FDA TDS median Cd value of 11 ppb is approximately 22% of the EU maximum level, indicating typical US market cauliflower is well within regulatory limits on average.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 9 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/salhotra2017-vegetables-fruits-heavy-metals|Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State]]<span class="hmi-ref-meta">Salhotra P and Verma R · IOSR Journal of Applied Chemistry · 2017 · [doi.org/10.9790/5736-100502110113](https://doi.org/10.9790/5736-100502110113)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/samma2024-bangladesh-vegetable-metals|Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach]]<span class="hmi-ref-meta">Samma S, Islam Khan MS, Islam Chowdhury MT, Islam MA, Fick J, and Kaium A · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241282601](https://doi.org/10.1177/11786302241282601)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/imongben2026-kaduna-vegetables-hra|Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria]]<span class="hmi-ref-meta">Imongben CO, Tomori WB, Umoru PE, and Oyerinde WA · World Nutrition · 2026 · [doi.org/10.26596/wn.20261718-18](https://doi.org/10.26596/wn.20261718-18)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/pal2017-wastewater-vegetables-heavy-metals|Heavy Metals in Soil and Vegetables and their Effect on Health]]<span class="hmi-ref-meta">Pal Jitender, Bishnoi Mukal, and Kaur Mandeep · International Journal of Engineering Science Technologies · 2017 · [doi.org/10.29121/IJOEST.v2.i1.2017.03](https://doi.org/10.29121/IJOEST.v2.i1.2017.03)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | BD Pb, Cr, Cu occurrence in Composite vegetable and soil samples from 5 vegetable species across 6 upazilas in Bogura district, Bangladesh (northern industrial... (n=30) |
| 4 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 5 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cauliflower, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Cr, Ni, U |
| 7 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 8 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 9 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
