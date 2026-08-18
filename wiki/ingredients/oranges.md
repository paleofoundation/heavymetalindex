---
title: "Oranges"
type: ingredient
commodity: oranges
label: "Oranges"
aliases: [orange, orange-peel]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 49]
    p95_ppb: 72
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-06-11
    basis: raw-orange-edible-flesh-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 15
    confidence: low
    n_studies: 6
    last_reviewed: 2026-06-11
    basis: raw-orange-edible-flesh-wet-weight
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 2.2
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-orange-edible-flesh-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 60.2]
    p95_ppb: 74.1
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [95.7, 861.3]
    p95_ppb: 909.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 9]
    p95_ppb: 50
    confidence: low
    n_studies: 5
    last_reviewed: 2026-06-23
    basis: raw-orange-edible-flesh-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [3.7, 6.8]
    p95_ppb: 7.0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
sources: 13
---

# Oranges

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Oranges are one of the lowest-risk food categories for heavy metal accumulation, though the edible flesh carries low but non-zero lead and cadmium rather than true zeros. The thick, waxy peel that characterizes citrus fruit provides a physical barrier that substantially limits atmospheric Pb deposition from reaching the edible flesh; Pb that deposits on the outer peel surface is removed with the peel during normal peeling and juicing operations. Root uptake of Cd and Pb from soil occurs in citrus trees as in other fruit trees, but the transfer factor from root to fruit flesh is low; citrus trees are not recognized accumulators of Pb or Cd, and the physiological buffering of the fruit through the tree's vascular system results in low concentrations in the flesh. Mercury is not a significant concern in citrus grown under typical commercial conditions. Inorganic arsenic is similarly not a significant analyte in citrus flesh. The FDA TDS FY2018-FY2020 composite for raw orange (TDS Food 79, n=27) reports Pb, Cd, Cr, and tHg below their reporting limits across most or all samples ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); those below-limit results are carried as left-censored bounds rather than measured zeros, and primary fresh-fruit and retail-citrus surveys that name oranges by commodity detect lead and cadmium at low concentrations in the flesh (see the Synthesis basis and censoring treatment section). Nickel (max 87 ppb), uranium (a single detect at 6.5 ppb), and tAs (max 6.7 ppb) were the analytes detected at the high end of the FDA distribution.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 3 at 5-14, 6 below 5 | below pooling depth: iAs, tAs, tHg, Ni, Al, Sn |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 4 of 10 populated analytes declare a basis | no wet/dry basis declared: iAs, tAs, Ni, Al, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-13 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 0–49 | medium | [[sources/loutfy2012-ismailia-foodstuffs-metals\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]], [[sources/czech2021-citrus-lead-cadmium\|3]] |
| Cd | n=6 | 0–10 | low | [[sources/loutfy2012-ismailia-foodstuffs-metals\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]], [[sources/mekonnen2024-ethiopia-fruit-metals\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 0 | high | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=4 | 0–60.2 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/afrin2020-heavy-metals-fruits-dhaka\|3]] |
| Al | n=1 | 95.7–861.3 | low | — |
| Cr | n=5 | 0–9 | low | [[sources/loutfy2012-ismailia-foodstuffs-metals\|1]], [[sources/okeke2026-calcium-carbide-ripened-fruits-metals\|2]] |
| Sn | n=1 | 3.7–6.8 | low | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-mercury, and uranium cells were resynthesized on 2026-06-11 on a raw-orange edible-flesh wet-weight basis, the form in which the fruit is consumed. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, cadmium, total mercury, and uranium at typical and 95th-percentile values of zero, three of them at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Orange, raw" (TDS Food 79, n=27), in which most or all samples fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], reporting limits Pb 4, Cd 1, tHg 1, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound and, for lead and cadmium, with the detected primary fresh-fruit and retail-citrus distribution that names oranges by commodity.

