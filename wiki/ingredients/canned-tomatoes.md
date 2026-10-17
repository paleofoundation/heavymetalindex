---
title: "Canned tomatoes"
dek: "Tomato products preserved in cans are covered through metal occurrence and the interaction between acidity, tinplate packaging and storage."
rail_highlights:
  - label: Exposure
    text: Acidic tomatoes promote tin release from unlacquered cans
    source: sources/atsdr2005-tin-toxicological-profile
    source_label: ATSDR profile
type: ingredient
commodity: canned-tomatoes
label: "Canned tomatoes"
aliases: [canned tomatoes]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 14.7]
    p95_ppb: 32.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 14]
    p95_ppb: 21
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: []
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
  tHg:
    status: populated
    typical_ppb: [0, 0.9]
    p95_ppb: 1
    confidence: low
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
    typical_ppb: [0, 2702]
    p95_ppb: 3037
    confidence: low
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
    typical_ppb: [0, 2439]
    p95_ppb: 3949
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
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
updated: 2026-05-13
sources: 7
hero_image: /static/heroes/tin-canned-tomatoes-juice.webp
hero_image_alt: "Canned tomatoes and fruit juice illustrating canned tomatoes ingredient context."
---

# Canned tomatoes

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Canned tomatoes present a metal risk profile dominated by the interaction between tomato acidity and tinplate packaging rather than by high intrinsic accumulation in the tomato fruit itself. Fresh tomatoes are among the lower-accumulating common vegetables for Pb and Cd: the fruit tissue is physically separated from soil contact, the tomato plant does not prioritize metal translocation to fruit, and Pb in particular shows limited phloem mobility, reducing its accumulation in developing fruit even when root-zone concentrations are elevated. Cd accumulation in tomato fruit is detectable but generally low relative to leafy vegetables or root crops. However, tomato sauce and crushed tomatoes are characteristically acidic (pH 3.5 to 4.5), and this acidity creates the dominant contamination pathway in canned form. When acidic tomato product contacts unlacquered tinplate can walls, electrochemical corrosion releases inorganic tin ions into the product. This reaction proceeds continuously in storage, accumulating Sn in the tomato matrix over the product's shelf life. Studies documented in the canned-food literature confirm that tomato products in unlacquered cans reach some of the highest Sn concentrations observed in commercially sold canned foods [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]], [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]]. FSA/Fera included canned tomatoes in their UK dietary survey [[sources/fsa2016-infant-food-formula-metals-survey]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–14.7 | low | — |
| Cd | n=1 | 0–14 | low | — |
| iAs | Source context | Not quantified | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.9 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–2702 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=2 | 0–2439 | low | [[sources/atsdr2005-tin-toxicological-profile\|1]], [[sources/schafer1984-tin-toxic-heavy-metal-review\|2]] |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey measured canned tomatoes as part of a non-infant food composite study in the UK [[sources/fsa2016-infant-food-formula-metals-survey]]; exact tabulated values from Table 6 remain in progress pending structured extraction. For intrinsic tomato-fruit metals, the general literature finds Pb typically below 10 ppb and Cd typically below 20 ppb on a fresh-weight basis in non-contaminated growing conditions, with iAs, tHg, and Al also at low levels. The Sn content is the dominant variable and is determined by can type rather than tomato variety or growing region. Published European surveillance and the ATSDR tin profile document Sn concentrations in canned tomatoes and tomato products in unlacquered cans ranging from the tens to hundreds of mg/kg depending on storage time and temperature [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]]. Lacquered cans reduce Sn to trace levels. Geographic variation in tomato fruit metals follows soil and irrigation-water quality in the production region (Italy, Spain, California, Turkey are major commercial origins); this variation is secondary to the can-type effect on Sn.

## Processing effects

Tomato processing for canning (crushing, heating, acidification, sterilization) does not increase intrinsic tomato-metal concentrations, though it does concentrate metals modestly relative to whole fresh tomatoes on a mass-per-volume basis when water is reduced for purees or pastes. More concentrated tomato products (paste, passata at 6:1 or higher reduction) carry proportionally higher intrinsic Cd and Pb on a per-gram basis. The primary processing effect is the initiation and continuation of Sn migration once the acidic tomato matrix contacts the can wall during and after retorting. Highly reduced tomato products (paste) in contact with unlacquered cans may accumulate Sn faster on a per-gram basis because the lower water content may concentrate the dissolved Sn relative to the food matrix.

## Ingredient-derivative risk

