---
type: source
raw_handle: AUTO_gap-fruit-juice-not-canned-cd_2015_10-17221-531-2014-cjfs
cite_key: paula2015-fruit-juices-elements-portugal
title: "Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices"
authors: [Paula FJA, Guine RPF, Cruz-Lopes L, Duarte AC, Fragata AOS, Reis MAL]
year: 2015
publication: "Czech Journal of Food Sciences"
doi: 10.17221/531/2014-CJFS
access_url: "https://www.agriculturejournals.cz/publicFiles/531_2014-CJFS.pdf"
source_type: peer-reviewed
evidence_tier: B
license: "open access"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/ingested/gap-fruit-juice-not-canned-cd_2015_10-17221-531-2014-cjfs.pdf"
raw_sha256: 20fe9d1bad716c3ff9def1f60ebe537aa7bf245987c220b877546c6eb951c92b
metals: [Cd, Cr, Pb, Ni, Zn, Fe]
ingredients: ["[[ingredients/fruit-juice]]", "[[ingredients/apple-juice]]", "[[ingredients/orange-juice]]", "[[ingredients/grape-juice]]"]
products: ["[[products/fruit-juice-not-canned]]", "[[products/fruit-juices-apple-containing]]", "[[products/fruit-juices-non-apple]]"]
matrices: [fruit-juice, apple-juice, orange-juice, grape-containing-juice, pineapple-juice]
jurisdictions: [PT]
near_duplicates: []
sample_n: 62
sample_population: "62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species, origins, production methods, packaging types, conservation states, pasteurisation approaches, and direct-extraction versus concentrate-dilution processes."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Paula et al. 2015 - selected elements in Portuguese-market fruit juices

## Overview

Paula et al. measured Cd, Cr, Pb, Ni, Zn, and Fe in 62 packs of 100% fruit juices from the Portuguese retail market. The study was designed to test how pre-harvest factors such as fruit species, origin, and agricultural practice, and post-harvest factors such as blending, packaging, conservation, pasteurisation, and processing relate to juice elemental composition. The direct occurrence signal for HMTc is a Portuguese-market fruit-juice dataset with low mean Cd, Cr, and Pb, higher Ni, and a clear association between fruit species and selected element concentrations.

## Key numbers

**Mean elemental concentrations in 100% fruit juices (Table 2, µg/L):**

| Element | Mean | 95% CI lower | 95% CI upper |
|---|---:|---:|---:|
| Cd | 1.597 | 1.374 | 1.819 |
| Cr | 2.767 | 2.380 | 3.153 |
| Pb | 20.75 | 18.10 | 23.40 |
| Ni | 73.37 | 60.89 | 85.84 |
| Zn | 545.9 | 483.1 | 608.7 |
| Fe | 1792 | 1654 | 1930 |

The authors describe the mean-concentration order as Cd < Cr < Pb < Ni < Zn < Fe. They compare Pb with a Codex Alimentarius maximum lead content for orange juice of 0.3 mg/kg and Zn with a Codex Alimentarius orange-juice limit of 5 mg/kg; the reported mean Pb and Zn values are below those comparators when treated as approximately equivalent µg/L to µg/kg juice concentrations.

**Factor associations (Table 3):**

| Element | Stronger association reported by the authors |
|---|---|
| Cd | Pineapple percentage Spearman correlation 0.715 |
| Cr | Red grape percentage Spearman correlation 0.634 |
| Pb | Brix Spearman correlation 0.551; fruit eta 0.482 |
| Ni | Red grape percentage Spearman correlation 0.598 |

The paper reports that a strong relationship was detected between fruit species and elemental concentrations. The authors also found that Zn concentration may help distinguish manufacturing process, with average Zn concentrations differing between direct-extraction juices and concentrate-derived juices.

## Methods (brief)

Samples were centrifuged at 6000 rpm for 60 minutes at room temperature to remove suspended material. The liquid fraction was digested with nitric acid in closed digestion tubes through a stepped thermoreactor program: 100 C for 15 minutes, 120 C for 15 minutes, and 148 C for 15 minutes. Digests were diluted to 10 mL with ultrapure water.

Cd, Cr, Pb, and Ni were measured by graphite furnace atomic absorption spectrometry using an AAnalyst 300 PerkinElmer system with HGA 850 graphite furnace and AS 800 autosampler. Zn and Fe were measured by flame atomic absorption using a Philips PU9100X spectrometer. Spiking recoveries were Cd 94-115%, Cr 80-126%, Pb 98-109%, Ni 95-108%, Zn 84-127%, and Fe 96-106%. No arsenic, mercury, aluminum, tin, antimony, or chromium speciation was reported; chromium is total Cr, not Cr(VI).

## Implications

Standards work: This paper contributes direct fruit-juice occurrence evidence for Cd, Pb, Ni, Cr, Zn, and Fe in the Portuguese market. It should be kept jurisdiction-aware: the data are useful for European/Portuguese context and for sensitivity checks, but should not be silently pooled into a US-market benchmark without an explicit rationale.

Courses: This is a useful example of separating matrix composition drivers. The paper does not merely report a generic juice mean; it tests fruit species, origin, organic/conventional status, packaging, conservation, pasteurisation, and process variables against elemental concentrations.

App: The data support fruit-juice flags for Pb, Cd, Ni, and total Cr. The app should preserve the source units and market context, and should not interpret the total chromium values as chromium(VI).

Microbiome: Not addressed.

## Wiki pages this source may touch

- [[products/fruit-juice-not-canned]]
- [[products/fruit-juices-apple-containing]]
- [[products/fruit-juices-non-apple]]
- [[ingredients/fruit-juice]]
- [[ingredients/apple-juice]]
- [[ingredients/orange-juice]]
- [[ingredients/grape-juice]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/lead]]
- [[metals/nickel]]
- [[metals/zinc]]
- [[metals/iron]]

## Verification notes

- Fresh review-weak-match upgrade on 2026-05-19 from `data/evidence/wishlist-fetch-audit.csv` row `GAP-fruit-juice-not-canned-Cd`.
- Evidence fitness: direct occurrence evidence for fruit juices on a Portuguese-market basis. The study reports summary means and confidence intervals, not sample-level concentration rows in the extracted text available to this run.
- Units are preserved as µg/L. Because fruit-juice density is close to 1 kg/L, these are approximately ppb, but the page does not substitute a converted basis.
- Speciation discipline: Cr is total chromium; no Cr(VI), inorganic arsenic, total arsenic, total mercury, or methylmercury values are reported.
- Brand firewall: the source groups samples by fruit type, process, origin, and packaging; no commercial product brands are named in this page.
- Wiki/HMTc firewall: this page records occurrence evidence and routing utility only. It does not propose HMTc thresholds or treat a Portuguese-market source as a US benchmark-pool member.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [3b7325f42](https://github.com/paleofoundation/heavymetalindex/commit/3b7325f42) | 2026-05-19 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
