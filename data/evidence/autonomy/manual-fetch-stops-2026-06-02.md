# Manual-fetch ingest stop notes — 2026-06-02

## STOP: KADC_hostynek-maibach-1988-chromium-us-household-bleach — PDF content does not match filename (Kimi download corruption)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/02_Toilet_Bathroom_Descaler/Hostynek_Maibach_1988_Chromium_US_Household_Bleach.pdf`

**Suggested handle:** KADC_hostynek-maibach-1988-chromium-us-household-bleach

**Expected paper (per filename):** Hostýnek JJ, Maibach HI. ~1988. Chromium content of US household bleaches. Plausible venue: *Contact Dermatitis* (Hostýnek & Maibach publish chromium-skin-exposure work there throughout the late 1980s). This would be direct evidence for `metals/chromium`, `metals/cr-vi` (sodium-hypochlorite bleaches can liberate Cr-VI from stainless-steel containers and from contaminated trace-metal inputs), and the household-bleach / toilet-bathroom-descaler / all-purpose-cleaner product pages.

**Actual PDF content:** A single page from *British Medical Journal* Volume 283, 19 September 1981, pages 767–770. The visible articles are:
- "Sex Problems in Practice — Homosexuality: Misconceptions and problems" by Richard Bath and John Sketchley (Cambridge / BLAT Centre for Health and Medical Education)
- "Unemployment in My Practice" by John Wilson (Whitehead, Carrickfergus)
- Short clinical-curio columns ("Sugaring the pill", "Practising the art", "Searching for a practice", "End of the road", "The whole patient", "Injured players")

Zero relationship to chromium, bleach, household cleaners, or Hostýnek/Maibach. Different decade, different journal, different topic. The parent folder name (`Kimi_Agent_Download Corruption Issue`) confirms this PDF was downloaded by the Kimi agent and is known-bad: the file the agent saved at this path is a substitution, not the requested paper.

**PDF metadata:**
- Producer: Apex PDFWriter
- CreationDate: Fri Apr 28 16:56:09 2006 EEST
- Pages: 1
- Page size: 602.88 × 808.8 pts
- File size: 390,083 bytes
- sha256: `880fb6d80cbfb70a4387064028d8b950ee032cca376d47876ac911831174114a`

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out of scope and the expected Hostýnek/Maibach paper has not been ingested):**
- Author grep (`hostynek`, `maibach`) → no matches in `wiki/sources/`.
- DOI grep — no DOI present in the PDF (and the actual content has nothing to do with the expected paper, so its DOI is unknown).
- Cite-key grep (`hostynek1988`, `maibach1988`) → no matches in `wiki/sources/`.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Hostýnek & Maibach ~1988, chromium content of US household bleaches — should be re-fetched from the original journal / PubMed. Likely candidates are *Contact Dermatitis* 1988 or *Food Chem Toxicol* 1988; Hostýnek's bibliography on chromium in consumer products is well indexed in PubMed under his last name.
- Move this PDF to a `_corrupted-substitutions/` lane (as proposed in the earlier Jang_2024 and Vilaplana_1987 stop entries) so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks.
- This is the third Kimi-corruption case logged in this folder today (Jang_2024, Vilaplana_1987, now Hostýnek/Maibach_1988). The systemic fix is the post-fetch title-block-vs-filename author/year sanity check at the Kimi download pipeline level, not at ingest time. Until that lands, the entire `Kimi_Agent_Download Corruption Issue/` directory should be treated as a quarantine lane that the manual-fetch ingester skips by default.

## STOP: MFK_applsci-13-02863 (mozdzer2023-sludge-ash-granulates-crop-metals) — already ingested today, no defect to fix

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/applsci-13-02863.pdf`

**Suggested handle:** MFK_applsci-13-02863

**Existing page:** `wiki/sources/mozdzer2023-sludge-ash-granulates-crop-metals.md`

**Citation:** Możdżer E, Gamrat R. The Effect of Sludge-Ash Granulates on the Content and Uptake of Heavy Metals by Winter Rape Seeds and Triticale. Appl Sci. 2023;13(5):2863. DOI: 10.3390/app13052863. CC BY 4.0.

**Reason for stop:** The page was already ingested earlier today by a sibling daemon tick (commit `9bbe50b`, `updated: 2026-06-02`). The current page is comprehensive, post-2026-05-14, and contains:

- Frontmatter with cite-key, raw_handle, raw_path, DOI, license, evidence_tier A, all six metals (Cd, Cr, Cu, Ni, Pb, Zn), sample_population narrative, matrices array, jurisdiction PL.
- Full Key numbers tables for waste inputs, four granulate recipes, baseline soil, rape-seed concentrations (control plus treatment ranges and granulate-IV maxima), triticale-grain concentrations, uptake ranges for both crops, and the Table 9 content/uptake Pearson correlations.
- Complete Methods section (granulate composition, dosing by nitrogen content, soil prep, AAS analysis, IAEA-V-10 reference material, two-factor ANOVA + Tukey at p=0.05).
- Implications stanzas for certification / courses / app.
- Verification notes that already document both paper-internal anomalies: the title says "winter rape" while methods describe spring rape (*Larisa* cv.) and spring triticale (*Milikaro* cv.), and the Table 6 Ni dose-mean row does not match the visible treatment cells.

**Identity checks:**
- DOI grep (`10.3390/app13052863`) → single hit: existing page.
- raw_handle grep (`applsci-13-02863`) → single hit: existing page.
- Cite-key grep (`mozdzer|gamrat` in `wiki/sources/`) → single hit: existing page. No collisions.

**Malformed-CSV entry:**
```
mozdzer2023-sludge-ash-granulates-crop-metals,wiki/sources/mozdzer2023-sludge-ash-granulates-crop-metals.md,advisory,,,products;ingredients,Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible.
```

Severity is `advisory`, not `blocking` or `strict`. The missing fields are `products` and `ingredients`. This is the same advisory boilerplate hundreds of source pages carry when their frontmatter has empty `products: []` / `ingredients: []`. It is not a defect, and re-triggering ingest on every `advisory` malformed entry would loop forever on the same pages.

**Why `products: []` and `ingredients: []` are intentional here, not a defect:**

The source is a controlled pot-trial measuring heavy-metal uptake into rape SEED tissue and triticale GRAIN tissue under industrial-sludge-derived fertilizer granulates. The page body explicitly states (in the Implications and Verification notes):

> "Do not translate rape seed values into rapeseed-oil values; most seed metals partition away from refined oil during oil extraction."

> "This source should not be pooled as representative consumer-market rapeseed, rapeseed oil, wheat, or grain occurrence evidence. It is a controlled pot trial using waste-derived fertilizer granulates and dry plant-tissue measurements."

If I added `ingredients: ["[[ingredients/rapeseed-oil]]"]`, the routing layer would auto-fan this source as `direct_evidence` to `wiki/ingredients/rapeseed-oil.md`, which is exactly the routing the page authors deliberately avoided. There is no `wiki/ingredients/triticale.md` (closest is `wheat.md`, but triticale is a wheat-rye hybrid and the seed-tissue values are still pot-trial, not market). Adding ingredient or product slugs to route this source would be a Part 2 wiki/HMTc-drift failure mode: it would inflate a controlled-experiment fertilizer-effect study into apparent consumer-market evidence.

The `matrices: [sludge-ash-granulates, industrial-sewage-sludge, lignite-ash, rape-seed, triticale-grain, pot-trial]` already captures the routeable scope. The empty `products: []` and `ingredients: []` correctly signal "no consumer-market product or ingredient page should pull this source as direct evidence."

**Action taken:** No ingest, no commits, no audit-queue append. The wrapper proceeds to next PDF.

**Recommendation for Karen / future system work:** The skill's "in malformed" trigger should likely filter on `severity != advisory` rather than treating every advisory entry as a re-ingest candidate. Otherwise the daemon will repeatedly re-trigger ingest on hundreds of structurally-correct pages whose only "defect" is intentional empty products/ingredients (which is the correct schema for many agronomy / pot-trial / soil-to-plant-transfer / fertilizer-input sources, plus regulatory documents that don't measure a specific product). Suggested fix: in the next bump of `.claude/skills/ingest-next-manual-fetch-pdf/SKILL.md` Phase 1 step 1, replace "the most recent routing audit reports as malformed" with "the most recent routing audit reports as malformed with severity `blocking` or `strict`."

## STOP: MFK_applsci-13-03246 (rusanescu2023-mswi-fly-ash-agriculture) — already ingested today, no defect to fix

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/applsci-13-03246.pdf`

**Suggested handle:** MFK_applsci-13-03246

**Existing page:** `wiki/sources/rusanescu2023-mswi-fly-ash-agriculture.md`

**Citation:** Rusănescu CO, Rusănescu M. Application of Fly Ash Obtained from the Incineration of Municipal Solid Waste in Agriculture. Appl Sci. 2023;13(5):3246. DOI: 10.3390/app13053246. MDPI, CC BY 4.0. Received 27 January 2023; revised 24 February 2023; accepted 1 March 2023; published 3 March 2023. Polytechnic University of Bucharest + Valplast Industrie Bucharest, Romania. Type: Review.

**Reason for stop:** The page was already ingested earlier today by a sibling daemon tick (commit `0abe8c7`, "ingest June 2: rusanescu2023-mswi-fly-ash-agriculture", `updated: 2026-06-02`). I read the full PDF (all 17 pages, including all six tables and the references list) and spot-checked every numerical claim in the existing page against the source. Zero defects found:

- Frontmatter: cite-key, raw_handle, raw_path, DOI, license, evidence_tier A, twelve metals (tAs, Cd, Co, Cr, Cu, tHg, Mn, Mo, Ni, Pb, Se, Zn), matrices `[municipal-solid-waste-incineration-fly-ash, agricultural-soil, fly-ash-amended-soil]`, jurisdictions `[global]`. ASCII-transliterated authors match the byline (Rusănescu → Rusanescu).
- Key numbers: Table 1 fly-ash ranges (As 2.3–6300, Cd 0.7–130, Pb 3.1–5000, etc.) match. Table 2 oxide percentages match. Table 3 onion/ash dose-response (pH 7.0→8.2, EC 210→346, WHC 33.68→42.93) matches. Table 4 fly-ash-percent series (soil-only pH 6.65 / EC 281; fly-ash-only pH 7.56 / EC 600; 50% fly ash pH 6.96 / EC 358) matches. Table 5 soil-elemental endpoints (Ni 5.80→15.37, Pb 8.3→20.00, Cd 0.0→0.06, Cr 0.0→1.89, K 3900→10150, P 45.5→70.0) all match. Table 6 (fly ash bulk density <1.0 vs soil 1.33; WHC 35–40% vs <20%; porosity 50–60% vs <25%) matches.
- Methods: correctly identifies the paper as a narrative review with no primary sampling, no search strategy, no quality scoring; tables explicitly labeled as compiled from cited references.
- Speciation discipline: total elements only (tAs, tHg) with explicit caveat in Verification notes that the source uses total symbols without speciation.
- Verification notes: already flags the Table 5 heading typo ("t/h" vs surrounding "t/ha" text), the blank-unit cells in Table 1 for Hg/Mn/B/Se, and the secondary-context nature of the review.
- Implications: correctly says "This source should not enter product or ingredient occurrence pools" — the soil-amendment / supply-chain framing is the only routeable scope.

**Identity checks:**
- DOI grep (`10.3390/app13053246`) → single hit: existing page.
- raw_handle grep (`raw_handle: MFK_applsci-13-03246`) → single hit: existing page.
- Cite-key grep (`rusanescu` / `rusănescu`) → single hit: existing page. No collisions.

**Malformed-CSV entry:**
```
rusanescu2023-mswi-fly-ash-agriculture,wiki/sources/rusanescu2023-mswi-fly-ash-agriculture.md,advisory,,,products;ingredients,Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible.
```

Severity is `advisory`, not `blocking` or `strict`. The missing fields are `products` and `ingredients`. This is the same advisory boilerplate the mozdzer2023, eu-2023-915, fda-tds, cfs2013 and many other source pages carry when their frontmatter has empty `products: []` / `ingredients: []`. It is not a defect, and re-triggering ingest on every advisory malformed entry would loop indefinitely on the same pages.

**Why `products: []` and `ingredients: []` are intentional here, not a defect:**

The source is a narrative review of MSW-incineration fly ash applied as a soil amendment. Its numeric content is (a) waste-stream composition ranges compiled from cited literature and (b) controlled pot/field trials of fly-ash-amended soil reported as soil elemental changes and crop yield/biomass changes — not as consumer-product or ingredient contamination measurements. The paper does not measure metals in any consumer food, supplement, or personal-care product.

If I added crop slugs (e.g., `ingredients: ["[[ingredients/rice]]", "[[ingredients/wheat]]", "[[ingredients/onion]]"]`) drawn from the review's narrative crop references, the routing layer would auto-fan this source as `direct_evidence` to those ingredient pages — exactly the routing the existing page's Implications section deliberately blocks: "Do not convert the review's crop-yield or soil-amendment summaries into food concentration benchmarks." Adding ingredient or product slugs to route this source would be a Part 2 wiki/HMTc drift failure mode: inflating a soil-amendment-effect review into apparent consumer-market ingredient-contamination evidence.

The `matrices: [municipal-solid-waste-incineration-fly-ash, agricultural-soil, fly-ash-amended-soil]` already captures the routeable scope correctly. The empty `products: []` and `ingredients: []` correctly signal "no consumer-market product or ingredient page should pull this source as direct evidence."

**Action taken:** No ingest. No merge-enhance. No commits. No audit-queue append. The wrapper proceeds to the next PDF.

**Recommendation for Karen / future system work:** Same as the mozdzer2023 stop note above — the skill's "in malformed" trigger should filter on `severity != advisory`. The current behavior repeatedly re-fires on structurally-correct pages whose only "defect" is an intentionally-empty `products` / `ingredients` array (the correct schema for soil-amendment / fertilizer-input / pot-trial / agronomy / regulatory-context sources). Suggested fix to `.claude/skills/ingest-next-manual-fetch-pdf/SKILL.md` Phase 1 step 1: replace "the most recent routing audit reports as malformed" with "the most recent routing audit reports as malformed with severity `blocking` or `strict`."

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

## STOP: KADC_11-celtic-sea-salt-heavy-metals-analysis — Part 12 brand firewall + inadequate methodology

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/11_Celtic_Sea_Salt_heavy_metals_analysis.pdf`

**Suggested handle:** KADC_11-celtic-sea-salt-heavy-metals-analysis

**Document type:** Brand-published one-page consumer-facing analysis sheet from Selina Naturally™ ("home of Celtic Sea Salt® Brand"), Four Celtic Drive, Arden, NC 28704, www.celticseasalt.com. Header reads "Here is a full analysis of the elements that comprise **Light Grey Celtic Sea Salt® Brand**." Single 71-element table from non-destructive X-ray emission analysis of one brand's product, presented as % of original sample. No author, no journal, no DOI, no peer review, no methodology section beyond "non-destructive x-ray emission analysis," no sample size, no replicate count, no date of analysis, no third-party lab name disclosed beyond "third-party laboratory that specializes in analyzing sea salts and ocean water."

**Reason for stop — two independent reasons, either sufficient:**

**(1) Part 12 hard brand firewall.** Per CLAUDE.md Part 12: "Brand-specific lab results, COAs, and internal test data do not live in this wiki ... There is no `wiki/brands/` directory ... do not create brand pages and do not list brand-by-brand values in the wiki ... do not reproduce their brand-level tables into the wiki." This document is a single-brand single-product self-published QA datasheet — exactly the artifact class Part 12 excludes. Unlike Consumer Reports / HBBF / FDA-recall sources, which can be cited as third-party category-level signals with brand names stripped, this document has *only* brand-attached data: every cell is a measurement on Light Grey Celtic Sea Salt® Brand. Stripping the brand name leaves no category-level signal — it leaves one unidentified salt sample of unknown sea origin, which is not generalizable to "sea salt" as an ingredient. The brand-firewall call is not the narrow ask-Karen case (Part 12 final paragraph) because the source is not a category page's only available evidence; the corpus already contains multi-brand sea-salt and salt-analyte literature.

**(2) Methodology inadequate for trace-metal contamination assessment.** Non-destructive X-ray fluorescence (XRF) emission analysis has detection limits orders of magnitude higher than the ICP-MS / ICP-OES / GFAAS methods used in the peer-reviewed sea-salt metals literature. The document's reported detection limits illustrate this:
- Pb: <0.00004% = **<400 ppb** (vs. EU/Codex limit 1,000 ppb for salt; vs. ICP-MS literature detection limits ~0.1–10 ppb)
- Cd: <0.0035% = **<35,000 ppb** (vs. peer-reviewed sea-salt literature where typical Cd values are 1–50 ppb; the XRF limit is ~1,000× above food-safety-relevant levels)
- Hg: <0.000001% = <10 ppb
- As: <0.0001% = <1,000 ppb
- Ni: <0.0001% = <1,000 ppb

Reporting "non-detect at <35,000 ppb Cd" for a sea-salt sample is not a contamination measurement — it is a methodological limitation. A wiki page that ingested this source would have to record contamination values as "below detection," which is uninformative when the detection floor is two-to-three orders of magnitude above the values reported in the legitimate literature. The document also conflates "below XRF detection" with "non-detectable" / "Codex-compliant" in the prose, which would propagate as a wiki claim if ingested.

**Identity checks (clean — no existing wiki page):**
- "celtic.{0,3}sea.{0,3}salt" grep against `wiki/sources/`: no matches
- "selina.{0,3}naturally" grep against `wiki/sources/`: no matches
- "KADC_11-celtic" grep against `wiki/sources/`: no matches

**Action taken:** No ingest. No commits. No audit queue append. No source page written. Wrapper proceeds to next PDF in folder.

**Folder note — `condiments2_papers/04_Chocolate_Seasonings_Salt`:** This folder contains in-scope peer-reviewed metals papers (Hands 2024 dark chocolate, Chowdhury 2023 Bangladesh spices, Villa 2014 Brazil chocolates, Moroccan spices 2025) and in-scope regulatory documents (BfR MEAL Study, EU Cadmium Reg 488/2014, EU Cadmium Chocolate Contaminants Catalogue 2019, CBI EU Requirements Cadmium Cocoa 2023). The As You Sow 2022 Expert Investigation is a brand-by-brand testing report; whether it can be ingested depends on whether category-level summary signal can be extracted without reproducing brand tables (likely yes, but separate evaluation). This per-paper stop does not affect the other PDFs in the folder.

**Recommendation for Karen:** Move the Celtic Sea Salt PDF to a `brand-marketing/` or `out-of-scope/` pile alongside any other brand-published QA datasheets that may surface during Kimi-folder drain. These artifacts are useful for the future private brand-intelligence wiki (CLAUDE.md Part 26) but cannot enter the public wiki under any path.

## STOP: codex-cxs-193-1995 — byte-identical duplicate already ingested + audited today

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/Codex_CXS_193_Contaminants_Food_Feed.pdf`

