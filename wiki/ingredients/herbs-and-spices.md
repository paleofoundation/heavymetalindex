---
type: ingredient
commodity: herbs-and-spices
title: "Herbs And Spices"
label: "Herbs And Spices"
aliases: [seasonings, dried-herbs-and-spices]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 2000]
    p95_ppb: 5000
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 500]
    p95_ppb: 1500
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 3000]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [1000, 20000]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 4
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
drivers: [soil-uptake, atmospheric-deposition, adulteration, processing, drying-concentration]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/turmeric]]", "[[ingredients/cinnamon]]", "[[ingredients/black-pepper]]"]
used_in_products: ["[[products/seasoning-blends]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 36
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 13
---

# Herbs And Spices

## Overview

Herbs and spices — the aromatic and flavor-imparting plant materials that make up the seasoning category, including ground dried plant parts like turmeric, cinnamon, paprika, black pepper, cumin, coriander, oregano, basil, parsley, and dozens more — sit at the high end of the food-system heavy-metals distribution by mass concentration. Two structural reasons drive the elevated profile: drying concentrates metals on a per-mass basis relative to fresh plant material by 5-10×, and the global spice trade includes a documented adulteration pathway in which lead chromate, lead oxide, and lead-based pigment dyes are added to enhance color or extend product weight. The current corpus loads 13 peer-reviewed and government sources spanning Italy, Saudi Arabia, India, Iran, Indonesia, Vietnam, UAE, Poland, EU, Australia, New York State (US), North Carolina (US), Pennsylvania (US), and European market-wide assessments. The US adulteration case literature — particularly the Angelon-Gaetz 2018 North Carolina home-investigation cohort linking spice consumption to elevated childhood blood-lead levels and the Huff 2025 Lancaster, Pennsylvania spice survey — provides direct evidence for the adulteration pathway as a population-scale exposure source.

## Why this commodity accumulates heavy metals

The herb-and-spice category combines three accumulation pathways that compound. Soil uptake into the live plant carries Cd, Cr, Ni, and trace metals into leaves, roots, and seeds at rates that depend on soil chemistry, species, and growing region. Drying then concentrates these metals on a dry-weight basis: fresh herbs at 80-90% moisture content reduce to dried product at 8-12% moisture, producing roughly a 7-10× concentration uplift on a per-gram basis. Atmospheric deposition adds surface Pb to leaf and flower parts harvested in roadside or industrial-corridor settings. The third pathway, distinct from the agronomic ones, is post-harvest adulteration: the Angelon-Gaetz 2018 New York / North Carolina cohort documented turmeric, paprika, and related red-and-yellow-pigmented spices from specific country-of-origin sources containing lead chromate, lead oxide, and other lead pigment compounds added to brighten color or extend weight ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The NYS Department of Health technical-support document for metals in spices ([[sources/nys-doh2019-metals-spices-guidance]]) followed this work with formal health-based guidance values for Pb, Cd, Cr, and iAs specifically in the spice matrix, recognizing the spice channel as a distinct exposure pathway not captured by general food-safety frameworks. The Huff 2025 Lancaster survey ([[sources/huff2025-spices-lancaster-pa]]) and the Australian Coordinated Sampling Project 41 (n=380 across 7 metals, [[sources/lhaac2025-csp41-herbs-spices-wa]]) confirm the pattern at scale in both US and Australian markets.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 50–2000 | high | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| Cd | n=9 | 20–500 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| iAs | n=2 | 10–200 | low | [[sources/nys-doh2019-metals-spices-guidance\|1]] |
| tAs | n=5 | 10–500 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| tHg | n=6 | 1–50 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/carpena2024-chemical-hazards-herbs-europe\|3]] |
| Ni | n=3 | 200–3000 | low | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Al | n=5 | 1000–20000 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Cr | n=4 | 50–1000 | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Sn | n=1 | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus is geographically diverse. The Italian-led Cicero 2022 multi-origin study sampled spices from 6 source countries (Italy, Saudi Arabia, India, Iran, Indonesia, Vietnam) and reported the full 8-metal panel; this work provides the most species-by-origin breadth in the loaded corpus ([[sources/cicero2022-minerals-spices-aromatic-herbs]]). The Polish Kowalska 2021 dataset covers 37 herb species and 12 spice species from European production, with valerian root, lemon balm leaves, common sage, and chamomile flowers identified as higher-Pb species ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]). The North Carolina home-investigation cohort sampled 386 spice products from homes of children with elevated blood-lead levels, with the elevated-Pb subset concentrated in specific country-of-origin product (predominantly imported from Bangladesh, India, Pakistan, Georgia, Morocco, and Nepal) ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The Lancaster Pennsylvania survey of 116 retail spice samples found Pb, Cd, and tAs at levels of regulatory concern in a substantial fraction of imported product ([[sources/huff2025-spices-lancaster-pa]]). The Australian Coordinated Sampling Project 41 covered 380 retail and import samples across 7 metals and is the largest single-jurisdiction dataset in the loaded corpus ([[sources/lhaac2025-csp41-herbs-spices-wa]]). The UAE dataset on traditional herbs (n=81, [[sources/dghaim2015-heavy-metals-uae-herbs]]) characterises the regional traditional-medicine herb pathway. Within-category variance is extreme: turmeric and paprika from adulteration-prone supply chains can carry Pb at >100,000 ppb in the worst-case tail, while properly sourced common culinary herbs typically sit below 500 ppb Pb.

