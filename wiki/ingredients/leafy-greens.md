---
title: "Leafy Greens"
type: ingredient
commodity: leafy-greens
label: "Leafy Greens"
aliases: [mustard-greens, watercress, water-spinach]
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: 610
    confidence: high
    n_studies: 19
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 150]
    p95_ppb: 400
    confidence: high
    n_studies: 22
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 15]
    p95_ppb: 50
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [35, 560]
    p95_ppb: 3465
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [1000, 50000]
    p95_ppb: 150000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 560]
    p95_ppb: 1551
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 250]
    p95_ppb: 410
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 41
---

# Leafy Greens

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 3 at 15+ studies, 3 at 5-14, 2 below 5 | below pooling depth: Al, Sn |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=19 | 5–200 | high | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/chiutula2025-wastewater-vegetables-malawi\|3]] |
| Cd | n=22 | 5–150 | high | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/chiutula2025-wastewater-vegetables-malawi\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=11 | 5–250 | high | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| tHg | n=6 | 1–15 | medium | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Ni | n=13 | 35–560 | high | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| Al | n=3 | 1000–50000 | medium | [[sources/adhikari2024-leafy-vegetables-johannesburg\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Cr | n=15 | 10–560 | high | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| Sn | n=2 | 0–10 | low | [[sources/fera2015-uk-tds-metals\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/non-root-vegetable-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 41 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/adhikari2024-leafy-vegetables-johannesburg|Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa]]<span class="hmi-ref-meta">Adhikari S and Struwig M · 2024 · [doi.org/10.1007/s10661-023-12343-4](https://doi.org/10.1007/s10661-023-12343-4)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/chiutula2025-wastewater-vegetables-malawi|Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi]]<span class="hmi-ref-meta">Chiutula C, Mtewa AG, Abraham A, Mvula RLS, Maluwa A, Eregno FE, et al. · International Journal of Environmental Research and Public Health · 2025 · [doi.org/10.3390/ijerph22111614](https://doi.org/10.3390/ijerph22111614)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/armand2026-lettuce-cabbage-behbahan|Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation]]<span class="hmi-ref-meta">Armand R, Rafati L, Mohammadi H, and Armand N · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/cfs2012-hktds-inorganic-arsenic|The First Hong Kong Total Diet Study: Inorganic Arsenic]]<span class="hmi-ref-meta">Centre for Food Safety FEHD HKSAR · Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region · 2012 · [www.cfs.gov.hk](https://www.cfs.gov.hk/english/programme/programme_rdss/programme_rdss_tds_report.html)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/cfs2013-hktds-metallic-contaminants|The First Hong Kong Total Diet Study: Metallic Contaminants]]<span class="hmi-ref-meta">Centre for Food Safety (Hong Kong) · Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region · 2013 · [www.cfs.gov.hk](https://www.cfs.gov.hk/english/programme/programme_firm/programme_firm_tds.html)</span><span class="hmi-ref-tag">Government</span>
7. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hossen2026-noakhali-vegetables-heavy-metals\|Hossen et al. 2026]]. *Assessment of heavy metal levels and associated health risks linked to vegetables grown in Noakhali region of Bangladesh*, Environmental Health Insights | 2026 | Peer-reviewed | BD tAs, Pb, Cd, Cr, Fe, Cu occurrence in Fifty-four samples from nine integrated farms in Noakhali, Bangladesh: nine vegetable samples and nine corresponding soil samples, each... (n=54) |
| 2 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula et al. 2025]]. *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*, International Journal of Environmental Research and Public Health | 2025 | Peer-reviewed | Cd, Cr, Pb concentrations in six exotic and indigenous leafy vegetable species (including Chinese cabbage, mustard, rape, pumpkin leaves, sweet potato leaves, amaranth) irrigated with wastewater effluent in Blantyre, Malawi |
| 3 | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | Pb, Cd, tAs, Ni, Cr, and tHg in 153 composite Hawke's Bay (NZ) vegetable samples post-Cyclone Gabrielle, with organic production independently associated with lower Cd and Ni and Brassica rapa exceeding the Codex Cd limit at 0.093 mg/kg FW |
| 4 | [[sources/jurkovic2025-flooded-chard-metals\|Jurkovic et al. 2025]]. *Heavy Metals and Microbiological Assessment of the Soil-Plant System of Flooded Areas Applied on Chard (Beta vulgaris)*, ACS Omega | 2025 | Peer-reviewed | BA Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Soil, sludge, and chard samples from flooded and control areas in central Bosnia and Herzegovina after autumn 2024... (n=21) |
| 5 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 6 | [[sources/osuolale2025-leafy-vegetables-ondo-trace-elements\|Osuolale et al. 2025]]. *Assessing Public Health Risks from Trace Element Contamination in Common Leafy Vegetables from Ondo, Nigeria, Using PIXE and Multivariate Statistics*, International Journal of Research and Innovation in Applied Science | 2025 | Peer-reviewed | NG Ni, Co, Cd, Pb, Fe, Zn occurrence in Ten composite samples from six leafy vegetable types in Ondo Metropolis, Nigeria |
| 7 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Pb, Cd, tAs, tHg, Ni, Cr occurrence in 82 samples across 13 locally grown vegetable species (potato n=8, onion n=7, tomato n=7, sugar beet n=7, green... (n=82) |
| 8 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | MY Al, Cd, Cr, Cu, Fe, Pb occurrence in Four leafy vegetable types (cabbage Brassica oleracea subsp. capitata; mustard B. juncea; spinach Spinacia oleracea; pak choi B.... (n=12) |
| 9 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari et al. 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa* | 2024 | Peer-reviewed | Al, As, Cd, Co, Cr, Cu, Hg, Ni, Pb, Zn in coriander, lettuce, mint, spring onion, and swiss chard from Johannesburg roadside markets vs supermarkets, with washing reducing non-carcinogenic risk by 84% and unwashed roadside leaves carrying HI of 11.77 |
| 10 | [[sources/guo2024-cadmium-bioaccessibility-pak-choi\|Guo et al. 2024]]. *Effects of wollastonite and phosphate treatments on cadmium bioaccessibility and health risk in pak choi (Brassica rapa ssp. chinensis) grown in contaminated soil*, Frontiers in Nutrition | 2024 | Peer-reviewed | Soil-amendment mitigation evidence for Cd in pak choi, with combined wollastonite plus sodium hexametaphosphate treatment reducing gastric-phase Cd bioaccessibility by up to 66.13% |
| 11 | [[sources/katebe2024-vegetables-lubumbashi\|Katebe et al. 2024]]. *Application of soil amendments to reduce the transfer of trace metal elements from contaminated soils of Lubumbashi (Democratic Republic of the Congo) to vegetables*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CD Pb, Cd, tAs occurrence in Greenhouse pot experiment; four vegetable species (Brassica chinensis, Amaranthus vulgaris, Beta vulgaris, Brassica carinata) grown on soils from... (n=60) |
| 12 | [[sources/kim2024-metals-kale-urban-rural-maryland\|Kim et al. 2024]]. *Nutrients and non-essential metals in darkibor kale grown at urban and rural farms: a pilot study*, PLOS ONE | 2024 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, and U in Darkibor kale from three urban and four rural Baltimore-area farms, with urban means higher than rural for nine non-essential metals but all Pb and Cd values below public-health guidelines |
| 13 | [[sources/owusuadoma2024-ghana-lettuce-metals\|Owusu et al. 2024]]. *Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana*, Environmental Health Insights | 2024 | Peer-reviewed | Cr, Ni, Cu, Zn, and Fe in lettuce and spring onion from six Kumasi (Ghana) anthropogenic sites, with Ni reaching 137.15 mg/kg in lettuce and 173.55 mg/kg in spring onion at the highest-burden school-grounds site |
| 14 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | As, B, Ba, Cd, Co, Cr, Cu, Mo, Ni, Pb, and Zn in 282 edible-vegetable samples from urban gardens in Seville, Cordoba, Huelva, and the Riotinto mining district (Andalusia), with all HQ values below 1 including the mining-area gardens |
| 15 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | Cu, Cr, and Pb by AAS in cabbage and cauliflower among five vegetable types across six Bogura (Bangladesh) upazilas, with Pb contamination factor exceeding 6 (severe) and HI greater than 1 at all sites |
| 16 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 17 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 18 | [[sources/altunay2023-cadmium-food-turkey\|Altunay et al. 2023]]. *Ultra-Sensitive Determination of Cadmium in Food and Water by Flame-AAS after a New Polyvinyl Benzyl Xanthate as an Adsorbent Based Vortex Assisted Dispersive Solid-Phase Microextraction: Multivariate Optimization*, Foods 2023, 12, 3620 | 2023 | Peer-reviewed | Cd concentrations in spinach and salad from Turkish markets; reported values are anomalously elevated relative to EU norms and should be treated with caution pending unit-error investigation |
| 19 | [[sources/cao2023-lead-pakchoi-eps-bacteria\|Cao et al. 2023]]. *EPS-producing bacteria reduce lead accumulation in edible pakchoi under soil lead contamination*, Frontiers in Microbiology | 2023 | Peer-reviewed | Microbial-mitigation evidence showing EPS-producing bacterial inoculants reduce Pb in pakchoi edible tissues by 14.5 to 39.2% on Chinese agricultural soils contaminated at 7.6 to 77.27 mg/kg |
| 20 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | EC As, Cd, Cr, Cu, Ni, Pb, Zn concentrations |
| 21 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | tAs, Cd, Cr, Ni, Pb in crops near the Ponce Enriquez gold mining area (Ecuador), with As at 12.50 mg/kg in lettuce and Cd at 0.81 mg/kg in lettuce both exceeding FAO/WHO MPLs |
| 22 | [[sources/sadee2023-arsenic-speciation-vegetables\|Sadee et al. 2023]]. *Toxicity, arsenic speciation and characteristics of hyphenated techniques used for arsenic determination in vegetables. A review*, RSC Advances | 2023 | Peer-reviewed | Methodological review of arsenic speciation analysis in vegetable matrices, anchoring the iAs vs tAs distinction and HPLC-ICP-MS hyphenated technique guidance for the leafy-greens analyte panel |
| 23 | [[sources/tjoa2023-peanut-choy-sum-nickel-laterite\|Tjoa et al. 2023]]. *Nickel acquisition affected by root density of mono- and mixed-cropping peanut and choy sum*, Jurnal Penelitian Kehutanan Wallacea | 2023 | Peer-reviewed | ID Ni occurrence in Peanut and choy sum grown in limonitic laterite soil from nickel-mining context in mono- and mixed-cropping pots |
| 24 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Al, tAs, Cr, Cd, Ni, Pb in spinach and other vegetables within an industrial-Ningxia dietary survey, with solanaceous vegetables showing 38.2% Pb exceedance of the 0.2 mg/kg threshold |
| 25 | [[sources/ali2022-lead-wastewater-crops-meta\|Ali et al. 2022]]. *Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus*, Frontiers in Public Health | 2022 | Peer-reviewed | Meta-analysis of 24 studies across 13 countries documenting that Pb in edible parts of wastewater-irrigated crops (including 38 leafy and non-leafy vegetables) consistently exceeds WHO limits, with HRI greater than 1 across multiple jurisdictions |
| 26 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA dietary Cd exposure assessment identifying leafy greens as a contributing food group; European children aged 0.5–12 reaching up to 96 percent of the PTMI when cocoa is included |
| 27 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 28 | [[sources/tan2022-carbon-dots-cd-hg-food\|al. 2022]]. *N-doped carbon dots fluorescence sensor for simultaneous detection of Cd2+ and Hg2+ in food samples*, Frontiers in Chemistry | 2022 | Peer-reviewed | N-doped carbon-dot fluorescence sensor method validated on spiked cabbage samples for simultaneous Cd and Hg detection, with sub-µM LODs and 86.44 to 115.32% recoveries |
| 29 | [[sources/wijeyaratne2021-alternanthera-metals-sri-lanka\|Wijeyaratne et al. 2021]]. *Cadmium, Chromium, and Lead Uptake Associated Health Risk Assessment of Alternanthera sessilis: A Commonly Consumed Green Leafy Vegetable*, Journal of Toxicology | 2021 | Peer-reviewed | Cd, Cr, and Pb in Alternanthera sessilis (mukunuwenna) leaves and roots from organic and non-organic Sri Lankan sites in the CKDue region, with all leaf concentrations exceeding WHO/FAO limits and adult HI of 1.2 at non-organic sites |
| 30 | [[sources/yildirim2021-humic-fulvic-cd-garden-cress\|Yildirim et al. 2021]]. *Humic + Fulvic acid mitigated Cd adverse effects on plant growth, physiology and biochemical properties of garden cress*, Scientific Reports 11: 8040 | 2021 | Peer-reviewed | TR Cd occurrence in Garden cress (Lepidium sativum cv Helen) grown in pots in an Atatürk University greenhouse (Erzurum, Turkey) for 50... (n=36) |
| 31 | [[sources/stark2019-east-bay-wild-edible-greens\|Stark et al. 2019]]. *Open-source food: Nutrition, toxicology, and availability of wild edible greens in the East Bay*, PLOS ONE | 2019 | Peer-reviewed | US Cd, Pb occurrence in Urban East Bay foraging survey with soil testing at 28 Richmond and Oakland addresses plus rinsed wild edible-greens... (n=28) |
| 32 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Cd, Pb, Cr, Ni in lettuce, spring onion, tomato, eggplant, and cocoyam leaf from Tamale, Ghana markets, with Cd and Pb detections above WHO/FAO limits in leafy species |
| 33 | [[sources/ngodhe2018-kale-soil-sludge-kisumu-heavy-metals\|Ngodhe et al. 2018]]. *Effects of Sludge on the Concentration of Heavy Metals in Soil and Plants in Obunga Slum, Kisumu County, Kenya*, International Journal of Environmental Sciences & Natural Resources | 2018 | Peer-reviewed | KE Pb, Cu, Zn occurrence in Kale and soil samples from farms around the KIWASCO sewage treatment plant in Obunga slum, Kisumu County, Kenya |
| 34 | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Pooled vegetable, grain, and soil samples from six open-field locations within 10 km of two coal-fired power plants... |
| 35 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | UK Total Diet Study baseline (3,312 retail samples, 24 locations) reporting Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb in the green-vegetables food category as-consumed, with separate iAs and tAs measurement methodology |
| 36 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook Cd chapter synthesizing occurrence across food groups with leafy greens as a significant dietary Cd contributor, especially for European vegetarians and high-vegetable consumers |
| 37 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA Cd scientific opinion establishing TWI of 2.5 µg/kg b.w./week with leafy greens among the food categories driving elevated Cd exposure in European vegetarians |
| 38 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | California OEHHA hazard identification for Cd developmental and reproductive toxicity, referencing leafy vegetables as a dietary Cd exposure source in the Prop 65 listing basis |
| 39 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd and Pb in vegetables including leafy greens, the international reference limit applicable to this commodity category |
| 40 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni concentration data across 2,221 food samples including leafy vegetables from the Danish dietary Ni survey, used as the Ni occurrence anchor for this page |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Leafy greens (spinach, lettuce, kale, chard, arugula, collard greens, amaranth, mustard greens, cabbage, watercress) concentrate cadmium and lead in their leaves through transpiration-driven translocation. Roots take up soil-Cd and soil-Pb into the xylem; transpiration pulls the xylem fluid up to the leaves, where evaporative water loss leaves the metals deposited in leaf tissue. Leafy species with high transpiration rates, short harvest cycles, and large leaf surface area (the morphology that defines a "leafy" vegetable) are systematically more efficient leaf-metal accumulators than fruiting vegetables or root vegetables of the same plant family. [[sources/efsa-cadmium-contam-2009|EFSA 2009]] places leafy vegetables broadly in the upper range of the produce-Cd category, and spinach specifically at the upper end of leafy greens; see [[ingredients/spinach]] for the higher-contamination row-pair analysis.

The dominant variance drivers within "leafy greens" as a category are soil Cd and Pb content, soil pH (acid soils mobilize more Cd into bioavailable forms), zinc and phosphorus status (zinc competes with Cd for plant uptake; phosphate fertilizers historically carried Cd as an impurity), and atmospheric deposition load (urban and roadside production sites can carry several-fold higher Pb than rural production). [[sources/adhikari2024-leafy-vegetables-johannesburg|Adhikari 2024]] documents the urban-vs-rural and roadside-vs-store Pb gap directly in 20 paired Johannesburg samples; [[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula 2025]] documents the wastewater-irrigated vs clean-water gap in Malawi production.

## Ranges by source, region, and variety

The loaded corpus spans urban-vs-rural comparisons, roadside-vs-store comparisons, wastewater-irrigated-vs-clean-water comparisons, and seasonal (wet-vs-dry season) comparisons. The urban-and-roadside studies consistently show 2-3× Pb elevation relative to rural or large-store baseline ([[sources/adhikari2024-leafy-vegetables-johannesburg|Adhikari 2024]]). [[sources/armand2026-lettuce-cabbage-behbahan|Armand 2026]] reported lettuce and cabbage Pb and Cd above the EU 2023/915 fresh-vegetable maximum levels in a probabilistic Monte Carlo risk model for the Iranian Behbahan production area. Hong Kong's Total Diet Studies ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012 iAs]] and [[sources/cfs2013-hktds-metallic-contaminants|CFS 2013 metals]]) provide the largest n (n=600 samples for the iAs study) and the most representative-distribution view; Hong Kong consistently shows leafy vegetables carrying detectable Pb, Cd, and tAs but generally at levels compliant with applicable caps. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing 2025]] documents the post-cyclone organic vs non-organic comparison in New Zealand, with cyclone-disturbance affecting the contamination pattern. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem 2025]] documents the North-Dakota composite-vegetable Pb/Cd distribution from a human-health-risk-assessment perspective.

Variety-level breakdowns by individual leafy species (spinach vs lettuce vs kale vs amaranth) are present in the corpus but are best read at the species pages. Spinach sits at the upper end of leafy-green Cd accumulation ([[ingredients/spinach]]); amaranth and certain mustard greens also accumulate Cd efficiently. Lettuce varieties show within-species variation driven by cultivar (loose-leaf vs head varieties differ in leaf surface area and transpiration rate).

## Processing effects

Washing leafy vegetables before consumption removes surface particulate Pb (the atmospheric-deposition pathway) but does not affect internalised Cd, Cr, or Ni. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora 2022]] demonstrated that vinegar rinses are not meaningfully more effective than water at removing internalised metals — they do remove surface contamination at roughly the same rate as plain water. Discarding outer leaves before consumption reduces per-serving Pb meaningfully when those outer leaves are the primary atmospheric-deposition target.

