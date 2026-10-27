---
type: source
raw_handle: "MFK_KADC_16-villa-2014-cadmium-lead-chocolates-brazil"
cite_key: oliveira2021-cocoa-beans-cd-pb-brazil-processing
title: "Cd and Pb in cocoa beans: Occurrence and effects of chocolate processing"
authors: ["Ferreira de Oliveira AP", "Milani RF", "Efraim P", "Morgano MA", "Tfouni SAV"]
year: 2021
publication: "Food Control 119, 107455"
doi: 10.1016/j.foodcont.2020.107455
source_type: peer-reviewed
evidence_tier: A
license: "Elsevier © 2020 — closed access (DOI cite-and-link only; PDF not redistributable)"
raw_path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/16_Villa_2014_Cadmium_Lead_Chocolates_Brazil.pdf"
access_url: "https://doi.org/10.1016/j.foodcont.2020.107455"
raw_sha256: "5dd0ee1749f735cad643621d295f5bb5e1fc689ee68d1e4990328e4bef71a428"
near_duplicates: []
metals: [Cd, Pb]
matrices: [cocoa-beans, cocoa-liquor, cocoa-butter, cocoa-powder, cocoa-shells, chocolate]
products: ["[[products/chocolate]]"]
ingredients: ["[[ingredients/cocoa]]"]
jurisdictions: [BR, EC, CI, EU, INTL]
claim_classes: [occurrence, processing_partition, dietary_exposure, public_wiki_claim, hmtc_context]
review_state: approved_for_public
wiki_doi: null
sample_n: 90
sample_population: "90 fermented and dried cocoa-bean batches from Brazil (Bahia n=33, Pará n=29, Espírito Santo n=4, Rondônia n=8), Côte d'Ivoire (n=12), and Ecuador (n=4); one Bahia bean batch additionally processed at pilot scale into nibs, liquor, cocoa powder, and cocoa butter to study contaminant partitioning during processing"
sampling_locations: ["Bahia, Brazil", "Pará, Brazil", "Espírito Santo, Brazil", "Rondônia, Brazil", "Côte d'Ivoire", "Ecuador"]
sampling_year_range: null
updated: 2026-10-22
---

# Ferreira de Oliveira et al. 2021 — Cd and Pb in cocoa beans from Brazil, Côte d'Ivoire and Ecuador, with a pilot-scale processing-partition study

## Overview

Ferreira de Oliveira and colleagues at ITAL Campinas and UNICAMP measured cadmium and lead by ICP OES in 90 batches of fermented, dried cocoa beans from four Brazilian states (Bahia, Pará, Espírito Santo, Rondônia), Côte d'Ivoire, and Ecuador, then processed one Bahia batch in a pilot-scale "bulk" line (roast → grind → press) into shells, liquor, cocoa powder, and cocoa butter to track how Cd and Pb partition through the chain. Cd ranged from <0.0015 to 1.598 mg/kg across beans; Pb ranged from <0.022 to 2.528 mg/kg. Eight percent of bean batches exceeded the cocoa-liquor Cd ceiling (Brazil/Mercosul 0.3 mg/kg), 66% exceeded the cocoa-liquor Pb ceiling (0.5 mg/kg), and all four Ecuador batches exceeded both Brazil/Mercosul (0.3) and EU (0.6 mg/kg, cocoa powder) Cd ceilings. The processing study showed Cd concentrates in the non-lipid fractions: 59% of bean Cd was retained in the mill residue during grinding, 35% went to liquor and then to cocoa powder during pressing, 6% stayed in the shell, and cocoa butter was effectively Cd-free (<0.0015 mg/kg LOD). A worst-case 15.75 g/day 100%-cocoa-chocolate exposure scenario for Brazilian consumers showed the Ecuador-bean and Pará-bean Cd levels alone would push child intake to 204% and 105% of the JECFA PTMI respectively; the 30.4 g/day German consumption scenario hit 398% of PTMI for children using Ecuadorian beans.

## Filename / paper-identity note

