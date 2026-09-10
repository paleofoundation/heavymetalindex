---
type: source
raw_handle: MFD_czarnek2024-heavy-metals-energy-drinks-nutrients
cite_key: czarnek2024-heavy-metals-energy-drinks
title: "Nutritional Risks of Heavy Metals in the Human Diet—Multi-Elemental Analysis of Energy Drinks"
authors: ["Czarnek K", "Tatarczak-Michalewska M", "Wójcik G", "Szopa A", "Majerek D", "Fila K", "Hamitoglu M", "Gogacz M", "Blicharska E"]
year: 2024
publication: "Nutrients"
doi: 10.3390/nu16244306
access_url: https://doi.org/10.3390/nu16244306
source_type: peer-reviewed
evidence_tier: B
license: "CC BY"
raw_path: "raw/Manual Fetch Discovery/czarnek2024-heavy-metals-energy-drinks-nutrients.pdf"
raw_sha256: d0668029786552a4074dfe45d3f16d74297fe6ea75af6234842f3c209db35757
metals: [Pb, Cd, tAs, Cr, Ni, Al, Cu, Mn, Fe, Zn, Co, V, Sr, Ba, B]
ingredients: []
products: ["[[products/sports-energy-drinks]]"]
matrices: [energy-drinks, aluminum-can-leachate]
jurisdictions: [PL]
near_duplicates: []
sample_n: 27
sample_population: "Nine commercially available energy-drink brands (anonymised ED1–ED9) sold in Lublin, Poland; all in aluminum cans; selected as the most popular and widely consumed brands based on market data. Each brand sampled in triplicate (n=3 per product, n=27 total analytical measurements)."
updated: 2026-06-06
---

# Czarnek et al. 2024 — Multi-elemental analysis of nine energy drinks from the Polish market

## Overview

Czarnek and colleagues (John Paul II Catholic University of Lublin; Medical University of Lublin; Maria Curie-Skłodowska University; Jagiellonian University; Lublin University of Technology; University of Life Sciences Lublin; Yeditepe University, Istanbul) quantified four macro-minerals (Na, K, Mg, Ca) and fifteen micro-minerals (B, Al, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, As, Sr, Cd, Ba, Pb) in nine commercially available energy-drink brands sold in Poland, all packaged in aluminum cans. Macro-minerals were measured by ICP-OES (Varian 720-ES) and micro-minerals by ICP-MS (Agilent Technologies 7700x), with each brand sampled in triplicate after microwave-assisted nitric-acid digestion. A toxicological risk assessment computed estimated daily intake (EDI), hazard quotients (HQ), cumulative hazard index (HI), and incremental lifetime cancer risk (ILCR) for adolescents (10–18 years, body weight 45 kg, intake 0.23 L/day) and adults (18–65 years, body weight 70 kg, intake 0.16 L/day). All HQ and HI values remained below the threshold of 1 for both age groups, but ILCR values for As, Cr, and Ni exceeded the 10⁻⁶ safe limit in multiple samples, with one sample (ED7) crossing the 10⁻⁴ high-cancer-risk threshold for arsenic in adolescents. The authors state this is the only study to date that has estimated carcinogenic risk from toxic-element exposure via energy-drink consumption.

## Key numbers

All concentrations are reported in the source as mg L⁻¹ for macro-minerals and µg L⁻¹ for micro-minerals, based on n=3 replicate measurements per energy drink (total n=27 measurements per analyte across the nine brands). Statistical analysis used R version 4.4.1 with the tidyverse and rstatix packages; the Kruskal–Wallis H test was used for non-parametric multi-group comparison and one-sample Student's t-tests with Bonferroni corrections were used to test individual brands against WHO, EU, and US EPA drinking-water normative values.

### Macro-mineral content across the nine energy drinks (Table 4, p. 6, mg L⁻¹, n=27)

| Element | Min | Max | Mean | SD | p.adj (Bonferroni) |
| --- | --- | --- | --- | --- | --- |
| Sodium (Na) | 8.62 | 619.85 | 377.16 | 223.25 | 0.00524 |
| Potassium (K) | 5.51 | 189.57 | 65.28 | 72.90 | 0.00552 |
| Magnesium (Mg) | 0.013 | 543.97 | 83.96 | 184.14 | 0.00476 |
| Calcium (Ca) | 2.54 | 116.1 | 23.15 | 35.66 | 0.00692 |

