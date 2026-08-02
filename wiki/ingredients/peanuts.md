---
title: "Peanuts"
type: ingredient
commodity: peanuts
label: "Peanuts"
aliases: ["Peanuts, dry roasted, salted", "peanut"]
category: nut-seed
tds_food:
  number: 48
  description: "Peanuts, dry roasted, salted"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 90]
    p95_ppb: 230
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-06-11
  Cd:
    status: populated
    typical_ppb: [36.4, 44.4]
    p95_ppb: 44.7
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 2]
    p95_ppb: 2
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 36]
    p95_ppb: 71
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-06-11
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: null
    confidence: low
    n_studies: 4
    basis: whole-peanut-kernel-as-sold
    speciation_note: total-Hg-only; no methylmercury measurement in corpus
    last_reviewed: 2026-06-23
  Ni:
    status: populated
    typical_ppb: [408, 528]
    p95_ppb: 539
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 290]
    p95_ppb: 720
    confidence: low
    n_studies: 5
    last_reviewed: 2026-06-11
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
updated: 2026-06-23
sources: 38
---

# Peanuts

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 6/10 HMTc analytes, total n=47 | labeled data-gaps: Al, Sn |
| D2 Regional coverage | OK | 28 jurisdictions, top CN 32% | — |
| D3 Anthropogenic evidence | GAP | 3 soil + 3 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 5 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd CONFIDENT, iAs POOLABLE, tAs POOLABLE, tHg THIN, Ni POOLABLE, Cr THIN, U THIN | tHg: THIN; Cr: THIN; U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 1/10 populated cells declare a basis token | 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 45 claims checked, 45 supported; 13 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming peanuts: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Cr, U; pairing 0 paired, 8 single, 0 unpaired | tHg: THIN; Cr: THIN; U: THIN, needs 1 more study(ies); basis: 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 48, "Peanuts, dry roasted, salted." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Peanuts (Arachis hypogaea), also called groundnuts, are unusual among legumes in that their pods develop and mature underground. After fertilisation, the petiole elongates and pushes the developing ovary into the soil, where the pod fills over a period of 60 to 80 days in direct contact with the surrounding soil matrix. This geocarpic growth habit means the seed and its enclosing pod are exposed to soil metals throughout grain fill, in contrast to above-ground legumes (lentils, chickpeas, soy) where seeds fill in pods that hang above the soil surface. Cadmium uptake occurs primarily through root membrane transporters and secondarily through direct contact between the pod surface and the soil; both pathways contribute to seed Cd accumulation. Nickel follows a similar bioavailability-driven uptake pattern, and peanuts are consistently identified as one of the highest dietary Ni contributors in occurrence surveys ([[sources/flyvholm1984-nickel-content-food-dietary-intake]]; [[sources/efsa-nickel-contam-2020]]).

