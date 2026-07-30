---
type: source
raw_handle: MFK_sharafi2019
cite_key: sharafi2019-iran-tehran-rice-brands-metals
title: "Human health risk assessment for some toxic metals in widely consumed rice brands (domestic and imported) in Tehran, Iran: Uncertainty and sensitivity analysis"
authors: ["Kiomars Sharafi", "Ramin Nabizadeh Nodehi", "Masud Yunesian", "Amir Hossein Mahvi", "Meghdad Pirsaheb", "Shahrokh Nazmara"]
year: 2019
publication: "Food Chemistry"
doi: "10.1016/j.foodchem.2018.10.090"
access_url: "https://doi.org/10.1016/j.foodchem.2018.10.090"
source_type: peer-reviewed
evidence_tier: B
license: "publisher copyright (Elsevier)"
raw_path: "raw/Manual Fetch Kimi /June 1/sharafi2019.pdf"
raw_sha256: "d3e416e98535a6256216b2774d1498847d218ea29a0b84c51f803c5a056db912"
metals: [tAs, Cd, Pb]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain]
jurisdictions: [IR, IN, PK]
near_duplicates: []
sample_n: 90
sample_population: "30 rice brands (10 Iranian-produced, 10 Indian-imported, 10 Pakistani-imported) drawn from 250 packed rice samples collected from households in 22 districts of Tehran, Iran. Households were selected by stratified random sampling proportional to district population; addresses were drawn from telephone-number lists. After collection the 250 packs were grouped by brand and the 10 most-frequently-consumed brands from each producer country were retained for analysis. Each of the 30 retained brands was analysed in triplicate by ICP-OES, yielding 90 measurements per metal."
sampling_locations: [Tehran, Iran]
sampling_year_range: "not stated (publication 2018 accepted; sampling period not reported in the methods)"
updated: 2026-06-01
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Sharafi et al. 2019 — As, Cd, Pb in 30 widely consumed Iranian, Indian and Pakistani rice brands on the Tehran household market

This Tehran household-survey paper reports total concentrations of arsenic (HGAAS-equivalent via ICP-OES, treated as total arsenic absent any inorganic-species separation step), cadmium and lead in 30 commercial rice brands — 10 Iranian-produced ("IR"), 10 Indian-imported ("IN") and 10 Pakistani-imported ("PAK") — selected as the most-frequently-consumed brands in each producer-country category across 250 household-purchased packs collected from 22 districts of Tehran. Mean concentrations in IN-origin rice were significantly higher than in IR- and PAK-origin rice for all three metals (one-way ANOVA p<0.05); IR and PAK origins did not differ significantly. Brand-level exceedance pattern: all 10 IR brand-means met both the Iranian national (ISIRI 12968) and FAO/WHO cereal ceilings for all three metals; the 10 PAK brand-means exceeded the Iranian ceilings in 2 brands for Pb and 4 brands for Cd (As compliant) but all 10 PAK brand-means complied with the FAO/WHO ceilings; the 10 IN brand-means exceeded the Iranian ceilings in 10 of 10 brands for Pb, 8 of 10 for Cd, and 1 of 10 for As, and exceeded the FAO/WHO ceilings in 10 of 10 brands for Pb, 3 of 10 for Cd, and 1 of 10 for As. The probabilistic non-carcinogenic risk (TTHQ from sum of target hazard quotients across As, Pb, Cd weighted by per-country consumption share) exceeded 1 only for IN rice (mean TTHQ > 1; 10th-percentile TTHQ 1.05, 90th-percentile TTHQ 1.88); arsenic dominated the TTHQ in every rice type. The probabilistic As-induced incremental lifetime cancer risk (ILCR) exceeded the 10⁻⁴ acceptable ceiling in all three rice types (IR 2.54×10⁻⁴, PAK 2.30×10⁻⁴, IN 3.81×10⁻⁴). The paper concludes that the order of overall quality (lowest health-risk first) is IR ≈ PAK > IN and that intervention priority should target arsenic in IN-origin rice cultivation.

## Key numbers

Mean ± SD per-country concentrations across the 30-brand panel (Discussion §4.1.1, p. 14; values in mg/kg on dry-weight basis):

