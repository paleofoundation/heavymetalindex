---
type: source
cite_key: sadiq-beauchemin-2021-multielemental-baby-rice-cereals
title: "Multi-elemental risk assessment of various baby rice cereals: some cause for concern?"
authors: ["Sadiq NW", "Beauchemin D"]
year: 2021
publication: "Canadian Journal of Chemistry 99(8):742-750"
doi: "10.1139/cjc-2020-0518"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
access_url: "https://doi.org/10.1139/cjc-2020-0518"
raw_path: "raw/external-fetch/Multi-elemental_risk_assessment_of_various_baby_ri.pdf"
metals: [iAs, tAs, Cr-III, Cr-VI, Cr-total, Se, Cd, Pb, Cu, Fe, Zn]
products: [baby-cereals-dry-rice-based]
matrices: [baby-rice-cereal]
jurisdictions: [CA]
sample_n: 3
sample_population: "Three popular brands (samples A, B, C) of baby rice cereal purchased from a local supermarket; A and B are the two most popular brands, C is a discounted brand. Online continuous leaching with artificial saliva, gastric juice (pH 1.5), and intestinal fluid (pH 6.5) at 37°C, with HPLC-ICPMS speciation of As, Cr, and Se species using AG7/AS7 IonPac columns. Total elements measured by ICPMS. Bio-accessible fraction = portion dissolved in intestinal tract simulant. Sample size n=3 brands; below 10-sample defensibility floor for absolute distribution math but adds primary speciation + bio-accessibility evidence."
acquired_via: "Karen externally fetched 2026-05-09 (raw/external-fetch/Multi-elemental_risk_assessment_of_various_baby_ri.pdf); CC BY 4.0 OA."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-09
---

# Sadiq & Beauchemin 2021 — Multi-element risk assessment of baby rice cereals (Canada)

## Overview

This A-tier peer-reviewed paper from Queen's University (Ontario, Canada) measures total concentrations and bio-accessible fractions of eight elements (As, Cr, Se, Cd, Pb, Cu, Fe, Zn) in three popular brands of baby rice cereal, with HPLC-ICPMS speciation of arsenic (eight species: As(III), MMA, DMA, As(V)), chromium (Cr(III), Cr(VI)), and selenium (Se(IV), Se(VI)). The bio-accessibility data is the principal contribution: **95-100% of As is bio-accessible**, 29-100% Cr, 62-100% Pb, 70-100% Se, 63-100% Cd, 36-100% Cu, 67-100% Fe, 70-100% Zn. Speciation finds **all bio-accessible As and Se to be in As(V) and Se(VI) forms** (the most bioavailable inorganic species) and **70-100% of Cr to be in the Cr(III) form** — consistent with the Hernandez 2019 + Saraiva 2021 finding that food matrix Cr is essentially Cr(III). The authors conclude that a varied diet, not just baby rice cereal, should be fed to infants to balance As exposure. Per the corrected row-fit rule, this routes directly to [[products/baby-cereals-dry-rice-based]] with author scope exact on matrix axis (baby rice cereal) and exact on format axis (dry baby cereal as sold).

## Key Numbers

### Bio-accessibility (intestinal-fluid extraction, % of total)

| Element | Bio-accessibility range across 3 brands |
| --- | --- |
| As | 95-100% |
| Cr | 29-100% |
| Pb | 62-100% |
| Se | 70-100% |
| Cd | 63-100% |
| Cu | 36-100% |
| Fe | 67-100% |
| Zn | 70-100% |

This data extends the de Paiva 2020 bio-accessibility framework (Al only) to seven additional elements. Critical implication: total-concentration thresholds for HMTc may overstate ingested-toxin dose for elements with <100% bio-accessibility, or correctly represent it for elements like As (95-100% bio-accessible).

### Speciation findings

- **Arsenic**: All bio-accessible As is in As(V) form; As(III) was not detected in bio-accessible fractions despite being present in residue. As(V) is the predominant inorganic arsenic species in baby rice cereal — consistent with [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants|Signes-Pastor 2016]] and FDA 2016 findings. iAs (= As(III) + As(V)) is the regulated species per FDA CTZ 100 ppb action level.
- **Chromium**: 70-100% of Cr is in the Cr(III) form across the three samples. The remaining 0-30% is Cr species not assignable to Cr(III) under the analytical conditions; the paper does not explicitly identify whether this fraction is Cr(VI) or unidentified/operational losses. Per + the [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez 2019]] and [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france|Saraiva 2021]] gold-standard SS-ID-HPLC-ICPMS findings, the residual non-Cr(III) fraction in Sadiq 2021 is likely method-related rather than actual Cr(VI) presence. Sadiq's HPLC-ICPMS without isotope dilution is subject to species interconversion artefacts during sample preparation that SS-ID would correct for. The Cr-VI cell remains "<LOD/LOQ with sensitive speciation" per the Hernandez/Saraiva primary evidence; Sadiq 2021 contributes Cr-III dominance confirmation but cannot definitively claim Cr-VI presence at sample level.
- **Selenium**: All bio-accessible Se is in Se(VI) form. Se is not an HMT&C analyte but is reported here for completeness.

### Total concentrations

