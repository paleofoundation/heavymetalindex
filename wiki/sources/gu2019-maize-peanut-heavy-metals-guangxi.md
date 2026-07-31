---
type: source
raw_handle: MFK_gu2019
cite_key: gu2019-maize-peanut-heavy-metals-guangxi
title: "Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China"
authors: [Gu Q, Yu T, Yang Z, Ji J, Hou Q, Wang L, Wei X, Zhang Q]
year: 2019
publication: "Environmental Toxicology and Pharmacology"
doi: "10.1016/j.etap.2019.103199"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/gu2019.pdf"
raw_sha256: "289263881e69737ae29957573a230eb3bdb8377c5f23869e13610706923f38fd"
access_url: "https://doi.org/10.1016/j.etap.2019.103199"
metals: [Cd, Cu, tHg, Pb, Zn]
ingredients: ["[[ingredients/maize]]", "[[ingredients/corn]]", "[[ingredients/peanuts]]"]
products: ["[[products/other-grain-products]]", "[[products/peanuts]]", "[[products/nuts-seeds-other]]"]
matrices: [maize-grain, peanut-grain, soil-crop-system, dry-weight, modeled-grain-concentrations]
jurisdictions: [CN]
near_duplicates: []
sample_n: 100
sample_population: "Sixty-five maize grain samples and thirty-five peanut grain samples paired with rhizosphere soils from Binyang County and Xingbin District, Guangxi, China; broader model context also used 8542 topsoil samples."
updated: 2026-06-08
---

# Gu et al. 2019 — Cd, Cu, Hg, Pb, and Zn in maize and peanut soil-crop systems in Guangxi

Gu and colleagues assessed Cd, Cu, Hg, Pb, and Zn in Guangxi soil-crop systems for maize and peanut. The paper includes measured grain/soil relationships, bioaccumulation models, and model-estimated grain concentrations used for adult maize-ingestion risk assessment. Table 5 values are model-estimated grain concentrations rather than raw measured sample distributions; measured grain values in Figure 5 are not numerically extractable from the PDF text layer.

## Key numbers

Table 5 reports estimated concentrations of heavy metals in grains, in `mg·kg−1`:

| Grain | Statistic | Cd | Cu | tHg | Pb | Zn |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Maize | Min | 0.0004 | 0.41 | 0.00001 | 0.01 | 2.04 |
| Maize | Mean | 0.01 | 2.26 | 0.001 | 0.04 | 27.32 |
| Maize | Max | 0.22 | 14.84 | 0.033 | 0.23 | 279.00 |
| Peanut | Min | 0.01 | 1.64 | 0.00005 | 0.02 | 3.21 |
| Peanut | Mean | 0.25 | 17.10 | 0.006 | 0.16 | 57.10 |
| Peanut | Max | 5.70 | 344.68 | 0.114 | 0.98 | 518.22 |

Additional source-reported grain findings:

- The text states that Cd in all measured maize grains was below 0.1 mg·kg−1 and Pb in maize grains was below 0.2 mg·kg−1.
- The text states that 5.17% of measured peanut-grain Cd and 8.57% of measured peanut-grain Pb exceeded the MHC values of 0.5 and 0.2 mg·kg−1, respectively.
- The text states that Cd, Cu, Hg, Pb, and Zn in maize grains scarcely exceeded MHC maximum values of 0.2 mg·kg−1 for Cd, 0.02 mg·kg−1 for Hg, and 0.2 mg·kg−1 for Pb.
- Model-estimated PCS (percentage of estimated grain concentrations from Table 5 exceeding the MHC, 2012 limits) was 0.01% for Cd, 0.04% for Hg, and 0.04% for Pb in maize grains, and 8.58% for Cd and 22.11% for Pb in peanut grains. These are distinct from the measured-grain exceedance percentages above and derive from the regression-model output rather than direct sample distributions.
- Table 6 maize-grain risk outputs: mean CDI values were Cd 6.78E-05, Cu 1.40E-02, Hg 5.52E-06, Pb 2.45E-04, and Zn 1.69E-01 `mg·kg−1·d−1`.
- Table 6 mean HQ values were Cd 6.78E-02, Cu 3.49E-01, Hg 1.84E-02, Pb 6.14E-01, and Zn 5.62E-01; the mean HI was 1.61E+00 and maximum HI was 7.72E+00.
- The authors did not assess health risk via peanut-grain consumption because peanut grains were described as oils that were not consumed directly by local residents.

## Methods (brief)

The study area covered Binyang County of Nanning City and Xingbin District of Laibin City in Guangxi, China. Sampling included 65 paired maize grain/rhizosphere soil samples, 35 paired peanut grain/rhizosphere soil samples, and 8542 topsoil samples. Soil properties and metal concentrations were analyzed for pH, CaO, total organic carbon, Mn, Cd, Cu, Hg, Pb, and Zn. Grain concentrations of Cd, Cu, Hg, Pb, and Zn were analyzed according to Chinese national food-safety methods. Bioaccumulation factors were calculated as grain concentration divided by paired rhizosphere soil concentration. The paper then developed regression models using soil properties and used those models to estimate grain concentrations and maize-grain CDI/HQ/HI.

## Implications

This source contributes supply-chain evidence for Cd, Cu, total Hg, Pb, and Zn in maize and peanut grain grown in Guangxi. It supports a soil-to-grain routing link, with direct relevance to maize/corn grain and peanut rows, but the most complete numeric concentration table is model-estimated and should not be treated as raw sample-level occurrence. Soil-only concentrations are context for the supply-chain pathway and should not be pooled as product concentrations.

## Wiki pages this source may touch

- [[ingredients/maize]]
- [[ingredients/corn]]
- [[ingredients/peanuts]]
- [[products/other-grain-products]]
- [[products/peanuts]]
- [[products/nuts-seeds-other]]
- [[metals/cadmium]]
- [[metals/copper]]
- [[metals/mercury-total]]
- [[metals/lead]]
- [[metals/zinc]]

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained accepted-manuscript metadata, DOI, methods, narrative grain findings, Tables 1-6, figure captions, conclusion, and references.
- DOI verified from the accepted-manuscript first page as `10.1016/j.etap.2019.103199`; DOI, raw-handle, and cite-key checks found no existing source page before creation.
- Table 5 and Table 6 values were checked against the extracted text. Units are copied as `mg·kg−1` and `mg·kg−1·d−1`; no conversions were made.
- Speciation: Hg is reported as total Hg. The source does not report methylmercury, inorganic arsenic, total arsenic, Cr, Cr(III), or Cr(VI).
- Measured Figure 5 grain concentrations are shown graphically in the PDF but not exposed as exact numeric values in the extracted text; this page does not guess those values.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [b1df58804](https://github.com/paleofoundation/heavymetalindex/commit/b1df58804) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [375197a66](https://github.com/paleofoundation/heavymetalindex/commit/375197a66) | 2026-06-08 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
