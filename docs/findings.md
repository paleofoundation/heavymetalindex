# Findings queue

Defects found outside the scope of the step that found them. Per the standing rule for redesign steps 2–6, a finding is **logged here and left alone**. Only two things interrupt the step that found them: a defect that blocks the step from completing, and a factually false statement on a live public page.

Every entry carries the file, the line, the claim, and why it matters. **Nothing is logged here that has not been verified against the artifact in this repo.** Claims inherited from a plan, a report, or a prior session are re-checked before they are written down; several inherited claims turned out to be wrong and are recorded under Retracted rather than deleted, so they are not raised a third time.

Karen schedules this queue after step 5 merges.

Status values: `open` (verified, unfixed), `blocked` (verified, cannot be fixed until something else lands), `retracted` (was believed to be a defect, is not).

---

## F-01 — EU database-rights posture may not be available to this entity

**Status:** open · **Severity:** high · **Found:** 2026-07-31 (step 1)

- `wiki/licensing.md:13` — public. "The European Union's `sui generis` database-rights regime under Directive 96/9/EC and its implementations in Cyprus law applies to the curated database the Index publishes. This is the legal frame the rest of this page derives from."
- `CLAUDE.md:38` — internal. "EU database-rights law provides stronger protection for curated databases than US equivalents. This is a structural advantage to design around."

The `sui generis` right requires an EU/EEA-domiciled maker. The entity is Paleo Certified, Inc., a US corporation.

Why it matters: the licensing page uses that frame to reserve database rights against commercial reuse, which is the enforcement mechanism behind the paid tier. A public page asserting a right the entity may not hold is a representation to people deciding whether to pay. The internal note is the weaker half — a strategy resting on a doubtful lever is a planning error, not a representation.

Not a string sweep and not an engineering decision. Goes to counsel. Both lines are deliberately byte-identical to what they were before steps 1 and 1b touched the surrounding sentences.

---

## F-02 — Operator identity is corrected on human-readable surfaces but not machine-readable ones

**Status:** open · **Severity:** medium-high · **Found:** 2026-07-31 (step 1)

Steps 1 and 1b corrected the visible operator strings, the `citation_*` meta tags and the injected JSON-LD. The same attribution survives in surfaces that are consumed by machines or baked into derived artifacts:

| File | Line | Emits |
| --- | --- | --- |
| `api/mcp.mjs` | 56 | `attribution: "… Paleo Foundation…"` served by the live MCP server |
| `api/evidence-packet.mjs` | 41 | attribution carried into evidence packets |
| `tools/build-contamination-dataset.mjs` | 82 | attribution baked into the public contamination dataset |
| `tools/build-regulations-dataset.mjs` | 37 | same, regulations dataset |
| `tools/postbuild-llms-txt.mjs` | 50 | `llms.txt`, which exists specifically to be read by AI agents |
| `tools/postbuild-synthesis-pdf.mjs` | 78 | byline on all 24 synthesis PDFs, which are the Google Scholar artifacts |
| `tools/brand/build-og-card.mjs` | 167 | `"Operated by the Paleo Foundation"` on social preview cards |
| `tools/build-defense-dossier.mjs` | 67 | attribution in dossier output |
| `package.json` | 7 | `"author": "Paleo Foundation"` |

Why it matters: `build-og-card.mjs:167` renders "Operated by the Paleo Foundation" on the card a reader sees when the site is shared, while the page footer now says the Institute of Contaminant Standards. Structured data and citation exports are the surfaces this project's whole argument rests on being trustworthy.

**Do not sweep this by regex.** `tools/standards/**` also matches "Paleo Foundation" and must not change: those generate the HMTc Program Manual, a Foundation-branded artifact, and `render-manual-typst.mjs:316` already carries the correct `"Paleo Certified, Inc. dba The Paleo Foundation"`. Same trap as F-06.

---

## F-03 — Unguarded `git log` makes any gitless build fail hard

**Status:** open · **Severity:** medium · **Found:** 2026-07-31 (step 1)

`tools/build-evidence-packet-index.mjs:128` (`buildGitIndex`) calls `execSync('git log --name-only --pretty=format:"COMMIT|%h|%ai" -- wiki')` with no guard. When `.git` is absent the process throws and the whole prebuild chain exits 1.

Consequence: **`vercel deploy` from the CLI can never succeed on this repo**, because a CLI deploy uploads files without `.git`. Verified against deployment `dpl_CgibHnyhTq5p36yWX1o2s4mCJjQE`, which failed with `fatal: not a git repository (or any parent up to mount point /vercel)`. Git-triggered deploys are unaffected because they clone.

Why it matters: same family as the shallow-clone trap already on file, and strictly worse — shallow clone gives a generator one commit per file and degrades silently; this gives it none and kills the build. A `try/catch` returning an empty index fixes it.

Workaround if a preview is needed before this is fixed: build locally, copy `public/` to `.vercel/output/static`, write a Build Output API `config.json` (`version: 3`, filesystem handler then `/(.*)` → `/$1.html` to replicate `cleanUrls`), then `vercel deploy --prebuilt`. That carries no `api/*.mjs` functions.

---

## F-04 — `build-regulator-pages.mjs` deletes content when run outside the full prebuild

**Status:** open · **Severity:** medium · **Found:** 2026-07-31 (step 1)

`writeByMetal()` and `writeIndex()` rewrite `wiki/regulators/by-metal.md` and `wiki/regulators/index.md` wholesale and do not preserve the `hmi-page-history` marker block that `tools/build-page-changelogs.mjs` injects later in the same chain.

Inside a full `npm run build` this is invisible, because the changelog generator runs afterwards and puts the block back. Run the generator on its own and both files silently lose their `## Update history` section.

Why it matters: any session that regenerates regulator pages without a full build will stage a content deletion that looks like ordinary generator churn in a diff. Observed and reverted twice during step 1.

---

## F-05 — `CiteThisPage` is registered but rendered nowhere, so citation export is dead

**Status:** open · **Severity:** medium · **Found:** 2026-07-31 (step 1)

`Component.CiteThisPage` appears in no layout array. `quartz.layout.ts` has zero references to it; `quartz/components/Rail.tsx:19` records that the cite affordance "moved into the hero band", and the hero's "Cite this page" pill is unrelated chrome. The selectors `citeThisPage.inline.ts` binds to (`[data-hmi-cite-bibtex]`, `[data-hmi-cite-ris]`) are emitted only by the unrendered component.

Why it matters: this is the documented Quartz failure mode where dropping a component from the layout silently un-ships its inline script site-wide, and it previously killed search and `/ask` for weeks. Here it means no reader can actually export a BibTeX or RIS citation, on a reference work whose value is citability. It also strands the `organization = {Paleo Foundation}` strings at `citeThisPage.inline.ts:106` and `:126`, which is why fixing F-02 alone would not fix citation exports.

---

## F-06 — `wiki/roadmap.md` lists the translation pipeline as current status, but it has never produced output

**Status:** open · **Severity:** low-medium · **Found:** 2026-07-31 (step 1)

`wiki/roadmap.md:111`, under the heading "Status of the disciplines as of this commit", reads: "**Translation pipeline**: `tools/translate-synthesis.mjs` — synthesis-page translation into Spanish, Chinese, Portuguese, French, German, Japanese, Korean via the Vercel AI Gateway." No qualifier, listed alongside genuinely shipped items.

The tool is real — 244 lines, a working CLI taking `--lang`/`--slug`/`--all`. But zero translated pages exist anywhere in `wiki/`, and it is wired into no npm script. A reader of that list would reasonably conclude the Index is available in seven languages. It is not.

Why it matters: a public status list is the page a regulator or journalist checks to see what actually exists. One unqualified entry costs the credibility of the accurate ones around it.

The neighbouring DOI entry at line 105 is **not** a defect and should not be swept with this one — it reads "activates when `DATACITE_USER`/`DATACITE_PASSWORD`/`DATACITE_PREFIX` env vars are set", which is accurate.

---

## F-07 — The DOI pre-commit gate can be bypassed by a single-quoted empty DOI

**Status:** open · **Severity:** low (latent) · **Found:** 2026-07-31 (inherited, verified)

`.husky/pre-commit:74` extracts the DOI with `sed -E 's/^doi:[[:space:]]*//;s/^"//;s/"$//'`, which strips double quotes only. A frontmatter value of `doi: ''` therefore survives as the two-character literal `''` and never matches the gate's `""|null|unknown` case, so it passes.

Currently latent: zero source pages use `doi: ''` today. It becomes live the moment a generator or a session emits single quotes.

---

## F-08 — Six source pages have no DOI and no declared exemption

**Status:** open · **Severity:** low · **Found:** 2026-07-31 (inherited, verified)

318 source pages carry `doi: null`, but 312 of those declare `no_doi_assigned: true` or are `source_type: textbook-chapter`, which are the legitimate exemptions. The real gap is exactly six, and they need verified publisher URLs rather than an improvised marker:

`jayanthi2019-chennai-chicken-heavy-metals`, `levkov2017-ewes-milk-trace-elements`, `madani-tonekaboni2019-milk-lead-cadmium-iran`, `omosigho2025-toothpastes-heavy-metals-nigeria`, `ounifi2020-cadmium-nanofiltration-membranes`, `roslee2016-oil-palm-biochar-arsenic`.

Five are peer-reviewed. `roslee2016` is a thesis and may legitimately have none, in which case it wants the exemption marker rather than a DOI.

---

## F-09 — Imprecise operator reference on the editorial-integrity page

**Status:** open · **Severity:** cosmetic · **Found:** 2026-07-31 (step 1b)

`wiki/editorial-standards.md:46` — "The Foundation's bar for recusal is low…" describes the recusal policy for Index curators reviewing Index pages, which is Institute work under the trade-name split.