The paper does not publish per-sample total concentration tables in the front matter; total values are referenced in Table 2 and discussed throughout. Sample-level extraction of total Pb, Cd, As (total), Cu, Fe, Zn for the three brands is feasible from the published tables (deferred in this initial ingest; flagged as a follow-up extraction task to integrate into the rice cereal CC candidate pool).

## Routing to HMTc subcategories

| Subcategory | Route | n_a_tier impact |
| --- | --- | --- |
| [[products/baby-cereals-dry-rice-based]] | Direct: 3 brand-level samples of baby rice cereal. | Adds n_a_tier=1 with bio-accessibility-data dimension. Particularly impactful as the primary bio-accessibility A-tier source for rice cereal across multiple HMT&C analytes. Cr-VI cell unchanged (Hernandez+Saraiva remain primary); Cr-III dominance confirmation. iAs cell adds As(V) speciation confirmation. |

## Geographic-context flag

Sadiq & Beauchemin 2021 covers Canadian-market baby rice cereal (Kingston, Ontario supermarkets). Combined with FDA 2016 (n=82 U.S.), Toledo 2024 (n=14 Brazilian rice-based), Gu 2020 (n=12 Australian), and Signes-Pastor 2016 (n=82 EU+US), the global coverage of rice-cereal iAs/As is now broad enough that the rice-cereal iAs cell at HMTc can begin computing a jurisdiction-mixed aggregate ("the standards workflow may compute a global or mixed-jurisdiction p90 with the required confidence target, currently 95% confidence, and then document jurisdiction composition").

## Methods (brief)

Total elements: ICPMS (Varian 820MS) with collision-reaction interface (CRI) on Ge*-mode at H₂ 65 mL/min; multi-element calibration. Online leaching: artificial saliva + gastric juice (pH 1.5, pepsin) + intestinal fluid (pH 6.5, pancreatin) at 37°C. Bio-accessible fraction = element concentration in intestinal-fluid leachate. Speciation: HPLC-ICPMS with AG7 guard + AS7 analytical anion exchange columns; eight As species + Cr(III)/Cr(VI) + Se(IV)/Se(VI) separated in 15 min. CRI optimized via response-surface multivariate analysis to balance sensitivity vs polyatomic interferences.

## Evidence Fitness

EF-3 limited evidence: n=3 brands, below the 10-sample defensibility floor. The bio-accessibility-data dimension is the principal contribution; at the n=3 level it provides directional evidence (rather than precise distributional values) for the bio-accessible fraction across analytes. Total-concentration values per brand are extractable from Table 2 (deferred extraction).

## Limitations

- n=3 brands is too small for sample-level distribution math; bio-accessibility ranges are observed across the 3 samples and should not be treated as population estimates.
- HPLC-ICPMS without isotope dilution; species interconversion artefacts during extraction are not corrected. The residual 0-30% non-Cr(III) Cr fraction is likely methodological, not real Cr(VI). [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france|Saraiva 2021]] SS-ID measurement supersedes for Cr-VI determination.
- Canadian-market focus; geographic applicability requires explicit jurisdiction labeling per Part 6.
- Cd, Pb, Cu, Fe, Zn measured but not speciated (not relevant for these elements at the speciation level).
- The paper doesn't report a ready-to-eat reconstitution basis; bio-accessibility values are based on the as-sold dry cereal extraction at infant-relevant pH conditions, which approximates but does not fully replicate post-reconstitution-with-formula consumption.

## Implications

Certification: Adds n_a_tier=1 with bio-accessibility data for the rice cereal subcategory across As, Cr, Se, Cd, Pb, Cu, Fe, Zn. The bio-accessibility dimension is critical for HMTc threshold-setting because total-concentration thresholds may overstate ingested-toxin dose where bio-accessibility is <100% (Cr 29-100%, Cu 36-100% notably variable). For As specifically, 95-100% bio-accessibility means total-iAs and bio-accessible-iAs converge, supporting the FDA CTZ 100 ppb iAs total threshold without bio-accessibility correction.

Speciation confirmations: As(V) predominates in bio-accessible fraction (consistent with Signes-Pastor 2016 and FDA 2016); Cr(III) dominates Cr speciation (consistent with Hernandez 2019 + Saraiva 2021 chemistry findings). The paper does not contradict the gold-standard Cr-VI <LOD/<LOQ finding from Hernandez+Saraiva.

Courses: Useful teaching example for bio-accessibility's modulating role in heavy-metal exposure assessment, and for the predominance of As(V) over As(III) in rice-product bio-accessible fractions.

App: Supports rice-cereal contamination_profile values for the eight measured elements, with bio-accessibility flag for downstream risk modeling.

Microbiome: No direct microbiome endpoint, though the artificial-gastrointestinal-fluid extraction approximates the in-vivo gut environment that the microbiome operates within.

## Provenance Notes

Karen externally fetched this paper on 2026-05-09 and dropped it at `raw/external-fetch/Multi-elemental_risk_assessment_of_various_baby_ri.pdf`. CC BY 4.0 license per the publisher (Canadian Science Publishing); the wiki cites the article record (DOI 10.1139/cjc-2020-0518).

## Wiki Pages Updated On Ingest

- [[products/baby-cereals-dry-rice-based]]
- [[products/infant-and-child-foods-master]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 3 sources added; 13 sections added; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 3 sources removed; 13 sections removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