Canned tomatoes are a ubiquitous ingredient in retail and food service sauces, soups, pizzas, stews, and condiments. When canned tomatoes are used as an ingredient in a further-processed product (for example, pizza sauce packaged in its own can or jar), the Sn already migrated into the tomatoes is carried forward, and any additional acidic-container contact in the finished product packaging adds further Sn. Products with long thermal processing times or high tomato-fraction inclusion are particularly susceptible. Tomato paste, a concentrate derived from fresh or canned tomatoes, carries a higher intrinsic Cd and Pb per gram than whole canned tomatoes, and its acidity is even more aggressive toward unlacquered tin.

## Mitigation options

### Sourcing levers

Specifying lacquered-can sourcing from all tomato product suppliers is the single highest-impact lever, eliminating the dominant Sn migration pathway. For intrinsic tomato metals, sourcing from agricultural regions with documented low soil Pb and Cd and clean irrigation water (non-wastewater) reduces the baseline; Cd and Pb in fresh tomatoes are typically low and this lever is of secondary importance relative to can specification.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Fresh tomato Pb and Cd are already low in standard agricultural settings; agronomic interventions provide marginal additional benefit relative to can-type specification.

### Processing levers

Specifying lacquered cans is the processing-system lever. For tomato paste and puree, processing that minimizes contact time between reduced tomato and unlacquered metal surfaces (including processing equipment) reduces incidental metal contamination from stainless steel equipment surfaces, where acidic tomato can leach Ni and Cr from equipment alloys during prolonged high-temperature contact.

### Formulation levers

Substituting glass-jarred or aseptic-packaged (Tetra Pak or similar) tomatoes for tinplate-canned tomatoes eliminates the Sn migration source entirely. These packaging alternatives are commercially standard and widely available; the substitution is a formulation decision without product-performance trade-offs for most applications.

### Testing and QC levers

ICP-MS measurement of Sn in finished canned product, stratified by can type (lacquered versus unlacquered) and by storage duration, provides the most useful QC data. For products using tomato as a major ingredient, testing the tomato input for Cd and Pb provides baseline documentation even if values are expected to be low.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are the critical packaging specification for this commodity given the high acidity of tomato products. The benefit of lacquering is greater here than for most other canned foods because of the pH-driven acceleration of tin corrosion in tomato matrices. Storage at cool temperatures (below 20°C) and strict shelf-life management reduce cumulative Sn accumulation in unlacquered-can stock. FIFO inventory rotation limits the proportion of product approaching maximum Sn levels [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb) wet weight. For Pb in vegetables (including tomatoes), the EU limit is 0.10 mg/kg (100 ppb) wet weight. For Cd in vegetables other than leafy or root vegetables, the EU limit is 0.050 mg/kg (50 ppb) wet weight. The Codex Alimentarius general standard for contaminants sets a Sn limit of 250 mg/kg for canned solid foods and 150 mg/kg for canned tomatoes specifically in some national applications. No FDA action level for Sn in canned tomatoes is currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] addresses Pb in foods for young children rather than Sn.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**iAs.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/atsdr2005-tin-toxicological-profile|Toxicological Profile for Tin and Tin Compounds]]<span class="hmi-ref-meta">Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry · U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry · 2005 · [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/schafer1984-tin-toxic-heavy-metal-review|Tin — A Toxic Heavy Metal? A Review of the Literature]]<span class="hmi-ref-meta">S. G. Schafer and U. Femfert · Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 · 1984 · [doi.org/10.1016/0273-2300(84)90006-0](https://doi.org/10.1016/0273-2300(84)90006-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/belabid2025-canned-tomato-pineapple-trace-elements\|Chahinez et al. 2025]]. *Evaluation of trace element contents in canned tomato paste and canned pineapple marketed in Algeria*, Research Square preprint | 2025 | Preprint | DZ Fe, Zn, Cu, Cd, Pb occurrence in Canned tomato paste and canned pineapple marketed in Algiers, Algeria (n=52) |
| 2 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 3 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | Inorganic tin migration from tinplate can coatings; ATSDR toxicological reference for Sn speciation, MRLs, and canned-food Sn release mechanisms; acidic tomato matrix elevates Sn release |
| 5 | [[sources/efsa2005-tin-food-upper-intake\|EFSA 2005]]. *Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin*, EFSA Journal | 2005 | Regulatory opinion | EU/GB/FR Sn occurrence in EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered... |
| 6 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
| 7 | [[sources/schafer1984-tin-toxic-heavy-metal-review\|Schafer et al. 1984]]. *Tin — A Toxic Heavy Metal? A Review of the Literature*, Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 | 1984 | Peer-reviewed | European regulatory context for Sn in canned foods; establishes species-distinction principle (inorganic vs organotin) and canned-tomato Sn release as pH-dependent driver |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 1 source removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
