---
type: ingredient
commodity: beverages
title: "Beverages"
label: "Beverages"
aliases: []
category: beverage
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-14
sources: 13
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Beverages

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | OK | 14 jurisdictions, top NG 23% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 3 drivers, 1 upstream source(s) | — |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 0 claims checked, 0 supported; 0 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | GAP | 0 cited lever(s), 5 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 1 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.75, scale 0.00 | spread 0.75 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/winiarska-mieczan2022-cd-pb-instant-coffee-poland\|Winiarska-Mieczan et al. 2022]]. *Cadmium and Lead Concentration in Drinking Instant Coffee, Instant Coffee Drinks and Coffee Substitutes: Safety and Health Risk Assessment*, Biological Trace Element Research | 2022 | Peer-reviewed | PL Cd, Pb occurrence in 49 instant coffee, instant coffee drink, and coffee-substitute products bought in grocery stores in Chelm, Zamosc, and Lublin,... (n=49) |
| 2 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 3 | [[sources/deoliveira2018-traditional-herbal-teas-metals\|Oliveira et al. 2018]]. *Metal concentrations in traditional and herbal teas and their potential risks to human health*, Science of the Total Environment | 2018 | Peer-reviewed | US Al, tAs, Cd, Cr, Pb occurrence in Forty-seven tea products collected in the US market, covering 16 herbal teas, 16 black teas, 11 green teas,... (n=47) |
| 4 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 5 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 6 | [[sources/adegbola2015-nigeria-snacks-drinks-metals\|Adegbola et al. 2015]]. *Evaluation of some heavy metal contaminants in biscuits, fruit drinks, concentrates, candy, milk products and carbonated drinks sold in Ibadan, Nigeria*, International Journal of Biological and Chemical Sciences | 2015 | Peer-reviewed | NG Ca, Cr, Cu, Fe, Pb, Cd occurrence in Twelve sweet and milk-sweet brands, six biscuit brands, eleven fruit and flavoured concentrate brands, and five liquid drink... (n=34) |
| 7 | [[sources/godwill2015-soft-drinks-metals-nigeria\|Godwill et al. 2015]]. *Determination of some soft drink constituents and contamination by some heavy metals in Nigeria*, Toxicology Reports | 2015 | Peer-reviewed | NG Cd, Pb, tHg occurrence in Twenty-six soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State, Nigeria; sample names are... (n=26) |
| 8 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn occurrence in Hong Kong general adult population; 150 TDS food items purchased on 4 occasions (March 2010 to February 2011),... (n=1800) |
| 9 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | HK iAs, tAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
| 10 | [[sources/maduabuchi2007-nigeria-beverages-arsenic-chromium\|Maduabuchi et al. 2007]]. *Arsenic and Chromium in Canned and Non-Canned Beverages in Nigeria: A Potential Public Health Concern*, International Journal of Environmental Research and Public Health | 2007 | Peer-reviewed | NG tAs, Cr occurrence in Fifty commonly consumed canned and non-canned beverages purchased in Nigeria in March 2005: 21 canned beverages and 29... (n=50) |
| 11 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 12 | [[sources/buchet1983-belgium-duplicate-meal-metals\|Buchet et al. 1983]]. *Oral daily intake of cadmium, lead, manganese, copper, chromium, mercury, calcium, zinc and arsenic in Belgium: a duplicate meal study*, Food and Chemical Toxicology | 1983 | Peer-reviewed | BE Cd, Pb, Mn, Cu, Cr, tHg, Ca, Zn, tAs occurrence in One hundred twenty-four 24-hour duplicate meals and beverages collected from Brussels, Liege, Charleroi, and a Brussels hospital kitchen... (n=124) |
| 13 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for non-water beverages (beverages other than drinking water, which is at [[ingredients/water]]). The category spans Cat 5 beverages and several Cat 1 infant beverage rows. See per-beverage ingredient pages for synthesis: [[ingredients/coffee]], [[ingredients/tea]] / [[ingredients/camellia-sinensis]], [[ingredients/fruit-juice]], [[ingredients/grape-juice]], [[ingredients/mango-juice]], [[ingredients/orange-juice]], [[ingredients/apple-juice]], [[ingredients/vegetable-juice]], [[ingredients/plant-milk]], [[ingredients/sports-drink-bases]], [[ingredients/fermented-beverage-bases]], [[ingredients/soft-drink-bases]].

Beverages inherit heavy metals through three pathways: source ingredient (fruit, vegetable, grain, plant-base, tea/coffee leaf), processing water (the dominant pathway in low-source-ingredient beverages like sports drinks and flavored waters), and packaging contact (can-lining Sn migration, aluminum-foil-carton Al migration, plastic-bottle migration for some specific contaminants).

The HMTc panel concerns vary by beverage class. Apple juice has documented Pb concerns; rice-based beverages have iAs concerns; soy plant milk has Al/Ni concerns; tea has Al concerns; canned beverages have Sn concerns.

## Ranges by source, region, and variety

Variance within "beverages" is enormous because the category spans completely different ingredient-input profiles. See per-beverage pages for sub-category synthesis. The Cat 5 Step 0 lock splits beverages into 9 product rows ([[products/fruit-juices-general]], [[products/vegetable-juices]], [[products/plant-milks-general]] split further into 3 row variants, [[products/flavored-waters]], [[products/sports-energy-drinks]], [[products/tea-conventional]], [[products/coffee]], [[products/soft-drinks-carbonated-beverages]], [[products/kombucha-and-fermented-beverages]]) to manage this variance.

## Processing effects

Beverage processing covers: extraction (juicing, brewing, steeping), formulation (mixing with water, sweeteners, flavors), heat treatment (pasteurization, UHT, retort), carbonation, packaging. Each step has different metal-affecting potential. See per-beverage pages.

## Ingredient-derivative risk

Beverage concentrates and powders carry per-mass metal at multiples of the as-consumed beverage because water has been removed. Beverage powders (drink mixes, instant coffee, dried tea) carry concentrated source-ingredient metals.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the per-source-ingredient level: low-iAs rice for rice-based beverages, low-Pb apple for apple juice, low-Al tea origin for tea-based beverages, etc.

**Processing levers** ([[mitigation/processing]]) include processing-water specification (the dominant lever for water-dominant beverages like sports drinks, flavored waters, and sodas), extraction-method specification, and packaging-material specification.

**Formulation levers** ([[mitigation/formulation]]) include source-ingredient substitution within the beverage class (oat-based vs rice-based plant milk for low-iAs; non-tea-based vs tea-based for low-Al).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level finished-beverage testing against the applicable regulatory cap. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (Sn migration), aluminum-foil-carton specification (Al migration), and plastic-bottle specification.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets beverage-specific MLs (juice, plant-milk, infant-and-young-child-beverage variants).
- [[regulations/codex-cadmium-mls]] — Codex Cd ML framework.
- FDA action level for Pb in juices (including apple juice).
- California Prop 65 ([[regulations/california-prop65]]) MADLs apply to beverages sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [d60e74215](https://github.com/paleofoundation/heavymetalindex/commit/d60e74215) | 2026-05-17 | minor | Narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
