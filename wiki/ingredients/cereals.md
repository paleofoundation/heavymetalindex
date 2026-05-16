---
title: "Cereals"
type: ingredient
commodity: cereals
label: "Cereals"
aliases: ["cereal grains", "grain foods", "grain-based foods", grains, barley, breakfast-cereals]
category: grain
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-uptake, geography, processing, fortification]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/oat]]", "[[ingredients/wheat]]"]
used_in_products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 33
---

# Cereals

Cereals is the regulatory umbrella term used by EFSA, JECFA, and Codex Alimentarius for grain-based human foods. It encompasses rice, wheat, oat, maize, barley, rye, and the products derived from them. Per-commodity contamination profiles live on the individual grain pages ([[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], etc.); this page is the structural parent that lets regulatory documents addressing "cereals" as a category route correctly.

The cereals category is the dominant cadmium dietary-exposure pathway in EFSA and JECFA assessments and a primary source of inorganic arsenic exposure where rice-based products are prevalent. Cereal-based infant foods (referenced in EU Commission Regulation 2023/915 and FDA Closer-to-Zero guidance) carry tighter regulatory limits than adult cereal products because of the higher per-kg-body-weight intake in early life.

## Routing

This node is the umbrella for grain-based regulatory documents. Per-grain detail belongs on [[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], [[ingredients/corn]], and related pages. Product-level routing flows through [[products/baby-cereals-dry-rice-based]] and [[products/baby-cereals-dry-non-rice]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. This umbrella page carries no per-commodity values; concentrations and exposure data live on the individual grain pages and on the regulatory pages referenced below.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | *[awaiting synthesis]* |
| 4 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Codex CCCF17 session report; initiated a new Code of Practice for Cd in Foods with cereal and rice annexes as priority commodities, establishing the current international governance trajectory for cereals Cd limits |
| 5 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/hao2024-amf-arsenic-plants-meta-analysis\|Hao et al. 2024]]. *Meta-analysis of the effects of arbuscular mycorrhizal fungi on arsenic accumulation in plants and grain*, Frontiers in Plant Science | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|Mohammadian-Hafshejani et al. 2024]]. *Investigating the Relationship between Cadmium Exposure and the Risk of Prostate Cancer: A Systematic Review and Dose-Response Meta-Analysis*, Journal of Health (Tehran University of Medical Sciences) | 2024 | Peer-reviewed | IR/US/EU Cd occurrence in 16 observational studies (case-control, cross-sectional, cohort) on Cd exposure and prostate cancer risk; searches up to May 2022 (n=16) |
| 9 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 10 | [[sources/altunay2023-cadmium-food-turkey\|Altunay et al. 2023]]. *Ultra-Sensitive Determination of Cadmium in Food and Water by Flame-AAS after a New Polyvinyl Benzyl Xanthate as an Adsorbent Based Vortex Assisted Dispersive Solid-Phase Microextraction: Multivariate Optimization*, Foods 2023, 12, 3620 | 2023 | Peer-reviewed | Cd measurement by FAAS in 13 Turkish market foods including oat, corn, wheat, and three rice variants; values are anomalously high relative to EU surveillance data and should be treated with caution pending curator review |
| 11 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 12 | [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|Oduro et al. 2023]]. *Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana*, Discover Food | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 13 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 14 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 15 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 16 | [[sources/li2022-wheat-pte-guizhou-health-risk\|Li et al. 2022]]. *Co-exposure of potentially toxic elements in wheat grains reveals a probabilistic health risk in Southwestern Guizhou, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 17 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 18 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA CONTAM Panel Ni risk assessment using 47,000+ European occurrence data points; cereals identified as a dietary Ni contributor alongside cocoa, peanuts, and lentils, with TDI set at 13 µg/kg bw/day |
| 19 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 20 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | *[awaiting synthesis]* |
| 21 | [[sources/slepecka2017-ecological-cereal-heavy-metals-poland\|Slepecka et al. 2017]]. *Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts*, Current Issues in Pharmacy and Medical Sciences | 2017 | Peer-reviewed | *[awaiting synthesis]* |
| 22 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | *[awaiting synthesis]* |
| 23 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002 | 2015 | Government report | *[awaiting synthesis]* |
| 24 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | *[awaiting synthesis]* |
| 25 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | *[awaiting synthesis]* |
| 26 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology reference chapter; synthesizes cereal grains' role as a major population-level Cd exposure pathway and anchors the toxicokinetic frame for interpreting cereal Cd concentration data |
| 27 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | *[awaiting synthesis]* |
| 28 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | *[awaiting synthesis]* |
| 29 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA document establishing the cadmium PTMI of 25 µg/kg bw/month; cereals and rice identified as the primary dietary Cd exposure pathways underpinning this international reference value |
| 30 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA CONTAM Panel Pb risk assessment; identifies cereals as the dominant dietary Pb contributor in European adults, with child exposure estimates (0.80–3.10 µg/kg bw/day) driven substantially by cereal-based foods |
| 31 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Panel Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; cereals identified as the largest single dietary Cd exposure pathway for European adults and the anchor for EU cereal Cd maximum levels |
| 32 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative international Codex standard setting MLs for Cd, Pb, Hg, iAs, and Sn across food commodities; cereals and rice are the primary Cd ML categories and the international regulatory reference against which domestic limits are compared |
<!-- END: hmi-source-legend -->

