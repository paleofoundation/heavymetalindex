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
