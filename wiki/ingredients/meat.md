---
title: "Meat and poultry"
type: ingredient
commodity: meat
label: "Meat and poultry"
aliases: [chicken, "pork sausage", processed-meat, sausage]
category: animal-food
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13.1]
    p95_ppb: 28.4
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 7
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 4]
    p95_ppb: 20
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [27, 258]
    p95_ppb: 1006
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1391]
    p95_ppb: 1503
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [40, 472]
    p95_ppb: 1014
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [4.6, 21.0]
    p95_ppb: 32.2
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 40]
    p95_ppb: 80
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
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
wiki_doi: null
updated: 2026-05-16
sources: 66
---

# Meat and poultry

## Overview

FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Commercial muscle meat from mammals and poultry is among the lower-risk food categories for heavy metal accumulation because skeletal muscle tissue has limited capacity to sequester most metals compared with organs such as kidney and liver. The primary exposure pathway for metals in muscle is systemic distribution from the gastrointestinal tract following dietary ingestion by the animal. Feed composition, drinking water quality, and soil contamination at pasture all influence the concentration delivered to muscle, but the transfer factors from diet to muscle are modest for Pb, Cd, and iAs. Cadmium is the most physiologically instructive case: Cd accumulates preferentially in the renal cortex and liver, and muscle tissue in most production animals contains an order of magnitude less Cd than kidney tissue. Lead follows a similar pattern, with the majority of absorbed Pb partitioned to bone and organ tissue rather than muscle. Inorganic arsenic, where present in feed or water, distributes into muscle at low concentrations relative to its aqueous source. Mercury speciation matters in the meat context: methylmercury (MeHg) is negligible in terrestrial muscle compared with seafood, and total mercury in commercial meat is generally below method detection limits in routine monitoring.

The category includes muscle cuts from beef, pork, lamb, and poultry, as well as processed meat products (sausages, frankfurters, deli meats) that may incorporate mechanically separated meat or organ-meat inclusions. Processed products are the relevant risk variant because organ-meat inclusion in formulation can elevate Cd above what pure muscle tissue would contribute. This page covers commercial muscle meat and processed meat products as a category; organ meats including kidney and liver are separately characterized.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=15 | 0–13.1 | high | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|2]], [[sources/wysok2025-heavy-metals-sheep-casings\|3]] |
| Cd | n=15 | 0–3 | high | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|2]], [[sources/wysok2025-heavy-metals-sheep-casings\|3]] |
| iAs | n=2 | 0–4 | low | [[sources/cfs2012-hktds-inorganic-arsenic\|1]], [[sources/fera2015-uk-tds-metals\|2]], [[sources/uneyama2007-arsenic-foods-cumulative-data\|3]] |
| tAs | n=9 | 5–40 | medium | [[sources/wysok2025-heavy-metals-sheep-casings\|1]], [[sources/dai2024-chongqing-dietary-arsenic-exposure\|2]], [[sources/meli2024-chemical-characterization-baby-food-italy\|3]] |
| tHg | n=8 | 0–1 | medium | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/wysok2025-heavy-metals-sheep-casings\|2]], [[sources/meli2024-chemical-characterization-baby-food-italy\|3]] |
| Ni | n=7 | 27–258 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Al | n=6 | 0–1391 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/fda-tds-elements-2018-2020\|3]] |
| Cr | n=6 | 40–472 | medium | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|1]], [[sources/henriksen2023-chromium-nordic-nnr\|2]], [[sources/fda-tds-elements-2018-2020\|3]] |
| Sn | n=4 | 4.6–21 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]], [[sources/cfs2013-hktds-metallic-contaminants\|3]] |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The general meat ingredient carried an inorganic-arsenic value of zero with no FDA anchor row. Re-synthesis draws on the two sources that measure inorganic arsenic in meat directly rather than inferring it from total arsenic. Using hydride-generation ICP-MS speciation with a 3 ppb detection limit, the Hong Kong Total Diet Study reported the meat, poultry and game group at a mean of 4 ppb with a range of nondetect to 27 ppb and 54 percent of composites below the limit ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]), and the UK Total Diet Study offal composite was below its inorganic-arsenic reporting limit ([[sources/fera2015-uk-tds-metals|Baxter and Brereton 2015]]). The cell is published as a thin, left-censored value of about 0 to 4 ppb with an upper tail near 20 ppb, and it is flagged as data-limited.

