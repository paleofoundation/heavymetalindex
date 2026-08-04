---
type: source
cite_key: vega-jara2025-cocoa-cd-mitigation-amf-biochar
title: "Mitigation of Cadmium Accumulation in Cocoa Beans Using Arbuscular Mycorrhizal Fungi, Biochar and Callisia repens"
authors: [Vega-Jara L, Palacin Agüero J, Farfán Tucto S, Vangeli S, Márquez-Dávila K]
year: 2025
publication: "Folia Amazónica"
doi: "10.24841/fa.v34i2.800"
source_type: peer-reviewed
evidence_tier: B
license: "cc-by"
raw_path: raw/studies/vega-jara2025-cocoa-cd-mitigation-amf-biochar.pdf
sha256: 62a6629133c514a6580aad9a8d6bc8e6cbf812d9285af062b5f64956b3b8f3b4
access_date: 2026-05-12
access_url: "https://doi.org/10.24841/fa.v34i2.800"
metals: [Cd]
ingredients: ["[[ingredients/cocoa]]"]
products: []
matrices: [cacao-beans, soil]
jurisdictions: [PE]
sample_n: 90
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Vega-Jara et al. 2025 — Mitigation of cadmium accumulation in cocoa beans using AMF, biochar, and Callisia repens

## Overview

This field experiment tested three biological and organic mitigation strategies for reducing Cd uptake in cocoa beans in Huánuco, Peru — a region where soil Cd is elevated (0.78 mg/kg total) and baseline bean Cd (1.07 mg/kg) substantially exceeds the EU maximum permissible level (0.8 mg/kg for chocolate with ≥50% cocoa solids). Arbuscular mycorrhizal fungi (AMF) applied alone reduced bean Cd concentration by 40.43%; Callisia repens (a herbaceous competitor plant) applied alone reduced bean Cd by 30.85%; their combination achieved a 24.47% reduction; biochar at 1% and 2% w/w did not produce statistically significant effects. Critically, Cd concentrations still exceeded EU limits under all treatment conditions after six months, indicating that these strategies alone cannot bring a highly contaminated site into compliance within a single growing season.

## Key numbers

Site soil Cd: 0.78 mg/kg total (Huánuco region, 671 m elevation, 9°12'25" S, 75°56'17" W)
Baseline bean Cd: 1.07 mg/kg (control, genotype CCN51)

Bean Cd under each treatment (mg/kg, six months post-establishment):
- Control: 1.07 (baseline)
- AMF alone: 0.56 (40.43% reduction, p < 0.01)
- C. repens alone: 0.74 (30.85% reduction, p < 0.01)
- AMF + C. repens: 0.81 (24.47% reduction, p < 0.01)
- Biochar 1%: not significantly different from control
- Biochar 2%: not significantly different from control

Soil available Cd (EDTA extraction, 0.19–0.21 mg/kg): AMF, C. repens, combination, and 2% biochar all reduced available Cd relative to control; total soil Cd unchanged across all treatments (p = 0.19).

EU limit reference: 0.8 mg/kg Cd for chocolate products containing ≥50% cocoa solids (European Commission Regulation No 488/2014)

## Methods (brief)

Randomised complete block design, 3 blocks, 30 trees per block, 90 trees total (CCN51 genotype, 8 years old). Cd extracted from beans using HNO₃/HClO₄ digestion; quantified by ICP-OES. Available soil Cd by 0.05M EDTA extraction at pH 7.0; measured by AES. Lab accredited by INACAL, Peru. Statistical analysis in R Studio 4.0.2; ANOVA + LSD test (α = 0.05).

## Limitations

Single site, single growing season (6 months), single genotype (CCN51). No baseline soil or bean Cd values were available for individual plots before treatment establishment; initial Cd content differences among plots cannot be ruled out. The study is conducted on soil with pre-existing high Cd; applicability to lower-Cd sites is not assessed. Biochar results (non-significant) may reflect insufficient exposure time or quantity.

## Implications

- Certification: Confirms that even 40% Cd reduction from AMF does not bring a contaminated Peruvian site within EU regulatory limits. This is evidence that supply-chain screening (excluding high-Cd-soil origins) is more reliable than field mitigation alone for achieving ≤0.8 mg/kg Cd thresholds.
- Courses: Useful case study for the "mitigation options" module on cocoa Cd — demonstrates what biological strategies can and cannot achieve in a single season. Biochar result is notable: widely recommended but here not significant.
- App: Does not change baseline contamination_profile values for cocoa; this is a mitigation study. Flag for [[mitigation/cocoa-cadmium]] page.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[ingredients/cocoa]]
- [[mitigation/cocoa-cadmium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
