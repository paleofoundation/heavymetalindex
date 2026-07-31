---
title: "Eggs"
type: ingredient
commodity: eggs
label: "Eggs"
aliases: [egg]
category: animal-food
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 200]
    p95_ppb: 690
    confidence: medium
    n_studies: 4
    basis: whole-egg-fresh-weight
    last_reviewed: 2026-06-11
  Cd:
    status: populated
    typical_ppb: [0, 37]
    p95_ppb: 67
    confidence: low
    n_studies: 4
    basis: whole-egg-fresh-weight
    last_reviewed: 2026-06-11
  iAs:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: null
    confidence: low
    n_studies: 1
    basis: whole-egg-fresh-weight
    speciation_note: directly-speciated iAs; the only direct fresh-egg measurement is cfs2012, where fresh chicken egg was a non-detect below the HK HG-ICP-MS LOD of 3 µg/kg, so the cell is left-censored at <3 µg/kg; salted and lime-preserved eggs to 93 µg/kg are a culturally-processed-egg stratum, not fresh whole egg, and are stratified out of the central estimate; fera2015 reports no eggs-group iAs value (its <0.012 mg/kg is the generic UK-TDS iAs LoQ applied uniformly across food groups, not an egg measurement) and is dropped as a grounding citation; chen2025 and dai2024 iAs are modeled from tAs via EFSA/WHO conversion factors, not direct measurements, so they inform context only
    p95_note: no fresh-whole-egg iAs tail is defensibly computable; the single direct-speciation source resolves fresh egg below the reporting limit, so a 95th-percentile value above the LOD would have to be imported from the processed-egg stratum and is not published
    last_reviewed: 2026-06-23
  tAs:
    status: populated
    typical_ppb: [0, 230]
    p95_ppb: 230
    confidence: low
    n_studies: 5
    basis: whole-egg-fresh-weight
    p95_note: highest grounded egg-fraction tAs value (Islam2015 chicken egg, whole egg); prior 600 was Ezike2024 max across 36 pooled poultry-product samples (muscle/gizzard/yolk/albumen), not an egg-fraction value
    last_reviewed: 2026-06-11
  tHg:
    status: populated
    typical_ppb: [0, 43]
    p95_ppb: 266
    confidence: low
    n_studies: 4
    basis: whole-egg-fresh-weight
    last_reviewed: 2026-06-11
  Ni:
    status: populated
    typical_ppb: [0, 63]
    p95_ppb: 1300
    confidence: low
    n_studies: 2
    basis: whole-egg-fresh-weight
    last_reviewed: 2026-06-11
  Al:
    status: populated
    typical_ppb: [0, 1773]
    p95_ppb: 2689
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 140]
    p95_ppb: 140
    confidence: low
    n_studies: 3
    basis: whole-egg-fresh-weight
    species_note: total-Cr-only; no Cr-VI speciation in corpus
    p95_note: anchored to Li2026 whole-egg total Cr (140 µg/kg); prior 190 was Mahbub2018 egg-albumen, the same feed-contaminated cohort whose Pb (3340 µg/kg) is stratified out, so stratified out here for consistency
    last_reviewed: 2026-06-11
  Sn:
    status: populated
    typical_ppb: [0, 35.5]
    p95_ppb: 47.2
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
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
updated: 2026-06-23
sources: 35
---

# Eggs

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 8/10 HMTc analytes, total n=26 | — |
| D2 Regional coverage | OK | 27 jurisdictions, top CN 38% | — |
| D3 Anthropogenic evidence | GAP | 3 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 3 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd THIN, iAs THIN, tAs THIN, tHg THIN, Ni THIN, Al THIN, Cr THIN, Sn THIN | Cd: THIN; iAs: needs 2 more study(ies); tAs: THIN; tHg: THIN; Ni: needs 1 more study(ies); Al: needs 1 more study(ies); Cr: THIN; Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 68 claims checked, 68 supported; 17 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming eggs: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 9 single, 0 unpaired | Cd: THIN; iAs: THIN, needs 2 more study(ies); tAs: THIN; tHg: THIN; Ni: THIN, needs 1 more study(ies); Al: THIN, needs 1 more study(ies); Cr: THIN; Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Eggs are a low-to-negligible heavy metal risk food under normal commercial production conditions. The mechanism by which metals enter eggs is dietary transfer from the laying hen's feed: cadmium, lead, arsenic, and other metals ingested by the hen distribute between excretion, tissue accumulation (liver and kidney are the primary accumulation organs), and limited transfer to the egg. Transfer rates from feed to egg for cadmium and lead are very low, typically below 1% on a weight basis, which means that even hens consuming moderately contaminated feed produce eggs with very low metal concentrations. Mercury follows a somewhat different pathway and accumulates in hen tissues more readily at high exposure, but under commercial feed conditions mercury exposure is minimal.

