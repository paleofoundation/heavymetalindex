---
title: "Iceberg lettuce"
type: ingredient
commodity: iceberg-lettuce
label: "Iceberg lettuce"
aliases: ["Lettuce, iceberg, raw", "iceberg lettuce"]
category: leafy-green
tds_food:
  number: 109
  description: "Lettuce, iceberg, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-iceberg-lettuce-edible-leaf-wet-weight
  Cd:
    status: populated
    typical_ppb: [16, 61.2]
    p95_ppb: 64.4
    confidence: high
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-iceberg-lettuce-edible-leaf-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-iceberg-lettuce-edible-leaf-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 168]
    p95_ppb: 215
    confidence: high
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
    typical_ppb: [0, 100]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-iceberg-lettuce-edible-leaf-wet-weight
    speciation: total-Cr-only
  Sn:
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
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 2
---

# Iceberg lettuce

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 109, "Lettuce, iceberg, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Iceberg lettuce is a head-forming variety of Lactuca sativa with a notably high water content (approximately 95 percent) relative to other leafy vegetables. Like all leafy vegetables, it is capable of accumulating cadmium through root uptake from soil and lead through atmospheric deposition on leaf surfaces. However, several features of iceberg lettuce distinguish its contamination profile from denser leafy greens such as spinach or kale. The tight head structure means that outer wrapper leaves, which are the primary site of atmospheric Pb deposition, largely enclose and protect the inner leaves that reach the consumer; outer leaves are typically removed during harvesting and packing. The high water content dilutes metal concentrations on a fresh-weight basis relative to more concentrated leafy vegetables. Soil Cd is the dominant pathway for the Cd detected in iceberg lettuce, operating through root uptake into the edible leaf tissue; the FDA FY2018-FY2020 TDS data show Cd detectable in all 27 samples, with a median of 27 ppb and a maximum of 73 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. Nickel is also consistently detected, with a median of 90 ppb and a maximum of 250 ppb, reflecting the general tendency of leafy vegetables to accumulate Ni from soil. Lead, total arsenic, total mercury, and uranium were below their reporting limits across all 27 TDS samples, and chromium was below the limit in 26 of 27 with a single detect at 100 ppb; these below-limit results are carried as left-censored bounds rather than as measured zeros, so they constrain the edible-leaf metal burden from above rather than establishing it at zero (see the Synthesis basis and censoring treatment section). The head-leaf structure and commercial trimming of outer wrapper leaves are consistent with the low lead burden, but the FDA composite is fully censored for lead and cannot by itself confirm a zero value.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 16–61.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–168 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0–100 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw-iceberg-lettuce edible-leaf wet-weight basis, the form in which the trimmed head is consumed and the basis FDA Total Diet Study Food 109 reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total arsenic, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Lettuce, iceberg, raw" (n=27), in which every sample (or, for chromium, all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], reporting limits Pb 4, tAs 3, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound. No source in the corpus reports an iceberg-specific positive value for any of these five analytes, so the censored FDA composite is the only iceberg-fidelity occurrence evidence and each cell is held at a single contributor and low confidence.

Lead, total arsenic, and total mercury rest on the FDA censored floor alone. FDA reports all 27 iceberg composites below the reporting limit for each: Pb below 4 µg/kg, total arsenic below 3 µg/kg, total mercury below 1 µg/kg. Each cell is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile. Total arsenic is held distinct from inorganic arsenic, which remains a reviewed data gap because no speciated measurement exists for this ingredient. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium at low confidence; the FDA iceberg composite was below the 50 µg/kg reporting limit in 26 of 27 samples with a single detect of 100 µg/kg as the distribution maximum, so the cell is carried as a left-censored floor with that single detect as the upper bound ([0, 100]) and no 95th-percentile, since one detect cannot anchor a percentile. No iceberg hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred from total chromium. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source reports an extractable quantitative iceberg value, so no distribution is published (the rice-uranium precedent).

