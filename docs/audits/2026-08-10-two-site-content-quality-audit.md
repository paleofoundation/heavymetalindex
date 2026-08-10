# Two-site content-quality + discoverability audit — 2026-08-10

Scope: heavymetalindex.com (public wiki, ~4,194 md pages) and heavymetalcertified.com
(HMTc program, 77 md pages). Method: a 10-unit scoring Workflow fanned readers out
by page-type, scored each on 5 dimensions (THIN / STALE / SEO / LLMO / FAQ), and an
independent verify pass checked every stale/accuracy finding against
`data/evidence/regulatory_limits.csv` + primary sources. 19 agents, 0 errors.

This document is the prioritized remediation plan. Items marked **[DONE]** shipped
this session (index worktree branch `claude/competent-murdock-0d3527`, manual-deploy —
not yet live). Items marked **[LEDGER]** are in `data/evidence/outstanding/ledger.jsonl`.

## Dimension scorecard (1 = poor … 5 = excellent)

| unit | thin | stale | seo | llmo | faq |
|---|---|---|---|---|---|
| index-metals | 2 | 4 | 2 | 3 | 4 |
| index-ingredients | 3 | 4 | 3 | 3 | 2 |
| index-products | 2 | 2 | 2 | 3 | 2 |
| index-regulations | 3 | 3 | 3 | 3 | 2 |
| index-authority | 3 | 3 | 4 | 4 | 2 |
| index-sources | 3 | 2 | 2 | 2 | 3 |
| cert-analytes | 5 | 3 | 4 | 3 | 2 |
| cert-briefings | 5 | 4 | 3 | 3 | 2 |
| cert-standards | 3 | 4 | 3 | 3 | 2 |
| cert-authority | 4 | 2 | 4 | 3 | 2 |

Structural note: the index discoverability substrate is already strong (self-canonical,
meta description, Scholar `citation_*`, ScholarlyArticle/Dataset + FAQPage JSON-LD for
metals/ingredients/products/regulations, generic FAQ-accordion pipe). The low SEO/LLMO
scores are driven by **content that pollutes those good pipes** (garbage source metadata,
scaffold boilerplate, duplicate H2s), not by missing infrastructure. Cert's gap is the
opposite: good content, but analytes/briefings/standards emit no Article/FAQPage schema
and carry no FAQ.

Coordination constraints honored: the entire **cert content tree is dirty** (a linking
session is mid-edit across analytes/briefings/regulations/standards + autolink/RelatedPages)
→ **no cert file was edited**; all cert findings are ledgered. Internal-linking is owned
by that session → this audit's SEO work steered to meta/schema/headings/hygiene. Index
worktree is current vs deployed `origin/main`.

---

## P0 — Defensibility: false/stale claims on live-ish pages

Verified false claims. These are the plaintiff-expert attack surface.

- **[DONE]** `wiki/synthesis/organoarsenical-inertness-assumption.md` — asserted twice, in
  the wiki's own voice, that "EU 2023/915 sets specific iAs limits for seaweed." FALSE:
  EU sets no seaweed iAs ML; the limits on record are non-EU (AU-NZ 1 mg/kg Schedule 19;
  Singapore 2 mg/kg). Corrected to register-grounded facts. (commit 153d03ea2)
- **[DONE]** `wiki/regulations/codex-cadmium-mls.md` — quinoa Cd 0.15 + Pb 0.2 mg/kg still
  labelled "Forwarded to CAC47 for adoption"; CAC47 (Nov 2024) adopted both. Status
  corrected; values were already right. (commit 153d03ea2)