| Origin | n brands | tAs (mg/kg dw) | Cd (mg/kg dw) | Pb (mg/kg dw) |
|---|---:|---:|---:|---:|
| Iran (IR) | 10 | 0.067 ± 0.044 | 0.043 ± 0.031 | 0.068 ± 0.040 |
| Pakistan (PAK) | 10 | 0.063 ± 0.042 | 0.039 ± 0.036 | 0.124 ± 0.063 |
| India (IN) | 10 | 0.108 ± 0.088 | 0.082 ± 0.070 | 0.770 ± 0.529 |

Reference values cited by the paper for direct mean-vs-ceiling comparison (paper §2.3, p. 6; the paper labels these "acceptable daily intake … mg/kg/d" but the comparison structure throughout §3 and §4 makes clear they are concentration ceilings in mg/kg of rice, not body-weight-normalised intake ceilings — see Verification notes):

| Authority | tAs (mg/kg) | Cd (mg/kg) | Pb (mg/kg) |
|---|---:|---:|---:|
| ISIRI 12968 (Iranian national standard, cereals) | 0.15 | 0.06 | 0.15 |
| FAO/WHO (cereals) | 0.15 | 0.10 | 0.20 |

Brand-level exceedance counts vs ISIRI 12968 (Results §3, pp. 11-12 and Fig. 1):

| Origin | n brands | tAs > 0.15 mg/kg | Cd > 0.06 mg/kg | Pb > 0.15 mg/kg |
|---|---:|---:|---:|---:|
| Iran (IR) | 10 | 0 (0%) | 0 (0%) | 0 (0%) |
| Pakistan (PAK) | 10 | 0 (0%) | 4 (40%) | 2 (20%) |
| India (IN) | 10 | 1 (10%) | 8 (80%) | 10 (100%) |

Brand-level exceedance counts vs FAO/WHO (Results §3, p. 12 and Fig. 1):

| Origin | n brands | tAs > 0.15 mg/kg | Cd > 0.10 mg/kg | Pb > 0.20 mg/kg |
|---|---:|---:|---:|---:|
| Iran (IR) | 10 | 0 (0%) | 0 (0%) | 0 (0%) |
| Pakistan (PAK) | 10 | 0 (0%) | 0 (0%) | 0 (0%) |
| India (IN) | 10 | 1 (10%) | 3 (30%) | 10 (100%) |

Consumption-frequency-weighted share of per-country rice types in the Tehran household sample (Results §3, p. 10): IR 70.6%, IN 18.0%, PAK 11.4% (computed from the 250-pack sampling distribution after splitting two-type households 50/50: 162 single-IR (64.8%), 32 single-IN (12.8%), 27 single-PAK (10.8%), 26 IR-IN mixed (10.4%), 3 IR-PAK mixed (1.2%)).

Median exposure risk index (ERI, dimensionless, defined as W_CF × W_MC where W_CF is the consumption-frequency rank weight and W_MC is the metal-concentration rank weight; paper Equation 1) across all 30 brands (Results §3, p. 12):

| Metal | Median ERI across 30 brands |
|---|---:|
| tAs | 14.5 |
| Cd | 10.5 |
| Pb | 24.5 |

Per-country mean target hazard quotient by metal (Discussion §4.2, p. 20; point estimates weighted by per-country consumption share in the Tehran population). The TTHQ-sum column is computed in the wiki as THQ_As + THQ_Pb + THQ_Cd per Equation 4; the paper publishes only the THQ_As, THQ_Pb, THQ_Cd row values on p. 20 and states qualitatively that point-estimate TTHQ > 1 "only in IN rice."

| Origin | THQ_As | THQ_Pb | THQ_Cd | TTHQ (wiki-computed sum) |
|---|---:|---:|---:|---:|
| Iran (IR) | 0.565 | 0.034 | 0.100 | 0.699 |
| Pakistan (PAK) | 0.510 | 0.059 | 0.094 | 0.663 |
| India (IN) | 0.847 | 0.097 | 0.197 | 1.141 |

Probabilistic (Monte-Carlo, 10 000 iterations, Oracle Crystal Ball v11.1.2.4) percentiles of TTHQ by per-country rice type (Results §3, p. 13; non-carcinogenic risk ceiling = 1.0):

