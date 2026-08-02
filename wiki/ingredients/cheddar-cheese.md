---
title: "Cheddar cheese"
type: ingredient
commodity: cheddar-cheese
label: "Cheddar cheese"
aliases: [cheddar]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 250
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 120
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 21]
    p95_ppb: 90
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 150]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 80]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: cheese-as-sold-wet-weight
    speciation: total-Cr-only
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.3
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
sources: 2
---

# Cheddar cheese

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Cheddar cheese, like other dairy products derived from cow's milk, accumulates heavy metals at low concentrations relative to plant foods. The primary route is dietary transfer: cows ingest metals through feed and water, and a small fraction partitions into milk, where it distributes between the aqueous and fat fractions. During cheesemaking the curd-forming step concentrates the casein and fat fraction while draining the whey, so metals that bind casein (lead and, to a lesser extent, cadmium) are concentrated in the finished cheese relative to the source milk, while cadmium that stays in the aqueous phase is partly removed with the whey. The published partition data are mixed on direction; one detailed mining-region study reports roughly 60 percent of cadmium and a majority of lead partitioning into the curd ([[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]]), so cheese should not be assumed lower than milk for either metal without matrix-specific data.

The FDA Total Diet Study FY2018-FY2020 reported cadmium, lead, total arsenic, total mercury, nickel, and chromium all below their reporting limits across the 27 composite cheddar cheese samples, with only uranium detectable in trace amounts (maximum 1.3 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Those six below-limit results are left-censored bounds, not measured zeros: the honest US-market floor for each is the FDA reporting limit (lead 4, cadmium 1, total arsenic 3, total mercury 1, nickel 40, chromium 50 µg/kg), and the broader international cheese literature shows all six metals present at low but non-zero concentrations in cheese, with right tails driven by artisanal production and contaminated growing regions (see the Synthesis basis and censoring treatment section). The FSA/Fera FS102048 UK survey also measured cheddar cheese and reported low concentrations, but Table 6 has not yet been parsed into structured values [[sources/fsa2016-infant-food-formula-metals-survey]]. The concentration effect of aging (which reduces moisture content) applies to all constituents including metals, but the overall metal burden in aged cheddar remains low relative to plant-derived ingredients.

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, and chromium cells were resynthesized on 2026-06-11 on a cheese-as-sold wet-weight basis, the form in which the ingredient enters the supply chain. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all six of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Cheese, cheddar (sharp/mild)" (n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]]). No FDA composite for this food yielded a detected value for any of the six failing analytes, so the FDA dataset establishes a censored floor (a finding that US-market cheddar sits below the reporting limits above) but cannot establish a central or upper-tail value. The resynthesis carries the FDA result as a left-censored lower bound and draws the detected distributions from the cheese occurrence literature, which is dominated by non-US, frequently artisanal cheese; the resulting distributions are therefore stated at medium-to-low confidence and the regional and production-type stratification is made explicit rather than averaged away.

Lead rests on four cheese surveys. A Bangladeshi nationwide market survey of 128 cheese samples is the cleanest broad-market non-FDA anchor ([[sources/hasan2021-bangladesh-dairy-trace-elements|Hasan and Khanam 2021]], mean 10.9 µg/kg, range 5 to 25 µg/kg). Above that sit three regional or artisanal datasets in which lead is concentrated into the curd: traditional Turkish cheeses ([[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]], type means 48 to 242 µg/kg, with a single Golot outlier at 1789 µg/kg, nine-fold above the EU 200 µg/kg cheese limit), mining-region Georgian cheeses ([[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]], Imeruli mean 121 µg/kg, Sulguni mean 258 µg/kg, both above the EU/Codex 20 µg/kg milk limit), and Egyptian traditional cheeses from a market where 46 percent of source milk exceeded the national lead limit ([[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim et al. 2024]], Karish 340, Domiati 550, Ras 610 µg/kg). The typical band is set at the censored floor up to roughly 50 µg/kg to span the clean-market Bangladeshi central and the lower artisanal means; the 95th-percentile anchor of 250 µg/kg reflects the Georgian Sulguni and Egyptian artisanal means that recur across two independent surveys, while the single Turkish 1789 µg/kg sample is held out as a focal contamination event rather than a percentile driver.

Cadmium rests on the same four surveys. The clean-market and low-region values are low: mining-region Georgian cheese stayed at 2 to 7 µg/kg ([[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]]) and Turkish artisanal cheese at type means of 2 to 4 µg/kg, maximum 11 µg/kg ([[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]]), consistent with cadmium partitioning partly into the discarded whey. The upper tail is set by the Bangladeshi market mean of 31 µg/kg (range 16 to 42 µg/kg, [[sources/hasan2021-bangladesh-dairy-trace-elements|Hasan and Khanam 2021]]) and the much higher Egyptian artisanal means of 120 to 250 µg/kg ([[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim et al. 2024]]). The typical band runs from the censored floor to 30 µg/kg, capturing the clean-market low values and the Bangladeshi market central; the 95th-percentile anchor of 120 µg/kg reflects the lowest Egyptian artisanal mean, with the higher Egyptian Ras and Domiati values treated as a low-regulation-market stratum rather than a baseline.

Total arsenic rests on three surveys. An Argentine market survey of 14 cheeses is the most direct anchor ([[sources/arellano2023-dairy-products-arsenic-argentina|Arellano et al. 2023]], mean 20.6 µg/kg, range below detection to 142 µg/kg, by ICP-MS), corroborated by a Bangladeshi cheese mean of 31 µg/kg (range 5 to 88 µg/kg, [[sources/hasan2021-bangladesh-dairy-trace-elements|Hasan and Khanam 2021]]) and low Turkish artisanal values (type means 2.5 to 4.7 µg/kg, maximum 8.9 µg/kg, [[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]]). The typical band runs from the censored floor to 21 µg/kg around the Argentine market mean; the 95th-percentile anchor of 90 µg/kg reflects the upper end of the Bangladeshi range and the Argentine maximum. Total arsenic and inorganic arsenic are kept as distinct analytes; none of these sources speciate inorganic arsenic, so the inorganic-arsenic cell remains a reviewed data gap.

Total mercury rests on two surveys and stays sub-ppb at the center. Polish regional cottage and cream cheeses measured by direct-mercury analyzer ran from 0.04 to 0.23 µg/kg ([[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz 2012]]), the most directly relevant clean-market cheese mercury data in the corpus. The only elevated cheese mercury signal is a focal artisanal event: four of ten Turkish Telli string-cheese samples carried detectable mercury (subset mean 155 µg/kg, maximum 469 µg/kg), with the other six below detection and both other Turkish cheese types entirely below detection ([[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]]). The typical band is held at the censored floor to 1 µg/kg around the Polish values; the 95th percentile is left null because the corpus holds no grounded mid-range cheese mercury value between the sub-ppb Polish ceiling and the stratified-out Turkish artisanal subset, so any upper-tail figure would be an interpolation unsupported by a measured value. Total mercury is held distinct from methylmercury and is not derived from it.

Nickel rests on two surveys at low confidence. Mining-region Georgian cheese carried low nickel (Imeruli 11 µg/kg, Sulguni 26 µg/kg, [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]]), while Turkish artisanal cheese ran much higher and more variable (type means 154 to 1502 µg/kg, Golot maximum 3682 µg/kg, [[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]]), a spread the source itself attributes to equipment or feed-source contamination rather than a commodity baseline. The FDA composites are all below the 40 µg/kg nickel reporting limit. The typical band runs from the censored floor to 150 µg/kg, spanning the low Georgian values and the lowest Turkish type mean; the 95th percentile is left null because the only values above the low Georgian range are the equipment-contamination-driven Turkish means in the hundreds-to-thousands, with no grounded mid-range measurement to support an upper-tail number.

