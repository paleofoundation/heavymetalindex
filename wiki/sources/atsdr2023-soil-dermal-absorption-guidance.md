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
metals: [As, Cd, Pb, Hg, MeHg, Ni, Cr, Cr-VI, Sb, Ba, Cu, Mn, Se, Ag, Tl, V, Zn, Be]
ingredients: []
products: []
matrices: [soil, sediment]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Regulatory exposure-assessment guidance; no original sampling. Default ABSd and adherence-factor values from EPA RAGS Part E (2004); skin-surface values from EPA Exposure Factors Handbook (2011)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# ATSDR 2023 — Exposure Dose Guidance for Soil/Sediment Dermal Absorption (V3)

## Overview

This July 2023 ATSDR exposure-dose guidance (EDG) supersedes the dermal section of the 2005 Public Health Assessment Guidance Manual (now itself superseded by the 2022 PHAGM) and aligns ATSDR's dermal-route methodology with EPA RAGS Part E (2004) and the EPA Exposure Factors Handbook (2011). It provides health assessors with the equations, default skin surface areas by age, soil adherence factors by activity, chemical-specific dermal absorption fractions (ABSd) for soil/sediment contact, and chemical-specific gastrointestinal absorption factors (ABS_GI) used to convert dermally absorbed doses into administered-dose equivalents that can be compared to oral MRLs and RfDs. It is the canonical US federal source for the default dermal-absorption and oral-absorption fractions used to model heavy-metal exposure from soil contact in children and adults.

## Key numbers

