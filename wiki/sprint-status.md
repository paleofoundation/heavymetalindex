---
type: dashboard
updated: 2026-05-28T09:55:05.539Z
---

# Sprint Status — 95% Confidence Push

_Auto-regenerated every daemon tick. Open in Obsidian for the live view._

## Headline

**1240 / 2590 cells done (47.9%)** — 1350 remaining

Velocity: (insufficient history; need 1+ hour of dashboard runs)

## Cell state distribution

| State | Count | Counts as |
|---|---|---|
| confidence: high | 433 | ✅ done |
| populated n=0 (declared gap) | 807 | ✅ done |
| confidence: medium | 327 | ⏳ needs more sources |
| confidence: low | 484 | ⏳ needs more sources |
| pending / missing | 520 | 🔴 needs first research |
| other / unknown | 19 | 🟡 audit |

## Pipeline health

| Component | State |
|---|---|
| Daemon heartbeat | ✅ 8 min ago |
| auto-fetched/ PDFs in queue | 5 (fresh work for Codex/daemon ingest) |
| Audit queue: pending | 5 ✅ |
| Audit queue: pending-audit-spawn-failed | 33 (async lane) |
| Wishlist: total downloaded historically | 0 |
| Wishlist: total ingested historically | 18 |
| Repo sync | ✅ synced |
| Commits last 1 hour | 2 |
| Commits last 24 hours | 9 |

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
7ef12f3 25 minutes ago — daemon: --ff-only → --rebase to survive Paperclip-induced divergence
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
