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

148 open item(s): 53 auto, 95 awaiting a decision.

### OI-20260825-standards-provisional-banner — Gate every standard page on the readiness-manifest: show a PROVISIONAL / not-certification-ready banner until COMPLETE+REGISTERED+CORRECTED

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified/tools/build-category-standard-pages.mjs`, `heavymetalcertified/data/standards/readiness-manifest.json`
- repro: A hollow/incomplete standard page (e.g. cat15 menstrual line: all 11 cells empty) currently renders as a real Standard, which is the false-ready problem Karen flagged. The renderer should read data/standards/readiness-manifest.json and render a clear PROVISIONAL / not-yet-certification-ready banner on any page whose entry is not ready:true, and every site claim of readiness (for-brands, apply, program/readiness, index) should read from the manifest rather than presenting all published standards as ready.
- done when: Standard pages with manifest ready:false show a provisional banner; No surface presents an incomplete/unregistered category as certification-ready; Banner clears automatically when the category becomes COMPLETE+REGISTERED+CORRECTED
- decision: _pending_

### OI-20260825-standards-numeric-completeness — Founder rule: every analyte must carry a specified limit — apply Cat-30 read-across completion program-wide (control/not-material null cells)

- scope: **human-gated** · type: decision · status: queued · repo: cert
- paths: `tools/standards/*-config.json`, `data/standards/*-compiled/*.json`, `heavymetalcertified/tools/build-cert-cat9-pages.mjs`, `heavymetalcertified/tools/build-cert-cat17-pages.mjs`
- repro: Karen (2026-08-25): a category is NOT finished until every analyte has a specified numeric limit; control/not-material with value=null is unacceptable. Fixed for Cat-30 olive oil + cooking-oils-other (Ni/Cr/Cr-VI/Sn/Al now numeric read-across; MeHg bounded). But many other live categories still ship null control/not-material cells (e.g. Cat-9 contact products, Cat-17 pet foods, and others), and the cert renderers for those categories PUBLICLY frame control/not-material as a deliberate we-do-not-invent-numbers defensibility posture. Applying the same read-across numeric completion program-wide changes disclosed cert content + methodology posture (Part 2 / Part 19), so it needs Karens explicit direction before a fleet drain.
- done when: Karen decides: apply numeric read-across completion to ALL categories with null control/not-material cells, OR keep the disclosed control/not-material posture for genuinely-unregulated (esp. non-food) cells with a documented exemption list; Once decided, either drain the completion across categories or codify the exemption policy
- decision: **APPROVE: Ruling ratified 2026-08-25 (governance v2.3). Every analyte carries a limit-of-record; readiness = COMPLETE + REGISTERED + CORRECTED. Applying program-wide via per-category chips + standard-readiness-lint.**
- notes: Surfaced while fixing olive oil per Karens urgent request. The Cat-30 fix pattern (adversarially-verified read-across to nearest sovereign instrument, disclosed) is the reusable template.

### OI-20260825-standards-fanout-deploy-hook — Close the last fan-out hop: cert standards deploy should auto-trigger an app redeploy (Vercel deploy hook)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app/scripts/sync-standards.mjs`
- repro: Fan-out is now: index compile -> cert (push main = deploy) -> app (prebuild fetches the LIVE published export on every build, fixed 2026-08-25 app 324a2e2). The app is fresh as of its last deploy, but a cert standards deploy does NOT automatically redeploy the app, so the app can lag until its next deploy. To make cert->app fully automatic, configure a Vercel Deploy Hook on the heavymetalcertified-app project and have the cert (heavymetalcertified) production deploy POST to it (Vercel dashboard: Project Settings > Git > Deploy Hooks; or a cert postbuild curl to the hook URL). Needs Vercel dashboard access — cannot be done from a code session without the hook URL/credentials.
- done when: A cert production deploy triggers an app redeploy automatically; Verified: a standards change on cert appears on app.heavymetalcertified.com without a manual app deploy
- decision: _pending_

### OI-20260825-required-analytes-app-wiring — Wire cert app scope-panel + testing-cost to the required-analytes registry (stop costing all 10 analytes for every product)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/app/portal/application/actions.ts`, `heavymetalcertified-app/src/app/api/scope-panel/[productSlug]/route.ts`, `heavymetalcertified-app/src/lib/testing-cost.ts`, `data/workbench/standards/required-analytes.json`
- repro: App portal quotes annualTestingCostCents with analyteSet=[...PANEL_CODES] (all 10) for every product regardless of category; scope-panel PDF lists all 11 rows with no per-lot/reflex/conditional distinction. required-analytes.json now encodes obligations per category but nothing reads it.
- done when: app derives per-lot analyteSet from the registry (per_lot_total + conditional-if-met), not blanket PANEL_CODES; scope-panel marks each analyte per_lot/reflex/conditional; testing-cost excludes reflex+inapplicable analytes; olive-oil glass SKU quotes a 7-element panel
- decision: _pending_

### OI-20260825-recency-governance-propagation — Propagate cadence-based prior-data recency (§4.5) to governance docs + counsel

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `docs/governance: Lot Testing Schedule §4.3/§4.5`, `heavymetalcertified-app: src/lib/readiness/prior-data-recency.ts`
- repro: The app now credits prior lots on a cadence-based recency window (continuous 12mo, periodic 18mo, seasonal/oils/honey 24mo) instead of the published flat 12-month §4.5 rule. This is what lets Kasandrinos (olive oil, ~13-month-old lot) credit both priors. The window values + per-category cadence assignment are a governance/counsel decision and must land in the Lot Testing Schedule before litigation-final.
- done when: Lot Testing Schedule §4.5 states the cadence-based windows; counsel has reviewed the change
- decision: _pending_

### OI-20260825-readiness-scoring-residuals — Readiness scoring residuals: onboarding finder assigns placeholder product slugs; government hard-stop never supplied at runtime

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `heavymetalcertified-app/src/app/hmt/onboarding`, `heavymetalcertified-app/src/app/portal/readiness/actions.ts`, `heavymetalcertified-app/src/lib/readiness/compute-readiness.ts`
- repro: Bobbie olive-oil report was filed under product_slug art-craft-materials (a finder placeholder) so the wrong standard resolved (demo retagged to olive-oil by hand). Separately, recomputeReadiness passes no governmentLimits, so the regulatory hard-stop / legal-limit flag can never fire.
- done when: onboarding finder assigns a real published product slug or blocks with a clear state instead of a placeholder; recomputeReadiness supplies per-analyte government limits so hardStop can fire
- decision: _pending_

### OI-20260825-readiness-roundtrip-tests-lifecycle — Readiness portal: round-trip tests (upload->confirm->save->score) + implement the retention lifecycle promised in UI (P7)

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `heavymetalcertified-app/src/app/portal/readiness`, `heavymetalcertified-app/src/lib/readiness`
- repro: The 37 tests cover only the pure scoring engine; nothing tests the ingest->save->score seam where both live bugs lived. Separately, retention_class never promotes to of_record and there is no purge job, so any promised data lifecycle is copy-only (the false 90-day claim was removed today).
- done when: a test exercises upload extraction -> grid confirm -> saveLabReport -> recomputeReadiness including nondetect rows; a promotion path sets retention_class=of_record when a lot supports certification; a scheduled purge removes exploratory reports + storage objects per the stated policy, OR the policy stays absent from UI
- decision: _pending_

### OI-20260825-readiness-hardening-promote — Ship readiness assessment-shape hardening (b59e63f) to app.heavymetalcertified.com prod

- scope: **human-gated** · type: promote · status: queued · repo: cert
- paths: `heavymetalcertified-app/src/app/portal/readiness/page.tsx`, `heavymetalcertified-app/scripts/seed-kasandrinos.mjs`
- repro: Commit b59e63f on heavymetalcertified-app master normalizes the readiness_assessment shape (fixes /portal/readiness digest 4163486798, per_analyte + baseline). Committed but origin/master is still 6bae627 (prod). Ships on the next git push origin master, which also carries the peer session stacked commits a5b10d4 (grandfather) + 65b18bb (challenge). Karen already unblocked via a live DB data fix.
- done when: origin/master contains b59e63f; app.heavymetalcertified.com /portal/readiness renders a brand with a stub/empty assessment without a 500
- decision: **APPROVE: shipped live — Karen greenlit the GTM stack; peer pushed origin/master 6bae627->625b0c6 (ff), so b59e63f + 0000b35 readiness guards are LIVE. All 3 migrations (0006/0007/0008) confirmed applied. Kasandrinos DB row now carries real engine assessments (1/3, insufficient_data); synthetic row gone.**

### OI-20260825-readiness-engine-test-tsc — Pre-existing tsc --noEmit error in readiness-engine.test.ts (analyte string not MeasuredAnalyte)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/lib/readiness/readiness-engine.test.ts`
- repro: cd ~/Desktop/heavymetalcertified-app && npx tsc --noEmit -> error TS2322 at readiness-engine.test.ts(188,52): mixed array literal widens analyte to string, not assignable to ReadinessResultInput[]. Does NOT block npm run build (build typecheck excludes tests); pollutes tsc --noEmit only. Pre-existing, unrelated to the readiness 500 fix.
- done when: npx tsc --noEmit passes clean in heavymetalcertified-app; readiness-engine vitest suite still green

### OI-20260825-readiness-basis-integrity — Readiness portal: carry and convert measurement basis instead of hard-coding basisConvertible=true (P5)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/app/portal/readiness/actions.ts`, `heavymetalcertified-app/src/lib/readiness/compute-readiness.ts`, `heavymetalcertified-app/src/lib/readiness/qualify-prior-labs.ts`
- repro: recomputeReadiness maps every lab_result with basisConvertible:true unconditionally and the engine compares value to limit with no basis conversion. The wiki discipline is that bases (as-sold, dry-weight, reconstituted) are never conflated; a powder limit compared against an as-consumed value is a silent error.
- done when: each lab_result carries its reporting basis; the engine converts to the standard native basis before comparison (reuse tools/evidence/basis-conversion.mjs logic); a non-convertible basis is surfaced, not silently passed
- decision: _pending_

### OI-20260825-readiness-attestation-audit-trail — Readiness portal: capture raw-vs-confirmed attestation + append-only audit trail + soft-delete (P3/P4 defensibility foundation)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/lib/extract.ts`, `heavymetalcertified-app/src/app/portal/readiness/actions.ts`, `heavymetalcertified-app/supabase/migrations`
- repro: The portal tells brands they are attesting the transcription so the record is defensible, but nothing durable stores the model raw extraction beside the human-confirmed values, no who/when/what-changed diff is captured, and lab_result/readiness_assessment are edited and hard-deleted in place. A litigation-grade record must be reconstructable to any past date and never hard-vanish.
- done when: prior_lab_report/lab_result store the raw AI extraction JSON alongside confirmed values; an attestation row captures attested_by_user_id, attested_at, and a field-level diff on save; lab_result + readiness_assessment are versioned (append-only) not updated in place; deletes are tombstoned (deleted_at, deleted_by, reason) not hard deletes
- decision: _pending_

### OI-20260825-public-panel-claim-reword — Reword public 10-analyte-per-product claims to the screened+triggered structure (DOI-registered the-big-8.md + ~10 surfaces)

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/briefings/the-big-8.md`, `content/mark.md`, `content/apply.md`, `content/verify.md`, `content/heavy-metal-testing.md`, `content/heavy-metals-in-baby-food.md`, `content/heavy-metals-in-rice.md`, `content/heavy-metals-in-protein-powder.md`, `content/heavy-metals-in-supplements.md`, `content/heavy-metals-in-dark-chocolate.md`, `content/brands/specimen.md`, `content/program/structure.md`, `heavymetalcertified-app/src/app/hmt/onboarding/OnboardingFlow.tsx`
- repro: the-big-8.md:88 (DOI-registered flagship briefing) states verbatim the panel does not change by product; every certified product is tested on the full ten-analyte panel in every subcategory, nothing dropped by category. This is the literal negation of the ratified Required-Testing-Panel Ruling (8 totals + species on trigger/bounded). ~10 other public surfaces repeat measured on the ten-analyte panel per product; defense-counsel-briefing.md:66 already has the CORRECT framing (8 totals + species where product or reflex trigger requires) and is the template.
- done when: every public surface reworded to two-part structure: guaranteed 8-total base panel screened every product (basis-appropriate) + 3 species measured on pathway/reflex trigger, bounded by parent total otherwise; distinguish screened vs governed (sovereign limit vs disclosed baseline-screen); the-big-8.md DOI implications reviewed with counsel before editing the registered artifact; no surface claims a flat ten-analyte-per-product measurement
- decision: _pending_

### OI-20260825-portal-usda-fsis-deploy — Deploy portal USDA-inspection gate + FSIS briefing (branch feat/usda-inspected-fsis-gate in heavymetalcertified-app)

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `~/Desktop/heavymetalcertified-app`
- repro: Built + green on branch feat/usda-inspected-fsis-gate: brand Profile asks USDA-FSIS inspected? (Yes/No/Not-sure); Yes gates the FSIS briefing before-the-meat-label-prints into portal Briefings. next build green, 31/31 tests pass. Supabase column brands.usda_inspected already applied (prod fogsknlpvoxtlogzchkc). Branch also carries a build-unblock lint fix (dangling @typescript-eslint disable in auth/callback broke next build since commit 0053167 — pre-existing, independent of feature). NOT deployed: portal app deploy posture unknown; needs merge + deploy. Notion task 3c71a1bb assigned to Kimberly tracks this.
- done when: Merge feat/usda-inspected-fsis-gate and deploy the heavymetalcertified-app portal; Brand answering Yes to USDA-inspected sees the FSIS briefing in portal Briefings; No/Not-sure does not; Confirm main portal build is green after merge (lint-unblock fix rides along)
- decision: _pending_

### OI-20260825-organotin-speciation-decision — Program decision: adopt organotin (TBT/DBT/TPT) speciation for seafood/marine oils?

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `docs/governance/hmtc-governing-principles.md`, `data/workbench/standards-book/source-documents/lot-testing-schedule.md`, `data/workbench/standards/required-analytes.json`
- repro: HMTc Sn is TOTAL elemental tin, but the real tin hazard in seafood, marine oils, and silicone/PVC food-contact matrices is ORGANOTIN (TBT/DBT/TPT), whose Sn mass is trivial — total Sn passes while missing it (corpus: EFSA SCOOP fish TBT/DBT/TPT; sadighara2021; edible-oil TBT in Liu2016). Adding organotin speciation (LC-/GC-ICP-MS) is a NET-NEW analyte class: scope, methodology, lab availability, cost, and a new Daubert surface. Flagged in Required-Testing-Panel Ruling §5.
- done when: decide whether organotin joins the analyte program (which categories, mandatory vs reflex); if yes: add organotin obligation to lot-testing-schedule §9 + registry with a disclosed method + phase-in; if no: document total-Sn-as-inorganic-screening framing as the deliberate scope boundary
- decision: _pending_

### OI-20260825-olive-oil-cd-profile-stale — Re-synthesize olive-oil ingredient contamination_profile Cd (page says high; pooling engine says not-material at-floor)

- scope: **auto** · type: audit · status: open · repo: index
- paths: `wiki/ingredients/olive-oil.md`
- repro: wiki/ingredients/olive-oil.md contamination_profile (reviewed 2026-05-16) rates Cd high confidence typical 1-30 p95 50; later pooling engine + standards-not-material.csv put Cd at ~3 ug/kg floor, adjudicated not-material (partitions to press-cake).
- done when: olive-oil.md Cd sub-block re-synthesized against current pool; confidence/typical/p95 reconciled with the not-material adjudication or divergence explained

### OI-20260825-numeric-completeness-lint — Certification-readiness lint (analyte completeness + DOI gate) — SHIPPED

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified/tools/standard-readiness-lint.mjs`, `heavymetalcertified/data/standards/readiness-manifest.json`
- repro: SHIPPED heavymetalcertified f7fb7f8: standard-readiness-lint + readiness-manifest, wired into prebuild warn-only, flips to --strict when empty-cell backlog=0.
- done when: Lint live (done); Flip to --strict once readiness-manifest empty_cells=0
- decision: _pending_

### OI-20260825-hmtc-recency-cadence-governance — Propagate cadence-based prior-data recency into §4.5 governance + counsel review

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/workbench/standards-book/source-documents`
- repro: The HMTc app readiness engine now sets the §4.5 prior-data-credit recency window by product testing cadence (continuous 12mo / periodic 18mo / seasonal 24mo) instead of a flat 12 months, because low-frequency categories (olive oil = per-harvest) were being wrongly disqualified. The published Governance §4.5 / Lot Testing Schedule §4.3 still say within 12 months. App and standard now DIVERGE until governance is updated.
- done when: Governance §4.5 + Lot Testing Schedule §4.3 updated to cadence-based recency (or Karen sets the authoritative windows); Per-category cadence assignment ratified (which categories are continuous/periodic/seasonal); Counsel (Amanda Bruss, Trestle) reviews the change for defensibility; App src/lib/readiness/prior-data-recency.ts values reconciled to the ratified standard
- evidence: heavymetalcertified-app commit 625b0c6 · memory project_hmtc_go_to_market
- decision: _pending_
- notes: Karen directed this (she owns standards). Defensibility: §4.5 is a litigation-facing rule; the app must not drift from the published standard. Values in the app are a first cut.

### OI-20260825-hmtc-readiness-test-type-error — heavymetalcertified-app: readiness-engine.test.ts fails tsc (MeasuredAnalyte)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `/Users/karenpendergrass/Desktop/heavymetalcertified-app/src/lib/readiness/readiness-engine.test.ts`
- repro: cd ~/Desktop/heavymetalcertified-app && npx tsc --noEmit -> TS2322 at readiness-engine.test.ts:188: a test fixture array types analyte as string, not MeasuredAnalyte. Pre-existing (unrelated to the grandfather build); tsc otherwise clean.
- done when: npx tsc --noEmit exits 0; npx vitest run still green

### OI-20260825-hmtc-app-launch-gaps — HMTc brand portal: launch-readiness gap backlog vs paleofoundation backend

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `/Users/karenpendergrass/Desktop/heavymetalcertified-app`
- repro: Deep-read of paleo-foundation (147 migrations) vs heavymetalcertified-app (5 migrations) across auth, email/cron, payments, and admin/certification-lifecycle. The app can onboard, profile, run readiness, and hold a product line, but lacks the subsystems that let a brand actually pay, get certified, renew, and recover access — and that let staff review/issue/verify. Password RECOVERY trio (reset-password + update-password + /auth/callback) was SHIPPED this session (typecheck green); it still needs Supabase SMTP + redirect-URL allowlist config to deliver mail.
- done when: Tier 1 launch-blocking: transactional email (Resend or Supabase SMTP), payments (orders+pricing+PayPal/invoice) OR explicit comped-cohort decision; Tier 2 operationally-necessary: staff review->decision->license->agreement->permissions-letter lifecycle; audit_logs; renewal cron; public verification surface; multi-user/team; Tier 3 enhancing: staff impersonation; Chief AI ops assistant (gateway/Anthropic, not OpenAI); cal.com embed-react; CSV/xlsx reporting; email prefs/unsubscribe + inbound shared inbox; Karen sequences/funds each tier; counsel + pricing + PayPal creds gate the payments tier
- evidence: scratchpad/gap/{1,2,3,4}.md scout inventories · memory: project_hmt_onboarding_readiness_build · deliverable: HMTc launch-gap analysis artifact
- decision: _pending_
- notes: See saved memory project_hmtc_backend_gap_analysis for the full prioritized map. Firewall: none of these write brand data into the index; app is app.heavymetalcertified.com only.

### OI-20260825-datacite-production-registration — Register standards with PRODUCTION DataCite DOIs (readiness gate 2) — blocked on membership approval

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `tools/mint-dois.mjs`, `heavymetalcertified/docs/DOI-MINTING-LEDGER.md`
- repro: No standard carries a DOI; readiness ruling requires a resolvable PRODUCTION DOI. Credentials issued (LKPN.SCEVXU / prefix 10.84435) are TEST/sandbox only; membership is under DataCite Board review. Kimberly action items from Maria Levchenko: resubmit the application with correct annual-revenue bracket and WITHOUT the Claude-is-active-in-this-tab-group banner, set the repository password from the emailed link, then sign the shared application link. Production minting (mint-dois.mjs DATACITE_MODE=live) unblocks only after approval + live prefix in Vercel env.
- done when: DataCite membership approved + production prefix issued; mint-dois extended to mint per-standard DOIs and stamp doi: frontmatter; standard-readiness-lint REGISTERED gate passes for shipped categories
- decision: _pending_

### OI-20260825-completing-lot-pricing — Replace placeholder completing-lot cost figures with the real fee schedule

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app: program_cost_inputs`, `heavymetalcertified-app: program_config (product_purchase_handling_cents, shipping_flat_cents, retail_shipping_cents)`
- repro: The readiness portal now shows brands (e.g. Kasandrinos) an itemized completing-lot estimate: product at retail + shipping-to-us + shipping-to-lab + lab panel. All non-retail inputs are PLACEHOLDERS (is_placeholder=true): per-analyte lab cost $35 (iAs/CrVI $60, MeHg $70), handling $25, ship-to-lab $45, retail shipping $12. The UI marks them provisional. Replace with the real HMTc fee schedule / lab contract figures via the program_cost_inputs + program_config rows in Supabase project fogsknlpvoxtlogzchkc.
- done when: program_cost_inputs + program_config carry real figures with is_placeholder=false; completing-lot estimate on /portal/readiness reflects real pricing
- decision: _pending_

### OI-20260825-cert-export-envelope-version — Cert Standards-Finder export top-level source_standard_version is stale (2.2 2026-06-09)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified: content/static/data/standards-finder-context.json (generator)`
- repro: https://heavymetalcertified.com/static/data/standards-finder-context.json reports source_standard_version 2.2 (2026-06-09) even though per-product standard_version values are current (e.g. olive-oil 1.0 2026-08-14). The published export builder does not bump the top-level envelope version, so the export LOOKS stale even when product data is fresh. Bump the envelope version in the export generator whenever products change.
- done when: published export source_standard_version reflects the latest standards build date

### OI-20260825-cat30-cr-gb2762-2025-recheck — Re-verify Cat-30 total-Cr read-across (300 ppb) against GB 2762-2025 after it supersedes GB 2762-2022 on 2026-09-02

- scope: **auto** · type: audit · status: open · repo: index
- paths: `data/evidence/regulatory_limits.csv`, `tools/standards/cat30-config.json`
- repro: Olive-oil + cooking-oils-other total-Cr reads across china_gb2762_cr_liquid_milk_300 (GB 2762-2022). GB 2762-2025 supersedes 2026-09-02; if the liquid-milk total-Cr value changes, update the register row + recompile Cat-30 and re-render cert.
- done when: GB 2762-2025 liquid-milk total-Cr value confirmed vs 300 ppb; If changed: register updated, compile-cat30 rerun, cert re-rendered + pushed

### OI-20260825-analytes-finder-context-stale — Re-sync app standards-finder-context + analytes.ts to Cat-30 v1.1 (Cr-VI=10 read-across, iAs bounded)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/data/standards-finder-context.json`, `heavymetalcertified-app/src/lib/readiness/analytes.ts`
- repro: App finder context shows olive-oil iAs limit null and folds Cr-VI (regulatory_only); source-of-truth cat30-compiled/olive-oil.json v1.1 has iAs bounded-by-tAs and Cr-VI=10 read-across. analytes.ts header carries an OPEN STANDARDS DECISION about Cr-VI/MeHg that the 2026-08-25 Certification-Readiness Ruling resolved (bounded, not regulatory_only).
- done when: finder context regenerated from v1.1 source; Cr-VI and MeHg treated as bounded per Readiness Ruling; analytes.ts OPEN STANDARDS DECISION comment updated
- decision: _pending_

### OI-20260824-struggle-forecast-rollout — Roll out 'What is likely to struggle' to every compiled category (each subcategory) + render into cert

- scope: **auto** · type: content · status: open · repo: index · blocked_on: OI-20260824-struggle-forecast-generator
- paths: `tools/standards/build-struggle-forecast.mjs`, `tools/standards/build-category-manual.mjs`, `tools/standards/render-program-manual.mjs`, `tools/standards/build-cert-standard-pages.mjs`
- repro: Once OI-20260824-struggle-forecast-generator lands (spec approved + generator + firewall guard + Cat-1 reference), the section must exist for EACH category AND subcategory across the program per Karen's directive. Scope: 35 categories, ~350 subcategories total. Compiled today: data/workbench/standards/catNN-compiled dirs exist for cat 1-5, 8-11, 13-35, plus cat6 (seafood) and cat12 (household cleaning) ship via their own compilers; cat7 pending compile. The generator iterates subcategories inside each category, so per-category execution covers every subcategory.
- done when: Every compiled category's per-category manual AND cert render carries the struggle section for each of its subcategories; firewall-no-threshold-lint exits 0 ERROR (no struggle/exceedance section on any index URL); contamination-profile-integrity audit clean (no fabricated forecast on data-gap cells); each category shipped via its normal cert deploy path (per-category commit/PR audit trail preserved)
- notes: Auto because once the generator + Karen-approved framing lock, the per-category/subcategory fan-out is deterministic regen + verify against acceptance criteria within the Part 2/12 firewalls. Batched deliberately (one rollout item, not ~350 per-subcategory chips) per CLAUDE.md 'batch even those, never drip-feed'.

### OI-20260824-struggle-forecast-generator — Build the 'What is likely to struggle' forecast section (generator + spec + firewall guard) + one reference category for approval

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `tools/standards/build-struggle-forecast.mjs`, `tools/standards/build-category-manual.mjs`, `tools/standards/render-manual-html.mjs`, `tools/standards/render-program-manual.mjs`, `tools/standards/build-cert-standard-pages.mjs`, `tools/autonomy/firewall-no-threshold-lint.mjs`, `data/evidence/hmtc_aggregate_distributions.csv`
- repro: No 'What is likely to struggle' section exists on any category/subcategory surface today (grep -rin struggle across repo = 0 hits; Karen confirms not yet visible). The inputs to compute it ALREADY exist: data/evidence/hmtc_aggregate_distributions.csv carries, per (product_slug, variant_type, metal_species), the occurrence quantiles pooled_p10/p30/p45/p50/p90/p95/p97, pooled_n, and candidate_value_ppb (the published HMTc limit); compiled per-subcategory limits live in data/workbench/standards/catNN-compiled/*.json. The forecast = where the published limit falls in the current-market occurrence CDF per (subcategory, analyte), which analyte(s) bind, and a plain-language difficulty rating. Firewall: this juxtaposes the published limit with occurrence data (a derived-value class), so it is a cert/heavymetalcertified + Program-Manual + staff-workbench surface ONLY, never a heavymetalindex.com URL.
- done when: Section spec approved by Karen: final section title, audience framing (brand founder / QA / regulatory-affairs / legal), and firewall posture — forecast-labeled, shows the already-published limit and a bucketed/qualitative difficulty rating, NEVER the P97/P45 selection arithmetic or pool-composition math; New generator tools/standards/build-struggle-forecast.mjs computes per (subcategory, analyte) the exceedance/difficulty forecast from hmtc_aggregate_distributions.csv + the compiled limit, and honors data-gap rules (small pooled_n or degenerate upper tail => 'insufficient occurrence data to forecast', never a fabricated rate) per the contamination-profile integrity conventions; Reference category Cat-1 renders the section under every subcategory chapter (after the Master Limit Table) in build-category-manual output, plus a category roll-up in the Program Manual; firewall-no-threshold-lint.mjs extended to ERROR if a struggle/exceedance-rate section renders on any index URL; lint exits 0 ERROR; Generated, never hand-curated; re-running the generator overwrites in place
- decision: _pending_
- notes: Enabling work for OI-20260824-struggle-forecast-rollout. Human-gated because it is a new cert-published section (cert production content), it sits on the Part 2 / Part 19 firewall boundary, and the audience framing + final section title are a design fork. Proposed difficulty buckets (Karen to confirm wording): limit above ~p95 => 'most current-market product already passes'; between ~p50 and ~p95 => 'a meaningful minority will need remediation'; below ~p50 => 'the majority of current-market product exceeds the limit and will struggle'. Never print the raw p-values.

### OI-20260824-hmtc-growth-instrumentation — HMTc growth stack is uninstrumented: no GA4/Search Console, no AirOps AEO brand kit, no Lusha visitor domain — blocks measurement + warm-lead capture for the Q4 30-signup goal

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `quartz.config.ts`, `quartz/components/Head.tsx`
- repro: heavymetalcertified quartz.config.ts analytics:null; no google-site-verification meta anywhere; AirOps list_brand_kits returns 0 brand kits (no LLMO citation tracking); Lusha website_visits_search returns NO_DOMAIN_CONFIGURED (de-anonymized visitor intel off, and it depends on a tracking script that is not installed). Net: no visibility into traffic, rankings, AI-answer citations, or which brands are in-market. Karen must provide/enable: GA4 tag, Search Console verification token, Lusha visitor domain config, and an AirOps AEO brand kit; then Claude wires the snippets into Head/config in minutes.
- done when: GA4 + Search Console verification live on heavymetalcertified.com; Lusha visitor tracking script installed and a domain configured; AirOps AEO brand kit created for HMTc with the target head-term prompt set tracked; analytics no longer null in quartz.config.ts
- decision: _pending_

### OI-20260824-hmtc-fee-upper-band-3yr-discount — Confirm intentional: HMTc fee sheet 10pct (not 20) three-year discount, bands VII-XIII (NOW LIVE)

- scope: **human-gated** · type: decision · status: open · repo: cert
- decision: _pending_
- notes: NOW LIVE with the sheet's exact values (Band VII 3yr = 113400, i.e. 10pct off). Calculator reproduces the source faithfully and labels the actual pct. Still worth confirming the upper-band 10pct is intentional vs a source typo; if a typo, fix the source sheet and BANDS[] in feeCalculator.inline.ts.

### OI-20260824-cert-scholar-metadata-gaps — Cert Scholar metadata gaps: 38 pages missing citation_technical_report_number, 9 invalid Scholar dates, 10 pet-food standards absent from sitemap-scholarly.xml

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `quartz/components/Head.tsx`, `tools/postbuild-cert-sitemaps.mjs`
- repro: npm run seo:audit on heavymetalcertified: 38 technical-report-missing-citation_technical_report_number, 9 invalid Scholar publication date 2026/08, 1 x 2026/06, and 10 pet-food standards missing from sitemap-scholarly.xml. Pre-existing on origin/main; unrelated to the title/schema SEO pass.
- done when: scholar-eligible standards emit a real citation_technical_report_number or omit the tag intentionally; Scholar publication dates resolve to full date or bare year, not YYYY/MM; scholar-eligible pet-food standards appear in sitemap-scholarly.xml

### OI-20260824-cert-p97-scrub-golive — Merge cert PR #55 to deploy the P97/P45 public scrub live

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `PR #55`, `fix/retire-p97-p45-public`
- repro: PR #55 is origin/main + the P97/P45 scrub only; Vercel preview SUCCESS; cert push-to-main=live
- done when: PR #55 merged to main; heavymetalcertified.com shows no P97/P45 except /program/two-pathways; retired-methodology-lint green in production build
- decision: _pending_

### OI-20260824-cert-meta-desc-gt-escape — Cert meta/og/twitter descriptions ship a literal > (USP <2232>) that naive crawlers truncate

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `quartz/components/Head.tsx`, `tools/audit-crawl-metadata.mjs`
- repro: npm run seo:audit on heavymetalcertified reports 24 pages missing meta/og/twitter description; the descriptions exist but contain USP <2232>/<232>, whose literal > inside the quoted attribute value defeats the audit <meta[^>]*> regex and can defeat naive social scrapers. Google parses it fine. Pre-existing on origin/main.
- done when: Emitted meta/og/twitter description content escapes > to &gt; (or drops the literal >), and tools/audit-crawl-metadata.mjs parses >-bearing quoted attribute values without false missing-description reports

### OI-20260824-cert-main-divergence — Cert local main diverged from origin: another session's unpushed /apply fee calculator + duplicate FAQ commit + collapsibleQuestions.ts WIP

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `quartz/plugins/transformers/collapsibleQuestions.ts`, `content/apply.md`, `quartz/components/FeeCalculator.tsx`
- repro: git -C ~/Desktop/heavymetalcertified log origin/main..main shows abafce0 + d00d3d6 (dup of origin 408e1b1); collapsibleQuestions.ts has uncommitted WIP
- done when: other session's WIP either pushed or intentionally shelved; local main reconciled with origin without losing committed work
- decision: _pending_

### OI-20260824-cert-hero-cta-parallel-conflict — Parallel branch feat/get-started-cta will overwrite the live /apply hero CTA with a 404 (app.heavymetalcertified.com) when merged

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `content/index.md`
- repro: main (ba84697) now has the hero Get Started button pointing at /apply (live, HTTP 200). A parallel session left branch feat/get-started-cta (tip 2c2698e) with the same button pointing at https://app.heavymetalcertified.com/hmt/get-started, which returns HTTP 404 (subdomain not deployed). If that branch merges to main it will re-break the primary conversion CTA. Resolve by either standing up app.heavymetalcertified.com/hmt/get-started or repointing that branch to /apply before merge.
- done when: The live hero Get Started CTA resolves (HTTP 200), whether via /apply or a deployed app.heavymetalcertified.com/hmt/get-started; feat/get-started-cta reconciled with main so the working CTA is not overwritten
- decision: _pending_

### OI-20260824-cert-form-backend-missing — Cert /api/corrections endpoint does not exist; corrections form fails to mailto fallback (applies to new apply form too)

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `quartz/components/scripts/corrections.inline.ts`, `content/apply.md`
- repro: corrections.inline.ts POSTs to /api/corrections, but there is no api/ handler in the repo and vercel.json is framework:null static — so the POST 404s and the form shows 'Could not reach the corrections endpoint... email karen@paleofoundation.com'. The corrections form (contact/errata/hmtc-primer) is therefore effectively email-only today. The new /apply application form deliberately uses mailto+copy for the same reason (no backend). UPGRADE PATH: add a Vercel serverless /api/applications (and fix /api/corrections) backed by email (Resend) or a DB (Supabase publishable key + insert-only RLS) for durable records + auto-acknowledgement; needs Karen's call on provider + a secret/integration + data-retention posture.
- decision: _pending_
- notes: Not blocking: both forms work via email today. Flagged as the natural next iteration.

### OI-20260824-cert-fee-calculator-promote — Verify fee-calculator pricing table vs heavy metal pricing.csv, then promote /apply calculator to live

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `quartz/components/scripts/feeCalculator.inline.ts`, `quartz/components/FeeCalculator.tsx`, `content/apply.md`, `quartz.layout.ts`
- repro: Commit abafce0 (Karen, 2026-08-24) on branch feat/apply-fee-calculator adds a self-contained /apply certification-fee calculator (14 revenue bands, 1/2/3-yr terms, two rush tiers). It builds green but is NOT on origin/main, so it is not live. Its dollar table is transcribed verbatim from an external heavy metal pricing.csv that is not in the repo and cannot be verified from a session. Upper bands (VII+) intentionally apply a reduced 3-year discount (10%, e.g. Band VII y3=113400 rather than the 20% used in bands 0-VI) per an inline comment; confirm that is the published policy, not a transcription slip, before any live pricing ships. Do NOT ship the whole branch: it also carries commit c107086 (P97/P45 public-surface retirement, ~50 files) and a large uncommitted WIP pile from an active concurrent session. A duplicate commit 559f56b of the calculator exists on another branch.
- done when: Every band y1/y2/y3 in feetable matches heavy metal pricing.csv exactly, incl the upper-band reduced-discount rows; Rush surcharges 5000/10000 and 1/2/3-yr term copy match apply.md; abafce0 (calculator only, isolated via cherry-pick) is on origin/main; /apply renders the live calculator and no longer routes to paleofoundation.com
- decision: _pending_ — enact: `git worktree add /tmp/ship-feecalc origin/main && git -C /tmp/ship-feecalc cherry-pick abafce0 && git -C /tmp/ship-feecalc push origin HEAD:main && git worktree remove --force /tmp/ship-feecalc`
- notes: Gate is CSV verification (Karen holds the CSV). Only after that, cherry-pick abafce0 in isolation (non-destructive to the active branch, dedupes on later merge). Surfaced during the FAQ-accordion task via a shared-checkout git race.

### OI-20260824-cert-concurrent-p97-retire — Concurrent session has unpushed cert commits (retire P97/P45) on local branch feat/apply-fee-calculator

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `quartz/components/scripts`, `content`
- repro: During this task a concurrent session committed to the shared cert checkout on branch feat/apply-fee-calculator (commits ~2026-08-24): d00d3d6 (cert-faq accordion, duplicate of origin 408e1b1) and c107086 (fix(cert): retire P97/P45 from public surfaces). These are LOCAL-ONLY (unpushed) and were deliberately NOT included in the apply-live deploy (based off canonical origin/main instead). The branch and its commits are preserved locally. Surface so that session's owner reviews and pushes/discards them; c107086 touches methodology framing and should be reviewed before it ships.
- decision: _pending_

### OI-20260823-apply-baseline-process-card — apply.md Route B process card omits the three-lot baseline

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/apply.md`
- repro: content/apply.md Step 02 (Audit) says the ten-analyte panel is run on each product form but does not mention program entry requires a three-lot baseline. Now that the expedited-baseline/prior-data-credit FAQ on the same page references the three baseline lots, the process card reads as if a single run certifies.
- done when: Step 02 Audit card (or eligibility prose) states program entry is a three-lot baseline; wording consistent with content/program/structure.md and the new prior-data-credit FAQ
- decision: _pending_

### OI-20260822-program-manual-publish-reconcile — Program-level HMTc Program Manual built (internal+public PDFs); decide publish-to-cert and per-category currency reconcile

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `data/workbench/program-manual/build/HMTc-Program-Manual-Public-2026.pdf`, `data/workbench/program-manual/`, `~/Desktop/heavymetalcertified/content/manuals/index.md`
- repro: A new program-LEVEL Program Manual now exists at data/workbench/program-manual/ (Internal ~111pp incl Part 6 Program Operations; Public ~97pp firewall-safe). It is not published anywhere yet. Two decisions: (a) whether to publish the public edition to heavymetalcertified.com (/manuals listing + /static/manuals PDF); (b) the per-category standards-book manuals and the generic program-framework part files predate the ICS rebrand and Method v2.0 (they still say Paleo Foundation / P97-P45-as-primary) and would need the same currency pass if rebuilt or republished.
- done when: Karen decides publish-vs-hold for the public edition; if publish: public PDF placed in cert /static/manuals and listed on /manuals; if hold: item closed with note; separate follow-up logged for reconciling per-category manuals to Method v2.0 + ICS if that reconcile is wanted
- decision: _pending_

### OI-20260821-cert-project-paused — Cert Vercel project PAUSED (production 503) — resume + check Spend Management, then batched push of 6 held requirements guides

- scope: **human-gated** · type: promote · status: queued · repo: cert
- paths: `content/requirements/`
- repro: heavymetalcertified.com returns 503 x-vercel-error=DEPLOYMENT_PAUSED; get_project live:false, latest deploy readyState BLOCKED; Vercel platform operational; unpause_project API returned 403 (needs account/billing action). AB899 on origin/main (deploy BLOCKED); Maryland (53f176d) + 4-page batch (4ce6b20) committed locally, 2 ahead of origin.
- done when: Karen resumes the heavymetalcertified project in Vercel and addresses the Spend Management cap that likely auto-paused it; one batched git push origin main deploys AB899 + all 6 /requirements guides; verify all six pages return 200 and render the verified facts + boundary
- decision: **APPROVE: Karen resumed the project; batched push deployed; all 6 requirements guides + AB899 verified live 200 on 2026-08-21.**

### OI-20260820-status-b-mark-rule — Ratify Status-B mark rule: no mark above published limit (retires Tier-2 150% transitional mark use)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/mark.md`, `content/brands/specimen.md`, `content/briefings/hmtc-primer.md`, `content/manuals/`
- repro: /for-brands (LIVE) asserts the mark is never on product above its published limit; live tier framework lets Status B display the mark at up to 150% transitional on Tier-2 across ~15 pages
- done when: Karen/governance ratifies whether transitional Status-B may carry the mark; if no: sweep mark.md/specimen.md/primer/manuals so no product carries the mark above its published certification limit, one definition sitewide
- decision: _pending_

### OI-20260820-for-brands-phase1-remainder — Build-next Phase-1 brand pages: readiness/corrective-action split, /apply route selector, data-lifecycle, Standards Finder

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/program/remediation.md`, `content/apply.md`
- repro: the /for-brands cornerstone shipped; the sibling pages in the 'plan not a trap' spec are not yet built (split remediation into readiness + corrective-action, /apply route selector + transparent pricing, /what-happens-to-your-data lifecycle, Standards Finder). AB 899 / Maryland category-page facts are T2 and need primary-source verification
- done when: each page built to canon, build+lints green, adversarial pre-ship audit, pushed live; regulatory facts verified against primary sources before publishing
- decision: _pending_

### OI-20260820-certifier-liability-half — Certifier-side liability architecture for the for-brands program (negligent-cert, E&O, mark-as-representation, independence wall)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `data/workbench/public-briefings/the-testing-asymmetry-ADVERSARIAL-AUDIT.md`
- repro: the LIVE /for-brands page is brand-facing only; the adversarial audit's Part B certifier-side findings (negligent certification §324A/§311, E&O, mark-as-affirmative-representation, certify-vs-coach independence wall) are unaddressed and need counsel (Ira Sacks)
- done when: counsel reviews Part B; mark scoped as attestation not safety seal with reliance disclaimers; certification walled from remediation coaching
- decision: _pending_

### OI-20260820-cert-snapshot-count-inconsistency — Homepage snapshot counts contradict FAQ (348 vs 15 locked; firm 1,794 vs 3; 11 vs 10 analytes)

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/index.md`
- repro: pre-ship audit: homepage snapshot advertises 348 subcategory standards + 1,794 firm analyte limits + 11 analytes/row; FAQ on same page concedes 15 locked, three firm, and the panel is 10
- done when: relabel snapshot as register/scaffolded scope distinct from locked/firm, with an as-of date; resolve 8/10/11 analyte terminology to one sitewide definition
- decision: _pending_

### OI-20260819-manuals-index-v3 — Port the /manuals INDEX page to the v3 Claude Design (isManuals canvas)

- scope: **auto** · type: content · status: open · repo: cert
- repro: The single Program Manual PAGES now follow the canonical v3 design (tools/lib/manual-page.mjs, shipped). The /manuals INDEX (content/manuals/index.md, built by tools/build-manuals-page.mjs) still uses its older design. The approved Claude Design canvas has an isManuals screen (project af74967e-…, blocks extracted to scratchpad/design-import/isManuals.html): burgundy hero + page-snapshot, Published editions list + shared bibliographic record + one-DOI-across-four note, What-is-inside 5 parts, Manual-and-web comparison, Editions-and-revisions, Forthcoming grid. Port build-manuals-page.mjs to emit that, driven by the same frontmatter-hero/rail mechanism (type: manuals-index → Library badge already wired in HeroBand).
- done when: /manuals index renders the isManuals hero + Published-editions + What-inside + Manual-vs-web + Forthcoming sections; design-lint + check:v3 pass; matches scratchpad/design-import/isManuals.html

### OI-20260819-index-em-dash-enforcement — Index has no em-dash enforcement; genuine-prose subset of ~25k text-node em dashes violates docs/writing-style.md:35

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/ (new dedash-content.mjs + reuse cert tools/lib/dedash.mjs pattern)`, `generators emitting prose em dashes: regulators pages, regulations/index, log.md->log.html, batch-reports`, `quartz/components/TopNav.tsx (shared aria-label "Heavy Metal Index — home", one per page)`, `docs/writing-style.md (rule lives here, unenforced)`
- repro: node scan of Index public/ text nodes (attributes stripped) = 25,313 em dashes across 3,266 pages. Sample: genuine prose overuse on regulators/us-fda ("Guidance — action levels"), regulators/eu-commission ("Binding — legally enforceable"), regulations/index ("comparison surface — start here"), log.html, batch-reports. The MAJORITY is EXEMPT citation text (source titles e.g. greenseal "… — Edition 7.8"; corpus "FM_id (year) — Title"; reference-list entries e.g. "JECFA — …") and citation metadata in data-title/data-journal/data-authors attributes. Index has NO dedash tool; the cert now has one (tools/lib/dedash.mjs + dedash-content.mjs + postbuild-cert-dedash-jsonld.mjs + design-lint nav guard).
- done when: Port the hardened dedash approach to the Index with citation-AWARE masking: exempt data-title/journal/authors attributes, source/corpus paper titles, and reference-list entries; only rewrite genuine prose; Fix the shared TopNav aria-label em dash; Verify punctuation-only (word-integrity diff): 0 genuine-prose em dashes in text nodes, ALL citation titles byte-identical; Wire into Index prebuild + a --check gate so it stays enforced; Manual production deploy (index is manual: gh workflow run manual-production-deploy)
- decision: _pending_

### OI-20260818-worktree-branch-congestion — Worktree/branch congestion cleared: 7 worktrees + 54 merged branches removed; hero-v3 (2485 files) preserved+removed

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `cert + index worktrees/branches`
- repro: RESOLVED 2026-08-18. Removed 7 clean/stranded worktrees (6 clean+merged + hero-v3) and 54 merged local branches (cert 69->39, index 81->57). hero-v3 (feat/v3-bodies: 607 behind origin/main, 2wk stale, 27 commits + 2485 dirty files) was a stranded superseded v3 lane — snapshotted to origin/feat/v3-bodies (commit f0e2863e, --no-verify) and its worktree removed; nothing lost, nothing shipped (superseded). REMAINING minor dirty worktrees left untouched (small/possibly-active): index ~/Desktop/hmi-redesign-live (29 dirty), ~/Desktop/hmi-main-work (1), ~/Desktop/hmi-redesign-metals (unmerged), ~/hmi-work/std-outstanding (unmerged); cert ~/Desktop/heavymetalcertified-design-import (3). Rest are .claude/worktrees (agent-managed, git worktree prune when idle).
- done when: big stranded lanes (big-8, hero-v3) preserved+cleared (done); merged branches/worktrees pruned (done); remaining minor dirty worktrees: commit-or-discard at leisure (low priority)
- decision: _pending_

### OI-20260818-vercelignore-missing — No .vercelignore: gitless `vercel deploy --prod` source upload fails 'Request body too large' (sites/ 475M + public/ 352M)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `.vercelignore`
- repro: vercel deploy --prod (source upload) errors 'Request body too large. Limit: 10mb' because the repo root has no .vercelignore and the untracked sites/ (475MB ICS scaffold) + public/ (352MB build output) get bundled. Today's deploy used the prebuilt path instead (vercel build --prod && vercel deploy --prebuilt --prod). Durable fix: add .vercelignore excluding sites/, public/, node_modules/, raw/, .vercel/output, .git so the simple source-deploy path works.
- done when: .vercelignore excludes sites/, public/, node_modules/, raw/; vercel deploy --prod succeeds without the body-size error

### OI-20260818-subcategory-v3-generalize — v3 Subcategory layout: 26 data-backed rows DONE; remaining ~380 blocked on risk-map driver coverage

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `tools/build-subcategory-v3.mjs`, `wiki/products/`, `wiki/static/category-risk-maps.json`
- repro: DONE (committed 0f702cb73, local main, not pushed): tools/build-subcategory-v3.mjs generalized the v3 isProduct layout to the 25 non-golden risk-map-covered product pages (26 incl the golden). Driver metals use a defensible top-3-ranked-metal rule (no share-max artifacts); quick-read summaries preserved (lossless); firewall + link-integrity exit 0. REMAINING: the other ~380 product-category pages have NO risk-map driver data, so they get no ingredient-drivers section. To extend coverage, the risk-map build (tools/build-category-risk-maps.mjs) must resolve ingredient drivers for more categories (needs ingredient_targets that map to ingredient pages with contamination data), OR those rows stay hero+limits-only until their evidence lands. Re-running the generator after risk-map coverage grows will pick up newly-covered pages automatically (idempotent).
- done when: risk-map driver coverage extended beyond the current 26 rows (build-category-risk-maps resolves more categories); re-run tools/build-subcategory-v3.mjs; newly-covered rows get the full v3 subcategory layout; firewall-no-threshold and link-integrity exit 0; no driver card foregrounds a non-top-3 metal or fabricated occurrence
- decision: _pending_

### OI-20260818-species-parent-coherence-audit — Audit all compiled dirs for species>parent incoherence + add a compiler invariant

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `tools/standards/compile-cat17.mjs`, `data/workbench/standards`
- repro: compile-cat17 emitted iAs=100 > tAs=50 on pet-milk-replacers because a scan hit (line 203) fires before the control_only fallback (line 249); control_only is honored only when no sovereign value exists unless override:true is set. Fixed that one config, but the pattern is general: any species cell (iAs/MeHg/Cr-VI) can be emitted above its parent (tAs/tHg/Cr) whenever a stray sovereign value scope-matches. The cert panel-coherence-lint only sees compiled dirs copied into the cert repo, so bespoke categories whose records live only in the index repo were never checked.
- done when: Run panel-coherence over every data/workbench/standards/*-compiled dir; Add a general compiler guard: demote a species cell to reflex control (bounded_by parent) whenever it would exceed its parent total; Zero species>parent across all categories
- decision: _pending_

### OI-20260818-regindex-dup-update-history — wiki/regulations/index.md renders two identical '## Update history' blocks (duplicate hmi-page-history markers)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `wiki/regulations/index.md`
- repro: grep -c 'BEGIN: hmi-page-history' wiki/regulations/index.md -> 2 (also 2 on origin/main; pre-existing, not caused by the orphan fix). The page renders the Update-history section twice. A page-history generator/injector double-wrote the marker block. Fix: de-dupe to a single hmi-page-history block and make the injector idempotent when its markers already exist.
- done when: wiki/regulations/index.md has exactly one BEGIN: hmi-page-history block; the page-history injector is idempotent (re-run adds no second block)

### OI-20260818-manuals-rollout-scope — Manuals rollout: ~26 categories still lack a /manuals web edition; decide light-vs-full

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `data/standards`, `content/manuals`, `data/manuals/manifest.json`
- repro: Only 5 of ~31 categories now have a /manuals web edition (infant[full+PDF], grains, seafood, dairy, pet-foods). Standards for ALL categories are already live at /standards. The generic build-category-manual.mjs can render the rest deterministically, but most category configs lack a manual_method_note (only cat24 was pre-authored; grains/seafood/pet-foods now done). Some cats are gated by open data holds documented in data/manuals/manifest.json (seafood seaweed-iAs, culinary-oils round-down, salt geology). Also: /manuals is not in the site nav.
- done when: Karen decides (A) light web editions for all data-clean cats now vs (B) full published+DOI manuals like infant; Method notes authored for the chosen set; Data-held cats explicitly deferred; Decide whether /manuals gets a nav entry
- decision: _pending_

### OI-20260818-link-orphans-stale-v3 — link-orphans.mjs regresses the v3 ingredient/product indexes (re-adds removed flat list, drops product source-counts)

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/autonomy/link-orphans.mjs`, `wiki/ingredients/index.md`, `wiki/products/index.md`
- repro: node tools/autonomy/link-orphans.mjs adds 257 [[ingredients/...]] flat-list links to wiki/ingredients/index.md — a list commit 2b8943fd9 deliberately removed for the v3 category-card grid — and rewrites wiki/products/index.md dropping 46 of 417 '(N sources)' annotations (417->371). It correctly links regulations (the only category with true audit-orphans this pass). The tool predates the v3 redesign. Fix: teach link-orphans that the ingredients index uses the v3 card grid (skip it) and the products index carries source-count annotations (preserve format), or scope it to categories whose index still uses a flat stub list. Until fixed, run it for regulations only and revert wiki/{products,ingredients}/index.md.
- done when: link-orphans does not add [[ingredients/ flat links to wiki/ingredients/index.md; wiki/products/index.md retains all (N sources) annotations after a link-orphans run; regulations orphans still surface
- decision: _pending_

### OI-20260818-jecfa-arsenic-miscorrection-fixed — FIXED: prior session mis-corrected arsenic JECFA meeting (72nd->73rd); reverted on cert+index LIVE

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `cert data/analytes/analytes.json + content/analytes/arsenic.md`, `index wiki/metals/arsenic.md`
- repro: A 2026-08 edit changed the arsenic PTWI-withdrawal citation from 72nd meeting to 73rd meeting (June 2010)/WHO TRS 960 — but TRS 960 = 73rd = LEAD. Arsenic = 72nd (Feb 2010)/TRS 959. The mis-correction source_trace even falsely claimed the Index said 73rd (it says 72nd). Corrected 2026-08-18 on cert LIVE (commit 6a24395) and index main (27aff347); source_trace now spells out TRS 959=72nd=As vs TRS 960=73rd=Pb so it cannot be re-flipped. PROCESS NOTE for Karen: a prior session confidently made a wrong regulatory correction with a fabricated cross-reference — worth a spot-check of other 2026-08 citation corrections.
- done when: cert arsenic page cites 72nd/TRS959 (done); index metals/arsenic prose cites 72nd (done); Karen aware a prior session mis-corrected a live citation

### OI-20260818-fsis-label-approval-hmtc-logo — FSIS label-approval pathway for HMT&C logo on meat/poultry/egg (and meat-based) products — certifier documentation packet + askFSIS terminology inquiry

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `wiki/heavy-metal-tested-certified.md`, `docs/governance/`
- repro: FSIS (9 CFR 412) requires prior label sketch approval via LSAS for third-party certification claims on FSIS-regulated products (meat/poultry/egg; includes meat-based human bone broth). FSIS scrutinizes clean/pure/purity vocabulary — Clean Label Project had to amend its FSIS-facing seals. HMT&C name (Tested & Certified = verifiable factual claim, not a purity claim) is well-positioned by contrast but is untested with FSIS. Certifier cannot get blanket program pre-approval; must (a) equip brands with a compliant logo/documentation packet and (b) optionally file an askFSIS Labeling policy inquiry to pre-clear the seal wording.
- done when: Decide whether to file an askFSIS Labeling policy inquiry to pre-clear the HMT&C seal wording for FSIS-regulated products; Define the certifier documentation packet brands submit to LSAS (valid certificate, testing protocol/thresholds, ISO-accredited lab verification, trademark/logo license, public standards URL); Confirm which certified categories fall under FSIS jurisdiction (meat/poultry/egg human foods, meat-based bone broth) vs FDA (seafood, most pet food)
- decision: _pending_

### OI-20260818-effective-date-nondeterministic — build-category-standard-pages bumps effective_date to today on every regen (non-deterministic build)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/build-category-standard-pages.mjs`
- repro: Running npm run prebuild changed content/standards/butter-and-ghee.md effective_date 2026-08-17->2026-08-18 with no value change. Every prebuild dirties generic-category pages with today date, so deploy builds are non-reproducible and working-tree diffs are noisy (had to revert butter to keep the Pet Foods commit clean).
- done when: effective_date reflects the standard last value change, not the regen date; A no-op prebuild produces zero content diffs

### OI-20260818-design-branch-audit — Design-branch audit: citation slide-over shipped to cert LIVE; all other unmerged design lanes are stale/superseded

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `all worktrees + unmerged branches, both repos`
- repro: 2026-08-18 audit of every worktree + unmerged branch (both repos) for design work not on origin/main. RESULT: (1) feat/citation-slideover (cert, Aug 13) was the ONE genuine unshipped design enhancement — a complete, canon-documented rebuild of the citation source drawer into an accessible right-side slide-over; a prior session built it to ship (canon doc says landed) but it never merged. Cherry-picked onto current main (clean; only docs/findings.md conflicted, a generated view), verified working on dev + LIVE (opens on citation click, no scroll-jump, correct source record, flush right-anchored dialog + scrim), shipped to cert LIVE (a778115). (2) Everything else is STALE/SUPERSEDED — redesign-metals/redesign-live (Jun 23 v3 prototypes now live as current v3), home-v3-recover (recovery already landed; rest behind main), brand-control-architecture + navigation-preview (design DIRECTIONS, main advanced past all files), site-audit-fixes, etc. — shipping any would REGRESS live. (3) Nothing from today was lost; today design work (scroll+depth, /ask, metals/products v3, home counts, arsenic, visible scroll button) all live+verified.
- done when: genuine unshipped design work identified + shipped (done: citation slide-over); stale lanes confirmed non-shippable (done); OPTIONAL follow-up: port the citation slide-over to the INDEX site (it still has the older in-rail panel) — that is NEW work, not lost work

### OI-20260818-deploy-blocker-rediagnosis — Deploy blocker was build-open-data drift (8 dangling cite-keys), NOT link-integrity — resolved; 17 orphaned regs remain a non-blocking quality item to link

- scope: **auto** · type: finding · status: open · repo: index
- paths: `tools/build-open-data.mjs`, `tools/audit-link-integrity.mjs`, `wiki/regulations/`
- repro: OI-20260818-orphaned-regulations-block-deploy claimed main is un-deployable via build-blocking audit-link-integrity; audit-link-integrity is non-strict in prebuild (exits 0, blocks only with --strict). The real blocker was build-open-data.mjs (process.exit(1) on 8 ingredient->source drift contradictions), since fixed by the synthesis pipeline so main prebuild is green and deployed 2026-08-18 (domain migration cbedbcc78). The 17 orphaned regulation pages are real but NON-blocking; link them from a wiki/regulations parent/index for discoverability.
- done when: ledger reflects build-open-data as the historical deploy blocker, not link-integrity; 17 orphaned regulation pages reachable from a wiki/regulations parent/index page; npm run prebuild stays green

### OI-20260818-dedup-residual-dangling-refs — Dedup e0f4705c7 left dangling original2020-original-a refs in product pages + evidence CSVs

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `wiki/products/cereal-meals.md`, `wiki/products/biscuits.md`, `wiki/products/infant-formula-stage1.md`
- repro: The dedup repointed 132 links but missed carried-forward table/citation cells. The 5 ingredient-page cases were fixed in 68af3fa51 (they blocked build-open-data). Residual dangling original2020-original-a refs remain OUTSIDE the drift-gated ingredient set: wiki/products/{cereal-meals,biscuits,infant-formula-stage1}.md and several data/evidence/*.csv. build-open-data only checks wiki/ingredients so these don't block the build, but they are dangling links. Repoint per the dedup canonical map (original2020-original-a -> alharbi2023-baby-foods-saudi-arabia-heavy-metals).
- done when: grep -rl 'original2020-original-a' wiki/ returns nothing; grep -rl 'napier2024-wanabana-apple-cinnamon-puree-lead-NC' wiki/ returns nothing

### OI-20260818-crosswalk-fda2020-broken-slug — Crosswalk cites a nonexistent regulation slug fda2020-inorganic-arsenic-infant-rice-cereal

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/apply-product-crosswalk-sections.mjs`, `wiki/products/baby-cereals-dry-rice-based.md`, `wiki/products/baby-cereals-dry-non-rice.md`
- repro: The hmi-product-crosswalk block on 2 baby-cereal product pages links [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]], which does not exist. The real page is regulations/fda-iAs-rice-cereal-100ppb. Fix the slug in the crosswalk generator source so the citation resolves.
- done when: no product page references regulations/fda2020-inorganic-arsenic-infant-rice-cereal; the iAs infant-rice-cereal citation resolves to regulations/fda-iAs-rice-cereal-100ppb; link-integrity exits 0

### OI-20260818-cert-ofm-tsc-error — cert npm run check (tsc) fails on vendored quartz/plugins/transformers/ofm.ts:511 — string vs string[]

- scope: **auto** · type: code-fix · status: open · repo: cert
- repro: cd ~/Desktop/heavymetalcertified && npx tsc --noEmit → quartz/plugins/transformers/ofm.ts(511,21): error TS2322: Type string is not assignable to type string[]. Pre-existing (vendored Quartz core, not touched by Tier B). Does NOT block deploys (build is esbuild-based; prebuild has no tsc gate), but npm run check is red. Noticed while typechecking the Tier B citation-panel change (which is clean).
- done when: npx tsc --noEmit exits 0 in the cert repo; no runtime behavior change to OFM transforms

### OI-20260818-cert-home-stale-standards-counts — RESOLVED: cert home standards counts corrected 12/3/10 → 348/1,794/11 (LIVE)

- scope: **auto** · type: content · status: open · repo: cert
- repro: RESOLVED 2026-08-18 (commit a7f542b, cert LIVE): home Program snapshot updated from stale 12/3/10 to the authoritative standards-index counts (347 published standard pages + 1 in-dev; 1794 firm limits; 11 analytes/row). Follow-up remains: wire the home snapshot to derive from build-standards-pages.mjs so it cannot drift again.
- done when: home matches standards index (done); wire home counts to the generator so they auto-update (OPEN follow-up)

### OI-20260818-cert-deploy-stall — RESOLVED (false alarm): cert deploys were landing; my verification matched the rail TOC Abstract link, not the heading

- scope: **auto** · type: finding · status: open · repo: cert
- repro: The claim-reorder + Tier A DID deploy. My live check compared byte-position of THE CLAIM vs the FIRST >Abstract< match, which was the rail On-this-page TOC link (byte 39052), rendered before the content — so a correct claim-first page read as claim-after. Proper check: THE CLAIM box (41448) precedes <h2 id=abstract> (42013) = claim-first, live + correct on heavymetalcertified.com. Tier A also confirmed live (authority badge, What it establishes, smart labels) + rendered on production. Lesson: verify DOM structure/rendered pixels, not naive byte-grep against ambiguous strings.
- done when: claim above abstract live (done); Tier A live (done); use structure-aware/rendered checks, not byte-grep on ambiguous strings

### OI-20260818-cert-big8-uncommitted-tree — RESOLVED: cert dead-lane dirty tree snapshotted to archive branch + working tree reconciled to clean main

- scope: **human-gated** · type: finding · status: open · repo: cert
- repro: RESOLVED 2026-08-18: 67-file cert dead-lane (cert-canonical-orphaned Aug 11-13 snapshot) preserved on origin branch archive/cert-dead-lane-2026-08-18; feat/big-8-pillar (2 pillar commits) pushed to origin; canonical ~/Desktop/heavymetalcertified reconciled to clean origin/main; stale ~/hmi-work/cert-cat9-fix worktree removed. Adversarial review: 0/63 files shippable (all stale regenerations; pushing would regress live). Genuinely-new species-fork escalated as OI-20260818-cert-species-analyte-fork.
- done when: dirty tree preserved (done: archive branch on origin); working tree clean on current main (done); nothing stale pushed to live (done: 0 shipped)
- decision: _pending_

### OI-20260818-cat17-fish-mehg-gap — Cat-17 fish-based pet food: MeHg is an unaddressed gap, should be bounded by tHg (or given a seafood MeHg read-across)

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `tools/standards/cat17-config.json`, `data/workbench/standards/cat17-compiled/pet-food-fish-marine-protein.json`
- repro: On pet-food-fish-marine-protein the seafood-marine profile sets tHg=300 but leaves MeHg with no read_across, so it compiles to a bare gap (renders as "—" on the standard page + manual). For fish, MeHg is the toxic species of concern; cat6 Seafood uses dual mercury (tHg+MeHg). Cat-17 fish should either read across a human-seafood MeHg limit or explicitly declare MeHg bounded_by tHg (reflex), not leave it blank.
- done when: MeHg on fish-based pet food is either a numeric read-across or an explicit bounded_by:tHg control; No bare-gap species cell on any cat17 fish subcategory; Consistent with cat6 seafood dual-mercury treatment
- decision: _pending_

### OI-20260817-wa-tfca-general-cosmetic-lead — Washington TFCA may set a 1 ppm finished-cosmetic lead cap; if so, 13 Category 2 child rows publish lead 2x too loose

- scope: **human-gated** · type: finding · status: queued · repo: index
- paths: `data/evidence/regulatory_limits.csv`, `tools/standards/cat2-config.json`, `wiki/sources/wa-tfca-hb1047-2023.md`, `wiki/regulations/washington-tfca-toothpaste-pb-1000ppb.md`
- repro: data/evidence/regulatory_limits.csv contains exactly one Washington TFCA row: wa_tfca_pb_toothpaste_1000, product_scope "toothpaste", basis "product as sold", Pb 1000. But wiki/sources/wa-tfca-hb1047-2023.md (Key numbers) records "Lead in other cosmetic products: the TFCA establishes lead caps with applicability to lipsticks, eye products, makeup, hair-care, and other personal-care items at the same 1 ppm finished-product level", and wiki/regulations/washington-tfca-toothpaste-pb-1000ppb.md records "The TFCA covers cosmetic products including toothpastes, lipsticks, makeup, hair-care products, and other personal-care items... The lead cap applies to finished product as sold." Both wiki pages record the statutory citation as "TBD - direct citation pending ingest", so the general-cosmetic scope is asserted in the corpus but not yet traced to statute. If the general 1 ppm cap is real, US-WA is already inside Category 2 credible set and 13 Category 2 rows currently bind Pb 2000 (de_bvl2017_pb_cosmetics_general_2000) when a stricter applicable sovereign statutory value of 1000 exists; the same would apply to Categories 13, 14 and 20. A remediation agent attempted to fix this by REWRITING the existing register row scope from "toothpaste" to "cosmetic products sold in Washington State"; that edit was reverted because broadening a sovereign instrument in the register must be traced to the statute, not inferred from a wiki page whose own citation is pending.
- done when: RCW 70A.560 / HB 1047 (Ch. 365, Laws of 2023) statutory text is read and the lead cap scope is quoted verbatim into wiki/sources/wa-tfca-hb1047-2023.md with a real citation replacing the TBD; If a general finished-cosmetic 1 ppm lead cap is confirmed, a NEW register row is added (not a rewrite of the toothpaste row) and named in the Pb cells of the applicable Category 2, 13, 14 and 20 rows; The TFCA cadmium, mercury and arsenic provisions the same source page references are either ingested or recorded as confirmed-absent; Category 2 recompiles and re-gates clean, and any moved value is recorded in the derivation report
- decision: **APPROVE: Verified against RCW 70A.560.020 + WA Ecology WAC 173-339 on 2026-08-17. Confirmed a general finished-cosmetic 1 ppm (1000 ug/kg) lead cap covering impurity lead, effective 2025-01-01; Cd/As not under TFCA (Children's Safe Products Act); Hg intentionally-added-only. Enacted on feat/standards-outstanding-cats: new register row wa_tfca_pb_cosmetics_general_1000 traced to statute, 34 clearly-cosmetic rows in Cat 2/13/14 moved 2000->1000, OTC-drug and non-cosmetic forms excluded and disclosed, wiki citations resolved. No live-standard impact (Cat 15/20 already <=500). In PR #122/#44.**

### OI-20260817-taxonomy-v22-phaseb-stale — hmtc-v2.json still carries dissolved Category 7 rows and no slug aliases, so every coverage report overstates the standards gap

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/taxonomy/hmtc-v2.json`
- repro: data/taxonomy/hmtc-v2.json v2_2_changelog states: "Phase B (staged): Cat 7 dissolves - its 9 shipped rows re-home to Cat 30/31/32/33/34, butter+ghee to Cat 24, snacks to Cat 3, mixed-meals to Cat 35." Phase B was never applied to the categories[] array: categories[n=7] still lists 12 subcategory rows including honey-and-syrups, condiments-general, cocoa-chocolate-products, herbs-spices-dried-seasonings, snacks-general, canned-foods-general and mixed-meals-prepared-foods, all of which are shipped under their new categories. Separately, several taxonomy slugs are published under a different cert page slug (taxonomy infant-formula-rtf-liquid -> cert page infant-formula-ready-to-feed; fruit-purees-general -> fruit-purees; root-vegetable-purees-single-ingredient -> root-vegetable-purees; fruit-juice -> fruit-juice-not-canned) and the mapping lives only in the cert repo data/standards/cat1-pages.json variants[].record field. Consequence: joining the taxonomy against published cert pages reports Cat 1 as 8/9 and Cat 7 as 5/12 when both are actually complete-or-superseded, so any automated gap or readiness report is wrong in both directions.
- done when: Apply taxonomy v2.2 Phase B: mark categories[n=7] dissolved (or remove its re-homed rows) with an explicit superseded_by pointer per row to the category that now ships it; Record the taxonomy-slug -> cert-page-slug aliases in the taxonomy itself (or in a single mapping file in the index repo) rather than only in the cert repo pages.json; A coverage join of taxonomy rows against published cert standard pages reports Cat 1 as complete and does not report dissolved Cat 7 rows as gaps
- decision: _pending_

### OI-20260817-standards-methodology-doc-stale — docs/standards-methodology.md still documents the retired occurrence-based publishing rule (P97 / literature-baseline)

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `docs/standards-methodology.md`
- repro: docs/standards-methodology.md section "The publishing rule (locked 2026-07-29)" (around line 78) presents a table: pooled_n>=99 -> publish pooled P97 with tag literature-baseline; pooled_n<99 + cap -> regulatory-alignment; and prose defending "a literature-derived percentile is published only when the sample supports a one-sided 95% bound." Method v2.0 (ratified 2026-08-03, CLAUDE.md Part 19) retired the occurrence-selected/literature-baseline pathway entirely: initial values are the strictest applicable sovereign ML by lookup, never a pooled percentile. This doc is referenced by CLAUDE.md Part 19 (See [[docs/standards-methodology]]) as the methodology reference, so a session reading it is told the retired method is current. The cert-side method-drift-lint does not scan the index repo docs.
- done when: The occurrence-selected/literature-baseline publishing-rule section is rewritten to Method v2.0 (government-limit default) or clearly marked SUPERSEDED with a pointer to the current rule; docs/standards-methodology.md no longer presents literature-baseline / pooled-P97 as a live rationale tag; A note or pointer to docs/governance/orientation-values-selectability-2026-08-17.md is added where anchor selection is discussed
- decision: _pending_

### OI-20260817-standards-export-omits-39 — Open-data standards export omits 39 live standards (Cats 9, 12, 17) because they bypass the pages.json manifests

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `tools/build-standards-export.mjs`, `content/static/data/standards.json`, `content/static/data/standards.csv`, `content/static/data/catalog.json`
- repro: In the cert repo after a full prebuild: build-standards-export reports "309 standards, 1708 firm analyte cells" while content/standards/index.md lists 348 subcategory standards. Diffing the two gives 39 pages present on the index and absent from standards.json: the 8 Category 9 contact-product rows, the 21 Category 12 household-cleaning rows, and the 10 Category 17 pet-food rows. All 39 are live pages on heavymetalcertified.com. The cause is enumeration: the export walks the data/standards/*-pages.json manifests, and those three categories were rendered by dedicated builders (build-cert-cat9-pages.mjs, build-cert-cat17-pages.mjs) rather than through a manifest, so they have none. Consequence: a regulator or retailer downloading the machine-readable open-data surface receives 309 of 348 standards with no indication that 39 are missing, and two surfaces on the same site report different totals.
- done when: standards.json, standards.csv and catalog.json contain every standard page in force, or the export documents an explicit, justified exclusion list; The export total and the /standards index total agree, or each states what it counts; Either Cats 9, 12 and 17 gain data/standards/catN-pages.json manifests, or build-standards-export enumerates published pages rather than manifests; A check fails the build when a page in content/standards carrying custom_page:true is absent from the export
- decision: _pending_

### OI-20260817-notmaterial-unsubstantiated-live — Live categories 30/31/32/33/34 publish not-material cells with no substantiation in either the record or the registry

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat30-compiled`, `data/workbench/standards/cat31-compiled`, `data/workbench/standards/cat32-compiled`, `data/workbench/standards/cat33-compiled`, `data/workbench/standards/cat34-compiled`, `data/evidence/standards-not-material.csv`, `tools/standards/sync-not-material.mjs`
- repro: node tools/standards/audit-compiled-standards.mjs --dir=data/workbench/standards/cat32-compiled  -> FAIL [C7] fish-sauce :: Ni: not-material basis_class "" is not in the substantiation-gate vocabulary (checked neither). The compiled record carries type:not_material with no basis_class / regulatory_basis / jurisdictions_checked, AND there is no matching row in data/evidence/standards-not-material.csv (cut -d, -f1 data/evidence/standards-not-material.csv | grep -E "vinegar|soy-sauce|tomato|mustard|fish-sauce" returns nothing). Because the build-blocking gate tools/evidence/audit-not-material-substantiation.mjs only audits rows that are IN the registry, an unregistered not-material determination is invisible to it and ships live. These categories are live on heavymetalcertified.com. Survey across all 18 compiled dirs: node tools/standards/audit-compiled-standards.mjs --all
- done when: Every not_material cell in cat30/31/32/33/34 configs carries basis_class (from the six-term CLASS_VOCAB), rationale, regulatory_basis and jurisdictions_checked, plus bounded_by where speciation-bounded; Each affected compiled dir is re-synced: node tools/standards/sync-not-material.mjs --dir=data/workbench/standards/catNN-compiled; node tools/standards/audit-compiled-standards.mjs --dir=<each dir> exits 0 on C7; A registry-coverage check is added so a not-material cell that is absent from standards-not-material.csv fails the build instead of bypassing the substantiation gate silently
- decision: _pending_

### OI-20260817-method-v2-json-stale-tags — Cert canonical method spec still lists the three retired numeric rationale tags as current

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `data/method/method-v2.json`
- repro: In ~/Desktop/heavymetalcertified, data/method/method-v2.json line ~17 reads: "rationale_tags": ["literature-baseline", "regulatory-alignment", "precautionary", "feasibility-driven"]. CLAUDE.md Part 19 states the current provenance vocabulary is regulatory-alignment, read-across, not-material, control, ratchet, and that precautionary, feasibility-selected and literature-baseline numeric rationales are retired. This file is the canonical method statement that tools/method-drift-lint.mjs reads to police prose, so the document that defines what counts as method drift is itself asserting the retired vocabulary. It also omits read-across, not-material and control entirely. Separately, the same file summarises "the four rationale tags are unchanged" under unchanged_downstream.
- done when: rationale_tags lists exactly regulatory-alignment, read-across, not-material, control, ratchet; The unchanged_downstream sentence no longer asserts four unchanged rationale tags; tier1_analytes/tier2_analytes are reconciled against the live per-category pages.json tier splits (the spec lists 4+4, the category manifests use 5 Tier-1 including tHg and 6 Tier-2 including tAs and Cr); node tools/method-drift-lint.mjs still passes after the spec edit
- decision: _pending_

### OI-20260817-cert-promote-pr30-pr31 — Stranded built work: cert PR #30 (brand journey + remediation reconciliation, 16 files) and PR #31 (hero reframe) are MERGEABLE/CLEAN and unpromoted since 2026-08-13

- scope: **auto** · type: promote · status: open · repo: cert
- paths: `content/what-if-we-dont-pass.md`, `content/category-readiness.md`, `tools/build-category-readiness.mjs`, `content/brand-bill-of-rights.md`, `content/index.md`
- repro: cd ~/Desktop/heavymetalcertified && gh pr view 30 --json mergeable,mergeStateStatus -> MERGEABLE / CLEAN; gh pr view 31 -> MERGEABLE / CLEAN. #30 'Ship the honest brand journey + remediation reconciliation (verified · check:v3 green)' carries content/what-if-we-dont-pass.md, content/category-readiness.md + tools/build-category-readiness.mjs (a GENERATOR, which is exactly what the audit asks for instead of hand-authored readiness), content/program/remediation.md + remediation-postcert-protocol.md, content/brand-bill-of-rights.md, apply/portal/verify/structure edits. #31 is the single-file hero reframe Karen already decided to promote. Both have sat open for four days. This is the Part 28 built-but-unshipped failure mode: the work exists, it is green, and no one promoted it.
- done when: Each of the 16 files in #30 judged individually against the corrected sequencing, not merged wholesale; PROMOTE what is institutionally true today: what-if-we-dont-pass (result-consequence matrix), category-readiness + its generator, the #31 hero reframe; HOLD content/brand-bill-of-rights.md until each commitment is enforceable through a contract, SOP or system control — a published right that is only a sentence is a representation an applicant relies on; HOLD content/program/remediation-postcert-protocol.md until OI-20260813-cert-remediation-live-promise is ruled on; Nothing is left OPEN without a written reason; superseded PRs are closed with the reason recorded; Whatever is promoted lands on main green (cert main = LIVE) and the ledger records what shipped and what was held

### OI-20260817-cert-program-state-model — Build the canonical program-state model so public pages stop owning operative facts

- scope: **auto** · type: code-fix · status: open · repo: cert · blocked_on: OI-20260817-cert-home-faq-stale, OI-20260817-cert-program-counts-generated, OI-20260813-cert-remediation-live-promise, OI-20260817-cert-ci-quality-gates-missing
- paths: `data/`, `content/`
- repro: Every operative fact a brand acts on is currently typed into a page: subcategory counts (index.md 12 / apply.md 15 vs 150 live), timelines ('4-8 weeks'), open-subcategory eligibility, fee coverage, mark rights per status, remediation consequences, analyte panel size. Each is separately maintainable and therefore separately wrong — which is how the site arrived at four mutually inconsistent statements about its own program. The audited plan calls this the missing constitutional layer: one machine-readable object from which readiness, status, mark rights, fees, panel requirements and public visibility are all generated.
- done when: One versioned data/program-state.json: scheme owner, program operator, certification decision authority, scheme version, supported product domains, per-category readiness with the gates each requires, standard editions, analyte + sampling + laboratory requirements, evidence-reuse rules, result classifications, status transitions, mark rights per status, public-visibility rules, fee classes, appeal route, surveillance requirements, change-control triggers; A category is emitted as 'open for certification' only when every gate is complete; readiness states otherwise are private-readiness-only / evidence-review / consultation / not scheduled; index.md, apply.md, for-brands, category-readiness and verify all consume it; a lint fails the build on an operative fact authored in content/; Depends on the method spec (OI-20260817-cert-home-faq-stale), counts (OI-20260817-cert-program-counts-generated), fees (OI-20260817-cert-fee-statement-conflict) and remediation (OI-20260813-cert-remediation-live-promise) being settled first — the model encodes institutional truth, it does not invent it

### OI-20260817-cert-program-counts-generated — Homepage says 12 subcategory standards, /apply says 15, and 150 are live — hand-authored program counts on the two highest-intent pages

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `content/index.md`, `content/apply.md`, `tools/`, `content/static/data/standards.json`
- repro: cd ~/Desktop/heavymetalcertified. git show origin/main:content/index.md | grep -o 'Subcategory standards</span><span[^>]*>[0-9]*' -> 12. git show origin/main:content/apply.md | grep -o 'Subcategories open", v: "[0-9]*' -> 15. Actual: git ls-tree -r --name-only origin/main content/standards/ | grep -vci 'manual|index' -> 150 subcategory standard pages live, 1068 published analyte cells in content/static/data/standards.json. Both figures are typed into prose, both are wrong, they disagree with each other, and they understate the program by an order of magnitude on the two pages a brand reads first. Same class as the audit finding that a public count should be a query result, not a sentence.
- done when: tools/build-program-snapshot.mjs derives every public program count (subcategory standards published, categories open, analytes per row, cells published, current edition) from content/static/data/standards.json + the category readiness source, and writes one generated JSON; content/index.md and content/apply.md consume the generated values; no count is typed into prose; A lint fails the build when a hand-authored integer appears in a program-count slot on index.md or apply.md; Added to prebuild so the counts cannot go stale between deploys; npm run build green; deployed to main (LIVE)

### OI-20260817-cert-missing-regulation-pages — 32 instruments now cited by compiled standards have no cert /regulations page, so 925 cells render unlinked

- scope: **auto** · type: content · status: open · repo: cert
- paths: `content/regulations/`, `tools/build-cert-regulation-pages.mjs`
- repro: The cert renderer now links each cell to the instrument it was actually derived from (build-category-standard-pages.mjs regForCell) instead of to a per-jurisdiction stand-in page. content/regulations/ holds 41 pages, essentially all food-law instruments. The 15 newly published categories are largely non-food, so 32 distinct instruments cited by compiled cells have no page and render as unlinked label text. Largest: germany-bvl-2017-technically-avoidable-heavy-metals-cosmetics (210 cells), eu-2009-48-toy-safety-migration-limits (168), eu-10-2011-food-contact-plastics-sml (104), china-cosmetics-safety-technical-standards-2015 (52), korea-mfds-2025-63-cosmetics-safety-standards (47), eu-2024-1987-nickel-maximum-levels (27), astm-f963-soluble-migration (21), eu-2020-2184-drinking-water (19), us-cpsia-lead-childrens-products. Also note the register slug and the existing cert page slug diverge for instruments that DO have a page (register regulations/eu2023-contaminants-maximum-levels vs cert eu-2023-915), so some food cells lost a link they previously had via the jurisdiction fallback. Unlinked is correct behaviour versus citing the wrong instrument, but the links should come back.
- done when: A cert /regulations page exists for each of the 32 instruments, generated the same way the existing 41 are; Register regulation_page slugs and cert regulation page slugs are reconciled, or a single explicit alias map is added so both resolve; Every compiled cell that names an instrument renders a working link to that instrument on its standard page; regulatory-link-lint continues to pass

### OI-20260817-cert-mark-repro-spec — The certification mark is being distributed from two live pages with an explicit admission that no reproduction specification exists

- scope: **auto** · type: content · status: open · repo: cert
- paths: `content/mark.md`, `content/apply.md`
- repro: cd ~/Desktop/heavymetalcertified. Both git show origin/main:content/mark.md and git show origin/main:content/apply.md offer 'Primary SVG' and 'Reversed SVG' downloads directly beside the sentence 'No reproduction spec published yet — Program Manual Part 2.5 governs who may display the mark... but sets no minimum size, clear space or color-reproduction rules. Those belong in a mark usage guide that does not exist yet.' A certification mark is a controlled legal instrument (USPTO serial 99307306 per the page's own snapshot); shipping the artwork before the spec means the first packaging runs define the spec by accident, and a brand cannot assess packaging feasibility before committing. Note the mark ARTWORK itself is a brand-identity fork and stays Karen's; authoring the reproduction rules around the existing artwork is not.
- done when: Reproduction guide published: approved variants (full-colour, monochrome, reverse, small-format), minimum size, clear space, background rules, print + digital colour values, contrast floor, required scope line wording, QR pairing, prohibited alterations; Usage rules published: product-versus-brand scope, ecommerce and marketplace-thumbnail use, retailer use, artwork-approval route and service level, suspension/removal, obsolete-packaging exhaustion, misuse response; The approved-claims kit sits with it: what the mark asserts, what it does not, the prohibited list already on /mark, and the exact permitted claim sentences a marketing team may copy; The 'No reproduction spec published yet' admission is removed because the spec exists; every rule traces to Program Manual Part 2.5 or the new guide; Artwork downloads and the guide ship together; design-lint + check:v3 green; deployed to main (LIVE)

### OI-20260817-cert-home-faq-stale — Cert's canonical method spec data/method/method-v2.json still ENCODES the retired occurrence-selected method and enforces it build-blocking; homepage + /program/structure narrate it live while zero live cells use it

- scope: **auto** · type: content · status: open · repo: cert
- paths: `data/method/method-v2.json`, `tools/method-drift-lint.mjs`, `content/index.md`, `content/program/structure.md`
- repro: cd ~/Desktop/heavymetalcertified. ROOT CAUSE (new, upstream of the prose): git show origin/main:data/method/method-v2.json — the file that declares itself 'the SINGLE SOURCE OF TRUTH for how the program's method is described' and drives the build-blocking tools/method-drift-lint.mjs still states selective_occurrence_tier1 = 'The four Tier-1 toxics (Pb, Cd, iAs, MeHg) are set to min(occurrence percentile, strictest government ML)', occurrence_calibration = 'a cleaner subcategory sits near P97 and a more contaminated one near P45', and rationale_tags = [literature-baseline, regulatory-alignment, precautionary, feasibility-driven]. Method v2.0 as ratified 2026-08-11 (CLAUDE.md Part 19; index commit 880cf9722 'Retire occurrence-selected HMTc methodology', 2026-08-12) is government-limit-ONLY: occurrence evidence does not select the initial value for Tier 1 or Tier 2, and three of those four tags are retired (current vocabulary: regulatory-alignment / read-across / not-material / control / ratchet). The lint's requires_anchor rule PERMITS the drift: prose that pairs a pooling phrase with the word 'government' passes, so content/index.md:42,:44,:76 and content/program/structure.md:57,:100,:121,:128 narrate the retired method on the flagship pages and the build stays green. DE-RISKING EVIDENCE (new): the published numbers are already correct — git show origin/main:content/static/data/standards.json | tally control_basis -> 546 government-limit, 257 government-read-across, 265 controlled-screen, ZERO occurrence-selected across 1068 cells. So this is a prose+spec correction with no numeric consequence, which is why it is scope_class auto rather than a methodology decision. Part 2 relevance: presenting HMTc limits as occurrence-derived is exactly the second direction of drift CLAUDE.md Part 2 exists to prevent.
- done when: data/method/method-v2.json restated to government-limit-only: selective_occurrence_* keys removed, occurrence_calibration removed or moved under a clearly-marked superseded_history block, rationale_tags = [regulatory-alignment, read-across, not-material, control, ratchet], authority/ratified updated to CLAUDE.md Part 19 / 2026-08-11; tools/method-drift-lint.mjs forbids (not merely anchors) any claim that occurrence/pooling/percentile SELECTS a limit, and forbids the three retired tag names in current content; The lint fails on the pre-fix content/index.md and content/program/structure.md (prove it catches the real drift before the sweep, e.g. git stash the content fix and re-run); Every content/ + data/briefings/ page swept: no live page states that pooled occurrence tightens or sets an HMTc limit; npm run check && npm run build && npm run check:v3 all green; deployed to main (cert main = LIVE production)

### OI-20260817-cert-for-brands-decision-surface — Rebuild /for-brands as one decision surface generated from program state, not a link directory

- scope: **auto** · type: content · status: open · repo: cert · blocked_on: OI-20260817-cert-program-state-model, OI-20260817-cert-ci-quality-gates-missing
- paths: `content/for-brands.md`
- repro: cd ~/Desktop/heavymetalcertified && git show origin/main:content/for-brands.md — the live page is a short directory pointing at standards, program and apply. It does not answer the questions that actually gate a brand's decision: what stays private, what a non-passing result triggers, whether existing COA testing counts, the complete cost, whether the category is operationally open, what happens to submitted data, what the brand receives for legal/quality/procurement/retail use. The audited plan explicitly rejects the earlier eight-to-ten-page expansion in favour of ONE surface with progressive disclosure, generated from the program-state model.
- done when: One page, eight sections: where do I stand / what do I already have / what happens next / what results trigger / what it costs / what happens to my information / what I receive / begin privately; Every operative statement reads from data/program-state.json; nothing typed; No new page is added unless the state model supports it; the technical library stays one layer deeper rather than competing for the first interaction; design-lint + check:v3 + the new cross-surface consistency gates green; Does NOT ship an on-domain intake form, account, upload or payment surface — that requires the data-governance ruling and infra sign-off (OI-20260813-cert-trust-governance-artifacts)

### OI-20260817-cert-fee-statement-conflict — Two live fee stories: /apply lists the ten-analyte panel as INCLUDED in the fee; Brief 4 says laboratory testing is an un-marked-up PASS-THROUGH

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/apply.md`, `content/briefings/brief-4-cost-of-being-uncertified.md`
- repro: cd ~/Desktop/heavymetalcertified. git show origin/main:content/apply.md -> 'What the fee covers' table lists 'Ten-analyte panel, per product form — included'. git show origin/main:content/briefings/brief-4-cost-of-being-uncertified.md:69 -> 'License fees are revenue-tiered and laboratory testing is an un-marked-up pass-through to an accredited lab, disciplined by the lab market rather than by the program.' Both live. A brand's finance reviewer will read both and conclude the program does not know its own price. /apply also routes the actual dollar figures off-domain to paleofoundation.com/pricing (3 refs on main) and states 'Revenue bands not reproduced here'.
- done when: Karen answers one question: is accredited laboratory testing (a) included in the annual fee, (b) an un-marked-up pass-through billed separately, or (c) included up to a defined panel/product-form count with overage passed through; One machine-readable fee object (program fee basis, lab treatment, sample logistics, confirmation/retest, surveillance, renewal, rush surcharges, multi-year discounts) becomes the single source; content/apply.md and every briefing that states a cost regenerate from that object; no page states a fee fact independently; A lint fails the build if 'included' and 'pass-through' both describe laboratory testing anywhere in content/
- decision: _pending_

### OI-20260817-cert-ci-quality-gates-missing — The cert repo has NO CI at all: the quality-gates workflow was added, then deleted by the same revert that undid PR #7 — so nothing prevents the next regression

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `.github/workflows/quality-gates.yml`
- repro: cd ~/Desktop/heavymetalcertified. ls .github/workflows -> does not exist on main or locally. git log --all --oneline -- .github/workflows/ -> 8cf5330 'ci: run source, build, and rendered quality gates', 0f7c6b9 'fix(ci): resolve type errors exposed by quality gates', 440a05d (PR #7), then 625574b 'revert(site): restore pre-campaign design baseline' — the revert removed the guard and the content in one change. Every lint the program relies on (firewall-cert-lint, method-drift-lint, claim-discipline-lint, briefings-index-lint, regulatory-link-lint, design-lint, check:v3) currently runs only in prebuild on a developer machine or on Vercel. This is the audit's central structural lesson: the redesign was representational, not constitutional — it changed what the site said without changing the system that decides what the site may say.
- done when: Protected workflow restored: npm ci, tsc --noEmit, all prebuild generators + lints, full quartz build, postbuild, check:v3 rendered assertions; NEW cross-surface consistency tests, each failing the build: (a) every public program count equals the generated snapshot, (b) no page contradicts data/method/method-v2.json, (c) certificate/mark/register/retailer status rules agree across /program/*, /mark and /verify, (d) laboratory-cost treatment is stated one way, (e) no page links to a page that does not exist; A test proves each new gate fails on the known-bad pre-fix content, not merely passes on the fixed content; The workflow file is covered by a rule that a revert cannot silently delete a gate: removing a gate requires its own commit that names the invariant being given up; Green on main

### OI-20260817-cat9-total-cr-panel-gap — LIVE Category 9 omits the canonical total-chromium panel cell and puts its total-Cr SML on the Cr-VI cell instead

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `tools/standards/cat9-config.json`, `data/workbench/standards/cat9-compiled/`
- repro: tools/standards/cat9-config.json declares panel [Pb,tAs,iAs,Cd,tHg,MeHg,Ni,Al,Cr-VI,Sn] - 10 analytes, omitting total chromium. The canonical HMTc panel (CLAUDE.md Part 14) is eight totals plus species controls, and total Cr is one of the eight mandatory totals. Separately, the food-contact rows (infant-bottles, infant-bottle-nipples, infant-food-storage-items, feeding-accessories-child-sized, sippy-cups-toddler-drinkware) publish their Cr-VI cell as a read_across from eu_10_2011_crtotal_sml_nd - a TOTAL-chromium specific-migration limit (not detectable, 10 ug/kg) - labelled bounded by the total-chromium SML. That is the total-Cr instrument mislocated onto the species cell: the EU 10/2011 total-Cr SML should populate a total-Cr cell (currently absent), and Cr-VI should be a reflex-speciation screen bounded by it, matching how Cat 21 and the other article categories handle the total-Cr/Cr-VI split. Surfaced by tools/standards/audit-compiled-standards.mjs on the live compiled records (C1 missing panel analyte Cr across all 8 rows; C6 Cr-VI anchored on a total-Cr limit on the 5 food-contact rows). Cat 9 is LIVE on heavymetalcertified.com.
- done when: cat9-config.json panel includes total Cr; Each food-contact row publishes a total-Cr cell from eu_10_2011_crtotal_sml_nd (ND, 10 ug/kg) and a Cr-VI cell that is a reflex-speciation screen bounded by it, not a read_across that republishes the total-Cr number as a Cr-VI value; Category 9 recompiles and passes tools/standards/audit-compiled-standards.mjs C1/C5/C6; Karen rules on republishing, since these are live certification values
- decision: _pending_

### OI-20260817-cat9-live-astm-analytical-correction — LIVE Category 9 publishes toy-migration arsenic and mercury ~2x looser than the instruments HMI itself says bind, on an unsubstantiated analytical-correction claim

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `tools/standards/cat9-config.json`, `data/workbench/standards/cat9-compiled/`, `wiki/regulations/astm-f963-soluble-migration.md`
- repro: tools/standards/cat9-config.json (around line 200) carries: "_note": "tAs and tHg bind the EU 2009/48 Cat III raw limits (47/94), not ASTM F963 nominal (25/60): ASTM applies an analytical correction EN 71-3:2013+ abolished, so EU raw is stricter as enforced." The register contains astm_f963_tas_soluble = 25000 and astm_f963_thg_soluble = 60000 (US, status "statutory limit", mandatory under CPSIA s.106 / 16 CFR 1250) and mx_nom252_2011_tas_general_25 = 25000 / mx_nom252_2011_thg_general_60 = 60000 (COFEPRIS NOM-252-SSA1-2011, statutory), all in the same soluble/migration basis as the EU values. HMI own regulation page wiki/regulations/astm-f963-soluble-migration.md line 21 states "This is the same measured quantity and basis as the EU 2009/48/EC migration limits" and line 42 states, specifically for Category 9, "For arsenic (25 ppm) and mercury (60 ppm), the ASTM/EN 71-3 soluble limits are stricter than the EU 2009/48/EC scraped-off values (47 and 94 mg/kg) and therefore bind." No source page in the corpus substantiates the analytical correction; the cited iso2020-8124-3 source makes only a limit-VALUE lineage claim that ends before the F963-08 series. Category 9 (Infant and Child Contact Products, including teethers and mouthable toys) is LIVE on heavymetalcertified.com. Category 21 carried the identical defect and has been corrected on branch feat/standards-outstanding-cats: naming ASTM and NOM-252 moves tAs 47000 -> 25000 and tHg 94000 -> 60000.
- done when: Either ASTM F963-17 sections 4.3.5/8.3 are ingested as a source page quoting the conformity-decision rule that substantiates an analytical correction, or the analytical-correction _note is deleted from cat9-config.json; If unsubstantiated: astm_f963_tas_soluble, astm_f963_thg_soluble and the NOM-252 equivalents are added to the tAs and tHg gov_ids of the Category 9 mouthable-toy rows so the compiler binds 25000 and 60000; Category 9 recompiles and passes tools/standards/audit-compiled-standards.mjs; Karen rules on republishing the tightened Category 9 limits, since these are live certification values and tightening them affects certified lots
- decision: _pending_

### OI-20260817-cat35-composite-component-divergence — Two sessions derived Cat 35 mixed-meals/soups differently (principal-component selection); mine is live, adjudication wanted

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/standards/cat35-config.json`, `data/workbench/standards/cat35-compiled/mixed-meals-prepared-foods.json`, `data/workbench/standards/cat35-compiled/soups-broths-stocks.json`
- repro: Both my batch-4 work and another session (on origin/main) independently finished the two composite Category 35 rows, choosing different principal components for the HK Cap 132V read-across. On both mixed-meals-prepared-foods and soups-broths-stocks: MINE binds Pb=20 (hk_cap132v_pb_milk), iAs=50 (eu20251891_ias_cephalopods), Cr=500 (screen, no gov binding). THEIRS binds Pb=50 (hk_cap132v_pb_fruiting-vegetables), iAs=100 (eu20251891_ias_fish_other), Cr=500 (hk_cap132v_crtotal_vegetables, a proper gov binding). tAs/tHg/Ni agree (500/10/400). Mine is more conservative (binds occasional components milk+cephalopod as if principal); theirs is more universally-principled (vegetable+fish are components characteristic of the class) and gives Cr a real binding. The composite method (cat35 doc) says strictest applicable PRINCIPAL component - milk/cephalopod are arguably not principal to a generic frozen dinner or soup, which favors theirs; but mine is stricter. In the index #122 merge I resolved to MINE (--ours) because mine was already published live on cert via #44, so taking theirs would have loosened a just-live value and diverged cert from index. Both versions are in git history (origin/main = theirs). No value is wrong; it is a conservatism/principal-component judgment call.
- done when: Karen (or a governance ruling) picks the principal-component basis for Cat 35 composites: strictest-occasional-component (milk/cephalopod, stricter) vs characteristic-principal-component (vegetable/fish, theirs); The chosen version is applied to BOTH index and cert so the two agree; If theirs is chosen, cert mixed-meals-prepared-foods and soups-broths-stocks are re-rendered (Pb 20->50, iAs 50->100, Cr gains a binding) and pushed; The cat35 composite-component selection rule is written into the cat35-config doc so a future session does not re-diverge
- decision: _pending_

### OI-20260817-bvl-selectability-ruling — Ratify whether German BVL 2017 orientation values rank as sovereign maximum levels; six categories now depend on the answer

- scope: **human-gated** · type: decision · status: queued · repo: index
- paths: `tools/standards/cat15-config.json`, `tools/standards/cat19-config.json`, `tools/standards/cat2-config.json`, `tools/standards/cat13-config.json`, `tools/standards/cat14-config.json`, `tools/standards/cat20-config.json`, `data/evidence/regulatory_limits.csv`
- repro: The four de_bvl2017_*_cosmetics_general_* rows carry status "guidance impurity limit" in data/evidence/regulatory_limits.csv, not "maximum level" or "statutory limit". Method v2.0 defines the standard as the strictest applicable maximum set by a credible sovereign government, which leaves open whether a national enforcement ORIENTATION value qualifies. The programme has been answering both ways at once. LIVE Category 15 publishes Cd=100, tAs=500 and tHg=100 with type "gov" (provenance regulatory-alignment, i.e. a direct sovereign ML) on de_bvl2017_cd/tas/thg_cosmetics_general_*, and Pb=500 as a read-across from de_bvl2017_pb_toothpaste_500. Categories 2, 13, 14 and 20 on branch feat/standards-outstanding-cats bind the same rows the same way. Category 19 originally ruled the opposite in 65 verbatim occurrences ("not selectable under Method v2.0") and bound China NMPA instead, publishing Pb 10000, Cd 5000, tAs 2000, tHg 1000 - 5x, 50x, 4x and 10x looser than its siblings on identical rows. Category 19 has been made consistent with the majority-and-stricter position (now BVL: 2000/100/500/100) so nothing ships self-contradictory, but the underlying question is unresolved and is a governance call, not a derivation call.
- done when: A recorded ruling states whether a national enforcement orientation value is selectable as a Method v2.0 sovereign anchor, and under what conditions; If selectable: the register status vocabulary is amended so a selectable row is not labelled in a way that invites the opposite reading, and every category cites the ruling; If NOT selectable: Category 15 Cd/tAs/tHg cells lose their regulatory-alignment tags and are re-derived, the live cert pages for the four affected Cat 15 rows are re-rendered, and Categories 2, 13, 14, 19 and 20 are re-anchored; The ruling is cited from every config that binds a BVL row so the rule is stated once and referenced, not restated per category
- decision: **APPROVE: Ruled SELECTABLE. A sovereign national authority's operative enforcement orientation value (e.g. German BVL 2017 cosmetics) IS a Method v2.0 anchor, under four conditions: sovereign authorship, operative enforcement effect, gap-filling only (a real statutory ML always wins; orientation values are selected only where no statutory ML covers the cell or where stricter than all available statutory MLs), and disclosed-as-what-it-is. Rationale: no numbered statutory cosmetic ML exists for most metals in most jurisdictions, so declining orientation values leaves cosmetic cells anchorless or forces forbidden occurrence-derivation; BVL is stricter than the binding national regimes (China NMPA, Korea MFDS), so adopting it is the strictest-applicable (conservative) choice; and it is the reading already in production (live Cat 15 tags BVL regulatory-alignment). No published value moves. Recorded durably in docs/governance/orientation-values-selectability-2026-08-17.md. Reversal blast radius (re-derive live Cat 15 Cd/tAs/tHg + re-anchor 2/13/14/19/20) documented in the ruling.**

### OI-20260813-unify-food-standard-engines — Unify the two parallel food-standard engines: tools/standards/lib/food-standards-engine.mjs (Cat 33/34, adds form_split) vs tools/standards/lib/food-limit-compiler.mjs (Cat 27-32) — converge on one, ideally by adding form_split support to food-limit-compiler.mjs and migrating cat33/34

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/standards/lib/food-standards-engine.mjs`, `tools/standards/lib/food-limit-compiler.mjs`
- repro: two independently-built Method-v2.0 engines exist after parallel sessions; food-limit-compiler.mjs (Cat 27-32) lacks form_split which Cat 33/34 require for legislated product-form splits (EU cocoa-solids Cd, spice-Pb botanical parts, salt refined/unrefined)
- done when: one shared food-standard engine supports all of Cat 27-34 including form_split; the redundant engine is removed
- decision: _pending_

### OI-20260813-standards-verify-nonfood-bounds — verify-standards-data gate red on HEAD: 79 non-food-substrate rows exceed food-oriented magnitude bounds and are not baselined

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `tools/evidence/verify-standards-data.mjs`, `data/evidence/standards-verify-baseline.json`, `data/evidence/regulatory_limits.csv`
- repro: node tools/evidence/verify-standards-data.mjs reports NEW FAIL (79) limit-implausible-magnitude on pre-existing non-food-substrate rows (CN GB student-articles Cd 75000, adornment tAs 1000000, leather Cr-VI, children-jewelry Cd). Reproduces identically on HEAD with the HK Cap 132V change reverted, so it is pre-existing and unrelated to the HK ingest. Gate is not in the prebuild chain, so site builds are unaffected.
- done when: verify-standards-data exits 0, achieved either by widening BOUNDS for non-food substrate rows or by --update-baseline after a human accepts the 79 non-food values, with rationale recorded
- decision: _pending_
- notes: Discovered while ingesting HK Cap 132V (the register QC gate the ingest task asked to run). Deciding widen-bounds vs accept-baseline for non-food substrates is a standards-judgment call, not part of the HK ingest.

### OI-20260813-register-cat272829-qc-gate — Register cat27/28/29 in the standards QC gate once compile-current-standards.mjs lands on origin/main

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/standards/compile-current-standards.mjs`
- repro: origin/main (856a5c9cc..422397a55) does NOT contain tools/standards/compile-current-standards.mjs or build-standards-qc-gate.mjs (they are uncommitted on the codex/methodology-sync branch in the main checkout). cat27/28/29 were built as self-contained compilers (each self-verifies derive->audit->verify and exits non-zero on any gap/contract violation) plus substantiation-registry rows, so they do not depend on that tooling. When compile-current-standards.mjs lands on origin/main, add jobs {category:27,compiler:"cat27",config,outdir,plannedRows:4}, {28,"cat28",...,5}, {29,"cat29",...,2} and make runCompiler dispatch on compile-${job.compiler}.mjs so the build-time drift + completion audit covers them.
- done when: compile-current-standards.mjs --check reports Cat 27/28/29 with 0 defects; runCompiler resolves compile-cat27/28/29.mjs

### OI-20260813-port-arsenic-speciation-reconciliation — Port the iAs<=tAs speciation reconciliation into the cat1/cat3/cat24/cat28 standard compilers (they only reconcile mercury)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/standards/compile-cat1.mjs`, `tools/standards/cat3-config.json`, `tools/standards/compile-cat24.mjs`, `tools/standards/compile-cat28.mjs`
- repro: tools/standards/lib/food-limit-compiler.mjs (cat30/31/32) added reconcileSpeciation covering BOTH MeHg<=tHg AND iAs<=tAs (a species ceiling not below its total is subsumed). compile-cat1.mjs only reconciles mercury (reconcileMercurySpeciation); cat3 runs on that engine; cat24/cat28 are self-contained forks that likewise lack the arsenic identity. A cross-category scan of all 8 committed compiled categories (61 subcategory-variants) found ZERO current iAs>tAs or MeHg>tHg violations, so this is preventive hardening and a NO-OP on current outputs, not a live-defect fix. A register change could later produce an incoherent iAs>tAs cell those compilers would not catch.
- done when: Each of cat1/cat3/cat24/cat28 reconciles iAs against tAs (species>=total => subsumed); Re-running every compiler yields byte-identical outputs to the committed JSON (no-op today); A repo-wide scan finds no iAs>tAs or MeHg>tHg published cell

### OI-20260813-not-material-backlog-contradictions — standards-not-material.csv has 70 not-material determinations (in categories other than 33/34) contradicted by routed sources per audit-not-material-integrity.mjs — a pre-existing backlog to re-adjudicate to control/real-limit

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`, `tools/evidence/audit-not-material-integrity.mjs`
- repro: node tools/evidence/audit-not-material-integrity.mjs --warn-only reports 70 contradictions across categories other than 33/34 (cat33/34 are clean); each is a not-material cell whose routed source measured the analyte
- done when: audit-not-material-integrity.mjs reports 0 contradictions
- decision: _pending_

### OI-20260813-methodology-sync-branch-superseded — codex/methodology-sync branch (3 commits) is a SUPERSEDED dead lane — do NOT merge it into origin/main; the QC-gate tooling it was thought to strand is already on origin/main

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/standards/compile-current-standards.mjs`, `tools/standards/hmtc-analyte-panel.mjs`, `tools/standards/lib/food-standards-engine.mjs`
- repro: A reconcile task assumed tools/standards/build-standards-qc-gate.mjs + hmtc-analyte-panel.mjs were stranded on codex/methodology-sync and needed landing on origin/main. VERIFIED FALSE: (1) the QC gate lives at tools/evidence/build-standards-qc-gate.mjs, is ALREADY on origin/main, and is ALREADY wired into prebuild (self-contained; reads data/evidence CSVs; passes exit 0 = 194 PASS, 0 CRITICAL_FAIL). (2) codex/methodology-sync = base b42aeda8b (2026-08-11) + 3 commits whose last is 2026-08-13 05:58; origin/main advanced 25 commits through 2026-08-13 23:04, redoing ALL standards (cat16/27/28/29/30/31/32/33/34) via self-contained compilers + build-government-limit-standard.mjs + lib/food-standards-engine.mjs + lib/food-limit-compiler.mjs AFTER the branch's last commit. The branch's only origin-absent files are the superseded compile-current-standards.mjs + hmtc-analyte-panel.mjs plus divergent edits to build-government-limit-standard/compile-cat1/compile-cat9. Its 880cf9722 'Retire occurrence-selected HMTc methodology' may CONTRADICT ratified Method v2.0, which explicitly RETAINS selective occurrence pooling for Tier-1 toxics + no-ML cells (CLAUDE.md Part 19). Merging would regress the deployed canonical. Full working state (tip + 726 dirty files) is preserved 100% on snapshot branch snapshot/methodology-sync-20260813-2305 (commit b17e2a765).
- done when: Karen decides: formally retire codex/methodology-sync (nothing to salvage; snapshot preserves it) OR name any specific methodology idea from it worth adopting on origin's architecture; OI-20260813-register-cat272829-qc-gate is recognized as moot-as-written (its precondition — compile-current-standards.mjs landing on origin/main — should not happen); cat27/28/29 are already covered by origin/main's data-driven QC gate
- decision: _pending_
- notes: Snapshot branch: snapshot/methodology-sync-20260813-2305 (b17e2a765) on the canonical checkout — recoverable via `git checkout snapshot/methodology-sync-20260813-2305`. Nothing was merged, force-pushed, reset, or deleted. If the underlying idea behind the register OI (a build-time compile-drift + completion audit for shipped cats) is still wanted, build it on origin's self-contained-compiler architecture, not on compile-current-standards.mjs. --- RECONCILE GREEN-VERIFICATION (origin/main @ 931178d51): the QC gate + every other prebuild gate PASS; the SOLE prebuild blocker is OI-20260813-notmaterial-nopathway-basis-class (already logged by a concurrent session). REFINEMENT to that item's fix note: it maps 'MeHg and Sn no-source rows -> no-migration-pathway', but the 7 MeHg cells carry bounded_by=tHg and should map to basis_class 'speciation-bounded' (the cat27/28/29 precedent for MeHg; audit's speciation-bounded requires bounded_by, which is present). Only Sn/Al 'no source' cells map to no-migration-pathway; Cr-VI (bounded_by=Cr) -> speciation-bounded; Cd/tHg/Ni 'no-source' in confections remain the human/cert judgment cells (not-material vs control; Cd especially, given EU cocoa-Cd regulation).

### OI-20260813-hk-cap132v-category-pickup — Re-run built category compilers (Cat 27/29/30/31/32/33/34) to pick up HK Cap 132V sovereign rows now in the register

- scope: **human-gated** · type: promote · status: open · repo: index
- paths: `tools/standards/compile-cat27.mjs`, `tools/standards/compile-cat29.mjs`, `tools/standards/compile-cat30.mjs`, `tools/standards/compile-cat31.mjs`, `tools/standards/compile-cat32.mjs`, `tools/standards/compile-cat33.mjs`, `tools/standards/compile-cat34.mjs`, `data/evidence/regulatory_limits.csv`
- repro: HK Cap 132V loaded 163 live sovereign rows into data/evidence/regulatory_limits.csv on 2026-08-13. Cat 33/34 landed on origin/main and compiled BEFORE HK was in the register, so they (like the earlier-built 27/29/30/31/32) must be re-run to include HK. Coordinate: do not re-run while a category session is mid-flight.
- done when: each re-run compiler exits PASS with HK Cap 132V rows counted among contributing sovereigns; no existing binding value changes (impact pass: HK binds no major cell; confirms honey/canned/coffee-bean/cultivated-fungi Pb; fills RTD coffee/tea beverage Pb 200 gap)
- decision: _pending_ — enact: `for n in 27 29 30 31 32 33 34; do node tools/standards/compile-cat$n.mjs || break; done`
- notes: Per-cat cells HK touches: Cat27 pulses Cd/Pb 0.1 (non-binding, +sovereign); Cat29 fungi Pb cultivated 0.3 CONFIRMS EU, fungi Cd 0.2-2 non-binding (EU 0.05/0.15 tighter), wild-mushroom Pb 1 non-binding; Cat30 edible fats/oils Pb 0.08 + tAs 0.1 (+sovereign); Cat31 honey Pb 0.1 CONFIRMS Israel, sugar Pb 0.5; Cat32 salt Pb 1 (marshes 2), mango chutney Pb 0.4 CONFIRMS TH/GSO, table olives Pb 0.4, pickled cucumber Pb 0.1; Cat33 cocoa/choc Cd non-binding (EU tiers tighter, +sovereign); Cat34 coffee beans Pb 0.5 CONFIRMS Mercosur, tea leaf Pb 5 non-binding, RTD coffee+tea beverage Pb 0.2 = sole as-consumed sovereign GAP-FILL. Future Cat35 (composite/canned: canned fruit/veg Pb 0.1 + canned chestnuts Pb 0.05 CONFIRM TH/GSO/IL) has no compiler yet and will include HK when first built.

### OI-20260813-cert-trust-governance-artifacts — Data governance, decision independence and the HMI firewall must exist as controls before any Trust Center copy is published

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/trust.md`
- repro: The strategy calls for a 'What Happens to Your Data' page (role access, retention, deletion, legal hold, subpoena and regulator requests, vendor access, incident response, aggregation thresholds, account closure, HMI exclusion), a decision-independence statement (fees buy evaluation, not a passing decision; certification staff not compensated on pass rates; appeals heard by people not involved in the original decision) and a one-diagram entity map. The audit's correction: do NOT write the persuasive page first. Build a control register — control, owner, governing document, system implementation, evidence of operation, review date, public statement permitted — and generate the Trust Center from it. A promise published ahead of its control is a representation an applicant relies on. Note also that a claim of contractual confidentiality is not privilege or immunity from compulsory process and must not be written as if it were.
- done when: Control register exists before any Trust Center prose; each row names the governing document and the system control that enforces it; Trust Center generated from the register; no row without evidence of operation produces a public statement; Data-governance page states only ratified retention/access/deletion/legal-hold rules and states plainly that confidentiality is contractual, not privilege; Decision-independence page reflects real separation of sales, technical review, certification decision and appeals; Entity map uses the settled naming (Institute of Contaminant Standards as operator, Paleo Certified, Inc. as legal entity) and does NOT touch the frozen Cyprus/EU database-rights or non-profit items; Karen and counsel supply the governance facts; nothing is published from inference
- decision: _pending_

### OI-20260813-cert-remediation-live-promise — Live /program/remediation contradicts Governance Policy 4.3: it sells a POST-certification self-report track that keeps the certificate, while 4.3 defines the Confidential Remediation Track as PRE-certification with no mark

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/program/remediation.md`, `content/program/structure.md`, `content/mark.md`
- repro: AUTHORITATIVE SOURCE (verified): ~/Desktop/heavy-metal-index/data/workbench/standards-book/source-documents/governance-policy.md 4.3 — 'Brands whose initial baseline results do not qualify for Status A or Status B may still enter the Program under a confidential remediation track... The brand may not use the HMTc Certification Mark on any product, packaging, or marketing materials until at least one SKU achieves Status A or Status B.' That is a PRE-certification entry route. LIVE PAGE (git show origin/main:content/program/remediation.md) instead frames it as a post-certification self-report route: description 'Report it, fix it on schedule, and the certificate holds'; snapshot 'Effect on certificate: none if on schedule'; the Confidential-track card reads Visible in register=no, Disclosed to retailers=no, Certificate held=yes. content/program/structure.md:198 repeats it. content/mark.md:83 states the opposite entitlement: 'Products inside the Confidential Remediation Track may not display it'. The page ALSO shipped carrying its own rail_box hedge: 'Needs confirmation — drawn from the program's stated posture, not quoted from the Governance Policy. Confirm the exact terms before this ships.' It shipped anyway and is live on production. Two distinct defects: (1) decidable now — the live page must not promise terms 4.3 does not contain; (2) Karen's — whether HMTc has a separately named, ratified POST-certification voluntary-disclosure protocol at all.
- done when: DECIDABLE-NOW half executed without waiting on Karen: /program/remediation and /program/structure restated to Governance Policy 4.3 (pre-certification entry route, no certificate, no mark until a SKU reaches Status A/B), each claim citing its section, and the 'needs confirmation' rail_box removed because the claim is now sourced; One status-and-consequence matrix reconciles certificate validity, public-register visibility, retailer disclosure and mark display in a single table; /mark and /program/* stop stating different rules; A post-certification voluntary-disclosure protocol is DRAFTED as a governance proposal (eligibility, certificate status, mark status, register visibility, retailer notice, CAPA windows, reinstatement, legal-duty boundary) and NOT published; Karen's single question surfaced through the decision queue: does a post-certification voluntary-disclosure protocol exist, yes or no; Landed on cert main only for the decidable half; the proposal stays unpublished until Karen rules
- decision: _pending_

### OI-20260813-cat3334-govlimit-readiness-integration — Wire the Cat 33/34 government-limit compiled standards into the readiness+publication path (supersedes the stalled occurrence-pool cells: spices:Cd 'no mapped government cap', salt:Cd/Pb QC-HELD percentile-beyond-sample)

- scope: **human-gated** · type: promote · status: open · repo: index
- paths: `data/workbench/standards/cat33-compiled`, `data/workbench/standards/cat34-compiled`, `data/evidence/category-standards-readiness.md`
- repro: readiness monitor shows Cat 34 salt/spices blocked on percentile-beyond-sample + no-mapped-cap; cat33/cat34-compiled supply those government-limit caps but nothing reads them into readiness/QC yet
- done when: readiness monitor reflects the Cat 33/34 government-limit standard instead of blocked occurrence-pool cells
- decision: _pending_

### OI-20260813-cat30-32-cert-downstream — Wire the Cat 30/31/32 compiled standards into the cert-page / catalog / not-material-registry downstream (currently workbench-only JSON)

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `data/workbench/standards/cat30-compiled`, `data/workbench/standards/cat31-compiled`, `data/workbench/standards/cat32-compiled`
- repro: compile-cat30/31/32 emit verified per-subcategory JSON under data/workbench/standards/catNN-compiled/ but nothing consumes them yet: (1) no cert (heavymetaltested.com) standard pages are generated from them; (2) their not-material/control determinations are audited against the regulatory register by the compiler but are NOT registered in data/evidence/standards-not-material.csv, so the source-page not-material-integrity gate does not cover them; (3) the 11 new subcategories likely lack wiki/products pages + routing. Human-gated: cert content is LIVE on push, and registering the new categories touches the product-page/routing/Step-0 layer.
- done when: Cert standard pages exist for the 11 subcategories OR a decision to defer is recorded; not-material/control cells are represented in standards-not-material.csv and pass audit-not-material-integrity; Each subcategory maps to a wiki/products page or a provisional scaffold
- decision: _pending_

### OI-20260813-cat1-teething-rice-al-stale — cat1-compiled/teething-and-snacks-rice-based.json is stale (CN Al starch-noodle comparator now matches)

- scope: **auto** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled/teething-and-snacks-rice-based.json`
- repro: node tools/standards/compile-cat1.mjs --only=teething-and-snacks-rice-based, then git diff — the committed output lacks a CN Al 200000 (cn_gb2760_2024_al_starch_noodles_vermicelli_200000) entry in the Al read-across per_country trail; binding Al value (AU-NZ 500) is unchanged
- done when: compile-cat1.mjs output for teething-and-snacks-rice-based matches the committed JSON with no diff

### OI-20260811-synthesis-vs-regulation-drift-lint — No lint check cross-references synthesis-page regulatory claims against wiki/regulations/ — nickel synthesis asserted no EU ML existed 5 weeks after the wiki ingested EU 2024/1987

- scope: **auto** · type: audit · status: open · repo: index
- paths: `tools/`, `wiki/synthesis/`
- repro: wiki/synthesis/dietary-nickel-plant-staple-accumulation.md was written 2026-07-27 and stated three times that no European maximum level for nickel in food existed, using that as the load-bearing premise for its regulatory-implications section. wiki/regulations/eu-2024-1987-nickel-maximum-levels.md had been in the repo since 2026-06-22 with the full Annex transcribed from the primary OJ PDF. Nothing in the prebuild chain caught the contradiction; the page shipped contradicting the corpus it was built from. The class of defect is a synthesis page making a negative regulatory claim (no limit exists / none has been set / no maximum level applies) for an (analyte, matrix) pair that wiki/regulations/ already covers.
- done when: A lint script flags any wiki/synthesis/ or wiki/ingredients/ page asserting a negative regulatory existence claim for an (analyte, jurisdiction) pair that has an in-force rule page in wiki/regulations/; Script runs in prebuild (--warn-only acceptable while any pre-existing backlog drains); Running it against the corpus at HEAD reports the known instances, including wiki/sources/brum2025-flaxseeds-ptes-organic-conventional.md
- evidence: wiki/synthesis/dietary-nickel-plant-staple-accumulation.md (corrected 2026-08-11) · wiki/regulations/eu-2024-1987-nickel-maximum-levels.md ingested 2026-06-22
- notes: The standards layer was NOT affected: data/workbench/standards had already adopted EU 2024/1987 for infant formula (250/400), cat3 grains (800-5000) and chocolate (2500/7000/15000). The drift was confined to the public wiki narrative layer, which is the surface a hostile expert reads.

### OI-20260811-shellfish-cd-pool-tail-artifact — shellfish|Cd raw pooled p100=21665 ppb is a reconstruction-tail artifact (duplicate romero-estevez2020 autonomy+primary rows, mean-only lognormal); cert display protected by observed_max=1600 but pooled percentile inflated

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/category6_primary_extraction_summary.csv`, `data/evidence/autonomy/extraction-quarantine.csv`
- repro: hmtc_aggregate_distributions.csv shellfish|Cd: pooled_p95=5294, pooled_p100=21665 while observed_max across cited studies (cert occurrence-evidence) = 1600 ppb. romero-estevez2020-bivalves-santa-rosa-ecuador contributes TWICE to the pool: an autonomy row (category1_autonomy_extracted_summary.csv, row_slug=shellfish, Cd, mean_ppb=560, reconstruction lognormal_mean_only) AND a cat6 primary_extraction row (uniform_max_only). The mean-only lognormal tail plus double-counting inflate the pooled upper tail far above any real measurement.
- done when: shellfish|Cd pooled_p100 within ~2x of observed_max (1600 ppb); romero-estevez2020 contributes once (dedupe autonomy vs primary-extraction row); cert shellfish|Cd observed_max stays 1600 ppb
- notes: Distinct from the cephalopod misrouting (which is fixed). This is the same duplicate-autonomy-row + mean-only-tail class as the salt|Pb samsiyah quarantine, but for a different source/cell. The cert renderer already displays observed_max=1600, so it is not a false live-page figure; logging rather than chasing.

### OI-20260811-quartz-typecheck-red-on-main — npm run check fails on 8 pre-existing TypeScript errors in the Quartz site layer, so main is red and no PR can reach green

- scope: **auto** · type: code-fix · status: queued · repo: index
- paths: `quartz.layout.ts`, `quartz/components/MegaMenu.tsx`, `quartz/components/TableOfContents.tsx`, `quartz/components/renderPage.tsx`, `quartz/plugins/transformers/sourceCiteMeta.ts`
- repro: `npm run check` exits 2 with: quartz.layout.ts(23,7) TS6133 'primaryNavFilter' unused; MegaMenu.tsx(30,10) TS6133 'Chevron' unused; TableOfContents.tsx(145,23) and (147,44) TS2367 unintentional comparison; renderPage.tsx(268,9) TS6133 'LeftComponent' unused, (276,9) TS6133 'RightComponent' unused, (319,12) TS2745 JSX children prop type mismatch; sourceCiteMeta.ts(68,26) TS18046 'authors' is of type 'unknown'. These files last changed on main in 7bf734ad (Graph/Backlinks remount). Observed on PR #116 run 31482362325 once the test step finally passed and the workflow advanced to the check step.
- done when: `npm run check` exits 0; A green CI run is observed on main; The two TS2367 comparisons in TableOfContents.tsx are resolved by fixing the comparison rather than by casting away the type error, since an always-false comparison is usually a real bug
- evidence: PR #116 job 93750005222: '##[error]Process completed with exit code 2' under 'Run npm run check' · main red on 5 consecutive runs 2026-08-10/11
- notes: Six of the eight are unused-variable removals and are mechanical. The TS2367 pair and the TS2745 JSX children mismatch need actual review: TS2367 means a comparison can never be true, which usually indicates the surrounding logic is dead. Not fixed in PR #116 because that branch is a wiki content correction and site-layer changes should be reviewed on their own.

### OI-20260811-precommit-hook-bashism — .husky/pre-commit uses bash [[ ]] with no shebang, so it fails under /bin/sh (dash) on Linux — every Linux and CI session must bypass it

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `.husky/pre-commit`, `tools/autonomy/commit-lock.sh`
- repro: On Linux where /bin/sh is dash, git runs .husky/pre-commit via sh. The file has no shebang and uses bash-only [[ ]] at lines 49 (via tools/autonomy/commit-lock.sh), 74, 107 and 127. Result: '[[: not found' and 'Illegal number' from the line-107 stat parse, hook exits 2, commit blocked. Running 'bash .husky/pre-commit' on the identical staged tree exits 0 with all checks passing, which confirms a shell-dialect bug rather than a real check failure. On macOS /bin/sh is bash in POSIX mode so [[ still works, which is why this has not surfaced locally.
- done when: Add a bash shebang as the first line of .husky/pre-commit and of tools/autonomy/commit-lock.sh; git commit succeeds without --no-verify on a Linux host where /bin/sh is dash; The line-107 stat-based lock-age check parses correctly under the chosen shell
- evidence: Observed 2026-08-11 committing the nickel synthesis corrections; bash .husky/pre-commit exited 0 on the same staged tree that sh rejected with code 2
- notes: Silent-bypass risk: this failure mode pushes every Linux/CI session toward --no-verify, which also skips the routing audit and the wiki_edit_audit provenance gate. Both are load-bearing per Part 5b and the provenance invariant. Fix is to add a bash shebang to both scripts.

### OI-20260811-openalex-live-api-test-in-ci — tools/discovery/sources/openalex.test.ts calls the live OpenAlex API in CI and reddens the build on HTTP 429 — CI is nondeterministic and main has been red for days

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/discovery/sources/openalex.test.ts`, `tools/discovery/sources/openalex.ts`
- repro: The 'OpenAlex adapter - live API smoke' suite issues a real network request to https://api.openalex.org/works?search=lead+rice during `npm test`. From GitHub's shared runner IPs this intermittently returns HTTP 429 Too Many Requests, failing subtest 1 ('search() yields DiscoveryCandidateDraft objects for a gap with known results') and the whole job. Observed on PR #116 run 31482156526. The sibling subtest 2 (fetch/manifestRow) passes because it does not hit the rate-limited search endpoint. Recent main runs are red on 5 consecutive commits (2026-08-11 07:53 through 07:57 and 06:42), so the base branch is not green either.
- done when: The live OpenAlex call is either gated behind an env var (e.g. HMI_LIVE_API_TESTS=1), replaced with a recorded fixture, or made to skip rather than fail on 429/5xx; `npm test` passes offline and on a rate-limited runner; A green run is observed on main
- evidence: PR #116 job 93749357828: error '[openalex] API error 429 Too Many Requests: https://api.openalex.org/works?search=lead+rice&filter=is_oa%3Atrue&per-page=50&cursor=*' at openalex.ts:192 · Recent main workflow runs: 5 consecutive failures 2026-08-10/11
- decision: _pending_
- notes: human-gated because deciding whether the discovery adapters should be smoke-tested against the live API at all is a CI-policy call, not a mechanical fix, and the honest options (gate, fixture, tolerate-429) trade coverage against determinism differently. Flagged from PR #116 rather than fixed there, since that PR is a wiki content correction and should not carry a test-semantics change. Note the separate, deterministic co-author-guard failure that was ALSO reddening main was a real regex bug and IS fixed in PR #116 (commit e3171892).

### OI-20260811-ni-sensitized-population-mark — Decision: whether a crop-relative nickel mark serving the ~15% nickel-sensitized population is worth scoping — the acute MOE finding is the binding Ni health concern and is unaddressed by any current claim

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `docs/governance/hmtc-governing-principles.md`
- repro: EFSA 2020 identifies eczematous flare-up (systemic contact dermatitis) in Ni-sensitized humans as the critical acute effect, LOAEL 4.3 ug Ni/kg bw, MOE >=30 for low concern, and finds that MOE is not achieved at mean or 95th-percentile dietary exposure for the roughly 15% of the population who are Ni-sensitized. That acute finding, not the chronic TDI, is the scientific basis the Commission recited for EU 2024/1987. The corrected synthesis page establishes that Ni has an irreducible botanical floor, so an absolute low-Ni claim on cocoa or soy is not deliverable. A crop-relative claim (for example bottom quartile of the cocoa Ni distribution) would be deliverable and honest about the floor. Whether to scope that is a program-design and business-strategy question, not a wiki question.
- done when: Karen rules APPROVE/DECLINE/DEFER on whether to scope a crop-relative Ni mark; If APPROVE, the derivation work is staged in data/workbench/standards/ and never on the index domain per Part 19
- evidence: wiki/sources/efsa-nickel-contam-2020.md acute LOAEL 4.3 ug/kg bw, MOE >=30 not achieved · wiki/metals/nickel.md low-nickel diet clinical-trial evidence across dermatitis, IBS, GERD, RAS, endometriosis · wiki/synthesis/dietary-nickel-plant-staple-accumulation.md corrected 2026-08-11
- decision: _pending_
- notes: Raised in the 2026-08-11 external review. Human-gated because it is a certification-program design and business-strategy call, and because any threshold derivation is firewalled off the index domain. The wiki side of this needs no decision and is already correct.

### OI-20260811-ni-plant-essentiality-gap — Nickel plant-essentiality literature absent from corpus: Ni-urease requirement in higher plants, legume nitrogen-fixation symbiosis, and Ni-fertilization trials on Ni-poor soils

- scope: **auto** · type: content · status: open · repo: index
- paths: `wiki/synthesis/dietary-nickel-plant-staple-accumulation.md`, `wiki/metals/nickel.md`
- repro: The Ni botanical-floor claim on wiki/synthesis/dietary-nickel-plant-staple-accumulation.md is currently inferred from microbial enzymology (maier-benoit-2019) plus the occurrence ranking. The plant-side mechanism is not in the corpus: no source covers the Ni-urease requirement in higher plants, Ni in [NiFe]-hydrogenase during legume-rhizobium symbiosis, or agronomic Ni-fertilization trials. Soybean grown on Ni-poor soil with Ni fertilization is the strongest available test of the floor claim (it would show Ni concentrating where there is no pollution source and farmers adding Ni deliberately), and the corpus cannot currently make it.
- done when: At least 2 A-tier sources on plant Ni essentiality/urease ingested into wiki/sources/; The Why nickel differs in kind section of the synthesis page cites plant-physiology sources directly rather than inferring from microbial enzymology; The gap paragraph at the end of that section is removed or narrowed
- evidence: wiki/synthesis/dietary-nickel-plant-staple-accumulation.md section: Why nickel differs in kind from the non-essential toxic metals
- notes: Surfaced by the 2026-08-11 external review of the nickel synthesis page. Ni is one of the ten HMTc certification analytes, so the mechanism is load-bearing.

### OI-20260811-cyprus-troodos-geogenic-ni — Cyprus/Troodos ophiolite geogenic nickel is an unchecked hypothesis with direct relevance to the operators own jurisdiction and to the Ni soil-supply term

- scope: **auto** · type: audit · status: open · repo: index
- paths: `wiki/supply-chain/soil-nickel-screening.md`, `wiki/supply-chain/soil-to-plant-transfer.md`
- repro: wiki/supply-chain/soil-nickel-screening.md is still a stub. The corrected nickel synthesis now carries a soil-supply term it cannot quantify because no anchor dataset stratifies crop Ni by soil parent material. Cyprus sits on the Troodos ophiolite, one of the most studied ultramafic complexes in the world, and ultramafic/serpentine parent materials are the canonical geogenic Ni case. Whether Cypriot soils and local produce carry elevated Ni has not been checked against the corpus or the literature.
- done when: A literature check for Cyprus/Troodos soil Ni and crop Ni is run and its result recorded; If sources exist they are ingested and wiki/supply-chain/soil-nickel-screening.md is promoted past stub with the geogenic Ni framework; If no usable sources exist that null result is recorded on the page so a later session does not re-derive the question
- evidence: wiki/supply-chain/soil-to-plant-transfer.md: geogenic burdens set a floor that agronomy can manage but not remove · wiki/sources/efsa2015-nickel-food-water.md: Cyprus contributed 5% of the EFSA Ni occurrence dataset
- notes: Raised in the 2026-08-11 external review of the nickel synthesis page. Explicitly framed there as a hypothesis worth checking, not a finding.

### OI-20260811-cephalopods-orphaned-occurrence — Cephalopods occurrence orphaned: Garofalo cephalopod strata rerouted to row_slug=cephalopods but no wiki/products/cephalopods.md exists to pool them, and garofalo products: lacks cephalopods

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/products/cephalopods.md`, `wiki/sources/garofalo2025-seafood-cd-pb-hg-italy-10yr.md`, `data/evidence/category6_primary_extraction_summary.csv`
- repro: After the cephalopod-misrouting fix, cephalopods|Cd/Pb/tHg strata (Cd n=1500 max5600; Pb n=650; tHg n=687) carry row_slug=cephalopods in category6_primary_extraction_summary.csv but reach NO pooled aggregate cell (hmtc_pool_starvation_audit reason=unmatched_slug) because there is no wiki/products/cephalopods.md. The cert cephalopods|Cd cell shows gov ML 1000 (EU) with n_studies=0 / has_data=false. Cd/tHg are Tier-1 toxics; cephalopod occurrence (Cd p95 600, max 5600) could corroborate or tighten the gov ML but is invisible.
- done when: wiki/products/cephalopods.md exists as a product-category page (hmtc_category 6, row 6); garofalo2025 products: frontmatter includes cephalopods; hmtc_aggregate_distributions.csv has cephalopods|Cd, cephalopods|Pb, cephalopods|tHg cells; cert occurrence-evidence cephalopods|Cd shows occurrence corroborating the 1000 gov ML
- decision: _pending_
- notes: Surfaced while fixing the shellfish|Cd cephalopod-misrouting bug. The reroute is correct (removes 5600 pollution from shellfish); this item is the downstream gap it exposes: cephalopods is a live compiled standard (cat1-compiled/cephalopods.json, seafood-config row 6) with no product page and no pooled occurrence.

### OI-20260811-brum2025-flaxseed-ni-ml-stale — brum2025 flaxseed source page states no EU maximum levels exist for Ni in oilseeds more broadly — EU 2024/1987 sets Ni MLs for sunflower seed (8.0), peanuts (12) and soy beans (15)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `wiki/sources/brum2025-flaxseeds-ptes-organic-conventional.md`
- repro: Line 75 reads: no EU maximum levels exist for Pb, Al, or Ni in flaxseeds or oilseeds more broadly as of the study date. EU 2024/1987 Annex entry 3.6.10 sets Ni MLs for sunflower seed 8.0, peanuts 12 and soy beans 15 mg/kg, in force 2025-07-01. Linseed/flaxseed itself is genuinely not listed, so the flaxseed half of the sentence is correct and only the oilseeds more broadly generalization is wrong.
- done when: The sentence distinguishes flaxseed (no Ni ML) from oilseeds generally (Ni MLs set for sunflower seed, peanuts, soy beans); A wikilink to regulations/eu-2024-1987-nickel-maximum-levels is present
- evidence: wiki/sources/eu-2024-1987-nickel-maximum-levels.md Annex 3.6.10.1-3.6.10.3
- notes: Found while correcting the nickel synthesis page 2026-08-11; out of scope for that task so logged rather than chased.

### OI-20260811-briefing-author-string-and-test-side-effect — build-standards-briefing.test.mjs rewrites data/workbench/briefings/*.md as a side effect of running the test suite, and the committed briefing still carries the pre-Part-14 'Paleo Foundation' author string

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/standards/build-standards-briefing.test.mjs`, `tools/standards/build-standards-briefing.mjs`, `data/workbench/briefings/infant-formula-powder-non-soy.md`
- repro: The test suite's regenerate() helper writes data/workbench/briefings/infant-formula-powder-non-soy.md in place rather than to a temp path, so `npm test` dirties the working tree. On 2026-08-11 that regenerated file was swept into a commit by a `git add -A` and had to be reverted (dc02c08c). Two separate defects: (a) a test with a filesystem side effect on a governed standards artifact; (b) the regeneration is not value-stable across environments - it moved Pb 20->11 ppb, Sn 76->48 ppb, Cd 8->7.5 ppb, and flipped Pb from regulatory-alignment to literature-baseline, with source counts collapsing 17->11, 18->10, 16->6, 23->13, indicating the local pool is thinner than the one the committed briefing was built from.
- done when: regenerate() in the test writes to a temp dir; `npm test` leaves `git status` clean; The Part 14 author-string correction (Paleo Foundation -> Institute of Contaminant Standards (ICS)) is applied to the committed briefings on its own commit, with the pool state verified and thresholds unchanged; Either the generator is deterministic given committed inputs, or the briefing records which pool snapshot it was built from so drift is detectable
- evidence: Reverted in dc02c08c on branch claude/nickel-food-article-review-um5vwd · Diff showed generated_at 2026-08-01 -> 2026-08-11 plus the threshold and source-count moves listed above
- decision: _pending_
- notes: human-gated because it touches published HMTc threshold values and the Part 19 workbench. The author-string fix is genuinely correct per Part 14 entity naming and should land - but deliberately, not as a test side effect. Do NOT accept the recomputed thresholds without first establishing why the local pool is thinner.

### OI-20260810-vinegar-pool-recovery — Cat 32 vinegar manual blocked on occurrence-pool thinness: Pb in adjudication register, tAs at n=26; only Vietnam MLs loaded

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `data/evidence/standards-outlier-adjudication.csv`, `data/workbench/standards/vinegar.md`
- repro: standards-qc-gate-report.csv: vinegar Pb=HOLD (C6 adjudication-register + C1b, n=253), tAs=HOLD (C11a n=26 beyond-sample + C1b), Cd=WARN no-cap. Priority metals are Pb/tAs/Cd. The only loaded government MLs for vinegar are Vietnam (Pb 500, tAs 200, Cd 1000, tHg 50).
- done when: vinegar Pb adjudication-register hold resolved (documented why the Pb pool was suspect); vinegar tAs occurrence pool grown past the beyond-sample n floor OR the row published provisional with an honest label; cap decision made for the Vietnam MLs (counsel: bind or exclude as non-target-market)
- decision: _pending_
- notes: Weakest of the Cat 31/32/33 trio; needs evidence recovery, not just cap-mapping. Later tranche.

### OI-20260810-tox-papers-misrouted-to-oils — Routing hygiene: 3 tox/exposure papers mis-routed to cooking-oils-other (no oil measurement) cause false not-material contradictions

- scope: **auto** · type: finding · status: open · repo: index
- paths: `wiki/sources/authors2022-hexavalent-chromium-exposure.md`, `wiki/sources/authors2023-chen-j-hao-s-ban-uelos-g-and.md`, `wiki/sources/authors2026-mercury-induced-oxidative-stress-and.md`
- repro: authors2022 (Cr-VI duck gavage tox), authors2023 (Se-Hg plant meta-analysis), authors2026 (HgCl2 RBC in-vitro assay) carry matrices/products routing to cooking-oils-other and a tHg metal tag, but measure NO oil and no oil-Hg value — they are ABOUT mercury/chromium toxicity, not oil occurrence. They surface as false contradictions in audit-not-material-integrity.mjs and pollute the cooking-oils occurrence surface. Same class as deka2023->spices (OI-20260810-deka2023-spices-routing). Fix: correct their product/matrix routing (remove cooking-oils-other) so they stop false-flagging. Routing is system-owned; a routing rebuild follows the frontmatter fix.
- done when: authors2022/2023/2026 product+matrix routing corrected to not claim cooking-oils-other occurrence; audit-not-material-integrity.mjs no longer flags cooking-oils-other/tHg against these three

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

### OI-20260810-olive-oil-cd-material-judgment — olive-oil / Cd not-material: two peer-reviewed sources report material Cd in the oil — human ruling needed

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/evidence/standards-not-material.csv`, `data/evidence/standards-not-material-adjudication.csv`
- repro: The olive-oil/Cd not-material determination (Cd does not partition into the lipid fraction) holds on weight of evidence (16 routed sources ND/floor/mechanistic, evidence-tested in the adjudication register), but 2 peer-reviewed sources report MATERIAL Cd in the oil that the non-partition thesis does not explain and that are NOT dismissable on documented-artifact grounds: (1) acar2012 51 ug/kg ETAAS (~17x floor, internally consistent; suspected systematic bias — uniform 41-51 across all oil types, non-oil-matched CRM — but exclusion needs a human artifact ruling); (2) ntigoroku2025 60 ug/kg real Nigerian market (set aside only by target-market stratification, a Method-v2.0 policy lever, not the not-material rationale). Cd is a Tier-1 toxic with no government ML for oils, so Method v2.0 would set this cell from occurrence if not-material fails. Decision: rule each as (a) artifact/excluded, (b) non-target-market/excluded, or (c) material -> retire not-material and set an occurrence-based value. The two sources keep flagging in the integrity check until ruled.
- done when: acar2012 ruled: artifact-excluded (with documented basis) or material; ntigoroku2025 ruled: non-target-market-excluded or material; if either is material, olive-oil/Cd retired from not-material and given an occurrence value; if excluded, recorded KEEP_CITE with the ruling
- decision: _pending_

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

### OI-20260810-deka2023-spices-routing — deka2023 review-chapter mis-routed to products/spices (metadata defect)

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `wiki/sources/deka2023-monitoring-strategies-heavy-metals-chapter.md`
- repro: grep products wiki/sources/deka2023-monitoring-strategies-heavy-metals-chapter.md — shows products:[[products/spices]] + soft-drinks; but the page body Verification-notes (2026-05-18) state the spices slug was an invented slug removed to products:[] because the chapter never singles out spices (no primary occurrence data; narrative methods review). The products:[spices] was later re-added. This makes the not-material integrity audit false-positive-flag spices/Al against a source that measured nothing (its metals: array lists Al only as a discussed MPL-table entry).
- done when: Decide whether deka2023 should route to products/spices at all given zero primary occurrence data; If not, remove products/spices (and reassess soft-drinks) so routing reflects the chapter as a methods review; Confirm not-material integrity audit no longer counts deka2023 as a spices/Al contradiction on metadata grounds
- decision: _pending_

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
