---
title: "Chicken"
type: ingredient
commodity: chicken
label: "Chicken"
aliases: [chicken]
category: meat-poultry
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 10
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 6
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1.4
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1065]
    p95_ppb: 1300
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: null
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 27.8]
    p95_ppb: 28.6
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 38
---

# Chicken

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Chicken muscle meat is generally a low accumulator of heavy metals relative to plant foods and organ meats. The primary contamination pathway for muscle is dietary transfer: metals ingested through feed accumulate predominantly in liver and kidney, with muscle tissue retaining only a small fraction. Cadmium and lead in commercial poultry muscle are consistently low in global surveillance data. The notable exception for US broiler chicken is arsenic, which was historically elevated due to the veterinary use of roxarsone (an organoarsenic growth promotant) until its voluntary withdrawal by Pfizer in 2011 and subsequent FDA ban on arsenical veterinary drugs in 2015. Post-withdrawal monitoring indicates residual total arsenic and inorganic arsenic remain detectable at low levels in some commercial US broiler chicken muscle, reflecting the persistence of arsenical compounds in soil and feed supply chains [[sources/lasky2013-arsenic-chicken-correspondence]]. Spanish-market processed chicken baby purees measured by ICP-MS showed tAs, tHg, Pb, Cd, Ni, Al, and Cr across 39 products; exact values for chicken muscle purees are in progress pending structured extraction [[sources/henriquez-hernandez2023-baby-purees-spain-elements]]. A Bangladesh study measured heavy metals and trace elements in edible body parts of chicken with results pending extraction [[sources/hossain2023-bangladesh-chicken-metals]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Cd | n=5 | 0–3 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| iAs | n=1 | 0 | low | [[sources/lasky2013-arsenic-chicken-correspondence\|1]] |
| tAs | n=2 | 1–20 | low | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/lasky2013-arsenic-chicken-correspondence\|2]] |
| tHg | n=1 | 0–1 | high | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]] |
| Ni | n=2 | 10–100 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]] |
| Al | n=2 | 0–1065 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]] |
| Cr | n=5 | 20–200 | low | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Sn | n=1 | 0–27.8 | medium | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 UK survey includes chicken as a measured food matrix [[sources/fsa2016-infant-food-formula-metals-survey]]; exact values are pending structured extraction. Henriquez-Hernandez et al. 2023 measured 39 processed chicken baby purees from Spanish retail by ICP-MS and found detectable concentrations of multiple metals [[sources/henriquez-hernandez2023-baby-purees-spain-elements]]; exact values are pending synthesis. Hossain et al. 2023 measured metals in chicken body parts in Bangladesh [[sources/hossain2023-bangladesh-chicken-metals]]; values pending extraction. Lasky et al. 2013 provides context on the US broiler arsenic situation following the veterinary drug withdrawal, noting that residual arsenic in US commercial chicken muscle remained detectable post-withdrawal [[sources/lasky2013-arsenic-chicken-correspondence]]. Geographic variation in chicken metal burdens is expected to be moderate for Pb and Cd (driven by regional feed quality and environmental conditions) and to differ materially between US and non-US markets for arsenic given the US-specific history of arsenical veterinary drug use.

## Processing effects

Whole muscle chicken carries very low cadmium and lead; cooking (roasting, boiling, grilling) does not substantially increase or decrease the metal content of the muscle tissue itself. Boiling chicken in water causes some leaching of water-soluble metal species into the broth; the broth therefore concentrates metals from bone surfaces (which can carry lead from skeletal sequestration) as well as from the muscle. Bone broth and chicken stock should be treated as potentially carrying higher lead than muscle meat alone. Skin, which may carry higher surface contamination from environmental sources, is typically consumed alongside muscle in many preparations. Processed chicken products (nuggets, patties, deli meats) that include mechanically separated chicken or added ingredients introduce additional metal pathways from non-muscle tissues and additives; these products are not characterised separately in the current corpus.

## Ingredient-derivative risk

