---
type: doc
purpose: Stop-condition log for autonomous manual-fetch ingest cycles, 2026-05-17
audience: [karen, claude-code]
updated: 2026-05-17
---

# Manual-fetch ingest stops — 2026-05-17

## bair2022-infant-toddler-food-heavy-metals-policy (MFK_a-narrative-review-of-toxic-heavy-metal-content-of)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.3389/fnut.2022.919913`) → hit at `wiki/sources/bair2022-infant-toddler-food-heavy-metals-policy.md`.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17 (commit `40908aa`): Codex 7 findings / 7 applied / 0 rejected, plus a strict Part 12 recheck with 2 more findings applied.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## houlihan2019-hbbf-whats-in-baby-food (MFK_babyfoodreport-english-r6-0)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/BabyFoodReport_ENGLISH_R6_0.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- raw_path grep on `BabyFoodReport_ENGLISH_R6_0.pdf` → hit at `wiki/sources/houlihan2019-hbbf-whats-in-baby-food.md` (no DOI assigned for this HBBF report; raw_path is the content-identity anchor).
- Cite-key grep on `houlihan2019` → same file, confirmed.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Verification notes on the page already document both the 2026-05-17 slug-vocabulary enhancement and a 2026-05-17 cross-vendor audit pass (raw_path, weight-basis qualifier, Appendix C method detail, iAs-only cereal-comparison caveat, Implications reframed to avoid wiki-side guidance and threshold-setting).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## tatsuta2024-mehg-duplicate-diet-children-japan (MFK_dietary-intake-of-methylmercury-by-05-years-childr)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Dietary intake of methylmercury by 0–5 years childrenusing the duplicate diet method in Japan.pdf`

