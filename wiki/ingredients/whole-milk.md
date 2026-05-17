---
title: "Whole milk"
type: ingredient
commodity: whole-milk
label: "Whole milk"
aliases: [whole milk]
category: dairy
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 3
---

# Whole milk

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Whole milk is a low-accumulator matrix for most heavy metals. The dairy cow's physiology actively restricts the transfer of ingested metals from blood to milk; this is particularly effective for cadmium and lead, which are tightly regulated across biological membranes. The transfer factor from feed to milk for Cd and Pb is very low (typically below 1 percent for Pb, and even lower for Cd), meaning that even when cows graze on Cd-or Pb-contaminated pastures, the resulting milk carries concentrations well below those of the feed. Mercury transfer to milk is similarly restricted. The FDA TDS FY2018-FY2020 data for whole fluid milk (n=27) record all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) at zero across the entire distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]), consistent with the well-established low-risk characterisation of fluid dairy from non-contaminated herds. Marques et al. (2021) detected Pb in non-organic whole milk at trace levels in Spanish retail samples by ICP-MS ([[sources/marques2021-trace-elements-milks-plant-based-drinks]]), illustrating that Pb is detectable in some market contexts even if distribution-wide surveys show predominantly zero values. Whole milk's fat content relative to skim milk results in slightly higher concentrations of lipophilic metal species, but this effect is minor for the regulated heavy metals of concern.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Cd | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Ni | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|1]] |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 1, "Milk, whole, fluid." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, whole, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=27) for whole fluid milk in the US show zero values across all analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) throughout the distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The Marques et al. 2021 Spanish retail study detected Pb in non-organic whole cow milk, illustrating that while distribution-wide surveys show predominantly zero values, some market contexts yield detectable Pb ([[sources/marques2021-trace-elements-milks-plant-based-drinks]]). Dairy from herds grazing pastures with elevated Pb or Cd, such as land near legacy mining or smelting operations, can produce milk with elevated concentrations; this is a localised exception rather than a characteristic of the commodity category. Organic versus conventional milk is not systematically associated with different metal profiles in the published literature, as the primary determinant of milk metal content is the metal burden of the pasture and feed rather than production system.

## Processing effects

Pasteurisation (HTST or UHT) does not significantly alter the metal content of milk; the thermal treatment targets microbial pathogens rather than mineral or metal composition. Homogenisation, which breaks up fat globules to produce uniform fat distribution, does not change total metal concentrations. Ultra-high temperature (UHT) processing and sterilisation similarly leave metal concentrations unchanged. Spray-drying of whole milk to produce whole milk powder concentrates all solutes including metals in proportion to the water removed, roughly by a factor of 7 to 8 (reflecting the reconstitution ratio of approximately 1 part powder to 7 parts water); however, because the starting fluid milk concentrations are near or below detection limits, the resulting whole milk powder concentrations remain very low even after this concentration step. Evaporated milk, which is concentrated but not fully dried, shows a similar concentration factor.

## Ingredient-derivative risk

Whole milk is the starting material for a range of dairy derivatives including cream, butter, cheese, yogurt, condensed milk, evaporated milk, and whole milk powder. In all of these derivatives, the metal profile of the raw milk is carried through with modification only by the concentration or dilution factor of the processing step. Cheese production involves concentration of protein and fat (which removes whey), so any metals associated with the protein or fat fraction may be slightly concentrated in the curd; however, cheese metal concentrations remain very low given the near-zero starting point of fluid milk. Butter, which is almost pure fat, carries minimal metals. Whey protein products (whey protein concentrate, whey protein isolate) are addressed on separate ingredient pages and may carry different metal profiles from the whey fraction.

## Mitigation options

### Sourcing levers

Sourcing milk from herds grazing on non-contaminated pastures in regions without legacy industrial Pb or Cd soil loading is the primary upstream lever, though this is rarely a practical concern for commercially produced whole milk at population scale. In geographies with legacy mining or smelting activity adjacent to dairy farming, pasture metal testing and milk surveillance are appropriate.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine heavy metal testing of commercial whole milk for Pb and Cd is unlikely to yield actionable values under standard supply-chain conditions. Testing is warranted for dairy sourced from geographic areas with known soil contamination, or for product categories such as infant formula where milk is a primary ingredient and regulatory scrutiny of metals is high.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Pb in raw milk, heat-treated milk, and milk-based products of 0.020 mg/kg (20 ppb) under [[regulations/eu2023-contaminants-maximum-levels]]. No EU maximum level is set for Cd in fluid milk because Cd transfer to milk from contaminated feed is very low. No maximum level for Hg in milk is promulgated under current EU contaminant regulations. In the US, no FDA action level for Pb, Cd, or Hg in fluid cow milk is currently enforced under the [[regulations/fda-closer-to-zero]] programme, which focuses on processed infant foods and baby foods rather than raw milk constituents. [[regulations/codex-cadmium-mls]] includes provisions for Pb in milk at 0.020 mg/kg, consistent with the EU limit.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Milk, whole, fluid (n=27); all analytes reported as zero (BDL) |
| 2 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Pb, tHg, Ni, and U in Spanish retail whole cow milk by ICP-MS; Pb detected in non-organic whole milk; finished-milk matrix context supplementing FDA TDS data |
| 3 | [[sources/pankiewicz2012-thg-dairy-products-poland\|Pankiewicz 2012]]. *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*, Ecological Chemistry and Engineering A | 2012 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

