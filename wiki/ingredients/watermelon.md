---
title: "Watermelon"
type: ingredient
commodity: watermelon
label: "Watermelon"
aliases: [Watermelon, "raw/frozen", watermelon, watermelon-rind]
category: fruit
tds_food:
  number: 81
  description: "Watermelon, raw/frozen"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 19]
    p95_ppb: 74
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-watermelon-edible-flesh-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 1.4]
    p95_ppb: 1.7
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
    typical_ppb: [0, 3.8]
    p95_ppb: 4.5
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-watermelon-edible-flesh-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 52]
    p95_ppb: 67.6
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-watermelon-edible-flesh-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
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
sources: 7
---

# Watermelon

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 5/10 HMTc analytes, total n=10 | common tier expects total n>=15; have 10 |
| D2 Regional coverage | OK | 9 jurisdictions, top IN 40% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 2 more study(ies); Ni: needs 1 more study(ies); Cr: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 3/10 populated cells declare a basis token | 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 35 claims checked, 35 supported; 7 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming watermelon: fda2022-tds-elements-fy2018-fy2020, chaleshtori2019-watermelon-carrot-pb-cd |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 2 more study(ies); basis: 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 81, "Watermelon, raw/frozen." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Watermelon is a cucurbit fruit with a high water content (approximately 92 percent by weight) and a large physical volume. Both characteristics limit heavy metal accumulation on a per-gram basis: metals taken up from soil by the root system are distributed across a large mass of dilute fruit tissue. The thick outer rind provides an additional physical barrier that restricts metal translocation into the edible flesh. Watermelon is therefore among the lower-risk food matrices on the wiki for most heavy metals, but the values are low rather than zero. The FDA TDS FY2018-FY2020 data (n=27) report Pb, Cr, tHg, and U below their reporting limits across the entire distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]); those below-limit results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section). The same FDA composite shows detectable upper-tail observations for Ni (reaching 79 ppb at maximum), tAs (reaching 6.8 ppb at maximum), and Cd (reaching 2.6 ppb at maximum). A primary fresh-watermelon survey from Iran detected lead in the edible flesh at a mean of 18.68 ppb and a maximum of 74.43 ppb ([[sources/chaleshtori2019-watermelon-carrot-pb-cd]]), low but non-zero. The Ni signal is consistent with low-level background Ni in cucurbit crops. The tAs signal at trace levels is not unexpected for fruit grown on soils with any background arsenic. Root-level uptake from contaminated soils is the operative pathway for all detected metals; there is no aquatic bioaccumulation or manufacturing-related metal pathway for fresh watermelon.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–19 | low | [[sources/chaleshtori2019-watermelon-carrot-pb-cd\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=2 | 0–1.4 | high | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.8 | high | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–52 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw-watermelon edible-flesh wet-weight basis, the basis on which the FDA Total Diet Study reports TDS Food 81 ("Watermelon, raw/frozen") and the form in which the fruit is consumed. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for watermelon (n=27), in which every sample fell below the reporting limit for each of these four metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the FDA censored floor expressed as a left-censored bound and, for lead, recovers the upper distribution from a primary fresh-watermelon survey that detected lead at low but non-zero concentrations.

Lead rests on the FDA censored floor plus the single fresh-watermelon survey in the corpus that measured the flesh by name ([[sources/chaleshtori2019-watermelon-carrot-pb-cd|Chaleshtori and Jadi 2019]], Iran, wet-weight edible flesh). That study reports watermelon lead at a mean of 18.68 µg/kg with a range from not detected to 74.43 µg/kg, with no sample exceeding the 100 µg/kg comparison limit used by the authors. The pooled lead typical of [0, 19] takes the FDA 4 µg/kg reporting limit as the left-censored low bound and the Chaleshtori mean as the upper; the lead 95th-percentile of 74 µg/kg is the Chaleshtori observed maximum, the top of the ordered fresh-flesh set. The cell is held at low confidence: only one wet-weight positive anchor exists against an otherwise fully censored FDA composite, and the two further corroborating fresh-fruit surveys ([[sources/unaegbu2016-fruit-heavy-metals-enugu|Unaegbu et al. 2016]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]]) report watermelon lead below detection, consistent with the low central but adding no upper-tail resolution. The dry-weight riverbank-cultivation values discussed below are held out of the headline distribution.

Total mercury and chromium rest on the FDA censored floor alone. No source in the corpus reports a watermelon-flesh positive value for either: the FDA TDS composite is below the reporting limit for both, the pineapple-watermelon cocktail juice that carries mercury and uranium data ([[sources/youssao2018-fruit-juices-syrup-benin|Youssao et al. 2018]]) is a multi-fruit beverage matrix that cannot be relabelled as watermelon flesh, and the fruit by-product review that names watermelon in scope ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]) reports chromium only for watermelon peel and seed by-products (4.65 mg/kg), not the edible flesh. Each of these two cells is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single contributor. Total mercury is held distinct from methylmercury and is not derived from it. Chromium is reported as total chromium only; no watermelon hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred.

