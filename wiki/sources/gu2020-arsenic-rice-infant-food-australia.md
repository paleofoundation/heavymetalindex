---
type: source
cite_key: gu2020-arsenic-rice-infant-food-australia
title: "Arsenic Concentrations and Dietary Exposure in Rice-Based Infant Food in Australia"
authors: ["Gu Z", "de Silva S", "Reichman SM"]
year: 2020
publication: "International Journal of Environmental Research and Public Health 17(2):415"
doi: "10.3390/ijerph17020415"
pmid: "31936289"
pmcid: "PMC7014030"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
access_url: "https://doi.org/10.3390/ijerph17020415"
raw_path: "raw/external-fetch/2026-05-09/lai2020-arsenic-rice-infant-food-australia.jats.xml"
metals: [tAs, iAs]
products: [baby-cereals-dry-rice-based, teething-and-snacks-rice-based, plant-milks-rice-based, "[[products/rice-beverages-rice-milk]]", "[[products/pasta-wheat-based]]", "[[products/rice-snacks-crackers]]"]
matrices: [rice-milk-powder, rice-pasta, rice-cereal, rice-crackers]
jurisdictions: [AU]
sample_n: 39
sample_population: "Thirty-nine rice-based infant food products purchased in Australia: rice milk powder (n=3), rice pasta (n=3), rice cereal (n=12), rice crackers (n=21). Non-rice comparator pasta (n=3) and non-rice milk powder (n=3) also analyzed. Total arsenic by nitric-acid-digestion ICP-MS; inorganic arsenic by acid-extraction ICP-MS with hydride-generation interface."
acquired_via: "PubMed E-utilities EFetch JATS XML (db=pmc, id=PMC7014030) — 2026-05-09 autonomous run"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-09
---

# Gu et al. 2020 — Arsenic Concentrations and Dietary Exposure in Rice-Based Infant Food in Australia

This A-tier peer-reviewed paper measures total arsenic and inorganic arsenic in 39 rice-based infant food products from the Australian market across four product categories: rice milk powder (n=3), rice pasta (n=3), rice cereal (n=12), and rice crackers (n=21). Speciation is HPLC-ICP-MS with hydride generation. Author scope is exact on matrix axis (rice-based vs non-rice comparator) and exact on format axis per the four sub-product categories. The paper reports that nearly 75% of rice-based infant food samples had iAs exceeding the EU maximum level of 100 µg/kg, and the iAs:tAs ratio reached as high as 84.8% in rice pasta. Per the corrected row-fit rule (CLAUDE.md Part 6), Gu 2020 routes directly to multiple HMTc Category 1 and Category 5 rice-based subcategory pages.

## Key Numbers

Table 2 reports mean ± SE concentrations (mg/kg fresh weight). Converting to ppb (1 mg/kg = 1000 ppb):

| Product category | n | Mean tAs (ppb) | Mean iAs (ppb) | iAs:tAs ratio |
| --- | ---: | ---: | ---: | ---: |
| Rice milk powder | 3 | 428 ± 2 | 160 ± 0 | 37.4 ± 0.43% |
| Non-rice milk powder | 3 | <4 | — | — |
| Rice pasta | 3 | 186 ± 3 | 155 ± 5 | 84.8 ± 8.40% |
| Non-rice pasta | 3 | 6 ± 2 | — | — |
| Rice cereal | 12 | 134 ± 23 | (not separately reported in Table 2; abstract: ~75% of all rice-based samples exceeded EU 100 ppb iAs) | — |
| Rice crackers | 21 | 132 ± 10 | 94 ± 12 | 74.3 ± 1.73% |

Table values are summary statistics (mean ± standard error) rather than sample-level distributions. p30/p50/p90/p100 cannot be computed from this table without sample-level data; the source contributes to n_a_tier counting and provides Australian-market context.

## Routing to HMTc subcategories

