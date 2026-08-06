# ChatGPT / Codex handoff prompt — bulk regulatory-document ingest (Heavy Metal Index)

You are a careful data-ingest operator working inside the Heavy Metal Index repository. Your job is to ingest a curated library of government regulatory PDFs (heavy-metal maximum limits) into the repo's structured evidence layer, so the certification standards engine can look them up. Work autonomously, but obey the hard rules exactly — a sloppy pass here silently corrupts the standards, and a previous bulk run had to have 2,200 rows reverted for exactly that reason.

## 0. Why this matters (do not skip)

The Heavy Metal Tested & Certified standard for any (product, analyte) defaults to **the strictest maximum level set by a credible government regulator**, converted to the product's native basis (Method v2.0, "government-limit default"). That lookup reads `data/evidence/regulatory_limits.csv`. Every accurate row you add is a candidate standard. Every fabricated or mis-transcribed row is a defective standard. Accuracy beats volume. When you are not sure of a value, you log a gap — you never guess.

## 1. Environment

- Repo (canonical, work here): `/Users/karenpendergrass/Desktop/heavy-metal-index`
- Source PDFs (curated, read-only source of truth): `/Volumes/HMI-Library/Regulatory documents`
- Extract PDF text with: `pdftotext -layout "<file>" -` (poppler). Fallback: Python `pdfplumber`/`pypdf`. If a PDF has near-zero extractable text (image-only scan — check the manifest's `pages` vs `text_chars_sample`), do NOT OCR-guess; log it to the gaps file and move on.
- Node is available; the repo's generators are `.mjs` scripts run with `node`.

## 2. The worklist and what to SKIP (anti-contamination — read twice)

Drive off the pre-built manifest, do not re-derive the file list:

- **Worklist:** `/Volumes/HMI-Library/Regulatory documents/_MANIFEST.csv` — one row per PDF with `file, sha256, pages, validity, exact_duplicate_of, jurisdiction, authority, instrument_title, date_or_version, product_scope, hmi_category_ids, metals_detected, source_url`. This is your queue.
- **SKIP `validity != OK`** (and `!= OK_SMALL_OFFICIAL`). The 6 `NOT_PDF` entries in `_INTEGRITY_ISSUES.csv` are broken HTML shells / 0-byte files — never ingest them.
- **SKIP every file listed in `_CLEANUP_CANDIDATES.csv`** (stale shells, failed downloads).
- **De-duplicate within the folder:** consult `_EXACT_DUPLICATES.csv`. When a file appears as a `duplicate_file`, ingest ONLY the `canonical` member of its group, once.
- **De-duplicate against what is ALREADY ingested** (this is also how you make the run resumable — a re-run must skip finished work):
  1. Compute the PDF's sha256. `grep -rl "<sha256>" wiki/sources/` — if any source page already records that hash, it is ingested. Skip.
  2. Check whether a regulation page for that instrument already exists in `wiki/regulations/` (e.g. `china-gb-2762-2022-contaminants.md`, `eu-2023-915-*`, `codex-*`, `fda*`, `au-nz-*`, `brazil-anvisa-*` are already present). If the instrument already has a page, SKIP the whole PDF — do not recreate or overwrite it.
  3. Only if neither exists do you ingest.
- These four skip rules are not optional. "The routing/limit row resolved cleanly" proves it is well-formed, NOT that it is true. Never let green validation stand in for a correct transcription.

## 3. Priority order (ingest all, but in this order — standards need food first)

Use the manifest's `hmi_scope_group` / `hmi_category_ids`:

1. **P1 — Food contaminant maximum levels.** Groups: Food contaminants, Infant/child food, Seafood/fishery, Water. Do the Method-v2.0 credible-regulator set FIRST — EU, Codex, US-FDA, FSANZ (AU-NZ), Health Canada, WHO/JECFA — then all other national food MLs (Albania, Algeria, Argentina, Bolivia, Chile, Colombia, EAEU, GSO/Gulf, India, Korea, Taiwan, etc.).
2. **P2 — Cosmetics / personal care** (largest group ~115), toys/children/jewelry, oral care.
3. **P3 — Food-contact & packaging, and anything left.**

## 4. What each qualifying PDF produces — FOUR artifacts

Per ingested PDF, in this order:

### 4a. Copy the raw file (provenance)
Copy the PDF into `raw/regulatory/<jur>/<clean-name>.pdf` (reuse existing subfolders: `au-nz br cn codex eu gcc jp kr mx uk us-fda who-jecfa worldwide-primary`; create a lowercase code for new jurisdictions, else use `worldwide-primary`). Compute its sha256. NOTE: `raw/` is gitignored — the bytes are NOT committed; provenance lives in the source-page frontmatter. Do not try to `git add` any PDF.
CAUTION: GSO/GCC content is licensed — for those set `license: licensed-do-not-redistribute` and do not redistribute the raw file.

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
no_doi_assigned: true
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
Below the frontmatter, write a short (3–8 sentence) plain-prose summary of what the instrument is, its scope, and which metals/matrices it sets limits for. Do NOT reproduce large tables here; the numbers go in the CSV and the regulation page.

`matrices`/`metals` feed the routing layer — keep them BROAD and accurate (say `matrices: [infant-formula]`, not an over-specific soy/non-soy split). Do not over-specify; the routing layer fans broad scopes out downstream.

### 4c. `wiki/regulations/<rule-id>.md` — the reader-facing instrument
`rule-id` = the same slug as the filename (prefer `rule_id` == filename slug). Frontmatter:

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
Body — exactly these seven sections, in order (this is enforced):

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
- **"Exact limit and units": never round or paraphrase a regulatory value.** Transcribe the agency's numbers and units exactly. A per-commodity table belongs here as a Markdown table (metal | matrix | limit | unit | basis). If the PDF is a framework that points to a companion instrument for the numbers (like ANVISA RDC 722 → IN 160), say so and do not invent numbers.
- Report what the law says, nothing about the certification program. Do NOT mention HMT&C, HMTc-certified brands, or harmonize the values toward any program threshold. No brand rankings (public recalls/enforcement may be named as regulatory events only).
- Do NOT hand-write the `<!-- BEGIN: hmi-page-history -->` / references blocks — they are auto-generated by prebuild.

### 4d. `data/evidence/regulatory_limits.csv` — the standards lookup table (THE payload)
Append one row per distinct (metal_species × product_scope × value) the instrument sets. Columns, in this exact order (13):

```
regulatory_limit_id,jurisdiction,authority,status,metal_species,value_ug_kg,basis,product_scope,regulation_page,url,notes,basis_class,soy_class
```
- `regulatory_limit_id`: unique snake_case key, pattern `<instr><year>_<metal>_<scope>_<value>` (e.g. `eu2023915_pb_infant_formula_10`, `gso193_2021_cd_cereals_100`).
- `jurisdiction`: code (`EU BR CN US AU-NZ CODEX IN KR GSO MX CA UK TR EC ...`). `authority`: the specific body (`European Commission`, `US-FDA`, `FSANZ`, `ANVISA`, `Codex Alimentarius Commission`, `GSO`, ...).
- `status`: the LEGAL INSTRUMENT TYPE (distinct from the page's lifecycle status): one of `maximum level | final guidance action level | draft guidance; not for implementation | statutory limit | maximum contaminant level | guidance impurity limit | maximum residue level (pesticide)`.
- `metal_species`: controlled vocabulary ONLY — `Pb Cd iAs tAs tHg MeHg Ni Sn Al Cr-VI Cr-total Cr Sb`. Speciation is load-bearing: unspecified "arsenic" → `tAs`; "inorganic arsenic" → `iAs`; unspecified "mercury" → `tHg`; "methylmercury" → `MeHg`; "hexavalent chromium" → `Cr-VI`; "total chromium"/plain "chromium" → `Cr-total`. Never upgrade/downgrade a species the law didn't state.
- `value_ug_kg`: **µg/kg (= ppb), NUMBER ONLY, no units.** Convert: `mg/kg × 1000`; `ppm × 1000`; `µg/kg × 1`. For water/liquids the agency uses mg/L or µg/L → treat 1 mg/L = 1000 (µg/L ≈ µg/kg); note "µg/L (water)" in `notes`. If a value is a range or "n.d.", log a gap, don't invent a point value.
- `basis`: the agency's own basis wording, preserved (e.g. `product as placed on the market`, `as sold or ready-to-eat`, `dry infant cereal`, `single-strength ready-to-drink`, `as consumed`). This text is regex-parsed downstream — keep the trigger words.
- `product_scope`: the exact commodity scope from the instrument (semicolon-separate a list).
- `regulation_page`: relative slug `regulations/<rule-id>` (NO `wiki/`, NO `.md`).
- `url`: the agency source URL.
- `notes`: caveats (nonbinding guidance, superseded-by, method conditions).
- `basis_class`: normalized enum — `as_sold` | `as_consumed` | (blank). Set it when the basis clearly maps.
- `soy_class`: `both` | `soy` | `non-soy` | (blank). Only non-blank for infant-formula rows where the law splits by formulation.

Quote any field containing a comma with double quotes (standard CSV).

## 5. What you must NOT touch (auto-generated / separate workflows)
- Do NOT edit `wiki/static/regulations.json` or `wiki/regulators/*.md` — regenerated from regulation-page frontmatter by prebuild.
- Do NOT edit `data/evidence/product_source_routing_audit.csv` or any `routing_*.csv` — regenerated from source pages.
- Do NOT edit product-category pages, ingredient `contamination_profile` blocks, or `data/evidence/product_regulatory_crosswalk.csv`. Binding a limit to a locked HMTc product slug is a separate governance pass; getting it wrong corrupts standards. Your job ends at the register + the two pages.

## 6. Commit discipline — batch of 200, explicit staging (this is the key requirement)

- **Process 200 PDFs, THEN commit once.** Not per-file. (If fewer than 200 remain at the end, commit the remainder.)
- **Stage only the files this batch created/modified.** Keep a running list of the exact paths you touch this batch and `git add` exactly those. NEVER `git add -A` / `git add .` (other automated sessions may be committing to `main` concurrently; a blanket add clobbers their work).
- **Do NOT push.** Commit locally only; Karen/Claude handle push and deploy (the index is manual-deploy).
- Before committing a batch, run the validation gate in §7. If it fails, fix, then commit.
- Commit message (conventional-commit subject + count body):
  ```
  feat(regulatory): ingest batch N — <M> instruments, <K> limit rows (<top jurisdictions>)

  <M> new regulation pages + <M> source pages; <K> rows appended to regulatory_limits.csv.
  Jurisdictions: <list>. Skipped: <dupes/junk counts>.
  regulations.json + regulator pages + routing audit regenerate in prebuild.
  ```
- Also append ONE concise entry to `wiki/log.md` per batch (do not list 200 pages — give counts + jurisdictions + a few representative pages):
  ```
  ## [YYYY-MM-DD] batch | regulatory-ingest-batchN — M source pages, M regulation pages, K limit rows
  Pages touched: [[sources/<a>]], [[sources/<b>]], … (representative; full list in commit <hash>)
  Notes: <jurisdictions, priority tier, any gaps logged, dupes/junk skipped>
  ```

## 7. Per-batch validation gate (run before each commit)
1. `npm run prebuild` — regenerates regulations.json + regulator pages + routing audit and runs the audits. It FAILS on malformed regulation frontmatter, a non-empty `data/evidence/routing_malformed.csv`, or a stale routing audit. Fix any failure before committing. (If prebuild is too slow, at minimum run `node tools/build-regulations-dataset.mjs` and the routing audit script, and confirm `data/evidence/routing_malformed.csv` and `routing_unresolved.csv` are empty.)
2. CSV sanity on the rows you added this batch: every `value_ug_kg` is a bare number; every `metal_species` is in the controlled vocabulary; no required cell empty (`regulatory_limit_id, jurisdiction, authority, status, metal_species, value_ug_kg, basis, product_scope, regulation_page`); every `regulation_page` slug has a matching file in `wiki/regulations/`.
3. Spot-check 3 random new rows against the PDF text to confirm the number and species are transcribed correctly.

## 8. Gaps log (instead of guessing)
Create/append `data/evidence/regulatory-ingest-gaps.csv` with header `file,jurisdiction,reason,detail,date`. Log here (and skip the artifact) whenever: the PDF is image-only/untextable; a value is a range/conditional/footnoted in a way you cannot transcribe as a single µg/kg number; the instrument only references a companion document for numbers; the species/basis is genuinely ambiguous; or a manifest row conflicts with the file. A logged gap is a success, not a failure.

## 9. Stop and ask Karen (do not autonomously resolve) if:
- The same instrument exists as a regulation page but with a DIFFERENT value than the PDF states (possible existing error or an amendment — flag it, don't overwrite).
- A file's entire meaning depends on brand attribution (rare for limit tables).
- `npm run prebuild` fails for a reason you cannot trace to your own new files.
- You'd need to touch anything in §5 to make a standard "pick up" a value.

Begin: read `_MANIFEST.csv`, build the filtered/deduped queue per §2–§3, then ingest in batches of 200 with the §6 commit discipline. Report after each batch: count ingested, count skipped (dupe/junk/already-present), count gap-logged, and jurisdictions covered.
