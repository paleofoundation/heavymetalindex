# Library ⇄ Fetch Sync — unified corpus catalogue, wishlist, and cross-build relevance

Status: PHASES 1–2 SHIPPED (2026-07-06). Author: Claude (Opus 4.8), grounded by a
10-agent map+design pass over the actual repo, then hardened by an adversarial
review (sha256 identity spine, journal write-path, allowlist snapshot lint,
reconciled build order — all merged below).

**Shipped 2026-07-06** (commits 28288f5d9, 1af9caa07, fd63e9369):
- Phase 1 — identity index: `tools/library/` {index-db, backfill-identity,
  snapshot} + `npm run library:index|library:snapshot`. 25,440 have-rows /
  11,770 DOIs built in ~46s; committed `index-snapshot.jsonl`.
- Phase 2 — wishlist: `tools/wishlist/` {harvest, score, weights, fulfillment-
  watcher} + `npm run wishlist:harvest|wishlist:score|wishlist:watch`, and a
  Wishlist tab in the Heavy Metal Fetch app (ranked cards, click-to-copy DOI,
  publisher link, mark-have/dismiss; `/api/wishlist*`). 138 open entries; drop-to-
  check-off verified end-to-end.
- Deviations from the plan below: the wishlist harvester also consumes the
  pre-existing gap-driven `wishlist-fetch-audit.csv`; the identity backfill seeds
  from `triage-manifest.csv` (23,260-paper assembled corpus) since drive
  filenames are mostly NOT DOI-slugs and the triage sha256 values don't match
  current drive files; the committed snapshot is `.jsonl` (per-paper diffs).
- NOT yet built: Phase 1 journal/apply-worker + corpus-root watcher (the
  one-shot backfill is single-writer so it's deferred), Phases 3–5 (full-text
  search + auto-tagger, cross-build/coverage/gap-fetch, ReadCube import).

Remaining plan (Phases 3–5) below is unchanged.

---