- **[LEDGER · cert · HIGH]** `content/analytes/lead.md` — JECFA lead-PTWI withdrawal
  misattributed to the **72nd meeting / WHO TRS 959** (that is arsenic's lineage); correct
  is **73rd / TRS 960** (Geneva, Jun 2010). Verified against FAO/WHO primary + the site's
  own arsenic page. A false regulatory-provenance claim on a live cert page. Cannot edit
  now (dirty tree). → `OI-20260810-cert-lead-jecfa-73rd`
- **[LEDGER · cert · HIGH]** `content/regulations/eu-2023-915.md` — the infant/child table
  carries a mercury row (tHg 10) that is a **misplaced pesticide MRL** (Reg 2018/73 /
  396/2005), not a 2023/915 contaminant ML. Remove the row; decrement the intro "25 limits"
  → 24. (Register row `eu2018_73_hg_cereals_mrl_10`.) Generator being reworked on two
  branches — coordinate. → `OI-20260810-cert-eu2023915-hg-pesticide-row`
- **[LEDGER · index · deadline]** China **GB 2762-2025** supersedes GB 2762-2022 on
  **2026-09-02** (23 days out). The 2022 page is correct today but will silently go stale
  with no successor page to route to. `data/regulatory/registry.json` already holds the
  verified 2025 record (diffed: no infant/child metal changes). Create the successor page
  before the effective date. → `OI-20260810-gb2762-2025-successor-page`
- **[LEDGER · index]** `wiki/sources/sim2024-inorganic-arsenic-seaweed-hplc.md` propagates
  the same false EU-seaweed-iAs claim (frontmatter `jurisdictions:[EU]`, links eu-2023-915).
  Needs the paper checked before editing provenance. → `OI-20260810-sim2024-eu-seaweed-ias`

## P1 — High-value SEO/LLMO (revenue-adjacent answer-engine lever)

- **[DONE / IN-FLIGHT]** `wiki/sources/*` (963 mechanical bulk-ingest records) emitted
  garbage `<title>` + `citation_title` + `citation_author` (PDF-header fragments, emails,
  sentence fragments) — fabricated bibliographic metadata advertised to Scholar/answer
  engines on ~963 indexable scholarly pages. Built `tools/repair-bulk-source-metadata.mjs`:
  re-derives title/authors/publication from Crossref by each page's own DOI, with a
  three-signal wrong-DOI safety gate (raw_path + cite_key-tail token overlap, or cite_key
  author-prefix ↔ Crossref family). ~770 pages repaired; the unvalidatable residual (~170)
  is written to `data/evidence/bulk-source-doi-mismatch.csv` for review, never overwritten.
  This also cleans the downstream source-legend pollution on metal/product pages.
- **[LEDGER · index · auto]** Source-legend generator (`tools/evidence/build-source-legend.mjs`
  / populate-source-legends) renders hundreds of unresolved garbage rows on developed pages
  (cadmium 543, mercury-total 579, chromium 408, arsenic-total 398): cite-keys `authors20\d\d-*`,
  titles starting `<digit> Title:`, "Not mechanically resolved from the PDF". Suppress
  unresolved rows from the *rendered* legend. Partly mitigated by the Crossref repair; the
  "Not mechanically resolved" class remains. → `OI-20260810-index-source-legend-garbage`
- **[LEDGER · index · auto]** 170 duplicate adjacent `## Sources`, 75 dup `## Literature
  Evidence Summary`, 13 dup `## Broad Product Context` H2s on product pages — injector
  blocks re-emit an H2 the template already prints (broken heading hierarchy). Remove the
  redundant H2 from the injector or template. → `OI-20260810-index-product-duplicate-h2`
- **[LEDGER · index · auto]** Meta-description duplication: 414/415 product pages, 257
  ingredient pages, and 963 source pages lack `description`/`socialDescription`, so Head.tsx
  auto-derives near-identical descriptions from boilerplate leads (226 product pages share
  one sentence; 50 developed ingredient pages open with an FSA placeholder). Add a
  `socialDescription` generator keyed on structured frontmatter (title + panel metals +
  jurisdictions). → `OI-20260810-index-meta-description-generator`
- **[LEDGER · index · auto]** LLMO direct-answer: only `metals/lead.md` has the top-of-page
  extractable `hmi-quick-read` block; the other 8 developed metal pages open with an italic
  citation-dump. Template the quick-read block into the metal-page generator. →
  `OI-20260810-index-metal-quickread`
- **[LEDGER · cert · HIGH]** Cert analytes (8) + briefings emit **no** Article/FAQPage
  JSON-LD (only the site Organization graph) and carry **no** FAQ, despite being the exact
  deep-tox / positioning pages an answer engine should cite. Extend the cert JSON-LD
  injector to `type: analyte`, add grounded per-analyte FAQ (mirror `tools/metal-faq` →
  `build-metal-faq`), and wire the existing homepage `<details>` Q&As into the FAQPage pipe.
  The cert AEO lever. → `OI-20260810-cert-analytes-faq-jsonld`
- **[LEDGER · cert · code-fix]** Cert briefings Scholar metadata: `citation_publication_date`
  is emitted from a spelled-out "Month YYYY" (`Head.tsx` `.replace(/-/g,'/')` is a no-op on
  month names → Scholar drops the year); `citation_pdf_url` is never emitted (`scholar_pdf`
  unset on all 12 though 11 PDFs exist); `the-big-8.pdf` is missing (Download-PDF 404).
  → `OI-20260810-cert-briefings-scholar-metadata`

## P2 — Thin / starved content (synthesis-backlog)

- **[LEDGER · index · HIGH]** `wiki/metals/arsenic-inorganic.md` — an HMTc-10 analyte and
  the dominant dietary-exposure metal (rice), 109 routed sources, but still `status:scaffold`
  with a public "Planned sections" to-do list while sibling `arsenic-total` is fully
  developed. Highest-value single synthesis action. → `OI-20260810-index-iAs-synthesis`
- **[LEDGER · index]** 27 ingredient pages fully starved (`status:pending` cells), 16 already
  past the Part 9 two-source synthesis trigger (mushrooms, etc.); 96 product pages render
  "No concentration data loaded". Feeds the existing `audit-ingredient-synthesis-backlog`
  workflow. → `OI-20260810-index-synthesis-starvation`
- **[LEDGER · index · decision]** ~17 single-source metal stubs (barium, beryllium, cesium,
  cobalt, copper, gold, iron, lithium, magnesium, molybdenum, palladium, platinum, silver,
  tellurium, thallium, titanium, vanadium) are near-duplicate ~5KB pages from one textbook
  chapter — Google may fold them as thin/near-dup. Decision: noindex-until-threshold vs
  consolidate into one "other/minor toxic metals" page. → `OI-20260810-index-metal-stubs`
- **[LEDGER · index · content]** 149 product pages assert in prose "no peer-reviewed primary
  or government sources have yet been ingested" while frontmatter `sources>0` (a one-time
  `apply-literature-scope-caveat.mjs` stamp gone stale; e.g. fish-marine-non-predatory 821
  sources still `literature_scope:thin`). Reword to "routed but not yet synthesized"; recompute
  `literature_scope`. Intersects the synthesis backlog. → `OI-20260810-index-product-scaffold-prose`

