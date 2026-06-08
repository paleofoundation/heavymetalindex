---
type: source
raw_handle: MFK_21-cammilleri-2025-toxic-metals-collagen-supplemen
cite_key: cammilleri2025-marine-collagen-toxic-metals
title: "Toxic metals in marine collagen supplements: occurrence and risk assessment"
authors: [Cammilleri G, Tortorici M, Pantano L, Galluzzo FG, et al.]
year: 2025
publication: "Open Medicine"
doi: "10.1515/med-2025-1141"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
review_state: machine_extracted
claim_classes: [occurrence, public_wiki_claim]
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/peptide_contamination_pdfs/21_Cammilleri_2025_Toxic_Metals_Collagen_Supplements.pdf"
raw_sha256: "ebf2765fa36b27fd51c78c3ad18f262a444acaed728db4e8b3dd90facf47f940"
access_url: "https://doi.org/10.1515/med-2025-1141"
access_date: 2026-06-08
metals: [tAs, Pb, Cd, tHg]
ingredients: []
products: ["[[products/supplements-protein-collagen-powders]]"]
matrices: [collagen-supplement, marine-collagen, fish-collagen]
jurisdictions: [IT]
sample_n: 120
sample_population: "120 marine (fish-origin) collagen supplement samples drawn from 65 brands purchased on e-commerce platforms and large-scale retail in Italy during 2022 (multiple samples per qualifying brand across production batches). Samples mineralized on an UltraWAVE digestion system and analysed for toxic metals by ICP-MS (Agilent 7700x); method validated with 90–110% acceptance and 96–105% recovery."
sampling_locations: ["Italy (e-commerce and retail)"]
sampling_year_range: 2022
updated: 2026-06-08
---

# Cammilleri et al. 2025 — Toxic metals in marine collagen supplements

## Summary

This is a primary occurrence survey of toxic metals in marine collagen supplements, a fish-derived supplement product within the HMTc scope. The authors measured arsenic, lead, cadmium, and mercury by ICP-MS in 120 samples spanning 65 brands of fish-origin collagen sold on Italian e-commerce and retail channels. The load-bearing finding is that arsenic is the dominant contaminant: total arsenic was the most abundant element measured, with a mean of 0.59 ± 0.28 mg/kg and a maximum of 1.11 mg/kg in a Pangasius-derived marine collagen. Lead was lower and consistent (0.13 ± 0.02 mg/kg), cadmium was near-ubiquitous but at very low levels (detected in 98% of samples, maximum 0.0018 mg/kg), and mercury was detectable in only 12% of samples. The authors note significant variability across brands. For the Index this establishes arsenic as the priority analyte for marine collagen supplements, with the fish/marine origin being the plausible route for the arsenic burden, consistent with arsenic accumulation in marine matrices generally.

## Key numbers

ICP-MS, total metals, expressed as mg/kg of supplement. Arsenic is total As; the authors reference the EFSA inorganic-As assessment for the risk step but report total As as the measured quantity.

| Metal | Mean (mg/kg) | Maximum (mg/kg) | Detection frequency |
| --- | --- | --- | --- |
| As (tAs) | 0.59 ± 0.28 | 1.11 | most abundant element |
| Pb | 0.13 ± 0.02 | — | — |
| Cd | very low | 0.0018 | 98% of samples |
| Hg | trace | — | 12% of samples |

- Arsenic dominates the toxic-metal profile; the 1.11 mg/kg maximum occurred in a Pangasius (catfish) marine collagen.
- Cadmium is detected in nearly all samples but at negligible concentrations (max 0.0018 mg/kg).
- Mercury is largely absent (detectable in 12% of samples only).
- Significant between-brand variability was reported.

## Methods (brief)

UltraWAVE microwave digestion followed by ICP-MS (Agilent 7700x) for As, Pb, Cd, Hg. 120 samples from 65 fish-origin collagen brands sold in Italy (2022). Method validated (acceptance 90–110%, recovery 96–105%). Total metals; no inorganic-As speciation performed (iAs referenced only for the risk comparison).

## Implications

- Establishes arsenic as the priority toxic metal for marine collagen supplements within [[products/supplements-protein-collagen-powders]], complementing the protein-powder cadmium signal from `bandara2020-protein-powder-heavy-metals` — collagen powders track arsenic, protein/whey powders track cadmium.
- The marine/fish origin links the arsenic burden to seafood-derived raw material, relevant to any supply-chain screening for collagen sourcing.
- Contributes [[metals/arsenic]] occurrence (with a 1.11 mg/kg high value) and low-level [[metals/lead]], [[metals/cadmium]], [[metals/mercury]] context for fish-collagen supplements.

## Wiki pages this source may touch

- [[products/supplements-protein-collagen-powders]] — arsenic-led toxic-metal profile for marine collagen.
- [[metals/arsenic]] — dominant contaminant; fish/marine-origin route; 1.11 mg/kg maximum.
- [[metals/lead]], [[metals/cadmium]], [[metals/mercury]] — low-level occurrence in collagen supplements.

## Verification notes

- Concentrations from the abstract and Table 3 (toxic metal concentrations, mg/kg). The paper reports per-brand data using anonymized brand numbers (e.g. "brand 2"); per the Part 12 firewall, only the category-level distribution (means, maxima, detection frequencies) is reproduced here, not the per-brand breakdown.
- Arsenic is reported as total As by ICP-MS; the inorganic-As fraction is not measured (EFSA iAs reference values are cited only for the risk discussion).
- Exact per-brand sample allocation (65 brands → 120 samples) is summarized; the brand-level table is not reproduced.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [17d578a](https://github.com/paleofoundation/heavymetalindex/commit/17d578a) | 2026-06-08 | ingest: cammilleri2025-marine-collagen-toxic-metals from June 8 (collagen supplement occurrence) |
<!-- END: hmi-page-history -->
