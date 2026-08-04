---
title: "Oranges"
type: ingredient
commodity: oranges
label: "Oranges"
aliases: [orange, orange-peel]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 6
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
    p95_ppb: 2.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 60.2]
    p95_ppb: 74.1
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [95.7, 861.3]
    p95_ppb: 909.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [3.7, 6.8]
    p95_ppb: 7.0
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
sources: 13
---

# Oranges

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Oranges are one of the lowest-risk food categories for heavy metal accumulation. The thick, waxy peel that characterizes citrus fruit provides a physical barrier that substantially limits atmospheric Pb deposition from reaching the edible flesh; Pb that deposits on the outer peel surface is removed with the peel during normal peeling and juicing operations. Root uptake of Cd and Pb from soil occurs in citrus trees as in other fruit trees, but the transfer factor from root to fruit flesh is low; citrus trees are not recognized accumulators of Pb or Cd, and the physiological buffering of the fruit through the tree's vascular system results in low concentrations in the flesh. Mercury is not a significant concern in citrus grown under typical commercial conditions. Inorganic arsenic is similarly not a significant analyte in citrus flesh. FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw orange (TDS Food 79, n=27) confirm this low-risk profile: Pb, Cd, Cr, and tHg were all at or below detection limits in nearly all samples, with only Ni (max 87 ppb), U (max 6.5 ppb), and tAs (max 6.7 ppb) detected at the high end of the distribution.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Cd | n=6 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 0 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=4 | 0–60.2 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/afrin2020-heavy-metals-fruits-dhaka\|3]] |
| Al | n=1 | 95.7–861.3 | low | — |
| Cr | n=5 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=1 | 3.7–6.8 | low | — |
| U | n=2 | 0 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 79, "Orange, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Orange, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 1.2 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 87 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 6.5 | in profile |
| tAs | 27 | 0 | 6.7 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw orange (n=27) provides the most comprehensive US monitoring baseline in the current corpus and shows that Pb, Cd, Cr, and tHg are effectively absent (at or below detection limits across virtually all samples). Ni was detected at concentrations ranging from 0 to 87 ppb; tAs was detected in some market samples, reaching a maximum of 6.7 ppb. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides additional occurrence context for UK dietary monitoring. Variation between growing regions for the analytes of concern in this category (Ni, tAs at low concentrations) is not documented in the current corpus with sufficient granularity to separate geographic from varietal effects.

## Processing effects

Peel removal before consumption or before juice extraction eliminates the outer tissue that carries the highest surface Pb deposition risk, though Pb in orange flesh is already below detection limits in US monitoring data. Peeling and consumption of the flesh without the peel (normal commercial and home practice) is therefore already the effectively lowest-metal consumption mode for this commodity. Drying to produce dried orange peel (used in confectionery and flavoring) concentrates analytes on a wet weight basis proportionally to moisture loss, and surface deposition on the peel is concentrated rather than removed. Juicing is addressed on the [[ingredients/orange-juice]] page.

## Ingredient-derivative risk

Fresh orange segments and commercially produced orange purée carry approximately equivalent metal profiles on a moisture-corrected basis, since purée production does not concentrate metals beyond the reduction in water content during the puréeing step. Dried orange peel and orange peel powder (used as a food ingredient and flavoring) concentrate any surface Pb and other metals present in the peel; these derivatives warrant separate occurrence characterization and should not be extrapolated from the flesh-based data that dominate the current corpus. Orange extract and orange oil (cold-pressed or steam-distilled) carry negligible metals because the extraction process is selective for lipophilic volatile compounds. Orange juice as a separate product category is covered on [[ingredients/orange-juice]].

## Mitigation options

### Sourcing levers

Given the uniformly low metal concentrations documented in orange flesh, commercial sourcing decisions for fresh oranges are not a material lever for metal-content management in normal agricultural practice. For dried peel or peel-containing derivatives, sourcing from growing regions with lower atmospheric Pb deposition (non-urban, non-industrial areas) reduces peel Pb risk.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard peel removal before consumption or processing of the flesh eliminates the primary surface-deposition risk. For peel-containing products, washing the peel before processing removes the most readily desorbed surface Pb.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the very low metal concentrations in orange flesh documented across monitoring programs, routine heavy metal testing of fresh orange is of low priority for most supply chain applications. For products incorporating orange peel (marmalade, flavoring extracts, supplements), Pb testing of the peel-derived ingredient provides relevant assurance.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh fruit on a wet weight basis, applicable to oranges. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb maximum levels for fresh fruit. No specific iAs or tHg regulatory limit applies to fresh citrus fruit. Orange juice (the derived product) is subject to a more stringent EU Pb limit of 0.050 mg/kg; see [[ingredients/orange-juice]] and [[regulations/eu2023-contaminants-maximum-levels]] for the juice-specific framework.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/okeke2026-calcium-carbide-ripened-fruits-metals\|Okeke et al. 2026]]. *Accumulation of Chromium, Lead and Arsenic in Calcium Carbide Induced Ripened Fruits and Their Possible Human Health Risks in Bauchi, Nigeria*, International Journal of Research and Scientific Innovation | 2026 | Peer-reviewed | NG Cr, Pb, tAs occurrence in Naturally ripened and calcium-carbide-ripened banana, pineapple, and orange purchased from local markets in Bauchi Metropolis, Nigeria; pulverized fruit... (n=6) |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 4 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 5 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions, 14 fruit species, April–October 2019 (n=207) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Orange, raw (n=27); detectable concentrations for Cd, Ni, U, tAs |
| 7 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 8 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | PL/TR/IL Pb, Cd occurrence in Eight species/cultivars of citrus fruit (orange, pomelo, mandarin, lemon, key lime, red/yellow/green grapefruit) purchased at a Polish supermarket,... (n=72) |
| 9 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 10 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Co, Ni, Cd, Pb occurrence in Eleven fruit varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) purchased at 1 kg... (n=308) |
| 11 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type) purchased from four Egyptian governorates (Cairo, Giza,... (n=108) |
| 12 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 13 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 10 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
