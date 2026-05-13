---
title: "Water"
type: ingredient
commodity: water
label: "Water"
aliases: [bottled water, still water, carbonated water]
category: water
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
used_in_products: [flavored-waters]
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Water

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

This node is linked from [[products/flavored-waters]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/epa-iris-inorganic-arsenic-2025\|EPA 2025]]. *IRIS Toxicological Review of Inorganic Arsenic*, EPA/635/R-25/005Fa, U.S. Environmental Protection Agency, Integrated Risk Information System | 2025 | Government report | iAs dose-response reference values and updated cancer slope factors, with drinking water as the primary quantitative exposure route anchoring the 2025 IRIS reassessment |
| 2 | [[sources/ufelle2021-metals-chapter\|Ufelle et al. 2021]]. *Toxic Effects of Metals (Chapter 23), in Casarett & Doull's Essentials of Toxicology, Fourth Edition*, Casarett & Doull's Essentials of Toxicology, Fourth Edition. McGraw Hill Education | 2021 | Textbook chapter | Comprehensive multi-metal toxicology reference covering routes of exposure including water for As, Cd, Pb, Hg, Al, Ni, and other HMI-tracked metals |
| 3 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | Ni TDI of 13 µg/kg b.w./day and European Ni occurrence data across food and drinking water, with drinking water identified as a contributing Ni exposure pathway |
| 4 | [[sources/jecfa-82nd-arsenic\|JECFA 2017]]. *Safety Evaluation of Certain Food Additives (Arsenic), 82nd Meeting of JECFA*, WHO Food Additives Series 73 | 2017 | Government report | JECFA arsenic monograph confirming the BMDL01 framework for iAs risk characterization, with drinking water the canonical human exposure route for dose-response anchoring |
| 5 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | European iAs occurrence across 100,000+ data points with water as a significant exposure pathway; European dietary iAs ranges 0.13–0.56 µg/kg b.w./day with children exposed at 2–3× adult per-kg rates |
| 6 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR MRL of 1 mg Al/kg/day for chronic oral Al exposure, with water identified as a background Al exposure route alongside infant formula and food |
| 7 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal (2008) 754, 1-34 | 2008 | Government report | EFSA TWI of 1 mg Al/kg b.w./week, noting water as a contributing Al exposure pathway in addition to food additives and infant formula |
| 8 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | Comprehensive iAs toxicology synthesis with MRL derivation, using drinking water as the primary human exposure route for dose-response anchoring |
| 9 | [[sources/epa-arsenic-drinking-water-mcl\|EPA 2001]]. *EPA Drinking Water Arsenic MCL Rule (10 ppb)*, U.S. Environmental Protection Agency | 2001 | Government report | The US EPA MCL of 10 ppb for iAs in drinking water, the operational regulatory limit directly applicable to municipal and bottled water |
| 10 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd, Pb, Hg, and iAs across food and feed matrices, including limits applicable to natural mineral waters |
| 11 | [[sources/epa-iris-cadmium-1989\|EPA 1989]]. *Cadmium (CASRN 7440-43-9) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 1989 | Government report | EPA IRIS RfD for Cd from drinking water (5×10⁻⁴ mg/kg/day), a route-specific value reflecting higher Cd absorption from water than from food |
<!-- END: hmi-source-legend -->

