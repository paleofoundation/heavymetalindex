---
type: source
raw_handle: AUTO_gap-peanuts-cd-2022-10-1038-s41598-022-08470-z
cite_key: bazie2022-burkina-faso-foodstuffs-metals
title: "Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment"
authors: [Bazie SR, Compaore MKA, Bande M, Kpoda SD, Meda NSBR, Ouedraogo Kangambega TM, Ilboudo I, Sandwidi BY, Nikiema F, Yakoro A, Bassole IHN, Hien H, Kabre E]
year: 2022
publication: "Scientific Reports"
doi: 10.1038/s41598-022-08470-z
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-peanuts-cd_2022_10-1038-s41598-022-08470-z.pdf
metals: [Pb, Cd, Cr, Ni, Fe, Zn, Mn, Co, Cu]
ingredients: ["[[ingredients/peanuts]]", "[[ingredients/rice]]", "[[ingredients/maize]]", "[[ingredients/tomato]]", "[[ingredients/fish]]"]
products: ["[[products/peanuts]]"]
matrices: [rice, maize, peanut, tomato, fish]
jurisdictions: [BF]
near_duplicates: []
sample_n: "222"
sample_population: "rice, maize, peanut, tomato, and dried fish samples in Burkina Faso"
updated: 2026-05-30
sources: 1
audience: [regulator, educator, consumer, app]
---

# Bazie et al. 2022 - trace metals in raw foodstuffs in Burkina Faso

## Overview

Bazié and coauthors evaluated the contents of nine metallic trace elements (Fe, Zn, Mn, Co, Cd, Pb, Cu, Ni, Cr) in five major raw foodstuffs (rice, maize, peanut, tomato, dried fish) collected from open markets across five Burkinabé cities. The data are jurisdiction-specific to Burkina Faso open-market supply and reflect local agricultural and storage conditions; cross-market pooling should be evaluated case-by-case.

## Key numbers

- n=222 samples were collected and analyzed by atomic absorption spectrometry (40 rice, 19 maize, 59 peanut, 59 tomato, 45 dried fish).
- Samples were collected between November 2020 and October 2020 from open markets in Ouagadougou, Bobo-Dioulasso, Niangoloko, Dakola, and Cinkasse.
- The abstract reports Fe median 68.80 mg/kg in dried fish, 43.09 mg/kg in maize, and 28.92 mg/kg in peanuts. Table 1/Table 2 (commodity totals across sites) report Fe median 62.48 mg/kg in dried fish, 58.49 mg/kg in maize, and 28.92 mg/kg in peanuts; abstract-vs-table figures agree only for peanuts.
- Rates above the Codex Alimentarius Pb maximum limit were 77.95% for tomato, 66.66% for maize, and 32.5% for rice (abstract, confirmed in discussion).
- Cd exceedance rates above the Codex Alimentarius maximum were 47.6% for maize, 71.16% for tomato, and 0% for rice.
- Highest Pb concentration (5.80 mg/kg) was recorded in a peanut sample from Dakola. Highest Cd concentration (9.00 mg/kg) was recorded in a tomato sample from Cinkasse.
- Cr contribution to the maximum tolerable daily intake (Table 3): rice 167.11%, maize 8.53%, peanuts 34.02%, tomato 0.29%, dried fish 0.06%. The abstract's narrative summary of these Cr values is internally inconsistent (four percentages reported for three commodities); Table 3 is treated as authoritative.
- Cumulative hazard index (HI) exceeded 1 for rice (9.66 women / 8.74 men), maize (6.14/5.55), and peanuts (5.16/4.67); cobalt drove approximately 85% of HI. None of the cancer index-risk values (range 3×10⁻⁶ to 8×10⁻⁹) exceeded the USEPA threshold of 10⁻⁴.

## Methods (brief)

Atomic absorption spectrometry on flame mode (VARIAN 240FS, Mulgrave, Australia) was used to quantify nine metallic trace elements after HNO₃/HCl (3:1) microwave-block digestion of 0.5 g sample at 150 °C for 2.5 h, brought to 100 mL with deionized water and filtered. External calibration; statistical analysis in SPSS v23. Health risk assessment followed the USEPA HHRA model (ADD, HQ, HI, RISK), with RfDs for Cr 1.5, Cu 0.04, Pb 0.004, Fe 0.7, Zn 0.3, Co 0.0003, Mn 0.014, Cd 0.001, Ni 0.011 mg/kg/day. Chromium speciation (Cr-VI vs total) was not performed; Cr values represent total chromium.

## Implications

The paper contributes Burkina Faso jurisdiction-specific occurrence data on Pb, Cd, Cr, Ni, Co, and the essential trace elements Fe, Zn, Mn, Cu in five staple raw foodstuffs. The Codex-exceedance rates and HI values are informative for jurisdiction-aware risk framing in courses and the consumer app; per-commodity median and range values feed the routing layer's evidence accumulation for peanuts, rice, maize, tomato, and dried fish.

## Wiki pages this source may touch

- [[products/peanuts]]
- [[ingredients/peanuts]]
- [[ingredients/rice]]
- [[ingredients/maize]]
- [[ingredients/tomato]]
- [[ingredients/fish]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/cobalt]]
- [[metals/iron]]
- [[metals/zinc]]
- [[metals/manganese]]
- [[metals/copper]]

## Verification notes

The PDF (pages 1-9) provides sample counts, methods, per-site/per-commodity tables (Tables 1-2), CDI/%MTDI table (Table 3), and HI/cancer-risk figures (Figures 1-2). Abstract and Tables 1-2 disagree on Fe median for dried fish (68.80 vs 62.48 mg/kg) and maize (43.09 vs 58.49 mg/kg); the abstract value is reported in Key numbers but the table value should be preferred for standards pooling. The paper's introduction lists "Silver" as one of the targeted analytes but Silver does not appear in any results table; only nine metals (Fe, Zn, Mn, Co, Cd, Pb, Cu, Ni, Cr) are reported. The taxonomy snapshot has no `dried-fish` product slug; `products/fresh-fish` is not used because the paper studied dried (not fresh) fish — flagging as a routing-layer gap. Commodity-specific peanut Cd/Pb table values need extraction before standards pooling.

GPT audit (2026-06-09) flagged `ingredients/corn` as paper-uses-maize: applied — switched to `ingredients/maize`. GPT audit flagged `products/fresh-fish` for a dried-fish paper: applied — removed from products. GPT audit flagged `matrices: [raw-foodstuffs]` as invented vocab: applied — replaced with per-commodity matrices `[rice, maize, peanut, tomato, fish]`. Independent verification caught: metals frontmatter listed only 4 of the 9 measured metals; expanded to `[Pb, Cd, Cr, Ni, Fe, Zn, Mn, Co, Cu]` so the routing layer can fan out to all metal pages.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [cf4530ec1](https://github.com/paleofoundation/heavymetalindex/commit/cf4530ec1) | 2026-06-09 | minor | Narrative text revised |
| [9658f6be5](https://github.com/paleofoundation/heavymetalindex/commit/9658f6be5) | 2026-05-30 | major | 1 section added |
<!-- END: hmi-page-history -->
