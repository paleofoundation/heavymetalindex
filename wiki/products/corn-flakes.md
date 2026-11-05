---
title: Corn flakes cereal
dek: >-
  A breakfast cereal made from milled, cooked and toasted corn. Explore the
  evidence on metal occurrence, processing and regulatory context.
rail_highlights:
  - label: Exposure
    text: Chromium had highest mean concentration in Lebanese cornflakes
    source: sources/hassan2025-cornflakes-lebanon-metals
    source_label: Cornflakes study
  - label: Key distinction
    text: FDA cornflake non detects are not measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: product-category
commodity: corn-flakes
label: Corn flakes cereal
aliases:
  - 'Cereal, corn flakes'
  - corn flakes
category: breakfast-cereal-non-rice
tds_food:
  number: 71
  description: 'Cereal, corn flakes'
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb:
      - 0
      - 3.5
    p95_ppb: 4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
  Cd:
    status: populated
    typical_ppb:
      - 1.2
      - 1.3
    p95_ppb: 1.3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
  iAs:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12T00:00:00.000Z
  tAs:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: '2026-09-10'
    value_kind: source_non_detect
    evidence:
      - source_id: fda2022-tds-elements-fy2018-fy2020
        evidence_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
        row_key: 'fda2022-tds-elements-fy2018-fy2020::71::arsenic-total'
        role: value
        food_id: '71'
        food_name: 'Cereal, corn flakes'
        metal_species: tAs
        basis: >-
          FDA TDS prepared-food composite in the stated food form; original
          preparation retained; no basis conversion
        geography: US
        year_min: 2017
        year_max: 2020
        period_scope: dataset_collection_window
        statistic_type: source_observation
        'n': 3
        non_detect_n: 3
        reporting_limit_min_ppb: 3
        reporting_limit_max_ppb: 3
        min_lower_bound_ppb: 0
        max_lower_bound_ppb: 0
        censoring: >-
          FDA non-detects are zero-coded; reporting limits are retained
          separately
    evidence_note: >-
      FDA source observations are non-detects at the reporting limits below.
      They do not estimate a zero population concentration; other literature
      remains separate context.
  tHg:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: '2026-09-10'
    value_kind: source_non_detect
    evidence:
      - source_id: fda2022-tds-elements-fy2018-fy2020
        evidence_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
        row_key: 'fda2022-tds-elements-fy2018-fy2020::71::mercury'
        role: value
        food_id: '71'
        food_name: 'Cereal, corn flakes'
        metal_species: tHg
        basis: >-
          FDA TDS prepared-food composite in the stated food form; original
          preparation retained; no basis conversion
        geography: US
        year_min: 2017
        year_max: 2020
        period_scope: dataset_collection_window
        statistic_type: source_observation
        'n': 3
        non_detect_n: 3
        reporting_limit_min_ppb: 1
        reporting_limit_max_ppb: 1
        min_lower_bound_ppb: 0
        max_lower_bound_ppb: 0
        censoring: >-
          FDA non-detects are zero-coded; reporting limits are retained
          separately
    evidence_note: >-
      FDA source observations are non-detects at the reporting limits below.
      They do not estimate a zero population concentration; other literature
      remains separate context.
  Ni:
    status: populated
    typical_ppb:
      - 57
      - 82.6
    p95_ppb: 82.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
  Al:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12T00:00:00.000Z
  Cr:
    status: populated
    typical_ppb:
      - 13.4
      - 74.2
    p95_ppb: 75.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
  Sn:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12T00:00:00.000Z
  U:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: '2026-09-10'
    value_kind: source_non_detect
    evidence:
      - source_id: fda2022-tds-elements-fy2018-fy2020
        evidence_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
        row_key: 'fda2022-tds-elements-fy2018-fy2020::71::uranium'
        role: value
        food_id: '71'
        food_name: 'Cereal, corn flakes'
        metal_species: U
        basis: >-
          FDA TDS prepared-food composite in the stated food form; original
          preparation retained; no basis conversion
        geography: US
        year_min: 2017
        year_max: 2020
        period_scope: dataset_collection_window
        statistic_type: source_observation
        'n': 3
        non_detect_n: 3
        reporting_limit_min_ppb: 1
        reporting_limit_max_ppb: 1
        min_lower_bound_ppb: 0
        max_lower_bound_ppb: 0
        censoring: >-
          FDA non-detects are zero-coded; reporting limits are retained
          separately
    evidence_note: >-
      FDA source observations are non-detects at the reporting limits below.
      They do not estimate a zero population concentration; other literature
      remains separate context.
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-13T00:00:00.000Z
sources: 0
hero_image: /static/heroes/corn-flakes-grits-tortilla-cornbread.webp
quick_read:
  summary: >-
    Corn flakes have measured chromium and nickel alongside cadmium, with both
    grain and processing identified as possible contributors.
  points:
    - label: Metals of concern
      text: >-
        [[metals/chromium|chromium]], nickel and cadmium, with lead and arsenic
        also addressed
    - label: Ingredient drivers
      text: >-
        soil uptake by corn, milling, and possible equipment contact or mineral
        fortification
    - label: Practical framing
      text: >-
        total [[metals/chromium|chromium]] needs speciation for interpretation;
        non-detects do not establish zero metal
