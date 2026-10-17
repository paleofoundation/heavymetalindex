---
type: ingredient
commodity: vegetable-oils
title: "Vegetable Oils"
dek: "Edible oils extracted from seeds, fruits and nuts. Explore the evidence on measured metals, refining, catalyst residues and packaging."
rail_highlights:
  - label: Exposure
    text: Lead and cadmium occur in surveyed vegetable oils
    source: sources/tayeb2025-olive-corn-oil-iran-pb-cd
    source_label: Iranian study
  - label: Key distinction
    text: Refining can reduce metals carried from oilseeds
    source: sources/nazari2023-heavy-metals-seed-crops-oil-products-review
    source_label: Review evidence
label: "Vegetable Oils"
aliases: [edible-oils, cooking-oils, plant-oils, vegetable-oil, "Vegetable Oil", "ingredients/vegetable-oil"]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: 100
    confidence: medium
    n_studies: 6
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
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
    typical_ppb: [10, 300]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: null
    confidence: low
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
drivers: [seed-source, extraction-method, refining-clay, packaging, hydrogenation-catalyst]
lower_risk_variants: ["[[ingredients/sunflower-oil]]", "[[ingredients/refined-vegetable-oil]]"]
higher_risk_variants: ["[[ingredients/olive-pomace-oil]]", "[[ingredients/cold-pressed-unrefined-oil]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 25
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 6
hero_image: /static/heroes/golden-oil-unmarked-bottle.webp
hero_image_alt: "Golden edible oil in an unmarked glass bottle and a shallow dish illustrating vegetable oils ingredient context."
---

# Vegetable Oils

## Overview

Vegetable oils — the broad category of liquid edible oils pressed or solvent-extracted from seeds (sunflower, soybean, rapeseed/canola, corn, peanut, sesame, safflower), fruit (olive, palm), or nuts — share a common heavy-metals profile shaped by upstream seed-source agronomy, the extraction-and-refining processing chain, and packaging-migration during shelf life. The current corpus loads 6 sources covering the global edible-oils literature: González-Torres 2023 systematic review (35 oil types from 24 countries, [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]), Mehri 2024 Iranian Hamadan probabilistic risk (n=40, [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]), Nazari 2023 seed-crops-and-oil-products threat-to-food-safety review ([[sources/nazari2023-heavy-metals-seed-crops-oil-products-review]]), Pehlivan 2008 Turkish ICP-AES method (n=17, [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]), Tayeb 2025 Iranian olive-and-corn-oil public-health risk (n=60, [[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]), and Yohannes 2024 Ethiopian Gondar City survey (n=17, [[sources/yohannes2024-vegetable-oils-ethiopia-gondar]]). Vegetable oils as a category sit consistently in the lower-middle of the food-system heavy-metals distribution, with most retail product below applicable Codex and EU Pb limits and the worst-case-tail driven by specific origin-and-packaging combinations rather than category-wide elevation.

## Why this commodity accumulates heavy metals

The vegetable-oil category aggregates oils with different upstream profiles into a single ingredient class. Seed agronomy: the seed (or fruit) accumulates Pb and Cd from soil at rates that depend on species, soil chemistry, irrigation water source, and proximity to atmospheric Pb sources (roadways, industrial sources). Extraction: mechanical pressing (cold-pressed product) retains a slightly higher metal load than solvent-extraction (hexane-based, used for most commodity-grade product) followed by refining. Refining: the standard refining chain (degumming, neutralisation, bleaching, deodorisation) reduces residual metals through filtration and bleaching-clay adsorption, but bleaching can introduce Ni from acid-activated clay catalysts; the Ni-from-bleaching pathway is the explanation for refined oil consistently carrying detectable Ni above unrefined product. Hydrogenation: partial or full hydrogenation (used for shortening, margarine, and some industrial-fat applications) introduces Ni from catalyst residue; regulatory frameworks set maxima for residual Ni in hydrogenated oils. Packaging-migration: glass and food-grade PET do not contribute meaningfully; tin, aluminium, and certain coated containers contribute trace metals over shelf life. The Mehri 2024 Iranian Hamadan probabilistic risk assessment found vegetable oils as a category contributing modest Pb-and-Cd dietary exposure relative to other food groups, with worst-case-tail intake metrics still within bounds-of-concern thresholds ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 5–200 | medium | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| Cd | n=6 | 1–50 | medium | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 5–100 | medium | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|2]] |
| tHg | n=1 | — | — | — |
| Ni | n=4 | 10–300 | medium | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]], [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|2]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|3]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 5–200 | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The González-Torres 2023 systematic review is the broadest synthesis at 35 vegetable-oil types across 24 countries, identifying olive oil, sunflower oil, soybean oil, corn oil, palm oil, peanut oil, and sesame oil as the dominant trade categories and characterising the heavy-metals distribution within each ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]). The Iranian Hamadan probabilistic-risk dataset (n=40) covers 5 vegetable-oil types and provides the strongest health-risk modeling in the loaded corpus. The Turkish Pehlivan 2008 work (n=17) is methodological but covers a 9-metal panel including the rarely-measured Co and Mn. The Ethiopian Gondar City data (n=17) characterises an emerging-market production-and-retail context. The Tayeb 2025 work (n=60 split between olive and corn oils) demonstrates the within-Iran market variance across commercial and traditional supply chains. Within-category pattern: refined commodity oils (sunflower, soybean, corn, canola) sit at the lower end of the Pb-and-Cd distribution; unrefined cold-pressed product carries slightly higher loads; olive pomace oil and certain solvent-extracted products carry the highest loads.

