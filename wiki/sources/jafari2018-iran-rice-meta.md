---
type: source
raw_handle: MFK_jafari2018
cite_key: jafari2018-iran-rice-meta
title: "The concentration data of heavy metals in Iranian grown and imported rice and human health hazard assessment"
authors: ["Ali Jafari", "Bahram Kamarehie", "Mansour Ghaderpoori", "Nahid Khoshnamvand", "Mehdi Birjandi"]
year: 2018
publication: "Data in Brief 16 (2018) 453-459"
doi: "10.1016/j.dib.2017.11.057"
access_url: "https://doi.org/10.1016/j.dib.2017.11.057"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 1/jafari2018.pdf"
raw_sha256: 8d6ac59c264a37275ff7dc02960cb6f8d7354f918a05a05c490e82d3384f0cff
metals: [Cd, Pb, tAs, Cr, Zn, Ni, Cu, Co]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice]
jurisdictions: [IR]
near_duplicates: []
sample_n: 10
sample_population: "Systematic review of 10 primary studies (2010-2016) reporting heavy-metal concentrations in Iranian-grown and imported rice brands sold in Iran, identified from internal Persian databases (SID, Magiran, IranDoc, Iran Medex) and English databases (Google Scholar, PubMed, Web of Science, ScienceDirect) over a 2000-2017 search window. From 130 initial hits, 89 were excluded for irrelevance, 20 for being theses/conference abstracts, and 11 for insufficient sample size or no full-text access, leaving 10 articles. Pooled sample sizes per metal varied with which constituent studies measured that metal — Iranian-grown N: Cd 295, Pb 295, tAs 7, Cr 45, Zn 144, Ni 195, Cu 166, Co 15; Imported N: Cd 160, Pb 320, tAs 44, Cr 195, Zn 100, Ni 15, Cu 100, Co 30. Constituent-study locations included Shiraz, Kashan, Mazandaran, Kermanshah, Lorestan, Tabriz, and Tehran; imported rice was sourced from Thailand, India, and Pakistan per the constituent studies."
sampling_locations: [Iran]
sampling_year_range: "constituent studies sampled 2010-2016; literature search window 2000-2017"
updated: 2026-06-01
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Jafari et al. 2018 — Iran systematic review of heavy metals in Iranian-grown vs imported rice (10 studies, 2000-2017) with adult EWI/PTWI comparison

## Overview

This Data in Brief paper is a systematic-review companion data article that pools 10 primary Iranian rice-contamination studies retrieved from Persian and English databases over a 2000-2017 search window. The authors recomputed weighted-mean concentrations (mg/kg dry weight) of eight elements — Cd, Pb, total As, total Cr, Zn, Ni, Cu, Co — separately for Iranian-grown and imported rice brands sold in Iran, then computed estimated weekly intakes (EWI) at 770 g/week per-capita rice consumption and 60 kg adult body weight, comparing each EWI against the FAO/WHO PTWI. Across both rice categories, every EWI was below its PTWI. The pooled Iranian-grown vs imported means (mg/kg dry weight) were Cd 0.16 vs 0.13, Pb 0.196 vs 0.55, tAs 0.046 vs 0.057, Cr 0.29 vs 0.61, Zn 26.13 vs 3.46, Ni 0.22 vs 0.76, Cu 16 vs 2.08, and Co 0.29 vs 0.29; significant differences (P<0.001) were reported between Iranian-grown and imported rice for all elements except Co (P=0.99) and Zn (P=0.99). Imported rice was higher in Pb, tAs, Cr, and Ni; Iranian-grown rice was higher in Zn and Cu. The paper is a pooled summary, not original primary measurements, and the constituent-study labels in Tables 1-2 are partly mislabelled relative to the reference list (see Verification notes); the pooled means in Table 3 are the operative result. Evidence tier B.

## Key numbers

### Table 1 — Iranian-grown rice constituent studies (each row is one primary study; values mg/kg, presumed dry weight per the paper's pooling basis)

| Study label (paper) | Sample size | Cd | Pb | tAs | Cr | Zn | Ni | Cu | Co | Ref |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Kashan-2015 | 45 | 0.64 ± 0.054 | 0.64 ± 0.3 | — | — | — | — | — | — | [1] |
| Mazandaran-2013 | 30 | 0.193 ± 0.2 | 0.17 ± 0.15 | — | 0.24 ± 0.06 | — | — | — | — | [2] |
| Kermanshah-2013 | 7 | 0.013 ± 0.0007 | 0.275 ± 0.003 | 0.046 ± 0.002 | — | — | — | — | — | [3] |
| Lorestan-2011 | 99 | 0.036 ± 0.04 | 0.075 ± 0.07 | — | — | — | — | — | — | [4] |
| Shiraz-2010 | 15 | 0.34 ± 0.06 | 0.243 ± 0.06 | — | 0.39 ± 0.03 | — | 0.76 ± 0.101 | — | 0.29 ± 0.05 | [5] |
| Tehran-2015 | 45 | — | — | — | — | 20.7 ± 0.31 | — | 1.1 ± 0.03 | — | [6] |
| Lorestan-2010 | 99 | 0.044 ± 0.05 | 0.11 ± 0.04 | — | — | 28.6 ± 12.39 | — | 22.8 ± 0.03 | — | [7] |

