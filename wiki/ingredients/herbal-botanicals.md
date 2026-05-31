---
title: "Herbal botanicals"
type: ingredient
commodity: herbal-botanicals
label: "Herbal botanicals"
aliases: [rooibos, chamomile, peppermint, hibiscus, ginger]
category: botanical
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 2000]
    p95_ppb: 3583
    confidence: high
    n_studies: 19
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 450]
    p95_ppb: 985
    confidence: high
    n_studies: 17
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
    typical_ppb: [3, 33]
    p95_ppb: 107
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [8000, 200000]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [245, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [337, 1686]
    p95_ppb: 7886
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: 14012
    confidence: high
    n_studies: 14
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
used_in_products: [herbal-botanical-infusions]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 35
---

# Herbal botanicals

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=19 | 50–2000 | 3583 | high | [[sources/porwollik2026-rhodiola-supplements-us-market\|1]], [[sources/rylander2025-georgia-children-blood-lead\|2]], [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|3]] |
| Cd | n=17 | 20–450 | 985 | high | [[sources/porwollik2026-rhodiola-supplements-us-market\|1]], [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| iAs | data gap | — | — | — | — |
| tAs | n=14 | 50–1000 | 14012 | high | [[sources/porwollik2026-rhodiola-supplements-us-market\|1]], [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| tHg | n=10 | 3–33 | 107 | medium | [[sources/porwollik2026-rhodiola-supplements-us-market\|1]], [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|2]], [[sources/moussa2024-spices-herbs-lebanon\|3]] |
| Ni | n=4 | 8000–200000 | — | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/salmani2023-herbal-teas-metals-review\|3]] |
| Al | n=3 | 245–500 | — | medium | [[sources/adhikari2024-leafy-vegetables-johannesburg\|1]], [[sources/salmani2023-herbal-teas-metals-review\|2]], [[sources/zafeiraki2021-hemp-cannabis-metals-greece\|3]] |
| Cr | n=7 | 337–1686 | 7886 | medium | [[sources/troeschel2024-cinnamon-applesauce-lead\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/herbal-botanical-infusions]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/porwollik2026-rhodiola-supplements-us-market\|Porwollik et al. 2026]]. *The quality and safety of Rhodiola rosea supplements on the U.S. market: An analysis of biomarkers, heavy metals, and pesticide residues*, PLoS One | 2026 | Peer-reviewed | ICP-MS survey of Pb, Cd, tAs, and tHg in 10 U.S.-market Rhodiola rosea supplement products (7 capsular, 3 tinctures); all capsular products had detectable As, Co, and Pb |
| 2 | [[sources/cfia2025-toxic-metals-selected-foods-2022-23\|CFIA 2025]]. *Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2025 | Government report | Canadian multi-commodity targeted survey (n=470) including spices for tAs, Cd, Pb, and tHg; spice category includes dried botanicals relevant to herbal formulations |
| 3 | [[sources/feszterova2025-herbal-tea-risk-elements\|Melania et al. 2025]]. *Analysis of risk elements in herbal tea samples*, Journal of Microbiology, Biotechnology and Food Sciences | 2025 | Peer-reviewed | SK Cu, Pb, Ni, tAs occurrence in Six herbal tea materials from Slovakia prepared under three acid-extraction methods (n=18) |
| 4 | [[sources/rylander2025-georgia-children-blood-lead\|Rylander et al. 2025]]. *Blood lead levels in children aged 5–7 years in the Republic of Georgia*, Environmental Health Perspectives | 2025 | Peer-reviewed | GE Pb occurrence in Children aged 5–7 years participating in surveillance study in the Republic of Georgia (VAMS-based blood collection); 1,635 children... (n=1635) |
| 5 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari et al. 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa* | 2024 | Peer-reviewed | ZA Al, As, Cd, Co, Cr, Cu, Hg, Ni, Pb, Zn occurrence in Composite leafy vegetable samples from roadside open-air markets (unwashed and washed) and large stores (supermarkets, vegetable markets), Johannesburg,... (n=20) |
| 6 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | Pb survey across 103 Mexican market foods by GF-AAS; spices (black pepper, turmeric) among the highest-Pb items detected, supporting routing of spice-botanicals to this page |
| 7 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Codex CCCF17 session proceedings; routed here as regulatory context for herbal-botanical contaminant governance under the Codex CXS 193-1995 framework |
| 8 | [[sources/fda-import-alert-99-42-spice-lead\|FDA 2024]]. *FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination*, FDA Import Alerts | 2024 | Regulatory | US Pb occurrence in Import shipments of spices at US ports of entry |
| 9 | [[sources/hajmoradi2024-verbascum-mining-iran\|Hajmoradi et al. 2024]]. *Accumulation of Heavy Metals and Their Genotoxic Potential in Medicinal Plant Verbacsum speciosum Schrad.*, Journal of Advances in Environmental Health Research 12(2): 65-72 | 2024 | Peer-reviewed | IR Pb, Zn occurrence in Verbascum speciosum (Common Mullein, Iranian Gole Mahur) plus paired surface soils sampled at five mining-impacted localities (a-e, 0-12... (n=18) |
| 10 | [[sources/hu2024-ecl-pb-lycium-glycyrrhiza\|Hu et al. 2024]]. *An electrochemiluminescence device for visualized detection of lead in practical samples*, RSC Advances | 2024 | Peer-reviewed | ECL aptamer-sensor method development paper validated on Lycium ruthenicum and Glycyrrhiza uralensis extracts; contributes analytical-method context for Pb detection in herbal botanicals rather than occurrence data |
| 11 | [[sources/kowalski2024-herbal-tea-heavy-metals\|Maciej et al. 2024]]. *Assessment of heavy metal contamination and associated health risk indices in commercial herbal tea samples using inductively coupled plasma mass spectrometry*, International Journal of Advanced Chemistry Research | 2024 | Peer-reviewed | PL Pb, Cd, tAs, tHg, Cr occurrence in Commercial herbal tea samples purchased from Polish retail markets (n=48) |
| 12 | [[sources/moussa2024-spices-herbs-lebanon\|Moussa et al. 2024]]. *Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs*, PLoS ONE | 2024 | Peer-reviewed | LB Pb, Cd, tAs, tHg occurrence in 96 composite samples (from 480 individual samples) of 13 dried herbs and spices collected from Lebanese markets in... (n=96) |
| 13 | [[sources/napier2024-wanabana-lead-apple-cinnamon\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Government report | CDC MMWR outbreak report linking pediatric Pb poisoning to cinnamon adulterated with lead chromate (Ecuador); cinnamon is a spice-botanical, grounding the high-Pb-risk signal for adulterated spice ingredients |
| 14 | [[sources/oseisafo2024-ghana-spices-metals\|Osei-Safo et al. 2024]]. *Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana*, The Scientific World Journal | 2024 | Peer-reviewed | GH/IN/CN tAs, Pb, Cd occurrence in 90 spice samples (10 spice types × 3 markets × 3 sellers per market) purchased from Madina, Kaneshie,... (n=90) |
| 15 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 16 | [[sources/thomas2024-lead-poisoning-ayurvedic-herbal\|Thomas et al. 2024]]. *Case of lead poisoning secondary to intake of herbal medicine for diabetes mellitus in a tertiary care hospital in Kerala*, Endocrinology, Diabetes & Metabolism Case Reports | 2024 | Peer-reviewed | IN Pb occurrence in Single clinical case: 58-year-old female with lead poisoning from Ayurvedic herbal diabetes capsules, Jubilee Mission Medical College, Kerala,... (n=1) |
| 17 | [[sources/troeschel2024-cinnamon-applesauce-lead\|Troeschel et al. 2024]]. *Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024*, Morbidity and Mortality Weekly Report (MMWR) | 2024 | Government report | US Pb, Cr occurrence in Cases of lead poisoning (BLL ≥3.5 µg/dL) reported to CDC following consumption of recalled WanaBana/Schnucks/Weis cinnamon-containing applesauce pouches,... (n=566) |
| 18 | [[sources/yang2024-libs-cd-panax-notoginseng\|Yang 2024]]. *LIBS detection of cadmium in Panax notoginseng*, unknown | 2024 | Peer-reviewed | LIBS method-development paper for rapid Cd detection in Panax notoginseng (tienchi ginseng); contributes analytical-method context for Cd in TCM botanical herbs rather than occurrence data |
| 19 | [[sources/al-khayri2023-cd-medicinal-plants\|Al-Khayri et al. 2023]]. *Cadmium stress in plants: A critical review of the effects, mechanisms, and tolerance strategies*, Frontiers in Plant Science | 2023 | Peer-reviewed | Cd occurrence in Review covering Cd concentrations across diverse plant species including medicinal herbs; cites survey data showing 14–16% of peppermint... |
| 20 | [[sources/inada2023-herbal-medicine-heavy-metal-regulations\|Inada 2023]]. *Comparison of heavy metal regulations for herbal medicines across pharmacopoeias*, Journal of Natural Medicines | 2023 | Peer-reviewed | JP/EU/US Pb, Cd, Hg, As occurrence in Regulatory limit compilation across 9 pharmacopoeias (Japanese, European, USP, Chinese, Korean, Taiwanese, Indian, British, WHO) |
| 21 | [[sources/salmani2023-herbal-teas-metals-review\|Salmani et al. 2023]]. *Comparison of Essential and Toxic Metals Levels in some Herbal Teas: a Systematic Review*, Biological Trace Element Research | 2023 | Review | Systematic review of 49 studies on Pb, Cd, tAs, Al, Cr, and Ni in herbal teas (chamomile, thyme, rosemary, black tea, green tea); chamomile Cd notably elevated at mean 23 µg/g across included studies |
| 22 | [[sources/zakrzewska2023-cadmium-soil-micp-parsley\|Zakrzewska et al. 2023]]. *Reduction of bioavailability and phytotoxicity effect of cadmium in soil by microbial-induced carbonate precipitation using metabolites of ureolytic bacterium Ochrobactrum sp. POC9*, Frontiers in Plant Science | 2023 | Peer-reviewed | PL/EU Cd occurrence in Pot experiments with Petroselinum crispum (root parsley) grown in Cd-contaminated agricultural soil supplemented with metabolites containing carbonates (MCC)... |
| 23 | [[sources/bai2022-arsenic-coal-burning-shaanxi\|Bai et al. 2022]]. *Investigation Into Environmental Selenium and Arsenic Levels and Arseniasis Prevalence in an Arsenic-Affected Coal-Burning Area*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN tAs occurrence in 100 arseniasis patients and 50 healthy controls in coal-burning area of Shaanxi Province, China (n=150) |
| 24 | [[sources/jurowski2022-chromium-peppermint-tincture\|Jurowski et al. 2022]]. *Chromium impurities in peppermint tinctures from Polish pharmacies: speciation and health implications*, unknown | 2022 | Peer-reviewed | PL Cr occurrence in Peppermint tinctures from Polish pharmacies |
| 25 | [[sources/njinga2022-nigeria-herbal-cd-cr\|Njinga et al. 2022]]. *Major chemical carcinogens and health exposure risks in some therapeutic herbal plants in Nigeria*, PLOS ONE | 2022 | Peer-reviewed | NG Cd, Cr occurrence in Dried plant material of Adansonia digitata (baobab), Psidium guajava (guava), and Carica papaya (papaya) collected from Northern Nigeria... (n=3) |
| 26 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 27 | [[sources/ciocan2021-ayurvedic-lead-hg-poisoning\|Ciocan et al. 2021]]. *Lead poisoning from Ayurvedic treatment: a further case*, La Medicina del Lavoro | 2021 | Peer-reviewed | IT/IN Pb, tHg, tAs occurrence in Single case: 30-year-old Indian sailor treated in Italy; ICP-MS analysis of 4 Ayurvedic drug product samples (products 1,... |
| 28 | [[sources/wang2021-agnh-cinnabar-realgar-hg-as\|Wang et al. 2021]]. *AGNH Protects Against Cinnabar and Realgar-Induced Hepatorenal Toxicity in Mice via Attenuation of Oxidative Stress, Inflammation, and Apoptosis*, Frontiers in Pharmacology | 2021 | Peer-reviewed | CN tHg, tAs, iAs occurrence in Mice (ICR strain) administered cinnabar (HgS) and realgar (As4S4) orally as part of traditional Chinese medicine formulation safety... |
| 29 | [[sources/zafeiraki2021-hemp-cannabis-metals-greece\|Zafeiraki et al. 2021]]. *Macro and Trace Elements in Hemp (Cannabis sativa L.) Cultivated in Greece: Risk Assessment of Toxic Elements*, Frontiers in Chemistry | 2021 | Peer-reviewed | GR/EU Pb, Cd, tAs, tHg, Cr, Ni, Al, Sn occurrence in 90 Cannabis sativa L. leaf/flower samples from 9 varieties cultivated across 13 regions in Greece, collected 2018-2019; 21... (n=90) |
| 30 | [[sources/bulduk2020-vicia-faba-elements\|Ibrahim 2020]]. *Determination of trace element levels in flowers and leaves of vicia faba by ICP-MS*, Progress in Chemical and Biochemical Research | 2020 | Peer-reviewed | TR Cr, Fe, Zn, Al, Cu, Pb, Cd, Mn, Ni occurrence in Dried Vicia faba flowers and leaves analyzed as medicinal plant material in Turkey |
| 31 | [[sources/fogarasi2019-tea-aluminum\|Erzsebet et al. 2019]]. *Aluminium contamination of several types of tea*, Orvostudomanyi Ertesito | 2019 | Peer-reviewed | RO Al occurrence in Green, black, fruit, and herbal tea infusions prepared from sampled tea materials (n=48) |
| 32 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 33 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Herbal botanicals is the aggregate ingredient label for medicinal and culinary plant-based ingredients including herbs, spices, traditional medicine plants (Ayurvedic, Traditional Chinese Medicine, traditional African medicine), and herbal-supplement raw materials (rhodiola, ginseng, turmeric, ashwagandha, chamomile, peppermint, lycium, glycyrrhiza, panax notoginseng, and dozens more). Heavy-metal accumulation in herbal botanicals operates via three pathways: source-plant soil-uptake (leafy and root botanicals are documented [[metals/cadmium|Cd]] and [[metals/lead|Pb]] accumulators per [[sources/al-khayri2023-cd-medicinal-plants|Al-Khayri 2023]] review of Cd-stress mechanisms in medicinal plants), traditional-medicine adulteration (Ayurvedic and TCM products have documented histories of intentional metal additions — [[metals/lead|Pb]] and [[metals/mercury-total|Hg]] in some traditional preparations per [[sources/ciocan2021-ayurvedic-lead-hg-poisoning|Ciocan 2021]] and [[sources/thomas2024-lead-poisoning-ayurvedic-herbal|Thomas 2024]] Kerala diabetes-herbal case report), and contamination from processing infrastructure (dried herbal products from industrial-region processing facilities can carry elevated Pb from equipment-contact).

The most consequential recent contamination event was the WanaBana cinnamon-applesauce Pb poisoning outbreak documented by [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024]] and [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]], where cinnamon adulterated with lead chromate from Ecuador caused pediatric Pb poisoning across the US, leading to the FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]) for spice Pb-contamination detention. The HMTc panel concerns for herbal botanicals are dominantly Pb (with documented adulteration risk and naturally elevated leafy-botanical levels), Cd (per the systematic herbal-tea review by [[sources/salmani2023-herbal-teas-metals-review|Salmani 2023]] documenting chamomile Cd at 23 µg/g mean), Cr (per [[sources/jurowski2022-chromium-peppermint-tincture|Jurowski 2022]] Polish peppermint tincture survey), and total As. The Rhodiola supplement survey by [[sources/porwollik2026-rhodiola-supplements-us-market|Porwollik 2026]] documents detectable Pb, As, and Co across all capsular US-market Rhodiola products.

