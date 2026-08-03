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
    typical_ppb: [0, 98]
    p95_ppb: 112
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-cucumber-edible-flesh-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 2.4]
    p95_ppb: 2.9
    confidence: high
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 2.3]
    p95_ppb: 2.3
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-cucumber-edible-flesh-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 28
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 703]
    p95_ppb: 827
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 175]
    p95_ppb: 222
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: raw-cucumber-edible-flesh-wet-weight
    speciation: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [0, 10.1]
    p95_ppb: 20.1
    confidence: medium
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
updated: 2026-06-11
sources: 17
---

# Cucumber

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Cucumber is a cucurbit fruit that is botanically a berry of a vine plant and is consumed as a vegetable in virtually all culinary contexts. It is characterized by a very high water content (approximately 96% water by weight), which substantially dilutes any metal concentration in the edible flesh. Root uptake of cadmium and lead from soil does occur, but the translocation of these metals from root to fruit is limited: cucurbit fruits are physiologically distal from the root system and are not preferred sink tissues for cadmium or lead accumulation under normal soil conditions. The outer skin may carry somewhat more Pb than the interior flesh through atmospheric particle deposition, but the inner flesh is generally the consumed portion when peeled.

The FDA TDS FY2018-FY2020 data for peeled raw cucumber (n=27 composites, TDS Food 123) is consistent with this low-risk characterization, but the lead, total-mercury, chromium, and uranium cells in that dataset are fully left-censored rather than measured zeros: every one of the 27 composites fell below the FDA reporting limit for Pb (4 µg/kg), tHg (1 µg/kg), Cr (50 µg/kg), and U (1 µg/kg) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Those below-limit results constrain the flesh metal burden from above; they are carried here as left-censored bounds, not as evidence that the metals are absent. The primary fresh-cucumber occurrence literature confirms that lead, total mercury, and total chromium are low but non-zero in cucumber flesh (see the Synthesis basis and censoring treatment section). Cadmium shows low-level detection in some FDA samples (median 1.6 ppb, maximum 3.2 ppb), Ni appears in the upper tail (p95 28 ppb, maximum 76 ppb), and tAs is consistently detectable at moderate levels (median 14 ppb, maximum 31 ppb, p90 20 ppb). The total arsenic signal is notable given the cucurbit's low-risk general reputation and warrants attention, though without iAs speciation it is not possible to determine the proportion attributable to inorganic versus organic arsenic species in this matrix.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 1 at 5-14, 8 below 5 | below pooling depth: Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 3 of 10 populated analytes declare a basis | no wet/dry basis declared: Cd, iAs, tAs, Ni, Al, Sn, U |
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
| Pb | n=5 | 0–98 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/mohammadi2025-iran-carrot-cucumber-metals\|2]], [[sources/alimohammadi2018-tehran-supermarket-vegetables\|3]] |
| Cd | n=3 | 0–2.4 | high | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | n=1 | 0.5–680.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 3.6–20 | high | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=3 | 0–2.3 | low | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | n=1 | 0–703 | medium | — |
| Cr | n=4 | 0–175 | low | [[sources/mohammadi2025-iran-carrot-cucumber-metals\|1]], [[sources/alimohammadi2018-tehran-supermarket-vegetables\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| Sn | n=1 | 0–10.1 | medium | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw-cucumber edible-flesh wet-weight basis, the form in which the peeled fruit is consumed and the basis FDA Total Diet Study Food 123 ("Cucumber, peeled, raw") reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study composite for peeled raw cucumber (n=27), in which every sample fell below the reporting limit for each of these metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored low bound and recovers the upper distribution, where primary fresh-cucumber occurrence literature supports it.

Lead is recovered at medium confidence from five distinct contributors against the FDA censored floor. The Romanian retail-and-amateur survey ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]], ICP-MS, fresh weight) reports long-cucumber lead of 112.0 µg/kg in market produce and 59.8 µg/kg in amateur-farm produce, with kirby cucumber below the limit of detection. The Iranian Fars Province survey ([[sources/mohammadi2025-iran-carrot-cucumber-metals|Mohammadi et al. 2025]], ICP, fresh-weight-converted) reports a cucumber lead mean of 75 µg/kg across seven sampling points (site means 46 to 109 µg/kg). The Tehran supermarket survey ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]], fresh weight) reports cucumber lead of 40 µg/kg in summer and 98 µg/kg in autumn. The North Dakota farmers-market survey ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]]) reports cucumber lead of 21 µg/kg on a dry-weight basis. The pooled lead typical of [0, 98] takes the FDA censored floor as the low bound and the Tehran autumn value as the upper central; the 95th-percentile of 112 µg/kg is the Bora market long-cucumber value, the top of the ordered pooled set of fresh-weight market values. Confidence is held at medium because the contributors converge in the 40 to 112 µg/kg range but are all non-US fresh-weight surveys set against a fully censored US composite. One source is excluded from the pooled distribution as an apparent unit anomaly: the Polish fermentation study ([[sources/kiczorowski2022-fermented-vegetables-metals|Kiczorowski et al. 2022]]) reports raw cucumber lead of 5.30 µg/g fresh matter, which is 5,300 µg/kg, roughly fifty times every other cucumber lead measurement in the corpus and above any regulatory maximum, yet the source flags no exceedance; the value is most consistent with a dry-weight or unit-label error and is recorded here as excluded rather than allowed to corrupt the headline.

