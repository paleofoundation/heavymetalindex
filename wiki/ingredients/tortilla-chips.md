---
title: "Tortilla chips"
type: ingredient
commodity: tortilla-chips
label: "Tortilla chips"
aliases: ["Chips, tortilla", "tortilla chips"]
category: grain-product
tds_food:
  number: 67
  description: "Chips, tortilla"
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
    typical_ppb: [1.9, 2.1]
    p95_ppb: 2.2
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
    typical_ppb: [0, 2.5]
    p95_ppb: 2.8
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
    typical_ppb: [132, 148]
    p95_ppb: 149
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
    typical_ppb: [11.2, 75.2]
    p95_ppb: 77.6
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
    typical_ppb: [0, 1.0]
    p95_ppb: 1.1
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
---

# Tortilla chips

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
| D8 Provenance integrity | GAP | 12 claims checked, 12 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming tortilla-chips: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 67, "Chips, tortilla." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Tortilla chips are manufactured from nixtamalized corn masa. The primary source of heavy metals in this product is the corn grain itself, which accumulates Cd, Pb, and other metals from soil through root uptake in a pattern similar to other cereal grains, though generally at lower concentrations than rice or wheat. Corn is considered a moderate accumulator: Cd concentrations in corn grain are typically lower than in durum wheat or sunflower seeds but higher than in most animal products. Nixtamalization, the traditional alkaline cooking process using calcium hydroxide (lime), is the defining processing step for masa-based products; its effect on metal bioaccessibility is discussed below. Nickel and chromium data in the FDA TDS FY2018-FY2020 survey (n=3) suggest meaningful Ni concentrations in tortilla chips (median 140 ppb, max 150 ppb), which is consistent with the known Ni content of corn and the concentration effect of frying and water removal. The salt added during frying and seasoning contributes negligible metals.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.9–2.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–2.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 132–148 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 11.2–75.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Chips, tortilla" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 1.9 | 2.2 | in profile |
| Cr | 3 | 0 | 80 | in profile |
| Ni | 3 | 130 | 150 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 1.2 | in profile |
| tAs | 3 | 0 | 3.1 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=3) for tortilla chips show Ni in the range 130 to 150 ppb (median 140 ppb), Cr with a wide range of 0 to 80 ppb (median 56 ppb), Cd from 1.9 to 2.2 ppb, and tAs from below detection to 3.1 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020]]). These represent a small composite US retail sample; geographic and varietal variation in corn sourcing, as well as differences in lime quality and frying conditions, would be expected to drive additional variance across manufacturers. Organic versus conventional corn sourcing may also influence Cd concentrations if organic growing soils differ in background Cd loading.

## Processing effects

Nixtamalization involves cooking dry corn in an alkaline solution of calcium hydroxide and water (typically at approximately 90 degrees Celsius), followed by steeping and then washing the grain before grinding into masa. The alkaline cooking step raises the pH of the grain surface to 11 to 12, which can influence the chemical speciation and bioaccessibility of certain metals. For inorganic arsenic, nixtamalization at high pH may reduce bioaccessibility relative to the raw grain. For Cd, the alkaline step may partially reduce bioavailability through precipitation of cadmium hydroxide, though the net effect on finished-product concentrations is not well quantified in the current corpus. The washing step after steeping removes some solubilized surface material, potentially reducing surface-adsorbed metals. Frying in vegetable oil, the final step in tortilla chip production, removes free water and concentrates all solutes proportionally, including any metals present in the masa. The frying oil itself contributes negligible metals.

## Ingredient-derivative risk

Tortilla chips sit at the end of a corn-processing chain. The primary risk inheritance is from the corn variety and growing region. Blue corn tortilla chips, made from blue corn with higher anthocyanin content, may differ from yellow or white corn in metal loading depending on cultivar and growing conditions, but no systematic comparison is in the current corpus. Corn masa used for tortillas (soft), tostadas, and tamales shares the same nixtamalization step and similar metal profile. Corn flour (masa harina), which is dried nixtamalized masa, is an intermediate product that can be tested as a proxy for the corn base prior to chip frying.

## Mitigation options

### Sourcing levers

Specifying corn from growing regions with low background soil Cd and Pb, ideally supported by supplier soil testing or commodity testing, is the primary sourcing lever. Corn from areas adjacent to smelters, fertilizer manufacturing, or heavily irrigated agricultural zones with long histories of phosphate fertilization carries higher Cd risk.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Optimising the nixtamalization wash step to remove maximum surface-adhered material may reduce metal load at the masa stage, but the magnitude of this effect is not quantified in the current corpus. Controlling frying oil temperature and turnover rate has no documented effect on metal concentrations.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Testing incoming dried corn or masa harina for Cd, Pb, and Ni by ICP-MS before production provides the most cost-effective quality gate. Finished-chip testing is appropriate for lot-release verification.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

No FDA action level specific to tortilla chips or corn snack products is currently in force. The EU sets maximum levels for Cd in cereals (0.10 mg/kg, or 100 ppb) and for Pb in cereals (0.20 mg/kg, or 200 ppb) under [[regulations/eu2023-contaminants-maximum-levels]], and these limits are applicable to corn-based food products sold in the EU. [[regulations/codex-cadmium-mls]] provides the international Codex ML for cereal grains, which forms the basis for many national limits outside the EU. [[regulations/fda-closer-to-zero]] Pb guidance covers processed baby foods but does not currently address tortilla chips or snack corn products.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chips, tortilla (n=3); detectable concentrations for Cd, Cr, Ni, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
