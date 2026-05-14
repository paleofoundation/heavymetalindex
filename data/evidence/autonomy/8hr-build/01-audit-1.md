# Audit 1 of the 8-Hour Build Plan

**Reviewer:** Claude (Opus 4.7), acting as adversarial auditor of own plan.

## What the plan gets right

- It identifies the right gap landscape: 234 gap-report rows + 139 documented Cat 5 cells.
- It correctly diagnoses that the daemon is currently non-functional on the ingest/auto-page-creation steps because three referenced tools don't exist.
- It correctly sizes the work: 320 papers ingested at $19 cost ceiling is realistic.
- It correctly distinguishes between cells that CAN be closed (gap due to corpus thinness, closable by ingest) and cells that CANNOT be closed by ingest alone (MeHg in non-fish, Cr-VI without credible pathway — these require methodology-based rationale, not data).
- It correctly notes the morning report as the deliverable rather than a value in every cell.

## What the plan gets wrong or underestimates

### Issue 1: The daemon was never observed running successfully under load

The plan assumes 16-32 ticks across 8 hours with each tick ingesting 20 papers cleanly. Reality check: the daemon has run successfully at the original 2-papers-per-tick / Haiku setting. Whether it sustains 20-paper batches under Sonnet 4.6 is untested. **A single daemon failure mid-tick wipes the entire 30-minute window**, because the next tick refuses to run on a dirty tree (the daemon's safety guard).

**Mitigation:** Run a 20-paper batch manually in this session first as a smoke test. If it succeeds, ship the daemon at 20-paper config. If it doesn't, fall back to 10-paper batches.

### Issue 2: OpenAlex rate limits and PDF availability

The plan assumes wishlist:gap-driven fetches papers that exist in OpenAlex and are Open Access. Two failure modes:

- OpenAlex API rate-limits at ~10 requests/sec for unauthenticated traffic. With 242 wishlist queries × 16 ticks of rebuild, we could hit the limit and degrade silently.
- Many high-quality tea/coffee/herbal beverage papers are paywalled in journals like *Food Chemistry* or *Journal of Agricultural and Food Chemistry*. The wishlist fetcher filters for OA papers; the corpus we want is partly behind paywalls.

**Mitigation:** Add a polite rate limit to the wishlist fetcher (1 request/sec, with sleep). For paywalled papers, the wishlist surfaces them with their DOI for manual fetching, which Karen can do via institutional access tomorrow.

### Issue 3: The "20 papers per tick" autonomous ingest assumes the ingest tool exists and is fast

The autonomous ingest tool (`ingest-marker-batch.mjs`) doesn't exist yet. Building it tonight in this session is one step in the plan. But the tool itself is non-trivial:

- Read Marker-converted markdown for a paper
- Send the first ~8K tokens to `claude --print` non-interactive
- Receive structured frontmatter + body
- Write to wiki/sources/<cite-key>.md

Each paper takes 20-60 seconds wall-clock on Sonnet 4.6. 20 papers per tick = 7-20 minutes of tick runtime. The daemon tick currently completes in ~30 seconds. **A 20-minute tick that runs every 15 minutes means continuous load; if the tick takes longer than 15 minutes, ticks pile up.**

**Mitigation:** Set tick cadence to every 30 minutes (not 15), with a hard timeout on the ingest step (e.g., 10 minutes max). That bounds the ingest to ~10-15 papers per tick at Sonnet quality, but keeps the tick cadence stable.

### Issue 4: Cell-closure measurement is undefined

The plan says "close 50% of gap cells" but doesn't specify how "closed" is measured. A cell going from n_a_tier=0 to n_a_tier=1 is closed? Or only when it reaches n_a_tier=2 with confidence=medium? The current gap report has multiple status fields and they don't all align.

**Mitigation:** Define closure clearly:
- **Tier A closure**: n_a_tier ≥ 2 AND pooled P97/P45 produced AND sensitivity stable
- **Tier B closure**: n_a_tier = 1 sample-level AND Path A thin documented
- **Tier C closure**: Path B candidate (5×LOQ floor documented) OR explicit data gap with rationale
- The 8-hour target should be Tier A or Tier B closure for 50% of currently-gap cells.

### Issue 5: The plan doesn't account for the daemon's existing work

The daemon has been running every 30 minutes for some hours. It has already done routing audits, heal-gaps, extract-source-values, pooling, wishlist generation, and briefing regeneration. The "fresh starting state" the plan implies is wrong — there's already accumulated work.

**Mitigation:** Read the most recent daemon morning report before the 8hr window starts to understand what's already done. Build from current state, not a hypothetical zero state.

### Issue 6: No prompt catalog mentioned in execution path

Karen explicitly asked for a prompt catalog and Warp execution guide. The plan mentions these but doesn't put them on the critical execution path. They are part of the deliverable.

**Mitigation:** Add explicit steps for: write `data/evidence/autonomy/8hr-build/04-prompt-catalog.md` and `data/evidence/autonomy/8hr-build/05-warp-execution-guide.md`. Reference these from CLAUDE.md or a near-CLAUDE.md location so future Claude Code sessions discover them.

### Issue 7: The plan promises no human intervention but the morning report surfaces decisions

There's a contradiction: the plan says "morning report has good news rather than blocking decisions," but also says it "surfaces new-page proposals and methodology conflicts." If the autonomous ingest discovers a new ingredient (say, a paper on heavy metals in açaí pulp), it surfaces "açaí pulp ingredient page does not exist" as a new-page proposal. That's a Karen-side decision.

**Mitigation:** Build `create-missing-pages.mjs` to auto-create stubs for unresolved-target routing entries when the slug looks like a real new page (not a typo). This converts most new-page proposals from "ask Karen" to "create the stub, Karen reviews later." Document the rule: stub creation is reversible; the synthesis pass fills the stub as sources accumulate; Karen reviews in the morning report.

## Revised plan elements

Incorporating the mitigations:

1. Run a 10-paper smoke test in this session before tuning the daemon.
2. Add polite rate-limit (1 req/sec) to wishlist fetcher.
3. Set tick cadence to 30 minutes with 10-minute hard timeout per step.
4. Define closure tiers (A, B, C) and measure 8hr progress in those terms.
5. Read current daemon state before defining the 8hr starting point.
6. Add prompt catalog + Warp guide to the deliverable list.
7. Make stub-creation autonomous (reversible decisions, not approval queues).

Audit 2 (next document) checks whether Audit 1 caught all the holes.
