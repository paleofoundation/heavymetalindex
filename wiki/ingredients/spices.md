---
type: ingredient
commodity: spices
title: "Spices"
label: "Spices"
aliases: [ground-spices, whole-spices, seasoning-spices, chili-pepper]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 3000]
    p95_ppb: null
    confidence: high
    n_studies: 8
    last_reviewed: 2026-05-31
  Cd:
    status: populated
    typical_ppb: [30, 500]
    p95_ppb: null
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-31
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [20, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 3000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [1000, 20000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [adulteration-lead-chromate, soil-uptake, drying-concentration, origin-country, processing]
lower_risk_variants: ["[[ingredients/whole-spices]]"]
higher_risk_variants: ["[[ingredients/turmeric]]", "[[ingredients/cinnamon]]", "[[ingredients/paprika]]"]
used_in_products: ["[[products/spice-blends]]", "[[products/curry-powder]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 33
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 8
---

# Spices

Spices — the broad seasoning category covering ground and whole dried plant parts (turmeric, paprika, cinnamon, black pepper, cumin, coriander, chili, cardamom, cloves, and dozens more) — sit at the top of the food-system heavy-metals risk distribution by mass concentration. The category is closely related to [[ingredients/herbs-and-spices]] (which aggregates both leaf-and-flower herbs and seed-and-bark spices) but the spices-only subset focuses on the seed, root, bark, and fruit-derived seasonings that include the highest-Pb-adulteration-risk product categories: turmeric, cinnamon, and paprika. The current corpus loads 8 sources spanning the US (Angelon-Gaetz 2018 NC home investigations at n=386, [[sources/angelon-gaetz2018-lead-spices-north-carolina]]), Mexico (Cantoral 2024 most-consumed foods Pb monitoring at n=103, [[sources/cantoral2024-lead-levels-mexican-foods]]), EU (Carpena 2024 herbs chemical-hazards assessment, [[sources/carpena2024-chemical-hazards-herbs-europe]]), Canada (CFIA 2025 targeted survey at n=470, [[sources/cfia2025-toxic-metals-selected-foods-2022-23]]), Nigeria (Chime 2025 Nigerian spice trace-metal survey, [[sources/chime2025-nigerian-spices-as-cd-pb]]), multi-origin (Cicero 2022 8-metal panel across 6 countries, [[sources/cicero2022-minerals-spices-aromatic-herbs]]), UAE (Dghaim 2015 traditional-herbs at n=81, [[sources/dghaim2015-heavy-metals-uae-herbs]]), and the EU EFSA 2021 aluminium regulatory framework ([[sources/efsa2021-aluminium-food-qa]]).

## Why this commodity accumulates heavy metals

The spices-as-a-category accumulation pathways compound: soil uptake into the live plant carries Cd, Cr, Ni, and trace metals into the seed-or-root-or-bark tissue at rates depending on soil chemistry, plant species, and growing region; drying concentrates these metals on a per-mass basis by 5-10× through moisture removal; atmospheric deposition adds surface Pb to spice plants grown in roadside or industrial settings; and post-harvest adulteration with lead-based pigments (the canonical pathway documented in turmeric and cinnamon supply chains) drives the worst-case-tail distribution. The Angelon-Gaetz 2018 home-investigation cohort documented spices as a recurring elevated-Pb source in NY-area homes of children with elevated blood-lead levels, with specific country-of-origin product flagged ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The Cicero 2022 multi-origin work (n=13 across IT, SA, IN, IR, ID, VN) provides a clean within-non-adulterated baseline across the 8-metal panel ([[sources/cicero2022-minerals-spices-aromatic-herbs]]). The CFIA 2025 Canadian targeted survey (n=470) is the largest recent single-jurisdiction dataset and confirms the bimodal distribution: non-adulterated commodity-grade product compliant with applicable caps, with a small worst-case-tail above caps driven by adulteration-risk supply chains ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]). The Cantoral 2024 Mexican most-consumed-foods Pb monitoring identified spices among the elevated-Pb categories in Mexican retail ([[sources/cantoral2024-lead-levels-mexican-foods]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=8 | 100–3000 | — | high | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|2]], [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|3]] |
| Cd | n=6 | 30–500 | — | high | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|2]], [[sources/spex2023-hot-sauce-chili-powder-metals\|3]] |
| iAs | data gap | — | — | — | — |
| tAs | n=5 | 20–500 | — | medium | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/spex2023-hot-sauce-chili-powder-metals\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| tHg | n=3 | 1–50 | — | medium | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| Ni | n=2 | 200–3000 | — | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]] |
| Al | n=2 | 1000–20000 | — | low | — |
| Cr | n=2 | 50–1000 | — | low | [[sources/spex2023-hot-sauce-chili-powder-metals\|1]] |
| Sn | n=1 | — | — | — | — |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