| Origin | P10 of TTHQ | P50 of TTHQ | P90 of TTHQ |
|---|---:|---:|---:|
| Iran (IR) | 0.47 | not stated | 0.86 |
| Pakistan (PAK) | 0.41 | not stated | 0.76 |
| India (IN) | 1.05 | not stated | 1.88 |

Point-estimate incremental lifetime cancer risk (ILCR) from arsenic by per-country rice type (Discussion §4.2, p. 22; carcinogenic-risk ceiling = 10⁻⁴, USEPA acceptable range 10⁻⁶ to 10⁻⁴):

| Origin | ILCR (As) | Ratio to 10⁻⁴ ceiling |
|---|---:|---:|
| Iran (IR) | 2.54 × 10⁻⁴ | 2.54 |
| Pakistan (PAK) | 2.30 × 10⁻⁴ | 2.30 |
| India (IN) | 3.81 × 10⁻⁴ | 3.81 |

Exposure assessment parameters used in EDI / EWI / EMI / THQ / ILCR computation (paper §2.5, pp. 7-9):

| Parameter | Value | Source |
|---|---:|---|
| Exposure frequency EF | 365 days/year | paper assumption |
| Exposure duration ED | 54 years | paper assumption |
| Food ingestion rate FI (rice) | 165 g/day (158-178 g/day triangular) | ISIRI 12968 (2010) |
| Body weight BW (rice consumers, 16-70 y) | 77.45 ± 13.6 kg (lognormal) | Nikooyeh et al. 2016 |
| Averaging time AT (non-carcinogenic) | 54 years × 365 days | paper |
| Averaging time AT (carcinogenic) | 70 years × 365 days | Saha & Zaman 2013 |
| Oral reference dose RfD, Pb | 5 × 10⁻³ mg/kg-d | USEPA IRIS 2017 |
| Oral reference dose RfD, tAs | 3 × 10⁻⁴ mg/kg-d | USEPA IRIS 2017 |
| Oral reference dose RfD, Cd | 1 × 10⁻³ mg/kg-d | USEPA IRIS 2017 |
| Cancer slope factor CSF, As (oral) | 1.5 (mg/kg-d)⁻¹ | USEPA IRIS 2017 / Saha & Zaman 2013 |
| Provisional tolerable daily intake PTDI, As | 3 µg/kg bw/day | FAO/WHO 2011 |
| Provisional tolerable weekly intake PTWI, Pb | 25 µg/kg bw/week | FAO/WHO |
| Provisional tolerable monthly intake PTMI, Cd | 25 µg/kg bw/month | FAO/WHO 2013 |

Sensitivity analysis (paper §4.2, pp. 20-21; rank-ordered contributions to TTHQ uncertainty): metal concentration (MC) > body weight (BW) > food ingestion rate (FI); among metals, As contributes more to TTHQ than Pb or Cd in all three per-country rice types.

EDI / EWI / EMI provisional-tolerance compliance (Results §3, p. 13; Fig. S3): the estimated As-EDI, Pb-EWI, and Cd-EMI for all 30 brands fell below the respective PTDI / PTWI / PTMI ceilings under the population body-weight and consumption-frequency assumptions. The highest-EDI brands within each origin (one IR brand, one PAK brand, one IN brand, labelled A-IR, E-PAK, A-IN in the paper) used 2.13%, 73.03%, and 46.1% of the As PTDI, respectively; the paper notes the Pb and Cd shares followed similar relative patterns.

Method validation parameters (paper §2.2, p. 6):

| Metal | LOD (ppb) |
|---|---:|
| tAs | 0.179 |
| Cd | 0.049 |
| Pb | 2.166 |

The paper does not publish recovery percentages, certified-reference-material results, or measurement-uncertainty values; only the LODs above are reported.

## Methods (brief)

Sample collection. 250 packed rice samples were collected from 250 households selected by stratified random sampling across the 22 districts of Tehran in proportion to district population (Ren et al. 2018 sampling reference; Fig. S1 and Table S1 in the paper's supplementary materials). Households were drawn from telephone-number lists; exact addresses were determined and refereed to the selected addresses, after which rice samples were obtained from families. The 250 packs were grouped by brand and the 10 most-frequently-purchased brands from each of the three producer countries (Iran, India, Pakistan) were retained for further analysis, yielding 30 retained brands (labelled A-J for each country in the paper's results).

