---
type: source
raw_handle: FM_12378713
cite_key: arsenic2025-unknown
title: "Arsenic speciation using HPLC-ICP-MS in white and brown rice and health risk assessment"
authors: [Navaretnam R, Aris AZ, Shukor MFA, Norrrahim MNF, Knight VF, Chin TT, Isa NM, Looi LJ]
year: 2025
publication: "Environmental Geochemistry and Health"
doi: 10.1007/s10653-025-02723-2
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND"
raw_path: raw/markdown/FM_12378713/FM_12378713.md
metals: [tAs, iAs]
ingredients: ["[[ingredients/rice]]", "[[ingredients/rice-flour]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/mixed-meals-rice-containing]]"]
matrices: [whole-food]
jurisdictions: [MY, EU]
near_duplicates: [FM_12378713_Arsenic_speciation_using_HPLC-ICP-MS_in_white_and_brown_rice]
sample_n: 30
sample_population: "30 rice samples (15 white, 15 brown) randomly purchased from local supermarkets in Klang Valley, Selangor, Malaysia, March-April 2022"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
suggested_cite_key_rename: navaretnam2025-arsenic-speciation-rice-malaysia
note_on_cite_key: "Manifest cite_key 'arsenic2025-unknown' is a text-mining artifact (first_author text-mined as 'arsenic' because the paper title leads with the analyte). Actual first author: Navaretnam. Future cleanup should rename to navaretnam2025-arsenic-speciation-rice-malaysia and update all cross-references."
---

# Navaretnam et al. 2025 — Arsenic speciation in Malaysian white and brown rice

This study optimizes and validates a 4-minute HPLC-ICP-MS method for arsenic speciation (AsIII, AsV, DMA, MMA) in white and brown rice, then applies it to 30 commercial rice samples (15 white, 15 brown) from Klang Valley, Malaysia. Inorganic arsenic concentrations exceed the EU Commission's 2023-revised limits in 4 of 30 samples (2 brown above the 0.250 mg/kg husked-rice limit, 2 white above the 0.150 mg/kg polished-rice limit). Under the USEPA-2025 revised reference dose (6×10⁻⁵ mg/kg-bw/day) and cancer slope factor (32 (mg/kg-bw/day)⁻¹), every rice sample's THQ > 1 and ILCR > 10⁻⁴ for Malaysian per-capita rice consumption (208 g/day), signalling potential non-carcinogenic and carcinogenic risks. The authors recommend that adults limit white rice intake to ≤33 g/day and brown rice to ≤21 g/day under THQ < 1, with stricter limits for children (9 g/day white, 6 g/day brown).

## Key numbers

**Sample population:** 30 rice samples (15 white, 15 brown), various brands and origins, purchased from local supermarkets in Klang Valley, Selangor, Malaysia, March-April 2022. Samples ground, sieved (< 250 µm), dried at 60 °C to constant weight.

**Per-species concentrations (mg/kg dry weight):**

| Species | Brown rice (n=15) | White rice (n=15) |
|---|---|---|
| AsIII (arsenite) | mean 0.184 ± 0.015; range 0.082-0.336 | mean 0.120 ± 0.004; range 0.092-0.148 |
| AsV (arsenate) | mean 0.015 ± 0.004; range 0.005-0.071 | mean 0.008 ± 0.001; range 0.003-0.012 |
| DMA (dimethylarsinic acid) | reported (subordinate to AsIII) | reported |
| MMA (monomethylarsonic acid) | excluded (recovery > 120%, unreliable) | excluded |
| **iAs (AsIII + AsV)** | **mean 0.199; range to ≥0.250 mg/kg** | **mean 0.128; range to ≥0.150 mg/kg** |

iAs across all 30 samples: range 0.096-0.352 mg/kg. Brown rice carried 56.8% higher mean iAs than white rice (p<0.05), attributed to iAs retention in the bran layer.

**EU regulatory exceedances (EU 2023/465 Commission Regulation):**
- EC limit for husked (brown) rice: 0.250 mg/kg iAs. Exceeded by 2/15 brown samples (MR 27, MR 29).
- EC limit for polished (white) rice: 0.150 mg/kg iAs. Exceeded by 2/15 white samples (MR 10, MR 14).
- EC limit for rice intended for infant food production: 0.010 mg/kg iAs. Exceeded by all 30 samples except MR 12 (0.096 mg/kg).

**Risk assessment** under USEPA 2025 revised toxicology benchmarks (RfD = 6×10⁻⁵ mg/kg-bw/day; CSF = 32 (mg/kg-bw/day)⁻¹):

