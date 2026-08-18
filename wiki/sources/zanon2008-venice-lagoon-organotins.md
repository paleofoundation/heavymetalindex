---
type: source
raw_handle: MFK_zanon2008
cite_key: zanon2008-venice-lagoon-organotins
title: "Time trend of Butyl- and Phenyl-Tin contamination in organisms of the Lagoon of Venice (1999-2003)"
authors: [Zanon F, Rado N, Centanni E, Zharova N, Pavoni B]
year: 2008
publication: "Environmental Monitoring and Assessment"
doi: "10.1007/s10661-008-0294-6"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/zanon2008.pdf"
raw_sha256: "d92e9c347295fe66137ec48cc7fa93bfa2240afd8184e12021779aceb818c341"
access_url: "https://doi.org/10.1007/s10661-008-0294-6"
metals: [Sn]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/molluscs]]", "[[ingredients/bivalve-molluscs]]"]
products: ["[[products/seafood]]", "[[products/shellfish]]"]
matrices: [seafood, shellfish, molluscs, mussels, clams, dry-weight, wet-weight, organotins]
jurisdictions: [IT, EU]
near_duplicates: []
sample_n: null
sample_population: "Pooled edible-organism samples of Mytilus galloprovincialis and Tapes spp. collected from up to 20 stations in the Lagoon of Venice during 1999, 2001, and 2003, with selected stations monitored seasonally."
updated: 2026-06-08
---

# Zanon 2008 - Organotins in Venice Lagoon shellfish

## Overview

Zanon and colleagues measured butyltin and phenyltin compounds in edible mussels (*Mytilus galloprovincialis*) and clams (*Tapes* spp.) from the Lagoon of Venice before the European organotin-antifouling restrictions took full effect. The source reports organotin species as cation concentrations on a dry-weight basis, with a later comparison to a wet-weight TBT residue level. These are organotin occurrence values and must not be collapsed into total elemental tin or inorganic tin.

## Key numbers

The abstract reports higher TBT concentrations in mussels than clams:

| Matrix | Source-reported TBT range |
| --- | --- |
| Mussels (*Mytilus galloprovincialis*) | `38+/-8 to 6,666+/-1,333 μg kg−1 d.w., as TBT+` |
| Clams (*Tapes* spp.) | `6+/-1 to 2,256+/-451 μg kg−1 d.w., as TBT+` |

Tables 2 and 3 report autumnal butyltin concentrations by station and year in `μg kg−1 d.w.`:

| Matrix | Compound | Source-reported concentration span in tables |
| --- | --- | --- |
| Mussels | TBT | `38+/-8` to `6666+/-1333 μg/kg` |
| Mussels | DBT | `10+/-2` to `4187+/-837 μg/kg` |
| Mussels | MBT | `6+/-1` to `1538+/-308 μg/kg` |
| Clams | TBT | `6+/-1` to `2256+/-451 μg/Kg` |
| Clams | DBT | `6+/-1` to `2956+/-591 μg/Kg` |
| Clams | MBT | `30+/-6` to `1830+/-366 μg/Kg` |

The discussion highlights the Chioggia-area mussel subset as `TBT=187-6,666; DBT=80-4,187; MBT=31-1,538 μg kg−1 d.w.`. Across the three survey years, the authors report no increase in average concentrations of summed butyltins (`TBT + DBT + MBT`) in either species (`ANOVA, p>0.05`), while TBT alone was higher in *Mytilus* than in *Tapes* (`ANOVA, p<0.05`).

Method performance values were procedure recoveries of `TBT=89%`, `DBT=92%`, and `MBT=92%` using certified reference material CRM 477. Detection limits from ten blanks were `TBT=12`, `DBT=12`, `MBT=12`, `TPhT=5`, `DPhT=7`, and `MPhT=12 μg kg−1d.w.`.

For the population of Venice, the paper estimated average intake as `70 g-seafood day−1`, of which mollusks were about `44%` of the total catch, giving about `31 g-mollusks day−1`. The source-derived Tolerable Average Residue Level was `487 μg Kg−1 w.w.`; the authors state that some wet-weight TBT values exceeded it at stations `4` in 1999, `3` and `11` in 2001, and `1`, `10`, `11`, and `14` in 2003, especially for *M. galloprovincialis*.

## Methods (brief)

The study collected mussels and clams from Lagoon of Venice stations during 1999, 2001, and 2003. About `200` organisms of the same size were collected at each station, drained, dissected to edible tissue, homogenized, frozen at `-18°C`, freeze-dried, and stored at `-20°C`. Organotin compounds were extracted from `500 mg` dry tissue, derivatized with pentylmagnesium bromide, purified on Florisil, and analyzed by high-resolution gas chromatography-low-resolution mass spectrometry (`HRGC-LRMS`) using an ion-trap detector. Reported species include TBT, DBT, MBT, TPhT, DPhT, and MPhT; the key tables emphasize butyltins.

## Implications

This source contributes organotin occurrence evidence for commercially used bivalve shellfish in the Lagoon of Venice. The edible-organism data support seafood and shellfish routing for organotin-specific tin species, especially TBT/DBT/MBT in mussels and clams. Downstream extraction should preserve the dry-weight versus wet-weight distinction and the `TBT+` cation basis, and should not pool these values as inorganic tin or total Sn.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, abstract, sampling methods, chemical-analysis methods, Tables 2-3, Chioggia discussion, and the TARL paragraph were checked in `/tmp/f3_unrepresented_texts/zanon2008.txt`.
- DOI `10.1007/s10661-008-0294-6`, raw handle `MFK_zanon2008`, and cite-key searches found no existing source page before creation.
- Units are preserved as source-reported `μg kg−1 d.w.`, `μg/kg`, `μg/Kg`, and `μg Kg−1 w.w.` where the paper used those forms; no conversion was performed.
- Speciation: the paper reports butyltin and phenyltin species. Frontmatter uses `Sn` only for element-level routing under existing wiki convention; this page explicitly does not treat organotins as inorganic tin or total tin.
- Brand firewall: no sampled seafood brands were reported.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no ingredient/product slug exists for mussels or clams as narrow pages, so broad shellfish and mollusc routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [ea5afb1cd](https://github.com/paleofoundation/heavymetalindex/commit/ea5afb1cd) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