Chicken liver and kidney accumulate cadmium and lead at substantially higher concentrations than muscle; this page covers muscle meat only. Chicken bone broth, as noted above, may carry elevated lead leached from the skeletal calcium matrix; the bone-lead pathway is a distinct concern from muscle-meat lead. Chicken powder and chicken flavouring concentrates used in soups, ramen, and seasoning blends derive from a combination of muscle, bone, and skin extraction; their metal profiles are not individually characterised in the current corpus. Chicken fat (schmaltz) carries metals primarily from dietary intake in the adipose tissue; this pathway is expected to be low but is not quantified.

## Mitigation options

### Sourcing levers

Selecting chicken from suppliers whose feed formulations have been verified for cadmium and lead content reduces muscle-meat metal burden. In the US context, confirming that suppliers have discontinued all arsenical veterinary drug use is relevant; given the FDA ban enacted in 2015, compliance with US-licensed product restrictions is expected but confirmatory documentation may be requested from importers sourcing from markets where arsenical drugs remain licensed. EU-certified chicken is subject to regulatory maxima for Pb and Cd in muscle meat.

### Agronomic levers

Feed composition is the primary agronomic lever: low-cadmium grain and soy feeds reduce dietary cadmium intake by the bird and therefore muscle cadmium. Water quality at the production site influences metal uptake through drinking water. Environmental contamination of land (proximity to former industrial sites) can elevate soil ingestion pathways for birds raised in outdoor systems.

_No quantified data on cultivar or breed selection effects on muscle metal content in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Removing skin before consumption eliminates one surface-contamination pathway. Cooking broth separately and discarding rather than consuming reduces bone-lead exposure in preparations that include bone-in chicken. For processed chicken products, minimising inclusion of mechanically separated chicken or by-product tissues reduces the contribution of organ-associated metals.

### Formulation levers

For composite products incorporating chicken (soups, ready meals), reducing the fraction of the final product derived from high-risk organ or bone-adjacent tissues and increasing the proportion of clean white-muscle meat is the most relevant formulation lever.

### Testing and QC levers

