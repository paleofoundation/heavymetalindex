---
title: "Grapes"
type: ingredient
commodity: grapes
label: "Grapes"
aliases: [grape, grape-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 30
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [0, 6]
    p95_ppb: 15
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-08-09
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 7.0]
    p95_ppb: 8.1
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 44.1
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1966]
    p95_ppb: 2411
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
    typical_ppb: [0, 15.3]
    p95_ppb: 16.5
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
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 16
---

# Grapes

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Grapes (Vitis vinifera and related species) are a vine fruit whose metal burden arises from a combination of root uptake from vineyard soils and surface deposition on the thin skin. Grapevines are deep-rooted perennial crops that access subsoil mineral fractions over decades of growth, and vineyard soils accumulate heavy metals through two principal routes: application of copper-based fungicides (copper can co-carry arsenic impurities and displace other metals in soil chemistry), and in some historical viticultural regions, application of lead arsenate as a pesticide before its prohibition. The berry skin is thin relative to citrus rind or apple cuticle, providing less of a barrier to surface-deposited Pb from atmospheric deposition, road traffic, or spray residues. Total arsenic in grapes reflects both soil arsenic uptake through roots and historical pesticide residue patterns in vineyard soils. The dominant arsenic species in grape tissue is expected to be predominantly inorganic, unlike in marine food, because the organoarsenical metabolism pathways in terrestrial plants produce different speciation profiles than marine organisms. The FDA TDS data for seedless red/green grapes (n=27) shows tAs at a median of 3.7 ppb (max 9 ppb) as the most consistently detectable analyte in this matrix, with Ni detectable in some market samples [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–20 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|4]] |
| Cd | n=4 | 0–6 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|4]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0–7 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]] |
| Ni | n=5 | 0 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0–1966 | low | — |
| Cr | n=2 | 0–40 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]] |
| Sn | n=1 | 0–15.3 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The earlier profile carried grape lead, cadmium, total mercury, and chromium at [0, 0] with a p95 of 0. Those zeros reflected the FDA Total Diet Study reporting the 27 grape samples below their reporting limits (lead below 4 ppb, cadmium below 1 ppb, total mercury below 1 ppb, chromium below 50 ppb) as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Each cell is now treated as left-censored at its reporting limit, with dry-weight sources converted to fresh weight using the grape edible fraction of 0.19.