The FDA TDS FY2018-FY2020 data for hard-boiled eggs (n=27 composites, TDS Food 37) reports every measured toxic-metal analyte below its reporting limit across all 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]] (reporting limits of 4 µg/kg for lead, 1 µg/kg for cadmium, 3 µg/kg for total arsenic, 1 µg/kg for total mercury, 40 µg/kg for nickel, 50 µg/kg for chromium, and 1 µg/kg for uranium). This is a strong low-risk signal for the US market basket, but it is a left-censored result rather than a measured zero: the primary occurrence literature detects all of these metals in eggs at low but non-zero concentrations, with elevated tails in free-range, contaminated-environment, and feed-contaminated production. The corrected per-analyte values and their censoring treatment are set out in the Synthesis basis section below. This censored-clean US result is consistent with the expectation for eggs from commercial laying hens on formulated feeds under normal production conditions.

The exception to this low-risk characterization is environmental contamination at extreme levels. [[sources/aendo2024-thailand-egg-metals-goldmine]] documented elevated Pb, Cd, and other metals in eggs from poultry farms near an active gold mine in northern Thailand, demonstrating that when hens are exposed to highly contaminated feed or free-range environments adjacent to industrial contamination sources, metals transfer to the egg at detectable and toxicologically relevant concentrations. This exception underscores that the low-risk characterization applies to commercial production systems with controlled feed, not to backyard or free-range production in contaminated environments.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–200 | medium | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/islam2015-bangladesh-foods-heavy-metals\|2]], [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|3]] |
| Cd | n=4 | 0–37 | low | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/islam2015-bangladesh-foods-heavy-metals\|2]], [[sources/ezike2024-nigerian-poultry-pte\|3]] |
| iAs | n=1 | 0–3 | low | [[sources/cfs2012-hktds-inorganic-arsenic\|1]] |
| tAs | n=5 | 0–230 | low | [[sources/abedi2023-arsenic-mercury-hen-eggs-iran\|1]], [[sources/islam2015-bangladesh-foods-heavy-metals\|2]], [[sources/ezike2024-nigerian-poultry-pte\|3]] |
| tHg | n=4 | 0–43 | low | [[sources/abedi2023-arsenic-mercury-hen-eggs-iran\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|3]] |
| Ni | n=2 | 0–63 | low | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/islam2015-bangladesh-foods-heavy-metals\|2]] |
| Al | n=2 | 0–1773 | low | [[sources/kim2022-bsf-larvae-oil-eggs-heavy-metals\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Cr | n=3 | 0–140 | low | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|1]], [[sources/kurniawati2021-jakarta-staple-foods-naa\|2]], [[sources/mahbub2018-poultry-feed-meat-eggs-metals\|3]] |
| Sn | n=1 | 0–35.5 | medium | [[sources/fera2015-uk-tds-metals\|1]] |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total arsenic, total mercury, nickel, and chromium cells were resynthesized on 2026-06-11 on a whole-egg fresh-weight basis, the form in which eggs enter the ingredient supply chain. Most primary occurrence literature reports whole-egg or separated yolk/albumen concentrations in mg/kg wet weight, which converts directly to ppb. Total arsenic and inorganic arsenic are kept as distinct analytes and are never derived from one another by a fixed ratio; only directly speciated measurements populate the iAs cell, which was resynthesized on 2026-06-23 (see below). Total mercury and methylmercury are likewise kept distinct.

The earlier profile reported lead, cadmium, total arsenic, total mercury, nickel, chromium, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for hard-boiled eggs (TDS Food 37, n=27), in which every sample of every analyte fell below the reporting limit and the reported zeros were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The reporting limits were 4 µg/kg for lead, 1 µg/kg for cadmium, 3 µg/kg for total arsenic, 1 µg/kg for total mercury, 40 µg/kg for nickel, 50 µg/kg for chromium, and 1 µg/kg for uranium. Values below the analytical limit are treated as left-censored, not as measured zeros: the honest low end of each cell is written as a less-than bound at the FDA reporting limit, and the detected distributions are taken from the primary literature, in which all six resynthesized metals are low but non-zero, with right tails driven by free-range, contaminated-environment, and feed-contaminated production.

