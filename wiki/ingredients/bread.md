---
type: ingredient
commodity: bread
title: "Bread"
label: "Bread"
aliases: []
category: baked-good
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [50, 200], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 20
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Bread

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | GAP | 0/10 HMTc analytes, total n=2 | only 0/10 analytes have evidence |
| D2 Regional coverage | OK | 12 jurisdictions, top EU 47% | — |
| D3 Anthropogenic evidence | GAP | 4 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 3 drivers, 4 upstream source(s) | — |
| D5 Pooling depth | THIN | Cr THIN | Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 0 claims checked, 0 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming bread: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Cr |
| D11 Standards-readiness | NOT-READY | priority: Cr; pairing 0 paired, 1 single, 0 unpaired | Cr: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; depth below staple bar |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.50, scale 0.25 | — |

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
| Cr | n=2 | 50–200 | low | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/asaditouranlou2025-bread-iran-montecarlo\|Asadi et al. 2025]]. *Health risk assessment of potentially toxic elements in bread from Iranian markets using Monte Carlo simulation*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Al, Cr, Ni, Cu, Fe, Zn, Co occurrence in 248 bread samples collected from 11 Iranian provinces during winter 2020; four traditional bread types: lavash (n=69), taftoon... (n=248) |
| 2 | [[sources/asaditouranlou2025-bread-wheat-mashhad\|Asadi et al. 2025]]. *Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran*, PLoS ONE 20(7): e0327652 | 2025 | Peer-reviewed | IR tAs, Al, Cr, Cd, Ni, Pb, tHg, Fe, Zn, Cu, Co, V occurrence in Flour, dough, and bread from 90 bakeries across five city regions (North, South, East, West, Central) in Mashhad,... (n=270) |
| 3 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 4 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, tAs, tHg, Cr, W concentrations |
| 5 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | PL/EU Cd, Pb occurrence in 50 bread samples purchased in Silesia Province, Poland: 10 gluten-free, 12 wheat-rye, 20 wheat, and 8 rye. (n=50) |
| 6 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in Selection of bread and breakfast cereal samples analysed at Anses (France) and Technical University of Denmark; exact n... |
| 7 | [[sources/bfr2020-aluminium-faq-consumer-products\|BfR 2020]]. *FAQs about aluminium in food and products intended for consumers*, BfR FAQ of 20 July 2020 | 2020 | Government report | DE/EU Al concentrations |
| 8 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 9 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 10 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 11 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Pd, Pt, Sn, Tl, Zn occurrence in 3312 retail food samples from 24 UK locations, combined into 138 prepared-as-consumed food-category composites and 28 food-group composites (n=3312) |
| 12 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 13 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 14 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 15 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni occurrence in 57 adults (28 men, 29 women, age 19–49) from Baku, Azerbaijan; 18 food items analyzed; blood and hair... (n=57) |
| 16 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 17 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 18 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 19 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EU Al concentrations |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Bread inherits its heavy-metal load from its source grains (wheat dominantly; rye, spelt, barley, oats, corn, and rice in respective bread variants) plus contributions from added ingredients (salt, leavening agents, fortifying minerals) and packaging contact. Wheat, the dominant bread grain in Western markets, carries cadmium proportional to soil-Cd and soil-pH in the production region; the bran fraction concentrates Cd, so whole-grain breads carry higher Cd than white-flour breads from the same wheat source. Lead in bread is generally low except where wheat has been grown on Pb-contaminated soils (historic mining areas, lead-arsenate-pesticide-treated orchards converted to grain production) or where added salt or processing aids introduce Pb. Aluminum can appear at moderate concentrations in some bread products from baking-powder or other leavening additives.

The HMTc panel concerns for bread are Pb, Cd, Al (in chemically-leavened products), and Sn (for canned bread varieties such as Boston brown bread, which are uncommon).

## Ranges by source, region, and variety

The dominant axis of variance is whole-grain vs refined-flour. Whole-grain wheat bread carries 1.5-3× the Cd of equivalent white-flour bread because the bran layer (retained in whole-grain milling) concentrates Cd. Rye bread is generally slightly higher in Cd than wheat bread because rye grain is a more efficient Cd accumulator than wheat. Multigrain breads inherit a weighted blend of their source-grain profiles.

