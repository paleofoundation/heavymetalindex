---
title: "Bran cereal with raisins"
type: ingredient
commodity: bran-cereal-with-raisins
label: "Bran cereal with raisins"
aliases: ["Cereal, bran with raisins", "raisin bran"]
category: breakfast-cereal
tds_food:
  number: 74
  description: "Cereal, bran with raisins"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [1.0, 13.8]
    p95_ppb: 14.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [30, 43.6]
    p95_ppb: 43.8
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
    typical_ppb: [13.2, 23.6]
    p95_ppb: 24.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [122, 186]
    p95_ppb: 193
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
    typical_ppb: [100, 260]
    p95_ppb: 280
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
    typical_ppb: [0.2, 4.0]
    p95_ppb: 4.3
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

# Bran cereal with raisins

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 74, "Cereal, bran with raisins." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Bran cereal with raisins is a composite processed food whose contamination profile arises from two distinct source fractions. The bran fraction, derived from the outer layers of wheat or other cereal grains, is the primary driver of cadmium and to a lesser extent lead accumulation. Metal uptake in cereal crops is concentrated in the outer grain tissues: the bran layers (pericarp, aleurone, and seed coat) accumulate Cd at substantially higher levels than the inner endosperm, because these tissues are metabolically active and serve as a site of mineral transport and storage during grain development. Wheat bran fractions typically contain two to five times the Cd concentration of refined white flour from the same grain. The raisin fraction contributes a secondary lead pathway: dried grapes can concentrate atmospheric and soil-derived Pb deposited on the fruit surface during cultivation, and the drying process increases concentration on a mass basis. Fortification with mineral premixes, common in ready-to-eat breakfast cereals, may introduce additional trace metals depending on the source and purity of the mineral salts used. The combination of high-bran content, dried-fruit inclusion, and industrial processing makes this category one of the higher-metal breakfast cereal types on a ppb-per-serving basis.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1–13.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 30–43.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 13.2–23.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 122–186 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 100–260 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.2–4 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cereal, bran with raisins" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 27 | 44 | in profile |
| Cr | 3 | 100 | 300 | in profile |
| Ni | 3 | 120 | 200 | in profile |
| Pb | 3 | 0 | 16 | in profile |
| U | 3 | 0 | 4.7 | in profile |
| tAs | 3 | 13 | 26 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in bran cereal with raisins in the range of 27 to 44 ppb (n=3, median 42 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Total arsenic was detected in the same samples at 13 to 26 ppb (median 14 ppb), while Pb ranged from 0 to 16 ppb (median approximately 5 ppb). Geographic and varietal variance in the bran fraction is expected to track cereal-grain Cd variation, which is driven substantially by soil Cd levels in the growing region and cultivar sensitivity. Raisin origin introduces additional Pb variability: grapes grown near lead-contaminated soils or in high-traffic agricultural areas show higher surface Pb deposition. The corpus currently holds one TDS source for this food; broader geographic and brand-level breakdown requires additional studies.

## Processing effects

The primary processing effect relevant to heavy metals in this product type is the decision to retain bran rather than remove it. Milling that produces whole-bran or high-bran output preserves the outer grain layers where Cd, Ni, and Cr concentrate, while refining (producing white flour) removes those layers and reduces metal content by roughly 50 to 80 percent depending on the degree of extraction and the metal. Extrusion and crisping during manufacturing do not materially reduce metal concentrations because the processing temperatures and residence times are insufficient to volatilize or chemically transform inorganic contaminants. The raisin component undergoes a drying step that concentrates metals proportionally to the moisture loss; a raisin that is approximately one-quarter the weight of the original grape will carry roughly four times the metal mass per gram. Fortification with mineral premixes introduces metal co-contaminants at levels that depend on the purity specifications applied by the cereal manufacturer; high-purity pharmaceutical-grade mineral sources carry lower impurity loads than food-grade mineral salts.

## Ingredient-derivative risk

Bran cereal with raisins is consumed primarily as a whole product rather than as a derivative ingredient. When used as a component in granola bars, trail mixes, or baked goods, the metal load from the bran and raisin fractions is carried into those products in proportion to inclusion rate. Products that use bran concentrate or wheat bran as an ingredient will carry a higher Cd and Ni load than products using refined flour; the heavy-metal risk of a "high-fiber" formulation claim is therefore partially attributable to the bran fraction. Rice bran, if substituted for wheat bran in gluten-free formulations, introduces a different risk profile, with higher iAs and Cd versus the wheat-bran Cd/Ni pattern.

## Mitigation options

### Sourcing levers

Sourcing cereal grain with documented low soil-Cd origin (for example, regions with low-Cd agricultural soils) is the most effective lever for reducing Cd in the bran fraction. Wheat grown on heavy-clay soils in low-contamination regions tends to accumulate less Cd than wheat grown on sandy or acidic soils. Sourcing raisins from regions with low atmospheric Pb deposition and verified absence of lead-arsenate legacy pesticide use reduces the Pb contribution from the dried-fruit component. Supplier specifications for incoming grain and dried fruit with maximum Cd and Pb limits per lot are the practical implementation of this lever.

### Agronomic levers

Soil pH management, liming to maintain pH above 6.5, reduces Cd availability in the rhizosphere and decreases grain Cd uptake. Cultivar selection also matters: within wheat, significant variation in bran Cd accumulation across varieties has been documented, and breeders have developed low-Cd wheat lines in regions where soil Cd is a known problem. Agronomic intervention options apply to the upstream grain supply rather than directly to the cereal manufacturer.

### Processing levers

Increasing the degree of milling to reduce bran inclusion is the most direct processing lever, though it conflicts with the product's high-fiber positioning. Washing or soaking raisins prior to incorporation can reduce surface-deposited Pb, though quantified data on reduction efficiency in commercial production are not available in the current corpus.

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Blending high-bran grain with lower-metal grain types, or adjusting the raisin-to-cereal ratio, redistributes the metal load across serving size. Substituting higher-purity mineral premix sources for fortification reduces the incidental metal contribution from that fraction.

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS testing of incoming bran and raisin fractions, with acceptance criteria for Cd and Pb, is the principal QC lever. Given the batch-to-batch variability expected in agricultural inputs, a composite sampling plan across multiple lots provides better coverage than single-lot spot checks.

### Packaging and storage levers

No significant Sn migration pathway applies to this product, which is not packaged in tinplate. Packaging and storage conditions are not a material driver of heavy metal load in this commodity.

## Regulatory limits that apply

For the cereal/bran fraction, the EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Cd in bran and germ products for direct human consumption of 0.20 mg/kg (200 ppb wet weight). For cereal grain intended for processing into foods for human consumption, the Cd limit is 0.10 mg/kg. No specific EU or Codex maximum level applies to the raisin component for Pb or Cd in the context of dried grape inclusions in mixed cereal products; fresh grapes are subject to an EU Pb limit of 0.10 mg/kg and Cd limit of 0.050 mg/kg, but the raisin concentration factor means the dried-fruit fraction may carry proportionally higher values. The FDA does not currently have a specific action level for Cd or Pb in ready-to-eat cereals; FDA Closer to Zero [[regulations/fda-closer-to-zero]] applies to foods intended for young children and infants, not to general adult cereals.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, bran with raisins (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
