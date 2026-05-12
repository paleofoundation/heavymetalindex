# Night-loop spec — unattended overnight execution

This document specifies the orchestrator's night-loop, the layer above `tools/orchestrator/dispatch.mjs` that chains action dispatches overnight so Karen wakes up to real progress without having been at the keyboard.

Status: spec, pending trial validation of single-action `dispatch.mjs` invocations.

## Goal

Karen kicks off `npm run night-loop` before bed (or launchd does it). The loop runs for a bounded duration (default 8 hours) or until a token budget is reached or the action queue runs out, executing the orchestrator's prioritized actions sequentially. By morning, the working tree shows commits with synthesized cells, fixed routing entries, and ingested papers; a morning report at `data/evidence/morning-report-<date>.md` summarizes what landed.

## Architecture

```
tools/orchestrator/
├── analyze-gaps.mjs   (existing) — generates the action plan
├── dispatch.mjs       (existing) — runs one action via claude subprocess
└── night-loop.mjs     (new)      — chains dispatches with budgets
```

Loop pseudocode:

```
budget_seconds = 8 * 3600      # 8 hours
budget_dollars = 50            # USD soft cap on API spend
budget_actions = 30            # hard cap on dispatched actions
started = now()
actions_run = 0
total_spend_estimate = 0
results = []

while now() - started < budget_seconds:
    run `npm run plan`
    plan = read build-action-plan.json
    next_action = first action where dispatch_eligible(action)
    if not next_action: break

    estimated_cost = estimate_action_cost(next_action)
    if total_spend_estimate + estimated_cost > budget_dollars: break
    if actions_run >= budget_actions: break

    result = dispatch(next_action.id)
    results.append(result)
    actions_run += 1
    total_spend_estimate += estimated_cost

    # Refresh the gap signals so the next plan iteration sees the work
    run `npm run evidence:source-routes`

emit morning_report(results)
```

## Dispatch eligibility

An action is `dispatch_eligible` if all of these hold:

- It has a session prompt file (not just an `inline_action` stub).
- It does not require Karen's input (the prompt explicitly handles auto-decide paths).
- It does not modify CLAUDE.md, OPERATING.md, or AGENTS.md (policy documents — Karen approves changes to these).
- Its `best_dispatched_to` is "Claude Code Opus" or "Obsidian Sonnet" (not "Karen").
- The action's confidence is >= 0.7 (filter out low-confidence experiments overnight).

Actions that require Karen's approval — chiefly new-page creation per CLAUDE.md Part 10 — are flagged in the morning report but not executed overnight.

## Cost model (v1, refine after trial)

Token estimates per action type, derived from observed usage on Claude Code:

- INGEST-STAGED single paper: ~30K tokens (read PDF + write source page + frontmatter)
- TRIAGE-ROUTING-UNRESOLVED single entry: ~5K tokens (read source page + classify + fix)
- SYNTHESIS-INGREDIENT-PENDING single cell: ~40K tokens (read 2-5 source pages + analyze + write contamination_profile)
- FIX-MALFORMED-STRICT single page: ~3K tokens (read + add 2 frontmatter fields)
- WISHLIST-EXPAND-FOR-BLOCKED-CELLS: ~10K tokens (read gap report + append to wishlist)

Pricing (claude-sonnet-4-6, approximate, as of 2026-05):
- Input: $3 per million tokens
- Output: $15 per million tokens
- Average mix: ~$5 per million tokens

So:
- Single-paper ingest: ~$0.15
- Single-cell synthesis: ~$0.20
- Single-entry triage: ~$0.025
- Single-page fix: ~$0.015

Overnight projection (8 hours, $50 budget):
- ~250 single-paper ingests, OR
- ~250 single-cell syntheses, OR
- ~2000 triage entries, OR (more realistically) a mix

## Morning report

`data/evidence/morning-report-<YYYY-MM-DD>.md`:

```markdown
# Morning report — 2026-05-13

Night-loop ran 23:00 to 06:47 (7h 47m). 18 actions dispatched, 17 successful.

## Synthesis pass (top priority)
- 24 ingredient × metal cells moved from pending to populated
  (rice/iAs, cocoa/Cd, ...)
- 3 cells had source contradictions flagged for Karen's resolution

## Routing triage
- 198 unresolved entries auto-fixed (frontmatter typos)
- 12 new-page proposals queued for Karen's approval (listed below)
- 30 detector bugs fixed in build-routing-audit.mjs

## Ingest pass
- 47 PDFs from staging produced source pages
- 6 PDFs failed to ingest (listed with reasons)

## Auto-fetch round
- 8 additional papers downloaded from OpenAlex

## Karen needs to approve (new pages above Part 10 threshold)
- [[ingredients/sea-buckthorn-berry]] — 6 sources cite as distinct
- [[products/medical-food-pediatric]] — 5 sources cite as distinct
- ...

## Errors and skips
- 1 action timed out (synthesis for cocoa × Sn, paused after 25 turns)
- ...

## Working tree state at end of run
- Commits: 18 (listed)
- Routing audit: 412 source pages, 47 unresolved, 0 blocking-malformed
```

## Launchd setup

`~/Library/LaunchAgents/com.paleofoundation.hmi-night-loop.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.paleofoundation.hmi-night-loop</string>
    <key>ProgramArguments</key>
    <array>
      <string>/opt/homebrew/opt/node@24/bin/node</string>
      <string>/Users/karenpendergrass/Desktop/heavy-metal-index/tools/orchestrator/night-loop.mjs</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/karenpendergrass/Desktop/heavy-metal-index</string>
    <key>StartCalendarInterval</key>
    <dict>
      <key>Hour</key><integer>23</integer>
      <key>Minute</key><integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/tmp/hmi-night-loop.stdout.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/hmi-night-loop.stderr.log</string>
  </dict>
</plist>
```

Karen runs `launchctl load ~/Library/LaunchAgents/com.paleofoundation.hmi-night-loop.plist` once to enable; the loop runs at 23:00 every night until Karen runs `launchctl unload` to stop it.

## Failure modes and mitigations

- **Runaway costs**: budget caps (time, dollar, action count) all enforced.
- **Bad action quality**: per-action max-turns caps subprocess; failed actions logged but loop continues.
- **Concurrent edits**: night-loop runs at 23:00 when Karen and Obsidian Claude are typically asleep; if a conflict appears, the husky pre-commit hook aborts the commit.
- **API outage**: dispatch.mjs returns non-zero; loop logs and tries the next action.
- **Working-tree drift**: routing audit re-runs after each action so each subsequent action sees the current state.

## Build order

1. **Trial single dispatch** (TRIAL-DIAGNOSTIC) — verify subprocess invocation works. *In progress.*
2. **Real action dispatch** (try one TRIAGE-ROUTING-UNRESOLVED batch limited to 10 entries) — verify the subprocess can do real work safely.
3. **Cost calibration** — run 3-5 dispatches, measure actual token usage per action type, refine the cost model.
4. **Build night-loop.mjs** — chains dispatches with budgets, emits morning report.
5. **Launchd setup** — Karen installs the plist once.
6. **Production overnight runs** — Karen kicks off (or launchd does) and reads the morning report.

Each step is ~30-90 min of focused work. Total: 1-2 focused sessions to production.
