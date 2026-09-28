---
type: source
raw_handle: papers-cube
cite_key: saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta
title: "Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products"
authors: [Saraiva M, Chekri R, Leufroy A, Guérin T, Sloth JJ, Jitaru P]
year: 2021
publication: "Talanta 222 (2021) 121538"
doi: 10.1016/j.talanta.2020.121538
source_type: peer-reviewed
evidence_tier: A
license: paywalled
access_url: "https://doi.org/10.1016/j.talanta.2020.121538"
raw_path: "raw/Papers Cube Manual Fetch/saraiva2021.pdf"
raw_sha256: 9ded73cb42640c770af4a6ccc818b6760fd07f47ba45b4acce26c5263d6d4e46
metals: [Cr, Cr-VI]
ingredients: ["[[ingredients/infant-formula-rtf-liquid]]", "[[ingredients/semi-skimmed-milk]]", "[[ingredients/beef]]"]
products: ["[[products/infant-formula-rtf-liquid-non-soy]]"]
matrices: [infant-formula, semi-skimmed-milk, beef-muscle]
jurisdictions: [FR, DK]
near_duplicates: ["[[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france]]", "[[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp]]"]
sample_n: 3
sample_population: "Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL composite, homogenised 4 h on rotary shaker), semi-skimmed milk (500 mL composite, same homogenisation), and steak beef (≈1 kg composite, homogenised in stainless-steel mixer with titanium blades). Each composite was analysed in n=2 replicates for total Cr (by accredited ICP-MS) and n=5 replicates for Cr(III)/Cr(VI) speciation (by SS-ID-HPLC-ICP-MS), plus spiked replicates at 0.25 µg/kg (baby milk), 1.0 µg/kg (semi-skimmed milk), and 0.5 µg/kg (steak beef) Cr(VI) for recovery assessment."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Saraiva et al. 2021 — Single-run SS-ID-HPLC-ICP-MS method for Cr(III)/Cr(VI) speciation in meat and dairy

## Overview

This A-tier analytical-methods paper develops and validates a species-specific isotope-dilution (SS-ID) HPLC-ICP-MS method for simultaneous quantification of Cr(III) and Cr(VI) in meat and dairy food matrices, with mathematical correction for species interconversion during sample preparation. Sequential complexation of Cr(III) with ethylenediaminetetraacetic acid (EDTA) and Cr(VI) with 1,5-diphenylcarbazide (DPC) is followed by anion-exchange HPLC separation (<3 min) and ICP-MS detection using ⁵⁰Cr(III) and ⁵³Cr(VI) isotopically enriched spikes. The method was applied to three real food matrices — baby milk, semi-skimmed milk and steak beef — purchased in retail shops in Maisons-Alfort, France: Cr(VI) was not quantified in any sample at LOQ 0.049 µg/kg, while Cr(III) levels (2.64–4.73 µg/kg) matched independently measured total Cr (2.30–4.65 µg/kg) within combined uncertainty, supporting the EFSA position that chromium in these foodstuffs is present solely as Cr(III). This Talanta paper is the methodological foundation for the same authors' companion application papers in *Food Additives & Contaminants Part A* (raw/cooked milk and meat, n=30) and *Journal of Food Composition and Analysis* (bread and breakfast cereals).

## Key numbers

### Method performance (Table 2, validated for SS-ID-HPLC-ICP-MS)

