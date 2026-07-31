# RECONCILE.md — working plan for Claude Code sessions

**Audience: the Claude Code session working in this repo.** Karen invokes steps from this file by
number. Read the whole file before acting on any step; the Standing rules and the Verified facts are
what keep a step from re-deriving things that are already settled.

Companion design work lives outside this repo (Heavy Metal Index v3, Content Page PDF v2, Index Pro).
Where a step needs a visual spec, Karen supplies it.

> **Provenance of this copy.** The authoritative RECONCILE.md lives in Karen's design environment, not
> in this repo. It never updates in place — each revision must be saved over this path by hand. This
> copy was saved 2026-07-30 before step 0.8. If a step's text here disagrees with what Karen pastes,
> hers wins.

---

## Standing rules — non-negotiable, every step

1. **Never modify the main worktree** at `~/Desktop/heavy-metal-index`. All reconcile work happens in
   `~/Desktop/hmi-reconcile` on branch `reconcile/2026-07-30`.
   **Baseline updated 2026-07-30 19:40 — and main is LIVE, not frozen.** It moved from `4b71663db` to
   `11631713f` ("chore(evidence): regenerate ingredient synthesis backlog audit", one file,
   `data/evidence/ingredient-synthesis-backlog.csv`) with no reconcile session touching it. **Cause
   identified: a second concurrent interactive Claude Code session in the main worktree** — nine live
   `claude` processes, two session transcripts in the last 90 minutes, and a plain interactive commit in
   the reflog at 19:40:27. **Not** the autonomy loop: all six `com.paleo.heavymetalindex.*` launchd
   agents are `disabled` and unloaded, no ingest process is running, no commit lock — FRANK has been off
   since the June 9 runaway. The distinction matters because a scheduler would be pausable and a
   parallel session is not; it has to be found and parked by a human.
   The freeze is intact — `pre-reconcile-2026-07-30` still points at `4b71663db` and is still an
   ancestor — so **verify main against its CURRENT sha, not a memorised one**, and treat drift as
   expected rather than as damage. Carry-across always reads from the **tag**, never from `main`, so a
   moving tip cannot corrupt the branch.

   **Standing rule, learned the hard way: one session per repo.** Two Claude Code windows in the same
   worktree cannot see each other's work, both commit as the same author, and the collision list drifts
   under whichever one is mid-analysis.
2. **Never use `--no-verify`.** If a hook blocks you, report it verbatim and stop. The hook is data.
3. **Never `git reset`, `rebase`, `force-push`, `prune`, or delete a branch or tag** in a step that
   did not explicitly authorize it. Use `git commit -- <pathspec>` when the index holds unrelated
   staged work.
4. **Never hand-edit generated files.** `data/evidence/product_source_routing_audit.csv`,
   `routing_malformed.csv`, `routing_unresolved.csv`, page-history blocks, `navPanels.ts`, and every
   path listed in **`tools/lib/wiki-edit-scope.mjs`'s `WHOLLY_GENERATED` register** are generator
   output. Regenerate instead. **That module is the single register — this rule deliberately does not
   restate its contents.** Two lists of the same thing, one in prose and one in code, is exactly the
   declaration/implementation drift this repo keeps producing; the doc points at the code so there is
   nothing to fall out of sync.
5. **Never set or invent an environment variable** to make a gated step run.
6. **Read paths from a file one line at a time** — `while IFS= read -r p; do … "$p"; done < list`.
   Never `$(cat list)` or word-splitting; the repo contains paths with spaces (`Toxicology Files/`).
7. **Check preconditions first and abort on any failure.** Do not create the artifact a precondition
   is testing for in order to make the check pass. Report the failure and stop.
8. **Report, do not improvise.** When a step says "report only", produce the finding and change
   nothing — even when the fix looks obvious.
9. **A collision list contains only files present on BOTH sides.** Everything one side created that the
   other never had is invisible to it. Before declaring any carry-across complete, sweep for files
   present on `pre-reconcile-2026-07-30` and absent from the branch — `git diff --name-status
   <tag>..HEAD | grep '^D' | cut -f2` — and report by area. This blind spot cost 14 files in 0.8,
   including the whole of `tools/ingest/`. Use `cut -f2`, not `awk` field-blanking: blanking `$1`
   replaces the tab with a space and silently breaks a following `^path/` match, which returned a false
   zero on the first attempt. **The rule is only as good as the command that implements it.**
