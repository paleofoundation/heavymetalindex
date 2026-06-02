#!/usr/bin/env bash
# commit-scoped.sh — commit ONLY the files you declare, immune to the
# concurrent-writer ride-along. Companion to tools/autonomy/commit-lock.sh.
#
# WHY THIS EXISTS
# ---------------
# commit-lock.sh serializes commits but does not SCOPE them. A bare
# `git commit` commits the entire index, so when FRANK's `git add -A` has
# staged its own in-flight files, they ride along inside your commit under
# your message. Observed 2026-06-02: a `wiki/synthesis.md` commit, correctly
# staged by filename, still swept in FRANK's concurrent suvarapu2016 source
# ingest + audit rows because the bare `git commit` took the whole index.
#
# THE INVARIANT
# -------------
# Every interactive-session commit goes through here (or the equivalent raw
# `git commit -- <files>`). This wrapper commits with an explicit pathspec,
# which captures ONLY the named paths regardless of what else sits in the
# shared index, and then verifies the resulting commit contains nothing
# beyond the declared set. If the invariant is ever violated it exits non-zero
# instead of pushing a contaminated commit.
#
# USAGE
#   tools/commit-scoped.sh -m "message" -- path1 path2 ...
#   tools/commit-scoped.sh -F msgfile   -- path1 path2 ...
#
# Honors the documented hook bypasses by passthrough env, e.g.:
#   WIKI_EDIT_AUDIT_SKIP=1 tools/commit-scoped.sh -m "..." -- wiki/foo.md
#
# NOTE: a pathspec commit runs the pre-commit hook but does not absorb files
# the hook re-stages (e.g. the routing-audit CSVs for wiki/sources/ commits).
# This wrapper is for interactive edits (components, prose, tools, docs); the
# autonomy daemon keeps its own atomic add+commit path.

msg=""
msg_file=""
files=()
while [ $# -gt 0 ]; do
  case "$1" in
    -m) msg="$2"; shift 2 ;;
    -F) msg_file="$2"; shift 2 ;;
    --) shift; files=("$@"); break ;;
    *) echo "commit-scoped: unexpected arg '$1' (usage: -m MSG -- file ...)" >&2; exit 2 ;;
  esac
done

if [ "${#files[@]}" -eq 0 ]; then
  echo "commit-scoped: no files declared. Usage: commit-scoped.sh -m MSG -- file ..." >&2
  exit 2
fi
if [ -z "$msg" ] && [ -z "$msg_file" ]; then
  echo "commit-scoped: no message (-m MSG or -F msgfile required)." >&2
  exit 2
fi

cd "$(git rev-parse --show-toplevel)" || exit 2

# Validate every declared path exists in the working tree or the index.
# Refuse on a typo rather than silently committing a subset.
missing=0
for f in "${files[@]}"; do
  if [ ! -e "$f" ] && ! git ls-files --error-unmatch -- "$f" >/dev/null 2>&1; then
    echo "  missing: $f" >&2
    missing=1
  fi
done
if [ "$missing" -ne 0 ]; then
  echo "commit-scoped: declared path(s) not found in tree or index (see above)." >&2
  exit 2
fi

declared_file="$(mktemp)"
trap 'rm -f "$declared_file"' EXIT
printf '%s\n' "${files[@]}" > "$declared_file"

# Stage exactly the declared paths (covers add/modify/delete of those paths).
git add -- "${files[@]}"

# Visibility, not a block: if the index already holds OTHER staged paths, a
# concurrent writer (FRANK) put them there. The pathspec commit below leaves
# them for their own commit; we just surface the overlap.
extra="$(git diff --cached --name-only | grep -vxFf "$declared_file" || true)"
if [ -n "$extra" ]; then
  echo "commit-scoped: note — paths staged by another writer, left for their own commit:" >&2
  printf '  %s\n' $extra >&2
fi

# The scoped commit. `git commit -- <pathspec>` commits ONLY these paths.
if [ -n "$msg_file" ]; then
  git commit -F "$msg_file" -- "${files[@]}"
else
  git commit -m "$msg" -- "${files[@]}"
fi
commit_rc=$?
if [ "$commit_rc" -ne 0 ]; then
  echo "commit-scoped: git commit exited $commit_rc (nothing to commit, or a hook blocked it)." >&2
  exit "$commit_rc"
fi

# Tripwire: the commit must contain nothing beyond the declared set.
leak="$(git show --name-only --format= HEAD | sed '/^$/d' | grep -vxFf "$declared_file" || true)"
if [ -n "$leak" ]; then
  echo "commit-scoped: INVARIANT VIOLATION — $(git rev-parse --short HEAD) contains undeclared paths:" >&2
  printf '  %s\n' $leak >&2
  echo "  (should be impossible with a pathspec commit; investigate before pushing.)" >&2
  exit 1
fi

echo "commit-scoped: committed $(git rev-parse --short HEAD) — ${#files[@]} declared path(s), no ride-along."
