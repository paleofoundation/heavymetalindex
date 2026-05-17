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

## opss2023-feasibility-action-limits-cosmetics-uk (MFK_a-feasibility-study-investigating-action-limits-fo) — 2026-05-18

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/A_Feasibility_Study_Investigating_Action_Limits_for_Certain_Heavy_Metal_Impuriti.pdf`

**Stop reason:** PDF is a byte-identical duplicate (same SHA-256 `2e0d0250e6a9ad04b4526ceea1114c23019683f5e83f75fada1ac20731aa9585`) of the copy already ingested and audited yesterday from the sibling folder `babycare_03_Powder_Lotion_Oil_Diaper`. The current source page is post-2026-05-14 clean; the only `routing_malformed.csv` entry is a benign advisory about an empty `ingredients:` array, which is correct for a cosmetics paper (no food ingredients).

**Identity checks:**
- Title grep (`FM21190`) → hit at `wiki/sources/opss2023-feasibility-action-limits-cosmetics-uk.md`.
- cite-key grep (`opss2023-`, `axford`) → same file.
- SHA-256 of this folder's PDF matches the existing page's `raw_sha256: 2e0d0250...`.
- Existing page `updated: 2026-05-17` (yesterday).
- Page IS present in `data/evidence/routing_malformed.csv` but only as an `advisory` row: "Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible." This is the benign empty-ingredients advisory triggered by every cosmetics paper, not a defect.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17: subagent verdict REVISE, 5 findings applied (Table 16e Hg LOQ floor corrected from <0.005 to <0.002; Foundation Hg row flagged as source-side copy-paste error; semi-quantitative element list completed to match Appendix 3; "policy-actionable" softened to "strongest direct-evidence signal"; unsupported method-vendor examples removed) and 1 finding rejected as false positive (stale taxonomy snapshot, not stale wiki).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." The malformed entry is an advisory-only row that re-ingestion cannot fix and that has the same shape on every cosmetics-only source; treating the file as "in malformed" here would trigger an infinite re-ingest loop with no productive change. Skip.

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The duplicate-folder placement (the same PDF lives under both `babycare_03_Powder_Lotion_Oil_Diaper` and `babycare_04_Shampoo_Wipes_Sunscreen` raw/ trees) is a filing artefact, not a content issue. Wrapper script can move on.


## jitareanu2025-heavy-metals-cosmetics-overview (MFK_an-overview-of-heavy-metals-in-cosmetic-products-a) — babycare_04 copy

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/An_Overview_of_Heavy_Metals_in_Cosmetic_Products_and_Their_Toxicological_Impact.pdf`

**Stop reason:** byte-identical duplicate of already-ingested babycare_01 canonical PDF; existing page post-2026-05-14 clean.

**Identity checks:**
- SHA-256 of babycare_04 PDF = SHA-256 of babycare_01 canonical PDF = `6962413139daeb23e7732542a75c8fcbb470f4fc8eaaddd35f07ef0ee093d6e6` (byte-identical).
- Title grep → hit at `wiki/sources/jitareanu2025-heavy-metals-cosmetics-overview.md` (raw_handle `MFK_overview-heavy-metals-cosmetics-toxicological-impact`).
- Existing page `updated: 2026-05-18` (today).
- Page is in `data/evidence/routing_malformed.csv` at severity `advisory` only (empty `ingredients`/`matrices` — intentional for a cosmetics-only review, already documented in the verification notes). Not blocking.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Babycare_03 copy was already registered as a `near_duplicate` on 2026-05-18; babycare_04 is the third filing of the same PDF in three sibling folders.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." The malformed advisory is the documented-intentional cosmetics-review pattern; re-ingest cannot fix it.

