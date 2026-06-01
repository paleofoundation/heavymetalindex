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
    confidence: high
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
sources: 11
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 9
---

# Turmeric

Turmeric (Curcuma longa) is the most heavily adulteration-documented spice in the food system. The dominant heavy-metals concern is not soil-derived contamination but post-harvest addition of lead chromate (PbCrO₄, the bright yellow pigment that boosts turmeric's commercial color) by some Bangladeshi, Indian, Pakistani, and Sri Lankan processors. The Forsyth 2019 Bangladesh investigation traced the adulteration practice to the polishing step at specific Bangladeshi mills and documented its scale across 524 samples ([[sources/forsyth2019-turmeric-lead-chromate-bangladesh]]); the 2024 South Asia follow-up extended the documentation across India, Pakistan, Sri Lanka, and Nepal (n=356, [[sources/forsyth2024-turmeric-lead-chromate-south-asia]]); the Gafner 2026 scoping review consolidates evidence across six continents (n=2,235 samples) ([[sources/gafner2026-turmeric-adulteration-six-continents]]). FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) authorises detention-without-physical-examination for turmeric and other spices from documented-adulteration-risk supply chains. The US-side case literature — Angelon-Gaetz 2018 North Carolina home-investigation cohort (n=386, [[sources/angelon-gaetz2018-lead-spices-north-carolina]]), Lech 2020 ground turmeric US survey (n=127, [[sources/lech2020-turmeric-lead-united-states]]), Huff 2025 Lancaster PA (n=116, [[sources/huff2025-spices-lancaster-pa]]) — links US-market adulterated turmeric to elevated childhood blood-lead levels.

## Why this commodity accumulates heavy metals

Turmeric is one of the most consequential ingredients in the heavy-metals literature because the dominant Pb pathway is adulteration, not agronomy. The traditional turmeric supply chain has rhizomes harvested, boiled, sun-dried, and polished before grinding to powder. At some Bangladeshi and other South Asian polishing mills, processors add lead chromate during polishing because the pigment imparts the bright yellow color that commands a premium price on the wholesale market. The Forsyth 2019 work traced this practice to specific mills and documented Pb concentrations in finished turmeric reaching 50,000-100,000 ppb (50-100 mg/kg) — two to three orders of magnitude above non-adulterated product ([[sources/forsyth2019-turmeric-lead-chromate-bangladesh]]). The lead chromate stoichiometry means Cr is elevated in tandem with Pb in adulterated product; the Cr-to-Pb ratio in confirmed-adulterated samples approaches the 0.16 stoichiometric ratio of PbCrO₄. Non-adulterated turmeric carries Pb at typical-spice levels (50-500 ppb) driven by ordinary agronomic uptake. The Cicero 2022 multi-origin spice work, the Tinggi 2025 Australian-market spice work (n=69, [[sources/tinggi2025-spices-herbs-queensland]]), and the Lancaster PA survey document both adulterated and non-adulterated product in retail; the distribution is bimodal rather than continuous, which means population-level mean concentrations under-represent the actual exposure to consumers buying the worst-case-tail product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=9 | 50–5000 | 100000 | medium | [[sources/gafner2026-turmeric-adulteration-six-continents\|1]], [[sources/huff2025-spices-lancaster-pa\|2]], [[sources/tinggi2025-spices-herbs-queensland\|3]] |
| Cd | n=4 | 20–300 | 800 | medium | [[sources/huff2025-spices-lancaster-pa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/oseisafo2024-ghana-spices-metals\|3]] |
| iAs | data gap | — | — | — | — |
| tAs | n=4 | 10–500 | — | medium | [[sources/huff2025-spices-lancaster-pa\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/oseisafo2024-ghana-spices-metals\|3]] |
| tHg | n=1 | — | — | — | — |
| Ni | n=1 | — | — | — | — |
| Al | n=1 | — | — | — | — |
| Cr | n=4 | 10–5000 | 50000 | high | [[sources/gafner2026-turmeric-adulteration-six-continents\|1]], [[sources/tinggi2025-spices-herbs-queensland\|2]], [[sources/forsyth2024-turmeric-lead-chromate-south-asia\|3]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/gafner2026-turmeric-adulteration-six-continents\|Gafner et al. 2026]]. *A scoping review of turmeric adulteration based on data from six continents*, Pharmaceutical Biology | 2026 | Peer-reviewed | Global six-continent turmeric adulteration scoping review (n=2,235); current state-of-evidence consolidation |
| 2 | [[sources/huff2025-spices-lancaster-pa\|Huff et al. 2025]]. *Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation*, Environmental Monitoring and Assessment | 2025 | Peer-reviewed | Lancaster Pennsylvania retail spice survey including turmeric Pb, Cd, tAs (n=116) |
| 3 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Australian retail-market 7-metal panel including turmeric across 7 origin countries (n=69) |
| 4 | [[sources/fda-import-alert-99-42-spice-lead\|FDA 2024]]. *FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination*, FDA Import Alerts | 2024 | Regulatory | US FDA regulatory enforcement mechanism for adulteration-risk spice imports including turmeric |
| 5 | [[sources/forsyth2024-turmeric-lead-chromate-south-asia\|Forsyth et al. 2024]]. *Evidence of turmeric adulteration with lead chromate across South Asia*, Science of the Total Environment | 2024 | Peer-reviewed | South Asian (India, Pakistan, Sri Lanka, Nepal) lead chromate adulteration follow-up (n=356) |
| 6 | [[sources/oseisafo2024-ghana-spices-metals\|Osei-Safo et al. 2024]]. *Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana*, The Scientific World Journal | 2024 | Peer-reviewed | Ghana market spice trace-metal survey including imported-and-local turmeric (n=90) |
| 7 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review; no original measurements. Synthesizes US Congressional Subcommittee on Economic and Consumer Policy findings (Feb 2021 and... |
| 8 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 9 | [[sources/lech2020-turmeric-lead-united-states\|Lech et al. 2020]]. *Ground Turmeric as a Source of Lead Exposure in the United States*, Environmental Health Perspectives | 2020 | Peer-reviewed | US ground turmeric survey identifying Pb distribution worst-case tail (n=127) |
| 10 | [[sources/forsyth2019-turmeric-lead-chromate-bangladesh\|Forsyth et al. 2019]]. *Turmeric means 'yellow' in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh*, Environmental Research | 2019 | Peer-reviewed | Bangladesh mill-traced lead chromate adulteration documentation (n=524); foundational adulteration evidence |
| 11 | [[sources/angelon-gaetz2018-lead-spices-north-carolina\|Angelon-Gaetz et al. 2018]]. *Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018*, MMWR Morbidity and Mortality Weekly Report | 2018 | Government report | Population-scale US home-investigation cohort linking turmeric to elevated childhood blood-lead (n=386) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
<!-- END: hmi-page-history -->
