# Codex Sprint-Ingest Prompt — 95% Confidence Push (locked 2026-05-25)

Set this as Codex's recurring automation prompt (Karen's external scheduler, every 25–30 min). It is self-contained per fire — Codex does not need to re-read any other doc when this prompt fires.

The prompt below is the canonical version. Karen pastes it verbatim. The 25–30 min cadence is the scheduler's job, not Codex's — `Codex sees no time references at all.

---

## The prompt (paste this)

```
GOAL: drain raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ to ≤10 PDFs. The wishlist fetcher in the daemon is producing 100–250 PDFs/hour into this folder. You are the primary consumer; the daemon does not ingest this folder. Stop only when the folder is ≤10 OR a named hard blocker fires (see ESCALATION below). No time budget. No "feels enough." No self-invented stop criteria.

STEP 1 — SNAPSHOT. First tool call:
  ls raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf > /tmp/codex-snapshot-$(date +%s).txt
  wc -l /tmp/codex-snapshot-*.txt | tail -1
That list is your scope. New PDFs the daemon adds mid-fire are the NEXT fire's job.

STEP 2 — RACE-SAFE CLAIM. Before processing any PDF, check data/evidence/autonomy/manual-fetch-tracker.csv. If a row matches the PDF's filename AND status starts with "claimed" or "ingested", SKIP it (daemon may be mid-process). Otherwise add a row with status="claimed-by-codex" + a timestamp before touching the PDF. This prevents double-ingest races.

