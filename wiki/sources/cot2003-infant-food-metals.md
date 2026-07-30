---
type: source
raw_handle: MFK_cot-2003-infant-metals
cite_key: cot2003-infant-food-metals
title: "COT statement on a survey of metals in infant food"
authors: [Committee on Toxicity of Chemicals in Food, Consumer Products and the Environment]
year: 2003
publication: "Committee on Toxicity statement"
doi: null
no_doi_assigned: true
access_url: null
source_type: gov-report
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Global Heavy Metal Reports/reports/UK/COT_2003_infant_metals.pdf"
raw_sha256: "10a78fce18a793bc3ca2bac54be37f1b43f19b2239020226c52b1151d057d7e6"
metals: [Al, Sb, tAs, Cd, Cr, Cu, Pb, tHg, Ni, Se, Sn, Zn]
ingredients: ["[[ingredients/baby-food]]", "[[ingredients/infant-formula-ingredients]]", "[[ingredients/soy-based-infant-formula]]", "[[ingredients/non-soy-infant-formula]]", "[[ingredients/fish-containing-baby-foods]]"]
products: ["[[products/baby-food]]", "[[products/infant-food-general]]", "[[products/infant-formula-powder]]", "[[products/infant-formula-powder-soy-based]]", "[[products/infant-formula-dairy]]", "[[products/infant-cereal]]", "[[products/infant-juice]]", "[[products/fish-containing-baby-foods]]"]
matrices: [infant-formula, soy-formula, cow-milk-formula, commercial-baby-foods, infant-desserts, rusks, infant-drinks, fish-containing-infant-foods]
jurisdictions: [GB]
near_duplicates: []
sample_n: 189
sample_population: "Commercial UK baby foods and formulae, including infant formulae, manufactured baby foods, desserts, rusks, and infant drinks, surveyed from March 2001 to July 2002."
sampling_locations: ["United Kingdom"]
sampling_year_range: "2001-2002"
updated: 2026-06-09
---

# COT 2003 - metals in UK infant foods and formulae

The UK Committee on Toxicity reviewed an FSA survey of `189` commercial infant-food and formula samples. The survey covered infant formulae, manufactured baby foods, desserts, rusks, and infant drinks, and estimated infant dietary exposure by age band and diet scenario. The analytical method measured total metals only, so arsenic, chromium, and mercury species are not substituted for iAs, Cr(VI), or MeHg.

## Key numbers

- Sample frame: `189` commercial baby-food samples were analysed; the survey covered products on sale in the UK from `March 2001` to `July 2002`.
- Method scope: ICP-MS measured total concentrations and did not determine individual species of each metal.
- Mercury occurrence: infant-food mercury mean/range was `3 µg/kg`, range `<0.5 - 20`, compared with the previous survey's `1.4 µg/kg`, range `<0.3 - 10`.
- Fish-containing meals: the current survey had `7` fish-containing foods out of `189`, compared with `2` out of `97` in the previous survey; COT states fish-containing meals provided only a minor contribution to the overall mean mercury concentration.
- Soy formula: average concentrations were higher in soya formula than in cows' milk formula except for mercury, especially nickel and aluminum, where concentrations were `2 to 3 times` higher.
- Aluminum exposure from manufacturers' consumption guidelines: normal diet `14`, `142`, `175`, and `177 µg/kg bw/day` for ages 0-3, 4-6, 7-9, and 10-12 months; soya diet `82`, `242`, `222`, and `218`.
- Total arsenic exposure: normal diet `0.09`, `1.3`, `1.8`, and `1.8 µg/kg bw/day`; soya diet `0.18`, `1.6`, `2.0`, and `1.9`. The statement notes the highest arsenic levels were in fish-containing dishes and were likely predominantly organic arsenic.
- Cadmium exposure: normal diet `0.04`, `0.35`, `0.61`, and `0.64 µg/kg bw/day`; soya diet `0.22`, `0.57`, `0.68`, and `0.72`.
- Lead exposure: normal diet `0.08`, `0.37`, `0.51`, and `0.52 µg/kg bw/day`; soya diet `0.22`, `0.56`, `0.59`, and `0.61`.
- Total mercury exposure: normal diet `0.07`, `0.18`, `0.18`, and `0.19 µg/kg bw/day`; soya diet `0.07`, `0.19`, `0.19`, and `0.20`.
- Nickel exposure: normal diet `0.7`, `4.2`, `5.8`, and `5.9 µg/kg bw/day`; soya diet `4.2`, `8.4`, `7.6`, and `7.9`.
- Tin exposure: normal diet `0.57`, `4.6`, `18.6`, and `18.5 µg/kg bw/day`; soya diet `0.62`, `4.7`, `19.7`, and `20.1`.
- Water context: at the then-permitted inorganic-arsenic drinking-water level of `50 µg/L`, water used to reconstitute formula could contribute `3 to 5 µg/kg bw/day`; at `10 µg/L`, the potential contribution could be `0.6 to 1 µg/kg bw/day`.

## Methods (brief)

FSA analysed infant formulae, manufactured baby foods, desserts, rusks, and infant drinks by ICP-MS. Exposure scenarios used older NDNS consumption data, an SCF high-consumer food-consumption figure, and manufacturers' feeding guidelines. The COT considered the feeding-guideline approach a worst-case scenario; water used to reconstitute formula or dried foods was not included in the survey exposure estimates.

## Implications

Certification (HMTc): This source contributes A-tier infant-food and formula occurrence/exposure context for UK products, but its arsenic and mercury values are total metals only. It should not be pooled as iAs or MeHg occurrence.

Courses: The statement illustrates infant exposure uncertainty from feeding assumptions, reconstitution water, and speciation absence.

App: The source can support UK infant-food profiles for total arsenic, cadmium, lead, total mercury, nickel, aluminum, and tin, with soy-formula context kept separate.

## Wiki pages this source may touch

- [[products/infant-food-general]]
- [[products/baby-food]]
- [[products/infant-formula-powder]]
- [[products/infant-formula-powder-soy-based]]
- [[products/infant-cereal]]
- [[products/infant-juice]]
- [[products/fish-containing-baby-foods]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[metals/nickel]]
- [[metals/tin]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1453.txt`; paragraphs 3-19 and Table 1 were re-read before writing.
- Identity checks before creation: title phrase, raw handle `MFK_cot-2003-infant-metals`, raw SHA-256 `10a78fce18a793bc3ca2bac54be37f1b43f19b2239020226c52b1151d057d7e6`, and cite key `cot2003-infant-food-metals` were searched in `wiki/sources/`; no existing source page was found.
- Units are preserved as `µg/kg` for product concentrations and `µg/kg bw/day` for exposure estimates.
- Speciation: the source states the analytical method did not determine metal species. Arsenic is recorded as `tAs`, mercury as `tHg`, and chromium as total Cr; no iAs, MeHg, or Cr(VI) values were inferred.
- Brand firewall: the survey considered main types and brands on sale, but this page records category and diet-scenario values only.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [fb63f6e92](https://github.com/paleofoundation/heavymetalindex/commit/fb63f6e92) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
