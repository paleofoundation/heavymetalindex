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

## Stop 11 — true duplicate conflict: two existing source pages for the same DOI

- **PDF:** `raw/Papers Cube Manual Fetch/article (2) copy 7.pdf`
- **Suggested handle (per daemon):** `PCMF_article-2-copy-7`
- **DOI:** `10.1016/j.toxrep.2022.02.001` (Parker GH, Gillie CE, Miller JV, Badger DE, Kreider ML 2022, *Toxicology Reports* 9:238–249, "Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods")

**Two existing wiki source pages for this one paper:**

1. `wiki/sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk.md` — `updated: 2026-04-29`, `raw_path: raw/markdown/FM_8850323/FM_8850323.md`. Created from the FM-derived markdown ingest. Thinner content, legacy schema, declares some pre-taxonomy product slugs (`fruit-purees`, `root-vegetable-purees`, `non-root-vegetable-purees`, `baby-cereals`, `mixed-meals`). Currently in `routing_malformed.csv` at `severity: advisory` (`missing_advisory: ingredients;matrices`).
2. `wiki/sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb.md` — `updated: 2026-05-15`, `raw_path: raw/Papers Cube Manual Fetch/article (2) copy 7.pdf`. Created from the PCMF copy of the same paper. Richer content, current schema, declares current product slugs (`baby-cereals-dry-rice-based`, `baby-cereals-dry-non-rice`, `infant-and-child-foods-master`, `root-tuber-vegetables`), full Key numbers with the Table 4 distribution, Conflict-of-interest disclosure, Methods + Limitations + Implications sections.

**Why stopped:** This is the "True duplicate conflict" stop condition. All three identity checks (DOI, raw_handle, cite-key) hit *two* canonical pages, not one. The skill's merge-enhance path assumes a single existing page to enhance. Re-ingesting against either page silently leaves the other in place, perpetuating the duplicate. Deduping requires:
  (a) deciding which cite-key is canonical (the newer `parker2022-baby-food-risk-assessment-as-cd-hg-pb` is the better candidate — current schema, richer content, declares current product taxonomy, points at the PCMF PDF that is the better-preserved source artifact),
  (b) retiring the other cite-key by rewriting every reference across wiki/products/ (7 pages), wiki/metals/ (4 pages), wiki/ingredients/ (4 pages), wiki/log.md, wiki/batch-reports/, wiki/static/hmi-lab-comparator-context.json, data/evidence/values.jsonl, data/evidence/hmtc_aggregate_distributions.csv, data/evidence/product_regulatory_crosswalk.csv, data/evidence/product_source_routing_audit.csv, data/evidence/routing_malformed.csv, and data/evidence/category1_autonomy_extracted_summary.csv,
  (c) merging any unique content from the retired page (the Table 4 wikilink-anchored table, the FM_8850323 raw provenance lineage if worth preserving) into the canonical page,
  (d) deleting the retired source file, and
  (e) re-running the routing audit to confirm clean.

Steps (b)–(c) cross marker-block-owned generator outputs in several files (`wiki/static/hmi-lab-comparator-context.json` and parts of `data/evidence/product_source_routing_audit.csv` are generator-owned), so the right execution path is a dedicated dedup-and-regenerate pass that runs the generators after the retire-and-rewrite, not a per-file hand-edit in an ingest cycle. This is out of scope for the per-PDF manual-fetch skill.

**Routing-audit status:** The newer canonical page (`…risk-assessment-as-cd-hg-pb`) is clean — absent from both `routing_unresolved.csv` and `routing_malformed.csv`. The older legacy page (`…arsenic-cadmium-lead-mercury-risk`) is in `routing_malformed.csv` at advisory severity for missing ingredients/matrices. The PCMF PDF's content is already fully captured on the newer page; no ingest data is at risk by stopping here.

**Action for the daemon:** advance past this PDF. The basename stem `article (2) copy 7` can be added to the daemon's already-post-2026-05-14-clean skip list keyed to the canonical cite-key `parker2022-baby-food-risk-assessment-as-cd-hg-pb`. Re-presenting this PDF would just trigger the same duplicate-conflict stop again.

