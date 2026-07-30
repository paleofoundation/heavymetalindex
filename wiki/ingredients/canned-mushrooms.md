---
title: "Canned mushrooms"
type: ingredient
commodity: canned-mushrooms
label: "Canned mushrooms"
aliases: ["Mushrooms, canned, drained solids", "mushrooms"]
category: fungi
tds_food:
  number: 130
  description: "Mushrooms, canned, drained solids"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.8, 1.8]
    p95_ppb: 1.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [6.7, 6.7]
    p95_ppb: 6.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [1.4, 1.4]
    p95_ppb: 1.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [1.7, 1.7]
    p95_ppb: 1.7
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
sources: 42
---

# Canned mushrooms

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=14 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 4 jurisdictions, top PS 33% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 1 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 14 claims checked, 14 supported; 2 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming canned-mushrooms: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 130, "Mushrooms, canned, drained solids." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Mushrooms are among the most efficient heavy metal accumulators in the food kingdom, a property that distinguishes fungi from both animal and plant food sources. Fungi lack the selective metal-exclusion mechanisms found in plant vascular tissues; instead, the mycelium grows through substrate material and absorbs metals across its extensive surface area via active transport systems that also import essential minerals such as zinc and copper. Cadmium is particularly concentrated in mushroom tissue because it is taken up via transporters shared with zinc, and fungi allocate Cd to fruiting bodies at high rates. Mercury accumulation is also markedly elevated in mushrooms, particularly in wild species, because mercury in decaying organic matter and soil is bioavailable to fungal hyphae. Total arsenic and lead concentrations in mushrooms are variable and depend on the substrate. Wild mushrooms, which grow on uncontrolled substrates, can achieve Cd concentrations an order of magnitude or more above what is typical in vegetables. Cultivated mushrooms used in commercial canning (principally Agaricus bisporus, the common white mushroom) are grown on controlled composted substrates that typically show lower but still detectable heavy metal levels. The canning process adds a secondary pathway: tinplate can corrosion can contribute Sn to the product [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|2]] |
| Cd | n=2 | 1.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 6.7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 1.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 1.7 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Mushrooms, canned, drained solids" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 1 | 1.8 | 1.8 | in profile |
| Cr | 1 | 0 | 0 | in profile |
| Ni | 1 | 0 | 0 | in profile |
| Pb | 1 | 0 | 0 | in profile |
| U | 1 | 1.7 | 1.7 | in profile |
| tAs | 1 | 6.7 | 6.7 | in profile |
| tHg | 1 | 1.4 | 1.4 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in canned mushroom drained solids at 1.8 ppb (n=1 composite), tHg at 1.4 ppb, tAs at 6.7 ppb, and U at 1.7 ppb [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Cr, Ni, and Pb were at or below the reporting limit. The n=1 composite count in the TDS dataset severely limits statistical inference; these values represent a single composite sample of commercially cultivated canned mushrooms and should not be treated as a stable distributional estimate. The literature on cultivated Agaricus bisporus (the predominant commercially canned species) shows Cd concentrations generally in the range of 50 to 500 ppb on a fresh-weight basis and up to several mg/kg on a dry-weight basis in some European surveys, substantially above the TDS composite value; the discrepancy may reflect composite dilution effects in the TDS preparation or lot-specific variation. Wild mushrooms, not typically used in commercial canning, show markedly higher Cd and Hg than cultivated species. Substrate composition is the principal driver of variability: mushrooms grown on low-Cd compost show lower tissue Cd than those grown on substrates with elevated Cd from agricultural or industrial inputs.

## Processing effects

Blanching prior to canning, which is standard practice, leaches some water-soluble metals (particularly Cd) from mushroom tissue into the blanching water, which is discarded. This step reduces the metal load in the finished product relative to raw mushrooms. Canning in brine and thermal sterilization do not further reduce intrinsic metal content in the mushroom tissue. Sn migration from unlacquered tinplate can walls proceeds after retorting, driven by the mild acidity of the mushroom brine. Draining and rinsing canned mushrooms before use removes the brine fraction, which carries dissolved Sn, and reduces exposure from that fraction.

## Ingredient-derivative risk

Canned mushrooms appear as ingredients in soups, pasta sauces, pizza toppings, and mixed vegetable products. Their Cd and Hg contribution carries forward proportionally into blended products in proportion to inclusion rate. Mushroom powder or extract, used in umami flavoring and functional food formulations, concentrates metals in proportion to moisture reduction from a baseline that is already elevated relative to most vegetables. Products marketed with mushroom as a primary ingredient (mushroom soups, mushroom sauces) warrant specific metal verification given the higher baseline accumulation of this commodity class.

## Mitigation options

### Sourcing levers

Specifying substrate composition is the most effective lever for cultivated mushroom Cd: compost substrates with documented low Cd (from verified agricultural or organic-waste inputs) produce mushrooms with consistently lower tissue Cd. Substrate metal testing prior to use provides the upstream control. Sourcing only cultivated species from controlled substrates, rather than wild-harvested mushrooms, eliminates the highest-risk fraction of the mushroom supply.

### Agronomic levers

For cultivated mushrooms, substrate management (the functional equivalent of soil management) is the primary lever. Composted straw from low-Cd grain origins, combined with monitoring of substrate Cd and Pb, is the agronomic-analog mitigation. Wild mushroom harvesting from known low-contamination forests with documented substrate metal surveys reduces variance, though this is difficult to operationalize at commercial scale.

### Processing levers

Blanching prior to canning already implements the most practical processing-level reduction step. Post-harvest washing of raw mushrooms before blanching removes surface-deposited metals. Specifying lacquered cans eliminates the Sn migration source. Draining and rinsing finished canned mushrooms before food service or ingredient use removes brine-phase Sn.

### Formulation levers

Reducing the mushroom inclusion rate in mixed-ingredient products and substituting lower-metal ingredients (such as leeks, onions, or celery) for a portion of the mushroom fraction reduces the product-level Cd and Hg contribution proportionally.

_No quantified data on substitution-level effects in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

ICP-MS testing for Cd and tHg on incoming mushroom batches, with documented acceptance criteria, is the most relevant QC lever given the inherently elevated accumulation in this commodity. Substrate testing at the mushroom farm level provides upstream assurance. Sn testing on finished canned product near end of shelf life monitors the can-corrosion pathway.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans substantially reduce Sn migration from the can wall. Storing finished cans below 20°C and implementing FIFO inventory management limits cumulative Sn buildup. For the intrinsic Cd and Hg from the mushroom tissue itself, packaging and storage conditions do not materially change the concentration [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Cd in cultivated mushrooms of 0.20 mg/kg (200 ppb) wet weight, and a higher limit for wild mushrooms of 1.0 mg/kg (1,000 ppb) wet weight, reflecting the systematically higher Cd accumulation in wild species. For Pb in mushrooms, the EU limit is 0.30 mg/kg (300 ppb) wet weight. For Sn in canned solid foods, the EU limit is 200 mg/kg (200,000 ppb) wet weight. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets a Cd maximum level of 0.20 mg/kg for cultivated mushrooms, consistent with the EU value. No specific FDA action levels for Cd, Pb, or tHg in mushrooms are currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] focuses on Pb in foods for young children.

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry (2005). *Toxicological Profile for Tin and Tin Compounds*. U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry. [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf). Government report, A-tier. [[sources/atsdr2005-tin-toxicological-profile|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Mushrooms, canned, drained solids (n=1); detectable concentrations for Cd, U, tAs, tHg |
| 2 | [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|Al et al. 2018]]. *Environmental exposure assessment of cadmium, lead, copper and zinc in different Palestinian canned foods*, Agriculture & Food Security 7:50 | 2018 | Peer-reviewed | Cd and Pb in canned mushroom samples from the Palestinian market with highest Cu among the canned product categories |
| 3 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | Inorganic tin migration from tinplate can coatings; ATSDR toxicological reference for Sn speciation, MRLs, and canned-food Sn release mechanisms relevant to canned mushrooms |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
