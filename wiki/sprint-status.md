---
type: dashboard
updated: 2026-06-04T14:09:05.550Z
---

# Sprint Status — 95% Confidence Push

_Auto-regenerated every daemon tick. Open in Obsidian for the live view._

## Headline

**1224 / 2560 cells done (47.8%)** — 1336 remaining

Velocity: (insufficient history; need 1+ hour of dashboard runs)

## Cell state distribution

| State | Count | Counts as |
|---|---|---|
| confidence: high | 431 | ✅ done |
| populated n=0 (declared gap) | 793 | ✅ done |
| confidence: medium | 322 | ⏳ needs more sources |
| confidence: low | 482 | ⏳ needs more sources |
| pending / missing | 513 | 🔴 needs first research |
| other / unknown | 19 | 🟡 audit |

## Pipeline health

| Component | State |
|---|---|
| Daemon heartbeat | ⚠️ unknown |
| auto-fetched/ PDFs in queue | 476 (fresh work for Codex/daemon ingest) |
| Audit queue: pending | 2 ✅ |
| Audit queue: pending-audit-spawn-failed | 95 (async lane) |
| Wishlist: total downloaded historically | 3 |
| Wishlist: total ingested historically | 0 |
| Repo sync | ⚠️ 77 commit(s) ahead of origin/main |
| Commits last 1 hour | 11 |
| Commits last 24 hours | 106 |

## Most-needy ingredients (top 10 by total source-delta)

| Slug | Source-delta needed |
|---|---|
| baby-food | 100 |
| beverages | 100 |
| black-pepper | 100 |
| bread | 100 |
| casein | 100 |
| cashews | 100 |
| cereal-bars | 100 |
| cereal-based-infant-formula | 100 |
| cereal | 100 |
| chitosan | 100 |

## Last commit

```
eb68176 9 minutes ago — docs: brand-intelligence feature audit — red-team inverts the moat thesis
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
