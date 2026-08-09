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
    typical_ppb: [0, 4]
    p95_ppb: 8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
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

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 84, "Applesauce, bottled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Applesauce is a heat-processed purée of whole apples, typically with added water and sometimes sweetener; its metal content is determined almost entirely by the metal load of the apples used and by the processing steps applied. The same accumulation routes that govern fresh apple apply: legacy orchard soil contamination from historical lead arsenate pesticide use, root uptake from soil, and atmospheric deposition on fruit surfaces during the growing season. Heat processing to produce applesauce does not remove metals. Peeling apples before cooking, where practiced commercially, eliminates the surface-deposited Pb fraction but does not affect metals absorbed into the flesh. The FDA FY2018-FY2020 TDS data for bottled applesauce (TDS Food 84, n=3) show all measured analytes reported at zero across those three samples ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), which is consistent with the generally low metal concentrations observed in fresh apple in the same dataset but reflects a very small sample and warrants confirmation with additional occurrence data.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/barber2025-baby-food-elements-us\|2]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|3]], [[sources/troeschel2024-cinnamon-applesauce-lead\|4]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|5]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/troeschel2024-cinnamon-applesauce-lead\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The earlier profile recorded applesauce lead at [0, 0] with a p95 of 0. That value came from the FDA Total Diet Study reporting the three bottled applesauce samples below the 4 ppb reporting limit as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The cell is now treated as left-censored at the 4 ppb reporting limit on a processed-fruit-as-consumed basis, so it reads as below the reporting limit rather than as an absolute zero.

Broader occurrence data confirm apple-based purees are among the lower-lead matrices without being empty. The 2023 FDA convenience survey ([[sources/barber2025-baby-food-elements-us|Barber et al. 2025]]) placed baby-food puree lead at a mean of 1.4 ppb and a P90 of 8 ppb, with the high tail attributable to sweet potato and carrot rather than apple, and fresh apple runs to about 24 ppb ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]]). The 2023 to 2024 WanaBana cinnamon-applesauce episode reached roughly 1900 to 3000 ppb lead ([[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel et al. 2024]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC|Napier et al. 2024]]), but that was a criminal lead-chromate adulteration of the cinnamon ingredient and not part of the applesauce occurrence distribution, so it is carried as an adulteration warning and excluded from the percentile estimate.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Applesauce, bottled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | North Carolina pediatric blood-lead surveillance documenting the WanaBana apple-cinnamon puree Pb outbreak with finished product at 1.9–3.0 ppm Pb |
| 2 | [[sources/troeschel2024-cinnamon-applesauce-lead\|Troeschel et al. 2024]]. *Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024*, Morbidity and Mortality Weekly Report (MMWR) | 2024 | Government report | National CDC investigation of 566 lead and chromium poisoning cases tied to cinnamon-containing applesauce with lead chromate identified as the adulterating agent |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Applesauce, bottled (n=3); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
