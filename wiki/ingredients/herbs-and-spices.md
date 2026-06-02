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
    confidence: high
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
sources: 19
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 13
---

# Herbs And Spices

Herbs and spices — the aromatic and flavor-imparting plant materials that make up the seasoning category, including ground dried plant parts like turmeric, cinnamon, paprika, black pepper, cumin, coriander, oregano, basil, parsley, and dozens more — sit at the high end of the food-system heavy-metals distribution by mass concentration. Two structural reasons drive the elevated profile: drying concentrates metals on a per-mass basis relative to fresh plant material by 5-10×, and the global spice trade includes a documented adulteration pathway in which lead chromate, lead oxide, and lead-based pigment dyes are added to enhance color or extend product weight. The current corpus loads 13 peer-reviewed and government sources spanning Italy, Saudi Arabia, India, Iran, Indonesia, Vietnam, UAE, Poland, EU, Australia, New York State (US), North Carolina (US), Pennsylvania (US), and European market-wide assessments. The US adulteration case literature — particularly the Angelon-Gaetz 2018 North Carolina home-investigation cohort linking spice consumption to elevated childhood blood-lead levels and the Huff 2025 Lancaster, Pennsylvania spice survey — provides direct evidence for the adulteration pathway as a population-scale exposure source.

## Why this commodity accumulates heavy metals

