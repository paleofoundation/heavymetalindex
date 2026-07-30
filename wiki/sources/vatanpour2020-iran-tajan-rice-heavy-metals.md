---
type: source
raw_handle: MFK_vatanpour2020
cite_key: vatanpour2020-iran-tajan-rice-heavy-metals
title: "The high levels of heavy metal accumulation in cultivated rice from the Tajan river basin: health and ecological risk assessment"
authors: ["Nahid Vatanpour", "Javad Feizy", "Hossein Hedayati Talouki", "Zarrin Es'haghi", "Laura Scesi", "Amir Mohammad Malvandi"]
year: 2020
publication: "Chemosphere"
doi: "10.1016/j.chemosphere.2019.125639"
access_url: "https://doi.org/10.1016/j.chemosphere.2019.125639"
source_type: peer-reviewed
evidence_tier: B
license: "publisher copyright (Elsevier)"
raw_path: "raw/Manual Fetch Kimi /June 1/vatanpour2020.pdf"
raw_sha256: "e7ee0df30b21f78b52126f2066888d5aeffb7e10171a20590a3b725aa3798aa3"
metals: [Pb, Cd, Cr, Zn, Fe, Cu]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain]
jurisdictions: [IR]
near_duplicates: []
sample_n: 33
sample_population: "33 cultivated rice samples (described by the paper as 'fresh rice plants containing grains', dry-ashed and acid-digested per AOAC), 33 paddy soil samples and 75 winter + 33 summer surface-water samples collected across the Tajan river basin in Mazandaran province, northern Iran. Eleven paddy locations (selected from 25 winter water-monitoring sites along the 140-km Tajan river course) supplied the paired soil and rice samples in the summer of 2018; each soil and rice sample was digested and measured in triplicate."
sampling_locations: [Tajan river basin, Mazandaran, Iran]
sampling_year_range: 2018
updated: 2026-06-01
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Vatanpour et al. 2020 — Pb, Cd, Cr, Zn, Fe and Cu accumulation in cultivated rice, paddy soil and irrigation water across the Tajan river basin, northern Iran

This Tajan-river-basin survey reports total concentrations of lead, cadmium, chromium, zinc, iron and copper in 33 cultivated rice samples drawn from 11 paddy locations along the 140-km Tajan river course (Mazandaran province, northern Iran) in the summer of 2018, alongside 33 paired paddy-soil samples and 75 winter + 33 summer surface-water samples. The paper computes soil-to-plant transfer factors (TF), USEPA target hazard quotients (THQ) and a summed hazard index (HI) for adult human consumption of the cultivated rice. The reported per-metal mean concentrations in rice (Pb 9.02 ± 0.2 mg/kg, Cd 0.7 mg/kg per Tables 2–3, Cr 7.7 ± 0.39 mg/kg, Zn 10.7 ± 0.67 mg/kg, Cu 10.4 ± 0.32 mg/kg, Fe 2526 ± 77.13 mg/kg) and the resulting THQ values (Pb 13.80, Fe 7.73, Cr 5.51 per the abstract / 0.08 per Table 3 — the Table 3 row transposition is flagged in Verification notes, Cd 1.50, Zn 5.51 per Table 3 / not stated in the abstract, Cu 0.56) push the summed Hazard Index for adult rice consumers in the basin to 29.18 — i.e., roughly 29× the USEPA non-carcinogenic threshold. TF ranges for the two most toxicologically relevant elements (Pb 4.89–23.65, Cd 3.67–12.42) sit one to two orders of magnitude above the WHO permissible-crop ceiling. The basin's Pb/Zn mineral processing operations, road dust along the highway-adjacent paddies, and phosphate-fertiliser use are advanced by the authors as the likely anthropogenic sources, supported by a principal-components analysis that loads Cr, Fe, Cd and Pb on PC1 (79.7% of variance in rice) and Zn + Cu on PC2 (14.4%).

## Key numbers

Rice — per-metal panel mean ± SD across the 11-location, summer-2018 panel (Results §3.1.1, p. 8; Table 2, p. 17; values in mg/kg dry weight). The Cd row uses the Table 2 / Table 3 mean of 0.7 mg/kg rather than the contradicting body-text figure of 0.11 ± 0.02 mg/kg (the body-text value matches the per-paddy mean soil Cd, not rice Cd — see Verification notes for the swap analysis):