Chromium is reported as total chromium at low confidence; no cheese hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The total-chromium central rests on Georgian cheese (35 to 79 µg/kg, [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]]) and Turkish artisanal cheese (type means 68 to 85 µg/kg, maxima to 342 µg/kg, [[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]]); the Bangladeshi survey reports a much higher cheese mean of 474 µg/kg (range 76 to 886 µg/kg, [[sources/hasan2021-bangladesh-dairy-trace-elements|Hasan and Khanam 2021]]), which is held as a high stratum and not adopted as the central or upper-tail value pending corroboration, because a cheese chromium mean an order of magnitude above the Georgian and Turkish ranges is more consistent with a processing-equipment or analytical contribution than with a commodity-wide baseline. The FDA composites are all below the 50 µg/kg chromium reporting limit. The typical band runs from the censored floor to 80 µg/kg around the Georgian and Turkish ranges; the 95th-percentile value is left null because the corpus holds no grounded mid-range cheese chromium value between that ceiling and the stratified-out Bangladeshi mean.

Aluminium, tin, inorganic arsenic, and uranium were outside the scope of this resynthesis. Aluminium, tin, and inorganic arsenic remain reviewed data gaps; uranium retains its FDA-detected trace distribution.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–50 | medium | [[sources/hasan2021-bangladesh-dairy-trace-elements\|1]], [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia\|2]], [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|3]] |
| Cd | n=4 | 0–30 | medium | [[sources/hasan2021-bangladesh-dairy-trace-elements\|1]], [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|2]], [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–21 | medium | [[sources/arellano2023-dairy-products-arsenic-argentina\|1]], [[sources/hasan2021-bangladesh-dairy-trace-elements\|2]], [[sources/erol2025-turkish-cheese-metals\|3]] |
| tHg | n=2 | 0–1 | low | [[sources/pankiewicz2012-thg-dairy-products-poland\|1]], [[sources/erol2025-turkish-cheese-metals\|2]] |
| Ni | n=2 | 0–150 | low | [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia\|1]], [[sources/erol2025-turkish-cheese-metals\|2]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0–80 | low | [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia\|1]], [[sources/erol2025-turkish-cheese-metals\|2]], [[sources/hasan2021-bangladesh-dairy-trace-elements\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.2 | high | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 12, "Cheese, cheddar (sharp/mild)." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cheese, cheddar (sharp/mild)" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 1.24 | 1.3 | 1.3 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 reports all six failing metals below the reporting limit for cheddar cheese in 27 composite US-market samples, with uranium as the sole detectable element (maximum 1.3 ppb, 90th percentile 1.24 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]; those six results are left-censored bounds, not measured zeros, and establish only that US-market cheddar sits below the FDA reporting limits, not a population concentration. The detected cheese distributions in the broader literature span a wide range driven by production type and growing region rather than by the cheddar variety axis. The cleanest broad-market non-US anchor is a Bangladeshi nationwide survey of 128 cheese samples ([[sources/hasan2021-bangladesh-dairy-trace-elements|Hasan and Khanam 2021]], lead mean 11 µg/kg, cadmium mean 31 µg/kg, total arsenic mean 31 µg/kg), and an Argentine market survey places cheese total arsenic at a mean of 21 µg/kg ([[sources/arellano2023-dairy-products-arsenic-argentina|Arellano et al. 2023]]).

Traditional and artisanal cheeses from low-regulation or contaminated regions sit substantially higher and are stratified out of the central estimate: mining-region Georgian Imeruli and Sulguni cheeses carried lead means of 121 and 258 µg/kg ([[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Al Sidawi et al. 2021]], both above the EU/Codex 20 µg/kg milk limit but below the Georgian 500 µg/kg cheese limit), Egyptian traditional cheeses from a market where source milk frequently exceeded the national lead limit carried lead means of 340 to 610 µg/kg and cadmium means of 120 to 250 µg/kg ([[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim et al. 2024]]), and a single Turkish artisanal Golot cheese reached 1789 µg/kg lead and a Turkish Telli string cheese subset reached a 469 µg/kg mercury maximum ([[sources/erol2025-turkish-cheese-metals|Erol and Ürkek 2025]], a focal contamination event in two of thirty samples rather than a category-wide signal). These elevated values reflect artisanal production without standardized process controls and mining-adjacent or low-regulation supply chains; they are localised exceptions rather than characteristics of the commodity, and they set the upper tails of the lead and cadmium distributions while the artisanal mercury, nickel, and chromium extremes are held out of the percentile estimates as equipment, feed, or focal-contamination strata. Variation across cheddar varieties (mild, sharp, extra-sharp) is primarily a function of aging time and moisture content; as moisture decreases during aging, metal concentrations on a wet-weight basis increase proportionally, but this within-variety axis is small relative to the production-type and regional axis that dominates the cheese literature. The FSA/Fera FS102048 survey also measured cheddar across UK retail samples but Table 6 has not yet been parsed into structured values [[sources/fsa2016-infant-food-formula-metals-survey]].

## Processing effects

Cheesemaking involves acidifying milk with starter cultures, adding rennet to form a curd, cutting and draining the curd (which carries metals into the whey effluent), pressing, and aging. The whey-partition step is the most significant processing effect: cadmium preferentially partitions into the aqueous whey phase rather than the fat-and-protein curd, so the curd that forms cheese contains less cadmium per unit mass than the input milk. Lead follows a similar partition pattern. Uranium, which appeared as the only detectable metal in the FDA TDS cheddar data, may be retained in the curd fraction via binding to protein. Aging concentrates all retained metals in proportion to the reduction in moisture content; however, because the starting concentrations are so low, this concentration effect does not bring cheddar close to applicable regulatory limits even for long-aged varieties.

## Ingredient-derivative risk

Processed cheese products (American cheese, cheese slices, cheese sauces) that use cheddar as a base may incorporate additional ingredients with higher metal burdens, such as whey solids, modified starch, or flavouring agents; the composite product's metal profile reflects the ingredient blend rather than cheddar alone. Cheese powders, used in snack seasonings and packaged foods, concentrate all constituents including metals relative to fresh cheddar, but from a baseline so low that the resulting concentrations remain in the very-low range. No specific derivative risk has been identified in the current corpus that would distinguish cheddar-derived products as a meaningful metal exposure source.

## Mitigation options

### Sourcing levers

Cheddar cheese sourced from dairy operations with clean pasture land and clean water supply will carry the lowest metal burden in milk. For regions where environmental lead contamination of soil or water is a concern, selecting suppliers with documented water quality monitoring reduces the risk of elevated milk lead. However, the practical importance of sourcing levers is low given the already very low baseline concentrations observed in both US and UK surveys.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard cheesemaking practices, particularly the separation of whey from curd, already achieve substantial reduction in cadmium and lead relative to raw milk. No additional processing lever beyond standard practice is indicated given the existing very low concentrations.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level testing for heavy metals in cheddar cheese is generally not warranted given the low concentrations observed in multiple national surveys. For specialty applications where cheddar cheese powder is used as a significant fraction of a finished product formulation, confirmatory ICP-MS testing may be appropriate as part of a broader ingredient testing program. EU dairy Pb limits (0.020 mg/kg for milk, applied to cheese as a milk-equivalent basis in some regulatory interpretations) are sufficiently high that exceedances from routine cheddar would be unexpected.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU sets a lead maximum level of 0.020 mg/kg for raw milk and heat-treated milk; for cheese, the applicable limit and its basis (as-product versus milk-equivalent) depends on the regulatory instrument in effect. Under [[regulations/eu2023-contaminants-maximum-levels]], dairy product limits apply to the product as placed on the market. The EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets a cadmium maximum for cheese; exact cheese-specific values should be verified against the current regulatory text. No US FDA action level for Pb or Cd applies specifically to cheddar cheese; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides international cadmium limits for dairy products. Given the TDS findings of all-below-reporting-limit concentrations for Cd, Pb, tAs, tHg, Ni, and Cr in 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], typical US market cheddar is far below all applicable regulatory ceilings.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 2 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia|Heavy Metal Levels in Milk and Cheese Produced in the Kvemo Kartli Region, Georgia]]<span class="hmi-ref-meta">Al Sidawi R, Ghambashidze G, Urushadze T, and Ploeger A · Foods · 2021 · [doi.org/10.3390/foods10092234](https://doi.org/10.3390/foods10092234)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
4. [[sources/hasan2021-bangladesh-dairy-trace-elements|Detection of Trace Elements in Selective Dairy Products to assess Human Health Risk of Bangladeshi People]]<span class="hmi-ref-meta">Hasan GMMA and Khanam S · Oriental Journal of Chemistry · 2021 · [doi.org/10.13005/ojc/370222](https://doi.org/10.13005/ojc/370222)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/erol2025-turkish-cheese-metals|Safety and Nutritional Profile of Traditional Turkish Cheeses: A Comprehensive Study on Their Mineral Content, Heavy Metal Contamination, and Health Risks of Aho, Golot, and Telli]]<span class="hmi-ref-meta">Erol S and Ürkek B · Food Science & Nutrition · 2025 · [doi.org/10.1002/fsn3.4863](https://doi.org/10.1002/fsn3.4863)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Heavy metals in raw milk and Egyptian cheese types]]<span class="hmi-ref-meta">Ibrahim SA, El-Sohaimy SA, Abd El-Aziz M, and Shehata MG · Open Veterinary Journal · 2024 · [doi.org/10.5455/OVJ.2024.v14.i2.4](https://doi.org/10.5455/OVJ.2024.v14.i2.4)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/arellano2023-dairy-products-arsenic-argentina|Arsenic risk assessment through dairy products ingestion]]<span class="hmi-ref-meta">F.E. Arellano, A. Fernandez-Cirelli, S. Braeuer, W. Goessler, and A.L. Perez-Carrera · Arsenic in the Environment: Bridging Science to Practice for Sustainable Development · 2023 · [doi.org/10.1201/9781003317395-91](https://doi.org/10.1201/9781003317395-91)</span><span class="hmi-ref-tag">Conference</span>
8. [[sources/pankiewicz2012-thg-dairy-products-poland|Monitoring of total mercury level in selected dairy products from the south-east regions of Poland]]<span class="hmi-ref-meta">Pankiewicz U · Ecological Chemistry and Engineering A · 2012 · [doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cheese, cheddar (sharp/mild) (n=27); left-censored floor for Pb, Cd, tAs, tHg, Ni, Cr; detectable concentrations for U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
