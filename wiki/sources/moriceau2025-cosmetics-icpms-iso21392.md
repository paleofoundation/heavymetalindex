---
type: source
raw_handle: MFK_thermo-fisher-heavy-metals-cosmetics
cite_key: moriceau2025-cosmetics-icpms-iso21392
title: "Measurement of traces of heavy metals in cosmetic raw materials and finished products according to ISO/DIS 21392:2021 using triple quadrupole ICP-MS"
authors: [Moriceau J, Naëls L]
year: 2025
publication: "Thermo Fisher Scientific Application Note 003602"
doi: null
no_doi_assigned: true
source_type: industry-application-note
evidence_tier: C
license: "vendor application note — © 2025 Thermo Fisher Scientific Inc."
access_url: "https://www.thermofisher.com/icp-ms"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Thermo_Fisher_Heavy_Metals_Cosmetics.pdf"
metals: [Pb, Cd, tAs, tHg, Cr, Ni, Sb, Al, Sn, Co, Mn, Fe, Zn, Be, Se, Tl, Ti, W, Pt]
ingredients: []
products: ["[[products/toothpaste]]", "[[products/lipstick]]", "[[products/fragrance-preparations]]"]
matrices: [cosmetic-finished-product, cosmetic-personal-care]
jurisdictions: [EU, FR]
near_duplicates: []
sample_n: 27
sample_population: "17 finished cosmetic products sold on the French and European market (creams, gels, pastes, liquids, varnishes, solids) plus 10 raw materials used in cosmetic formulation (iron oxide mica, titanium dioxide anastase and rutile, iron oxide mica/aluminum oxide, hollow silica sphere, ophiopogon japonicus root extract, titanium dioxide/iron oxide/silica, mica pellets coated with iron and titanium, white powder A, white powder B). The paper's narrative on p. 2 states 'eight samples were raw materials' but Tables 2 and 6 enumerate ten — recorded here as 10 per the tables."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-01
---

# Moriceau and Naëls 2025 — ICP-MS heavy-metals measurement in cosmetic raw materials and finished products per ISO/DIS 21392:2021

## Overview

This Thermo Fisher Scientific application note (AN003602, January 2025) demonstrates a triple-quadrupole ICP-MS workflow on a Thermo Scientific iCAP MTX instrument for quantifying 19 trace elements in cosmetic products following ISO/DIS 21392:2021. Seventeen finished cosmetics from the French and European market and eight cosmetic raw materials were digested by microwave (Milestone ultraWAVE SRC) and analyzed in both KED and TQ-O₂ modes. The note's primary contribution is methodological — showing that TQ-O₂ mode eliminates tungsten-on-mercury (¹⁸⁴W¹⁶O¹H⁺ on ²⁰¹Hg) and zirconium-on-cadmium (⁹⁴Zr¹⁶O¹H⁺ on ¹¹¹Cd) polyatomic interferences that KED mode cannot fully suppress — but it also reports concentrations for seven aggregated finished-product categories and ten raw materials, useful as occurrence context.

## Key numbers