- Exposure Dose Equation (p. 4): DAD = (C_soil/sediment × CF × AF × ABSd × SA × EF) / BW, where DAD is dermal absorbed dose (mg/kg-day), C_soil/sediment is concentration (mg/kg), CF = 10⁻⁶ kg/mg, AF = adherence factor (mg/cm²-event), ABSd = dermal absorption fraction (unitless), SA = skin surface area (cm²), EF = exposure factor (dimensionless), BW = body weight (kg). Converted to administered dose by dividing by ABS_GI (p. 6): Dermal Dose_administered = DAD / ABS_GI.
- Default soil adherence factors (AF, mg/cm²-event): 0.2 for child receptors, 0.07 for adult receptors. Child default is the 95th percentile soil AF for children at a daycare center combined with the 50th percentile for children playing in wet soil; adult default is the 50th percentile for gardeners (p. 5).
- Activity-specific weighted AF for children, Table 7 (mg/cm², geometric mean / 95th percentile): indoor children (1-13 yr) 0.01 / 0.06; daycare children playing indoors and outdoors (1-6.5 yr) 0.04 / 0.3; children playing in dry soil (8-12 yr) 0.04 / 0.4; children playing in wet soil (8-12 yr) 0.2 / 3.3; children-in-mud (9-14 yr) 21 / 231 (footnote 5: not recommended for quantitative dermal assessment because the values significantly overestimate dermal risk) (p. 17).
- Recommended Dermal Absorption Fractions (ABSd) from Table 8 (p. 18): Arsenic 0.03; Cadmium 0.001; Chlordane 0.04; 2,4-Dichlorophenoxyacetic acid 0.05; DDT 0.03; TCDD and other dioxins 0.03 (0.001 if soil organic content >10%); Lindane 0.04; benzo(a)pyrene and other PAHs 0.13; Aroclors 1254/1242 and other PCBs 0.14; Pentachlorophenol 0.25; SVOCs 0.1. Recommended defaults for chemicals not specifically listed: VOCs with vapor pressure similar to benzene (95.2 mm Hg) 0.0005; VOCs with vapor pressure below benzene 0.03; SVOCs 0.1; Inorganic Compounds 0.01. Lead is not assigned a chemical-specific ABSd in Table 8; under this guidance the 0.01 inorganic-compounds default applies when a Pb-specific value is not used.
- Chemical-specific gastrointestinal absorption factors (ABS_GI), Table 1 (p. 7), used to convert oral MRLs/RfDs to absorbed-dose basis or to convert DAD back to administered equivalents: Arsenic — 100% (no adjustment); Cadmium — 2.5% (diet), 5% (water); Chromium III — 1.3%; Chromium VI — 2.5%; Mercuric chloride and other soluble salts — 7%; Metallic mercury — 80%; Methyl mercury — 100% (no adjustment); Nickel — 4%; Antimony — 15%; Barium — 7%; Beryllium — 0.7%; Copper — 57%; Manganese — 6%; Selenium — 30%; Silver — 4%; Thallium — 100% (no adjustment); Vanadium — 2.6%; Zinc — 100% (no adjustment); Cyanate — 100% (no adjustment). Lead is not in Table 1.
- Default skin surface areas, standard age groups, Table 2 (p. 13; Combined SA = head + hands + forearms + lower legs + feet under the typical-outdoor short-sleeve / shorts / no-shoes assumption for children <21 yr; adult exposure limited to head, hands, forearms, lower legs — shoes assumed): Birth-<1 yr 1,772 cm² (BW 8.2 kg); 1-<2 yr 2,299 cm² (11.4 kg); 2-<6 yr 2,592 cm² (17.4 kg); 6-<11 yr 3,824 cm² (31.8 kg); 11-<16 yr 5,454 cm² (56.8 kg); 16-<21 yr 6,083 cm² (71.6 kg); Adult ≥21 yr 6,030 cm² (80 kg). The Adult Table 2 row is the BW used in the Appendix B worked example (Table 9, p. 20).
- Default skin surface areas, special groups, Table 3 (p. 14; same Combined-SA convention as Table 2 with infant and older-child sub-ranges derived by linear regression through EFH 2011 Table 7-2): Birth-<1 mo infant 1,290 cm² (BW 4.8 kg); 1-3 mo infant 1,455 cm² (5.9 kg); 3-6 mo infant 1,686 cm² (7.4 kg); 6-12 mo infant 2,001 cm² (9.2 kg); 1-2 yr toddler 2,299 cm² (11.4 kg); 2-3 yr toddler 2,182 cm² (13.5 kg); 3-<5 yr pre-kindergarten 2,755 cm² (17.2 kg); 5-<6 yr kindergarten 3,123 cm² (20.6 kg); 6-<11 yr 1st-5th grade 3,824 cm² (31.8 kg); 11-<14 yr 6th-8th grade 4,849 cm² (50.6 kg); 14-<16 yr 9th-10th grade 5,466 cm² (63.7 kg); 16-<18 yr 11th-12th grade 5,957 cm² (67.3 kg); 18-≤67 yr full/part-time worker or educator 6,030 cm² (80.6 kg); pregnant women and breastfeeding women (15-<45 yr) 5,489 cm² (73 kg). The Table 3 worker/educator adult differs from the Table 2 Adult ≥21 yr row by +0.6 kg BW; combined SA is identical.
- Age-dependent adjustment factors (ADAFs) for carcinogens with a mutagenic mode of action, when chemical-specific age-specific cancer slope factors are not available (p. 8): children 0-<2 years × 10; children 2-<16 years × 3; children and adults 16+ × 1.
- Cancer-risk averaging defaults (p. 3-4): CTE residential occupancy 12 years (or median occupational tenure 5 years); RME residential occupancy 33 years (or 95th percentile occupational tenure 20 years). The noncancer dose is identical for CTE and RME because the inputs (BW, SA) are the same; cancer risk diverges because of the ED/AT term. Cancer averaging time is 78 years.
- Worked example (Appendix B, pp. 19-20): residential exposure to Aroclor 1254 at a soil EPC of 40 mg/kg using ABSd 0.14, default child AF 0.2 mg/cm²-event, and ABS_GI 1.0 (PCBs default). Resulting chronic dermal administered dose by age group (Table 9, p. 20): birth-<1 yr 0.00024 mg/kg-day (HQ 12); 1-<2 yr 0.00023 (HQ 11); 2-<6 yr 0.00017 (HQ 8.3); 6-<11 yr 0.00013 (HQ 6.7); 11-<16 yr 0.00011 (HQ 5.4); 16-<21 yr 0.000095 (HQ 4.8); adult ≥21 yr 0.00003 (HQ 1.5). HQs computed against a chronic oral MRL of 2×10⁻⁵ mg/kg-day. The example demonstrates the dermal-only pathway; the PHAST tool sums dermal and ingestion pathways for combined-route hazard quotients.

