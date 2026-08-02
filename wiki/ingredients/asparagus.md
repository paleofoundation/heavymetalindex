---
title: "Asparagus"
type: ingredient
commodity: asparagus
label: "Asparagus"
aliases: ["Asparagus, fresh/frozen, boiled", "asparagus"]
category: vegetable
tds_food:
  number: 115
  description: "Asparagus, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 3.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [5.7, 39.2]
    p95_ppb: 41.7
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
    typical_ppb: [0, 5.7]
    p95_ppb: 7.6
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: asparagus-as-consumed-wet-weight
    speciation: total-Hg-only; Hg-unspecified GEMS rows excluded
  Ni:
    status: populated
    typical_ppb: [59.8, 204]
    p95_ppb: 210
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
    typical_ppb: [0, 390.5]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: asparagus-as-consumed-wet-weight
    speciation: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.4
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 2
---

# Asparagus

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 115, "Asparagus, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Asparagus is a perennial vegetable whose edible portion is the young shoot harvested before the fern stage. The shoot grows from a crown embedded in the soil, and metal transfer from soil to the shoot tissue occurs via root uptake through the vascular system. Cadmium is the analyte of greatest concern in asparagus within the FDA TDS FY2018-FY2020 dataset: the TDS data for "Asparagus, fresh/frozen, boiled" (TDS Food 115, n=27) show Cd detectable at all 27 samples with a median of 10 ppb, a p90 of 39.2 ppb, and a maximum of 54 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Nickel is also detectable in most samples, with a median of 130 ppb and a maximum of 240 ppb. These concentrations are consistent with asparagus being a moderate-accumulator vegetable for Cd and Ni under typical soil conditions.

Lead concentrations in asparagus are generally low in the TDS data: the p90 is 0 ppb and only the p95 (3.01 ppb) and maximum (4.3 ppb) indicate any detectable Pb in the dataset ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic is detectable at moderate levels, with a median of 3.5 ppb and a maximum of 10 ppb. These patterns are consistent with the general understanding that asparagus occupies an intermediate position among vegetables for metal accumulation: more than fruits, less than leafy greens grown in contaminated soils or root vegetables with high soil contact.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 5.7–39.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5.7 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/who-gemsfood-heavy-metal-contaminants\|2]] |
| Ni | n=2 | 59.8–204 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–390.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/who-gemsfood-heavy-metal-contaminants\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.2 | high | — |

## Synthesis basis and censoring treatment

The total-mercury and chromium cells were resynthesized on 2026-06-11 on an asparagus as-consumed wet-weight basis, the form in which the boiled vegetable is reported by the FDA Total Diet Study and the WHO GEMS/Food as-consumed aggregates. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported total mercury and chromium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Asparagus, fresh/frozen, boiled" (TDS Food 115, n=27), in which every composite fell below the reporting limit for both metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], reporting limit tHg 1 µg/kg, Cr 50 µg/kg). The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound, not a measured zero, and the upper distribution is recovered from the WHO GEMS/Food asparagus aggregates.

Total mercury rests on the WHO GEMS/Food total-mercury aggregate for asparagus (food code VS 0621, EURO region, as-consumed, n=244, 2004-2017), in which the central distribution is at or below detection (p10 through p90 all 0 µg/kg) with a 95th percentile of 0.21 µg/kg and a single maximum of 20 µg/kg ([[sources/who-gemsfood-heavy-metal-contaminants|WHO GEMS/Food]]). The two sources agree that asparagus total mercury sits at or near the non-detect floor: the FDA cell is fully censored below 1 µg/kg and the GEMS distribution is dominated by non-detects with only the upper tail rising above zero. The typical interval is therefore carried as a left-censored 0 to 0 and the 95th percentile as 0.2 µg/kg, replacing the earlier literal zero. Confidence is low because the deeper GEMS aggregate is overwhelmingly non-detect against a 0.04 µg/kg reporting floor and the source's exact-row aggregates remain flagged for review before standards use. Total mercury and inorganic arsenic-style speciation discipline is preserved: only the explicit GEMS "Total mercury" series populates this cell; the separate GEMS "Mercury (Hg unspecified)" asparagus rows (which report a p95 near 9.9 µg/kg and a single 20 µg/kg as-is value) are speciation-ambiguous and are excluded rather than folded into the total-mercury distribution, and methylmercury is never inferred from total mercury.