| Analyte | Matrix | Mean level (µg/kg) | Bias (%) | CV<sub>r</sub> Level 1 (%) | CV<sub>r</sub> Level 2 (%) | CV<sub>R</sub> Level 1 (%) | CV<sub>R</sub> Level 2 (%) | LOD (µg/kg) | LOQ (µg/kg) |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Cr(III) | Baby milk | 2.70 | −0.01 | 11.6 | 10.8 | 11.6 | 11.4 | 0.0042 | 0.014 |
| Cr(III) | Semi-skimmed milk | 4.31 | −0.11 | 8.2 | 6.8 | 8.2 | 6.8 | 0.0042 | 0.014 |
| Cr(III) | Steak beef | 4.67 | −0.08 | 11.2 | 2.9 | 13.0 | 8.1 | 0.0042 | 0.014 |
| Cr(VI) | Baby milk | 0.26 | −0.02 | 8.2 | 11.2 | 13.7 | 11.4 | 0.015 | 0.049 |
| Cr(VI) | Semi-skimmed milk | 0.82 | −0.09 | 8.8 | 11.8 | 25.9 | 11.8 | 0.015 | 0.049 |
| Cr(VI) | Steak beef | 0.54 | −0.05 | 6.7 | 10.0 | 6.8 | 10.0 | 0.015 | 0.049 |

Level 1 = <2 × LOQ; Level 2 = ≥2 × LOQ; 0.3 g sample weight. Bias |·| <0.1% in all cases.

### Interconversion factors (Table 3, n=12 over 6 days)

| Sample | Level | α — Cr(III)→Cr(VI) oxidation (%) | β — Cr(VI)→Cr(III) reduction (%) |
| --- | ---: | ---: | ---: |
| Standard solution at LOQ level | 0.030 µg/L Cr(III) / 0.049 µg/L Cr(VI) | 25 ± 18 | 55 ± 17 |
| Baby milk | 2.70 µg/kg | 0 | 111 ± 10 |
| Semi-skimmed milk | 4.31 µg/kg | 0 | 112 ± 11 |
| Steak beef | 4.67 µg/kg | 0 | 110 ± 6 |

The standard solution row reports the analyte concentration in solution (µg/L) per the paper's footnote c; the food-matrix rows report genuine Cr(III) levels as mass fractions (µg/kg) per footnote b.

α = 0 in every food matrix tested (no Cr(III) → Cr(VI) oxidation during analysis). β values >100% reflect complete reduction of Cr(VI) to Cr(III) under the reducing conditions of the food matrix, which SS-ID corrects for mathematically; this is the central reason single-spike speciation methods over-report Cr(III) and under-report Cr(VI), and why simultaneous-double-spike SS-ID is the only approach that can deliver accurate Cr(VI) numbers in reducing matrices.

### Cr(Tot) and speciation values in genuine samples (Table 4, mass fraction ± expanded uncertainty k=2)

| Sample | Cr(Tot) by ICP-MS (µg/kg, n=2) | Cr(III) by SS-ID (µg/kg, n=5) | Cr(VI) by SS-ID (µg/kg, n=5) |
| --- | ---: | ---: | ---: |
| Baby milk | 2.30 ± 0.33 | 2.64 ± 0.26 | < LOQ (0.049) |
| Semi-skimmed milk | 4.40 ± 0.62 | 4.45 ± 0.27 | < LOQ (0.049) |
| Steak beef | 4.65 ± 0.66 | 4.73 ± 0.34 | < LOQ (0.049) |

Cr(III) ≈ Cr(Tot) within combined uncertainty in all three matrices, confirming that Cr is present solely as Cr(III) in these foodstuffs (no detectable Cr(VI) at the sub-50 ng/kg sensitivity floor).

### Spiked-sample recovery (Table 5, n=5)

| Sample | Cr(VI) spike level (µg/kg) | Cr(III) found (µg/kg) | Cr(VI) found (µg/kg) | Cr(VI) recovery R (%) | Cr(III)+Cr(VI) (µg/kg) | Mass balance vs Cr(Tot) (%) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Baby milk | 0.25 | 2.70 ± 0.27 | 0.26 ± 0.03 | 104 ± 10 | 2.96 | 108 |
| Semi-skimmed milk | 1.0 | 4.41 ± 0.73 | 0.82 ± 0.09 | 82 ± 8 | 5.23 | 101 |
| Steak beef | 0.5 | 4.67 ± 0.34 | 0.54 ± 0.05 | 107 ± 15 | 5.21 | 104 |

