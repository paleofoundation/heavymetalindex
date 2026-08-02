---
title: Potatoes
type: ingredient
commodity: potatoes
aliases: [white potato, russet potato, yukon gold, red potato, potato flakes, potato starch, dehydrated potato, french fries, potato chips]
category: starchy-root
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 31]
    p95_ppb: 200
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-potato-wet-weight
  Cd:
    status: populated
    typical_ppb: [15, 34]
    p95_ppb: 37.7
    confidence: high
    n_studies: 17
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [2, 15]
    p95_ppb: 25
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 13]
    p95_ppb: null
    confidence: low
    n_studies: 5
    last_reviewed: 2026-06-23
    basis: raw-potato-wet-weight
    speciation_note: total-Hg-only; no MeHg speciation in corpus; terrestrial Hg predominantly inorganic
  Ni:
    status: populated
    typical_ppb: [0, 48]
    p95_ppb: 79.4
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 1000]
    p95_ppb: 2500
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 9]
    p95_ppb: 63
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-potato-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 50
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 2.7
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: [soil-uptake, tuber-formation-in-soil, geography, peel-versus-flesh]
lower_risk_variants: ["[[ingredients/peeled-potato]]", "[[ingredients/potato-starch]]"]
higher_risk_variants: ["[[ingredients/unpeeled-potato]]", "[[ingredients/potato-skin]]", "[[ingredients/potato-peel-heavy-products]]"]
used_in_products: ["[[products/baby-food-vegetables]]", "[[products/french-fries]]", "[[products/potato-chips]]", "[[products/mashed-potato-products]]", "[[products/potato-starch-containing-baked-goods]]"]
audience: [regulator, educator, consumer, app]
sources: 51
wiki_doi: null
updated: 2026-06-23
---

# Potatoes

Potatoes are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as one of the population-level dietary cadmium contributors, placed in a joint "starchy roots and potatoes" category alongside other root vegetables. The commodity is distinct from the root-vegetables-for-babies category that the FDA CTZ Pb guidance treats under a dedicated 20 ppb action level.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–31 | medium | [[sources/rempelos2023-vegetable-organic-conventional-metals\|1]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|2]], [[sources/sixto2023-potatoes-sweet-potatoes-metals\|3]] |
| Cd | n=17 | 15–34 | high | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|3]] |
| iAs | n=4 | 2–15 | low | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| tAs | n=9 | 0 | medium | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|3]] |
| tHg | n=5 | 0–13 | low | [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=8 | 0–48 | medium | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|1]], [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Al | n=5 | 200–1000 | medium | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|1]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Cr | n=3 | 0–9 | low | [[sources/reczajska2005-chromium-plant-foods-poland\|1]], [[sources/stasinos2014-heavy-metals-tubers-review\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=3 | 0–20 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw-potato wet-weight basis, the form in which the commodity enters the ingredient supply chain. The FDA Total Diet Study reports this matrix as cooked Food 136 "Potato, peeled, boiled"; its values are carried as a corroborating as-consumed anchor rather than the headline basis, because most primary occurrence literature reports raw potato tubers and because peeling-plus-boiling removes a small fraction of the metal load relative to the raw tuber.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, chromium, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composites, in which every sample (or all but one) fell below the reporting limit and the reported zeros were pooled as literal zeros. For lead, FDA reported all 27 composites below the 4 µg/kg reporting limit; for uranium, all 27 below the 1 µg/kg reporting limit; for chromium, 26 of 27 below the 50 µg/kg reporting limit with a single detect at 63 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and recovers the upper distribution from primary raw-potato occurrence literature, in which lead and chromium are low but non-zero in tuber flesh.

The lead floor is set at the FDA 4 µg/kg reporting limit. The central distribution rests on the long-term UK Nafferton field trials ([[sources/rempelos2023-vegetable-organic-conventional-metals|Rempelos et al. 2023]], potato-tuber Pb main-effect means 21 to 31 µg/kg fresh weight) and on the Uruguayan wholesale-market survey ([[sources/sixto2023-potatoes-sweet-potatoes-metals|Sixto et al. 2023]], whole-potato pools mostly non-detect or below the limit of quantification on a fresh-weight basis). The 95th-percentile anchor of 200 µg/kg is the Babol, Iran retail potato mean ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour et al. 2023]], potato Pb 0.20 mg/kg fresh weight), which exceeds the Iranian national 0.1 mg/kg non-leafy limit and is drawn from a single agricultural plain with documented industrial and irrigation pressure. Industrial-zone potato exceeds this by one to two orders of magnitude and is treated as a stratified outlier rather than folded into the percentile: the Bogura, Bangladesh survey ([[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]]) reports potato lead of 5,970 to 25,770 µg/kg dry weight across the most-industrialized northern district, with a Pb contamination factor above 6, and is direct evidence only for produce grown in or near that kind of industrial soil-loading context.

