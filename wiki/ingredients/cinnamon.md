---
type: ingredient
commodity: cinnamon
title: "Cinnamon"
label: "Cinnamon"
aliases: [cinnamomum-verum, cinnamomum-cassia, ceylon-cinnamon, cassia-cinnamon, ground-cinnamon]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 5000]
    p95_ppb: 50000
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 10]
    p95_ppb: 59
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [500, 3000]
    p95_ppb: 5000
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [11000, 920000]
    p95_ppb: 920000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 5000]
    p95_ppb: null
    confidence: medium
    n_studies: 3
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [adulteration-lead-chromate, soil-uptake, origin-country, ecuador-import-pathway, wanabana-2023-outbreak]
lower_risk_variants: ["[[ingredients/ceylon-cinnamon-whole-stick]]"]
higher_risk_variants: ["[[ingredients/cassia-cinnamon-ground-imported]]"]
used_in_products: ["[[products/apple-cinnamon-puree]]", "[[products/spice-blends]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 21
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 5
---

# Cinnamon

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 6/10 HMTc analytes, total n=28 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 22 jurisdictions, top US 37% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 5 drivers, 1 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg POOLABLE, Ni THIN, Al POOLABLE, Cr POOLABLE | Ni: THIN |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 9 claims checked, 9 supported; 7 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming cinnamon: fda-import-alert-99-42-spice-lead |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr; pairing 0 paired, 7 single, 0 unpaired | Ni: THIN; basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.50, legal-defensibility 0.25, scale 0.25 | spread 0.75 — starved: legal-defensibility |

<!-- /hmi-completeness-scorecard -->


Cinnamon — the dried inner bark of Cinnamomum trees, sold as Ceylon (Cinnamomum verum) or cassia (Cinnamomum aromaticum / cassia / loureiroi / burmannii, the dominant US-market form) — is the spice second only to turmeric in documented heavy-metals adulteration risk. The 2023-2024 WanaBana apple-cinnamon-puree outbreak in the United States linked cinnamon-containing baby food pouches to at least 519 confirmed cases of pediatric lead poisoning across multiple states, with the contaminated cinnamon traced to a single Ecuadorian processor (Carlos Aguilera) found to have added lead chromate to the cinnamon supply ([[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC]]). FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) names cinnamon among the priority detention-without-physical-examination targets. The current corpus loads 7 sources spanning the US (Angelon-Gaetz 2018 NC home investigations, Huff 2025 Lancaster PA, WanaBana 2024 outbreak documentation), Italy/Saudi Arabia/India/Iran/Indonesia/Vietnam (Cicero 2022 multi-origin 8-metal panel), Australia (LHAAC 2025 Coordinated Sampling Project 41 at n=380 retail samples, [[sources/lhaac2025-csp41-herbs-spices-wa]]), and Australian-import-country product (Tinggi 2025 across India, China, Sri Lanka, Vietnam, Bangladesh, Malaysia, [[sources/tinggi2025-spices-herbs-queensland]]).

## Why this commodity accumulates heavy metals

