---
title: "Apple"
type: ingredient
commodity: apple
label: "Apple"
aliases: [apples, apple-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 46]
    p95_ppb: 90
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-apple-with-peel-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 30
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-apple-with-peel-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-23
    basis: raw-apple-with-peel-wet-weight
    speciation_note: no inorganic-arsenic speciation exists for raw apple in the corpus; FDA TDS Food 78 reports total arsenic only and apple was not among the 54 HPLC-ICP-MS speciated samples; all corpus iAs apple measurements are apple-juice, not raw fruit. Measured arsenic for raw apple is carried in the tAs cell.
  tAs:
    status: populated
    typical_ppb: [0, 5.4]
    p95_ppb: 8.0
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-23
    basis: raw-apple-with-peel-wet-weight
    speciation_note: total-Hg only; no MeHg speciation in corpus. Left-censored floor at the FDA TDS 1 ppb reporting limit (27/27 ND); fresh-fruit tail from Mania 2021 other-fresh-fruit P90 upper-bound. Dried apple 16 ppb (Mania) is a separate dried-form stratum, not folded in.
  Ni:
    status: populated
    typical_ppb: [0, 360]
    p95_ppb: 360
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: raw-apple-with-peel-wet-weight
  Al:
    status: populated
    typical_ppb: [0, 1410]
    p95_ppb: 1645
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 57]
    p95_ppb: 126
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-apple-with-peel-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [0, 16.4]
    p95_ppb: 20.8
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
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
used_in_products: [fruit-juices-apple-containing, fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 25
---

# Apple

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Apples accumulate heavy metals through two primary routes. The first is soil uptake via the root system, which delivers Pb, Cd, and other metals from orchard soils into the vascular tissue and fruit flesh. Historical apple orchard management in North America and Europe relied heavily on lead arsenate as a pesticide from the late nineteenth century through the mid-twentieth century, leaving a legacy of elevated Pb and arsenic in orchard soils that persists in some regions decades after application ceased; this residual contamination continues to contribute trace levels of Pb and arsenic to fruit grown in those orchards. The second route is atmospheric deposition on fruit surfaces during the growing season, which can deposit Pb and other metals directly onto the skin; washing and peeling can remove a portion of this surface-deposited load.

Despite these exposure routes, apples are generally a low-risk commodity for heavy metals under current commercial production conditions. The FDA FY2018-FY2020 Total Diet Study data for raw apple with peel (TDS Food 78, n=27) show the majority of analytes at or below detection limits across most of the sample distribution ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic showed a p90 of 5.36 ppb and a maximum of 20 ppb, with the speciated iAs fraction awaiting a dedicated speciation source. The regulatory and media attention that apples have received in recent years has been driven primarily by cinnamon adulteration in fruit pouches rather than by contamination in the apple ingredient itself: the 2023 WanaBana lead poisoning cluster was attributable to cinnamon adulterated with lead chromate, not to the apple component ([[sources/napier2024-wanabana-lead-apple-cinnamon|Napier et al. 2024]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–46 | medium | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|3]] |
| Cd | n=5 | 0–10 | medium | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=6 | 0–5.4 | medium | [[sources/nasirpour2026-apple-wastewater-metals\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|3]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]] |
| Ni | n=4 | 0–360 | low | [[sources/amer2019-egyptian-fruits-heavy-metals\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]], [[sources/unaegbu2016-fruit-heavy-metals-enugu\|3]] |
| Al | n=1 | 0–1410 | medium | — |
| Cr | n=3 | 0–57 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=1 | 0–16.4 | medium | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw apple-with-peel wet-weight basis, the form in which the fruit enters the ingredient supply chain and the basis FDA Total Diet Study Food 78 reports.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, cadmium, nickel, chromium, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composites for raw apple, in which every sample (or all but one) fell below the reporting limit and the reported zeros were pooled as literal zeros. For lead, FDA reported all 27 composites below the 4 µg/kg reporting limit; for cadmium and uranium, all 27 below the 1 µg/kg reporting limit; for nickel, all 27 below the 40 µg/kg reporting limit; for chromium, 26 of 27 below the 50 µg/kg reporting limit with a single detect at 55 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and recovers the upper distribution from primary fresh-fruit occurrence literature, in which all of these metals are low but non-zero in apple flesh.