The PDF on disk is named `16_Villa_2014_Cadmium_Lead_Chocolates_Brazil.pdf`, but the file content is in fact Ferreira de Oliveira et al. 2021, *Food Control* 119:107455, DOI 10.1016/j.foodcont.2020.107455. Villa, Peixoto and Cadore (2014), *Journal of Agricultural and Food Chemistry* 62(34):8759-8763, DOI 10.1021/jf5026604, is *cited* by this paper (it is the source for the dark-vs-milk-chocolate cocoa-solid concentration argument in §3.3) but is not this PDF. The filesystem handle (`MFK_KADC_16-villa-2014-cadmium-lead-chocolates-brazil`) is preserved as-is for raw-tree traceability; the cite-key resolves the identity to the actual paper.

## Key numbers

### Sample design (Methods §2.1)

| Region | n batches |
| --- | --- |
| Brazil — Bahia (BA) | 33 |
| Brazil — Pará (PA) | 29 |
| Brazil — Espírito Santo (ES) | 4 |
| Brazil — Rondônia (RO) | 8 |
| Côte d'Ivoire (CI) | 12 |
| Ecuador (EQ) | 4 |
| Total | 90 |

A sample is a batch of fermented, dried beans from a single farm. All values reported below are on a dry-bean basis (fermented and dried cocoa beans as received), in mg/kg, unless explicitly relabelled to the cocoa-derivative.

### Analytical method (Methods §2.3)

- ICP OES (Agilent 5100 VDV); Cd 214.439 nm, Pb 220.353 nm; axial vision; triplicate determinations.
- Two sample-prep methods evaluated: microwave-assisted closed-vessel acid digestion (0.5 g sample, HNO₃ + H₂O₂, 170 °C, 25 min) and dry ashing (2.5 g, muffle 450 °C, 15 h, HCl 37 % solubilisation). Both passed AOAC 2016 recovery (80–110 %) on Tea Leaves CRM INCT-TL-1; T-test on a Bahia bean sample showed no significant difference (Cd p = 0.760, Pb p = 0.711). Dry ashing was selected for the bulk of the work (fewer chemicals, lower cost, larger throughput).
- Method validation parameters for dry ashing (Table 1B):
  - LOD: Cd 0.0005 mg/kg (= 0.5 µg/kg); Pb 0.007 mg/kg (= 7.0 µg/kg).
  - LOQ: Cd 0.0015 mg/kg (= 1.5 µg/kg); Pb 0.022 mg/kg (= 22 µg/kg).
  - Linearity r: Cd 0.9998; Pb 0.9999.
  - Precision (CV, n = 6 cocoa-bean replicates): Cd 3 %, Pb 6 %.
  - Accuracy on Peach Leaves CRM NIST 1547 (n = 3): Cd recovery 104 ± 9 %; Pb recovery 90 ± 5 %.

### Cadmium and lead in cocoa beans by region (Table 2; mean ± SD, range in parentheses, mg/kg dry bean)

| Region | n | Cd mean ± SD | Cd range | % >0.3 mg/kg (Brazil/Mercosul) | % >0.6 mg/kg (EU cocoa powder) | Pb mean ± SD | Pb range | % >0.5 mg/kg (Brazil/Mercosul cocoa liquor) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brazil/BA | 33 | 0.060 ± 0.052 | <0.015 – 0.213 | 0 | 0 | 0.727 ± 0.583 | <0.022 – 2.17 | 58 |
| Africa/CI | 12 | 0.038 ± 0.028 | <0.015 – 0.064 | 0 | 0 | 0.629 ± 0.307 | 0.037 – 1.04 | 75 |
| Brazil/ES | 4 | 0.142 ± 0.017 | 0.124 – 0.158 | 0 | 0 | 0.533 ± 0.178 | 0.365 – 0.756 | 75 |
| Brazil/PA | 29 | 0.129 ± 0.149 | 0.038 – 0.819 | 10 | 0 | 0.985 ± 0.656 | 0.291 – 2.53 | 79 |
| Brazil/RO | 8 | 0.063 ± 0.008 | 0.052 – 0.076 | 0 | 0 | 0.397 ± 0.216 | <0.022 – 0.624 | 63 |
| Ecuador/EQ | 4 | 1.153 ± 0.364 | 0.721 – 1.59 | 100 | 100 | 0.019 ± 0.024 | <0.022 – 0.050 | 0 |
| **All n = 90** | 90 | — | **<0.0015 – 1.598** | 8 % overall | — | — | **<0.022 – 2.528** | 66 % overall |