**Action taken:** appended babycare_04 path to `near_duplicates` on the source page and added a one-line verification note recording the byte-identicality. Updated `data/evidence/autonomy/manual-fetch-tracker.csv` row from `unprocessed` to `stopped`. Ran routing audit (1 unresolved unchanged from prior state, 0 blocking malformed). No audit subagent spawned — the source page content is unchanged; this is dedup registration only. Wrapper can move on.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1038/s41598-026-44198-w`) → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `c75d66e`): subagent REVISE verdict, 5 findings (1 ❌ + 4 ⚠️), all 5 applied (Cr THQ misattribution to 4.2 corrected — Table 3 has no Cr column; BM Ni exceedance count 6→5; Cr highest-sample body-vs-Table-2 contradiction noted; Fe/Mn/Zn dropped from metals as nutritional not contamination; baby-food matrix dropped as non-vocab).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## kopru-soylak-2024-icp-ms-children-cosmetics-turkey (MFK_inductively-coupled-plasma-mass-spectrometry-icp-m) — RETRACTED

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Inductively_coupled_plasma-mass_spectrometry_ICP-MS_detection_of_trace_metal_c.pdf`

**Paper:** Kopru S. & Soylak M. (2024) "Inductively coupled plasma-mass spectrometry (ICP-MS) detection of trace metal contents of children cosmetics." *Optical and Quantum Electronics* 56:399. DOI: 10.1007/s11082-023-06166-w. Received 2023-11-24, accepted 2023-12-19, published online 2024-01-22.

**Stop reason:** Paper is RETRACTED. The Springer "RETRACTED ARTICLE" watermark is stamped across every page of the PDF (pages 1–12 confirmed by Read). The retraction is the canonical paper-internal data-integrity issue called out in the skill's stop conditions, and it is one of the items `docs/ingest-workflows.md:156` defers to "individual review" rather than autonomous ingest. Ingesting a retracted paper as a normal source page would inject formally-invalidated evidence into a Cochrane-bar corpus and weaken the defensibility argument the wiki is built on.

**Identity checks:**
- DOI grep (`10.1007/s11082-023-06166-w`) → no hit. No existing page.
- Raw-handle grep (`MFK_inductively-coupled-plasma-mass-spectrometry-icp-m`) → no hit.
- Cite-key grep (`kopru` / `soylak`) → no hit.
- Tracker row exists at `manual-fetch-tracker.csv:56` with `status=unprocessed` (no prior cycle).