## Ranges by source, region, and variety

Variance within herbal botanicals tracks botanical type (root vs leaf vs stem vs flower vs seed — each with different per-tissue accumulation patterns), source-region (Indian and Chinese TCM/Ayurvedic source regions with documented industrial-deposition contamination; African source regions per [[sources/njinga2022-nigeria-herbal-cd-cr|Njinga 2022]] Nigerian therapeutic herb survey; European source regions; US source regions), processing tier (commercial-supplement-grade vs commodity-spice-grade vs traditional-medicine-grade with variable QC), and adulteration risk (intentional Pb addition in some traditional Ayurvedic preparations, Pb chromate adulteration in spices). The Mexican market survey by [[sources/cantoral2024-lead-levels-mexican-foods|Cantoral 2024]] identified spices (black pepper, turmeric) as the highest-Pb-detected items across 103 Mexican market foods. The Ghana market survey by [[sources/oseisafo2024-ghana-spices-metals|Osei-Safo 2024]] and Lebanese spice survey by [[sources/moussa2024-spices-herbs-lebanon|Moussa 2024]] document elevated levels in some imported spice supply.

## Processing effects

Herbal botanical processing involves drying (the dominant processing step that concentrates per-mass metals via moisture removal at the typical 8-10× factor for dried herbs and spices), milling/powdering (additional per-mass concentration), extraction for supplement and tincture production (solvent-based extraction with ethanol, water, or glycerin partitions metals between solid residue and extract), and packaging. Each step can concentrate metals or introduce contamination from processing-equipment contact.

