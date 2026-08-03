---
title: "Chocolate cake with chocolate icing"
type: ingredient
commodity: chocolate-cake
label: "Chocolate cake with chocolate icing"
aliases: ["Cake, chocolate with chocolate icing", "chocolate cake"]
category: dessert
tds_food:
  number: 178
  description: "Cake, chocolate with chocolate icing"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [6.5, 12.4]
    p95_ppb: 13.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [11.8, 26]
    p95_ppb: 26.7
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
    typical_ppb: [3.2, 4.6]
    p95_ppb: 4.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.4]
    p95_ppb: 1.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [452, 652]
    p95_ppb: 677
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
    typical_ppb: [200, 300]
    p95_ppb: 300
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
    typical_ppb: [1.2, 2.6]
    p95_ppb: 3.0
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
sources: 1
---

# Chocolate cake with chocolate icing

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 178, "Cake, chocolate with chocolate icing." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chocolate cake with chocolate icing is a highly composite baked product whose heavy metal burden is dominated by the cocoa ingredient fraction. Cocoa beans accumulate cadmium from the soil of tropical growing regions, particularly in Andean South American origins (Ecuador, Peru) where volcanic and naturally elevated soil cadmium levels drive high bean cadmium content, and to a lesser degree in West African origins; see [[ingredients/cocoa]] for the canonical treatment of cocoa cadmium. In a chocolate cake recipe, cocoa powder or chocolate constitutes typically 5-15% of the total mass; this dilution substantially reduces the cadmium and lead concentrations in the finished cake relative to pure cocoa or chocolate. Wheat flour provides a secondary cadmium contribution through grain bran-fraction uptake. Eggs, butter, sugar, and milk contribute negligible metals. The FDA Total Diet Study FY2018-FY2020 found cadmium at a median of 15 ppb, nickel at a median of 530 ppb, lead at a median of 7.8 ppb, chromium at a median of 300 ppb, and total arsenic at a median of 3.8 ppb across 27 composite samples, all consistent with the cocoa-fraction driving the dominant metal signals [[sources/fda2022-tds-elements-fy2018-fy2020]].

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
| Pb | n=2 | 6.5–12.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 11.8–26 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 3.2–4.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–1.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 452–652 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 200–300 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 1.2–2.6 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cake, chocolate with chocolate icing" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 10 | 40 | in profile |
| Cr | 27 | 200 | 300 | in profile |
| Ni | 27 | 380 | 680 | in profile |
| Pb | 27 | 6.1 | 16 | in profile |
| U | 27 | 0 | 3.3 | in profile |
| tAs | 27 | 0 | 4.6 | in profile |
| tHg | 27 | 0 | 1.9 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference with 27 composite samples of chocolate cake with chocolate icing, reporting: cadmium median 15 ppb (max 40 ppb), nickel median 530 ppb (max 680 ppb), lead median 7.8 ppb (max 16 ppb), chromium median 300 ppb (all values in range 200-300 ppb), total arsenic median 3.8 ppb, and uranium median 1.8 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. The relatively tight distributions observed for chromium (300 ppb across most samples) and nickel are consistent with cocoa as the primary driver, since cocoa Ni concentrations are high and relatively consistent within a given cocoa-sourcing geography. The wide range in cadmium (10-40 ppb in the finished cake) reflects variation in cocoa-origin cadmium, since Andean cocoa carries substantially higher Cd than West African cocoa. Variation across brand and recipe formulation would be expected primarily from the cocoa fraction: dark chocolate icing carries more cocoa solids and thus more cadmium and nickel than milk chocolate icing; recipes using higher-Andean-origin cocoa carry more cadmium than recipes using West-African-origin cocoa.

## Processing effects

