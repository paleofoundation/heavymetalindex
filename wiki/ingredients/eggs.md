---
title: "Eggs"
type: ingredient
commodity: eggs
label: "Eggs"
aliases: [egg]
category: animal-food
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 1773]
    p95_ppb: 2689
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 35.5]
    p95_ppb: 47.2
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
sources: 35
---

# Eggs

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Eggs are a low-to-negligible heavy metal risk food under normal commercial production conditions. The mechanism by which metals enter eggs is dietary transfer from the laying hen's feed: cadmium, lead, arsenic, and other metals ingested by the hen distribute between excretion, tissue accumulation (liver and kidney are the primary accumulation organs), and limited transfer to the egg. Transfer rates from feed to egg for cadmium and lead are very low, typically below 1% on a weight basis, which means that even hens consuming moderately contaminated feed produce eggs with very low metal concentrations. Mercury follows a somewhat different pathway and accumulates in hen tissues more readily at high exposure, but under commercial feed conditions mercury exposure is minimal.

The FDA TDS FY2018-FY2020 data for hard-boiled eggs (n=27 composites, TDS Food 37) reports all seven measured analytes at zero across all 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], which is the most unambiguous low-risk signal in the TDS dataset for any commodity in this wiki batch. This result is consistent with the expectation for eggs from commercial laying hens on formulated feeds under normal production conditions in the US market basket.

The exception to this low-risk characterization is environmental contamination at extreme levels. [[sources/aendo2024-thailand-egg-metals-goldmine]] documented elevated Pb, Cd, and other metals in eggs from poultry farms near an active gold mine in northern Thailand, demonstrating that when hens are exposed to highly contaminated feed or free-range environments adjacent to industrial contamination sources, metals transfer to the egg at detectable and toxicologically relevant concentrations. This exception underscores that the low-risk characterization applies to commercial production systems with controlled feed, not to backyard or free-range production in contaminated environments.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 0 | high | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|3]] |
| Cd | n=9 | 0 | medium | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|3]] |
| iAs | n=4 | 0 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| tAs | n=9 | 0 | medium | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/dai2024-chongqing-dietary-arsenic-exposure\|2]], [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|3]] |
| tHg | n=9 | 0 | medium | [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|1]], [[sources/aendo2024-thailand-egg-metals-goldmine\|2]], [[sources/abedi2023-arsenic-mercury-hen-eggs-iran\|3]] |
| Ni | n=3 | 0 | medium | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Al | n=2 | 0–1773 | low | [[sources/kim2022-bsf-larvae-oil-eggs-heavy-metals\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Cr | n=7 | 0 | medium | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/guo2024-duck-eggs-hg-mining-china\|2]], [[sources/guo2024-duck-eggs-hg-mining-china\|3]] |
| Sn | n=1 | 0–35.5 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| U | n=2 | 0 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 37, "Eggs, hard-boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Eggs, hard-boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 hard-boiled egg dataset (n=27 composites) shows all analytes at zero [[sources/fda2022-tds-elements-fy2018-fy2020]], representing the US commercial market basket under standard production conditions. This is the baseline: eggs from hens on commercial formulated feed in managed production systems in a low-metal-contamination agricultural region.

[[sources/aendo2024-thailand-egg-metals-goldmine]] provides the contrasting data point: eggs from poultry farms adjacent to a gold mine in northern Thailand showed elevated concentrations of Pb, Cd, and other metals in egg tissue, with concentrations in yolk substantially higher than in egg white for most metals studied. This source documents that free-range or backyard hens with soil contact in contaminated environments can produce eggs with toxicologically relevant metal concentrations, particularly for populations with high egg consumption frequency.

The FSA/Fera FS102048 survey provides an additional data point for UK-market eggs awaiting structured table parsing [[sources/fsa2016-infant-food-formula-metals-survey]]. The iAs and tAs data point attributed to arsenic exposure assessment in Chongqing, China [[sources/dai2024-chongqing-dietary-arsenic-exposure]] contributes arsenic occurrence context for eggs in the Chinese dietary assessment literature, pending full structured integration.