The spices category exhibits extreme within-category variance. Adulteration-prone single-spice categories (turmeric, cinnamon, paprika; see [[ingredients/turmeric]] and [[ingredients/cinnamon]]) can carry Pb at 5,000-100,000 ppb in worst-case-tail product. Non-adulteration-prone categories (black pepper, cumin, coriander, cardamom, cloves) carry Pb at typical-spice levels of 100-3,000 ppb driven by ordinary agronomy. The Cicero 2022 6-country multi-spice work covers 12 spice species and provides clean per-species values within a single methodological framework. The CFIA 2025 Canadian targeted survey at n=470 is the largest single-jurisdiction recent dataset. The Mexican Cantoral 2024 most-consumed-foods survey at n=103 covers spices within the broader Mexican retail food panel. The UAE Dghaim 2015 traditional-herbs work covers 81 samples and characterises the traditional-medicine market context. The Nigerian Chime 2025 work (n=7) is a small but recent African-market data point. Variety-level: within-spice variance (Bangladeshi turmeric vs Sri Lankan turmeric, cassia vs Ceylon cinnamon, Hungarian paprika vs Spanish paprika) is documented in the dedicated spice pages.

## Processing effects

Drying is the dominant processing-driven concentration event for spices, with fresh-to-dried transitions concentrating metals on a per-mass basis by 5-10× through moisture removal. This is a basis change rather than contamination but matters for reporting consistency. Grinding and blending introduce minor metal pickup from equipment surfaces. The single largest processing-driven contamination event is adulteration: post-harvest addition of lead chromate (yellow-orange pigment in turmeric, paprika) or lead-based red pigments shifts the affected lots by 2-4 orders of magnitude. The adulteration pathway is documented for turmeric, cinnamon, and paprika specifically. Steam sterilisation, irradiation, and other microbial-control processing steps do not affect metal load.

## Ingredient-derivative risk

Whole-form intact spices (whole black pepper, whole cinnamon stick, whole nutmeg, cardamom pods, clove buds) carry the lowest adulteration risk because the adulteration channel typically works on ground product. Ground and powdered spices carry the highest absolute Pb concentrations in the worst-case tail. Spice blends and seasoning mixes (curry powder, garam masala, taco seasoning, chili powder, pumpkin pie spice) inherit the metal load of their highest-concentration component, weighted by inclusion ratio. Spice extracts and oleoresins typically have lower metal loads than the parent dry spice because most metals partition with the spent solid matter rather than the volatile fraction.

## Mitigation options

### Sourcing levers

Origin-country screening is the single highest-impact lever, especially for turmeric, cinnamon, paprika, and other yellow-and-red-pigmented ground spices. Source whole-spice rather than ground when feasible; in-brand grinding eliminates the adulteration pathway. For ground product from adulteration-prone categories, specify XRF screening at intake for Pb and Cr simultaneously. FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) provides the US regulatory framework.

### Agronomic levers

For brand-controlled-supply operations, soil testing and amendment reduce baseline plant metal load. The Carpena 2024 European-scale assessment emphasises that agronomic interventions reduce baseline but do not address the dominant adulteration risk ([[sources/carpena2024-chemical-hazards-herbs-europe]]).

### Processing levers

For brand-controlled grinding, validate equipment surfaces, screen incoming whole spice before grinding, and segregate adulteration-prone product (yellow-red-pigmented ground spice) for additional QC.

### Formulation levers

For seasoning blends, characterise the metal load of each ingredient on a dry-weight basis and weight to keep aggregate Pb, Cd, and tAs at the lowest achievable per-serving level. Dilution with lower-metal carrier ingredients reduces per-serving exposure proportionally.

### Testing and QC levers

Lot-level ICP-MS testing of every ground-spice lot at intake, with detection floors ≤ 100 ppb Pb. For adulteration-prone product (turmeric, paprika, cinnamon), XRF screening catches the Pb-and-Cr adulteration pattern at intake. The CFIA 2025 protocol is a useful population-screening reference ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]).

### Packaging and storage levers

