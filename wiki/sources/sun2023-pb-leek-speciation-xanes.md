---
type: source
raw_handle: FM_10481275
cite_key: sun2023-pb-leek-speciation-xanes
title: "Pb speciation and elemental distribution in leeks by micro X-ray fluorescence and X-ray absorption near-edge structure"
authors: [Sun J, Yang Y, Luo L]
year: 2023
publication: "Journal of Synchrotron Radiation"
doi: "10.1107/s1600577523006616"
access_url: "https://doi.org/10.1107/s1600577523006616"
source_type: peer-reviewed
evidence_tier: A
license: null
raw_path: raw/markdown/FM_10481275/FM_10481275.md
metals: [Pb]
ingredients: ["[[ingredients/onions]]"]
products: []
matrices: [leek-root, leek-leaf]
jurisdictions: [CN]
near_duplicates: []
sample_n: null
sample_population: "Leeks (Allium tenuissimum L.) collected from a vegetable garden near the Qixiashan Pb-Zn mine, Nanjing, Jiangsu Province, China; cultivated in pot with mine soil (Pb 787 mg/kg); additionally irrigated with 500 mg/L Pb(NO3)2 solution for 3 weeks before XANES analysis to improve signal intensity"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Sun et al. 2023 — Pb speciation and elemental distribution in leeks using synchrotron XRF and XANES

This mechanistic study uses micro-XRF and XANES at the Shanghai and Beijing synchrotron facilities to map lead distribution and identify Pb chemical species in leek roots and leaves. Leek plants were sourced from a vegetable garden adjacent to the Qixiashan Pb-Zn mine in Nanjing, where soil Pb was 787 mg/kg (also As 68.63, Cd 4.37, Cu 69.81, Zn 823.15, Cr 78.34 mg/kg). The plants were then additionally spiked with 500 mg/L Pb(NO3)2 solution to obtain sufficient XANES signal. The central finding is that leek roots convert ambient Pb primarily into insoluble lead phosphate and basic lead carbonate (combined >80%), immobilizing Pb on root epidermis and limiting translocation to edible leaf tissue.

## Key numbers

Soil heavy metal concentrations at Qixiashan mine vegetable garden, Nanjing (mg·kg⁻¹, XRF analysis):
- Pb: 787.24
- As: 68.63
- Cd: 4.37
- Cu: 69.81
- Zn: 823.15
- Cr: 78.34

Pb speciation in leek root (linear combination fitting of XANES):
- Pb₃(PO₄)₂ (lead phosphate): 54.1%
- PbCO₃·Pb(OH)₂ (basic lead carbonate): 27.0%
- PbS (lead sulfide): 19.0%
- R-factor: 0.00036

Pb speciation in leek leaf:
- Pb₃(PO₄)₂: 68.0%
- PbCO₃·Pb(OH)₂: 20.9%
- Pb(C₁₇H₃₄COO)₂ (lead stearate): 11.1%
- R-factor: 0.00015

Elemental distribution (µ-XRF mapping): Pb, Cu, Mn, Cr, Ti, Fe confined primarily to outer ring/epidermis of root cross-section; Zn, K, Ca distributed throughout root cross-section.

Prior work by same group found leek root:leaf Pb concentration ratio of approximately 2.5–4.5, indicating 22–40% of absorbed Pb reaches above-ground edible portions.

## Methods (brief)

µ-XRF mapping at SSRF beamline 15U1 (20 keV incident energy; 25 µm × 25 µm spot; seven-element Ge detector). XANES at SSRF beamline 14W1 and BSRF beamline 1W1B; Pb L-III edge at 13035 eV; energy range 12985–13155 eV; ATHENA software for processing; linear combination fitting (LCF) against 13 Pb reference compounds.

Limitation: Pb concentrations in these samples are far above background agricultural conditions due to both mine-area soil and deliberate 500 mg/L Pb(NO3)2 irrigation spike. The speciation findings are mechanistically valid, but quantitative Pb concentrations in the leek tissue are not representative of commercially grown leeks and should not be used as contamination occurrence data. This is a mechanistic/speciation study, not an occurrence survey.

## Implications

Certification: Confirms that lead phosphate and lead carbonate are the primary Pb forms in leek tissue under high-Pb exposure conditions, meaning Pb bioaccessibility in the gut may be lower than total Pb concentration suggests; however, total Pb in tissue remains the regulatory metric. Relevant for understanding why bioavailability corrections in risk assessment are complex.

Courses: Strong illustration of plant Pb detoxification mechanisms and why the root epidermis acts as the primary barrier. The fact that 22–40% of absorbed Pb still reaches leaves underscores that root immobilization is partial, not complete.

App: Does not provide usable occurrence concentration data for commercial leeks. Confirms Pb as the primary heavy metal concern for alliums grown near contaminated soils.

Microbiome: Not addressed.

## Wiki pages updated on ingest
- [[ingredients/leeks]]
- [[metals/lead]]
- [[testing/arsenic-speciation]] (adjacent: XANES speciation methodology)

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [4a84eb1](https://github.com/paleofoundation/heavymetalindex/commit/4a84eb1) | 2026-05-17 | doi-recovery: replace 141 Scholar fallback URLs with real DOIs and venue URLs |
<!-- END: hmi-page-history -->