Chromium is reported as total chromium only; no potato hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The chromium floor is the FDA 50 µg/kg reporting limit. The central fresh-weight distribution rests on the Polish plant-food survey ([[sources/reczajska2005-chromium-plant-foods-poland|Reczajska et al. 2005]], potato n=24, range below 1 to 11 µg/kg fresh weight, mean 3, median 4, 90th percentile 9 µg/kg). The 95th-percentile anchor of 63 µg/kg is the single FDA detect, the highest fresh-weight-comparable potato value in the corpus. Polluted-irrigation and industrial tubers run substantially higher on a dry-weight basis and are stratified rather than pooled: the tuber review ([[sources/stasinos2014-heavy-metals-tubers-review|Stasinos et al. 2014]]) compiles Thiva-basin Greek tuber total chromium of 1.9 to 4.1 mg/kg dry weight and a Latvian allotment mean of 0.16 mg/kg dry weight, and the Bogura survey reports vegetable-level total chromium below the detection limit to 5.44 mg/kg dry weight in an industrial district. These dry-weight polluted-region values are not basis-comparable to the fresh-weight percentile and are recorded as a separate contamination stratum, holding chromium confidence at low.

Uranium is recorded as a reviewed data gap: the only potato uranium measurement in the corpus is the fully censored FDA Total Diet Study cell (all 27 composites below the 1 µg/kg reporting limit), and no primary raw-potato source reports an extractable quantitative uranium value, so no distribution is published. The earlier non-zero-confidence zero was the same censoring artifact and is withdrawn.

Total mercury was resynthesized on 2026-06-23 on the same raw-potato wet-weight basis, replacing an earlier all-zero cell that was a censoring artifact of the total-diet-study composites. Potato mercury is dominated by below-limit observations: the FDA Total Diet Study reported all 27 "Potato, peeled, boiled" composites below the 1 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); the UK FERA total diet study reported the potatoes food group below 0.001 mg/kg (1 µg/kg), at the Hg limit of detection ([[sources/fera2015-uk-tds-metals|Baxter et al. 2015]]); and the German BfR MEAL study reported vegetables and potatoes predominantly below the 0.002 mg/kg (2 µg/kg) moist-food mercury limit of quantification, with 57 percent of all 869 pooled samples below the quantification limit study-wide ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Fechner et al. 2022]]). These censored composites set the left-censored floor below the 1 to 2 µg/kg reporting and quantification limits rather than at a literal zero. The two quantified whole-tuber detects in the corpus anchor the low typical distribution: a US farmers-market survey in Grand Forks, North Dakota measured a potato mercury mean of 0.0017 µg/g dry weight ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]]), which converts to roughly 0.4 µg/kg fresh weight at a potato moisture content near 79 percent (dry weight × 0.21); and a farm survey around the industrialized city of Solapur, Maharashtra reported potato mercury of 0.013 mg/kg (13 µg/kg) on an approximately fresh-weight basis ([[sources/mawari2022-heavy-metals-fruits-vegetables-india|Mawari et al. 2022]]), where potato was among the lowest mercury accumulators of the 24 commodities surveyed despite documented industrial atmospheric deposition that drove sorghum, fenugreek, and garlic an order of magnitude higher. The 13 µg/kg Solapur value is carried as the defensible upper-typical anchor rather than excluded as an outlier, because the potato measurement itself is modest and basis-comparable to the fresh-weight composites; no mining, smelter, or e-waste potato mercury value exists in the corpus to stratify out. No 95th-percentile tail is published: outside the single 13 µg/kg detect the distribution is censored or sub-1 µg/kg, so a defensible upper tail strictly above the typical high cannot be computed, and the 95th percentile is recorded as null. Mercury is reported as total mercury; no potato methylmercury speciation exists in the corpus, and terrestrial-crop mercury is predominantly inorganic, so methylmercury is never inferred from total mercury.