Notes:
- Cd was quantifiable in 89 % of bean batches; Pb in 94 %.
- Tukey letters in Table 2: Cd EQ differs significantly from all other regions (b vs a); Pb PA and RO carry "ab" letters (PA mean is highest but overlaps with BA, CI, ES at 95 %).
- Bahia bean used for the processing study had 0.113 ± 0.003 mg/kg Cd (separate aliquot, characterised before pilot processing).
- The MTL row at the bottom of Table 2 cites the cocoa-liquor ceilings under Brazil RDC 42/2013 and Mercosul GMC 12/2011 (Cd 0.3, Pb 0.5 mg/kg) and the EU cocoa-powder Cd ceiling 0.6 mg/kg under Reg 488/2014. EU does not set a maximum for Pb in cocoa beans, hence the "—" in the Pb-EU column.

### Cd and Pb partitioning through pilot-scale cocoa processing (§3.3)

Starting material: 2 kg Bahia bean batch with 0.113 ± 0.003 mg/kg Cd, processed in a JAF Inox rotating oven (60 min at 120 °C), knife mill, winnowing for shell/nib separation, three-cylinder Melanger mill for liquor, hydraulic press of 500 g liquor for cocoa butter + cake, cake grinding for cocoa powder.

| Fraction | Cd (mg/kg) | Pb (mg/kg) |
| --- | --- | --- |
| Fermented, dried bean (starting) | 0.113 ± 0.003 | not reported numerically |
| Shells | 0.124 ± 0.004 | 0.142 ± 0.006 |
| Cocoa powder | 0.111 ± 0.010 | <0.022 (LOQ) |
| Liquor | 0.060 ± 0.006 | <0.022 (LOQ) |
| Cocoa butter | <0.0015 (LOQ in the author dissertation; journal limit terminology not independently reconciled) | <0.022 (LOQ) |

Cd mass balance reported in §3.3: during grinding, 59 % of bean Cd was retained in the mill residue (a viscous residue inside the Melanger mill), 35 % was transferred into the liquor, and 6 % remained in the shell. During pressing, all of the liquor Cd transferred into the cocoa powder; cocoa butter and the pressing residue (cake-derived) were Cd-free at the LOD. The shell value (0.124 mg/kg) is slightly higher than the bean (0.113 mg/kg) because the shell mass is small and absorbs the Cd lost from the nib during conching/winnowing; the mass-fraction figure (6 %) is the correct interpretation. Pb partition could not be quantified because Pb was below LOQ in every derivative except the shell.

The paper reports the partitioning at the unit-process level (grinding step / pressing step mass-balance fractions). The bean-to-powder steady-state concentration framing reported by [[sources/cbi2024-cocoa-eu-market-requirements]] (CBI 2024) operates at a different level of abstraction — the two views are not directly comparable here and any cross-source reconciliation belongs in a synthesis pass on the cocoa-Cd partitioning question.

### Dietary exposure assessment (§3.4, Table 4)

Worst-case 100 %-cocoa-chocolate scenario, 15.75 g/day (Brazilian per-capita consumption, MDCI 2018), body weights 60 kg adult / 15 kg child; intake = max bean concentration × consumption ÷ body weight.

Reference values used by the authors: JECFA PTMI for Cd = 25 µg/kg bw/month; EFSA BMDL₀₁ for Pb = 12 µg/kg bw/day (developmental neurotoxicity, 1 % extra risk).

| Bean origin | Cd max (mg/kg) | Cd adult monthly intake µg/kg bw (% PTMI) | Cd child monthly intake µg/kg bw (% PTMI) | Pb max (mg/kg) | Pb adult daily intake µg/kg bw (% BMDL₀₁) | Pb child daily intake µg/kg bw (% BMDL₀₁) |
| --- | --- | --- | --- | --- | --- | --- |
| Bahia | 0.213 | 1.70 (7 %) | 6.80 (27 %) | 2.17 | 0.57 (5 %) | 2.28 (19 %) |
| Côte d'Ivoire | 0.064 | 0.51 (2 %) | 2.04 (8 %) | 1.04 | 0.27 (2 %) | 1.09 (9 %) |
| Espírito Santo | 0.158 | 1.26 (5 %) | 5.05 (20 %) | 0.756 | 0.20 (2 %) | 0.79 (7 %) |
| Pará | 0.819 | 6.54 (26 %) | 26.16 (105 %) | 2.52 | 0.66 (6 %) | 2.65 (22 %) |
| Rondônia | 0.076 | 0.61 (2 %) | 2.43 (10 %) | 0.624 | 0.16 (1 %) | 0.66 (5 %) |
| Ecuador | 1.60 | 12.80 (51 %) | 51.10 (204 %) | 0.050 | 0.01 (0 %) | 0.05 (0 %) |

