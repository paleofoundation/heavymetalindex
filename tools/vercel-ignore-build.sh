#!/usr/bin/env bash
# Vercel "Ignored Build Step" for Heavy Metal Index.
#
#   exit 1  =>  PROCEED with the build  (default / safe path)
#   exit 0  =>  SKIP the build          (Vercel cancels the deployment)
#
# Why this exists
# ---------------
# FRANK (the autonomous orchestrator) commits an orchestration-ledger entry
# under data/evidence/codex-runs/ on every cycle — including cycles where
# nothing was ingested ("codex fire ... no PDFs", "STOPPED EARLY ..."). Each
# such commit was triggering a full ~3-minute production rebuild of the entire
# wiki (~2,900 pages) plus 15 serverless functions. That deploy firehose
# (~140 builds/day, 24/7) is what tripped the Vercel account limit on
# 2026-06-08 and froze production for hours.
#
# No build/prebuild step reads data/evidence/codex-runs/ (it is written by
# tools/autonomy/ingest-with-codex.mjs, which is not in the build chain), so a
# commit that changes ONLY those ledgers cannot change the built site and is
# safe to skip.
#
# Policy: skip ONLY when every file changed by the tip commit lives under
# data/evidence/codex-runs/. Anything else, or any uncertainty, builds.

set -u

files="$(git diff --name-only HEAD^ HEAD 2>/dev/null)"
status=$?

# If we cannot determine what changed (first commit, shallow clone, git error),
# build — never skip on uncertainty.
if [ "$status" -ne 0 ] || [ -z "$files" ]; then
  echo "proceed: cannot determine changed files -> build"
  exit 1
fi

while IFS= read -r f; do
  [ -z "$f" ] && continue
  case "$f" in
    data/evidence/codex-runs/*) ;;  # ledger-only path; does not affect the build
    *) echo "proceed: build-relevant change ($f) -> build"; exit 1 ;;
  esac
done <<< "$files"

echo "skip: ledger-only commit (data/evidence/codex-runs/**) -> cancel build"
exit 0
