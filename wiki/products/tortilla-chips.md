---
title: Tortilla chips
dek: >-
  A corn masa snack made through alkaline cooking and frying. Explore the
  evidence on measured metals, corn sourcing and processing effects.
rail_highlights:
  - label: Exposure
    text: Nickel occurs in surveyed tortilla chips
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Tortilla chip non detects are not measured zeroes
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: product-category
commodity: tortilla-chips
label: Tortilla chips
aliases:
  - 'Chips, tortilla'
  - tortilla chips
category: grain-based-snacks
tds_food:
  number: 67
  description: 'Chips, tortilla'
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
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
        row_key: 'fda2022-tds-elements-fy2018-fy2020::67::lead'
        role: value
        food_id: '67'
        food_name: 'Chips, tortilla'
        metal_species: Pb
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
        reporting_limit_min_ppb: 4
        reporting_limit_max_ppb: 4
        min_lower_bound_ppb: 0
        max_lower_bound_ppb: 0
        censoring: >-
          FDA non-detects are zero-coded; reporting limits are retained
          separately
    evidence_note: >-
      FDA source observations are non-detects at the reporting limits below.
      They do not estimate a zero population concentration; other literature
      remains separate context.
  Cd:
    status: populated
    typical_ppb:
      - 1.9
      - 2.1
    p95_ppb: 2.2
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
      - 0
      - 2.5
    p95_ppb: 2.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
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
        row_key: 'fda2022-tds-elements-fy2018-fy2020::67::mercury'
        role: value
        food_id: '67'
        food_name: 'Chips, tortilla'
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
      - 132
      - 148
    p95_ppb: 149
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
      - 11.2
      - 75.2
    p95_ppb: 77.6
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
      - 0
      - 1
    p95_ppb: 1.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13T00:00:00.000Z
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
sources: 1
hero_image: /static/heroes/tortilla-chips-corn-triangles.webp
quick_read:
  summary: >-
    Tortilla chips inherit metals from corn, with frying concentrating the
    metals remaining in the masa as water is removed.
  points:
    - label: Metals of concern
      text: >-
        [[metals/nickel|nickel]], cadmium, total chromium, and total arsenic
        were detected in surveyed chips.
    - label: Ingredient drivers
      text: >-
        corn growing conditions set the starting load; nixtamalization and
        frying change the [[ingredients/corn|corn]] matrix.
    - label: Practical framing
      text: >-
        the retail sample is small; incoming corn or masa and finished chips can
        be checked by [[testing/icp-ms|testing]].
hero_image_alt: >-
  Plain triangular golden corn tortilla chips with natural bubbled texture
  illustrating tortilla chips ingredient context.
hmtc_category: 3
hmtc_category_name: 'Grains, Cereals, and Rice Products'
hmtc_row: 12
hmtc_subcategory_name: >-
  Grain-based snacks (crackers, biscuits, cookies, popcorn, pretzels) — non-rice
  clean counterpart to rice-snacks
hmtc_taxonomy_version: '2.3'
---

# Tortilla chips

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Tortilla chips inherit metals from corn, with frying concentrating the metals remaining in the masa as water is removed.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/nickel">nickel</a>, cadmium, total chromium, and total arsenic were detected in surveyed chips.</li>
    <li><strong>Ingredient drivers:</strong> corn growing conditions set the starting load; nixtamalization and frying change the <a href="/ingredients/corn">corn</a> matrix.</li>
    <li><strong>Practical framing:</strong> the retail sample is small; incoming corn or masa and finished chips can be checked by <a href="/testing/icp-ms">testing</a>.</li>
  </ul>
</div>

