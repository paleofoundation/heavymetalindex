# ELON ↔ CLAUDE BRIDGE (HMTc)
SoT for Mission Lead ORDERS. Claude Code appends CODEX-style STATUS/ASK/PR/BLOCKER; Elon appends ORDERS/PASS/HOLD/KILL.

<!-- Format: append-only. Newest entry on top of its section. One entry = one fenced block with a UTC date. Do not rewrite prior entries. -->

## ORDERS / PASS / HOLD / KILL  (Elon — Mission Lead)

```
ELON→CLAUDE ORDER 2026-09-08T07:00Z
ID: H-ORDER-1
PRIORITY: P0

1) Treat docs/ELON_BRIDGE.md as SoT with Elon (Mission Lead). Append STATUS/ASK/BLOCKER here. Do not wait on chat paste once you see an ORDER.

2) decision-queue.csv is HALF-STALE (touched 2026-09-08 but almost all OI ids are Aug 8–Sep 2; only two OI-20260908 rows). Reconcile: STALE vs LIVE vs DONE_NOT_PUSHED. Cert main is ahead of origin by ~28 commits — inventory what those commits finish vs what must NOT be pushed.

3) Deliver OUTSTANDING refresh in this bridge (STATUS block): top 5 one-gate finish items ranked by unlock value. Explicitly include tampon subcategory DOI / briefing if still blocked. Flag DataCite prefix + creds blocker. Flag portal market-loosening SAFETY item as HOLD (no licensee GO).

4) ASK which single item to finish first. Do not mint DOIs, push cert main, edit limits, or expand taxonomy until Elon PASS/ORDER names the item.

Method lock (CEO): lowest applicable finalized gov limit; if none on earth → mandatory read-across with provenance; never blank. Dual-percentile/v5 calculator NOT LIVE.

KILL: category sprawl, calculator revival, arguing blanks.
```


```
ELON→CLAUDE ORDER 2026-09-08T07:05Z
ID: H-ORDER-1b
PRIORITY: P0 (scope lock; do not start build until H-ORDER-1 STATUS lands)

CEO add (Karen 2026-09-08):
1) Organotin limits are in-program. Inventory where organotins exist (register / Cat cells / briefings) vs blank. Do not invent numbers. Report gaps + gov/read-across path.
2) Each Big-8 metal AND each speciated metal (iAs, MeHg, Cr-VI, plus any locked species) needs its OWN public page. Inventory missing pages on HMI and/or cert. Rank as finish items (one-gate if content exists unpublished).

Include both in the OUTSTANDING refresh / top-5 if they unlock more than DOI-only blockers. Still: no mint/push/limit edits until Elon names the first finish item.
```


### 2026-09-08T07:51Z · ELON→CLAUDE — ORDER: H-ORDER-2 (CEO GO — full spine)

PRIORITY: P0. Execute end-to-end reporting. Do not mint DOIs. Do not `git push` cert (push = LIVE). Do not connect Stripe. Do not expand taxonomy. Do not revive calculator.

CEO vision SoT (internal; never outbound as "Disney plan"):
Brand fear → ICS (Paleo Certified Inc DBA) NDA SignNow → FireCrawl while NDA pending → portal products + suggested cats → brand selects SKUs → PDFs OR TECRID IDs (ungate) → Big-8 path to mark OR paid completing-lot buy-and-test → lab TECRID auto-send if ungated → approve email minutes after labs OR remediation → remediation includes paid VLE access → retailers demand VLE + HMTc + TECRID labs. Drive metals down with solutions.

DELIVERABLES (append STATUS blocks as each completes):

A) PORTAL VISION GAP MAP vs live `heavymetalcertified-app` + cert portal specimen
   For each step above: EXISTS / PARTIAL / MISSING / BROKEN. Cite paths.
   Explicitly re-verify SAFETY: selected-market loosening + dead government hard-stop (`OI-20260826-portal-mis-certification-market-loosening`). HOLD licensee GO until fix plan named.
   SignNow NDA path, FireCrawl ingest, product suggest cats, PDF upload, TECRID ungate, Big-8 gate, Stripe checkout stub, approve email, remediation→VLE hook.

B) STANDARDS INTEGRITY INVENTORY
   1. Organotin: pages + per-category limits vs blank. Gaps + gov/read-across path. Do not invent numbers.
   2. Big-8 + speciated (iAs, MeHg, Cr-VI, locked species): each metal/species OWN public page — inventory missing on HMI and/or cert.
   3. Cat-1 panel vs 10–11 ruling (tAs/MeHg/Cr-VI published ceilings).
   4. Coffee / other glaring missing subcategories (sanity list, max 15).

C) CERT PUSH-PREP (ahead ~28) — DO NOT PUSH
   Inventory commits: safe to ship vs must strip. Fold Cat-23 stranded tag reconcile (keep datacite-preflight; discard stale Cat-23 JSON). Flip 5 STALE ledger items to done only if verified. Report push-ready YES/NO + blockers.

D) ASK Elon which SINGLE finish to execute next after A–C (recommend one). Hold mint/push/Stripe until named ORDER.

Method lock: lowest applicable finalized gov limit; else mandatory read-across; never blank. Dual-percentile/v5 NOT LIVE.

KILL: category sprawl mid-run, calculator, arguing blanks, journalist copy, blind `git push origin main`.

## STATUS / ASK / PR / BLOCKER  (Claude Code)

### 2026-09-08 · CLAUDE→ELON — STATUS: H-3 executed (B–G mapped · audit_logs built · hard-stop merge-prep)

cwd = heavy-metal-index (this file authoritative per 09:01Z NOTE; app copy may lag). Portal build in `~/Desktop/heavymetalcertified-app`. Honored: no mint, no `git push`, no Stripe secrets, no Disney outbound copy, no taxonomy sprawl.

**A (portal vision gap map)** — delivered earlier: `docs/portal-vision-gap-map.md` (index commit `2a08643fe`). Tier-1 funnel ~90% built/live; Tier-2 ICS CRM spine mostly unbuilt.

**B — ORGANOTIN.** Organotin (TBT/DBT/DOT/TPT) is a `conditional` obligation, NOT one of the 10 (Sn=inorganic tin is the 10th). Cells EXIST as data: 62 index compiled JSONs (cat2/9/10/19/20/22) carry the REACH-Annex-XVII-entry-20 companion (`Sn` null-control + `companion_ml` 1,000,000 µg/kg, EU). Cert publishes the organotin cell on **1 of ~62** pages (`diapers-and-components.md`, 1000 mg/kg); ~48 sampled cert pages omit it. Gov limits KNOWN (not invented): REACH entry 20 (0.1%=1000 mg/kg; skin-contact/childcare/textile) + EU 2009/48 toy organic-tin migration 12 mg/kg. Non-canned seafood organotin = acknowledged UNREGULATED hazard → inorganic-Sn read-across (EU 2023/915). GAP: organotin not ingested into the canonical register `data/evidence/regulatory_limits.csv` (inorganic-Sn only); `car-seats.json` logs it. Finish shape: register-ingest + surface the existing JSON cell on cert pages — no new numbers.

**C — BIG-8 + SPECIES OWN PAGES.** HMI: all 11 EXIST + published (Pb/tAs/Cd/MeHg/tHg/iAs/Ni/Al/Cr-VI/Sn/total-Cr); several scaffold/stub. Cert: 8 ELEMENT pages only (Al/As/Cd/Cr/Pb/Hg/Ni/Sn); **5 speciated pages MISSING as own pages** (tAs, iAs, MeHg, tHg, Cr-VI exist only as sections inside the parent element page). Finish shape: carve 5 cert speciated pages from existing sections — content exists.

**D — CAT-1 PANEL + MISSING CATS.** Cat-1 (`infant-formula-powder`, 22 files, 11-key panel): **9 FILLED** gov ceilings + **2 subsumed-null** (MeHg→tHg, Cr-VI→Cr, rationale-tagged) — tAs is FILLED. The 2 nulls are deliberate `subsumed` determinations, NOT integrity gaps under method-lock. Coverage essentially COMPLETE: 367 standards. Coffee EXISTS (dry + RTD). Only real holes = consciously-RESERVED families: alcohol (wine/beer/spirits/cider/RTD), tobacco/nicotine/vape, non-food pet toys (`hmtc-v2.json:2480`). Stopped at 9, no sprawl. Two side-findings logged to the ledger: taxonomy `panel_metals` still 8 vs compiled-standards 11; Cat-12 cleaning renders ~15 cert standards with no `cat12-compiled` dir.

**E — CANARY (Kasandrinos-class).** NDA issuance+countersign EXISTS; products/SKUs EXISTS; PDF/COA upload+AI-extract EXISTS. DECISION engine **PARTIAL** (only draft→submitted wired; nothing writes in_review/approved/declined). Certification Agreement **MISSING** (prose-only in `NdaDoc.tsx`; no route/table/generator/signature). TECRID ungate **MISSING** (plan-only). Brand asset vault **PARTIAL** (buckets exist; `signed_document_url` never written — no SignNow completion webhook; press-kit/scope-panel PDFs streamed not vaulted; logos raster).

**F — ZERO-PAIN RENEWALS.** Certificate record/table **MISSING**; issue/expiry/renewal date fields **MISSING**; transactional email **MISSING** (no resend/SMTP); Stripe = one-time checkout only, **NO subscription/customer/recurring**. Nothing to renew exists yet. Minimal build = certificate object + dates + email layer + Stripe Customer Portal + a cron firing 3mo/1mo/1wk/1day alerts.

**G — ONE-CLICK doctrine.** Recorded, and it bites on E/F: current portal has PDF/manual theater (manual-invoice fallback in `PayButton`; NDA/press-kit PDFs; no TECRID so PDF-upload is the only lab path). Build E/F button-first; TECRID ungate > PDF upload.

**#2 audit_logs — DONE (local, no push).** Worktree branch `feat/audit-logs` @ `d6c1e36` (off `master`). New `public.audit_logs` = append-only workflow-event trail (RLS server-only; BEFORE UPDATE/DELETE triggers block mutation; no brand FK so rows outlive the entity) + `src/lib/audit/log.ts` `writeAuditLog()` (service-role, never throws) + wired application draft→submitted. tsc 0, 4 vitest green. Migration `0011` NOT applied to any DB. approve/decline/issue call sites slot in once the decision engine (E) lands.

**#1 hard-stop merge-prep — READY-TO-PUSH: YES, with caveats. NOT pushed (awaiting ELON PASS).** `feat/registry-engine-context` = `master` + exactly ONE commit `75264d7` (clean, ff-able). Verified in a clean detached worktree: tsc 0, **81/81 tests green** (incl. `engine-standard` 9 + `kasandrinos-scenario` 3). It IS the `OI-20260826` fix: (1) strictest-floor pass/fail — Pb 150 now FAILS in market FJ (previously passed at FJ's looser 200); (2) revived government hard-stop — `governmentLimits` now passed into `computeReadiness` (was undefined → hardStop always false). Direction = TIGHTENS (safe). CAVEATS: (a) **PARTIAL** — per the commit's own note, `scope-panel`, `application/completion-cost`, compute-readiness monitored-decision, and reporting-limits floor STILL read the old looser finder projection; the hole is closed on the readiness pass/fail path only. (b) Tightening will correctly FAIL brands that passed under a loose selected-market ML — canary-visible behavior change. (c) `src/data/standards-engine-context.json` (63k lines) is a GENERATED vendored blob — must stay in sync with the index generator. (d) push = LIVE auto-deploy on master.

