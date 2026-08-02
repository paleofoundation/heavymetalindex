---
type: ingredient
commodity: turmeric
title: "Turmeric"
label: "Turmeric"
aliases: [curcuma-longa, ground-turmeric, turmeric-powder, haldi]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 5000]
    p95_ppb: 100000
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 4
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 5000]
    p95_ppb: 50000
    confidence: medium
    n_studies: 4
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
drivers: [adulteration-lead-chromate, soil-uptake, origin-country, processing]
lower_risk_variants: ["[[ingredients/whole-turmeric-rhizome]]"]
higher_risk_variants: ["[[ingredients/ground-turmeric-imported]]"]
used_in_products: ["[[products/spice-blends]]", "[[products/curry-powder]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 27
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 9
---

# Turmeric

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 6/10 HMTc analytes, total n=24 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 42 jurisdictions, top US 31% | — |
| D3 Anthropogenic evidence | GAP | 2 soil + 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 2 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg THIN, Ni THIN, Al THIN, Cr POOLABLE | tHg: needs 2 more study(ies); Ni: needs 2 more study(ies); Al: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 12 claims checked, 12 supported; 9 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | OK | 3 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr; pairing 0 paired, 7 single, 0 unpaired | tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.50, legal-defensibility 0.50, scale 0.25 | spread 0.75 — starved: scale |

<!-- /hmi-completeness-scorecard -->


Turmeric (Curcuma longa) is the most heavily adulteration-documented spice in the food system. The dominant heavy-metals concern is not soil-derived contamination but post-harvest addition of lead chromate (PbCrO₄, the bright yellow pigment that boosts turmeric's commercial color) by some Bangladeshi, Indian, Pakistani, and Sri Lankan processors. The Forsyth 2019 Bangladesh investigation traced the adulteration practice to the polishing step at specific Bangladeshi mills and documented its scale across 524 samples ([[sources/forsyth2019-turmeric-lead-chromate-bangladesh]]); the 2024 South Asia follow-up extended the documentation across India, Pakistan, Sri Lanka, and Nepal (n=356, [[sources/forsyth2024-turmeric-lead-chromate-south-asia]]); the Gafner 2026 scoping review consolidates evidence across six continents (n=2,235 samples) ([[sources/gafner2026-turmeric-adulteration-six-continents]]). FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) authorises detention-without-physical-examination for turmeric and other spices from documented-adulteration-risk supply chains. The US-side case literature — Angelon-Gaetz 2018 North Carolina home-investigation cohort (n=386, [[sources/angelon-gaetz2018-lead-spices-north-carolina]]), Lech 2020 ground turmeric US survey (n=127, [[sources/lech2020-turmeric-lead-united-states]]), Huff 2025 Lancaster PA (n=116, [[sources/huff2025-spices-lancaster-pa]]) — links US-market adulterated turmeric to elevated childhood blood-lead levels.

## Why this commodity accumulates heavy metals

Turmeric is one of the most consequential ingredients in the heavy-metals literature because the dominant Pb pathway is adulteration, not agronomy. The traditional turmeric supply chain has rhizomes harvested, boiled, sun-dried, and polished before grinding to powder. At some Bangladeshi and other South Asian polishing mills, processors add lead chromate during polishing because the pigment imparts the bright yellow color that commands a premium price on the wholesale market. The Forsyth 2019 work traced this practice to specific mills and documented Pb concentrations in finished turmeric reaching 50,000-100,000 ppb (50-100 mg/kg) — two to three orders of magnitude above non-adulterated product ([[sources/forsyth2019-turmeric-lead-chromate-bangladesh]]). The lead chromate stoichiometry means Cr is elevated in tandem with Pb in adulterated product; the Cr-to-Pb ratio in confirmed-adulterated samples approaches the 0.16 stoichiometric ratio of PbCrO₄. Non-adulterated turmeric carries Pb at typical-spice levels (50-500 ppb) driven by ordinary agronomic uptake. The Cicero 2022 multi-origin spice work, the Tinggi 2025 Australian-market spice work (n=69, [[sources/tinggi2025-spices-herbs-queensland]]), and the Lancaster PA survey document both adulterated and non-adulterated product in retail; the distribution is bimodal rather than continuous, which means population-level mean concentrations under-represent the actual exposure to consumers buying the worst-case-tail product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=9 | 50–5000 | medium | [[sources/gafner2026-turmeric-adulteration-six-continents\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| Cd | n=4 | 20–300 | medium | [[sources/huff2025-spices-lancaster-pa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/oseisafo2024-ghana-spices-metals\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 10–500 | medium | [[sources/huff2025-spices-lancaster-pa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/oseisafo2024-ghana-spices-metals\|3]] |
| tHg | n=1 | — | — | — |
| Ni | n=1 | — | — | — |
| Al | n=1 | — | — | — |
| Cr | n=4 | 10–5000 | medium | [[sources/gafner2026-turmeric-adulteration-six-continents\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/forsyth2024-turmeric-lead-chromate-south-asia\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus separates adulterated and non-adulterated subpopulations. Adulterated turmeric: the Forsyth 2019 Bangladesh investigation identified specific mills producing 50,000-100,000 ppb Pb product; the Lech 2020 US-market survey of 127 ground turmeric samples found 14% above 1,000 ppb Pb with the worst-case sample at 7,610 ppb ([[sources/lech2020-turmeric-lead-united-states]]); the Angelon-Gaetz 2018 home-investigation cohort identified turmeric as a recurring elevated-Pb source in NY-area Bengali-American homes with elevated-blood-lead children ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). Non-adulterated turmeric: the Tinggi 2025 Queensland survey (n=69 across India, China, Sri Lanka, Vietnam, Bangladesh, Malaysia) found Pb at retail-market levels generally compliant with Australian limits, suggesting strong country-of-origin screening at the Australian-market level. The Osei-Safo 2024 Ghana market study sampled 90 spice samples including imported-and-local turmeric and found heterogeneous Pb-Cd-tAs distributions across origin-country subsets ([[sources/oseisafo2024-ghana-spices-metals]]). Within Bangladesh specifically, the Forsyth team's targeted-mill sampling showed Pb elevation concentrated at a small number of polishing mills, not uniform across the supply chain. Variety question: there is no "low-Pb turmeric variety"; the Pb load is determined by post-harvest processing, not by Curcuma longa cultivar selection.

## Processing effects

The traditional turmeric processing chain (harvest, boil rhizomes, sun-dry, polish, grind) does not introduce metals when conducted with clean equipment. The dominant processing-driven contamination event is the lead chromate addition at polishing, which is a deliberate adulteration rather than a process artifact. Whole-rhizome turmeric (whole or cut, unprocessed beyond drying) is essentially never adulterated because the pigment-adding mechanism requires powdered form. Grinding non-adulterated whole rhizome to powder at the consumer's or brand's own facility produces non-adulterated finished powder. Steam sterilisation, irradiation, and other microbial-control processing steps do not affect the metal load. Re-grinding adulterated powder does not reduce the Pb because the chromate pigment is incorporated throughout the powder matrix.

## Ingredient-derivative risk

Whole-rhizome turmeric (fresh or dried) is the lowest-Pb form because adulteration requires powdered product. Ground turmeric is the highest-risk form. Curcumin extract and curcuminoid concentrates (sold as dietary supplements for anti-inflammatory positioning) carry the parent turmeric's metal load proportional to the extraction concentration ratio; supplement-grade curcumin from adulteration-prone supply chains can carry Pb at concentrations of regulatory concern. Curry powder, golden milk mixes, and spice blends including turmeric inherit the turmeric's Pb at the inclusion ratio.

## Mitigation options

### Sourcing levers

Source whole-rhizome turmeric rather than ground product when feasible; in-brand grinding eliminates the adulteration pathway entirely. For ground product, specify country-of-origin away from documented-adulteration-risk supply chains (the Forsyth team's targeting work identified specific Bangladeshi mills; broader Bangladesh, India, Pakistan, Sri Lanka product warrants additional QC). Specify XRF screening at intake for ground turmeric (a fast, non-destructive, lab-portable method that detects Pb and Cr simultaneously). FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) provides the US regulatory framework for detention-without-physical-examination of high-risk shipments. The Gafner 2026 scoping review documents the global scope and supports six-continent risk awareness ([[sources/gafner2026-turmeric-adulteration-six-continents]]).

### Agronomic levers

Agronomic interventions reduce the baseline soil-uptake Pb (already low: 50-500 ppb in non-adulterated product) but do not address the dominant adulteration pathway. Soil pH, water source, and fertiliser screening are upstream of the polishing-step adulteration that drives the worst-case-tail distribution.

### Processing levers

Verify that supplier mills do not add pigments at the polishing step (the canonical adulteration mechanism). Sourcing from cooperatives and direct-trade arrangements with traceability to individual farms and mills is the strongest processing-stage control.

### Formulation levers

For brand formulations using turmeric, the inclusion ratio determines per-serving exposure proportionally. A finished product with 2% turmeric inclusion at 50,000 ppb Pb still carries 1,000 ppb Pb in the finished product, which is well above acceptable for most regulatory frameworks. Substitution of curcumin extract from an audited supply chain over commodity ground turmeric for color-functional applications can reduce per-serving Pb at higher ingredient cost.

### Testing and QC levers

Lot-level XRF screening at intake catches the Pb-and-Cr adulteration pattern simultaneously and is fast enough for every-lot screening. Confirmatory ICP-MS testing for samples flagged by XRF is the standard analytical chain. Detection floors ≤ 100 ppb Pb are well within commercial ICP-MS capability. The Lech 2020 protocol (n=127 US-market samples, ICP-MS) is a useful method reference ([[sources/lech2020-turmeric-lead-united-states]]).

### Packaging and storage levers

Packaging is not the dominant pathway. Standard food-grade glass, plastic, or paperboard does not affect the metal load.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set a turmeric-specific maximum but applies general spice-category limits where they exist. The EU Regulation 2023/915 applies the spice maximum of 1.5 mg/kg Pb to turmeric (which means turmeric routinely violates the EU limit when adulterated; the EU import-alert framework targets non-compliant product at the border). The FDA's Import Alert 99-42 is the operational US enforcement mechanism, authorising detention-without-physical-examination of spice shipments from documented-adulteration-risk supply chains ([[sources/fda-import-alert-99-42-spice-lead]]). The NYS Department of Health 2019 spice-specific health-based guidance value of 0.21 mg/kg Pb is the strictest US-side advisory and represents the regulatory floor for harm reduction in vulnerable populations.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/forsyth2019-turmeric-lead-chromate-bangladesh|Turmeric means 'yellow' in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh]]<span class="hmi-ref-meta">Forsyth JE, Nurunnahar S, Islam SS, Baker M, Yeasmin D, Islam MS, et al. · Environmental Research · 2019 · [doi.org/10.1016/j.envres.2019.108722](https://doi.org/10.1016/j.envres.2019.108722)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/forsyth2024-turmeric-lead-chromate-south-asia|Evidence of turmeric adulteration with lead chromate across South Asia]]<span class="hmi-ref-meta">Forsyth JE, Mistree D, Nash E, Angrish M, and Luby SP · Science of the Total Environment · 2024 · [doi.org/10.1016/j.scitotenv.2024.175003](https://doi.org/10.1016/j.scitotenv.2024.175003)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/gafner2026-turmeric-adulteration-six-continents|A scoping review of turmeric adulteration based on data from six continents]]<span class="hmi-ref-meta">Gafner S, Orhan N, Kahraman C, and Blumenthal M · Pharmaceutical Biology · 2026 · [doi.org/10.1080/13880209.2025.2606229](https://doi.org/10.1080/13880209.2025.2606229)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
5. [[sources/angelon-gaetz2018-lead-spices-north-carolina|Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018]]<span class="hmi-ref-meta">Angelon-Gaetz KA, Klaus C, Chaudhry EA, and Bean DK · MMWR Morbidity and Mortality Weekly Report · 2018 · [doi.org/10.15585/mmwr.mm6746a2](https://doi.org/10.15585/mmwr.mm6746a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/lech2020-turmeric-lead-united-states|Ground Turmeric as a Source of Lead Exposure in the United States]]<span class="hmi-ref-meta">Lech FA, Brown S, Karagas MR, and Matte TD · Environmental Health Perspectives · 2020 · [doi.org/10.1289/EHP5561](https://doi.org/10.1289/EHP5561)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/huff2025-spices-lancaster-pa|Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation]]<span class="hmi-ref-meta">Huff A, Lam H, Ghimirey A, Goldring J, Pimentel M, and Okatch H · Environmental Monitoring and Assessment · 2025 · [doi.org/10.1007/s10661-025-14064-9](https://doi.org/10.1007/s10661-025-14064-9)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/tinggi2025-spices-herbs-queensland|Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure]]<span class="hmi-ref-meta">Tinggi U, Farrell M, Porter J, Mitchell S, and Jurd S · Journal of Environmental Exposure Assessment · 2025 · [doi.org/10.20517/jeea.2025.10](https://doi.org/10.20517/jeea.2025.10)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/oseisafo2024-ghana-spices-metals|Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana]]<span class="hmi-ref-meta">Osei-Safo I, Miezah K, Sackey LNA, Adusei-Gyamf J, and Abdul AM · The Scientific World Journal · 2024 · [doi.org/10.1155/2024/3168279](https://doi.org/10.1155/2024/3168279)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/gafner2026-turmeric-adulteration-six-continents\|Gafner et al. 2026]]. *A scoping review of turmeric adulteration based on data from six continents*, Pharmaceutical Biology | 2026 | Peer-reviewed | Global six-continent turmeric adulteration scoping review (n=2,235); current state-of-evidence consolidation |
| 2 | [[sources/huff2025-spices-lancaster-pa\|Huff et al. 2025]]. *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*, Environmental Monitoring and Assessment | 2025 | Peer-reviewed | Lancaster Pennsylvania retail spice survey including turmeric Pb, Cd, tAs (n=116) |
| 3 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 4 | [[sources/sabri2025-moroccan-spices-casablanca-metals\|Sabri et al. 2025]]. *Essential and Toxic Element Profiles in Selected Spices from Greater Casablanca, Morocco*, World's Veterinary Journal 15(4): 863-881 | 2025 | Peer-reviewed | MA/EU/INTL Pb, Cd, tAs, Cr, Ni occurrence in 137 bulk spice samples (cinnamon n=37, cumin n=25, turmeric n=25, black pepper n=25, ginger n=25) purchased from local... (n=137) |
| 5 | [[sources/shah2025-commercial-turmeric-lead-chromium\|Shah et al. 2025]]. *Heavy Metal Contamination in Commercial Turmeric: A Public Health Perspective*, COGNITION: A Peer Reviewed Transdisciplinary Research Journal | 2025 | Peer-reviewed | NP Pb, Cr occurrence in Commercial turmeric samples collected from Itahari and Biratnagar, Nepal (n=7) |
| 6 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Australian retail-market 7-metal panel including turmeric across 7 origin countries (n=69) |
| 7 | [[sources/fda-import-alert-99-42-spice-lead\|FDA 2024]]. *FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination*, FDA Import Alerts | 2024 | Regulatory | US FDA regulatory enforcement mechanism for adulteration-risk spice imports including turmeric |
| 8 | [[sources/forsyth2024-turmeric-lead-chromate-south-asia\|Forsyth et al. 2024]]. *Evidence of turmeric adulteration with lead chromate across South Asia*, Science of the Total Environment | 2024 | Peer-reviewed | South Asian (India, Pakistan, Sri Lanka, Nepal) lead chromate adulteration follow-up (n=356) |
| 9 | [[sources/oseisafo2024-ghana-spices-metals\|Osei-Safo et al. 2024]]. *Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana*, The Scientific World Journal | 2024 | Peer-reviewed | Ghana market spice trace-metal survey including imported-and-local turmeric (n=90) |
| 10 | [[sources/sargsyan2024-rapid-market-spice-lead\|Sargsyan et al. 2024]]. *Rapid Market Screening to assess lead concentrations in consumer products across 25 low- and middle-income countries*, Scientific Reports | 2024 | Peer-reviewed | AM/AZ/BD Pb occurrence in Loose processed spice samples collected during rapid market screening in 25 low- and middle-income countries (n=1084) |
| 11 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 12 | [[sources/islam2023-noakhali-spices-bangladesh\|Islam et al. 2023]]. *Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh*, medRxiv (preprint) | 2023 | Preprint | BD Pb, Cd, Cr occurrence in 19 commercially-available spice samples (15 non-branded, 4 branded) collected from Sonapur and Maijdee marketplaces in Noakhali District, Bangladesh;... (n=19) |
| 13 | [[sources/alam2022-dhaka-spices-lead\|Alam et al. 2022]]. *Lead Exposure of Four Biologically Important Common Branded and Nonbranded Spices: Relative Analysis and Health Implication*, Research Square (preprint) | 2022 | Preprint | BD Pb occurrence in 72 branded and nonbranded powdered spice samples (cumin, red pepper chili, turmeric, and coriander) collected from three local... (n=72) |
| 14 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review; no original measurements. Synthesizes US Congressional Subcommittee on Economic and Consumer Policy findings (Feb 2021 and... |
| 15 | [[sources/brown2022-patna-spice-lead\|Brown et al. 2022]]. *Prevalence of elevated blood lead levels and risk factors among children living in Patna, Bihar, India 2020*, PLOS Global Public Health | 2022 | Peer-reviewed | IN Pb, Cr occurrence in Household spice samples and child blood lead measurements from Patna, Bihar, India (n=132) |
| 16 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 17 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 18 | [[sources/rahman2021-dhaka-turmeric-heavy-metals\|Rahman et al. 2021]]. *Analysis of heavy metal contents in some commercial turmeric samples available at Dhaka, Bangladesh*, Jahangirnagar University Journal of Biological Sciences | 2021 | Peer-reviewed | BD Pb, Cd, Cr, tAs, Zn, Fe, Cu, Mn occurrence in Nine turmeric samples from Dhaka/Savar, Bangladesh: three unpacked bulk powders, three packed commercial powders, and three raw turmeric... (n=9) |
| 19 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 20 | [[sources/ericson2020-georgian-spices-lead\|Ericson et al. 2020]]. *Elevated Levels of Lead (Pb) Identified in Georgian Spices*, Annals of Global Health | 2020 | Peer-reviewed | GE Pb occurrence in Spice samples from 25 homes and four bazaars in Georgia, with additional household media assessed during a lead-exposure... (n=128) |
| 21 | [[sources/lech2020-turmeric-lead-united-states\|Lech et al. 2020]]. *Ground Turmeric as a Source of Lead Exposure in the United States*, Environmental Health Perspectives | 2020 | Peer-reviewed | US ground turmeric survey identifying Pb distribution worst-case tail (n=127) |
| 22 | [[sources/forsyth2019-turmeric-lead-chromate-bangladesh\|Forsyth et al. 2019]]. *Turmeric means 'yellow' in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh*, Environmental Research | 2019 | Peer-reviewed | Bangladesh mill-traced lead chromate adulteration documentation (n=524); foundational adulteration evidence |
| 23 | [[sources/savic2019-serbian-spices-minerals\|Savić et al. 2019]]. *Determination of the mineral content of spices by ICP-OES*, Advanced Technologies | 2019 | Peer-reviewed | RS Pb, Cd, Al, Ni, Cr occurrence in Ten spice samples available on the Serbian market: curcuma, star anise, cinnamon, ginger, coriander, cardamom, sesame, black pepper,... (n=10) |
| 24 | [[sources/angelon-gaetz2018-lead-spices-north-carolina\|Angelon-Gaetz et al. 2018]]. *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*, MMWR Morbidity and Mortality Weekly Report | 2018 | Government report | Population-scale US home-investigation cohort linking turmeric to elevated childhood blood-lead (n=386) |
| 25 | [[sources/bua2016-aromatic-spices-metals-italy\|Bua et al. 2016]]. *Heavy metals in aromatic spices by inductively coupled plasma-mass spectrometry*, Food Additives & Contaminants: Part B | 2016 | Peer-reviewed | IT Cd, tHg, tAs, Pb occurrence in Seven cinnamon, curcuma, and ginger spice samples traded in the Italian market, with origins listed as Indonesia, Madagascar,... (n=7) |
| 26 | [[sources/matloob2016-iraq-spices-heavy-metals\|Matloob 2016]]. *Using Stripping Voltammetry to Determine Heavy Metals in Cooking Spices Used in Iraq*, Polish Journal of Environmental Studies | 2016 | Peer-reviewed | IQ Cu, Zn, Fe, Mn, Cr, Ni, Co, Cd, Pb, tHg occurrence in 32 natural spice types sold in Babil, Iraq, five samples per spice (n=160) |
| 27 | [[sources/ziyaina2014-libya-spices-lead-cadmium\|Ziyaina et al. 2014]]. *Lead and cadmium residue determination in spices available in Tripoli City markets (Libya)*, African Journal of Biochemistry Research | 2014 | Peer-reviewed | LY Pb, Cd occurrence in Imported spices traded in Libyan markets in 2011: 24 wholesale and 36 retail samples for each of four... (n=240) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