## Why this commodity accumulates cadmium

Potatoes are tubers that form and mature in direct soil contact, with cadmium uptake driven by soil cadmium concentration, soil pH, and tuber surface area. Cadmium concentrations tend to be modestly higher in potato peel than in potato flesh, though the gradient is less pronounced than for some other root-crop commodities. Regional variation in finished-potato cadmium reflects soil cadmium in the growing region, with phosphate-fertilizer-amended soils and hotspot areas producing elevated potato cadmium.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration in potatoes of 0.021 mg/kg across European samples, which is at the lower end of the starchy-roots category mean but still meaningful in population-exposure terms given high consumption volume._

## Processing effects

_Pending. Peeling removes a modest fraction of total potato cadmium because cadmium is distributed through the tuber rather than concentrated in the surface layer; peel-containing products (potato-skin-heavy dishes, processed products retaining peel) carry somewhat more cadmium than peeled-flesh products. Frying, baking, and boiling do not remove cadmium from the food._

## Ingredient-derivative risk

Potato-derived products (potato starch, potato flakes, dehydrated potato) inherit the cadmium concentration of the source potatoes. Potato starch, being isolated from flesh rather than from peel, tends to carry cadmium at the flesh-only concentration and therefore slightly below the whole-potato mean.

## Mitigation options