Magnesium showed the largest spread (0.013–543.97 mg L⁻¹), driven by ED9 which is enriched with this element at the production stage (543.97 mg L⁻¹) against a background of low single-digit values in other drinks.

### Micro-mineral content across the nine energy drinks (Table 5, p. 6–7, µg L⁻¹, n=27)

| Element | Min | Max | Mean | SD | p.adj | WHO drinking-water limit (µg L⁻¹) | EU drinking-water limit (µg L⁻¹) | US EPA drinking-water limit (µg L⁻¹) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Boron (B) | 194.01 | 796.82 | 432.28 | 186.54 | 1.00000 | 2400 | 1500 | 1400 |
| Aluminum (Al) | 227.54 | 456.97 | 297.32 | 67.18 | 0.43800 | N/A | 200 | 200 |
| Vanadium (V) | 0.29 | 10.44 | 3.60 | 3.04 | 0.02640 | N/A | N/A | N/A ** |
| Chromium (Cr) | 13.49 | 67.53 | 39.70 | 18.26 | 0.02520 | 50 | 50 | 100 |
| Manganese (Mn) | 6.69 | 107.27 | 27.38 | 35.27 | 0.05415 | N/A | 50 | 50 |
| Iron (Fe) | 121.86 | 308.31 | 205.34 | 66.00 | 0.22950 | 300 | 200 | 300 |
| Cobalt (Co) | 0.19 | 4.13 | 1.20 | 1.18 | 0.01830 | N/A | N/A | 100 |
| Nickel (Ni) | 2.04 | 6.57 | 3.36 | 1.57 | 0.14745 | 70 | 20 | 100 |
| Copper (Cu) | 2.94 | 16.76 | 8.02 | 4.31 | 0.02950 | 2000 | 2000 | 1300 |
| Zinc (Zn) | 10.34 | 64.56 | 23.98 | 17.27 | 0.03960 | N/A | N/A | 5000 |
| Arsenic (As) | 1.57 | 23.05 | 7.33 | 7.00 | 0.02625 | 10 | 10 | 10 |
| Strontium (Sr) | 2.99 | 3878.21 | 452.74 | 1284.72 | 0.02400 | N/A | N/A | 1500 |
| Cadmium (Cd) | 0.19 | 0.78 | 0.34 | 0.18 | 1.00000 | 3 | 5 | 5 |
| Barium (Ba) | 4.81 | 19.98 | 11.54 | 5.18 | 0.04095 | 1300 | N/A | 2000 |
| Lead (Pb) | 5.00 | 32.79 | 10.37 | 8.53 | 1.00000 | 10 | 10 | 15 |

** A proposed notification level for vanadium of 15 µg L⁻¹ in drinking water established by the OEHHA (California). p.adj are p-values after Bonferroni correction.

### Per-brand medians for the toxic elements (Figures 1–6, p. 8–10, µg L⁻¹, n=3 per brand)

| Brand | Al median | As median | Cd median | Cr median | Ni median | Pb median |
| --- | --- | --- | --- | --- | --- | --- |
| ED1 | 423.580 | 1.530 | 0.770 | 34.538 | 5.292 | 8.030 |
| ED2 | 225.960 | 4.180 | 0.410 | 27.806 | 2.756 | 8.390 |
| ED3 | 300.510 | 4.110 | 0.250 | 61.851 | 6.530 | 32.670 |
| ED4 | 201.220 | 2.450 | 0.266 | 57.366 | 2.395 | 8.470 |
| ED5 | 227.350 | 3.350 | 0.330 | 35.590 | 2.960 | 9.630 |
| ED6 | 301.080 | 3.751 | 0.180 | 30.890 | 2.820 | 9.420 |
| ED7 | 268.150 | 23.010 | 0.188 | 13.290 | 2.310 | 7.290 |
| ED8 | 273.960 | 12.560 | 0.350 | 29.502 | 3.430 | 6.450 |
| ED9 | 290.150 | 10.730 | 0.240 | 67.560 | 1.990 | 4.980 |

