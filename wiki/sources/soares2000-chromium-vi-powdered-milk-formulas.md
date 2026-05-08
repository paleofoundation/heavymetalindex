---
type: source
raw_handle: raw/Working Together with ChatGPT/soares2000.pdf
cite_key: soares2000-chromium-vi-powdered-milk-formulas
title: "Selective Determination of Chromium (VI) in Powdered Milk Infant Formulas by Electrothermal Atomization Atomic Absorption Spectrometry after Ion Exchange"
authors: ["Maria E Soares", "Maria L Bastos", "Margarida Ferreira"]
year: 2000
publication: "Journal of AOAC International 83(1):220-223"
doi: "10.1093/jaoac/83.1.220"
pmid: "10693023"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: machine_extracted
claim_classes: [literature_finding]
license: public-reference-only
raw_path: "raw/Working Together with ChatGPT/soares2000.pdf"
sha256: "61a3ed4104b26901ec7989255aa5f148d1077f0202beed96fb1c693048771863"
access_date: 2026-05-08
access_url: https://doi.org/10.1093/jaoac/83.1.220
metals: [Cr-VI]
products: [infant-formula-powder]
matrices: [powdered-milk-infant-formula, follow-up-milk, dietetic-milk, reconstituted-milk]
jurisdictions: [PT]
sample_n: 20
sample_population: "Twenty commercial powdered milk brands available in Portugal: 7 infant formulas, 5 follow-up milks, and 8 dietetic milks"
updated: 2026-05-08
---

# Soares et al. 2000 - Cr(VI) in powdered milk formulas

## Summary

This peer-reviewed AOAC International paper adapts an ion-exchange / electrothermal atomic absorption spectrometry method for selective hexavalent chromium measurement in powdered milk formulas. The paper is useful because it reports Cr(VI), not total chromium, in 20 commercial powdered milk products from Portugal, but the occurrence data are small, market-specific, and not separated into HMTc non-soy versus soy-based powdered formula rows.

## Key Numbers

| Scope | N | Basis | Cr(VI) range | Mean | Table/section | HMTc handling |
| --- | ---: | --- | ---: | ---: | --- | --- |
| Infant formulas for newborn infants | 7 | powder as sold | <10 to 75 ng/g | 24 ng/g | Table 4 | Base powdered-formula context; subtype not resolved. |
| Follow-up milks for infants older than 4 months | 5 | powder as sold | <10 to 26 ng/g | 12 ng/g | Table 4 | Base powdered-formula context; subtype not resolved. |
| Dietetic milks for infants in pathological situations | 8 | powder as sold | <10 to 75 ng/g | 33 ng/g | Table 4 | Base powdered-formula context; subtype not resolved. |

Because 1 ng/g equals 1 ppb on a mass basis, the reported means correspond to 24 ppb, 12 ppb, and 33 ppb Cr(VI), with source-scope maxima up to 75 ppb. The lower end of the range is censored at <10 ng/g, and the source does not report p50, p90, or p95.

## Methods Brief

Powdered milk was reconstituted in doubly deionized water at 1 g in 15 mL, proteins were precipitated, and Cr(VI) was retained on a Chromabond NH2 anion-exchange column before nitric-acid elution. Quantification used electrothermal atomization atomic absorption spectrometry at 357.9 nm.

The method validation reported a 1.8 ug/L detection limit in reconstituted milk, a 1.8-50.0 ug/L calibration range, analytical precision of 4.1 percent, overall-procedure precision of 6.5 percent, and standard-addition recoveries above 93 percent.

## Evidence Fitness

Evidence Fitness: EF-3, modeled or limited evidence. The source is species-specific for Cr(VI), directly relevant to powdered formula context, and reports product-group means and ranges. It is not a reconstructable sample-level distribution, does not resolve soy/non-soy formula rows, and should not be used to calculate HMTc row-standard percentiles by itself.

## Limitations

- The survey covers 20 Portuguese-market products and does not report brand-level values.
- The product groups do not map cleanly to the current HMTc cow-milk/non-soy versus soy-based powdered formula split.
- The lower range is censored at <10 ng/g.
- No p50, p90, or p95 is reported or inferable from the published table.
- The method measures Cr(VI) after reconstitution and sample preparation; comparability to newer Cr speciation methods should be reviewed before cross-source pooling.

## Implications

Certification: Useful Cr(VI) species-specific warning context for powdered formula, but not standards-ready for non-soy or soy-based formula rows without row-fit adjudication and additional comparable sources.

Courses: Good teaching example for why total chromium and Cr(VI) must be kept separate, and why method validation does not automatically make a small occurrence survey standards-ready.

App: Supports keeping Cr(VI) as a distinct unresolved analyte for formula-powder evidence retrieval.

Microbiome: No direct microbiome endpoint.

## Provenance Notes

The local PDF was supplied in `raw/Working Together with ChatGPT/`. DOI and bibliographic metadata were checked against the Oxford Academic article record and PubMed record on 2026-05-08. The source is public-reference-only; cite the article record rather than redistributing the local PDF.

## Wiki Pages Updated On Ingest

- [[metals/chromium]]
- [[products/infant-formula-powder]]