Chromium is reported as total chromium at low confidence; no asparagus hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The only grounded positive chromium value for asparagus is a single WHO GEMS/Food EURO/European-Union composite (food code VS 0621, as-consumed, n=1, year 2000, imported) at 390.5 µg/kg ([[sources/who-gemsfood-heavy-metal-contaminants|WHO GEMS/Food]]); the FDA Total Diet Study cell is fully censored below the 50 µg/kg reporting limit across all 27 composites. The typical interval is carried from the FDA left-censored floor of 0 up to that single grounded GEMS value of 390.5 µg/kg, and the 95th percentile is left uncomputed: a single imported composite cannot define a 95th percentile, the two sources differ by roughly eightfold (FDA below 50 µg/kg versus the GEMS 390.5 µg/kg), and the corpus holds no mid-range grounded fluid-asparagus chromium value between the censored floor and that single high import, so any upper-tail figure would be an unsupported interpolation. The 390.5 µg/kg value is recorded as a single elevated imported-market anchor described here rather than adopted as a commodity-wide central, pending a corroborating asparagus chromium measurement.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Asparagus, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3 | 5.7 | 10 | 39.2 | 41.7 | 54 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 59.8 | 130 | 204 | 210 | 240 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 3.01 | 4.3 | in profile |
| U | 27 | 0 | 0 | 0 | 1.22 | 1.4 | 1.8 | in profile |
| tAs | 27 | 0 | 0 | 3.5 | 5.72 | 7.58 | 10 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 115, n=27) are the primary quantitative occurrence source in the current corpus for asparagus across most analytes ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), with the WHO GEMS/Food asparagus aggregates (food code VS 0621) supplying the total-mercury and chromium distributions where the FDA composites are fully censored ([[sources/who-gemsfood-heavy-metal-contaminants|WHO GEMS/Food]]). The TDS is a US market composite dataset purchased at retail across multiple US cities, so it reflects the blended contribution of domestic (California, Michigan, Washington) and imported (Peru, Mexico) asparagus without geographic separation at the sample level. The GEMS total-mercury aggregate is European-region as-consumed data (n=244, 2004-2017) sitting at or near the non-detect floor, while the single grounded GEMS chromium value (n=1, year 2000, imported, 390.5 µg/kg as-consumed) is an isolated elevated import rather than a commodity-wide central, as detailed in the synthesis-basis section above. Asparagus grown in soils with elevated Cd (associated with phosphate fertilizer use or industrial legacy) is expected to show higher Cd concentrations, but source-country breakdown is not available in the TDS data alone. Variety (green versus white asparagus, where white is the etiolated form grown without light) may influence metal distribution, but no varietal comparison data appear in the current corpus. Synthesis of geographic and varietal ranges will be updated when additional occurrence sources are integrated.

## Processing effects

The asparagus in the TDS dataset is reported as "fresh/frozen, boiled," meaning the measured concentrations reflect post-boiling concentrations. Boiling in water leaches water-soluble metal fractions into the cooking liquid, which is typically discarded; this means that concentrations in the cooked, drained asparagus may be lower than in the raw plant tissue for water-soluble metal species. The magnitude of leaching depends on cooking time, water volume, and the speciation of the metal. Freezing prior to cooking does not materially alter metal concentrations. Canning asparagus in tinplate introduces a Sn contamination route, but the TDS data reflect boiled fresh or frozen asparagus rather than canned product. _Quantified leaching reduction factors specific to asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

## Ingredient-derivative risk

Asparagus is consumed primarily as a whole vegetable and has limited downstream derivative forms. Canned asparagus in tinplate introduces Sn from can linings as an additional analyte compared to fresh or frozen. Asparagus in ready meals or soups carries the vegetable's metal load into the composite product. Asparagus extract or asparagus powder, used in dietary supplements, concentrates the metal content of the vegetable material; no occurrence data for these derivatives appear in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing asparagus from regions with documented low soil Cd (avoiding fields with heavy phosphate fertilizer history or industrial contamination) represents the primary lever given Cd's detectability across all TDS samples. Country-of-origin specification, distinguishing domestic US product from imported Peruvian or Mexican asparagus, may reveal different Cd distributions when source-level data become available. _Quantified source-switching reduction factors are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces Cd bioavailability and plant uptake. Phosphate fertilizer selection, preferring cadmium-tested low-Cd phosphate sources, limits ongoing soil Cd accumulation in asparagus beds. _Quantified agronomic-lever effects specific to asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling and discarding the cooking water removes some water-soluble metal fractions. Avoidance of tinplate canning eliminates the Sn contamination route for canned product. _Quantified reduction from boiling and draining for asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

Preference for glass, plastic, or retort pouch packaging over tinplate canning eliminates the Sn contamination route applicable to canned asparagus products.

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 establishes maximum levels for Pb and Cd in vegetables. For asparagus, as a fresh vegetable, the applicable Pb ML is 0.10 mg/kg (100 ppb) wet weight and the Cd ML is 0.050 mg/kg (50 ppb) wet weight ([[regulations/eu2023-contaminants-maximum-levels]]). No specific EU ML for asparagus Cd deviating from the general vegetable value appears in the current corpus; some leafy and stem vegetables have higher specific limits. In the United States, no FDA action level for Pb, Cd, or Ni in fresh asparagus exists under current Closer to Zero guidelines ([[regulations/fda-closer-to-zero]]); FDA's Closer to Zero program focuses on processed infant and toddler foods rather than fresh vegetables directly. No Codex Alimentarius ML specifically for asparagus contaminants appears in the current corpus. For canned asparagus, the EU applies an Sn ML of 200 mg/kg for canned solid food under Regulation (EU) 2023/915.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/who-gemsfood-heavy-metal-contaminants|GEMS/Food Contaminants database heavy-metal exports]]<span class="hmi-ref-meta">World Health Organization · GEMS/Food Contamination Monitoring and Assessment Programme · 2026 · [extranet.who.int](https://extranet.who.int/gemsfood/?DisplayFormat=1)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Asparagus, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
| 2 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 1 source added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