The lead floor is set at the FDA 4 µg/kg reporting limit; the central and upper distribution rests on Polish retail fresh apple ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], fresh apple mean 9 µg/kg, maximum 24 µg/kg wet weight) and South Korean retail apple ([[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]], apple was the highest-lead fruit of the fourteen surveyed at a mean of 46.4 µg/kg fresh weight). The 95th-percentile anchor is set from the Lublin orchard survey ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Sembratowicz et al. 2010]]), in which apple lead averaged 80 to 90 µg/kg fresh weight with 30 to 50 percent of individual lots above the EU 100 µg/kg maximum level and a documented range to 200 to 210 µg/kg in the highest lots. The cadmium floor is the FDA 1 µg/kg reporting limit; the upper distribution rests on the same Polish fresh-apple data (Rusin fresh apple mean 1 µg/kg, maximum 7.1 µg/kg; Sembratowicz apple fresh-weight mean about 9 to 10 µg/kg with a range to 30 µg/kg) and the Pakistani retail survey ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]], apple 6.5 µg/kg dry weight, the lowest-lead and a low-cadmium fruit in that study).

Nickel and chromium are recovered at low confidence from a small set of fresh-fruit anchors against a censored FDA floor. Nickel rests on the Egyptian retail survey ([[sources/amer2019-egyptian-fruits-heavy-metals|Amer et al. 2019]]), in which apple nickel ranged 110 to 360 µg/kg fresh weight across four governorates and the estimated daily intake exceeded the tolerable daily intake in two of them; the Pakistani survey reports apple nickel at 10.6 µg/kg dry weight and a single Nigerian market apple at 50 µg/kg ([[sources/unaegbu2016-fruit-heavy-metals-enugu|Unaegbu et al. 2016]]). The wide spread between the Egyptian fresh-weight values and the other anchors, set against the fully censored FDA cell, caps confidence at low. Chromium is reported as total chromium only; no apple hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The chromium distribution rests on the South Korean survey, in which apple was the highest-chromium fruit at a mean of 56.7 µg/kg fresh weight and a maximum of 126.2 µg/kg, with the Pakistani apple at 41.7 µg/kg dry weight and the single FDA detect at 55 µg/kg corroborating the central estimate.

Total mercury and inorganic arsenic were resynthesized on 2026-06-23 to replace earlier literal-zero artifacts. The mercury cell rests on two sources on a wet-weight basis: the FDA Total Diet Study cell for raw apple, in which all 27 composites fell below the 1 µg/kg reporting limit, and the Polish national fruit monitoring of [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]], in which total mercury in fresh non-berry fruits had a middle-bound mean of 0.3 to 1.7 µg/kg and a 90th-percentile lower-to-upper-bound range of 0.1 to 4 µg/kg. The mercury floor is therefore set at the FDA 1 µg/kg reporting limit with a censored left bound, and the upper tail at 4 µg/kg from the Mania other-fresh-fruit 90th-percentile upper bound; confidence is held at low on two sources and the wide left-censored fraction. Mercury is reported as total mercury only, with no methylmercury speciation in the corpus; the Tan 2022 carbon-dot paper is a spiked-recovery method validation on apple digests, not an occurrence survey, and is not counted toward the cell. The single dried-apple mercury value of 16 µg/kg (Mania) remains a separate dried-form stratum and is not folded into the fresh-apple distribution.

