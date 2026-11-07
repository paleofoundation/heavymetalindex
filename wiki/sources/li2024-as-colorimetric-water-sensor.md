---
type: source
raw_handle: FM_11256036
cite_key: li2024-as-colorimetric-water-sensor
title: "Ultrasensitive and selective colorimetric and smartphone-based detection of arsenic ions in aqueous solution using alliin-chitosan-AgNPs"
authors: ["Paw R", "Guha AK", "Tamuly C"]
year: 2024
publication: "RSC Advances"
doi: "10.1039/d4ra03665d"
access_url: "https://doi.org/10.1039/d4ra03665d"
pmid: "39027043"
pmcid: "PMC11256036"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC"
raw_path: "raw/markdown/FM_11256036/FM_11256036.md"
raw_sha256: "7f6bc41710c6dd8c3e5e14a9fb3773f3c07f4bdf05c74588d6075d20bdc3ce2a"
metals: [tAs, iAs]
products: []
ingredients: []
matrices: [analytical-method, groundwater]
jurisdictions: [IN]
near_duplicates: []
sample_n: 3
sample_population: "Three tube-well groundwater samples from Dhemaji (Silapathar and Sripani) and Lakhimpur (Boginadi) districts, Assam, India. Sensor detects As(III) specifically; no food matrix samples."
wiki_doi: null
sampling_locations: ["Silapathar, Assam, India", "Sripani, Assam, India", "Boginadi, Assam, India"]
sampling_year_range: null
ingest_status: complete
updated: 2026-11-07
evidence_fitness:
  supports:
    - "As(III)/arsenite colorimetric detection performance: LOD 0.021 fM, LOQ 0.063 fM, linear range 0.02-1.40 fM at 403 nm"
    - "Smartphone RGB detection of As(III) in the range 10-150 nM using red/green intensity ratio"
    - "Selectivity of AC-AgNPs against 13 competing metal ions (Ba2+, Ca2+, Co2+, Cr2+, Cu2+, Fe3+, Fe2+, Ni2+, Pb2+, Pd2+, Sn2+, Zn2+) in environmental water"
    - "Real groundwater application: As(III) concentrations 0.126-0.640 fM in three tube-well samples from Assam, India"
  does_not_support:
    - "Total inorganic arsenic (iAs) in food: sensor is speciation-specific for As(III) only"
    - "Total arsenic in any food matrix"
    - "Arsenic occurrence in drinking water at regulatory-relevant concentrations without further conversion from fM to ppb units"
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Laboratory glassware and sampling apparatus illustrating colorimetric nanoparticle sensor research context."
---

# Paw et al. 2024 : Colorimetric arsenic sensor using alliin-chitosan silver nanoparticles

## Overview

Paw and colleagues at the CSIR-North East Institute of Science and Technology (Itanagar, India) developed a colorimetric nanosensor for As(III) using alliin-chitosan-stabilized silver nanoparticles (AC-AgNPs) synthesized from garlic extract and shrimp-derived chitosan. The sensor exploits localized surface plasmon resonance: addition of As(III) aggregates the brownish AC-AgNPs and renders the solution colorless, with a corresponding decrease in absorbance at 403 nm. The color change is also readable by a smartphone camera using a Color Meter RGB analysis application. This is an analytical method development paper; the target matrix is environmental groundwater, not food. The sensor detects only As(III)/arsenite, not As(V), total inorganic arsenic, or total arsenic.

## Study design

Method development study. Alliin-chitosan silver nanoparticles were synthesized, characterized by UV-vis, XRD, XPS, TEM, SEM, FTIR, Raman, and HPLC, and evaluated for selectivity against 13 metal ions. Optimal detection conditions (pH 7, 25 degrees C) were established by relative-activity curves. A calibration curve was constructed over 0.02-1.40 fM As(III). Kinetics were modeled using zero-order, first-order, and second-order models. Real groundwater samples (n=3) from Assam, India were analyzed to demonstrate practical applicability. A smartphone RGB detection mode was separately validated over 10-150 nM.

## Samples

Three tube-well groundwater samples from two districts of Assam, India: Silapathar (26 degrees 12' 21.49" N, 93 degrees 48' 34.24" E) and Sripani (27 degrees 34' 40" N, 94 degrees 38' 24" E) in Dhemaji district, and Boginadi (27 degrees 36' 08" N, 94 degrees 18' 26" E) in Lakhimpur district. Sample volume per analysis: 0.2 mL added to 3 mL diluted AC-AgNPs. Three replications per sample.

## Analytes

As(III)/arsenite only. The sensor is speciation-specific: density functional theory modeling at the M06-2X/def2-TZVP level confirmed that among the 13 metal ions tested, only As3+ could form a stable complex with the AC-AgNP structure (binding energy 8.7 kcal/mol). All other metal ion complexes were structurally unstable after geometry optimization. The N and O atoms of the alliin-chitosan moiety coordinate with Ag atoms (N/Ag distance 3.45 A, O/Ag distance 3.21 A); As(III) displaces this arrangement, inducing nanoparticle aggregation.

## Results