## Processing effects

Drying is the dominant processing-driven concentration event for the herbs-and-spices category. Fresh-to-dried transitions concentrate metals on a per-mass basis by 7-10×, so a fresh herb at 50 ppb Pb fresh weight reaches roughly 350-500 ppb on a dry-weight basis with no added contamination. This is not a contamination event but a basis change, and reporting consistency (dry weight vs fresh weight) is essential when comparing values across sources. Grinding, sieving, and blending introduce minor metal pickup from equipment surfaces but are typically negligible compared to the underlying plant metal load. The single largest processing-driven contamination event in the corpus is adulteration: post-harvest addition of lead chromate (yellow-orange pigment, often added to turmeric) or lead-based red pigments (added to paprika, chili powder) shifts the contamination distribution by 2-4 orders of magnitude in affected lots. The Angelon-Gaetz home-investigation data report turmeric samples with Pb at 100,000-200,000 ppb in adulterated product versus <500 ppb in screened compliant product ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). Sterilisation (steam, ethylene oxide, irradiation) does not affect metal load. Toasting and roasting (used in some spice blend preparations) also do not change the metal load on a dry-weight basis.

## Ingredient-derivative risk

Whole-form intact spices (whole black pepper, whole cinnamon stick, whole nutmeg) carry the lowest adulteration risk because the adulteration channel typically works on ground product. Ground and powdered spices carry the highest adulteration risk and the highest absolute Pb concentrations in the worst-case tail. Spice blends and seasoning mixes inherit the metal load of their highest-concentration component, weighted by inclusion ratio; a blend that includes 10% adulterated turmeric carries a fraction of the turmeric's Pb load proportional to the inclusion. Spice extracts, oleoresins, and essential oils typically have lower metal loads than the parent dry spice because most metals partition with the solid spent matter rather than the extracted volatile fraction, though this varies by extraction method. Herbal tinctures and traditional-medicine preparations sourced from less-regulated supply chains carry both the herbal-tincture's intrinsic metal load and any adulteration in the source material. Dehydrated herb powders sold as supplement-grade product can carry Pb, Cd, and tAs at the upper end of the loaded distribution; supplement-grade powders should always be lot-tested.

## Mitigation options

### Sourcing levers

Origin-country screening is the single highest-impact lever, particularly for turmeric, paprika, chili powder, and yellow-and-red-pigmented spices. The Angelon-Gaetz 2018 cohort identified specific source-country product (notably from Bangladesh, India, Pakistan, Georgia, Morocco, Nepal) carrying lead chromate or lead oxide adulteration at population-scale rates ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). Brand buyers should specify lot-level Pb testing as a requirement for ground spice from these origins, with a contractual rejection threshold (commonly 1,000 ppb Pb for ground spice, well below the Codex 2,000 ppb fresh-vegetable Pb maximum but appropriate for the dry concentration basis). Certified-organic does not address adulteration. The NYS Health Department's spice-specific guidance values ([[sources/nys-doh2019-metals-spices-guidance]]) are the most rigorous regulatory anchor in the loaded corpus.

