# SESSION STATE — v3 redesign, as of 2026-08-01

Written by Claude Code from verified facts, not from a summary. Every number here
was measured in this repo at the commit named below.

Karen recorded the same state into her `handoff/SITEWIDE.md`, but that file lives
in the design project's filesystem and does not reach this Desktop — the same
split that hid `COMPONENTS.md` and the golden pages earlier. **This file is the
in-repo copy. Start here, then read `SITEWIDE.md`.**

---

## Where the work is

```
worktree   ~/hmi-work/hero-v3        (deliberately OFF the Desktop — the Desktop
                                      copy was deleted four times mid-session)
branch     feat/v3-mega-menu
HEAD       234a80655
```

Do not recreate the worktree on the Desktop. Use:

```
git -C ~/Desktop/heavy-metal-index worktree add ~/hmi-work/<name> <branch>
```

## Gate

```
npm run check:v3            # from ~/hmi-work/hero-v3, with public/ served on :8099

chrome  257/271 pass   ✗ gating — 14 failing
f16       7/26  pass   ✗ not gating — 19 known gaps
exit 1
```

Exit code reflects `chrome` only. `f16` never gates but always prints — that count
is the F-16 backlog and it is meant to burn down in public. An assertion moves
`f16 → chrome` only when F-16 lands it, in its own commit with justification.

Horizontal overflow is clean at 1280 and 1440 (was +254px on every page).

## Commits, this arc

```
f3e8140c0  move 1 — cascade order declared in ONE place; deletion ledger closed
c91930d9f  move 2 — gate goes sitewide, 6 surfaces, 4 negative assertions
db4a9f030  move 2 — burgundy assertion corrected (separate commit, as required)
08763baeb  move 2 — References assertion made conditional on the page citing
eba183fb3  move 3 — .hmi-product-brief flattened; site's only gradient deleted
c22cd3bc1  move 3 — mega-menu left rail (title + blurb + all-link), no chevrons
c00926f4c  move 3 — horizontal overflow killed; layout-containment assertion added
234a80655  spec re-derived from the golden-page artifact
```

## Which screens are golden, and which are not

A golden screen is rendered with REAL content from the live site, so it is a
literal diff target. A non-golden screen is still mockup content and can only be
inferred against — which is where every drift in this project came from.

```
GOLDEN      metal        isMetal        15 blocks
            ingredient   isIngredient   10 blocks

NOT GOLDEN  product, regulation, source, synthesis, finding, portal, category
NEW         isMetalsIdx / isProductsIdx / isRegulationsIdx — the three index
            screens now extract. They had NO target before, which is why Chrome
            found `Index / Metals / Metals` breadcrumbs and a METAL PROFILE badge
            on a registry while the gate said nothing.
```

Artifact: `~/Desktop/Heavy Metal Index v3.dc.html` (3,390 lines). The extractor
resolves it by SEARCH, newest match wins, so a fresh export dropped anywhere on
the Desktop is picked up with no path edit. Re-derive with `npm run extract:v3`.

## The sequencing principle — order by DATA AVAILABILITY, not by page

This is the durable rule. It stops the next session picking a screen because it
looks important.

```
ingredient   contamination_profile is machine-readable frontmatter, mirrored in
             wiki/static/contamination.json (229 records). Buildable TODAY.
metal        most sections need values extracted from prose first.
regulation   regulations.json holds limit_value: "multiple mg/kg; food-specific
             maximum levels" and body: None — a sentence where a chart needs a
             number. Needs a parse pass BEFORE any emitter can render it.
source       2,230 pages, the largest surface, but bodies are hand-written prose
             with only hmi-page-history generated. Largest extraction job.
```

## Next four, in order

1. **Mega-menu Cross-cuts + the Foods/ingredients naming.** The bar says *Foods*,
   the panel is `hmi-panel-ingredients`, the link says *All 257 ingredients* —
   three names for one thing. v3 resolves it: `label: Foods`,
   `title: Foods & ingredients`. Cross-cuts ships only where every item resolves
   to a real page: **regulations** and **evidence** qualify; **metals** has 0 of 4
   with destinations, which is below the two-item floor and was handed back to
   design rather than padded (CHROME-SPEC §3 step 4).
2. **Breadcrumb duplication and the type badge** on the three index screens.
   Likely one fix — the badge inherits page-kind instead of screen-type.
3. **Redeploy the preview**, then Chrome verifies the batch at 1280 and 1440.
   `npx vercel link --yes --project heavymetalindex && npx vercel deploy --yes`
   Link BY NAME. A truncated project id created a stray public project once.
4. **Ingredient body, contamination profile first** — the only body data already
   structured.

## Two assertions deliberately NOT yet written

Both would be inert no-ops today, which is the defect they exist to catch.

- **Scorecard grades.** When the completeness scorecard is built: *every distinct
  grade must compute to a distinct treatment, with `NOT-READY`/`flag` as the
  solid-burgundy pair.* Stronger than a colour check — it fails both when
  `NOT-READY` reads like `OK` and when any two grades collapse into each other.
- **Claim underline.** `span[data-claim]` matches 0 elements across 3,884 built
  pages; `claims.jsonl` is 1 byte. OBJECTION 1, upheld. The CSS is last in that
  chain, not first.

## Standing rules earned the hard way

- **Structure from v3, data from the repo.** v3's counts are invented (Lead 1,050);
  the repo's are real (1,196). Never publish a mockup number.
- **A generator that emits chrome is chrome.** F-16 is the ~32 emitted BODY
  sections, not every generator. Fencing out `build-nav-panels.mjs` cost a cycle.
- **Confirm a predecessor before deleting it.** `_legacy-all.scss:242-258` looks
  like the claim underline's predecessor and is not — it styles the citation `<a>`,
  live on 1,494 anchors in `metals/lead` alone.
- **Assert the populated column count, not the template.** A 3-column grid with 2
  populated columns computes to `repeat(3, 1fr)` and passes a geometry check while
  being wrong.
- **A reference that violates its own assertion is unresolvable.** Two gradients
  shipped into the artifact briefly; had they stayed, `no gradient anywhere` would
  have been green on the build and red in the target with no honest fix.
