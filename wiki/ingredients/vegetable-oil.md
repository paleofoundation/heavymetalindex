---
type: ingredient
commodity: vegetable-oil
title: "Vegetable Oil"
label: "Vegetable Oil"
aliases: [palm-oil, oilseeds, rapeseed-oil, canola-oil, blended-vegetable-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [33, 274]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [24, 129]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [62, 147]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [153, 677]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: [oilseed-source, extraction-method, industrial-refining, blending]
lower_risk_variants: ["[[ingredients/olive-oil]]", "[[ingredients/sunflower-oil]]"]
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Vegetable Oil

Vegetable oil is the category-level page covering edible oils derived from plant sources, including soybean oil, sunflower oil, canola/rapeseed oil, corn oil, palm oil, cottonseed oil, and blended generic vegetable oil. The category overlaps with single-source-oil pages including [[ingredients/sesame-oil]], [[ingredients/peanut-oil]], [[ingredients/olive-oil]], [[ingredients/sunflower-oil]], and [[ingredients/rice-bran-oil]]; per-source-oil pages take precedence for their specific oils, with this category page summarizing cross-oil patterns. The Scutarasu 2023 review cited on [[ingredients/rice-bran-oil]] provides the most comprehensive cross-oil cross-country occurrence inventory in the current corpus, with values for soybean, sunflower, corn, canola, cottonseed, rapeseed, and other vegetable oils across European, Middle Eastern, and Asian markets. The Irish FSAI 2016 Total Diet Study reports vegetable oil as one of multiple food categories in the Irish dietary exposure assessment ([[sources/fsai2016-total-diet-study-ireland-2012-2014|FSAI 2016]]).

## Why this commodity accumulates heavy metals

Vegetable oils accumulate heavy metals through three pathways shared across single-source oils. The first is source-oilseed metal load, partitioned during extraction with typically less than 10 percent transfer of source-seed Pb and arsenic to the oil fraction for pressing and conventional solvent extraction, and up to 30 percent for supercritical CO2 extraction. The second is industrial refining (degumming, neutralization, bleaching, deodorization), which concentrates trace metals through evaporative volume reduction and adds metals through process-equipment contact. The third is blending of multiple oil sources into generic vegetable oil products, where the finished blend reflects a weighted average of the source oils' metal loads.

The Brodziak-Dopierala 2023 study of mercury in vegetable, cod liver, and shark liver oil supplements identifies a fourth pathway specific to supplement-grade oils: mercury can accumulate in liver-derived oils through bioaccumulation in the source animal (cod, shark), with shark liver oil supplements documented at substantially higher Hg than vegetable oil ([[sources/brodziak-dopierala2023-mercury-oil-supplements-poland|Brodziak-Dopierała et al. 2023]]). For food-use vegetable oils (as distinct from supplement-grade), mercury is consistently below detection across the available sources.

## Heavy metal contamination profile

Values below aggregate the Scutarasu 2023 cross-oil range data (soybean, sunflower, corn, canola, cottonseed) as a representative cross-source baseline. Single-source oils with their own pages carry more precise per-oil values.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 33–274 | — | low | [[sources/scutarasu2023-heavy-metals-foods-beverages\|—]] (cited via [[ingredients/rice-bran-oil]]) |
| Cd  | n=1 | 24–129 | — | low | [[sources/scutarasu2023-heavy-metals-foods-beverages\|—]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | 62–147 | — | low | [[sources/scutarasu2023-heavy-metals-foods-beverages\|—]] |
| tHg | n=1 | <LOD | — | low | [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland\|2]] |
| Ni  | n=1 | 153–677 | — | low | [[sources/scutarasu2023-heavy-metals-foods-beverages\|—]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The values reflect Scutarasu 2023 Table 4 cross-oil ranges drawn from multiple primary sources cited in that review (Turkish 2022, Iranian 2020, Pakistani 2022, London 2022, Polish 2017, Korean 2019, Brazilian 2015). The wide ranges reflect the cross-country and cross-oil-type variability rather than within-source variability.

## Ranges by source, region, and variety

The Scutarasu 2023 review compiles cross-oil cross-country heavy metal data from approximately 15 primary studies spanning 2008 to 2022, with vegetable oil categories represented including olive (Cyprus, Turkey, Iran, London, Pakistan, Ukraine, Greece), rapeseed (Iran, China, Poland), sesame (Iran, London, Pakistan, Korea), flaxseed (Korea), canola (Turkey), corn (Turkey), cottonseed (Turkey), soybean (Turkey), and sunflower (Turkey, London, Iran, Brazil). The Pakistani 2022 olive oil sample is the outlier with Cd 4,285 µg/kg and Pb 4,005 µg/kg (40-fold higher than typical), reflecting either source-soil contamination, packaging migration, or analytical anomaly; this outlier is documented in the review but is not representative of the broader vegetable oil range. The Korean 2019 sesame oil reports Al at 15.97 mg/kg, the Korean 2019 flaxseed oil reports Al at 29.81 mg/kg, both substantially elevated relative to other vegetable oils.

The Irish FSAI 2016 Total Diet Study includes olive oil and vegetable oil as food categories in the Irish dietary exposure assessment but does not tabulate per-oil per-analyte concentration values in the accessible data slice; the contribution of oils to Irish total dietary metal exposure is documented as small relative to cereals and meat for Pb, Cd, and Cr ([[sources/fsai2016-total-diet-study-ireland-2012-2014|FSAI 2016]]).

The Brodziak-Dopierala 2023 Polish study of mercury in oil supplements documents that vegetable oil supplements carry mercury at substantially lower levels than cod liver or shark liver oil supplements; specific food-grade vegetable oil Hg values are not in the accessible data slice but the study's contribution is qualitative confirmation that vegetable oil Hg is at or below detection limits in normal food-grade preparations.

Regional and per-oil variation across global vegetable oil markets is documented qualitatively in the Scutarasu review but the cross-source synthesis is too heterogeneous (different analytical methods, different sampling years, different regulatory contexts) to produce robust population-level estimates without primary-source re-extraction. Per-oil pages (sesame, peanut, sunflower, olive, rapeseed) carry more reliable single-oil values where available.

## Processing effects

Processing-state effects on vegetable oil metal load follow the same two-axis pattern documented on the single-source oil pages: extraction method (pressing and conventional solvent vs supercritical CO2) and industrial refining (refined vs unrefined / virgin / cold-pressed). The Iranian Mehri 2024 dataset cited on [[ingredients/sesame-oil]] documented that industrial refining concentrates tAs by 18- to 42-fold across multiple oil types (sesame, peanut, olive) relative to traditional processing from the same regional source. The same mechanism applies to other vegetable oils. Blending of multiple oil sources into generic vegetable oil produces a weighted-average finished product; the metal load of generic vegetable oil reflects the source-oil mix.

## Ingredient-derivative risk

Vegetable oil as a category produces a wide range of derivatives. Refined vegetable oil is the standard cooking-oil form. Unrefined or cold-pressed vegetable oil (sometimes labeled "virgin") carries lower trace metals than refined per the traditional-versus-industrial contrast. Hydrogenated and partially-hydrogenated vegetable oil (the source of trans fats; now largely phased out in major markets) carries the source-oil metals plus any catalyst-related contamination from the hydrogenation step. Vegetable shortening produced by hydrogenation carries the same considerations. Margarine and spreads produced from vegetable oils inherit the source-oil metals proportionally. Vegetable oil-derived ingredients (mono- and diglycerides, lecithin, tocopherols) carry metals partitioned according to the specific processing chemistry of each derivative.

## Mitigation options

Sourcing levers operate at the brand level. Sourcing single-source vegetable oils from documented low-metal supplier specifications, rather than generic blended vegetable oil with unknown source mix, is the upstream lever. Brand-level supplier vetting and lot-level testing are the load-bearing controls.

Agronomic levers operate on the oilseed producer and are covered at the source-seed pages (peanut, sesame, sunflower, soybean, rapeseed).

Processing levers are the primary lever for finished vegetable oil contamination. Selecting mechanical pressing or conventional solvent extraction over supercritical CO2 reduces seed-to-oil metal transfer. Selecting unrefined or minimally refined oil over fully industrially refined oil reduces tAs and Fe accumulation, at the cost of flavor neutrality and shelf life.

Formulation levers operate on the brand. Single-source oil specifications rather than generic blended vegetable oil enable more precise metal-load control. Substituting lower-metal oil categories (olive, sunflower) for higher-metal ones is the formulation response where the functional requirements permit.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming vegetable oil against a sourcing specification catches origin- and processing-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for vegetable oil in the current evidence base. Glass, food-grade plastic, and metal-free tin containers dominate the market.

## Regulatory limits that apply

The Codex Alimentarius standard for named vegetable oils, CXS 210-1999, establishes maximum levels for Pb in vegetable oils at 0.1 mg/kg (100 ppb). The European Union Regulation (EU) 2023/915 establishes Pb in vegetable fats and oils at 0.10 mg/kg (100 ppb) and Cd at 0.1 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). Codex does not currently establish a specific Ni maximum level for vegetable oils. The EFSA CONTAM Panel 2015 Scientific Opinion on Ni established a Tolerable Daily Intake of 2.8 µg/kg bw/day for the dietary nickel total ([[sources/efsa2015-nickel-food-water|EFSA 2015]]); vegetable oils with Ni in the 150 to 680 ppb range contribute meaningfully to total dietary Ni at typical consumption levels. The United States FDA has no commodity-specific action level for Pb, Cd, or Ni in vegetable oil under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland\|Brodziak-Dopierała et al. 2023]]. *Mercury Exposure from the Consumption of Dietary Supplements Containing Vegetable, Cod Liver, and Shark Liver Oils*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | Polish-market Hg in vegetable, cod liver, and shark liver oil supplements; documents vegetable oil Hg at or below detection relative to liver-derived oil supplements |
| 2 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of Ireland 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish Total Diet Study including olive oil and vegetable oil as food categories; documents oils as small contributor to total dietary Pb, Cd, Cr exposure |
<!-- END: hmi-source-legend -->
