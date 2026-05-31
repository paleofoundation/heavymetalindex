#!/usr/bin/env bash
# FRANK origin-sync — push FRANK's committed work to origin so new source pages
# reach the live site and other agents (Codex). Runs as its own launchd job on
# a timer, completely isolated from FRANK's ingest loop: a push failure here can
# never stall ingestion.
#
# PUSH-ONLY by design. It deliberately does NOT pull/rebase/autostash, because
# the repo currently carries a large uncommitted regeneration pile (the dead
# daemon's stuck output) and an autostash dance around it is exactly the kind of
# risky tree-mutation that caused silent deaths. On a non-fast-forward (origin
# diverged because another agent pushed), this logs and skips; the next run
# catches up once the divergence is resolved by a deliberate sync pass.
set -uo pipefail

REPO="${HMI_REPO_ROOT:-$HOME/Desktop/heavy-metal-index}"
cd "$REPO" 2>/dev/null || exit 0
LOG="$REPO/data/evidence/autonomy/frank-sync.log"

# How many commits are we ahead of origin? (0 ⇒ nothing to do.)
ahead=$(git log '@{u}..' --oneline 2>/dev/null | wc -l | tr -d ' ')
if [[ "${ahead:-0}" == "0" ]]; then
  exit 0
fi

echo "[$(date -u +%FT%TZ)] pushing ${ahead} commit(s)" >>"$LOG"
if git push origin main >>"$LOG" 2>&1; then
  echo "[$(date -u +%FT%TZ)] push ok" >>"$LOG"
else
  echo "[$(date -u +%FT%TZ)] push failed (origin diverged or auth?); retry next run" >>"$LOG"
fi
