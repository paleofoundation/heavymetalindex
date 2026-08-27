---
title: "Cereals"
type: ingredient
commodity: cereals
label: "Cereals"
aliases: ["cereal grains", "grain foods", "grain-based foods", grains, barley, breakfast-cereals]
category: grain
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 70]
    p95_ppb: 250
    confidence: high
    n_studies: 20
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 70]
    p95_ppb: 200
    confidence: high
    n_studies: 23
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [5, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 20
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [170, 1160]
    p95_ppb: 3900
    confidence: high
    n_studies: 14
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [2400, 5000]
    p95_ppb: 7000
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [30, 200]
    p95_ppb: 600
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 50
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 200
    confidence: medium
    n_studies: 12
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, geography, processing, fortification]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/oat]]", "[[ingredients/wheat]]"]
used_in_products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 70
---

# Cereals

## Overview

Cereals is the regulatory umbrella term used by EFSA, JECFA, and Codex Alimentarius for grain-based human foods. It encompasses rice, wheat, oat, maize, barley, rye, and the products derived from them. Per-commodity contamination profiles live on the individual grain pages ([[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], etc.); this page is the structural parent that lets regulatory documents addressing "cereals" as a category route correctly.

The cereals category is the dominant cadmium dietary-exposure pathway in EFSA and JECFA assessments and a primary source of inorganic arsenic exposure where rice-based products are prevalent. Cereal-based infant foods (referenced in EU Commission Regulation 2023/915 and FDA Closer-to-Zero guidance) carry tighter regulatory limits than adult cereal products because of the higher per-kg-body-weight intake in early life.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=20 | 10–70 | high | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|3]] |
| Cd | n=23 | 20–70 | high | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|3]] |
| iAs | n=10 | 5–30 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/hao2024-amf-arsenic-plants-meta-analysis\|3]] |
| tAs | n=12 | 5–50 | medium | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/hao2024-amf-arsenic-plants-meta-analysis\|3]] |
| tHg | n=8 | 0–5 | medium | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/codex-cccf17-2024\|3]] |
| Ni | n=14 | 170–1160 | high | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/han2024-nickel-zhejiang-china\|3]] |
| Al | n=6 | 2400–5000 | medium | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Cr | n=9 | 30–200 | medium | [[sources/mititelu2025-heavy-metal-food-contamination-review\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|3]] |
| Sn | n=5 | 0–20 | low | [[sources/mititelu2025-heavy-metal-food-contamination-review\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| U | data gap | — | — | — |

## Routing

This node is the umbrella for grain-based regulatory documents. Per-grain detail belongs on [[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], [[ingredients/corn]], and related pages. Product-level routing flows through [[products/baby-cereals-dry-rice-based]] and [[products/baby-cereals-dry-non-rice]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. This umbrella page carries no per-commodity values; concentrations and exposure data live on the individual grain pages and on the regulatory pages referenced below.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Arsenic, Organic Foods, and Brown Rice Syrup]]<span class="hmi-ref-meta">Jackson BP, Taylor VF, Karagas MR, Punshon T, and Cottingham KL · Environmental Health Perspectives · 2012 · [doi.org/10.1289/ehp.1104619](https://doi.org/10.1289/ehp.1104619)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | codex/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 3 | [[sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals\|Mgbemena et al. 2026]]. *Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria*, Scientific Reports 16: 13751 | 2026 | Peer-reviewed | NG Pb, Cd, Ni, Cr, Cu occurrence in 8 Baby Milk (milk-based powder) and 12 Infant Formulae (cereal-based) products purchased from supermarket and grocery retailers within... (n=20) |
| 4 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | CN/EU Pb, Cd, iAs, MeHg occurrence in 969 participants from China Health and Nutrition Survey 2018, Chongqing Municipality: 31 preschoolers (3-6 yr), 113 adolescents (7-17... (n=969) |
| 5 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 6 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Codex CCCF17 session report; initiated a new Code of Practice for Cd in Foods with cereal and rice annexes as priority commodities, establishing the current international governance trajectory for cereals Cd limits |
| 7 | [[sources/eu-2024-1987-nickel-maximum-levels\|EU 2024]]. *Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs*, Official Journal of the European Union, L series, 2024/1987 (31.7.2024) | 2024 | Regulation | EU Ni concentrations |
| 8 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 9 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | CN Ni occurrence in Zhejiang Province residents, 11 cities, 2018–2019; n=19,000 in consumption survey (n=2628) |
| 10 | [[sources/hao2024-amf-arsenic-plants-meta-analysis\|Hao et al. 2024]]. *Meta-analysis of the effects of arbuscular mycorrhizal fungi on arsenic accumulation in plants and grain*, Frontiers in Plant Science | 2024 | Peer-reviewed | As, iAs, tAs occurrence in 76 peer-reviewed publications (meta-analysis) evaluating AMF effects on arsenic accumulation in food crops (n=76) |
| 11 | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|Mohammadian-Hafshejani et al. 2024]]. *Investigating the Relationship between Cadmium Exposure and the Risk of Prostate Cancer: A Systematic Review and Dose-Response Meta-Analysis*, Journal of Health (Tehran University of Medical Sciences) | 2024 | Peer-reviewed | IR/US/EU Cd occurrence in 16 observational studies (case-control, cross-sectional, cohort) on Cd exposure and prostate cancer risk; searches up to May 2022 (n=16) |
| 12 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn occurrence in 244 commercially purchased food samples from six supermarkets, six farmers' markets, and one wholesale market across Shanyang and... (n=244) |
| 13 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 14 | [[sources/altunay2023-cadmium-food-turkey\|Altunay et al. 2023]]. *Ultra-Sensitive Determination of Cadmium in Food and Water by Flame-AAS after a New Polyvinyl Benzyl Xanthate as an Adsorbent Based Vortex Assisted Dispersive Solid-Phase Microextraction: Multivariate Optimization*, Foods 2023, 12, 3620 | 2023 | Peer-reviewed | Cd measurement by FAAS in 13 Turkish market foods including oat, corn, wheat, and three rice variants; values are anomalously high relative to EU surveillance data and should be treated with caution pending curator review |
| 15 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 16 | [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|Oduro et al. 2023]]. *Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana*, Discover Food 3:25 | 2023 | Peer-reviewed | GH tAs, Cd, Cr, Ni, Pb, Mn occurrence in Locally produced cereal-based breakfast meals (31 breakfast cereals, 20 biscuits, 3 bread types) from markets in Kumasi, Ghana;... (n=54) |
| 17 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 18 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 19 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 20 | [[sources/li2022-wheat-pte-guizhou-health-risk\|Li et al. 2022]]. *Co-exposure of potentially toxic elements in wheat grains reveals a probabilistic health risk in Southwestern Guizhou, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN Pb, Cd, Cr, Ni, tAs occurrence in 149 wheat grain samples collected at maturity in 2021 using systematic composite grid sampling from Bijie City, Guizhou... (n=149) |
| 21 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 22 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 23 | [[sources/xu2022-crop-grains-heavy-metals\|Xu et al. 2022]]. *Effects of soil properties on heavy metal bioavailability and accumulation in crop grains under different farmland use patterns*, Scientific Reports | 2022 | Peer-reviewed | CN Cu, Zn, Pb, Cd, Fe, Mn occurrence in 81 crop-grain samples and 81 paired agricultural-soil samples from rape, wheat, and paddy fields in Tongling, China (n=81) |
| 24 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 25 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in 22 retail samples — 11 breads (Danish rye/rugbrød, malt flour, wheat 'burger' buns, spelt, wheat 'pita', wheat baguette,... (n=22) |
| 26 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA CONTAM Panel Ni risk assessment using 47,000+ European occurrence data points; cereals identified as a dietary Ni contributor alongside cocoa, peanuts, and lentils, with TDI set at 13 µg/kg bw/day |
| 27 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 28 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Ni occurrence in Polish market samples 2019–2020: 5 cereal grains (millet, rye, wheat, barley), 11 pasta, 13 flours, 12 groats, 10... (n=56) |
| 29 | [[sources/tatahmentan2020-rice-grains-elements\|TatahMentan et al. 2020]]. *Toxic and Essential Elements in Rice and Other Grains from the United States and Other Countries*, International Journal of Environmental Research and Public Health | 2020 | Peer-reviewed | US/CA/TH tAs, Pb, Cd, Cu, Fe, Mn, Zn occurrence in Rice and other grains purchased from local stores in Louisiana, USA: 28 white rice samples, 11 brown rice... |
| 30 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 31 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 32 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 33 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | ET Pb, Cr, Mn, Fe, Co, Cu, Zn occurrence in Popcorn from 5 shops in Addis Ababa, Ethiopia (~200g each, pooled to 1 kg) and cornflakes from 3... (n=8) |
| 34 | [[sources/slepecka2017-ecological-cereal-heavy-metals-poland\|Slepecka et al. 2017]]. *Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts*, Current Issues in Pharmacy and Medical Sciences 30(3):147-150 | 2017 | Peer-reviewed | PL Cd, Pb, Zn, Cu occurrence in 10 ecological and 10 non-ecological cereal products (flour, flakes, bran) from different producers and regions of Poland; product... (n=20) |
| 35 | [[sources/ataee2016-iran-cereals-pb-cd\|Ataee et al. 2016]]. *Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products*, International Journal of Environmental Analytical Chemistry 96(3):271-283 | 2016 | Peer-reviewed | IR Pb, Cd occurrence in 21 cereal composites (7 grain types — rice, wheat, barley, peas, beans, corn, lentil — × 3 local... (n=21) |
| 36 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet; adults n=1,500 (NANS, age 18+, 2008–2010) and children n=594... (n=141) |
| 37 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples from 15 European countries (2003–2012) (n=18885) |
| 38 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, Sb occurrence in 3312 retail food samples from 24 UK locations, combined into 138 food categories and 28 food groups, all... (n=3312) |
| 39 | [[sources/hidalgo2015-gluten-free-cereal-bars-argentina\|Hidalgo et al. 2015]]. *Toxic Trace Element Contents in Gluten-free Cereal Bars Marketed in Argentina*, International Journal of Celiac Disease 3(1):12-16 | 2015 | Peer-reviewed | AR tAs, Cd, Pb occurrence in Seventy-two commercial gluten-free cereal bars marketed in Argentina, grouped by flavor/main formulation into apple, blueberry, chocolate, coconut, honey,... (n=72) |
| 40 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | Pb, Cd, tAs, tHg, Ni, Al, Cr, Zn, Cu occurrence in Narrative review of global literature on heavy metal accumulation in food plants |
| 41 | [[sources/moradi2015-iran-isfahan-soil-crops-metals\|Moradi et al. 2015]]. *A Human Health Risk Assessment of Soil and Crops Contaminated by Heavy Metals in Industrial Regions, Central Iran*, Human and Ecological Risk Assessment: An International Journal (accepted manuscript, 29 Sep 2015) | 2015 | Peer-reviewed | IR/EU/US Cd, Pb, Ni, Fe occurrence in Twenty-seven edible-crop samples and 27 paired topsoil (0–20 cm) samples drawn from three regions of Isfahan province, central... (n=27) |
| 42 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology reference chapter; synthesizes cereal grains' role as a major population-level Cd exposure pathway and anchors the toxicokinetic frame for interpreting cereal Cd concentration data |
| 43 | [[sources/pirsaheb2015-iran-kermanshah-cereals-metals\|Pirsaheb et al. 2015]]. *Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment*, Food Additives & Contaminants: Part B, Surveillance | 2015 | Peer-reviewed | IR Pb, Cd, Cr, Ni, Zn, Cu occurrence in 150 packed cereal samples representing 7 commodity types (rice, wheat, corn, peas, lentil, bean, split peas) collected from... (n=150) |
| 44 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 45 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 46 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 47 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 48 | [[sources/islam2014-bangladesh-cereals-pulses-metals\|Islam et al. 2014]]. *Heavy Metals in Cereals and Pulses: Health Implications in Bangladesh*, Journal of Agricultural and Food Chemistry | 2014 | Peer-reviewed | BD Cr, Ni, Cu, Zn, tAs, Cd, Pb occurrence in Composite samples of rice, wheat, maize, lentil, and black gram collected from agricultural fields in the Bogra district... (n=144) |
| 49 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 50 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn occurrence in Hong Kong general adult population; 150 TDS food items purchased on 4 occasions (March 2010 to February 2011),... (n=1800) |
| 51 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | HK iAs, tAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
| 52 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 53 | [[sources/iarc2012-nickel-compounds-monograph-100c\|IARC 2012]]. *Nickel and Nickel Compounds (IARC Monographs Volume 100C — A Review of Human Carcinogens: Arsenic, Metals, Fibres, and Dusts)*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Vol. 100C, pp. 169–218. International Agency for Research on Cancer, Lyon. | 2012 | Government report | INTL Ni occurrence in Human carcinogenicity evidence drawn from occupational cohort and nested case–control studies of nickel-producing and nickel-using workers (smelting, refining,... |
| 54 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA document establishing the cadmium PTMI of 25 µg/kg bw/month; cereals and rice identified as the primary dietary Cd exposure pathways underpinning this international reference value |
| 55 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA CONTAM Panel Pb risk assessment; identifies cereals as the dominant dietary Pb contributor in European adults, with child exposure estimates (0.80–3.10 µg/kg bw/day) driven substantially by cereal-based foods |
| 56 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EU iAs, tAs concentrations |
| 57 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Panel Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; cereals identified as the largest single dietary Cd exposure pathway for European adults and the anchor for EU cereal Cd maximum levels |
| 58 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 59 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EU Al concentrations |
| 60 | [[sources/jecfa-67th-aluminium-methylmercury-2007\|JECFA 2007]]. *Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 940 (Sixty-seventh meeting of JECFA, Rome, 20-29 June 2006) | 2007 | Government report | international Al, MeHg, tHg occurrence in Aluminium: total dietary exposure derived from market-basket and duplicate-diet surveys in adults (France, Germany, UK, USA, China), Total... |
| 61 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 62 | [[sources/ec2004-scoop-heavy-metals-dietary-exposure\|EC 2004]]. *Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States*, Reports on tasks for scientific cooperation, SCOOP Task 3.2.11 | 2004 | Government report | EU/BE/DK tAs, Cd, Pb, tHg occurrence in Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under... |
| 63 | [[sources/cot2003-arsenic-food-tds\|Committee on Toxicity of 2003]]. *Statement on arsenic in food: results of the 1999 Total Diet Study*, Committee on Toxicity statement | 2003 | Government report | GB tAs, iAs occurrence in 1999 UK Total Diet Study arsenic analysis: 119 food categories collected from 24 towns and combined into 20... (n=480) |
| 64 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative international Codex standard setting MLs for Cd, Pb, Hg, iAs, and Sn across food commodities; cereals and rice are the primary Cd ML categories and the international regulatory reference against which domestic limits are compared |
| 65 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 66 | [[sources/iarc1990-chromium-nickel-welding\|IARC 1990]]. *Chromium, Nickel and Welding*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Volume 49 | 1990 | Government report | INTL Cr, Cr-VI, Ni occurrence in International scientific working group; review of global occupational, environmental, dietary, and experimental data for Cr, Ni, and welding... |
| 67 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for cereals; see [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/oat]], [[ingredients/maize]], [[ingredients/quinoa]], [[ingredients/non-rice-grains]], and related per-grain pages for commodity-specific synthesis. Across the cereals category, the dominant pathway is soil-uptake at the grain-production stage: each cereal species takes up Cd, Pb, and other panel metals at species-specific rates that depend on plant root biology, soil pH, soil Cd and Pb concentrations, and water-management regime.

Rice is the canonical iAs accumulator and a moderate Cd accumulator (water-management trade-off discussed at [[ingredients/rice]]). Wheat, oat, and non-rice grains accumulate Cd at lower rates than rice and do not accumulate iAs efficiently. All cereal grains concentrate Cd in the bran layer relative to the endosperm.

The HMTc panel concerns for cereals are dominantly iAs (rice and rice-products) and Cd (all cereals, with bran-fraction concentration). Lead is generally low except in grains grown on Pb-contaminated soils.

## Ranges by source, region, and variety

Variance within "cereals" is dominated by the rice-vs-non-rice axis (rice carries 5-10× the iAs of non-rice grains from the same region) and by the whole-grain-vs-refined axis (whole-grain carries 1.5-3× the Cd of refined-flour from the same source grain). Within rice, see [[ingredients/rice]] for region/water-management/variety detail. Within non-rice cereals, geographic variance tracks regional soil-Cd: cereals from Cd-elevated regions (parts of EU, Australia, some Chinese growing zones) carry higher Cd than cereals from cleaner regions.

The Cat 3 Step 0 lock recognizes the rice-vs-non-rice split at the breakfast-cereal level ([[products/breakfast-cereal-rice-based]] vs [[products/breakfast-cereal-non-rice]]) and at the pasta level ([[products/pasta-rice-based]] vs [[products/pasta-wheat-based]]).

## Processing effects

Cereal milling separates the bran (high-Cd) from the endosperm (low-Cd); refined-flour cereal products carry 40-60 percent less Cd than whole-grain products from the same source grain. For rice, polishing similarly reduces iAs and Cd.

Cooking with water (boiling pasta, cooking rice or oats) extracts some metals into the cooking water; discarding the cooking water reduces per-serving iAs in rice substantially (35-50 percent per [[ingredients/rice]] discussion). For wheat-based pasta and other non-rice cereals, the cooking-water-discard effect is smaller because Cd is more tightly bound in the endosperm.

Toasting, baking, and other heat treatments at typical cooking temperatures do not change cereal metal content.

## Ingredient-derivative risk

Cereal-derived derivatives that concentrate metals: rice bran, wheat bran, oat bran (the bran-only fractions carry the source-grain bran concentration without endosperm dilution), rice protein concentrate (concentrates Cd from source rice), brown-rice syrup (concentrates iAs from source rice, per the [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson 2012]] organic-formula finding).

Cereal-flour-based finished products (bread, pasta, baked goods, breakfast cereal) inherit the source-grain metal load proportional to the cereal fraction in the recipe.

Cereal-based dietary supplements (rice-protein powder, wheat-germ supplements, oat-fiber supplements) carry per-serving metal at concentrated levels and route to [[products/supplements-protein-collagen-powders|Cat 16 row 20]] or [[products/supplements-botanicals-herbs|Cat 16 row 15]] depending on labeling.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention category-wide. Single-origin sourcing from documented low-Cd / low-iAs growing regions and supplier-grain QC verification reduce per-product metal load. For rice specifically, [[ingredients/rice]] discusses the substantial geographic-segmented sourcing variance.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the grain-production stage: soil pH management, water-management regime for rice, cultivar selection (low-Cd-accumulator cultivars identified in wheat, rice, oat, and other species), avoidance of high-Cd phosphate fertilizers.

**Processing levers** ([[mitigation/processing]]) include polishing decisions for rice (white-flour reduction vs nutrient retention), refined-flour vs whole-grain formulation, rinsing protocols (multi-rinse protocols for rice), and cooking-water-discard for rice products.

**Formulation levers** ([[mitigation/formulation]]) include substitution of low-iAs grain for rice in target-low-iAs products (oat-based or wheat-based vs rice-based formulations).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and iAs testing on incoming grain shipments. iAs/tAs speciation is operationally required for rice products targeting EU markets. See [[testing/icp-ms]] and [[testing/arsenic-speciation]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not generally consequential for cereal metal load on typical shelf-life timescales.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in cereals and cereal products. iAs has specific MLs for rice and rice products differentiated by processing form (parboiled vs non-parboiled milled, infant rice cereal).
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — sets Cd MLs for cereal grains; cereal-product-specific limits derive from national authorities and EU implementation.
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero iAs action level of 100 ppb for infant rice cereal.
- FDA Closer to Zero Pb framework covers processed baby foods including cereal-based baby foods.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to cereal-containing products sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
