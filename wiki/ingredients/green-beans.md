---
title: "Green beans"
type: ingredient
commodity: green-beans
label: "Green beans"
aliases: ["Green beans, fresh/frozen, boiled", "green beans"]
category: vegetable
tds_food:
  number: 121
  description: "Green beans, fresh/frozen, boiled"
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
    typical_ppb: [0, 1.9]
    p95_ppb: 2.1
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
    p95_ppb: 2.3
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
    typical_ppb: [0, 428]
    p95_ppb: 498
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
    p95_ppb: 0.7
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
sources: 5
---

# Green beans

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 121, "Green beans, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Green beans (Phaseolus vulgaris) are a leguminous pod vegetable harvested at an immature stage, before the seed has fully developed and mineralized. The primary metal pathways are soil uptake through the root system and surface deposition on the pod exterior from atmospheric particulates and spray applications. As a legume, green beans engage in nitrogen-fixing symbiosis via root nodules, an association that modifies root exudate chemistry and can enhance uptake of divalent metals including cadmium through the same rhizosphere mobilization mechanisms that operate in other legume crops. However, because the commercial harvest is the pod plus immature seed rather than the mature dried seed, the Cd accumulation that characterizes mature dried beans does not reach its maximum in green beans; the pod wall and immature seed carry substantially lower Cd per gram than dried kidney beans or lentils from the same plant. Nickel is the most consistently detected analyte in this matrix in the FDA TDS data (median 100 ppb, max 740 ppb, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the legume-family affinity for Ni through the urease enzyme system. Lead concentrations are low and predominantly below detection limits in the TDS dataset, suggesting that soil Pb uptake is limited and atmospheric deposition onto the pod exterior is the more consequential Pb pathway under typical commercial production conditions.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0–1.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–428 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Green beans, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 4.2 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 740 | in profile |
| Pb | 27 | 0 | 4.1 | in profile |
| U | 27 | 0 | 1.1 | in profile |
| tAs | 27 | 0 | 3.3 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Nickel concentrations in green beans show a wide range in the FDA TDS data (0 to 740 ppb, median 100 ppb, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], suggesting meaningful variation by source, growing conditions, or crop variety, though the TDS dataset does not disaggregate by origin. Green beans grown on naturally high-Ni soils (serpentine soils or soils overlying ultramafic geology) would carry elevated Ni. Cadmium is detected in some samples (median 0 ppb, max 4.2 ppb, n=27), indicating that while most green beans carry negligible Cd, a fraction of commercial supply comes from soils with sufficient Cd availability to produce measurable grain Cd. Regional variation in soil Cd driven by phosphate fertilizer use would be expected to explain part of this variation. Green versus yellow wax bean varieties of Phaseolus vulgaris are not expected to differ materially in metal burden.

## Processing effects

Boiling of fresh or frozen green beans, as represented in the FDA TDS measurement basis ("Green beans, fresh/frozen, boiled"), leaches water-soluble metal fractions into the cooking water. For water-soluble forms of Ni and Cd, boiling may reduce the metal burden in the edible portion relative to the raw vegetable, but the magnitude is not characterized in the current corpus specifically for green beans. For frozen green beans, a blanching step precedes freezing (analogous to frozen peas), which provides an additional prior leaching step before the consumer cooking step. Canning of green beans involves heat treatment and packing in brine or water; the tin from can interiors was historically a Sn pathway into canned vegetables, though modern lacquered and tinless cans have substantially reduced this pathway.

## Ingredient-derivative risk

Canned green beans are the primary derivative of concern for metal concentrations, because older tin-plate cans without interior lacquer coatings leach Sn into the acidic vegetable brine during storage, and Sn concentrations in canned vegetables can reach several hundred ppb or higher in products stored for extended periods. Modern food cans use epoxy or other lacquer coatings that prevent Sn leaching, but product from older or non-conforming can stock remains a pathway. This Sn pathway is specific to the canned format and is not a concern for fresh or frozen green beans. The wiki's Sn data gap for green beans in the non-canned format is consistent with the low natural Sn content of plant tissue; Sn from canned format belongs on a canned green beans product page rather than on this fresh/frozen ingredient page.

## Mitigation options

### Sourcing levers

For manufacturers purchasing green beans at scale, requiring field origin documentation and preferring growing regions with documented low soil Ni and Cd reduces the likelihood of receiving high-metal batches. Serpentine soil regions should be excluded from sourcing specifications if Ni is a concern, since no agronomic intervention fully compensates for extreme soil Ni availability in those systems.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling in a generous volume of water and discarding the cooking water maximizes leaching of water-soluble metal fractions from the edible portion. This intervention is available to both consumers and food manufacturers. For frozen green bean processing, optimizing the blanching step duration and water volume provides a comparable leaching opportunity before freezing.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the wide range in Ni detected in the FDA TDS data for this matrix, lot-level testing for Ni by ICP-MS is the most informative QC measure for manufacturers incorporating green beans into products intended for Ni-sensitive consumers (those with nickel contact allergy or nickel dietary sensitivity). For general food safety purposes, Cd and Pb are the regulatory priority analytes, and a testing program targeting these two metals is consistent with EU regulatory requirements for vegetables.

### Packaging and storage levers

Avoiding older tin-plate cans without lacquer coatings for canned green bean products prevents the Sn leaching pathway in the canned format. Verification of can interior coating specifications from can suppliers should be part of the QC program for any canned vegetable product.

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in vegetables (general) is 0.10 mg/kg wet weight and for Cd in vegetables (general) it is 0.050 mg/kg wet weight. These limits apply to green beans as a vegetable product. There is no specific EU maximum level for Ni in vegetables, despite Ni being the most frequently detected analyte in the FDA TDS data for this matrix. In the United States, FDA has not established action levels for metals in green beans or other fresh vegetables. The FDA TDS data show Cd with a max of 4.2 ppb (n=27) and Pb with a max of 4.1 ppb (n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], both substantially below EU regulatory thresholds, indicating that compliance with EU limits is not a routine concern for typical commercial green bean supply.

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
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Green beans, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
| 4 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | BF tAs occurrence in Greenhouse-cultivated vegetables (7 species × 4 As irrigation concentrations × 6 replicates) at 2iE, Ouagadougou, Burkina Faso (dry... (n=168) |
| 5 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