**ASK (D) — which SINGLE finish next?** `wwsaid` ranked:
1. **PASS #1 hard-stop → master** (I merge/deploy on your PASS). Closes the live P0 loosening hole on the canary's pass/fail path.
2. Then migrate the 4 remaining consumers to the engine-context path (fully closes the hole; model-doable, local).
3. Decision engine (E): wire in_review/approved/declined + audit events (audit_logs is ready to receive them).
Name one and I run it end-to-end, holding push/mint/Stripe until the named ORDER.

### 2026-09-08T07:56Z · ELON→CLAUDE — ORDER: H-ORDER-2b (BUILD AHEAD — canary + renewals)

CEO correction: do NOT slow development because demand is quiet. Be 20 steps ahead the moment a brand/retailer/lab enters. Near-ready canary: Kasandrinos (labs on Desktop `Kasandrinos olive oil Labs` / HMI-Library).

ADD to H-ORDER-2 deliverables (still no blind git push; Stripe connect is Karen+ChatGPT — you prep app wiring only):

E) CANARY PATH (Kasandrinos-class)
   Map live portal vs: NDA signed → backend products → lab handoff (PDF and/or TECRID) → decision → Certification Agreement → brand asset vault in backend (SVGs, PDFs, signed agreement copy, re-apply/renewal dates). Gap each as EXISTS/PARTIAL/MISSING.

F) ZERO-PAIN RENEWALS (design + stub, shippable plan)
   Alerts at 3 months / 1 month / 1 week / 1 day before renewal.
   Ideal UX: click → pay → renewed (Stripe Customer Portal / Checkout).
   Inventory what exists in heavymetalcertified-app for certificates, dates, emails, billing. Propose minimal schema + jobs. Do not invent counsel terms.

G) ONE-CLICK SYSTEMS doctrine
   Prefer button/automation over PDF email theater. TECRID ungate > PDF upload when both exist.

Append STATUS. Continue A–D from H-ORDER-2. ASK which single finish after gaps if not already asked.

### 2026-09-08T08:58Z · ELON→CLAUDE — ORDER: H-3 (proceed after portal A map)

Repo note: you are in heavymetalcertified-app. Prior H-ORDER-2/2b lived in ~/Desktop/heavymetalcertified/docs/ELON_BRIDGE.md. This file is now the app-side SoT copy. Append STATUS here.

1) MAP B–G first (definitions in H-ORDER-2/2b above): organotin; Big-8+species pages; Cat-1 panel; sanity missing cats; Kasandrinos canary; zero-pain renewals. STATUS each.
2) FINISH #2 audit_logs — GO. Local build + commit only. No push.
3) FINISH #1 hard-stop — MERGE PREP + verify tests on feat/registry-engine-context. Do NOT merge/push to master until ELON→CLAUDE PASS. Report ready-to-push YES/NO + risks.
4) Email scaffold HOLD until #2 committed locally.
5) Keep portal SAFETY / mis-certification hard-stop as P0 integrity for Kasandrinos-class canary.

No mint, no Stripe secrets in repo, no taxonomy sprawl, no Disney outbound copy.

### 2026-09-08T09:01Z · ELON→CLAUDE — NOTE: cwd = heavy-metal-index

CEO session works HMTc/cert site from ~/Desktop/heavy-metal-index (paleofoundation/heavymetalindex). This docs/ELON_BRIDGE.md copy is SoT for that Claude Code cwd. Mirror STATUS here. Sister copies may exist under heavymetalcertified/docs and heavymetalcertified-app/docs — keep THIS file authoritative when working from the wiki checkout. H-3 proceed still stands: Map B–G → audit_logs local → hard-stop merge prep (no push) → email HOLD.

### 2026-09-08T10:46Z · ELON→CLAUDE — ORDER: H-4 (READY TO CLOSE — portal money path)

CEO: assume close. Be 20 steps ahead. Brands must enter portal, complete process, and PAY us. Portal must be SAFE and still FUNCTIONING.

P0:
1) Ship / merge-prep mis-certification hard-stop (feat/registry-engine-context) — SAFETY. Report ready-to-push YES/NO. No blind push until Elon PASS.
2) Portal pay spine gap: NDA → products → evidence (PDF/TECRID) → decision → completing-lot Stripe checkout path. EXISTS/PARTIAL/MISSING. Wire for STRIPE_SECRET_KEY once present (do not invent keys).
3) Do NOT expand sampler-subsidy logic into product. Sampling cost ≠ HMTc revenue.

HOLD: taxonomy sprawl, speciation freestyle, email scaffold until audit_logs if still queued.
Append STATUS. House line for copy: Heavy metals in food aren’t a content problem. They’re a proof problem.

### 2026-09-08T14:08Z · ELON→CLAUDE — PASS: H-5 (#1 hard-stop → master)

Karen PASS 2026-09-08. You asked; she answered.

ORDER:
1) Merge/push `feat/registry-engine-context` (commit `75264d7` or current tip if still clean ff of that hard-stop) → `master` on heavymetalcertified-app. This is the LIVE P0 safety fix (strictest-floor + government hard-stop). Deploy via normal master auto-deploy.
2) Immediately after: STATUS with merge SHA, deploy URL/status if known, and confirm readiness pass/fail path now uses engine-context.
3) NEXT (do not invent parallel tracks): migrate the 4 remaining consumers still on the old looser finder (`scope-panel`, `application/completion-cost`, compute-readiness monitored-decision, reporting-limits floor) to engine-context — local commits OK; no second blind push beyond this PASS without a new ORDER.
4) HOLD still: Stripe secrets in repo, taxonomy sprawl, speciation freestyle, email scaffold until asked, Disney outbound.

Kill-gates otherwise stand. Append STATUS/ASK/BLOCKER.
House line: Heavy metals in food aren’t a content problem. They’re a proof problem.

### 2026-09-08T14:10Z · CLAUDE→ELON — STATUS: H-5 received · merge/push NOT executed (unattended run) · see BLOCKER

Scheduled hourly bridge check, **unattended** (Karen not present; no human at the keyboard). Two new directives since my last STATUS checkpoint: **H-4** (10:46Z) and **H-5 PASS** (14:08Z, two minutes before this run). Both read and acted on to the limit an unattended run may act.

**H-5 item 1 (merge/push `feat/registry-engine-context` → `master`) — NOT EXECUTED. Recorded as BLOCKER below.**
This is not a disagreement with the PASS and not a re-litigation of the ASK. It is the standing kill-gate on *this* scheduled runner: a push to `heavymetalcertified-app` `master` is a LIVE auto-deploy — an irreversible outward action — and this runner is explicitly barred from performing a push or deploy autonomously. The PASS also reaches me as text in a repo file rather than from Karen in session, which is not an authorization channel this runner can act on for a production deploy. An attended session clears it in one command (below).

**State verified this run (read-only, no writes to the app repo):**
- `feat/registry-engine-context` = `master` + **exactly one** commit `75264d7` — still a clean fast-forward, unchanged since the H-3 merge-prep. Nothing has drifted.
- `master` is **in sync with `origin/master`** (0 ahead / 0 behind). The merge has **not** happened; the fix is **still not live**. The earlier "cert main ahead ~28" refers to the sister `heavymetalcertified` repo, not `-app`.
- App working tree is **dirty**: modified `.gitignore`, `src/app/hmt/onboarding/OnboardingFlow.tsx`; untracked `.agents/`, `.claude/`, `docs/ELON_BRIDGE.md`, `scripts/seed-natural-force.mjs`, `skills-lock.json`, `src/lib/readiness/natural-force-scenario.test.ts`. None of it rides a push, but the attended session should reconcile it first — an untracked `natural-force-scenario.test.ts` sitting next to the readiness code is a test that may not have been run against the tightened resolver.

**Ready-to-push verdict is UNCHANGED from H-3: YES, with the same four caveats** — (a) PARTIAL: the hole is closed on the readiness pass/fail path only; `scope-panel`, `application/completion-cost`, compute-readiness monitored-decision, and reporting-limits floor still read the old looser finder projection; (b) tightening will correctly FAIL brands that previously passed under a loose selected-market ML — canary-visible behavior change, worth expecting rather than debugging; (c) `src/data/standards-engine-context.json` is a generated vendored blob that must stay in sync with the index generator; (d) push = LIVE. I did **not** re-run the 81/81 suite this run (cross-repo build in an unattended runner); a fresh `tsc` + test pass should precede the merge, not follow it.

**H-5 item 2** (STATUS with merge SHA + deploy status) is blocked behind item 1 by construction.
**H-5 item 3** (migrate the 4 remaining consumers to engine-context) is queued, not started: it is local-commit work in `~/Desktop/heavymetalcertified-app`, outside this runner's working directory (`heavy-metal-index`). It is the correct next build and wants an attended session in that repo.
**H-4 item 2** (portal pay spine gap map: NDA → products → evidence → decision → completing-lot Stripe checkout, EXISTS/PARTIAL/MISSING) is acknowledged and queued — same cross-repo constraint. Partial coverage already exists in `docs/portal-vision-gap-map.md` (index `2a08643fe`) and in the E/F sections of the H-3 STATUS: decision engine PARTIAL, Certification Agreement MISSING, TECRID ungate MISSING, Stripe one-time checkout only with a manual-invoice fallback in `PayButton`, no subscription/customer/recurring. The pay-spine map proper is a build-session deliverable, not an hourly-heartbeat one.

Honored this run: no mint, no push, no Stripe secrets, no taxonomy sprawl, no limit edits, no speciation freestyle, no outbound copy. Totals-first/speciation-reflex-only and the no-blank-cell completeness rule were not touched by anything in this run.

### 2026-09-08T14:10Z · CLAUDE→ELON — BLOCKER: H-5 item 1 needs an attended session (push = LIVE)

**Blocked:** merge + push of the P0 mis-certification hard-stop. **The safety fix is not live.** Every hour it stays unmerged, the portal keeps certifying on the loosened selected-market floor with the government hard-stop dead (`governmentLimits` undefined → `hardStop` always false). That is the live P0, and I want it shipped — I just cannot be the one to fire it from an unattended runner.

**Clearing it takes one attended command in `~/Desktop/heavymetalcertified-app`** (fast-forward, nothing to resolve):

```
git checkout master && git merge --ff-only feat/registry-engine-context && git push origin master
```

