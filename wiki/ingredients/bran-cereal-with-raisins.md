---
title: "Bran cereal with raisins"
dek: "A breakfast cereal combining grain bran and dried grapes. Explore the evidence on measured metals, grain fractions, fortification and processing."
rail_highlights:
  - label: Exposure
    text: Cadmium was detected in tested bran cereal with raisins
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Cereal non detections are not measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
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
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::74::mercury","role":"value","food_id":"74","food_name":"Cereal, bran with raisins","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
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
hero_image: /static/heroes/oats-porridge-granola-bran-cereals.webp
quick_read:
  summary: "Bran cereal with raisins combines metals retained in outer grain layers with dried-fruit and fortification contributions."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]], lead, nickel, and chromium are relevant; rice bran introduces an additional inorganic arsenic concern"
    - label: Main drivers
      text: "bran retention, raisin drying, source-grain soil uptake, and mineral premix purity"
    - label: Practical framing
      text: "distinguish bran-rich from refined cereals and wheat from rice bran; extrusion does not materially reduce metals"
hero_image_alt: "Rolled oats, oatmeal, granola, oat rings and bran cereal with raisins illustrating bran cereal with raisins ingredient context."
---

# Bran cereal with raisins

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Bran cereal with raisins combines metals retained in outer grain layers with dried-fruit and fortification contributions.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a>, lead, nickel, and chromium are relevant; rice bran introduces an additional inorganic arsenic concern</li>
    <li><strong>Main drivers:</strong> bran retention, raisin drying, source-grain soil uptake, and mineral premix purity</li>
    <li><strong>Practical framing:</strong> distinguish bran-rich from refined cereals and wheat from rice bran; extrusion does not materially reduce metals</li>
  </ul>
</div>

This page draws on evidence from [[sources/fda2022-tds-elements-fy2018-fy2020|FDA]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

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
| tHg | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 122–186 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 100–260 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.2–4 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 74: Cereal, bran with raisins | tAs | 3 | 3 | 13–26 | 3 |
| 74: Cereal, bran with raisins | Cd | 3 | 3 | 27–44 | 1 |
| 74: Cereal, bran with raisins | Cr | 3 | 3 | 100–300 | 50 |
| 74: Cereal, bran with raisins | Pb | 3 | 2 | 5.2–16 | 4 |
| 74: Cereal, bran with raisins | tHg | 3 | 0 | ND in all composites | 1 |
| 74: Cereal, bran with raisins | Ni | 3 | 3 | 120–200 | 40 |
| 74: Cereal, bran with raisins | U | 3 | 2 | 1–4.7 | 1 |
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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, bran with raisins (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