Cadmium accumulation in peanuts is further documented in authoritative toxicology reviews as a characteristic of oilseed crops grown with Cd-containing phosphate fertilizers or on soils with elevated natural Cd; peanuts and sunflower seeds are specifically named as elevated-Cd crops in the canonical Cd toxicology chapter ([[sources/nordberg2015-cadmium-chapter]]). The EFSA Cd opinion of 2009 identifies peanuts as a contributing source in European dietary Cd exposure assessments, reflecting their position in processed snack foods and peanut-containing products ([[sources/efsa-cadmium-contam-2009]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 0–90 | medium | [[sources/blair2017-us-peanut-heavy-metals\|1]], [[sources/bielecka2021-nuts-toxic-elements-poland\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]] |
| Cd | n=11 | 36.4–44.4 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]] |
| iAs | n=3 | 1–2 | medium | [[sources/codex-cccf17-2024\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/hovanec2004-peanut-butter-arsenic-speciation\|3]] |
| tAs | n=6 | 5–36 | medium | [[sources/blair2017-us-peanut-heavy-metals\|1]], [[sources/bielecka2021-nuts-toxic-elements-poland\|2]], [[sources/chen2022-peanut-elements-china\|3]] |
| tHg | n=4 | 0–5 | low | [[sources/bielecka2021-nuts-toxic-elements-poland\|1]], [[sources/liu2025-nanyang-crops-heavy-metals\|2]], [[sources/blair2017-us-peanut-heavy-metals\|3]] |
| Ni | n=9 | 408–528 | medium | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]] |
| Al | data gap | — | — | — |
| Cr | n=5 | 0–290 | low | [[sources/chen2022-peanut-elements-china\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/alatise2025-fruit-nuts-metals\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, and chromium cells above were resynthesized on 2026-06-11 on a whole peanut-kernel basis, the form in which peanuts enter the ingredient supply chain. Most primary occurrence literature reports kernel concentrations on a dry or as-sold basis; the FDA Total Diet Study figures for dry-roasted salted peanuts (TDS Food 48, n=3 per analyte) are carried as a corroborating as-consumed anchor rather than the headline basis. Inorganic arsenic and total arsenic are kept as distinct analytes and are never derived from one another by a fixed ratio; only the speciated peanut-butter measurement ([[sources/hovanec2004-peanut-butter-arsenic-speciation|Hovanec 2004]]) populates the iAs cell, and the total-arsenic values synthesized here are not propagated to it.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, total arsenic, and chromium at typical and 95th-percentile values that mis-recorded FDA reporting-limit non-detects as literal zeros. In the FDA TDS composites every dry-roasted-peanut sample fell below the reporting limit for lead (4 µg/kg) and chromium (50 µg/kg), and the total-arsenic distribution collapsed against a 3 µg/kg reporting limit (one of three samples non-detect, the rest pinned near 5 µg/kg). The resynthesis replaces those degenerate cells with the detected kernel distributions from the primary literature, in which all three metals are low but non-zero, with right tails driven by market-sample and contaminated-soil production. The honest floor for lead and chromium is the FDA reporting limit expressed as a left-censored bound (`<4` and `<50` µg/kg respectively), not zero.

The lead distribution rests on US farmer-stock data ([[sources/blair2017-us-peanut-heavy-metals|Blair et al. 2017]], n=290, regression-on-order-statistics mean 32 µg/kg, 95% upper confidence limit 37 µg/kg, with 94 of 290 samples censored below 20 µg/kg) together with Polish-market surveys ([[sources/bielecka2021-nuts-toxic-elements-poland|Bielecka et al. 2021]], peanut median 82 µg/kg, mean 189 µg/kg; [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Ćwieląg-Drabek et al. 2025]], peanut mean 229 µg/kg, 49 percent below the quantification limit) and Chinese provincial data ([[sources/chen2022-peanut-elements-china|Chen et al. 2022]], province means 7 to 60 µg/kg, Hebei non-detect). The 95th-percentile anchor of 230 µg/kg is set at the Polish retail mean; documented single-sample maxima (Bielecka 1,354 µg/kg, Ćwieląg-Drabek 818 µg/kg, Blair 640 µg/kg Virginia-Carolina outlier) and a 5,800 µg/kg peanut from a Burkina Faso open market ([[sources/bazie2022-burkina-faso-foodstuffs-metals|Bazie et al. 2022]]) are reported as a separate market-contamination and mining-region stratum and are not folded into the global percentile.

The total-arsenic distribution rests on Blair et al. 2017 (US, ROS mean 28 µg/kg, 109 of 290 censored below 20 µg/kg, single Southwest-region outlier at 410 µg/kg), Bielecka et al. 2021 (peanut median 24 µg/kg, mean 36 µg/kg, range 21 to 71 µg/kg), Chen et al. 2022 (province means 9 to 20 µg/kg), and Belew et al. 2024 (Ethiopia, mean 17 µg/kg, range 1 to 50 µg/kg). The typical band of 5 to 36 µg/kg spans the FDA as-consumed central value to the Polish retail mean; the 95th-percentile anchor of 71 µg/kg is the Bielecka upper range, with the Blair 410 µg/kg Southwest outlier held out of the percentile.

Chromium is reported as total chromium at low confidence; no peanut-kernel hexavalent-chromium measurement exists in the corpus, and no Cr-VI value is inferred from the total. The total-chromium distribution rests on Chen et al. 2022 (province means 234 to 293 µg/kg by ICP-MS), Ćwieląg-Drabek et al. 2025 (peanut mean approximately 230 µg/kg, 4 percent below the quantification limit), Belew et al. 2024 (Ethiopia, mean 145 µg/kg, range 10 to 500 µg/kg), and Alatise et al. 2025 (Nigeria, peanut 720 µg/kg). The typical band of `<50` to 290 µg/kg runs from the FDA left-censored floor to the upper Chinese provincial mean; the 95th-percentile anchor of 720 µg/kg is the Nigerian market value. Legume composites that pool peanut with soybean ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]], legume Cr to 2,600 µg/kg) are soybean-driven and are not adopted as a peanut percentile.

