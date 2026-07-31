---
title: "Turkey"
type: ingredient
commodity: turkey
label: "Turkey"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: prepared-turkey-muscle-wet-weight
    reviewed_data_gap: true
    note: "Turkey-measured occurrence fully left-censored (FDA TDS turkey breast n=27, all <4 ppb RL). Prior [0,22]/p95 110 was a chicken/broiler cross-species substitution (omirzakov2024, lysenko2021, kamouh2024) and has been retracted to a reviewed data gap."
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: prepared-turkey-muscle-wet-weight
    reviewed_data_gap: true
    note: "Turkey-measured occurrence fully left-censored (FDA TDS turkey breast n=27, all <1 ppb RL). Prior [0,4]/p95 90 was a chicken/broiler cross-species substitution (omirzakov2024, lysenko2021, kamouh2024) and has been retracted to a reviewed data gap."
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 5.4]
    p95_ppb: 7.5
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: prepared-turkey-muscle-wet-weight
    reviewed_data_gap: true
    note: "No turkey-measured tHg detect in the corpus. FDA TDS turkey breast (n=27) fully left-censored at the 1 ppb RL; the only other routed turkey source (raeeszadeh2021) did not measure mercury. Prior [0,3]/p95 20 was an entirely broiler/chicken cross-species substitution (lysenko2021, omirzakov2024) and has been retracted to a reviewed data gap."
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    basis: prepared-turkey-muscle-wet-weight
    reviewed_data_gap: true
    note: "Turkey-measured occurrence fully left-censored (FDA TDS turkey breast n=27, all <40 ppb RL). Prior [0,230] rested on a single chicken survey (kamaly2023), a cross-species substitution. The only turkey-measured Ni in the corpus is raeeszadeh2021 (C-tier dry-weight preprint with documented table inconsistencies), too weak to anchor a published value. Retracted to a reviewed data gap."
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 59]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: prepared-turkey-muscle-wet-weight
    speciation: total-Cr-only
    note: "Sole grounded contributor is turkey-measured: FDA TDS turkey breast (n=27), 26/27 left-censored at the 50 ppb RL with one detect at 59 ppb. Range [0,59] runs the censored floor through that single turkey detect; numeric 0 is the censored floor, not a measured zero. The prior n=2 folded in chicken survey kamaly2023, a cross-species substitution now removed. p95 left null: no second grounded turkey wet-muscle Cr distribution exists to define an upper tail."
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
    p95_ppb: 0.8
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 3
---

# Turkey

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | GAP | 1/10 HMTc analytes, total n=5 | only 1/10 analytes have evidence |
| D2 Regional coverage | below-tier | 2 jurisdictions, top US 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | tAs THIN, Cr THIN, U THIN | tAs: needs 1 more study(ies); Cr: needs 2 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 5/10 populated cells declare a basis token | 5 populated cell(s) lack a basis token: iAs, tAs, Al, Sn, U |
| D8 Provenance integrity | GAP | 53 claims checked, 53 supported; 6 citations, 0 orphan, 5 foreign | 5 foreign citation(s) not naming turkey: fda2022-tds-elements-fy2018-fy2020, omirzakov2024-poultry-meat-kazakhstan-heavy-metals, lysenko2021-organic-broiler-meat-heavy-metals |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Cr, U |
| D11 Standards-readiness | NOT-READY | priority: tAs, Cr, U; pairing 0 paired, 3 single, 0 unpaired | tAs: THIN, needs 1 more study(ies); Cr: THIN, needs 2 more study(ies); U: THIN, needs 1 more study(ies); basis: 5 populated cell(s) lack a basis token: iAs, tAs, Al, Sn, U; depth below common bar |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Turkey is a warm-blooded terrestrial animal whose muscle meat is a low-accumulator matrix for most heavy metals. Unlike fish, which bioaccumulate methylmercury (MeHg) through aquatic food chains, and unlike plant foods, which take up metals from soil, poultry muscle tissue is metabolically regulated: the bird's kidneys and liver process and excrete most systemic metals before they can accumulate in skeletal muscle. Residual metals in muscle reflect dietary intake from feed and water combined with the bird's metabolic efficiency of excretion. The FDA TDS FY2018-FY2020 composite for turkey breast (oven-roasted, n=27) reported lead, cadmium, mercury, and nickel below their reporting limits across the entire distribution and chromium below its limit in 26 of 27 samples ([[sources/fda2022-tds-elements-fy2018-fy2020]]); those below-limit results are carried as left-censored bounds rather than as measured zeros. The only turkey-measured occurrence dataset that detected these metals at all is a single C-tier dry-weight Iranian preprint with documented internal table inconsistencies ([[sources/raeeszadeh2021-animal-meat-metals-iran|Raeeszadeh et al. 2021]]), which is too weak and too far off the FDA wet-weight basis to anchor a published central or upper-tail value. The lead, cadmium, total-mercury, and nickel cells are therefore carried as reviewed data gaps with the FDA reporting limits noted as left-censored floors, rather than populated from chicken or broiler surveys (which measure a different species). The low FDA results are consistent with the low-accumulator characterisation of poultry muscle. Total arsenic shows a clearer signal at the higher percentiles even in the censored FDA turkey data (p95 = 7.47 ppb, max = 9.6 ppb). This tAs signal likely reflects carry-through of feed-borne organic arsenicals from poultry feed, a pathway studied more extensively in broiler chickens but applicable to turkeys raised under comparable commercial conditions. The historical use of roxarsone and nitarsone in poultry feed as growth promoters contributed to elevated As in broiler and turkey tissue; regulatory withdrawal of these compounds in the US (completed by 2015) has reduced but not eliminated this pathway.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable turkey-measured occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases. Only turkey-measured occurrence data populates these cells; chicken and broiler poultry surveys are not substituted for turkey, because the page is a litigation-facing turkey reference and cross-species substitution cannot be defended as turkey-specific occurrence.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | n=1 | 0–59 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