## Processing effects

Cooking method affects the distribution of metals within the egg but does not reduce overall metal concentrations. Hard boiling, scrambling, frying, and poaching all retain the metal content of the whole egg or the specific fraction used (white only, yolk only). The egg yolk carries higher concentrations of fat-soluble compounds and metal-binding proteins than the egg white; for metals such as Cd and Pb that bind to metalloproteins (metallothionein in particular), the yolk fraction carries a higher per-gram metal burden than the white fraction under conditions of elevated exposure. Under near-zero metal conditions (as in the US TDS dataset), this partitioning is moot.

Hard-boiling does not leach meaningful amounts of Cd or Pb into the cooking water, since metals in egg tissue are protein-bound rather than free in solution. Egg processing steps such as pasteurization also do not affect metal concentrations.

## Ingredient-derivative risk

Eggs are used as ingredients in a wide range of processed foods, contributing binding, emulsification, and leavening functions. The metal contribution of the egg fraction to a composite product (cake, pasta, mayonnaise, custard) is proportional to its weight fraction multiplied by its metal concentration. Under normal commercial production conditions where TDS egg data shows zero for all analytes [[sources/fda2022-tds-elements-fy2018-fy2020]], the egg fraction's metal contribution to composite foods is effectively zero and is not a meaningful source of heavy metal exposure in those products.

Processed egg derivatives including dried whole egg powder, dried egg white, and dried egg yolk concentrate the protein and mineral content of the fresh egg by removing water. On a dry-weight basis, any metals present in the fresh egg would be concentrated proportionally in the dried form. Under normal commercial egg sourcing where fresh egg metals are near zero, this concentration effect is of no practical consequence.

## Mitigation options

### Sourcing levers

Sourcing eggs from commercial laying flocks on formulated, low-metal feed is the primary mitigation lever. Commercial egg production with centralized feed formulation and quality control inherently limits the pathway for metals to enter eggs. Avoiding eggs from free-range or backyard flocks in regions with known soil contamination from mining, smelting, or industrial land use is the relevant risk mitigation for populations or procurement scenarios where such eggs might be used.

### Agronomic levers

_No egg-specific agronomic lever applies in the traditional sense. Feed quality control at the laying hen farm (using low-Cd, low-Pb feed ingredients) is the practical equivalent of an agronomic lever for this animal product._

### Processing levers

No processing step reduces heavy metals in eggs at the concentrations present in commercially produced eggs under normal conditions. If eggs from a contaminated-environment source were identified, no practical post-hoc processing intervention removes the metal from egg tissue.

### Formulation levers

For food products using eggs as an ingredient in contexts where maximum metal control is a priority (for example, infant or toddler foods), specifying commercially produced eggs from certified low-contamination production systems is the formulation-level implementation of the sourcing lever. Substitution of egg with plant-based egg alternatives eliminates the egg-origin metal pathway but introduces different metal risk profiles from the substitute ingredient.

### Testing and QC levers