Not dangling and not false: its antecedent is line 44, "the Paleo Foundation's parallel operation of the HMT&C certification program", which is correct and untouched, and both names resolve to the same corporation. Logged for uniformity only.

---

## Retracted

Claims previously recorded as defects that are not. Kept so they are not raised again.

- **"`tools/mint-dois.mjs` and `tools/translate-synthesis.mjs` do not exist."** Both are present on `main` and always were. The surviving concern about the translation pipeline is narrower and is logged as F-06; the DOI entry is accurate as written.
- **"A tracked symlink under `outputs/` points at the Codex cache in `~/.cache`."** No tracked symlinks remain anywhere in the tree; `git ls-tree -r` returns no mode-`120000` entries. Cleaned up during the 2026-07-30 reconcile.
- **"351 defense-dossier pages are a Part 12 brand-firewall breach."** Retracted during the 2026-07-30 audit: the pages are category-level, carry `noindex`, appear in no sitemap or search index, and name no brand. The placement and defence-in-depth questions recorded in the shipping plan remain open, but the breach framing was wrong.

---

## F-10 — Content shell is 1480px wide; v3 specifies 1760px

**Status:** open · **Severity:** medium · **Found:** 2026-07-31 (step 3)

`quartz/styles/proof-design.scss` sets `--maxw: 1480px`. The v3 design uses `max-width: 1760px` on 18 containers, which is its dominant shell width; 1480px appears nowhere in it.

`--maxw` drives five containers: `.proof-home .proof-main`, `.proofnav .inner`, `.proof-container`, `.hero-wrap`, `.hmi-auth-page`. Changing it re-flows line length and every grid on every page.

Deliberately **not** changed in step 3. Step 3 is a colour and radius alignment; a 280px shell widening is a layout change, and folding it in would have conflated it with the header work in step 4 so neither could be judged on its own. Belongs with the layout constants at v3 lines ~1985–2015, alongside the sticky offsets and the `vw >= 1150` switch.

Related: `.proofnav .inner` also pads `0 40px` where v3's header pads `0 48px`.

---

## F-11 — Shadow and gradient inventory exceeds what v3 permits

**Status:** open · **Severity:** low-medium · **Found:** 2026-07-31 (step 3)

`quartz/styles/custom.scss` carries 20 `box-shadow` declarations and 2 gradients; `quartz/styles/proof-design.scss` carries 6 shadows.

v3 uses **no gradients at all** and restricts shadows to four declarations, every one on a floating overlay (mega-menu, drawer, modal): `0 22px 44px -24px rgba(90,28,48,0.26)`, `0 18px 48px -12px rgba(74,21,38,0.34)`, `0 12px 34px rgba(74,21,38,0.34)`, `-10px 0 44px rgba(74,21,38,0.24)`.

The two gradients are at `custom.scss:2152-2153`, a radial-plus-linear burgundy wash.

Deliberately **not** changed in step 3. The step's explicit instruction named one gradient — the `linear-gradient` body background in `middleware.ts`, which was removed and flattened to `#faf7f4`. Stripping 26 further declarations blind is a refactor with visual reach into surfaces this step never rendered, not a value alignment.

---

## F-12 — `.proofnav .ask` is a 999px pill; v3 has no pill in the header

**Status:** open · **Severity:** low · **Found:** 2026-07-31 (step 3)

`quartz/styles/proof-design.scss:97` styles the header's "Ask the Index" control as a filled burgundy pill at `border-radius: 999px`. In v3 (lines 59–63) "Ask the Index" is a plain 12.5px text link in `#736b6e`, and the only filled button in the header is **Index Pro** at `border-radius: 3px`.

Left alone in step 3 because it is a component decision, not a token value, and step 4 owns the header. Noted so the pill is not mistaken for the intended treatment.

---

## F-13 — The Index Pro handoff points at an apex that is not serving

**Status:** blocked · **Severity:** medium · **Found:** 2026-07-31 (step 4)

`quartz/components/TopNav.tsx` renders the Index Pro button at `https://pro.contaminantstandards.com`, which returns **404** (checked 2026-07-31). The parent `contaminantstandards.com` returns **503**.

Built as specified because the button is the visible deliverable of step 4 and the design cannot be judged without it, but it is gated: `INDEX_PRO_URL` at the top of `TopNav.tsx` is a single constant, and setting it to `null` removes the button and its markup in one edit.

**This must not reach production while the apex 404s.** Either the Pro app lands (shipping plan step 10, separate repo) or the constant is nulled before publish. Publishing is manual, so nothing ships by accident.

---

## F-14 — Step 4's two footer changes are blocked on dead destinations

**Status:** blocked · **Severity:** low · **Found:** 2026-07-31 (step 4)

The shipping plan's step 4 asks for two footer edits. Both would replace or add a link to a host that is not serving:

| Asked for | Destination | Status |
| --- | --- | --- |
| Foundation column's `heavymetaltested.com` → `heavymetalcertified.com` | `heavymetalcertified.com` | **503** |
| Add a "Contaminant Standards" entry → `contaminantstandards.com` | `contaminantstandards.com` | **503** |

`heavymetaltested.com` currently returns **200**. Making the swap would take a working link and point it at a dead host, which is the same trade rejected in step 1 for the 312 wiki pages and for the correspondence address.

The footer's third step-4 change — the operator line reading "Operated by the Institute of Contaminant Standards." — already landed in step 1 and is live on the branch. So `Footer.tsx` needs no edit in step 4, and got none.

Unblocks the moment either host serves. Re-check with `curl -o /dev/null -w '%{http_code}'` before doing it; do not assume.

---

## F-15 — The rail's live count is not rendered

**Status:** open · **Severity:** cosmetic · **Found:** 2026-07-31 (hero/v3 work)

v3 (line 409) puts a count beside the rail header — `{{ page.railCount }}`, rendered as e.g. "9 rails" in mono 9px `#c3b9bb`.

The rail's numbering and header were delivered with CSS counters, which cannot count elements into text. The count is the one part that needs real markup in `Snav.tsx`, which has two render paths and an accordion script bound to `.grp`/`.sec`/`.sub`/`data-for`. Left out rather than approximated.

Cheap to add when `Snav.tsx` is next opened: the section arrays are already computed there.

---

## F-16 — shipping-plan.md steps 3–6 cannot produce v3's detail bodies

**Status:** open · **Severity:** high (scope) · **Found:** 2026-07-31

`shipping-plan.md` frames the redesign as *"changes components and tokens only."* That framing produces v3's **frame** — tokens, header, rail, hero — and cannot produce v3's **detail bodies**, which are the larger half of the design.

v3 specifies **13 screens** and **32 distinct body sections**: the Quick read box, occurrence tables with burgundy headers, the exposure gauge against BMDL01, ppb-normalized jurisdiction bars, the regulatory tightening timeline, the claim register, references in citation order, sources tables, and update history.

Those sections live on pages that **do** carry evidence values, provenance and claim identity, and that are **regenerated on every build**. Hand-editing them is exactly what the content-protection rule exists to prevent, and any hand edit would be silently overwritten — demonstrated by the regulator masthead, which was write-once, sat outside every marker block, and could not be corrected by changing the generator alone (see the hero/v3 work and F-04).

So v3's body sections are **generator work, not component work**. Each section needs an emitter and a marker block, in the same shape as `build-regulator-pages.mjs` and the new `hmi-metal-registry` emitter in `build-corpus-counter.mjs`.

That is a separate plan and it has not been written. Steps 3–6 should not be expected to close it, and no session should attempt those bodies by hand.

---

## F-17 — The wiki-edit audit barrier fires on presentation-only pages

**Status:** open · **Severity:** low · **Found:** 2026-07-31

`.husky/pre-commit`'s audit write barrier demands a `data/evidence/wiki_edit_audit.jsonl` row for any staged `wiki/**/*.md` outside `batch-reports/` and `lint/`. It fired on `wiki/index.md`, which carries no evidence values, no provenance and no claim identity — it is the homepage's presentation markup.

Same shape as the defect the barrier's own comment records fixing in July: the glob describes a **path** where the invariant is about **content**. It is the same class as the DOI gate's predicate, the 66 accurate `source_type: nonprofit` records, and the over-broad `wiki/**` restriction that this work corrected.

Bypassed with the documented `WIKI_EDIT_AUDIT_SKIP=1`, which is correct for a human-directed edit, but the barrier will keep charging that toll on every future homepage change. Worth narrowing to pages that actually carry evidence frontmatter.

## F-18

`quartz/components/HeroBand.tsx` emits `<a class="hero-act" href="#cite-this-page">Cite this page</a>`, and no element with that id exists on any page. `document.querySelector("#cite-this-page")` returns null on `/metals/lead.html`; the string appears only inside the anchor's own `href`. The hero's most prominent secondary action is a dead anchor that scrolls nowhere.

Same for v3's "Structured data (JSON-LD)" row, which the artifact drives with its own `toggleLd` runtime (artifact 1466). The page embeds three `application/ld+json` blocks, so the data exists, but nothing reveals it.

Not chased, and deliberately NOT propagated: the new right-rail "Reuse this page" block ships `#references` (verified present) instead of copying the dead `#cite-this-page`, and omits the JSON-LD row entirely rather than adding a second dead anchor. Fixing the hero needs either a citation-format dialog or a real target; neither is in scope here.

## F-19 — RESOLVED

`check:v3` asserted `.hero-snapshot` on every detail screen and reported `NO SUCH ELEMENT` on `/regulations/*` and `/sources/*`. The open question was whether the assertion was over-broad or the pages were missing a panel.

