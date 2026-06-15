---
name: ingest-next-manual-fetch-pdf
description: Autonomously ingest the next un-ingested or possibly-defective manual-fetch PDF from raw/Manual Fetch Kimi /, raw/Manual Resourcing/, raw/Papers Cube Manual Fetch/, or raw/Manual Fetch Discovery/ into a properly-ingested wiki source page, then auto-audit via a fresh-context subagent and apply audit findings. Bounded, stops on conditions that require Karen's input. Use when Karen runs `/ingest-next-manual-fetch-pdf folder=<folder-name>` or via `/loop /ingest-next-manual-fetch-pdf folder=<folder-name>`. Karen is out of the loop — ingest, audit, and audit-application all happen autonomously in one skill execution per PDF.
version: 2.0.0
---

# ingest-next-manual-fetch-pdf

Autonomous Cochrane-quality ingest pipeline. Each per-PDF cycle does ingest + audit + audit-application + commit, all without Karen in the loop. Designed to be invoked directly or wrapped in `/loop` for sustained autonomous progress through a folder.

The fresh-context audit step uses the Agent tool with `subagent_type: general-purpose`. The subagent has no shared context with the main session, satisfying the "second pair of eyes" requirement that surfaced the failure modes documented in `docs/gpt-collaboration/audit-prompt.md` (transposed values, invented slugs, brand-firewall violations, invented method detail).

## Arguments

- `folder=<name>` (required): folder name within the four manual-fetch parent folders. Examples:
  - `06_Infant_Foods_Formula` (under `raw/Manual Fetch Kimi /`)
  - `Children Personal Care Papers` (under `raw/Manual Fetch Kimi /`)
  - `condiment_papers` (under `raw/Manual Fetch Kimi /`)
  - `Papers Cube Manual Fetch` (the parent folder itself; only valid for PCMF)
  - `Manual Resourcing` (the parent folder itself; only one PDF)
  - `Manual Fetch Discovery` (the parent folder itself; PDFs auto-fetched by the `discover` skill)
- `n=<integer>` (optional, default 3): maximum number of PDFs to process in this invocation.
- `skip_audit=true` (optional, default false): skip the auto-audit step. Use only when bypassing audit for explicit reasons (Karen testing the ingest logic, batch-recovering from an audit-system failure, etc.).

## Per-PDF cycle

For each PDF up to N:

### Phase 1: Ingest

1. **Find the next candidate PDF.** List PDFs in the target folder. For each, check whether a wiki source page already exists via three identity checks (DOI primary, raw_handle secondary, cite-key tertiary; see `docs/gpt-collaboration/verification-checklist.md`). A PDF is "next" if:
   - It has no existing wiki source page (NEW path), OR
   - It has an existing page that was last `updated:` before 2026-05-14 (likely pre-current-schema; merge-enhance path), OR
   - It has an existing page that the most recent routing audit reports as malformed.

   Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed.

2. **Read the PDF.** Use the Read tool. For PDFs over 10 pages, read in 5-10 page chunks via the `pages` parameter. Always read: abstract, methods, all results/tables pages, discussion, references. Tables are mandatory — Key numbers needs exact figures.

3. **NEW path: write a fresh source page** at `wiki/sources/<cite-key>.md` using the Part 6 template. Frontmatter slugs only from current taxonomy. Body follows Part 6 sections. Apply all firewall rules from `docs/gpt-collaboration/verification-checklist.md`.

   **Cite-key derivation (load-bearing — defensibility):** the `<cite-key>` is `<first-author-surname><year>-<short-topic-slug>`, e.g. `signes-pastor2018-infant-arsenic-solid-food`. The surname comes from the paper's actual first author (read the author block / corresponding-author line; confirm against the DOI when present). For an institutional report with no personal author, use the issuing organization (`fda`, `efsa`, `atsdr`, `who`, `fao`, `epa`, `echa`...) + year. NEVER derive the leading token from a title word, a section header (`abstract`, `introduction`, `keywords`, `methods`, `results`, `conclusion`), an analyte name (`arsenic`, `cadmium`, `lead`, `mercury`), a journal/publisher word, or the literal `unknown` — those are the OCR-fragment artifacts that created the duplicate-DOI cluster class (see `tools/lib/cite-key-validity.mjs`, which the ingest gate enforces). If you genuinely cannot resolve the real first author from the paper text or its DOI, STOP (step "new-page proposal / unresolved") rather than mint a placeholder — a fabricated author key is worse than a deferred paper.