Mass balance 101–108% confirms truthfulness of the SS-ID-HPLC-ICP-MS method by independent agreement with the accredited ICP-MS total-Cr value.

### Optimised chromatographic conditions (Table 1)

- Column: Dionex IonPac AG7 (2 mm i.d. × 50 mm, 10 µm particles)
- Mobile phase: 10 mmol/L HNO₃ + 2.5% (v/v) MeOH + 0.30 mmol/L EDTA, pH 2
- Flow rate: 0.20 mL/min; injection 20 µL; isocratic elution; total acquisition 5 min
- Column temperature 30 ± 1 °C; injector 5 ± 3 °C
- Baseline resolution (R ≥ 1.5) between Cr(III)-EDTA and Cr(III)-DPCO complexes achieved in <3 min

## Methods (brief)

**Sample preparation.** Steak beef (≈1 kg) was homogenised in a Retsch Grindomix GM 200 mixer (Haan, Germany) with titanium blades; baby milk and semi-skimmed milk (500 mL each) were homogenised for 4 h on a Heidolph reax 2 rotary shaker (Merck KGaA, Darmstadt). One third of each composite was used for method optimisation (storage ≈5 °C); the rest was reserved for validation. Baby milk (500 mL) was spiked with 0.25 ng/mL Cr(VI); semi-skimmed milk (500 mL) with 1 ng/mL; steak beef (200 g) with 0.5 ng/g. Spike and standard solutions were kept at −18 °C in the dark.

**Total Cr by ICP-MS (external calibration).** Accredited method (Saraiva et al., Food Chem. 2018, 240:183–188, ref [37]). Microwave digestion of ≈0.5 g meat or 2.0 g milk with 3 mL concentrated HNO₃ in quartz vessels (Anton Paar Multiwave 3000) overnight; Sc as internal standard at 1000 mg/L; calibration 1.0–10 µg/L (1, 2.5, 5, 7.5, 10). ICP-MS Agilent 7700 with third-generation octopole reaction system and CETAC ASX-500 autosampler.

**Cr(III)/Cr(VI) speciation by SS-ID-HPLC-ICP-MS.** A 0.3 g aliquot was placed in a 50 mL polypropylene tube with the required volumes of ⁵⁰Cr(III) and ⁵³Cr(VI) isotopically enriched spikes (ISC Science, Oviedo, Spain; 100 µg/mL); 16 mL of 0.9 g/L EDTA solution (final 2.4 mM) was added; the mixture was heated at 70 °C for 25 min, cooled ≈15 min, then 200 µL of 0.5 g/L DPC solution was added; total volume was made to 20 mL with ultrapure water and heated again at 70 °C for 25 min. Extracts were filtered through 0.45 µm PVDF syringe filters (Merck Millipore) prior to HPLC.

Separation: Dionex ICS-5000⁺ HPLC equipped with Dionex IonPac AG7 column (2 mm × 50 mm × 10 µm, ThermoFisher Scientific); mobile phase 10 mmol/L HNO₃ + 2.5% (v/v) MeOH + 0.30 mmol/L EDTA at pH 2, isocratic 0.20 mL/min, total run 5 min, baseline resolution in <3 min.

Detection: ICP-MS iCAP Q (ThermoFisher Scientific, Courtaboeuf, France) with PFA standard nebuliser, cyclonic quartz spray chamber, and kinetic energy discrimination (KED) using He as collision gas. HPLC outlet directly connected to ICP-MS via 0.18 mm i.d. PEEK tubing (80 cm). Monitored isotopes ⁵⁰Cr, ⁵²Cr, ⁵³Cr, ¹³C; dwell time 250 ms; plasma 1550 W. Data processed in ThermoFisher Qtegra. Isotope-ratio measurements corrected for mass bias factor (k) per Eq. 7 using a daily mixture of natural-abundance Cr(III) and Cr(VI) standards (5.0 and 2.5 ng/L respectively). Equilibration of analytes and spikes was achieved by manual shaking 10 min + 15 min standing.