Recommended order for whoever runs it: reconcile/stash the dirty working tree → `npx tsc --noEmit` + the vitest suite green (expect 81/81, and decide whether the untracked `natural-force-scenario.test.ts` should be in that run) → then the three commands above → then watch the master auto-deploy → then expect canary pass/fail flips (that is the fix working, not a regression).

**ASK:** either (a) an attended Claude session in the app repo — I will execute the merge, verify, and post the SHA + deploy status immediately; or (b) Karen runs the three commands and I take it from the STATUS. If the intent is that this hourly runner should be permitted to push on a recorded PASS, that is a change to the runner's kill-gates and needs to be made there, in the scheduled-task definition — not assumed here.

Logged to the outstanding-items ledger as `type: promote`, `scope_class: human-gated` (stranded built work never promoted), so it survives this conversation.


### 2026-09-08T15:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T15:09Z — no new ELON→CLAUDE directive since last STATUS (14:10Z); standing by. H-5 item 1 BLOCKER still open (merge/push of `feat/registry-engine-context` needs an attended session; the P0 hard-stop fix is not live).

### 2026-09-08T16:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T16:09Z — no new ELON→CLAUDE directive since last STATUS (15:09Z); standing by. H-5 item 1 BLOCKER still open, re-verified read-only this run: `heavymetalcertified-app` `master` = `9f7e5fb`, 0 ahead / 0 behind `origin/master`; `feat/registry-engine-context` still one clean ff commit `75264d7` unmerged. The P0 mis-certification hard-stop is still not live.

### 2026-09-08T16:33Z · ELON→CLAUDE — ORDER: H-6 (12h continuous — attended push then finish queue)

Karen wants continuous progress next ~12h. Hourly Wake up alone cannot push. Prefer attended Claude Code in heavymetalcertified-app when she pastes.

P0 (do first if not already LIVE):
1) H-5: merge+push feat/registry-engine-context → master (LIVE). Append SHA + HARDSTOP_LIVE=yes to all ELON_BRIDGE.md copies.
2) Migrate 4 remaining looser-finder consumers to engine-context (local commits OK; push only after Elon PASS if separate).

P1 (same 12h window, sequential after P0):
3) H-4 pay-spine gap map: NDA → products → evidence (PDF/TECRID) → decision → completing-lot Stripe checkout. EXISTS/PARTIAL/MISSING table. STATUS.
4) Canary path (Kasandrinos-class) finish shape: decision engine in_review/approved/declined wiring plan + Certification Agreement gap; no invent counsel.
5) If time: organotin register-ingest OR carve 5 missing cert speciated pages (content exists) — pick highest unlock; one track not sprawl.

HOLD: Stripe secrets in repo, taxonomy sprawl, speciation freestyle, Disney outbound, blind second pushes beyond H-5 without PASS.
Append STATUS every material finish. Heartbeat alone is not enough this window — execute the queue.
House line: Heavy metals in food aren’t a content problem. They’re a proof problem.


### 2026-09-08T16:40Z · CLAUDE→ELON — STATUS: H-5 (#1 hard-stop MERGED + LIVE)

Attended Claude Code session in `~/Desktop/heavymetalcertified-app` (Karen at keyboard = push authorization, H-5 only). H-5 items 1–2 DONE. Aligns with H-6 P0#1.

MERGE: `feat/registry-engine-context` → `master`, fast-forward `9f7e5fb..75264d7` (`--ff-only`, no merge commit, no force). `origin/master` == `75264d7`. Clean ff of the hard-stop tip; nothing drifted since H-3 merge-prep.

DEPLOY: Vercel production `dpl_3LqUNpHaLP1VEJXekwUtzV7tThgY` — state **READY**, target production, branch master, sha `75264d7`, built ~2 min after push. Prod URL: https://app.heavymetalcertified.com (HTTP 200, live). Immutable: heavymetalcertified-8onuqk4o3-karen-pendergrass-projects.vercel.app. Project `latestDeployment` == this deploy.

HARDSTOP_LIVE=yes. Readiness pass/fail now reads engine-context in production: `resolveEngineStandard` uses the compiled strictest-floor limit (never the selected market's looser per_country ML), and `assess-brand` passes `governmentLimits` into `computeReadiness` (was undefined → hardStop always-false in prod; now revived). Expect canary pass/fail flips as the fix working, not a regression (e.g. Pb 150 now FAILS in market FJ; previously passed at FJ's loose 200).

VERIFY (pre-push gate): `tsc --noEmit` clean (exit 0); vitest **87/87 green** across 13 files — incl. `engine-standard.test.ts` (9: strictest-floor + hard-stop locks) and the parked `natural-force-scenario.test.ts` canary (6). Prior 81/81 + 6 canary = 87.

WORKING TREE (nothing lost, nothing extra shipped):
- Parked in `git stash@{0}` on feat: onboarding confirm-password / show-hide / `<form>` UX + `.gitignore` (`.claude/settings.local.json`). Unrelated to H-5; deliberately NOT in the 75264d7 push. Restore: `git stash apply stash@{0}`.
- Untracked & LOCAL-only (H-5 #3 material, not in the push): `src/lib/readiness/natural-force-scenario.test.ts`, `scripts/seed-natural-force.mjs`, `docs/ELON_BRIDGE.md`.

NEXT (H-5 #3 — local commits only, no second push without a new PASS): migrate the 4 remaining looser-finder consumers to engine-context — `scope-panel`, `application/completion-cost`, compute-readiness monitored-decision, reporting-limits floor.

KILL-GATES HELD: no Stripe secrets in repo (scan clean: no sk_/rk_/whsec_/pk_live), no taxonomy sprawl, no speciation freestyle, no Disney outbound. H-6 P1 items (pay-spine map, canary shape, organotin/speciated pages) NOTED, NOT started — outside this attended session's H-5 scope; awaiting Karen/Elon direction.

### 2026-09-08T17:10Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T17:10Z — no new ELON→CLAUDE directive since last STATUS (16:40Z, H-5 merged + HARDSTOP_LIVE=yes); standing by. H-6 (16:33Z) predates that checkpoint: its P0#1 is DONE/LIVE; the remainder of its queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) lives in `~/Desktop/heavymetalcertified-app`, outside this runner's working directory, so this unattended hourly check cannot advance it — it wants an attended session in that repo.

### 2026-09-08T18:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T18:09Z — no new ELON→CLAUDE directive since last STATUS (17:10Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-08T19:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T19:09Z — no new ELON→CLAUDE directive since last STATUS (18:09Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-08T20:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T20:09Z — no new ELON→CLAUDE directive since last STATUS (19:09Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-08T21:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T21:09Z — no new ELON→CLAUDE directive since last STATUS (20:09Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-08T22:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T22:09Z — no new ELON→CLAUDE directive since last STATUS (21:09Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-08T23:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-08T23:09Z — no new ELON→CLAUDE directive since last STATUS (22:09Z); standing by. Latest directive on file remains H-6 (16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T00:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T00:09Z — no new ELON→CLAUDE directive since last STATUS (23:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T01:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T01:09Z — no new ELON→CLAUDE directive since last STATUS (00:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T02:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T02:09Z — no new ELON→CLAUDE directive since last STATUS (01:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T03:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T03:09Z — no new ELON→CLAUDE directive since last STATUS (02:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T04:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T04:09Z — no new ELON→CLAUDE directive since last STATUS (03:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T05:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T05:09Z — no new ELON→CLAUDE directive since last STATUS (04:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T06:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T06:09Z — no new ELON→CLAUDE directive since last STATUS (05:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T07:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T07:09Z — no new ELON→CLAUDE directive since last STATUS (06:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z): P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo.

### 2026-09-09T08:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T08:09Z — no new ELON→CLAUDE directive since last STATUS (07:09Z); standing by. Latest directive on file remains H-6 (2026-09-08T16:33Z), whose stated ~12h window elapsed ~2026-09-09T04:33Z: P0#1 DONE/LIVE (`75264d7` on master, HARDSTOP_LIVE=yes); its remaining queue (P0#2 four-consumer migration, P1#3 pay-spine map, P1#4 canary decision-engine shape) is in `~/Desktop/heavymetalcertified-app`, outside this runner's cwd, so the unattended hourly check cannot advance it — it needs an attended session in that repo, or a fresh ELON→CLAUDE directive re-scoping the remainder.

### 2026-09-09T08:28Z · ELON→CLAUDE — ORDER: H-7 (KILL early single-standard lock in onboarding)

CEO Karen 2026-09-09: Step 5 "Choose your product's standard" in `/hmt/onboarding` (`OnboardingFlow.tsx`) does NOT make sense for canary close.

CEO intent (ecosystem vision):
- Brand enters portal → products / SKUs (plural) → suggested categories → evidence (PDF and/or TECRID) → decision → pay.
- Do NOT force lock-in to one product/category/market during early onboarding.
- Brands with multiple products must not be funneled into a single standard before the portfolio exists.

ORDER (heavymetalcertified-app):
1) Remove or defer FINDER_STEP from the hard path: allow Skip / Continue without selecting a category. Do not block account creation on finderSelection.
2) If a finder preview is useful educationally, make it optional and clearly "example only — not your locked program scope."
3) Real standard selection belongs later, per product/SKU in the portal products/readiness flow (multi-product), not as a one-shot onboarding gate.
4) Update copy that says "your product's standard" (singular) wherever it implies one product forever.
5) Append STATUS: what changed, routes affected, tests. Local commit OK. No blind push to master unless Elon PASS (H-5 hard-stop still separate).

Also update `docs/portal-vision-gap-map.md` (or mirror in app docs) with a FLAG: Tier-1 "Standards Finder in onboarding" is NOT aligned with CEO multi-product vision — treat as debt, not ✅.

Kill-gates stand: no Stripe secrets in repo, no taxonomy sprawl, totals-first elsewhere.


### 2026-09-09T09:15Z · CLAUDE→ELON — STATUS: H-7 (gap-map FLAG done; app-repo edits BLOCKED, see BLOCKER)

New directive H-7 (08:28Z) picked up by the unattended hourly runner. Executed the part that lives in this repo; the app-repo part is hard-blocked, not deferred by choice.

DONE (index repo, `docs/portal-vision-gap-map.md`):
- Tier-1 row "Get-Started → education → finder → NDA → account → portal shell" demoted from ✅ live to ⚠️ live, finder step is debt.
- New structural flag 3, verbatim to the ORDER: the Standards Finder in onboarding is NOT aligned with the CEO multi-product vision; treat as debt, not ✅. Records the exact defect (`FINDER_STEP` gates `canAdvance` on `finderComplete`, so category+product+form+market are mandatory before an account exists), the intended shape (portal → products/SKUs plural → suggested categories → evidence → decision → pay), and the four required corrections from the ORDER.
- Logged the open sub-question for whoever does the work: whether an optional preview should still seed `brand_readiness_profile.product_slug`/`variant_key`/`market`, since that profile is currently the only carrier of scope. Flagged as a question, not resolved unilaterally.
- Ranked-finish table corrected: old #1 (merge+deploy the hard-stop) struck as DONE/LIVE 2026-09-08T16:40Z; H-7 un-gating installed as the new #1 with its gate (app repo, local commit OK, push = ORDER); `wwsaid` recommendation rewritten to match.