A 2026-06-11 species-substitution correction reviewed the lead, cadmium, total-mercury, nickel, and chromium cells. A prior batch resynthesis had populated those cells from chicken and broiler surveys (omirzakov2024 Kazakhstan broiler, lysenko2021 Russian broiler, kamouh2024 Egyptian chicken, kamaly2023 Egyptian broiler) and presented the resulting values as a turkey occurrence profile. Chicken and broiler are a different species from turkey; on a litigation-facing turkey reference page, presenting chicken-measured concentrations as turkey occurrence cannot be defended. The corrected synthesis admits only turkey-measured data, on the prepared turkey-muscle wet-weight basis FDA reported for the routed matrix ("Turkey breast, oven-roasted"). Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The turkey-specific evidence is sparse. The FDA Total Diet Study FY2018-FY2020 composite for "Turkey breast, oven-roasted" (n=27) reported every sample below the reporting limit for lead (4 µg/kg), cadmium (1 µg/kg), mercury (1 µg/kg), and nickel (40 µg/kg), and 26 of 27 samples below the 50 µg/kg chromium reporting limit with a single chromium detect at 59 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The only other routed turkey occurrence dataset is a C-tier dry-weight Iranian preprint ([[sources/raeeszadeh2021-animal-meat-metals-iran|Raeeszadeh et al. 2021]], n=40 turkey samples) that reported turkey lead 130 µg/kg, cadmium 290 µg/kg, nickel 630 µg/kg, and total chromium 2720 µg/kg, all on a dry-weight basis and from a preprint with documented internal table-versus-prose inconsistencies (it did not measure mercury). One C-tier dry-weight preprint on a different basis is too weak to anchor a published central or 95th-percentile value, and it cannot be pooled with the FDA wet-weight distribution without a basis conversion the source does not support.

Lead, cadmium, total mercury, and nickel are therefore carried as reviewed data gaps rather than populated from chicken-as-turkey substitution. For each, the turkey-measured evidence is fully left-censored in the only A-tier turkey dataset (FDA TDS), and the honest floor is the FDA reporting limit expressed as a left-censored bound: lead 4 µg/kg, cadmium 1 µg/kg, mercury 1 µg/kg, nickel 40 µg/kg. For total mercury there is no turkey-measured detect in the corpus at all, because the FDA turkey composite is fully censored and the Iranian preprint did not measure mercury. Total mercury is held distinct from methylmercury and is not derived from it; no speciated methylmercury value exists for turkey muscle in the corpus, so the methylmercury cell is not populated. Inorganic arsenic likewise remains a reviewed data gap because only total-arsenic measurements exist for this commodity.

Chromium is the one affected cell that retains a turkey-measured value. It rests solely on the FDA Total Diet Study: 26 of 27 turkey composites below the 50 µg/kg reporting limit, with one detect at 59 µg/kg. The typical range is carried as [0, 59], where 0 is the left-censored floor (the 50 µg/kg reporting limit, carried as numeric 0) and 59 µg/kg is that single turkey detect. Chromium is reported as total chromium at low confidence; no turkey-muscle hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The 95th percentile is left uncomputed because the only turkey wet-muscle distribution is fully censored apart from that one detect, and the corpus holds no second grounded turkey chromium distribution to define an upper tail. The chicken survey (kamaly2023, total chromium 266 to 2215 µg/kg in chest and 170 to 460 µg/kg in thigh) that the prior synthesis folded in is a different species and has been removed from this cell; the Iranian turkey preprint chromium value (2720 µg/kg, dry weight) is two orders of magnitude higher and, being dry-weight C-tier, is not adopted as an upper-tail anchor.

