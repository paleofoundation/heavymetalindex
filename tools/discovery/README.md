# tools/discovery

Multi-database literature discovery using the `paper-lookup` Agent Skill. Karen-triggered, fully autonomous (no approval gate), end-to-end through PDF staging.

## What discovery is

A workflow for finding heavy-metals papers across **10 academic databases** (PubMed, PMC, bioRxiv, medRxiv, arXiv, OpenAlex, Crossref, Semantic Scholar, CORE, Unpaywall) given either:

- a **topic** (e.g., "arsenic in infant rice cereal 2020-2026"), or
- a **gap signal** from `data/evidence/cells-needing-synthesis.csv` (broader than `tools/wishlist/`'s OpenAlex-only sweep).

Each run searches, dedupes against the existing corpus, scores for HMI fit, auto-fetches the qualifying open-access PDFs into `raw/Manual Fetch Discovery/`, and writes a per-candidate audit log. The daemon's next tick ingests the fetched PDFs via the existing `ingest-manual-fetch-batch` flow.

## How it differs from `tools/wishlist/`

| | `tools/wishlist/` | `tools/discovery/` |
|---|---|---|
| Trigger | Daemon (gap-driven) | Karen, on demand |
| Databases | OpenAlex only | 10 (via paper-lookup skill) |
| Dedupe | DOI + title against `wiki/sources/` | Same, plus `manual-fetch-tracker.csv` |
| Decision | Auto-fetch at score ≥ 1, audit log | Auto-fetch at score ≥ 4, audit log |
| Destination | `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/` | `raw/Manual Fetch Discovery/` |
| Use case | Steady-state corpus expansion | Broad sweeps, new topics, suspected coverage gaps |

Both exist because they answer different questions. Wishlist keeps the corpus filling in known gaps; discovery is what Karen runs when she wants to ask "what does the literature actually say about X?" across the full multi-DB surface.

## Workflow

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Karen: /discover topic="..."  (or gap=<cell-id>)          │
│                                                              │
│ 2. Claude (via discover skill + paper-lookup):               │
│      - rebuilds corpus-index.json                            │
│      - fans out queries across selected databases            │
│      - dedupes against the corpus index                      │
│      - scores each candidate (rubric in SKILL.md)            │
│      - auto-fetches PDFs for novel + score≥4 + OA            │
│        → raw/Manual Fetch Discovery/<cite_key>.pdf           │
│      - writes audit log:                                     │
│        data/evidence/discovery/discover-<date>.csv           │
│                                                              │
│ 3. Daemon's next tick (or manual                             │
│    `node tools/autonomy/ingest-manual-fetch-batch.mjs`):     │
│      - picks up new PDFs in raw/Manual Fetch Discovery/      │
│      - runs the existing Cochrane-quality ingest pipeline    │
│      - commits each ingested PDF                             │
│                                                              │
│ Karen is in the loop for tuning topic + threshold only.      │
│ Everything from search through ingest is autonomous.         │
└──────────────────────────────────────────────────────────────┘
```

## Files

```
tools/discovery/
├── README.md                  this file
└── build-corpus-index.mjs     refreshes the dedupe index from wiki/sources/

.claude/skills/discover/
└── SKILL.md                   the workflow Karen invokes via /discover

data/evidence/discovery/
├── corpus-index.json          {doi, normalized_title} → cite_key map
└── discover-<date>.csv        per-candidate audit log (all candidates, all actions)

raw/Manual Fetch Discovery/    auto-fetched PDFs, ingested by the daemon
```

## Ingest wiring

`tools/autonomy/ingest-manual-fetch-batch.mjs` includes `raw/Manual Fetch Discovery` in its `MANUAL_FETCH_ROOTS` list with handle prefix `MFD`. The Karen-facing `ingest-next-manual-fetch-pdf` skill description has been updated to list the fourth folder as a valid `folder=` argument. No manual file moves required.

## BGPT Paper Search — deferred

The `bgpt-paper-search` skill is installed but not wired into this flow. Reason: BGPT is a remote MCP server (bgpt.pro/mcp/sse). Using it would (1) add an MCP entry to `.mcp.json` so every session connects on startup, (2) send every discovery query to a third-party SaaS, (3) cost $0.01 per result after 50 free per network, (4) pull results from BGPT's curated DB (coverage vs. our 10-DB fan-out unmeasured).

Karen's call. Once decided, wiring is small: add the MCP entry and update `.claude/skills/discover/SKILL.md` to call BGPT after the paper-lookup pass for the top-N novel candidates (cost-bounded).

## Politeness

- `build-corpus-index.mjs` is local-only; no network.
- Discover skill: 250ms between API calls, 500ms between PDF downloads, `mailto=karen@paleofoundation.com` on Crossref, User-Agent `HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)` on every request.
- `file --mime` check on every downloaded PDF; deletes and logs non-PDFs instead of leaving garbage in the staging folder.