The single direct watermelon-flesh chromium measurement in the corpus is dry-weight rather than wet-weight: the riverbank-cultivation survey ([[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Elbagory et al. 2025]], Ganges-Yamuna Basin, Northern India) reports watermelon-pulp chromium at a mean near 0.79 mg/kg dry weight in Arka Shyama and 0.76 mg/kg dry weight in Crimson Sweet, with a pooled range of 0.40 to 1.05 mg/kg dry weight. Because watermelon pulp is roughly 92 percent water, these dry-weight figures sit roughly an order of magnitude above the wet-weight edible-flesh basis of this page and cannot be converted into a flesh central without a moisture factor the source does not supply; they are carried here as a dry-weight upper-context anchor on the chromium cell, not folded into the wet-weight floor. The same Elbagory survey reports watermelon-pulp lead at a mean near 0.05 mg/kg dry weight with a peak of 0.11 mg/kg dry weight at the most contaminated Ganges site (L10); these dry-weight riverbank lead values are likewise held out of the wet-weight lead percentiles above and are discussed as a cultivation-context outlier in the ranges section.

Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites, and the only other corpus value is the pineapple-watermelon cocktail juice (Youssao et al. 2018), which cannot be relabelled as watermelon flesh. No source reports an extractable quantitative watermelon-flesh uranium value, so no distribution is published (the rice-uranium precedent).

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Watermelon, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 1.44 | 1.71 | 2.6 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 52 | 67.6 | 79 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 3.78 | 4.53 | 6.8 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=27) show that the vast majority of watermelon samples are at or below detection limits for all analytes ([[sources/fda2022-tds-elements-fy2018-fy2020]]), with the below-limit results carried as left-censored bounds rather than measured zeros. The p90 for Ni is 52 ppb and maximum is 79 ppb; for tAs the p90 is 3.78 ppb and maximum is 6.8 ppb; for Cd the p90 is 1.44 ppb and maximum is 2.6 ppb. Lead, chromium, total mercury, and uranium were below their reporting limits throughout this US composite. The single fresh-watermelon survey to measure the edible flesh by name, an Iranian market study ([[sources/chaleshtori2019-watermelon-carrot-pb-cd|Chaleshtori and Jadi 2019]]), detected lead at a mean of 18.68 ppb (range not-detected to 74.43 ppb) and cadmium at a mean of 2.40 ppb (range not-detected to 13.40 ppb) on a wet-weight basis, both below the permissible limits the authors applied.

Riverbank cultivation is the documented upper-tail driver for watermelon. The Ganges-Yamuna survey of two watermelon cultivars grown on contaminated riverbank soils in Northern India ([[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Elbagory et al. 2025]]) reports dry-weight pulp lead near 0.05 mg/kg with a peak of 0.11 mg/kg at the most polluted Ganges site, dry-weight chromium of 0.40 to 1.05 mg/kg, and dry-weight cadmium and arsenic in several samples above the WHO/FAO fruit thresholds the authors cited. These are dry-weight values on fruit irrigated by and grown beside sewage-affected surface water; because watermelon pulp is roughly 92 percent water they sit roughly an order of magnitude above the wet-weight edible-flesh basis used elsewhere on this page, and they are reported here as a cultivation-context outlier rather than as the commodity central. Elevated watermelon metal values are therefore best understood as a function of contaminated growing environment, particularly wastewater-irrigated or riverbank soils, rather than as characteristic of the commodity category as a whole. No varietal breakdown beyond the Arka Shyama / Crimson Sweet / Iranian-market contrast is available in the current corpus.

