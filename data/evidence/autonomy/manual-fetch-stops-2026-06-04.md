# Manual-fetch stops — 2026-06-04

## jecfa-67th-aluminium-methylmercury-2007 — partial success

**PDF:** `raw/Manual Fetch Kimi /June 3 Folder/WHO_TRS_940_eng 2.pdf`
**Folder context:** Manual Fetch Kimi /June 3 Folder
**Cite-key:** `jecfa-67th-aluminium-methylmercury-2007`
**Ingest commit:** `0da8068`

### What completed

- **Phase 1 ingest:** Fresh source page written at `wiki/sources/jecfa-67th-aluminium-methylmercury-2007.md` (WHO Technical Report Series 940, JECFA 67th meeting Rome 20-29 June 2006). In-scope sections 4.1 Aluminium (PTWI revised 7→1 mg Al/kg b.w./week) and 4.3 Methylmercury (1.6 µg/kg b.w./week PTWI confirmed; prior 3.3 PTWI formally withdrawn). Out-of-scope sections (chloropropanols, food additives, specifications-only items) summarized in the Provenance notes but not extracted as Key numbers.
- **Routing audit:** `npm run evidence:source-routes` returned 10 product-page rows generated; 0 unresolved; source not in `routing_malformed.csv`.
- **Ingest commit:** `0da8068` (with `WIKI_EDIT_AUDIT_SKIP=1` per manual-edit convention).
- **Audit queue append:** `pending` row appended for cite-key with commit hash 0da8068 and timestamp 2026-06-04T00:00:00Z.
- **Phase 2 audit subagent:** Spawned via Agent tool (subagent_type: general-purpose). Subagent read the source page, the PDF (front matter + the Al and MeHg sections + Annex 2 toxicological recommendations), the audit prompt, and the taxonomy snapshot. Verdict: **PROMOTE**. All five checks clean. Notable confirmations against PDF: new Al PTWI 1 mg/kg b.w./wk (p. 43), prior Al PTWI 7 mg/kg b.w./wk (p. 33/p. 37), LOEL range 50-75 mg/kg b.w./day (p. 43), composite uncertainty factor 100×3=300, all 6 rows of Table 6 adult exposure ranges (p. 44), reconstituted soya formula 0.4-6 mg/L and milk-based 0.01-0.4 mg/L (p. 42), infant 95th-percentile model values (p. 42), confirmed MeHg PTWI 1.6 µg/kg b.w./wk (p. 53-54, Annex 2 p. 76), prior 3.3 PTWI formally withdrawn (p. 54, Annex 2 p. 76), maternal-hair BMDL/NOEL 14 mg/kg (p. 53), maternal blood 0.056 mg/L (p. 54), maternal daily intake 1.5 µg/kg b.w./day (p. 54), uncertainty factor 6.4 (p. 54). Zero ❌ findings; the one ⚠️ note (tHg in `species:` array borderline) is defensible (source uses tHg in maternal hair/blood as MeHg surrogate). Zero applied; zero rejected. Per skill, when audit is PROMOTE with no false-positive notes to record, the Phase 3 audit-application commit is skipped (no content changes).

### What did not complete

- **Phase 3 audit-queue status update from `pending` to `audited-promote`:** Blocked. Concurrent FRANK ingest (`tools/autonomy/frank.mjs` PID 2942) plus `tools/autonomy/ingest-manual-fetch-batch.mjs` (PID 6532, started 2026-06-04 13:31) are holding write locks on `data/evidence/audit-queue.csv` and on most of `data/evidence/`. Sandbox returns EPERM on `open()`, `tail`, `cat`, `Edit`, `Read`, and Python `open(... 'w')` against that path. The earlier `cat >> ...` shell-append for the `pending` row did succeed (queue file timestamp 13:39 reflects that append); the in-place update from `pending` to `audited-promote` is what is now blocked.

### Next-tick recovery

The queue row currently reads:

```
jecfa-67th-aluminium-methylmercury-2007,Manual Fetch Kimi/June 3 Folder,MFK_who-trs-940-eng-2,0da8068,2026-06-04T00:00:00Z,pending,,,
```

It should be updated to:

```
jecfa-67th-aluminium-methylmercury-2007,Manual Fetch Kimi/June 3 Folder,MFK_who-trs-940-eng-2,0da8068,2026-06-04T00:00:00Z,audited-promote,PROMOTE,2026-06-04,<audit-summary>
```