## Ingredient-derivative risk

Herbal botanical derivatives span dried whole botanicals (loose herbs, whole spices), powdered botanicals (ground spices, powdered supplements), liquid extracts (tinctures, fluid extracts, glycerites), capsular supplements (encapsulated dried-and-powdered botanical material), and processed-spice blends. Concentrated extracts and powdered products carry per-mass metals at the dried-herb baseline; capsular supplements deliver per-serving doses that can be substantial for daily-use consumer products. Honey from bees foraging in Cd-contaminated landscapes per [[sources/knoll2024-honeybee-cadmium-review|Knoll 2024]] can carry plant-Cd inheritance.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention given the documented adulteration risk. Supplier audit programs with chain-of-custody verification (especially for Pb-adulteration high-risk botanicals like cinnamon and turmeric); source-region specification favoring documented low-contamination production zones; and contractual specification of Pb/Cd/Cr ceiling on incoming botanical supply with per-lot certificate of analysis. The CFIA Canadian targeted-survey approach ([[sources/cfia2025-toxic-metals-selected-foods-2022-23|CFIA 2025]]) provides a regulatory monitoring model.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the botanical-cultivation stage. Soil pH management; microbial-induced carbonate precipitation per [[sources/zakrzewska2023-cadmium-soil-micp-parsley|Zakrzewska 2023]] as an emerging biotechnology lever; cultivar selection.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; drying-and-milling-equipment audit; and avoidance of legacy-contaminated processing facilities.

