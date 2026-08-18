---
type: source
raw_handle: AUTO_gap-mineral-water-pb-2025-10-1038-s41598-025-88431-4
cite_key: ranjbar2025-mineral-water-metals
title: "Machine learning models for water safety enhancement"
authors: [Ranjbar F, Sadeghi H, Pourimani R, Khanmohammadi S]
year: 2025
publication: "Scientific Reports"
doi: 10.1038/s41598-025-88431-4
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-mineral-water-pb_2025_10-1038-s41598-025-88431-4.pdf
metals: [Pb, Cd, tHg, Sn, tAs, Cr]
ingredients: ["[[ingredients/water]]"]
products: ["[[products/mineral-water]]", "[[products/bottled-drinking-water]]"]
matrices: [mineral-water, bottled-water]
jurisdictions: [IR]
near_duplicates: []
sample_n: 15
sample_population: "15 commercially available bottled mineral water brands purchased in Arak, Iran (factory locations distributed across Iranian provinces including Tehran, Lorestan, Ardabil, Hamedan, Khorasan Razavi, and Markazi)"
updated: 2026-05-30
sources: 1
audience: [regulator, educator, consumer, app]
---

# Ranjbar et al. 2025 - mineral-water safety monitoring in Arak City

## Overview

Ranjbar and coauthors assessed radioactive isotopes and heavy metals in 15 commercial bottled mineral water brands sold in Arak City, Iran. The heavy-metal result is reported only as a bulk non-detect at the analytical method's reporting floor; no per-sample concentrations, LODs, reference materials, or wavelength assignments are tabulated. The abstract names lead and chromium as the metals absent from samples; the Summary and Conclusion expands the assayed list to cadmium, mercury, tin, lead, and arsenic at "zero mg/L." The two analyte lists do not agree, and the paper provides no table reconciling them. The page is routeable as bottled/mineral-water non-detect surveillance, not as a concentration distribution.

## Key numbers

- Random sampling of n = 15 commercial mineral water brands (WFR1–WFR15) collected from supermarkets in Arak City, Iran. Factory sources span multiple Iranian provinces.
- Abstract (page 1) states that lead and chromium were "not present in the samples."
- Summary and Conclusion (page 15) states that "Heavy elements such as Cd, Hg, Sn, Pb, and As were detected at zero mg/L." The Conclusion's analyte list does not match the Abstract's analyte list (Cr appears only in the Abstract; Cd/Hg/Sn/As appear only in the Conclusion). Neither location reports LODs, per-sample values, or instrument wavelengths.
- Ra-226 specific activity: zero across all 15 samples (Table 5; abstract framed as "not detected").
- Th-232 average specific activity: 0.311 Bq/L (range 0.000–0.748 Bq/L; Table 6).
- K-40 average specific activity: 2.104 Bq/L (range 0.000–7.460 Bq/L; Table 7).
- Cs-137 average specific activity: 0.049 Bq/L (range 0.000–0.148 Bq/L; Table 8). All four radionuclide averages are below the WHO guidance levels (Ra-226 0.5, Th-232 1.0, K-40 22.1, Cs-137 10.0 Bq/L; Table 3).
- Annual effective dose averages: 57.6 µSv/y (infants), 80.7 µSv/y (children), 168 µSv/y (adults); all below the UNSCEAR reference of 1000 µSv/y (Table 9, Summary).
- Cancer incidence coefficient averages: 316 × 10⁻⁶ (infants), 442 × 10⁻⁶ (children), 922 × 10⁻⁶ (adults) (Table 10, Summary).
- Radium equivalent activity: 0–1.08 Bq/L across samples; external and internal hazard indices Hex, Hin range 0–0.002, all ≤ 1 (Table 11). Radionuclide results are routing context only for HMI metal pages.

## Methods (brief)

