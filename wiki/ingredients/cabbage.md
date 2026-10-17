---
type: ingredient
commodity: cabbage
title: "Cabbage"
dek: "A head forming leafy vegetable consumed fresh, cooked or fermented. Explore the evidence on metal uptake, irrigation, regional variation and processing."
rail_highlights:
  - label: Key distinction
    text: Cabbage non detections are not measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
label: "Cabbage"
aliases: [brassica-oleracea-capitata, green-cabbage, red-cabbage, savoy-cabbage, pak-choi, pakchoi, chinese-cabbage, brassica-vegetables]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 250
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
    typical_ppb: [5, 50]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 800]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [10, 300]
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
drivers: [soil-uptake, brassica-cadmium-accumulator, irrigation-water, atmospheric-deposition-low]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 23
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
hero_image: /static/heroes/brassicas-cabbage-broccoli-cauliflower.webp
quick_read:
  summary: "Cabbage metals reflect root uptake and outer-leaf exposure, with preparation affecting surface contamination and soluble fractions."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]], lead, chromium, nickel, and total mercury are reported"
    - label: Main drivers
      text: "root uptake from soil, contaminated growing [[ingredients/water|water]], and atmospheric deposition on outer leaves"
    - label: Practical framing
      text: "outer-leaf removal and washing target surface contamination; boiling and discarding water can reduce soluble metals"
hero_image_alt: "Cabbage, broccoli, Brussels sprouts and cauliflower illustrating cabbage ingredient context."
---

# Cabbage

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Cabbage metals reflect root uptake and outer-leaf exposure, with preparation affecting surface contamination and soluble fractions.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a>, lead, chromium, nickel, and total mercury are reported</li>
    <li><strong>Main drivers:</strong> root uptake from soil, contaminated growing <a href="/ingredients/water">water</a>, and atmospheric deposition on outer leaves</li>
    <li><strong>Practical framing:</strong> outer-leaf removal and washing target surface contamination; boiling and discarding water can reduce soluble metals</li>
  </ul>
</div>

This page draws on 5 peer-reviewed studies and 1 other cited source. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

Cabbage (Brassica oleracea var. capitata) is the head-forming leafy vegetable consumed fresh as slaw, fermented as sauerkraut and kimchi, and cooked in countless preparations. As a brassica, cabbage sits at the middle of the vegetable-category heavy-metals risk distribution: lower than open-leaf greens (spinach, kale) because the compact head structure reduces surface-area-to-volume ratio and atmospheric Pb deposition, but a moderate Cd accumulator because brassicas as a family tend to take up cadmium efficiently from soil. The current corpus loads 4 sources directly routed to cabbage plus broader vegetable surveys: Armand 2026 Behbahan Iran probabilistic lettuce-and-cabbage risk assessment (n=40, [[sources/armand2026-lettuce-cabbage-behbahan]]), Islam 2007 dietary toxicity in vegetables and food crops covering cabbage cross-context ([[sources/islam2007-dietary-toxicity-vegetables-food-crops]]), Okonofua 2024 Nigerian mining-pits cabbage-fish-water bioaccumulation work (n=48, [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria]]), Reczajska 2005 Polish 272-sample chromium in plant foods including cabbage ([[sources/reczajska2005-chromium-plant-foods-poland]]), See 2025 Malaysian leafy-vegetable ICP-OES panel (n=12, [[sources/see2025-malaysia-leafy-vegetables-icp-oes]]).

## Why this commodity accumulates heavy metals

Cabbage takes metals from soil predominantly through root uptake, with brassicas (Brassica oleracea, B. rapa, B. juncea, B. napus) known as moderate-to-high cadmium accumulators relative to other vegetable families. The compact head structure reduces surface-area-to-volume ratio relative to open-leaf greens, which means atmospheric Pb deposition is a smaller contributor than for spinach or kale grown in the same soil. The outer-leaf-vs-inner-head distinction matters: outer leaves are exposed to atmospheric deposition and carry slightly more Pb, while inner head tissue reflects primarily root-uptake. The Armand 2026 Iranian Behbahan probabilistic risk modeling work covered both lettuce and cabbage and found Pb, Cd, Cr, Ni at cumulative-exposure levels of concern under reasonable-worst-case consumption assumptions ([[sources/armand2026-lettuce-cabbage-behbahan]]). The Okonofua 2024 Nigerian mining-pits work demonstrated bioaccumulation of Pb, Cd, tHg, Ni from contaminated mining-area water into cabbage tissue and the associated tilapia fish, with concentrations in both reaching levels of regulatory concern ([[sources/okonofua2024-mining-pits-cabbage-fish-nigeria]]). The Reczajska 2005 Polish 272-sample chromium-in-plant-foods work provides the strongest single dataset for Cr-in-cabbage specifically ([[sources/reczajska2005-chromium-plant-foods-poland]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 10–200 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|3]] |
| Cd | n=4 | 10–100 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 5–50 | low | — |
| tHg | n=1 | 0–10 | low | [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|1]] |
| Ni | n=2 | 50–800 | low | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|2]] |
| Al | n=1 | — | — | — |
| Cr | n=3 | 10–300 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/reczajska2005-chromium-plant-foods-poland\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus covers cabbage from Iran (Behbahan, n=40 across lettuce-and-cabbage), Nigeria (Okonofua mining-pits, n=48 across water-vegetable-fish), Poland (Reczajska Cr panel, n=272 plant foods including cabbage), Malaysia (See 12-sample multi-leafy panel), and the Islam 2007 cross-jurisdiction (CN, UK, US) dietary-toxicity work. Variety-level pattern: green cabbage, red cabbage, savoy cabbage, and napa cabbage have similar metal profiles within commodity-grade product. The Brassica genus relationship means cabbage shares cadmium-accumulation patterns with broccoli, cauliflower, Brussels sprouts, kale, kohlrabi, and bok choy; the loaded corpus does not provide a clean cabbage-vs-other-brassica comparison, but the general pattern is consistent. Origin: temperate European and North American commodity cabbage carries lower baseline Cd than brassica grown on tropical soils with elevated background Cd or on mining-influenced soils.

