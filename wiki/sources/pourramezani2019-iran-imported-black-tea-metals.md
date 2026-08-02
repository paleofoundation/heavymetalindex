---
type: source
raw_handle: MFD_pourramezani2019-matcha-heavy-metal
cite_key: pourramezani2019-iran-imported-black-tea-metals
title: "Evaluation of heavy metal concentration in imported black tea in Iran and consumer risk assessments"
authors: ["Fatemeh Pourramezani", "Fateme Akrami Mohajeri", "Mohammad Hossein Salmani", "Arefe Dehghani Tafti", "Elham Khalili Sadrabad"]
year: 2019
publication: "Food Science & Nutrition"
doi: "10.1002/fsn3.1267"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
access_url: "https://onlinelibrary.wiley.com/doi/10.1002/fsn3.1267"
raw_path: "raw/Manual Fetch Discovery/pourramezani2019-matcha-heavy-metal.pdf"
raw_sha256: "05e9e2a338d0941247767e1e3743536fe19703a26f699dd7b26e004f3f7e4c52"
metals: [Pb, Cd, Cu, tAs, tHg]
ingredients: ["[[ingredients/tea]]", "[[ingredients/camellia-sinensis]]"]
products: ["[[products/tea]]", "[[products/true-tea-camellia-sinensis]]"]
matrices: [tea, black-tea, dry-leaf]
jurisdictions: [IR, IN, LK]
near_duplicates: []
sample_n: 122
sample_population: "One hundred twenty-two commercial black tea leaf samples randomly collected from the local market of Hormozgan Province, Iran in 2017. Origins reported as imported from India and Sri Lanka; the paper presents per-origin means and ranges but does not report the within-origin sample counts (India n and Sri Lanka n not disclosed)."
sampling_year_range: "2017"
sampling_locations: ["Hormozgan Province, Iran (retail market)"]
wiki_doi: null
updated: 2026-06-08
---

# Pourramezani et al. 2019 — Heavy metals in imported black tea sold in Hormozgan, Iran

## Overview

Pourramezani and colleagues measured lead, cadmium, copper, total arsenic, and total mercury in 122 commercial black tea leaf samples imported into Hormozgan Province, Iran, from India and Sri Lanka, and computed Hazard Quotient (HQ) and Hazard Index (HI) values against an assumed adult consumption rate of 6 g tea per day and 65 kg body weight. All per-metal means fell below the WHO and Iran national standard limits that the authors cite, and the per-metal HQ and overall HI values were all below 1 for both origins, leading the authors to conclude that the studied teas posed no significant noncarcinogenic health hazard to Iranian consumers. The arsenic and mercury determinations are total values (HGAAS and CV-AAS respectively); no inorganic/organic speciation was performed, which is a non-trivial limitation given that the toxicological floor for tea is set by inorganic arsenic and methylmercury rather than the total fractions reported here.

## Key numbers

All concentrations below are reported by the authors in µg/g of dry tea leaves, equivalent to mg/kg dry weight. Values are presented as mean ± SD with the minimum and maximum across all samples of the indicated origin.

### Per-metal, per-origin concentrations (mg/kg dry leaf, Table 2)

| Metal | Origin | Mean ± SD (mg/kg) | Min (mg/kg) | Max (mg/kg) | Significant origin difference (p < .05) |
| --- | --- | --- | --- | --- | --- |
| Pb | India | 0.21 ± 0.169 | 0.001 | 0.73 | yes |
| Pb | Sri Lanka | 0.14 ± 0.109 | 0.001 | 0.6 | yes |
| Cd | India | 0.02 ± 0.013 | 0.0002 | 0.052 | yes |
| Cd | Sri Lanka | 0.017 ± 0.019 | 0.0002 | 0.084 | yes |
| Cu | India | 14.56 ± 6.85 | 0.033 | 52.26 | yes |
| Cu | Sri Lanka | 11.29 ± 5.906 | 0.033 | 64.24 | yes |
| tAs | India | 0.067 ± 0.036 | 0.007 | 0.14 | no |
| tAs | Sri Lanka | 0.057 ± 0.0323 | 0.0083 | 0.13 | no |
| tHg | India | 0.01 ± 0.0049 | 0.0016 | 0.019 | yes |
| tHg | Sri Lanka | 0.0076 ± 0.0046 | 0.0001 | 0.019 | yes |

