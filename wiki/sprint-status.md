---
noindex: true
type: dashboard
updated: 2026-06-09T10:55:27.097Z
---

# Sprint Status — 95% Confidence Push

_Auto-regenerated every daemon tick. Open in Obsidian for the live view._

## Headline

**1224 / 2570 cells done (47.6%)** — 1346 remaining

Velocity: (insufficient history; need 1+ hour of dashboard runs)

## Cell state distribution

| State | Count | Counts as |
|---|---|---|
| confidence: high | 431 | ✅ done |
| populated n=0 (declared gap) | 793 | ✅ done |
| confidence: medium | 322 | ⏳ needs more sources |
| confidence: low | 482 | ⏳ needs more sources |
| pending / missing | 523 | 🔴 needs first research |
| other / unknown | 19 | 🟡 audit |

## Pipeline health

| Component | State |
|---|---|
| Daemon heartbeat | ⚠️ unknown |
| auto-fetched/ PDFs in queue | 935 (fresh work for Codex/daemon ingest) |
| Audit queue: pending | 54 ⚠️ |
| Audit queue: pending-audit-spawn-failed | 119 (async lane) |
| Wishlist: total downloaded historically | 72 |
| Wishlist: total ingested historically | 0 |
| Repo sync | ⚠️ 1 commit(s) ahead of origin/main |
| Commits last 1 hour | 35 |
| Commits last 24 hours | 682 |

## Most-needy ingredients (top 10 by total source-delta)

| Slug | Source-delta needed |
|---|---|
| baby-food | 100 |
| bee-pollen | 100 |
| beverages | 100 |
| black-pepper | 100 |
| bread | 100 |
| casein | 100 |
| cashews | 100 |
| cereal-bars | 100 |
| cereal-based-infant-formula | 100 |
| cereal | 100 |

## Last commit

```
9b96798 36 seconds ago — audit: hwang2010-dried-seaweed-korea-metals promoted per autonomous audit
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
