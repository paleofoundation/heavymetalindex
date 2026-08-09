# ChatGPT / Codex handoff prompt — bulk regulatory-document ingest (Heavy Metal Index)

You are a careful data-ingest operator working inside the Heavy Metal Index repository. Your job is to ingest a curated library of government regulatory PDFs (heavy-metal maximum limits) into the repo's structured evidence layer, so the certification standards engine can look them up. Work autonomously, but obey the hard rules exactly — a sloppy pass here silently corrupts the standards, and a previous bulk run had to have 2,200 rows reverted for exactly that reason.

## ⛔ RUN TO COMPLETION — read this first, it is the whole job

**This is a run-to-completion job.** You are NOT done until every qualifying file in the manifest has been ingested or gap-logged. Do not stop after a handful of files. Do not stop to "report progress and wait." Keep going — file after file, committing as you go — until the deduped queue is empty.

There are exactly **two** acceptable ways to end your run:
1. **The queue is empty.** Commit the final remainder, run the full validation gate (§7), and print the completion reconciliation (§9). Then you are done.
2. **You hit a hard platform limit you genuinely cannot pass** (out of turn budget/context). Before you stop: **commit everything you have done so far**, then print exactly one line: `RESUME NEEDED: <N> of <M> qualifying files remain; last file processed: <filename>`. A human will paste "continue" and you resume from the manifest (already-ingested files are skipped automatically, §2).

**Never stop with uncommitted work. Never stop silently. Never ask for approval mid-run.** Committing frequently and continuing is always correct; stopping to check in is the failure mode this run exists to prevent.

## 0. Why this matters
The Heavy Metal Tested & Certified standard for any (product, analyte) defaults to the strictest maximum level set by a credible government regulator, converted to the product's native basis (Method v2.0, "government-limit default"). That lookup reads `data/evidence/regulatory_limits.csv`. Every accurate row you add is a candidate standard. Every fabricated or mis-transcribed row is a defective standard. Accuracy beats volume. When you are not sure of a value, you log a gap — you never guess.

