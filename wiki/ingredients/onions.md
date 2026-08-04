---
title: "Onions"
type: ingredient
commodity: onions
label: "Onions"
aliases: [onion, garlic, allium-vegetables]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [2.9, 13.8]
    p95_ppb: 20.6
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 8.6]
    p95_ppb: 10.3
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 58.6]
    p95_ppb: 85
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
updated: 2026-05-16
sources: 23
---

# Onions

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Onions (Allium cepa) are bulb vegetables grown underground, but their metal accumulation pattern differs substantially from root vegetables such as carrots and potatoes. Onion bulbs are modified leaf bases rather than storage roots, and they lack some of the active metal-sequestration mechanisms that concentrate Cd and Pb in root tissues of other vegetables. Cadmium uptake in onions follows the general soil-to-plant pathway via root absorption, but the transfer factor from soil to bulb is lower than in dedicated root vegetables; onion bulbs do not appear to be hyperaccumulators of Cd under typical agricultural conditions. Lead accumulates in onion bulb tissue at low concentrations because Pb transfer from soil to above-ground plant parts is inefficient, and the bulb's protected position within the soil and outer scales provides some barrier from surface Pb deposition. Nickel is detectable in onion tissue; the FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] show Ni in the 0 to 100 ppb range (max 100 ppb) in raw mature onion (n=27). Sulfur compounds distinctive to Allium vegetables may influence metal speciation and binding in tissue, though specific mechanistic data on this interaction are limited in the current corpus. Total arsenic is detectable at low concentrations (median approximately 4 ppb in FDA TDS data), with inorganic speciation expected to represent a portion of that total; the level is substantially below arsenic concentrations in rice or seafood.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=9 | 0 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/owusuadoma2024-ghana-lettuce-metals\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Cd | n=7 | 2.9–13.8 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0–8.6 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0 | medium | [[sources/adhikari2024-leafy-vegetables-johannesburg\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/codex-cxs-193-1995\|3]] |
| Ni | n=6 | 0–58.6 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/owusuadoma2024-ghana-lettuce-metals\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Al | data gap | — | — | — |
| Cr | n=6 | 0 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/owusuadoma2024-ghana-lettuce-metals\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 128, "Onion, mature, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Onion, mature, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 2.3 | 26 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 100 | in profile |
| Pb | 27 | 0 | 7.4 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 15 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw mature onion (n=27) shows Cd ranging from 2.3 to 26 ppb and Ni from 0 to 100 ppb, providing a US retail baseline. The [[sources/ametepey2018-ghana-vegetables-heavy-metals]] survey measured Cd, Pb, Cr, and Ni in spring onion from three markets in Tamale, Ghana (n=15 samples), offering a West African occurrence context that may reflect higher soil contamination than managed European or North American growing regions. Geographic variation in Cd is primarily driven by soil Cd levels and pH; regions with history of phosphate fertilizer application on onion-growing soils may show elevated Cd relative to low-contamination baseline soils. Onion variety (yellow, white, red, spring onion, shallot) may show modest differences in metal concentrations, but cross-variety comparison data are not yet available in the current corpus to quantify this dimension.

## Processing effects

Removal of dry outer scales during commercial processing and home preparation eliminates the outer tissue that may carry surface Pb deposition from atmospheric particulates. Cooking onions by boiling, sautéing, or roasting does not materially reduce total Cd or Pb concentrations on a dry weight basis; moisture loss during cooking concentrates analytes per unit of wet weight. Dehydrated or powdered onion (produced by hot-air drying or spray-drying) will show higher ppb values than fresh onion on a wet weight basis in proportion to the degree of moisture removal. Pickling in acidic brine may leach some metals into the brine, but quantitative data on this effect for onions are not available in the current corpus.

## Ingredient-derivative risk

Dehydrated onion flakes, onion powder, and granulated onion are the main derivatives with materially different metal profiles relative to fresh onion, due to moisture removal concentrating all analytes. Onion oil and oleoresin (flavoring extracts) carry negligible metals because the extraction process is selective for volatile and lipophilic compounds rather than metal-containing hydrophilic fractions. These derivatives appear in ingredient lists of many processed foods and seasoning blends; their Cd and Pb concentrations on a wet-weight-equivalent basis should be compared on a moisture-adjusted rather than per-gram basis against regulatory limits for the fresh commodity.

## Mitigation options

### Sourcing levers

