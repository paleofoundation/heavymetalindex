---
title: "Blueberry muffin"
type: ingredient
commodity: blueberry-muffin
label: "Blueberry muffin"
aliases: ["Muffin, blueberry", "blueberry muffin"]
category: grain-product
tds_food:
  number: 65
  description: "Muffin, blueberry"
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
    typical_ppb: [7.3, 10]
    p95_ppb: 10.7
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
    typical_ppb: [0, 4.3]
    p95_ppb: 4.5
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
    typical_ppb: [0, 56.8]
    p95_ppb: 60.8
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
    typical_ppb: [0.7, 2.8]
    p95_ppb: 3.4
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

# Blueberry muffin

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 6 claims checked, 6 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming blueberry-muffin: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 7 metal(s) covered | unmapped analytes: Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.75, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.75 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 65, "Muffin, blueberry." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

A blueberry muffin is a composite grain-based product whose metal content reflects the blended contribution of its constituent ingredients: wheat flour, fat (oil or butter), eggs, sugar, blueberries, and leavening agents. No single ingredient dominates the metal profile; rather, the overall contamination profile is a diluted mixture of each ingredient's characteristic burden. Wheat flour contributes trace amounts of Cd and Pb from cereal grain accumulation in soil; blueberries contribute whatever metals they carry from acidic soil uptake; eggs and fats are generally low-metal; sugar and leavening are minor contributors. The result is a lower per-gram metal burden than grain-only products (bread, pasta) because of the dilution by fat and sugar.

The FDA FY2018-FY2020 TDS data for "Muffin, blueberry" (TDS Food 65, n=27) show Cd detectable in all 27 samples with a median of 8.5 ppb and a maximum of 12 ppb; Ni was detectable in the upper distribution (maximum 72 ppb); tAs showed a maximum of 5.3 ppb; U was present with a median of 1.9 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Pb was below detection for most samples (maximum 5 ppb). These distributions are consistent with a grain-based bakery product containing moderate amounts of fruit: Cd primarily from the flour, Ni from the combination of flour and blueberries, tAs from the cereal grain fraction.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 7.3–10 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–4.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–56.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.7–2.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Muffin, blueberry" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 6.8 | 12 | in profile |
| Cr | 27 | 0 | 56 | in profile |
| Ni | 27 | 0 | 72 | in profile |
| Pb | 27 | 0 | 5 | in profile |
| U | 27 | 0 | 4.3 | in profile |
| tAs | 27 | 0 | 5.3 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 65, n=27) are the sole quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). TDS composite samples represent commercial blueberry muffins purchased at retail across multiple US cities, reflecting the blend of ingredient sources used by commercial bakeries at the time of sampling. Variation in the Cd and tAs concentrations of individual muffin batches would be driven primarily by the flour source (wheat grown in higher or lower soil-Cd regions) and the blueberry fraction (which may vary in metal content by season and provenance). The TDS's n=27 samples span multiple purchase periods and likely capture reasonable batch-to-batch variation for US commercial product. No non-US or artisanal-bakery occurrence data appear in the current corpus.

## Processing effects

Baking a muffin does not remove metals; the oven heat-curing step distributes ingredients into a finished baked matrix without reducing metal concentrations in the flour, fat, or fruit components. Chemical leavening (baking powder, baking soda) and heat-treatment do not interact with heavy metals in a way that reduces concentrations. Formulation-level dilution (the ratio of flour to fat to fruit to liquid in the recipe) is the main determinant of the per-gram metal burden in the baked product: muffins with a higher flour fraction relative to total weight carry more Cd and tAs per gram, while muffins with a higher fat-and-sugar fraction dilute the grain-derived metals. Commercial blueberry muffins sold at TDS-sampled retail are standardized formulations; artisanal variants may have significantly different flour-to-total-weight ratios.

## Ingredient-derivative risk

As a finished bakery product, the blueberry muffin itself is a derivative of its ingredients rather than a source for further downstream derivatives. Its relevance to this wiki is as a representative composite grain-and-fruit bakery product in the FDA TDS dataset; the data inform the expected metal burden of grain-based bakery products with modest fruit content relative to, for example, bread (grain-only, higher Cd per gram) or fruit purée (fruit-only, different metal profile). The TDS values for this composite product are used as one data point in understanding the metal exposure from bakery-product consumption patterns in the US diet.

## Mitigation options

### Sourcing levers

Sourcing wheat flour from regions or producers with documented low soil Cd reduces the flour fraction's contribution to Cd in the finished muffin. Selecting low-Cd-accumulating wheat varieties is a grain-level sourcing lever. _Quantified reduction factors for these levers in blueberry muffin production are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Reducing the proportion of wheat flour relative to total weight (substituting with lower-metal ingredients such as oat flour from low-Cd oat varieties, or increasing the fat-and-fruit fraction) would reduce per-gram Cd and tAs in the finished muffin. However, formulation-level changes that affect product texture and functionality require testing to maintain product quality. _Quantified reduction factors for these formulation levers are not available in the current corpus._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

A blueberry muffin is a composite bakery product, and no commodity-specific EU or US regulatory ML is established for blueberry muffins as a product category under current regulations. The applicable regulatory framework derives from the ingredient-level limits: wheat flour is subject to grain Cd MLs under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), and blueberries are subject to fresh fruit Pb and Cd limits. At the finished-product level, the EU general food safety framework (Regulation (EC) No 178/2002) applies, but no specific ML for Pb, Cd, or tAs in muffins is established in the current corpus. In the United States, no FDA action level for Pb, Cd, or tAs in bakery products exists under the Closer to Zero framework ([[regulations/fda-closer-to-zero]]); that program has focused on processed infant and toddler foods rather than general-population bakery products. No Codex Alimentarius ML specific to composite grain bakery products appears in the current corpus.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Muffin, blueberry (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page. Major means evidence or structure moved: sources entered or left the page, sections were added, or contamination-profile values were revised. Correction means a published value or statement was wrong and has been fixed. Minor means the narrative was rewritten without changing the underlying evidence. Each description is derived from what the edit did to this page, and each linked commit is the authoritative record of the change; routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [610c5f3b8](https://github.com/paleofoundation/heavymetalindex/commit/610c5f3b8) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
