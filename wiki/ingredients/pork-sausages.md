---
title: "Pork sausages"
dek: "Processed meat products combining pork, fat, seasonings and sometimes cereal fillers. Explore the evidence on formulation, metal occurrence, cooking and regulatory context."
rail_highlights:
  - label: Exposure
    text: Lead reported in tested pork sausages
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Nondetections in tested sausages do not establish zero concentrations
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: pork-sausages
label: "Pork sausages"
aliases: [pork sausage]
category: meat-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.4]
    p95_ppb: 4.9
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0.7
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::19::arsenic-total","role":"value","food_id":"19","food_name":"Pork sausage (link/patty), pan-cooked","metal_species":"tAs","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":3,"reporting_limit_max_ppb":3,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 5
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 43
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 50
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.3]
    p95_ppb: 1.6
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
hero_image: /static/heroes/frankfurter-sausages.webp
hero_image_alt: "Plain frankfurter sausages and a cut section showing their pink interior illustrating pork sausages ingredient context."
---

# Pork sausages

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Pork sausages are processed meat products made from a mixture of minced pork meat, fat, flavourings, and typically cereal-based fillers such as wheat rusk or breadcrumbs, encased in natural or collagen casings. The heavy metal profile of pork sausages reflects contributions from three distinct ingredient pathways, each with a different metal source.

The dominant pork meat fraction, which comprises skeletal muscle and fat, contributes very low levels of cadmium and lead because these metals do not bioaccumulate efficiently in mammalian muscle or adipose tissue. However, many commercial sausage formulations include a small proportion of mechanically recovered meat (MRM) or offal trimmings, and sausages containing any liver or kidney fraction carry elevated Cd from those organ tissues, where cadmium concentrates at levels roughly 10 to 100 times higher than skeletal muscle following dietary accumulation in the pig.

The cereal filler fraction (typically wheat rusk) introduces cadmium through the well-documented wheat grain Cd pathway: cadmium is taken up by wheat roots from soil and translocates to grain, and the bran fraction that is often present in rusk carries higher Cd than white flour derived from the endosperm. Wheat-rusk inclusion at levels of 5-15 percent by weight in standard pork sausage formulations represents a meaningful Cd contributor to the finished product.

