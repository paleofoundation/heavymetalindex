#!/usr/bin/env bash
# Self-healing daemon — single iteration ("tick"). Called by launchd on a
# schedule; runs the gap detector + auto-fixer + structured extractor +
# wishlist generator + pooling engine + briefing regeneration, commits any
# changes, and pushes to origin. Exits cleanly if there's nothing to do.
#
# Halt switch: if ~/.heavymetalindex.STOP exists, the tick exits immediately
# without doing any work. To pause overnight runs: `touch ~/.heavymetalindex.STOP`.
# To resume: `rm ~/.heavymetalindex.STOP`.
#
# Log location: data/evidence/autonomy/daemon-runs/tick-<timestamp>.log
#
# Per OPERATING.md Part 3: the daemon is a self-directing system. Karen
# does NOT need to babysit it. New-page proposals and other genuinely
# Karen-side decisions surface in the morning report
# (data/evidence/autonomy/morning-report-<date>.md), not blocked on
# approval queues.

# errexit (-e) is deliberately OFF (2026-05-30). The tick is a sequence of
# independently-guarded steps: every `run_step` is followed by `|| true` or
# `|| log`, the preflight halts via explicit `if ... exit`, and durability comes
# from the mid-tick checkpoint commits + the EXIT-trap recovery. With -e ON, a
# SINGLE unguarded non-zero return — an empty-match `grep` in the morning-report
# block, a `find | wc` on an empty queue dir, a transient git race — aborted the
# ENTIRE tick before Step 8's commit/push ran, and the resulting non-zero exit
# made launchd stop firing the StartCalendarInterval triggers. That exact
# mechanism caused documented multi-hour silent deaths (05-26 ~16h, 05-29 ~13h);
# a tail-only `set +e` patch (commit 5c5269b) covered just the reporting block.
# Disarming -e for the whole body closes the class permanently. `-u` (unbound-
# var guard) and `-o pipefail` stay on; the one command that genuinely must
# succeed (cd into the repo) is guarded explicitly below now that -e no longer
# backstops it.
set -uo pipefail

REPO_ROOT="${HMI_REPO_ROOT:-$HOME/Desktop/heavy-metal-index}"
STOP_FILE="$HOME/.heavymetalindex.STOP"
LOG_DIR="$REPO_ROOT/data/evidence/autonomy/daemon-runs"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H-%M-%SZ")
LOG_FILE="$LOG_DIR/tick-$TIMESTAMP.log"
MORNING_REPORT="$REPO_ROOT/data/evidence/autonomy/morning-report-$(date +%Y-%m-%d).md"

mkdir -p "$LOG_DIR"

# ---------- Halt-switch check ----------
if [[ -f "$STOP_FILE" ]]; then
  echo "[$(date)] STOP file exists at $STOP_FILE; exiting without work." | tee -a "$LOG_FILE"
  exit 0
fi

# ---------- PID lock (added 2026-05-28 after observing 3 concurrent ticks
#                       in one day: 09:30, 10:04, 10:46. Concurrent ticks
#                       race on the tracker CSV, the routing audit CSV,
#                       and `git pull --rebase`. Each tick may also spawn
#                       up to 15 claude --print subprocesses, so two
#                       concurrent ticks = up to 30 simultaneous nested
#                       Opus sessions = real cost waste plus race on the
#                       same auto-fetched/Kimi PDFs.)
#
# The lock file holds the PID of the current tick. If the file exists AND
# the PID is still alive, exit immediately. If the file is stale (PID dead),
# overwrite and proceed.
LOCK_FILE="$REPO_ROOT/data/evidence/autonomy/daemon.lock"
if [[ -f "$LOCK_FILE" ]]; then
  OTHER_PID=$(cat "$LOCK_FILE" 2>/dev/null || echo "")
  if [[ -n "$OTHER_PID" ]] && kill -0 "$OTHER_PID" 2>/dev/null; then
    echo "[$(date)] Another daemon tick is running (PID $OTHER_PID); exiting without work." | tee -a "$LOG_FILE"
    exit 0
  fi
  # Stale lock — log and continue.
  echo "[$(date)] Stale lock file (PID $OTHER_PID no longer alive); claiming lock." | tee -a "$LOG_FILE"
fi
echo "$$" > "$LOCK_FILE"

# EXIT trap: release lock + best-effort recovery commit (2026-05-28).
#
# If Step 8's commit-and-push fails for any reason (merge conflict, hook
# abort, network blip), the working tree stays dirty and the next tick's
# preflight halts on "Working tree has real content edits." That's a
# silent-death mode: the daemon stops indefinitely until a human commits.
# This trap fires on EVERY exit path (success, set -e, signal) and attempts
# one final commit + push if anything is dirty. Idempotent — no-op when
# the tree is clean. Uses WIKI_EDIT_AUDIT_SKIP=1 because daemon writes
# are deterministic (sync-source-counts, briefing regens, etc.), not
# LLM-driven edits requiring source provenance.
cleanup_on_exit() {
  local exit_code=$?
  if [[ -n "$(git status --porcelain 2>/dev/null)" ]]; then
    # Bidirectional commit mutex: if a concurrent manual commit (or another
    # daemon process) holds the lock, skip the recovery sweep. Otherwise our
    # `git add -A` would scoop up the other commit's staged files, which is
    # the failure mode at commit 0740fec. The next daemon tick will commit
    # any remaining dirty state once the lock clears.
    if peek_lock >/dev/null 2>&1; then
      local holder
      holder=$(peek_lock 2>/dev/null || echo unknown)
      echo "[$(date -u +"%H:%M:%SZ")] EXIT trap (code=$exit_code): dirty tree but commit lock held by [$holder]; skipping recovery to avoid sweeping concurrent commits" | tee -a "$LOG_FILE" >/dev/null 2>&1 || true
    else
      if acquire_lock "daemon-exit-trap" 10; then
        echo "[$(date -u +"%H:%M:%SZ")] EXIT trap (code=$exit_code): dirty tree detected, attempting recovery commit" | tee -a "$LOG_FILE" >/dev/null 2>&1 || true
        # Scope to the daemon's EXACT output allowlist — NEVER `git add -A`,
        # and not even a blanket `data/`. A bare add-all swept a parallel
        # agent's in-flight quartz/ edits into a recovery commit (2026-05-29,
        # b40cb21, once the deadlock fix made the previously-aborting sweep
        # land); a blanket `data/` would likewise stomp the grants agent's
        # data/workbench/grants/ and the manually-authored standards-book.
        # The daemon only ever writes data/evidence/, data/workbench/briefings/
        # and wiki/ (verified against its own commits). add of a directory
        # still stages new untracked files within it (e.g. new wiki/sources
        # pages), so nothing daemon-made is missed.
        git add -- data/evidence data/workbench/briefings wiki >/dev/null 2>&1 || true
        # HMI_SKIP_COMMIT_LOCK=1: this trap ALREADY holds the commit lock
        # (acquire_lock above). Without telling the pre-commit hook to skip
        # its own acquire, the hook (a child process) would block on the
        # lock we hold, time out after 60s, and abort this recovery commit.
        # This self-deadlock was introduced with the commit mutex (a536009)
        # and silently broke every daemon commit path.
        HMI_SKIP_COMMIT_LOCK=1 WIKI_EDIT_AUDIT_SKIP=1 git commit -m "autonomy: daemon tick $TIMESTAMP — exit-trap recovery (exit_code=$exit_code)" >/dev/null 2>&1 || true
        git push origin "$(git branch --show-current 2>/dev/null || echo main)" >/dev/null 2>&1 || true
        release_lock
      else
        echo "[$(date -u +"%H:%M:%SZ")] EXIT trap (code=$exit_code): could not acquire commit lock; skipping recovery" | tee -a "$LOG_FILE" >/dev/null 2>&1 || true
      fi
    fi
  fi
  rm -f "$LOCK_FILE"
}
trap cleanup_on_exit EXIT INT TERM