## Processing effects

Removing outer leaves before consumption reduces per-serving Pb modestly (the outer leaves are the primary atmospheric-deposition target). Washing whole heads removes surface particulate but does not affect internalised metals. Cooking by boiling leaches Cd and Cr into the cooking water; discarding the cooking water reduces per-serving exposure. Sauerkraut and kimchi (fermented cabbage products) carry the parent cabbage's metal load with negligible processing-driven change; fermentation does not concentrate or dilute metals on a per-mass basis. Drying for dehydrated-cabbage applications (used in instant soups and ration packs) concentrates metals on a dry-weight basis by 8-10×. Pickling in vinegar inherits the cabbage's metal load plus any vinegar-derived contributions; see [[ingredients/vinegar]] for the vinegar baseline.

## Ingredient-derivative risk

Fresh whole-head cabbage represents the baseline. Pre-cut bagged coleslaw and shredded cabbage carry the same per-mass load. Sauerkraut and kimchi inherit the parent cabbage's metal load. Cabbage soup and prepared-soup products carry the cabbage's load at the inclusion ratio plus any other-ingredient contributions. Cabbage juice (cold-pressed) extracts soluble metals; per-serving exposure tracks fresh-weight concentration at the juice-yield ratio. Dehydrated cabbage powder (rare, used in some supplement and instant-soup applications) concentrates metals on a dry-weight basis.

## Mitigation options

### Sourcing levers

Source from production regions and operations with documented soil-and-water screening, away from mining corridors and industrial-corridor settings. The Okonofua 2024 Nigerian mining-pits work documents the magnitude of mining-source contamination directly ([[sources/okonofua2024-mining-pits-cabbage-fish-nigeria]]).

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoid phosphate fertilisers with elevated Cd impurity. The Brassica cadmium-uptake pathway is well-documented; agronomic interventions reduce the upstream load. Irrigation source: switch from contaminated industrial-corridor groundwater to municipal-treated or rain-harvested water.

### Processing levers

Remove outer leaves before sale or processing. Boil-and-discard-water reduces Cd-and-Cr modestly. Fermentation does not change the metal load. Drying concentrates metals on a dry-weight basis.

### Formulation levers

For finished products using cabbage as an ingredient, the inclusion ratio caps per-serving exposure. Substitution between brassica varieties does not meaningfully change the Pb-Cd profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb, Cd, Cr, and Ni at detection floors ≤ 10 ppb is appropriate for commodity cabbage buyers. For dehydrated or powder applications, dry-weight testing with fresh-weight-equivalent conversion is standard.

### Packaging and storage levers

