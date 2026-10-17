---
title: "Peanuts"
dek: "An underground developing legume used in snacks and processed ingredients. Explore the evidence on cadmium, nickel, regional variation and derivative products."
rail_highlights:
  - label: Exposure
    text: Peanuts contribute to dietary nickel exposure
    source: sources/efsa-nickel-contam-2020
    source_label: EFSA opinion
  - label: Key distinction
    text: FDA nondetections are bounds rather than measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
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
    typical_ppb: [0, 60]
    p95_ppb: 250
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [36.4, 44.4]
    p95_ppb: 44.7
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"SO 0697\",\"Peanut\",\"iAs\",\"EURO\",\"\",\"as_consumed\",\"2017\",\"2017\"]","role":"context","food_id":"SO 0697","food_name":"Peanut","metal_species":"iAs","basis":"as_consumed","food_state":"","geography":"EURO","year_min":2017,"year_max":2017,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":17,"p10_ppb":0,"p90_ppb":0,"p95_ppb":0,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"SO 0697\",\"Peanut\",\"iAs\",\"WPRO\",\"Cooked\",\"as_consumed\",\"2010\",\"2011\"]","role":"context","food_id":"SO 0697","food_name":"Peanut","metal_species":"iAs","basis":"as_consumed","food_state":"Cooked","geography":"WPRO","year_min":2010,"year_max":2011,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":4,"p10_ppb":3.3,"p90_ppb":8.9,"p95_ppb":9.95,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"SO 0697\",\"Peanut\",\"iAs\",\"WPRO\",\"Raw\",\"as_is\",\"2020\",\"2021\"]","role":"context","food_id":"SO 0697","food_name":"Peanut","metal_species":"iAs","basis":"as_is","food_state":"Raw","geography":"WPRO","year_min":2020,"year_max":2021,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":2,"p10_ppb":0,"p90_ppb":0,"p95_ppb":0,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"SO 0697\",\"Peanut\",\"iAs\",\"WPRO\",\"Cooked\",\"as_is\",\"2022\",\"2022\"]","role":"context","food_id":"SO 0697","food_name":"Peanut","metal_species":"iAs","basis":"as_is","food_state":"Cooked","geography":"WPRO","year_min":2022,"year_max":2022,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":1,"p10_ppb":0,"p90_ppb":0,"p95_ppb":0,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"}]
    evidence_note: "The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis."
  tAs:
    status: populated
    typical_ppb: [5, 30]
    p95_ppb: 70
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-08-09
  tHg:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 5
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
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
    typical_ppb: [150, 290]
    p95_ppb: 700
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::48::uranium","role":"value","food_id":"48","food_name":"Peanuts, dry roasted, salted","metal_species":"U","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 37
hero_image: /static/heroes/peanuts-butter-golden-oil.webp
hero_image_alt: "Whole and shelled peanuts, a dish of peanut butter and an unmarked bottle of golden oil illustrating peanuts ingredient context."
---

# Peanuts

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 48, "Peanuts, dry roasted, salted." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Peanuts (Arachis hypogaea), also called groundnuts, are unusual among legumes in that their pods develop and mature underground. After fertilisation, the petiole elongates and pushes the developing ovary into the soil, where the pod fills over a period of 60 to 80 days in direct contact with the surrounding soil matrix. This geocarpic growth habit means the seed and its enclosing pod are exposed to soil metals throughout grain fill, in contrast to above-ground legumes (lentils, chickpeas, soy) where seeds fill in pods that hang above the soil surface. Cadmium uptake occurs primarily through root membrane transporters and secondarily through direct contact between the pod surface and the soil; both pathways contribute to seed Cd accumulation. Nickel follows a similar bioavailability-driven uptake pattern, and peanuts are consistently identified as one of the highest dietary Ni contributors in occurrence surveys ([[sources/flyvholm1984-nickel-content-food-dietary-intake]]; [[sources/efsa-nickel-contam-2020]]).

