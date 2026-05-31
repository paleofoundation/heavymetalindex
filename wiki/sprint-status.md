---
type: dashboard
updated: 2026-05-31T21:43:34.775Z
---

# Sprint Status — 95% Confidence Push

_Auto-regenerated every daemon tick. Open in Obsidian for the live view._

## Headline

**1236 / 2650 cells done (46.6%)** — 1414 remaining

Velocity: **+0 cells in the last 65 min**

## Cell state distribution

| State | Count | Counts as |
|---|---|---|
| confidence: high | 434 | ✅ done |
| populated n=0 (declared gap) | 802 | ✅ done |
| confidence: medium | 326 | ⏳ needs more sources |
| confidence: low | 486 | ⏳ needs more sources |
| pending / missing | 583 | 🔴 needs first research |
| other / unknown | 19 | 🟡 audit |

## Pipeline health

| Component | State |
|---|---|
| Daemon heartbeat | ⚠️ 381 min ago (stale) |
| auto-fetched/ PDFs in queue | 0 (fresh work for Codex/daemon ingest) |
| Audit queue: pending | 1 ✅ |
| Audit queue: pending-audit-spawn-failed | 82 (async lane) |
| Wishlist: total downloaded historically | 0 |
| Wishlist: total ingested historically | 0 |
| Repo sync | ✅ synced |
| Commits last 1 hour | 13 |
| Commits last 24 hours | 108 |

## Most-needy ingredients (top 10 by total source-delta)

| Slug | Source-delta needed |
|---|---|
| baby-food | 100 |
| beverages | 100 |
| black-pepper | 100 |
| bread | 100 |
| breast milk | 100 |
| carrots | 100 |
| casein | 100 |
| cashew-nuts | 100 |
| cashews | 100 |
| cereal-bars | 100 |

## Last commit

```
f632ad8 18 minutes ago — audit-queue: bfr2009-lead-cadmium-toys → audited-revised/REVISE
```

## How to read this

The headline number is the only one that matters: **cells done / total**. Everything else is process metric.

A well-oiled engine looks like:
- **Heartbeat fresh** (<35 min old, daemon ticking)
- **auto-fetched/ depth fluctuating** (refill then drain then refill — not stuck at zero or piling up indefinitely)
- **Audit queue pending ≤5** (Codex draining it)
- **Commits/hour ≥ 5** during active sprint
- **Velocity positive** (cells done going UP between dashboards)
- **Unpushed = 0** (daemon pushes every tick)

When velocity stalls for >2 hours, something upstream broke. Check `data/evidence/autonomy/daemon-runs/` for the most recent tick log and look for "FAIL:" lines.