RECON (read-only, app repo): `docs/H-7-ONBOARDING-STANDARD-LOCK.md` there is a 257-byte stub written at the ORDER timestamp — H-7 was unstarted. Branch `feat/registry-engine-context` at `acf1348` (one commit past the merged `75264d7`: scope-panel PDF now reads engine-context — H-6 P0#2 consumer 1 of 4 already migrated locally). Working tree clean apart from known untracked files; `stash@{0}` still parked. Note for whoever executes H-7: that stash touches the same file (`OnboardingFlow.tsx`, +52/−6, password/`<form>` UX), so apply it before or after H-7 deliberately, not blind.

CONFIRMED SAFE (read-only): skipping the finder does not break signup. `createAccountFromOnboarding` already defaults `finderSelection` to `{}` and inserts `product_slug`/`variant_key`/`market` as `?? null`, so `brand_readiness_profile` tolerates an empty selection today. Un-gating is a UI/copy change, not a schema change.

KILL-GATES HELD: nothing pushed (index repo commit only, local); no Stripe or other secrets touched; no taxonomy sprawl; totals-first/speciation untouched; no blank metal×subcategory cell created or altered.

### 2026-09-09T09:15Z · CLAUDE→ELON — BLOCKER: H-7 items 1–4 cannot be executed by the unattended runner

The code edits H-7 asks for live in `~/Desktop/heavymetalcertified-app`. This hourly bridge runner is sandboxed to `~/Desktop/heavy-metal-index`; every write into the app repo is refused by the harness permission layer (attempted twice, both denied). This is an environment boundary, not a judgment call and not a kill-gate — reads succeed, writes do not. Prior heartbeats' "needs an attended session in that repo" was therefore literal.

To unblock: run H-7 from an attended Claude Code session with `~/Desktop/heavymetalcertified-app` as the working directory. Everything needed is scoped and small — `OnboardingFlow.tsx` (`canAdvance`, the `FINDER_STEP` heading/dek, an "example only — not your locked program scope" note, a Skip control, and a preview_only/skipped marker on the ack payload) plus the singular-standard copy in `src/app/hmt/onboarding/page.tsx` metadata. Grep confirms those two files are the only places the singular "your product's standard" framing appears; the "your standard" strings in `portal/schedule`, `portal/rewards`, and `lib/readiness/trends.ts` are per-product portal context and are correct as-is.

Ledgered so it cannot die with this session: `OI-20260909-h7-onboarding-finder-ungate` (human-gated / code-fix / repo: cert), with the five acceptance criteria and the note that it is push-free until an Elon PASS.

### 2026-09-09T10:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T10:09Z — no new ELON→CLAUDE directive since last STATUS (09:15Z, H-7); standing by. Latest directive on file remains H-7 (08:28Z): its index-repo part (the `docs/portal-vision-gap-map.md` FLAG demoting the onboarding Standards Finder from ✅ to debt) is DONE and committed locally at `30760cbd`; items 1–4 are code edits in `~/Desktop/heavymetalcertified-app`, which this sandboxed hourly runner cannot write to (see the 09:15Z BLOCKER) — they need an attended session in that repo. Ledgered as `OI-20260909-h7-onboarding-finder-ungate`.

### 2026-09-09T10:12Z · ELON NOTE — CERT C-1 live on heavymetalcertified/docs/ELON_BRIDGE.md
Cert connect pack #2: stale percentile prose kill + Cat-1 drift map + push HOLD (ahead 28). Portal ORDERS remain on heavymetalcertified-app (H-7).

### 2026-09-09T11:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-09T11:09Z — no new ELON→CLAUDE directive since last STATUS (10:09Z); standing by. The 10:12Z entry on this file is an ELON NOTE, not an ORDER/LIFT/HOLD to this runner: it points at ORDER C-1 (CERT connect pack #2), which lives on `heavymetalcertified/docs/ELON_BRIDGE.md` and was already executed there — C-1a stale-percentile prose kill DONE (local commit `43b31b3`, not pushed), C-1b Cat-1 drift map DELIVERED, C-1c push-prep READY-TO-PUSH **NO / HOLD** at 29 commits ahead awaiting PASS: C-PUSH. Nothing in C-1 is index-repo execution work. Latest directive addressed to this repo remains H-7 (08:28Z): index-repo part DONE (`30760cbd`, gap-map FLAG); items 1–4 are code edits in `~/Desktop/heavymetalcertified-app`, which this sandboxed runner cannot write to (09:15Z BLOCKER) — they need an attended session there. Ledgered: `OI-20260909-h7-onboarding-finder-ungate`. One thing added this run, logging only, no execution: C-1's open ASK — that `data/method/method-v2.json`, `method-drift-lint`, and CLAUDE.md Part 19 still define selective percentile-pooling (P97/P45) as live Method v2.0 while the data and cert pages have moved to government-limit + read-across — is **index-repo** work and was ledgered in neither repo, so it is now `OI-20260909-method-v2-spec-percentile-reconcile` (human-gated / decision) pending the named A-or-B call. It blocks a clean C-PUSH. Kill-gates held: nothing pushed, no secrets, no taxonomy sprawl, no limit or panel edits, no blank cell touched.

### 2026-09-09T11:32Z · ELON→CLAUDE — ORDER: C-2 (retire percentile from LIVE method DEFINITION) + C-1 PASS notes

CEO lock (already frozen): LIVE Method v2.0 = lowest applicable finalized government limit per metal×subcategory; if none → read-across / not-material / control with provenance; never blank; precautionary = stricter-than-gov OK; dual-percentile / P97-P45 occurrence pooling is NOT LIVE.

**C-1 STATUS clocked:**
- C-1a PASS (43b31b3) — public method prose aligned.
- C-1b PASS (967169b) — Cat-1 drift one-pager; Elon rules intentional **scope split** (cert Cat-1 = true infant/child FOOD forms; seafood/fish/dairy-meat live under their own cats). Do NOT recompile/overwrite cert Cat-1 from index without a later PASS.
- C-1c HOLD push (READY-TO-PUSH: NO stands until C-2 local + fresh push-prep).

**ORDER C-2 — Option A (retire percentile):**
1) Rewrite `data/method/method-v2.json` statement + rationale_tags to LIVE vocabulary only: regulatory-alignment / read-across / subsumed / precautionary / not-material / control / baseline-screen (as used by shipped cells). Remove percentile-pooling as a LIVE limit-setting mechanism.
2) `method-drift-lint`: move percentile limit-setting signatures to **forbidden** for LIVE method. Craft regex so it does **NOT** false-positive ~85 generated pages that cite descriptive occurrence P95/P97 as literature facts (descriptive stats ≠ limit derivation).
3) Reconcile `CLAUDE.md` Part 19 to the same CEO lock. Archive old percentile text as RETIRED / historical if needed — never as LIVE Method v2.0.
4) Do NOT invent dual-percentile revival. Do NOT change published numeric ceilings in this ORDER.
5) Run the GREEN gate suite (method-drift, claim-discipline, etc.). Append STATUS with paths + before/after.
6) Local commits OK. **No git push** until ELON→CLAUDE PASS: C-PUSH after you re-run C-1c push-prep (commit count + risks).

Correct the record: connect-pack #2 "0 P97 hits" was a false negative; C-1a actually removed live percentile prose. Noted.

### 2026-09-09T15:22Z · ELON→CODEX/CLAUDE — ORDER: S-DOI-1 (mechanical standards → mint-ready)

CEO speed lock: standards numbers must be mint-ready for DataCite. Claude inventing/arguing blanks is FAIL. Prefer **Codex/ChatGPT** on `paleofoundation/heavymetalindex` (heavy-metal-index Desktop) for mechanical work.

METHOD (frozen):
- LIVE = lowest applicable finalized government limit per metal×subcategory
- If none on earth → mandatory read-across from HMI library / related gov with provenance (never invent ppb)
- Never blank. Dual-percentile/v5 NOT LIVE. Totals-first; speciation reflex only.

ORDER S-DOI-1:
1) Build/repair a **mechanical Regulatory Floor Table** lookup (no LLM inventing ceilings). Source: existing HMI regulatory evidence + compiled standards. Output: every metal×subcategory cell with kind = regulatory-alignment | read-across | subsumed | precautionary | not-material | control | baseline-screen + provenance citation.
2) Kill remaining literature-baseline / percentile residue on live cells (OI-20260909-literature-baseline-tag-residue) at compiled/generator source — retag only, no silent number change without STATUS listing deltas.
3) Produce mint-prep STATUS: which standard pages are REGISTERED-ready vs blocked; DOI registry gaps; what still needs Karen DataCite prefix / GATE 1.
4) Do NOT mint without Karen prefix + GATE 1. Do NOT blind push cert LIVE without C-PUSH.
5) Append STATUS every material finish on heavy-metal-index docs/ELON_BRIDGE.md (and cert bridge if touching cert compile).

Wake: Karen pastes to ChatGPT/Codex in Chrome for heavymetalindex.

### 2026-09-09T15:55Z · ELON→CLAUDE/CODEX — ORDER: S-DOI-1b (fail-close Method 1 + one-page canary)

SUPERSEDES S-DOI-1 "mint-ready" language. Karen lock 2026-09-09: **no mint** until every metal×subcategory cell (totals + speciations: iAs, MeHg, Cr-VI, organotins where in-program) clears **>95% confidence** that the number is the **tightest finalized government floor worldwide** (or a disclosed read-across from a named sovereign instrument). Never blank. No Method 1.

C-2 already retired LIVE spec (`method-v2.json`, Part 19, method-drift-lint). Remaining poison: `docs/standards-methodology.md` still opened as live v1.0 pooling. That file now has a RETIRED banner. `AGENTS.md` now has a LIVE method lock. If you still follow methodology.md as live, FAIL.

**Runner:** Claude Code / Codex on this Desktop clone with `/Volumes/HMI-Library` mounted. ChatGPT-in-Chrome cannot see the volume. Confirm `node -e` driveStatus.mounted === true before any cell work.

**ORDER S-DOI-1b (do in this order, stop on FAIL):**

A) Fail-close (local commits OK, no push, no mint):
1. Confirm banner on `docs/standards-methodology.md` and LIVE lock in `AGENTS.md`. If missing, restore from this ORDER.
2. Confirm C-2: cert `data/method/method-v2.json` has retired_2026_09_09 + no LIVE percentile tags; `method-drift-lint` forbids percentile limit-setting (descriptive P95/P97 pages must still pass).
3. Kill `literature-baseline` residue at compiled/generator source (OI-20260909-literature-baseline-tag-residue). Retag only. If a number would change, STATUS the delta and HOLD the number change.

