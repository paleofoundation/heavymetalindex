---
type: source
raw_handle: kimi-children-personal-care-massarsky2025
cite_key: massarsky2025-heavy-metals-toothpaste-health-risk
title: "Health risk implications of heavy metals in toothpaste"
authors: [Massarsky A, Unice KM, Kreider ML]
year: 2025
publication: "Public Health and Toxicology 5(2):9"
doi: 10.18332/pht/207273
access_url: https://doi.org/10.18332/pht/207273
source_type: peer-reviewed
evidence_tier: B
license: "CC BY-NC 4.0"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Health_risk_implications_of_heavy_metals_in_toothpaste.pdf"
raw_sha256: af6390fb023f12079ad404487546ed7d17460809b7d05817d7eff80e84115628
metals: [Pb, Cd, tHg, tAs]
ingredients: []
products: ["[[products/toothpaste]]", "[[products/children-personal-care]]"]
matrices: [cosmetic-personal-care, exposure-modeling]
jurisdictions: [US]
near_duplicates: []
sample_n: 50
sample_population: "Screening-level health risk assessment by Stantec consultants of metal concentrations measured by Lead Safe Mama (a consumer-advocacy lead-poisoning-prevention business) in 50 toothpastes (and 3 tooth powders, excluded from this assessment) sold in the United States, as publicized in a 2025 Guardian news article by Tom Perkins. The 50 toothpaste concentrations are the input dataset; the present paper does not re-analyse the products. Per-product metal concentrations and brand attributions are listed in the source's Supplementary file Table S1; this page reproduces only product-number-keyed exposure doses and aggregate range statistics per CLAUDE.md Part 12."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
ingest_method: manual_phase1
created_by: claude_opus_47_session
---

# Massarsky et al. 2025 — Screening-level health risk assessment of Pb/Cd/tHg/tAs in 50 US toothpastes (Lead Safe Mama testing)

This Short Communication is a screening-level health risk assessment, not a primary occurrence study. The authors, three Stantec environmental consultants, take a 50-toothpaste lead/cadmium/mercury/arsenic concentration dataset publicized in a 2025 Guardian news article (the underlying testing was performed by Lead Safe Mama, a consumer-advocacy lead-poisoning-prevention business) and convert it to age-stratified ingestion exposure estimates using a standard EPA-style ADD/LADD framework, then compare to health guidance values (HGVs) via hazard quotients. Cadmium and mercury hazard quotients stay below 1.0 for all 50 toothpastes under both typical and reasonable-upper-bound use scenarios. Lead exceeds the OEHHA Proposition 65 MADL of 0.5 µg/day in 10 toothpastes for children aged 2–4 and 1 toothpaste for adults under reasonable-upper-bound use, and in 1 children's toothpaste under typical use. Arsenic lifetime-average daily dose exceeds the EPA IRIS oral cancer slope factor benchmark in 3 toothpastes. The authors conclude that, contextualised against dietary lead intake, dust/soil ingestion, and dietary arsenic intake, toothpaste ingestion is unlikely to be a significant marginal contributor to total exposure; however, the upper-tail lead exceedances in children's toothpastes flag a real concern that the paper itself addresses by endorsing the Washington State Toxic-Free Cosmetics Act 1000 ppb Pb cap.

## Key numbers

