---
title: "Lentils"
type: ingredient
commodity: lentils
label: "Lentils"
aliases: [lentil]
category: legume
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Al:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
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
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Lentils

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

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

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chaura2026-phaseolus-multiomics-ionomics\|Chaura et al. 2026]]. *Nutritional and Biochemical Diversity in Beans Accessions from Three Phaseolus Species Using Multiomics Characterization*, ACS Nutrition Science | 2026 | Peer-reviewed | Pb, Cd, tAs, Cr, and tHg in 46 Phaseolus bean accessions (P. vulgaris, P. lunatus, P. acutifolius) from 19 countries by ICP-MS; one P. vulgaris outlier at 3,311 ppb Pb; species-level Cd and As differences |
| 2 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | tAs, Cd, Pb, and Sn occurrence across 163 pooled retail samples representing 17 food groups in the Portuguese TDS (2014–2016 collection), including the legumes and nuts group; legumes show highest Mo concentrations among all food groups |
| 3 | [[sources/valizadeh2023-canned-beans-iran-health-risk\|Valizadeh et al. 2023]]. *Health Risk Assessment of Potentially Toxic Elements in Canned Pinto Beans and Fava Beans Distributed in Gilan Province of Iran*, Scientific Reports (published 2023; open access) | 2023 | Peer-reviewed | tAs, Cd, Pb, Sn, and tHg in 90 canned pinto and fava bean samples from 12 brands in Gilan Province, Iran (ICP-OES/EPA 7473); Hg below LOD in all samples, Cd detected in pinto beans only (max 4 ppb wet weight) |
| 4 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA Ni risk assessment (TDI 13 µg/kg bw/day) drawing on >47,000 European occurrence data points, identifying legumes including lentils among the principal dietary Ni contributors; anchors the acute LOAEL of 4.3 µg/kg bw for Ni-sensitised individuals |
| 5 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook chapter on Cd toxicology (pp. 667–716) covering toxicokinetics, renal tubular endpoint, carcinogenicity, and risk assessment, with food occurrence data for legumes including lentils as dietary Cd contributors |
| 6 | [[sources/bandara2010-cadmium-rice-sri-lanka-crf\|JMRS et al. 2010]]. *Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution*, Toxicology Letters 198(1):33–39 | 2010 | Peer-reviewed | Cd in rice, pulses (lentils and other legumes), and fish from Sri Lanka's North Central Province (ICP-AAS; n≈140 samples), establishing the pulse contribution alongside rice in the dietary Cd load linked to an epidemic of chronic renal failure |
| 7 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week and reporting dietary Cd occurrence across European food groups including legumes; identifies vegetarians — high legume consumers — as an exposure subgroup exceeding the TWI by roughly twofold |
| 8 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international maximum levels for Cd, Pb, Hg, iAs, and Sn across food matrices including pulses and legumes; PTMI of 25 µg Cd/kg bw/month; load-bearing primary source for regulatory limits cited on this page |
| 9 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in 2,221 food samples from the Danish National Food Institute literature survey (AAS/PIXE, 1969–1982), reporting lentils among the high-Ni foods alongside soy, oats, and cocoa, with a load factor analysis quantifying per-food contribution to total dietary Ni intake |
<!-- END: hmi-source-legend -->

