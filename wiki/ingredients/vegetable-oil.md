---
type: ingredient
commodity: vegetable-oil
title: "Vegetable Oil"
label: "Vegetable Oil"
aliases: [palm-oil, oilseeds]
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 20], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [0, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [0.1, 0.5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [seed-source, extraction-method, refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Vegetable Oil

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1–20 | low | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|1]] |
| Cd | n=2 | 0–5 | low | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–10 | low | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|1]] |
| tHg | n=2 | 0.1–0.5 | low | [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland\|Brodziak-Dopierała et al. 2023]]. *Mercury Exposure from the Consumption of Dietary Supplements Containing Vegetable, Cod Liver, and Shark Liver Oils*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | PL/EU tHg occurrence in 36 dietary supplement preparations purchased in Poland (pharmacies, drugstores, herbal shops): 18 vegetable oils, 12 cod liver oils,... (n=36) |
| 2 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet; adults n=1,500 (NANS, age 18+, 2008–2010) and children n=594... (n=141) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Vegetable oil is the aggregate ingredient label for edible oils extracted from oilseeds (soybean, canola/rapeseed, sunflower, safflower, corn, cottonseed) and oil-bearing fruits (palm, palm-kernel, olive, coconut). Each source oil carries the source-plant's heavy-metal profile partitioned between the lipid (oil) and non-lipid fractions via the oil-extraction process. Because most heavy metals (Pb, Cd, Hg, Al, Ni, Cr) are water-soluble and protein-bound rather than lipid-soluble, oil-extraction selectively retains them in the meal residue rather than the oil. The net effect is that vegetable oils generally carry low per-mass heavy-metal load (Pb 1-20 ppb, Cd 0-5 ppb, tHg 0.1-0.5 ppb per [[sources/fsai2016-total-diet-study-ireland-2012-2014|FSAI 2016]] Irish TDS and [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland|Brodziak-Dopierała 2023]] Polish oil supplement survey).

Residual contamination in finished vegetable oil comes from three pathways: trace lipid-soluble metal complexes (organic Hg compounds, Ni-fatty-acid complexes), processing-equipment contact (extraction equipment, refining vessels), and packaging migration (oil stored in metal containers can pick up trace metals). Refined vegetable oils carry lower per-mass metals than crude oils because the refining steps (degumming, neutralization, bleaching, deodorization) further reduce trace contamination. The HMTc panel concerns for vegetable oil are generally low, with Hg as the most-monitored analyte specifically for cod-liver, shark-liver, and other animal-derived oils per [[sources/brodziak-dopierala2023-mercury-oil-supplements-poland|Brodziak-Dopierała 2023]].

## Ranges by source, region, and variety

Variance within vegetable oil tracks source-plant species (soybean, canola, sunflower, palm, olive, coconut, corn — each with different baseline metal profiles), source-plant origin region (tropical palm production vs temperate soybean/sunflower production drive different baselines), extraction method (solvent vs cold-pressed vs expeller-pressed), and refining tier (crude vs refined). Olive oil from documented Mediterranean origin carries the typical olive-source Pb/Cd profile; palm oil from tropical production carries source-palm-fruit metals; soybean oil from US Midwest production carries source-soybean metals. The Irish TDS in [[sources/fsai2016-total-diet-study-ireland-2012-2014|FSAI 2016]] documents the Irish-market commercial vegetable oil baseline.

## Processing effects

Vegetable oil manufacturing involves seed cleaning, crushing or flaking, oil extraction (solvent extraction with hexane is standard for commodity-scale; cold-press and expeller-press methods for premium products), filtering, and refining. Each refining step removes additional contaminants: degumming removes phosphatides and trace metal-phosphatide complexes; neutralization removes free fatty acids and some trace metals; bleaching with activated bleaching earth is particularly effective at removing trace Ni, Cu, and Fe; deodorization removes volatile compounds and trace volatile metal compounds. Refined oil carries lower per-mass metals than crude oil from the same source.

## Ingredient-derivative risk

Vegetable oil derivatives span hydrogenated and partially-hydrogenated oils, fractionated oils (high-melting and low-melting fractions for confectionery and baked-goods applications), interesterified oils, and structured lipids. None of these derivative operations appreciably change the per-mass heavy-metal profile. Vegetable oil is the primary fat ingredient in countless processed foods, infant formulas, frying applications, salad dressings, margarine, and shortening.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include refinery-tier specification (refined vegetable oil from major commercial refiners typically meets food-grade trace-metal specifications); supplier audit programs verifying bleaching and deodorization practice; and contractual specification of Pb/Cd/Hg ceiling on incoming oil. Source-plant origin specification (avoidance of industrial-region or atmospheric-deposition-affected production areas) is a secondary lever.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the oilseed-cultivation stage; see per-oilseed pages ([[ingredients/soy|soy]], [[ingredients/maize|corn]], etc.) for upstream interventions.

**Processing levers** ([[mitigation/processing]]) are dominant: refining-stage interventions (bleaching, deodorization) remove substantial trace metals; specification of multi-pass refining vs single-pass refining produces lower-trace-metal oil.

**Formulation levers** ([[mitigation/formulation]]) include alternative oil substitution within the same functional class (canola vs sunflower vs corn vs soybean for high-smoke-point frying applications); each carries slightly different baseline metals.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Ni, Hg testing on incoming refined oil. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification (avoid uncoated metal containers); glass, PET, or food-grade-lined containers maintain finished-oil quality and prevent metal migration during storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set vegetable-oil-specific maximum levels for Pb, Cd, or Hg; general EU food-safety law applies.
- Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) provides composition and quality standards but does not set heavy-metal-specific limits beyond general contaminant-prevention provisions referencing [[sources/codex-cxs-193-1995|CXS 193-1995]].
- IOOC (International Olive Oil Council) and ISO standards for vegetable oil quality include trace-metal specifications (Fe, Cu, Pb) as quality indicators.
- FDA does not set a quantitative action level specific to vegetable oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to vegetable-oil products sold in California.


