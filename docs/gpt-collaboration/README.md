---
type: doc
purpose: GPT-5.5 (fast mode) collaboration pipeline — source-page first drafts
audience: [karen, claude-code, cowork]
updated: 2026-05-17
---

# GPT-5.5 fast mode — source-page draft pipeline

GPT-5.5 fast mode runs in parallel with Claude Code, Cowork, and Codex. Its lane is narrow: it produces source-page first drafts from Marker-converted markdown. It does not write into the wiki, does not make synthesis decisions, does not touch routing, does not propose thresholds.

## Why this exists

The "second pair of AI eyes" requirement is fresh context, not specifically GPT. The autonomous default uses Claude subagents via the Agent tool (no shared context with the main session = fresh eyes). The ChatGPT 5.5 path remains available as a manual-fallback for when Karen wants to use her ChatGPT subscription specifically, escalate a particularly high-stakes page to cross-vendor review, or run a sanity check on the subagent's verdicts.

Two collaboration roles, each playing to asymmetric strengths:

**Role 1 — Drafter (for the Marker corpus).** The 23,260-paper Marker-converted corpus is too large to ingest with Claude Code alone. The reading-and-transcription pass is mechanical, judgment-light, and well-suited to a fast model. ChatGPT 5.5 fast mode drafts; Claude verifies and routes. See [system-prompt.md](docs/gpt-collaboration/system-prompt.md) and [verification-checklist.md](docs/gpt-collaboration/verification-checklist.md).

**Role 2 — Auditor (for any Claude-produced source page).** Claude Code makes mistakes during ingest — transposed values, invented slugs, missed brand-firewall violations, missed duplicates. A fresh-context auditor catches these because it has no anchoring bias toward the page Claude just wrote. The auditor reads the wiki source page and the original source (PDF or markdown) and runs five specific checks: numerical fidelity, slug vocabulary, speciation/methods accuracy, Part 12 brand firewall, Part 2 wiki/HMTc firewall. Output is a structured PROMOTE/REVISE/QUARANTINE verdict that Claude (auto) or Karen (manual) acts on. See [audit-prompt.md](docs/gpt-collaboration/audit-prompt.md).

  - **Default (autonomous, Karen out of loop):** the `ingest-next-manual-fetch-pdf` skill spawns a Claude subagent via the Agent tool after each ingest commit. The subagent reads the page + source, runs the five checks, returns the structured report. Main Claude verifies findings independently, applies real ones, pushes back on false positives, commits, updates `data/evidence/audit-queue.csv`. No Karen interaction needed.
  - **Manual fallback (Karen in loop, ChatGPT 5.5):** `./tools/gpt/build-audit-packet.sh <cite-key>` builds a paste-ready packet. Karen pastes into ChatGPT 5.5 fast mode. ChatGPT returns audit. Karen runs `/apply-gpt-audit <cite-key>` in a Claude Code session and pastes the audit; Claude applies findings the same way. Use when escalating beyond the subagent or sanity-checking subagent verdicts.

The Cochrane-quality bar for the hand-curated manual-fetch PDFs (335 total) is met by Claude doing the ingest (judgment-heavy) AND the audit subagent verifying the output (fresh-eyes). The volume bar for the Marker corpus is met by ChatGPT 5.5 drafting (speed) AND Claude verifying (judgment).

## Pipeline

Two input modes, same output pipeline:

**Mode A — Marker-converted corpus (FM_ folders).** Karen pastes the contents of a `raw/markdown/FM_XXXXXXX/FM_XXXXXXX.md` file into ChatGPT. Handle is the existing FM_id.

**Mode B — Manual-fetch corpus (raw PDFs, never Marker-converted).** Karen uploads a PDF from one of three folders and tells GPT which folder. ChatGPT 5.5 reads the PDF natively. Handle is `MFK_<slug>` / `MR_<slug>` / `PCMF_<slug>` derived from the filename.

The three manual-fetch folders are:
- `raw/Manual Fetch Kimi /` (277 PDFs, includes subfolders 01_Fruits through 08_Nuts_Seeds_Legumes_and_Misc, Children Personal Care Papers, condiment_papers) → handle prefix `MFK_`
- `raw/Manual Resourcing/` (1 PDF currently) → handle prefix `MR_`
- `raw/Papers Cube Manual Fetch/` (57 PDFs) → handle prefix `PCMF_`

Pipeline steps (both modes):

1. **Karen** feeds input to GPT-5.5 (paste markdown for Mode A, upload PDF for Mode B).
2. **GPT-5.5** produces a draft source page following [system-prompt.md](docs/gpt-collaboration/system-prompt.md) and the slug vocabulary in [taxonomy-snapshot.md](docs/gpt-collaboration/taxonomy-snapshot.md). Output goes to `raw/gpt-drafts/<handle>.md`.
3. **Claude Code** runs the [verification-checklist.md](docs/gpt-collaboration/verification-checklist.md) against each draft: fix frontmatter against the live taxonomy, verify numbers against the source (markdown or PDF), advance to `wiki/sources/<cite-key>.md`, commit.
4. **Routing audit** (Part 5b) fans the new source page out to product/ingredient/metal/regulation pages automatically.

## Files in this folder

- [system-prompt.md](docs/gpt-collaboration/system-prompt.md) — the instructions to paste into the ChatGPT project's custom instructions (or at the top of every conversation). Tells GPT-5.5 to ignore stale context, use current canonical paths, and produce the exact source-page template. Used when GPT is acting as a **drafter** for the 23,260-paper Marker corpus.
- [taxonomy-snapshot.md](docs/gpt-collaboration/taxonomy-snapshot.md) — flat list of current ingredient, product, metal, and regulation slugs. Regenerated by `tools/gpt/refresh-taxonomy-snapshot.sh` (to be added). GPT-5.5 picks slugs from this list only; it does not invent new ones.
- [verification-checklist.md](docs/gpt-collaboration/verification-checklist.md) — what a Claude Code (or Cowork) session does when promoting a GPT draft to a wiki source page.
- [audit-prompt.md](docs/gpt-collaboration/audit-prompt.md) — the QA audit prompt to paste into a ChatGPT 5.5 conversation when GPT is acting as a **second-pass auditor** on a Claude-produced wiki source page. Runs five specific checks (numerical fidelity, slug vocabulary, speciation/methods, brand firewall, wiki/HMTc firewall) and produces a structured PROMOTE/REVISE/QUARANTINE verdict. Use after Claude commits any new or merge-enhanced source page where Cochrane-quality matters (Cat 1 infant foods, Cat 2 personal care, any HMTc-anchor paper).

## Hard limits on GPT-5.5's lane

GPT-5.5 fast mode never produces:

- Synthesis values (ingredient `contamination_profile` updates — Part 9 work)
- Consumer-audience translations (Part 7 — highest-risk interpretive work)
- HMT&C threshold rationale or workbench math (Part 19)
- Mitigation/Levers sections on ingredient or product pages (brand-legal-actionable surface)
- New ingredient, product, or regulation pages (Part 10 — Karen approves)
- Any edit inside `wiki/`

If a GPT draft contains any of these, the verification pass deletes that content before promoting; it is not corrected in place.
