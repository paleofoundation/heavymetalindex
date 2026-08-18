---
type: ingredient
commodity: fresh-herbs
title: "Fresh Herbs"
label: "Fresh Herbs"
aliases: [fresh-culinary-herbs, raw-herbs, basil, mint, perilla]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 80]
    p95_ppb: 200
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, atmospheric-deposition, surface-area-to-volume, fresh-vs-dried-basis]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/dried-herbs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 9
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Fresh Herbs

Fresh herbs — the live or freshly-cut leaves, flowers, and aerial plant parts of culinary aromatic plants (basil, parsley, cilantro, dill, mint, thyme, oregano, sage, rosemary, chives, tarragon, marjoram) — sit at the lower end of the herbs-and-spices category by per-mass concentration because the fresh form has not undergone the 7-10× concentration uplift that drying produces. Fresh herbs are commonly grown in home gardens, community gardens, urban allotments, and small-scale commercial production, which means siting variability (roadside, industrial-corridor) drives much of the within-category variance on Pb specifically. The current corpus loads 3 directly-routed sources: Fischer 2022 Polish mercury in spice plants (n=48 including fresh-leaf samples, [[sources/fischer2022-mercury-spice-plants-poland]]), LHAAC 2025 Australian Coordinated Sampling Project 41 covering both fresh and dried product (n=380, [[sources/lhaac2025-csp41-herbs-spices-wa]]), and Winiarska-Mieczan 2023 Polish Cd-Pb in 432 herb-and-single-component-spice samples covering fresh herbs as a subset ([[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices]]). The paired-product comparison with [[ingredients/dried-herbs]] establishes the fresh-vs-dried-basis factor; the same plant species at the same source carries roughly 1/8 to 1/10 the per-mass Pb-and-Cd of the dried form purely from the moisture-removal accounting.

## Why this commodity accumulates heavy metals

Fresh herbs take metals through the same plant-physiology pathways as the broader leafy-vegetable category (see [[ingredients/leafy-vegetables]]): root uptake of soluble soil metals (Cd, Cr, Ni) via the transpiration stream, and direct atmospheric deposition of particulate Pb onto the leaf surface during the growing cycle. The surface-area-to-volume ratio of fresh-herb leaves (typically thin, large surface area per gram) makes them efficient collectors of atmospheric Pb relative to root vegetables or compact-head leafy vegetables. The siting of fresh-herb production is highly variable: commercial Mediterranean herb production (Italy, Greece, Spain, Turkey) is dominantly in cropland settings with managed soil and water; home-garden and urban-garden production often sits in settings with elevated soil or atmospheric Pb backgrounds (former industrial sites, roadside plots). The Polish Winiarska-Mieczan 2023 dataset (n=432 herbs and single-component spices) is the largest single-jurisdiction recent dataset for the Cd-and-Pb profile across fresh and dried product on a comparable methodological basis ([[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices]]). The Fischer 2022 Polish mercury-in-spice-plants work characterises the mercury profile across 48 fresh-leaf samples, finding generally low mercury but with detectable concentrations in some species ([[sources/fischer2022-mercury-spice-plants-poland]]). The Australian LHAAC 2025 CSP 41 covers both fresh and dried product at scale (n=380) with the 7-metal panel ([[sources/lhaac2025-csp41-herbs-spices-wa]]).

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Al, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 10–300 | medium | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|1]] |
| Cd | n=3 | 5–80 | medium | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 5–50 | low | — |
| tHg | n=2 | 0–10 | low | [[sources/fischer2022-mercury-spice-plants-poland\|1]] |
| Ni | n=1 | — | — | — |
| Al | n=1 | — | — | — |
| Cr | n=1 | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Polish Winiarska-Mieczan 2023 dataset (n=432) is the most species-diverse fresh-herbs dataset in the loaded corpus, covering common Polish-cuisine herbs and single-component spices in their fresh and dried forms; the work confirms the fresh-vs-dried-basis factor of ~7-10× concentration on a per-mass basis ([[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices]]). The Australian LHAAC 2025 CSP 41 covers both fresh and dried product across n=380 retail-and-import samples with the 7-metal panel ([[sources/lhaac2025-csp41-herbs-spices-wa]]). The Fischer 2022 Polish mercury-in-spice-plants work (n=48 fresh-leaf samples) is the most species-specific tHg data for fresh herbs ([[sources/fischer2022-mercury-spice-plants-poland]]). Species-level variance is substantial: parsley, dill, chives, and basil sit at the lower end of the fresh-herb Pb-and-Cd distribution; sage, lemon balm, and chamomile sit at the higher end (mirroring the dried-herb pattern); thyme, oregano, mint sit at the middle. Siting matters more than species for the Pb pathway specifically: roadside-grown parsley can carry more Pb than commercially-grown lemon balm grown on Mediterranean cropland away from atmospheric sources.

## Processing effects

Drying is the major processing transition for fresh herbs, with fresh-to-dried producing the 7-10× per-mass concentration uplift documented above. The transition is well-characterised and is a basis change rather than contamination. Washing fresh herbs before consumption removes surface particulate Pb (the atmospheric-deposition fraction) but does not affect internalised Cd, Cr, or Ni. Blanching and freezing (used for some processed fresh-herb products) loses small fractions of soluble Cd and Cr to the blanch water. Chopping and mincing do not affect the per-mass metal load. Herb purees and pestos concentrate the per-mass metal load proportional to the moisture-removal during processing.

