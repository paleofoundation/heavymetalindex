---
title: "Corn flakes cereal"
type: ingredient
commodity: corn-flakes
label: "Corn flakes cereal"
aliases: ["Cereal, corn flakes", "corn flakes"]
category: breakfast-cereal
tds_food:
  number: 71
  description: "Cereal, corn flakes"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 3.5]
    p95_ppb: 4.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.2, 1.3]
    p95_ppb: 1.3
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
    typical_ppb: [57, 82.6]
    p95_ppb: 82.8
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
    typical_ppb: [13.4, 74.2]
    p95_ppb: 75.1
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

# Corn flakes cereal

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
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 57–82.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 13.4–74.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cereal, corn flakes" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 1.2 | 1.3 | in profile |
| Cr | 3 | 0 | 76 | in profile |
| Ni | 3 | 51 | 83 | in profile |
| Pb | 3 | 0 | 4.4 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/hassan2025-cornflakes-lebanon-metals|Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance]]<span class="hmi-ref-meta">Hassan H, Abdallah M, Khalil N, and Sleiman M · RSC Advances · 2025 · [doi.org/10.1039/d5ra05243b](https://doi.org/10.1039/d5ra05243b)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, corn flakes (n=3); detectable concentrations for Cd, Cr, Ni, Pb |
| 2 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in 22 retail samples — 11 breads (Danish rye/rugbrød, malt flour, wheat 'burger' buns, spelt, wheat 'pita', wheat baguette,... (n=22) |
| 3 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | Pb and Cr in imported cornflake samples on the Addis Ababa retail market alongside essential trace elements |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
