---
type: source
raw_handle: Research Pull Mercury Deep Dive/lodhi2021.pdf
cite_key: lodhi2021-methyl-inorganic-mercury-infant-formula
title: "Evaluation of the Methyl and Inorganic Mercury in Infant Formula Milk and Cereals Samples: Estimated Risk Assessment in Children under 2.0 Years"
authors: ["Ramsha S. Lodhi", "Tasneem G. Kazi", "Farah N. Talpur", "Hassan I. Afridi", "Jameel A. Baig", "Asma A. Rajput"]
year: 2021
publication: "ACS Food Science & Technology"
doi: "10.1021/acsfoodscitech.1c00092"
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: "raw/Research Pull Mercury Deep Dive/lodhi2021.pdf"
access_url: "https://doi.org/10.1021/acsfoodscitech.1c00092"
raw_sha256: "0b5034cd9c2117a2e89eb16ff1731a2fc8df660dd78f0e5087972a898c25679d"
metals: [tHg, MeHg]
products: [infant-formula-powder-non-soy, infant-rice-cereal, baby-cereals-dry-rice-based, baby-cereals-dry-non-rice]
context_products: [infant-formula-powder-soy-based, infant-formula-rtf-liquid-non-soy, infant-formula-rtf-liquid-soy-based]
ingredients: [infant-formula-ingredients, milk-and-dairy, rice]
matrices: [infant-formula, powdered-formula, milk-based-formula, baby-cereal, rice-cereal]
jurisdictions: [PK]
sample_n: 30
sample_analyte_rows: 90
sample_population: "20 infant formula milk samples (starting, follow-on, grown-up) and 10 baby cereal samples purchased in Hyderabad, Pakistan"
review_state: machine_extracted
wiki_doi: null
sampling_locations: [Hyderabad]
sampling_year_range: null
updated: 2026-07-29
---

# Lodhi et al. 2021 — Methyl and Inorganic Mercury in Infant Formula Milk and Cereals

## Summary

This study is the first source in the corpus to report speciated methylmercury (MeHg) in infant formula on a sample level. It measured total mercury (tHg), inorganic mercury (iHg), and methylmercury (MeHg) in 20 infant formula milk samples (starting, follow-on, and grown-up formula) and 10 baby cereal samples purchased in Hyderabad, Pakistan, for children aged two years and under. Total mercury was determined by cold-vapour atomic absorption spectroscopy after acid digestion, inorganic mercury by cloud-point extraction, and methylmercury by the Horvat/Howard gas-chromatographic method.

Its significance for the Category 1 standards build is that it removes methylmercury from the "no sample-level dataset" state for infant formula. Every one of the 20 formula samples had detectable MeHg, so the analyte is not immaterial in this matrix; it is a low-level, quantified contaminant. The values should be read against two quality caveats stated below (single higher-contamination region, non-reference speciation method), which is why this source establishes materiality and a distribution but does not on its own set a defensible threshold.

## Key numbers — infant formula milk (n = 20)

All 20 formula samples were above the detection limit for all three species. Values are reported by the source in µg/kg of formula milk.

| Species | min | p50 | p90 | p95 | max | mean | n | detected |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [[metals/mercury-methyl\|MeHg]] | 0.17 | 0.30 | 0.60 | 0.60 | 2.00 | 0.39 | 20 | 20 |
| iHg (not an HMT&C analyte) | 0.49 | 1.02 | 2.46 | 2.73 | 3.80 | 1.40 | 20 | 20 |
| [[metals/mercury-total\|tHg]] | 0.69 | 1.42 | 3.20 | 3.20 | 5.88 | 1.87 | 20 | 20 |

MeHg was 11.9% to 32.2% of total mercury across the formula samples. The single highest formula value (MeHg 2.00, tHg 5.88 µg/kg) is a follow-on-formula outlier; the next-highest MeHg value is 0.60 µg/kg.

Sample-level formula data (µg/kg), retained for basis-matched pooling:

| Sample | class | MeHg | iHg | tHg |
| --- | --- | ---: | ---: | ---: |
| SFM 1 | starting | 0.32 | 1.15 | 1.48 |
| SFM 2 | starting | 0.17 | 0.60 | 0.80 |
| SFM 3 | starting | 0.19 | 0.79 | 1.01 |
| SFM 4 | starting | 0.41 | 0.82 | 1.28 |
| SFM 5 | starting | 0.18 | 0.49 | 0.69 |
| SFM 6 | starting | 0.20 | 0.86 | 1.10 |
| SFM 7 | starting | 0.26 | 1.29 | 1.60 |
| FFM 1 | follow-on | 0.40 | 2.46 | 2.90 |
| FFM 2 | follow-on | 0.26 | 0.78 | 1.07 |
| FFM 3 | follow-on | 0.60 | 2.41 | 3.10 |
| FFM 4 | follow-on | 0.24 | 1.15 | 1.43 |
| FFM 5 | follow-on | 2.00 | 3.80 | 5.88 |
| FFM 6 | follow-on | 0.38 | 2.73 | 3.20 |
| GFM 1 | grown-up | 0.31 | 1.40 | 1.74 |
| GFM 2 | grown-up | 0.29 | 1.02 | 1.33 |
| GFM 3 | grown-up | 0.30 | 1.86 | 2.20 |
| GFM 4 | grown-up | 0.18 | 0.67 | 0.87 |
| GFM 5 | grown-up | 0.60 | 1.20 | 1.86 |
| GFM 6 | grown-up | 0.19 | 0.77 | 1.00 |
| GFM 7 | grown-up | 0.34 | 1.02 | 1.42 |

