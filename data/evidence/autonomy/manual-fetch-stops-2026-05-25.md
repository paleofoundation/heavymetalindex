---
type: autonomy-log
date: 2026-05-25
purpose: Per-PDF stop notes from /ingest-next-manual-fetch-pdf cycles
---

# Manual-fetch ingest stops — 2026-05-25

## STOP: david2008-heavy-metals-canned-tomato-paste-romania (already-audited)

- **PDF:** `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf`
- **Suggested handle:** `MFK_the-heavy-metals-analyses-in-canned-tomato-paste`
- **Existing wiki page:** `wiki/sources/david2008-heavy-metals-canned-tomato-paste-romania.md`
- **Existing page `updated:`** 2026-05-20 (post-2026-05-14)
- **Audit-queue row 248:** `audited-revised` / verdict QUARANTINE / 7 of 8 findings applied / 0 rejected / 1 deferred (commit 11483b0, 2026-05-20T16:16:53Z)
- **Routing audits:** cite-key not in `routing_malformed.csv`, not in `routing_unresolved.csv`
- **Verification pass against PDF (this session):** Table 1 values all match PDF p. 342 column order Cr/Fe/Pb/Cd/Sn/Al/Zn/As across all 5 samples; brand firewall correctly applied (Sultan / La Grande Famiglia / Winmark / Maxim's / Regal → product-form descriptors); methods accurate (novAA 400 G, ISO 15586:2003, MWS-2 Berghof, PGZ 402 Voltalab, calibration R Fe 0.99699 / Sn 0.9983); voltammetry Sn cross-check 3.60 / 3.40 ppm; regulation slug `eu-1881-2006-contaminants-superseded` exists; all four referenced ingredient/product slugs exist.

**Reason:** Page qualifies for SKILL.md Phase 1 step 1 skip rule ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"). The wrapper script selected this PDF but the v2.0 cycle was already completed on 2026-05-20. Re-running ingest + a second audit-subagent pass would produce no content changes and would consume Agent-tool budget that is better spent on un-ingested or pre-2026-05-14 PDFs in the same folder.

**Suggested next action for wrapper:** advance the queue past this PDF; pick a folder-mate whose wiki source page is missing or has `updated:` before 2026-05-14.

## STOP: cwielag-drabek2025-nuts-cd-pb-cr-ni-poland (true duplicate conflict — two existing pages for one DOI)

- **PDF:** `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0297_Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts_ Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts — Health Risk of.pdf`
- **Suggested handle:** `MFK_p0297-evaluation-of-cadmium-lead-chromium-and-nick`
- **DOI:** `10.1007/s12011-024-04438-4` (Biological Trace Element Research 203:3913–3930, 2025)
- **DOI grep hit two existing wiki source pages:**
  1. `wiki/sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland.md` (correctly-keyed; first author Ćwieląg-Drabek)
  2. `wiki/sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland.md` (malformed cite-key, mangled "Ćwieląg" + "Nieć[-Leśniak]")

**Why this is a stop, not a merge-enhance:**

The skill's EXISTING-path merge-enhance assumes a single existing page per DOI. Here there are two, and they disagree:

- Page (1) `cwielag-drabek2025` has accurate methods (ETAAS Savant AA Sigma GBC, HNO3-only digestion — matches PDF p. 3917) but a `raw_path` pointing to a condiment_papers folder it doesn't belong to, `products: ["[[products/cashews]]"]` only (thin — should include peanuts and nuts-seeds-other), and the typo `ingredients/almond` (no such page; canonical slug is `almonds`).
- Page (2) `cwielagniec2025` has **invented methods** ("Perkin-Elmer AAnalyst 800" / "HNO3 + HClO4 digestion" — neither appears in the paper; PDF p. 3917 names Savant AA Sigma GBC and supra-pure HNO3 only), **wrong EU MLs** (claims 0.1 mg/kg for peanuts and 0.05 mg/kg for other nuts; the paper itself cites the EU ML as 0.20 mg/kg for tree nuts and peanuts on p. 3918), unsupported "dry weight" basis attributions, and a stripped country attribution ("country: unspecified" for the 0.818 mg/kg Pb peanut sample when the paper explicitly says Poland, p. 3918). The cite-key itself is malformed.

Both pages are referenced inside generator-owned BEGIN/END marker blocks across `wiki/metals/{nickel,cadmium,lead,chromium}.md`, six ingredient pages, three product pages, `data/evidence/product_source_routing_audit.csv`, `data/evidence/review_events.jsonl`, `data/evidence/hmtc_aggregate_distributions.csv`, `data/evidence/cells-needing-synthesis.csv`, and the discovery corpus index. A clean dedup requires (a) deleting page (2), (b) merge-enhancing page (1) with correct raw_path / products / ingredient-slug fix / merged numerical detail from both prior versions verified against the PDF, (c) re-running every downstream generator that has page (2) baked into a BEGIN/END block, and (d) cleaning the audit-queue and synthesis-cells CSVs of page (2)'s cite-key. Steps (c) and (d) are outside what a single per-PDF ingest cycle does and would touch generator-owned blocks the skill forbids editing by hand.

This matches the skill's "True duplicate conflict" stop condition in spirit: the standard merge-enhance flow cannot resolve it without cross-cutting changes Karen should coordinate.

**Verification work already completed in this session** (so it doesn't need to be redone when the dedup is run):

- Read PDF pp. 1–18 (full body + all tables + references).
- Confirmed first author surname is Ćwieląg-Drabek (so `cwielag-drabek2025` is the correct cite-key; `cwielagniec2025` is malformed).
- Confirmed methods on PDF p. 3917: ETAAS Savant AA Sigma (GBC, Australia); microwave digestion in 8 mL supra-pure HNO3 (Merck) in Teflon containers, Magnum II ERTEC reactor; four-stage program (5 min/60% / 5 min/80% / 10 min/100% / 10 min cooling); recoveries Ni 98%, Cr 107%, Cd 95%, Pb 101%; LOD Cd 0.0017, Pb 0.018, Ni 0.27, Cr 0.034 mg/kg; LOQ Cd 0.0032, Pb 0.032, Ni 0.44, Cr 0.06 mg/kg.
- Confirmed n=69 (16 peanuts, 15 hazelnuts, 15 almonds, 8 cashews, 15 walnuts) from 13 countries; PDF p. 3916.
- Confirmed mean concentrations PDF p. 3918: Cd peanuts 0.092 mg/kg highest; Pb peanuts 0.229 mg/kg highest, one Polish peanut sample 0.818 mg/kg exceeded Chinese ML; Ni cashews 6.434 mg/kg highest, almonds 1.299 mg/kg lowest; Cr almonds 0.253 mg/kg highest, walnuts 0.133 mg/kg lowest.
- Confirmed below-LOQ rates p. 3918: Cd 41%, Pb 49%, Ni 21%, Cr 4%.
- Confirmed EU ML cited in paper is 0.20 mg/kg for Cd in tree nuts and peanuts; no EU ML for Pb / Ni / Cr in nuts (Chinese MLs apply: Cd 0.5 mg/kg, Pb 0.2 mg/kg peanuts only).
- Reference doses (paper p. 3917): Cd 0.0010, Pb 0.0036, Ni 0.0200, Cr 0.0030 mg/kg bw/day.
- License: CC BY 4.0 (PDF p. 3928).
- Paper does NOT specify wet vs dry weight basis explicitly — the digestion is performed on as-purchased nut samples without a prior drying step, so values are best read as as-purchased; both existing pages' "dry weight" annotation in page (2) is unsupported by the paper.
- No brand attribution in source-page-eligible body. Methods-vendor names (GBC Savant AA Sigma, ERTEC, TESTCHEM, OHAUS, Merck) are scientific-method-vendor names permitted by Part 12 Exception 2.

**Suggested next action for Karen / dedup pass:**

1. Delete `wiki/sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland.md` (malformed cite-key, invented methods, wrong reg values).
2. Merge-enhance `wiki/sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland.md`:
   - Fix `raw_path` to `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0297_Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts_ Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts — Health Risk of.pdf`.
   - Fix ingredient slug `almond` → `almonds`.
   - Expand `products:` to `["[[products/peanuts]]", "[[products/cashews]]", "[[products/nuts-seeds-other]]"]` (per page (2)'s product set, which routes correctly to existing pages).
   - Drop unsupported "dry weight" annotations; the paper does not specify basis, so values are as-purchased nut.
   - Set `updated: 2026-05-25`.
   - Add `## Verification notes` documenting the dedup: page (2)'s invented methods and wrong regulatory values were verified against PDF and rejected; page (1)'s table values and methods were verified against PDF and kept; raw_path, products, and almond-slug typo were corrected.
3. Re-run downstream generators that have `cwielagniec2025` baked in (metals, ingredients, products, routing audit, hmtc_aggregate_distributions, cells-needing-synthesis, review_events, discovery corpus-index).
4. Clean `data/evidence/audit-queue.csv` of `cwielagniec2025` entries; add a single `cwielag-drabek2025` `pending` entry for fresh audit.

The wrapper should advance the queue past this PDF; the dedup is a non-trivial coordinated cleanup task for a dedicated session, not a per-PDF cycle.

**Wrapper output line:** `STOP: true-duplicate-conflict cwielag-drabek2025-nuts-cd-pb-cr-ni-poland`

---

## Stop entry — P0300 (pumpkin/sunflower/watermelon/jabooni seeds, Iran)

**PDF:** `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0300_Concentration and exposure assessments of cadmium and lead in pumpkin, sunflower, watermelon, and jabooni seeds collected in Iran.pdf`

**Suggested handle:** `MFK_p0300-concentration-and-exposure-assessments-of-ca`

**Stop reason:** Source-file data integrity failure — PDF is truncated and unrecoverable. Cannot read source; cannot meet Cochrane-quality ingest bar.

**Evidence:**

- `file` reports `PDF document, version 1.6 (zip deflate encoded)`, size 540608 bytes.
- File **does not end with `%%EOF`**. The last 200 bytes of the file are raw deflate-stream payload bytes ending with `...31 51 8e 15` — no `endstream`, no `endobj`, no `xref`, no `trailer`, no `%%EOF` marker.
- `pdftotext` (poppler) fails: `Syntax Error: Invalid XRef entry 0` / `Syntax Error: Missing 'endstream' or incorrect stream length` / `Internal Error: xref num 2593 not found but needed, try to reconstruct` / `Top-level pages object is wrong type (null)` / `the first page (1) can not be after the last page (0)`.
- `pypdf` (strict=False) fails: `Cannot find "/Root" key in trailer` / `Error: Cannot find Root object in pdf`.
- `pdfminer.six` (PDFParser/PDFDocument) fails: `PSEOF: Unexpected EOF`.
- Read tool: `PDF file is corrupted or invalid.`
- `strings` finds no DOI, no subject terms (pumpkin / sunflower / watermelon / jabooni / cadmium / Iran / seed), no journal name in the file — content streams are deflate-compressed and the file was truncated before any extractable metadata. The only readable strings are the partial XMP packet (empty `<dc:title></dc:title>`) and CMYK swatch noise.
- No `raw/markdown/MFK_p0300*` Marker-converted markdown version exists.
- No existing `wiki/sources/` page matches by handle prefix `MFK_p0300` or `p0300`, nor by the seed-keywords pumpkin / sunflower / watermelon / jabooni (the only sunflower hit is `fu2022-sunflower-cd-cultivar-transcriptomics.md`, an unrelated cultivar-transcriptomics paper).

**Action this skill cannot take autonomously:**

The PDF needs to be **re-fetched from source**. Likely DOI candidates (to be confirmed by Karen, not by this session — I do not generate URLs):
- The title `"Concentration and exposure assessments of cadmium and lead in pumpkin, sunflower, watermelon, and jabooni seeds collected in Iran"` is distinctive enough to recover via paper-lookup (PubMed / Crossref / OpenAlex by title). The `discover` or `paper-lookup` skill should be able to re-fetch a clean PDF; the corrupted one in `raw/` should be replaced.

**Suggested next action for Karen / wrapper:**

1. Re-fetch the PDF (paper-lookup by exact title, OR drop it back into the manual-fetch queue with a verified source).
2. Once a clean PDF exists at the same `raw_path`, re-invoke `/ingest-next-manual-fetch-pdf` on it.
3. Wrapper should advance the queue past this PDF for this tick — corrupt file is not a transient issue.

**Wrapper output line:** `STOP: corrupt-pdf P0300-pumpkin-sunflower-watermelon-jabooni-seeds-iran (truncated, no %%EOF, unrecoverable)`

---

## Stop entry — P0306 (misnamed PDF: dietary patterns / abdominal obesity, off-topic for HMI)

**PDF:** `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0306_Metals in Cow Milk and Soy Beverages.pdf`

**Suggested handle:** `MFK_p0306-metals-in-cow-milk-and-soy-beverages`

**Stop reason:** Filename mismatch — the PDF is not about metals in cow milk and soy beverages. The actual paper is an off-topic dietary-pattern / abdominal-obesity epidemiology paper with **zero heavy metals analysis**. Outside HMI scope.

**Actual paper (read in full, all 14 pages):**

- **Title:** "Prospective Associations between Dietary Patterns and Abdominal Obesity in Middle-Aged and Older Korean Adults"
- **Authors:** Kyung Won Lee, Min-Sook Kang, Seung Jae Lee, Haeng-Ran Kim, Kyeong-A Jang, Dayeon Shin
- **Journal:** Foods 2023, 12, 2148
- **DOI:** 10.3390/foods12112148
- **License:** CC BY 4.0
- **Design:** Prospective cohort, KoGES-HEXA, n=48,037 Korean adults aged ≥40, mean follow-up 4.89 years.
- **Outcome:** Incidence of abdominal obesity (waist circumference ≥90 cm men / ≥85 cm women per Korean Society for Study of Obesity).
- **Methods:** Factor analysis on 106-item FFQ → three dietary patterns ("healthy", "coffee and sweets", "multi-grain"). Cox proportional-hazards models for HR (95% CI) of abdominal obesity by quartile of dietary pattern score.
- **Results:** "Healthy" pattern inverse with abdominal obesity (HR Q4 vs Q1 0.86 men / 0.90 women); "coffee and sweets" positive (HR 1.23 men / 1.14 women); "multi-grain" null.

**Why this is out-of-scope for HMI:**

- The paper measures and reports **no heavy metals concentrations whatsoever**. No Pb, Cd, As, Hg, Ni, Al, Cr, Sn, Sb, U values appear anywhere in body text, tables, or supplementary content I could see. No analytical chemistry methods (no ICP-MS / AAS / digestion / reference materials). No exposure-assessment numbers for metals (no EDI / MOE / THQ for any metal).
- The only references to "metals" in the entire document are absent — the word "metal" does not appear in the abstract, methods, results, discussion, or conclusions.
- The Materials & Methods section (§2) covers only dietary-pattern factor analysis and Cox modeling. The Tables (1–6) cover factor loadings, sociodemographics by quartile, nutrient intake by quartile (calcium and sodium as **nutrients**, not contaminants), and adjusted HRs for abdominal obesity. There are no heavy-metals tables.
- Calcium and sodium appear in nutrient-intake columns (mg/day) as dietary intake, not as contamination loads in food matrices. This is nutrition-science data, not contamination data.

**No identity-check work needed:**

- DOI grep against `wiki/sources/` is moot — the DOI does not belong to any HMI source page and should not.
- This paper does **not** belong in the corpus at all, regardless of whether it has a wiki page.
- The filename on disk is misleading; the file is intact, just mis-labeled or mis-saved by whoever populated the manual-fetch queue.

**Suggested next action for Karen / wrapper:**

1. The PDF should be moved out of the manual-fetch queue (e.g., to a `raw/Manual Fetch Kimi /_misfiled/` holding area, or deleted if Karen has another copy elsewhere). Leaving it in `08_Nuts_Seeds_Legumes_and_Misc/` will cause every future ingest tick to re-evaluate and stop on it.
2. **Recover the intended paper:** the filename suggests Karen wanted a paper actually titled something like "Metals in Cow Milk and Soy Beverages." Use `paper-lookup` or `discover` on that exact title (or near variants) to re-fetch the correct PDF, then drop it into the same folder under a corrected filename. Candidate matches would be on the order of Rebellato 2020 (Brazil, Pb/Cd/As in cow vs soy milks) or similar — but I am not generating that URL; Karen should confirm via the lookup skills.
3. Wrapper should advance the queue past this PDF for this tick — misfiled file is not a transient issue, will not self-resolve.

**No commits made.** No wiki page created. No routing audit run. No audit-queue entry added.

**Wrapper output line:** `STOP: off-topic-pdf P0306-misnamed (actual content: dietary-patterns/abdominal-obesity, not metals)`

---

## Stop entry — P0314 (misnamed PDF: COVID-19 / ASQ developmental outcomes, off-topic for HMI)

**PDF:** `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0314_Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India.pdf`

**Suggested handle:** `MFK_p0314-non-carcinogenic-and-carcinogenic-health-ris`

**Stop reason:** Filename mismatch — the PDF is not about heavy metals in cooked beans and vegetables from Punjab. The actual paper is an off-topic COVID-19 / child-developmental-outcomes epidemiology paper with **zero heavy metals analysis**. Outside HMI scope.

**Actual paper (read pages 1–10 of 14, covering abstract, intro, methods, full Tables 1–3, and most of results):**

- **Title:** "Effects of COVID-19 Financial and Social Hardships on Infants' and Toddlers' Development in the ECHO Program"
- **Authors:** Sara S. Nozadi, Ximin Li, Xiangrong Kong, Brandon Rennie, Deborah Kanda, Debra MacKenzie, Li Luo, Jonathan Posner, Courtney K. Blackwell, Lisa A. Croen, Assiamira Ferrara, Thomas G. O'Connor, Emily Zimmerman, Akhgar Ghassabian, Leslie D. Leve, Amy J. Elliott, Rebecca J. Schmidt, Jenna L. N. Sprowles, Johnnye L. Lewis
- **Journal:** International Journal of Environmental Research and Public Health 2023, 20, 1013
- **DOI:** 10.3390/ijerph20021013
- **License:** CC BY 4.0
- **Design:** Longitudinal analysis within the NIH ECHO program; eight ECHO cohorts; N=684 children with paired pre- and during-pandemic ASQ assessments.
- **Outcome:** Change in Ages and Stages Questionnaire (ASQ-3) scores across communication, gross motor, fine motor, problem-solving, and personal-social domains from pre- (Aug 2018–11 Mar 2020) to during-pandemic (Mar 2020–Aug 2021) visits.
- **Exposures:** Three COVID-related hardship variables — parental job loss/change (financial), quarantining from household members (social), less contact with family/friends outside the home (social).
- **Methods:** GEE logistic regression for loss-of-developmental-status; GEE linear regression for change in ASQ z-scores; multiple imputation (Chained Equation, 10 imputations × 10 iterations) for missing covariates; Bonferroni-corrected α=0.008 for multiple comparisons.
- **Results:** No significant association between the three hardship exposures and ASQ change in any domain after multivariate adjustment; male children had >2× odds of developmental loss in communication (OR 2.4) and personal-social (OR 2.4) vs females; baseline ASQ z-scores strongly predicted change.

**Why this is out-of-scope for HMI:**

- The paper measures and reports **no heavy metals concentrations whatsoever**. No Pb, Cd, As, Hg, Ni, Al, Cr, Sn, Sb, U values appear anywhere in abstract, methods, results, tables, or discussion through page 10. No analytical chemistry methods (no ICP-MS / AAS / digestion / reference materials). No exposure-assessment numbers for any metal (no EDI / MOE / THQ).
- The Materials & Methods section covers only the ECHO COVID-19 survey instrument and ASQ-3 administration — no environmental sampling, no biomonitoring, no food-matrix analysis.
- Tables 1–3 cover sociodemographic baseline, multivariate ORs for ASQ-status loss, and multivariate estimates for ASQ z-score change. No contamination data.
- The paper appears in a journal that publishes both environmental-contamination and public-health-epidemiology work; the journal name overlap is what likely caused the misfiling, but this specific paper is a developmental-epidemiology study, not contamination work.

**No identity-check work needed:**

- DOI grep against `wiki/sources/` is moot — DOI `10.3390/ijerph20021013` does not belong to any HMI source page and should not.
- The paper does **not** belong in the corpus at all, regardless of whether it has a wiki page.
- The filename on disk is misleading; the file itself opens cleanly (14 pages, no truncation, full text extractable), just mis-labeled or mis-saved by whoever populated the manual-fetch queue.

**Suggested next action for Karen / wrapper:**

1. Move the PDF out of the manual-fetch queue (e.g., to a `raw/Manual Fetch Kimi /_misfiled/` holding area, or delete if Karen has another copy). Leaving it in `08_Nuts_Seeds_Legumes_and_Misc/` will cause every future ingest tick to re-evaluate and stop on it.
2. **Recover the intended paper:** the filename suggests Karen wanted a paper actually titled "Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India." Use `paper-lookup` or `discover` on that exact title (or near variants — candidate authorship would likely be Indian researchers, ~2018–2024 publication) to re-fetch the correct PDF, then drop it into the same folder under a corrected filename. I am not generating a URL; Karen should confirm via the lookup skills.
3. Wrapper should advance the queue past this PDF for this tick — misfiled file is not a transient issue, will not self-resolve.

**No commits made.** No wiki page created. No routing audit run. No audit-queue entry added.

**Wrapper output line:** `STOP: off-topic-pdf P0314-misnamed (actual content: COVID-19/ASQ child-development, not heavy metals)`
