---
type: source
cite_key: zhang2025-ito-np-pulmonary-fibrosis-aop
title: "Integrating Disease Data and Toxicology Studies to Uncover the Mechanisms of Indium Tin Oxide (ITO) Nanoparticle-Induced Pulmonary Fibrosis and Develop an Adverse Outcome Pathway (AOP) Framework"
authors: [Zhang C, Cao Y, Qu J, Zhang H, Pang Y, Liu Q, Wu J, Ma X, Wang S, Ma Y, Wu D, Zhang T]
year: 2025
publication: "Environment and Health (Washington, D.C.) 3: 1053-1073"
doi: 10.1021/envhealth.5c00053
pmcid: PMC12455341
pmid: 40995481
access_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12455341/
retrieval_date: "2026-11-04"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND"
raw_path: /Users/kmfp/hmi-evidence-deposits/deposits/HMI-TOPIC-0026/10.1021_envhealth.5c00053.pdf
raw_sha256: "103dd7f454f90fe097949bd3272d9dbd770faab04663ecaac709fdd21ebbc934"
metals: [In]
ingredients: []
products: []
matrices: [mouse lung, mouse BALF, RAW264.7 macrophages]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "C57BL/6 mice exposed to m-ITO (25-200 nm) or n-ITO (15-25 nm) at 3.6 or 36 mg/kg by oropharyngeal aspiration for 28 days; RAW264.7 macrophages in vitro"
evidence_fitness:
  supports: [mechanism-of-toxicity, lung-fibrosis-mechanism, macrophage-toxicity, adverse-outcome-pathway, nanoparticle-size-effects, animal-data, IL-17A-pathway]
  does_not_support: [dietary-exposure, food-concentrations, general-population-exposure]
audience: [regulator, researcher]
sources: 0
updated: 2026-11-06
ingest: HMI-TOPIC-0026
---

# Zhang et al. 2025: AOP framework for ITO nanoparticle-induced pulmonary fibrosis

This study integrated population disease data and toxicology studies to establish an adverse outcome pathway (AOP) for ITO nanoparticle-induced pulmonary fibrosis in mice, with IL-17A as the molecular initiating event.

## Key numbers

- ITO composition: approximately 90% indium oxide and 10% tin oxide (p.1053).
- Global ITO demand exceeded 3,000 tons in 2020 (p.1053).
- m-ITO average particle sizes: 25.21 nm (TEM) and 102.89 nm (hydrodynamic), with zeta potential -1.96 mV in ultrapure water (Table 1).
- n-ITO average particle size: 10 to 50 nm (TEM), 207.1 nm hydrodynamic; zeta potential -3.98 mV in ultrapure water (Table 1).
- Low dose (3.6 mg/kg): derived from occupational exposure limit for ITO (0.1 mg/m3) with interspecies conversion.
- n-ITO at 3.6 mg/kg: significant increase in total protein and LDH in BALF vs. control (Figure 2A and 2B).
- n-ITO caused more pronounced lung inflammation (874 DEGs) and fibrosis (Masson staining) than m-ITO at same dose (Figure 2 and 3).
- IL-17A identified as a key molecular initiating event activating NF-kB, producing IL-1beta and TNF-alpha, and ultimately triggering cellular inflammation and microvascular leakage leading to fibrosis (Abstract).
- AOP confidence rated as moderate (Abstract).

## Methods (brief)

Oropharyngeal aspiration in C57BL/6 mice (3.6 and 36 mg/kg, 28 days). BALF analysis. HE, PAS, and Masson's trichrome histology. Immunohistochemistry (IL-1beta, TNF-alpha). RNA-seq. In vitro RAW264.7 macrophage cytotoxicity and cytokine assays. AOP built from integrated disease database (DisGeNET) and RNA-seq (KEGG enrichment). AOP confidence assessed by qualitative and quantitative weight of evidence.

## Evidence fitness

Establishes the AOP for ITO-induced pulmonary fibrosis with IL-17A as the initiating event, connecting occupational ITO exposure to fibrosis through macrophage-driven NF-kB/IL-17A signaling. The low-dose anchoring to the OEL (0.1 mg/m3) provides regulatory relevance. No dietary or food relevance.

## Limitations

Mouse oropharyngeal aspiration bolus model; not equivalent to chronic occupational inhalation. High dose (36 mg/kg) far exceeds likely occupational lung burdens. RAW264.7 is a mouse macrophage cell line; human macrophage responses may differ. AOP confidence is rated only as moderate by the authors.

## Related evidence

- [[metals/indium]]
