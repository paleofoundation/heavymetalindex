---
title: "Winter squash"
type: ingredient
commodity: winter-squash
label: "Winter squash"
aliases: ["Squash, winter, fresh/frozen, boiled", "winter squash"]
category: vegetable
tds_food:
  number: 126
  description: "Squash, winter, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: squash-flesh-wet-weight
    censoring_note: both contributing sources non-detect for the squash/Cucurbita matrix; left-censored at reporting/detection limit (FDA RL 4 µg/kg; Dearing LOD ~10 µg/kg FW)
  Cd:
    status: populated
    typical_ppb: [1.2, 4.0]
    p95_ppb: 4.3
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
    typical_ppb: [0, 6.2]
    p95_ppb: 8.1
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: squash-flesh-wet-weight
    censoring_note: both contributing sources fully non-detect; left-censored at the higher detection floor (Dearing Hg LOD 10 µg/kg FW; FDA RL 1 µg/kg); total mercury, held distinct from methylmercury
  Ni:
    status: populated
    typical_ppb: [0, 168]
    p95_ppb: 254
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: squash-flesh-wet-weight
    speciation: total-Cr-only
    censoring_note: total chromium only, no Cr-VI measurement in corpus; both sources mostly non-detect for the squash matrix; left-censored at reporting/detection limit (FDA RL 50 µg/kg; Dearing 149/153 < LOD)
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
    p95_ppb: 0.8
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
sources: 1
---

# Winter squash

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=14 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 3/10 populated cells declare a basis token | 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 25 claims checked, 25 supported; 3 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming winter-squash: fda2022-tds-elements-fy2018-fy2020, dearing2025-nz-organic-nonorganic-vegetables-cyclone, chiutula2025-wastewater-vegetables-malawi |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 126, "Squash, winter, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Winter squash (Cucurbita maxima and related cucurbit species, including butternut squash, acorn squash, and Hubbard squash) is a lower-risk vegetable category for heavy metal contamination relative to root vegetables and leafy greens, for reasons that are mechanistic rather than incidental. Unlike root vegetables such as carrots, beets, or yams, the edible portion of winter squash develops as an aboveground fruit rather than as an underground storage organ, so direct soil-particle deposition and soil-contact absorption during development are substantially reduced. Cadmium is taken up by the plant root system and translocated upward, but translocation efficiency to fruit tissue in cucurbits is lower than in leafy or root tissues, resulting in Cd concentrations in the edible flesh that are generally well below those observed in leafy greens or root vegetables grown on comparable soils. Lead, whose translocation from root to shoot and fruit is limited in most plant species by chelation and sequestration at the root endodermis, is typically at or near the analytical reporting limit in squash flesh. Nickel and arsenic follow similar patterns of low translocation to cucurbit fruit tissue. The FDA FY2018-FY2020 Total Diet Study confirms this general picture for boiled winter squash sampled from the US retail market, with most analytes at or below detection in the majority of composite samples ([[sources/fda2022-tds-elements-fy2018-fy2020|1]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Cd | n=2 | 1.2–4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–6.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Ni | n=2 | 0–168 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, and total-chromium cells were resynthesized on 2026-06-11 on a squash-flesh wet-weight basis, the basis on which FDA Total Diet Study Food 126 ("Squash, winter, fresh/frozen, boiled") reports and the form in which the commodity enters the supply chain. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total mercury, and total chromium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study composites for boiled winter squash, in which every sample fell below the reporting limit for each of these three metals and the reported below-limit results were pooled as literal zeros: FDA reported all 27 composites below the 4 µg/kg reporting limit for lead, all 27 below the 1 µg/kg reporting limit for total mercury, and all 27 below the 50 µg/kg reporting limit for total chromium ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis retains a numeric floor of zero but reclassifies it as a left-censored bound at the reporting limit rather than a measured zero, lowers confidence from the unsupported "high," and adds a second independent contributor that corroborates the non-detect picture for the squash matrix specifically.

