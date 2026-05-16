---
type: source
raw_handle: kimi-children-personal-care-salles2023
cite_key: salles2023-face-paints-pancakes-brazil-cancer-risk
title: "Potentially Toxic Elements in Costume Cosmetics Used by Children and Adults Are Associated with Cancer Risk"
authors: [Salles FJ, Paniz FP, Batista BL, Nardocci AC, Olympio KPK]
year: 2023
publication: "International Journal of Environmental Research and Public Health 20:531"
doi: 10.3390/ijerph20010531
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_05_Other_Categories/05_Other_Categories/Potentially_Toxic_Elements_in_Costume_Cosmetics_Used_by_Children_and_Adults_Are.pdf"
metals: [Al, tAs, Cd, Cr, Cr-VI, Ni, Pb, Sb, Sn]
ingredients: []
products: ["[[products/face-paint]]", "[[products/costume-cosmetics]]", "[[products/children-personal-care]]"]
matrices: [cosmetic-personal-care, exposure-modeling]
jurisdictions: [BR, US]
near_duplicates: []
sample_n: 95
sample_population: "95 samples of face paints (n=90) and pancakes (n=5) purchased at the largest high-street commercial center in São Paulo, Brazil. Four brands of face paints in three textures (liquid, cream, fluorescent) and 10 colors; one brand of pancake in 5 colors."
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Salles et al. 2023 — Toxic elements in costume cosmetics (face paints + pancakes), Brazil

This study quantifies 12 potentially toxic elements (Al, As, Ba, Cd, Co, Cr, Cu, Ni, Pb, Sb, Sn, Sr) in 95 costume cosmetics (90 face paints + 5 pancakes) purchased in São Paulo, Brazil, and runs USEPA risk-assessment models for dermal-absorption and incidental-ingestion (hand-to-mouth) pathways for both children and adults. **Cancer risk for children ranges from 10⁻⁸ to 10⁻⁵**; for adults in occupational scenarios (theater, makeup artists), 10⁻³ to 10⁻⁵. Non-cancer hazard quotients stay below 1 except for dermal exposure to some target systems in adults. **The highest cancer risks are associated with the dermal exposure pathway**, not the incidental-ingestion pathway. This complements the Arshad 2020 Pakistani cosmetics finding that lifetime cancer risk exceeds the acceptable threshold across most regular cosmetic categories — both papers converge on the conclusion that chronic dermal exposure to heavy-metal-containing cosmetics is the dominant carcinogenic risk pathway, not ingestion.

Cited adjacent finding (Campaign for Safe Cosmetics 2009, USA): all commercial face paints tested contained lead; 60% contained known skin allergens (Ni, Co, Cr) at higher-than-recommended levels.

## Key numbers

**95 face paints + pancakes from Brazilian high-street market**:
- 12 PTEs analyzed: Al, As, Ba, Cd, Co, Cr (total), Cr-VI (estimated via ABS_gi), Cu, Ni, Pb, Sb, Sn, Sr
- 90 face paints: 4 brands × 3 textures (liquid/cream/fluorescent) × ~10 colors each (red, yellow, black, white, green, orange, purple, blue, brown, pink, lilac)
- 5 pancakes: 1 brand × 5 colors

Specific per-element concentrations are tabulated in the paper but not in the abstract-level excerpts read here.

**Risk-assessment outputs (USEPA methodology, summed across all 12 PTEs):**

| Scenario | Population | Cancer risk range | Non-cancer HQ range |
|---|---|---|---|
| Dermal exposure | Children (face-only surface area) | 10⁻⁸ to 10⁻⁵ | mostly <1 |
| Dermal exposure | Adults (occupational, head + trunk) | 10⁻³ to 10⁻⁵ | >1 for some target systems |
| Incidental ingestion (hand-to-mouth) | Children + adults | lower than dermal | <1 |

**USEPA model parameters used (paper Eqs 1-8)**:
- Dermal absorption fractions (ABS, dimensionless): As 0.03; Cr-VI 0.04; other PTEs 0.001
- Conversion factor (CF): 10⁻⁶ mg/kg
- Adherence factor (AF): paints applied per skin event ÷ surface area
- Body weight (BW): age-group specific
- Skin surface area (SA): head-only for children; head + trunk for adults
- Reference doses (RfD): USEPA/IRIS oral RfD for As, Sr; ATSDR MRL for Al, Co, Cu, Sn; USEPA absorbed RfD (RfD_abs = RfD_o × ABS_gi) for Ba, Cd, Cr-III, Cr-VI, Ni, Sb
- Slope factors (SF): California OEHHA oral SF for As, Pb; USEPA SF_abs for Cr-VI

