---
title: "Green beans"
type: ingredient
commodity: green-beans
label: "Green beans"
aliases: ["Green beans, fresh/frozen, boiled", "green beans"]
category: vegetable
tds_food:
  number: 121
  description: "Green beans, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4]
    p95_ppb: 4.1
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: green-beans-fresh-frozen-boiled-wet-weight
    speciation_note: wet-weight FDA cell carries one detect; dry-weight surveys reported separately and not pooled into the wet-weight percentile
  Cd:
    status: populated
    typical_ppb: [0, 1.9]
    p95_ppb: 2.1
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
    p95_ppb: 2.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: green-beans-fresh-frozen-boiled-wet-weight
    speciation_note: total-Hg-only; not derived from MeHg; all wet-weight samples below reporting limit
  Ni:
    status: populated
    typical_ppb: [0, 428]
    p95_ppb: 498
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
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: green-beans-fresh-frozen-boiled-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus; all wet-weight samples below reporting limit
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
    p95_ppb: 0.7
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
sources: 5
---

# Green beans

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 121, "Green beans, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Green beans (Phaseolus vulgaris) are a leguminous pod vegetable harvested at an immature stage, before the seed has fully developed and mineralized. The primary metal pathways are soil uptake through the root system and surface deposition on the pod exterior from atmospheric particulates and spray applications. As a legume, green beans engage in nitrogen-fixing symbiosis via root nodules, an association that modifies root exudate chemistry and can enhance uptake of divalent metals including cadmium through the same rhizosphere mobilization mechanisms that operate in other legume crops. However, because the commercial harvest is the pod plus immature seed rather than the mature dried seed, the Cd accumulation that characterizes mature dried beans does not reach its maximum in green beans; the pod wall and immature seed carry substantially lower Cd per gram than dried kidney beans or lentils from the same plant. Nickel is the most consistently detected analyte in this matrix in the FDA TDS data (median 100 ppb, max 740 ppb, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the legume-family affinity for Ni through the urease enzyme system. Lead concentrations are low and predominantly below detection limits in the TDS dataset, suggesting that soil Pb uptake is limited and atmospheric deposition onto the pod exterior is the more consequential Pb pathway under typical commercial production conditions.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 3 of 10 populated analytes declare a basis | no wet/dry basis declared: Cd, iAs, tAs, Ni, Al, Sn, U |
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
| Pb | n=3 | 0–4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|3]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|5]] |
| Cd | n=2 | 0–1.9 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|3]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]] |
| Ni | n=2 | 0–428 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|3]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, and chromium cells were resynthesized on 2026-06-11 on the native basis of this page, "Green beans, fresh/frozen, boiled" as FDA Total Diet Study Food 121 reports it, a prepared as-consumed wet-weight basis. Values below the analytical limit of detection or quantification are treated as left-censored bounds, not as measured zeros.

The earlier profile reported lead, total mercury, and chromium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study composites for boiled green beans, in which the analytes fell below the reporting limit across most or all of the distribution and the reported below-limit results were pooled as literal zeros. For lead, 26 of 27 composites were below the 4 µg/kg reporting limit, with a single detect at the 4.1 µg/kg maximum; for total mercury, all 27 composites were below the 1 µg/kg reporting limit; for chromium, all 27 composites were below the 50 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and, where a grounded measured value exists, recovers the upper bound from primary fresh-vegetable occurrence literature.

A basis caveat governs the non-FDA evidence for this commodity. The two routed primary surveys that report green-bean-specific values, the North Dakota farmer's-market survey ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]]) and the Bangladesh national surveillance study ([[sources/hossain2016-bangladesh-vegetables-pb-cd-cr|Hossain et al. 2016]]), both report on a dry-weight basis. Green beans are roughly ninety percent water, so dry-weight concentrations are on the order of ten times the corresponding wet-weight value. These dry-weight figures are reported below as a separate stratum and are not converted into, or pooled with, the FDA wet-weight percentiles, because the corpus does not contain a measured moisture fraction for these specific samples and a converted number would not trace to a measured value.

