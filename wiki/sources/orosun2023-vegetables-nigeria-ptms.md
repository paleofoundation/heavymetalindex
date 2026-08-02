---
type: source
raw_handle: AUTO_gap-spinach-cd-2023-10-1038-s41598-023-48489-4
cite_key: orosun2023-vegetables-nigeria-ptms
title: "Potentially toxic metals in irrigation water, soil, and vegetables and their health risks using Monte Carlo models"
authors: [Orosun MM, Nwabachili S, Alshehri RF, Omeje M, Alshdoukhi IF, Okoro HK, Ogunkunle CO, Louis H, Abdulhamid FA, Osahon SE, Mohammed AU, Ehinlafa EO, Yunus SO, Ife-Adediran O]
year: 2023
publication: "Scientific Reports"
doi: 10.1038/s41598-023-48489-4
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-spinach-cd_2023_10-1038-s41598-023-48489-4.pdf
metals: [tAs, Cd, Cr, Pb]
ingredients: ["[[ingredients/leafy-vegetables]]", "[[ingredients/cabbage]]"]
products: ["[[products/leafy-vegetables-other]]"]
matrices: [leafy-greens, cabbage, soil, irrigation-water]
jurisdictions: [NG]
near_duplicates: []
sample_n: "31 composite soil samples (from 155 individual samples); 12 composite cabbage samples (from 60 heads, Brassica oleracea); 19 composite leafy-green samples (from 95 plants labelled Amaranthus hybridus); 30 irrigation-water samples"
sample_population: "Soil, irrigation water, and farm-grown vegetables (cabbage and an Amaranthus species labelled spinach) sampled in March 2021 along the lower Niger River basin around Ilorin, Kwara State, Nigeria"
updated: 2026-06-09
sources: 1
audience: [regulator, educator, consumer, app]
---

# Orosun et al. 2023 - potentially toxic metals in Nigerian vegetables

## Overview

Orosun and coauthors measured As, Cd, Cr, and Pb in irrigation water, soil, and two farm-grown leafy vegetables (cabbage and a plant labelled "spinach (Amaranthushybridus)") in Ilorin, Kwara State, Nigeria, and modeled non-cancer and cancer health risks using Monte Carlo simulation. The leafy-green species the paper calls spinach is Amaranthus hybridus (an African leafy green, locally called spinach), not Spinacia oleracea; this source routes to the leafy-vegetables pages rather than the spinach pages. The paper provides field/context evidence tied to contaminated irrigation and soil along the lower Niger River basin.

## Key numbers

- Mean soil concentrations were Cr 81.77, Pb 19.91, As 13.23, and Cd 3.25 mg/kg (Table 2).
- Mean irrigation-water concentrations were Cr 1.87, Pb 1.65, As 0.85, and Cd 0.20 mg/L (Table 4).
- Cabbage (Brassica oleracea, n=60 individual heads → 12 composites) and the Amaranthus leafy-green (n=95 plants → 19 composites) mean concentrations respectively were Cr 5.37 and 5.88 mg/kg, Pb 3.57 and 4.33 mg/kg, As 1.09 and 1.67 mg/kg, and Cd 0.48 and 1.04 mg/kg (Table 5, mean ± SD).
- Bioaccumulation factors (vegetable/soil) for the Amaranthus leafy-green were higher than for cabbage across all four metals (Cd BAF 0.32 vs 0.15 the most pronounced); the Amaranthus leafy-green carried higher concentrations than cabbage for every metal measured.
- Modified Pollution Index for soil Cd was 9.88 (Table 6), close to the "extreme contamination" threshold of 10; soil Pb was 0.81 (minimal); As 2.33 and Cr 1.46 (moderate/slight).
- Hazard Index for the Amaranthus leafy-green ranged 4.44–11.62 (mean 9.10) and for cabbage 3.90–8.38 (mean 6.43); both exceed USEPA's HI = 1 threshold (Table 8).
- Incremental lifetime cancer risk (Table 9) mean was 5.46×10⁻³ for the Amaranthus leafy-green and 4.21×10⁻³ for cabbage, both above the 1×10⁻⁴ "high risk" threshold.

