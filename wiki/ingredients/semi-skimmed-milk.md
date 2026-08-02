---
title: "Semi-skimmed milk"
type: ingredient
commodity: semi-skimmed-milk
label: "Semi-skimmed milk"
aliases: [semi skimmed milk]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13.8]
    p95_ppb: 23.3
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    speciation: no-speciated-iAs-measurement
  tHg:
    status: populated
    typical_ppb: [0, 0.5]
    p95_ppb: 1
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1437]
    p95_ppb: 1830
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 23.5]
    p95_ppb: 31.3
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
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
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 1
---

# Semi-skimmed milk

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 5/10 HMTc analytes, total n=5 | common tier expects total n>=15; have 5 |
| D2 Regional coverage | below-tier | 2 jurisdictions, top FR 100% | over-concentrated: FR supplies 100% of sources |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 7 citations, 0 orphan, 7 foreign | 7 foreign citation(s) not naming semi-skimmed-milk: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020, starska2011-noxious-elements-milk-products-poland |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tHg, Al, Sn; pairing 0 paired, 5 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Semi-skimmed milk is fluid cow milk from which a portion of the milk fat has been removed, typically to achieve a fat content of approximately 1.5 to 1.8 percent by weight in European commercial standards. Its heavy metal profile is essentially identical to that of whole milk and fully skimmed milk: the fat reduction step removes fat-soluble components but does not alter the concentration of Pb, Cd, Hg, or other regulated heavy metals, which are distributed primarily in the aqueous and protein fractions of milk rather than in the fat. Dairy is a low-risk matrix for heavy metals because the mammary gland presents a substantial physiological barrier to metal transfer from blood into milk. Most absorbed metals in the lactating cow are excreted through urine and feces rather than milk, and blood-to-milk transfer efficiencies for Pb, Cd, and Hg are well below 1 percent under typical dietary exposure conditions. The small amounts of heavy metals present in milk reflect the cow's cumulative environmental and dietary exposure, which in commercially managed herds under regulated feed and veterinary oversight is generally low. Atmospheric contamination of farm environments, mineral composition of feed supplements, and water quality at the farm are the dominant drivers of any detectable metal levels in fluid milk. For the specific metal-content data available in the current corpus, see [[ingredients/reduced-fat-milk]] and [[ingredients/skim-milk]], which carry TDS data from comparable dairy matrices.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–13.8 | medium | — |
| Cd | n=1 | 0–1 | high | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.5 | high | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1437 | high | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–23.5 | high | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The inorganic-arsenic cell was reviewed on 2026-06-11 on a fluid semi-skimmed-milk wet-weight basis, the form in which the ingredient enters the supply chain. Inorganic arsenic is held distinct from total arsenic and is never derived from it by a fixed ratio; only a speciated measurement can populate the inorganic-arsenic cell.

Inorganic arsenic is recorded as a reviewed data gap. The earlier profile reported inorganic arsenic at a typical and 95th-percentile value of zero at high confidence. That figure was not supported by any speciated measurement of this commodity: no fluid-milk inorganic-arsenic value exists in the corpus, and every milk arsenic measurement available is total arsenic by hydride-generation or ICP-MS without inorganic/organic fractionation. The FDA Total Diet Study FY2018-FY2020 fluid-milk composites measure total arsenic only and report it below the 1 µg/kg reporting limit across all 27 samples for whole, reduced-fat, and skim milk ([[sources/fda2022-tds-elements-fy2018-fy2020]]); that is a left-censored total-arsenic result, not a measured inorganic-arsenic zero. The clean-market fluid-milk occurrence surveys are likewise total-arsenic only and state explicitly that their arsenic values must not be routed as inorganic arsenic: the Polish national monitoring measures arsenic by hydride-generation AAS without speciation ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]]), the Bangladesh raw-and-pasteurized survey records "total arsenic; no inorganic arsenic speciation" ([[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Hasan et al. 2022]]), the Egyptian retail-milk survey reports "total arsenic only, no inorganic/organic separation" ([[sources/salaheldin2025-multimatrix-foods-egypt|Salahel din et al. 2025]]), the Polish powdered-formula survey reports arsenic below detection without speciation ([[sources/dobrzynska2025-milk-formulae-elemental-composition|Dobrzyńska et al. 2025]]), and the Spanish ICP-MS retail-milk survey, which enumerates semi-skimmed cow milk in its product frame, does not measure inorganic arsenic as a target analyte ([[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]]). Because no speciated inorganic-arsenic value exists for fluid milk, the honest state for this cell is a reviewed data gap rather than a measured zero, following the uranium precedent on [[ingredients/rice]] and the inorganic-arsenic treatment on [[ingredients/whole-milk]]. The cell will populate when a speciated fluid-milk inorganic-arsenic measurement is ingested.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Metal concentrations in semi-skimmed milk are uniformly low across production regions. European regulatory monitoring under EU Regulation (EC) No 1881/2006 consistently finds Pb and Cd in fluid milk at or below the analytical detection limit in routine surveillance sampling. The FSA/Fera FS102048 survey, the primary source on this page, measured semi-skimmed milk as a non-infant food composite; values remain in progress pending structured extraction of Table 6 data [[sources/fsa2016-infant-food-formula-metals-survey]]. US TDS data for comparable fluid dairy matrices (see [[ingredients/reduced-fat-milk]] and [[ingredients/skim-milk]]) show essentially zero detectable metals across 27 composite samples for most analytes. Organic versus conventional production does not produce meaningful differences in fluid milk metal content. Regional variation attributable to industrial contamination near dairy farms is possible but documented only in specific case studies, not as a systematic pattern across commercial supply chains.

