---
title: Fruit Juice
dek: "Liquid extracted from fruit or reconstituted from concentrate, covered through metal measurements, processing and packaging. The page distinguishes fruit types and draft lead guidance."
rail_highlights:
  - label: Exposure
    text: French infant survey measured trace elements in fruit juices
    source: sources/chekri2019-french-infant-toddler-tds-trace-elements
    source_label: French diet study
  - label: Limits
    text: FDA draft lead levels distinguish apple from other juices
    source: sources/fda2022-draft-lead-juice
    source_label: FDA draft guidance
  - label: Key distinction
    text: French infant juice data do not separate fruit types
    source: sources/chekri2019-french-infant-toddler-tds-trace-elements
    source_label: French diet study
type: ingredient
commodity: fruit-juice
aliases: ["apple juice", "grape juice", "pear juice", "fruit juice concentrate", "baby juice", lychee-juice, cherry-juice, pineapple-juice]
category: beverage-ingredient
contamination_profile:
  Pb: { status: populated, typical_ppb: [0.5, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [fruit-source, water-source, concentration, packaging]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-juice-not-canned]]"]
audience: [regulator, educator, consumer, app]
sources: 32
wiki_doi: null
updated: 2026-05-16
hero_image: /static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp
hero_image_alt: "Orange, clementine, tangerine, grapefruit and citrus juices illustrating fruit juice ingredient context."
---

# Fruit Juice

## Overview

Chekri et al. 2019 reports a French infant fruit-juice category with N=4, but does not separate fruit type, concentrate status, or canned status. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0.5–5 | low | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–10 | low | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Variance within fruit juice tracks four dimensions. First, fruit type: [[ingredients/grape-juice|grape juice]] carries higher Pb and trace Cd than [[ingredients/apple-juice|apple juice]] reflecting grape vine soil-uptake and trellis-system Pb deposition; juices from drupes (peach, plum) and citrus (orange, grapefruit) sit at the low end of the per-juice metal range. Second, growing-region soil and irrigation-water profile: juice from documented high-As-water regions (parts of Latin America, South Asia, certain US southwestern apple production) carries elevated iAs and tAs per [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Kubachka 2019]] HPLC-ICP-MS speciation work. Third, single-strength vs concentrate-and-reconstitute production: concentrates carry concentrated per-mass metals at the concentrate stage, which propagates into reconstituted juice via dilution. Fourth, packaging: aseptic carton or PET-bottled juice carries lower trace metals than metal-can juice because the can-lining introduces a Sn migration pathway in acidic juice matrices.