Lead is non-zero in the orange-specific occurrence literature. The Egyptian Ismailia market survey ([[sources/loutfy2012-ismailia-foodstuffs-metals|Loutfy et al. 2012]], wet-weight) reports an orange lead mean of 48.6 µg/kg with a range of 20 to 72.2 µg/kg across five analyzed pools; the Pakistani Khyber Pakhtunkhwa survey ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]) reports orange lead at 39.2 µg/kg dry weight, and the European retail-citrus survey ([[sources/czech2021-citrus-lead-cadmium|Czech et al. 2021]], ICP-OES) reports whole-fruit orange lead of 10 µg/kg (1.00 µg/100 g fresh weight, peel-inclusive). Three further surveys returned orange lead below their detection limits: Ethiopia ([[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]], not detected, method detection limit 0.082 mg/L), Egypt across four governorates ([[sources/amer2019-egyptian-fruits-heavy-metals|Amer et al. 2019]], not detected), and Nigeria ([[sources/unaegbu2016-fruit-heavy-metals-enugu|Unaegbu et al. 2016]], not detected). The pooled lead typical of [0, 49] takes the FDA censored floor of 4 µg/kg as the low bound and the Loutfy wet-weight central as the upper; the 95th-percentile of 72 µg/kg is the Loutfy orange maximum, the top of the ordered orange-specific set. Confidence is medium: the positive values are consistent across three independent surveys, but they span wet-weight, dry-weight, and whole-fruit (peel-inclusive) bases that are not strictly inter-convertible, and three other surveys returned non-detects.

Cadmium is likewise low but non-zero. The Loutfy market survey reports an orange cadmium mean of 10.0 µg/kg wet weight (range 6 to 15.3); Rahim reports 10.6 µg/kg dry weight; Czech reports whole-fruit orange cadmium of 0.34 µg/kg (0.034 µg/100 g); the single FDA detect is 1.2 µg/kg (Mid-Atlantic winter composite) against an otherwise fully censored cell. The pooled cadmium typical of [0, 10] spans the FDA censored floor of 1 µg/kg to the Loutfy wet-weight central, and the 95th-percentile of 15 µg/kg is the Loutfy orange maximum. Confidence is held at low: the Ethiopian open-market survey ([[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]]) reports an orange cadmium of 147 µg/kg dry weight, more than an order of magnitude above every other anchor, which is carried as a stratified high-cadmium outlier rather than folded into the central estimate (see Ranges by source). The single review-derived orange cadmium of 100 µg/kg in [[sources/munir2022-heavy-metals-natural-foods-review|Munir et al. 2022]] traces to one Nigerian farm-site study and is treated as context, not as a pooled input.

Total mercury rests on the FDA censored floor alone. No source in the corpus reports a positive orange-specific total-mercury value: the FDA TDS composite is below the 1 µg/kg reporting limit across all 27 samples, and the fruit-by-product review that names oranges in scope ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]) carries no quantitative orange mercury entry and notes that mercury speciation is absent from its source data. The total-mercury cell is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]), no upper bound or 95th-percentile, at low confidence and a single contributor. Total mercury is held distinct from methylmercury and is not derived from it; no speciated methylmercury measurement exists for this ingredient.

Uranium is recorded as a reviewed data gap. FDA reports a single orange uranium detect of 6.5 µg/kg (Mid-Atlantic winter composite) against 26 of 27 samples below the 1 µg/kg reporting limit, and no non-FDA source reports an orange uranium value, so a single censored detect does not constitute an extractable quantitative distribution. No distribution is published (the rice-uranium precedent), and the cell is held as a reviewed gap rather than as a measured zero.