Cadmium accumulation in peanuts is further documented in authoritative toxicology reviews as a characteristic of oilseed crops grown with Cd-containing phosphate fertilizers or on soils with elevated natural Cd; peanuts and sunflower seeds are specifically named as elevated-Cd crops in the canonical Cd toxicology chapter ([[sources/nordberg2015-cadmium-chapter]]). The EFSA Cd opinion of 2009 identifies peanuts as a contributing source in European dietary Cd exposure assessments, reflecting their position in processed snack foods and peanut-containing products ([[sources/efsa-cadmium-contam-2009]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 0–60 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/chen2022-peanut-elements-china\|2]], [[sources/blair2017-us-peanut-heavy-metals\|3]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|4]], [[sources/bielecka2021-nuts-toxic-elements-poland\|5]], [[sources/belew2024-peanuts-date-palm-metals\|6]] |
| Cd | n=11 | 36.4–44.4 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]] |
| iAs | Source context | Not quantified | — | — |
| tAs | n=6 | 5–30 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/chen2022-peanut-elements-china\|2]], [[sources/blair2017-us-peanut-heavy-metals\|3]], [[sources/bielecka2021-nuts-toxic-elements-poland\|4]], [[sources/belew2024-peanuts-date-palm-metals\|5]], [[sources/hovanec2004-peanut-butter-arsenic-speciation\|6]] |
| tHg | n=3 | 0–3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/blair2017-us-peanut-heavy-metals\|2]], [[sources/bielecka2021-nuts-toxic-elements-poland\|3]] |
| Ni | n=9 | 408–528 | medium | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]] |
| Al | data gap | — | — | — |
| Cr | n=5 | 150–290 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/chen2022-peanut-elements-china\|2]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|3]], [[sources/belew2024-peanuts-date-palm-metals\|4]], [[sources/alatise2025-fruit-nuts-metals\|5]] |
| Sn | data gap | — | — | — |
| U | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

## Synthesis basis and censoring treatment

The lead, total mercury and chromium cells previously read typical [0,0] with a p95 of 0, and the total arsenic cell read a collapsed [1,5] with a p95 equal to its typical maximum of 5. Both patterns trace to leaning entirely on the three FDA dry-roasted salted composites, in which lead, mercury and chromium were non-detect at reporting limits of 4, 1 and 50 ppb and arsenic detected in two of three at a maximum of 5 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Because peanuts are geocarpic and fill their pods in direct soil contact, kernel-level ICP-MS surveys record materially higher and genuinely detectable concentrations, so the FDA non-detects are treated as left-censored bounds and the central ranges are anchored on the kernel datasets.

