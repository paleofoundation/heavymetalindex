#!/bin/bash
# decision-digest.sh — out-of-session push of the "decisions waiting on you" queue.
#
# DETERMINISTIC — never calls a model. Safe by construction: it only reads the
# ledger and posts a notification. Intended to run from a launchd
# StartCalendarInterval job (NOT KeepAlive) so it fires once on a schedule and
# exits — categorically different from the model-spawning autonomy that caused
# the 2026-06-09 runaway.
#
# Enable (one command):
#   cp tools/outstanding/com.paleo.hmi.decision-digest.plist ~/Library/LaunchAgents/ \
#     && launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.paleo.hmi.decision-digest.plist
# Disable:
#   launchctl bootout gui/$(id -u)/com.paleo.hmi.decision-digest && rm ~/Library/LaunchAgents/com.paleo.hmi.decision-digest.plist

set -euo pipefail
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO"

OUT="$(node tools/outstanding/surface-decisions.mjs --brief 2>/dev/null || true)"
COUNT="$(node -e 'import("./tools/outstanding/lib.mjs").then(m=>console.log(m.pendingDecisions().length))' 2>/dev/null || echo 0)"

# persistent trail Karen can read any time
DIGEST_DIR="data/evidence/outstanding/digests"
mkdir -p "$DIGEST_DIR"
STAMP="$(date +%Y-%m-%d)"
{ echo "# Decision digest — $STAMP"; echo; echo "$OUT"; } > "$DIGEST_DIR/$STAMP.md"

# ephemeral push (macOS notification) only when something is actually waiting
if [ "${COUNT:-0}" -gt 0 ] 2>/dev/null; then
  /usr/bin/osascript -e "display notification \"$COUNT decision(s) waiting in the Heavy Metal Index ledger\" with title \"Outstanding items\" sound name \"Ping\"" 2>/dev/null || true
fi
echo "decision-digest: $COUNT pending; wrote $DIGEST_DIR/$STAMP.md"