For chicken-containing prepared foods, particularly those marketed to children or including chicken liver as an ingredient, ICP-MS testing for Cd, Pb, and iAs is appropriate. For plain chicken muscle destined for retail, periodic surveillance testing is sufficient given the low baseline concentrations; routine lot-level testing is most warranted for US-origin broiler products tested for arsenic species where residual historical contamination may be relevant.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the associated contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) set a lead maximum of 0.10 mg/kg and a cadmium maximum of 0.050 mg/kg for poultry muscle meat. These limits apply to chicken as placed on the market. No specific US FDA action level for Pb or Cd applies to chicken muscle meat; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories rather than raw poultry. For inorganic arsenic in chicken, FDA has not established a specific action level for poultry muscle; the monitoring and regulatory response to arsenical veterinary drug residues is addressed through the veterinary drug residue program rather than a food contaminant limit. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides international cadmium limits for meat; the applicable limit for poultry muscle is 0.050 mg/kg.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 38 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/lasky2013-arsenic-chicken-correspondence|Arsenic Levels in Chicken (correspondence: Lasky letter and Nachman et al. response)]]<span class="hmi-ref-meta">Lasky T, Nachman KE, Baron PA, Raber G, Francesconi KA, and Love DC · Environmental Health Perspectives · 2013 · [doi.org/10.1289/ehp.1307083](https://doi.org/10.1289/ehp.1307083)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/henriquez-hernandez2023-baby-purees-spain-elements|Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market]]<span class="hmi-ref-meta">Henríquez-Hernández LA, Acosta-Dacal AC, Boada LD, Zumbado M, Serra-Majem L, and Luzardo OP · Nutrients 15(14):3251 · 2023 · [doi.org/10.3390/nu15143251](https://doi.org/10.3390/nu15143251)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/hossain2023-bangladesh-chicken-metals|Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis]]<span class="hmi-ref-meta">Hossain E, Nesha M, Chowdhury MAZ, and Rahman SH · PLoS ONE · 2023 · [doi.org/10.1371/journal.pone.0279043](https://doi.org/10.1371/journal.pone.0279043)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | Pb, Cd, and Cr in imported frozen chicken muscle from the Tripoli market |
| 2 | [[sources/manfredi2025-nickel-meat-italy\|Manfredi et al. 2025]]. *Dietary exposure assessment to nickel through the consumption of poultry, beef, and pork meat for different age groups in the Italian population*, Italian Journal of Food Safety | 2025 | Peer-reviewed | IT Ni occurrence in 809 official-control muscle meat samples collected in Italy from 2011 to 2023 |
| 3 | [[sources/ezike2024-nigerian-poultry-pte\|Cosmas et al. 2024]]. *An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products*, International Journal of Agricultural Invention | 2024 | Peer-reviewed | NG tAs, Pb, Cd occurrence in Broiler muscle, gizzard, yolk, and albumen samples from four poultry farms in Nigeria (n=36) |
| 4 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 5 | [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|Morshed et al. 2024]]. *Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed*, Research Square (preprint) | 2024 | Preprint | Pb, Cd, and Cr organ-distribution data in broiler chicken muscle, bone, liver, kidney, and lung from a controlled-feeding experiment |
| 6 | [[sources/omirzakov2024-poultry-meat-kazakhstan-heavy-metals\|Omirzakov et al. 2024]]. *Analysis of heavy metals content in domestic and imported poultry meat*, Herald of Science of S. Seifullin Kazakh Agrotechnical Research University: Veterinary Sciences | 2024 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Domestic and imported poultry meat sampled in Kazakhstan |
| 7 | [[sources/bazzaz2023-poultry-products-erbil-heavy-metals\|Bazzaz et al. 2023]]. *Determination of some heavy metals resides in different types of poultry production*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cu, tAs, Pb occurrence in Imported and local poultry products consumed in Erbil city, including chicken thigh, chicken breast, quail meat, and quail... |
| 8 | [[sources/concentration2023-concentration-essential-toxic-rare\|source) 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients | 2023 | Journal article | Cited reference from Nutrients |
| 9 | [[sources/faraj2023-backyard-chicken-metals-iraq\|Faraj et al. 2023]]. *Determination of Heavy Metal Residue in Backyard Chicken at Various Regions in Sulaymaniyah Province*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cd, Cu, Pb occurrence in Sixty backyard chickens collected from four Sulaymaniyah Province regions in Kurdistan Region-Iraq, with 15 chickens from each of... (n=120) |
| 10 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 39 chicken baby purees from Spanish retail by ICP-MS; multi-metal occurrence for processed chicken complementary foods |
| 11 | [[sources/hossain2023-bangladesh-chicken-metals\|Hossain et al. 2023]]. *Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis*, PLoS ONE | 2023 | Peer-reviewed | BD Pb, Cd, Cr occurrence in 108 samples from 18 broiler chickens (6 body parts × 3 chickens × 6 Dhaka North City Corporation... (n=108) |
| 12 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 13 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Al, Cd, Pb, Ni, and Cr in 360 Egyptian broiler chicken chest, thigh, and liver samples by ICP-MS, with Pb exceeding FAO/WHO limits in 94% of samples |
| 14 | [[sources/morshdy2023-canned-meat-chicken-metals\|Morshdy et al. 2023]]. *Risks assessment of toxic metals in canned meat and chicken*, Food Research | 2023 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al, Sn occurrence in Sixty canned meat and chicken samples collected randomly from grocery stores and hypermarkets in Sharkia Governorate, Egypt, April-October... (n=60) |
| 15 | [[sources/sadhya2023-india-food-heavy-metals-regulation\|Sadhya et al. 2023]]. *Regulation in India of Heavy Metals in Food Items: A Critical Analysis*, Environmental Analysis & Ecology Studies | 2023 | Review | IN Pb, Cu, tAs, Sn, Cd, tHg, MeHg, Cr, Ni, Se, Sb, Ba, Co, Fe, Li, Mn, Zn occurrence in Legal review of the Indian regulatory framework governing heavy metals in food and food packaging. No primary measurements.... |
| 16 | [[sources/safwan2023-instant-soup-chicken-stock-jordan\|Safwan et al. 2023]]. *Assessment and health risk study of some heavy metals in instant soup and chicken stock products from Jordanian market*, African Journal of Food, Agriculture, Nutrition and Development | 2023 | Peer-reviewed | JO Mn, Cr, Cd, Pb occurrence in Ten soup powder, chicken-stock powder, and instant-noodle products purchased from local markets in Jordan in 2020. (n=10) |
| 17 | [[sources/okolo2022-chicken-drumstick-umuhia-heavy-metals\|Okolo et al. 2022]]. *Chemical and microbiological quality of commercial fresh and frozen chicken drumstick in Umuhia, Nigeria*, International Journal of Food, Agriculture, and Natural Resources | 2022 | Peer-reviewed | NG Cd, Cr, Cu, Mn, Ni, Zn, Pb occurrence in Fresh and frozen commercial chicken drumsticks from Umuahia metropolis, Abia State, Nigeria |
| 18 | [[sources/rokanuzzaman2022-bangladesh-eggs-metals\|Rokanuzzaman et al. 2022]]. *Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh*, Saudi Journal of Biomedical Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Cu, Fe, Zn occurrence in Five egg-content samples and five eggshell samples collected from the Jahangirnagar University area of Savar, Bangladesh, covering indigenous... (n=10) |
| 19 | [[sources/alam2021-bangladesh-poultry-feed-meat-metals\|Alam et al. 2021]]. *Heavy metal contamination and antibiotic residues in poultry feed and meat in Bangladesh*, Asian-Australasian Journal of Food Safety and Security 5(2):71-78 | 2021 | Peer-reviewed | BD Cd, Pb, Cr occurrence in Broiler feed and meat from two selected poultry production belts of Bangladesh. (n=94 broiler feed samples and 60 broiler meat samples.) |
| 20 | [[sources/ertas2021-poultry-calf-meat-arsenic\|Nusret et al. 2021]]. *Evaluation of Arsenic Concentration in Poultry and Calf Meat Samples by Hydride Generation Atomic Fluorescence Spectrometry*, Gazi University Journal of Science | 2021 | Peer-reviewed | TR tAs occurrence in Calf, chicken, and turkey meat samples obtained from local markets (n=31) |
| 21 | [[sources/gholami-ahangaran2021-chicken-meat-cadmium-zinc-silver\|Majid et al. 2021]]. *The Measurement of Cadmium, Zinc and Silver in Chicken Meat in Isfahan Province, Iran*, Iranian Journal of Toxicology | 2021 | Peer-reviewed | IR Cd, Zn, Ag occurrence in Chicken breast, thigh, heart, and liver samples from meat markets in Isfahan Province, Iran (n=100) |
| 22 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | ID Cr, tHg, Co, Zn occurrence in 14 staple food commodities (soybean, mung bean, rice, tempeh, tofu, papaya, crackers/kerupuk, water spinach, spinach, carrot, egg, mackerel/ikan... (n=14) |
| 23 | [[sources/lysenko2021-organic-broiler-meat-heavy-metals\|Lysenko et al. 2021]]. *Organic Meat Production of Broiler Chickens Hubbard Redbro Cross*, International Journal of Veterinary Science 10(1):62-68 | 2021 | Peer-reviewed | RU tAs, Cd, tHg, Pb occurrence in Broiler chickens fed factory compound feed or farm-produced eco-feed with Bacell feed additive. (n=Hubbard Redbro broiler groups with floor/cage housing and factory-feed vs eco-feed comparisons.) |
| 24 | [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|Maikanov et al. 2021]]. *Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan*, Veterinary World 14(6):1615-1621 | 2021 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Meat from markets in the Shuchinsk-Burabay resort zone: beef 166, horse 42, pork 67, mutton 8, poultry 15. (n=298) |
| 25 | [[sources/ali2020-chicken-liver-heavy-metals-erbil\|Ali et al. 2020]]. *Determination of heavy metals and selenium content in chicken liver at Erbil city, Iraq*, Italian Journal of Food Safety 9:8659 | 2020 | Peer-reviewed | IQ Cd, Pb, tHg, Cr, Cu, Mn, Ni, Zn, Se, Co occurrence in Chicken liver samples collected from markets in Erbil city, Kurdistan Region, Iraq. (n=20) |
| 26 | [[sources/lukin2020-broiler-drumstick-minerals\|Lukin et al. 2020]]. *Mineral composition of chicken meat semi-finished products from different producers*, Innovations and Food Safety | 2020 | Peer-reviewed | RU tAs, Cd, Pb, Cr, Ni, Sn, Al, Sb occurrence in Chilled broiler drumsticks from two producers sold in Chelyabinsk, Russia |
| 27 | [[sources/majid2020-broiler-meat-cumin-minerals\|Majid et al. 2020]]. *Effect of dietary supplementing cumin (Cuminum cyminum L.) on meat traits of the broiler chicks*, Basrah Journal of Agricultural Sciences 33(1): 159-171 | 2020 | Peer-reviewed | IQ Cr, Cu, Cd, Pb, Ni, Zn, Fe occurrence in Ninety-six Ross 308 broiler chicks assigned to four diet groups with three replicates of eight chicks each; breast... (n=96) |
| 28 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 29 | [[sources/dordevic2019-aluminum-foil-culinary-baking-czech\|Dordevic et al. 2019]]. *Aluminum contamination of food during culinary preparation: Case study with aluminum foil and consumers' preferences*, Food Science & Nutrition | 2019 | Peer-reviewed | CZ/EU Al occurrence in Eleven food types (Atlantic salmon fillet, mackerel, duck breasts with and without skin, cheese Hermelín, fresh tomato, fresh... (n=11) |
| 30 | [[sources/jayanthi2019-chennai-chicken-heavy-metals\|Jayanthi et al. 2019]]. *Assessment of non-essential heavy metals in ready-to-eat chicken meat products of Chennai city*, International Journal of Chemical Studies | 2019 | Peer-reviewed | IN Al, tAs, Cd, Cr, tHg, Pb occurrence in Two hundred eighty-eight ready-to-eat chicken meat product samples from street food outlets in northern, central, and southern Chennai,... (n=288) |
| 31 | [[sources/razanov2019-poultry-silicon-mineral-heavy-metals\|Razanov et al. 2019]]. *Effect of silicon and mineral extract on heavy metals balance and accumulation rate in the muscle tissue of poultry*, Ukrainian Journal of Ecology 9(4):742-748 | 2019 | Peer-reviewed | UA Pb, Cd, Zn, Cu occurrence in Poultry fed raw materials including corn, wheat, oats, barley, and sunflower meal, with a silicon-mineral water extract intervention. (n=Poultry edible parts and diet raw materials from the Right-bank Forest-steppe of Ukraine; per-cell animal counts not extracted.) |
| 32 | [[sources/mahbub2018-poultry-feed-meat-eggs-metals\|Mahbub et al. 2018]]. *Detection of heavy metals in poultry feed, meat and eggs*, Asian-Australasian Journal of Food Safety and Security | 2018 | Peer-reviewed | BD Cr, Pb, tAs occurrence in Poultry feed, meat, and egg samples from major poultry-producing areas of Bangladesh |
| 33 | [[sources/alrajhi2014-canned-food-chicken-stock-metals\|Al-Rajhi 2014]]. *Determination the concentration of some metals in imported canned food and chicken stock*, American Journal of Environmental Sciences | 2014 | Peer-reviewed | SA Cd, Cr, Cu, Fe, Mn, Ni, Pb, Zn, tAs, Se, Al occurrence in Coded imported canned-food and chicken-stock samples purchased from supermarkets around Riyadh, Saudi Arabia; methods text says 21 types... (n=13) |
| 34 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 35 | [[sources/lasky2013-arsenic-chicken-correspondence\|Lasky et al. 2013]]. *Arsenic Levels in Chicken (correspondence: Lasky letter and Nachman et al. response)*, Environmental Health Perspectives | 2013 | Peer-reviewed | Commentary on roxarsone/Nitarsone veterinary drug withdrawal and residual tAs/iAs in US broiler chicken muscle; arsenic-in-poultry supply-chain context |
| 36 | [[sources/nachman2013-chicken-arsenic-research-brief\|Nachman et al. 2013]]. *Arsenic in Chicken Meat*, Johns Hopkins Center for a Livable Future research brief | 2013 | Research brief | US iAs, tAs occurrence in One hundred forty-two chicken breast samples purchased from 82 stores in 10 US cities, representing 60 unique brands;... (n=142) |
| 37 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 38 | [[sources/mahmud2011-crvi-chicken-pakistan\|Mahmud et al. 2011]]. *Estimation of Chromium (VI) in various body parts of Local Chicken*, Journal of the Chemical Society of Pakistan | 2011 | Peer-reviewed | Speciated Cr-VI (not total Cr) in Pakistani local chicken muscle and bone, evidencing leather-tanning waste in feed as a supply-chain contamination pathway |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