Commercial fresh-weight surveys detect these metals at low levels. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]] reported Polish fresh grape lead at a mean of 5 ppb and cadmium near 1 ppb, [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]] fresh berries and small fruits lead at 8 to 17 ppb with a P90 of 26 to 38 and mercury at a middle-bound mean of 0.4 to 2.1 ppb, and [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]] Romanian market grape at 18 to 27 ppb lead and about 15 ppb cadmium. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]] detected total chromium in 100 percent of Korean fresh fruit near 31 ppb fresh weight, confirming chromium is present below the reporting limit. The Peruvian red-grape import lead maximum of 84 ppb (Mania) and the Egyptian grape chromium of 1010 to 1060 ppb ([[sources/amer2019-egyptian-fruits-heavy-metals|Amer et al. 2019]]) are carried as elevated import and developing-market context, not as central values. The chen2024 grape entry is analytical-sensor validation on spiked matrix and is excluded from the occurrence synthesis; chromium values are total chromium, not Cr-VI.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 88, "Grapes, seedless, red/green, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Grapes, seedless, red/green, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 110 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 5.2 | in profile |
| tAs | 27 | 0 | 9 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Vineyard origin is the primary source of variation in grape metal concentrations. European wine-producing regions with long agricultural histories and documented legacy pesticide use (particularly in France, Italy, and Spain) carry vineyard soils with elevated Cu (from Bordeaux mixture applications) and, in some historically documented areas, elevated Pb and As from lead arsenate use. New World wine-grape growing regions (California, Chile, Australia, New Zealand, South Africa) generally have lower legacy pesticide contamination burdens in soils but may show elevated natural geogenic arsenic in regions with volcanic geology. Table grape production, which is distinct from wine grape production and is more relevant to the frozen or fresh grape market, is concentrated in California, Chile, and South Africa and tends to involve different viticultural practices and soil contexts than Old World wine vineyards. The FDA TDS data (n=27, seedless red/green raw grapes) reflects the US market table grape distribution, which is dominated by California and Chilean production [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Processing effects

Washing fresh grapes before consumption or before commercial processing removes surface-deposited Pb and Cd from the skin, reducing the contribution of atmospheric deposition to the measured metal burden. Drying grapes to produce raisins removes approximately 70 to 75 percent of the fruit's moisture while retaining essentially all of the metals, resulting in a roughly threefold to fourfold concentration of metals per gram dry weight in raisins relative to fresh grapes. This concentration effect is the most important processing-step risk for derivatives of this commodity. Juicing separates juice from skin and seeds; the juice fraction carries the water-soluble metal fraction while skin and seeds retain the protein-bound and particle-associated fraction. Wine production involves fermentation in contact with skins (for red wines) or pressing first (for white wines), then potential fining with bentonite clay (which adsorbs some metal species), which can reduce final wine metal concentrations relative to the grape juice starting material.

## Ingredient-derivative risk

Raisins are the most significant metal-concentrating derivative of grapes. The moisture removal during drying concentrates all metals in proportion to the dry-weight ratio; a raisin with 15 percent moisture versus a fresh grape with 80 percent moisture would carry approximately fivefold higher metal concentration per gram on a wet-weight basis. Raisins used as ingredients in breakfast cereals, trail mixes, granola bars, and baked goods contribute metals proportional to their weight fraction, and their higher concentration per gram relative to fresh grapes makes them a more consequential metal contributor in composite products. Grape juice, wine, grape seed extract, and grape skin extract each partition grape metals differently; grape seed extract concentrates metal-binding tannins and may carry higher metal loads per gram than juice.

## Mitigation options

### Sourcing levers

Specifying table grape origin from producers with documented soil metal testing and from regions without documented legacy lead arsenate application history reduces the expected Pb and As burden. For raisin products specifically, the concentration effect means that sourcing specification has amplified importance: the same soil-level difference in Pb or As translates to a fivefold larger absolute difference per gram in the dried product.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing grapes before drying or juicing reduces surface-deposited metal contamination. For raisin production, washing the fresh grape before drying removes surface Pb and other atmospheric deposits before they are concentrated by moisture loss. The effect magnitude for washing-then-drying is not characterized in the current corpus.

### Formulation levers

In composite food products that include raisins as an ingredient, substituting with lower-metal fruit pieces (apple, pear, lower-risk dried fruits) reduces the metal contribution from the dried fruit fraction if the arsenic or lead burden of the raisin supply is a concern.

### Testing and QC levers

Given the concentration effect in raisins, lot-level ICP-MS testing for Pb, As, and Cd on incoming raisin batches is more productive than testing fresh grapes for most food manufacturing applications. For fresh grape supply chains, testing at the first point of import or first domestic pack-house is the most efficient point of control.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in fresh grapes is 0.10 mg/kg wet weight and for Cd it is 0.050 mg/kg wet weight. For dried grapes (raisins), the applicable limit in the EU food contaminant regulations accounts for the concentration effect by applying limits to the product as sold (which is at raisin moisture content, not fresh grape moisture content); the dry-weight basis distinction is critical when comparing raisin measurements to fresh grape regulatory limits. There are no specific US FDA action levels for metals in fresh or dried grapes.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Concentration of cadmium and lead in vegetables and fruits]]<span class="hmi-ref-meta">Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I · Scientific Reports · 2021 · [doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/amer2019-egyptian-fruits-heavy-metals|Exposure assessment of heavy metal residues in some Egyptian fruits]]<span class="hmi-ref-meta">Amer MM, Sabry BA, Marrez DA, Hathout AS, and Fouzy ASM · Toxicology Reports · 2019 · [doi.org/10.1016/j.toxrep.2019.06.007](https://doi.org/10.1016/j.toxrep.2019.06.007)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/chen2024-trimodal-hg-food-sensor\|Chen et al. 2024]]. *Design and fabrication of self-calibration colorimetric/fluorescence/SERS tri-modal optical sensor for highly rapid and accurate detection of mercury ions in foods*, Food Chemistry: X | 2024 | Peer-reviewed | tHg sensor validation using spiked grape matrix; no primary occurrence data — analytical-method context confirming tHg detection in grape at method LOQ range |
| 3 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions, 14 fruit species, April–October 2019 (n=207) |
| 4 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galati County, Romania: 45 from commercial markets, 35 from amateur farmers; collected... (n=80) |
| 5 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Grapes, seedless, red/green, raw (n=27); detectable concentrations for Ni, U, tAs |
| 7 | [[sources/durdjic2021-lead-isotopes-wine-origin\|Đurđić et al. 2021]]. *Is a Lead Isotope Ratios in Wine Good Marker for Origin Assessment?*, Frontiers in Chemistry | 2021 | Peer-reviewed | RS Pb occurrence in Fifty-nine red wine samples from four Serbian regions — Vojvodina (n=12), Belgrade (n=22), Central Serbia (n=14) and South... (n=59) |
| 8 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 9 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 10 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 11 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Ni, Cd, Pb occurrence in Fruit samples of 11 varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) collected from... (n=308) |
| 12 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 13 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type) purchased from four Egyptian governorates (Cairo, Giza,... (n=108) |
| 14 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 15 | [[sources/bora2015-vineyard-wine-heavy-metals-romania\|F-D et al. 2015]]. *Vertical distribution and analysis of micro-, macroelements and heavy metals in the system soil-grapevine-wine in vineyard from North-West Romania*, Chemistry Central Journal | 2015 | Peer-reviewed | RO Pb, Cd, Cu, Zn, Ni, Co occurrence in Three Vitis vinifera cultivars (Feteasca albă, Feteasca regală, Riesling italian) grown in one 4-ha vineyard at Turulung (Satu... (n=3) |
| 16 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | PL Pb, Cd occurrence in Apples, plums, strawberries, raspberries, and white grapes from allotment gardens in Lublin city center and surrounding rural areas,... (n=108) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10bb2e5ec](https://github.com/paleofoundation/heavymetalindex/commit/10bb2e5ec) | 2026-08-09 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
<!-- END: hmi-page-history -->