Settled by reading the artifact's per-screen data blocks (~1790-1930), which the extractor now parses: v3 carries a `snapshot:` array on metal, ingredient, regulation, source, finding, synthesis, portal, category and browse — and NOT on product. So the assertion was over-broad in one direction and too narrow in the other: it was asserting the panel on `product`, which v3 gives none, while the regulation and source failures are REAL. Those two screens render `hero-band--nosnapshot` (`HeroBand.tsx:122`) because the pages supply no snapshot rows, and v3 gives both a panel.

Scope is now derived from `SPEC.hasSnapshot` rather than guessed. The two remaining failures are a genuine gap: regulation and source pages need snapshot rows.

Related and also derived: v3's source screen sets `noRefs: true, noSources: true` (artifact 1892). A source record cites nothing and owns no corpus list, so the gate no longer demands a References or Sources section there. `SPEC.tailSuppressed` carries this per screen.

## F-20

Body typography across every detail page was pre-v3, and none of it was being measured. Four separate rules set size/leading DIRECTLY on `article` or `p`, so `.wiki-content`'s inherited values could never win — the source read correctly while the render disagreed, which is exactly the FIDELITY.md failure mode:

- `base.scss` `tbody, li, p { line-height: 1.6rem }` — an ABSOLUTE leading on every paragraph
- `_legacy-all.scss` `article { font-size: var(--text-base); line-height: 1.65; color: var(--darkgray) }`
- `_legacy-all.scss` `body:not([data-slug="index"]) article > p:first-of-type { font-size: 1.1rem; line-height: 1.6 }` — a lead-paragraph treatment v3 has no counterpart for
- `productEvidenceSummary.scss` `body[data-slug^="products/"] article h2 { font-size: 1.45rem; border-top: … }` — out-specified `.wiki-content h2` (0,2,2 vs 0,1,1) and so won on all 410 product pages, rendering headings at 23.2px under a border-TOP where v3 has 30px over a border-BOTTOM

All corrected or deleted in place rather than out-specified, and all four are now covered by `check:v3` style assertions.

## F-21 — The header's scroll-progress bar (CHROME-SPEC §1.1 child 5) is unbuilt, and its fill is unspecified

`CHROME-SPEC.md` §1.1 lists five children of `.hmi-topnav-inner`; the fifth is

```
5 progress    <div style="height: 2px; background: #f2ece7;"> holding the scroll bar
```

Four are built as of commit 1. The fifth is not, and `grep -rn "progress" quartz/components/TopNav.tsx quartz/components/styles/topNav.scss quartz/styles/v3-chrome.scss` returns nothing but unrelated comments — it has never existed in this build.

It is left unbuilt rather than approximated. The spec gives the TRACK's two values and nothing else: not the fill's colour, not its width behaviour, not whether it spans the viewport or the 1760px inner. A 2px `#f2ece7` strip with no fill is indistinguishable from the header's own `border-bottom`, so building the track alone lands nothing; building the fill means choosing a burgundy and a scroll model, which is estimating values §0 says not to estimate. `Heavy Metal Index v3.dc.html` is not present on this machine (`find ~/Desktop -iname "*v3*.dc.html"` → 0 hits), so it cannot be read off the artifact either.

§4 scopes commit 1 to "the search box (§1.1 actions group) and the flex spacer", which is consistent with leaving this out. Unblocked the moment the artifact is on disk: read lines 37-63, take the fill's colour and the scroll expression verbatim, and it is one element plus one listener.

**Status:** blocked (on the artifact)

## F-22 — rice's contamination-profile study count dropped 440 → 80; a hardcoded test still expects 440

`tools/evidence/build-ingredient-scorecard.test.mjs:52` asserts `r.dims.D1.totalN === 440` for rice, with the derivation spelled out at line 51: `Pb61+Cd86+iAs74+tHg45+Ni23+Al11+Cr30+Sn11+tAs95+U4 = 440`. Running the test today gives `actual: 80`. D1.totalN is the sum of `n_studies` across rice's `contamination_profile` frontmatter, so rice's per-analyte study counts now total 80 where they once totalled 440.

Verified NOT caused by the v3 redesign: `git diff origin/main..feat/v3-mega-menu -- wiki/ingredients/rice.md` is entirely the References-block reformat (body); not one line touches the frontmatter the test reads. The test computes the same 80 on origin/main, so it has been red on `main` independently of the redesign. The check is non-required, so it did not block PR #109.

What is NOT yet known, and why this is logged rather than fixed: whether **80 is the correction** (an earlier synthesis over-counted rice — cf. the censored-zero / inflated-cell fixes) or **440 was right and rice lost data**. A 5.5x drop on the flagship ingredient is large enough that "just update the test to 80" would risk ratifying a real regression. The fix is not a one-line test edit; it is: confirm whether rice's current per-analyte `n_studies` are correct, THEN update either the data or the test's hardcoded expectation to match, and say which moved.

**File:** wiki/ingredients/rice.md (frontmatter `contamination_profile`) · tools/evidence/build-ingredient-scorecard.test.mjs:52
**Status:** open (pre-existing; data-integrity question, not chrome)

## OBJECTION 1 · Claim underline (COMPONENTS.md item 3) · ground B

**Job the element does:** show a reader which words are a traceable claim and which are
connective prose — the thing that makes a synthesis page a claim-bearing record rather
than an essay.

**Why the mapping fails:** the data does not exist. `data-claim` appears **0 times** in
the repo and **0 times** across all 3,884 built HTML files. `data/evidence/claims.jsonl`
is 1 byte — an empty file behind a real schema. `id="claim-*"`, `claim_id` and `n_claims`
are likewise absent from every built page. COMPONENTS.md states the cite keys are
"already minted (`<firstauthor><year>-<slug>` per docs/conventions.md)"; `docs/conventions.md`
contains zero occurrences of `data-claim`, and nothing mints them. Writing
`span[data-claim] { border-bottom: 1px dotted #cbb4bc }` would match zero elements on
every page — a no-op that reads in a diff as a landed component. That is the exact
failure shape FIDELITY.md exists to catch.

Also, the only attribute shape ground truth is the mockup itself (v3:461), where the
underline is an **inline style attribute per span**, not a CSS rule. There is no source
CSS block to port; this is a translation, not a copy.

**Do NOT delete on this one:** `quartz/styles/_legacy-all.scss:242-258` gives source-link
superscripts a `1px dotted` underline. It looks like a predecessor and is not — it targets
the citation `<a>`, not the claim `<span>`, and it is live on 1,494 anchors in
`metals/lead` alone. Deleting it strips citation marking site-wide.

**What I propose instead:** hold the CSS rule until claims exist. The prerequisite is two
pieces of non-component work: populate `data/evidence/claims.jsonl` against the existing
`claim.schema.json`, then emit the spans from a generator (F-16). The one-line CSS rule is
correct and cheap — it is simply last in that chain, not first.

**Tier:** 1

## OBJECTION 2 · Caveat callout (COMPONENTS.md item 9) · ground B

**Job the element does:** let a reader find where a page is thin without hunting for it.

**Why the mapping fails, partially:** the named data source does not exist —
neither `uncertainty` nor `gaps` appears in the 375 distinct frontmatter keys across
`wiki/**/*.md`. And "Every detail screen has one" is false in this corpus: coverage is
195/2,221 source pages (8.8%), 10/37 metal pages (27%), 4/25 synthesis, and **zero** of
258 ingredient, 415 product-category and 62 regulation pages.

**What I propose instead, and am proceeding with:** build it heading-driven rather than
frontmatter-driven. `## Limitations` (188 occurrences, source pages only) and
`## Open questions` (14, everything else) cover 202 pages with one rule — which is the
right shape per CONTENT-RULES §6. That part is ground A/C and mine to decide, so I am not
waiting on it.

What comes back to you is the other half: **735 ingredient, product-category and
regulation pages have no limitations section at all.** That is a content gap, not a
styling gap — no component can surface a caveat that was never written. Whether those
page types should carry one is a design/editorial call.

**Tier:** 1

## OBJECTION 3 · Caption (COMPONENTS.md item 10) · ground C

**Job the element does:** carry the thing that would otherwise be a misreading — the
basis, the legal status, or the fact that a number is a population percentile rather than
a safety threshold.

**Why the mapping fails:** position, not data. No caption element, class or rule exists
anywhere in the build — no `<figcaption>`, no `caption` selector in the compiled
stylesheet. More importantly, **generated table notes are emitted BEFORE the table**, as
an ordinary `<p>` separated from `<div class="table-container">` by newlines. COMPONENTS.md
specifies `margin-top 10-16px`, i.e. a caption hanging off the *bottom*. Moving them is a
change to the emitters, not to CSS — F-16 by METHOD.md §3.

Compounding it: 227 ingredient pages carry a contamination-profile note whose wording no
checked-in generator produces. That prose is frozen in `wiki/` and a generator-only fix
would miss it.

**What I propose instead:** style the existing note as a caption *in its current position*
now — 11.5px / 1.55 / `#a9a1a2` — which delivers the whole anti-misreading benefit
immediately and costs one rule. Log the reposition-below-table as F-16 with the 227 frozen
pages named. I am proceeding on that basis; ground C is mine, but the spec says "below"
and I am knowingly shipping "above", so you should know.

**Tier:** 1

## F-23 · Product scaffold prose references "HMTc Taxonomy" on public pages (Part 2 firewall)

**Job / where:** ~302 `wiki/products/*.md` scaffold pages open with headless prose:
"This page is a scaffolded entry for **HMTc Taxonomy v2.0 Category N**, Row M…"
(e.g. `wiki/products/sun-suntan-products.md`). This is certification-program framing
on the public, evidentially-independent wiki — the Part 2 firewall says the wiki
reports literature and does not reference HMTc.

**Why it matters:** surfaced while normalizing intro sections to `## Overview`.
Wrapping this text in an `## Overview` heading would *enshrine* the firewall breach
as the official page intro, so products were deliberately excluded from the Overview
pass. The prose should be rewritten to describe the product category in
literature-native terms (what it is, why metals matter for it), with the taxonomy
mapping moved to staff/HMTc surfaces — NOT given an Overview heading as-is.

