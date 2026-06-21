---
title: "Banana"
type: ingredient
commodity: banana
label: "Banana"
aliases: [bananas, banana-peel]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: raw-banana-pulp-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 57]
    p95_ppb: 109.9
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [1.5, 13.4]
    p95_ppb: 14.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: raw-banana-pulp-wet-weight
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 12
---

# Banana

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 8/10 HMTc analytes, total n=28 | — |
| D2 Regional coverage | OK | 9 jurisdictions, top BD 20% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, iAs THIN, tAs POOLABLE, tHg CONFIDENT, Ni CONFIDENT, Al THIN, Cr POOLABLE, Sn THIN, U THIN | iAs: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 13 claims checked, 13 supported; 4 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming banana: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020, signes-pastor2018-infants-dietary-arsenic-solid-food |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; pairing 0 paired, 10 single, 0 unpaired | iAs: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Bananas are tropical monocarpic fruits grown in perennial rhizome-based plants across equatorial regions including Central and South America, the Caribbean, West Africa, Southeast Asia, and the Philippines. The banana fruit is enclosed in a thick peel that provides a significant physical barrier between the edible pulp and the external environment, substantially limiting direct surface deposition of atmospheric metals on the flesh. The primary metal exposure route for the pulp is root uptake through the corm and rhizome from surrounding soil, which delivers metals via the vascular system into the developing fruit.

The FDA FY2018-FY2020 TDS data for raw banana (TDS Food 80, n=27) show that bananas are a low-metal-burden commodity by most measures: Pb and Cd fell below their reporting limits in all 27 composites, and total mercury and uranium were below the 1 µg/kg reporting limit in all 27 (left-censored non-detects, not measured zeros, and the sole banana measurement in the corpus for each, so both are carried as reviewed data gaps rather than as a published distribution); total chromium was below the 50 µg/kg reporting limit in all 27; tAs reached a maximum of 3.2 ppb but had a median of zero; Ni was the only analyte with a meaningful distribution, reaching a maximum of 140 ppb and a p90 of 57 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). This is consistent with the general understanding that thick-skinned tropical fruits present low metal risk to consumers, and is corroborated by [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]] (open-market banana, Bahir Dar, Northwest Ethiopia), which reported Pb non-detect, Cd 0.130 ± 0.001 mg/kg dry weight (below the FAO/WHO 0.2 mg/kg limit), and Cr 0.773 ± 0.010 mg/kg dry weight in the edible portion — yielding the lowest hazard index (0.02) of the three fruits surveyed at those markets, against mango at 3.69.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/garuba2024-heavy-metals-commercial-baby-foods\|2]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|3]] |
| Cd | n=5 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/garuba2024-heavy-metals-commercial-baby-foods\|2]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=3 | 0 | medium | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|1]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=3 | 0–57 | high | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0 | low | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|1]] |
| Cr | n=4 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=1 | 1.5–13.4 | low | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The total-mercury and uranium cells were resynthesized on 2026-06-11 on a raw banana-pulp wet-weight basis, the form in which the fruit enters the ingredient supply chain and the basis the FDA Total Diet Study reports for Food 80, "Banana, raw."

Both cells are recorded as reviewed data gaps. The earlier profile reported total mercury at a typical and 95th-percentile of zero at high confidence (n=3) and uranium at zero at high confidence (n=2). Neither figure was supported by a banana-specific measurement. The only banana mercury and uranium data in the corpus are the FDA Total Diet Study composites, in which all 27 banana samples fell below the 1 µg/kg reporting limit for both analytes ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); the reported zeros are left-censored non-detects at that reporting limit, not measured zeros, and a single fully-censored source does not support a published distribution under synthesis discipline.

