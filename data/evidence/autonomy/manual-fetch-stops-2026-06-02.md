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

