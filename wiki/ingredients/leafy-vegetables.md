---
type: ingredient
commodity: leafy-vegetables
title: "Leafy Vegetables"
label: "Leafy Vegetables"
aliases: [leafy-greens, salad-greens]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 600]
    p95_ppb: 1500
    confidence: medium
    n_studies: 12
    last_reviewed: 2026-05-15
  Cd:
    status: populated
    typical_ppb: [20, 400]
    p95_ppb: 900
    confidence: medium
    n_studies: 12
    last_reviewed: 2026-05-15
  iAs:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-15
  tAs:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: null
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-15
  tHg:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-15
  Ni:
    status: populated
    typical_ppb: [50, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-15
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-15
  Cr:
    status: populated
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: low
    n_studies: 6
    last_reviewed: 2026-05-15
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
drivers: [soil-uptake, atmospheric-deposition, irrigation-water, surface-area-to-volume, leaf-physiology]
lower_risk_variants: ["[[ingredients/iceberg-lettuce]]"]
higher_risk_variants: ["[[ingredients/spinach]]", "[[ingredients/kale]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-15
sources: 14
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 14
---

# Leafy Vegetables

Leafy vegetables — spinach, lettuce, kale, chard, amaranth, cabbage, mustard greens, and dozens of regionally specific leafy greens consumed as salad, cooked greens, or supplement powder — sit at the top of the vegetable-category heavy-metals risk profile. Three converging factors produce this elevated risk: high surface-area-to-volume ratio per gram, which makes leafy tissue an effective collector of atmospheric Pb and Cd deposition; leaf physiology that translocates soluble soil metals like Cd, Cr, and Ni into leaf tissue at higher rates than fruit or root vegetables; and the common siting of urban and peri-urban leafy-vegetable production near roadside and industrial sources of atmospheric contamination. The current corpus loads 14 peer-reviewed sources spanning Iran, South Africa, Bangladesh, Iraq, Romania, Hong Kong, Malawi, China, Burkina Faso, and Maryland (US), covering both subsistence and commercial production systems.

## Why this commodity accumulates heavy metals

The leafy vegetable contamination problem combines plant biology with siting and water-source factors. Leaf tissue is plant-machinery for photosynthesis: it has high transpiration rates that pull water and dissolved solutes from the root zone up through the stems into the leaves. Cadmium, nickel, and chromium move readily through this pathway because they are sufficiently soluble in the root zone to be co-transported with water. Lead is less mobile in plant tissue but enters leafy vegetables through a different route: direct atmospheric deposition onto the leaf surface, which is particularly relevant for leafy crops grown near roadways, downwind of industrial facilities, or in urban settings with elevated airborne particulate Pb. The Maryland urban-rural kale comparison ([[sources/kim2024-metals-kale-urban-rural-maryland]]) is the canonical demonstration of the urban-leaf-Pb-elevation pattern; the Johannesburg roadside-vs-store comparison ([[sources/adhikari2024-leafy-vegetables-johannesburg]]) demonstrates the same effect across a different urban context. Irrigation water source matters separately: production systems using wastewater or industrial-corridor groundwater accumulate elevated Pb, Cd, and Cr in the soil over time and in the crop directly. The Bangladesh multi-industry-zone study ([[sources/ahmed2019-irrigation-water-bangladesh-seasonal]]) and the Blantyre wastewater-vegetable study ([[sources/chiutula2025-wastewater-vegetables-malawi]]) both demonstrate this water-source pathway as the dominant contributor in their study systems. Surface-area-to-volume ratio explains the within-leafy-vegetable variance: spinach and amaranth (high SA/V) consistently carry higher Cd than iceberg lettuce (low SA/V) grown in the same soil.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=12      | 10–600  | 1,500   | medium | [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/kim2024-metals-kale-urban-rural-maryland\|14]] |
| Cd  | n=12      | 20–400  | 900     | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|5]], [[sources/guo2024-cadmium-bioaccessibility-pak-choi\|12]] |
| iAs | n=3       | 1–50    | —       | low    | [[sources/cfs2012-hktds-inorganic-arsenic\|7]] |
| tAs | n=5       | 5–200   | —       | low    | [[sources/cfs2013-hktds-metallic-contaminants\|8]] |
| tHg | n=2       | 0–20    | —       | low    | [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]] |
| Ni  | n=5       | 50–1500 | —       | low    | [[sources/ali2024-leek-microbial-metals-iraq\|4]], [[sources/han2024-nickel-zhejiang-china\|13]] |
| Al  | n=1       | —       | —       | —      | [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]] |
| Cr  | n=6       | 10–500  | —       | low    | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|3]] |
| Sn  | data gap  | —       | —       | —      | — |
| U   | data gap  | —       | —       | —      | — |

## Ranges by source, region, and variety

