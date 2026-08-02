---
title: "Collard greens"
type: ingredient
commodity: collard-greens
label: "Collard greens"
aliases: ["Collards, fresh/frozen, boiled", "collards"]
category: leafy-green
tds_food:
  number: 108
  description: "Collards, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.9]
    p95_ppb: 5.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [11.3, 49.8]
    p95_ppb: 53.1
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
    typical_ppb: [0, 4.8]
    p95_ppb: 5.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 51]
    p95_ppb: 66.5
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: collards-boiled-as-consumed-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 2.4]
    p95_ppb: 4.5
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
sources: 1
---

# Collard greens

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: rare) | OK | 5/10 HMTc analytes, total n=13 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 2 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 1/10 populated cells declare a basis token | 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 25 claims checked, 25 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming collard-greens: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 2 more study(ies); U: THIN, needs 1 more study(ies); basis: 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 108, "Collards, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Collard greens are a leafy brassica vegetable with large, broad leaf surfaces that expose an unusually high ratio of surface area to edible mass. This morphology creates two distinct accumulation pathways. The first is atmospheric deposition: airborne lead particles, whether from vehicle exhaust, industrial emissions, or soil resuspension, settle onto the waxy cuticle of the leaf and adhere through electrostatic and physical trapping. Because collard leaves are not typically peeled or removed before consumption, this surface-deposited lead enters the food supply directly. The second pathway is root uptake of cadmium from soil, a mechanism common across the brassica family, which includes cabbage, kale, and broccoli. Brassica species express transporters that facilitate cadmium movement from soil pore water into root tissue and onward into above-ground biomass. Nickel, which appears at detectable concentrations in the FDA TDS FY2018-FY2020 data at the p90 level [[sources/fda2022-tds-elements-fy2018-fy2020]], follows a similar soil-root uptake pathway.

Cooking collards in the Southern US tradition involves boiling in water with substantial volume reduction. This wilting concentrates per-gram metal concentrations relative to the fresh weight by removing water mass, though boiling in large water volumes can simultaneously leach some surface-deposited and water-soluble metals. The net effect on as-consumed metal concentration depends on the proportion of surface-deposited versus root-incorporated metal, the volume of cooking water, and whether that water is discarded or consumed. At present the TDS data reflect the prepared (boiled) form, which already incorporates these cooking dynamics.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–4.9 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 11.3–49.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–4.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–1.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–51 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.4 | high | — |

## Synthesis basis

The chromium cell was resynthesized on 2026-06-11 on a boiled, as-consumed wet-weight basis, the form FDA Total Diet Study Food 108 ("Collards, fresh/frozen, boiled") reports and the form in which this ingredient is consumed.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported chromium at typical and 95th-percentile values of zero at high confidence with two contributing studies. Both of those properties were artifacts. The high-confidence literal zero came from pooling FDA Total Diet Study composites in which 26 of 27 boiled-collard samples fell below the 50 µg/kg chromium reporting limit and the reported zeros were carried as literal zeros; the inflated study count attributed two contributors to a cell that only the FDA dataset populates. The single detected composite, a 2019 winter Southeast sample, was reported at 75 µg/kg, which is the distribution maximum. With one source, a fully censored central distribution, and a single detect, the cell is reported as total chromium at low confidence with one contributing source ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The median through the 95th percentile remain at the censored floor because the rank-95 sample is still below the reporting limit; the floor is expressed as a numeric zero with the 50 µg/kg reporting limit stated here rather than inside the value.

Chromium is reported as total chromium only. No hexavalent-chromium (Cr-VI) measurement for collard greens exists in the corpus, and Cr-VI is never inferred from total chromium. No collard-specific multi-region occurrence survey has been integrated, so the upper distribution is not recovered from primary literature; broad mixed-vegetable surveys are not adopted here because they do not measure collard greens as a named commodity. Leafy-green chromium can run substantially higher in produce grown near smelters, tanneries, chromite mining, or wastewater-irrigated soils; should collard-specific data from such settings be integrated, the upper tail and confidence would be revised upward.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Collards, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 7.1 | 11.32 | 22 | 49.8 | 53.1 | 65 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 75 | in profile |
| Ni | 27 | 0 | 0 | 0 | 51 | 66.5 | 72 | in profile |
| Pb | 27 | 0 | 0 | 0 | 4.9 | 5.27 | 5.9 | in profile |
| U | 27 | 0 | 0 | 0 | 2.44 | 4.5 | 5.4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 4.82 | 5.28 | 7.2 | in profile |
| tHg | 27 | 0 | 0 | 0 | 1.24 | 1.3 | 1.4 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset provides the most structured occurrence data currently available for boiled collard greens, with 27 composite samples across a US market basket [[sources/fda2022-tds-elements-fy2018-fy2020]]. The TDS distribution shows Cd ranging from 7.1 ppb at the minimum to 65 ppb at the maximum (median 22 ppb, p90 49.8 ppb, p95 53.1 ppb). Pb is largely below detection across samples, with p90 at 4.9 ppb and a maximum of 5.9 ppb, indicating that atmospheric Pb deposition onto commercial market-basket collards is modest in the US context. Ni appears with a median of zero but a p90 of 51 ppb and maximum of 72 ppb, suggesting episodic presence in some market samples. Total arsenic shows a similar episodic pattern, with p90 at 4.82 ppb and maximum of 7.2 ppb.