Cooking by boiling leaches a fraction of internalised Cd and Cr into the cooking water; discarding the boiling water reduces per-serving exposure modestly. Drying for powder applications concentrates metals on a dry-weight basis (the dry-spinach-powder problem); supplement-grade leafy-vegetable powders carry metals at concentrations roughly 5-10× the fresh-weight value because water makes up 85-95 percent of fresh leafy mass. Fermentation (sauerkraut, kimchi) does not appreciably alter the metal load relative to the fresh starting material.

## Ingredient-derivative risk

Leafy-green-derived products that concentrate the metals include dried leaf powders (spinach powder, kale powder, moringa, wheatgrass), juice concentrates (cold-pressed greens juice concentrates that have water removed), and supplement-grade greens powders that are sold as dietary supplements per [[products/supplements-algae-seaweed-based|Cat 16 row 19]] or per [[products/supplements-botanicals-herbs|Cat 16 row 15]] depending on labeling. The metal load on these derivatives can be 5-10× the fresh-weight value; supplement-grade greens powders are a documented exposure pathway for chronic users.

Frozen and canned leafy greens carry approximately the same metal load as fresh on an as-consumed basis after accounting for the water added in cooking/preparation. Baby-food spinach purees inherit the source spinach Cd directly; see [[ingredients/spinach]] for the Cat 1 baby-food infant-exposure analysis.