Chromium was resynthesized on 2026-06-23 onto the raw-orange edible-flesh wet-weight basis. The earlier profile reported chromium at a typical and 95th-percentile of zero at medium confidence; that was an artifact of the FDA TDS composite, in which all 27 "Orange, raw" samples fell below the 50 µg/kg chromium reporting limit and the below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Chromium is in fact low but non-zero in the orange-specific occurrence literature. The Egyptian Ismailia market survey ([[sources/loutfy2012-ismailia-foodstuffs-metals|Loutfy et al. 2012]], wet weight) reports an orange chromium mean of 9.1 µg/kg (range 4.2 to 15.8); the Nigerian ripening study ([[sources/okeke2026-calcium-carbide-ripened-fruits-metals|Okeke and Sanda 2026]]) reports naturally ripened orange chromium of 9 µg/kg (0.009 mg/kg). The Pakistani Khyber Pakhtunkhwa survey ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]) reports orange chromium of 6.9 µg/kg dry weight, which converts to roughly 0.9 µg/kg wet weight at an assumed orange-flesh moisture content of about 87 percent (dry-to-wet factor approximately 0.13); the Bangladeshi survey ([[sources/afrin2020-heavy-metals-fruits-dhaka|Afrin 2020]]) reports a study-wide fruit chromium range of 1 to 6 µg/kg dry weight, below 1 µg/kg wet weight after conversion. The Egyptian four-governorate survey ([[sources/amer2019-egyptian-fruits-heavy-metals|Amer et al. 2019]]) returned orange chromium below its 60 µg/kg detection limit in all samples. The South Korean fresh-fruit survey ([[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]], ICP-MS, fresh weight) detected chromium in 207 of 207 samples but reports only an all-14-species mean of 30.7 µg/kg with no orange-specific or citrus-specific chromium value, so it informs the order of magnitude of fresh-fruit chromium generally but is not used as the orange upper-typical anchor. The pooled chromium typical of [0, 9] takes a left-censored low bound of zero (the dry-weight-converted and non-detect observations sit below the analytical floor) and an upper-typical of 9 µg/kg anchored on the direct orange-specific wet-weight detects (Loutfy 9.1 µg/kg, Okeke naturally ripened 9 µg/kg), which sit below the FDA and Amer censored ceilings; the 95th-percentile of 50 µg/kg is the pooled FDA reporting limit, a defensible left-censored upper tail above which no orange chromium detect is observed. Confidence is held at low: the positive values are consistent across three independent surveys but span wet-weight, dry-weight, and fresh-weight bases that are not strictly inter-convertible, and one survey returned non-detects. Chromium is reported as total chromium throughout the corpus; no source speciated Cr-VI in oranges, so no inference about the hexavalent fraction is made. The Ethiopian open-market survey ([[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]]) reports an orange chromium of 759 µg/kg dry weight, roughly 99 µg/kg wet weight after conversion and an order of magnitude above every other orange-specific anchor; consistent with that study's framing of elevated soil-metal inputs in the Bahir Dar catchment (the same stratum that carries its high-cadmium outlier), it is held out of the central estimate as a high-chromium stratum rather than folded in.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 79, "Orange, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Orange, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 1.2 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 60.2 | 74.1 | 87 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 6.5 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 2.24 | 6.7 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw orange (n=27) provides the most comprehensive US monitoring baseline in the current corpus; it reports Pb, Cd, Cr, and tHg below their reporting limits across most or all composites, which constrains the orange-flesh burden from above rather than establishing it at zero. Ni was detected at concentrations ranging from 0 to 87 ppb (p90 approximately 60 ppb, max 87 ppb); tAs was detected in the upper tail of the distribution (p95 approximately 2 ppb, max 6.7 ppb); uranium showed a single detect at 6.5 ppb.

Primary fresh-fruit surveys that measure oranges by commodity recover low but non-zero lead and cadmium. The Egyptian Ismailia market survey ([[sources/loutfy2012-ismailia-foodstuffs-metals|Loutfy et al. 2012]]) reports orange lead of 48.6 µg/kg (range 20 to 72.2) and cadmium of 10.0 µg/kg (range 6 to 15.3) on a wet-weight basis; the Pakistani survey ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]) reports orange lead 39.2 µg/kg and cadmium 10.6 µg/kg on a dry-weight basis; and the European retail-citrus survey ([[sources/czech2021-citrus-lead-cadmium|Czech et al. 2021]]) reports whole-fruit orange lead 10 µg/kg and cadmium 0.34 µg/kg, the whole-fruit figure sitting at or above the pulp-only edible-flesh concentration because the rind concentrates both metals. Against these, three further surveys (Ethiopia, Egypt across four governorates, Nigeria) returned orange lead below their detection limits.