For chromium the correction is the largest: Chinese kernels ran 234 to 293 ppb across six provinces and Polish-market peanuts about 230 ppb, both far above the 50 ppb FDA limit that produced the false zero ([[sources/chen2022-peanut-elements-china|Chen et al. 2022]]; [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Ćwieląg-Drabek et al. 2025]]). Total arsenic centres near 5 to 30 ppb across US, Chinese, Polish and Ethiopian kernels and peanut butter, with an upper tail reaching the Polish-market maximum of 71 ppb ([[sources/blair2017-us-peanut-heavy-metals|Blair 2017]]; [[sources/bielecka2021-nuts-toxic-elements-poland|Bielecka et al. 2021]]; [[sources/belew2024-peanuts-date-palm-metals|Belew et al. 2024]]; [[sources/hovanec2004-peanut-butter-arsenic-speciation|Hovanec 2004]]). Lead carries a heavy right tail from single high kernels (1354, 818 and 640 ppb) that drive the right tail, and mercury has only one quantified distribution, a Polish-market median of 2.46 ppb, so it stays a left-censored bound. The mining-site kernels of [[sources/zhang2026-trace-metals-five-crops-chongqing|Zhang et al. 2026]] and the US Southwest arsenic outlier of 410 ppb are extreme-tail context and do not drive any central value.

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

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in groundnuts (peanuts) intended for direct human consumption is 0.10 mg/kg fresh weight, and the ML for lead in peanuts for direct human consumption is 0.10 mg/kg ([[regulations/eu-2023-915-cadmium]]). Codex Alimentarius has adopted a Cd ML for groundnuts intended for further processing that differs from the direct-consumption ML; the relevant Codex document is [[regulations/codex-cadmium-mls]]. The 17th Session of the Codex Committee on Contaminants in Foods (2024) reviewed trace metal limits for nuts and legumes including peanuts ([[sources/codex-cccf17-2024]]). For nickel, Commission Regulation (EU) 2024/1987 set a binding EU maximum level for peanuts of 12 mg/kg (Annex I point 3.6.10.2), applying from 1 July 2025 ([[regulations/eu-2024-1987-nickel-maximum-levels]]); reported peanut Ni (roughly 400–550 ppb) sits well below this level. No US FDA action level for Cd or Ni in peanuts applies under the current regulatory framework; FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not currently list peanuts as a priority category. EFSA's 2020 Ni risk assessment ([[sources/efsa-nickel-contam-2020]]) identifies peanuts as a high-Ni food and uses European peanut occurrence data in chronic exposure modelling, providing the regulatory toxicology basis for evaluating Ni exposure from peanut consumption.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 48: Peanuts, dry roasted, salted | tAs | 3 | 2 | 4.9–5 | 3 |
| 48: Peanuts, dry roasted, salted | Cd | 3 | 3 | 35–45 | 1 |
| 48: Peanuts, dry roasted, salted | Cr | 3 | 0 | ND in all composites | 50 |
| 48: Peanuts, dry roasted, salted | Pb | 3 | 0 | ND in all composites | 4 |
| 48: Peanuts, dry roasted, salted | tHg | 3 | 0 | ND in all composites | 1 |
| 48: Peanuts, dry roasted, salted | Ni | 3 | 3 | 400–550 | 40 |
| 48: Peanuts, dry roasted, salted | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**iAs.** The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis.

WHO GEMS/Food retains the following distinct records. The ranges are source-scope lower-bound P10–P90 summaries; they are not a pooled typical value for this ingredient. Food-group records remain broader context. Differences in basis, period and geography are preserved. [[sources/who-gemsfood-heavy-metal-contaminants]]

| Food / state | Region | Years | Basis | Records | Source LB P10–P90 (ppb) |
| --- | --- | --- | --- | ---: | --- |
| Peanut / not specified | EURO | 2017–2017 | as_consumed | 17 | 0–0 |
| Peanut / Cooked | WPRO | 2010–2011 | as_consumed | 4 | 3.3–8.9 |
| Peanut / Raw | WPRO | 2020–2021 | as_is | 2 | 0–0 |
| Peanut / Cooked | WPRO | 2022–2022 | as_is | 1 | 0–0 |

