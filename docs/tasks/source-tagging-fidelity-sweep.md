# Task: Source-tagging fidelity sweep (delegated, report-only)

**Who runs this:** a cheaper model (Sonnet is ideal) in Obsidian or any session pointed at this repo.

**Why it exists:** the routing layer (CLAUDE.md Part 5b) fans each source out to the product, ingredient, metal, and regulation pages it belongs on, using the source page's frontmatter arrays as its only input. `tools/audit-routing-discipline.mjs` catches *structural* gaps (e.g. `products: []` on a food paper) but cannot tell that a paper which measured cadmium in soy-based infant formula forgot to list `soy` or `infant-formula`. Mis-tagged frontmatter breaks the fan-out silently — the source never reaches the pages it should, and no later session re-derives it. Catching that requires reading the abstract against the tags, which is exactly what a script can't do and a reader can.

**Hard boundary — this task NEVER edits frontmatter or any page.** It reads `wiki/sources/` and writes one report. Correcting frontmatter re-triggers routing and the wiki-edit audit barrier, so fixes are applied by an editing session, not here. Find and report.

---

## What to scan

`wiki/sources/*.md` pages that have a real abstract or summary in the body. Process ~25 per run. Pick a slice and stick to it (alphabetical, or most-recently-modified first — record which so the next run continues).

Skip pages whose body is effectively empty (frontmatter-only stubs) — there is nothing to check the tags against.

## The frontmatter arrays you are auditing

`products`, `ingredients`, `matrices`, `metals`, `jurisdictions` (plus `source_type`, `evidence_tier` for completeness). Read the title, abstract, and any results prose, then check each array against what the paper actually studied.

## The three checks

1. **Missing tag (highest value):** the paper clearly measures an analyte, matrix, ingredient, or product that is absent from the corresponding array. The headline case — a paper's *primary* analyte or commodity missing from `metals`/`matrices` — is a P1, because the source will not route to that page at all.
2. **Over-specific scope:** per Part 5b, broad scopes belong in frontmatter as broad. A paper about infant formula generally should say `matrices: [infant-formula]`, not `infant-formula-powder-non-soy`; the routing layer fans broad → specific. Flag frontmatter that pre-decides a fan-out by over-specifying.
3. **Over-tagging:** an array lists a product/ingredient/metal the paper does not actually study (e.g. a metal mentioned only in the literature-review intro, not measured). Lower priority, but it pollutes routing with false positives.

## Judgment — what is NOT a finding

- Tags may be reasonable inferences, not verbatim matches. A paper on "rice" legitimately carries `ingredients: [rice]` even if it says "polished white rice." Do not demand exact wording.
- Do not flag a tag just because the abstract is terse — judge against the whole body. If the body genuinely does not support a tag, then flag it.
- `source_type` / `evidence_tier` are editorial; only flag them if they are obviously wrong (e.g. a primary study tagged as a regulatory document).

## Output

Write `wiki/lint/<YYYY-MM-DD>-source-tagging-fidelity-sweep.md` (today's date; `-2` suffix if it exists). Frontmatter: `op: lint`, `check: source-tagging-fidelity-sweep`, `date`, `model`, `sources_checked`, `sources_remaining`, `stopped_at`. Body: count line (`missing N · over-specific N · over-tagged N. Report-only.`), then a findings table. Priority: **P1** = a measured headline analyte/matrix/commodity missing entirely (breaks routing); **P2** = over-specific scope or a missing secondary tag; **P3** = over-tagging / minor. Columns:

| Source | Field | Issue | Evidence from abstract | Suggested tag |
|---|---|---|---|---|

Use a clickable relative link for Source. Quote the phrase from the abstract that supports the finding in "Evidence."

When done, print a two-line summary: the three counts, and the source to resume after. Do not commit; leave the report uncommitted for the editing session.