The Mann–Whitney test was used to detect abnormal information and a one-sample t-test was used for the per-metal origin comparisons (paper §2.5). Letters in Table 2 indicate that Pb, Cd, Cu, and tHg differed significantly between Indian and Sri Lankan tea (Indian higher in all four), while tAs did not differ significantly between origins.

### Limits of detection (Table 2 note)

| Metal | LOD (mg/kg) |
| --- | --- |
| tHg | 0.000061 |
| Pb | 0.0013 |
| Cd | 0.00021 |
| tAs | 0.00021 |
| Cu | 0.033 |

The Cu LOD (0.033 mg/kg) is identical to the reported Cu minimum (0.033 mg/kg for both origins), indicating that at least one sample in each origin sat at the detection floor; the authors do not report the number of left-censored Cu samples or how they handled them in the mean calculation.

### Metal-to-metal correlations (Table 3, all 122 samples pooled)

The paper reports Pearson correlation coefficients across all samples (α = 0.05). Only two pairings were statistically significant at the 95% level: Cu–Pb (r = 0.370) and Cu–Cd (r = 0.245). All other pairings — tAs with any other metal, tHg with any other metal, and Pb–Cd — were not statistically significant. The authors interpret the Cu–Pb and Cu–Cd associations as evidence of a shared contamination pathway among the three base metals, while tAs and tHg appear to enter the tea leaves through independent pathways.

### Risk assessment (Table 4)

Assumed consumption rate: 6 g dry tea per day (Naghipour et al. 2016 for Iranian tea drinkers). Assumed body weight: 65 kg adult. Reference doses used by the authors: RfD Cd 1 µg/kg/day, RfD Cu 40 µg/kg/day, RfD tAs 0.3 µg/kg/day (all from US EPA per Li et al. 2015). Because US EPA did not publish RfDs for Hg and Pb at the time, the authors substituted PTWI/7 for those two: tHg 5 µg/kg/week ÷ 7 ≈ 0.714 µg/kg/day, Pb 25 µg/kg/week ÷ 7 ≈ 3.57 µg/kg/day (both PTWIs from WHO/JECFA per Cao et al. 2010).

| Country | Parameter | Pb | Cd | tHg | Cu | tAs |
| --- | --- | --- | --- | --- | --- | --- |
| India | ADD (µg/kg/day) | 1.9 × 10⁻² | 1.8 × 10⁻³ | 9.2 × 10⁻⁴ | 1.34 | 6.1 × 10⁻³ |
| India | HQ | 5.3 × 10⁻³ | 1.9 × 10⁻³ | 1.2 × 10⁻³ | 3.36 × 10⁻² | 2 × 10⁻² |
| India | HI = ΣHQ | 6.1 × 10⁻² | | | | |
| Sri Lanka | ADD (µg/kg/day) | 1.2 × 10⁻² | 1.5 × 10⁻³ | 7 × 10⁻⁴ | 1.04 | 5.2 × 10⁻³ |
| Sri Lanka | HQ | 3.5 × 10⁻³ | 1.5 × 10⁻³ | 9.8 × 10⁻⁴ | 2.6 × 10⁻² | 1.7 × 10⁻² |
| Sri Lanka | HI = ΣHQ | 4.8 × 10⁻² | | | | |

The HI of 0.061 (India) and 0.048 (Sri Lanka) are well below the HI = 1 threshold the authors cite as the noncarcinogenic concern level.

**Paper-internal arithmetic check on the Pb ADD for India.** Applying the authors' own ADD = C × IR / BW formula with C = 0.21 mg/kg = 210 µg/kg, IR = 6 g/day = 0.006 kg/day, and BW = 65 kg gives ADD_Pb_India = 210 × 0.006 / 65 ≈ 0.0194 µg/kg/day ≈ 1.94 × 10⁻². Table 4 reports 1.9 × 10⁻² for India and 1.2 × 10⁻² for Sri Lanka. For Sri Lanka, C = 0.14 mg/kg gives 140 × 0.006 / 65 ≈ 0.0129 µg/kg/day ≈ 1.29 × 10⁻². Both Pb ADDs in Table 4 are internally consistent with the formula. No transposition with the Pb HQ row was detected.

