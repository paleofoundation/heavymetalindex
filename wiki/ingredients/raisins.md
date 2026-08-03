---
title: "Raisins"
type: ingredient
commodity: raisins
label: "Raisins"
aliases: [Raisins, raisin, currants]
category: dried-fruit
tds_food:
  number: 95
  description: "Raisins"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5.8, 14.4]
    p95_ppb: 15.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0.8]
    p95_ppb: 0.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [15, 30.2]
    p95_ppb: 31.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [1.1, 1.5]
    p95_ppb: 1.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [45.2, 66]
    p95_ppb: 67
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [11.2, 91.2]
    p95_ppb: 95.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [2.6, 3.5]
    p95_ppb: 3.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 3
---

# Raisins

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 95, "Raisins." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Raisins are produced by drying fresh grapes (Vitis vinifera and related varieties), typically by sun drying, mechanical drying, or a combination. The heavy metal profile of raisins is shaped by two distinct processes operating simultaneously: first, the same soil-uptake and surface-deposition pathways that determine metal content in fresh grapes; and second, the profound concentration effect of moisture removal during drying. Fresh grapes contain approximately 80 percent water by weight; dried raisins contain 15 to 20 percent moisture. This reduction in water content concentrates all non-volatile constituents, including heavy metals, by a factor of roughly three to four on a wet-weight basis. A Pb concentration of, for example, 5 ppb in the fresh grape becomes approximately 18 to 20 ppb in the dried raisin without any change in the absolute metal load of the fruit. Pb surface deposition from atmospheric sources, historically elevated near roadways due to leaded fuel combustion and still measurable in some agricultural environments from legacy soil contamination, is retained on the grape skin and is not removed during the drying process. Cd is taken up from soil through the root system and is distributed throughout the berry flesh; its concentration in raisins reflects the soil Cd bioavailability of the vineyard, which varies substantially with soil pH, organic matter content, and historical phosphate fertilizer application. EFSA dietary exposure assessments consistently identify dried fruits including raisins as contributors to population-level Cd exposure in Europe, reflecting the combination of moderate Cd content and substantial per-serving consumption weight in some populations.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5.8–14.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0–0.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 15–30.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 1.1–1.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 45.2–66 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 11.2–91.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 2.6–3.5 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Raisins" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 1 | in profile |
| Cr | 3 | 0 | 100 | in profile |
| Ni | 3 | 42 | 68 | in profile |
| Pb | 3 | 5.3 | 16 | in profile |
| U | 3 | 2.6 | 3.7 | in profile |
| tAs | 3 | 13 | 32 | in profile |
| tHg | 3 | 1.1 | 1.6 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Production region is the dominant driver of Cd concentration in raisins, reflecting differences in vineyard soil Cd loading across major raisin-producing areas. California (the dominant US producer), Turkey, Greece, Iran, and Australia are the major commercial origins; vineyard soil Cd varies considerably among and within these regions depending on soil type, irrigation source, and historical fertilizer use. Sun Muscat varieties and sultanas may show modestly different Cd uptake than standard Thompson Seedless depending on root architecture and growing conditions, but variety effects are secondary to soil effects in the literature. Pb variation is primarily driven by proximity to legacy contamination sources and current atmospheric deposition levels; organic versus conventional production shows minimal difference for Cd but may show modest Pb differences in regions with legacy roadway Pb contamination near vineyards. The FDA TDS FY2018-FY2020 dataset (n=3 composite samples) used in the current corpus represents a market-basket average across US commercial raisins and does not resolve geographic or variety-level structure. The Pb p50 observed was 7.8 ppb and max was 16 ppb; Cd p50 was below detection (0 ppb) with max at 1 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. Quantitative regional ranges will be populated as origin-stratified studies are ingested.

## Processing effects