This is the plan for the system Karen described on 2026-07-06: a wishlist of
papers Fetch couldn't grab, drop-to-check-off fulfillment, automatic
cataloguing/tagging, real full-text search ("every paper mentioning nickel AND
staphylococcus aureus"), starring, and Fetch⇄library sync where one paper
relevant to HMI + MicrobiomeMedicine + WikiBiome is treated as relevant by all
three.

---

## 0. The reframe (the pushback Karen asked for)

The problem is **not** ReadCube or Dropmark. It is that the source of truth
lives *online* and is maintained *by hand*. No online tool fixes that — you
can't call it programmatically and it can't auto-tag. So the answer is not
"integrate ReadCube." It is:

> **One local index becomes the source of truth, and every tool — Fetch, all
> three builds, search, wishlist — reads and writes that one index. ReadCube and
> Dropmark become one-time imports (folding in years of manual tags + stars as
> seed data), not systems we keep syncing with.**

The cheap part: **the seed of that index already exists.** Fetch's corpus dedup
already runs off `data/evidence/discovery/corpus-index.json` (keyed by DOI +
normalized title). We are not bolting on a new database — we are *promoting the
dedup index into a catalogue* by adding extracted text, tags, star, status
(have/wishlist/failed), and build-membership. **The search Karen misses and the
dedup Fetch already does are the same index.**

---

## 1. What already exists (so we reuse, not rebuild)

Verified by the map pass. This is why the build is mostly wiring, not greenfield.

| Capability | Where it lives today | Reuse |
|---|---|---|
| Non-OA / paywalled / failed candidates **already logged** with DOI+title+oa_url | `data/evidence/fetch-app/*.csv`, central-library `_manifest.csv` (`decision` = `skip:no-oa-url` / `fail:http-403` / …) | Wishlist is a **harvest** over these rows, not new capture |
| Corpus dedup by DOI-else-normalized-title | `corpus-index.json` + 5 staging roots via `tools/fetch-app/lib/dedup.mjs` | Same key everywhere → one paper = one row |
| Drop-and-file intake: pdftotext → DOI/title → dedup → keyword build/topic classify | `tools/library/sort-inbox.mjs` | Extend its post-classify step to also index + tag |
| Drive guard (fail-closed when unplugged) | `tools/lib/library-root.mjs` (`libraryRoot()`, `isLibraryDriveMounted()`) | DB + text dumps + inbox all sit behind it |
| Metals vocabulary | `tools/fetch-app/lib/taxonomy.mjs` METALS + `score.mjs` LONG_FORM_METAL_NAMES | Auto-tagger's metals list |
| Matrices/products vocabulary | 258 `wiki/ingredients/*.md` + 415 `wiki/products/*.md` slugs | Auto-tagger's matrix/product list |
| Machine-readable gap signals | `ingredient-completeness-gaps.csv` (1,667), `ingredient-synthesis-backlog.csv` (282+ available-but-unsynthesized), `routing_unresolved.csv`, `consumption-tiers.csv` | Drive gap→query compilation + wishlist pool-impact ranking |
| chokidar watcher pattern | `tools/watch-sources.mjs` (debounce + non-fatal child spawn) | Fulfillment watcher copies it |

Three gaps the map found that shape the plan:
- **No full-text search, no tag DB** today. Only a 32 MB static wiki-page `contentIndex.json`. The "nickel AND staph aureus" query is genuinely not possible now.
- **No `builds:` frontmatter field.** Multi-build relevance is only mocked in the central-library UI. It has to become real data.
- **`ingest-manual-fetch-batch.mjs` is hard-clamped to concurrency=1** (parallel workers race on `.git/index.lock`). Any new writer must respect single-writer discipline.

---

## 2. Subsystem 1 — Canonical library index + auto-tagger + search

**One row per paper** in a SQLite + FTS5 database on the drive
(`/Volumes/HMI-Library/library-index.sqlite`), wrapped by a small `tools/library/`
module set.

**Why SQLite+FTS5, not JSONL:** the whole point is instant boolean full-text
find over 23k papers' extracted text. FTS5 gives `MATCH 'nickel AND
"staphylococcus aureus"'` natively (porter tokenizer, BM25 ranking, phrase/NEAR
operators). JSONL forces a linear grep of ~1 GB of text per query — the exact
slow path we're escaping. The extracted text (23k × ~40 KB ≈ 1 GB) belongs in a
content table on the drive, **never** in git.