10. Styling and front-end tasks may not touch `wiki/**`, `data/**`, or `raw/**`.
11. **Append-only data files are unioned, never chosen.** A collision list adjudicates files as units,
    but the contents of an append-only trail are additive — "which side wins" is a malformed question
    about `wiki_edit_audit.jsonl`, `review_events.jsonl`, `claim-provenance-audit.csv` and their kin.
    Taking either side drops the other's rows. Union by verbatim line, dedupe exact duplicates, sort
    deterministically, and report the three-way counts (local-only / origin-only / shared) so the merge
    is auditable. *Vindicated 0.8c: origin-only was 249 against origin's committed file and 301 against
    the branch's working file. Overwriting would have destroyed 301 real provenance rows.*
12. **A hook that auto-stages generated files turns any gate test into a writer.** Testing a gate by
    staging a scratch page fires the pre-commit generators, which `git add` their own output — so a row
    for a file you are about to delete can ride into the next commit. After **every** gate test, not
    just after a build: regenerate, verify the artifact contains no scratch reference, and inspect the
    commit's file list rather than trusting it. *Found in 0.8d by checking an unexpected second file in
    a commit; the 0.5 DOI-gate test had the same exposure unchecked.*
13. **A gate test that touches the worktree but not the index proves nothing about a pre-commit gate.**
    Pre-commit checks read the **index**, so an unstaged edit sails through and looks like a broken gate.
    Always `git add` the probe before concluding anything. *Found in 0.9b, where the first probe reported
    "BARRIER BROKEN" and the barrier was fine.* Rule 12 is a test that writes more than you intended;
    rule 13 is a test that checks less. Both are the test misleading you about the gate rather than the
    gate misleading you about the code.

## Reporting protocol

End every step by appending to `docs/reconcile-log.md` (create it if absent) using this shape:

```
## <step number> — <title> — <ISO timestamp>
Result: DONE | ABORTED | BLOCKED
Commits: <shas with subjects, or none>
Findings: <numbered, terse>
Open questions for Karen: <numbered, or none>
Main worktree verified: <sha> / <dirty count> / <stash count>
```

Then tell Karen only: the step number, the one-line result, and anything in "Open questions". She
does not need the full report pasted anywhere — it lives in the log.

---

## State of play — 2026-07-30

**Backups, all verified.** Do not re-create these.

| artifact | path | covers |
| --- | --- | --- |
| Tag | `pre-reconcile-2026-07-30` → `4b71663db` | local main HEAD |
| Bundle | `~/Desktop/hmi-pre-reconcile.bundle` (208MB) | all committed history, both sides |
| Full copy | `~/Desktop/hmi-FULL-2026-07-30` (5.3GB) | history + 947 dirty paths + 8 stashes |
| Stash patches | `~/Desktop/hmi-stash-patches-2026-07-30/` (8 files, 99,538 lines) | stashes individually |
| Working lists | `~/Desktop/hmi-reconcile-lists-2026-07-30/` | `resurrect.txt` 200, `collide.txt` 3,061, `reverted_files.txt` 2,200, `origin_files.txt` 6,662 |

**Branch `reconcile/2026-07-30`, based on `origin/main` @ `5f7a7150d`:**

```
90a2f9a38  chore(generated): regenerate derived output after contaminated-batch excision
8c5de9028  fix(hooks): scope the DOI gate to added source pages and DOI-line changes
d42bf96cc  fix(build): untrack second stray node_modules symlink
a9a0538c9  fix(build): untrack stray node_modules symlink and correct the ignore rule
73fed7159  revert(ingest): re-apply local's contaminated-batch removal lost by the graft
```

Build passes. Working tree clean. Nothing pushed. **No local code has been carried across yet.**

## Verified facts — do not re-derive

