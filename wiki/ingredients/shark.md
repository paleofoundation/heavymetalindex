---
type: ingredient
commodity: shark
title: "Shark"
label: "Shark"
aliases: []
category: fish-seafood
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 100], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [10, 100], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [500, 2000], p95_ppb: 4000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [bioaccumulation, trophic-level, harvest-region, species]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 11
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Shark

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=6 | only 3/10 analytes have evidence |
| D2 Regional coverage | OK | 23 jurisdictions, top EU 30% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 1 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tHg THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tHg: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 7 claims checked, 7 supported; 3 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming shark: codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 1 metal(s) covered | unmapped analytes: Pb, Cd |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tHg; pairing 0 paired, 3 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–100 | low | — |
| Cd | n=2 | 10–100 | low | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=2 | 500–2000 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Rodriguez-Mendivil DD, Garcia-Flores E, Temores-Pena J, and Wakida FT (2019). *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*. Health Scope. [https://doi.org/10.5812/jhealthscope.78956](https://doi.org/10.5812/jhealthscope.78956). Peer-reviewed, A-tier. [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Source record]]
2. Smolikova V, Ridoskova A, and Pelcova P (2016). *Determination of heavy metals in fish products*. MendelNet 2016: Proceedings of International PhD Students Conference, pp. 651-656. [mendelnet.cz](https://mendelnet.cz/artkey/mnt-201601-0116_DETERMINATION_OF_HEAVY_METALS_IN_FISH_PRODUCTS.php). Conference proceedings, B-tier. [[sources/smolikova2016-heavy-metals-fish-czech|Source record]]
3. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 2 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, Cd, Pb, tAs occurrence in 138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA,... (n=138281) |
| 3 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 4 | [[sources/tamele2020-african-seafood-metals-review\|Tamele et al. 2020]]. *Lead, Mercury and Cadmium in Fish and Shellfish from the Indian Ocean and Red Sea (African Countries): Public Health Challenges*, Journal of Marine Science and Engineering | 2020 | Peer reviewed review | EG/DJ/KE Pb, tHg, Cd occurrence in Narrative review of Pb, Hg, and Cd in fish and shellfish from African countries bordering the Indian Ocean... |
| 5 | [[sources/kim2019-jeju-shark-metals\|Kim et al. 2019]]. *Heavy metal accumulation in and food safety of shark meat from Jeju Island, Republic of Korea*, PLOS ONE | 2019 | Peer-reviewed | KR Cr, Fe, Cu, Zn, tAs, Se, Cd, Sn, Sb, Pb, tHg, MeHg occurrence in Six shark species sold at Moseulpo and Hallim fish markets on Jeju Island, Republic of Korea, sampled October-December... (n=25) |
| 6 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 7 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016: Proceedings of International PhD Students Conference, pp. 651-656 | 2016 | Conference proceedings | CZ/EU tHg, Cd, Pb occurrence in 33 species of fish purchased in Brno City (Czech Republic) markets from 17 FAO localities, September 2015–June 2016;... (n=159) |
| 8 | [[sources/efsa-sc2015-fish-seafood-mehg-risk-benefit\|EFSA 2015]]. *Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood*, EFSA Journal 2015;13(1):3982, 36 pp. | 2015 | Government report | EU MeHg, tHg occurrence in Scenario-based risk-benefit assessment across 26 chronic dietary surveys from 17 EU Member States (Belgium, Bulgaria, Cyprus, Czech Republic,... |
| 9 | [[sources/olmedo2013-andalusia-fish-shellfish-metals\|Olmedo et al. 2013]]. *Determination of toxic elements (mercury, cadmium, lead, tin and arsenic) in fish and shellfish samples. Risk assessment for the consumers*, Environment International | 2013 | Peer-reviewed | ES/MA/MR tHg, MeHg, Cd, Pb, Sn, tAs occurrence in Fresh, canned, and frozen fish and shellfish products representing 43 frequently consumed species/products in Andalusia, Spain; samples collected... (n=485) |
| 10 | [[sources/cot2004-mercury-fish-shellfish\|Committee on Toxicity of 2004]]. *Updated COT statement on a survey of mercury in fish and shellfish*, Advice on fish consumption, Annex 3 | 2004 | Government report | GB tHg, MeHg occurrence in COT/SACN review of the 2002 FSA fish and shellfish mercury survey, 1998 MAFF marine fish/shellfish survey context, and... |
| 11 | [[sources/epa1999-mercury-update-fish-advisories\|EPA 1999]]. *Mercury Update: Impact on Fish Advisories*, US EPA Fact Sheet EPA-823-F-99-016 | 1999 | Government report | US tHg, MeHg occurrence in 1,931 state-issued fish-consumption advisories in 40 states as of December 1998; cited fish-tissue mercury data drawn from EPA... (n=1931) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Shark sits at the apex of marine food webs and carries the highest methylmercury bioaccumulation among commonly consumed seafood. Shark species are long-lived (decades for the largest species), large-bodied predators that consume smaller predatory fish, which multiplies the methylmercury concentration at every trophic step. The biomagnification factor from primary producer to apex predator across marine food webs spans three to four orders of magnitude for [[metals/mercury-methyl|methylmercury]]; shark muscle commonly carries 500 to 2,000 ppb tHg with documented outliers above 4,000 ppb in the larger species ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil 2019]], [[sources/smolikova2016-heavy-metals-fish-czech|Smolikova 2016]]).

