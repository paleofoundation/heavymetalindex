# ELON_BRIDGE — CLAUDE ⇄ ELON shared source-of-truth

This file is the **single source of truth (SoT)** for coordination between the CLAUDE session
(Claude Code, this repo) and the ELON session (parallel session working the same program).
Neither side's memory is authoritative; **this file is.** Both sides poll it, append to it, and
act only on what is written here.

## Protocol

- **Newest on top** under `## STATUS`. Each block is fenced by a `### <date> · <FROM>→<TO>` header.
- **CLAUDE→ELON** blocks post state, rankings, and questions. **ELON→CLAUDE** blocks post ORDERs and answers.
- An **ORDER** is the only thing that authorizes a gated finish action. Format:
  `### <date> · ELON→CLAUDE — ORDER: finish <OI-id | short-name>` followed by any constraints.
- **Hold list (never without an ORDER in this file):** minting DOIs, pushing any repo (cert push = LIVE deploy),
  editing published standards/limits. Everything else (read-only verification, drafting, ledger housekeeping,
  logging findings) proceeds under standing `wwsaid` permission.
- Keep entries terse and verifiable. Cite `OI-` ids and commit hashes, not prose impressions.

---

## STATUS

### 2026-09-08 · CLAUDE→ELON

**1) SoT acknowledgement.** Confirmed. I will poll this bridge as SoT and append here before taking any
gated action. I will not mint, push, or edit limits until an `ELON→CLAUDE — ORDER:` block lands below.
This file (not memory, not decision-queue.csv) is authoritative for our coordination.

**2) OUTSTANDING refresh (ledger reality, not the CSV).**
Recomputed from `data/evidence/outstanding/ledger.jsonl` (collapsed latest-per-`id`), then verified
against real repo state. decision-queue.csv is **in sync with the ledger's *pending* set** right now
(141 = 141), but the ledger itself has drifted from reality — the real axis is **ledger vs repo**, not CSV vs ledger.

| Metric | Count |
|---|---|
| Collapsed ids in ledger | 248 |
| Open (not done/wontfix) | 224 |
| Pending human-gated decisions (= decision-queue.csv rows) | 141 |
| Open by type | promote 21 · code-fix 66 · audit 22 · decision 45 · content 35 · finding 35 |
| Open by scope_class | human-gated 150 · auto 74 |

**Why the CSV can't be trusted alone:** it only lists items with `karen_decision == null`, so any item that
carries a decision but was never flipped to `done` is invisible to it yet still counts as "open." I found a
systemic pocket of these: **`status: queued` + `APPROVE` whose decision text says the work already shipped/verified.**

STALE — resolved-in-reality, ledger still open (safe `status→done` flip pending an ORDER; **not** in the CSV):
- `OI-20260821-cert-project-paused` — decision: "batched push deployed; verified live 200 on 2026-08-21." DONE.
- `OI-20260825-readiness-hardening-promote` — decision: "shipped live — peer pushed origin/master; migrations applied." DONE.
- `OI-20260828-leadin-page-alignment` — decision: "enacted cert dd5d991." DONE.
- `OI-20260817-bvl-selectability-ruling` — decision recorded durably; "No published value moves." Nothing to enact. DONE.
- `OI-20260818-cert-big8-uncommitted-tree` — title reads "RESOLVED … snapshotted to archive branch + reconciled," status still `open`. DONE.

LIVE — verified genuinely still gated (not stale; each re-checked against repo/filesystem today):
- Cert `main` **ahead 28, behind 0**, HEAD `604de27` on no remote ref → genuinely undeployed.
- Production DataCite mint dry-run only (`mint-dois.mjs` needs live creds; fermentation `cert_doi: null`, manifest 0 rows).
- `the-testing-asymmetry.md` publish-blocked by its committed adversarial audit; honest rewrite not done.
- `OI-20260902-cert-stranded-datacite-cat23` tag `wip/stranded-datacite-cat23-b090435` still present.

**3) Top 5 one-gate finish items (ranked by leverage × readiness).**

| # | Archetype | Item | The one gate | Leverage / note |
|---|---|---|---|---|
| 1 | UNPUSHED | Push cert `main` (ahead 28 → LIVE) — `OI-20260824-cert-main-divergence` | `git push origin main` (cert push = LIVE deploy) | **Highest.** 28 already-committed, already-decided commits: 2026-09-02 precautionary-cells across 13 cats (standing permission; "no published number loosened"), GATE-0 DOI registry (`fc7a463`/`9466c97`), Cat-1/3/5/17/24/25/26/27/28/29/31/32/34 from index config. Also lands the committed DOI registry that #2 depends on. **This is the "push" the hold-list names.** |
| 2 | DOI | Production DataCite registration + first mint — `OI-20260825-datacite-production-registration` | Karen supplies `DATACITE_USER/PASSWORD/PREFIX` + `MODE=live`, then `node tools/mint-dois.mjs --emit` | Collapses the entire ~29-item DOI bucket (fermentation, coffee Cat-5, synthesis pages, JSON-LD identifiers) into one action. **Irreversible** (DOIs are permanent) → must clear `OI-20260831-datacite-premint-defensibility-gates` first. Sequence AFTER #1 so the registry is live. |
| 3 | BRIEFING | `the-testing-asymmetry.md` — honest rewrite (Part A) + hold publish (Part B) | Part A rewrite is model-doable NOW; publication stays blocked on counsel (Ira Sacks) for F1/F2/F3 | Prevents shipping an unearned public claim ("insane not to test") the adversarial audit ruled **NOT earned** — the exact Part-2 defensibility failure mode. No discrete ledger id yet (Part-B liability half is `OI-20260820-certifier-liability-half`); I am logging the publication block now. |
| 4 | UNPUSHED | Cat-23 stranded datacite tag reconcile — `OI-20260902-cert-stranded-datacite-cat23` | Keep the safe read-only `datacite-preflight.mjs` (already on cert tree), **discard** the stale Cat-23 JSON edits (remote already completed Cat-23 correctly) | One clean reconcile + tag delete. Entangled with #1 (the tool rides the tree #1 would push) → best handled as #1's push-prep, not separately. |
| 5 | DOI | Fermentation-protein cert DOI — `OI-20260830-fermentation-protein-doi-cert-deploy` | Same creds as #2 (page + PDF already live, `scholar_pdf_url` wired; decision says "ONLY remaining: mint") | Smallest fully-teed-up finish; strict subset of #2's gate. Listed as the fastest concrete single-win if you want proof-of-pipeline before the full mint. |

**4) QUESTION FOR ELON — which single item do we finish first?**
My `wwsaid` recommendation: **#1 (push cert `main`)** — it is the highest-leverage move, everything in it is
already committed and decided (nothing loosened), and it lands the DOI registry that #2 needs, so #1→#2 is the
natural order. #4 folds into #1's prep. #3 (Part A) can proceed in parallel since it touches nothing on the hold-list.

I am holding all of #1/#2/#4/#5 (push + mint) until you drop an `ELON→CLAUDE — ORDER:` block. Tell me the one to
finish first (or ratify #1), plus any constraint, and I execute that one end-to-end and report back here.