### Agronomic levers

For brand-controlled-supply operations, soil testing and amendment are upstream of the brand and require supplier specification rather than direct intervention. The Carpena 2024 European-scale assessment ([[sources/carpena2024-chemical-hazards-herbs-europe]]) emphasises that agronomic interventions reduce baseline plant metal load but do not address the larger adulteration risk.

### Processing levers

For brand-controlled grinding operations, validate equipment surfaces (food-grade stainless, no lead-containing alloys), screen incoming whole spice product before grinding, and segregate adulteration-prone product (yellow-red-pigmented ground spice) for additional QC. Avoid sourcing pre-ground product from supply chains with documented adulteration history.

### Formulation levers

For seasoning blends, characterise the metal load of each ingredient input on a dry-weight basis and weight the blend to keep aggregate Pb, Cd, and tAs at the lowest achievable per-serving level. Dilution with lower-metal carrier ingredients (salt, sugar, starch) reduces per-serving exposure proportionally.

### Testing and QC levers

Lot-level ICP-MS testing of every ground-spice lot at intake, with detection floors ≤ 100 ppb Pb, is the standard intervention. For adulteration-prone product specifically (turmeric, paprika), screening for lead chromate and lead oxide by XRF (a portable, fast technique) catches the adulteration pathway efficiently at intake. The Australian CSP 41 protocol ([[sources/lhaac2025-csp41-herbs-spices-wa]]) demonstrates the population-scale value of import-level screening.

### Packaging and storage levers