| Metal | Panel mean ± SD (mg/kg dw) | Per-location range (mg/kg dw) |
|---|---:|---|
| Pb | 9.02 ± 0.20 | 2.66 – 18.18 |
| Cd | 0.7 (panel mean from Table 2; body text reports 0.11 ± 0.02, contradicting Table 2/Table 3; see Verification notes) | 0.38 – 1.48 |
| Cr | 7.7 ± 0.39 | 2.09 – 20.24 |
| Zn | 10.7 ± 0.67 | 1.62 – 17.42 |
| Cu | 10.4 ± 0.32 | 2.35 – 23.18 |
| Fe | 2526 ± 77.13 | 522 – 8065 |

Paddy soil — per-metal panel mean across the 11 paired soil samples (Table 2, p. 17; values in mg/kg dry weight; body text "highest for ... Cd (0.7 ± 0.003 mg/kg)" is inconsistent with Table 2 data and is treated here as a body-text transcription error — see Verification notes):

| Metal | Soil mean (mg/kg dw, computed from Table 2) | Per-location range (mg/kg dw) |
|---|---:|---|
| Pb | 0.591 | 0.501 – 0.778 |
| Cd | 0.108 | 0.089 – 0.129 |
| Cr | 0.180 | 0.084 – 0.424 |
| Zn | 52.32 | 35.3 – 68.7 |
| Cu | 25.42 | 16.7 – 30.4 |
| Fe | 71.89 | 14.3 – 215.4 (note: one outlier SS12 = 215.4; without SS12 the range is 14.3–182.3) |

Surface water — per-metal summer-mean and per-sample range (Table 1, p. 16; mg/kg, which for water of unit density is equivalent to mg/L; the body text "highest recorded concentrations" appear to refer to the summer-mean values rather than per-sample maxima, see Verification notes):

| Metal | Summer mean (mg/L) | Per-sample range across summer + winter (mg/L) |
|---|---:|---|
| Pb | 0.631 ± 0.029 (body text)| 0.022 – 1.386 |
| Cd | 0.035 (computed) ≈ 0.03 ± 0.001 (body text) | 0.000 – 0.082 |
| Cr | 0.180 (computed) ≈ 0.2 ± 0.011 (body text) | 0.030 – 1.092 |
| Zn | 0.493 (computed) ≈ 0.5 ± 0.068 (body text) | 0.040 – 2.364 |
| Cu | 0.243 (computed) ≈ 0.24 ± 0.034 (body text) | 0.040 – 1.146 |
| Fe | 71.89 (computed) ≈ 71.9 ± 3.35 (body text) | 0.865 – 215.4 |

Soil-to-plant transfer factors (TF = MC_plant / MC_soil; Results §3.1.3, p. 11; abstract; trend Pb > Cd > Cu > Zn > Fe > Cr):

| Metal | TF range | Notes |
|---|---|---|
| Pb | 4.89 – 23.65 | Far exceeds the WHO permissible-limit threshold for crops (abstract); ranked highest among the six metals |
| Cd | 3.67 – 12.42 | Also exceeds the WHO permissible-limit threshold; ranked second |
| Cu | 0.03 – 0.53 | Below 1; typical for an essential metal |
| Zn | 0.03 – 0.45 | Below 1; typical for an essential metal |
| Fe | 0.03 – 0.42 | Below 1 |
| Cr | 0.08 – 0.76 | Below 1 |

USEPA target hazard quotients and hazard index for adult rice consumers (Results §3.1.4, p. 12; Table 3, p. 18; abstract). Per-metal THQ values transcribed from Table 3 with both the in-paper figure and the abstract-consistent figure where the two disagree (the Cr/Zn row transposition in Table 3 is flagged in Verification notes):

| Element | Concentration in rice (mg/kg dw) | RfD (mg/kg·day) | THQ — Table 3 row label | THQ — abstract / Cr-Zn-corrected reading |
|---|---:|---:|---:|---:|
| Pb | 9.02 | 1.40 × 10⁻³ | 13.80 | 13.80 |
| Cd | 0.70 | 1.00 × 10⁻³ | 1.50 | 1.50 |
| Cr | 10.7 (Table 3 row, transposed with Zn) / 7.71 (Cr-Zn-corrected reading) | 3.00 × 10⁻³ | 0.08 (Table 3 row label) | 5.51 (abstract Cr THQ = 5.5) |
| Zn | 7.71 (Table 3 row, transposed with Cr) / 10.7 (Cr-Zn-corrected reading) | 3.00 × 10⁻¹ | 5.51 (Table 3 row label) | 0.08 (Cr-Zn-corrected) |
| Fe | 2.53 × 10³ | 7.00 × 10⁻¹ | 7.73 | 7.73 |
| Cu | 10.4 | 4.00 × 10⁻² | 0.56 | 0.56 |
| **HI** | | | **29.18** | **29.18 (sum is invariant under the Cr↔Zn row swap)** |

