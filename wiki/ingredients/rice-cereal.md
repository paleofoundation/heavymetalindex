---
title: "Rice Cereal"
type: ingredient
commodity: rice-cereal
label: "Rice Cereal"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 20]
    p95_ppb: 170
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 60]
    p95_ppb: 190
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [80, 200]
    p95_ppb: 323
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [100, 300]
    p95_ppb: 400
    confidence: high
    n_studies: 5
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [baby-cereals-dry-rice-based]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 10
---

# Rice Cereal

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 5–20 | medium | [[sources/fda-ctz-Pb-babyfood-2025\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/price2023-biokinetic-lead-baby-food-blls\|3]] |
| Cd | n=4 | 10–60 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|2]], [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|3]] |
| iAs | n=6 | 80–200 | high | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|1]], [[sources/fda-iAs-rice-cereal-2020\|2]], [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|3]] |
| tAs | n=5 | 100–300 | high | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|2]], [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|3]] |
| tHg | n=3 | 0–2 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|2]], [[sources/codex-cxs-193-1995\|3]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | n=2 | 0–50 | low | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/baby-cereals-dry-rice-based]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero Pb action levels for baby foods including rice-cereal-based products, regulatory context for Pb limits |
| 2 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Measured Al, tAs, Cd, tHg, Ni, Pb, and Sn in cream of rice and other European baby foods (n=25); Cd and Pb below LOD in all samples |
| 3 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/fda-iAs-rice-cereal-2020\|FDA 2020]]. *Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry*, U.S. Food and Drug Administration, Federal Register Notice (Docket FDA-2016-D-1099) | 2020 | Government report | Establishes the US FDA action level for iAs in infant rice cereals at 100 ppb (dry weight basis), the primary regulatory limit for this commodity |
| 7 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal biomarker study linking rice cereal introduction to elevated urinary iAs species in US infants during weaning transition |
| 8 | [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf\|Chiger et al. 2017]]. *Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment*, Abt Associates report prepared for Healthy Babies Bright Futures | 2017 | Agency report | *[awaiting synthesis]* |
| 9 | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants\|Signes-Pastor et al. 2016]]. *Inorganic arsenic in rice-based products for infants and young children*, Food Chemistry | 2016 | Peer-reviewed | Measured iAs in rice-based infant and young-child products (EU and US markets); primary occurrence data supporting the rice cereal iAs signal |
| 10 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international maximum levels for iAs, Cd, Pb, and Sn applicable to rice-based infant food matrices |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


