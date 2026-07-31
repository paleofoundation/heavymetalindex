---
type: source
raw_handle: MFK_buchet1983
cite_key: buchet1983-belgium-duplicate-meal-metals
title: "Oral daily intake of cadmium, lead, manganese, copper, chromium, mercury, calcium, zinc and arsenic in Belgium: a duplicate meal study"
authors: [Buchet JP, Lauwerys R, Vandevoorde A, Pycke JM]
year: 1983
publication: "Food and Chemical Toxicology"
doi: "10.1016/0278-6915(83)90263-6"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/buchet1983.pdf"
raw_sha256: "f8b4db2a445c4415ea666b8271a2d131155d5946b46376ac8f3b66e02a2cabbf"
access_url: "https://doi.org/10.1016/0278-6915(83)90263-6"
metals: [Cd, Pb, Mn, Cu, Cr, tHg, Zn, tAs]
ingredients: ["[[ingredients/mixed-meals]]", "[[ingredients/beverages]]"]
products: ["[[products/mixed-meals-non-rice]]"]
matrices: [duplicate-meal, dietary-intake, mixed-meals, beverages]
jurisdictions: [BE]
near_duplicates: []
sample_n: 124
sample_population: "One hundred twenty-four 24-hour duplicate meals and beverages collected from Brussels, Liege, Charleroi, and a Brussels hospital kitchen in Belgium."
updated: 2026-06-08
---

# Buchet et al. 1983 — Belgian duplicate-meal metal intake

Buchet and colleagues analyzed 124 duplicate 24-hour meals from three Belgian areas and a Brussels hospital kitchen for Cd, Pb, Mn, Cu, Cr, Hg, Ca, Zn, and As. This is a dietary-exposure source: it measures whole daily meals and beverages, not concentration in a specific product category. It is therefore useful as historical duplicate-diet context and broad mixed-meal exposure evidence, but not as product-row occurrence data for standards pooling. Arsenic and mercury are reported as total elements only.

## Key numbers

Table 2 reports total 24-hour dietary intake distributions:

| Element/species | n | Unit | Mean | SD | 5th percentile | Median | 95th percentile | Range | Geometric mean / GSD |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Ca | 124 | mg | 624 | 296 | 236 | 541 | 1173 | 158-1520 | not reported |
| Zn | 124 | mg | 14.7 | 7.9 | 5.4 | 13.2 | 27.7 | 3.7-54.2 | not reported |
| Cu | 124 | mg | 1.4 | 1.0 | 0.5 | 1.3 | 2.5 | 0.2-9.1 | not reported |
| Cr | 123 | mg | 0.37 | 0.54 | 0.03 | 0.24 | 1.14 | <0.01-5.2 | 0.20 / 3.36 |
| Mn | 123 | mg | 3.1 | 1.8 | 1.1 | 2.6 | 6.8 | 0.6-8.8 | not reported |
| tAs | 122 | µg | 45.0 | 95.0 | 0.2 | 11.5 | 261 | 0.1-720 | 11.9 / 6.2 |
| tHg | 120 | µg | 13.5 | 45.9 | 0.3 | 6.5 | 34.9 | <0.1-497 | 5.1 / 5.2 |
| Pb | 119 | µg | 179 | 259 | 24.3 | 95.7 | 477 | 0.1-1767 | 100 / 3.4 |
| Cd | 124 | µg | 18.0 | 13.1 | 4.0 | 15.0 | 41.6 | 2.1-88.1 | not reported |

Additional source-reported values:

- Meal sources: 21 daily meals from a Brussels hospital kitchen; 63 domestic meals from Brussels; 20 from Liege; and 20 from Charleroi.
- The abstract reports median 24-hour intakes of Cd 15 µg, Pb 95.7 µg, Mn 2.6 mg, Cu 1.3 mg, Cr 0.24 mg, Hg 6.5 µg, Ca 541 mg, Zn 13.2 mg, and As 11.5 µg.
- The abstract states that about 1-2% of sampled daily meals had mercury and cadmium contents exceeding the WHO tolerable level, and in the case of lead this level was exceeded in 10%. The Discussion confirms "Some 10% of our samples had lead values above this standard."
- Recovery values from Table 1 were Ca 107.0±3.3%, Zn 97.0±3.3%, Cu 98.2±1.5%, Cr 94.3±7.7%, Mn 105.9±6.6%, As 101.6±5.3%, Hg 105.4±4.0%, Pb 92.8±8.0%, and Cd 109.0±9.4%.

## Methods (brief)

Participants prepared duplicate meals and beverages over 24-hour periods, excluding medicines, and stored equivalent samples in disposable plastic containers. Inedible parts were discarded, the rest of the foods and beverages were weighed, homogenized, lyophilized, and analyzed. Calcium and zinc were measured by flame atomic absorption spectrometry; lead, cadmium, copper, chromium, and manganese by graphite-furnace atomic absorption spectrometry; total mercury by a mercury/hydride system in amalgamation mode; and total arsenic after arsine generation and liquid-nitrogen condensation. The paper reports total arsenic and total mercury, not species.

## Implications

This source contributes historical Belgian duplicate-diet exposure context for multiple metals across whole daily meals. It can support dietary-intake and mixed-meal context pages, but because each sample is a 24-hour composite of all foods and beverages consumed, it should not be used as product-specific occurrence evidence for rice, beverages, meat, seafood, or any narrower row. The total arsenic and total mercury values should not be promoted to inorganic arsenic or methylmercury.

## Wiki pages this source may touch

- [[ingredients/mixed-meals]]
- [[ingredients/beverages]]
- [[products/mixed-meals-non-rice]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/manganese]]
- [[metals/copper]]
- [[metals/chromium]]
- [[metals/mercury-total]]
- [[metals/zinc]]
- [[metals/arsenic-total]]

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained the title page, abstract, methods, Tables 1-3, and discussion.
- DOI is not printed as a modern DOI string in the extracted text; it was derived from the printed PII `0278-6915(83)90263-6` as `10.1016/0278-6915(83)90263-6`. DOI, raw-handle, and cite-key checks found no existing source page before creation.
- Table 2 values were checked against the extracted text. Units are preserved as printed (`mg` and `µg` per 24-hour diet); no conversion to concentration units was performed.
- Speciation: arsenic is total As and mercury is total Hg. The source does not report iAs or MeHg.
- Routeability: this is duplicate-meal exposure evidence, not product concentration evidence. It is routed only to the broad mixed-meal row and should remain context-only for product standards unless a later method explicitly handles duplicate-diet composites.
- Calcium was measured and reported in the Key numbers table as printed in the source, but Ca is not a Part 14 canonical HMI metal abbreviation and the taxonomy snapshot does not list a `metals/calcium` page, so Ca is omitted from the `metals:` frontmatter array and no calcium wiki-link is added.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new product or ingredient slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [7714be765](https://github.com/paleofoundation/heavymetalindex/commit/7714be765) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [1263b065f](https://github.com/paleofoundation/heavymetalindex/commit/1263b065f) | 2026-06-08 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
