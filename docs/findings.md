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

252 open item(s): 85 auto, 167 awaiting a decision.

### OI-20260926-zno-tio2-ingredient-pages — No zinc-oxide or titanium-dioxide ingredient page exists for routing mineral-filter raw-material evidence

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/ingredients/zinc-oxide.md`, `wiki/ingredients/titanium-dioxide.md`
- repro: Mineral baby sunscreens ingest 2026-09-26: SCCS 2012/2014/2024 and chart row 36 (zinc oxide powder) carry raw-material values but ingredients: [] with routing_input_gaps because no ingredient page exists.
- done when: Karen decides whether TiO2 and ZnO get ingredient pages (Part 10 page creation); If created, SCCS and raw-material sources declare the ingredient and routing audit shows 0 unresolved
- decision: _pending_

### OI-20260926-precommit-hook-posix-shell — Pre-commit commit-lock helper uses bash [[ ]] and BSD stat, failing under sh on Linux cloud VMs

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/autonomy/commit-lock.sh`, `.husky/pre-commit`
- repro: On a Linux VM, git commit runs .husky/pre-commit under sh; sourcing tools/autonomy/commit-lock.sh fails with [[: not found and an Illegal number from stat output. Workaround used: HMI_SKIP_COMMIT_LOCK=1.
- done when: git commit touching wiki/sources succeeds on Linux without HMI_SKIP_COMMIT_LOCK; Lock still acquired and released on macOS

### OI-20260926-baby-sunscreen-mineral-scaffold-claims — baby-sunscreen-mineral page keeps unsourced Step 0 scaffold claims (platform attribution, levers, bold text)

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/products/baby-sunscreen-mineral.md`
- repro: Overview says ZnO carries Pb/Cd load (sphalerite-derived) and TiO2 carries Pb/iAs/Cd (rutile/ilmenite-derived) with no citation; Levers section uses bold and unsourced claims. The 2026-09-26 ingest removed only the brand list and added sources and data.
- done when: Every overview and levers claim cites an ingested source or is removed; No inline bold for emphasis
- decision: _pending_

### OI-20260925-jensen-nickel-ci — Jensen 2025 nickel CI is 15.71 on the baby-wipes synthesis and 15.7 on the product page

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `wiki/synthesis/heavy-metals-in-baby-wipes.md`, `wiki/products/baby-wipes.md`
- repro: Synthesis prints 8.6 to 15.71. The baby-wipes product page prints 8.6 to 15.7. DOI 10.1111/cod.14753 was not re-opened in WIPES-VERIFY-1.
- done when: The primary abstract or results table is opened and both pages print the same interval the paper prints.
- decision: _pending_
- notes: Not changed in the verification pass. No other opened wipe-table number was in conflict.

### OI-20260910-rice-teething-ias-still-subsumed — teething-and-snacks-rice-based still publishes iAs as subsumed/null after Part 19 claim-numeric lock

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled/teething-and-snacks-rice-based.json`, `tools/standards/cat1-config.json`
- repro: After S-DOI-FORCE-1 canary, compile-cat1 KEEP-if-numeric is live but only baby-cereals-dry-rice-based was recompiled. teething-and-snacks-rice-based still has iAs type=subsumed value=null (candidate 100) beside tAs 50.
- done when: compiled iAs is numeric gov_floor (fda2020 or same-scope floor) not subsumed/null; claim-hash/version bump if published; no monitored iAs on that row
- notes: Out of S-DOI-FORCE-1 canary scope. Compiler already refuses to blank rice iAs; residual is stale compiled JSON.

### OI-20260910-rice-cereal-version-pages-stale — baby-cereals-dry-rice-based version-pages manifest still lists scaffolded v1.0 after v1.2 freeze

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/standards/version-pages/manifest.json`, `tools/standards/build-version-pages.mjs`
- repro: data/standards/version-history/baby-cereals-dry-rice-based.json current_version is 1.2 with frozen v1.2 PDF; data/standards/version-pages/manifest.json still has current_version 1.0, scaffolded true, frozen false.
- done when: manifest current_version matches version-history current_version for baby-cereals-dry-rice-based; scaffolded is false once a frozen artifact exists

### OI-20260910-olive-oil-ias-still-subsumed — Olive oil compiled iAs is subsumed/null — S-DOI-OLIVE-1 mint path

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `data/workbench/standards/cat30-compiled/olive-oil.json`
- repro: cat30-compiled/olive-oil.json variants.default.iAs.type is subsumed with value null; tAs is 100 Codex gov. Part 19 / S-DOI-OLIVE-1 must decide whether olive oil publishes numeric iAs (candidate IL 100) or leaves iAs as non-claim. species-parent-cap does not fail null species.
- done when: S-DOI-OLIVE-1 agent on heavymetalcertified owns the olive-oil mint/DOI path; Index species-parent-cap kill-gate is available as freeze assertStandardSpeciesLeqParent; Do not mint rice; rice is no longer P0
- decision: _pending_
- notes: Logged during S-DOI-CANARY-REDO-1 stop after Karen P0 replan to olive oil / Kasandrinos. HMI agent is not starting olive work.

### OI-20260910-library-scoped-hook-index — Pre-commit hook stages undeclared routing outputs into scoped commits

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/commit-scoped.sh`, `.husky/pre-commit`
- repro: Library commit55d5fad21b captured three undeclared routing CSVs despite pathspec. Wrapper detected violation; unpushed commit amended to8b5a47da8c. Temporary hook runs all checks against copied index safely.
- done when: A source-page pathspec commit includes only declared paths even when routing audit git-adds output.; All existing routing DOI and wiki-audit gates still run; tests cover hook-mutated index.

### OI-20260910-library-flores-duplicate-metadata — Correct Flores-Bazan2024 pregnancy vitamin-D review legacy source identity

- scope: **auto** · type: content · status: open · repo: index
- paths: `wiki/sources/authors2000-interplay-between-vitamin-d-levels-and-heavy-metals.md`
- repro: RPIS_8 DOI10.3390/pathophysiology31040048 matched existing placeholder key; PDF first page proves Flores-Bazan2024 Pathophysiology31:660-679. Four-page fire cap reached before this separate full correction.
- done when: Full main-PDF read and five-check audited canonical correction with actual authors2024 journal metadata.; Route biomarker/health review as secondary evidence; preserve all traceable source figures without product attribution.

### OI-20260910-library-context-empty-arrays — Routing malformed advisory treats intentional context-only empty arrays as missing

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/evidence/build-routing-audit.mjs`, `data/evidence/routing_malformed.csv`
- repro: Valid lane a2/a3/a4 source pages explicitly declare products:[] ingredients:[] per Library instructions yet are emitted as malformed advisory. mahmood review correctly has jurisdictions:[] with no sampling market.
- done when: Distinguish explicit legitimate empty arrays from absent routing keys without weakening occurrence requirements.; Regression checks cover soil urine and remediation review sources and malformed product occurrence metadata.

### OI-20260910-legacy-source-metadata-recovery — Recover declared provenance and Evidence Fitness metadata for legacy source records

- scope: **auto** · type: finding · status: open · repo: index
- paths: `data/evidence/source_contract_gaps.json`, `tools/evidence/audit-source-contract.mjs`, `wiki/sources`
- repro: The corpus contract audit records legacy missing or unstructured provenance, access and fitness metadata. These are metadata gaps, not adjudicated evidence-unfitness findings.
- done when: AI recovers access and raw hashes from identifiable preserved primary sources without fabricating provenance; AI classifies supports and does_not_support from source scope, retaining explicit missing-retrieval or low-confidence dispositions; Completed-ingest declarations pass metadata, extraction and routing reconciliation; pending sources remain excluded from public exports
- evidence: docs/audits/2026-09-10-fda-tds-repair.md · data/evidence/source_contract_gaps.json

### OI-20260910-infant-formula-scaffold-duplicates-locked-rows — infant-formula and infant-rice-cereal are provisional scaffolds duplicating locked HMTc rows whose pages are already populated

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `wiki/products/infant-formula.md`, `wiki/products/infant-rice-cereal.md`, `wiki/products/baby-cereals-dry-rice-based.md`
- repro: ORDER HMI-GAP-1c (18:12Z NOTE) asks to regenerate infant-formula from structured evidence. Its structured rows are filed under the six locked subcategory slugs (infant-formula-powder-non-soy, -powder-soy-based, -rtf-liquid-non-soy, -concentrated-liquid-*, -dairy-free), whose pages already render populated tables. Both infant-formula.md and infant-rice-cereal.md carry provisional_scaffold: true and hmtc_category: pending_taxonomy_review. infant-rice-cereal duplicates baby-cereals-dry-rice-based, the S-DOI-1b page of record.
- done when: Karen rules whether infant-formula and infant-rice-cereal become umbrella pages, redirect to the locked rows, or are merged away; If umbrella pages are kept, a basis-preserving rollup rule is defined that does not pool as_sold powder with as_consumed RTF in one range cell
- decision: _pending_
- notes: Not a wiring defect. Rolling the six subcategory registers up into the parent scaffold would conflate as_sold and as_consumed bases in one range cell (CLAUDE.md Part 14) and would derive page content from a scaffold that has not cleared a Step 0 Lock (Part 10). Part 10 also reserves merging distinct pages that cover overlapping literature to Karen. Held rather than executed.

### OI-20260910-gems-tds-product-row-admission-map — beef/poultry/game product tables stay data-gap: no GEMS/FDA-TDS food-name to HMTc-row admission map exists

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv`, `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`, `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`
- repro: After the HMI-GAP-1c wiring fix, wiki/products/{beef-product,poultry-product,game-meats}.md still render commodity-synthesis context only. Their numeric rows live in the GEMS and FDA TDS registers, which are keyed on food_name / tds_food_description, not on a product row_slug. Reed tickets HMI-GAP-wire-{beef,poultry,game-meats} carry the per-food admit/reject adjudication (Cattle meat admitted; Cattle milk/liver/kidney/fat/offal and multi-species pools rejected).
- done when: A declared, auditable GEMS/TDS food-name to HMTc product-row admission map exists as config, not hand-edited page tables; A censoring substitution rule and the 10M ppb extreme-value filter are signed off before any GEMS value lands on a page; GEMS lower-bound percentiles are labelled as lower bounds, never presented as central estimates; beef-product, poultry-product and game-meats render primary numeric rows
- decision: _pending_
- notes: GATED by memory project_gems_food_data: the GEMS-food to wiki-slug crosswalk plus censoring/basis methodology sign-off is explicitly Do-NOT-auto-land, needs Karen plus methodology sign-off. GEMS is ~47% censored and reports lower bounds, so landing it without a substitution rule reproduces the censored-zero artifact that tools/audit-contamination-profile-integrity.mjs is build-blocking against.

### OI-20260910-basis-cell-freetext-overflow — Basis cells on category6/7 derived product tables dump every free-text basis string, mixing as_sold and as_consumed in one cell

- scope: **auto** · type: finding · status: open · repo: index
- paths: `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`, `wiki/products/chocolate.md`, `wiki/products/cooking-oils-other.md`
- repro: After the HMI-GAP-1c wiring fix, wiki/products/chocolate.md Cd renders a Basis cell listing 17 distinct free-text basis strings, including both as-sold and prepared/as-consumed German MEAL basis, in a single cell alongside one pooled range. The category1 register uses short normalized basis tokens (as-sold, prepared-for-feeding), so its pages read cleanly; category6/7 registers carry long per-source prose in the basis column.
- done when: Basis strings are normalized to a bounded token set, or the cell reports the distinct bases with a count rather than the full list; A range cell never pools as_sold and as_consumed values without saying which basis the reported central figure is on
- notes: Pre-existing generator behaviour, newly visible because these cells were empty before. Honest but unreadable, and the as_sold/as_consumed mixing is a basis-conflation risk under CLAUDE.md Part 14. Out of scope for the HMI-GAP-1c wiring order; logged rather than chased.

### OI-20260909-readacross-basis-facevalue — Read-across cells apply as_consumed sovereign limits at face value to as_sold products (basis inconsistency; conservative but unclean provenance)

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled/baby-cereals-dry-rice-based.json`
- repro: Canary A: tHg 8 (IL FCS-2016 as_consumed porridge) and Al 500 (FSANZ Sch19 as_consumed formula) applied face-value to an as_sold dry cereal. Over-strict (fail-safe, never looser than law) so passes method-lock, but basis differs from the page native_basis. Recurs across every read-across cell corpus-wide.
- done when: Corpus-wide basis policy for read-across cells decided: disclose basis-mismatch explicitly and/or convert; no number changed without STATUS delta
- decision: _pending_

### OI-20260909-olive-oil-product-summary-coverage — Trace olive-oil source coverage into the product occurrence summary

- scope: **auto** · type: audit · status: open · repo: index
- paths: `wiki/products/olive-oil.md`, `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`, `data/evidence/product_source_routing_audit.csv`
- repro: The olive-oil product page lists 21 source records, but its generated Literature Evidence Summary reports no concentration data loaded for Pb, Cd, tAs, and Ni. On 2026-09-09 the routing audit classifies all 21 olive-oil routes as source_on_page_no_structured_value with value_record_count 0. The summary generator reads seven category-1/category-5 occurrence-summary CSVs; all seven have zero olive-oil rows. This confirms a source-to-table coverage gap, not proof that the renderer dropped eligible rows or that no olive-oil literature exists. Determine whether usable source facts await extraction/adjudication, live in another approved register the summary does not read, or are legitimately context-only.
- done when: Trace every olive-oil source route to approved product-row occurrence records or an explicit context-only/extraction-pending disposition, preserving source, analyte species, basis, statistic type, censoring, and provenance.; If eligible occurrence records already exist outside the current seven CSV inputs, repair the central product-summary input path and verify the regenerated olive-oil summary includes them; do not patch generated wiki regions by hand.; If structured extraction is absent or ineligible, retain the specific documented gap and describe zero table rows as incomplete structured coverage, never as absence of olive-oil literature.; Do not promote source presence alone to numeric evidence; do not set certification limits, revive retired occurrence-based limit-setting, or claim ingest completion without the ingest gates.
- evidence: wiki/products/olive-oil.md source legend: 21 rows; generated summary: four analytes with zero source count. · data/evidence/product_source_routing_audit.csv: 21 exact product_slug=olive-oil rows; all direct_evidence/source_on_page_no_structured_value/value_record_count=0. · tools/evidence/apply-product-hmtc-evidence-summaries.mjs occurrenceSummaryFiles lists seven category-1/category-5 CSVs; readOccurrenceRows loads only those files and occurrenceRowsFor filters exact row_slug and species; no olive-oil rows found in those inputs.
- notes: Logged separately from the Ask retrieval and search UX repair. The stale blanket no-coverage prose has been corrected; this item concerns the preexisting structured product table only. No primary-text extraction or certification work was performed while logging it.

### OI-20260909-mobile-chrome-overflow — Existing mobile header and footer links overflow the viewport

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `quartz/styles/v3-chrome.scss`, `quartz/components/styles/topNav.scss`, `quartz/components/styles/footer.scss`
- repro: At a 390px fixed browser frame, the shared Index Pro link extends to x469 and footer links to x405. The author-profile body and hero fit within 390px and their columns align. The same overflow is present on the synthesis page. Follow-up 2026-09-10: after the homepage mobile-navigation repair, CUA at a 390px viewport confirms navigation and hero controls fit, while document.scrollWidth is 409px. The footer Editorial standards link (/editorial-standards) reaches x404.9 and Errata and revisions (/errata) reaches x398.8 within their list items. The remaining overflow is in the preexisting footer.
- done when: Header and footer fit a 390px viewport while preserving navigation access; No document-level horizontal scrolling on reference or author pages; Footer links and their list items fit within both 320px and 390px viewports, with document.scrollWidth no greater than document.documentElement.clientWidth at either width
- evidence: Parent CUA responsive verification on 2026-09-10: viewport 390px; document scrollWidth 409px; footer link right edges 404.9px and 398.8px; all navigation and hero controls fit.
- notes: Outside the author/profile changes; recorded during responsive verification. The 2026-09-10 homepage/hero task reconfirmed residual footer overflow. Inspect unlayered v3 footer sizing against legacy responsive rules; this remains outside the authorized hero/navigation edit scope.

### OI-20260909-method-v2-spec-percentile-reconcile — Reconcile canonical Method v2.0 spec to the government-limit CEO lock (percentile still defined as live)

- scope: **human-gated** · type: decision · status: queued · repo: index
- paths: `data/method/method-v2.json`, `CLAUDE.md`, `tools/standards/method-drift-lint.mjs`
- repro: Cert-repo C-1 STATUS (2026-09-09T10:46Z, heavymetalcertified/docs/ELON_BRIDGE.md) raised an ASK that is index-repo work and was not ledgered in either repo: data/method/method-v2.json, the method-drift lint, and CLAUDE.md Part 19 still define selective percentile-pooling (P97/P45, literature-baseline) as live Method v2.0, while the shipped data and the cert public pages have moved to strictest-government-limit + disclosed read-across. Two named options: (A) retire percentile from the spec and flip the percentile signatures requires_anchor->forbidden in the lint - the forbidden regex must NOT match the ~85 generated pages that cite descriptive occurrence P95/P97 or the build breaks; or (B) keep it dormant-but-documented if NOT LIVE means not currently producing cells. Human-gated: it is a policy-doc/method-definition edit awaiting a named A-or-B decision from Elon/Karen, and it blocks a clean C-PUSH on the cert repo.
- done when: A named decision (A or B) is recorded before any edit to data/method/method-v2.json or CLAUDE.md Part 19; If A: percentile-pooling retired from the spec, method-drift-lint percentile signatures flipped to forbidden, and a full build proves the forbidden regex does not match the ~85 generated pages citing descriptive occurrence P95/P97; If B: the spec and Part 19 state explicitly that percentile-pooling is dormant and not producing cells, with no lint change; Part 19 of CLAUDE.md and data/method/method-v2.json agree with each other and with the shipped government-limit data after the change
- decision: **APPROVE: Option A, named by ELON ORDER C-2 (2026-09-09T11:32Z) — retire percentile from the LIVE method definition. Executed: cert spec data/method/method-v2.json (4d21583) + method-drift-lint forbidden signatures with the descriptive-P95/P97 false-positive guard held (0 live-page hits, 47 descriptive pages stay legal); index CLAUDE.md Part 19 (54a731ef6) + rationale-tag vocabulary reconciled to the live set this run. No numeric ceiling changed. Residual data-tag residue tracked separately as OI-20260909-literature-baseline-tag-residue.**

### OI-20260909-literature-baseline-tag-residue — 3 live cert standard pages + standards.json still carry the retired literature-baseline rationale tag (percentile-era data residue)

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `content/standards/butter-and-ghee.md`, `content/standards/infant-formula-powder.md`, `content/standards/mixed-meals.md`, `content/static/data/standards.json`
- repro: grep -rl 'literature-baseline' ~/Desktop/heavymetalcertified/content returns 3 md pages + standards.json. These are generated; the tag originates in the compiled record / index config (index->cert compile). C-2 retired literature-baseline from the method vocabulary but forbade changing numeric ceilings, so the tag was left in place.
- done when: the 3 pages + standards.json carry no literature-baseline tag; each affected cell re-tagged to its true live basis (regulatory-alignment/read-across/precautionary/etc.) at the compiled/index source, not hand-edited on the generated page; published numeric ceiling for each affected cell unchanged unless a separate ceiling decision is made; after re-tag, method-drift-lint can add a bare literature-baseline forbidden token without breaking the build
- decision: _pending_

### OI-20260909-legacy-wiki-link-gaps — Adjudicate legacy missing wiki destinations and prevent new broken links

- scope: **auto** · type: finding · status: open · repo: index
- paths: `data/evidence/link-integrity-gaps.csv`, `tools/audit-link-integrity.mjs`
- repro: Release audit at 7b92379b0 records 1117 origin/target pairs covering 557 missing body-wikilink targets; compiled-output triage confirmed 483 targets rendered publicly across 989 origin/target pairs. Existing code fixes validate automatic destinations; the remaining gaps come from authored legacy links and missing pages.
- done when: Every ledger row is repaired using a verified canonical destination or retained with a specific missing-source/page disposition; no blanket aliases or pending-evidence promotion; Add a regression gate that prevents growth in unresolved published targets while preserving an explicit legacy baseline
- notes: The requested synthesis article now has no broken internal destinations or section anchors. This follow-up covers the older corpus backlog, primarily source records, and must preserve species distinctions, source identity, and routing evidence.

### OI-20260909-h7-onboarding-finder-ungate — ORDER H-7: un-gate the onboarding Standards Finder (single-standard lock is wrong for multi-product brands)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `~/Desktop/heavymetalcertified-app/src/app/hmt/onboarding/OnboardingFlow.tsx`, `~/Desktop/heavymetalcertified-app/src/app/hmt/onboarding/page.tsx`, `~/Desktop/heavymetalcertified-app/src/app/hmt/onboarding/actions.ts`
- repro: /hmt/onboarding step 5 (FINDER_STEP) renders "Choose your product's standard" and canAdvance gates on finderComplete, so category+product+form+market must be picked before an account can be created. CEO intent (2026-09-09): brand enters portal -> products/SKUs (plural) -> suggested categories -> evidence -> decision -> pay; no single-standard lock-in during early onboarding. Unattended bridge runner is sandboxed to the index repo and cannot write to the app repo, so this needs an attended session there.
- done when: FINDER_STEP is skippable: canAdvance is true at FINDER_STEP and account creation never blocks on finderSelection; Any finder preview is explicitly optional and labelled example only - not your locked program scope; Singular your product's standard copy retired in OnboardingFlow.tsx heading/dek and onboarding/page.tsx metadata description; Real per-product/SKU standard selection documented as living in the portal products/readiness flow; tsc --noEmit clean and vitest suite green; local commit only, no push without Elon PASS
- decision: _pending_

### OI-20260909-citation-as-subject-prose — Synthesis prose uses citations as sentence subjects, rendering as leading superscripts

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/synthesis/`
- repro: On many synthesis pages the inline [[sources/..|Author Year]] citation is authored AS the sentence subject (e.g. "Porwollik and Jafari 2026, published in PLOS ONE, found..."). The superscript-citation system (website client script + now the PDF) replaces the author-year with a raised number, so the sentence reads "1, published in PLOS ONE, found..." — grammatically the subject is gone. This is pre-existing website behavior, now mirrored in the PDF (parity). Fixing requires re-authoring the prose so the citation is clause-final/parenthetical rather than the subject. Not a rendering bug.
- done when: Audit synthesis pages for citation-as-subject constructions; Re-author so superscript citations attach to a complete clause, not replace the subject; Web and PDF both read as narrative prose with trailing superscripts
- decision: _pending_

### OI-20260909-babycereals-slug-mismatch — version-history slug mismatch: baby-cereals-dry vs baby-cereals-dry-rice-based

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/standards/version-history/baby-cereals-dry.json`, `data/standards/version-history/baby-cereals-dry-rice-based.json`
- repro: S-DOI-1b page of record is baby-cereals-dry-rice-based; pre-existing version-history record is baby-cereals-dry. New record created under correct slug; older record needs reconcile/merge or explicit scope split.
- done when: baby-cereals-dry vs baby-cereals-dry-rice-based version-history records reconciled or intentionally scope-split with a note
- decision: _pending_

### OI-20260909-agents-percentile-residue — AGENTS.md lines 72-124 still carry live-percentile limit-setting prose (P97/P45) contradicting the 2026-09-09 method lock

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `AGENTS.md`
- repro: grep -n "pooled P97" AGENTS.md → line 124 reads as live limit-setting (clean=pooled P97, dirty=pooled P45), contradicting the LIVE method lock at line 12 (gov-limit default; percentile RETIRED). Evidence-fitness guidance above it is fine; the limit-setting sentence is residue.
- done when: AGENTS.md percentile text reframed as RETIRED/evidence-fitness-only, consistent with the line-12 lock and method-v2.json
- decision: _pending_

### OI-20260908-wikibiome-lift-metals-microbiome-framework — Lift metals-microbiome-disease-pathogenesis framework to WikiBiome

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/synthesis/metals-microbiome-disease-pathogenesis.md`
- repro: Foundational framework published on HMI at /synthesis/metals-microbiome-disease-pathogenesis with wikibiome_crosswalk: metals-microbiome-disease-pathogenesis. Federate to WikiBiome with minimal edits, one-way, per CLAUDE.md Part 3. NOTE stale path: the live WikiBiome repo is ~/Desktop/microbiomemedicine (remote paleofoundation/microbiomemedicine), NOT ~/Desktop/wikibiome as Part 3 states — worth correcting in CLAUDE.md.
- done when: Framework federated to WikiBiome keyed to the crosswalk anchor; One-way link only (public HMI never imports from WikiBiome); HMI page remains the canonical DOI-bearing record
- decision: _pending_

### OI-20260908-testing-asymmetry-publish-blocked — the-testing-asymmetry.md is publication-blocked by its own adversarial audit; honest rewrite (Part A) not done

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `data/workbench/public-briefings/the-testing-asymmetry.md`, `data/workbench/public-briefings/the-testing-asymmetry-ADVERSARIAL-AUDIT.md`
- repro: Adversarial audit (committed alongside the briefing) rules the strong claim ('insane not to test / testing safer even for the dirtiest brand') NOT earned — overstated in 4 load-bearing places. CRITICAL program-design findings F1 (certifier as subpoenable serial adverse witness / honeypot), F2 (RFR 417 + formula 412 mandatory-reporting collision), F3 (negligent-certification / E&O). Part A (argument corrections) is model-doable; Part B is counsel's (Ira Sacks). Briefing must not publish at current strength.
- done when: the-testing-asymmetry.md rewritten to the audit's honest narrower thesis (Part A, model-doable); publication stays gated until counsel signs off on F1/F2/F3 (Part B); cross-linked to OI-20260820-certifier-liability-half (the Part-B liability half already in the ledger)
- decision: _pending_

### OI-20260908-taxonomy-panel-metals-8-vs-11 — Taxonomy panel_metals lists 8 analytes but compiled Cat standards carry the 11-key panel

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/taxonomy/hmtc-v2.json`, `data/workbench/standards/cat1-compiled/infant-formula-powder.json`
- done when: taxonomy panel_metals reconciled to the compiled 11-key panel (Pb,Cd,tAs,iAs,tHg,MeHg,Ni,Sn,Al,Cr,Cr-VI) OR a documented rationale for the 8-vs-11 split
- evidence: Agent inventory 2026-09-08: taxonomy stores 8-metal panel_metals; cat1-compiled/*.json all carry 11 keys
- decision: _pending_

### OI-20260908-ingest-metals-microbiome-review-citations — Ingest the 46 not-yet-in-corpus citations from the metals-microbiome review

- scope: **auto** · type: audit · status: open · repo: index
- paths: `wiki/synthesis/metals-microbiome-disease-pathogenesis.md`
- repro: Published review cites 50 works; only 4 have HMI source pages (coryell2019, hoen2018, soto-ocana2024, coe2023). Triage the other 46 (Works cited) for corpus ingestion via /discover so claims gain per-source provenance and anchor_sources can deepen.
- done when: Cited works triaged against corpus; Qualifying open-access papers fetched and ingested as source pages; anchor_sources updated where new corpus pages back the framework claims

### OI-20260908-hardstop-merge-blocked-unattended — P0 mis-certification hard-stop is PASSed but unmerged: feat/registry-engine-context never promoted to master

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `~/Desktop/heavymetalcertified-app`
- repro: heavymetalcertified-app: master == origin/master (0/0); feat/registry-engine-context = master + exactly one commit 75264d7 (clean ff). Karen PASS recorded in docs/ELON_BRIDGE.md H-5 2026-09-08T14:08Z, but the hourly unattended bridge runner is kill-gated against push/deploy (push = LIVE auto-deploy), so the merge did not fire. Live effect while unmerged: readiness certifies on the loosened selected-market floor and governmentLimits is undefined so the government hard-stop never trips.
- done when: Working tree reconciled; npx tsc --noEmit clean and vitest suite green (expect 81/81) on feat/registry-engine-context; git checkout master && git merge --ff-only feat/registry-engine-context && git push origin master; master auto-deploy confirmed live; merge SHA + deploy status posted as a CLAUDE->ELON STATUS in docs/ELON_BRIDGE.md; Readiness pass/fail path confirmed reading engine-context (strictest-floor + revived hard-stop); Follow-on: migrate scope-panel, application/completion-cost, compute-readiness monitored-decision, reporting-limits floor off the old looser finder
- decision: _pending_

### OI-20260908-cat12-rendered-no-compiled — Cat-12 cleaning renders ~15 cert standards with no matching cat12-compiled JSON in the index

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards`, `heavymetalcertified/content/standards`
- done when: each rendered Cat-12 cleaning standard has a matching compiled JSON under data/workbench/standards/cat12-compiled OR the rendered pages are confirmed compiled elsewhere
- evidence: Agent inventory 2026-09-08: cert renders all-purpose-cleaners etc.; no cat12-compiled dir under data/workbench/standards
- decision: _pending_

### OI-20260902-synthesis-title-emdash-housestyle — 4 synthesis page titles plus their minted DOIs use an em-dash subtitle separator, against the Index em-dash-avoidance house style

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `wiki/synthesis/aquaculture-vs-wild-contamination-differential.md`, `wiki/synthesis/bivalve-cadmium-amplification.md`, `wiki/synthesis/cooking-does-not-reduce-mehg.md`, `wiki/synthesis/se-hg-molar-ratio-certification-debate.md`
- repro: aquaculture/bivalve/cooking/se-hg titles use an em-dash as the title-to-subtitle separator; the /synthesis/ index now renders them with a colon or comma. page title = H1 = minted 10.83376 DOI title (em-dash). Unifying to colons everywhere would require updating the live DataCite titles on 4 permanent Findable records (needs repo DataCite creds). NOT a DOI/Scholar-parity problem (index anchor is not the citation surface); purely house-style.
- done when: Karen rules: keep the minted em-dash titles as-is, or de-em-dash page+H1+index+DOI together in one credentialed pass
- decision: _pending_

### OI-20260902-scope-notes-not-rendered-on-live-standards — Workbench scope_note text renders on 1 of 352 live cert standard pages (butter-and-ghee only); Cat 4/33 pages promise "every collapsed split is named in that row's scope_note" but publish no scope at all

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/standards/cat4-config.json`, `tools/standards/cat33-config.json`, `content/standards/dried-fruit.md`, `content/standards/confectionery-candy.md`, `content/standards/fruit-snacks.md`
- repro: grep -l "Sun-dried, tunnel-dried" ~/Desktop/heavymetalcertified/content/standards/*.md returns nothing although cat4-config.json dried-fruit.scope_note carries that text; grep -l -E "id=\"scope\"|>Scope" content/standards/*.md matches only butter-and-ghee.md. Found while skeptic-checking sweep candidate C158 (preserved/salted/candied fruit): the routing rules already exist in the workbench (confectionery-candy scope_note names imported/ethnic sweets tamarind/chili and similar; fruit-snacks scope_note routes sugar-predominant fruit product to Cat 33) but a brand reading the live site cannot see any of them.
- done when: Every compiled standard page renders its workbench scope_note (or an explicit Scope section) so a brand can tell which row applies without reading repo JSON; The dried-fruit/fruit-snacks/confectionery-candy live pages show their scope text; the method_note claim about scope_note is no longer false on the live page; Optional in the same pass: append saladitos/chamoy plums, Chinese-Taiwanese preserved plums, li hing mui/crack seed, candied and glace fruit to the existing confectionery-candy scope_note as named imported/ethnic sweets (no new row, no seasoning split)
- decision: _pending_

### OI-20260902-readiness-lint-still-overcounts-complete — cert standard-readiness-lint (post PR #65) still overcounts COMPLETE: panel falls back to Object.keys(cells) so 9-key Cat-1 records pass; any non-null value is firm (valued control counts); only the first variant is read (soy never checked); provisional_scaffold records count; corrected is a pass-through of complete; committed readiness-manifest.json at HEAD is stale (107/107/0) and is what mint-dois.mjs gates on

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/standard-readiness-lint.mjs`, `data/standards/readiness-manifest.json`, `data/standards/cat1-pages.json`
- repro: cd ~/Desktop/heavymetalcertified && sed -n 41,66p tools/standard-readiness-lint.mjs && node -e "const r=require(\"./data/standards/cat1-compiled/infant-formula-powder.json\");console.log(Object.keys(r.variants),Object.keys(r.variants.cow))" && git show HEAD:data/standards/readiness-manifest.json | head -30
- done when: panel = canonical 11 constant; missing key = EMPTY; cell COMPLETE only for gov/read_across/form_split numeric with resolvable anchor, subsumed with firm parent, or baseline screen with numeric LOQ + reference_method; control/not_material always EMPTY; all variant keys iterated; provisional_scaffold reported separately, never COMPLETE; page→record via *-pages.json; recordless type:standard pages reported NOT COMPLETE; corrected computed from the confidence manifest, not complete; readiness-manifest.json regenerated and committed with the JSON it describes
- evidence: found by the 2026-09-02 chip-brief verification workflow; brief: docs/tasks/standards-95-confidence-completion-brief.md Phase A

### OI-20260902-no-roundtrip-diff-tool-loosening-universal — No cert↔index round-trip diff tool exists (drift-map scratchpad scripts gone); copying today index recompiles to cert would LOOSEN ~31 live cells and DROP ~1,362 live firm/bounded cells across 22 of 32 dirs; the 2026-08-25 five-category gate is a sample, not the gate

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/standards/diff-compiled-vs-cert.mjs`, `data/evidence/outstanding/2026-08-25-cert-index-recompile-drift-map.md`
- repro: ls tools/standards | grep -iE "diff|round|drift" (none); corpus scan cert vs index 11-panel: loosen/drop per dir cat1 0/12, cat2 0/96, cat3 12/59, cat13 0/109, cat15 0/90, cat22 0/90, cat23 0/226, cat27 1/20, cat28 8/36, cat32 8/32, cat34 2/2 (totals 31 / 1,362)
- done when: tools/standards/diff-compiled-vs-cert.mjs exists: reads $CERT_REPO/data/standards/<dir>, iterates every variant, restricts to config/pages.json slugs, maps index cat1-compiled seafood slugs ↔ cert seafood-compiled; regression = numeric increase | non-null→null/absent | subsumed→non-subsumed-null | basis change | record disappears; prose-only reported separately; wired as a gate before any copy to cert
- evidence: found by the 2026-09-02 chip-brief verification workflow; brief: docs/tasks/standards-95-confidence-completion-brief.md Phase A(4)

### OI-20260902-mint-dois-safety-index-executes-without-dryrun — SAFETY: index tools/mint-dois.mjs executes whenever DATACITE creds are in the environment unless --dry-run is passed (index .env.local now carries populated sandbox creds); cert datacite-preflight.mjs is a WRITE tool (POST/GET/DELETE a draft DOI, prints USER+PREFIX); TEST_PREFIXES in both mint-dois.mjs files lack the issued sandbox prefix 10.84435

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/mint-dois.mjs`, `../heavymetalcertified/tools/mint-dois.mjs`, `../heavymetalcertified/tools/datacite-preflight.mjs`
- repro: sed -n 60,66p tools/mint-dois.mjs (dryRun = --dry-run || !credentialsReady); grep -cE "^DATACITE_(USER|PASSWORD|PREFIX)=.+" .env.local (3); grep -n TEST_PREFIXES tools/mint-dois.mjs ~/Desktop/heavymetalcertified/tools/mint-dois.mjs (no 10.84435); git -C ~/Desktop/heavymetalcertified show wip/stranded-datacite-cat23-b090435:tools/datacite-preflight.mjs | grep -n "method: \"POST\"\|DELETE"
- done when: index mint-dois.mjs requires an explicit --live (or --execute) flag to deposit; credentials alone never execute; 10.84435 added to TEST_PREFIXES in both mint-dois.mjs files; datacite-preflight.mjs header states it creates+deletes a DataCite draft record and requires an explicit --execute flag; it never prints DATACITE_USER
- evidence: found by the 2026-09-02 chip-brief verification workflow; brief: docs/tasks/standards-95-confidence-completion-brief.md Ground truth / Hard rules

### OI-20260902-gb2762-general-food-cells-missing-from-register — GB 2762 general-food Pb cells (confectionery+cocoa 500, frozen drinks 300, jelly/guodong 400, puffed food 500, other dairy 200) absent from regulatory_limits.csv; cert china-gb-2762 page shows only 20 infant/dairy cells; GB 2762-2025 (effective 2026-09-02) retains them verbatim

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/evidence/regulatory_limits.csv`, `wiki/regulations/china-gb-2762-2022-contaminants.md`, `raw/regulatory/cn/china-gb-2762-2025-effective-2026-09-02.pdf`
- repro: grep -i gb2762 data/evidence/regulatory_limits.csv returns 13 rows (milk powder, liquid milk, FSMP, grains, legumes, nuts, condiments, spices, peanuts, soy milk) and no confectionery, frozen-drink, jelly, puffed-food or other-dairy row. pdftotext -raw raw/regulatory/cn/china-gb-2762-2025-effective-2026-09-02.pdf shows Table 1 lead: 可可制品、巧克力和巧克力制品以及糖果 0.5; 冷冻饮品 0.3; 果冻 0.4; 膨化食品 0.5; 乳及乳制品(生乳/巴氏/灭菌/调制/发酵乳除外) 0.2; Annex A classes candies (including gum-based candies), frozen drinks (ice cream, ice lolly, slush, edible ice), jelly. Identical lines in the 2022 PDF. Coverage-sweep lens coverage-6 (dessert/gum residual) needs the jelly and frozen-drink cells as criterion-1 anchors.
- done when: regulatory_limits.csv carries china_gb2762_2025_* rows for confectionery+cocoa Pb 500, frozen drinks Pb 300, jelly Pb 400, puffed food Pb 500, other dairy products Pb 200 with basis as placed on market and instrument GB 2762-2025; cert regulations/china-gb-2762 page regenerated and shows the new cells; existing GB 2762-2022 rows re-verified against GB 2762-2025 values (no change expected for the 13 present rows)
- evidence: raw/regulatory/cn/china-gb-2762-2025-effective-2026-09-02.pdf Table 1 lines 137-153 (raw pdftotext) · raw/regulatory/_source-packages/2026-08-03-infant-child-global/extracted/China_GB2762-2022_English_MAST.txt lines 388-455, 2378-2448

### OI-20260902-datacite-container-backfill — 24 out-of-band-minted synthesis DOIs lack the container(Series Heavy Metal Index) the current mint code now sets

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/datacite-reconcile-media.mjs`, `tools/mint-dois.mjs`
- repro: GET api.datacite.org/dois/10.83376/hmi.organic-certification-not-protective -> container:{}. mint-dois.mjs ~L301 sends container {type:Series,title:Heavy Metal Index} but the 24 synthesis DOIs predate that wiring. Backfill via REST PUT during the same credentialed pass as OI-20260901-datacite-media-apply.
- done when: All 24 10.83376 synthesis DOIs carry container {type:Series,title:Heavy Metal Index}; Backfill runs idempotently alongside the media-apply reconcile

### OI-20260902-cert-stranded-datacite-cat23 — Stranded local cert commit b090435 bundles datacite-preflight tool plus STALE Cat-23 standards edits; must not be pushed as-is

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `tools/datacite-preflight.mjs`, `data/standards/cat23-compiled/`
- repro: Local tag wip/stranded-datacite-cat23-b090435 (commit b090435, authored 2 days ago, never pushed) in heavymetalcertified contains (1) tools/datacite-preflight.mjs, a safe read-only DataCite connection+metadata preflight, on-mission for the approved DOI rollout and worth landing; and (2) edits to 14 data/standards/cat23-compiled/*.json that are STALE. Remote main already completed Cat-23 food-contact plastics correctly at 6016d24/72dfd03 via read-across, so a wholesale push of b090435 would clobber/loosen live Cat-23 standards.
- done when: datacite-preflight.mjs lands on cert main via a fresh commit touching ONLY that file; Cat-23 compiled standards on main remain the 6016d24/72dfd03 versions not b090435; new commit diff shows no data/standards/cat23-compiled changes
- decision: _pending_

### OI-20260902-cert-navpanels-seed-stale — Delete or repurpose stale cert navPanels.seed.ts (holds index-site taxonomy)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `quartz/components/navPanels.seed.ts`, `tools/build-nav-panels.mjs`
- repro: heavymetalcertified/quartz/components/navPanels.seed.ts still holds the index site's Metals/Foods/Products taxonomy with wiki/ slugs; it is unused (MegaMenu imports the hand-maintained generated/navPanels.ts) and tools/build-nav-panels.mjs points at a nonexistent wiki/ dir. Either delete the stale seed, or author a cert-specific seed and wire the generator so a dangling-slug check runs at build.
- done when: navPanels.seed.ts removed, or rewritten to the cert 3-door taxonomy; if the generator is wired into prebuild, a dangling slug fails the build; generated/navPanels.ts output matches the current hand-authored 3-door version

### OI-20260902-cert-live-cells-fail-own-basis-guard — ~511 live cert numeric cells cite register rows whose basis fails the record own basis_guard (cat23 ~136, cat13 71, cat2 64, cat19 52, cat20 49, cat14 48, cat22 45, cat10 39): EU 2009/48 toy-migration rows on cosmetic/textile content cells; NHMRC Cr-VI drinking-water row anchoring 82 total-Cr cells (C6); ~130 non-contact cells on migration rows. Written around the compiler in cert; compile-category.mjs refuses them

- scope: **human-gated** · type: finding · status: open · repo: cert · blocked_on: OI-20260825-recompile-loosening-gate
- paths: `data/standards/*-compiled`, `tools/standards/compile-category.mjs`, `tools/standards/audit-compiled-standards.mjs`, `tools/standards/cat9-config.json`, `tools/standards/cat26-config.json`
- repro: cd ~/Desktop/heavy-metal-index && for d in ../heavymetalcertified/data/standards/*-compiled; do node tools/standards/audit-compiled-standards.mjs --dir=$d --json; done | grep -c "C6\|C5"; plus a basis_guard regex check of each binding_id/source_id row basis against the record basis_guard (511 under the compiler i-flag semantics). cat9-config.json and cat26-config.json have 0 basis_guards.
- done when: every value-determining row of every cert record satisfies the record basis_guard (D2) or carries a disclosed protective basis_bridge / species_direction exception; corrections that RAISE a published number are held from push until Karen ratifies (they look like loosenings); cat9-config.json and cat26-config.json carry basis_guards
- evidence: found by the 2026-09-02 chip-brief verification workflow (two judges recomputed 598 raw / 511 i-flag); brief: docs/tasks/standards-95-confidence-completion-brief.md
- decision: _pending_

### OI-20260902-cert-duplicate-rice-milk-rows — Two LIVE cert standards cover the same product (rice milk): Cat 5 plant-milks-rice-based (5 firm analytes, v1.0 2026-08-17) and Cat 3 rice-beverages-rice-milk (10 firm analytes, v1.0 2026-08-10); taxonomy v2.2 marks Cat 5 r7 RETIRED -> Cat 3, so the Cat 5 page should be retired-in-place to a redirect, not published as a certifiable (and looser, 5-firm) standard

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `content/standards/plant-milks-rice-based.md`, `content/standards/rice-beverages-rice-milk.md`, `content/standards/index.md`, `data/standards/cat5-pages.json`
- repro: cd ~/Desktop/heavymetalcertified && grep -E "^(category|firm_analytes|standard_version):" content/standards/plant-milks-rice-based.md content/standards/rice-beverages-rice-milk.md ; grep -n "plant-milks-rice-based" content/standards/index.md  (register lists it as Beverages 3.12 - 5 firm). Index taxonomy: data/taxonomy/hmtc-v2.json Cat 5 row 7 name = "Plant milks, rice-based (RETIRED -> Cat 3 rice beverages)".
- done when: Exactly one certifiable rice-milk standard is live (rice-beverages-rice-milk, Cat 3, EU 2023/915 iAs 30 ppb non-alcoholic rice drinks binding); /standards/plant-milks-rice-based is a retired-in-place redirect/landing to /standards/rice-beverages-rice-milk with no Master Limit Table of its own, and the register no longer lists it as a 5-firm standard; cat5-pages.json / finder context / open-data export no longer emit plant-milks-rice-based as a product a brand can select; standard-readiness-lint and firewall-cert-lint green
- evidence: Both pages carry iAs 30 ppb, so no numeric contradiction today, but the Cat 5 page has only 5 firm analytes vs 10 on the Cat 3 page: a brand choosing the Cat 5 page certifies against a thinner panel for the identical product
- notes: Found during the 2026-09-02 subcategory completeness sweep. Inverse of a missing-subcategory defect (a duplicate), but it is the same register-coherence problem a retailer buyer or plaintiff expert would notice. Never renumber; retire-in-place per taxonomy governance.

### OI-20260902-cert-doi-writeback-reset-gate0 — GATE 0: cert mint-dois.mjs writes cert_doi into rendered content/standards/*.md, but both renderers regenerate that line from pages.json (which carries no cert_doi), so the first prebuild after a mint resets every DOI to null and REGISTERED flips back to false

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/mint-dois.mjs`, `tools/build-cat1-standard-pages.mjs`, `tools/build-category-standard-pages.mjs`, `tools/standard-readiness-lint.mjs`, `data/standards/*-pages.json`
- repro: cd ~/Desktop/heavymetalcertified && grep -c cert_doi data/standards/*-pages.json (0 for all 32) && grep -n "cert_doi" tools/build-cat1-standard-pages.mjs tools/build-category-standard-pages.mjs (emit from page.cert_doi || null) && sed -n 335,350p tools/mint-dois.mjs (writes into the .md). Also productionDoi(slug) in the readiness lint keys by RECORD slug so Cat-1 (9 pages ↔ 12 records via cat1-pages.json) can never become REGISTERED.
- done when: write-back target is committed source (pages[].cert_doi or data/standards/doi-registry.json keyed by page slug) and both renderers read it; a lint fails when a rendered page cert_doi differs from the registry; productionDoi resolves page→record through the pages.json join; a prebuild after a (dry) write-back does not reset any cert_doi
- evidence: found by the 2026-09-02 chip-brief verification workflow (4 fact-checkers, 4 red-teamers); brief: docs/tasks/standards-95-confidence-completion-brief.md Phase F GATE 0

### OI-20260902-cert-cat26-stale-framing-no-version-bump — Cat-26: framing + v1.1 bump landed (9ee27a5); RESIDUAL = no version-history record and no retained v1.0 edition PDF for the 5 pages

- scope: **auto** · type: content · status: open · repo: cert
- paths: `data/standards/version-history`, `content/standards/aas-injectable.md`, `content/standards/peptides-injectable-hormones.md`, `content/standards/peptides-nasal-sublingual.md`, `content/standards/research-chem-raw-powders.md`, `content/standards/sarms-oral.md`
- repro: git show 9ee27a5 --stat: descriptions, methodology_version (v2.1), method prose and standard_version 1.1 (2026-09-02) fixed on all 5 pages; compiled values unchanged. ls data/standards/version-history | grep -iE "aas|peptid|sarms|research-chem" -> nothing. The manuals page promises a superseded edition stays resolvable; v1.0 (2026-08-14) of these 5 standards has no record and no PDF.
- done when: data/standards/version-history/<slug>.json exists for all 5 Cat-26 slugs with 1.0 (superseded, 2026-08-14) and 1.1 (current, 2026-09-02) entries summarising both 2026-09-02 value changes (drinking-water proxy then ICH Q3D); build-cert-version-history renders the Document versions rail and history section on the 5 pages; a v1.0 PDF is retained at a stable /static/standards/ path or the entry states honestly that no v1.0 PDF was archived
- notes: Narrowed 2026-09-02 07:40Z by the cert build audit after the interactive cert session shipped the framing fix.

### OI-20260902-cert-cat23-release-basis-conflation — LIVE: Cat-23 metal/ceramic/glass food-contact standards used alloy-composition and toy-migration values under a release-into-food basis (cookware Pb 1,000,000 ppb); Pb since reverted to control (edf821e); register targets now exist (GB 4806.9-2023 + CoE) for a release-basis recompile

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `data/standards/cat23-compiled/cookware-metal-alloy.json`, `data/standards/cat23-compiled/cookware-specialty-alloy.json`, `data/standards/cat23-compiled/utensils-metal.json`, `data/standards/cat23-compiled/bakeware.json`, `data/standards/cat23-compiled/food-packaging-foils-wraps.json`, `data/standards/cat23-compiled/food-prep-kettle-interiors.json`, `data/standards/cat23-compiled/food-prep-coffee-maker-pathways.json`, `data/standards/cat23-compiled/tableware-metal-bottles-tumblers.json`, `data/standards/cat23-compiled/tableware-glassware.json`, `data/standards/cat23-compiled/tableware-ceramicware.json`, `data/evidence/regulatory_limits.csv`
- repro: curl -s https://heavymetalcertified.com/standards/cookware-metal-alloy | sed -E "s/<[^>]+>/ /g" | grep -o "Lead (Pb) 1000000" ; node -e "const r=require(process.cwd()+"/data/standards/cat23-compiled/cookware-metal-alloy.json");console.log(r.native_basis, r.cells.Pb.basis, r.cells.Ni.basis)" -> native_basis = element RELEASE into food (ug/kg food) while Pb source = kr_mfds2024_29_pb_metal_food_contact_1000000 (alloy composition, percent by weight) and Ni/Sn/Al source = eu_2009_48_cat3_*_toy_migration (EN 71-3 Cat III scraped toy material). Cr cell rationale claims no sovereign sets a release ceiling for metal articles: false (China GB 4806.9-2016).
- done when: Register carries source-verified rows for China GB 4806.9-2023 (supersedes GB 4806.9-2016; effective 2024-09-06) metal food-contact MIGRATION limits into food simulant, ug/kg: Pb 10, Cd 2, tAs 2, Sb 40, Al 1000 (5000 uncoated aluminium), total Cr 250, Ni 140, Sn 100000; test-method chain cited as GB 31604.1 simulant selection + GB 31604.49-2016 (do not hardcode a simulant) — DONE index commit 095e4ff9b; CoE CM/Res(2013)9 specific release limits recorded as guidance/comparator, never as the binding ML — DONE index commit 095e4ff9b; Every Cat-23 record whose native_basis is release/migration into food carries only release-basis instruments; no cell in a release-basis row cites an alloy-composition (percent by weight) or toy scraped-material (EN 71-3) instrument; Ni/Sn/Al toy-migration cells replaced or reverted to control; A basis-guard lint fails the build when a cell basis kind (content / toy-migration / release / water) differs from the record native_basis kind; Recompiled Cat-23 pages render and export drift-check clean; live cookware-metal-alloy Pb is 10 ug/kg migration (GB 4806.9-2023), not a control cell and not 1,000,000
- evidence: build log 2026-09-02: origin/main 8066338 green; live page renders Lead (Pb) 1000000 read-across · register grep: 0 rows for GB 4806.9 / Council of Europe / CM/Res(2013)9 / Italy DM 21/03/1973 · Index register targets built 2026-09-02 (index main 095e4ff9b): wiki/regulations/china-gb-4806-9-2023-food-contact-metal.md (CURRENT statutory instrument, supersedes GB 4806.9-2016) + wiki/regulations/coe-cm-res-2013-9-metals-alloys-food-contact.md (comparator, not sovereign law). +18 rows in regulatory_limits.csv: 9 GB statutory (cn_*_food-contact-metal-migration_*, status maximum level) + 9 CoE comparator (coe_*_food-contact-metal-srl_*, status guidance release limit (comparator)). Correct migration basis into food simulant (test GB 31604.49-2016), ug/kg: GB Pb 10, Cd 2, tAs 2, Sb 40, Al 1000 (5000 uncoated), Cr-total 250, Ni 140, Sn 100000. CoE SRL comparator ug/kg: Pb 10, Cd 5, tHg 3, tAs 2, Sb 40, Al 5000, Cr-total 250, Ni 140, Sn 100000. CRITICAL: use GB 4806.9-2023 not 2016 (2016 migration Pb 0.05 = 50 ug/kg, 5-20x looser). Verified vs USDA GAIN Tables 3-4 + EDQM Article 4 Tables 1-2 primary sources in raw/regulatory/{cn,coe}/. Cat-23 recompile can read-across the GB 4806.9-2023 migration ML in place of the KR alloy-composition cap.
- notes: Wrong-number-live class (feedback: fix now). Not fixed in the audit session because another interactive session is mid-flight on Cat-23 (16/30 complete via read-across) in the same checkout; three local sessions were messaged. Mirrors the Cat-9 rule BASIS NEVER CONFLATED. CORRECTION 2026-09-02: the audit session originally quoted GB 4806.9-2016 values from memory (Pb 0.05 mg/kg etc.); the index session verified from USDA GAIN + EDQM that GB 4806.9-2023 superseded it with 5-20x tighter limits (Pb 10 ug/kg). Use the 2023 values only. Cr-total rows aliased to panel Cr for cat23 in cert commit 1b06d60be; recompile in progress by a parallel session.

### OI-20260902-c5-formula-al-reconstitution-false-positive — audit-compiled-standards C5 false-positive on formula Al 8000 (8:1 reconstitution not modeled)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/standards/audit-compiled-standards.mjs`
- repro: C5 flags infant-formula-powder Al 8000 as not matching its cited anchor (AU-NZ infant-formula Al 1000). The value is CORRECT: 8000 = 1000 (as-consumed) x the 8:1 powder reconstitution factor. The C5 value-fidelity check compares published vs cited anchor WITHOUT applying the formula reconstitution factor, so it false-positives on formula cells where the 8:1 conversion applies. Pre-existing; not a mint gate (readiness-lint CORRECTED is COMPLETE-based).
- done when: C5 applies the 8:1 reconstitution factor for reconstitution_8to1 subcategories when comparing published vs anchor, so a correct x8 value is not flagged

### OI-20260902-app-onboarding-no-pet-foods-category — LIVE app.heavymetalcertified.com onboarding picker has NO Pet Foods category (Cat 17) and no pet-food-fermentation-derived-protein row: the deployed build carries a stale vendored standards-finder-context (309 slugs, 31 categories) while the live cert export already has Pet Foods (321 slugs, 32 categories)

- scope: **auto** · type: code-fix · status: open · repo: tested
- paths: `heavymetalcertified-app/src/data/standards-finder-context.json`, `heavymetalcertified-app/scripts/sync-standards.mjs`, `heavymetalcertified-app/package.json`
- repro: curl -sL https://app.heavymetalcertified.com/hmt/onboarding | grep -c "Pet Foods"  -> 0 (page embeds Beverages etc. but no Pet Foods; browser check 2026-09-02 confirms hasPetFoods=false, hasFermentation=false). curl -sL https://heavymetalcertified.com/static/data/standards-finder-context.json | grep -c pet-food-fermentation-derived-protein -> present. App committed copy src/data/standards-finder-context.json: 309 slugs, categories=31, no Pet Foods; last refreshed 2026-08-25 (55244ce). package.json prebuild = sync-standards --build (fetches live at deploy, falls back silently to the committed copy on any fetch failure), so either the last app deploy predates the cert export gaining Cat 17 or the build-time fetch failed and fell back.
- done when: Deployed onboarding picker lists Pet Foods and offers every live Cat 17 row including pet-food-fermentation-derived-protein; Committed src/data/standards-finder-context.json refreshed via node scripts/sync-standards.mjs so the fallback copy is not stale (>= 321 slugs, 32 categories); vitest run green in the app repo after the refresh; sync-standards --build logs loudly (and ideally the deploy summary shows) when it falls back to the committed copy, so a silent stale fallback cannot recur unnoticed
- evidence: 2026-09-02 subcategory sweep: live cert export categories = 32 (missing only Cat 9 + Cat 12, see OI-20260817-standards-export-omits-39, now 29 standards); app vendored copy = 31 (additionally missing Pet Foods) · app repo working tree is on feat/registry-engine-context with uncommitted OnboardingFlow.tsx edits from another session; do the refresh on main/a clean worktree, not in that tree
- notes: Directly undercuts the reason the fermentation-protein standard was built: the interested pet brand cannot select its category in the onboarding flow. Mechanism fix (cert deploy -> app redeploy hook) is OI-20260825-standards-fanout-deploy-hook; this item is the immediate stale state.

### OI-20260901-datacite-media-apply — Apply DataCite PDF media association to the 24 live 10.83376 synthesis DOIs (contentUrl + formats) once repo creds land

- scope: **human-gated** · type: promote · status: open · repo: index
- paths: `tools/datacite-reconcile-media.mjs`, `.env.local`
- repro: 24 records under prefix 10.83376 report contentUrl:null/formats:[]. Dry-run of tools/datacite-reconcile-media.mjs shows need-media=24 need-format=24 no-served-pdf=0 (all PDFs HEAD-verified live). Tooling shipped b5287f73b. Live apply blocked on real DATACITE_USER/DATACITE_PASSWORD for the 10.83376 repo (currently PENDING_* in .env.local; Kimberly holds the Fabrica creds that minted the 24). Pairs with the pending reconcile-types --apply.
- done when: api.datacite.org/dois?prefix=10.83376 shows contentUrl as an array containing <url>.pdf AND formats containing application/pdf for all 24 records; curl -I -H 'Accept: application/pdf' https://doi.org/10.83376/hmi.wastewater-irrigation-multimetal-crop-pathway content-negotiates to the PDF; re-running tools/datacite-reconcile-media.mjs reports already-ok=24
- decision: _pending_ — enact: `node --env-file=.env.local tools/datacite-reconcile-media.mjs --apply`

### OI-20260901-datacite-contenturl-not-reflecting — DataCite REST contentUrl + content-negotiation not reflecting the registered MDS PDF media for the 24 index DOIs (10.83376)

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `tools/datacite-reconcile-media.mjs`
- repro: After datacite-reconcile-media.mjs --apply, MDS GET /media/{doi} returns 200 application/pdf=<pdf> for all 24, but REST api.datacite.org contentUrl stayed null and data.datacite.org (crosscite) 303s Accept: application/pdf to the HTML landing page — unchanged across a 30-min/15-check watch. formats + types DID update via REST PUT. Likely slow DataCite reindex OR a legacy-MDS-media-to-REST-contentUrl decoupling. A 4h background watch (task bfxt56lpv) is running. Mitigation: HMI landing pages already expose citation_pdf_url so PDF discovery isn't solely dependent on this.
- done when: REST contentUrl on all 24 is a non-null array containing the .pdf URL; data.datacite.org / doi.org with Accept: application/pdf 302/303-redirects to the .pdf (not the HTML page); if still unreflected ~24-48h after registration, a DataCite support ticket is filed re: MDS /media not populating REST contentUrl
- decision: _pending_ — enact: `curl -s 'https://api.datacite.org/dois/10.83376/hmi.wastewater-irrigation-multimetal-crop-pathway' | node -e 'const a=JSON.parse(require("fs").readFileSync(0,"utf8")).data.attributes;console.log("contentUrl:",JSON.stringify(a.contentUrl))'`

### OI-20260901-cert-datacite-media-port — Port DataCite PDF media association to heavymetalcertified before its first standards mint

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/mint-dois.mjs`, `tools/datacite-media.mjs`, `tools/datacite-reconcile-media.mjs`
- repro: Index shipped PDF media association (b5287f73b): DataCite contentUrl is read-only in the REST API and set only via the MDS Media API. Cert's mint-dois.mjs has the same gap. Cert standard PDFs live at /static/standards/<slug>.pdf under the cert prefix. Port tools/datacite-media.mjs + tools/datacite-reconcile-media.mjs (adapt PDF URL scheme, prefix, and the Series container per the Part 2 firewall) and wire the post-mint association into cert mint-dois.mjs, so cert standard DOIs get contentUrl from day one. No cert DOIs minted yet, so no live backfill is needed if this lands before the first mint. Cert push = LIVE: commit local-only per cert discipline.
- done when: heavymetalcertified has tools/datacite-media.mjs + tools/datacite-reconcile-media.mjs adapted to the cert prefix and /static/standards/<slug>.pdf; cert mint-dois.mjs associates the standard PDF after each live mint (HEAD-gated); dry-run of the cert reconcile tool derives correct /static/standards/*.pdf URLs for cert DOIs
- decision: _pending_

### OI-20260831-version-doi-mint-flow — Version-DOI mint FLOW: mint a .v<n> version DOI on material change (IsVersionOf/IsNewVersionOf) + PATCH the concept's HasVersion + freeze-on-mint

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/mint-dois.mjs`
- repro: cert branch feat/doi-versioning-wiring (ce3a8d0) added the tamper-evidence + versioning METADATA to buildPayload (dates Issued, Series container, SHA-256 alternateIdentifier from the freeze manifest, HasVersion chain relations). The version-revision FLOW is still to wire (live-gated, needs credentials + the actual mint to exercise): mint a per-edition version DOI suffix .v<n> on material change carrying IsVersionOf(concept)+IsNewVersionOf(prior); PATCH the concept DOI to add HasVersion (the tool only POSTs today, needs a PUT/PATCH verb); invoke freeze-standard-version at mint; backfill manifest.doi with the minted version DOI. Pairs with OI-20260831-freeze-integration.
- done when: version DOIs mint on material change with IsVersionOf+IsNewVersionOf; concept DOI PATCHed with HasVersion on each new edition; freeze invoked at mint + manifest.doi backfilled
- decision: _pending_

### OI-20260831-standard-pdf-recordless-gap — ~38 standard pages have no compiled record, so build-standard-pdf --all skips them (no downloadable PDF)

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/build-standard-pdf.mjs`
- repro: cert repo: grep -rl "^type: standard" content/standards/*.md => 351; build-standard-pdf.mjs --all rendered 313/313 (only slugs with a data/standards/*-compiled/<slug>.json). ~38 standards render from a different data path (e.g. Cat-1 build-cat1-standard-pages, or form-split/variant records) and got no PDF -> no Download button -> DOI-implies-PDF not yet complete for them. Extend findRecord()/the generator to those data paths, regenerate, commit; the prebuild wire step turns their buttons on automatically once each PDF exists.
- done when: Every type:standard page with a DOI-eligible standard has a /static/standards/<slug>.pdf; build-standard-pdf --all covers all standard data paths; wire step turns on all buttons

### OI-20260831-signnow-template-prep — Prepare the HMTc Confidentiality Undertaking SignNow template (real signature + signer role + prefill fields + 12-section text)

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `heavymetalcertified-app/src/lib/signnow.ts`
- repro: SignNow template 91cd8985 has empty roles/fields; PR#3 template-path SignNow needs it prepared to carry Karen real signature + personalize per brand (kills the Natural Force sample).
- done when: Template carries Karen real signature in the HMTc block; A Recipient 1 signer role with signature/date/title field; Prefill text fields named applicant_legal_name/signer_name/signer_title/reference/effective_date; Counsel-final 12-section text
- decision: _pending_

### OI-20260831-signnow-live-smoke-test — Live counter-sign smoke test of the render-and-upload SignNow path

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `src/lib/signnow.ts`
- repro: PR #2 swaps static-template-copy for render-NdaDoc + POST /document upload + free-form invite. Type-checks clean but the live SignNow upload+invite API shape is UNVERIFIED against a real account.
- done when: One real counter-sign invite sent and completed against the live SignNow account; confidentiality_agreements row moves issued -> countersign_sent -> signed
- decision: _pending_

### OI-20260831-seafood-records-misplaced-cat1-compiled — 7 Cat-6 seafood records were compiled into cat1-compiled/ (wrong output dir) by an earlier run

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled`
- repro: data/workbench/standards/cat1-compiled/ contains 7 Cat-6 seafood records (canned-seafood, cephalopods, fish-freshwater, fish-marine-*, seaweed-kelp, shellfish) from an earlier Cat-6 run that shared the outdir. Pre-existing clutter; they audit clean but do not belong in cat1-compiled. Remove or relocate to the Cat-6 output dir.
- done when: the 7 Cat-6 records are removed from cat1-compiled/ or relocated to their own dir

### OI-20260831-risk-flag-catalog-renderer — Catalog-locked-row standards (build-standards-pages.mjs) do not yet carry the Risk Flag section

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/build-standards-pages.mjs`
- repro: Risk Flag adopted on the custom standard renderers (build-category-standard-pages.mjs #60, build-cat1-standard-pages.mjs #61). The third renderer, build-standards-pages.mjs (catalog-locked rows, gated standards API, uses descriptorFromCatalogAnalyte not compiled cells), still has no Risk Flag. Different data model: renderRiskFlagForStandard expects compiled record cells with .value; the catalog path needs a small adapter to map catalog analytes to {analyte:{value}} + occurrence keyed by product_slug. Wire it for full coverage, or confirm those pages are legacy/not-live and close.
- done when: Catalog standard pages carry a Risk Flag section OR are confirmed not-live; occurrence + curated flags render with the catalog data model; lints green

### OI-20260831-regwatch-to-version-mint-wiring — Wire the regulatory-watch change-detector to standard version bumps + version-DOI mint (close the staleness gap)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/mint-dois.mjs`, `data/regulations/cert-regulatory-watch-impact.json`, `data/standards/version-history`
- repro: The transparency plan requires a NEW version DOI whenever a governing government ML changes. The detector already exists -- data/regulations/cert-regulatory-watch-impact.json (21 records; impact_class e.g. current-binding-limit-change; affected_analytes; related_standard_urls) -- but it is NOT wired to standard_version, version-history/*.json, or cert_doi. So a government ML change can occur with no version bump and no re-mint: the transparent record silently goes stale AND a certified product is now certified to a limit its own government has moved past. Also: version bumping is currently manual/hand-authored with no content-hash or limit-diff tie, so 'numbers changed but version did not' is undetectable. Only 18/351 standards have a version-history record.
- done when: a regulatory-watch impact record of class current-binding-limit-change opens a needs-version-bump + version-DOI-mint queue for its related_standard_urls; a limit change with no matching standard_version bump + versions[] entry fails a lint (content-hash or limit-diff tie); every one of the 351 standards has a version-history record
- decision: _pending_
- notes: Part of realizing the versioned-DOI-for-transparency plan (OI-20260831-doi-granularity-two-tier). This is the 'under-reacting / staleness' failure mode from the 2026-08-31 re-run adversarial audit -- the real risk that replaces 'frequent re-minting' once the COMPLETE + audit-passing publish-gate (Karen's churn-avoidance point) is enforced.

### OI-20260831-published-panel-8-not-10-11 — Cat-1 (and reduced-panel categories) publish only 8 analyte cells; official HMTc panel is 10-11 — tAs, MeHg, Cr-VI missing on every subcategory (violates Certification-Readiness Ruling §1)

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/standards/compile-cat1.mjs`, `tools/standards/cat1-config.json`
- repro: compile-cat1.mjs DEFAULT_PANEL = [Pb, iAs, tHg, Cd, Cr-total, Ni, Sn, Al] (8). Cat-1 config has no panel override, so infant-formula-powder etc. emit exactly 8 cells (verified: node inspection of cat1-compiled/infant-formula-powder.json). The official HMTc certification panel (CLAUDE.md Part 14) is 10 (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn), or 11 with total-Cr published as its own line alongside Cr-VI (v2.6 Species/screens ruling: the total metal is a first-class published limit, never hidden). Missing published cells on EVERY Cat-1 subcategory: tAs, MeHg, Cr-VI. Violates Certification-Readiness Ruling section 1 (species bounded by total — iAs<=tAs, MeHg<=tHg, Cr-VI<=total-Cr — are enforceable published ceilings, never blank). The prior 8/8 COMPLETE readiness/confidence read measured the wrong panel and is retracted.
- done when: Cat-1 publishes the full 10-11 panel: tAs, MeHg, Cr-VI added as cells on every subcategory; MeHg emitted as bounded <= tHg (reconcileMercurySpeciation, already present once MeHg is in the panel) or a direct species ML where one exists; Cr-VI emitted as a bounded <= total-Cr published cell (compiler enhancement mirroring the mercury reconciliation), superseding the hidden not_material reflex-only treatment per the v2.6 ruling; tAs sourced from total-arsenic baby-food MLs or a disclosed read-across per subcategory; every Cat-1 subcategory (existing 9 + new fish/meats/dairy-desserts) recompiles COMPLETE against the full panel; the same reduced-panel gap is audited across the other category compilers
- decision: _pending_
- notes: Systemic: the reduced 8-panel is the compiler default and likely affects other categories (seafood already re-adds MeHg via config.panel; audit tAs/Cr-VI everywhere). MeHg + Cr-VI are bounded-derivable from totals the compiler already computes (near-free); tAs is the one needing genuine sourcing. Caught by Karen 2026-08-31 (10-or-11-cells question). This is the real completeness gate for Cat-1, upstream of the DOI mint; supersedes the 8-cell confidence scorecard.

### OI-20260831-onboarding-cadence-pr3-promote — Merge PR #3 (onboarding cadence redesign + template-path SignNow) to heavymetalcertified-app master; close superseded PR #2

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `heavymetalcertified-app`
- repro: Harness blocks Claude from pushing cert-app master. PR paleofoundation/heavymetalcertified-app#3 open (based on PR#1 = 12-section NDA), build+tsc green. Reorders onboarding (account@step2 + background firecrawl + NDA details + finder removed) and switches SignNow to the template path. PR#2 (render-upload) is superseded → close.
- done when: PR #3 merged to master (prod auto-deploys); PR #2 closed as superseded; Verified on preview per PR #3 description (background firecrawl + real-signature SignNow)
- decision: _pending_

### OI-20260831-nda-portal-prod-promote — Promote NDA portal PRs #1 (12-section text) and #2 (drift-proof SignNow) to heavymetalcertified-app production

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `src/lib/pdf/NdaDoc.tsx`, `src/lib/signnow.ts`, `src/lib/pdf/render-undertaking.ts`, `src/app/portal/confidentiality/actions.ts`
- repro: Harness auto-mode classifier blocks Claude from `git push …:master` (prod). PRs paleofoundation/heavymetalcertified-app#1 and #2 are open, verified/type-checked, awaiting Karen's merge to deploy.
- done when: #1 merged to master and live /legal/hmtc-confidentiality-undertaking.pdf shows 12 sections; #2 merged to master
- decision: _pending_

### OI-20260831-intelligent-manual-build-chain — RULE: creating a manual must auto-chain the next build steps (manifest register -> /manuals listing -> mega-menu nav -> PDF)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `tools/build-manuals-page.mjs`, `data/manuals/manifest.json`, `tools/build-nav-panels.mjs`, `tools/build-cat17-manual-pdf.mjs`
- repro: Program owner: after a manual is created, /manuals (and the logical next steps) must update automatically. Current chain audit: (1) build-category-manual writes content/manuals/<slug>.md. (2) build-manuals-page reads data/manuals/manifest.json (NOT a glob) and IS in the prebuild -> /manuals regenerates every build, but ONLY for manuals in the manifest; a created manual is NOT auto-registered in the manifest. (3) mega-menu/nav: build-nav-panels is NOT in the prebuild (hand-maintained; clobbers) -> a new manual does not auto-appear in the nav. (4) manual PDF: build-*-manual-pdf.mjs run manually -> no auto-PDF. All 8 manuals happen to be in the manifest today, so the gap is not biting yet. Intelligent-build fix: a prebuild reconciliation that upserts every content/manuals/<slug>.md into the manifest (as forthcoming/pending, metadata from frontmatter) so creation -> listing is automatic; decide nav auto-generation (careful: build-nav-panels clobbers hand-maintained navPanels.ts) and manual-PDF auto-generation (react-pdf, local-only like standards). Program owner noted the manuals architecture is being reworked, so align the implementation with that rework.
- done when: Creating a manual auto-registers it in data/manuals/manifest.json (or build-manuals-page auto-discovers content/manuals/); /manuals + mega-menu reflect a newly created manual with no hand-editing; Manual PDF auto-generates or is explicitly flagged as the remaining human step; The rule is documented for future sessions
- decision: _pending_

### OI-20260831-infant-manual-v2-doi-supersession — Infant manual v2 still cites its v1 Zenodo DOI — mint a v2 DataCite DOI (IsNewVersionOf) and supersede on mint

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/manuals/infant-and-child-foods.md`, `tools/mint-dois.mjs`, `docs/DOI-MINTING-LEDGER.md`
- repro: content/manuals/infant-and-child-foods.md is Method v2.0 (snapshot Method = Strictest government ML; rail_box says 2026-08-06 (Method v2.0); PDF is HMTc-Infant-and-Child-Foods-Program-Manual-2026-v2.pdf) but cert_doi = 10.5281/zenodo.20771543, which the page's own rail_box calls the earlier 384-page deposited editions (v1). So the live v2 page's Cite-this-page DOI resolves to superseded pre-government-ML (v1) methodology. A frontmatter comment instructs KEEP the existing Zenodo deposit ... do not re-mint and notes the tool's own-field check skips this item, so a normal mint run silently preserves the mismatch. Karen ruled 2026-08-31 that standards/manuals have moved v1->v2 and the v1 keep-do-not-re-mint logic no longer holds; a new edition getting its own DOI is correct versioning, not citation fragmentation.
- done when: content/manuals/infant-and-child-foods.md cert_doi is a freshly-minted v2 DataCite DOI on our own prefix, not the Zenodo v1 DOI; the v2 DataCite record carries relatedIdentifier IsNewVersionOf 10.5281/zenodo.20771543 (relatedIdentifierType DOI); the Zenodo v1 deposit (10.5281/zenodo.20771543) is preserved (not deleted) and stays cited in the manual edition-history/rail_box as the earlier 384-page edition; tools/mint-dois.mjs has an explicit methodology-version supersede path so the Zenodo own-field skip does not silently skip a v1->v2 bump; the frontmatter comment on infant-and-child-foods.md is changed from KEEP...do-not-re-mint to the supersede instruction; the other 4 manuals (dairy-and-milk-products, grains-cereals-rice, pet-foods, seafood; cert_doi currently null) mint fresh v2 DataCite DOIs in the same run
- decision: _pending_
- notes: Blocked on DataCite credentials landing in cert .env.local (same gate as the standards batch; see the 'Connect DataCite to index + cert builds' chip, task_d77eba3a). Enact at connection/mint time. Registrar choice: mint v2 on DataCite to match the other 4 manuals + the standards batch, rather than adding a new version on Zenodo. Irreversible findable DOI on LIVE cert => human-gated; Karen has set the direction (supersede), the mint go-ahead rides the overall DataCite go-live gate.

### OI-20260831-fish-baby-food-cat6-mehg-decision — fish-containing-baby-food scaffold: aquatic tHg 500 / tAs 1000 + MeHg-<=-tHg are placeholders pending a Cat-6 species-MeHg read-across decision

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/standards/cat1-config.json`
- repro: fish-containing-baby-food is a provisional_scaffold. Its fish-driven analytes (tHg 500, tAs 1000, MeHg bounded <=tHg) are placeholders read across from pure-seafood values; a fish BABY DINNER is not pure fish, so the correct MeHg/tHg limit is a Cat-6 seafood read-across x fish-fraction, not the pure-aquatic value. Must be decided before the scaffold is promoted to a certifiable standard.
- done when: fish MeHg/tHg limit derived from Cat-6 x fish-fraction and disclosed; scaffold promoted or kept provisional by decision
- decision: _pending_

### OI-20260831-false-reconstructability-claim-live — Live standard/manual pages ship a FALSE reconstructability claim (superseded versions do NOT remain resolvable, and no edition has a DOI) — Daubert-facing, fix now

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/manuals/index.md`, `tools/build-manuals-page.mjs`, `data/standards/version-history`
- repro: Re-verified 2026-09-02: /manuals says "A new edition gets a new DOI and the prior edition stays resolvable". data/standards/version-history/infant-formula-powder.json lists only 3.0 (superseded, PDF resolves 200) and 3.1 (current, pdf null, doi null); v1.0 and v2.0 have no record and no URL (404 on every guessed path). 0 of 323 standards carry a DOI (readiness manifest REGISTERED=0). Cat-26 values changed twice today under an unchanged v1.0 label with no version-history record.
- done when: /manuals text states only what is true today: editions are dated; superseded PDFs are kept where they exist; DOIs are forthcoming on registration; Every material limit change bumps standard_version and writes a version-history entry with a resolvable prior-edition PDF (enforced by a lint, not convention)
- decision: _pending_
- notes: Karen decision needed only on wording of the interim claim; the lint is auto. Re-verified by the 2026-09-02 cert build audit.

### OI-20260831-doi-mint-rule1-confidence-definition — Define DOI-mint Rule #1 '95% confidence' = firm-by-occurrence OR firm-by-sovereign-ML OR disclosed-read-across; NOT 95% occurrence for all 9 analytes (impossible under Method v2.0)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `docs/governance/hmtc-governing-principles.md`, `tools/standard-readiness-lint.mjs`
- repro: The Cat-1 corpus audit (2026-08-31) found only Pb/Cd/tAs (+iAs on rice/cereal/juice) have percentile-grade occurrence depth; Ni/Cr(Cr-VI)/Al/Sn/MeHg are government-lookup or read-across BY DESIGN under Method v2.0 (Ni = EU 2024/1987 lookup, and nickel has ZERO milk/formula percentile occurrence corpus-wide; Cr-VI = 0 occurrence rows; Al = no infant-specific occurrence; MeHg = zero direct baby-food occurrence, fish-species only). So DOI-mint Rule #1 ('every subcategory >=95% confidence in the numbers') cannot mean '95% occurrence confidence on all 9 analytes' — that is impossible for every category and would make the whole program un-mintable. Rule #1 must mean each cell is FIRM: an occurrence percentile at >=95% confidence where occurrence binds (Tier-1 toxics), OR a sovereign government ML (a lookup, definitionally firm), OR a disclosed read-across.
- done when: Rule #1 is defined in docs/governance/hmtc-governing-principles.md as firm-by-occurrence-95% (where occurrence binds) OR firm-by-sovereign-ML OR disclosed-read-across; the readiness/confidence lint gates on that firm classification, not on occurrence depth for lookup/read-across cells; the definition is consistent with the existing classifyCell firm/provisional/pending machinery and the Tier-1/Tier-2 split
- decision: _pending_
- notes: Resolves the open Rule #1 definition from the DOI-mint-rules discussion (2026-08-31). Without it, Cat-1 and every category fail Ni/Cr/Al/Sn/MeHg forever. Pairs with OI-20260831-doi-granularity-two-tier (the per-subcategory versioned-DOI mint gate).

### OI-20260831-doi-granularity-two-tier — Ratify DOI granularity as two-tier (per-subcategory Standard DOI + per-category manual/Series grouping); reject category-level and flat per-subcategory

- scope: **human-gated** · type: decision · status: queued · repo: cert
- paths: `docs/DOI-MINTING-LEDGER.md`, `tools/mint-dois.mjs`, `tools/standard-readiness-lint.mjs`, `content/manuals/index.md`
- repro: A 4-lens adversarial audit (2026-08-31: legal, metadata, dependency-breakage, steelman) rejected the interim category-level (one-DOI-per-category) recommendation. Grounds: certification binds to the SUBCATEGORY standard, not the category (content/verify.md:49,56,60; content/standards/index.md declares 'Seafood 3.1' and 'Culinary Oils and Fats 3.1' different standards, each its own page); the ratified Certification-Readiness ruling REGISTERED clause says 'the standard has a resolvable production DataCite DOI', scoped to the subcategory exactly like COMPLETE/CORRECTED (governing-principles 3.2); per-subcategory DOIs are the already-ratified+shipped plan (rail_box on all 348 standard pages promises per-standard DOIs; DOI-MINTING-LEDGER.md:59,65). The category-level argument was an equivocation (readiness is ASSESSED per category; that is not the same as the DOI ATTACHING per category). Two-tier dominates: per-subcategory Standard DOIs (concept + version chain on material revisions only) GROUPED under the category via the manual Report DOI (IsPartOf/HasPart) where a manual exists (cats 1,3,6,17,24) or a DataCite Series container where not. It captures the certified atom AND the document-of-record; needs NO readiness-lint inheritance rewrite; needs NO ruling re-ratification (the ledger already carries both hmtc.std.cat.slug and hmtc.manual.cat suffixes); and is LESS work than category-level (Series grouping is a metadata field, not 30 net-new thin category landing pages).
- done when: granularity ratified (two-tier) and DOI-MINTING-LEDGER.md :59/:65/:159 confirmed consistent (no loosening); tools/mint-dois.mjs emits a per-subcategory Standard DOI plus a category grouping (Report-DOI IsPartOf where a manual exists, else Series container); tools/standard-readiness-lint.mjs stays per-subcategory (no category-inheritance rewrite needed); optional later: a per-category or program-wide Dataset DOI for /data, related IsSupplementTo the Standard/Report DOIs
- decision: **APPROVE: Karen ratified 2026-08-31 — per-subcategory concept DOI + a new version DOI on each MATERIAL change (government ML move, ceiling/analyte/basis/methodology change), named by version, for transparency. Churn is designed out by publishing/minting only COMPLETE (a firm limit for every analyte) + confidence/QC-audit-passing standards, so re-mints are rare and each is a meaningful regulatory event. Category grouping (Series container / manual Report DOI) is a compatible secondary layer, not separately contested. Enactment still gated on the immutable-snapshot mechanism choice + the pre-mint defensibility gates (OI-20260831-datacite-premint-defensibility-gates).**
- notes: Karen requested this analyze/audit/adversarial-audit on 2026-08-31 after declining a 3-way multiple-choice. Recommendation to ratify: two-tier. Pairs with OI-20260831-datacite-premint-defensibility-gates (the granularity-independent gates that must clear before ANY mint) and OI-20260831-infant-manual-v2-doi-supersession (the Cat-1 v1->v2 case).

### OI-20260831-datacite-premint-defensibility-gates — DataCite mint infrastructure is not defensibility-ready — 3 gates + 2 safety bugs before any production mint (frozen deposits, version chain+dates, identity firewall)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/mint-dois.mjs`, `tools/datacite-preflight.mjs`, `docs/DOI-MINTING-LEDGER.md`
- repro: Legal + metadata adversarial audits (2026-08-31): minting on the current tooling would be a net defensibility NEGATIVE at any granularity. GATE 1 (frozen deposits): all 348 standards carry cert_doi:null; a minted DOI would resolve to a live, silently-editable page on the certifier own domain, with no immutable snapshot behind it. A DOI courtroom value is a third-party, tamper-evident version history; without a frozen deposit the mint buys the manufactured-authority attack and none of the upside. Cat-1 v1 (Zenodo, CERN-run frozen PDF) is currently MORE independent than the planned self-run 10.83138 prefix pointing at heavymetalcertified.com, so migrating the DOI-of-record to the self-run prefix is an independence downgrade unless a neutral external frozen deposit is retained. GATE 2 (version chain + dates): buildPayload (tools/mint-dois.mjs:224-251) emits only a version string, one References relatedIdentifier, NO dates array and NO IsNewVersionOf chain; publicationYear is derived from effective_date (:202) which can predate the real mint (never backdate). Must emit dates [Issued = true mint date] and the concept/version chain. GATE 3 (identity firewall): Karen is the sole creator on BOTH the index literature prefix (10.83376) and the cert standards prefix (10.83138) under one DataCite membership; the public DataCite graph therefore impeaches the two-independent-properties firewall (Part 2), and Paleo Certified, Inc. (the IP owner of record, Part 14) appears nowhere as rightsHolder. SAFETY BUG A: DATACITE_MODE=live with --state=draft would stamp non-resolvable draft DOIs into cert_doi (DOI-MINTING-LEDGER.md:185-189). SAFETY BUG B: mint-dois emits no container while datacite-preflight rehearses container {type Series} (mint/preflight drift).
- done when: the document-of-record for each minted DOI resolves to an immutable, version-pinned snapshot (neutral external frozen deposit, as Cat-1 already does on Zenodo), not a live editable page; buildPayload emits a dates array with dateType Issued = the true mint date and a real IsNewVersionOf/IsPreviousVersionOf version chain; publicationYear never backdated; identity de-conflicts the two prefixes (named co-authors/reviewers or an organizational creator) and adds Paleo Certified, Inc. as rightsHolder -- COUNSEL-GATED, do not self-resolve (Part 2 / Part 14 frozen items); the live/draft write-back guard is closed (no draft DOIs written to cert_doi under MODE=live); the mint payload container matches the preflight (Series container present)
- decision: _pending_
- notes: Gates the production mint in the Connect-DataCite chip (task_d77eba3a) -- the chip is credential-blocked, so nothing mints prematurely, but it must NOT proceed to a production mint until these clear. GATE 3 and the external-deposit posture are counsel-frozen (firewall/entity-naming) -- flag, do not edit into consistency. GATES 1-2 and the 2 safety bugs are Claude-buildable code work once the two-tier granularity (OI-20260831-doi-granularity-two-tier) is ratified.

### OI-20260831-cert-main-deploy-webhook-flaky — Cert main-merge to Vercel production deploy is unreliable (webhook intermittently missed)

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `vercel.json`
- repro: heavymetalcertified: git.deploymentEnabled.main=true, yet merging PR #57 (ef9c07f) and PR #59 (4acd716) to main did NOT create a production deployment (~20min, none created), while PR #58 (e7ab701) did. Workaround each time: push an empty commit to main to re-trigger. Preview (branch) deploys fire reliably; only main->production is flaky. Needs Vercel dashboard investigation (git integration / webhook delivery / production-branch setting). Karen-gated (Vercel dashboard access).
- done when: Root cause of missed main->production webhooks identified; main merges deploy production without a manual empty-commit re-trigger
- decision: _pending_

### OI-20260831-cat1-total-cr-not-material-substantiation — Cat-1 total-Cr not_material cells fail audit C7 (no rationale/regulatory_basis/jurisdictions_checked substantiation)

- scope: **human-gated** · type: code-fix · status: open · repo: index
- paths: `tools/standards/compile-cat1.mjs`
- repro: After the 11-panel extension, audit-compiled-standards.mjs shows 49 C7 fails on cat1-compiled: total-Cr not_material cells (12 non-dairy subcats) carry control+reference_method but not the substantiation fields C7 wants. Pre-existing (40) + 8 new. Per v2.6 Species/screens ruling may need migration to a baseline-screen rather than reflex-only. Design choice (reflex-control vs baseline-screen) is Karen's.
- done when: audit C7 fails clear on Cat-1 not_material-Cr; the reflex-control-vs-baseline-screen choice is ratified
- decision: _pending_

### OI-20260831-cat1-missing-fish-meats-dairy-desserts — Cat-1 missing 3 regulator-named subcategories: fish/seafood baby dinners (ACTIVELY EXCLUDED, tox-critical MeHg/iAs), single-ingredient meats, dairy desserts

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `tools/standards/cat1-config.json`, `data/taxonomy/hmtc-v2.json`, `tools/standards/compile-cat1.mjs`
- repro: 3-lens Cat-1 completeness sweep (2026-08-31). The 9 rows mirror FDA Jan-2025 'Closer to Zero' processed-baby-food LEAD cells MINUS three: single-ingredient meats (10 ppb), yogurts, custards/puddings — all FDA-named, none has a Cat-1 row. FISH/seafood baby dinners = highest toxicological priority (MeHg + iAs; measured tAs 212-435, tHg ~28 vs non-fish ~5/~0) AND ACTIVELY EXCLUDED: cat1-config.json mixed-meals scope_exclude lists fish/crustacean/mollusc, while a live wiki/products/fish-containing-baby-foods.md page + a workbench snapshot exist but are not config rows. Codex STAN 73 admits fish + meat; row 7 requires a grain+meat COMBO, so pure meat purees and fish dinners have no home. Dairy desserts: GEMS 'Yoghurt/cheese/milk-based dessert for infants' pool supports Pb/Cd/tAs at ~95%; rest lookup-fillable; currently out-of-scope flagged.
- done when: a fish/seafood baby-food subcategory exists and mixed-meals no longer blanket-excludes fish; its limit = government baby-food MLs + a DISCLOSED MeHg/iAs read-across from fish content x fish fraction (method-consistent; the pre-v2.0 'Path blocked' status is a legacy-framework artifact, not a v2.0 blocker); a single-ingredient meats subcategory exists (organ/liver Cd noted); a dairy-desserts (yogurt + custard/pudding) subcategory exists with the out-of-scope flag lifted; each new row is COMPLETE per Method v2.0 (a firm limit for every analyte via ML/read-across)
- decision: _pending_
- notes: Phase-0 taxonomy expansion — gates Cat-1 finalization. Fish is the #1 tox-priority + defensibility gap (a heavy-metals infant-food certifier with no cell for the #1 mercury vector, that actively excludes it). Pairs with OI-20260831-cat1-formula-dairy-source-scope. Surfaced 2026-08-31.

### OI-20260831-cat1-formula-dairy-source-scope — Cat-1 formula split is cow/soy but 'cow' silently absorbs goat & camel formula — relabel dairy/soy + split by animal source where data supports it

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `tools/standards/cat1-config.json`
- repro: tools/standards/cat1-config.json infant-formula-powder + infant-formula-rtf-liquid use soy_split:true, rendered as 'cow / soy' (Ni 250 cow/400 soy, Al 4000/8000, Cd 10/20). 'cow' is really 'non-soy' and silently absorbs goat- and camel-based dairy formula: data/evidence/values.jsonl already carries an infant-formula-powder-non-soy-goat-based occurrence row (FSA2016, Al 950). Meanwhile Cat-24 Dairy ALREADY splits milk by animal source (cert content/standards/dairy-milk-cow.md, dairy-milk-goat-sheep.md, dairy-milk-camel.md are all category:24), so Cat-1 is internally inconsistent. Animal source materially changes the metal profile (camel elevated Ni per corpus wiki/metals/nickel.md; goat elevated Cd per WHO GEMS goat-milk p90~130). The camel Ni / lactoferrin bioavailability offset Karen raised is real biochemistry but NOT a defensible basis for a looser LIMIT (regulators set total-metal MLs; novel/Daubert-fragile; formula processing denatures lactoferrin) — route to the Heavy Metal Index wiki, never the HMTc limit (Part 2).
- done when: the Cat-1 formula 'cow' bucket is relabeled to dairy/milk-based (covers cow/goat/camel/sheep) — correctness fix; camel and/or goat are split into their own subcategory ONLY where occurrence clears the 95% confidence gate + a defensible per-analyte limit, mirroring Cat-24; where data is thin they ride the dairy bucket with the struggle documented; the camel-nickel / lactoferrin science is documented on the Heavy Metal Index wiki, never used to loosen an HMTc limit; the full Cat-1 subcategory-completeness sweep (regulatory universe + corpus support) is applied before Cat-1 finalizes/mints
- decision: _pending_
- notes: Phase-0 taxonomy lock: the subcategory SET must be complete + correctly scoped before Cat-1 can finalize/mint (a wrong set = a wrong category, and it can't be un-minted). The same subcategory-completeness pass should gate every category before its DOI. Surfaced by Karen 2026-08-31; full 3-lens sweep in progress.

### OI-20260830-fermentation-protein-step0-lock — Step-0 category lock + permanent-home fork for the new Cat-17 fermentation-derived-protein ingredient standard (Bond Pet Foods)

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/standards/cat17-config.json`, `data/taxonomy/hmtc-v2.json`, `data/workbench/standards/cat17-compiled/pet-food-fermentation-derived-protein.json`
- repro: New subcategory pet-food-fermentation-derived-protein built + validated (audit fail-histogram identical to shipped kibble; coverage audit green; provisional_scaffold:true). Two rulings: (1) APPROVE/DECLINE the Cat-17 subcategory assignment for precision-fermented / single-cell / yeast-biomass protein INGREDIENTS; (2) PERMANENT-HOME FORK — keep it a Cat-17 (Pet Foods) subcategory, OR promote to a cross-cutting fermentation-derived / novel-protein INGREDIENT matrix-family that Cat-17 and the human-food categories both reference (the biosorption + arsenate-via-phosphate-transporter fingerprint is channel-agnostic; human precision-fermented protein will need the same analog machinery).
- done when: Karen rules APPROVE or DECLINE on the Cat-17 subcategory; Karen chooses Cat-17-subcategory vs cross-cutting-novel-protein-category; On approve: provisional_scaffold flag cleared
- decision: **DEFER: Cat-17 subcategory home ENACTED + going live via PR #57 (Karen: 'it needs to be live'). Step-0 lock effectively cleared for the Cat-17 placement. The permanent-home FORK (keep Cat-17 subcategory vs promote to a cross-cutting novel-protein/single-cell-protein category serving human food too) remains OPEN for a future call; shipping as Cat-17 does not foreclose a later lossless refactor. provisional_scaffold flag left set pending that fork.**

### OI-20260830-fermentation-protein-gmo-counsel — Counsel: GMO-derived-ingredient + AGRN 79 posture for fermentation-protein standard (separate from heavy metals)

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `data/workbench/standards/cat17-compiled/pet-food-fermentation-derived-protein.json`
- repro: FDA AGRN 79 is a 3-page CVM no-objection letter (adult DOGS only; feline pending) disclosing NO Pb/Cd/As/Hg numbers — no metal value may cite AGRN 79 (would be fabrication; the standard numbers are human-food read-across). Out-of-heavy-metals-scope counsel items before any marketing claim: (a) whether to obtain the underlying AGRN 79 notice + amendments for ingredient-native metal specs; (b) GMO-derived-ingredient posture (production strain removed from product; ORF/antibiotic-marker/Section 301(ll) flagged by FDA as outside its evaluation). Feline scope decided-and-logged: standard scoped to adult-dog diets pending CVM feline clearance.
- done when: Counsel ruling on GMO-ingredient marketing posture recorded; Decision on obtaining AGRN 79 full notice recorded; Standard/marketing scoped to adult dogs until feline CVM clearance
- decision: _pending_

### OI-20260830-fermentation-protein-doi-cert-deploy — Mint DataCite DOI + render fermentation-derived-protein standard into cert + deploy to heavymetalcertified.com

- scope: **human-gated** · type: promote · status: open · repo: cert
- paths: `data/workbench/standards/cat17-compiled/pet-food-fermentation-derived-protein.json`, `tools/standards/build-cert-cat17-pages.mjs`
- repro: Compiled workbench standard is staff-only until (a) a PRODUCTION DataCite DOI is minted (test/sandbox does not count; certification-ready = COMPLETE + REGISTERED + CORRECTED) and (b) the SEPARATE cert render (add the new slug to build-cert-cat17-pages.mjs title map) + cert push to heavymetalcertified.com (cert push = LIVE). Gated on OI-20260830-fermentation-protein-step0-lock. Firewall: never publish workbench JSON as the standard; never surface derivation math on the index domain.
- done when: Production DOI resolves; Cert page live on heavymetalcertified.com; Index domain shows no derivation math
- decision: **DEFER: Cert page LIVE + downloadable PDF now shipped system-wide (PR #58 infra + #59 batch: /static/standards/<slug>.pdf; Rail Download button + citation_pdf_url via prebuild wire step). ONLY remaining: mint production DataCite DOI — needs DATACITE_USER/PASSWORD/PREFIX + DATACITE_MODE=live (secrets; Karen runs mint-dois.mjs --emit). scholar_pdf_url already feeds the PDF into DataCite/Scholar metadata.**

### OI-20260830-cat17-not-material-substantiation-backlog — All 11 Cat-17 compiled standards fail audit-compiled-standards C7/C8 (legacy not-material/control field shape)

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `tools/standards/compile-cat17.mjs`, `data/evidence/standards-not-material.csv`
- repro: node tools/standards/audit-compiled-standards.mjs --dir=data/workbench/standards/cat17-compiled => 139 FAIL across all 11 records (kibble/wet/fish incl.). compile-cat17 emits not_material cells with legacy fields (control text + reference_method) and control cells without rationale, so C7 (basis_class/rationale/regulatory_basis/jurisdictions_checked) and C8 (control rationale) fail. PRE-EXISTING; affects LIVE records; NOT introduced by the new fermentation subcategory (its histogram matches shipped kibble exactly, 12 C7 + 1 C8). Fix: emit the newer substantiation fields from compile-cat17, OR backfill standards-not-material.csv for every cat17 slug incl. pet-food-fermentation-derived-protein.
- done when: audit-compiled-standards --dir=data/workbench/standards/cat17-compiled exits 0; No C7/C8 fails on any cat17 record; compile-cat17 remains byte-deterministic

### OI-20260828-leadin-page-alignment — Decide whether analyte/briefing lead-in pages should present the crisp 3-column top line

- scope: **human-gated** · type: decision · status: queued · repo: cert
- paths: `quartz/components`
- repro: After cert cf753e0, section-first cert pages (standards/manuals/regulations) align the left rail divider, center first section-heading underline, and right connections divider into one horizontal line. Pages that OPEN WITH A LEAD-IN before the first section do not: analyte pages start with a 13-Al kicker + lead paragraph, briefing pages with a THE CLAIM badge + lead. Their columns still start together (align-items:start) but the center first crisp line sits ~130-220px below the rail dividers. Karen wants the crisp alignment on ALL 3-column pages.
- done when: Decide the treatment for lead-in reference pages: give the lead block a bottom rule at the shared line, OR start the center with the section heading and fold the lead-in under it / into the heroband, OR explicitly accept the lead-in design as-is; Apply the decision to the analyte + briefing page templates so their 3 columns present a crisp aligned top line (or record acceptance)
- decision: **APPROVE: Karen ruled — analytes get a 'THE ANALYTE' badge (enacted cert dd5d991, matches briefings 'THE CLAIM'); briefings stay as-is; markdown-heading pages aligned via first-heading margin-zero (cert dd5d991). Remaining edge cases left as-is: panel-audit-banner standards (temporary completeness flag, self-resolves when the standard completes), 2 noindex specimen pages, a few landing pages with their own top notices.**

### OI-20260828-doi-landing-page-lint — Build-lint: a page with a DOI in frontmatter must render it (DOI link + citation_doi + JSON-LD)

- scope: **auto** · type: audit · status: open · repo: index
- paths: `tools/`, `quartz/`
- repro: DataCite requires every DOI resolve to a page displaying it. CiteThisPage was previously orphaned from quartz.layout.ts (fixed d5d28760d) — a silent regression that would have left minted DOIs with no visible citation. Add a postbuild lint (BOTH repos: index wiki_doi, cert cert_doi) that fails the build when a page frontmatter carries a non-test DOI but the built HTML lacks the doi.org link OR citation_doi meta OR JSON-LD identifier.
- done when: Lint fails on a page with wiki_doi/cert_doi set whose built HTML omits the doi.org link or citation_doi meta; Runs in prebuild/postbuild in both repos; No-op pass while zero DOIs are minted

### OI-20260828-cert-standards-jsonld-doi-identifier — Emit the DOI as a schema.org identifier in standards-page JSON-LD

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `tools/postbuild-cert-page-jsonld.mjs`, `tools/postbuild-article-jsonld.mjs`
- repro: Once cert_doi is minted onto standards, landing pages render the DOI (HeroBand row + citation_doi meta + CiteThisPage) — the hard DataCite obligation is met — but the schema.org JSON-LD carries no identifier node for the DOI (best-practice + Google Scholar). postbuild-cert-page-jsonld handles only the hand-authored /compare SEO page, not /standards/<slug>. Find/route the standards JSON-LD and add identifier=https://doi.org/<cert_doi>. Not blocking the first mint.
- done when: A built /standards/<slug>.html with cert_doi set contains a schema.org identifier equal to https://doi.org/<cert_doi>; Zenodo-kept items (infant manual 10.5281/zenodo.20771543) emit their DOI as identifier too

### OI-20260827-portal-backend-redesign-plan — Implement the approved HMTc brand-portal backend redesign (Product-first coverage cockpit + org layer + bulk ingest + service-request cart + revenue attestation)

- scope: **human-gated** · type: code-fix · status: open · repo: cert · blocked_on: OI-20260826-portal-engine-registry-rebuild
- paths: `~/.claude/plans/from-https-app-heavymetalcertified-com-p-staged-petal.md`, `docs/architecture/application-crm-spec.md`, `heavymetalcertified-app/src/lib/grouping`, `heavymetalcertified-app/src/lib/suppliers`, `heavymetalcertified-app/supabase/migrations`
- repro: Karen adversarial-reviewed app.heavymetalcertified.com/portal/products (2026-08-27): labs never FK to products (baseline runs brand-level); products modeled twice; no cart; no materially-similar grouping (+ no can-vs-bottle guard); no bulk COA/supplier ingest; one-brand-per-login (no parent signer/child brands); no revenue-at-signer or post-approval attestation. Full grounded design-of-record in the approved plan file. Phase 1 engine already in-flight via OI-20260826-portal-engine-registry-rebuild (feat/registry-engine-context, green).
- done when: Phase 2: prior_lab_report gains product_id FK; documents/evidence_sets adopt CRM LOQ-aware reuse predicate; per-product 2-of-3 baseline; /portal/products coverage matrix; Phase 3: drag-drop bulk COA -> AI extract -> auto-match to products + auto-create drafts; bulk supplier extraction (DONE: dedup lib feat/product-grouping src/lib/suppliers, 12 tests); Phase 4: service_requests cart prices only owed analyte-lots (skip-labs => 3 program lots); wired to testing_order + Stripe; Phase 5: SKU packaging_material/basis guard + test_equivalence_groups (DONE: engine feat/product-grouping src/lib/grouping, 13 tests, can-vs-bottle guard + fan-out); still needs DB tables + UI wiring; Phase 6: accounts/billing_groups/memberships/account_brands + brands.parent_brand_id; backfill; RLS repoint behind getBrandSession shim; brand switcher; Phase 7: revenue at Account; revenue_attestations post-approval SignNow; brand_people on profile; All brand+lab data stays in portal DB/cert plane, never the index domain; no deploy or live-prod migration without Karen
- evidence: branch feat/product-grouping @ 0c26207 (isolated worktree, NOT pushed): src/lib/grouping (test-equivalence + can-vs-bottle guard, 13 tests) + src/lib/suppliers (dedup lib, 12 tests); 25/25 green; zero touch to the engine branch or shared tree
- decision: _pending_
- notes: Design decided under wwsaid: grow the running app toward the ICS CRM design-of-record using its real entity names (staged in-place migration). Pricing NOT redesigned (CRM spec resolved). Strictest-floor-everywhere decided. Phases 3+5 have durable pure-lib components landed (see evidence) — wire, do not rebuild. Human-gated deps: recency-governance (counsel), SignNow creds, Stripe.

### OI-20260827-portal-backend-cert-gaps — Brand portal backend is missing the certificate-issuance keystone (and dependent surfaces) promised by the public /portal specimen

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app/docs/portal-specimen-gap-audit.md`
- repro: Compare https://heavymetalcertified.com/portal specimen sections against src/app/portal/** in heavymetalcertified-app.
- done when: Karen prioritizes: certificate table + issuance flow (keystone; blocks Documents, Lot-record headroom, public program-controlled block, 3/4 snapshot tiles); Confidential Remediation Track register (distinct from existing pre-cert ingredient advisory); Documents/letters generation (permissions letter, CoC, lab-report ZIP) via @react-pdf/renderer; Seats/access RBAC + download audit log (largest net-new; independent of certificates)
- decision: _pending_

### OI-20260827-manual-vs-governance-cadence-reconcile — Reconcile controlled Governance Policy + Lot Testing Schedule to the as-built portal cadence now documented in the Program Manual

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `data/workbench/standards-book/source-documents/governance-policy.md`, `data/workbench/standards-book/source-documents/lot-testing-schedule.md`, `data/workbench/program-manual/20-part2-program.md`
- repro: The program-level Program Manual (data/workbench/program-manual/) was corrected 2026-08-27 to document the AS-BUILT portal cadence: a confidentiality undertaking pre-signed by HMTc and in force from first contact (pre-account); free readiness; a 3-lot baseline whose completing lot is a PAID buy-and-test the program runs (buys the product at retail, ships to an accredited lab, runs the 8 totals; speciation reflex); the binding Certification Agreement executed only AFTER program approval, not a license at entry; and per-analyte prior-lab credit with LOQ<=limit/5. The controlled Governance Policy (governance-policy.md sec.4) still frames a license as the entry instrument and a flat 12-month recency window (lot-testing-schedule.md sec.4.3), which the running portal contradicts (cadence-based recency; agreement-late). Decide whether to update the controlled documents to the as-built cadence (with counsel) or ratify the as-built as canonical. Distinct from, but related to, the open recency items OI-20260825-hmtc-recency-cadence-governance and OI-20260825-recency-governance-propagation.
- done when: Karen/counsel decide the canonical entry sequence and recency policy; governance-policy.md sec.4 and lot-testing-schedule.md sec.4.3 updated to match the as-built cadence, or a documented decision to keep them and correct the portal; Program Manual Part 6.8 note cleared once the docs and manual agree
- decision: _pending_

### OI-20260827-index-prose-length-rule — Propagate the reading-surface paragraph cap (one idea per paragraph, <=120w) to the Index site

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `docs/writing-style`, `tools`
- repro: Cert repo now enforces CONTENT-RULES.md section 8: reading-surface paragraphs are one idea, target 40-100 words, hard cap 120, with tools/lint-method-prose-length.mjs in prebuild. heavymetalindex.com has the same wall-of-text risk in its generated/authored prose but no equivalent rule or lint (memory: index language enforcement lags cert; em-dash rule already unenforced on index).
- done when: A reading-surface paragraph-length rule (one idea per paragraph, <=120 words) is documented in the Index writing-style/design docs, mirroring cert CONTENT-RULES section 8; A method-prose / long-paragraph lint runs in the Index prebuild (warn-only then blocking at zero); Authored/generated long-prose walls (>120w) in Index content are split at idea boundaries with word-preservation verified (sentence-regroup only, no rewording)

### OI-20260827-doi-publisher-name-of-record — Ratify DataCite publisher-of-record name for Index DOIs: Institute of Contaminant Standards vs Heavy Metal Index

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/mint-dois.mjs`, `quartz/components/Head.tsx`
- repro: Karen asked the organoarsenical synthesis report note 'Heavy Metal Index as publisher.' Settled entity-naming rule (CLAUDE.md Part 14) sets citation_publisher=Institute of Contaminant Standards; the imminent ROR identifies that ORG, not the publication. Implemented default: publisher field = ICS (ROR attaches cleanly) + 'Heavy Metal Index' as the DataCite container/publication + the venue in every human-readable citation. One-constant switch (PUBLISHER_NAME in mint-dois.mjs) makes the publisher field literally read 'Heavy Metal Index' if preferred.
- done when: Karen picks: (a) publisher=ICS + HMI container [implemented, recommended], or (b) publisher=Heavy Metal Index. If (b): flip PUBLISHER_NAME and re-verify Head.tsx citation_publisher + JSON-LD publisher agree.
- decision: _pending_

### OI-20260827-doi-license-posture-cc-by — Ratify content license for DOI'd Index pages: keep CC BY 4.0 (prose) + EU database-rights (structured) vs change

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `wiki/licensing.md`, `tools/postbuild-inject-jsonld.mjs`, `quartz/components/CiteThisPage.tsx`
- repro: Karen: 'CC BY 4.0 may no longer be appropriate, since we will have a ROR.' A ROR ID (org identifier) is orthogonal to license choice — it does not make CC BY inappropriate; major ROR-holding publishers ship CC BY. Current implemented posture: prose = CC BY 4.0, structured evidence DB = EU sui generis database-rights reserved (the commercial lever). Recommend KEEP. NOTE: the Cyprus/EU database-rights posture is counsel-FROZEN (CLAUDE.md Part 14) — do not edit licensing.md into a new posture; this item is a ratify-or-instruct, not an auto-fix.
- done when: Karen confirms keep CC BY 4.0 + DB-rights split, OR specifies a target license; if changing, route the DB-rights wording through counsel (frozen).
- decision: _pending_

### OI-20260827-completeness-backlog-corpus — Whole compiled-standards corpus predates the 2026-08-25 completeness ruling (426 empty cells / 107 standards)

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `tools/standard-readiness-lint.mjs`, `data/standards`
- repro: standard-readiness-lint reports 17 COMPLETE / 0 REGISTERED / 0 READY / 426 empty cells. Coffee is now near-complete via the pattern applied here (subsumed disposition for bounded species + per-cell sovereign re-scan incl general-food catch-alls + baseline-monitor for true gaps). The same completeness sweep needs to run across every category (menstrual products, rice-beverages, honey, condiments, etc. all show many empty cells). Large program initiative; coffee is the worked template.
- done when: A per-category completeness sweep plan exists; Readiness-lint empty-cell count trends to zero and lint flips to --strict
- decision: _pending_

### OI-20260827-coffee-standard-pb-only-scaffold — Coffee HMTc standard is a Pb-only scaffold: 10 analytes marked status:published but 9 carry null limits — not certification-ready

- scope: **human-gated** · type: audit · status: open · repo: index
- paths: `heavymetalcertified-app/src/data/standards-finder-context.json`, `data/workbench/standards/`
- repro: resolveStandard(coffee,US) returns Pb=500 (HK) and limit_ppb:null for iAs,tAs,tHg,MeHg,Cd,Cr,Cr-VI,Ni,Sn,Al; the coffee variant lists eligibility:firm/firm_count:10 yet only Pb resolves to a number. Surfaced by the Natural Force canary: a measured Cd 5.58 ppb resolves to insufficient_data because there is no coffee Cd ceiling. Locked in heavymetalcertified-app/src/lib/readiness/natural-force-scenario.test.ts.
- done when: Coffee variant all has a firm ML / bounded species / disclosed baseline-screen for every one of the 10 HMTc analytes (no null under status:published), per the Certification-Readiness Ruling COMPLETE gate; standard-readiness-lint (cert) passes for coffee; After completion, Natural Force green-lot As/Cd/Hg credit toward the baseline (coffee reporting limits exist for them)
- decision: _pending_

### OI-20260827-coffee-sovereign-admission-programwide — Formalise the widened credible-sovereign anchor set program-wide (MERCOSUR/PY/VN/TH/SG/UY/CN)

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `tools/standards/cat5-config.json`, `tools/standards/compile-category.mjs`
- repro: Coffee (Cat 5) now anchors Cd/tAs/tHg/Sn on MERCOSUR, Paraguay, Vietnam, Thailand, Singapore, Uruguay national/regional food-contaminant limits (same tier as HK Cap132V + China GB already live-cited), named per-cell and disclosed. DEFAULT_CREDIBLE in compile-category.mjs is EU/UK/CODEX/US/AU-NZ/CA/HK only; these sovereigns are used per-cell via gov_ids/read_across which bypass CREDIBLE. Decision: formalise a widened _category.credible + credible_note program-wide (would ripple to every category auditScan and may surface stricter general-food anchors on other rows), or keep the per-cell disclosure approach.
- done when: Karen rules: widen credible set program-wide, or keep per-cell disclosure; If widened: _category.credible + credible_note added and all categories re-audited
- decision: _pending_

### OI-20260827-coffee-occurrence-unit-inflation — Coffee occurrence figures look unit-inflated (Cd median 668 ppb, p95 18.5 mg/kg)

- scope: **auto** · type: finding · status: open · repo: cert
- paths: `content/standards/coffee.md`, `data/standards`
- repro: The Occurrence and derivation section of content/standards/coffee.md reports cadmium in coffee at a pooled median of 668 ppb and p95 of 18.5 mg/kg across 63 samples — implausibly high for coffee (typical Cd ~10-30 ppb); likely a mg/kg-vs-ug/kg aggregation artifact or an outlier study. Pre-existing (occurrence layer, not the standard cells). Does not affect the government-limit-based standard but is displayed on the public page. Audit the coffee occurrence aggregation for unit scaling.
- done when: Coffee occurrence Cd/other values audited for unit scaling; Implausible values corrected or the source study quarantined

### OI-20260827-coffee-cat5-testing-panel — Add Cat-5 (Beverages)/coffee to the required-analytes testing-panel registry

- scope: **auto** · type: content · status: open · repo: index
- paths: `data/workbench/standards/required-analytes.json`
- repro: required-analytes.json has no Category 5 entry, so coffee (now a complete-minus-Al standard) has no per-lot TESTING obligations recorded (per_lot_total for the 8 totals; reflex_speciation for iAs<=tAs / MeHg<=tHg / Cr-VI<=Cr with triggers; Al baseline_monitor). Author the Cat-5 coffee entry following the Required-Testing-Panel Ruling vocabulary and validate with build-required-analytes.mjs.
- done when: Cat-5 coffee entry added to required-analytes.json; node tools/standards/build-required-analytes.mjs validates clean

### OI-20260827-coffee-cat5-datacite-doi — Coffee/Cat-5 standard not REGISTERED — needs a production DataCite DOI

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/standards/coffee.md`, `data/standards/cat5-pages.json`
- repro: content/standards/coffee.md carries cert_doi:null and cites DOI: registration pending. The Certification-Readiness gate needs REGISTERED (a resolvable production DataCite DOI; a test/sandbox DOI does not count), which depends on the DataCite membership + a live prefix. Until then coffee is COMPLETE-minus-Al and CORRECTED but not certification-READY and must not be presented as ready.
- done when: Production DataCite DOI minted for the Coffee standard; cert_doi populated; standard-readiness-lint marks it REGISTERED
- decision: _pending_

### OI-20260827-certified-but-private-build-or-forthcoming — Decide: build certified-but-private representation (visibility/consent + certificate register) and reconcile marketing copy, or present private certification as forthcoming

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app/supabase/migrations`, `heavymetalcertified/content/for-brands.md`, `heavymetalcertified/content/mark.md`, `data/workbench/program-manual/20-part2-program.md`
- repro: Public-facing vs private certification is now stated program policy in the Program Manual (Part 2.5): a certified, non-remediation brand may elect private certification per product, and publicity is consent-based (authorized via the Certification Agreement). But the portal does not yet represent or enforce a certified-and-unlisted state (no visibility/consent column on brand/product/application, no live certificate-issuance/register flow; public register shows 0 certificates), and cert-site marketing copy (for-brands.md content asserting a product becomes public when certified) contradicts the consent-based rule. Decide: (a) build the visibility/consent field + certificate-issuance/register flow so private certification is enforceable, and reconcile the marketing copy to consent-based; or (b) present private certification externally as forthcoming until built. Program Manual states the policy in both editions and flags the build gap in the internal edition (Part 6.8).
- done when: Karen decides build-vs-forthcoming for certified-but-private; if build: portal gains a per-product visibility/consent field + certificate register; marketing copy reconciled to consent-based publicity; if forthcoming: external framing updated to not imply an enforceable private-cert state yet
- decision: _pending_

### OI-20260827-baseline-loq-lightlabs — Coffee Al resolved via read-across (dry China GB 100000 / RTD drinking-water 200); LOQ dependency only for cells with NO read-across anywhere

- scope: **human-gated** · type: decision · status: open · repo: cert
- decision: _pending_
- notes: Karen ruled no empty cells; Al filled by disclosed read-across in both coffee forms rather than a baseline-monitor. The documented-lab-LOQ dependency now applies only to the rare cell where NO sovereign and NO analogous-matrix anchor exists at all across the whole corpus; coffee no longer needs it.

### OI-20260826-stripe-provisioning — Connect Stripe to heavymetalcertified-app to turn on the live completing-lot payment window

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app: Vercel Marketplace Stripe integration`, `heavymetalcertified-app: STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET env`, `heavymetalcertified-app: /api/stripe/webhook`
- repro: The completing-lot CTA now routes to /portal/orders which shows the itemized price breakdown + a Pay button and creates a Stripe Checkout session (src/lib/stripe.ts, orders/actions startCheckout). It is gated on STRIPE_SECRET_KEY (isStripeConfigured); until Stripe is connected the Pay button says payment is coming online and the order is saved. To go live: connect Stripe (financial account OAuth — Karen only) via `vercel integration add stripe` from ~/Desktop/heavymetalcertified-app, or Vercel dashboard → the heavymetalcertified-app project → Integrations → Stripe. Ensure STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET are set (Prod+Preview) and a Stripe webhook points to https://app.heavymetalcertified.com/api/stripe/webhook for checkout.session.completed. Then redeploy. Claude must not connect the financial account or handle the secret.
- done when: Stripe integration connected; STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET present; clicking Pay on /portal/orders opens the Stripe hosted checkout; paying flips the testing_order status to paid via the webhook
- decision: _pending_

### OI-20260826-portal-mis-certification-market-loosening — SAFETY: portal certifies to the selected-market looser local limit; government hard-stop dead in production

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified-app/src/lib/readiness/resolve-standard.ts`, `heavymetalcertified-app/src/lib/readiness/compute-readiness.ts`, `heavymetalcertified-app/src/lib/readiness/assess-brand.ts`, `data/workbench/standards/2026-08-26-portal-engine-correctness-audit.md`
- repro: VERIFIED against code. resolve-standard.ts marketLimit() returns per_market[market] (selected market local ML) as the pass/fail ceiling, not the strictest-floor headline; 145+ Tier-1 cells loosen (infant-formula Pb 20 to 200 IN; canned-seafood Cd 50 to 1000 TH). compute-readiness.ts hardStop fires only against input.governmentLimits, but the only production caller assess-brand.ts:263 never passes it, so hardStop is always false (doc comment claims an HMTc-limit fallback the code does not implement). Net: a brand in a looser market certifies to that market law with no backstop, contradicting the strictest-existing-floor promise.
- done when: POLICY CONFIRMED: the mark means strictest-floor everywhere (not per-market certification); marketLimit Tier-1 pass/fail uses strictest across per_country; a looser selected market never loosens a Tier-1 ceiling; assess-brand passes governmentLimits = lowest applicable per_country ML so the hard-stop is live; tests: Pb ceiling stays 20 for rice in IN; Cd stays 50 for canned seafood in TH; a Pb 150 lot routes to remediation
- decision: _pending_

### OI-20260826-portal-engine-registry-rebuild — Rebuild portal testing-scope engine to read one obligation+provenance engine-context (registry JOIN compiled), basis-aware, fail-safe for all entries

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `tools/standards/build-engine-context.mjs`, `heavymetalcertified-app/src/lib/readiness/resolve-standard.ts`, `heavymetalcertified-app/src/lib/readiness/required-panel.ts`, `heavymetalcertified-app/src/lib/readiness/reporting-limits.ts`, `heavymetalcertified-app/src/lib/readiness/compute-readiness.ts`, `heavymetalcertified-app/src/app/api/scope-panel/route.ts`, `heavymetalcertified-app/src/app/portal/application/actions.ts`, `heavymetalcertified-app/src/lib/readiness/completion-cost.ts`, `data/workbench/standards/2026-08-26-portal-engine-correctness-audit.md`
- repro: See data/workbench/standards/2026-08-26-portal-engine-correctness-audit.md (workflow wf_25bc5e0d-f6c). The engine reads only the folded, stale (2026-06-09) cert finder projection and never reads required-analytes.json or the compiled standards. Consequences for EVERY entry: flat 11-row panel identical for all products; analyteSet all-10 over-bills ~40% and omits total Cr; content acid-digest method ordered for migration/USP products; null control cells block certification forever; Cr-VI hardcoded regulatory-only; mandatory speciation subsumed; coverage dead-ends for ~18 products. Subsumes OI-20260825-required-analytes-app-wiring.
- done when: index generator build-engine-context.mjs JOINs compiled cells with required-analytes.json obligations; fans out to cert+app with staleness fail/banner; one requiredPanel(standard) drives scope-panel + application cost + completion cost; methodFor basis-aware; deterministic obligation fallback for 34 non-registry categories; null limit never a pass or bare dash; absent category returns explicit not-yet-available; canary + 4 archetype tests pass per the audit test plan; no deploy without Karen
- decision: _pending_

### OI-20260826-per-product-lab-drop — Per-product lab-result drop + bulk COA PDF auto-matching to products

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app: src/app/portal/products`, `heavymetalcertified-app: src/lib/extract.ts`, `heavymetalcertified-app: src/app/portal/readiness`
- done when: a lab PDF dropped on a product card creates a credited prior_lab_report for that product; a bulk PDF dump matches each COA to the right product with a review step for low-confidence matches
- decision: _pending_

### OI-20260826-infant-formula-cow-to-dairy — Infant formula standard says cow/soy where dairy/soy is more accurate

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `standards-finder-context.json (infant-formula variants)`, `docs/governance infant + child foods standard`, `heavymetalcertified standards render`
- repro: Karen: in the Infant and Child standards, infant formula variants are labeled cow (cow-milk-based) vs soy, but dairy/soy is more accurate — dairy-based formula includes goat/sheep, not just cow. The finder variant key/label + the standard subcategory wording should read dairy(-based) rather than cow. CAUTION: this may be more than a label — confirm whether the cow-milk ML (e.g. EU nickel 250 non-soy) is intended to apply to ALL dairy-based formula (goat/sheep) or specifically cow; if broadening, it is a governance/standards decision, not a pure rename. Fix at the source (index standards) and re-fan index->cert->app so standards-finder-context.json, the cert standards pages, and the app finder all update consistently.
- decision: _pending_

### OI-20260826-hmi-origin-cultivar-facts — Expose origin/region/cultivar-level heavy-metals facts from HMI (e.g. Koroneiki olive oil = lower nickel) for brand pages

- scope: **human-gated** · type: decision · status: open · repo: index
- paths: `heavy-metal-index: api/contamination.mjs`, `heavy-metal-index: wiki/ingredients/*.md (Ranges by source/region/variety; Processing effects; drivers/lower_risk_variants/higher_risk_variants frontmatter)`, `heavymetalcertified-app: src/lib/hmi.ts`, `heavymetalcertified-app: src/app/portal/brand-preview`
- repro: The cert brand-page generator now pulls cited category-level heavy-metals facts from HMI /api/contamination and shows them. The most striking facts Karen wants — origin/region/cultivar variance (Koroneiki region lower nickel than Cyprus/Italy; glass-bottled EVOO lower-risk vs pomace/flavoured; packaging drives lead) — exist in HMI only as PROSE + frontmatter (drivers, lower_risk_variants, higher_risk_variants) on ingredient pages, NOT as queryable structured data. To generate them per-brand: (1) index-side, expose drivers/lower_risk_variants/higher_risk_variants (already in ingredient frontmatter) and, longer-term, region/cultivar-resolved occurrence records in the /api/contamination (or a new /api/facts) response; (2) app-side, extend getCategoryFacts to surface them. Origin/cultivar-resolved DATA is a planned-not-built HMI feature (roadmap: sub-national sampling resolution). Lower-lift first step: publish the existing drivers/variant frontmatter via the API so the app can show glass-vs-pomace + packaging facts (cited), which is 80% of the wow without new corpus work.
- done when: HMI API returns drivers + lower/higher-risk variants per ingredient; brand pages render cited origin/processing facts (glass-bottled lower-risk, pomace higher-risk, packaging-driven lead) via getCategoryFacts; origin/region facts staged separately as corpus work
- decision: _pending_

### OI-20260826-enrichment-in-onboarding — Move website-enrichment into onboarding: crawl runs (anonymous session) while the user reads the education cards

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `heavymetalcertified-app: src/app/hmt/onboarding`, `heavymetalcertified-app: src/app/portal/enrich`, `heavymetalcertified-app: Supabase Auth settings (anonymous sign-ins)`
- repro: Karen wants the Firecrawl build to start BEFORE the portal, while the user reads the onboarding pop-up cards, so the review (their products + suggested category, the 'does this look right?' moment) is instant and lands inside onboarding. Recommended approach (agreed in discussion): on onboarding open, create an anonymous Supabase session + provisional brand, capture the website on card 1, run the existing enrichment pipeline authenticated in the background during the cards/finder/NDA, then at the account step UPGRADE the anonymous account to a real one (same user id) so the brand + finished draft carry over. Needs: Supabase ANONYMOUS SIGN-INS enabled (project Auth setting; add CAPTCHA), abuse guardrails (per-IP rate limit + Vercel BotID on the start-crawl call + existing ~page cap), and a sweep of abandoned anonymous sessions. Ready to build once Karen confirms + enables anon sign-ins.
- done when: entering the website on card 1 starts the crawl during onboarding; the account step upgrades the anon account, carrying the brand + draft over; the review/does-this-look-right step appears inside onboarding, pre-populated
- decision: _pending_

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

### OI-20260825-reg-provenance-wiki-pages — Create wiki regulations pages + archive primary PDFs for the restored register instruments (France CSHPF seaweed, China GB 2762-2022, Brazil IN 160/2022)

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/regulations/france-cshpf-edible-seaweed.md`, `wiki/regulations/china-gb-2762-2022-contaminants.md`, `wiki/regulations/brazil-anvisa-in-160-2022-contaminants.md`, `raw/regulatory/`
- repro: 15 register rows restored 2026-08-25 (France CSHPF x4, China GB2762 x9, Brazil IN160 x2) reference regulation_page slugs whose wiki pages do not exist. Values are primary-verified in the row notes (China: USDA CH2023-0040; Brazil: ANVISA IN160; French iAs corroborated by llorente-mirandes2011) so this is documentation, not defensibility-critical (90 pre-existing register rows already lack wiki pages, tolerated). Creating them needs the regulations-page template + routing/linking so they are not orphaned.
- done when: wiki/regulations pages exist for the 3 instruments, following the regulations template, linked (not orphaned); primary PDFs archived under raw/regulatory/{fr,cn,br}/; index build + routing/orphan lint pass
- decision: _pending_

### OI-20260825-reflex-terminology-manuals — Sweep baseline-vs-reflex terminology through the manual generators + remaining per-compiler JSON labels

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `heavymetalcertified/tools/build-cat1-manual.mjs`, `heavymetalcertified/tools/build-category-manual.mjs`, `heavymetalcertified/tools/lib/occurrence-section.mjs`, `heavymetalcertified/tools/lib/struggle-section.mjs`, `heavy-metal-index/tools/standards/compile-cat1.mjs`, `heavy-metal-index/tools/standards/compile-cat16.mjs`, `heavy-metal-index/tools/standards/compile-cat17.mjs`
- repro: Standard-page renderers (both), the pantry compiler label, governance (v2.6), and the portal now use baseline=measured / reflex=ongoing and show bounded species as explicit '<= total'. Still carrying 'reflex' on baseline records: the manual generators (build-cat1-manual, build-category-manual, occurrence-section, struggle-section) and several per-category compiler subsumed-labels (cat1/15/16/17/27/28/29/35). The standard-page renderer overrides the JSON subsumed label for DISPLAY, so pages read correctly, but the manuals + raw JSON labels still need the same reword; recompile/re-render those surfaces.
- done when: No manual or standard surface frames baseline establishment as 'reflex'; All compiler subsumed labels state total-is-measured + species-speciated-on-ongoing-exceedance; Manuals re-rendered
- decision: _pending_

### OI-20260825-recompile-loosening-gate — HARD GATE: cat27/28/29/32/34 loosen or drop live limits on recompile (config/scope drift) — reconcile before the completion sweep touches them

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/evidence/outstanding/2026-08-25-cert-index-recompile-drift-map.md`, `tools/standards/compile-cat27.mjs`, `tools/standards/compile-cat28.mjs`, `tools/standards/compile-cat32.mjs`, `tools/standards/compile-cat34.mjs`, `tools/standards/cat29-config.json`
- repro: Corpus audit while completing Cat-6. ID-traceability was restored (11 China GB2762 + Brazil IN160 + 4 France CSHPF rows re-added to the register, index 4de7dfa5b/774b7bf15; divergence audit now 0 unresolved across 321 live cert records). BUT a fresh recompile of cat27/28/29/32/34 still loosens 19 live limit cells (nut Pb 200->1000, soy-sauce Cd 100->1000, condiment Pb 1000->2000, etc.) and drops 6 (soy Cr, mushroom Ni x3, condiment iAs x2) — because the restored rows scopes and a deeper config/scope drift (present rows pa_decreto467/uy_rbn_general no longer win) mean these categories no longer reproduce their live values. Full map in the target report.
- done when: OI-20260825 completion sweep skips cat27/28/29/32/34 until each is reconciled; For each of the 5 categories: recompile reproduces every live cert value (round-trip diff clean) before any recompile-and-ship; No live cert protective limit is loosened or dropped
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

### OI-20260825-hmtc-app-launch-gaps — HMTc brand portal: launch-readiness gap backlog vs paleofoundation backend

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `/Users/karenpendergrass/Desktop/heavymetalcertified-app`
- repro: Deep-read of paleo-foundation (147 migrations) vs heavymetalcertified-app (5 migrations) across auth, email/cron, payments, and admin/certification-lifecycle. The app can onboard, profile, run readiness, and hold a product line, but lacks the subsystems that let a brand actually pay, get certified, renew, and recover access — and that let staff review/issue/verify. Password RECOVERY trio (reset-password + update-password + /auth/callback) was SHIPPED this session (typecheck green); it still needs Supabase SMTP + redirect-URL allowlist config to deliver mail.
- done when: Tier 1 launch-blocking: transactional email (Resend or Supabase SMTP), payments (orders+pricing+PayPal/invoice) OR explicit comped-cohort decision; Tier 2 operationally-necessary: staff review->decision->license->agreement->permissions-letter lifecycle; audit_logs; renewal cron; public verification surface; multi-user/team; Tier 3 enhancing: staff impersonation; Chief AI ops assistant (gateway/Anthropic, not OpenAI); cal.com embed-react; CSV/xlsx reporting; email prefs/unsubscribe + inbound shared inbox; Karen sequences/funds each tier; counsel + pricing + PayPal creds gate the payments tier
- evidence: scratchpad/gap/{1,2,3,4}.md scout inventories · memory: project_hmt_onboarding_readiness_build · deliverable: HMTc launch-gap analysis artifact
- decision: _pending_
- notes: See saved memory project_hmtc_backend_gap_analysis for the full prioritized map. Firewall: none of these write brand data into the index; app is app.heavymetalcertified.com only.

### OI-20260825-fr-cshpf-seaweed-source-archival — Archive France CSHPF edible-seaweed primary source + create wiki regulations page

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `data/evidence/regulatory_limits.csv`, `wiki/regulations/france-cshpf-edible-seaweed.md`, `raw/regulatory/fr/`
- repro: Register rows fr_cshpf_seaweed_{ias_3000,cd_500,pb_5000,thg_100} were added to restore the live cert seaweed standard's binding values (a provenance gap: the cert cited these IDs but they were absent from the register). Values match documented French/CEVA edible-seaweed thresholds and the live cert; iAs 3 mg/kg corroborated in-corpus by llorente-mirandes2011. But the rows carry a placeholder regulation_page (regulations/france-cshpf-edible-seaweed) with no wiki page and no archived primary PDF.
- done when: Primary CSHPF/CEVA edible-seaweed recommendation PDF archived in raw/regulatory/fr/; wiki/regulations/france-cshpf-edible-seaweed.md created with the citation + values; register url field populated for the 4 fr_cshpf_seaweed rows
- decision: _pending_

### OI-20260825-finder-panel-completeness-guard — Guard: Standards Finder export panel must equal the full compiled panel (Cr-VI/MeHg were silently dropped)

- scope: **human-gated** · type: code-fix · status: open · repo: cert
- paths: `heavymetalcertified/tools/build-standards-finder-context.mjs`, `heavymetalcertified/tools/panel-completeness-lint.mjs`
- repro: FIXED the data: finder ANALYTE_ORDER dropped Cr-VI + MeHg (9 of 11), so the readiness app never received hexavalent chromium (cert 0904c71; app 55244ce reads Cr-VI + bounds species). REMAINING: add a lint that fails the cert build if the finder export panel != the compiled standard panel, so a future analyte can never be silently dropped from the app again (panel-completeness-lint guards the standard PAGES, not the finder export).
- done when: A lint asserts finder ANALYTE_ORDER covers every analyte present in the compiled standards; Build fails if the finder drops a compiled analyte
- decision: _pending_

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

### OI-20260825-cert-index-standard-provenance-divergence — Audit whether other live cert standards cite register binding-ids absent from the index register (or would GAP/loosen on recompile)

- scope: **human-gated** · type: audit · status: open · repo: cert
- paths: `data/standards/*-compiled/*.json`, `../heavy-metal-index/data/evidence/regulatory_limits.csv`
- repro: The live cert seaweed JSON cited fr_cshpf_seaweed_* binding-ids that never existed in the index register, and cephalopod/predatory total-Cr had scope gaps that a fresh compile turns into GAPs. This means the live cert seafood standards had diverged from what the current index compiler+register reproduce. The same divergence may exist in other cert categories built before the current compiler/register state, so a recompile-and-complete sweep (the OI-20260825 program-wide backlog) could silently change or loosen live values.
- done when: For each cert *-compiled record, every binding_id/source_id/candidate id resolves to a row in the index register; Flag any category where a fresh index recompile would change an existing firm government value (loosening) or introduce a GAP; Report is reviewed before the program-wide analyte-completion sweep touches those categories
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

### OI-20260825-bounded-species-display — Show bounded species as "<= total (bounded)" across the cert standard page + the readiness portal

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `heavymetalcertified/tools/build-category-standard-pages.mjs`, `heavymetalcertified-app/src/app/portal/readiness/ReadinessWorkspace.tsx`, `heavymetalcertified-app/src/lib/readiness/compute-readiness.ts`
- repro: Karen (2026-08-25) wants bounded species well understood. resolve-standard now returns a `bounded` flag (iAs<=tAs, MeHg<=tHg, bounded Cr-VI<=total Cr) and the number displays, but the portal/table does not yet render the "<=" / bounded tag (the value shows like a firm number). Thread `bounded` through compute-readiness -> perAnalyte -> the results table so a bounded cell reads "<= 100 (bounded by total arsenic, reflex-speciated)", and mirror the explicit ceiling on the cert standard page (show "<= 100" not the word "bounded"). Also settle the reflex-vs-baseline terminology Karen raised (baseline speciation != reflex).
- done when: Portal + cert page show bounded species as an explicit <= ceiling with a bounded/reflex label; No bounded cell reads as a bare firm number or a blank
- decision: _pending_

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
