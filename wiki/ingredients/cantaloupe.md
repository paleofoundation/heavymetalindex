---
title: "Cantaloupe"
type: ingredient
commodity: cantaloupe
label: "Cantaloupe"
aliases: ["Cantaloupe, raw/frozen", "cantaloupe"]
category: fruit
tds_food:
  number: 89
  description: "Cantaloupe, raw/frozen"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 7]
    p95_ppb: 7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cantaloupe-raw-frozen-edible-flesh-wet-weight
    speciation: total-Pb
  Cd:
    status: populated
    typical_ppb: [2.5, 14.8]
    p95_ppb: 21.6
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
    typical_ppb: [0, 18]
    p95_ppb: 18.7
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: cantaloupe-raw-frozen-edible-flesh-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 172]
    p95_ppb: 234
    confidence: high
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
    typical_ppb: [0, 92]
    p95_ppb: 114
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cantaloupe-raw-frozen-edible-flesh-wet-weight
    speciation: total-Cr-only
  Sn:
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
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 3
---

# Cantaloupe

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=11 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | below-tier | 2 jurisdictions, top IN 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 2 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 3/10 populated cells declare a basis token | 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 32 claims checked, 32 supported; 3 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming cantaloupe: fda2022-tds-elements-fy2018-fy2020, rashid2015-metals-rock-melon-malaysia |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 89, "Cantaloupe, raw/frozen." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cantaloupe (Cucumis melo) is a cucurbit fruit with one of the lowest heavy metal accumulation profiles among common food crops. The edible interior flesh is protected by a thick, netted outer rind that physically separates it from direct soil contact, and the plant does not prioritize metal translocation to fruit tissue in the way that leafy vegetables or root crops do. Lead uptake from soil into melon flesh is limited both by physical rind protection and by the low phloem mobility of Pb, which restricts translocation from roots to developing fruit. Cadmium uptake is higher in cucurbits than lead, but cantaloupe flesh still shows Cd well below levels typical of brassica vegetables or root crops in the same soil. The FDA FY2018-FY2020 Total Diet Study confirms this low-accumulation pattern, with Pb, Cr, tHg, and U below the reporting limit across all 27 composites and Cd in the single-digit to low-teen ppb range [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]; those below-limit results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section), and a riverbank-grown Indian cantaloupe survey detected low but non-zero lead and chromium in the edible pulp on a dry-weight basis. Nickel and total arsenic are detectable but at modest concentrations. Cantaloupe is not a canned product in the TDS food assessed (TDS Food 89 is raw/frozen), so tin migration from packaging is not a factor for this commodity.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–7 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=2 | 2.5–14.8 | high | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–18 | high | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–172 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–92 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a cantaloupe raw/frozen edible-flesh wet-weight basis, the form in which the fruit is consumed and the basis FDA Total Diet Study Food 89 reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Cantaloupe, raw/frozen" (n=27), in which every sample fell below the reporting limit for each of these four metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], reporting limits Pb 4, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound, and, for lead and chromium, with the detected riverbank-grown cantaloupe values from the one survey that measured the named cultivar by name.

Lead and chromium rest on the FDA censored floor plus a single Indian riverbank survey that measured the cantaloupe muskmelon cultivar (*Cucumis melo* var. Cantaloupe) directly ([[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Elbagory et al. 2025]], ICP-OES, edible pulp, ten Ganges-Yamuna riverbank sites, 2024). That study reports cantaloupe-cultivar lead of 0.03 mg/kg dry weight (range 0.01–0.06) and total chromium of 0.76 mg/kg dry weight (range 0.55–0.95) in dried edible pulp. These are dry-weight pulp values; applying the source's own ~88 percent melon-pulp moisture assumption, the wet-weight equivalents are roughly an order of magnitude lower, near 4 µg/kg (range about 1–7) for lead and near 92 µg/kg (range about 66–114) for total chromium. The pooled lead typical of [0, 7] takes the FDA censored floor as the low bound and the wet-weight-equivalent top of the Elbagory cantaloupe range as the upper, with the 95th-percentile set at that same 7 µg/kg upper anchor. The chromium typical of [0, 92] spans the FDA censored floor to the wet-weight-equivalent Elbagory cantaloupe central, and the 95th-percentile of 114 µg/kg is the wet-weight-equivalent top of the Elbagory cantaloupe range. The wet-weight-equivalent chromium central sits above the FDA chromium reporting limit of 50 µg/kg: the FDA composite places US cantaloupe chromium below 50 µg/kg, while the riverbank-grown Indian pulp converts to a higher figure, a contradiction most plausibly explained by the source's dry-weight-to-wet-weight conversion uncertainty and by riverbank cultivation under contaminated irrigation; the cell is therefore held at low confidence with the tension stated rather than averaged away. Both cells are held at low confidence: only two contributors exist, the only positive measurements are dry-weight pulp from a single contaminated-irrigation growing region, and the FDA composite is fully censored. Chromium is reported as total chromium only; no cantaloupe hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred.

