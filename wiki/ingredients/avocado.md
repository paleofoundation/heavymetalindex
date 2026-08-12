---
title: "Avocado"
type: ingredient
commodity: avocado
label: "Avocado"
aliases: [avocado]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 12]
    p95_ppb: 30
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [2.9, 18]
    p95_ppb: 29.8
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 25.6]
    p95_ppb: 36.8
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0.4]
    p95_ppb: 1.1
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [105.2, 374]
    p95_ppb: 522
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
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
sources: 6
---

# Avocado

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Avocado is a lipid-rich tree fruit (approximately 15 percent fat by weight) whose edible flesh (mesocarp) is enclosed within a relatively impermeable skin. The thick skin provides a degree of physical separation between the external environment and the edible flesh, limiting direct surface deposition of atmospheric metals relative to thin-skinned fruits. Root uptake from orchard soils remains the primary route for Pb, Cd, and other metals to reach the flesh.

The FDA FY2018-FY2020 TDS dataset for raw avocado (TDS Food 97, n=27) shows that avocado is a moderate-Ni matrix: Ni was detectable in all 27 samples with a median of 180 ppb and a maximum of 580 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Cadmium was also detectable in all samples, with a median of 5.4 ppb and a maximum of 59 ppb. Total arsenic reached a maximum of 50 ppb, which is notable relative to most fruits. Lead had a maximum of 12 ppb but was below detection in most samples, suggesting episodic rather than systematic Pb presence. Chromium was below detection across all samples. The elevated Ni relative to most fruits likely reflects Ni-rich volcanic or ultramafic soils prevalent in major avocado-producing regions (Mexico, Central America, California), though source-region breakdown is not available in TDS data. The lipid-rich mesocarp has not been shown to selectively accumulate fat-soluble metal species; the metals present appear to follow aqueous transport through the vascular system rather than lipophilic partitioning.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–12 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|3]] |
| Cd | n=3 | 2.9–18 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=3 | 0–25.6 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0–0.4 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=3 | 105.2–374 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–50 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The earlier profile carried avocado lead and chromium at [0, 0] with a p95 of 0. For lead this understated the FDA Total Diet Study, which found 26 of 27 samples below the 4 ppb reporting limit but one sample at 12 ppb; for chromium all 27 samples fell below the 50 ppb reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Both cells are now treated as left-censored at their reporting limits, and dry-weight sources are converted to fresh weight by multiplying by the avocado edible fraction of 0.27.

For lead, commercial Hass mesocarp is mostly below detection ([[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Anastario et al. 2025]]), apart from one California-organic detect near 38 ppb fresh weight after conversion. Peruvian export regions La Libertad and Lima run higher, at roughly 62 to 107 ppb fresh weight when the dry-weight means of [[sources/yoplac2026-peruvian-avocado-metals-health-risk|Yoplac-Navarro et al. 2026]] are converted, and these are carried as an elevated EU-RASFF-flagged mining-legacy tail rather than the central value. Chromium is genuinely fully censored: Yoplac-Navarro found it below detection in every one of 95 pulp samples at a limit near 1 ppb fresh weight, which together with the FDA non-detect indicates true chromium well below the coarse 50 ppb reporting limit, so the cell is published at that maximum applicable reporting limit pending any positive detection. Chromium values are total chromium, not Cr-VI.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 97, "Avocado, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Avocado, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 2.1 | 59 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 66 | 580 | in profile |
| Pb | 27 | 0 | 12 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 50 | in profile |
| tHg | 27 | 0 | 1.3 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 97, n=27) are the primary quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The FSA UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) also includes avocado in Table 6 as a measured non-infant food composite, with values pending table extraction. The TDS is a US retail composite dataset and does not provide geographic separation by country of origin; avocado reaching US retail includes product from Mexico (dominant), California, and smaller imports from South America. Mexico-origin avocados grown in volcanic highland soils may have higher Ni and other trace metals than California product, but source-level breakdown is not available in TDS data. Hass variety dominates both production and TDS sampling; alternative varieties (Fuerte, Bacon, Zutano) may have different metal profiles but are not separately characterized in the current corpus.

## Processing effects

