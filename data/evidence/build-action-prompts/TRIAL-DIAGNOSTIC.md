# Trial session prompt: build-state diagnostic

This is a trial dispatch to verify that `claude --print --dangerously-skip-permissions` runs reliably as a subprocess of the orchestrator. **Do not change any files outside `data/evidence/diagnostics/`.** Do not commit. Do not edit anything in `wiki/`, `tools/`, `quartz/`, or `raw/`.

## Your task

Produce a one-page diagnostic at `data/evidence/diagnostics/build-state-<timestamp>.md` summarizing the current state of the build and what the orchestrator's night-loop would do if it ran tonight.

Specifically:

1. Read `OPERATING.md` Part 7 standing initiatives and list the top three in execution order.
2. Read `TODO.md` and count the items in each section (Karen's awaiting-review, Karen's awaiting-decision, Karen's awaiting-external-action, Claude's in-progress, Claude's next-up, Claude's queued, Claude's recently-completed).
3. Read `data/evidence/build-action-plan.md` and list the action priority order.
4. Read `data/evidence/routing_malformed.csv` and report the count by severity (blocking, strict, advisory).
5. Read `data/evidence/wishlist-fetch-audit.csv` and report decision breakdown (downloaded, skip:already-indexed, skip:no-keyword-overlap, review:weak-match, fail:http-403, other).
6. Count the files in `raw/manual-fetch/seasonal-geographic-variance/` (top level) and in its `auto-fetched/` subfolder.
7. Predict what an overnight night-loop would accomplish if it ran the top three actions sequentially.

Write the diagnostic to `data/evidence/diagnostics/build-state-<timestamp>.md` with a brief frontmatter (`title`, `type: diagnostic`, `generated_at`, `noindex: true`). Use prose, not bullets, where appropriate per CLAUDE.md Part 15.

When done, print a single line `__TRIAL_OK__: data/evidence/diagnostics/<filename>` and exit. Do not commit; do not edit anything else.

## Why this is safe

- No edits outside `data/evidence/diagnostics/`.
- No commits.
- Pure read + one write to a fresh diagnostic file.
- The diagnostic file is gitignored under `data/evidence/diagnostics/` (the orchestrator creates this directory if needed).

## Why this trial matters

If this works, the night-loop can dispatch real actions (synthesis, triage, ingest) overnight while Karen sleeps, and she wakes up to a morning report. If this doesn't work, we diagnose the subprocess invocation before trying anything that touches the working tree.
