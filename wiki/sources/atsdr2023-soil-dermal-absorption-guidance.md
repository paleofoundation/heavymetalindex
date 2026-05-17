---
type: source
raw_handle: MFK_atsdr-exposure-dose-guidance-soil-sediment-dermal
cite_key: atsdr2023-soil-dermal-absorption-guidance
title: "Exposure Dose Guidance for Soil/Sediment Dermal Absorption (Version 3)"
authors: [Agency for Toxic Substances and Disease Registry (ATSDR)]
year: 2023
publication: "ATSDR / U.S. Department of Health and Human Services - Public Health Service"
doi: null
no_doi_assigned: true
source_type: gov-report
evidence_tier: A
license: "Public domain (US government work)"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/ATSDR_Exposure_Dose_Guidance_for_Soil_Sediment_Dermal_Absorption.pdf"
metals: [As, Cd, Pb]
ingredients: []
products: []
matrices: [soil, sediment]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Regulatory exposure-assessment guidance; no original sampling. Default ABSd values aggregated from EPA RAGS Part E (2004) and EPA Exposure Factors Handbook (2011)"
updated: 2026-05-17
---

# ATSDR 2023 — Exposure Dose Guidance for Soil/Sediment Dermal Absorption (V3)

This July 2023 ATSDR exposure-dose guidance (EDG) supersedes the 2005 Public Health Assessment Guidance Manual dermal section and aligns ATSDR's dermal-route methodology with EPA RAGS Part E (2004) and the EPA Exposure Factors Handbook (2011). It provides health assessors with the equations, default skin surface areas by age, soil adherence factors by activity, and chemical-specific dermal absorption fractions (ABSd) for calculating dermally absorbed dose from contaminated soil and sediment. It is the canonical US federal source for the dermal-absorption fractions used to model heavy-metal exposure from soil contact in children.

## Key numbers

- Default soil adherence factors (AF, mg/cm²-event): 0.2 for child receptors, 0.07 for adult receptors. Child default based on 95th percentile soil AF for children at daycare and 50th percentile for children playing in wet soil; adult default based on 50th percentile for gardeners (p. 5).
- Activity-specific weighted AF for children (Table 7, mg/cm²): indoor children (1-13 yr) geometric mean 0.01, 95th P 0.06; daycare children (1-6.5 yr) 0.04 / 0.3; children playing dry soil (8-12 yr) 0.04 / 0.4; children playing wet soil (8-12 yr) 0.2 / 3.3; children-in-mud (9-14 yr) 21 / 231 (not recommended for quantitative use due to overestimation) (p. 17).
- Recommended Dermal Absorption Fractions (ABSd) from Table 8 (p. 18): Arsenic 0.03; Cadmium 0.001; default for Inorganic Compounds 0.01 (used when chemical-specific value unavailable); other listed: Chlordane 0.04; DDT 0.03; TCDD/dioxins 0.03 (or 0.001 if soil OC >10%); benzo(a)pyrene/PAHs 0.13; Aroclors 1254/1242 and other PCBs 0.14; pentachlorophenol 0.25; SVOCs 0.1; VOCs 0.0005-0.03 by vapor pressure.
- Default skin surface areas by age (Table 3, infant Combined SA cm²; head + hands + forearms + lower legs + feet): Birth-<1 mo 1,290 cm² (BW 4.8 kg); 1-3 mo 1,455 cm² (5.9 kg); 3-6 mo 1,686 cm² (7.4 kg); 6-12 mo 2,001 cm² (9.2 kg); 1-2 yr 2,299 cm² (11.4 kg); 2-3 yr 2,182 cm² (13.5 kg); 3-<5 yr 2,755 cm² (17.2 kg); 5-<6 yr 3,123 cm² (20.6 kg); 6-<11 yr 3,824 cm² (31.8 kg); adult 18-67 yr 6,030 cm² (80.6 kg) (p. 14).
- Worked example (Appendix B) for Aroclor 1254 at 40 mg/kg soil EPC, residential exposure (p. 19-20). Same equation applies to metals using their ABSd values; for Pb, the guidance directs users to the lead-specific IEUBK/LeadSpread models rather than this dermal-only EDG.
- Exposure Dose Equation (p. 4): DAD = (Csoil/sediment × CF × AF × ABSd × SA × EF) / BW where DAD is dermal absorbed dose (mg/kg-day), Csoil/sediment is concentration (mg/kg), CF = 10⁻⁶ kg/mg, AF = adherence factor (mg/cm²-event), ABSd = dermal absorption fraction, SA = skin surface area (cm²), EF = exposure factor (dimensionless), BW = body weight (kg).
- Cancer-risk averaging: CTE 12 yr residential occupancy (or 5 yr occupational tenure); RME 33 yr residential occupancy (or 95th percentile 20 yr occupational tenure) (p. 3-4).
- ABSd defaults applied with default soil AF and age-specific SA from Tables 2/4/5/6 (pp. 13-16).

## Methods (brief)

ATSDR-issued guidance document; no primary measurement. The ABSd values in Table 8 are sourced from EPA RAGS Part E Exhibit 3-4 (EPA 2004) and supplemental Risk Assessment Information System (RAIS) entries. Default skin surface areas derived by linear regression through EFH 2011 Table 7-2 data plotted against average age in months. Adherence factors taken from EPA 2004 Exhibit 3-3. The guidance is explicit that ABSd = 0.03 for arsenic and 0.001 for cadmium are EPA RAGS Part E recommended values (Section "Exposure Parameters for Dermal Contact"; Table 8). The document does not perform new dermal-absorption experiments; it codifies the default values for use in public-health assessments. Limitations stated: lead is excluded from Table 8 because EPA recommends using lead-specific models (IEUBK for children; ALM/LeadSpread for adults); the default for inorganic compounds (ABSd = 0.01) is conservative and should be replaced with chemical-specific data when available; soil organic content modifies the dioxin ABSd from 0.03 to 0.001 when OC >10%.

## Implications

- Certification (HMTc): Foundational regulatory anchor for any soil-derived dermal-pathway exposure modeling underlying HMT&C threshold work that needs to defend against "children play in dirt and get exposed dermally" arguments. ABSd = 0.03 (As) and 0.001 (Cd) are the federal defaults; threshold work that uses these values should cite this document. Pb modeling defers to IEUBK; this guidance flags that.
- Courses: Foundational regulatory-affairs and exposure-science teaching reference for explaining how dermal-route exposure differs from oral and inhalation, and why dermal contributions to metal exposure are typically a small fraction of total intake in standard scenarios.
- App: Not directly relevant to ingredient contamination_profile data. The age-specific body-weight defaults (4.8, 5.9, 7.4, 9.2, 11.4, 13.5, 17.2, 20.6, 31.8 kg) are useful infrastructure for any per-serving-per-bodyweight exposure calculation in the app.

## Wiki pages this source may touch

- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[regulations/atsdr-cadmium-mrls]]

## Verification notes

- This is a guidance document about soil/sediment dermal absorption, included in the children's-personal-care batch as a methodological reference for dermal-route exposure modeling. It does not contain occurrence data on personal-care products.
- ABSd values in Table 8 are non-substitutable per chemical; "Arsenic 0.03" applies to the regulatory default arsenic ABSd (RAGS Part E uses iAs surrogacy for the soil pathway, but the table label is "Arsenic" - no speciation distinction is made in the document itself). Flagging for Part 10 review whether this should be coded as iAs, tAs, or unspeciated As.
- Pb is intentionally NOT in Table 8. The frontmatter lists Pb because the document discusses lead in the inorganic-compounds default and IEUBK-redirect context.
