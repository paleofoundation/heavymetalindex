---
type: source
raw_handle: MFK_evaluation-of-heavy-metal-migration-from-plastic
cite_key: li2019-plastic-packaging-metal-migration
title: "Evaluation of heavy metal migration from plastic food packaging materials to aqueous simulants by ICP-MS"
authors: [Li R, Lee X, Zhan Z]
year: 2019
publication: "Shimadzu Application News No. AD-0207"
source_type: application_note
doi: null
no_doi_assigned: true
evidence_tier: C
license: "Shimadzu copyright; all rights reserved"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_may31_cat23_food_contact/cat23_food_contact/Evaluation of Heavy Metal Migration from Plastic Food Contact Materials (Shimadzu Application Note).pdf"
raw_sha256: "b9e53b47d199040dcf9bae2b8ffa620d1cb53f1ddaace538152b835281c22567"
access_url: null
metals: [Al, tAs, Ba, Cd, Co, Cr, Cu, Fe, Li, Mn, Ni, Pb, Sb, Zn]
ingredients: []
products: ["[[products/food-packaging-plastic-tubs]]", "[[products/food-packaging-flexible-pouches-films]]"]
matrices: [food-contact-material-leachate, food-simulant]
jurisdictions: [EU]
near_duplicates: []
sample_n: 3
sample_population: "Three plastic food-packaging material types obtained from local food markets: polystyrene container, polypropylene container, and polyethylene film."
sampling_locations: ["local food markets; country not reported in extracted text"]
sampling_year_range: "not reported in extracted text; PDF metadata and copyright indicate 2019"
updated: 2026-06-09
---

# Li 2019 - plastic food packaging metal migration

## Overview

Li, Lee, and Zhan report a Shimadzu application-note experiment measuring 14 elements leached from plastic food-packaging materials into aqueous simulants by ICP-MS. The evidence is C-tier because it is a vendor application note rather than a peer-reviewed paper, but it contains routeable food-contact-material leachate values for PS and PP containers and PE film. The results are migration into simulants, not metal concentrations in food as consumed.

## Key numbers

- Source identity: Shimadzu Application News No. `AD-0207`; PDF metadata creation date `13 November 2019`; `5` PDF pages.
- Materials: polystyrene (`PS`) container, polypropylene (`PP`) container, and polyethylene (`PE`) film obtained from local food markets.
- Leaching setup: `0.5 grams` of each packaging material immersed in `40 mL` of aqueous solution at room temperature. Simulants were DI water (`simulant A`), `3% acetic acid` (`simulant B`), and `2% nitric acid`.
- Analysis setup: after immersion, `1 mL` of soaking solution was mixed with `1 mL` of `3% acetic acid` and diluted to `10 mL`; calibration standards were prepared up to `50 ppb` for Al, As, Cd, Co, Mn, Ni, and Sb or `200 ppb` for Ba, Cr, Cu, Fe, Li, Pb, and Zn.
- Table 2 method performance: calibration coefficients were `r >0.9999` for all targeted elements. LODs were sub-ppb for all analytes, including As `0.005 µg/L`, Cd `0.001 µg/L`, and Pb `0.123 µg/L`.
- Table 3 spike recovery: `10 ppb` spikes in simulant B from PS and PP samples gave recovery rates from `87%` to `116%` across 14 elements, with most triplicate RSDs below `3%`.
- Contact-time result: Figure 2 is graphical only in the extracted text; the authors state qualitatively that migration into simulant B increased from `1h` to `72h` for both PS container and PE film.

### Table 4 migration into food simulant B after 72 hours

Values are copied with the source table's unit label, `µg/kg`; `N.D.` is the source notation. The results prose describes the same concentrations as `µg/L`, so the table/prose unit conflict is flagged in Verification notes.

| Element | PS container | PP container | PE film | MDL |
| --- | ---: | ---: | ---: | ---: |
| Al | 49.3 | 71.4 | 135.5 | 2.01 |
| As | 0.11 | 0.06 | 0.48 | 0.05 |
| Ba | 14.0 | 7.14 | 22.9 | 0.05 |
| Cd | N.D. | N.D. | 0.26 | 0.012 |
| Co | N.D. | N.D. | N.D. | 0.006 |
| Cr | 6.50 | 0.15 | 0.84 | 0.13 |
| Cu | 30.4 | 19.6 | 13.3 | 1.23 |
| Fe | 17.0 | 2.39 | 142.5 | 1.04 |
| Li | N.D. | N.D. | N.D. | 0.64 |
| Mn | 2.51 | N.D. | 52.8 | 0.08 |
| Ni | 8.81 | 1.86 | 2.14 | 0.67 |
| Pb | 2.22 | 0.19 | 3.27 | 0.06 |
| Sb | 0.08 | 0.04 | 0.40 | 0.006 |
| Zn | 34.60 | 23.50 | 685.5 | 0.73 |

