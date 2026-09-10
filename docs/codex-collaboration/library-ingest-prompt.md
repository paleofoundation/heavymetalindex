# Codex Library-Ingest Prompt — HMI Library research-pulls: geographic / historical / remediation (locked 2026-09-10)

Set this as a Codex recurring automation prompt (Karen's external scheduler, every 20–30 min), alongside — not replacing — `sprint-ingest-prompt.md`. It drains the **HMI Library research-pulls on the `/Volumes/HMI-Library/` drive** (the Central Library sweeps), which had never been a watched ingest root, so the geographic-variance, historical/time-trend, and remediation literature "that was always supposed to be here" sat un-ingested. The papers are now reachable in-repo through gitignored symlinks under `raw/Research Pull *`. Karen pastes the block verbatim; it is self-contained per fire.

The four-lane scope rule, per-page commit discipline, race-safe tracker, and best-effort audit are identical to `sprint-ingest-prompt.md` and `recovery-ingest-prompt.md`. The two things that differ: the **scope roots** (the eight HMI Library sweeps, not the wishlist auto-fetched folder) and the **explicit welcome for geographic, historical, and remediation papers**, which the corpus is thin on and which a wrongly-narrow reader tends to skip.

---

## The prompt (paste this)

```
GOAL (LIBRARY — locked 2026-09-10): ingest a SMALL, bounded batch of papers from the HMI Library research-pulls — the geographic-variance, historical/time-trend, and remediation literature that has never been ingested. Commit + push EACH page individually. Do NOT try to drain the library in one fire (~4,000 PDFs across the sweeps); the next fire continues where you stopped. Leftover PDFs are expected and correct.

WHY THIS EXISTS: the Central Library ("HMI Library", tools/central-library) pulled thousands of PDFs into /Volumes/HMI-Library/research-pulls/ across topic sweeps (ingredient-sweep, per-metal deep dives, heavy-metal-index). Those sweeps were NEVER a watched ingest root, so the daemon and the auto-fetched Codex sprint never saw them. They carry exactly the dimensions the wiki was always supposed to have and is thin on: GEOGRAPHIC variance (region/harvest-period ranges), HISTORICAL / time-trend / legacy contamination, and REMEDIATION / mitigation. The scope rule below treats all three as first-class INCLUDE lanes.

YOUR SCOPE ROOTS THIS FIRE (all symlinks into /Volumes/HMI-Library/research-pulls/ — the drive must be mounted; if it is not, STOP and write "STOPPED EARLY — HMI-Library drive not mounted"):
  raw/Research Pull Ingredient Sweep     (RPIS)
  raw/Research Pull HMI                  (RPHMI)
  raw/Research Pull Product Sweep        (RPPS)
  raw/Research Pull Arsenic Deep Dive    (RPIAS)
  raw/Research Pull Mercury Deep Dive    (RPHG)
  raw/Research Pull Methylmercury Deep Dive (RPMEHG)
  raw/Research Pull Chromium Deep Dive   (RPCRVI)
  raw/Research Pull Nickel Deep Dive     (RPNI)
The prefix in parentheses is the raw_handle prefix for pages from that root (e.g. RPIS_<n>). NEVER touch raw/... microbiome-medicine content — the drive's microbiome-medicine sweep belongs to the MMed/WikiBiome build, not HMI.

YOUR CONTRACT THIS FIRE:
  - Process AT MOST 4 real-ingest PDFs. Commit + push after EACH page individually (one page = one commit). If you've committed 4, STOP — do not start a 5th.
  - Standard/medium reasoning effort for routine ingest. Reserve maximum reasoning only for a paper-internal contradiction or an audit dispute (see ESCALATION).

AGENT LEDGER (shared coordination, file-based — no chat):
  - START: read the last ~50 lines of data/evidence/autonomy/agent-events.jsonl to see what Claude/Opus and prior Codex fires already ingested, skipped, or flagged. Skip anything already handled.
  - AFTER EACH PAGE: append ONE json line: {"ts":"<iso>","actor":"codex","source_path":"<pdf>","cite_key":"<key>","status":"ingested|skip:<reason>|escalated","commit":"<sha>","blocker":"","next":""}. Commit it with the page.

STEP 1 — SNAPSHOT + DEDUP-CHEAP-FIRST. Pick ONE scope root this fire (rotate roots across fires; start with whichever the ledger shows least-recently touched, default RPIS). Each sweep subject folder contains a `_manifest.csv` with columns runId,subject,group,query,decision,source,via,bytes,title,doi,oa_url,file. Rows with decision=`dup:corpus` are ALREADY in the corpus — SKIP those PDFs without opening them. Build your candidate slice from manifest rows whose decision is NOT dup:corpus (or which have no manifest row), preferring rows whose subject/query names a region, a year-range, or a remediation/mitigation term. First tool call:
  ls -1 "raw/<chosen root>"/*/  2>/dev/null | head    # subject folders
Then read the `_manifest.csv` for one subject folder to get the non-dup candidates. That list is your scope; new PDFs added mid-fire are the NEXT fire's job.

STEP 2 — RACE-SAFE CLAIM. Before processing any PDF, check data/evidence/autonomy/manual-fetch-tracker.csv. If a row matches the PDF's filename AND status starts with "claimed" or "ingested", SKIP it. Otherwise add a row status="claimed-by-codex-library" + a timestamp before touching the PDF. Also grep the PDF's DOI across wiki/sources/*.md (the doi: field) — if it already exists, this is a (b) dedup-rollup, not a fresh ingest.

STEP 3 — TRIAGE A SMALL SLICE. Do NOT open all candidates. Open only the FIRST ~6 unclaimed non-dup candidates; stop triaging once you have 4 in the (a) real-ingest pile. Classify each:
  (a) real-ingest — FOUR lanes, all fully in-scope. DEFAULT IS INCLUDE. A wrong include is cheap (the firewall keeps non-occurrence numbers out of HMTc thresholds); a wrong skip breaks the "complete literature" defensibility claim (Governing Principle 4). NEITHER "old data / pre-2015" NOR "measured only in soil/water/air/sediment/blood" NOR "no finished-food table" is EVER a skip reason.
      (a1) PRODUCT OCCURRENCE — metals in ANY in-scope consumer product (food AND non-food) with extractable concentration data. Route to the products/ingredients it measures. If the paper reports the SAME product across regions or across years, it is STILL a1 — capture the GEOGRAPHIC and/or HISTORICAL breakdown in ## Key numbers (per-region and per-period rows), because that regional/harvest-period/time-trend range is the whole reason the Library was pulled. Tag matrices with the region/period where the source states them.
      (a2) MITIGATION / REMEDIATION — a peptide, plant, biochar, amendment, adsorbent, or process that REMOVES or REDUCES heavy metals (phytoremediation, bioremediation, chelation, sequestration, biosorption, agronomic/processing levers). Route to wiki/mitigation/ + the metal pages; products/ingredients EMPTY unless it targets a specific crop/product; tag the remediation matrix so its numbers never enter occurrence thresholds. The per-metal deep-dive sweeps are dense with these.
      (a3) SUPPLY-CHAIN SOURCE, PATHWAY & ATTRIBUTION — upstream matrices explaining HOW a consumable gets contaminated, or WHICH industry put the metal there (soil->crop; marine/estuarine/coastal water & sediment -> fish/shellfish/algae/seaweed; ATMOSPHERIC deposition from smelting/mining/shipping/traffic/aviation-leaded-avgas; irrigation/waste water, sludge, biosolids, manure, fertiliser; animal feed; source-attribution naming a polluting industry even with no named crop). Route to the MATCHING wiki/supply-chain/ hub:
            soil -> crop ............................. supply-chain/soil-to-plant-transfer
            water/sediment/marine -> seafood/algae ... supply-chain/aquatic-bioaccumulation
            airborne fallout / deposition ............ supply-chain/atmospheric-deposition
            irrigation/sludge/biosolids/manure/fert .. supply-chain/irrigation-and-soil-amendments
            which-industry-polluted (attribution) .... supply-chain/source-attribution-environmental-burden-apportionment
         plus the consumable it informs + metal pages; products/ingredients EMPTY; tag the environmental matrix. HISTORICAL legacy-contamination and long-term deposition-trend papers land here (a3) or a4 — they are IN, not skips; they are the evidence a brand uses to argue legacy/ambient rather than sole liability.
      (a4) EXPOSURE & HEALTH EFFECT — biomonitoring (blood/urine/hair/serum/nails/breast-milk), dietary-intake/exposure modelling, toxicology (mechanism, dose-response, organ/neuro/reproductive, epidemiology), INCLUDING time-trend exposure studies (NHANES-style decadal trends). Route to the EXPOSURE and TOXICOLOGY sections of the relevant metal pages; products/ingredients EMPTY; tag the matrix. If the primary contribution is a METAL–MICROBIOME interaction, route to wiki/microbiome/ AND append a row to data/evidence/wikibiome-handoff-worklist.csv (pdf_path,doi,metals,microbiome_angle,raw_path) — never skip it.
      THE ONLY genuinely-OUT paper (→ skip) fails ALL FOUR lanes: a metal with NO path to any consumable, supply chain, environmental compartment feeding a consumable, exposure, health effect, or source-attribution argument — e.g. a metal purely as industrial catalyst/alloy/semiconductor with no environmental release, or ore geology/metallurgy with no food/water/health vector. Name which lanes fail. When unsure, INCLUDE.
  (b) dedup-rollup — DOI already in wiki/sources/*.md; fold into the existing canonical page, mark the manifest/tracker row ingested. Do NOT write a second page.
  (c) skip:<reason> — GENUINE false positive only; burden of proof is on the skip; name which of the four lanes fail. Vocabulary: skip:no-heavy-metal-data / skip:not-target-cell / skip:no-occurrence-data / skip:review-only-no-primary-data / skip:not-pdf:<content-type> / skip:no-author-attribution / skip:incomplete-metadata. `skip:not-food-occurrence` is RETIRED and FORBIDDEN.
  (d) escalation — paper-internal contradiction, unreadable language, DOI conflict (see ESCALATION).

Batch-commit ALL (b)+(c) decisions to data/evidence/wishlist-fetch-audit.csv in ONE commit titled:
  library triage <date> <time>: <K> rollups + <P> skips

STEP 4 — INGEST. Write source pages per the CLAUDE.md Part 6 template (TL;DR prose under H1, then ## Key numbers, ## Methods (brief), ## Implications, ## Wiki pages this source may touch, ## Verification notes). For a1 geographic/historical papers, ## Key numbers MUST break out the per-region and/or per-period values, not just a pooled mean.

HARD RULES — placeholder pages are FORBIDDEN (identical to sprint-ingest-prompt.md):
  - cite_key MUST be <first-author-surname><year>-<topic-slug>. NOT "trace2025-…", "research2026-…", "abstract2020-…", "unknown2025-…". If you cannot identify the first author's surname from the PDF byline, the PDF is (c) skip:no-author-attribution.
  - NO empty required fields (authors, doi, journal, year, publication from the PDF). Missing → (c) skip:incomplete-metadata.
  - NO "status: pending-review", NO "tags:", NO custom fields. Only the Part 6 frontmatter fields.
  - NO placeholder prose. If a section can't be filled from the PDF, the PDF is not (a) ingest.

Frontmatter discipline per CLAUDE.md Part 5:
  - cite_key: <first-author><year>-<topic-slug> (lowercase, hyphenated, -a/-b on collision)
  - raw_handle: <PREFIX>_<n> using this root's prefix (RPIS/RPHMI/RPPS/RPIAS/RPHG/RPMEHG/RPCRVI/RPNI)
  - raw_path: the path THROUGH THE SYMLINK, e.g. "raw/Research Pull Ingredient Sweep/<subject>/<file>.pdf" (do NOT write the /Volumes/... path — the symlink is the stable in-repo handle)
  - doi, title, authors, year, publication: from the PDF (NOT the filename)
  - source_type, evidence_tier (peer-reviewed=A; gov report=A; industry=B; news=C)
  - metals: at the specificity the source states (broad scopes are fine; the routing layer fans out)
  - ingredients/products/matrices/jurisdictions: only existing slugs; for a2/a3/a4 leave products/ingredients EMPTY and tag the environmental/remediation/biomarker matrix. Genuinely-novel slug -> run tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs; ingest continues.

COMMIT + PUSH AFTER EACH PAGE (not in batches):
  git add <the source page> data/evidence/autonomy/manual-fetch-tracker.csv data/evidence/autonomy/agent-events.jsonl
  git commit -m "ingest library <date>: <cite-key> (lane <aN>, <RPIS|RPHMI|...>)"
  git push origin main
The push is GitHub backup/sync only. It is NOT a production publish trigger; Vercel auto-deploys are disabled and site publishing is manual-only.
Then set the PDF's row in data/evidence/autonomy/manual-fetch-tracker.csv to status="ingested-by-codex-library" with the commit hash, and append the agent-events.jsonl ledger line. Move to the next of your ≤4.

STEP 5 — AUDIT (best-effort). After each page, try to spawn a fresh-context audit per docs/gpt-collaboration/audit-prompt.md (5 checks: numerical fidelity, slug vocabulary, speciation/methods, brand firewall, wiki/HMTc firewall). If "agent thread limit reached", write the audit-queue row status=pending-audit-spawn-failed and CONTINUE. NEVER stop on spawn failure.

STEP 6 — END-OF-FIRE (only if you finished your ≤4 with clear time to spare):
  npm run evidence:source-routes && git add -A && git commit -m "library sprint <date>: routing refresh" --allow-empty && git push origin main
Confirm the routing audit exits 0 and your pages are not in routing_unresolved.csv / routing_malformed.csv.

ESCALATION RULES — exercise AI judgment first; only escalate what NO AI agent could resolve:
  • Paper-internal contradiction (abstract n=200 but Table 1 n=152): prefer tables; note in Verification notes; continue.
  • DOI conflict (PDF is a different paper than the manifest row claims): inspect the actual PDF; if a real in-scope paper, ingest under its actual cite-key with -a/-b; note the mismatch; continue.
  • Unfamiliar slug: closest existing per wiki/ingredients/ or wiki/products/; provisional-scaffold tool for genuinely novel; continue.
  • Three consecutive QUARANTINE audit verdicts: recalibrate against audit-prompt.md Check 4 + Exception 2 (instrument/CRM/software vendor names ARE permitted in Methods); continue.
Write data/evidence/escalations/<YYYY-MM-DD>-<HHMM>-<slug>.md ONLY when ALL true: (1) blocks all progress, (2) no AI agent can resolve, (3) genuine human-only authority required (HMTc Step 0 Lock, regulatory-value arbitration, brand-firewall edge case).

STOP CRITERIA: 4 library pages committed this fire, OR the chosen root's non-dup candidates are exhausted (rotate to the next root next fire), OR HMI-Library drive not mounted, OR a legitimate escalation. Self-invented stop reasons ("done enough", "feels complete", "been at this a while", "agent spawn failing", "routing looks clean") are bugs — if one fires, the run-report title MUST begin "STOPPED EARLY — <reason>".

PROHIBITIONS:
  • Do NOT ingest the drive's microbiome-medicine sweep (MMed/WikiBiome build).
  • Do NOT ingest from raw/Manual Fetch Kimi/, raw/Papers Cube Manual Fetch/, raw/Manual Resourcing/, raw/Manual Fetch Discovery/ (Opus/Claude Cochrane-bar lane), the seasonal-geographic-variance/auto-fetched/ folder (that is the sprint-ingest-prompt.md lane), or raw/markdown/ (23K Marker corpus).
  • Do NOT update contamination_profile YAML on ingredient pages (Part 9 synthesis writer races).
  • Do NOT edit inside <!-- BEGIN: … --> / <!-- END: … --> generator markers.
  • Do NOT hand-edit data/evidence/product_source_routing_audit.csv.
  • Do NOT edit CLAUDE.md / OPERATING.md / AGENTS.md.

REGULATION PAGES: directly create on first encounter per CLAUDE.md Part 10. Required frontmatter: rule_id, jurisdiction, agency, metal, matrix, limit_value, limit_unit, status, effective_date, source_url. Superseded regs: add sunset_date + superseded_by wikilink.

OUTPUT: data/evidence/codex-runs/library-<YYYY-MM-DD>-<HHMM>.md with: chosen root; candidates considered; breakdown (a) ingests / (b) rollups / (c) skips / (d) escalations, with each ingest's cite-key + lane (a1-a4) + geographic/historical/remediation flag; per-page commit hashes; audit-queue rows added; and the title "LIBRARY FIRE COMPLETE — <N> ingested" / "ESCALATED — <slug>" / "STOPPED EARLY — <reason>".

Start with STEP 1 now.
```

---

## Why this is a separate prompt from `sprint-ingest-prompt.md` and `recovery-ingest-prompt.md`

Three prompts, three work-lists, no overlap:

- `sprint-ingest-prompt.md` drains NEW auto-fetched wishlist PDFs in `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`.
- `recovery-ingest-prompt.md` re-opens OLD auto-fetched PDFs that carry a stale terminal skip from before the 2026-06-10 scope widening (extra load-bearing step: clear the skip).
- **this prompt** drains the HMI Library research-pulls on the `/Volumes/HMI-Library/` drive (the Central Library topic sweeps), which were never a watched root at all. Its dedup is manifest-driven (`_manifest.csv` `dup:corpus` rows are skipped unopened), and it explicitly captures the geographic, historical/time-trend, and remediation dimensions the sweeps were pulled for.

They share the four-lane scope rule, the per-page commit discipline, the shared tracker, and the best-effort audit.

## Division of labour

**Codex is the ONLY drainer of the HMI Library.** The Opus/Claude autonomy daemon is dormant **by design** — it caused a token runaway on 2026-06-09 and is not to be restarted. To make sure an accidental restart can never point the expensive Opus path at this ~4,000-PDF backlog, the five net-new `raw/Research Pull *` roots are deliberately **NOT** registered in `tools/autonomy/ingest-manual-fetch-batch.mjs`. This prompt does not depend on that registration: it reads the `raw/` symlink paths directly and carries its own handle prefixes (RPIS/RPHMI/RPPS/RPIAS/RPHG/RPMEHG/RPCRVI/RPNI). (Three legacy roots — Ingredient Sweep, Mercury Deep Dive, Product Sweep — predate this and remain in the daemon config, but the daemon is off.)

## Reachability note (how the Library was wired in, 2026-09-10)

The research-pulls live on `/Volumes/HMI-Library/research-pulls/`. They are exposed to ingest through gitignored symlinks in `raw/` (same pattern as `raw/Manual Fetch Discovery`, `raw/studies`, `raw/markdown`):

```
raw/Research Pull Ingredient Sweep      -> research-pulls/ingredient-sweep          (2115 PDFs)
raw/Research Pull HMI                   -> research-pulls/heavy-metal-index          (590)
raw/Research Pull Product Sweep         -> research-pulls/product-sweep              (54)
raw/Research Pull Arsenic Deep Dive     -> research-pulls/metal-deep-dive-…-ias      (254)
raw/Research Pull Mercury Deep Dive     -> research-pulls/metal-deep-dive-mercury-hg (357)
raw/Research Pull Methylmercury Deep Dive -> …-methylmercury-mehg                    (273)
raw/Research Pull Chromium Deep Dive    -> …-hexavalent-chromium-cr-vi               (208)
raw/Research Pull Nickel Deep Dive      -> …-nickel-ni                               (200)
```

The drive's `microbiome-medicine` sweep (631 PDFs) is deliberately NOT symlinked — it belongs to the MMed/WikiBiome build. The drive must be mounted for any Library fire; the prompt stops cleanly if it is not.
