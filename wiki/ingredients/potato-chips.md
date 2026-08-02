---
title: "Potato chips"
type: ingredient
commodity: potato-chips
label: "Potato chips"
aliases: ["Chips, potato", "potato chips"]
category: snack
tds_food:
  number: 138
  description: "Chips, potato"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.1]
    p95_ppb: 5.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [91.2, 180]
    p95_ppb: 190
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
    typical_ppb: [0, 3.2]
    p95_ppb: 3.6
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
    typical_ppb: [74.4, 152]
    p95_ppb: 156
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
sources: 6
---

# Potato chips

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 5/10 HMTc analytes, total n=14 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 6 jurisdictions, top LB 20% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 6 claims checked, 6 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming potato-chips: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 138, "Chips, potato." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Potato chips are a fried, sliced potato product, and their metal content originates primarily in the soil from which the source potatoes were grown. Potatoes (Solanum tuberosum) are shallow-rooted tubers that grow in direct contact with the soil matrix; cadmium (Cd) and lead (Pb) in soil solution are taken up through root absorption, with Cd being more bioavailable than Pb in most agricultural soils. The potato skin and outer flesh layers carry higher metal concentrations than the inner flesh because metals accumulate preferentially at the soil-plant interface and in the epidermal tissue. When chips are produced from skin-on slices, this differential is preserved in the finished product. Beyond the plant-accumulation pathway, atmospheric deposition of Pb onto field surfaces can contribute to surface contamination of the tuber, though this pathway is secondary relative to soil uptake in most modern production contexts. The frying step does not introduce metals from refined vegetable oil, which is typically stripped of trace contaminants during industrial refining. However, the moisture loss during frying, which reduces the product weight by roughly 50 to 60 percent relative to the raw slice, concentrates all pre-existing metals in proportion; a metal present at 10 ppb in the raw slice may appear at 20 to 25 ppb in the finished chip. This concentration effect is the primary reason processed snack forms of potatoes show higher per-gram metal loads than boiled or mashed preparations.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 91.2–180 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 74.4–152 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Chips, potato" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 89 | 200 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 63 | 160 | in profile |
| Pb | 3 | 0 | 6.4 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 4 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Potato variety and production geography both influence metal concentrations in chips. Varieties with thinner skins or grown on high-Cd soils in regions such as parts of Belgium, the Netherlands, and some irrigated agricultural zones in North America accumulate more Cd per unit weight of edible tissue. Skin-on chip production accentuates this difference relative to skin-off varieties. Regional soil Cd loading driven by historical phosphate fertilizer application is the most consistent geographic driver; areas with long histories of intensive phosphate-fertilized cultivation show systematically higher Cd in root and tuber crops. Pb variation is more closely tied to historical pesticide use (pre-1970 lead arsenate applications can persist in soils for decades) and proximity to industrial point sources. The current source corpus contains only FDA TDS FY2018-FY2020 data (n=3 composite samples) and does not support a rigorous geographic or varietal breakdown; the TDS composites represent a market-basket average rather than any single origin. Quantitative regional ranges will be populated when dedicated origin-stratified studies are ingested.

## Processing effects

The most significant processing effect for potato chips is the concentration of metals during moisture removal under frying conditions. Raw potato typically contains 75 to 80 percent water by weight; the finished chip contains approximately 2 to 3 percent moisture. This dehydration concentrates all metal analytes roughly threefold to fourfold relative to the raw potato on a wet-weight basis. Skin-on versus skin-off slicing is the second major processing variable: slicing practices that retain the skin carry more Pb and Cd into the finished product because the peel carries higher metal concentrations than the flesh. Blanching or partial pre-cooking of slices before frying, used by some manufacturers to reduce acrylamide, removes some water-soluble metal fractions but the effect is modest relative to the concentration effect of frying. Seasoning coatings applied after frying (salt, flavoring) are not significant sources of metal contamination when industrial-grade ingredients are used. No evidence in the current corpus suggests that the frying oil itself contributes measurable metals under standard refined-oil conditions.

## Ingredient-derivative risk

Potato chips as a finished product are the primary form captured by this page. Derivative products that share a similar risk profile include flavored chip varieties (metal content determined by the chip base, not the flavoring), vegetable chip blends incorporating potato alongside other root vegetables, and potato-based extruded snacks where potato flour or starch is the primary ingredient. Potato flour and potato starch, being concentrated dehydrated derivatives, carry proportionally higher metal loads than fresh potato on a dry-weight basis, and products formulated primarily from these ingredients should be evaluated accordingly. Products marketed to children and infants that use potato as a primary ingredient inherit this concentration dynamic; however, no standalone regulatory limit for chips or potato snacks at the infant-food level exists in the US or EU frameworks, so the relevant comparison is the general adult food matrix rather than baby-food action levels.

