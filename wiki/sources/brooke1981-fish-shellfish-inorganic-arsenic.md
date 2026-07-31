---
type: source
raw_handle: MFK_brooke1981
cite_key: brooke1981-fish-shellfish-inorganic-arsenic
title: "Determination of Total Inorganic Arsenic in Fish, Shellfish and Fish Products"
authors: [Brooke PJ, Evans WH]
year: 1981
publication: "Analyst"
doi: "10.1039/AN9810600514"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/brooke1981.pdf"
raw_sha256: "9877a8234f48541fb337b9d37a4b85d37371ee38631c91343bbe23baa794f03c"
access_url: "https://doi.org/10.1039/AN9810600514"
metals: [iAs, tAs]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]", "[[ingredients/shellfish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/shellfish]]", "[[products/canned-seafood]]"]
matrices: [seafood, fish, shellfish, fresh-seafood, canned-seafood, wet-weight]
jurisdictions: [GB]
near_duplicates: []
sample_n: 9
sample_population: "Fish and shellfish product sample rows in Table V: herring, canned crab, haddock, NBS dried tuna, two whelk rows, canned lobster, king prawns, and plaice; lamb kidney and NBS orchard leaves are included in the paper as non-seafood comparison/reference rows and are not routed as seafood occurrence."
updated: 2026-06-08
---

# Brooke 1981 - Fish and shellfish inorganic arsenic

Brooke and Evans developed two methods for determining total inorganic arsenic in fish, shellfish, and fish products. The paper is method-focused, but Table V reports occurrence-style values for total arsenic and inorganic arsenic in fish and shellfish sample rows. Inorganic arsenic is reported as the sum of the inorganic valency states isolated by the methods; total arsenic remains a separate `tAs` measurement.

## Key numbers

The abstract states that the derived detection limit and confidence intervals were calculated for the distillation method. The Results and Discussion section gives a practical limit of detection of `0.02 mg kg-1`; `95%` confidence intervals of `0.02 mg kg-1` apply up to `0.10 mg kg-1`, and above this the confidence interval is `20%`.

Table V compares total arsenic with inorganic arsenic by procedures A and B in `mg kg-1`:

| Sample | Total arsenic determined, `mg kg-1` | Inorganic arsenic, Procedure B, `mg kg-1` | Inorganic arsenic, Procedure A, `mg kg-1` | Percentage inorganic arsenic of total arsenic |
| --- | ---: | --- | --- | ---: |
| Herring | `1.1` | `0.02, 0.04` | `0.04, 0.04` | `3.6` |
| Canned crab | `1.5` | `0.10, 0.06` | `0.08, 0.08` | `5.3` |
| Haddock | `2.6` | `0.02, 0.04` | `0.02, 0.02` | `0.8` |
| NBS dried tuna | `2.9` | `0.14, 0.20` | `0.14, 0.12` | `4.5` |
| Whelks | `3.2` | `0.06, 0.08` | `0.06, 0.08` | `2.2` |
| Canned lobster | `3.6` | `0.08, 0.08` | `0.06, 0.08` | `1.9` |
| King prawns | `14` | `0.02, 0.02` | `0.04, 0.04` | `0.3` |
| Plaice | `24` | `<0.02, 0.02` | `0.02, 0.04` | `0.1` |
| Whelks | `26` | `0.18, 0.14` | `0.10, 0.10` | `0.4` |

The conclusions state that total inorganic arsenic in the tested fish species did not exceed `0.10 mg kg-1`, and that inorganic arsenic expressed as a percentage of total arsenic varied from less than `1` to `5%`. This statement excludes the NBS orchard-leaves reference row and does not convert total arsenic into inorganic arsenic.

## Methods (brief)

Procedure A isolated inorganic arsenic by distilling it from hydrochloric acid and measuring arsenic(III) after hydride generation by atomic-absorption spectrophotometry with atomisation in a flame-heated silica tube. The procedure weighed `5 g` of representative wet fish sample or `2 g` of dry sample, added iron(II) sulphate, refluxed with hydrochloric acid, and collected `50 ml` of distillate. Procedure B dissolved sample in sodium hydroxide, chelated and solvent-extracted inorganic arsenic, back-extracted into nitric acid, oxidized, and measured arsenic(V) by the same hydride-generation AAS system.

## Implications

This source provides historical fish and shellfish evidence for inorganic arsenic alongside total arsenic in the same sample rows. It is useful for speciation-aware seafood routing because total arsenic values in fish and shellfish were much higher than the inorganic arsenic values. Downstream use should preserve the paper's `mg kg-1` basis and treat the NBS dried tuna row as a reference-material result, not a retail product or brand finding.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; Table V and the Results and Discussion detection-limit sentence were checked against `/tmp/ingest_f3_brooke1981.txt`.
- DOI `10.1039/AN9810600514`, raw handle `MFK_brooke1981`, and cite-key checks found no existing source page before creation.
- Table V values were copied exactly, including duplicate-pair formatting and the source's `<0.02` result for plaice by Procedure B. Units are preserved as `mg kg-1`; no conversion to wet weight, dry weight, ppm, or ppb was performed.
- Speciation: inorganic arsenic is source-reported total inorganic arsenic; total arsenic remains `tAs`. No total arsenic value is treated as inorganic arsenic.
- Brand firewall: no retail brand contamination values are reported. NBS dried tuna is a reference material row and is not treated as a brand.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; narrow species/product slugs for herring, haddock, whelks, lobster, prawns, and plaice are not in the closed product vocabulary, so broad seafood/fish/shellfish routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [10ae140c5](https://github.com/paleofoundation/heavymetalindex/commit/10ae140c5) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