Under normal commercial sourcing conditions, heavy metal testing of eggs is low priority. Testing is warranted when eggs are sourced from non-standard production systems (backyard, free-range in contaminated areas) or when procurement includes imports from regions where poultry environmental contamination has been documented. [[sources/aendo2024-thailand-egg-metals-goldmine]] provides the scientific basis for requiring testing in mining-adjacent production contexts.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in eggs is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in eggs is 0.10 mg/kg (100 ppb) on a fresh weight basis, and for cadmium in eggs it is 0.050 mg/kg (50 ppb) fresh weight. These limits reflect the historical possibility of elevated metals in eggs from free-range hens on contaminated land, rather than a risk specific to commercial production. The US TDS all-zero result for hard-boiled eggs [[sources/fda2022-tds-elements-fy2018-fy2020]] is consistent with the EU limits being non-binding in practice for commercially produced US market eggs. No US federal maximum level for lead or cadmium in eggs has been finalized as of 2026. Codex Alimentarius (CXS 193-1995 and revisions) sets a general lead limit of 0.10 mg/kg for eggs, consistent with the EU limit.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/aendo2024-thailand-egg-metals-goldmine|Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand]]<span class="hmi-ref-meta">Aendo P, Mingkhwan R, Senachai K, Pinniam N, Sonthong K, and Tulayakul P · Environmental Geochemistry and Health · 2024 · [doi.org/10.1007/s10653-024-02215-9](https://doi.org/10.1007/s10653-024-02215-9)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/dai2024-chongqing-dietary-arsenic-exposure|Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China]]<span class="hmi-ref-meta">Dai Xinghui, Li Mintao, Chen Jiahui, Feng Ping, Chen Jingrong, Zhao Jian, et al. · Chinese Journal of Public Health · 2024 · [doi.org/10.12182/20241160509](https://doi.org/10.12182/20241160509)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|Li et al. 2026]]. *Heavy metal concentrations in Chinese chicken eggs: insights from comparative study of urban and mining areas*, PeerJ | 2026 | Peer-reviewed | Cr, tAs, Cd, Pb, and Ni in 90 chicken eggs from non-mining cities and three Chinese mining areas (Wuchuan and Danzhai Hg mines, Emin coal mine) by ICP-MS; free-range mining-area eggs had higher HI than commercial eggs but all values below China GB 2762-2022 |
| 2 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | Eggs as one of nine food categories contributing to cumulative Pb, Cd, iAs, and MeHg neurotoxicity and nephrotoxicity exposure in a Chongqing cohort of 969 participants across four age strata |
| 3 | [[sources/aendo2024-thailand-egg-metals-goldmine\|Aendo et al. 2024]]. *Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | TH tHg, Pb, Cd occurrence in 23 poultry farms (6 laying hen, 2 laying duck, 3 free-grazing duck farms in contaminated area <25 km... (n=23) |
| 4 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 5 | [[sources/ezike2024-nigerian-poultry-pte\|Cosmas et al. 2024]]. *An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products*, International Journal of Agricultural Invention | 2024 | Peer-reviewed | NG tAs, Pb, Cd occurrence in Broiler muscle, gizzard, yolk, and albumen samples from four poultry farms in Nigeria (n=36) |
| 6 | [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|Guerrini et al. 2024]]. *Content of Toxic Elements (Arsenic, Cadmium, Mercury, Lead) in Eggs from an Ethically Managed Laying Hen Farm*, Animals | 2024 | Peer-reviewed | tAs, Cd, tHg, and Pb separately in yolk, albumen, and eggshell of 141 rural Italian eggs (5 hen genotypes) and 60 commercial organic eggs by ICP-MS; supermarket eggs had higher Pb (yolk 0.186 vs 0.089 mg/kg), rural eggs higher tAs in albumen and shell |
| 7 | [[sources/guo2024-duck-eggs-hg-mining-china\|Guo et al. 2024]]. *Heavy metal contamination in duck eggs near mercury mining areas in southwest China*, Frontiers in Public Health | 2024 | Peer-reviewed | Cr, Pb, Zn, Sr, and Ba in 50 duck eggs across five farms in a Guizhou Hg mining area by ICP-MS; Cr and Pb exceeded Chinese food safety limits at the most contaminated sites |
| 8 | [[sources/guo2024-duck-eggs-hg-mining-china\|Guo et al. 2024]]. *Heavy metal contamination in duck eggs from a mercury mining area, southwestern China*, Frontiers in Public Health | 2024 | Peer-reviewed | Pb and Cr in 20 paired duck eggs from the Wuchuan Hg mining area vs Anshun background area, southwestern China, by ICP-MS; mining-area yolks consistently higher than whites and higher than background, with non-negligible child health risk |
| 9 | [[sources/abedi2023-arsenic-mercury-hen-eggs-iran\|Abedi et al. 2023]]. *Consumer health risk assessment of Arsenic and Mercury in hen eggs through Monte Carlo simulations*, BMC Public Health | 2023 | Peer-reviewed | IR tAs, tHg occurrence in 84 hen eggs from 21 major commercial brands purchased from 30 supermarkets in five districts of Tehran, Iran,... (n=84) |
| 10 | [[sources/aljohani2023-heavy-metal-toxicity-poultry\|Aljohani 2023]]. *Heavy metal toxicity in poultry: a comprehensive review*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | Worldwide narrative review of Pb, Cd, tAs, and tHg in poultry eggs and tissues drawing from primary studies in 12 countries (Turkey, Pakistan, China, Saudi Arabia, etc.); cross-country reference for egg-tissue metal occurrence and histopathological effects |
| 11 | [[sources/bazzaz2023-poultry-products-erbil-heavy-metals\|Bazzaz et al. 2023]]. *Determination of some heavy metals resides in different types of poultry production*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cu, tAs, Pb occurrence in Erbil-market poultry products, dry-weight XRF analysis: frozen chicken thigh and breast muscle from Brazilian and Turkish imports plus... |
| 12 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 13 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 14 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 15 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 16 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Eggs, hard-boiled (n=27); all analytes reported as zero (BDL) |
| 17 | [[sources/kim2022-bsf-larvae-oil-eggs-heavy-metals\|Kim et al. 2022]]. *Dietary effects of black soldier fly larvae oil on laying hen performance, egg quality, and egg safety*, Animal Bioscience | 2022 | Peer-reviewed | Al, tAs, Pb, tHg, and Cd in Korean laying-hen eggs across 0–8% black soldier fly larvae oil inclusion replacing soybean oil; all metals below Korean permissible limits — feed-substitution safety evidence |
| 18 | [[sources/rokanuzzaman2022-bangladesh-eggs-metals\|Rokanuzzaman et al. 2022]]. *Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh*, Saudi Journal of Biomedical Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Cu, Fe, Zn occurrence in Five egg-content samples and five eggshell samples collected from the Jahangirnagar University area of Savar, Bangladesh, covering indigenous... (n=10) |
| 19 | [[sources/wu2022-selenized-yeast-laying-hens\|al. 2022]]. *Ameliorative effects of selenized yeast on laying hen performance and heavy metal residues in eggs*, Frontiers in Veterinary Science | 2022 | Peer-reviewed | CN Pb, Cd, Hg, Cr occurrence in Laying hens in controlled feeding experiment, China, 12-week study (n=160) |
| 20 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 21 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | Cr and tHg in egg samples from 14 Jakarta staple foods (5 traditional markets) by neutron activation analysis; egg Cr 0.02 mg/kg (lowest of all commodities) and Hg modest relative to crackers and rice |
| 22 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 23 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 24 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 25 | [[sources/mahbub2018-poultry-feed-meat-eggs-metals\|Mahbub et al. 2018]]. *Detection of heavy metals in poultry feed, meat and eggs*, Asian-Australasian Journal of Food Safety and Security | 2018 | Peer-reviewed | BD Cr, Pb, tAs occurrence in Poultry feed, meat, and egg samples from major poultry-producing areas of Bangladesh |
| 26 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 27 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 28 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | UK FERA/FSA TDS occurrence of Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb in the eggs food group composited from 3,312 retail samples across 24 UK locations on an as-consumed basis |
| 29 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 30 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 31 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn, V occurrence in Hong Kong general adult population aged 20-84; 150 TDS food items purchased on 4 occasions (March 2010 to... (n=1800) |
| 32 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | First HKTDS direct iAs speciation occurrence in the eggs food category by hydride generation ICP-MS (LOD 3 µg/kg) among 600 composite samples from 150 food items; eggs as minor contributor relative to rice (45.2% of total iAs exposure) |
| 33 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 34 | [[sources/hc2008-aluminum-food-additives-industry-request\|Health Canada Bureau of 2008]]. *ARCHIVED — Health Canada Requests Information from Industry on the Use of Aluminum-Containing Food Additives*, Health Canada, Food Directorate, Bureau of Chemical Safety | 2008 | Regulation | CA Al occurrence in null |
| 35 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 13 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