## Processing effects

Fresh watermelon consumed raw undergoes no processing steps that alter metal concentrations. Watermelon juice and watermelon-based beverages produced by pressing and filtering concentrate metals in proportion to water reduction only minimally, as the high initial water content of the fruit means that juice yield is high and solid residue is low. Freezing (the form in the TDS description "Watermelon, raw/frozen") does not alter metal concentrations. No cooking or thermal processing is conventionally applied to watermelon in its primary use as a fresh fruit.

## Ingredient-derivative risk

Watermelon is used primarily as a fresh fruit. Processed derivatives include watermelon juice, watermelon extract (used in beverages and supplements), watermelon rind pickles, and freeze-dried watermelon powder. The rind carries a different metal profile than the flesh because it is the outer structural tissue closest to the soil interface; rind-specific metal data are not in the current corpus. Freeze-dried watermelon powder concentrates metals proportionally to water removal but the low initial metal content of the flesh means concentrations remain low even after dehydration.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the consistently near-zero concentrations in the TDS data, routine lot-level heavy metal testing of fresh watermelon for commercial food manufacturing is unlikely to yield actionable signals under normal supply-chain conditions. Testing would be warranted when watermelon is sourced from geographies with known soil contamination or industrial co-location.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union applies maximum levels for Pb (0.10 mg/kg, or 100 ppb) and Cd (0.050 mg/kg, or 50 ppb) to fresh fruit under [[regulations/eu2023-contaminants-maximum-levels]]. These limits apply to watermelon as fresh fruit sold in the EU. No FDA action level specific to watermelon or cucurbit fruits is in force. [[regulations/codex-cadmium-mls]] provides the international Codex Cd maximum for vegetables and certain fruits. The observed concentrations in the TDS data are substantially below applicable regulatory limits.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/chaleshtori2019-watermelon-carrot-pb-cd|Assessment of Lead and Cadmium Levels in Watermelon and Carrot]]<span class="hmi-ref-meta">Sharafati Chaleshtori Reza and Jadi Zahra · Iranian Journal of Toxicology · 2019 · [doi.org/10.32598/ijt.13.4.585.1](https://doi.org/10.32598/ijt.13.4.585.1)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/unaegbu2016-fruit-heavy-metals-enugu|Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria]]<span class="hmi-ref-meta">Magdalene Unaegbu, Vincent C. I. Eze, Ebere C. I. Omeje, Ezinne A. O. Agbo, and Ebere V. Chukwuma · International Journal of Food Contamination · 2016 · [doi.org/10.1186/s40550-016-0031-9](https://doi.org/10.1186/s40550-016-0031-9)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/youssao2018-fruit-juices-syrup-benin|Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic]]<span class="hmi-ref-meta">Alassane A. K. Youssao, Magloire A. N. Gbaguidi, Leonce Dovonon, Oriol Baltrons, Fabienne Seby, Mathilde Monperus, et al. · International Journal of Chemistry · 2018 · [doi.org/10.5539/ijc.v10n4p68](https://doi.org/10.5539/ijc.v10n4p68)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin]]<span class="hmi-ref-meta">Elbagory M, Abd El-Aziz MA, Omara AED, Abou Fayssal S, and Kumar V · Horticulturae · 2025 · [doi.org/10.3390/horticulturae11020216](https://doi.org/10.3390/horticulturae11020216)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|Elbagory et al. 2025]]. *Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin*, Horticulturae | 2025 | Peer-reviewed | Cd, Cr, Pb, tAs, and Al in two watermelon cultivars (Arka Shyama, Crimson Sweet) grown along the Ganges-Yamuna river basin |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Watermelon, raw/frozen (n=27); detectable concentrations for Cd, Ni, tAs |
| 5 | [[sources/youssao2018-fruit-juices-syrup-benin\|Youssao et al. 2018]]. *Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic*, International Journal of Chemistry | 2018 | Peer-reviewed | BJ/FR Al, tAs, Ba, Be, Cd, Hg, Pb, Sn, Tl, U occurrence in 92 fruit-juice and syrup samples: 85 Benin-produced bottled pineapple juices/cocktails from artisanal and semi-industrial units, 6 French pineapple... (n=92) |
| 6 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 7 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
