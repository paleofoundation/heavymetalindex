---
type: source
raw_handle: MFD_massoud2020-camel-milk-heavy-metals
cite_key: massoud2020-mercury-biosorption-milk-lacidophilus
title: "Mercury Biodecontamination from Milk by using L. acidophilus ATCC 4356"
authors: ["Massoud R", "Khosravi-Darani K", "Sharifan A", "Asadi GH", "Hadiani MR"]
year: 2020
publication: "Journal of Pure and Applied Microbiology"
doi: 10.22207/JPAM.14.4.10
access_url: https://doi.org/10.22207/JPAM.14.4.10
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: raw/Manual Fetch Discovery/massoud2020-camel-milk-heavy-metals.pdf
raw_sha256: d70671555d2ab78269550e1828691c9d3ca6259ee001f679dc9099c23ab8c447
metals: [tHg]
ingredients: ["[[ingredients/milk-and-dairy]]"]
products: ["[[products/category-5-beverages]]"]
matrices: [raw-milk]
jurisdictions: [IR]
near_duplicates: []
sample_n: null
sample_population: "Sterile dairy milk in 250 mL Erlenmeyer flasks spiked with Hg(NO3)2 at 20-100 µg/L; biosorption by L. acidophilus ATCC 4356 at 10^10-10^14 CFU over 0-4 days; all biosorption runs in triplicate"
wiki_doi: null
sampling_locations: null
sampling_year_range: null
access_date: 2026-05-30
updated: 2026-05-30
---

# Massoud et al. 2020 — Mercury biosorption from milk by L. acidophilus ATCC 4356

Massoud and colleagues at the Iran Standard Organization and Shahid Beheshti University of Medical Sciences ran a laboratory biosorption experiment to test whether Lactobacillus acidophilus ATCC 4356 can remove inorganic mercury (Hg(NO3)2) added to sterile dairy milk at low (µg/L) concentrations representative of reported milk contamination. The work uses Plackett-Burman screening followed by central-composite response surface methodology to identify Hg concentration, bacterial biomass, and contact time as the dominant variables, then fits Langmuir and Freundlich isotherm models to the equilibrium data. Maximum removal was 72% at 80 µg/L initial Hg, 1×10^12 CFU L. acidophilus, day 4, with the Langmuir model (R² = 0.9121) fitting better than Freundlich (R² = 0.8747). The paper is a process-intervention study, not a contamination survey: the milk-Hg values it cites for real-world supply (China, Iran, Codex permitted limit) are second-hand citations, not original measurements.

## Key numbers

All concentrations from the paper text and Tables 1-4. Hg analysis was by ICP-MS (model 4500a, England) on supernatants after centrifugation; values are total Hg in the residual liquid phase, with no Hg speciation between Hg(II) ions and Hg-bacterial complexes (only the supernatant is measured; biomass-bound Hg is inferred by mass balance).

Experimental Hg spiking levels used in the biosorption runs:

- Plackett-Burman screening: two levels, 40 µg/L and 100 µg/L initial Hg in milk (Table 1).
- Central-composite RSM: five levels (-α, -1, 0, +1, +α) at 40, 50, 70, 90, 100 µg/L initial Hg (Table 2).
- Isotherm characterization: 20, 40, 60, 80, 100 µg/L initial Hg (Table 4).

L. acidophilus biomass levels: 1×10^10, 10×10^11, 1×10^12, 10×10^13, 10×10^14 CFU (Table 2, central-composite design).

Other process variables:

- Contact time: 0, 1, 2, 3, 4 days (Table 2).
- Inoculation temperature held at 25 °C and shaking at 50 rpm during RSM runs (after Plackett-Burman screening showed temperature and shaking-rate effects were non-significant).
- Plackett-Burman ANOVA p-values (Table 3): shaking rate p = 0.4125, Mercury concentration p = 0.0542, L. acidophilus concentration p = 0.0712, contact time p = 0.0688, inoculation temperature p = 0.3202. The authors describe Mercury concentration, biomass, and contact time as the "significant" main effects despite all three p-values exceeding the conventional 0.05 cutoff.

Bioremoval outcome:

- Maximum removal efficiency: 72% at 80 µg/L initial Hg, 1×10^12 CFU L. acidophilus, day 4 (abstract and Conclusion). The abstract and Conclusion give the maximum-removal day as "the 4th day"; the discussion paragraph instead reports "the 3rd day" for the same maximum, an internal inconsistency reproduced here verbatim.
- Removal efficiency rose with increasing contact time from day 1 to day 4 (Figure 2 contour plot) and with rising initial Hg concentration from 40 to 100 µg/L (Figure 3 contour plot).
- Removal efficiency rose with biomass up to 1×10^12 CFU, then declined slightly at higher biomass — the authors attribute the decline to bacterial aggregation reducing surface-site availability.

Isotherm-model parameters (Table 4, Hg(II) in milk after 4-day exposure to 10^12 CFU/mL L. acidophilus):

| Hg initial (µg/L) | Ce (µg/L) | Qe (µg/L) | Ce/Qe | Ln Qe | Ln Ce |
| --- | --- | --- | --- | --- | --- |
| 20 | 10.5 | 9.4 | 1.128 | 2.241 | 2.361 |
| 40 | 18 | 22 | 0.818 | 3.091 | 2.890 |
| 60 | 22 | 38 | 0.563 | 3.648 | 3.073 |
| 80 | 24 | 56 | 0.429 | 4.025 | 3.178 |
| 100 | 25 | 75 | 0.333 | 4.317 | 3.219 |

Where Ce = equilibrium Hg concentration in milk supernatant, Qe = amount of Hg bound to biomass at equilibrium. Note that the Table 4 column labelled "Qe (µg/L)" is presented in volume-normalised units in the source; mechanistically Qe is the metal loaded per mass of biomass, so the original units may be a printing error. The values are preserved verbatim.

Linear regression coefficients (Figure 4):

- Langmuir (Ce/Qe vs Ce): y = −0.0774x + 2.7541, R² = 0.9121. The negative slope is mathematically inconsistent with the Langmuir equation Ce/Qe = 1/(K·Qmax) + Ce/Qmax (which should yield a positive slope 1/Qmax), so the reported regression statistic is reproduced verbatim and flagged.
- Freundlich (Ln Qe vs Ln Ce): y = 2.4779x − 4.4005, R² = 0.8747.
- The authors conclude that the Langmuir model fits better (higher R²) and that "Mercury absorptions obey Langmuir isotherm model."

Real-world milk-Hg values cited from prior literature (introduction, p.2314, not measured in this study):

