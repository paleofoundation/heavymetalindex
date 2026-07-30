---
title: "Fish fingers"
type: ingredient
commodity: fish-fingers
label: "Fish fingers"
aliases: [fish finger]
category: seafood-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 3.4]
    p95_ppb: 3.8
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [11.2, 12.8]
    p95_ppb: 12.9
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 2.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [682, 810]
    p95_ppb: 810
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [5.7, 9.0]
    p95_ppb: 9.4
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [93.2, 134]
    p95_ppb: 137
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 1752]
    p95_ppb: 2617
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [200, 360]
    p95_ppb: 380
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [0, 30.8]
    p95_ppb: 36.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [0.2, 1.5]
    p95_ppb: 1.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 2
---

# Fish fingers

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 8/10 HMTc analytes, total n=22 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 1 jurisdictions, top NO 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tAs THIN, tHg THIN, Ni THIN, Al THIN, Cr THIN, Sn THIN, U THIN | Pb: THIN; Cd: THIN; iAs: needs 2 more study(ies); tAs: needs 1 more study(ies); tHg: THIN; Ni: THIN; Al: needs 2 more study(ies); Cr: THIN; Sn: needs 2 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 2 claims checked, 2 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming fish-fingers: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; pairing 0 paired, 10 single, 0 unpaired | Pb: THIN; Cd: THIN; iAs: THIN, needs 2 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN; Ni: THIN; Al: THIN, needs 2 more study(ies); Cr: THIN; Sn: THIN, needs 2 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Fish fingers are a composite food whose heavy metal burden derives primarily from the white fish species used in the fillet portion, typically cod, haddock, or pollock. Marine fish accumulate metals through the aquatic food chain: metals dissolved in seawater or present in sediments are taken up by lower trophic organisms and concentrate as they pass upward to commercial fish species. White fish species are generally lower in methylmercury (MeHg) and cadmium than fatty pelagic fish, because they occupy a middle rather than the apex of the marine food chain and carry less lipid in which fat-soluble organic mercury compounds accumulate. However, inorganic lead and total arsenic enter white fish tissue from ambient seawater chemistry and sediment-dwelling prey, and the geographic origin of the catch affects which metals predominate. The breadcrumb coating in fish fingers introduces a wheat-derived fraction that adds a small cadmium contribution via the same soil-to-grain pathway described for cereal commodities. The frying oil contributes negligible additional metal load. Because fish fingers are a finished composite product, the metal burden in any given batch reflects both the provenance of the fish and the composition of the coating, making lot-level variation higher than for single-ingredient commodities.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–3.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=3 | 11.2–12.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 682–810 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 5.7–9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=3 | 93.2–134 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | n=1 | 0–1752 | low | — |
| Cr | n=3 | 200–360 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | n=1 | 0–30.8 | low | — |
| U | n=2 | 0.2–1.5 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 34, "Fish sticks or patty, frozen, oven-cooked." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Fish sticks or patty, frozen, oven-cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 11 | 13 | in profile |
| Cr | 3 | 200 | 400 | in profile |
| Ni | 3 | 89 | 140 | in profile |
| Pb | 3 | 0 | 4.2 | in profile |
| U | 3 | 0 | 1.6 | in profile |
| tAs | 3 | 650 | 810 | in profile |
| tHg | 3 | 5.6 | 9.8 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The geographic origin of the fish is the primary driver of variance across fish finger products. North Atlantic cod and haddock sourced from waters off Iceland, Norway, or eastern Canada carry lead and cadmium burdens that reflect the relatively clean mineral geology of those fishing grounds, whereas fish sourced from inshore or more industrialized coastal fisheries may show elevated Pb from sediment contamination. Total arsenic in white fish muscle reflects ambient seawater arsenic levels, which are generally higher in Pacific than Atlantic fishing zones, though the arsenic in marine fish is predominantly organic arsenobetaine, a non-toxic organoarsenic compound that dominates the tAs signal. Farmed white fish (pangasius, tilapia) grown in recirculating or pond systems carry metal burdens primarily from the feed ration rather than from ambient water, and Cd in farm-raised fish reflects dietary phosphate sources used in feed manufacture. The FSA/Fera UK survey captured a composite fish finger product that reflects a blend of sourcing origins; lot-to-lot variation within a single manufacturer is expected but not quantified in the current source corpus.

## Processing effects