Cinnamon, like turmeric, has a bimodal heavy-metals distribution driven by adulteration rather than agronomy. Non-adulterated cinnamon (Ceylon or cassia) carries Pb at typical-spice levels of 50-500 ppb from ordinary soil-uptake into the inner-bark tissue and atmospheric deposition during sun-drying. Adulterated cinnamon carries Pb at 5,000-50,000 ppb (5-50 mg/kg) or higher, three to four orders of magnitude above non-adulterated baseline. The WanaBana case definitively documented the mechanism: ground cinnamon from a single Ecuadorian processor was intentionally adulterated with lead chromate (PbCrO₄, the same yellow-orange pigment implicated in the turmeric adulteration literature), with the contaminated cinnamon then incorporated into apple-cinnamon-puree baby food pouches sold under multiple brand labels across US retail. The Napier 2024 case report ([[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC]]) traced cases across NC, OH, LA, AZ, and other states, with cinnamon-source lead concentrations as high as 5 million ppb (0.5%, well over 1,000× any reasonable limit) in the adulterated supply chain. Non-adulterated cinnamon carries metals through normal agronomy: Cinnamomum trees grown in soils with elevated background Cd or Pb take up modest amounts into the bark tissue. The Cicero 2022 multi-origin work covers Ceylon and cassia cinnamon from six countries and reports the non-adulterated baseline distribution across the 8-metal panel ([[sources/cicero2022-minerals-spices-aromatic-herbs]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 50–5000 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| Cd | n=5 | 20–500 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 10–500 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| tHg | n=3 | 1–10 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Ni | n=3 | 500–3000 | low | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Al | n=3 | 11000–920000 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Cr | n=3 | 50–5000 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Variety: Ceylon cinnamon (Cinnamomum verum, "true cinnamon") and cassia cinnamon (Cinnamomum aromaticum / cassia, the dominant US-market form) have similar baseline-agronomic metal profiles; they differ on coumarin content (Ceylon much lower than cassia) and on supply-chain origin (Ceylon predominantly Sri Lanka, cassia predominantly Vietnam, Indonesia, China). Origin: the Tinggi 2025 Queensland survey ([[sources/tinggi2025-spices-herbs-queensland]]) of 69 spice samples across 7 origin countries documented retail-market cinnamon Pb-Cd-tAs at non-adulterated levels in Australian-market product. The Cicero 2022 6-country survey provides the strongest non-adulterated baseline distribution. The WanaBana case is the worst-case-tail anchor: Ecuadorian-processor cinnamon at concentrations five orders of magnitude above baseline. The Angelon-Gaetz NC home-investigation cohort identified cinnamon among the elevated-Pb spice samples in homes of children with elevated blood-lead levels ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]); the Huff 2025 Lancaster survey of 116 retail spices found cinnamon among the spices with measurable Pb but at non-adulterated levels typical of US-market product ([[sources/huff2025-spices-lancaster-pa]]).

## Processing effects

Whole-stick cinnamon (Ceylon "quill" or cassia bark) is essentially never adulterated because the visible-form integrity precludes adding powder-based pigments. Grinding cinnamon to powder at the brand's own facility from verified whole-stick raw material eliminates the adulteration pathway. The traditional cinnamon processing chain (bark harvest, scraping, rolling, sun-drying, grading) does not introduce metals when conducted with clean equipment. The dominant processing-driven contamination event is the lead chromate addition at the powder-supplier stage, which is a deliberate adulteration. Steam sterilisation, irradiation, and microbial-control processing steps do not affect the metal load.

## Ingredient-derivative risk

Whole-stick Ceylon or cassia cinnamon (visible-form integrity) is the lowest-risk form. Ground cinnamon from audited supply chains is acceptable; ground cinnamon from non-audited supply chains carries the documented adulteration tail-risk. Cinnamon extract and cinnamaldehyde extract (sold for flavoring) carry the parent cinnamon's metal load proportional to extraction concentration. Cinnamon-containing finished products inherit the cinnamon's metal load at the inclusion ratio. The 2023 WanaBana apple-cinnamon-puree outbreak is the canonical case for finished-product-level harm from adulterated cinnamon: a brand using non-audited ground cinnamon at a modest inclusion ratio in a baby-food puree produced lead concentrations in the finished product at levels of acute poisoning concern ([[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC]]).

## Mitigation options

### Sourcing levers

Source whole-stick cinnamon (Ceylon or cassia) rather than ground product when feasible; in-brand grinding eliminates the powder-adulteration pathway. For ground product, specify country-of-origin away from documented-risk supply chains (Ecuadorian re-processed ground cinnamon and any non-audited South Asian ground product warrant additional QC) and require XRF screening at intake. The WanaBana case demonstrates that even an established US retail brand can be compromised when the upstream ground-cinnamon supplier is not audited. Direct-trade relationships with Sri Lankan Ceylon producers or Vietnamese cassia plantations enable supply-chain traceability that breaks the multi-handler adulteration pathway. The FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) provides the US regulatory anchor for detention-without-physical-examination.

### Agronomic levers

Agronomic interventions reduce the baseline soil-uptake Pb and Cd (already low: 50-500 ppb in non-adulterated product) but do not address the dominant adulteration pathway.

### Processing levers

Verify that supplier mills do not add pigments at the grinding or polishing step. Audit downstream re-processors (the WanaBana case involved an Ecuadorian re-processor, not the original Sri Lankan or Indonesian source).