The second contributor is the Hawke's Bay (New Zealand) market-garden survey ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]), which measured these metals by ICP-MS on a fresh-weight basis across 153 composite vegetable samples spanning seventeen genera, including Cucurbita (butternut and grey pumpkin), the winter-squash genus. For lead, that survey detected concentrations above its limit in only 12 of 153 samples, and every lead exceedance and top individual value was attributed to lettuce (*Lactuca sativa*) or parsley (*Petroselinum crispum*); no Cucurbita lead detect is reported, so the squash-genus samples sit within the censored majority (study-wide median 5 µg/kg fresh weight, most samples below the detection limit). The survey therefore corroborates that lead in the squash matrix is low and predominantly non-detect but does not supply a positive squash-specific lead value; the lead cell is held at a left-censored floor with no published positive central or upper-tail figure for the commodity. For total mercury, the survey reported every one of the 153 samples below its 0.01 mg/kg fresh-weight (10 µg/kg) detection limit and excluded mercury from statistical analysis; combined with the fully censored FDA cell, both independent sources return a complete non-detect for total mercury in the squash matrix, and the honest floor is the higher 10 µg/kg detection limit rather than a measured zero. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only at low confidence; no winter-squash hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The FDA cell is fully censored at the 50 µg/kg reporting limit, and the Dearing survey detected total chromium in only 4 of 153 samples (none attributed to Cucurbita), with the four detects reaching a maximum of 0.84 mg/kg fresh weight in unattributed genera. No squash-specific total-chromium detect is available from either source, so the cell is held at a left-censored floor at low confidence. The single Cucurbita-genus chromium signal in the corpus comes from a Malawi wastewater-irrigation study ([[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]]), which reported total chromium up to 4.65 mg/kg in *Cucurbita moschata* stems; that value is a wastewater-irrigated leaf-and-stem tissue measurement rather than an edible-flesh value from clean-market squash and is stratified out of the central estimate, recorded only as a contaminated-irrigation upper stratum below.

The cadmium, total-arsenic, nickel, and uranium cells were not part of this resynthesis pass and retain their prior FDA-anchored values.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Squash, winter, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 1.16 | 1.6 | 4.02 | 4.27 | 4.4 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 168 | 254 | 480 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.77 | 3.9 | in profile |
| tAs | 27 | 0 | 0 | 0 | 6.18 | 8.05 | 17 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Within the winter squash category, variation in heavy metal content is driven primarily by soil conditions at the growing site rather than by varietal differences among cucurbit species. Squash grown on soils with elevated Cd from historical phosphate fertilizer application or naturally elevated parent material can accumulate more Cd in fruit tissue than squash grown on low-Cd soils, though the absolute concentrations remain low relative to root vegetables or cereals on equivalent soils. In the FDA FY2018-FY2020 Total Diet Study, Cd in winter squash samples ranged from 0 to 4.4 ppb (p50 approximately 1.6 ppb, n=27), and total arsenic ranged from 0 to 17 ppb (p50 approximately 0 ppb, with the upper tail driven by individual composites) ([[sources/fda2022-tds-elements-fy2018-fy2020|1]]). These distributions reflect mixed US growing-region origins typical of retail composite sampling. Nickel showed the widest distribution among detectable analytes in that dataset, ranging from 0 to 480 ppb with a p90 of 168 ppb, suggesting that Ni in squash is episodic and origin-dependent. Variety-level data for Cd across butternut, acorn, and Hubbard types are not resolved in the current corpus.

The New Zealand Hawke's Bay market-garden survey provides a second clean-market reference for the squash genus on a fresh-weight basis ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]). In that 153-sample dataset, total mercury was below the 10 µg/kg detection limit in every sample, lead was detectable in only 12 of 153 samples (with all exceedances in lettuce and parsley rather than Cucurbita), and total chromium was detectable in only 4 of 153 samples; the Cucurbita samples carried no reported lead or chromium detect, placing the squash genus within the non-detect majority for all three of these metals.

A contaminated-irrigation upper stratum sits well above these clean-market distributions and is held separate from the central estimate. A Malawi study of wastewater-effluent-irrigated peri-urban plots reported total chromium up to 4.65 mg/kg in *Cucurbita moschata* stems, with chromium exceeding the 2.3 mg/kg threshold in a majority of vegetable samples ([[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]]). That value is a leaf-and-stem tissue measurement from plants irrigated with treated sewage effluent, not an edible-flesh value from clean-market squash, and it should not be read as a baseline for the commodity; it documents the upper-bound risk where squash is grown on wastewater-irrigated land near point sources.