**Formulation levers** ([[mitigation/formulation]]) include herb-blend formulations that dilute single-source metal load; substitution of high-Pb-risk botanicals with lower-Pb alternatives in functional formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are critical given adulteration risk. Lot-level Pb, Cd, Cr, As testing on incoming botanical supply (per [[sources/inada2023-herbal-medicine-heavy-metal-regulations|Inada 2023]] pharmacopoeia framework); ICP-MS as the standard analytical platform; emerging methods like LIBS for rapid Cd screening per [[sources/yang2024-libs-cd-panax-notoginseng|Yang 2024]] and ECL aptamer-sensor methods for Pb per [[sources/hu2024-ecl-pb-lycium-glycyrrhiza|Hu 2024]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include opaque-container specification (protects botanical phytochemistry); moisture-barrier packaging.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in herbs and spices: Pb 1000 ppb general spices, with stricter limits for specific commodity categories; Cd 1500 ppb general spices.
- FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]) authorizes detention without physical examination of spices flagged for lead contamination.
- USP Chapter <2232> elemental impurity limits for dietary supplements.
- Codex CCCF17 ([[sources/codex-cccf17-2024|Codex 2024]]) initiates new work on Cd in foods including herbal-botanical matrices.
- Country-specific pharmacopoeia regulations vary widely per [[sources/inada2023-herbal-medicine-heavy-metal-regulations|Inada 2023]]; Chinese Pharmacopoeia, US Pharmacopeia, Japanese Pharmacopoeia, and European Pharmacopoeia each set heavy-metal limits for herbal medicines.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to herbal-botanical products sold in California; the broader spice-and-herb Prop 65 enforcement context applies to dried-botanical products.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [d26f8f1](https://github.com/paleofoundation/heavymetalindex/commit/d26f8f1) | 2026-05-30 | autonomy: checkpoint [deterministic-phase] 2026-05-30T04-02-50Z |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
<!-- END: hmi-page-history -->
