---
type: source
raw_handle: papers-cube
cite_key: sadiq2021-baby-rice-cereal-bioaccessibility-speciation
title: "Multi-elemental risk assessment of various baby rice cereals: some cause for concern?"
authors: [Sadiq NW, Beauchemin D]
year: 2021
publication: "Canadian Journal of Chemistry"
doi: 10.1139/cjc-2020-0518
access_url: null
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Papers Cube Manual Fetch/sadiq-beauchemin-2021-multi-elemental-risk-assessment-of-various-baby-rice-cereals-some-cause-for-concern.pdf"
metals: [tAs, iAs, Cr, Pb, Cd, Se]
ingredients: ["[[ingredients/rice-cereal]]", "[[ingredients/rice]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]
matrices: [baby-cereal-rice-based, infant-cereal]
jurisdictions: [CA]
near_duplicates: []
sample_n: 3
sample_population: "Three commercial baby rice cereal brands purchased in Kingston, Ontario, Canada; ages 6 months and up; n=6 replicates per sample"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-15
---

# Sadiq and Beauchemin 2021 — Multi-elemental bioaccessibility and speciation in baby rice cereals

## Overview

This Queen's University study used both batch and online in vitro leaching methods to determine what fractions of As, Cr, Se, Cd, Pb, Cu, Fe, and Zn from three commercial baby rice cereals (brands A, B, C; Kingston, ON) can actually enter a baby's body. It is one of the few studies to conduct simultaneous HPLC-ICP-MS speciation of As, Cr, and Se in the bio-accessible fraction specifically, and its key finding for HMT&C is stark: all three samples showed bio-accessible As fractions exceeding the FDA's 100 ppb action level for iAs in infant rice cereal, meaning that the portion of As reaching the bloodstream was already at or above the regulatory threshold before speciation is even applied as a further discriminant.

## Key numbers

**Total concentrations (µg/kg, mean of n=6 replicates, from Table A1):**

| Analyte | Sample A | Sample B | Sample C |
|---------|----------|----------|----------|
| As      | 280 ± 120 | 300 ± 80 | 280 ± 20 |
| Cr      | 270 ± 20  | 175 ± 70 | 330 ± 80 |
| Pb      | 155 ± 35  | 125 ± 50 | 170 ± 40 |
| Se      | 160 ± 10  | 200 ± 30 | 200 ± 20 |
| Cd      | 180 ± 70  | 130 ± 90 | 190 ± 80 |
| Cu      | 2,000 ± 800 | 2,400 ± 600 | 2,600 ± 800 |
| Fe      | 7,300 ± 200 | 7,000 ± 500 | 7,000 ± 400 |
| Zn      | 2,600 ± 400 | 2,100 ± 300 | 2,400 ± 500 |

Units are µg/kg (ppb) wet weight, as purchased.

**Bio-accessible fractions (combined saliva + gastric + intestinal leachates, both methods):**
- As: 95–100% bio-accessible across all three brands
- Cr: 29–100% bio-accessible (high variance reflects real variability in Cr partitioning)
- Pb: 62–100% bio-accessible
- Se: 70–100% bio-accessible
- Cd: 63–100% bio-accessible
- Cu: 36–100% bio-accessible
- Fe: 67–100% bio-accessible
- Zn: 70–100% bio-accessible

**Arsenic speciation (Tables 3 and A1 — saliva and gastric leachates, n=3):**
- As(III): not detected in any sample in either leachate
- MMA: not detected in any sample in either leachate
- DMA: not detected in any sample in either leachate
- As(V): 100% of bio-accessible As was in As(V) form across all brands and leachates
- Saliva leachates: 45–67 ng/g As (as As(V)); gastric leachates: 205–330 ng/g As (as As(V))

**Chromium speciation (Table 4):**
- Cr(III): dominant form in most conditions; 70–100% of total Cr in most leachates
- Cr(VI): 15–50% of total bio-accessible Cr in some leachate fractions (saliva: 20–40 ng/g; gastric: 30–40 ng/g for samples A and B)
- The authors note that 15–50% of bio-accessible Cr being in the Cr(VI) form "remains a concern" despite Cr(III) being dominant overall

**Selenium speciation (Table 5):**
- Se(IV): not detected in any sample
- Se(VI): 100% of bio-accessible Se was in Se(VI) form
- Saliva: 15–42 ng/g Se(VI); gastric: 135–155 ng/g Se(VI)

**Oatmeal comparison (preliminary, n=1 brand):** Total concentrations — As: 289 µg/kg; Cd: 120 µg/kg; Pb: 100 µg/kg; Al: 1,300 µg/kg. Bio-accessibility also approached 100% for most elements. Speciation showed As(V) dominant, Cr predominantly Cr(III).

**Regulatory comparison:** The bio-accessible As fraction of all three rice cereal samples exceeded the FDA 100 ppb action level for iAs in infant rice cereal, which the authors note explicitly (p. 748). Because As was 100% in the As(V) (inorganic) form in the bio-accessible fraction, bio-accessibility and iAs availability are effectively equivalent in this study context.

## Methods (brief)

Instrumentation: Varian 820MS quadrupole ICP-MS with collision-reaction interface (CRI) using H2 gas at 65 mL/min to suppress ArCl+ polyatomic interference on As during gastric juice analysis. Speciation via HPLC (IonPac AS7 anion-exchange column) coupled online to ICP-MS with gradient elution through three HNO3 mobile phases (pH 3.3, 1.1, 0.1), simultaneously separating As(III), As(V), MMA, DMA, Se(IV), Se(VI), Cr(III), and Cr(VI) in 15 minutes.

Two leaching protocols were used. The online continuous leaching method packed 0.1–0.15 g cereal into a PTFE column and pumped artificial saliva, then gastric juice, then intestinal fluid sequentially at physiological temperature (37 °C) at 1 mL/min, each for 5 minutes. The batch method used 0.2 g cereal, 10-minute saliva equilibration, and 2-hour gastric and intestinal equilibrations. Both methods gave statistically equivalent bio-accessibility fractions (Student's t-test at 95% CI). Mass balance was verified for all elements.

Artificial saliva: KH2PO4 + NaOH, pH 6.5. Gastric juice: NaCl + pepsin + HCl, pH ~1–2. Intestinal fluid: KH2PO4 + pancreatin + NaOH, pH 6.8.

LOD is implicitly below the lowest reported concentration; the paper does not state explicit LOD/LOQ values for total elements, but all analytes above were quantified in all samples.

Sample size: n=3 brands, n=6 replicates per sample per method. Study conducted at Queen's University, Kingston, Ontario, Canada; samples purchased locally in Kingston. Study was published April 2021; samples presumably purchased in 2019–2020.

**Key methodological distinction:** This study reports bio-accessible fractions, not whole-sample digestion values as most occurrence surveys do. The 95–100% As bio-accessibility means that for risk purposes, essentially all As present in these cereals is available to a consuming infant. The comparison to the FDA 100 ppb action level is therefore the most conservative possible estimate of iAs exposure from these products.

## Implications

**Certification:** This paper is directly load-bearing for HMT&C infant cereal thresholds. The finding that bio-accessible As in all three tested brands exceeds the FDA 100 ppb limit signals that total-As occurrence values already imply iAs exceedance at the action level in typical rice-based baby cereals. HMT&C setting tighter than 100 ppb iAs for rice-based baby cereal is strongly supported by this evidence. The Cr(VI) finding (15–50% of bio-accessible Cr in the hexavalent form) is an additional analyte consideration: even if Cr(VI) is not in the primary HMT&C analyte set, this paper shows it is not negligible in rice cereal matrices and warrants attention in formulation guidance. The oatmeal preliminary data suggests oat-based alternatives carry their own Pb and Cd burden and should not be treated as automatically clean substitutes without their own analysis.

**Courses:** Useful for explaining why bio-accessibility matters for infant risk assessment and why the ground form of rice in baby cereals releases metals more completely than whole rice grains would. The speciation result (As exclusively as As(V) in the bio-accessible fraction, all of which is inorganic) demonstrates that the regulatory focus on iAs is well-calibrated for this matrix.

**App:** The near-complete bio-accessibility (95–100% for As, 62–100% for Pb, 63–100% for Cd) supports treating rice-based baby cereal as a high-conversion matrix where total metal concentration effectively equals bio-available metal concentration. The app can use this study to underpin conservative estimates for rice-based baby cereal ingredients.

## Wiki pages updated on ingest

- [[products/baby-cereals-dry-rice-based]]
- [[ingredients/rice-cereal]]
- [[ingredients/rice]]
- [[metals/arsenic]]
- [[metals/lead]]
- [[metals/cadmium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