Preferring onions from growing regions with documented low soil Cd and appropriate soil pH management (higher pH reduces Cd bioavailability) is the primary upstream control. For dehydrated onion applications, requesting occurrence data from suppliers on a dry-weight basis with moisture content specified enables proper comparison against regulatory limits.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Removal of outer dry scales before processing eliminates the highest-exposure tissue layer. For dehydrated products, expressing analytical results on a fresh-equivalent basis with moisture content documented prevents overestimation of risk relative to the fresh commodity.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets maximum levels of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh vegetables on a wet weight basis, applicable to onions. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) [[sources/codex-cxs-193-1995]] sets Cd and Pb maximum levels for vegetables that include onion. No specific iAs or tHg regulatory limit applies to fresh onion under EU or Codex frameworks. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/ametepey2018-ghana-vegetables-heavy-metals|Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana]]<span class="hmi-ref-meta">Ametepey ST, Cobbina SJ, Akpabey FJ, Duwiejua AB, and Atule AA · International Journal of Food Contamination · 2018 · [doi.org/10.1186/s40550-018-0067-0](https://doi.org/10.1186/s40550-018-0067-0)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 3 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 4 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari et al. 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa* | 2024 | Peer-reviewed | ZA Al, As, Cd, Co, Cr, Cu, Hg, Ni, Pb, Zn occurrence in Composite leafy vegetable samples from roadside open-air markets (unwashed and washed) and large stores (supermarkets, vegetable markets), Johannesburg,... (n=20) |
| 5 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 6 | [[sources/malone2024-community-garden-soils-us\|Malone et al. 2024]]. *Trace Metal Contamination in Community Garden Soils across the United States*, Sustainability | 2024 | Review | US Pb, tAs, Cd, Zn occurrence in Integrative literature review of 52 peer-reviewed articles on trace metal (Pb, As, Cd, Zn) contamination in US urban... |
| 7 | [[sources/owusuadoma2024-ghana-lettuce-metals\|Owusu et al. 2024]]. *Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana*, Environmental Health Insights | 2024 | Peer-reviewed | GH Pb, Cr, Ni, Cu, Zn, Fe occurrence in Lettuce and spring onion from 6 anthropogenic activity sites in Kumasi Metropolis, Ghana (BSGS = Buokrom Second Grade... (n=90) |
| 8 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 9 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | IR Pb, Cd occurrence in Eight vegetable types (parsley, spinach, basil, tomatoes, cucumbers, potatoes, onions, beans) from Babol, Mazandaran Province, northern Iran; 4... (n=32) |
| 10 | [[sources/bambara2023-loumbila-vegetables-heavy-metals\|Luc et al. 2023]]. *Evaluation of the Metallic Contamination of Market Garden Products around the Loumbila Dam*, Open Journal of Applied Sciences | 2023 | Peer-reviewed | BF Cu, Ni, Zn, Cr, Pb occurrence in Market-garden vegetables around Loumbila Dam, Burkina Faso |
| 11 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 12 | [[sources/sun2023-pb-leek-speciation-xanes\|Sun et al. 2023]]. *Pb speciation and elemental distribution in leeks by micro X-ray fluorescence and X-ray absorption near-edge structure*, Journal of Synchrotron Radiation | 2023 | Peer-reviewed | CN Pb occurrence in Leeks (Allium tenuissimum L.) collected from a vegetable garden near the Qixiashan Pb-Zn mine, Nanjing, Jiangsu Province, China;... |
| 13 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 14 | [[sources/diyarov2022-food-processing-heavy-metals\|Diyarov et al. 2022]]. *The effect of food processing on the content of heavy metals in vegetables*, Chemical Bulletin of Kazakh National University | 2022 | Peer-reviewed | KZ Zn, Pb, Mn, Cd, Cu occurrence in Carrot, potato, and onion samples subjected to different food-processing treatments |
| 15 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in raw onion (TDS food item; n varies by analyte) |
| 16 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 17 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in spring onion from three markets in Tamale, Ghana (n=15 onion samples); West African occurrence context |
| 18 | [[sources/moradi2015-iran-isfahan-soil-crops-metals\|Moradi et al. 2015]]. *A Human Health Risk Assessment of Soil and Crops Contaminated by Heavy Metals in Industrial Regions, Central Iran*, Human and Ecological Risk Assessment: An International Journal (accepted manuscript, 29 Sep 2015) | 2015 | Peer-reviewed | IR/EU/US Cd, Pb, Ni, Fe occurrence in Twenty-seven edible-crop samples and 27 paired topsoil (0–20 cm) samples drawn from three regions of Isfahan province, central... (n=27) |
| 19 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 20 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | GR/LV/US Pb, Cd, tAs, Cr, Ni, Al occurrence in Review of global studies on carrots, onions, and potatoes from polluted irrigation water contexts |
| 21 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 9 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
