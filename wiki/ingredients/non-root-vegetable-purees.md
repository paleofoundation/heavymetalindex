---
title: "Non-root vegetable purees"
type: ingredient
commodity: non-root-vegetable-purees
label: "Non-root vegetable purees"
aliases: [vegetable puree, squash puree, pea puree]
category: vegetable-preparation
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 3.11]
    p95_ppb: 4.44
    confidence: low
    n_studies: 2
    last_reviewed: 2026-07-27
  Cd:
    status: populated
    typical_ppb: [0.027, 1.51]
    p95_ppb: 1.57
    confidence: low
    n_studies: 2
    last_reviewed: 2026-07-27
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-07-27
  tHg:
    status: populated
    typical_ppb: [0, 1.5]
    p95_ppb: 1.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-07-27
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 1
---

# Non-root Vegetable Purees

## Overview

This is a structural ingredient node for non-root vegetable puree inputs. Ingredient-level values belong here once parsed; finished-product values belong on [[products/non-root-vegetable-purees]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–3.11 | low | — |
| Cd | n=2 | 0.027–1.51 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5 | low | — |
| tHg | n=2 | 0–1.5 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Non-root vegetable purees is the aggregate ingredient label for infant-and-toddler purees made from non-root-vegetable bases including [[ingredients/squash|squash and pumpkin]], green beans, [[ingredients/leafy-greens|leafy greens]] (spinach, peas), cauliflower, broccoli, [[ingredients/cucumbers|cucumber]], zucchini, and similar fruit-vegetables and aerial vegetables. Non-root vegetables sit at lower per-mass [[metals/lead|Pb]] than root vegetables because they do not grow in direct soil-contact, but leafy non-root vegetables (spinach, kale, peas) can carry elevated [[metals/cadmium|Cd]] via the leafy-vegetable accumulation pathway documented on [[ingredients/leafy-greens|leafy-greens]].

The FDA Closer to Zero baby-food Pb action level differentiates non-root vegetable purees (10 ppb Pb) from root vegetable purees (20 ppb Pb) — the tighter limit on non-root reflects the lower baseline plus consumer expectation of lower contamination. The HMTc panel concerns for non-root vegetable purees are Cd (notably in leafy-green-containing formulations like spinach puree, green-pea puree), trace Pb, and trace iAs. Routes into [[products/non-root-vegetable-purees|non-root-vegetable-purees]] (Cat 1 row for infant non-root-vegetable products).

## Ranges by source, region, and variety

Variance within non-root vegetable purees tracks the source-vegetable mix (squash-only vs spinach-only vs mixed-vegetable formulations), source-region soil profile, and processing tier. Squash and butternut purees sit at the lower end of the non-root vegetable Pb/Cd range. Leafy-green purees (spinach, kale, pea) sit at the higher end, particularly for Cd.

## Processing effects

Non-root-vegetable puree manufacturing involves washing, cooking, pureeing, and packaging. Washing reduces surface-deposited Pb. Cooking does not reduce internalized metals (Cd in leafy tissue). Pureeing concentrates per-mass metals slightly via water-content reduction. Sterilization (retort processing for jarred and pouched products) does not affect metals.

## Ingredient-derivative risk

Non-root vegetable purees route into the Cat 1 row [[products/non-root-vegetable-purees|non-root-vegetable-purees]] product family. Derivatives include single-vegetable purees (squash puree, spinach puree, green-bean puree) and mixed-vegetable purees. Mixed-meals products containing non-root vegetables alongside grains, proteins, or other ingredients dilute the per-product metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-vegetable origin specification; supplier-soil verification programs (particularly for leafy-vegetable suppliers); greenhouse-and-hydroponic production specification where the matrix permits; and contractual Pb/Cd ceiling on incoming non-root vegetables.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the non-root-vegetable cultivation stage. Soil pH management; soil amendments; cultivar selection (low-Cd-accumulating spinach and pea cultivars are documented).

**Processing levers** ([[mitigation/processing]]) include washing optimization for surface-Pb removal; processing-equipment material specification.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of higher-Cd leafy-vegetable bases (spinach) with lower-Cd alternatives (squash, green beans) where the matrix permits; reducing the leafy-vegetable fraction in mixed-non-root-vegetable formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on finished non-root-vegetable purees against FDA Closer to Zero 10 ppb Pb action level for non-root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include modern glass-jar, pouch, or aseptic-carton packaging.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child foods.
- FDA Closer to Zero baby-food Pb action level: 10 ppb for non-root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to non-root-vegetable-puree products sold in California.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 219: BF, green beans | tAs | 8 | 0 | ND in all composites | 3 |
| 219: BF, green beans | Cd | 8 | 8 | 1–2.2 | 1 |
| 219: BF, green beans | Cr | 8 | 1 | 50 | 50 |
| 219: BF, green beans | Pb | 8 | 0 | ND in all composites | 4 |
| 219: BF, green beans | tHg | 8 | 0 | ND in all composites | 1 |
| 219: BF, green beans | Ni | 8 | 8 | 93–250 | 40 |
| 219: BF, green beans | U | 8 | 0 | ND in all composites | 1 |
| 223: BF, peas | tAs | 8 | 0 | ND in all composites | 3 |
| 223: BF, peas | Cd | 8 | 0 | ND in all composites | 1 |
| 223: BF, peas | Cr | 8 | 0 | ND in all composites | 50 |
| 223: BF, peas | Pb | 8 | 0 | ND in all composites | 4 |
| 223: BF, peas | tHg | 8 | 0 | ND in all composites | 1 |
| 223: BF, peas | Ni | 8 | 8 | 100–180 | 40 |
| 223: BF, peas | U | 8 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [a1c3b5b598](https://github.com/paleofoundation/heavymetalindex/commit/a1c3b5b598) | 2026-07-27 | correction | Contamination-profile values revised |
<!-- END: hmi-page-history -->
