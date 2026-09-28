---
type: source
raw_handle: AUTO_ing-human-milk-cd-2017-10-1371-journal-pone-0183367
cite_key: klein2017-human-milk-trace-elements
title: "Concentrations of trace elements in human milk: Comparisons among women in Argentina, Namibia, Poland, and the United States"
authors: ["Klein L D", "Breakey A A", "Scelza B", "Valeggia C", "Jasienska G", "Hinde K"]
year: 2017
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0183367
source_type: peer-reviewed
evidence_tier: A
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-human-milk-cd_2017_10-1371-journal-pone-0183367.pdf"
metals: [Pb, tAs, Cd]
ingredients: ["[[ingredients/breastmilk]]"]
products: []
matrices: [human-milk]
jurisdictions: [AR, NA, PL, US]
near_duplicates: []
sample_n: 70
sample_population: "70 lactating mothers (Argentina n=21, Namibia n=6, Poland n=23, United States n=20)"
updated: 2026-06-09
---
# Klein et al. 2017 — Trace elements in human milk across four populations

## Overview

Klein and colleagues measured five essential trace elements (Ca, Zn, Fe, Cu, Mn) and three toxic elements (Pb, As, Cd) in human milk from 70 lactating mothers across four populations: an urban US sample (Boston, n=20), rural Polish villagers from the Mogielica Human Ecology Study Site (n=23), indigenous Qom women of northeastern Argentina (n=21), and semi-nomadic Himba women of northern Namibia (n=6). Concentrations of all elements except zinc varied significantly across populations after controlling for infant age, infant sex, and maternal parity. Cadmium was below the limit of detection in every sample and was excluded from analysis. Mean lead concentrations were low compared with recently published values from other populations, but mean arsenic concentrations were 2 to 5-fold higher than recently reported Taiwanese and Swedish values. This is a small-sample, broadly geographic human-milk exposure paper; it is not an infant-formula, commercial dairy, or product source.

## Key numbers

**Sample frame (Table 1):** N=70 lactating mothers from singleton pregnancies, no current smokers, infants 2 weeks to 2 years of age. Mean infant age 214 (SD 112) days. US n=20, Namibia n=6, Poland n=23, Argentina n=21. Multipara n=46, primipara n=24.

**Lead (Pb, Table 2; µg/L in human milk):**
- United States: mean 0.77, SD 0.45, range 0.41–2.1.
- Namibia: mean 2.15, SD 0.24, range 1.92–2.48.
- Poland: mean 1.02, SD 0.26, range 0.52–1.44.
- Argentina: mean 0.59, SD 0.40, range 0.21–1.69.
- Total: mean 0.91, SD 0.55.

Pairwise comparisons (Table 3): Argentina was significantly lower than every other population (US p=0.01, Poland p<0.001, Namibia p<0.0001). Namibia was significantly higher than the US (p=0.013); the Poland–US and Poland–Namibia contrasts were not significant (p=0.062 and p=0.107 respectively).

**Total arsenic (tAs, Table 2; µg/L in human milk):**
- United States: mean 3.47, SD 0.84, range 2.4–6.02.
- Namibia: mean 6.68, SD 2.46, range 4.08–11.2.
- Poland: mean 3.86, SD 1.0, range 3.03–7.9.
- Argentina: mean 4.51, SD 1.34, range 2.54–9.08.
- Total: mean 4.18, SD 1.5.

Pairwise comparisons (Table 3): Namibia was significantly higher than each of the other three populations (Argentina p=0.019, Poland p<0.001, US p<0.001). The US was significantly lower than Argentina (p=0.001) but not Poland (p=0.072); Poland and Argentina did not differ significantly (p=0.065).

**Cadmium (Cd):** below the level of detection in all 70 samples; the authors excluded Cd from analysis. The paper does not report a numerical LOD for Cd.

**Author-reported regulatory anchors (Discussion):** the WHO safety limit for lead in human milk is 2–5 µg/L; only the Namibian population mean (2.15 µg/L) exceeded the 2 µg/L lower bound. Mean arsenic concentrations across all four populations were below the EPA and WHO drinking-water recommended limit of 0.01 mg/L (10 µg/L), but the authors note that their values are 2 to 5-fold higher than recently reported Taiwanese and Swedish human-milk values.

## Methods (brief)

Single mid-feed human-milk samples were self-expressed by hand by each participant (up to 10 mL) into polypropylene BD Falcon tubes between 8:00 and 11:30 AM, mixed by hand and aliquoted into Axygen cryovials, then frozen at −20 °C (Argentina, Namibia) or −80 °C (Poland, US). Outside-US samples were shipped to Harvard on dry ice and held at −80 °C until analysis. Calcium, zinc, iron, copper, manganese, lead, arsenic, and cadmium were measured at the Trace Metals Lab at the Harvard School of Public Health: 1–2 mL of sample plus 1 mL ultrapure nitric acid (BDH Aristar Ultra) was digested in a Milestone Ultrawave microwave digestion system, diluted to 10 mL with deionized water, and analyzed on a Perkin Elmer ELAN DRC II ICP Mass Spectrometer. Cadmium was below the level of detection for every sample and dropped from analysis. The paper does not report element-specific LODs, certified reference materials, or recovery values.

Statistical analysis used multiple linear regression (R version 3.3.0; Hmisc and lsmeans packages) with infant age, infant sex, and maternal parity (primiparous vs multiparous) as covariates. Pb, Fe, and As were Box-Cox transformed; Zn, Cu, and Mn were natural log transformed; Ca was untransformed. Pairwise post-hoc contrasts used the Holm correction; alpha = 0.05, two-tailed.

Arsenic was reported as total arsenic by ICP-MS; the paper does not perform inorganic-vs-organic speciation. The page therefore records `tAs`, not `iAs`.

**Methodological caveat — Namibian samples (Discussion, p. 10–11):** the authors note that some Namibian milk samples were visibly contaminated with otjize, a traditional cosmetic paste of clarified butter (or petroleum jelly) and red ochre that Himba women apply daily to skin and hair, including the breasts. Red ochre is mainly iron oxide with trace amounts of other elements including calcium, manganese, and copper. The authors retain these samples in analysis on the rationale that the contamination reflects what Namibian infants actually ingest during nursing. Downstream interpretation of the Namibian population means (especially the elevated Pb 2.15 µg/L and Mn) should carry this caveat.

## Implications

This paper contributes occurrence data for Pb and total As in human milk across four geographically and culturally diverse populations and a methodologically important Cd-below-LOD negative result. The N=6 Namibia subsample is small and the otjize cosmetic-contamination caveat applies; cross-population comparisons should be read with both limitations in view. The paper is exposure-context evidence for human milk only; the values should not be pooled with infant formula, commercial milk, or any product-category occurrence pool.

## Related evidence

- [[ingredients/breastmilk]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[products/infant-food-general]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [c396e0393](https://github.com/paleofoundation/heavymetalindex/commit/c396e0393) | 2026-06-09 | major | 1 section added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
