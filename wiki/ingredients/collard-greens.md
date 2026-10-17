---
title: "Collard greens"
dek: "A leafy brassica vegetable covered through measurements in boiled collards. Explore the evidence on metal occurrence, soil uptake, processing and regulatory context."
rail_highlights:
  - label: Exposure
    text: Nickel was detected in some boiled collard composites
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: FDA collard observations describe the boiled form
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [11.3, 49.8]
    p95_ppb: 53.1
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
    typical_ppb: [0, 4.8]
    p95_ppb: 5.3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 51]
    p95_ppb: 66.5
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
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::108::chromium","role":"context","food_id":"108","food_name":"Collards, fresh/frozen, boiled","metal_species":"Cr","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":26,"reporting_limit_min_ppb":50,"reporting_limit_max_ppb":50,"min_lower_bound_ppb":0,"max_lower_bound_ppb":75,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
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
sources: 1
hero_image: /static/heroes/leafy-greens-spinach-kale-lettuce.webp
quick_read:
  summary: "Boiled collard greens carry metals from soil uptake and leaf deposits, with preparation affecting the concentrations consumed."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]], lead and nickel, with total arsenic also reported"
    - label: Main drivers
      text: "root uptake from soil and airborne particles deposited on broad leaf surfaces"
    - label: Practical framing
      text: "read the measurements as boiled collards; cooking water and moisture loss affect the result"
hero_image_alt: "Spinach, kale, collard greens, romaine and iceberg lettuce illustrating collard greens ingredient context."
---

# Collard greens

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Boiled collard greens carry metals from soil uptake and leaf deposits, with preparation affecting the concentrations consumed.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a>, lead and nickel, with total arsenic also reported</li>
    <li><strong>Main drivers:</strong> root uptake from soil and airborne particles deposited on broad leaf surfaces</li>
    <li><strong>Practical framing:</strong> read the measurements as boiled collards; cooking water and moisture loss affect the result</li>
  </ul>
</div>

This page draws on evidence from [[sources/fda2022-tds-elements-fy2018-fy2020|FDA]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 108, "Collards, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Collard greens are a leafy brassica vegetable with large, broad leaf surfaces that expose an unusually high ratio of surface area to edible mass. This morphology creates two distinct accumulation pathways. The first is atmospheric deposition: airborne lead particles, whether from vehicle exhaust, industrial emissions, or soil resuspension, settle onto the waxy cuticle of the leaf and adhere through electrostatic and physical trapping. Because collard leaves are not typically peeled or removed before consumption, this surface-deposited lead enters the food supply directly. The second pathway is root uptake of cadmium from soil, a mechanism common across the brassica family, which includes cabbage, kale, and broccoli. Brassica species express transporters that facilitate cadmium movement from soil pore water into root tissue and onward into above-ground biomass. Nickel, which appears at detectable concentrations in the FDA TDS FY2018-FY2020 data in some market samples [[sources/fda2022-tds-elements-fy2018-fy2020]], follows a similar soil-root uptake pathway.

Cooking collards in the Southern US tradition involves boiling in water with substantial volume reduction. This wilting concentrates per-gram metal concentrations relative to the fresh weight by removing water mass, though boiling in large water volumes can simultaneously leach some surface-deposited and water-soluble metals. The net effect on as-consumed metal concentration depends on the proportion of surface-deposited versus root-incorporated metal, the volume of cooking water, and whether that water is discarded or consumed. At present the TDS data reflect the prepared (boiled) form, which already incorporates these cooking dynamics.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–4.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 11.3–49.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–4.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–1.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–51 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | Source context | Not quantified | — | — |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.4 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 108: Collards, fresh/frozen, boiled | tAs | 27 | 8 | 3.6–7.2 | 3 |
| 108: Collards, fresh/frozen, boiled | Cd | 27 | 27 | 7.1–65 | 1 |
| 108: Collards, fresh/frozen, boiled | Cr | 27 | 1 | 75 | 50 |
| 108: Collards, fresh/frozen, boiled | Pb | 27 | 6 | 4.1–5.9 | 4 |
| 108: Collards, fresh/frozen, boiled | tHg | 27 | 9 | 1–1.4 | 1 |
| 108: Collards, fresh/frozen, boiled | Ni | 27 | 4 | 43–72 | 40 |
| 108: Collards, fresh/frozen, boiled | U | 27 | 9 | 1.2–5.4 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset provides the most structured occurrence data currently available for boiled collard greens, with 27 composite samples across a US market basket [[sources/fda2022-tds-elements-fy2018-fy2020]]. The TDS distribution shows Cd ranging from 7.1 ppb at the minimum to 65 ppb at the maximum (median 22 ppb). Pb is largely below detection across samples, with a maximum of 5.9 ppb, indicating that atmospheric Pb deposition onto commercial market-basket collards is modest in the US context. Ni appears with a median of zero but a maximum of 72 ppb, suggesting episodic presence in some market samples. Total arsenic shows a similar episodic pattern, with a maximum of 7.2 ppb.

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

Sourcing collard greens from agricultural areas with low background soil cadmium and verified low atmospheric lead deposition is the highest-impact lever. US market-basket collards show moderate Cd (median 22 ppb) in TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]], but the upper tail (max 65 ppb) indicates that some supply lots are substantially higher. Origin-level soil screening for Cd and proximity to industrial Pb emission sources are the relevant procurement controls. Certified organic sourcing reduces exposure to phosphate-fertilizer cadmium but does not eliminate atmospheric Pb deposition.

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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**Cr.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Collards, fresh/frozen, boiled (n=27) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