The lead distribution rests on whole-egg Chinese data ([[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining|Li et al. 2026]], whole-egg mean 12 µg/kg, range 5.4 to 18 µg/kg across nine areas), Bangladeshi market eggs ([[sources/islam2015-bangladesh-foods-heavy-metals|Islam et al. 2015]], chicken egg mean 200 µg/kg, duck egg 100 µg/kg), and Italian retail eggs ([[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs|Guerrini et al. 2024]], supermarket yolk 186 µg/kg, supermarket albumen 688 µg/kg by edible fraction), with the 95th-percentile anchor set by the Guerrini supermarket albumen value. Bangladeshi smallholder rinsings ([[sources/rokanuzzaman2022-bangladesh-eggs-metals|Rokanuzzaman et al. 2022]]) corroborate the low-to-moderate central range (brown-layer egg content 44 µg/kg). The cadmium distribution rests on the same Li, Islam, and Rokanuzzaman whole-egg data plus Nigerian poultry products ([[sources/ezike2024-nigerian-poultry-pte|Cosmas et al. 2024]], albumen Cd up to 67.2 µg/kg, which sets the 95th-percentile anchor); Li reports whole-egg cadmium at 1.5 to 2.3 µg/kg near the FDA floor, Islam chicken egg at 37 µg/kg. Total arsenic rests on a very clean Iranian commercial cohort ([[sources/abedi2023-arsenic-mercury-hen-eggs-iran|Abedi et al. 2023]], whole-egg mean 0.79 µg/kg) and Li (6.0 to 19 µg/kg) at the low end and Islam chicken egg (230 µg/kg) at the upper-typical end, which also sets the 95th-percentile anchor because it is the highest egg-fraction total-arsenic value in the corpus. The Nigerian poultry-products study ([[sources/ezike2024-nigerian-poultry-pte|Cosmas et al. 2024]]) reports a total-arsenic range of 0.0403 to 0.5970 mg/kg, but the 0.5970 mg/kg (597 µg/kg) maximum is the highest value across all 36 pooled poultry-product samples (muscle, gizzard, yolk, and albumen), not an egg-fraction value; the only egg-fraction value the study isolates is yolk at 0.1213 mg/kg (121 µg/kg). The earlier profile anchored the 95th percentile to the 597 µg/kg pooled-poultry maximum, which over-stated the egg-fraction tail; the cell is re-anchored to the highest grounded egg-fraction value (230 µg/kg) and the poultry-product maximum is treated as a non-egg-fraction proxy only.

Total mercury rests on Abedi (whole-egg mean 0.18 µg/kg) and Chongqing total-diet eggs ([[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi|Chen et al. 2025]], eggs 1.2 to 3.1 µg/kg) at the clean floor, a Jakarta market value ([[sources/kurniawati2021-jakarta-staple-foods-naa|Kurniawati et al. 2021]], egg 43 µg/kg by neutron activation) at the upper-typical end, and a highly variable Italian supermarket albumen ([[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs|Guerrini et al. 2024]], albumen mean 266 µg/kg, one supermarket sample to 1077 µg/kg) at the 95th percentile. Nickel rests on the clean whole-egg Li distribution (15 to 63 µg/kg, the only corpus distribution that resolves below the FDA 40 µg/kg reporting limit) for the central estimate, with Islam Bangladeshi chicken egg (1300 µg/kg) setting a wide, low-confidence 95th-percentile spread; the Islam dataset reports a uniformly elevated nickel baseline across all commodities and is read as a high-analytical-baseline anchor rather than a typical value. Chromium rests on Li whole-egg total chromium (53 to 140 µg/kg) and a low Jakarta value ([[sources/kurniawati2021-jakarta-staple-foods-naa|Kurniawati et al. 2021]], egg 20 µg/kg), with the 95th percentile anchored to the Li whole-egg upper bound (140 µg/kg). The Bangladeshi egg-albumen value ([[sources/mahbub2018-poultry-feed-meat-eggs-metals|Mahbub et al. 2018]], albumen total chromium to 190 µg/kg) comes from the same feed-loaded albumen cohort whose lead (3340 µg/kg) is stratified out of the lead central estimate as feed-contaminated; for consistency that cohort's chromium is treated the same way and is not used to set the chromium 95th percentile. The earlier profile anchored the chromium 95th percentile to that Mahbub albumen value while excluding the same cohort's lead, an inconsistency this pass corrects by stratifying both.