## Key numbers — baby cereals (n = 10)

| Species | range (µg/kg) | note |
| --- | --- | --- |
| [[metals/mercury-methyl\|MeHg]] | 0.29 – 2.82 | MeHg exceeded 40% of total mercury in rice-based cereals; non-rice grain/fruit cereals ran about 10% lower |
| iHg | 0.65 – 3.69 | inorganic fraction |
| [[metals/mercury-total\|tHg]] | 0.95 – 6.58 | highest values in rice-based cereal (BC 1, rice: tHg 6.58) |

The authors attribute the elevated cereal fraction to mercury-contaminated rice used as the cereal base, consistent with the wider literature on rice as a methylmercury vector.

## Basis

The source reports formula results as µg/kg of "formula milk." Whether that is powder-as-sold or reconstituted-as-fed is not unambiguous from the extracted text and must be confirmed against the full methods before these values are pooled into the powder-as-sold rows. A cross-check supports a powder-as-sold reading: FDA 2026 reports formula tHg at or below 0.3 µg/kg prepared-for-feeding, and Lodhi's tHg (0.69–5.88) divided by the 1:7 reconstitution factor (0.1–0.84) sits in the same neighbourhood, whereas an as-fed reading would put this study roughly 20× above FDA. Pooling must resolve this before combining Lodhi with FDA-basis data.

## Methods and censoring

Total mercury by cold-vapour AAS after acid digestion; inorganic mercury by cloud-point extraction with Triton X-114; methylmercury by gas chromatography (Horvat method). All formula and cereal samples were reported above detection, so there is no left-censoring in this dataset. The methylmercury method is not species-specific isotope-dilution GC-ICP-MS, which is the reference technique; the reported MeHg-of-total fraction (12–32% in a dairy matrix) is high relative to expectation and may reflect method specificity as much as true speciation. This does not disqualify the dataset but bears on how much weight a single-source pool should give it.

## Evidence fitness

A-tier by source type (peer-reviewed primary measurement) with sample-level distributions for 20 formula and 10 cereal samples. Two caveats constrain its standalone pooling weight: the samples are from a single higher-contamination region (Hyderabad, Pakistan), and methylmercury was determined by a non-reference GC method. It is one study; the pooling engine's readiness bar for a defensible per-analyte percentile is at least three contributing sources or at least two with sample-level distributions. Lodhi is the first such source for formula MeHg, so it establishes the distribution but should be pooled with additional MeHg-in-formula sources before a standalone MeHg percentile is treated as firm.

## Interim standards implication (MeHg, infant formula)

Because Lodhi is a single, regionally skewed source, the defensible interim for the formula MeHg cell is to anchor it to the well-populated total-mercury cell rather than to pool one study: MeHg limit = pooled tHg P97 × the observed upper MeHg fraction (about 0.32), capped at the maximum observed formula value (2.0 µg/kg), expressed in the row's native basis. This leans on the larger tHg evidence base, is a deliberately conservative upper bound (it assumes worst-case co-occurrence of the P97 total-mercury sample with the maximum methyl fraction), and stays structurally coherent with the tHg standard. Lodhi's direct MeHg distribution (p90/p95 ≈ 0.60, max 2.0) is a validation cross-check on that anchor and converges with it. When one or more additional sample-level MeHg-in-formula sources are ingested, the anchor is retired in favour of a direct basis-matched pool. The total-mercury anchor and the direct distribution both require the tHg pool to exclude the quarantined 1,067 µg/kg mis-mapped duplicate-diet value; Lodhi's formula tHg maximum of 5.88 µg/kg independently confirms that value is not a real formula concentration.

## Limitations

Single country and a single laboratory; brand names withheld for legal reasons, so no brand-level structure is recoverable (nor should it be per the brand firewall). Non-reference methylmercury method. Small n per formula stage (7 starting, 6 follow-on, 7 grown-up). No soy-based formula and no ready-to-feed liquid were sampled, so soy and RTF rows receive this only as broad context, not direct evidence.

## Implications

Certification: First sample-level methylmercury dataset for infant formula in the corpus; converts the Category 1 formula MeHg cell from a mechanistic not-material argument to a literature-derived cell, and supplies the observed MeHg-to-total fraction used to anchor the interim limit. Not a standalone threshold basis on its own.

Courses: A clean worked example of mercury speciation (tHg = iHg + MeHg) in a non-seafood matrix, and of why a single higher-exposure regional dataset should not set a global limit unaided.

App: Supports flagging methylmercury as a low-level but real analyte in formula and rice-based baby cereal, not an absent one.

Microbiome: No direct microbiome endpoint.

## Wiki Pages Updated

- [[products/infant-formula-powder-non-soy]]
- [[products/infant-rice-cereal]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[metals/mercury-methyl]]
- [[metals/mercury-total]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 10 sections added; narrative text revised |
<!-- END: hmi-page-history -->