Two outliers are stratified out of the headline distribution. The Ethiopian open-market survey ([[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]]) reports an orange cadmium of 147 µg/kg dry weight, more than an order of magnitude above every other anchor and consistent with that study's framing of elevated soil cadmium and lead inputs in the Bahir Dar market catchment; it is recorded as a high-cadmium stratum, not folded into the central estimate. The review-derived orange lead of 5.80 mg/kg and cadmium of 0.10 mg/kg in [[sources/munir2022-heavy-metals-natural-foods-review|Munir et al. 2022]] trace to a single Nigerian farm-site study, are roughly 50 times the EU fruit maximum level for lead, and are treated as flagged context rather than pooled inputs. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides additional UK dietary-monitoring context. Variation between growing regions cannot yet be separated from analytical-basis differences (wet weight, dry weight, whole fruit) in the current corpus with sufficient granularity to isolate geographic from varietal effects.

## Processing effects

Peel removal before consumption or before juice extraction eliminates the outer tissue that carries the highest surface Pb deposition risk, though Pb in orange flesh is already below detection limits in US monitoring data. Peeling and consumption of the flesh without the peel (normal commercial and home practice) is therefore already the effectively lowest-metal consumption mode for this commodity. Drying to produce dried orange peel (used in confectionery and flavoring) concentrates analytes on a wet weight basis proportionally to moisture loss, and surface deposition on the peel is concentrated rather than removed. Juicing is addressed on the [[ingredients/orange-juice]] page.

## Ingredient-derivative risk

Fresh orange segments and commercially produced orange purée carry approximately equivalent metal profiles on a moisture-corrected basis, since purée production does not concentrate metals beyond the reduction in water content during the puréeing step. Dried orange peel and orange peel powder (used as a food ingredient and flavoring) concentrate any surface Pb and other metals present in the peel; these derivatives warrant separate occurrence characterization and should not be extrapolated from the flesh-based data that dominate the current corpus. Orange extract and orange oil (cold-pressed or steam-distilled) carry negligible metals because the extraction process is selective for lipophilic volatile compounds. Orange juice as a separate product category is covered on [[ingredients/orange-juice]].

## Mitigation options

### Sourcing levers

