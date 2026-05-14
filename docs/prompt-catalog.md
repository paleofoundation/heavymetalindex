# HMTc/HMI Prompt Catalog

**Purpose:** A reference list of the prompts and command pipelines that run autonomous and semi-autonomous build work for the Heavy Metal Index wiki and the HMTc certification program. Each entry is graded by efficiency for the goal it serves.

**Who reads this:** Future Claude Code sessions (this file is discoverable from CLAUDE.md), and Karen when she wants to trigger a specific build phase from Warp.

**How it's used:** Each entry below is a self-contained prompt or command pipeline. Run it from the repo root unless otherwise noted. Many can be invoked directly from Warp; the entries marked "via daemon" run automatically on the launchd schedule.

---

## Section A: Autonomous daemon pipeline (runs every 30 minutes)

The launchd-managed `com.paleo.heavymetalindex.daemon` runs `tools/autonomy/daemon-tick.sh` every 30 minutes. The tick executes ten steps in sequence. Halt anytime via `touch ~/.heavymetalindex.STOP`. Resume via `rm ~/.heavymetalindex.STOP`.

### A.1 — Routing audit refresh

**Command:** `node tools/evidence/build-routing-audit.mjs`
**Purpose:** Re-read every `wiki/sources/*.md`, fan out to product/ingredient/metal/regulation pages, emit `data/evidence/product_source_routing_audit.csv` plus the unresolved and malformed sibling logs.
**Efficiency: A.** Mechanical, deterministic, runs in seconds, surfaces all routing breakage in one pass.
**When to invoke manually:** After bulk source-page edits, after adding new product/ingredient pages, before running pooling.

### A.2 — Create missing pages (stubs for unresolved routing)

**Command:** `node tools/autonomy/create-missing-pages.mjs`
**Purpose:** Reads `data/evidence/routing_unresolved.csv`, auto-creates stub pages for every unresolved (target_kind, slug) pair with appropriate CLAUDE.md-Part-6 frontmatter.
**Efficiency: A.** Closes 100+ routing gaps in one run. Stubs are reversible; the synthesis pass fills them as sources accumulate.
**When to invoke manually:** First-time setup, or after a large ingest cycle introduced many new declared targets.

### A.3 — Routing audit refresh (second pass after stub creation)

**Command:** `node tools/evidence/build-routing-audit.mjs`
**Purpose:** Re-evaluate routing after stub creation so newly-resolvable targets land in the audit in the same tick.
**Efficiency: A.** Same as A.1.

### A.4 — Heal gaps

**Command:** `node tools/autonomy/heal-gaps.mjs`
**Purpose:** Auto-fix safe gaps (missing `primary_metals_of_concern`, missing Sources sections, routing typos via Levenshtein ≤ 2). Queue synthesis work.
**Efficiency: A.** Heals ~2-20 gaps per run; surfaces synthesis triggers to the daemon's morning report.
**When to invoke manually:** After major source page edits.

### A.5 — Extract source values

**Command:** `node tools/autonomy/extract-source-values.mjs`
**Purpose:** Parse `## Key numbers` from `wiki/sources/*.md` into structured CSV rows that the pooling engine consumes.
**Efficiency: B+.** Regex-based v0; handles ~88% of source pages cleanly. v1 (LLM-augmented) would close the remaining 12%; deferred.
**When to invoke manually:** After ingest cycle.

### A.6 — Autonomous Marker-corpus ingest

**Command:** `node tools/autonomy/ingest-marker-batch.mjs --max-papers=N --priority=P1,P2 --model=claude-haiku-4-5-20251001`
**Purpose:** Read Marker-converted papers from `raw/markdown/FM_*/`, call `claude --print` non-interactive to produce structured source pages, write to `wiki/sources/`. Bounded by `--max-papers`, `--cost-ceiling`, `--timeout`.
**Efficiency: A on cost; B on speed.** Haiku 4.5 at $0.005-0.02/paper; ~20-60 seconds wall time per paper. Sonnet 4.6 produces higher-quality extractions for ~3x cost.
**Env vars:** `HMI_INGEST_MAX_PAPERS`, `HMI_INGEST_PRIORITY`, `HMI_INGEST_MODEL`, `HMI_INGEST_COST_CEILING`, `HMI_INGEST_TIMEOUT`.
**When to invoke manually:** After PDFs land in `raw/manual-fetch/auto-fetched/` and Marker has converted them to `raw/markdown/`.

### A.7 — Pooling engine refresh

**Command:** `node tools/evidence/build-hmtc-aggregate-distributions.mjs`
**Purpose:** Recompute pooled P97 (clean) / P45 (dirty) distributions for every (product × metal) cell from the structured value layer.
**Efficiency: A.** Deterministic; runs in seconds; emits CSV + summary JSON.
**When to invoke manually:** After A.5 or A.6.

### A.8 — Firewall lint

**Command:** `node tools/autonomy/firewall-lint.mjs`
**Purpose:** Detect wiki/HMTc firewall violations on public pages (engine internals, percentile arithmetic, workbench-side tokens).
**Efficiency: A.** Exits with code 2 on errors, 1 on warnings, 0 on clean.
**When to invoke manually:** Before publishing a release of the wiki.