No peer-reviewed multi-region survey of collard greens specifically has been integrated into this corpus yet, so geographic or cultivar-level breakdown beyond the US TDS composite is a data gap. Leafy vegetable surveys from regions with elevated soil cadmium or lead (for example, areas adjacent to smelters, mining operations, or industrially contaminated floodplains) consistently show higher leafy-green metal concentrations than market-basket composites from diverse commercial sources. This geographic signal is expected to be detectable for collards when additional sourcing-specific literature is integrated.

## Processing effects

Boiling is the dominant preparation method for collard greens, particularly in Southern US culinary tradition. Boiling in a large volume of water that is subsequently discarded can reduce surface-deposited Pb, since the hydrophilic fraction of atmospheric deposits can leach into cooking water. Studies of leafy vegetable preparation generally show that boiling in excess water and discarding the liquor reduces Pb content at the food surface. Root-incorporated Cd, by contrast, is bound within plant cell walls and tissue and is less readily leached by water; boiling has a smaller proportional effect on root-uptake metals.

The volume reduction during boiling means that collards, which lose a large fraction of their mass as water evaporates and tissue wilts, report higher metal concentrations per gram of cooked product than per gram of fresh raw leaf for metals that are not water-extractable. The TDS measures this cooked matrix directly, so TDS values already reflect the as-consumed concentration after boiling and draining.

_No quantified data on the specific effect of boiling volume or water-to-leaf ratio on Pb or Cd concentrations in collard greens is in the current corpus; section will be expanded when relevant evidence is ingested._

## Ingredient-derivative risk

Collard greens consumed in the United States appear most commonly as a boiled or stewed whole leaf preparation, without significant industrial derivative processing into concentrates or extracts. The primary derivative risk is in the waste stream: collard cooking liquid, which may carry water-soluble metals leached from the leaf surface, is sometimes consumed as "pot liquor" and could carry a portion of the surface-deposited metal load. This is relevant to nutritional risk assessments in populations with high pot-liquor consumption but is not yet quantified in the corpus.

Freeze-dried collard greens sold as supplements or ingredient concentrates would be expected to concentrate metals proportional to their water-removal ratio. Collard powder or dehydrated collard used as a fortifying ingredient would similarly carry the metal burden of the raw leaf in a more concentrated form per gram. Neither of these derivative forms is specifically characterized in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing collard greens from agricultural areas with low background soil cadmium and verified low atmospheric lead deposition is the highest-impact lever. US market-basket collards show moderate Cd (median 22 ppb) in TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]], but the upper tail (max 65 ppb, p95 53 ppb) indicates that some supply lots are substantially higher. Origin-level soil screening for Cd and proximity to industrial Pb emission sources are the relevant procurement controls. Certified organic sourcing reduces exposure to phosphate-fertilizer cadmium but does not eliminate atmospheric Pb deposition.

### Agronomic levers

_No quantified data on agronomic interventions specifically for collard greens metal accumulation is in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing collard leaves thoroughly before cooking can remove a portion of surface-deposited atmospheric particles, including lead-bearing particulate matter. Boiling in a generous volume of water and discarding the cooking liquid is expected to further reduce surface-associated Pb relative to consuming pot liquor. These interventions are low-cost and consistent with common culinary practice, though quantitative removal data specific to collards is not yet in the corpus.

### Formulation levers

For food manufacturers using collard green ingredients (for example, in ready-to-eat Southern-style vegetable products), selecting from sourcing regions with documented lower cadmium soil burden and specifying collard leaf rather than collard powder or concentrate will reduce the metal load per serving. Dilution with lower-risk vegetables in composite products (mixed greens, vegetable blends) also reduces per-serving exposure.

### Testing and QC levers

Given that the upper tail of market Cd in collard greens reaches 65 ppb in US TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level cadmium testing is warranted for any brand using collard greens as a primary ingredient at significant serving sizes. Total arsenic and nickel testing at spot-check frequency is reasonable given that both appear at elevated levels in some market samples.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in collard greens is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union under Regulation (EC) No 1881/2006 as amended, including [[regulations/eu2023-contaminants-maximum-levels]], sets a maximum level of 0.30 mg/kg (300 ppb) wet weight for lead in leafy vegetables and 0.20 mg/kg (200 ppb) wet weight for cadmium in leafy vegetables. Collard greens fall within the leafy vegetable category. The US TDS market-basket Cd maximum of 65 ppb and Pb maximum of 5.9 ppb are substantially below these EU limits for the sampled market-basket products, though the EU limits represent regulatory ceilings rather than safety floors and are not direct benchmarks for product acceptability.

No US federal maximum level for lead or cadmium in leafy vegetables has been finalized as of 2026. FDA's Closer to Zero program addresses metals in infant and toddler foods; adult leafy vegetable products are not subject to specific US federal ML as of this date. Codex Alimentarius sets a maximum level of 0.30 mg/kg for lead in leafy vegetables (Codex General Standard for Contaminants and Toxins, CXS 193-1995 and revisions).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Collards, fresh/frozen, boiled (n=27) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 1 source added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
