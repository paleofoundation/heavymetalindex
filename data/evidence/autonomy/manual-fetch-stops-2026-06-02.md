# Manual-fetch ingest stop notes — 2026-06-02

## STOP: KADC_agave-syrup-chemical-analysis-nutritional-profile-2022 — out of HMI analyte scope

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/02_Honey_Syrups_Vinegar/Agave_Syrup_Chemical_Analysis_Nutritional_Profile_2022.pdf`

**Suggested handle:** KADC_agave-syrup-chemical-analysis-nutritional-profile-2022

**Citation:** Saraiva A, Carrascosa C, Ramos F, Raheem D, Raposo A. Agave Syrup: Chemical Analysis and Nutritional Profile, Applications in the Food Industry and Health Impacts. Int J Environ Res Public Health. 2022;19(12):7022. DOI: 10.3390/ijerph19127022. CC BY 4.0. Received 20 April 2022; accepted 6 June 2022; published 8 June 2022.

**Reason for stop:** Paper is a narrative review of agave syrup (AS) chemistry, food-industry applications, sustainability, quality/safety control, and nutritional profile. It does **not** measure, report, or compile heavy metal contamination data for agave syrup. Verified by reading all 16 pages including all six tables, all figures, methods narrative, and references list (78 entries; all sugar-analysis, fructan, food-industry, microbiome, or general-sweetener references — none on metals).

Substantive content (verified by full read):
- **Section 1 — Introduction.** Agave syrup as a vegan post-1990 sweetener from *Agave salmiana* and *A. tequilana*; consumer demand for naturalness; agave plant biology (crassulacean acid metabolism, 55% of species in Mexico).
- **Section 2 — Chemical Analysis.** Analytical methods for sugar profiling: HPLC, LC-ESI-MS, MIR-PCA, NIR, HPAEC-PAD, TLC, ¹H-NMR, ¹³C SNIF-NMR. Table 1 (4 pages) reports fructose/glucose/sucrose/kestose/fructan ratios from cited literature — sugar composition only, no metals.
- **Section 3 — Food Industry Applications and Sustainability.** Industrial production (40–50% alcohol, 80–100 US proof); tequila/mezcal/sotol/pulque/henequen; bagasse/fibers/leaves as by-products; 7,710,520 tons bagasse 1995–2019; ~700,000 tons CO₂eq emissions in 2014 agave tequila chain (44% agricultural/industrial, 56% inputs/transport); nitrogen-fertilizer contribution. Sustainability framing only, no metals.
- **Section 4 — Quality and Safety Control.** Microbiological parameters cited from Mexican standard SEECO NOM Nmx-Ff-110-Scfi-2008: fungi/yeasts <10 CFU/g, coliforms negative, total count bacteria <100 CFU/g, *E. coli* negative, *Salmonella* spp. negative at 25 g. Adulteration detection via carbohydrate fingerprinting (glucose-fructose-sucrose ratios, FOS profiles). **Microbiological safety only; no metals limits, no metals measurements.**
- **Section 5 — Nutritional Profile and Health Impacts.** Table 2 reports USDA National Nutrient Database (2019) reference values for agave syrup (per 100 g): energy 310 kcal, water 23 g, protein 0.1 g, lipids 0.5 g, carbohydrate 76.4 g, fiber 0.2 g, total sugars 68.0 g, and minerals **Ca 1 mg, Fe 0.09 mg, Mg 1 mg, P 1 mg, K 4 mg, Na 4 mg, Zn 0.01 mg**, plus vitamins (C 17, B1 0.122, B2 0.165, B3 0.689, B6 0.234, folate 30 µg, A 8 RAE, E 0.98, K 22.5 µg) and total polyphenolics 1.292 mg GAE/100 mL. Parallel columns for honey, molasses, maple syrup, carob syrup, HFCS, sucrose. Agavin metabolism, SCFA production, glycemic index 10–27, ~90% fructose, fructose overconsumption / liver fat / cardiovascular concerns.
- **Section 6 — Conclusions.** Calls for more research on AS effects on human metabolism; flags fructose-content concern; nutritional/sustainability framing.

**Why this is out of HMI scope:** The only "mineral" content (Table 2, Section 5) reports **nutritional minerals** (Ca, Fe, Mg, P, K, Na, Zn) cited from the USDA database. None of these are in HMI's 10-analyte certification vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Fe and Zn appear in Table 2 but as essential nutrient values, not as contamination measurements; the values are USDA reference composition data, not primary analytical results from sampled agave syrup units. No Pb, Cd, As (iAs or tAs), Hg (MeHg or tHg), Ni, Al, Cr (Cr or Cr-VI), Sn, Sb, or U is named anywhere in the 16-page document. The "Quality and Safety Control" section (Section 4) addresses microbiological hygiene and adulteration — not metal contamination.

Parallel to the 2026-06-01 MFK_01 PAH-only, MFK_03 phthalates-only, MFK_05 dioxins-only, and MFK_06 physical-safety-only stops: the paper is high-quality work on a legitimate topic (agave syrup chemistry/nutrition) but the topic does not intersect HMI's analyte vocabulary.

**Identity checks (clean — no existing wiki page):**
- DOI grep (`10.3390/ijerph19127022`, `ijerph19127022`): no matches
- Author/title grep (`Saraiva.*Agave`, `agave.*Saraiva`, `agave-syrup-chemical`): no matches against Saraiva (three Saraiva 2021 chromium-speciation pages exist but are different authors and topics — bread/cereals, milk/meat cooking, and a method paper; verified)
- Suggested-handle grep (`KADC_agave-syrup`): no matches

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** The `condiments2_papers/02_Honey_Syrups_Vinegar` folder contains other PDFs that ARE in scope and should not be skipped because of this one stop:
- `Aluminum_contamination_food_EP_2019.pdf` (Al — HMTc analyte)
- `Bassioni_Risk_Assessment_Aluminum_Foil_Food_2012.pdf` (Al — HMTc analyte)
- `EFSA_buffered_vinegar_safety_2022.pdf` (likely regulatory; needs evaluation)
- `Investigation_Element_Migration_Aluminum_Cooking_Pots.pdf` (Al — HMTc analyte)
- `Jackson_arsenic_brown_rice_syrup_EHP_2012.pdf` (iAs/tAs — HMTc analyte; canonical paper)
- `Karavoltsos_trace_metals_balsamic_vinegars_MDPI.pdf` (multi-metal — in scope)
- `Lead_maple_syrup_equipment_contamination_best_practices.pdf` (Pb — HMTc analyte)
- `Naccari_toxic_metals_microelements_honey_2024.pdf` (multi-metal — in scope)

This is a per-paper stop, not a folder-exhaustion stop.

**Recommendation for Karen:** Move the agave syrup PDF to an `out-of-scope/` or `nutritional-context/` pile to keep the folder focused on metals papers. If a future use case calls for documenting agave syrup as an ingredient with reference nutritional values (e.g., for the consumer-app contamination_profile context where "this sweetener is dominantly fructose" matters), the USDA-derived Table 2 numbers can be cited from the USDA database directly without ingesting this review paper, which adds no primary metals data.