Total mercury is recovered at low confidence from three contributors. The background (non-industrial) signal rests on the control sample of the Chinese coal-plant survey ([[sources/li2017-mercury-vegetables-grains-coal-power-china|Li et al. 2017]], fresh weight), which reports control-farmland cucumber total mercury of 0.87 µg/kg more than 55 km from any power plant, and on the North Dakota survey (Saleem et al. 2025), which reports cucumber total mercury of 2.3 µg/kg on a dry-weight basis. The FDA composite is below its 1 µg/kg reporting limit throughout. The pooled total-mercury typical of [0, 2.3] spans the FDA censored floor to the Saleem dry-weight value, with the 95th-percentile set at the same 2.3 µg/kg; confidence is low because only the dry-weight North Dakota value and a single Chinese control point sit above the censored floor. The Li et al. cucumber samples collected within 10 km of operating coal-fired power plants ran from 2.18 to 38.45 µg/kg fresh weight, an industrial-deposition stratum that is held separate from the background distribution (see Ranges by source, region, and variety). Total mercury is held distinct from methylmercury, which is not measured for this commodity and is not inferred from total mercury.

Total chromium is recovered at low confidence and is reported as total chromium only; no cucumber hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The Iranian Fars Province survey (Mohammadi et al. 2025) reports a cucumber total-chromium mean of 175 µg/kg fresh weight (site means 192 to 211 µg/kg), the Tehran survey (Alimohammadi et al. 2018) reports 127 µg/kg in summer and 222 µg/kg in autumn, and the North Dakota survey (Saleem et al. 2025) reports 34 µg/kg on a dry-weight basis, against a fully censored FDA cell below the 50 µg/kg reporting limit. The pooled total-chromium typical of [0, 175] spans the FDA censored floor to the Mohammadi fresh-weight mean; the 95th-percentile of 222 µg/kg is the Tehran autumn value, the top of the ordered pooled set. Confidence is low because chromium is total-only, the positive measurements are non-US fresh-weight surveys, and the FDA composite is fully censored.

Uranium is recorded as a reviewed data gap: the only cucumber uranium measurement in the corpus is the fully censored FDA Total Diet Study cell (all 27 composites below the 1 µg/kg reporting limit), and no primary fresh-vegetable source reports an extractable quantitative cucumber uranium value, so no distribution is published (the rice-uranium precedent). This is a reviewed finding, not a placeholder.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 123, "Cucumber, peeled, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cucumber, peeled, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 1.6 | 2.38 | 2.85 | 3.2 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 28 | 76 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 3.64 | 14 | 20 | 20.7 | 31 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data for peeled cucumber (n=27) provide the most structured single occurrence dataset currently in the corpus for this commodity [[sources/fda2022-tds-elements-fy2018-fy2020]]. The 27-sample US market-basket composites report lead, chromium, total mercury, and uranium below their reporting limits throughout the distribution; those are left-censored bounds, not measured zeros. The detected analytes in that dataset are cadmium (median 1.6 ppb, max 3.2 ppb), nickel (p95 28 ppb, max 76 ppb), and total arsenic (median 14 ppb, max 31 ppb), the last being the most notable consistently detectable signal. The FSA/Fera FS102048 survey provides additional data points awaiting structured integration [[sources/fsa2016-infant-food-formula-metals-survey]].

The fresh-cucumber lead, chromium, and total-mercury signal recovered from the primary literature shows a clear geographic and exposure gradient. Background-condition retail and farmers-market cucumber from Romania, Iran, and the United States carries lead in the 21 to 112 µg/kg range and total chromium in the 34 to 222 µg/kg range, with the higher values in autumn-harvest Tehran produce ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]]) and Iranian Fars Province produce ([[sources/mohammadi2025-iran-carrot-cucumber-metals|Mohammadi et al. 2025]]); both of these are total-chromium measurements with no hexavalent-chromium fraction resolved. Romanian market cucumber carried roughly twice the lead of amateur-farm cucumber from the same region (112 vs 60 µg/kg), which the source attributes to commercial supply-chain inputs rather than farm-gate exposure ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]]).

