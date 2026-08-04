---
type: source
raw_handle: MFK_scientific-committee-on-consumer-safety-sccs-hydroxyapatite
cite_key: sccs2023-hydroxyapatite-nano-opinion
title: "SCCS Opinion on Hydroxyapatite (nano), SCCS/1648/22"
authors: ["Scientific Committee on Consumer Safety"]
year: 2023
publication: "European Commission Scientific Committee on Consumer Safety final opinion SCCS/1648/22, adopted 21-22 March 2023; EU PDF publication DOI 10.2875/102239."
source_type: regulatory-opinion
doi: 10.2875/102239
evidence_tier: A
license: "European Union, 2024; reuse terms not stated in extracted text."
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_may31_cat19_laundry/cat19_laundry/Scientific Committee on Consumer Safety (SCCS) - Hydroxyapatite (nano) Opinion.pdf"
raw_sha256: "ea78ac13ccfd31b03018c45721dd58f0dca4f8edba44356ad06dcedd1284c3bd"
access_url: "https://doi.org/10.2875/102239"
metals: [tAs, Ba, Pb, Fe, Cu, Mg, Mn, Ni]
ingredients: []
products: ["[[products/toothpaste]]", "[[products/mouthwash-oral-rinse]]"]
matrices: [cosmetic-personal-care, oral-care-products, toothpaste, mouthwash, cosmetic-ingredient, regulatory-opinion]
jurisdictions: [EU]
near_duplicates: ["[[sources/sccs2023-notes-of-guidance-cosmetic-ingredients-v12]]", "[[sources/sccs2025-methyl-salicylate-children-exposure-1676-25]]"]
sample_n: null
sample_population: "Regulatory-science opinion on notified hydroxyapatite (nano) for oral cosmetic products; no finished-product market sampling. The impurity table is for a submitted hydroxyapatite nano paste ingredient, not for toothpaste or mouthwash products as sold."
sampling_locations: ["European Union regulatory submission"]
sampling_year_range: "2023"
updated: 2026-06-09
---

# SCCS 2023 - hydroxyapatite nano opinion for oral cosmetic products

## Overview

The SCCS final opinion on hydroxyapatite (nano) evaluates the safety of a notified nano-form hydroxyapatite material in oral cosmetic products. It is not a finished-product occurrence study, but it contains regulatory-context heavy-metal impurity data for the submitted hydroxyapatite nano paste ingredient and a safe-use envelope for toothpaste and mouthwash. The impurity values below should not be pooled as toothpaste or mouthwash product concentrations.

## Key numbers

- Opinion identity: SCCS/1648/22, final opinion adopted during the SCCS plenary meeting on `21-22 March 2023`; PDF ISSN `1831-4767`; ISBN `978-92-68-19389-1`; DOI `10.2875/102239`.
- SCCS safe-use conclusion: based on data provided, hydroxyapatite (nano) is considered safe up to `10%` in toothpaste and up to `0.465%` in mouthwash.
- Scope limits: the conclusion applies only to rod-shaped particles where at least `95.8%` by particle number have aspect ratio below `3`, the remaining `4.2%` have aspect ratio not exceeding `4.9`, and particles are not coated or surface-modified.
- Exclusions: the opinion is not applicable to needle-shaped hydroxyapatite (nano) particles and is not applicable to sprayable products that could expose consumer lungs to nanoparticles by inhalation.
- Impurity specification: Table 2 reports `Total Heavy Metals (as Pb)` at `< 20 ppm` for the notified hydroxyapatite nano paste ingredient, citing Ph. Eur. 7th Ed. 2.4.8 Heavy metals.
- Table 3 heavy-metal/element impurity results for the notified hydroxyapatite nano paste ingredient are in `mg/kg`; the source table prints three result columns in source order:

| Analyte | Unit | Method label | Result 1 | Result 2 | Result 3 |
|---|---|---|---:|---:|---:|
| tAs | mg/kg | SM | <0.3 | 0.48 | 0.74 |
| Ba | mg/kg | SM | 1.4 | 1.4 | 0.6 |
| Pb | mg/kg | SM | 0.24 | 0.12 | 0.13 |
| Fe | mg/kg | SM | 38 | 39 | 15 |
| Cu | mg/kg | SM | 0.43 | 0.44 | 0.32 |
| Mg | mg/kg | SM | 160 | 160 | 90 |
| Mn | mg/kg | SM | 1.7 | 1.7 | 0.16 |
| Ni | mg/kg | SM | 1.1 | 1.1 | 0.27 |

