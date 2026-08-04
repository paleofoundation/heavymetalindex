---
title: Wiki Information-Architecture Redesign Plan
status: proposed
created: 2026-06-22
owner: Karen Pendergrass
author: Claude (synthesis of a 4-lens design panel)
related:
  - "[[docs/page-templates]]"
  - "[[docs/lint]]"
  - "[[quartz.layout.ts]]"
exemplar: https://hmi-design-mockup.vercel.app/lead.html
---

# Wiki Information-Architecture Redesign Plan

## Context — why this exists

heavymetalindex.com today is correct but **overwhelming**: a reference-grade corpus rendered with no reading path. The Lead page is ~800 KB — 18 long prose sections plus a ~1,233-row sources table, all expanded at once, with full `([[sources/x|Author Year]])` parentheticals after nearly every sentence. It tries to be five documents stacked vertically (consumer explainer + regulator reference + toxicology monograph + bibliography + provenance ledger). That density is the asset (completeness is the defensibility moat) and the liability (nobody can navigate it).

The fix is **layering, not deletion**: adopt the examine.com / microbiomemedicine.com information architecture — a reading frame plus progressive disclosure — while guaranteeing, mechanically, that **no information and no quality of information is ever lost**. A live exemplar of the target is deployed at the URL in the frontmatter (Lead page: 800 KB → 20 KB visible, every claim still source-linked).

This plan was developed as a repo-grounded four-lens panel (information architecture, SEO/LLMO, information-preservation/defensibility, Quartz implementation). The non-negotiables it had to satisfy: (1) no information loss; (2) per-claim provenance preserved (CLAUDE.md Part 1 re-derivation requirement); (3) the Part 2 firewall (no certification thresholds on the public surface) holds for the new structured-data surfaces too; (4) SEO/LLMO-careful — no keyword cannibalization ("we do not want 10 pages with the same keyword").

---

## The design in one paragraph