The loaded corpus spans urban-vs-rural comparisons, roadside-vs-store comparisons, wastewater-irrigated-vs-clean-water comparisons, and seasonal (wet-vs-dry season) comparisons. The urban-and-roadside studies consistently show 2-3× Pb elevation relative to rural or large-store baseline, with the Johannesburg work measuring this gap directly across 20 paired samples ([[sources/adhikari2024-leafy-vegetables-johannesburg]]). The Iranian Behbahan study reported lettuce and cabbage Pb and Cd above the EU 2023/915 fresh-vegetable maximum levels in a probabilistic Monte Carlo risk model ([[sources/armand2026-lettuce-cabbage-behbahan]]). Hong Kong's Total Diet Studies (the inorganic-arsenic study and the broader metallic-contaminants study, [[sources/cfs2012-hktds-inorganic-arsenic]] and [[sources/cfs2013-hktds-metallic-contaminants]]) provide the largest n (n=600 samples for the iAs study) and the most representative-distribution view; Hong Kong consistently shows leafy vegetables carrying detectable Pb, Cd, and tAs but generally at levels compliant with applicable caps. Variety-level breakdowns by individual leafy species (spinach vs lettuce vs kale vs amaranth) are present in the corpus but not yet consolidated at this aggregate page; see the dedicated species pages where they exist.

## Processing effects

Washing leafy vegetables before consumption removes surface particulate Pb (the atmospheric-deposition pathway) but does not affect internalised Cd, Cr, or Ni. The Romanian vinegar-wash work demonstrated that vinegar rinses are not meaningfully more effective than water at removing internalised metals — they do remove surface contamination at roughly the same rate as plain water ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing]]). Discarding outer leaves before consumption reduces per-serving Pb meaningfully when those outer leaves are the primary atmospheric-deposition target. Cooking by boiling leaches a fraction of internalised Cd and Cr into the cooking water; discarding the boiling water reduces per-serving exposure. Drying for powder applications concentrates metals on a dry-weight basis (the dry-spinach-powder problem); supplement-grade leafy-vegetable powders carry metals at concentrations of 5-10× the fresh-weight value. Fermentation (sauerkraut, kimchi) does not appreciably alter the metal load relative to the fresh starting material.

## Ingredient-derivative risk

Fresh leafy vegetables consumed whole represent the baseline. Pre-washed bagged salads have undergone surface decontamination but inherit any internalised metal load. Frozen leafy vegetables (typically blanched before freezing) lose some Cd and Cr to the blanch water. Leafy-vegetable purees and smoothies concentrate atmospheric-deposition Pb if outer leaves were not removed before processing. Dehydrated leafy-vegetable powders concentrate all metals on a dry-weight basis. Leafy-vegetable juice (cold-pressed green juice) extracts soluble metals into the liquid; per-serving exposure tracks the fresh-weight concentration of the parent leaf at the juice-yield ratio. Wild-foraged leafy vegetables (foraged dandelion greens, nettle, wild lettuce) carry an additional siting-dependent risk because foraging sites are often roadside, near old industrial activity, or in soils with unknown contamination history.

## Mitigation options

### Sourcing levers

Specifying source-location away from roadsides (≥ 200 m setback), away from industrial corridors, and away from wastewater-irrigated production systems is the highest-impact lever for the leafy-vegetable category as a whole. The Johannesburg, Bangladesh, and Malawi studies all demonstrate measurable Pb and Cd reduction when sourcing shifts from these settings to controlled cropland with verified clean-water irrigation. Certified-organic production reduces some agronomic inputs that contribute Cd (phosphate fertilisers with Cd impurity) but does not address atmospheric deposition.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading. Pak-choi cadmium-bioaccessibility work ([[sources/guo2024-cadmium-bioaccessibility-pak-choi]]) demonstrates that the Cd that does accumulate in leafy tissue is largely bioaccessible in human digestion, so reducing accumulation is preferable to relying on poor bioaccessibility as a safety margin. Irrigation source: switch from wastewater or untreated industrial-corridor groundwater to municipal-treated or rain-harvested water. Phytoremediation companion crops (planting hyperaccumulator non-edible companion crops to draw metals out of soil between leafy-vegetable cycles) is documented but not widely commercial.

### Processing levers

Discard outer leaves before sale or processing for atmospheric-deposition-Pb reduction. For powdered or dehydrated products, characterise the parent fresh-weight metal load and adjust the inclusion ratio accordingly. Washing reduces surface Pb but not internalised metals. Steam-blanching followed by quick-cool reduces Cd and Cr modestly through the blanch-water pathway.

### Formulation levers

For blended-greens supplement powders, characterise per-species fresh-weight metal load and weight the blend toward lower-accumulator species (iceberg-type lettuces, head cabbage) and away from higher-accumulator species (spinach, amaranth, kale grown in elevated-Cd soils). For finished-food formulations, leafy vegetables can be diluted with lower-metal vegetable groups (root vegetables, alliums) when the load is the limiting factor.

### Testing and QC levers

Lot-level ICP-MS testing for Pb, Cd, Cr, Ni, and tAs with detection floors ≤ 10 ppb is appropriate for commodity leafy-vegetable buyers. For powder applications, dry-weight testing with conversion back to fresh-weight equivalent is the standard approach. The seasonal-variance work ([[sources/ahmed2019-irrigation-water-bangladesh-seasonal]]) shows dry-season concentrations can run 1.5-2× wet-season values in irrigation-water-driven systems; QC sampling frequency should reflect the seasonal pattern of the source region.

