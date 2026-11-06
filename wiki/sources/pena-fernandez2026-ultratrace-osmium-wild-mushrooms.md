---
type: source
raw_handle: HMI-METAL-PLATINUM-1
cite_key: pena-fernandez2026-ultratrace-osmium-wild-mushrooms
title: "Ultratrace Osmium in Wild Mushrooms: Environmental Occurrence and Chemical-Form-Dependent Molecular and Toxicological Interpretation."
authors: [Pena-Fernandez A, Pardo Laurel H, Camara-Pastor T]
year: 2026
publication: "International journal of molecular sciences"
doi: 10.3390/ijms27188188
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
access_url: "https://doi.org/10.3390/ijms27188188"
raw_path: /Users/kmfp/hmi-evidence-deposits/deposits/HMI-METAL-PLATINUM-1/10.3390_ijms27188188.pdf
raw_sha256: 1ff48164f65167253844d466c2ff2924e8d2c19be2640b9c22817bd40de66b66
metals: [Pt]
ingredients: ["[[ingredients/mushrooms]]"]
products: ["[[products/mushrooms]]"]
matrices: [wild-mushrooms]
jurisdictions: [GB]
sample_n: 121
sample_population: "121 wild mushroom fruiting-body biological units reconstructed from 157 analytical records; collected across 13 locations in public green spaces in Leicester and rural Leicestershire, UK, over 12 dates from 18 September to 18 November 2019"
wiki_doi: null
sampling_locations: [Leicester, Leicestershire, UK]
sampling_year_range: "2019"
updated: 2026-11-06
---

# Pena-Fernandez et al. 2026 -- Ultratrace osmium in wild mushrooms, Leicester UK

## Overview

This study measured osmium (Os) in 121 wild mushroom fruiting bodies from Leicester and rural Leicestershire using ICP-MS with isobaric correction for 192Pt interference. The primary finding is that Os occurs at concentrations below the operational limit of quantification of the multi-element ICP-MS method: 76.9% of samples were below the operational detection threshold, 23.1% showed signals above that threshold but still below the quantitative limit, and none reached the limit of quantification. While the paper primarily concerns osmium, it is relevant to the platinum wiki because: (1) it reports published food-matrix platinum concentrations for wild mushrooms from the literature (Table 4), (2) it demonstrates the methodological challenge of distinguishing platinum group elements at ultratrace levels by ICP-MS, and (3) it argues that total elemental measurement by ICP-MS is insufficient for toxicological inference without chemical speciation -- a point directly applicable to platinum food monitoring.

## Key numbers

This study (Leicester wild mushrooms, 2019):

- 93/121 samples (76.9%; 95% CI 68.3-84.0%): below operational detection threshold
- 28/121 samples (23.1%; 95% CI 16.0-31.7%): detected above threshold but below operational LLOQ
- 0/121 samples (0%): at or above LLOQ
- No quantitative concentration distribution available for Os in this dataset
- Operational LLOQ (dry weight): 0.617667-39.221875 mg/kg dw (varies by portion mass)
- Operational detection threshold (dry weight): 0.002795-0.177502 mg/kg dw

Published platinum concentrations in wild and cultivated mushrooms (Table 4, cited literature):

Mleczek et al. (Poland, near trafficked road, wild species):

- Agaricus arvensis: Pt 5.72, Os 0.021, Pd and Ru below detection; all mg/kg dw
- Boletus edulis: Pt 3.61, Os 0.105, Pd and Ru below detection; mg/kg dw
- Laeticutis cristata: Os 0.290, Pt 2.90, Pd 0.197, Ru 0.228; mg/kg dw

Commercially cultivated Lentinula edodes (shiitake), different survey:

- Pt 0.90, Pd 0.10, Os 0.09, Ru 0.06; all mg/kg dw

Rodushkin et al. (northeast Sweden, wild mushrooms):

- Os mean approximately 2.5-11 picograms per gram; maximum approximately 30 pg/g in Boletus edulis; substantially below the Leicester detection threshold range, confirming that background PGE concentrations in mushrooms are analytically challenging

## Methods

- Mushroom prep: Milli-Q wash; cap and stem separated; oven-dried 50 degrees C; cryohomogenized with liquid nitrogen
- Digestion: closed-vessel HNO3/H2O2 (5 mL 65% HNO3 + 1 mL 30% H2O2; pre-oxidation 8 hours RT; 96 degrees C/12 hours); filtered; diluted to 25 mL
- Instrument: PerkinElmer NexION 2000B ICP-MS; Os monitored at 192Os (peak-hopping, standard mode; no collision/reaction gas)
- Isobaric correction: 192Os_corr = 192Os_signal - 0.023153 x 195Pt
- Internal standard: Ir for Os; no Os-specific CRM available; no independent recovery determination
- Taxonomic identification by macroscopic characteristics and ITS molecular DNA barcoding (104/121 successful)

## Toxicological framework

The paper documents that OsO4 (oxidation state +VIII) is volatile and highly toxic (ocular, dermal, respiratory), but that its presence cannot be inferred from total elemental Os by destructive acid digestion. Chemical speciation is essential for toxicological inference. The same reasoning applies to platinum: ionic platinum (II) and platinum (IV) compounds, platinum nanoparticles, and native metallic platinum have distinct toxicokinetics and biological activities that cannot be distinguished by total elemental measurement alone.

## Relevance to this wiki

This paper contributes literature-reported platinum concentrations in wild and cultivated mushrooms (from the Mleczek et al. and commercial shiitake datasets it cites), which are among the highest food-matrix platinum values in the current deposit. It demonstrates that platinum can reach multi-milligram-per-kilogram concentrations in wild mushrooms collected near trafficked roads, in contrast to the near-background values found in potatoes from most agricultural settings. The methodological critique of total-elemental ICP-MS for PGE toxicological inference is directly applicable to interpreting the other source-level data in this deposit.
