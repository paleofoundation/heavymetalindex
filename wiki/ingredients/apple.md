---
title: "Apple"
type: ingredient
commodity: apple
label: "Apple"
aliases: [apples]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 5.4]
    p95_ppb: 8.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
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
updated: 2026-05-13
sources: 2
---

# Apple

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Apples accumulate heavy metals through two primary routes. The first is soil uptake via the root system, which delivers Pb, Cd, and other metals from orchard soils into the vascular tissue and fruit flesh. Historical apple orchard management in North America and Europe relied heavily on lead arsenate as a pesticide from the late nineteenth century through the mid-twentieth century, leaving a legacy of elevated Pb and arsenic in orchard soils that persists in some regions decades after application ceased; this residual contamination continues to contribute trace levels of Pb and arsenic to fruit grown in those orchards. The second route is atmospheric deposition on fruit surfaces during the growing season, which can deposit Pb and other metals directly onto the skin; washing and peeling can remove a portion of this surface-deposited load.

Despite these exposure routes, apples are generally a low-risk commodity for heavy metals under current commercial production conditions. The FDA FY2018-FY2020 Total Diet Study data for raw apple with peel (TDS Food 78, n=27) show the majority of analytes at or below detection limits across most of the sample distribution ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic showed a p90 of 5.36 ppb and a maximum of 20 ppb, with the speciated iAs fraction awaiting a dedicated speciation source. The regulatory and media attention that apples have received in recent years has been driven primarily by cinnamon adulteration in fruit pouches rather than by contamination in the apple ingredient itself: the 2023 WanaBana lead poisoning cluster was attributable to cinnamon adulterated with lead chromate, not to the apple component ([[sources/napier2024-wanabana-lead-apple-cinnamon|Napier et al. 2024]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 (in progress) | — | — | — | — |
| Cd | n=2 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=2 (in progress) | — | — | — | — |
| Ni | n=2 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=2 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

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
| 1 | [[sources/napier2024-wanabana-lead-apple-cinnamon\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Government report | CDC outbreak investigation linking childhood Pb poisoning to WanaBana apple cinnamon pouches; Pb source was cinnamon adulterated with lead chromate, not the apple ingredient itself |
| 2 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review synthesizing Congressional Subcommittee findings, FDA testing, and peer-reviewed literature on infant and toddler food |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in raw apple with peel (TDS Food 78; n=27 per analyte) |
| 4 | [[sources/tan2022-carbon-dots-cd-hg-food\|al. 2022]]. *N-doped carbon dots fluorescence sensor for simultaneous detection of Cd2+ and Hg2+ in food samples*, Frontiers in Chemistry | 2022 | Peer-reviewed | Cd, tHg occurrence in Spiked apple and cabbage samples, method validation |
| 5 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Cadmium and lead contents in fresh and processed fruit and vegetable products and the resulting dietary risk assessment*, Scientific Reports | 2021 | Peer-reviewed | Measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; apple data included across processing states |
| 6 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal biomarker study including apple-based infant foods among the iAs/tAs exposure sources during weaning; fruit-category exposure context |
<!-- END: hmi-source-legend -->

