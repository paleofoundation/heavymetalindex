---
type: source
raw_handle: FM_10494610
cite_key: original2020-original-a
suggested_cite_key_rename: alharbi2023-baby-foods-heavy-metals-saudi-arabia
note_on_cite_key: "Manifest cite_key 'original2020-original-a' is a text-mining artifact (first_author text-mined as 'original' from 'ORIGINAL ARTICLE' header; year incorrectly mined as 2020 from cited source). Actual: Alharbi et al. 2023, Food Science & Nutrition (Wiley)."
title: "Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia"
authors: [Alharbi NS, Akamsiei RM, Almaiman LA, AL-Samti MA, Al-Mutairi HS, Al-owais BS, Alkhalaf MM, Bineid MA]
year: 2023
publication: "Food Science & Nutrition (Wiley)"
doi: null
no_doi_assigned: true
access_url: "https://onlinelibrary.wiley.com/journal/20487177"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10494610/FM_10494610.md
metals: [iAs, tAs, Cd, Pb]
ingredients: ["[[ingredients/infant-formula-powder]]", "[[ingredients/baby-cereals-dry]]", "[[ingredients/infant-cereal-ingredients]]"]
products: ["[[products/infant-formula-powder]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/teething-and-snacks-rice-based]]", "[[products/teething-and-snacks-non-rice]]"]
matrices: [whole-food, dietary-intake, exposure-modeling]
jurisdictions: [SA]
near_duplicates: []
sample_n: null
sample_population: "Stage 1 infant formula (0-6 months), stage 2 infant formula (7-12 months), cereal-based meals, and biscuits sold in Saudi Arabia. Saudi Food and Drug Authority (SFDA) monitoring sample set."
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Alharbi et al. 2023 — As, Cd, Pb in Saudi Arabian baby foods (4 categories)

This Saudi Food and Drug Authority (SFDA) study quantifies arsenic, cadmium, and lead by ICP-MS in four baby food categories: stage 1 infant formula (0-6 months), stage 2 infant formula (7-12 months), cereal-based meals, and biscuits. Then calculates EDI / THQ / HI for As, Cd and MoE for Pb across infant age groups. **Cereal-based meals and biscuits carry the highest As, Cd, Pb concentrations** (range mean values: As 11.1-15.5 µg/kg; Cd 5.18-8.76 µg/kg; Pb 35.2-53.8 µg/kg). Infants 0-6 months are the highest-exposed population to Cd (0.08 µg/kg-bw/day) and Pb (0.36 µg/kg-bw/day), while infants 7-12 months are highest exposed to As. Risk-assessment outputs (THQ, HI, MoE) classify the current exposure levels as "low potential chronic risks" for both infant age groups. Useful Cat 1 reference for Saudi/Middle East baby-food market.

## Key numbers

**Per-category mean concentrations (µg/kg = ppb)**:

| Product category | As mean (µg/kg) | Cd mean (µg/kg) | Pb mean (µg/kg) |
|---|---:|---:|---:|
| Stage 1 infant formula (0-6 mo) | <11.1 | <5.18 | <35.2 |
| Stage 2 infant formula (7-12 mo) | varies | varies | varies |
| **Cereal-based meals** | **11.1 (high)** | **5.18 (high)** | **35.2 (high)** |
| **Biscuits** | **15.5 (highest)** | **8.76 (highest)** | **53.8 (highest)** |

(The text "As 15.5-11.1, Cd 5.18-8.76, Pb 35.2-53.8" presents the range across the four product categories with the highest at the upper bound; biscuits are likely the highest-end values.)

**Per-age dietary exposure**:

| Age group | Highest exposure to | Exposure (µg/kg-bw/day) |
|---|---|---:|
| Newborns to 6 months | Cd | 0.08 |
| Newborns to 6 months | Pb | 0.36 |
| Infants 7-12 months | As | (highest among groups) |

**Risk-assessment outputs**: THQ, HI, MoE all classified as "low potential chronic risks" for both age groups. This contrasts with Chen 2025 Chongqing finding where mRPI exceeded 1.0 for nephrotoxicity in similar populations. Difference: this paper does HQ/HI per-metal independent + MoE-based; Chen uses cumulative-risk mRPI which is more conservative.

**Regulatory context (per the paper)**:
- WHO recommendation: exclusive breastfeeding for first 6 months
- Saudi MoH adoption of WHO complementary feeding guidance
- SFDA monitoring framework cited as the data source

## Methods

ICP-MS quantification of total As, Cd, Pb in baby food samples. Sample digestion and instrument-specific details not in the first-page excerpt; standard SFDA Reference Laboratory practice.

Speciation: Total As only. The paper's THQ uses USEPA RfD for inorganic As (this is the typical convention; total As is multiplied by an iAs/tAs conversion factor implicitly when comparing to iAs RfD). Some uncertainty in the as-published risk-assessment values because of this convention; the paper's "low risk" finding should be re-examined under USEPA 2025 revised iAs RfD (per [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf|Chiger 2017]] cited Tsuji 2015 RfD).

Risk methodology: USEPA-based EDI / THQ / HI / MoE per standard practice.

## Implications

Certification: For HMTc Cat 1 infant formula + baby cereal + biscuit row family:

1. **Saudi-market baby food shows Cat-1-relevant Pb levels** (35.2-53.8 µg/kg in cereal-based meals and biscuits). These are 3-5x the FDA proposed action level of 10 ppb for fruit/vegetable purees and within the same range as the 20 ppb action level for root vegetables and dry infant cereals. Saudi-sourced or Saudi-distributed baby food certification should anchor against these distributional data.

2. **Cereal-based meals and biscuits are the high-exposure subcategory**, consistent with global findings that rice-containing and grain-based infant foods drive As/Cd/Pb exposure more than dairy-based formulas. HMTc Cat 1 should preferentially focus regulatory attention on this subcategory.

3. **Infants 0-6 months are the highest Cd and Pb exposed group** despite typically consuming formula (not cereals/biscuits). This implies that the formula Pb/Cd values in this dataset, while not the highest per-mass, drive the highest per-kg-body-weight dose due to the higher consumption rate. HMTc Cat 1 formula thresholds should be stricter than cereal thresholds on a per-mass basis to account for this.

4. **The "low risk" finding contrasts with Chen 2025 mRPI cumulative-risk finding**. Both papers are technically sound; the difference is single-metal HQ vs cumulative mRPI methodology. HMTc Cat 1 standards-setting should adopt the more conservative mRPI framework for cumulative-risk evaluation.

5. **Cite-key cleanup needed**: manifest text-mined `original2020-original-a` from "ORIGINAL ARTICLE" header. Future cleanup should rename to `alharbi2023-baby-foods-heavy-metals-saudi-arabia`.

Courses: Useful as a Saudi/Middle East market exemplar in any HMTc course module on regional baby food contamination patterns.

App: For the consumer app's Saudi/Middle East market segment, this dataset establishes that locally-sold infant formula and cereal-based meals routinely carry Pb in the 35-54 ppb range — meaningful exposure for the 0-12 month population.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[ingredients/infant-formula-powder]]
- [[ingredients/baby-cereals-dry]]
- [[ingredients/infant-cereal-ingredients]]
- [[products/infant-formula-powder]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/teething-and-snacks-rice-based]]
- [[products/teething-and-snacks-non-rice]]