# Source the commit-lock helper. acquire_lock / release_lock / peek_lock are
# defined there. Used by the EXIT trap above and by Step 8's commit phase.
# shellcheck source=./commit-lock.sh
source "$REPO_ROOT/tools/autonomy/commit-lock.sh"

# Guarded explicitly because errexit is off (see top-of-file note): if we cannot
# enter the repo, every git/node command below would run against the wrong tree,
# so this is the one place a hard failure must stop the tick.
cd "$REPO_ROOT" || { echo "[$(date -u +"%H:%M:%SZ")] FATAL: cannot cd into repo root $REPO_ROOT; aborting tick." | tee -a "$LOG_FILE"; exit 1; }

# Source local secrets (.env.development is gitignored; holds AI_GATEWAY_API_KEY
# for the dual-model verifier + extractor CLIs). Silently no-ops if missing.
# 2026-05-28: added so tools/autonomy/dual-model-verify-recent.mjs can call
# the AI Gateway from the daemon path without per-invocation env injection.
if [[ -f "$REPO_ROOT/.env.development" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.env.development"
  set +a
fi

# ---------- Function helpers ----------

log() {
  echo "[$(date -u +"%H:%M:%SZ")] $*" | tee -a "$LOG_FILE"
}

run_step() {
  local label="$1"
  shift
  log "=== $label ==="
  if "$@" 2>&1 | tee -a "$LOG_FILE"; then
    log "OK: $label"
    return 0
  else
    log "FAIL: $label (exit $?)"
    return 1
  fi
}

# run_bounded SECS CMD... — run CMD under a wall-clock bound, SIGKILLing its
# WHOLE process group on overrun (not just the parent, so npm->node children
# die too). macOS ships no `timeout`/`gtimeout`/`setsid`, so this uses perl:
# fork, put the child in its own process group (setpgrp), alarm(SECS), and on
# timeout kill("-KILL", pid) the negative pid = the group. Returns the child's
# real exit code on a clean finish, or 124 on timeout. Added 2026-05-31 after
# the unbounded gap-driven wishlist step hung on exit and wedged a tick ~18h.
run_bounded() {
  local secs="$1"; shift
  perl -e '
    my $t = shift @ARGV;
    my $pid = fork();
    if ($pid == 0) { setpgrp(0,0); exec @ARGV; exit 127; }
    $SIG{ALRM} = sub { kill("-KILL", $pid); exit 124; };
    alarm $t;
    waitpid($pid, 0);
    exit($? >> 8);
  ' "$secs" "$@"
}

# checkpoint_commit — commit the daemon's accumulated work MID-TICK so a
# later kill does not strand it.
#
# Root cause this fixes (diagnosed 2026-05-29): macOS sends SIGTERM to
# launchd jobs when the machine sleeps / the lid closes. Ticks run 20-40 min
# (manual-fetch Opus spawns, codex 18-min ingest, wishlist fetch of thousands
# of queries), so a tick is almost always mid-flight when sleep hits. With
# ALL commits gated at Step 8 (the very end), a mid-tick SIGTERM lost the
# entire tick's work AND left a dirty tree that the next tick's preflight
# refused to run on -> permanent stall (observed: 13h on 05-29, 16h on
# 05-26; ZERO clean Step-8 daemon commits in the 2 days prior to this fix).
#
# Committing after each major phase converts "lose everything + stall" into
# "durable incremental progress + clean tree for the next tick".
#
# Uses WIKI_EDIT_AUDIT_SKIP=1 because the daemon's wiki writes are
# deterministic regenerations (page-history tables, source-legend baselines,
# sync-source-counts, mandatory-section placeholders), not LLM content edits
# requiring per-claim provenance — the same rationale the EXIT-trap recovery
# commit already documents. LLM sub-sessions (manual-fetch ingest, audit
# drain, synthesis promote) commit their own provenance-bearing work
# separately, before this runs.
#
# set -e safe: always returns 0.
checkpoint_commit() {
  local label="$1"
  if [[ -z "$(git status --porcelain 2>/dev/null)" ]]; then
    return 0
  fi
  if acquire_lock "daemon-checkpoint:${label}" 30; then
    git add -- data/evidence data/workbench/briefings wiki >/dev/null 2>&1 || true   # exact daemon-output allowlist — never sweep foreign edits (see exit-trap note)
    # HMI_SKIP_COMMIT_LOCK=1: we hold the lock; stop the pre-commit hook from
    # self-deadlocking on it (see exit-trap note above).
    if HMI_SKIP_COMMIT_LOCK=1 WIKI_EDIT_AUDIT_SKIP=1 git commit -m "autonomy: checkpoint [$label] $TIMESTAMP" >/dev/null 2>&1; then
      log "checkpoint [$label]: committed"
    else
      log "checkpoint [$label]: nothing to commit"
    fi
    release_lock
  else
    log "checkpoint [$label]: commit lock held by another process; deferring"
  fi
  return 0
}

# ---------- Tick ----------

log "Daemon tick start. Repo: $REPO_ROOT. Branch: $(git branch --show-current)"

# Heartbeat: drop a timestamp so a separate watchdog (or human) can tell
# whether the daemon is alive without reading tick logs. If this file gets
# stale (>2 ticks worth, ~75 min), something is wrong.
HEARTBEAT_FILE="$REPO_ROOT/data/evidence/autonomy/heartbeat.txt"
echo "$TIMESTAMP" > "$HEARTBEAT_FILE"

# Refuse to run if the working tree has REAL content edits we didn't make.
# Transient autonomy artifacts (the routing audit, the queue/tracker CSVs,
# autonomy/ working files) are expected to be dirty mid-multi-agent-operation
# and don't justify halting the daemon. Content edits to wiki/, docs/, tools/,
# CLAUDE.md, OPERATING.md, AGENTS.md, package.json, or .gitignore DO justify
# halting because those are Karen's or another agent's in-flight content work
# that the daemon must not sweep up into its own commits.
#
# This relaxed check landed 2026-05-17 after Karen discovered the daemon had
# silently halted at 12:50 because its own heartbeat write left the tree
# dirty. Heartbeat is now gitignored; this check is the second layer of
# defense for the multi-agent (daemon + Codex + Claude Code) operation
# Karen runs in parallel during sprints.
# Transient paths the daemon's own steps write between ticks. These are
# deterministic daemon outputs (sync-source-counts, briefing regens,
# evidence-extractor outputs, sprint-status) — not LLM content edits.
# The pull step's --autostash handles them; if a previous tick's commit
# step failed, they sit dirty but the next tick's autostash + Step 8
# commit recovers without blocking.
TRANSIENT_PATHS='data/evidence/|data/workbench/|wiki/briefings/weekly-|wiki/sprint-status\.md|wiki/(ingredients|products|metals|regulations)/index\.md'
# Sprint-mode 2026-05-25 update: untracked wiki/sources/*.md files no longer
# block the daemon. The Marker bulk ingester (and Codex's parallel ingest)
# can leave source pages in an uncommitted state if their cite-keys fail
# downstream lint. Treating them as "another agent mid-work" caused a 2-hour
# daemon halt; instead they are auto-cleared at end of tick (committed
# successfully or moved to data/evidence/quarantine/) via Step 8 below.
UNTRACKED_SOURCES='^\?\? wiki/sources/'
REAL_DIRTY=$(git status --porcelain | grep -vE "^.. ($TRANSIENT_PATHS)" | grep -vE "$UNTRACKED_SOURCES" || true)
if [[ -n "$REAL_DIRTY" ]]; then
  # Self-heal (2026-05-29). The old behavior here was an unconditional
  # `exit 0` on any non-transient dirt. That is correct when another agent
  # is editing CODE/CONFIG, but it is catastrophic when the dirt is just a
  # previous tick's uncommitted wiki/data regeneration work: the daemon
  # refuses every subsequent tick until a human commits, which is the exact
  # multi-hour stall failure mode observed 2026-05-26..29 (a mid-tick
  # SIGTERM-on-sleep leaves the tree dirty; the EXIT trap's recovery push
  # often cannot finish before the machine sleeps).
  #
  # Discriminator: any dirty path under tools/, docs/, api/, .github/,
  # quartz config, or the root governance/build files = real in-flight
  # code/config work by a human or another agent -> refuse, as before.
  FOREIGN_DIRTY=$(git status --porcelain | grep -E "^.. \"?(tools/|docs/|api/|\.github/|quartz|package(-lock)?\.json|tsconfig|vercel\.json|CLAUDE\.md|OPERATING\.md|AGENTS\.md|\.gitignore)" || true)
  if [[ -n "$FOREIGN_DIRTY" ]]; then
    # 2026-05-30 (Opus 4.8) — DO NOT refuse the whole tick on foreign edits.
    # This `exit 0` is the second reason the daemon barely ran for weeks: with
    # 3-4 Claude Code sessions constantly editing tools/, api/, quartz/, the
    # tree is almost never clean during the day, so refusing here meant the
    # INGESTER — the entire point of the tick — almost never ran while anyone
    # was working. The original fear (the daemon sweeping a sibling's in-flight
    # code edit into its own commit) is already structurally impossible: every
    # daemon commit is scoped to `git add -- data/evidence data/workbench/
    # briefings wiki` and serialized behind the commit lock, so a foreign
    # tools/ edit can never be staged or committed by this process. The one
    # genuinely unsafe operation is `git pull --rebase --autostash`, whose
    # autostash momentarily reverts ALL tracked working-tree files (including
    # the foreign edit) for the duration of the rebase. So: PROCEED with the
    # tick (ingest + deterministic regen) but set a flag that SKIPS the
    # autostash-pull, leaving the sibling's working tree untouched. The
    # daemon's local commits persist and push on a later clean tick (rebased
    # then), so nothing is lost — only visibility is deferred until the
    # sibling commits. This restores daytime/concurrent liveness; the KeepAlive
    # plist (committed a062dc8) restores overnight liveness.
    log "Foreign code/config edits present; proceeding WITHOUT git-pull (autostash would disturb them). Ingest + regen still run; commits stay scoped + lock-serialized."
    log "$FOREIGN_DIRTY"
    SKIP_PULL_FOREIGN_DIRT=1
  fi
  # All non-transient dirt is wiki/ + data/ regeneration leftovers. If the
  # commit lock is held, defer to that holder. Otherwise a previous tick
  # died before committing — recover it so this tick starts clean.
  if peek_lock >/dev/null 2>&1; then
    log "Non-transient wiki/data dirt present but commit lock is held; deferring this tick to the lock holder."
    exit 0
  fi
  log "Self-heal: previous tick left uncommitted wiki/data regeneration work (no foreign code/config edits, no lock holder). Recovering before proceeding."
  log "$REAL_DIRTY"
  if acquire_lock "daemon-selfheal" 30; then
    git add -- data/evidence data/workbench/briefings wiki >/dev/null 2>&1 || true   # exact daemon-output allowlist — never sweep foreign edits (see exit-trap note)
    # HMI_SKIP_COMMIT_LOCK=1: we hold the lock; stop the pre-commit hook from
    # self-deadlocking on it (see exit-trap note above).
    HMI_SKIP_COMMIT_LOCK=1 WIKI_EDIT_AUDIT_SKIP=1 git commit -m "autonomy: self-heal recovery of prior tick's uncommitted work — $TIMESTAMP" 2>&1 | tee -a "$LOG_FILE" || log "self-heal: nothing to commit"
    release_lock
  else
    log "Self-heal: could not acquire commit lock; deferring this tick."
    exit 0
  fi
fi
if [[ -n "$(git status --porcelain)" ]]; then
  log "Transient autonomy artifacts dirty; daemon proceeding (these regenerate as part of the tick)."
fi

# Pull latest origin so we don't push stale work.
# 2026-05-28: switched from --ff-only to --rebase. With Paperclip pushing
# concurrently from a different working environment, --ff-only failed on
# every divergence and skipped entire ticks — leaving Frank silent for
# days. --rebase replays local autonomy commits on top of remote; conflicts
# fall through to the catch block and skip cleanly (still rare since the
# daemon's writes are mostly to transient files Paperclip doesn't touch).
# Second 2026-05-28 update: added --autostash. Without it, the daemon was
# bailing on every tick whose preflight detected transient-only dirty files
# (which the preflight explicitly tolerates) because git pull --rebase
# refuses to run with unstaged changes. --autostash stashes the transient
# dirties, rebases, then pops them. If pop conflicts (rare; transient files
# regenerate anyway), the rebase still landed and the tick proceeds with
# whatever state pop left behind.
if [[ "${SKIP_PULL_FOREIGN_DIRT:-0}" == "1" ]]; then
  # Foreign code/config edits are present in the working tree (set above).
  # Skip the autostash-pull so we never disturb a sibling session's in-flight
  # edit. The tick still ingests + regenerates; commits stay scoped + lock-
  # serialized; the end-of-tick push reconciles when it can (or a later clean
  # tick's pull --rebase replays our local commits onto origin).
  log "Skipping git pull this tick (foreign code/config edits present; autostash would disturb them)."
else
  run_step "git pull --rebase" git pull --rebase --autostash origin "$(git branch --show-current)" || {
    log "git pull failed (likely a real conflict, not just divergence); skipping this tick."
    exit 0
  }
fi

# Step 1: refresh routing audit (catches new sources, refreshes fan-out)
run_step "routing audit" node tools/evidence/build-routing-audit.mjs || true

# Step 1b: auto-create missing pages for unresolved targets (per OPERATING.md
# Part 3: no approval gates; stubs are reversible and the synthesis pass fills
# them in as sources accumulate). Runs AFTER the routing audit, so it acts on
# the latest unresolved list; the routing audit re-runs in step 1c to
# re-evaluate routing now that the new pages exist.
run_step "create-missing-pages" node tools/autonomy/create-missing-pages.mjs || true

# Step 1c: re-run routing audit after stub creation so any newly-resolvable
# targets get product_source_routing_audit.csv updates in the same tick.
run_step "routing audit (refresh)" node tools/evidence/build-routing-audit.mjs || true

# Step 2: heal-gaps — auto-fixes safe gaps (missing primary_metals_of_concern,
# routing-typo proposals), queues synthesis work
run_step "heal-gaps" node tools/autonomy/heal-gaps.mjs || true

# Step 3: source-page → structured-CSV extractor
run_step "extract-source-values" node tools/autonomy/extract-source-values.mjs || true

# Step 3b: autonomous Marker-corpus ingest (Phase 1 v0). Bounded to a small
# batch per tick so a stuck ingest does not block the rest of the loop.
# Disable by setting HMI_AUTONOMOUS_INGEST=0 in launchd env. Default model is
# Haiku 4.5 for cost; bump to Sonnet 4.6 by setting HMI_INGEST_MODEL.
INGEST_ENABLED="${HMI_AUTONOMOUS_INGEST:-0}"
# Disabled by default 2026-05-25 evening: the Marker bulk ingester was the
# source of off-scope junk pages (aflatoxin sensors, ICP-MS methods for
# human albumin, soil-mercury methods studies, bacillus-cereus DNA detection)
# that blocked the daemon's dirty-tree check for 2+ hours when their bad
# cite-keys failed downstream commits. Karen explicitly rejected the 23K
# Marker corpus as noise; the wishlist-driven OA pipeline (gap-driven →
# fetcher → Codex ingest) is the signal path. Re-enable with
# HMI_AUTONOMOUS_INGEST=1 only after relevance pre-filtering is added.
INGEST_MAX="${HMI_INGEST_MAX_PAPERS:-30}"
INGEST_MODEL="${HMI_INGEST_MODEL:-claude-haiku-4-5-20251001}"
INGEST_PRIORITY="${HMI_INGEST_PRIORITY:-P1,P2}"
if [[ "$INGEST_ENABLED" == "1" ]]; then
  run_step "ingest-marker-batch" node tools/autonomy/ingest-marker-batch.mjs \
    "--max-papers=$INGEST_MAX" "--priority=$INGEST_PRIORITY" "--model=$INGEST_MODEL" || true
fi

# Step 3c: autonomous manual-fetch (MFK/MR/PCMF) ingest — Cochrane-quality
# pass over the 335 hand-curated PDFs Karen dropped into the three manual-
# fetch folders. Per-PDF workflow: read, identity-check against existing
# wiki/sources/ via DOI/handle/cite-key, write fresh OR merge-enhance,
# spawn fresh-context audit subagent via Agent tool, apply audit findings,
# commit. Bounded to small batch per tick to keep tick wall-time stable.
# Disable by setting HMI_MFETCH_INGEST=0. Default model is Opus 4.7 because
# this work is judgment-heavy (Cochrane bar); the merge-enhance and audit-
# application steps need stronger model than the Marker bulk draft.
MFETCH_ENABLED="${HMI_MFETCH_INGEST:-1}"
# Bumped 2026-05-25 from 2 → 15 for sprint. Opus 4.7 is the Cochrane-bar
# judgment model; rate-limit risk caps this lower than the Marker bulk.
MFETCH_MAX="${HMI_MFETCH_MAX_PDFS:-30}"
MFETCH_MODEL="${HMI_MFETCH_MODEL:-claude-opus-4-7}"
# Parallelism (added 2026-05-28). Workers run claude --print concurrently.
# Default 3 — safe on a 16 GB Mac. Each spawn = ~500 MB RAM + moderate CPU.
# Tracker file is the race-safe claim surface.
MFETCH_CONCURRENCY="${HMI_MFETCH_CONCURRENCY:-3}"
if [[ "$MFETCH_ENABLED" == "1" ]]; then
  run_step "ingest-manual-fetch-batch" node tools/autonomy/ingest-manual-fetch-batch.mjs \
    "--max-pdfs=$MFETCH_MAX" "--model=$MFETCH_MODEL" "--concurrency=$MFETCH_CONCURRENCY" || true
fi

# Step 3c.6: remediation-record extraction (added 2026-05-31). Captures the
# DRIVER / INTERVENTION surface — what raises or lowers heavy-metal
# contamination across the supply chain (soil pH, paddy water management,
# amendments, microbial inoculation, cultivar, fertilizer inputs, regional
# low-load anomalies) — from remediation-relevant source pages into
# data/evidence/remediation_register.jsonl, graded A/B/C with confounders and
# what-would-confirm on every lead. This serves HMTc Governing Principle 1
# (drive contamination down through reformulation and sourcing improvement);
# occurrence extraction alone discards it. Spawns claude --print like the
# ingest step, so it is capped low (default 2/tick) and chews through the
# ~661 remediation-relevant sources over time plus any newly ingested ones.
# The dataset/page rebuild is deterministic and runs every tick so new
# records surface immediately. Disable with HMI_REMEDIATION_EXTRACT=0.
REMED_ENABLED="${HMI_REMEDIATION_EXTRACT:-1}"
REMED_MAX="${HMI_REMEDIATION_MAX:-2}"
if [[ "$REMED_ENABLED" == "1" ]]; then
  run_step "remediation extract" node tools/evidence/extract-remediation-records.mjs "--max=$REMED_MAX" || true
fi
run_step "remediation dataset" node tools/evidence/build-remediation-dataset.mjs || true

# Step 3c.5: completion-matrix snapshot — measures (ingredient × analyte)
# cell progress toward the 95% confidence target. Drives the cell-targeted
# wishlist generation downstream. Idempotent; <1s runtime.
run_step "completion matrix" node tools/autonomy/completion-matrix.mjs || true

# Step 3c.6: sprint dashboard — single readable page Karen opens in Obsidian
# to see live progress. Reads the completion matrix, audit queue, wishlist
# state, daemon heartbeat, git state; writes wiki/sprint-status.md.
# Also appends to data/evidence/sprint-history.jsonl for velocity tracking.
run_step "sprint dashboard" node tools/autonomy/sprint-dashboard.mjs || true

# Step 3d: auto-fetched/ hygiene sweep. Moves PDFs out of auto-fetched/
# once dispositioned so Codex and the daemon do not waste fires re-triaging
# stale skips and dedup rollups. Idempotent. Anything moved here got there
# via wishlist-fetch-audit.csv decision (skip:*/fail:*/ingested) or because
# a wiki/sources/*.md page already references it. PDFs with no disposition
# stay in auto-fetched/ — that's the real work queue. See
# tools/autonomy/auto-fetched-hygiene.mjs for full rules.
run_step "auto-fetched hygiene" node tools/autonomy/auto-fetched-hygiene.mjs --report || true

# Step 4: pooling engine refresh
run_step "pooling engine" node tools/evidence/build-hmtc-aggregate-distributions.mjs || true

# Step 3d: Codex/ChatGPT-5.x parallel ingest — runs the canonical sprint-
# ingest-prompt against the auto-fetched/ residual queue using Karen's
# ChatGPT Plus subscription (no API tokens). Replaces the manual external-
# scheduler paste. Claude/Opus owns the curated folders + auto-fetched
# residual cap (3/tick); Codex owns auto-fetched as primary consumer
# with the race-safe claim system in the prompt. Disable with
# HMI_CODEX_INGEST=0. Default timeout 18 min.
#
# Cost: zero API tokens — runs via Karen's ChatGPT login at
# ~/.codex/auth.json. Cadence is every tick; if cost becomes a concern
# bump HMI_CODEX_INGEST_EVERY_N to limit firings.
if [[ -x "/Applications/Codex.app/Contents/Resources/codex" ]] && [[ "${HMI_CODEX_INGEST:-1}" != "0" ]]; then
  run_step "ingest-with-codex" node tools/autonomy/ingest-with-codex.mjs --timeout-mins=18 || true
fi

# Step 4a: synthesis writer — copy pooled literature percentiles
# (pooled_p10/p90/p95) from the aggregate CSV back into ingredient-page
# contamination_profile blocks. Per CLAUDE.md Part 9 + the firewall in
# Part 2, this publishes literature-native values only; HMTc percentile
# descriptive distribution fields stay contextual and never become certification-limit selectors.
# No-downgrade guard: pages with prior synthesis n_studies > pooled
# sources_contributing are left alone (incomplete structured extraction
# means values.jsonl is a narrower view than the wider read).
run_step "synthesis writer" node tools/autonomy/populate-contamination-profile.mjs || true

# Step 4b: firewall lint — fails the tick log if any wiki/HMTc firewall
# violation appears on a public page. Does not block the rest of the tick
# (we want briefings to regenerate even if a stray violation appears), but
# the failure surfaces in the daemon log and the per-day report so it gets
# fixed before it accumulates.
run_step "firewall lint" node tools/autonomy/firewall-lint.mjs || log "WARN: firewall lint reported ERROR violations; see data/evidence/autonomy/firewall-lint-*.md"

# Step 4c: firewall fix — re-applies the bulk firewall rewrites every tick so
# regressions never accumulate. Idempotent: zero changes after the first
# clean pass.
run_step "firewall fix" node tools/autonomy/firewall-fix.mjs || true

# Step 4d: mandatory-sections audit + autofill — ensures every non-stub
# ingredient and product page carries the required H2 sections per CLAUDE.md
# Part 6. Idempotent: any missing section gets a "Pending synthesis"
# placeholder. Future synthesis ticks replace the placeholder with content.
run_step "mandatory sections" node tools/autonomy/mandatory-sections.mjs || true

# Step 4d.1: source-legend programmatic baseline fill — populates the
# "Used on this page for" column on every product/ingredient/metal page's
# hmi-source-legend table from each source's frontmatter. Idempotent;
# only touches literal `*[awaiting synthesis]*` placeholders. Brings new
# pages to a passing-baseline state immediately so the live site doesn't
# show placeholder text. Per-cell Opus-grade deepening remains a separate
# orchestrator action (POPULATE-SOURCE-LEGEND).
run_step "source-legend baseline" node tools/autonomy/populate-source-legends.mjs || true

# Step 4d.2: sync the `sources: N` frontmatter field on every ingredient,
# product, and metal page to the live count of source pages referencing
# it (via frontmatter array or body wikilink). Also rewrites the
# "(N sources)" counts in each category index.md. Per Karen's 2026-05-16
# directive: the count is the at-a-glance gap-visibility signal —
# stale counts mislead brand-legal and HMTc staff scanning for thin areas.
run_step "sync source counts" node tools/sync-source-counts.mjs || true

# Step 4d.3: lever-gap detector — scans every product page's "Levers to reduce
# contamination" / "## Mitigation options" section for un-evidenced lever
# magnitudes, and emits (a) data/evidence/autonomy/lever-gaps.csv and (b)
# data/evidence/autonomy/lever-mitigation-queries.json (targeted intervention-
# efficacy / source-apportionment queries consumed by the lever-mitigation fetch
# in Step 5b.2). Read-only vs wiki/; idempotent; <1s.
run_step "lever-gaps detector" node tools/autonomy/lever-gaps.mjs || true

# Step 4e: provenance audit — informational. Flags numerical claims on public
# pages that don't trace to a [[sources/...]] link in the same paragraph.
# Per CLAUDE.md Part 18, claims without provenance are a lint failure; this
# tool surfaces the backlog so synthesis sessions can fix it incrementally.
run_step "provenance audit" node tools/autonomy/provenance-audit.mjs || true

# Step 4f: link orphans — append any product/ingredient/metal/regulation page
# not yet listed in its per-category index to a marker-managed "Auto-linked
# stubs" section at the bottom. Idempotent.
run_step "link orphans" node tools/autonomy/link-orphans.mjs || true

# Step 4g: brand-facing evidence artifacts — regenerate the per-page evidence
# packet index, the regulations dataset, and the Certification Defense Dossiers
# so the COMMITTED brand deliverables stay faithful to the corpus this tick.
# The served copies are also rebuilt at deploy (npm prebuild), but the daemon
# is the continuous-ingest engine, so without this the git-committed dossiers
# would lag the corpus between deploys — a stale litigation artifact. Order
# matters: build-defense-dossier.mjs JOINS the evidence-packet index (content
# pins) and the regulations dataset (caps), so both must rebuild first. All
# three outputs land under the daemon's commit allowlist (data/evidence, wiki).
run_step "contamination dataset" node tools/build-contamination-dataset.mjs || true
run_step "evidence-packet index" node tools/build-evidence-packet-index.mjs || true
run_step "regulations dataset" node tools/build-regulations-dataset.mjs || true
run_step "defense dossiers" node tools/build-defense-dossier.mjs || true
run_step "change-watch feed" node tools/build-change-watch.mjs || true
run_step "lab-comparator context" node tools/evidence/build-lab-comparator-context.mjs || true
run_step "category risk maps" node tools/build-category-risk-maps.mjs || true
run_step "brand dossier pages" node tools/build-brand-dossier-pages.mjs || true

# ---------- CHECKPOINT 1: commit the deterministic regeneration phase ----------
# Everything above (routing audit, page creation, heal-gaps, extraction,
# manual-fetch + codex ingest, pooling, synthesis writer, firewall fix,
# mandatory sections, source legends, sync counts, provenance, orphans)
# completes within the first few minutes and is the bulk of the per-tick
# wiki churn. Commit it NOW so the slow, kill-prone tail below (wishlist
# fetch of thousands of queries, weekly briefing, synthesis/audit drains,
# Cat-1 briefing regen) cannot strand it as a dirty tree when the machine
# sleeps and macOS SIGTERMs the tick.
checkpoint_commit "deterministic-phase"

# Step 5: gap-driven wishlist (queries for thin cells)
run_step "gap-driven wishlist" node tools/autonomy/gap-driven-wishlist.mjs || true

# Step 5b: actually fetch the wishlist's top OA-licensed candidates from
# OpenAlex. Default-on as of 2026-05-17 per Karen's directive that data
# acquisition should not gate on her — the OA papers are free, polite-rate-
# limited, and self-deduping against wiki/sources/.
#
# Cadence guard: only fire during the single tick that crosses 09:xx UTC
# each day, so OpenAlex sees one fetch sweep per 24h rather than 48 sweeps.
# The 30-min tick interval means there are exactly two ticks landing in
# the 09:xx hour (09:00-09:29 and 09:30-09:59). We pick the first by
# requiring minute < 30.
#
# HMI_AUTONOMOUS_FETCH=0 disables; HMI_AUTONOMOUS_FETCH=always fires every
# tick (debugging/backfill only).
FETCH_ENABLED="${HMI_AUTONOMOUS_FETCH:-1}"
# Sprint mode 2026-05-25: removed the 09:xx UTC daily window. Fetcher now
# fires every tick (48× per day). OpenAlex politeness limit (10 req/sec)
# is plenty for the 50-200 query batches per tick; publisher fetches do
# include their own 500ms-per-fetch backoff. Set HMI_AUTONOMOUS_FETCH=0
# to disable entirely; HMI_AUTONOMOUS_FETCH=daily to revert to the
# old once-a-day window.
DAILY_FETCH_WINDOW=1  # always-on in sprint mode
if [[ "${HMI_AUTONOMOUS_FETCH:-1}" == "daily" ]]; then
  CURRENT_HOUR_UTC=$(date -u +%H)
  CURRENT_MINUTE_UTC=$(date -u +%M)
  DAILY_FETCH_WINDOW=0
  if [[ "$CURRENT_HOUR_UTC" == "09" ]] && (( 10#$CURRENT_MINUTE_UTC < 30 )); then
    DAILY_FETCH_WINDOW=1
  fi
fi
if [[ "$FETCH_ENABLED" == "always" ]] || { [[ "$FETCH_ENABLED" == "1" ]] && [[ "$DAILY_FETCH_WINDOW" == "1" ]]; }; then
  # Batch-mode fetcher gate (added 2026-05-28): only fetch when the auto-
  # fetched queue is below FLOOR. This gives Karen observable batch cycles
  # (queue grows after fetch → drains over a few ticks → refills) instead
  # of opaque continuous accumulation. FLOOR default 30; raise via
  # HMI_AUTO_FETCHED_FLOOR.
  AUTO_FETCHED_FLOOR="${HMI_AUTO_FETCHED_FLOOR:-30}"
  # 2026-05-29 bug-fix: previously `ls *.pdf 2>/dev/null | wc -l`. When the
  # directory has zero PDFs (which happens any time ingest fully drains the
  # batch — e.g. the 05:17 UTC tick that drained from 25→0), the glob fails
  # to expand, ls exits 2, `set -o pipefail` propagates non-zero, and the
  # script's `set -e` aborts the whole tick. The EXIT trap then records
  # LastExitStatus=1 with launchd, which STOPS firing the StartCalendar-
  # Interval triggers altogether. That's why the daemon died silently for
  # 13 hours on 2026-05-29 between 07:20 and 20:04 UTC despite being
  # "alive" in launchctl list. `find` returns 0 on empty matches, which
  # makes the pipeline pipefail-safe.
  AUTO_FETCHED_NOW=$(find "$REPO_ROOT/raw/manual-fetch/seasonal-geographic-variance/auto-fetched" -maxdepth 1 -name "*.pdf" -type f 2>/dev/null | wc -l | tr -d ' ')
  log "Auto-fetched queue: $AUTO_FETCHED_NOW PDFs (floor=$AUTO_FETCHED_FLOOR)"
  if (( AUTO_FETCHED_NOW < AUTO_FETCHED_FLOOR )); then
    log "Below floor — refilling batch via gap-driven wishlist."
    # 2026-05-28 bug-fix: previously this ran BOTH wishlist:fetch (parse-
    # wishlist.mjs's 40 rice/cocoa/wheat anchor queries) AND wishlist:gap-
    # driven (build-targeted-queries.mjs's 2747 cross-category queries).
    # parse-wishlist.mjs overwrites wishlist-queries.json with the 40-query
    # subset; the daemon's wall-clock budget then often kills the tick
    # before gap-driven runs, so find-candidates re-queries rice every
    # tick and downloads 0 new PDFs (528 candidates → 125 already-indexed
    # → 0 saved in the 2026-05-28T15-58Z tick, for example). The gap-
    # driven path subsumes manual coverage (Path A includes the rice/
    # cocoa anchors as cell-level n_studies queries) and rotates across
    # Karen's priority categories 11→9→8→7→6→5→4→3→2. The manual path
    # remains available via `npm run wishlist:fetch` for one-off use.
    # BOUNDED (2026-05-31): the gap-driven fetcher prints "complete" then hangs
    # on process exit (open handle keeps node alive). With no `timeout` binary
    # on macOS, an unbounded run wedged the entire tick ~18h (PID 11318,
    # 2026-05-30 -> 31), freezing the manual-fetch drain. run_bounded SIGKILLs
    # the step (and its child tree) at 20m so the tick finishes and KeepAlive
    # starts a fresh one. The fetcher's own FETCH_BUDGET_MS (15m) still governs
    # useful work; the 20m wall-clock only catches the post-fetch exit hang.
    run_step "wishlist fetch (gap-driven, bounded 20m)" run_bounded 1200 npm run wishlist:gap-driven || true
  else
    log "Queue above floor — skipping fetch, focusing on drain."
  fi
fi

# Step 5b.2: lever-mitigation fetch — pull intervention-efficacy / source-
# apportionment literature for product pages whose mitigation levers lack a
# cited magnitude (queries emitted by the Step 4d.3 detector). Reuses the
# wishlist fetcher via the --queries override with its OWN checkpoint
# (HMI_FETCH_CHECKPOINT) so it never disturbs the main wishlist's resume cursor.
# Bounded to a short budget so it never starves the main fetch. Gated by the
# same FETCH_ENABLED switch; disable independently with HMI_LEVER_FETCH=0. The
# daemon's existing ingest steps pick up the staged PDFs on a later tick.
if [[ "${HMI_LEVER_FETCH:-1}" == "1" ]] && [[ "${FETCH_ENABLED:-1}" != "0" ]] && [[ -f data/evidence/autonomy/lever-mitigation-queries.json ]]; then
  run_step "lever-mitigation fetch" env \
    HMI_FETCH_CHECKPOINT=data/evidence/autonomy/lever-fetch-checkpoint.json \
    HMI_FETCH_BUDGET_MS="${HMI_LEVER_FETCH_BUDGET_MS:-180000}" \
    node tools/wishlist/find-candidates.mjs \
    --queries=data/evidence/autonomy/lever-mitigation-queries.json || true
fi

# Step 5c: weekly briefing — runs daily, self-cadenced (skips if last
# briefing was <6 days ago). Writes wiki/briefings/weekly-<date>.md with
# 7-day metrics + a Cochrane comparison dispatched to claude --print.
# Per Karen 2026-05-17: "I want to go away for a week and come back SHOCKED."
run_step "weekly briefing" node tools/autonomy/weekly-briefing.mjs || true

# Step 5d: improvement scout — picks one thing the wiki could do better
# and writes it to the improvement-backlog. Self-cadenced (one item per
# tick when novel candidates exist; idempotent on the backlog).
run_step "improvement scout" node tools/autonomy/improvement-scout.mjs || true

# Step 5d.1: detect-contradictions — surfaces cross-source disagreements
# (HMI deliverable: "every contradiction is recorded"). Reads the pooling
# engine's aggregate CSV; flags cells with explicit disagreement verdict
# OR p100/p10 spread ratio >= 5x; writes contradiction-log.jsonl + a
# daily markdown report. Fast (<1s); always-on.
run_step "detect-contradictions" node tools/autonomy/detect-contradictions.mjs || true

# Step 5d.1b: dual-model verify recent — run dual-model extractor on
# recently-ingested markdown sources (FM_ handles) that don't yet have
# a row in model_extractions.jsonl. PDF sources are deferred (need
# pdftotext). HMI_DUAL_MODEL_VERIFY_CAP=0 disables; default 2.
DUAL_MODEL_CAP="${HMI_DUAL_MODEL_VERIFY_CAP:-2}"
if [[ "$DUAL_MODEL_CAP" != "0" ]] && [[ -n "${AI_GATEWAY_API_KEY:-}" ]]; then
  run_step "dual-model-verify-recent" node tools/autonomy/dual-model-verify-recent.mjs "--max=$DUAL_MODEL_CAP" || true
fi

# Step 5d.2: drain-pending-synthesis — autonomous narrative-synthesis
# drainer (2026-05-28). Each tick picks up to N pages with `_Pending
# synthesis._` placeholder paragraphs and spawns claude --print to draft
# real prose drawn from the contributing sources. Closes the "awaiting
# synthesis" autonomy gap Karen surfaced. Bounded per-tick cap = 2 by
# default (each spawn is 5-15 min of Opus work). Disable with
# HMI_SYNTHESIS_DRAIN_CAP=0.
SYNTHESIS_DRAIN_CAP="${HMI_SYNTHESIS_DRAIN_CAP:-2}"
if [[ "$SYNTHESIS_DRAIN_CAP" != "0" ]]; then
  run_step "drain-pending-synthesis" node tools/autonomy/drain-pending-synthesis.mjs "--max=$SYNTHESIS_DRAIN_CAP" || true
fi

# Step 5d.2b: drain-lever-gaps — autonomous mitigation-lever synthesis drainer
# (companion to the Step 4d.3 detector). Each tick picks up to N product pages
# whose lever table still has un-evidenced magnitudes and spawns claude --print
# to fill each lever's Magnitude + Source from the page's routed sources, or
# write the honest no-data marker where the corpus has nothing (never fabricates
# — CLAUDE.md verify-don't-fabricate + Part 18 provenance lint). As the Step
# 5b.2 fetch + ingest steps add mitigation literature, later ticks fill levers
# that were previously no-data. Bounded cap (default 2); disable with
# HMI_LEVER_DRAIN_CAP=0.
LEVER_DRAIN_CAP="${HMI_LEVER_DRAIN_CAP:-2}"
if [[ "$LEVER_DRAIN_CAP" != "0" ]]; then
  run_step "drain-lever-gaps" node tools/autonomy/drain-lever-gaps.mjs "--max=$LEVER_DRAIN_CAP" || true
fi

# Step 5d.3: promote-synthesis-pages — autonomous synthesis-findings-page
# promoter (2026-05-28). Scans data/evidence/synthesis-proposals.md and:
#   - drafts wiki/synthesis/<slug>.md for any Pending candidate that has
#     crossed the 4-criteria gate (CLAUDE.md Part 9 / wiki/synthesis.md
#     "When to promote") — explicit "Promotion criteria met:" block with
#     4 checkmarks OR "Promotion readiness: 4 of 4 criteria met"
#   - moves Pending → Promoted in the proposals file
#   - inserts an index bullet at the top of wiki/synthesis.md
#   - retires (no-claude) entries whose body explicitly recommends against
#     promotion (methodology-note class; the Egypt-regulatory-baseline
#     entry was the founding example)
#
# Most ticks will pick 0 candidates: the 4-criteria gate is deliberately
# strict (the synthesis pages are the wiki's load-bearing brand-legal
# surface). When new anchor sources land via the wishlist/manual-fetch
# pipelines and accumulate against an existing thread, the relevant block
# moves from "1 of 4" or "2 of 4" to "4 of 4" and the next tick promotes.
#
# Bounded per-tick cap = 1 by default (each promotion is 30-60 min of
# Opus work). Disable with HMI_SYNTHESIS_PROMOTE_CAP=0.
SYNTHESIS_PROMOTE_CAP="${HMI_SYNTHESIS_PROMOTE_CAP:-1}"
if [[ "$SYNTHESIS_PROMOTE_CAP" != "0" ]]; then
  run_step "promote-synthesis-pages" node tools/autonomy/promote-synthesis-pages.mjs "--max=$SYNTHESIS_PROMOTE_CAP" || true
fi

# Step 5e: drain-audit-queue — autonomous audit drainer (2026-05-28).
# Picks up to AUDIT_DRAIN_CAP entries with status=pending or pending-audit-
# spawn-failed and spawns claude --print per entry to run the full 5-check
# audit (spawn subagent → verify findings → apply or push back → commit →
# update queue row). Closes the loop that previously required Karen to
# manually invoke /apply-gpt-audit. Bounded per-tick cap keeps cost in line
# with the manual-fetch ingest cap.
#
# Disable by setting HMI_AUDIT_DRAIN_CAP=0; default 2 PDFs per tick.
AUDIT_DRAIN_CAP="${HMI_AUDIT_DRAIN_CAP:-2}"
if [[ "$AUDIT_DRAIN_CAP" != "0" ]]; then
  run_step "drain-audit-queue" node tools/autonomy/drain-audit-queue.mjs "--max=$AUDIT_DRAIN_CAP" || true
fi

# ---------- CHECKPOINT 2: commit the discovery + drain phase ----------
# Wishlist fetch, weekly briefing, improvement scout, contradiction detector,
# dual-model verify, synthesis drain, synthesis promote, and audit drain have
# all run. Commit before the Cat-1 briefing regen loop + morning-report
# append so a sleep-SIGTERM during those does not strand this work either.
checkpoint_commit "discovery-and-drains"

# Step 6: regenerate briefings for Category 1
log "=== regenerating Cat 1 briefings ==="
for slug in infant-formula-powder-non-soy infant-formula-powder-soy-based \
            infant-formula-rtf-liquid-non-soy infant-formula-rtf-liquid-soy-based \
            baby-cereals-dry-rice-based baby-cereals-dry-non-rice \
            fruit-purees non-root-vegetable-purees root-vegetable-purees \
            meat-and-poultry-purees fish-containing-baby-foods \
            mixed-meals-rice-containing mixed-meals-non-rice \
            teething-and-snacks-rice-based teething-and-snacks-non-rice; do
  npm run briefing -- --product="$slug" 2>&1 | grep -E "Wrote|Analytes|Rationales" >> "$LOG_FILE" || true
done

# Disable errexit for the reporting + commit tail (2026-05-30 fix). The
# morning-report block below is built from ~20 `var=$(grep -oE ... | head -1)`
# command substitutions. Under `set -euo pipefail`, ANY grep that finds no
# match (e.g. "Created N stub page" on a tick that created none) makes the
# pipeline return non-zero, the assignment inherits that status, and `set -e`
# aborts the WHOLE tick — before Step 8 ever runs. This is why every tick in
# the logs showed `end=0` and never did a clean Step-8 commit; the work only
# survived via the checkpoint commits + exit-trap recovery added earlier
# today. The tail (report + Step 8 commit/push) is all explicitly guarded
# (run_step, `|| log`, `if`) with the EXIT trap as the final backstop, so it
# does not need errexit. Turning it off here lets the tick reach its natural
# end and perform the clean Step-8 commit + push.
set +e

# Step 7: morning report — appended BEFORE commit so the append lands in the
# same tick's commit and the next tick doesn't see a dirty tree.
{
  echo ""
  echo "## Tick $TIMESTAMP"
  echo ""
  if [[ -f "$LOG_FILE" ]]; then
    # Pull headline numbers from this tick's log
    routing_unresolved=$(grep -oE "[0-9]+ unresolved target" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+" | head -1)
    routing_malformed=$(grep -oE "[0-9]+ malformed source" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+" | head -1)
    pages_created=$(grep -oE "Created [0-9]+ stub page" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    fw_errors=$(grep -oE "ERRORS:\s+[0-9]+" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    fw_warns=$(grep -oE "WARNINGS:\s+[0-9]+" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    mandatory_failures=$(grep -oE "[0-9]+ ingredient \+ [0-9]+ product failures" "$LOG_FILE" | tail -1)
    autofilled=$(grep -oE "[0-9]+ files autofilled" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    provenance_violations=$(grep -oE "Total unsourced claims: [0-9]+" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    orphans_linked=$(grep -oE "Auto-linked [0-9]+ orphan" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    ingest_ok=$(grep -oE "Batch complete: [0-9]+ OK" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    ingest_fail=$(grep -cE "OK, [0-9]+ failed" "$LOG_FILE" || echo 0)
    ingest_fail_count=$(grep -oE "[0-9]+ failed" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")

    # Synthesis writer numbers (per tick — populate-contamination-profile.mjs)
    synthesis_pages=$(grep -oE "Pages updated: [0-9]+" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")
    synthesis_cells=$(grep -oE "Cells updated: [0-9]+" "$LOG_FILE" | tail -1 | grep -oE "[0-9]+")

    # Product-stub proposals waiting on a Step 0 Lock. These are sources
    # declaring a product slug that has no page because the HMTc category
    # has not yet been scaffolded. Surfacing them in the morning report so
    # Karen can author Step 0 Locks for the categories with the most pull.
    PRODUCT_STUB_CSV="$REPO_ROOT/data/evidence/autonomy/product-stub-proposals-pending.csv"
    product_stub_count=0
    if [[ -f "$PRODUCT_STUB_CSV" ]]; then
      product_stub_count=$(( $(wc -l < "$PRODUCT_STUB_CSV") - 1 ))
      [[ "$product_stub_count" -lt 0 ]] && product_stub_count=0
    fi

    echo "### State"
    echo "- Routing: ${routing_unresolved:-?} unresolved, ${routing_malformed:-?} malformed (advisory)"
    echo "- Firewall: ${fw_errors:-?} ERRORS, ${fw_warns:-?} WARNINGS"
    echo "- Mandatory sections: ${mandatory_failures:-?}"
    echo "- Provenance: ${provenance_violations:-?} unsourced claims (backlog)"
    echo "- Product stub proposals waiting on Step 0 Lock: ${product_stub_count}"
    echo ""
    echo "### Work this tick"
    [[ -n "$pages_created" && "$pages_created" -gt 0 ]] && echo "- Auto-created $pages_created stub page(s) from routing_unresolved"
    [[ -n "$autofilled" && "$autofilled" -gt 0 ]] && echo "- Mandatory-sections autofilled: $autofilled file(s)"
    [[ -n "$orphans_linked" && "$orphans_linked" -gt 0 ]] && echo "- Orphans linked: $orphans_linked"
    [[ -n "$synthesis_cells" && "$synthesis_cells" -gt 0 ]] && echo "- Synthesis writer: $synthesis_cells contamination_profile cell(s) populated across ${synthesis_pages:-?} page(s)"
    [[ -n "$ingest_ok" ]] && echo "- Marker ingest: $ingest_ok succeeded, ${ingest_fail_count:-0} failed"
    echo ""

    # Inline preview of the top stub proposals so Karen sees what she
    # would unblock by authoring a Step 0 Lock — without having to open
    # the CSV.
    if [[ "$product_stub_count" -gt 0 ]]; then
      echo "### Product stubs waiting on Karen (Step 0 Lock)"
      echo ""
      head -11 "$PRODUCT_STUB_CSV" | tail -n +2 | awk -F',' '{ printf "- `%s` (declared by %s source(s))\n", $1, $2 }'
      [[ "$product_stub_count" -gt 10 ]] && echo "- … and $((product_stub_count - 10)) more in \`data/evidence/autonomy/product-stub-proposals-pending.csv\`"
      echo ""
    fi
  fi
  echo "### Reports"
  echo "- Healing: \`data/evidence/autonomy/healing-report-$(date +%Y-%m-%d).md\`"
  echo "- Extraction: \`data/evidence/autonomy/extraction-report-$(date +%Y-%m-%d).md\`"
  echo "- Firewall lint: \`data/evidence/autonomy/firewall-lint-$(date +%Y-%m-%d).md\`"
  echo "- Mandatory sections: \`data/evidence/autonomy/mandatory-sections-$(date +%Y-%m-%d).md\`"
  echo "- Provenance: \`data/evidence/autonomy/provenance-audit-$(date +%Y-%m-%d).md\`"
  echo "- Wishlist: \`data/evidence/autonomy/gap-driven-wishlist-$(date +%Y-%m-%d).md\`"
  echo "- Marker ingest: \`data/evidence/autonomy/ingest-batch-$(date +%Y-%m-%d).md\`"
  echo "- Synthesis: \`data/evidence/autonomy/synthesis-report-$(date +%Y-%m-%d).md\`"
} >> "$MORNING_REPORT"

# Step 8: commit + push if anything changed (includes the morning-report append)
if ! git diff --quiet || ! git diff --cached --quiet; then
  # Acquire the bidirectional commit lock so we don't race a manual commit
  # in progress. Wait up to 60s; if still held, defer to the next tick rather
  # than scooping the other commit's files.
  if acquire_lock "daemon-tick-step8" 60; then
    log "Changes detected; committing"
    git add -- data/evidence data/workbench/briefings wiki 2>&1 | tee -a "$LOG_FILE"   # exact daemon-output allowlist — never sweep foreign edits (see exit-trap note)
    COMMIT_MSG="autonomy: daemon tick $TIMESTAMP — gap-healing + extraction + pooling + briefings"
    # WIKI_EDIT_AUDIT_SKIP=1 (2026-05-29 fix): the daemon's deterministic
    # tools edit wiki/**/*.md (page-history tables, source-legend baselines,
    # sync-source-counts, mandatory-section placeholders) WITHOUT writing
    # data/evidence/wiki_edit_audit.jsonl rows. Without the skip flag the
    # pre-commit hook's wiki-edit audit barrier aborts this commit (exit 1),
    # the `|| log` swallows it, the tree stays dirty, and the next tick's
    # preflight refuses to run -> the silent stall that produced ZERO clean
    # Step-8 commits in the 2 days before this fix. Same sanctioned rationale
    # as the EXIT-trap recovery commit, which already sets this flag.
    # HMI_SKIP_COMMIT_LOCK=1: we hold the lock (acquire_lock above); stop the
    # pre-commit hook from self-deadlocking on it (see exit-trap note). This
    # is the second half of the 2026-05-29 fix — without it the hook blocks
    # 60s and aborts even after the WIKI_EDIT_AUDIT_SKIP barrier is cleared.
    HMI_SKIP_COMMIT_LOCK=1 WIKI_EDIT_AUDIT_SKIP=1 git commit -m "$COMMIT_MSG" 2>&1 | tee -a "$LOG_FILE" || log "commit failed (maybe nothing to commit)"
    release_lock
  else
    log "Commit lock held by another process; deferring commit to next tick"
  fi
else
  log "No daemon-side changes this tick."
fi

# Always check for unpushed commits at end of tick. Sprint mode 2026-05-25:
# Codex and other agents commit between daemon ticks but were prohibited
# from pushing. Daemon now pushes everything ahead of remote on every tick
# so Codex's commits land at origin within ≤30 min of being made. This
# closes the "Karen sees stale state" gap when she checks the dashboard.
UNPUSHED=$(git log "@{u}.." --oneline 2>/dev/null | wc -l | tr -d ' ')
if [[ "$UNPUSHED" -gt 0 ]]; then
  log "$UNPUSHED commit(s) ahead of remote; pushing"
  run_step "git push" git push origin "$(git branch --show-current)" || true
else
  log "Repo synced with remote."
fi

log "Daemon tick end."
