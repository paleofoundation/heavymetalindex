# Warp Execution Guide — 8-Hour Cat 1 + Cat 5 Autonomous Build

**Purpose:** Run the 8-hour build directly from Warp without invoking Claude Code interactively. Each step below is a copy-paste shell command. The daemon does the autonomous work; this guide ensures it's tuned correctly and that you can monitor and intervene if needed.

## Pre-flight (5 minutes)

```bash
cd ~/Desktop/heavy-metal-index

# 1. Make sure you're on main with a clean tree
git status

# 2. Confirm the daemon is loaded and ready
launchctl list | grep heavymetalindex

# 3. Confirm the autonomy tools exist
ls tools/autonomy/{daemon-tick.sh,create-missing-pages.mjs,firewall-lint.mjs,ingest-marker-batch.mjs,heal-gaps.mjs,extract-source-values.mjs,gap-driven-wishlist.mjs}
```

If the daemon isn't loaded, install it:

```bash
cp tools/autonomy/com.paleo.heavymetalindex.daemon.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```

If any tool is missing, you're on a branch that doesn't have the autonomy infrastructure. Merge or check out the appropriate commit.

## Configure for the 8-hour window (2 minutes)

Edit the launchd plist to set environment variables for higher throughput. Tonight's recommended config:

```bash
# Open the plist
open ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```

In the `<key>EnvironmentVariables</key>` dict, add or update:

```xml
<key>HMI_AUTONOMOUS_INGEST</key>
<string>1</string>
<key>HMI_INGEST_MAX_PAPERS</key>
<string>10</string>
<key>HMI_INGEST_PRIORITY</key>
<string>P1,P2,P3</string>
<key>HMI_INGEST_MODEL</key>
<string>claude-sonnet-4-6</string>
<key>HMI_INGEST_COST_CEILING</key>
<string>50</string>
<key>HMI_INGEST_TIMEOUT</key>
<string>600</string>
```

Then reload the daemon to pick up the new env:

```bash
launchctl unload ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
launchctl load ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```

## Start the 8-hour window (1 minute)

```bash
# Trigger first tick immediately so the window starts cleanly
launchctl start com.paleo.heavymetalindex.daemon

# Optional: kick off wishlist fetch in parallel to populate the corpus
npm run wishlist:gap-driven &
WISHLIST_PID=$!

# Watch the daemon stream
tail -f /tmp/heavymetalindex-daemon.out.log
# Ctrl+C when you've confirmed the tick is healthy
```

The daemon then runs every 30 minutes for the next 8 hours (16 ticks) without further intervention. You can sleep through it.

## Monitor mid-window (optional, every 1-2 hours)

```bash
# How many cells still blocked?
node tools/evidence/build-standards-gap-report.mjs
awk -F',' 'NR>1 && $26 ~ /BLOCKED/ {n++} END {print n " cells BLOCKED"}' data/evidence/hmtc_standards_gap_report.csv

# How many papers ingested today?
wc -l data/evidence/autonomy/ingest-cost-ledger.csv
tail -5 data/evidence/autonomy/ingest-cost-ledger.csv

# Total cost today
awk -F',' 'NR>1 {s+=$4} END {print "Today: $" s}' data/evidence/autonomy/ingest-cost-ledger.csv

# Last few morning-report entries
tail -50 data/evidence/autonomy/morning-report-$(date +%Y-%m-%d).md
```

## Halt mid-window (if needed)

```bash
# Soft halt: next tick exits immediately without work
touch ~/.heavymetalindex.STOP

# When ready to resume:
rm ~/.heavymetalindex.STOP

# Hard halt: unload the launchd job entirely
launchctl unload ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```

## Closeout at t+8h

```bash
# Regenerate the master manual with all the new pooled data
node tools/standards/render-part3-chapter.mjs --all
node tools/standards/build-program-manual.mjs
node tools/standards/render-manual-typst.mjs --pdf

# Final gap report
node tools/evidence/build-standards-gap-report.mjs

# Final tally
awk -F',' 'NR>1 {print $26}' data/evidence/hmtc_standards_gap_report.csv | sort | uniq -c | sort -rn

# Final cost
awk -F',' 'NR>1 {s+=$4} END {print "Total today: $" s}' data/evidence/autonomy/ingest-cost-ledger.csv

# Commit the night's work
git add -A
git commit -m "8hr-build: <N> cells closed, <M> papers ingested, \$<X> cost"
git push origin $(git branch --show-current)
```

## Open the new PDF

```bash
open data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.pdf
```

## Run a single phase on demand

If you want to skip the daemon and run a specific phase manually, see `docs/prompt-catalog.md`. The catalog grades every prompt by efficiency for the goal you're after.

Common one-shots:

```bash
# Just regenerate the manual PDF (no ingest, no pooling)
node tools/standards/build-program-manual.mjs && node tools/standards/render-manual-typst.mjs --pdf

# Just refresh the pooling engine (after a manual source edit)
node tools/evidence/build-routing-audit.mjs
node tools/autonomy/extract-source-values.mjs
node tools/evidence/build-hmtc-aggregate-distributions.mjs

# Just ingest a batch of papers (assumes raw/markdown/ has FM_* folders)
HMI_INGEST_MAX_PAPERS=20 HMI_INGEST_MODEL=claude-sonnet-4-6 node tools/autonomy/ingest-marker-batch.mjs

# Just audit the firewall
node tools/autonomy/firewall-lint.mjs
```

## What to do if something breaks

**Daemon refuses to start:** check log at `/tmp/heavymetalindex-daemon.err.log`. Common cause: dirty git tree. Run `git status`; commit or stash pending changes; retry.

**Daemon runs but produces no output:** check `/tmp/heavymetalindex-daemon.out.log`. Common cause: branch divergence (daemon's `git pull --ff-only` fails). Manual fix: rebase or merge to clean state.

**Ingest fails on every paper:** check the cost ledger. If today's spend > ceiling, the daemon stops. Bump `HMI_INGEST_COST_CEILING` and reload.

**Routing audit reports 405 malformed sources:** these are pre-existing source pages with frontmatter issues. They don't block routing; they're queued for batch repair. See `data/evidence/routing_malformed.csv`.

**Firewall lint reports 261 errors:** mostly in `wiki/log.md` (the append-only log), which is acceptable. Real firewall breaches in other paths need fixing; the lint report at `data/evidence/autonomy/firewall-lint-<date>.md` enumerates them.

## Estimated end state

After 8 hours of the daemon at 10-paper batches with Sonnet 4.6:

- ~160 papers ingested (cost: ~$15-25)
- ~40-60 currently-BLOCKED cells moved to POOLING ENGINE PENDING or POOLED
- New gap-driven wishlist with ~150 queries for the next round
- 15 Cat 1 briefings regenerated each tick (16 times during the window)
- Audit-strengthened manual PDF reflecting the new evidence

This isn't full closure of all 139+274 = 413 documented cells. Full closure requires more corpus expansion than 8 hours allows (paywalled papers, regional surveys, niche commodity studies). But it's a meaningful 10-15% reduction in the documented gap, with each subsequent overnight cycle producing similar deltas.

Karen's next move after this window: review the morning report at `data/evidence/autonomy/morning-report-<date>.md`. New-page proposals and methodology-conflict flags surface there. Approve or correct as needed. Trigger the next 8-hour window when ready.