**Governing principle for this repo: neither the docs nor the manifest is an inventory of what exists.**
Declaration and implementation drift apart in *both* directions here, and four instances are on record:
`wiki/roadmap.md` publishes `mint-dois.mjs` and `translate-synthesis.mjs`, which do not exist
(declared-but-absent); `audit-page-history-leaks.mjs` runs as a blocking guard documented nowhere
(present-but-undeclared); `package.json` declares `library:status` against a file origin does not have
(declared-but-absent); `faq-firewall-guard.mjs`'s header claims an importer that is not in the build
(declared-but-absent); and the wiki-edit audit barrier declares an invariant the generators have never
satisfied, passing only by coincidence (**declared-but-unenforced** — the most dangerous variety, because
declared-but-absent fails loudly the moment you invoke it and present-but-undeclared merely surprises you,
but a gate passing by coincidence actively certifies an invariant nobody has been maintaining; two
commits went out under it). Every one was found by checking the artifact, never by reading its description —
which is also the reason F9 is worth running: `quartz.layout.ts` declaring a directory hidden from nav is
a statement about nav, not about `public/`.

- **Strategy**: `origin/main` is the base; local is re-applied selectively. Origin is what is
  deployed and the smaller delta (89 commits vs 370). Merging the other direction resurrects deleted
  pages.
- **Merge base** `543463610` (2026-06-25) is a genuine common ancestor.
- **The graft laundered provenance.** `5f7a7150d` is a single-parent commit that replayed 482 files of
  local's work onto origin. Git therefore reads local's own authorship as an origin-side change, and a
  three-way merge will resolve some conflicts in origin's favour on a lineage that is fictional.
- **Excision verified complete**: `authors20*` routing rows went 519 → **239**, exactly matching local
  main. Zero of the 200 excised pages were referenced by any `wiki/` page — they were bulk-ingest
  orphans that never passed synthesis.
- **`routing_malformed.csv` = 1,212 rows, 0 blocking.** The generator's severity model is the
  operative check, not the row count. Origin committed 1,412; the number moved down.
- **Collisions**: 3,061 files, 2,781 genuinely divergent, dominated by regenerable wiki prose. ~100
  code/config files need human judgement.
- **`data/evidence/` authority is local**, except two origin-only corrections that must survive:
  PR #81 duplicate-DOI dedup (`43f4b5e53`) and the censored-zero integrity drain (`22134c35a`).
- **The confabulated-DOI sweep was NEVER APPLIED — corrected 2026-07-30.** An earlier version of this
  file listed it as a correction to protect through regeneration. It is not. `c2875919d` added only the
  188-line audit markdown and changed zero source pages; its own header defers the fix to "a quiescent
  tree — the working directory is currently multi-writer." All 61 bad DOIs are present and uncorrected
  on the branch, the tag, **and origin/main** — i.e. on the deployed line. It is 61 DOIs across 61
  pages, not 62. This is an unexecuted to-do, not reconcile damage, tracked as urgent item **C1**.
- **The Crossref cite-key minting fix was never carried into the branch.** `tools/ingest/` (5 files,
  including `crossref-mint.mjs`) exists on the tag and on neither origin nor the branch. See standing
  rule 9. 14 files total were missed in 0.8: `tools/ingest/` 5, `tools/autonomy/` 4, `tools/evidence/`
  3, `tools/lib/` 1, `tools/central-library/` 1.
- **These tools do not exist**, despite `wiki/roadmap.md` publishing them as shipped:
  `tools/mint-dois.mjs`, `tools/translate-synthesis.mjs`.
- **All fourteen `vercel.json` functions exist and are live.** Verified 2026-07-30 by direct curl:
  exact 1:1 between declarations and handlers in `api/`, on both origin and local. `405` on `/api/ask`
  and `/api/corrections` (POST-only) and `400` on `/api/risk-map` (missing param) are correct
  validation responses, not failures. **A previous version of this file claimed nine of thirteen had no
  handler — that was false**, sourced from a design-side GitHub tree read whose file filter hides
  `.mjs`. Treat any repo fact that arrived from that source as unconfirmed until checked locally.
- **Deployed production commit is `50de6ab`** (2026-07-27), self-reported by `/api/defense-dossier`'s
  `product.content_pin.last_commit_sha`. A genuine ancestor of `origin/main`, **eight commits behind
  its tip**, never in local main's lineage. The graft `5f7a7150d` is among those eight, so **the 200
  contaminated pages were never public** — the excision is preventive, not remedial.
- **0.6 result — the dossiers are NOT a Part 12 brand breach.** Category-level evidence records: no
  brand named, `noindex, nofollow` on every one, zero entries in either sitemap or `contentIndex.json`,
  no inbound link from any content page, explicit disclaimer that they state no HMTc threshold.
  **The lint's wording is what is wrong** — "brand-legal defense dossier pages" overstates it.
