---
type: autonomy-log
purpose: Manual-fetch ingest stop notes for 2026-05-18
audience: [karen, claude]
updated: 2026-05-18
---

# Manual-fetch ingest stops — 2026-05-18

## Stop 1 — duplicate of yesterday's ingest

- **PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_05_Other_Categories/05_Other_Categories/Heavy_metal_in_cosmetics_and_its_risk_to_future_generation_in_remote_area_of_Aza.pdf`
- **Suggested handle (per daemon):** `MFK_heavy-metal-in-cosmetics-and-its-risk-to-future-ge`
- **Existing wiki page:** `wiki/sources/bashir2025-heavy-metals-cosmetics-kashmir.md` (`updated: 2026-05-17`)
- **DOI:** `10.1038/s41598-025-30439-x` (Bashir et al. 2025, *Scientific Reports* 15:43847)
- **SHA-256:** `a597cce153c15540e24470122b9902b625a12e0ac9e8c7c0721cade9a6139497` — byte-identical to the PDF already ingested yesterday at `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Heavy_metal_in_cosmetics_and_its_risk_to_future_generation_in_remote_area_of_Azad_Jammu_and_Kashmir.pdf`.

**Why stopped:** The same paper sits in two Kimi sub-folders (`babycare_01_Exposure_Pathways/` and `babycare_05_Other_Categories/`). The page was ingested fresh, audited, and revisions applied yesterday (2026-05-17) under the v2 manual-fetch skill. Three identity checks confirm the match: DOI hit, raw_handle hit, and cite-key stem hit on `bashir2025-heavy-metals-cosmetics-kashmir`.

**Routing-malformed status:** the page appears in `data/evidence/routing_malformed.csv` but only at `severity: advisory` with `missing_advisory: ingredients`. The routing layer's broad-scope fallback handles this correctly — cosmetic-occurrence sources do not declare food-style ingredient slugs. Not a defect to fix.

**Action for the daemon:** advance past this PDF. Recommend adding the SHA `a597cce1…` (or the file basename stem `Heavy_metal_in_cosmetics_and_its_risk_to_future_generation_in_remote_area_of_Aza`) to the daemon's de-dup skip list so duplicate copies across Kimi sub-folders are not re-presented in future ticks.

**No commits made.** Page state unchanged.

## Stop 2 — page already post-2026-05-14 clean

- **PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market.pdf`
- **Suggested handle (per daemon):** `MFK_monte-carlo-simulation-approach-for-health-risk-an`
- **Existing wiki page:** `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md` (`updated: 2026-05-17`)
- **DOI:** `10.1186/s41043-025-01166-w` (Rahati et al. 2026, *Journal of Health, Population and Nutrition* 45:13)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Rahati 2026 page was merge-enhanced and audited under the v2 manual-fetch skill yesterday (2026-05-17), including a second-pass fix that caught a Co/Hg LOD transposition both the first audit subagent and a Codex audit missed. Three identity checks all confirm the match: DOI grep hit, `raw_handle: MFK_monte-carlo-simulation-approach-for-health-risk-an` hit, and cite-key stem `rahati2026` hit. The page is also absent from both `routing_malformed.csv` and `routing_unresolved.csv` (0 hits each).

**Action for the daemon:** advance past this PDF. The basename stem `Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market` can be added to the daemon's "already post-2026-05-14-clean" skip list so this PDF is not re-presented in future ticks for this folder.

**No commits made.** Page state unchanged.

## Stop 3 — page already post-2026-05-14 clean