For reference, the chicken and broiler poultry literature that the corrected synthesis excludes from the turkey cells documents low but non-zero muscle concentrations across the same metals: Kazakhstan broiler lead averages of 12 to 21.5 µg/kg and cadmium of 0.5 to 0.65 µg/kg ([[sources/omirzakov2024-poultry-meat-kazakhstan-heavy-metals|Omirzakov et al. 2024]]); Russian broiler control-group muscle lead near 3.5 to 25 µg/kg, cadmium 3.5 to 4.2 µg/kg, and total mercury 0.30 to 0.34 µg/kg ([[sources/lysenko2021-organic-broiler-meat-heavy-metals|Lysenko et al. 2021]]); Egyptian retail chicken breast lead 270 µg/kg and cadmium 90 µg/kg ([[sources/kamouh2024-heavy-metals-chicken-meat-egypt|Kamouh et al. 2024]]); and Egyptian broiler muscle nickel of 143 to 255 µg/kg ([[sources/kamaly2023-egypt-poultry-metals|Kamaly et al. 2023]]). These remain on the [[ingredients/chicken]] page as direct chicken evidence and provide only cross-species context here, not a turkey occurrence estimate.

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 26, "Turkey breast, oven-roasted." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Turkey breast, oven-roasted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 59 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.77 | 2.4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 5.38 | 7.47 | 9.6 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The only A-tier turkey-measured occurrence dataset is the FDA TDS FY2018-FY2020 turkey breast composite (oven-roasted, n=27), which reports Cd, Ni, Pb, and tHg below their reporting limits across the full distribution, and Cr below its limit in all but one composite (a single detect at 59 ppb), with only tAs and U showing non-zero values at the upper tail ([[sources/fda2022-tds-elements-fy2018-fy2020]]); the Cd, Cr, Ni, Pb, and tHg results are left-censored bounds, not measured zeros. The tAs p90 is 5.38 ppb and max is 9.6 ppb; the U p95 is 0.77 ppb and max is 2.4 ppb. The only other turkey-measured dataset in the corpus is a C-tier dry-weight Iranian preprint ([[sources/raeeszadeh2021-animal-meat-metals-iran|Raeeszadeh et al. 2021]], n=40 turkey samples) carrying turkey lead 130, cadmium 290, nickel 630, and total chromium 2720 µg/kg on a dry-weight basis; these dry-weight C-tier values are not adopted into the wet-weight cells and not pooled with the FDA distribution. Because the FDA turkey distribution is fully censored for Pb, Cd, Ni, and tHg, and the only other turkey source is a single dry-weight preprint, the lead, cadmium, total-mercury, and nickel cells are carried as reviewed data gaps rather than as estimated turkey ranges.

For cross-species context only (chicken and broiler, not turkey), the detected poultry-muscle distributions in the broader literature place chicken lead at roughly 12 to 25 µg/kg on a wet-weight basis ([[sources/omirzakov2024-poultry-meat-kazakhstan-heavy-metals|Omirzakov et al. 2024]] domestic mean 21.5 µg/kg; [[sources/lysenko2021-organic-broiler-meat-heavy-metals|Lysenko et al. 2021]] control pectoral muscle ~25 µg/kg), rising to an Egyptian retail breast value of 270 µg/kg ([[sources/kamouh2024-heavy-metals-chicken-meat-egypt|Kamouh et al. 2024]]); chicken cadmium across roughly 0.5 to 4 µg/kg up to the Egyptian breast value of 90 µg/kg; and chicken total mercury from roughly 0.3 µg/kg in Russian broiler muscle to a single-producer high of 20 µg/kg in Kazakhstan. The Egyptian broiler survey also reported chest-muscle lead of 2560 to 5552 µg/kg ([[sources/kamaly2023-egypt-poultry-metals|Kamaly et al. 2023]]), an order of magnitude above every other survey and treated as a contaminated-supply outlier. These chicken and broiler values are not turkey occurrence and do not populate the turkey cells; they live as direct evidence on [[ingredients/chicken]]. Turkey from US commercial supply chains post-2015, when roxarsone was withdrawn from the market, would be expected to show lower tAs than historical data from before that regulatory change. Geographic variation in turkey metal profiles is otherwise not characterised in the current corpus beyond the single FDA US composite and the single Iranian preprint.

## Processing effects

Oven roasting, which is the matrix reported in the FDA TDS data, removes free water through evaporation, which would concentrate non-volatile metals by a modest factor relative to raw muscle. Cooking methods that involve water immersion (poaching, boiling) may leach small amounts of metals into the cooking water, slightly reducing the metal content of the cooked meat. Neither effect is large enough to materially shift the risk classification of turkey as a low-accumulator matrix. Processed turkey products (deli slices, ground turkey, turkey sausage) may introduce additional ingredients (preservatives, starch fillers, casings) at low concentrations that contribute negligible additional metal load.