The paper's Tables 1-2 column alignment is partially scrambled in the published version; per-row metal identities here are reconstructed from the column header order (Location, Sample size, Cd, Pb, As, Cr, Zn, Ni, Cu, Co) and verified against Table 3 pooled-mean sample-size sums (e.g., Iranian-grown Zn N=144 = 45 [Tehran-2015] + 99 [Lorestan-2010] ✓; Iranian-grown Cu N=166 = 45 + 99 + (22 unattributed); Iranian-grown Cd N=295 = 45+30+7+99+15+99 = 295 ✓).

### Table 2 — Imported rice constituent studies (each row is one primary study; values mg/kg presumed dry weight)

| Study label (paper) | Sample size | Cd | Pb | tAs | Cr | Zn | Ni | Cu | Co | Ref |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| All-2016 | 100 | — | 0.33 ± 0.14 | — | 0.62 ± 0.42 | 3.46 ± 2.49 | 0.13 ± 0.05 | 2.08 ± 0.34 | — | [8] |
| Kashan-2015 | 81 | 0.046 ± 0.069 | 0.81 ± 1.08 | — | 0.68 ± 0.09 | — | 0.02 ± 0.009 | — | — | [1] |
| All-2011 | 60 | — | 0.37 ± 0.12 | — | — | — | — | — | — | [9] |
| Tabriz-2014 | 30 | 0.109 ± 0.004 | 0.29 ± 0.005 | 0.055 ± 0.004 | — | — | — | — | — | [10] |
| Kermanshah-2013 | 14 | 0.008 ± 0.0001 | 0.216 ± 0.002 | 0.052 ± 0.002 | — | — | — | — | — | [3] |
| Shiraz-2015 | 35 | 0.4 ± 0.035 | 1.25 ± 0.27 | — | 0.45 ± 0.06 | — | 0.8 ± 0.05 | — | 0.29 ± 0.07 | [5] |

### Table 3 — Pooled mean concentrations (Iranian-grown vs imported; mg/kg, presumed dry weight per source pooling basis)