**Recommendation for Karen:** queue a dedicated dedup pass for parker2022. The pattern (one paper → two cite-keys created at different times from different raw paths — one FM-derived, one PCMF-derived) likely affects other papers ingested across the FM→PCMF transition. A scripted scan that groups source pages by DOI and reports DOI→multiple-cite-key collisions would find these systematically. The retire-by-rewriting step is mechanical once the canonical pick is made, and the routing audit + product-page regenerators will validate the cleanup.

**No commits made.** Page state unchanged.

## Stop 12 — true duplicate conflict: two existing source pages for the same DOI (gardener2019)

- **PDF:** `raw/Papers Cube Manual Fetch/gardener2019.pdf`
- **Suggested handle (per daemon):** `PCMF_gardener2019`
- **DOI:** `10.1016/j.scitotenv.2018.09.026` (Gardener H, Bowen J, Callan SP 2019, *Science of the Total Environment*, "Lead and cadmium contamination in a large sample of United States infant formulas and baby foods")
- **MD5:** `40c30de3b1094c07380ec0324f0916c2` — byte-identical to `raw/studies/gardener2019.pdf`.

**Two existing wiki source pages for this one paper:**

1. `wiki/sources/gardener2019-lead-cadmium-infant-formula-baby-food.md` — `updated: 2026-04-29`, `raw_path: raw/studies/gardener2019.pdf`. Created from the earlier `raw/studies/` ingest path. No `raw_handle`. Declares legacy/matrix-shaped product slugs in frontmatter (`infant-formula`, `baby-cereals`, `toddler-formula`, `fruit-juice`, `jars-first-meals`, `pouches`, `snacks`, `kids-meals`) — none of these are valid product page slugs; routing fans them out as `broad_*_context` to the locked rows. Currently in `routing_malformed.csv` at `severity: advisory` (`missing_advisory: ingredients;matrices`). Body has Full-Sample table, Infant Formula Exposure table, and Solid Baby-Food Exceedance table, but the narrative is thinner than the PCMF page and omits the Conflict-of-interest / Clean Label Project funding disclosure.
2. `wiki/sources/gardener2019-pb-cd-us-infant-formula-baby-foods.md` — `updated: 2026-05-15`, `raw_path: raw/Papers Cube Manual Fetch/gardener2019.pdf`, `raw_handle: papers-cube`. Created from the PCMF copy of the same PDF. Current schema, declares current locked product slugs (`infant-formula-powder-non-soy`, `infant-formula-powder-soy-based`, `infant-formula-powder`, `baby-cereals-dry-rice-based`, `infant-and-child-foods-master`, `oral-electrolyte-solutions`) in wikilink form, populates `ingredients: [[ingredients/rice]], [[ingredients/sweet-potato]]`, `matrices`, `sample_n`, `sample_population`, `license`. Richer Key numbers (full Table 1 + Table 4 distributions, regulatory exceedance percentages for FDA/Prop 65/WHO at four intake scenarios, rice prevalence by sub-category), full Methods (analytical, sampling, statistical), Funding-and-independence note (Clean Label Project), and Implications sections.

**Why stopped:** This is the "True duplicate conflict" stop condition — same DOI, same paper, byte-identical raw PDF, but two distinct canonical source pages with different cite-keys, both already wired into the routing audit. All three identity checks hit *two* pages, not one. The skill's merge-enhance path assumes a single existing page to enhance. Re-ingesting against either page silently leaves the other in place, perpetuating the duplicate.

**Scope of references** (both cite-keys live in the routing fabric):

