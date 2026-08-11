# The outstanding-items ledger

A durable, machine-readable backlog so that findings discovered mid-session and built-but-unshipped work never depend on anyone's memory. It closes two chronic failure modes: (A) findings surfaced then forgotten, and (B) built work stranded in a preview/branch, never promoted. Governing rule: [[CLAUDE]] Part 28.

## The pieces

| File | Role |
|---|---|
| `data/evidence/outstanding/ledger.jsonl` | **Source of truth.** Append-only JSONL; latest record per `id` wins. |
| `docs/findings.md` | Generated human view (do not hand-edit). |
| `data/evidence/outstanding/decision-queue.csv` | Generated projection of the human-gated, undecided items (do not hand-edit). |
| `tools/outstanding/log.mjs` | Append an item. |
| `tools/outstanding/decide.mjs` | Record Karen's ruling on a human-gated item. |
| `tools/outstanding/surface-decisions.mjs` | Print the "waiting on you" list (SessionStart hook + scheduled push). |
| `tools/outstanding/stop-hook-capture.mjs` | Stop-hook; harvests `<!-- OUTSTANDING: … -->` sentinels from assistant text. |
| `tools/outstanding/render-*.mjs` | Regenerate the two views. |
| `.claude/settings.json` | Wires the Stop + SessionStart hooks (committed, shared). |

**Everything here is deterministic — no tool in this system calls a model.** That is the load-bearing safety property (see Part 28).

## For a session (Claude): logging

Log anything out-of-scope you notice, before the turn ends — either:

```bash
node tools/outstanding/log.mjs --id OI-20260809-my-thing --title "..." --type code-fix --scope auto \
  --repo cert --paths "package.json" --repro "..." --accept "npm run prebuild fails on bold"
```

or emit an inline sentinel in your final message (the Stop-hook harvests it):

```
<!-- OUTSTANDING: {"id":"OI-20260809-my-thing","title":"...","scope_class":"auto","type":"code-fix","repo":"cert","target_paths":["package.json"],"repro":"...","acceptance_criteria":["..."]} -->
```

`scope_class`: `auto` = a governed drainer could execute + self-verify it inside the firewalls; `human-gated` (the safe default) = it touches a genuine human gate (firewall, cert prod content, Step-0 lock, brand naming, destructive git, policy edit).

## For Karen: clearing the queue

You see the pending decisions at the top of every Claude Code session, and pushed to you on a schedule. To rule on one:

```bash
node tools/outstanding/decide.mjs OI-20260808-fatten-regulations-promote "APPROVE: merge to main after the analyte work lands"
```

`APPROVE` marks it ready (a later drain — or Claude, right now — runs its `one_command`). `DECLINE` closes it. `DEFER: <note>` records a note and leaves it open. Or just tell Claude "yes to the regulations promote" and it runs `decide.mjs` for you.

## Roadmap

- **Now (MVP, shipped):** the ledger + mandatory capture + the two push surfaces. Human items are drained by hand (`decide.mjs`, then run the `one_command`).
- **Next (the governed drainer):** `tools/autonomy/drain-outstanding-ledger.mjs` executes `scope_class: auto` items unattended — routing every model spawn through `tools/autonomy/governor.mjs`, committing via a deterministic promoter, and self-verifying against each item's `acceptance_criteria`. It runs under the sanctioned `governed.plist` (StartInterval, **no KeepAlive**); installing it is a deliberate act, taken only after the ledger has been hand-operated for ~a week.