## Ranges by source, region, and variety

Peanut Cd concentrations vary substantially by growing region. Sandy, acidic soils with elevated natural Cd, common in parts of West and Central Africa and certain South American growing zones, produce peanuts with higher Cd than peanuts grown on managed US or Argentine soils. US production, concentrated in Virginia, Georgia, Texas, and the Carolinas, generally shows lower Cd than African or some Asian production, but within-US variance by field and season is not negligible. Chinese peanut production covers diverse soil geographies; without origin-specific testing, Chinese peanuts represent an unknown Cd distribution. Runner, Virginia, Spanish, and Valencia types do not show consistent cultivar-level differences in Cd accumulation in the available literature; growing region soil chemistry dominates within-group variance.

Nickel occurrence in peanuts is less origin-dependent than Cd; the EFSA 2020 Ni assessment documents peanuts as a high-Ni food group across European monitoring data regardless of geographic origin, consistent with Ni being a normal soil constituent present in bioavailable form across a wide range of agricultural soils ([[sources/efsa-nickel-contam-2020]]). Ni in peanuts therefore does not respond to origin-based sourcing interventions as strongly as Cd.

The FDA TDS FY2018-FY2020 data for dry-roasted salted peanuts (TDS Food 48, n=3) shows Cd at 35-45 ppb (median approximately 42 ppb) and Ni at 400-550 ppb, reflecting US market peanuts predominantly from US-grown sources ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Dry roasting at 160-175 degrees Celsius does not appreciably volatilise inorganic metals (Pb, Cd, Ni). Moisture loss during roasting means dry roasted peanut metal concentrations are slightly higher on a wet-weight basis than raw peanut concentrations from the same lot. Blanching (skin removal post-roasting) removes the seed coat; the seed coat constitutes a small mass fraction, and its contribution to the whole-nut metal burden is minor. Salting (dry surface application) does not add significant heavy metals at standard application levels.

## Ingredient-derivative risk

Roasted whole peanuts represent the base form. Peanut butter (see [[ingredients/peanut-butter]]) is a concentrated paste form that carries the same metal profile as the source peanuts. Defatted peanut flour and defatted peanut meal, produced as co-products of peanut oil extraction, concentrate metals above whole-peanut levels because the oil fraction (which is metal-free after refining) is removed while the metal-bearing protein and fibre matrix remains; defatted peanut flour is therefore a higher-risk derivative than whole peanuts or peanut butter on a per-unit-mass basis. Refined peanut oil contains negligible heavy metals after industrial refining (solvent extraction, degumming, bleaching, deodorisation) because metals partition to the aqueous and solid phases.

## Mitigation options

### Sourcing levers

Specifying peanut origin to prefer US Southeast or Argentine production over unverified African or Asian origin, supported by Cd testing of incoming lots, is the highest-impact sourcing lever for cadmium reduction. For nickel, origin specification does not reduce risk as reliably; lot-level testing is the preferred lever. Codex and EU Cd MLs for peanuts provide a minimum compliance threshold; brand QA programs may adopt tighter internal specifications given the sensitivity of peanut Cd to soil origin.

### Agronomic levers

Soil liming in peanut fields to raise pH above 6.5 reduces soil Cd bioavailability and plant uptake. Avoiding application of Cd-contaminated phosphate fertilizers is a preventive measure for growers. These levers are most accessible in contracted supply chains where the buyer has influence over field management.

### Processing levers

No validated commercial-scale metal-reduction processing step for whole peanuts is documented in the current corpus. Blanching provides marginal seed-coat removal. The most effective processing lever documented is avoiding co-production of defatted peanut flour in applications where Cd load is a concern, since the defatting step concentrates metals into the meal fraction.

### Formulation levers

In composite products (snack mixes, granola bars, protein powders) where peanuts contribute a large share of dietary Ni, substituting a portion of peanut inclusion with seeds or other nuts that are lower in Ni per serving reduces the Ni contribution. For Cd, peanut contribution in multi-ingredient products is diluted by the overall ingredient mix, and the formulation lever is relevant primarily in high-peanut-fraction products.

### Testing and QC levers