The FDA 2022 draft action levels ([[sources/fda2022-draft-lead-juice|FDA 2022]]) of 10 ppb Pb for single-strength apple juice and 20 ppb Pb for other juices replaced the older 1995 50-ppb HACCP context ([[sources/fda2004-juice-haccp-lead|FDA 2004]]), reflecting FDA's reassessment of achievable industry practice. The French infant TDS work in [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]] documents the broader Cd, Cr, Ni, and Sn occurrence in infant fruit juices on the EU market.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 350: Fruit juice blend (100% juice), canned/bottled | tAs | 3 | 2 | 1.3–1.4 | 1 |
| 350: Fruit juice blend (100% juice), canned/bottled | Cd | 3 | 0 | ND in all composites | 1 |
| 350: Fruit juice blend (100% juice), canned/bottled | Cr | 3 | 0 | ND in all composites | 25 |
| 350: Fruit juice blend (100% juice), canned/bottled | Pb | 3 | 1 | 1.2 | 1 |
| 350: Fruit juice blend (100% juice), canned/bottled | tHg | 3 | 0 | ND in all composites | 1 |
| 350: Fruit juice blend (100% juice), canned/bottled | Ni | 3 | 1 | 20 | 20 |
| 350: Fruit juice blend (100% juice), canned/bottled | U | 3 | 0 | ND in all composites | 1 |
| 762: BF, juice, mixed fruit | tAs | 3 | 1 | 5.2 | 3 |
| 762: BF, juice, mixed fruit | Cd | 3 | 0 | ND in all composites | 1 |
| 762: BF, juice, mixed fruit | Cr | 3 | 0 | ND in all composites | 50 |
| 762: BF, juice, mixed fruit | Pb | 3 | 0 | ND in all composites | 4 |
| 762: BF, juice, mixed fruit | tHg | 3 | 0 | ND in all composites | 1 |
| 762: BF, juice, mixed fruit | Ni | 3 | 0 | ND in all composites | 40 |
| 762: BF, juice, mixed fruit | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS]]<span class="hmi-ref-meta">Kubachka KM, Hanley T, Mantha M, Wilson RA, Falconer TM, Mounicou S, et al. · Food Analytical Methods · 2019 · [doi.org/10.1007/s12161-019-01636-y](https://doi.org/10.1007/s12161-019-01636-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/fda2022-draft-lead-juice|Draft Guidance for Industry: Action Levels for Lead in Juice]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Draft Guidance for Industry · 2022 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/draft-guidance-industry-action-levels-lead-juice)</span><span class="hmi-ref-tag">Guidance</span>
4. [[sources/fda2004-juice-haccp-lead|Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Guidance for Industry · 2004 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first)</span><span class="hmi-ref-tag">Guidance</span>
5. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
6. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 2 | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals\|Weldegebriel et al. 2025]]. *Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia*, Scientific Reports 15:36868 | 2025 | Peer-reviewed | ET Cd, Pb, Cr, Ni occurrence in Eighty packaged fruit juice samples drawn from eight Ethiopian-manufactured brands (10 samples per brand) and analyzed for Cd,... (n=80) |
| 3 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | NP Pb, Fe, Cu, Zn occurrence in Sixteen commercially packaged fruit-juice samples — four flavours (orange, apple, mango, lychee) drawn from four popular brands sold... (n=16) |
| 4 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 5 | [[sources/wale2024-fruit-digestion-methods-review\|Wale 2024]]. *Comparisons of Different Digestion Methods for Heavy Metal Analysis from Fruits*, Science Journal of Analytical Chemistry | 2024 | Review | Pb, Cd, tAs, Cr, Ni, Cu, Fe, Mn, Co, Zn occurrence in Single-author 6-page narrative review (Vol. 12, No. 1, pp. 7-12) by the same Ethiopian Institute of Agricultural Research... |
| 6 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 7 | [[sources/wale2023-heavy-metals-fruits-vegetables-overview\|Wale 2023]]. *An Overview of the Level of Heavy Metals Concentration in Fruits and Vegetables*, International Journal of Food Science and Biotechnology | 2023 | Review | Pb, Cd, tAs, Cr, Ni, tHg, Cu, Fe, Mn, Co, Zn occurrence in Narrative review with no primary measurements; single-author three-page short review (Vol. 8, No. 2, pp. 23-25) from the... |
| 8 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 9 | [[sources/fda2022-draft-lead-juice\|FDA 2022]]. *Draft Guidance for Industry: Action Levels for Lead in Juice*, FDA Draft Guidance for Industry | 2022 | Government guidance | FDA 2022 draft Pb action levels for juice: 10 ppb for single-strength apple juice and 20 ppb for other juices, replacing the older 50 ppb HACCP context |
| 10 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 11 | [[sources/neuwirth2022-baby-cereals-lead-arsenic\|Neuwirth et al. 2022]]. *Cereal and Juice, Lead and Arsenic, Our Children at Risk: A Call for the FDA to Re-Evaluate the Allowable Limits of Lead and Arsenic That Children May Ingest*, International Journal of Environmental Research and Public Health 19(10):5788 | 2022 | Peer-reviewed | US Pb, tAs occurrence in Opinion/commentary reviewing third-party survey data and federal datasets on Pb and As in baby cereals and juices; no... |
| 12 | [[sources/subedi2022-fruit-juices-heavy-metals\|Subedi et al. 2022]]. *Determination of heavy metals in varieties of fresh and packaged fruit juices along with powdered fruit drink mixes in Kathmandu Valley*, Journal of Balkumari College | 2022 | Peer-reviewed | NP Fe, Mn, Zn, Pb occurrence in Fresh juices, packaged juices, and powdered fruit drink mixes sold in Kathmandu Valley, Nepal |
| 13 | [[sources/abdel-rahman2019-egypt-nonalcoholic-beverages-metals\|Abdel-Rahman et al. 2019]]. *Heavy metals content in some non-alcoholic beverages (carbonated drinks, flavored yogurt drinks, and juice drinks) of the Egyptian markets*, Toxicology Reports | 2019 | Peer-reviewed | EG Cd, Pb, Cr, Ni, Fe, Mn, Cu occurrence in Twelve flavored yogurt drinks, eighteen juice drinks, and twenty-four carbonated drinks collected from Egyptian local markets between January... (n=54) |
| 14 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 15 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant TDS occurrence data for Al, Sb, tAs, Cd, Cr, Ni, and Sn in fruit juice products consumed by infants and toddlers (n=291 total foods) |
| 16 | [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|Kubachka et al. 2019]]. *Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS*, Food Analytical Methods | 2019 | Peer-reviewed | FDA AOAC First Action 2016.04 HPLC-ICP-MS method for iAs, DMA, MMA, and AsB in apple, pear, grape, pomegranate, prune, and cherry juices |
| 17 | [[sources/balalimood2018-fruit-juice-mashhad-pb-as\|Balali-Mood et al. 2018]]. *Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran*, Iranian Journal of Toxicology | 2018 | Peer-reviewed | IR Pb, tAs occurrence in 50 commercial packaged fruit juice samples from Mashhad, Iran local markets in spring and winter 2016; grape, apple,... (n=50) |
| 18 | [[sources/youssao2018-fruit-juices-syrup-benin\|Youssao et al. 2018]]. *Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic*, International Journal of Chemistry | 2018 | Peer-reviewed | BJ/FR Al, tAs, Ba, Be, Cd, Hg, Pb, Sn, Tl, U occurrence in 92 fruit-juice and syrup samples: 85 Benin-produced bottled pineapple juices/cocktails from artisanal and semi-industrial units, 6 French pineapple... (n=92) |
| 19 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 20 | [[sources/alzagtat2016-fruit-nectars-libya-heavy-metals\|Alzagtat et al. 2016]]. *Conformity of Fruit Nectar Samples to Libyan Specification Standards*, Turkish Journal of Agriculture - Food Science and Technology | 2016 | Peer-reviewed | LY Cu, Zn, Fe, tAs, Pb, Cd occurrence in Local and imported fruit nectar samples from Libyan markets |
| 21 | [[sources/adegbola2015-nigeria-snacks-drinks-metals\|Adegbola et al. 2015]]. *Evaluation of some heavy metal contaminants in biscuits, fruit drinks, concentrates, candy, milk products and carbonated drinks sold in Ibadan, Nigeria*, International Journal of Biological and Chemical Sciences | 2015 | Peer-reviewed | NG Ca, Cr, Cu, Fe, Pb, Cd occurrence in Twelve sweet and milk-sweet brands, six biscuit brands, eleven fruit and flavoured concentrate brands, and five liquid drink... (n=34) |
| 22 | [[sources/godwill2015-soft-drinks-metals-nigeria\|Godwill et al. 2015]]. *Determination of some soft drink constituents and contamination by some heavy metals in Nigeria*, Toxicology Reports | 2015 | Peer-reviewed | NG Cd, Pb, tHg occurrence in Twenty-six soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State, Nigeria; sample names are... (n=26) |
| 23 | [[sources/paula2015-fruit-juices-elements-portugal\|Paula et al. 2015]]. *Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices*, Czech Journal of Food Sciences | 2015 | Peer-reviewed | PT Cd, Cr, Pb, Ni, Zn, Fe occurrence in 62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species,... (n=62) |
| 24 | [[sources/savic2015-clear-orange-juice-minerals\|Savic et al. 2015]]. *The Presence of Minerals in Clear Orange Juices*, Advanced Technologies | 2015 | Peer-reviewed | RS Ag, Al, tAs, Cd, Co, Cr, Cu, Fe, Li, Mg, Mn, Mo, Ni, Pb, Sb, Zn occurrence in Seven clear orange-juice samples with 50% fruit content, produced by different manufacturers and purchased from the local market... (n=7) |
| 25 | [[sources/maduabuchi2007-nigeria-beverages-arsenic-chromium\|Maduabuchi et al. 2007]]. *Arsenic and Chromium in Canned and Non-Canned Beverages in Nigeria: A Potential Public Health Concern*, International Journal of Environmental Research and Public Health | 2007 | Peer-reviewed | NG tAs, Cr occurrence in Fifty commonly consumed canned and non-canned beverages purchased in Nigeria in March 2005: 21 canned beverages and 29... (n=50) |
| 26 | [[sources/fda2004-juice-haccp-lead\|FDA 2004]]. *Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice*, FDA Guidance for Industry | 2004 | Government guidance | FDA Juice HACCP guidance establishing 50 ppb Pb as the original hazard threshold for ready-to-drink fruit juices; superseded by the 2022 draft action levels |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Fruit juice is the liquid extracted from fresh fruit (single-strength) or reconstituted from concentrate. Heavy-metal load in fruit juice originates from three primary pathways: source-fruit inheritance ([[metals/lead|Pb]] and [[metals/cadmium|Cd]] from soil uptake; iAs in juice from fruit grown in As-affected water/soil regions; trace Ni from natural plant content), processing-equipment contact (pressing, filtration, and concentration equipment introduces trace metals if not specifically food-grade lined), and packaging migration ([[metals/tin|Sn]] from tinplate cans in acidic juice matrices; trace Pb historically from soldered cans, now phased out). The FDA's Closer to Zero framework and the 2022 draft action levels for Pb in juice ([[sources/fda2022-draft-lead-juice|FDA 2022]]) target the juice-specific Pb pathway, particularly for single-strength apple juice as a high-frequency infant beverage.