## Processing effects

The fat reduction step in semi-skimmed milk production is centrifugal separation. As with other dairy fat-reduction operations, this step does not alter the metal content of the resulting fluid product because Pb, Cd, and Hg are not fat-soluble and remain in the skimmed milk fraction. Pasteurization (HTST, 72 degrees Celsius for 15 seconds, or UHT, 135 to 140 degrees Celsius for 2 to 5 seconds) does not decompose or remove heavy metals. Homogenization, which reduces fat globule size and prevents creaming, has no effect on metal content. The processing train for semi-skimmed milk introduces no metal from standard stainless steel processing equipment under normal sanitary conditions.

## Ingredient-derivative risk

Semi-skimmed milk is used directly as a beverage and as an ingredient in dairy products, sauces, baked goods, and infant formula. Its metal contribution in all these applications is negligible given the near-zero baseline. In infant formula, where semi-skimmed or skim milk powder may be used as a protein and mineral source, the dairy fraction does not represent the primary metal risk; other components such as vegetable oils, carbohydrate sources, and mineral premixes are the more significant contributors. Dried semi-skimmed milk (spray-dried or roller-dried) concentrates metals by a factor proportional to water removal, but given the near-zero baseline in fluid milk, the resulting dried product remains low-risk even after concentration.

## Mitigation options

### Sourcing levers

Given the inherently low metal content of commercial semi-skimmed milk, standard dairy supply chain oversight is sufficient for most applications. For infant formula manufacturers using semi-skimmed milk powder as an ingredient, supplier qualification should include routine metal surveillance testing at or below EU dairy maximum levels as a confirmation step.

### Agronomic levers

_No quantified data on agronomic levers specific to reducing metals in cow milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard fat reduction and pasteurization operations do not introduce metals and require no modification for metal-reduction purposes.

### Formulation levers

_No quantified data on formulation levers for semi-skimmed milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level surveillance for Pb and Cd in semi-skimmed milk is standard under EU monitoring programs and is implemented by major dairy processors as part of quality management systems. Given the consistently near-zero values in the literature, this commodity is low-priority for intensive independent lot-level testing in most supply-chain contexts.

### Packaging and storage levers

Standard HDPE, glass, or Tetra Pak packaging does not contribute metals to semi-skimmed milk. Refrigerated storage at the intended shelf life does not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the maximum Pb level for raw milk, heat-treated milk, and milk-based products is 0.020 mg/kg (20 ppb) wet weight. The corresponding Cd maximum level for milk and milk products is 0.020 mg/kg (20 ppb) wet weight. Semi-skimmed milk falls squarely within the dairy product matrix for which these limits apply. The FDA does not publish a specific action level for Pb or Cd in fluid milk; the general surveillance framework under 21 CFR applies, and fluid dairy is not among the high-priority categories identified in the Closer to Zero program (see [[regulations/fda-closer-to-zero]]) for Pb reduction efforts targeting infant and young child foods.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Review</span>
4. [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks]]<span class="hmi-ref-meta">Hasan GMM A, Kabir MH, and Miah MAS · Food Research · 2022 · [doi.org/10.26656/fr.2017.6(1).191](https://doi.org/10.26656/fr.2017.6(1).191)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/salaheldin2025-multimatrix-foods-egypt|Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety]]<span class="hmi-ref-meta">Salahel din K, Abdalbasit Y, Abbady A, and Saad N · Scientific Reports · 2025 · [doi.org/10.1038/s41598-025-27798-w](https://doi.org/10.1038/s41598-025-27798-w)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/dobrzynska2025-milk-formulae-elemental-composition|Analysis of the Elemental Composition of Milk Formulae: Impact on the Nutritional Status of Infants From Birth to 1 Year of Age]]<span class="hmi-ref-meta">Małgorzata Dobrzyńska, Zofia Wojciechowska, Karol Jakubowski, Hanna Markowska, Juliusz Przysławski, Przemysław Niedzielski, et al. · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-025-04687-x](https://doi.org/10.1007/s12011-025-04687-x)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta\|Saraiva et al. 2021]]. *Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products*, Talanta 222 (2021) 121538 | 2021 | Peer-reviewed | FR/DK Cr, Cr-VI occurrence in Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL... (n=3) |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
| [ce0ecb2](https://github.com/paleofoundation/heavymetalindex/commit/ce0ecb2) | 2026-05-16 | sync source counts from live source-page references |
| [835f4fc](https://github.com/paleofoundation/heavymetalindex/commit/835f4fc) | 2026-05-13 | profiles: populate contamination_profile values on 18 ingredient pages (batch 6/7) |
| [e01e534](https://github.com/paleofoundation/heavymetalindex/commit/e01e534) | 2026-05-13 | pages: draft missing mandatory sections on 29 ingredient pages (potato-chips → yogurt) |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [ce3e07c7b](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c7b) | 2026-05-28 | major | 1 source removed; 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
