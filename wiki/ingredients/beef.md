---
title: "Beef"
type: ingredient
commodity: beef
label: "Beef"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [3, 100]
    p95_ppb: 700
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 312
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 200]
    p95_ppb: 15000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 500]
    p95_ppb: 500
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 50]
    p95_ppb: 83
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
  tAs:
    status: populated
    typical_ppb: [2, 10]
    p95_ppb: 50
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 7
---

# Beef

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 3–100 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/altalib2025-frozen-meat-libya\|3]] |
| Cd | n=7 | 1–30 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/altalib2025-frozen-meat-libya\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 2–10 | medium | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/mohamed2023-heavy-metals-beef-egypt\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| tHg | n=5 | 0–50 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|3]] |
| Ni | n=3 | 50–200 | medium | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/kasozi2021-uganda-beef-metals\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Al | n=2 | 200–500 | low | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Cr | n=4 | 10–50 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]], [[sources/kasozi2021-uganda-beef-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | LY Pb, Cd, Cr occurrence in Imported frozen meat (chicken, beef, lamb, processed products) from Tripoli commercial markets; origins: Brazil, USA, Jordan, Spain, Australia;... (n=30) |
| 2 | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports | 2025 | Peer-reviewed | EG/BR/IN tHg, Pb, Cd occurrence in Imported frozen bovine muscle, liver, and kidney (105 each) collected from local markets in Sohag governorate, Egypt; origin... (n=315) |
| 3 | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports (in press 2025) | 2025 | Peer-reviewed | EG/BR/IN Pb, Cd, tHg occurrence in 315 imported frozen bovine samples (105 muscle + 105 liver + 105 kidney) from local markets in Sohag... (n=315) |
| 4 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 40 beef baby purees from Spanish retail by ICP-MS; multi-metal occurrence data for beef as complementary-food matrix |
| 5 | [[sources/mohamed2023-heavy-metals-beef-egypt\|Mohamed et al. 2023]]. *Detection and health risk assessment of toxic heavy metals in chilled and frozen meat collected from Sharkia province in Egypt* | 2023 | Peer-reviewed | EG Pb, tHg, tAs, Cd occurrence in 15 chilled and 15 frozen beef samples from marketing stores, Sharkia Governorate, Egypt (n=30) |
| 6 | [[sources/kasozi2021-uganda-beef-metals\|Kasozi et al. 2021]]. *Descriptive Analysis of Heavy Metals Content of Beef From Eastern Uganda and Their Safety for Public Consumption*, Frontiers in Nutrition | 2021 | Peer-reviewed | UG Pb, Cd, Ni, Cr occurrence in Beef samples from butchery points of sale in Soroti district, Eastern Uganda (collected December 2019 - March 2020) (n=40) |
| 7 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | GB Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, Sb occurrence in 3312 retail food samples from 24 UK locations, combined into 138 food categories and 28 food groups, all... (n=3312) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Beef (the muscle, organs, and tallow of Bos taurus cattle) inherits heavy metals through the dietary and environmental exposure of the live animal. Cattle graze on forage and consume feed grains that themselves carry soil-derived Pb, Cd, and other metals; cattle drink water that may carry trace metals; cattle in some regions are exposed to mineral supplements (some of which contain trace Pb and Cd as impurities). Through these intake pathways, metals deposit in muscle tissue, organs, bone, and fat at different rates. Cadmium concentrates particularly in liver and kidney through the lifetime of the animal; lead deposits in bone tissue with slower turnover. Muscle tissue carries lower steady-state metal concentrations than organs.

The HMTc panel concerns for beef are dominantly Pb and Cd, with secondary concerns for the organ-meat subcategory (where Cd and Pb are higher). Mercury in beef is generally low because cattle do not bioaccumulate methylmercury through their grass-and-grain diet. Nickel, aluminum, chromium, and tin in beef are typically at background levels reflecting cattle-feed and environmental-exposure baselines.

## Ranges by source, region, and variety

Per-cut variation: Muscle cuts (steak, roast, ground beef from muscle) typically carry the lowest Cd. Organ meats — particularly liver and kidney — carry 5-20× the Cd of muscle from the same animal because organ tissue is the lifelong Cd-accumulation site. Bone-in cuts and bone broth carry varying Pb depending on the animal's lead exposure history. Tallow and rendered fat carry distinct profiles for fat-soluble contaminants.

Geographic and production-system variation: Cattle raised in regions with historic mining, industrial Pb deposition, or contaminated forage carry higher Pb than cattle from cleaner regions. Grass-fed cattle in regions with low-Pb soil and clean forage carry lower Pb than feedlot cattle fed contaminated grain or organ-supplemented rations. [[sources/rabeey2025-bovine-hg-pb-cd-egypt|Rabeey 2025]] documents the Egyptian bovine muscle and organ Pb/Cd/Hg profile; [[sources/altalib2025-frozen-meat-libya|Altalib 2025]] documents frozen meat Pb/Cd in Libya. [[sources/hoha2014-pork-pb-cd-cu-zn-romania|Hoha 2014]] (porcine but parallel mechanism) documents the regional profile for European production.

Age effects: Older animals carry higher Cd in organs than younger animals because lifetime exposure accumulates. Veal (very young cattle) therefore carries less organ-Cd than adult beef.

## Processing effects

Beef processing (slaughter, butchering, aging, packaging) does not change the metal content of muscle and organ tissue meaningfully. The metals are bound within the tissue protein and lipid fractions and are not removed by cutting, aging, or trimming.

Cooking effects are minor for the HMTc panel metals. Roasting, grilling, or boiling does not change total Pb or Cd content in muscle, though water loss during cooking concentrates the metals per unit cooked mass (the total per serving is approximately conserved). Boiling and discarding cooking liquid removes a small fraction of water-soluble metals.

Curing (salt-curing, brining), smoking, and drying (jerky, biltong) concentrate metals per unit dry mass through water loss; smoked beef can also carry trace deposition from smoke-source contamination depending on wood and smoking technique. Processed meats (sausage, deli meat, hot dogs, bacon) inherit the source-meat metal load with additional contributions from added salt, nitrite curing salts, and binders. The processed-meat fraction of the corpus is documented separately at [[ingredients/processed-meats]] (if applicable).

## Ingredient-derivative risk

Beef derivative products with elevated metal concentrations: bone broth (Pb from bone tissue), beef liver and beef-organ-based supplements (organ Cd, sold as desiccated organ supplements in some health-food channels), beef tallow used in cosmetics or food applications. Beef gelatin (rendered from connective tissue and bone) typically carries lower per-mass metal than the source bone because of the rendering and filtration steps but can carry trace Pb. Beef-protein powders inherit the source-meat metal load with processing-step adjustments.

Bone-in canned beef products (corned beef, canned beef stew) inherit the source-meat metal load plus any tinplate-migration Sn from the can.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-source-region sourcing from documented low-Pb cattle-production areas (the geographic-segmented sourcing decision), grass-fed sourcing where feed-grain-Pb is a documented concern, and avoidance of organ-meat sourcing from regions with high-Pb-exposure cattle reduce per-product Pb. Documented-feed-source specification (testing of feed for Pb and Cd) is the operational supplier-side intervention.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the feed-grain stage. Feed-grain sourcing from low-Cd growing regions, water-supply Pb testing, and avoidance of contaminated pasture (post-mining-area restoration, urban-adjacent grazing on Pb-deposition soils) operate at the farm level.

**Processing levers** ([[mitigation/processing]]) for beef are limited. Trimming visible fat does not reduce Pb or Cd meaningfully. Cooking-method choice does not reduce total exposure. Removing organ meat from a recipe (using muscle only) reduces organ-Cd contribution.

**Formulation levers** ([[mitigation/formulation]]) include muscle-only vs muscle-plus-organ formulation in processed products, and ingredient-percentage adjustment in mixed-meat products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and Cd testing on incoming carcasses or finished cuts, particularly for products targeted at infants, young children, or pregnancy populations. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned beef and the food-contact-substance considerations for plastic and aluminum-foil packaging of fresh and frozen beef.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in muscle meat of bovine animals and in offal (liver, kidney). Offal has separate, higher Cd MLs reflecting the organ-accumulation pattern.
- Codex Alimentarius CXS 193-1995 — sets Cd and Pb MLs for meat and offal, distinguishing muscle from organ.
- USDA/FSIS Pathogen Reduction and HACCP Systems regulation covers pathogen safety; metal-content surveillance is conducted under the FSIS National Residue Program. FSIS does not maintain a binding Pb or Cd action level for beef beef but does monitor.
- FDA does not maintain a binding action level for Pb or Cd in beef.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to beef sold in California; the serving-based screen governs.