Different fruit types carry different baseline metal loads: [[ingredients/grape-juice|grape juice]] sits at the upper end of the per-juice Pb range reflecting grape vine soil-uptake and trellis-system Pb; [[ingredients/apple-juice|apple juice]] sits at the lower end. The HPLC-ICP-MS speciation work by [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Kubachka 2019]] documents iAs speciation in fruit juices reaching the US market and is the methodological foundation for FDA's juice-As surveillance. The HMTc panel concerns for fruit juice are Pb (dominant for FDA regulatory attention), trace Cd and iAs (from source-fruit and source-water inheritance), and Sn for canned-juice products.

## Processing effects

Fruit-juice manufacturing involves washing, pressing or extraction, screening or filtration, optional pasteurization (thermal or high-pressure), optional concentration via evaporation, and packaging. The pressing step extracts juice from fruit solids and leaves most metal load with the source fruit in the solids fraction; juice typically carries lower per-mass Pb and Cd than the source fruit on a wet-weight basis because the metals partition substantially to the solids. Filtration further removes particulate-bound metals. Concentration via evaporation concentrates per-mass solute including metals; reconstituted juice carries the concentrate's diluted profile. Pasteurization does not affect metals. The dominant processing-introduced contamination is Sn from tinplate-can packaging migration in acidic juice (juice pH ≈3.0-4.0 promotes Sn migration); modern can-stock specifications (BPA-NI epoxy lining, full lacquering) address this.

