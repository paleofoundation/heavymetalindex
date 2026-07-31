---
title: "Clementines and tangerines"
type: ingredient
commodity: clementines-tangerines
label: "Clementines and tangerines"
aliases: [clementines, tangerines, mandarins]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10.2, 19.7]
    p95_ppb: 20.0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 4.8
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
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [63, 63]
    p95_ppb: 63
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [95.7, 861.3]
    p95_ppb: 909.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [30, 30]
    p95_ppb: 30
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [3.7, 6.8]
    p95_ppb: 7.0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
sources: 2
---

# Clementines and tangerines

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 7/10 HMTc analytes, total n=8 | labeled data-gaps: tAs |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Ni THIN, Al THIN, Cr THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Ni: needs 2 more study(ies); Al: needs 2 more study(ies); Cr: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming clementines-tangerines: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 8 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Cr: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Clementines and tangerines are thin-skinned citrus fruits that accumulate heavy metals at very low concentrations in the edible flesh. The thick-skin protection of citrus generally limits metal transfer from soil to the inner segments that are consumed; cadmium and lead taken up through roots tend to distribute preferentially in the root, stem, and leaf tissues of citrus plants rather than accumulating in fruit flesh. The peel may carry some atmospheric lead deposition, particularly in urban environments or near traffic corridors where airborne Pb particulates settle on the fruit surface, but the edible inner segments are well-shielded by the thick flavedo and albedo layers. Cadmium uptake from soil into citrus fruit is consistently low in the literature; the FSA/Fera FS102048 survey, which included clementines in its Table 6 food composite measurements, found very low metal concentrations consistent with the general citrus pattern [[sources/fsa2016-infant-food-formula-metals-survey]]. The Brassica-type active metal transport mechanisms that drive elevated cadmium in leafy greens and crucifer vegetables are absent in citrus; passive diffusion and limited xylem transport into fruit tissue constrain metal accumulation in the edible portion.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 10.2–19.7 | low | — |
| Cd | n=1 | 0–2 | low | — |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1 | low | — |
| Ni | n=1 | 63 | low | — |
| Al | n=1 | 95.7–861.3 | low | — |
| Cr | n=1 | 30 | low | — |
| Sn | n=1 | 3.7–6.8 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey (UK, 2016) measured clementines as part of a broad food survey; exact clementine-specific concentrations are pending structured extraction from Table 6 [[sources/fsa2016-infant-food-formula-metals-survey]]. Based on the general pattern of citrus fruit in the broader literature, cadmium and lead in the edible flesh of clementines and tangerines are expected to be well below the EU maximums of 0.050 mg/kg Cd and 0.10 mg/kg Pb for citrus. Variation between clementine and tangerine varieties is expected to be minor relative to the inter-site and inter-region variation driven by soil cadmium background and atmospheric Pb deposition. Growing region (Spain, Morocco, USA, China) influences metal exposure primarily through soil background and proximity to industrial or traffic sources; Mediterranean and North African production sites dominate European market supply. No region-by-region quantitative breakdown for clementines or tangerines is available in the current corpus.

## Processing effects

Clementines and tangerines are primarily consumed as fresh whole fruit after peeling; the peel is discarded before consumption in most contexts, removing any surface-deposited lead or other metals from the portion consumed. Juicing removes the peel before pressing; citrus juice carries the inner flesh metals (very low) without the peel surface-contamination component. Clementine juice concentrate involves evaporation of water, which concentrates metals proportionally on a fresh-weight-equivalent basis; from such a low baseline that even concentrated citrus juice remains extremely low in metals. Dried or candied citrus peel, where the peel is the consumed fraction, would carry higher metals than the inner flesh, as the peel may carry both internally distributed metals and surface-deposited atmospheric Pb; this derivative form is not individually characterised in the current corpus.

## Ingredient-derivative risk

The primary derivative of note is the distinction between consuming the flesh (very low metals) versus the peel (potentially higher surface-deposited Pb and atmospheric particulates). Commercial preparations using whole citrus including peel (marmalades, candied peel, some liqueurs) carry a different metal profile from flesh-only preparations. Clementine juice and juice concentrate are low-risk derivatives given the flesh-only basis of most juice production. Essential oils extracted from clementine peel carry the peel's aromatic compounds and may carry peel-associated metals, though these oils are consumed in very small quantities in food applications.

## Mitigation options

### Sourcing levers

The practical importance of sourcing levers for clementines and tangerines is low, given the already very low metal concentrations in the edible flesh. For applications using peel, selecting fruit from production sites with minimal atmospheric Pb exposure (away from major traffic routes or industrial zones) reduces surface-deposited Pb on the peel. Organic certification does not directly address metal content; soil background and atmospheric exposure are the primary determinants.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing fresh fruit before peeling reduces surface contamination on the peel, which is relevant for consumers who zest or candy the peel. For flesh consumption, the natural peeling step already removes the primary surface-contamination pathway. Blanching or cooking the peel before use in confectionery applications removes some surface-deposited metals.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level metal testing for fresh clementines or tangerines is not warranted given the expected very low metal concentrations in the edible flesh. For applications using peel (marmalades, candied peel, essential oils), confirmatory testing for lead may be appropriate if the product is marketed in high-volume to vulnerable populations.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general contaminants framework ([[regulations/eu2023-contaminants-maximum-levels]]) set a cadmium maximum of 0.050 mg/kg and a lead maximum of 0.10 mg/kg for fresh citrus fruit, applicable to clementines and tangerines. These limits apply to the fruit as placed on the market (whole fruit including peel, on a fresh-weight basis); the edible flesh alone would carry concentrations well below these limits. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides cadmium limits for fresh fruit at 0.050 mg/kg. No specific US FDA action level applies to fresh citrus; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. Given the expected very low metal concentrations in the flesh of clementines and tangerines, these regulatory limits are not expected to be approached under normal commercial production conditions.

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [23a9d75](https://github.com/paleofoundation/heavymetalindex/commit/23a9d75) | 2026-05-20 | autonomy: daemon tick 2026-05-20T02-27-45Z — gap-healing + extraction + pooling + briefings |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
| [ce0ecb2](https://github.com/paleofoundation/heavymetalindex/commit/ce0ecb2) | 2026-05-16 | sync source counts from live source-page references |
| [aa5fd53](https://github.com/paleofoundation/heavymetalindex/commit/aa5fd53) | 2026-05-13 | profiles: populate contamination_profile values on 18 ingredient pages (batch 2/7) |
| [be65f8d](https://github.com/paleofoundation/heavymetalindex/commit/be65f8d) | 2026-05-13 | pages: draft missing mandatory sections on 24 ingredient pages (cauliflower → eggs) |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [ce3e07c7b](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c7b) | 2026-05-28 | major | 1 source removed; 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