**Stop reason:** PDF already processed within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1265/ehpm.24-00048`) → hits at TWO files:
  - `wiki/sources/tatsuta2024-mehg-duplicate-diet-children-japan.md` — canonical MFK ingest; `updated: 2026-05-17`; raw_handle `MFK_dietary-intake-mehg-children-duplicate-diet-japan`; raw_path points at this PDF; created in commit `0d0d0b0` (2026-05-17 13:07) as part of the parallel-subagent MFK batch.
  - `wiki/sources/tatsuta2024-methylmercury-intake-children-duplicate-diet.md` — legacy duplicate from FM_11111292 Papers Cube ingest; `updated: 2026-04-28`; raw_path `raw/markdown/FM_11111292/FM_11111292.md` (different ingest path; same DOI / same paper).
- Canonical MFK page is NOT in `routing_unresolved.csv` and NOT in `routing_malformed.csv`.
- Legacy FM page appears in `routing_malformed.csv` as an advisory (missing `matrices`) but does not point at this PDF.
- Suggested handle from wrapper (`MFK_dietary-intake-of-methylmercury-by-05-years-childr`) differs from canonical raw_handle, which is why discovery picked this PDF up despite the existing canonical match.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." The canonical MFK page satisfies the rule.

**Karen note (separate dedup):** Two source pages exist for the same DOI (one Kimi-fetched, one Papers-Cube-fetched). This is a duplicate-page-cleanup item for the `wiki/sources/` register, not work for this skill cycle (the skill ingests PDFs; it does not merge wiki/source-page duplicates that originated from different raw ingest paths). Recommend a separate pass: keep `tatsuta2024-mehg-duplicate-diet-children-japan` (post-schema, comprehensive Key numbers covering all six tables, populated correlations, QA detail, accurate exposure counts) and retire `tatsuta2024-methylmercury-intake-children-duplicate-diet` (older schema, malformed advisory, contains an unverifiable "13.8% above EPA RfD" claim not present in the source — the paper reports 51.8% of children with hair THg over 1.0 ppm RfD-equivalent and 15.6% over 2.2 ppm PTWI-equivalent; no 13.8% figure appears in the paper).

**Action taken:** none. No commit, no audit subagent spawned, no edits to either wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1038/s41598-026-44198-w`) → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `c75d66e`): subagent REVISE verdict, 5 findings (1 ❌ + 4 ⚠️), all 5 applied (Cr THQ misattribution corrected — Table 3 has no Cr column; BM Ni exceedance count 6→5; Cr highest-sample body-vs-Table-2 contradiction noted; Fe/Mn/Zn dropped from metals as nutritional not contamination; baby-food matrix dropped as non-vocab).
- Suggested handle from wrapper (`MFK_nutrient-exploration-and-heavy-metal-risk-assessme`) differs from canonical raw_handle (`MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia`), which is why discovery picked this PDF up despite the existing canonical match.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## rahati2026-infant-formula-baby-food-iran-health-risk (MFK_monte-carlo-simulation-approach-for-health-risk-an)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1186/s41043-025-01166-w`) → hit at `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md`.
- raw_handle grep (`MFK_monte-carlo-simulation-approach-for-health-risk-an`) → hit at same page (matches suggested handle exactly).
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17: v2.0 manual-fetch merge-enhance commit `bddf6cf`, subagent PROMOTE verdict (all 5 checks clean) commit `b237644`, Codex cross-vendor REVISE 5 findings / 5 applied / 0 rejected commit `2c5dcf6` (Table 2 SD transcriptions for IF Cu/Mn/Se and BF Ba/Co/Cr/Se; abstract-vs-Table-3 Cr CR contradiction (9.55e-5 / 3.57e-4 / 3.75e-4) made explicit; p.5 Cd-exceedance vs Table 2 nd inconsistency made explicit).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- Title/Umuahia grep → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- raw_handle on existing page is `MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia` (semantically equivalent to wrapper-supplied `MFK_nutrient-exploration-and-heavy-metal-risk-assessme`); DOI `10.1038/s41598-026-44198-w` confirmed against PDF page 1.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `c75d66e`): v2.0 manual-fetch merge-enhance + subagent REVISE verdict, 5 findings (1 ❌ + 4 ⚠️) / 5 applied / 0 rejected. Followed by Codex cross-vendor pass also on 2026-05-17 (already noted in page Verification notes: BM Cr-limit statement corrected to below-limit, opening summary tightened on missing Table 3 Cr THQ column and Table 2/abstract Ni inconsistency, nickel wiki-touch note set to 5 of 8 BM samples).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals — re-feed #3 (wrapper discovery loop)

**PDF:** same Umuahia/Nigeria baby-milk and infant-formula paper as the two preceding entries.

This is the third re-feed of this same PDF in this folder during 2026-05-17 sustained loop runs. Root cause is consistent with re-feed #2: the wrapper-supplied handle (`MFK_nutrient-exploration-and-heavy-metal-risk-assessme`) is the first-50-chars-of-filename slug, while the canonical `raw_handle` on the existing page is the semantic slug (`MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia`). The discovery layer's identity check on `raw_handle` therefore misses, and the PDF is re-served on every full-folder sweep. The three independent identity checks defined in the skill (DOI → raw_handle → cite-key) still resolve to the existing page on every cycle — DOI `10.1038/s41598-026-44198-w` hits — so the skill correctly stops here.

**Karen note (separate fix item):** the wrapper's identity check should be widened to compare `raw_path` directly (the full PDF path on the existing page is the most stable identity anchor) or to do a filename-suffix check, rather than re-deriving a handle from the filename and matching only on `raw_handle`. This is a wrapper-script bug, not a skill bug. Until that is fixed, expect this PDF to keep being re-served on every full-folder sweep and to keep hitting this stop branch with no work done.

**Action taken this cycle:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. Logging this entry so the re-feed pattern is visible in the autonomy report and so the wrapper-bug item has an artifact to point at.

