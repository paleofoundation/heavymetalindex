---
title: "Meat and poultry"
type: ingredient
commodity: meat
label: "Meat and poultry"
aliases: [chicken, pork sausage]
category: animal-food
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13.1]
    p95_ppb: 28.4
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 7
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Al:
    status: populated
    typical_ppb: [0, 1391]
    p95_ppb: 1503
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: populated
    typical_ppb: [4.6, 21.0]
    p95_ppb: 32.2
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
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
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [mixed-meals-non-rice, mixed-meals-rice-containing]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Meat and poultry

FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Commercial muscle meat from mammals and poultry is among the lower-risk food categories for heavy metal accumulation because skeletal muscle tissue has limited capacity to sequester most metals compared with organs such as kidney and liver. The primary exposure pathway for metals in muscle is systemic distribution from the gastrointestinal tract following dietary ingestion by the animal. Feed composition, drinking water quality, and soil contamination at pasture all influence the concentration delivered to muscle, but the transfer factors from diet to muscle are modest for Pb, Cd, and iAs. Cadmium is the most physiologically instructive case: Cd accumulates preferentially in the renal cortex and liver, and muscle tissue in most production animals contains an order of magnitude less Cd than kidney tissue. Lead follows a similar pattern, with the majority of absorbed Pb partitioned to bone and organ tissue rather than muscle. Inorganic arsenic, where present in feed or water, distributes into muscle at low concentrations relative to its aqueous source. Mercury speciation matters in the meat context: methylmercury (MeHg) is negligible in terrestrial muscle compared with seafood, and total mercury in commercial meat is generally below method detection limits in routine monitoring.

The category includes muscle cuts from beef, pork, lamb, and poultry, as well as processed meat products (sausages, frankfurters, deli meats) that may incorporate mechanically separated meat or organ-meat inclusions. Processed products are the relevant risk variant because organ-meat inclusion in formulation can elevate Cd above what pure muscle tissue would contribute. This page covers commercial muscle meat and processed meat products as a category; organ meats including kidney and liver are separately characterized.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Within the commercial meat category, the most meaningful dimension of variation is the cut type (muscle versus processed product) rather than geography, because metal concentrations in muscle are low enough that geographic soil and water differences produce modest absolute changes against an already low baseline. Processed meat products represent the higher end of the category range: frankfurters and bologna can contain mechanically separated meat or organ-meat inclusions that carry the organ's higher Cd load into the finished product. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] characterizes this ingredient matrix in the context of UK monitoring, while FDA TDS FY2018-FY2020 data cover a range of prepared US retail meat forms including ground beef, lamb chop, pork chop, turkey, and processed products [[sources/fda-tds-elements-2018-2020]]. Regional variation is secondary to product-type variation for most analytes; the exception is iAs, where animals raised in areas with elevated arsenic in groundwater or feed can show modestly higher muscle iAs concentrations than animals from low-arsenic production regions. Natural sheep casings measured by [[sources/wysok2025-heavy-metals-sheep-casings]] (mean Pb 77 ppb, mean tAs 36 ppb wet weight, n=35) illustrate that some meat-processing byproducts carry higher metal burdens than the muscle itself.

## Processing effects

Cooking and thermal processing of muscle meat do not dramatically alter total metal concentrations on a wet weight basis; the dominant effect is moisture loss during cooking, which concentrates analyte concentrations proportionally to the reduction in water content. A roasted or grilled portion will therefore show higher ppb values than the raw equivalent when measured on a wet weight basis, but the total mass of metal delivered per portion may be similar if portion size is adjusted for moisture loss. Canning, the primary preservation processing route for shelf-stable meat products, introduces the possibility of Sn migration from tinplate can interiors when the internal lacquer is absent or degraded. Fermentation and curing (for products such as salami or ham) do not meaningfully alter metal concentrations because the metals involved are not volatile and are not significantly leached by salt brines at typical production concentrations. Mechanical separation of meat, used in some processed products, is the processing step with the greatest potential to elevate Cd and Pb by incorporating bone and bone marrow fragments, which accumulate both metals at higher concentrations than muscle tissue.

## Ingredient-derivative risk

The derivatives with meaningfully different metal profiles relative to pure muscle meat are processed meat products incorporating organ-meat inclusions and mechanically separated meat (MSM). When kidney or liver is included in a formulation, the product inherits the organ's elevated Cd, which in kidney can reach concentrations substantially above the EU maximum level for muscle meat (0.050 mg/kg Cd in muscle versus 1.0 mg/kg in kidney under EU 2023 contaminant regulations). Product labeling does not always distinguish MSM from whole-muscle trim, making ingredient-list-based risk inference uncertain. Bone broths and collagen hydrolysates derived from meat processing also represent a distinct derivative risk profile: Pb accumulates in bone, and prolonged aqueous extraction of bone material at low pH can leach Pb into the final product at concentrations exceeding what muscle tissue would contribute.

## Mitigation options

### Sourcing levers