- Study design: 27 samples total — 17 finished products + 10 raw materials (the paper's narrative says "eight" raw materials, but Tables 2 and 6 enumerate ten; the ten-row tabulation is treated as authoritative). Sample preparation per ISO/DIS 21392:2021: 200 mg sample digested with 1 mL H₂O + 5 mL HNO₃ + 1 mL HCl, digestate transferred to 50 mL with ultrapure water then 4× further dilution to 200 mL final volume in 2.5% HNO₃ / 0.5% HCl; total dilution factor ×1000 (p. 3 Table 3; p. 2 narrative).
- Method quantification limits (MQL, mg·kg⁻¹), Table 4 (p. 4): Pb 0.004, Cd 0.010, As 0.031, Hg 0.017, Cr 0.041, Ni 0.115, Sb 0.010, Al 1.118, Sn 0.047, Co 0.002, Tl 0.002, Se 0.718, Be ≤0.001, Mn 0.005, Fe 0.149, Zn 0.232, Ti 1.169, Pt 0.023, W 0.101.
- Acquisition mode: Pb, Co, Ni, Sn, Sb, Be, Al, Fe, Tl, Pt, W used SQ-KED; Cr, Mn, As, Se, Cd, Zn, Ti, Hg used TQ-O₂ with on-mass measurement after O₂ reaction (Table 4 p. 4).
- EU regulatory ceilings cited (Regulation EC 1223/2009, p. 2): Cr 10, Pb 10, As 5, Cd 5, Hg 1 mg·kg⁻¹.
- Finished-product concentrations (Table 5, p. 5), reported as the range across samples in each aggregated category, mg·kg⁻¹:
 - Nail varnish (3 varnish samples): Pb 0.17-0.64; Cd <MQL-0.01; As <MQL; Hg <MQL; Cr 0.17-0.29; Ni 0.12-0.20; Sb <MQL-0.02; Sn 0.02-0.25; Al 667-1,079; Ti 10.4-364; Fe 256-352; Mn 1.09-49.6; Zn 11.5-46.4; Co 0.04-0.06.
 - Balm and lipstick (lip balm + 1 other solid lip product, n unstated for the category): Pb <MQL-0.86; Cd <MQL-0.04; As <MQL-0.09; Hg <MQL; Cr 0.01-0.37; Ni 0.01-0.33; Sb <MQL-0.08; Sn 0.01-18.1; Al <MQL-311; Ti 0.01-332; Fe 0.01-138; Mn 0.01-5.01; Zn <MQL-54.8; Co 0.01-0.09.
 - Perfumes (perfume mist, hair perfume, eau de cologne, solid perfume, perfume, eau de toilette, eau de parfum): Pb 0.01-5.59; Cd <MQL; As <MQL; Hg <MQL; Cr <MQL-21.6; Ni <MQL-20.5; Sb <MQL-0.01; Sn <MQL-0.23; Al 0.08-33.0; Ti <MQL-6.44; Fe <MQL-89.4; Mn 0.01-2.14; Zn 0.03-76.8; Co <MQL-0.39.
 - Toothpaste (n=1): Pb 0.85; Cd <MQL; As <MQL; Hg <MQL; Cr 0.65; Ni <MQL; Sb <MQL; Sn 0.77; Al 31.6; Ti 4.77; Fe 15.0; Mn 0.26; Zn 27.1; Co 0.04.
 - Micellar water (n=1): Pb 0.17; Cd <MQL; As <MQL; Hg <MQL; Cr <MQL; Ni <MQL; Sb <MQL; Sn <MQL; Al <MQL; Ti 0.55; Fe <MQL; Mn 0.07; Zn 11.0; Co <MQL.
 - Cream and gel (scrub cream, hand cream, pink clay mask, exfoliating cleansing gel): Pb 0.27-2.30; Cd <MQL; As <MQL; Hg <MQL; Cr <MQL-8.00; Ni <MQL; Sb <MQL; Sn <MQL-0.67; Al <MQL-11,344; Ti 1.62-308; Fe <MQL-955; Mn 0.02-3.80; Zn 13.2-1,677; Co <MQL-0.37.
 - Nourishing body milk (n=1): Pb 0.19; Cd <MQL; As <MQL; Hg <MQL; Cr <MQL; Ni <MQL; Sb <MQL; Sn <MQL; Al <MQL; Ti 1.42; Fe <MQL; Mn 0.03; Zn 16.3; Co <MQL.
- Notable finished-product highs: perfume Pb max 5.59 mg·kg⁻¹ (within EU 10 mg·kg⁻¹ ceiling); cream/gel Al max 11,344 mg·kg⁻¹ and Zn max 1,677 mg·kg⁻¹ (no EU ceiling for either); perfume Cr max 21.6 mg·kg⁻¹ (above the EU 10 mg·kg⁻¹ ceiling); perfume Ni max 20.5 mg·kg⁻¹; balm/lipstick Sn max 18.1 mg·kg⁻¹.
- Raw-material concentrations (Table 6, p. 5), mg·kg⁻¹ unless noted as % w/w; digestion incomplete for 9 of 10 raw materials (Ophiopogon japonicus root the only complete digestion):
 - Iron oxide mica: Pb 4.63; Cd <MQL; As 0.21; Hg <MQL; Cr 8.18; Ni 11.3; Sb 0.16; Sn 56.0; Al 5.8% (w/w); Ti 258; Fe 18.0% (w/w); Mn 165; Zn 97.9; Co 3.37; W 14.0; Be 6.58; Tl 1.58.
 - Titanium dioxide (anastase form): Pb 0.66; Cd <MQL; As <MQL; Hg <MQL; Cr <MQL; Ni 0.11; Al 14.1; Ti 212; Fe 15.6; Mn 0.07; Zn 0.93.
 - Iron oxide mica / aluminum oxide blend: Pb 5.51; Cd <MQL; As 0.14; Hg <MQL; Cr 5.84; Ni 2.69; Sn 21.8; Al 5.2% (w/w); Ti 196; Fe 16.8% (w/w); Mn 28.4; Zn 15.8; Co 3.09; W 10.9; Be 3.74; Tl 0.55.
 - Hollow silica sphere: Pb 2.78; Cd <MQL; As <MQL; Hg <MQL; Cr 0.28; Ni 0.26; Al 6.17; Ti 2.71; Fe 17.8; Mn 0.17; Zn 42.8; Sb 0.03.
 - Ophiopogon japonicus root extract (complete digestion): Pb 0.05; Cd 0.04; As 0.62; Hg <MQL; Cr 0.14; Ni 0.32; Al 23.8; Ti 0.63; Fe 11.5; Mn 17.2; Zn 5.12; Co 0.08; Sb 0.02.
 - White powder A: Pb 4.20; Cd <MQL; As 0.09; Hg <MQL; Cr 3.50; Ni 1.95; Al 8.68; Ti 194; Fe 26.2; Mn 0.60; Zn 24.9; Co 0.26; Sn 0.05.
 - White powder B: Pb 4.08; Cd <MQL; As <MQL; Hg <MQL; Cr 5.01; Ni 2.63; Al 7.00; Ti 180; Fe 36.2; Mn 0.78; Zn 22.8; Co 0.12.
 - Titanium dioxide (rutile form): Pb 2.26; Cd <MQL; As <MQL; Hg <MQL; Cr 0.50; Ni 0.15; Al 0.1% (w/w); Ti 246; Fe 7.90; Mn 1.23; Zn 32.8; Pt 0.11.
 - Titanium dioxide / iron oxide / silica blend: Pb 4.35; Cd <MQL; As <MQL; Hg <MQL; Cr 15.7; Ni 17.8; Sn 160.8; Al 3.2% (w/w); Ti 249; Fe 10.7% (w/w); Mn 376; Zn 39.8; Co 5.12; Be 0.82; Tl 0.27.
 - Mica pellets coated with iron and titanium: Pb 5.96; Cd <MQL; As <MQL; Hg <MQL; Cr 3.04; Ni 4.62; Sn 5.02; Al 1.8% (w/w); Ti 422; Fe 19.4% (w/w); Mn 851; Zn 36.0; Co 3.94; Be 0.64; Tl 0.19.
- Tungsten-on-mercury interference demonstration (Table 8, p. 6): in iron oxide mica (W = 14.0 mg·kg⁻¹) KED-mode ²⁰¹Hg = 33.48 mg·kg⁻¹ but TQ-O₂ mode <0.017 mg·kg⁻¹ (the MQL); in iron/aluminum oxide (W = 10.9 mg·kg⁻¹) KED-mode ²⁰¹Hg = 31.49 mg·kg⁻¹ but TQ-O₂ <0.017 mg·kg⁻¹. The KED-mode values exceed the EU 1 mg·kg⁻¹ Hg ceiling by ~30×; TQ-O₂ reveals no Hg is actually present.
- Zirconium-on-cadmium interference demonstration (Figure 6, p. 8): zero added Zr → ¹¹¹Cd KED 0; +1 µg·g⁻¹ Zr → ¹¹¹Cd KED 0.54 µg·g⁻¹ (false positive), TQ-O₂ ~0; +10 µg·g⁻¹ Zr → ¹¹¹Cd KED 5.20 µg·g⁻¹ (false positive), TQ-O₂ 0.06 µg·g⁻¹.
- Spike recovery (Figure 7, p. 9): per-element recovery across 16 finished-product matrices ranged 60-105% for the seven measured isotopes (⁵²Cr, ⁵⁹Co, ⁶⁰Ni, ⁷⁵As, ¹¹¹Cd, ¹²¹Sb, ²⁰⁸Pb); the source narrative claims all within the 70-150% ISO/DIS 21392:2021 acceptance window, but the data table shows three sub-70% values on a single sample, Hair perfume (⁵²Cr 67%, ⁵⁹Co 69%, ⁶⁰Ni 60%); all other 15 samples are within the 70% floor for all seven isotopes.
- Internal standard stability over >120 samples / >8 h: 80-110% recovery for all five internal standards (⁷³Ge, ¹⁰³Rh, ¹¹⁵In, ¹⁷⁵Lu, ¹⁹³Ir) in both KED and TQ-O₂ modes (Figure 1, p. 4), well within the 70-130% ISO/DIS 21392:2021 robustness window.

## Methods (brief)

Instrument: Thermo Scientific iCAP MTX triple-quadrupole ICP-MS with iSC-65 autosampler, iCAP MX Series Nebulizer, Ni-tipped sample and skimmer cones, PLUS torch, cyclonic quartz spray chamber. Operated with Argon Gas Dilution (AGD level-5, ~5× automatic dilution) to manage variable total dissolved solids across cosmetic matrices. Two acquisition modes: SQ-KED (collision, helium 4.91 mL·min⁻¹) and TQ-O₂ (reaction, 0.31 mL·min⁻¹) on the same run. RF power 1,550 W; 3 replicates per sample (Table 1, p. 2).

Sample preparation per ISO/DIS 21392:2021: microwave-assisted acid digestion (Milestone ultraWAVE Single Reaction Chamber system); reagents dispensed by Milestone EasyFILL (1 mL H₂O + 5 mL HNO₃ + 1 mL HCl per 200 mg sample); 200 °C plateau for 30 min. Note that complete digestion was not achieved for 9 of 10 raw materials (silica/mica/oxide deposits persisted); for those samples the reported concentrations represent the acid-leachable fraction rather than total elemental content. Digestate diluted to 50 mL with ultrapure water, then 4× further dilution and 0.45 µm membrane filtration before injection. Internal standards (¹⁰³Rh for Cr/Co/Ni/As/Cd/Sb; ¹⁷⁵Lu for Pb per the ISO standard, plus ⁷³Ge/¹¹⁵In/¹⁹³Ir added by the authors for robustness check) introduced online at 1,000 µg·L⁻¹ before nebulization.

Speciation discipline: 75As measured as ⁷⁵As¹⁶O⁺ product ion in TQ-O₂ — this is total arsenic, no inorganic/organic speciation performed (recorded as `tAs`). Mercury measured on ²⁰¹Hg in TQ-O₂ mode — this is total mercury, no methylmercury speciation (recorded as `tHg`). Chromium measured on ⁵²Cr¹⁶O⁺ product ion — this is total chromium, no Cr-VI / Cr-III separation (recorded as `Cr`). Tin measured on ¹¹⁸Sn in SQ-KED — total tin, no organotin speciation (recorded as `Sn`).

Calibration: standards 0.5-10 µg·L⁻¹ in matched acid matrix (2.5% HNO₃ / 0.5% HCl) for trace elements; up to 2,500 µg·L⁻¹ for the high-concentration elements (Al, Ti, Fe). R² ≥0.9964 for all 19 analytes (W is the lowest at R² 0.9964; Be is 0.9986; Al, Ti, Zn, Sn at R² >0.9999; the rest fall between; Table 4 p. 4). Accuracy validated by spike-recovery on the 16 finished-product matrices (Figure 7, p. 9). LOD and MQL reported in Table 4.

Limitations: (1) Sample selection is convenience, not representative — 25 samples drawn from the authors' lab to demonstrate workflow; not designed as an occurrence survey. (2) Incomplete digestion for raw materials means raw-material values are minimum estimates of total content. (3) Speciation is absent for As, Hg, Cr, Sn. (4) The note is a vendor publication promoting Thermo Scientific instruments; reported figures of merit reflect the demonstration laboratory's optimized conditions.

## Implications

- Certification (HMTc): Method-validation reference for the ISO/DIS 21392:2021 analytical approach now widely adopted in cosmetic regulatory labs. The demonstration that KED-mode Hg in tungsten-containing raw materials produces >30× false-positive concentrations is operationally important — labs relying on KED-only quadrupole ICP-MS for cosmetics analysis may be over-reporting Hg in mica- and tungsten-bearing finished products. Auditors of [[products/childrens-makeup]], [[products/childrens-nail-polish]], [[products/makeup-foundation-powders-blush]], and other mica-pigment-using product categories should ask whether the lab used reaction-cell mode for Hg. The reported finished-product concentrations (Table 5) are occurrence context only, not population-level evidence (n=1 per category for toothpaste, micellar water, body milk; n=17 total across all categories).
- Courses: Useful methods-module reading for a cosmetic-QA / analytical-chemistry course unit on triple-quadrupole ICP-MS interference removal, particularly for instructors covering W/Mo/Zr-based polyatomic interferences on Hg and Cd.
- App: Not relevant to ingredient `contamination_profile` (cosmetics are not in the food-ingredient taxonomy).

## Related evidence

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/antimony]]
- [[metals/aluminum]]
- [[metals/tin]]
- [[products/toothpaste]]
- [[products/lipstick]]
- [[products/fragrance-preparations]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