For lead, the wet-weight floor is the FDA 4 µg/kg reporting limit and the only grounded wet-weight detect is the single FDA composite at 4.1 µg/kg, which anchors the typical upper bound and the 95th percentile; the cell is held at low confidence because that single detect is the only positive wet-weight measurement. The dry-weight literature corroborates a low but non-zero picture: Saleem et al. report a green-bean lead mean of 0.009 µg/g dry weight (9 µg/kg dry weight, n=7), which at roughly ninety percent moisture corresponds to about 1 µg/kg wet weight, below the FDA reporting limit and consistent with the censored wet-weight cell. Hossain et al. report a green-bean lead maximum of 48.43 µg/g dry weight from a nationwide Bangladesh survey in which 20 of 64 green-bean samples (31.25 percent) exceeded the source comparison standard and lead-contaminated samples were drawn from 49 of 64 districts; that distribution is a contaminated-supply stratum, an order of magnitude above clean-market wet-weight green beans, and is described below rather than folded into the central estimate.

Total mercury is held distinct from methylmercury and is not derived from it. Every wet-weight measurement of green-bean total mercury in the corpus is at or below the detection limit: the FDA cell is fully below the 1 µg/kg reporting limit across all 27 composites, and the New Zealand market-garden survey ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]) reported mercury below its 0.01 mg/kg fresh-weight limit of detection in all 153 composite samples across seventeen vegetable genera, green beans (Phaseolus) included. The only positive green-bean mercury value is the Saleem et al. dry-weight mean of 0.0020 µg/g dry weight (2.0 µg/kg dry weight, n=7), which at roughly ninety percent moisture corresponds to about 0.2 µg/kg wet weight, below the FDA reporting limit. The cell therefore carries a left-censored floor and no grounded wet-weight upper value: the 95th percentile is left null rather than reported as a measured zero, and confidence is low.

Chromium is reported as total chromium only; no green-bean hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. Every wet-weight green-bean chromium measurement is below detection: the FDA cell is fully below the 50 µg/kg reporting limit across all 27 composites. The only green-bean-specific positive value is the Saleem et al. dry-weight mean of 0.024 µg/g dry weight (24 µg/kg dry weight total chromium, n=7), which at roughly ninety percent moisture corresponds to about 2 µg/kg wet weight, well below the FDA reporting limit. The Bangladesh survey reports total-chromium statistics pooled across its five vegetable types rather than for green beans alone (median 1.637 µg/g dry weight, upper quartile 4.614 µg/g dry weight, with only 2 of 290 samples above the comparison standard), and the New Zealand survey reports chromium at the dataset level rather than by genus (all-sample median 0.01 mg/kg fresh weight, with only 4 of 153 samples above the limit of detection); neither provides a green-bean-specific chromium value, so both are treated as corroborating low-chromium context rather than as percentile drivers. The chromium cell carries a left-censored floor and a null 95th percentile at low confidence pending a grounded mid-range wet-weight green-bean chromium measurement.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Green beans, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 1.86 | 2.1 | 4.2 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 100 | 428 | 498 | 740 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 4.1 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.7 | 1.1 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 2.31 | 3.3 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Nickel concentrations in green beans show a wide range in the FDA TDS data (0 to 740 ppb, median 100 ppb, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], suggesting meaningful variation by source, growing conditions, or crop variety, though the TDS dataset does not disaggregate by origin. Green beans grown on naturally high-Ni soils (serpentine soils or soils overlying ultramafic geology) would carry elevated Ni. Cadmium is detected in some samples (median 0 ppb, max 4.2 ppb, n=27), indicating that while most green beans carry negligible Cd, a fraction of commercial supply comes from soils with sufficient Cd availability to produce measurable grain Cd. Regional variation in soil Cd driven by phosphate fertilizer use would be expected to explain part of this variation. Green versus yellow wax bean varieties of Phaseolus vulgaris are not expected to differ materially in metal burden.

Lead in green beans separates into a clean-market wet-weight stratum and a contaminated-supply dry-weight stratum. In the US clean-market context the FDA Total Diet Study cell is at or below the 4 µg/kg reporting limit with a single 4.1 µg/kg detect ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), and the North Dakota farmer's-market survey corroborates a low dry-weight mean of 9 µg/kg ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]]). The Bangladesh nationwide surveillance study ([[sources/hossain2016-bangladesh-vegetables-pb-cd-cr|Hossain et al. 2016]]) documents a markedly higher contaminated-supply distribution: green-bean lead reached a maximum of 48.43 µg/g dry weight, 20 of 64 green-bean samples (31.25 percent) exceeded the source comparison standard, and lead-contaminated samples were drawn from 49 of 64 districts, a pattern the authors describe as broadly distributed nationally rather than confined to point sources. These dry-weight values, an order of magnitude above clean-market wet-weight green beans even before the moisture difference is accounted for, are treated as a contaminated-supply stratum reflecting growing regions with elevated soil and atmospheric lead loading, and are not folded into the central wet-weight estimate.