## Methods

Sample collection: 95 samples (4 brands × multiple textures/colors face paints, 1 brand of pancakes) from highest-traffic commercial center in São Paulo. All manufacturers Brazilian. When possible, two batches per type+color purchased.

Sample preparation: 150-200 mg sample in triplicate + 2 mL conc. HNO3 (14 mol/L, sub-distilled), overnight room temp pre-digestion, graphite-covered digester block at 120 °C × 4 h, dilute to 40 mL with 18.2 MΩ deionized water, filter 0.2 µm cellulose acetate.

Instrumentation: Agilent 7900 ICP-MS. External calibration 1-200 µg/L, linearity 1.00 for most elements (0.9999 for Pb). CRMs: NIST 2709 (soil), ERM CC 141 (loam), NIST 1573 (tomato leaves), Agro 1003a. LOD = 3σ procedural blank / slope × dilution factor.

Risk assessment: USEPA-based dermal + ingestion exposure modelling per Salles' paper Eqs 1-8. Dermal absorption fractions sourced from USEPA Risk Assessment Guidance for Superfund. Hand-to-mouth transfer factor 0.24 conversion efficiency (literature consensus). Slope factors from California OEHHA (As, Pb) and USEPA (Cr-VI).

Speciation: Total Cr by ICP-MS, with Cr-VI fraction estimated using ABS_gi (gastrointestinal absorption fraction) per USEPA convention. Total Hg not measured.

## Implications

Certification: For the HMT&C certification program face-paint / costume-cosmetic row:

1. **Cancer risk from chronic dermal exposure is the dominant concern**, not incidental ingestion. the HMT&C certification program thresholds for face paints should anchor on dermal-absorbed-dose × lifetime-application-frequency for both children and adult-occupational users.

2. **Adult occupational exposure (theater, makeup artists, costumed entertainers) is the highest-risk scenario** — cancer risk 10⁻³ to 10⁻⁵, well above the 10⁻⁴ acceptable threshold. the HMT&C certification program face-paint certification should include the occupational-use scenario, not just the once-yearly Halloween / Carnival use scenario.

3. **As, Pb, and Cr-VI are the binding carcinogenic-risk analytes** because they have the dermal slope factors and dermal absorption fractions in the model. Cd, Ni, Sb contribute to non-carcinogenic hazard quotient but not the cancer risk.

4. **Color matters**: face paints in different colors carry different pigment loads (red and yellow tend toward Cd-pigments; black toward Mn/Fe; white toward TiO2 with Pb impurities; brown toward iron oxides). The paper's per-color data should inform per-color HMTc thresholds rather than a single matrix threshold.

5. **Brazilian Carnival + US Halloween + children's parties** are the realistic user scenarios. the HMT&C certification program face-paint certification needs to default to "regular use" assumptions (multiple events per year × multi-hour applications) rather than a single-application worst case.

6. **The Campaign for Safe Cosmetics 2009 finding (100% face paints had Pb, 60% had allergen-level Ni/Co/Cr)** is consistent with this paper's results — face paints have systematically higher heavy-metal load than regular makeup because they use cheaper / less-refined pigments.

Courses: Excellent case study for USEPA risk-assessment methodology applied to a cosmetic exposure scenario. Eqs 1-8 are well-documented and the per-PTE absorption-fraction logic is clean.

App: For the consumer app, face paint should carry an "elevated risk" flag, especially for repeat use within a year (theater, themed parties, recurring Halloween). The cancer-risk concern is occupational and lifetime, not single-use.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/aluminum]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/chromium-hexavalent]]
- [[metals/nickel]]
- [[metals/lead]]
- [[metals/antimony]]
- [[metals/tin]]
- [[products/face-paint]] (the children's personal care category row — to be created)
- [[products/costume-cosmetics]] (the children's personal care category row — to be created)
- [[products/children-personal-care]]
- [[health/cat-2-non-ingestion-exposure-pathways]] — this paper's methodology is the canonical reference for the children's personal care category dermal-exposure modelling described in the supplement
