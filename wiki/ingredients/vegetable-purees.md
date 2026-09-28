---
title: "Vegetable Purees"
type: ingredient
commodity: vegetable-purees
label: "Vegetable Purees"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
  tAs:
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
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [non-root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 1
---

# Vegetable Purees

## Overview

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/non-root-vegetable-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Vegetable purees inherit heavy metals from the source vegetables. The Cat 1 Step 0 lock splits vegetable purees into two row categories based on source-vegetable Cd/Pb accumulation:

**[[products/root-vegetable-purees]]** — carrot, sweet potato, potato, beet, parsnip, turnip puree. Root vegetables accumulate Cd and Pb from soil at moderate efficiency (see [[ingredients/carrots]], [[ingredients/sweet-potato]], [[ingredients/root-vegetables]]). This row carries the higher Cd loading.

**[[products/non-root-vegetable-purees]]** — spinach, kale, broccoli, peas, green-bean, squash, zucchini, tomato puree. Non-root vegetables include leafy greens (high-Cd-accumulator) and non-leafy non-root vegetables (lower-Cd-accumulator). Spinach specifically is at the upper end and is split as a Cat 4 higher-contamination row (see [[ingredients/spinach]]).

The HMTc panel concerns for vegetable purees are dominantly Cd and Pb, with subcategory variance driven by source-vegetable choice. The infant exposure pathway concentrates per-body-weight intake.

## Ranges by source, region, and variety

Root vegetable purees: carrot puree typically dominates per-volume Cd among single-ingredient root-vegetable purees because carrots are moderate Cd accumulators and carrot puree is the most common single-ingredient infant root-vegetable product. Sweet potato and potato purees carry lower Cd typically. Spinach and leafy-green purees carry the highest Cd among non-root vegetable purees because of the leafy-green Cd-accumulation pathway.

[[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]] and [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019 (HBBF)]] characterize Spanish-market and US-market baby food vegetable purees respectively.

## Processing effects

Vegetable puree processing (washing, peeling for root vegetables, blanching, pureeing, heat treatment, packaging) does not change source-vegetable metal content meaningfully. Washing and peeling at the manufacturer stage remove surface-deposited Pb for root vegetables (see [[ingredients/carrots]] for the washing-and-peeling discussion). Blanching does not reduce panel metals. Heat treatment for shelf-stability does not change panel metals.

## Ingredient-derivative risk

Vegetable purees are themselves finished retail products. Concentrated vegetable puree (used as flavor or color in compounded products) carries elevated per-mass metal. Vegetable-puree-based finished products (vegetable pouches, vegetable-and-meat combinations, vegetable-and-grain combinations) inherit the source-puree profile proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Vegetable-source-region sourcing from documented low-Cd-Pb production areas, hydroponic-or-greenhouse sourcing for leafy-green-containing purees, and supplier soil verification.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the upstream vegetable-production stage (see per-vegetable ingredient pages).

**Processing levers** ([[mitigation/processing]]) include washing and peeling for root vegetables (effective for surface-deposited Pb), blanching-water-discard (small additional fraction).

**Formulation levers** ([[mitigation/formulation]]) include vegetable-species substitution (substituting lower-Cd-accumulator vegetables for spinach in spinach-containing infant pouches reduces per-serving Cd substantially), vegetable-percentage adjustment, and single-vegetable vs mixed-vegetable formulation choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and Pb testing on finished vegetable purees, particularly for infant-targeted products. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include pouch and jar material specifications.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action levels for processed baby foods: 10 ppb for non-root-vegetable purees, 20 ppb for single-ingredient carrot or sweet-potato root-vegetable purees.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Cd and Pb maximum levels for infant-and-young-child vegetable-based foods. Spinach-specific Cd ML applies to spinach purees.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Cd and Pb MADLs applied to vegetable purees sold in California.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 220: BF, mixed vegetables | tAs | 8 | 1 | 3.1 | 3 |
| 220: BF, mixed vegetables | Cd | 8 | 8 | 6.4–20 | 1 |
| 220: BF, mixed vegetables | Cr | 8 | 0 | ND in all composites | 50 |
| 220: BF, mixed vegetables | Pb | 8 | 6 | 4.8–8.6 | 4 |
| 220: BF, mixed vegetables | tHg | 8 | 0 | ND in all composites | 1 |
| 220: BF, mixed vegetables | Ni | 8 | 8 | 58–130 | 40 |
| 220: BF, mixed vegetables | U | 8 | 0 | ND in all composites | 1 |
| 320: BF, squash | tAs | 8 | 0 | ND in all composites | 3 |
| 320: BF, squash | Cd | 8 | 7 | 1–1.9 | 1 |
| 320: BF, squash | Cr | 8 | 7 | 69–300 | 50 |
| 320: BF, squash | Pb | 8 | 0 | ND in all composites | 4 |
| 320: BF, squash | tHg | 8 | 0 | ND in all composites | 1 |
| 320: BF, squash | Ni | 8 | 8 | 89–600 | 40 |
| 320: BF, squash | U | 8 | 0 | ND in all composites | 1 |
| 747: BF, peas & spinach, glass jar | tAs | 1 | 1 | 3.2 | 3 |
| 747: BF, peas & spinach, glass jar | Cd | 1 | 1 | 7.2 | 1 |
| 747: BF, peas & spinach, glass jar | Cr | 1 | 1 | 200 | 50 |
| 747: BF, peas & spinach, glass jar | Pb | 1 | 0 | ND in all composites | 4 |
| 747: BF, peas & spinach, glass jar | tHg | 1 | 0 | ND in all composites | 1 |
| 747: BF, peas & spinach, glass jar | Ni | 1 | 1 | 250 | 40 |
| 747: BF, peas & spinach, glass jar | U | 1 | 0 | ND in all composites | 1 |
| 750: BF, peas, green beans & avocado, pouch | tAs | 5 | 4 | 3.7–4.5 | 3 |
| 750: BF, peas, green beans & avocado, pouch | Cd | 5 | 4 | 1.2–1.3 | 1 |
| 750: BF, peas, green beans & avocado, pouch | Cr | 5 | 5 | 75–200 | 50 |
| 750: BF, peas, green beans & avocado, pouch | Pb | 5 | 1 | 4.3 | 4 |
| 750: BF, peas, green beans & avocado, pouch | tHg | 5 | 0 | ND in all composites | 1 |
| 750: BF, peas, green beans & avocado, pouch | Ni | 5 | 5 | 260–420 | 40 |
| 750: BF, peas, green beans & avocado, pouch | U | 5 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
3. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 1 source removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