Packaging is not the dominant pathway for dry spices.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set spice-specific heavy-metals maxima; general food categories apply. The EU Regulation 2023/915 applies a 1.5 mg/kg Pb maximum for "spices (dry products from seeds, fruits, roots, bark, or other plant parts)" and 0.5 mg/kg Cd for the same category. The NYS Department of Health 2019 Technical Support Document derived health-based guidance values (Pb 0.21, Cd 0.21, Cr 0.41, iAs 0.10 mg/kg) for spices specifically. FDA Import Alert 99-42 is the operational US enforcement mechanism for adulteration-risk imports.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | international/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 2 | [[sources/bahrouna2025-zawia-spices-metals\|Bahrouna et al. 2025]]. *Evaluation of Heavy Metals Contents in Spices Available on Zawia City`s Markets*, University of Zawia Journal of Natural Sciences | 2025 | Peer-reviewed | LY Pb, Cd, tAs, Hg, Mn, Ni, Cu, Zn, Fe, Co, Cr occurrence in Thirteen mixed spice and seasoning samples purchased from local markets and spice shops in Zawia City, Libya, during... (n=13) |
| 3 | [[sources/bekalu2025-black-cumin-heavy-metals-ethiopia\|Yewbmirt et al. 2025]]. *Analysis of Nigella sativa L. (Black Cumin) seeds for levels of heavy metals using FAAS: geospatial profiling and regional safety implications*, Discover Chemistry | 2025 | Peer-reviewed | ET Pb, Cd, Fe, Cu, Zn occurrence in 81 Nigella sativa L. black cumin seed samples from Dejen, Gozamen, and Sinan districts of East Gojjam, Ethiopia;... (n=81) |
| 4 | [[sources/brima2025-african-foods-uk-metals\|Brima et al. 2025]]. *Assessment of Human Health Risk Based on Analysis of Potentially Toxic Elements in African Foods Sold in the UK Market*, African Journal of Agriculture and Food Science | 2025 | Peer-reviewed | GB tAs, Cd, tHg, Pb occurrence in African foods and non-food additives sold in the UK market and consumed by African communities (n=152) |
| 5 | [[sources/chime2025-nigerian-spices-as-cd-pb\|Chime et al. 2025]]. *Assessment of toxic trace metal contamination in food spices sold in Nigerian markets*, World Journal of Advanced Research and Reviews | 2025 | Peer-reviewed | Nigerian-market spice Pb-Cd-tAs (n=7); West African retail context |
| 6 | [[sources/pribil2025-hot-sauce-food-safety-review\|Pribil et al. 2025]]. *Food safety considerations in hot sauce production: hazards, regulations, and industry challenges*, MOJ Food Processing & Technology | 2025 | Review | US Pb occurrence in Narrative review — no primary sampling. Metals content references Dhaneria et al. 2013 on imported hot sauces from... |
| 7 | [[sources/shah2025-commercial-turmeric-lead-chromium\|Shah et al. 2025]]. *Heavy Metal Contamination in Commercial Turmeric: A Public Health Perspective*, COGNITION: A Peer Reviewed Transdisciplinary Research Journal | 2025 | Peer-reviewed | NP Pb, Cr occurrence in Commercial turmeric samples collected from Itahari and Biratnagar, Nepal (n=7) |
| 8 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | US/EC Pb occurrence in Routine pediatric blood lead surveillance in North Carolina + nationwide; ~500 cases identified nationally, 22 in NC. Lead... |
| 9 | [[sources/sargsyan2024-rapid-market-spice-lead\|Sargsyan et al. 2024]]. *Rapid Market Screening to assess lead concentrations in consumer products across 25 low- and middle-income countries*, Scientific Reports | 2024 | Peer-reviewed | AM/AZ/BD Pb occurrence in Loose processed spice samples collected during rapid market screening in 25 low- and middle-income countries (n=1084) |
| 10 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 11 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | BD Pb, Cd, Cr occurrence in 19 commercially-available spice samples (15 non-branded, 4 branded) collected from Sonapur and Maijdee marketplaces in Noakhali District, Bangladesh;... (n=19) |
| 12 | [[sources/patel2023-singrauli-herbal-plants-metals\|Patel et al. 2023]]. *Evaluation of heavy metals in herbal plants growing in Singrauli Region of Madhya Pradesh*, International Journal of Chemical and Biological Sciences | 2023 | Peer-reviewed | IN Pb, Cr, Cd, Cu, Ni, Zn, Fe occurrence in Ginger rhizome, suran rhizome, and cumin seed samples collected from different locations within Singrauli region, Madhya Pradesh, India;... (n=3) |
| 13 | [[sources/pradhan2023-heracleum-nepalense-elements\|Pradhan 2023]]. *Inductive coupled plasma analysis of Heracleum nepalense D. Don (Umbelliferae)*, Exploratory Animal and Medical Research | 2023 | Peer-reviewed | IN Pb, Cd, tAs, Hg, Al, Cr, Ni, Sn, Sb, U occurrence in Three ICP replicas from mature Heracleum nepalense fruit collected in Sikkim, India (n=3) |
| 14 | [[sources/spex2023-hot-sauce-chili-powder-metals\|ZeptoMetrix 2023]]. *Heavy Metal Contamination of Hot Sauce and Chili Powder*, SPEX Application Note (ZeptoMetrix) | 2023 | Industry | US Pb, Cd, tAs, Cr occurrence in 7 chili powders (1 organic) and 6 hot sauces (1 organic) purchased at US dollar stores, farmer's markets,... (n=13) |
| 15 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 16 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | PL/EU Cd, Pb occurrence in Retail herbs and spices from Lublin, eastern Poland; 9 dried herb species (n=100), 15 fresh herb species (n=184),... (n=432) |
| 17 | [[sources/alam2022-dhaka-spices-lead\|Alam et al. 2022]]. *Lead Exposure of Four Biologically Important Common Branded and Nonbranded Spices: Relative Analysis and Health Implication*, Research Square (preprint) | 2022 | Preprint | BD Pb occurrence in 72 branded and nonbranded powdered spice samples (cumin, red pepper chili, turmeric, and coriander) collected from three local... (n=72) |
| 18 | [[sources/brown2022-patna-spice-lead\|Brown et al. 2022]]. *Prevalence of elevated blood lead levels and risk factors among children living in Patna, Bihar, India 2020*, PLOS Global Public Health | 2022 | Peer-reviewed | IN Pb, Cr occurrence in Household spice samples and child blood lead measurements from Patna, Bihar, India (n=132) |
| 19 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 20 | [[sources/mercan-yucel2022-van-spices-heavy-metals\|Mercan 2022]]. *Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals*, Balikesir Health Sciences Journal | 2022 | Peer-reviewed | TR Ni, tAs, Cd, Pb, Al occurrence in 60 unpackaged spice samples sold in Van Province, Turkey: black pepper n=20, cumin n=20, and red pepper n=20. (n=60) |
| 21 | [[sources/mercanyucel2022-van-spices-metals\|Mercan 2022]]. *Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals*, Balikesir Health Sciences Journal | 2022 | Peer-reviewed | TR Ni, tAs, Cd, Pb, Al occurrence in Unpackaged red pepper, black pepper, and cumin samples sold in Van province, Turkey (n=60) |
| 22 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 23 | [[sources/kaalieswari2021-fenugreek-arsenic\|Sri et al. 2021]]. *Determination of Arsenic Uptake Potential In an Edible Plant Species (Trigonellna Foenum- Granecum) and Assessment of Human Health Risk*, Current World Environment | 2021 | Peer-reviewed | IN tAs occurrence in Laboratory-grown fenugreek seedlings treated for 10 days with arsenite or arsenate solutions at 1, 2, and 3 mg/L,... (n=21) |
| 24 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | PL/EU Cd, Pb, tAs, tHg occurrence in 240 plant material samples from eastern Poland: herbs (n=163), spices (n=61), China tea/green tea (n=8), Arabica roasted coffee... (n=240) |
| 25 | [[sources/matloob2016-iraq-spices-heavy-metals\|Matloob 2016]]. *Using Stripping Voltammetry to Determine Heavy Metals in Cooking Spices Used in Iraq*, Polish Journal of Environmental Studies | 2016 | Peer-reviewed | IQ Cu, Zn, Fe, Mn, Cr, Ni, Co, Cd, Pb, tHg occurrence in 32 natural spice types sold in Babil, Iraq, five samples per spice (n=160) |
| 26 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
| 27 | [[sources/bergerritchie2013-hot-sauce-lead\|Berger Ritchie et al. 2013]]. *An evaluation of lead concentrations in imported hot sauces*, Journal of Environmental Science and Health, Part B: Pesticides, Food Contaminants, and Agricultural Wastes | 2013 | Peer-reviewed | US/MX/GT Pb occurrence in 25 bottles of imported hot sauces purchased Sep 2009–Jan 2010 at 5 ethnic markets, 2 grocery stores, and... (n=25) |
| 28 | [[sources/bassioni2012-aluminum-foil-meat-cooking-uae\|Bassioni et al. 2012]]. *Risk Assessment of Using Aluminum Foil in Food Preparation*, International Journal of Electrochemical Science | 2012 | Peer-reviewed | AE/EG Al occurrence in Six experimental cooking-solution recipes (variants on 40% minced-beef extract + tomato juice + citric acid + NaCl, with... (n=6) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
<!-- END: hmi-page-history -->