## Ingredient-derivative risk

Fresh whole-leaf herbs represent the baseline. Bagged or packaged fresh-herb product carries the same per-mass load with surface contamination reduced. Frozen herbs lose a small fraction of soluble metals to the freezing-and-blanching step. Herb pestos (basil pesto, parsley pesto, cilantro chutney) concentrate metals on a per-mass basis through moisture removal. Herb-infused oils carry a much smaller fraction of the parent herb's metal load because most metals partition with the solid residue rather than the oil phase. Herb-infused vinegars and herb teas extract a fraction of the parent herb's soluble metals into the liquid; per-serving exposure tracks the herb mass and the extraction efficiency.

## Mitigation options

### Sourcing levers

Source from production regions and operations with documented soil-and-water screening, away from roadsides and industrial corridors. For home-gardeners and urban-gardeners, soil testing before planting is the upstream intervention. Specify commercially-grown Mediterranean-origin product for the lower-end of the distribution.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoidance of phosphate fertilisers with elevated Cd impurity reduces Cd loading. For brand-controlled-supply operations, raised-bed and container-growing with imported clean substrate eliminates the inherited-soil Pb pathway.

### Processing levers

Washing reduces surface Pb but not internalised metals. Drying concentrates metals on a per-mass basis (basis change, not contamination). Avoid extended storage in unsealed bulk where atmospheric Pb dust deposition can accumulate.

### Formulation levers

For finished-product applications using fresh herbs as one ingredient, the inclusion ratio caps per-serving exposure. Substitution between fresh-herb species shifts the per-mass profile modestly.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 10 ppb fresh-weight) and Cd (≤ 5 ppb fresh-weight) is appropriate for commercial fresh-herb buyers, with conversion to dry-weight equivalent reporting where the downstream product is dried.

### Packaging and storage levers

Packaging is not the dominant pathway for fresh herbs. Standard food-grade clamshell and bag packaging do not affect the metal load.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the leafy-vegetable Pb maximum of 0.30 mg/kg fresh weight to fresh herbs, and Cd at 0.20 mg/kg fresh weight (general vegetables; some fresh herbs fall under specific tighter categories). The EU Regulation 2023/915 applies tighter limits: 0.30 mg/kg Pb for "leafy vegetables and fresh herbs," and 0.20 mg/kg Cd for leafy vegetables and stems excluding celery and salsify. The Australian LHAAC 2025 CSP 41 found commercial fresh-herb product generally compliant with applicable Australian caps on a fresh-weight basis ([[sources/lhaac2025-csp41-herbs-spices-wa]]). The Polish Winiarska-Mieczan 2023 work confirmed similar compliance for the Polish-market fresh-herb category ([[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices]]).

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 9 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fischer2022-mercury-spice-plants-poland|The Mercury Concentration in Spice Plants]]<span class="hmi-ref-meta">Fischer A and Brodziak-Dopierała B · Processes · 2022 · [doi.org/10.3390/pr10101954](https://doi.org/10.3390/pr10101954)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/lhaac2025-csp41-herbs-spices-wa|Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices]]<span class="hmi-ref-meta">LHAAC · Local Health Authorities Analytical Committee, Edith Cowan University · 2025</span><span class="hmi-ref-tag">Government</span>
3. [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices|The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine]]<span class="hmi-ref-meta">Winiarska-Mieczan A, Jachimowicz K, Kwiecień M, Krusiński R, Kislova S, Sowińska L, et al. · Biological Trace Element Research · 2023 · [doi.org/10.1007/s12011-022-03437-7](https://doi.org/10.1007/s12011-022-03437-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | Polish fresh-and-dried herb Cd-Pb panel (n=432); largest single-jurisdiction dataset establishing fresh-vs-dried-basis factor |
| 2 | [[sources/fischer2022-mercury-spice-plants-poland\|Fischer et al. 2022]]. *The Mercury Concentration in Spice Plants*, Processes | 2022 | Peer-reviewed | Polish mercury in 48 fresh-leaf spice-plant samples; strongest tHg data |
| 3 | [[sources/souri2019-leafy-vegetables-growth-stage-metals\|Souri et al. 2019]]. *Plant growth stage influences heavy metal accumulation in leafy vegetables of garden cress and sweet basil*, Chemical and Biological Technologies in Agriculture | 2019 | Peer-reviewed | IR Cd, Pb, Ni, tAs, Cr, Co, Cu, Mn, Zn occurrence in Garden cress and sweet basil from five wastewater-irrigated farms in Shahre Rey, south of Tehran, Iran; field samples... (n=5) |
| 4 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 5 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 6 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1e60f272d](https://github.com/paleofoundation/heavymetalindex/commit/1e60f272d) | 2026-08-04 | major | 2 sources removed; 1 section removed; narrative text revised |
| [3eb44d227](https://github.com/paleofoundation/heavymetalindex/commit/3eb44d227) | 2026-08-03 | major | 1 section added; narrative text revised |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