Inorganic arsenic was resynthesized on 2026-06-23 off its earlier all-zero artifact. Only directly speciated iAs measurements populate this cell; values modeled from total arsenic by a fixed conversion factor are treated as context, not as occurrence anchors. One corpus source speciates iAs in a fresh whole egg directly: the First Hong Kong Total Diet Study ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]), which measured iAs by hydride-generation ICP-MS (LOD 3 µg/kg) and reports fresh chicken egg below the detection limit. Its "eggs and their products" group mean of 23 µg/kg (range ND to 93) is driven by salted egg (mean 58, range 31 to 93) and lime-preserved egg (mean 10, range 3 to 21), which are culturally processed eggs rather than fresh whole egg. The fresh-whole-egg cell is therefore left-censored at the cfs2012 detection limit: the low bound is written as numeric zero and the upper-typical bound as the 3 µg/kg LOD, because the only direct fresh-egg measurement resolves below it. The UK Total Diet Study ([[sources/fera2015-uk-tds-metals|Baxter et al. 2015]]) is not used to anchor this cell: its less-than 0.012 mg/kg eggs-group figure is the generic UK-TDS iAs limit of quantification printed uniformly across food groups, not an egg-specific measurement, so it cannot ground an egg iAs upper bound. No 95th-percentile value is published, because a fresh-egg tail above the detection limit cannot be computed from non-detect data without importing the processed-egg stratum; the salted and lime-preserved egg values to 93 µg/kg are recorded as a processed-egg stratum and are not folded into the fresh-egg cell. The Chongqing dietary-arsenic studies ([[sources/dai2024-chongqing-dietary-arsenic-exposure|Dai et al. 2024]], eggs total-arsenic mean 16 to 19 µg/kg, P95 68 µg/kg, n=530; [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi|Chen et al. 2025]]) measure total arsenic only and estimate iAs through EFSA/WHO conversion ratios; their egg iAs figures are modeled and are used here only to corroborate that the directly speciated fresh-egg distribution sits low, not to set the published bounds.

Chromium is reported as total chromium at low confidence; no egg hexavalent-chromium measurement exists in the corpus and no Cr-VI fraction is inferred. Uranium is recorded as a reviewed data gap: the FDA Total Diet Study egg composite reports uranium fully below its 1 µg/kg reporting limit, and no non-FDA egg-uranium occurrence value with an extractable number is present in the routed corpus, so no distribution is published.

Documented mining, industrial, and feed-contaminated outliers are stratified separately and do not set the central estimates above. Pakistani feed-contaminated poultry ([[sources/iqbal2023-poultry-feed-pakistan|Iqbal et al. 2023]], whole-egg lead mean 8956 µg/kg and chromium 1952 µg/kg, driven by Farm E/F feed exceedances) and Bangladeshi feed-loaded eggs ([[sources/mahbub2018-poultry-feed-meat-eggs-metals|Mahbub et al. 2018]], albumen lead to 3340 µg/kg) represent contaminated-feed strata. Duck eggs from mercury-mining areas in Guizhou ([[sources/guo2024-duck-eggs-hg-mining-china|Guo et al. 2024]], yolk chromium 410 µg/kg dry weight, lead 80 µg/kg dry weight) and goldmine-adjacent poultry in Thailand ([[sources/aendo2024-thailand-egg-metals-goldmine|Aendo et al. 2024]]) document the contaminated-environment ceiling that the low-risk commercial characterization explicitly excludes. These strata are reported in prose and are not folded into the global percentiles.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 37, "Eggs, hard-boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Eggs, hard-boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 hard-boiled egg dataset (n=27 composites) shows all analytes at zero [[sources/fda2022-tds-elements-fy2018-fy2020]], representing the US commercial market basket under standard production conditions. This is the baseline: eggs from hens on commercial formulated feed in managed production systems in a low-metal-contamination agricultural region.

[[sources/aendo2024-thailand-egg-metals-goldmine]] provides the contrasting data point: eggs from poultry farms adjacent to a gold mine in northern Thailand showed elevated concentrations of Pb, Cd, and other metals in egg tissue, with concentrations in yolk substantially higher than in egg white for most metals studied. This source documents that free-range or backyard hens with soil contact in contaminated environments can produce eggs with toxicologically relevant metal concentrations, particularly for populations with high egg consumption frequency.

The FSA/Fera FS102048 survey provides an additional data point for UK-market eggs awaiting structured table parsing [[sources/fsa2016-infant-food-formula-metals-survey]]. The iAs and tAs data point attributed to arsenic exposure assessment in Chongqing, China [[sources/dai2024-chongqing-dietary-arsenic-exposure]] contributes arsenic occurrence context for eggs in the Chinese dietary assessment literature, pending full structured integration.