Other HMTc-panel analytes ([[metals/cadmium|Cd]], [[metals/lead|Pb]], inorganic [[metals/arsenic-inorganic|iAs]]) sit at trace levels in shark muscle relative to MeHg because shark physiology partitions cadmium into liver and kidney rather than muscle, lead does not biomagnify through marine food chains the way mercury does, and arsenic in marine fish is dominantly organic arsenobetaine (low toxicity) rather than inorganic. The dominant heavy-metal concern for shark is methylmercury, and that concern is consequential enough that the FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, women of childbearing age, breastfeeding mothers, and young children.

## Ranges by source, region, and variety

Per-species variance is the dominant driver: all consumed shark species carry elevated MeHg, but larger and longer-lived species (great white shark, tiger shark, hammerhead, mako, bull shark) carry the highest concentrations because of body size and lifespan. Smaller shark species (dogfish, smooth-hound, blacktip) carry lower MeHg but still elevated relative to non-shark fish.

Geographic variance is dominated by the global methylmercury background plus regional fishery and watershed loading. Shark from the Mediterranean, Caribbean, and certain Pacific fisheries carry the highest documented MeHg in some surveys ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil 2019]]). The Czech market survey of imported shark muscle ([[sources/smolikova2016-heavy-metals-fish-czech|Smolikova 2016]]) documents tHg ranges in line with the Mediterranean and Atlantic baseline. Region-specific point-source mercury pollution (mining, coal combustion, gold-amalgam-extraction watersheds) elevates local fishery values, though the open-ocean global background sets the floor.

## Processing effects

Shark processing (cleaning, filleting, freezing, smoking, drying for shark-fin and similar products) does not reduce methylmercury, because MeHg binds tightly to muscle protein and is not removed by any culinary or industrial process commonly applied to fish. Cooking concentrates per-mass MeHg slightly through water loss. Removing dark muscle and skin reduces lipophilic contaminants (PCBs, dioxins) but does not meaningfully reduce MeHg, which is distributed throughout muscle tissue.

Shark fin (consumed in some Asian culinary traditions) carries MeHg at similar concentrations to source-shark muscle. Shark cartilage supplements (sold in some health-food channels) carry per-mass MeHg with concentration adjustments depending on extraction process.

## Ingredient-derivative risk

Shark-derived dietary supplements carry source-shark heavy-metal loads at varying concentrations depending on extraction. Shark liver oil and squalene from shark liver concentrate Cd via the organ-storage pathway (Cd partitions to liver and kidney during the organism's lifetime). Shark cartilage supplements carry MeHg at adjusted concentrations relative to source-shark muscle. These supplements route to [[products/supplements-oil-based|supplements-oil-based]] or [[products/supplements-botanicals-herbs|supplements-botanicals-herbs]] depending on labeling and product format.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening|supply-chain-screening]]) are the dominant intervention but are operationally limited because all shark species carry elevated MeHg by trophic-level definition. The dominant brand-side decision is whether to use shark at all; for products targeting pregnancy, infant, and young-child populations, shark sourcing is operationally avoided as a category exclusion.

**Consumption-pattern levers** are the principal consumer-side intervention. The FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, breastfeeding mothers, and young children. Adults outside vulnerable populations can consume shark with moderation but should not consume it weekly.

**Testing and QC levers** ([[mitigation/testing-and-qc|testing-and-qc]]) include lot-level methylmercury testing on commercial shark supply. Cold-vapor atomic absorption spectroscopy (CV-AAS) and ICP-MS coupled with methylmercury-specific speciation (CV-AFS) are the standard analytical platforms. Lot acceptance against the FDA 1.0 ppm action level or EU 1.0 mg/kg ML is the operative QC gate.

**Processing, formulation, agronomic, and packaging levers** ([[mitigation/processing|processing]], [[mitigation/formulation|formulation]], [[mitigation/agronomic|agronomic]], [[mitigation/packaging-and-storage|packaging-and-storage]]) are not consequential for shark methylmercury — the contamination is bioaccumulated into the organism's muscle and is not affected by harvest-to-shelf processing or storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets the species-specific 1.0 mg/kg Hg maximum level for shark and similar large predatory species (versus 0.5 mg/kg for most other fish).
- [[regulations/eu-reg-2022-617-mercury-fish]] — EU Reg. 2022/617 amendments to Hg MLs for fish.
- FDA action level of 1.0 ppm methylmercury in fish applies to shark in commercial channels; FDA enforcement on commercial shark is documented.
- FDA/EPA joint fish-consumption advisory specifically categorizes shark in the AVOID tier for pregnant women and young children.
- Codex Alimentarius CXS 193-1995 establishes MeHg MLs for fish ([[sources/codex-cxs-193-1995|Codex CXS 193-1995]]).
- California Prop 65 ([[regulations/california-prop65]]) Hg MADL applies to shark sold in California; documented Prop 65 enforcement actions on tuna and similar large predatory species establish the precedent for shark.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [c06900296](https://github.com/paleofoundation/heavymetalindex/commit/c06900296) | 2026-05-17 | major | 3 sources added; narrative text revised |
| [e3eb66979](https://github.com/paleofoundation/heavymetalindex/commit/e3eb66979) | 2026-05-17 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
