---
title: Meat and Poultry
type: ingredient
commodity: meat-and-poultry
aliases: [meat, poultry, chicken, turkey, beef, pork, game]
category: terrestrial-animal
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 50], p95_ppb: 700, confidence: medium, n_studies: 8, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [1, 30], p95_ppb: 230, confidence: medium, n_studies: 6, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [0, 20], p95_ppb: 310, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [50, 250], p95_ppb: null, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [300, 600], p95_ppb: null, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 30], p95_ppb: null, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [10, 70], p95_ppb: null, confidence: low, n_studies: 4, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [0, 50], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [animal-feed, organ-content, processing, mixed-meal-formulation]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/organ-meats]]"]
used_in_products: ["[[products/meat-and-poultry-purees]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]"]
audience: [regulator, educator, consumer, app]
sources: 24
wiki_doi: null
updated: 2026-05-16
---

# Meat And Poultry

Chekri et al. 2019 reports meat/fish-based ready-to-eat infant meals as a combined category, so this source cannot isolate meat and poultry from fish-containing baby foods. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=8 | 1–50 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| Cd | n=6 | 1–30 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 1–30 | medium | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/meligy2024-camel-meat-toxic-elements\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| tHg | n=5 | 0–20 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| Ni | n=5 | 50–250 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/eccles2024-polar-bear-metals-traditional-food\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Al | n=3 | 300–600 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Cr | n=4 | 10–70 | low | [[sources/meligy2024-camel-meat-toxic-elements\|1]], [[sources/kamaly2023-egypt-poultry-metals\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| Sn | n=2 | 0–50 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending meat- and poultry-specific occurrence extraction._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | LY Pb, Cd, Cr, Cu occurrence in Imported frozen meat (chicken, beef, lamb, processed products) from Tripoli commercial markets; origins: Brazil, USA, Jordan, Spain, Australia;... (n=30) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies); meat/fish baby foods group Pb and Cd occurrence context across multiple countries; not separated by species |
| 3 | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports | 2025 | Peer-reviewed | EG/BR/IN tHg, Pb, Cd occurrence in 315 imported frozen bovine samples (105 muscle, 105 liver, 105 kidney) collected from local markets in Sohag governorate,... (n=315) |
| 4 | [[sources/eccles2024-polar-bear-metals-traditional-food\|Eccles et al. 2024]]. *Non-invasive biomonitoring of polar bear feces can be used to estimate concentrations of metals of concern in traditional food*, PLOS ONE | 2024 | Peer-reviewed | tAs, Cd, Pb, tHg, MeHg, and Ni in muscle, liver, and fat of 49 polar bears harvested across six Canadian Arctic subpopulations (2016–2019); MeHg in muscle (mean 0.43 µg/g dw) relevant to Inuit traditional-food exposure |
| 5 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Ni occurrence in meat-and-poultry within 2,628-sample Zhejiang Province survey (2018–2019) across six food categories; children 0–6 reached THQ 1.078 under high-consumption assumptions |
| 6 | [[sources/meligy2024-camel-meat-toxic-elements\|Meligy et al. 2024]]. *Concentrations of toxic and essential elements in camel (Camelus dromedarius) tissues: muscle, offal, hair, and blood from Saudi Arabia*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Co, Cr, Mn, Se, and tAs by GFAAS in 225 dromedary camel muscle, liver, kidney, spleen, lung, hair, and blood samples across three Saudi breeds; baseline occurrence dataset for a meat matrix with limited prior data |
| 7 | [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|Morshed et al. 2024]]. *Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed*, Research Square (preprint) | 2024 | Preprint | BD Pb, Cd, Cr occurrence in 24 day-old broiler chickens divided into 8 experimental groups (C0-C7; 3 birds per group) in Bangladesh and fed... (n=24) |
| 8 | [[sources/hampton2023-lead-game-meat-australia\|Hampton et al. 2023]]. *Lead contamination in Australian game meat*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Pb by radiography and ICP-MS in 133 Australian game-meat products (kangaroo, wallaby, venison, stubble quail); 53% of venison and 86% of quail exceeded the 0.1 mg/kg Australian threshold — ammunition fragmentation as a Pb pathway |
| 9 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 10 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Al, Cd, Pb, Ni, and Cr by ICP-MS in 360 broiler chest, thigh, and liver samples across six Assiut commercial brands; Pb exceeded FAO/WHO limits in 94% of samples and EOS limits in 33% of chest muscle |
| 11 | [[sources/pain2023-lead-pheasant-dogfood-uk\|Pain et al. 2023]]. *Lead concentrations in commercial dogfood containing pheasant in the UK*, Ambio | 2023 | Peer-reviewed | Pb in 193 UK commercial pheasant-based dogfood and human-grade pheasant samples; raw pheasant dogfood mean 220.99 ppm dw, 34× higher than human-grade pheasant; 77% exceeded EU feed MRL — ammunition-driven contamination |
| 12 | [[sources/berky2022-wildgame-lead-peru\|Berky et al. 2022]]. *Risk of lead exposure from wild game consumption from cross-sectional studies in Madre de Dios, Peru*, Lancet Regional Health – Americas | 2022 | Peer-reviewed | Pb and tHg in 307 Peruvian Amazon residents across 26 indigenous and rural communities; wild-game consumption independently raised BLL by 1.41 µg/dL, with ~500 µg Pb per single meal against a 20 µg/day baseline |
| 13 | [[sources/prevendar-crnic2022-rasa-coal-birds-htes\|Prevendar et al. 2022]]. *Enhanced levels of hazardous trace elements (Cd, Cu, Pb, Se, Zn) in bird tissues in the context of environmental pollution by Raša coal*, Rudarsko-geološko-naftni zbornik (The Mining-Geology-Petroleum Engineering Bulletin) | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 14 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby-food products purchased Dec 2020 – Sep 2021 on the Polish market for children aged... (n=397) |
| 15 | [[sources/gholami-ahangaran2021-chicken-meat-cadmium-zinc-silver\|Majid et al. 2021]]. *The Measurement of Cadmium, Zinc and Silver in Chicken Meat in Isfahan Province, Iran*, Iranian Journal of Toxicology | 2021 | Peer-reviewed | IR Cd, Zn, Ag occurrence in Chicken breast, thigh, heart, and liver samples from meat markets in Isfahan Province, Iran (n=100) |
| 16 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for meat and fish infant foods (as-consumed); provides Sn and Sb data not in FDA TDS; French regulatory diet context |
| 17 | [[sources/rudy2019-hunted-animals-toxic-elements-review\|Rudy et al. 2019]]. *Content of toxic elements in tissues of hunted animals on the basis of research results of 2003–2017*, Medycyna Weterynaryjna | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 18 | [[sources/gasparik2017-wild-boar-slovakia-metals\|Gašparík et al. 2017]]. *Levels of Metals in Kidney, Liver, and Muscle Tissue and their Influence on the Fitness for the Consumption of Wild Boar from Western Slovakia*, Biological Trace Element Research | 2017 | Peer-reviewed | SK/EU Cd, Pb, tHg, Cu, Zn, Co occurrence in 40 wild boars (Sus scrofa; 20 females, 20 males) hunter-collected in November–December 2009 and 2010 from the Nitra... (n=40) |
| 19 | [[sources/joyce2016-bush-meat-cooking-ghana\|Joyce et al. 2016]]. *Effects of Different Cooking Methods on Heavy Metals Level in Fresh and Smoked Game Meat*, Journal of Food Processing & Technology | 2016 | Peer-reviewed | *[awaiting synthesis]* |
| 20 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 21 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
| 22 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for meat and poultry commodities; see [[ingredients/beef]], [[ingredients/poultry]], [[ingredients/pork-bacon]], [[ingredients/ham]], [[ingredients/turkey]], [[ingredients/organ-meats]], [[ingredients/chicken]], [[ingredients/ground-beef]], [[ingredients/lamb-chop]], [[ingredients/pork-chop]], and related per-species pages for commodity-specific synthesis. Across the meat-and-poultry category, the dominant pathway is dietary exposure of the live animal: feed, water, and mineral supplements deliver trace metals that deposit in muscle, organs, bone, and fat. Lifetime exposure accumulates particularly in liver and kidney (the dominant Cd-storage organs) and in bone (the dominant Pb-storage tissue).