Inorganic arsenic is recorded as a reviewed data gap for the raw-apple ingredient. No source in the corpus reports a speciated inorganic-arsenic concentration for raw apple flesh: the FDA Total Diet Study reports total arsenic only for Food 78 (raw apple with peel), and raw apple was not among the 54 samples on which FDA ran HPLC-ICP-MS arsenic speciation; every corpus inorganic-arsenic measurement attached to apple is an apple-juice matrix ([[sources/fsanz2012-arsenic-apple-pear-juice-australia-nz|FSANZ 2012]], [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Kubachka et al. 2019]], [[sources/fda2023-ias-apple-juice-guidance|FDA 2023]]), not raw fruit. The measured arsenic for raw apple is carried in the total-arsenic cell (typical 0 to 5.4 µg/kg, 95th percentile 8.0 µg/kg); the inorganic fraction of that total is not resolved for raw apple in the present corpus, so no inorganic-arsenic distribution is published rather than inventing a censored or fractional value.

Dried apple carries substantially higher per-gram metal loads than fresh apple because drying concentrates the fruit by weight loss; Rusin reports dried apple lead to 202 µg/kg and cadmium to 39 µg/kg on a dry-weight basis, and Mania reports imported dried apple total mercury to 16 µg/kg ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]]). These dried-form values are recorded as a separate concentration stratum and are not folded into the fresh-apple percentiles above. Uranium is recorded as a reviewed data gap: the only apple uranium measurement in the corpus is the fully censored FDA Total Diet Study cell (all 27 composites below the 1 µg/kg reporting limit), and no primary fresh-fruit source reports an extractable quantitative apple uranium value, so no distribution is published.

## Routing

This node is linked from [[products/fruit-juices-apple-containing]], [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 78, "Apple, red, with peel, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Apple, red, with peel, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 55 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 5.36 | 8.04 | 20 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data (TDS Food 78, n=27) provide a US market distribution for raw apple with peel, representing composite samples purchased at retail across multiple US cities ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). These distributions show most analytes below detection in the majority of samples, with tAs reaching a p90 of 5.36 ppb and a maximum of 20 ppb. Polish market data from [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], which measured Cd and Pb across fresh, frozen, dried, and processed fruit and vegetable products (n=370 total), include apple data across processing states and provide a European comparison point; specific quantitative values for apple from that source remain in progress pending table extraction. Variety-level variation within apple cultivars is not resolved in the current corpus; synthesis of regional and varietal ranges will be updated when additional occurrence data are integrated.

## Processing effects

Processing state substantially affects the metal load delivered per serving. Washing fresh apples reduces surface-deposited Pb, though the magnitude of reduction depends on water pressure and duration; peeling removes the skin layer where atmospheric Pb deposition concentrates. Juicing transfers metals from the flesh into the juice fraction and leaves some in the pomace; the juice fraction retains the bulk of soluble metals. Concentration (for apple juice concentrate or apple cider concentrate) proportionally elevates metal concentrations relative to single-strength juice. Heat processing to produce applesauce does not remove metals; metals remain in the fruit matrix and the thermal process is not a remediation step. Drying, which concentrates all components by weight loss, elevates metal concentrations in dried apple relative to fresh apple on a per-gram basis. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]] examined fresh, frozen, dried, and processed forms and provides empirical data on processing-state differences, pending quantitative extraction.

## Ingredient-derivative risk

Apple as an ingredient produces several derivatives with distinct metal profiles. Juice and juice concentrate are the highest-concentration liquid derivatives because juicing extracts metals from multiple portions of fruit and concentration further elevates them. Apple purée and applesauce retain the full fruit matrix in cooked form with no concentration or dilution step and carry essentially the same metal load as cooked whole apple. Dried apple (rings, chips) is concentrated by weight loss and therefore carries a higher metal content per gram than fresh apple. Apple cider vinegar, produced by fermentation and acetic acid conversion of apple juice, is a further-downstream derivative; metals present in the juice carry through fermentation and into the vinegar, and the concentration may shift depending on process losses. Baby food purées based on apple are a critical exposure route for infants, as examined in the weaning food context by [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor et al. 2018]].

## Mitigation options

### Sourcing levers

