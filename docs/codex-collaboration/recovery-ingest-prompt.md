# Codex Recovery-Ingest Prompt — re-open papers wrongly skipped under the old narrow scope (locked 2026-06-10)

Set this as Codex's recurring automation prompt for the RECOVERY backlog (separate from the routine `sprint-ingest-prompt.md`). Karen pastes it verbatim. It is self-contained per fire. It works the backlog of papers that were skipped before the 2026-06-10 scope widening and that will never auto-re-triage on their own.

---

## The prompt (paste this)

```
GOAL (RECOVERY — locked 2026-06-10): re-open and re-ingest a SMALL, bounded batch of papers that were SKIPPED under the old narrow scope and are IN-SCOPE under the new inclusion-by-default rule. This is a large backlog worked over many fires. Do NOT try to drain it in one fire. Commit + push each page individually.

WHY THIS EXISTS: scope was widened on 2026-06-10 (commits c4f5304, 4039d20, b94966e). Papers skipped before that — soil / sediment / marine / atmospheric / irrigation / fertiliser / biomonitoring / toxicology / source-attribution — carry TERMINAL skip rows (skip:not-food-occurrence, skip:no-occurrence-data, skip:not-target-cell) in data/evidence/wishlist-fetch-audit.csv and data/evidence/autonomy/manual-fetch-tracker.csv. The snapshot sweep treats them as "already-dispositioned" and will NEVER look at them again. You must actively re-open them and clear the stale skip. That clearing step is what makes recovery stick.

YOUR CONTRACT THIS FIRE:
  - Process AT MOST 5 recovery papers. Commit + push after EACH page individually. One page = one commit.
  - Standard reasoning effort. Escalate only on a paper-internal contradiction or a genuine scope dispute.

THE SCOPE RULE — INCLUSION IS THE DEFAULT; EXCLUSION BEARS THE BURDEN. A paper is IN-SCOPE unless it fails EVERY lane below. "No finished-food table" and "measured only in soil / water / air / sediment / blood" are NEVER sufficient reasons to skip. When unsure, INCLUDE (the firewall keeps non-occurrence numbers out of the HMTc thresholds, so a wrong include is cheap; a wrong skip breaks the completeness claim that the program's legal defensibility rests on). The four real-ingest lanes:
  a1 PRODUCT OCCURRENCE — metals measured in any food/non-food consumer product. -> the products/ingredients it measures.
  a2 MITIGATION/REMEDIATION — anything that REMOVES/REDUCES metals (phytoremediation, biochar, chelation, sequestration, adsorbents/biosorption, soil/water remediation). -> wiki/mitigation/, products/ingredients EMPTY.
  a3 SUPPLY-CHAIN SOURCE / PATHWAY / ATTRIBUTION — upstream matrices that explain HOW a consumable gets contaminated, or which industry put the metal there (soil->crop; MARINE/estuarine/coastal water & sediment -> fish/shellfish/algae/seaweed; ATMOSPHERIC deposition from smelting/mining/shipping/traffic/AVIATION-leaded-avgas; irrigation/waste water, sludge, biosolids, manure, fertiliser; animal feed; AND source-attribution papers naming WHICH industry pollutes, even with no named crop). Route to the MATCHING supply-chain hub:
        soil -> crop ............................. supply-chain/soil-to-plant-transfer
        water/sediment/marine -> seafood/algae ... supply-chain/aquatic-bioaccumulation
        airborne fallout / deposition ............ supply-chain/atmospheric-deposition
        irrigation water/sludge/biosolids/
          manure/fertiliser ...................... supply-chain/irrigation-and-soil-amendments
        which-industry-polluted (attribution) .... supply-chain/source-attribution-environmental-burden-apportionment
     products/ingredients EMPTY; tag the environmental matrix (soil, sediment, marine-water, irrigation-water, groundwater, wastewater, atmospheric-deposition, animal-feed, transfer-factor).
  a4 EXPOSURE & HEALTH EFFECT — biomonitoring (blood/urine/hair/serum), dietary-intake/exposure modelling, toxicology (mechanism, dose-response, neuro/reproductive, epidemiology). -> the Exposure and Toxicology sections of the relevant metal pages; products/ingredients EMPTY; tag the matrix (blood, urine, hair, dietary-intake). If the paper is primarily a METAL-MICROBIOME study, route to wiki/microbiome/ AND append a row to data/evidence/wikibiome-handoff-worklist.csv (pdf_path,doi,metals,microbiome_angle,raw_path); do NOT skip it.
  GENUINELY-OUT (-> leave the skip, do not ingest) only if it fails ALL FOUR lanes: no heavy-metal analyte at all, or a metal with no path to any consumable, supply chain, environmental compartment feeding a consumable, exposure, health effect, or source-attribution argument. Name which lanes fail.

STEP 1 — PICK YOUR SLICE FROM THE RECOVERY WORK-LIST.
  Primary work-list: data/evidence/autonomy/pathway-reingest-worklist-2026-06-10.csv
  Columns: pdf_path,prior_verdict,note_excerpt,new_verdict,primary_vector,target_home,reason
  Take the FIRST 5 rows where new_verdict = INCLUDE whose pdf_path lives under raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ (YOUR folder). SKIP rows whose pdf_path is under raw/Manual Fetch Kimi /, raw/Papers Cube Manual Fetch/, raw/Manual Resourcing/, or raw/Manual Fetch Discovery/ — those are the Opus/Claude recovery lane, not yours.
  The worklist verdict and primary_vector are a CANDIDATE label, not gospel — you re-judge against the four lanes by reading the PDF (STEP 3). Treat WIKIBIOME-HANDOFF rows per the a4 microbiome rule; leave GENUINELY-OUT rows alone.
  SECONDARY (only after the auto-fetched INCLUDE rows are exhausted): sweep data/evidence/wishlist-fetch-audit.csv for rows with decision skip:not-food-occurrence / skip:no-occurrence-data / skip:not-target-cell whose filename or note names an environmental or biomarker matrix (soil|sediment|marine|ocean|seawater|estuar|coastal|irrigation|groundwater|wastewater|sludge|biosolid|atmospheric|deposition|aerosol|smelter|mining|aviation|shipping|blood|urine|hair|serum|biomonitor|toxicit|microbiome), and re-judge those.

STEP 2 — RACE-SAFE CLAIM. For each candidate, check data/evidence/autonomy/manual-fetch-tracker.csv and the last ~50 lines of data/evidence/autonomy/agent-events.jsonl. If the paper already shows status ingested / ingested-by-codex / recovered / claimed, SKIP it. Otherwise add a tracker row (or update the existing one) to status="claimed-by-codex-recovery" with a timestamp before touching the PDF.

STEP 3 — RE-JUDGE BY READING THE PDF. Open the PDF, read abstract/methods/results-tables/discussion. Decide the lane (a1-a4) under the rule above, or GENUINELY-OUT.
  - If it genuinely fails all four lanes on reading: update the worklist row's new_verdict to GENUINELY-OUT with the failing lanes in the reason, leave the skip row in place, log it, and move on. Do NOT force an ingest.
  - If WIKIBIOME-HANDOFF: append the row to data/evidence/wikibiome-handoff-worklist.csv, mark the paper handled (STEP 5), do not write an HMI source page.

STEP 4 — INGEST. Write a source page at wiki/sources/<cite-key>.md per the CLAUDE.md Part 6 template, with frontmatter and routing for the lane you assigned:
  - a1 -> products/ingredients it measures.
  - a2 -> wiki/mitigation/ + metal pages; products/ingredients EMPTY; remediation matrix slug.
  - a3 -> the matching supply-chain hub (routing map above) + the consumable it informs + metal pages; products/ingredients EMPTY; environmental matrix slug.
  - a4 -> metal-page exposure/toxicology (+ wiki/microbiome/ if applicable); products/ingredients EMPTY; biomarker/intake matrix slug.
  HARD RULES (unchanged from sprint-ingest-prompt.md): real extractable numbers only — NO placeholder pages, NO invented cite-keys (cite_key = <first-author-surname><year>-<topic-slug>), NO empty required frontmatter fields, NO "status: pending-review" / "tags:" / custom fields. If you cannot extract real numbers, the paper is GENUINELY-OUT / skip:no-primary-data, not an ingest.

STEP 5 — CLEAR THE STALE SKIP (this is the load-bearing recovery step). In the SAME commit as the page:
  - data/evidence/wishlist-fetch-audit.csv: find the paper's row by filename and change its decision from skip:* to ingested.
  - data/evidence/autonomy/manual-fetch-tracker.csv: set its row status to ingested-by-codex (recovery), with the commit hash.
  - data/evidence/autonomy/pathway-reingest-worklist-2026-06-10.csv: set that row's new_verdict to RECOVERED (so the next fire skips it).
  - Append one line to data/evidence/autonomy/agent-events.jsonl: {"ts":"<iso>","actor":"codex","source_path":"<pdf>","cite_key":"<key>","status":"recovered-ingested","commit":"<sha>","blocker":"","next":""}.

STEP 6 — RUN THE ROUTING AUDIT then COMMIT + PUSH EACH PAGE INDIVIDUALLY:
  npm run evidence:source-routes
  git add wiki/sources/<page> data/evidence/wishlist-fetch-audit.csv data/evidence/autonomy/manual-fetch-tracker.csv data/evidence/autonomy/pathway-reingest-worklist-2026-06-10.csv data/evidence/autonomy/agent-events.jsonl
  git commit -m "recover-ingest 2026-06-10: <cite-key> (lane <aN>, was <old-skip-reason>)"
  git push origin main
  The push is GitHub backup/sync only. It must not be used as a production publish trigger; Vercel auto-deploys are disabled and site publishing is manual-only.
  Confirm the routing audit exits 0 and the source is not in routing_unresolved.csv / routing_malformed.csv before committing.

STEP 7 — AUDIT (best-effort), same as the sprint prompt: try to spawn a fresh-context audit per docs/gpt-collaboration/audit-prompt.md; if the agent thread limit is reached, write the audit-queue row status=pending-audit-spawn-failed and CONTINUE. Never stop on spawn failure.

STOP CRITERIA: 5 recovery pages committed this fire, OR no auto-fetched INCLUDE rows remain in the worklist and the secondary skip-ledger sweep is exhausted, OR a legitimate escalation. Self-invented stop reasons are bugs — if one fires, the run-report title MUST begin "STOPPED EARLY — <reason>".

PROHIBITIONS (unchanged): do NOT ingest from raw/Manual Fetch Kimi /, raw/Papers Cube Manual Fetch/, raw/Manual Resourcing/, raw/Manual Fetch Discovery/ (Opus recovery lane). Do NOT touch raw/markdown/. Do NOT update contamination_profile YAML on ingredient pages. Do NOT edit inside <!-- BEGIN/END --> generator markers. Do NOT hand-edit data/evidence/product_source_routing_audit.csv. Do NOT edit CLAUDE.md / OPERATING.md / AGENTS.md.

OUTPUT: data/evidence/codex-runs/recovery-<YYYY-MM-DD>-<HHMM>.md with: count recovered this fire, each cite-key + the lane it landed in + the old skip reason it cleared, per-page commit hashes, count re-judged to GENUINELY-OUT, count routed to WikiBiome handoff, remaining auto-fetched INCLUDE rows in the worklist, and the title "RECOVERY FIRE COMPLETE — <N> recovered" / "STOPPED EARLY — <reason>" / "ESCALATED — <slug>".

Start with STEP 1 now.
```

---

## Why this is a separate prompt from `sprint-ingest-prompt.md`

The sprint prompt processes NEW auto-fetched PDFs that have no disposition yet. The recovery prompt processes OLD PDFs that already carry a terminal skip decision, so it has an extra load-bearing step the sprint prompt does not: STEP 5 clears the stale skip in the audit ledgers, without which the paper stays invisible to every future sweep. The two prompts share the four-lane scope rule and the per-pathway routing map, but they read from different work-lists (the auto-fetched folder vs the recovery worklist plus the skip ledger) and they write different run-reports.

## Division of labour

Codex owns the recovery rows under `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`. The recovery rows under the MFK / Papers Cube / Manual Resourcing / Manual Fetch Discovery folders are the Opus/Claude recovery lane (run via the `ingest-next-manual-fetch-pdf` skill or a parallel Claude session), to keep the Cochrane-bar judgment on the high-judgment path and to avoid double-ingest races.
