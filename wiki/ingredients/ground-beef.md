---
title: "Ground beef"
type: ingredient
commodity: ground-beef
label: "Ground beef"
aliases: ["Beef, ground, pan-cooked", "ground beef"]
category: meat
tds_food:
  number: 13
  description: "Beef, ground, pan-cooked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 60]
    p95_ppb: 90
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-23
    basis: ground-beef-muscle-wet-weight
    speciation: total-Pb-only
    note: >-
      FDA TDS commodity-exact composite fully left-censored (27/27 ND, 4 ppb
      reporting limit); central band anchored on clean-market muscle (Khalafalla
      2011 muscle mean 8.77 ppb) through ordinary Egyptian retail minced meat
      (Shaltout 2020 minced-meat mean 60 ppb, max 90 ppb). Imported-frozen and
      MPL-exceedance strata (Rabeey 2025 muscle mean 684 ppb; Mohamed 2023
      640-890 ppb) stratified out of the central and tail estimates.
  Cd:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-23
    basis: ground-beef-muscle-wet-weight
    speciation: total-Cd-only
    note: >-
      FDA TDS commodity-exact composite fully left-censored (27/27 ND, 1 ppb
      reporting limit); central band anchored on clean-market muscle (Khalafalla
      2011 muscle mean 1.40 ppb) through convergent ordinary-retail means
      (Shaltout 2020 minced 30 ppb; Mohamed 2023 20 ppb; Rabeey 2025 muscle
      30 ppb). Unlike Pb/tHg, Rabeey muscle Cd is not an outlier and is folded in.
      95th percentile anchored at Rabeey 2025 muscle maximum 100 ppb (22.9%
      above the 50 ppb MPL).
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [1.9, 5.9]
    p95_ppb: 6.1
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 4]
    p95_ppb: 80
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: ground-beef-muscle-wet-weight
    speciation: total-Hg-only
    proxy: beef-muscle
  Ni:
    status: populated
    typical_ppb: [0, 18.8]
    p95_ppb: 47
    confidence: high
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
    typical_ppb: [0, 90.4]
    p95_ppb: 100
    confidence: high
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
    typical_ppb: [0, 2.3]
    p95_ppb: 3.1
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 2
---

# Ground beef

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 13, "Beef, ground, pan-cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Ground beef accumulates trace metals primarily through the feed, water, and pasture environment of the cattle from which it is derived. Cattle grazing on land with elevated soil metal content ingest metals directly through soil particles adhering to forage and through contaminated water sources. Metals taken up into feed crops or forages are absorbed across the gastrointestinal tract and distributed to soft tissues; muscle tissue, which constitutes the bulk of ground beef, receives a fraction of absorbed metal but retains far less than the liver or kidney. Cadmium and lead tend to partition preferentially to the renal cortex and hepatic parenchyma rather than muscle, which is why ground beef presents a substantially lower Cd and Pb burden than offal products from the same animals. Total arsenic in cattle muscle reflects environmental background, with organic arsenic species dominant and inorganic arsenic (iAs) generally below reporting limits. Feed additives, particularly phosphate mineral supplements, can carry trace Cd depending on the purity of the phosphate source, and this route is reflected in low but detectable Cd in some survey data. Geographic variation in soil geochemistry drives the principal between-source variability for Pb, Cd, and U in muscle tissue.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–60 | low | [[sources/khalafalla2011-beef-carcasses-metals-egypt\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|3]] |
| Cd | n=5 | 0–30 | medium | [[sources/khalafalla2011-beef-carcasses-metals-egypt\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1.9–5.9 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=4 | 0–4 | low | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/khalafalla2011-beef-carcasses-metals-egypt\|2]], [[sources/mohamed2023-heavy-metals-beef-egypt\|3]] |
| Ni | n=2 | 0–18.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–90.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.3 | high | — |

## Synthesis basis and censoring treatment

The total-mercury cell was resynthesized on 2026-06-11 on a ground-beef muscle wet-weight basis, the form in which the ingredient enters the supply chain. Ground beef is comminuted skeletal muscle, so cattle-muscle total-mercury surveys are carried as an explicitly labeled muscle proxy; no survey in the current corpus measures total mercury in retail ground beef specifically, and no value is generalized across species or from offal. Values below the analytical limit of detection are treated as left-censored, not as measured zeros. Total mercury is held distinct from methylmercury and is not derived from it; every contributing source reports total mercury by cold-vapor or hydride atomic-absorption and none speciates the organic fraction, so this cell carries `total-Hg-only` and no methylmercury value is inferred.

