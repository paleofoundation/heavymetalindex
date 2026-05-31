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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [6.7, 27.6]
    p95_ppb: 37
    confidence: high
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 130]
    p95_ppb: 137
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
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
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
sources: 9
---

# Broccoli

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Broccoli is a member of the Brassica oleracea species complex, a plant family that includes some of the most studied moderate-to-high cadmium accumulators among common food crops. Brassica species express high-affinity cadmium transporters (in the ZIP/IRT family) that move Cd from the soil solution into root cells and then upward through the xylem to shoot tissues. Broccoli florets, which are the commercially harvested portion, receive metals translocated from roots and stems, and can accumulate Cd at concentrations meaningfully above those in low-accumulating crops such as corn or potato grown in the same soil. Lead accumulation in broccoli follows a different mechanism: atmospheric deposition of particulate Pb on the broad, rough surface of broccoli florets is a significant uptake route, supplementing the smaller root-absorption pathway. The textured, open floreted head structure of broccoli provides an effective surface area for trapping airborne particulates, making it more susceptible to surface-deposited lead than smooth-surfaced vegetables. Nickel uptake through soil solution is also measurable in brassica species, consistent with the family's generally elevated trace-metal absorption capacity.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=3 | 0 | 0 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/codex-cxs-193-1995\|3]] |
| Cd | n=3 | 6.7–27.6 | 37 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | n=2 | 0 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| Ni | n=3 | 0–130 | 137 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=3 | 0 | 0 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0–1.7 | 2.4 | high | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 113, "Broccoli, fresh/frozen, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Broccoli, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3.9 | 6.74 | 11 | 27.6 | 37 | 84 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 300 | in profile |
| Ni | 27 | 0 | 0 | 58 | 130 | 137 | 170 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 1.68 | 2.36 | 4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in boiled broccoli ranging from 3.9 to 84 ppb (median 11 ppb, p90 27.6 ppb, n=27), with substantial skew toward low values and occasional high outliers [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 170 ppb (median 58 ppb, p90 130 ppb). Pb, total As, and tHg were predominantly at or below the reporting limit in the TDS dataset. The Chiutula et al. 2025 study found measurably elevated Cd and Pb in brassica vegetables irrigated with wastewater effluent in Malawi [[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]], illustrating that irrigation-water quality is a major determinant of the Cd and Pb range in broccoli beyond the TDS background values. Varieties bred for higher glucosinolate content do not consistently differ from standard varieties in metal accumulation, though this remains understudied. The Codex Alimentarius international Cd maximum level for vegetables (0.05 mg/kg for most vegetables, with some variation) provides a ceiling against which the TDS p90 of 27.6 ppb falls comfortably [[sources/codex-cxs-193-1995|Codex 1995]].

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula et al. 2025]]. *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*, International Journal of Environmental Research and Public Health | 2025 | Peer-reviewed | Measured Cd, Cr, and Pb in Brassica and indigenous leafy vegetables irrigated with WWTP effluent in Blantyre, Malawi; wastewater-irrigation contamination transfer context for brassica crops |
| 4 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 5 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in boiled broccoli (TDS Food 113; n=27 per analyte) |
| 8 | [[sources/kiczorowski2022-fermented-vegetables-metals\|Kiczorowski et al. 2022]]. *Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition*, Scientific Reports | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international Cd and Pb maximum levels applicable to vegetable matrices including brassica crops |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
<!-- END: hmi-page-history -->