## P3 — Hygiene / metadata

- **[DONE]** 31 internal artifacts (8 batch-reports, 23 lint) were indexable. Added
  `tools/noindex-internal-artifacts.mjs` (idempotent prebuild generator) → all
  batch-reports/lint/log noindexed, future files covered. (commit e5ee433cf)
- **[LEDGER · index · auto]** `status:` frontmatter is an unreliable maturity signal — tin
  is fully developed but tagged `scaffold`; cadmium/nickel/lead/aluminum/arsenic-total carry
  no `status`. (chromium `stub` + mercury-total `scaffold` are ACCURATE — leave.) →
  `OI-20260810-index-metal-status-hygiene`
- **[LEDGER · index · human-gated]** `wiki/about.md` + `wiki/editorial-standards.md` operator
  identity is self-referential ("Institute of Contaminant Standards … which also operates the
  Institute of Contaminant Standards") — a Paleo Foundation → ICS find-replace overshoot.
  Per CLAUDE Part 14 the overshot link (href `paleofoundation.com`) should read "Paleo
  Foundation". Verifier flagged as a naming decision → routed to Karen. →
  `OI-20260810-index-operator-identity`
- **[LEDGER · index · taxonomy]** `wiki/products/infant-food-fruits.md` orphaned scaffold
  (`sources:0` but body cites signes-pastor2018, which now routes to `fruit-purees`). Fold
  or re-attach. → `OI-20260810-index-infant-food-fruits-orphan`
- **[LEDGER · index · system]** ~841 of 963 bulk source pages are mis-routed to
  fish-marine/seaweed defaults regardless of subject (beetroot, lead-water remediation).
  Routing is system-owned (CLAUDE Part 5b); re-fans once the corrected title/abstract land.
  → tracked with `OI-20260810-index-sources-crossref-review`.

## Cert-specific accuracy (verified, ledgered)

- **[LEDGER · cert · HIGH]** Program-count contradictions across flagship pages: homepage
  snapshot "12 subcategory / 3 firm", homepage FAQ "15 / 3-across-2", /standards "15 / 1-across-1
  / 9 categories", structure.md "15 / 8 categories". /standards is itself internally
  inconsistent. Needs one canonical set. → `OI-20260810-cert-program-counts`
- **[LEDGER · cert · code-fix]** `content/standards/spices.md` Pb renders "600 · 85.71
  prepared for feeding" — the infant-formula 1:7 reconstitution column bleeding onto an
  as-sold Cat-34 seasoning (600/7 = 85.71). Fix `build-category-standard-pages` basis logic.
  → `OI-20260810-cert-spices-reconstitution-bleed`
- **[LEDGER · cert]** `infant-formula-powder.md` + `-ready-to-feed.md` declare
  `methodology_version: "… (Method v3.0)"` — no Method v3.0 exists; all 25 siblings cite
  Method v2.0. Relabel. → `OI-20260810-cert-formula-method-version`

## What was NOT touched, deliberately

- No cert file edited (dirty working tree; auto-deploys on push).
- No internal-linking work (owned by the concurrent linking session).
- No routing rows edited by hand (system-owned, Part 5b).
- No synthesis/pooling math run (Part 9/19 workflow; ledgered for a dedicated pass).
- Frozen entity-status claims (Cyprus/EU DB rights; "non-profit") not touched (CLAUDE Part 14).
