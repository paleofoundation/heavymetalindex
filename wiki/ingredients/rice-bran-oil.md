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
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Rice Bran Oil

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 4/10 HMTc analytes, total n=8 | only 4/10 analytes have evidence |
| D2 Regional coverage | OK | 16 jurisdictions, top TW 50% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 4 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, Ni THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); Ni: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 5 claims checked, 5 supported; 2 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd, tAs, Ni |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, Ni; pairing 0 paired, 4 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.75, scale 0.25 | spread 0.75 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1–5 | low | — |
| Cd | n=2 | 0–0.1 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–5 | low | — |
| tHg | data gap | — | — | — |
| Ni | n=2 | 0–1 | low | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/silva2025-edible-oils-health-sustainability|Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks]]<span class="hmi-ref-meta">Silva VdS, Arias LVA, Usberti FCS, Oliveira RAd, and Fakhouri FM · Lipidology · 2025 · [doi.org/10.3390/lipidology2040021](https://doi.org/10.3390/lipidology2040021)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/scutarasu2023-heavy-metals-foods-beverages|Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods]]<span class="hmi-ref-meta">Scutarasu EC and Trincă LC · Foods · 2023 · [doi.org/10.3390/foods12183340](https://doi.org/10.3390/foods12183340)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 2 | [[sources/matei2025-vegetable-oils-romania-gfaas\|Matei et al. 2025]]. *Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania*, Applied Sciences | 2025 | Peer-reviewed | RO Pb, Cd, Cu, Cr, Co, Mn, Ni occurrence in 24 edible vegetable oil samples (three samples each of eight oil types: sunflower, grapeseed, extra virgin olive, organic... (n=24) |
| 3 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr occurrence in Systematic review of 35 studies meeting eligibility criteria, including 7 studies on contaminants (PAHs and heavy metals) in... |
| 4 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 5 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
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
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [ff65dc934](https://github.com/paleofoundation/heavymetalindex/commit/ff65dc934) | 2026-05-17 | major | 2 sources added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