Recovered WHO summaries alone do not resolve incompatible basis labels or establish that zero-coded results were measured zeros.

Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: [[sources/codex-cccf17-2024]], [[sources/hovanec2004-peanut-butter-arsenic-speciation]].

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Nickel Content of Food and Estimation of Dietary Intake]]<span class="hmi-ref-meta">Mari-Ann Flyvholm, Gitte Dalsgaard Nielsen, and Allan Andersen · Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 · 1984 · [doi.org/10.1007/BF01043419](https://doi.org/10.1007/BF01043419)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/nordberg2015-cadmium-chapter|Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals]]<span class="hmi-ref-meta">Nordberg GF, Nogawa K, and Nordberg M · Academic Press / Elsevier, Amsterdam · 2015 · [doi.org/10.1016/B978-0-444-59453-2.00032-9](https://doi.org/10.1016/B978-0-444-59453-2.00032-9)</span><span class="hmi-ref-tag">Textbook</span>
5. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/chen2022-peanut-elements-china|Determination of macro, micro and toxic element concentrations in peanuts from main peanut producing areas of China by ICP-MS: a pilot study on the geographical characterization]]<span class="hmi-ref-meta">Chen L, Ding M, Li Z, Li X, and Deng L · RSC Advances · 2022 · [doi.org/10.1039/d2ra02148j](https://doi.org/10.1039/d2ra02148j)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers]]<span class="hmi-ref-meta">Ćwieląg-Drabek M, Nieć-Leśniak J, Białek-Dratwa A, Piekut A, Kiciak A, Dziubanek G, et al. · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-024-04438-4](https://doi.org/10.1007/s12011-024-04438-4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/blair2017-us-peanut-heavy-metals|Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits]]<span class="hmi-ref-meta">Blair BF and Lamb MC · Peanut Science · 2017</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/bielecka2021-nuts-toxic-elements-poland|Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis]]<span class="hmi-ref-meta">Bielecka J, Puscion-Jakubik A, Markiewicz-Zukowska R, Soroczynska J, Nowakowski P, Grabia M, et al. · Nutrients · 2021 · [doi.org/10.3390/nu13103606](https://doi.org/10.3390/nu13103606)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/belew2024-peanuts-date-palm-metals|Heavy metals concentration and health risk assessment in peanut and date palm from Jigjiga City Markets, Ethiopia]]<span class="hmi-ref-meta">Belew AA, Besha AT, Assege MA, and Moges GW · Discover Environment · 2024 · [doi.org/10.1007/s44274-024-00151-0](https://doi.org/10.1007/s44274-024-00151-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/hovanec2004-peanut-butter-arsenic-speciation|Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS]]<span class="hmi-ref-meta">Hovanec BM · Journal of Analytical Atomic Spectrometry · 2004 · [doi.org/10.1039/b402561j](https://doi.org/10.1039/b402561j)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/zhang2026-trace-metals-five-crops-chongqing|Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China]]<span class="hmi-ref-meta">Zhang Y, Li X, and Kong F · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-37535-6](https://doi.org/10.1038/s41598-026-37535-6)</span><span class="hmi-ref-tag">Peer-reviewed</span>
13. [[sources/codex-cccf17-2024|Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)]]<span class="hmi-ref-meta">Codex Alimentarius Commission, Codex Committee on Contaminants in Foods · Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission · 2024 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Meetings/CX-735-17/Report/FINAL+REPORT/REP24_CF17e.pdf)</span><span class="hmi-ref-tag">Government</span>
14. [[sources/who-gemsfood-heavy-metal-contaminants|GEMS/Food Contaminants database heavy-metal exports]]<span class="hmi-ref-meta">World Health Organization · GEMS/Food Contamination Monitoring and Assessment Programme · 2026 · [extranet.who.int](https://extranet.who.int/gemsfood/?DisplayFormat=1)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | tAs, Pb, Cd, Cr, and Ni in 10 peanut kernels alongside four other crops adjacent to a Mn mining and smelting area in Xiushan County, Chongqing, by ICP-MS; peanut occurrence under mining-impacted soil conditions |
| 2 | [[sources/alatise2025-fruit-nuts-metals\|Alatise et al. 2025]]. *Assessment of natural radioactivity and heavy metal accumulation in selected edible fruit nuts from Lagos and Ogun State markets, Nigeria*, Nigerian Journal of Theoretical and Environmental Physics | 2025 | Peer-reviewed | NG Pb, Cd, Cr, Ni, tAs, tHg occurrence in peanuts, cashew nuts, walnuts, date nuts, tiger nuts, and kola nuts from Lagos and Ogun State markets (n=six nut types) |
| 3 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Companion ETAAS occurrence dataset for peanuts among five nut types on the Polish market; peanuts carry the highest mean Cd (0.092 mg/kg) and Pb among the five, with HQ >1 for infants 6–11 months |
| 4 | [[sources/liu2025-nanyang-crops-heavy-metals\|Liu et al. 2025]]. *Heavy metal synergistic pollution risk assessment in the soil-crop system of the Nanyang Basin*, Scientific Reports | 2025 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Pb occurrence in 5778 surface soil samples, 185 wheat samples, 75 corn samples, 114 peanut samples, and 374 root soil samples... (n=6252) |
| 5 | [[sources/belew2024-peanuts-date-palm-metals\|Belew et al. 2024]]. *Heavy metals concentration and health risk assessment in peanut and date palm from Jigjiga City Markets, Ethiopia*, Discover Environment | 2024 | Peer-reviewed | ET tAs, Pb, Cr occurrence in six peanut samples and six date palm samples from Jigjiga City markets, Ethiopia (n=12) |
| 6 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Regulatory context for Pb, Cd, iAs, and Hg limits applicable to nuts and legumes under Codex; also covers new quinoa Cd ML adopted at this session |
| 7 | [[sources/eu-2024-1987-nickel-maximum-levels\|EU 2024]]. *Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs*, Official Journal of the European Union, L series, 2024/1987 (31.7.2024) | 2024 | Regulation | EU Ni concentrations |
| 8 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 9 | [[sources/fsanz2024-schedule-19-contaminants\|Zealand 2024]]. *Australia New Zealand Food Standards Code - Schedule 19 - Maximum levels of contaminants and natural toxicants*, Federal Register of Legislation, Authorised Version F2024C00908 | 2024 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, Sn concentrations |
| 10 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 11 | [[sources/ding2023-peanut-cadmium-arsenic-transfer\|Ding et al. 2023]]. *Characteristics and Mechanisms of Soil Co-Contamination Affecting the Transfer of Cadmium and Arsenic in Peanut (Arachis hypogaea L.)*, Agronomy | 2023 | Peer-reviewed | CN Cd, tAs occurrence in Outdoor pot experiment using peanut cultivar Ganhua No. 5 in red soil from China, with four replicate pots... (n=4) |
| 12 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 13 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Narrative review of tAs, Pb, Cd, tHg, Ni, and Cr in oilseeds including peanuts and derived oils; flags Pb and Cd as the most frequently documented oilseed concerns and gaps in commodity-specific MLs |
| 14 | [[sources/tjoa2023-peanut-choy-sum-nickel-laterite\|Tjoa et al. 2023]]. *Nickel acquisition affected by root density of mono- and mixed-cropping peanut and choy sum*, Jurnal Penelitian Kehutanan Wallacea | 2023 | Peer-reviewed | ID Ni occurrence in Peanut and choy sum grown in limonitic laterite soil from nickel-mining context in mono- and mixed-cropping pots |
| 15 | [[sources/bazie2022-burkina-faso-foodstuffs-metals\|Bazie et al. 2022]]. *Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment*, Scientific Reports | 2022 | Peer-reviewed | BF Cd, Pb, Cr, Ni occurrence in rice, maize, peanut, tomato, and dried fish samples in Burkina Faso (n=222) |
| 16 | [[sources/chen2022-peanut-elements-china\|Chen et al. 2022]]. *Determination of macro, micro and toxic element concentrations in peanuts from main peanut producing areas of China by ICP-MS: a pilot study on the geographical characterization*, RSC Advances | 2022 | Peer-reviewed | Pb, Cd, tAs, Cr, Ni, and Al in 66 peanut samples across six Chinese provinces by ICP-MS; LDA correctly classified 97.0% of samples by origin, with Cd flagged as the main risk point due to underground growth |
| 17 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 18 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Cd, Ni, Pb, tAs, tHg, Cr, and U in dry-roasted salted peanuts (TDS Food 48; n=3 per analyte) |
| 19 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Cr, Ni, and Pb by ICP-OES in roasted peanuts alongside mopane worms and sweet corn from South African markets; tAs exceeded threshold limits in all three products and Cd exceeded limits in peanuts |
| 20 | [[sources/bielecka2021-nuts-toxic-elements-poland\|Bielecka et al. 2021]]. *Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis*, Nutrients | 2021 | Peer-reviewed | Poland tAs, Cd, Pb, tHg occurrence in One hundred twenty edible nut samples purchased from Polish markets between January and March 2021: ten samples each... (n=120) |
| 21 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 22 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA Ni TDI derivation and European occurrence dataset; peanuts identified as a high-Ni food group contributing disproportionately to dietary Ni intake |
| 23 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd-mitigation review citing peanut butter at 65 µg/kg (FDA TDS 2014–2016) among the top-ranked foods by mean lower-bound Cd, and identifying soil pH and cultivar selection as the dominant pre-harvest levers |
| 24 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 25 | [[sources/gu2019-maize-peanut-heavy-metals-guangxi\|Gu et al. 2019]]. *Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China*, Environmental Toxicology and Pharmacology | 2019 | Peer-reviewed | CN Cd, Cu, tHg, Pb, Zn occurrence in Sixty-five maize grain samples and thirty-five peanut grain samples paired with rhizosphere soils from Binyang County and Xingbin... (n=100) |
| 26 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 27 | [[sources/blair2017-us-peanut-heavy-metals\|Blair et al. 2017]]. *Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits*, Peanut Science | 2017 | Peer-reviewed | US tHg, Cd, Pb, tAs occurrence in Randomly selected farmer-stock peanut samples from 16 buying points in the Southeast, Southwest, and Virginia-Carolina U.S. growing regions... (n=290) |
| 28 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 29 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Pd, Pt, Sn, Tl, Zn occurrence in 3312 retail food samples from 24 UK locations, combined into 138 prepared-as-consumed food-category composites and 28 food-group composites (n=3312) |
| 30 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 31 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying peanuts and sunflower seeds as elevated-Cd oilseed crops due to soil accumulation |
| 32 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 33 | [[sources/iarc2012-nickel-compounds-monograph-100c\|IARC 2012]]. *Nickel and Nickel Compounds (IARC Monographs Volume 100C — A Review of Human Carcinogens: Arsenic, Metals, Fibres, and Dusts)*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Vol. 100C, pp. 169–218. International Agency for Research on Cancer, Lyon. | 2012 | Government report | INTL Ni occurrence in Human carcinogenicity evidence drawn from occupational cohort and nested case–control studies of nickel-producing and nickel-using workers (smelting, refining,... |
| 34 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; peanuts identified as a contributing Cd source in European dietary exposure assessment |
| 35 | [[sources/fsanz2008-cadmium-peanuts-assessment\|Zealand 2008]]. *Final Assessment Report - Application A552: Cadmium in peanuts*, Food Standards Australia New Zealand Final Assessment Report 12-08 | 2008 | Government report | AU/NZ/CN Cd occurrence in FSANZ regulatory assessment using Australian AQIS 2001-2006 imported-food cadmium tests, USFDA Total Diet Study 1991-2004 peanut values, Chinese... |
| 36 | [[sources/hovanec2004-peanut-butter-arsenic-speciation\|Hovanec 2004]]. *Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS*, Journal of Analytical Atomic Spectrometry | 2004 | Peer-reviewed | tAs and iAs speciation by IC-ICP-MS in 6 US retail peanut butter samples plus NIST SRM 2387; the first peanut butter speciation study, showing organic species (DMA, MMA) dominate over inorganic As — lower toxicological concern than iAs-dominated matrices |
| 37 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni occurrence dataset (2,221 food samples); peanuts reported as a high-Ni food with disproportionate load factor relative to dietary weight |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 8 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 7 sources added; narrative text revised |
| [0a907f56a4](https://github.com/paleofoundation/heavymetalindex/commit/0a907f56a4) | 2026-08-09 | correction | Narrative text revised |
| [4365cdb39b](https://github.com/paleofoundation/heavymetalindex/commit/4365cdb39b) | 2026-08-09 | correction | 8 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
