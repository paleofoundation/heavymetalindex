---
title: "Oranges"
type: ingredient
commodity: oranges
label: "Oranges"
aliases: [orange]
category: fruit
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
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
    typical_ppb: [0, 60.2]
    p95_ppb: 74.1
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
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
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 2
---

# Oranges

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Oranges are one of the lowest-risk food categories for heavy metal accumulation. The thick, waxy peel that characterizes citrus fruit provides a physical barrier that substantially limits atmospheric Pb deposition from reaching the edible flesh; Pb that deposits on the outer peel surface is removed with the peel during normal peeling and juicing operations. Root uptake of Cd and Pb from soil occurs in citrus trees as in other fruit trees, but the transfer factor from root to fruit flesh is low; citrus trees are not recognized accumulators of Pb or Cd, and the physiological buffering of the fruit through the tree's vascular system results in low concentrations in the flesh. Mercury is not a significant concern in citrus grown under typical commercial conditions. Inorganic arsenic is similarly not a significant analyte in citrus flesh. FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw orange (TDS Food 79, n=27) confirm this low-risk profile: Pb, Cd, Cr, and tHg were all at or below detection limits in nearly all samples, with only Ni (max 87 ppb), U (max 6.5 ppb), and tAs (max 6.7 ppb) detected at the high end of the distribution.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 (in progress) | — | — | — | — |
| Cd | n=2 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=2 (in progress) | — | — | — | — |
| Ni | n=2 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=2 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 79, "Orange, raw." The normalized row-level data is stored in the structured evidence layer, with per-food/per-analyte summaries in the structured evidence layer. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Orange, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in the structured evidence layer; per-analyte distributions in the structured evidence layer. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 1.2 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 60.2 | 74.1 | 87 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 6.5 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 2.24 | 6.7 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw orange (n=27) provides the most comprehensive US monitoring baseline in the current corpus and shows that Pb, Cd, Cr, and tHg are effectively absent (at or below detection limits across virtually all samples). Ni was detected at concentrations ranging from 0 to 87 ppb (p90 approximately 60 ppb, max 87 ppb); tAs was detected in the upper tail of the distribution (p95 approximately 2 ppb, max 6.7 ppb). The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides additional occurrence context for UK dietary monitoring. Variation between growing regions for the analytes of concern in this category (Ni, tAs at low concentrations) is not documented in the current corpus with sufficient granularity to separate geographic from varietal effects.

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 2 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions, 14 fruit species, April–October 2019 (n=207) |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Orange, raw (n=27); detectable concentrations for Cd, Ni, U, tAs |
| 4 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | PL/TR/IL Pb, Cd occurrence in Eight species/cultivars of citrus fruit (orange, pomelo, mandarin, lemon, key lime, red/yellow/green grapefruit) purchased at a Polish supermarket,... (n=72) |
| 5 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 6 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type) purchased from four Egyptian governorates (Cairo, Giza,... (n=108) |
<!-- END: hmi-source-legend -->

