---
type: source
raw_handle: MFK_catalysts-13-00876
cite_key: he2023-ti3c2-uio66nh2-crvi-photoreduction
title: "In Situ Growth of Ti3C2/UiO-66-NH2 Composites for Photoreduction of Cr(VI)"
authors: ["Huan He", "Xusheng Wang", "Qin Yu", "Wenbin Wu", "Xinya Feng", "Deyu Kong", "Xiaohui Ren", "Junkuo Gao"]
year: 2023
publication: "Catalysts"
doi: "10.3390/catal13050876"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 2 Manual Fetches/catalysts-13-00876.pdf"
metals: [Cr-VI, Cr, Ti]
ingredients: []
products: []
matrices: [synthetic-k2cr2o7-solution, ti3c2-uio66nh2-photocatalyst, visible-light-photoreduction]
jurisdictions: [CN]
near_duplicates: []
sample_n: 6
sample_population: "Six photocatalyst conditions tested against synthetic potassium dichromate solution: Ti3C2, UiO-66-NH2, and Ti3C2/UiO-66-NH2 composites containing 5, 10, 15, or 20 wt% Ti3C2."
updated: 2026-06-02
---

# He et al. 2023 - Ti3C2/UiO-66-NH2 photoreduction of Cr(VI)

He and colleagues synthesized Ti3C2/UiO-66-NH2 composites and tested their visible-light photoreduction of synthetic Cr(VI) as potassium dichromate. This is primary remediation/testing evidence, not occurrence evidence. The routeable numbers are the potassium dichromate challenge concentration, catalyst loading, removal time, and first-order kinetic rate for the optimized 10 wt% Ti3C2 composite.

## Key numbers

### Cr(VI) photoreduction setup

Photoreduction was conducted at room temperature under visible light irradiation from a 300 W xenon lamp with 420 nm < lambda < 780 nm. The assay used 10 mg photocatalyst added to 40 mL K2Cr2O7 solution at 100 mg/L and pH 2. The suspension was stirred in the dark for 30 minutes, then irradiated for 40 minutes. Two milliliters of suspension were collected every 10 minutes, filtered through a 0.22 micrometer membrane, and analyzed by the diphenylcarbazide colorimetric method at 542 nm.

For the calibration curve, the authors prepared a 1000 mg/L potassium dichromate mother solution at pH 2, then prepared 0, 20, 40, 60, 80, and 100 ppm potassium dichromate standards.

### Catalyst ratios and removal

The Ti3C2/UiO-66-NH2 composites were named by Ti3C2 content:

| Composite | Ti3C2 content |
| --- | ---: |
| 1-T/U | 5 wt% |
| 2-T/U | 10 wt% |
| 3-T/U | 15 wt% |
| 4-T/U | 20 wt% |

The optimized 2-T/U composite, containing 10 wt% Ti3C2, removed 100% Cr2O7(2-) in 40 minutes. Its observed photoreduction rate was 0.0871 min^-1, about 2.6 times higher than the pure UiO-66-NH2 rate.

The authors report that catalyst dose and substrate concentration were also examined in supplemental Figure S5: higher Ti3C2/UiO-66-NH2 dose improved removal efficiency, while removal decreased as Cr(VI) concentration increased above 100 ppm.

### Stability and mechanism

The 2-T/U composite retained performance in recycling experiments and maintained PXRD patterns after photoreduction. The authors attribute the improved rate to a heterojunction structure between Ti3C2 and UiO-66-NH2: Ti3C2 acts as an electron sink, and the interfacial interaction/depletion layer suppresses charge recombination after light irradiation.

## Methods (brief)

Ti3C2 MXene was synthesized by etching Ti3AlC2 powder with HF. UiO-66-NH2 was synthesized by a solvothermal method. Ti3C2/UiO-66-NH2 composites were prepared by in situ solvothermal growth with adjustable Ti3C2 content. The materials were characterized by PXRD, SEM, EDS/mapping, XPS, FT-IR, N2 sorption, UV-vis diffuse reflectance, Mott-Schottky plots, transient photocurrent, photoluminescence, and electrochemical impedance spectroscopy. Cr(VI) removal was calculated as `(1 - C/C0) x 100%`.

## Implications

Certification: This source does not support HMTc product or ingredient standards. It tests synthetic K2Cr2O7 solution at pH 2 under laboratory irradiation.

Courses: Useful for explaining Cr(VI) reduction kinetics and the difference between an occurrence result and a remediation challenge. The source measures treatment performance, not baseline water contamination.

App: Route to Cr(VI), chromium, titanium/materials, and testing/remediation context. Do not treat the 100 mg/L potassium dichromate challenge as drinking-water occurrence.

## Wiki pages this source may touch

- [[metals/chromium-hexavalent]]
- [[metals/chromium]]
- [[metals/titanium]]
- [[testing/index]]
- [[mitigation/index]]

## Verification notes

The PDF has author attribution and DOI `10.3390/catal13050876`; no DOI conflict was observed. The source reports synthetic potassium dichromate treatment experiments, not natural water, food, ingredient, or product concentrations. Titanium is part of the catalyst material, not a contaminant result.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | reconcile: regenerate derived layer + restore stranded EU 2024/1987 nickel work |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84efb](https://github.com/paleofoundation/heavymetalindex/commit/140e84efb) | 2026-06-03 | refresh manual fetch generated outputs |
<!-- END: hmi-page-history -->