B) One-page METHOD canary (not hundreds). Page of record: Cat-1 `baby-cereals-dry` rice-based record (`baby-cereals-dry-rice-based`). Full 11-cell panel: Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Sn, Al, Cr, Cr-VI.
For EACH cell:
1. Current compiled value + type + anchor id.
2. Strictest same-basis in-force row in `data/evidence/regulatory_limits.csv`.
3. Primary instrument text: register `url` OR PDF under `/Volumes/HMI-Library` / `raw/`. Wiki regulation pages are pointers, not evidence.
4. Library/register gap: is there a tighter finalized government instrument in the Library (or a known successor, e.g. GB 2762-2025 vs 2022) missing from the register? If yes: ingest the row from primary text, do not publish the looser number.
5. Verdict: confirmed / refuted / cannot-verify. Refute if looser than a verified tighter floor, wrong basis, superseded, or invented.

Do NOT fill other categories in this ORDER. Canary PASS = 11/11 cells confirmed or cannot-verify with a named missing primary (no invented fill). Append a one-page STATUS table.

C) Kill-gates:
- Do not mint. Do not claim mint-ready. Do not `git push` cert (C-PUSH still HOLD).
- Do not expand taxonomy. Do not revive calculator / Method 1.
- Do not invent ppb. Empty cell = STATUS gap + ingest path, not a made-up number.

Append STATUS on this file when A done and when B done.

### 2026-09-09T16:04Z · ELON→CLAUDE/CODEX — ORDER: S-DOI-1c (immutable editions + visible change history + brand pin)

Karen lock: every minted standard is a living concept with immutable, separately resolvable editions. A brand/certificate is pinned to the exact edition used for its decision. Every material change is visible on the standard page with notes. No silent edits. No mint until S-DOI-1b confidence gate + this contract + GATE 1.

Existing design is REAL but fragmented: `docs/standards/version-pinning.md`, `tools/standards/build-version-pages.mjs`, cert `tools/build-cert-version-history.mjs`, cert `docs/DOI-MINTING-LEDGER.md`, portal `StandardVersion` architecture. Current gaps: only ~18/351 standards have version-history records; freeze-on-mint and version-DOI revision flow are not wired; regulatory changes do not force a bump; screenshots are absent.

**Edition evidence bundle (one per slug + material version):**
1. Canonical compiled JSON used to render the limits.
2. Rendered scholarly PDF.
3. Full-page PNG screenshot of the production version route after deploy (supplemental rendering proof; never the canonical data record).
4. Preserved HTML snapshot OR deterministic render input sufficient to reproduce the page.
5. `manifest.json`: slug, version, effective timestamp UTC, capture timestamp UTC, source commit SHA, deployment URL/SHA, methodology version, all file SHA-256 hashes, DOI(s), governing register commit, and third-party timestamp/deposit metadata.
6. Third-party timestamp receipt (`.tsr` + TSA cert chain / verification instructions) OR neutral external deposit, per GATE 1 decision. Build both adapters; do not choose or mint without Karen/counsel. Recommended defensibility target for decision: RFC-3161 immediate tamper evidence + neutral custody deposit for each edition.

**Stable routes and page history:**
- Concept: `/standards/<slug>` = current edition + complete version history.
- Immutable edition: `/standards/<slug>/v<version>` = exact frozen edition, never overwritten.
- Every history row must show version, effective date/time, status (current/superseded/corrected), what changed, why, affected analytes with old→new values when numeric, named government instrument / correction source, DOI, and frozen evidence link. Typo-only changes may remain same material version but still log a dated correction note; numeric/basis/scope/method changes MUST bump version.

**Mechanical fail-closed gates:**
- Every published standard gets a `data/standards/version-history/<page-slug>.json` record before mint (target 351/351; page slug, not compiled-record slug).
- Compute a canonical claim hash over all limit cells + basis + provenance + anchor ids + panel + scope. If this hash changes without (a) version bump, (b) history note, (c) regenerated evidence bundle, FAIL build.
- Any regulatory-watch event `current-binding-limit-change`, supersession, or newly verified tighter in-force government limit opens a needs-version-bump queue. Affected standards cannot remain current without adjudication.
- A material revision mints a version DOI chained `IsVersionOf` concept + `IsNewVersionOf` prior edition; concept DOI receives `HasVersion`. First mint does not fabricate prior editions.
- Freeze/capture runs only after confidence + lint battery + production deploy verification. Hash screenshot/PDF/JSON/HTML into one manifest; timestamp the manifest hash.

**Brand/certificate pin:**
Persist immutable `standard_version_id`, page slug, version, effective timestamp, canonical claim hash, version DOI, frozen-route URL, and methodology version on the certification decision/certificate. The brand is judged against that edition for that certification event/term; later page revisions never rewrite historical decisions. Pinning does not override later applicable law: a government change triggers legal/regulatory review + renewal/remediation workflow while preserving the historical record.

**Canary only:** implement + verify this on S-DOI-1b `baby-cereals-dry` before bulk fan-out. Deliver one captured bundle, one visible page history, one simulated brand pin, and tests proving a silent numeric change fails. No DataCite live write. No cert push without C-PUSH.

Append STATUS with (1) what already existed, (2) what was added, (3) remaining GATE 1 decision, (4) canary evidence paths, (5) exact bulk fan-out count.


### 2026-09-09T16:08:44Z · CODEX→ELON — STATUS: S-DOI-1 (mechanical lookup + source cleanup; mint HOLD)

```text
ORDER: S-DOI-1
LOCAL IMPLEMENTATION: applied to current Desktop heavy-metal-index + heavymetalcertified; local/uncommitted. No git push, DOI mint, DataCite preflight, or DataCite network mutation. No taxonomy expansion or per-lot/speciation-policy change.

REGULATORY FLOOR LOOKUP:
- tools/standards/build-regulatory-floor-table.mjs; npm run standards:floor / standards:floor:check. Legacy build-government-limit-standard.mjs now delegates to this read-only lookup; occurrence never supplies a ceiling.
- Output: HMI data/workbench/standards/regulatory-floor/regulatory-floor-table.json + .csv + regulatory-floor-status.md; docs/S-DOI-1-REGULATORY-FLOOR.md documents the contract.
- 335 compiled subcategories, 3,707 metal/variant cells. Current cert records take precedence by slug; 12 HMI-only subcategories stay unpublished. Every canonical metal and every source variant is represented. Legal form splits stay separate; no min/max envelope.
- 2,063 ANCHOR_VERIFIED; 327 nonnumeric dispositions; 1,317 BLOCKED (includes 8 absent Cr cells on HMI-only Cat-9 records). UNRESOLVED is a failed diagnostic, NOT an invented eighth admitted kind or fabricated control. Numeric completion is NOT claimed.
- Gov-first selection uses the named compiled applicability set; disclosed read-across only after no direct candidate. Finalized status, effective date, exact source value, species, basis and explicit conversion are checked. Every selected record carries source path/pointer/hash; 335 applied source hashes verified current.
- A blocked row exposes neither an authoritative numeric limit nor a government floor. Partial candidate minima are diagnostic only. ANCHOR_VERIFIED is not worldwide-coverage proof, CORRECTED, or permission to mint. No universal ppb label is imposed on release/extraction quantities.
- 54 lookup/source scalar discrepancies are listed in regulatory-floor/lookup-source-deltas.json; NONE applied. 320 upstream/current-source divergences are recorded.

SOURCE RESIDUE CLOSED:
- cert occurrence-section renderer no longer falls back to historical occurrence values, tags, government floors or materiality. It reads the current compiled/catalog descriptor; unsupported occurrence-derived publication fails closed.
- Infant-formula tHg displays its existing 15 precautionary value (was falsely rendered as 1 mg/kg literature-baseline); mixed meals displays existing 8 precautionary (was falsely rendered as 2.7 ppb); butter Pb context stays 100 government alignment, with development hold retained. These are renderer corrections, not changes to source ceilings.
- Removed active literature-baseline control prose at HMI cat3/cat34 config sources and both compiled mirrors. Public method labels now read canonical method-v2.json. Historical, explicitly retired audit references remain history.
- HMI legacy catalog publication cannot round/select an occurrence candidate into a live limit. It requires exact, register-verified government-cap provenance and fails before writing if absent.
- SOURCE NUMERIC DELTAS: ZERO across all 323 cert compiled records and touched HMI config/compiled records. Existing source values preserved.

EXPORT + FINDER:
- Schema 1.1.0 retains source values/units/basis, explicit precautionary/control/screen kinds and valid species-parent links. Missing/cyclic/wrong parents and numeric child bounds without numeric parents fail. All 18 legal forms remain individually addressable, never replaced by a summary scalar.
- 3,577 CSV rows: ZERO blank limit_of_record, ZERO active literature-baseline residues. Nonnumeric controls carry their actual conditions; they are NOT invented ppb or certification-complete numbers.
- Finder now carries source values, units, conditions and separate forms through to display; unknown units point to the standard for basis. Market comparisons only use compatible ppb fields. It no longer claims certification is available merely because some values are published.
- Generated export was stale: 309 -> 321 pages; 3,408 -> 3,577 cells. 178 existing-source cells added, 9 obsolete variant cells removed; 1,333 old nulls now resolve to existing source/parent values; 32 existing scalar values reconciled; 6 obsolete form-summary scalars replaced with their form lists; 967 status differences. No new subcategory was created by this task.
- Nested form reconciliation: unrefined-salt Pb 1000 -> 2000 reflects the already-existing compiled form, not a source change. This increase is explicitly HOLD for publication review.
- EVERY old/new record, provenance, unit, addition/removal and nested form is listed in cert data/standards/s-doi-1/export-*.csv and docs/S-DOI-1-EXPORT-DELTAS.md. These export changes are local and MUST NOT be mistaken for authorized LIVE threshold changes.

Numeric-to-numeric export synchronization (existing source values; no source change):
- canned-seafood / all / Ni: 2000 -> 500 [ug/kg]
- cashews / all / tHg: 400 -> 20 [ug/kg]
- cephalopods / all / Ni: 2000 -> 500 [ug/kg]
- cultivated-mushrooms / all / tHg: 30 -> 20 [ug/kg]
- cultivated-mushrooms-oyster-shiitake / all / tHg: 30 -> 20 [ug/kg]
- dairy-condensed-evaporated / all / tHg: 100 -> 20 [ug/kg]
- dried-fruit / all / tHg: 150 -> 20 [ug/kg]
- fish-freshwater / all / Ni: 2000 -> 500 [ug/kg]
- fish-marine-non-predatory / all / Ni: 2000 -> 500 [ug/kg]
- fish-marine-predatory / all / MeHg: 1000 -> 500 [ug/kg]
- fish-marine-predatory / all / Ni: 2000 -> 500 [ug/kg]
- fish-marine-predatory / all / tHg: 1000 -> 500 [ug/kg]
- fresh-fruit / all / tHg: 30 -> 20 [ug/kg]
- fruit-snacks / all / tHg: 30 -> 20 [ug/kg]
- legumes-pulses-other / all / tHg: 30 -> 20 [ug/kg]
- mustard-mayo-dressings / all / Cd: 200 -> 100 [source-normalized units; see basis]
- nut-seed-butters-other / all / tHg: 400 -> 20 [ug/kg]
- nuts-seeds-other / all / tHg: 400 -> 20 [ug/kg]
- pasta-rice-based / all / iAs: 250 -> 200 [ug/kg]
- peanut-butter / all / tHg: 30 -> 20 [ug/kg]
- peanuts / all / tHg: 30 -> 20 [ug/kg]
- rice-noodles / all / iAs: 250 -> 200 [ug/kg]
- seaweed-kelp-foods / all / Cr: 2000 -> 1000 [ug/kg]
- seaweed-kelp-foods / all / Pb: 5000 -> 1000 [ug/kg]
- seaweed-kelp-foods / all / tAs: 5000 -> 1000 [ug/kg]
- shellfish / all / Ni: 2000 -> 500 [ug/kg]
- soy-products / all / tHg: 30 -> 20 [ug/kg]
- sunflower-seed-butter / all / tHg: 400 -> 20 [ug/kg]
- sunflower-seeds / all / tHg: 400 -> 20 [ug/kg]
- tomato-condiments / all / Cd: 200 -> 100 [source-normalized units; see basis]
- tree-nuts-high-nickel / all / tHg: 400 -> 20 [ug/kg]
- wild-mushrooms / all / tHg: 30 -> 20 [ug/kg]
- salt / all / Pb / unrefined-salt form: 1000 -> 2000 [existing nested source form; source unchanged].

MINT PREP:
- Scope is ORDER S-DOI-1. The later S-DOI-1b worldwide-confidence canary and S-DOI-1c immutable-edition implementation are additional open prerequisites, not completed or implied by this lookup. Their no-mint and no-push holds remain in force.
- 349 standard pages: 239 COMPLETE but unconfirmed; 81 mapped incomplete; 29 recordless. REGISTERED=0; CORRECTED=0; READY=0; MINT-ELIGIBLE=0. All page slugs/reasons: docs/S-DOI-1-DOI-AUDIT.md + cert data/standards/s-doi-1/doi-page-audit.csv.
- No per-category confidence manifests exist. Current readiness lint reports 331 limit-of-record failures (192 controls, 133 not-material, 6 form-split scalar failures) plus two scaffolds. Those are existing source/readiness gaps, not permission to invent numbers. Form-specific export resolution does not bypass the separate readiness gate.
- Registry has one existing Zenodo manual DOI, no standard-page DOI; batch manifest is header-only. DataCite live-mode credentials and a non-sandbox prefix ARE configured locally; assignment/authentication remain unverified. Do not repeat the stale claim that credentials/prefix are absent.
- HOLD: Karen prefix verification + GATE 1 immutable-edition evidence/approval; recorded identity/GATE 3 decisions; COMPLETE/CORRECTED confidence gates. No minting. C-PUSH still required for cert production.
- Specific source blockers include 53 missing CN-2025 anchor IDs, including the mixed-meal mercury floor, and legacy catalog fish-Cd anchor eu2023_cd_fish_muscle_50 absent from the current HMI register. Basis/species conflicts and all other failed cells remain explicit in the floor report.

VALIDATION:
- HMI floor tests: 16/16 PASS (also run in applied checkout). Independent adversarial re-review passed.
- Cert source/export/Finder tests: 25/25 PASS (also run in applied checkout); TypeScript --noEmit exit 0.
- Final Quartz static build exit 0; npm run check:v3 exit 0, 103 rendered assertions PASS including Finder.
- Export/page drift, design, method, firewall and claim lints: exit 0.
- EXPECTED HOLDS: floor --strict exit 1; readiness --strict exit 1; legacy catalog --check exit 1 on the missing fish-Cd source. These are not green publication gates.
- Applied file hashes match reviewed staging. No DOI, confidence approval, immutable snapshot or production release was created.
```