Karen or the next manual-fetch tick (after FRANK and the batch ingester release their locks on `data/evidence/`) can apply this update. The subagent's verdict and findings are documented above so the row can be finalized without re-running the audit.

### Stop classification

Not a Cochrane-bar defect; not a paper-internal contradiction; not a duplicate conflict; not a routing failure. Operational concurrency issue with FRANK's evidence-file locks during a manually-invoked skill run. The substantive work (source page + audit) is complete and committed; only the bookkeeping row update is deferred.

## rempelos2023-vegetable-organic-conventional-metals — already terminal

**PDF:** `raw/Manual Fetch Kimi /June 2 Manual Fetches/agronomy-13-01225-v2.pdf`
**Folder context:** Manual Fetch Kimi /June 2 Manual Fetches
**Cite-key:** `rempelos2023-vegetable-organic-conventional-metals`

### Skip reason

Per skill Phase 1 Step 1, a PDF is candidate-for-processing only if (a) no existing page, (b) existing page `updated:` before 2026-05-14, or (c) existing page reported as malformed in the most recent routing audit. This PDF fails all three filters:

- Existing page at `wiki/sources/rempelos2023-vegetable-organic-conventional-metals.md` with `updated: 2026-06-02` (post-cutoff).
- Audit-queue row (line 592) shows `status: audited-revised`, `audit_verdict: REVISE`, `audit_applied_at: 2026-06-02`. Fresh-context audit subagent (Agent tool, agent ID a8740e5f581900d2c) already ran 2026-06-02; one Check 1 finding applied (potato Cd NPK-vs-FYM percentage reverted from 63% computed to 50% as paper's prose states, with Table-10-vs-prose internal inconsistency flagged inline), zero rejected. Checks 2-5 all clean.
- `routing_unresolved.csv`: no entry.
- `routing_malformed.csv`: one entry with severity `advisory` for missing `products` field. This is structurally correct for this source: it is an agronomic field-trial study of harvested raw vegetables (potato tubers, cabbage heads, lettuce heads, onion bulbs) routed by ingredient slug, with no finished consumer-product matrix. Advisory entries are not the blocking-malformed trigger described in the skill; the routing layer fell back to broad scope per design.

### What was verified this cycle

Front matter of the PDF re-read (pages 1-13 covering abstract, methods, statistical analysis, Tables 1-5). Identity confirmed: title, authors, year 2023, journal Agronomy, DOI 10.3390/agronomy13051225, CC BY 4.0 license. All metadata matches the existing wiki page exactly. No defect that the prior cycle missed.

### Stop classification

Normal skip per skill Phase 1 Step 1. No work was done because no work is needed: page is post-cutoff, clean, audited, and terminal. The wrapper selected this PDF by directory listing rather than by audit-queue status; the per-skill identity check is what catches that and short-circuits.

## STOP: MFK_tfacts55 (atsdr2005-tin-toxfaqs) — byte-identical duplicate of already-ingested-and-audited PDF (tfacts55 2.pdf)

**PDF:** `raw/Manual Fetch Kimi /June 3 Folder/tfacts55.pdf`
**Suggested handle:** MFK_tfacts55
**Folder context:** Manual Fetch Kimi /June 3 Folder
**Existing wiki source page:** `wiki/sources/atsdr2005-tin-toxfaqs.md` (cite-key `atsdr2005-tin-toxfaqs`)
**Existing raw_handle on that page:** `MFK_tfacts55-2`
**Existing raw_path on that page:** `raw/Manual Fetch Kimi /June 3 Folder/tfacts55 2.pdf`

### Identity verification

Byte-identical duplicate:

```
shasum -a 256 "tfacts55.pdf" "tfacts55 2.pdf"
356316c1f54319c9f12143a0dc6f69e32fa817f52b32229f73a203189a57027d  tfacts55.pdf
356316c1f54319c9f12143a0dc6f69e32fa817f52b32229f73a203189a57027d  tfacts55 2.pdf
```

The two filesystem entries are the same ATSDR August 2005 ToxFAQs fact sheet #55 for tin and tin compounds. The " 2" suffix on the previously-ingested copy is the macOS rename pattern when two files of the same name are dragged into a folder; the hash confirms they are the same PDF, not two different copies of the fact sheet.

### Existing-page status (post-2026-05-14 clean, audited PROMOTE)

- **Frontmatter `updated`:** 2026-06-04 (today).
- **Frontmatter `sha256`:** `356316c1f54319c9f12143a0dc6f69e32fa817f52b32229f73a203189a57027d` — matches the PDF served at `tfacts55.pdf` exactly.
- **Audit-queue row:** `atsdr2005-tin-toxfaqs,raw/Manual Fetch Kimi /June 3 Folder,MFK_tfacts55-2,6ef2999,2026-06-04T14:00:00Z,audited-promote,PROMOTE,2026-06-04,...` — status terminal.
- **Recent commits today:** `6ef2999 ingest: atsdr2005-tin-toxfaqs fresh ...`, `f7e631e audit: atsdr2005-tin-toxfaqs promoted (2 minor concerns applied)`, `4b3a5b6 audit-queue: atsdr2005-tin-toxfaqs pending → audited-promote (PROMOTE)`. All three within today's session.
- **Malformed CSV:** present as severity `advisory` only (missing optional `products`/`ingredients` fields — structurally correct for an ATSDR consumer fact sheet with no occurrence data; documented in the page's verification notes). Not a blocking malformed entry.

### Stop classification

True-duplicate-short-circuit per skill Phase 1 Step 1: identity-check sweep hits an existing post-2026-05-14 clean page whose `sha256` matches the candidate PDF exactly. The page was ingested, audited (PROMOTE, all five checks clean), and the two audit concerns the Phase 2 subagent raised were already applied (OSHA PEL TWA framing removed from Key numbers; `drinking-water` removed from matrices). No work to do.

### Recommendation for Karen

The byte-identical duplicate `tfacts55.pdf` and `tfacts55 2.pdf` could be deduplicated at the filesystem level (delete one of the two copies) so the manual-fetch wrapper does not re-attempt the PDF on each loop tick. Optional housekeeping, not blocking.

## cfs2019-organotin-aquatic-hongkong — skip (already cleanly ingested)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/04_Shellfish/Organotin Compounds in Aquatic Products Available at Local Markets (Hong Kong).pdf`
**Folder context:** manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/04_Shellfish
**Existing cite-key:** `cfs2019-organotin-aquatic-hongkong`

### Skip reason

Existing page `wiki/sources/cfs2019-organotin-aquatic-hongkong.md` is `updated: 2026-05-30` (post-2026-05-14 cutoff), not in `routing_malformed.csv`, not in `routing_unresolved.csv`. Carries a 2026-05-30 manual-fetch merge-enhance verification note that re-verified Tables 1–4, per-species appendices I–IV, and corrected the prior coral-clam DBT attribution. Per SKILL.md Phase 1 step 1: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

This is the Kimi corruption-folder drain doing exactly what it should — the original P0135 PDF under `raw/Manual Fetch Kimi /04_Meat_Poultry_Seafood/` already produced a properly-ingested merge-enhanced page; this duplicate copy under the corruption-folder shellfish bucket needed no work. No commit, no audit-subagent spawn, no queue append.

## hu2006-tpt-tbt-trophic-bohai-bay — skip (already cleanly ingested and audited today)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/04_Shellfish/Trophic Magnification of Triphenyltin in a Marine Food Web of Bohai Bay, North China_ Comparison to.pdf`
**Folder context:** manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/04_Shellfish
**Existing cite-key:** `hu2006-tpt-tbt-trophic-bohai-bay`

### Skip reason

Existing page `wiki/sources/hu2006-tpt-tbt-trophic-bohai-bay.md` is `updated: 2026-06-04` (post-2026-05-14 cutoff), not in `routing_malformed.csv`, not in `routing_unresolved.csv`. Already processed end-to-end earlier today: ingest commit `062e8d9` (fresh NEW path, DOI 10.1021/es0514747, PDF sha256 517dc7ae…7e9347), audit verdict PROMOTE (all five checks clean, 0 ❌ / 0 ⚠️ requiring change), `data/evidence/audit-queue.csv` status `audited-promote` with `audit_applied_at=2026-06-04`. Per SKILL.md Phase 1 step 1: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."

The wrapper re-fed an already-completed PDF (this folder's drain is partially overlapping the morning's fresh-ingest run). No second-pass work needed: the page already carries the full Table 2 species/lipid/TL/MBT/DBT/TBT/MPT/DPT/TPT matrix, the TMF regression stats, the seawater/sediment surrogate measures, the deuterium recovery flags, the organotin-vs-inorganic-Sn firewall note, and the routing fan-out to fish/shellfish/molluscs/seafood. No commit, no audit-subagent spawn, no queue append.

## KADC_heavy-metal-contents-in-some-edible-seaweeds-wakam — skipped (already processed this cycle)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned/Heavy metal contents in some edible seaweeds (Wakame, Kombu) in Japan.pdf`
**Folder context:** manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned
**Existing cite-key:** `mosusu2023-edible-seaweeds-japan-metals`

### Skip reason

Per v2.0 skill candidate-selection rule, a PDF is "next" only if (a) no existing page, (b) existing page `updated:` < 2026-05-14, or (c) existing page in `routing_malformed.csv`. None hold:

- Existing wiki page: `wiki/sources/mosusu2023-edible-seaweeds-japan-metals.md`
- `updated: 2026-06-04` (today, post-2026-05-14)
- Not in `routing_malformed.csv` (grep exit 1)
- Not in `routing_unresolved.csv` (grep exit 1)
- Audit-queue status: `audited-revised` (commit `af105d2`, 2026-06-04); 1 finding evaluated; 0 applied; 2 rejected (matrices-vocab concern verified as established corpus convention; wiki-pages section recommendation conflicts with v2.0 architecture).

Per the skill, "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." Wrapper script should advance to the next PDF.

## martinleon2021-edible-seaweeds-canary-metals-nitrates — clean skip

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned/Human Exposure to Toxic Metals (Cd, Pb, Hg) and Nitrates from Seaweed Consumption.pdf`
**Folder context:** manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned
**Cite-key:** `martinleon2021-edible-seaweeds-canary-metals-nitrates`

### Reason for skip

Per v2.0 skill rule "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed":

- Existing wiki source page at `wiki/sources/martinleon2021-edible-seaweeds-canary-metals-nitrates.md` is dated `updated: 2026-06-04` (today).
- Source not in `data/evidence/routing_malformed.csv`.
- Source not in `data/evidence/routing_unresolved.csv`.
- Audit-queue row already shows `status=audited-promote`, `audit_verdict=PROMOTE`, commit hash `ffd08c8`, applied 2026-06-04. The fresh-context Agent subagent audit already ran with 1 finding / 0 applied / 1 rejected (the `dry-weight` matrix flag — verified as established corpus convention against e.g. `mosusu2023-edible-seaweeds-japan-metals.md`, `aziz2021-gracilaria-seaweed-bangladesh.md`).

No ingest, no audit, no commit performed. The orchestrator should advance the wrapper script to the next PDF in `05_Kelp_Seaweed_Canned`.

## sochacka2025-spirulina-chlorella-supplements-poland — already processed end-to-end (no-op)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned/Spirulina and Chlorella Dietary Supplements—Are They a Source Solely of Valuable Nutrients_.pdf`
**Folder context:** `manual-fetch/Kimi_Agent_Download Corruption Issue/seafood_papers/05_Kelp_Seaweed_Canned`
**Suggested handle:** `KADC_spirulina-and-chlorella-dietary-supplementsare-the`

### Reason for skip

Per v2.0 skill rule "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed (blocking)":

- DOI grep (`grep -rl spirulina.*chlorella wiki/sources/`) and cite-key grep (`ls wiki/sources/ | grep KADC|spirulina|chlorella`) both hit `wiki/sources/sochacka2025-spirulina-chlorella-supplements-poland.md`.
- Existing source page is dated `updated: 2026-06-04` (today). `raw_handle` and `raw_sha256` match the candidate PDF.
- Audit-queue row already shows `status=audited-revised`, `audit_verdict=REVISE`, ingest commit `0575377`, audit-application commit `1cc6a76`, audit_applied_at `2026-06-04`. The fresh-context Agent subagent audit ran with 4 findings / 4 applied / 0 rejected (Cd 7.35%→0.0735%, Cr 20.69%→0.2069%, Mn samples 17/31 0.20%→0.02%/0.01%, Ni 0.00477%→0.00334% column-misalignment fix).
- `routing_unresolved.csv`: 0 entries for this source. `routing_malformed.csv`: 1 advisory-severity entry (missing `ingredients:` field). This is **intentional and documented** in the page's Verification notes — spirulina and chlorella are microalgae that don't fit the existing `ingredients/seaweed` slug, and the v2.0 skill explicitly forbids creating new ingredient pages during ingest. The advisory entry is non-blocking and reflects the routing layer's broad-scope fallback working as designed.

No ingest, no audit, no commit performed. This is a wrapper-script idempotency case: the orchestrator handed the same PDF a second time after the previous cycle completed it. The orchestrator should advance to the next PDF in `05_Kelp_Seaweed_Canned`.