**Not chased** (out of scope for the Overview task; not a false statement, so below
the interrupt bar). Fix = a product-scaffold prose generator that writes a
literature-native intro. Tier: 1


---

## Merged from local `main` (2026-08-09 reconcile)

The entries below were logged on local `main` before the 2026-08-09 origin reconcile.
Some duplicate F-05 / F-15 above or are resolved by the merge itself; retained for
provenance and because the JECFA and querySelectorAll findings are unique to this lane.

## 2026-08-05 — the v3 body/section work is stranded on an unmerged branch

`feat/v3-bodies` (worktree `~/hmi-work/hero-v3`) holds 219 commits that are not
on `main` and were never pushed to origin. It is the entire v3 body-section
build: section vocabulary, page snapshots, the synthesis directory, the
ingredient completeness scorecard, the rebuilt Ask screen, the metals screen,
eight rewritten synthesis findings, and `HeroBand.tsx`.

Found while looking for the PDF generator, which was one commit inside it
(`66634bcd2`). That commit has now been ported to `main` on its own; the other
218 have not. `main` is meanwhile 401 commits ahead of the branch on the content
lane, so this is a lane divergence, not a stale feature branch — merging it is a
deliberate reconciliation, not a fast-forward.

Blocks: every other v3 body-section improvement is invisible on the live site.

## 2026-08-05 — the right rail's actions are dead placeholder links

`quartz/components/Rail.tsx` renders four actions — Follow, Cite this page,
Evidence packet, Share. Three point at `#sources` and one at `#`. None of them
do anything. The rail is on every content page, so every content page shows four
buttons that silently fail when clicked.

Download PDF was added to this rail as a real link (this session). The other
four were left as found.

Blocks: readers who want the citation or the evidence packet cannot get either.

## 2026-08-05 — CiteThisPage is not mounted, so its features do not exist

`quartz/components/CiteThisPage.tsx` implements the working versions of what the
rail fakes: the canonical citation line, Copy citation, BibTeX and RIS download,
share links, and the evidence-packet download. `quartz.layout.ts` carries two
comments saying the component "moved OUT of afterBody and INTO the right rail",
but the right rail contains only `Rail()` and `SourceCitationPanel()`. The
component is referenced nowhere and renders on no page.

This is the failure mode where dropping a component from the layout silently
un-ships its markup, inline JS and CSS site-wide, with the comments left behind
describing an arrangement that no longer exists.

Blocks: BibTeX/RIS export, copy-citation, and the evidence-packet download.

## 2026-08-05 — a YAML syntax error in one page hard-failed the whole build

`wiki/regulations/ca-prop65-ab2762-cosmetics.md` carried an unquoted colon in
its `metal:` frontmatter value, which threw an unhandled `YAMLException` out of
`gray-matter` and killed `npm run build` before Quartz emitted anything. The
build exited without a usable error message pointing at the page.

Fixed locally this session by quoting the value, matching the fix already on
`origin/main` (`9882fa9f2`). Logged because the failure mode remains: one
malformed frontmatter value anywhere in 3,962 pages takes down the entire build,
and the crash names the YAML line but not the file.

Blocks: nothing now. Worth a guarded parse that names the offending file.

## 2026-08-07 — lead.md: JECFA lead-PTWI withdrawal miscited to the 72nd meeting (TRS 959); correct source is the 73rd (TRS 960)

