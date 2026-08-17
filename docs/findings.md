# Findings queue

> **Methodology cutoff (2026-08-12):** Findings that rely on P45/P97, literature-baseline candidates, occurrence-selected certification values, or the retired standards QC/readiness pipeline are historical unless they were explicitly re-opened under the government-limit-only method. The old artifacts and generators they cite have been retired or removed.

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
| Foundation column's `heavymetalcertified.com` → `heavymetalcertified.com` | `heavymetalcertified.com` | **503** |
| Add a "Contaminant Standards" entry → `contaminantstandards.com` | `contaminantstandards.com` | **503** |

`heavymetalcertified.com` currently returns **200**. Making the swap would take a working link and point it at a dead host, which is the same trade rejected in step 1 for the 312 wiki pages and for the correspondence address.

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

53 open item(s): 17 auto, 36 awaiting a decision.

### OI-20260817-cert-panel-coverage-gap — Cert standards: 26 of 27 pages flag themselves incomplete; 9 publish 0 of 10 required limits

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `content/standards/`, `content/static/data/standards.json`, `content/index.md`
- repro: cd ~/Desktop/heavymetalcertified && grep -ho 'data-panel-audit="[a-z]*"' content/standards/*.md | sort | uniq -c  ->  26 incomplete, 1 summary. And: grep -ho '[0-9]* of 10 required numeric limits' content/standards/*.md | sort | uniq -c  ->  nine pages at 0 of 10, one at 1, six at 5, one at 6, seven at 7, two at 8; none at 10. In content/static/data/standards.json, 26 of 30 product variants are missing at least one of the eight totals (all Cat-1 variants missing tAs; all seafood variants missing Ni/Al/Cr; breakfast cereals missing six of eight). Cell status tally: 138 published, 27 in_development, 16 not_material.
- done when: Decide whether a subcategory publishing 0 of 10 required numeric limits should be listed as a live standard at all, or held back until it reaches a minimum publishable panel; Define that minimum publishable threshold explicitly in governance rather than leaving it implicit in whatever the compiler emitted; Drain the in_development cells to published, control, not_material or read-across so the ten-analyte panel is actually complete per subcategory; Confirm whether in_development cells carry a mandatory testing obligation; public copy cannot claim testing universality until this is substantiated in a governing document
- decision: _pending_
- notes: Surfaced 2026-08-17 while scoping two cert copy chips for Karen. The copy fix (chip: eight-metals universality claim) makes the public sentence honest but does not close the coverage gap underneath it. Nine subcategories currently present as published standards while publishing no numeric limit at all, which is the harder question: an incomplete-but-flagged standard is defensible, a standard with zero limits is arguably not a standard. Human-gated because it touches cert production content and the publishable-threshold decision is a program-governance call, not a mechanical fix.

### OI-20260817-cert-home-faq-stale — Cert home-page FAQ + /program/structure are LIVE with the retired occurrence-selected methodology and a 10x-stale standards count

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/index.md`, `content/program/structure.md`, `tools/method-drift-lint.mjs`
- repro: cd ~/Desktop/heavymetalcertified. (A) METHOD DRIFT, live on origin/main = production: git show origin/main:content/index.md | grep -n "pools peer-reviewed" -> the FAQ Who sets the limits (content/index.md:76) answers that for the four Tier-1 toxics and the cells no government regulates the program pools peer-reviewed and government occurrence data and takes the stricter of that pooled figure and the government maximum. The two hero paragraphs (content/index.md:42, :44) repeat it (tightened by a pooled distribution / where the pooled literature supports). Method v2.0 (ratified 2026-08-11, index commit 880cf9722 Retire occurrence-selected HMTc methodology) is government-limit-only: occurrence evidence does not select the initial value, for Tier 1 and Tier 2 alike. Same drift on content/program/structure.md:57 (limit sits at the 97th percentile of the pooled distribution), :100 (For a cell the program sets from occurrence - the Tier 1 toxics and the analytes no government regulates), :121 (the limit is feasibility-driven), :128 (rationale tag is Exactly one of literature-baseline, regulatory-alignment, feasibility-driven or precautionary - three of those four tags are retired; current vocabulary is regulatory-alignment / read-across / not-material / control / ratchet). (B) STALE COUNT: content/index.md:72 and content/program/structure.md:18 both say Fifteen subcategory standards are locked ... three are firm across two subcategories today, while git ls-tree --name-only origin/main content/standards/ | grep -c ".md$" -> 152 live subcategory standards pages. (C) LINT GAP: node tools/method-drift-lint.mjs -> OK (95 content/briefing files scanned) - it scans briefings only, so the homepage and program prose are unguarded, which is how this survived the shipped Method-v2 prose sweep.
- done when: content/index.md FAQ Who sets the limits, and the two hero paragraphs at :42 and :44, describe government-limit-only initial setting (strictest applicable sovereign maximum in the native basis; disclosed read-across or an n/m control where the exact cell is unregulated) with no claim that occurrence pooling selects or tightens an initial value; content/program/structure.md carries no percentile-selection, occurrence-set-cell, or feasibility-driven derivation prose, and its rationale-tag list is exactly regulatory-alignment / read-across / not-material / control / ratchet; Post-publication tightening, where described, is attributed to the Governance Policy 12 certified-lot Standards Ratchet and not to public occurrence data; The subcategory-standards count on both pages matches the live register (verify against git ls-tree --name-only origin/main content/standards/ | grep -c ".md$"); tools/method-drift-lint.mjs also scans content/index.md and content/program/*.md, and fails on the pre-v2.0 phrasings above; npm run prebuild stays green after the prose fix
- evidence: content/index.md:76 - the program pools peer-reviewed and government occurrence data and takes the stricter of that pooled figure and the government maximum · content/program/structure.md:128 - Exactly one of literature-baseline, regulatory-alignment, feasibility-driven or precautionary · 152 live standards pages on origin/main vs Fifteen ... locked claimed on content/index.md:72
- decision: _pending_
- notes: Karen flagged the home-page FAQs as outdated on 2026-08-17. Verified: the staleness is not cosmetic - it is a false live claim about how HMTc sets limits, on the production home page (cert push-to-main = LIVE). human-gated because it is cert production content on the Part 2 firewall boundary.

### OI-20260817-cert-background-lab-priors — Publish the background-lab-findings allowance: 2 of the 3 required baseline priors may come from a brand-supplied Tier-1 lab report under 12 months old

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/program/structure.md`, `content/index.md`, `content/apply.md`
- repro: Policy stated by Karen 2026-08-17, not yet published anywhere on the cert site. What the site says today: content/program/structure.md:10 snapshot reads Baseline lots required 3, and content/program/structure.md:187 states flatly that every SKU entering the program is tested across a minimum of three production lots to establish a baseline before any status is assigned at all - a single passing lot certifies nothing. No page anywhere states the allowance. cd ~/Desktop/heavymetalcertified && grep -rni "background lab\|prior lab\|existing test\|historical result" content/ -> no hits. The actual policy: HMTc runs the full ten-analyte panel at entry to establish the baseline and to set that brand SKU individual lot-testing schedule; a brand may satisfy TWO of the three required baseline priors with its own background laboratory findings covering the Tier 1 analytes, dated within the past 12 months, with HMTc running the remaining prior. The full-panel entry test is not waived by this - the allowance covers the priors, not the panel.
- done when: content/program/structure.md lot-surveillance section states that the entry test runs the full ten-analyte panel and that it establishes both the baseline and the SKU lot-testing schedule; The same section states that two of the three required baseline priors may be satisfied by brand-supplied background laboratory findings, and that HMTc runs the third; The acceptance conditions for a background finding are published and checkable, not vague: covers the Tier 1 analytes (Pb, Cd, iAs, MeHg), dated within 12 months of application, ISO/IEC 17025-accredited laboratory, same product form and native basis as the certified SKU, full report with method and LOQ supplied rather than a summary figure; The snapshot k/v at content/program/structure.md:10 no longer reads as an unqualified 3 production lots if the allowance changes what those three lots are; A home-page FAQ answers can we use lab results we already have, consistent with the structure page and with no claim that prior results shorten or replace the entry panel; content/apply.md names the background findings as an optional application input so an applicant knows to bring them; npm run prebuild stays green (method-drift-lint, firewall-cert-lint, design-lint, check:v3)
- evidence: content/program/structure.md:187 - tested across a minimum of three production lots to establish a baseline before any status is assigned at all · content/program/structure.md:10 - snapshot k/v Baseline lots required: 3 · No occurrence of any prior-lab-results allowance anywhere under content/
- decision: _pending_
- notes: Karen 2026-08-17. Ships alongside OI-20260817-cert-home-faq-stale since both touch the same home-page FAQ list and the same program/structure page; sequence the FAQ rewrite so the new Q lands in the corrected list rather than the stale one. human-gated: it is a public program-policy commitment on cert production, where push-to-main is LIVE.

### OI-20260817-cat17-cr-register-drift — Cat 17 pet-food total-Cr flips control->1000 (read-across HK Cap 132V) on recompile from main — register drift, not an audit tightening; remediation task_222daa53 should review before publishing

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat17-compiled/`, `tools/standards/cat17-config.json`, `tools/standards/compile-cat17.mjs`
- repro: In a clean worktree off origin/main: node tools/standards/compile-cat17.mjs; observe total Cr for dry pet subcategories (e.g. pet-food-dry-kibble) compiles to 1000 (read-across HK Cap 132V, feed floor 5000) whereas the LIVE cert render content/standards/pet-food-dry-kibble.md shows Cr=control. HK Cap 132V total-Cr was ingested into the register after exciting-hamilton compiled cat17, so a fresh recompile diverges from the published standard. The landed staff data matches live (control); the drift only surfaces on recompile.
- done when: Decide whether HK Cap 132V total-Cr is a valid human-food read-across analog for pet-food total-Cr (control vs 1000); If control is correct, add HK Cap 132V to cat17 no-ML/exclusion handling so recompile reproduces the live standard; If 1000 is correct, publish deliberately as a register update with rationale, not silently
- decision: _pending_

### OI-20260814-cat24-verify — Cat-24 Dairy adversarial verification: 12 tightenings confirmed, 7 rejected

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `tools/standards/cat24-config.json`, `data/workbench/standards/cat24-compiled/`
- repro: Verified the Cat-24 audit against origin/main:data/evidence/regulatory_limits.csv + USDA FAS IS1101 (Israel), HK CFS Cap 132V Guidelines Sep-2025, EU 2023/915. CONFIRMED (12): cow/goat-sheep/camel Cd->5 & tHg->10 (Israel FCS-2016 milk row Cd0.005/Hg0.01, 10x stricter than dairy-products; HK milk Hg0.01 corroborates), cow iAs->10 (IL milk inorganic-As col; note source 0.012 vs register 10), goat-sheep/camel tAs->50 (PY/MERCOSUR fluid-milk), yogurt Cd->50 (IL general dairy, NOT milk-row 5), cream tHg->50 (VN dairy tHg 50), condensed/evaporated Sn control->200000 (EU 2023/915 s3.5.1 + IL canned-foods, strictest canned tin). REJECTED (7): cheese/cream/condensed Cd->50 & cheese tHg->10 (concentration basis mismatch per HK reg 3(2)(b) + MERCOSUR gradient milk50<condensed100<cream200<cheese500; HK secondary-milk-products Note10=ready-to-drink excludes cheese), yogurt tAs->50 & tHg->10 (fermented-milk not milk/dairy-without-addition; VN exact fermented-milk 500/50), milk-powders Cd re-anchor (liquid->powder needs forbidden concentration factor; VN powder 1000 is correct exact basis). Also surfaced 2 register transcription errors in il_fcs2016 rows: milk iAs should be 12 (0.012) not 10; dairy-products Pb should be 200 (0.2) not 20.
- done when: Compiler read-across selection picks strictest applicable SAME-FORM sovereign (IL Milk row for liquid milks; not hardcoded IL Dairy-products); IL milk-specific rows (Cd5/tHg10/iAs~10-12) added to liquid-milk pools for cow/goat-sheep/camel; Concentrated forms (cheese/cream/condensed) retain concentration-appropriate values, NOT forced to IL general-dairy 50; canned dairy-condensed-evaporated Sn emits 200000 (EU/IL) not control; il_fcs2016 register transcription fixed: milk iAs 0.012, dairy-products Pb 0.2
- decision: _pending_

### OI-20260814-cat1-tas-cr-verified — Cat-1 baby-food standards: add mandatory tAs cells + reclassify Cr not_material to HK read-across

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `data/workbench/standards/cat1-compiled/`, `tools/standards/cat1-config.json`
- repro: git show origin/main:data/workbench/standards/cat1-compiled/baby-cereals-dry-rice-based.json — tAs absent from all 12 baby-food cells; Cr=not_material on 10 cells
- done when: Add tAs cell (regulatory-alignment, IN FSSAI 0.05 mg/kg total-As as-sold, strictest infant tAs; SG baby-food 100 fallback) to all 12 baby-food subcats; Reclassify Cr not_material to gov read-across on grain/vegetable/mixed-meal cells: HK Cap 132V Cereals 1000, Vegetables 500, component read-across 500; keep reflex Cr-VI speciation control; Fix soy formula-powder Cd binding from IL general-powder 10 to soy-specific 20 (EU/GSO/IL-14_3); Relocate 7 misfiled seafood JSONs from cat1-compiled to Cat-6; Resolve rice-cereal iAs=100 vs tAs=50 coherence (iAs cannot exceed tAs)
- decision: _pending_

### OI-20260813-wiki-evidence-plane-honesty — Wiki governance pages: reconcile retired limit-rationale to Method v3.1 and de-overclaim 'Cochrane-equivalent'

- scope: **auto** · type: content · status: open · repo: index
- paths: `wiki/trust.md`, `wiki/editorial-standards.md`, `wiki/methodology.md`, `wiki/coverage.md`, `wiki/roadmap.md`
- repro: trust.md ~L64 and editorial-standards.md ~L24 still say HMTc limits tighten 'for precautionary, market-ratcheting, feasibility-driven' reasons (retired by Method v3.1). trust.md/methodology.md/coverage.md/roadmap.md assert 'Cochrane-equivalent' as achieved fact.
- done when: Retired-rationale passages rewritten to government-limit-first + certified-lot ratchet; 'Cochrane-equivalent' softened to Cochrane-style/systematic-review-principles; PRISMA-style retained; Regression lint added for retired strings + bare Cochrane-equivalent in wiki governance prose; Run only on a clean tree after codex/methodology-sync merges; Frozen non-profit + Cyprus items untouched

### OI-20260813-cert-trust-governance-artifacts — P0 trust artifacts needing governance input: data-governance page, decision-independence/appeals, entity-structure diagram

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/trust.md`
- repro: Strategy calls for a 'What Happens to Your Data' page (role access, retention, deletion, legal-hold/subpoena, HMI firewall), a decision-independence/conflicts/appeals statement (fees do not buy a passing decision), and a one-diagram entity map. These need real org/counsel facts, not copywriting.
- done when: Data-governance page states only ratified retention/access/deletion/legal-hold rules; Decision-independence page reflects real separation of sales vs certification decision vs appeals; Entity-structure uses settled naming (Institute of Contaminant Standards operator / Paleo Certified, Inc. legal); does NOT resolve frozen non-profit or Cyprus/EU items; Karen/counsel supply governance facts before publication
- decision: _pending_

### OI-20260813-cert-sitewide-stale-deploy-note — docs/design-canon/SITEWIDE.md falsely claims the cert site does not auto-deploy

- scope: **auto** · type: code-fix · status: open · repo: cert
- paths: `docs/design-canon/SITEWIDE.md`
- repro: SITEWIDE.md asserts git.deploymentEnabled is false and 'nothing auto-deploys'; actual vercel.json has deploymentEnabled.main:true (push-to-main = live prod). Stale note is a deploy-safety trap that likely contributed to PR #7 going live by surprise.
- done when: SITEWIDE.md corrected to state main auto-deploys to production; Any 'safe to push to main' guidance removed or corrected

### OI-20260813-cert-remediation-live-promise — Live remediation page promises certified brands keep their certificate on self-disclosure, unconfirmed against Governance Policy

- scope: **human-gated** · type: decision · status: open · repo: cert
- paths: `content/program/remediation.md`
- repro: program/remediation.md (live on main) says 'the certificate holds / Effect on certificate: none if on schedule' and carries its own 'needs confirmation, not quoted from Governance Policy' hedge; agent/brand-control-architecture what-if-we-dont-pass.md flags remediation as pre-cert (no mark, no certificate issued).
- done when: Verify against Program Manual Part 2.3 / Governance Policy §12 whether a ratified post-cert voluntary-disclosure protocol exists; remediation.md reconciled to the ratified truth OR promise kept with cited section and hedge removed; Landed on a fresh branch off origin/main, preview verified, NOT pushed to main; Karen decides the post-cert-protocol question
- decision: _pending_

### OI-20260813-cert-brand-os-backlog — HMTc brand operating-system build backlog, deferred until after P0 institutional-truth reconciliations

- scope: **human-gated** · type: finding · status: open · repo: cert
- paths: `content/`
- repro: Strategy proposes Evidence Reuse Passport, No-Surprise Result Simulator, Standard Stability Covenant, Brand Control Room, Digital Product Passport + retailer API, role-specific substantiation packets, on-domain intake flow, and a full mark/claims artwork guide. Premature until P0 truth (remediation, pricing, category-readiness, data-governance, decision-independence) is settled.
- done when: Do NOT build any item here until the P0 reconciliation chips land and Karen confirms institutional truth; Each item, when unlocked, must trace every public promise to a ratified rule and pass the design canon; on-domain intake + payment/account flows require Karen + infra sign-off (prohibited-action surface)
- decision: _pending_

### OI-20260813-cert-brand-journey-port — Re-do the reverted brand journey (PR #7): reconcile-then-port through v3 canon with minimal new surface

- scope: **human-gated** · type: content · status: open · repo: cert
- paths: `content/index.md`, `content/apply.md`, `content/verify.md`, `content/mark.md`, `content/what-if-we-dont-pass.md`, `content/brand-bill-of-rights.md`, `content/category-readiness.md`
- repro: PR #7 (440a05d) shipped 7 brand pages + homepage reframe to main (auto-deployed live), reverted next commit 625574b; content survives on agent/brand-control-architecture. Includes pricing contradiction (apply.md 'ten-analyte panel included' vs briefs 'un-marked-up pass-through') and category-readiness honest gating.
- done when: Every claim reconciled to Program Manual + hmtc-governing-principles.md before porting; Minimum new surface: edit existing pages where possible; each new page justified; design-lint + check:v3 pass (no bold, one #9f2727 table, Lora 400); Pricing reconciled to one authoritative fee statement; Category-readiness gated on real live-standard data; Hero reframe built on preview and surfaced to Karen; not pushed to main
- decision: _pending_

### OI-20260811-shellfish-cd-pool-tail-artifact — shellfish|Cd raw pooled p100=21665 ppb is a reconstruction-tail artifact (duplicate romero-estevez2020 autonomy+primary rows, mean-only lognormal); cert display protected by observed_max=1600 but pooled percentile inflated

- scope: **auto** · type: code-fix · status: open · repo: index
- paths: `data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/category6_primary_extraction_summary.csv`, `data/evidence/autonomy/extraction-quarantine.csv`
- repro: hmtc_aggregate_distributions.csv shellfish|Cd: pooled_p95=5294, pooled_p100=21665 while observed_max across cited studies (cert occurrence-evidence) = 1600 ppb. romero-estevez2020-bivalves-santa-rosa-ecuador contributes TWICE to the pool: an autonomy row (category1_autonomy_extracted_summary.csv, row_slug=shellfish, Cd, mean_ppb=560, reconstruction lognormal_mean_only) AND a cat6 primary_extraction row (uniform_max_only). The mean-only lognormal tail plus double-counting inflate the pooled upper tail far above any real measurement.
- done when: shellfish|Cd pooled_p100 within ~2x of observed_max (1600 ppb); romero-estevez2020 contributes once (dedupe autonomy vs primary-extraction row); cert shellfish|Cd observed_max stays 1600 ppb
- notes: Distinct from the cephalopod misrouting (which is fixed). This is the same duplicate-autonomy-row + mean-only-tail class as the salt|Pb samsiyah quarantine, but for a different source/cell. The cert renderer already displays observed_max=1600, so it is not a false live-page figure; logging rather than chasing.

### OI-20260811-primary-nav-internal-slug-leak — Verify internal slugs aren't leaking into the public nav after primaryNavFilter removal

- scope: **human-gated** · type: finding · status: open · repo: index
- paths: `quartz.layout.ts`, `quartz/components/TopNav.tsx`, `quartz/components/MegaMenu.tsx`
- repro: CI-blocking tsc error forced removal of the orphaned Explorer `primaryNavFilter` in quartz.layout.ts, which hid internal slugs (app, batch-reports, lint, log, methodology, static, studies, staff, workbench, terms, privacy, health, corpus, courses, editorial-standards, tags, testing, queries, microbiome, overview) from the primary nav. v3 replaced the Explorer with TopNav/MegaMenu; confirm those components hide the same internal set. If any internal/staff page now appears in the live public nav, re-apply an equivalent filter in the nav component.
- done when: No internal/staff slug appears in the live heavymetalindex.com primary nav; the hidden-set is enforced in whatever nav component is actually mounted (TopNav/MegaMenu), not an orphaned filter
- decision: _pending_

### OI-20260811-cephalopods-orphaned-occurrence — Cephalopods occurrence orphaned: Garofalo cephalopod strata rerouted to row_slug=cephalopods but no wiki/products/cephalopods.md exists to pool them, and garofalo products: lacks cephalopods

- scope: **human-gated** · type: content · status: open · repo: index
- paths: `wiki/products/cephalopods.md`, `wiki/sources/garofalo2025-seafood-cd-pb-hg-italy-10yr.md`, `data/evidence/category6_primary_extraction_summary.csv`
- repro: After the cephalopod-misrouting fix, cephalopods|Cd/Pb/tHg strata (Cd n=1500 max5600; Pb n=650; tHg n=687) carry row_slug=cephalopods in category6_primary_extraction_summary.csv but reach NO pooled aggregate cell (hmtc_pool_starvation_audit reason=unmatched_slug) because there is no wiki/products/cephalopods.md. The cert cephalopods|Cd cell shows gov ML 1000 (EU) with n_studies=0 / has_data=false. Cd/tHg are Tier-1 toxics; cephalopod occurrence (Cd p95 600, max 5600) could corroborate or tighten the gov ML but is invisible.
- done when: wiki/products/cephalopods.md exists as a product-category page (hmtc_category 6, row 6); garofalo2025 products: frontmatter includes cephalopods; hmtc_aggregate_distributions.csv has cephalopods|Cd, cephalopods|Pb, cephalopods|tHg cells; cert occurrence-evidence cephalopods|Cd shows occurrence corroborating the 1000 gov ML
- decision: _pending_
- notes: Surfaced while fixing the shellfish|Cd cephalopod-misrouting bug. The reroute is correct (removes 5600 pollution from shellfish); this item is the downstream gap it exposes: cephalopods is a live compiled standard (cat1-compiled/cephalopods.json, seafood-config row 6) with no product page and no pooled occurrence.

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