4. **EXISTING path: merge-enhance.** Read the existing page in full. Identify defects (invented slugs, transposed values, brand-by-brand listings, invented method detail, missing tables, thin Key numbers, legacy headings, missing exposure numbers, missing speciation flags, invalid matrices). Verify which version is correct by re-reading the source. Write the merged version preserving cite_key, raw_handle, raw_path, license, access_url, raw_sha256, near_duplicates. Set `updated` to today. Add `## Verification notes` documenting enhancement.

5. **Run the routing audit:** `npm run evidence:source-routes`. Confirm exit 0, source not in `routing_unresolved.csv`, source not in `routing_malformed.csv`.

6. **Commit ingest with descriptive message** in the form:

   ```
   ingest: <cite-key> [enhanced|fresh] from <folder-prefix>/<folder>

   <list of changes>

   Routing: <N> product-page rows generated.

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
   ```

7. **Append to audit queue** at `data/evidence/audit-queue.csv`: `cite_key,source_folder,handle,commit_hash,timestamp,status=pending,audit_verdict=,audit_applied_at=,notes`. Create the file with header if it does not exist.

### Phase 2: Auto-audit (unless skip_audit=true)

8. **Spawn a fresh-context audit subagent** via the Agent tool. Use `subagent_type: general-purpose`. The prompt should be self-contained (the subagent has no shared context with this session). Pass it:
   - The path to the just-committed `wiki/sources/<cite-key>.md`
   - The path to the source evidence (`raw/markdown/<FM>/<FM>.md` for FM_ handles, the PDF path for MFK_/MR_/PCMF_)
   - The path to `docs/gpt-collaboration/audit-prompt.md` (so it can read the full audit instructions)
   - The path to `docs/gpt-collaboration/taxonomy-snapshot.md`
   - Explicit instructions: "Read these four files. Run the five audit checks defined in audit-prompt.md against the wiki source page, using the source evidence and taxonomy snapshot as references. Return ONLY the structured audit report per the OUTPUT FORMAT in audit-prompt.md (Markdown with ✅/⚠️/❌ findings per check and a PROMOTE/REVISE/QUARANTINE verdict). Do not edit any files. Do not run any commands. Read-only audit."

9. **Receive the audit report** as the subagent's return value.

### Phase 3: Apply audit findings

10. **For each ❌ definite-error finding in the audit:**
    - Independently verify the finding by re-reading the source location the audit cites. Quote the source-citation evidence.
    - If verified correct: apply the correction to the wiki page. Add a one-line note to verification notes: "Audit subagent (date) flagged X; verified against source — corrected to Y."
    - If verified wrong (false positive): do NOT change the wiki page on this finding. Add a one-line note: "Audit subagent (date) flagged X; verified against source — finding was a false positive because Y."

11. **For each ⚠️ concern finding:**
    - Verify against the source. Apply if real; document false positives.
    - Use judgment about whether to escalate concerns to fixes vs leave-as-noted.

12. **Run routing audit again** if any changes were applied. Confirm clean.

13. **Commit audit application** with message:

    ```
    audit: <cite-key> [promoted|revised|quarantined]

    Subagent verdict: <PROMOTE|REVISE|QUARANTINE>

    Findings applied:
    - <list with source citations>

    Findings rejected (false positives):
    - <list with disproving citations>

    Routing: <unchanged|N added|N removed>.

    Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
    ```

    Skip this commit entirely if the audit was PROMOTE with no false-positive notes to record (no content changes to commit).

14. **Update audit queue:** edit `data/evidence/audit-queue.csv` for this cite-key:
    - `status` → `audited-promote`, `audited-revised`, or `audited-quarantine`
    - `audit_verdict` → the subagent's verdict
    - `audit_applied_at` → today's ISO date
    - `notes` → append `; <N> findings; <X> applied; <Y> rejected` summary