STEP 3 — TRIAGE-FIRST. Open every PDF in your snapshot in parallel batches of 10 (single tool message, 10 Read calls). Classify each as:
  (a) real-ingest — measures heavy metals in food/personal-care matrix with extractable concentration data
  (b) dedup-rollup — DOI already exists in wiki/sources/*.md (grep the doi: field across wiki/sources/); fold into existing canonical page, mark wishlist row "ingested"
  (c) skip:<reason> — false positive. Use existing vocabulary in data/evidence/wishlist-fetch-audit.csv (skip:no-heavy-metal-data / skip:not-target-cell / skip:not-food-occurrence / skip:review-only-no-primary-data / skip:not-pdf:<content-type>)
  (d) escalation — paper-internal contradiction, unreadable language, DOI conflict (see ESCALATION below)

Batch-commit ALL (b)+(c) decisions to data/evidence/wishlist-fetch-audit.csv in ONE commit titled:
  triage sweep <date> <time>: <K> rollups + <P> skips

STEP 4 — INGEST SWEEP. For the (a) pile, write source pages per CLAUDE.md Part 6 template (TL;DR prose under H1, then ## Key numbers, ## Methods (brief), ## Implications, ## Wiki pages this source may touch, ## Verification notes). Frontmatter discipline per CLAUDE.md Part 5:
  - cite_key: <first-author><year>-<topic-slug> (lowercase, hyphenated, disambiguated -a/-b if collision)
  - raw_handle: AUTO_<wishlist-row-id>
  - raw_path: relative path to the PDF
  - doi, title, authors, year, publication: from the PDF (NOT from filename)
  - source_type, evidence_tier (peer-reviewed=A; gov report=A; industry=B; news=C)
  - metals: [Pb, Cd, iAs, tAs, ...] at the specificity the source actually states (broad scopes are fine; routing layer fans out)
  - ingredients/products/matrices/jurisdictions: only existing slugs (check wiki/ingredients/, wiki/products/ — autonomy stub creation is handled separately via provisional-scaffold tools, see PROHIBITIONS)

Batch-commit every ~10 source pages with message:
  ingest auto-fetched <date> <time> batch N: K source pages

PUSH after each batch commit (sprint mode 2026-05-25 lifted the no-push prohibition):
  git push origin main

STEP 5 — UPDATE TRACKER. After each source page is committed, update its row in data/evidence/autonomy/manual-fetch-tracker.csv to status="ingested-by-codex" with the commit hash.

STEP 6 — AUDIT (best-effort). After each batch, try to spawn fresh-context audits per docs/gpt-collaboration/audit-prompt.md (5 checks: numerical fidelity, slug vocabulary, speciation/methods, brand firewall, wiki/HMTc firewall). If `agent thread limit reached`, write each page's audit-queue row with status=pending-audit-spawn-failed and CONTINUE. NEVER stop on spawn failure — Claude drains the async-audit lane separately.

STEP 7 — END-OF-FIRE CLEANUP (run once, after all batches committed):
  node tools/autonomy/auto-fetched-hygiene.mjs --report
  npm run evidence:source-routes
  node tools/autonomy/completion-matrix.mjs
  node tools/autonomy/sprint-dashboard.mjs
  git add -A && git commit -m "codex sprint <date> <time>: end-of-fire cleanup" --allow-empty
  git push origin main

ESCALATION RULES — exercise AI judgment first. Only escalate what NO AI agent could resolve:
  • Paper-internal contradiction (abstract n=200 but Table 1 n=152): prefer tables over abstract; note discrepancy in source-page Verification notes; continue.
  • DOI conflict (URL returns different paper than wishlist row claims): inspect actual PDF; if real heavy-metals food paper, ingest under actual cite-key with disambiguator (-a/-b); note mismatch in Verification; continue.
  • Unfamiliar slug: closest existing per wiki/ingredients/ or wiki/products/; run tools/autonomy/create-provisional-ingredient-scaffold.mjs or create-provisional-product-scaffold.mjs for genuinely novel; continue.
  • Routing audit malformed entries on YOUR pages: fix in-session. Routing-malformed entries on pre-existing pages: leave alone.
  • Three consecutive QUARANTINE audit verdicts: recalibrate own audit logic against audit-prompt.md Check 4 + Exception 2 (instrument/CRM/software vendor names ARE permitted in Methods sections), continue.
  • Agent-spawn failure: best-effort, commit pending, continue. NOT an escalation.

Only write to data/evidence/escalations/<YYYY-MM-DD>-<HHMM>-<slug>.md when ALL true: (1) blocks ALL primary-goal progress, (2) no AI agent (Codex, Claude, GPT-5.5) can resolve, (3) genuine human-only authority required (HMTc category Step 0 Lock decision, regulatory-value arbitration between conflicting agency sources, brand-firewall edge case where same name is both instrument vendor and consumer brand).

STOP CRITERIA: snapshot ≤10 PDFs OR legitimate escalation written. Nothing else. Self-invented stop reasons ("done enough", "calibrated lower bound", "feels complete", "been at this a while", "agent spawn failing", "routing looks clean") are bugs — if one fires, run summary title MUST begin "STOPPED EARLY — <reason>" so the next fire detects the regression.

PROHIBITIONS:
  • Do NOT ingest PDFs from raw/Manual Fetch Kimi/, raw/Papers Cube Manual Fetch/, raw/Manual Resourcing/, raw/Manual Fetch Discovery/ (daemon's Opus path owns those — high-judgment Cochrane-bar work)
  • Do NOT touch raw/markdown/ (the 23K Marker corpus — daemon's Haiku path)
  • Do NOT update contamination_profile YAML on ingredient pages (synthesis writer races)
  • Do NOT edit inside <!-- BEGIN: ... --> / <!-- END: ... --> generator markers
  • Do NOT modify data/evidence/product_source_routing_audit.csv by hand
  • Do NOT edit CLAUDE.md / OPERATING.md / AGENTS.md

REGULATION PAGES: directly create on first encounter per CLAUDE.md Part 10. Required frontmatter: rule_id, jurisdiction, agency, metal, matrix, limit_value, limit_unit, status, effective_date, source_url. Superseded regs: add sunset_date + superseded_by wikilink.

OUTPUT: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with:
  - snapshot count at fire-start
  - breakdown: (a) ingests / (b) rollups / (c) skips / (d) escalations
  - per-batch commit hashes
  - audit-queue rows added with status=pending-audit-spawn-failed
  - escalation file paths (if any)
  - final auto-fetched/ depth
  - title: "FIRE COMPLETE — drained to ≤10" / "ESCALATED — <slug>" / "STOPPED EARLY — <reason>"

Start with STEP 1 now.
```

---

## Why this design works

**Race safety with the daemon.** The daemon ingests from `raw/Manual Fetch Kimi/`, `raw/Papers Cube Manual Fetch/`, `raw/Manual Resourcing/`, and `raw/Manual Fetch Discovery/`. Codex ingests from `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`. Different folders → no overlap → no race. The tracker check is a belt-and-suspenders safety for the case where someone (Codex or the daemon) gets pointed at the wrong folder by accident.

**No cost burn on Karen's API budget.** Opus is $15/$75 per million tokens; Haiku is $1/$5; Codex on a subscription is flat-rate. At 200+ PDFs/hour for 72 hours of sprint, Codex on subscription is the only economically reasonable path.

**No Karen in loop.** The prompt names every stop criterion and escalation path. The only things that get bumped to `data/evidence/escalations/` are genuinely human-only decisions (governance, regulatory arbitration). Everything else is AI judgment + continue.

**Self-documenting per fire.** Each fire's `codex-runs/*.md` report is the proof of work. Karen reads only the headline (FIRE COMPLETE / ESCALATED / STOPPED EARLY) when scanning.

**Compatible with daemon's push policy.** The daemon now also pushes any unpushed commits at end of every tick as a safety net (added 2026-05-25), so even if Codex skips a push, the daemon catches it within 30 min.

## What to monitor

Open `wiki/sprint-status.md` in Obsidian. The single-page dashboard regenerates every daemon tick (~30 min). Look at:
- Headline cells-done count going UP between reads
- auto-fetched/ depth fluctuating (refill→drain→refill, not stuck)
- Commits last 1 hour ≥ 10 (mix of daemon + Codex)
- Velocity line positive

If velocity flatlines for >2 hours: check `data/evidence/autonomy/daemon-runs/` latest tick log for `FAIL:` lines, and check `data/evidence/codex-runs/` latest report for the stop reason.