## Mitigation options

### Sourcing levers

Sourcing potato from fields with documented low soil Cd and Pb is the most impactful single lever. Soil testing prior to contracting, particularly for Cd given its high bioavailability from soil, allows suppliers to identify and exclude high-Cd parcels. Regions with a history of phosphate fertilizer applications should be audited specifically for soil Cd, as phosphate rock-derived fertilizers are a recognized source of agricultural Cd loading. _No quantified reduction magnitude from sourcing selection alone is available in the current corpus for potato chips specifically; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management is the primary agronomic lever for Cd: raising soil pH above 6.5 reduces Cd bioavailability and uptake by potato plants. Liming programs in acidic agricultural soils have been documented to reduce crop Cd uptake, though the magnitude varies with soil type and baseline pH. Selecting lower-Cd potato varieties is a complementary lever where such cultivar data is available to the grower. _No quantified data on variety-level Cd differences in potato chips specifically in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Switching from skin-on to skin-off slicing reduces Pb and Cd in the finished chip by removing the peel, which carries the highest metal concentration. The magnitude of the reduction depends on the ratio of peel to flesh in the slice geometry. Blanching before frying can remove a fraction of water-soluble metals but is unlikely to be adopted purely for metal reduction given the small effect size relative to frying-induced concentration. No processing lever eliminates the concentration effect of frying itself without changing the product category.

### Formulation levers

Blending higher-Cd potato batches with lower-Cd batches at the raw-material stage can reduce average product concentration; this is a dilution strategy rather than a contamination-reduction strategy and should be distinguished from sourcing selection. Partial substitution of potato with other lower-Cd starches in extruded formats can reduce overall metal load in formulated snacks.

### Testing and QC levers

Lot-level ICP-MS testing of finished chips or of the incoming raw potato supply is the primary QC lever. Given the low n in available occurrence data (TDS composites, n=3), establishing internal spec limits requires sufficient historical sampling to characterize variance. Incoming raw potato testing by origin parcel is more efficient than finished-product testing for identifying high-Cd lots before the concentration effect of frying amplifies the problem.

### Packaging and storage levers

Packaging does not contribute to metal contamination in potato chips under standard multilayer flexible packaging conditions. Metallic foil packaging does not contact the food surface directly in most designs. Storage conditions do not meaningfully alter metal content once the product is manufactured.

## Regulatory limits that apply

No specific maximum level for heavy metals in potato chips as a product category exists under current US or EU frameworks. The applicable EU limits are those for processed cereal-based and starchy snack foods under [[regulations/eu2023-contaminants-maximum-levels]], but potato chips are typically classified under vegetable-derived processed foods. Under current EU Regulation (EC) No 1881/2006 as amended, the applicable Pb limit for processed vegetable products is 0.10 mg/kg (100 ppb) wet weight; a specific Cd limit for processed potato products is 0.050 mg/kg (50 ppb) wet weight under the framework applicable to this matrix. The FDA does not currently publish a specific action level or guidance value for Pb or Cd in potato chips; the general FDA tolerance framework under 21 CFR applies. For broader regulatory context on Closer to Zero Pb reduction goals, see [[regulations/fda-closer-to-zero]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chips, potato (n=3); detectable concentrations for Cd, Ni, Pb, tAs |
| 3 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 4 | [[sources/khalil2017-snacks-peshawar-pakistan-heavy-metals\|Khalil et al. 2017]]. *Heavy Metals Toxicity: Estimation of Heavy Metals in Branded and Local Snacks Available in the Markets of Peshawar, Pakistan*, Professional Medical Journal | 2017 | Peer-reviewed | PK Pb, Cd, Cr, Cu occurrence in 96 snack samples (29 branded across 9 potato brands and 3 corn brands; 67 non-branded local snacks) collected... (n=96) |
| 5 | [[sources/solidum2013-metro-manila-junk-food-metals\|Solidum et al. 2013]]. *Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines*, Advanced Materials Research | 2013 | Peer-reviewed | PH Pb, Cd, Cr occurrence in Thirty-six junk-food samples randomly selected from sari-sari stores in Metro Manila, Philippines, in June 2012. (n=36) |
| 6 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
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
