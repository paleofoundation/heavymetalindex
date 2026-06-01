---
type: ingredient
commodity: rice-bran-oil
title: "Rice Bran Oil"
label: "Rice Bran Oil"
aliases: []
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 0.1], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [0, 1], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [seed-source, extraction-method, refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Rice Bran Oil

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
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr occurrence in Systematic review of 35 studies meeting eligibility criteria, including 7 studies on contaminants (PAHs and heavy metals) in... |
| 2 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Rice bran oil is extracted from rice bran (the outer layer of the rice kernel removed during white-rice milling). The bran fraction itself concentrates iAs at 2-4× the whole-grain rice level because arsenic preferentially partitions to the outer layers of the rice kernel during grain development. However, the oil-extraction process selectively partitions lipid-soluble components (triglycerides, vitamin E, oryzanol) into the oil phase while leaving most water-soluble and protein-bound metals in the bran-meal residue. The net effect is that rice bran oil carries substantially lower per-mass heavy-metal load than the source bran (typical Pb 1-5 ppb, Cd 0-0.1 ppb, tAs 1-5 ppb, Ni 0-1 ppb per [[sources/silva2025-edible-oils-health-sustainability|Silva 2025]] and [[sources/scutarasu2023-heavy-metals-foods-beverages|Scutarasu 2023]]). The dominant residual contamination pathway is trace lipid-soluble metal complexes (Ni from natural plant content, trace Pb from environmental sources) and refining-equipment contact.

The HMTc panel concerns for rice bran oil are low across the board (Pb, Cd, Ni at trace levels per the corpus). Rice bran oil is a relatively low-risk oil from a heavy-metal standpoint, particularly compared to the source rice bran ingredient. Refined rice bran oil sold for culinary use typically carries lower levels than crude rice bran oil because the refining steps (degumming, neutralization, bleaching, deodorization) further reduce trace metals.

## Ranges by source, region, and variety

Variance within rice bran oil tracks source-bran origin (US, India, Pakistan, Thailand are major producers), extraction method (solvent-extracted vs cold-pressed: solvent-extracted oils typically carry slightly different trace-metal profiles than mechanically pressed oils because the solvent extraction is more selective for lipids), and refining tier (crude vs refined: refined oils carry lower metals than crude). The 1-5 ppb Pb and tAs ranges in [[sources/silva2025-edible-oils-health-sustainability|Silva 2025]] and [[sources/scutarasu2023-heavy-metals-foods-beverages|Scutarasu 2023]] are commercial-baseline ranges for refined rice bran oil; crude or unrefined product may carry higher values.

## Processing effects

Rice bran oil manufacturing is a refining-intensive operation: rice bran (≈18-22% oil by mass) is extracted via solvent (hexane is standard) or mechanical pressing, then the crude oil undergoes degumming (phospholipid removal), neutralization (free fatty acid removal with caustic), bleaching (clay treatment to remove pigments and trace metals), and deodorization (high-temperature, low-pressure removal of volatiles and odors). Each refining step removes additional trace metals; bleaching with activated bleaching earth is particularly effective at removing trace Ni, Cu, and Fe. The net effect is that refined rice bran oil carries low per-mass metal load relative to the source bran.

## Ingredient-derivative risk

Rice bran oil is itself a refined ingredient. Derivatives include hydrogenated rice bran oil (used in some confectionery and baked-goods applications), winterized rice bran oil (fractionated for higher-melting point and lower-melting point fractions), and rice bran oil with added antioxidants. None of these derivative operations appreciably change the per-mass heavy-metal profile. Rice bran oil is also used as a frying oil and as a salad oil; cooking with rice bran oil does not introduce additional metals from the oil itself.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include refinery-tier specification (refined rice bran oil from major commercial refiners typically meets food-grade trace-metal specifications); supplier audit programs verifying bleaching and deodorization practice; and contractual specification of Pb/Cd ceiling on incoming oil.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-rice cultivation stage; see [[ingredients/rice]] and [[ingredients/rice-bran-oil|this page's source-rice page]] for the upstream interventions that reduce bran iAs and total metals.

**Processing levers** ([[mitigation/processing]]) are the dominant operative lever. Bleaching with activated bleaching earth removes trace Ni, Cu, and Fe; deodorization removes residual volatile metal compounds; multi-stage refining produces lower-trace-metal oil than single-pass refining. Specification of the refining-tier on incoming oil is the practical brand-side intervention.

**Formulation levers** ([[mitigation/formulation]]) include alternative oil substitution where the matrix permits ([[ingredients/vegetable-oil|generic vegetable oil]], [[ingredients/sesame-oil|sesame oil]], olive oil) for specific applications, though rice bran oil's neutral flavor and high smoke point are functional features that limit substitution.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Ni testing on incoming refined oil. ICP-MS is the standard analytical platform. Crude vs refined oil distinction at lot acceptance is the operative QC gate.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification (avoid uncoated metal containers that could introduce migration); oxidation control (oil oxidation does not introduce metals but degrades quality and may concentrate trace metals via volume reduction over long storage).

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set vegetable-oil-specific maximum levels for Pb or Cd; general EU food-safety law applies.
- Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) provides composition and quality standards but does not set heavy-metal-specific limits beyond general contaminant-prevention provisions.
- IOOC and ISO standards for vegetable oil quality include trace-metal specifications (Fe, Cu, Pb) as quality indicators rather than safety thresholds.
- FDA does not set a quantitative action level specific to rice bran oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to rice bran oil products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
<!-- END: hmi-page-history -->