**Dataset (third-party testing, not measured by this paper):** 50 toothpastes plus 3 tooth powders tested by Lead Safe Mama and reported via Perkins (2025) in The Guardian. Most products had detectable lead; cadmium, mercury, and arsenic were detected at lower product frequencies. Only 5 products had non-detectable concentrations for all four metals (source's Supplementary file Table S1). The 3 tooth powders (products #50, #52, #53) were excluded from the present risk assessment; the 50 toothpastes (numbered 1–49 plus #51) are the analysed set.

**Exposure model assumptions (Methods narrative pp. 2–3, Limitations p. 7–8):**

- Children aged 2–4 years: mean ingestion 0.30 g per brushing; 90th percentile ingestion 0.73 g per brushing (Barnhart et al. 1974, the four-age-group dentifrice ingestion study cited as the source dataset for the RIVM Cosmetics Fact Sheet). Two brushings per day (this brushing-frequency parameter is stated in the source's Supplementary file, which was not accessed for this ingest; the main text only refers generically to "number of brushings per day").
- Adults aged 20–35 years: mean ingestion 0.04 g per brushing (Barnhart et al. 1974). Two brushings per day (same Supplementary file caveat).
- The paper also reviews alternative child ingestion estimates from the literature, citing 0.205, 0.125, and 0.135 g per brushing in age groups 2–4, 5–7, and 8–12 years respectively (Strittholt et al. 2016), and 27.6% (Hargreaves et al. 1972) and 35.5% (Naccache et al. 1990) of the applied amount in children. These alternative estimates are described, not used as the model defaults.
- CDC-recommended use for children 3–6 years is "no more than a pea-sized amount" (0.25 g) per brushing; for children <3 years a "smear of a rice grain" (Thornton-Evans et al. 2019). The model's 0.30 g mean exceeds the CDC pea-sized recommendation by 1.2× and the 0.73 g 90th percentile exceeds it by 2.9×. The authors flag this as the main conservatism in their assessment.

**Health guidance values (HGVs) used:**

- Pb: 0.5 µg/day Maximum Allowable Dose Level (MADL) from California OEHHA Proposition 65, derived to be protective of developmental effects in children and pregnant women. The authors note this is 4.4× lower than the FDA Interim Reference Level (IRL) of 2.2 µg/day for children and 8.8 µg/day for women of child-bearing age (the source states the IRL values without an age-band qualifier on the children value), both anchored on the CDC blood lead reference value (BLRV) of 3.5 µg/dL with a 10× safety factor (Price et al. 2023). The 1–3 year age band appears in the source attached to the dietary Pb intake values (mean 1.7 µg/day, 90th percentile 2.6 µg/day) used downstream for contextualisation, not to the IRL itself.
- Cd, tHg: HGV values not stated in the main text; the source's Supplementary file (not accessed for this ingest) carries the numerical HGVs used. The Cd and Hg ADDs are reported as all below their respective HGVs at HQ < 1.0 for all 50 toothpastes under both use scenarios.
- tAs: EPA IRIS oral cancer slope factor (CSF) for inorganic arsenic, applied to the lifetime average daily dose. The authors flag that the underlying testing did not speciate iAs vs tAs, so applying the iAs-specific CSF to the unspeciated arsenic measurements is itself conservative (likely an overestimate for any arsenic fraction that is organic).

**Per-product exposure doses (selected from Table 1, pp. 3–5 of the source; full table runs all 50 products under typical and reasonable-upper-bound use scenarios):**

| Product # | Children Pb (µg/day) typical | Children Cd (µg/day) typical | Children tHg (µg/day) typical | Adult Pb (µg/day) typical | tAs lifetime (µg/kg/day) typical |
|---|---:|---:|---:|---:|---:|
| 1 | 1.50E-03 | 1.50E-03 | 1.50E-03 | 2.00E-04 | 1.68E-05 |
| 13 | 3.41E-02 | 3.08E-02 | 4.50E-03 | 4.55E-03 | 4.23E-04 |
| 25 | 1.17E-01 | 1.58E-02 | 1.50E-03 | 1.57E-02 | 1.80E-04 |
| 37 | 1.75E-01 | 1.74E-02 | 6.60E-03 | 2.34E-02 | 9.20E-04 |
| 45 | 2.74E-01 | 7.50E-03 | 7.50E-03 | 3.66E-02 | 6.78E-04 |
| 49 | 3.41E-01 | 1.50E-03 | 8.76E-03 | 4.54E-02 | 9.57E-05 |
| 51 (outlier) | 2.10E+00 | 1.86E-02 | 1.50E-03 | 2.80E-01 | 9.07E-03 |

Range of children's Pb ADDs across the 50 products: typical use 1.50E-03 to 2.10E+00 µg/day (three orders of magnitude); reasonable-upper-bound use 3.65E-03 to 5.11E+00 µg/day. Product #51 is the upper-tail outlier driving the range; the source notes only one toothpaste in the dataset had a measured Pb concentration exceeding 1000 ppb (consistent with that single product being #51).

**HGV exceedance counts (Results, p. 2 and Figure 1; numerical values in Supplementary file Table S4):**

- Cd: zero exceedances for any product, age group, or use scenario (HQ < 1.0 throughout).
- tHg: zero exceedances for any product, age group, or use scenario (HQ < 1.0 throughout).
- Pb, children 2–4 years: 1 toothpaste exceeds under typical use (product #51); 10 toothpastes exceed under reasonable-upper-bound use (products #41, #42, #43, #44, #45, #46, #47, #48, #49, #51 per Figure 1).
- Pb, adults 20–35 years: 1 toothpaste exceeds under reasonable-upper-bound use (product #51); zero exceedances under typical use.
- tAs: 3 toothpastes exceed the LADD-based HGV under typical use (products #37, #45, #51 per Figure 1). Upper-bound LADDs could not be calculated because 90th-percentile toothpaste ingestion rates were not available beyond the 2–4 and 20–35 age groups (Table 1 footnote).

**Contextualisation against dietary intakes (pp. 6–7):**

- Children's dietary Pb intake (Price et al. 2023): mean 1.7 µg/day, 90th percentile 2.6 µg/day for children 1–3 years. With the exception of product #51 (Pb ADD 2.10 µg/day typical use, 5.11 µg/day upper-bound use), the 10 exceeding-toothpaste Pb ADDs are markedly lower than these dietary intakes.
- Children's dust/soil Pb exposure (Zartarian et al. 2017; ATSDR 2020): median dust 72 µg/g and 95th percentile dust 320 µg/g, median soil 26 µg/g and 95th percentile soil 426 µg/g; with baseline child dust ingestion 0.2 g/day and pica-level soil ingestion up to 5 g/day, this gives 95th-percentile Pb intakes of 64 µg/day from dust and 2130 µg/day from soil — three to four orders of magnitude above the toothpaste-ingestion estimates.
- Adult Pb ADD (product #51, the only adult exceedance): 0.84 µg/day, which is 10.5× lower than the FDA IRL of 8.8 µg/day for women of child-bearing age. On a per-kg basis (70 kg body weight) this equals 0.012 µg/kg/day, 42× lower than the EFSA-reported mean dietary Pb intake of 0.5 µg/kg/day for European adults ≥18 years (EFSA 2012).
- Arsenic LADDs exceeding the HGV (products #37 9.20E-04, #45 6.78E-04, #51 9.07E-03 µg/kg/day) are several orders of magnitude lower than the ATSDR mean daily dietary arsenic intake range of 0.31–1.80 µg/kg/day across age groups (ATSDR 2007).

**Regulatory benchmarks cited:**

- Washington State Toxic-Free Cosmetics Act (TFCA) statutory limit for Pb in cosmetics: 1000 ppb. The Washington Department of Ecology interim policy (2024) acknowledges this limit "can be difficult, if not impossible, to achieve in some products" but the authors argue it is appropriate for children's toothpastes given the dataset's upper-tail. Only product #51 exceeds 1000 ppb Pb in the dataset.
- FDA cosmetics action level for Pb: 10000 ppb (10 ppm). The source's Table 2 maps this to a 5 µg/day Pb intake and a 0.8 µg/dL incremental blood lead increase (23% of BLRV) under the pea-sized-twice-daily scenario.
- FDA Closer-to-Zero baby-food Pb action levels: 10 ppb (fruits/vegetables/mixtures/yogurt/meat), 20 ppb (single-ingredient root vegetables, dry infant cereals). These translate to modelled 90th-percentile Pb intakes of 0.23–0.62 µg/day, consistent with not exceeding the 2.2 µg/day IRL when summed across food categories.

## Methods (brief)

Risk-assessment framework: standard EPA-style screening-level health risk assessment (HRA), with most-sensitive-endpoint selection (non-cancer endpoints for Pb, Cd, tHg; lifetime cancer endpoint for inorganic arsenic). For Pb, Cd, tHg, average daily dose ADD = (metal concentration in toothpaste) × (toothpaste ingestion rate) × (number of brushings per day), reported in µg/day. For As, lifetime average daily dose LADD = (As concentration) × (toothpaste ingestion rate) × (brushings/day) × (annual exposure duration) × (lifetime exposure duration) / (body weight × lifetime), reported in µg/kg/day. Hazard quotient HQ = ADD/HGV (or LADD/HGV); HQ > 1.0 flags potential health risk.

Source dataset: third-party testing of 50 toothpastes commissioned by Lead Safe Mama, publicized via Perkins (2025) in The Guardian (cite ref 6). The present paper does not re-analyse the toothpaste samples or measure new concentrations; it takes the published concentrations at face value and runs the exposure-and-risk-characterisation arithmetic. The source notes the third-party testing did not disclose the analytical laboratory, the specific testing methods, or chain-of-custody details — flagged as a key data-quality limitation in the Strengths and limitations section.

Speciation: The Lead Safe Mama testing did not speciate inorganic vs total arsenic. The authors apply the EPA IRIS inorganic-arsenic cancer slope factor to the total-arsenic measurements as a conservative default. Mercury species (organic vs inorganic) is similarly not speciated in the source data; the paper records `tHg` per CLAUDE.md Part 14.

Limitations the authors state (Strengths and limitations, pp. 7–8): (1) toothpaste ingestion rate is the main model conservatism (0.30 g mean exceeds CDC pea-sized 0.25 g by 1.2×); a sensitivity analysis substituting 0.25 g per brushing leaves only 1 Pb exceedance and 2 As exceedances; (2) HGVs are conservative selections (OEHHA MADL is 4.4× lower than FDA IRL for Pb; iAs CSF applied to unspeciated As overstates risk if organic As is present); (3) assumption that the same toothpaste brand is used over prolonged periods is unrealistic given likely consumer brand-switching; (4) dataset limitations from the third-party testing — single concentration per product (no replicates / no lot-to-lot variability data), unknown lab accreditation, unspecified analytical methods, unknown chain of custody.

Conflict-of-interest disclosure (source's COI section, p. 10): all three authors are employed by Stantec, a consulting firm whose services include providing scientific advice to government, corporations, law firms, and various scientific/professional organisations. The disclosure states the firm "has previously been engaged by food and beverage companies, some of which produce products with ingredients that may contain lead, to provide general consulting and expert advice on scientific matters." The paper is funded "no source of funding for this research" per the source; the authors report no competing interests related to the current work. The Stantec affiliation and prior food/beverage industry engagements are recorded here as evidence-weighting context for downstream synthesis.

## Implications

Certification: This paper is direct-evidence on the [[products/toothpaste]] product category for the four HMTc analytes Pb, Cd, tHg, and tAs in the US market. The dataset's chief signal is on lead in the upper tail of the children's-toothpaste distribution: 10 of 50 toothpastes (20%) exceed the OEHHA-derived 0.5 µg/day Pb MADL under reasonable-upper-bound use in children aged 2–4, with one product (#51) exceeding by an order of magnitude even under typical use. Cadmium, mercury, and arsenic ADDs all stay well below health-guidance values. The Washington State Toxic-Free Cosmetics Act 1000 ppb Pb statutory limit is the operative US state-level binding limit for toothpaste; the authors endorse this limit as appropriate for children's toothpastes. The source does not propose a HMTc certification threshold; this page does not propose one either. The paper-internal sensitivity analysis (reducing modelled ingestion from 0.30 g to 0.25 g per brushing reduces Pb exceedances from 10 to 1 in children) is relevant for downstream pooling-and-percentile work and is recorded here verbatim.

Courses: Useful as a methods case study for screening-level health risk assessment (ADD/LADD/HQ/HGV machinery), particularly for a Cat 2 toothpaste module addressing the brand-switching-vs-prolonged-use assumption and the rate-vs-concentration trade-off in exposure modelling. Useful as a case study in the conflict-of-interest weight question for industry-adjacent risk assessments. Useful as a worked example of dietary-and-environmental contextualisation (toothpaste Pb vs dietary Pb vs dust/soil Pb).

App: Toothpaste Pb concentration is the binding consumer-app signal for this product category. The paper provides the per-product Pb intake distribution (in µg/day) but does not provide the underlying per-product Pb concentrations (those are in the source's Supplementary file Table S1, attached to brand names). Per CLAUDE.md Part 12, brand-attributed concentrations are not ingested onto this page; the distribution-level signal is sufficient for app routing.

Microbiome: Not applicable.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[metals/arsenic-total]]
- [[products/toothpaste]]
- [[products/children-personal-care]]
- [[regulations/washington-tfca-toothpaste-pb-1000ppb]]
- [[regulations/oehha-lead-prop65]]
- [[regulations/fda-closer-to-zero]]

## Verification notes

- **Enhanced from prior revision (2026-05-18 merge-enhance pass).** Prior revision (2026-05-14, `ingest_method: autonomy_phase1_v0`) contained three substantive defects, all corrected in this pass:
  1. **Invented attribution.** Prior text cited "Belknap 2014 systematic review" as the source of the 0.205 g/brushing children's ingestion rate. No author named "Belknap" appears anywhere in the source's reference list. The 0.205 g figure is from Strittholt et al. 2016 (source ref 10), and is one of several alternative ingestion estimates the paper reviews — not the value used in the model. Removed.
  2. **Wrong ingestion rate in stated model assumptions.** Prior text stated "Children aged 2–4 years: typical-use toothpaste ingestion 0.205 g per brushing". Per the source's Strengths and limitations section (p. 7), the model actually uses 0.30 g mean and 0.73 g 90th percentile, both from Barnhart et al. 1974 (source ref 11) as cited in the RIVM Cosmetics Fact Sheet. Back-calculation from Table 1 confirms: Product #6 children Pb ADD typical 1.01E-02 µg/day vs upper-bound 2.45E-02 µg/day gives a typical-to-upper ratio of 2.43, matching 0.73/0.30 = 2.43. The adult model ratio (4.03E-03/1.34E-03 = 3.00) implies an adult upper-bound ingestion rate higher than 0.04×3 = 0.12 g per brushing; the source does not state this value in the main text but it is consistent with the model framework. Corrected to 0.30 g typical / 0.73 g 90th percentile for children, 0.04 g for adults.
  3. **Part 2 wiki/HMTc firewall violations in Implications section.** Prior text contained explicit threshold proposals ("if HMTc certifies below 1000 ppb (e.g., literature-anchored 90th percentile of clean toothpastes), the certification is meaningful; if HMTc matches 1000 ppb, the certification adds nothing over state regulation") and an invented consumer-facing concentration cutoff ("A per-product Pb concentration above ~200 ppb (corresponding to >~0.1 µg/day Pb ingestion in children) is the threshold at which screening-level risk assessment starts flagging concern"). Both are Part 2 violations: the wiki reports what the source says, does not propose HMTc certification thresholds, and does not invent screening cutoffs. Rewritten Implications section to describe the paper's findings without proposing thresholds or recommendations.
- **Brand firewall (Part 12 strict reading).** The source's Supplementary file Table S1 lists each of the 50 toothpastes with brand name and the per-metal concentrations. This page reports only product-number-keyed exposure doses and aggregate range statistics — no brand attribution. Per the verification checklist Exception 1, the testing organisation Lead Safe Mama is named because it is the publicly-documented commissioning party of the testing (analogous to Consumer Reports or HBBF for other personal-care studies); per Exception 2, the EPA IRIS, OEHHA Prop 65, FDA, CDC, ATSDR, EFSA, RIVM, and Washington Department of Ecology references are scientific/regulatory institutional attributions, not contaminated-product brands. The Stantec authors' employer is named because Stantec is the authors' affiliation, not a measured product brand.
- **Legacy headings removed.** Prior revision used `## Wiki pages updated on ingest` (legacy heading from pre-2026-05-14 schema). Replaced with `## Wiki pages this source may touch` per current template. Prior section also contained two regulation-page slugs marked "to be created" (`washington-tfca-toothpaste-pb-1000ppb`, `fda-ctz-pb-irl-2-2ug-day`); the first is already in the taxonomy snapshot; the second is folded into the existing `[[regulations/fda-closer-to-zero]]` umbrella slug.
- **Evidence tier reassessment.** Prior frontmatter marked this as evidence_tier A. Corrected to **B-tier** because: (a) the paper is a screening-level risk assessment, not a primary occurrence measurement (CLAUDE.md Part 13 reserves A-tier for primary peer-reviewed measurements with full methodological detail); (b) the underlying concentration dataset is consumer-advocacy third-party testing with undisclosed laboratory, undisclosed methods, and no chain-of-custody — the source itself flags these as material data-quality limitations; (c) the Stantec authors disclose prior food/beverage industry engagement (COI weighting). The paper's risk-assessment methodology is peer-reviewed and the venue (Public Health Toxicology, European Publishing) is legitimate, hence B-tier rather than C-tier.
- **License correction.** Prior frontmatter listed "CC BY-NC". Corrected to "CC BY-NC 4.0" per the source's first-page footer ("This is an Open Access article distributed under the terms of the Creative Commons Attribution NonCommercial 4.0 International License").
- **Publication name preserved as "Public Health and Toxicology".** Mid-merge-enhance pass on 2026-05-18 attempted to "correct" this to "Public Health Toxicology" based on a misreading of the source's footer citation (the footer "Public Health Toxicol 2025;5(2):9" is the NLM-style journal abbreviation, not the full title). Audit subagent (2026-05-18) flagged this; verified against the source's PDF page 1 top-right banner which reads "Public Health and Toxicology". Restored to the original (correct) "Public Health and Toxicology". The European Publishing journal hosts at publichealthtoxicology.com with that full title.
- **HGV numerical values for Cd, tHg, tAs.** The source's main text reports the Pb HGV (OEHHA MADL 0.5 µg/day) explicitly but the numerical Cd, tHg, and tAs HGVs live in the source's Supplementary file (Supplementary Table S2 or similar), which was not accessed during this ingest. The Key numbers section records "HGV values not stated in the main text" rather than guessing. A future Supplementary-file fetch would close this gap.
- **Per-product brand attribution from Supplementary file Table S1 not retrieved.** The 50 product brand identifiers exist in the source's Supplementary file but are not reproduced here per Part 12. If the underlying Lead Safe Mama dataset is itself separately analysed by Karen's Lab or the private brand-intelligence build (CLAUDE.md Part 26), Table S1 brand-keyed values would be the canonical lookup.
- **Folder location note.** The PDF lives under `babycare_04_Shampoo_Wipes_Sunscreen` in the Manual Fetch Kimi structure; the paper itself is about toothpaste (not shampoo, wipes, or sunscreen). This is a manual-fetch curation choice and does not affect routing.
- **Companion paper.** The Chengappa et al. 2025 toothpaste study ([[sources/chengappa2025-toothpaste-india-aas]]) is a primary occurrence measurement of 20 Indian-market toothpastes by flame AAS; that paper is the per-jurisdiction analytical complement to the present US screening-level assessment. No further cross-reference made here (synthesis across the two sources is Part 9 workflow).
- **Audit subagent (2026-05-18) — REVISE verdict, 2 findings applied, 0 rejected.**
  - Finding 1 (journal title): audit flagged the mid-pass "correction" of "Public Health and Toxicology" to "Public Health Toxicology" as itself wrong. Verified against PDF page 1 top-right banner — banner reads "Public Health and Toxicology"; the "Public Health Toxicol" string only appears in the NLM-abbreviation footer citation. Reverted frontmatter `publication:` to "Public Health and Toxicology 5(2):9" and updated the publication-name verification-note entry to document the round-trip.
  - Finding 2 (FDA IRL age qualifier): audit flagged that the wiki attributed "2.2 µg/day for children (1–3 years)" to the FDA IRL, but the source states the IRL without an age qualifier — the 1–3 year age band only applies in the source to the dietary Pb intake values (1.7 mean, 2.6 P90 µg/day) used downstream for contextualisation. Verified against PDF pages 4–5. Removed the "(1–3 years)" qualifier from the IRL line and added a clarifying sentence about where the age band actually applies.
  - Audit also raised two ⚠️ items without applying: (i) `matrices: [cosmetic-personal-care, exposure-modeling]` are non-standard slugs not in the snapshot — preserved per established convention across the sibling Cat 2 personal-care sources (jitareanu2025, rbeida2023, balogun2024, chengappa2025, etc.); (ii) "two brushings per day" comes from the source's Supplementary file (not accessed) — added a clarifying caveat in Key numbers rather than removing the parameter, because the per-product values in Table 1 are consistent with the parameter being two.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [29d699f32](https://github.com/paleofoundation/heavymetalindex/commit/29d699f32) | 2026-05-18 | minor | Narrative text revised |
| [c1daddd9b](https://github.com/paleofoundation/heavymetalindex/commit/c1daddd9b) | 2026-05-18 | major | 1 source added; 3 sections added and 2 removed; narrative text revised |
| [80110406e](https://github.com/paleofoundation/heavymetalindex/commit/80110406e) | 2026-05-15 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
