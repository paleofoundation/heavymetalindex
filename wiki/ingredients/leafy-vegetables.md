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
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
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
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
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
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [4000, 35000]
    p95_ppb: 45000
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: low
    n_studies: 6
    last_reviewed: 2026-05-15
  Sn:
    status: populated
    typical_ppb: [0, 40]
    p95_ppb: 210
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
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
wiki_doi: null
updated: 2026-05-15
sources: 100
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 14
---

# Leafy Vegetables

## Overview

Leafy vegetables — spinach, lettuce, kale, chard, amaranth, cabbage, mustard greens, and dozens of regionally specific leafy greens consumed as salad, cooked greens, or supplement powder — sit at the top of the vegetable-category heavy-metals risk profile. Three converging factors produce this elevated risk: high surface-area-to-volume ratio per gram, which makes leafy tissue an effective collector of atmospheric Pb and Cd deposition; leaf physiology that translocates soluble soil metals like Cd, Cr, and Ni into leaf tissue at higher rates than fruit or root vegetables; and the common siting of urban and peri-urban leafy-vegetable production near roadside and industrial sources of atmospheric contamination. The current corpus loads 14 peer-reviewed sources spanning Iran, South Africa, Bangladesh, Iraq, Romania, Hong Kong, Malawi, China, Burkina Faso, and Maryland (US), covering both subsistence and commercial production systems.

## Why this commodity accumulates heavy metals