The casing does not contribute significant metals. Natural casings (cleaned intestine) would carry minimal residual Cd or Pb. Collagen casings do not introduce metals at analytically significant levels. Seasonings and flavourings at typical inclusion levels are negligible metal contributors unless specific flavouring ingredients have known elevated metal profiles.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–4.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 dataset; composites=27 | ND (<3; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|2]], [[sources/zhang2022-pork-heavy-metals-china\|3]] |
| Ni | n=3 | 0–10 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/manfredi2025-nickel-meat-italy\|2]], [[sources/dibella2020-augusta-meat-milk-seafood-metals\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–50 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dibella2020-augusta-meat-milk-seafood-metals\|2]], [[sources/khalafalla2011-beef-carcasses-metals-egypt\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.3 | low | — |

## Synthesis basis and censoring treatment

The prior zeros for total mercury, nickel and chromium in pork sausage reflected FDA pan-cooked pork sausage composites (n=27) below reporting limits of 1 ppb for mercury, 40 ppb for nickel and 50 ppb for chromium ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Twenty-six of twenty-seven nickel composites were below the limit, with a single composite at 43 ppb just above it, while mercury and chromium were below their limits in every composite. Re-synthesis left-censors these nondetects at the reporting limit rather than recording zero.

Supporting muscle data confirm low but non-zero occurrence. Italian official-control pork muscle (n=347) had a nickel median of 6 ppb and a mean of 9 ppb by ICP-MS with occasional values to 158 ppb ([[sources/manfredi2025-nickel-meat-italy|Manfredi et al. 2025]]); Kazakh market pork was below detection for mercury ([[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]]) while a Chinese pooled pork summary reported about 7 ppb total mercury ([[sources/zhang2022-pork-heavy-metals-china|Zhang et al. 2022]]); and muscle chromium in other work runs near 11 ppb with a maximum around 48 ppb ([[sources/khalafalla2011-beef-carcasses-metals-egypt|Khalafalla et al. 2011]]), below the FDA reporting limit. The single 43 ppb nickel composite is treated as an upper-tail point rather than the centre, and chromium is published as fully left-censored at the 50 ppb reporting limit because no pork-specific detects exist.

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Pork sausage metal concentrations vary primarily as a function of formulation (the proportion of organ meat, the type of cereal filler, and the rusk Cd level) rather than geographic production origin. UK sausage formulations, which typically include higher rusk proportions than some continental European equivalents, may carry slightly higher Cd from the wheat filler fraction when UK wheat rusk is derived from higher-Cd durum or harder wheat varieties. The FSA/Fera 2016 survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes pork sausages as a UK retail composite, providing one occurrence reference point. No multi-country comparative dataset for pork sausage metal concentrations is available in the current corpus.

The FDA TDS FY2018-FY2020 dataset includes a pork sausage (link/patty, pan-cooked) entry (TDS Food 19, n=27) that shows Pb ranging up to a maximum of 4.9 ppb and Cd predominantly at zero with low-level detection in some market samples, reflecting US market sausages where wheat rusk may not be present in all formulations and organ-meat inclusion is less common than in UK sausages ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Mincing and emulsification homogenise the metal burden across the meat, fat, filler, and any organ-meat fractions; any pocket of higher Cd from an organ-meat inclusion is distributed throughout the product. Cooking (pan-frying, grilling, baking) drives moisture loss, which concentrates metals slightly on a wet-weight basis. Smoking does not add metals at analytically significant levels. The net cooking effect is minor relative to the formulation-driven Cd variance.

## Ingredient-derivative risk

Standard pork sausage is the base form on this page. Cocktail sausages and chipolatas are small-format versions of essentially the same formulation and share the same metal profile drivers. Cooked-in-can sausages are subject to Sn migration from tinplate and would therefore have an additional Sn pathway not present in fresh or chilled sausages. Sausage meat used as an ingredient in composite products contributes proportionally to its inclusion level.

## Mitigation options

### Sourcing levers

Specifying low-organ-meat or organ-meat-free pork sausage formulations for applications where Cd is a concern eliminates the organ-tissue Cd pathway. Sourcing wheat rusk from low-Cd wheat flour rather than whole-grain or bran-containing rusk reduces the cereal-filler Cd contribution. Supplier formulation transparency and filler-specification documentation are the verification mechanisms.

### Agronomic levers

Soil pH management and cultivar selection in the wheat supply chain upstream of rusk manufacture reduce cereal-filler Cd; this lever is at the wheat-growing and rusk-manufacturing stages and is not directly accessible to sausage manufacturers without supplier engagement.

### Processing levers

Using refined white wheat flour rather than bran-containing rusk in sausage formulations reduces the Cd contribution from the cereal fraction. Reducing the total rusk inclusion proportion in the formulation reduces the Cd load proportionally.

### Formulation levers

Replacing wheat rusk with alternative cereal or starch fillers that carry lower Cd (for example, tapioca starch or rice starch from verified low-Cd sources) is a formulation lever available to manufacturers seeking to reduce product Cd. Eliminating organ-meat inclusions from formulations directed at vulnerable populations is a higher-impact lever where organ-meat inclusion is confirmed.

### Testing and QC levers

Lot-level ICP-MS testing of finished pork sausage for Cd provides assurance for markets where EU pork muscle Cd limits or product-specific limits apply. Testing incoming wheat rusk or flour for Cd addresses the primary variable cereal-filler contributor. Given the formulation variability across sausage types, testing should be formulation-specific rather than relying on generic pork sausage reference values.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in processed meat products is governed by the ML for pork muscle meat (0.050 mg/kg) applied to the meat fraction; composite products are assessed proportionally to their meat content. Sausages are regulated as processed meat products under EU food law. For lead in processed meat, the EU ML for meat-based products applies.

No US FDA action level for Cd or Pb in pork sausage applies under the current regulatory framework. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not list pork sausage as a priority category. Codex Cd ML for meat applies to the meat fraction ([[regulations/codex-cadmium-mls]]).

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 19, "Pork sausage (link/patty), pan-cooked." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 19: Pork sausage (link/patty), pan-cooked | tAs | 27 | 0 | ND in all composites | 3 |
| 19: Pork sausage (link/patty), pan-cooked | Cd | 27 | 2 | 1–1.3 | 1 |
| 19: Pork sausage (link/patty), pan-cooked | Cr | 27 | 0 | ND in all composites | 50 |
| 19: Pork sausage (link/patty), pan-cooked | Pb | 27 | 6 | 4.1–4.9 | 4 |
| 19: Pork sausage (link/patty), pan-cooked | tHg | 27 | 0 | ND in all composites | 1 |
| 19: Pork sausage (link/patty), pan-cooked | Ni | 27 | 1 | 43 | 40 |
| 19: Pork sausage (link/patty), pan-cooked | U | 27 | 7 | 1.1–1.9 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tAs.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/manfredi2025-nickel-meat-italy|Dietary exposure assessment to nickel through the consumption of poultry, beef, and pork meat for different age groups in the Italian population]]<span class="hmi-ref-meta">Manfredi A, Varra MO, Zanardi E, Vitellino M, Peloso M, Lorusso P, et al. · Italian Journal of Food Safety · 2025 · [doi.org/10.4081/ijfs.2025.13840](https://doi.org/10.4081/ijfs.2025.13840)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/maikanov2021-meats-shuchinsk-burabay-metals|Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan]]<span class="hmi-ref-meta">Maikanov BS, Ismagulova GT, Auteleyeva LT, Kemeshov ZO, and Zhanabayeva DK · Veterinary World 14(6):1615-1621 · 2021 · [doi.org/10.14202/vetworld.2021.1615-1621](https://doi.org/10.14202/vetworld.2021.1615-1621)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/zhang2022-pork-heavy-metals-china|Risk assessment of heavy metals contamination in pork]]<span class="hmi-ref-meta">Zhang H, Zhou G, Zhang S, Yang Y, Dev S, Su Q, et al. · Food Control · 2022 · [doi.org/10.1016/j.foodcont.2021.108793](https://doi.org/10.1016/j.foodcont.2021.108793)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/khalafalla2011-beef-carcasses-metals-egypt|Heavy metal residues in beef carcasses in Beni-Suef abattoir, Egypt]]<span class="hmi-ref-meta">Fathy A. Khalafalla, Fatma H. Ali, Fredi Schwagele, and Mariam A. Abd-El-Wahab · Veterinaria Italiana · 2011 · [www.izs.it](https://www.izs.it/vet_italiana/2011/47_3/351.pdf)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pork sausage (link/patty), pan-cooked (n=27); detectable concentrations for Cd, Ni, Pb, U |
| 2 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 4 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 4 sources added; narrative text revised |
| [20b813b5bc](https://github.com/paleofoundation/heavymetalindex/commit/20b813b5bc) | 2026-08-09 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
<!-- END: hmi-page-history -->