The prior total-mercury study count rested on two sources that do not measure banana mercury. The systematic review of Bangladeshi fruits reports its only mercury value as a non-detect-to-0.006 mg/kg range for elephant apple (Dillenia indica), a different species, not banana ([[sources/islam2024-heavy-metals-bangladeshi-fruits-review|Islam et al. 2024]]); attributing that value to banana conflated two commodities. The fruit-by-product review names mercury among its analytes but reports no banana mercury figure and notes that mercury speciation is absent throughout ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]). Two further banana datasets in the corpus excluded mercury by design ([[sources/garuba2024-heavy-metals-commercial-baby-foods|Garuba et al. 2024]], which states mercury was excluded; [[sources/loutfy2012-ismailia-foodstuffs-metals|Loutfy et al. 2012]], which did not analyze arsenic or mercury). No banana source in the corpus measures uranium other than the censored FDA cell. With no extractable non-censored banana value for either analyte, both are published as reviewed data gaps rather than as zeros, consistent with the treatment of uranium on [[ingredients/apple]] and [[ingredients/rice]]. Total mercury and total methylmercury are kept distinct; no methylmercury measurement for banana exists in the corpus.

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 80, "Banana, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Banana, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 57 | 109.9 | 140 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 3.2 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 80, n=27) provide a US retail distribution, representing composite samples purchased across multiple US cities and reflecting the blended origin of retail bananas, predominantly from Ecuador, Guatemala, Costa Rica, Colombia, and Honduras ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). No geographic separation by source country is available in TDS data. The [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]] study from Bahir Dar, Ethiopia, provides an African open-market context (banana n=9 composite from 40 individual samples) reporting Pb non-detect, Cd 0.130 ± 0.001 mg/kg dw, and Cr 0.773 ± 0.010 mg/kg dw on a dry-weight basis — confirming the low-Pb, low-Cd banana profile under different soil and agricultural-input conditions, though the dry-weight basis means direct comparison to FDA wet-weight values requires a moisture-content adjustment that the source does not provide. Variety variation (Cavendish versus plantain versus red banana) may produce different metal distributions, but no varietal comparison appears in the current corpus. The FSA UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes banana among measured ingredients with values pending extraction.

## Processing effects

The thick peel is discarded before consumption, removing any metals deposited on the outer surface. This is an effective natural separation step for atmospheric Pb deposition. Processing banana into purée (for baby food) or freeze-dried powder concentrates the pulp fraction; cooking (for banana bread, baked products) does not remove metals. Banana purée for infant food retains the full pulp metal load without the peel's surface fraction. Freeze-drying concentrates metals proportionally to the water removed. Dried banana chips are produced from sliced, sometimes peel-off banana; if the peel is removed before drying, the chip carries only pulp-level metals, but if skin is partially retained in certain products, surface metals carry over.

## Ingredient-derivative risk

The primary derivative forms are baby food purée, banana powder (for sports nutrition and baking), banana chips, and banana in blended fruit pouches. Baby food purées are the highest-priority concern from an infant exposure standpoint, given frequent consumption and the higher metal sensitivity of infants. The low overall metal burden of banana flesh (particularly Pb and Cd near zero in TDS data) makes banana a generally lower-risk ingredient in blended formulations. Banana purée has been examined as part of weaning food arsenate exposure studies ([[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor et al. 2018]] examined weaning foods including fruit-category foods); banana's tAs maximum of 3.2 ppb in TDS data indicates negligible arsenic contribution relative to grain-based ingredients.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peel removal before processing eliminates surface-deposited metals and is standard for all banana purée and derivative production. No additional processing-lever data appear in the current corpus.

### Formulation levers

Banana's low metal burden makes it a favorable ingredient for blending with higher-metal ingredients to dilute the formulation's overall metal concentration; this lever is most relevant for fruit pouch products where banana is combined with cereals, root vegetables, or other higher-burden ingredients.

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 applies the general fresh fruit maximum level to banana: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), wet weight as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). The TDS data showing Pb and Cd at or near detection limits suggest that bananas in US retail would be well within these limits. No US FDA action level for Pb or Cd in fresh banana exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). For processed banana purée in baby food, applicable action levels would derive from the processed product category. No Codex Alimentarius ML for heavy metals in banana appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | Pb and Al in commercial banana-containing US baby food purees with Al exceeding the maximum residue limit |
| 3 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | Bangladeshi banana tAs, Cd, Pb, Cr, Ni, and tHg occurrence within a multi-fruit systematic review, with Pb and Cd above WHO/FAO limits for banana |
| 4 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 5 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions (Seoul, Gyeonggi-do, Chungcheong-do, Jeolla-do, Kyungsang-do, Gangwon-do), 14 fruit... (n=207) |
| 6 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 7 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Banana, raw (n=27); detectable concentrations for Ni, tAs |
| 8 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 9 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 10 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Cr, Ni, Cd, and Pb in banana sampled across 28 Khyber Pakhtunkhwa markets, providing a low-contamination dry-weight baseline |
| 11 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 12 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
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
