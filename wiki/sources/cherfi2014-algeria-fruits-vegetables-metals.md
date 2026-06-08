---
type: source
raw_handle: MFK_cherfi2014
cite_key: cherfi2014-algeria-fruits-vegetables-metals
title: "Food survey: Levels and potential health risks of chromium, lead, zinc and copper content in fruits and vegetables consumed in Algeria"
authors: [Cherfi A, Abdoun S, Gaci O]
year: 2014
publication: "Food and Chemical Toxicology"
doi: "10.1016/j.fct.2014.04.044"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/cherfi2014.pdf"
raw_sha256: "d42b50884f3cf719b980c95ac132c1074839720dc99c56e0e9e0273c0be97796"
access_url: "https://doi.org/10.1016/j.fct.2014.04.044"
metals: [Cr, Pb, Zn, Cu]
ingredients: ["[[ingredients/fruits]]", "[[ingredients/vegetables]]", "[[ingredients/root-vegetables]]", "[[ingredients/leafy-vegetables]]"]
products: ["[[products/fresh-fruit]]", "[[products/non-root-vegetables]]", "[[products/root-tuber-vegetables]]", "[[products/leafy-vegetables-other]]"]
matrices: [fresh-fruit, fresh-vegetables, dry-weight, algeria-market]
jurisdictions: [DZ]
near_duplicates: []
sample_n: 15
sample_population: "Two fruit and thirteen vegetable foodstuffs purchased from two wholesale markets supplying Boumerdes, Algeria, during the first two weeks of May 2012."
updated: 2026-06-08
---

# Cherfi et al. 2014 — Cr, Pb, Zn, and Cu in fruits and vegetables consumed in Algeria

Cherfi and colleagues measured chromium, lead, zinc, and copper in selected fruits and vegetables sold in Algeria and estimated dietary exposure for adults in Boumerdes. The source reports arithmetic mean concentrations in `mg/kg dry weight` for two fruit and thirteen vegetable foodstuffs. Chromium is reported as total chromium only; no Cr(III)/Cr(VI) speciation is provided.

## Key numbers

Table 1 reports concentrations of metals in `mg/kg dry weight`:

| Foodstuff | Cu | Zn | Pb | Cr |
| --- | ---: | ---: | ---: | ---: |
| Melons | 4.00 | 16.83 | 19.17 | 6.17 |
| Strawberries | 4.00 | 22.17 | 20.67 | 3.00 |
| Green peppers | 5.50 | 13.50 | 14.33 | 4.17 |
| Zucchinis | 3.83 | 12.67 | 18.50 | 9.00 |
| Beans | 13.83 | 19.33 | 12.33 | 6.83 |
| Salad | 4.17 | 23.50 | 20.83 | 4.17 |
| Beets | 10.17 | 14.83 | 16.50 | 12.33 |
| Peas | 9.67 | 17.67 | 21.67 | 6.50 |
| Carrots | 12.00 | 11.17 | 23.67 | 14.00 |
| Cucumbers | 23.15 | 25.86 | 16.08 | 9.12 |
| Artichokes | 10.67 | 39.67 | 20.00 | 11.00 |
| Spinaches | 8.33 | 49.00 | 16.67 | 8.33 |
| Tomatoes | 9.04 | 37.34 | 26.99 | 14.10 |
| Potatoes | 29.49 | 30.34 | 23.76 | 12.50 |
| Onions | 18.33 | 37.67 | 39.33 | 16.33 |

Additional source-reported ranges and exposure estimates:

- Abstract concentration ranges were Cu 4-29.49, Zn 11.17-49, Pb 12.33-39.33, and Cr 3-16.33 `mg/kg dry wt.`.
- The results section gives the same ranges, with Cu minimum 3.83 mg/kg in zucchinis and Cr maximum 16.33 mg/kg in onions.
- Table 3 global estimated daily intake values were Cu 12,185, Zn 17,998, Pb 15,659, and Cr 7547 `lg/day kg body weight`; the decimal separator appears to be printed as a comma in the extracted table.
- The abstract states Pb EDI was `15.66 lg Pb/kg body weight/day` and Pb THQ was `4.37`.
- Table 4 global target hazard quotients were Cu 0.30463, Zn 0.05999, Pb 4.38628, and Cr 0.00503; the combined global THQ was 4.75594.
- Table 4 reports the highest food-level combined target hazard quotient for potatoes at 2.06995, driven by Pb THQi 1.83633.

## Methods (brief)

Samples of two fruits and thirteen vegetables were collected during the first two weeks of May 2012 from two wholesale markets surrounding and supplying Boumerdes, about 50 km east of Algiers. Approximately 4 kg of each foodstuff was purchased from different sellers, household-pretreated by washing and removing rotten or inedible parts, homogenized, oven-dried at 105 °C for 24 h, dry-ashed at 450 °C, digested with concentrated nitric acid, filtered, and diluted to 50 mL. Pb, Zn, Cu, and Cr were measured by flame atomic absorption spectrometry on a Unicam Solar-929 with five readings per solution. Food-ingestion rates came from 843 self-administered questionnaires collected at market exits.

## Implications

This source contributes Algeria-market occurrence evidence for total Cr, Pb, Zn, and Cu in fresh fruit, leafy vegetables, non-root vegetables, and root/tuber vegetables. The values are dry-weight foodstuff concentrations from a small regional market survey, so they should not be mixed with wet-weight/as-consumed produce values without an explicit basis conversion. The chromium results are total chromium context and are not suitable for Cr(VI)-specific pooling.

## Wiki pages this source may touch

- [[ingredients/fruits]]
- [[ingredients/vegetables]]
- [[ingredients/root-vegetables]]
- [[ingredients/leafy-vegetables]]
- [[products/fresh-fruit]]
- [[products/non-root-vegetables]]
- [[products/root-tuber-vegetables]]
- [[products/leafy-vegetables-other]]
- [[metals/chromium]]
- [[metals/lead]]
- [[metals/zinc]]
- [[metals/copper]]

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained the title/DOI page, Table 1 concentration data, methods, exposure tables, discussion, conclusion, and references.
- DOI verified from the first page as `10.1016/j.fct.2014.04.044`; DOI, raw-handle, and cite-key checks found no existing source page before creation.
- The concentration table values above were checked against Table 1 in the extracted text. Units are copied as `mg/kg dry weight`; no conversion to fresh weight was made.
- Speciation: chromium is total Cr only. The source does not report Cr(III), Cr(VI), arsenic, mercury, cadmium, methylmercury, or inorganic arsenic.
- The EDI table prints global values with comma separators (`12,185`, `17,998`, `15,659`, `7547`) while the abstract prints Pb EDI as `15.66`; this page preserves the source-reported values and flags the formatting rather than recalculating them.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [cb77313](https://github.com/paleofoundation/heavymetalindex/commit/cb77313) | 2026-06-08 | ingest: cherfi2014-algeria-fruits-vegetables-metals fresh from MFK/June 8 New Folder With Items 3 2 |
<!-- END: hmi-page-history -->
