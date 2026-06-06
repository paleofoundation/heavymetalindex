# Discovery-loop playbook — 20 ways to use `/loop`, `/discover`, `/paper-lookup`

This is the operating reference for using the three literature-acquisition skills to
improve heavymetalindex.com. It is written for Claude sessions and for Karen.

## The core insight this playbook is built on

FRANK has two jobs that feed the wiki: **fetch** (find PDFs for open gaps) and
**ingest** (turn PDFs into source pages). The fetch job runs the OpenAlex+PubMed
wishlist (`tools/wishlist/find-candidates.mjs`). On the hard gaps that remain, that
single-index path has **gone dry** — the FRANK heartbeat reads `fetched 0 new PDF(s)
for open gaps` cycle after cycle while 592 gaps stay open, and
`wishlist-fetch-audit.csv` fills with off-topic, non-open-access misses (e.g. *"Queer
Theory and Biomedical Practice"* returned for `toothpaste lead`).

Meanwhile `/discover` — which fans out across **10 databases** and resolves
open-access PDFs through Crossref + Unpaywall + PMC + Semantic Scholar + CORE that
OpenAlex alone never surfaces — was Karen-trigger-only and sat idle.

**The fix that anchors this playbook: make `/discover` the autonomous second fetch
engine, gap-driven, so hard gaps OpenAlex cannot reach still close.** Everything below
either is that wiring, or uses the same three skills for an adjacent improvement.

```
                       ┌─ wishlist fetch (OpenAlex+PubMed)  → raw/.../auto-fetched/ ─┐
  open_gaps.jsonl ──→  │                                                              │ ──→ FRANK ingest ──→ wiki/sources/
   (592 gaps)          └─ discover-autopilot (10 DBs)       → raw/Manual Fetch        ┘      (Opus)            → synthesis
                          NEW — this playbook                  Discovery/
```

`raw/Manual Fetch Discovery/` is already a FRANK manual-fetch root and is **not**
excluded by the ingester's `--exclude-roots=auto-fetched` flag, so discover's PDFs are
picked up by the next ingest cycle with zero extra wiring.

## Control surface (read before running anything autonomous)

| Action | Command |
|---|---|
| Halt discovery only | `touch ~/.discover.STOP` |
| Halt all of FRANK | `touch ~/.frank.STOP` |
| Resume | `rm ~/.discover.STOP` (or `~/.frank.STOP`) |
| Per-run budget | `--max-gaps=N` (page-groups attended per run) |
| Model | `--model=sonnet` (default; the skill is mechanical) or `--model=opus` |

No process below has an approval gate. Audit CSVs and JSONL ledgers are for
after-the-fact inspection, per `feedback_no_approval_gates`.

---

## The 20 ways

Status tags: **[WIRED]** runs autonomously now · **[READY]** one command/loop, works
today · **[NEEDS-KAREN]** produces a proposal for a curatorial decision.

### A — Autonomous multi-database gap closure

**1. [WIRED] Gap→discover autopilot.**
`tools/autonomy/discover-autopilot.mjs` reads `open_gaps.jsonl`, groups open gaps by
page, attends the least-recently-tried page-groups, derives a topic, and runs
`/discover` headless. Wired as a FRANK stage (`runDiscover`, every 18th cycle,
`--max-gaps=1` — a full sweep runs ~12-18 min, so one page-group per stage keeps it
short and predictable; the stage recurs every few hours). Fire manually any time:
`npm run discover:gaps`. Inspect the plan first: `npm run discover:gaps:dry`.

**2. [READY] Ingredient-cell discover.** The 139 rows in
`data/evidence/cells-needing-synthesis.csv` are ingredient×metal cells. Close them by
name: `/discover gap=fish.tHg`. Self-paced loop over many: `/loop /discover gap=<next
cell from cells-needing-synthesis.csv>`.

**3. [READY] Contradiction-arbitration discover.** When
`tools/autonomy/detect-contradictions.mjs` flags a cell where two A-tier sources
disagree (CLAUDE.md Part 9 contradiction trigger), pull more evidence to arbitrate:
`/discover topic="<ingredient> <metal> occurrence concentration"`. More independent
measurements break the tie instead of a coin-flip between two papers.

**4. [READY] Regulatory-anchor discover.** Keep agency documents fresh — they are
A-tier and OpenAlex indexes them poorly. One per (analyte × body):
`/discover topic="cadmium EFSA tolerable weekly intake food 2020-2026"`. The multi-DB
fan-out (Crossref + the agency's own DOIs) catches FDA/EFSA/WHO/Codex PDFs the wishlist
path misses.

### B — Backlog drain with `/loop`

**5. [READY] Drain discover output in a burst.** After a discovery sweep, ingest
everything it staged without waiting for FRANK's cadence:
`/loop /ingest-next-manual-fetch-pdf folder=Manual Fetch Discovery`.

**6. [READY] Help Codex drain the auto-fetched backlog.** 491 machine-fetched PDFs are
queued for the Codex engine. When you want a second ingester helping, loop the skill
against that root in an interactive session: `/loop /ingest-next-manual-fetch-pdf
folder=auto-fetched`. (FRANK's own Opus ingester stays partitioned off it via
`--exclude-roots`; a hand-run loop is the safe way to add temporary capacity.)

**7. [READY] Loop audit application.** Drain pending rows in
`data/evidence/audit-queue.csv`: `/loop /apply-gpt-audit <cite-key>`. Each iteration
verifies one source against its audit and commits.

### C — `/paper-lookup` as a precision instrument

**8. [READY] DOI / `wiki_doi` backfill.** Many product and source pages carry
`wiki_doi: null`. Resolve the canonical DOI and metadata with `/paper-lookup` against
Crossref + Unpaywall, then fill the field. Improves citation integrity for the
legal-defensibility audience (CLAUDE.md Part 1).

**9. [READY] Citation-graph expansion.** For a saturated, high-value cell, ask
`/paper-lookup` (Semantic Scholar) for papers **citing** the anchor A-tier source, then
feed the novel ones to `/discover`. Finds the newest follow-up measurements an
occurrence-keyword search would miss.

**10. [READY] Open-access rescue.** Wishlist rows that found a DOI but logged
`skip:no-oa` are evidence we know exists but couldn't fetch. Run `/paper-lookup` against
Unpaywall + CORE + PMC for those DOIs to find an OA copy from a different repository.

**11. [READY] Preprint early-warning.** `/paper-lookup` bioRxiv/medRxiv by recent date
for heavy-metal-in-food preprints surfaces findings months before journal publication —
an edge for the "we have reviewed the complete literature" positioning.

### D — Discovery quality, dedup, provenance

**12. [NEEDS-KAREN] Near-duplicate merge proposals.** `/discover`'s corpus index already
dedupes exact DOI/title matches. Surface *near*-duplicate DOIs (same study, two
versions) in the batch report for Karen to merge — page merges are never autonomous
(docs/page-creation).

**13. [WIRED-in-skill] Brand-firewall tagging at discovery.** `/discover` tags
brand-ranking candidates (Consumer Reports, HBBF) with `brand-ranking-apply-firewall` so
the ingester applies Part 12 treatment (category-level signal, no brand tables). Keep
this tag honored on the ingest side.

**14. [READY] Provenance backfill.** `tools/autonomy/provenance-audit.mjs` lists sources
missing canonical citation fields. Re-derive each with `/paper-lookup`, then patch the
source page — strengthens per-claim provenance (CLAUDE.md database-rights positioning).

### E — Coverage breadth (geography, season, sub-variants)

**15. [READY] Geographic-variance discover.** Cells whose evidence is single-region are
fragile. `/discover topic="<ingredient> <metal> <region> occurrence"` for the missing
regions populates the geographic-variance sub-fields (docs/page-templates).

**16. [READY] Seasonal-variance discover.** Same pattern with harvest/season terms for
commodities where season moves the distribution.

**17. [NEEDS-KAREN] New-sub-variant scouting.** When `routing_unresolved.csv` shows a
source touching a sub-variant with no page, `/discover` that sub-variant; if it clears
the 5-paper promotion threshold, propose the new page in the batch report (model never
invents full pages mid-ingest, per docs/page-creation).

### F — Cadence and scheduling

**18. [OPTIONAL-WIRED] Overnight decoupled sweep.** `runDiscover` in FRANK is the
default home. If you want discovery on its own heavier cadence (independent of FRANK's
cycle timing), load the staged sibling job:
`launchctl bootstrap gui/$(id -u) tools/autonomy/com.paleo.heavymetalindex.frank-discover.plist`.
Every 3 hours, 2 page-groups per fire. Same STOP file disables it.

**19. [READY] Weekly regulatory refresh.** Tie a scheduled `/discover` pass to
`tools/build-change-watch.mjs`: when change-watch flags a regulation as updated, discover
the new version and route it onto the regulation page.

**20. [READY] Post-synthesis top-up.** CLAUDE.md Part 9 resynthesizes a cell at
n_studies = 4, 8, 16…. When a full resynthesis lands and confidence is still `low`,
fire `/discover` for that exact cell to push it over the high-confidence threshold,
closing the loop between synthesis demand and acquisition supply.

---

## What is live now vs what you fire

| | Mechanism | Trigger |
|---|---|---|
| **Live autonomously** | Gap→discover autopilot (#1), brand-firewall tag (#13) | FRANK `runDiscover` every 18th cycle; `npm run discover:gaps` |
| **One command, today** | #2–11, #14–16, #19–20 | `/discover …`, `/paper-lookup …`, `/loop …` as shown |
| **One command to enable** | Decoupled overnight sweep (#18) | `launchctl bootstrap …frank-discover.plist` |
| **Produces a proposal** | #12, #17 | batch report → Karen merges/promotes |

## Why drive the skill instead of porting it to node

`/discover` is the single source of truth for database fan-out, corpus dedup, the
`recommend_score` rubric, and brand-firewall tagging. The autopilot **drives the skill**
(headless `claude --print`) rather than re-implementing its scoring in node, so every
future improvement to the skill propagates to the autonomous path for free, with no
second copy to drift. The cost is model tokens per run; the driver bounds that by
grouping every open metal on a page into one `/discover` call, defaulting to Sonnet, and
honoring a per-run page-group budget and a STOP file. See
`docs/discovery-loop-decision-audit.md` for the full reasoning and the tradeoffs accepted.
