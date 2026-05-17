---
name: ingest-next-manual-fetch-pdf
description: Process the next un-ingested or possibly-defective manual-fetch PDF from raw/Manual Fetch Kimi /, raw/Manual Resourcing/, or raw/Papers Cube Manual Fetch/ into a properly-ingested wiki source page following the Mode B merge-enhance workflow in docs/gpt-collaboration/verification-checklist.md. Bounded, stops on conditions that require Karen's input. Use when Karen runs `/ingest-next-manual-fetch-pdf folder=<folder-name>` or via `/loop /ingest-next-manual-fetch-pdf folder=<folder-name>`.
version: 1.0.0
---

# ingest-next-manual-fetch-pdf

Processes manual-fetch PDFs into wiki source pages with Cochrane-quality discipline. Designed to be invoked directly or wrapped in `/loop` for autonomous progress through a folder. Always commits per PDF. Stops cleanly on conditions that require Karen's review.

## Arguments

- `folder=<name>` (required): folder name within the three manual-fetch parent folders. Examples:
  - `06_Infant_Foods_Formula` (under `raw/Manual Fetch Kimi /`)
  - `Children Personal Care Papers` (under `raw/Manual Fetch Kimi /`)
  - `condiment_papers` (under `raw/Manual Fetch Kimi /`)
  - `Papers Cube Manual Fetch` (the parent folder itself; only valid for PCMF)
  - `Manual Resourcing` (the parent folder itself; only one PDF)
- `n=<integer>` (optional, default 3): maximum number of PDFs to process in this invocation. The skill stops after N successful ingests OR when a stop condition fires, whichever comes first.

## What this skill does, per PDF

1. **Find the next candidate PDF.** List PDFs in the target folder. For each, check whether a wiki source page already exists by running the three identity checks from `docs/gpt-collaboration/verification-checklist.md` step 1 (DOI grep primary, raw_handle grep secondary, cite-key grep tertiary). A PDF is "next" if:
   - It has no existing wiki source page (NEW), OR
   - It has an existing page that was last `updated:` before 2026-05-14 (likely pre-current-schema and a candidate for merge-enhance), OR
   - It has an existing page that the most recent routing audit reports as malformed (in `data/evidence/routing_malformed.csv`).

   Skip PDFs whose existing pages were updated on or after 2026-05-14 and are not in malformed. Those are presumed clean from a recent pass.

2. **Read the PDF.** Use the Read tool with the PDF path. For PDFs over 10 pages, use the `pages` parameter to read in 5-10 page chunks. Always read the abstract page, the methods page, every results/tables page, the discussion, and the references — not just the first page. The Key numbers section needs exact figures from data tables, so tables MUST be read.

3. **NEW path: write a fresh source page.**
   - Derive cite_key per CLAUDE.md Part 5 conventions.
   - Write to `wiki/sources/<cite-key>.md` using the Part 6 source-page template.
   - Frontmatter must use only slugs from the current wiki taxonomy (cross-reference `wiki/ingredients/`, `wiki/products/`, `wiki/metals/`, `wiki/regulations/`).
   - Body must follow Part 6 sections (un-headed opening prose; Key numbers; Methods (brief); Implications; Wiki pages this source may touch; Verification notes if needed).
   - Apply all firewall rules from `docs/gpt-collaboration/verification-checklist.md` step 4 (wiki/HMTc firewall + brand firewall).

4. **EXISTING path: merge-enhance.**
   - Read the existing wiki/sources page in full.
   - Identify every defect: invented slugs, transposed values, brand-by-brand listings (Part 12), invented method detail, missing tables, thin Key numbers, legacy headings (`## Summary`, `## Wiki pages updated on ingest`), missing exposure/EDI numbers, missing speciation flags, invalid matrices vocabulary.
   - Verify which version is correct on every numerical disagreement by re-reading the source PDF.
   - Write the merged version. Preserve cite_key, raw_handle, raw_path, license, access_url, raw_sha256, near_duplicates from the existing page. Set `updated` to today.
   - Add a `## Verification notes` section documenting what was enhanced and why.