The notable exceedances called out by the authors (p. 14–17) are: aluminum exceeded the EU/US EPA 200 µg L⁻¹ drinking-water cap in ED6 (statistic = 28.372, p.adj = 0.006), ED3 (statistic = 11.656, p.adj = 0.033), and ED8 (statistic = 96.162, p.adj = 0.000); arsenic exceeded the WHO/EU/US EPA 10 µg L⁻¹ cap most clearly in ED7 (median 23.010 µg L⁻¹, statistic = 30.466, p.adj = 0.005); chromium showed significant departure from WHO/EU 50 µg L⁻¹ in ED3 (statistic = 308.273, p.adj = 0.000) and a moderate exceedance in ED9 (statistic = 10.746, p.adj = 0.038); lead in ED3 (median 32.670 µg L⁻¹) exceeded the WHO/EU 10 µg L⁻¹ drinking-water reference value and the US EPA 15 µg L⁻¹ value; strontium in ED3 (3878.21 µg L⁻¹, statistic = 918.030, p.adj = 0.000) significantly exceeded the US EPA 1500 µg L⁻¹ reference; iron in ED8 deviated significantly from the EU 200 µg L⁻¹ norm (statistic = 71.735, p.adj = 0.001); manganese in ED5 (statistic = 57.898, p.adj = 0.001) and ED8 (statistic = 37.589, p.adj = 0.003) exceeded the EU/US EPA 50 µg L⁻¹ norm.

### Toxicological risk assessment (Tables 6–7, p. 12–13; Table 8, p. 14)

Hazard quotients (HQ = EDI/RfD) and cumulative hazard indices (HI = ΣHQ) for adolescents (BW 45 kg, IR 0.23 L/day, EXD 8 years) and adults (BW 70 kg, IR 0.16 L/day, EXD 47 years) — both with EF = 240 days/year — using reference oral doses (mg/kg/day) of 0.2 (B), 1 (Al), 0.009 (V), 0.003 (Cr), 0.14 (Mn), 0.7 (Fe), 0.0003 (Co), 0.02 (Ni), 0.04 (Cu), 0.3 (Zn), 0.0003 (As), 0.6 (Sr), 0.0005 (Cd), 0.07 (Ba), 0.0035 (Pb):

| Brand | Adolescent HI | Adult HI |
| --- | --- | --- |
| ED1 | 0.10 | 0.04 |
| ED2 | 0.10 | 0.04 |
| ED3 | 0.23 | 0.10 |
| ED4 | 0.12 | 0.05 |
| ED5 | 0.12 | 0.05 |
| ED6 | 0.10 | 0.04 |
| ED7 | 0.32 | 0.13 |
| ED8 | 0.19 | 0.08 |
| ED9 | 0.24 | 0.10 |

All adolescent HI values were between 0.10 and 0.32; all adult HI values were between 0.04 and 0.13. All HI values stayed below the critical non-carcinogenic threshold of one for both age groups.

Incremental lifetime cancer risk (ILCR = EDI × CSF) for the five elements with established oral cancer slope factors — CSF (mg/kg/day) of 0.5 (Cr), 1.7 (Ni), 1.5 (inorganic As), 0.38 (Cd), 0.0085 (Pb) — across both age groups:

| Brand | Cr ILCR adolescent | Ni ILCR adolescent | As ILCR adolescent | Cd ILCR adolescent | Pb ILCR adolescent | Cr ILCR adult | Ni ILCR adult | As ILCR adult | Cd ILCR adult | Pb ILCR adult |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ED1 | 5.9 × 10⁻⁵ | 3.1 × 10⁻⁵ | 7.9 × 10⁻⁶ | 1.0 × 10⁻⁶ | 2.3 × 10⁻⁷ | 2.5 × 10⁻⁵ | 1.3 × 10⁻⁵ | 3.3 × 10⁻⁶ | 4.2 × 10⁻⁷ | 9.7 × 10⁻⁸ |
| ED2 | 4.7 × 10⁻⁵ | 1.6 × 10⁻⁵ | 2.1 × 10⁻⁵ | 5.4 × 10⁻⁷ | 2.4 × 10⁻⁷ | 2.0 × 10⁻⁵ | 6.7 × 10⁻⁶ | 8.9 × 10⁻⁶ | 2.2 × 10⁻⁷ | 1.0 × 10⁻⁷ |
| ED3 | 1.0 × 10⁻⁴ | 3.8 × 10⁻⁵ | 2.1 × 10⁻⁵ | 3.4 × 10⁻⁷ | 9.4 × 10⁻⁷ | 4.4 × 10⁻⁵ | 1.6 × 10⁻⁵ | 8.7 × 10⁻⁶ | 1.4 × 10⁻⁷ | 3.9 × 10⁻⁷ |
| ED4 | 9.7 × 10⁻⁵ | 1.2 × 10⁻⁵ | 1.3 × 10⁻⁵ | 3.8 × 10⁻⁷ | 1.8 × 10⁻⁷ | 4.1 × 10⁻⁵ | 5.2 × 10⁻⁶ | 5.3 × 10⁻⁶ | 1.6 × 10⁻⁷ | 7.7 × 10⁻⁸ |
| ED5 | 6.0 × 10⁻⁵ | 1.7 × 10⁻⁵ | 1.7 × 10⁻⁵ | 4.3 × 10⁻⁷ | 2.7 × 10⁻⁷ | 2.5 × 10⁻⁵ | 7.2 × 10⁻⁶ | 7.1 × 10⁻⁶ | 1.8 × 10⁻⁷ | 1.2 × 10⁻⁷ |
| ED6 | 5.2 × 10⁻⁵ | 1.3 × 10⁻⁵ | 1.9 × 10⁻⁵ | 2.4 × 10⁻⁷ | 2.6 × 10⁻⁷ | 2.2 × 10⁻⁵ | 5.4 × 10⁻⁶ | 7.9 × 10⁻⁶ | 1.0 × 10⁻⁷ | 1.1 × 10⁻⁷ |
| ED7 | 2.4 × 10⁻⁵ | 1.4 × 10⁻⁵ | 1.2 × 10⁻⁴ | 2.4 × 10⁻⁷ | 2.1 × 10⁻⁷ | 9.9 × 10⁻⁶ | 6.1 × 10⁻⁶ | 4.9 × 10⁻⁵ | 1.0 × 10⁻⁷ | 8.8 × 10⁻⁸ |
| ED8 | 4.7 × 10⁻⁵ | 2.0 × 10⁻⁵ | 5.4 × 10⁻⁵ | 4.5 × 10⁻⁷ | 1.8 × 10⁻⁷ | 2.0 × 10⁻⁵ | 8.5 × 10⁻⁶ | 2.3 × 10⁻⁵ | 1.9 × 10⁻⁷ | 7.7 × 10⁻⁸ |
| ED9 | 1.1 × 10⁻⁴ | 1.2 × 10⁻⁵ | 6.3 × 10⁻⁵ | 3.3 × 10⁻⁷ | 1.4 × 10⁻⁷ | 4.8 × 10⁻⁵ | 4.9 × 10⁻⁶ | 2.7 × 10⁻⁵ | 1.4 × 10⁻⁷ | 6.0 × 10⁻⁸ |

The authors interpret an ILCR < 10⁻⁶ as the safe limit, 10⁻⁶ to 10⁻⁴ as moderate cancer risk, and > 10⁻⁴ as high cancer risk (p. 5, citing refs [22,34]). On those bands: ED7 As-ILCR in adolescents (1.2 × 10⁻⁴) crosses into the high-risk band; As ILCRs for adolescents in all other brands except ED1 fall in the 10⁻⁶ to 10⁻⁴ moderate-risk band, and for adults the As ILCR is in the moderate band for ED7, ED8, and ED9; Ni ILCRs for adolescents are in the moderate-risk band across all brands; Cr ILCRs in adolescents are in the moderate band across all brands, with ED3 (1.0 × 10⁻⁴) and ED9 (1.1 × 10⁻⁴) approaching or slightly exceeding the high-risk 10⁻⁴ threshold; for adults, ED1 (1.3 × 10⁻⁵) and ED3 (1.6 × 10⁻⁵) Ni ILCRs reach the moderate band while the remainder stay below 10⁻⁶; Pb and Cd ILCRs are below 10⁻⁶ for both age groups across every sample, indicating no carcinogenic concern for these two metals in the surveyed energy drinks.

### Exposure assumptions (Section 2.4, p. 4–5)

The authors compute EDI from C (metal concentration in mg L⁻¹) × IR (intake rate L/day) × EF (exposure frequency days/year) × EXD (exposure duration years), divided by BW (body weight kg) × AT (averaging time days). The numerical inputs are IR = 0.23 L/day (adolescents) and 0.16 L/day (adults); EF = 240 days/year for both; EXD = 8 years (adolescents, 10–18 years old) and 47 years (adults, 18–65 years old); BW = 45 kg (adolescents) and 70 kg (adults). The intake rate is anchored to EFSA-reported consumption patterns: adolescents (10–18 years) average ~7 L/month with at least 4–5 uses per week, adults (18–65 years) ~4.5 L/month at 4–5 uses per week.