The leafy vegetable contamination problem combines plant biology with siting and water-source factors. Leaf tissue is plant-machinery for photosynthesis: it has high transpiration rates that pull water and dissolved solutes from the root zone up through the stems into the leaves. Cadmium, nickel, and chromium move readily through this pathway because they are sufficiently soluble in the root zone to be co-transported with water. Lead is less mobile in plant tissue but enters leafy vegetables through a different route: direct atmospheric deposition onto the leaf surface, which is particularly relevant for leafy crops grown near roadways, downwind of industrial facilities, or in urban settings with elevated airborne particulate Pb. The Maryland urban-rural kale comparison ([[sources/kim2024-metals-kale-urban-rural-maryland]]) is the canonical demonstration of the urban-leaf-Pb-elevation pattern; the Johannesburg roadside-vs-store comparison ([[sources/adhikari2024-leafy-vegetables-johannesburg]]) demonstrates the same effect across a different urban context. Irrigation water source matters separately: production systems using wastewater or industrial-corridor groundwater accumulate elevated Pb, Cd, and Cr in the soil over time and in the crop directly. The Bangladesh multi-industry-zone study ([[sources/ahmed2019-irrigation-water-bangladesh-seasonal]]) and the Blantyre wastewater-vegetable study ([[sources/chiutula2025-wastewater-vegetables-malawi]]) both demonstrate this water-source pathway as the dominant contributor in their study systems. Surface-area-to-volume ratio explains the within-leafy-vegetable variance: spinach and amaranth (high SA/V) consistently carry higher Cd than iceberg lettuce (low SA/V) grown in the same soil.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=13 | 10–600 | high | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|3]] |
| Cd | n=12 | 20–400 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|3]] |
| iAs | n=3 | 1–50 | low | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/cfs2012-hktds-inorganic-arsenic\|2]] |
| tAs | n=7 | 5–200 | medium | [[sources/malone2024-community-garden-soils-us\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|3]] |
| tHg | n=2 | 0–20 | low | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|1]], [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|2]] |
| Ni | n=6 | 50–1500 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/han2024-nickel-zhejiang-china\|2]], [[sources/ali2024-leek-microbial-metals-iraq\|3]] |
| Al | n=4 | 4000–35000 | medium | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|1]], [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|2]], [[sources/cfs2013-hktds-metallic-contaminants\|3]] |
| Cr | n=6 | 10–500 | low | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/sultana2022-dhaka-root-leafy-vegetables\|3]] |
| Sn | n=2 | 0–40 | low | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|1]], [[sources/cfs2013-hktds-metallic-contaminants\|2]] |
| U | data gap | — | — | — |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/kim2024-metals-kale-urban-rural-maryland|Nutrients and non-essential metals in darkibor kale grown at urban and rural farms: a pilot study]]<span class="hmi-ref-meta">Kim BF, Lupolt SN, Santo RE, Bachman G, Zhu X, Yang T, et al. · PLOS ONE · 2024 · [doi.org/10.1371/journal.pone.0296840](https://doi.org/10.1371/journal.pone.0296840)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/adhikari2024-leafy-vegetables-johannesburg|Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa]]<span class="hmi-ref-meta">Adhikari S and Struwig M · 2024 · [doi.org/10.1007/s10661-023-12283-6](https://doi.org/10.1007/s10661-023-12283-6)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/ahmed2019-irrigation-water-bangladesh-seasonal|Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh]]<span class="hmi-ref-meta">Ahmed M, Matsumoto M, Ozaki A, Van Thinh N, and Kurosawa K · Water · 2019 · [doi.org/10.3390/w11030583](https://doi.org/10.3390/w11030583)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/chiutula2025-wastewater-vegetables-malawi|Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi]]<span class="hmi-ref-meta">Chiutula C, Mtewa AG, Abraham A, Mvula RLS, Maluwa A, Eregno FE, et al. · International Journal of Environmental Research and Public Health · 2025 · [doi.org/10.3390/ijerph22111614](https://doi.org/10.3390/ijerph22111614)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/armand2026-lettuce-cabbage-behbahan|Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation]]<span class="hmi-ref-meta">Armand R, Rafati L, Mohammadi H, and Armand N · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/cfs2012-hktds-inorganic-arsenic|The First Hong Kong Total Diet Study: Inorganic Arsenic]]<span class="hmi-ref-meta">Centre for Food Safety FEHD HKSAR · Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region · 2012 · [www.cfs.gov.hk](https://www.cfs.gov.hk/english/programme/programme_rdss/programme_rdss_tds_report.html)</span><span class="hmi-ref-tag">Government</span>
7. [[sources/cfs2013-hktds-metallic-contaminants|The First Hong Kong Total Diet Study: Metallic Contaminants]]<span class="hmi-ref-meta">Centre for Food Safety (Hong Kong) · Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region · 2013 · [www.cfs.gov.hk](https://www.cfs.gov.hk/english/programme/programme_firm/programme_firm_tds.html)</span><span class="hmi-ref-tag">Government</span>
8. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/guo2024-cadmium-bioaccessibility-pak-choi|Effects of wollastonite and phosphate treatments on cadmium bioaccessibility and health risk in pak choi (Brassica rapa ssp. chinensis) grown in contaminated soil]]<span class="hmi-ref-meta">Guo Y, Zhao X, Zhang J, Yang H, Chu G, Zhang C, et al. · Frontiers in Nutrition · 2024 · [doi.org/10.3389/fnut.2024.1337996](https://doi.org/10.3389/fnut.2024.1337996)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand et al. 2026]]. *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*, Scientific Reports | 2026 | Peer-reviewed | Iranian Behbahan lettuce-and-cabbage Pb, Cd, Cr, Ni with Monte Carlo probabilistic risk modeling |
| 2 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | international/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 3 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 4 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | Sn occurrence in leafy vegetables (n=673 fresh vegetables) among 2,014 Zhejiang Province samples; fresh leafy vegetables consistently low Sn relative to canned categories, with THQ well below 1 |
| 5 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 6 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | Chongqing cumulative-dietary multi-residue panel index broader-context |
| 7 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 8 | [[sources/jurkovic2025-flooded-chard-metals\|Jurkovic et al. 2025]]. *Heavy Metals and Microbiological Assessment of the Soil-Plant System of Flooded Areas Applied on Chard (Beta vulgaris)*, ACS Omega | 2025 | Peer-reviewed | BA Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Soil, sludge, and chard samples from flooded and control areas in central Bosnia and Herzegovina after autumn 2024... (n=21) |
| 9 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Al, Cd, Cr, Pb, and Fe by ICP-OES in 12 samples of cabbage, mustard, spinach, and pak choi from Pasar Borong Selangor wet market; Cd/Cr/Cu/Pb all below LOD, Al and Fe within FAO/WHO limits |
| 10 | [[sources/ali2024-leek-microbial-metals-iraq\|Ali 2024]]. *Contamination Alert: Microbial and Heavy Metal Levels in Green Vegetables*, Procedia of Engineering and Life Science | 2024 | Peer-reviewed | Iraqi leek and green-vegetable Pb, Ni, Zn, Cu occurrence in 100 samples |
| 11 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 12 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 13 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Zhejiang nickel in vegetable soil and tissue across multiple species |
| 14 | [[sources/malone2024-community-garden-soils-us\|Malone et al. 2024]]. *Trace Metal Contamination in Community Garden Soils across the United States*, Sustainability | 2024 | Review | Integrative review of Pb, tAs, and Cd in 52 US community-garden soil studies; Pb the primary urban-soil contaminant (e.g., NYC mean 600 ppm, max 8,912) — supports leafy-vegetable soil-uptake pathway and environmental-justice framing |
| 15 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 16 | [[sources/zhang2024-lettuce-cadmium-greenhouse-amendments\|Zhang et al. 2024]]. *Impact of Physical Interventions, Phosphorus Fertilization, and the Utilization of Soil Amendments on the Absorption of Cadmium by Lettuce Grown in a Solar-Powered Greenhouse*, Biology | 2024 | Peer-reviewed | CN Cd occurrence in One-cycle randomized-block solar-greenhouse field trial in Nanying Village, Wuquan Town, Yangling District, Shaanxi Province, China; each treatment had... (n=3) |
| 17 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Iranian Babol-city Pb and Cd in 32 vegetable samples with health-risk assessment |
| 18 | [[sources/kharkwal2023-cooked-beans-vegetables-metals\|Kharkwal et al. 2023]]. *Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India*, Food Science & Nutrition | 2023 | Peer-reviewed | IN tAs, Cd, Pb, tHg occurrence in Cooked beans and cooked vegetable preparations collected from 150 selected households across 30 urban and rural locations in... (n=150) |
| 19 | [[sources/liu2023-yuyao-soil-crop-metals\|Liu et al. 2023]]. *Enrichment Characteristics and Health Risk Assessment of Heavy Metals in Soil-Crop Systems*, KSCE Journal of Civil Engineering | 2023 | Peer-reviewed | CN tAs, Cr, Cu, Pb, Cd, tHg occurrence in Paired crop and soil samples from Yuyao City, Zhejiang Province: 88 rice/root-soil pairs, 68 bayberry/topsoil pairs, and 60... (n=216) |
| 20 | [[sources/martin-leon2023-canary-leafy-vegetables-elements\|Martin-Leon et al. 2023]]. *Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands*, Toxics | 2023 | Peer-reviewed | ES Cd, tAs, Pb, Al, Cr, Ni, V, Sr occurrence in Two hundred forty-four ready-to-eat leafy-vegetable samples from the Canary Islands, including spinach, watercress, chard, lettuces, arugula, and lamb's... (n=244) |
| 21 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 22 | [[sources/orosun2023-vegetables-nigeria-ptms\|Orosun et al. 2023]]. *Potentially toxic metals in irrigation water, soil, and vegetables and their health risks using Monte Carlo models*, Scientific Reports | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb occurrence in Soil, irrigation water, and farm-grown vegetables (cabbage and an Amaranthus species labelled spinach) sampled in March 2021 along... (n=31 composite soil samples (from 155 individual samples); 12 composite cabbage samples (from 60 heads, Brassica oleracea); 19 composite leafy-green samples (from 95 plants labelled Amaranthus hybridus); 30 irrigation-water samples) |
| 23 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 24 | [[sources/sadhya2023-india-food-heavy-metals-regulation\|Sadhya et al. 2023]]. *Regulation in India of Heavy Metals in Food Items: A Critical Analysis*, Environmental Analysis & Ecology Studies | 2023 | Review | IN Pb, Cu, tAs, Sn, Cd, tHg, MeHg, Cr, Ni, Se, Sb, Ba, Co, Fe, Li, Mn, Zn occurrence in Legal review of the Indian regulatory framework governing heavy metals in food and food packaging. No primary measurements.... |
| 25 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 26 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | Romanian leafy-vegetable Pb, Cd, tAs, Zn with vinegar-vs-water washing intervention experiment |
| 27 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 28 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 29 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | Pb, Cd, Cr, and Ni in mustard, cabbage, spinach, coriander, and mint from Kawran Bazar, Dhaka, across four seasonal phases; leafy vegetables exceeded FAO/WHO MPLs for Cr/Cd/Ni with four of five at HI >1 |
| 30 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 31 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | Burkina Faso arsenic-irrigated vegetable matrix |
| 32 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 33 | [[sources/fonge2021-cabbage-carrot-metals-cameroon\|Fonge et al. 2021]]. *An assessment of heavy metal exposure risk associated with consumption of cabbage and carrot grown in a tropical Savannah region*, Sustainable Environment | 2021 | Peer-reviewed | CM tAs, Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Triplicate edible-portion samples from cabbage-head farms and carrot-root farms at four Santa sites in the North West Region,... (n=24) |
| 34 | [[sources/wang2021-houttuynia-mercury-china\|Wang et al. 2021]]. *Mercury accumulation in vegetable Houttuynia cordata Thunb. from two different geological areas in southwest China and implications for human consumption*, Scientific Reports 11:1470 | 2021 | Peer-reviewed | CN tHg, MeHg occurrence in Edible Houttuynia cordata tissues collected from a mercury mining area and a non-mining comparison area in southwest China. (n=Houttuynia cordata plants and rhizosphere soils from Danzhai mercury-mining and Zhijin non-mining areas in Guizhou, China; tissue-level n varies by site/tissue table.) |
| 35 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | NG/CN/TZ Pb, Cd, iAs, tAs, tHg, Cr, Ni occurrence in Narrative review with no primary measurements; six-page invited contribution to a Current Opinion in Toxicology themed issue on... |
| 36 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 37 | [[sources/jiang2020-henan-battery-factory-crops-metals\|Jiang et al. 2020]]. *Compound health risk assessment of cumulative heavy metal exposure: A case study of a village near a battery factory in Henan Province, China*, Environmental Science: Processes & Impacts | 2020 | Peer-reviewed | CN tHg, tAs, Ni, Pb, Cd, Cr, Cu, Zn occurrence in Locally produced wheat, corn, and vegetables collected in SZD village near a battery factory in Xinxiang, Henan Province,... |
| 38 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 39 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed et al. 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh*, Water | 2019 | Peer-reviewed | Bangladesh industry-zone irrigation-water vegetable Pb, Cd, tAs, Cr with seasonal (wet-vs-dry) comparison |
| 40 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 41 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 42 | [[sources/souri2019-leafy-vegetables-growth-stage-metals\|Souri et al. 2019]]. *Plant growth stage influences heavy metal accumulation in leafy vegetables of garden cress and sweet basil*, Chemical and Biological Technologies in Agriculture | 2019 | Peer-reviewed | IR Cd, Pb, Ni, tAs, Cr, Co, Cu, Mn, Zn occurrence in Garden cress and sweet basil from five wastewater-irrigated farms in Shahre Rey, south of Tehran, Iran; field samples... (n=5) |
| 43 | [[sources/stark2019-east-bay-wild-edible-greens\|Stark et al. 2019]]. *Open-source food: Nutrition, toxicology, and availability of wild edible greens in the East Bay*, PLOS ONE | 2019 | Peer-reviewed | US Cd, Pb occurrence in Urban East Bay foraging survey with soil testing at 28 Richmond and Oakland addresses plus rinsed wild edible-greens... (n=28) |
| 44 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 45 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 46 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 47 | [[sources/naser2018-leafy-vegetables-bangladesh-metals\|Naser et al. 2018]]. *Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution*, Bangladesh Journal of Agricultural Research | 2018 | Peer-reviewed | BD Pb, Cd, Ni, Co, Cr occurrence in spinach, red amaranth, and amaranth from Gazipur industrial and non-industrial areas, Bangladesh (n=three leafy vegetables across three pollution levels) |
| 48 | [[sources/ahmed2017-bangladesh-vegetable-arsenic\|Ahmed et al. 2017]]. *Arsenic Contamination of Water-Soil-Crop System in an Industrial Area of Bangladesh*, International Journal of Environment | 2017 | Peer-reviewed | BD tAs occurrence in Vegetables grown in a Gazipur industrial-area water-soil-crop system in Bangladesh (n=27) |
| 49 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | tHg in leafy vegetables (lettuce, amaranth, water spinach) and paired soils within 1–10 km of two Chinese coal-fired power plants; 79% of vegetable samples exceeded GB 2762-2012 (10 µg/kg fw), driven by atmospheric Hg deposition not soil uptake |
| 50 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 51 | [[sources/pan2016-zhejiang-vegetables-metals\|X-D et al. 2016]]. *Levels and potential health risk of heavy metals in marketed vegetables in Zhejiang, China*, Scientific Reports | 2016 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Ni, Pb occurrence in Five thousand seven hundred eighty-five vegetable samples of 28 species collected from Zhejiang province, China, from March to... (n=5785) |
| 52 | [[sources/sharma2016-spinach-wastewater-metals\|Sharma et al. 2016]]. *Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater*, SpringerPlus | 2016 | Peer-reviewed | IN Cd, Pb, Cu, Co, Fe occurrence in Edible portions of 12 common vegetable types from three Amritsar, Punjab agricultural sites, collected in triplicate per vegetable/site. (n=108) |
| 53 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | Soil-to-plant transfer mechanisms for Pb, Cd, tAs, tHg, Ni, Al, Cr, Zn, and Cu across leafy and root vegetables; documents the leaf > root > stem > tuber > grain bioaccumulation hierarchy that justifies leafy-vegetable priority |
| 54 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 55 | [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids\|Zemanova et al. 2015]]. *Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach*, Plant, Soil and Environment | 2015 | Peer-reviewed | CZ Cd occurrence in Spinach cv. Matador grown in a controlled pot experiment in Prague with four Cd soil-dose treatments and four... (n=96) |
| 56 | [[sources/cherfi2014-algeria-fruits-vegetables-metals\|Cherfi et al. 2014]]. *Food survey: Levels and potential health risks of chromium, lead, zinc and copper content in fruits and vegetables consumed in Algeria*, Food and Chemical Toxicology | 2014 | Peer-reviewed | DZ Cr, Pb, Zn, Cu occurrence in Two fruit and thirteen vegetable foodstuffs purchased from two wholesale markets supplying Boumerdes, Algeria, during the first two... (n=15) |
| 57 | [[sources/huang2014-zhejiang-vegetables-heavy-metals\|Huang et al. 2014]]. *Heavy metals in vegetables and the health risk to population in Zhejiang, China*, Food Control | 2014 | Peer-reviewed | CN tAs, Cd, tHg, Pb occurrence in Three hundred forty-three vegetable samples of 11 usual types collected in Zhejiang, China, from March to October 2012. (n=343) |
| 58 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | Hong Kong TDS broader metallic-contaminants panel in the consumed-vegetable food group |
| 59 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | Hong Kong TDS iAs and tAs in leafy vegetables; n=600 sample-level representative-diet baseline |
| 60 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 61 | [[sources/elbagermi2012-misurata-fruits-vegetables-metals\|Elbagermi et al. 2012]]. *Monitoring of Heavy Metal Content in Fruits and Vegetables Collected from Production and Market Sites in the Misurata Area of Libya*, ISRN Analytical Chemistry | 2012 | Peer-reviewed | LY Pb, Cd, Zn, Cu, Co, Ni occurrence in Fruit and vegetable produce purchased from several local suppliers and markets in Misurata City, Libya, during 2010. (n=250) |
| 62 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 63 | [[sources/islam2007-dietary-toxicity-vegetables-food-crops\|Islam EU 2007]]. *Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops*, Journal of Zhejiang University Science B | 2007 | Review | Cd, Pb, Cr, tAs, and Al uptake in Chinese cabbage, winter greens, pakchoi, and celery from Zhejiang pot experiments; derives soil-extractable Cd safety threshold of 0.489–0.869 mg/kg for safe leafy-vegetable production |
| 64 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 65 | [[sources/zhou2000-china-vegetable-heavy-metals-review\|Zhou et al. 2000]]. *Heavy Metal Contamination in Vegetables and Their Control in China*, Food Reviews International | 2000 | Peer-reviewed | CN Pb, Cd, tHg, tAs, Cr, Ni, Cu, Zn occurrence in Secondary review of previously published Chinese city surveys of vegetables and some grains. Tables 2-11 reproduce values from... |
| 66 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 7 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 7 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