## Processing effects

Cooking method affects the distribution of metals within the egg but does not reduce overall metal concentrations. Hard boiling, scrambling, frying, and poaching all retain the metal content of the whole egg or the specific fraction used (white only, yolk only). The egg yolk carries higher concentrations of fat-soluble compounds and metal-binding proteins than the egg white; for metals such as Cd and Pb that bind to metalloproteins (metallothionein in particular), the yolk fraction carries a higher per-gram metal burden than the white fraction under conditions of elevated exposure. Under near-zero metal conditions (as in the US TDS dataset), this partitioning is moot.

Hard-boiling does not leach meaningful amounts of Cd or Pb into the cooking water, since metals in egg tissue are protein-bound rather than free in solution. Egg processing steps such as pasteurization also do not affect metal concentrations.

## Ingredient-derivative risk

Eggs are used as ingredients in a wide range of processed foods, contributing binding, emulsification, and leavening functions. The metal contribution of the egg fraction to a composite product (cake, pasta, mayonnaise, custard) is proportional to its weight fraction multiplied by its metal concentration. Under normal commercial production conditions where TDS egg data shows zero for all analytes [[sources/fda2022-tds-elements-fy2018-fy2020]], the egg fraction's metal contribution to composite foods is effectively zero and is not a meaningful source of heavy metal exposure in those products.

Processed egg derivatives including dried whole egg powder, dried egg white, and dried egg yolk concentrate the protein and mineral content of the fresh egg by removing water. On a dry-weight basis, any metals present in the fresh egg would be concentrated proportionally in the dried form. Under normal commercial egg sourcing where fresh egg metals are near zero, this concentration effect is of no practical consequence.

## Mitigation options

### Sourcing levers

Sourcing eggs from commercial laying flocks on formulated, low-metal feed is the primary mitigation lever. Commercial egg production with centralized feed formulation and quality control inherently limits the pathway for metals to enter eggs. Avoiding eggs from free-range or backyard flocks in regions with known soil contamination from mining, smelting, or industrial land use is the relevant risk mitigation for populations or procurement scenarios where such eggs might be used.

### Agronomic levers

_No egg-specific agronomic lever applies in the traditional sense. Feed quality control at the laying hen farm (using low-Cd, low-Pb feed ingredients) is the practical equivalent of an agronomic lever for this animal product._

### Processing levers

No processing step reduces heavy metals in eggs at the concentrations present in commercially produced eggs under normal conditions. If eggs from a contaminated-environment source were identified, no practical post-hoc processing intervention removes the metal from egg tissue.

### Formulation levers

For food products using eggs as an ingredient in contexts where maximum metal control is a priority (for example, infant or toddler foods), specifying commercially produced eggs from certified low-contamination production systems is the formulation-level implementation of the sourcing lever. Substitution of egg with plant-based egg alternatives eliminates the egg-origin metal pathway but introduces different metal risk profiles from the substitute ingredient.

### Testing and QC levers

Under normal commercial sourcing conditions, heavy metal testing of eggs is low priority. Testing is warranted when eggs are sourced from non-standard production systems (backyard, free-range in contaminated areas) or when procurement includes imports from regions where poultry environmental contamination has been documented. [[sources/aendo2024-thailand-egg-metals-goldmine]] provides the scientific basis for requiring testing in mining-adjacent production contexts.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in eggs is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in eggs is 0.10 mg/kg (100 ppb) on a fresh weight basis, and for cadmium in eggs it is 0.050 mg/kg (50 ppb) fresh weight. These limits reflect the historical possibility of elevated metals in eggs from free-range hens on contaminated land, rather than a risk specific to commercial production. The US TDS all-zero result for hard-boiled eggs [[sources/fda2022-tds-elements-fy2018-fy2020]] is consistent with the EU limits being non-binding in practice for commercially produced US market eggs. No US federal maximum level for lead or cadmium in eggs has been finalized as of 2026. Codex Alimentarius (CXS 193-1995 and revisions) sets a general lead limit of 0.10 mg/kg for eggs, consistent with the EU limit.

<!-- BEGIN: hmi-page-references -->
## References