| Population (Malaysia, 208 g/day rice) | EDI (mg/kg-bw/day) | THQ | ILCR |
|---|---:|---:|---:|
| Adults (70 kg) — white rice | 3.81e-4 | 6.35 | 1.22e-2 |
| Children (20 kg) — white rice | 1.33e-3 | 22.21 | 4.27e-2 |
| Adults (70 kg) — brown rice | 5.97e-4 | 9.95 | 1.91e-2 |
| Children (20 kg) — brown rice | 2.09e-3 | 34.82 | 6.69e-2 |

THQ > 1 and ILCR > 10⁻⁴ in all four scenarios. Authors emphasize that recent studies using the older RfD (3×10⁻⁴) and CSF (1.5) underestimate iAs risk by a factor of approximately 5x (RfD) and 20x (CSF) under the revised toxicology values.

**Recommended consumption ceiling** (USEPA 2025 RfD-based, THQ ≤ 1):

| Population | White rice (kg/day) | Brown rice (kg/day) |
|---|---:|---:|
| Adults (70 kg) | 0.033 | 0.021 |
| Children (20 kg) | 0.009 | 0.006 |

For a child (20 kg), 6-9 g/day of rice is the THQ < 1 ceiling — substantially below typical Malaysian per-capita rice consumption (208 g/day).

## Methods

HPLC-ICP-MS with optimized 4-minute isocratic separation. Column: Capcell Pak C18 MG 100 Å (150 × 4.6 mm); guard column: 3.0 mm × 4 mm. Mobile phase: 2 mM 1-octanesulfonic acid sodium salt + 2 mM malonic acid + 4 mM tetramethylammonium hydroxide solution, pH 4.1 ± 0.02, flow 1.0 mL/min. Injection 20 µL. ICP-MS NexION 2000 (PerkinElmer); RF 1600 W; monitored ion m/z 91 (⁷⁵As¹⁶O⁺ via dynamic reaction cell to avoid argon chloride interference).

Sample digestion: 1.0 g rice + 10 mL 0.2 % (v/v) HNO₃, two 5 mL aliquots, vortex, heat-block 90 °C × 1 h 30 min, cool, centrifuge 4000 rpm × 30 min, supernatant + 9 mL mobile phase, 0.22 µm + 0.45 µm filtration, first mL discarded. Calibration 0.25-20.0 µg/L, R² ≥ 0.999. LOD 0.114-0.398 µg/kg, LOQ 0.345-1.207 µg/kg. CRM SRM 1568b Rice Flour recovery 74.5-108.6 % at three spike levels (3, 8, 15 µg/L); within ICH 70-120 % acceptance range. MMA excluded due to anomalous recoveries (405-453 %, attributed to matrix interferences). Total arsenic was estimated as the sum of measured species (AsIII + AsV + DMA), not via separate total-As digestion.

## Implications

Certification: For HMTc rice-containing baby-food rows (baby-cereals-dry-rice-based, mixed-meals-rice-containing, infant-cereal), this paper supports the literature evidence that iAs in commercial rice routinely exceeds the EU 2023 infant-food limit (0.010 mg/kg) by 10-30x in regions without dedicated low-iAs sourcing. The four EU-exceeding samples in this dataset are evidence that even the (more permissive) general-rice EU limits (0.150 / 0.250 mg/kg) catch some commercial rice. HMTc thresholds for rice-based infant cereal should anchor on the FDA 100 ppb infant-rice-cereal action level (FDA Closer-to-Zero), not on the higher general-rice EU limits.

The risk assessment using USEPA 2025 revised toxicology values (RfD 6×10⁻⁵; CSF 32) is particularly important: it shows that earlier risk assessments using the older RfD (3×10⁻⁴) and CSF (1.5) underestimate child iAs risk by approximately 5-20x. HMTc Cat 1 standards briefings should reference the revised values, not the legacy ones.

Courses: Excellent case study for an HPLC-ICP-MS speciation methods module. The MMA-recovery anomaly is a teachable troubleshooting example.

App: For the consumer app, brown rice carries 56.8 % more mean iAs than white rice — substantial guidance for the rice ingredient mapping. Geographic origin matters less than processing form (brown vs white); the bran layer is the primary iAs reservoir.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
- [[ingredients/rice-flour]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/mixed-meals-rice-containing]]
- [[regulations/eu2023-contaminants-maximum-levels]] (EU 2023/465 amendment to 2023/915)
- [[regulations/fda-iAs-rice-cereal-2020]] (related)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 5 sections added; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 5 sections removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [1d50bf6a4](https://github.com/paleofoundation/heavymetalindex/commit/1d50bf6a4) | 2026-05-15 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
