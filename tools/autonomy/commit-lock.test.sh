#!/usr/bin/env bash
# Regression tests for commit-lock.sh — the bidirectional commit mutex.
#
# This suite is HERMETIC: it builds a throwaway `git init` repo (plus a linked
# worktree) in a tmpdir and exercises the REAL commit-lock.sh against it. It
# never touches the live repo's lock dir and never races concurrent committers,
# so it is safe to run from CI, a pre-commit hook, or by hand at any time.
#
# Covers the two bugs this file has hit:
#   - 2026-05-31  ownerless-lock deadlock (holder SIGTERM'd between mkdir and
#                 writing the owner file) — must be reclaimed after the grace.
#   - 2026-06-11  worktree ENOTDIR: <worktree>/.git is a FILE, so deriving the
#                 lock dir from <toplevel>/.git made the mutex unusable from any
#                 linked worktree. Lock must resolve under the COMMON git dir.
#
# Usage:  bash tools/autonomy/commit-lock.test.sh
# Exit:   0 = all pass, 1 = a test failed (cleanup never affects the verdict).

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
LOCKSH="$SCRIPT_DIR/commit-lock.sh"
[ -f "$LOCKSH" ] || { echo "FATAL: commit-lock.sh not found next to test ($LOCKSH)"; exit 1; }

pass=0; fail=0
ok(){ echo "  PASS: $1"; pass=$((pass+1)); }
no(){ echo "  FAIL: $1"; fail=$((fail+1)); }

# ── Hermetic fixture: a throwaway main repo + one linked worktree ─────────────
TESTROOT="$(mktemp -d "${TMPDIR:-/tmp}/hmi-commit-lock-test.XXXXXX")"
MAIN="$TESTROOT/main"
WT="$TESTROOT/wt"
cleanup(){ git -C "$MAIN" worktree remove --force "$WT" >/dev/null 2>&1 || true
           rm -rf "$TESTROOT" >/dev/null 2>&1 || true; }
trap cleanup EXIT INT TERM

git init -q "$MAIN"
git -C "$MAIN" config user.email test@example.com
git -C "$MAIN" config user.name  "lock test"
git -C "$MAIN" config commit.gpgsign false
git -C "$MAIN" config core.hooksPath /dev/null   # no hooks in the fixture
: > "$MAIN/seed"
git -C "$MAIN" add seed
git -C "$MAIN" commit -q -m "seed"
git -C "$MAIN" worktree add -q --detach "$WT" >/dev/null 2>&1

MAIN_COMMON="$(cd "$MAIN" && git rev-parse --path-format=absolute --git-common-dir)"
EXPECTED="$MAIN_COMMON/hmi-commit.lock.d"
echo "fixture: main=$MAIN"
echo "         wt=$WT  (.git is a $(test -f "$WT/.git" && echo FILE || echo DIR))"
echo "         expected lock dir = $EXPECTED"

# ── 1. Resolution: main top, main subdir, and worktree all agree ─────────────
echo "=== 1. lock-dir resolution converges on the common git dir ==="
got=$( cd "$MAIN" && source "$LOCKSH"; printf '%s' "$HMI_LOCK_DIR" )
[ "$got" = "$EXPECTED" ] && ok "main repo top resolves to common .git" || no "main top got=$got"

mkdir -p "$MAIN/sub/dir"
got=$( cd "$MAIN/sub/dir" && source "$LOCKSH"; printf '%s' "$HMI_LOCK_DIR" )
[ "$got" = "$EXPECTED" ] && ok "main subdir resolves to absolute common .git" || no "subdir got=$got"

got=$( cd "$WT" && source "$LOCKSH"; printf '%s' "$HMI_LOCK_DIR" )
[ "$got" = "$EXPECTED" ] && ok "worktree resolves to MAIN common .git (not <wt>/.git)" || no "worktree got=$got"