Industrial and atmospheric-deposition settings drive cucumber metal loads well above this background range and are held as a separate stratum. The Chinese coal-fired-power-plant survey found cucumber total mercury rising from a control-farmland value of 0.87 µg/kg (more than 55 km from any plant) to 38.45 µg/kg within 1 km of an operating plant, a roughly forty-fold enrichment driven by atmospheric mercury deposition onto the growing crop ([[sources/li2017-mercury-vegetables-grains-coal-power-china|Li et al. 2017]]). These industrially exposed values are not pooled into the headline total-mercury distribution, which rests on the background control point and the US dry-weight measurement. The Egyptian farming-system comparison reports conventional cucumber carrying about 1.3 times the total heavy-metal load of greenhouse or organic cucumber from the same market, with lead at roughly 0.25 to 0.45 mg/kg in conventional samples ([[sources/mansour2014-monitoring-health-risk-food-chapter|Mansour 2014]], cited from Mansour et al. 2009a); these are total-metal-fraction estimates and are treated as context rather than as a pooled anchor.

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

The tAs signal in the TDS peeled cucumber data (median 14 ppb, max 31 ppb across n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020]] is worth monitoring with speciated arsenic testing (iAs vs tAs) to characterize whether the detected arsenic is primarily inorganic or organic. Lead is the analyte most worth routine monitoring: although the US TDS composite is below its 4 µg/kg reporting limit, fresh-market cucumber in the primary literature reaches a pooled 95th-percentile of 112 µg/kg, at the EU non-leafy-vegetable maximum level, with market produce running roughly double amateur-farm produce [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing]]. Total chromium is detectable in fresh cucumber up to roughly 220 µg/kg in non-US surveys; because no hexavalent-chromium fraction has been measured in this commodity, speciated Cr-VI testing would resolve the toxicologically relevant question that total-chromium data leave open. Nickel in the upper tail (max 76 ppb) also warrants periodic testing for commercial cucumber-based products.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in cucumber is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in vegetables (other than leafy vegetables and brassicas) is 0.10 mg/kg (100 ppb) wet weight, and for cadmium in vegetables it is 0.050 mg/kg (50 ppb) wet weight. Cucumber falls within the general vegetable category. The FDA TDS cadmium maximum of 3.2 ppb sits well within the cadmium limit [[sources/fda2022-tds-elements-fy2018-fy2020]]. Lead is below the FDA reporting limit in the US composite, but the fresh-cucumber lead distribution recovered from the primary literature reaches a pooled 95th-percentile of 112 µg/kg (Romanian market long cucumber), which is at the EU 100 ppb maximum level for non-leafy vegetables; most surveyed fresh cucumber sits below it, but the upper tail of market produce approaches the limit, so lead is the analyte most worth watching for compliance in this commodity. Codex Alimentarius (CXS 193-1995 and revisions) sets a general vegetable lead limit of 0.10 mg/kg. No US federal maximum level for lead or cadmium in cucumbers has been finalized as of 2026.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 17 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/mohammadi2025-iran-carrot-cucumber-metals|Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation]]<span class="hmi-ref-meta">Hamed Mohammadi, Mohammad Ansarizadeh, Masoud Yousefi, Rozhan Feizi, Navid Alinejad, and Fereshteh Talebi · Discover Sustainability · 2025 · [doi.org/10.1007/s43621-025-01930-2](https://doi.org/10.1007/s43621-025-01930-2)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/alimohammadi2018-tehran-supermarket-vegetables|Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment]]<span class="hmi-ref-meta">Alimohammadi M, Younesian M, Madihi-Bidgoli S, Nabizadeh Nodehi R, Jahed Khaniki GR, Hadi M, et al. · Toxin Reviews · 2018 · [doi.org/10.1080/15569543.2018.1522644](https://doi.org/10.1080/15569543.2018.1522644)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/kiczorowski2022-fermented-vegetables-metals|Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition]]<span class="hmi-ref-meta">Kiczorowski P, Kiczorowska B, Samolinska W, Szmigielski M, and Winiarska-Mieczan A · Scientific Reports · 2022 · [doi.org/10.1038/s41598-022-17782-z](https://doi.org/10.1038/s41598-022-17782-z)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/li2017-mercury-vegetables-grains-coal-power-china|Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants]]<span class="hmi-ref-meta">Li R, Wu H, Ding J, Fu W, Gan L, and Li Y · Scientific Reports · 2017 · [doi.org/10.1038/srep46545](https://doi.org/10.1038/srep46545)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/mansour2014-monitoring-health-risk-food-chapter|Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food]]<span class="hmi-ref-meta">Mansour SA · Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) · 2014 · [doi.org/10.1002/9781118474563.ch13](https://doi.org/10.1002/9781118474563.ch13)</span><span class="hmi-ref-tag">Textbook</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mohammadi2025-iran-carrot-cucumber-metals\|Mohammadi et al. 2025]]. *Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation*, Discover Sustainability | 2025 | Peer-reviewed | IR Pb, Cd, Cr, Ni occurrence in Three carrot samples and three cucumber samples from each of seven cities or sampling points in Fars Province,... (n=42) |
| 2 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 3 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
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
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
