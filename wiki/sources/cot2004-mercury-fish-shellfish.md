---
type: source
raw_handle: MFK_cot-2004-mercury-fish
cite_key: cot2004-mercury-fish-shellfish
title: "Updated COT statement on a survey of mercury in fish and shellfish"
authors: [Committee on Toxicity of Chemicals in Food, Consumer Products and the Environment]
year: 2004
publication: "Advice on fish consumption, Annex 3"
doi: null
no_doi_assigned: true
access_url: null
source_type: gov-report
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Global Heavy Metal Reports/reports/UK/COT_2004_mercury_fish.pdf"
raw_sha256: "67363b5429bbc693ad3eccb84b4cb1874ffe5d691e97b8630332fbe1e114f44d"
metals: [tHg, MeHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/canned-tuna]]", "[[ingredients/shark]]", "[[ingredients/swordfish]]", "[[ingredients/marlin]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/canned-fish]]", "[[products/shellfish]]", "[[products/fish-marine-predatory]]", "[[products/fish-marine-non-predatory]]"]
matrices: [fish, shellfish, salmon, prawns, canned-tuna, fresh-tuna, shark, swordfish, marlin]
jurisdictions: [GB]
near_duplicates: []
sample_n: null
sample_population: "COT/SACN review of the 2002 FSA fish and shellfish mercury survey, 1998 MAFF marine fish/shellfish survey context, and UK blood mercury data."
sampling_locations: ["United Kingdom"]
sampling_year_range: "1998-2002"
updated: 2026-06-09
---

# COT 2004 - mercury in fish and shellfish

## Overview

The UK Committee on Toxicity updated its fish and shellfish mercury advice after the 2003 JECFA methylmercury PTWI revision. The statement reviews FSA survey data for imported/farmed fish and shellfish, UK dietary exposure estimates, and blood mercury data. It treats fish mercury as methylmercury-relevant exposure context but repeatedly notes that some intake estimates use total mercury measurements that do not distinguish inorganic and organic forms.

## Key numbers

- JECFA methylmercury PTWI: reduced from `3.3 µg/kg bw/week` to `1.6 µg/kg bw/week` in `June 2003`.
- 1998 MAFF survey context: mercury levels in tested fish and shellfish were low, and the highest-level consumer estimate was `1.1 µg/kg bw/week` including mercury intake from the rest of the diet.
- 2002 FSA fish survey: all but `3` species had mean mercury levels within `0.01 -0.6 mg/kg` of fish.
- Highest-mean species: shark `1.52 mg/kg`, swordfish `1.36 mg/kg`, and marlin `1.09 mg/kg`.
- Fresh tuna: mercury ranged from `0.141` to `1.50 mg/kg`, with mean `0.40 mg/kg`; one of `20` samples exceeded `1 mg/kg`, and the maximum in the other `19` samples was `0.62 mg/kg`.
- Canned tuna: mean mercury level was `0.19 mg/kg`.
- UK adult blood mercury: mean `1.6 µg mercury/L`; 97.5th percentile `5.88 µg mercury/L`; the highest blood mercury level corresponded to approximately `5.39 µg/kg bw/week` (`0.77µg/kg bw/day`) if at steady state.
- Table 6.1 canned-tuna exposure: adults mean `0.30 µg/kg bw/week`, 97.5th percentile `1.05`; adult women mean `0.34`, 97.5th percentile `1.19`; toddlers mean `0.84`, 97.5th percentile `2.45`.
- Table 6.1 whole-diet total mercury exposure: adults mean `0.31 µg/kg bw/week`, 97.5th percentile `1.19`; toddlers mean `0.56`, 97.5th percentile `2.17`.
- Table 6.2 one weekly portion for adults: shark `3.04`, swordfish `2.68`, marlin `2.20`, fresh tuna `0.80`, and canned tuna `0.38 µg/kg bw/week`.
- Table 6.2 one weekly portion for ages 1.5-4.5 years: shark `5.24`, swordfish `4.62`, marlin `3.79`, fresh tuna `1.38`, and canned tuna `0.66 µg/kg bw/week`.
- The statement notes that one weekly `140 g` portion of shark, swordfish, or marlin would result in methylmercury exposure close to or above `3.3 µg/kg bw/week` in all age groups.

## Methods (brief)

The statement synthesizes the 2002 FSA survey of mercury in imported fish/shellfish and UK farmed fish, the 1998 MAFF marine fish and shellfish survey, national fish-consumption data, and blood mercury data from British adults. Dietary exposure calculations use total mercury occurrence data for specific fish and shellfish categories and note that fish mercury is predominantly methylmercury, while whole-diet total mercury exposure also includes inorganic mercury.

## Implications

Certification (HMTc): This is A-tier UK seafood mercury context for fresh tuna, canned tuna, shark, swordfish, marlin, salmon, prawns, and whole-diet exposure. It should not be treated as a direct MeHg concentration table unless the source explicitly frames the calculation as methylmercury exposure.

Courses: The statement is useful for teaching the difference between total mercury concentration, methylmercury-relevant fish exposure, and whole-diet mercury intake that can include inorganic mercury.

App: The source can support UK seafood advice context and fish species notes for mercury, especially predatory fish and tuna.

## Wiki pages this source may touch

- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/canned-fish]]
- [[products/shellfish]]
- [[products/fish-marine-predatory]]
- [[metals/mercury-total]]
- [[metals/mercury-methyl]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1454.txt`; paragraphs 6.25-6.59 and Tables 6.1-6.2 were re-read before writing.
- Identity checks before creation: title phrase, raw handle `MFK_cot-2004-mercury-fish`, raw SHA-256 `67363b5429bbc693ad3eccb84b4cb1874ffe5d691e97b8630332fbe1e114f44d`, and cite key `cot2004-mercury-fish-shellfish` were searched in `wiki/sources/`; no existing source page was found.
- Units are preserved as `mg/kg`, `µg/kg bw/week`, `µg/kg bw/day`, and `µg mercury/L`.
- Speciation: occurrence concentrations are reported as mercury/total mercury. The page does not promote every total-mercury value to MeHg; it records the source's methylmercury exposure framing separately.
- Closed vocabulary: exact fish-species ingredient slugs exist for shark, swordfish, and marlin; other named matrices such as salmon and prawns remain descriptive or route through broad fish/shellfish slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [fb63f6e92](https://github.com/paleofoundation/heavymetalindex/commit/fb63f6e92) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