Geographic variance tracks the source-grain growing region. Wheat grown in regions with elevated soil-Cd (parts of Australia, some areas of the EU, regions with historic phosphate-fertilizer-driven Cd accumulation) yields bread with higher Cd than wheat from low-Cd regions. The FDA Total Diet Study ([[sources/fda2022-tds-elements-fy2018-fy2020]]) reports per-bread-product Pb, Cd, and other metals as US-market composites.

Variety effects are documented at the bread-type level (sliced sandwich bread vs sourdough vs flatbread vs corn tortilla vs rice cake), and at the flour-percentage level within whole-grain products. Sprouted-grain breads, where the grain is germinated before milling, can have modestly different metal profiles than non-sprouted; the magnitude is small relative to whole-grain-vs-white variance.

## Processing effects

Bread processing redistributes but does not remove heavy metals from the source grain. Milling separates the bran (high-Cd) from the endosperm (low-Cd); white flour is the endosperm-only fraction and carries 40-60 percent less Cd than the whole grain. Whole-wheat flour, retaining the bran, carries the source-grain Cd essentially unchanged. Fermentation (sourdough, leavened breads) does not appreciably alter metal load; some studies report small phytate-reduction effects that could marginally change bioavailability without changing total mass. Baking at typical oven temperatures (180-220°C) does not change heavy-metal content.

Baking pan and surface contact during baking is a minor additional contribution. Aluminum-foil-lined pans, anodized aluminum bakeware, and tin-coated steel pans all contribute trace metals at levels small relative to source-grain inheritance. Bread baked in cast-iron Dutch ovens does not meaningfully shift Fe-as-contamination because iron is not in the HMTc panel.

## Ingredient-derivative risk

Bread crumbs and bread flour (where bread is dried and ground for use as a recipe ingredient) carry the same per-mass heavy-metal load as the source bread. Toast carries slightly higher per-serving metal because toasting removes water, concentrating the metals on a per-mass basis (the same total per-slice). French toast and bread pudding, where bread is mixed with eggs, milk, and sugar, follow standard recipe-dilution arithmetic.

Bread-based ready meals (sandwiches, paninis, pizza on bread base) inherit the bread metal load proportional to the bread fraction in the recipe.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-origin wheat sourcing from documented low-Cd growing regions reduces source-grain Cd. Specifying soft white wheat versus hard red wheat (which differ in Cd-accumulation efficiency in some studies) is a secondary lever.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the wheat-production stage rather than the bread-bakery stage. Cd-low cultivar selection, soil pH management (liming acidic wheat soils to reduce Cd bioavailability), and avoidance of high-Cd phosphate fertilizers are standard. These are wheat-producer decisions; bread brands access them via supplier specifications.

**Processing levers** ([[mitigation/processing]]) include the whole-grain vs white-flour decision (white flour carries less Cd but loses the nutritional benefits of bran), milling-equipment specification (food-grade milling to avoid grinding-introduced Pb), and selection of refined salt versus mineral salt (some unrefined salts carry higher metals).

**Formulation levers** ([[mitigation/formulation]]) include leavening choice (yeast-leavened bread carries no Al contribution; some chemically-leavened breads can carry Al from sodium aluminum phosphate or aluminum-containing baking powders), and fortifying-mineral source specification.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level testing of finished bread for Pb and Cd, particularly for infant-and-child-marketed bread products. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for bread metal load on typical retail shelf-life timescales.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in cereals and cereal products (including bread). Cereal-product-specific Cd ML is distinct from raw cereal grain ML.
- Codex Alimentarius CXS 193-1995 — sets Cd MLs for cereal grains; cereal-product-specific limits derive from national authorities and the EU implementation.
- FDA does not maintain a binding action level for Pb or Cd in bread specifically; the FDA Closer to Zero program covers processed baby foods, not adult bread products.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to bread sold in California, with the serving-based screen driving most enforcement attention.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [eddfdfbab](https://github.com/paleofoundation/heavymetalindex/commit/eddfdfbab) | 2026-05-17 | major | 1 source added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
