#!/usr/bin/env bash
# FRANK origin-sync — push FRANK's committed work to origin so new source pages
# reach the live site and other agents (Codex). Runs as its own launchd job on
# a timer, completely isolated from FRANK's ingest loop: a push failure here can
# never stall ingestion.
#
# PUSH-ONLY by design. It deliberately does NOT pull/rebase/autostash, because
# the repo chronically carries a large uncommitted regeneration pile and an
# autostash dance around it inside an unattended timer is exactly the kind of
# risky tree-mutation that caused silent deaths. Resolving a real divergence is
# a deliberate act, handled by tools/autonomy/frank-resync.sh — not here.
#
# CIRCUIT BREAKER (added 2026-06-05). The old version retried a failing push
# every fire forever: on 2026-06-04 it hammered a non-fast-forward push 155
# commits deep for ~7 hours, silently, because the failure only ever landed in
# this log and nothing watched it. Now: after N consecutive failures the breaker
# trips — we STOP attempting the push and drop a marker (~/.frank-sync.STALLED)
# that FRANK's heartbeat surfaces in FRANK-status.md. The push stays parked until
# a human or agent runs frank-resync.sh (which clears the breaker on success).
set -uo pipefail

REPO="${HMI_REPO_ROOT:-$HOME/Desktop/heavy-metal-index}"
cd "$REPO" 2>/dev/null || exit 0

LOG="$REPO/data/evidence/autonomy/frank-sync.log"
# Transient breaker state lives OUTSIDE the repo so 15-min retries never create
# commit churn. The marker is what FRANK-status.md reads to raise the alarm.
STALLED="$HOME/.frank-sync.STALLED"
FAILS="$HOME/.frank-sync.fails"
STOP_SYNC="$HOME/.frank-sync.STOP"   # pause just the push loop
STOP_ALL="$HOME/.frank.STOP"         # global FRANK pause (honored here too)
THRESHOLD=3                          # consecutive failures before the breaker trips

now() { date -u +%FT%TZ; }
fails() { local n; n=$(cat "$FAILS" 2>/dev/null); echo "${n:-0}"; }

# 1. Honor the pause switches — symmetric with FRANK's ~/.frank.STOP convention.
if [[ -f "$STOP_ALL" || -f "$STOP_SYNC" ]]; then
  exit 0
fi

# 2. Nothing to push ⇒ healthy. Any prior divergence is moot once we're caught
#    up (e.g. frank-resync.sh or another agent resolved it), so clear the breaker.
ahead=$(git log '@{u}..' --oneline 2>/dev/null | wc -l | tr -d ' ')
if [[ "${ahead:-0}" == "0" ]]; then
  [[ -f "$STALLED" ]] && { echo "[$(now)] caught up with origin — clearing breaker" >>"$LOG"; rm -f "$STALLED"; }
  echo 0 >"$FAILS"
  exit 0
fi

# 3. Breaker already tripped ⇒ STOP. Do not attempt the push; wait for the
#    deliberate resolver. This is the "stop hammering when it isn't working" rule.
if [[ -f "$STALLED" ]]; then
  echo "[$(now)] breaker tripped — NOT pushing ${ahead} commit(s); run tools/autonomy/frank-resync.sh" >>"$LOG"
  exit 0
fi

# 4. Attempt the push.
echo "[$(now)] pushing ${ahead} commit(s)" >>"$LOG"
if git push origin main >>"$LOG" 2>&1; then
  echo "[$(now)] push ok" >>"$LOG"
  echo 0 >"$FAILS"
  rm -f "$STALLED"
  exit 0
fi

# 5. Push failed ⇒ count the strike; trip the breaker at THRESHOLD.
n=$(( $(fails) + 1 ))
echo "$n" >"$FAILS"
echo "[$(now)] push failed (origin diverged or auth?) — strike ${n}/${THRESHOLD}" >>"$LOG"
if (( n >= THRESHOLD )); then
  {
    echo "origin-sync STALLED after ${n} consecutive push failures (last $(now))."
    echo "${ahead} local commit(s) are NOT on GitHub."
    echo "Recover: bash tools/autonomy/frank-resync.sh"
    echo "  (or resolve by hand, then: rm ${STALLED})"
  } >"$STALLED"
  echo "[$(now)] BREAKER TRIPPED — push parked until frank-resync.sh clears it" >>"$LOG"
fi
exit 0