## Methods (brief)

Surface soil (0–15 cm) and edible-leaf vegetable samples were collected in March 2021 from 31 sampling sites along the lower Niger River basin around Ilorin in an X-shape composite design (five subsamples per site). Cabbage and the Amaranthus leafy-green were air-dried then oven-dried at 70 °C to constant weight. Aqua regia digestion (3 mL HNO₃ + 9 mL HCl per 1 g sample, heated to fume cessation) was used for soil, vegetable, and filtered (0.45 µm) irrigation-water samples following prEN16174. As, Cd, Cr, and Pb were measured by inductively coupled plasma optical emission spectroscopy (ICP-OES); detection limits were 0.50 (Pb), 0.50 (Cr), 0.05 (As), and 0.07 (Cd) mg/L. The instrument recovered ≥90% on blanks and gave linear calibrations (R² = 0.999). No speciation was performed (total As, total Cr; no separation of inorganic As or Cr-VI). Health-risk modeling used Average Daily Intake, Target Hazard Quotient, Hazard Index, and Incremental Lifetime Cancer Risk against USEPA reference doses and slope factors, with 10,000-trial Monte Carlo simulation in ORACLE Crystal Ball software v11.1.2.4.850.

## Implications

Provides Nigerian contaminated-irrigation occurrence data for an Amaranthus leafy-green and cabbage; values reflect a wastewater-irrigated farming context and are not general-market baselines. Adds field-context evidence for the leafy-vegetables and cabbage ingredient pages and the leafy-vegetables-other product page. Useful for exposure-modeling worked examples in course material; the Monte Carlo distributions on Hazard Index and ILCR illustrate how site-specific variance shapes risk estimates.

## Wiki pages this source may touch

- [[products/leafy-vegetables-other]]
- [[ingredients/leafy-vegetables]]
- [[ingredients/cabbage]]
- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/lead]]

## Verification notes

Numerical values were verified against Tables 2, 4, 5, 6, 8, and 9 of the published paper. The source measured total As and total Cr only; no inorganic-As or Cr-VI speciation was performed.

The species the paper calls "Spinach (Amaranthushybridus)" is Amaranthus hybridus, an African leafy green sometimes called African spinach or callaloo, not Spinacia oleracea. The paper's own labeling is internally inconsistent: Table 5 (the primary results table) and the abstract say "Amaranthushybridus", while Tables 7–9 (risk-assessment tables) say "Beta vulgaris" (which is chard/beet, also not Spinacia). Frontmatter therefore routes the leafy-green data to `[[ingredients/leafy-vegetables]]` and `[[products/leafy-vegetables-other]]` rather than to the spinach pages, to avoid contaminating Spinacia oleracea-specific occurrence data with Amaranthus-species values. The `matrices: leafy-greens` token reflects the same caution.

GPT-style audit (2026-06-09) flagged: numerical fidelity all clean; species-routing concern (applied: rerouted away from spinach); sample_n disclaimer was inaccurate (applied: filled with composite-sample counts); methods detail thin (applied: expanded with digestion, prEN16174, detection limits, Monte Carlo software). "elemental As" wording in earlier verification notes was technically incorrect (elemental As is As(0)); corrected to "total As".

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [88f7d13d0](https://github.com/paleofoundation/heavymetalindex/commit/88f7d13d0) | 2026-06-09 | minor | Narrative text revised |
| [9658f6be5](https://github.com/paleofoundation/heavymetalindex/commit/9658f6be5) | 2026-05-30 | major | 1 section added |
| [f5efca8e6](https://github.com/paleofoundation/heavymetalindex/commit/f5efca8e6) | 2026-05-30 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
