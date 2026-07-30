---
title: "Frankfurter"
type: ingredient
commodity: frankfurter
label: "Frankfurter"
aliases: ["Frankfurter (all beef/beef and pork), boiled", "hot dog", "frankfurter"]
category: meat
tds_food:
  number: 28
  description: "Frankfurter (all beef/beef and pork), boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.1]
    p95_ppb: 6.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.2, 4.6]
    p95_ppb: 4.7
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
    typical_ppb: [0, 0]
    p95_ppb: 2.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 59.4]
    p95_ppb: 73.3
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
    typical_ppb: [0, 47.7]
    p95_ppb: 97.7
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
    typical_ppb: [0, 2.2]
    p95_ppb: 2.4
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

# Frankfurter

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming frankfurter: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 28, "Frankfurter (all beef/beef and pork), boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Frankfurters are emulsified processed meat products that typically contain a blend of skeletal muscle, mechanically separated meat, and organ meat trimmings from beef and pork. The metal burden of a frankfurter is higher than that of pure skeletal muscle from the same animal species because the organ fractions, particularly kidney and liver, accumulate cadmium and lead at concentrations many times greater than muscle tissue. Animals accumulate cadmium in the kidney cortex over their lifetime through dietary and inhalation exposure; slaughter animals in conventional production carry kidney Cd that reflects both the duration of their feeding period and the Cd content of the feed, which in turn tracks the Cd in the phosphate sources used in feed manufacturing. When kidney and liver trimmings are incorporated into frankfurter emulsion, they elevate the composite Cd and Pb above what the muscle fraction alone would produce. The extent of organ content is formulation-specific; all-beef or all-pork frankfurters labeled with meat species but not specifying organ content may include these high-accumulation tissues up to any legally permitted level of mechanically separated meat. Curing salts (sodium nitrite, sodium chloride) and other preservative additives contribute no meaningful metals at the concentrations used.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| Cd | n=2 | 1.2–4.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–59.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–47.7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.2 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Frankfurter (all beef/beef and pork), boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 22 | 0 | 4.8 | in profile |
| Cr | 22 | 0 | 100 | in profile |
| Ni | 22 | 0 | 76 | in profile |
| Pb | 22 | 0 | 7.1 | in profile |
| U | 22 | 0 | 2.9 | in profile |
| tAs | 22 | 0 | 4.2 | in profile |
| tHg | 22 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Cadmium concentrations in frankfurters vary substantially with the fraction of organ meat in the formulation and with the Cd burden carried by the livestock at the time of slaughter. Animals older at slaughter accumulate more kidney Cd; feed systems that use high-Cd phosphate mineral supplements result in higher kidney Cd than systems using low-Cd phosphate sources or pasture-based diets. Geographic variation reflects regional phosphate geology and fertilizer sourcing: European beef produced under certain national production systems has been found to carry higher kidney Cd than US counterparts in some surveys, though this is not characterized at the frankfurter product level in the current corpus. Within the US market, the FDA TDS FY2018-FY2020 reports a median Cd of approximately 3.35 ppb and a maximum of 4.8 ppb in frankfurters (n=22, boiled) [[sources/fda2022-tds-elements-fy2018-fy2020]], which is low in absolute terms but above the near-zero Cd values seen in pure skeletal muscle cuts.

## Processing effects

Boiling or grilling of frankfurters does not remove cadmium or lead from the emulsion matrix, as these metals are bound to protein and sulfhydryl groups in the meat. Boiling may result in minor leaching of water-soluble metal fractions into the cooking water; the FDA TDS measurement basis is the boiled product as consumed, which represents the most relevant dietary exposure estimate [[sources/fda2022-tds-elements-fy2018-fy2020]]. The emulsification step that produces the frankfurter texture homogenizes the metal burden of the organic fractions, meaning that any single portion of a frankfurter is representative of the batch average rather than of any specific anatomical fraction. Smoking or adding liquid smoke flavor introduces no additional metal load.

## Ingredient-derivative risk

Frankfurters are a finished consumer product and are not typically used as an intermediate ingredient in further food manufacturing. The primary derivative risk question concerns the organ-meat and mechanically separated meat fractions that are incorporated during manufacture; these fractions, if separated and used independently in other processed meat products (meat pastes, pates, canned meats), carry higher metal concentrations than the frankfurter emulsion as a whole. Pet food manufactured from similar organ-meat trimmings can accumulate substantially more Cd than the human food equivalent and sits outside the scope of this wiki.

## Mitigation options

### Sourcing levers

Specifying lean muscle meat content above a minimum threshold in the frankfurter formulation specification, and restricting or eliminating kidney and liver trimming fractions, is the most effective lever for reducing Cd. For manufacturers purchasing from suppliers under long-term contracts, requiring animal origin and feed documentation reduces uncertainty about the Cd burden coming in with organ fractions.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Adjusting the ratio of skeletal muscle to mechanically separated meat and organ content in the frankfurter recipe is the most direct formulation lever. Products labeled as pure muscle-cut frankfurters (where formulation standards permit such claims) carry lower expected Cd than those relying heavily on organ and mechanically separated fractions.

### Testing and QC levers

Lot-level testing of finished product or incoming organ-meat fractions by ICP-MS for Cd provides actionable QC data. Given the batch-averaging effect of emulsification, finished product testing reflects the compositional outcome of each production run.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in meat and meat products intended for general consumption is 0.10 mg/kg wet weight, and for Cd in muscle meat of bovine animals and pig it is 0.050 mg/kg wet weight. For offal (liver, kidney) from bovine animals and pigs, the EU Cd maximum level is 0.50 mg/kg wet weight, reflecting the known accumulation in these tissues. The frankfurter as a composite product is assessed against the limits for the finished meat product category, not the organ-specific limits, unless organ content is declared and the product is sold as an offal product. In the United States, USDA FSIS has not established action levels for metals in processed meat products analogous to FDA's food contaminant limits; the primary regulatory framework is through feed safety rules that govern the Cd burden in livestock feed, acting upstream of the product.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Frankfurter (all beef/beef and pork), boiled (n=22); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
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
| [8c4f23243](https://github.com/paleofoundation/heavymetalindex/commit/8c4f23243) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