### 2026-09-09T20:05Z · CLAUDE→ELON — STATUS: S-DOI-1b + S-DOI-1c CANARY PASS (baby-cereals-dry-rice-based only)

Attended Claude Code, cwd `heavy-metal-index`. Codex S-DOI-1 STATUS (line 465) treated as a claim to VERIFY, not PASS. Honored all kill-gates: **no mint, no cert push, no invented ppb, no fan-out.** All work local (index repo, commit `e7a1ce7028`, not pushed; index deploy is manual regardless).

**CONFIRM (all 4 pass):**
1. `/Volumes/HMI-Library` mounted — `library-root.mjs` driveStatus `mounted:true`, root `/Volumes/HMI-Library`.
2. `docs/standards-methodology.md` carries the RETIRED banner (status RETIRED-AS-LIMIT-SETTING, 2026-09-09); `AGENTS.md` §"LIVE standards method lock (2026-09-09)" present (line 12). NOTE: AGENTS.md lines 72–124 still carry Evidence-Fitness percentile prose incl. "clean = pooled P97 / dirty = pooled P45" — descriptive-fitness guidance, but line 124 reads as live limit-setting and contradicts the lock. Logged as a residue finding (does not affect canary).
3. Floor artifacts exist (`data/workbench/standards/regulatory-floor/` + `docs/S-DOI-1-*.md`); `standards:floor --strict` exits **1** on 1,317 BLOCKED cells (fails closed, confirmed).
4. Kill-gates locked.

**A) METHOD CANARY (S-DOI-1b) — 11/11 CONFIRMED = PASS. No invented fill.**
Page of record: `baby-cereals-dry-rice-based` (native basis as_sold). Compiled = `data/workbench/standards/cat1-compiled/baby-cereals-dry-rice-based.json`. Every anchor verified present in `data/evidence/regulatory_limits.csv`.

| Cell | Value | Type | Anchor / strictest same-basis floor | Primary text | Verdict |
|---|---|---|---|---|---|
| Pb | 20 | gov | eu2023_pb_babyfood_cereal_20 (EU as_sold); US dry-infant-cereal 20, CODEX/BR/HK 20; the 10-values are formula/other-baby-food (diff matrix) | EU 2023/915 §3.1.26 = 0,020 "Baby food AND processed cereal-based food"; FDA dry infant cereal 20 | CONFIRMED |
| Cd | 40 | gov | eu2023_cd_babyfood_cereal_40 (EU as_sold); GSO/UK 40; 5–20 are formula | EU 2023/915 §3.2.20 = 0,040 | CONFIRMED |
| tAs | 50 | gov | in_tas_infant...50 (IN as_sold); SG 100; rest ≥300 | FSSAI 2011 2.1.1(2) item 3, PRIMARY-CONFIRMED | CONFIRMED |
| iAs | null (subsumed→tAs 50) | subsumed | candidate US 100 (fda2020 infant rice cereal); bounded by tAs 50 (stricter) | EU 2023/915 §3.4: iAs applies to 3.4.1–3.4.4; rice cereal routes via **3.4.1 (rice products; 3.4.1.5=100)**, NOT §3.4.3 "Baby food" (20) — the iAs row omits "processed cereal-based food" (unlike Pb/Cd). EU-20 does NOT apply. Strictest finished iAs = 100; 50 < 100, so subsumption is more protective | CONFIRMED |
| tHg | 8 | read_across | il_fcs2016 porridges 8 (IL as_consumed) | Israel FCS-2016 row 14.2 = 0.008 mg/kg | CONFIRMED (precautionary; conservative — see basis flag) |
| MeHg | null (subsumed→tHg) | subsumed | no MeHg ML below tHg bound | — | CONFIRMED |
| Ni | 3000 | gov | eu2024_ni_processed_cereal_babyfood_3000 (EU as_sold) — specific matrix; baby-food 500 is a different category | EU 2024/1987 (in force 2025-07-01) | CONFIRMED |
| Sn | 5000 | gov | in_sn_infant...5000 (IN as_sold, non-canned); all others 50000 (canned) | FSSAI 2011 2.1.1(2) item 4, BASIS SETTLED 2026-08-05 | CONFIRMED |
| Al | 500 | read_across | aunz_sch19_al_formula_nonsoy_500; ONLY gov Al MLs anywhere are AU-NZ formula 500/1000; none for cereal | FSANZ Sch19 / Std 1.4.1 | CONFIRMED (disclosed read-across; basis flag) |
| Cr | null (not-material) | control | no gov total-Cr ML for non-dairy infant food (14 juris checked); reflex Cr-VI speciation control | — | CONFIRMED (control) |
| Cr-VI | null (subsumed→Cr) | subsumed | reflex speciation: any quantifiable Cr-VI fails | — | CONFIRMED |

GB 2762 successor check: GB 2762 (2022 and any 2025 revision) EXCLUDES infant/young-child foods (governed by GB 10769/10765/10770); no Chinese infant value is stricter than any pick. Successor does not threaten this page. Primary EU text read from `/Volumes/HMI-Library/nMKEGZikaGiqOfcG/docs/EU_Regulation_2023-915_text.md`; GB from `/Volumes/HMI-Library/Regulatory documents/China_GB2762-2022_English_MAST.pdf` (+ USDA GAIN CH2025-0202).

**FINDING (not a refute of this page, logged): read-across basis inconsistency.** tHg (IL as_consumed) and Al (AU-NZ as_consumed formula) are applied at FACE VALUE to an as_sold dry product. Both are over-strict (fail-safe) — never looser than any applicable law, so they pass the method-lock — but the basis mismatch is a provenance-cleanliness issue that recurs across every read-across cell in the corpus. Not fixed here (would change no number on this page, and any corpus-wide basis policy is out of canary scope).

**B) EDITION CANARY (S-DOI-1c) — DELIVERED. Both adapters built; GATE 1 undecided; nothing minted/deposited/pushed.**
What already existed: `freeze-standard-version.mjs` (RFC-3161 adapter — JSON→scholarly PDF→SHA-256→TSA token w/ pending fallback→manifest→verify), `lint-version-integrity.mjs` (R/M/P checks), 18 version-history records, `version-pinning.md`.
What was added (commit `e7a1ce7028`):
- `tools/standards/claim-hash.mjs` — canonical claim hash over limit cells + basis + provenance/anchor ids + panel + scope; `--check`/`--check-all` fail closed on silent numeric change; excludes cosmetic prose (typo-safe).
- `tools/standards/deposit-edition.mjs` — **NEUTRAL-DEPOSIT adapter** (2nd custody mechanism) + full edition-bundle assembler; never chooses GATE 1, never mints, never fabricates a custody receipt.
- `data/standards/version-history/baby-cereals-dry-rice-based.json` — edition 1.0 record w/ claim_hash `sha256:734a3047…`; `frozen_artifact:null` (custody pending — no false resolvability claim; passes integrity lint).
- `tools/standards/claim-hash.test.mjs` — 6/6 green, proves a silent numeric change FAILS the build (fail-closed).

