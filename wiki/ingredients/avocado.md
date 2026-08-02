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
    typical_ppb: [0, 40]
    p95_ppb: 90
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: avocado-mesocarp-wet-weight
  Cd:
    status: populated
    typical_ppb: [2.9, 18]
    p95_ppb: 29.8
    confidence: high
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
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [105.2, 374]
    p95_ppb: 522
    confidence: high
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
    typical_ppb: [0, 0]
    p95_ppb: 50
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: avocado-mesocarp-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
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
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 6
---

# Avocado

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Avocado is a lipid-rich tree fruit (approximately 15 percent fat by weight) whose edible flesh (mesocarp) is enclosed within a relatively impermeable skin. The thick skin provides a degree of physical separation between the external environment and the edible flesh, limiting direct surface deposition of atmospheric metals relative to thin-skinned fruits. Root uptake from orchard soils remains the primary route for Pb, Cd, and other metals to reach the flesh.

The FDA FY2018-FY2020 TDS dataset for raw avocado (TDS Food 97, n=27) shows that avocado is a moderate-Ni matrix: Ni was detectable in all 27 samples with a median of 180 ppb, a p90 of 374 ppb, and a maximum of 580 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Cadmium was also detectable in all samples, with a median of 5.4 ppb and a maximum of 59 ppb. Total arsenic showed a p90 of 25.6 ppb and a maximum of 50 ppb, which is notable relative to most fruits. Lead was below the 4 µg/kg reporting limit in 26 of 27 composites with a single detect at 12 µg/kg, which the resynthesis treats as left-censored rather than as a measured zero; the upper distribution is recovered from primary fresh-fruit literature (see "Synthesis basis and censoring treatment" below). Chromium was below the 50 µg/kg reporting limit in all 27 composites, and total chromium was below the limit of detection in every avocado-pulp sample of the Peruvian survey, so the chromium cell rests on a censored floor rather than a confident zero. The elevated Ni relative to most fruits likely reflects Ni-rich volcanic or ultramafic soils prevalent in major avocado-producing regions (Mexico, Central America, California), though source-region breakdown is not available in TDS data. The lipid-rich mesocarp has not been shown to selectively accumulate fat-soluble metal species; the metals present appear to follow aqueous transport through the vascular system rather than lipophilic partitioning.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–40 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Cd | n=3 | 2.9–18 | high | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=3 | 0–25.6 | medium | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0–0.4 | high | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=3 | 105.2–374 | high | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/yoplac2026-peruvian-avocado-metals-health-risk\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, chromium, and uranium cells were resynthesized on 2026-06-11 on an avocado-mesocarp wet-weight basis, the edible-pulp form in which the fruit enters the ingredient supply chain and the basis FDA Total Diet Study Food 97 ("Avocado, raw") reports. Two of the primary avocado sources report on a dry-weight basis ([[sources/yoplac2026-peruvian-avocado-metals-health-risk|Yoplac-Navarro et al. 2026]], pulp dried at 70 °C for 24 h before grinding; [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Anastario et al. 2025]], mesocarp dehydrated before ICP-MS). Their dry-weight values are converted to a wet-weight equivalent for pooling using a Hass-mesocarp moisture content of approximately 73 percent (conversion factor approximately 0.27); the conversion is an estimate and is the principal reason confidence is held at medium for lead rather than high.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead at typical and 95th-percentile values of zero, chromium at zero, and uranium at zero. Those figures were an artifact of the FDA Total Diet Study composites, in which every sample (or all but one) fell below the reporting limit and the reported zeros were pooled as literal zeros. For lead, FDA reported 26 of 27 composites below the 4 µg/kg reporting limit with a single detect at 12 µg/kg; for chromium, all 27 below the 50 µg/kg reporting limit; for uranium, all 27 below the 1 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and, for lead, recovers the upper distribution from primary fresh-fruit occurrence literature.

The lead floor is set at the FDA 4 µg/kg reporting limit; the central and upper distribution rests on Peruvian retail-adjacent avocado pulp from eight producing regions ([[sources/yoplac2026-peruvian-avocado-metals-health-risk|Yoplac-Navarro et al. 2026]], n=95 pulp samples; lead below limit of detection in five of eight regions, per-region detected means rising to 0.220 mg/kg in Ayacucho, 0.231 mg/kg in La Libertad, and 0.325 mg/kg in Lima on a dry-weight basis, with a maximum single sample of 0.396 mg/kg) and on commercial Hass mesocarp ([[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Anastario et al. 2025]], mesocarp lead below detection in most strata with a single California-organic detect at 0.14 mg/kg dry weight that the authors flag as an outlier driving the principal-component lead loading, not a stratum mean). Converting the Peruvian high-region means to wet weight yields roughly 59 to 88 µg/kg, and the single highest Peruvian pulp sample roughly 107 µg/kg wet weight; these anchor the 95th-percentile estimate of 90 µg/kg. The bulk of the US TDS distribution sits at or below the reporting-limit floor, so the typical range is set at a left-censored 0 to 40 µg/kg wet weight, recognizing that most US-retail avocado pulp is at or near the censoring limit while Peruvian export-region pulp carries low but real lead.

