---
type: source
raw_handle: MFK_polymers-13-00818
cite_key: zlotko2021-black-soldier-fly-chitin-nickel-sorption
title: "Isolation of Chitin from Black Soldier Fly (Hermetia illucens) and Its Usage to Metal Sorption"
authors: ["Katarzyna Zlotko", "Adam Wasko", "Daniel M. Kaminski", "Iwona Budziak-Wieczorek", "Piotr Bulak", "Andrzej Bieganowski"]
year: 2021
publication: "Polymers"
doi: "10.3390/polym13050818"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 2 Manual Fetches/polymers-13-00818.pdf"
metals: [Ni]
ingredients: []
products: []
matrices: [black-soldier-fly-chitin, insect-exuviae, aqueous-nickel-solution, biosorbent, polymer-material]
jurisdictions: [PL]
near_duplicates: []
sample_n: 3
sample_population: "Hermetia illucens pupal exuviae from laboratory-scale cultivation in Lublin, Poland; chitin isolation variants and Ni2+ sorption experiments were run in triplicate, with EDX measured on five areas per sample."
updated: 2026-06-02
---

# Zlotko et al. 2021 - Black soldier fly chitin and nickel sorption

Zlotko and colleagues isolated chitin from black soldier fly pupal exuviae and tested whether one isolated chitin variant could sorb Ni2+ from aqueous solution. This is primary materials/remediation evidence, not insect-food or feed-occurrence evidence: the nickel data are controlled sorption experiments and surface EDX confirmation, not concentrations in edible insect meal or consumer products.

## Key numbers

### Chitin isolation yield

Table 2 reports chitin-isolation yield as mean +/- SD, n = 3. Variant 3 was selected for nickel sorption because it combined suitable yield, pore-like morphology, and high thermal stability.

| Variant | Depigmentation condition | Yield (%) |
| --- | --- | ---: |
| 1 | No depigmentation stage | 7.95 +/- 0.20 |
| 2 | Water at 100 degrees C for 24 h | 7.97 +/- 0.10 |
| 3 | 9% H2O2 at 80 degrees C for 2.5 h | 7.01 +/- 0.12 |
| 4 | 9% H2O2 at 80 degrees C for 5 h | 5.98 +/- 0.08 |
| 5 | 1% KMnO4 at 80 degrees C for 20 min, followed by 4% oxalic acid | 5.69 +/- 0.28 |

The authors report that the isolated chitin was alpha-form chitin with crystallinity around 60%. The maximum degradation temperature was about 392 degrees C for variant 3.

### Nickel sorption setup and capacity

For the Ni2+ sorption experiment, 0.1 g of chitin from variant 3 was mixed with 10 cm3 of Ni2+ solution at initial pH 5. Five Ni2+ solutions were tested: 10, 20, 40, 80, and 180 mg/dm3. The supernatant metal concentration was measured by ICP-OES after centrifugation, and all tests were run in triplicate at 22 +/- 1 degrees C.

The paper reports that chitin adsorbed 1.66 mg/g of nickel ions at pH 5.0 and an initial nickel concentration of 178 mg/dm3. Table 3 gives the isotherm parameters:

| Model | Parameter | Value |
| --- | --- | ---: |
| Langmuir | KL | 0.008 |
| Langmuir | qm (mg/g) | 3.086 |
| Langmuir | R2 | 0.620 |
| Experimental | qe exp (mg/g) | 1.662 |
| Freundlich | K | 0.010 |
| Freundlich | 1/n | 1.179 |
| Freundlich | R2 | 0.860 |

The authors concluded that the Freundlich model better fit the nickel sorption data than the Langmuir model.

### EDX confirmation

Table 4 reports EDX elemental composition for chitin variant 3 before and after Ni2+ sorption, as mean +/- SD with n = 5 measurement areas. Nickel was not detected before sorption and was 0.23 +/- 0.06% after sorption. Sodium decreased from 0.37 +/- 0.19% to 0.18 +/- 0.12%, chlorine increased from 0.33 +/- 0.16% to 0.64 +/- 0.19%, and Al, Si, and Ca were detected before sorption but not after sorption.

The authors interpret the surface-composition shifts and FTIR band shifts as evidence that ion exchange and complexation both contributed to Ni2+ sorption.

## Methods (brief)

Black soldier fly larvae were grown in laboratory-scale cultivation at the Institute of Agrophysics in Lublin, Poland. Pupal exuviae were cleaned with ethanol and water, dried at 60 degrees C, ground, and processed through demineralization with 1 M HCl, deproteinization with 1 M NaOH at 80 degrees C for 24 h, and variant-specific depigmentation. Chitin was characterized by optical/confocal microscopy, X-ray powder diffraction, thermogravimetric analysis, FTIR, and EDX.

Nickel solutions were prepared from nickel nitrate hexahydrate. Supernatant Ni2+ was measured using a Thermo Scientific iCAP Series 6500 ICP-OES. The source reports aqueous Ni2+ sorption and surface elemental composition; it does not report total metal concentrations in insect biomass intended for food or feed.

## Implications

Certification: Do not use this source in edible-insect, feed, ingredient, or product occurrence pools. It reports a biosorbent made from pupal exuviae and an engineered nickel-removal experiment.

App: Context for remediation and adsorption-method notes involving chitin or chitosan-derived sorbents.

Courses: Useful example for distinguishing raw-material characterization and adsorption capacity from contaminant occurrence in the raw biological source.

## Wiki pages this source may touch

- [[mitigation/remediation-evidence]]
- [[metals/nickel]]
- [[testing/index]]

## Verification notes

This page was built from the full PDF, including the abstract, chitin-isolation procedure table, nickel-sorption methods, Table 2 isolation yields, microscopy/XRPD/TGA/FTIR results, Figure 6 isotherm, Table 3 isotherm parameters, Table 4 EDX composition, discussion, conclusions, and data-availability statement. Products and ingredients are intentionally empty because the source uses black soldier fly exuviae as a chitin source and tests aqueous Ni2+ sorption; it does not quantify metals in edible insect material, animal feed, or consumer products.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [315a7b8a2](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8a2) | 2026-06-02 | major | 1 section added |
| [7b14b5db1](https://github.com/paleofoundation/heavymetalindex/commit/7b14b5db1) | 2026-06-02 | major | 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
