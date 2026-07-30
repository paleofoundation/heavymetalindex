---
type: source
raw_handle: MFK_novakov2021
cite_key: novakov2021-serbia-mussels-metals-pahs
title: "Heavy metals and PAHs in mussels on the Serbian market and consumer exposure"
authors: [Novakov NJ, Kartalovic BD, Mihaljev ZA, Mastanjevic KM, Stojanac NS, Habschied KJ]
year: 2021
publication: "Food Additives & Contaminants: Part B"
doi: "10.1080/19393210.2021.1931475"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/novakov2021.pdf"
raw_sha256: "ef406ef6ad2079648bec7bc9a766194a8aff8f8cd25ec4691b7c1aab32f198d2"
access_url: "https://doi.org/10.1080/19393210.2021.1931475"
metals: [Pb, Cd, tHg, tAs]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/bivalve-molluscs]]", "[[ingredients/molluscs]]"]
products: ["[[products/seafood]]", "[[products/shellfish]]"]
matrices: [seafood, shellfish, mussels, fresh, frozen, wet-weight]
jurisdictions: [Serbia]
near_duplicates: []
sample_n: 84
sample_population: "Eighty-four mussel-meat samples collected from supermarkets and fish markets in Serbia from January 2019 to March 2020: 42 fresh imported mussel samples from Slovenia and Croatia and 42 frozen imported mussel samples from Spain and Chile."
updated: 2026-06-08
---

# Novakov 2021 - Serbian-market mussel metals and PAHs

Novakov and colleagues measured lead, cadmium, mercury, arsenic, and PAHs in mussels sold on the Serbian market. The metal occurrence values are direct shellfish finished-food data from fresh and frozen mussel-meat samples. Arsenic is reported as total arsenic and mercury as total mercury; the paper does not measure inorganic arsenic or methylmercury.

## Key numbers

Table 3 reports heavy-metal concentrations in fresh and frozen mussels in `mg/kg`:

| Element | Fresh mussels, n=42 range | Fresh mussels mean +/- sd | Frozen mussels, n=42 range | Frozen mussels mean +/- sd |
| --- | ---: | ---: | ---: | ---: |
| Pb | `0.12-0.74` | `0.32 +/- 0.18` | `0.01-0.54` | `0.21 +/- 0.14` |
| Cd | `0.11-0.28` | `0.16 +/- 0.05` | `0.01-0.38` | `0.17 +/- 0.08` |
| Hg | `0.03-0.15` | `0.06 +/- 0.03` | `0.01-0.09` | `0.04 +/- 0.02` |
| As | `1.45-5.87` | `3.97 +/- 0.87` | `1.12-2.87` | `1.56 +/- 0.36` |

The abstract summarizes the full-sample concentration ranges as Pb `0.01-0.74 mg/kg`, Cd `0.01-0.38 mg/kg`, Hg `0.01-0.15 mg/kg`, and As `1.12-5.87 mg/kg`.

The paper states that lead, cadmium, mercury, and arsenic were found in all `84` mussel samples. Lead and cadmium concentrations above the method LOQ had `100%` frequency. The source reports significant variation for arsenic between fresh and frozen mussels (`p <= 0.01`).

For exposure context, the paper calculated average weekly/monthly intake from a `200 g` seafood portion for adults. The authors report that eating one `200 g` mussel portion contributed `25.6%` and `16.8%` to the cited lead PTWI for fresh and frozen mussels, respectively; cadmium intake from fresh and frozen mussels was `12.80 ug/kg` and `13.60 ug/kg`, respectively; and mercury PTWI contributions were `74.3%` for fresh mussels and `49.4%` for frozen mussels. These are source-reported exposure calculations, not HMTc limits.

## Methods (brief)

Samples containing `50 g` of mussel meat were randomly collected from Serbian supermarkets and fish markets. Heavy-metal samples used `0.2 g` homogenized sample, microwave digestion with diluted nitric acid and hydrogen peroxide, dilution to `100 mL`, and ICP-MS on an Agilent 7700 using isotopes `208Pb`, `111Cd`, `201Hg`, and `75As`. PAHs were measured separately by QuEChERS extraction and GC-MS.

## Implications

This source supplies direct Serbian-market shellfish occurrence evidence for Pb, Cd, total Hg, and total As. The arsenic and mercury data are useful as total-element context only: total As must not be treated as inorganic arsenic, and total Hg must not be treated as methylmercury. Fresh and frozen mussels should remain distinguishable because arsenic means differed materially and the sample origins differed by form.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, abstract, sampling methods, Table 3, metal Results, and exposure-calculation text were checked in `/tmp/f3_unrepresented_texts/novakov2021.txt`.
- DOI `10.1080/19393210.2021.1931475`, raw handle `MFK_novakov2021`, and cite-key checks found no existing source page before creation.
- Units are preserved as `mg/kg`; no wet/dry or serving-basis conversion was performed.
- Speciation: arsenic is total arsenic and mercury is total mercury. The paper discusses methylmercury for exposure assumptions but does not measure MeHg, so frontmatter uses `tHg`, not `MeHg`.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; there is no mussel product slug, so values route through broad shellfish/seafood.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [e9e6a5f33](https://github.com/paleofoundation/heavymetalindex/commit/e9e6a5f33) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
