---
title: "Broccoli"
type: ingredient
commodity: broccoli
label: "Broccoli"
aliases: [broccoli]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 8]
    p95_ppb: 20
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [6.7, 27.6]
    p95_ppb: 37
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 130]
    p95_ppb: 137
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
    typical_ppb: [0, 40]
    p95_ppb: 60
    confidence: low
    n_studies: 3
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
    typical_ppb: [0, 1.7]
    p95_ppb: 2.4
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
sources: 7
---

# Broccoli

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Broccoli is a member of the Brassica oleracea species complex, a plant family that includes some of the most studied moderate-to-high cadmium accumulators among common food crops. Brassica species express high-affinity cadmium transporters (in the ZIP/IRT family) that move Cd from the soil solution into root cells and then upward through the xylem to shoot tissues. Broccoli florets, which are the commercially harvested portion, receive metals translocated from roots and stems, and can accumulate Cd at concentrations meaningfully above those in low-accumulating crops such as corn or potato grown in the same soil. Lead accumulation in broccoli follows a different mechanism: atmospheric deposition of particulate Pb on the broad, rough surface of broccoli florets is a significant uptake route, supplementing the smaller root-absorption pathway. The textured, open floreted head structure of broccoli provides an effective surface area for trapping airborne particulates, making it more susceptible to surface-deposited lead than smooth-surfaced vegetables. Nickel uptake through soil solution is also measurable in brassica species, consistent with the family's generally elevated trace-metal absorption capacity.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|3]] |
| Cd | n=3 | 6.7–27.6 | medium | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]] |
| Ni | n=3 | 0–130 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0–40 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.7 | low | — |

## Synthesis basis and censoring treatment

The FDA Total Diet Study FY2018 to FY2020 reported lead below its 4 ppb reporting limit in all 27 boiled-broccoli composites, total mercury below its 1 ppb reporting limit in all 27, and total chromium below its 50 ppb reporting limit in 26 of 27 composites with a single composite at 300 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). These non-detects were previously coded as literal zeros and pooled, which understated occurrence and produced an indefensible measured-zero profile. They are treated here as left-censored at the reporting limit. Lead and chromium are not absent from the wider fresh-weight literature: the Jiaozuo Chinese-market survey detected vegetable lead at a mean of 0.013 mg/kg (13 ppb) and total chromium at a mean of 0.032 mg/kg (32 ppb) fresh weight, both below the FDA reporting limits ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]), while the New Zealand market-garden survey found brassica lead below the detection limit in most composites and chromium detectable in only 4 of 153 samples ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]).