Canary evidence bundle (staged local, NOT shipped/minted): `…/scratchpad/canary-editions/baby-cereals-dry-rice-based/v1/` — `standard.pdf` (sha256 cc346626…), `compiled.json`, `render-input.json` (deterministic repro input; HTML/PNG substitute — no production render captured, PNG absent by design), `bundle-manifest.json` (all file SHA-256s + claim hash + source commit 5247f5a2 + governing-register commit + methodology v2.0 + both custody adapters, both `pending`), `deposit-request.json`/`deposit-receipt.json` (neutral-deposit, pending), `standard.pdf.tsq` (RFC-3161 request, timestamp pending). Simulated brand StandardVersion pin: `…/scratchpad/canary-editions/simulated-brand-pin.json` (pins standard_version_id `baby-cereals-dry-rice-based@1.0`, claim hash, effective ts, methodology; no real brand — Part 12 firewall).
Gates green: `lint-version-integrity` PASS; `claim-hash --check` exit 0; `--check-all` 1 guarded / 0 drift; silent-change test 6/6.

**REMAINING BLOCKERS / open items (report-only, all HELD):**
- Custody sealing (RFC-3161 + neutral deposit) is `pending` — needs network + GATE 1 decision (Karen/counsel choose RFC-3161 / neutral deposit / both). Not chosen here.
- No PNG screenshot in bundle (no production deploy of the version route). Requires a deployed `/standards/<slug>/v1` route.
- Slug mismatch: pre-existing version-history record uses `baby-cereals-dry`; the S-DOI-1b page of record is `baby-cereals-dry-rice-based`. New record created under the correct slug; reconciling/merging the older `baby-cereals-dry` record is out of canary scope.
- claim-hash guard is NOT yet in `prebuild` (mirrors `lint:version-integrity`, also standalone). Wiring `standards:claim-hash:check` into prebuild is the build-blocking promotion step for fan-out.
- AGENTS.md percentile-prose residue (line 124) — index-repo finding.
- Working tree carries Codex's uncommitted S-DOI-1 run (~4,755 files incl. `package.json` floor scripts); my `package.json` script additions left uncommitted to avoid entangling that lane.

**EXACT NEXT FAN-OUT COUNT (if PASS accepted — HELD until ELON PASS, do NOT fan out):**
- Fan-out universe = **337** compiled standard records (Codex page-slug audit: 349 pages).
- S-DOI-1c edition contract: **336** compiled records remain without a claim-hash-guarded version-history record (337 − 1 canary). 318 have no version-history record at all; 18 have a record but no claim_hash. Order's stated 351/351 page-slug target ⇒ **350** remaining.
- S-DOI-1b method-confidence 11-cell verification: **348** pages remain (Codex 349 − 1 canary): **239** COMPLETE-unconfirmed (fan-out-ready for the >95% confidence pass), **81** mapped-incomplete (blocked on missing/BLOCKED floor rows), **29** recordless (need records first).

ASK: accept canary PASS and name the fan-out lane (S-DOI-1c edition records vs S-DOI-1b confidence pass) and batch size, OR name GATE 1 custody first. Holding mint/push/deposit/fan-out until a named ORDER.

### 2026-09-09T17:30Z · ELON→CODEX/CLAUDE — ORDER: HMI-GAP-1 (olive-oil product table regenerate from existing structured evidence)

Reed Evidence Ops STATUS: olive-oil product page Literature Evidence Summary shows data gaps / empties, but ingredient-side + `data/evidence/category7_primary_extraction_summary.csv` already carry olive-oil row numerics (Pb 5 / Cd 2 / tAs 5 / Ni 9). Disposition flagged `source_on_page_no_structured_value`. Sn still OPEN (canned-olive matrix ≠ liquid olive oil). U: one NEW Egypt virgin OO PDF pending deep-read — do not invent.

**ORDER HMI-GAP-1:**
1) Diagnose why `wiki/products/olive-oil.md` (and/or its generated public table) does not load structured values from the existing category7 / ingredient register path.
2) Regenerate the product Literature Evidence Summary / coverage table from existing structured evidence only. No invented ppb. No Method 1.
3) Leave Sn as honest data gap unless a liquid olive-oil matrix source exists. U stays pending until deep-read of ArtcID 25751 / packet path under `/Volumes/HMI-Library/research-pulls/heavy-metal-index/olive oil/`.
4) Append STATUS with before/after cell states + root cause. Local commits OK. No git push without ELON PASS. No HMTc ceiling edits. No mint.

Packet SoT: `/Volumes/HMI-Library/research-pulls/heavy-metal-index/olive oil/INGEST-PACKET-olive-oil-iAs-Sn-U-2026-09-09.md`

### 2026-09-09T17:35Z · ELON→CODEX/CLAUDE — ORDER: HMI-GAP-1b (extend regenerate to cooking-oils-other)

Reed OA-map: `wiki/products/cooking-oils-other.md` has 78 primary-extraction rows for Pb/Cd/tAs/Ni but 104× `source_on_page_no_structured_value` / value_record_count=0. Same class of bug as olive-oil.

**ORDER HMI-GAP-1b:** After or with HMI-GAP-1, regenerate `cooking-oils-other` product Literature Evidence Summary from existing structured evidence only for Pb/Cd/tAs/Ni. No invented ppb. Leave iAs/Sn/U as honest gaps until Reed's gated OA batch + Fitness. Root-cause the shared wiring path so we do not repeat page-by-page. Append STATUS. No push. No mint. No HMTc ceiling edits.

### 2026-09-09T17:45Z · ELON→CODEX/CLAUDE — ORDER: HMI-GAP-1c (batch wiring regenerates)

Reed full-corpus backlog (`/Volumes/HMI-Library/research-pulls/_gap-queue/ranked-backlog-2026-09-09.json` + HMI-GAP-regenerate-tickets): product pages with structured evidence already present but Literature Evidence Summary empty via `source_on_page_no_structured_value`.

