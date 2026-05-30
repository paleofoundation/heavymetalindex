#!/usr/bin/env bash
# hmi-health.sh — one-command honest health check for the autonomy daemon.
#
# Karen runs this any time she wants to know, in ten seconds, whether the
# "self-building" loop is actually alive and producing papers. It reads only
# hard signals (launchd state, git history, the live process table, the queue
# on disk) — no self-reporting, no trust-me. If a number here is bad, the
# system is genuinely unhealthy; there is nothing to spin.
#
# Usage:  bash tools/autonomy/hmi-health.sh
#         npm run health        (wired in package.json)

set -uo pipefail
REPO_ROOT="${HMI_REPO_ROOT:-$HOME/Desktop/heavy-metal-index}"
cd "$REPO_ROOT" || { echo "FATAL: cannot cd into $REPO_ROOT"; exit 1; }

NOW_UTC=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
GREEN="✅"; RED="❌"; WARN="⚠️ "
ok=0; bad=0

echo "════════════════════════════════════════════════════════════════"
echo " HEAVY METAL INDEX — AUTONOMY HEALTH   ($NOW_UTC)"
echo "════════════════════════════════════════════════════════════════"

# ── 1. launchd job: loaded? what was the last exit? ──────────────────
echo ""
echo "1) launchd scheduler"
PRINT=$(launchctl print "gui/$(id -u)/com.paleo.heavymetalindex.daemon" 2>/dev/null || true)
if [[ -z "$PRINT" ]]; then
  echo "   $RED daemon job NOT LOADED. Fix: launchctl bootstrap gui/\$(id -u) ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist"
  bad=$((bad+1))
else
  STATE=$(echo "$PRINT" | awk -F'= ' '/state =/{print $2; exit}')
  LASTEXIT=$(echo "$PRINT" | awk -F'= ' '/last exit code =/{print $2; exit}')
  KEEPALIVE=$(echo "$PRINT" | grep -c "keepalive" || true)
  echo "   state: ${STATE:-unknown}   last-exit: ${LASTEXIT:-n/a}"
  if echo "$PRINT" | grep -qi "keepalive"; then
    echo "   $GREEN KeepAlive supervision active (loop cannot silently die)"
    ok=$((ok+1))
  else
    echo "   $WARN no KeepAlive — running on calendar schedule (can wedge after a bad exit)"
  fi
fi

# ── 2. caffeinate keep-awake (so the Mac never sleeps the loop) ───────
echo ""
echo "2) keep-awake"
if pgrep -fq "caffeinate .* -s" || pgrep -xq caffeinate; then
  echo "   $GREEN caffeinate holding the Mac awake"
  ok=$((ok+1))
else
  echo "   $WARN caffeinate not running — Mac may sleep. Fix: launchctl bootstrap gui/\$(id -u) ~/Library/LaunchAgents/com.paleo.heavymetalindex.awake.plist"
fi

# ── 3. is a tick running RIGHT NOW, and is it ingesting? ──────────────
echo ""
echo "3) live activity"
TICKPROC=$(pgrep -fl "daemon-tick.sh" | grep -v pgrep | head -1 || true)
CLAUDE_WORKERS=$(pgrep -fc "claude --print" 2>/dev/null | tr -d ' ' || echo 0)
if [[ -n "$TICKPROC" ]]; then
  echo "   $GREEN tick running now; $CLAUDE_WORKERS Opus ingest worker(s) active"
  ok=$((ok+1))
else
  echo "   (no tick running this instant — normal between ticks; $CLAUDE_WORKERS workers)"
fi

# ── 4. heartbeat + last tick age ─────────────────────────────────────
echo ""
echo "4) tick cadence"
LASTLOG=$(ls -t data/evidence/autonomy/daemon-runs/tick-*.log 2>/dev/null | head -1 || true)
if [[ -n "$LASTLOG" ]]; then
  LASTLOG_EPOCH=$(stat -f %m "$LASTLOG" 2>/dev/null || echo 0)
  AGE_MIN=$(( ( $(date +%s) - LASTLOG_EPOCH ) / 60 ))
  echo "   last tick: $(basename "$LASTLOG")  (${AGE_MIN} min ago)"
  if (( AGE_MIN <= 45 )); then
    echo "   $GREEN cadence healthy (<=45 min)"
    ok=$((ok+1))
  elif (( AGE_MIN <= 120 )); then
    echo "   $WARN last tick ${AGE_MIN} min ago — watch; should be <=30-45 min when busy"
  else
    echo "   $RED last tick ${AGE_MIN} min ago — loop may be stalled. Check: tail '$LASTLOG'"
    bad=$((bad+1))
  fi
fi

# ── 5. papers produced (the actual deliverable) ──────────────────────
echo ""
echo "5) paper throughput (the deliverable)"
ING_1H=$(git log --since="1 hour ago"  --oneline 2>/dev/null | grep -cE "^[0-9a-f]+ ingest:" || true)
ING_24H=$(git log --since="24 hours ago" --oneline 2>/dev/null | grep -cE "^[0-9a-f]+ ingest:" || true)
FRESH_24H=$(git log --since="24 hours ago" --diff-filter=A --name-only --pretty=format: -- 'wiki/sources/*.md' 2>/dev/null | grep -c "wiki/sources/" || true)
echo "   ingest commits — last 1h: ${ING_1H}    last 24h: ${ING_24H}"
echo "   NEW source pages — last 24h: ${FRESH_24H}"
if (( ING_24H >= 20 )); then
  echo "   $GREEN producing"
  ok=$((ok+1))
elif (( ING_24H >= 1 )); then
  echo "   $WARN producing slowly — check queue (section 6) and worker errors"
else
  echo "   $RED zero papers in 24h — the loop is not delivering"
  bad=$((bad+1))
fi

# ── 6. fuel: PDFs waiting to be ingested ─────────────────────────────
echo ""
echo "6) queue (fuel)"
AUTOF=$(find raw/manual-fetch/seasonal-geographic-variance/auto-fetched -maxdepth 1 -name "*.pdf" -type f 2>/dev/null | wc -l | tr -d ' ')
READY=$(HMI_MFETCH_INGEST=1 node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=30 --dry-run 2>/dev/null | grep -oE "Processing [0-9]+ PDF" | grep -oE "[0-9]+" || echo "?")
echo "   auto-fetched (wishlist output): ${AUTOF} PDF(s)"
echo "   ready for next ingest tick:     ${READY} PDF(s)"
if [[ "$READY" == "0" ]]; then
  echo "   $WARN ingester has no fresh fuel — fetcher should refill next idle tick"
fi

# ── verdict ──────────────────────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════════════════"
if (( bad == 0 )); then
  echo " VERDICT: $GREEN HEALTHY  (${ok} green checks, 0 red)"
else
  echo " VERDICT: $RED ${bad} PROBLEM(S) — see ❌ above"
fi
echo " Recent ingest commits:"
git log --since="24 hours ago" --pretty=format:"   %ci  %s" 2>/dev/null | grep -E "ingest:" | head -6 || echo "   (none in 24h)"
echo ""
echo "════════════════════════════════════════════════════════════════"
exit 0