**The record (mirrors + extends `corpus-index` / source-page frontmatter so it
dedupes 1:1 against the existing 23k):**
`cite_key`, `doi` (normalized), `normalized_title`, `title`, `authors[]`, `year`,
`journal`, `abstract`, `extracted_text_path`, `sha256`, `tags` (JSON:
`metals[] taxa[] conditions[] matrices[] products[]`), `builds[]`
(`hmi|mmed|wikibiome`), `star`, `status` (`have|wishlist|failed`),
`acquisition_source`, `manual_tags` (Karen's imported tags, kept separate),
`ingested`, `tagger_confidence`. Companion FTS5 virtual table
`papers_fts(title, abstract, fulltext)`.

**Auto-tagger** (`tools/library/auto-tag.mjs`): deterministic controlled-vocab
whole-word/phrase matching over the first ~10 pages of pdftotext text (reuse
`score.mjs` word-boundary regex + NEGATIVE_KEYWORDS to demote reference-list
false positives). LLM escalation *only* for genuinely ambiguous papers (zero
metal hits but clearly in-corpus; unlisted synonym; ambiguous build routing) —
the LLM must pick from the vocab, never invent slugs. Deterministic path handles
the vast majority, keeping cost near zero at 23k scale.

**Search** (`tools/library/find.mjs` → `npm run library:find`):
`library find 'nickel AND "staphylococcus aureus"' [--star --build hmi --status have --metal nickel --year 2018..2024]`.
Plus a read-only **Library tab** in the Heavy Metal Fetch app (`/api/library/*`
routes on the existing server, results linking to the wiki source page when
ingested).

**Defensibility without committing a binary DB:** a deterministic, sorted JSON
**snapshot** of the *metadata columns only* (not fulltext) is committed to
`data/evidence/library/index-snapshot.json`. Small, diffable, git-per-date. The
SQLite DB + text dumps stay gitignored and drive-only — the DB is a *rebuildable
cache* (`rebuild-from-snapshot.mjs` reconstructs it), so losing the drive loses
only the FTS index, never the canonical record.

**Backfill** (`tools/library/backfill.mjs`, one-shot, resumable by sha): seed
from `corpus-index.json` + `triage-manifest.csv` (the authoritative 23,260-row
scale), then walk `raw/`, compute sha256, pdftotext + auto-tag, upsert. Also
folds the fetch-app/central-library audit CSVs' failed rows in as
`status=wishlist|failed`.

### 2a. Four architecture invariants (from adversarial review — these are correctness/scaling fixes, not polish)

1. **sha256 is the authoritative identity; DOI/title/citekey are secondary
   lookups.** One physical PDF = one row, keyed by the sha256 of its bytes.
   `(normalizeDoi, normalizeTitle, readcube_citekey)` are secondary indices that
   all resolve to that row. Rationale: DOI-else-title has real false-negatives —
   arXiv-vs-published DOI pairs, DOI-less preprints, publisher DOI variants,
   ReadCube import dupes — each defeats one leg of that key and produces two rows
   for one paper, which then corrupts the wishlist ("re-fetch what you own") and
   the coverage ledger (double-counted `have`). A nightly
   `library:reconcile-identities` clusters rows sharing any secondary key and
   flags multi-sha256 clusters (true dupes) vs multi-key-single-sha256 (benign
   alias) for one-click merge.

2. **Writes go to a per-session journal, never to the DB directly.** Sessions
   append to `library-journal/<session-id>.ndjson` on the drive (append-only,
   lock-free, crash-safe). A single serialized `library:apply-journal` worker
   folds journals into the SQLite DB, regenerates the snapshot, and does **one**
   batched git commit. This removes DB writes from the hot path and confines git
   commits to one owner — dissolving the `concurrency=1` / `.git/index.lock` race
   that already caps ingest, instead of recreating it one layer down. The DB is a
   rebuildable cache: droppable and replayable from journals + snapshot anytime.

3. **A single chokidar watcher on the corpus roots is the *only* thing that
   writes `have` rows.** Watching the 5 staging roots + `raw/` + HMI-Library
   means index freshness is a property of the filesystem, not of every tool
   remembering to update the index. `sort-inbox`, the daemon, and manual drops
   all feed the index for free because the watcher sees the file land regardless
   of who put it there. A nightly `library:audit-staleness` compares on-disk PDF
   count to snapshot rows and triggers a re-walk on divergence.

4. **Auto tags and human tags are separate columns.** `tags_auto[]` (machine,
   freely overwritten) vs `tags_manual[]` + `star_manual` (human/import, **never**
   written by the tagger). Karen's imported ReadCube stars are the
   highest-value, least-reproducible signal in the system; the tagger augments
   (`tags_auto`) but can never clobber her judgment. The UI/search union them.

---

## 3. Subsystem 2 — Wishlist + fulfillment + relevance (the "CRITICAL" part)

A closed **WANT → FETCH-YOURSELF → HAVE** loop. Core insight: the fetch pipeline
already records every non-downloadable candidate — the wishlist is a
harvest+dedup+rank, not new capture.

**Wishlist store** (`data/evidence/wishlist/wishlist.jsonl`, append-only for
git-per-date; derived `wishlist.csv` for the UI). `harvest-wishlist.mjs` scans
every fetch audit for rows where no PDF was obtained but a DOI/title exists, and
upserts keyed by `normalizeDoi(doi) || normalizeTitle(title)` — the same key as
`corpus-index.json`, so an entry that later gets ingested is auto-detected. Each
entry carries `builds[]`, `surfacing[]` (every query/preset-group/run that hit
it), `first_seen/last_seen/times_seen`, `status`, `starred`, `fulfilled_via`,
`cite_key`. Anything already in-corpus or staging is **born `have`** and never
shown as "to fetch."

**Relevance formula** (deterministic, no LLM, `score-wishlist.mjs` + git-visible
`weights.json`):
`query_match` (reuse `scoreCandidate`) `+ log10(citations+1)` (OpenAlex
`cited_by_count`) `+ recency` `+ review_bonus` `+ build_fit` `+ demand`
(× distinct builds wanting it) `+ pool_impact` (join DOI→topic to
`ingredient-synthesis-backlog.csv`/`ingredient-completeness-gaps.csv`: a paper
that would unblock a *starved* cell gets a large boost). `pool_impact` is the
"rank by cells-unblocked" tool the autonomy backlog specced but never built.

**Wishlist UI tab** (in the Heavy Metal Fetch app): relevance-ordered cards, a
prominent monospace **click-to-copy DOI**, a **publisher ↗** link (open it and
fetch it yourself), filters by build / topic / starred / pool-impact, ★ pins for
auto-starred top-N per topic, and a manual **mark-as-have** button.

**Fulfillment watcher** (`fulfillment-watcher.mjs`, chokidar on the HMI-Library
`_inbox` **and** a Desktop dropbox `~/Desktop/HMI Wishlist Dropbox/`): a dropped
PDF → reuse `sort-inbox` extract DOI/title → **DOI-exact match auto-checks off**;
**title-only fuzzy match → `have-pending-confirm`** (a one-click UI confirm/reject
showing both titles side by side — never silently wrong); **no match → normal
intake** (still a valid novel paper). On a match, the PDF flows into the existing
`sort-inbox` `_sorted/<build>/<topic>/` path so it's auto-tagged + ingested, and
the cite_key is written back onto the wishlist entry.

---

## 4. Subsystem 3 — Cross-build fan-out + coverage ledger + gap-driven fetch

**One paper, one PDF, three task queues.** The PDF is already shared (one drive,
one `corpus-index.json`). What's missing is a per-source `builds:` field.
Add it, written **once at ingest by the classifier that already runs**:

```yaml
builds:
  - {build: hmi,       relevance: direct_evidence,   status: ingested}
  - {build: mmed,      relevance: mechanism_context, status: pending}
  - {build: wikibiome, relevance: primary,           status: handoff}
```

- **hmi** fan-out: the existing routing layer (Part 5b) already reads this frontmatter — no change.
- **mmed** fan-out: a row in `data/evidence/mmed-source-queue.csv` (`cite_key, doi, relevance, taxon`) — references the shared corpus by cite_key, never re-downloads. (MMed has no corpus of its own.)
- **wikibiome** fan-out: `wikibiome-handoff.csv`, a durable queue that survives until the WikiBiome repo exists on disk, so no microbiome-primary paper is lost.

**Coverage ledger** (`data/evidence/coverage/coverage-ledger.csv`, keyed
`build × topic × preset_group`): a pure aggregation of the audit rows the
fetchers already write — `found_total, have, wishlist, last_swept,
saturation_est` (novelty ratio = new/found of the last sweep),
`priority_score` (joins the cell to the gap registers: under-covered **and**
high-tier gap = top), `next_action ∈ {fetch, skip, synthesize, hold}`. Rendered
as a **Coverage tab** sorted by priority — the "fetch this next" worklist that
replaces guessing.

**Gap-driven fetching** (`gap-to-queries.mjs`): compiles the existing gap CSVs
into fetch jobs in the fetchers' existing job shape, with two hard gates:
- **D8 provenance failure → `hold`, never fetch** (fetching can't fix an orphan citation).
- **backlog says evidence already exists → `synthesize`, not fetch** (the single biggest waste-avoider: 282+ papers are already *had* but unsynthesized).

---

## 5. The preset-efficiency answer (Karen's direct question)

**Is 74-queries-per-condition the most efficient model? No** — it's a good
**cold-start** and a bad **steady-state**. `run-condition` applies no cross-run
memory, so a fully-swept condition still pays 74 query round-trips to download
~0 new PDFs, and it carries near-duplicate queries ("Probiotics [Condition]" in
*Diet* vs "Probiotics [Condition] treatment" in *Interventions*).

Fix — a **saturating, deduped, delta-only** sweep (est. **55–70% fewer fetch
calls** at steady state):

1. **Dedup the query set** once, statically: collapse broader-subsumes-narrower stems (~8–14 of 74 prunable with near-zero recall loss). Keep group names as *tags* on survivors.
2. **Cross-condition dedup** is already free (shared corpus) — just surface it in the ledger so a new condition starts at, say, 40% "have" because sibling conditions already pulled the reviews/metagenomics papers.
3. **Delta-only re-sweep** (the big one): before dispatch, drop `(condition, group)` cells that are saturated (`saturation_est ≥ 0.85`) or swept within N days. A mature condition drops from 74 queries to the 1–3 groups still finding novel material.
4. **Saturation stop rule:** mark a cell saturated when `new/found < 0.10` across two consecutive sweeps **and** `found_total ≥ 20`; skip until reset or a new query is added.

Net: keep the 74-query preset as the **cold-start template** (broad recall matters
when have=0); drive every subsequent run off the ledger. The preset becomes a
self-pruning queue whose cost falls as coverage rises.

---

## 6. Firewall + defensibility (non-negotiable)

- The library DB, wishlist, tags, and coverage ledger are **operational staff
  tools on localhost.** They store bibliographic metadata (DOI/title/tags/scores)
  only — **never** brand-level values (Part 12) or threshold/percentile math
  (Parts 2/19). None of them render to heavymetalindex.com. The Library/Wishlist
  tabs are localhost-only staff routes, never emitted into the static site.
- **Allowlist serializer + build-blocking lint.** The auto-tagger reads full PDF
  text, where brand names and threshold numbers appear. So the committed
  `index-snapshot.json` is produced by an **allowlist** serializer that emits only
  `{sha256, cite_key, doi, normalized_title, builds[], star, status,
  controlled_vocab_tags}` and drops any free text, brand token (reuse the Part-12
  brand denylist), or numeric-with-unit token. A new build-blocking lint (joins
  the existing firewall lint family) **fails the build** if the snapshot contains
  a denylisted brand token or a `\d+\s*(ppb|µg/kg|ppm)` pattern.
- **The snapshot, not the binary DB, is the defensibility source of truth.**
  `index-snapshot.json` is deterministically serialized (stable key order, rows
  sorted by sha256, LF, no per-row timestamps) so diffs are semantic. A pre-commit
  hook rebuilds it from the DB and **aborts if the working-tree snapshot differs**
  from the regenerated one (same pattern as the Part-5b routing-audit hook) — drift
  becomes impossible to commit. Reconstructing corpus-state-on-date-D is
  `git show D:data/evidence/library/index-snapshot.json`. No binary in the
  defensibility path; the SQLite DB + 1 GB of text stay gitignored/drive-only.
- **Mount-guard sentinel.** Every library tool stats
  `/Volumes/HMI-Library/.hmi-library-marker` (a sentinel with a known UUID) and
  hard-exits if absent — it never falls back to a local path (which would fork the
  index). Read-only queries (search, coverage, wishlist order) degrade gracefully
  to snapshot-served mode when the drive is down; only tagging/fetching/fulfillment
  (which need the PDFs) block.

---

## 7. Build order (reconciled with the adversarial review)

The one non-obvious sequencing catch: the wishlist is only *correct* if it
dedups against an authoritative have-set, and `corpus-index.json` tracks only
~6 k of the ~12 k PDFs actually on the drive. So a wishlist built first would tell
Karen to "go fetch" papers she already owns but hasn't ingested. The fix is not
to build the *whole* index first (the full-text extraction of 12 k PDFs is the
slow part) — it's to split the index into a **fast identity pass** (cheap: sha256
+ DOI + page-1 title, no full-text) that the wishlist needs, and a **slow
full-text pass** (FTS + tagging) that only search needs. Identity first, wishlist
second, full-text third.

**Phase 1 — Identity index + write plumbing (the authoritative have-set).**
1. `index-db.mjs` schema (sha256 spine) + `backfill-identity.mjs`: hash every PDF on the drive + fold in `corpus-index.json`/`triage-manifest.csv`/staging → the one true "what I own" set. Emit the committed `index-snapshot.json` (immediate defensibility win). Fast; no full-text yet.
2. Journal + `apply-journal.mjs` single-writer worker + corpus-root chokidar watcher (freshness becomes a filesystem property). Mount-guard sentinel.

**Phase 2 — Wishlist (the "CRITICAL" deliverable, now correct).**
3. `harvest-wishlist.mjs` → `wishlist.jsonl`, deduped against the Phase-1 have-set (born-have = never re-listed).
4. `score-wishlist.mjs` + git-visible `weights.json` (with D8-hold / backlog-synthesize gates hard-wired as pre-filters).
5. Wishlist tab: relevance-ordered, click-to-copy DOI, publisher↗, filters. Machine priority shown as `relevance_rank`; ★ stays human-only (`star_manual`) for v1.
6. `fulfillment-watcher.mjs`: DOI/sha256-exact → auto-check-off; title-fuzzy → mandatory `have-pending-confirm` UI gate; no-match → normal intake. All writes journaled (reversible).

**Phase 3 — Full-text search + deterministic tagger (the headline capability).**
7. `backfill-fulltext.mjs`: the slow, resumable, background pdftotext + FTS5 population of the 12 k drive PDFs.
8. `auto-tag.mjs` deterministic controlled-vocab only for v1 (`tags_auto`); LLM path deferred (see cut list).
9. `find.mjs` CLI → "nickel AND staph aureus" works from the shell. Library UI tab deferred until the CLI proves the schema.

**Phase 4 — Cross-build + efficiency.**
10. `builds:` frontmatter (written by the existing classifier) + `mmed-source-queue.csv` (keep) / `wikibiome-handoff.csv` (CSV stub only).
11. `coverage-ledger.mjs` + Coverage tab; `gap-to-queries.mjs`.
12. Preset dedup + delta-only + saturation-stop in `run-condition`.

**Phase 5 — Imports (gated on a field check first).**
13. `import-readcube.mjs`: one dated `raw/readcube-sync/<date>.json` snapshot import → `tags_manual`/`star_manual`; verify the sync API actually exposes stars on one small pull before trusting it. Dropmark deferred.

**Cut from v1** (defer, per the review): the polished Library UI tab (CLI first);
the LLM tagging path (deterministic only until we measure how many rows are
low-confidence); live/nightly ReadCube sync (one dated seed snapshot instead);
Dropmark import; WikiBiome live federation (handoff CSV is enough — the repo
doesn't exist yet); auto-star (machine priority is `relevance_rank`, not a star).

---

## 8. Things you hadn't thought of (but should have)

1. **Reverse-fill from citations you already make.** Scan `wiki/sources/` + wiki
   pages for DOIs you *cite* but don't *have* in the corpus, and auto-add them to
   the wishlist. You are already asserting these papers support claims; the system
   should notice and want them. This turns your own bibliography into a
   prioritized acquisition list.

2. **Cite-key at wish-time, not ingest-time.** Mint the `cite_key` when a paper
   enters the wishlist. A wiki page can then cite a paper you're *still acquiring*
   with a `pending_acquisition` marker, and the fulfillment watcher auto-resolves
   it to a live citation the moment you drop the PDF. Closes the gap between "I
   know this paper backs this claim" and "I have the PDF."

3. **The nightly snapshot diff IS a database-rights audit trail.** A committed,
   timestamped, deterministic record of exactly what was in the corpus on each
   date is precisely the evidence the EU database-rights / litigation posture
   (Part 1) needs. A maintenance artifact doubles as a legal asset — "here is our
   dated, reconstructible corpus state" is a Daubert-grade answer.

4. **The unified DOI-keyed index is the cross-build cite-key reconciler.** The map
   found MMed/WikiBiome use *different* cite-key conventions — a latent
   duplication bug. One DOI-keyed canonical record with three build-local
   cite-keys mapped to it prevents that drift structurally, and makes "is this
   paper already somewhere in our world?" a single lookup.

5. **Tag co-occurrence is a discovery engine, not just search.** Once tagged,
   "nickel co-occurs with *S. aureus* in N papers" is a *lead generator* for MMed
   taxon pages and HMI mechanism sections — cross-domain connections neither build
   would surface alone. Your own example, generalized into a standing report.

6. **Fetch precision recovered downstream.** The permissive research pull
   deliberately trades precision for recall (the 2026-07-06 sweep pulled a paper on
   "educating a foetus"). The auto-tagger is the precision layer: a paper that tags
   to zero metals **and** zero matrix scores ~nil and is **quarantined**, not
   filed. Recall stays high at fetch; the index keeps the corpus clean.

7. **The synthesis backlog is the real bottleneck, and the index makes it a
   one-click queue.** The biggest waste isn't missing PDFs — it's 282+ papers you
   *have* but haven't synthesized (fish tHg: 70 available, 20 used). The unified
   index surfaces "have-but-unsynthesized per cell," so the single
   highest-ROI automation is a **synthesis queue**, not more fetching. Fetch less,
   synthesize what's already on the drive.

8. **The sha256 spine is a free corpus-integrity monitor.** A single external
   drive is the source-of-record for three builds and has *no* bit-rot detection
   today. A nightly re-hash pass comparing on-disk sha256 to the snapshot's
   recorded sha256 catches silently corrupted PDFs — bad sectors, truncated
   downloads, iCloud-evicted stubs — before they poison a build. Cheap insurance
   on the one physical thing everything depends on.

9. **The index quantifies "one corpus, many builds."** Because it knows which
   physical PDF backs which cite-key across all three builds, it exposes the true
   cross-build reuse ratio — how many of the 23 k papers serve HMI vs MMed vs
   WikiBiome. That number is a strategic asset (it substantiates the efficiency
   claim to investors/partners) *and* it powers a **fetch-once-serve-twice**
   ranking in the coverage ledger: a marginal fetch that buys coverage in two
   builds outranks one that helps only one.

10. **A ranked "worth paying for" buy list.** Join the wishlist to the gap CSVs to
    auto-detect *orphaned demand*: cells multiple builds want, that have
    non-downloadable candidates sitting in the fetch audit, that no current preset
    even targets. These are papers the system already knows it needs, already knows
    it can't get free, and isn't even trying to acquire — the exact short, ranked
    set worth a manual interlibrary-loan or purchase decision. Turns diffuse
    paywall friction into a small prioritized buy list.

11. **Full-text search doubles as a routing-completeness auditor.** The current
    routing layer reads frontmatter only, so it's blind to a source whose *text*
    discusses a product/ingredient its frontmatter never declared. Once FTS exists,
    search the corpus text for a metal+matrix pair and diff the hits against
    `product_source_routing_audit.csv` to surface under-routed sources — the
    "ingested but not fanned out" failure Part 5b exists to prevent, caught by
    content rather than by frontmatter.

---

## 9. Open decisions for Karen

Resolved by the review (noted so they're not re-litigated): stars stay
human-only (`star_manual`); machine priority is surfaced as `relevance_rank`, not
an auto-star. ReadCube is a one-time dated seed snapshot, not a live sync. The
Library UI tab and LLM tagging are cut from v1.

Genuine calls left for you:
1. **Desktop dropbox path** for drop-to-check-off — default `~/Desktop/HMI Wishlist Dropbox/`, or elsewhere?
2. **Zero-metal-zero-matrix papers** (the junk the permissive fetch pulls) — auto-quarantine to a reviewable folder (recommended), or just flag in place?
3. **Start now?** This is a 5-phase build. Recommended first move is Phase 1 (identity index + snapshot) → Phase 2 (the wishlist you called critical). That's a self-contained slice that delivers the wishlist without waiting on the slow full-text backfill. Say go and I start on Phase 1.