### Regulatory limits cited by the authors (§4 Discussion)

The authors compare their means against the following limits (not their own measurements, but cited references for context):

- WHO: Pb 10 mg/kg, Cd 3 mg/kg.
- Iran national standard (ISIRI 2007; Soliman 2016): Cu 50 mg/kg, tAs 0.15 mg/kg, tHg 0.02 mg/kg.

By these citations, all per-origin means in the present study fall below the respective limits. The maximum Cu values (52.26 mg/kg India, 64.24 mg/kg Sri Lanka) exceed the Iran national 50 mg/kg Cu limit, but the authors do not flag this — they compare means only.

### Comparison values cited from prior literature (§4 Discussion)

The authors contextualize their values against prior Iranian and international tea studies (verbatim from their text):

- Karimzadeh et al. 2013 (Mazandaran factory black tea, Iran): Pb 2.33–2.25, Cd 0.4–0.16, Cu 23.14–30.19 mg/kg (spring vs summer).
- Qin and Chen 2007 (Chinese market tea): Pb 1.32 mg/kg mean.
- Nasri et al. 2017 (imported tea in Iran): Pb 0.049–10.12, Cd 0.016–0.123, Cu 3.05–37.41, tAs 0.0431–0.287 mg/kg.
- Ansari et al. 2007 (cultivated black tea, Iran): Cu 29.3 mg/kg.
- Naithani and Kakkar 2005 (Indian herbal teas): Cu 11.1 µg/g.
- Matsuura et al. 2001 (Japan), Narin et al. 2004 (Turkey), Ashraf and Mian 2008 (Saudi Arabia): Cu 27.7, 24.8, 18.1 mg/kg respectively.
- Naghipour et al. 2016 (North Iran black and white tea): tAs 0.03–0.1 and 0.01–0.03 mg/kg.
- Karimi et al. 2008 (Iranian-market tea): tHg 0.61 mg/kg mean.
- Barone et al. 2016 (imported tea, Italy): tHg up to 0.27 mg/kg in Chinese tea.

The authors note that their tHg value (0.01 mg/kg India, 0.0076 mg/kg Sri Lanka) is two orders of magnitude lower than Karimi et al. 2008's reported 0.61 mg/kg mean but do not reconcile this discrepancy further.

## Methods (brief)

A total of 122 black tea samples were randomly purchased from local retail markets in Hormozgan Province, Iran, with origin labelled as imported from India or Sri Lanka. Sampling followed ISIRI 624 (2008). Sample preparation differed by element. For Pb, Cd, and Cu: 5 g dry tea was dry-ashed in an electric furnace at 450 ± 5 °C for 8 h, the residue dissolved in 5 mL 37% HCl (Merck), and diluted to 50 mL with deionized water. Pb and Cd were quantified by graphite furnace AAS (SavantAA GBC, GFAAS) and Cu by flame AAS (ISIRI 9266, 2007). For tAs: 5 g sample was mixed with Mg(NO₃)₂/6H₂O·8MgO and 32% HNO₃ in a 20:5 ratio, evaporated on a hotplate (100 ± 5 °C), ashed in an electric furnace (425 ± 25 °C) for 12 h, treated with further 65% HNO₃ during a 2–3 h step at 400 °C, redissolved with distilled water and a 1:5:5 mL mixture of KI, ascorbic acid and 6 M HCl, filtered through a 0.45 µm membrane, and diluted to 25 mL with 6 M HCl. tAs was quantified by hydride generation AAS (ISIRI 16722, 2013). For tHg: 5 g of powdered sample was digested with 7 M HNO₃, 9 M H₂SO₄, and 2% sodium molybdate in a 20:25:1 mL ratio, heated for 1 h, diluted with 10 mL distilled water, filtered, and brought to 100 mL with 0.5 M H₂SO₄. tHg was determined by cold-vapour AAS. AAS operating parameters (Table 1): Pb 217 nm, Cd 228.8 nm, Hg 253.7 nm, As 193.7 nm, Cu 324.8 nm.