Inorganic arsenic is deliberately kept distinct from total arsenic and is not derived from it. Total arsenic in muscle is itself low, roughly 5 to 15 ppb in commercial beef and pork, and the inorganic fraction in terrestrial animal tissue is only a part of that, consistent with the cumulative review of [[sources/uneyama2007-arsenic-foods-cumulative-data|Uneyama et al. 2007]], which found dietary inorganic arsenic dominated by seafood and low in the milk, meat and egg group. Preserved-egg outliers and other high-arsenic matrices in these sources are not part of the muscle-meat inorganic-arsenic estimate.

## Routing

This node is linked from [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda-tds-elements-2018-2020|Total Diet Study Report: Fiscal Years 2018-2020 Elements Data]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/wysok2025-heavy-metals-sheep-casings|Heavy Metal Contamination in Natural Sheep Casings]]<span class="hmi-ref-meta">Wysok B, Wojtacka J, and Szczotka-Bochniarz A · Foods · 2025 · [doi.org/10.3390/foods14091502](https://doi.org/10.3390/foods14091502)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
5. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | LY Pb, Cd, Cr, Cu occurrence in Imported frozen meat (chicken, beef, lamb, processed products) from Tripoli commercial markets; origins: Brazil, USA, Jordan, Spain, Australia;... (n=30) |
| 2 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | EFSA-style mRPI cumulative risk assessment of Pb, Cd, iAs, and MeHg across 969 Chongqing participants including meat as a contributing food group, with both neurotoxicity and nephrotoxicity mRPI exceeding 1.0 |
| 3 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance setting a 10 ppb Pb action level for single-ingredient meats in processed baby and toddler foods; threshold derived from CDC blood lead reference value and FDA 2022 interim reference levels; scientifically grounding the regulatory floor for Pb in meat-based infant products |
| 4 | [[sources/gorbanov2025-lamb-meat-snacks-metals\|Gorbanov et al. 2025]]. *Evaluation of lamb meat safety for meat snack production after the use of the feed supplement LaktuVet-1 in animal diets*, Proceedings of VSUET, 87(1): 86-92 | 2025 | Peer-reviewed | RU Pb, Cd, tAs occurrence in Two groups of 20 Edilbay-breed sheep in Russia: a control group and an experimental group receiving the LaktuVet-1... (n=40) |
| 5 | [[sources/manfredi2025-nickel-meat-italy\|Manfredi et al. 2025]]. *Dietary exposure assessment to nickel through the consumption of poultry, beef, and pork meat for different age groups in the Italian population*, Italian Journal of Food Safety | 2025 | Peer-reviewed | IT Ni occurrence in 809 official-control muscle meat samples collected in Italy from 2011 to 2023 |
| 6 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 7 | [[sources/qvarfort2025-game-meat-lead-bioaccessibility\|Qvarfort et al. 2025]]. *Lead in game meat: a study of bioaccessibility of lead metal fragments*, Journal of Analytical Techniques and Research | 2025 | Peer-reviewed | SE/EU Pb occurrence in Seventeen lead-positive tissue samples from two free-living wild boars shot under normal hunting conditions, deliberately sampled from wound-channel... (n=17) |
| 8 | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports | 2025 | Peer-reviewed | EG/BR/IN tHg, Pb, Cd occurrence in 315 imported frozen bovine samples (105 muscle, 105 liver, 105 kidney) collected from local markets in Sohag governorate,... (n=315) |
| 9 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 10 | [[sources/wysok2025-heavy-metals-sheep-casings\|Wysok et al. 2025]]. *Heavy Metal Contamination in Natural Sheep Casings*, Foods | 2025 | Peer-reviewed | Pb, tAs, Cd, and tHg in 35 natural sheep casing samples from Polish production facilities (ICP-MS); mean Pb 77 ppb, tAs 36 ppb, Cd 9 ppb wet weight; tHg below LOQ in all samples; characterises the sausage-casing byproduct as a secondary metal-exposure pathway in processed meat products |
| 11 | [[sources/wysok2025-heavy-metals-sheep-casings\|Wysok et al. 2025]]. *Assessment of Microbial and Heavy Metal Contamination of Natural Sheep Casings from Different Geographic Regions*, Foods 14(9):1520 | 2025 | Peer-reviewed | TR/IR/CN Pb, Cd, tAs, tHg occurrence in Salted natural sheep casings from Turkey, Iran, China, Mongolia, Pakistan, New Zealand, the United Kingdom, and Belgium. (n=35) |
| 12 | [[sources/baptista2024-wild-boar-metals-spain\|Baptista et al. 2024]]. *Heavy metals and metalloids in wild boars (Sus Scrofa) - a silent but serious public health hazard*, Veterinary Research Communications | 2024 | Peer-reviewed | ES/EU tAs, Cd, Co, Cr, Cu, Ni, Pb, Zn occurrence in Twenty-eight hunted wild boars from Castile and Leon, Spain, sampled in February 2021; liver and kidney tissues were... (n=28) |
| 13 | [[sources/boisteanu2024-wild-boar-romania-metals\|P-C et al. 2024]]. *Essential and toxic elements analysis of wild boar tissues from north-eastern Romania and health risk implications*, Frontiers in Sustainable Food Systems | 2024 | Peer-reviewed | RO Pb, Cd, Cu, Zn, Mn occurrence in wild boar harvested in north-eastern Romania |
| 14 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 15 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Nickel occurrence in the meat-and-poultry category within a Zhejiang Province six-category dietary survey (2628 samples), with children 0–6 the only segment showing unacceptable cumulative Ni exposure (THQ 1.078) |
| 16 | [[sources/mahdi2024-meat-cooked-utensils-metals\|Mahdi et al. 2024]]. *Detection of some heavy metals in meat cooked in different utensils*, Samarra Journal of Pure and Applied Science | 2024 | Peer-reviewed | IQ Fe, Zn, Cu, Cd, Pb, Al occurrence in Meat cooked in clay, iron, copper, aluminium, Tefal/Teflon, and glass/Pyrex utensils in Tikrit, Iraq. (n=6) |
| 17 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Al, tAs, Cd, tHg, Ni, Pb, and Sn in 25 European baby foods consumed in Italy including homogenized meat products (children aged 0–6 months); multi-element occurrence data for meat-based baby food matrices |
| 18 | [[sources/faraj2023-backyard-chicken-metals-iraq\|Faraj et al. 2023]]. *Determination of Heavy Metal Residue in Backyard Chicken at Various Regions in Sulaymaniyah Province*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cd, Cu, Pb occurrence in Sixty backyard chickens collected from four Sulaymaniyah Province regions in Kurdistan Region-Iraq, with 15 chickens from each of... (n=120) |
| 19 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 20 | [[sources/lenart2023-wild-boar-metals\|Lénárt et al. 2023]]. *Monitoring of metal content in the tissues of wild boar (Sus scrofa) and its food safety aspect*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | HU Pb, Cd, tAs, tHg, Cr occurrence in 10 female and 10 male wild boars harvested during the regular hunting season (n=20) |
| 21 | [[sources/morshdy2023-canned-meat-chicken-metals\|Morshdy et al. 2023]]. *Risks assessment of toxic metals in canned meat and chicken*, Food Research | 2023 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al, Sn occurrence in Sixty canned meat and chicken samples collected randomly from grocery stores and hypermarkets in Sharkia Governorate, Egypt, April-October... (n=60) |
| 22 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 23 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Al, tAs, Cr, Cd, Ni, and Pb in 151 food samples including meat within an industrial-Ningxia dietary survey, with total noncarcinogenic HI of 5.61 and meat among the multi-pathway dietary contributors |
| 24 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | CA/US/global iAs, tAs occurrence in Systematic review of biomonitoring studies of speciated iAs in pregnancy; covers cohort studies from Bangladesh, Spain, China, Mexico,... |
| 25 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | German BfR MEAL Total Diet Study reporting tHg, Cd, Pb, and Ni in meat and offal among 356 representative food categories (869 pooled samples), with all levels below applicable EU maximum levels |
| 26 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting Cd dietary exposure assessment carrying forward the PTMI of 25 µg/kg bw/month; reports Cd occurrence across food groups including meat and organ meats; finds children can approach or reach the PTMI under high-cocoa and high-cereal dietary patterns |
| 27 | [[sources/palka2022-rabbit-meat-feed-metals\|Palka et al. 2022]]. *Effect of a Diet Supplemented with Nettle (Urtica dioica L.) or Fenugreek (Trigonella Foenum-Graecum L.) on the Content of Selected Heavy Metals in Liver and Rabbit Meat*, Animals | 2022 | Peer-reviewed | PL/EU Zn, Cu, Ni, Fe, Mn, Pb, Cd occurrence in 60 Termond White rabbits in Poland, split into control feed, 1% nettle-leaf feed, and 1% fenugreek-seed feed groups (n=60) |
| 28 | [[sources/sarker2022-bangladesh-food-webs-review\|Sarker et al. 2022]]. *Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh*, Environmental Science and Pollution Research | 2022 | Review | BD Pb, Cd, tAs, Cr, Ni, Zn, Cu, tHg occurrence in Systematic review of published literature on heavy metal contamination in foodstuffs, soil, and water in Bangladesh; first systematic... |
| 29 | [[sources/thomas2022-lead-game-meat-awareness\|Thomas et al. 2022]]. *Increasing the Awareness of Health Risks from Lead-Contaminated Game Meat Among International and National Human Health Organizations*, European Journal of Environment and Public Health | 2022 | Peer-reviewed | EU/UK/US Pb occurrence in Peer-reviewed narrative exposure and policy review of lead-contaminated wild game meat from lead ammunition; no new laboratory sample... |
| 30 | [[sources/zhang2022-pork-heavy-metals-china\|Zhang et al. 2022]]. *Risk assessment of heavy metals contamination in pork*, Food Control | 2022 | Peer-reviewed | CN Pb, tAs, Cd, tHg occurrence in Secondary aggregation of previously published Chinese pork heavy-metal concentration records from CNKI: 42 Pb records, 36 Cd records,... (n=126) |
| 31 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 32 | [[sources/ertas2021-poultry-calf-meat-arsenic\|Nusret et al. 2021]]. *Evaluation of Arsenic Concentration in Poultry and Calf Meat Samples by Hydride Generation Atomic Fluorescence Spectrometry*, Gazi University Journal of Science | 2021 | Peer-reviewed | TR tAs occurrence in Calf, chicken, and turkey meat samples obtained from local markets (n=31) |
| 33 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | ID Cr, tHg, Co, Zn occurrence in 14 staple food commodities (soybean, mung bean, rice, tempeh, tofu, papaya, crackers/kerupuk, water spinach, spinach, carrot, egg, mackerel/ikan... (n=14) |
| 34 | [[sources/lysenko2021-organic-broiler-meat-heavy-metals\|Lysenko et al. 2021]]. *Organic Meat Production of Broiler Chickens Hubbard Redbro Cross*, International Journal of Veterinary Science 10(1):62-68 | 2021 | Peer-reviewed | RU tAs, Cd, tHg, Pb occurrence in Broiler chickens fed factory compound feed or farm-produced eco-feed with Bacell feed additive. (n=Hubbard Redbro broiler groups with floor/cage housing and factory-feed vs eco-feed comparisons.) |
| 35 | [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|Maikanov et al. 2021]]. *Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan*, Veterinary World 14(6):1615-1621 | 2021 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Meat from markets in the Shuchinsk-Burabay resort zone: beef 166, horse 42, pork 67, mutton 8, poultry 15. (n=298) |
| 36 | [[sources/mesinger2021-red-deer-heavy-metals\|Mesinger et al. 2021]]. *Risk Assessment of Wild Game Meat Intake in the Context of the Prospective Development of the Venison Market in Poland*, Polish Journal of Environmental Studies | 2021 | Peer-reviewed | PL Pb, Cd, tAs, tHg occurrence in 12 red deer doe meat samples from Poland (n=12) |
| 37 | [[sources/raeeszadeh2021-animal-meat-metals-iran\|Raeeszadeh et al. 2021]]. *Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran*, Research Square | 2021 | Preprint | IR Se, Pb, Cd, tAs, Zn, Ni, Co, Cu, Cr occurrence in Meat samples from Sanandaj distribution centers in Kurdistan province, western Iran: 45 beef, 45 sheep, 40 turkey, and... (n=170) |
| 38 | [[sources/ali2020-chicken-liver-heavy-metals-erbil\|Ali et al. 2020]]. *Determination of heavy metals and selenium content in chicken liver at Erbil city, Iraq*, Italian Journal of Food Safety 9:8659 | 2020 | Peer-reviewed | IQ Cd, Pb, tHg, Cr, Cu, Mn, Ni, Zn, Se, Co occurrence in Chicken liver samples collected from markets in Erbil city, Kurdistan Region, Iraq. (n=20) |
| 39 | [[sources/buba2020-domestic-pig-metals-nigeria\|Buba et al. 2020]]. *Determination of Some Heavy Metals in Kidney, Liver and Muscle of Domestic Pig (Sus scrofa domesticus) in Guyuk Metropolis, Adamawa State, Nigeria*, International Journal of Research and Scientific Innovation | 2020 | Peer-reviewed | NG Pb, Fe, Cd, Ni, Cu occurrence in Domestic pig kidney, liver, and muscle samples bought from ten (10) commercial sellers in Guyuk Metropolis, Adamawa State,... (n=10) |
| 40 | [[sources/dibella2020-augusta-meat-milk-seafood-metals\|Di et al. 2020]]. *Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment*, Frontiers in Public Health 8:273 | 2020 | Peer-reviewed | IT/EU tAs, Cd, Cr, tHg, Ni, Pb, Zn occurrence in Meat, milk, and seafood from the Augusta-Melilli-Priolo industrial area in Southern Italy; seafood pooled across fish, mollusc, and... (n=Seafood from the Augusta Bay/Sicily study area plus terrestrial animal products from 26 farms: 5 bovine milk, 11 sheep/goat milk, 11 beef, and 3 pork samples.) |
| 41 | [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|Shaltout et al. 2020]]. *Prevalence of Some Chemical Hazards in Some Meat Products*, Concepts of Dairy & Veterinary Sciences (Lupine Publishers) 3(4):000166 | 2020 | Peer-reviewed | Pb and Cd by AAS in 60 Egyptian processed meat products (minced meat, beef burger, sausage, luncheon), with luncheon meat carrying the highest concentrations (Pb 0.23 mg/kg, Cd 0.15 mg/kg) and 8.3% exceeding the Egyptian Pb limit |
| 42 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 43 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in 25 Beijing foodstuff types including chicken, pork, and mutton meat, with Pb exceeding limits in chicken and pork and Hg exceeding limits in mutton |
| 44 | [[sources/razanov2019-poultry-silicon-mineral-heavy-metals\|Razanov et al. 2019]]. *Effect of silicon and mineral extract on heavy metals balance and accumulation rate in the muscle tissue of poultry*, Ukrainian Journal of Ecology 9(4):742-748 | 2019 | Peer-reviewed | UA Pb, Cd, Zn, Cu occurrence in Poultry fed raw materials including corn, wheat, oats, barley, and sunflower meal, with a silicon-mineral water extract intervention. (n=Poultry edible parts and diet raw materials from the Right-bank Forest-steppe of Ukraine; per-cell animal counts not extracted.) |
| 45 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 46 | [[sources/gerofke2018-wild-game-lead\|Gerofke et al. 2018]]. *Lead content in wild game shot with lead or non-lead ammunition - Does state of the art consumer health protection require non-lead ammunition?*, PLOS ONE | 2018 | Peer-reviewed | DE Pb occurrence in wild game meat from Germany shot with lead or non-lead ammunition |
| 47 | [[sources/ren2018-crvi-pork-electron-beam\|Ren et al. 2018]]. *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*, Journal of Food Science | 2018 | Peer-reviewed | CN Cr-VI, Cr occurrence in Laboratory experiment using lean, fat, and marbled pork purchased from a market in Hefei, China; pork tissues (2... |
| 48 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | Compiled review of Al concentrations across food matrices including meat, with intake estimates against the EFSA TWI of 1 mg/kg b.w./week and per-food-group contribution shares for Spanish adults and children |
| 49 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 50 | [[sources/zarski2017-mallard-mercury\|Żarski et al. 2017]]. *The Presence of Mercury in the Tissues of Mallards (Anas platyrhynchos L.) from Włocławek Reservoir in Poland*, Biological Trace Element Research | 2017 | Peer-reviewed | PL tHg occurrence in adult mallards from Włocławek Reservoir in Poland |
| 51 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish FSAI Total Diet Study reporting Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn across 141 food samples (1,043 sub-samples) including meat as-consumed, with all Irish dietary exposures below health-based guidance values except marginal Cd at the 97.5th percentile |
| 52 | [[sources/paulsen2015-game-meat-metal-bioaccessibility\|Paulsen et al. 2015]]. *Pilot study on metal contents in meat portions from wild game killed by 'lead-free' rifle bullets*, Journal of Food Safety and Food Quality | 2015 | Peer-reviewed | AT Pb, Cu, Zn occurrence in roe deer, wild boar, and pork meat portions assessed for digested and undigested metal fractions |
| 53 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
| 54 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | Pb, Cd, Cr, and Ni in 18 food types including meat consumed by 57 Baku (Azerbaijan) adults, with Cr exceeding regulatory limits by 4.8–42x and Ni by 1.4–11x in nearly all categories and biomonitoring confirmation in blood and hair |
| 55 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | First Hong Kong Total Diet Study reporting Al, Sb, Cd, Pb, MeHg, Ni, and Sn across 600 composite samples of 150 food items including meat, with all average exposures below health-based guidance values for the general adult population |
| 56 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 57 | [[sources/buculei2012-tin-iron-migration-canned-food-romania\|Buculei et al. 2012]]. *Study regarding the tin and iron migration from metallic cans into foodstuff during storage*, Journal of Agroalimentary Processes and Technologies, 18(4), 299-303 | 2012 | Peer-reviewed | RO Sn, Fe occurrence in Four canned product types (peas, tomato paste, pork in own juice, pork liver pate) packed in three-piece tinplate... (n=4) |
| 58 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | First Hong Kong TDS reporting direct iAs speciation across 600 composite samples including meat (HG-ICP-MS, LOD 3 µg/kg), with average dietary iAs exposure 0.22 µg/kg b.w./day and meat among the non-cereal contributing categories |
| 59 | [[sources/khalafalla2011-beef-carcasses-metals-egypt\|Khalafalla et al. 2011]]. *Heavy metal residues in beef carcasses in Beni-Suef abattoir, Egypt*, Veterinaria Italiana | 2011 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Ni, Cr occurrence in 300 fresh-weight cattle tissue samples from animals slaughtered at the Beni-Suef abattoir in Egypt: 100 muscle, 100 liver,... (n=300) |
| 60 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA CONTAM Pb opinion concluding no safe threshold exists for developmental neurotoxicity or cardiovascular effects; derives BMDLs from blood lead concentrations; meat and organ meats identified among food group contributors to adult and child dietary Pb exposure across European monitoring data |
| 61 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; includes Cd occurrence data for meat and offal across European monitoring, noting that organ meats (particularly kidney and liver) carry substantially higher Cd than muscle meat |
| 62 | [[sources/hunt2009-lead-bullet-fragments-venison\|Hunt et al. 2009]]. *Lead bullet fragments in venison from rifle-killed deer: potential for human dietary exposure*, PLoS ONE | 2009 | Peer-reviewed | US Pb occurrence in Thirty eviscerated white-tailed deer carcasses shot by hunters in Sheridan County, Wyoming with standard lead-core, copper-jacketed rifle bullets... (n=30) |
| 63 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 64 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international maximum levels for Cd, Pb, Hg, iAs, and Sn across food matrices including meat and offal; provides the international regulatory benchmarks against which meat Pb and Cd concentrations are assessed on this page |
| 65 | [[sources/iarc1990-chromium-nickel-welding\|IARC 1990]]. *Chromium, Nickel and Welding*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Volume 49 | 1990 | Government report | INTL Cr, Cr-VI, Ni occurrence in International scientific working group; review of global occupational, environmental, dietary, and experimental data for Cr, Ni, and welding... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 5 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