### Packaging and storage levers

Packaging is not the primary metal-load pathway for fresh leafy vegetables; storage in standard food-grade packaging does not measurably alter the load. For pre-washed and bagged product, the wash-water quality matters as a separate (small) load pathway.

## Regulatory limits that apply

The Codex Alimentarius General Standard (CXS 193-1995) applies the general leafy-vegetable Pb maximum of 0.30 mg/kg fresh weight and the general Cd maximum of 0.20 mg/kg fresh weight to most leafy species, with spinach-specific Cd at 0.20 mg/kg under the broader leafy umbrella in some interpretations. The EU Regulation 2023/915 applies tighter limits than Codex: 0.30 mg/kg Pb for leafy vegetables and fresh herbs, 0.20 mg/kg Cd for leafy vegetables and stems excluding celery and salsify. The FDA Closer to Zero program addresses leafy-vegetable contamination indirectly through the infant and toddler food coverage but does not set fresh-vegetable action levels. The probabilistic risk modeling in the Behbahan study found cumulative-dietary-intake exposure metrics above thresholds of concern under reasonable-worst-case consumption assumptions ([[sources/armand2026-lettuce-cabbage-behbahan]]), supporting the case for tighter retail-level enforcement of the existing Codex and EU caps.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour 2023]]. *Heavy metals in vegetables grown in Babol city, Iran* | 2023 | Peer-reviewed | Iranian Babol-city Pb and Cd in 32 vegetable samples with health-risk assessment |
| 2 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: roadside markets vs large stores Johannesburg* | 2024 | Peer-reviewed | Roadside-vs-large-store leafy vegetable 10-metal panel in Johannesburg; demonstrates urban roadside-Pb elevation |
| 3 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables Bangladesh* | 2019 | Peer-reviewed | Bangladesh industry-zone irrigation-water vegetable Pb, Cd, tAs, Cr with seasonal (wet-vs-dry) comparison |
| 4 | [[sources/ali2024-leek-microbial-metals-iraq\|Ali 2024]]. *Microbial and Heavy Metal Levels in Green Vegetables Iraq* | 2024 | Peer-reviewed | Iraqi leek and green-vegetable Pb, Ni, Zn, Cu occurrence in 100 samples |
| 5 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand 2026]]. *Probabilistic carcinogenic and health risk assessment Behbahan Iran lettuce and cabbage* | 2026 | Peer-reviewed | Iranian Behbahan lettuce-and-cabbage Pb, Cd, Cr, Ni with Monte Carlo probabilistic risk modeling |
| 6 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora 2022]]. *Heavy Metal Residues Fruits Vegetables Galati Romania* | 2022 | Peer-reviewed | Romanian leafy-vegetable Pb, Cd, tAs, Zn with vinegar-vs-water washing intervention experiment |
| 7 | [[sources/cfs2012-hktds-inorganic-arsenic\|CFS 2012]]. *First Hong Kong Total Diet Study: Inorganic Arsenic* | 2012 | Government dataset | Hong Kong TDS iAs and tAs in leafy vegetables; n=600 sample-level representative-diet baseline |
| 8 | [[sources/cfs2013-hktds-metallic-contaminants\|CFS 2013]]. *Hong Kong TDS Metallic Contaminants* | 2013 | Government dataset | Hong Kong TDS broader metallic-contaminants panel in the consumed-vegetable food group |
| 9 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula 2025]]. *Wastewater Vegetables Blantyre Malawi* | 2025 | Peer-reviewed | Blantyre wastewater-receiving-soil vegetable Cd, Cr, Pb across exotic and indigenous species |
| 10 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen 2025]]. *Cumulative dietary heavy metals Chongqing MRPI* | 2025 | Peer-reviewed | Chongqing cumulative-dietary multi-residue panel index broader-context |
| 11 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot 2021]]. *Arsenic irrigated vegetables Burkina Faso* | 2021 | Peer-reviewed | Burkina Faso arsenic-irrigated vegetable matrix |
| 12 | [[sources/guo2024-cadmium-bioaccessibility-pak-choi\|Guo 2024]]. *Cadmium bioaccessibility pak choi* | 2024 | Peer-reviewed | Pak-choi cadmium bioaccessibility in simulated digestion; leafy-tissue Cd is largely bioaccessible |
| 13 | [[sources/han2024-nickel-zhejiang-china\|Han 2024]]. *Nickel Zhejiang China* | 2024 | Peer-reviewed | Zhejiang nickel in vegetable soil and tissue across multiple species |
| 14 | [[sources/kim2024-metals-kale-urban-rural-maryland\|Kim 2024]]. *Metals kale urban-rural Maryland* | 2024 | Peer-reviewed | Maryland kale urban-vs-rural Pb and Cd elevation comparison; demonstrates urban-leaf-Pb deposition pattern |
<!-- END: hmi-source-legend -->
