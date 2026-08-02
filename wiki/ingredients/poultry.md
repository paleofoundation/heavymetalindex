---
title: "Poultry"
type: ingredient
commodity: poultry
label: "Poultry"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 30]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 15]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 24
---

# Poultry

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | GAP | 3/10 HMTc analytes, total n=9 | only 3/10 analytes have evidence |
| D2 Regional coverage | OK | 24 jurisdictions, top CN 21% | — |
| D3 Anthropogenic evidence | GAP | 2 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 2 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd THIN, tAs THIN | Cd: THIN; tAs: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 0 claims checked, 0 supported; 2 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming poultry: kazimov2014-dietary-heavy-metals-azerbaijan |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd, tAs |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs; pairing 0 paired, 3 single, 0 unpaired | Pb: POOLABLE; Cd: THIN; tAs: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below staple bar |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 5–30 | medium | [[sources/kamouh2024-heavy-metals-chicken-meat-egypt\|1]], [[sources/pain2023-lead-pheasant-dogfood-uk\|2]], [[sources/apdraim2023-vermiculite-quail-meat\|3]] |
| Cd | n=3 | 1–15 | low | [[sources/kamouh2024-heavy-metals-chicken-meat-egypt\|1]], [[sources/apdraim2023-vermiculite-quail-meat\|2]], [[sources/aljohani2023-heavy-metal-toxicity-poultry\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–20 | low | [[sources/aljohani2023-heavy-metal-toxicity-poultry\|1]], [[sources/lasky2013-arsenic-chicken-correspondence\|2]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/mahmud2011-crvi-chicken-pakistan|Estimation of Chromium (VI) in various body parts of Local Chicken]]<span class="hmi-ref-meta">Mahmud T, Rehman R, Ali S, Anwar J, Abbas A, Farooq M, et al. · Journal of the Chemical Society of Pakistan · 2011 · [jcsp.org.pk](https://jcsp.org.pk/issueDetail.aspx?id=292)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/kazimov2014-dietary-heavy-metals-azerbaijan|Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods]]<span class="hmi-ref-meta">Kazimov MA and Alieva NV · Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 · 2014</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | LY Pb, Cd, Cr, Cu occurrence in Imported frozen meat (chicken, beef, lamb, processed products) from Tripoli commercial markets; origins: Brazil, USA, Jordan, Spain, Australia;... (n=30) |
| 2 | [[sources/manfredi2025-nickel-meat-italy\|Manfredi et al. 2025]]. *Dietary exposure assessment to nickel through the consumption of poultry, beef, and pork meat for different age groups in the Italian population*, Italian Journal of Food Safety | 2025 | Peer-reviewed | IT Ni occurrence in 809 official-control muscle meat samples collected in Italy from 2011 to 2023 |
| 3 | [[sources/ezike2024-nigerian-poultry-pte\|Cosmas et al. 2024]]. *An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products*, International Journal of Agricultural Invention | 2024 | Peer-reviewed | NG tAs, Pb, Cd occurrence in Broiler muscle, gizzard, yolk, and albumen samples from four poultry farms in Nigeria (n=36) |
| 4 | [[sources/kamouh2024-heavy-metals-chicken-meat-egypt\|Kamouh et al. 2024]]. *Heavy metals load in chicken meat and its reduction by probiotic strains*, Open Veterinary Journal | 2024 | Peer-reviewed | Pb and Cd in 100 chicken samples (breast, thigh, gizzard, liver) from Egyptian slaughterhouses by AAS; liver highest Pb and Cd; probiotic-strain reduction experiment |
| 5 | [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|Morshed et al. 2024]]. *Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed*, Research Square (preprint) | 2024 | Preprint | BD Pb, Cd, Cr occurrence in 24 day-old broiler chickens divided into 8 experimental groups (C0-C7; 3 birds per group) in Bangladesh and fed... (n=24) |
| 6 | [[sources/aljohani2023-heavy-metal-toxicity-poultry\|Aljohani 2023]]. *Heavy metal toxicity in poultry: a comprehensive review*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | Worldwide narrative review of Pb, Cd, tAs, and tHg in poultry liver, kidney, meat, egg, and blood across twelve jurisdictions |
| 7 | [[sources/apdraim2023-vermiculite-quail-meat\|Apdraim et al. 2023]]. *Effect of vermiculite feed additive on the chemical, mineral, and amino acid compositions of quail meat* | 2023 | Peer-reviewed | KZ Pb, Cd occurrence in Texas Quail meat breed birds (n=35 per group) fed control diet or 3% or 5% vermiculite feed additive... (n=105) |
| 8 | [[sources/faraj2023-backyard-chicken-metals-iraq\|Faraj et al. 2023]]. *Determination of Heavy Metal Residue in Backyard Chicken at Various Regions in Sulaymaniyah Province*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cd, Cu, Pb occurrence in Sixty backyard chickens collected from four Sulaymaniyah Province regions in Kurdistan Region-Iraq, with 15 chickens from each of... (n=120) |
| 9 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 10 | [[sources/pain2023-lead-pheasant-dogfood-uk\|Pain et al. 2023]]. *Lead concentrations in commercial dogfood containing pheasant in the UK*, Ambio | 2023 | Peer-reviewed | UK pheasant Pb concentrations contrasting shot game meat with retail human-consumption pheasant, documenting an ammunition-derived contamination pathway in game poultry |
| 11 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 12 | [[sources/rokanuzzaman2022-bangladesh-eggs-metals\|Rokanuzzaman et al. 2022]]. *Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh*, Saudi Journal of Biomedical Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Cu, Fe, Zn occurrence in Five egg-content samples and five eggshell samples collected from the Jahangirnagar University area of Savar, Bangladesh, covering indigenous... (n=10) |
| 13 | [[sources/alam2021-bangladesh-poultry-feed-meat-metals\|Alam et al. 2021]]. *Heavy metal contamination and antibiotic residues in poultry feed and meat in Bangladesh*, Asian-Australasian Journal of Food Safety and Security 5(2):71-78 | 2021 | Peer-reviewed | BD Cd, Pb, Cr occurrence in Broiler feed and meat from two selected poultry production belts of Bangladesh. (n=94 broiler feed samples and 60 broiler meat samples.) |
| 14 | [[sources/ertas2021-poultry-calf-meat-arsenic\|Nusret et al. 2021]]. *Evaluation of Arsenic Concentration in Poultry and Calf Meat Samples by Hydride Generation Atomic Fluorescence Spectrometry*, Gazi University Journal of Science | 2021 | Peer-reviewed | TR tAs occurrence in Calf, chicken, and turkey meat samples obtained from local markets (n=31) |
| 15 | [[sources/gholami-ahangaran2021-chicken-meat-cadmium-zinc-silver\|Majid et al. 2021]]. *The Measurement of Cadmium, Zinc and Silver in Chicken Meat in Isfahan Province, Iran*, Iranian Journal of Toxicology | 2021 | Peer-reviewed | IR Cd, Zn, Ag occurrence in Chicken breast, thigh, heart, and liver samples from meat markets in Isfahan Province, Iran (n=100) |
| 16 | [[sources/majid2020-broiler-meat-cumin-minerals\|Majid et al. 2020]]. *Effect of dietary supplementing cumin (Cuminum cyminum L.) on meat traits of the broiler chicks*, Basrah Journal of Agricultural Sciences 33(1): 159-171 | 2020 | Peer-reviewed | IQ Cr, Cu, Cd, Pb, Ni, Zn, Fe occurrence in Ninety-six Ross 308 broiler chicks assigned to four diet groups with three replicates of eight chicks each; breast... (n=96) |
| 17 | [[sources/dordevic2019-aluminum-foil-culinary-baking-czech\|Dordevic et al. 2019]]. *Aluminum contamination of food during culinary preparation: Case study with aluminum foil and consumers' preferences*, Food Science & Nutrition | 2019 | Peer-reviewed | CZ/EU Al occurrence in Eleven food types (Atlantic salmon fillet, mackerel, duck breasts with and without skin, cheese Hermelín, fresh tomato, fresh... (n=11) |
| 18 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 19 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 20 | [[sources/lasky2013-arsenic-chicken-correspondence\|Lasky et al. 2013]]. *Arsenic Levels in Chicken (correspondence: Lasky letter and Nachman et al. response)*, Environmental Health Perspectives | 2013 | Peer-reviewed | Commentary on tAs/iAs residues in US broiler chicken after roxarsone withdrawal; arsenic-in-poultry regulatory context post-2011 FDA drug withdrawal |
| 21 | [[sources/nachman2013-chicken-arsenic-research-brief\|Nachman et al. 2013]]. *Arsenic in Chicken Meat*, Johns Hopkins Center for a Livable Future research brief | 2013 | Research brief | US iAs, tAs occurrence in One hundred forty-two chicken breast samples purchased from 82 stores in 10 US cities, representing 60 unique brands;... (n=142) |
| 22 | [[sources/mahmud2011-crvi-chicken-pakistan\|Mahmud et al. 2011]]. *Estimation of Chromium (VI) in various body parts of Local Chicken*, Journal of the Chemical Society of Pakistan | 2011 | Peer-reviewed | PK Cr-VI occurrence in Local chicken parts (meat: sternum, leg, arm, gizzard, neck, heart, liver; bones: chest cage, neck, leg, head, arm)... |
| 23 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 24 | [[sources/cot2003-arsenic-food-tds\|Committee on Toxicity of 2003]]. *Statement on arsenic in food: results of the 1999 Total Diet Study*, Committee on Toxicity statement | 2003 | Government report | GB tAs, iAs occurrence in 1999 UK Total Diet Study arsenic analysis: 119 food categories collected from 24 towns and combined into 20... (n=480) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Poultry (chicken, turkey, duck, and other domestic fowl) inherits heavy metals through the bird's dietary and environmental exposure. The bird consumes feed grains, water, and supplements that may carry trace metals; lifetime exposure deposits in muscle, organs, bone, and feathers at different rates. Cadmium concentrates in kidney and liver tissue; lead deposits in bone with slow turnover. Chromium and nickel appear at trace levels reflecting feed-supplement composition and environmental exposure.

Poultry production systems differ markedly in metal-exposure pathways. Conventional broiler chickens raised on grain feeds for 6-8 week production cycles have limited time for organ-Cd accumulation. Layer hens have longer lifespans (18-24 months for commercial layers) and accumulate more lifetime Cd. Pasture-raised and free-range poultry are exposed to soil and forage Pb in addition to feed-Pb; in regions with contaminated soils (urban, post-mining, lead-paint-deposition areas), backyard and free-range chicken eggs and meat have been documented at elevated Pb. [[sources/mahmud2011-crvi-chicken-pakistan|Mahmud 2011]] documents chromium-VI in Pakistani chicken; [[sources/kazimov2014-dietary-heavy-metals-azerbaijan|Kazimov 2014]] places poultry in the broader Azerbaijani dietary exposure picture.

The HMTc panel concerns for poultry are dominantly Pb and Cd (muscle and organ), with secondary Cr concerns (some studies, including Mahmud 2011, identify Cr-VI specifically in poultry from Pakistan).

## Ranges by source, region, and variety

Per-cut variation: White meat (breast) generally carries lower Pb and Cd than dark meat (thigh, drumstick) from the same bird, reflecting tissue-specific metal-binding patterns. Skin carries higher Pb in some surveys because skin is the deposition surface for environmental contamination. Organ meats (chicken liver, gizzard, heart) carry several-fold higher Cd than muscle; chicken liver is the dominant per-serving Cd contributor among poultry products.

Geographic variation tracks production region and feed-source: regions with elevated soil-Cd or industrial Pb deposition produce poultry with elevated metal loads compared to regions with clean feed-source supply chains. The European, Australian, and North American commercial broiler systems with documented feed-supplier QC typically carry low metal loads. Sub-Saharan African and Asian production systems show more variance, often with elevated Pb in backyard and informal-sector poultry.

Species variation: Chicken (Gallus gallus) is the dominant industrial species; turkey, duck, and goose have related but distinct profiles. Duck, raised in some production systems on pond water, can carry elevated metals where pond water is contaminated. Game birds (pheasant, quail, dove) hunted with lead ammunition can carry ammunition-derived Pb fragments and Pb-particle contamination.

## Processing effects

Poultry processing (slaughter, scalding, de-feathering, evisceration, chilling, cutting, packaging) does not change muscle and organ metal content meaningfully. Chemical antimicrobial rinses (chlorine, peracetic acid, chlorine dioxide) at the processing plant do not affect HMTc-panel metals.

Cooking does not reduce poultry Pb or Cd; water loss during cooking concentrates the metals per cooked-mass unit (per-serving total approximately conserved). Removing skin before cooking reduces per-serving Pb modestly where skin is the deposition surface. Boiling and broth-discard removes a small water-soluble metal fraction.

Processing into deli meats, sausages, and ready meals inherits the source-poultry metal load plus added contributions from cure salts, binders, and packaging. Chicken nuggets, breaded products, and pre-cooked items carry the source-meat profile with breading and processing-aid contributions.

## Ingredient-derivative risk

Chicken broth and bone broth from poultry can carry trace Pb from bone tissue; the level depends on the source bird's lifetime Pb exposure. Chicken protein powder and dehydrated chicken supplements carry concentrated per-mass metal content. Poultry-organ-based supplements (liver pills, chicken-liver-derived iron supplements) carry concentrated Cd characteristic of the organ source.

Eggs (chicken eggs, duck eggs) are addressed at [[ingredients/eggs|eggs]]. Egg-Pb specifically can be elevated in eggs from layers exposed to environmental Pb (backyard chickens on contaminated soil); shell, white, and yolk carry different metal profiles.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-source-region sourcing from documented low-Pb production areas, supplier-feed-source verification, and avoidance of high-Cd organ sourcing reduce per-product metal load. Documented-feed-source specification (testing of feed for Pb and Cd) is the operational supplier-side intervention.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the feed-grain stage (feed-grain sourcing) and at the production facility (soil-Pb screening for pasture-raised and free-range operations; water-source Pb testing for waterfowl operations).

**Processing levers** ([[mitigation/processing]]) for poultry are limited. Removing skin before cooking reduces per-serving Pb modestly. Boiling-and-discard removes a small Pb fraction. The total metal-removal potential through processing is small relative to source-bird-variance.

**Formulation levers** ([[mitigation/formulation]]) include muscle-only vs muscle-plus-organ formulation, breast-vs-thigh formulation in mixed products, and ingredient-percentage adjustment in processed poultry products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and Cd testing on incoming carcasses, particularly for products targeted at infants and young children. Cr-VI speciation testing in poultry from production regions with documented Cr-VI exposure (per Mahmud 2011 Pakistani context) where applicable. See [[testing/icp-ms]] and [[testing/arsenic-speciation]] (analogous speciation method for Cr).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not generally consequential for fresh poultry; canned poultry carries the standard Sn-migration consideration.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in muscle meat of poultry and in offal. Offal MLs are higher than muscle MLs reflecting the organ-accumulation pattern.
- Codex Alimentarius CXS 193-1995 — sets Cd and Pb MLs for meat and offal, distinguishing muscle from organ; poultry-specific values apply where they exist.
- USDA/FSIS Pathogen Reduction and HACCP Systems regulation covers pathogen safety; heavy-metal surveillance is conducted under the FSIS National Residue Program.
- FDA does not maintain a binding action level for Pb or Cd in poultry.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to poultry sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [c17596197](https://github.com/paleofoundation/heavymetalindex/commit/c17596197) | 2026-05-17 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