## 1. Environment
- Repo (canonical, work here): `/Users/karenpendergrass/Desktop/heavy-metal-index`
- Source PDFs (curated, read-only source of truth): `/Volumes/HMI-Library/Regulatory documents`
- Extract PDF text with: `pdftotext -layout "<file>" -` (poppler). Fallback: Python `pdfplumber`/`pypdf`. If a PDF has near-zero extractable text (image-only scan — check the manifest's `pages` vs `text_chars_sample`), do NOT OCR-guess; log it to the gaps file and move on.
- Node is available; the repo's generators are `.mjs` scripts run with `node`.
- The repo enforces a **commit mutex** and a **wiki-edit audit write barrier** (see §6). Commits that touch `wiki/**/*.md` are REJECTED unless a matching audit row is staged. This is why prior passes could not commit their pages — §6 tells you how to satisfy it.

## 2. The worklist and what to SKIP (anti-contamination — read twice)
Drive off the pre-built manifest, do not re-derive the file list:
- Worklist: `/Volumes/HMI-Library/Regulatory documents/_MANIFEST.csv` — one row per PDF with `file, sha256, pages, validity, exact_duplicate_of, jurisdiction, authority, instrument_title, date_or_version, product_scope, hmi_category_ids, metals_detected, source_url`. This is your queue.
- SKIP `validity != OK` (and `!= OK_SMALL_OFFICIAL`). The `NOT_PDF` entries in `_INTEGRITY_ISSUES.csv` are broken HTML shells / 0-byte files — never ingest them.
- SKIP every file listed in `_CLEANUP_CANDIDATES.csv` (stale shells, failed downloads).
- De-duplicate within the folder: consult `_EXACT_DUPLICATES.csv`. When a file appears as a `duplicate_file`, ingest ONLY the `canonical` member of its group, once.
- De-duplicate against what is ALREADY ingested (this is also your resume mechanism — a re-run MUST skip finished work):
  1. Compute the PDF's sha256. `grep -rl "<sha256>" wiki/sources/` — if any source page already records that hash, it is ingested. Skip.
  2. Check whether a regulation page for that instrument already exists in `wiki/regulations/`. **If the instrument already has a page, SKIP the whole PDF. Do NOT modify, regenerate, or overwrite an existing page** — a prior pass wrongly edited 12 existing pages; do not repeat that. Skip means skip.
  3. Only if neither exists do you ingest.
- These skip rules are not optional. "The routing/limit row resolved cleanly" proves it is well-formed, NOT that it is true. Never let green validation stand in for a correct transcription.
- ⚠️ The working tree currently contains ~1,000 uncommitted source pages from a SEPARATE parallel workstream (paper ingest). They are not yours. **Never `git add -A` / `git add .`** — you would sweep another session's work into your commit. Stage only the exact files you create (§6).

## 3. Priority order (ingest all, but in this order — standards need food first)
Use the manifest's `hmi_scope_group` / `hmi_category_ids`:
1. P1 — Food contaminant maximum levels. Groups: Food contaminants, Infant/child food, Seafood/fishery, Water. Do the Method-v2.0 credible-regulator set FIRST — EU, Codex, US-FDA, FSANZ (AU-NZ), Health Canada, WHO/JECFA — then all other national food MLs.
2. P2 — Cosmetics / personal care (largest group ~115), toys/children/jewelry, oral care.
3. P3 — Food-contact & packaging, and anything left.
Finish P1 completely before P2, P2 before P3. But finish ALL of them — the run is not done until every priority tier is exhausted.

## 4. What each qualifying PDF produces — FOUR artifacts
Per ingested PDF, in this order:

### 4a. Copy the raw file (provenance)
Copy the PDF into `raw/regulatory/<jur>/<clean-name>.pdf` (reuse existing subfolders: `au-nz br cn codex eu gcc jp kr mx uk us-fda who-jecfa worldwide-primary`; create a lowercase code for new jurisdictions, else use `worldwide-primary`). Compute its sha256. NOTE: `raw/` is gitignored — the bytes are NOT committed; provenance lives in the source-page frontmatter. Do not try to `git add` any PDF. CAUTION: GSO/GCC content is licensed — for those set `license: licensed-do-not-redistribute` and do not redistribute the raw file.

### 4b. `wiki/sources/<cite-key>.md` — provenance + routing layer
`cite-key` = `<agency-or-firstauthor><year>-<short-slug>` (lowercase, hyphenated), and it is the filename. Frontmatter template (fill every field; use `null`/`[]` where genuinely empty):
```yaml
---
type: source
cite_key: <agency><year>-<slug>            # = filename, no .md
title: "<official instrument title, verbatim, original language OK>"
authors: ["<issuing authority, e.g. European Commission>"]
year: <YYYY>
publication: "<official gazette/journal, if known, else null>"
doi: null
no_doi_assigned: true                       # REQUIRED (no-DOI venue) — the commit hook blocks source pages missing this
source_type: government-regulation          # use this exact value
evidence_tier: A                            # government law/guidance = A
license: public-law                         # or: licensed-do-not-redistribute (GSO/GCC)
raw_path: raw/regulatory/<jur>/<clean-name>.pdf
raw_sha256: "<sha256 you computed>"
access_url: "<source_url from manifest, else null>"
metals: [<controlled metal_species actually regulated by this instrument>]
ingredients: []                             # regulatory sources legitimately empty
products: []                                # regulatory sources legitimately empty
matrices: [<broad matrices the instrument covers, e.g. foodstuffs, infant-formula, fish, cosmetics>]
jurisdictions: [<jurisdiction code, e.g. EU, BR, CN, US, AU-NZ, CODEX, IN, KR, GSO>]
near_duplicates: []
updated: <today YYYY-MM-DD>
---
```
Below the frontmatter, write a short (3–8 sentence) plain-prose summary of what the instrument is, its scope, and which metals/matrices it sets limits for. Do NOT reproduce large tables here; the numbers go in the CSV and the regulation page. Keep `matrices`/`metals` BROAD and accurate (say `matrices: [infant-formula]`, not an over-specific soy/non-soy split) — the routing layer fans broad scopes out downstream.
`no_doi_assigned: true` is mandatory — the pre-commit hook rejects any source page with a null `doi` that lacks it.

### 4c. `wiki/regulations/<rule-id>.md` — the reader-facing instrument
`rule-id` = the same slug as the filename. Frontmatter:
```yaml
---
type: regulation
rule_id: <slug>                             # = filename
jurisdiction: <CODE or [CODE,...]>
agency: "<issuing authority>"
program: "<program name if any, else omit>"
metal: [<controlled metal_species>]         # scalar or array
matrix: <matrix or [matrices]>
limit_value: multiple                        # use `multiple` for omnibus tables; a number only for single-limit instruments
limit_unit: "<native unit as the agency states it, e.g. mg/kg; or 'multiple'>"
status: active                               # active | superseded | proposed | draft-guidance
effective_date: <YYYY-MM-DD or YYYY-01-01 if only year known>
sunset_date: null
source_refs: ["[[sources/<cite-key>]]"]
updated: <today>
audience: [regulator, educator, commercial, app, legal]
---
```
Body — exactly these seven `##` sections, in order (enforced):
```
# <Jurisdiction Agency Instrument — short description>

## Scope
## Exact limit and units
## How tested
## Enforcement posture
## History of changes
## How it compares
## Sources
- [[sources/<cite-key>]]
```
Rules for the body:
- "Exact limit and units": never round or paraphrase a regulatory value. Transcribe the agency's numbers and units exactly. A per-commodity table belongs here as a Markdown table (metal | matrix | limit | unit | basis). If the PDF is a framework that points to a companion instrument for the numbers (like ANVISA RDC 722 → IN 160), say so and do not invent numbers.
- Report what the law says, nothing about the certification program. Do NOT mention HMT&C, HMTc-certified brands, or harmonize the values toward any program threshold. No brand rankings (public recalls/enforcement may be named as regulatory events only).
- Do NOT hand-write the `<!-- BEGIN: hmi-page-history -->` / references blocks — auto-generated by prebuild.

### 4d. `data/evidence/regulatory_limits.csv` — the standards lookup table (THE payload)
Append one row per distinct (metal_species × product_scope × value) the instrument sets. Columns, in this exact order (13):
```
regulatory_limit_id,jurisdiction,authority,status,metal_species,value_ug_kg,basis,product_scope,regulation_page,url,notes,basis_class,soy_class
```
- `regulatory_limit_id`: unique snake_case key, pattern `<instr><year>_<metal>_<scope>_<value>` (e.g. `eu2023915_pb_infant_formula_10`, `gso193_2021_cd_cereals_100`).
- `jurisdiction`: code (`EU BR CN US AU-NZ CODEX IN KR GSO MX CA UK TR EC ...`). `authority`: the specific body (`European Commission`, `US-FDA`, `FSANZ`, `ANVISA`, `Codex Alimentarius Commission`, `GSO`, ...).
- `status`: the LEGAL INSTRUMENT TYPE (distinct from the page's lifecycle status): one of `maximum level | final guidance action level | draft guidance; not for implementation | statutory limit | maximum contaminant level | guidance impurity limit | maximum residue level (pesticide)`.
- `metal_species`: controlled vocabulary ONLY — `Pb Cd iAs tAs tHg MeHg Ni Sn Al Cr-VI Cr-total Cr Sb`. Speciation is load-bearing: unspecified "arsenic" → `tAs`; "inorganic arsenic" → `iAs`; unspecified "mercury" → `tHg`; "methylmercury" → `MeHg`; "hexavalent chromium" → `Cr-VI`; "total chromium"/plain "chromium" → `Cr-total`. Never upgrade/downgrade a species the law didn't state.
- `value_ug_kg`: µg/kg (= ppb), NUMBER ONLY, no units. Convert: `mg/kg × 1000`; `ppm × 1000`; `µg/kg × 1`. For water/liquids the agency uses mg/L or µg/L → treat 1 mg/L = 1000 (µg/L ≈ µg/kg); note "µg/L (water)" in `notes`. If a value is a range or "n.d.", log a gap, don't invent a point value.
- `basis`: the agency's own basis wording, preserved (e.g. `product as placed on the market`, `as sold or ready-to-eat`, `dry infant cereal`, `single-strength ready-to-drink`, `as consumed`). Regex-parsed downstream — keep the trigger words.
- `product_scope`: the exact commodity scope from the instrument (semicolon-separate a list).
- `regulation_page`: relative slug `regulations/<rule-id>` (NO `wiki/`, NO `.md`).
- `url`: the agency source URL. `notes`: caveats (nonbinding guidance, superseded-by, method conditions).
- `basis_class`: `as_sold` | `as_consumed` | (blank). `soy_class`: `both` | `soy` | `non-soy` | (blank), non-blank only for infant-formula rows the law splits by formulation.
Quote any field containing a comma with double quotes (standard CSV).

## 5. What you must NOT touch (auto-generated / separate workflows)
- Do NOT edit `wiki/static/regulations.json` or `wiki/regulators/*.md` — regenerated from regulation-page frontmatter by prebuild.
- Do NOT edit `data/evidence/product_source_routing_audit.csv` or any `routing_*.csv` — regenerated from source pages.
- Do NOT edit product-category pages, ingredient `contamination_profile` blocks, or `data/evidence/product_regulatory_crosswalk.csv`. Binding a limit to a locked HMTc product slug is a separate governance pass; getting it wrong corrupts standards. Your job ends at the register + the two pages.
- Do NOT touch the ~1,000 uncommitted source pages from the parallel paper-ingest workstream.

## 6. Commit discipline — commit AS YOU GO, and always before you stop
This is the rule that a prior run got wrong (it did dozens of files, hit no 200-doc boundary, committed nothing, and stopped — stranding ~1,400 rows). The fix:

- **Commit after every ~25 instruments, AND unconditionally before you stop for any reason.** Never let more than ~25 instruments of work sit uncommitted. Never hand control back with ANY uncommitted work. (Frequent small commits are correct; the old "one commit per 200" boundary is abandoned because a single turn never reaches it.)
- **Stage only the files YOU created/modified this batch.** Keep a running list of exact paths and `git add` exactly those. NEVER `git add -A` / `git add .`.
- **Satisfy the wiki-edit audit barrier.** Every commit that stages a `wiki/**/*.md` file must also stage a matching new row in `data/evidence/wiki_edit_audit.jsonl` — one row per page you created — or the pre-commit hook rejects the commit. Append a row per page in this exact shape (generate a fresh UUID per row; `commit_sha` stays the literal string `pending`):
  ```json
  {"edit_id":"<uuid>","page":"wiki/regulations/<rule-id>.md","span_id":"regulatory-ingest-full-page","source_document":"<pdf filename> | <instrument title>","retrieval_date":"<today YYYY-MM-DD>","models_used":["chatgpt-codex/regulatory-bulk-ingest"],"model_agreement_state":"not_applicable","applied_at":"<ISO-8601 timestamp>","commit_sha":"pending"}
  ```
  Write one row for each source page and each regulation page you add, then `git add data/evidence/wiki_edit_audit.jsonl` with the batch. (Do NOT set `WIKI_EDIT_AUDIT_SKIP=1` — that flag is only for hand-authored human edits; your edits are automated and must be recorded.)
- If the pre-commit hook prints "another commit is in progress," wait a few seconds and retry (a parallel session holds the lock briefly). Do not bypass the lock.
- **Do NOT push.** Commit locally only; the maintainer handles push and deploy (manual-deploy repo).
- Commit message per batch:
  ```
  feat(regulatory): ingest <M> instruments — <K> limit rows (<top jurisdictions>)

  <M> regulation pages + <M> source pages; <K> rows appended to regulatory_limits.csv;
  <M> wiki_edit_audit rows. Jurisdictions: <list>. Skipped: <dupes/junk/already-ingested counts>.
  ```
- Append ONE concise entry to `wiki/log.md` roughly every few batches (not per page): `## [YYYY-MM-DD] batch | regulatory-ingest — <counts, jurisdictions, gaps>`.

## 7. Validation (keep the loop fast)
- **Per commit (fast):** confirm every new `value_ug_kg` is a bare number; every `metal_species` is in the controlled vocabulary; no required cell empty; every `regulation_page` slug has a matching file in `wiki/regulations/`; each new page has a `wiki_edit_audit.jsonl` row. Spot-check ~2 new rows against the PDF text.
- **Once, at the very end (full gate):** run `npm run prebuild`. It may report issues from the unrelated parallel work in the tree — **only fix issues in files YOU created; report the rest, do not touch them.** Confirm `data/evidence/routing_malformed.csv` is empty for your source pages.

## 8. Gaps log (instead of guessing)
Append to `data/evidence/regulatory-ingest-gaps.csv` (header `file,jurisdiction,reason,detail,date`) whenever: the PDF is image-only/untextable; a value is a range/conditional you cannot transcribe as a single µg/kg number; the instrument only references a companion document for numbers; the species/basis is genuinely ambiguous; or a manifest row conflicts with the file. A logged gap counts as "handled" — it removes the file from the remaining queue. Commit the gaps file with your batch.

## 9. Completion definition + reconciliation (print this before declaring done)
Done ONLY when: `N_qualifying = (manifest rows with validity OK) − (exact-duplicate members) − (already-ingested before this run)` equals `N_ingested + N_gap_logged`, with `N_remaining = 0`. Before you declare completion, print the arithmetic:
```
Manifest OK: <a>  |  dupes skipped: <b>  |  already-ingested: <c>  |  qualifying: <a-b-c>
Ingested this run: <d>  |  gap-logged: <e>  |  remaining: <(a-b-c) - d - e>
```
`remaining` must be 0. If it is not 0, you are not done — keep going.

## 10. Stop and ask the maintainer (do not autonomously resolve) if:
- The same instrument exists as a regulation page but with a DIFFERENT value than the PDF states (possible existing error or an amendment — flag it, don't overwrite; keep ingesting the rest).
- A file's entire meaning depends on brand attribution (rare for limit tables).
- `npm run prebuild` fails for a reason you can trace to a file YOU created and cannot fix.
These are per-file flags, not run-enders: log the flag, skip that one file, and continue the queue. The run still ends only per the two conditions at the top.

---
**Begin now.** Build the filtered/deduped queue per §2–§3, then ingest and commit-as-you-go per §6 until §9 shows `remaining: 0`. Do not stop before then except to commit + print `RESUME NEEDED`. Keep going.