Sourcing apples from orchards without a history of lead arsenate pesticide use reduces the risk of legacy soil Pb and arsenate contamination. Geographic provenance, particularly distinguishing modern commercial orchards from older heritage orchards in regions with documented pesticide legacy, is the primary sourcing variable. _No quantified data specifically for apple orchards on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing and peeling remove surface-deposited lead. Discarding pomace rather than reincorporating it into juice or concentrate reduces metal carryover from solids. _Quantified reduction factors for washing and peeling are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 establishes a maximum level for Pb in fresh fruit (including apples) of 0.10 mg/kg (100 ppb) and for Cd of 0.050 mg/kg (50 ppb), both on a wet weight basis as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). For apple juice and apple cider intended for infants and young children, EU law applies a stricter Pb ML of 0.020 mg/kg (20 ppb). In the United States, the FDA has established an action level for inorganic arsenic in apple juice at 10 ppb (see [[sources/fda2023-ias-apple-juice-guidance|FDA 2023]] and the apple-juice ingredient page). For apple as a whole fruit, no FDA commodity-specific action level for Pb or Cd exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]); the FDA's priority for Pb action levels in the Closer to Zero program targets processed infant and toddler food categories rather than raw whole fruit. No Codex Alimentarius ML for Pb in apples appears in the current corpus.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Concentration of cadmium and lead in vegetables and fruits]]<span class="hmi-ref-meta">Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I · Scientific Reports · 2021 · [doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits]]<span class="hmi-ref-meta">Sembratowicz I, Rusinek E, and Ognik K · Polish Journal of Environmental Studies · 2010</span><span class="hmi-ref-tag">Review</span>
7. [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits]]<span class="hmi-ref-meta">Rahim M, Saqib NU, Wahid F, Khan N, and Alrawi LI · Journal of Physical Science · 2020 · [doi.org/10.21315/jps2020.31.2.5](https://doi.org/10.21315/jps2020.31.2.5)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/amer2019-egyptian-fruits-heavy-metals|Exposure assessment of heavy metal residues in some Egyptian fruits]]<span class="hmi-ref-meta">Amer MM, Sabry BA, Marrez DA, Hathout AS, and Fouzy ASM · Toxicology Reports · 2019 · [doi.org/10.1016/j.toxrep.2019.06.007](https://doi.org/10.1016/j.toxrep.2019.06.007)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/unaegbu2016-fruit-heavy-metals-enugu|Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria]]<span class="hmi-ref-meta">Magdalene Unaegbu, Vincent C. I. Eze, Ebere C. I. Omeje, Ezinne A. O. Agbo, and Ebere V. Chukwuma · International Journal of Food Contamination · 2016 · [doi.org/10.1186/s40550-016-0031-9](https://doi.org/10.1186/s40550-016-0031-9)</span><span class="hmi-ref-tag">Review</span>
10. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Review</span>
11. [[sources/fsanz2012-arsenic-apple-pear-juice-australia-nz|Survey of total arsenic and inorganic arsenic in apple and pear juice]]<span class="hmi-ref-meta">Food Standards Australia New Zealand · 2012</span><span class="hmi-ref-tag">Government</span>
12. [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS]]<span class="hmi-ref-meta">Kubachka KM, Hanley T, Mantha M, Wilson RA, Falconer TM, Mounicou S, et al. · Food Analytical Methods · 2019 · [doi.org/10.1007/s12161-019-01636-y](https://doi.org/10.1007/s12161-019-01636-y)</span><span class="hmi-ref-tag">Review</span>
13. [[sources/fda2023-ias-apple-juice-guidance|Action Level for Inorganic Arsenic in Apple Juice: Guidance for Industry]]<span class="hmi-ref-meta">FDA CFSAN · U.S. Food and Drug Administration, Center for Food Safety and Applied Nutrition · 2023 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-apple-juice)</span><span class="hmi-ref-tag">Guidance</span>
14. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Infants' dietary arsenic exposure during transition to solid food]]<span class="hmi-ref-meta">Signes-Pastor AJ, Cottingham KL, Carey M, Sayarath V, Palys T, Meharg AA, et al. · Scientific Reports 8(1):7114 · 2018 · [doi.org/10.1038/s41598-018-25372-1](https://doi.org/10.1038/s41598-018-25372-1)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/nasirpour2026-apple-wastewater-metals\|Nasirpour et al. 2026]]. *The changes of heavy metals and some necessary elements in leaf, fruit and soil on apple cultivar golden delicious by applying urban treated wastewater*, BMC Plant Biology | 2026 | Peer-reviewed | IR As, Ni, Cr, Pb occurrence in Apple (Golden Delicious) irrigated with urban treated wastewater vs. clean water controls; field experiment 2021-2023, Iran |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 4 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | US/EC Pb occurrence in Routine pediatric blood lead surveillance in North Carolina + nationwide; ~500 cases identified nationally, 22 in NC. Lead... |
| 5 | [[sources/napier2024-wanabana-lead-apple-cinnamon\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Government report | CDC outbreak investigation linking childhood Pb poisoning to WanaBana apple cinnamon pouches; Pb source was cinnamon adulterated with lead chromate, not the apple ingredient itself |
| 6 | [[sources/childhood2023-childhood-lead-exposure-linked\|Napier et al. 2023]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, Morbidity and Mortality Weekly Report | 2023 | Peer-reviewed | US Pb, Cr-VI occurrence in Children aged 1–3 years in North Carolina with confirmed blood lead levels ≥5 µg/dL linked to apple cinnamon... (n=22) |
| 7 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions (Seoul, Gyeonggi-do, Chungcheong-do, Jeolla-do, Kyungsang-do, Gangwon-do), 14 fruit... (n=207) |
| 8 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review synthesizing Congressional Subcommittee findings, FDA testing, and peer-reviewed literature on infant and toddler food |
| 9 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galati County, Romania: 45 from commercial markets, 35 from amateur farmers; collected... (n=80) |
| 10 | [[sources/bramwell2022-urban-garden-produce-lead\|Bramwell et al. 2022]]. *Determinants of blood and saliva lead concentrations in adult gardeners on urban agricultural sites*, Environmental Geochemistry and Health | 2022 | Peer-reviewed | GB Pb occurrence in 43 adult urban-agriculture-site gardeners and 29 matched controls in Newcastle upon Tyne, UK; environmental sampling included nearly 280... (n=72) |
| 11 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in raw apple with peel (TDS Food 78; n=27 per analyte) |
| 12 | [[sources/tan2022-carbon-dots-cd-hg-food\|al. 2022]]. *N-doped carbon dots fluorescence sensor for simultaneous detection of Cd2+ and Hg2+ in food samples*, Frontiers in Chemistry | 2022 | Peer-reviewed | Cd, tHg occurrence in Spiked apple and cabbage samples, method validation |
| 13 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 14 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | Measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; apple data included across processing states |
| 15 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 16 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 17 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Ni, Cd, Pb occurrence in Fruit samples of 11 varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) collected from... (n=308) |
| 18 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 19 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type, 9 per governorate per fruit) purchased from... (n=108) |
| 20 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | US tAs, iAs, Pb, Cd, tHg occurrence in 168 commercial baby food containers, 61 brands, 13 food types; purchased from 14 US metropolitan areas and 15... (n=168) |
| 21 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Longitudinal biomarker study including apple-based infant foods among the iAs/tAs exposure sources during weaning; fruit-category exposure context |
| 22 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 23 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 24 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | PL Pb, Cd occurrence in Ten apple, ten plum, twelve strawberry, twelve raspberry, and ten white grape samples (54 fruit lots per harvest... (n=54) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 5 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | 4 sources added; contamination-profile values revised; narrative text revised |
| [d626a623b](https://github.com/paleofoundation/heavymetalindex/commit/d626a623b) | 2026-06-11 | correction | 8 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