hero_image_alt: >-
  Corn, corn flakes, corn grits, corn tortillas and cornbread illustrating corn
  flakes cereal ingredient context.
hmtc_category: 3
hmtc_category_name: 'Grains, Cereals, and Rice Products'
hmtc_row: 5
hmtc_subcategory_name: Breakfast cereal (non-rice)
hmtc_taxonomy_version: '2.3'
---

# Corn flakes cereal

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Corn flakes have measured chromium and nickel alongside cadmium, with both grain and processing identified as possible contributors.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/chromium">chromium</a>, nickel and cadmium, with lead and arsenic also addressed</li>
    <li><strong>Ingredient drivers:</strong> soil uptake by corn, milling, and possible equipment contact or mineral fortification</li>
    <li><strong>Practical framing:</strong> total <a href="/metals/chromium">chromium</a> needs speciation for interpretation; non-detects do not establish zero metal</li>
  </ul>
</div>

This page draws on evidence from [[sources/fda2022-tds-elements-fy2018-fy2020|FDA]], together with 2 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 71, "Cereal, corn flakes." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Corn flakes cereal is a processed breakfast cereal produced primarily from milled, cooked, and toasted corn. The corn substrate carries a baseline cadmium burden through root uptake from soil, though the dry-milling and degermination steps used in corn flake production remove the bran and germ fractions where cadmium concentrates most, resulting in lower cadmium in flakes than in whole-grain corn products. The dominant metal signal in commercial corn flakes, however, is chromium and nickel, which [[sources/hassan2025-cornflakes-lebanon-metals]] found to be the highest mean analyte concentrations across 42 commercial cornflake products sampled in Lebanon. This chromium and nickel signal may arise from processing equipment contact (stainless steel surfaces in high-temperature extrusion and toasting lines can contribute trace chromium and nickel to the product matrix), from mineral fortification added during manufacturing, or from the corn grain itself in combination with processing concentration effects.

The FDA TDS FY2018-FY2020 data for corn flakes (n=3, TDS Food 71) shows Cr at 0 to 76 ppb and Ni at 51 to 83 ppb across three composite samples [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the pattern observed in the Lebanese commercial survey. Lead and arsenic are near or at zero in the TDS dataset. Cadmium is low (maximum 1.3 ppb), reflecting effective removal by degermination.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–3.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|2]] |
| Cd | n=2 | 1.2–1.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 dataset; composites=3 | ND (<3; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 57–82.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 13.4–74.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|2]] |
| Sn | data gap | — | — | — |
| U | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

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
| 71: Cereal, corn flakes | tAs | 3 | 0 | ND in all composites | 3 |
| 71: Cereal, corn flakes | Cd | 3 | 3 | 1.2–1.3 | 1 |
| 71: Cereal, corn flakes | Cr | 3 | 2 | 67–76 | 50 |
| 71: Cereal, corn flakes | Pb | 3 | 1 | 4.4 | 4 |
| 71: Cereal, corn flakes | tHg | 3 | 0 | ND in all composites | 1 |
| 71: Cereal, corn flakes | Ni | 3 | 3 | 51–83 | 40 |
| 71: Cereal, corn flakes | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

[[sources/hassan2025-cornflakes-lebanon-metals]] analyzed 42 commercial cornflake products from Lebanese retail markets and found chromium as the analyte with the highest mean concentration, followed by nickel. The study also measured tAs, Cd, tHg, and Pb, with cadmium and mercury at low concentrations. The Lebanese commercial market serves products from a range of international manufacturers, so this dataset provides a multi-origin commercial sample for the global corn flakes category, though it is a single study in a single market and cannot be treated as a full global distribution.

The FDA TDS FY2018-FY2020 dataset for corn flakes (n=3 composites) is small but directionally consistent: Cr spans 0 to 76 ppb and Ni spans 51 to 83 ppb, with Cd at a maximum of 1.3 ppb and both Pb and tAs at zero [[sources/fda2022-tds-elements-fy2018-fy2020]]. The limited TDS sample size (n=3) precludes robust percentile estimation; the Hassan et al. n=42 dataset is the more informative source for chromium and nickel characterization.