- `gardener2019-lead-cadmium-infant-formula-baby-food` is referenced in `wiki/log.md`, `wiki/batch-reports/row-fit-sweep-2026-05-08.md`, 4 metal/ingredient pages (`wiki/metals/lead.md`, `wiki/metals/cadmium.md`), 11 product pages (`mixed-meals-rice-containing`, `teething-and-snacks-non-rice`, `root-vegetable-purees`, `baby-cereals-dry-rice-based`, `baby-cereals-dry-non-rice`, `infant-formula-rtf-liquid-non-soy`, `teething-and-snacks-rice-based`, `mixed-meals-non-rice`, `infant-formula-rtf-liquid-soy-based`, `fruit-juice-not-canned`, `infant-formula-powder-soy-based`, `infant-formula-powder-non-soy`), `data/evidence/routing_malformed.csv`, `data/evidence/raw_ingest_inventory.csv`, and `data/evidence/product_source_routing_audit.csv`.
- `gardener2019-pb-cd-us-infant-formula-baby-foods` is referenced in `wiki/log.md`, `wiki/metals/cadmium.md`, `wiki/metals/lead.md`, 5 product pages (`oral-electrolyte-solutions`, `baby-cereals-dry-rice-based`, `infant-formula-powder-non-soy`, `infant-formula-powder-soy-based`, `infant-formula-powder`), `wiki/synthesis/organic-certification-not-protective.md`, `wiki/ingredients/sweet-potato.md`, `wiki/ingredients/rice.md`, `data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/product_source_routing_audit.csv`, `data/workbench/briefings/baby-cereals-dry-rice-based.md`, `data/workbench/briefings/infant-formula-powder-non-soy.md`, `data/evidence/hmtc_aggregate_distributions.csv`, and `data/evidence/review_events.jsonl`.