Give every page a **reading frame** (white full-width top nav, a left section-nav built from the page's own headings, a right rail of actions + provenance). **Collapse specialist depth and the source apparatus behind native `<details>`** — present in the DOM, hidden by CSS, never JS-fetched. Turn inline source wikilinks into **superscript citation numbers that link to the source's own page and reuse the existing Quartz hover-popover**. Add an **accordion Q&A overview** (the only new authored surface; everything else is restructuring). Assign each query intent to exactly one **owning page type** so pages stop competing in search. And prove nothing was lost with a **build-blocking content-preservation lint** diffing a frozen baseline.

---

## 1. The canonical page template (one template, type-driven variants)

One master template. Section *presence* varies by page `type`; section *order*, open/collapsed defaults, and the apparatus pattern are identical everywhere — learn one page, read any page.

Order, top to bottom:

1. Breadcrumbs — always visible
2. Page title (Lora serif) — always visible
3. **Evidence header strip** (author/ORCID, source count, last-updated, tier mix) — always visible; this is the authority signal, never collapse it
4. **Quick-read card** (the existing `.hmi-quick-read`) — always open; the single most-read element and the direct-answer lede (critical for SEO/LLMO — never collapse the primary answer)
5. **Key questions (accordion Q&A)** — NEW, collapsed; examine-style overview
6. **Body sections** — top 2–3 open; specialist sections collapsed via `<details>`
7. **Evidence-grade table(s)** (contamination profile / occurrence / regulatory limits) — always open; the payload
8. **See also** (RelatedPages) — open
9. **References** (the source apparatus) — collapsed `<details>`, filterable
10. **Update history** (timeline) — collapsed
11. **Cite this page** — open footer block

**The rule that makes it safe:** *open vs collapsed is a presentation attribute, never a content attribute.* A collapsed section is the full section subtree wrapped in `<details>`; the summary is additive.

**Open/collapse is deterministic, not per-page judgment:** a section opens by default iff its existing `<!-- audience: ... -->` tag includes `consumer`; it collapses if it is `regulator`/`app`-only; untagged sections default **open** (fail-safe toward visibility).

**Accordion Q&A is derived, not separately authored:** a generator turns the page's H2s into 4–7 question-framed `<details>` whose answers are the section's first paragraph + a "Read full section →" anchor. This doubles as the FAQ structured-data source (§4).

Type variants (one template, `type` frontmatter gates blocks):

| Block | metal | ingredient | product-category | regulation | source |
|---|:--:|:--:|:--:|:--:|:--:|
| Evidence header | ✓ | ✓ | ✓ | ✓ | ✓ (citation panel) |
| Quick read | ✓ | ✓ | ✓ | ✓ | abstract |
| Key-questions Q&A | 5–7 | 4–5 | 3–4 | 2–3 | — |
| Contamination/occurrence table | regulatory limits | `contamination_profile` (open, app-readable) | category occurrence | the limit values | extracted values |
| References (collapsed) | ✓ (1,233) | ✓ | ✓ | ✓ | own refs |
| Update-history timeline | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Firewall guard** | — | — | **✓ no thresholds/P-values** | — | — |

Source pages are the citation *targets* and do **not** get superscript-transformed; the hover-card is rendered from their frontmatter, so source-page frontmatter completeness (title/authors/year/DOI) is load-bearing for the whole citation UX.

---

## 2. Citations & references — the highest-leverage change

**Inline citations become superscript chips.** Today every sentence carries a parenthetical as long as the prose. Target: a superscript number that hyperlinks to the source page and fires the existing popover.

This is a **render-time decoration, never a markdown rewrite.** A new rehype transformer runs *after* `CrawlLinks` and rewrites the already-resolved `<a data-slug="sources/x">` into:

```html
<sup class="hmi-cite"><a href="/sources/efsa-lead-contam-2010"
   class="internal" data-slug="sources/efsa-lead-contam-2010"
   data-source="efsa-lead-contam-2010">12</a></sup>
```

The conserved quantity is the **claim → `sources/<cite-key>` edge**, not the numeral. Five hard invariants (each lint-enforced):

1. `href` still resolves to `sources/<cite-key>` (the provenance page).
2. `data-source="<cite-key>"` mandatory = the original wikilink target (machine-checkable provenance).
3. No N:1 collapse — two claims citing two different sources keep two distinct `data-source` values (numbers may repeat only for repeat cites of the *same* key).
4. `data-slug` untouched — `enablePopovers: true` already supplies the hover source-card; **no new popover code**.
5. The on-disk markdown `[[sources/x]]` is never rewritten — so `audit-claim-provenance.mjs` keeps passing and the Part 1 re-derivation guarantee holds.

**References collapse, stay complete.** The existing generator-owned `## Sources` legend (every source with its `[[sources/x]]` link) is wrapped in a collapsed `<details>` with a client-side filter input (author/year/topic) and `#ref-N` anchors. Collapsed-but-server-rendered → Google Scholar, the scholarly sitemap, llms.txt, and the preservation lint all still see all 1,233 rows. Clicking a superscript opens the block and jumps to its row.

---

## 3. Navigation model

- **Top nav** (NEW; populate the empty `header` slot, lift it out of the content grid to full width): white sticky bar — wordmark left, taxonomy roots center (Metals · Foods & Ingredients · Products · Regulations · Testing), Search + Ask the Index + About right. Carries the **"Independent reference operated by the Institute of Contaminant Standards"** line (the ICS attribution + Part 2 posture made visible).
- **Left rail** = **keep the Explorer, add a per-page section-nav above it.** (Recommendation: do not delete the Explorer — it is the site taxonomy browse and part of the deliberate hidden-folder posture. Add the existing TableOfContents, moved left and restyled as the examine sticky "On this page" list with scroll-spy, plus an Expand-all/Collapse-all toggle.)
- **Right rail** = actions + provenance (Cite, Download/print, evidence-at-a-glance chips, `SourceCitationPanel` on source pages). The TOC vacates the right rail to make room.

Responsive: `<1200px` right rail drops below; `<800px` left section-nav becomes a sticky "On this page ▾" — both breakpoints already exist in `base.scss`.

---

## 4. SEO & LLMO rules (the structure must not cannibalize)

The cannibalization risk is already present and structural: a metal page, ingredient page, product-category page, and regulation page can all answer "lead in baby food." Self-canonical tags are already correct; the fix is **intent ownership**, not canonical surgery.

**Intent-ownership matrix** (each intent owned by exactly one page type):

- the **metal** page owns the **substance** ("what is lead / lead toxicity")
- the **ingredient** page owns the **commodity × metal** cell ("lead in apples")
- the **product-category** page owns the **consumer category** ("heavy metals in baby rice cereal")
- the **regulation** page owns the **numeric limit** ("FDA lead limit baby food")
- a hub page owns the broad head term ("heavy metals in food")

Enforced by a new `canonical_intent` frontmatter field + a build-blocking lint that fails if two pages declare the same intent string (sits beside `firewall-no-threshold-lint.mjs`). This is the concrete form of "no 10 pages with the same keyword."

Other rules:
- **Collapse must be CSS, never JS-fetched** — Googlebot/GPTBot/ClaudeBot/PerplexityBot do not click. `<details>` (server-rendered) is indexed (mildly down-weighted, which is *fine* for the reference apparatus and *good* for Core Web Vitals on the 800 KB page). Never collapse the primary answer; keep one `<h1>` and semantic `<h2/h3>` even inside accordions.
- **Add `FAQPage` JSON-LD** generated from the accordion Q&A (answer text = visible verbatim text) — highest-leverage new LLMO asset; makes pages eligible for AI Overviews / direct quotation. Must pass the threshold-firewall (no P-values in an `acceptedAnswer`).
- **Add citation edges** to page JSON-LD (`citation: [{ScholarlyArticle, @id: source url}]`) — the structured form of the superscript trail; how answer engines build "who supports this claim."
- **Entity consistency** — `sameAs` to Wikidata/PubChem per metal; disambiguates the arsenic-species pages. Fix the confirmed gap where ingredient pages don't auto-link their metal (e.g. apple → zero `metals/*` links).
- **Thin/disambiguation discipline** — `provisional_scaffold` (<5 papers) pages get `noindex` until promoted; `arsenic.md` becomes a thin disambiguation hub (no duplicate toxicology prose competing with `arsenic-inorganic`/`-total`); title product variants by their differentiating axis, not repeated keywords.

---

## 5. No-information-loss enforcement (the mechanical guarantee)

The invariant: **the redesign is a rendering/disclosure transformation, never a content transformation.** Enforced by a frozen baseline + a build-blocking lint, not by reviewer trust.

- **`tools/snapshot-information-set.mjs`** — run once on `main` at the redesign start; writes a committed `data/evidence/content-preservation/baseline-information-set.json` capturing, per page, five conserved quantities: sections (headings), numeric claims (value+unit), claim→cite-key edges (section::cite-key), source-legend row count, body token count (visible + collapsed).
- **`tools/audit-content-preservation.mjs`** — mirrors the repo audit pattern (CSV+JSON, `exit(1)` unless `--warn-only`). A **monotonic-superset** check (adding is allowed; losing is not) with 8 checks: C0 page exists · C1 token count non-decreasing (collapsed `<details>` text counts) · C2 numeric claims ⊇ baseline · C3 claim→cite-key edges ⊇ baseline · C4 every source link present in *rendered* HTML and not JS-only · C5 distinct (section,cite-key) non-decreasing · C6 sections ⊇ baseline · C7 generator-marker integrity + source-row count non-decreasing.
- **Two hooks** (mirrors `firewall-no-threshold-lint.mjs`'s `--html` mode): source-side (C0–C3,C5–C7) appended last in `prebuild`; rendered-side (C4) prepended first in `postbuild` over `public/**/*.html`.
- **Drain-then-block:** ship `--warn-only` on the first redesign PR to surface the full delta, **flip to blocking before merge** (same pattern the repo uses for contamination-integrity and firewall lints).
- **Baseline lifecycle:** re-snapshot only via an explicit, logged `op: snapshot` invocation after the redesign settles — never auto-refresh inside the audit (auto-refresh would absorb a loss into the new baseline, defeating the guard).

Seven risk vectors it neutralizes: accordion truncation, summary-replacing-detail, reference-collapse-hides-from-crawlers, superscript-drops-the-link, dedup-deletes-a-unique-claim, audience-section-stripping, generator-marker corruption. (Full table in the panel transcript.)

---

## 6. Phased rollout (each phase independently shippable + reversible)

Validate each with `npm run build` locally + a `vercel build` in a throwaway worktree before pushing; `main` deploys via the scheduled hook.

- **Phase 0 — Preservation lint first (`--warn-only`).** Build the snapshot + audit and baseline current `main`. Guards every later phase.
- **Phase 1 — Theme tokens (lowest risk).** `quartz.config.ts` `typography.header: "Lora"` (auto-fetched; `var(--headerFont)` already drives all headings — zero CSS needed for the swap). Table restyle + Lora heading scale in `custom.scss`. Burgundy already set. Keep WCAG-AA `--gray` ratios.
- **Phase 2 — Layout / TopNav (riskiest).** New `TopNav.tsx` + `topNav.scss`; lift the `header` out of `main.center` to a full-width `<header>` in `renderPage.tsx`; grid maps + `$topSpacing` in `variables.scss`; recompose left (section-nav + Explorer) and right (actions/provenance) rails. Verify sticky-bar clearance, anchor scroll-padding, mobile collapse.
- **Phase 3 — Citation transform behind a flag, on Lead only.** `superscriptCitations.ts` after `CrawlLinks`, gated by `redesign_citations: true` frontmatter, set on `wiki/metals/lead.md` (the 800 KB worst case). Verify superscripts link to source pages, popovers still fire, `## Sources` collapses, weight drops, lint shows zero loss. Profile build time (decide whether the heavy table-wrap moves to a postbuild pass).
- **Phase 4 — Per-type rollout.** Remove the flag; tune per `type`. Validate one page of each type.
- **Phase 5 — Flip the preservation lint to blocking.** Drop `--warn-only`; re-baseline once, intentionally. The no-loss constraint is now permanent.

---

## 7. Files

**Create:** `quartz/components/TopNav.tsx` · `quartz/components/styles/topNav.scss` · `quartz/components/topNavLinks.ts` · `quartz/plugins/transformers/superscriptCitations.ts` · `tools/snapshot-information-set.mjs` · `tools/audit-content-preservation.mjs` · (conditional) `tools/postbuild-collapse-references.mjs` · generators for the Q&A accordion, references `<ol>`, and update-history timeline tags.

**Edit:** `quartz.config.ts` (Lora; register the transformer after CrawlLinks; FAQ/citation JSON-LD via `tools/postbuild-inject-jsonld.mjs`) · `quartz.layout.ts` (header, left/right recompose) · `quartz/components/renderPage.tsx` (lift header) · `quartz/components/index.ts` + `quartz/plugins/transformers/index.ts` (exports) · `quartz/styles/variables.scss` (grid + `$topSpacing`) · `quartz/styles/custom.scss` (accordion/superscript/table styles — no `details` rules exist yet) · `package.json` (prebuild/postbuild lint hooks) · `tools/postbuild-llms-txt.mjs` (intent-map sections).

**Do not touch:** `quartz/plugins/transformers/citations.ts` (rehype-citation; dead `.bib` path, unrelated to `[[sources/x]]`).

---

## Open decisions for Karen

1. **Left rail** — recommend *keep Explorer + add section-nav* (no nav loss, lower risk). OK, or do you want the section-nav to fully replace the file-tree like Examine?
2. **Update-history credits** — Examine shows author/editor/reviewer. HMI reality is you as author + automated synthesis. Adopt an author/editor/reviewer credit model (new `Reviewed-By` git trailer), or keep author + provenance only?
3. **Arsenic triplet** — `arsenic` / `arsenic-inorganic` / `arsenic-total` is a live cannibalization risk. OK to demote `arsenic.md` to a thin disambiguation hub?
4. **Rollout scope** — ship the full redesign on metals first and watch, or all page types at once after Phase 3 validates on Lead?
