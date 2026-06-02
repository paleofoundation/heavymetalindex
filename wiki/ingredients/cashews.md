---
type: ingredient
commodity: cashews
title: "Cashews"
label: "Cashews"
aliases: []
category: nut
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 32], p95_ppb: 80, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [2, 15], p95_ppb: 30, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [4000, 6500], p95_ppb: 9000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [150, 250], p95_ppb: 400, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, shell-permeability, geography, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Cashews

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | EU/PL/CN Cd, Pb, Cr, Ni occurrence in 69 nut samples (16 peanuts, 15 hazelnuts, 15 almonds, 8 cashews, 15 walnuts) from Polish retail market; 13... (n=69) |
| 2 | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | PL/EU Cd, Pb, Cr, Ni occurrence in Commercial nuts (almonds, cashews, hazelnuts, peanuts, walnuts) available on the Polish market (n=69) |
| 3 | [[sources/nkwocha2021-cashew-nuts-metals\|Nkwocha et al. 2021]]. *Chemical composition of raw cashew (Anacardium occidentale) nuts sourced from Enugu State, South Eastern Nigeria*, Journal of Food Safety and Food Quality | 2021 | Peer-reviewed | NG Cd, Pb, tHg occurrence in fresh cashew nut samples from Obukpa-Lejja, Nsukka, Enugu State, Nigeria (n=not reported) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Cashews (Anacardium occidentale kernels) are a documented nickel accumulator. The cashew tree is grown predominantly in West Africa, Vietnam, India, and Brazil, and the cashew kernel concentrates nickel from soil at much higher rates than other tree nuts. Cashew kernel Ni concentrations routinely fall in the 4,000-9,000 µg/kg range, which is an order of magnitude higher than almond, walnut, or hazelnut from comparable soil conditions. The mechanism involves the cashew plant's nickel-uptake-and-translocation behavior; even cashews grown on low-Ni soils carry substantially higher Ni than other tree nuts on the same soil.

The cashew shell oil (a separate product extracted from the shell) carries different metal profiles from the kernel and is sometimes used industrially; this page addresses the food-consumed kernel. The Cat 4 Step 0 lock designates cashews as a higher-contamination row pair to the general nuts-seeds-other row ([[products/cashews]] vs [[products/nuts-seeds-other]]) because of this Ni-accumulator pattern.

The HMTc panel concerns for cashews are dominantly Ni, with secondary Cd from regional soil-Cd inheritance and trace Pb from production and post-harvest handling. [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Ćwiela̧g-Drabek 2025]] documents Polish-market nut Cd/Pb/Cr/Ni and reports the cashew Ni profile relative to other tree nuts; BfR 2022 reports comparable cashew Ni context.

## Ranges by source, region, and variety

Geographic variance: West African cashews (Côte d'Ivoire, Ghana, Nigeria — the largest production region globally), Vietnamese cashews (the largest cashew-processing region), Indian cashews, and Brazilian cashews show some per-origin variance in Ni driven by soil-Ni baseline, but the species-level Ni-accumulator behavior dominates across origins. Variance within an origin is smaller than the order-of-magnitude difference between cashews and non-Ni-accumulating tree nuts.

Per-grade: Roasted, salted, and other consumer-finishing treatments do not change source-kernel Ni. Whole-kernel cashews and broken-piece cashews carry approximately equivalent per-mass Ni.

## Processing effects

Cashew processing (shelling, drying, roasting, salting, packaging) does not change kernel Ni meaningfully. Soaking (a traditional preparation for cashew-based recipes like cashew cream) does not appreciably reduce Ni because Ni is bound within the kernel tissue. Cashew butter and ground cashew products retain the source-kernel Ni proportional to the kernel mass.

Cashew shell oil (a separate industrial product containing anacardic acids and not consumed as food) has its own contamination profile and is not addressed here.

## Ingredient-derivative risk

Cashew derivatives concentrate or dilute Ni according to processing route:

**Cashew butter and cashew paste**: Same per-mass Ni as source kernel.

**Cashew milk**: Diluted Ni proportional to the cashew-fraction in the recipe (typically 2-5 percent cashew by mass, so cashew milk carries ~5-10 percent of source-kernel per-mass Ni). See [[ingredients/plant-milk]] and [[products/plant-milks-non-soy-non-rice]].

**Cashew flour and cashew protein concentrate**: Concentrated per-mass Ni because water has been removed. Cashew-protein dietary supplements carry per-serving Ni at concentrated levels.

**Cashew cream (Indian and Southeast-Asian cuisine)**: Concentrated cashew-fraction (water added) with intermediate Ni per serving.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are limited for the dominant Ni concern because the species itself is the accumulator; geographic-region selection moves the needle within a narrow range. Single-origin sourcing with documented per-lot Ni testing is the operational specification. For Cd and Pb (secondary concerns), low-Cd-Pb production regions and post-harvest practice verification matter more.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the cashew-farm level: cultivar selection (some cashew varieties have been documented at slightly lower Ni accumulation, though the species-level pattern dominates), soil pH management, fertilizer specification. None of these substantially change the cashew Ni position relative to other tree nuts.

**Processing levers** ([[mitigation/processing]]) are limited; Ni is kernel-bound and not removable by processing.

**Formulation levers** ([[mitigation/formulation]]) are the dominant brand-side intervention for products that don't need to be cashew-specific. Substituting almond, walnut, or hazelnut for cashew in nut-blend products substantially reduces per-product Ni. For products that must be cashew-based (cashew milk, cashew butter, cashew-based vegan cheese), the substitution lever is unavailable; per-serving size guidance and population-targeting then become the operational mitigation.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Ni testing on incoming cashew shipments, particularly for products targeting low-Ni diet populations (nickel-sensitive eczema patients, for whom dietary Ni restriction is a clinical recommendation). See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for cashew Ni.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Cd and Pb in tree nuts; the cashew Cd ML is the relevant cap. EU does not currently set a binding Ni ML for cashews; the EFSA opinion on dietary nickel exposure provides reference.
- Codex Alimentarius does not maintain a cashew-specific or general tree-nut Ni ML.
- FDA does not maintain binding action levels for cashew metals.
- California Prop 65 ([[regulations/california-prop65]]) applies Pb, Cd, and Ni MADLs to cashew products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
<!-- END: hmi-page-history -->