## TCCP_Chemical_Lists_NY.pdf (suggested handle: MFK_tccp-chemical-lists-ny)

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_02_Regulatory_Reports/02_Regulatory_Reports/TCCP_Chemical_Lists_NY.pdf`

**Stop reason:** PDF file is structurally corrupted / truncated. Cannot be read by any available tool.

**Diagnostics:**
- `file` reports: `PDF document, version 1.7, 115 pages` (header parses).
- File size: 344,064 bytes (suspiciously round; multiple of 1024).
- `pdftotext`, `pdftoppm`, `pdftohtml`: all fail with `Invalid XRef entry 0`, `Missing 'endstream' or incorrect stream length`, `Couldn't find trailer dictionary`, `Couldn't read xref table`.
- `pypdf` (strict=False): `PdfStreamError: Stream has ended unexpectedly`, `EOF marker not found`.
- The Read tool reports the PDF as corrupted/invalid.
- No `mutool` / `qpdf` / `gs` (ghostscript) available on this machine to attempt structural repair.

**Likely cause:** the file appears truncated — file size is exactly 344,064 bytes (a 336-KiB round number) but the header claims 115 pages of content. This is consistent with a partial download or transfer-cut-off of the original NY DOH TCCP Chemical Lists PDF, not a parser bug.

**Identity checks (skipped):** cannot compare DOI / title / authors against `wiki/sources/` because the PDF cannot be opened. The suggested handle `MFK_tccp-chemical-lists-ny` does not match anything in `wiki/sources/`, and `tccp` does not appear in any source page filename — so this is almost certainly a NEW page that would need to be created if the PDF were readable. Skipping NEW-path ingest because the source cannot be verified.

**Action taken this cycle:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The corrupted PDF is left in place under `raw/` (immutable append-only per Part 4).

**Karen note (Karen-input item):** the original TCCP "Chemical Lists" PDF needs to be re-fetched from the New York Department of Health TCCP (Toxic Chemicals in Children's Products) program page. The current file under `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_02_Regulatory_Reports/02_Regulatory_Reports/TCCP_Chemical_Lists_NY.pdf` should be replaced with a complete copy before this entry can be retried. Once replaced, the wrapper can re-feed this PDF and the skill will pick it up on the next tick. This is a one-time source-acquisition fix, not a wrapper or skill bug.

## rahati2026-infant-formula-baby-food-iran-health-risk (MFK_monte-carlo-simulation-approach-for-health-risk-an)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1186/s41043-025-01166-w`) → hit at `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md`.
- raw_handle grep (`MFK_monte-carlo-simulation-approach-for-health-risk-an`) → same file.
- Cite-key grep (`rahati2026`) → same file.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17 (commit `b237644`): v2.0 manual-fetch merge-enhance from MFK 06_Infant_Foods_Formula; Phase 2 audit subagent returned PROMOTE on all 5 checks with 1 optional enhancement applied (paper-internal p. 5 Cd-exceedance vs Table 2 nd inconsistency note); 0 findings rejected; Codex cross-vendor audit 5 findings / 5 applied / 0 rejected (Table 2 SD transcriptions; explicit source-side CR 3.57E-4 vs Table 3 3.75E-4 contradiction; Cd exceedance vs nd contradiction).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1038/s41598-026-44198-w`) → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- raw_handle grep (`MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia`) → same file.
- Cite-key grep (`mgbemena2026`) → same file.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `c75d66e`): v2.0 manual-fetch merge-enhance from MFK 06_Infant_Foods_Formula; subagent REVISE verdict; 5 findings (1 ❌ + 4 ⚠️) 5 applied 0 rejected (Cr THQ misattribution to 4.2 corrected — Table 3 has no Cr column; BM Ni exceedance count 6→5; Cr highest-sample body-vs-Table-2 contradiction noted; Fe/Mn/Zn dropped from metals as nutritional not contamination; baby-food matrix dropped as non-vocab).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## kicinska2025-cosmetics-online-market-heavy-metals (MFK_health-risks-heavy-metals-cosmetics-online) — cross-folder file-system duplicate

**PDF (this cycle):** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Health_Risks_Heavy_Metals_Online_Market.pdf`