## Ingredient-derivative risk

Turkey muscle meat is used in products including roasted deli slices, ground turkey, turkey meatballs, turkey sausage, and turkey-based baby food purees. The metal profile of the muscle is carried into all of these derivatives without significant amplification or dilution. Organ meats (turkey liver, kidney) are a separate matter: kidneys and liver concentrate Cd systemically, so organ-based products would carry substantially higher Cd than muscle. This page covers turkey muscle only; organ-specific risk belongs on dedicated pages when ingested.

## Mitigation options

### Sourcing levers

Sourcing turkey from flocks fed on verified low-As feed (certified free of arsenical additives) is the primary intervention for the tAs signal. In the US post-2015 regulatory environment, commercial feed is expected to be arsenical-additive-free; however, supplier documentation of this is appropriate for premium or certified product categories.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine Pb and Cd testing of turkey muscle is unlikely to yield detectable values given the fully left-censored Pb and Cd distributions in the only turkey-measured US survey (FDA TDS turkey breast, n=27, all below the 4 ppb Pb and 1 ppb Cd reporting limits). Targeted tAs testing is warranted where feed provenance is uncertain or where products are positioned for infant or toddler markets, given that FDA Closer to Zero applies to baby food purees containing turkey.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets maximum levels for turkey muscle meat under [[regulations/eu2023-contaminants-maximum-levels]]: Pb at 0.10 mg/kg (100 ppb) and Cd at 0.050 mg/kg (50 ppb) for poultry muscle. No Hg or As specific maximum levels apply to poultry muscle under current EU contaminant regulations. In the US, [[regulations/fda-closer-to-zero]] Pb guidance (20 ppb for meat-based baby food purees) applies when turkey is used in products formulated for infants. No general FDA action level for As, Pb, or Cd in poultry muscle meat is currently promulgated for the domestic retail market.

<!-- BEGIN: hmi-page-references -->
## References

The 6 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Raeeszadeh M, Gravandi H, and Akbari A (2021). *Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran*. Research Square. [https://doi.org/10.21203/rs.3.rs-407310/v1](https://doi.org/10.21203/rs.3.rs-407310/v1). Preprint, C-tier. [[sources/raeeszadeh2021-animal-meat-metals-iran|Source record]]
3. Omirzakov OM, Krivets VV, Berdikulov MA, Kuanysh AE, Omarova AS, and Dyussembayev KA (2024). *Analysis of heavy metals content in domestic and imported poultry meat*. Herald of Science of S. Seifullin Kazakh Agrotechnical Research University: Veterinary Sciences. [https://doi.org/10.51452/kazatuvc.2024.3(007).1753](https://doi.org/10.51452/kazatuvc.2024.3(007).1753). Peer-reviewed, B-tier. [[sources/omirzakov2024-poultry-meat-kazakhstan-heavy-metals|Source record]]
4. Lysenko Y, Koshchayev A, Luneva A, Omarov R, and Shlykov S (2021). *Organic Meat Production of Broiler Chickens Hubbard Redbro Cross*. International Journal of Veterinary Science 10(1):62-68. [https://doi.org/10.47278/journal.ijvs/2020.021](https://doi.org/10.47278/journal.ijvs/2020.021). Peer-reviewed, B-tier. [[sources/lysenko2021-organic-broiler-meat-heavy-metals|Source record]]
5. Kamouh HM, Kirrella GA, Shafik S, and Mostafa NY (2024). *Heavy metals load in chicken meat and its reduction by probiotic strains*. Open Veterinary Journal. [https://doi.org/10.5455/OVJ.2024.v14.i1.51](https://doi.org/10.5455/OVJ.2024.v14.i1.51). Peer-reviewed, A-tier. [[sources/kamouh2024-heavy-metals-chicken-meat-egypt|Source record]]
6. Kamaly HF and Sharkawy AA (2023). *Health risk assessment of metals in chicken meat and liver in Egypt*. Environmental Science and Pollution Research. [https://doi.org/10.1007/s10661-023-11365-9](https://doi.org/10.1007/s10661-023-11365-9). Peer-reviewed, A-tier. [[sources/kamaly2023-egypt-poultry-metals|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr concentrations |
| 3 | [[sources/raeeszadeh2021-animal-meat-metals-iran\|Raeeszadeh et al. 2021]]. *Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran*, Research Square | 2021 | Preprint | IR Se, Pb, Cd, tAs, Zn, Ni, Co, Cu, Cr occurrence in Meat samples from Sanandaj distribution centers in Kurdistan province, western Iran: 45 beef, 45 sheep, 40 turkey, and... (n=170) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0b8cc0157](https://github.com/paleofoundation/heavymetalindex/commit/0b8cc0157) | 2026-06-11 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