| Element | Type | N | Mean (mg/kg) | SD | DF (paper's label) | P-value |
|---|---|---:|---:|---:|---:|---|
| Cd | Iranian-grown | 295 | 0.16 | ± 0.08 | 0.03 | P < 0.001 |
| Cd | Imported | 160 | 0.13 | ± 0.05 | — | P < 0.001 |
| Pb | Iranian-grown | 295 | 0.196 | ± 0.16 | -0.354 | P < 0.001 |
| Pb | Imported | 320 | 0.55 | ± 0.56 | — | P < 0.001 |
| tAs | Iranian-grown | 7 | 0.046 | ± 0.002 | -0.011 | P < 0.001 |
| tAs | Imported | 44 | 0.057 | ± 0.0035 | — | P < 0.001 |
| Cr | Iranian-grown | 45 | 0.29 | ± 0.05 | -0.32 | P < 0.001 |
| Cr | Imported | 195 | 0.61 | ± 0.31 | — | — |
| Zn | Iranian-grown | 144 | 26.13 | ± 10.3 | 22.67 | P = 0.99 |
| Zn | Imported | 100 | 3.46 | ± 2.49 | — | — |
| Ni | Iranian-grown | 195 | 0.22 | ± 0.04 | -0.54 | P < 0.001 |
| Ni | Imported | 15 | 0.76 | ± 0.101 | — | — |
| Cu | Iranian-grown | 166 | 16 | ± 7.3 | 13.92 | P < 0.001 |
| Cu | Imported | 100 | 2.08 | ± 0.34 | — | — |
| Co | Iranian-grown | 15 | 0.29 | ± 0.047 | — | P = 0.99 |
| Co | Imported | 30 | 0.29 | ± 0.07 | — | — |

The "DF" column label in the source is ambiguous; values appear to be a mean-difference statistic (Iranian-grown minus imported, except Zn and Cu which run the other direction), not degrees of freedom. The paper does not define "DF" in text. The P-value column is reproduced as printed; P < 0.001 is reported on both rows of each pair where the test was significant.

### Table 4 — Permissible-value comparison (Iranian-grown and imported EWI vs PTWI; 770 g/week rice consumption per capita; 60 kg adult body weight)

| Metal | EWI imported (µg/kg BW/week) | EWI Iranian-grown (µg/kg BW/week) | PTWI (µg/kg BW/week) | Reference body |
|---|---:|---:|---:|---|
| Cd | 1.69 | 2.05 | 7 | FAO/WHO |
| Pb | 7.06 | 2.52 | 25 | FAO/WHO (withdrawn but used as comparator) |
| tAs | 0.73 | 0.59 | 15 | FAO/WHO (PTWI later withdrawn for iAs) |
| Cr | 7.83 | 3.72 | 23.3 | FAO/WHO |
| Zn | 44.4 | 335.34 | 420 | FAO/WHO |
| Ni | 9.75 | 2.82 | 35 | FAO/WHO |
| Cu | 26.69 | 205.33 | 500 | FAO/WHO |
| Co | 3.72 | 3.72 | Not set (MTDI 700 µg/kg BW/week) | FAO/WHO; ISIRI No. 12968 |

EWI formula (Eq. 1): EWI = C × WC / BW, where C = mean heavy-metal content (mg/kg dry weight), WC = weekly rice consumption (770 g/week per capita), BW = 60 kg (Iranian adult average). The paper does not state how the per-capita consumption figure was derived.

### Search-strategy yield (Fig. 1, p. 455)

- Initial hits across databases: Google Scholar 10 (keywords) + 3 (abstract); Magiran 32 (keywords); ScienceDirect 2 (abstract & keyword); PubMed 11 (title & abstract); IranDoc 72 (all fields). Total 130.
- Excluded for irrelevance after title screening: 89 → 41 remaining.
- Excluded for being theses/conference works: 20 → 21 remaining.
- Excluded for no full-text access, insufficient sample size, or methodology problems: 11 → 10 selected for analysis.

### Authors' summary risk conclusions (§"Human Risk assessment and exposure to toxic metals", pp. 455-459)

- Cd: EWI (Iranian-grown 2.05; imported 1.69 µg/kg BW per week) below PTWI 7 µg/kg BW per week — no health risk identified.
- Pb: significant Iranian-grown vs imported difference (P<0.001); both EWIs below PTWI 25 µg/kg BW per week.
- tAs: both EWIs below the Iranian standard and the WHO guideline. The paper notes that cooked rice may increase the heavy-metal content to 1.642 mg/kg, citing prior literature (no constituent-study primary source).
- Cr: significant Iranian-grown vs imported difference; both EWIs below PTWI 23.3 µg/kg BW per week.
- Ni: both EWIs (Iranian 2.82; imported 9.75 µg/kg BW per week) below PTWI 35 µg/kg BW per week.
- The authors conclude: "the rice types consumed in Iran have no health hazard for consumers."

## Methods (brief)

**Study design.** Systematic review and re-analysis of primary studies reporting heavy-metal concentrations in Iranian-grown or imported rice sold in Iran, with re-aggregated weighted means by metal and rice category and an EWI/PTWI comparison.

**Search strategy.** Internal (Persian) databases SID (sid.ir), Magiran (Magiran.com), IranDoc (irandoc.ac.ir), and Iran Medex (iranmedex.com); international databases Google Scholar, PubMed, Web of Science, and ScienceDirect. Search terms "heavy metals", "rice", "Iran" (and Persian equivalents) in title, abstract, and keywords. Search window: publications 2000-2017.

**Inclusion screening.** Title screen excluded 89/130 for irrelevance; abstract/full-text screen excluded 20 theses and conference abstracts and 11 for insufficient sample size or no full-text access. Final n=10 studies retained for analysis.

**Aggregation.** Per metal, per rice category (Iranian-grown vs imported), the paper computes a pooled mean and standard deviation. The pooled-SD formula is not explicit in the text; the per-metal sample-size N is summed across constituent studies that measured that metal in that rice category. Pooled means agree with sample-weighted constituent means to two decimal places where checkable.

**Reporting basis.** The paper's EWI equation (Eq. 1) labels C as "mean heavy-metal content (mg/kg dry weight)"; the constituent studies' reporting bases are not explicit in the table. Downstream pooling should treat Table 3 values as dry-weight rice unless contradicted by a constituent study's original record.

**Risk-assessment parameters.** WC (weekly rice consumption) = 770 g/week per capita; BW (Iranian adult average) = 60 kg; EWI compared against FAO/WHO PTWI values (Cd 7, Pb 25, tAs 15, Cr 23.3, Zn 420, Ni 35, Cu 500 µg/kg BW per week; Co MTDI 700 µg/kg BW per week, no PTWI established).

**Speciation.** Total Pb, total Cd, total As, total Cr, total Zn, total Ni, total Cu, total Co only; no inorganic-As fractionation despite rice being the dominant dietary iAs pathway. No mercury panel.

**Instrumentation.** Not described — the paper is a literature aggregation; analytical methods are whatever the constituent studies used and are not reproduced here.

**Statistics.** Not explicit; P-values reported in Table 3 with "DF" column whose meaning is not defined in text (appears to be a between-group mean difference, not degrees of freedom).

## Implications

This source contributes a pooled Iran-market summary of heavy-metal concentrations in Iranian-grown vs imported rice over 2010-2016, plus an adult EWI/PTWI comparison. Its principal contributions to the wiki evidence pool:

- **Pooled rice Pb occurrence** (dry weight): Iranian-grown 0.196 mg/kg (N=295), imported 0.55 mg/kg (N=320). Imported rice is markedly higher; both pools include several constituent studies already separately ingested in the wiki (e.g., Naseri 2015 Shiraz). When pooling with other Iranian-rice Pb sources downstream, this source should not double-count with already-ingested constituents — its value is its pooled-mean summary, not its underlying primary data.
- **Pooled rice Cd occurrence** (dry weight): Iranian-grown 0.16 mg/kg (N=295), imported 0.13 mg/kg (N=160). Iranian-grown slightly higher than imported, with P<0.001 between groups.
- **Pooled rice tAs occurrence** (dry weight): Iranian-grown 0.046 mg/kg (N=7), imported 0.057 mg/kg (N=44). The tAs N is small and the speciation is total As, not iAs — the value should not be combined with iAs-speciated rice survey data without speciation correction.
- **Pooled rice Cr occurrence** (total Cr, dry weight): Iranian-grown 0.29 mg/kg (N=45), imported 0.61 mg/kg (N=195). Significant difference (P<0.001). Speciation is total Cr, not Cr-VI.
- **Pooled rice Ni occurrence** (dry weight): Iranian-grown 0.22 mg/kg (N=195), imported 0.76 mg/kg (N=15). Imported rice is markedly higher but the imported-rice Ni N is only 15 samples from a single constituent study (Shiraz-2015 [5]), limiting confidence.
- **Pooled rice Zn, Cu, Co occurrence** (dry weight): non-HMTc analytes, retained as context. Iranian-grown rice has much higher Zn and Cu pools than imported (26.13 vs 3.46 mg/kg Zn; 16 vs 2.08 mg/kg Cu), but each pool reflects only 1-2 constituent studies and the large Iranian-vs-imported gap likely reflects which studies measured these elements (Lorestan-2010 and Tehran-2015 for Iranian-grown Zn/Cu; All-2016 for imported), not a true ecological difference.
- **Adult exposure parameter set**: Iranian adult per-capita rice consumption of 770 g/week (~110 g/day, ~40 kg/year) at 60 kg body weight. The 770 g/week figure is not sourced in the paper; comparable but lower than the 322 g/day rice figure in Heshmati et al. 2020 (which uses ISIRI 2010 No. 12968 = 322 g/day = 2254 g/week, ~3x higher), suggesting Jafari et al. used a different consumption reference or a different basis (e.g., dry rice as sold vs cooked rice). Downstream synthesis should not adopt the 770 g/week figure as the canonical Iranian rice consumption value without resolving this discrepancy.
- **EWI/PTWI comparison**: all 7 EWI values (Cd, Pb, tAs, Cr, Zn, Ni, Cu) for both rice categories are below their respective PTWIs at the 770 g/week / 60 kg parameterisation. The paper concludes no health hazard; this conclusion is contingent on the 770 g/week consumption figure and the dry-weight pooling basis, both of which are uncertain.

This is a B-tier source: peer-reviewed in Data in Brief (CC BY 4.0 open access), but a literature aggregation rather than original primary measurements, with documented paper-internal labelling inconsistencies (constituent-study labels in Tables 1-2 partly mismatched with the reference list), an undefined "DF" column in Table 3, an unsourced 770 g/week consumption figure, and ambiguous wet-vs-dry-weight reporting basis. Useful as a single-row summary of pre-2017 Iranian rice surveillance state for pooling with other Iranian and regional rice meta-analyses (e.g., Huang et al. 2022 China Pb-Cd-rice meta), but its underlying constituent studies should be tracked separately to avoid double-counting in downstream synthesis.

## Related evidence

- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/zinc]]
- [[metals/copper]]
- [[metals/cobalt]]
- [[ingredients/rice]]
- [[products/rice-bulk-grain]]
- [[regulations/jecfa-cadmium-ptmi]]
- [[regulations/jecfa-lead-ptwi-withdrawn]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [c3909aad72](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad72) | 2026-06-02 | major | 1 section added |
<!-- END: hmi-page-history -->
