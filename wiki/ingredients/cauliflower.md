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
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [5.9, 18.4]
    p95_ppb: 21.1
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 97]
    p95_ppb: 128
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
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
    p95_ppb: 1.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 8
---

# Cauliflower

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 6 jurisdictions, top IN 25% | — |
| D3 Anthropogenic evidence | GAP | 1 irrigation-water + 1 agricultural-soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 1 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 10 claims checked, 10 supported; 2 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming cauliflower: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 4 metal(s) covered | unmapped analytes: tAs, Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 116, "Cauliflower, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cauliflower is a Brassica vegetable that accumulates cadmium primarily through root uptake from soil, a pathway common to the crucifer family. Brassicas express metal-binding proteins and organic acid secretions that actively mobilise cadmium and other divalent cations from the rhizosphere, making them moderate cadmium accumulators relative to other vegetables. The dense, compact head structure of cauliflower limits direct atmospheric deposition of lead onto edible surfaces, unlike leafy greens where large surface-area-to-mass ratios drive leaf-surface Pb contamination. Soil cadmium concentration, pH (lower pH increases cadmium availability), and phosphate fertiliser history are the primary agronomic drivers of cauliflower cadmium load. Nickel uptake follows a similar root-uptake pathway and is detectable in some surveys; the FDA Total Diet Study FY2018-FY2020 found Ni in the 90th-percentile sample at 97 ppb (wet weight, n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0 | 0 | high | [[sources/samma2024-bangladesh-vegetable-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=2 | 5.9–18.4 | 21.1 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–97 | 128 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | high | [[sources/samma2024-bangladesh-vegetable-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 1.0 | high | — |

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
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | BD Pb, Cr, Cu occurrence in Composite vegetable and soil samples from 5 vegetable species across 6 upazilas in Bogura district, Bangladesh (northern industrial... (n=30) |
| 4 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn occurrence in 244 commercially purchased food samples from six supermarkets, six farmers' markets, and one wholesale market across Shanyang and... (n=244) |
| 5 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cauliflower, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Cr, Ni, U |
| 7 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 8 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1ca3eb0](https://github.com/paleofoundation/heavymetalindex/commit/1ca3eb0) | 2026-06-06 | source-legend: drain awaiting-synthesis backlog + wire populator into prebuild |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