The earlier profile reported total mercury at typical and 95th-percentile values of zero at high confidence with two contributing sources. Those figures were an artifact of pooling two fully or partly censored inputs as literal zeros: the FDA Total Diet Study FY2018-FY2020 composite for "Beef, ground, pan-cooked" (n=27), in which all 27 samples fell below the 1 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020]]), and the imported-frozen Egyptian muscle survey, which in fact reported a muscle mean of 312 µg/kg rather than zero ([[sources/rabeey2025-bovine-hg-pb-cd-egypt|Rabeey et al. 2025]]). The high-confidence zero was therefore both a censoring error on the FDA input and a misreading of the Rabeey input; the resynthesis replaces it with the detected beef-muscle distribution from the primary occurrence literature, in which clean-market muscle mercury is low but non-zero. The honest floor for the FDA-censored commodity-exact input is the 1 µg/kg reporting limit expressed as a left-censored bound, not a measured zero.

The central estimate rests on the two clean-market abattoir and retail muscle surveys: the Beni-Suef abattoir survey of 100 cattle-muscle samples ([[sources/khalafalla2011-beef-carcasses-metals-egypt|Khalafalla et al. 2011]], muscle mean 3.91 µg/kg fresh weight, maximum 80.8 µg/kg, 1 of 100 below detection, measured by ICP-MS) and the Sharkia retail beef survey of 30 samples ([[sources/mohamed2023-heavy-metals-beef-egypt|Mohamed et al. 2023]], mercury undetected in all 15 chilled samples and absent in 67% of the 15 frozen samples, frozen-fraction mean 80 µg/kg). The typical band is carried as a left-censored 0 to 4 µg/kg, the censored FDA floor through the Khalafalla muscle mean, and the 95th percentile is anchored at 80 µg/kg, the convergent upper reach of the two clean-market muscle distributions (Khalafalla muscle maximum 80.8 µg/kg; Mohamed frozen-fraction mean 80 µg/kg). Confidence is low: the commodity-exact FDA input is fully censored, the supporting distributions are a muscle proxy rather than retail ground beef, and the geographic base is narrow and weighted to Egyptian sampling.