Germany scenario (30.4 g/day, Chocosuisse 2018), recalculated by the authors for the worst-case Ecuador-Cd bean: Cd monthly intake = 99 % PTMI for adults, 398 % for children. Pb daily intake = 11 % BMDL₀₁ for adults, 43 % for children (using the worst-case Pb bean, Brazil/PA).

THQ (Target Hazard Quotient, US-EPA formulation) for the cocoa-bean Cd and Pb values at 15.75 g/day chocolate stays below 1 for both metals at both body weights, but the authors report the consumption rates at which THQ crosses 1: 42 g/day for Cd and 80 g/day for Pb. Both rates are within the range of frequent chocolate consumers — German per-capita is 30.4 g/day, and individual high-consumers exceed 100 g/day.

### Regulatory ceilings cited (Introduction §1 and Table 2 footnote)

- **EU Commission Recommendation 488/2014** (Cd in finished cocoa/chocolate, applicable from 1 January 2019, amending Reg 1881/2006 Annex):
  - Milk chocolate with cocoa content <30 %: 0.10 mg/kg.
  - Chocolate with cocoa content <50 % AND milk chocolate with cocoa content ≥30 %: 0.30 mg/kg.
  - Milk chocolate with cocoa content ≥50 %: 0.80 mg/kg.
  - Cocoa powder sold to the final consumer / drinking chocolate: 0.60 mg/kg.
  These four values are the same ladder later carried forward into Reg 2021/1323 and Reg 2023/915 (see [[sources/ec2019-cadmium-chocolate-leaflet]] and [[sources/cbi2024-cocoa-eu-market-requirements]]).
- **Brazil — RDC 42/2013** (ANVISA, harmonised to Mercosul): cocoa liquor Cd 0.3 mg/kg, Pb 0.5 mg/kg.
- **Mercosul GMC 12/2011**: same cocoa-liquor ceilings.
- **China GB 2762-2012** (cited as "released November 2013, effective 1 June 2014"; covers both Cd and Pb).
- **Codex Alimentarius CAC** Cd ML for cocoa products (reported via the 13th CCCF session, 29 April – 3 May 2019).
- **JECFA PTMI for Cd**: 25 µg/kg bw/month (FAO/WHO 2013, 77th JECFA meeting). See [[regulations/jecfa-cadmium-ptmi]].
- **EFSA BMDL₀₁ for Pb**: 12 µg/kg bw/day for developmental neurotoxicity (EFSA Scientific Opinion on Lead in Food, 2010). See [[regulations/efsa-lead-contam-2010]].

## Methods (brief)

ICP OES (Agilent 5100 VDV; axial vision, double-pass nebulisation, seaspray nebuliser; RF 1200 W; analytical lines Cd 214.439 nm, Pb 220.353 nm; triplicate determinations) on dry-ashed (450 °C, 15 h; HCl 37 % solubilisation) cocoa-bean and cocoa-derivative samples. Calibration in 5 % HCl across 0.0001–1.00 mg/L Cd and 0.002–1.00 mg/L Pb. CRMs: INCT-TL-1 Tea Leaves (method-evaluation), NIST 1547 Peach Leaves (dry-ashing validation). Statistical analysis: one-way ANOVA with Tukey post hoc at α = 0.05 (XLSTAT 2012). Dietary exposure built on the worst-case-residue × consumption / body-weight formula in Equation 1; THQ used the US-EPA Equation 2 with RfDs from Khan et al. 2008 and US-EPA 2016 (RfD values not stated numerically in the visible text).

