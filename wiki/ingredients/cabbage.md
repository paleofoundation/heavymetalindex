---
type: ingredient
commodity: cabbage
title: "Cabbage"
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
    confidence: medium
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
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Cabbage

Cabbage (Brassica oleracea var. capitata) is the head-forming leafy vegetable consumed fresh as slaw, fermented as sauerkraut and kimchi, and cooked in countless preparations. As a brassica, cabbage sits at the middle of the vegetable-category heavy-metals risk distribution: lower than open-leaf greens (spinach, kale) because the compact head structure reduces surface-area-to-volume ratio and atmospheric Pb deposition, but a moderate Cd accumulator because brassicas as a family tend to take up cadmium efficiently from soil. The current corpus loads 4 sources directly routed to cabbage plus broader vegetable surveys reachable via the routing layer: Armand 2026 Behbahan Iran probabilistic lettuce-and-cabbage risk assessment (n=40, [[sources/armand2026-lettuce-cabbage-behbahan]]), Islam 2007 dietary toxicity in vegetables and food crops covering cabbage cross-context ([[sources/islam2007-dietary-toxicity-vegetables-food-crops]]), Okonofua 2024 Nigerian mining-pits cabbage-fish-water bioaccumulation work (n=48, [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria]]), Reczajska 2005 Polish 272-sample chromium in plant foods including cabbage ([[sources/reczajska2005-chromium-plant-foods-poland]]), See 2025 Malaysian leafy-vegetable ICP-OES panel (n=12, [[sources/see2025-malaysia-leafy-vegetables-icp-oes]]).

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
| Ni | n=2 | 50–800 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|2]] |
| Al | n=1 | — | — | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|1]] |
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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand et al. 2026]]. *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*, Scientific Reports | 2026 | Peer-reviewed | Iranian Behbahan cabbage Pb-Cd-Cr-Ni Monte Carlo probabilistic risk model (n=40) |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Malaysian Selangor 5-metal leafy-vegetable panel including cabbage (n=12) |
| 4 | [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|Okonofua et al. 2024]]. *Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits*, Earth Sciences Pakistan | 2024 | Peer-reviewed | Nigerian unreclaimed mining-pit water-cabbage-tilapia bioaccumulation Pb-Cd-tHg-Ni (n=48) |
| 5 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Polish chromium in 272 plant-food samples including cabbage |
<!-- END: hmi-source-legend -->
