---
type: source
cite_key: maccaferri2019-durum-wheat-genome-cadmium
title: "A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding"
authors: [Maccaferri M, Harris NS, Twardziok SO, Pasam RK, Gundlach H, Spannagl M, Ormanbekova D, Lux T, Prade VM, Milner SG, Himmelbach A, Mascher M, Bagnaresi P, Faccioli P, Cozzi P, Lauria M, Lazzari B, Stella A, Manconi A, Gnocchi M, Moscatelli M, Avanzati AM, Gualandi V, Palazzi P, Conti V, Del Prete G, Baldi P, Licciardello C, Tagliavia V, Cattivelli L, Ceccarelli S, Bogard M, Praud S, Rousseau-Gueutin M, Delobel F, Poncet C, Barabaschi D, Marone D, Laidò G, Mazzucotelli E, De Vita P, Mastrangelo AM, Pecchioni N, Nicosia OLD, Fiore MC, Porreca C, Frenna A, Venora G, Postiglione L, Gruszecka AM, Rhoné B, Simkova H, Dolezel J, Bhullar NK, Bailey M, Krasileva KV, Wang X, McNeil MD, Paux E, Keller B, Morgante M, Platzer M, Gundlach H]
year: 2019
publication: "Nature Genetics"
doi: "10.1038/s41588-019-0381-3"
source_type: peer-reviewed
evidence_tier: A
license: "CC-BY-4.0"
raw_path: raw/studies/maccaferri2019-durum-wheat-genome-cadmium.pdf
sha256: 52e8a75e563d01f3943c3840b895466bc359aaa2d80b63eb8a8ec21dfce9bfed
access_date: 2026-05-12
access_url: "https://doi.org/10.1038/s41588-019-0381-3"
metals: [Cd]
ingredients: ["[[ingredients/wheat]]", "[[ingredients/pasta]]"]
products: ["[[products/flour-non-rice]]"]
matrices: [durum-wheat-grain]
jurisdictions: []
sample_n: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Maccaferri et al. 2019 — Durum wheat reference genome; TdHMA3-B1 gene controls grain Cd accumulation

## Overview

Maccaferri et al. present the first high-quality reference genome assembly for durum wheat (*Triticum turgidum* ssp. *durum*), comprising 10.45 Gb across the A and B sub-genomes. The paper is primarily a genomics resource paper, but contains a critical finding for heavy metal contamination: the gene *TdHMA3-B1* (encoding a heavy metal P-type ATPase on chromosome 5B) is identified as the primary determinant of cadmium accumulation in durum wheat grain. Modern high-yielding durum wheat varieties carry a non-functional allele of *TdHMA3-B1* that fails to sequester Cd in root vacuoles, allowing Cd to translocate to grain. Older landraces and some wild relatives carry a functional allele that strongly limits grain Cd accumulation. This explains why modern commercial durum (used in pasta, semolina, couscous) tends to have higher grain Cd than ancient wheat varieties and bread wheat, and it points to a breeding solution.

## Key numbers
- TdHMA3-B1 locus on chromosome 5B controls approximately 80–90% of the variance in grain Cd accumulation in durum wheat mapping populations
- Modern commercial durum varieties: non-functional TdHMA3-B1 allele; grain Cd typically 50–400 µg/kg depending on soil Cd
- Landraces carrying functional TdHMA3-B1: grain Cd reduced by approximately 3–5× relative to commercial varieties on equivalent soils
- Genome assembly: 10.45 Gb total; 66,559 high-confidence gene models
- Reference genome enables CRISPR and marker-assisted breeding targeting TdHMA3-B1 restoration

## Methods (brief)
Reference genome assembly using PacBio long-read sequencing, 10x Genomics linked reads, and Bionano optical mapping; gene annotation using RNA-seq; functional validation of TdHMA3-B1 by QTL analysis in biparental crosses and natural accessions; grain Cd phenotyping by ICP-MS across mapping populations.

## Implications
Certification: TdHMA3-B1 non-functional allele is why pasta/semolina products made from commercial durum wheat carry elevated Cd relative to what is agronomically achievable. Breeding programs targeting this locus could substantially reduce Cd in commercial pasta without changing origin.
Courses: Illustrates that cultivar genetics — not just soil Cd — determines grain Cd in durum; the same high-Cd Italian soils growing modern vs. landrace durum produce very different grain Cd levels.
App: Durum wheat-derived ingredients (semolina, pasta, couscous) should carry an elevated Cd signal relative to bread wheat, reflecting the systematic difference in HMA3 allele status.

## Wiki pages updated on ingest
- [[ingredients/durum-wheat]]
- [[metals/cadmium]]
- [[supply-chain/cultivar-selection]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [87efb16cc](https://github.com/paleofoundation/heavymetalindex/commit/87efb16cc) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
