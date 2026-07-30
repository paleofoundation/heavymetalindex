---
title: "Ham"
type: ingredient
commodity: ham
label: "Ham"
aliases: ["Ham, cured (not canned), baked", "cured ham"]
category: meat
tds_food:
  number: 17
  description: "Ham, cured (not canned), baked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 6.8]
    p95_ppb: 7.7
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2.2]
    p95_ppb: 2.6
    confidence: high
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
    typical_ppb: [0, 3.8]
    p95_ppb: 4.2
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 7]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cured-baked-ham-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: cured-baked-ham-wet-weight
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
    p95_ppb: 140
    confidence: high
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
    typical_ppb: [0, 2.6]
    p95_ppb: 2.8
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 2
---

# Ham

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=13 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 1 jurisdictions, top RO 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 2 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 2/10 populated cells declare a basis token | 8 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 30 claims checked, 30 supported; 3 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming ham: fda2022-tds-elements-fy2018-fy2020, zhang2022-pork-heavy-metals-china |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 8 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 17, "Ham, cured (not canned), baked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Ham, as a cured pork product derived from the hind leg of swine, accumulates heavy metals through pathways similar to those governing other muscle meats: dietary intake from feed and water, and limited metabolic accumulation in soft tissue relative to visceral organs. Pork muscle generally presents low concentrations of Cd and Pb because these metals partition preferentially to the kidney cortex and liver in swine rather than to skeletal muscle. The curing process introduces several additives, including sodium chloride, sodium nitrite, and in some products inorganic phosphate salts and polyphosphate binders. Phosphate-based curing agents derived from impure mineral sources can introduce trace Cd, though food-grade phosphate specifications are intended to minimize this pathway. Cadmium in the feed chain from phosphate-fertilized crop inputs may also contribute to dietary Cd load in swine, ultimately manifesting at low levels in muscle tissue. Lead in pork muscle is typically near or below reporting limits in modern commercial production. The FDA FY2018-FY2020 Total Diet Study found detectable Pb in some ham samples at low concentrations, with Cd also detected at the high end of the distribution, reflecting the population variance across US retail sources [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–6.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|2]] |
| Cd | n=2 | 0–2.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/zhang2022-pork-heavy-metals-china\|3]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.6 | high | — |

## Synthesis basis and censoring treatment

The total-mercury and nickel cells were resynthesized on 2026-06-11 on a cured-baked-ham wet-weight basis, the form in which FDA prepared and measured the matrix (TDS Food 17, "Ham, cured (not canned), baked"). Values below the analytical reporting limit are treated as left-censored bounds, not as measured zeros.

The earlier profile reported both analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for cured baked ham (n=27), in which every sample fell at or below the reporting limit and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limit tHg 1 µg/kg, Ni 40 µg/kg). The resynthesis replaces those literal zeros with the honest left-censored floor (reported as "<1" for mercury and "<40" for nickel) and, for mercury, the one corroborating non-zero pork value available in the corpus.

Total mercury rests on the fully censored FDA distribution (all 27 ham composites below the 1 µg/kg reporting limit) plus a single secondary China-pork aggregate ([[sources/zhang2022-pork-heavy-metals-china|Zhang et al. 2022]], fitted pork total-mercury concentration 0.7 × 10⁻² mg/kg = 7 µg/kg, basis not reported by the source, evidence tier C). The typical band is therefore carried as a left-censored floor of "<1" rising to the 7 µg/kg pork anchor; the 95th-percentile is left uncomputed because the only non-zero value in the pool is that one tier-C pork-muscle summary at unstated wet/dry basis, and any upper-tail figure would be an interpolation unsupported by a measured cured-ham value. Total mercury is held distinct from methylmercury and is not derived from it; no speciated mercury measurement exists for this commodity. The Romanian processed-pork survey that supports the lead and cadmium cells ([[sources/hoha2014-pork-pb-cd-cu-zn-romania|Hoha et al. 2014]]) does not measure mercury and contributes nothing to this cell.

