---
title: "Honey"
type: ingredient
commodity: honey
label: "Honey"
aliases: ["Honey", "honey"]
category: sweetener
tds_food:
  number: 172
  description: "Honey"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
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
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
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
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 21
---

# Honey

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 6/10 HMTc analytes, total n=45 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 32 jurisdictions, top EU 15% | — |
| D3 Anthropogenic evidence | GAP | 1 soil + 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 2 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg POOLABLE, Ni POOLABLE, Al THIN, Cr POOLABLE, U THIN | Al: THIN; U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 12 claims checked, 12 supported; 3 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming honey: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr, U; pairing 0 paired, 8 single, 0 unpaired | Al: THIN; U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 172, "Honey." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Honey is unusual among food commodities in that its metal content reflects the surrounding foraging environment of the bee colony rather than any intrinsic biological accumulation by a plant or animal. Honeybees collect nectar, pollen, and water from a foraging radius of approximately two to five kilometers from the hive; metals present in that environment from soil, atmospheric deposition, industrial emissions, vehicle exhaust, or agricultural pesticide residues can enter the hive via contaminated floral sources, pollen, and water. Lead in honey is primarily of atmospheric and soil deposition origin; proximity to high-traffic roads, industrial facilities, or mining operations elevates Pb concentrations in honeybees and hive products. Cadmium enters honey principally through contaminated soils and agricultural inputs, particularly phosphate fertilizers applied to crops within the foraging range. Because honey is a bee-processed concentrate of nectar, it acts as an environmental biomonitor: systematic differences in honey metal concentration across geographic regions reflect differences in environmental contamination rather than commodity-specific physiological accumulation. This biomonitoring character distinguishes honey from virtually all other food commodities on this wiki, and it means that geographic sourcing is the dominant driver of inter-sample variance. Published studies from Italy, Morocco, and other producing regions confirm that Pb in honey can exceed the EU maximum level of 0.10 mg/kg (100 ppb) in apiaries near industrial or high-traffic sites [[sources/naccari2025-honey-toxic-metals-microelements]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=9 | 0 | 0 | medium | [[sources/teferi2026-honey-ethiopia-kellem-wollega\|1]], [[sources/naccari2025-honey-toxic-metals-microelements\|2]], [[sources/wise2025-elevated-metals-us-honeys\|3]] |
| Cd | n=9 | 0 | 0 | medium | [[sources/teferi2026-honey-ethiopia-kellem-wollega\|1]], [[sources/naccari2025-honey-toxic-metals-microelements\|2]], [[sources/wise2025-elevated-metals-us-honeys\|3]] |
| iAs | data gap | — | — | — | — |
| tAs | n=4 | 0 | 0 | medium | [[sources/naccari2025-honey-toxic-metals-microelements\|1]], [[sources/wise2025-elevated-metals-us-honeys\|2]], [[sources/margaoan2024-bee-products-heavy-metals\|3]] |
| tHg | n=4 | 0 | 0 | medium | [[sources/wise2025-elevated-metals-us-honeys\|1]], [[sources/margaoan2024-bee-products-heavy-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=8 | 0 | 0 | medium | [[sources/teferi2026-honey-ethiopia-kellem-wollega\|1]], [[sources/naccari2025-honey-toxic-metals-microelements\|2]], [[sources/wise2025-elevated-metals-us-honeys\|3]] |
| Al | n=3 | 50–500 | — | low | [[sources/naccari2025-honey-toxic-metals-microelements\|1]], [[sources/wise2025-elevated-metals-us-honeys\|2]], [[sources/manouchehri2021-honey-heavy-metals-review\|3]] |
| Cr | n=6 | 0 | 0 | medium | [[sources/naccari2025-honey-toxic-metals-microelements\|1]], [[sources/abeslami2025-moroccan-honey-minerals\|2]], [[sources/margaoan2024-bee-products-heavy-metals\|3]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Honey" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured honey as TDS Food 172 with n=3 composites and found all seven measured analytes at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|4]]. This US retail result contrasts with findings from European producing regions, where industrial and agricultural environmental contexts elevate metal concentrations. Naccari et al. 2025 analyzed 38 honey samples from Calabria, Italy, by ICP-MS and found that Pb exceeded the EU maximum level of 0.10 mg/kg in 80 percent of wildflower samples, with Al means of 4.5 to 6.0 mg/kg across honey types [[sources/naccari2025-honey-toxic-metals-microelements|2]]. Abeslami et al. 2025 measured seven monofloral and multifloral honeys from eastern Morocco and reported Cd concentrations of 0.0017 to 0.018 mg/kg and Pb of 0.13 to 0.19 mg/kg, with botanical-origin differences between honey types [[sources/abeslami2025-moroccan-honey-minerals|1]]. These inter-regional contrasts illustrate the primary driver of honey metal variance: proximity to pollution sources rather than botanical variety, though botanical origin (which determines foraging plant community) provides a secondary modulating effect through differences in plant metal uptake and nectar metal content.

## Processing effects

Honey processing involves extraction from the comb by centrifugation, filtration to remove wax and debris, and in some cases heat treatment for liquefaction or pasteurization. Filtration removes particulate contaminants including some surface-sorbed metals, and the filtered fraction generally shows slightly lower metal concentrations than raw comb honey, though this effect is not large in the current corpus. Creaming (controlled crystallization) does not alter metal concentration. Blending of honeys from different geographic sources is the most significant processing step from a metal-variability perspective: large commercial batches blend honeys from multiple apiaries and potentially multiple countries, and blending from diverse origins can average out both low and high metal concentrations. The Sn pathway does not apply because honey is packaged primarily in glass or food-grade plastic.

## Ingredient-derivative risk

Honey used as an ingredient in processed foods (baked goods, cereals, beverages, confectionery) is present in formulations at relatively low inclusion rates; the contribution of honey's metal content to the finished product is accordingly diluted. Concentrated honey, reduced honey, and honey powders prepared by spray-drying concentrate metals proportionally; a dehydrated honey powder with a water content reduced from 80 percent to 2 percent would concentrate metals by roughly a fourfold factor compared to liquid honey. Mead and other fermented honey products are not characterized in the current corpus.

## Mitigation options

### Sourcing levers

Geographic sourcing is the primary mitigation lever for honey. Apiaries located away from high-traffic roads, industrial facilities, mining operations, and intensively phosphate-fertilized agricultural land consistently show lower metal concentrations. Apiary audits that document the within-radius land use and environmental burden of the foraging zone provide a documented basis for metal-risk sourcing decisions.

### Agronomic levers

Relocating hives away from known contamination sources is the most effective agronomic lever. Planting low-metal-accumulating nectar sources in the foraging radius reduces bees' metal exposure, but controlling foraging targets at scale is not practically feasible. Soil remediation or pH amendment of agricultural land within foraging range reduces cadmium bioavailability in flora but requires cooperation with land managers outside the apiary operator's control.

### Processing levers

Fine filtration of extracted honey removes coarse particulate matter that may carry surface-adsorbed metals; this provides a modest but not transformative reduction in metal content. Blending from multiple low-contamination origins provides dilution and consistency.

### Formulation levers

Substituting honey with alternative sweeteners in formulations where honey's metal load is a concern is an option, though the sensory and marketing properties of honey are generally integral to its use. Including honey at lower inclusion rates achieves proportional dilution.

### Testing and QC levers

Given the demonstrated regional variability and the finding that EU honey Pb exceedances are common near industrial zones, lot-level ICP-MS testing for Pb and Cd provides the most reliable quality assurance. Origin documentation and certificate-of-conformity requirements from suppliers should specify the apiary location and any environmental burden assessment. Testing frequency proportionate to supply-chain geographic diversity is appropriate.

### Packaging and storage levers

Glass packaging avoids any plastic-leachate pathway; Sn migration is not relevant for honey as it is not packaged in tin-lined cans. Storage in cool, dark conditions maintains product quality without affecting metal concentration.

## Regulatory limits that apply

The EU sets a maximum level for Pb in honey of 0.10 mg/kg (100 ppb) wet weight [[regulations/eu2023-contaminants-maximum-levels]]. No EU maximum level for Cd in honey has been set as of the current corpus state. The finding of Naccari et al. 2025 that 80 percent of Italian wildflower honey samples exceeded this Pb limit illustrates that the EU limit is an active regulatory constraint for this commodity, not a comfortable ceiling [[sources/naccari2025-honey-toxic-metals-microelements|2]]. The United States does not set a statutory maximum for Pb or Cd in honey. Codex Alimentarius does not list honey in its specific ML tables for Pb or Cd [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/teferi2026-honey-ethiopia-kellem-wollega\|Teferi et al. 2026]]. *Assessment of Heavy Metal Contamination and Associated Health Risks in Honey from Kellem Wollega Zone, Ethiopia*, Toxics | 2026 | Peer-reviewed | Pb, Cd, Ni, and other metals in Ethiopian honey from artisanal-mining-affected districts, with Pb and Cd far exceeding EU and Codex limits |
| 2 | [[sources/abeslami2025-moroccan-honey-minerals\|Abeslami et al. 2025]]. *Mineral Profile and Heavy Metal Content of Seven Monofloral and Multifloral Honeys from Eastern Morocco*, Molecules | 2025 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in 7 honey types from eastern Morocco by ICP-MS; Cd 0.0017–0.018 mg/kg, Pb 0.13–0.19 mg/kg, botanical-origin and geographic variance data |
| 3 | [[sources/naccari2025-honey-toxic-metals-microelements\|Naccari et al. 2025]]. *Study of Toxic Metals and Microelements in Honey as a Tool to Support Beekeeping Production and Consumer Safety*, Foods 2025, 14, 1986 | 2025 | Peer-reviewed | Measured Pb, Cd, tAs, Al, Ni, and Cr in 38 Calabrian (Italy) honey samples by ICP-MS; Pb exceeded EU MRL (0.1 mg/kg) in 80% of Wildflower samples; Al mean 4.5–6.0 mg/kg |
| 4 | [[sources/wise2025-elevated-metals-us-honeys\|Jr et al. 2025]]. *Elevated Metal Levels in U.S. Honeys: Is There a Concern for Human Health?*, Biological Trace Element Research | 2025 | Peer-reviewed | Twenty-metal XRF survey of 28 US small-beekeeper honeys across 15 states with majority Pb and tHg exceedances of EU MRLs |
| 5 | [[sources/knoll2024-honeybee-cadmium-review\|Knoll et al. 2024]]. *Foraging Activity of Honey Bees (Apis mellifera L., 1758) and Exposure to Cadmium: a Review* | 2024 | Peer-reviewed | EU/global Cd occurrence in Narrative review; no primary samples. Synthesizes studies on Apis mellifera foraging and Cd exposure pathways. |
| 6 | [[sources/margaoan2024-bee-products-heavy-metals\|Margaoan et al. 2024]]. *Environmental pollution effect on honey bees and their derived products: a comprehensive analysis*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Pb, Cd, Hg, As, Cr, Ni occurrence in Review study; synthesizes literature on heavy metals and other contaminants in honey, pollen, beeswax, and other bee products;... |
| 7 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 8 | [[sources/zhang2024-mip-pb-honey-cyprus\|Zhang 2024]]. *Molecularly imprinted polymer electrochemical sensor for lead detection in honey*, unknown | 2024 | Peer-reviewed | MIP electrochemical sensor development and Pb validation in honey matrix (Cyprus context); analytical method paper, occurrence data require full-paper confirmation |
| 9 | [[sources/aburas2023-libyan-honey-lead-cadmium\|Aburas et al. 2023]]. *Pollution assessment by estimation of Lead and Cadmium concentrations and some physical properties in a number of types of Libyan Honey*, Bani Waleed University Journal of Humanities and Applied Sciences | 2023 | Peer-reviewed | LY Pb, Cd occurrence in Five Libyan honey types or honey-derived samples: thyme, tamarisk/athel, sidr, sugar-solution honey, and black honey (n=5) |
| 10 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 11 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 12 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 13 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in honey (TDS Food 172; n=3 per analyte); all analytes at or near reporting limit |
| 14 | [[sources/bektashi2021-honey-metals-sugars-balkans\|Limani et al. 2021]]. *Characterization of honey: determination of metal and sugar content*, Journal of Agricultural, Food and Environmental Sciences | 2021 | Peer-reviewed | MK/RS Pb, Cd, tAs, Fe, Mn, Al, Cu, Zn, Se, Cr, Ni occurrence in Five unprocessed flower-honey samples from Skopje and Kumanovo in North Macedonia and Preshevo in Serbia, including four beekeeper... (n=5) |
| 15 | [[sources/gunes2021-yalova-chestnut-honey-metals\|Gunes 2021]]. *Chestnut Honey as a Complementary Medicine: Determination of Antibacterial Activity, Heavy Metal Residue and Health Risk Assessment*, Journal of Advances in VetBio Science and Techniques | 2021 | Peer-reviewed | TR tAs, Pb, Cd, tHg occurrence in Chestnut honey samples from Yalova Beekeepers Association member beekeepers, Turkey (n=27) |
| 16 | [[sources/manouchehri2021-honey-heavy-metals-review\|Manouchehri et al. 2021]]. *The Possible Effects of Heavy Metals in Honey as Toxic and Carcinogenic Substances on Human Health: A Systematic Review*, Arı Dergisi / Uludag Bee Journal | 2021 | Review | Cross-country review of Pb, Cd, tHg, Cr, Ni, and Al in honey with bee uptake pathways and industrial-proximity contamination patterns |
| 17 | [[sources/shukla2020-honey-prayagraj-metals\|Shukla et al. 2020]]. *Melissopalynological and physicochemical analysis of honey samples from Prayagraj District, Uttar Pradesh*, Acta Palaeobotanica | 2020 | Peer-reviewed | IN Cd, Pb, Cu, tAs occurrence in Honey samples from rural and urban localities of Prayagraj District, Uttar Pradesh (n=14) |
| 18 | [[sources/tomczyk2020-polish-honey-metal-transfer\|Tomczyk et al. 2020]]. *Transfer of some toxic metals from soil to honey depending on bee habitat conditions*, Acta Universitatis Cibiniensis Series E: Food Technology | 2020 | Peer-reviewed | PL Cd, Pb, Al, Mn, Ni occurrence in Honeydew, goldenrod, dandelion, rapeseed, and tilia honeys collected from ten apiary sampling points in Podkarpackie, Poland, split between... (n=50) |
| 19 | [[sources/salama2019-libya-honey-metals\|Salama et al. 2019]]. *Determination of Physicochemical Properties and Toxic Heavy Metals Levels in Honey Samples from West of Libya*, Journal of Advanced Chemical Sciences | 2019 | Peer-reviewed | LY Pb, Cd, tHg, tAs occurrence in Bee honey samples from eight locations in western Libya, three samples per locality (n=24) |
| 20 | [[sources/aljedani2017-honeybee-honey-saudi-arabia\|Aljedani 2017]]. *Determination of Some Heavy Metals and Elements in Honeybee and Honey Samples from Saudi Arabia*, Entomology and Applied Science Letters | 2017 | Peer-reviewed | Pb, Cd, Cr, and Ni in Saudi Arabian honey from four agricultural regions, providing a clean rural-baseline reference distant from industrial sources |
| 21 | [[sources/aghamirlou2015-iranian-honey-metals\|Aghamirlou et al. 2015]]. *Heavy metals determination in honey samples using inductively coupled plasma-optical emission spectrometry*, Journal of Environmental Health Science & Engineering | 2015 | Peer-reviewed | IR tAs, Cd, Cr, Pb, Ni, Zn, Cu occurrence in Multifloral honey samples from four regions of Ardabil province, Iran, collected from individual beekeepers in 2013 (n=25) |
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