Deduping requires:
  (a) deciding which cite-key is canonical (the newer `gardener2019-pb-cd-us-infant-formula-baby-foods` is the better candidate — current schema, richer content, declares current product taxonomy, populates ingredients/matrices/sample_n, points at the PCMF PDF, captures the Clean Label Project funding disclosure that the older page omits),
  (b) retiring the other cite-key by rewriting every reference across the surfaces enumerated above,
  (c) merging any unique content from the retired page into the canonical page — specifically the Solid Baby-Food Exceedance Findings table (the canonical page has the same numbers as inline bullets rather than as a wikilink-anchored table, but the older page's `[[metals/lead]]`/`[[metals/cadmium]]` row-keyed table is the more wikilink-graph-friendly representation), and any unique provenance the `raw/studies/gardener2019.pdf` path encodes,
  (d) deleting the retired source file,
  (e) re-running the routing audit to confirm clean, and
  (f) regenerating the briefings + the `hmtc_aggregate_distributions.csv` + the `category1_autonomy_extracted_summary.csv` so the cite-key reference is consistent across generator outputs.

Steps (b)–(c) cross marker-block-owned generator outputs in several files (`data/evidence/product_source_routing_audit.csv` and parts of the workbench briefings are generator-owned), so the right execution path is a dedicated dedup-and-regenerate pass that runs the generators after the retire-and-rewrite, not a per-file hand-edit in an ingest cycle. This is out of scope for the per-PDF manual-fetch skill.

**Routing-audit status:** The newer canonical page (`…pb-cd-us-infant-formula-baby-foods`) is clean — absent from `routing_unresolved.csv` and `routing_malformed.csv`. The older legacy page (`…lead-cadmium-infant-formula-baby-food`) is in `routing_malformed.csv` at advisory severity for missing ingredients/matrices. The PCMF PDF's content is already fully captured on the newer page; no ingest data is at risk by stopping here.

**Action for the daemon:** advance past this PDF. The basename stem `gardener2019` (under `raw/Papers Cube Manual Fetch/`) can be added to the daemon's already-post-2026-05-14-clean skip list keyed to the canonical cite-key `gardener2019-pb-cd-us-infant-formula-baby-foods`. Re-presenting this PDF would just trigger the same duplicate-conflict stop again.

**Recommendation for Karen:** this is the second observed instance of the FM/`raw/studies/`-vs-PCMF duplicate-cite-key pattern (Stop 11 covered Parker 2022; this is Gardener 2019). The pattern is now confirmed systematic across the FM→PCMF transition. A scripted DOI→multiple-cite-key collision scan across `wiki/sources/` (already recommended on Stop 11) would surface the full population in one pass and let a single dedup pass clear all of them; doing them one-by-one as they surface in the manual-fetch loop is strictly slower than the systematic scan.

**No commits made.** Page state unchanged.

## Stop 13 — byte-identical duplicate PDF re-presented; already ingested+audited today

- **PDF (this tick):** `raw/Papers Cube Manual Fetch/mathew2015.pdf`
- **Suggested handle (per daemon):** `PCMF_mathew2015`
- **Existing wiki page:** `wiki/sources/vaishaly2015-health-effects-metal-groundwater.md` (`updated: 2026-05-18`)
- **DOI:** null (`no_doi_assigned: true`; journal DOI 10.7439/ijasr is for the journal itself, not the article; the article carries no article-level DOI)
- **SHA-1:** `0ae8bf80804072c44ae9384b690e17e323deacc8` — byte-identical to the sibling PDF `raw/Papers Cube Manual Fetch/mathew2015 (1).pdf` already ingested under raw_handle `PCMF_mathew2015-1` (commit `ec1d778`) and audited PROMOTE under `audit-queue.csv` row dated `2026-05-18T09:25:42Z`.

**Why stopped:** Two byte-identical copies of the same PDF sit in `raw/Papers Cube Manual Fetch/` — `mathew2015.pdf` and `mathew2015 (1).pdf`. The "(1)" copy was ingested fresh earlier today (Vaishaly, Mathew, Krishnamurthy 2015, *Int J Adv Sci Res* 1(02):60–64; narrative review of heavy metals in groundwater), audited via fresh-context subagent (verdict PROMOTE, 0 findings), and recorded `audited-promote` in `data/evidence/audit-queue.csv`. The daemon now re-presented the no-suffix copy under handle `PCMF_mathew2015`. Identity checks confirm match:

1. DOI grep — paper has no article-level DOI (`no_doi_assigned: true`); not applicable.
2. `raw_handle` grep — the existing page records `PCMF_mathew2015-1`; the proposed handle `PCMF_mathew2015` differs only by the `-1` disambiguator suffix that earlier ingest applied to mark the "(1)" filename. Same underlying paper.
3. Cite-key stem grep — `ls wiki/sources/ | grep mathew2015` returns `vaishaly2015-health-effects-metal-groundwater.md` (the cite-key resolves the corresponding-author/first-author ambiguity in favor of first author Vaishaly per cite-key convention; the page title correctly attributes both Vaishaly AG and Mathew BB).
4. SHA-1 of the new PDF (`0ae8bf80…`) equals the SHA-1 of the already-ingested sibling — byte-identical, not a republication or different version.

**Routing-malformed status:** The existing page appears in `data/evidence/routing_malformed.csv` at `severity: advisory` with `missing_advisory: products;ingredients;jurisdictions`. This is correct and intentional — a generic groundwater-toxicology review has no food-occurrence data and no jurisdiction-specific regulatory subject, so the frontmatter correctly leaves those arrays empty. The routing layer falls back to broad metal/matrix scope. This is the advisory-only fallback documented in the audit-queue note, not a blocking defect.

**Page-cleanliness verdict:** Existing page is post-2026-05-14 clean (`updated: 2026-05-18`, audited PROMOTE today, only advisory routing-malformed entry that is correct by design). Per the skill's Phase 1 step 1, this PDF must be skipped — re-ingesting would overwrite the just-audited page with no new information (same source, same content, same author list) and would either invalidate or duplicate the audit-queue.csv row.

**Action for the daemon:** advance past `raw/Papers Cube Manual Fetch/mathew2015.pdf`. Adding the SHA `0ae8bf80…` (or the basename stem `mathew2015`) to the daemon's de-dup skip list keyed to the canonical cite-key `vaishaly2015-health-effects-metal-groundwater` prevents this duplicate from being re-presented on subsequent ticks. The PCMF folder has at least one other observed byte-identical-sibling pattern (the `(1)` suffix convention appears repeatedly), so a folder-wide SHA-based dedup scan at daemon-startup would catch the full population in one pass.

**No commits made.** Page state unchanged.

## Stop 14 — true duplicate conflict: two existing source pages for the same DOI (sadiq-beauchemin2021)

- **PDF:** `raw/Papers Cube Manual Fetch/sadiq-beauchemin-2021-multi-elemental-risk-assessment-of-various-baby-rice-cereals-some-cause-for-concern.pdf`
- **Suggested handle (per daemon):** `PCMF_sadiq-beauchemin-2021-multi-elemental-risk-assessm`
- **DOI:** `10.1139/cjc-2020-0518` (Sadiq NW, Beauchemin D 2021, *Canadian Journal of Chemistry* 99(8):742–750, "Multi-elemental risk assessment of various baby rice cereals: some cause for concern?")
- **SHA-256 of PCMF copy:** `326c67806b06a557a7e73d98bc62636077e1c25449c3f73c8c2717cd5e259a30`

**Two existing wiki source pages for this one paper:**

1. `wiki/sources/sadiq-beauchemin-2021-multielemental-baby-rice-cereals.md` — `updated: 2026-05-09`, `raw_path: raw/external-fetch/Multi-elemental_risk_assessment_of_various_baby_ri.pdf` (1,128,453 bytes, SHA-256 `8b270fa1fd8644979a822ebcbd1203d4d0a21dec7dd0823e06b3e0181c539a4b`). Created from the externally-fetched copy. Frontmatter declares `products: [baby-cereals-dry-rice-based]` (single product, correctly scoped to the rice-cereal-only data). Substantive scientific call: explicitly attributes the residual non-Cr(III) Cr fraction (0–30%) to "method-related rather than actual Cr(VI) presence" and cross-references the Hernandez 2019 + Saraiva 2021 SS-ID gold-standard chemistry findings. Page is in `routing_malformed.csv` at `severity: advisory` (`missing_advisory: ingredients`).
2. `wiki/sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation.md` — `updated: 2026-05-15`, `raw_path: raw/Papers Cube Manual Fetch/sadiq-beauchemin-2021-multi-elemental-risk-assessment-of-various-baby-rice-cereals-some-cause-for-concern.pdf` (1,127,804 bytes — different file from the external-fetch copy but same paper). Created from the PCMF copy. Frontmatter declares `products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]`, `ingredients: ["[[ingredients/rice-cereal]]", "[[ingredients/rice]]"]`, and includes the full Table A1 µg/kg distribution per brand. Substantive scientific call: reports "Cr(VI): 15–50% of total bio-accessible Cr in some leachate fractions (saliva: 20–40 ng/g; gastric: 30–40 ng/g for samples A and B)" and quotes the authors' "remains a concern" language, treating Cr(VI) as a real positive detection.

**Why stopped:** This is the "True duplicate conflict" stop condition — same DOI, same paper, two byte-different copies of the PDF in two different `raw/` folders, two distinct canonical source pages already wired into the routing audit. All three identity checks hit *two* pages, not one. The skill's merge-enhance path assumes a single existing page to enhance. Re-ingesting against either page silently leaves the other in place, perpetuating the duplicate. This is the third observed instance of the duplicate-cite-key pattern on 2026-05-18 (Stop 11 = Parker 2022; Stop 12 = Gardener 2019; this stop = Sadiq & Beauchemin 2021).

**Substantive scientific contradiction between the two pages:** Unlike the Parker 2022 and Gardener 2019 duplicates (where the two pages differ mainly in schema completeness, not in scientific interpretation), the two Sadiq & Beauchemin pages disagree on whether Cr(VI) is genuinely detected in the bio-accessible fraction of baby rice cereal. The older external-fetch page attributes the residual non-Cr(III) Cr fraction to HPLC-ICPMS-without-isotope-dilution method artefact and aligns with Hernandez 2019 + Saraiva 2021 SS-ID measurements that find food-matrix Cr is essentially all Cr(III). The newer PCMF page treats the 15–50% Cr(VI) fraction as a real positive detection. This disagreement is load-bearing for the HMTc Cr-VI cell evidence base — Cr-VI is on the official 10-analyte HMT&C list, and whether baby rice cereal is a positive-detection source affects threshold-setting. The dedup pass must re-read the PDF (Tables 4 + 5) to settle which interpretation the source actually supports, not just pick the structurally-richer page.

**Additional defect on the newer page:** Frontmatter declares `products: [..., baby-cereals-dry-non-rice]` based on the paper's "preliminary oatmeal" comparison data (n=1 brand, explicitly preliminary per the paper's own framing). Per row-fit discipline, n=1 preliminary data does not warrant `direct_evidence` routing to a sibling product page — that should be `broad_product_context` at most, or omitted entirely. The older external-fetch page correctly scopes to rice-cereal only.