Standard food-grade packaging does not contribute to the cabbage metal load. For fermented cabbage products (sauerkraut, kimchi), the fermentation vessel material matters; glass or food-grade plastic do not contribute metals, ceramic-glaze vessels with unverified coatings can extract Pb.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the brassica-vegetables Pb maximum of 0.30 mg/kg fresh weight (or the general leafy-vegetable limit where cabbage is classified as leafy) and Cd at 0.10 mg/kg fresh weight (general vegetables). The EU Regulation 2023/915 applies Pb 0.10 mg/kg for "brassica vegetables, leafy vegetables and fresh herbs" and Cd 0.050 mg/kg for the same category — substantially tighter than Codex. The FDA does not set a cabbage-specific action level. The Armand 2026 Behbahan probabilistic risk modeling found cumulative-intake metrics for Iranian lettuce-and-cabbage above thresholds of concern under reasonable-worst-case consumption assumptions, consistent with the broader leafy-vegetable category ([[sources/armand2026-lettuce-cabbage-behbahan]]).

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 406: Cabbage, raw | tAs | 27 | 2 | 3.6–6.6 | 3 |
| 406: Cabbage, raw | Cd | 27 | 27 | 1.8–14 | 1 |
| 406: Cabbage, raw | Cr | 27 | 0 | ND in all composites | 50 |
| 406: Cabbage, raw | Pb | 27 | 0 | ND in all composites | 4 |
| 406: Cabbage, raw | tHg | 27 | 0 | ND in all composites | 1 |
| 406: Cabbage, raw | Ni | 27 | 10 | 40–130 | 40 |
| 406: Cabbage, raw | U | 27 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/armand2026-lettuce-cabbage-behbahan|Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation]]<span class="hmi-ref-meta">Armand R, Rafati L, Mohammadi H, and Armand N · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/islam2007-dietary-toxicity-vegetables-food-crops|Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops]]<span class="hmi-ref-meta">Islam EU, Yang XE, He ZL, and Mahmood Q · Journal of Zhejiang University Science B · 2007 · [doi.org/10.1631/jzus.2007.B0001](https://doi.org/10.1631/jzus.2007.B0001)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria|Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits]]<span class="hmi-ref-meta">Okonofua ES, Komolafe AS, Emeribe CN, Ogbomida ET, and Butu AW · Earth Sciences Pakistan · 2024 · [doi.org/10.26480/esp.02.2024.134.139](https://doi.org/10.26480/esp.02.2024.134.139)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/reczajska2005-chromium-plant-foods-poland|Determination of Chromium Content of Food and Beverages of Plant Origin]]<span class="hmi-ref-meta">Reczajska W, Jedrzejczak R, and Szteke B · Polish Journal of Food and Nutrition Sciences · 2005</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/see2025-malaysia-leafy-vegetables-icp-oes|Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia]]<span class="hmi-ref-meta">See SN, Pak Dek MS, Sanny M, Shukri R, and Ramli NS · Pertanika Journal of Tropical Agricultural Science · 2025 · [doi.org/10.47836/pjtas.48.1.12](https://doi.org/10.47836/pjtas.48.1.12)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
7. [[sources/gergen2012-banat-mining-vegetable-pca|Application of principal component analysis in the pollution assessment with heavy metals of vegetable food chain in the old mining areas]]<span class="hmi-ref-meta">Iosif Gergen and Monica Harmanescu · Chemistry Central Journal6:156 · 2012 · [doi.org/10.1186/1752-153x-6-156](https://doi.org/10.1186/1752-153x-6-156)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand et al. 2026]]. *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*, Scientific Reports | 2026 | Peer-reviewed | Iranian Behbahan cabbage Pb-Cd-Cr-Ni Monte Carlo probabilistic risk model (n=40) |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 3 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Malaysian Selangor 5-metal leafy-vegetable panel including cabbage (n=12) |
| 4 | [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|Okonofua et al. 2024]]. *Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits*, Earth Sciences Pakistan | 2024 | Peer-reviewed | Nigerian unreclaimed mining-pit water-cabbage-tilapia bioaccumulation Pb-Cd-tHg-Ni (n=48) |
| 5 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 6 | [[sources/orosun2023-vegetables-nigeria-ptms\|Orosun et al. 2023]]. *Potentially toxic metals in irrigation water, soil, and vegetables and their health risks using Monte Carlo models*, Scientific Reports | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb occurrence in irrigation water, soils, spinach, and cabbage in Nigeria (n=not reported in abstract) |
| 7 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 8 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 9 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 10 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 11 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 12 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 13 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 14 | [[sources/fonge2021-cabbage-carrot-metals-cameroon\|Fonge et al. 2021]]. *An assessment of heavy metal exposure risk associated with consumption of cabbage and carrot grown in a tropical Savannah region*, Sustainable Environment | 2021 | Peer-reviewed | CM tAs, Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Triplicate edible-portion samples from cabbage-head farms and carrot-root farms at four Santa sites in the North West Region,... (n=24) |
| 15 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 16 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 17 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 18 | [[sources/gergen2012-banat-mining-vegetable-pca\|Gergen et al. 2012]]. *Application of principal component analysis in the pollution assessment with heavy metals of vegetable food chain in the old mining areas*, Chemistry Central Journal6:156 | 2012 | Peer-reviewed | RO Fe, Mn, Zn, Cu, Ni, Cd, Pb occurrence in Three Banat areas: Ruschita,MoldovaNoua and Borlova reference;27soil composites from10grabs each;27vegetable/tissue-region summaries reused from Harmanescu2011. |
| 19 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Polish chromium in 272 plant-food samples including cabbage |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | major | 1 source added; 1 section added; narrative text revised |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 4 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 4 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->

## Additional geographic and remediation evidence

**[[sources/gergen2012-banat-mining-vegetable-pca|Iosif Gergen, 2012]].** Gergen and Harmanescu analyze metal contamination patterns across two historic Romanian mining areas and a reference area. Their PCA study reproduces vegetable concentrations and male hazard quotients from the earlier Harmanescu 2011 study; these remain linked secondary observations rather than additional independent samples. Supports legacy mining and tissue/region differences. Parsley root and leaf remain distinct, as do carrot root and leaf. The fresh-matter food table is retained with cohort linkage so that a reanalysis cannot inflate the evidence pool. Source THQ rankings are model results, not clinical outcomes.
