---
title: "Butter"
type: ingredient
commodity: butter
label: "Butter"
aliases: ["Butter, salted", "butter"]
category: dairy-fat
tds_food:
  number: 164
  description: "Butter, salted"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0.5, 0.8]
    p95_ppb: 2
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
updated: 2026-05-13
sources: 7
---

# Butter

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 164, "Butter, salted." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Butter accumulates heavy metals at very low levels relative to most food commodities, a consequence of its chemical composition. As a dairy fat product (approximately 80 percent milkfat by weight), butter separates the fat fraction of cream from the aqueous and protein fractions. Heavy metals, being hydrophilic ionic species in biological systems, partition strongly into the aqueous and protein-bound fractions of milk rather than into the lipid fraction. Lead, cadmium, mercury, and most other heavy metals present in raw milk are therefore concentrated in skimmed milk, whey, and milk proteins during dairy processing, while the fat that becomes butter carries minimal residual metal load. This partitioning behavior is well established in dairy processing science and explains why butter shows among the lowest heavy metal concentrations of any commonly studied food matrix. The FDA Total Diet Study FY2018-FY2020 confirms this pattern, reporting all measured metals (Cd, Cr, Ni, Pb, U, tAs, tHg) in salted butter at zero or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. The residual risk in butter is primarily indirect: feed contamination in dairy cattle elevates metals in raw milk, but the subsequent fat-extraction process removes the vast majority of that load before butter reaches the consumer.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]] |
| tHg | n=3 | 0.5–0.8 | low | [[sources/pankiewicz2012-thg-dairy-products-poland\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The total-mercury value above was resynthesized on 2026-08-09 on a butter-fat wet-weight basis. The earlier profile reported total mercury at zero, an artifact of an FDA Total Diet Study composite below the 1 microgram per kilogram reporting limit pooled as a literal zero; below-limit non-detects are treated here as left-censored, not as measured zeros. [[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz et al. 2012]] identifies butter as the highest-mercury dairy matrix at 0.58 to 0.79 micrograms per kilogram wet weight, still far below the 10 microgram per kilogram Polish maximum level, and [[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]] reports milk-product mercury near 1 to 2. These are real trace detects rather than measured zeros, so the value is reported as a low non-zero range.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Butter, salted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study found all measured metals (Cd, Cr, Ni, Pb, U, tAs, tHg) at or below the reporting limit in salted butter (n=3 composites) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. This finding is consistent with the theoretical expectation from fat-water partitioning. Geographic and seasonal variability is expected to be minimal relative to other food commodities because the partitioning mechanism operates independently of feed or soil contamination levels at the range normally encountered in commercial dairy operations. The corpus currently holds one TDS source for this food; independent European or Asian dairy survey data for butter specifically are not yet represented.

## Processing effects

The churning process that produces butter from cream does not introduce or concentrate heavy metals; it segregates the fat fraction from the buttermilk fraction. Any metals present in the incoming cream partition predominantly into the buttermilk, which is removed. Salted butter includes added salt (sodium chloride), which does not introduce metal contamination if food-grade purity specifications are met. Clarified butter (ghee) is produced by further removing water and milk solids, leaving nearly pure butterfat; this additional processing step would be expected to further reduce any residual metal content below the already-low butter baseline. Pasteurization does not affect metal speciation or concentration. No metal-relevant transformation occurs during typical butter processing.

## Ingredient-derivative risk

Butter is used as an ingredient across baked goods, confections, sauces, and spreads. Because its metal load is negligible at the raw-butter level, its contribution to the metal load of finished products is likewise negligible in proportion to its mass fraction. Ghee follows the same logic. The heavy-metal risk in butter-containing products originates overwhelmingly from other ingredients (flour, cocoa, spices, fortification mineral premixes) rather than from the butter fraction.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Feed quality for dairy cattle is the upstream variable most relevant to raw milk metal content, and the fat-partitioning step already removes most of that signal.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

The standard butter-making process (churning, separation, washing) already achieves near-complete metal removal via fat-water partitioning. No additional processing steps are indicated. Ghee production (further removal of water and non-fat solids) may further reduce residual metal load but the baseline is already at or below detection limits.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the consistently below-detection results in butter, routine lot-level heavy metal testing for Cd and Pb is low priority for this commodity. Resources are better directed toward testing higher-risk ingredients in the same formulations. If a specific dairy supply chain shows elevated raw-milk contamination (confirmed via milk testing), butter from that supply chain warrants targeted verification.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in butter.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Pb in raw milk, heat-treated milk, and milk for manufacture of dairy-based products of 0.020 mg/kg (20 ppb). No specific EU maximum level for Pb in butter as a distinct product is established separate from the milk limit, reflecting the expectation that the fat-extraction process keeps butter values well below any applicable ceiling. Cd limits for dairy products are not separately specified in EU Regulation 2023/915 for most dairy fractions; butter falls within the general "foods for which no maximum levels are set" category for Cd given its consistently low measured values. No FDA action level specific to butter for Cd, Pb, or other heavy metals is currently operative.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/pankiewicz2012-thg-dairy-products-poland|Monitoring of total mercury level in selected dairy products from the south-east regions of Poland]]<span class="hmi-ref-meta">Pankiewicz U · Ecological Chemistry and Engineering A · 2012 · [doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Butter, salted (n=3); all analytes reported as zero (BDL) |
| 2 | [[sources/hasan2021-bangladesh-dairy-trace-elements\|GMMA et al. 2021]]. *Detection of Trace Elements in Selective Dairy Products to assess Human Health Risk of Bangladeshi People*, Oriental Journal of Chemistry | 2021 | Peer-reviewed | BD Pb, Cd, tAs, Cr, Fe, Cu, Mn, Zn occurrence in 128 cheese, 128 ghee, and 128 butter samples purchased from local shops across 64 administrative districts of Bangladesh;... (n=384) |
| 3 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 4 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 5 | [[sources/pankiewicz2012-thg-dairy-products-poland\|Pankiewicz 2012]]. *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*, Ecological Chemistry and Engineering A | 2012 | Peer-reviewed | PL tHg occurrence in 48 dairy products (milk, kefir, natural and flavoured yogurt, cream, cream cheese, cottage cheese, butter, milk powder, buttermilk,... (n=48) |
| 6 | [[sources/starska2011-noxious-elements-milk-products-poland\|Starska et al. 2011]]. *Noxious Elements in Milk and Milk Products in Poland*, Polish Journal of Environmental Studies | 2011 | Peer-reviewed | Polish national monitoring Pb, Cd, tHg, and tAs in butter within a 483-sample dairy survey across all 16 voivodships |
| 7 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [4aa8d0407](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d0407) | 2026-08-11 | major | 2 sources added; narrative text revised |
| [7fe044a3d](https://github.com/paleofoundation/heavymetalindex/commit/7fe044a3d) | 2026-08-09 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