- Other Table 3 elements not routed through HMI metal frontmatter because no current metal slug exists for them: potassium `11`, `9.9`, `7.5 mg/kg`; sodium `82`, `86`, `110 mg/kg`; strontium `43`, `44`, `24 mg/kg`.
- Solubility: the material is described as insoluble or practically insoluble in water, with solubility `0.0065 g/L at 20 deg C` by EU method A.6 under GLP, and soluble at low pH.

## Methods (brief)

This is an SCCS regulatory-science opinion under the EU Cosmetics Regulation nanomaterial framework, not a market survey. The Commission requested assessment of hydroxyapatite (nano) in oral cosmetic products after prior SCCS opinions could not exclude genotoxicity concerns. The opinion focuses on newly submitted genotoxicity data plus chemical/physical characterization inherited from SCCS/1624/20.

The extracted text omits the body of Tables 2 and 3 because the tables render as images in the PDF. The table values on this page were read from a rendered image of PDF page 9 (`pdftoppm -f 9 -l 9 -png -r 220`), and the surrounding text was cross-checked in `/tmp/mfk_june8_sccs_hydroxyapatite_nano.txt`.

Speciation: the source reports arsenic only as `Arsenic (As)`, so this page treats it as total arsenic context (`tAs`). Nickel, lead, barium, iron, copper, magnesium, and manganese are elemental impurity measurements; the source does not report Cr(VI), inorganic arsenic, methylmercury, or total mercury.

## Implications

Certification (HMTc): This source supports oral-care regulatory context and ingredient-impurity context for hydroxyapatite (nano) used in toothpaste and mouthwash. It should not be pooled as finished-product occurrence evidence for toothpaste or mouthwash because the measured matrix is a submitted ingredient paste, not consumer products as sold.

Courses: The source is a clean example of ingredient-versus-finished-product row fit. It also shows why rendered-table verification is sometimes necessary when PDF text extraction drops image tables.

App: If oral-care ingredient context is surfaced, this source can support an EU regulatory card noting the `10%` toothpaste and `0.465%` mouthwash safe-use envelope and the submitted ingredient's heavy-metal impurity table. It should not display those ingredient impurity values as finished-product contamination.

## Wiki pages this source may touch

- [[products/toothpaste]]
- [[products/mouthwash-oral-rinse]]
- [[metals/arsenic-total]]
- [[metals/barium]]
- [[metals/lead]]
- [[metals/iron]]
- [[metals/copper]]
- [[metals/magnesium]]
- [[metals/manganese]]
- [[metals/nickel]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/mfk_june8_sccs_hydroxyapatite_nano.txt`. The title page, abstract, mandate, chemical/physical specifications, impurity section, solubility line, safe-use conclusion, and exclusions were checked against this page.
- Tables 2 and 3 were present as image tables and not captured by `pdftotext`; PDF page 9 was rendered to `/tmp/mfk_pages/sccs_hap_page-09.png` and visually checked for the `< 20 ppm` heavy-metals-as-Pb specification and the Table 3 `mg/kg` impurity values.
- DOI `10.2875/102239`, SCCS identifier `SCCS/1648/22`, raw handle `MFK_scientific-committee-on-consumer-safety-sccs-hydroxyapatite`, raw SHA-256 `ea78ac13ccfd31b03018c45721dd58f0dca4f8edba44356ad06dcedd1284c3bd`, and candidate cite key `sccs2023-hydroxyapatite-nano-opinion` were searched before creation; no existing source page was found.
- Units are copied exactly as `ppm`, `mg/kg`, `%`, and `g/L`; no unit conversion was performed.
- Speciation: arsenic is recorded as `tAs` because the source reports only `Arsenic (As)`. No Cr(VI), iAs, MeHg, or tHg values are reported.
- Brand firewall: the source gives a trade name for the notified ingredient material. This page uses the generic phrase "notified hydroxyapatite nano paste ingredient" around impurity values and does not attach consumer-product brands to contamination values.
- Evidence tier: `A` because this is an EU SCCS final regulatory opinion with DOI-backed publication metadata. The measured impurity values remain ingredient-context, not finished-product occurrence evidence.
- Routing audit: `npm run evidence:source-routes` exited `0`; this source generated `2` oral-care product routing rows (`toothpaste` and `mouthwash-oral-rinse`), was absent from `data/evidence/routing_unresolved.csv`, and had only the expected nonblocking `ingredients` advisory in `data/evidence/routing_malformed.csv` because no hydroxyapatite ingredient slug exists.

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