This page draws on evidence from [[sources/fda2022-tds-elements-fy2018-fy2020|FDA]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 67, "Chips, tortilla." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Tortilla chips are manufactured from nixtamalized corn masa. The primary source of heavy metals in this product is the corn grain itself, which accumulates Cd, Pb, and other metals from soil through root uptake in a pattern similar to other cereal grains, though generally at lower concentrations than rice or wheat. Corn is considered a moderate accumulator: Cd concentrations in corn grain are typically lower than in durum wheat or sunflower seeds but higher than in most animal products. Nixtamalization, the traditional alkaline cooking process using calcium hydroxide (lime), is the defining processing step for masa-based products; its effect on metal bioaccessibility is discussed below. Nickel and chromium data in the FDA TDS FY2018-FY2020 survey (n=3) suggest meaningful Ni concentrations in tortilla chips (median 140 ppb, max 150 ppb), which is consistent with the known Ni content of corn and the concentration effect of frying and water removal. The salt added during frying and seasoning contributes negligible metals.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 dataset; composites=3 | ND (<4; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.9–2.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–2.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 132–148 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 11.2–75.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1 | low | — |

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
| 67: Chips, tortilla | tAs | 3 | 1 | 3.1 | 3 |
| 67: Chips, tortilla | Cd | 3 | 3 | 1.9–2.2 | 1 |
| 67: Chips, tortilla | Cr | 3 | 2 | 56–80 | 50 |
| 67: Chips, tortilla | Pb | 3 | 0 | ND in all composites | 4 |
| 67: Chips, tortilla | tHg | 3 | 0 | ND in all composites | 1 |
| 67: Chips, tortilla | Ni | 3 | 3 | 130–150 | 40 |
| 67: Chips, tortilla | U | 3 | 1 | 1.2 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=3) for tortilla chips show Ni in the range 130 to 150 ppb (median 140 ppb), Cr with a wide range of 0 to 80 ppb (median 56 ppb), Cd from 1.9 to 2.2 ppb, and tAs from below detection to 3.1 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020]]). These represent a small composite US retail sample; geographic and varietal variation in corn sourcing, as well as differences in lime quality and frying conditions, would be expected to drive additional variance across manufacturers. Organic versus conventional corn sourcing may also influence Cd concentrations if organic growing soils differ in background Cd loading.

## Processing effects

Nixtamalization involves cooking dry corn in an alkaline solution of calcium hydroxide and water (typically at approximately 90 degrees Celsius), followed by steeping and then washing the grain before grinding into masa. The alkaline cooking step raises the pH of the grain surface to 11 to 12, which can influence the chemical speciation and bioaccessibility of certain metals. For inorganic arsenic, nixtamalization at high pH may reduce bioaccessibility relative to the raw grain. For Cd, the alkaline step may partially reduce bioavailability through precipitation of cadmium hydroxide, though the net effect on finished-product concentrations is not well quantified in the current corpus. The washing step after steeping removes some solubilized surface material, potentially reducing surface-adsorbed metals. Frying in vegetable oil, the final step in tortilla chip production, removes free water and concentrates all solutes proportionally, including any metals present in the masa. The frying oil itself contributes negligible metals.

## Ingredient-derivative risk

Tortilla chips sit at the end of a corn-processing chain. The primary risk inheritance is from the corn variety and growing region. Blue corn tortilla chips, made from blue corn with higher anthocyanin content, may differ from yellow or white corn in metal loading depending on cultivar and growing conditions, but no systematic comparison is in the current corpus. Corn masa used for tortillas (soft), tostadas, and tamales shares the same nixtamalization step and similar metal profile. Corn flour (masa harina), which is dried nixtamalized masa, is an intermediate product that can be tested as a proxy for the corn base prior to chip frying.

## Mitigation options

### Sourcing levers

Specifying corn from growing regions with low background soil Cd and Pb, ideally supported by supplier soil testing or commodity testing, is the primary sourcing lever. Corn from areas adjacent to smelters, fertilizer manufacturing, or heavily irrigated agricultural zones with long histories of phosphate fertilization carries higher Cd risk.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Optimising the nixtamalization wash step to remove maximum surface-adhered material may reduce metal load at the masa stage, but the magnitude of this effect is not quantified in the current corpus. Controlling frying oil temperature and turnover rate has no documented effect on metal concentrations.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Testing incoming dried corn or masa harina for Cd, Pb, and Ni by ICP-MS before production provides the most cost-effective quality gate. Finished-chip testing is appropriate for lot-release verification.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

No FDA action level specific to tortilla chips or corn snack products is currently in force. The EU sets maximum levels for Cd in cereals (0.10 mg/kg, or 100 ppb) and for Pb in cereals (0.20 mg/kg, or 200 ppb) under [[regulations/eu2023-contaminants-maximum-levels]], and these limits are applicable to corn-based food products sold in the EU. [[regulations/codex-cadmium-mls]] provides the international Codex ML for cereal grains, which forms the basis for many national limits outside the EU. [[regulations/fda-closer-to-zero]] Pb guidance covers processed baby foods but does not currently address tortilla chips or snack corn products.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**Pb.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chips, tortilla (n=3); detectable concentrations for Cd, Cr, Ni, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
