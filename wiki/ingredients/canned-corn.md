---
title: "Canned corn"
type: ingredient
commodity: canned-corn
label: "Canned corn"
aliases: ["Corn, canned, drained solids", "canned corn"]
category: vegetable-grain
tds_food:
  number: 55
  description: "Corn, canned, drained solids"
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
    typical_ppb: [0.2, 2.0]
    p95_ppb: 2.1
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
    typical_ppb: [0.7, 4.7]
    p95_ppb: 4.9
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
    typical_ppb: [0, 44]
    p95_ppb: 49.5
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 5
---

# Canned corn

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=14 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 5 jurisdictions, top PS 25% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 1 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 13 claims checked, 13 supported; 2 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming canned-corn: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 55, "Corn, canned, drained solids." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned corn (maize) presents a two-pathway metal risk: a low intrinsic pathway from the corn grain itself, and a secondary packaging pathway from the tinplate can. Corn (Zea mays) is among the lowest-accumulating major cereal crops for heavy metals. Its kernel anatomy, particularly the thick pericarp and the relatively impermeable protein matrix of the endosperm, limits uptake and storage of Pb and Cd compared to wheat, rice, or brassica vegetables. Soil cadmium levels have a modest effect on corn grain Cd, but maize is classified as a low Cd accumulator at typical agricultural soil concentrations. Lead uptake from soil into corn grain is also low. The dominant heavy metal concern for canned corn therefore shifts to tin (Sn) migration from the tinplate can interior. Tinplate food cans are manufactured from tin-coated steel; in unlacquered (unlined) cans, the acidic or mildly acidic environment of the food product in contact with the tin coating drives electrochemical corrosion that releases inorganic tin ions into the food. Corn in brine (which is mildly acidic) in contact with unlacquered tinplate can accumulate Sn over shelf life. Storage time and temperature amplify this effect [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|2]] |
| Cd | n=2 | 0.2–2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0.7–4.7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–44 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Corn, canned, drained solids" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 2.2 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 55 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 5 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in canned corn (drained solids) at a median of 1.1 ppb (range 0 to 2.2 ppb, n=3) and total arsenic at a median of 3.6 ppb (range 0 to 5 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 55 ppb. Pb, Cr, U, and tHg were at or below the reporting limit. These values reflect a low-intrinsic-contamination profile for the corn grain itself. Sn data are not in the TDS FY2018-FY2020 dataset for this food; the ATSDR tin profile documents that unlacquered canned vegetables can accumulate 50 to 200 mg/kg (50,000 to 200,000 ppb) Sn after extended storage, while lacquered cans maintain much lower levels [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]]. Geographic and varietal variation in corn grain metals is minimal relative to the can-type driven Sn range.

## Processing effects

Canning involves blanching the corn prior to thermal processing; this step may reduce some water-soluble metals. The thermal sterilization step (retorting) does not reduce metal concentrations but does not increase them in the corn matrix. The primary processing-relevant effect is the interaction between the product matrix and the can interior over time: Sn migration is slow at refrigerator temperatures but accelerates at ambient and warm temperatures and with extended storage. Draining and rinsing canned corn before consumption reduces the Sn and other metal content in the aqueous fraction (brine) but does not remove metals already incorporated into the corn kernel tissue. The drained-solids TDS measurement already excludes brine.

## Ingredient-derivative risk

Canned corn is used directly as a component in mixed vegetables, soups, salads, and retail products. Its metal contribution to blended products is dominated by the corn-grain fraction for most metals, and by any Sn migration from the can for tin. When canned corn is processed into corn-based products (corn salsas, corn chowders packaged in their own cans), the Sn exposure risk compounds if an additional canning step is involved.

## Mitigation options

### Sourcing levers

Sourcing corn from regions with documented low soil-Cd and low soil-Pb reduces the grain-derived metal load, though the baseline is already low for this crop. For the canned product specifically, can specification (lacquered versus unlacquered) is the highest-impact sourcing decision.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Soil pH management benefits other crops more than maize given maize's inherently low metal uptake.

### Processing levers

Draining and rinsing canned corn before use reduces dissolved metals (including Sn) present in the brine fraction. This is a practical consumer-level step with no quantified magnitude in the current corpus for Sn specifically.

### Formulation levers

Substituting fresh, frozen, or glass-jarred corn for tinplate-canned corn eliminates the Sn migration pathway entirely. This is a high-impact formulation lever for products in which canned corn is used at meaningful inclusion rates.

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

ICP-MS measurement of Sn in finished canned product, particularly from lots with longer projected shelf life or higher storage temperatures, is the most relevant QC test for this commodity. For grain-derived metals (Cd, Pb, As), the low baseline concentrations in corn make this a lower priority than for wheat or rice ingredients.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans substantially reduce Sn migration compared to unlacquered cans, because the polymer coating interposes a barrier between the metal can wall and the food product. Specifying lacquered cans in purchasing contracts is the single most effective intervention for Sn in canned corn. Storing finished cans at lower temperatures (below 20°C) and minimizing shelf life reduces cumulative Sn migration. Product rotation (FIFO inventory management) limits the proportion of product approaching maximum shelf-life Sn levels [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb); in canned beverages the limit is 100 mg/kg. No specific EU maximum level for Pb or Cd in canned corn as a distinct category is established beyond the general vegetable limits (Pb 0.10 mg/kg, Cd 0.050 mg/kg for vegetables). The Codex Alimentarius general standard for contaminants sets an international Sn limit of 250 mg/kg for canned foods (solid content). The FDA does not currently have a specific action level for Sn in canned vegetables; FDA Closer to Zero [[regulations/fda-closer-to-zero]] focuses on Pb in foods for young children and does not address Sn.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/atsdr2005-tin-toxicological-profile|Toxicological Profile for Tin and Tin Compounds]]<span class="hmi-ref-meta">Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry · U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry · 2005 · [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Corn, canned, drained solids (n=3); detectable concentrations for Cd, Ni, tAs |
| 2 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 3 | [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|Al et al. 2018]]. *Environmental exposure assessment of cadmium, lead, copper and zinc in different Palestinian canned foods*, Agriculture & Food Security 7:50 | 2018 | Peer-reviewed | Cd and Pb in canned corn samples from the Palestinian market with one Pb exceedance among four brands |
| 4 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 5 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | Inorganic tin migration from tinplate can coatings; ATSDR toxicological reference for Sn speciation, MRLs, and canned-food Sn release mechanisms relevant to canned corn |
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
