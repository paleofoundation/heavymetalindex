# Codex Sprint-Ingest Prompt — 95% Confidence Push (locked 2026-05-25)

Set this as Codex's recurring automation prompt (Karen's external scheduler, every 25–30 min). It is self-contained per fire — Codex does not need to re-read any other doc when this prompt fires.

The prompt below is the canonical version. Karen pastes it verbatim. The 25–30 min cadence is the scheduler's job, not Codex's — `Codex sees no time references at all.

---

## The prompt (paste this)

```
GOAL (TRANSACTIONAL — rewritten 2026-06-02): ingest a SMALL, bounded batch of auto-fetched PDFs and COMMIT EACH ONE before moving on. You run inside a hard 18-minute wrapper timeout (`tools/autonomy/ingest-with-codex.mjs --timeout-mins=18`); the old "No time budget / drain to 0" instruction contradicted that and got you killed mid-sweep with ~1 committed page per 6 hours. Do NOT try to drain the folder. The auto-fetched folder is FRANK's continuous queue; the Claude/Opus engine deliberately EXCLUDES auto-fetched (`--exclude-roots=auto-fetched`), so this folder is yours, and the next fire (every 20 min) continues where you stopped. Leftover PDFs are expected and correct.

YOUR CONTRACT THIS FIRE:
  - Process AT MOST 3 real-ingest PDFs. Commit + push after EACH page individually (not in batches). One page = one commit.
  - If you've committed 3 pages, STOP — do not start a 4th. If a single page is taking long, finish it, commit, and stop.
  - REASONING EFFORT: use standard/medium effort for routine ingest. Reserve maximum reasoning ONLY for a paper-internal contradiction or an audit dispute (see ESCALATION). Do not deep-reason every routine page.

AGENT LEDGER (shared coordination, file-based — no chat):
  - START: read the last ~50 lines of data/evidence/autonomy/agent-events.jsonl to see what Claude/Opus and prior Codex fires already ingested, skipped, or flagged. Skip anything already handled.
  - AFTER EACH PAGE: append ONE json line: {"ts":"<iso>","actor":"codex","source_path":"<pdf>","cite_key":"<key>","status":"ingested|skip:<reason>|escalated","commit":"<sha>","blocker":"","next":""}. Commit it with the page.

STEP 1 — SNAPSHOT. First tool call:
  ls raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf > /tmp/codex-snapshot-$(date +%s).txt
  wc -l /tmp/codex-snapshot-*.txt | tail -1
That list is your scope. New PDFs the daemon adds mid-fire are the NEXT fire's job.

STEP 2 — RACE-SAFE CLAIM. Before processing any PDF, check data/evidence/autonomy/manual-fetch-tracker.csv. If a row matches the PDF's filename AND status starts with "claimed" or "ingested", SKIP it (daemon may be mid-process). Otherwise add a row with status="claimed-by-codex" + a timestamp before touching the PDF. This prevents double-ingest races.

