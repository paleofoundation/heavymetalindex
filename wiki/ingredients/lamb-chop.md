---
title: "Lamb chop"
type: ingredient
commodity: lamb-chop
label: "Lamb chop"
aliases: ["Lamb chop, pan-cooked with oil", "lamb"]
category: meat
tds_food:
  number: 22
  description: "Lamb chop, pan-cooked with oil"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 10
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 10
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 30
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 25]
    p95_ppb: 83
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: lamb-chop-muscle-wet-weight
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
sources: 1
---

# Lamb chop

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 22, "Lamb chop, pan-cooked with oil." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Lamb chop is skeletal muscle from young sheep, and its metal contamination profile follows the general pattern of grazing ruminant muscle tissue. Sheep are pasture-fed and ingest metals primarily through forage, soil particles adhering to grass, and water. Unlike cattle, which are often grain-finished in feedlot systems, lamb in many production systems (UK, Australia, New Zealand) is predominantly pasture-raised throughout its lifespan, meaning pasture soil geochemistry is the dominant environmental exposure variable. Cadmium in sheep accumulates preferentially in the kidney cortex (sometimes called "lamb kidneys" for the retail product), with muscle tissue receiving a much smaller fraction of absorbed Cd. Pastoral UK and European studies have documented low but detectable Cd in sheep muscle tissue, with concentrations influenced by the Cd content of the underlying pasture soil. Lead in lamb muscle is typically at or near the reporting limit, consistent with the general principle that lead partitions to bone and soft organs more readily than to skeletal muscle. The FDA FY2018-FY2020 TDS data for lamb chop (pan-cooked with oil) show Cd with a maximum of 1 ppb and Pb with a maximum of 4.4 ppb across 27 samples, with all other measured analytes below their reporting limits; these below-limit FDA results are carried as left-censored bounds rather than measured zeros, and the detected clean-market sheep-muscle literature places lead, cadmium, total arsenic, total mercury, and total chromium at low but non-zero concentrations (see the Synthesis basis and censoring treatment section) [[sources/fda2022-tds-elements-fy2018-fy2020]].

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 6 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 6 of 10 populated analytes declare a basis | no wet/dry basis declared: iAs, Al, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–30 | medium | [[sources/gorbanov2025-lamb-meat-snacks-metals\|1]], [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|2]], [[sources/altalib2025-frozen-meat-libya\|3]] |
| Cd | n=4 | 0–2 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/gorbanov2025-lamb-meat-snacks-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–10 | low | [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|1]], [[sources/gorbanov2025-lamb-meat-snacks-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=2 | 0–30 | low | [[sources/maikanov2021-meats-shuchinsk-burabay-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–25 | low | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a lamb-chop muscle wet-weight basis, the form in which the ingredient enters the supply chain and the form FDA prepares and reports ("Lamb chop, pan-cooked with oil"). Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Lamb chop, pan-cooked with oil" (n=27), in which every or nearly every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg; only two single composites carried a detected value, a Pb maximum of 4.4 µg/kg and a Cd maximum of 1 µg/kg). The resynthesis replaces the literal zeros with the detected lamb/sheep-muscle distributions from the primary occurrence literature, in which lead, cadmium, total arsenic, total mercury, and total chromium are all low but non-zero. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound, not a measured zero.

Lead rests on clean-market sheep-muscle surveys: a Russian controlled-feeding trial in Edilbay-breed lambs ([[sources/gorbanov2025-lamb-meat-snacks-metals|Gorbanov and Giro 2025]], muscle 20 µg/kg in the supplemented group and 30 µg/kg in the control group, n=40), a Kazakh market survey ([[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]], mutton 100 µg/kg, n=8), the lamb subgroup of a Libyan imported-frozen-meat survey ([[sources/altalib2025-frozen-meat-libya|Altalib et al. 2025]], lamb-stratified mean 2.12 µg/kg, n≈7), and the FDA censored floor (max 4.4 µg/kg, reporting limit 4 µg/kg). The clean-market central runs from the FDA left-censored floor up to roughly 30 µg/kg (the Gorbanov control value), and the 95th percentile is anchored on the Maikanov mutton value of 100 µg/kg, the highest clean-market lamb-muscle mean in the pool. Cadmium rests on the lamb subgroup of Altalib et al. (1.51 µg/kg), the FDA censored maximum of 1 µg/kg, Gorbanov and Giro's censored result (both groups below 10 µg/kg), and Maikanov's mutton value reported at zero; the central low bound is the FDA left-censored floor and the upper bound is roughly 2 µg/kg, with the 95th percentile carried at the 10 µg/kg Gorbanov censoring bound. Total arsenic rests on Maikanov et al. (mutton 10 µg/kg), Gorbanov and Giro (below 10 µg/kg, censored), and the FDA censored floor (reporting limit 3 µg/kg, all 27 composites below limit); every value is at or below 10 µg/kg, so the cell is held at low confidence with both the upper typical bound and the 95th percentile at 10 µg/kg.

Total arsenic and inorganic arsenic are kept as distinct analytes; only speciated measurements would populate the inorganic-arsenic cell, and no speciated value exists for this ingredient, so iAs remains a reviewed data gap. Total mercury is held distinct from methylmercury and is not derived from it. The total-mercury cell rests on a single positive lamb-muscle value, Maikanov et al.'s mutton mercury of 30 µg/kg (which the authors note reached the 0.03 mg/kg permissible threshold), against the FDA censored floor of below 1 µg/kg across all 27 composites; with only two contributors and one positive value the cell is carried at low confidence with the typical upper bound and the 95th percentile both at 30 µg/kg and the low bound left-censored at the FDA reporting limit.

Chromium is reported as total chromium at low confidence; no lamb-muscle hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The total-chromium central rests on the Libyan imported-meat survey, whose chromium was reported only as an all-meat aggregate (mean 24.4 µg/kg, range 9–83 µg/kg across chicken, beef, and lamb, with no statistically significant difference by meat type, ANOVA p=0.535), and on the FDA censored floor (reporting limit 50 µg/kg, all 27 composites below limit). Because the Altalib chromium figure is an all-meat aggregate rather than a lamb-stratified value, it is carried explicitly as broad-meat context: the typical upper bound of 25 µg/kg and the 95th percentile of 83 µg/kg reflect the aggregate distribution, not a lamb-specific measurement, and confidence is held low for that reason. Nickel is recorded with only the FDA censored floor of below 40 µg/kg: every lamb-chop composite in the FDA Total Diet Study FY2018-FY2020 fell below the 40 µg/kg nickel reporting limit, and no clean-market lamb-muscle survey in the corpus reports a positive wet-weight nickel concentration, so the honest floor is that reporting limit expressed as a left-censored bound and no positive occurrence value or upper bound is published for the commodity. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source in the corpus measures uranium in lamb muscle, so no distribution is published (the rice-uranium precedent).

Elevated and contaminated-region strata are documented separately and are not folded into the central estimate. Bangladesh mutton from the Bogra district ([[sources/islam2015-bangladesh-foods-heavy-metals|Islam et al. 2015]], Pb 180 µg/kg, Cd 46 µg/kg, total As 200 µg/kg, total Cr 2100 µg/kg, Ni 1600 µg/kg fresh weight) and western-Iran sheep muscle ([[sources/raeeszadeh2021-animal-meat-metals-iran|Raeeszadeh et al. 2021]], Pb mean 11790 µg/kg with a range to 58900 µg/kg, Cd 2790 µg/kg, total As 230 µg/kg, total Cr 1660 µg/kg, Ni 540 µg/kg dry weight) sit one to three orders of magnitude above every clean-market lamb-muscle survey and are treated as contaminated-region (and, for Raeeszadeh, dry-weight) outliers rather than commodity-wide baselines. A broad all-meat Beijing aggregate ([[sources/liang2019-beijing-foodstuffs-health-risk|Liang et al. 2019]], pooled pork/beef/mutton/chicken on a dry-weight basis: Cr 573, Pb 167, Cd 15, tAs 53, tHg 18 µg/kg) is recorded as dry-weight all-meat context and is not attributed to lamb, because relabeling a pooled-meat aggregate as a lamb-specific value would misrepresent the source. Lamb offal and casings are distinct higher-accumulator matrices and are not part of the muscle headline: sheep liver carries cadmium and lead several-fold above muscle ([[sources/khatemeh2022-pb-cd-sheep-liver-flukes|Khatemeh et al. 2022]], uninfected liver Pb 120 µg/kg, Cd 70 µg/kg, total Cr 400 µg/kg wet weight), and salted natural sheep casings carry a lead mean of 77 µg/kg and total-arsenic mean of 36 µg/kg ([[sources/wysok2025-heavy-metals-sheep-casings|Wysok et al. 2025]], n=35).

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Lamb chop, pan-cooked with oil" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 1 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 4.4 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured lamb chop (TDS Food 22, "Lamb chop, pan-cooked with oil") with n=27 composites and found Cd with a maximum of 1 ppb and all other values below the reporting limit; Pb with a maximum of 4.4 ppb and otherwise below detection; and Cr, Ni, tAs, tHg, and U all below the reporting limit across the full distribution [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. These below-limit FDA results are carried as left-censored bounds rather than as measured zeros. The detected clean-market lamb-muscle distributions in the primary literature place lead at a central of roughly the FDA censored floor up to 30 µg/kg, with a Kazakh mutton survey reaching 100 µg/kg ([[sources/gorbanov2025-lamb-meat-snacks-metals|Gorbanov and Giro 2025]] 20–30 µg/kg; [[sources/maikanov2021-meats-shuchinsk-burabay-metals|Maikanov et al. 2021]] 100 µg/kg; [[sources/altalib2025-frozen-meat-libya|Altalib et al. 2025]] lamb subgroup 2.12 µg/kg), cadmium below roughly 2 µg/kg, total arsenic at or below 10 µg/kg, and total mercury reaching 30 µg/kg in the Kazakh mutton survey. The US retail lamb market draws on domestic production (Colorado, California, Texas) as well as imports from Australia and New Zealand; Australian and New Zealand pastoral systems are characterized by extensive low-Cd pastures, and lamb from these origins tends to show uniformly low muscle-tissue metal concentrations. Sheep muscle from contaminated regions sits one to three orders of magnitude higher: Bangladesh mutton carried Pb of 180 µg/kg, total Cr of 2100 µg/kg, and Ni of 1600 µg/kg ([[sources/islam2015-bangladesh-foods-heavy-metals|Islam et al. 2015]]), and western-Iran sheep muscle carried a lead mean of 11790 µg/kg on a dry-weight basis ([[sources/raeeszadeh2021-animal-meat-metals-iran|Raeeszadeh et al. 2021]]). These contaminated-region values are stratified out of the central estimate, which reflects clean-market wet-weight lamb muscle.

## Processing effects

Lamb chop reaches the consumer as a cut of muscle with bone attached; pan-cooking with oil (the TDS preparation) causes surface browning and moisture loss. Cooking to medium or well-done concentrations metals slightly on a wet-weight basis through moisture loss, but the starting concentrations are so low that this effect is not practically significant. Bone broth or stock prepared from lamb bones is not characterized on this page; bone is a significant repository for lead in ruminants, and long-simmering of bones may release Pb into the broth matrix at higher concentrations than seen in muscle. The cooking oil added during pan-frying (a TDS preparation method) does not contribute metals.

## Ingredient-derivative risk

Lamb chop is consumed primarily as an intact cut; its use as an ingredient in composite products is limited relative to ground or minced lamb. Ground lamb would follow a profile similar to ground beef (see [[ingredients/ground-beef]]) in terms of the surface-to-interior homogenization during grinding. Lamb liver and lamb kidney, which are not this page, concentrate Cd substantially and represent a distinct risk profile; consumers and product developers incorporating offal should consult those ingredient pages when they exist in the wiki.

## Mitigation options

### Sourcing levers

Sourcing lamb from pasture systems documented to have low soil Cd provides the primary lever. Australian and New Zealand certification schemes for pastoral lamb provide provenance documentation that implicitly captures pasture quality. Domestic US lamb from regions without mining or industrial Cd soil loading is also generally low-risk.

### Agronomic levers

Pasture lime applications to maintain soil pH and reduce Cd bioavailability are the standard agronomic tool in pastoral sheep systems. This lever is at the producer level; specification requirements from processors or brands provide the incentive structure.

### Processing levers

Deboning reduces the potential for bone-fragment contamination during grinding or preparation. Standard butchering and trimming removes periosteal tissue, which may carry slightly higher surface metal loads than the muscle interior.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the near-BDL results across the TDS distribution, routine lot-level metal testing of lamb chop is unlikely to yield actionable findings under normal production conditions. Origin-level audit provides more cost-effective assurance than per-lot testing for this matrix.

### Packaging and storage levers

Lamb chop is packaged in vacuum pouches or modified-atmosphere trays; Sn migration is not applicable. Storage temperature does not affect metal concentration.

## Regulatory limits that apply

EU Regulation 2023/915 sets maximum levels for Pb in meat (muscle meat of sheep/lamb) at 0.10 mg/kg wet weight and for Cd at 0.050 mg/kg wet weight [[regulations/eu2023-contaminants-maximum-levels]]. The FDA TDS maximum values for Pb (4.4 ppb) and Cd (1 ppb) in pan-cooked lamb chop are well within both limits. No US statutory maximum for Pb or Cd in lamb muscle exists. The EU Cd limit for sheep muscle meat of 0.050 mg/kg (50 ppb) is the operative regulatory cap for EU market access [[regulations/eu-2023-915-cadmium]]. Codex Alimentarius does not set a distinct ML for lamb or sheep muscle as a separate category from other meat [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 1 routed source. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/gorbanov2025-lamb-meat-snacks-metals|Evaluation of lamb meat safety for meat snack production after the use of the feed supplement LaktuVet-1 in animal diets]]<span class="hmi-ref-meta">Gorbanov IA and Giro TM · Proceedings of VSUET, 87(1): 86-92 · 2025 · [doi.org/10.20914/2310-1202-2025-1-86-92](https://doi.org/10.20914/2310-1202-2025-1-86-92)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/maikanov2021-meats-shuchinsk-burabay-metals|Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan]]<span class="hmi-ref-meta">Maikanov BS, Ismagulova GT, Auteleyeva LT, Kemeshov ZO, and Zhanabayeva DK · Veterinary World 14(6):1615-1621 · 2021 · [doi.org/10.14202/vetworld.2021.1615-1621](https://doi.org/10.14202/vetworld.2021.1615-1621)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/altalib2025-frozen-meat-libya|Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market]]<span class="hmi-ref-meta">Altalib SA, Ghania AA, and Alazzabi AA · Mediterranean Journal of Medical Research · 2025 · [doi.org/10.5281/zenodo.17986261](https://doi.org/10.5281/zenodo.17986261)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/islam2015-bangladesh-foods-heavy-metals|The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh]]<span class="hmi-ref-meta">Islam MS, Ahmed MK, Habibullah-Al-Mamun M, and Raknuzzaman M · Ecotoxicology and Environmental Safety · 2015 · [doi.org/10.1016/j.ecoenv.2015.09.022](https://doi.org/10.1016/j.ecoenv.2015.09.022)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/raeeszadeh2021-animal-meat-metals-iran|Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran]]<span class="hmi-ref-meta">Raeeszadeh M, Gravandi H, and Akbari A · Research Square · 2021 · [doi.org/10.21203/rs.3.rs-407310/v1](https://doi.org/10.21203/rs.3.rs-407310/v1)</span><span class="hmi-ref-tag">Preprint</span>
7. [[sources/liang2019-beijing-foodstuffs-health-risk|Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China]]<span class="hmi-ref-meta">Liang G, Gong W, Li B, Zuo J, Pan L, and Liu X · International Journal of Environmental Research and Public Health · 2019 · [doi.org/10.3390/ijerph16060909](https://doi.org/10.3390/ijerph16060909)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/khatemeh2022-pb-cd-sheep-liver-flukes|Evaluation of bioaccumulation of some heavy metals in liver flukes (Fasciola hepatica and Dicrocoelium dendriticum) and liver samples of sheep]]<span class="hmi-ref-meta">Khatemeh S and Imani Baran A · Veterinary Research Forum · 2022 · [doi.org/10.30466/vrf.2020.135702.3043](https://doi.org/10.30466/vrf.2020.135702.3043)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/wysok2025-heavy-metals-sheep-casings|Heavy Metal Contamination in Natural Sheep Casings]]<span class="hmi-ref-meta">Wysok B, Wojtacka J, and Szczotka-Bochniarz A · Foods · 2025 · [doi.org/10.3390/foods14091502](https://doi.org/10.3390/foods14091502)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Lamb chop, pan-cooked with oil (n=27); left-censored floors for Pb, Cd, tAs, tHg, Ni, Cr, U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 7 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