The category-wide HMTc panel concerns are Pb and Cd, with organ meats (a subcategory across species) carrying substantially higher Cd than muscle. Methylmercury is not a meat-and-poultry concern because terrestrial herbivores do not bioaccumulate methylmercury through their plant-and-grain diet.

## Processing effects

Meat-and-poultry processing (slaughter, dressing, aging, cutting, packaging) does not change muscle and organ metal content meaningfully. Cooking concentrates metals per unit cooked mass through water loss but does not reduce total per-serving load. Removing skin and trimming fat have small effects on Pb (modest reduction when skin is the deposition surface) and negligible effects on Cd (which is bound in muscle and organ tissue).

Curing, smoking, and drying (processed meats: jerky, biltong, deli meats, sausage, bacon) concentrate metals per unit dry mass through water loss; added curing salts can contribute trace Pb depending on salt source. Canning introduces standard tinplate-Sn-migration considerations.

See per-species ingredient pages for commodity-specific processing detail.

## Ingredient-derivative risk

Meat-derived derivatives that concentrate metals: bone broth (Pb from bone tissue), meat-organ supplements (Cd-rich organ-derivative supplements sold in health-food channels), meat-protein powders and isolates (per-mass-concentrated relative to source meat), gelatin and collagen products (rendered from connective tissue and bone; trace Pb depending on source-animal exposure).