STEP 3 — TRIAGE A SMALL SLICE. Do NOT open all PDFs. Open only the FIRST ~5 unclaimed PDFs from your snapshot (skip any the ledger or tracker shows already handled). Classify each — you only need up to 3 in the (a) real-ingest pile to fill your contract; stop triaging once you have 3. Classify as:
  (a) real-ingest — FOUR lanes, all fully in-scope. DEFAULT IS INCLUDE: open a PDF as (a) if ANY lane fits, and do NOT require a finished-food concentration table (lanes a2/a3/a4 deliberately have none). A wrong include is cheap — the firewall keeps non-occurrence numbers out of thresholds — while a wrong skip breaks the "complete literature" defensibility claim (Governing Principle 4).
      (a1) PRODUCT OCCURRENCE — measures heavy metals in ANY in-scope consumer product with extractable concentration data. In-scope is food AND non-food: food/beverage, infant food, personal care, feminine care (tampons/pads), cosmetics, cleaning/household products, toys & children's durables, textiles/apparel, pet food/products, dietary supplements, research chemicals/peptides/SARMs, packaging & food-contact materials. "Not food" is NEVER a skip reason. Route to the products/ingredients it measures.
      (a2) MITIGATION / REMEDIATION — a peptide, plant, biochar, amendment, or process that REMOVES or REDUCES heavy metals (phytoremediation, bioremediation, chelation, sequestration, agronomic/processing levers). Route to wiki/mitigation/ + the metal pages; products/ingredients EMPTY (unless it targets a specific crop/product); tag matrices as the remediation matrix (phytoremediation-trial, soil, etc.) so its numbers never enter occurrence thresholds. See urosevic2024-salix-phytoremediation.
      (a3) SUPPLY-CHAIN SOURCE, PATHWAY & ATTRIBUTION — metals in the UPSTREAM matrices that explain HOW a consumable gets contaminated, OR which industry put them there. The matrix can feed ANY edible/product, not just a soil-grown crop:
           - soil -> crops; FERTILISER/sludge/biosolids/manure; ANIMAL FEED -> livestock.
           - river/lake/estuarine/coastal/MARINE sediment & water -> fish, shellfish, algae, seaweed. THE OCEAN IS THE "SOIL" OF SEAFOOD: industrial or shipboard metal discharge that bioaccumulates in edible marine species is a3 (e.g. Cr-VI from vessels -> fish tissue).
           - ATMOSPHERIC DEPOSITION from smelting, mining, shipping, urban traffic, and AVIATION (piston aircraft still burn LEADED avgas) -> soil/crops/water.
           - SOURCE ATTRIBUTION / burden apportionment: a paper identifying WHICH industry/activity loads metals into the shared environment is in-scope EVEN WITH NO NAMED CROP — it is the defensibility evidence that lets a food brand argue ambient/shared liability instead of sole liability.
        A paper that measures ONLY the upstream matrix (NO finished-food number) is STILL a3, NOT a skip. Route to the MATCHING wiki/supply-chain/ hub by pathway:
             soil->crop = soil-to-plant-transfer | water/sediment/marine->seafood/algae = aquatic-bioaccumulation | airborne fallout = atmospheric-deposition | irrigation water / sludge / biosolids / fertiliser = irrigation-and-soil-amendments | which-industry-polluted = source-attribution-environmental-burden-apportionment
        plus the consumable it informs + the metal pages; products/ingredients EMPTY; tag the environmental matrix (soil, sediment, marine-water, irrigation-water, groundwater, wastewater, atmospheric-deposition, animal-feed, transfer-factor). Numbers never enter thresholds. See ullah2022-khyber-vegetables-metals, liu2023-yuyao-soil-crop-metals.
      (a4) EXPOSURE & HEALTH EFFECT — biomonitoring (metals in blood/urine/hair/serum/nails/breast-milk), dietary-intake/exposure modelling, and toxicology (mechanism, dose-response, organ/system/neuro/reproductive effects, epidemiology). Route to the EXPOSURE and TOXICOLOGY sections of the relevant metal pages; products/ingredients EMPTY; tag the matrix (blood, urine, hair, dietary-intake). If the paper's primary contribution is a METAL–MICROBIOME interaction it belongs to WikiBiome: route to wiki/microbiome/ AND append a row to data/evidence/wikibiome-handoff-worklist.csv (pdf_path,doi,metals,microbiome_angle,raw_path) — never skip it. Numbers never enter thresholds.
      THE ONLY genuinely-OUT paper (→ skip:not-target-cell) fails ALL FOUR lanes: a metal with NO path to any consumable, supply chain, environmental compartment feeding a consumable, human exposure, health effect, or source-attribution argument — e.g. a metal purely as an industrial catalyst/alloy/semiconductor with no environmental release, or ore geology/metallurgy with no extraction/food/water/health vector. "Measured in soil/water/air/sediment/blood" is NOT a skip reason. When unsure, INCLUDE. See docs/conventions.md "Ingest scope".
  (b) dedup-rollup — DOI already exists in wiki/sources/*.md (grep the doi: field across wiki/sources/); fold into existing canonical page, mark wishlist row "ingested"
  (c) skip:<reason> — GENUINE false positive only; the BURDEN OF PROOF IS ON THE SKIP. A skip is valid ONLY when the paper fails ALL FOUR (a) lanes, and you MUST name which lanes fail in the note. "No finished-food table" and "measured only in soil/water/air/sediment/blood" are NOT skip reasons. Vocabulary: skip:no-heavy-metal-data / skip:not-target-cell / skip:no-occurrence-data / skip:review-only-no-primary-data / skip:not-pdf:<content-type>.
      `skip:not-food-occurrence` is RETIRED and FORBIDDEN — never emit it. It wrongly dropped non-food products, pathway (a3), source-attribution (a3), marine-bioaccumulation (a3), and downstream-effect (a4) papers.
      `skip:no-heavy-metal-data` = no heavy-metal analyte measured or modelled anywhere in the paper.
      `skip:not-target-cell` = a heavy metal is present but fails ALL FOUR lanes (industrial catalysis/alloy/semiconductor with no environmental release, ore geology with no food/water/health/attribution vector). NOT for soil/marine/atmospheric/biomonitoring/toxicology papers — those are a3/a4.
      `skip:no-occurrence-data` = an in-scope matrix is present but the paper reports NO measured or modelled value AT ALL (method-development with no results, a concept paper, a pure secondary review with no extractable primary data). A survey WITH values in soil/water/marine/biomarker matrices is a3/a4 real-ingest, NOT this skip.
  (d) escalation — paper-internal contradiction, unreadable language, DOI conflict (see ESCALATION below)

Batch-commit ALL (b)+(c) decisions to data/evidence/wishlist-fetch-audit.csv in ONE commit titled:
  triage sweep <date> <time>: <K> rollups + <P> skips

STEP 4 — INGEST SWEEP. For the (a) pile, write source pages per CLAUDE.md Part 6 template (TL;DR prose under H1, then ## Key numbers, ## Methods (brief), ## Implications, ## Related evidence). Do not put Verification notes, an Ingest log, or "Wiki pages updated on ingest" on the public page. Identity checks, file paths, audit verdicts, and routing notes go in wiki/batch-reports/, which is not published.

HARD RULES — placeholder pages are FORBIDDEN. If you cannot extract real numbers from the PDF, the PDF is (c) skip:no-primary-data, NOT (a) ingest. Specifically:
  - cite_key MUST be <first-author-surname><year>-<topic-slug>. NOT "trace2025-...", NOT "research2026-...", NOT "abstract2020-...", NOT "rsc2025-...", NOT "unknown2025-...". If you cannot identify the first author's surname from the PDF byline (NOT the title's first word), the PDF goes to (c) skip:no-author-attribution.
  - NO empty required fields. authors, doi, journal, year, publication MUST be populated from the PDF. If any are missing, the PDF is (c) skip:incomplete-metadata.
  - NO "status: pending-review" field. NO "tags:" field. NO "study_design:" or "geographic_scope:" custom fields. Only the frontmatter fields in CLAUDE.md Part 6 are permitted.
  - NO placeholder prose ("Pending full paper integration", "Notes for Integration", "Study Overview" without real numbers). If a section can't be filled with real PDF content, the PDF is not (a) ingest.

Frontmatter discipline per CLAUDE.md Part 5:
  - cite_key: <first-author><year>-<topic-slug> (lowercase, hyphenated, disambiguated -a/-b if collision)
  - raw_handle: AUTO_<wishlist-row-id>
  - raw_path: relative path to the PDF
  - doi, title, authors, year, publication: from the PDF (NOT from filename)
  - source_type, evidence_tier (peer-reviewed=A; gov report=A; industry=B; news=C)
  - metals: [Pb, Cd, iAs, tAs, ...] at the specificity the source actually states (broad scopes are fine; routing layer fans out)
  - ingredients/products/matrices/jurisdictions: only existing slugs (check wiki/ingredients/, wiki/products/ — autonomy stub creation is handled separately via provisional-scaffold tools, see PROHIBITIONS)

COMMIT + PUSH AFTER EACH PAGE (not in batches — a batch you don't finish is lost when the timeout fires):
  git add <the source page> data/evidence/autonomy/manual-fetch-tracker.csv data/evidence/autonomy/agent-events.jsonl
  git commit -m "ingest auto-fetched <date>: <cite-key>"
  git push origin main
The push is GitHub backup/sync only. It must not be used as a production publish trigger; Vercel auto-deploys are disabled and site publishing is manual-only.
Then append the agent-events.jsonl ledger line for that page (see AGENT LEDGER above), and move to the next of your ≤3.

STEP 5 — UPDATE TRACKER. As part of each page's single commit (above), set its row in data/evidence/autonomy/manual-fetch-tracker.csv to status="ingested-by-codex" with the commit hash.

STEP 6 — AUDIT (best-effort). After each batch, try to spawn fresh-context audits per docs/gpt-collaboration/audit-prompt.md (5 checks: numerical fidelity, slug vocabulary, speciation/methods, brand firewall, wiki/HMTc firewall). If `agent thread limit reached`, write each page's audit-queue row with status=pending-audit-spawn-failed and CONTINUE. NEVER stop on spawn failure — Claude drains the async-audit lane separately.

STEP 7 — END-OF-FIRE CLEANUP (SKIP unless you finished your ≤3 pages with time to spare). FRANK now owns periodic regeneration of the routing audit, completion-matrix, and sprint-dashboard — do NOT spend your limited budget on them. The ONLY thing you must do every fire is commit + push each page individually (done in STEP 4) so nothing is lost when the timeout fires. If and only if you have clear time left after your pages:
  npm run evidence:source-routes && git add -A && git commit -m "codex sprint <date>: routing refresh" --allow-empty && git push origin main

ESCALATION RULES — exercise AI judgment first. Only escalate what NO AI agent could resolve:
  • Paper-internal contradiction (abstract n=200 but Table 1 n=152): prefer tables over abstract; state the discrepancy in Key numbers or Limitations in reader language; record the check itself in the batch report; continue.
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