## Methods (brief)

ATSDR-issued guidance document; no primary measurement. ABSd values in Table 8 are sourced from EPA RAGS Part E, Exhibit 3-4 (EPA 2004) and supplemental Risk Assessment Information System (RAIS) entries. ABS_GI values in Table 1 are from EPA RAGS Part E, Exhibit 4-1 (EPA 2004). Default skin surface areas in Tables 2 and 3 are from EPA Exposure Factors Handbook 2011, Table 7-2, with the "f"-footnoted age ranges (3-<5, 5-<6, 11-<14, 14-<16, 16-<18) derived by linear regression through the EFH 2011 tabulated values plotted against average age in months. Adherence factors in Tables 7 and the 0.2/0.07 defaults are from EPA 2004, Exhibit 3-3. Health-assessor workflow: select default or site-specific exposure factors, apply the DAD equation, convert to administered dose via ABS_GI where the GI tract does not fully absorb the chemical (relevant for inorganic elements), compare to oral MRLs/RfDs for noncancer evaluation, and to age-specific cancer slope factors for cancer evaluation. Explicit limitations stated in the document: the children-in-mud activity scenario (Table 7) is presented for illustration but is not recommended for quantitative use because it significantly overestimates dermal risk; the default for inorganic compounds (ABSd = 0.01) is conservative and should be replaced with chemical-specific data when available; the dioxin ABSd is reduced from 0.03 to 0.001 when soil organic content exceeds 10%; the EDG addresses dermal absorption only and does not cover direct effects on the skin such as irritant contact dermatitis. The companion ATSDR 2018 Exposure Dose Guidance for Soil and Sediment Ingestion handles the oral pathway. The Public Health Assessment Site Tool (PHAST) implements the equations and presents combined dermal+ingestion hazard quotients for default residential scenarios.

## Implications

- Certification: Contributes the US-federal default ABSd values (As 0.03; Cd 0.001; inorganic-default 0.01) and ABS_GI values (As 100%, Cd 2.5%/5%, Cr-III 1.3%, Cr-VI 2.5%, Hg-soluble 7%, Hg-metallic 80%, MeHg 100%, Ni 4%, Sb 15%, Se 30%) used to convert oral-basis MRLs/RfDs to absorbed-dose equivalents and to compute combined dermal+oral hazard quotients in environmental exposure modeling. Provides the 0.2 mg/cm²-event child soil adherence factor and the age-specific skin-surface and body-weight tables used in dermal-pathway exposure estimation.
- Courses: Foundational regulatory-affairs and exposure-science teaching reference for explaining how dermal-route exposure is parameterized separately from oral and inhalation pathways, and how the ABS_GI factor reconciles dermally absorbed doses with health guidelines expressed on an administered-oral basis. Useful as a paired reading with the 2018 ATSDR soil/sediment ingestion EDG for a complete dermal-plus-oral environmental-pathway module.
- App: Not directly relevant to ingredient `contamination_profile` data. The age-specific body-weight defaults from Table 3 special groups (4.8, 5.9, 7.4, 9.2, 11.4, 13.5, 17.2, 20.6, 31.8, 50.6, 63.7, 67.3, 80.6 kg) and the four infant Combined SA values (1,290; 1,455; 1,686; 2,001 cm²) are useful infrastructure for any per-serving-per-bodyweight exposure calculator that needs to layer a dermal-pathway adjustment alongside an oral-intake estimate. The Table 2 standard age-group BWs (8.2, 11.4, 17.4, 31.8, 56.8, 71.6, 80 kg) are the coarser-grained companion ladder.

