---
type: source
raw_handle: FM_8009509
cite_key: liu2021-arsenolipids-seafood
title: "Discovery and Identification of Arsenolipids Using a Precursor-Finder Strategy and Data-Independent Mass Spectrometry"
authors: [Liu Q, Huang C, Li W, Fang Z, Le XC]
year: 2021
publication: "Environmental Science and Technology"
doi: 10.1021/acs.est.0c07480
source_type: peer-reviewed
evidence_tier: A
license: "ACS AuthorChoice"
raw_path: raw/markdown/FM_8009509/FM_8009509.md
metals: [tAs]
ingredients: ["[[ingredients/tuna]]", "[[ingredients/seafood]]"]
products: ["[[products/seafood]]", "[[products/dietary-supplements]]", "[[products/fresh-fish]]"]
matrices: [seafood, fish, algae, dietary-supplement]
jurisdictions: [CA]
near_duplicates: []
sample_n: 4
sample_population: "Krill oil capsules, tuna fillets, hairtail fish heads, and kelp purchased from retail markets in Edmonton (Canada) and Chongqing (China)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Liu et al. 2021 — Arsenolipids in krill oil, tuna, hairtail, and kelp

This paper develops and validates a high-throughput method (HPLC-SWATH-MS with the Precursorfinder computational tool) for screening lipid-soluble arsenic species (arsenolipids) in seafood and algae, and applies it to identify 23 arsenolipids across krill oil, tuna fillets, hairtail fish heads, and kelp. Arsenolipids are organic arsenic compounds of growing concern because several have demonstrated cytotoxicity comparable to inorganic arsenite in human cell lines and neurotoxicity in vertebrate brain cells. The method represents a significant advance over prior targeted approaches by using data-independent acquisition (SWATH) to capture low-abundance arsenolipids that would be missed by data-dependent methods.

## Key numbers

- 23 distinct arsenolipids identified across all four matrices, including novel arsenic-containing fatty acids (AsFAs), hydroxylated AsFAs, arsenic-containing hydrocarbons (AsHCs), hydroxylated AsHCs, thiolated trimethylarsinic acids, and arsenic-containing lysophosphatidylcholines not previously reported.
- Krill oil: richest source tested; 12 arsenolipid peaks detected in a single SWATH run.
- Tuna fillets: multiple AsFAs and AsPCs detected.
- Hairtail fish heads (Trichiurus haumela) and kelp: additional arsenolipid profiles reported.
- Arsenic speciation by HPLC-ICP-MS (monitoring m/z 75) used to confirm coelution and distinguish from isobaric interferences.
- Concentrations of individual species not reported as ppb values; the paper focuses on discovery and structural identification rather than quantification.

## Methods (brief)

HPLC-ESI qToF-MS (SWATH mode) using an AB Sciex TripleTOF X500R; lipid extraction by DCM/methanol (2:1) followed by water partition; reverse-phase C18 column. Precursorfinder software uses wavelet coherence calculations and hierarchical clustering to link characteristic arsenic fragment ions (As(CH3)2+, As(CH2)+, As(CH3)2OH2+) to their precursors. Parallel HPLC-ICP-MS at m/z 75 used for confirmation. Method validated against available arsenic standards; no certified reference material for arsenolipids was available.

## Implications

Certification: Arsenolipids are part of total arsenic (tAs) in seafood and krill oil products; speciation methods that distinguish organic arsenic forms (arsenolipids) from inorganic arsenic are important for interpreting tAs results. This paper demonstrates that krill oil supplements may contain a substantial variety of arsenolipid species whose individual toxicities are not fully characterized. HMT&C tAs limits for seafood or fish oil-derived supplements should note the organic speciation caveat.

Courses: Illustrates the complexity of arsenic speciation beyond the iAs/organic arsenic binary; arsenolipids are a distinct chemical class from arsenosugars and arsenobetaine.

App: Krill oil and tuna are high tAs matrices; this paper supports flagging krill oil supplements as requiring tAs/speciation scrutiny.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[ingredients/krill-oil]]
- [[ingredients/tuna]]
- [[ingredients/seafood]]

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
