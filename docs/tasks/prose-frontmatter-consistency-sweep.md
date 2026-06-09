# Task: Prose-vs-frontmatter consistency sweep (delegated, report-only)

**Who runs this:** a cheaper model (Sonnet is ideal) in Obsidian or any session pointed at this repo.

**Why it exists:** ingredient and metal pages carry two parallel representations of the same facts — the machine-readable `contamination_profile` in frontmatter (per-analyte `typical_ppb`, `p95_ppb`, `status`, `confidence`, `n_studies`) and the human-readable prose plus the body "Heavy metal contamination profile" table. As the corpus scales and synthesis passes update one without the other, they drift apart: a resynthesis bumps the numbers but the prose still says "low," or the body table goes stale against the frontmatter it was generated from. No script can judge whether a sentence agrees with a number; a reader can.

**Hard boundary — this task NEVER edits any page.** Read and report only. Fixing a drift means deciding which side is right (the prose or the number), which is synthesis judgment under CLAUDE.md Part 2 and Part 9. Find and report.

---

## What to scan

`wiki/ingredients/` and `wiki/metals/` pages with a **populated** `contamination_profile` (at least one analyte sub-block at `status: populated` or `in_progress`). Process ~20 per run. Skip stubs/scaffolds (`provisional_scaffold: true`, `literature_scope: thin`, all-`pending` profiles) — there is nothing populated to check against.

## What you are comparing

For each page, read three things and check them against each other:
1. The frontmatter `contamination_profile` block (the per-analyte numbers, `status`, `confidence`, `n_studies`).
2. The body "Heavy metal contamination profile" table.
3. The narrative prose (overview, "ranges by source/region", per-metal discussion).

## The four checks

1. **Table ≠ frontmatter (P1):** the body table is generated from the frontmatter, so its values should match. A divergence means the table is stale against a frontmatter update (or vice versa). Report the analyte and both values.
2. **Prose magnitude contradicts the number (P1):** the prose characterizes an analyte in a direction the number contradicts — e.g. frontmatter Cd `typical_ppb: [200, 3000]` but the prose calls cadmium "minimal/low," or prose says "among the highest" for an analyte the numbers put near zero. (This is a contradiction check, not the soft-qualifier check — that belongs to the prose-style sweep. Flag only clear disagreements with the data.)
3. **Confidence/status vs hedging (P2):** frontmatter `confidence: high` / `n_studies: 60` while the prose says "data are sparse / few studies," or the reverse (`confidence: low` while prose asserts a firm conclusion).
4. **Analyte-coverage mismatch (P3):** an analyte discussed substantively in prose but `pending` / `data gap` in frontmatter, or a `populated` analyte with a real number that the prose never mentions.

## Judgment — what is NOT a finding

- `typical_ppb: [0, 0]` with high `n_studies` usually encodes "measured, predominantly below detection," not "no data." If the prose says "consistently low / largely below the limit of detection," that *agrees*; do not flag it. Only flag if the prose claims the analyte is high or a major concern.
- Rounding and range-vs-point differences between table and frontmatter are fine; flag only genuine value divergence.
- Do not flag stylistic softness or missing anchors — that is the prose-style sweep's job. This sweep is strictly about prose/data *agreement*.

## Output

Write `wiki/lint/<YYYY-MM-DD>-prose-frontmatter-consistency-sweep.md` (today's date; `-2` suffix if it exists). Frontmatter: `op: lint`, `check: prose-frontmatter-consistency-sweep`, `date`, `model`, `pages_checked`, `pages_remaining`, `stopped_at`. Body: count line (`table-mismatch N · prose-contradiction N · confidence-mismatch N · coverage-mismatch N. Report-only.`), then a findings table. Priority: **P1** = table≠frontmatter or prose-magnitude contradiction; **P2** = confidence/status mismatch; **P3** = coverage mismatch. Columns:

| Page | Analyte | Frontmatter value | Prose / table claim | Mismatch type | Which looks stale |
|---|---|---|---|---|---|

Use a clickable relative link for Page. In "Which looks stale," give your read (prose or numbers) but do not decide the fix.

When done, print a two-line summary: the four counts, and the page to resume after. Do not commit; leave the report uncommitted for the editing session.