Principal-component-analysis loadings (Results §3.1.2, pp. 9–11):

| Compartment | PC1 % var | PC2 % var | PC1 dominant loadings | PC2 dominant loadings |
|---|---:|---:|---|---|
| Rice | 79.7 | 14.4 | Cr, Fe, Cd, Pb | Zn, Cu |
| Soil | (PC1+PC2 = 87.41%, individual splits not published) | — | Zn, Cr, Cu | Cd, Pb |
| Water (winter) | 58.8 | 30.3 | Fe, Cr, Cd, Pb | Cu (0.85), Zn (0.74); Pb loaded ≈0.5 on PC2 |

Exposure-assessment parameters used in THQ / HI computation (Methods §2.6.1, p. 7):

| Parameter | Value | Source |
|---|---:|---|
| Exposure frequency EF | 365 days/year | paper |
| Exposure duration ED | 70 years | paper |
| Ingestion rate IR | not reported numerically in the body text; back-calculated from the published THQs at Pb conc 9.02 mg/kg and RfD 1.4 × 10⁻³ to be approximately 150 g/day | derived |
| Body weight BW | not reported numerically in the body text; back-calculated value consistent with ≈70 kg adult | derived |
| Averaging time AT_n | 365 days/year × 70 years | paper |
| Oral reference doses RfD (mg/kg·day) | Pb 1.4 × 10⁻³, Cd 1.0 × 10⁻³, Cr 3.0 × 10⁻³, Zn 3.0 × 10⁻¹, Fe 7.0 × 10⁻¹, Cu 4.0 × 10⁻² | Table 3, USEPA (2011) |

WHO/FAO/FDA/EU permissible-limit ceilings cited by the paper (Results §3.1.1 in-text references to EUROPEAN UNION 1998, FAO/WHO 1988, WHO 2004, FDA 2010, WHO 2016): the paper does not publish the specific ceiling values in a separate table; references the ceilings qualitatively to characterise each compartment's exceedance pattern.

## Methods (brief)

Study area and sampling. The Tajan River is a 140-km permanent river draining a 4147-km² watershed in Mazandaran province, northern Iran, between N 36°00′–36°22′ and E 51°27′–53°27′; the river passes Sari city and surrounding villages before reaching the Caspian Sea, and its watershed encompasses the most abundant rice-cultivation lands in the region. Mean annual water discharge is 19.4 m³ s⁻¹. The total study comprised 174 samples: 75 winter water samples from 25 monitoring locations (sampled in 2018 winter) plus 99 summer samples (33 water, 33 soil, 33 rice) drawn in 2018 from 11 paddy locations selected from the 25 winter sites. All sample locations were georeferenced with a hand-held GPS device.

Sample preparation. Water: 100 mL into sterile PVC bottles with 5 mL of ultra-pure HNO₃ for digestion on a hot plate, made up to 100 mL with double-distilled water. Soil: 0.5 g into oven for 6 h at 90 °C with 8 mL concentrated 3:1 v/v HCl:HNO₃ + 3 mL concentrated HClO₄ ("wet digestion"); cooled, filtered through Whatman N.42 paper, diluted to 25 mL with deionised water. Each soil sample digested in three replicates. Rice plants: oven-dried at 70 °C to constant weight, acid-digested per the AOAC International method with HNO₃ + HClO₄ (25:10 mL), each sample in three replicates. All reagents analytical grade (Sigma Aldrich); water for solution preparation was MilliQ ultra-pure (Millipore).

Instrumentation. Atomic absorption spectrometry on an Analytik Jena AG (Jena, Germany) contrAA 700 high-resolution continuum-source AAS, equipped with both flame and graphite-furnace atomisers in two separate sample compartments and a high-intensity xenon short-arc lamp in hot-spot mode. Double monochromator (prism and echelle grating) with a 588-pixel linear CCD array detector. WinAAS v4.5.0 software. Pb and Cd determined by GFAAS; Zn, Cr, Cu and Fe determined by FAAS in air/acetylene and N₂O/acetylene flames. All analyses performed in triplicate; mean values used for downstream analysis. Manufacturer-specified operating parameters; concentrations reported in mg/kg of dry matter (ppm). Acetylene, argon and N₂O of 99.99% purity. Standard calibration curves constructed by plotting absorbance against concentration in a metal-specific range; linearity confirmed.