### Formulation levers

For brand formulations using cinnamon, the inclusion ratio determines per-serving exposure proportionally. A baby-food puree with 1% cinnamon inclusion at 50,000 ppb Pb still carries 500 ppb Pb in the finished product, which is well above the FDA Closer-to-Zero benchmark for infant foods. The WanaBana case occurred at low single-percent cinnamon inclusion; adulteration concentrations were extreme enough that even tiny inclusion ratios produced harmful finished-product levels.

### Testing and QC levers

Lot-level XRF screening at intake catches the Pb-and-Cr adulteration pattern simultaneously and is fast enough for every-lot screening of ground cinnamon. Confirmatory ICP-MS testing for samples flagged by XRF is the standard analytical chain. Detection floors ≤ 50 ppb Pb are well within commercial ICP-MS capability. For finished products using cinnamon (apple-cinnamon products, cinnamon-roll fillings, chai blends), lot-level finished-product testing is the brand-level final defense.

### Packaging and storage levers

Packaging is not the dominant pathway for cinnamon.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set a cinnamon-specific maximum. The EU Regulation 2023/915 applies the spice maximum of 1.5 mg/kg Pb to cinnamon. The FDA's Import Alert 99-42 is the operational US enforcement mechanism. The FDA Closer-to-Zero initiative applies to infant-and-toddler finished foods including cinnamon-containing baby foods; the WanaBana case is a documented enforcement event under this initiative ([[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC]]). The NYS Department of Health 2019 spice-specific health-based guidance value of 0.21 mg/kg Pb is the strictest US-side advisory.

<!-- BEGIN: hmi-page-references -->
## References

