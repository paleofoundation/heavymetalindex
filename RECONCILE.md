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
   `routing_malformed.csv`, `routing_unresolved.csv`, page-history blocks, `navPanels.ts`,
   `wiki/sources/index.md`, `wiki/sources/categories/*.md` are generator output. Regenerate instead.
5. **Never set or invent an environment variable** to make a gated step run.
6. **Read paths from a file one line at a time** — `while IFS= read -r p; do … "$p"; done < list`.
   Never `$(cat list)` or word-splitting; the repo contains paths with spaces (`Toxicology Files/`).
7. **Check preconditions first and abort on any failure.** Do not create the artifact a precondition
   is testing for in order to make the check pass. Report the failure and stop.
8. **Report, do not improvise.** When a step says "report only", produce the finding and change
   nothing — even when the fix looks obvious.
9. Styling and front-end tasks may not touch `wiki/**`, `data/**`, or `raw/**`.

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

## Step 0.9 — Rebuild and verify parity

`npm ci && npm run build`, then confirm against the 0.4 baseline: `authors20*` still 239,
`routing_malformed` 0 blocking, `routing_unresolved` 14, both build-blocking guards pass, same file
count ±small. Confirm the confabulated-DOI sweep and the Crossref cite-key minting fix are intact.
Commit generated output separately.

## Step 0.10 — Push and open a PR

`git push origin reconcile/2026-07-30`, open a PR against `main`. **Do not fast-forward `main`. Do not
deploy.**

---

## Firewall remediation — after the reconcile lands, own branch

- **F1 — folded into 0.8.** `Disallow: /dossiers` in `robots.txt` remains as belt-and-braces.
- **F2 — Fix the lint's wording.** `DOSSIER_DIR_ON_INDEX` overstates; rewrite to describe what it
  detects — certification-framed evidence records on the reference domain.
- **F3, F4 — folded into 0.8.**
- **F5 — `/api/defense-dossier`.** Relocate off the index plane. Needs Karen's placement call.
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
5. **`/api/defense-dossier` public JSON door.** Gate now, or accept until F5 relocates it?
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