**Suggested handle:** KADC_codex-cxs-193-contaminants-food-feed

**Reason for stop:** SHA-256 byte-identical duplicate of the PDF already ingested under the existing wiki page `wiki/sources/codex-cxs-193-1995.md`.

**Identity verification:**
- SHA-256 of the 05_Snacks PDF: `5adf44c2d50c2cf6fa2f8cafac9db379fda930f6337c2d8dfe0e2fcddf8534dc`
- SHA-256 of `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/09_Codex_CXS_193_1995.pdf` (the file referenced by the existing page's `raw_path`): `5adf44c2d50c2cf6fa2f8cafac9db379fda930f6337c2d8dfe0e2fcddf8534dc` — identical.
- Existing page sha256 field matches: `5adf44c2d50c2cf6fa2f8cafac9db379fda930f6337c2d8dfe0e2fcddf8534dc`.
- Cite-key grep `codex-cxs-193`: 34 hits across wiki/sources/ (many other source pages cross-cite Codex 193); direct existing page is `codex-cxs-193-1995.md`.

**Existing-page status (no work needed):**
- `updated: 2026-06-02` (today).
- Page received a full merge-enhance pass today against this exact PDF — Cd/Pb/As/Hg/MeHg/Sn schedules all populated with both 2009-snapshot values and current-standard CCCF11–CCCF17 deltas enumerated.
- Page already received a fresh-context audit subagent pass today; verdict REVISE; all ❌ findings applied; final disposition `audited-revised`.
- `raw_path` already populated and points to the 03_Condiments copy of this byte-identical PDF.
- Routing: page already routes cleanly; not in malformed/unresolved.

**Per skill v2.0 "next" rule:** a PDF is "next" only if (a) no existing wiki source page, (b) existing page `updated:` before 2026-05-14, or (c) routing-audit reports it malformed. None of those hold. The existing page is post-2026-05-14 clean (today) and not in malformed. This PDF is a SKIP — Kimi-folder structure contains the same Codex regulatory document filed under both 03_Condiments and 05_Snacks_Canned_Prepared as parallel context references; only one copy needs to back the wiki source page.

**Action taken:** No ingest. No merge-enhance. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Recommendation for Karen:** This is the expected case when Kimi folder structure files the same regulatory standard in multiple condiments2_papers subfolders for cross-reference convenience. No action needed; future ticks will pass through this PDF as already-ingested. If desired, a one-time cleanup pass could move the duplicate to a `_duplicates/` pile, but it is harmless where it is — the SHA-256 check is the deduplication mechanism.

## STOP: KADC_eu-2023-915-maximum-levels-contaminants-food — true byte-identical duplicate of already-recorded near_duplicate; canonical page audited PROMOTE today

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/EU_2023-915_Maximum_Levels_Contaminants_Food.pdf`

**Suggested handle:** KADC_eu-2023-915-maximum-levels-contaminants-food

**Citation:** European Commission. Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006. Official Journal of the European Union, OJ L 119, 5.5.2023, pp. 103–157.

**Reason for stop:** True duplicate. The candidate PDF's sha256 is `b382ed1dfeb8bb640fc5b2d2c931ddba76966b061256120ec1dc2dce025f2515`, which is byte-identical to a copy already recorded in `near_duplicates` on the canonical wiki page [[wiki/sources/eu-2023-915-contaminants-maximum-levels]] (the previously-recorded path is `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/10_EU_2023_915_contaminants.pdf` — same sha256). The Kimi agent filed the same Official Journal PDF in two subfolders of the condiments2 corruption-issue folder tree.

**Identity checks:**
- DOI: regulation has `no_doi_assigned: true`; CELEX `32023R0915` and ELI `eli/reg/2023/915` both resolve to the canonical page.
- raw_handle / cite-key grep (`eu-2023-915`, `2023-915`, `2023/915`): canonical page hit (`eu-2023-915-contaminants-maximum-levels`) plus the narrower lead-only page (`eu2023-915-lead-infant-young-child-foods`); no other matches.
- sha256 `b382ed1d...`: already present in canonical page's `near_duplicates` block.

**Canonical-page state:**
- `updated: 2026-06-02` (post-2026-05-14 clean threshold per skill Phase 1 step 1)
- Not in `data/evidence/routing_unresolved.csv`
- Not in `data/evidence/routing_malformed.csv`
- `data/evidence/audit-queue.csv` row for this cite-key: `status=audited-promote`, `audit_verdict=PROMOTE`, `audit_applied_at=2026-06-02` (earlier-today autonomous merge-enhance + audit cycle)

Per skill Phase 1 step 1: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Both conditions are satisfied.

**Action taken:** Metadata-only enhancement committed (`46367af`): added the second `05_Snacks_Canned_Prepared` filesystem path to the canonical page's `near_duplicates` block (same sha256, second entry) and appended a one-paragraph Verification-notes update describing the second-copy provenance. No claim, slug, value, exposure number, HMTc-firewall, or Key-numbers change. No audit subagent cycle spawned because the page was already audited PROMOTE today and no body or evidence-bearing frontmatter changed. No audit-queue.csv row appended for the same reason (the existing row already covers this cite-key with PROMOTE status; appending a second row would double-count the audit verdict).

**Wrapper observation (not blocking):** the manual-fetch wrapper's "next candidate" selection apparently does not consult existing pages' `near_duplicates` sha256 lists before passing a PDF to this skill. A wrapper enhancement that pre-filters candidate PDFs against the set of recorded `near_duplicates` sha256s across `wiki/sources/*.md` would prevent further byte-identical duplicate ticks (this candidate is the second Kimi-folder duplicate encountered today on the same regulation PDF). Not in scope for this per-PDF skill cycle.

## STOP: KADC_fda-tds-fy2018-2020-elements-report — byte-identical duplicate of already-ingested canonical FDA TDS PDF

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/FDA_TDS_FY2018-2020_Elements_Report.pdf`

**Suggested handle:** KADC_fda-tds-fy2018-2020-elements-report

**Citation:** U.S. Food and Drug Administration. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data.* July 2022, 83 pp. Center for Food Safety and Applied Nutrition / Office of Food Safety. Public-domain US Government work. Access: https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results

**Reason for stop:** True duplicate. The candidate PDF's sha256 is `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef`, byte-identical to the canonical raw_path of the existing wiki source page [[wiki/sources/fda-tds-elements-2018-2020]] (`raw/reports/2022_07_14_TDSElementsReport_1436.pdf`, same sha256). The Kimi agent filed the same July 2022 FDA TDS narrative report PDF in the `05_Snacks_Canned_Prepared` subfolder of the corruption-issue folder tree as a cross-reference copy. Note: the parallel `03_Condiments/07_FDA_TDS_FY2018-2020_elements.pdf` copy is a DIFFERENT sha256 (`f4c28e22c3bbeb083b9be60303b6ee20d141f29d9cd2c6d9b7630c0df8fa11a3`) — that file is the printed summary-statistics supplement and is recorded on the companion CSV page [[wiki/sources/fda2022-tds-elements-fy2018-fy2020]] as `supplement_pdf_path`. Only this 05_Snacks copy is byte-identical to the canonical narrative report.

**Identity checks:**
- DOI: report has `no_doi_assigned: true` (US-government work, no DOI minted); FDA TDS results landing URL `https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results` resolves to the canonical narrative page; the FY2018-FY2020 results page (FDA 2022c) is the dataset destination.
- raw_handle / cite-key grep (`fda-tds-elements`, `fda-tds-fy2018`, `FY2018-2020 Elements`, `TDSElementsReport_1436`): canonical page hit (`fda-tds-elements-2018-2020`) plus the CSV companion (`fda2022-tds-elements-fy2018-fy2020`) plus the analytical-key companion (`fda2022-tds-elements-analytical-key`); the three pages form a near-duplicate trio explicitly recorded in each other's `near_duplicates` blocks. No other matches.
- sha256 `ba1f8c1e...`: identical to canonical `raw_path` sha256; now also recorded in the canonical page's new `duplicate_filesystem_copies` block (commit `c6f2117`).

**Canonical-page state:**
- `updated: 2026-06-02` (post-2026-05-14 clean threshold per skill Phase 1 step 1; bumped today by the metadata-only filesystem-copy enhancement)
- Not in `data/evidence/routing_unresolved.csv`
- Not in `data/evidence/routing_malformed.csv`
- Last full audit cycle: 2026-05-20 audit-subagent pass; verdict REVISE; four findings applied (one ⚠️ false positive rejected); page in a known-clean state since.

Per skill Phase 1 step 1: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Both conditions are satisfied.

**Action taken:** Metadata-only enhancement committed (`c6f2117`): added a `duplicate_filesystem_copies` block to the canonical page frontmatter recording the second filesystem path + sha256 + note, and appended a one-paragraph Verification-notes update describing the second-copy provenance. Schema-clean: the existing wikilink-form `near_duplicates` field (which holds wikilinks to the two companion source pages) was preserved as-is; `duplicate_filesystem_copies` is a separate field for byte-identical filesystem copies of the same source file, with distinct semantics from `near_duplicates`. No claim, slug, value, exposure number, HMTc-firewall, or Key-numbers change. No audit subagent cycle spawned because no body or evidence-bearing frontmatter changed. No audit-queue.csv row appended for the same reason (the existing row already covers this cite-key with REVISE-applied status; appending a second row would double-count the audit verdict).

**Wrapper observation (not blocking):** mirrors the EU 2023/915 stop note immediately above. The manual-fetch wrapper's "next candidate" selection still does not consult sha256 dedup against either the canonical `raw_path` `sha256:` field or the new `duplicate_filesystem_copies` block. A wrapper enhancement that pre-filters candidate PDFs against both fields across `wiki/sources/*.md` would prevent further byte-identical duplicate ticks (this is the third Kimi-folder byte-identical duplicate encountered today: Codex CXS 193, EU 2023/915, and now FDA TDS FY2018-FY2020 Elements report — all three filed in `05_Snacks_Canned_Prepared` as cross-reference copies). Not in scope for this per-PDF skill cycle.


## STOP: KADC_hongkong-cfs-1st-hktds-metallic-contaminants — byte-identical duplicate of already-ingested page

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/HongKong_CFS_1st_HKTDS_Metallic_Contaminants.pdf`

**Suggested handle:** KADC_hongkong-cfs-1st-hktds-metallic-contaminants

**Citation:** Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong SAR. *The First Hong Kong Total Diet Study: Metallic Contaminants* (Report No. 5 of the TDS series). January 2013.

**Reason for stop:** Byte-identical duplicate of the canonical source page `wiki/sources/cfs2013-hktds-metallic-contaminants.md`. Three-axis identity-check evidence:

- DOI: report has `no_doi_assigned: true` (HK government work, no DOI minted).
- raw_handle / cite-key grep (`HongKong_CFS_1st_HKTDS`, `HKTDS`, `1st Hong Kong Total Diet Study`, `First Hong Kong Total Diet Study`): canonical page hit (`cfs2013-hktds-metallic-contaminants`) plus the inorganic-arsenic companion (`cfs2012-hktds-inorganic-arsenic`) and the unrelated baby-bottles page (`cfs2012-baby-bottles-tableware`); the two HKTDS reports form a near-duplicate pair already cross-linked via `near_duplicates`/`related_sources`. No other matches.
- sha256 `f87da014f81ceae5a964f8df6b5b7274bb2da1c805a1f7466cc27359b51d1f6c`: identical to the canonical raw_path PDF at `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`; now also recorded in the canonical page's new `duplicate_filesystem_copies` block (commit `1e52d64`).

**Canonical-page state:**
- `updated: 2026-06-02` (post-2026-05-14 clean threshold per skill Phase 1 step 1; bumped today by the metadata-only filesystem-copy enhancement; pre-bump value was 2026-05-20)
- Not in `data/evidence/routing_unresolved.csv`
- Not in `data/evidence/routing_malformed.csv`
- Last full audit cycle: 2026-05-20 audit-subagent pass; verdict PROMOTE; three ⚠️ findings (Appendix I Table A item-level Al ranges) applied as a sourcing-clarification wording revision; the underlying numbers were verified correct against Tables 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1 and Appendix I Table A.

Per skill Phase 1 step 1: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Both conditions are satisfied.

**Action taken:** Metadata-only enhancement committed (`1e52d64`): added a `duplicate_filesystem_copies` block to the canonical page frontmatter recording the second filesystem path + sha256 + note, and appended a one-paragraph Verification-notes update describing the second-copy provenance. Schema-clean: the existing wikilink-form `near_duplicates` field (which holds the wikilink to the inorganic-arsenic companion source page) was preserved as-is; `duplicate_filesystem_copies` is a separate field for byte-identical filesystem copies of the same source file, with distinct semantics from `near_duplicates`. No claim, slug, value, exposure number, HMTc-firewall, or Key-numbers change. No audit subagent cycle spawned because no body or evidence-bearing frontmatter changed. No audit-queue.csv row appended for the same reason (the existing row already covers this cite-key with PROMOTE-applied status; appending a second row would double-count the audit verdict).

**Wrapper observation (not blocking):** mirrors the Codex CXS 193, EU 2023/915, and FDA TDS FY2018-FY2020 stop notes above. The manual-fetch wrapper's "next candidate" selection still does not consult sha256 dedup against either the canonical `raw_path` `sha256:` field or the new `duplicate_filesystem_copies` block. This is now the fourth Kimi-folder byte-identical duplicate encountered today, all four filed in `condiments2_papers/05_Snacks_Canned_Prepared` as cross-reference copies. A wrapper enhancement that pre-filters candidate PDFs against both fields across `wiki/sources/*.md` would prevent further byte-identical duplicate ticks. Not in scope for this per-PDF skill cycle.

## STOP: KADC_basketter-1993-ni-co-cr-consumer-products-acd — Kimi-folder PDF content/filename mismatch (download corruption)

**PDF (as filed):** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor/Basketter_1993_Ni_Co_Cr_Consumer_Products_ACD.pdf`

**Suggested handle (per wrapper):** KADC_basketter-1993-ni-co-cr-consumer-products-acd

**File-vs-content mismatch:** The filename promises Basketter DA, 1993, on nickel/cobalt/chromium in consumer products and allergic contact dermatitis (the original-source filename used across the ECETOC and post-1992 ACD literature; the 1993 Basketter et al. consumer-product nickel-release paper is a known citation in the household/jewellery metals corpus). The actual PDF content is entirely unrelated:

- **Title:** "Interactions between dendritic cells and CD4⁺ T cells during *Plasmodium* infection"
- **Authors:** Carlos Ocaña-Morgner, Kurt A Wong, Ana Rodriguez
- **Affiliation:** NYU School of Medicine, Department of Medical Parasitology; Dresden University of Technology Institute of Physiological Chemistry
- **Journal:** Malaria Journal 2008, 7:88
- **DOI:** 10.1186/1475-2875-7-88
- **License:** Open Access, CC BY 2.0 (BioMed Central)
- **Topic:** Mouse malaria immunology — DC/CD4⁺ T-cell interactions, MHC-I vs MHC-II antigen presentation, OVA/LACK peptide hybridoma assays, CFSE/CD11a/CD62L flow-cytometry readouts, *P. yoelii* 17 XNL blood-stage infection
- **Verified by full read:** pp. 1–5 (title, abstract, methods, Figures 1–2 with full captions) and pp. 9–11 (Figure 5, conclusions/abbreviations/references). Zero mentions of heavy metals, allergic contact dermatitis, nickel, cobalt, chromium, jewellery, consumer products, dermal patch testing, or any related HMI-scope topic. Whole 11-page document is the malaria immunology paper.

**PDF sha256:** `d45519c9a15bf64729a3fcc9cc1152c04aab1690760a74a0f22f5c4015dfadb1`

**Identity checks (clean — no existing wiki page either for the filename's claimed paper or for the actual PDF content):**
- sha256 grep `d45519c9...` against `wiki/sources/`: no matches (not recorded as `raw_path`, not in any `near_duplicates` or `duplicate_filesystem_copies` block)
- DOI grep `10.1186/1475-2875-7-88` and author grep `Ocaña-Morgner` / `ocana-morgner`: no matches (correctly absent — the malaria paper is out of HMI scope and should not be ingested even if it were correctly labeled)
- `Basketter` grep across `wiki/sources/`: two hits, both incidental citations in unrelated cosmetics papers (`mercan2024-istanbul-toy-makeup-14-elements.md`, `kicinska2025-cosmetics-online-market-heavy-metals.md`). Neither hit corresponds to a Basketter-authored source page. The 1993 Basketter consumer-products Ni/Co/Cr ACD paper itself has no wiki source page yet.
- Cite-key grep `basketter-1993`, `basketter1993`, `KADC_basketter`: no matches.

**Reason for stop — three independent reasons, any sufficient:**

**(1) Content-vs-filename mismatch is a data-integrity issue.** Per skill stop conditions: "Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern." The PDF byte-content does not deliver the paper the filename promises. Ingesting under the suggested handle `KADC_basketter-1993-ni-co-cr-consumer-products-acd` would create a wiki source page whose cite-key, frontmatter authors/year/DOI, and `raw_path` would all be a lie — the page would be Basketter-named but Ocaña-Morgner-content. Future provenance checks (DOI grep, sha256 grep) would silently match the wrong artifact. This is exactly the failure mode the v2.0 skill's three-axis identity check exists to prevent at the ingest boundary, not after the fact.

**(2) Actual PDF content is out of HMI scope.** Even if the filename were corrected to reflect the real content (e.g., `KADC_ocana-morgner-2008-dc-cd4-plasmodium-yoelii`), the paper is mouse-model malaria immunology with no measurement of heavy metals in food, personal-care products, consumer products, or any HMI-relevant matrix. Parallel to the 2026-06-01/02 out-of-scope stops (agave-syrup nutritional review, PAH-only, phthalates-only, dioxins-only, physical-safety-only papers): legitimate work on a legitimate topic that does not intersect HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn).

**(3) Folder context confirms the corruption pattern.** This PDF lives inside `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/`, the folder Karen explicitly named to flag Kimi-agent download failures. The folder name itself documents that some PDFs in this tree have content that does not match their filenames, requiring per-PDF content verification before ingest. This is the first surfaced case in the `household_papers/01_AP_Countertop_Tile_Floor/` subfolder during the autonomous drain; the remaining 7 PDFs in that subfolder may or may not have the same issue and should each be content-verified at ingest time, not trusted on filename alone.

**Action taken:** No ingest. No commits. No audit queue append. No source page written. The PDF is left in place pending Karen's curation decision (see Recommendation below). Wrapper proceeds to next PDF.

**Recommendation for Karen:**

1. **Re-fetch the real Basketter 1993 paper.** The likely target is Basketter DA, Briatico-Vangosa G, Kaestner W, Lally C, Bontinck WJ. *Nickel, cobalt and chromium in consumer products: a role in allergic contact dermatitis?* Contact Dermatitis 1993;28(1):15–25 (or a closely-adjacent Basketter mid-1990s consumer-products Ni/Co/Cr paper). The actual paper is in-scope and should be ingested once the correct PDF is obtained. Pathways: (a) re-trigger the Kimi agent on the correct DOI / Contact Dermatitis 1993 citation; (b) manual fetch from Wiley/CD archive if institutional access is available; (c) drop the correct PDF into `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor/` with the same filename so the next wrapper tick finds it.

2. **Quarantine the mismatched PDF.** Move the current Ocaña-Morgner-content PDF to an `_quarantine/` or `_corrupted-downloads/` pile inside the Kimi corruption-issue folder so it does not re-trigger the wrapper on every tick. Keeping it in place is harmless (this stop note will be hit again on subsequent ticks until the file moves or the wrapper learns to dedup on prior stop-notes by handle), but moving it lets the household folder drain proceed past this slot.

3. **Audit the other 7 PDFs in `household_papers/01_AP_Countertop_Tile_Floor/`.** The corruption-folder name implies *some* PDFs are mismatched; an unknown number may be. Karen may want a one-pass content-verification sweep (each PDF first-page-only spot-check) before committing the autonomous wrapper to the folder. The autonomous wrapper *will* catch content mismatches as it encounters them (this stop is proof of that), but a pre-sweep would let Karen batch-handle the corrupted slots up front.

4. **Wrapper enhancement (deferred, not in scope for this skill cycle).** A pre-ingest content-vs-filename sanity check that reads the PDF's first page, extracts the paper title via simple PDF text extraction, and computes a similarity score against the filename's promised topic would catch this corruption pattern at the wrapper layer rather than per-PDF inside this skill. Implementation cost is non-trivial (filename-to-topic parsing is unreliable) and the per-PDF skill already catches the case correctly; this is documented as an observation, not a recommendation to build now.

**Folder-drain status note:** The `household_papers/01_AP_Countertop_Tile_Floor/` subfolder contains 8 PDFs total. This stop covers slot 1 (Basketter 1993 filename, mismatched content). The remaining 7 (Basketter 2003 millennium update, Danish EPA 2019 detergents survey, ECETOC TR045 1993 Ni/Co/Cr, Gnonsoro 2021 hydroalcoholic gels Côte d'Ivoire, JETIR 2020 detergents Jhansi India, Jang 2024 Korean HCPs 19-metal/75-product, Vilaplana 1987 Spain household-cleaning cobalt) are all topically in-scope on filename evidence and should be content-verified at their own wrapper ticks. None of them shares the `d45519c9...` sha256 of the mismatched PDF on filesystem evidence (different file sizes per `ls -l`), so the corruption appears slot-specific, not folder-wide. But the corruption-folder name says some are corrupted, so per-PDF content verification remains mandatory.

## STOP: MFK_molecules-31-01372 — out of HMI scope (membrane-technology / wastewater-remediation paper)

**PDF:** `raw/Manual Fetch Kimi /June 1 more/molecules-31-01372.pdf`

**Suggested handle (not used):** MFK_molecules-31-01372

**Citation:** Teng J, Lu Z, Ma X, Zhu W, Yang Y, Li P, Xu X. *Organic-Inorganic Co-Modified PVDF Membrane for High-Flux Oil/Water Separation and Simultaneous Multi-Pollutant Removal.* Molecules 2026; 31: 1372. DOI: 10.3390/molecules31081372. CC BY 4.0. Received 7 March 2026; revised 14 April 2026; accepted 16 April 2026; published 21 April 2026. School of Urban Construction, Changzhou University (Changzhou, China); Poseidon (JiangSu) New Material Technology Co. (Changzhou, China).

**Reason for stop:** Paper is a materials-science / wastewater-engineering study describing the fabrication and benchmarking of a novel composite poly(vinylidene fluoride) (PVDF) membrane ("MTSP") synthesized via non-solvent-induced phase separation (NIPS) with co-incorporated tea polyphenols (TP), SiO₂ nanoparticles, and fibrous MXene (Ti₃C₂Tₓ). The membrane is characterized (SEM/EDS/XRD/FTIR/XPS), tested for oil-in-water emulsion separation across kerosene/edible-oil/n-hexane/1,2-dichloroethane feeds at 0.1 bar, cycled five times, soaked at pH 1 and pH 12, and finally challenged against a **simulated complex wastewater** containing emulsified kerosene plus phenol (20 mg/L) plus Fe³⁺/Cu²⁺/Zn²⁺/Cd²⁺ ions at 10 mg/L each.

The paper's "heavy metal removal" data (Figure 5f; 70–86 % single-pass removal: Zn²⁺ ~84–86 %, Fe³⁺ ~84–86 %, Cu²⁺ ~70–72 %, Cd²⁺ ~70–72 %) is **membrane-performance benchmarking against an analyst-spiked test solution**, not a measurement of metals in any food, supplement, personal-care product, or supply-chain matrix that HMI covers. The "edible oil" mentioned in Section 2.3 is one of four oil substrates the membrane filters out of water (alongside kerosene, n-hexane, and 1,2-dichloroethane) — used as a viscosity-comparison test feed, not characterized for metals content as a food ingredient.

Substantive content (verified by reading pp. 1–12 in two read passes — title, abstract, introduction, Sections 2.1 Membrane Characterization, 2.2 Surface Wettability and Anti-Fouling, 2.3 Oil/Water Separation Performance, 2.4 Durability and Stability, 2.5 Multifunctional Pollutant Removal Performance, 2.6 Mechanism, and Section 3.1 Materials / 3.2 Preparation):

- **Topic class:** organic-inorganic hybrid membrane for industrial oily wastewater treatment (PVDF matrix + TP/SiO₂/MXene functional additives). Method-development study.
- **Analytes measured:** the four heavy-metal ions are *adsorbed* by the membrane from a known-concentration spiked test solution; the paper reports **fraction removed** by the membrane, not contamination levels in any consumer matrix.
- **Matrices tested:** oil-in-water emulsions (kerosene, edible oil, n-hexane, 1,2-dichloroethane) and one simulated complex wastewater (kerosene + phenol + Fe/Cu/Zn/Cd). No food, no supplement, no personal-care product, no environmental sample from any real exposure source.
- **HMTc-analyte intersection:** Cd is in HMTc's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn); Fe/Cu/Zn are not. The Cd intersection alone does not bring this paper into scope because the Cd data is a removal-efficiency benchmark on a spiked solution, not a food/PCP contamination measurement.

**Why this is out of HMI scope:** Per CLAUDE.md Part 25 ("Out of scope") and the operating premise that the wiki documents heavy metals **in food, supplements, personal care, and the food supply chain**, a membrane-technology paper benchmarking adsorption against synthetic spiked wastewater contributes no ingredient, product, regulation, or metal-page evidence. No `contamination_profile` value can be derived from a removal-efficiency curve on a laboratory test solution. No exposure number, no consumption-frequency calculation, no regulatory-comparison ratio, no real-world matrix.

Parallel to prior out-of-scope stops in this folder tree (2026-06-01: PAH-only, phthalates-only, dioxins-only, physical-safety-only; 2026-06-02: agave-syrup nutritional review): the paper is high-quality work on a legitimate topic (oily-wastewater membrane remediation) but the topic does not intersect HMI's food/PCP contamination evidence base.

**Identity checks (clean — no existing wiki page; correctly absent because the paper is out of scope):**
- DOI grep (`10.3390/molecules31081372`, `molecules31081372`, `molecules-31-01372`): no matches in `wiki/sources/`
- Author grep (`Teng.*Zekai.*Lu`, `Teng.*Xiangbo.*Ma`, `tammytengjie`): no matches
- Suggested-handle grep (`MFK_molecules-31-01372`, `molecules-31-01372`): no matches

**Action taken:** No ingest. No commits. No audit queue append. No source page written. The PDF is left in place. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Move the PDF to an `out-of-scope/` or `remediation-technology/` pile inside `raw/Manual Fetch Kimi /June 1 more/` to keep the folder focused on food/PCP contamination evidence. Kimi appears to have caught this paper because its abstract names heavy metals + edible oil + tea polyphenols (all HMI-adjacent terms), but the paper's actual contribution is membrane materials science, not contamination measurement. If a future use case calls for documenting membrane-based remediation as a supply-chain intervention (e.g., for the Program Manual's discussion of how industrial wastewater treatment intersects food supply), this paper could be cited from the underlying journal record without ingesting it as a wiki source page — there is no contamination value here to anchor.

## STOP: MFK_s41598-023-46842-1 — out of HMI scope (oil-refining adsorbent characterization paper, no metals-in-food data)

**PDF:** `raw/Manual Fetch Kimi /June 1 more/s41598-023-46842-1.pdf`

**Suggested handle (not used):** MFK_s41598-023-46842-1

**Citation:** Ogbu AI, Ovuoraye PE, Ajemba RO, Dehghani MH. *Functionality and mechanistic parametric study of the potential of waste plantain peels and commercial bentonite for soybean oil refining.* Scientific Reports 2023; 13: 19569. DOI: 10.1038/s41598-023-46842-1. CC BY 4.0. Received 16 June 2023; accepted 6 November 2023; published 10 November 2023. Nnamdi Azikiwe University Awka (Nigeria), Federal University of Petroleum Resources Effurun (Nigeria), Tehran University of Medical Sciences (Iran).

**PDF sha256:** `d815735bdc98c55fcabde5967f6f717bf05e1f8f0dd22c7f6484b18c553fe8a7`

**Reason for stop:** Paper is a chemical-engineering / oil-refining-process feasibility study describing the use of unripe plantain peel ash (UPPA) and commercial bentonite clay as adsorbents for refining crude soybean oil. The measured outputs are **free fatty acid (FFA) removal efficiency** and **colour pigment removal efficiency**, evaluated as functions of adsorbent dosage (1–4 g), contact time (15–35 min), temperature (50–120 °C), and clay-ash composite ratio. Adsorbent characterization is by FTIR, SEM, and XRF. Kinetics modeled by pseudo-first / pseudo-second order; isotherms by Freundlich / Langmuir; thermodynamics by ΔH/ΔG/ΔS. Key reported optima: UPPA achieves 97.73% FFA removal at 50 °C / 20 min / 4 g dosage; bentonite achieves 90% pigment removal at 100 °C / 25 min / 4 g; a 70:30 clay-ash composite drives pigment removal to ~80%.

The paper's **only metals data** is Table 2 (XRF elemental and oxide composition of the UPPA adsorbent itself): Si 52.546%, Al 27.356%, Ca 17.812%, S 0.967%, Cl 0.260%, K 0.234%, Mn 0.257%, Fe 0.205%, Zn 0.143%, Sr 0.052%, Ba 0.026%, Cu 0.023%, Sb 0.020%, **Pb 0.007%**. These values are the elemental composition of the *waste plantain peel ash adsorbent* (the material being added to soybean oil to refine it), not contamination measurements in any food matrix. No Pb, Cd, As, Hg, Ni, Al, Cr, Sn, Sb, or other HMI-vocabulary analyte is measured in the soybean oil before or after refining. The crude soybean oil is characterized in Table 1 by viscosity, specific gravity, density, %FFA, refractive index, and acid value — no heavy metal measurements.

Substantive content (verified by full read pp. 1–19 in three passes — title, abstract, introduction, Materials and Methods (Material Collection and Sampling / Preparation of the UPPA Sample / Characterization / Experimental Procedure / Characterization of the Extracted Soybean Oil / Kinetics and Isotherms Theory / Adsorption Thermodynamics), Results and Discussion (Physiochemical Properties of the Soybean Oil / Characteristic Properties of UPPA / Effect of Process Parameters on Bleaching and Adsorption Functionality / Adsorption Mechanism and Isotherm / Thermodynamics of the Soybean Oil Refining Process), Conclusions, all four Tables, all ten Figures including kinetic/isotherm/thermodynamics traces, Acknowledgements, and the 62-entry References list):

- **Topic class:** waste-biomass valorization + edible-oil refining process engineering. Method-development study aimed at substituting imported commercial bentonite with locally-sourced plantain peel ash to reduce Nigerian vegetable-oil refining costs and recycle plantain agricultural waste.
- **Analytes measured in any food matrix:** zero. The reported metals values in Table 2 are XRF elemental composition of the UPPA adsorbent (the ash, characterized once before use), not measurements of metals in soybean oil. No before/after metals comparison on the oil. No mass balance on metals through the refining process. No leaching study from adsorbent into oil.
- **Matrices tested:** crude soybean oil (degummed + neutralized, sourced from Grand Cereals and Oil Mill Nigeria Limited) treated with UPPA, with bentonite clay, or with clay-ash composites at varying ratios. No commercial product, no consumer-exposure matrix, no environmental sample.
- **HMTc-analyte intersection:** Pb 0.007% and Sb 0.020% in the UPPA adsorbent itself intersect HMI's vocabulary (Pb and Sb are HMI-tracked; Sb specifically is on the HMTc-non-but-HMI-tracked list). However, these are adsorbent-characterization values, not food contamination values. The paper does not measure whether these elements leach from the ash into the refined oil during bleaching, which would be the only HMI-relevant question — and that question is unanswered by this paper.

**Why this is out of HMI scope:** Per CLAUDE.md Part 25 ("Out of scope") and the operating premise that the wiki documents heavy metals **in food, supplements, personal care, and the food supply chain**, a process-engineering paper benchmarking adsorbent performance for FFA and pigment removal contributes no ingredient, product, regulation, or metal-page evidence. No `contamination_profile` value can be derived from FFA/pigment-removal efficiency curves. No exposure number, no consumption-frequency calculation, no regulatory-comparison ratio, no real-world food matrix metals measurement. The adsorbent characterization (Table 2 XRF) is not a wiki-relevant claim about food contamination — it is a precondition for the engineering study, parallel to reporting "the bentonite clay had 7.5% moisture content" or "the ash had specific surface area X m²/g."

Parallel to prior out-of-scope stops in this folder tree (2026-06-01: PAH-only, phthalates-only, dioxins-only, physical-safety-only; 2026-06-02 earlier today: agave-syrup nutritional review, molecules-31-01372 PVDF membrane wastewater remediation): the paper is high-quality work on a legitimate topic (waste-biomass adsorbents for vegetable oil refining) but the topic does not intersect HMI's food/PCP contamination evidence base. The closest direct parallel in this same folder is the earlier MFK_molecules-31-01372 stop — both papers reference heavy metals as part of adsorbent/membrane benchmarking, but neither paper measures metals in any HMI-scope matrix.

**Identity checks (clean — no existing wiki page; correctly absent because the paper is out of scope):**
- DOI grep (`10.1038/s41598-023-46842-1`, `s41598-023-46842-1`): no matches in `wiki/sources/`
- Author/topic grep (`Ogbu`, `plantain.peel.ash`, `UPPA`, `46842`): no matches
- Suggested-handle grep (`MFK_s41598-023-46842-1`): no matches

**Action taken:** No ingest. No commits. No audit queue append. No source page written. The PDF is left in place. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Move the PDF to an `out-of-scope/` or `process-engineering/` pile inside `raw/Manual Fetch Kimi /June 1 more/` to keep the folder focused on food/PCP contamination evidence. Kimi appears to have caught this paper because the abstract names "trace metals" + soybean oil + XRF (all HMI-adjacent terms in isolation), but the paper's actual contribution is FFA/pigment-removal adsorbent engineering, not metals contamination measurement. If a future use case calls for documenting plantain peel ash or bentonite as a vegetable-oil refining intervention (e.g., for the Program Manual's discussion of how oil-refining processes intersect food supply), this paper could be cited from the underlying journal record without ingesting it as a wiki source page — there is no contamination value here to anchor.

**Folder progress note:** This is the second out-of-scope stop in `raw/Manual Fetch Kimi /June 1 more/` today (after molecules-31-01372). The folder originally contained 6 PDFs at session start (14-JSSM-Volume-19-Number-3-March-2024-FINAL, FSN3-13-e71121, PIIS2405844024000914, molecules-31-01372, s41598-023-46842-1, suvarapu2016). Two are now out-of-scope-stopped; the remaining four still need per-PDF content verification at their own wrapper ticks.

## STOP: KADC_basketter-2003-ni-cr-co-safe-levels-millennium — content/filename mismatch (corrupted download)

**PDF (as filed):** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor/Basketter_2003_Ni_Cr_Co_Safe_Levels_Millennium.pdf`

**Suggested handle (not used):** KADC_basketter-2003-ni-cr-co-safe-levels-millennium

**File-vs-content mismatch:** The filename promises Basketter DA et al., 2003, on nickel/chromium/cobalt safe levels for the new millennium (the known 2003 ECETOC/Basketter consumer-product Ni/Cr/Co exposure-threshold paper that the post-1992 ACD literature cites). The actual PDF content is entirely unrelated:

- **Actual title:** "COMMON BILE-DUCT MUCOSA IN CHOLEDOCHODUODENOSTOMY PATIENTS — HISTOLOGICAL AND HISTOCHEMICAL STUDY"
- **Actual authors:** E. Eleftheriadis, V. Tzioufa, K. Kotzampassi, H. Aletras
- **Actual journal/year:** *HPB Surgery* 1988, Vol. 1, pp. 15–20
- **Actual topic:** Histological and histochemical study of common bile-duct mucosa biopsies from nine asymptomatic volunteers 1–12 years after choledochoduodenal anastomosis (CDA), showing hyperplasia, metaplastic goblet cells secreting acid sialomucins, and pyloric-like glands. Staining methods: H&E, Alcian blue (pH 2.5)–periodic-acid-Schiff, high-iron-diamine–Alcian blue (pH 2.5). No metals analysis whatsoever; no analytical chemistry; entirely surgical-pathology content.
- **Mention of any HMI analyte (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn, Sb, U):** zero, across all 6 pages including title, abstract, methods, results, discussion, and 18-entry reference list.

This is the second confirmed content-mismatch in this 8-PDF subfolder. Slot 1 (Basketter 1993 filename) contained an Ocaña-Morgner 2008 malaria paper. Slot 2 (Basketter 2003 filename) contains a 1988 Eleftheriadis bile-duct-surgery paper. The "corruption appears slot-specific, not folder-wide" hypothesis from the Slot 1 stop note is now disproved: both Basketter-labelled PDFs are corrupt, with different mismatched payloads (the Slot 1 payload was malaria immunology; Slot 2 payload is surgical pathology — entirely independent papers). The pattern suggests the corruption is **filename-specific** rather than slot-specific: whatever the Kimi agent did to mishandle the original Basketter downloads may have happened to multiple Basketter filenames. The remaining 5 PDFs (Danish EPA 2019, ECETOC TR045 1993, Gnonsoro 2021, JETIR 2020, Jang 2024, Vilaplana 1987) still need per-PDF content verification before they can be trusted from filename alone.

**Identity checks (clean — no existing wiki page; correctly absent for both the labelled and the actual paper):**
- DOI grep for the labelled Basketter 2003 paper: not run (no DOI to search against because content is wrong paper)
- DOI grep for the actual Eleftheriadis 1988 paper (no DOI assigned — pre-DOI era *HPB Surgery* volume): n/a
- `Eleftheriadis` and `bile-duct` greps across `wiki/sources/`: not run (paper is out of HMI scope by topic — bile-duct surgical adaptation is not heavy-metals work — and ingest would be inappropriate even if labelled correctly)
- `Basketter` grep across `wiki/sources/`: two hits, both incidental citations in unrelated cosmetics papers (`mercan2024-istanbul-toy-makeup-14-elements.md`, `kicinska2025-cosmetics-online-market-heavy-metals.md`). Neither hit corresponds to a Basketter-authored source page. The 2003 Basketter Ni/Cr/Co safe-levels-millennium paper itself has no wiki source page yet — and cannot be added from this PDF.
- Suggested-handle grep (`KADC_basketter-2003`, `basketter2003`): no matches.

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Recommendations for Karen (carry-over from Slot 1, escalated by Slot 2 confirmation):**

1. **Re-fetch the actual Basketter 2003 paper from a reliable source.** Citation candidates include:
   - Basketter DA, Angelini G, Ingber A, Kern PS, Menné T. "Nickel, chromium and cobalt in consumer products: revisiting safe levels in the new millennium." *Contact Dermatitis* 2003; 49(1): 1–7. DOI: 10.1111/j.0105-1873.2003.00149.x — this is the most likely intended target of the filename and is highly in scope for `metals/nickel`, `metals/chromium`, `metals/cobalt`, and household consumer-product matrices.

2. **Quarantine both mismatched PDFs (Slot 1 + Slot 2) into a `_corrupted-downloads/` pile** inside the Kimi corruption-issue folder so neither re-triggers the wrapper on every tick. Both stop notes will be re-hit on subsequent ticks until the files move.

3. **Per-PDF content verification is mandatory for the remaining 5 Basketter-or-not PDFs in this subfolder.** Slot 1 + Slot 2 corruption rate is now 2/2 on the Basketter filenames specifically. The pattern of "Basketter filename, completely-unrelated content" suggests the Kimi agent may have systematically mishandled the Basketter download URLs. None of the remaining 5 PDF filenames begin with "Basketter," so they may be unaffected — but a first-page-only spot-check before full ingest is the safe move for the whole folder going forward.

4. **Wrapper enhancement (still deferred, still observed-not-recommended-now).** A pre-ingest content-vs-filename sanity check at the wrapper layer would catch this corruption pattern up front. The per-PDF skill catches it correctly (this stop is proof), so the wrapper-layer check is an efficiency improvement, not a correctness fix. Implementation cost remains non-trivial (filename-to-topic parsing is unreliable). No action requested.

## STOP: MFK_inorganics-13-00152-v2 — out of HMI scope (water-treatment chemistry review)

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/inorganics-13-00152-v2.pdf`

**Suggested handle:** MFK_inorganics-13-00152-v2

**Citation:** Cepa-López V, Sánchez-Fuente M, Moya A, Mas-Ballesté R. Recent Developments in the Use of Covalent Organic Frameworks for Photocatalytic Water Decontamination. *Inorganics* 2025;13(5):152. DOI: 10.3390/inorganics13050152. CC BY 4.0. MDPI Review article. Published 6 May 2025.

**Identity checks:**
- DOI grep (`10.3390/inorganics13050152`) → no hits in `wiki/sources/`.
- raw_handle grep (`inorganics-13-00152`) → no hits.
- Cite-key glob (`cepa*2025`, `mas-balleste*`) → no hits. No prior ingest.

**Reason for stop:** Out of HMI scope. This is a chemistry/materials-science **review article** about Covalent Organic Frameworks (COFs) as **lab-scale photocatalysts for industrial wastewater treatment**. The wiki's mission per CLAUDE.md Part 1 and Part 25 is the curated corpus of *heavy metals food-and-supply-chain literature* — concentration values in food / supplements / personal care / packaging, exposure assessments, regulatory limits in those matrices, and testing methodology in those matrices. This paper does not contribute to any of that.

What the paper actually covers:
- Section 2: structure–activity relationships in COFs (donor–acceptor units, π-conjugation, bandgap modulation).
- Sections 3–4: COF photocatalysts targeting *organic* pollutants (synthetic dyes — Rhodamine B, methylene blue, methyl orange, Eriochrome black, etc.; pharmaceuticals — tetracycline, sulfamethazine, sulfamethoxazole, acetaminophen; pesticides — diazinon, parathion, imidacloprid, pymetrozine; phenolic compounds — phenol, bisphenol A, 4-chlorophenol).
- Section 4.x heavy-metals subsection: **only** U(VI) and Cr(VI) in industrial wastewater, addressed as model pollutants for COF photoreduction chemistry (TpTt-COF, DQTP-COF, COF-AQ, COF-4-Pd-AO, COFs-OMe, TPB-BT-COF, HDU-26-COF, TAPP-2F-COF). The discussion is mechanistic (·O₂⁻ vs direct electron transfer reducing U(VI)→UO₂ species and Cr(VI)→Cr(III)). No concentration data, no real water samples, no exposure values, no regulatory comparisons. **Data Availability Statement (p. 21):** "No new data were created or analyzed in this study."
- Section 5: concluding remarks on COF scalability challenges (powder processing, building-block cost, microplastic deactivation as future work).

What it does **not** contain:
- No measurements in food, supplements, personal care, packaging, soil-to-crop transfer, or drinking-water-as-consumed.
- No exposure assessments, EDIs, or population intakes.
- No regulatory limits or threshold discussion relevant to any HMI matrix.
- No testing-methodology contribution to the certification stack (ICP-MS / AAS / speciation methods that the HMI testing pages cover).
- No microbiome / metals overlap content for the WikiBiome federation track.
- No HMTc-relevant analyte coverage beyond the four-analyte ceiling (the paper treats Cr-VI and U as photoreduction targets, not as analytes in any food product).

**Brand/firewall posture:** N/A — the paper is not a contamination study and names no consumer products. Methods discuss only academic-lab building blocks and academic citations.

**Recommendation to Karen:** Move this PDF out of the manual-fetch queue. The file appears to have been included by topical keyword overlap ("heavy metals," "Cr(VI)") from a discovery query that does not distinguish *food-and-supply-chain heavy metals* from *industrial-wastewater-treatment chemistry that happens to mention heavy metals*. If COF / photocatalyst / wastewater-treatment chemistry becomes a tracked sidebar (e.g., for a future remediation-technology page on regulations/), that is a separate scoping decision and the source belongs there; the current wiki has no such page and no Step 0 Lock has been requested for one.

**No commit, no audit-queue entry.** No wiki page was created, no routing audit needs to run, nothing was changed in the repo. The stop is a no-op against the wiki and the only artifact is this note.

## STOP: MFK_micromachines-13-00709-v2 — out of scope (semiconductor/display technology, not food/supply-chain)

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/micromachines-13-00709-v2.pdf`

**Suggested handle:** MFK_micromachines-13-00709-v2

**Existing page:** none.

**Citation:** Jiang X, Fan Z, Luo L, Wang L. Advances and Challenges in Heavy-Metal-Free InP Quantum Dot Light-Emitting Diodes. Micromachines. 2022;13(5):709. DOI: 10.3390/mi13050709. MDPI, CC BY 4.0. School of Resources, Environment and Materials, Guangxi University. Type: Review.

**Identity checks:**
- DOI grep (`10.3390/mi13050709`) → no hits.
- raw_handle grep (`MFK_micromachines-13-00709`) → no hits.
- Cite-key grep (`jiang2022*` in `wiki/sources/`) → only `jiang2022-selenium-cadmium-brown-rice.md` (a different Jiang, different paper, no DOI collision).

So this is a NEW-path candidate, not a merge-enhance candidate. The stop is on topical scope, not on duplicate detection.

**Reason for stop:** The paper is a semiconductor / optoelectronics review about heavy-metal-FREE indium phosphide (InP) quantum-dot LEDs as replacements for cadmium-based (Cd/CdSe/CdS) and lead-based (CH3NH3PbBr3 perovskite) QLED display technologies. It belongs to materials science / display engineering, not to the Heavy Metal Index domain (heavy metals in food, supply-chain, dietary exposure, regulatory occurrence).

What the paper actually covers (from front-of-paper sweep, abstract + sections 1–3):
- Title literal text: "Heavy-Metal-FREE InP Quantum Dot Light-Emitting Diodes" — the framing is "develop alternatives to Cd-based and Pb-based QLEDs to remove toxic metals from display devices."
- Abstract: narrow-spectral-linewidth QLEDs, electroluminescent (EL) wavelength tuning, external quantum efficiency (EQE), photoluminescence quantum yield (PLQY), full-width-at-half-maximum (FWHM) line broadening of emission spectra. Heavy metals are mentioned solely as the toxicity problem being engineered around.
- Section 1 (Introduction): performance comparison of Cd-based, Pb-perovskite, and InP QLEDs as RGB display elements — luminance in cd/m², EQE percentages, operational lifetime in hours at 100 cd/m². No food, no soil, no biological matrix, no exposure assessment.
- Section 2 (Synthesis of InP QDs): hot-injection vs heat-up vs seeded-growth vs cation-exchange wet-chemistry routes; precursor chemistry (TMS3P, (DMA)3P aminophosphorus precursors); core / core-shell / core-shell-shell / alloyed-core-shell nanocrystal architectures.
- Section 3 (Core/Shell structure on QLED performance): nanoengineering of emission wavelength, linewidth, luminous efficiency through energy-band engineering. Tables report device-level EL parameters (EL wavelength nm, FWHM nm, EQE %, luminance cd/m²) — these are display-device performance metrics, not contamination data.
- Tables 1–2: EL performance and synthesis-method comparison across cited InP QLED studies. Numeric content is all device physics (EL nm, FWHM nm, EQE %, luminance cd/m², PLQY %). Zero µg/kg, µg/L, ppb, or ppm values.

What it does **not** contain:
- No measurements of heavy metals in food, beverage, supplement, personal-care, packaging, soil, water-as-consumed, or any HMI matrix.
- No exposure assessments, EDIs, dietary intake estimates, or population-level intake values.
- No regulatory limits, MRLs, ML, EU/FDA/Codex thresholds, or threshold discussion.
- No analytical-method contribution to the HMI testing stack (the methods are synthesis methods for nanocrystals, not analytical methods for measuring metals in samples).
- No microbiome / metals overlap content for WikiBiome federation.
- No HMTc-relevant analyte coverage in any HMI sense — Cd and Pb appear only as the metals being engineered OUT of QLED devices, not measured as contaminants.

**Brand/firewall posture:** N/A — the paper is not a contamination study and names no consumer-food products. It does cite commercial display benchmarks (Cd-based QLED performance from prior literature) but those are device-physics references, not brand contamination data.

**Recommendation to Karen:** Move this PDF out of the manual-fetch queue. The file appears to have been pulled in by topical keyword overlap ("heavy-metal", "Cd", "Pb") from a discovery query that does not distinguish *heavy metals in food/supply-chain (the HMI domain)* from *heavy metals in display electronics as a replacement-target (materials science)*. Same pattern as the COF photocatalyst paper noted above. If electronics-waste / consumer-electronics-as-environmental-source ever becomes a tracked sidebar (e.g., a regulations/ page on RoHS or EU electronics directives), that is a separate Step 0 Lock decision and a paper like this could be staged there; the current wiki has no such page.

**No commit, no audit-queue entry.** No wiki page was created, no routing audit needs to run, nothing was changed in the repo. The stop is a no-op against the wiki and the only artifact is this note.

## STOP: MFK_minerals-13-00692 (demina2023-editorial-marine-lake-sediments) — editorial summary, no primary data, off-scope for HMI

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/minerals-13-00692.pdf`

**Suggested handle:** MFK_minerals-13-00692

**Citation:** Demina LL. Editorial for the Special Issue "Heavy Metals in Marine and Lake Sediments." *Minerals*. 2023;13(5):692. DOI: 10.3390/min13050692. CC BY 4.0. MDPI. Published 19 May 2023.

**Identity checks (all three clean — no existing page):**
- DOI grep (`10.3390/min13050692` in `wiki/sources/`) → no hits.
- raw_handle grep (`MFK_minerals-13-00692` in `wiki/sources/`) → no hits.
- Cite-key grep (`demina2023` / `minerals-13-00692` in `ls wiki/sources/`) → no hits.

So this is a NEW-path candidate, not a merge-enhance case. There is no defective existing page to fix.

**Reason for stop:** The PDF is an editorial. It is a 3-page guest-editor summary of the six research articles published in the Minerals special issue "Heavy Metals in Marine and Lake Sediments" (Strakhovenko et al. on Siberian sapropel deposits, Ignatavičius et al. on Vilnius-suburban Lithuanian sapropel, Skorbiłowicz et al. on Ełckie Lake coastal sediments in Poland, Maltsev et al. on early diagenesis in Russian Arctic glacial lakes, Shevchenko et al. on two Ob River valley lake sediments, and Budko et al. on 47 major/trace elements in Barents/Kara/Laptev/East-Siberian Sea surface sediments). It contains:

- **No primary measurements.** No methods section, no instrument, no sample prep, no calibration, no detection limits, no analyte concentrations of its own.
- **No tables.** Just narrative summaries of the six referenced papers in 1-2 paragraphs each.
- **No food or food-supply-chain matrices.** All summarized work is on lake-bottom sediments, sapropel deposits, and Arctic sea surface sediments — environmental geochemistry of the inorganic substrate, not crop uptake, not fish flesh, not drinking water, not any human-dietary endpoint.
- **No regulatory thresholds, no exposure assessment, no EDIs.**
- **No analyte-species data relevant to HMTc.** The metals discussed (As, Cd, Hg, Pb, Sb, Zn, U; also Cr, Co, Cu, Ni, Mo, V, Bi) are sediment-bound bulk concentrations under multivariate geochemical interpretation, not bioavailable food-route exposure.

**Why this should not be ingested as a wiki source page:**

1. **Editorials are not primary research and do not carry their own evidence.** Any "source page" written from this PDF would either (a) contain no Key numbers and no Methods, because the editorial has none — failing the Part 6 mandatory-section bar — or (b) re-summarize each of the six referenced papers using *Demina's* summary as the source, which is exactly the second-hand-citation antipattern the wiki's per-claim provenance discipline (Part 1) is designed to prevent. The correct way to ingest any of the six underlying papers is to fetch the underlying paper's own PDF and ingest *that*, not the editorial's gloss of it.

2. **Off-scope for HMI by matrix.** The Heavy Metal Index is the heavy-metals-in-food-and-supply-chain literature. Marine and lake sediments are an adjacent environmental-geochemistry literature. Sediment contamination can be upstream of food contamination (irrigation water, freshwater fish, shellfish in coastal sediments), but this editorial does not make any food-route connection — it treats sediment chemistry as the endpoint. There is no `matrices: [marine-sediment]` or `[lake-sediment]` slug currently in scope, and adding one for an editorial that contributes no measurements would not be load-bearing.

3. **Empty routing arrays would be the correct frontmatter and the routing layer cannot route the source anywhere useful.** `products: []`, `ingredients: []`, `matrices: []` would all be empty. Per CLAUDE.md Part 5b, the routing layer fans sources to product/ingredient/metal pages based on those arrays; an editorial with no measured matrices produces zero routes. The routing audit would either flag it as malformed (`zero-routed-source`) or accept it as a metals-only contribution to the relevant `wiki/metals/*.md` pages, but the metals pages do not need a no-data editorial reference when the underlying primary sediment papers already exist in the literature and would be the proper citation.

4. **Identical-pattern precedent in this very stop-log.** This file already contains stop notes for off-scope materials-science PDFs that were pulled into the manual-fetch queue by keyword overlap on "heavy metals" without the food/supply-chain context filter (see the QLED Cd/Pb-replacement note above and the COF photocatalyst note further up). The current PDF is the sediment-geochemistry analogue: same failure mode, different field.

**Brand/firewall posture:** N/A — editorial mentions no brands, no certification thresholds, no HMTc-relevant claims, no consumer-audience translations.

**Action taken:** No ingest, no commits, no audit-queue append, no routing-audit run. The wrapper proceeds to the next PDF.

**Recommendation to Karen:**
- Move this PDF out of the active manual-fetch queue (or mark it as `skip: off-scope-editorial` in a kept-aside list).
- If any of the six referenced primary papers are of interest — Strakhovenko 2021 (Cd/Hg/Sb/Zn/Pb in Western Siberian sapropel), Budko et al. 2022 (Arctic sea surface sediments including As enrichment factors up to 20 in Kara Sea), or Shevchenko et al. 2022 (Cd/Sb enrichment factors >3 in Ob River valley lakes) — those should be fetched as separate primary-source PDFs and queued individually. Cite-key candidates: `strakhovenko2021-sapropel-western-siberia-heavy-metals`, `budko2022-arctic-seas-trace-elements-cs137`, `shevchenko2022-ob-river-lakes-trace-elements`.
- Same systemic note as prior off-scope-keyword stops in this file: the discovery feeding the manual-fetch queue is matching on "heavy metals" without an HMI-domain filter (food, food packaging, agronomic inputs that reach the food supply, drinking water, dietary supplements, personal-care ingredients ingested or applied to oral/mucosal surfaces). Editorials about sediment geochemistry in remote Arctic and Siberian water bodies have no food-route link and should be filtered out before queueing.

## STOP: MFK_toxics-13-00408-v2 — out of HMI scope (grape-pomace biosorbent review for water/soil remediation)

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/toxics-13-00408-v2.pdf`

**Suggested handle (not used):** MFK_toxics-13-00408-v2

**PDF sha256:** `95d826cc97407920f3e97797909a3d71e2e6aa4a5adf56ec7d9d663284ed4896`

**Citation:** Gabur, G.-D.; Dumitrașcu, A.-I.; Teodosiu, C.; Cotea, V.V.; Gabur, I. *Alternative Biosorbents Based on Grape Pomace: Reducing Heavy Metals and Pesticides.* Toxics 2025; 13: 408. DOI: 10.3390/toxics13050408. MDPI, CC BY 4.0. Received 9 April 2025; revised 10 May 2025; accepted 15 May 2025; published 17 May 2025. "Ion Ionescu de la Brad" Iași University of Life Sciences (Faculty of Horticulture and Faculty of Agriculture) + "Gheorghe Asachi" Technical University of Iași (Department of Environmental Engineering and Management), Romania. Type: Review.

**Reason for stop:** Paper is a narrative review of grape pomace (a winemaking byproduct: skins, seeds, stems) and its derivative materials (biochar, hydrochar, activated carbon, biorefined grape marc) as biosorbents for removing heavy metals and pesticides from **aqueous solutions, industrial wastewater, and contaminated soils**. The Data Availability Statement on page 22 is explicit: "No new data were created or analyzed in this review. Data sharing is not applicable to this paper."

The paper's metals data are all **sorbent-performance benchmarks** drawn from prior primary studies:
- Table 1 (p. 8) — utilization of generic waste biomass adsorbents (green tea, plum, apricot, banana peel, jackfruit seed, dragon-fruit peel, melon peel, watermelon rind, cabbage, soy biomass, biochar) for Pb/Cd/Cr/Cu/Ni/As/Fe/Mn/Zn removal from synthetic aqueous solutions, reported as Langmuir/Freundlich maximum adsorption capacities (mg/g) or % removal at specified dose/pH/time/temperature.
- Table 2 (pp. 14–15) — comparison of grape-pomace-derived carbonaceous materials (raw feedstock, biochar, hydrochar, activated carbon, char from Merlot/Sauvignon/Isabel/Cabernet/Muscat varieties) for Pb²⁺, Cd²⁺, Cu²⁺, Cr⁶⁺, Hg²⁺, Ni²⁺, Zn²⁺, Co²⁺ adsorption from aqueous solutions at specified initial concentrations and conditions, reported as mg/g maximum capacity.
- Table 3 (p. 19) — grape-pomace carbonaceous materials as adsorbents for cymoxanil, diazinon, linuron, myclobutanil, 2-mercaptobenzothiazole, diuron, hexazinone, tetrachloroethene/trichloroethene/dichloroethene/vinyl chloride pesticide removal.

All reported numbers are sorbent uptake capacities or removal efficiencies on **analyst-spiked synthetic aqueous solutions or industrial wastewaters** — not measurements of metals in any food, beverage, supplement, personal-care, or consumer-supply-chain matrix HMI tracks. The "beverages" mentioned in passing (abstract, Section 3.2 closing paragraph) is a forward-looking application aspiration ("studies on the use of grape pomace to remove heavy metals and pesticides from beverages are limited"), not a measurement of metals in beverages. Section 3.3 (pp. 15–16) reviews biochar effects on cadmium **bioavailability in soil and uptake by grape plants under Cd-stress agronomic trials** — soil-amendment studies, not consumer-matrix contamination measurement.

Substantive content (verified by full read pp. 1–26 in four passes — title block, abstract, Section 1 Introduction, Section 2 Methodology (VOSviewer bibliometric analysis of 2517 "grape pomace" Scopus records), Section 3 Grape Pomace as a Biosorbent for Heavy Metals Removal (3.1 Biosorption Mechanisms, 3.2 Heavy Metal Removal from Aqueous Solutions with subsections for Lead/Cadmium, Nickel, Copper, Chromium, Mercury, Nickel-and-Zinc, More-Heavy-Metals; 3.3 Heavy Metal Bioavailability in Soils), Section 4 Grape Pomace-Derived Biochar for Pesticide Adsorption and Soil Enhancement, Section 5 Benefits and Drawbacks, Section 6 Future Perspectives and Conclusions, Author Contributions, Funding, Data Availability Statement, all three Tables, all three Figures including the bibliometric VOSviewer maps and the benefits/drawbacks tree, and the 99-entry References list):

- **Topic class:** environmental-remediation / circular-economy review. Grape pomace valorization as a low-cost agro-industrial waste adsorbent for water decontamination.
- **Analytes measured in any HMI-scope matrix:** zero. All metals numbers are adsorbent uptake capacities (mg metal removed per g sorbent) or removal efficiencies (% of initial spike removed) from aqueous test solutions.
- **Matrices tested:** synthetic aqueous solutions of Pb²⁺/Cd²⁺/Cu²⁺/Cr⁶⁺/Hg²⁺/Ni²⁺/Zn²⁺/Co²⁺ at known initial concentrations (range 0.5 mg/L to 1000 mg/L), industrial wastewater from painting/pretreatment processes, simulated cadmium-stressed soils for grape-plant pot trials. No food, no beverage as-consumed, no supplement, no personal-care product, no environmental sample from a human-exposure pathway.
- **HMTc-analyte intersection:** Pb, Cd, tHg, Ni, Cr-VI all appear in the discussion (HMTc-vocabulary subset: Pb, Cd, MeHg/tHg, Ni, Cr-VI). The intersection alone does not bring the paper into scope because every reported number is a sorbent-performance benchmark on a spiked solution, not a contamination measurement in any HMI-scope matrix.

**Why this is out of HMI scope:** Per CLAUDE.md Part 25 ("Out of scope") and the operating premise that the wiki documents heavy metals **in food, supplements, personal care, and the food supply chain**, a biosorbent-materials review benchmarking grape-pomace-derived sorbent performance against synthetic aqueous heavy-metal solutions contributes no ingredient, product, regulation, or metal-page evidence. No `contamination_profile` value can be derived from a mg/g adsorption capacity. No exposure number, no consumption-frequency calculation, no regulatory-comparison ratio, no real-world food matrix metals measurement.

Direct parallel to prior out-of-scope stops in this file (2026-06-01: PAH-only, phthalates-only, dioxins-only, physical-safety-only, molecules-31-01372 PVDF membrane wastewater remediation, s41598-023-46842-1 plantain-peel-ash for oil refining; 2026-06-02 earlier: agave-syrup nutritional review, inorganics-13-00152-v2 water-treatment chemistry review, micromachines-13-00709-v2 semiconductor, minerals-13-00692 marine-sediment editorial): the paper is high-quality work on a legitimate topic (winemaking-waste valorization for water decontamination) but the topic does not intersect HMI's food/PCP contamination evidence base.

Notably, **References [1] and [2] of this paper** would have been HMI-relevant (Dumitriu et al. 2019, "Quantification of toxic metals during different winemaking stages," and Dumitriu/Gabur et al. 2021, "Heavy metals assessment in the major stages of winemaking: Chemometric analysis and impacts on human health and environment," *J. Food Compost. Anal.* 100: 103935). Those are primary winemaking-process contamination studies by the same research group, and would belong in HMI as wine-occurrence sources. They are cited in this review but not measured in it.

**Identity checks (clean — no existing wiki page; correctly absent because the paper is out of scope):**
- DOI grep (`10.3390/toxics13050408`, `toxics13050408`): no matches in `wiki/sources/`
- raw_handle grep (`raw_handle: MFK_toxics-13-00408`): no matches
- Cite-key grep (`gabur`): no matches
- Title grep (`Alternative Biosorbents.*Grape Pomace`): no matches
- Suggested-handle grep (`toxics-13-00408`): no matches

**Brand/firewall posture:** N/A — review names grape varieties (Merlot, Sauvignon Blanc, Cabernet Sauvignon, Palomino Fino, Pisco, Negroamaro, Soltana, Perlet, Muscat Bailey, Isabel) as biomass-source descriptors in the adsorbent-characterization tables; these are agronomic varietal names, not consumer brand names, and would not be Part-12-relevant even if the paper were in scope. No HMTc threshold claims, no consumer-audience risk advisories, no synthesis claims against other literature beyond the standard narrative-review framing.

**Action taken:** No ingest. No commits. No audit-queue append. No source page written. The PDF is left in place. Wrapper proceeds to next PDF.

**Recommendation for Karen:**
- Move the PDF to an `out-of-scope/` or `remediation-technology/` pile inside `raw/Manual Fetch Kimi /June 2 Manual Fetches/` to keep the folder focused on food/PCP contamination evidence. Kimi appears to have caught this paper because the abstract names "heavy metals" + "food products" + "beverages" + a list of HMTc-vocabulary metals (Pb, Cd, Hg, Cu), but the paper's actual contribution is biosorbent valorization for water remediation, not food contamination measurement.
- **High-value follow-up:** the same research group's cited References [1] and [2] are likely HMI-in-scope (heavy metals quantified across winemaking stages, by Dumitriu/Gabur/Teodosiu/Cotea). Suggested cite-key candidates if those PDFs can be fetched: `dumitriu2019-winemaking-stages-toxic-metals` (Vine and Wine Congress proceedings) and `dumitriu2021-winemaking-stages-heavy-metals-chemometric` (*J. Food Compost. Anal.* 100: 103935, 2021). The 2021 paper is the more important one — peer-reviewed primary data on heavy metals in wine across winemaking stages would route to `wiki/ingredients/wine.md` (if/when created) and the metal pages.
- Systemic note: same out-of-scope-keyword pattern as prior stops — the discovery layer is matching on "heavy metals" + a food-adjacent noun ("grape pomace," "edible oil," "soybean oil," "beverages") without checking whether the paper *measures* metals in that food matrix versus *uses* the food-waste material as a remediation tool. A topic filter that downweights titles containing "biosorbent," "adsorbent," "removal," "remediation," "wastewater," "biochar," "hydrochar," "membrane," or "activated carbon" alongside "heavy metals" would catch this class of out-of-scope hits at queue time.

## STOP: Kimi corruption-folder PDF (Jang_2024_Invisible_Threats_Daily_Life_19_Metals_75_Korean_HCPs.pdf) — filename/content mismatch, actual content is off-topic HIV neuropsychology paper

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor/Jang_2024_Invisible_Threats_Daily_Life_19_Metals_75_Korean_HCPs.pdf`

**Filename claims:** Jang 2024, "Invisible Threats in Daily Life," 19 metals across 75 Korean household consumer products (HCPs) — would have been an in-scope household-cleaner / consumer-product contamination paper for the 01_AP_Countertop_Tile_Floor batch.

**Actual PDF content (verified pp. 1–5):** Mehta DM, Woods SP, Akpotaire N. *An Evaluation of the Moderating Effects of Routine and Busyness on the Relationship Between Prospective Memory and Everyday Functioning in Older Persons with HIV Disease.* J Clin Exp Neuropsychol. 2024 May;46(4):341–351. DOI: `10.1080/13803395.2024.2350577`. PMCID PMC available May 2025. HHS Public Access author manuscript.

This is an HIV-cohort cognitive-psychology study (n=145 PLWH, ages 50–79, UCSD HNRP cohort) measuring whether self-reported routine and busyness moderate the association between prospective memory and activities of daily living. Zero heavy-metals content. Zero food/PCP/supply-chain content. The paper is a clean specimen of its own field, but it is entirely out of HMI scope and bears no relationship to its filename.

**Diagnosis:** This is exactly the failure mode the parent folder `Kimi_Agent_Download Corruption Issue` exists to document — Kimi's agent download produced a file whose filename describes one paper but whose binary content is a completely different paper. The corruption appears to be a wholesale wrong-file substitution, not a partial truncation or encoding defect; the PDF renders cleanly as the Mehta 2024 HIV paper.

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out of scope):**
- DOI grep (`10.1080/13803395.2024.2350577`, `13803395`): no matches in `wiki/sources/`
- Filename grep (`Jang_2024_Invisible_Threats`): no matches
- Cite-key grep (`mehta2024`, `jang2024`): no matches
- File sha256: `417a6f532206cdc604d0032cfa7162da0a01e9bc2712e14e238f56b75c3c5cc8` (recorded for future dedup if the Mehta HIV paper ever surfaces under a different filename).

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place. The wrapper proceeds to next PDF.

**Recommendation for Karen:**
- The intended paper (a Jang 2024 study measuring 19 metals across 75 Korean household consumer products) would be a high-value in-scope source for the household-cleaners / countertop-cleaner / tile-floor-cleaner product pages and the metal pages — but it must be re-fetched from the publisher / PubMed / Google Scholar directly, because what's currently at this path is the wrong PDF entirely. Likely target: search PubMed for "Jang 2024 heavy metals household consumer products Korea" or similar; the paper may be in *Sci Total Environ*, *Environ Pollut*, *Environ Int*, *Chemosphere*, or *J Hazard Mater*.
- The Mehta 2024 HIV paper that's currently in this slot is correctly-formed and could be useful to whoever asked Kimi to fetch it originally (likely a separate workflow on prospective-memory research) — but it does not belong in HMI under any cite-key.
- Suggest moving this PDF to an `_corrupted-substitutions/` subfolder inside `Kimi_Agent_Download Corruption Issue/` so the wrapper does not re-attempt ingest on the same wrong-content file on the next folder pass. Without that, every loop tick will land on this PDF, do the same five-page read, detect the same filename/content mismatch, and write a duplicate stop note.
- Systemic note for the `discover` / Kimi pipeline: when an agent-download workflow places a PDF, a post-fetch check could compare the PDF's title-block authors/year against the filename's authors/year tokens; a mismatch could route the file to a `_quarantine/` lane before it ever enters the manual-fetch ingest queue. This would catch wholesale wrong-file substitutions at fetch time rather than at ingest time, saving every downstream tick a 5-page read.

## STOP: KADC_vilaplana-1987-cobalt-content-household-cleaning-p — wrong-file substitution (BMJ 1981 correspondence section)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor/Vilaplana_1987_Cobalt_Content_Household_Cleaning_Products_Spain.pdf`

**Suggested handle:** KADC_vilaplana-1987-cobalt-content-household-cleaning-p

**Folder context:** `Kimi_Agent_Download Corruption Issue/household_papers/01_AP_Countertop_Tile_Floor`

**Reason for stop:** Filename–content mismatch (wrong-file substitution). The filename advertises "Vilaplana 1987 Cobalt Content Household Cleaning Products Spain" but the actual PDF binary is two pages of the **British Medical Journal, Volume 282, 10 January 1981, Correspondence section, pp 141–142**. Content includes letters on counselling and psychiatric morbidity after mastectomy (Pettingale et al.), adjuvant chemotherapy for breast cancer (Fennelly & Cantwell), chemotherapy in pancreatic cancer (Reynolds & Allen-Mersh; Slater), and spectacle problems (Hamblin et al.). The TOC on page 141 lists an unrelated short item "Is low-level lead pollution dangerous? R R Jones, MRCP, p 147" — but page 147 is not in this 2-page PDF, and even if it were, that 1981 letter has no relationship to a putative Vilaplana 1987 cobalt-in-cleaning-products study.

Zero heavy-metals food/PCP/cleaning-products content in the actual PDF. The expected paper (Vilaplana 1987 measuring cobalt in Spanish household cleaning products) is not present at this path at all.

**Diagnosis:** Same failure mode as the Jang_2024 entry above and as the parent folder name explicitly catalogs — Kimi's agent-download produced a file whose filename describes one paper but whose binary content is a different paper entirely. Wholesale wrong-file substitution, not partial truncation; the 2 pages render cleanly as the BMJ 1981 correspondence section.

**PDF metadata:**
- Producer: Apex PDFWriter
- CreationDate: Fri Apr 28 19:49:24 2006 EEST
- Pages: 2
- Page size: 602.88 × 808.8 pts
- File size: 532,296 bytes
- sha256: `cb2ceed3fb8ffcf347f93fe8adb555c0b8802274b7f7d43e9c35e120f28d870d`

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out of scope and the expected Vilaplana paper has not been ingested):**
- DOI grep (no DOI present in the PDF) — N/A.
- Filename grep (`vilaplana`, `Vilaplana_1987`) → no matches in `wiki/sources/`.
- Cite-key grep (`vilaplana1987`) → no matches in `wiki/sources/`.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Vilaplana J, et al. ~1987, cobalt content in Spanish household cleaning products — would plausibly be in *Contact Dermatitis*, *Br J Dermatol*, or a Spanish dermatology journal of that era (Vilaplana J. publishes on contact dermatitis from metals). It would be in-scope direct evidence for `metals/cobalt` and for all-purpose-cleaners / countertop-cleaner / tile-floor-cleaner product pages. Needs to be re-fetched from the original journal / PubMed / a contact-dermatitis review citing it.
- Suggest moving this PDF to the `_corrupted-substitutions/` lane proposed in the Jang_2024 stop entry above so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks.
- The systemic recommendation from the Jang_2024 entry (post-fetch title-block-vs-filename author/year sanity check in the Kimi download pipeline) would have caught this one too. The whole `Kimi_Agent_Download Corruption Issue/` folder appears to be a structured backlog of these substitutions; the fix is at fetch time, not at ingest time.

## STOP: KADC_bavcon-kralj-2020-dish-handwashing-contamination — PDF content does not match filename (Kimi download corruption)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Bavcon_Kralj_2020_Dish_Handwashing_Contamination.pdf`

**Suggested handle:** KADC_bavcon-kralj-2020-dish-handwashing-contamination

**Expected paper (per filename):** Bavcon Kralj M. et al. ~2020. Likely a Slovenian-led study on heavy-metal or chemical contamination from dishwashing / dish-handwashing detergents. Marija Bavcon Kralj (University of Ljubljana, Biotechnical Faculty) publishes on contaminants in household and food-contact products; a 2020 dish/handwashing paper would plausibly be in *Environmental Science and Pollution Research*, *Food and Chemical Toxicology*, *Science of the Total Environment*, or a household-chemistry venue. In-scope direct evidence for `metals/*` (depending on which analytes were measured) and for `products/dish-detergents-liquid-handwashing` and sibling dish-soap product pages.

**Actual PDF content:** A 28-page (plus 3-page reference list) Senior Honors Thesis from Liberty University, Spring 2015:
- Title: *Handwashing: A Study of the History, Methods, and Psychology Surrounding Hand Hygiene*
- Author: Daniel Remillard
- Thesis Chair: Dr. Mark Blais, DPM; Committee: Dr. Ben Kalu, MD; Mr. David Feldman, MM; Honors Director: James H. Nutter, DA
- Hosted on Liberty University Digital Commons / brought via CORE.ac.uk (banner visible on cover page)
- Content: biblical / Babylonian / medieval history of handwashing → Semmelweis biography and the puerperal-fever discovery → bacterial flora and skin anatomy (Staphylococcus epidermidis, stratum-corneum biology, CFU counts) → comparison of plain soap vs antibacterial soap vs hand sanitizer (Triclosan mechanism, FDA 2013 rule, hormonal-disruption concerns) → workplace handwashing-compliance psychology (Cedars Sinai case study) → OCD compulsive handwashing
- References: 28 sources, all microbiology / public-health / theology / popular-press; zero heavy-metals analytical chemistry, zero ICP-MS/AAS/AFS methods, zero contamination measurements in dish soap or any food-contact product

Zero relationship to dishwashing detergents, dish soap, heavy metals, or Bavcon Kralj 2020. Different year (2015 vs 2020), different country (US/Liberty University vs presumed Slovenia), different topic (microbiology and behavioral psychology vs heavy-metal contamination), different document genre (undergraduate honors thesis vs peer-reviewed research article). The parent folder name (`Kimi_Agent_Download Corruption Issue`) confirms this PDF was downloaded by the Kimi agent and is known-bad: the file the agent saved at this path is a substitution, not the requested paper.

**PDF metadata:**
- Pages: 31
- File size: 506,210 bytes
- sha256: `a65bd097779759e9b1da3abcf6c0ad0aaf0dcc7e8b21c55f7bd9c83310ca27db`

**Identity checks (clean — no existing wiki page for either the expected or actual paper):**
- DOI grep — no DOI present in the PDF (an undergraduate thesis on CORE.ac.uk would not carry one; the expected Bavcon/Kralj 2020 DOI is unknown without the real paper in hand).
- raw_handle grep — `KADC_bavcon-kralj-2020-dish-handwashing-contamination` not present in `wiki/sources/`.
- Cite-key grep (`bavcon`, `kralj`, `remillard` in `wiki/sources/`) → no matches.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Bavcon Kralj et al. ~2020, dish / handwashing-detergent contamination — should be re-fetched from the original journal / PubMed / OpenAlex search on "Bavcon Kralj 2020" + "dish" or "detergent" or "handwashing." Marija Bavcon Kralj's bibliography is concentrated in Slovenian / EU food-contact and contaminant work; a structured author + year + topic OpenAlex search through the `discover` skill is the most reliable path.
- Move this PDF to the `_corrupted-substitutions/` lane (as proposed in the Jang_2024, Vilaplana_1987, and Hostýnek/Maibach_1988 stop entries above) so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks.
- This is the fourth Kimi-corruption case logged in this folder today (Jang_2024, Vilaplana_1987, Hostýnek/Maibach_1988, now Bavcon/Kralj_2020). The systemic fix remains the post-fetch title-block-vs-filename author/year sanity check at the Kimi download pipeline level. The Liberty-University-undergraduate-thesis substitution is a particularly clean signature for the corruption pattern: it is also what CORE.ac.uk returns for several unrelated handwashing-keyword searches, which suggests the Kimi agent fell back to a CORE.ac.uk "handwashing"-token match rather than the actual Bavcon-Kralj title/DOI. Until the fetch-time sanity check lands, the entire `Kimi_Agent_Download Corruption Issue/` directory should continue to be treated as a quarantine lane that the manual-fetch ingester skips by default.

## STOP: KADC_comber-gunn-1996-heavy-metals-sewage-domestic — PDF content does not match filename (Kimi download corruption); actual paper is also out of HMI core scope

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Comber_Gunn_1996_Heavy_Metals_Sewage_Domestic.pdf`

**Suggested handle (per the wrapper):** KADC_comber-gunn-1996-heavy-metals-sewage-domestic

**Expected paper (per filename):** Comber SDW, Gunn AM. 1996. *Heavy metals entering sewage-treatment works from domestic sources.* Journal of the Chartered Institution of Water and Environmental Management (J. CIWEM) 10(2):137–142. This is a foundational source-apportionment paper on the domestic contribution of Cu/Pb/Zn/Cd/Cr/Ni to municipal sewage (laundry detergents, dishwashing detergents, personal-care products, plumbing). It would be plausibly in-scope for `products/dishwashing-detergents`, `products/laundry-detergents`, and the `metals/*` exposure-only context lanes — but only as an exposure-source paper, not as a contamination-value paper on consumer products.

**Actual PDF content:** A completely different paper — Ziolko D, Martin OV, Scrimshaw MD, Lester JN. *"An Evaluation of Metal Removal During Wastewater Treatment: the Potential to Achieve More Stringent Final Effluent Standards"* (the visible PDF metadata title is *"Evaluation of toxic elements removal during conventional wastewater treatment"*). The title page shows the Brunel University Research Archive / CORE.ac.uk header. The references cite USEPA 2007 and 2008 sources, so the paper is post-2008; the PDF was created on 2014-08-13 (likely the author's preprint deposit to Brunel's institutional repository, corresponding to the published *Critical Reviews in Environmental Science and Technology* 41(8):733–769, 2011 version).

The actual paper is a wastewater-treatment engineering review. It covers:
- EU Water Framework Directive and US Clean Water Act EQS/WQC for Cd/Hg/Pb/Ni/Cr-VI/Cr-III/Cu/Zn in surface waters (Tables 1–3).
- Mean influent metal concentrations at seven STWs around the world (Table 4: Oxford UK, Whitlingham Norwich UK, Henriksdal Stockholm, Thessaloniki, Takatori Japan, Ribeirão Preto Brazil, plus a 30-STW UK survey).
- Dissolved-fraction percentages at three STWs (Table 5).
- Mechanisms of metal removal in primary sedimentation and activated-sludge biological treatment.
- A brief discussion of diffuse-domestic source apportionment that *cites* Comber & Gunn 1996 in passing (page 12, in the context of household stainless-steel as a Cr/Ni source).

Comber & Gunn 1996 is cited as a reference within the Ziolko paper, but the paper itself is the Ziolko et al. review, not Comber & Gunn.

**PDF metadata:**
- Title (embedded): Evaluation of toxic elements removal during conventional wastewater treatment
- Author (embedded): zioles
- Creator: Microsoft® Word 2010
- CreationDate: Wed Aug 13 11:45:10 2014 EEST
- Pages: 63
- Page size: 595.32 × 841.92 pts (A4)
- File size: 650,056 bytes
- sha256: `1a3bafbaa4a04c0c27bbbff6ce6e9d510c06bd531910ac7f2e997ac2a23b09b9`

**Identity checks (clean — no existing wiki page for either the expected or actual paper):**
- DOI grep — no DOI is printed on the PDF (the deposit is the institutional-repository preprint). The published *Crit Rev Environ Sci Technol* 2011 version has DOI 10.1080/10643380903140299 (carried by the published version; not searchable in the deposited PDF).
- raw_handle grep — `KADC_comber-gunn-1996-heavy-metals-sewage-domestic` not present in `wiki/sources/`.
- Cite-key grep (`ziolko`, `comber`, `gunn`, `scrimshaw` in `wiki/sources/`) → no matches.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Comber & Gunn 1996, *Heavy metals entering sewage-treatment works from domestic sources*, J. CIWEM 10(2):137–142 — should be re-fetched from the original journal (Wiley Online Library hosts the J. CIWEM / Water and Environment Journal back catalog under DOI 10.1111/j.1747-6593.1996.tb00018.x). This paper is the canonical domestic-source-apportionment study for the dishwashing / laundry-detergent / personal-care products lane and is worth a clean re-fetch.
- The actual content (Ziolko et al. ~2011 review) is at best tangential to HMI's food-and-personal-care core scope: it is a STW-engineering review of environmental compliance with EU/US surface-water EQSs, and discusses domestic detergents only briefly via the cited Sörme & Lindqvist 2002 source-flux analysis. If Karen wants it ingested, it should be assigned its own cite-key (e.g., `ziolko2011-wastewater-metal-removal-review`) and routed primarily to `metals/*` exposure-only context and the regulatory pages (WFD, Clean Water Act), not to dish-soap / dishwasher product pages. The default recommendation is to NOT ingest it under this folder.
- Move this PDF to the `_corrupted-substitutions/` lane (as proposed in the Jang_2024, Vilaplana_1987, Hostýnek/Maibach_1988, and Bavcon/Kralj_2020 stop entries above) so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks.
- This is the fifth Kimi-corruption case logged in this folder today (Jang_2024, Vilaplana_1987, Hostýnek/Maibach_1988, Bavcon/Kralj_2020, now Comber/Gunn_1996). The pattern is consistent: the Kimi agent appears to have substituted CORE.ac.uk / institutional-repository keyword-match results when it could not locate the requested DOI, producing a file that is convincingly named but holds an unrelated paper. The systemic fix remains the post-fetch title-block-vs-filename author/year sanity check at the Kimi download pipeline level. Until that lands, the entire `Kimi_Agent_Download Corruption Issue/` directory should continue to be treated as a quarantine lane that the manual-fetch ingester skips by default.

## STOP: KADC_cressey-pattis-2014-dishwasher-powder-risk-assessm — correct paper, but out of HMI core scope (caustic/alkaline toxicology, zero heavy-metals analytical data)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Cressey_Pattis_2014_Dishwasher_Powder_Risk_Assessment.pdf`

**Suggested handle (per the wrapper):** KADC_cressey-pattis-2014-dishwasher-powder-risk-assessm

**This is NOT a Kimi-substitution case.** The PDF content matches the filename: Cressey P, Pattis I. *Health Risk Assessment: Dishwasher Powder.* Client Report FW14027. Institute of Environmental Science and Research Limited (ESR), Christchurch, New Zealand. September 2014. Prepared for the New Zealand Ministry of Health by Matt Ashworth (Project Leader) and peer-reviewed by Jefferson Fowles. 36 pages of body plus references; running header "Hazardous Substances Risk Assessment: Dishwasher Powder."

**Why it is out of HMI core scope:**

The report is a *toxicological / poisoning* risk assessment of formulated dishwasher powder products. The hazard endpoints throughout are:

- Caustic / alkaline injury (pH > 11.5 oesophageal damage; Cleaning Products (Corrosives) Group Standard 2006 cap of pH ≤ 12.5)
- Accidental ingestion by 1–2 year-old children (5 g and 10 g scenarios)
- Eye irritation / corrosion (from sodium percarbonate-rich tablets)
- Inhalation of detergent dust
- Acute LD50 / margin-of-exposure analysis for the four hazardous ingredients

The four "ingredients most commonly present that may be of health concern" (Executive Summary, p. 4) are:

1. Sodium carbonate (Na₂CO₃, CAS 497-19-8) — caustic builder, pH 11.6 at 0.1 M
2. Sodium tripolyphosphate (STPP, CAS 7758-29-4) — water-softener / sequestrant
3. Sodium percarbonate — peroxide bleach precursor
4. Alcohol ethoxylates (AEs) — non-ionic surfactants

None of these are HMI-tracked analytes. The full HMTc canonical analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn — CLAUDE.md Part 14, "HMT&C analyte vocabulary") does not appear as a measured contaminant anywhere in the report.

**What the report does mention that is NOT HMI-relevant heavy-metals contamination:**

- Table 1 (ingredient composition of NZ-market dishwasher powders/tablets) lists *formulation ingredients* including manganese oxalate (bleach activator), titanium dioxide (colourant/filler), kaolin, zinc stearate, calcium stearate, magnesium stearate, CI pigment blue 29 / red 57 / violet 75 / acid red 18, etc. These are listed as named ingredients of branded products, not as measured contaminants. Mn / Ti / Zn / Ca / Mg are not on the HMI analyte list. Aluminium is mentioned only as the metal-precipitation chemistry of STPP sequestration (Watters 1957), not as a measured contaminant in the powder.
- Table 2 (US poison-centre exposure incidents 2002–2011) is exposure-incident epidemiology, not contamination chemistry.
- Tables 3, 6, 7, 10, 11 are LD50-based MoE (margin-of-exposure) and hazard-quotient calculations for the four caustic ingredients above, not metal contamination values. The "MTDI 550 mg/kg bw for dishwasher powder, derived from the MTDI for STPP" referenced in the Executive Summary is the polyphosphate intake limit, not a metal limit.

**Why this is a STOP, not an ingest:**

A wiki source page exists to anchor heavy-metal contamination data with provenance. The Part 6 source-page template requires `metals: [...]`, a `## Key numbers` section with metal-specific values and units (ppb / µg/kg in a defined wet/dry basis), and routing fan-out into `metals/*`, `ingredients/*`, and `products/*` pages keyed on the HMI analyte list. This paper supplies none of those. Ingesting it would produce a source page with `metals: []`, empty `## Key numbers`, and a routing audit row that the build-routing-audit script would flag as malformed (no metals, no routeable contamination claim). The Cochrane standard of "every hand-curated paper gets a properly-ingested page" applies *to in-scope papers*; for an out-of-scope paper the correct action is to surface the scope mismatch and not write a degenerate source page.

The folder-level note matters: this is the second out-of-scope (vs. corruption-substitution) case identified across the `Kimi_Agent_Download Corruption Issue/` lane today, and the broader pattern is that the Kimi-corruption folder also contains some genuinely-fetched-but-out-of-scope toxicology papers that the wrapper's blind PDF-iteration is feeding into the loop. The Bavcon/Kralj 2020, Comber/Gunn 1996, etc. cases were corrupted substitutions; this Cressey/Pattis 2014 case is a clean fetch of an off-topic source.

**PDF metadata:**
- Pages: ~46 (TOC: body 1–36 + glossary + tables list)
- File size: 751,124 bytes
- sha256: `cabd93cdd0e9cd9cb7472acf9e07a4e69fe9ee68a5ca1054b443440cb4e31b0c`
- Publisher: Institute of Environmental Science and Research Limited (ESR), Christchurch, NZ
- Client: New Zealand Ministry of Health
- Report ID: Client Report FW14027
- Date: September 2014
- Authors: P. Cressey, I. Pattis
- Project Leader: Matt Ashworth; Peer Reviewer: Jefferson Fowles; Science Programme Manager: Dr Brent Gilpin
- DOI: none (this is a government client report, not a peer-reviewed journal article; the access path is via the ESR / NZ Ministry of Health publication archive, not a DOI registrar)

**Identity checks (clean — no existing wiki page):**
- DOI grep — no DOI; not applicable.
- raw_handle grep — `KADC_cressey-pattis-2014-dishwasher-powder-risk-assessm` not present in `wiki/sources/`.
- Cite-key grep (`cressey`, `pattis` in `wiki/sources/`) → no matches.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**

- This is a **scope decision, not a corruption decision**. The PDF is correctly fetched; the paper is simply not what HMI source pages are built to capture. The default recommendation is to NOT ingest this PDF into `wiki/sources/`.
- The paper *would* be a legitimate citation on `products/dishwasher-detergents-and-additives` (or whatever the resolved canonical product slug is) under a "Regulatory / exposure context" section — specifically the NZ Cleaning Products (Corrosives) Group Standard 2006 (pH ≤ 12.5 cap), the AAPCC US poison-centre 2002–2011 exposure pattern, and the MTDI 550 mg/kg bw derived from STPP. But that citation belongs on the *product page* via a generator-rendered "context block," not as a routed `wiki/sources/` entry with HMI metal frontmatter.
- The cleanest disposition: move this PDF to a sibling `_out-of-scope/` lane under the Kimi corruption folder (or a folder-level scope-quarantine lane parallel to the `_corrupted-substitutions/` lane proposed for the substitution cases above), so the wrapper does not re-attempt ingest on subsequent loop ticks. Alternatively, the manual-fetch wrapper could grow an "out-of-scope" handle list that skips known-out-of-scope PDFs the way it already skips known-corrupted ones.
- Systemic signal: the `Kimi_Agent_Download Corruption Issue/` folder is now demonstrably heterogeneous in failure mode — some PDFs are wrong-content substitutions (Bavcon/Kralj, Comber/Gunn, Vilaplana, Hostýnek/Maibach, Jang_2024) and some PDFs are correct-content-but-out-of-scope (this one). The two failure modes need different handling: corruption substitutions should be re-fetched from a different source, while out-of-scope papers should be quarantined permanently. The current "quarantine the whole folder by default" guidance still applies until the wrapper grows per-PDF disposition.

## STOP: KADC_fromme-2005-organotin-house-dust-berlin — PDF content does not match filename (Kimi download corruption)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Fromme_2005_Organotin_House_Dust_Berlin.pdf`

**Suggested handle:** KADC_fromme-2005-organotin-house-dust-berlin

**Expected paper (per filename):** Fromme H, et al. ~2005. Organotin compounds in house dust from Berlin (likely venue: *Environment International*, *Chemosphere*, or *Sci Total Environ* — Fromme's Berlin/Munich indoor-exposure group publishes there). Would be direct evidence for organotins (MBT/DBT/TBT/MOT/DOT/MPhT/DPhT/TPhT) in indoor dust, routing to `metals/tin`, `metals/organotins` (if/once that page exists), and to PVC-flooring / household-cleaner / dish-soap / dishwasher-detergent product pages where organotin stabilizers or migration are in scope.

**Actual PDF content:** A DTU Library (Technical University of Denmark) institutional-repository deposit of a 2012 SETAC conference abstract:
- **Cover page (p. 1):** Lützhøft H-CH, Birch H, Eriksson E, Mikkelsen PS. 2012. "Comparing chemical analysis with literature studies to identify micropollutants to be treated or upstream source controlled in a catchment of Copenhagen (DK)." In *Abstract Book: 6th SETAC World Congress / SETAC Europe 22nd Annual Meeting*, pp. 287–288. Society of Environmental Toxicology and Chemistry. DTU Orbit publisher's-PDF Version of Record.
- **Body (pp. 2–85):** The full SETAC 6th World Congress / SETAC Europe 22nd Annual Meeting abstract book, pages 285–368, containing abstracts TH303–TU421 across sessions RA23P (Wastewater effluent discharges), LC03P (LCA meta-analysis), LC06P (LCM success factors), ET11P (Marine environmental chemistry and ecotoxicology), and adjacent sessions. Topics: wastewater treatment chemistry, micropollutant prioritisation, LCA of biofuels and palm oil, marine ecotoxicology of TBT/PAH/PBDE/mercury in molluscs and fish. The Lützhøft abstract itself (TH317, p. 287) is two paragraphs comparing chemical analysis with literature-based identification of micropollutants in a Copenhagen urban catchment — not original measurement data of HMI scope.

Zero relationship to Fromme, Berlin, house dust, or organotin indoor-dust measurements. Different year (2012 vs 2005), different first author (Lützhøft vs Fromme), different country (Denmark vs Germany), different matrix (urban-catchment stormwater/wastewater vs indoor house dust), different analytes (organic micropollutants and pharmaceuticals vs organotins). The parent folder name (`Kimi_Agent_Download Corruption Issue`) confirms this PDF was downloaded by the Kimi agent and is known-bad: the file the agent saved at this path is a substitution, not the requested paper.

**PDF metadata:**
- Pages: 85
- File size: 3,268,209 bytes
- sha256: `70ff5411931b821947dc70dcbfd1aa7ae9abdd7857e287ed2808a63fb5c46640`

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out of scope and the expected Fromme paper has not been ingested):**
- Author grep (`fromme`) → no matches in `wiki/sources/`.
- Subject grep (`organotin`) → only `cfs2019-organotin-aquatic-hongkong.md` (Hong Kong aquatic, unrelated).
- Actual-content grep (`lutzhoft`, `lützhøft`, `Lutzhoft`) → no matches in `wiki/sources/`.
- DOI grep — the DTU Orbit deposit has no DOI on the cover page; the SETAC abstract book itself has no DOI.
- Cite-key grep (`fromme2005`) → no matches.

**Disposition:**
- Do NOT ingest this PDF. The file is a Kimi-agent download substitution; ingesting it would create a `wiki/sources/KADC_fromme-2005-organotin-house-dust-berlin.md` whose frontmatter (organotin, house dust, Berlin, dishwasher-detergent routing) would be wholly fabricated relative to the actual content (a 2012 Copenhagen-catchment micropollutant abstract book). That is the fabrication failure mode the Cochrane bar is built to prevent.
- The expected Fromme 2005 organotin Berlin house-dust paper IS in HMI scope and should be re-fetched from a non-Kimi source (PubMed / publisher / Google Scholar). Likely candidates by title pattern: Fromme H, Mattulat A, Lahrz T, Rüden H. 2005. "Occurrence of organotin compounds in house dust in Berlin (Germany)." *Chemosphere* 58(10): 1377–1383 (DOI 10.1016/j.chemosphere.2004.09.092). This citation should be added to the manual-fetch wishlist once the wrapper grows that lane.
- Recommend the same `_corrupted-substitutions/` quarantine lane proposed for prior substitution cases (Bavcon/Kralj, Comber/Gunn, Vilaplana, Hostýnek/Maibach, Jang_2024). Move this PDF there so the wrapper does not re-attempt ingest on subsequent loop ticks. Keep the filename as-is in the quarantine lane so the expected-paper identity is preserved for future re-fetch attempts.
- Systemic signal: this is the 6th confirmed Kimi-agent corruption substitution in the household-papers / Kimi corruption folder. The pattern (PDF filename advertises one paper, file body is an unrelated document, sometimes a 1980s BMJ page, sometimes a 2012 SETAC abstract book, sometimes a different-author micropollutant paper) is now well enough established that the wrapper should treat every PDF in this folder as guilty-until-proven-innocent: run a one-page identity check (first-page title/author match) before committing to a full ingest pass. The current loop wastes a full ingest cycle on each corruption case before discovering the substitution.

## STOP: KADC_jenkins-russell-1994-heavy-metals-household-washin — PDF content does not match filename (Kimi download corruption)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Jenkins_Russell_1994_Heavy_Metals_Household_Washing_Products.pdf`

**Suggested handle:** KADC_jenkins-russell-1994-heavy-metals-household-washin

**Expected paper (per filename):** Jenkins & Russell ~1994, "Heavy metals in household washing products." A paper of this description would be direct evidence for `metals/lead`, `metals/cadmium`, `metals/nickel`, `metals/chromium`, `metals/zinc`, and the dish-soap / dishwasher-detergent / laundry-detergent / all-purpose-cleaner product pages. No clear journal locator visible from the filename; possibilities include *Sci Total Environ*, *Water Sci Technol*, *J Cons Stud Home Econ*, or a trade journal from the early-1990s detergent-industry literature.

**Actual PDF content:** A 20-page keynote paper from the **2nd Xiamen International Forum on Urban Environment**:

> Verstraete W, Vlaeminck SE. "ZeroWasteWater: Short-cycling of Wastewater Resources for Sustainable Cities of the Future." Laboratory of Microbial Ecology and Technology (LabMET), Ghent University, Belgium. (Conference proceedings, ~2010.)

Topic: sewage treatment, anaerobic digestion, OLAND nitrogen removal, biochar, struvite recovery, ZeroWasteWater treatment train architecture, Sneek (NL) and Koksijde (BE) case studies. Heavy metals are mentioned only in passing in §3 ("Safety first: no short-cycling of faecal pathogens, heavy metals and trace organics") in the context of avoiding metal re-entry from sewage sludge — no measurements, no concentrations, no analytical methods, no household-washing-product data. Zero relationship to Jenkins, Russell, 1994, dish soap, or household washing products.

**PDF metadata (corroborating):**
- Title (embedded): `Microsoft Word - Verstraete & Vlaeminck_Keynote XIAMEN`
- Author: Siegfried
- Producer: Acrobat Distiller 7.0 (Windows)
- CreationDate: Mon Nov 29 21:30:32 2010 EET (the metadata timestamp is 2010, not 1994, further confirming substitution)
- Pages: 20
- Page size: 595.22 × 842 pts (A4)
- File size: 1,453,517 bytes
- sha256: `cad9f023ed47a2335d3234ca6823c16838a13d028ada6689bb0d9b2a0a0a7884`

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out-of-scope and the expected Jenkins/Russell paper has not been ingested):**
- Author grep (`jenkins`, `russell`) → no matches in `wiki/sources/`.
- DOI grep → no DOI present in the PDF (and the actual content has nothing to do with the expected paper, so its DOI is unknown).
- Cite-key grep (`jenkins1994`, `russell1994`) → no matches in `wiki/sources/`.
- Sanity check on actual content: `verstraete`, `vlaeminck`, `zerowastewater` → no matches in `wiki/sources/` either. (The Verstraete/Vlaeminck keynote is out of HMI scope — wastewater treatment process design, not heavy-metal occurrence data — so its absence is correct.)

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Jenkins & Russell ~1994, heavy metals in household washing products — should be re-fetched from a non-Kimi source. Try PubMed, Web of Science, Google Scholar with title-keyword search (`"heavy metals" "household washing" OR "washing products" Jenkins Russell 1994`). Possible candidate venues: *Sci Total Environ*, *Environ Sci Pollut Res*, *J R Soc Health*, *Chemosphere*. If the paper is indeed from a less-indexed trade venue (e.g., *J Cons Stud Home Econ*, *J Soc Cosmet Chem*), it may need a library-system retrieval rather than open-web.
- Move this PDF to a `_corrupted-substitutions/` lane (as proposed in prior stop entries for Bavcon/Kralj, Comber/Gunn, Vilaplana, Hostýnek/Maibach, Jang_2024, Fromme_2005) so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks. Keep the filename as-is in the quarantine lane so the expected-paper identity is preserved for future re-fetch attempts.
- Systemic signal: this is now the **7th** confirmed Kimi-agent corruption substitution in the `Kimi_Agent_Download Corruption Issue/` folder. The pattern continues to hold (PDF filename advertises one paper, file body is an unrelated document — here, a 2010 wastewater-treatment keynote masquerading as a 1994 household-washing-products paper). The recommendation from prior stop entries stands: the wrapper should treat every PDF in this folder as guilty-until-proven-innocent and run a one-page filename-vs-title identity check before committing to a full ingest pass. Until that lands, every corruption case continues to burn a full ingest cycle's worth of context budget before the substitution is detected.

## STOP: KADC_ogulur-2023-gut-barrier-dishwasher-rinse-aid — PDF content does not match filename (Kimi download substitution) AND substituted content is out of HMI scope

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Ogulur_2023_Gut_Barrier_Dishwasher_Rinse_Aid.pdf`

**Suggested handle:** KADC_ogulur-2023-gut-barrier-dishwasher-rinse-aid

**Expected paper (per filename):** Ogulur I, Pat Y, Aydin T, Yazici D, Rückert B, Peng Y, Kim J, Radzikowska U, Westermann P, Sokolowska M, et al. Gut Epithelial Barrier Damage Caused by Dishwasher Detergents and Rinse Aids. *J Allergy Clin Immunol* 2023;151:469–484. DOI: 10.1016/j.jaci.2022.10.020. This is a mechanistic paper on commercial dishwasher rinse-aid/detergent toxicity to human intestinal epithelial organoids and air–liquid interface cultures. It is itself out of HMI scope (no heavy-metal occurrence data), but a future routing decision may want it on a dishwasher / rinse-aid product page as exposure-mechanism context. Not load-bearing for the wiki at this time.

**Actual PDF content:** Ferraro VA, Zanconato S, Carraro S. *The Epithelial Barrier Hypothesis in Food Allergies: The State of the Art.* Nutrients 2025;17(6):1014. DOI: 10.3390/nu17061014. Published 14 March 2025. CC BY 4.0. Twelve-page narrative review (Unit of Pediatric Allergy and Respiratory Medicine, University of Padova, Italy). Covers epithelial barrier biology of skin / gut / airway, environmental drivers of barrier damage (climate, ozone, PM, cigarette smoke, detergents, microplastics, food additives), and the Th1/Th2 imbalance model of food-allergy pathogenesis. The expected Ogulur 2023 paper appears as reference [44] in the bibliography. Zero original measurements, zero heavy-metal data, zero quantitative exposure values.

**Why the substituted content is out of HMI scope (independent of the filename mismatch):**
- The Ferraro 2025 review reports no concentrations, fluxes, exposure doses, or supply-chain residue values for any analyte.
- The detergent/rinse-aid discussion is qualitative pathway context (surfactants damage tight junctions → barrier permeability → Th2 shift), not chemical-occurrence data.
- The heavy-metals analytes named on `metals/` pages (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U) are not mentioned in the paper.
- Even if HMI broadened scope to include allergy-mechanism reviews of household-cleaner chemistries, this is a tertiary narrative review, not a primary mechanistic study. The primary Ogulur 2023 paper (currently absent from the wiki) is the load-bearing reference for that claim chain, not this review.

**PDF metadata:**
- Title (metadata): The Epithelial Barrier Hypothesis in Food Allergies: The State of the Art
- Journal: Nutrients 2025, 17, 1014
- Authors: Ferraro VA, Zanconato S, Carraro S (Padova, Italy)
- DOI (actual content): 10.3390/nu17061014
- License: CC BY 4.0
- Pages: 12
- File size: 778,583 bytes
- sha256: `f416409733b72e87fa26c68b1a1e2414b984f689e4aa86fbcbb396eeba4cc173`

**Identity checks (clean — no existing wiki page; correctly absent because the actual content is out-of-scope and the expected Ogulur 2023 paper has not been ingested):**
- Author grep (`ogulur`, `ferraro`) → no matches in `wiki/sources/`.
- DOI grep (`10.3390/nu17061014`, `10.1016/j.jaci.2022.10.020`) → no matches in `wiki/sources/`.
- Cite-key grep (`ogulur2023`, `ferraro2025`) → no matches in `wiki/sources/`.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- The intended paper — Ogulur et al. 2023, gut epithelial barrier damage from dishwasher detergents and rinse aids, *J Allergy Clin Immunol* — is high-profile and easily re-fetchable from publisher / PubMed (DOI 10.1016/j.jaci.2022.10.020). However, it is itself probably out of HMI scope (mechanistic toxicology of rinse-aid surfactants on organoid cultures, no heavy-metal measurements) and worth re-checking against the scope screen before sinking ingest time. If brought in, it would route as `exposure_only` context on a dishwasher-rinse-aid product page, not as direct evidence on any metal page.
- The substituted Ferraro 2025 review is genuinely out of scope and should be dropped, not re-fetched. Even at its best — a high-quality MDPI narrative review of food-allergy epithelial-barrier mechanisms — it contributes nothing to a heavy-metals corpus.
- Move this PDF to a `_corrupted-substitutions/` lane (as proposed in all prior KADC stop entries) so the wrapper does not re-attempt ingest on the same wrong-content file on subsequent loop ticks. Keep the filename as-is in the quarantine lane so the expected-paper identity is preserved for future re-fetch decisions.
- Systemic signal: this is now the **8th** confirmed Kimi-agent corruption substitution in the `Kimi_Agent_Download Corruption Issue/` folder. The pattern continues unchanged (filename advertises paper A, file body is an unrelated document B — here, a 2025 Padova allergy review masquerading as a 2023 Ogulur dishwasher-rinse-aid mechanism paper). The recommendation from prior stop entries stands: the wrapper should treat every PDF in this folder as guilty-until-proven-innocent and run a one-page filename-vs-title identity check before committing to a full ingest pass. The 8/8 base rate inside this folder is now strong enough that the *default* action for any PDF in `Kimi_Agent_Download Corruption Issue/` should arguably be "expect substitution," not "expect a clean fetch."

## STOP: KADC_rezaee-eskandarnezhad-2026-dishwashing-liquid-resi — out-of-scope (no heavy metals) AND likely fabricated/AI-generated paper

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/03_Dish_Soap_Dishwasher/Rezaee_Eskandarnezhad_2026_Dishwashing_Liquid_Residue.pdf`

**Suggested handle:** KADC_rezaee-eskandarnezhad-2026-dishwashing-liquid-resi

**Citation (as printed):** Rezaee M, Eskandarnezhad K. (2026). Investigating the number of chemical compounds remaining in dishwashing liquid on kitchen utensils and assessing the exposure risk. *Environmental Health and Pollution Research*, 1(1), 28-34. DOI: 10.22034/ehpr.2025.554481.1005. CC BY 4.0.

**Affiliation:** Department of Microbiology, School of Sciences, Sanandaj Branch, Islamic Azad University, Sanandaj, Iran.

**Reason for stop — two independent disqualifiers:**

**(1) Out of scope for HMI.** The paper measures only sodium lauryl sulfate (SLS, a surfactant) and methylisothiazolinone (MIT, a preservative) on three utensil materials. Zero heavy-metals data — no Pb, Cd, As, Hg, Ni, Al, Cr, Cr-VI, Sn, Sb, or U. The analyte set falls entirely outside the HMI / HMTc analyte vocabulary. The paper has nothing to contribute to any `metals/*` page; the only routing target would be `exposure_only` context on a dishwashing-liquid product page, and even that contribution would carry zero metals signal.

**(2) Paper-internal contradiction + predatory-journal markers.** Independent of scope, the paper has serious data-integrity problems that would make it unsafe to ingest even if it did report metals:

- **Tense contradiction across Methods vs. Results.** §2 Materials and Methods is written entirely in *future tense*: "Sampling will involve collecting surface residues...", "Each utensil will be washed...", "Surface swabs will be collected...", "Statistical analysis will be conducted using SPSS (version 27)...", "Exposure experiments will simulate real-world scenarios..." Yet §3 Results and Discussion reports *completed* findings in past tense with specific numerical values across seven tables: "This investigation quantified the residual chemical compounds...", "Ceramic plates exhibited the highest residue levels...", "Results revealed significantly higher SLS (0.15 ± 0.04 µg/cm²)..." A genuine peer-reviewed empirical paper does not describe its methods as a future protocol while simultaneously reporting completed measurements. The most plausible explanations are (a) the manuscript was assembled from a study-design proposal stitched onto fabricated or template-generated results, or (b) the entire paper was generated by an LLM that did not normalize verb tense across the methods/results boundary. Either way, the numerical content cannot be trusted.

- **AI-use disclosure.** The paper's own "AI Use Declaration" states "the authors used ChatGPT for language translation and generating the Graphical Abstract." Combined with the tense-contradiction pattern this is a stronger signal than the disclosure alone — ChatGPT involvement is plausibly broader than translation.

- **Predatory-journal indicators on *Environmental Health and Pollution Research*:**
  - Cover page shows the ISSN as literal placeholder text "ISSN: ××××-××××" (the journal had not yet been assigned an ISSN at publication).
  - This is Volume 1, Issue 1 of a journal that began publication in 2026 — no track record.
  - "Greens Trust" branding on every page, no recognizable publisher.
  - Received-to-published timeline: received 9 Nov 2025, revised 19 Nov 2025, accepted 10 Dec 2025, published 10 Dec 2025 — a 31-day review-to-publish cycle on the journal's launch issue with no listed editor or reviewers.
  - DOI prefix `10.22034` is shared with a cluster of Iranian university-affiliated open-access journals, several of which appear on Beall-style predatory-publisher lists.

- **Suspect references:**
  - "Navruzjon, N. (2025). Sustainability vs. market growth in household and professional cleaning products. *Universum: экономика и юриспруденция*, 2(7 (129)), 15-17. DOI: 10.32743/UniLaw.2025.129.7.20467" — a Russian-language sustainability/jurisprudence journal cited as authority on cleaning-product surfactant chemistry; the citation does not exist in standard databases.
  - "Rizvi, S. Q. (2021). | Surfactant use in detergents and cleaning products. DOI: 10.1520/MNL802019003207" — the malformed leading pipe character, the lack of a journal/publisher field, and the unusual DOI structure (10.1520 is ASTM's prefix, but the suffix `MNL802019003207` is not a valid ASTM manual identifier) are consistent with a hallucinated reference.
  - Most other references resolve to real publications, but the mix of real and fabricated citations is itself a known LLM-generation pattern.

**PDF metadata:**
- Title (PDF metadata): Investigating the number of chemical compounds remaining in dishwashing liquid on kitchen utensils and assessing the exposure risk
- Author (PDF metadata): Mehran Rezaee and Kimia Eskandarnezhad
- Creator: Microsoft® Word LTSC
- CreationDate: Thu Jan 1 14:16:31 2026 EET
- Pages: 7
- File size: 495,448 bytes
- sha256: `2aeacc69f9ceab0b2c67994a28766ce00b87863eec112838edcd28d262bec572`

Filename and PDF content are consistent — this is NOT a Kimi download-substitution case (unlike the other 8 confirmed substitutions logged above for this folder). The PDF really is the Rezaee/Eskandarnezhad paper its filename claims. The problem is that the paper itself is not fit for ingest.

**Identity checks (clean — no existing wiki page):**
- DOI grep (`10.22034/ehpr.2025.554481.1005`) → no matches in `wiki/sources/`.
- Author grep (`rezaee`, `eskandarnezhad`) → no matches in `wiki/sources/`.
- Cite-key grep (`rezaee2026`, `eskandarnezhad2026`) → no matches in `wiki/sources/`.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. The PDF is left in place.

**Recommendation for Karen:**
- Drop this PDF from the ingest queue permanently. It is out-of-scope for HMI on the analyte axis alone (no metals), and on top of that it has data-integrity failures that would disqualify it even from an in-scope corpus. There is nothing here worth re-fetching from the original source.
- Move to a `_out-of-scope/` lane (separate from the `_corrupted-substitutions/` lane proposed in prior stop entries — this is a different failure mode: genuine fetch of a genuinely-unfit paper, not a wrong-file substitution).
- **Systemic signal — second failure mode in `Kimi_Agent_Download Corruption Issue/`:** the prior 8 stop entries in this folder were all wrong-content substitutions (filename A, body of paper B). This entry is the first case in this folder where the filename and body match but the paper itself is unfit (out of scope + predatory journal + likely fabricated). The wrapper-level filename-vs-title check proposed in prior stop entries would NOT have caught this case. A scope-and-quality screen at the wrapper level — at minimum, "does the abstract mention any of the HMI metals?" — would. Worth considering as a second wrapper-level guard alongside the filename-vs-title identity check.
- The predatory-journal pattern is also worth flagging for the broader Kimi-corpus: if EHPR / Greens Trust shows up again in either the Kimi corruption folder or the regular Manual Fetch Kimi folder, the screening criteria here apply. The strict "no heavy metals → no ingest" gate is the cleanest filter; the journal-quality assessment is the backup gate for borderline cases.

## STOP: KADC_epa-2016-tce-prepub-copy — out of scope for HMI (organic chlorinated solvent, zero heavy-metals content)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/household_papers/04_Carpet_Degreaser_BBQ_Appliance/EPA_2016_TCE_Prepub_Copy.pdf`

**Suggested handle:** KADC_epa-2016-tce-prepub-copy

**Citation:** U.S. Environmental Protection Agency. (2016, December 6). Trichloroethylene; Regulation of Certain Uses Under TSCA §6(a). Proposed Rule. 40 CFR Part 751. Docket EPA-HQ-OPPT-2016-0163; FRL-9949-86; RIN 2070-AK03. Prepublication copy signed by the EPA Administrator on December 6, 2016, ahead of *Federal Register* publication. 137 pages.

**Reason for stop — out of scope for HMI on the analyte axis.**

The rule regulates trichloroethylene (TCE, CAS 79-01-6), a chlorinated organic solvent (C₂HCl₃). The entire document concerns TCE's health effects (developmental toxicity including fetal cardiac malformations and fetal death; immunotoxicity; kidney damage and kidney cancer; non-Hodgkin's lymphoma; reproductive and endocrine effects; neurotoxicity including trigeminal neuralgia; liver toxicity and liver cancer) and the proposed prohibition of TCE use in (a) aerosol degreasing and (b) spot cleaning at dry-cleaning facilities. The proposed rule also covers downstream notification and recordkeeping requirements under TSCA §6(a).

Zero heavy-metals data, zero heavy-metals discussion. The analyte set falls entirely outside the HMI / HMTc analyte vocabulary (Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U). The closest connection — that TCE is used as a metal-degreasing solvent in industrial settings (about 14.7% of US TCE use per the preamble), and that aerosol-degreaser product cans share a product category with some downstream HMI product pages — is not a heavy-metals claim. The rule does not measure, regulate, or even mention any heavy metal as an analyte. The HMI scope rule applies cleanly: no metals → no ingest.

**Why this is not a `regulations/` page either.** The wiki's `regulations/` directory holds heavy-metals regulatory limits, reference doses, and threshold documents (ATSDR MRLs for Al/Cd/Pb/Hg, EPA IRIS RfDs for As/Cd/Pb/Hg/MeHg, EFSA TWIs for the same, EU/Codex/China/Australia maximum levels for Pb/Cd/iAs/tHg in foods, etc.). A TSCA §6(a) proposed rule for a chlorinated organic solvent does not fit the schema and would not be referenced from any `metals/*` page. A non-metal `regulations/` page would also be an orphan: no `metals/*`, `ingredients/*`, or `products/*` page would link to it as evidence of a metals-related threshold.

**Folder-context check.** The parent folder is `04_Carpet_Degreaser_BBQ_Appliance`, which on its face hints at carpet-degreaser and BBQ-appliance product categories. Those products *can* carry heavy-metals signal (heavy-metal residues in carpet fibers, Pb/Cr in degreaser concentrates from supply-chain contamination, Cr/Ni release from BBQ grills). But the chemical scope of *this* paper — TCE as an aerosol-degreasing solvent — is orthogonal to that signal. The folder name suggests the curator's broader thematic interest in degreaser/appliance products, not a guarantee that every PDF in the folder carries metals data.

**Note on consistency with prior precedent.** This stop matches the pattern of the prior `rezaee2026-dishwashing-liquid-utensil-residue` stop in this same file (out of scope on the analyte axis — SLS and MIT only, no metals). Both are "filename and body match, paper genuinely exists, but the analyte set falls outside HMI." Neither is a Kimi-substitution corruption case. The KADC folder therefore contains at least three failure modes simultaneously: (1) wrong-file substitutions, (2) genuinely-fetched but unfit/predatory papers, and (3) genuinely-fetched papers that are well-conducted and in a published venue but report only non-metal analytes. The wrapper-level scope screen ("does the title/abstract mention any HMI metal?") would catch (3) cleanly — TCE never appears alongside Pb/Cd/As/Hg/etc. as a co-analyte.

**PDF metadata:**
- Title (PDF body): "Trichloroethylene; Regulation of Certain Uses under TSCA §6(a)"
- Action: Proposed Rule
- FRL: 9949-86
- Docket: EPA-HQ-OPPT-2016-0163
- RIN: 2070-AK03
- Date signed: 2016-12-06
- Pages: 137
- File size: 400,819 bytes
- sha256: `8ac5ceba7fe67cd62d2952bbb3733b4765d72c65a1af0501305a4d71dd531478`

**Identity checks (clean — no existing wiki page; correctly absent because the document is out of scope):**
- DOI grep — no DOI (Federal Register prepublication copies are docket-numbered, not DOI-tagged). EPA-HQ-OPPT-2016-0163 grep → no matches in `wiki/sources/`.
- raw_handle grep (`EPA_2016_TCE`, `epa-2016-tce`) → no matches in `wiki/sources/`.
- Cite-key grep (`epa2016-tce`, `trichloroethylene`) → no matches in `wiki/sources/`.

**Action taken:** No ingest. No source page written. No commits. No audit-queue append. Tracker row updated from `unprocessed` → `stopped` with the out-of-scope reason so the wrapper does not re-attempt on subsequent ticks. PDF left in place.

**Recommendation for Karen:**
- Drop this PDF from the ingest queue permanently. Out-of-scope on the analyte axis; nothing in the document maps to any HMI page.
- Move to a `_out-of-scope/` lane (same lane as the Rezaee/Eskandarnezhad stop above; distinct from the `_corrupted-substitutions/` lane for the Kimi wrong-file cases).
- The wider TCE-related literature (e.g., TCE risk assessments, IRIS toxicological review, Ramazzini bioassays) is similarly out of scope unless a specific paper co-reports a heavy-metals analyte alongside TCE, which is unusual.
- Reinforces the systemic recommendation in the Rezaee stop: a wrapper-level scope screen at the abstract level ("does the abstract mention any of the HMI metals?") is the cleanest gate; it would short-circuit both predatory-journal papers and well-conducted non-metal papers before they reach the per-PDF ingest skill.
