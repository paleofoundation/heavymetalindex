# Task: Prose-style & consumer-language sweep (delegated, report-only)

**Who runs this:** a cheaper model (Sonnet is ideal) in Obsidian or any session pointed at this repo. It is deliberately scoped to pattern-matching with light reading judgment, which is what a cheap model does well and cheaply.

**Why it exists:** the writing-style checks in [[docs/lint]] need language judgment, not a structural script, so there is no `.mjs` audit for them. Consumer audience is a separate structural check (`tools/audit-page-structure.mjs`). This task does not ask for a consumer or family section. That register belongs to Metallopathy. This task feeds the same triage flow as every other lint pass.

**Hard boundary — this task NEVER edits wiki content.** It only reads and writes one report file. Do not change any page in `wiki/`. The reason is non-negotiable: the wiki reports what the literature supports in a precise epistemic register (see CLAUDE.md Part 2). A "tidy-up" that softens or strengthens a claim destroys the wiki's defensibility. Style fixes are applied later by an editing-capable session that verifies meaning is unchanged. Your job is to *find and report*, not to fix.

---

## What to scan

Narrative content pages under `wiki/` where the authoritative-reference register matters:

- `wiki/ingredients/`, `wiki/metals/`, `wiki/products/`, `wiki/regulations/`, `wiki/testing/`, `wiki/synthesis/`, `wiki/microbiome/`, and the top-level narrative pages (`wiki/overview.md`, `wiki/methodology.md`, `wiki/synthesis.md`, etc.).

Skip:

- Anything outside `wiki/` (`docs/`, `data/`, `raw/`, `tools/` are internal — bullets and bold are fine there).
- YAML frontmatter (the block between the opening and closing `---`). Style rules apply to prose, not metadata.
- `wiki/sources/` pages (these are source-summary records, lower register priority — only sweep them if explicitly asked).
- Stub / scaffold pages: any page whose frontmatter has `provisional_scaffold: true`, `literature_scope: thin`, or whose body is effectively empty. They are placeholders, not finished prose.
- Tables, code blocks, and citation/reference lines.

**Bounded run:** process at most ~25 pages per run (or one subdirectory). Write the report, note where you stopped, and stop. Do not try to sweep the whole wiki in one pass.

## How to find candidates cheaply

Pre-filter with grep, then read only the surrounding lines of each hit — you do not need to deep-read every page.

- Em dashes: search for the `—` character (U+2014).
- Inline bold: search for `**` inside prose lines (ignore heading lines and lines that are a definition label like `**Term.**` at the start).
- Bullets in prose: lines beginning with `- ` or `* ` or `1. `.
- Consumer qualifiers: case-insensitive search for `safe`, `dangerous`, `harmful`, `trace`, `tiny`, `small amount`, `high level`, `low level`, `significant`, `negligible`, `minimal`, `toxic` used to characterize risk/magnitude to a reader.

Then read the surrounding sentence(s) to apply the judgment rules below before recording a finding.

---

## The four checks (with the judgment that separates a real hit from a false positive)

Canonical rules: [[docs/writing-style]] and [[docs/conventions]]. Summarized here so this task is self-contained.

### 1. Em dashes in new prose  (priority P3)

Flag `—` in running prose. **Not a violation** when the em dash is inside a direct quote or inside citation/reference text — those are reproduced verbatim and left alone. Suggested fix: rewrite with a comma, semicolon, period, or parentheses.

### 2. Inline bold for emphasis  (priority P3)

Flag bolded words inside running prose used for emphasis. **Not a violation:** bold on a heading, or bold marking the start of an explicit definition label (e.g. a glossary entry that opens `**Bioaccessibility.**`). The test: is the bold emphasizing a word inside a sentence to make it pop? That is the marketing-copy register the wiki avoids. Suggested fix: remove the bold; if the emphasis is load-bearing, rewrite the sentence so the structure carries it.

### 3. Bullets where prose is required  (priority P2)

Flag bullet lists used for: study summaries, mechanism explanations, synthesis paragraphs, or implications sections. Study results belong in the evidence table in [[docs/page-structure]]. These narrative sections must be prose. The reasoning needs connective tissue. **Not a violation** (legitimate bullets): enumerated regulatory values/thresholds across jurisdictions, stepwise procedures (test methods, sampling, mitigation steps), a page's table-of-contents, parallel lists of discrete items (taxa, ingredients in a category, vulnerable populations), and audience-tag metadata. Suggested fix: note that the list should become a prose paragraph; do not rewrite it yourself.

### 4. Undefined qualifiers  (priority P1 for safe/dangerous, P2 otherwise)

This is the highest-value check. Flag a qualifier that characterizes *how risky, safe, or contaminated* something is **for a reader**, when no quantitative anchor sits near it. An anchor is a number with a unit (ppb, µg/kg), a dose, a named population (infants, pregnant women), or a consumption frequency. Examples:

- Flag: "rice is generally safe to eat" (no dose, population, or frequency).
- Flag: "only trace amounts were found" (no number).
- Do **not** flag: "below the FDA action level of 100 ppb, which is considered safe for the general adult population at typical consumption" (anchored by value + population).

**Avoid false positives:** skip technical/method usages where the word is not a risk characterization: "statistically significant," "high-performance liquid chromatography," "low detection limit." These are not the target. The target is reader-facing magnitude language without a number behind it. Heavy Metal Index does not write consumer or family sections. Do not report the absence of one as a gap, and do not propose adding one.

---

## Output

Write one file: `wiki/lint/<YYYY-MM-DD>-prose-style-sweep.md` (use today's date). Format:

```markdown
---
op: lint
check: prose-style-sweep
date: <YYYY-MM-DD>
model: <the model you are>
pages_scanned: <n>
pages_remaining: <n or "none">
stopped_at: <last page processed, so the next run resumes after it>
---

# Prose-style & consumer-language sweep — <date>

Counts: P1 <n> · P2 <n> · P3 <n>. Report-only; no pages were edited.

## P1 — safe/dangerous without a quantitative anchor
| Page | Line | Offending text | Why | Suggested fix | Claim-adjacent? |
|---|---|---|---|---|---|
| [ingredients/rice.md](../ingredients/rice.md) | 42 | "...generally safe to eat..." | qualifier 'safe' with no dose/population/frequency | anchor to a value + population, or remove | ⚠ yes — verify meaning unchanged |

## P2 — bullets-in-prose & other qualifiers
(same columns)

## P3 — em dashes & inline bold
(same columns)
```

Rules for the report:

- One row per finding. Always include the page (as a clickable relative markdown link), the line number, and the exact offending substring.
- The **Suggested fix is a suggestion only.** Phrase it as guidance for the editor, not a finished rewrite — especially for qualifier and bullet findings, where the right fix depends on the source the claim rests on.
- **Claim-adjacent column:** mark ⚠ for any finding where changing the text could alter a factual or numerical claim (most qualifier findings, any bullet that summarizes study results). This tells the applying editor to verify the meaning is unchanged before touching it. Pure-mechanical findings (an em dash between two clauses, bold on a stray word) can be marked "no."
- If you are unsure whether something is a real violation, record it with a short note in the "Why" column rather than dropping it. The editor triages; you surface.

When done, print a two-line summary to the conversation: counts by priority, and which page to resume after on the next run. Do not commit; leave the report uncommitted for Karen or the editing session to review.