| Parameter | Value | Source |
| --- | --- | --- |
| LOD (colorimetric, UV-vis) | 0.021 fM | Paper, Results section |
| LOQ (colorimetric, UV-vis) | 0.063 fM | Paper, Results section |
| Linear range (UV-vis) | 0.02-1.40 fM | Paper, Fig. 6C/D |
| Calibration equation | Y = 0.3226 - 0.18217X, R2 = 94.23% | Paper, Results |
| SPR band | 403 nm | Paper, UV-vis characterization |
| Nanoparticle mean diameter | 7.57 plus or minus 3.52 nm | Paper, TEM, Fig. 4C |
| Optimal pH | 7 | Paper, Fig. 8A |
| Optimal temperature | 25 degrees C | Paper, Fig. 8B |
| Kinetic model | Pseudo-first-order | Paper, Fig. 8C |
| Smartphone range | 10-150 nM | Paper, Fig. 9D |
| As3+ in Silapathar sample | 0.271 plus or minus 0.078 fM | Paper, Table 2 |
| As3+ in Boginadi sample | 0.126 plus or minus 0.165 fM | Paper, Table 2 |
| As3+ in Sripani sample | 0.640 plus or minus 0.079 fM | Paper, Table 2 |
| Selectivity (ANOVA) | F = 1.962; P = 0.03694; df = 14, 60 | Paper, Results |

The selectivity ANOVA indicates no significant difference between the As(III) signal in the presence vs. absence of each of the 13 competing metal ions, supporting high specificity for arsenite. The abstract reports 0.023 fM for LOD; both values derive from the same calibration parameters, with the abstract citing a rounded figure.

## Methods

Nanoparticle synthesis: 40 g peeled garlic clove ground and boiled in 400 mL deionized water at 60 degrees C for 45 min; filtered to yield garlic extract retaining alliin. Chitosan (100 mg) dissolved in 2% acetic acid (100 mL); 200 mL garlic extract added to 200 mL chitosan solution; stirred at 12,000 rpm for 30 min; held at 4 degrees C for 48 h; centrifuged at 6,000 rpm; precipitate dried at 60 degrees C. Alliin-chitosan complex (12.5 mg) dissolved in 2% acetic acid (50 mL); 10 mL added to 25 mL of 1 mM AgNO3; stirred 30 min to yield AC-AgNPs.

Sensing assay: 3 mL diluted AC-AgNPs plus 0.2 mL As(III) standard or water sample; vortexed 2 min; absorbance at 403 nm on UV-vis spectrophotometer. Selectivity testing at 1 mM each metal ion. ANOVA performed with Origin 9 software (n=5 replications per condition).

## Instruments

UV-vis: Shimadzu UV-2600. FTIR: Spectrum Two (PerkinElmer). Raman: DXR2 Smart Raman Spectrometer (Thermo Scientific), excitation 532 nm. XRD: Bruker D8 Advance, Cu K-alpha source (lambda = 1.5406 A). TEM: JEM-2100 (JEOL) at 200 kV with ImageJ for size measurement; EDX by Aztec (Oxford Instruments). SEM: Sigma 300 VP FESEM (ZEISS), 1.2 nm resolution at 15 kV. XPS: ESCALAB Xi+ (Thermo Fisher Scientific). HPLC: Prominence-i (Shimadzu), PDA detector, C18 column, flow rate 1 mL/min. Computational DFT: Gaussian 16 suite, M06-2X/def2-TZVP.

## LOD and LOQ

LOD 0.021 fM; LOQ 0.063 fM (SD = 0.001155, slope = -0.18217 from calibration). Expressed in mass concentration units for comparison with regulatory benchmarks, 0.021 fM As corresponds to approximately 1.6 fg/L, six orders of magnitude below the WHO provisional drinking water guideline of 10 µg/L (10 ppb). The sensor is designed for ultra-trace environmental detection, not for routine compliance screening at regulatory guideline levels.

## CRM and recovery

No certified reference material was used and no spiked-recovery experiment was reported. Real groundwater samples were analyzed directly against the calibration curve. Formal spike-recovery validation was not performed.

## Evidence fitness

This paper supports analytical method performance claims for As(III) colorimetric detection in environmental water. It does not support food occurrence data, food regulatory applications, or detection of arsenic species other than As(III). The fM-scale sensitivity is relevant to ultra-trace environmental monitoring contexts; the groundwater concentrations measured (0.126-0.640 fM) are well below WHO guidance levels, consistent with low-contamination tube-well sources in the sampled districts. The sensor cannot distinguish As(III) from total inorganic arsenic as required for food regulatory purposes (EU Regulation EC 1881/2006 and FDA guidance specify iAs, not speciated arsenite alone).

## Limitations

Speciation-specific: detects As(III) only. Total inorganic arsenic (iAs = As(III) + As(V)) cannot be measured without an oxidation pre-treatment step, which was not incorporated. No food matrix validation. No CRM verification or spike recovery. Validation limited to three groundwater samples from a single geographic area in Assam. Smartphone RGB method validated only over 10-150 nM, three orders of magnitude above the colorimetric LOD, limiting combined utility for ultra-trace samples. Long-term nanoparticle stability was not assessed.

## Regulatory context

WHO provisional guideline for arsenic in drinking water: 10 µg/L (10 ppb), based on JECFA risk assessments. This guideline covers total arsenic, not speciated arsenite. The EU, US EPA, and BIS India all enforce a 10 µg/L limit for arsenic in drinking water. For food, EU Regulation (EC) 1881/2006 and its amendments specify maximum levels for inorganic arsenic (iAs = As(III) + As(V)) in rice, infant food, and other categories, not for arsenite specifically. The AC-AgNP sensor's speciation-specificity means it is not directly applicable for regulatory monitoring of iAs in food without further method development incorporating As(V) detection or total iAs conversion.

## Related evidence

- [[metals/arsenic]]

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