5. **Run the routing audit.** Execute `npm run evidence:source-routes`. Confirm three things:
   - Exit code 0
   - This source is NOT in `data/evidence/routing_unresolved.csv`
   - This source is NOT in `data/evidence/routing_malformed.csv` (or, if it was malformed before, it's no longer)

6. **Commit per PDF.** Use a descriptive commit message in this form:

   ```
   ingest: <cite-key> [enhanced|fresh] from <folder-prefix>/<folder>

   <list of changes>

   Routing: <N> product-page rows generated.

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
   ```

   Use `enhanced` for merge-enhance ingests, `fresh` for new source pages.

7. **Append to audit queue.** After the commit lands, append a row to `data/evidence/audit-queue.csv` with `cite_key,source_folder,handle,commit_hash,timestamp,status`. Status starts as `pending`. The audit queue is consumed by GPT-5.5 fast mode running the audit prompt in `docs/gpt-collaboration/audit-prompt.md`; Karen feeds queue entries to GPT, GPT returns audits, Karen pastes audits back to Claude for application. After an audit is applied (or PROMOTE'd as-is), the queue row's status flips to `audited-promote`, `audited-revised`, or `audited-quarantine`. If the audit-queue.csv file does not exist, create it with the header row.

## Stop conditions (stop immediately, write a stop-report, do not advance to next PDF)

Stop and write a `wiki/batch-reports/manual-fetch-<folder>-stop-<YYYY-MM-DD-HHMM>.md` report when ANY of these fire:

- **Processed N PDFs successfully.** Normal stop. Report lists what was done.
- **New ingredient/product/regulation slug needed.** A PDF requires a slug not in the current taxonomy. Per Part 10: ingredient slugs at frequency ≥2 can auto-stub but products always require Karen's Step 0 Lock. Default to surfacing rather than creating. Report names the proposed slug(s), the PDF that needs it, and the suggested category.
- **Paper-internal contradiction or data-integrity issue.** A PDF contains values that contradict each other (e.g., Results paragraph vs Table disagreement that's not the obvious mirroring pattern) and the right answer is unclear. Report names the contradiction and the PDFs.
- **True duplicate conflict.** DOI grep returns a hit but the existing page has a different DOI or different paper. Report names both pages and the conflict.
- **Routing audit fails.** Audit exits non-zero, or introduces new unresolved/malformed entries for this source. Report names the failure.
- **No candidates left in folder.** Folder is exhausted (all PDFs have post-2026-05-14 clean pages). Normal completion stop. Report names how many PDFs were skipped as already-clean and which (for Karen to spot-check).
- **Out of context budget signal.** If approaching the practical context window for read-heavy work (rough heuristic: 60%+ context used and a large PDF is next), stop cleanly rather than rushing. Report names this as the reason.

## What this skill does NOT do

- Does NOT create new ingredient pages (auto-stub script handles ingredients ≥ freq 2; everything else is Karen's call per Part 10).
- Does NOT create new product pages (always Karen's Step 0 Lock).
- Does NOT run synthesis (Part 9 is a separate workflow; this skill only writes source pages, then the routing audit picks them up and synthesis triggers fire downstream).
- Does NOT touch `wiki/products/*.md`, `wiki/ingredients/*.md`, or any other downstream page directly.
- Does NOT edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` marker blocks anywhere (those are generator-owned).
- Does NOT modify `data/evidence/product_source_routing_audit.csv` by hand (only via `npm run evidence:source-routes`).
- Does NOT push to remote.

## At folder-close

When stop condition "No candidates left in folder" fires, write a folder-close batch report at `wiki/batch-reports/manual-fetch-<folder>-complete.md` covering:

- Cite-keys ingested fresh
- Cite-keys merge-enhanced (with brief summary of defects fixed per page)
- Cite-keys skipped as already-clean (with their last `updated:` date)
- New-page proposals surfaced for Karen's review
- Synthesis triggers fired (per Part 9)
- Folder-aggregate routing changes (e.g., "+47 routing rows generated across folder")

## Operator notes

This skill is invoked manually as `/ingest-next-manual-fetch-pdf folder=<name>` or autonomously as `/loop /ingest-next-manual-fetch-pdf folder=<name>`. In the `/loop` case, default `n=3` per cycle keeps work bounded; the loop fires the skill repeatedly until a stop condition that isn't "processed N" fires, at which point the loop should be paused for Karen's review.

Quality bar: this skill exists to support Karen's Cochrane-quality standard for the hand-curated manual-fetch corpus. Speed is not the metric; defensibility is. If in doubt about whether to apply a change, stop and report rather than guessing.