Sample preparation. All equipment was soaked in 15% nitric acid for 24 h and rinsed three times in distilled water. For acid digestion, 2 g of pre-prepared rice sample was weighed and placed in 30 mL HNO₃ (70%) + 10 mL HClO₄ (70%) + 5 mL H₂SO₄ per ASTM 1999 ("Standard Guide for Preparation of Biological Samples for Inorganic Chemical Analysis"). The mixture was shaken for 30 min at laboratory temperature, then heated to boiling until the sample evaporated to a clear 3 mL extract. The extract was filtered through Whatman filter paper (41 microns) into 25 mL balloons, and the final volume was adjusted to 25 mL with deionised water for storage in polyethylene bottles. All chemicals were from Merck (Darmstadt, Germany).

Instrumentation. As, Cd and Pb in the digested extracts were measured by simultaneous inductively coupled plasma-optical emission spectrometry (ICP-OES) on a Spectro Arcos instrument (SPECTRO Inc, Germany) equipped with a V-groove nebuliser, a Scott spray chamber made from quartz glass, and a charge-coupled-device (CCD) detector. Experimental conditions appear in supplementary Table S2 (not reproduced in the main text). LODs were 0.179 ppb (As), 0.049 ppb (Cd), and 2.166 ppb (Pb).

Speciation. Total As, total Cd, and total Pb. No As-species separation step (no iAs / DMA / MMA distinction); the wiki page accordingly uses `tAs` (total arsenic) rather than `iAs` per CLAUDE.md Part 14. No mercury panel, no Cr or Cr-VI panel, no Ni panel.

Statistical analysis. SPSS v21 (SPSS Inc., Chicago, IL, USA). One-way ANOVA to compare per-country mean concentrations; one-sample t-test to compare per-country means to national and FAO/WHO standards. Significance threshold p < 0.05. Post-hoc analysis identified significant pairwise differences between IN-vs-IR and IN-vs-PAK but no significant difference between IR-vs-PAK in any of the three metals (Table S4).

Risk assessment. Non-carcinogenic risk via the Target Hazard Quotient method (Chien et al. 2002): EDI = (EF × ED × FI × MC) / (BW × AT); THQ = EDI / RfD; TTHQ = THQ_As + THQ_Pb + THQ_Cd. Acceptable non-carcinogenic risk threshold = 1.0. Carcinogenic risk via Incremental Lifetime Cancer Risk (Sultana et al. 2017): ILCR = EDI × CSF, with the USEPA-acceptable CR range 10⁻⁶ to 10⁻⁴. Both THQ and ILCR were computed under deterministic point estimation and under probabilistic Monte-Carlo simulation (10 000 iterations, Oracle Crystal Ball v11.1.2.4). The Monte-Carlo distributions used: BW lognormal (77.45 ± 13.6 kg); FI triangular (165, 158-178 g/day); each metal's per-country MC distribution lognormal (Table 1 of the paper). Per-country and per-brand consumption shares were carried through the simulation. Sensitivity analysis used rank correlation between simulated TTHQ and each input variable.

Exposure assessment vs provisional tolerable intakes. EDI (mg/kg bw/day) computed per Equation 2; EWI (mg/kg bw/week) and EMI (mg/kg bw/month) computed per Equations 6 and 7 (EWI = C × DC_rice × 7 / BW; EMI = C × DC_rice × 30 / BW) with DC_rice = 165 g/day and BW = 69 kg (the EWI/EMI sub-section uses a 69 kg BW for the 15-65 y adult Iranian reference, distinct from the 77.45 kg rice-consumer BW used for THQ/ILCR — see Verification notes). PTDI (As) = 3 µg/kg bw/day per FAO/WHO 2011; PTWI (Pb) = 25 µg/kg bw/week per FAO/WHO 2011; PTMI (Cd) = 25 µg/kg bw/month per FAO/WHO 2013.

Ranking. Exposure Risk Index ERI = W_CF × W_MC (Equation 1) ranked the 30 brands jointly on consumption frequency and per-metal concentration, with brand-median-as-cut-point used to flag brands above the panel median ERI as "unsafe" within each metal panel.

## Implications

This source contributes Iranian household-purchased retail-market occurrence data for total As, total Cd, and total Pb in 30 commercial bulk polished rice brands (10 Iranian, 10 Indian, 10 Pakistani origin) on the Tehran household market, plus a probabilistic THQ / ILCR risk assessment under Iranian-population body-weight and consumption-share assumptions. Principal contributions to the wiki evidence pool:

- A within-Iranian-market origin contrast: IN-origin rice carries a Pb panel mean of 0.770 ± 0.529 mg/kg (the paper publishes only this panel-level mean and SD; individual brand values are referenced via Fig. 1 without numeric labels), a Cd panel mean of 0.082 ± 0.070 mg/kg, and a tAs panel mean of 0.108 ± 0.088 mg/kg — significantly higher (one-way ANOVA p<0.05, Table S4) than IR-origin (Pb 0.068 ± 0.040, Cd 0.043 ± 0.031, tAs 0.067 ± 0.044 mg/kg) and PAK-origin (Pb 0.124 ± 0.063, Cd 0.039 ± 0.036, tAs 0.063 ± 0.042 mg/kg) rice in the same retail market. The IR-vs-PAK contrast was not statistically significant for any of the three metals.
- A 100%-Pb-exceedance signal in Indian-origin imported rice: all 10 IN brand-means exceeded both the Iranian (0.15 mg/kg) and FAO/WHO (0.20 mg/kg) cereal Pb ceilings. The IN Pb panel mean (0.770 mg/kg) is roughly 5× the FAO/WHO ceiling and 11× the IR-origin Pb panel mean (0.068 mg/kg). This pattern is directionally consistent with the Indian-origin Pb pattern reported on the Torbat-Heidarieh market by [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] (Indian-origin Pb group mean ≈ 1.752 mg/kg across 3 types in 2015) and with the Pb-in-Iranian-cereals band reported by [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]] (Kermanshah-market rice Pb mean 1.35 mg/kg, 2014), both of which Sharafi 2019 cites in its reference list (Mohamadi Sani & Amiri Qandashtani 2017 = roya2016; Pirsaheb et al. 2016 = pirsaheb2015 print-issue year, online 2015).
- A Cd-in-Indian-rice signal: 8 of 10 IN brand-means exceeded the Iranian 0.06 mg/kg Cd cereal ceiling (panel mean 0.082 ± 0.070 mg/kg); 3 of 10 also exceeded the FAO/WHO 0.10 mg/kg ceiling. IR and PAK brand-means were below both ceilings for Cd.
- A worked probabilistic non-carcinogenic risk assessment showing TTHQ > 1 only for IN-origin rice (P10 1.05, P50 not tabulated, P90 1.88) under Iranian-adult body-weight and 165 g/day per-capita-consumption assumptions, with arsenic dominating the TTHQ in every origin (THQ_As of 0.565, 0.510, 0.847 for IR, PAK, IN respectively, against THQ_Pb 0.034-0.097 and THQ_Cd 0.094-0.197). The paper's main public-health point: As contamination is the dominant driver of non-carcinogenic risk in Iranian-market rice consumption, even though Pb concentrations in IN-origin rice exceed regulatory ceilings far more dramatically than As does.
- A worked probabilistic arsenic carcinogenic-risk assessment showing point-estimate ILCR > 10⁻⁴ for all three origins (IR 2.54×10⁻⁴, PAK 2.30×10⁻⁴, IN 3.81×10⁻⁴) and uncertainty-band P10 of ILCR also above 10⁻⁴, supporting the conclusion that As-induced cancer risk is "unacceptable" per the USEPA framework across the full retail-market panel. The paper applies a CSF of 1.5 (mg/kg-d)⁻¹ to total As measured concentrations; this implicitly treats all measured As as inorganic-equivalent (see Verification notes — the inorganic-fraction assumption is not made explicit and is a significant uncertainty source for the ILCR estimates).
- A sensitivity-analysis ranking of TTHQ uncertainty drivers (metal concentration > body weight > food ingestion rate, with arsenic dominating the metal-concentration contribution) that supports the paper's intervention-priority recommendation: focus on reducing As contamination in IN-origin rice cultivation, and shift consumption share toward IR and PAK origins.
- A medium-panel (n = 30 brand-means, 90 measurements), single-city, single-year (sampling-year not stated but bounded by the 2018 acceptance date), single-cohort (adult 15-70 y, rice-consumer 16-70 y BW reference 77.45 kg) sampling footprint with no As-species separation, no Hg panel, no Cr / Cr-VI panel, no Ni panel, no recovery / CRM / measurement-uncertainty validation data published, and the paper-internal inconsistencies catalogued in the Verification notes. The B-tier classification reflects these limitations; the source should pool with other Iranian-market rice work for occurrence-distribution purposes (e.g., the per-country mean concentration tables sit naturally in any Iranian rice-import-market dataset built from this paper, [[sources/roya2016-iran-torbat-heidarieh-rice-metals]], and [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]]).