The herb-and-spice category combines three accumulation pathways that compound. Soil uptake into the live plant carries Cd, Cr, Ni, and trace metals into leaves, roots, and seeds at rates that depend on soil chemistry, species, and growing region. Drying then concentrates these metals on a dry-weight basis: fresh herbs at 80-90% moisture content reduce to dried product at 8-12% moisture, producing roughly a 7-10× concentration uplift on a per-gram basis. Atmospheric deposition adds surface Pb to leaf and flower parts harvested in roadside or industrial-corridor settings. The third pathway, distinct from the agronomic ones, is post-harvest adulteration: the Angelon-Gaetz 2018 New York / North Carolina cohort documented turmeric, paprika, and related red-and-yellow-pigmented spices from specific country-of-origin sources containing lead chromate, lead oxide, and other lead pigment compounds added to brighten color or extend weight ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The NYS Department of Health technical-support document for metals in spices ([[sources/nys-doh2019-metals-spices-guidance]]) followed this work with formal health-based guidance values for Pb, Cd, Cr, and iAs specifically in the spice matrix, recognizing the spice channel as a distinct exposure pathway not captured by general food-safety frameworks. The Huff 2025 Lancaster survey ([[sources/huff2025-spices-lancaster-pa]]) and the Australian Coordinated Sampling Project 41 (n=380 across 7 metals, [[sources/lhaac2025-csp41-herbs-spices-wa]]) confirm the pattern at scale in both US and Australian markets.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=11 | 50–2000 | 5000 | high | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| Cd | n=9 | 20–500 | 1500 | high | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| iAs | n=2 | 10–200 | — | low | [[sources/nys-doh2019-metals-spices-guidance\|1]] |
| tAs | n=5 | 10–500 | — | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| tHg | n=6 | 1–50 | — | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/carpena2024-chemical-hazards-herbs-europe\|3]] |
| Ni | n=3 | 200–3000 | — | low | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Al | n=5 | 1000–20000 | — | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Cr | n=4 | 50–1000 | — | medium | [[sources/lhaac2025-csp41-herbs-spices-wa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|3]] |
| Sn | n=1 | — | — | — | — |
| U | data gap | — | — | — | — |

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/huff2025-spices-lancaster-pa\|Huff et al. 2025]]. *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*, Environmental Monitoring and Assessment | 2025 | Peer-reviewed | Lancaster Pennsylvania retail spice Pb, Cd, tAs in 116 samples with regulatory-gap analysis |
| 2 | [[sources/lhaac2025-csp41-herbs-spices-wa\|LHAAC 2025]]. *Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices*, Local Health Authorities Analytical Committee, Edith Cowan University | 2025 | Government report | Australian Coordinated Sampling Project 41 retail-and-import 380-sample 7-metal panel |
| 3 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Pb, Cd, tAs, tHg, Ni, Al, and Cr in 69 commercial spice and herb samples from the Queensland market by ICP-MS, with country-of-origin lead exceedances in cinnamon |
| 4 | [[sources/carpena2024-chemical-hazards-herbs-europe\|Carpena et al. 2024]]. *Assessment of the Chemical Hazards in Herbs Consumed in Europe: Toxins, Heavy Metals, and Pesticide Residues*, Proceedings (MDPI) — 1st International Electronic Conference on Toxics (IECTO2024) | 2024 | Review | European-scale assessment of toxins, heavy metals, and pesticide residues in herbs; broader-context regulatory framework discussion |
| 5 | [[sources/moussa2024-spices-herbs-lebanon\|Moussa et al. 2024]]. *Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs*, PLoS ONE | 2024 | Peer-reviewed | LB Pb, Cd, tAs, tHg occurrence in 96 composite samples (pooled from 480 individual samples; 5 brands per spice per category) of 13 dried herbs... (n=96) |
| 6 | [[sources/munarso2024-vanilla-indonesia-quality\|Munarso et al. 2024]]. *From bean to market: exploring the chemical and production dynamics of high-quality Indonesian vanilla*, Frontiers in Sustainable Food Systems | 2024 | Peer-reviewed | ID Pb, Cd occurrence in Cured Vanilla planifolia bean samples collected May–August 2023 across seven Indonesian provinces (North Sumatra, Central Java, East Java,... |
| 7 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | *[awaiting synthesis]* |
| 8 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | Cd and Pb in 432 dried herb, fresh herb, and single-component spice samples from Lublin retail, with dried herbs the highest-load form |
| 9 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | Multi-origin 8-metal panel (Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn) across Italian, Saudi, Indian, Iranian, Indonesian, Vietnamese spice samples (n=13 multi-species) |
| 10 | [[sources/fischer2022-mercury-spice-plants-poland\|Fischer et al. 2022]]. *The Mercury Concentration in Spice Plants*, Processes | 2022 | Peer-reviewed | Polish mercury concentration in 48 spice-plant samples; tHg occurrence data |
| 11 | [[sources/efsa2021-aluminium-food-qa\|EUFIC 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Information Council (EUFIC) | 2021 | NGO report | EU aluminium regulatory framework and food-category context including herbs and spices |
| 12 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 13 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Polish multi-species (37 herbs + 12 spices + tea + coffee = 240 samples) 4-metal panel; higher-Pb species identified |
| 14 | [[sources/nys-doh2019-metals-spices-guidance\|Bureau of Toxic Substance 2019]]. *Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices*, New York State Department of Health | 2019 | Government report | New York State Department of Health Pb (0.21 mg/kg), Cd (0.21), Cr (0.41), iAs (0.10) spice-specific health-based guidance values |
| 15 | [[sources/angelon-gaetz2018-lead-spices-north-carolina\|Angelon-Gaetz et al. 2018]]. *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*, MMWR Morbidity and Mortality Weekly Report | 2018 | Government report | Population-scale lead-in-ground-spice adulteration cohort; 386 home investigations linking spice consumption to elevated childhood blood-lead levels; specific country-of-origin product identified |
| 16 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | *[awaiting synthesis]* |
| 17 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), European Commission | 2017 | Government report | EU-derived tolerable Al intake (0.3 mg/kg bw/day TDI) and dietary exposure framing applicable to herb and spice Al contributions |
| 18 | [[sources/dghaim2015-heavy-metals-uae-herbs\|Dghaim et al. 2015]]. *Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates*, Journal of Environmental and Public Health | 2015 | Peer-reviewed | UAE traditional-medicine herb Pb and Cd in 81 samples; regional traditional-medicine pathway |
| 19 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
<!-- END: hmi-page-history -->