- **0.6 result — `step0_basis` does not leak.** Zero occurrences in emitted HTML, JSON-LD, or any
  `data-` attribute. Quartz strips the frontmatter. Source-tree hygiene, not live exposure.
- **0.6 result — what IS open**: (a) domain placement; (b) `robots.txt` has no `Disallow: /dossiers`,
  so per-page `noindex` is the single line of defense; (c) `/products/chocolate` names an internal repo
  path and "CLAUDE.md Part 19" in reader-visible prose.

---

## Step 0.8 — Carry local's code across — DECISIONS SIGNED OFF 2026-07-30

**Preflight, because main is moving under us:**

1. Record main's current sha, dirty count and stash count. Do not assume `11631713f` — read it.
2. Refresh the bundle so the new commit is backed up: `git bundle create
   ~/Desktop/hmi-pre-reconcile-2.bundle --all`, then `git bundle verify`. Keep the original bundle.
3. Re-check the 19 collision files against the tag: has any changed on `main` since 0.7? If a
   `quartz/` or `tools/` collision moved, **stop and report**. A drifting generated evidence CSV is
   expected and not a reason to stop.

Seven of the 19 collisions are byte-identical — no action on `MegaMenu.tsx`, `topNavLinks.ts`,
`navPanels.seed.ts`, `topNav.inline.ts`, `pageHistoryTimeline.inline.ts`, `contentIndex.tsx`,
`ingredient-groups.json`.

**Decisions, per file:**

- **Origin wins every authored front-end file** — `TopNav.tsx`, `Snav.tsx`, `Footer.tsx`,
  `TableOfContents.tsx`, `citeSuperscript.inline.ts`, `custom.scss`, `proof-design.scss`,
  `styles/topNav.scss`.
- **`navPanels.ts` is generated** — regenerate, never pick a side.
- **`CLAUDE.md` and `docs/lint.md`: origin's base text, with one local sentence preserved.** Origin is
  right that the *contamination-profile integrity* audit is blocking. Do **not** carry origin's
  description of the *firewall no-threshold* lint — different lint; local's blocking posture is kept.
- **`package.json`: origin's base**, then apply the generator changes below.

**Carry local's firewall posture. This is the point of the step, not a follow-up.** In one commit:

1. Remove both dossier generators from the prebuild chain.
2. Remove the 351 `wiki/dossiers/` pages (generator output — nothing authored is lost).
3. Flip the firewall no-threshold lint to blocking, matching local.
4. Correct `docs/architecture/application-crm-spec.md`, which asserts this removal already happened.

Then confirm the build still passes with the lint blocking. If it fails, report the violations — do not
soften the flag back to `--warn-only`.

**Door left open:** `api/defense-dossier.mjs` still serves the 31KB manifest as public JSON. That is F5.

**Answers to 0.7's open questions:**

- Confirm `build-homepage.mjs` / `build-ingredient-index.mjs` are superseded by comparing emitted
  targets against origin's `build-category-pages.mjs` / `build-recently-updated.mjs`; drop only if so,
  and report the comparison either way. **Keep `audit-content-preservation.mjs`.**
- **`homeSearch.inline.ts`** — leave it. Log as later cleanup.

Restore local's side per-path from the **tag**, one line at a time:
`git checkout pre-reconcile-2026-07-30 -- <path>`. Never bulk-restore a directory. Commit in coherent
groups — firewall posture, ingest tooling, docs, nav data — one commit per group. **Local wins only for
ingest tooling**: `tools/fetch-app/`, `central-library/`, `library/`, `wishlist/`, `lib/`, `evidence/`,
`autonomy/`, `ingest/`.

A generator follows its consumer. From **origin**: `build-nav-panels.mjs`, `build-page-references.mjs`,
`audit-page-history-leaks.mjs`, `postbuild-inject-jsonld.mjs`.

Finally, verify PR #81 dedup (`43f4b5e53`) and the censored-zero drain (`22134c35a`) survived.

---

## Step 0.8b — Finish the carry-across (the local-only sweep)

0.8 restored from `collide.txt`, which by construction contains only files present on both sides.
Local-only files were invisible to it. Fix in two parts.