## Wiki pages this source may touch

- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[ingredients/rice]]
- [[products/rice-bulk-grain]]

## Verification notes

- **Identity checks (three-way) clean.** DOI grep (`10.1016/j.foodchem.2018.10.090`) returned no existing wiki/sources page; raw-handle grep (`MFK_sharafi2019`) returned no existing page; cite-key grep (`sharafi2019`) returned no existing page. The page is a fresh NEW-path ingest. No first-author surname collision: three pre-existing pages mention "Sharafi" in author lists ([[sources/roya2016-iran-torbat-heidarieh-rice-metals]] via "Sharafi K" co-authorship, [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]] via "Sharafi K" co-authorship, [[sources/mansouri2023-smoking-trace-elements-human-milk]] — unrelated), all of which are co-authorship references, none of which is this paper.
- **Frontmatter discipline.** All ingredient, product, metal, matrix, and jurisdiction slugs verified against the 2026-05-18 taxonomy snapshot (`docs/gpt-collaboration/taxonomy-snapshot.md`). Metals use the Part 14 abbreviation vocabulary (`tAs`, `Cd`, `Pb`). Jurisdictions: `IR` (Iran) is the sampling-and-consumption jurisdiction; `IN` (India) and `PK` (Pakistan) are the origin countries of two of the three rice categories analysed. The matrix slug `rice-grain` matches the precedent set by [[sources/roya2016-iran-torbat-heidarieh-rice-metals]].
- **Speciation discipline (Part 14, locked).** ICP-OES on acid-digested rice measures total elemental content; no inorganic-arsenic species separation step is described in §2.2. The `metals:` field uses `tAs` (total arsenic), not `iAs`. **A consequential downstream caveat:** the paper's ILCR calculation applies the USEPA-IRIS inorganic-arsenic CSF (1.5 (mg/kg-d)⁻¹) to total As concentrations without any iAs-fraction adjustment. Since the inorganic fraction in rice is typically 50-80% of total As, the published ILCRs (2.30-3.81 × 10⁻⁴) are upper bounds; the true iAs-based ILCRs are likely 20-50% lower. The paper does not make this assumption explicit. The wiki page reports the published ILCRs verbatim but flags this caveat. No mercury panel, no Cr or Cr-VI panel, no Ni panel.
- **Brand firewall (Part 12, strict reading locked 2026-05-17).** The paper labels its 30 brands as A-IR through J-IR, A-IN through J-IN, and A-PAK through J-PAK (i.e., letter codes by producer country) and does not publish the underlying commercial brand names. The wiki page accordingly reports per-country panel statistics (n=10 in each origin, panel mean ± SD, panel exceedance counts) without per-brand letter-code attribution — the letter codes are a paper-internal indexing artefact, not real brand identifiers, and reproducing them would mislead a downstream reader into thinking commercially-meaningful per-brand contamination data are available. The paper's brand-A-vs-brand-J ranking discussion (e.g., A-IR carrying 38% of the IR-origin consumption frequency vs J-IR at 2.8%) is summarised as "the highest-frequency brand within each origin accounts for 38% (IR), 15.6% (IN), and 10.5% (PAK) of that origin's per-capita consumption" without letter-code attribution. Scientific-method vendor and material identifiers (Spectro Arcos / SPECTRO Inc instrument, Merck reagents, Whatman filter paper, Oracle Crystal Ball v11.1.2.4 software, SPSS v21) are retained per Part 12 Exception 2.
- **Wiki/HMTc firewall (Part 2).** No threshold proposals, no consumer-audience advisories. Cross-paper comparisons in the Implications section are limited to descriptive band-placement against [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] (same Iranian-import-market context, partly overlapping author group — Sharafi K is corresponding/lead author on the present paper and a co-author on neither the Roya 2016 nor Pirsaheb 2015 papers — and a non-overlapping retail-city panel) and [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]] (Iranian cereal-market context, partly overlapping author group — Sharafi K is a co-author on Pirsaheb 2015). Full cross-paper synthesis (e.g., updating the [[ingredients/rice]] `contamination_profile` block) is the Part 9 workflow's job and is not done in this ingest pass.
- **Reference-value attribution and unit-label anomaly.** Paper §2.3 (p. 6) reads "The acceptable daily intake of Pb, As, and Cd were set at 0.15, 0.15 and 0.06 mg/kg/d, respectively, by Iran's national standard organization. These levels are 0.2, 0.15 and 0.1 mg/kg/d according to WHO/FAO guideline." Read literally these would be body-weight-normalised daily-intake ceilings, but the values match the ISIRI 12968 and FAO/WHO Codex cereal-concentration ceilings (mg/kg of food) used by [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] and [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]] for the same regulatory citations, and the comparison structure in §3 (comparing per-brand mean concentrations in mg/kg against these values) is only coherent if these are concentration ceilings in mg/kg. The "/d" unit suffix is a paper-internal copy-editing error; the values are concentration ceilings in mg/kg of rice. The wiki page treats them as concentration ceilings (mg/kg) and explicitly flags the paper's mislabelling.
- **Instrument-identification anomaly (abstract vs methods).** The abstract (p. 2) states the 90 samples were "analysed using ICP-MS." The methods §2.2 (p. 6) describes "simultaneous inductively coupled plasma-optical emission spectrometry (ICP-OES) model Spectro Arcos (SPECTRO Inc, Germany)." The two instrument types are distinct (ICP-MS = inductively coupled plasma mass spectrometry; ICP-OES = inductively coupled plasma optical emission spectrometry) and would have different LODs and detection chemistries. The Spectro Arcos model line is an ICP-OES instrument, not ICP-MS; the LODs published in §2.2 (0.179 ppb As, 0.049 ppb Cd, 2.166 ppb Pb) are consistent with high-end ICP-OES performance. The wiki page treats §2.2 as authoritative (ICP-OES) and flags the abstract as the discrepant location.
- **Body-weight inconsistency (THQ section vs EWI/EMI section).** Paper §2.5 (p. 7) uses BW = 77.45 ± 13.6 kg for the THQ / ILCR / TTHQ computation, attributed to Nikooyeh et al. 2016 as "the mean body weight of rice consumers in Iran, aged 16-70 years." Paper §2.5.3 (p. 9) uses BW = 69 kg for the EWI / EMI computation, attributed to "average body weight (kg) of the adult Iranian population aged 15-65 years." These are different reference populations (rice-consumers 16-70 y vs general adult 15-65 y) so the differing BW values are defensible, but no rationale is given in the paper text and a downstream reader could mistake this for an internal inconsistency. The wiki Key numbers table preserves both BW values with their respective sub-section attributions.
- **Discussion §4.2 reframing-example values (page 20) do not match Results §3 / Discussion §4.1.1 values.** Discussion §4.2 (p. 20) reads in part "the average total As in IN rice (0.064 ± 0.078) was lower than the national standards and WHO/FAO guideline, while the average Pb concentration (0.442 ± 0.320) of this type of rice was higher than these standards." The 0.064 ± 0.078 mg/kg figure for IN-rice As does not match the IN-rice tAs panel mean of 0.108 ± 0.088 mg/kg reported in the Results section and Discussion §4.1.1 (p. 14); likewise 0.442 ± 0.320 mg/kg for IN-rice Pb does not match the IN-rice Pb panel mean of 0.770 ± 0.529 mg/kg. These page-20 figures appear to be a copy-editing error or possibly figures from an earlier draft / different sub-population (the surrounding paragraph is using IN rice as an illustrative example of the THQ-vs-ILCR-vs-standard-comparison methodological point, so the numbers may have been mis-pasted from a different table). The wiki Key numbers section reports the Results / Discussion §4.1.1 values (0.108 ± 0.088 for IN tAs; 0.770 ± 0.529 for IN Pb) as authoritative and flags the page-20 anomaly here without propagating it.
- **ILCR / ICLR notation inconsistency.** Paper §2.5.2 (p. 8) defines the carcinogenic risk metric as "Incremental Lifetime Cancer Risk (ILCR)" and uses ILCR throughout the methods. Discussion §4.2 (p. 20) uses "ICLR" (a letter transposition) in two places. The wiki page uses the methods-section definition ILCR throughout.
- **Sampling-year not stated.** The paper does not publish the calendar year of the household sampling; the acceptance date (18 October 2018) and the funding-grant reference (Tehran University of Medical Sciences thesis code 9221150003 — the "92" prefix is an Iranian-calendar year 1392 ≈ 2013-2014 reference; the National Science Foundation grant 96007011 references Iranian year 1396 ≈ 2017-2018) bound the sampling to roughly 2014-2018. The frontmatter `sampling_year_range` field accordingly says "not stated."
- **Data-integrity transcription notes.** All per-country mean ± SD values in the Key numbers tables transcribed from Discussion §4.1.1 (p. 14). Brand-level exceedance counts transcribed from Results §3 (pp. 11-12) and Fig. 1 (the figure is referenced in the text but not reproduced; the exceedance counts published in the prose match the per-country exceedance frequencies cited in Discussion §4.1.2 pp. 17-18 within rounding). THQ point estimates transcribed from Discussion §4.2 (p. 20). ILCR point estimates transcribed from Discussion §4.2 (p. 22). TTHQ percentile values transcribed from Results §3 (p. 13). Median ERI values transcribed from Results §3 (p. 12). Consumption-share percentages transcribed from Results §3 (p. 10) with the two-type-household 50/50 splitting rule from the same paragraph. Exposure-parameter values transcribed from paper §2.5 (pp. 7-9). No paper-internal contradictions beyond those flagged above were identified.
- **Basis.** Per the food-ingestion-rate equation and the ICP-OES sample-preparation procedure (acid digestion of 2 g of "pre-prepared sample" with no explicit drying step described in §2.2 but with the equation labelling "MC is the metal concentration in rice (mg/g dry. weight)") all concentration values in the paper are on a dry-weight basis. The mg/g unit label on the EDI equation is internally inconsistent with the mg/kg values published in Table 1 / Discussion §4.1.1 (a 0.108 mg/g As concentration would be 108 mg/kg, three orders of magnitude above any plausible rice-As value); this is a unit-label typographic error in the equation, not a value-magnitude problem in the results. The wiki Key numbers section labels all concentrations in mg/kg dry weight, consistent with the magnitude of the published values and the [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] / [[sources/pirsaheb2015-iran-kermanshah-cereals-metals]] precedents.
- **Audit-application notes (2026-06-01, Claude audit subagent, general-purpose, fresh context).** Subagent verdict PROMOTE. All five audit checks (numerical fidelity, slug vocabulary, speciation/methods, brand firewall, wiki/HMTc firewall) returned clean. Two ⚠️ framing concerns surfaced and were applied:
  - **Check 1 ⚠️ #1 applied.** Implications first bullet was originally drafted with a fabricated IN-rice Pb brand-range "0.230-1.78 mg/kg dw range" that did not appear in the paper text (only the panel mean 0.770 ± 0.529 mg/kg is published; individual brand values appear in Fig. 1 without numeric labels). The fabricated range was removed and the bullet now reports only the published panel mean and SD with an explicit note that individual brand values are not numerically published. This was a wiki-side hallucination caught by the subagent's read of the actual text.
  - **Check 1 ⚠️ #2 applied.** TTHQ-sum column in the per-country THQ table is wiki-computed from THQ_As + THQ_Pb + THQ_Cd per Equation 4; the paper's p. 20 publishes only the three component THQ values and states qualitatively that point-estimate TTHQ > 1 only for IN rice. The table caption and column header were updated to label the column "TTHQ (wiki-computed sum)" and the caption now explicitly states the row values are paper-published while the sum column is wiki-derived.
  - Audit Checks 2 (slug vocabulary), 3 (speciation and methods), 4 (brand firewall), and 5 (wiki/HMTc firewall) were clean per the subagent's report and required no changes.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
| [e59ea5857](https://github.com/paleofoundation/heavymetalindex/commit/e59ea5857) | 2026-06-01 | minor | Narrative text revised |
| [08b94a933](https://github.com/paleofoundation/heavymetalindex/commit/08b94a933) | 2026-06-01 | major | 3 sources added; 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