The 7 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Napier MD, Huneycutt A, Moore C, Goforth C, Komlos M, Bryant V, et al. (2024). *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*. MMWR Morbidity and Mortality Weekly Report. [www.cdc.gov](https://www.cdc.gov/mmwr/volumes/73/wr/mm7320a1.htm). Agency report, A-tier. [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC|Source record]]
2. U.S. Food and Drug Administration (2024). *FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination*. FDA Import Alerts. [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html). Regulatory, A-tier. [[sources/fda-import-alert-99-42-spice-lead|Source record]]
3. LHAAC (2025). *Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices*. Local Health Authorities Analytical Committee, Edith Cowan University. Government report, A-tier. [[sources/lhaac2025-csp41-herbs-spices-wa|Source record]]
4. Tinggi U, Farrell M, Porter J, Mitchell S, and Jurd S (2025). *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*. Journal of Environmental Exposure Assessment. [https://doi.org/10.20517/jeea.2025.10](https://doi.org/10.20517/jeea.2025.10). Peer-reviewed, A-tier. [[sources/tinggi2025-spices-herbs-queensland|Source record]]
5. Cicero N, Gervasi T, Durazzo A, Lucarini M, Macrì A, Nava V, et al. (2022). *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*. Foods. [https://doi.org/10.3390/foods11040548](https://doi.org/10.3390/foods11040548). Peer-reviewed, A-tier. [[sources/cicero2022-minerals-spices-aromatic-herbs|Source record]]
6. Angelon-Gaetz KA, Klaus C, Chaudhry EA, and Bean DK (2018). *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*. MMWR Morbidity and Mortality Weekly Report. [https://doi.org/10.15585/mmwr.mm6746a2](https://doi.org/10.15585/mmwr.mm6746a2). Government report, A-tier. [[sources/angelon-gaetz2018-lead-spices-north-carolina|Source record]]
7. Huff A, Lam H, Ghimirey A, Goldring J, Pimentel M, and Okatch H (2025). *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*. Environmental Monitoring and Assessment. [https://doi.org/10.1007/s10661-025-14064-9](https://doi.org/10.1007/s10661-025-14064-9). Peer-reviewed, A-tier. [[sources/huff2025-spices-lancaster-pa|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/huff2025-spices-lancaster-pa\|Huff et al. 2025]]. *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*, Environmental Monitoring and Assessment | 2025 | Peer-reviewed | Lancaster Pennsylvania retail cinnamon Pb, Cd, tAs survey (n=116 cross-spice) |
| 2 | [[sources/lhaac2025-csp41-herbs-spices-wa\|LHAAC 2025]]. *Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices*, Local Health Authorities Analytical Committee, Edith Cowan University | 2025 | Government report | Australian retail-and-import cinnamon 7-metal panel (n=380 cross-spice) |
| 3 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 4 | [[sources/sabri2025-moroccan-spices-casablanca-metals\|Sabri et al. 2025]]. *Essential and Toxic Element Profiles in Selected Spices from Greater Casablanca, Morocco*, World's Veterinary Journal 15(4): 863-881 | 2025 | Peer-reviewed | MA/EU/INTL Pb, Cd, tAs, Cr, Ni occurrence in 137 bulk spice samples (cinnamon n=37, cumin n=25, turmeric n=25, black pepper n=25, ginger n=25) purchased from local... (n=137) |
| 5 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Australian-market cinnamon across 7 origin countries (n=69 cross-spice) |
| 6 | [[sources/moussa2024-spices-herbs-lebanon\|Moussa et al. 2024]]. *Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs*, PLoS ONE | 2024 | Peer-reviewed | LB Pb, Cd, tAs, tHg occurrence in 96 composite samples (pooled from 480 individual samples; 5 brands per spice per category) of 13 dried herbs... (n=96) |
| 7 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | WanaBana outbreak: Ecuadorian-processor cinnamon adulteration via lead chromate, finished-product baby-food contamination, 500+ pediatric cases |
| 8 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 9 | [[sources/childhood2023-childhood-lead-exposure-linked\|Napier et al. 2023]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, Morbidity and Mortality Weekly Report | 2023 | Peer-reviewed | US Pb, Cr-VI occurrence in Children aged 1–3 years in North Carolina with confirmed blood lead levels ≥5 µg/dL linked to apple cinnamon... (n=22) |
| 10 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | BD Pb, Cd, Cr occurrence in 19 commercially-available spice samples (15 non-branded, 4 branded) collected from Sonapur and Maijdee marketplaces in Noakhali District, Bangladesh;... (n=19) |
| 11 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review; no original measurements. Synthesizes US Congressional Subcommittee on Economic and Consumer Policy findings (Feb 2021 and... |
| 12 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | Multi-origin (IT, SA, IN, IR, ID, VN) cinnamon 8-metal baseline (n=13 multi-species) |
| 13 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 14 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 15 | [[sources/savic2019-serbian-spices-minerals\|Savić et al. 2019]]. *Determination of the mineral content of spices by ICP-OES*, Advanced Technologies | 2019 | Peer-reviewed | RS Pb, Cd, Al, Ni, Cr occurrence in Ten spice samples available on the Serbian market: curcuma, star anise, cinnamon, ginger, coriander, cardamom, sesame, black pepper,... (n=10) |
| 16 | [[sources/angelon-gaetz2018-lead-spices-north-carolina\|Angelon-Gaetz et al. 2018]]. *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*, MMWR Morbidity and Mortality Weekly Report | 2018 | Government report | NC home-investigation cohort cinnamon Pb identification (n=386 cross-spice) |
| 17 | [[sources/bua2016-aromatic-spices-metals-italy\|Bua et al. 2016]]. *Heavy metals in aromatic spices by inductively coupled plasma-mass spectrometry*, Food Additives & Contaminants: Part B | 2016 | Peer-reviewed | IT Cd, tHg, tAs, Pb occurrence in Seven cinnamon, curcuma, and ginger spice samples traded in the Italian market, with origins listed as Indonesia, Madagascar,... (n=7) |
| 18 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 19 | [[sources/ziyaina2014-libya-spices-lead-cadmium\|Ziyaina et al. 2014]]. *Lead and cadmium residue determination in spices available in Tripoli City markets (Libya)*, African Journal of Biochemistry Research | 2014 | Peer-reviewed | LY Pb, Cd occurrence in Imported spices traded in Libyan markets in 2011: 24 wholesale and 36 retail samples for each of four... (n=240) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
| [b7d5142c8](https://github.com/paleofoundation/heavymetalindex/commit/b7d5142c8) | 2026-05-16 | major | 7 sources added; contamination-profile values revised; 12 sections added |
<!-- END: hmi-page-history -->
