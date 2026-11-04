---
type: source
raw_handle: FM_12501148
cite_key: robinson2025-dried-fish-nutrients-africa
title: "Dried fish provide widespread access to critical nutrients across Africa"
authors: [Robinson JPW, O'Meara LO, Fiorella KJ, Byrd KA, Kjellevold M, Ansong RS, Mulanda Aura C, Mwirigi N, Allegretti A, Karkarye R, Lamioni TAC, Imami SA, Martin SE, Omukoto JO, Standar S, Gephart JA, Graham NJ, Thilsted SH, Hicks CC]
year: 2025
doi: 10.1073/pnas.2426844122
access_url: "https://doi.org/10.1073/pnas.2426844122"
no_doi_assigned: false
source_type: peer-reviewed
evidence_tier: B
license: "CC BY-NC-ND"
raw_path: "~/hmi-evidence-deposits/deposits/HMI-FILL-0001/10.1073_pnas.2426844122.pdf"
metals: [Pb, Cd, tHg]
ingredients: ["[[ingredients/salted-fish]]", "[[ingredients/fish]]"]
products: []
matrices: [dried-fish, smoked-fish, sun-dried-fish, powdered-fish]
jurisdictions: [CI, GH, NG, MW, TZ, UG, KE, SC, SL]
near_duplicates: []
sample_n: null
sample_population: "Nutrient and contaminant analysis of dried, smoked, sun-dried, fried and powdered small fish samples from East and West Africa and the Indian Ocean (19 species); specific sample counts in SI Appendix (not reproduced in main text); household survey data from 38,918 households in Cote d'Ivoire, Ghana, Nigeria, Malawi, Tanzania and Uganda"
wiki_doi: null
sampling_locations: [East Africa, West Africa, Indian Ocean]
sampling_year_range: [2010, 2024]
updated: 2026-11-04
ingest: HMI-FILL-0001
---

# Robinson et al. 2025: Nutrients and contaminants in dried small fish across Africa

## Overview

This PNAS paper combines nutrient composition analysis of 19 species of dried, smoked, sun-dried, fried, and powdered small fish from East and West Africa and the Indian Ocean with household survey data from approximately 144 million people in six African countries (Cote d'Ivoire, Ghana, Nigeria, Malawi, Tanzania, Uganda). Its primary focus is nutritional: demonstrating that small amounts of dried fish (9 g portions) contribute >15% of recommended nutrient intakes for multiple essential micronutrients for young children. Contaminant data are a secondary component, primarily presented comparatively in Figure 2B (enrichment or degradation relative to fresh fish) and referenced against EU regulatory limits for lead. Specific concentration values are reported primarily in the SI Appendix (not reprinted here), so this source page can only capture the main-text summary findings for contaminants.

The paper is evidence tier B for salted-fish contamination data because the main text does not provide species-specific tabulated metal concentrations that can be extracted and verified against primary tables; concentration data are deferred to the SI. It is included on this ingredient page for its contextual evidence on drying/processing effects on contaminants, its confirmation that some dried fish samples show elevated lead and mercury, and its broad framing of the dietary role of dried fish across sub-Saharan Africa.

## Key findings relevant to heavy metals

From the main text and Figure 2B:
- "High levels of iron, mercury and lead were detected in certain fish samples" (pg 2 of paper, Results summary).
- Figure 2B illustrates relative changes in contaminant concentrations in dried fish compared to fresh across drying methods (fried, smoked, sun-dried). Cadmium and lead show slight enrichment relative to fresh; mercury shows modest degradation relative to fresh for some processing forms.
- For lead, the paper compares dried fish concentrations to the EU maximum permissible level of 0.3 mg/kg wet weight for lead in fish muscle meat (citing EU Commission Regulation 2023/915). No PTWI is currently available for lead.
- The paper uses a 9 g reference portion (child's serving size) for nutrient and exposure assessment. At this portion size, the contaminant contribution is proportionally small.
- Species-specific concentration data are in SI Appendix, Table S1 and related supplementary tables (not available in the PDF analyzed here; require the online supplement).
- The study analyzed whole small fish as consumed, not muscle-only fractions, which may differ from regulatory sample preparation.

## Processing effects on contaminants (from Figure 2B description)

Figure 2B shows concentration in dried fish relative to fresh (mean across species and processing forms), accounting for water loss:
- Cadmium: slight enrichment in dried vs fresh (consistent with water removal concentrating residues)
- Lead: slight enrichment in dried vs fresh
- Mercury: modest degradation relative to fresh (consistent with partial volatilization of mercury compounds at smoking temperatures, as also observed in Morshdy et al. 2023 for herrings)

This is consistent with the Egyptian salted fish data from Morshdy et al. 2023, which found mercury not detected in smoked/salted herrings but present in other salted species.

## Nutritional context

Small amounts of dried fish (9 g) contribute meaningfully to multiple essential nutrient intakes for young children: calcium, iodine, iron, selenium, zinc, vitamins B12 and D are highlighted. Dried fish is consumed weekly by approximately one-third of households in the six surveyed countries, is more prevalent among poor households and those near marine coasts or inland waters. This nutritional value is a relevant counterweight to any contaminant risk assessment; the absolute mercury or lead exposure from a 9 g portion of dried fish is small relative to potential nutritional benefit for micronutrient-deficient populations.

## Methods (brief)

Nutrient and contaminant analyses: ICP-MS and other accredited methods at Institute of Marine Research, Bergen (IMR), consistent with the same laboratory used in Hasselberg et al. 2020. Household survey data: Living Standards Measurement Surveys (LSMS) for 38,918 households across six countries (2010-2019). Bayesian hierarchical models for prevalence estimates. Code and data at https://github.com/jpwrobinson/dried-fish (R package deposited May 2025).

## Evidence fitness

The main limitation for this ingredient page is that specific concentration data are in the SI Appendix (not extracted or verified here). The paper is a primary research article in PNAS with peer review and accredited analytical methods, meeting evidence tier A criteria for the analyses themselves. It is classified tier B here because the main-text extraction cannot confirm specific per-species metal concentrations against primary tables, which is required by HMI extraction protocol. Use this source primarily for processing-effect framing (Fig 2B direction), regulatory comparison context (EU 0.3 mg/kg for Pb), and the nutritional risk-benefit context for dried fish consumption in Africa. Cross-reference with hasselberg2020 for species-level Ghana data from the same laboratory.

## Related evidence

- [[ingredients/salted-fish]]
- [[ingredients/fish]]
- [[metals/lead]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[sources/hasselberg2020-processed-small-fish-ghana-metals]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| (pending) | 2026-11-04 | major | Source page created as part of evidence fill HMI-FILL-0001 |
<!-- END: hmi-page-history -->
