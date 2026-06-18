---
name: discover
description: Multi-database literature discovery for Heavy Metal Index. Searches 10 academic databases via the paper-lookup skill, dedupes against the existing corpus, scores candidates for HMI fit, auto-fetches the qualifying open-access PDFs into raw/Manual Fetch Discovery/, and emits an audit log. The daemon's manual-fetch-batch ingester picks them up on its next tick. Use when Karen runs `/discover topic="..."` or `/discover gap=<cell-id>`. Distinct from tools/wishlist/ (daemon-fired, OpenAlex-only, gap-driven); discover is Karen-triggered, multi-DB, topic-driven.
version: 0.2.0
---

# discover

Topic-driven literature discovery across 10 academic databases. End-to-end autonomous: search → dedupe → score → fetch PDFs → audit log. No approval queue.

## Arguments

- `topic="<free-text>"` (one of `topic` or `gap` required): the research question, e.g. `topic="arsenic in infant rice cereal 2020-2026"`.
- `gap=<cell-id>` (one of `topic` or `gap` required): an ingredient×metal cell ID from `data/evidence/cells-needing-synthesis.csv`. The skill reads that row and synthesizes the topic from the cell.
- `databases=<comma-list>` (optional): override database selection.
- `max_per_db=<int>` (optional, default 20): per-database result cap.
- `threshold=<int>` (optional, default 4): minimum `recommend_score` to auto-fetch.

## Sequence

### Phase 0: Prep

1. **Rebuild the corpus dedupe index:** `node tools/discovery/build-corpus-index.mjs`. Regenerates `data/evidence/discovery/corpus-index.json` from `wiki/sources/` + `manual-fetch-tracker.csv`. ~1s for ~1000 sources.

2. **Resolve the topic:**
   - `topic=...` → use verbatim.
   - `gap=...` → read `data/evidence/cells-needing-synthesis.csv`, find the matching row, derive topic from ingredient + metal + any missing geography/year coverage notes.

3. **Select databases.** Default fan-out for HMI queries:
   - **PubMed**, **OpenAlex** — primary
   - **Crossref**, **Unpaywall** — required (dedupe + OA URL discovery)
   - **Semantic Scholar**, **PMC** — secondary, for high-priority topics
   - **bioRxiv/medRxiv** — when topic involves emerging methods or recent surveys
   - Skip **arXiv**, **CORE** for HMI's food/medical scope unless topic demands

### Phase 1: Search

1. Invoke the `paper-lookup` skill for each selected database. Build search strings with: metal terms (Pb / lead / Cd / cadmium / iAs / etc.), food-matrix terms from the topic, year filter (default 2015+), polite-pool params (`mailto=karen@paleofoundation.com` on Crossref).
2. 250ms between API calls. Respect per-DB rate limits documented in paper-lookup's references/.
3. Aggregate raw results: `title`, `authors`, `year`, `journal`, `doi`, `source_db`, `abstract`, `oa_url`.

### Phase 2: Dedupe

For each candidate, check against `data/evidence/discovery/corpus-index.json`:

1. **DOI exact match** (case-insensitive) → `dedup_status: in_corpus`, record matched `cite_key`.
2. **Normalized title match** (lowercase, alphanumeric-only, whitespace-collapsed) → `dedup_status: in_corpus`.
3. **Cite-key match against `tracker_cite_keys`** → `dedup_status: queued_for_ingest`.
4. Otherwise → `dedup_status: novel`.

Only `novel` rows continue to scoring. `in_corpus` and `queued_for_ingest` rows go into the audit log with their dedup_status so future sessions can see what was filtered.

### Phase 3: Score

For each `novel` candidate, compute `recommend_score`:

- **+3** if title contains a metal term AND a food/matrix term
- **+2** if abstract contains a metal term AND a food/matrix term (and title scored 0)
- **+1** if open-access URL is available
- **+1** if year ≥ 2020
- **+1** if journal is in the A-tier list (Food Chemistry, Environmental Health Perspectives, Journal of Agricultural and Food Chemistry, Science of the Total Environment, Food Additives & Contaminants, Nature Food, Lancet, NEJM, JAMA, BMJ, EFSA Journal)
- **−3** if title or abstract contains a negative keyword from the *junk-only* categories of `tools/wishlist/find-candidates.mjs`'s NEGATIVE_KEYWORDS — i.e. genuinely off-topic work: sensors/biosensors, materials-science synthesis (perovskite, photovoltaic, MOF), plant molecular-biology gene studies (transcriptomic, CRISPR, transgenic), AMR/microbiology, clinical case reports, and food-as-adsorbent water treatment. **Do NOT down-score in-scope upstream-mechanism, remediation, or exposure literature.** Phytoremediation, phytoextraction, soil-to-plant transfer, transfer factor, atmospheric deposition, exposure assessment, and systematic reviews / meta-analyses are IN SCOPE per CLAUDE.md inclusion-by-default and must not trigger this penalty (the standalone wishlist regex is tuned for the *retail-occurrence* fetch lane, a narrower scope than discovery).

Set `recommend_reason` to a short tag list, e.g. `title-metal+matrix,oa,A-tier,recent`.

### Phase 4: Auto-fetch

For each `novel` candidate where `recommend_score >= threshold` (default 4) AND `oa_url` is non-empty:

1. Derive `cite_key_guess` as lowercase-hyphenated `firstauthor + year + 4-word topic slug`.
2. Target path: `raw/Manual Fetch Discovery/<cite_key_guess>.pdf`. If the file exists, skip (`action: skip-exists`).
3. Fetch with `curl -fLA "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)" --max-time 60 -o "<target>" "<oa_url>"`. Verify the saved file is a PDF (`file --mime <target>`); if not, delete and mark `action: skip-not-pdf`.
4. 500ms between downloads (same politeness budget as `tools/wishlist/find-candidates.mjs`).
5. Action values: `fetched`, `skip-exists`, `skip-not-pdf`, `skip-no-oa`, `skip-low-score`, `skip-negative-keyword`, `skip-dedup-in-corpus`, `skip-dedup-queued`, `fetch-fail-<status>`.

Candidates below threshold or with no OA URL are **not** fetched but are written to the audit log with their action reason. They are not held for human review.

### Phase 5: Audit log + summary

Write the full per-candidate log to `data/evidence/discovery/discover-<today-iso>.csv` (single file per run; if Karen runs discover twice in one day, append `-2`, `-3`, etc.):

```
cite_key_guess,title,authors,year,journal,doi,source_db,abstract_snippet,oa_url,dedup_status,recommend_score,recommend_reason,action,saved_path,notes
```

Rows sorted by `recommend_score` desc, then year desc. `abstract_snippet` is the first 240 chars, single-line, comma-stripped.

Print summary:

```
discover topic="..."
  databases queried: <list with per-db hit counts>
  raw candidates: N
  filtered (in_corpus): N
  filtered (queued_for_ingest): N
  novel: N
    above threshold + OA: N → fetched K, skipped (already exists) J, fetch failures F
    below threshold or no OA: N
  median recommend_score: N
  audit: data/evidence/discovery/discover-<date>.csv
  staged for ingest: raw/Manual Fetch Discovery/ (K PDFs)

The daemon's next tick will pick up the fetched PDFs via
tools/autonomy/ingest-manual-fetch-batch.mjs (folder: Manual Fetch Discovery).
No further action required.
```

## Constraints

- **No human gate.** Discovery is fully autonomous: search through fetch through staging. The audit CSV is for after-the-fact inspection, not approval. Per `feedback_no_approval_gates`.
- **No brand-level data ingestion.** If a candidate is a brand-ranking paper (Consumer Reports, HBBF brand tables), tag `recommend_reason` with `brand-ranking-apply-firewall` so the ingest skill knows to apply Part 12 firewall treatment.
- **No corpus mutation.** This skill reads `wiki/sources/` (via the index) and writes only to `raw/Manual Fetch Discovery/` + `data/evidence/discovery/`.
- **No MCP calls.** `bgpt-paper-search` is installed but not wired; see `tools/discovery/README.md` for the deferred decision.
- **Threshold tuning.** Default `threshold=4` corresponds to "title has metal+matrix AND has OA" or "abstract has metal+matrix AND OA AND recent." Karen can raise to 5 for stricter or lower to 3 for broader if the audit log shows the default is over- or under-fetching.
