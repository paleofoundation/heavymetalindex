---
title: "Blueberries"
type: ingredient
commodity: blueberries
label: "Blueberries"
aliases: [blueberry]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 24]
    p95_ppb: 33.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 4
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2.9]
    p95_ppb: 3.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 6
---

# Blueberries

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Blueberries are small-berried shrubs (Vaccinium spp.) cultivated in acidic soils across North America, Europe, and increasingly South America. The blueberry fruit is a small, round berry with a relatively thin skin and a high surface-area-to-volume ratio compared to larger fruits. Metal uptake occurs primarily through root absorption from soil, with the acidic soil conditions typical of blueberry production (optimal pH 4.5 to 5.5) being relevant because acidic soil pH increases the bioavailability of Pb, Cd, and Mn. Despite growing in these conditions, blueberries are not identified as a high-accumulator commodity in the current corpus: the FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes blueberries in Table 6, and values are pending quantitative extraction. The acidic soil preference does create a theoretical context for somewhat elevated metal availability relative to crops grown at neutral pH, but commercial blueberry production on managed soils in North America and the EU has not been documented as a high-Pb or high-Cd commodity in the regulatory or peer-reviewed literature at current writing.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–24 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Cd | n=1 | 0–2 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–2.9 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) is the sole occurrence source in the current corpus. Quantitative values from that source are in progress pending structured extraction of Table 6. Major blueberry production regions include the US Pacific Northwest (Oregon, Washington), Michigan, New Jersey, Georgia, and increasingly Peru and Chile for off-season supply to Northern Hemisphere markets. Soil metal profiles differ substantially across these regions. Wild (lowbush) blueberries, cultivated primarily in Maine and eastern Canada, grow in naturally acidic and often Mn-rich soils; highbush varieties grown on managed plantations with pH-amended soils may show different metal distributions. No varietal or regional breakdown appears in the current corpus; synthesis of ranges will be updated when additional occurrence data are integrated.

## Processing effects

Washing blueberries before consumption or processing removes surface-deposited metals and particulate soil from the berry surface. Freezing, which is the primary commercial processing step for blueberries used as ingredients, does not alter metal content. Processing into purée or dried berries concentrates metals proportionally; freeze-dried blueberry powder represents the highest per-gram metal concentration among common derivatives because of the near-complete water removal. Blueberries incorporated into baked goods (muffins, pancakes) contribute their metal load to the composite product but at diluted concentrations relative to the other ingredients by weight.

## Ingredient-derivative risk

The primary blueberry derivatives are frozen whole berries (unchanged metal load), purée (minor concentration from processing), freeze-dried powder (concentrated), and blueberry inclusions in baked goods and yogurts (diluted). Blueberry purée for infant food is an important downstream form given the berry's use in commercial baby food pouches; the metal burden of the purée reflects the fresh berry concentration without the dilution that occurs in juice or the concentration that occurs in drying. No occurrence data for freeze-dried blueberry powder appear in the current corpus, though the concentration factor relative to fresh berry can be estimated from the weight ratio (approximately 8:1 to 10:1 water removal).

## Mitigation options

### Sourcing levers

Sourcing from managed highbush blueberry operations on limed, pH-managed soils may reduce metal bioavailability compared to wild lowbush production on naturally acidic soils. _Quantified reduction factors for source selection in blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (liming acidic blueberry soils toward the lower end of the optimal range) reduces Pb and Cd bioavailability, though excessively high pH reduces blueberry yield and quality. The tradeoff between metal-mobility reduction and agronomic performance is a documented tension in acidophile crop management. _Quantified reduction factors specific to blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing before processing removes surface-deposited metals. Discarding wash water removes the washed-off fraction. _Quantified reduction magnitudes for washing blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 applies the general fresh fruit maximum levels to blueberries: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), wet weight as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). For dried blueberries (as a processed fruit product), the applicable EU ML may differ under specific provisions for dried fruit; the relevant ML should be checked against the current version of Regulation (EU) 2023/915. No US FDA action level for Pb or Cd in fresh or processed blueberries exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). No Codex Alimentarius ML for heavy metals specifically in blueberries appears in the current corpus.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 6 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions (Seoul, Gyeonggi-do, Chungcheong-do, Jeolla-do, Kyungsang-do, Gangwon-do), 14 fruit... (n=207) |
| 3 | [[sources/bramwell2022-urban-garden-produce-lead\|Bramwell et al. 2022]]. *Determinants of blood and saliva lead concentrations in adult gardeners on urban agricultural sites*, Environmental Geochemistry and Health | 2022 | Peer-reviewed | GB Pb occurrence in 43 adult urban-agriculture-site gardeners and 29 matched controls in Newcastle upon Tyne, UK; environmental sampling included nearly 280... (n=72) |
| 4 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 5 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | Polish national monitoring Pb, Cd, tAs, and tHg means and P90 for fresh and frozen blueberries within the soft-berry category |
| 6 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
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