## Wiki pages this source may touch

- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury]]
- [[metals/mercury-methyl]]
- [[metals/nickel]]
- [[metals/chromium]]
- [[metals/chromium-hexavalent]]
- [[metals/antimony]]
- [[metals/barium]]
- [[metals/beryllium]]
- [[metals/copper]]
- [[metals/manganese]]
- [[metals/silver]]
- [[metals/thallium]]
- [[metals/vanadium]]
- [[metals/zinc]]

## Verification notes

- Source is a methodological guidance document about soil/sediment dermal absorption included in the children's-personal-care batch as a regulatory reference for dermal-route exposure modeling. It contains no occurrence data on personal-care products and no chemical concentrations in personal-care matrices; its relevance is the default ABSd and ABS_GI vocabulary it provides for any wiki work that needs to estimate or compare dermal exposure to soil contaminants in children.
- The frontmatter `metals:` field uses the umbrella abbreviation `As` (not iAs/tAs) because Table 8 labels the row "Arsenic" without speciation distinction and Table 1's ABS_GI of 100% applies to arsenic generally. Likewise the table uses "Cadmium," "Nickel," and a generic mercury split into mercuric chloride / metallic mercury / methyl mercury — so the frontmatter carries `Hg, MeHg` (covering both the soluble-salt/metallic group and the speciated methylmercury row) and `Cr, Cr-VI` (the document distinguishes Cr-III at 1.3% from Cr-VI at 2.5%).
- Lead is in `metals:` because the guidance is the source for the 0.01 inorganic-compounds default ABSd that would apply to Pb in the absence of a chemical-specific dermal absorption value, and because health-assessor workflows that touch Pb soil exposure will reach for this document. The document does NOT specify a Pb-only modeling alternative; an earlier revision of this page incorrectly stated that the guidance directs users to IEUBK/LeadSpread for Pb — that claim is not in the source and has been removed.
- Enhanced 2026-05-17 from a prior revision that (a) omitted the Table 1 ABS_GI factors entirely, (b) omitted the ADAFs for mutagenic-MOA carcinogens, (c) omitted the worked-example HQ outputs across age groups, (d) fabricated three IEUBK/LeadSpread references not in the source, and (e) limited the `metals:` frontmatter to As/Cd/Pb when Table 1 covers a much broader list of exposure-relevant elements (Hg, MeHg, Ni, Cr-VI, Sb). The cite_key, raw_handle, raw_path, and other identity fields are preserved unchanged.
- Audit subagent (2026-05-17) flagged that the original merge-enhance bullet conflated Table 2 standard-age rows with Table 3 special-group sub-rows and misattributed the Table 3 worker/educator adult BW (80.6 kg) to the Table 2 Adult ≥21 yr row (80 kg, the BW used in Appendix B Table 9). Verified against the PDF (pp. 13, 14, 20); the bullet has been split into separate Table 2 and Table 3 listings with the correct Table 2 adult BW of 80 kg restored and the Table 3 worker/educator clarification added.
- Audit subagent (2026-05-17) flagged that Barium (Table 1 ABS_GI 7%) was omitted from `metals:` and the wiki-touch list even though Be (0.7%), Tl (100%), V (2.6%), and Zn (100%) — also Table 1 elements — were included. Verified; Ba added to `metals:` and `[[metals/barium]]` added to wiki-touch list.
- Cross-vendor audit (Codex, 2026-05-17) corrected the source-attribution summary: adherence factors come from EPA RAGS Part E (2004), while the skin-surface values come from EFH 2011.
- Existing metal pages for Be, Cu, Mn, Ag, Tl, V, and Zn were added to the wiki-touch list because they appear in Table 1 and/or frontmatter. Selenium remains in `metals:` because Table 1 provides a selenium ABS_GI value, but no `metals/selenium` page exists in the current taxonomy snapshot; propose that page only if Karen wants full Table 1 routing.

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