_Pending. Cultivar selection, soil management, and peeling are the primary mitigation levers. Note that peeling is in tension with the nutrient-retention rationale that keeps potato skin on in many modern preparations._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: the FDA Closer to Zero 20 ppb Pb action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]; see [[regulations/fda-ctz-Pb-rootveg-20ppb]]); white potatoes are not in the targeted category but the framing is adjacent.
- **iAs**: not a top staple-iAs contributor (rice dominates, [[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). See [[metals/arsenic]].

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for potatoes and starchy roots (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for root and tuber vegetables are 0.10 mg/kg (100 ug/kg) for Cd and 0.10 mg/kg (100 ug/kg) for Pb; for potatoes, the maximum levels apply to peeled potatoes after washing and edible-part separation.
- [[regulations/fda-ctz-Pb-rootveg-20ppb]] — FDA CTZ 20 ppb lead action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically and does not apply to potatoes, but the adjacent framing is worth noting for any future Cd analogue.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 136, "Potato, peeled, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Potato, peeled, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 13 | 15 | 25 | 34 | 37.7 | 42 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 63 | in profile |
| Ni | 27 | 0 | 0 | 0 | 48 | 79.4 | 91 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 2.66 | 4.8 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/rempelos2023-vegetable-organic-conventional-metals|Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials]]<span class="hmi-ref-meta">Leonidas Rempelos, Marcin Baranski, Enas Khalid Sufar, Jenny Gilroy, Peter Shotton, Halima Leifert, et al. · Agronomy · 2023 · [doi.org/10.3390/agronomy13051225](https://doi.org/10.3390/agronomy13051225)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/sixto2023-potatoes-sweet-potatoes-metals|Inorganic contaminants (As, Cd, Pb) in peeled and whole potatoes and sweet potatoes]]<span class="hmi-ref-meta">Sixto A, Mollo A, Ibanez F, and Piston M · Agrociencia Uruguay · 2023 · [doi.org/10.31285/AGRO.27.1060](https://doi.org/10.31285/AGRO.27.1060)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/abdolahpour2023-heavy-metals-babol-vegetables|The health risk assessment of heavy metals in vegetables grown in Babol city, Iran]]<span class="hmi-ref-meta">Abdolahpour Alamdari H, Sleman Ali H, Sadighara P, Jahed Khaniki G, Shahsavanpoor Landeh K, and Dehghani MH · International Archives of Health Sciences · 2023 · [doi.org/10.48307/IAHSJ.2023.177176](https://doi.org/10.48307/IAHSJ.2023.177176)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/samma2024-bangladesh-vegetable-metals|Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach]]<span class="hmi-ref-meta">Samma S, Islam Khan MS, Islam Chowdhury MT, Islam MA, Fick J, and Kaium A · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241282601](https://doi.org/10.1177/11786302241282601)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/reczajska2005-chromium-plant-foods-poland|Determination of Chromium Content of Food and Beverages of Plant Origin]]<span class="hmi-ref-meta">Reczajska W, Jedrzejczak R, and Szteke B · Polish Journal of Food and Nutrition Sciences · 2005</span><span class="hmi-ref-tag">Review</span>
8. [[sources/stasinos2014-heavy-metals-tubers-review|The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review]]<span class="hmi-ref-meta">Stasinos S, Nasopoulou C, Tsikrika C, and Zabetakis I · Journal of Food Science · 2014 · [doi.org/10.1111/1750-3841.12433](https://doi.org/10.1111/1750-3841.12433)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/fera2015-uk-tds-metals|Total Diet Study of metals and other elements in food]]<span class="hmi-ref-meta">Baxter M and Brereton N · Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 · 2015 · [www.food.gov.uk](https://www.food.gov.uk/research/total-diet-study)</span><span class="hmi-ref-tag">Government</span>
10. [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods]]<span class="hmi-ref-meta">Fechner C, Hackethal C, Höpfner T, Dietrich J, Bloch D, Lindtner O, et al. · Food Chemistry: X · 2022 · [doi.org/10.1016/j.fochx.2022.100326](https://doi.org/10.1016/j.fochx.2022.100326)</span><span class="hmi-ref-tag">Review</span>
11. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Review</span>
12. [[sources/mawari2022-heavy-metals-fruits-vegetables-india|Heavy Metal Accumulation in Fruits and Vegetables and Human Health Risk Assessment: Findings From Maharashtra, India]]<span class="hmi-ref-meta">Mawari G, Kumar N, Sarkar S, Daga MK, Singh MM, Joshi TK, et al. · Environmental Health Insights · 2022 · [doi.org/10.1177/11786302221119151](https://doi.org/10.1177/11786302221119151)</span><span class="hmi-ref-tag">Review</span>
13. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
14. [[sources/fda-iAs-rice-cereal-2020|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 4 | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|Kumar et al. 2024]]. *High Arsenic Contamination in the Breast Milk of Mothers Inhabiting the Gangetic Plains of Bihar: A Major Health Risk to Infants*, Environmental Health 23(1) | 2024 | Peer-reviewed | tAs and iAs in breast milk, child urine, drinking water, rice, wheat, and potato from 11 arsenic-affected Bihar districts (n=513 women); potatoes included as a dietary arsenic-exposure pathway in a high-groundwater-arsenic region |
| 5 | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|Mohammadian-Hafshejani et al. 2024]]. *Investigating the Relationship between Cadmium Exposure and the Risk of Prostate Cancer: A Systematic Review and Dose-Response Meta-Analysis*, Journal of Health (Tehran University of Medical Sciences) | 2024 | Peer-reviewed | IR/US/EU Cd occurrence in 16 observational studies (case-control, cross-sectional, cohort) on Cd exposure and prostate cancer risk; searches up to May 2022 (n=16) |
| 6 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | Cu, Cr, and Pb in potatoes and four other vegetables paired with soils from six upazilas in industrial Bogura, Bangladesh; Pb contamination factor >6 and HI >1 across all sites |
| 7 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 8 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 9 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Cd and Pb in potatoes (mean 0.03 Cd, 0.20 Pb mg/kg fw) alongside seven other vegetables from Babol, Iran by AAS; HQs below 1 for potatoes, in contrast to leafy variants exceeding Iran National Standards |
| 10 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 11 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | EC As, Cd, Cr, Cu, Ni, Pb, Zn concentrations |
| 12 | [[sources/sixto2023-potatoes-sweet-potatoes-metals\|Sixto et al. 2023]]. *Inorganic contaminants (As, Cd, Pb) in peeled and whole potatoes and sweet potatoes*, Agrociencia Uruguay | 2023 | Peer-reviewed | UY tAs, Cd, Pb occurrence in Pooled potato and sweet-potato samples from Uruguay's Metropolitan Agrifood Market, collected in February and July-August between 2018 and... (n=22) |
| 13 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 14 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 15 | [[sources/bramwell2022-urban-garden-produce-lead\|Bramwell et al. 2022]]. *Determinants of blood and saliva lead concentrations in adult gardeners on urban agricultural sites*, Environmental Geochemistry and Health | 2022 | Peer-reviewed | GB Pb occurrence in 43 adult urban-agriculture-site gardeners and 29 matched controls in Newcastle upon Tyne, UK; environmental sampling included nearly 280... (n=72) |
| 16 | [[sources/diyarov2022-food-processing-heavy-metals\|Diyarov et al. 2022]]. *The effect of food processing on the content of heavy metals in vegetables*, Chemical Bulletin of Kazakh National University | 2022 | Peer-reviewed | KZ Zn, Pb, Mn, Cd, Cu occurrence in Carrot, potato, and onion samples subjected to different food-processing treatments |
| 17 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Pb, Cd, tAs, iAs, tHg, Ni, and Cr in baked potato (with peel) and potato chips across 29,148 analytical rows from 90 US prepared TDS foods (FY2018–2020); potato chips ranked highest for Cd among TDS foods at P95 190 ppb |
| 18 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | German MEAL TDS occurrence of tHg, Cd, Pb, and Ni in potato-containing food group composites among 869 pooled samples covering 90%+ of German consumption; all measured levels below applicable EU MLs |
| 19 | [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|Mawari et al. 2022]]. *Heavy Metal Accumulation in Fruits and Vegetables and Human Health Risk Assessment: Findings From Maharashtra, India*, Environmental Health Insights | 2022 | Peer-reviewed | Pb, Cd, tAs, and tHg in potato and 23 other commodities from Maharashtra, India by ICP-MS with native soils; potato among the top accumulators after garlic, with anthropogenic soil Pb elevation at several sites |
| 20 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 21 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 22 | [[sources/zhao2022-china-sixth-tds-pb-cd\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in Adult Chinese males (18–45 years, 63 kg reference body weight), 24 provincial-level administrative divisions (PLADs), 2016–2019; 288 composite... (n=288) |
| 23 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 24 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | NG/CN/TZ Pb, Cd, iAs, tAs, tHg, Cr, Ni occurrence in Narrative review with no primary measurements; six-page invited contribution to a Current Opinion in Toxicology themed issue on... |
| 25 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 26 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 27 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd mitigation review citing potato chips at 93 µg/kg (FDA TDS 2014–2016) as the third-ranked food by mean lower-bound Cd; emphasizes soil pH, cultivar selection, and fertilizer choice as the dominant pre-harvest Cd levers |
| 28 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 29 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Al, Sb, tAs, Cd, Cr, Ni, and Sn in 291 French infant and toddler foods including potato-containing vegetable meals, soups, and purees; occurrence data for potato-based baby food matrices across the first French infant TDS |
| 30 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 31 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | FSAI Irish TDS — Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn occurrence in potato food category among 141 samples representing the Irish diet, prepared as consumed for adults and children |
| 32 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 33 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | UK FERA/FSA TDS occurrence of Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb in the potatoes food group, composited from 3,312 retail samples across 24 UK locations on an as-consumed basis |
| 34 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 35 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook chapter on Cd toxicology covering toxicokinetics, renal tubular endpoint, carcinogenicity, and risk assessment, with food occurrence data citing potatoes and root vegetables as significant Cd contributors in European diets |
| 36 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 37 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 38 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
| 39 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | Cross-country review of Pb, Cd, tAs, Cr, Ni, and Al bioaccumulation in potato tubers from polluted-irrigation contexts in Greece, Latvia, US, Spain, Morocco, and Poland; argues for an EFSA regulatory gap between water and tuber limits |
| 40 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 41 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 42 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 43 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; identifies potatoes as a major absolute dietary Cd contributor in Europe despite moderate concentrations, due to high consumption volumes |
| 44 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 45 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 46 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Total Cr in potato among 272 Polish plant-origin food samples by ZETAAS; regional variation across three Polish provinces with potato as part of the dietary chromium baseline |
| 47 | [[sources/ec2004-scoop-heavy-metals-dietary-exposure\|EC 2004]]. *Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States*, Reports on tasks for scientific cooperation, SCOOP Task 3.2.11 | 2004 | Government report | EU/BE/DK tAs, Cd, Pb, tHg occurrence in Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under... |
| 48 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | California OEHHA hazard identification for Cd reproductive and developmental toxicity, providing the scientific basis for the Proposition 65 reproductive-toxicity listing of Cd (effective 1997); potatoes and root vegetables cited as dietary Cd exposure sources underpinning the exposure assessment context |
| 49 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in 2,221 food samples from the Danish National Food Institute literature survey (AAS/PIXE, 1969–1982), reporting Ni content of potatoes and estimating contribution to total dietary Ni intake via load factor analysis in the Danish average diet model |
| 50 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 6 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | 5 sources added; contamination-profile values revised; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 7 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