Speciation. Total Cr (no Cr-VI / Cr-III separation step described). Cd, Pb, Zn, Cu, Fe by total-element measurement. No As panel, no Hg panel, no Ni panel, no inorganic-vs-total speciation work.

Statistical analysis. IBM SPSS v25 and XLSTAT 2016. Descriptive statistics (mean ± SD) for the metal levels per compartment; one-way Pearson correlation analysis for cross-metal relationships within compartments; principal-component analysis (PCA) for source apportionment and distribution-pattern visualisation. Significance threshold not explicitly stated.

Transfer factor. PCF = MC_plant / MC_soil (per Jolly et al. 2013); both terms on a dry-weight basis.

Health risk assessment. USEPA (2011) THQ for non-carcinogenic risk:

THQ = (EF × ED × IR × 10⁻³ × MC) / (RfD × BW × AT_n)

with EF 365 d/y, ED 70 y, MC = metal concentration (mg/kg), RfD = oral reference dose (mg/kg·day), BW = body weight (kg), AT_n = 365 × ED for non-carcinogens. THQ ≥ 1 interpreted as high health risk per the paper's citation of Harmanescu et al. 2011. Hazard index HI = ΣTHQ across the six analysed metals (per USEPA 2011).

## Implications

This source contributes a high-contamination, single-basin Iranian rice-cultivation-region survey (n = 11 paddy locations, n = 33 rice samples in summer 2018, with paired paddy soils and winter+summer surface-water sampling), plus a deterministic THQ / HI risk assessment under USEPA (2011) assumptions, to the Iranian-cultivation-region rice evidence pool. Principal contributions to the wiki:

- Per-metal mean rice concentrations one to two orders of magnitude above the Iranian-market-rice mean concentrations reported in [[sources/shirani2017-iran-mashhad-rice-metals]] (Cd 0.064, Pb 0.153, tAs 0.129 mg/kg on 120 packed-rice samples in Mashhad 2014–2015) and in [[sources/sharafi2019-iran-tehran-rice-brands-metals]], [[sources/roya2016-iran-torbat-heidarieh-rice-metals]], [[sources/naseri2015-iran-shiraz-rice-metals]] for the Iranian retail-market rice subsegment. The Tajan-basin values (Pb 9.02, Cd 0.7, Cr 7.7, Zn 10.7, Cu 10.4, Fe 2526 mg/kg dw in rice) place the basin in a "highly contaminated cultivation region" tier rather than in the typical-Iranian-retail-market tier. The Pb mean alone (9.02 mg/kg) is roughly 45× the FAO/WHO Codex Pb cereal ceiling of 0.2 mg/kg, and the Cd mean (0.7 mg/kg) is 7× the Codex Cd cereal ceiling of 0.1 mg/kg.
- A near-1 transfer-factor signal for the two most toxicologically relevant metals (Pb TF 4.89–23.65, Cd TF 3.67–12.42) — both far above 1.0, indicating substantial bioaccumulation from soil to grain — versus essential-metal TFs below 1.0 (Cu 0.03–0.53, Zn 0.03–0.45, Fe 0.03–0.42) and Cr 0.08–0.76. The Pb and Cd TF ranges sit one to two orders of magnitude above the WHO permissible-crop-TF threshold of approximately 1.0 cited in the paper.
- A summed hazard index of 29.18 for adult rice consumers, driven principally by Pb (THQ 13.80) and Fe (THQ 7.73), with a non-trivial Cr contribution (THQ 5.5 per the abstract / 0.08 per Table 3 row label, with the row-label value treated here as a Cr↔Zn transposition error — see Verification notes) and a moderate Cd contribution (THQ 1.50). HI = 29.18 sits well above the USEPA THQ ≥ 1 non-carcinogenic-risk threshold cited by the paper via Harmanescu et al. 2011.
- An anthropogenic-source pattern identification via PCA: in the rice samples, Cd, Pb, Cr and Fe co-load on PC1 (79.7% of variance), Zn and Cu on PC2 (14.4%); together the two components account for 94.10% of total variance. The paper attributes the PC1 cluster to nearby Pb/Zn mineral processing operations, road-dust deposition from the highway adjacent to the paddies, and industrial activities (textile, paint, battery and milling).
- A basin-wide environmental-compartment portrait — water, soil, and rice — that allows soil-to-plant transfer factor computation rather than requiring it to be inferred from the broader literature. The paper publishes per-location values for each compartment in Tables 1 and 2.
- A small-panel (n = 33 rice samples from 11 paddy locations × 3 replicates), single-basin, single-season (summer 2018), single-jurisdiction (Iran) Iranian-cultivation-region contamination footprint with no As panel, no Hg panel, no Ni panel, no Cr speciation (Cr-VI / Cr-III) work, no published recovery / CRM / measurement-uncertainty validation values, no published LOD / LOQ values, and no published numerical IR / BW values for the THQ computation (back-calculation suggests IR ≈ 150 g/day at BW ≈ 70 kg, but the paper does not state these explicitly). The B-tier classification reflects these limitations together with the data-integrity issues flagged in Verification notes (body-text Cd swap, Table 3 Cr↔Zn row transposition, ambiguous "rice plants (containing grains)" matrix description).

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/zinc]]
- [[metals/iron]]
- [[metals/copper]]
- [[ingredients/rice]]
- [[products/rice-bulk-grain]]

