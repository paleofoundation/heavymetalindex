# Standards 95%-confidence pass: session 1 report (2026-09-02)

Brief: `docs/tasks/standards-95-confidence-completion-brief.md`. Model: Claude Fable 5.1 (every agent spawn `model: fable`, routed through `tools/autonomy/governor.mjs`). Index branch `claude/exciting-taussig-159366` (PR #129 to main; push does not deploy). Cert: 28 commits on local `main`, none pushed (every category is either below 100% confirmed or carries a held record).

## Definition-of-done checklist

| # | Item | State | Evidence |
|---|------|-------|----------|
| 1 | Phase A instruments, one commit each | done | index 671b62474, 259dbae (cert), 1ec06c0 (cert), fdb9e25d0, 0f958a6af, 38dcd8953, 10027edfa + 96d9358 (cert), 5ee436494 |
| 2 | Phase B0 unmerged work classified | done | PR #118 closed as absorbed; #119 absorbed via GB 2762-2025 successors; cert coffee branch absorbed; OI-20260902-unmerged-standards-work-triage |
| 3 | Round-trip reconciliation per category | 27 of 32 dirs | `node tools/standards/roundtrip-category.mjs --cat=N` (table below); 10 clean and copied, 13 held, 8 wrong-basis (Phase C, human-gated), cat9/cat12 no config (OI) |
| 4 | Every analyte a number (COMPLETE) | reconciled dirs: audit C2 = 0 | `audit-compiled-standards --all`: 335 records / 2133 firm cells / 108 FAIL, all in the 8 wrong-basis dirs plus 5 non-page Cat-1 records |
| 5 | Register in force only (unified gate) | done | Israel MoH 2016 superseded (162 rows, f975371e1); GB 2762-2022 superseded (29 rows); `lib/register-gate.mjs` bound in 22 sites |
| 6 | Machine-checkable confidence manifests | 32 of 32 dirs | `confidence-run --cat=N` for every dir; `lint-standards-confidence` 0 problems (warn-only); block list empty |
| 7 | M1 register-row verification | 31 verified, 4 refuted (Israel), 162 refuted via deep read, 8 pending (FSSAI 2016 needs a deep read; 2 France cannot-verify) | `data/evidence/regulatory_limits_verification.jsonl` |
| 8 | M2 applicability adjudication | seafood round 1 done (10 verdicts, canary caught): 17 confirmed, 31 refuted, 28 unverified | `_m2-verdicts/seafood-compiled/`; round 2 packets `m2-20260902b-p1..p4` built; cat30 `m2-20260902-p6` built |
| 9 | Pre-mint dry runs | done, nothing mintable yet | cert: `standard-readiness-lint` 349 pages / 239 COMPLETE / 331 empty cells / 29 recordless / 2 scaffolds; `mint-dois --manifest --emit` eligible 0, skipped 351 (349 held). Index: `mint-dois --dry-run` 763 candidates, 27 DOI suffix collisions (OI) |
| 10 | Cert battery green | done | `npm run prebuild` exit 0 after two fixes (manual builder shape tolerance 81ab6a6; cert_doi from the DOI registry 9ff16f2) |

## Per-category state (round-trip, end of session)

| Dir | Compile | Audit FAIL | Regressions | Held records | Note |
|-----|---------|-----------:|------------:|-------------:|------|
| cat1 | ok | 5 | 15 | 12 | 15 infant tHg/Cd raises held (Israel supersession); 5 FAIL are non-page records |
| cat2 | ok | 0 | 64 | 16 | wrong-basis anchors refused by the harvester (Phase C) |
| cat3 | ok | 0 | 0 | 0 | copied |
| cat4 | ok | 0 | 10 | 8 | 2 Pb raises + 8 iAs bounded held; tHg tightened 30/150→20 |
| cat5 | ok | 0 | 0 | 0 | copied |
| cat8 | ok | 0 | 4 | 4 | water iAs 6→10 held |
| cat10 | ok | 3 | 39 | 12 | Phase C |
| cat11 | ok | 0 | 0 | 0 | copied |
| cat13 | ok | 0 | 71 | 18 | Phase C |
| cat14 | ok | 0 | 48 | 12 | Phase C |
| cat15 | ok | 0 | 90 | 10 | cert anchors are toy-migration and water rows (wrong basis); index keeps control/not-material |
| cat16 | ok | 0 | 24 | 24 | child-protective tHg 4→20 held on every record |
| cat17 | ok | 0 | 9 | 9 | iAs raises held; 2 records copied |
| cat18 | ok | 0 | 28 | 7 | Pb/Cd/tHg supplement raises held; Al wrong basis |
| cat19 | ok | 0 | 52 | 13 | Phase C |
| cat20 | ok | 8 | 49 | 10 | Phase C |
| cat21 | ok | 0 | 0 | 0 | copied |
| cat22 | ok | 0 | 45 | 15 | Phase C |
| cat23 | ok | 43 | 136 | 29 | Phase C (contact materials) |
| cat24 | ok | 0 | 1 | 1 | milk-powder Pb 20→200 held; 7 records copied |
| cat25 | ok | 0 | 0 | 0 | copied |
| cat26 | ok | 0 | 0 | 0 | copied (PDE read-across compiler) |
| cat27 | ok | 0 | 4 | 4 | iAs bounded held; tHg tightened 30→20 |
| cat28 | ok | 0 | 0 | 0 | copied; tHg tightened 400→20 |
| cat29 | ok | 0 | 3 | 3 | iAs bounded held; tHg tightened 30→20 |
| cat30 | ok | 0 | 2 | 2 | oils Cd 30→200 held |
| cat31 | ok | 0 | 3 | 3 | sugar Cd 150→200 held; honey copied |
| cat32 | ok | 0 | 0 | 0 | copied |
| cat33 | ok | 0 | 0 | 0 | copied |
| cat34 | ok | 0 | 1 | 1 | salt iAs bounded held; 3 records copied |
| cat35 | ok | 0 | 0 | 0 | copied |
| seafood | ok | 0 | 7 | 7 | Cr-VI wrong-basis→bounded held; Ni/Cr/tHg/MeHg tightened |
| cat9, cat12 | no config | | | | OI-20260902-cat9-cat12-no-compiled-config |

## Raised or bounded numbers held for ratification (83 items)

File: `data/workbench/standards/confidence/_held-raises.json`. The index dir carries the honest Method v2.0 value; the cert dir stays at the published value; `roundtrip-category --copy-clean` enforces the hold. By class: override-raise 25, catch-all-raise 26, scan-raise 9, subsumed (firm species → bounded by parent) 16, wrong-basis-to-bounded 7.

| Dir | Cells | What moves |
|-----|------:|------------|
| cat1 | 15 | infant tHg 8/15/4 → 20 (GB 2762-2025 complementary foods / cereals; Thailand general-food row); fruit-juice Cd 10 → 20, tHg 10 → 20 |
| cat16 | 24 | supplements tHg 4 → 20 (Thailand general-food row) |
| cat18 | 21 | pet supplements Pb 10 → 1000, Cd 5 → 300, tHg 4 → 100 (strictest in-force supplement rows) |
| cat4 | 10 | dried-fruit and fruit-snacks Pb 100 → 200 (GB fruit products); 8 iAs 60/300 → bounded by tAs |
| cat17 | 9 | iAs 100 → 150 (dry) and 20 → 500 (wet) from the profile scope scan |
| seafood | 7 | Cr-VI 10 (water MCL) → bounded by total Cr |
| cat8 | 4 | water iAs 6 → 10 (EPA MCL) |
| cat27 | 4 | legumes/peanuts/soy iAs 100 → bounded by tAs |
| cat29 | 3 | mushrooms iAs 60 → bounded |
| cat31 | 3 | sugar and syrups Cd 150 → 200 (Singapore general-food row) |
| cat30 | 2 | oils Cd 30 → 200 (Singapore general-food row) |
| cat24 | 1 | milk powders Pb 20 → 200 (GB other milk products) |
| cat34 | 1 | salt iAs 500 → bounded by tAs |

Alternative for every row: retain the published number as a staff-selected precautionary value. The compiled vocabulary has no `precautionary` tag; adding one is a schema decision.

## Tightened numbers (applied, not held)

| Dir | Cell | Was → now | Anchor |
|-----|------|-----------|--------|
| seafood | Ni on 6 fish/shellfish/cephalopod rows | 2000 → 500 | EU 2024/1987 baby food (wet basis), both M2 verifiers |
| seafood | fish-marine-predatory tHg and MeHg | 1000 → 500 | EU 2023/915 3.3.1.1 general; HK Cap 132V MeHg other fish (king mackerel, ordinary tuna at 500 in law) |
| seafood | seaweed Cr | 2000 → 1000 | GB 2762-2025 cereals (dry plant line) |
| cat28 | tHg on 6 nut/seed rows | 400 → 20 | Thailand MoPH 414/2020 general-food row |
| cat27, cat29, cat4 | tHg on 10 rows | 30 or 150 → 20 | Thailand general-food row |
| cat17 | pet-food-raw, toppers Sn | 200000 → 50000 | profile scan (human-grade) |

## Baseline-screen cells created

None. `data/evidence/analytical_methods.csv` is still header-only; no LOQ was fabricated.

## OIs

Closed with evidence: OI-20260826-readiness-lint-test-prefix-gap, OI-20260827-readiness-lint-cells-shape, OI-20260902-cert-doi-writeback-reset-gate0, OI-20260902-cert-local-main-diverged, OI-20260902-cert-seo-crawl-metadata-129, OI-20260902-mint-dois-safety-index-executes-without-dryrun, OI-20260902-no-roundtrip-diff-tool-loosening-universal, OI-20260902-readiness-lint-still-overcounts-complete; OI-20260902-il-fcs2016-not-in-force recorded as enacted under wwsaid (ratification pending).

Opened (human-gated): OI-20260902-catch-all-rows-bind-program-wide, OI-20260902-completion-pass-wrong-basis-inventory, OI-20260902-cert-live-cells-fail-own-basis-guard, OI-20260902-unmerged-standards-work-triage, OI-20260902-cert-stranded-datacite-cat23, OI-20260902-synthesis-title-emdash-housestyle.

Opened (auto): OI-20260902-eu-successor-cells-missing-from-register, OI-20260902-cat26-aluminium-anchor, OI-20260902-cat9-cat12-no-compiled-config, OI-20260902-index-doi-suffix-collisions, OI-20260902-gb2762-2025-official-url, OI-20260902-gb2762-2025-repoint-cat-configs, OI-20260902-cat1-fruit-juice-apple-ias-form-split, OI-20260902-fr-cshpf-seaweed-primary-archive, OI-20260902-fiji-fsr2009-row-url-not-instrument, OI-20260902-ca-crvi-final-regulation-text-not-held, OI-20260902-datacite-container-backfill, OI-20260902-c5-formula-al-reconstitution-false-positive, OI-20260902-cert-navpanels-seed-stale, OI-20260902-cert-cat23-release-basis-conflation, OI-20260902-cert-cat26-stale-framing-no-version-bump, OI-20260902-app-onboarding-no-pet-foods-category, OI-20260902-cert-duplicate-rice-milk-rows.

## Batched escalation list (genuinely Karen's)

1. Ratify or decline, via `decide.mjs`, the enacted Israel supersession and the 83 held items above; the seafood M2 tightenings are applied and listed for information.
2. Rule OI-20260902-catch-all-rows-bind-program-wide: whether sovereign general-food residual rows (Singapore, Thailand, Uruguay) bind program-wide under Method v2.0. Thirty-plus re-anchored cells and the seafood Sn/Cd refutations turn on it.
3. Rule the wrong-basis inventory (Phase C): 518 cells in cat2/10/13/14/19/20/22/23 plus Cat-15 (toy-migration Sn/Al/Cr-VI on cosmetics) and Cat-18 Al.
4. Seafood taxonomy: split or disclose fish-marine-predatory (king mackerel, ordinary tuna), canned-seafood (tuna), fish-freshwater (tilapia, channel catfish), shellfish (bivalves vs crustaceans), seaweed (wakame).
5. `mint-dois --live` (cert, then index): not runnable yet; cert has 0 eligible pages, index has 27 suffix collisions.
6. GATE 3 DataCite identity / rightsHolder = Paleo Certified, Inc. (counsel).
7. GATE 1 snapshot mechanism comparison.
8. Retire the 12 dissolved Cat-7 taxonomy rows?
9. Organotin speciation as a new analyte class.
10. Whether a `precautionary` provenance tag enters the compiled vocabulary (the alternative to every held raise).

## Next session, in order

1. Dispatch M2 round 2 (seafood p1–p4 A/B, cat30 p6 A/B) when the governor frees; ingest; rerun `confidence-run`; `--mirror` when a dir passes the block-mode lint; add it to `confidence-blocking.json`.
2. Deep read for the FSSAI 2016 chromium row (g6 disagreement) and the France CSHPF seaweed rows.
3. Ingest the missing EU successor rows (2023/915 Hg and Sn sections, Reg 2018/73 mercury MRLs, Directive 2003/40/EC) with primary sources and regulation pages; they tighten plant-commodity tHg.
4. cat9 and cat12 configs; Phase C once ruled.