Two retail surveys measure lettuce but not iceberg specifically and are carried only as broad-lettuce proxies in prose, never folded into the iceberg percentiles. A southern-Iran retail survey from the Behbahan oil-and-petrochemical corridor reports mean lettuce lead of 134 µg/kg, total chromium of 306 µg/kg, cadmium of 60 µg/kg, and nickel of 320 µg/kg on a wet-weight basis, with per-store lead spanning roughly 120 to 340 µg/kg ([[sources/armand2026-lettuce-cabbage-behbahan|Armand et al. 2026]], generic lettuce, industrial-impact region; the authors themselves state these values should not be treated as representative of global lettuce baselines). A Ghanaian survey of lettuce grown on anthropogenic-activity sites (traffic corridors, a sewage-treatment farm) in Kumasi reports extreme site means including lettuce nickel to 137 mg/kg dry weight ([[sources/owusuadoma2024-ghana-lettuce-metals|Owusu Adoma et al. 2024]], generic lettuce, contaminated urban-farming sites). Both are wastewater/industrial-impact, generic-lettuce data; they bound the upper tail of what contaminated-region lettuce can carry but cannot be relabeled as iceberg or as ordinary-market baseline, and neither reports a usable iceberg-fidelity central value.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Lettuce, iceberg, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 8.4 | 16 | 27 | 61.2 | 64.4 | 73 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 100 | in profile |
| Ni | 27 | 0 | 0 | 90 | 168 | 215 | 250 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured iceberg lettuce (TDS Food 109, "Lettuce, iceberg, raw") with n=27 composite samples and found Cd ranging from a minimum of 8.4 ppb to a maximum of 73 ppb, with a median of 27 ppb and a p90 of 61.2 ppb; Ni ranging from 0 to a maximum of 250 ppb with a median of 90 ppb; and Cr below the 50 ppb reporting limit in 26 of 27 samples with a single detect at 100 ppb as the distribution maximum [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. Pb (reporting limit 4 ppb), tAs (3 ppb), tHg (1 ppb), and U (1 ppb) were below their reporting limits across all 27 samples; these are left-censored bounds, not measured zeros, and constrain the metal burden from above rather than establishing it at zero. The TDS reflects the US retail market, which sources iceberg lettuce predominantly from California and Arizona. Iceberg lettuce grown in regions with elevated soil Cd (associated with certain phosphate-fertilized soils or historically contaminated fields) would be expected to show higher Cd concentrations; California growing regions for iceberg lettuce are generally well-characterized with respect to soil quality, and the TDS median of 27 ppb Cd is consistent with this agricultural context. No iceberg-specific occurrence survey beyond the FDA composite exists in the current corpus; two generic-lettuce retail surveys (Behbahan, Iran and Kumasi, Ghana) measured lettuce in industrial-impact and anthropogenic-activity settings and report substantially higher lead and chromium, but are carried only as broad-lettuce industrial-region proxies and not as iceberg baselines (see the Synthesis basis and censoring treatment section).

## Processing effects

Iceberg lettuce is consumed primarily raw after trimming and washing. Removal of outer wrapper leaves, which is standard commercial practice, is the most significant processing step for metal reduction: outer leaves exposed to atmospheric deposition carry more surface-deposited Pb and environmental particulate than protected inner leaves. Washing of cut or whole leaves with potable water removes a portion of surface-deposited metals but does not affect cadmium that has been absorbed through root uptake into leaf tissue. Extended submersion washing removes more surface contamination than brief rinsing; the magnitude of the reduction for Pb is likely meaningful in high-deposition environments, but for Cd — the dominant concern based on TDS data — washing provides minimal benefit because the metal is within the leaf cell rather than on the surface.

## Ingredient-derivative risk

Iceberg lettuce is rarely processed into concentrated derivatives. Salad mixes and pre-washed bags represent the main processing pathway; shredded or chopped iceberg lettuce in foodservice and retail products retains the same metal profile as the intact head because no concentration step is involved. Juice or extraction of iceberg lettuce, which is uncommon, would not concentrate metals beyond what is present in the raw leaf on a juice-equivalent basis.

## Mitigation options

### Sourcing levers

Selecting iceberg lettuce from producers with soil Cd monitoring programs and from regions with documented low soil Cd provides the primary reduction lever for this analyte. USDA Good Agricultural Practices (GAP) certification and equivalent EU frameworks address soil quality monitoring in ways that capture metal risk.

### Agronomic levers

Maintaining soil pH above 6.5 reduces Cd bioavailability and root uptake in leafy vegetables. Avoiding the application of impure phosphate fertilizers with high Cd content on lettuce fields directly reduces soil Cd load accumulation over successive growing seasons.

### Processing levers

Commercial trimming of outer wrapper leaves, which is standard in the iceberg lettuce supply chain, is the most practically significant processing lever. Enhanced washing of cut leaves with acidic or chelating rinse solutions has been studied in experimental contexts but is not standard commercial practice.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given that Cd is consistently detected across the full TDS distribution and ranges up to 73 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level or origin-level Cd testing provides a useful quality signal for buyers seeking to minimize dietary Cd contribution from leafy vegetables. Ni testing is also warranted given the high median (90 ppb) and maximum (250 ppb) observed in the TDS data.

### Packaging and storage levers

Iceberg lettuce is not packaged in tin-lined cans; Sn migration is not a relevant concern. Refrigerated storage under modified atmosphere reduces microbial risk and extends shelf life without affecting metal concentration.

## Regulatory limits that apply

EU Regulation 2023/915 sets maximum levels for Pb in leafy vegetables at 0.30 mg/kg fresh weight and for Cd in leafy vegetables at 0.20 mg/kg fresh weight [[regulations/eu2023-contaminants-maximum-levels]]. The FDA TDS maximum for Cd in iceberg lettuce (73 ppb, equivalent to 0.073 mg/kg) is well below the EU Cd limit of 0.20 mg/kg. The EU Cd limit for lettuce specifically under [[regulations/eu-2023-915-cadmium]] is 0.20 mg/kg fresh weight; Cd levels in the TDS distribution are consistent with compliance. The United States does not set a statutory maximum for Pb or Cd in leafy vegetables. Codex Alimentarius does not set a specific ML for Cd or Pb in lettuce as a distinct commodity [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/armand2026-lettuce-cabbage-behbahan|Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation]]<span class="hmi-ref-meta">Armand R, Rafati L, Mohammadi H, and Armand N · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/owusuadoma2024-ghana-lettuce-metals|Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana]]<span class="hmi-ref-meta">Owusu Adoma M, Nyarko G, Boateng A, and Darko G · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241285737](https://doi.org/10.1177/11786302241285737)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Lettuce, iceberg, raw (n=27); detectable concentrations for Cd, Cr, Ni |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [8c45a300b](https://github.com/paleofoundation/heavymetalindex/commit/8c45a300b) | 2026-05-31 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
