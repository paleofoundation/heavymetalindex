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
