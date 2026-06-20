# Codex / GPT-5.5 task brief — ingest `incoming-2026-06-20`

**Paste this whole file as the task to ChatGPT 5.5 in Codex. It works in the repo `~/Desktop/heavy-metal-index` (canonical; never relocate).**

## Goal

Ingest the ~135 newly-staged heavy-metal research PDFs in
`raw/Manual Resourcing/incoming-2026-06-20/` into proper `wiki/sources/<cite-key>.md`
source pages, one PDF at a time, to current HMI design. The routing layer fans each
source out to its product/ingredient/metal/regulation pages automatically from the
frontmatter you write — you do **not** hand-route. This is a bounded, supervised
drain: process in batches, commit per batch, **no daemon, no background loop, no
self-spawning.** (The autonomous Claude daemon is permanently disabled after a cost
runaway; do not recreate that pattern.)

## Authoritative design references (read these first — they are the canonical "design")

- `.claude/skills/ingest-next-manual-fetch-pdf/SKILL.md` — the per-PDF cycle you are
  executing (ingest → routing audit → commit; the audit subagent step is optional for
  you, see below). Follow its Phase 1 ingest steps and its **Stop conditions**.
- `docs/gpt-collaboration/verification-checklist.md` and `docs/gpt-collaboration/audit-prompt.md`
  — the firewall rules and the five audit checks. Self-audit each page against these.
- `docs/page-templates.md` — source-page YAML schema + mandatory sections (Part 6).
- `docs/conventions.md` — units, cite-keys, metal vocabulary, evidence grading.
- `CLAUDE.md` Parts 2, 5, 5b, 12, 13, 14 — wiki/HMTc firewall, source handling, routing,
  brand firewall, evidence tiers, conventions.
- **Gold-standard worked examples authored 2026-06-18** (match these exactly for
  soil/mechanism/remediation papers — they are the current house style):
  `wiki/sources/chen2020-biochar-straw-cadmium-bioavailability.md`,
  `wiki/sources/antenozio2021-pteris-vittata-arsenic-rhizosphere.md`,
  `wiki/sources/tantri2026-cadmium-agricultural-soil-indonesia.md`,
  `wiki/sources/guerrasierra2021-phytoremediation-tropical-soils-review.md`.

## THREE things that changed this session — a fresh session will not know these

1. **Scope was widened (2026-06-18). Remediation / phytoremediation / soil-to-plant
   transfer / atmospheric deposition / exposure assessment / microbiome / systematic
   reviews are now explicitly IN SCOPE.** The single source of truth is
   `tools/scope/scope-manifest.json` (in_scope / out_of_scope / ambiguous). **Use it as
   your scope gate.** This batch is heavy with soil-contamination, phytoremediation,
   bioremediation, aluminum-tox, cannabis-metals, and microbiome papers — those are
   IN scope. What is OUT (skip, do not ingest): pure water/effluent-treatment and
   materials engineering where food is only an adsorbent or the metal is an
   engineering input — e.g. `Industrial-Wastewater-Treatment.pdf`,
   `Pressure-leaching-of-aluminum-from-kaolin-by-HCl…`,
   `Removal-of-heavy-metal-ions-in-wastewater-by…aluminum-carbide…`,
   `Application-of-geopolymers-for-treatment-of-industrial-solid-waste…`. When unsure,
   check the manifest; log borderline skips in your batch report rather than silently
   dropping.

2. **The pre-commit hook now REQUIRES a wiki-edit-audit row per source page**, or the
   commit aborts. For every `wiki/sources/*.md` you create, append one line to
   `data/evidence/wiki_edit_audit.jsonl` and stage it with the page. Schema (all string
   fields non-empty):
   ```json
   {"edit_id":"ingest-<cite-key>-2026-06-20","page":"wiki/sources/<cite-key>.md","span_id":"full_page","source_document":"<cite-key> | https://doi.org/<doi>","retrieval_date":"2026-06-20","models_used":["openai/gpt-5.5-codex"],"model_agreement_state":"single_model","applied_at":"2026-06-20T12:00:00.000Z","commit_sha":"pending"}
   ```
   (Do NOT use the `WIKI_EDIT_AUDIT_SKIP=1` bypass — that is for human-authored edits;
   yours are model-authored and must be recorded.)

3. **Routing audit command is `npm run evidence:source-routes`** (or
   `node tools/evidence/build-routing-audit.mjs`). The pre-commit hook runs it
   automatically; run it yourself before committing to confirm the source lands clean.

## Per-PDF procedure

For each PDF in `raw/Manual Resourcing/incoming-2026-06-20/`:

1. **Dedup first (critical — the corpus has ~1990 sources and origin just added ~55
   recovery ingests).** Rebuild and check the corpus index:
   `node tools/discovery/build-corpus-index.mjs`, then match the PDF's DOI (primary),
   normalized title (secondary), and minted cite-key (tertiary) against
   `data/evidence/discovery/corpus-index.json`. If it already exists, skip and log it.
   Many filenames here (e.g. `chen2020.pdf`, `singh2019.pdf`, `khan2013.pdf`) collide
   with common author-years already in the corpus — verify by DOI/title, not filename.

2. **Scope-gate** against `tools/scope/scope-manifest.json` (see point 1 above). Skip
   out-of-scope; log the reason.

3. **Read the PDF in full** — abstract, methods, ALL results/tables, discussion,
   references. Exact figures are mandatory for "Key numbers".

4. **Mint an honest cite-key**: `<firstauthor-surname><year>-<3-5 word descriptive
   slug>`, lowercase-hyphenated. Never a junk first word. If `tools/lib/cite-key-validity.mjs`
   exists, validate against it.

5. **Write `wiki/sources/<cite-key>.md`** using the Part 6 template. Frontmatter is the
   routing input — fill `metals`, `ingredients`, `products`, `matrices`, `jurisdictions`
   accurately, slugs from current taxonomy only. **Context-only papers** (soil,
   remediation, uptake-mechanism, tox-mechanism, microbiome — most of this batch) carry
   `ingredients: []` and `products: []` and route via metal/supply-chain/mitigation
   wikilinks — copy the `chen2020`/`antenozio2021`/`tantri2026` pattern exactly,
   including the `## Implications` (Certification/Courses/App/Microbiome), `## Wiki pages
   this source may touch`, and `## Verification notes` sections, and the Part 2
   direction-of-edit check line. **Food-occurrence papers** (a measured metal
   concentration in a retail/edible food) fill `ingredients`/`products` normally.

6. **Firewall (Part 12):** never create brand pages or brand-by-brand tables; summarize
   brand findings at the category level and drop brand names. Never mention HMT&C-certified
   brands.

7. **Conventions (Part 14):** units in ppb (µg/kg) with wet/dry specified; preserve the
   iAs/tAs and MeHg/tHg speciation distinctions; pick evidence tier by study design
   (A replicated/systematic-review, B single field/controlled study, C lead/mechanism/
   perspective), not by journal prestige.

8. **Append the wiki-edit-audit row** (point 2 above).

9. **Run `npm run evidence:source-routes`**; confirm exit 0 and the source is in neither
   `routing_unresolved.csv` nor `routing_malformed.csv`.

10. (Optional, recommended for high-stakes pages) self-audit against
    `docs/gpt-collaboration/audit-prompt.md`'s five checks before committing.

## Commit & push discipline

- **Stage by explicit filename only** (`git add wiki/sources/<cite-key>.md data/evidence/wiki_edit_audit.jsonl`).
  A parallel Claude/Codex committer may be live on the shared index; never `git add -A`,
  never `git add .` — that sweeps another committer's staged work. (See HMI memory
  "FRANK/Codex shared-index commit race".)
- **Commit per batch of ~5–10 PDFs** (or per-PDF if you prefer), message form:
  ```
  ingest: <cite-keys…> [fresh] from Manual Resourcing/incoming-2026-06-20

  <one line per source: what it measures / mechanism>

  Routing: <N> rows generated.
  ```
- **Push each batch to origin with `git push --ff-only`** (retry with `git pull --rebase`
  then push if rejected — origin is the deployed canonical and gets concurrent pushes).
  Do NOT force-push. Do NOT history-surgery a commit while another committer is live.
- Write a final batch report at
  `wiki/batch-reports/incoming-2026-06-20-<YYYY-MM-DD>.md`: counts ingested / skipped-dedup
  / skipped-out-of-scope / stopped, with the borderline-scope calls listed for Karen.

## Stop conditions (from the skill)

Stop and write a stop-report when: a new regulation slug is needed (don't guess agency
IDs); a true duplicate conflict (DOI hit but different paper); the routing audit fails;
a paper-internal data-integrity issue beyond the obvious mirroring pattern; or the folder
is exhausted. Provisional product/ingredient scaffolds for declared-but-missing slugs are
auto-created (`tools/autonomy/create-provisional-*-scaffold.mjs`) and are NOT a stop.

## Do NOT

- Run Part 9 synthesis, edit `wiki/products/*`, `wiki/ingredients/*`, or generator
  `<!-- BEGIN -->/<!-- END -->` blocks, or hand-edit `product_source_routing_audit.csv`.
- Start any background loop, watcher, or daemon. This is a foreground, batch-bounded drain.
- Touch the GEMS CSVs in `raw/reports/gemsfood-contaminants/` — that dataset is handled by
  a separate pipeline (`tools/evidence/ingest-gems.mjs`) and is gated downstream.