**Canonical raw_path on existing page:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Health_risks_from_heavy_metals_in_cosmetic_products_available_in_the_online_consumer_market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window. This is a true file-system duplicate — Karen has the same paper (Kicińska & Kowalczyk, *Scientific Reports* 15:316 (2025), DOI 10.1038/s41598-024-83477-2) filed in two subfolders of the Children Personal Care Papers tree (`babycare_01_Exposure_Pathways/01_Exposure_Pathways/` AND `babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/`). The babycare_01 copy is what the existing wiki source page is built on; the babycare_03 copy is what the wrapper served this cycle.

**Identity checks:**
- DOI grep (`10.1038/s41598-024-83477-2`) → hit at `wiki/sources/kicinska2025-cosmetics-online-market-heavy-metals.md`.
- Cite-key grep (`kicinska2025`) → same file.
- raw_handle wrapper-supplied (`MFK_health-risks-heavy-metals-online-market`) does NOT match canonical raw_handle on the existing page (`MFK_health-risks-heavy-metals-cosmetics-online`); this is the same wrapper handle-derivation issue documented above for mgbemena2026 / tatsuta2024.
- Existing page `updated: 2026-05-17` (today). Comprehensive Key numbers covering Tables 2–12 + Fig. 1 maxima; Methods section with full ICP-MS + microwave-digestion + QA/QC detail; Implications without HMTc threshold proposals; Verification notes already document license correction, product-slug remap to the Cat 2 Step 0 Lock vocabulary, Cr-total vs Cr-VI caveat, and an audit-subagent-found source-internal contradiction in the paper's QRA narrative (paper p. 10 asserts AEL > CEL "for all" samples but Table 12 shows AEL/CEL = 0.07 for lipsticks and 0.12 for eyeshadows, i.e., AEL < CEL).
- Page IS present in `data/evidence/routing_malformed.csv` BUT only at `severity: advisory` for the missing `ingredients` field, which the page's Verification notes explicitly document as intentional ("paper measures finished cosmetics, not raw ingredients (mineral pigments etc.). The routing layer's malformed-advisory for missing `ingredients` is expected for cosmetic-finished-product papers"). Advisory-only-with-documented-rationale is not a real malformed in the sense the v2 skill rule means; it is a known-and-accepted state for this entire class of cosmetic-finished-product sources.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `08b2149`): v2.0 manual-fetch merge-enhance; subagent REVISE; 3 findings applied (Iwegbue comparison typo; AEL/CEL source-internal inconsistency flagged in Verification notes; author-attribution tightening); 2 findings rejected as snapshot-staleness false positives (CHECK2 product slugs `makeup-foundation-powders-blush` + `face-neck-leave-on-skin-care` verified present in `wiki/products/`).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Karen note (separate fix item):** The babycare_03_Powder_Lotion_Oil_Diaper folder appears to contain a misfile — this paper studied adult cosmetics (foundations, blushes, lipsticks, face creams, face masks, eye shadows; BW 60 kg adult; no infant/child scenario) and does not measure baby powders, lotions, oils, or diapers. The duplicate filing is most likely a folder-organization artifact rather than a content reason to re-ingest. Once Karen has triaged the babycare_03 folder, either (a) delete the duplicate babycare_03 PDF and keep only the babycare_01 canonical, or (b) leave both in place and add a wrapper-level rule that skips PDFs whose filename (case-insensitive, normalized) maps to an existing source page's `raw_path` basename. Until then, expect this PDF to keep being re-served on every full-folder sweep of the babycare_03 folder.

**Action taken this cycle:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. Logging this entry so the cross-folder duplicate pattern is visible in the autonomy report.