- **PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria.pdf`
- **Suggested handle (per daemon):** `MFK_nutrient-exploration-and-heavy-metal-risk-assessme`
- **Existing wiki page:** `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md` (`updated: 2026-05-17`)
- **DOI:** `10.1038/s41598-026-44198-w` (Mgbemena et al. 2026, *Scientific Reports* 16:13751)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Mgbemena 2026 page was merge-enhanced and audited under the v2 manual-fetch skill yesterday (2026-05-17) and recorded in `audit-queue.csv` as `audited-revised` (commit `c75d66e`, subagent REVISE verdict, 5 findings — 1 ❌ + 4 ⚠️ — all applied). Three identity checks all confirm the match: DOI grep hit, `raw_handle: MFK_nutrient-exploration-baby-milk-infant-formulae-umuahia` hit (the daemon's suggested handle `MFK_nutrient-exploration-and-heavy-metal-risk-assessme` is a different truncation of the same filename — same paper), and cite-key stem `mgbemena2026` hit. The page is also absent from both `routing_malformed.csv` and `routing_unresolved.csv` (0 hits each).

**Action for the daemon:** advance past this PDF. The basename stem `Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria` can be added to the daemon's "already post-2026-05-14-clean" skip list so this PDF is not re-presented in future ticks for this folder.

**No commits made.** Page state unchanged.

## Stop 4 — page already post-2026-05-14 clean

- **PDF:** `raw/Papers Cube Manual Fetch/A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy.pdf`
- **Suggested handle (per daemon):** `PCMF_a-narrative-review-of-toxic-heavy-metal-content-of`
- **Existing wiki page:** `wiki/sources/bair2022-infant-toddler-food-heavy-metals-policy.md` (`updated: 2026-05-17`)
- **DOI:** `10.3389/fnut.2022.919913` (Bair 2022, *Frontiers in Nutrition*)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Bair 2022 page was merge-enhanced (Mode B direct-PDF) and Codex-audited yesterday (2026-05-17), including a Part 12 brand-firewall strict recheck. Three identity checks confirm the match: DOI grep hit, title match on `bair2022-infant-toddler-food-heavy-metals-policy`, and cite-key stem hit. The page is absent from both `routing_malformed.csv` and `routing_unresolved.csv` (0 hits each).

The existing page's `raw_handle` (`FM_9271943`) and `raw_path` (`raw/markdown/FM_9271943/FM_9271943.md`) point to the PMC-derived ingest of this same paper. The PCMF copy here is a byte-distinct but content-identical duplicate of the same Bair 2022 paper that has already been fully processed under the v2 skill from the Kimi folder. No re-ingest needed.

**Action for the daemon:** advance past this PDF. The basename stem `A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy` can be added to the daemon's "already post-2026-05-14-clean" skip list so this PDF is not re-presented in future ticks for this folder.

**No commits made.** Page state unchanged.

## Stop 5 — duplicate of yesterday's ingest (cross-folder SHA match)

- **PDF:** `raw/Papers Cube Manual Fetch/Heavy Metals in Infant Clothing: Assessing Dermal Exposure Risks and Pathways for Sustainable Textile Policies.pdf`
- **Suggested handle (per daemon):** `PCMF_heavy-metals-in-infant-clothing-assessing-dermal-e`
- **Existing wiki page:** `wiki/sources/xiong2025-heavy-metals-infant-clothing.md` (`updated: 2026-05-17`)
- **DOI:** `10.3390/toxics13080622` (Xiong et al. 2025, *Toxics* 13:622)
- **SHA-256:** `81eadba663aff62fa2d124976a8e12a62105e61a347331d4d08216f6a1353161` — byte-identical to the PDF already ingested yesterday at `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Heavy_Metals_in_Infant_Clothing_Assessing_Dermal_Exposure_Risks_and_Pathways_for_Sustainable_Textil.pdf`.

**Why stopped:** Same paper, byte-identical file, sitting in two folders (`Papers Cube Manual Fetch/` and `Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/`). Page was ingested fresh (NEW path), subagent-audited, and revisions applied yesterday (2026-05-17) under the v2 manual-fetch skill — `audit-queue.csv` records `audited-revised` with REVISE verdict, commit `b4ad505`, 2 CHECK1 ⚠️ findings applied (Cu→Ti typo; Sb/Cr-Cu/Ti-Zn additive-role rewrite). Three identity checks confirm match: DOI grep hit, `raw_handle: MFK_heavy-metals-in-infant-clothing-assessing-dermal-e` hit (the daemon's suggested `PCMF_…` handle is a different truncation of the same filename — same paper), and cite-key stem `xiong2025` hit.

**Routing-malformed status:** the page appears in `data/evidence/routing_malformed.csv` at `severity: advisory` with `missing_advisory: ingredients`. This is intentional — the paper measures finished garments, not raw textile ingredients (cotton fibers, polyester yarn, dye constituents), and the verification notes already document `ingredients: []` with rationale. The routing layer's broad-scope fallback handles this correctly. Not a defect to fix; advisory-only entries do not gate routing.

**Action for the daemon:** advance past this PDF. Recommend adding the SHA `81eadba6…` (or the file basename stem `Heavy Metals in Infant Clothing: Assessing Dermal Exposure Risks and Pathways for Sustainable Textile Policies`) to the daemon's de-dup skip list so duplicate copies across Kimi and PCMF folders are not re-presented in future ticks.

**No commits made.** Page state unchanged.

## Stop 6 — page already post-2026-05-14 quarantined (intentional state)

- **PDF:** `raw/Papers Cube Manual Fetch/Literature review and health risks assessment of heavy metal contamination in human milk.pdf`
- **Suggested handle (per daemon):** `PCMF_literature-review-and-health-risks-assessment-of-h`
- **Existing wiki page:** `wiki/sources/sushila2024-heavy-metals-human-milk-review.md` (`updated: 2026-05-17`)
- **DOI:** `10.1007/s44346-024-00002-z` (Sushila et al. 2024, *Discover Minerals* 1:2)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Sushila 2024 page was merge-enhanced and Codex-audited yesterday (2026-05-17); `audit-queue.csv` records `audited-codex-quarantine` (QUARANTINE verdict; 7 findings, 6 applied) with the quarantine specifically for an unresolved Iraq/Iran Cd country-label contradiction inside the source text itself (Ci=57.33 mg/L is attributed to Iraq in the prose, but the matching EDI/HQ/CR values are assigned to Iran in the same section). The page already carries `quarantined: true` with a documented `quarantine_reason` in frontmatter, and verification notes record the strict Part 12 brand-firewall recheck. Three identity checks confirm match: DOI grep hit, title match, and cite-key stem `sushila2024` hit.

**Routing-malformed status:** the page appears in `data/evidence/routing_malformed.csv` at `severity: advisory` with `missing_advisory: products`. This is intentional — Sushila 2024 is a biomonitoring/EDI review of human breast milk, an ingredient/matrix rather than a commercial product, so `products: []` is the correct frontmatter. Per CLAUDE.md Part 18, "Source missing products field on food/personal-care paper" advisories are `--warn-only` and do not gate ingest; the routing layer's broad-scope fallback handles this correctly.

**Action for the daemon:** advance past this PDF. The basename stem `Literature review and health risks assessment of heavy metal contamination in human milk` can be added to the daemon's "already post-2026-05-14-clean" skip list so this PDF is not re-presented in future ticks. Re-ingesting would either duplicate yesterday's completed work or risk overwriting the deliberate quarantine state that captures the source-internal Cd country-label contradiction.

**No commits made.** Page state unchanged.

## Stop 7 — page already post-2026-05-14 clean (PROMOTE earlier today)

- **PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia.pdf`
- **Suggested handle (per daemon):** `MFK_occurrence-and-dietary-exposure-assessment-of-heav`
- **Existing wiki page:** `wiki/sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals.md` (`updated: 2026-05-18`)
- **DOI:** `10.1002/fsn3.3485` (Alharbi et al. 2023, *Food Science & Nutrition* 11:5270–5282)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Alharbi 2023 page was merge-enhanced and audit-applied earlier today (2026-05-18) by a parallel Claude session; `audit-queue.csv` records `audited-promote` (PROMOTE verdict, 0 findings to apply) with an extensive notes column documenting the duplicate-consolidation work (the manifest-mined `original2020-original-a.md` cite-key was retired into this canonical key, and the As-mean transposition between cereal-based meals and biscuits was corrected). Three identity checks confirm match: DOI grep hit, raw_handle hit (`FM_10494610`), and cite-key stem hit on `alharbi2023`. The page is absent from both `routing_unresolved.csv` and `routing_malformed.csv`.

