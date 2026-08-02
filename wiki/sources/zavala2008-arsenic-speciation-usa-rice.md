---
type: source
cite_key: zavala2008-arsenic-speciation-usa-rice
title: "Arsenic in Rice: II. Arsenic Speciation in USA Grain and Implications for Human Health"
authors: [Zavala YJ, Gerads R, Gürleyük H, Duxbury JM]
year: 2008
publication: "Environmental Science & Technology"
doi: "10.1021/es702748q"
source_type: peer-reviewed
evidence_tier: A
license: "copyright-acs"
raw_path: raw/studies/zavala2008-arsenic-speciation-usa-rice.pdf
sha256: a07d0100c073ef2af8bb9d185fdf4a5a8007848473213a4eae93c76991d7e0e8
access_date: 2026-05-12
access_url: "https://doi.org/10.1021/es702748q"
metals: [iAs, tAs]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-grain]
jurisdictions: [US, AU, BD, CN, IN, IT, ES, TW, TH]
sample_n: 105
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Zavala et al. 2008 — Arsenic speciation in USA rice grain and global comparison

## Overview

This study analyzed arsenic speciation (arsenite As(III), arsenate As(V), dimethylarsenic acid DMA, monomethylarsenic acid MMA) in 24 U.S. rice samples at the higher end of observed total As concentrations representing rice grown in Texas (n=16), Arkansas (n=3), and California (n=5), using IC-ICP-DRC-MS, and combined these with all published global rice speciation data (105 samples total) to characterize two distinct As rice types. Arsenite and DMA were the dominant species; DMA increased linearly with total As (R²=0.92), while inorganic As remained relatively constant at approximately 0.1 mg/kg regardless of total As level. U.S. rice was predominantly the "DMA type," while rice from Asia and Europe was predominantly the "Inorganic As type." The finding has direct human health implications because the two As species types differ substantially in relative toxicity.

## Key numbers

**U.S. rice speciation (Table 1, selected):**

| State | Color | Type | Total As (mg/kg) | DMA (mg/kg) | As(III) (mg/kg) | As(V) (mg/kg) |
|---|---|---|---|---|---|---|
| Arkansas | B | medium | 0.253 | 0.068 | 0.133 | 0.012 |
| Arkansas | W | long | 0.287 | 0.142 | 0.081 | 0.008 |
| California | B | long | 0.236 | 0.067 | 0.145 | 0.011 |
| California | B | basmati | 0.354 | 0.186 | 0.097 | 0.006 |
| Texas | B | T-basmati | 0.710±0.028 | 0.572 | 0.168 | <0.005 |
| Texas | W | jasmine | 0.369±0.008 | 0.221 | 0.069 | 0.013 |

Mean detection limits: As(III) 0.007, As(V) 0.025, MMA 0.007, DMA 0.017, AsB 0.007 mg/kg.

**Combined global dataset (n=105) inorganic As distribution:**
- 75th percentile: <0.138 mg/kg (all samples)
- Mean: 0.103 ± 0.045 mg/kg
- Median: 0.110 mg/kg
- 95th percentile: <0.181 mg/kg
- Outliers above 95th percentile belong to the inorganic As rice type

**Global rice classification by As type (Table 2):**
U.S.: 15 DMA type, 10 inorganic As type. Bangladesh: 10 inorganic As type. Australia: 1 DMA type, 1 inorganic As type. China: 1 DMA type. India: 2 inorganic As type. Italy: 1 DMA type. Thailand: 1 inorganic As type. 

Key finding: U.S. rice has mean 42% inorganic As as a fraction of total As; European/Bangladeshi rice has 60–80% inorganic As fraction. This means U.S. rice contains one-third to one-half less inorganic As than Asian/European rice at the same total As level.

DMA linearity: DMA concentration increases linearly with total As (R²=0.92, y = -0.0915 + 0.9104x). As(III) + As(V) (inorganic As) remains nearly constant at ~0.1 mg/kg regardless of total As level in U.S. DMA-type rice.

## Methods (brief)

IC-ICP-DRC-MS (Perkin-Elmer, Shelton CT) with AS16 anion exchange column (Dionex, Sunnyvale CA). TFA extraction (trifluoroacetic acid) at 75°C, 1200 W, 6 hours. Speciation quality control: 6-point calibration spanning full concentration range; species-independent calibration using average slopes for As(III) and As(V). Recovery of As measured as sum of species compared well with total As by HNO₃/H₂O₂ digestion: 72–123%, mean 96±12%.

## Limitations

U.S. samples were deliberately selected at the higher end of the total As distribution (not random sample); the inorganic As values are therefore representative of elevated-As U.S. rice, not the overall U.S. rice population. The companion paper (Zavala & Duxbury 2008, EST 42, 3856–3860) reports total As distributions for the full U.S. commercial rice population. DMA toxicity status is contested: recent findings suggest DMA(III) and DMA(V) metabolites may have greater carcinogenic potential than previously thought; the assumption that DMA is less toxic than inorganic As should not be treated as fully settled. The combination of two rice types in global health risk assessment obscures the population-level difference.

## Implications

- Certification: Foundational paper for understanding the iAs/tAs split in rice — specifically that U.S. rice is predominantly DMA-type, meaning iAs as a fraction of total As is substantially lower than in Asian rice. This is load-bearing for any HMT&C rice threshold: a 100 ppb tAs limit on U.S. rice corresponds to a very different iAs exposure than a 100 ppb tAs limit on Asian or European rice.
- Courses: Essential reference for teaching arsenic speciation in rice and why total As vs inorganic As is a non-substitutable distinction for human health risk.
- App: Note only — contamination_profile for rice iAs. This paper establishes that U.S. rice typically runs ~42% iAs/tAs (DMA type dominant), vs 60–80% in Asian/European rice. Do NOT conflate tAs with iAs.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[ingredients/rice]]
- [[testing/arsenic-speciation]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [3859dbf11](https://github.com/paleofoundation/heavymetalindex/commit/3859dbf11) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