## Lead_Cadmium_Mercury_Baby_Talcum_India.pdf (suggested handle: MFK_lead-cadmium-mercury-baby-talcum-india)

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Lead_Cadmium_Mercury_Baby_Talcum_India.pdf`

**Stop reason:** PDF file is structurally corrupted / truncated. Cannot be read by any available tool.

**Diagnostics:**
- `file` reports: `PDF document, version 1.7` (header parses; `%PDF-1.7` magic confirmed in first 8 bytes).
- File size: 1,195,286 bytes.
- `pdftotext`, `pdfinfo`, `pdftoppm`: all fail with `Invalid XRef entry 0`, `Missing 'endstream' or incorrect stream length`, `Couldn't find trailer dictionary`, `Couldn't read xref table`.
- `pypdf` (strict=False): `EOF marker not found`, `PdfStreamError: Stream has ended unexpectedly`.
- The Read tool reports the PDF as corrupted/invalid.
- The last 256 bytes of the file are random binary content with NO `%%EOF` trailer marker — direct evidence of truncation mid-stream, not just a parser bug.
- `sips` (macOS) attempted as repair fallback: `Cannot extract image from file. Error 13: an unknown error occurred`.
- No `mutool` / `qpdf` / `gs` (ghostscript) available on this machine to attempt deeper structural repair.

**Likely cause:** the file is truncated — the PDF header parses correctly but there is no xref table and no `%%EOF` trailer at the tail of the file. This is consistent with a partial download or transfer-cut-off of the original PDF, not a parser bug.

**Identity checks (informational, not used to gate the stop):**
- Filename and folder context (`Lead_Cadmium_Mercury_Baby_Talcum_India.pdf` in `babycare_03_Powder_Lotion_Oil_Diaper/`) strongly suggest the same paper as the already-ingested `wiki/sources/rashmi2020-baby-talcum-powder-heavy-metals-india.md`, whose `raw_path` points at a separate physical PDF at `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Heavy_metal_contamination_in_commonly_used_baby_talcum_powders_in_India.pdf` (the babycare_04 PDF is readable, 1,496,223 bytes; MD5 `07a9266988fadf6368427a5e11f4c5e1`). The babycare_03 corrupted PDF has a different MD5 (`3e4cb016dcc83013c21c73447cf343ff`) and different size, so it is a different file even if it is the same paper.
- Cannot complete the three identity checks (DOI / raw_handle / cite-key) because the PDF cannot be opened to read its DOI, title, or authors. The filename-and-folder pattern is suggestive but not authoritative.

**Action taken this cycle:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The corrupted PDF is left in place under `raw/` (immutable append-only per Part 4).

**Karen note (Karen-input item):** the babycare_03 copy of this PDF needs to be re-fetched (or deleted as a duplicate of the babycare_04 copy, if Karen confirms they are the same paper). The babycare_04 PDF of the same title is already ingested as `rashmi2020-baby-talcum-powder-heavy-metals-india` and is readable; if the babycare_03 file is indeed a duplicate fetch of that same Rashmi 2020 paper, deleting the corrupted babycare_03 copy is the simplest fix and will let the wrapper move on. If it is a *different* Indian baby-talcum-powder paper (the title pattern is generic enough that this is possible), the babycare_03 copy needs to be re-downloaded from source before this entry can be retried. This is a one-time source-acquisition fix, not a wrapper or skill bug.

## jitareanu2025-heavy-metals-cosmetics-overview (MFK_overview-heavy-metals-cosmetics-toxicological) — 2026-05-18

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Overview_Heavy_Metals_Cosmetics_Toxicological.pdf`

**Stop reason:** PDF is a byte-identical duplicate of an already-ingested PDF; existing page is post-2026-05-14 clean.

**Identity checks:**
- Filename grep on `wiki/sources/` → hit at `wiki/sources/jitareanu2025-heavy-metals-cosmetics-overview.md` (same title, same DOI `10.3390/app152412883`, same authors Jităreanu et al. 2025 Applied Sciences).
- SHA-256 of babycare_03 PDF = SHA-256 of babycare_01 PDF = `6962413139daeb23e7732542a75c8fcbb470f4fc8eaaddd35f07ef0ee093d6e6`. Byte-identical files.
- Existing page `updated: 2026-05-17` (yesterday, with extensive cross-vendor Codex audit).
- Page NOT in `data/evidence/routing_unresolved.csv`.
- Page is in `data/evidence/routing_malformed.csv` only as `advisory` severity (optional `ingredients`/`matrices` fields empty by design for a cosmetics review — not a structural defect; the routing audit reports 576 advisory rows, 0 blocking).
- Audit queue already records `audited-promote` for this cite-key from the 2026-05-17 pass.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Advisory-severity routing rows do not satisfy the "malformed" trigger.