Limitations relevant to downstream synthesis: (1) arsenic and mercury are reported only as total fractions (HGAAS and CV-AAS); no inorganic As or methylmercury speciation was performed, so the values cannot be used directly as inorganic-arsenic or MeHg exposure inputs without an assumed species fraction. (2) The split of the N = 122 samples between Indian and Sri Lankan origin is not disclosed; without per-origin n values, the per-origin means cannot be combined into a single pooled distribution with known weights. (3) The Cu LOD (0.033 mg/kg) equals the reported Cu minimum for both origins, and the paper does not report how left-censored Cu values were handled in the means. (4) The basis is dry tea leaves as sold; the paper does not measure brewed-infusion concentrations or report a transfer factor, so these values are not directly applicable to consumer-cup exposure assessment without a literature transfer-rate assumption.

## Implications

Certification: This is Iranian-retail-market imported-black-tea evidence, useful as cross-jurisdictional context for the dry-leaf occurrence distribution of Pb, Cd, Cu, tAs, and tHg in commerce, but is not a US or EU benchmark pool input. The 0.21 mg/kg India Pb mean and 0.73 mg/kg India Pb maximum sit well below WHO and Iran national tea Pb limits the authors cite (10 mg/kg WHO, no Iran national Pb limit cited), but the maximum Cu values (52.26 mg/kg India, 64.24 mg/kg Sri Lanka) exceed the 50 mg/kg Iran national Cu limit the authors themselves cite — a fact the authors do not flag. The lack of As and Hg speciation limits routability to total-fraction occurrence evidence only; do not promote the tAs values to inorganic-arsenic context without an assumed species fraction.

Courses: Useful as a case study in how risk-assessment conclusions can be sensitive to RfD source (US EPA RfD vs WHO PTWI/7 substitution for Pb and Hg), and as a demonstration of why total arsenic and total mercury are weaker exposure inputs than the speciated forms required by EFSA and US EPA contemporary risk assessment.

App: Route to tea, true tea, lead, cadmium, copper, total arsenic, and total mercury pages. Do not route as tea-infusion exposure evidence because the basis is dry leaves, not brewed liquor. Do not route as inorganic-arsenic or methylmercury-specific evidence — speciation was not performed.

## Wiki pages this source may touch

- [[ingredients/tea]]
- [[ingredients/camellia-sinensis]]
- [[products/tea]]
- [[products/true-tea-camellia-sinensis]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/copper]]
- [[metals/arsenic-total]]
- [[metals/mercury-total]]

## Verification notes

The PDF filename `pourramezani2019-matcha-heavy-metal.pdf` is a discovery-skill misnomer: the paper is about imported BLACK tea (Indian and Sri Lankan Camellia sinensis dry leaves sold in Hormozgan), not matcha (Japanese stone-ground green tea powder). The `raw_handle` field preserves the literal filename for filesystem traceability (`MFD_pourramezani2019-matcha-heavy-metal`), but the `cite_key` and all matrix/product slugs reflect the actual content (black tea, not matcha). No matcha-related slugs (`ingredients/matcha-powder`, `products/matcha`) are routed.

Sample-count limitation: the paper reports N = 122 total samples split between Indian and Sri Lankan origin but does not disclose the within-origin counts. The per-origin means in Table 2 are reported as if both origins were measured with similar n, but the relative weight of the two subgroups cannot be reconstructed from the paper. Downstream synthesis treating the per-origin means as having equal weight should flag this as an inference, not a paper-reported fact.

Arsenic and mercury speciation: HGAAS and CV-AAS measure total fractions only. The authors compare their tAs values against an Iran national 0.15 mg/kg limit and their tHg values against a 0.02 mg/kg limit, both presented in the paper as "total" without speciation caveat. This is a known weakness of pre-2015-era tea heavy-metal surveys; the values are preserved here as reported and flagged as total fractions in the `metals:` array (`tAs`, `tHg`).

Copper left-censoring: the reported Cu LOD of 0.033 mg/kg equals the reported Cu minimum for both Indian and Sri Lankan tea samples (Table 2). At least one sample in each origin sat at the detection floor. The paper does not disclose the number of left-censored Cu samples or the censoring substitution rule used in the mean (LOD, LOD/2, or zero). The per-origin Cu means are reported here as printed in Table 2 without adjustment.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [6a6ebd3fb](https://github.com/paleofoundation/heavymetalindex/commit/6a6ebd3fb) | 2026-06-08 | major | 11 sections added; narrative text revised |
<!-- END: hmi-page-history -->
