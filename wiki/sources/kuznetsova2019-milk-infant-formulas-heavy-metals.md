---
type: source
raw_handle: RPMEHG_10-15673-fst-v13i3-1476
cite_key: kuznetsova2019-milk-infant-formulas-heavy-metals
title: "Heavy metals in milk infant formulas"
authors: [I. Kuznetsova, G. Krusir, O. Garkovich, I. Kovalenko]
year: 2019
publication: "Food Science and Technology"
doi: 10.15673/fst.v13i3.1476
access_url: "https://doi.org/10.15673/fst.v13i3.1476"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-methylmercury-mehg/Infant formula powder/Organic mercury Infant formula powder/heavy-metals-in-milk-infant-formulas.pdf"
raw_sha256: "47464cad14e973ae73ba061c3cf1bc702f4a970bb9f3cb338cd23c93676006ef"
metals: [Pb, Cu, Zn]
ingredients: ["[[ingredients/milk-and-dairy]]"]
products: ["[[products/infant-formula-powder]]"]
matrices: [infant-formula-powder]
jurisdictions: [UA, BY, PL, CH, DE]
sample_n: 7
sample_population: "Seven dry milk formula products labeled for infants from 6 months to 1 year, developed/manufactured in Ukraine, Belarus, Poland, Switzerland, and Germany"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-07-29
---

# Kuznetsova et al. 2019 - heavy metals in milk infant formulas

## Overview

Kuznetsova and colleagues measured copper, zinc, and lead in seven dry milk infant-formula products labeled for infants from 6 months to 1 year. The study is direct powdered-formula occurrence evidence, but the paper reports product-level results by named commercial formula. Under the brand firewall, this page preserves only the category-level range and exceedance signal.

The source does not measure mercury or methylmercury despite appearing in a methylmercury research-pull folder.

## Key numbers

All concentrations are reported by the source in `mg/kg` for dry formula.

| Analyte | Source comparison value | Observed range across 7 formulas | Samples above comparison value | Maximum excess reported |
| --- | ---: | ---: | ---: | ---: |
| Cu | 0.5 | 0.49-0.57 | 2/7 | 0.07 |
| Zn | 5 | 4.9-5.45 | 3/7 | 0.45 |
| Pb | 0.05 | 0.049-0.13 | 2/7 | 0.08 |

The paper's abstract also cites maximum levels from Russian scientists for newborn milk as Pb `0.02 mg/kg`, Cd `0.02 mg/kg`, and As `0.05 mg/kg`; cadmium and arsenic were not measured in the seven-sample formula panel.

Category-level findings from Tables 1-7:

| Finding | Value |
| --- | ---: |
| Formula samples tested | 7 |
| Samples with no reported excess for any measured analyte | 4/7 |
| Samples with at least one reported excess | 3/7 |
| Samples with all three measured analytes at or below the source comparison values | 4/7 |
| Samples with Pb above 0.05 mg/kg | 2/7 |
| Samples with Cu above 0.5 mg/kg | 2/7 |
| Samples with Zn above 5 mg/kg | 3/7 |

## Methods (brief)

The authors tested dry milk formula products using emission spectral analysis for rapid lead detection and atomic absorption spectroscopy for microelement determination. The method section states that `100-200 g` portions were burned according to GOST 26929-86, with lead lines at `lambda = 283.31 nm` and `lambda = 405.78 nm` and comparison lines at `lambda = 282.4 nm`, `408.0 nm`, and a doublet at `404.4 nm` and `404.6 nm`. The method-development work lowered detection limits relative to prior use of ISP-28 and ISP-30 spectrographs, and the authors state that the same approach can be applied to zinc and copper.

Microelements in milk were determined by atomic absorption spectroscopy using a Saturn-2 spectrophotometer after spraying the mineralized sample solution in air-acetylene flame. The paper describes calibration by solutions with known concentrations. Porcelain dishes and utensils were used during mixture and sample preparation to avoid contact with lead-containing glass.

## Implications

This source contributes small-panel occurrence evidence for Pb, Cu, and Zn in follow-on powdered milk infant formula. It is most useful as a geographically mixed, non-US formula contamination signal and as method context for rapid lead detection in formula ash.

The source does not distinguish soy-based from non-soy formula in the HMTc row system, so it should remain broad powdered-formula context until row fit is resolved. The measured lead values are total lead in dry product; no basis conversion to prepared formula is made here. The source does not measure cadmium, arsenic, total mercury, methylmercury, or chromium species.

## Wiki pages this source may touch

- [[products/infant-formula-powder]]
- [[ingredients/milk-and-dairy]]
- [[metals/lead]]
- [[metals/copper]]
- [[metals/zinc]]

## Verification notes

- Identity check: DOI `10.15673/fst.v13i3.1476`, raw handle `RPMEHG_10-15673-fst-v13i3-1476`, candidate cite-key `kuznetsova2019-milk-infant-formulas-heavy-metals`, and SHA-256 `47464cad14e973ae73ba061c3cf1bc702f4a970bb9f3cb338cd23c93676006ef` were searched before creation; no existing clean post-2026-05-14 source page was found.
- Full-PDF read performed from the seven-page journal PDF. Tables 1-7 were checked once from `pdftotext -layout` and a second time against rendered page images before commit.
- Brand firewall: the source's named commercial formula table is not reproduced. The page reports only category-level ranges and counts.
- HMTc firewall: page records source facts only; no certification threshold, percentile, or pass/fail calculation is derived from this source.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