**Part 1 — restore the 14, now.** Already covered by the signed-off policy "local wins for ingest
tooling", so no further sign-off needed: `tools/ingest/` (5), `tools/autonomy/` (4),
`tools/evidence/` (3), `tools/lib/library-root.mjs`, `tools/central-library/metal-deepdive-mehg.json`.
Restore each from the tag by path, one line at a time. Commit as `reconcile(tools): restore local-only
ingest tooling missed by the collision list`.

**Part 2 — inventory everything else, then STOP.** Produce the full list of paths present on the tag and
absent from `HEAD`, grouped by area with counts. Restore nothing outside `tools/` without sign-off.

Cross-check inside Part 2: **`wiki/regulators/`** (11 files) was named as local-only value. The deployed
TopNav links to `/regulators/us-fda`, `/regulators/efsa`, `/regulators/jecfa`, `/regulators/codex`,
`/regulators/us-epa`, `/regulators/atsdr` and `/regulators`. Report whether those pages exist on the
branch, and `curl -sI` two against production. **If they 404 in production, origin has been shipping
dead nav links** — which makes carrying local's `wiki/regulators/` a fix, not a preference.

---

## Step 0.8c — Finish the local-only sweep — DECISIONS SIGNED OFF 2026-07-30

0.8b Part 2 found 38 remaining local-only paths. Two are settled and stay out: the `outputs/`
Codex-cache symlink (removed on purpose in `d42bf96cc`) and `quartz/scripts/homeSearch.inline.ts`
(orphaned by design once origin's `TopNav.tsx` won). `wiki/regulators/` is a non-issue — 11 files
present and identical on both sides, all seven TopNav URLs 200 in production.

Restore from the tag by path, one line at a time, in four commits:

1. **The 13 local-only `wiki/sources/` pages — CARRY.** Real ingested corpus. They land as **added**
   pages, so the DOI gate tests them on their merits. **If it blocks any, report and stop; do not
   bypass and do not add a `no_doi_assigned` marker to get past it.**

   **The DOI gate passed; the wiki-edit audit barrier blocked instead — resolve by UNION, per standing
   rule 11.** All 13 have provenance rows in the tag's `wiki_edit_audit.jsonl` (4,844 rows) and none in
   the branch's (2,478). Do not set `WIKI_EDIT_AUDIT_SKIP=1`. Do not overwrite with either side —
   origin's 89 commits recorded their own rows, so taking local's wholesale would drop origin's
   provenance and mirror the hole it fixes. Union by verbatim line, dedupe, sort deterministically, and
   report local-only / origin-only / shared counts. **If origin-only > 0, that proves overwriting would
   have lost data — state the number.** Stage the unioned file alongside the 13 pages.
2. **The 13 local-only `data/evidence/` files — CARRY as-is.** Provenance trail for the
   extraction-quarantine work.
3. **The homepage cluster — test, then carry selectively.** For `build-key-questions.mjs`,
   `tools/homepage/faq.json`, `quartz/styles/home.scss`: carry only if (a) no origin generator emits
   an equivalent target **and** (b) something on the branch consumes it. Report the target map either way.
4. **`docs/` (3) + `data/gaps/` + `wiki/batch-reports/` (2) — CARRY.**

Then re-run the tag-vs-branch sweep and confirm the only remaining absences are the two settled ones
plus anything 3 deliberately excluded. Only then proceed to 0.9.

---

## Merge order — decided 2026-07-31

**PR #103 merges first, then C1 branches off the result.** C1 outranks the reconcile in severity, but it
*depends* on it: C1's stated precondition is a DOI gate that works, and that exists only on this branch —
the `--diff-filter=AM` predicate fix (`8c5de9028`) and the `doi: ''` hole closure. Correcting 61 DOIs on
`main` first would mean doing the work behind a gate that cannot test it and a hole that admits an empty
value unnoticed, i.e. a fix that regresses silently. Sequence:

1. Merge PR #103 into `main`. No fast-forward. **Merging does not deploy** — `git.deploymentEnabled: false`.
2. Branch `fix/doi-integrity` off the merge commit.
3. First commit on it: close the `doi: ''` gate hole (the extraction `sed` strips double quotes only, so a
   single-quoted empty string survives as the two-character literal `''` and never matches
   `""|null|unknown`). Test that the gate now rejects `doi: ''`, `doi: ""`, `doi:` and `doi: null` alike,
   under standing rules 12 and 13.
4. Then C1 proper, below.

---

## Content integrity — urgent, ranks above the remaining firewall work

**C1 — 61 non-resolving DOIs on published source pages.** Live on the deployed line right now.
`data/evidence/confabulated-doi-audit-2026-07-29.md` is the actionable list; the fix was deferred to a
quiescent tree and the tree is now quiescent. For a reference whose whole argument is that its claims
are checkable, a fabricated DOI is the most damaging possible defect.

Rules for the fix: **never invent or guess a DOI.** For each of the 61, either (a) verify the real DOI
against Crossref and correct it, or (b) remove the `doi:` field and set `no_doi_assigned: true` with a
**verified publisher `access_url`**. Where neither is possible, report the page rather than improvising.
Same decision surface as Open decision 3 (six `doi: null`) and Open decision 2 (the `doi: ''` gate hole)
— do all three as one governed pass, gate hole closed first so the fix cannot regress silently.

**Also fix, in the same pass:** `tools/ingest/bulk-ingest-worker.mjs:32` defaults `HMI_REPO` to a hardcoded
`/Users/karenpendergrass/Desktop/heavy-metal-index`. Not a credential and env-overridable, but it makes the
worker silently machine-specific — fail with a clear error when `HMI_REPO` is unset instead of guessing a
path that exists on one laptop.

**Lead worth pursuing first: the 61 may be digit-slips, not inventions.**
`davydiuk2023-arsenosugars-methylation.md` carries `…envhealth.3c00080` on the C1 list, while
`davydiuk2023-effects-of-dietary-intake-of-arsenosugars-and-other.md` — a separate, valid page —
carries `…envhealth.3c00090`. Same author, same year, adjacent suffix, one confirmed non-existent.
Before treating the 61 as fabrications, test the digit-slip hypothesis across the list: for each bad
DOI, check whether a near neighbour (±1 in the final digits, or a transposition) resolves to a paper by
the same author and year. A slip is correctable with confidence; an invention is not. Either way the
rule holds — verify against Crossref, never guess.

Own branch, own step, after the reconcile lands. Do not fold into a reconcile commit.

---

## Step 0.8d — Narrow the audit barrier's glob, then land the held-back file

The wiki-edit audit barrier matches `^wiki/.*\.md$`, which is broader than the invariant it enforces.
The invariant is "every automated edit to a **content page** carries a provenance row." A batch report is
a record of an ingest run, not a page edit — and 36 batch reports are already tracked on the branch with
zero provenance rows, which is evidence the glob has been over-broad all along.

1. Narrow the barrier's glob to exclude `wiki/batch-reports/` and `wiki/lint/`. Hook only. Commit as
   `fix(hooks): scope the wiki-edit audit barrier to content pages, excluding run logs and lint reports`.
2. Verify the barrier still bites: stage a scratch `wiki/sources/` page with no audit row, confirm it is
   **rejected**, then unstage and delete the scratch file.
3. Commit the held-back `wiki/batch-reports/codex-bulk-ingest-2026-07-29.md` as commit 4b.
4. Re-run the tag-vs-branch sweep and confirm the remaining absences are exactly the six settled ones.

Also log, do not fix: `faq-firewall-guard.mjs`'s header comment claims `build-key-questions.mjs` imports
it; on the branch only `postbuild-inject-jsonld.mjs` and `build-metal-faq.mjs` do — the fourth instance
of declaration/implementation drift.

---

## Step 0.9 — Verify local's corrective work survived regeneration

0.8 already proved the branch builds with the lint blocking. What is still unverified is the class of
work that regeneration can silently destroy: **corrections made *against* generator output.** The
assumption "`wiki/sources/` is regenerable" is safe for prose and unsafe for these.

1. **The confabulated-DOI sweep.** — **SUPERSEDED.** The sweep was never applied; see C1. Skip.
2. **The Crossref cite-key minting fix.** Confirm cite keys on the affected pages still follow the
   `<firstauthor><year>-<slug>` convention from `docs/conventions.md`, and re-report the `authors20*`
   count in the routing audit — it should still be 239.
3. **Idempotency of the B1 re-closure.** Run the build a **second** consecutive time and confirm
   `wiki/dossiers/` is still empty and the firewall structural error count is still 0. One clean build
   proves the generators were removed; two consecutive clean builds prove the re-closure does not
   self-re-break the way `af9c97a50` did.
4. **Parity against the 0.4 baseline.** `routing_malformed` 0 blocking, `routing_unresolved` 14,
   emitted file count within a small delta, both other build-blocking guards PASS.

Commit any regenerated output separately. If step 1 or 3 fails, stop and report — those are the two
failures that would invalidate the reconcile rather than merely annoy.

Housekeeping: `RECONCILE.md` and `docs/reconcile-log.md` were swept into `99322f371` by `git add -A`.
Harmless — leave them tracked; the plan and its log belong in the repo.

## Step 0.9b — Make the audit barrier's claim true for generated content

**The finding — a fifth drift instance, declared-but-unenforced.** The barrier declares "every automated
edit to a content page carries a provenance row," but the generators that rewrite `wiki/metals/*.md`,
`wiki/index.md`, `wiki/coverage.md` and 33 others never call `recordEditOrAbort()`. The two earlier
generated-output commits passed only because those builds happened to touch `wiki_edit_audit.jsonl` for
unrelated reasons.

**The fix: confinement, not exemption.** Those 36 are not generated pages — they are authored pages
containing generated blocks. Blanket exemption would let a substantive edit to authored prose ride
through unrecorded. Making the generators record would fill the trail with untraceable noise.

Instead, exempt a staged `wiki/**/*.md` **only when its entire diff is confined to generator marker
blocks**, plus a short whitelist of generator-owned frontmatter keys for lines that sit outside markers.

**Report the whitelist as a finding.** State exactly which keys it must contain to pass this build's 36
pages. A handful of obviously generator-owned keys ⇒ the fix is correct. **If it must grow beyond that,
or any diff touches prose outside a marker, STOP and report** — that means a generator is rewriting
authored content.

Then verify the barrier still bites, apply standing rule 12 after the test, and commit.

### 0.9b decisions — signed off 2026-07-30

Diagnostic came back correct: whitelist is **exactly two keys**, `sources` and `description` — it did not
have to grow. The 13 source pages' out-of-marker changes are each one added blank line. **No generator is
rewriting authored content.** 33 of 36 pass under confinement.

**The 3 wholly-generated pages — option (a) with a refinement.** Add `wiki/audits/**` and
`wiki/coverage.md` to `WHOLLY_GENERATED`. **One register, not two:** do not mirror them into a prose
list; standing rule 4 now points at `tools/lib/wiki-edit-scope.mjs` instead of restating it. Adding a
sixth list of the same paths while fixing the fifth drift instance would be a poor trade.

**(b) is the target shape, recorded not scheduled:** generators emit marker blocks so confinement applies
uniformly and the register shrinks toward empty.

**On `90a2f9a38` and `99322f371`:** nothing to undo, no claim value moved, so no erratum — but record that
audit rows predating 2026-07-30 were never actually enforced, so a future reader does not over-trust them.

---

## Step 0.10 — Push and open a PR

`git push origin reconcile/2026-07-30`, open a PR against `main`. **Do not fast-forward `main`. Do not
deploy.** `vercel.json` sets `git.deploymentEnabled: false`; deployment stays a deliberate, separate act.

**Preflight.** Confirm the tree is clean, re-run the tag-vs-branch sweep (expect exactly the six settled
absences), record main's current sha. Then a credential scan across the full branch diff — API keys,
tokens, `.env` contents, absolute paths containing a username beyond the two symlinks already removed.
Report findings; if none, say so explicitly.

**Do not squash, rebase, or reword.** The 23 commits are the audit trail — each is coherent and several
document a finding that only makes sense in sequence. A tidy history would destroy the reason this branch
is trustworthy.

**PR body, in this order:** (1) what this is; (2) the base facts — merge base, the graft's fictional
lineage, deployed `50de6ab` eight behind; (3) what it fixes with the evidence; (4) what it does NOT fix —
C1, the six `doi: null`, the `doi: ''` hole, F5, F9, F10, `roadmap.md`'s claims — each linked to
`docs/reconcile-log.md`; (5) reviewer note that audit rows predating 2026-07-30 were never enforced and
the barrier began enforcing its own claim at `1c0b678ac`.

Record the PR URL in the log, then stop. Merging is Karen's call, and C1 may want to land first.

---

## Firewall remediation — after the reconcile lands, own branch

- **F1 — folded into 0.8.** `Disallow: /dossiers` in `robots.txt` remains as belt-and-braces.
- **F10 — Nothing protects wholly-generated pages from being hand-edited.** The inverse of the 0.9b
  problem: `wiki/audits/**` and `wiki/coverage.md` are generator output, so a session can edit them in
  good faith and have the work silently overwritten by the next build. Now that they are in
  `WHOLLY_GENERATED`, a pre-commit warning — "this file is generator output; your edit will be
  overwritten" — is cheap and prevents a class of wasted work. The durable version is 0.9b option (b).
- **F9 — Are internal run artifacts publicly emitted?** `quartz.layout.ts` hides `batch-reports`,
  `lint`, `queries`, `studies` and `corpus` from primary nav, its own comment saying these "must never
  surface in public navigation" because leaking them "undercuts the independent reference posture."
  Hiding from nav is not the same as not emitting. Check whether `wiki/batch-reports/` (36 ingest run
  logs), `wiki/lint/` and `wiki/queries/` land in `public/`, appear in either sitemap, or return 200 in
  production. If they do, this is the dossier shape again at smaller scale: unnavigable but public. The
  fix is exclusion from emission, not just from nav.
- **F2 — Fix the lint's wording.** `DOSSIER_DIR_ON_INDEX` overstates; rewrite to describe what it
  detects — certification-framed evidence records on the reference domain.
- **F3, F4 — folded into 0.8.**
- **F5 — DECIDED: 410 the endpoint on the index plane.** `api/defense-dossier.mjs` still serves the
  31KB manifest as public JSON, and it is now the only dossier surface on the reference domain. Return
  410 Gone with a body naming the cert plane; keep the handler and the `vercel.json` declaration so the
  route stays owned and the eventual relocation is a move. Also add `Disallow: /dossiers` to
  `robots.txt` as belt-and-braces against cached URLs.
- **F6 — Drain `step0_basis`** from the 16 product pages. Hygiene; gates nothing.
- **F7 — Stop naming internal paths in public prose** on `/products/chocolate`.
- **F8 — Remove `Component.BrandPreScreenTool()`** from content-page `beforeBody`. Do not delete the
  component.

---

## Open decisions — awaiting Karen, do not act

1. **`outputs/`** — ignore the directory, or keep the standalone workbook script under version control?
2. **The `doi: ''` hole** — fix the gate, or fix the generators that emit `''`?
3. **Six source pages with `doi: null`** — need verified publisher `access_url`s; ingest work.
4. **`wiki/roadmap.md`** publishes `mint-dois.mjs` / `translate-synthesis.mjs` as shipped. Build, or
   correct the page?
5. **RESOLVED 2026-07-30 — `/api/defense-dossier` returns 410 on the index plane.** With the 351 pages
   removed, the endpoint is the only dossier surface left on the reference domain: it serves the full
   31KB manifest as public JSON with `cache-control: public`, and `robots.txt` disallowing `/api/`
   stops crawlers and nothing else. Decision: return **410 Gone** with a JSON body naming the
   certification plane as its future home; **keep the handler in the repo** so relocation is a move, not
   a rewrite; **keep the `vercel.json` declaration** so the route stays owned and returns a controlled
   response rather than Vercel's generic 404. The only planned consumer is the unbuilt brand app.
   Execution lands in the post-reconcile firewall-remediation branch as F5, not in 0.9.
6. **35 ambiguous scope terms** and **23 HOLD cells** from the QC gate.

---

## After the reconcile: the site work

Order: identity and domain sweep → API declaration audit → token alignment → TopNav and Footer → wire
the two dead hero pills to the Pro apex → firewall remediation → published projection artifact →
`api/corrections` → `api/evidence-packet` → Pro app on its own apex → standing verification loop.

Settled identity: **Institute of Contaminant Standards** ("of", never "for"), apex
**contaminantstandards.com**, Pro at **pro.contaminantstandards.com**, certification plane
**heavymetalcertified.com**. **heavymetaltested.com is legacy** — dissolved, not redirected.
Correspondence becomes **karen@contaminantstandards.com**, with `karen@paleofoundation.com` kept live
as a permanent alias.