**Subject matter (for Karen's reference, not ingested):** ICP-MS measurement of Al, Cr, Mn, Fe, Co, Ni, Cu, Zn, As, Se, Hg, Cd, Pb in 22 eye-shadow + 4 lipstick + 4 nail-polish samples sold in Turkey, marketed as children's cosmetics across 3 brands. Microwave digestion (Milestone ETHOS Easy), Agilent 7900 ICP-MS, NCS ZC 81002b human-hair CRM, calibration 0–50 µg/L. Authors report most As/Cd/Hg/Pb values are below FDA and Health Canada PSL limits; Al is highest in eye shadow; Se lowest in lipstick. If Karen wants this evidence in the corpus despite the retraction, she should also pull the published retraction notice for context.

**Skill v2.0 rule applied:** "Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern." → STOP cleanly, do not ingest. Also flagged for "individual review" per `docs/ingest-workflows.md:156` retraction-handling clause.

**Action taken:** appended a `stopped-retracted` row to `data/evidence/autonomy/manual-fetch-tracker.csv` so the wrapper script will not re-attempt this PDF without Karen's explicit policy decision. No wiki source page written. No commit. No audit subagent spawned. No audit-queue entry. Karen needs to decide the wiki's policy on retracted papers (skip entirely vs ingest with `retracted: true` frontmatter flag and a `## Retraction status` section) before this paper — or any future retracted paper — can be processed autonomously.

## kicinska2025-cosmetics-online-market-heavy-metals (babycare_04 cross-folder duplicate)

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Health_risks_from_heavy_metals_in_cosmetic_products_available_in_the_online_cons.pdf`

**Stop reason:** Third cross-folder copy of the same Kicińska & Kowalczyk 2025 paper. The babycare_01_Exposure_Pathways copy was merge-enhanced + audited on 2026-05-17; the babycare_03_Powder_Lotion_Oil_Diaper copy was already stopped as a cross-folder duplicate (see `MFK_health-risks-heavy-metals-online-market` tracker row); this babycare_04 copy is the same paper again.

**Identity checks:**
- Filename grep against `wiki/sources/` (`Health_risks_from_heavy_metals_in_cosmetic_products_available_in_the_online_cons`) → hit at `wiki/sources/kicinska2025-cosmetics-online-market-heavy-metals.md`.
- PDF p. 1 title, authors (Alicja Kicińska & Magdalena Kowalczyk, AGH Krakow), journal (Scientific Reports 15:316), DOI (10.1038/s41598-024-83477-2) — identical to existing page frontmatter.
- Existing page `updated: 2026-05-17` (post-skill-window cutoff), full audit notes already recorded in `## Verification notes`.
- Page is NOT present in `data/evidence/routing_unresolved.csv` or `data/evidence/routing_malformed.csv` for products; the `ingredients: []` advisory is the documented-intentional cosmetics-finished-product pattern.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** appended a `stopped` row to `data/evidence/autonomy/manual-fetch-tracker.csv` recording this third cross-folder copy. No commit, no audit subagent spawned, no edits to the wiki source page or audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## rahati2026-infant-formula-baby-food-iran-health-risk (MFK_monte-carlo-simulation-approach-for-health-risk-an)

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1186/s41043-025-01166-w`) → hit at `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md`.
- Raw-handle grep (`monte-carlo-simulation-approach-for-health-risk-an`) → same single hit.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17 (commit `b237644`): v2.0 manual-fetch merge-enhance subagent PROMOTE on all 5 checks plus Codex 5 findings / 5 applied / 0 rejected (Table 2 SD transcription corrections and explicit source-side CR / Cd contradiction notes).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## rbeida2023-heavy-metals-cosmetics-libya (MFK_quality-control-cosmetics-libya) — duplicate-PDF, second folder location

**PDF requested:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Quality_control_of_selected_cosmetics_marketed_in_Libya_for_traces_of_toxic_heav.pdf`

**Stop reason:** Same PDF already processed and audited under a different folder path on the same day.

**Identity checks:**
- DOI grep (`10.5281/zenodo.8136836`) → hit at `wiki/sources/rbeida2023-heavy-metals-cosmetics-libya.md`.
- Existing page `updated: 2026-05-18` (today).
- Existing page `raw_path` points to `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Quality_Control_Cosmetics_Libya.pdf` — a different folder location for the same paper.
- SHA-256 of both candidate PDFs matches: `d6928cf09c76b4f130fc2535eeaf4aea37175b9fdc22261e28117f03119981c3` (byte-identical copies of the same Rbeida et al. 2023 PDF, mirrored across `babycare_03_Powder_Lotion_Oil_Diaper` and `babycare_04_Shampoo_Wipes_Sunscreen`).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-18: v2.0 subagent REVISE, 5 findings, 4 applied (WHO Pb exceedance count, WHO Cd at-or-below count, inline bold removal, cross-source kohl/surma sentence removal) and 1 rejected as false positive (matrices `cosmetic-personal-care` vocabulary confirmed by ≥7 sibling source pages).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Same-paper duplicate filesystem copies fall under the same skip rule once any one of them has produced a clean post-2026-05-14 source page.

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The babycare_03/babycare_04 folder duplication is an artefact of Karen's manual-fetch staging (the same PDF was filed into both the powder-lotion-oil-diaper and shampoo-wipes-sunscreen subfolders); deduplicating those filesystem locations is out of scope for this skill. The wrapper script will move on to the next PDF in the folder on the next tick.

## rahati2026-infant-formula-baby-food-iran-health-risk (MFK_monte-carlo-simulation-approach-for-health-risk-an) — wrapper re-fed already-clean PDF

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- raw_handle grep (`MFK_monte-carlo-simulation-approach-for-health-risk-an`) → hit at `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md`.
- Existing page `updated: 2026-05-17`.
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-codex-revised` for this cite-key, applied 2026-05-17 (commit `b237644`): v2.0 subagent PROMOTE verdict on all 5 checks, 1 optional enhancement applied (p. 5 / Table 2 Cd-exceedance inconsistency note), 0 findings rejected; predecessor ingest fixed Co transposition, baby-food Cr/Cu/Mn/Se column-shift, Se SD, `6.86 × 10⁻⁶` → `6.84 × 10⁻⁶` typo, invalid `baby-food-grain-based` slug, `aluminium` → `aluminum`; Codex cross-vendor pass added 5 more findings (5 applied, 0 rejected) covering Table 2 SD transcriptions and explicit source-side CR (3.57 × 10⁻⁴ abstract vs 3.75 × 10⁻⁴ Table 3) and Cd contradictions.

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia) — wrapper re-fed already-clean PDF

**PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`

**Stop reason:** PDF already processed and audited within v2 skill skip window.

**Identity checks:**
- DOI grep (`10.1038/s41598-026-44198-w`) → hit at `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md`.
- Cite-key grep on `mgbemena` → same file, confirmed.
- Existing page `updated: 2026-05-17` (today).
- Page is NOT present in `data/evidence/routing_malformed.csv`.
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Audit queue already records `audited-revised` for this cite-key, applied 2026-05-17 (commit `c75d66e`): v2.0 manual-fetch merge-enhance from MFK 06_Infant_Foods_Formula; subagent REVISE verdict; 5 findings (1 ❌ + 4 ⚠️) 5 applied 0 rejected (Cr THQ misattribution to 4.2 corrected — Table 3 has no Cr column; BM Ni exceedance count 6→5; Cr highest-sample body-vs-Table-2 contradiction noted; Fe/Mn/Zn dropped from metals as nutritional not contamination; baby-food matrix dropped as non-vocab).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

**Action taken:** none. No commit, no audit subagent spawned, no edits to the wiki source page or the audit queue. The wrapper script will move on to the next PDF in the folder on the next tick.

## poulsen2007-cosmetic-products-children-denmark (MFK_survey-of-chemical-substances-in-consumer-products) — bit-identical duplicate filed in second folder

**PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Survey_of_Chemical_Substances_in_Consumer_Products_No_88_-_A_survey_and_health.pdf`

**Stop reason:** true duplicate already ingested. The wrapper guessed handle `MFK_survey-of-chemical-substances-in-consumer-products` from the babycare_04 filename, but SHA-256 of this PDF (`fcb5d3c9da4558bda2af3cd1daf847ecfc3a86de27bb6e1e64161717e7311c0f`) matches `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_03_Powder_Lotion_Oil_Diaper/03_Powder_Lotion_Oil_Diaper/Survey_Health_Assessment_Cosmetic_Children_Denmark.pdf` exactly — same Danish EPA Survey No. 88 (2007) Poulsen & Schmidt FORCE Technology report. The babycare_03 copy was ingested earlier today (2026-05-18) under cite-key `poulsen2007-cosmetic-products-children-denmark`, auto-audited (REVISE verdict, 2 findings applied), and is currently `audited-revised` in the queue.

**Identity checks:**
- SHA-256 byte-for-byte match between the two raw_paths confirmed via `shasum -a 256`.
- Title grep `Survey of Chemical Substances in Consumer Products` → hit at `wiki/sources/poulsen2007-cosmetic-products-children-denmark.md`.
- Existing page `updated: 2026-05-18` (today).
- Page is NOT present in `data/evidence/routing_unresolved.csv`.
- Page is in `data/evidence/routing_malformed.csv` only with a non-blocking `advisory` row for `ingredients: []` (intentional — packaging-only paper, not an ingredient-level occurrence study). No `error` or `blocking` row exists.
- Audit queue already records `audited-revised` for this cite-key (commit `4553766`, 2026-05-18).

**Skill v2.0 rule applied:** "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Plus the "True duplicate conflict" stop condition (in the variant where the wrapper's filename-based handle suggests a new page but SHA-256 confirms the PDF is already ingested under a different folder location).

**Action taken:** added the babycare_04 raw_path to the existing page's `near_duplicates` array (with `relation: bit_identical_duplicate` and the matching SHA-256) so subsequent ingest passes recognise the second location. Updated the manual-fetch tracker entry for the babycare_04 path to `status=stopped`, `cite_key=poulsen2007-cosmetic-products-children-denmark`, with a note explaining the SHA-256 match. Re-ran routing audit: 0 unresolved, 0 blocking malformed. No new audit-subagent spawn; the canonical page is already audited.