## Processing effects

Common culinary preparations for winter squash, including roasting, steaming, boiling, and pureeing, do not remove or materially reduce heavy metal concentrations in the edible flesh. Boiling in water leaches some water-soluble metals into the cooking water, but the magnitude of this leaching effect for low-baseline vegetables is small and not well characterized in the corpus for this specific commodity. The thick outer rind of winter squash is not consumed and is removed before or after cooking; because the rind may accumulate soil-deposited metals more than the inner flesh, its removal provides some incidental reduction in surface contamination. Freezing and commercial processing into purees or soups do not alter metal concentrations relative to the fresh commodity. Canning adds the potential for Sn introduction from can liner erosion, though this is relevant primarily for tin-plated cans and is a process-contact consideration rather than an agricultural one.

## Ingredient-derivative risk

Winter squash pureed for use in soups, baby food pouches, or baked goods carries the same metal profile as fresh squash. Concentration effects from reduction cooking (reducing a large volume of puree to a thick paste) can elevate per-gram metal concentrations proportionally to the degree of water removal, but because baseline concentrations are low, the absolute values in concentrated derivatives are unlikely to approach regulatory limits. Squash incorporated into mixed vegetable purees for infant foods contributes its low baseline metal profile to the blended product, making it a diluting ingredient relative to higher-risk vegetables in the same formulation.

## Mitigation options

### Sourcing levers

Sourcing from growers with documented soil-screening programs for Cd and Pb provides assurance for products where this commodity is a significant ingredient. Given the generally low baseline contamination of winter squash, sourcing levers are of lower priority here than for higher-accumulation commodities such as leafy greens or root vegetables. Country-of-origin or regional provenance documentation supports traceability for compliance and quality programs.

### Agronomic levers

Soil pH management reduces Cd bioavailability to plants; because winter squash is not a high-Cd-accumulating crop, this lever matters primarily in unusual soil situations (former industrial land, high-phosphate-fertilized sites). _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling and removing the outer rind before consumption eliminates any surface-deposited metals from soil contact or spray drift. Boiling with discard of cooking water provides marginal leaching of water-soluble metals, though the quantitative benefit for this low-baseline commodity is not established in the corpus.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

For finished-product applications where winter squash is a primary ingredient, lot-level testing provides compliance documentation against applicable vegetable limits. Given low baseline concentrations, surveillance testing at standard commercial frequencies is appropriate rather than elevated lot-level frequencies.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation 2023/915 sets maximum levels for vegetables in the fresh, frozen, or dried state. For vegetables generally, the Pb ML is 0.10 mg/kg (100 ppb) on a wet-weight basis. The Cd ML for vegetables other than leafy vegetables, fresh herbs, and fungi is 0.050 mg/kg (50 ppb) wet weight; winter squash falls within this general vegetable category. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]] for scope and matrix definitions. Codex STAN 193-1995 sets a Cd ML of 0.050 mg/kg for vegetables (fresh weight), consistent with the EU value; see [[regulations/codex-cadmium-mls]]. The US FDA does not maintain a specific action level for Cd or Pb in vegetables outside the Closer to Zero baby-food context; winter squash in pureed infant food applications is subject to the FDA's draft and final guidance values applicable to vegetable-based baby foods rather than to fresh vegetable limits.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Dearing C, Ye Z, and Robertshaw G (2025). *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*. F1000Research. [https://doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1). Peer-reviewed, B-tier. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Source record]]
3. Chiutula C, Mtewa AG, Abraham A, Mvula RLS, Maluwa A, Eregno FE, et al. (2025). *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*. International Journal of Environmental Research and Public Health. [https://doi.org/10.3390/ijerph22111614](https://doi.org/10.3390/ijerph22111614). Peer-reviewed, A-tier. [[sources/chiutula2025-wastewater-vegetables-malawi|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Squash, winter, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, U, tAs; Pb, tHg, Cr fully below reporting limit (left-censored floors at 4, 1, 50 µg/kg) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