Heavy metals were measured by inductively coupled plasma atomic emission spectrometry (ICP-AES) on a 9100 Quant Plasma instrument (manufactured in Germany) housed at the central laboratory of Arak University. Plasma operated in the 6000–10,000 K range. Three emission lines were selected per element to mitigate chemical interference, and each analysis was conducted in triplicate. LODs, reference materials, individual element wavelengths, and per-sample concentration values are not reported in the paper, which limits the defensibility of the "zero mg/L" claim and precludes pooled-percentile inclusion. Radionuclide activities were measured by gamma-ray spectrometry on a coaxial HPGe p-type detector (model 30,195 BSIGCD, 30% relative efficiency, 4096 channels, energy resolution 1.95 keV at the Co-60 1332.520 keV line) at 3000 V, calibrated against a Cs-137 standard, processed with IsrmB SI / WINHEX / MATLAB and quantified with GammaVision32 (EG&G Ortec). Marinelli beakers (800 cc) were sealed for ~50 days to reach radon-progeny equilibrium before counting.

## Implications

Certification: bottled mineral-water non-detect context for the five analytes the paper assays at zero (Pb, Cd, tHg, Sn, tAs) and a sixth (Cr) named only in the abstract; not pool-eligible because no LODs or per-sample values are reported. Courses: useful example of how the absence of a per-sample table or LODs undermines a "zero" claim, even when the underlying instrument and protocol look sound. App: supports a regional, product-specific non-detect signal for Iranian bottled mineral water; does not generalize to global bottled-water exposure estimation.

## Wiki pages this source may touch

- [[products/mineral-water]]
- [[products/bottled-drinking-water]]
- [[ingredients/water]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury]]
- [[metals/tin]]
- [[metals/arsenic]]
- [[metals/chromium]]

## Verification notes

- License field reads `CC BY 4.0` but the published article is licensed `CC BY-NC-ND 4.0` (page 17). The ingest-time license value is preserved by audit-handling convention (raw ingest metadata is not edited during audit); this note records the discrepancy for the next license-handling pass.
- The paper itself contains an internal contradiction between the abstract (lead, chromium) and the Summary and Conclusion (cadmium, mercury, tin, lead, arsenic) on which heavy-metal analytes were assayed. No reconciling table is present. The metals frontmatter lists the union of both claims using non-speciated abbreviations (tHg, tAs) because ICP-AES is a total-element method without inorganic/methyl speciation.
- The paper reports the heavy-metal result only as a bulk "zero mg/L" or "not present" statement without LODs, reference-material recovery, wavelength assignments, or per-sample values. This is a defensibility weakness: a "zero" without a quantifiable reporting limit cannot be re-analyzed and cannot enter a pooled-percentile distribution. The page is therefore tagged routeable non-detect surveillance and explicitly not pool-eligible.
- 2026-06-09 audit subagent (Claude general-purpose, 5-check audit). Verdict REVISE. Applied: license discrepancy documented (not modified per audit hard-constraint on ingest-time fields); `sample_n` corrected from "not reported in abstract" to 15 (Table 1 enumerates WFR1–WFR15); `sample_population` expanded to name province coverage; `metals:` expanded from [Pb, Cr] to [Pb, Cd, tHg, Sn, tAs, Cr] to honor both abstract and conclusion analyte lists, with the discrepancy surfaced in body text; Methods (brief) rewritten with the ICP-AES instrument, plasma temperature, triplicate protocol, and gamma-spectrometry detector all extracted from pages 2–4 (audit caught a false claim that "methods detail requires extraction"); Wiki pages section expanded to add cadmium, mercury, tin, arsenic. Rejected: matrices slug `bottled-water` flagged by audit as off-vocabulary — false positive, slug is precedented across [[sources/decharat2023-lead-cadmium-drinking-water-thailand]], [[sources/decharat2020-school-drinking-water-pb-cd]], [[sources/efsa-chromium-contam-2014]], and [[sources/olowoyo2026-heavy-metals-drinking-water-global-review]]. Independent verification catches beyond the audit: Th-232 / K-40 / Cs-137 numeric averages and AED / ELCR values added to Key numbers from the Summary and Tables 6–10 (audit deemed acceptable to omit; included anyway for defensibility); explicit non-pool-eligibility flag added based on the LOD-absence finding.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [7148335cd](https://github.com/paleofoundation/heavymetalindex/commit/7148335cd) | 2026-06-09 | major | 4 sources added; narrative text revised |
| [9658f6be5](https://github.com/paleofoundation/heavymetalindex/commit/9658f6be5) | 2026-05-30 | major | 1 section added |
| [7a4c45a30](https://github.com/paleofoundation/heavymetalindex/commit/7a4c45a30) | 2026-05-30 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