Processed meats (deli meat, sausage, hot dogs, bacon, jerky, canned meat products) inherit the source-meat metal load plus contributions from cure salts, binders, and packaging.

Pet-food and animal-feed derivatives of meat and poultry have their own regulatory framework (FDA CVM, AAFCO) and are addressed under [[products/pet-food-dry-kibble|Cat 17 Pet Foods]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention category-wide. Single-source-region sourcing from documented low-Pb production areas, supplier-feed verification, and avoidance of high-Cd organ-sourcing reduce per-product Pb and Cd. Feed-source specification (testing of cattle/poultry/swine feed for Pb and Cd) is the operational supplier-side intervention.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the feed-grain and forage stage: feed-grain sourcing from low-Cd growing regions, water-source Pb testing for production water, avoidance of contaminated pasture for grazing animals (post-mining-area restoration, urban-adjacent grazing on Pb-deposition soils).

**Processing levers** ([[mitigation/processing]]) are limited for fresh meat. Visible-fat trimming has small Pb effect where fat is the deposition site. Skin removal reduces poultry per-serving Pb where skin is the deposition surface. Cooking-method choice does not reduce total exposure.

**Formulation levers** ([[mitigation/formulation]]) include muscle-only vs muscle-plus-organ formulation in processed meats and ingredient-percentage adjustment in compounded products. Organ-meat reduction in mixed-meat products substantially reduces per-serving Cd.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and Cd testing on incoming carcasses, particularly for processed products and infant-marketed meat purees. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the standard Sn-migration consideration for canned meat products and food-contact-substance specifications for plastic and aluminum-foil packaging of fresh meat.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in muscle meat (bovine, swine, ovine, equine, poultry) and in offal (liver, kidney). Offal MLs are higher than muscle MLs reflecting the organ-accumulation pattern.
- Codex Alimentarius CXS 193-1995 — sets Cd and Pb MLs for meat and offal, distinguishing muscle from organ; species-specific values apply where they exist.
- USDA/FSIS National Residue Program monitors meat and poultry for chemical residues including heavy metals; no binding action levels for Pb or Cd specifically but ongoing surveillance.
- FDA does not maintain a binding action level for Pb or Cd in meat or poultry.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to meat and poultry sold in California; serving-based screen governs.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [c67513a](https://github.com/paleofoundation/heavymetalindex/commit/c67513a) | 2026-05-28 | autonomy: commit pending daemon writes from 10:46Z tick (sync-source-counts + heal-gaps scaffolds + sprint-status) |
<!-- END: hmi-page-history -->