**Scope of references** (both cite-keys live in the routing fabric):

- `sadiq-beauchemin-2021-multielemental-baby-rice-cereals` is referenced in `wiki/log.md`, `wiki/batch-reports/infant-and-child-overnight-2026-05-09.md`, 5 metal pages (`metals/arsenic-total`, `metals/chromium-hexavalent`, `metals/cadmium`, `metals/lead`, `metals/arsenic-inorganic`), 1 product page (`products/baby-cereals-dry-rice-based`), `data/evidence/routing_malformed.csv`, `data/evidence/product_source_routing_audit.csv`, `data/evidence/local_reingest_queue.csv`, `data/evidence/local_reingest_packets/packet_manifest.csv`, the snippets file `037-sadiq-beauchemin-2021-multielemental-baby-rice-cereals.snippets.txt`, and `data/workbench/infant-and-child-foods-master.md`.
- `sadiq2021-baby-rice-cereal-bioaccessibility-speciation` is referenced in `wiki/log.md`, 5 metal pages (`metals/chromium`, `metals/arsenic-total`, `metals/lead`, `metals/cadmium`, `metals/arsenic-inorganic`), 2 product pages (`products/baby-cereals-dry-rice-based`, `products/baby-cereals-dry-non-rice`), 2 ingredient pages (`ingredients/rice-cereal`, `ingredients/rice`), `data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/cells-needing-synthesis.csv`, `data/evidence/review_events.jsonl`, `data/evidence/hmtc_aggregate_distributions.csv`, and `data/evidence/product_source_routing_audit.csv`.