Supplier specifications requiring muscle-only trim, without mechanically separated or organ-inclusive product, are the most effective sourcing control for processed meat applications. For whole-muscle cuts, sourcing from production systems with documented feed and water quality controls (particularly for arsenic in groundwater-fed operations) reduces iAs variability. Preference for suppliers operating under national monitoring programs that test finished product against regulatory limits provides an additional verification layer.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Avoiding mechanical separation processes that incorporate bone and bone-adjacent material limits Cd and Pb carry-through into formulated products. Where canning is required, selecting lacquer-lined tinplate interiors and monitoring can-integrity reduces Sn migration risk. Thermal processing protocols do not offer meaningful metal reduction; their effect on metal concentration is limited to the moisture-concentration artifact described above.

### Formulation levers

For manufacturers using meat as an ingredient in multi-component products (stews, mixed meals, infant meat purées), substituting pure muscle trim for MSM-inclusive trim reduces Cd contribution. Dilution with non-meat components (grains, vegetables) lowers the per-serving metal dose from the meat fraction but does not address the ingredient-level concentration.

### Testing and QC levers

Lot-level testing of incoming meat ingredients by ICP-MS for Pb, Cd, and tAs is the primary quality-control lever for manufacturers formulating infant and young-child products, where FDA's 10 ppb Pb action level [[sources/fda-ctz-Pb-babyfood-2025]] creates a legally binding limit for processed baby and toddler meat foods. Third-party testing against EU maximum levels for finished product categories that enter European markets provides an independent verification layer.

### Packaging and storage levers

For canned meat products, lacquer-lined interior surfaces are the primary packaging control for Sn migration. Storage conditions do not materially affect metal concentrations in muscle tissue or processed meat products within normal commercial temperature ranges.

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 (amending and consolidating prior contaminant regulations) sets maximum levels for Pb at 0.10 mg/kg and Cd at 0.050 mg/kg in fresh meat (muscle tissue from cattle, sheep, pigs, and poultry) on a wet weight basis. Organ meats carry substantially higher Cd limits (kidney of cattle, sheep, pigs: 1.0 mg/kg; liver: 0.50 mg/kg), reflecting biological accumulation in those tissues. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) [[sources/codex-cxs-193-1995]] sets Pb and Cd limits for meat consistent with EU levels for most muscle-tissue categories. In the United States, FDA finalized action levels under the Closer to Zero initiative for processed food intended for babies and young children [[sources/fda-ctz-Pb-babyfood-2025]]: 10 ppb Pb applies to single-ingredient meats in processed baby and toddler foods. No US federal maximum level for Pb or Cd currently applies to conventional retail meat products outside the infant food context. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance setting a 10 ppb Pb action level for single-ingredient meats in processed baby and toddler foods; threshold derived from CDC blood lead reference value and FDA 2022 interim reference levels; scientifically grounding the regulatory floor for Pb in meat-based infant products |
| 3 | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports (in press 2025) | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/wysok2025-heavy-metals-sheep-casings\|Wysok et al. 2025]]. *Heavy Metal Contamination in Natural Sheep Casings*, Foods | 2025 | Peer-reviewed | Pb, tAs, Cd, and tHg in 35 natural sheep casing samples from Polish production facilities (ICP-MS); mean Pb 77 ppb, tAs 36 ppb, Cd 9 ppb wet weight; tHg below LOQ in all samples; characterises the sausage-casing byproduct as a secondary metal-exposure pathway in processed meat products |
| 5 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 6 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Al, tAs, Cd, tHg, Ni, Pb, and Sn in 25 European baby foods consumed in Italy including homogenized meat products (children aged 0–6 months); multi-element occurrence data for meat-based baby food matrices |
| 8 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 9 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | CA/US/global iAs, tAs occurrence in Systematic review of biomonitoring studies of speciated iAs in pregnancy; covers cohort studies from Bangladesh, Spain, China, Mexico,... |
| 11 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | Cd, Pb, Hg, iAs, tAs, Ni, Al, and other elements in US prepared TDS meat foods (ground beef, lamb chop, pork chop, turkey, frankfurter, bologna, ham) across FY2018–2020; most comprehensive recent US monitoring dataset for metals in retail prepared meat |
| 12 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 13 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting Cd dietary exposure assessment carrying forward the PTMI of 25 µg/kg bw/month; reports Cd occurrence across food groups including meat and organ meats; finds children can approach or reach the PTMI under high-cocoa and high-cereal dietary patterns |
| 14 | [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|Shaltout et al. 2020]]. *Prevalence of Some Chemical Hazards in Some Meat Products*, Concepts of Dairy & Veterinary Sciences (Lupine Publishers) 3(4):000166 | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 15 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 16 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | *[awaiting synthesis]* |
| 17 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | *[awaiting synthesis]* |
| 18 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal) | 2014 | Peer-reviewed | *[awaiting synthesis]* |
| 19 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | *[awaiting synthesis]* |
| 20 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | *[awaiting synthesis]* |
| 21 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA CONTAM Pb opinion concluding no safe threshold exists for developmental neurotoxicity or cardiovascular effects; derives BMDLs from blood lead concentrations; meat and organ meats identified among food group contributors to adult and child dietary Pb exposure across European monitoring data |
| 22 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; includes Cd occurrence data for meat and offal across European monitoring, noting that organ meats (particularly kidney and liver) carry substantially higher Cd than muscle meat |
| 23 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international maximum levels for Cd, Pb, Hg, iAs, and Sn across food matrices including meat and offal; provides the international regulatory benchmarks against which meat Pb and Cd concentrations are assessed on this page |
<!-- END: hmi-source-legend -->