## Mitigation options

Leafy-green metal mitigation is dominated by sourcing and agronomic interventions; downstream processing has limited effect.

**Sourcing levers** are the dominant brand-side intervention. Geographic-region selection (avoiding production areas with elevated soil Cd, areas with leaded-gasoline-era roadside contamination, areas with historic Pb-arsenate orchard or vineyard use, and areas with wastewater-irrigation history) is the largest single lever. Hydroponic and greenhouse production substantially reduces Cd because the nutrient solution is the controllable input; for HMTc-relevant supply chains targeting low-Cd leafy greens, hydroponic sourcing is a documented intervention. See [[mitigation/supply-chain-screening]] for the sourcing-screening framework.

**Agronomic levers** ([[mitigation/agronomic]]) include soil pH management (liming to raise pH above 6 reduces Cd bioavailability), zinc supplementation under deficient soils (Zn competes with Cd for plant uptake), cultivar selection (low-Cd-accumulator varieties identified by breeding programs in several leafy species), avoidance of high-Cd phosphate fertilizers, and crop rotation away from historically contaminated fields. Quantified intervention magnitudes vary by site; the Cd-uptake reductions in the 30-60 percent range documented across multiple primary studies are achievable with liming alone at appropriate soil-pH starting points.

**Processing levers** ([[mitigation/processing]]) are limited for leafy greens. Washing removes surface-deposited Pb (the atmospheric and dust pathway); boiling with cooking-water discard removes a small Cd fraction. The internalised leaf metal is not meaningfully reducible by processing.

**Formulation levers** ([[mitigation/formulation]]) include species substitution (lower-Cd-accumulator species in mixed-greens products) and ingredient-percentage adjustment (lower leafy-green fraction in mixed-vegetable purees and baby-food pouches).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and Pb screening at receiving, particularly on production-area lots flagged as elevated-risk. See [[testing/icp-ms]] for the analytical method.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for leafy-green Cd/Pb because the metals are bound in leaf tissue and do not migrate to packaging.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in vegetables differentiated by category. Leafy vegetables have a distinct Cd ML (higher than non-leafy vegetables because leafy species accumulate Cd more efficiently); spinach has a further specific Cd ML.
- [[regulations/codex-cadmium-mls]] — Codex Alimentarius maximum levels for Cd in leafy vegetables (CXS 193-1995 amendments).
- FDA action levels for processed baby foods covering Pb in vegetable purees (relevant for leafy-green-containing baby-food products); see [[regulations/fda2025-lead-processed-baby-foods]].
- California Prop 65 ([[regulations/california-prop65]]) applies to Pb and Cd cumulative-exposure calculations for leafy-green-containing consumer products sold in California; the MADL/NSRL serving-based screen is the operational tool.

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