The text highlights PE film as having Zn `685.5`, Fe `142.5`, and Al `135.5` among the highest leachate values; for PS and PP containers, the most leached element was Al followed by Zn and Cu. Arsenic and lead were detected across `0.06 - 0.48` and `0.19 - 3.27`, respectively, using the source's prose units; cadmium was detected only from PE film at `0.26`.

### Table 5 PE film migration into different aqueous solutions

Values are copied as `µg/kg`.

| Element | Food Simulant A DI water | 2% HNO3 | Food Simulant B 3% acetic acid |
| --- | ---: | ---: | ---: |
| Al | 21.0 | 29.9 | 135.5 |
| As | 0.01 | 0.15 | 0.48 |
| Ba | 13.4 | 15.8 | 22.9 |
| Cd | N.D. | 0.05 | 0.26 |
| Co | N.D. | N.D. | N.D. |
| Cr | 0.03 | 0.69 | 0.84 |
| Cu | 1.94 | 3.86 | 13.3 |
| Fe | 3.72 | 73.0 | 142.5 |
| Li | N.D. | N.D. | N.D. |
| Mn | 1.09 | 15.9 | 52.8 |
| Ni | 0.91 | 1.37 | 2.14 |
| Pb | 0.02 | 2.54 | 3.27 |
| Sb | 0.04 | 0.08 | 0.40 |
| Zn | 31.4 | 127.5 | 685.5 |

## Methods (brief)

The application note used a Shimadzu ICPMS-2030 with helium collision-cell mode for all elements except Li and Sb. Samples were prepared from plastic packaging pieces leached at room temperature into DI water, `3% acetic acid`, or `2% nitric acid`; tabled PS/PP/PE comparisons use food simulant B after `72 hours`. Calibration used multi-element standards, online internal standards (`Sc`, `Y`, `Rh`, `Bi`), blank-derived LOD/LOQ estimates, and `10 ppb` spike-recovery checks in PS and PP simulant B extracts.

## Implications

Certification (HMTc): This source is small, C-tier food-contact-material leachate evidence for plastic packaging rows. It should not be pooled with food-as-consumed values and should carry the application-note quality caveat.

Courses: The note is a compact example of how simulant choice and contact time can change apparent metal migration from packaging materials.

App: If surfaced, the source can support a food-packaging-material context card that distinguishes PS/PP containers from PE film and keeps `3% acetic acid` leachate values separate from DI-water or nitric-acid simulants.

## Wiki pages this source may touch

- [[products/food-packaging-plastic-tubs]]
- [[products/food-packaging-flexible-pouches-films]]
- [[metals/aluminum]]
- [[metals/arsenic-total]]
- [[metals/barium]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/cobalt]]
- [[metals/copper]]
- [[metals/iron]]
- [[metals/lithium]]
- [[metals/manganese]]
- [[metals/nickel]]
- [[metals/lead]]
- [[metals/antimony]]
- [[metals/zinc]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/ingest.txt`; the overview, sample preparation, analytical conditions, Tables 2-5, contact-time paragraph, conclusion, and references were checked against this page.
- Identity checks before creation: title phrase, Application News number `AD-0207`, raw SHA-256 `b9e53b47d199040dcf9bae2b8ffa620d1cb53f1ddaace538152b835281c22567`, raw handle `MFK_evaluation-of-heavy-metal-migration-from-plastic`, and cite key `li2019-plastic-packaging-metal-migration` were searched in `wiki/sources/` and evidence files; only intake/tracker CSV rows were found.
- DOI status: no DOI is printed in the PDF metadata or extracted text. The page uses `doi: null` and `no_doi_assigned: true`.
- Unit fidelity: Tables 4 and 5 label migration values as `µg/kg`; the surrounding prose describes Table 4 values as `µg/L`. I retained the table units for tabular values and explicitly flagged the source-internal conflict rather than converting.
- Speciation: arsenic and chromium are not speciated. The source reports elemental ICP-MS leachate results, so frontmatter uses `tAs` for arsenic and `Cr` for total chromium; no Cr(VI) or inorganic arsenic values are inferred.
- Brand firewall: the Shimadzu instrument/vendor name is retained only as method/source identity. No consumer brand names from sampled packaging are reported or attached to values.
- Closed-vocabulary check: product routing uses broad existing plastic packaging rows. Exact PS-container, PP-container, and PE-film forms are retained in the source text and not invented as product slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
<!-- END: hmi-page-history -->