## Methods (brief)

Nine commercially available energy-drink brands were purchased from markets in Lublin, Poland; selection criteria were the most popular and widely consumed brands based on market data. All samples were packaged in aluminum cans (composition of each ED in Table 1, p. 3–4 of the source). Dissolved CO₂ was eliminated by ultrasonic-bath sonication for 70 minutes. 9 mL of the degassed sample was transferred to a Teflon cuvette with 3 mL of 65% (v/v) HNO₃ (Suprapur grade, Merck, Darmstadt, Germany), then digested in a Multiwave 5000 microwave mineralizer (Anton Paar, Graz, Austria) using a temperature-controlled program: ramp to 180 °C over 20 min, hold at 180 °C for 10 min, cool to 70 °C. Digested samples were diluted to 25 mL with ultrapure water (18.3 MΩ cm⁻¹ resistance, EASYpure™ system, Barnstead/Thermolyne, Ramsey, MN, USA). Standard calibration solutions were prepared by dilution of ICP multi-element standard solution XXV for MS (Merck, Darmstadt, Germany). All analyses were performed in triplicate (n=3 per energy drink).

Macro-minerals (Na, K, Mg, Ca) were determined by inductively coupled plasma optical emission spectrometry on a Varian 720-ES spectrometer (Varian, Melbourne, Australia) at RF power 1000 W, plasma flow 15 L min⁻¹, auxiliary flow 1.5 L min⁻¹, nebulizer flow 0.75 L min⁻¹, wavelengths Ca 396.847 nm, K 766.491 nm, Mg 279.533 nm, Na 589.592 nm.

Micro-minerals (B, Al, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, As, Sr, Cd, Ba, Pb) were determined by inductively coupled plasma mass spectrometry on an Agilent Technologies 7700x series spectrometer (Agilent, Tokyo, Japan) at RF power 1600 W, plasma flow 15 L min⁻¹, carrier gas 0.34 L min⁻¹, dilution gas 0.57 L min⁻¹, MicroMist nebulizer, x-Lens ion lens, three replicate readings, 30 s stabilization, spectrum acquisition mode, 0.1 rpm nebulizer pump speed, 5 V energy discrimination. Isotopes acquired: ¹¹B, ²⁷Al, ⁵¹V, ⁵²Cr, ⁵⁵Mn, ⁵⁶Fe, ⁵⁹Co, ⁶⁰Ni, ⁶³Cu, ⁶⁶Zn, ⁷⁵As, ⁸⁸Sr, ¹¹¹Cd, ¹³⁷Ba, ²⁰⁸Pb.

Statistical analysis used R version 4.4.1 with the tidyverse suite for data manipulation and rstatix for non-parametric statistical tests. The Kruskal–Wallis H test was applied to compare element concentrations among the nine brands (multi-group comparison; n=3 per group, degrees of freedom = 8). One-sample Student's t-tests were applied to compare each brand's mean concentration against WHO, EU, and US EPA drinking-water normative values. Bonferroni corrections were applied to p-values to control the family-wise error rate.

The source does not report instrument-method limits of detection or limits of quantification, certified-reference-material recovery percentages, or analytical blank-correction details. The arsenic measurement is total arsenic (⁷⁵As mass) and is not speciated into inorganic and organic forms; nevertheless, the toxicological risk calculation treats the measured total As as if it were inorganic As by applying the inorganic-As cancer slope factor of 1.5 mg/kg/day (Section 2.4, p. 5). The chromium measurement is total chromium (⁵²Cr mass); the discussion explicitly notes (p. 17) that "our study measured the total Cr levels, encompassing both Cr⁶⁺ and Cr³⁺," and that "while Cr⁶⁺ is recognized as a genotoxic and carcinogenic compound, Cr³⁺ is an essential trace element," underscoring the need for speciation analysis to accurately assess Cr exposure risk — yet the toxicological risk calculation again applies the chromium cancer slope factor of 0.5 mg/kg/day to total Cr. Mercury and inorganic tin were not measured.

## Evidence Fitness

