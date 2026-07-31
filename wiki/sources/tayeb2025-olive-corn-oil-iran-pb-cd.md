---
type: source
raw_handle: manual-fetch-kimi
cite_key: tayeb2025-olive-corn-oil-iran-pb-cd
title: "Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis"
authors: [Tayeb J, Movassaghghazani M]
year: 2025
publication: "Toxicology Reports"
doi: 10.1016/j.toxrep.2025.101922
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/01_Oils/Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, nort.pdf"
metals: [Pb, Cd]
ingredients: ["[[ingredients/olive-oil]]", "[[ingredients/corn-oil]]", "[[ingredients/vegetable-oils]]"]
products: ["[[products/cooking-oils-other]]"]
matrices: [olive-oil, corn-oil, edible-oil]
jurisdictions: [IR]
near_duplicates: []
sample_n: 60
sample_population: "Commercial and traditional olive oil (n=30: 12 commercial, 18 traditional) and corn oil (n=30: 18 commercial, 12 traditional) from Gonbad-Kavus City, Golestan province, northern Iran; March–June 2021"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# Tayeb and Movassaghghazani 2025 — Lead and cadmium in olive and corn oils, northern Iran

This study measured lead and cadmium in 60 commercial and traditional olive and corn oil samples from Gonbad-Kavus City in northern Iran using graphite furnace atomic absorption spectrometry (GFAAS) after microwave digestion. All samples had quantifiable Pb and Cd levels; all Pb concentrations were below the 80 µg/kg ISIRI (Iranian national) limit. Hazard Index (HI) values were below 1 for all oils, indicating no non-carcinogenic risk. However, the Margin of Exposure (MOE) for lead in traditional olive oil was below 10,000, signaling a concern for potential carcinogenic risk in that specific product type.

## Key numbers

Lead concentrations (µg/kg wet weight, mean ± SD):
- Traditional corn oil: 32.40 ± 6.13 (min 24.90, max 42.40)
- Commercial corn oil: 19.27 ± 8.12 (min 9.50, max 37.00)
- Traditional olive oil: 17.48 ± 4.82 (min 9.60, max 26.10)
- Commercial olive oil: 13.27 ± 3.37 (min 7.90, max 18.70)

Cadmium concentrations (µg/kg wet weight, mean ± SD):
- Traditional corn oil: 5.77 ± 1.34 (min 3.80, max 7.75)
- Commercial corn oil: 4.48 ± 1.80 (min 2.44, max 7.40)
- Commercial olive oil: 4.14 ± 0.53 (min 2.86, max 5.30)
- Traditional olive oil: 3.50 ± 0.72 (min 2.60, max 4.66)

All Pb values below ISIRI MRL of 80 µg/kg and EU limit of 100 µg/kg (Regulation EU 2023/915). No MRL exists for Cd in vegetable oils under Iranian or EU standards.

Risk assessment (70 kg adult, daily consumption 0.147 g corn oil + 0.328 g olive oil):
- HI (Pb + Cd combined): all oils < 1 (no non-carcinogenic risk)
- MOE for Pb: traditional olive oil = 7,875 (below 10,000 threshold, concern flagged); all other oils > 10,000 (no significant carcinogenic concern)
- MOE for Cd: all oils ≥ 36,000 (no concern)
- EFSA BMDL10 values used: Pb 0.63 µg/kg bw/day, Cd 0.36 µg/kg bw/day
- Source caveat: Table 2 is captioned as using 40.2 g/day, which conflicts with the methods text and the very small EDI values shown in the table; this page preserves the methods text inputs and flags the inconsistency below.

Traditional corn oil showed significantly higher Pb than all other types (p < 0.001). The source discusses environmental, agronomic, processing, packaging, and storage pathways generally but does not isolate the cause of the traditional/commercial difference.

## Methods

GFAAS (Varian SpectrAA-200 with GTA-110 graphite tube atomizer, deuterium background correction). Microwave digestion: 1 g sample + 6 mL HNO3 (65%) + 2 mL H2O2 (30%); 32 min total at staged wattages (500->800->1000->1300 W). The methods section lists wavelengths as Pb 228.8 nm and Cd 283.3 nm; these appear swapped relative to standard analytical lines, so the source wording is preserved as a verification caveat. Chemical modifier: NH4H2PO4/Mg(NO3)2. Three replicates per sample. Aqueous working standards 10–60 µg/L. Statistical analysis: SPSS v24, ANOVA, Duncan's multiple comparison test. Non-cancer risk: HQ = EDI/RfD (RfD Cd = 1 µg/kg bw; RfD Pb = 3.75 µg/kg bw). Cancer risk: MOE method per EFSA.

## Implications

Certification: Pb levels in these northern Iranian oils (13–32 µg/kg) are well below Codex/EU limits (100 µg/kg) and ISIRI (80 µg/kg). Cd levels were 3.5–5.8 µg/kg, and the source states that Iranian and EU standards do not define a vegetable-oil Cd MRL. Traditional oils showed higher Pb than commercial oils within each oil type, but the source does not isolate refining as the causal factor. This paper provides regional ppb-level data for olive oil and corn oil Pb/Cd profiling.

Courses: Demonstrates a source-specific comparison between traditional/local-store oils and commercial oils, with production mode treated as a stratification variable rather than a proven causal mechanism.

App: Usable as regional data points for [[ingredients/olive-oil]] and [[ingredients/corn-oil]] Pb/Cd profiles. Traditional corn oil Pb (mean 32.4 µg/kg = 32.4 ppb) is the highest value in this dataset.

## Wiki pages this source may touch

- [[ingredients/olive-oil]]
- [[ingredients/corn-oil]]
- [[ingredients/vegetable-oils]]
- [[products/cooking-oils-other]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[regulations/eu2023-contaminants-maximum-levels]]

## Verification notes

- Source identity checked against DOI 10.1016/j.toxrep.2025.101922 and the Marker extraction at `raw/markdown/FM_11795798/FM_11795798.md`.
- Source reports total Pb and Cd by GFAAS; no speciation issue is present.
- Lead ranges corrected against Table 1: commercial corn oil min 9.50 µg/kg and traditional olive oil range 9.60-26.10 µg/kg.
- `olive-oil`, `corn-oil`, and `edible-oil` are sample-matrix descriptors used here for routing/context; only existing ingredient/product/metals/regulation slugs are linked.
- Cross-vendor audit (Codex, 2026-05-17) preserved the source methods' daily-consumption inputs (0.147 g corn oil and 0.328 g olive oil) but flagged the conflicting Table 2 caption ("40.2 g/day").
- The source introduction contains an internal geography error ("Gilan province"); the title, methods, sample collection, figures, and conclusion identify the study location as Gonbad-Kavus City, Golestan province/northern Iran.
- `products/cooking-oils-other` exists as a local product page used for oil/condiment routing even though it is absent from the GPT taxonomy snapshot.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [50d719b22](https://github.com/paleofoundation/heavymetalindex/commit/50d719b22) | 2026-05-17 | minor | Narrative text revised |
| [a1aeac1d6](https://github.com/paleofoundation/heavymetalindex/commit/a1aeac1d6) | 2026-05-17 | major | 2 sections added and 1 removed; narrative text revised |
| [472d023f9](https://github.com/paleofoundation/heavymetalindex/commit/472d023f9) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