### A.9 — Gap-driven wishlist

**Command:** `node tools/autonomy/gap-driven-wishlist.mjs`
**Purpose:** For each BLOCKED or PROVISIONAL cell in the pooled distribution, emit OpenAlex queries targeting that cell.
**Efficiency: A.** ~250 queries from current corpus state; covers the gaps closely.
**When to invoke manually:** Before A.10 (wishlist fetch).

### A.10 — 15 Cat 1 briefings regenerate

**Command (per briefing):** `npm run briefing -- --product=<slug>`
**Purpose:** Regenerate the Standards Briefing markdown from the current pooled CSV for each of the 15 Category 1 product chapters.
**Efficiency: B.** Sequential; ~5-10 seconds per briefing.
**When to invoke manually:** After pooling refresh (A.7) when you want updated briefings without waiting for the next daemon tick.

---

## Section B: Semi-autonomous operator-triggered pipelines

These run on operator command rather than the daemon schedule. They're appropriate when a specific build phase needs to ship.

### B.1 — Wishlist fetch (OpenAlex paper download)

**Command:** `npm run wishlist:fetch`
**Purpose:** Read the gap-driven wishlist, query OpenAlex for matching papers, download Open Access PDFs into `raw/manual-fetch/auto-fetched/`.
**Efficiency: B.** Rate-limited by OpenAlex (~10 req/sec for unauth traffic); paywalled papers are surfaced by DOI for manual fetch.
**When to invoke:** Before A.6 ingest, when the queue is thin.

### B.2 — Wishlist gap-driven (build queries + fetch)

**Command:** `npm run wishlist:gap-driven`
**Purpose:** Build targeted OpenAlex queries from the current gap report, then fetch candidates. Combined version of A.9 + B.1.
**Efficiency: A.** Same as components.
**When to invoke:** When a specific (product × metal) cell needs more evidence.

### B.3 — Program Manual build (markdown master)

**Command:** `node tools/standards/build-program-manual.mjs`
**Purpose:** Concatenate front matter + Parts 1-5 + Part 3 chapters into `HMTc-Program-Manual-2026-v0.md`. Runs firewall check.
**Efficiency: A.** Deterministic, fast.
**When to invoke:** After any chapter edit. After the daemon regenerates briefings (A.10).

### B.4 — Program Manual PDF (Typst publication-quality)

**Command:** `node tools/standards/render-manual-typst.mjs --pdf`
**Purpose:** Compile the master markdown to a Typst document and render to PDF at 6.14"×9.21" monograph trim with FreightText Pro body, Avenir Next display, running heads, page numbers, hyphenated justified prose.
**Efficiency: A.** Typst is fast (single binary, no LaTeX); compile time ~5-10 seconds for the 377-page manual.
**When to invoke:** Before sending the manual to a brand legal team or regulator.

### B.5 — Part 3 chapters regenerate from briefings

**Command:** `node tools/standards/render-part3-chapter.mjs --all`
**Purpose:** Retemplate the 15 Standards Briefings into bound-manual chapters with toxicology callouts, firewall stripping, em-dash reduction, cross-references.
**Efficiency: A.** Deterministic; idempotent.
**When to invoke:** After briefings regenerate (A.10) and before B.3.

### B.6 — Standards gap report

**Command:** `node tools/evidence/build-standards-gap-report.mjs`
**Purpose:** Generate `data/evidence/hmtc_standards_gap_report.csv` enumerating every locked HMTc row with its current evidence state.
**Efficiency: A.** Deterministic.
**When to invoke:** Before planning a corpus expansion or before a standards review.

### B.7 — Coherence audit

**Command:** *(manual; see `data/workbench/standards-book/coherence-audit.md`)*
**Purpose:** Cross-document consistency check across Governing Principles, Governance Policy, Lot Testing Schedule, briefings, CLAUDE.md Part 19.
**Efficiency: B.** Manual today; could be automated by extending firewall-lint.
**When to invoke:** Before publishing a new edition.

### B.8 — Adversarial audit

**Command:** *(manual; see `data/workbench/standards-book/adversarial-audit.md`)*
**Purpose:** Attack the drafted manual as a plaintiff's expert; surface gaps; propose strengthenings; rewrite Part 5.2 Program-Level Adversarial Read from the audit findings.
**Efficiency: B.** Manual today; deeply context-dependent.
**When to invoke:** Before publishing v0 of any new edition.

---

## Section C: Tactical prompts (Karen invokes from Warp)

These are one-shot tasks Karen runs interactively. Each prompt is designed to be fed to `claude --print` or copied into a Claude Code session.

### C.1 — "Fill the gaps in Category 1 and Category 5 for the next 8 hours"

**Prompt template:**