This source is direct primary occurrence evidence for finished energy drinks measured in Poland in 2024. The analytical methodology (microwave-assisted nitric-acid digestion → ICP-OES + ICP-MS, isotope-specified mass acquisition, replicate measurements per sample, R-based non-parametric statistics with Bonferroni correction) is appropriate for the matrix and analyte panel. The principal limitations bearing on pooling eligibility and synthesis weight are: (i) sample size of nine brands × three replicates yields n=27 measurements per analyte, which gives credible per-brand medians but limits inference to the population of energy drinks more broadly; (ii) single-country single-city sampling (Lublin market, Poland) limits geographic generalisability; (iii) the source does not report limits of detection, limits of quantification, or recovery of certified reference materials, so analytical-quality control cannot be independently verified from the published article; (iv) the arsenic measurement is total As without iAs/tAs speciation, but the cancer-risk calculation treats it as inorganic As — this overstates the cancer-risk arithmetic if the As is partially organic-bound, and the source acknowledges Cr speciation as a related caveat in its own discussion (p. 17) without revising the risk calculation; (v) all nine drinks are aluminum-can-packaged, which is the dominant Polish-market packaging and confounds the Al-from-can signal with any Al-from-ingredients signal in this dataset. Reported public evidence label: Direct evidence — primary occurrence data for the energy-drinks matrix.

Evidence tier set to B. The source is primary research, peer-reviewed (Nutrients, MDPI, IF tracked), with structured methods and reproducible statistics. Tier-A would require larger sample size, multi-region sampling, As/Cr speciation, and reported CRM recovery, none of which this study provides. Tier-C would be a narrative review with no new data; this study generates new measurements and is therefore well above tier-C.

## Implications