## Processing effects

Boiling of fresh or frozen green beans, as represented in the FDA TDS measurement basis ("Green beans, fresh/frozen, boiled"), leaches water-soluble metal fractions into the cooking water. For water-soluble forms of Ni and Cd, boiling may reduce the metal burden in the edible portion relative to the raw vegetable, but the magnitude is not characterized in the current corpus specifically for green beans. For frozen green beans, a blanching step precedes freezing (analogous to frozen peas), which provides an additional prior leaching step before the consumer cooking step. Canning of green beans involves heat treatment and packing in brine or water; the tin from can interiors was historically a Sn pathway into canned vegetables, though modern lacquered and tinless cans have substantially reduced this pathway.

## Ingredient-derivative risk

Canned green beans are the primary derivative of concern for metal concentrations, because older tin-plate cans without interior lacquer coatings leach Sn into the acidic vegetable brine during storage, and Sn concentrations in canned vegetables can reach several hundred ppb or higher in products stored for extended periods. Modern food cans use epoxy or other lacquer coatings that prevent Sn leaching, but product from older or non-conforming can stock remains a pathway. This Sn pathway is specific to the canned format and is not a concern for fresh or frozen green beans. The wiki's Sn data gap for green beans in the non-canned format is consistent with the low natural Sn content of plant tissue; Sn from canned format belongs on a canned green beans product page rather than on this fresh/frozen ingredient page.

## Mitigation options

### Sourcing levers

For manufacturers purchasing green beans at scale, requiring field origin documentation and preferring growing regions with documented low soil Ni and Cd reduces the likelihood of receiving high-metal batches. Serpentine soil regions should be excluded from sourcing specifications if Ni is a concern, since no agronomic intervention fully compensates for extreme soil Ni availability in those systems.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling in a generous volume of water and discarding the cooking water maximizes leaching of water-soluble metal fractions from the edible portion. This intervention is available to both consumers and food manufacturers. For frozen green bean processing, optimizing the blanching step duration and water volume provides a comparable leaching opportunity before freezing.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the wide range in Ni detected in the FDA TDS data for this matrix, lot-level testing for Ni by ICP-MS is the most informative QC measure for manufacturers incorporating green beans into products intended for Ni-sensitive consumers (those with nickel contact allergy or nickel dietary sensitivity). For general food safety purposes, Cd and Pb are the regulatory priority analytes, and a testing program targeting these two metals is consistent with EU regulatory requirements for vegetables.

### Packaging and storage levers

Avoiding older tin-plate cans without lacquer coatings for canned green bean products prevents the Sn leaching pathway in the canned format. Verification of can interior coating specifications from can suppliers should be part of the QC program for any canned vegetable product.

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in vegetables (general) is 0.10 mg/kg wet weight and for Cd in vegetables (general) it is 0.050 mg/kg wet weight. These limits apply to green beans as a vegetable product. There is no specific EU maximum level for Ni in vegetables, despite Ni being the most frequently detected analyte in the FDA TDS data for this matrix. In the United States, FDA has not established action levels for metals in green beans or other fresh vegetables. The FDA TDS data show Cd with a max of 4.2 ppb (n=27) and Pb with a max of 4.1 ppb (n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], both substantially below EU regulatory thresholds, indicating that compliance with EU limits is not a routine concern for typical commercial green bean supply.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr|Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh]]<span class="hmi-ref-meta">Hossain AMMM, Islam MS, Mamun MM, Al-Jonaed HM, Imran M, Rahman MH, et al. · SpringerPlus · 2016 · [doi.org/10.1186/s40064-016-3458-9](https://doi.org/10.1186/s40064-016-3458-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Green beans, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
| 4 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | BF tAs occurrence in Greenhouse-cultivated vegetables (7 species × 4 As irrigation concentrations × 6 replicates) at 2iE, Ouagadougou, Burkina Faso (dry... (n=168) |
| 5 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
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