### Phase 4: Move to next PDF

15. Loop back to step 1 until N is reached or a stop condition fires.

## Stop conditions

Stop immediately and write a stop-report at `wiki/batch-reports/manual-fetch-<folder>-stop-<YYYY-MM-DD-HHMM>.md` when ANY of these fire:

- **Processed N PDFs successfully.** Normal stop.
- **Audit verdict QUARANTINE on three or more consecutive PDFs.** Indicates either (a) the ingest logic is producing systematic errors, or (b) the audit subagent is producing systematic false positives. Either way needs Karen's attention before continuing.
- **New regulation slug needed.** Regulations have hard agency identifiers; surface in stop-report so the regulation page can be created with the correct rule ID/citation, do not guess.
  - Ingredients ≥freq-2 are auto-stubbed by the existing script; freq-1 ingredients are noted in the stop-report.
  - Products that the source declares but that do not yet exist as wiki pages are created as provisional scaffolds via `tools/autonomy/create-provisional-product-scaffold.mjs` and ingest continues. The scaffold carries `hmtc_category: pending_taxonomy_review` and a "Provisional scaffold" caveat; the audit log records what was created and why. This is not a stop condition.
- **Paper-internal contradiction or data-integrity issue** that's not the obvious mirroring pattern.
- **True duplicate conflict.** DOI grep hit but existing page has a different DOI or different paper.
- **Routing audit fails.** Audit exits non-zero or introduces new unresolved/malformed for this source.
- **No candidates left in folder.** Folder is exhausted (all PDFs have post-2026-05-14 clean pages OR all remaining PDFs are post-audit). Normal completion. Write folder-close batch report at `wiki/batch-reports/manual-fetch-<folder>-complete.md`.
- **Out of context budget signal.** If approaching the practical context window (rough heuristic: 60%+ context used), stop cleanly.
- **Agent tool unavailable.** If the audit subagent spawn fails for any reason, stop and surface — the autonomous audit is load-bearing for Cochrane bar.

## What this skill does NOT do

- Does NOT bypass the existing auto-stub script for ingredients ≥freq-2 (that script handles those). Freq-1 ingredients that a source declares but that do not yet exist are created as provisional scaffolds via `tools/autonomy/create-provisional-ingredient-scaffold.mjs` so ingest continues; the audit log captures what was created.
- Does NOT create non-provisional product pages with locked HMTc taxonomy rows (Step 0 Lock is a separate workflow). Provisional product scaffolds with `hmtc_category: pending_taxonomy_review` ARE created automatically when a source declares a product slug that does not yet exist; the audit log captures what was created.
- Does NOT run Part 9 synthesis (separate workflow).
- Does NOT touch `wiki/products/*.md`, `wiki/ingredients/*.md`, or any downstream page directly.
- Does NOT edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` marker blocks (generator-owned).
- Does NOT modify `data/evidence/product_source_routing_audit.csv` by hand.
- Does NOT push to remote.

## What changed in v2.0 vs v1.0

v1.0 of this skill ingested only; audit was a separate Karen-in-loop workflow using ChatGPT 5.5 via `tools/gpt/build-audit-packet.sh` + the `apply-gpt-audit` skill.

v2.0 folds the audit into the same skill execution via a fresh-context Agent subagent. Karen is fully out of the loop. The ChatGPT-based audit path still exists for manual use (when Karen wants to use her ChatGPT subscription specifically, or when she wants to escalate a particularly high-stakes page to a cross-vendor review) but is no longer the default.

## Per-cycle wall time estimate

- Phase 1 (ingest): 3-10 minutes per PDF depending on size and merge complexity
- Phase 2 (audit): 1-3 minutes (subagent runs in parallel context)
- Phase 3 (apply): 1-5 minutes depending on findings
- Phase 4: ~0

Total: 5-18 minutes per PDF. For a 62-PDF folder (Children Personal Care Papers), the full sweep is 5-18 hours of sustained autonomous loop — achievable in 1-2 days of wall time with `/loop` running in the background.
