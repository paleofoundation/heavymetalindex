#!/usr/bin/env bash
# Bidirectional commit mutex.
#
# Both the autonomy daemon and manual sessions ran into a race condition
# in May 2026 where the daemon's `git add -A` + commit would sweep a manual
# session's staged files into the daemon's commit (with a daemon-style
# title), losing the manual commit's explanatory message. Documented at
# commit 0740fec.
#
# This script provides acquire_lock / release_lock helpers that both sides
# source. The lock is an atomic mkdir on <common-git-dir>/hmi-commit.lock.d
# (see the lock-dir resolution below for why it is the COMMON git dir, not
# <toplevel>/.git — that distinction is what makes the lock work from linked
# worktrees). Stale locks (older than HMI_LOCK_STALE_SECS) are reclaimed
# automatically.
#
# Usage:
#   source "$REPO_ROOT/tools/autonomy/commit-lock.sh"
#   acquire_lock "manual-commit:karen" 30  # wait up to 30s
#   ...do commit work...
#   release_lock
#
# Or in pre-commit hooks via the documented exit-trap pattern:
#   source "$(git rev-parse --show-toplevel)/tools/autonomy/commit-lock.sh"
#   acquire_lock "pre-commit" 30 || exit 1
#   trap release_lock EXIT INT TERM
#   ...commit-time logic...

# Re-resolve REPO_ROOT in case this is sourced from a hook running in a
# subdirectory. Use git rev-parse so we don't depend on caller setup.
HMI_LOCK_REPO_ROOT="${HMI_LOCK_REPO_ROOT:-$(git rev-parse --show-toplevel 2>/dev/null)}"