**ORDER HMI-GAP-1c:** Fix shared wiring once, then regenerate product tables for at least:
- olive-oil (HMI-GAP-1)
- cooking-oils-other (HMI-GAP-1b)
- chocolate
- vinegar
(and any other tickets in Reed's regenerate markdown this date)

No invented ppb. Leave true missing analytes (often iAs/Sn/U) as honest gaps. Append STATUS with root cause + pages fixed. No push. No mint. No HMTc ceiling edits.

### 2026-09-09T18:12Z · ELON NOTE — HMI-GAP-1c add infant-formula
Reed: `infant-formula` is WIRE not pull. Structured rows exist (incl. iAs/Sn/U). Ticket `HMI-GAP-wire-infant-formula.md`. Include in HMI-GAP-1c regenerate batch with olive-oil / cooking-oils-other / chocolate / vinegar.

### 2026-09-10T00:00Z · CLAUDE→ELON — STATUS: HMI-GAP-1 / 1b / 1c (root cause fixed; 4 ordered pages regenerated; 3 held)

Attended Claude Code, cwd `heavy-metal-index`. Kill-gates honored: **no push, no mint, no HMTc ceiling edit, no invented ppb, no Method 1, no freeform re-pull.** Local commit `502378db49` only; index deploy is manual regardless.

**ROOT CAUSE (single shared wiring path, as ORDER 1c suspected).**
`tools/evidence/apply-product-hmtc-evidence-summaries.mjs` read a **hard-coded seven-file allowlist** of occurrence summaries (category1 ×3, category5 ×4) and matched rows by `row_slug === productSlug`. Twenty-two files in `data/evidence/` carry that schema. Every **category6 / category7 / category11 / category24** summary and both **autonomy-extracted** summaries were therefore invisible to the generator, so a page whose structured rows lived in those files rendered `no contributing evidence loaded` while the rows sat in the register. Second, smaller defect: `category5_plant_milk_occurrence_summary.csv` *was* in the allowlist but is keyed on `product_slug`, not `row_slug`, so it never matched either and was silently dead.

Fix (one place, no per-page work): discover `data/evidence/*_summary.csv` requiring `metal_species` + a slug column; accept `row_slug` **or** `product_slug`. A new category summary now wires itself in on the next run. Also excluded `ingredient-synthesis:*` rollup pseudo-sources from the unique **source count** — they restate literature already counted, so counting them as independent cited sources overstates the evidence base; they stay in the row set (they drive the row-fit note) and the Sources cell now discloses "plus commodity-synthesis context".

**BEFORE / AFTER (mechanical, from existing structured extracts only).**

| | before | after |
|---|---|---|
| summary files read | 7 | 22 |
| structured rows loaded | 516 | 1,820 |
| (page, metal) cells with ≥1 **primary** source | 171 | **431** (+260) |
| product pages with ≥1 primary cell | 25 | **90** |
| cells lost | — | **0** |

Pages regenerated this run: **89**; workbench snapshots rewritten: 117. Every page change is confined to the `hmi-hmtc-evidence-summary` marker block (verified per target: zero diff lines outside the block).

**ORDERED PAGES — 4 of 5 CLOSED.**
- `olive-oil` (HMI-GAP-1): Pb / Cd / tAs / Ni all moved data-gap → direct row-fit. Pb mean 7.4–71 ppb (4 sources), highest 100, 8 cited, cap EU 2023/915 100 ppb. Cd mean 2.64 (1), highest 2.78, 4 cited. tAs mean 0.467–12 (3), highest 750, 7 cited, 100% detected 27/27. Ni mean 0.721–53 (4), highest 790, 8 cited. **Sn left an honest data gap** (no liquid olive-oil matrix source); **U untouched** pending deep-read of the Egypt packet.
- `cooking-oils-other` (HMI-GAP-1b): Pb / Cd / tAs / Ni populated from the 78 primary-extraction rows (Pb 13 cited, Cd 12, Ni 5). iAs / Sn / U left as honest gaps.
- `chocolate`: Cd mean/median 0.59–6986 ppb (8 sources), 9 cited; Pb 8 cited; tAs 2 cited; plus Ni / Al. U remains the only true pull.
- `vinegar`: Pb 6 cited (100% detected 59/59), Cd 3, tAs 2, plus Ni / Al / Cr / tHg.

**HELD — 3 tickets are NOT wiring misses. Reporting, not papering over.**
1. `infant-formula` + `infant-rice-cereal` (ELON NOTE 18:12Z; ticket 6): both carry `provisional_scaffold: true` / `hmtc_category: pending_taxonomy_review`. Their structured evidence is filed under the **locked** subcategory rows, whose pages are already populated (`infant-formula-powder-non-soy` renders 10 populated cells; `baby-cereals-dry-rice-based` renders 4). Rolling the six subcategory registers up into the parent scaffold would pool **as_sold powder with as_consumed RTF in one range cell** (basis conflation, CLAUDE.md Part 14) and would derive page content from a scaffold that has not cleared a Step 0 Lock (Part 10, which also reserves merging overlapping pages to Karen). Ledger `OI-20260910-infant-formula-scaffold-duplicates-locked-rows`.
2. `beef-product` / `poultry-product` / `game-meats` (tickets 7–9): their numeric rows are in the **GEMS** and **FDA TDS** registers, which are keyed on `food_name` / `tds_food_description`, **not** on a product slug. Wiring them needs a food-name→HMTc-row admission map. That crosswalk plus a censoring/basis sign-off is explicitly **gated and Do-NOT-auto-land** (GEMS is ~47% censored and publishes *lower bounds*; landing it without a substitution rule reproduces the censored-zero artifact that `audit-contamination-profile-integrity.mjs` is build-blocking against). Reed's tickets already carry the per-food admit/reject adjudication (Cattle meat admitted; milk / liver / kidney / fat / offal / multi-species pools rejected), so the map is small and tractable — it needs an ORDER, not more analysis. Ledger `OI-20260910-gems-tds-product-row-admission-map`.
3. Basis-cell overflow: category6/7 registers carry long free-text basis prose, so a regenerated cell can list 17 distinct basis strings and mixes `as-sold` with `prepared/as-consumed` in one cell. Pre-existing generator behaviour, newly visible because these cells were empty before. Honest but unreadable, and the mixing is a Part 14 conflation risk. Ledger `OI-20260910-basis-cell-freetext-overflow` (scope_class `auto`).

**VALIDATION.** Generator idempotency guard **PASS** (second consecutive run is a no-op across all wiki pages). Firewall no-threshold lint: **0 structural errors** (16 pre-existing frontmatter warns, 1 prose info). Product mandatory-sections audit unchanged; none of the four ORDER pages fail it. Contamination-profile integrity backlog unchanged (pre-existing, untouched by this lane). Zero cells lost corpus-wide.

**COMMIT DISCIPLINE.** Only `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` is committed (`502378db49`), verified byte-identical to HEAD before my edit. The 89 regenerated pages and 117 workbench snapshots are left **uncommitted**: the working tree still carries Codex's in-flight S-DOI-1 run (~4,755 files, incl. edits to the same product pages outside my marker block), and per-file separation is not clean. They are deterministic generator output and reproduce from the committed fix with one `npm run evidence:standards-summary`. Same posture as my 2026-09-09T20:05Z STATUS. **Not pushed.**

### 2026-09-10T00:00Z · CLAUDE→ELON — ASK: HMI-GAP-1c residual (2 gates)

1. **GEMS/TDS admission map (unblocks beef-product / poultry-product / game-meats, and ~330 rows behind them).** Needs an ORDER plus the gated methodology sign-off: censoring substitution rule, the 10M ppb extreme-value filter, and an instruction that GEMS lower-bound percentiles are labelled as lower bounds and never presented as central estimates. Reed's per-food adjudication already exists; I will not land occurrence data on pages under a standing Do-NOT-auto-land gate without it.
2. **infant-formula / infant-rice-cereal taxonomy ruling** (Karen's, per Part 10): umbrella rollup, redirect to the locked rows, or merge away. If umbrella is chosen, a basis-preserving rollup rule is required — I will not pool as_sold with as_consumed to fill a cell.

Also standing from 2026-09-09T20:05Z and unanswered: canary PASS acceptance + fan-out lane, and GATE 1 custody. Holding.

### 2026-09-10T04:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T04:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T00:00Z, HMI-GAP-1/1b/1c); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T05:10Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T05:10Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T04:09Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T06:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T06:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T05:10Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T07:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T07:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T06:09Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T08:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T08:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T07:09Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T09:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T09:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T08:09Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T10:09Z · CLAUDE→ELON — STATUS: heartbeat

2026-09-10T10:09Z — no new ELON→CLAUDE directive since last STATUS (2026-09-10T09:09Z heartbeat); standing by. Open on CLAUDE's side, all HELD pending an ELON reply: the HMI-GAP-1c residual ASK (GEMS/TDS admission map ORDER + censoring sign-off; infant-formula / infant-rice-cereal taxonomy ruling, Karen's per Part 10), and from 2026-09-09T20:05Z the S-DOI-1b/1c canary PASS acceptance + fan-out lane and batch size, plus GATE 1 custody choice. No mint, no push, no fan-out.

### 2026-09-10T13:15Z · ELON→CLAUDE — ORDER: S-DOI-GRAPH-1 (canary diamond — execute)

PRIORITY: P0. This is the next standards finish. Stop heartbeating on the unanswered ASK from 2026-09-09T20:05Z — answered here.

## Decision (locked)
1. **S-DOI-1b/1c canary = GO.** Category: `baby-cereals-dry-rice-based` (locked row, not the scaffold parent). Full 11-cell panel: Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Sn, Al, Cr, Cr-VI.
2. **Topology = diamond graph** (not another linear chat). Fan-out per cell, adversarial verify on the edge, single barrier before any mint claim.
3. **GATE 1 custody = dual:** RFC-3161 timestamp + neutral third-party deposit (both). Screenshots + on-page change notes + brand `StandardVersion` pin still required (S-DOI-1c).
4. **Mint stays HOLD** until every canary cell is PASS at >95% confidence on tightest worldwide finalized government floor (or disclosed mandatory read-across with provenance). No Method 1. No invented ppb. No blanks.
5. **HOLD for later ORDERS (do not block canary):** GEMS/TDS admission map; infant-formula / infant-rice-cereal taxonomy ruling (Karen Part 10). Do not land those this ORDER.

## Three rules (non-negotiable)
- Cut fake dependencies (no “and then” without data edge).
- Parallel independent cell work; barrier only when the whole set is required.
- Dedupe against **seen**, not only confirmed (failed/refuted findings stay in `seen`).

## Execute
### A) Scope node (1 agent)
- Confirm canary page + register row exist; list the exact 11 cells; load LIVE Method v2.0 (gov-floor; read-across if none; dual-percentile NOT LIVE).
- Output schema: `{ subcategory, cells[], method_lock, mint_hold: true }`.

### B) Fan-out research (parallel, one agent per cell — 11)
Each cell agent returns ONLY this shape (validate):
```json
{
  "cell": "Pb|Cd|tAs|iAs|tHg|MeHg|Ni|Sn|Al|Cr|Cr-VI",
  "limit_ppb_or_native": "number|null",
  "basis": "string",
  "instrument": "string",
  "jurisdiction": "string",
  "url": "string",
  "retrieved_at": "ISO-8601",
  "confidence": 0.0,
  "disposition": "gov_floor|read_across|blocked",
  "read_across_provenance": "string|null",
  "notes": "string"
}
```
Rules: confidence must be honest; if <0.95 → `blocked` (never invent). Prefer lowest applicable finalized government limit worldwide. Speciation cells follow pathway rules (rice→iAs; fish→MeHg; etc.) — for this rice-based canary, iAs is in-scope; MeHg/Cr-VI only if a binding instrument exists else read-across/blocked with provenance.

### C) Edge reduce (code / no model)
- Flatten, dedupe by `(cell, instrument, url)`, keep tightest defensible floor per cell.
- Drop nulls from failed agents without killing the batch.

### D) Verifier fan-out (parallel, 2–3 skeptics per cell that claims PASS)
- Adversarial prompt: try to kill the finding (wrong matrix, superseded instrument, non-finalized draft, units/basis error, Method-1 smell).
- Keep cell PASS only if majority of verifiers fail to refute AND confidence ≥0.95.
- Failures → `blocked` or `read_across` with provenance; never quiet-pass.

### E) Barrier synthesize (1 agent)
- Produce `docs/S-DOI-1b-canary-baby-cereals-dry-rice-based.md` table: cell → limit → instrument → confidence → disposition.
- All 11 cells must be `gov_floor` or disclosed `read_across`. Any `blocked` = canary FAIL (mint still HOLD).

### F) S-DOI-1c immutable edition (same canary page only)
- Screenshots of primary instruments (immutable evidence pack under `data/evidence/regulatory_limits/` or workbench path you already use).
- Third-party timestamp path: RFC-3161 **and** neutral deposit receipts.
- On-page change notes for the standard edition.
- Brand pin field: `StandardVersion` exact string for this edition.
- Output: `docs/S-DOI-1c-immutable-edition-canary.md` + artifact paths.

## Done / STATUS
Append STATUS with: cell table summary, PASS/FAIL per cell, verifier survival counts, artifact paths, GATE 1 receipts status, explicit `MINT: HOLD`.
ASK only if a fact only Karen knows (taxonomy/money). Do not ASK “what next” — next after canary PASS is Elon fan-out batch ORDER.

## Hard HOLDs
No DataCite mint. No cert push. No Method 1. No blank cells. No GEMS auto-land. No infant scaffold rollup. No Disney outbound.


### 2026-09-10T13:55Z · ELON→CLAUDE — ORDER: S-DOI-GRAPH-1b (KILL monitored/subsumed blanks)

PRIORITY: P0 override on canary `baby-cereals-dry-rice-based`.

Karen just rejected the v2 PDF: header shows **7/8 analytes with a published limit**; iAs row is `monitored` / `subsumed` with empty jurisdiction. That is a Method lock FAIL (never blank). Rice→iAs is a **defining pathway** — iAs MUST be a numeric published certification limit on this standard, not monitored theater.

## LOCK
1. Certification limit dispositions allowed: `gov_floor` | `read_across` (with provenance). **Forbidden on the claim surface:** `monitored`, `subsumed`, blank, dash, "not material" without a numeric floor, "7/8" headers.
2. Rice-containing subcategories: iAs is **mandatory** analyte with a published numeric limit (method + Lot Testing Schedule rule). Totals-first elsewhere does NOT delete defining-pathway species limits.
3. Fix this canary before any further fan-out: set iAs to the **lowest applicable finalized government iAs limit** for infant/rice cereal (or disclosed read-across if somehow none — but corpus has FDA/EU-class iAs instruments; do not invent). Confidence ≥0.95 or BLOCKED (still show the cell as blocked with provenance — never "monitored").
4. Remint PDF/version only when header reads **8/8** (or full panel count) with every row numeric. Mint DOI still HOLD until Elon PASS.
5. Mirror the rule into Program Manual / Lot Testing Schedule language if missing: rice matrix → mandatory iAs. Standards page + PDF carry the number. Agreements only cite StandardVersion.

## STATUS
Append: before/after iAs cell, instrument URL, confidence, PDF path, confirmation header is no longer 7/8.

HOLDs unchanged: no DataCite mint, no Method 1, no GEMS auto-land, no infant scaffold rollup.


### 2026-09-10T14:10Z · ELON→CLAUDE — LOCK: PANEL-CLAIM-1 (totals + species)

Karen clarification (binding). Align S-DOI-GRAPH-1 / 1b and all future standard PDFs:

**Always numeric on claim surface (gov_floor | read_across):** total Pb, tAs, Cd, tHg, Ni, Sn, Al, total Cr.

**Species:** iAs / MeHg / Cr-VI get a **numeric** published limit when defining pathway OR species-only finalized gov ML. Lab testing is reflex/mandatory per pathway — reflex does **not** authorize blank/monitored/subsumed claim cells.

**Rice / infant cereal:** iAs is mandatory numeric. baby-cereals-dry-rice-based v2 FAIL stands until iAs is a number and header is full-panel numeric (no 7/8).

Forbidden dispositions on claim surface: monitored, subsumed, blank, dash-as-limit.

Continue S-DOI-GRAPH-1b. Mint HOLD.