**Tracker discrepancy fixed:** `manual-fetch-tracker.csv` still listed this row as `unprocessed` even though the earlier session completed the work. Updated this tick to `status: stopped` with `cite_key: alharbi2023-baby-foods-saudi-arabia-heavy-metals` so the daemon does not re-present this PDF.

**Action for the daemon:** advance past this PDF. The basename stem `Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia` can be added to the daemon's already-post-2026-05-14-clean skip list. Re-ingesting would duplicate work already audited PROMOTE today.

**No content commits made.** Page state unchanged. Tracker-row correction is the only file edit.

## Stop 8 — page already post-2026-05-14 clean (merge-enhanced + audited earlier today)

- **PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/The contribution of infant formula to the food survey-based dietary exposure of nine selected elements.pdf`
- **Suggested handle (per daemon):** `MFK_the-contribution-of-infant-formula-to-the-food-sur`
- **Existing wiki page:** `wiki/sources/hopfner2025-infant-formula-dietary-exposure-germany.md` (`updated: 2026-05-18`)
- **DOI:** `10.20517/jeea.2024.45` (Höpfner et al. 2025, *Journal of Environmental Exposure Assessment*)

**Why stopped:** The v2 skill's Phase 1 step 1 says to skip PDFs whose existing pages are post-2026-05-14 clean and not in `routing_malformed.csv`. The Höpfner 2025 page was merge-enhanced and audit-applied earlier today (2026-05-18) by a parallel session under the v2 manual-fetch skill — the page's existing verification notes already record: (a) the 2026-05-17 Codex cross-vendor audit fixing the truncated `raw_path`, the invalid `powdered-formula` matrix, the Zn/UL infant-vs-toddler attribution, the EU regulation slug, and the HMTc implication language; (b) the 2026-05-18 merge-enhance pass adding Mn/Zn to `metals:` and adding Cr/Mn/Se exposure paragraphs to Key numbers; and (c) the 2026-05-18 audit-subagent run that corrected the toddler Mn P95 value (2.68 mg/day → 2.35 mg/day) and propagated the four routing bullets to match the post-2026-05-18 `metals:` frontmatter. Three identity checks confirm match: title grep hit on `wiki/sources/hopfner2025-infant-formula-dietary-exposure-germany.md`, `raw_path:` substring match on the exact PDF path, and cite-key stem `hopfner2025` hit. The page is absent from both `routing_unresolved.csv` and `routing_malformed.csv` (0 hits each).

**Tracker discrepancy fixed:** `manual-fetch-tracker.csv` still listed this row as `unprocessed` even though the earlier session completed the work. Updated this tick to `status: stopped` with `cite_key: hopfner2025-infant-formula-dietary-exposure-germany` so the daemon does not re-present this PDF.

**Action for the daemon:** advance past this PDF. The basename stem `The contribution of infant formula to the food survey-based dietary exposure of nine selected elements` can be added to the daemon's already-post-2026-05-14-clean skip list. Re-ingesting would duplicate work already merge-enhanced and audited today.

**No content commits made.** Page state unchanged. Tracker-row correction is the only file edit.

## Stop 9 — re-presentation of Stop 7 PDF after tracker regressed by parallel-session race

- **PDF:** `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia.pdf`
- **Suggested handle (per daemon):** `MFK_occurrence-and-dietary-exposure-assessment-of-heav`
- **Existing wiki page:** `wiki/sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals.md` (`updated: 2026-05-18`)
- **DOI:** `10.1002/fsn3.3485` (Alharbi et al. 2023, *Food Science & Nutrition* 11:5270–5282)

**Why stopped (again):** Same PDF as Stop 7 earlier today. The page is post-2026-05-14 clean (`updated: 2026-05-18`, `audited-promote` in `data/evidence/audit-queue.csv`, absent from both `routing_unresolved.csv` and `routing_malformed.csv`). Three identity checks all confirm the existing page is the right canonical destination: DOI `10.1002/fsn3.3485` grep hit, `raw_handle: FM_10494610` hit (existing page; daemon's suggested `MFK_…` handle is the alternate truncation of the same file), and `cite_key` stem `alharbi2023` hit.

**Why the PDF was re-presented this tick.** `git diff data/evidence/autonomy/manual-fetch-tracker.csv` at session start showed the working-tree state of this row reverted from `stopped, 2026-05-18T04:32:06.360Z, alharbi2023-baby-foods-saudi-arabia-heavy-metals, "Stop: …"` back to `unprocessed,,,`. The same diff also reverted the Höpfner 2025 row (Stop 8 PDF) and progressed three unrelated PCMF rows from `unprocessed` to `ingested`. This is the parallel-session tracker race pattern: two concurrent daemon ticks each load an in-memory snapshot of the tracker, each make per-row edits, and the later writer overwrites the earlier writer's edits with its older snapshot. The net effect is that some rows advance and some rows regress.

**Action this tick.** Re-marked the row `stopped` with this tick's timestamp and cite-key. No content commits. The Höpfner 2025 row regression (Stop 8 PDF) is left for the next session to detect and fix on its own tick — touching it here would risk widening the diff and racing again.

**Recommendation for the daemon.** The tracker write step needs a read-modify-write lock or row-level merge instead of full-file replace. Until that lands, every parallel-session tick re-creates this same regression. Workaround: as Stop 7 already suggested, add the basename stem `Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia` to a daemon-side already-post-2026-05-14-clean skip list keyed independently of the tracker so re-regression of the tracker row does not re-surface the PDF.

**No content commits made.** Page state unchanged. Tracker-row correction is the only file edit.

## Stop 10 — Phase 3 audit application blocked by concurrent autonomy_v0 malformed YAML

- **PDF:** `raw/Papers Cube Manual Fetch/ajol-file-journals_579_articles_269230_66292f9b93362.pdf`
- **Handle:** `PCMF_ajol-file-journals-579-articles-269230-66292f9b933`
- **Cite-key:** `abdullahi2024-heavy-metals-maize-nigeria-seasonal`
- **DOI:** `10.4314/dujopas.v10i1a.9` (Abdullahi N et al. 2024, *DUJOPAS* 10(1a):78–87)
- **Phase 1 commit:** `2e44dd7`

**What completed.** Phase 1 ingest (merge-enhance against updated:2026-05-14 page in routing_malformed advisory) committed cleanly: raw_handle promoted from `papers-cube` placeholder to canonical `PCMF_…`, raw_sha256 added, metals expanded from [Pb Cd Cr Ni] to all 8 measured analytes [Pb Cd Cr Ni Zn Cu Co tHg], evidence_tier A → B, sample_n 20 → 40, wet-season root means (Table 2, all 5 wrong) corrected, dry-season root means (Table 4, 6 of 7 wrong) corrected, fabricated PL values (Zn 5 / Cd 0.1 → paper's actual 0.6 / 0.02) corrected, dry-season TF interpretation (inverted on prior page) corrected, per-site exceedance counts added, method limitations expanded (Hg / LOD / sampling discontinuity / no-As), Implications softened per Part 2 firewall. Phase 2 audit subagent ran cleanly with verdict REVISE: 2 ❌ findings (dry-season grain Pb count 7 of 10 should be 9 of 10; dry-season grain Cr count 8 of 10 should be 10 of 10) and 2 ⚠️ slug concerns (matrices `maize-grain` / `maize-root`; missing `[[supply-chain/irrigation-water]]` page). All 4 findings independently verified against the source.

**Why Phase 3 stopped.** `npm run evidence:source-routes` re-run fails with `YAMLException end of the stream or a document separator is expected at line 16, column 35` in `wiki/sources/childhood2023-childhood-lead-exposure-linked.md` — an untracked file just created by a concurrent `autonomy_v0` ingest agent. The malformed line is `ingredients: [[ingredients/apple]], [[ingredients/cinnamon]]` (bare wikilinks without quotes, violating Part 14 frontmatter wikilink rules). The failure is on an unrelated source page; my source is clean. Per skill stop conditions (`Routing audit fails`) and the multi-Claude coherence memory (don't touch concurrent agents' in-flight work), stopped without re-running the audit or committing the Phase 3 corrections.

**State on disk.** Source page `wiki/sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal.md` is at Phase 1 state (commit `2e44dd7`). The 4 audit findings are fully specified in the `audit-queue.csv` notes row for re-application; they are NOT half-applied — they are documented for a future session to re-run cleanly. Phase 1 corrections (the major merge-enhance work that fixed all the wrong root values, fabricated PL, inverted TFs, etc.) are durably committed and form the canonical state of the page.

**Action for the daemon.** Skip this PDF on subsequent ticks (the Phase 1 commit's `updated: 2026-05-18` puts it in the post-2026-05-14-clean class). Re-application of the 4 Phase 3 micro-corrections will happen when:
  (a) the `autonomy_v0` agent fixes the `childhood2023` YAML (most likely on its own next tick — bare-wikilink in frontmatter is the kind of bug that breaks the agent's own validation as well, not just the routing audit), AND
  (b) a future audit-application sweep re-runs against `audited-revised-blocked` audit-queue rows.

**Recommendation.** The `autonomy_v0` agent's frontmatter-emit code is producing Part-14-violating wikilink arrays (`[[ingredients/apple]], [[ingredients/cinnamon]]` instead of `["[[ingredients/apple]]", "[[ingredients/cinnamon]]"]`). This is a code-level defect in that agent that should be fixed at the emitter, not patched per-file. Until that fix lands, expect intermittent routing-audit failures from autonomy_v0 ingests blocking concurrent manual-fetch sessions.

**No content commits made beyond `2e44dd7`.** This stop-report and the `audit-queue.csv` status update are the only edits in this Phase 3 segment.

## Stop 15 — true duplicate conflict: two existing source pages for the same DOI (BfR 2024 MeHg fish/seafood)

- **PDF:** `raw/Manual Fetch Kimi /04_Meat_Poultry_Seafood/04_Meat_Poultry_Seafood/P0145_Methylmercury in fish and seafood - health risk assessment of new data from the BfR MEAL study.pdf`
- **Suggested handle:** `MFK_p0145-methylmercury-in-fish-and-seafood-health-ris`
- **DOI:** `10.17590/20240626-094256-0` (BfR Opinion 023/2024, "Methylmercury in fish and seafood - health risk assessment of new data from the BfR MEAL study")
- **SHA-256 of P0145 PDF:** `62e01b8a34dcf34db2a8d6dcac7ebaf9b34b0719ddb8697de2542d50af7be450`

**Two existing wiki source pages for this one DOI:**

1. `wiki/sources/bfr2024-methylmercury-fish-seafood-germany.md` — legacy page with `raw_handle: manual-fetch-kimi`, `raw_path` truncated to `P0145_Methylmercury in fish and seafood - health risk assess.pdf`, broader tabular Key numbers, and `updated: 2026-05-13`.
2. `wiki/sources/bfr2024-mehg-fish-seafood-meal-germany.md` — newer page with `raw_handle: MFK_p0145-methylmercury-fish-seafood-bfr-meal`, exact P0145 raw path, current-schema source-page sections, and `updated: 2026-05-17`.

**Why stopped:** This is the true-duplicate-conflict stop condition. DOI grep hits two source pages with different cite-keys for the same BfR opinion. The per-PDF merge-enhance path assumes one canonical destination; enhancing either page silently would leave the other duplicate in place and risk double-counting this agency opinion in seafood and mercury evidence surfaces.

**Action needed:** Run a dedicated dedup pass for DOI `10.17590/20240626-094256-0`: choose the canonical cite-key, merge any unique content and provenance, retire the duplicate cite-key by updating inbound references, delete or quarantine the retired source page, and regenerate routing/evidence outputs. The newer `bfr2024-mehg-fish-seafood-meal-germany.md` is likely the canonical candidate because it already points at the exact P0145 PDF and has current-schema provenance, but the older page's richer exposure table should be checked before retiring it.

**No source-page changes made.** Tracker row marked `stopped-codex`; session stopped per user instruction.
