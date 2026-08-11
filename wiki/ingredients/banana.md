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
    typical_ppb: [0, 4]
    p95_ppb: 4
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 3.2]
    p95_ppb: 3.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 57]
    p95_ppb: 109.9
    confidence: medium
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
    typical_ppb: [0, 40]
    p95_ppb: 50
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [1.5, 13.4]
    p95_ppb: 14.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 13
---

# Banana

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Bananas are tropical monocarpic fruits grown in perennial rhizome-based plants across equatorial regions including Central and South America, the Caribbean, West Africa, Southeast Asia, and the Philippines. The banana fruit is enclosed in a thick peel that provides a significant physical barrier between the edible pulp and the external environment, substantially limiting direct surface deposition of atmospheric metals on the flesh. The primary metal exposure route for the pulp is root uptake through the corm and rhizome from surrounding soil, which delivers metals via the vascular system into the developing fruit.

The FDA FY2018-FY2020 TDS data for raw banana (TDS Food 80, n=27) show that bananas are a low-metal-burden commodity by most measures: Pb, Cd, Cr, U, and tHg were all reported at zero across all or nearly all samples; tAs reached a maximum of 3.2 ppb but had a median of zero; Ni was the only analyte with a meaningful distribution, reaching a maximum of 140 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). This is consistent with the general understanding that thick-skinned tropical fruits present low metal risk to consumers, and is corroborated by [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]] (open-market banana, Bahir Dar, Northwest Ethiopia), which reported Pb non-detect, Cd 0.130 ± 0.001 mg/kg dry weight (below the FAO/WHO 0.2 mg/kg limit), and Cr 0.773 ± 0.010 mg/kg dry weight in the edible portion — yielding the lowest hazard index (0.02) of the three fruits surveyed at those markets, against mango at 3.69.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/mekonnen2024-ethiopia-fruit-metals\|3]] |
| Cd | n=3 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/mekonnen2024-ethiopia-fruit-metals\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 0–3.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]] |
| Ni | n=3 | 0–57 | medium | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0 | low | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|1]] |
| Cr | n=2 | 0–40 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]] |
| Sn | n=1 | 1.5–13.4 | low | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The earlier profile recorded lead, cadmium, total arsenic, total mercury, and chromium at [0, 0] with a p95 of 0. Those zeros were an artifact of the FDA Total Diet Study reporting below-limit results as literal zeros. In the FY2018 to FY2020 dataset banana lead sat below the 4 ppb reporting limit in all 27 samples, cadmium below 1 ppb, total mercury below 1 ppb, chromium below 50 ppb, and total arsenic below the 3 ppb limit in 26 of 27 samples with a single 3.2 ppb detect ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Each cell is now treated as left-censored at its reporting limit, and dry-weight sources are converted to fresh weight by multiplying by the banana edible fraction of 0.26.

Independent fresh-weight surveys confirm banana is a low-burden commodity without being empty. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]] detected total chromium in every Korean fresh-fruit sample at an overall mean near 31 ppb fresh weight, and [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]] placed non-berry fresh-fruit mercury at a middle-bound mean of 0.3 to 1.7 ppb. Higher values from [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]], whose Ethiopian open-market banana reported 0.130 mg/kg cadmium and 0.773 mg/kg chromium on a dry-weight basis (about 34 and 201 ppb fresh weight after conversion), and the above-limit values in the [[sources/islam2024-heavy-metals-bangladeshi-fruits-review|Islam et al. 2024]] Bangladeshi review, are carried as elevated developing-market context rather than as the central tendency. Chromium values are total chromium, not Cr-VI.

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 80, "Banana, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Banana, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 140 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 3.2 | in profile |
| tHg | 27 | 0 | 0 | in profile |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/mekonnen2024-ethiopia-fruit-metals|Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia]]<span class="hmi-ref-meta">Mekonnen BA, Yizengaw MG, Kassahun H, and Ketema G · International Journal of Food Science · 2024 · [doi.org/10.1155/2024/6677324](https://doi.org/10.1155/2024/6677324)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/islam2024-heavy-metals-bangladeshi-fruits-review|A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks]]<span class="hmi-ref-meta">Islam MH, Nowar A, Islam S, Nayan MM, and Jubayer A · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241309280](https://doi.org/10.1177/11786302241309280)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Infants' dietary arsenic exposure during transition to solid food]]<span class="hmi-ref-meta">Signes-Pastor AJ, Cottingham KL, Carey M, Sayarath V, Palys T, Meharg AA, et al. · Scientific Reports 8(1):7114 · 2018 · [doi.org/10.1038/s41598-018-25372-1](https://doi.org/10.1038/s41598-018-25372-1)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/okeke2026-calcium-carbide-ripened-fruits-metals\|Okeke et al. 2026]]. *Accumulation of Chromium, Lead and Arsenic in Calcium Carbide Induced Ripened Fruits and Their Possible Human Health Risks in Bauchi, Nigeria*, International Journal of Research and Scientific Innovation | 2026 | Peer-reviewed | NG Cr, Pb, tAs occurrence in Naturally ripened and calcium-carbide-ripened banana, pineapple, and orange purchased from local markets in Bauchi Metropolis, Nigeria; pulverized fruit... (n=6) |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | Pb and Al in commercial banana-containing US baby food purees with Al exceeding the maximum residue limit |
| 4 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | Bangladeshi banana tAs, Cd, Pb, Cr, Ni, and tHg occurrence within a multi-fruit systematic review, with Pb and Cd above WHO/FAO limits for banana |
| 5 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 6 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions (Seoul, Gyeonggi-do, Chungcheong-do, Jeolla-do, Kyungsang-do, Gangwon-do), 14 fruit... (n=207) |
| 7 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 8 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Banana, raw (n=27); detectable concentrations for Ni, tAs |
| 9 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 10 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 11 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Cr, Ni, Cd, and Pb in banana sampled across 28 Khyber Pakhtunkhwa markets, providing a low-contamination dry-weight baseline |
| 12 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 13 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10bb2e5ec](https://github.com/paleofoundation/heavymetalindex/commit/10bb2e5ec) | 2026-08-09 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
<!-- END: hmi-page-history -->