The synthesized central ranges are lead 0 to 8 ppb, total mercury 0 to 1 ppb, and total chromium 0 to 40 ppb, all fresh weight. Total mercury is retained as a fully censored bound because every commercial fresh-weight dataset places it at or below the reporting limit. The single FDA chromium composite at 300 ppb is reflected in the tail rather than the center, consistent with a lone high market-basket sample. Wastewater-irrigation and mining-adjacent surveys report higher brassica lead and cadmium but are treated as elevated right-tail context and do not drive these central estimates.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 113, "Broccoli, fresh/frozen, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Broccoli, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 3.9 | 84 | in profile |
| Cr | 27 | 0 | 300 | in profile |
| Ni | 27 | 0 | 170 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 4 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in boiled broccoli ranging from 3.9 to 84 ppb (median 11 ppb, n=27), with substantial skew toward low values and occasional high outliers [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 170 ppb (median 58 ppb). Pb, total As, and tHg were predominantly at or below the reporting limit in the TDS dataset. The Chiutula et al. 2025 study found measurably elevated Cd and Pb in brassica vegetables irrigated with wastewater effluent in Malawi [[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]], illustrating that irrigation-water quality is a major determinant of the Cd and Pb range in broccoli beyond the TDS background values. Varieties bred for higher glucosinolate content do not consistently differ from standard varieties in metal accumulation, though this remains understudied. The Codex Alimentarius international Cd maximum level for vegetables (0.05 mg/kg for most vegetables, with some variation) provides a ceiling well above the TDS typical values, including the upper end of the observed range [[sources/codex-cxs-193-1995|Codex 1995]].

## Processing effects

Washing broccoli before cooking removes a substantial fraction of the surface-deposited particulate Pb. Studies on brassica vegetables generally find that surface washing with water reduces externally deposited Pb by 30 to 70 percent, though this estimate comes from leafy vegetable data and the reduction in broccoli florets specifically is not precisely quantified in the current corpus. Boiling, as in the FDA TDS preparation method, results in some leaching of water-soluble metals into the cooking water; blanching and discarding water can further reduce Cd and Ni in the edible cooked product, though the magnitude for broccoli specifically requires additional study. Freezing does not alter metal concentrations. Industrial processing for frozen broccoli (blanching followed by freezing) may reduce surface-deposited Pb through the blanching step but effects on intrinsic (translocated) Cd and Ni are minimal.

## Ingredient-derivative risk

When broccoli is used as a component in baby food purees, soups, or stir-fry mixes, its Cd and Ni contribution is carried into those products in proportion to the broccoli inclusion rate. Broccoli-heavy baby food formulations (single-ingredient broccoli purees or broccoli-dominant blends) represent the highest-exposure scenario for this commodity, particularly for infants consuming multiple servings per day. Broccoli powder or concentrate, used in supplements, green-powder blends, and functional foods, concentrates metals in proportion to the moisture reduction achieved; a 10:1 concentrate will carry approximately ten times the ppb-basis concentration of fresh broccoli. Dehydrated broccoli in snack products follows a similar logic. These derivative forms are not separately profiled in the current corpus but warrant attention when inclusion rates are significant.

## Mitigation options

### Sourcing levers

Broccoli grown in certified low-Cd-soil regions, or with documented soil Cd below 0.3 mg/kg (the threshold below which Cd accumulation in brassica crops tends to remain well within regulatory limits), is the strongest sourcing lever. Avoiding broccoli from fields irrigated with wastewater or receiving Cd-containing phosphate fertilizers reduces background contamination. For surface Pb, sourcing from areas distant from high-traffic roads and industrial facilities reduces atmospheric particulate deposition.

### Agronomic levers

Liming to maintain soil pH above 6.5 reduces Cd bioavailability in the soil solution and thereby reduces plant uptake. Cultivar selection within broccoli has not been developed specifically for low Cd, though variation across varieties exists. Drip irrigation rather than overhead spray reduces deposition of contaminated water onto floret surfaces.

### Processing levers

Pre-harvest: no direct intervention at the field level beyond agronomic levers above. Post-harvest: washing with clean water, particularly with gentle agitation, is the most practical processing lever for surface-deposited Pb. Blanching (brief immersion in boiling water followed by draining) removes a portion of water-soluble Cd and Ni with the blanching water; this step is already standard in frozen-broccoli industrial processing. Discarding blanching water rather than incorporating it into sauces or purees captures the benefit.

### Formulation levers

When broccoli is used alongside lower-metal vegetables in mixed-vegetable products, the overall metal load is diluted in proportion to the broccoli fraction. Substituting lower-Cd vegetables for broccoli in formulations targeting infants or frequent consumers is a formulation-level risk-reduction option.

_No quantified data on formulation dilution effects in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS for Cd and Ni on incoming fresh or frozen broccoli, with documented acceptance criteria, provides the most direct quality control. Given the geographic and growing-season variability evident in the TDS data, a rolling lot-acceptance program is more informative than annual spot checks.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh or frozen broccoli.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Cd in vegetables (excluding leafy vegetables, fresh herbs, and fungi) of 0.050 mg/kg (50 ppb) wet weight; broccoli falls under this limit as a brassica vegetable. For Pb, the EU limit for vegetables is 0.10 mg/kg (100 ppb) wet weight. The Codex Alimentarius [[sources/codex-cxs-193-1995|Codex 1995]] sets a Cd maximum level of 0.05 mg/kg for vegetables, consistent with EU limits. The FDA does not currently impose specific action levels for Cd or Pb in broccoli for general consumers. Under FDA Closer to Zero [[regulations/fda-closer-to-zero]], action levels for Pb in foods for young children are being developed across vegetable categories; broccoli purees intended for infant consumption would fall within that scope.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/chiutula2025-wastewater-vegetables-malawi|Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi]]<span class="hmi-ref-meta">Chiutula C, Mtewa AG, Abraham A, Mvula RLS, Maluwa A, Eregno FE, et al. · International Journal of Environmental Research and Public Health · 2025 · [doi.org/10.3390/ijerph22111614](https://doi.org/10.3390/ijerph22111614)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula et al. 2025]]. *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*, International Journal of Environmental Research and Public Health | 2025 | Peer-reviewed | Measured Cd, Cr, and Pb in Brassica and indigenous leafy vegetables irrigated with WWTP effluent in Blantyre, Malawi; wastewater-irrigation contamination transfer context for brassica crops |
| 4 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in boiled broccoli (TDS Food 113; n=27 per analyte) |
| 6 | [[sources/kiczorowski2022-fermented-vegetables-metals\|Kiczorowski et al. 2022]]. *Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition*, Scientific Reports | 2022 | Peer-reviewed | PL Pb, Cd occurrence in Raw and fermented broccoli, carrot, cucumber, pepper, and red beet, four repetitions per vegetable combination (n=40) |
| 7 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [0a907f56a](https://github.com/paleofoundation/heavymetalindex/commit/0a907f56a) | 2026-08-09 | correction | Narrative text revised |
| [942bc6b1b](https://github.com/paleofoundation/heavymetalindex/commit/942bc6b1b) | 2026-08-09 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
