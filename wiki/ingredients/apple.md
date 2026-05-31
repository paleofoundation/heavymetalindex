---
title: "Apple"
type: ingredient
commodity: apple
label: "Apple"
aliases: [apples, apple-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 5.4]
    p95_ppb: 8.0
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 1410]
    p95_ppb: 1645
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [0, 16.4]
    p95_ppb: 20.8
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-juices-apple-containing, fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 22
---

# Apple

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Apples accumulate heavy metals through two primary routes. The first is soil uptake via the root system, which delivers Pb, Cd, and other metals from orchard soils into the vascular tissue and fruit flesh. Historical apple orchard management in North America and Europe relied heavily on lead arsenate as a pesticide from the late nineteenth century through the mid-twentieth century, leaving a legacy of elevated Pb and arsenic in orchard soils that persists in some regions decades after application ceased; this residual contamination continues to contribute trace levels of Pb and arsenic to fruit grown in those orchards. The second route is atmospheric deposition on fruit surfaces during the growing season, which can deposit Pb and other metals directly onto the skin; washing and peeling can remove a portion of this surface-deposited load.

Despite these exposure routes, apples are generally a low-risk commodity for heavy metals under current commercial production conditions. The FDA FY2018-FY2020 Total Diet Study data for raw apple with peel (TDS Food 78, n=27) show the majority of analytes at or below detection limits across most of the sample distribution ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic showed a p90 of 5.36 ppb and a maximum of 20 ppb, with the speciated iAs fraction awaiting a dedicated speciation source. The regulatory and media attention that apples have received in recent years has been driven primarily by cinnamon adulteration in fruit pouches rather than by contamination in the apple ingredient itself: the 2023 WanaBana lead poisoning cluster was attributable to cinnamon adulterated with lead chromate, not to the apple component ([[sources/napier2024-wanabana-lead-apple-cinnamon|Napier et al. 2024]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=9 | 0 | 0 | medium | [[sources/nasirpour2026-apple-wastewater-metals\|1]], [[sources/napier2024-wanabana-lead-apple-cinnamon\|2]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|3]] |
| Cd | n=7 | 0 | 0 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | n=4 | 0 | 0 | medium | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/houlihan2019-hbbf-whats-in-baby-food\|3]] |
| tAs | n=6 | 0–5.4 | 8.0 | medium | [[sources/nasirpour2026-apple-wastewater-metals\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|3]] |
| tHg | n=4 | 0 | 0 | medium | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/tan2022-carbon-dots-cd-hg-food\|3]] |
| Ni | n=3 | 0 | 0 | high | [[sources/nasirpour2026-apple-wastewater-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0–1410 | 1645 | medium | — |
| Cr | n=3 | 0 | 0 | high | [[sources/nasirpour2026-apple-wastewater-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Sn | n=1 | 0–16.4 | 20.8 | medium | — |
| U | n=2 | 0 | 0 | high | — |

## Routing

This node is linked from [[products/fruit-juices-apple-containing]], [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 78, "Apple, red, with peel, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Apple, red, with peel, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 55 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 5.36 | 8.04 | 20 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data (TDS Food 78, n=27) provide a US market distribution for raw apple with peel, representing composite samples purchased at retail across multiple US cities ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). These distributions show most analytes below detection in the majority of samples, with tAs reaching a p90 of 5.36 ppb and a maximum of 20 ppb. Polish market data from [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], which measured Cd and Pb across fresh, frozen, dried, and processed fruit and vegetable products (n=370 total), include apple data across processing states and provide a European comparison point; specific quantitative values for apple from that source remain in progress pending table extraction. Variety-level variation within apple cultivars is not resolved in the current corpus; synthesis of regional and varietal ranges will be updated when additional occurrence data are integrated.

## Processing effects

Processing state substantially affects the metal load delivered per serving. Washing fresh apples reduces surface-deposited Pb, though the magnitude of reduction depends on water pressure and duration; peeling removes the skin layer where atmospheric Pb deposition concentrates. Juicing transfers metals from the flesh into the juice fraction and leaves some in the pomace; the juice fraction retains the bulk of soluble metals. Concentration (for apple juice concentrate or apple cider concentrate) proportionally elevates metal concentrations relative to single-strength juice. Heat processing to produce applesauce does not remove metals; metals remain in the fruit matrix and the thermal process is not a remediation step. Drying, which concentrates all components by weight loss, elevates metal concentrations in dried apple relative to fresh apple on a per-gram basis. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]] examined fresh, frozen, dried, and processed forms and provides empirical data on processing-state differences, pending quantitative extraction.

## Ingredient-derivative risk

Apple as an ingredient produces several derivatives with distinct metal profiles. Juice and juice concentrate are the highest-concentration liquid derivatives because juicing extracts metals from multiple portions of fruit and concentration further elevates them. Apple purée and applesauce retain the full fruit matrix in cooked form with no concentration or dilution step and carry essentially the same metal load as cooked whole apple. Dried apple (rings, chips) is concentrated by weight loss and therefore carries a higher metal content per gram than fresh apple. Apple cider vinegar, produced by fermentation and acetic acid conversion of apple juice, is a further-downstream derivative; metals present in the juice carry through fermentation and into the vinegar, and the concentration may shift depending on process losses. Baby food purées based on apple are a critical exposure route for infants, as examined in the weaning food context by [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor et al. 2018]].

## Mitigation options

### Sourcing levers

Sourcing apples from orchards without a history of lead arsenate pesticide use reduces the risk of legacy soil Pb and arsenate contamination. Geographic provenance, particularly distinguishing modern commercial orchards from older heritage orchards in regions with documented pesticide legacy, is the primary sourcing variable. _No quantified data specifically for apple orchards on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing and peeling remove surface-deposited lead. Discarding pomace rather than reincorporating it into juice or concentrate reduces metal carryover from solids. _Quantified reduction factors for washing and peeling are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 establishes a maximum level for Pb in fresh fruit (including apples) of 0.10 mg/kg (100 ppb) and for Cd of 0.050 mg/kg (50 ppb), both on a wet weight basis as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). For apple juice and apple cider intended for infants and young children, EU law applies a stricter Pb ML of 0.020 mg/kg (20 ppb). In the United States, the FDA has established an action level for inorganic arsenic in apple juice at 10 ppb (see [[sources/fda2023-ias-apple-juice-guidance|FDA 2023]] and the apple-juice ingredient page). For apple as a whole fruit, no FDA commodity-specific action level for Pb or Cd exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]); the FDA's priority for Pb action levels in the Closer to Zero program targets processed infant and toddler food categories rather than raw whole fruit. No Codex Alimentarius ML for Pb in apples appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/nasirpour2026-apple-wastewater-metals\|Nasirpour et al. 2026]]. *The changes of heavy metals and some necessary elements in leaf, fruit and soil on apple cultivar golden delicious by applying urban treated wastewater*, BMC Plant Biology | 2026 | Peer-reviewed | IR As, Ni, Cr, Pb occurrence in Apple (Golden Delicious) irrigated with urban treated wastewater vs. clean water controls; field experiment 2021-2023, Iran |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 4 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | US/EC Pb occurrence in Routine pediatric blood lead surveillance in North Carolina + nationwide; ~500 cases identified nationally, 22 in NC. Lead... |
| 5 | [[sources/napier2024-wanabana-lead-apple-cinnamon\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Government report | CDC outbreak investigation linking childhood Pb poisoning to WanaBana apple cinnamon pouches; Pb source was cinnamon adulterated with lead chromate, not the apple ingredient itself |
| 6 | [[sources/childhood2023-childhood-lead-exposure-linked\|Napier et al. 2023]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, Morbidity and Mortality Weekly Report | 2023 | Peer-reviewed | US Pb, Cr-VI occurrence in Children aged 1–3 years in North Carolina with confirmed blood lead levels ≥5 µg/dL linked to apple cinnamon... (n=22) |
| 7 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions (Seoul, Gyeonggi-do, Chungcheong-do, Jeolla-do, Kyungsang-do, Gangwon-do), 14 fruit... (n=207) |
| 8 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review synthesizing Congressional Subcommittee findings, FDA testing, and peer-reviewed literature on infant and toddler food |
| 9 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galati County, Romania: 45 from commercial markets, 35 from amateur farmers; collected... (n=80) |
| 10 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in raw apple with peel (TDS Food 78; n=27 per analyte) |
| 11 | [[sources/tan2022-carbon-dots-cd-hg-food\|al. 2022]]. *N-doped carbon dots fluorescence sensor for simultaneous detection of Cd2+ and Hg2+ in food samples*, Frontiers in Chemistry | 2022 | Peer-reviewed | Cd, tHg occurrence in Spiked apple and cabbage samples, method validation |
| 12 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 13 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | Measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; apple data included across processing states |
| 14 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 15 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Ni, Cd, Pb occurrence in Fruit samples of 11 varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) collected from... (n=308) |
| 16 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 17 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type, 9 per governorate per fruit) purchased from... (n=108) |
| 18 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | US tAs, iAs, Pb, Cd, tHg occurrence in 168 commercial baby food containers, 61 brands, 13 food types; purchased from 14 US metropolitan areas and 15... (n=168) |
| 19 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal biomarker study including apple-based infant foods among the iAs/tAs exposure sources during weaning; fruit-category exposure context |
| 20 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 21 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | PL Pb, Cd occurrence in Ten apple, ten plum, twelve strawberry, twelve raspberry, and ten white grape samples (54 fruit lots per harvest... (n=54) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
