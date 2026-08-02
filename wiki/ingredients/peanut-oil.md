---
type: ingredient
commodity: peanut-oil
title: "Peanut Oil"
label: "Peanut Oil"
aliases: []
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 30], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [5, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [5, 90], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
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
wiki_doi: null
updated: 2026-05-16
sources: 8
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Peanut Oil

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=6 | only 3/10 analytes have evidence |
| D2 Regional coverage | OK | 21 jurisdictions, top CN 50% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 4 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 3 claims checked, 3 supported; 3 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming peanut-oil: codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd, tAs |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs; pairing 0 paired, 3 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–30 | low | — |
| Cd | n=2 | 5–10 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 5–90 | low | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran]]<span class="hmi-ref-meta">Mehri F, Heshmati A, Talebi Ghane E, Khazaei M, Mahmudiono T, and Fakhri Y · BMC Public Health · 2024 · [doi.org/10.1186/s12889-023-17624-1](https://doi.org/10.1186/s12889-023-17624-1)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population]]<span class="hmi-ref-meta">Ashraf MW · Asian Journal of Chemistry (Uncorrected Proof) · 2012</span><span class="hmi-ref-tag">Review</span>
3. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr, Al, Cu, Zn, Fe, Mn, V, tHg occurrence in Systematic review of 35 studies meeting eligibility criteria (of 125 articles screened), including 7 studies on contaminants (PAHs... |
| 2 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 3 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | IR Pb, Cd, tAs, Fe, Zn occurrence in Traditional and industrial edible vegetable oils (peanut, sunflower, olive, sesame) from Hamadan, western Iran, 2022; n=20 traditional +... (n=40) |
| 4 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 5 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | SA Pb, Cd, tAs, Cu, Zn, Fe, Mn occurrence in 161 edible vegetable oil samples (32 corn, 28 sunflower, 21 soybean, 19 sesame, 17 rapeseed, 17 peanut, 27... (n=161) |
| 6 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 7 | [[sources/fsanz2008-cadmium-peanuts-assessment\|Zealand 2008]]. *Final Assessment Report - Application A552: Cadmium in peanuts*, Food Standards Australia New Zealand Final Assessment Report 12-08 | 2008 | Government report | AU/NZ/CN Cd occurrence in FSANZ regulatory assessment using Australian AQIS 2001-2006 imported-food cadmium tests, USFDA Total Diet Study 1991-2004 peanut values, Chinese... |
| 8 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Peanut oil is extracted from peanut/groundnut (Arachis hypogaea), a legume that grows underground (hence "groundnut"). The subterranean fruiting habit makes peanuts more soil-contact than aerial-fruiting crops, which elevates Pb and Cd uptake potential relative to aerial legumes. Peanut oil sits at the higher end of the per-vegetable-oil Pb and Cd range (Pb 10-30 ppb, Cd 5-10 ppb per [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri 2024]] Iranian Hamadan PTE survey and [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]] Saudi Arabia vegetable oils survey) because the source peanut's elevated soil-uptake metal load partially partitions into the oil fraction during extraction. The tAs range of 5-90 ppb in the Iranian and Saudi market surveys reflects upper-end emerging-market product; better-controlled commercial supply sits at the lower end.

The HMTc panel concerns for peanut oil are Pb and Cd (elevated relative to most other vegetable oils), and trace tAs in some emerging-market supply. Refined peanut oil sold for culinary frying applications (high smoke point) carries lower metals than crude peanut oil.

## Ranges by source, region, and variety

Variance within peanut oil tracks source-peanut origin region (Chinese, Indian, US southeastern, Argentine, African peanut production — each with different soil-uptake baselines), peanut cultivar, extraction method (cold-press vs solvent extraction), and refining tier (crude vs refined). The Iranian and Saudi market surveys document elevated levels in some imported peanut oils; US-market commercial peanut oil sits at lower levels reflecting tighter upstream supply specifications and refining practice.

## Processing effects

Peanut oil manufacturing involves peanut cleaning, shelling, optional roasting, crushing, oil extraction (solvent extraction for commodity-scale; expeller-press for premium cold-pressed product), filtering, and refining. Each refining step removes additional trace metals. Crude unrefined peanut oil retains more of the source-peanut metal load; fully refined peanut oil sits at lower levels.

## Ingredient-derivative risk

Peanut oil is used as a frying oil (high smoke point makes it favored for deep-frying applications), in salad dressings, in Asian cuisine, and in industrial baking. Derivatives include hydrogenated peanut oil and fractionated peanut oil. Peanut oil is one ingredient in the broader [[ingredients/peanut-butter|peanut-butter]] and [[ingredients/peanuts|peanut]] commodity family; the source-peanut also routes into peanut butter, peanut flour, and roasted-peanut products that carry the full source-peanut Pb/Cd profile (not partitioned to lipid/non-lipid fractions like the oil).

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-peanut origin specification favoring documented low-soil-Pb/Cd production regions; refinery-tier specification (refined vs crude); and contractual specification of Pb/Cd ceiling on incoming oil.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the peanut-cultivation stage. Soil pH management; cultivar selection (Cd-low peanut cultivars are under agronomic research); avoidance of high-Cd organic amendments; and remediation of contaminated soils in peanut-growing regions per [[ingredients/peanuts|peanut]].

**Processing levers** ([[mitigation/processing]]) include refining-stage interventions (bleaching, deodorization, multi-pass refining); specification of refined-only product for brand-side incoming oil.

**Formulation levers** ([[mitigation/formulation]]) include alternative high-smoke-point oil substitution ([[ingredients/sesame-oil|sesame oil]], canola oil, [[ingredients/rice-bran-oil|rice bran oil]], avocado oil) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, tAs testing on incoming peanut oil against EU 2023/915 maximum levels and brand internal specifications. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification; glass, PET, or food-grade-lined containers for finished product.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set peanut-oil-specific maximum levels for Pb or Cd; general EU food-safety law applies; oilseed-related contaminant provisions reference [[sources/codex-cxs-193-1995|CXS 193-1995]].
- Codex Alimentarius CXS 210-1999 (Named Vegetable Oils) provides composition standards for peanut oil.
- FDA does not set a quantitative action level specific to peanut oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to peanut-oil products sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [ba5c99128](https://github.com/paleofoundation/heavymetalindex/commit/ba5c99128) | 2026-05-17 | major | 3 sources added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