Given the uniformly low metal concentrations documented in orange flesh, commercial sourcing decisions for fresh oranges are not a material lever for metal-content management in normal agricultural practice. For dried peel or peel-containing derivatives, sourcing from growing regions with lower atmospheric Pb deposition (non-urban, non-industrial areas) reduces peel Pb risk.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard peel removal before consumption or processing of the flesh eliminates the primary surface-deposition risk. For peel-containing products, washing the peel before processing removes the most readily desorbed surface Pb.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the very low metal concentrations in orange flesh documented across monitoring programs, routine heavy metal testing of fresh orange is of low priority for most supply chain applications. For products incorporating orange peel (marmalade, flavoring extracts, supplements), Pb testing of the peel-derived ingredient provides relevant assurance.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh fruit on a wet weight basis, applicable to oranges. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb maximum levels for fresh fruit. No specific iAs or tHg regulatory limit applies to fresh citrus fruit. Orange juice (the derived product) is subject to a more stringent EU Pb limit of 0.050 mg/kg; see [[ingredients/orange-juice]] and [[regulations/eu2023-contaminants-maximum-levels]] for the juice-specific framework.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 13 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/loutfy2012-ismailia-foodstuffs-metals|Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt]]<span class="hmi-ref-meta">Loutfy N, Mentler A, Shoeab M, Ahmed MT, and Fuerhacker M · Toxicological & Environmental Chemistry · 2012 · [doi.org/10.1080/02772248.2011.638445](https://doi.org/10.1080/02772248.2011.638445)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits]]<span class="hmi-ref-meta">Rahim M, Saqib NU, Wahid F, Khan N, and Alrawi LI · Journal of Physical Science · 2020 · [doi.org/10.21315/jps2020.31.2.5](https://doi.org/10.21315/jps2020.31.2.5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/czech2021-citrus-lead-cadmium|Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits]]<span class="hmi-ref-meta">Czech A, Malik A, Sosnowska B, and Domaradzki P · International Journal of Food Science · 2021 · [doi.org/10.1155/2021/6662259](https://doi.org/10.1155/2021/6662259)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/mekonnen2024-ethiopia-fruit-metals|Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia]]<span class="hmi-ref-meta">Mekonnen BA, Yizengaw MG, Kassahun H, and Ketema G · International Journal of Food Science · 2024 · [doi.org/10.1155/2024/6677324](https://doi.org/10.1155/2024/6677324)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/amer2019-egyptian-fruits-heavy-metals|Exposure assessment of heavy metal residues in some Egyptian fruits]]<span class="hmi-ref-meta">Amer MM, Sabry BA, Marrez DA, Hathout AS, and Fouzy ASM · Toxicology Reports · 2019 · [doi.org/10.1016/j.toxrep.2019.06.007](https://doi.org/10.1016/j.toxrep.2019.06.007)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/unaegbu2016-fruit-heavy-metals-enugu|Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria]]<span class="hmi-ref-meta">Magdalene Unaegbu, Vincent C. I. Eze, Ebere C. I. Omeje, Ezinne A. O. Agbo, and Ebere V. Chukwuma · International Journal of Food Contamination · 2016 · [doi.org/10.1186/s40550-016-0031-9](https://doi.org/10.1186/s40550-016-0031-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/munir2022-heavy-metals-natural-foods-review|Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review]]<span class="hmi-ref-meta">Munir N, Jahangeer M, Bouyahya A, El Omari N, Ghchime R, Balahbib A, et al. · Sustainability · 2022 · [doi.org/10.3390/su14010161](https://doi.org/10.3390/su14010161)</span><span class="hmi-ref-tag">Review</span>
10. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/okeke2026-calcium-carbide-ripened-fruits-metals|Accumulation of Chromium, Lead and Arsenic in Calcium Carbide Induced Ripened Fruits and Their Possible Human Health Risks in Bauchi, Nigeria]]<span class="hmi-ref-meta">Chioma Udoka Okeke and Dauda Sanda · International Journal of Research and Scientific Innovation · 2026 · [doi.org/10.51244/IJRSI.2026.1315PH00024](https://doi.org/10.51244/IJRSI.2026.1315PH00024)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/afrin2020-heavy-metals-fruits-dhaka|Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City]]<span class="hmi-ref-meta">Afrin S · M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka · 2020</span><span class="hmi-ref-tag">Peer-reviewed</span>
13. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/okeke2026-calcium-carbide-ripened-fruits-metals\|Okeke et al. 2026]]. *Accumulation of Chromium, Lead and Arsenic in Calcium Carbide Induced Ripened Fruits and Their Possible Human Health Risks in Bauchi, Nigeria*, International Journal of Research and Scientific Innovation | 2026 | Peer-reviewed | NG Cr, Pb, tAs occurrence in Naturally ripened and calcium-carbide-ripened banana, pineapple, and orange purchased from local markets in Bauchi Metropolis, Nigeria; pulverized fruit... (n=6) |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 4 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 5 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions, 14 fruit species, April–October 2019 (n=207) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Orange, raw (n=27); detectable concentrations for Cd, Ni, U, tAs |
| 7 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 8 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | PL/TR/IL Pb, Cd occurrence in Eight species/cultivars of citrus fruit (orange, pomelo, mandarin, lemon, key lime, red/yellow/green grapefruit) purchased at a Polish supermarket,... (n=72) |
| 9 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 10 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Co, Ni, Cd, Pb occurrence in Eleven fruit varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) purchased at 1 kg... (n=308) |
| 11 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type) purchased from four Egyptian governorates (Cairo, Giza,... (n=108) |
| 12 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 13 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1e60f272d](https://github.com/paleofoundation/heavymetalindex/commit/1e60f272d) | 2026-08-04 | major | 10 sources removed; 1 section removed; narrative text revised |
| [3eb44d227](https://github.com/paleofoundation/heavymetalindex/commit/3eb44d227) | 2026-08-03 | major | 1 section added; narrative text revised |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
