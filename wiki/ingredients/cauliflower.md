---
title: "Cauliflower"
type: ingredient
commodity: cauliflower
label: "Cauliflower"
aliases: ["Cauliflower, fresh/frozen, boiled", "cauliflower"]
category: vegetable
tds_food:
  number: 116
  description: "Cauliflower, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Cauliflower

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 116, "Cauliflower, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cauliflower is a Brassica vegetable that accumulates cadmium primarily through root uptake from soil, a pathway common to the crucifer family. Brassicas express metal-binding proteins and organic acid secretions that actively mobilise cadmium and other divalent cations from the rhizosphere, making them moderate cadmium accumulators relative to other vegetables. The dense, compact head structure of cauliflower limits direct atmospheric deposition of lead onto edible surfaces, unlike leafy greens where large surface-area-to-mass ratios drive leaf-surface Pb contamination. Soil cadmium concentration, pH (lower pH increases cadmium availability), and phosphate fertiliser history are the primary agronomic drivers of cauliflower cadmium load. Nickel uptake follows a similar root-uptake pathway and is detectable in some surveys; the FDA Total Diet Study FY2018-FY2020 found Ni in the 90th-percentile sample at 97 ppb (wet weight, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cauliflower, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3.5 | 5.92 | 11 | 18.4 | 21.1 | 28 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 600 | in profile |
| Ni | 27 | 0 | 0 | 0 | 97 | 128 | 150 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.98 | 1.9 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 provides the primary quantitative baseline for cauliflower in the US market, reporting cadmium concentrations with a median of 11 ppb and a 90th percentile of 18.4 ppb (n=27, wet weight) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Lead was below the reporting limit in all 27 TDS samples, consistent with the protected head structure of cauliflower limiting atmospheric Pb deposition. Nickel was detectable at the 90th percentile (97 ppb) but below the reporting limit at the median, indicating skewed distribution with a subset of samples from higher-Ni-soil origins [[sources/fda2022-tds-elements-fy2018-fy2020]]. A survey of vegetables in Bogura, Bangladesh found elevated cadmium in soil and transfer to Brassica species in that region, though exact cauliflower-specific values from that source are pending structured extraction [[sources/samma2024-bangladesh-vegetable-metals]]. Geographic variation in Cd load is expected to be moderate to high across growing regions given differences in soil cadmium background, fertiliser inputs, and irrigation water quality; the current corpus does not support a region-by-region breakdown for cauliflower specifically.

## Processing effects

Boiling is the standard preparation method for cauliflower and is the basis reported in the FDA Total Diet Study ("Cauliflower, fresh/frozen, boiled") [[sources/fda2022-tds-elements-fy2018-fy2020]]. Boiling leaches cadmium and other water-soluble metal species into cooking water; studies on related Brassicas (broccoli, cabbage) indicate that boiling can reduce cadmium content in the edible portion by 20-40% relative to raw, depending on cooking time and water volume, though the magnitude for cauliflower specifically is not quantified in the current corpus. Discarding the cooking water rather than using it as broth or stock is therefore relevant for cadmium reduction. Washing fresh cauliflower before cooking removes surface soil contamination but has minimal effect on internalized cadmium. Blanching and freezing prior to retail does not materially alter the metal distribution within the floret tissue.

## Ingredient-derivative risk

Cauliflower is consumed primarily as a whole vegetable (fresh, frozen, or as part of prepared dishes). Processed derivatives include cauliflower rice (raw riced florets), cauliflower flour (dried and milled), and cauliflower-based pizza crusts and flatbreads. Drying and milling concentrate metals on a dry-weight basis relative to fresh-weight values; a drying step that removes roughly 90% of water could increase apparent cadmium concentration approximately ten-fold on a dry-weight basis. Cauliflower rice retains the intact floret tissue and carries a similar metal profile to fresh cauliflower on a wet-weight basis. These derivatives are not currently individually characterised in the corpus; values from the whole-vegetable data should be treated as indicative but not directly equivalent for dried or highly processed cauliflower products.

## Mitigation options

### Sourcing levers

Sourcing cauliflower from regions with low background soil cadmium and documented low phosphate fertiliser use reduces cadmium load at the ingredient level. Supplier specification of soil cadmium levels or adherence to the EU cadmium maximum for vegetables (0.050 mg/kg fresh weight per [[regulations/eu-2023-915-cadmium]]) provides a regulatory floor. Certified organic production does not automatically imply lower cadmium; soil history is the determinant.

### Agronomic levers

Maintaining soil pH above 6.5 reduces cadmium bioavailability to Brassica crops by shifting cadmium to less plant-available forms. Liming acidic soils is the most widely documented lever for reducing cadmium uptake in vegetables; magnitude of effect varies by soil type and cadmium speciation. Selection of lower-accumulating cultivars is an emerging lever documented for other Brassicas but not yet characterised for cauliflower varieties specifically in the current corpus.

_No quantified data on cultivar selection for cauliflower cadmium in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling in a high water-to-vegetable ratio and discarding the cooking water reduces cadmium in the edible portion, based on analogous data from broccoli and cabbage. Washing before cutting reduces surface contamination. These are low-cost, high-availability levers for food service and home preparation contexts.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level cadmium testing by ICP-MS is appropriate for manufacturers using cauliflower in concentrated or dried formats where the amplification effect on dry weight may push values closer to applicable regulatory limits. For fresh whole cauliflower at typical consumption volumes, the TDS median cadmium (11 ppb wet weight) is well below EU and Codex regulatory ceilings; routine lot testing is lower priority unless sourcing from regions with documented elevated soil cadmium.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU Regulation (EC) No 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets a maximum level of 0.050 mg/kg fresh weight for cadmium in fresh vegetables of the Brassica genus, which includes cauliflower. The lead maximum level for fresh vegetables under the same regulation is 0.10 mg/kg fresh weight. No specific US FDA action level applies to lead or cadmium in fresh cauliflower; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) is focused on infant and toddler foods rather than fresh vegetables. The Codex general standard for contaminants (CXS 193-1995, [[regulations/codex-cadmium-mls]]) provides an international cadmium maximum of 0.050 mg/kg for Brassica vegetables. The FDA TDS median Cd value of 11 ppb is approximately 22% of the EU maximum level, indicating typical US market cauliflower is well within regulatory limits on average.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cauliflower, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Cr, Ni, U |
<!-- END: hmi-source-legend -->

