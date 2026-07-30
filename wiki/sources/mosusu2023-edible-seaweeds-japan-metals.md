---
type: source
raw_handle: KADC_heavy-metal-contents-in-some-edible-seaweeds-wakam
cite_key: mosusu2023-edible-seaweeds-japan-metals
title: "Heavy metal contents in some edible seaweeds (Wakame, Kombu) in Japan"
authors: [Mosusu ET]
year: 2023
publication: "Hokkaido University Graduate School of Environmental Science (Master's thesis abstract)"
doi: null
no_doi_assigned: true
access_url: null
source_type: thesis
evidence_tier: C
license: unknown
raw_path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned/Heavy metal contents in some edible seaweeds (Wakame, Kombu) in Japan.pdf"
metals: [Cr, Ni, Cd, Pb, U]
ingredients: ["[[ingredients/seaweed]]"]
products: ["[[products/seaweed-kelp-foods]]"]
matrices: [edible-seaweed, macroalgae, kelp, dry-weight]
jurisdictions: [JP, CN, KR]
near_duplicates: []
sample_n: 22
sample_population: "Twenty-two commercial seaweed samples sold in Japan: Wakame (Undaria pinnatifida), Kombu (Laminaria spp.), Hijiki (Hizikia fusiform), and sea lettuce (Ulva rigida). Packaging-declared source areas: Japan, China, Korea. All Kombu samples sourced from Hokkaido."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-04
---

# Mosusu 2023 — Heavy metals in edible Japanese seaweeds

A 2023 master's thesis abstract from Hokkaido University's Graduate School of Environmental Science reports ICP-MS analysis of fourteen elements (V, Se, Mn, Fe, Cu, Zn, Mo, Co, Cr, Ni, Cd, Pb, Th, U) in 22 commercial seaweed samples sold in Japan, covering four species: Wakame (*Undaria pinnatifida*), Kombu (*Laminaria spp.*), Hijiki (*Hizikia fusiform*), and sea lettuce (*Ulva rigida*). Of the fourteen elements measured, five fall within the Heavy Metal Index analyte vocabulary: Cr, Ni, Cd, Pb, and U. The abstract reports inter-species ranking patterns and a geographic signal — Chinese-sourced Wakame and Hokkaido-sourced Kombu from off Nemuro — but does not include numerical concentration tables; only the full thesis would contain those.

## Key numbers

The submitted document is a one-page Japanese master's thesis abstract (令和4年度 環境科学院 修士論文内容の要旨) and does not report numerical concentrations. The only quantitative-comparative claims in the abstract are described below as ranking statements, not absolute values.

| Finding | Source-reported claim |
| --- | --- |
| Sample count | 22 commercial seaweed samples sold in Japan |
| Species | Wakame (*Undaria pinnatifida*), Kombu (*Laminaria spp.*), Hijiki (*Hizikia fusiform*), sea lettuce (*Ulva rigida*) |
| Elements measured | V, Se, Mn, Fe, Cu, Zn, Mo, Co, Cr, Ni, Cd, Pb, Th, U (fourteen) |
| Method | ETHOS Microwave Digestion + ICP-MS, Hokkaido University Open Facility |
| Sea lettuce ranking | Highest among the four species for V, Mn, Co, Ni, Zn, and Pb |
| Hijiki ranking | Highest for Th, Mo, Cu, and Fe |
| Wakame / Kombu ranking | Highest for Cr, Cd, Se, and U (distributed across the two brown algae) |
| Nemuro-source Kombu | Approximately 3× higher Cu, Zn, and Cd than Kombu from other Hokkaido sites |
| Chinese-source Wakame | Higher Ni, Co, Cr, and Cd than Japanese-source Wakame |
| Author's overall framing | Japanese kombu and wakame samples showed lower metal concentrations than literature seaweed values from other countries |

Per-sample µg/g or µg/kg values are not in the abstract; downstream synthesis requiring concentration figures must defer to the full thesis (Hokkaido University library) or to other peer-reviewed Japan-seaweed sources.

## Methods (brief)

Twenty-two commercial seaweed samples were sourced from Japanese retail and labeled by packaging-declared origin (Japan, China, Korea). Samples were dried overnight, ground, and digested using an ETHOS Microwave Digestion System. Quantification used Inductively Coupled Plasma Mass Spectrometry (ICP-MS) at the Hokkaido University Open Facility. Arsenic was not measured (not in the fourteen-element panel); chromium reported without speciation; arsenic speciation not applicable. The abstract does not name reference materials, digestion blank counts, or limits of detection.

## Implications

The source provides geographic-origin signal for Kombu and Wakame consumed in Japan, with Nemuro (Hokkaido) Kombu showing an approximately threefold elevation in Cu/Zn/Cd over Kombu from other Hokkaido sites, and Chinese-source Wakame showing elevated Ni/Co/Cr/Cd relative to Japanese-source Wakame. The author interprets the variation as a signal of underlying seawater and sediment contamination at production sites. Without per-sample numerical values, the abstract supports qualitative inter-species and inter-region rankings only; it does not support computing percentile thresholds for any HMTc category.

## Verification notes

- Source-document scope: only the one-page Japanese-format master's thesis abstract was provided in the manual-fetch folder. The full thesis is not in the corpus.
- No DOI; access_url left null. Source type is `thesis` (master's level); evidence tier C reflects abstract-only access and absence of peer review.
- Metals frontmatter lists only HMI analyte-vocabulary intersect (Cr, Ni, Cd, Pb, U). Non-tracked elements measured in the underlying study (V, Se, Mn, Fe, Cu, Zn, Mo, Co, Th) are documented in the Key numbers body table but not lifted to frontmatter.
- Jurisdictions include JP (sale and analysis), CN, and KR (packaging-declared origin countries for sample subset).
- Matrices include `kelp` because the species set includes *Laminaria spp.* (Kombu) which is a brown kelp; `macroalgae` and `edible-seaweed` cover the full species panel.
- No brand names were present in the abstract. Brand firewall: not engaged.
- Speciation: arsenic not measured; chromium reported as total Cr (Cr-VI not distinguished).
- Numerical values: none in the abstract; the Key numbers table records only the qualitative ranking statements the source actually makes.
- Audit subagent (2026-06-04) flagged `matrices: [edible-seaweed, macroalgae, kelp, dry-weight]` for vocabulary verification (⚠️). Verified against existing corpus: all four slugs are in active use across `wiki/sources/*.md` — `dry-weight` appears alongside `red-seaweed` in `aziz2021-gracilaria-seaweed-bangladesh.md`; `edible-seaweed`, `macroalgae`, and `kelp` each appear across multiple source pages. The basis-vs-matrix critique on `dry-weight` is structurally valid but reflects established Heavy Metal Index convention rather than a defect of this page. No correction applied; finding logged as false positive against current corpus convention.
- Audit subagent (2026-06-04) recommended adding `## Wiki pages this source may touch` section. Declined: the v2.0 ingest skill (line 92, `docs/ingest-workflows`) explicitly treats `## Wiki pages updated on ingest` as a legacy heading; the routing layer (Part 5b of CLAUDE.md) is now the system's responsibility, not the source page's. Recommendation logged as false positive against current architecture.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | major | 1 section added |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