Limitations: (i) the processing-partition study uses a single Bahia bean batch in a pilot oven/mill/press chain, not a commercial industrial line, so Cd partitioning fractions (59 %/35 %/6 %) are scoped to this specific pilot equipment and conching profile, not to industry-wide processing in general; (ii) Pb partition could not be quantified because Pb was below LOQ in every derivative except the shell, so the Pb processing-partition picture is qualitative only; (iii) the dietary-exposure scenario assumes 100 %-cocoa chocolate, which is not the typical consumer product — true exposure depends on the cocoa-solid fraction in the chocolate consumed (dark vs milk vs white), and the authors flag this in the discussion; (iv) the sample is geographically uneven (Ecuador and ES contribute only 4 batches each), so the Ecuador-Cd and ES-Cd means carry wide uncertainty, but the per-batch values themselves are reported precisely.

## Preparation and reporting-limit verification

The author’s 2020 dissertation identifies fermented and dried beans homogenized with shell for the 90-sample origin comparison, and a separate 2 kg processing batch. Its method Table 1B reports a cadmium detection limit of 0.0005 mg/kg and quantification limit of 0.0015 mg/kg. The butter result below 0.0015 mg/kg is a bound, not a measured zero. Some dissertation origin-table bounds are printed as <0.015 mg/kg; this inconsistency is retained rather than silently changing the reported ranges. These checks refer to the dissertation, which is described separately in [[sources/oliveira2020-thesis-cocoa-cadmium-lead]]; the journal’s complete tables have not been independently reconciled here.

## Implications

**Certification:** For HMTc chocolate workups, this paper contributes (a) a contemporary literature-baseline Cd distribution for cocoa beans by producing region, including the Ecuador-Amazon high-Cd signal, and (b) a unit-process partitioning data point that locates almost all the Cd in the non-lipid (cocoa-solid) fraction at the pilot-scale grinding step. The Pb signal in Brazilian beans is geographically structured: mean Pb is above 0.5 mg/kg in all four Brazilian states sampled here (BA 0.727, PA 0.985, ES 0.533, RO 0.397 — the RO mean is below 0.5 but 63 % of RO batches exceed the 0.5 mg/kg cocoa-liquor MTL individually), while Ecuador beans cluster near LOQ for Pb. EU 488/2014 sets no Pb maximum for cocoa beans or finished cocoa products, so the Pb signal sits outside the existing EU regulatory frame; whether this evidence supports any within-row subcategory work for chocolate is a Standards Workbench decision and is left to that workflow. The 8 % overall Cd exceedance and 66 % overall Pb exceedance against the Brazil/Mercosul cocoa-liquor MTLs are the headline occurrence figures from this paper.

**Courses:** The processing-partition figure (cocoa butter Cd <0.0015 mg/kg vs cocoa powder 0.111 mg/kg from a 0.113 mg/kg starting bean) is the cleanest single number we have for the "white-chocolate-is-low-Cd, dark-chocolate-is-high-Cd" pattern. The 59 %/35 %/6 % mill-residue/liquor/shell mass balance is the single-paragraph mechanistic explainer that should accompany any chocolate-category educator module.

**App:** For an app reading a chocolate product's ingredient list, the cocoa-solids percentage is the dominant Cd-risk driver, and the bean origin is the dominant Pb-risk driver. A Brazilian-cocoa dark chocolate carries elevated Pb risk that an Ecuador-cocoa dark chocolate does not; an Ecuador-cocoa dark chocolate carries elevated Cd risk that an Ivorian-cocoa milk chocolate does not. The app's risk model should resolve at the bean-origin × cocoa-percentage cross, not at the chocolate-style level alone.

**Microbiome:** Not addressed in this paper; cocoa polyphenols are mentioned (citing Martín & Ramos 2016) but no microbiome data are reported.

## Related evidence
- [[metals/cadmium]]
- [[metals/lead]]
- [[ingredients/cocoa]]
- [[products/chocolate]]
- [[regulations/jecfa-cadmium-ptmi]]
- [[regulations/efsa-lead-contam-2010]]
- [[regulations/eu-1881-2006-contaminants-superseded]]
- [[regulations/eu-2021-1323-cadmium-cereals-superseded]]
- [[regulations/eu-2023-915-cadmium]]
- [[regulations/china-gb-2762-2012-contaminants-superseded]]
- [[regulations/codex-cadmium-mls]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [566c7b2fc0](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2fc0) | 2026-06-02 | major | 1 section added |
<!-- END: hmi-page-history -->
