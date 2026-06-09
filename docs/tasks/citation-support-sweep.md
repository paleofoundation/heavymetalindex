# Task: Citation-support sweep (delegated, report-only)

**Who runs this:** a cheaper model (Sonnet is ideal) in Obsidian or any session pointed at this repo.

**Why it exists:** `tools/audit-claim-provenance.mjs` confirms that a `[[sources/...]]` citation *exists* near every numeric claim in the wiki. Its own header says what it cannot do: "It does not verify that the cited source actually contains the claimed value (that requires PDF reading); it only verifies a citation exists. v2 will add PDF-side verification." The summary currently reports ~5,178 claims at **100% supported** — but that only means 100% have a citation nearby, not that a single one has been checked against its source. This task is that check, done by a reader instead of a regex. It is the single highest-value defensibility check on the wiki: the line a plaintiff's expert or a regulatory-affairs reviewer attacks is "this number rests on the wrong paper, or on no paper that says it."

**Hard boundary — this task NEVER edits any page.** It reads `wiki/` and one CSV, and writes one report file. Do not change any wiki page or source page. Fixes (adding a citation, correcting a number) are decided later by an editing session, because they touch claims and require synthesis judgment (CLAUDE.md Part 2). Your job is to find and report.

---

## Inputs

1. Refresh the audit first: `node tools/audit-claim-provenance.mjs`. This (re)writes `data/evidence/claim-provenance-audit.csv` with columns:
   `type, slug, section, claim, supported, context`
   - `type` is `ingredient` or `product` → the page is `wiki/ingredients/<slug>.md` or `wiki/products/<slug>.md`.
   - `claim` is the numeric value (e.g. `1.3 µg/g`, `300 ppb`, `35–50%`).
   - `context` is the surrounding prose, which contains the governing `[[sources/<key>]]` link.
2. You verify claims against the cited **source page** (`wiki/sources/<key>.md`), which is the wiki's own structured summary of the paper. This is the cheap tier of the check; where the source page itself lacks the value, that is a finding (it routes to a PDF check), not a failure on your part.

## Method, per claim

1. From the row's `context`, extract the `[[sources/<key>]]` wikilink that governs the claim. If the context shows more than one, pick the one closest to the claim; if none is in the context snippet, open the page + section and find the citation nearest the claim.
2. Open `wiki/sources/<key>.md` and decide whether it supports the claimed value, assigning one verdict:
   - **supported** — the source page states the value, a range containing it, or clearly implies it (after reasonable unit conversion).
   - **mismatch** — the source page gives a clearly different value for the same analyte/matrix (e.g. claim says 300 ppb, source says 30 ppb).
   - **not-in-source** — the source page does not contain this value/analyte/matrix at all. Could be a miscited link, or the value lives only in the PDF. Flag for a PDF-side check; do not assume it is wrong.
   - **wrong-source** — the cited source is about a different commodity/analyte entirely and cannot support the claim.

## Judgment — what is NOT a finding

- **Unit conversions and rounding** are fine: `1.3 µg/g` = `1300 ppb`; `0.05 mg/kg` ≈ `50 ppb`; "about 40 ppb" supporting a cited `41.6`. Do not flag these.
- **Ranges**: a source reporting "typical 5–80 mg/kg" supports a cited "30 mg/kg." A synthesis value (mean/median/p95) is supported if the source's distribution plainly contains it.
- **Aggregated/synthesis claims** that cite several sources: check the nearest/most-specific cited source; if it plausibly contributes, mark supported.
- Only mark **mismatch** when the source clearly says something different, and **not-in-source** when the value genuinely is not on the source page. When uncertain between supported and not-in-source, choose not-in-source with a short note — the editor triages.

## Bounded run

Process ~30–40 claims per run, or all claims for a handful of pages (whichever is the cleaner stopping point). Record where you stopped so the next run resumes after it. With ~5,178 rows this is a long-running loop; that is expected.

## Output

Write `wiki/lint/<YYYY-MM-DD>-citation-support-sweep.md` (today's date; add a `-2`, `-3` suffix if a file already exists for today). Frontmatter:

```markdown
---
op: lint
check: citation-support-sweep
date: <YYYY-MM-DD>
model: <the model you are>
claims_checked: <n>
claims_remaining: <approx>
stopped_at: <slug + section of the last claim checked>
---
```

Body: a one-line count summary (`supported N · mismatch N · not-in-source N · wrong-source N. Report-only; no pages edited.`), then findings tables. **Only list the non-supported verdicts** (mismatch, not-in-source, wrong-source) — do not enumerate the supported ones, just count them. Priority: **P1** = mismatch / wrong-source (the number contradicts its source, or the wrong paper is cited — the defensibility hits). **P2** = not-in-source (unverifiable from the source page; needs a PDF check). Columns:

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|

Use clickable relative links for Page and Cited source. In the Note, quote the source's actual value when it is a mismatch.

When done, print a two-line summary: the four counts, and the slug+section to resume after. Do not commit; leave the report uncommitted for the editing session.