# Resolve the lock dir under the COMMON git dir, NOT "<toplevel>/.git". In a
# linked git worktree, "<toplevel>/.git" is a FILE (a "gitdir:" pointer), so
# `mkdir <toplevel>/.git/hmi-commit.lock.d` fails with ENOTDIR and the lock can
# never be acquired: acquire_lock spins until timeout and reports
# "could not acquire ... held by: unknown" forever, forcing every worktree
# session to bypass the mutex entirely with HMI_SKIP_COMMIT_LOCK=1 (which
# defeats the mutex for any tooling that DOES share the worktree index).
# Confirmed broken 2026-06-11 from the hmi-defensibility-sprint worktree.
#
# The common git dir is the main repo's real .git directory and is shared by
# every linked worktree, so a single lock there serializes commits across the
# main repo AND all worktrees. `--path-format=absolute` (git >= 2.31) returns
# it as the same absolute path from any worktree or subdirectory; the fallback
# normalizes the cwd-relative form (".git" at the repo top, "../../.git" from a
# subdir) by hand for older git.
HMI_LOCK_GIT_COMMON_DIR="${HMI_LOCK_GIT_COMMON_DIR:-$(git rev-parse --path-format=absolute --git-common-dir 2>/dev/null)}"
if [[ -z "$HMI_LOCK_GIT_COMMON_DIR" ]]; then
  HMI_LOCK_GIT_COMMON_DIR="$(git rev-parse --git-common-dir 2>/dev/null)"
  case "$HMI_LOCK_GIT_COMMON_DIR" in
    /*) ;; # already absolute (always so from a linked worktree)
    *) HMI_LOCK_GIT_COMMON_DIR="$(cd "$HMI_LOCK_GIT_COMMON_DIR" 2>/dev/null && pwd)" ;;
  esac
fi
HMI_LOCK_DIR="${HMI_LOCK_GIT_COMMON_DIR}/hmi-commit.lock.d"
HMI_LOCK_STALE_SECS="${HMI_LOCK_STALE_SECS:-300}" # 5 minutes — any healthy commit finishes well within this
HMI_LOCK_OWNERLESS_GRACE="${HMI_LOCK_OWNERLESS_GRACE:-15}" # secs an ownerless lock dir may exist before it is treated as a dead holder (see acquire_lock)
HMI_LOCK_HELD_BY_THIS_SHELL=0

acquire_lock() {
  local owner="${1:-unknown}"
  local timeout="${2:-30}"
  local elapsed=0

  while true; do
    if mkdir "$HMI_LOCK_DIR" 2>/dev/null; then
      echo "$$ $(date +%s) $owner" > "$HMI_LOCK_DIR/owner" 2>/dev/null || true
      HMI_LOCK_HELD_BY_THIS_SHELL=1
      return 0
    fi

    # Lock held by someone. Check for staleness.
    if [[ -f "$HMI_LOCK_DIR/owner" ]]; then
      local lock_data
      lock_data=$(cat "$HMI_LOCK_DIR/owner" 2>/dev/null || echo "")
      local lock_pid lock_time
      lock_pid=$(echo "$lock_data" | awk '{print $1}')
      lock_time=$(echo "$lock_data" | awk '{print $2}')
      local now
      now=$(date +%s)
      local age=$((now - lock_time))
      if [[ "$age" -gt "$HMI_LOCK_STALE_SECS" ]]; then
        echo "hmi-commit-lock: reclaiming stale lock (held by pid=$lock_pid for ${age}s)" >&2
        rm -rf "$HMI_LOCK_DIR" 2>/dev/null || true
        continue
      fi
      # Also reclaim if the holding pid is no longer alive
      if [[ -n "$lock_pid" ]] && ! kill -0 "$lock_pid" 2>/dev/null; then
        echo "hmi-commit-lock: reclaiming abandoned lock (pid=$lock_pid is dead)" >&2
        rm -rf "$HMI_LOCK_DIR" 2>/dev/null || true
        continue
      fi
    else
      # Lock dir exists but has NO owner file. This is the deadlock observed
      # 2026-05-31: a holder was SIGTERM'd ("Terminated: 15" in the daemon err
      # log) in the window between mkdir (above) and writing the owner file,
      # leaving an ownerless lock. Both reclaim paths above are gated on
      # `-f owner`, so without this branch the lock could NEVER be reclaimed —
      # every daemon tick deferred forever with "held by: unknown" until a
      # human deleted .git/hmi-commit.lock.d by hand. A healthy holder writes
      # the owner file microseconds after mkdir, so an ownerless dir older than
      # the grace window means the creator died: reclaim it.
      local dir_mtime now_o dir_age
      dir_mtime=$(stat -f %m "$HMI_LOCK_DIR" 2>/dev/null || echo 0)
      now_o=$(date +%s)
      dir_age=$((now_o - dir_mtime))
      if [[ "$dir_mtime" -gt 0 && "$dir_age" -gt "$HMI_LOCK_OWNERLESS_GRACE" ]]; then
        echo "hmi-commit-lock: reclaiming ownerless lock (no owner file after ${dir_age}s — holder died before claiming)" >&2
        rm -rf "$HMI_LOCK_DIR" 2>/dev/null || true
        continue
      fi
    fi

    if [[ "$elapsed" -ge "$timeout" ]]; then
      local holder
      holder=$(cat "$HMI_LOCK_DIR/owner" 2>/dev/null || echo "unknown")
      echo "hmi-commit-lock: could not acquire after ${timeout}s; held by: $holder" >&2
      return 1
    fi
    sleep 1
    elapsed=$((elapsed + 1))
  done
}

release_lock() {
  if [[ "$HMI_LOCK_HELD_BY_THIS_SHELL" = "1" ]]; then
    rm -rf "$HMI_LOCK_DIR" 2>/dev/null || true
    HMI_LOCK_HELD_BY_THIS_SHELL=0
  fi
}

# Helper: peek at who holds the lock without blocking. Returns 0 + owner
# string on stdout if held; returns 1 if free. Used by the daemon's
# cleanup_on_exit to decide whether to skip recovery.
peek_lock() {
  if [[ -d "$HMI_LOCK_DIR" ]] && [[ -f "$HMI_LOCK_DIR/owner" ]]; then
    cat "$HMI_LOCK_DIR/owner" 2>/dev/null
    return 0
  fi
  return 1
}
