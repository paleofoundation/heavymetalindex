---
title: "Cucumber"
type: ingredient
commodity: cucumber
label: "Cucumber"
aliases: [cucumber, cucumbers, Cucumbers, "ingredients/cucumbers"]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2.4]
    p95_ppb: 2.9
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0.5, 680.2]
    p95_ppb: 774.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [3.6, 20]
    p95_ppb: 20.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 28
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 703]
    p95_ppb: 827
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [0, 10.1]
    p95_ppb: 20.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
sources: 17
---

# Cucumber

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Cucumber is a cucurbit fruit that is botanically a berry of a vine plant and is consumed as a vegetable in virtually all culinary contexts. It is characterized by a very high water content (approximately 96% water by weight), which substantially dilutes any metal concentration in the edible flesh. Root uptake of cadmium and lead from soil does occur, but the translocation of these metals from root to fruit is limited: cucurbit fruits are physiologically distal from the root system and are not preferred sink tissues for cadmium or lead accumulation under normal soil conditions. The outer skin may carry somewhat more Pb than the interior flesh through atmospheric particle deposition, but the inner flesh is generally the consumed portion when peeled.

The FDA TDS FY2018-FY2020 data for peeled raw cucumber (n=27 composites, TDS Food 123) is consistent with this low-risk characterization: Pb is at zero across all 27 samples, Cr is at zero, U is at zero, and tHg is at zero [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cadmium shows low-level detection in some samples (median 1.6 ppb, maximum 3.2 ppb), and Ni appears in the upper tail (maximum 76 ppb) and tAs is consistently detectable at moderate levels (median 14 ppb, maximum 31 ppb). The total arsenic signal is unexpected given the cucurbit's low-risk general reputation and warrants attention, though without iAs speciation it is not possible to determine the proportion attributable to inorganic versus organic arsenic species in this matrix.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=3 | 0–2.4 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | n=1 | 0.5–680.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 3.6–20 | low | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | n=1 | 0–703 | low | — |
| Cr | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | n=1 | 0–10.1 | low | — |
| U | n=2 | 0 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 123, "Cucumber, peeled, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cucumber, peeled, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 3.2 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 76 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 31 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data for peeled cucumber (n=27) provides the most structured occurrence dataset currently in the corpus for this commodity [[sources/fda2022-tds-elements-fy2018-fy2020]]. The 27-sample US market-basket composites show low cadmium (median 1.6 ppb, max 3.2 ppb) and near-zero lead, chromium, and mercury. The tAs distribution is the most notable feature: a median of 14 ppb and a maximum of 31 ppb across 27 composite samples is consistently detectable, and the FSA/Fera FS102048 survey provides additional data points awaiting structured integration [[sources/fsa2016-infant-food-formula-metals-survey]].

No comprehensive peer-reviewed survey comparing heavy metals in cucumber across different growing regions or cultivation systems (greenhouse vs field, hydroponic vs soil) is currently in the corpus. Cucumber grown in contaminated or mining-adjacent soils would be expected to carry higher Cd and Pb than market-basket composites, but no regional breakdown is available from the current sources.

## Processing effects

Peeling cucumbers removes the outer skin, which carries the highest fraction of atmospheric-deposited lead and any surface-associated metals. The TDS data is for peeled cucumber, so it already reflects this partial decontamination. Slicing and salting cucumber (as in some pickle preparation pre-stages) can draw out moisture but does not meaningfully reduce root-incorporated metals. Cooking cucumber (a less common preparation) would not remove cadmium or arsenic that is structurally incorporated in the flesh tissue.

The high water content of cucumber means that any processing step that concentrates the solid fraction (for example, drying or freeze-drying to produce cucumber powder) would proportionally concentrate metals on a per-gram dry-weight basis.

## Ingredient-derivative risk

Cucumber is consumed primarily as a fresh or fermented (pickled) product. The principal derivative is dill pickles, which is addressed separately on [[ingredients/dill-pickles]]. The pickling process adds an acidic brine, which may extract additional metals from the cucumber matrix or from processing equipment surfaces; this is discussed on the dill pickles page. Cucumber extract used in cosmetics and some functional foods would carry whatever metals are present in the source cucumber, potentially concentrated in the extraction process. No heavy metal data for cucumber extracts or concentrates is in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing cucumbers from agricultural areas with low background soil cadmium and minimal atmospheric lead pollution is the primary mitigation lever for the metal contaminants detected in this matrix. Greenhouse-grown cucumbers, which avoid atmospheric particulate deposition on the fruit surface and are grown in controlled substrate, may carry lower atmospheric Pb than field-grown cucumbers, though this distinction has not been quantified in the current corpus.

### Agronomic levers

_No quantified data on agronomic interventions specifically for cucumber metal accumulation is in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling cucumbers before consumption or further processing removes the surface-deposited metal fraction. Washing cucumber thoroughly before peeling reduces particle transfer from the peel surface during the peeling motion. These are standard food hygiene practices that also provide a marginal metal-reduction benefit for Pb.

### Formulation levers

_No quantified data on formulation substitution effects on cucumber metal content in composite products is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

The tAs signal in the TDS peeled cucumber data (median 14 ppb, max 31 ppb across n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020]] is worth monitoring with speciated arsenic testing (iAs vs tAs) to characterize whether the detected arsenic is primarily inorganic or organic. Nickel in the upper tail (max 76 ppb) also warrants periodic testing for commercial cucumber-based products.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in cucumber is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in vegetables (other than leafy vegetables and brassicas) is 0.10 mg/kg (100 ppb) wet weight, and for cadmium in vegetables it is 0.050 mg/kg (50 ppb) wet weight. Cucumber falls within the general vegetable category. The TDS Pb values of zero and Cd maximum of 3.2 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]] are well within these limits. Codex Alimentarius (CXS 193-1995 and revisions) sets a general vegetable lead limit of 0.10 mg/kg. No US federal maximum level for lead or cadmium in cucumbers has been finalized as of 2026.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mohammadi2025-iran-carrot-cucumber-metals\|Mohammadi et al. 2025]]. *Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation*, Discover Sustainability | 2025 | Peer-reviewed | IR Pb, Cd, Cr, Ni occurrence in Three carrot samples and three cucumber samples from each of seven cities or sampling points in Fars Province,... (n=42) |
| 2 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 3 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn occurrence in 244 commercially purchased food samples from six supermarkets, six farmers' markets, and one wholesale market across Shanyang and... (n=244) |
| 4 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 5 | [[sources/fagbemi2023-akure-street-food-lead\|Fagbemi et al. 2023]]. *Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria*, IPS Journal of Public Health 3(2):73-78 | 2023 | Peer-reviewed | NG Pb, Cu, Fe, Zn occurrence in Seven street-hawked food types purchased from busy road intersections in Akure Metropolis, Nigeria (n=7) |
| 6 | [[sources/fagbemi2023-akure-street-foods-lead\|Fagbemi et al. 2023]]. *Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria*, IPS Journal of Public Health | 2023 | Peer-reviewed | NG Pb, Cu, Fe, Zn occurrence in Seven street-hawked food types purchased from three busy road intersections and Oba market in Akure, Ondo State, Nigeria. (n=7) |
| 7 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | tAs, Cd, Pb, and Zn in Romanian cucumber from market and amateur-farm sources with vinegar-washing reduction effects |
| 8 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cucumber, peeled, raw (n=27); detectable concentrations for Cd, Ni, tAs |
| 9 | [[sources/kiczorowski2022-fermented-vegetables-metals\|Kiczorowski et al. 2022]]. *Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition*, Scientific Reports | 2022 | Peer-reviewed | PL Pb, Cd occurrence in Raw and fermented broccoli, carrot, cucumber, pepper, and red beet, four repetitions per vegetable combination (n=40) |
| 10 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 11 | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Pooled vegetable, grain, and soil samples from six open-field locations within 10 km of two coal-fired power plants... |
| 12 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
