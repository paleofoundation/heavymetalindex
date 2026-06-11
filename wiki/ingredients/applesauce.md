---
title: "Applesauce"
type: ingredient
commodity: applesauce
label: "Applesauce"
aliases: ["Applesauce, bottled", "applesauce"]
category: fruit-product
tds_food:
  number: 84
  description: "Applesauce, bottled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 3
---

# Applesauce

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=15 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | below-tier | 2 jurisdictions, top US 100% | over-concentrated: US supplies 100% of sources |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 7 claims checked, 7 supported; 3 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming applesauce: fda2022-tds-elements-fy2018-fy2020, fsa2016-infant-food-formula-metals-survey, napier2024-wanabana-lead-apple-cinnamon |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 84, "Applesauce, bottled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Applesauce is a heat-processed purée of whole apples, typically with added water and sometimes sweetener; its metal content is determined almost entirely by the metal load of the apples used and by the processing steps applied. The same accumulation routes that govern fresh apple apply: legacy orchard soil contamination from historical lead arsenate pesticide use, root uptake from soil, and atmospheric deposition on fruit surfaces during the growing season. Heat processing to produce applesauce does not remove metals. Peeling apples before cooking, where practiced commercially, eliminates the surface-deposited Pb fraction but does not affect metals absorbed into the flesh. The FDA FY2018-FY2020 TDS data for bottled applesauce (TDS Food 84, n=3) show all measured analytes reported at zero across those three samples ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), which is consistent with the generally low metal concentrations observed in fresh apple in the same dataset but reflects a very small sample and warrants confirmation with additional occurrence data.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=3 | 0 | 0 | medium | [[sources/troeschel2024-cinnamon-applesauce-lead\|1]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Cd | n=2 | 0 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | low | [[sources/troeschel2024-cinnamon-applesauce-lead\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Applesauce, bottled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS dataset for bottled applesauce (TDS Food 84, n=3) is the sole quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). All seven analytes measured in that dataset (Cd, Cr, Ni, Pb, U, tAs, tHg) were reported as zero across all three samples, indicating concentrations at or below detection limits under TDS analytical conditions. With n=3, this distribution provides low confidence in the central tendency and cannot characterize the upper tail of the distribution or geographic or varietal variation. Regional variation in apple source (domestic versus imported concentrate) and variety selection (Gala, Fuji, Golden Delicious) may influence metal concentrations but are not resolvable from TDS data alone. Synthesis of ranges will be updated when additional sources with geographic and variety metadata are integrated.

## Processing effects

The primary processing steps for commercial applesauce are washing, peeling (in most commercial processes), coring, cooking, milling to purée, and hot-fill packaging. Washing removes surface-deposited metals, particularly Pb from atmospheric deposition; peeling removes the skin layer and eliminates the surface-contaminated fraction. Cooking and milling do not remove metals from the fruit matrix. Glass and plastic jar packaging do not contribute Sn contamination; applesauce is not typically commercially canned in tinplate at retail, although the FSA UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) used pooled composite samples that may have included various packaging types. For organic applesauce, pesticide residue routes differ from conventional product but the fundamental metal accumulation pathways (soil uptake, atmospheric deposition) remain the same.

## Ingredient-derivative risk

Applesauce is itself a derivative of whole apple. Its principal use is as a finished product (retail jar, baby food pouch) and as a functional ingredient in baked goods (fat replacer) and baby food combinations. When applesauce is used in baby food pouches blended with other ingredients (grains, vegetables, other fruits), the metal load of each contributing ingredient adds to the total. The WanaBana incident highlighted that when a spice like cinnamon is added to an apple-based pouch, the spice's metal burden can dominate the product's metal risk even when the apple component is clean ([[sources/napier2024-wanabana-lead-apple-cinnamon|Napier et al. 2024]]); this is an ingredient-derivative risk at the formulation level rather than a risk intrinsic to the applesauce ingredient.

## Mitigation options

### Sourcing levers

Sourcing apples from orchards with documented low soil Pb and arsenic, and with no historical lead arsenate pesticide application, represents the primary upstream lever. For commercial applesauce production, specification of domestic US or verified clean-origin apple concentrate reduces exposure to higher-arsenic supply chains. _Quantified reduction factors specific to applesauce are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Commercial peeling before cooking removes the skin layer and associated surface-deposited Pb. _Quantified Pb reduction from peeling in an applesauce production context is not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

For baby food pouches and blended products, avoidance of high-metal spice additives (e.g., cinnamon from unverified sources) is a formulation lever relevant to the final product's total metal burden, as illustrated by the WanaBana cinnamon contamination event ([[sources/napier2024-wanabana-lead-apple-cinnamon|Napier et al. 2024]]).

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

For applesauce as a finished food product in the European Union, Regulation (EU) 2023/915 applies the fresh fruit maximum levels as a starting point; however, for processed fruit products, a separate ML applies. Processed fruit products (purees, sauces) for the general population are subject to the applicable ML for the corresponding fresh fruit: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), wet weight ([[regulations/eu2023-contaminants-maximum-levels]]). For applesauce intended for infants and young children, the EU applies stricter MLs for Pb (0.020 mg/kg, 20 ppb). In the United States, no FDA commodity-specific action level for Pb or Cd in applesauce as a finished retail product exists under current regulations; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) has proposed action levels for Pb in processed foods for babies and young children that may encompass apple-based baby food products. No specific Codex Alimentarius ML for contaminants in applesauce appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | North Carolina pediatric blood-lead surveillance documenting the WanaBana apple-cinnamon puree Pb outbreak with finished product at 1.9–3.0 ppm Pb |
| 2 | [[sources/troeschel2024-cinnamon-applesauce-lead\|Troeschel et al. 2024]]. *Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024*, Morbidity and Mortality Weekly Report (MMWR) | 2024 | Government report | National CDC investigation of 566 lead and chromium poisoning cases tied to cinnamon-containing applesauce with lead chromate identified as the adulterating agent |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Applesauce, bottled (n=3); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