Avocado for consumption typically undergoes minimal processing: halving, pit removal, and skin peeling or scooping of the flesh. Skin peeling removes any metals deposited on the surface during growing and distribution. The pit (seed) contains a concentrated store of tannins and bitter compounds and is discarded in conventional use; no occurrence data for avocado seed metals appear in the current corpus. Guacamole and avocado purées retain the full metal content of the flesh. Avocado oil production extracts the lipid fraction; metals remain almost entirely in the non-lipid fraction (aqueous, cellular debris), meaning avocado oil carries very low metal concentrations. Heat treatment (for shelf-stable guacamole or avocado-based sauces) does not remove metals.

## Ingredient-derivative risk

The primary processed derivatives of avocado are guacamole (fresh or commercially processed), avocado purée for baby food, and avocado oil. Guacamole and purée carry the full metal load of the fresh flesh; commercial guacamole with added ingredients (lime juice, onion, salt) introduces additional minor metal contributions from those components but the avocado flesh dominates. Avocado purée has been introduced as an infant food ingredient in commercial squeezable pouches; given the Ni concentrations visible in the TDS data (median 180 ppb, maximum 580 ppb at [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), avocado-based infant foods may contribute meaningfully to Ni intake in infants consuming them frequently. Avocado oil is a low-risk derivative for metals given the lipophilic partitioning away from dissolved metals.

## Mitigation options

### Sourcing levers

Sourcing avocado from regions with documented low soil Ni and Cd reduces the concentration range in the fruit. Provenance specification distinguishing volcanic highland soils from alluvial or lower-Ni growing regions may be relevant for Ni specifically, but source-level data to quantify this effect are not available in the current corpus. _Quantified source-switching reduction factors are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Skin removal before consumption eliminates any surface-deposited Pb or other metals from atmospheric deposition and handling. Avocado oil extraction effectively removes metals from the oil phase; producers requiring low-metal avocado-derived ingredients may prefer oil over whole-fruit derivatives. _Quantified reduction factors for peeling are not available in the current corpus._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 applies the fresh fruit maximum levels to avocado: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), both wet weight as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). No specific EU ML for Ni in fresh avocado exists; Ni is not currently regulated by ML in EU food contaminant legislation for this matrix. In the United States, no FDA action level for Pb, Cd, or Ni in fresh or processed avocado exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). No Codex Alimentarius ML for heavy metals in avocado appears in the current corpus. For processed avocado products in infant food pouches, the applicable limits would derive from the product category, and the FDA Closer to Zero action levels for processed foods consumed by babies and young children may apply when finalized; those action levels are evolving and should be checked against the [[regulations/fda-closer-to-zero]] page for current status.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Metal profiling of Hass avocados: a cross-sectional study using ICP-MS and pXRF]]<span class="hmi-ref-meta">Anastario M, Watkins D, Specht AJ, Zilch A, Armendáriz Arnez C, and Roper C · BMC Research Notes · 2025 · [doi.org/10.1186/s13104-025-07430-w](https://doi.org/10.1186/s13104-025-07430-w)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/yoplac2026-peruvian-avocado-metals-health-risk|Ecological and Human Health Risk Assessment of Metals in Peruvian Avocados Using a Probabilistic Approach]]<span class="hmi-ref-meta">Yoplac-Navarro M, Grandez-Yoplac DE, Rituay P, Campos Trigoso JA, García L, Arellanos E, et al. · Foods 15(1): 82 · 2026 · [doi.org/10.3390/foods15010082](https://doi.org/10.3390/foods15010082)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|Yoplac-Navarro et al. 2026]]. *Ecological and Human Health Risk Assessment of Metals in Peruvian Avocados Using a Probabilistic Approach*, Foods 15(1): 82 | 2026 | Peer-reviewed | tAs, Cd, Cr, tHg, Ni, and Pb in paired avocado-pulp and soil samples across eight Peruvian producing regions including the EU-RASFF-flagged Ica and La Libertad |
| 3 | [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|Anastario et al. 2025]]. *Metal profiling of Hass avocados: a cross-sectional study using ICP-MS and pXRF*, BMC Research Notes | 2025 | Peer-reviewed | Pb, Cd, tAs, tHg, Ni, and Al in Hass avocado mesocarp vs exocarp stratified by California vs Michoacán origin and organic vs conventional practice |
| 4 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Avocado, raw (n=27); detectable concentrations for Cd, Ni, Pb, tAs, tHg |
| 6 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [4aa8d0407](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d0407) | 2026-08-11 | major | 2 sources added; narrative text revised |
| [10bb2e5ec](https://github.com/paleofoundation/heavymetalindex/commit/10bb2e5ec) | 2026-08-09 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