Cooking and frying do not materially reduce heavy metal concentrations in fish finger products. Metals are bound to proteins and mineral structures in muscle tissue rather than being freely dissolved in moisture, so the evaporation of water during oven-cooking or frying concentrates metals slightly on a wet-weight basis (total metal mass is unchanged but the denominator shrinks). The breadcrumb crust absorbs frying oil but does not act as a barrier against metal leaching in either direction. Blanching or brining of the fish prior to breading, where practiced industrially, may result in minor surface leaching of water-soluble metal fractions, but this effect is not characterized quantitatively in the current corpus. The FDA Total Diet Study TDS Food 34 ("Fish sticks or patty, frozen, oven-cooked") measures the food in the oven-cooked state as consumed, which is the appropriate regulatory and risk-assessment basis [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Ingredient-derivative risk

Fish fingers represent a downstream processed form of white fish fillet, and their metal profile is bounded above by the fillet's intrinsic burden. No derivative of fish fingers commonly used in further manufacturing is likely to concentrate metals beyond what the raw fillet contains, because the processing steps (breading, freezing, cooking) do not involve concentration of the fish fraction. Fish meal, a high-concentration derivative used in animal feed rather than direct human food, would carry much higher metal loads due to moisture removal, but this is not a fish-finger derivative. Fish stock and fish paste produced from trimmings of similar white fish species carry metal profiles broadly comparable to the fillet on a wet-weight basis.

## Mitigation options

### Sourcing levers

Specification of fish origin by fishing ground or farm certification is the highest-leverage intervention available to manufacturers of fish finger products. Sourcing from certified sustainable North Atlantic fisheries operating in clean oceanic waters reduces expected Pb and Cd exposure relative to inshore or industrialized coastal sourcing. For farmed species, requesting supplier-level feed specification that avoids high-cadmium phosphate sources reduces dietary Cd in the fish.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Selecting refined breadcrumb formulations that use lower-cadmium wheat flour (milled white flour rather than whole-grain or bran-enriched flour) reduces the Cd contribution from the coating fraction, though the coating fraction contributes a minor share of total metal burden relative to the fish fillet.

### Formulation levers

Increasing the fillet-to-coating ratio reduces the relative contribution of any breadcrumb-derived Cd while preserving the product format. Substituting rice-based or oat-based coatings introduces different metal profiles; rice flour would elevate arsenic and reduce cadmium, a trade-off that requires evaluation against the relevant product regulatory limits.

### Testing and QC levers

Lot-level ICP-MS testing of the fish fillet fraction provides higher diagnostic value than testing the finished product because it separates the fish metal signal from the breadcrumb signal. For manufacturers processing multiple fish species or origins, maintaining separate incoming testing by origin allows traceability of elevated batches to source.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended by [[regulations/eu2023-contaminants-maximum-levels]], fish muscle (the primary ingredient in fish fingers) is subject to a Pb maximum level of 0.30 mg/kg wet weight and a Cd maximum level of 0.050 mg/kg wet weight. These limits apply to the muscle fraction as placed on the market. The breaded composite format is not separately enumerated in current EU regulations, and the applicable limit is therefore the most restrictive limit applicable to any ingredient fraction; in practice, the fish muscle limits govern. There is no EU maximum level for total arsenic in fish products; arsenic regulation in seafood focuses on inorganic arsenic, for which a specific limit applies to fish-based dietary supplements but not to fresh or frozen fish or fish products at the time of this writing. The FSA/Fera survey [[sources/fsa2016-infant-food-formula-metals-survey]] measured fish fingers in the context of the UK total diet study framework, which benchmarks against the same EU limits. No specific US FDA action level applies to total metals in fish finger products; the FDA's mercury guidance for fish applies to commercial fish species by species rather than to processed composite products.

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Fish sticks or patty, frozen, oven-cooked (n=3) |
| 2 | [[sources/naess2020-norwegian-seafood-metals\|Naess et al. 2020]]. *Mercury, lead, arsenic, and cadmium in Norwegian seafood products and consumer exposure*, Food Additives & Contaminants: Part B | 2020 | Peer-reviewed | NO tHg, Pb, tAs, Cd occurrence in Market-representative commercially available seafood products collected in Norway in 2015, 2017, and 2018; each analytical sample was a... (n=84) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [8c4f23243](https://github.com/paleofoundation/heavymetalindex/commit/8c4f23243) | 2026-05-13 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