Total mercury rests on the FDA censored floor alone. No source in the corpus reports a cantaloupe-specific positive value: the FDA TDS composite is below the 1 µg/kg reporting limit across all 27 composites, and neither the Elbagory riverbank survey nor the Malaysian rock-melon survey measured mercury. The cell is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single contributor. Total mercury is held distinct from methylmercury and is not derived from it.

Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source reports an extractable quantitative cantaloupe value, so no distribution is published (the rice-uranium precedent). Inorganic arsenic remains a reviewed data gap because no speciated measurement exists for this ingredient; total arsenic is held distinct from it and is unchanged in this pass.

A second cantaloupe-relevant survey, the Malaysian rock-melon study ([[sources/rashid2015-metals-rock-melon-malaysia|Rashid and Yaacob 2015]], *Cucumis melo* cv. Glamour), reports much higher pulp lead (1.82 mg/kg) and total chromium (6.42 mg/kg) but is excluded from the pooled cantaloupe percentiles on two grounds: it measured a different muskmelon cultivar marketed as rock melon rather than cantaloupe, and its farms were deliberately selected because preliminary testing had already shown elevated metals, with an unstated wet-versus-dry-weight basis and no reported limits of detection or quality control. It is carried below as a stratified broad-melon outlier, not relabeled as cantaloupe.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cantaloupe, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 2.46 | 7.1 | 14.8 | 21.6 | 36 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 75 | 172 | 234 | 270 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 7 | 18 | 18.7 | 26 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in cantaloupe (raw/frozen) in the range of 0 to 36 ppb (median 7.1 ppb, p90 14.8 ppb, n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 270 ppb (median 75 ppb, p90 172 ppb), which is unexpectedly high relative to other low-accumulation fruits and may warrant confirmation with independent sources. Total arsenic ranged from 0 to 26 ppb (median 7 ppb). Pb, Cr, tHg, and U were below the reporting limit across all 27 composites; these are left-censored bounds, not measured zeros, so they constrain the flesh metal burden from above rather than establishing it at zero. The one survey that measured the cantaloupe cultivar by name, a riverbank-grown Indian study, detected low but non-zero lead and total chromium in the dried edible pulp ([[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Elbagory et al. 2025]]): cantaloupe-cultivar lead averaged 0.03 mg/kg dry weight (range 0.01–0.06) and total chromium 0.76 mg/kg dry weight (range 0.55–0.95), which convert to roughly 4 and 92 µg/kg wet weight respectively under the source's ~88 percent moisture assumption. Cadmium and total arsenic in that survey ran 0.05–0.20 and 0.02–0.08 mg/kg dry weight, consistent with the modest FDA wet-weight figures. The Malaysian rock-melon survey ([[sources/rashid2015-metals-rock-melon-malaysia|Rashid and Yaacob 2015]]) reports far higher pulp lead (1.82 mg/kg) and total chromium (6.42 mg/kg) in a different muskmelon cultivar grown on farms deliberately selected for known contamination, with an unstated reporting basis; it is an upper-bound broad-melon outlier rather than a representative cantaloupe value and is not pooled into the cantaloupe percentiles. The Ni values are the most notable finding in the FDA TDS data for this commodity; the corpus currently does not include independent studies to confirm or contextualize the cantaloupe Ni range. Geographic variation is expected to be minimal in protected commercial flesh given the physical protection afforded by the rind, but riverbank and contaminated-irrigation cultivation can lift pulp lead and chromium well above the low-accumulation baseline, as the Indian and Malaysian surveys show.

## Processing effects

Cantaloupe consumed as fresh or frozen halves or cubes does not involve processing that would alter metal concentrations in the flesh. Washing the outer rind before cutting is a food safety practice (to prevent cross-contamination from the rind surface to the flesh during slicing) that does not directly reduce intrinsic metal content in the flesh. Cantaloupe pureed for smoothies, baby food, or juice processing carries whatever metal load is in the flesh into the final product at concentration determined by the flesh-to-water ratio. Frozen cantaloupe undergoes minimal processing (peeling, cutting, individual quick freezing) that does not alter metal concentrations.

## Ingredient-derivative risk

Cantaloupe is used in fruit salads, smoothies, baby food purees, juices, and dried snack products. Given its very low intrinsic metal load for most analytes, it contributes minimally to product-level metal concentrations even at high inclusion rates. Dried cantaloupe concentrates metals proportionally to moisture loss; a product dried to 10 percent of original moisture would carry approximately 10 times the fresh-weight concentration, but from a very low baseline this remains well within regulatory limits for most analytes. The notable exception to the low-risk profile is the Ni range observed in TDS data (up to 270 ppb), which if confirmed by additional sources would warrant inclusion in product-level Ni exposure estimates for formulations using cantaloupe at high inclusion rates.

## Mitigation options

### Sourcing levers

Standard clean-soil agricultural sourcing is sufficient for most analytes given the low accumulation baseline. If the Ni values observed in TDS data are confirmed by additional surveys as consistently elevated, sourcing from lower-Ni-soil origins would become relevant. Irrigation water quality monitoring (particularly for Cd) provides upstream assurance.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Soil pH management and avoidance of contaminated irrigation water are general best practices applicable here as for other cucurbit crops.

### Processing levers

No processing steps are available to meaningfully reduce the intrinsic metal content of cantaloupe flesh. Washing the exterior rind before slicing prevents surface contamination of the flesh; this is standard practice.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Given the low baseline, formulation substitution is not indicated on metal-safety grounds for most analytes.

### Testing and QC levers

Routine heavy metal testing of cantaloupe is low priority given the consistently low values in TDS data for most analytes. If the Ni range is confirmed as elevated in additional studies, Ni verification on incoming lots would become relevant for products targeting sensitive populations.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh, frozen, or pureed cantaloupe. No tin migration pathway applies to this commodity in its primary form.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Pb in fruit of 0.10 mg/kg (100 ppb) wet weight and for Cd in fruit of 0.050 mg/kg (50 ppb) wet weight. Cantaloupe falls under these general fruit limits. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets analogous Cd limits for fruit. No specific FDA action levels for cantaloupe are currently operative. Under FDA Closer to Zero [[regulations/fda-closer-to-zero]], any cantaloupe puree marketed as a food for young children would fall within the scope of Pb action levels under development for fruit-based baby foods.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna|Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin]]<span class="hmi-ref-meta">Elbagory M, Abd El-Aziz MA, Omara AED, Abou Fayssal S, and Kumar V · Horticulturae · 2025 · [doi.org/10.3390/horticulturae11020216](https://doi.org/10.3390/horticulturae11020216)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/rashid2015-metals-rock-melon-malaysia|Determination of Metals Contamination in Rock Melon (Cucumis melo) and Coco Peat]]<span class="hmi-ref-meta">Rashid NFA and Yaacob A · Jurnal Intelek 10(1): 33–36 (ISSN 2231-7716; UiTM Perlis) · 2015</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|Elbagory et al. 2025]]. *Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin*, Horticulturae | 2025 | Peer-reviewed | Cd, Cr, Pb, tAs, and Al in cantaloupe and Kajri muskmelon cultivars grown along the Ganges-Yamuna river basin |
| 2 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cantaloupe, raw/frozen (n=27); detectable concentrations for Cd, Ni, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
