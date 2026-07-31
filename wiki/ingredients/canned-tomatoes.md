---
title: "Canned tomatoes"
type: ingredient
commodity: canned-tomatoes
label: "Canned tomatoes"
aliases: [canned tomatoes]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 14.7]
    p95_ppb: 32.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 14]
    p95_ppb: 21
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0.9]
    p95_ppb: 1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 2702]
    p95_ppb: 3037
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 2439]
    p95_ppb: 3949
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
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
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 7
---

# Canned tomatoes

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 6/10 HMTc analytes, total n=7 | common tier expects total n>=15; have 7 |
| D2 Regional coverage | OK | 10 jurisdictions, top EU 57% | — |
| D3 Anthropogenic evidence | GAP | 2 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 2 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 10 claims checked, 10 supported; 3 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming canned-tomatoes: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Al, Sn; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Canned tomatoes present a metal risk profile dominated by the interaction between tomato acidity and tinplate packaging rather than by high intrinsic accumulation in the tomato fruit itself. Fresh tomatoes are among the lower-accumulating common vegetables for Pb and Cd: the fruit tissue is physically separated from soil contact, the tomato plant does not prioritize metal translocation to fruit, and Pb in particular shows limited phloem mobility, reducing its accumulation in developing fruit even when root-zone concentrations are elevated. Cd accumulation in tomato fruit is detectable but generally low relative to leafy vegetables or root crops. However, tomato sauce and crushed tomatoes are characteristically acidic (pH 3.5 to 4.5), and this acidity creates the dominant contamination pathway in canned form. When acidic tomato product contacts unlacquered tinplate can walls, electrochemical corrosion releases inorganic tin ions into the product. This reaction proceeds continuously in storage, accumulating Sn in the tomato matrix over the product's shelf life. Studies documented in the canned-food literature confirm that tomato products in unlacquered cans reach some of the highest Sn concentrations observed in commercially sold canned foods [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]], [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]]. FSA/Fera included canned tomatoes in their UK dietary survey [[sources/fsa2016-infant-food-formula-metals-survey]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–14.7 | low | — |
| Cd | n=1 | 0–14 | low | — |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.9 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–2702 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=2 | 0–2439 | low | [[sources/atsdr2005-tin-toxicological-profile\|1]], [[sources/schafer1984-tin-toxic-heavy-metal-review\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey measured canned tomatoes as part of a non-infant food composite study in the UK [[sources/fsa2016-infant-food-formula-metals-survey]]; exact tabulated values from Table 6 remain in progress pending structured extraction. For intrinsic tomato-fruit metals, the general literature finds Pb typically below 10 ppb and Cd typically below 20 ppb on a fresh-weight basis in non-contaminated growing conditions, with iAs, tHg, and Al also at low levels. The Sn content is the dominant variable and is determined by can type rather than tomato variety or growing region. Published European surveillance and the ATSDR tin profile document Sn concentrations in canned tomatoes and tomato products in unlacquered cans ranging from the tens to hundreds of mg/kg depending on storage time and temperature [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]]. Lacquered cans reduce Sn to trace levels. Geographic variation in tomato fruit metals follows soil and irrigation-water quality in the production region (Italy, Spain, California, Turkey are major commercial origins); this variation is secondary to the can-type effect on Sn.

## Processing effects

Tomato processing for canning (crushing, heating, acidification, sterilization) does not increase intrinsic tomato-metal concentrations, though it does concentrate metals modestly relative to whole fresh tomatoes on a mass-per-volume basis when water is reduced for purees or pastes. More concentrated tomato products (paste, passata at 6:1 or higher reduction) carry proportionally higher intrinsic Cd and Pb on a per-gram basis. The primary processing effect is the initiation and continuation of Sn migration once the acidic tomato matrix contacts the can wall during and after retorting. Highly reduced tomato products (paste) in contact with unlacquered cans may accumulate Sn faster on a per-gram basis because the lower water content may concentrate the dissolved Sn relative to the food matrix.

## Ingredient-derivative risk

Canned tomatoes are a ubiquitous ingredient in retail and food service sauces, soups, pizzas, stews, and condiments. When canned tomatoes are used as an ingredient in a further-processed product (for example, pizza sauce packaged in its own can or jar), the Sn already migrated into the tomatoes is carried forward, and any additional acidic-container contact in the finished product packaging adds further Sn. Products with long thermal processing times or high tomato-fraction inclusion are particularly susceptible. Tomato paste, a concentrate derived from fresh or canned tomatoes, carries a higher intrinsic Cd and Pb per gram than whole canned tomatoes, and its acidity is even more aggressive toward unlacquered tin.

## Mitigation options

### Sourcing levers

Specifying lacquered-can sourcing from all tomato product suppliers is the single highest-impact lever, eliminating the dominant Sn migration pathway. For intrinsic tomato metals, sourcing from agricultural regions with documented low soil Pb and Cd and clean irrigation water (non-wastewater) reduces the baseline; Cd and Pb in fresh tomatoes are typically low and this lever is of secondary importance relative to can specification.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Fresh tomato Pb and Cd are already low in standard agricultural settings; agronomic interventions provide marginal additional benefit relative to can-type specification.

### Processing levers

Specifying lacquered cans is the processing-system lever. For tomato paste and puree, processing that minimizes contact time between reduced tomato and unlacquered metal surfaces (including processing equipment) reduces incidental metal contamination from stainless steel equipment surfaces, where acidic tomato can leach Ni and Cr from equipment alloys during prolonged high-temperature contact.

### Formulation levers

Substituting glass-jarred or aseptic-packaged (Tetra Pak or similar) tomatoes for tinplate-canned tomatoes eliminates the Sn migration source entirely. These packaging alternatives are commercially standard and widely available; the substitution is a formulation decision without product-performance trade-offs for most applications.

### Testing and QC levers

ICP-MS measurement of Sn in finished canned product, stratified by can type (lacquered versus unlacquered) and by storage duration, provides the most useful QC data. For products using tomato as a major ingredient, testing the tomato input for Cd and Pb provides baseline documentation even if values are expected to be low.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are the critical packaging specification for this commodity given the high acidity of tomato products. The benefit of lacquering is greater here than for most other canned foods because of the pH-driven acceleration of tin corrosion in tomato matrices. Storage at cool temperatures (below 20°C) and strict shelf-life management reduce cumulative Sn accumulation in unlacquered-can stock. FIFO inventory rotation limits the proportion of product approaching maximum Sn levels [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb) wet weight. For Pb in vegetables (including tomatoes), the EU limit is 0.10 mg/kg (100 ppb) wet weight. For Cd in vegetables other than leafy or root vegetables, the EU limit is 0.050 mg/kg (50 ppb) wet weight. The Codex Alimentarius general standard for contaminants sets a Sn limit of 250 mg/kg for canned solid foods and 150 mg/kg for canned tomatoes specifically in some national applications. No FDA action level for Sn in canned tomatoes is currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] addresses Pb in foods for young children rather than Sn.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry (2005). *Toxicological Profile for Tin and Tin Compounds*. U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry. [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf). Government report, A-tier. [[sources/atsdr2005-tin-toxicological-profile|Source record]]
3. S. G. Schafer and U. Femfert (1984). *Tin — A Toxic Heavy Metal? A Review of the Literature*. Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69. [https://doi.org/10.1016/0273-2300(84)90006-0](https://doi.org/10.1016/0273-2300(84)90006-0). Peer-reviewed, A-tier. [[sources/schafer1984-tin-toxic-heavy-metal-review|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/belabid2025-canned-tomato-pineapple-trace-elements\|Chahinez et al. 2025]]. *Evaluation of trace element contents in canned tomato paste and canned pineapple marketed in Algeria*, Research Square preprint | 2025 | Preprint | DZ Fe, Zn, Cu, Cd, Pb occurrence in Canned tomato paste and canned pineapple marketed in Algiers, Algeria (n=52) |
| 2 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 3 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | Inorganic tin migration from tinplate can coatings; ATSDR toxicological reference for Sn speciation, MRLs, and canned-food Sn release mechanisms; acidic tomato matrix elevates Sn release |
| 5 | [[sources/efsa2005-tin-food-upper-intake\|EFSA 2005]]. *Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin*, EFSA Journal | 2005 | Regulatory opinion | EU/GB/FR Sn occurrence in EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered... |
| 6 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
| 7 | [[sources/schafer1984-tin-toxic-heavy-metal-review\|Schafer et al. 1984]]. *Tin — A Toxic Heavy Metal? A Review of the Literature*, Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 | 1984 | Peer-reviewed | European regulatory context for Sn in canned foods; establishes species-distinction principle (inorganic vs organotin) and canned-tomato Sn release as pH-dependent driver |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
