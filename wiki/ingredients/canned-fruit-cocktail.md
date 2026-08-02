---
title: "Canned fruit cocktail"
type: ingredient
commodity: canned-fruit-cocktail
label: "Canned fruit cocktail"
aliases: ["Fruit cocktail, canned in light syrup, solids and liquids", "fruit cocktail"]
category: fruit-product
tds_food:
  number: 87
  description: "Fruit cocktail, canned in light syrup, solids and liquids"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [1, 5.4]
    p95_ppb: 5.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    p95_ppb: 0
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
    typical_ppb: [60.6, 67.8]
    p95_ppb: 68.4
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
    typical_ppb: [11, 63.8]
    p95_ppb: 64.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [3000, 60000]
    p95_ppb: 250000
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0.3, 1.4]
    p95_ppb: 1.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 9
---

# Canned fruit cocktail

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 6/10 HMTc analytes, total n=18 | labeled data-gaps: iAs, Al |
| D2 Regional coverage | OK | 10 jurisdictions, top GB 25% | — |
| D3 Anthropogenic evidence | GAP | 3 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 3 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, Sn POOLABLE, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 14 claims checked, 14 supported; 5 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming canned-fruit-cocktail: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, Sn, U; pairing 0 paired, 8 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 87, "Fruit cocktail, canned in light syrup, solids and liquids." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned fruit cocktail is a mixed processed fruit product (typically peach, pear, grape, cherry, and pineapple in syrup) whose heavy metal risk derives primarily from tin migration from the tinplate can rather than from intrinsic contamination of the fruit ingredients. Tree fruits and small fruits that compose fruit cocktail are generally among the lowest-accumulating food categories for Pb and Cd because their edible flesh is protected from soil contact by skin and peel, and because fruit tissues tend not to concentrate metals at the levels characteristic of root or leafy vegetables. The syrup medium (sugar solution, mildly acidic from fruit organic acids) maintains direct contact with the can interior throughout shelf life, and this acidic aqueous environment drives electrochemical corrosion of unlacquered tin coatings. Inorganic tin ions released from the can wall migrate into the syrup and are absorbed by the solid fruit components over time. This mechanism has been documented for decades in the canned-food literature [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]], [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]], [[sources/benoy1971-tin-toxicity-canned-fruit-juices|Benoy et al. 1971]]. Lead, cadmium, and arsenic in the fruit fractions themselves contribute modestly and represent background soil-derived accumulation in the growing region.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1–5.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 60.6–67.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 11–63.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | n=4 | 3000–60000 | medium | [[sources/tarigan2016-factors-tin-released-canned-beverages\|1]], [[sources/atsdr2005-tin-toxicological-profile\|2]], [[sources/schafer1984-tin-toxic-heavy-metal-review\|3]] |
| U | n=2 | 0.3–1.4 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Fruit cocktail, canned in light syrup, solids and liquids" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 66 | in profile |
| Ni | 3 | 60 | 69 | in profile |
| Pb | 3 | 0 | 5.5 | in profile |
| U | 3 | 0 | 1.4 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Pb in canned fruit cocktail in light syrup (solids and liquids combined) at a median of 5.0 ppb (range 0 to 5.5 ppb, n=3) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 60 to 69 ppb (median 63 ppb), and Cr ranged from 0 to 66 ppb (median 55 ppb). Cd, tAs, and tHg were at or below the reporting limit. The elevated Ni and Cr detections in this product are notable and may reflect trace contamination from can interior alloy components or fruit variety variation; additional independent sources are needed to confirm the pattern. Tarigan et al. 2016 measured Sn in canned fruit juice and beverages in Indonesia, finding that product pH and storage time were the primary drivers of Sn release [[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan et al. 2016]]; these findings are directly applicable to canned fruit cocktail given similar acidity and can format. Historic incident data from Benoy et al. 1971 documented Sn concentrations well above 200 mg/kg in improperly handled unlacquered canned fruit products during a 1967 Kuwait distribution incident [[sources/benoy1971-tin-toxicity-canned-fruit-juices|Benoy et al. 1971]].

## Processing effects

The thermal sterilization (retorting) step in canning initiates the tin-release mechanism by heating the acidic fruit-syrup matrix in contact with the can wall; Sn release increases during and after retorting. Prolonged storage at ambient temperatures allows continued slow corrosion. Once opened, refrigeration slows further Sn release but does not reverse what has already migrated. The combined-solids-and-liquids TDS measurement includes Sn that has migrated into both the syrup and the solid fruit components; a drained-solids-only measurement would show lower total Sn and Ni, though the syrup itself carries the bulk of the migrated Sn. No metal-reducing transformation occurs during thermal processing; the concern is migration from packaging rather than intrinsic commodity contamination.

## Ingredient-derivative risk

Canned fruit cocktail is consumed directly or incorporated into desserts, yogurts, and baked goods. Its metal contribution to final products is dominated by whatever Sn (from the can) and Ni/Pb (from the fruit) are present in the portion used. Products that incorporate syrup as well as solids carry more migrated Sn than those using only drained solids. The fruit fractions themselves carry a low intrinsic metal load, so derivative applications using canned fruit cocktail as one ingredient among many dilute the effect proportionally.

## Mitigation options

### Sourcing levers