## Ingredient-derivative risk

Fruit-juice derivatives include juice concentrate (concentrated metals per-mass; primary intermediate for reconstituted juice products), juice blends (multiple fruit juices combined; per-juice profile is the weighted average), fruit-flavored beverages (juice diluted with water, sweeteners, and other ingredients; lower per-mass metals than full-strength juice), and juice-based products including jellies, jams, and dessert toppings. Fruit juice routes into product-row families including [[products/fruit-juice-not-canned|fruit-juice-not-canned]] and related infant-and-young-child juice product rows. Specific per-fruit juices have dedicated pages: [[ingredients/apple-juice|apple juice]], [[ingredients/grape-juice|grape juice]], [[ingredients/mango-juice|mango juice]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-fruit specification (origin-region selection for documented low-soil-Pb and low-irrigation-As production areas); supplier audit programs verifying processing-equipment material specifications; and contractual specification of Pb/iAs ceiling on incoming juice or concentrate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the fruit-cultivation stage; see per-fruit ingredient pages ([[ingredients/grape-juice|grape]], [[ingredients/apple|apple]], etc.) for the upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification (stainless-steel-only contact surfaces, food-grade gasketing, BPA-NI lined storage tanks); filtration to remove particulate-bound metals; and avoidance of equipment-cleaning chemicals that could introduce trace metals.

**Formulation levers** ([[mitigation/formulation]]) include juice-blend diversification (blending higher-Pb juices with lower-Pb juices to dilute per-product Pb); juice-to-water dilution in fruit-flavored beverage formulations; and substitution of juice with water-based fruit-flavor systems where the consumer category permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature: lot-level Pb, iAs, Cd, and Sn testing on finished juice against the FDA 2022 draft action levels (10 ppb Pb single-strength apple juice; 20 ppb Pb other juices) and EU per-juice maximum levels. ICP-MS is the standard analytical platform; HPLC-ICP-MS speciation is required for iAs vs tAs distinction.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy, full lacquering, two-piece drawn-redrawn construction) to minimize Sn migration; aseptic carton, glass, or PET packaging eliminates the Sn pathway entirely. Storage-condition specification (cool, dark storage) extends shelf-life Sn-migration tolerance for canned products.

## Regulatory limits that apply

- [[sources/fda2022-draft-lead-juice|FDA 2022 draft action levels for Pb in juice]]: 10 ppb for single-strength apple juice and 20 ppb for other juices, replacing the older 1995 50 ppb HACCP context ([[sources/fda2004-juice-haccp-lead|FDA 2004]]).
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb in fruit juice at 30 ppb (general) and 30 ppb for fruit nectar.
- Codex Alimentarius CXS 247-2005 (General Standard for Fruit Juices and Nectars) includes contaminant provisions referencing CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]).
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to fruit-juice products sold in California; the Mateel Environmental v. Welch Foods settlement specifically established practical compliance levels for grape juice and other juice products.
- EU Sn-in-canned-food regulation sets 200 mg/kg general / 50 mg/kg infant-and-young-child / 100 mg/kg beverages maximum levels for canned juice products.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 2 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
