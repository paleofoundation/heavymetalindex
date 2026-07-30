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
---

# Cabbage

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 6/10 HMTc analytes, total n=17 | labeled data-gaps: iAs, Sn |
| D2 Regional coverage | OK | 13 jurisdictions, top NG 18% | — |
| D3 Anthropogenic evidence | GAP | 3 irrigation-water + 1 soil + 1 agricultural-soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 3 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs THIN, tHg THIN, Ni THIN, Al THIN, Cr POOLABLE | tAs: needs 1 more study(ies); tHg: needs 2 more study(ies); Ni: needs 1 more study(ies); Al: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 5 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming cabbage: islam2007-dietary-toxicity-vegetables-food-crops |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr; pairing 0 paired, 7 single, 0 unpaired | tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 1 more study(ies); Al: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.50, legal-defensibility 0.25, scale 0.25 | spread 0.75 — starved: legal-defensibility |

<!-- /hmi-completeness-scorecard -->


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

<!-- BEGIN: hmi-page-references -->
## References

The 5 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Armand R, Rafati L, Mohammadi H, and Armand N (2026). *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*. Scientific Reports. [https://doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w). Peer-reviewed, A-tier. [[sources/armand2026-lettuce-cabbage-behbahan|Source record]]
2. Islam EU, Yang XE, He ZL, and Mahmood Q (2007). *Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops*. Journal of Zhejiang University Science B. [https://doi.org/10.1631/jzus.2007.B0001](https://doi.org/10.1631/jzus.2007.B0001). Review, B-tier. [[sources/islam2007-dietary-toxicity-vegetables-food-crops|Source record]]
3. Okonofua ES, Komolafe AS, Emeribe CN, Ogbomida ET, and Butu AW (2024). *Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits*. Earth Sciences Pakistan. [https://doi.org/10.26480/esp.02.2024.134.139](https://doi.org/10.26480/esp.02.2024.134.139). Peer-reviewed, B-tier. [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria|Source record]]
4. Reczajska W, Jedrzejczak R, and Szteke B (2005). *Determination of Chromium Content of Food and Beverages of Plant Origin*. Polish Journal of Food and Nutrition Sciences. Peer-reviewed, A-tier. [[sources/reczajska2005-chromium-plant-foods-poland|Source record]]
5. See SN, Pak Dek MS, Sanny M, Shukri R, and Ramli NS (2025). *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*. Pertanika Journal of Tropical Agricultural Science. [https://doi.org/10.47836/pjtas.48.1.12](https://doi.org/10.47836/pjtas.48.1.12). Peer-reviewed, B-tier. [[sources/see2025-malaysia-leafy-vegetables-icp-oes|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand et al. 2026]]. *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*, Scientific Reports | 2026 | Peer-reviewed | Iranian Behbahan cabbage Pb-Cd-Cr-Ni Monte Carlo probabilistic risk model (n=40) |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 3 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 4 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Malaysian Selangor 5-metal leafy-vegetable panel including cabbage (n=12) |
| 5 | [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|Okonofua et al. 2024]]. *Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits*, Earth Sciences Pakistan | 2024 | Peer-reviewed | Nigerian unreclaimed mining-pit water-cabbage-tilapia bioaccumulation Pb-Cd-tHg-Ni (n=48) |
| 6 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 7 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 8 | [[sources/orosun2023-vegetables-nigeria-ptms\|Orosun et al. 2023]]. *Potentially toxic metals in irrigation water, soil, and vegetables and their health risks using Monte Carlo models*, Scientific Reports | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb occurrence in irrigation water, soils, spinach, and cabbage in Nigeria (n=not reported in abstract) |
| 9 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 10 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 11 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 12 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 13 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 14 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 15 | [[sources/fonge2021-cabbage-carrot-metals-cameroon\|Fonge et al. 2021]]. *An assessment of heavy metal exposure risk associated with consumption of cabbage and carrot grown in a tropical Savannah region*, Sustainable Environment | 2021 | Peer-reviewed | CM tAs, Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Triplicate edible-portion samples from cabbage-head farms and carrot-root farms at four Santa sites in the North West Region,... (n=24) |
| 16 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 17 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 18 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 19 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Polish chromium in 272 plant-food samples including cabbage |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [84e1f50c3](https://github.com/paleofoundation/heavymetalindex/commit/84e1f50c3) | 2026-05-16 | major | 5 sources added; contamination-profile values revised; 12 sections added |
<!-- END: hmi-page-history -->