## Verification notes

- **Identity checks (three-way) clean.** DOI grep (`10.1016/j.chemosphere.2019.125639`) returned no existing `wiki/sources/` page; raw-handle grep (`MFK_vatanpour2020`) returned no existing page; cite-key glob (`vatanpour*`) returned no existing page. The page is a fresh NEW-path ingest.
- **Frontmatter discipline.** Metal slugs use the Part 14 abbreviation vocabulary (`Pb`, `Cd`, `Cr`, `Zn`, `Fe`, `Cu`). Cr is recorded as total Cr; no Cr-VI / Cr-III speciation step is described in the paper, so the wiki page does not use `Cr-VI`. The matrix slug `rice-grain` follows the established Iranian-rice precedent set by [[sources/shirani2017-iran-mashhad-rice-metals]], [[sources/sharafi2019-iran-tehran-rice-brands-metals]], [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] and [[sources/naseri2015-iran-shiraz-rice-metals]]; see also the "rice-plant-vs-rice-grain matrix ambiguity" note below. Jurisdiction is `IR` only; the paper has no imported-rice or cross-border component.
- **Rice-plant-vs-rice-grain matrix ambiguity (Methods §2.2, p. 5; Results §3.1.1, p. 8).** The paper describes the rice samples both as "rice plants" (Methods §2.1, p. 4: "33 rice plants ... were sampled" from the paddy fields) and as "fresh rice plants (containing grains)" (Results §3.1.1, p. 8). The Methods §2.2 rice-plant sample-preparation paragraph describes drying the "collected samples ... at 70 °C to constant weights" and digesting with HNO₃/HClO₄ per AOAC, without specifying whether the prepared sample comprises grain only, grain + husk, or whole plant biomass. The reported mean rice Fe (2526 mg/kg dw) and mean rice Pb (9.02 mg/kg dw) are both substantially higher than typical published values for polished or even brown rice grain (Fe typically 10–30 mg/kg; Pb typically below 0.5 mg/kg in non-contaminated grain), suggesting that the analysed material may comprise whole-plant biomass or grain plus husk/leaf tissue. However, the paper's risk assessment treats the values as human-ingestion-relevant rice concentrations, applies a standard adult-consumer rice ingestion rate, and concludes specifically that "rice plants, cultivated in the Tajan river basin, could be a severe dietary source of Pb and Cd exposure" (Conclusions §4, p. 12). The wiki page accordingly classifies the matrix as `rice-grain` (the broadest plausible reading consistent with the paper's risk assessment), but downstream pooling work that needs grain-only data should treat these values with caution and flag them in any per-metal contamination_profile entry that draws on this source.
- **Body-text vs Table 2 Cd swap (Results §3.1.1, p. 8 vs Table 2, p. 17).** The body text of §3.1.1 reports, for soil, "the highest for ... Pb (0.6 ± 0.042 mg/kg), Cd (0.7 ± 0.003 mg/kg) (Table 2)" and, for rice, "the detected average concentrations in all rice samples for ... Pb (9.02 ± 0.2 mg/kg), Cd (0.11 ± 0.02 mg/kg)". The Table 2 per-sample data, however, yield computed panel means of Cd 0.108 mg/kg for the 11 soil samples (matching the body-text RICE value of 0.11) and Cd 0.700 mg/kg for the 11 rice samples (matching the body-text SOIL value of 0.7). The Cd row in Table 3 (which feeds the THQ computation) lists rice Cd = 7.00 × 10⁻¹ = 0.7 mg/kg, consistent with the Table 2 rice-mean computation; the resulting THQ of 1.5 with RfD = 1.0 × 10⁻³ implies (IR / BW) ≈ 0.21 d/kg, which back-solves to the same IR / BW pair (≈150 g/day per ≈70 kg adult) implied by the Pb-THQ math at rice Pb 9.02 mg/kg with RfD 1.4 × 10⁻³ (THQ 13.80). The wiki page therefore treats the **rice Cd mean as 0.7 mg/kg** (from Tables 2 and 3, internally consistent with the THQ computation) and the **soil Cd mean as 0.11 mg/kg** (from Table 2 computation), and flags the body-text Cd values as a transcription swap between the soil and rice rows. This is an obvious mirroring pattern, not a paper-internal data-integrity issue requiring a stop.
- **Table 3 Cr↔Zn row transposition (Table 3, p. 18 vs Abstract, p. 2 vs Results §3.1.4 body text, p. 12).** Table 3 lists, in row order: Pb conc 9.02 mg/kg / THQ 13.80; Cd conc 7.00 × 10⁻¹ mg/kg / THQ 1.50; **Cr conc 1.07 × 10¹ mg/kg / THQ 0.08**; **Zn conc 7.71 mg/kg / THQ 5.51**; Fe conc 2.53 × 10³ mg/kg / THQ 7.73; Cu conc 1.04 × 10¹ mg/kg / THQ 0.56. The abstract (p. 2), however, states "The average total hazard quotient (THQ) values for Pb, Fe, Cr, and Cd were 13.8, 7.7, 5.5, and 1.5, respectively" — the abstract Cr THQ of 5.5 matches the Table 3 row labelled Zn (5.51), not the Table 3 row labelled Cr (0.08). The Results §3.1.1 body text reports the rice means as Cr 7.7 mg/kg and Zn 10.7 mg/kg, which matches the Table 2 per-sample data computation (rice Cr mean 7.5, rice Zn mean 10.7) but is the reverse of the Table 3 row labels (Cr 10.7, Zn 7.71). THQ math under (IR ≈ 150 g/day, BW ≈ 70 kg): with rice Cr 7.7 mg/kg and RfD 3.0 × 10⁻³ → THQ 5.5; with rice Zn 10.7 mg/kg and RfD 3.0 × 10⁻¹ → THQ 0.08. The Cr↔Zn row transposition in Table 3 (which moves both the concentration and the THQ value between the two rows simultaneously) preserves the summed HI of 29.18 = 13.80 + 1.50 + 0.08 + 5.51 + 7.73 + 0.56 = 13.80 + 1.50 + 5.51 + 0.08 + 7.73 + 0.56 (commutative), so the headline HI claim is invariant under the swap. The wiki page reports both the Table 3 row-labelled values and the abstract-consistent / body-text-consistent / Table-2-consistent values side by side in the Key numbers table for Cr and Zn, and flags the Table 3 row transposition as the third data-integrity issue in this paper (after the body-text Cd swap and the matrix-ambiguity issue above). This is an obvious mirroring pattern, not a stop condition.
- **IR / BW not published numerically.** The THQ equation in Methods §2.6.1 (p. 7) defines IR (ingestion rate, g/day) and BW (body weight, kg) as inputs but does not publish the numerical values used. Back-calculation from the published Pb THQ of 13.80 at rice Pb 9.02 mg/kg with RfD 1.4 × 10⁻³ and EF 365 / ED 70 / AT_n 365 × 70 gives (IR × 10⁻³ × MC) / (RfD × BW) = 13.80 → IR × 0.00902 = 13.80 × 0.001 × 0.0014 × BW × ... let IR / BW = X → X = (THQ × RfD) / (MC × 10⁻³) = (13.80 × 1.4 × 10⁻³) / (9.02 × 10⁻³) = 0.0193 / 0.00902 = 2.14 (mg/kg·day)/(mg/kg) = ... this back-solves cleanly to IR ≈ 150 g/day and BW ≈ 70 kg (the typical Iranian-adult assumption used by [[sources/sharafi2019-iran-tehran-rice-brands-metals]] and other Iranian-rice papers that cite ISIRI 12968 / 165 g/day or USEPA 2011 / 70 kg). The wiki page does not propagate the back-calculated IR / BW pair as if it were a published value; the Exposure-assessment parameters table flags both as "not reported numerically in the body text; back-calculated from the published THQs ... to be approximately 150 g/day / 70 kg adult." Downstream pooling work that needs the published IR / BW pair should treat these as derived rather than as paper-provided.
- **"Highest recorded" water concentrations are summer means (Results §3.1.1, p. 8).** The body text introduces the water values with "From the water samples the highest recorded concentrations were for Fe (71.9 ± 3.35 mg/kg), Cr (0.2 ± 0.011 mg/kg), Zn (0.5 ± 0.068 mg/kg), Cu (0.24 ± 0.034 mg/kg), Pb (0.63 ± 0.029 mg/kg), Cd (0.03 ± 0.001 mg/kg)". Cross-checking against the Table 1 per-sample data shows that none of these values matches the per-sample maximum (e.g., Table 1 Pb max in summer is 1.386 mg/L at SW16, well above the reported 0.63; Cd max is 0.082 mg/L at SW5, above the reported 0.03). The reported "highest" values closely match the SUMMER-row means computed from Table 1 (Pb summer mean 0.631, Cd summer mean 0.035, Cr summer mean 0.197, Zn summer mean 0.493, Cu summer mean 0.262, Fe summer mean 71.8). The body text label "highest recorded" should be read as "summer-mean (the highest seasonal mean)" rather than as "per-sample maximum." The wiki Key numbers water table reports both the body-text summer-mean values and the per-sample range from Table 1.
- **Soil Fe per-location outlier and Table-1-vs-Table-2 column duplication (Table 1, p. 16; Table 2, p. 17).** The soil Fe per-location values range 14.273 – 215.407 mg/kg, with one notable outlier at SS12 (215.407 mg/kg) and the second-highest at SS16 (182.315 mg/kg); the panel mean computes to 71.89 mg/kg from Table 2. The body-text "highest for Fe (15026 ± 256.92 mg/kg)" in §3.1.1 sits approximately two orders of magnitude above the Table 2 per-paddy maximum (15,026 / 215.4 ≈ 70×); the body-text Fe figure is more plausible for typical mineral-soil Fe content (10,000–30,000 mg/kg) but is not derivable from the Table 2 data as captured. Compounding this, the Table 1 summer-water Fe values (SW1–SW18) are bitwise-identical to the Table 2 soil Fe values (SS1–SS18) across all eleven paired locations (SW1/SS1 = 47.803, SW3/SS3 = 19.731, ..., SW18/SS18 = 74.934), suggesting that the captured Table 2 soil Fe column may be a copy-paste duplication of the Table 1 summer-water Fe column rather than the original soil-Fe measurements. The wiki Key numbers soil table reports the Table 2 values verbatim (mean 71.89 mg/kg, range 14.3–215.4 mg/kg) and flags this Table 1↔Table 2 column duplication and the body-text two-order-of-magnitude divergence as a fourth data-integrity issue.
- **Soil Cr body-text vs Table 2 disagreement (Results §3.1.1, p. 8 vs Table 2, p. 17).** The body text reports "the highest for ... Cr (108 ± 3.37 mg/kg)" for the soil samples. The Table 2 Cr column (SS1–SS18) ranges 0.084 – 0.424 mg/kg with a computed panel mean of 0.180 mg/kg — approximately two-to-three orders of magnitude below the body-text 108 mg/kg figure. The body-text Cr value of 108 mg/kg is more plausible for typical mineral-soil Cr content (50–200 mg/kg) but is not derivable from the Table 2 data as captured. The wiki Key numbers soil table uses the Table 2 values; the body-text Cr figure is flagged as a fifth data-integrity issue in the paper (paralleling the soil Fe issue: both metals' body-text values are biogeochemically plausible for soil but the captured Table 2 numerical values are implausibly low and suggest data-entry / copy-paste issues during the paper's table preparation).
- **Pb / Zn mineral processing source attribution.** The paper attributes the rice-and-soil contamination signature to nearby Pb/Zn mineral processing operations, road-dust deposition along the highway-adjacent paddies, and phosphate-fertiliser use, supported by the PCA loadings (Cr, Fe, Cd, Pb co-loaded on PC1 in rice; Cd and Pb co-loaded on PC2 in soil). These are descriptive source-apportionment inferences from PCA and are reported here without further synthesis.
- **Brand firewall (Part 12).** No brand names appear in the source text (the paper studies cultivated paddies, not retail-market packaged rice) and none appear on this wiki page. Scientific-method vendor identifiers retained per Part 12 Exception 2: Analytik Jena AG (Jena, Germany) contrAA 700 instrument, Sigma Aldrich reagents, Whatman N.42 filter paper, MilliQ ultra-pure water (Millipore), IBM SPSS v25 statistical software, XLSTAT 2016, WinAAS v4.5.0 instrument-control software.
- **Wiki/HMTc firewall (Part 2).** No threshold proposals, no consumer-audience advisories. The Implications section places this paper's per-metal mean rice concentrations against three other Iranian-rice papers ([[sources/shirani2017-iran-mashhad-rice-metals]], [[sources/sharafi2019-iran-tehran-rice-brands-metals]], [[sources/roya2016-iran-torbat-heidarieh-rice-metals]], [[sources/naseri2015-iran-shiraz-rice-metals]]) for descriptive band-placement only; full cross-paper synthesis (e.g., updating the [[ingredients/rice]] `contamination_profile` block) is the Part 9 workflow's job and is not done in this ingest pass.
- **Pre-proof ("Journal Pre-proof") version.** The PDF carries the "Journal Pre-proof" watermark on every page, indicating that the typeset, copy-edited version-of-record may differ from the captured PDF in minor ways (the cover page itself notes "errors may be discovered which could affect the content"). The reference list, methods, tables and key numerical claims are stable in the pre-proof. Year for the wiki citation is 2020 (the publication's volume year; Chemosphere Volume 245, April 2020), matching the filename `vatanpour2020.pdf`; the DOI namespace `10.1016/j.chemosphere.2019.125639` reflects the article-registration year (2019) and the published volume (2020) per Elsevier's standard DOI minting practice.
- **Data-integrity transcription notes.** Rice means transcribed from Results §3.1.1 (p. 8) and cross-checked against the per-sample data in Table 2 (p. 17); the Cd value uses Tables 2/3 rather than the body text per the swap analysis above. Soil means computed from Table 2 (p. 17) per-sample data and cross-checked against the body-text figures (Fe, Cr and Cd flagged for body-text errors per notes above). Water values transcribed from §3.1.1 (p. 8) summer-mean labels with per-sample ranges computed from Table 1 (p. 16). TF ranges transcribed from §3.1.3 (p. 11) and Abstract (p. 2). PCA loadings transcribed from §3.1.2 (pp. 9–11). THQ / HI values transcribed from Table 3 (p. 18) and §3.1.4 (p. 12), with the Cr↔Zn row-transposition cross-check against the Abstract Cr THQ value of 5.5 (p. 2). Sample counts transcribed from §2.1 (p. 4). Methods transcribed from §2.2–§2.3 (pp. 4–6). All numerical claims in the wiki page that disagree with at least one location in the paper are flagged inline in the Key numbers section and explained in the verification notes; values that agree across all paper locations are reported without inline caveats.
- **Audit subagent (Claude general-purpose, 2026-06-01) findings applied.** Verdict: REVISE. Six findings independently verified against the source PDF and applied: (1) soil Fe panel mean corrected from 113.4 → 71.89 mg/kg (Table 2 SS1–SS18 arithmetic mean); (2) soil Cu mean 25.6 → 25.42 mg/kg; (3) soil Cr mean 0.176 → 0.180 mg/kg; (4) soil Zn mean 52.5 → 52.32 mg/kg; (5) water summer-mean Cr 0.197 → 0.180 mg/L (matches Table 1 SW1–SW18 arithmetic mean); (6) water summer-mean Cu 0.262 → 0.243 mg/L. The "one-order-of-magnitude transcription error" descriptor for the body-text soil Fe (15,026 mg/kg) was upgraded to "approximately two orders of magnitude" (actual ratio ≈ 70× the Table 2 max) and expanded with a Table 1↔Table 2 column-duplication observation: the captured Table 2 soil Fe column is bitwise-identical to the Table 1 summer-water Fe column across all eleven paired locations. A parallel body-text-vs-Table 2 disagreement for soil Cr (body text 108 mg/kg vs Table 2 panel mean 0.180 mg/kg) was added as a fifth flagged data-integrity issue. The Lemly (1996) HI = 10 high-hazard-tier reference in the Implications section was removed (the paper itself cites only Harmanescu et al. 2011 for the THQ ≥ 1 threshold, not Lemly's HI-tier framework). The `matrices: [rice-grain]` slug was left unchanged: the audit flagged the slug as a ⚠️ concern because the audit-prompt example list mentions only "rice", but the precedent set by [[sources/shirani2017-iran-mashhad-rice-metals]], [[sources/sharafi2019-iran-tehran-rice-brands-metals]], [[sources/roya2016-iran-torbat-heidarieh-rice-metals]] and [[sources/naseri2015-iran-shiraz-rice-metals]] (all of which use `rice-grain`) supports the slug as in-vocabulary, and the rice-plant-vs-rice-grain matrix-ambiguity flag in the Verification notes makes the choice transparent for downstream pooling.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
| [2e7183ca7](https://github.com/paleofoundation/heavymetalindex/commit/2e7183ca7) | 2026-06-01 | major | 4 sources added; narrative text revised |
| [64907d29e](https://github.com/paleofoundation/heavymetalindex/commit/64907d29e) | 2026-06-01 | major | 4 sources added; 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