Chromium is reported as total chromium only; no avocado hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. In normal-context avocado pulp, chromium is consistently below detection: Yoplac-Navarro et al. report total chromium below the limit of detection (<0.003 mg/kg) in every one of the 95 Peruvian pulp samples across all eight regions, and FDA reports all 27 US composites below the 50 µg/kg reporting limit. The chromium cell is therefore set to a left-censored typical of 0 with the 95th percentile placed at the 50 µg/kg FDA reporting-limit floor, at low confidence, because the entire normal-context distribution is censored and no quantitative non-wastewater pulp detection exists. The one quantitative chromium detection in avocado flesh in the corpus is a wastewater-irrigation outlier: [[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]] report avocado total chromium at 28.2 mg/kg dry weight in produce from Kaduna, Nigeria, irrigated with River Kaduna water that receives untreated refinery, textile, and industrial effluent. This value is two to three orders of magnitude above any other reported avocado chromium and is stratified as an industrial-wastewater signal rather than folded into the headline distribution. By-product chromium values from a tertiary review (avocado seed total chromium 0.57 to 2.29 mg/kg in [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]) describe the discarded seed, not the edible pulp, and are likewise excluded from the pulp distribution.

Uranium is recorded as a reviewed data gap. The only avocado uranium measurement in the corpus is the fully censored FDA Total Diet Study cell, in which all 27 composites fell below the 1 µg/kg reporting limit, and no primary avocado source in the corpus reports a quantitative uranium value, so no distribution is published. A single fully left-censored composite source does not support a non-zero or zero point estimate, and the prior high-confidence zero overstated the evidence.

A further single-source lead outlier sits outside the pulp distribution: a tertiary narrative review ([[sources/munir2022-heavy-metals-natural-foods-review|Munir et al. 2022]]) reproduces an "avocado pear" lead value of 1.69 mg/kg traced to a single Nigerian farm-site survey, roughly an order of magnitude above the EU fruit maximum level and above mainstream fruit-survey lead. The review itself flags the companion orange and pawpaw values from the same survey as needing verification against the primary source. This value is not pooled into the lead percentiles and is recorded only as a flagged high-lead lead from a single-site survey.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 97, "Avocado, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Avocado, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 2.1 | 2.86 | 5.4 | 18 | 29.8 | 59 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 66 | 105.2 | 180 | 374 | 522 | 580 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 12 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 25.6 | 36.8 | 50 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0.4 | 1.07 | 1.3 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 97, n=27) are the primary US-retail quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]) and report on a wet-weight, as-consumed basis. For lead and chromium the US TDS distribution is largely censored (lead 26 of 27 below the 4 µg/kg reporting limit; chromium all 27 below the 50 µg/kg reporting limit), so the upper distribution is recovered from origin-resolved primary literature. The Peruvian eight-region survey ([[sources/yoplac2026-peruvian-avocado-metals-health-risk|Yoplac-Navarro et al. 2026]], n=95 pulp samples, dry-weight basis) shows clear regional lead stratification, with pulp lead below detection in Amazonas, Áncash, Cusco, Huancavelica, and Ica and detected means rising through Ayacucho, La Libertad, and Lima; Lima and La Libertad are the two highest-volume Peruvian export regions and also carry the highest pulp mercury. Commercial Hass mesocarp ([[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Anastario et al. 2025]], n=24, California vs Michoacán) shows lead below detection in most strata with a single California-organic outlier and an origin-linked nickel/cobalt co-occurrence the authors attribute to California ultramafic soils. A separate wastewater-irrigation stratum ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]], Kaduna, Nigeria) reports avocado total chromium two to three orders of magnitude above all other sources, reflecting irrigation with untreated industrial effluent rather than background soil uptake. The FSA UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) also includes avocado in Table 6 as a measured non-infant food composite, with values pending table extraction. The TDS is a US retail composite dataset and does not provide geographic separation by country of origin; avocado reaching US retail includes product from Mexico (dominant), California, and smaller imports from South America. Mexico-origin avocados grown in volcanic highland soils may have higher Ni and other trace metals than California product, but source-level breakdown is not available in TDS data. Hass variety dominates both production and TDS sampling; alternative varieties (Fuerte, Bacon, Zutano) may have different metal profiles but are not separately characterized in the current corpus.

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
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 6 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/yoplac2026-peruvian-avocado-metals-health-risk|Ecological and Human Health Risk Assessment of Metals in Peruvian Avocados Using a Probabilistic Approach]]<span class="hmi-ref-meta">Yoplac-Navarro M, Grandez-Yoplac DE, Rituay P, Campos Trigoso JA, García L, Arellanos E, et al. · Foods 15(1): 82 · 2026 · [doi.org/10.3390/foods15010082](https://doi.org/10.3390/foods15010082)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf|Metal profiling of Hass avocados: a cross-sectional study using ICP-MS and pXRF]]<span class="hmi-ref-meta">Anastario M, Watkins D, Specht AJ, Zilch A, Armendáriz Arnez C, and Roper C · BMC Research Notes · 2025 · [doi.org/10.1186/s13104-025-07430-w](https://doi.org/10.1186/s13104-025-07430-w)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/imongben2026-kaduna-vegetables-hra|Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria]]<span class="hmi-ref-meta">Imongben CO, Tomori WB, Umoru PE, and Oyerinde WA · World Nutrition · 2026 · [doi.org/10.26596/wn.20261718-18](https://doi.org/10.26596/wn.20261718-18)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/munir2022-heavy-metals-natural-foods-review|Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review]]<span class="hmi-ref-meta">Munir N, Jahangeer M, Bouyahya A, El Omari N, Ghchime R, Balahbib A, et al. · Sustainability · 2022 · [doi.org/10.3390/su14010161](https://doi.org/10.3390/su14010161)</span><span class="hmi-ref-tag">Review</span>
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
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