Deduping requires:
  (a) **Resolving the Cr-VI scientific contradiction first** — re-read Tables 4 + 5 of the source PDF, determine whether the 15–50% Cr(VI) fraction is the paper's actual claim or a methodological caveat, and reconcile with the Hernandez/Saraiva SS-ID evidence in the Cr-VI synthesis cell. This is the load-bearing decision; the cite-key pick depends on it.
  (b) Picking the canonical cite-key. The newer `sadiq2021-baby-rice-cereal-bioaccessibility-speciation` has richer Key numbers (full Table A1 per-brand distribution) and current-schema frontmatter, but the older `sadiq-beauchemin-2021-multielemental-baby-rice-cereals` has the more defensible Cr-VI interpretation and correct row-fit scope (rice-cereal-only, no dry-non-rice spillover). The right canonical may be a hybrid: newer page's structural shell, older page's Cr-VI section + product-routing discipline.
  (c) Fixing the newer page's `baby-cereals-dry-non-rice` routing (downgrade from direct_evidence to broad_product_context or remove entirely, depending on (a)'s resolution).
  (d) Retiring the other cite-key by rewriting every reference across the surfaces enumerated above.
  (e) Merging any unique content from the retired page into the canonical page.
  (f) Deleting the retired source file.
  (g) Re-running the routing audit + regenerators (`hmtc_aggregate_distributions.csv`, `category1_autonomy_extracted_summary.csv`, the workbench briefings) so the cite-key reference is consistent across generator outputs.
  (h) Updating `review_events.jsonl` to retire the stale synthesis-event rows tied to the retired cite-key.

Steps (d)–(g) cross marker-block-owned generator outputs in several files, so the right execution path is a dedicated dedup-and-regenerate pass that runs the generators after the retire-and-rewrite, not a per-file hand-edit in an ingest cycle. This is out of scope for the per-PDF manual-fetch skill.

