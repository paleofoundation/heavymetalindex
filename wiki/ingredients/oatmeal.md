---
title: "Oatmeal"
type: ingredient
commodity: oatmeal
label: "Oatmeal"
aliases: ["Oatmeal, plain, quick, cooked", "oatmeal", "cooked oats"]
category: grain
tds_food:
  number: 51
  description: "Oatmeal, plain, quick, cooked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.9, 2.5]
    p95_ppb: 2.5
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
    typical_ppb: [0, 4.1]
    p95_ppb: 4.6
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
    typical_ppb: [260, 300]
    p95_ppb: 305
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 2
---

# Oatmeal

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=14 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | below-tier | 1 jurisdictions, top US 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming oatmeal: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 51, "Oatmeal, plain, quick, cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Oatmeal (rolled or steel-cut oats, consumed as a cooked porridge) carries the metal profile of whole oat grain with minor modifications introduced by cooking. Oats are among the cereal grains with the highest nickel content, a characteristic documented in European dietary exposure assessments and in EFSA's 2020 nickel opinion, which identifies cereals (including oats) as a major dietary Ni source. The accumulation mechanism is soil uptake through root systems: Ni is present in many soils at trace levels and is taken up by oat plants without the active restriction mechanisms that some cereals employ. Cadmium in oat grain accumulates via the same root-uptake pathway, with concentrations influenced by soil pH and soil Cd levels; the outer bran and aleurone layers of the oat grain carry higher Cd than the inner endosperm. Rolled oats retain the full bran layer, while instant oat products may use more finely processed grain with similar overall extraction rate but different particle size. Lead is not efficiently translocated to oat grain under typical growing conditions, and tHg is not a significant concern in terrestrial cereal grains.

FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for cooked oatmeal (TDS Food 51, n=3 composites) show detectable Ni at 260 to 310 ppb and Cd at 1.9 to 2.6 ppb in the cooked (hydrated) product, with Pb, Cr, tHg, and U at or below detection limits in this sample set. The cooked-oatmeal basis reflects the water-dilution effect of cooking; the dry oat grain basis would show proportionally higher concentrations.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.9–2.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–4.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 260–300 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Oatmeal, plain, quick, cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 1.9 | 2.6 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 260 | 310 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 5.1 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The principal dimension of variation in oatmeal Ni and Cd content is oat-grain sourcing region and soil characteristics. Oats grown on soils with higher background Ni (which correlates with certain geologic formations in Scandinavia, Ireland, and parts of Scotland) produce grain at the higher end of the Ni range documented in European monitoring. Cd variation tracks soil pH and anthropogenic Cd deposition history; oats from regions with legacy phosphate-fertilizer use on agricultural soils may carry modestly elevated Cd. The difference between steel-cut, rolled, and instant oat formats is less important for metal content than the underlying grain composition: all three retain the bran and aleurone layer that concentrates Cd, and the processing differences (cutting versus rolling versus partial cooking and re-drying) do not selectively remove metals. The FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] cover cooked plain oatmeal in the US retail market; geographic breakdown within the US is not available from this source.

## Processing effects

Cooking oatmeal in water is the defining processing step, and it materially affects the wet-weight metal concentration relative to dry grain. Adding water in roughly a 2:1 or higher ratio to dry oats dilutes per-unit-weight concentrations in the cooked product. The FDA TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] represent the cooked-and-ready-to-eat product, so values are on a cooked-wet-weight basis; comparisons with uncooked grain data from the literature require moisture-correction. Cooking does not selectively leach Ni or Cd from oat grain into the cooking water in substantial amounts because these metals are bound to grain proteins and phytate rather than freely dissolved; the cooking-water leaching effect documented for some metals in boiled pasta is less pronounced in porridge preparation where the water is absorbed rather than drained. Steel-cutting versus rolling does not materially change the metal extraction behavior during cooking. Instant oat processing (partial pre-cooking and re-drying) introduces an additional water-removal step that concentrates analytes in the dry product relative to rolled oats, which then re-dilute to comparable levels on a cooked-basis comparison.

## Ingredient-derivative risk

Oat bran, separated from the grain during milling, concentrates Cd and Ni relative to whole oat because the bran fraction is where both metals preferentially accumulate. Oat flour at full extraction rate carries a similar metal profile to rolled oats on a dry weight basis; low-extraction oat flour (inner endosperm only) carries less Cd and Ni. Oat milk, produced by aqueous extraction of rolled oats followed by filtration, carries a portion of the water-soluble Ni and Cd fraction; the filtered oat residue retains a larger share. Oat protein concentrate, produced by further fractionation, may have a different metal distribution depending on which protein fractions are recovered and which are discarded in the processing stream.

## Mitigation options

### Sourcing levers

Sourcing oat grain or rolled oats from regions and suppliers with documented low soil Ni and Cd is the most effective upstream lever. For manufacturers formulating products where Ni is a concern (products targeting consumers with systemic contact dermatitis from nickel), supplier disclosure of grain Ni data enables specification and lot-level control.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Selecting lower-extraction oat flour (removing the bran fraction) reduces Cd and Ni in formulated oat-containing products, at the trade-off of reduced whole-grain nutritional positioning. For consumer-prepared oatmeal, using a larger water-to-oat ratio dilutes per-serving metal intake on a prepared-basis comparison.

### Formulation levers

Blending rolled oats with lower-Ni ingredients (white rice, tapioca) in a mixed-grain porridge product reduces per-serving Ni dose. This is relevant for product formulations where Ni exposure thresholds are a certification or labeling concern.

### Testing and QC levers

Lot-level ICP-MS testing of rolled oats or oat flour for Ni and Cd provides reliable quality-control data for manufacturers where these analytes are relevant. Ni in particular can vary meaningfully across lots given grain-sourcing variability.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets maximum levels for Cd in cereal products at 0.10 mg/kg and Pb at 0.20 mg/kg (dry weight basis for processed cereal products). These limits apply to oatmeal as a processed cereal-based food. No specific EU Ni limit applies to oatmeal or oat-based foods. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb reference levels for cereal products. See [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Oatmeal, plain, quick, cooked (n=3); detectable concentrations for Cd, Ni, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