Drying is the central processing step and its effect on metal concentration is quantitative and unavoidable: metals concentrate in proportion to the reduction in water content. A three- to fourfold concentration factor is the expected range for standard raisin production, though the exact factor depends on initial moisture content of the grape and the target moisture of the finished raisin. Washing of grapes before drying can remove some surface Pb associated with dust or atmospheric deposition, but is not standard practice in all production chains and has variable effectiveness depending on the form of surface contamination. Sulfur dioxide treatment, applied to some golden raisins to prevent browning, does not meaningfully alter metal content. Oil coating applied to some raisins post-drying (to prevent clumping) introduces no metals under refined oil conditions. Mechanical drying at elevated temperatures versus sun drying does not alter the concentration factor for metals; both methods reduce moisture to the same target range.

## Ingredient-derivative risk

Raisins are consumed directly as a snack and also used as an ingredient in baked goods, cereals, trail mixes, and infant and toddler snack products. In formulated products, the raisin fraction's metal contribution scales with its inclusion level: a baked product containing 15 percent raisins by weight carries approximately 15 percent of the raisin metal load per gram of finished product. The highest-risk derivative context is raisin-paste or raisin-paste concentrate used as a sweetener or binder in infant snacks, where the raisin fraction may represent a high proportion of the product by weight while the consumer is an infant consuming on a per-kilogram-body-weight basis. Raisin-based sweetening in infant and toddler products warrants specific monitoring attention given the combined concentration effect and vulnerable-population exposure context. Grape juice concentrate, while not derived from raisins, undergoes an analogous concentration step and carries comparable considerations.

## Mitigation options

### Sourcing levers

Sourcing raisins from vineyards with documented low soil Cd is the most impactful lever. Supplier qualification should include soil Cd testing by vineyard parcel where possible. California raisins produced under California's agricultural oversight framework have been shown in market surveys to generally meet EU maximum levels, though individual batches vary. Specifying origin and requiring supplier certificates of analysis (COAs) with ICP-MS results is the standard commercial practice for high-risk ingredient categories.

### Agronomic levers

Vineyard soil pH management reduces Cd bioavailability: liming to maintain pH above 6.5 has been documented to reduce grape Cd uptake in European studies. Pre-washing grapes before drying to remove surface Pb is a documented but inconsistently applied lever. Selecting vineyard sites away from historically contaminated soils or high-traffic roadways reduces both Cd (from soil) and Pb (from legacy atmospheric deposition) in the fruit. _No quantified reduction magnitude from specific agronomic interventions in raisin production is available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing grapes before drying can reduce surface-bound Pb. However, the dominant Cd pathway is endogenous (plant uptake from soil) and is not removable by washing. No post-drying processing step removes biologically incorporated metals from raisin tissue. The concentration effect of drying is inherent to the product and cannot be mitigated without changing the product category.

### Formulation levers

In formulated products containing raisins, substituting raisins with lower-metal alternative sweeteners or dried fruits (for example, dates grown in low-Cd soils) can reduce the metal load of the formulated product. Reducing the raisin inclusion level in infant and toddler products and compensating with lower-risk ingredients is the primary formulation lever for products targeting vulnerable populations.

### Testing and QC levers

Lot-level ICP-MS testing for Cd and Pb in incoming raisin batches is the primary QC lever given the documented variability across origins. For products marketed to infants or young children, internal specification limits tighter than regulatory maximum levels are warranted given the higher per-kilogram body weight exposure in this population.

### Packaging and storage levers

_No quantified data on packaging or storage effects on raisin metal content in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Pb maximum level for dried fruits including raisins is 0.10 mg/kg (100 ppb) wet weight. A Cd maximum level of 0.050 mg/kg (50 ppb) wet weight applies to dried fruits under the EU framework. The FDA does not publish a specific action level for Pb or Cd in raisins; the general tolerance framework under 21 CFR applies. For the broader context of FDA efforts to reduce Pb in foods marketed to young children, see [[regulations/fda-closer-to-zero]].

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 3 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Raisins (n=3) |
| 3 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