**Routing-audit status:** The newer canonical-candidate page (`sadiq2021-baby-rice-cereal-bioaccessibility-speciation`) is absent from `routing_malformed.csv` (clean) and routes to both rice-based and dry-non-rice product pages. The older legacy page (`sadiq-beauchemin-2021-multielemental-baby-rice-cereals`) is in `routing_malformed.csv` at advisory severity for missing ingredients and routes to only the rice-based product page. Both pages currently contribute to the same metals-page evidence rows under different cite-keys, which means metals pages double-count this paper's evidence in any aggregate that sums n_a_tier by cite-key.

**Action for the daemon:** advance past this PDF. The basename stem `sadiq-beauchemin-2021-multi-elemental-risk-assessment-of-various-baby-rice-cereals-some-cause-for-concern` (under `raw/Papers Cube Manual Fetch/`) can be added to the daemon's already-post-2026-05-14-clean skip list keyed pending dedup resolution. Re-presenting this PDF would just trigger the same duplicate-conflict stop again.

**Recommendation for Karen:** this is the third observed instance of the duplicate-cite-key pattern today (Stops 11, 12, 14). The pattern is now confirmed systematic across the FM/`raw/studies/`/`raw/external-fetch/`-vs-PCMF transition. A scripted DOI→multiple-cite-key collision scan across `wiki/sources/` (already recommended on Stops 11 and 12) should be prioritized — doing these one-by-one as they surface in the manual-fetch loop is strictly slower than a single systematic dedup pass, and in the Sadiq case the metals pages are likely double-counting evidence in the Cr-VI cell specifically because of the unresolved Cr-VI interpretation contradiction between the two pages.

**No commits made.** Page state unchanged.

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

## Stop — CEPHED 2013 already ingested + audited earlier today

- **PDF:** `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_05_Other_Categories/05_Other_Categories/Study_of_Heavy_Metals_in_Childrens_Toys_and_Products.pdf`
- **Suggested handle (per daemon):** `MFK_study-of-heavy-metals-in-childrens-toys-and-produc`
- **Existing wiki page:** `wiki/sources/cephed2013-heavy-metals-childrens-toys-nepal.md` (`updated: 2026-05-18`, `ingest_method: autonomy_v2_manual_fetch`)
- **Cite-key:** `cephed2013-heavy-metals-childrens-toys-nepal`
- **No DOI assigned** (NGO investigative report, Sah et al., CEPHED Lalitpur, July 2013)

**Why stopped:** The page was ingested fresh, audited via fresh-context subagent, and audit findings applied earlier today (2026-05-18). `data/evidence/audit-queue.csv` row for this cite-key shows `status: audited-revised`, `audit_verdict: REVISE`, `audit_applied_at: 2026-05-18`, with 1 finding applied (added `## Verification notes` documenting audit + slug verification + in-PDF Cd-range Section-11.3-vs-Table-5 inconsistency) and 1 finding rejected (slug-existence false positive on `toys-painted`/`toys-substrate-materials` — both pages exist on disk as locked HMTc Cat 21 Row 1/Row 2 scaffolds; the 2026-05-17 taxonomy snapshot is simply stale).

Three identity checks all hit the same canonical page: cite-key, `raw_handle: MFK_study-of-heavy-metals-in-childrens-toys-and-produc`, and exact `raw_path` match.

**Routing-malformed status:** appears in `data/evidence/routing_malformed.csv` at `severity: advisory` with `missing_advisory: ingredients;matrices`. This is the expected baseline for a toys-only source — XRF surface screening of plastic/metal/wood/rubber/fabric/clay/foam/paper toys does not declare food-style ingredient or matrix slugs. Documented as such in the page's own Verification notes and in the audit-queue row. Not a blocking defect requiring re-ingest.