- Certification: contributes direct primary occurrence values for the `sports-energy-drinks` HMTc category (Category 5 row 9). Per-brand Pb medians range from 4.980 µg L⁻¹ (ED9) to 32.670 µg L⁻¹ (ED3); per-brand tAs medians range from 1.530 µg L⁻¹ (ED1) to 23.010 µg L⁻¹ (ED7); per-brand Cd medians range from 0.180 µg L⁻¹ (ED6) to 0.770 µg L⁻¹ (ED1); per-brand Cr (total) medians range from 13.290 µg L⁻¹ (ED7) to 67.560 µg L⁻¹ (ED9); per-brand Ni medians range from 1.990 µg L⁻¹ (ED9) to 6.530 µg L⁻¹ (ED3); per-brand Al medians range from 201.220 µg L⁻¹ (ED4) to 423.580 µg L⁻¹ (ED1). The Pb finding in ED3 (32.670 µg L⁻¹) exceeds the WHO/EU 10 µg L⁻¹ and US EPA 15 µg L⁻¹ drinking-water references; the tAs finding in ED7 (23.010 µg L⁻¹) exceeds all three drinking-water references (10 µg L⁻¹); these are like-for-like comparisons against drinking-water caps because no energy-drink-specific contaminants regulation governs these elements in the EU at the time of the source's writing.
- Courses: useful as a teaching reference for (1) the aluminum-can-packaging contribution to Al loading in canned beverages versus PET bottles (the discussion at p. 15 cites comparator studies showing 150–7150 µg L⁻¹ Al in aluminum cans vs 10–120 µg L⁻¹ in PET bottles); (2) the toxicological-risk methodology gap when total As is used in an inorganic-As CSF computation; (3) the chromium-speciation gap that the authors flag in their own discussion as needing follow-up; (4) the practical worked example of EDI / HQ / HI / ILCR calculation given concrete BW, IR, EXD, EF inputs.
- App: contributes per-product percentile-eligible values for the sports/energy-drinks product class in the Polish market. Per-brand identities are anonymised in the source (ED1–ED9) and remain anonymised here; the contribution is to the category-level distribution, not to per-brand rankings.
- Discovery: useful comparator studies referenced for downstream ingestion include Leśniewicz et al. 2016 (Polish energy and isotonic drink mineral composition, Biol. Trace Elem. Res. 170:485–495) and Kilic et al. (the source's ref [17]) for prior Polish/regional energy-drink mineral profiles. The single rural-Cd/Pb-elevated Pb finding in ED3 (32.670 µg L⁻¹) is the dataset's most defensible high-tail observation and should be carried forward in any future percentile-pool calculation for the energy-drinks row.

## Provenance notes

Open-access article distributed under CC BY (license declaration on p. 1 of the PDF). Received 15 November 2024; revised 5 December 2024; accepted 8 December 2024; published 13 December 2024. Citation: Czarnek, K.; Tatarczak-Michalewska, M.; Wójcik, G.; Szopa, A.; Majerek, D.; Fila, K.; Hamitoglu, M.; Gogacz, M.; Blicharska, E. Nutritional Risks of Heavy Metals in the Human Diet—Multi-Elemental Analysis of Energy Drinks. *Nutrients* 2024, 16, 4306. https://doi.org/10.3390/nu16244306. Academic editors: Ariana Saraiva and António Raposo. Funding: "commissioned project entitled 'The study on the impact of energy drink consumption and selected plant adaptogens on the health and mental state of young adults – a research project,' funded by the Minister of Science and Higher Education and conducted at the John Paul II Catholic University of Lublin" (Funding statement, p. 20). Institutional Review Board: Not applicable. Informed Consent: Not applicable. Data Availability: "Data are contained within the article" (p. 20). Conflicts of interest: "The authors declare no conflicts of interest" (p. 20). Accessed via the Manual Fetch Discovery autopilot.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[metals/copper]]
- [[metals/manganese]]
- [[metals/iron]]
- [[metals/zinc]]
- [[metals/cobalt]]
- [[metals/vanadium]]
- [[metals/barium]]
- [[products/sports-energy-drinks]]

## Verification notes

The nine energy-drink brands are anonymised throughout the source as ED1–ED9 (Table 1, p. 3–4 lists only the composition of each ED — water, sugar, taurine quantity, caffeine quantity, vitamins, colors, sweeteners — without naming the commercial brand). No brand-firewall handling was required because the source itself does not attach contamination values to named brands. Per-brand medians are reported by the anonymous ED1–ED9 labels and are recorded that way in this wiki page.

Speciation handling. The source measures total arsenic at mass ⁷⁵As without speciation into iAs and organic forms; the analyte is therefore recorded as `tAs` rather than `iAs` in the source metadata `metals:` field, with a note in Methods (brief) above flagging that the source applied the inorganic-As cancer slope factor (1.5 mg/kg/day) to the total-As measurement in its ILCR calculation. The source measures total chromium at mass ⁵²Cr without Cr-VI/Cr-III speciation; the analyte is recorded as `Cr` in `metals:`. The source measures aluminum at mass ²⁷Al; recorded as `Al`. Mercury was not in the analyte panel; not recorded. Inorganic tin was not in the analyte panel; not recorded. Uranium was not in the analyte panel; not recorded. Among the ten HMTc/HMI analytes, this source covers Pb, Cd, tAs, Cr, Ni, and Al (six of ten); MeHg/tHg, Sn, and U are not addressed; iAs is not addressed at speciation level (the tAs measurement is recorded with the caveat above).

The `products:` source metadata lists `sports-energy-drinks` only. The source's matrix is energy drinks, which the wiki taxonomy locates as HMTc Category 5 row 9 ("Sports/energy drinks") per the linked reference record. The energy drinks measured here are carbonated, but they are commercially defined as energy drinks (caffeine + taurine + vitamin matrix) and not as carbonated soft drinks; routing to `soft-drinks-carbonated-beverages` as a second product would over-route on a category basis, and the source explicitly contrasts energy drinks with soft drinks throughout the discussion. The conservative routing is to `sports-energy-drinks` only.

The `ingredients:` source metadata is empty. The energy drinks measured are finished beverages, not single-ingredient measurements. The source's Table 1 lists ingredient composition (water, sugar, citric acid, taurine, caffeine, sodium citrates, vitamins, etc.) but does not measure heavy-metal content at the ingredient level. The aluminum signal is partly attributable to can-leaching per the discussion (p. 15–16); that is a `food-contact-material-leachate` matrix observation, not an ingredient observation, and is captured in `matrices:` as `aluminum-can-leachate`.

The `matrices:` field uses `energy-drinks` (established vocabulary, used in salaheldin2025-multimatrix-foods-egypt) and `aluminum-can-leachate`. The `aluminum-can-leachate` matrix string may be novel and is flagged here for the matrix-vocabulary review pass; it captures the can-lining contamination pathway that the discussion at p. 15 identifies as the dominant Al-loading mechanism for canned energy drinks. If the controlled matrices vocabulary already has `food-contact-material-leachate` (used in zhou2025-baijiu-impurities-safety-strategies and elsewhere for ceramic-vessel leaching), the `aluminum-can-leachate` string can be reconciled to that broader category on next lint pass.

The `jurisdictions:` field is `PL` (Poland). The source samples are exclusively Polish-market commercial energy drinks; the regulatory framework discussed (WHO drinking-water guidelines, EU drinking-water Directive limits, US EPA reference levels, OEHHA proposed vanadium notification level) provides multi-jurisdiction reference values used for compliance comparison, but the underlying sample population is Polish only. No PL-specific energy-drink contaminant regulation is invoked beyond the country's reference to the 1 January 2024 prohibition on sale of energy drinks to anyone younger than 18 years (a marketing/access regulation, not a contaminants regulation) noted in the discussion at p. 19.

No HMTc threshold proposals, no consumer-audience translations, no risk advisories, and no synthesis claims of the form "this confirms the literature consensus that..." appear in this wiki page body, wiki/HMTc firewall. The Pb exceedance of drinking-water caps in ED3 and the As exceedance in ED7 are reported as unit-comparison findings against the drinking-water reference values the source itself used as comparators; they are not framed as HMTc threshold recommendations. The chromium and arsenic ILCR observations are reported as the source published them — adolescent risk band crossings for ED3, ED7, ED9 on Cr and for ED7 specifically on As — without restatement as a consumer-safety claim. The total-As-treated-as-inorganic-As caveat in the cancer-slope arithmetic is flagged in Methods (brief) and Evidence Fitness as a methodological note about the source's risk calculation, not as a wiki-level synthesis claim.

The source's discussion at p. 17 contains its own internal contradiction worth flagging: the THQ (translated as HQ in the methods at p. 4) values for the heavy-metal subset are correctly stated as below the threshold of one across the board, but the discussion then states "Our risk assessment revealed that the THQs for As, Pb, Cd, and Cr were below the threshold value of one, indicating no non-carcinogenic concerns for long-term exposure. However, the ILCR values in the adolescent age group highlighted notable carcinogenic risks for both As and Cr." This is internally consistent (HQ measures non-carcinogenic risk; ILCR measures cancer risk; the two are reported on different scales) and not a contradiction; the verification note here flags the dual reporting only to make clear that the source's overall safety conclusion is conditional on the cancer-risk analysis, not unqualified.

Audit editorial review (2026-06-06) ran the five-check audit against this page and the PDF and returned a REVISE verdict with one specific ❌ finding: the original Methods (brief) text mis-attributed the As isotope as "(¹¹¹As mass)"; mass 111 is the Cd isotope, while ⁷⁵As is the correct As isotope (also correctly listed in the isotopes-acquired enumeration immediately above). Verified against PDF p. 5 (isotopes acquired list: "¹¹B, ²⁷Al, ⁵¹V, ⁵²Cr, ⁵⁵Mn, ⁵⁶Fe, ⁵⁹Co, ⁶⁰Ni, ⁶³Cu, ⁶⁶Zn, ⁷⁵As, ⁸⁸Sr, ¹¹¹Cd, ¹³⁷Ba, ²⁰⁸Pb"); corrected to "(⁷⁵As mass)". The audit also confirmed numerical fidelity across all of Tables 4–8 and Figures 1–6 (213+ values spot-checked exactly), all 15 RfD values and 5 CSF values in Section 2.4, all exposure assumptions (IR / BW / EXD / EF) for both age groups, all eight specific significance-test statistics named in the Discussion, the ICP-OES wavelengths, the ICP-MS instrument conditions, the microwave-digestion program, the statistical-analysis software stack, the Polish 1-January-2024 under-18 sale prohibition, the funding statement, and the EFSA consumption-anchor values. The audit confirmed taxonomy compliance on all wiki-page slugs and self-flagging of the `aluminum-can-leachate` matrix string for routine vocabulary review. The audit confirmed Part 12 brand-firewall integrity (the source itself anonymises ED1–ED9 throughout; no commercial brand names appear) and Part 2 wiki/HMTc firewall integrity (no threshold proposals, no consumer translations, no cross-source synthesis claims; the ILCR risk-band reporting is a faithful restatement of the source's own bands). No other findings.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