The imported-frozen Egyptian muscle survey ([[sources/rabeey2025-bovine-hg-pb-cd-egypt|Rabeey et al. 2025]], 105 muscle samples, mean 312 µg/kg, range 13-1228 µg/kg, 54.3% above the authors' cited 0.05 mg/kg limit) is roughly two orders of magnitude above every other beef-muscle survey in the corpus and is treated as a high imported-frozen stratum rather than folded into the central estimate; its elevated values describe frozen bovine muscle marketed in Sohag, Egypt, with source countries the authors describe as Brazil, India, and the United States, and are not representative of US-retail ground beef. It is counted among the distinct contributors because it measured total mercury in bovine muscle, but its central tendency is stratified out of the typical and 95th-percentile values for the reasons above.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Beef, ground, pan-cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 90.4 | 100 | 600 | in profile |
| Ni | 27 | 0 | 0 | 0 | 18.8 | 47 | 290 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 1.4 | 2.32 | 3.13 | 3.5 | in profile |
| tAs | 27 | 0 | 1.92 | 4.2 | 5.94 | 6.07 | 8.5 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured ground beef as TDS Food 13 (n=27) and found Pb and Cd below reporting limits across the full distribution, with Cr detectable at a p90 of 90.4 ppb and a maximum of 600 ppb, Ni detectable at a p50 of 0 ppb and a maximum of 290 ppb, and tAs ranging from a p10 of 1.92 ppb to a maximum of 8.5 ppb [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. Uranium was detected with a median of 1.4 ppb and a maximum of 3.5 ppb. These values reflect the US retail market, which aggregates cattle from diverse regional production systems. European studies on beef muscle generally report similarly low Cd and Pb in muscle tissue, below the EU maximum levels. Geographic enrichment of soil lead near historical industrial sites or mining areas has been detected in some grazing-land cattle, but the retail composite approach of the TDS tends to dilute localized extremes. Grass-fed versus grain-fed production has not been shown to produce systematically different muscle-metal concentrations in the current corpus; this is an area where additional evidence is needed.

## Processing effects

Grinding converts whole cuts to a homogenous matrix, which removes the spatial separation between surface contamination and interior muscle. If surface contamination from slaughter environments, including bone fragments, periosteal tissue, or adhering soil, is introduced during grinding, metals may distribute throughout the product in a way that would not occur in intact cuts. Cooking to the pan-cooked state used in the FDA TDS (which represents a common retail preparation) causes moisture loss and some concentration of metals on a wet-weight basis, though the magnitude is modest for muscle tissue. Fat rendering during cooking does not materially redistribute metals: the fat-associated fraction of metals in muscle is small, and drained drip fat carries little of the total metal burden. For uranium and arsenic, which are detected at low levels in ground beef, cooking method and internal temperature are not known to alter speciation in the current corpus. _No quantified data on cooking-induced concentration changes specific to ground beef metals in the current corpus; section will be expanded when relevant evidence is ingested._

## Ingredient-derivative risk

Ground beef as a consumer product presents lower derivative-concentration risk than organ-meat products. Beef liver and kidney, which are not this page, concentrate Cd dramatically relative to muscle; consumers who incorporate organ meats into ground preparations (for example, ground liver blended with ground beef) should consult [[ingredients/beef-liver]] for the relevant contamination profile. Ground beef used in composite products such as bolognese sauces, meat pies, or ready-to-eat frozen meals does not concentrate metals through the composite preparation step; dilution with other ingredients (pasta, vegetables, sauce) tends to reduce per-serving metal exposure relative to ground beef alone. Rendered beef fat and tallow derived from the rendering process partition metals differently than muscle, but no specific concentration data for tallow from US retail cattle are available in the current corpus.

## Mitigation options

### Sourcing levers

Selecting cattle raised on pasture or feed from regions with low soil Cd and Pb is the most effective lever for reducing muscle metal content, because the primary exposure route is dietary. Supplier specifications requiring pasture testing for Cd and Pb in high-risk geologies provide a documented basis for ingredient risk assessment. The US and EU meat supply chains do not routinely publish soil-origin metadata at retail; traceability to regional origin is achievable through supply-chain audit but not through standard retail labeling.

### Agronomic levers

Soil amendment on grazing land (liming to raise pH and reduce metal bioavailability) reduces cattle dietary Cd intake, consistent with the well-established relationship between soil pH and Cd mobility. This lever is controlled by the agricultural producer rather than the food manufacturer and is most relevant when sourcing from regions with historically elevated soil Cd or Pb.

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Ground beef products that blend organ meats into the muscle grind elevate Cd; restricting such blends to muscle-only specification provides a straightforward formulation lever. The FDA TDS food "Beef, ground, pan-cooked" does not specify organ-meat inclusion, so the TDS data represent the market as encountered.

### Testing and QC levers

ICP-MS analysis of incoming lots provides direct verification of Cd, Pb, and tAs concentrations in ground beef; typical LOQs for these analytes in muscle tissue are below the EU maximum levels, making routine lot testing technically feasible. Spot-check testing against supplier-origin-level baseline monitoring is a proportionate approach given that ground beef is generally a low-concentration matrix.

### Packaging and storage levers

Ground beef is typically packaged in oxygen-scavenged trays or vacuum pouches, not in tin-lined cans; accordingly, Sn migration from packaging is not a relevant lever for this commodity.

## Regulatory limits that apply

EU Regulation 2023/915 (and its predecessor framework under Regulation 1881/2006) sets maximum levels for muscle meat of bovine animals of 0.10 mg/kg wet weight for Pb and 0.050 mg/kg wet weight for Cd [[regulations/eu2023-contaminants-maximum-levels]]. These values apply to the product as placed on the market; the FDA TDS data for ground beef show Pb and Cd below reporting limits across all 27 samples, consistent with compliance. The United States does not set specific statutory action levels for Pb or Cd in muscle meat for domestic market purposes, though FDA's Closer to Zero program establishes monitoring and action framework for selected food categories. No specific US regulatory limit for tAs in beef muscle exists in the current corpus. The EU Cd limit for bovine muscle meat of 0.050 mg/kg (50 ppb wet weight) is the operative regulatory cap for the EU market [[regulations/eu-2023-915-cadmium]]. Codex Alimentarius does not set a specific ML for Pb or Cd in bovine muscle meat as distinct from other meat categories [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 2 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/rabeey2025-bovine-hg-pb-cd-egypt|Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt]]<span class="hmi-ref-meta">Rabeey MA, Sabala RF, Zakaria AI, and Sallam KI · Scientific Reports · 2025 · [doi.org/10.1038/s41598-025-29927-x](https://doi.org/10.1038/s41598-025-29927-x)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/khalafalla2011-beef-carcasses-metals-egypt|Heavy metal residues in beef carcasses in Beni-Suef abattoir, Egypt]]<span class="hmi-ref-meta">Fathy A. Khalafalla, Fatma H. Ali, Fredi Schwagele, and Mariam A. Abd-El-Wahab · Veterinaria Italiana · 2011 · [www.izs.it](https://www.izs.it/vet_italiana/2011/47_3/351.pdf)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/mohamed2023-heavy-metals-beef-egypt|Detection and health risk assessment of toxic heavy metals in chilled and frozen meat collected from Sharkia province in Egypt]]<span class="hmi-ref-meta">Mohamed NH, Yahya G, El Bayoumi RM, Hussein MAM, Cavalu S, Dahshan H, et al. · 2023 · [doi.org/10.5455/OVJ.2023.v13.i12.21](https://doi.org/10.5455/OVJ.2023.v13.i12.21)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Beef, ground, pan-cooked (n=27); detectable concentrations for Cr, Ni, U, tAs |
| 2 | [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|Shaltout et al. 2020]]. *Prevalence of Some Chemical Hazards in Some Meat Products*, Concepts of Dairy & Veterinary Sciences (Lupine Publishers) 3(4):000166 | 2020 | Peer-reviewed | Pb and Cd in Egyptian minced meat and beef burger samples with regulatory-limit exceedance rates |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
