---
title: "Bologna luncheon meat"
type: ingredient
commodity: bologna-luncheon-meat
label: "Bologna luncheon meat"
aliases: ["Luncheon meat, bologna", "bologna", "luncheon meat"]
category: meat
tds_food:
  number: 29
  description: "Luncheon meat, bologna"
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
    typical_ppb: [1.3, 3.8]
    p95_ppb: 4.1
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0.3, 2.0]
    p95_ppb: 2.1
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

# Bologna luncheon meat

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 29, "Luncheon meat, bologna." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Bologna luncheon meat is a processed pork (or pork-and-beef blend) product that incorporates mechanically separated or comminuted meat, fat, water, seasonings, curing salts, and binders, then is stuffed into a casing and heat-processed. The metal burden of bologna and similar processed meat products is driven by which animal tissues are incorporated into the formulation. Pure skeletal muscle meat is a low-accumulator matrix for most heavy metals; the primary concern arises when organ fractions (particularly kidney and liver) or mechanically separated meat (which includes bone and marrow fractions) are included. Kidney and liver, especially from cattle, are the principal dietary exposure routes for Cd in meat products because these organs are the biological sites of cadmium accumulation during the animal's lifetime.

The FDA FY2018-FY2020 TDS data for "Luncheon meat, bologna" (TDS Food 29, n=3) show Cd detectable in all three samples with a median of 1.6 ppb and a maximum of 4.4 ppb; Pb, Ni, tAs, and tHg were at or below detection limits; U showed a median of 1.4 ppb and a maximum of 2.2 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The Cd values, while low in absolute terms, reflect the organ and mechanically separated meat fractions in commercial bologna formulations. The small sample size (n=3) limits the confidence of the distribution estimate and particularly cannot characterize the upper tail or brand-to-brand variation driven by formulation differences.

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
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| Cd | n=2 | 1.3–3.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.3–2 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Luncheon meat, bologna" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 1.2 | 4.4 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 2.2 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 29, n=3) are the sole quantitative occurrence source in the current corpus and are limited to three composite samples, providing insufficient resolution for robust distributional inference ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Commercial bologna formulations vary considerably by producer in terms of the proportion of skeletal muscle versus organ or mechanically separated meat; this compositional variation is the primary driver of Cd concentration differences across brands and products. No geographic or formulation-class breakdown is available in TDS data. European liver sausage and German-style bologna (Fleischwurst), which may include higher organ fractions, are expected to show higher Cd than US bologna products with predominantly muscle-based formulations, but no European comparative data appear in the current corpus.

## Processing effects

The principal processing steps for bologna (comminution, emulsification, heat processing, casing) do not materially alter the metal content of the formulation; metals are retained in the protein and fat matrix throughout these steps. Smoking, where applied, introduces no relevant metallic contamination under normal commercial conditions. Casing type (natural, collagen, or plastic) does not affect metal content of the meat emulsion. The thermal processing step (steam-cooking or water immersion cooking to achieve internal pasteurization temperatures) does not remove metals from the emulsion matrix.

## Ingredient-derivative risk

Bologna is itself a finished processed meat product. It is used directly in sandwiches and salads; there are no significant downstream derivatives. Its relevance as an ingredient in this wiki is primarily as a proxy matrix for the processed meat category in the FDA TDS dataset, providing a reference distribution for Cd (from organ fractions) and U in processed meat emulsion products. The relatively low metal concentrations in TDS data (Cd maximum 4.4 ppb, all other monitored analytes at zero) indicate that commercially processed bologna in the US market is not a high-priority metal exposure vehicle relative to plant-based foods with direct soil contact.

## Mitigation options

### Sourcing levers

Reducing or eliminating the organ-meat fraction in formulation is the most effective sourcing-level lever for Cd reduction in bologna. Pure skeletal muscle meat formulations would be expected to carry lower Cd than formulations incorporating kidney or liver fractions. Sourcing from animals with documented low lifetime Cd exposure (younger animals, animals raised in low-Cd-soil environments) also reduces the Cd load in both organ and muscle fractions. _Quantified reduction factors comparing organ-inclusive versus muscle-only bologna are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Reformulating away from organ or mechanically separated meat fractions toward pure skeletal muscle is the primary formulation lever for Cd reduction. This is a commercially feasible lever, though it affects cost structure and USDA compositional labeling. _Quantified Cd reduction from reformulation in processed meat emulsions are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 establishes maximum levels for Pb and Cd in meat products. For processed meat products (including luncheon meats and sausages), the applicable Pb ML is 0.10 mg/kg (100 ppb) wet weight and the Cd ML is 0.050 mg/kg (50 ppb) wet weight ([[regulations/eu2023-contaminants-maximum-levels]]). For offal (organ meats), the EU applies a higher Cd ML of 1.0 mg/kg (1,000 ppb) in bovine kidney and 0.5 mg/kg in liver, reflecting the biological accumulation in those organs; these limits apply to the organ as a separate food rather than to a processed meat product incorporating organ fractions. In the United States, no FDA action level for Pb or Cd in processed meat products exists under the Closer to Zero framework ([[regulations/fda-closer-to-zero]]). The USDA Food Safety and Inspection Service (FSIS) regulates meat product composition and labeling but has not established specific heavy metal action levels for processed meat products in the current corpus. No Codex Alimentarius ML specific to processed luncheon meat or bologna appears in the current corpus.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Luncheon meat, bologna (n=3); detectable concentrations for Cd, U |
| 2 | [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|Shaltout et al. 2020]]. *Prevalence of Some Chemical Hazards in Some Meat Products*, Concepts of Dairy & Veterinary Sciences (Lupine Publishers) 3(4):000166 | 2020 | Peer-reviewed | Pb, Cd, and residual nitrite in 15 Egyptian luncheon meat samples with the highest concentrations across all three analytes in the luncheon category |
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