Lot-level ICP-MS testing of incoming peanuts or peanut-derived ingredients for Cd and Ni is the most direct control. Given that TDS data show consistent Cd detectability at 35-45 ppb and Ni at 400-550 ppb, both analytes are reliably above typical LODs and warrant routine monitoring in quality programmes. Third-party laboratory testing with chain-of-custody documentation provides audit-defensible evidence.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in groundnuts (peanuts) intended for direct human consumption is 0.10 mg/kg fresh weight, and the ML for lead in peanuts for direct human consumption is 0.10 mg/kg ([[regulations/eu-2023-915-cadmium]]). Codex Alimentarius has adopted a Cd ML for groundnuts intended for further processing that differs from the direct-consumption ML; the relevant Codex document is [[regulations/codex-cadmium-mls]]. The 17th Session of the Codex Committee on Contaminants in Foods (2024) reviewed trace metal limits for nuts and legumes including peanuts ([[sources/codex-cccf17-2024]]). No US FDA action level for Cd or Ni in peanuts applies under the current regulatory framework; FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not currently list peanuts as a priority category. EFSA's 2020 Ni risk assessment ([[sources/efsa-nickel-contam-2020]]) identifies peanuts as a high-Ni food and uses European peanut occurrence data in chronic exposure modelling, providing the regulatory toxicology basis for evaluating Ni exposure from peanut consumption.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Peanuts, dry roasted, salted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 35 | 36.4 | 42 | 44.4 | 44.7 | 45 | in profile |
| Cr | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 3 | 400 | 408 | 440 | 528 | 539 | 550 | in profile |
| Pb | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0.98 | 4.9 | 4.98 | 4.99 | 5 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Nickel Content of Food and Estimation of Dietary Intake]]<span class="hmi-ref-meta">Mari-Ann Flyvholm, Gitte Dalsgaard Nielsen, and Allan Andersen · Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 · 1984 · [doi.org/10.1007/BF01043437](https://doi.org/10.1007/BF01043437)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/nordberg2015-cadmium-chapter|Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals]]<span class="hmi-ref-meta">Nordberg GF, Nogawa K, and Nordberg M · Academic Press / Elsevier, Amsterdam · 2015 · [doi.org/10.1016/B978-0-444-59453-2.00032-9](https://doi.org/10.1016/B978-0-444-59453-2.00032-9)</span><span class="hmi-ref-tag">Textbook</span>
5. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/hovanec2004-peanut-butter-arsenic-speciation|Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS]]<span class="hmi-ref-meta">Hovanec BM · Journal of Analytical Atomic Spectrometry · 2004 · [doi.org/10.1039/b402561j](https://doi.org/10.1039/b402561j)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/blair2017-us-peanut-heavy-metals|Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits]]<span class="hmi-ref-meta">Blair BF and Lamb MC · Peanut Science · 2017</span><span class="hmi-ref-tag">Review</span>
8. [[sources/bielecka2021-nuts-toxic-elements-poland|Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis]]<span class="hmi-ref-meta">Bielecka J, Puscion-Jakubik A, Markiewicz-Zukowska R, Soroczynska J, Nowakowski P, Grabia M, et al. · Nutrients · 2021 · [doi.org/10.3390/nu13103606](https://doi.org/10.3390/nu13103606)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers]]<span class="hmi-ref-meta">Ćwieląg-Drabek M, Nieć-Leśniak J, Białek-Dratwa A, Piekut A, Kiciak A, Dziubanek G, et al. · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-024-04438-4](https://doi.org/10.1007/s12011-024-04438-4)</span><span class="hmi-ref-tag">Review</span>
10. [[sources/chen2022-peanut-elements-china|Determination of macro, micro and toxic element concentrations in peanuts from main peanut producing areas of China by ICP-MS: a pilot study on the geographical characterization]]<span class="hmi-ref-meta">Chen L, Ding M, Li Z, Li X, and Deng L · RSC Advances · 2022 · [doi.org/10.1039/d2ra02148j](https://doi.org/10.1039/d2ra02148j)</span><span class="hmi-ref-tag">Review</span>
11. [[sources/bazie2022-burkina-faso-foodstuffs-metals|Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment]]<span class="hmi-ref-meta">Bazie SR, Compaore MKA, Bande M, Kpoda SD, Meda NSBR, Ouedraogo Kangambega TM, et al. · Scientific Reports · 2022 · [doi.org/10.1038/s41598-022-08470-z](https://doi.org/10.1038/s41598-022-08470-z)</span><span class="hmi-ref-tag">Review</span>
12. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Review</span>
13. [[sources/codex-cccf17-2024|Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)]]<span class="hmi-ref-meta">Codex Alimentarius Commission, Codex Committee on Contaminants in Foods · Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission · 2024 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Meetings/CX-735-17/Report/FINAL+REPORT/REP24_CF17e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | tAs, Pb, Cd, Cr, and Ni in 10 peanut kernels alongside four other crops adjacent to a Mn mining and smelting area in Xiushan County, Chongqing, by ICP-MS; peanut occurrence under mining-impacted soil conditions |
| 2 | [[sources/alatise2025-fruit-nuts-metals\|Alatise et al. 2025]]. *Assessment of natural radioactivity and heavy metal accumulation in selected edible fruit nuts from Lagos and Ogun State markets, Nigeria*, Nigerian Journal of Theoretical and Environmental Physics | 2025 | Peer-reviewed | NG Pb, Cd, Cr, Ni, tAs, tHg occurrence in peanuts, cashew nuts, walnuts, date nuts, tiger nuts, and kola nuts from Lagos and Ogun State markets (n=six nut types) |
| 3 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Companion ETAAS occurrence dataset for peanuts among five nut types on the Polish market; peanuts carry the highest mean Cd (0.092 mg/kg) and Pb among the five, with HQ >1 for infants 6–11 months |
| 4 | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | PL/EU Cd, Pb, Cr, Ni occurrence in Commercial nuts (almonds, cashews, hazelnuts, peanuts, walnuts) available on the Polish market (n=69) |
| 5 | [[sources/liu2025-nanyang-crops-heavy-metals\|Liu et al. 2025]]. *Heavy metal synergistic pollution risk assessment in the soil-crop system of the Nanyang Basin*, Scientific Reports | 2025 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Pb occurrence in 5778 surface soil samples, 185 wheat samples, 75 corn samples, 114 peanut samples, and 374 root soil samples... (n=6252) |
| 6 | [[sources/belew2024-peanuts-date-palm-metals\|Belew et al. 2024]]. *Heavy metals concentration and health risk assessment in peanut and date palm from Jigjiga City Markets, Ethiopia*, Discover Environment | 2024 | Peer-reviewed | ET tAs, Pb, Cr occurrence in six peanut samples and six date palm samples from Jigjiga City markets, Ethiopia (n=12) |
| 7 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Regulatory context for Pb, Cd, iAs, and Hg limits applicable to nuts and legumes under Codex; also covers new quinoa Cd ML adopted at this session |
| 8 | [[sources/eu-2024-1987-nickel-maximum-levels\|EU 2024]]. *Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs*, Official Journal of the European Union, L series, 2024/1987 (31.7.2024) | 2024 | Regulation | EU Ni concentrations |
| 9 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 10 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 11 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 12 | [[sources/ding2023-peanut-cadmium-arsenic-transfer\|Ding et al. 2023]]. *Characteristics and Mechanisms of Soil Co-Contamination Affecting the Transfer of Cadmium and Arsenic in Peanut (Arachis hypogaea L.)*, Agronomy | 2023 | Peer-reviewed | CN Cd, tAs occurrence in Outdoor pot experiment using peanut cultivar Ganhua No. 5 in red soil from China, with four replicate pots... (n=4) |
| 13 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 14 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Narrative review of tAs, Pb, Cd, tHg, Ni, and Cr in oilseeds including peanuts and derived oils; flags Pb and Cd as the most frequently documented oilseed concerns and gaps in commodity-specific MLs |
| 15 | [[sources/tjoa2023-peanut-choy-sum-nickel-laterite\|Tjoa et al. 2023]]. *Nickel acquisition affected by root density of mono- and mixed-cropping peanut and choy sum*, Jurnal Penelitian Kehutanan Wallacea | 2023 | Peer-reviewed | ID Ni occurrence in Peanut and choy sum grown in limonitic laterite soil from nickel-mining context in mono- and mixed-cropping pots |
| 16 | [[sources/bazie2022-burkina-faso-foodstuffs-metals\|Bazie et al. 2022]]. *Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment*, Scientific Reports | 2022 | Peer-reviewed | BF Cd, Pb, Cr, Ni occurrence in rice, maize, peanut, tomato, and dried fish samples in Burkina Faso (n=222) |
| 17 | [[sources/chen2022-peanut-elements-china\|Chen et al. 2022]]. *Determination of macro, micro and toxic element concentrations in peanuts from main peanut producing areas of China by ICP-MS: a pilot study on the geographical characterization*, RSC Advances | 2022 | Peer-reviewed | Pb, Cd, tAs, Cr, Ni, and Al in 66 peanut samples across six Chinese provinces by ICP-MS; LDA correctly classified 97.0% of samples by origin, with Cd flagged as the main risk point due to underground growth |
| 18 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 19 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Cd, Ni, Pb, tAs, tHg, Cr, and U in dry-roasted salted peanuts (TDS Food 48; n=3 per analyte) |
| 20 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Cr, Ni, and Pb by ICP-OES in roasted peanuts alongside mopane worms and sweet corn from South African markets; tAs exceeded threshold limits in all three products and Cd exceeded limits in peanuts |
| 21 | [[sources/bielecka2021-nuts-toxic-elements-poland\|Bielecka et al. 2021]]. *Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis*, Nutrients | 2021 | Peer-reviewed | Poland tAs, Cd, Pb, tHg occurrence in One hundred twenty edible nut samples purchased from Polish markets between January and March 2021: ten samples each... (n=120) |
| 22 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 23 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA Ni TDI derivation and European occurrence dataset; peanuts identified as a high-Ni food group contributing disproportionately to dietary Ni intake |
| 24 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd-mitigation review citing peanut butter at 65 µg/kg (FDA TDS 2014–2016) among the top-ranked foods by mean lower-bound Cd, and identifying soil pH and cultivar selection as the dominant pre-harvest levers |
| 25 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 26 | [[sources/gu2019-maize-peanut-heavy-metals-guangxi\|Gu et al. 2019]]. *Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China*, Environmental Toxicology and Pharmacology | 2019 | Peer-reviewed | CN Cd, Cu, tHg, Pb, Zn occurrence in Sixty-five maize grain samples and thirty-five peanut grain samples paired with rhizosphere soils from Binyang County and Xingbin... (n=100) |
| 27 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 28 | [[sources/blair2017-us-peanut-heavy-metals\|Blair et al. 2017]]. *Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits*, Peanut Science | 2017 | Peer-reviewed | US tHg, Cd, Pb, tAs occurrence in Randomly selected farmer-stock peanut samples from 16 buying points in the Southeast, Southwest, and Virginia-Carolina U.S. growing regions... (n=290) |
| 29 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 30 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Pd, Pt, Sn, Tl, Zn occurrence in 3312 retail food samples from 24 UK locations, combined into 138 prepared-as-consumed food-category composites and 28 food-group composites (n=3312) |
| 31 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 32 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying peanuts and sunflower seeds as elevated-Cd oilseed crops due to soil accumulation |
| 33 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 34 | [[sources/iarc2012-nickel-compounds-monograph-100c\|IARC 2012]]. *Nickel and Nickel Compounds (IARC Monographs Volume 100C — A Review of Human Carcinogens: Arsenic, Metals, Fibres, and Dusts)*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Vol. 100C, pp. 169–218. International Agency for Research on Cancer, Lyon. | 2012 | Government report | INTL Ni occurrence in Human carcinogenicity evidence drawn from occupational cohort and nested case–control studies of nickel-producing and nickel-using workers (smelting, refining,... |
| 35 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; peanuts identified as a contributing Cd source in European dietary exposure assessment |
| 36 | [[sources/fsanz2008-cadmium-peanuts-assessment\|Zealand 2008]]. *Final Assessment Report - Application A552: Cadmium in peanuts*, Food Standards Australia New Zealand Final Assessment Report 12-08 | 2008 | Government report | AU/NZ/CN Cd occurrence in FSANZ regulatory assessment using Australian AQIS 2001-2006 imported-food cadmium tests, USFDA Total Diet Study 1991-2004 peanut values, Chinese... |
| 37 | [[sources/hovanec2004-peanut-butter-arsenic-speciation\|Hovanec 2004]]. *Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS*, Journal of Analytical Atomic Spectrometry | 2004 | Peer-reviewed | tAs and iAs speciation by IC-ICP-MS in 6 US retail peanut butter samples plus NIST SRM 2387; the first peanut butter speciation study, showing organic species (DMA, MMA) dominate over inorganic As — lower toxicological concern than iAs-dominated matrices |
| 38 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni occurrence dataset (2,221 food samples); peanuts reported as a high-Ni food with disproportionate load factor relative to dietary weight |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 5 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | Contamination-profile values revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [d626a623b](https://github.com/paleofoundation/heavymetalindex/commit/d626a623b) | 2026-06-11 | correction | 7 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