Verified against the primary document. `wiki/metals/lead.md` (lines 124, 147, and reference #4 at line 233) attributes the 2010 withdrawal of the JECFA lead PTWI (25 µg/kg bw/week) to the **72nd** JECFA meeting / **WHO TRS 959**, via `[[sources/jecfa-72nd-lead-2010]]`. That source page is grounded in `raw/reports/JECFA_Lead_Monograph.pdf`, which is in fact **TRS 959 — the 72nd report, "Evaluation of Certain Contaminants in Food."** Primary-content check of the PDF: it evaluates **arsenic, mercury, acrylamide, deoxynivalenol, furan — not lead** ("lead" appears 4× incidentally; no lead PTWI / 25 µg/kg withdrawal text). The lead PTWI withdrawal was at the **73rd** JECFA meeting (June 2010, **WHO TRS 960**), the same meeting that set the cadmium PTMI (which `cadmium.md` cites correctly).

Defects:
1. `sources/jecfa-72nd-lead-2010.md` title falsely reads "(Lead, among others)" and its `metals:` includes `Pb`. TRS 959 does not evaluate lead. The page is otherwise a valid A-tier source for **As / Hg**, which TRS 959 does cover.
2. `lead.md` cites this As/Hg source for the lead-PTWI withdrawal — a claim the cited document does not support.

The underlying FACT (lead PTWI of 25 µg/kg bw/week withdrawn in 2010) is correct; only the citation/source is wrong.

Fix (needs care, not done here): ingest the correct 73rd-meeting lead source (WHO TRS 960 / WHO Food Additives Series 64 lead monograph), re-point lead.md's lead-PTWI citation to it, and correct `sources/jecfa-72nd-lead-2010.md` (drop Pb from the title and `metals:`; it remains valid for As/Hg). Deferred because TRS 960 is not in `raw/` and a hasty re-point would create new inconsistencies.

Meta / process lesson: the metal-value audit agent flagged this and proposed the 73rd/TRS 960 correction. A PDF **cover** check nearly dismissed it (cover = TRS 959, 72nd, matching the source metadata); the PDF **content** check vindicated the agent. Verify citations against document content, not just the cover/metadata.

## 2026-08-08 — local build: uncaught `querySelectorAll` on null via the SPA router (not on live; pre-existing)

Observed while verifying the new right-rail Share control (Notion Task 5). On a fresh local
`npm run serve` build, every page logs `Uncaught (in promise) TypeError: Cannot read
properties of null (reading 'querySelectorAll')`, attributed to the tail of
`public/postscript.js` (Quartz's SPA `route-announcer` / router). It fires on the homepage
too, where the new rail-share script is inert (no `[data-hmi-share]` element), so it is
**not** from the Task-5 work.

The deployed live site (`heavymetalindex.com/metals/lead`) shows **no** such error, so this is
a local-`main` regression not yet deployed: some component's `afterDOMLoaded` handler (invoked
through the SPA nav promise) queries a container that is null on some/all pages. Non-fatal (the
page renders), but it will appear in the console on the next index production deploy.

Not chased here (out of scope for the share button). Worth a focused look before the next index
deploy — bisect the `afterDOMLoaded` scripts (Search / AskIndex / BrandPreScreenTool /
ProductPercentileTool / homeSearch are the likely candidates) for an unguarded
`X.querySelectorAll` where `X` can be null.

---

<!-- BEGIN: outstanding-ledger (generated by tools/outstanding/render-findings.mjs — do not hand-edit below) -->

# findings — outstanding-items ledger (generated)

> Out-of-scope defects, gaps, and built-but-unshipped work, logged rather than chased.
> This file is a GENERATED VIEW of `data/evidence/outstanding/ledger.jsonl`. Do not edit it by hand —
> log with `node tools/outstanding/log.mjs` (or the `<!-- OUTSTANDING: {json} -->` sentinel the Stop-hook harvests),
> and rule on human-gated items with `node tools/outstanding/decide.mjs <id> "APPROVE|DECLINE|DEFER: ..."`.

44 open item(s): 14 auto, 30 awaiting a decision.

### OI-20260810-vinegar-pool-recovery — Cat 32 vinegar manual blocked on occurrence-pool thinness: Pb in adjudication register, tAs at n=26; only Vietnam MLs loaded

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/standards-outlier-adjudication.csv`, `data/workbench/standards/vinegar.md`
- repro: standards-qc-gate-report.csv: vinegar Pb=HOLD (C6 adjudication-register + C1b, n=253), tAs=HOLD (C11a n=26 beyond-sample + C1b), Cd=WARN no-cap. Priority metals are Pb/tAs/Cd. The only loaded government MLs for vinegar are Vietnam (Pb 500, tAs 200, Cd 1000, tHg 50).
- done when: vinegar Pb adjudication-register hold resolved (documented why the Pb pool was suspect); vinegar tAs occurrence pool grown past the beyond-sample n floor OR the row published provisional with an honest label; cap decision made for the Vietnam MLs (counsel: bind or exclude as non-target-market)
- decision: _pending_
- notes: Weakest of the Cat 31/32/33 trio; needs evidence recovery, not just cap-mapping. Later tranche.

### OI-20260810-transformer-parity-blocking-flip — Flip transformer-parity lint from --warn-only to build-blocking per-property once each baseline is clean

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `package.json`
- repro: transformer-parity is wired --warn-only in index/cert/cs prebuild. When a property has 0 findings beyond an empty baseline, drop --warn-only from THAT property prebuild (drop the flag, not the check).
- done when: cert: after FAQ + autolink fixes land, cert baseline empty and --warn-only removed from cert prebuild; index: --warn-only removed once the 4 orphan cards are resolved
- decision: _pending_
- notes: Same drain-then-block ratchet as audit-contamination-profile-integrity. Documented in docs/lint.md.

### OI-20260810-seafood-sn-organotin — Seafood Sn not-material is the diaper-Sn error class — organotin bioaccumulates in molluscs/cephalopods (ho2016)

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `tools/standards/seafood-config.json`
- repro: seafood-config asserts Sn not_material for shellfish, cephalopods, fish-freshwater, fish-marine-non-predatory, fish-marine-predatory, seaweed-kelp-foods, plus MeHg not_material for seaweed. These 7 bypass the gated standards-not-material.csv (corpus reconciler COVERAGE_GAP). Inorganic-Sn has no seafood source (correct), BUT ho2016 (already in corpus) measured ORGANOTIN (TPT/TBT) in marine gastropod tissue at 24-1039 ug Sn/kg ww — organotin bioaccumulates in bivalves/cephalopods from antifouling paint, the SAME error class as diaper Sn (smajgl2015). Bare Sn not_material conflates inorganic tin (no source) with organotin (a real marine pathway). seaweed MeHg also needs speciation verification (parent tHg + whether algae carry MeHg vs inorganic Hg).
- done when: seafood Sn: inorganic-Sn not-material PAIRED with an organotin screen (REACH-style / EFSA organotin TDI) on molluscs/cephalopods, per the diaper-Sn precedent (cat9-config); seaweed MeHg substantiated (speciation-bounded parent, or no-bioaccumulation basis) with routed-source acknowledgement; all 7 mirrored into the gated standards-not-material.csv with basis_class so the corpus reconciler reaches zero and flips blocking
- decision: _pending_

### OI-20260810-olive-oil-tas-repool — Re-pool olive-oil tAs (exclude luka2019, map Codex As-oil cap) to a firm ~12-20 ug/kg standard

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/evidence/hmtc_aggregate_distributions.csv`
- repro: olive-oil tAs was reclassified from a false not-material (Codex CXS 210/19 set As 100 ug/kg for oils) to adjudication HOLD. The pool still shows p97 607.95 (luka2019 unit artifact). luka2019 is in extraction_excluded.csv and Codex As-oil ML is loaded; a pooling re-run (npm run evidence:standards-gaps) applies both.
- done when: olive-oil tAs re-pools to ~12-20 ug/kg after luka2019 exclusion; Codex 100 ug/kg maps as the cap (min(P97,100) binds; tag literature-baseline); QC gate shows olive-oil tAs PASS not HOLD/WARN

### OI-20260810-notmaterial-reconcile-to-origin — Reconcile local not-material hardening (b5094ce39) to origin — local main diverged 9 ahead / 8 behind

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`
- repro: The not-material hardening committed locally as b5094ce39 sits on a local main that has diverged from origin/main (merge-base 31952756b; local 9 ahead incl the Cat-9 chain a31b0f2f5..5fcb75d18, origin 8 ahead incl the Cat-3 grains standard + fe1995d98 Cat-3-aluminium-wrongly-not-material fix). ff push is impossible. standards-not-material.csv was restructured to a NEW schema locally (basis_class/bounded_by/cross_sourced) while origin modified the OLD-schema file, so an auto-merge will conflict at the schema level — needs the union-merge reconcile recipe (project_repo_sync_drift: snapshot-branch + fresh worktree off origin/main + union-merge logs), not history surgery. NOTE: three independent sessions (this one: oils/Al/contact; Cat-9: diapers; Cat-3: grains Al) all found wrongly-not-material cells — the systemic substantiation gate (audit-not-material-substantiation.mjs, now blocking) is the durable fix and should survive the reconcile.
- done when: b5094ce39 not-material hardening reaches origin/main without losing the Cat-3 (origin) or Cat-9 (local) work; standards-not-material.csv union-merged: Cat-3 grain rows + this session new-schema rows both present; audit-not-material-substantiation.mjs blocking in prebuild survives; no history surgery / no reset --hard
- decision: _pending_

### OI-20260810-not-material-integrity-backlog — 51 not-material cells contradicted by routed evidence — program-wide re-adjudication (drain in progress)

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`, `data/evidence/standards-not-material-adjudication.csv`, `tools/evidence/audit-not-material-integrity.mjs`
- repro: audit-not-material-integrity.mjs (prebuild --warn-only; also a hard publication gate in the cert generators) finds 51 (row,analyte) not-material determinations contradicted by a routed source that measured the analyte: olive-oil 21, infant-formula-powder-non-soy 9 (Cr-VI), spices 7, cooking-oils-other 7, honey 5, chocolate 2. Cat-9 diaper Sn+Ni already re-adjudicated to real limits. Being drained now via evidence-read adjudication into standards-not-material-adjudication.csv: KEEP_CITE (determination holds, source cited as evidence-tested), RETIRE (material -> real limit), or NEEDS_JUDGMENT (surfaced).
- done when: each of the 51 adjudicated in standards-not-material-adjudication.csv with a verdict and the source finding; RETIRE verdicts retired to a real limit/screen; KEEP_CITE recorded; NEEDS_JUDGMENT surfaced to Karen; audit-not-material-integrity.mjs prebuild step flipped to build-blocking once the queue is empty
- decision: _pending_

### OI-20260810-index-orphan-product-cards — Index wiki/products/index.md links 4 product cards with no backing page (infant-nursery-water, infant-carriers, lip-products, food-prep-coffee-maker-pathways)

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/products/index.md`
- repro: node tools/audit-transformer-parity.mjs → 4 INDEX_CARD_ORPHAN (advisory).
- done when: each of the 4 targets either has a backing wiki/products/<slug>.md page or the card is removed/repointed; node tools/audit-transformer-parity.mjs reports 0 INDEX_CARD_ORPHAN, then --update-baseline
- decision: _pending_
- notes: Advisory; seeded into the transformer-parity baseline as the accepted draining backlog.

### OI-20260810-honey-manual-build — Build the Cat 31 (honey) Program Manual — now unblocked and QC-clean

- scope: **auto** · type: content · status: open · repo: index
- paths: `tools/standards/build-category-manual.mjs`, `data/workbench/standards-book/category-substitutions/31.json`
- repro: category-standards-readiness: Cat 31 honey MANUAL-READY (Pb 100 regulatory-alignment, Cd/tAs cap-verified, Al not-material, Ni provisional-labeled). No outlier holds. Missing only the manual wrapper: a CATEGORIES[31] config + a decontaminated category-substitutions/31.json (~71 pairs, template = 34.json salt).
- done when: CATEGORIES[31] config added to build-category-manual.mjs (title Sweeteners and Syrups / Honey; chapter honey; as_sold basis; general-population exposure note); category-substitutions/31.json authored + build-category-manual.mjs --category=31 passes the wrapper leak-guard (no infant/fish leakage); render-manual-typst.mjs --pdf produces the PDF (needs the licensed FreightText Pro + Avenir Next fonts at ~/Desktop/reportify/fonts/, ABSENT in the 2026-08-10 worktree env)
- notes: honey is the cleanest newly-unblocked category. PDF render blocked in the current env by absent licensed fonts; run in the fonts-equipped canonical env. chocolate (Cat 33) is NOT in this item — it is governance-blocked (OI-20260810-chocolate-dark-milk-split).

### OI-20260810-honey-al-pool-method-restrict — Restrict honey Al pool to reference methods (exclude ICP-OES/XRF) — pool p97 152 mg/kg is method-inflated

- scope: **auto** · type: audit · status: open · repo: index
- paths: `data/evidence/hmtc_aggregate_distributions.csv`
- repro: honey Al not-material stands (no ML, TWI-managed) but the pool p97 ~152 mg/kg is a method-inflation artifact: naccari2025 (ICP-MS, n=38) measures 4.5-6.0 mg/kg while the pool is dominated by tomczyk2020 (ICP-OES) and wise2025 (XRF, known inconsistencies). Same reference-method-stratification precedent as spices tHg (2026-06-11 audit).
- done when: honey Al pool restricted to reference-method sources (ICP-MS/CV-AAS/GF-AAS); honey Al p50/p97 fall toward the ~5 mg/kg ICP-MS anchor; not-material rationale value updated if needed

### OI-20260810-cs-native-parity-check — contaminantstandards (Next.js) needs a native content→capability parity check — the Quartz transformer-parity lint N/As there

- scope: **human-gated** · type: code-fix · status: open · repo: tested
- paths: `~/Desktop/contaminantstandards/tools/`
- repro: contaminantstandards is a Next.js app with a DB-backed corpus; audit-transformer-parity.mjs auto-skips it. Its analogous failure class (a React component referenced/mounted without the data/import it needs, or a registry card with no backing route) is not covered.
- done when: a cs-native parity check (component/import resolution over app/ + components/) exists and is wired into cs prebuild --warn-only
- decision: _pending_
- notes: Future work. crosslink-lint.mjs + firewall-parent-lint.mjs cover other cs concerns.

### OI-20260810-chocolate-dark-milk-split — GOVERNANCE (Karen): split chocolate into dark/milk subcategories before publishing a chocolate lead standard

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/evidence/standards-outlier-adjudication.csv`, `data/workbench/standards/hmtc_standards_catalog.json`
- repro: standards-outlier-adjudication.csv chocolate Pb (bimodal dark/milk): NOT SHIPPABLE as a single blended row; lead is the litigation-critical chocolate metal; the blended P97 is structurally unstable (log-normal 1296 / gamma 2440 / nonparametric 470). The sovereign cap is itself cocoa-% tier-split (PY low-cocoa 200 / high-cocoa 400), which IS the dark/milk split. Cat 33 catalog already anticipates 3 subcategories.
- done when: Karen decides the chocolate subcategory split (dark >=40% cocoa / milk <40% cocoa, or the catalog 3-way); Each subcategory row binds its own cap tier (milk/low-cocoa 200, dark/high-cocoa 400) and pools its own occurrence; Cap-immaterial outlier holds (chocolate Pb tail-scan, Ni thin-source) cleared once the split lands; chocolate becomes manual-ready per subcategory
- decision: _pending_
- notes: Cap-mapping (this session) made the numbers defensible (Pb 200 / tAs 200 / Ni 2500 regulatory-alignment) but does NOT resolve the taxonomy question. Do NOT ship a single blended chocolate lead standard. Blocks the Cat 33 manual.

### OI-20260810-cert-ratchet-page-promote — Promote /program/ratchet standards-ratchet methodology page to heavymetalcertified.com production

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `content/program/ratchet.md`, `quartz/components/Footer.tsx`
- repro: Branch feat/program-ratchet-page (commit 308608a) pushed to origin/heavymetalcertified as a preview. Adds public /program/ratchet page + Methodology footer link. Cert push-to-main = LIVE prod, so promote is gated. Main cert working tree is currently DIRTY with feat/big-8-pillar work — do NOT check out main in that tree.
- done when: On Karen go, fast-forward feat/program-ratchet-page into main via a CLEAN isolated worktree off origin/main (leaves the dirty feat/big-8-pillar tree untouched), then push main to trigger the prod deploy; Live https://heavymetaltested.com/program/ratchet renders (snapshot rail, 3 sections, no unstyled fallback); Footer Methodology column shows The standards ratchet linking to /program/ratchet with no 404; Cert prebuild lint (design-lint + method-drift + firewall) passes on the deploy
- decision: _pending_

### OI-20260810-cert-h2-rule-triplication — Three competing h2 definitions in cert SCSS resolve by specificity luck, not intent

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `quartz/styles/custom.scss`, `quartz/styles/proof-design.scss`, `quartz/styles/cert-chrome.scss`
- repro: custom.scss @use's proof-design.scss (.wiki-content h2 = 24px dotted, margin 42px/14px) and cert-chrome.scss (.proof:not(.proof-home) .wiki-content h2 = canon 30px solid, pb10/mb20), and itself defines bare `article h2` (24px, no rule, 2rem/0.75rem). Interior article pages render the canon only because .proof:not(.proof-home) .wiki-content h2 out-specifies the others (0,3,1). If the .wiki-content/.proof wrapper is ever dropped, section headings silently change size, border, and spacing site-wide.
- done when: Section-heading h2 has exactly one authoritative rule matching the approved v3 proof (30px Lora, 1px solid #e8e1db, pb10, mb20); Dead/overridden h2 rules in proof-design.scss and custom.scss article h2 are removed or explicitly scoped so they cannot win on any surface; Home (.proof-home) and non-.wiki-content surfaces verified unchanged after consolidation
- decision: _pending_

### OI-20260810-cert-faq-transformer-missing — CERT LIVE: 23 of 25 content/articles render their FAQ question-headings FLAT — CollapsibleQuestions transformer not wired

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `quartz.config.ts`, `quartz/plugins/transformers/collapsibleQuestions.ts`, `quartz/styles/proof-design.scss`
- repro: cd ~/Desktop/heavymetalcertified worktree off origin/main; node tools/audit-transformer-parity.mjs --json | grep FAQ_TRANSFORMER_MISSING → 23 findings. cert origin/main has 23 articles with question-style h3s (text ending in ?) but quartz.config.ts does NOT wire Plugin.CollapsibleQuestions(); the .qa CSS IS present (ported without the transformer). So the FAQ accordions render as plain headings on live production.
- done when: Plugin.CollapsibleQuestions() wired in cert quartz.config.ts after TableOfContents; quartz/plugins/transformers/collapsibleQuestions.ts present in cert; node tools/audit-transformer-parity.mjs reports 0 FAQ_TRANSFORMER_MISSING on cert
- decision: _pending_
- notes: Confirmed instance task_7121fe3a, now verified LIVE on cert production (not just in-flight). elated-goldwasser worktree is adding MORE FAQ articles on top. Fix touches cert rendering + coordinates with feat/big-8-pillar + elated-goldwasser in-flight sessions — logged not bundled per Part 28.

### OI-20260810-cert-autolink-metals-misport — CERT LIVE: autolink.ts ships the Index /metals/* map (19 slugs) — cert has /analytes/, so ~18 in-prose metal mentions link to NOTHING

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `quartz/plugins/transformers/autolink.ts`
- repro: git show origin/main:quartz/plugins/transformers/autolink.ts | grep -c metals/  → 19 metals/ targets, 0 analytes/. cert has no /metals/ tree. node tools/audit-transformer-parity.mjs → 18 AUTOLINK_TARGET_MISSING.
- done when: autolink.ts TERMS map targets /analytes/* (the 8 HMTc analytes + speciation collapse), regs, standards, briefings — NOT /metals/; non-analyte metals (molybdenum, manganese, tellurium, palladium, beryllium, vanadium, antimony, thallium, uranium, barium, cesium) dropped from cert map (no cert page); node tools/audit-transformer-parity.mjs reports 0 AUTOLINK_TARGET_MISSING on cert
- decision: _pending_
- notes: Confirmed instance #1 (the cert AutoLink mis-port), verified LIVE on origin/main. The corrected analytes/ version already exists UNCOMMITTED on the feat/big-8-pillar working tree; land it. Do not history-surgery; coordinate with that session.

### OI-20260810-cat9-regulatory-refinements — Cat-9 contact-products: three deferred regulatory refinements

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/regulatory_limits.csv`, `tools/standards/cat9-config.json`, `docs/governance/category-9-step0-lock.md`
- repro: Adversarial audit 2026-08-10 (post-fix, non-blocking): (1) verify Japan MHLW nursing-nipple Pb/Cd material spec (reported ~10 mg/kg content — if confirmed, a stricter total-content companion on infant-bottle-nipples than WA CSPA 90ppm); (2) transcribe Reg (EU) 2025/2509 successor Toy Safety Regulation Annex element-migration values (roughly halved; applicable 2030) and decide adopt-now vs cite-as-pending for teething-toys/pacifiers rows; (3) verify EN 1400:2013+A2 own chemical annex element limits vs EN 71-3 Cat III.
- done when: Japan nursing-nipple material spec verified and, if stricter, loaded as a companion on infant-bottle-nipples; Reg (EU) 2025/2509 Annex values transcribed to the register with a pending/adopt decision recorded; EN 1400+A2 element annex confirmed equal to (or the source of a divergence from) EN 71-3 Cat III
- decision: _pending_

### OI-20260810-cat9-live-promote-and-manual — Promote Cat-9 branches to LIVE + build Cat-9 Program Manual

- scope: **human-gated** · type: promote · status: open · repo: index
- paths: `docs/governance/category-9-step0-lock.md`
- repro: Cat-9 Infant & Child Contact Products standard built/verified/audited 2026-08-10 and pushed to branches, NOT yet LIVE: (a) index branch claude/cat9-contact-products-standard (off pre-divergence main; needs merge->main + gh workflow run manual-production-deploy --ref main); (b) cert branch feat/cat9-contact-standards (off cert origin/main; deploying preview; promote to cert main = LIVE); (c) Cat-9 Program Manual not built this session (build-category-manual.mjs reuses infant-formula food parts per project_category_manual_wrapper_decontam — needs contact-product decontam before reuse); (d) cert /standards catalog rows not added for the 8 custom_page:true pages (same gap as seafood cephalopods).
- done when: index branch merged to origin/main and prod deploy triggered; cert branch promoted to cert main (LIVE); Cat-9 Program Manual built with contact-product parts (not infant-formula wrapper); cert catalog rows added so the 8 pages appear in /standards index
- decision: _pending_

### OI-20260810-cat9-diaper-ni-sn-screens — RESOLVED: diaper Ni+Sn reclassified to screens (cat9-config, HEAD 5fcb75d18) + not-material.csv Sn row removed

- scope: **auto** · type: content · status: open · repo: index
- paths: `tools/standards/cat9-config.json`
- repro: SUPERSEDED — a parallel Cat-9 session (HEAD 5fcb75d18) independently reclassified diaper Ni (nickel-release 0.5 ug/cm2/wk EN 1811) and Sn (organotin REACH entry 20, citing smajgl2015) in cat9-config.json. HEAD was left internally inconsistent (its swept-in not-material.csv still listed diaper Sn); this session removes the stale diaper Sn not-material row, completing the reconciliation. No further action.
- done when: diaper Sn removed from standards-not-material.csv (done); cat9-config diaper Ni/Sn already screens (done in HEAD)

### OI-20260810-cat3-cert-catalog-coverage — Add Cat-3 subcats to cert /standards catalog snapshot (10 of 12 not listed in the index)

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `data/standards/hmtc_standards_catalog.json`
- repro: heavymetalcertified: the 12 Cat-3 standard pages are live and reachable via nav + the Grains manual, but only breakfast-cereal-non-rice and breakfast-cereal-rice-based have rows in data/standards/hmtc_standards_catalog.json, so the other 10 do not appear in the /standards catalog index (same known gap as seafood cephalopods/canned-seafood). custom_page:true pages supersede catalog rows but do not create them.
- done when: Regenerate the cert hmtc_standards_catalog.json snapshot from the index repo build-standards-catalog.mjs so all 12 Cat-3 subcats have catalog rows; All 12 Cat-3 subcats appear in the /standards index; build-standards-pages.mjs supersedes the 12 with the custom pages
- decision: _pending_

### OI-20260810-cat1-cat6-notmaterial-registry — PARTIAL: 10 Cr-VI baby-food cells now gated; 7 seafood cells → OI-seafood-sn-organotin

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`
- repro: Of the 17 config-only not-material cells the corpus reconciler (audit-not-material-corpus.mjs) found bypassing the gate: the 10 cat1-config Cr-VI baby-food cells are now mirrored into the gated standards-not-material.csv as method-artifact (hernandez2019+saraiva2021 reference-method non-detection) and pass the substantiation audit. The 7 seafood-config cells (Sn x6 + seaweed MeHg) are NOT rubber-stamped — ho2016 shows organotin bioaccumulation in molluscs, the diaper-Sn error class; tracked by OI-20260810-seafood-sn-organotin. Corpus reconciler is warn-only in prebuild until those 7 resolve, then flips blocking.
- done when: 10 Cr-VI cells gated (DONE); 7 seafood cells resolved per OI-20260810-seafood-sn-organotin; audit-not-material-corpus.mjs reaches 0 gaps and flips to blocking
- decision: _pending_

### OI-20260810-cap-proposal-tool-occurrence-blindspot — build-cap-mapping-proposals.mjs is blind to occurrence-bearing toxic cells with no mapped cap (the honey-Pb too-loose class)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/evidence/build-cap-mapping-proposals.mjs`
- repro: The tool only scans classifier rows with class=BLOCKED AND next_action=FETCH_INGEST (no occurrence data). Cells that HAVE occurrence data and produce a literature-baseline standard looser than an existing-but-unmapped government ML are never surfaced. honey Pb (P97 1410 ppb vs IL/EU honey Pb 100) is a confirmed live instance.
- done when: Tool also scans cells that are literature-baseline + big-4 toxic + no mapped cap in standards-qc-gate-report.csv (C1b) and proposes the strictest applicable loaded government ML; Running it surfaces chocolate Pb/tAs and honey Pb/Cd/tAs with their candidate government MLs graded by confidence
- notes: This class is higher-severity than the no-data class the tool handles today: it publishes a too-loose firm number rather than leaving a gap.

### OI-20260810-al-not-material-corpus-reconcile — Reconcile Al not-material registrations (salt/spices/chocolate/honey) with the Cat-3 material finding

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`, `data/evidence/standards-no-ml-confirmed.csv`
- repro: The Cat-3 aluminium remediation (2026-08-10) counts the aluminosilicate anticaking pathway (INS 554) as MATERIAL for breakfast cereals and sets real Al ceilings on all 12 grain subcats. But standards-not-material.csv still registers aluminium as not-material for salt, spices, chocolate, and honey on the same additive/natural-Al reasoning — the salt entry rests explicitly on the E554/E555/E559 anticaking family. This is internally inconsistent: the same certification-defensibility attack (a 10-analyte we-test mark with an empty Al ceiling) applies to those categories.
- done when: Re-examine the Al not-material call for salt, spices, chocolate, honey under the same Method v2.0 logic used for Cat-3; Either set a real Al ceiling (government-limit/occurrence) or document why Al is genuinely not-material for each; Registrations across categories are consistent
- decision: _pending_

### OI-20260809-subthreshold-censored-zero-cells — Sweep sub-threshold [0,0] contamination_profile cells (n<3) that escape the integrity audit gate

- scope: **auto** · type: audit · status: open · repo: index
- paths: `wiki/ingredients/butter.md`, `wiki/ingredients/whole-milk.md`, `wiki/ingredients/cheddar-cheese.md`
- repro: The censored-zero audit (tools/audit-contamination-profile-integrity.mjs) only fails typical [0,0]/p95 0 cells at confidence high OR n_studies>=3. Cells like butter Ni/Cr (n=2), whole-milk U (n=2), cheddar-cheese U (n=2) display literal 0 from the same below-LOQ-coded-as-zero artifact but escape the gate; they will become build-blocking failures if n_studies ever increments. Observed while draining the 86-cell backlog 2026-08-09.
- done when: Enumerate all populated cells with typical_ppb [0,0] and p95_ppb 0 and n_studies<3 across wiki/ingredients/; Resynthesize each with the reporting limit as the left-censored upper bound (same method as the 86-cell drain); audit remains at 0 build-blocking failures and no literal-0 typical remains on a populated cell

### OI-20260809-regs-v3-vs-fatten-reconcile — Reconcile regulations v3 design (feat/regulations-v3) with the fatten-regulations branch

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `tools/build-cert-regulation-pages.mjs`, `content/regulations/`
- repro: feat/regulations-v3 (commit 4704c8e, worktree ~/Desktop/heavymetalcertified-regs-v3) rewrites tools/build-cert-regulation-pages.mjs to emit the v3 design (red hero band via HeroBand, grouped-by-analyte limits table, real 'Where HMTc cites it' citation map) for the current 11 instruments in data/regulations/infant-instruments.json. The unmerged preview/fatten-regulations branch (tip 6ff4ff3, OI-20260808-fatten-regulations-promote) rewrites the SAME generator differently: richer input (data/regulations/cert-regulation-snapshot.json, ~38 instruments/1,979 rows) and 6 sections (what/at-a-glance/limits/basis/hmtc/sources). Whichever promotes second will conflict on build-cert-regulation-pages.mjs and on content/regulations/*.md. They are complementary (v3 = design/layout; fatten = data breadth), not duplicative.
- done when: A single reconciled generator applies the v3 design (HeroBand frontmatter + grouped limits table + citation map) to the fattened instrument set/sections; content/regulations builds clean under prebuild (firewall-cert-lint + method-drift-lint) after the merge; No regression: the 11 v3 instrument pages + index still render to the comp
- decision: _pending_

### OI-20260809-regs-v3-promote — Promote feat/regulations-v3 (v3 /regulations doc-class) to live; reconcile with preview/fatten-regulations

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `content/regulations/index.md`, `quartz/components/HeroBand.tsx`, `tools/build-cert-regulation-pages.mjs`, `design/v3-acceptance.cert.json`
- repro: feat/regulations-v3 (4704c8e) implements the v3 comp /regulations treatment: Record-of-law badge (regulation-index) + Regulation-reference (regulation) in HeroBand KIND, snapshot card (Instruments tracked 10/Binding 10/Limits 105/Primary-verified), hero_meta UPDATED+ALL PRIMARY-VERIFIED, 4-section On-this-page TOC (what/instruments/coverage/interaction), instruments grid + per-instrument bar chart. Base = origin/main+1 (current). NOT on main/live. Conflicts with preview/fatten-regulations (worldwide register, 38 instruments, stale base) on 12 shared files incl. tools/build-cert-regulation-pages.mjs. regs-v3 did NOT add /regulations assertions to design/v3-acceptance.cert.json.
- done when: v3 /regulations live on heavymetalcertified.com matching the comp; check:v3 gains /regulations assertions and passes; fatten worldwide-register reconciled onto the v3 design or explicitly deferred
- decision: _pending_

### OI-20260809-pkgjson-dup-react-pdf — Remove duplicate @react-pdf/renderer key in root package.json

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `package.json`
- repro: esbuild prints [WARNING] Duplicate key "@react-pdf/renderer" in object literal — root package.json dependencies lists @react-pdf/renderer twice (lines 131 and 193, both ^4.5.1). Surfaced while bundling the design-sync DS package via esbuild.
- done when: package.json has exactly one @react-pdf/renderer entry in dependencies; esbuild/npm no longer warn duplicate-object-key for package.json

### OI-20260809-organoarsenical-synthesis-downstream-propagation — Propagate organoarsenical-inertness synthesis to its remaining downstream ingredient pages

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/ingredients/freshwater-fish.md`, `wiki/ingredients/shellfish.md`, `wiki/ingredients/seaweed.md`
- repro: The synthesis wiki/synthesis/organoarsenical-inertness-assumption.md lists downstream targets in its Implications for downstream wiki pages section (its lines 75-85). This session propagated the finding to wiki/metals/arsenic.md (new speciation section + app-layer + FAQ reconcile). The three named ingredient pages exist but still carry no reference to the synthesis, so their arsenic coverage sub-blocks are not yet updated. testing/arsenic-speciation does not exist yet (synthesis flags it as when-written).
- done when: wiki/ingredients/freshwater-fish.md arsenic sub-block notes that percent-DMA biomonitoring can underestimate iAs exposure (Davydiuk 2023) and that total-As includes organic fractions of uncharacterized toxicological weight, citing [[synthesis/organoarsenical-inertness-assumption]]; wiki/ingredients/shellfish.md and wiki/ingredients/seaweed.md note that the organic-arsenic classification does not settle post-digestion bioaccessibility (Liu 2023); seaweed additionally notes Laminaria digitata iAs above 50 percent of total As (Sim 2024); no unqualified organic-equals-harmless language remains on the three pages and every new wikilink resolves
- decision: _pending_
- notes: metals/arsenic.md completed 2026-08-09 in the same session that logged this. Keep the synthesis careful framing: do not assert arsenobetaine toxicity.

### OI-20260809-enable-decision-digest — Enable the out-of-session decision-digest launchd job (one command)

- scope: **human-gated** · type: decision · status: open · repo: index
- repro: SessionStart surfacing is live; the out-of-session push (weekday-morning notification) is built and ready but not installed, because a launchd job is machine-level persistent config that should be your explicit choice given the deliberately-empty autonomy surface.
- done when: launchd job com.paleo.hmi.decision-digest loaded
- decision: _pending_ — enact: `cp tools/outstanding/com.paleo.hmi.decision-digest.plist ~/Library/LaunchAgents/ && launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.paleo.hmi.decision-digest.plist`

### OI-20260809-doi-remediation-machine-indexes-stale — Discovery/library machine indexes still carry pre-remediation (dead) DOIs for the 55 remediated source pages

- scope: **auto** · type: finding · status: open · repo: index
- paths: `data/evidence/discovery/corpus-index.json`, `data/evidence/library/index-snapshot.jsonl`, `data/evidence/autonomy/corpus-inventory-coverage-2026-06-11.csv`, `outputs/vegetable-oils-heavy-metals-2026-06-01/build-vegetable-oils-heavy-metals-workbook.mjs`
- repro: The 2026-08-09 confabulated-DOI remediation (41 prior + 14 this pass) corrected source-page frontmatter DOIs, but the regenerable discovery/library corpus indexes were left stale (prior-pass precedent: new abdel-tawwab DOI absent from corpus-index.json, old one still present). These indexes drive corpus dedup; a stale dead DOI can let a corrected-DOI re-encounter slip past dedup. Not a live-page defect (not published). The outputs/ workbook build script embeds a dead vega-jara DOI (historical one-off, harmless).
- done when: corpus-index.json + index-snapshot.jsonl regenerated so DOIs match current source-page frontmatter for all remediated pages

### OI-20260809-crosswalk-dangling-refs-unresolved-keys — product_regulatory_crosswalk.csv: 4 dangling page refs + 12 unresolved cap keys silently dropped

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `data/evidence/product_regulatory_crosswalk.csv`, `data/evidence/regulatory_limits.csv`
- repro: Pre-existing, not introduced by the cephalopod fix. Dangling regulations/ page refs on lines 25 (fda2020-inorganic-arsenic-infant-rice-cereal), 51 and 56 (fda2004-juice-haccp-lead), 65 (fda-21cfr165110-bottled-water-lead). Unresolved regulatory_limit_id on lines 76,87,89,90,91,92,94,97,99,100,101,102 (e.g. eu2023_cd_salt_500, eu2023_hg_fish_muscle_500, eu2023_cd_fish_muscle_50, eu2023_hg_predatory_fish_1000, eu2023_cd_bivalve_1000, eu2023_hg_crustaceans_molluscs_500) absent from regulatory_limits.csv. build-lab-comparator-context.mjs line 286 silently skips unresolved keys so those caps never surface.
- done when: Every crosswalk regulations/ page ref resolves to an existing wiki/regulations/ page; Every crosswalk regulatory_limit_id resolves in regulatory_limits.csv or is none_loaded
- decision: _pending_
- notes: Some fixes are deterministic key repoints to existing register rows; others need new regulation pages or register rows (judgment) so human-gated.

### OI-20260809-consolidate-big8-briefings — Consolidate duplicate Big-8 briefings + reconcile title overlap with new /big-8 pillar

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/briefings/the-big-8.md`, `content/briefings/brief-7-four-vs-eight.md`, `content/big-8.md`
- repro: Brief 1 (brief-7-four-vs-eight) and Brief 3 (the-big-8) argue the same thesis with contradictory series numbers; new /big-8 pillar also titled The Big 8 (shares tab title with the briefing).
- done when: one canonical Big-8 briefing; loser redirected; series numbering reconciled; pillar vs briefing title/role disambiguated
- decision: _pending_

### OI-20260809-cephalopod-thg-standard-eu300 — Cephalopod tHg standard may miss EU 2023/915 300 ug/kg (strictest government ML)

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled/cephalopods.json`, `data/evidence/regulatory_limits.csv`
- repro: cat1-compiled/cephalopods.json builds the cephalopod mercury standard from India FSSAI, Paraguay, Mercosur and Guyana caps at 500 ug/kg plus a MeHg read-across, labeled no government sets a cephalopod-specific ML. But EU 2023/915 Annex I 3.3.1.3 places cephalopods and marine gastropods in the lower-mercury 0.30 mg/kg tier (300 ug/kg, animal without viscera), confirmed against primary text. Under Method v2.0 (strictest credible government ML) EU 300 should bind or be explicitly excluded with rationale. The Cat-6 cephalopod standard is live on heavymetalcertified, so a published cert tHg value may be too loose.
- done when: Cephalopod tHg standard evaluates EU 2023/915 3.3.1.3 (300 ug/kg) as a candidate binding value; Final cephalopod tHg standard is <= strictest credible government ML or documents why EU 300 is excluded
- decision: _pending_
- notes: Found during EU 2025/1891 cephalopod crosswalk ingest. Cert content plus Method v2.0 decision = human-gated.

### OI-20260808-weekly-briefing-ungoverned-opus — Route weekly-briefing.mjs Cochrane spawn through the governor

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/autonomy/weekly-briefing.mjs`
- repro: weekly-briefing.mjs:424 calls `claude --print --model opus` ungoverned (~1/week). Pre-existing.
- done when: the spawn routes through governor.requestSpawn({workType:'defensibility-audit'})
- notes: Fix in the same change that adds the decision-queue section to weekly-briefing (full build).

### OI-20260808-v3-bodies-promote — Reconcile the stranded feat/v3-bodies lane (219 built commits invisible on the live site)

- scope: **human-gated** · type: promote · status: open · repo: index
- repro: feat/v3-bodies (worktree ~/hmi-work/hero-v3) holds 219 unpushed commits; main is 401 ahead on the content lane — a deliberate reconciliation, not a fast-forward. The v3 body build is invisible live.
- done when: the v3 bodies work is merged to main or explicitly retired, decision recorded
- decision: _pending_
- notes: Lane divergence — deliberate reconciliation per OPERATING.md Part 4; not a one-liner.

### OI-20260808-index-main-behind-199 — Reconcile local index main behind origin/main by 199 commits

- scope: **human-gated** · type: promote · status: open · repo: index
- repro: Local index main observed ahead 46 / behind 199 vs origin/main. A reconcile, not a fast-forward.
- done when: local and origin main reconciled per the repo reconcile recipe
- decision: _pending_
- notes: See project_repo_sync_drift: reconcile via snapshot-branch + fresh worktree; git reset --hard is BLOCKED.

### OI-20260808-improvement-scout-ungoverned-haiku — Route improvement-scout.mjs haiku spawn through the governor

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/autonomy/improvement-scout.mjs`
- repro: improvement-scout.mjs:239 calls `claude --print --model haiku` ungoverned every daemon tick — the rate shape that reproduces the runaway class if the model is bumped or the tick shortened.
- done when: the spawn routes through governor.requestSpawn({workType:'discovery-scoring'})

### OI-20260808-hmtested-synthesis-articles — Build the 16 HMI synthesis findings as long-form articles on heavymetaltested.com

- scope: **human-gated** · type: content · status: open · repo: tested
- repro: The 16 wiki/synthesis/ findings were never ported to heavymetaltested.com; paleo-foundation has no work since 2026-06-12; its article pipeline is seeded only with sample case studies.
- done when: the 16 findings rendered as articles on heavymetaltested.com with a real byline
- decision: _pending_

### OI-20260808-fatten-regulations-promote — Promote fattened cert regulation pages (preview) to production

- scope: **human-gated** · type: promote · status: staged · repo: cert · blocked_on: parallel-session-analyte-work-landed, OI-20260808-cert-check-v3
- paths: `content/regulations/`, `data/regulations/cert-regulation-snapshot.json`, `tools/build-cert-regulation-pages.mjs`
- repro: 38 food instruments / 1,979 rows built + audited on branch preview/fatten-regulations; preview deployed and build succeeded.
- done when: cert main carries the fattened regulation pages; check:v3 passes on the preview
- evidence: branch preview/fatten-regulations @6ff4ff3 · preview https://heavymetalcertified-k9gs738kg-karen-pendergrass-projects.vercel.app
- decision: _pending_ — enact: `cd ~/Desktop/heavymetalcertified && git checkout main && git merge --no-ff preview/fatten-regulations`

### OI-20260808-eu-merge-page-decision — Decide: EU 2023/915 amendments as one merged reference page vs separate pages

- scope: **human-gated** · type: decision · status: open · repo: cert
- repro: The fatten generator merges EU 2023/915 base + Cd/Ni/iAs/tAs amendments into one eu-2023-915 page (109 rows). Alternative: one page per amendment.
- done when: a documented decision recorded; generator matches it
- decision: _pending_

### OI-20260808-daemon-drain-audit-ungoverned — Route daemon-tick drain-audit-queue call through governed-run

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/autonomy/daemon-tick.sh`
- repro: daemon-tick.sh:761 invokes drain-audit-queue.mjs directly, which defaults to Opus when called directly (ungoverned Opus-capable drain if the daemon is installed).
- done when: the daemon invokes the audit drain via governed-run.mjs

### OI-20260808-cert-font-weight-600 — Remove font-weight:600 bold from cert standards pages (canon: no bold on reading surface)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/build-cat1-standard-pages.mjs`, `tools/build-category-standard-pages.mjs`, `content/standards/`
- repro: 32 committed font-weight:600 bold cells in infant-formula standards pages (bolded binding-limit column); design-lint exits 1.
- done when: node tools/design-lint.mjs exits 0

### OI-20260808-cert-design-lint-wire — Wire design-lint into the cert prebuild chain

- scope: **auto** · type: code-fix · status: open · repo: cert · blocked_on: OI-20260808-cert-font-weight-600
- paths: `package.json`
- repro: AGENTS.md §2 claims design-lint is build-blocking in prebuild, but package.json prebuild omits it — canon-violating bold ships.
- done when: package.json prebuild includes node tools/design-lint.mjs; npm run prebuild fails when a reading-surface bold is present
- notes: Blocked until the standards-page bold is fixed, else prebuild breaks on pre-existing violations.

### OI-20260808-cert-design-canon-docs-stale — Fix stale 'nothing auto-deploys' claim in cert design-canon docs

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `docs/design-canon/METHOD.md`, `docs/design-canon/SITEWIDE.md`
- repro: METHOD.md §6 + SITEWIDE.md say deploymentEnabled is false / 'nothing auto-deploys', contradicting the live vercel.json (main:true) + AGENTS.md §6.
- done when: the docs match the live deploy posture (push-to-main auto-deploys to prod)

### OI-20260808-cert-check-v3 — Run cert check:v3 (computed-style render gate) on the fattened regulation pages

- scope: **human-gated** · type: audit · status: open · repo: cert · blocked_on: vercel-preview-protection-toggle
- repro: check:v3 needs a reachable URL + playwright; the preview deployment is behind Vercel deployment-protection (login wall), which I will not cross.
- done when: check:v3 exits 0 against the regulation pages
- decision: _pending_ — enact: `cd ~/Desktop/heavymetalcertified && npm i -D playwright && npm run check:v3`
- notes: Karen can disable preview deployment protection, or run check:v3 herself against the preview URL.

<!-- END: outstanding-ledger -->