```
You are running an 8-hour autonomous build to close all (product × metal) cells in Cat 1 and Cat 5 of the HMTc program. Read data/evidence/autonomy/8hr-build/00-plan.md and 02-audit-2.md for the plan. Execute the daemon-driven cycle by:

1. Verify the daemon is loaded: launchctl list | grep heavymetalindex
2. Bump daemon env vars for the window:
   export HMI_INGEST_MAX_PAPERS=10
   export HMI_INGEST_PRIORITY=P1,P2,P3
   export HMI_INGEST_MODEL=claude-sonnet-4-6
3. Trigger an immediate tick: launchctl start com.paleo.heavymetalindex.daemon
4. Monitor: tail -f /tmp/heavymetalindex-daemon.out.log
5. Every hour, run the closure tally:
   node tools/evidence/build-standards-gap-report.mjs
   awk -F',' 'NR>1 && $26 ~ /BLOCKED/ {n++} END {print n " cells still BLOCKED"}' data/evidence/hmtc_standards_gap_report.csv
6. At t+8h, regenerate the master manual: node tools/standards/build-program-manual.mjs && node tools/standards/render-manual-typst.mjs --pdf

Report cells closed, papers ingested, total cost.
```

**Efficiency: A.** Leverages the entire daemon pipeline.

### C.2 — "Ingest these specific papers"

**Prompt template:**

```
The following papers were downloaded into raw/manual-fetch/<source>/. Marker-convert them, place the resulting markdown into raw/markdown/FM_<handle>/, and run the autonomous ingest on them.

Papers: [list paper titles + filesystem paths]

After ingest, run the routing audit, pooling engine, and gap-driven wishlist refresh.
```

**Efficiency: A.** Targeted high-value ingest.

### C.3 — "Audit the manual for a specific attack vector"

**Prompt template:**

```
A plaintiff's expert is preparing to challenge HMTc on [specific attack vector]. Read data/workbench/standards-book/parts/ and identify:

1. Where the manual responds to this attack
2. Whether the response is sufficient on the merits
3. What strengthening would close the remaining gap

Report the findings; do not make edits unless I confirm.
```

**Efficiency: B.** Defensive analysis; useful for active litigation prep.

### C.4 — "Brief me on a specific product category status"

**Prompt template:**

```
Read data/workbench/category-5-beverages-master.md (or category-1 equivalent) and data/evidence/hmtc_standards_gap_report.csv. Tell me the current state of [product-slug]: which analytes are at-bar, approaching, Path A thin, or data gap. List the contributing sources for each populated cell. List the next-best-fetch paper for each gap cell.
```

**Efficiency: A.** Read-only synthesis; fast.

### C.5 — "Generate a brand-legal one-pager for [product-slug]"

**Prompt template:**

```
Read the Part 3 chapter at data/workbench/standards-book/parts/04-the-standards/<NN>-<product-slug>.md. Produce a 2-page brand-legal pitch that:

1. States the HMTc limit table for this product
2. Names the applicable regulatory caps
3. Explains the defensibility argument in plain English (no engine arithmetic)
4. Closes with the licensing path

Output as a single markdown file at data/workbench/standards-book/marketing/brand-legal-<product-slug>.md.
```

**Efficiency: B.** Useful for first sales conversations.

---

## Section D: Maintenance prompts

### D.1 — "Run all daemon steps manually right now"

**Command:** `bash tools/autonomy/daemon-tick.sh`
**Efficiency: A.** Full daemon cycle on-demand.

### D.2 — "Re-render the Part 3 chapters"

**Command:** `node tools/standards/render-part3-chapter.mjs --all && node tools/standards/build-program-manual.mjs`
**Efficiency: A.**

### D.3 — "Push everything to origin"

**Command:** `git push origin claude/vigilant-heyrovsky-a304de` (or whichever branch)
**Efficiency: A.**

---

## Section E: Efficiency-graded summary

The most efficient prompts for the highest-value tasks:

| Goal | Prompt | Efficiency |
|---|---|---|
| Close documented gaps in Cat 1+5 | C.1 + daemon | A |
| Ship a publication-quality PDF | B.3 → B.4 | A |
| Onboard a specific brand for certification | C.5 → license agreement workflow | A |
| Audit methodology before legal review | B.8 | B |
| Fill in new corpus from OpenAlex | B.2 → A.6 | A |
| Detect drift in the wiki/HMTc firewall | A.8 | A |
| Daily heal pass | A.1 through A.9 (daemon) | A |

For long-running autonomous work, **start the daemon, set env vars, halt by `touch ~/.heavymetalindex.STOP`**. The daemon's morning report (`data/evidence/autonomy/morning-report-<date>.md`) is the single accountability artifact.

---

## How Claude Code discovers this catalog

This file lives at `docs/prompt-catalog.md` in the repo. The project's CLAUDE.md references it under Part 24 ("Things to proactively do") as the canonical source for prompts that future sessions can invoke. When a session is asked to "run the daemon" or "regenerate the manual" or "audit the firewall," the session reads this catalog first to find the operative command.

If you are a Claude Code session reading this for the first time, you should also read:

- `data/evidence/autonomy/8hr-build/00-plan.md` (the 8-hour build plan)
- `data/workbench/standards-book/adversarial-audit.md` (the audit that produced Part 5.2)
- `data/workbench/standards-book/coherence-audit.md` (the coherence audit across source documents)

These three documents together explain how the autonomous work is structured and what's been done.