**Action taken:**
- Added the babycare_03 path to the existing page's `near_duplicates` array (it was `[]`; the 2026-05-17 verification note had anticipated this but not yet added the path).
- Appended a verification note recording the SHA-256-confirmed duplicate and this skip decision.
- Bumped `updated:` to 2026-05-18.
- One commit. No audit subagent spawn (the existing page's 2026-05-17 audit already covers the content).
- Audit queue NOT touched (no re-ingest, no re-audit warranted).

**Why the small commit instead of a pure no-op:** future skill runs encountering this PDF would re-discover the duplicate from scratch unless `near_duplicates` records the path. The skill's intent is that this PDF, once seen, is never re-investigated.

## Petroleum_Jelly_Vaseline_Specification.pdf (suggested handle: MFK_petroleum-jelly-vaseline-specification) — 2026-05-18

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Petroleum_Jelly_Vaseline_Specification.pdf`

**SHA-256:** `a79af1761a1ea16f3a7ef0522a02f749f3d9382d776858524eec495d2ec481c1` (4 pages, 512,427 bytes, readable).

**Stop reason:** PDF is a single-vendor product specification sheet, not Cochrane-quality literature. The file is a 4-page anonymous vendor catalog listing physico-chemical and pass/fail specifications for four grades of petroleum jelly (Ultra Snow White Cosmetic Grade, Snow White Pharmaceutical Grade, Snow White Cosmetic Grade, Industrial White) against BP 2013/2012/2007 and ASTM methods. There is no author, no institution, no DOI, no journal, no publication date, no methodology section, and — critically — no actual heavy-metals concentration data. Arsenic and lead (Pb) lines for all three petroleum-jelly grades report only "Passed" against ISIRI-3949 (Iranian Institute of Standards and Industrial Research method); the Industrial White grade does not list any heavy-metals testing at all. Treating a pass/fail vendor spec with no measured values, no LOD/LOQ, no sample-population information, and no traceable provenance as a wiki source would inject non-evidence into the corpus.

**Identity checks:**
- DOI grep: PDF has no DOI to grep.
- raw_handle grep (`MFK_petroleum-jelly-vaseline-specification`) → no match in `wiki/sources/`.
- Filename grep (`petroleum`, `vaseline`) → only incidental matches in `wiki/sources/balogun2024-body-creams-delta-nigeria.md` (Balogun 2024 lists petroleum-jelly products as a product-type within an aggregate body-cream sample frame; not this vendor spec).
- No existing wiki source page for this PDF.

**Skill v2.0 rule applied:** none of the standard "skip post-2026-05-14 clean" or "merge-enhance pre-schema" rules apply. The applicable rule is the upstream corpus-admission criterion: only peer-reviewed papers, regulatory reports, agency datasets, and government public-record documents are wiki sources (see CLAUDE.md Part 4 "compiled wiki, not a query-time RAG surface" and Part 5 source-file-handling). Vendor product specification sheets with no measured values do not satisfy this bar regardless of where they are filed under `raw/`.

**Why this matters for Cochrane-quality posture:** the wiki's defensibility argument (Part 1) rests on operating a curated corpus of the *complete heavy metals literature*. Admitting a single-vendor pass/fail product spec as a corpus source would:
- Create a precedent that vendor catalogs are wiki-grade evidence, opening the door to thousands of supplier spec sheets that report only "Passed" against any number of regional/national standards.
- Contradict Part 2's wiki-says-what-literature-supports rule — a single vendor's pass/fail claim against ISIRI-3949 is neither literature nor an independent test result.
- Risk Part 12 brand-firewall concerns even though "Ultra Snow White / Snow White" are generic trade names — the page would essentially be a vendor marketing artifact reproduced inside the wiki.

**Action taken:** none. No commit, no audit subagent spawned, no wiki source page created, no audit-queue row appended. The PDF is left in place under `raw/` (immutable append-only per Part 4).

**Karen note (Karen-input item):** Karen should decide what to do with this file. Options:
1. **Delete from `raw/`** as an out-of-scope source mis-filed into `babycare_03_Powder_Lotion_Oil_Diaper/` during the Kimi-driven fetch (this is the most likely outcome — Kimi appears to have collected this as a "petroleum jelly" hit alongside actual baby-product literature).
2. **Re-classify as a methodology/specification reference** in a separate `raw/specifications/` or `raw/vendor-specs/` directory, with a note that these never become wiki sources but can be cited as background for product-form definitions if useful (e.g., what range of melting points / kinematic viscosities characterise "petroleum jelly" as a product form). This is a low-priority secondary use and probably not worth the directory.
3. **Search for the actual underlying study or regulatory document** that the spec references (BP 2013 petroleum jelly monograph, ISIRI-3949 standard for heavy metals in cosmetics) and fetch those as proper regulatory sources instead. This is potentially valuable — ISIRI-3949 is the standard Rahati 2026 referenced for the Iranian infant-formula market, and a regulatory page for it could anchor the Iran jurisdiction's heavy-metals limits across multiple cosmetic and food product categories.

Until Karen triages this PDF, the wrapper will continue re-serving it on every full-folder sweep and the skill will continue to log this stop. The simplest unblocking action is option (1).

## rahati2026-infant-formula-baby-food-iran-health-risk (MFK_monte-carlo-simulation-approach-for-health-risk-an)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1186/s41043-025-01166-w`) → hit at `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md`.
- raw_handle grep (`MFK_monte-carlo-simulation-approach-for-health-risk-an`) → same file.
- Cite-key grep (`rahati2026`) → same file.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17 (commit `b237644`): Codex 5 findings / 5 applied / 0 rejected, plus prior audit-subagent (general-purpose) PROMOTE verdict on all 5 checks with 1 optional enhancement applied (paper-internal p.5 Cd-exceedance vs Table 2 nd inconsistency note).
- Verification notes on the page already document the 2026-05-17 merge-enhance pass (predecessor `raw_handle: manual-fetch-kimi` placeholder → MFK handle; raw_path full filename; Co/Cu/Mn/Se transposition fixes; aluminium → aluminum; invalid baby-food-grain-based slug removed; rice/wheat ingredients removed; soy-non-soy overspecification rolled up to umbrella infant-formula-powder per Part 5b; access_url and near_duplicates added; all deterministic and probabilistic HI/CR re-verified line-by-line) plus the cross-vendor Codex audit pass.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1038/s41598-026-44198-w`) → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- Title grep ("Nutrient exploration and heavy metal risk assessment") → same file.
- raw_handle grep (`MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia`) → same file.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` (verdict REVISE, commit `c75d66e`, applied 2026-05-17): subagent 5 findings (1 ❌ + 4 ⚠️) / 5 applied / 0 rejected — Cr THQ misattribution to 4.2 corrected (Table 3 has no Cr column); BM Ni exceedance count 6→5; Cr highest-sample body-vs-Table-2 contradiction noted; Fe/Mn/Zn dropped from metals as nutritional not contamination; baby-food matrix dropped as non-vocab.
- Verification notes on the page already document the prior 2026-05-13 → 2026-05-17 merge-enhance (raw_handle placeholder → MFK handle; raw_path full filename; metals array Cu added; matrices corrected to `[infant-formula-powder, infant-cereal]`; ingredients populated; products expanded to include infant-cereal; legacy heading update; six paper-internal inconsistencies cataloged; brand-firewall generalized retailer naming; Codex cross-vendor pass) and the subagent audit application.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

