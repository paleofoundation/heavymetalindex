# Daemon reliability — invariants every session MUST preserve

**Read this before touching `daemon-tick.sh`, the daemon plist, or the
preflight guard.** This file exists because the autonomy loop silently
produced ~12 papers in 48h for weeks while four parallel Claude sessions
each fixed a *real* bug that was not the keystone. Do not re-introduce the
two failure modes below.

## The two keystone failures (diagnosed 2026-05-30, Opus 4.8)

### 1. The scheduler wedged and nothing restarted it
The plist used `StartCalendarInterval` (:00/:30) with **no `KeepAlive`**.
The moment a tick exited non-zero — git fatal (128), an unguarded `grep`,
an empty-glob under `set -e` — launchd recorded `last exit code = 128` and
**silently stopped firing the schedule, permanently.** `launchctl print`
showed `runs = 17` total across five days, `state = not running`, while
`caffeinate` held the Mac awake and `pmset` read `sleep 0`. So this was
NOT sleep (a different session had already added the caffeinate keep-awake
job to chase the sleep theory). It was a scheduler wedge with no recovery.

**FIX (commit a062dc8):** the plist now uses `KeepAlive=true` +
`RunAtLoad=true` + `ThrottleInterval=1800`. KeepAlive restarts the tick on
EVERY exit path — clean, crash, signal, non-zero — so there is no wedged
state. This is the same primitive the sibling `com.paleo.heavymetalindex.awake`
job uses, which stayed up continuously the entire time this job was dead.

**INVARIANT:** Do NOT switch the daemon back to `StartCalendarInterval`
or `StartInterval` without `KeepAlive`. If you need a specific cadence,
tune `ThrottleInterval` (the floor between starts). KeepAlive is what makes
the loop un-killable; the calendar primitive is what made it die.

### 2. The daemon refused to run while any sibling edited code
The preflight guard did `exit 0` whenever any `tools/`, `api/`, `quartz/`,
or config file was uncommitted — i.e. whenever ANY of the 3-4 parallel
Claude sessions had a work-in-progress edit. During active development the
tree is almost never clean, so the ingester refused all day. The parallel
sessions trying to help were themselves blocking the daemon.

**FIX (commit d4f3fe9):** on foreign dirt the daemon now PROCEEDS with the
tick and only skips the one unsafe operation — `git pull --rebase
--autostash`, whose autostash momentarily reverts all tracked files
including the foreign edit (`SKIP_PULL_FOREIGN_DIRT=1`). Every daemon
commit is already scoped to `git add -- data/evidence data/workbench/
briefings wiki` and serialized behind the commit lock, so it can never
stage a sibling's `tools/` edit.

**INVARIANT:** Do NOT restore the blanket `exit 0` on foreign dirt. The
daemon's commits are allowlist-scoped; running concurrently with a sibling
code edit is safe. The only thing that must stay guarded is the
autostash-pull.

## Contributing factor (not a keystone)
Some hand-kickstarts passed `HMI_MFETCH_INGEST=0`, producing deterministic-
only 72-second ticks that ingested nothing. Under launchd the plist sets no
such var, so ingestion defaults ON. Do not pin `HMI_MFETCH_INGEST=0`
anywhere persistent (env file / `launchctl setenv`).

## How to check health in 10 seconds
```
bash tools/autonomy/hmi-health.sh
```
Reads only hard signals (launchd state, caffeinate, live workers, tick
cadence, git throughput, queue). Green = genuinely producing; red prints
the fix inline. If `runs` stops climbing or `last exit` is non-zero and
the job is `not running`, the scheduler wedged — reload it:
```
launchctl bootout gui/$(id -u)/com.paleo.heavymetalindex.daemon
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```
(But with KeepAlive this should no longer be necessary.)

## Prior real-but-non-keystone fixes (keep them; they are correct)
- caffeinate keep-awake job (sleep prevention)
- `set -e` disarmed for the tick body (in-script aborts)
- commit-lock mutex + self-deadlock break (commit races)
- empty-glob → `find` (one specific abort source)
- allowlist-scoped commits (never sweep foreign edits)

These all hardened individual ticks. The two keystones above are what make
the LOOP run at all. Both layers are needed.
