# Fable 5 task — adversarial defensibility audit (report-only, isolated branch)

Paste everything below the line into a fresh Fable 5 session running in
`~/Desktop/heavy-metal-index`. It is scoped so it CANNOT collide with FRANK v2
Phase 1 ingest running on `main`: it works on its own branch and writes exactly
one report file.

---

You are a fresh Claude session (Fable 5) in the Heavy Metal Index repo
(`~/Desktop/heavy-metal-index`). Another autonomous system (FRANK v2 Phase 1) may
be ingesting papers concurrently on `main`. To avoid all collision you operate
under strict isolation.

## Isolation rules (do not violate)
1. FIRST, create and switch to a dedicated branch:
   `git checkout -b fable/defensibility-audit-2026-06-10`
2. You may WRITE exactly ONE file: `wiki/lint/2026-06-10-defensibility-audit.md`.
3. You may READ anything.
4. You must NOT modify — even to "fix" — `wiki/sources/*`, `wiki/ingredients/*`,
   `wiki/products/*`, `data/evidence/audit-queue.csv`,
   `data/evidence/product_source_routing_audit.csv`, or any other evidence/CSV.
   This is a REPORT, not a repair pass. Fixes are applied later, when Phase 1 is
   paused. Listing a fix is correct; applying it now is not.
5. Commit ONLY your report file, ONLY to your branch. Never commit to `main`,
   never push: `git add wiki/lint/2026-06-10-defensibility-audit.md && git commit`.

## Your role
Read CLAUDE.md Parts 1, 2, 13, and 18 first. Audit this wiki the way a hostile
plaintiff's expert in a class action would — hunting for every place the "we have
reviewed the complete literature and here is what it says" claim breaks. The wiki's
entire commercial value is legal defensibility; find where it is exposed before an
opposing expert does. Independence is the point: you are a different model from the
one that wrote the wiki, so trust nothing — verify against the sources.

## The audit — four lines of attack
(Part 2 wiki/HMT&C drift check is deliberately OUT of scope at this stage: the wiki
is still a fact-and-figure corpus, not synthesized claims, so there is little drift
to find. Reinstate it once synthesis is mature.)

1. **Claim-to-source traceability.** Sample ~40 substantive claims across
   `wiki/metals/`, `wiki/ingredients/`, `wiki/products/`. Follow each to the
   `wiki/sources/` page that supports it and confirm the source actually says what
   the claim says. Flag any claim that (a) cites no source, (b) cites a source page
   that does not exist, or (c) cites a source that does not support the stated
   value/direction. `data/evidence/claim-provenance-summary.json` asserts 100%
   support — stress that assertion on a real sample, do not take it on faith.
2. **Orphaned evidence.** `data/evidence/hmtc_pool_starvation_audit.csv` has ~193
   rows with empty ingredient slugs (evidence extracted but routed to no page).
   Sample them: recoverable (a real ingredient exists, routing just failed) or
   genuinely unroutable? Estimate how much defensible evidence is currently invisible
   to the wiki.
3. **Structural holes.** `data/evidence/routing_unresolved.csv` (18 sources pointing
   at nonexistent pages) and the 31 locked product pages with zero inbound sources
   (`data/evidence/product-mandatory-sections-audit.csv`): for each cluster, is this
   a defensibility problem (a page makes claims with no evidence behind it) or
   harmless technical debt (a scaffold awaiting evidence)? Classify, don't just count.
4. **Scorecard.** Produce a defensibility score: % of sampled claims verified to
   source, count of drift findings, % of extracted evidence actually routed, count of
   zero-evidence claim-bearing pages. State the methodology so it is reproducible.

## Output — `wiki/lint/2026-06-10-defensibility-audit.md`
- A scorecard table (the five metrics above).
- A findings table: `| severity | type | file:line | finding |`, where
  severity is `litigation-blocking` / `serious` / `technical-debt`.
- A "fixes to apply when Phase 1 is paused" section — specific, actionable,
  file-scoped (e.g. "route `hmtc_pool_starvation` row X to ingredient Y"), so a later
  pass can execute them directly. This is the one place a to-do list is wanted,
  because the isolation rules forbid doing the fixes now.
- A "what I could NOT verify" section (sources unread, claims I couldn't trace) —
  honesty about audit coverage is itself part of the defensibility posture.

Be adversarial and specific. "Looks fine" is not a finding; a `file:line` an opposing
expert could exploit is. When finished, print: `DONE: defensibility audit -> <branch>`.