## Processing effects

The extraction step is the first major processing-driven shift. Cold pressing (mechanical) retains a slightly higher metal load than solvent extraction followed by refining, because refining removes residual metals through filtration and bleaching-clay adsorption. The Nazari 2023 review summarises the seed-to-oil-product metal-load reduction pathway: a typical seed at, say, 200 ppb Pb dry weight produces a finished refined oil at 5-50 ppb Pb, with most of the parent seed's metal load partitioned into the spent press cake or meal ([[sources/nazari2023-heavy-metals-seed-crops-oil-products-review]]). Refining reduces Pb-and-Cd by another 30-50% in finished product. Bleaching with food-grade acid-activated clay can introduce Ni at 5-50 ppb in finished oil; the magnitude depends on clay quality and bleaching protocol. Hydrogenation (used for trans-fat-containing applications, increasingly phased out) introduces Ni from catalyst residue at higher levels. Deodorisation at high temperature does not affect metal content. Re-use of frying oil increases trace metal pickup from food contact and equipment surfaces during use.

## Ingredient-derivative risk

Refined vegetable oils in glass packaging sit at the baseline. Refined vegetable oils in PET are comparable. Refined oils in tin, aluminium, or coated metal containers pick up modest additional metals from packaging-migration over shelf life. Cold-pressed unrefined oils carry slightly higher Pb-and-Cd than refined product but lower Ni. Hydrogenated oils and partially hydrogenated oils (shortening, margarine base) carry additional Ni from catalyst residue. Vegetable-oil-derived emulsifiers (lecithins, mono- and diglycerides) carry different metal profiles depending on the extraction and concentration step. Reused frying oil carries the baseline load plus any pickup during commercial frying use. Premium specialty oils (avocado oil, walnut oil, hazelnut oil) carry their parent fruit-or-nut's metal load; these are out of scope for the commodity-vegetable-oils page but covered on dedicated ingredient pages where the loaded corpus supports them.

## Mitigation options

### Sourcing levers

Specify refined oil over unrefined for the lowest baseline Pb-and-Cd load. For unrefined cold-pressed product, source from suppliers with documented seed-source agronomic screening. Single-origin and estate-bottled product enables supply-chain traceability that supports the upstream metal-load control.

### Agronomic levers

Soil pH management and phosphate-fertiliser screening at the seed-production stage reduce the upstream Cd load. Most agronomic interventions live with seed producers rather than oil refiners.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts. Specify maximum free-fatty-acid and residual-moisture targets that correlate with effective metal removal during deodorisation. For hydrogenated oils, specify the lowest Ni-residue limit consistent with FDA and EU food-additive frameworks.

### Formulation levers

For finished products using vegetable oils as a major ingredient, the inclusion ratio caps per-serving exposure. Substitution between oil types (sunflower vs soybean vs canola) does not meaningfully change the heavy-metals profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention. The Pehlivan 2008 ICP-AES method and the Mehri 2024 ICP-MS protocol are useful method references.

### Packaging and storage levers

