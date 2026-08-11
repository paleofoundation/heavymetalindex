---
type: source
raw_handle: MFK_reinke1975
cite_key: reinke1975-fish-shellfish-inorganic-arsenic
title: "The determination of arsenite and arsenate ions in fish and shellfish by selective extraction and polarography"
authors: [Reinke J, Uthe JF, Freeman HC, Johnston JR]
year: 1975
publication: "Environmental Letters"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/reinke1975.pdf"
raw_sha256: "90528db2a3ca355faad3175668f9830d21844b6cdae4b918dace54749989b755"
access_url: null
metals: [iAs, tAs]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]", "[[ingredients/shellfish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/fish-marine-non-predatory]]", "[[products/shellfish]]"]
matrices: [seafood, fish, shellfish, wet-weight, arsenic-speciation]
jurisdictions: [CA]
near_duplicates: []
sample_n: 8
sample_population: "White muscle or organ tissue from halibut, shrimp, haddock, crab, mackerel, herring, lobster tail, and lobster hepatopancreas analyzed as duplicate samples; the paper describes local fish and shellfish material from commercial sources or aquarium facilities at the Halifax Laboratory."
updated: 2026-06-08
---

# Reinke 1975 - Fish and shellfish inorganic arsenic

## Overview

Reinke and colleagues developed a selective extraction and polarographic method for arsenite and arsenate in fish and shellfish tissue. The occurrence-relevant table reports total arsenic and total inorganic arsenic, defined by the paper as `As3+` plus `As5+`, for eight fish or shellfish tissues. The key finding is that high total arsenic in several marine foods was not matched by high inorganic arsenic, except for lobster hepatopancreas at `0.9 ppm`.

## Key numbers

Table 4 reports inorganic arsenic and total arsenic content of white muscle from fish and shellfish, as mean duplicate analyses in `ppm`.

| Species or tissue | Total arsenic, `ppm` | Inorganic arsenic, `ppm` |
| --- | ---: | ---: |
| Halibut | `1.8` | `<0.5` |
| Shrimp (B.C.) | `3.9` | `<0.5` |
| Haddock | `10.0` | `<0.5` |
| Crab | `3.7` | `<0.5` |
| Mackerel | `1.5` | `<0.5` |
| Herring | `1.4` | `<0.5` |
| Lobster tail | `40.5` | `<0.5` |
| Lobster hepatopancreas | `22.5` | `0.9` |

The method section reports that levels down to about `0.5 ppm` inorganic arsenic could be determined, but an interfering wave was noticed at the lower limit. The abstract states that tested specimens had total arsenic levels up to `40.5 ppm` and little inorganic arsenic. Table 3 reports duplicate recovery of arsenite and arsenate added as a 1:1 mixture by weight to lobster hepatopancreas: `30 µg` added gave `73` and `80%` recovery; `20 µg` gave `83` and `78%`; `10 µg` gave `93` and `91%`; `5 µg` gave `98` and `98%`; `2.5 µg` gave `97` and `96%`; and `1 µg` gave `120` and `86%`.

## Methods (brief)

Arsenite, as arsenic trichloride, was extracted into benzene from strongly acidified tissue homogenates, then back-extracted into water and analyzed polarographically in `1 N HCl`. Arsenate left in the homogenate was reduced to arsenite with cuprous ion and isolated by the same extraction procedure; treating the homogenate with cuprous ion before extraction produced the paper's total inorganic arsenic measurement. Total arsenic values were reported beside the inorganic arsenic values, but the table does not describe a separate arsenic speciation profile beyond arsenite and arsenate.

## Implications

This source supplies early seafood occurrence evidence showing that total arsenic and inorganic arsenic must remain separate for fish and shellfish. The lobster tail row is especially useful as a speciation example: total arsenic was `40.5 ppm`, while inorganic arsenic was reported as `<0.5 ppm`. The lobster hepatopancreas row should be kept distinct from edible white-muscle rows because it is an organ tissue with `0.9 ppm` inorganic arsenic.

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/f3_resolve_texts/reinke1975.txt`; the title page, abstract, methods, Tables 2-4, and discussion paragraphs were checked.
- The OCR rendered some Table 4 `<0.5` cells as `co.5`, `a.5`, or `4.5`; PDF page 9 was rendered to `/tmp/reinke_pages/reinke-09.png` and visually checked before recording every censored inorganic-arsenic value as `<0.5`.
- No DOI was visible in the extracted text or title page; DOI search, raw-handle search, and cite-key checks found no existing source page before creation.
- Units are preserved as source-reported `ppm`, `µg`, percent recovery, and `1 N HCl`; no conversion was performed.
- Speciation: inorganic arsenic is source-defined as arsenite plus arsenate (`As3+` plus `As5+`). Total arsenic remains `tAs`; no total arsenic value is promoted to inorganic arsenic.
- Brand firewall: no retail brands were reported.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; species-level slugs for halibut, shrimp, haddock, crab, mackerel, herring, and lobster are absent, so broad seafood/fish/shellfish routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
