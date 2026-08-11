# Scope source of truth + consistency lint

**Locked by:** the 2026-06-18 scope-drift fix (see memory `project_scope_denylist_drift`).
**Manifest:** [`scope-manifest.json`](scope-manifest.json) — the single machine-readable declaration of what is in- and out-of-scope for the corpus.
**Enforced by:** [`check-scope-consistency.mjs`](check-scope-consistency.mjs), run first in `prebuild` (build-blocking) and available as `npm run lint:scope`.

## The problem this exists to prevent

HMI's inclusion scope is **defined** in prose (CLAUDE.md inclusion-by-default, docs/conventions, the lanes memo) but was **enforced** by a hand-maintained keyword denylist — `NEGATIVE_KEYWORDS` in `tools/wishlist/find-candidates.mjs`, which the `/discover` skill also borrowed. Those two artifacts drifted: terms were added to make FRANK's retail-occurrence gap-fetcher more precise, and silently amputated entire in-scope literatures elsewhere — `phytoremediation`, `phytoextraction`, `soil-to-plant transfer`, `atmospheric deposition`, `dietary exposure assessment`, `soil microbial community`, and every flavour of `systematic review` were all being hard-excluded.

That is not cosmetic. Silent exclusion of in-scope literature quietly **falsifies the "we have reviewed the complete literature" claim** that the entire HMI defensibility thesis (CLAUDE.md Part 1) rests on. A plaintiff's expert or regulator who knows the excluded literature can find the hole.

## The invariant

> The corpus has ONE inclusion scope: inclusion-by-default. Lane-specific tools may **rank or deprioritize** papers differently, but they MUST NOT **hard-exclude** (denylist) anything in the corpus in-scope set. Deprioritization is fine; silent exclusion is not.

Concretely: **a denylist keyword that matches an `in_scope` category in `scope-manifest.json` is a build-blocking contradiction.** If FRANK's fetcher wants to deprioritize, say, soil-mechanism papers relative to retail-occurrence papers, it does that in its *ranking*, never by deleting them from consideration.

## How the manifest is structured

- `in_scope` — categories the corpus includes by policy (remediation, soil-to-plant transfer, atmospheric deposition, exposure assessment, microbiome, reviews/syntheses, marine bioaccumulation, source attribution), each with the keyword forms that name them. **A denylist term matching any of these fails the build.**
- `out_of_scope` — categories genuinely outside the corpus (sensors, materials-science synthesis, gene-level plant molecular biology, AMR, clinical case reports, food-as-adsorbent water treatment, etc.). Denylist terms here are fine.
- `ambiguous` — terms currently denylisted that are **not clearly out-of-scope** under the documented lanes (human biomonitoring, environmental water/sediment, occupational/air, and dual-use single words like `rhizosphere` and `biochar`). The lint treats these as declared (no failure) but **surfaces them for Karen's scope decision** — each carries a `recommendation` and `needs_decision: true`. They are the open scope questions, made visible instead of silently decided.

## How the lint works

`check-scope-consistency.mjs` extracts every keyword from the denylists named in `manifest.denylists_checked`, and for each: flags a **contradiction** (exit 1) if it matches an `in_scope` category; otherwise classifies it as declared-out, ambiguous-flagged, or (informational) undeclared. Matching is exact-first, then bidirectional substring with a 4-char floor.

## Maintaining it

- **Adding a denylist term?** If it names something in-scope, don't — deprioritize in ranking instead. If it's genuinely out-of-scope, add it *and* declare its category in `out_of_scope` (or `ambiguous` if you're unsure) so the lint stays green and the decision is recorded.
- **Changing scope?** Edit the manifest (the source of truth), not just the denylist. This closes the old failure mode where prose and regex diverged. Per the lanes memo, scope changes must hit all three gates — conventions (prose), the ingest prompt, and the regex; the manifest + lint make the regex gate auditable against the prose.
- **The `ambiguous` section is a worklist for Karen**, not a permanent home. As each is decided, move it to `in_scope` (and remove the denylist term) or `out_of_scope` (and keep it).
