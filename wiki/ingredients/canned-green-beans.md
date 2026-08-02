---
title: "Canned green beans"
type: ingredient
commodity: canned-green-beans
label: "Canned green beans"
aliases: ["Green beans, canned, drained solids", "canned green beans"]
category: vegetable
tds_food:
  number: 122
  description: "Green beans, canned, drained solids"
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
    typical_ppb: [12, 108]
    p95_ppb: 114
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
updated: 2026-05-13
sources: 5
---

# Canned green beans

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 122, "Green beans, canned, drained solids." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned green beans (Phaseolus vulgaris) present a dual contamination pathway analogous to other canned legume vegetables: a modest intrinsic pathway from the bean pod and seed tissue, and a secondary tin migration pathway from the tinplate can. Green beans as a fresh crop exhibit low-to-moderate metal accumulation. Unlike root vegetables, beans do not directly mine metals from soil through epidermal root uptake at high rates; their Cd and Pb accumulation is predominantly via general root uptake and translocation, with concentrations typically in the single-digit to low tens of ppb range for Cd and near or below detection for Pb in non-contaminated soils. Nickel uptake is measurable, as the FDA TDS data show detectable Ni at up to 120 ppb in canned green bean drained solids [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. The can interior in contact with the bean brine undergoes Sn corrosion in unlacquered cans, particularly because legume brines are mildly acidic and can contain organic acids from the beans that accelerate tin release. Extended storage amplifies Sn migration significantly. The ATSDR tin toxicological profile documents this mechanism for canned vegetables broadly [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 12–108 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Green beans, canned, drained solids" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 120 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 1.4 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Ni in canned green bean drained solids in the range of 0 to 120 ppb (median 60 ppb, n=3) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Uranium was detected at a fixed value of 1.4 ppb across all three composites. Cd, Cr, Pb, tAs, and tHg were at or below the reporting limit in the TDS samples. The low TDS sample count (n=3 composites) limits statistical confidence in these estimates. Fresh green bean Cd and Pb concentrations in uncontaminated agricultural settings are generally below 10 ppb for Cd and below the reporting limit for Pb in the literature; contaminated-site studies show higher values. The ATSDR tin profile documents substantial Sn variation across canned vegetable products depending on can lining status, acidity, and storage time [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]], with unlacquered cans after extended storage potentially reaching tens of mg/kg.

## Processing effects

Blanching prior to canning leaches some water-soluble metals into the blanching water; the blanching water is discarded in industrial processing, removing that fraction from the final product. Thermal sterilization (retorting) does not reduce metal concentrations in bean tissue. After sealing, Sn migration from unlacquered tinplate can walls into the brine and bean tissue proceeds continuously, with the rate determined by temperature, acidity, and storage time. Draining and rinsing canned green beans before consumption removes the Sn and other metals present in the brine fraction; this is a practical consumer-level step but its quantitative effect on the bean-tissue fraction is limited.

## Ingredient-derivative risk

Canned green beans are used in casseroles, soups, and mixed-vegetable products. Their Ni contribution (relatively consistent at 60 ppb median in TDS data) will carry forward proportionally into blended products. Sn from the can represents the highest-variability metal and is the primary concern for formulations using canned beans as an ingredient at significant inclusion rates.

## Mitigation options

### Sourcing levers

Specifying lacquered-can sourcing is the most important lever for Sn. For the bean ingredient itself, sourcing from regions with low-Cd and low-Pb agricultural soils reduces intrinsic metal load. Supplier specifications for fresh or blanched beans with maximum metal limits per lot support this.

### Agronomic levers

Soil pH management (above 6.5) reduces Cd bioavailability in the rhizosphere and limits uptake into bean tissue. This is an upstream supply-chain intervention at the farm level, not directly controlled by the bean canners.

### Processing levers

Blanching and discarding blanching water removes a fraction of water-soluble metals from the bean tissue. Specifying lacquered cans eliminates the Sn migration source. Consumer-level draining and rinsing reduces exposure from the brine fraction.

### Formulation levers

Substituting fresh, frozen, or glass-packaged green beans for tinplate-canned green beans eliminates the Sn migration pathway. Frozen green beans carry no Sn risk and typically reflect the intrinsic fresh-commodity metal profile.

_No quantified data on the comparative Ni reduction from format substitution in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Sn measurement by ICP-MS in finished canned product, particularly from lots approaching end of shelf life, is the most relevant QC test. For Ni, which shows consistent TDS detection in this commodity, verification testing on incoming raw or finished product provides useful baseline confirmation.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are the key packaging specification. Storing finished cans at temperatures below 20°C and maintaining FIFO inventory rotation limits cumulative Sn migration. Lot-level tracking of storage duration and temperature history is particularly relevant for products with multi-year shelf life, where Sn accumulation in unlacquered cans can become substantial [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb) wet weight. For Pb in vegetables, the EU limit is 0.10 mg/kg (100 ppb) wet weight. For Cd in vegetables (excluding leafy vegetables and root vegetables), the EU limit is 0.050 mg/kg (50 ppb) wet weight. The Codex Alimentarius sets an international Sn limit of 250 mg/kg for canned solid foods. No FDA-specific action level for Sn in canned green beans is currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] applies to Pb in foods for young children and would encompass canned vegetable purees marketed as infant food.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Green beans, canned, drained solids (n=3); detectable concentrations for Ni, U |
| 2 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 3 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | Inorganic tin migration from tinplate can coatings; ATSDR toxicological reference for Sn speciation, MRLs, and canned-food Sn release mechanisms relevant to canned green beans |
| 5 | [[sources/efsa2005-tin-food-upper-intake\|EFSA 2005]]. *Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin*, EFSA Journal | 2005 | Regulatory opinion | EU/GB/FR Sn occurrence in EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered... |
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