# ── 2. Acquire / release from the worktree (the ENOTDIR regression) ──────────
echo "=== 2. acquire/release from a linked worktree (pre-fix: ENOTDIR hang) ==="
out=$( cd "$WT" && source "$LOCKSH"
  if acquire_lock "wt-test" 5; then
    [ -d "$HMI_LOCK_DIR" ] && [ -f "$HMI_LOCK_DIR/owner" ] && echo ACQ_OK
    release_lock
    [ ! -d "$HMI_LOCK_DIR" ] && echo REL_OK
  else echo ACQ_FAIL; fi )
echo "$out" | grep -q ACQ_OK && ok "worktree acquired the lock" || no "worktree acquire: $out"
echo "$out" | grep -q REL_OK && ok "worktree released the lock" || no "worktree release: $out"

# ── 3. Stale reclaim (owner older than HMI_LOCK_STALE_SECS) ──────────────────
echo "=== 3. stale lock is reclaimed ==="
out=$( { cd "$MAIN" && export HMI_LOCK_STALE_SECS=2 && source "$LOCKSH"
  mkdir -p "$HMI_LOCK_DIR"
  echo "$$ $(( $(date +%s) - 100 )) ghost" > "$HMI_LOCK_DIR/owner"
  if acquire_lock "reclaimer" 5; then echo RECLAIM_OK; release_lock; else echo RECLAIM_FAIL; fi ; } 2>&1 )
echo "$out" | grep -q RECLAIM_OK && ok "stale lock reclaimed + reacquired" || no "stale: $out"
echo "$out" | grep -q "reclaiming stale lock" && ok "stale-reclaim diagnostic emitted" || no "no stale diag: $out"

# ── 4. Ownerless reclaim (lockdir with no owner file, past grace) ────────────
echo "=== 4. ownerless lock is reclaimed (2026-05-31 deadlock) ==="
out=$( { cd "$MAIN" && export HMI_LOCK_OWNERLESS_GRACE=1 && source "$LOCKSH"
  mkdir -p "$HMI_LOCK_DIR"   # no owner file
  sleep 2                    # exceed grace
  if acquire_lock "reclaimer2" 5; then echo OWNERLESS_OK; release_lock; else echo OWNERLESS_FAIL; fi ; } 2>&1 )
echo "$out" | grep -q OWNERLESS_OK && ok "ownerless lock reclaimed + reacquired" || no "ownerless: $out"

# ── 5. Cross-serialization: worktree holds -> main blocks -> main acquires ───
echo "=== 5. worktree and main repo serialize on the shared lock ==="
READY="$TESTROOT/ready"; DONE="$TESTROOT/done"
# Independent holder process (real pid) acquires from the worktree and holds ~4s.
bash -c '
  cd "$1"; source "$2"
  acquire_lock "wt-holder" 5 && : > "$3"
  sleep 4
  release_lock
  : > "$4"
' _ "$WT" "$LOCKSH" "$READY" "$DONE" &
HOLDER=$!
# Wait (<=5s) for the holder to actually hold it.
for _ in $(seq 1 50); do [ -f "$READY" ] && break; sleep 0.1; done
# Main repo must be BLOCKED while the worktree holds the same lock.
out=$( { cd "$MAIN" && source "$LOCKSH"
  if acquire_lock "main-waiter" 2; then echo MAIN_EARLY; release_lock; else echo MAIN_BLOCKED; fi ; } 2>&1 )
echo "$out" | grep -q MAIN_BLOCKED && ok "main blocked while worktree holds the lock" || no "expected block: $out"
echo "$out" | grep -q "held by:" && ok "main reported a live holder" || no "no held-by report: $out"
wait "$HOLDER" 2>/dev/null
# After release, main must acquire.
out=$( { cd "$MAIN" && source "$LOCKSH"
  if acquire_lock "main-after" 5; then echo MAIN_OK; release_lock; else echo MAIN_FAIL; fi ; } 2>&1 )
echo "$out" | grep -q MAIN_OK && ok "main acquired after worktree released" || no "post-release: $out"

echo
echo "commit-lock.test.sh: $pass passed, $fail failed"
[ "$fail" = 0 ]