_No regional breakdown comparing corn flakes from different corn-producing regions or different manufacturer countries is yet available in this corpus._

## Processing effects

Corn flakes are produced through dry milling of corn grain (which removes the bran and germ), followed by cooking with water and flavorings, extrusion or rolling into flakes, and high-temperature toasting. The degermination step reduces cadmium relative to whole-grain corn, since Cd concentrates in the bran and germ fractions. The toasting step does not volatilize or remove trace metals, but the high temperatures and contact with stainless steel equipment during extrusion and toasting can contribute chromium and nickel to the product matrix through equipment leaching, particularly with acidic or wet-phase processing streams.

Mineral fortification is standard for corn flakes: iron, zinc, and B vitamins are typically added post-toasting. Some fortification mixtures may contribute incidental trace amounts of additional metals, though this pathway has not been quantified in the current corpus.

## Ingredient-derivative risk

Corn flakes as a category is itself a derivative of corn grain. The relevant derivative question for this page is whether further processing of corn flakes (for example, as an ingredient in breaded coatings, confectionery, or cereal bar binders) changes the metal profile. Crushing or grinding corn flakes retains the chromium and nickel burden of the flake matrix. Coating applications that use corn flakes as a breadcrumb substitute would transfer that burden into the coated product proportional to the coating weight fraction. No dedicated literature on this secondary derivative use is in the current corpus.

## Mitigation options

### Sourcing levers

Procuring corn grain for flake production from origins with low background soil cadmium reduces the grain-origin Cd contribution. Supplier qualification for corn provenance is the relevant lever, though the dominant chromium and nickel signal in commercial products may be driven more by processing than by grain origin.

### Agronomic levers

Soil pH management and phosphate fertilizer cadmium control at the corn farm level reduce the cadmium input to the grain before milling. These levers are most efficiently applied through supply-chain specification rather than at the cereal manufacturer level.

### Processing levers

Thorough degermination reduces cadmium in the milled corn substrate. Selection of food-grade stainless steel equipment with low chromium and nickel leaching characteristics, or use of lined equipment surfaces in wet-phase processing, is the relevant lever for reducing equipment-origin chromium and nickel. Regular equipment maintenance and replacement of worn surfaces that have elevated leaching potential are practical implementations.

### Formulation levers

_No quantified data on formulation substitution effects on corn flake metal content is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the chromium and nickel concentrations observed by [[sources/hassan2025-cornflakes-lebanon-metals]] and confirmed directionally by TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]], total chromium and nickel testing at finished-product level is warranted for commercial corn flakes, particularly for products marketed to children who consume cereal as a primary breakfast staple. Chromium speciation (Cr-VI vs Cr-III) would be required to assess the regulatory relevance of any detected total chromium, since EU limits apply specifically to Cr-VI in some contexts.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in corn flakes is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union under [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for cadmium in processed cereal-based foods of 0.040 mg/kg (40 ppb) for products specifically marketed for infants and young children, and a general cereal maximum of 0.10 mg/kg (100 ppb) for other cereal products. For lead, the EU general cereal maximum is 0.20 mg/kg (200 ppb). For nickel, the EU has set a maximum level for cereals: Commission Regulation (EU) 2024/1987 inserted nickel as Annex I point 3.6 of Regulation (EU) 2023/915 ([[regulations/eu-2024-1987-nickel-maximum-levels]]), with a general cereal limit of 0.80 mg/kg (800 ppb, point 3.6.11.1) applying from 1 July 2026 (a corn-flakes product falls under this general cereal row). No EU food-matrix maximum level applies to total chromium; chromium as Cr-VI is subject to separate drinking-water and occupational standards rather than food maximum levels. Codex Alimentarius sets a general cereal maximum of 0.10 mg/kg for Cd and 0.20 mg/kg for Pb.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tAs.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/hassan2025-cornflakes-lebanon-metals|Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance]]<span class="hmi-ref-meta">Hassan H, Abdallah M, Khalil N, and Sleiman M · RSC Advances · 2025 · [doi.org/10.1039/d5ra05243b](https://doi.org/10.1039/d5ra05243b)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, corn flakes (n=3); detectable concentrations for Cd, Cr, Ni, Pb |
| 2 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in 22 retail samples — 11 breads (Danish rye/rugbrød, malt flour, wheat 'burger' buns, spelt, wheat 'pita', wheat baguette,... (n=22) |
| 3 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | Pb and Cr in imported cornflake samples on the Addis Ababa retail market alongside essential trace elements |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 1 source removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | minor | Narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