| Product category | Routes to | n_a_tier impact |
| --- | --- | --- |
| Rice cereal n=12 | [[products/baby-cereals-dry-rice-based]] | Adds Path A summary source for tAs (FDA 2024 sample-level + Gu 2020 summary → n_a_tier=2). For iAs, the paper's overall claim that ~75% of rice-based samples exceed EU 100 ppb covers rice cereal but Table 2 doesn't break out the rice-cereal-specific iAs mean; treat as summary-level supporting evidence (n_a_tier upgrade depends on curator decision). |
| Rice crackers n=21 | [[products/teething-and-snacks-rice-based]] | Primary Path A source for iAs in rice-based teething/snacks (mean 94 ppb, iAs:tAs 74.3%). Combined with [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] (n=199 EU+US rice crackers, median 79-111 ppb), brings rice-snack iAs cell to n_a_tier=2 medium confidence borderline. |
| Rice milk powder n=3 | [[products/plant-milks-rice-based]] | Primary Path A source for iAs in rice-based plant milks (mean 160 ppb). Small N (3) flags it as approaching but not at the readiness bar by sample-size floor. |
| Rice pasta n=3 | (no current HMTc Category 1 row for rice pasta) | Out-of-scope for current HMTc subcategory architecture; flag for taxonomy review. |

## Geographic-context flag

Gu 2020 uses Australian-market products. Australian rice cereal mean tAs (134 ppb) is in the same range as U.S. FDA 2024 rice-named dry infant cereal p50 (115 ppb) and FDA 2016 rice infant cereal mean (103 ppb), indicating consistency across U.S. and Australian markets for total arsenic in rice cereal. The iAs:tAs ratio of 74-85% in rice products is consistent with the inorganic-arsenic-dominant speciation pattern reported in U.S. and EU literature.

## Evidence Fitness

EF-3 limited evidence: summary statistics (mean ± SE) rather than sample-level distributions. Per-sample data may be available in Supplementary Materials but was not extracted in this initial ingest. The source is A-tier (peer-reviewed open-access, ICP-MS analytical method, HPLC speciation with hydride generation) and contributes meaningfully to n_a_tier counts for several cells.

## Limitations

- Sample-level distributions not reported in Table 2; only mean ± SE per category.
- Rice cereal subset (n=12) reports tAs but not the category-specific iAs mean in Table 2 (the paper's iAs analysis is partly aggregated across the four rice-based categories).
- Australian guidelines (1 mg/kg tAs in rice) are noted by the paper as being above WHO/EU guidelines and therefore less protective; this contextualizes the Australian market scope but does not affect HMTc routing.
- Sample sizes for rice milk powder (n=3) and rice pasta (n=3) are below the 10-sample defensibility floor; use for triangulation only.

## Implications

Certification: Direct A-tier summary evidence for rice-cereal tAs, rice-cracker iAs, and rice-milk-powder iAs cells. Combined with FDA 2024 rice-named dry infant cereal sample-level data (n=256 for tAs), Gu 2020 brings the rice-cereal tAs cell to n_a_tier=2. The rice-cracker iAs cell on [[products/teething-and-snacks-rice-based]] moves from n_a_tier=1 (Signes-Pastor 2016 only) to n_a_tier=2 with Gu 2020. Per Part 6 confidence rule (1-2 studies = low; 3+ = medium), one additional A-tier source on either cell would clear the medium-confidence readiness bar.

Courses: Useful for teaching rice-vs-non-rice contamination differentials and speciation patterns (iAs:tAs ratios of 74-85% in rice products vs much lower in non-rice).

App: Supports rice-based infant cereal, rice cracker, and rice milk powder contamination_profile values for tAs and iAs.

Microbiome: No direct microbiome endpoint.

## Provenance Notes

Acquired during the 2026-05-09 autonomous loop run via NCBI EFetch JATS XML for PMC7014030 (CC BY license per the paper). The JATS XML is preserved at `raw/external-fetch/2026-05-09/lai2020-arsenic-rice-infant-food-australia.jats.xml` (filename predates first-author verification; the actual first author is Gu Z, not Lai). PDF was not directly fetched (PMC HTML interstitial blocks direct download); JATS XML is the canonical full-text artifact.

Initial PubMed E-utilities query for OA candidates returned this PMID via the `(inorganic arsenic) AND (baby food OR infant food OR fruit puree OR vegetable puree) AND pubmed pmc open access[filter]` search.

## Wiki Pages Updated On Ingest

- [[products/baby-cereals-dry-rice-based]]
- [[products/teething-and-snacks-rice-based]]
- [[products/plant-milks-rice-based]]
- [[products/infant-and-child-foods-master]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [22b1fec](https://github.com/paleofoundation/heavymetalindex/commit/22b1fec) | 2026-05-31 | autonomy: self-heal recovery of prior tick's uncommitted work — 2026-05-31T15-22-11Z |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
<!-- END: hmi-page-history -->