Packaging is not the dominant metal-load pathway for dry herbs and spices. Standard food-grade glass, plastic, or paperboard packaging does not measurably alter the metal load over shelf life. Long-term storage in unsealed bulk bins with environmental contamination potential (dust, atmospheric Pb) can add trace Pb to surface particles; this is small relative to the upstream contamination distribution.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set spice-specific heavy-metals maxima; general food categories apply. The EU Regulation 2023/915 applies a 1.5 mg/kg Pb maximum for "spices (dry products from the seeds, fruits, roots, bark, or other plant parts)" and 0.5 mg/kg Cd maximum for the same category — substantially looser than the fresh-vegetable category to accommodate the drying-concentration effect. The NYS Department of Health 2019 Technical Support Document derived health-based guidance values for Pb (0.21 mg/kg), Cd (0.21 mg/kg), Cr (0.41 mg/kg), and iAs (0.10 mg/kg) in spices, with a derivation methodology grounded in the per-day consumption rate of spices specifically rather than the general food-additive framework ([[sources/nys-doh2019-metals-spices-guidance]]). FDA has not set spice-specific action levels but has issued import alerts and recall actions against specific adulterated product. The Codex Alimentarius spice maximum levels — being broader than the NYS guidance — represent a regulatory gap that the case literature (Angelon-Gaetz, Huff, Lancaster cohorts) has documented as exposing children to elevated blood lead levels.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/angelon-gaetz2018-lead-spices-north-carolina|Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018]]<span class="hmi-ref-meta">Angelon-Gaetz KA, Klaus C, Chaudhry EA, and Bean DK · MMWR Morbidity and Mortality Weekly Report · 2018 · [doi.org/10.15585/mmwr.mm6746a2](https://doi.org/10.15585/mmwr.mm6746a2)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/nys-doh2019-metals-spices-guidance|Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices]]<span class="hmi-ref-meta">Bureau of Toxic Substance Assessment, Center for Environmental Health, and New York State Department of Health · 2019</span><span class="hmi-ref-tag">Government</span>
3. [[sources/huff2025-spices-lancaster-pa|Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation]]<span class="hmi-ref-meta">Huff A, Lam H, Ghimirey A, Goldring J, Pimentel M, and Okatch H · Environmental Monitoring and Assessment · 2025 · [doi.org/10.1007/s10661-025-14064-9](https://doi.org/10.1007/s10661-025-14064-9)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/lhaac2025-csp41-herbs-spices-wa|Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices]]<span class="hmi-ref-meta">LHAAC · Local Health Authorities Analytical Committee, Edith Cowan University · 2025</span><span class="hmi-ref-tag">Government</span>
5. [[sources/cicero2022-minerals-spices-aromatic-herbs|Mineral and Microbiological Analysis of Spices and Aromatic Herbs]]<span class="hmi-ref-meta">Cicero N, Gervasi T, Durazzo A, Lucarini M, Macrì A, Nava V, et al. · Foods · 2022 · [doi.org/10.3390/foods11040548](https://doi.org/10.3390/foods11040548)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland|The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland]]<span class="hmi-ref-meta">Kowalska G · International Journal of Environmental Research and Public Health · 2021 · [doi.org/10.3390/ijerph18115779](https://doi.org/10.3390/ijerph18115779)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/dghaim2015-heavy-metals-uae-herbs|Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates]]<span class="hmi-ref-meta">Dghaim R, Al Khatib S, Rasool H, and Khan MA · Journal of Environmental and Public Health · 2015 · [doi.org/10.1155/2015/973878](https://doi.org/10.1155/2015/973878)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/carpena2024-chemical-hazards-herbs-europe|Assessment of the Chemical Hazards in Herbs Consumed in Europe: Toxins, Heavy Metals, and Pesticide Residues]]<span class="hmi-ref-meta">Carpena M, Barciela P, Perez-Vazquez A, Noras K, Trafialek J, Prieto MA, et al. · Proceedings (MDPI) — 1st International Electronic Conference on Toxics (IECTO2024) · 2024 · [doi.org/10.3390/proceedings2024102054](https://doi.org/10.3390/proceedings2024102054)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/bekalu2025-black-cumin-heavy-metals-ethiopia\|Yewbmirt et al. 2025]]. *Analysis of Nigella sativa L. (Black Cumin) seeds for levels of heavy metals using FAAS: geospatial profiling and regional safety implications*, Discover Chemistry | 2025 | Peer-reviewed | ET Pb, Cd, Fe, Cu, Zn occurrence in 81 Nigella sativa L. black cumin seed samples from Dejen, Gozamen, and Sinan districts of East Gojjam, Ethiopia;... (n=81) |
| 2 | [[sources/huff2025-spices-lancaster-pa\|Huff et al. 2025]]. *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*, Environmental Monitoring and Assessment | 2025 | Peer-reviewed | Lancaster Pennsylvania retail spice Pb, Cd, tAs in 116 samples with regulatory-gap analysis |
| 3 | [[sources/lhaac2025-csp41-herbs-spices-wa\|LHAAC 2025]]. *Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices*, Local Health Authorities Analytical Committee, Edith Cowan University | 2025 | Government report | Australian Coordinated Sampling Project 41 retail-and-import 380-sample 7-metal panel |
| 4 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 5 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Pb, Cd, tAs, tHg, Ni, Al, and Cr in 69 commercial spice and herb samples from the Queensland market by ICP-MS, with country-of-origin lead exceedances in cinnamon |
| 6 | [[sources/carpena2024-chemical-hazards-herbs-europe\|Carpena et al. 2024]]. *Assessment of the Chemical Hazards in Herbs Consumed in Europe: Toxins, Heavy Metals, and Pesticide Residues*, Proceedings (MDPI) — 1st International Electronic Conference on Toxics (IECTO2024) | 2024 | Review | European-scale assessment of toxins, heavy metals, and pesticide residues in herbs; broader-context regulatory framework discussion |
| 7 | [[sources/moussa2024-spices-herbs-lebanon\|Moussa et al. 2024]]. *Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs*, PLoS ONE | 2024 | Peer-reviewed | LB Pb, Cd, tAs, tHg occurrence in 96 composite samples (pooled from 480 individual samples; 5 brands per spice per category) of 13 dried herbs... (n=96) |
| 8 | [[sources/munarso2024-vanilla-indonesia-quality\|Munarso et al. 2024]]. *From bean to market: exploring the chemical and production dynamics of high-quality Indonesian vanilla*, Frontiers in Sustainable Food Systems | 2024 | Peer-reviewed | ID Pb, Cd occurrence in Cured Vanilla planifolia bean samples collected May–August 2023 across seven Indonesian provinces (North Sumatra, Central Java, East Java,... |
| 9 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | BD Pb, Cd, Cr occurrence in 19 commercially-available spice samples (15 non-branded, 4 branded) collected from Sonapur and Maijdee marketplaces in Noakhali District, Bangladesh;... (n=19) |
| 10 | [[sources/patel2023-singrauli-herbal-plants-metals\|Patel et al. 2023]]. *Evaluation of heavy metals in herbal plants growing in Singrauli Region of Madhya Pradesh*, International Journal of Chemical and Biological Sciences | 2023 | Peer-reviewed | IN Pb, Cr, Cd, Cu, Ni, Zn, Fe occurrence in Ginger rhizome, suran rhizome, and cumin seed samples collected from different locations within Singrauli region, Madhya Pradesh, India;... (n=3) |
| 11 | [[sources/pradhan2023-heracleum-nepalense-elements\|Pradhan 2023]]. *Inductive coupled plasma analysis of Heracleum nepalense D. Don (Umbelliferae)*, Exploratory Animal and Medical Research | 2023 | Peer-reviewed | IN Pb, Cd, tAs, Hg, Al, Cr, Ni, Sn, Sb, U occurrence in Three ICP replicas from mature Heracleum nepalense fruit collected in Sikkim, India (n=3) |
| 12 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | Cd and Pb in 432 dried herb, fresh herb, and single-component spice samples from Lublin retail, with dried herbs the highest-load form |
| 13 | [[sources/alam2022-dhaka-spices-lead\|Alam et al. 2022]]. *Lead Exposure of Four Biologically Important Common Branded and Nonbranded Spices: Relative Analysis and Health Implication*, Research Square (preprint) | 2022 | Preprint | BD Pb occurrence in 72 branded and nonbranded powdered spice samples (cumin, red pepper chili, turmeric, and coriander) collected from three local... (n=72) |
| 14 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | Multi-origin 8-metal panel (Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn) across Italian, Saudi, Indian, Iranian, Indonesian, Vietnamese spice samples (n=13 multi-species) |
| 15 | [[sources/fischer2022-mercury-spice-plants-poland\|Fischer et al. 2022]]. *The Mercury Concentration in Spice Plants*, Processes | 2022 | Peer-reviewed | Polish mercury concentration in 48 spice-plant samples; tHg occurrence data |
| 16 | [[sources/mercan-yucel2022-van-spices-heavy-metals\|Mercan 2022]]. *Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals*, Balikesir Health Sciences Journal | 2022 | Peer-reviewed | TR Ni, tAs, Cd, Pb, Al occurrence in 60 unpackaged spice samples sold in Van Province, Turkey: black pepper n=20, cumin n=20, and red pepper n=20. (n=60) |
| 17 | [[sources/efsa2021-aluminium-food-qa\|EUFIC 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Information Council (EUFIC) | 2021 | NGO report | EU aluminium regulatory framework and food-category context including herbs and spices |
| 18 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 19 | [[sources/kaalieswari2021-fenugreek-arsenic\|Sri et al. 2021]]. *Determination of Arsenic Uptake Potential In an Edible Plant Species (Trigonellna Foenum- Granecum) and Assessment of Human Health Risk*, Current World Environment | 2021 | Peer-reviewed | IN tAs occurrence in Laboratory-grown fenugreek seedlings treated for 10 days with arsenite or arsenate solutions at 1, 2, and 3 mg/L,... (n=21) |
| 20 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Polish multi-species (37 herbs + 12 spices + tea + coffee = 240 samples) 4-metal panel; higher-Pb species identified |
| 21 | [[sources/marinescu2020-romanian-herbs-spices-metals\|Marinescu et al. 2020]]. *Assessment of heavy metals content in some medicinal plants and spices commonly used in Romania*, Farmacia | 2020 | Peer-reviewed | RO tAs, Cd, Cu, Fe, tHg, Pb occurrence in Forty-two Romanian medicinal-plant and spice samples: six medicinal plant species and six culinary spice/herb species, including packaged and... (n=42) |
| 22 | [[sources/nys-doh2019-metals-spices-guidance\|Bureau of Toxic Substance 2019]]. *Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices*, New York State Department of Health | 2019 | Government report | New York State Department of Health Pb (0.21 mg/kg), Cd (0.21), Cr (0.41), iAs (0.10) spice-specific health-based guidance values |
| 23 | [[sources/savic2019-serbian-spices-minerals\|Savić et al. 2019]]. *Determination of the mineral content of spices by ICP-OES*, Advanced Technologies | 2019 | Peer-reviewed | RS Pb, Cd, Al, Ni, Cr occurrence in Ten spice samples available on the Serbian market: curcuma, star anise, cinnamon, ginger, coriander, cardamom, sesame, black pepper,... (n=10) |
| 24 | [[sources/angelon-gaetz2018-lead-spices-north-carolina\|Angelon-Gaetz et al. 2018]]. *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*, MMWR Morbidity and Mortality Weekly Report | 2018 | Government report | Population-scale lead-in-ground-spice adulteration cohort; 386 home investigations linking spice consumption to elevated childhood blood-lead levels; specific country-of-origin product identified |
| 25 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 26 | [[sources/adams2017-nigerian-processed-spices-metals\|Adams et al. 2017]]. *Genotoxic studies of cooked and uncooked processed spices using Allium cepa Test*, International Journal of Advanced Research in Biological Sciences | 2017 | Peer-reviewed | NG Pb, Cd, Cr, Ni occurrence in Market-sold curry, thyme, suya, and pepper-soup spices purchased in Ogun State, Nigeria (n=4) |
| 27 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), European Commission | 2017 | Government report | EU-derived tolerable Al intake (0.3 mg/kg bw/day TDI) and dietary exposure framing applicable to herb and spice Al contributions |
| 28 | [[sources/dghaim2015-heavy-metals-uae-herbs\|Dghaim et al. 2015]]. *Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates*, Journal of Environmental and Public Health | 2015 | Peer-reviewed | UAE traditional-medicine herb Pb and Cd in 81 samples; regional traditional-medicine pathway |
| 29 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 30 | [[sources/darko2014-seasonings-ghana-metals\|Darko et al. 2014]]. *Heavy metal content in mixed and unmixed seasonings on the Ghanaian market*, African Journal of Food Science | 2014 | Peer-reviewed | GH Fe, Zn, Cu, Cd, Pb, tHg occurrence in Twenty-two powdered mixed and unmixed seasoning samples purchased at random from local shops and hawkers in the Asafo,... (n=22) |
| 31 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 32 | [[sources/ziyaina2014-libya-spices-lead-cadmium\|Ziyaina et al. 2014]]. *Lead and cadmium residue determination in spices available in Tripoli City markets (Libya)*, African Journal of Biochemistry Research | 2014 | Peer-reviewed | LY Pb, Cd occurrence in Imported spices traded in Libyan markets in 2011: 24 wholesale and 36 retail samples for each of four... (n=240) |
| 33 | [[sources/brizio2013-italian-food-supplements-metals\|Brizio et al. 2013]]. *Heavy metals occurrence in Italian food supplements*, E3S Web of Conferences | 2013 | Peer-reviewed | IT tAs, Cd, Cr, Pb, tHg occurrence in Twelve food supplements seized in a Piedmont shop by Italian food-adulteration authorities: six single-herbal samples and six mixed... (n=12) |
| 34 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 35 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EU Al concentrations |
| 36 | [[sources/divrikli2006-spices-herbal-plants-metals\|Divrikli et al. 2006]]. *Trace heavy metal contents of some spices and herbal plants from western Anatolia, Turkey*, International Journal of Food Science and Technology | 2006 | Peer-reviewed | TR Cu, Cd, Pb, Ni, Cr, Fe, Mn, Zn occurrence in Eleven spice and herbal plant species collected from 50 farmers in western Anatolia, Turkey, June-October 2003; four samples... (n=44) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 4 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
