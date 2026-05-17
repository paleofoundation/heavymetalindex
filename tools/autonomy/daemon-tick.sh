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

# Heartbeat: drop a timestamp so a separate watchdog (or human) can tell
# whether the daemon is alive without reading tick logs. If this file gets
# stale (>2 ticks worth, ~75 min), something is wrong.
HEARTBEAT_FILE="$REPO_ROOT/data/evidence/autonomy/heartbeat.txt"
echo "$TIMESTAMP" > "$HEARTBEAT_FILE"

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
MFETCH_MAX="${HMI_MFETCH_MAX_PDFS:-2}"
MFETCH_MODEL="${HMI_MFETCH_MODEL:-claude-opus-4-7}"
if [[ "$MFETCH_ENABLED" == "1" ]]; then
  run_step "ingest-manual-fetch-batch" node tools/autonomy/ingest-manual-fetch-batch.mjs \
    "--max-pdfs=$MFETCH_MAX" "--model=$MFETCH_MODEL" || true
fi

# Step 4: pooling engine refresh
run_step "pooling engine" node tools/evidence/build-hmtc-aggregate-distributions.mjs || true

# Step 4a: synthesis writer — copy pooled literature percentiles
# (pooled_p10/p90/p95) from the aggregate CSV back into ingredient-page
# contamination_profile blocks. Per CLAUDE.md Part 9 + the firewall in
# Part 2, this publishes literature-native values only; HMTc percentile
# selection (target_value, candidate_value_ppb) stays staff-side.
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

# Step 4e: provenance audit — informational. Flags numerical claims on public
# pages that don't trace to a [[sources/...]] link in the same paragraph.
# Per CLAUDE.md Part 18, claims without provenance are a lint failure; this
# tool surfaces the backlog so synthesis sessions can fix it incrementally.
run_step "provenance audit" node tools/autonomy/provenance-audit.mjs || true

# Step 4f: link orphans — append any product/ingredient/metal/regulation page
# not yet listed in its per-category index to a marker-managed "Auto-linked
# stubs" section at the bottom. Idempotent.
run_step "link orphans" node tools/autonomy/link-orphans.mjs || true

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
CURRENT_HOUR_UTC=$(date -u +%H)
CURRENT_MINUTE_UTC=$(date -u +%M)
DAILY_FETCH_WINDOW=0
if [[ "$CURRENT_HOUR_UTC" == "09" ]] && (( 10#$CURRENT_MINUTE_UTC < 30 )); then
  DAILY_FETCH_WINDOW=1
fi
if [[ "$FETCH_ENABLED" == "always" ]] || { [[ "$FETCH_ENABLED" == "1" ]] && [[ "$DAILY_FETCH_WINDOW" == "1" ]]; }; then
  # Manual wishlist (Karen-curated targets) then gap-driven (autonomy-discovered
  # thin cells). Both write to raw/manual-fetch/seasonal-geographic-variance/
  # auto-fetched/*.pdf, where the next tick's ingest-manual-fetch-batch
  # picks them up.
  run_step "wishlist fetch (manual)"     npm run wishlist:fetch       || true
  run_step "wishlist fetch (gap-driven)" npm run wishlist:gap-driven  || true
fi

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
  log "Changes detected; committing"
  git add -A 2>&1 | tee -a "$LOG_FILE"
  COMMIT_MSG="autonomy: daemon tick $TIMESTAMP — gap-healing + extraction + pooling + briefings"
  git commit -m "$COMMIT_MSG" 2>&1 | tee -a "$LOG_FILE" || log "commit failed (maybe nothing to commit)"
  run_step "git push" git push origin "$(git branch --show-current)" || true
else
  log "No changes this tick."
fi

log "Daemon tick end."