Baking does not substantially alter the metal content of the finished product; cadmium, lead, nickel, and chromium are thermally stable under normal baking conditions. Moisture loss during baking concentrates all metals slightly on a per-gram basis relative to the unbaked batter. The cocoa fraction, which undergoes high-temperature Maillard chemistry during baking, retains its metal complement; metals are not destroyed or volatilised. The Dutch-processing of cocoa powder (alkalisation) does not materially alter Cd or Pb concentrations in the cocoa. The icing applied to the cake surface adds a second cocoa-containing layer that contributes additional cadmium, lead, and nickel per serving relative to unfrosted cake.

## Ingredient-derivative risk

The two within-recipe variables most relevant to metal load are: (1) the proportion of cocoa solids in the recipe, with higher cocoa content (darker cake and icing) producing higher cadmium, lead, and nickel in the finished product; and (2) the origin of the cocoa sourced, with Andean-origin cocoa consistently carrying higher cadmium than West African-origin cocoa. Chocolate cake as sold in retail is a finished product; its derivative risk framework is primarily useful for manufacturers reformulating recipes or changing cocoa supplier. For the consumer app, the cocoa fraction of the recipe is the dominant metal load variable and should be used to adjust the estimated cadmium and nickel burden relative to other cake types.

## Mitigation options

### Sourcing levers

Sourcing cocoa or chocolate from lower-cadmium origins (West Africa rather than Ecuador or Peru) is the most impactful single lever for reducing cadmium in the finished cake. For the lead signal, sourcing cocoa from regions with lower atmospheric deposition and lower soil lead reduces the cocoa-fraction Pb contribution. Specifying cocoa or chocolate suppliers who provide ICP-MS testing certificates of analysis for Cd, Pb, and Ni enables verification at the ingredient level rather than the finished-product level.

### Agronomic levers

Agronomic levers apply to the cocoa fraction; see [[ingredients/cocoa]] for the canonical treatment of soil amendment, intercropping, and other on-farm interventions that reduce cocoa cadmium. Wheat flour cadmium (a secondary contributor) can be reduced through soil pH management and low-Cd-phosphate fertiliser use at the wheat-growing level.

### Processing levers

Using alkali-processed (Dutch) cocoa versus natural cocoa does not substantially change cadmium content. Reducing the cocoa-solids percentage in the recipe reduces cadmium and nickel proportionally. Using milk chocolate rather than dark chocolate for the icing reduces the cocoa-solid fraction and thus the metal contribution per gram of icing.

### Formulation levers

Replacing a portion of cocoa with carob powder (which has a distinct but somewhat similar flavour profile) substantially reduces cadmium and nickel, as carob does not carry the same soil-cadmium accumulation pathway. Reducing cocoa-solid content in the cake batter and icing by shifting to a lighter-chocolate or mocha formulation reduces metal load per serving. Using milk chocolate chips rather than dark chocolate chips in the recipe is a lower-impact lever but directionally reduces Cd.

### Testing and QC levers

For manufacturers, ICP-MS testing of each cocoa powder or chocolate ingredient batch for Cd, Pb, and Ni is the appropriate quality control point. The finished cake can be tested for confirmation, but the ingredient-level test is the more efficient upstream control. California Proposition 65 requirements for lead in foods marketed in California may trigger labelling obligations if finished chocolate cake lead values exceed action thresholds; the TDS median of 7.8 ppb Pb in the finished cake is in the range where this assessment is relevant.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets cadmium maximum levels for cocoa and chocolate products; these limits apply to the cocoa or chocolate ingredient used in the cake rather than to the finished composite product directly. The general EU contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) applies lead limits to cereal-based products and cocoa products; the applicable limit for the finished cake would be interpreted by applying ingredient-level limits to each contributing fraction. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides cadmium limits for cocoa and chocolate. No specific US FDA action level applies to chocolate cake as a finished product; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. The TDS median cadmium of 15 ppb in the finished cake represents a substantially diluted version of the cocoa ingredient's cadmium load, and the finished-product cadmium sits within expected regulatory ranges when assessed against cereal-bakery limits rather than pure-cocoa limits.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 1 routed source. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Cake, chocolate with chocolate icing (n=27) |
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
