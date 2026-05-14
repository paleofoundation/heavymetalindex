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

set -euo pipefail

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

cd "$REPO_ROOT"

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

# ---------- Tick ----------

log "Daemon tick start. Repo: $REPO_ROOT. Branch: $(git branch --show-current)"

# Refuse to run if the working tree is dirty with uncommitted edits we didn't
# make. Safer than committing surprises.
if ! git diff --quiet || ! git diff --cached --quiet; then
  log "Working tree has uncommitted changes. Daemon refuses to run on a dirty tree."
  log "Run \`git status\` to inspect, then commit/stash/discard before next tick."
  exit 0
fi

# Pull latest origin so we don't push stale work
run_step "git pull --ff-only" git pull --ff-only origin "$(git branch --show-current)" || {
  log "git pull failed (likely a divergent branch); skipping this tick."
  exit 0
}

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
INGEST_ENABLED="${HMI_AUTONOMOUS_INGEST:-1}"
INGEST_MAX="${HMI_INGEST_MAX_PAPERS:-2}"
INGEST_MODEL="${HMI_INGEST_MODEL:-claude-haiku-4-5-20251001}"
INGEST_PRIORITY="${HMI_INGEST_PRIORITY:-P1,P2}"
if [[ "$INGEST_ENABLED" == "1" ]]; then
  run_step "ingest-marker-batch" node tools/autonomy/ingest-marker-batch.mjs \
    "--max-papers=$INGEST_MAX" "--priority=$INGEST_PRIORITY" "--model=$INGEST_MODEL" || true
fi

# Step 4: pooling engine refresh
run_step "pooling engine" node tools/evidence/build-hmtc-aggregate-distributions.mjs || true

# Step 4b: firewall lint — fails the tick log if any wiki/HMTc firewall
# violation appears on a public page. Does not block the rest of the tick
# (we want briefings to regenerate even if a stray violation appears), but
# the failure surfaces in the daemon log and the per-day report so it gets
# fixed before it accumulates.
run_step "firewall lint" node tools/autonomy/firewall-lint.mjs || log "WARN: firewall lint reported ERROR violations; see data/evidence/autonomy/firewall-lint-*.md"

# Step 5: gap-driven wishlist (queries for thin cells)
run_step "gap-driven wishlist" node tools/autonomy/gap-driven-wishlist.mjs || true

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

# Step 7: morning report — appended BEFORE commit so the append lands in the
# same tick's commit and the next tick doesn't see a dirty tree.
{
  echo ""
  echo "## Tick $TIMESTAMP"
  echo ""
  echo "- Healing: see \`data/evidence/autonomy/healing-report-$(date +%Y-%m-%d).md\`"
  echo "- Extraction: see \`data/evidence/autonomy/extraction-report-$(date +%Y-%m-%d).md\`"
  echo "- Wishlist: see \`data/evidence/autonomy/gap-driven-wishlist-$(date +%Y-%m-%d).md\`"
  echo "- Pooling: \`data/evidence/hmtc_aggregate_distributions.csv\` regenerated"
  echo "- Briefings: \`data/workbench/briefings/*.md\` regenerated"
  if [[ -f "$LOG_FILE" ]]; then
    fixes=$(grep -c "Fixes applied:" "$LOG_FILE" 2>/dev/null || echo 0)
    rows=$(grep -c "Rows extracted:" "$LOG_FILE" 2>/dev/null || echo 0)
    echo "- This tick: $fixes healing reports, $rows extraction reports"
  fi
} >> "$MORNING_REPORT"

# Step 8: commit + push if anything changed (includes the morning-report append)
if ! git diff --quiet || ! git diff --cached --quiet; then
  log "Changes detected; committing"
  git add -A 2>&1 | tee -a "$LOG_FILE"
  COMMIT_MSG="autonomy: daemon tick $TIMESTAMP — gap-healing + extraction + pooling + briefings"
  git commit -m "$COMMIT_MSG" 2>&1 | tee -a "$LOG_FILE" || log "commit failed (maybe nothing to commit)"
  run_step "git push" git push origin "$(git branch --show-current)" || true
else
  log "No changes this tick."
fi

log "Daemon tick end."