- Codex standard for contaminants and toxins in food: maximum permissible Hg in milk "less than 0.05 µg/L" (per the authors' citation of Codex Stan 193, 2009; the Codex CXS 193 General Standard does not state a 0.05 µg/L milk-Hg limit in the public 1995/2009 versions and this citation is likely a transcription or jurisdictional-attribution error — see Verification notes).
- China milk Hg: 0.08 µg/L (cited as Wang MQ et al. 2002, J Food Hyg).
- Iran raw cow and ewe milk Hg: 0.07 µg/L (cited as Najarnezhad and Akbarabadi 2013, Food Add Contamin).

These three numbers are not original measurements in this paper; they are quoted from other authors to motivate the biodecontamination study.

## Methods (brief)

Bacteria: L. acidophilus ATCC 4356 supplied by Tak Gen Zist Company (Tehran). Inoculated in MRS broth, incubated at 37 °C for 48 h, enumerated by total plate count on MRS agar and plate count agar.

Milk model: Raw milk → standardization → homogenization → pasteurization (75 °C, 15 s) → cooling (40 °C) → adding L. acidophilus (Figure 1 schematic). Hg added as Hg(NO3)2 standard solution (1000 mg/L, Merck, Spain) at 20-100 µg/L, before or after pasteurization per the schematic. Milk species (cow vs other) is not stated; the HTST pasteurization parameters and the absence of any species-specific qualifier are consistent with generic dairy milk. The sterile milk had 20 minutes rest after biomass addition, then Hg spike, then shaker, then 1- or 4-day contact, then 8000 × g for 20 min centrifugation, then supernatant analysis. All biosorption experiments in triplicate.

Hg analysis: ICP-MS model 4500a (England) with cross-flow nebuliser and Peltier-cooled quartz spray chamber, multi-element aqueous tuning before each run. Microwave digestion in segmented-rotor MPR-600 instrument at up to 35 bar and 260 °C before ICP-MS injection. No CRM, LOD, LOQ, recovery, or precision values are reported; this is a notable methodological gap relative to the surveys this paper cites for comparison.

Hg removal formula: %Removal = 100 × [(C0 − C1) / C0] where C0 is initial Hg added and C1 is residual supernatant Hg after the contact period.

Experimental design: Plackett-Burman in 8 runs at 2 levels per variable (Table 1) screened five candidate factors (biomass, temperature, contact time, Hg, shaking). Surviving three factors entered a central-composite RSM in 5 levels (Table 2), analysed in Design-Expert 7.1.5 (Stat-Ease Inc., USA). Statistics in Minitab 14, ANOVA-based, p < 0.05 cutoff.

Isotherm fitting: linear Langmuir form Ce/Qe = 1/(K·Qmax) + Ce/Qmax and linear Freundlich form Ln Qe = Ln Kf + (1/n) Ln Ce, both fit to the 5-point (Hg-initial) dataset at 10^12 CFU/mL biomass on day 4.

The authors do not analyse the milk for background Hg before spiking, do not characterise the milk fat/protein/casein content, do not assess Hg recovery via spike controls, and do not test alternative pH or temperature ranges representative of dairy supply.

## Implications

Certification: This paper does not contribute occurrence data for HMTc threshold-setting. The 0.05, 0.07, and 0.08 µg/L milk-Hg values cited in the introduction are secondary citations, not measurements; using them as occurrence inputs would double-count the underlying primary sources (Wang 2002 for China; Najarnezhad and Akbarabadi 2013 for Iran; Codex Stan 193 for the regulatory limit, with the caveat that the 0.05 µg/L attribution appears to be incorrect). The paper's contribution is to the mitigation/treatment evidence base: 72% Hg removal at 80 µg/L by 10^12 CFU L. acidophilus is a single-lab benchmark for LAB-based milk decontamination at concentrations roughly 1000× higher than reported real-world milk contamination.

Courses: Useful as a worked example of response surface methodology (Plackett-Burman → central composite) applied to a food-decontamination process, and of Langmuir/Freundlich isotherm model selection from linear regression coefficients. Also a teachable case study in methodological-gap recognition: the lack of CRM, recovery, LOD reporting; the experimental Hg spike levels being 400-1600× the cited real-world milk Hg values; and the day-3 vs day-4 internal inconsistency illustrate why mechanism/process papers cannot stand alone as evidence for food-supply contamination levels.

App: Not directly informative for milk-and-dairy contamination_profile values. The biosorption capacity numbers are biomass-loading parameters, not ingredient occurrence priors. The cited Wang 2002 (China 0.08 µg/L) and Najarnezhad 2013 (Iran 0.07 µg/L) milk Hg values should be sourced from the underlying primary papers if Hg priors for cow milk are needed.

Microbiome (Part 24): The paper documents L. acidophilus ATCC 4356 as a Hg(II)-binding probiotic in a milk matrix, with surface functional groups (carboxyl, hydroxyl, phosphate on teichoic acid and peptidoglycan) attributed as the binding moieties. This is relevant context for any future synthesis on probiotic-mediated luminal heavy-metal sequestration in dairy and dairy-derived foods.

## Wiki pages this source may touch

- [[ingredients/milk-and-dairy]]
- [[metals/mercury-total]]

## Verification notes

The PDF filename `massoud2020-camel-milk-heavy-metals.pdf` is the `discover` skill's auto-fetch handle from a "camel milk heavy metals" topic sweep. The paper itself is not about camel milk — the title is "Mercury Biodecontamination from Milk by using L. acidophilus ATCC 4356" and the experimental matrix is unspecified-species sterile dairy milk (the Figure 1 schematic shows generic HTST pasteurisation at 75 °C/15 s and does not name a species). The cite-key drops "camel" and uses `mercury-biosorption-milk-lacidophilus` as the topic slug. The raw_handle preserves the discover-skill filename for the daemon's audit trail. This is the same misleading-filename pattern documented in the 2026-05-30 stops report for `hasan2021-camel-milk-heavy-metals.pdf` (which is a Bangladesh cow/buffalo dairy survey) and `afzal2024-camel-milk-heavy-metals.pdf` (which is a narrative livestock review), and is worth feeding back to the discover-skill scoring rules — the "camel-milk-heavy-metals" topic sweep is pulling generic-milk heavy-metals papers that happen to mention camel milk in their related-work sections.

The metals field is `tHg` rather than `iHg`. The spiking agent is Hg(NO3)2 (inorganic Hg(II)), but the residual Hg measurement by ICP-MS is total Hg in the supernatant and the authors do not speciate Hg(II) from any Hg-organic complexes that might form during the 4-day milk-protein contact. Per Part 14 speciation discipline, the conservative report is tHg. The metals-page wikilink at the bottom uses `[[metals/mercury-total]]`.

The Codex-Stan-193 Hg-in-milk limit of 0.05 µg/L cited by the authors (reference 8) is preserved verbatim from the paper but flagged as likely incorrect. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193) does not, in its 1995 adopted text or 2009 revision visible in the public CAC record, state a 0.05 µg/L milk-Hg maximum level. National Iranian standards have used 0.05 mg/kg (= 50 µg/kg ≈ 50 µg/L) for milk Hg, which is 1000× higher; the paper's 0.05 µg/L figure may be a unit-transcription error of the Iranian standard, a mis-citation of a different Codex document, or a value from a Codex working-document draft not in the adopted standard. The number is reproduced as the authors wrote it; any downstream use should confirm against the original Codex CXS 193 text rather than treating this paper as a primary source for the limit.