Specifying lacquered-can sourcing is the primary lever for reducing Sn in this commodity. Can manufacturer quality specifications for coating integrity and composition (including absence of Pb solder, which has been phased out in most markets but may persist in legacy supply chains) provide additional protection.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Fruit ingredients in cocktail are low metal accumulators by nature; agronomic interventions have marginal impact relative to the can-sourcing lever.

### Processing levers

Reducing retort temperature or time is not available as a safety-lever because retorting is required for shelf-stable sterilization. Lacquered cans are the processing-compatible mitigation. For consumers or food service operators: draining and rinsing the solid fruit before use removes syrup-phase Sn; this is the highest-impact simple intervention for reducing Sn exposure from canned fruit products.

### Formulation levers

Substituting glass-jarred fruit for tinplate-canned fruit cocktail eliminates the Sn migration pathway entirely. Refrigerated fruit products (not shelf-stable) packaged in plastic or glass also avoid Sn migration while maintaining product quality.

### Testing and QC levers

Sn measurement by ICP-MS in finished product from lots near end of shelf life provides the most directly relevant QC data. Monitoring Sn across can batches and storage durations establishes lot-specific Sn curves, enabling tighter shelf-life management. For Pb, Cd, and As in the fruit fractions, the low baseline makes testing a lower priority; lot-acceptance specifications from fruit suppliers with documented growing-region metal surveys are the appropriate upstream control.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are the most important packaging specification for Sn reduction. Storage at cool temperatures (below 20°C) and under controlled humidity (to prevent external can corrosion affecting seal integrity) reduces the rate of Sn release. Implementing a strict shelf-life ceiling and FIFO inventory rotation limits cumulative exposure from aged stock. Products that have been stored above 25°C for extended periods should be tested before use in formulations targeting sensitive populations [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb) wet weight. The Codex Alimentarius general standard for contaminants sets a Sn limit of 250 mg/kg for canned foods (solid content). For Pb in fruit, the EU limit is 0.10 mg/kg (100 ppb) wet weight. For Cd in fruit, the EU limit is 0.050 mg/kg (50 ppb). No FDA-specific action level for Sn in canned fruit cocktail is currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] does not address Sn.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/atsdr2005-tin-toxicological-profile|Toxicological Profile for Tin and Tin Compounds]]<span class="hmi-ref-meta">Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry · U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry · 2005 · [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/schafer1984-tin-toxic-heavy-metal-review|Tin — A Toxic Heavy Metal? A Review of the Literature]]<span class="hmi-ref-meta">S. G. Schafer and U. Femfert · Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 · 1984 · [doi.org/10.1016/0273-2300(84)90006-0](https://doi.org/10.1016/0273-2300(84)90006-0)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/benoy1971-tin-toxicity-canned-fruit-juices|The Toxicity of Tin in Canned Fruit Juices and Solid Foods]]<span class="hmi-ref-meta">Christine J. Benoy, Patricia A. Hooper, and R. Schneider · Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 · 1971 · [doi.org/10.1016/0015-6264(71)90152-0](https://doi.org/10.1016/0015-6264(71)90152-0)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/tarigan2016-factors-tin-released-canned-beverages|Factors are Affecting Tin Released in Canned Beverages]]<span class="hmi-ref-meta">Rida Evalina Tarigan, Jansen Silalahi, and Muchlisyam · International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 · 2016 · [sphinxsai.com](https://sphinxsai.com/2016/ph_vol9_no5/3/(330-333)V9N5PT.pdf)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/alsabagh2025-canned-products-baghdad-heavy-metals\|Alsabagh 2025]]. *Assessment of heavy metal and nitrate contamination in canned products from local markets in Baghdad*, Alnakhla Journal of Science | 2025 | Peer-reviewed | IQ Pb, Cd, Co, Mn, Fe, Zn, Cu occurrence in Canned products from local markets in Baghdad, Iraq |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in canned fruit cocktail in light syrup (TDS Food 87; n=3 per analyte) |
| 3 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | Measured Sn in canned fruit juice and other canned beverages (n=27, Indonesia); pH and storage-time drivers of tin release; regulatory context for Sn in canned fruits |
| 4 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in Canned fruit, vegetables, and fish purchased at local markets in Romania; 3 cans per product batch, each analyzed... (n=13) |
| 5 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 6 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | ATSDR Sn toxicological profile covering dietary inorganic tin from canned foods including canned fruit; MRL derivation and species (inorganic vs organotin) distinction |
| 7 | [[sources/efsa2005-tin-food-upper-intake\|EFSA 2005]]. *Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin*, EFSA Journal | 2005 | Regulatory opinion | EU/GB/FR Sn occurrence in EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered... |
| 8 | [[sources/schafer1984-tin-toxic-heavy-metal-review\|Schafer et al. 1984]]. *Tin — A Toxic Heavy Metal? A Review of the Literature*, Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 | 1984 | Peer-reviewed | Literature review on dietary Sn toxicity from canned foods; frames the relative low concern of inorganic tin vs organotins and includes canned fruit data |
| 9 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | Toxicity study using high-Sn outbreak canned fruit juices; establishes the acute GI irritation threshold for inorganic Sn and reports occurrence data from a 1967 Kuwait canning incident |
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
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