**Validation.** Accuracy-profile approach (NF V03-110, AFNOR 2010; Feinberg 2010 ref [40]) with six measurement series in duplicate over 6 days across 2 months. β-expectation tolerance interval set to 80–90%; acceptability limits λ at ±30%. Levels of validity domain: ½ × LOQ, LOQ, 2 × LOQ for standard solutions plus three spiked sample levels. Intermediate-precision CV<sub>R</sub> obtained from accuracy profile via intra/inter-series SDs (Eqs. 2–4). Expanded uncertainty calculated per Eq. 5 with coverage factor k=2. LOD = 3/10 × LOQ as derived from the accuracy-profile-validated LOQ.

**Limits.** LOD Cr(III) = 0.0042 µg/kg; LOQ Cr(III) = 0.014 µg/kg; LOD Cr(VI) = 0.015 µg/kg; LOQ Cr(VI) = 0.049 µg/kg (sample weight 0.3 g). The Cr(VI) LOQ is ≈3× the Cr(III) LOQ owing to lower instrumental sensitivity and signal-to-noise ratio for the DPCO complex.

## Implications

**Certification.** This Talanta paper contributes the analytical foundation for Cr(VI) quantification in dairy and meat at the sub-50 ng/kg sensitivity floor. The methodological contribution — α = 0% (no oxidation) and β = 110–112% (complete reduction, mathematically corrected by SS-ID) in food matrices — is what the paper itself frames as the prerequisite for accurate Cr(VI) numbers in reducing matrices: the authors' introduction (citing Milačič and Ščančar 2020) attributes prior Cr(VI) detections in milk/meat/bread/cereals/tea/mushrooms (Figueiredo 2007, Ambushe 2009, Soares 2010, Mandiwana 2011, Pyrżyńska 2017, Mathebula 2017, Chen 2020, Shittu 2020) to analytical artefacts of pre-SS-ID methods. The baby-milk single-composite result (Cr(VI) <0.049 µg/kg; Cr(III) = 2.64 µg/kg ≈ Cr(Tot) = 2.30 µg/kg) contributes occurrence evidence for the infant-formula RTF liquid product category. The paper's conclusion explicitly supports the EFSA statement that Cr in this type of samples is found solely as Cr(III).

**Courses.** Strong teaching exemplar for (a) the species-specific isotope-dilution principle, (b) why simultaneous speciation methods that do not correct for interconversion under-report Cr(VI) in reducing matrices, (c) accuracy-profile method validation per NF V03-110, and (d) the EDTA/DPC sequential complexation chemistry. Figures 1 (reaction schemes), 2 (pH optimisation), 4 (chromatogram of standard mixture at 5 µg/kg), and 6 (chromatograms of real samples) are course-grade illustrative material.

**App.** Reinforces the consumer-app design assumption that total Cr in dairy and meat can be interpreted as Cr(III) for risk purposes; Cr(VI) is not present at detectable levels in these matrices when the most rigorous available method is applied. The numerical anchor is "Cr(VI) <0.049 µg/kg" rather than a positive value.

**Microbiome.** No direct microbiome endpoint measured. Cr(III) at the levels reported (2–5 µg/kg) is below the dose range where gut-axis modulation has been reported, so this paper does not contribute to a microbiome synthesis.

## Related evidence
- [[metals/chromium]]
- [[metals/chromium-hexavalent]]
- [[ingredients/semi-skimmed-milk]]
- [[ingredients/beef]]
- [[ingredients/infant-formula-rtf-liquid]]
- [[products/infant-formula-rtf-liquid-non-soy]]
- [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france]] (companion application paper, raw/cooked food samples n=30)
- [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp]] (companion application paper, bread and breakfast cereals)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