The day-3 vs day-4 internal inconsistency on the maximum removal point (abstract and conclusion say day 4; Discussion paragraph on p.2317 says day 3 for the same 72% maximum) is reproduced verbatim. The most likely reading is that day 4 is correct (it appears in both abstract and Conclusion and is the upper bound of the central-composite design), and the day-3 mention is a typo, but the source disagreement is preserved.

The Langmuir linear regression coefficient (y = −0.0774x + 2.7541) reported in Figure 4A is mathematically inconsistent with the Langmuir model. The Langmuir linear form Ce/Qe = 1/(K·Qmax) + Ce/Qmax requires a positive slope (= 1/Qmax) for any physically meaningful adsorption. A negative slope yields a negative Qmax, which is unphysical. The R² of 0.9121 is reported by the authors but the fit cannot represent a real Langmuir isotherm. The Freundlich fit (positive slope) is self-consistent. The conclusion "Mercury absorptions obey Langmuir isotherm model" in the abstract and Conclusion does not follow from the regression equation shown; this is a paper-internal contradiction. The Table 4 Ce values are also internally inconsistent with a 72%-removal maximum at 80 µg/L (Table 4 shows Ce = 24 µg/L at C0 = 80 µg/L, which is 70% removal, not 72%, and the 100 µg/L row shows 75% removal which exceeds the headline maximum). These are flagged for the audit subagent's attention but reproduced verbatim.

The Plackett-Burman ANOVA in Table 3 reports p-values of 0.0542, 0.0712, 0.0688, 0.4125, and 0.3202 for the five candidate factors. The authors describe the first three as "significant" despite all exceeding the conventional p < 0.05 cutoff stated in the Statistical Analysis section. This is reproduced verbatim and is internally inconsistent with the paper's own stated significance threshold.

The product slug `category-5-beverages` is used per established convention for milk papers on HMI (chen2020-milk-types-elements-china, akhmetsadykova2013-camel-milk-lab-lead, etc.) — milk-and-dairy ingredient pages route to the category-5-beverages product page until a milk-and-dairy-specific HMTc Step 0 Lock exists.

The matrices field uses `raw-milk`, which is established in the existing matrices vocabulary (chen2020, chirinos2023, ibrahim2024, parsaei2019, sarkis2025). The Figure 1 schematic shows raw milk as the input, before the pasteurization step where Hg is spiked.

No brand names appear in the source as contamination-attribution targets. Method-vendor names (Merck, Liofilchem, HyClone, Prolabo, Labclinic, Tak Gen Zist, Stat-Ease/Design-Expert, Minitab) are reproduced under the methods-vendor exception per the strict reading of Part 12 locked 2026-05-17.

Sample-year range is not stated; manuscript received 22 August 2020 and accepted 1 October 2020. Sampling is not applicable in the survey sense — this is a controlled-spike laboratory experiment, not a field measurement of milk contamination.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [70ae1ccdf](https://github.com/paleofoundation/heavymetalindex/commit/70ae1ccdf) | 2026-05-30 | major | 1 section added |
| [9eab3a044](https://github.com/paleofoundation/heavymetalindex/commit/9eab3a044) | 2026-05-30 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