Glass is the baseline-cleanest option for retail product. PET is comparable on metals. Tin and aluminium packaging contribute modest additional metals; for premium product, glass is preferred. For commercial frying applications, the container material and the frying-equipment alloy both contribute to the in-use metal load.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific heavy-metals provisions for individual oils with iron at 1.5 mg/kg max and copper at 0.1 mg/kg max (virgin oils). The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg to vegetable oils. The FDA has not set vegetable-oil-specific action levels but the general adulteration framework applies. The systematic-review and probabilistic-risk literature consistently finds commercial vegetable oils below the EU Pb maximum, with worst-case-tail product (cold-pressed unrefined, certain origin combinations) approaching but not exceeding the limit in most retail surveys.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 379: Oil, vegetable | tAs | 3 | 0 | ND in all composites | 4 |
| 379: Oil, vegetable | Cd | 3 | 0 | ND in all composites | 2 |
| 379: Oil, vegetable | Cr | 3 | 0 | ND in all composites | 130 |
| 379: Oil, vegetable | Pb | 3 | 0 | ND in all composites | 5 |
| 379: Oil, vegetable | tHg | 3 | 0 | ND in all composites | 1 |
| 379: Oil, vegetable | Ni | 3 | 0 | ND in all composites | 60 |
| 379: Oil, vegetable | U | 3 | 0 | ND in all composites | 2 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review|Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils]]<span class="hmi-ref-meta">González-Torres P, Puentes JG, Moya AJ, and La Rubia MD · Applied Sciences · 2023 · [doi.org/10.3390/app13053020](https://doi.org/10.3390/app13053020)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran]]<span class="hmi-ref-meta">Mehri F, Heshmati A, Talebi Ghane E, Khazaei M, Mahmudiono T, and Fakhri Y · BMC Public Health · 2024 · [doi.org/10.1186/s12889-023-17624-1](https://doi.org/10.1186/s12889-023-17624-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review|Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review]]<span class="hmi-ref-meta">Nazari F, Mirza Alizadeh A, Alikord M, Dizaji R, Torki Z, Shoeibi S, et al. · Carpathian Journal of Food Science and Technology, 15(2), 106-124 · 2023 · [doi.org/10.34302/crpjfst/2023.15.2.10](https://doi.org/10.34302/crpjfst/2023.15.2.10)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes|Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)]]<span class="hmi-ref-meta">Pehlivan E, Arslan G, Gode F, Altun T, and Özcan MM · Grasas y Aceites · 2008 · [doi.org/10.3989/gya.2008.v59.i3.514](https://doi.org/10.3989/gya.2008.v59.i3.514)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/tayeb2025-olive-corn-oil-iran-pb-cd|Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis]]<span class="hmi-ref-meta">Tayeb J and Movassaghghazani M · Toxicology Reports · 2025 · [doi.org/10.1016/j.toxrep.2025.101922](https://doi.org/10.1016/j.toxrep.2025.101922)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/yohannes2024-vegetable-oils-ethiopia-gondar|Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia]]<span class="hmi-ref-meta">Yohannes L, Feleke H, Sharew Melaku M, and Eyachew Amare D · BMC Public Health · 2024 · [doi.org/10.1186/s12889-024-19695-0](https://doi.org/10.1186/s12889-024-19695-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 2 | [[sources/matei2025-vegetable-oils-romania-gfaas\|Matei et al. 2025]]. *Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania*, Applied Sciences | 2025 | Peer-reviewed | RO Pb, Cd, Cu, Cr, Co, Mn, Ni occurrence in 24 edible vegetable oil samples (three samples each of eight oil types: sunflower, grapeseed, extra virgin olive, organic... (n=24) |
| 3 | [[sources/ntigoroku2025-delta-state-edible-oils-metals\|Ntigoroku et al. 2025]]. *Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria*, Journal of Applied Sciences and Environmental Management | 2025 | Peer-reviewed | NG Cd, Cr, Pb, Cu occurrence in Twenty edible vegetable oil samples purchased from major markets in Delta State, Nigeria, grouped as sunflower oil, soybean... (n=20) |
| 4 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr, Al, Cu, Zn, Fe, Mn, V, tHg occurrence in Systematic review of 35 studies meeting eligibility criteria (of 125 articles screened), including 7 studies on contaminants (PAHs... |
| 5 | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|Tayeb et al. 2025]]. *Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis*, Toxicology Reports | 2025 | Peer-reviewed | Iranian commercial-vs-traditional olive-and-corn oil Pb-Cd risk analysis (n=60) |
| 6 | [[sources/chetima2024-activated-carbons-cottonseed-oil-bleaching\|Chetima et al. 2024]]. *Activated carbons from open air and microwave-assisted impregnation of cotton and neem husks efficiently decolorize neutral cotton oil*, Heliyon | 2024 | Peer-reviewed | Chetima and colleagues prepare activated carbons (ACs) from neem and cotton husks by phosphoric-acid impregnation followed by carbonization, comparing 6... |
| 7 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 8 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Iranian Hamadan probabilistic-risk 5-metal panel across vegetable oils (n=40) |
| 9 | [[sources/sigauke2024-spent-bleaching-earth-review\|Placxedes et al. 2024]]. *Spent Bleaching Earth: Synthesis, Properties, Characterisation, and Application*, Journal of Sustainability Science and Management | 2024 | Peer-reviewed | Cu, Fe, Mn, Zn occurrence in Narrative review of published literature on spent bleaching earth (SBE) synthesis, properties, characterisation, and application. No primary measurements;... |
| 10 | [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|Yohannes et al. 2024]]. *Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia*, BMC Public Health | 2024 | Peer-reviewed | Ethiopian Gondar City vegetable oil 5-metal panel (n=17); emerging-market context |
| 11 | [[sources/famurewa2023-coconut-oil-metals-pesticides\|Famurewa et al. 2023]]. *Comparative assessment of different coconut oils: Chromatographic and spectrometric analyses of pesticide residues, toxic heavy metals, and associated contents*, Measurement: Food | 2023 | Peer-reviewed | NG/PK Pb, Cd, tHg, tAs, Ni, Al, Cr, Co, Cu, Fe, Zn, Mn, Be, Ag, Mo, Se, Au occurrence in Three coconut oil samples sold or produced for the Nigerian market: one imported oil and two locally produced... (n=3) |
| 12 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of 35 vegetable oil types from 24 countries (2015-2022 literature) |
| 13 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Global seed-crops-to-oil-products review with seed-to-finished-oil metal-load partitioning |
| 14 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg, Al, Cu, Zn occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
| 15 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 16 | [[sources/sadighara2021-food-organotin-review\|Sadighara et al. 2021]]. *The organotin contaminants in food: Sources and methods for detection: A systematic review and meta-analysis*, Food Chemistry: X | 2021 | Peer reviewed review | JP/IT/CL Sn occurrence in Systematic review and meta-analysis of published food-matrix organotin studies; 123 database records were screened, 9 studies were selected,... |
| 17 | [[sources/alrajhi2020-riyadh-edible-oils-trace-metals\|Alrajhi et al. 2020]]. *Concentration of Trace Metals in Some Major Edible Oils of Riyadh*, Revista Internacional de Contaminacion Ambiental | 2020 | Peer-reviewed | SA Cd, Cr, Cu, Fe, Mn, Ni, Zn, Al, Pb, tAs occurrence in Fifty-four edible vegetable oil samples, described as soybean, palm, and olive oils, collected from supermarkets around Riyadh, Saudi... (n=54) |
| 18 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 19 | [[sources/tesfaye2016-edible-oils-essential-metals-ethiopia\|Tesfaye et al. 2016]]. *Physico-Chemical Characteristics and Level of Some Selected Metal in Edible Oils*, Advances in Chemistry | 2016 | Peer-reviewed | ET Cu, Zn, Fe occurrence in Four branded edible-oil samples purchased around the Merkato commercial center in Ethiopia: two imported palm-oil samples and two... (n=4) |
| 20 | [[sources/acar2012-vegetable-oils-olives-turkey-etaas\|Acar 2012]]. *Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry*, Grasas y Aceites | 2012 | Peer-reviewed | TR Pb, Cd, Cu, Fe, Zn occurrence in 53 vegetable oil samples (8 soybean, 12 sunflower, 8 flower-seed, 8 nut, 8 corn, 9 olive) and 70... (n=123) |
| 21 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 22 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish vegetable oil 9-metal panel by ICP-AES (n=17); broad-coverage methodological reference |
| 23 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 5 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 5 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 5 sources added; narrative text revised |
<!-- END: hmi-page-history -->