Nickel is recorded with only the FDA censored floor of "<40 µg/kg": 26 of 27 ham composites fell below the 40 µg/kg nickel reporting limit and the single remaining composite was reported at exactly the 40 µg/kg reporting limit rather than as a confirmed detection above it, so the honest floor is that reporting limit expressed as a left-censored bound and no positive occurrence value or upper bound is published for the commodity (the whole-milk nickel precedent). The 95th-percentile is carried as null, and confidence is low, until a positive cured-ham or pork-muscle nickel measurement is ingested. No non-FDA nickel value for ham or pork muscle exists in the current corpus.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Ham, cured (not canned), baked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 2.22 | 2.61 | 4.7 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 140 | 400 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 40 | in profile |
| Pb | 27 | 0 | 0 | 0 | 6.76 | 7.74 | 9.3 | in profile |
| U | 27 | 0 | 0 | 1.4 | 2.58 | 2.77 | 3.6 | in profile |
| tAs | 27 | 0 | 0 | 0 | 3.84 | 4.18 | 4.6 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured ham (TDS Food 17, "Ham, cured (not canned), baked") with n=27 composites and found Pb detectable with a p90 of 6.76 ppb and a maximum of 9.3 ppb; Cd detectable with a p90 of 2.22 ppb and a maximum of 4.7 ppb; U with a median of 1.4 ppb and a maximum of 3.6 ppb; tAs with a p90 of 3.84 ppb and a maximum of 4.6 ppb; and Cr with a maximum of 400 ppb [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. Mercury (tHg) fell below the 1 ppb reporting limit across all 27 composites and is carried as a left-censored "<1" floor rather than a measured zero; the single corroborating non-zero value in the corpus is a tier-C China-pork total-mercury aggregate of 7 ppb ([[sources/zhang2022-pork-heavy-metals-china|3]], basis not reported). Nickel fell at or below its 40 ppb reporting limit across the entire distribution, with one composite reported at exactly the reporting limit and no confirmed detection above it, and is likewise carried as a left-censored "<40" floor. These distributions reflect the US retail market for cured ham. European survey data for cured pork products are not present in the current corpus; the EU maximum levels for pork muscle provide the operative regulatory reference. Canned versus non-canned formats are expected to differ for Sn, as canned ham would be subject to tin migration from the can; this page covers the non-canned, baked form.

## Processing effects

Curing introduces salt, nitrite, and in some formulations phosphate compounds; the curing brine may absorb trace metals from the processing environment, but the magnitude of this pathway is not well-characterized in the current corpus. Baking or cooking after curing concentrates metals slightly on a wet-weight basis due to moisture loss, an effect that the FDA TDS preparation method (baked) would capture in the measured values. Smoking of ham, which is common for certain product categories, exposes the meat surface to combustion aerosols that may deposit trace metals, but the surface-to-volume ratio of a whole ham leg limits the penetration of any deposited contamination into the muscle interior. The phosphate-based additives used as water-retention agents in some ham products introduce a trace Cd pathway if the phosphate source is impure; food-grade phosphate specifications for the EU and US are designed to control this.

## Ingredient-derivative risk

Ham is a finished product rather than an intermediate; the primary derivative-risk consideration is canned ham, where Sn migration from the can interior becomes relevant (see [[ingredients/ketchup]] for general treatment of canned products and tin migration). Diced ham used in ready-to-eat mixed products (soups, pasta dishes) is diluted with other ingredients; the per-serving metal burden from the ham component is reduced proportionally. Ham stock and broths derived from cured ham are not characterized in the current corpus.

## Mitigation options

### Sourcing levers

Selecting pork from producers who use feed from regions with low soil Cd and use food-grade phosphate additives with verified low-Cd purity specifications are the principal sourcing levers. Organ-meat-free ham specifications (excluding kidney or liver blends) keep Cd at muscle-tissue levels.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Using food-grade phosphate additives with verified Cd specifications reduces the curing-additive metal pathway. Non-canned formats avoid the Sn migration pathway present in canned ham.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given detectable Pb (max 9.3 ppb) and Cd (max 4.7 ppb) in the TDS distribution [[sources/fda2022-tds-elements-fy2018-fy2020]], targeted lot-level verification for these analytes by ICP-MS is feasible and provides documentation for regulatory compliance against the EU 0.10 mg/kg Pb and 0.050 mg/kg Cd limits in muscle meat.

### Packaging and storage levers

Non-canned ham (the form characterized on this page) is not subject to Sn migration; packaging in vacuum pouches or oxygen-scavenged modified-atmosphere trays does not introduce metal pathways.

## Regulatory limits that apply

EU Regulation 2023/915 sets maximum levels for Pb in meat (muscle meat of pig) at 0.10 mg/kg wet weight and for Cd at 0.050 mg/kg wet weight [[regulations/eu2023-contaminants-maximum-levels]]. The FDA TDS maximum values for Pb (9.3 ppb) and Cd (4.7 ppb) in baked ham are well within these limits. No specific US statutory maximum for Pb or Cd in cured pork exists. The EU Cd limit for pig muscle of 0.050 mg/kg (50 ppb) is the operative regulatory cap for EU market access [[regulations/eu-2023-915-cadmium]]. Codex Alimentarius does not set a specific ML for Pb or Cd in cured pork muscle as a distinct category [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Zhang H, Zhou G, Zhang S, Yang Y, Dev S, Su Q, et al. (2022). *Risk assessment of heavy metals contamination in pork*. Food Control. [https://doi.org/10.1016/j.foodcont.2021.108793](https://doi.org/10.1016/j.foodcont.2021.108793). Peer-reviewed, C-tier. [[sources/zhang2022-pork-heavy-metals-china|Source record]]
3. Hoha GV, Costăchescu E, Leahu A, and Păsărin B (2014). *Heavy metals contamination levels in processed meat marketed in Romania*. Environmental Engineering and Management Journal. [omicron.ch.tuiasi.ro](http://omicron.ch.tuiasi.ro/EEMJ/). Peer-reviewed, B-tier. [[sources/hoha2014-pork-pb-cd-cu-zn-romania|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Ham, cured (not canned), baked (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
| 2 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0b8cc0157](https://github.com/paleofoundation/heavymetalindex/commit/0b8cc0157) | 2026-06-11 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [8c45a300b](https://github.com/paleofoundation/heavymetalindex/commit/8c45a300b) | 2026-05-31 | major | 1 source added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
