#!/usr/bin/env bash
# Deliberate origin-divergence resolver for FRANK's push loop.
#
# The 15-min frank-sync timer is push-only and trips a circuit breaker after
# repeated non-fast-forward failures (origin moved ahead because another agent
# pushed). This is the ONE safe command to resolve that: rebase local work onto
# origin, push, and clear the breaker. It is kept OUT of the unattended timer on
# purpose — rebasing the repo's chronically-dirty tree is a deliberate act.
#
# Safe to run anytime. On a rebase conflict it aborts and restores the tree
# untouched, leaving the breaker tripped so nothing silently half-completes.
#
#   bash tools/autonomy/frank-resync.sh
set -uo pipefail

REPO="${HMI_REPO_ROOT:-$HOME/Desktop/heavy-metal-index}"
cd "$REPO" 2>/dev/null || { echo "frank-resync: repo not found at $REPO"; exit 1; }

STALLED="$HOME/.frank-sync.STALLED"
FAILS="$HOME/.frank-sync.fails"
LOG="$REPO/data/evidence/autonomy/frank-sync.log"
say() { echo "[$(date -u +%FT%TZ)] resync: $*" | tee -a "$LOG"; }

say "starting deliberate origin sync"
if ! git fetch origin 2>>"$LOG"; then
  say "fetch failed (network/auth) — breaker left tripped"
  exit 1
fi

behind=$(git rev-list --count main..origin/main 2>/dev/null || echo 0)
ahead=$(git rev-list --count origin/main..main 2>/dev/null || echo 0)
say "ahead=${ahead} behind=${behind}"

if [[ "$behind" != "0" ]]; then
  say "rebasing ${ahead} local commit(s) onto origin/main (--autostash for the dirty tree)"
  if ! git rebase --autostash origin/main >>"$LOG" 2>&1; then
    git rebase --abort >/dev/null 2>&1 || true
    say "REBASE CONFLICT — aborted, tree restored. Resolve by hand; breaker left tripped."
    exit 1
  fi
fi

ahead=$(git rev-list --count origin/main..main 2>/dev/null || echo 0)
if [[ "$ahead" != "0" ]]; then
  if git push origin main >>"$LOG" 2>&1; then
    say "pushed ${ahead} commit(s)"
  else
    say "push still failing after rebase (auth?) — breaker left tripped"
    exit 1
  fi
else
  say "nothing to push after rebase"
fi

rm -f "$STALLED"
echo 0 >"$FAILS"
say "breaker cleared — origin sync healthy"