**Action for the daemon:** advance past this PDF. The page is post-2026-05-14 clean by the skill's own definition (Phase 1 step 1 skip rule). Recommend adding `MFK_study-of-heavy-metals-in-childrens-toys-and-produc` (or SHA `21a45c17108be0bba1a6d1b96347e023d0ddf1da57569629386f5460418c0e4b`) to the daemon's de-dup skip list so the same handle is not re-presented in subsequent ticks.

**No commits made.** Page state unchanged.

## Stop — PDF filename/content mismatch, actual paper out of scope

- **PDF:** `raw/Manual Fetch Kimi /05_Dairy_Eggs_and_Alternatives/05_Dairy_Eggs_and_Alternatives/Development of a Fast Method Using ICP-MS Coupled with HPLC and Exploration of the Reduction Mechanism of Cr(VI) in Foods.pdf`
- **Suggested handle (per daemon):** `MFK_development-of-a-fast-method-using-icp-ms-coupled-`
- **SHA-256:** `e5153c106afd9d3513406dab59caabbe9f49ee3c7ff378dacdf2a1f59bf0a28e`
- **Filename promises:** Song et al. 2024 — HPLC-ICP-MS method for Cr(VI) in foods (already ingested at `wiki/sources/song2024-crvi-hplc-icpms-food-reduction.md`, DOI 10.3390/toxics12050325, sourced from `01_Fruits_and_Fruit_Products`).
- **Actual contents:** Ren S, Du Y, Zhang J, Zhao K, Guo Z, Wang Z. "Commercial Production of Highly Rehydrated Soy Protein Powder by the Treatment of Soy Lecithin Modification Combined with Alcalase Hydrolysis." *Foods* 2024, 13:1800. DOI 10.3390/foods13121800. Published 7 June 2024 (Northeast Agricultural University, Harbin). 21 pages.

**Why stopped:** The PDF inside this file is a soy protein processing study — soy lecithin modification + Alcalase enzymatic hydrolysis to improve rehydration, emulsification, and viscosity properties of spray-dried soy protein isolate. All 21 pages (verified through page 15, with the remainder consistent with the established study scope: viscosity, emulsifying activity/stability, discussion, references) report particle size (nm), zeta potential (mV), turbidity (a.u.), surface hydrophobicity (H0), FTIR secondary-structure ratios (α-helix/β-sheet/β-turn/random coil %), bulk density (kg/m³), wettability (min), dispersibility (s), and solubility (%). **There are zero heavy metal concentration measurements, zero ICP-MS data, zero Cr/Pb/Cd/As/Hg results, and zero analytes from the HMTc 10-analyte list.** The paper is out of scope for HMI in its entirety — not a thin-evidence paper, not a method paper with downstream relevance, simply a different domain (plant-protein processing science).

**Identity checks:**
1. DOI grep `10.3390/foods13121800` against `wiki/sources/` — no hits (correctly; this paper has no HMI page and should not have one).
2. The DOI for the promised paper (`10.3390/toxics12050325`, Song et al.) IS already represented at `wiki/sources/song2024-crvi-hplc-icpms-food-reduction.md` — so the wiki is not missing the Cr(VI) method paper that the filename advertises.
3. No cite-key collision for `ren2024-*` in `wiki/sources/`.

**Action for Karen:** The PDF was filed under the wrong filename when Kimi sourced it. Two reasonable resolutions:
- (a) Delete or move this PDF out of the manual-fetch queue — it is not an HMI paper.
- (b) If Kimi was meant to fetch the Song et al. Cr(VI) paper for the dairy folder context (because Song et al. tested milk powder and yoghurt among its 7 foods), no action is needed — the paper is already ingested from the Fruits folder. The Song page's frontmatter already declares `[[products/milk-powder]]` and `[[products/yoghurt]]` so routing covers the dairy context correctly.

**Action for the daemon:** advance past this PDF. Recommend adding SHA `e5153c106afd9d3513406dab59caabbe9f49ee3c7ff378dacdf2a1f59bf0a28e` (or the handle `MFK_development-of-a-fast-method-using-icp-ms-coupled-`) to the daemon's skip list so this misnamed file is not re-presented.

**No commits made.** No wiki page created. No audit-queue row appended.