The 17 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
3. Aendo P, Mingkhwan R, Senachai K, Pinniam N, Sonthong K, and Tulayakul P (2024). *Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand*. Environmental Geochemistry and Health. [https://doi.org/10.1007/s10653-024-02215-9](https://doi.org/10.1007/s10653-024-02215-9). Peer-reviewed, A-tier. [[sources/aendo2024-thailand-egg-metals-goldmine|Source record]]
4. Li X, An Y, and Wang Z (2026). *Heavy metal concentrations in Chinese chicken eggs: insights from comparative study of urban and mining areas*. PeerJ. [https://doi.org/10.7717/peerj.20896](https://doi.org/10.7717/peerj.20896). Peer-reviewed, A-tier. [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining|Source record]]
5. Islam MS, Ahmed MK, Habibullah-Al-Mamun M, and Raknuzzaman M (2015). *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*. Ecotoxicology and Environmental Safety. [https://doi.org/10.1016/j.ecoenv.2015.09.022](https://doi.org/10.1016/j.ecoenv.2015.09.022). Peer-reviewed, B-tier. [[sources/islam2015-bangladesh-foods-heavy-metals|Source record]]
6. Guerrini A, Roncada P, Al-Qudah KM, Isani G, Pacicco F, Peloso M, et al. (2024). *Content of Toxic Elements (Arsenic, Cadmium, Mercury, Lead) in Eggs from an Ethically Managed Laying Hen Farm*. Animals. [https://doi.org/10.3390/ani14071133](https://doi.org/10.3390/ani14071133). Peer-reviewed, A-tier. [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs|Source record]]
7. B. M. Rokanuzzaman, Umme Salma, Nasrin Akter Bristy, Shoumik Kundu, Sayeda Sadia Alam, and Md. Ibrahim Khalil (2022). *Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh*. Saudi Journal of Biomedical Research. [https://doi.org/10.36348/sjbr.2022.v07i04.004](https://doi.org/10.36348/sjbr.2022.v07i04.004). Peer-reviewed, B-tier. [[sources/rokanuzzaman2022-bangladesh-eggs-metals|Source record]]
8. Ezike Chidiebere Cosmas, Ekere Nwachukwu Romanus, Abugu Hillary Onyeka, Ihedioha Janefrances Ngozi, Odum Paul Ugochukwu, Nwoke Stanley Ugochukwu, et al. (2024). *An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products*. International Journal of Agricultural Invention. [https://doi.org/10.46492/ijai/2024.9.1.23](https://doi.org/10.46492/ijai/2024.9.1.23). Peer-reviewed, B-tier. [[sources/ezike2024-nigerian-poultry-pte|Source record]]
9. Abedi A, Hoseini H, Mohammadi-Nasrabadi F, Rostami N, and Esfarjani F (2023). *Consumer health risk assessment of Arsenic and Mercury in hen eggs through Monte Carlo simulations*. BMC Public Health. [https://doi.org/10.1186/s12889-023-16223-4](https://doi.org/10.1186/s12889-023-16223-4). Peer-reviewed, A-tier. [[sources/abedi2023-arsenic-mercury-hen-eggs-iran|Source record]]
10. Chen J, Chen J, Li M, Feng P, Qin M, Chen T, et al. (2025). *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*. Scientific Reports 15:2229. [https://doi.org/10.1038/s41598-024-83299-2](https://doi.org/10.1038/s41598-024-83299-2). Peer-reviewed, A-tier. [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi|Source record]]
11. Kurniawati S, Damastuti E, Adventini N, Syahfitri WYN, Kusmartini I, Lestiani DD, et al. (2021). *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*. AIP Conference Proceedings (4th International Seminar on Chemistry). [https://doi.org/10.1063/5.0053376](https://doi.org/10.1063/5.0053376). Peer-reviewed, B-tier. [[sources/kurniawati2021-jakarta-staple-foods-naa|Source record]]
12. Mahbub M, Sultana S, Rahman M, and Akhter S (2018). *Detection of heavy metals in poultry feed, meat and eggs*. Asian-Australasian Journal of Food Safety and Security. [https://doi.org/10.3329/aajfss.v2i1.55893](https://doi.org/10.3329/aajfss.v2i1.55893). Peer-reviewed, B-tier. [[sources/mahbub2018-poultry-feed-meat-eggs-metals|Source record]]
13. Centre for Food Safety FEHD HKSAR (2012). *The First Hong Kong Total Diet Study: Inorganic Arsenic*. Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region. [www.cfs.gov.hk](https://www.cfs.gov.hk/english/programme/programme_rdss/programme_rdss_tds_report.html). Government report, A-tier. [[sources/cfs2012-hktds-inorganic-arsenic|Source record]]
14. Baxter M and Brereton N (2015). *Total Diet Study of metals and other elements in food*. Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081. [www.food.gov.uk](https://www.food.gov.uk/research/total-diet-study). Government report, A-tier. [[sources/fera2015-uk-tds-metals|Source record]]
15. Dai Xinghui, Li Mintao, Chen Jiahui, Feng Ping, Chen Jingrong, Zhao Jian, et al. (2024). *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*. Chinese Journal of Public Health. [https://doi.org/10.12182/20241160509](https://doi.org/10.12182/20241160509). Peer-reviewed, A-tier. [[sources/dai2024-chongqing-dietary-arsenic-exposure|Source record]]
16. Iqbal H, Shafique MA, and Khan MJ (2023). *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*. Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495. [https://doi.org/10.36348/sjmps.2023.v09i07.019](https://doi.org/10.36348/sjmps.2023.v09i07.019). Peer-reviewed, A-tier. [[sources/iqbal2023-poultry-feed-pakistan|Source record]]
17. Guo Y, Li Y, Wang Q, Zhang H, Liu J, and Feng X (2024). *Heavy metal contamination in duck eggs near mercury mining areas in southwest China*. Frontiers in Public Health. [https://doi.org/10.3389/fpubh.2024.1352043](https://doi.org/10.3389/fpubh.2024.1352043). Peer-reviewed, A-tier. [[sources/guo2024-duck-eggs-hg-mining-china|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining\|Li et al. 2026]]. *Heavy metal concentrations in Chinese chicken eggs: insights from comparative study of urban and mining areas*, PeerJ | 2026 | Peer-reviewed | Cr, tAs, Cd, Pb, and Ni in 90 chicken eggs from non-mining cities and three Chinese mining areas (Wuchuan and Danzhai Hg mines, Emin coal mine) by ICP-MS; free-range mining-area eggs had higher HI than commercial eggs but all values below China GB 2762-2022 |
| 2 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | Eggs as one of nine food categories contributing to cumulative Pb, Cd, iAs, and MeHg neurotoxicity and nephrotoxicity exposure in a Chongqing cohort of 969 participants across four age strata |
| 3 | [[sources/aendo2024-thailand-egg-metals-goldmine\|Aendo et al. 2024]]. *Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | TH tHg, Pb, Cd occurrence in 23 poultry farms (6 laying hen, 2 laying duck, 3 free-grazing duck farms in contaminated area <25 km... (n=23) |
| 4 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 5 | [[sources/ezike2024-nigerian-poultry-pte\|Cosmas et al. 2024]]. *An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products*, International Journal of Agricultural Invention | 2024 | Peer-reviewed | NG tAs, Pb, Cd occurrence in Broiler muscle, gizzard, yolk, and albumen samples from four poultry farms in Nigeria (n=36) |
| 6 | [[sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs\|Guerrini et al. 2024]]. *Content of Toxic Elements (Arsenic, Cadmium, Mercury, Lead) in Eggs from an Ethically Managed Laying Hen Farm*, Animals | 2024 | Peer-reviewed | tAs, Cd, tHg, and Pb separately in yolk, albumen, and eggshell of 141 rural Italian eggs (5 hen genotypes) and 60 commercial organic eggs by ICP-MS; supermarket eggs had higher Pb (yolk 0.186 vs 0.089 mg/kg), rural eggs higher tAs in albumen and shell |
| 7 | [[sources/guo2024-duck-eggs-hg-mining-china\|Guo et al. 2024]]. *Heavy metal contamination in duck eggs near mercury mining areas in southwest China*, Frontiers in Public Health | 2024 | Peer-reviewed | Pb and Cr in 20 paired duck eggs from the Wuchuan Hg mining area vs Anshun background area, southwestern China, by ICP-MS; mining-area yolks consistently higher than whites and higher than background, with non-negligible child health risk |
| 8 | [[sources/guo2024-heavy-metals-duck-eggs-mercury-mine-china\|Guo et al. 2024]]. *Heavy metal contamination in duck eggs from a mercury mining area, southwestern China*, Frontiers in Public Health | 2024 | Peer-reviewed | CN Cr, Zn, Sr, Ba, Pb occurrence in 20 free-range duck eggs total: 10 from Laohugou, Wuchuan County, Zunyi (28°60′ N, 108°01′ E), Guizhou Province (Wuchuan... (n=20) |
| 9 | [[sources/abedi2023-arsenic-mercury-hen-eggs-iran\|Abedi et al. 2023]]. *Consumer health risk assessment of Arsenic and Mercury in hen eggs through Monte Carlo simulations*, BMC Public Health | 2023 | Peer-reviewed | IR tAs, tHg occurrence in 84 hen eggs from 21 major commercial brands purchased from 30 supermarkets in five districts of Tehran, Iran,... (n=84) |
| 10 | [[sources/aljohani2023-heavy-metal-toxicity-poultry\|Aljohani 2023]]. *Heavy metal toxicity in poultry: a comprehensive review*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | Worldwide narrative review of Pb, Cd, tAs, and tHg in poultry eggs and tissues drawing from primary studies in 12 countries (Turkey, Pakistan, China, Saudi Arabia, etc.); cross-country reference for egg-tissue metal occurrence and histopathological effects |
| 11 | [[sources/bazzaz2023-poultry-products-erbil-heavy-metals\|Bazzaz et al. 2023]]. *Determination of some heavy metals resides in different types of poultry production*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cu, tAs, Pb occurrence in Erbil-market poultry products, dry-weight XRF analysis: frozen chicken thigh and breast muscle from Brazilian and Turkish imports plus... |
| 12 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 13 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 14 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 15 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 16 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Eggs, hard-boiled (n=27); all analytes reported as zero (BDL) |
| 17 | [[sources/kim2022-bsf-larvae-oil-eggs-heavy-metals\|Kim et al. 2022]]. *Dietary effects of black soldier fly larvae oil on laying hen performance, egg quality, and egg safety*, Animal Bioscience | 2022 | Peer-reviewed | Al, tAs, Pb, tHg, and Cd in Korean laying-hen eggs across 0–8% black soldier fly larvae oil inclusion replacing soybean oil; all metals below Korean permissible limits — feed-substitution safety evidence |
| 18 | [[sources/rokanuzzaman2022-bangladesh-eggs-metals\|Rokanuzzaman et al. 2022]]. *Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh*, Saudi Journal of Biomedical Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Cu, Fe, Zn occurrence in Five egg-content samples and five eggshell samples collected from the Jahangirnagar University area of Savar, Bangladesh, covering indigenous... (n=10) |
| 19 | [[sources/wu2022-selenized-yeast-laying-hens\|al. 2022]]. *Ameliorative effects of selenized yeast on laying hen performance and heavy metal residues in eggs*, Frontiers in Veterinary Science | 2022 | Peer-reviewed | CN Pb, Cd, Hg, Cr occurrence in Laying hens in controlled feeding experiment, China, 12-week study (n=160) |
| 20 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 21 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | Cr and tHg in egg samples from 14 Jakarta staple foods (5 traditional markets) by neutron activation analysis; egg Cr 0.02 mg/kg (lowest of all commodities) and Hg modest relative to crackers and rice |
| 22 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 23 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 24 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 25 | [[sources/mahbub2018-poultry-feed-meat-eggs-metals\|Mahbub et al. 2018]]. *Detection of heavy metals in poultry feed, meat and eggs*, Asian-Australasian Journal of Food Safety and Security | 2018 | Peer-reviewed | BD Cr, Pb, tAs occurrence in Poultry feed, meat, and egg samples from major poultry-producing areas of Bangladesh |
| 26 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 27 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 28 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | UK FERA/FSA TDS occurrence of Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb in the eggs food group composited from 3,312 retail samples across 24 UK locations on an as-consumed basis |
| 29 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 30 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 31 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn, V occurrence in Hong Kong general adult population aged 20-84; 150 TDS food items purchased on 4 occasions (March 2010 to... (n=1800) |
| 32 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | First HKTDS direct iAs speciation occurrence in the eggs food category by hydride generation ICP-MS (LOD 3 µg/kg) among 600 composite samples from 150 food items; eggs as minor contributor relative to rice (45.2% of total iAs exposure) |
| 33 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 34 | [[sources/hc2008-aluminum-food-additives-industry-request\|Health Canada Bureau of 2008]]. *ARCHIVED — Health Canada Requests Information from Industry on the Use of Aluminum-Containing Food Additives*, Health Canada, Food Directorate, Bureau of Chemical Safety | 2008 | Regulation | CA Al concentrations |
| 35 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | 4 sources added; contamination-profile values revised; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 1 source added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d626a623b](https://github.com/paleofoundation/heavymetalindex/commit/d626a623b) | 2026-06-11 | correction | 12 sources added; contamination-profile values revised; 1 section added |
<!-- END: hmi-page-history -->
