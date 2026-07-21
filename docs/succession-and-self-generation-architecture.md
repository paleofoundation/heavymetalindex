---
op: architecture-proposal
date: 2026-07-21
audience: [staff, governance]
status: PROPOSAL — the grounding anchors and roadmap are Claude's to build; the
  §5 succession charter (frozen rules, governing principles, human-decision list)
  REQUIRES KAREN / GOVERNANCE RATIFICATION before it is binding.
frame: loops → graph → grounded (Karen's essay). Self-generating in the loops;
  grounded by anchors the loops cannot fabricate; a minimal, specified human residue.
---

# Self-generating index & succession architecture

The answer to two questions that are really one: how to draw up *every* standard for
*every* category, fully defensible; and how to keep the index finishing itself, current,
geographically traceable, and remediation-complete **if the human anchor is removed.**

## 0. The honest thesis

A fully-closed, self-generating standards index is impossible to keep honest — it becomes a
graph of loops confirming each other with nothing touching ground, and it drifts later, more
expensively, and with more green lights than any single loop. The achievable and correct
design is: **maximally autonomous loops, grounded by four structural anchors that touch a
reality the loops cannot fabricate, with the human residue shrunk to a small, specified,
ratifiable core, and a self-halt that escalates instead of drifting when an anchor is missing.**

## 1. The four grounding anchors (they replace the human's grounding function)

The system is allowed to self-generate everything downstream of these four; it may never
close the loop *without* them.

1. **Literature provenance.** Every published value reconstructible to named source values in
   `data/evidence/`. Synthesis reads *sources*, not prior synthesis, on a periodic full
   re-derivation (the `last_full_resynthesis` doubling trigger). Provenance audit is
   build-blocking. *Anti-drift: the number can never detach from a source and survive.*
2. **Regulatory caps.** `final = min(pool P97/P45, lowest applicable government ML)`, native
   basis, never exceeding the cap. An external, non-fabricatable number holds every standard
   to law even when a pool drifts. *This is why the Cat 6 Tier-1 core was defensible under
   noisy pools.* Load caps completely; a missing cap is a gap to fill, not a silent absence.
3. **Adversarial independence.** A hostile-reviewer pass — a *different model*, fresh context,
   mandated to break not confirm — run per category and per iteration. Findings that survive
   become punch-list items. *This is the structural form of the human's skepticism.* (Proven
   on Cat 6 2026-07-21: it caught a silent reversal of hold decisions the internal loop missed.)
4. **Lab-test feedback (the deepest anchor).** Lot-testing results from actually-certified
   products are the ground truth the standard predicts against. The standard says "clean
   product falls below X"; real results confirm or refute; the §80th-percentile ratchet feeds
   on the confirmation. *Wire lab results back into standards review and reality votes* — the
   system corrects against the world, not itself. **This is the single most important upgrade
   for genuine self-grounding, and it is not yet wired.**

## 2. The per-category loop → scale to every category

The loop is proven (Cat 6): ingest → pool (`build-hmtc-aggregate-distributions`) → adjudicate
via the shared ledger (`adjudication.mjs`) → reconcile (`build-category-standards-tables` +
`audit-standards-reconciliation`) → adversarial-harden → dossier → punch-list.

**The scaling principle: convert every recurring human judgment into a deterministic gate.**
Each gate is the codified form of a decision the human used to make by hand. Registry so far;
extend until the human residue is only novel forks:

| Gate | Codifies the judgment | Status |
|---|---|---|
| needs_review (spread > 0.50 → held) | "this pool is too unstable to ship" | live |
| single-source (distinct ≤ 1 → point estimate) | "one study is not a percentile" | live |
| degenerate-tail (p97 ≈ p90 → not firm) | "this tail collapsed; not a real distribution" | live |
| cap-binds → firm | "the government limit is the support" | live |
| wrong-analyte withdrawal (tAs/tHg → speciated) | "total is not the toxic fraction" | ledger |
| mixed-basis hold (dry into wet) | "convert before pooling or hold" | ledger; automate next |
| tail-ratio split (p97/p50 ≫ → clean/dirty or hold) | "bimodal = separable populations" | partial |

Run the loop across all locked categories in commercial-priority order; each category emits a
reconciled table + a defensibility dossier + a punch-list. A category is *done* only when its
14-check gate passes and its punch-list is empty.

## 3. Self-generation loops (currency, geography, remediation)

- **Continuous ingest (currency).** The HMI-9 gap-fill daemon + wishlist gap-driven fetch keep
  the corpus current; new evidence triggers re-synthesis of the affected cells (Part 9). Anchor:
  novelty-vs-dup and the provenance audit.
- **Geographic traceability.** Make region a first-class pool dimension (the pool is already
  jurisdiction-aware). Every ingredient `contamination_profile` gains per-region ranges with
  source citations; the wishlist fetches keyed on (ingredient × region × metal) fill gaps. A
  brand traces its lot to the regional distribution, not one cherry-picked max.
- **Remediation synthesis.** For every (ingredient, metal) contamination pathway, synthesize a
  remediation page from the literature (agronomic, processing, sourcing interventions), linked
  from the ingredient/product pages and the confidential remediation track. Anchor: same
  provenance + adversarial pass as any synthesis.

## 4. The self-halt / escalation system (knowing when it is ungrounded)

The most important autonomy feature is not how to continue — it is knowing when to **stop and
escalate.** A system that halts honestly at a missing anchor is safer than one that
self-generates past the gap. Build the drift-detectors into a standing "am I still grounded?"
critic that HALTS the loop and files an escalation when any of:

- a published value lacks a source it can name (provenance broken);
- a cell would ship with no cap **and** no ≥3-source pool **and** no documented read-across;
- the reconciliation audit, integrity audit, or sensitivity gate fails;
- a completeness critic finds a modality not run, a claim unverified, a source unread;
- a frozen-rule change is attempted (see §7).

Escalations go to the human residue (§5). The system does not "decide" past them.

## 5. The irreducible human residue + succession charter — REQUIRES RATIFICATION

Two things cannot be automated and must be held by a successor (a person or a small governing
board). The goal of this section is to make that role **minimal and near-discretionless.**

- **Root purpose.** What the program protects and how hard (the governing principles). Encoded
  in `docs/governance/hmtc-governing-principles.md`; the successor applies precedent, rarely
  authors new principle.
- **Novel policy forks.** Clean/dirty population theory for a genuinely new matrix; precautionary
  vs feasibility deviations; which caps to honor when they conflict. Most resolve to precedent;
  only the genuinely-new reaches the human.

**The succession charter (skeleton — Karen/governance to ratify):**
1. The **frozen rules** — the methodology constants (P97/P45, reconstitution factor 7, the
   clamp-to-cap, the needs_review threshold) and the wiki/HMTc firewall. Listed explicitly.
2. The **law that dominates all others:** *no process, model, or session may lower a standard's
   defensibility bar or weaken a frozen rule to make a category pass.* A frozen-rule change is a
   governance event: adversarially reviewed, logged, ratified — never a side effect.
3. The **human-decision list** — the short, explicit set of forks that require ratification
   (from §5 above). Everything not on the list is delegated to the loops + gates.
4. **Succession trigger** — on the human's absence, the charter names who holds the residue and
   how (single successor / board / rotating review), so the system never runs unanchored *or*
   silently stops.

## 6. Prioritized roadmap (what to do next, in order)

1. **Codify judgment into gates** (§2 registry): automate mixed-basis and tail-split; grow the
   registry each category. *Shrinks the human residue every pass.*
2. **Write the succession charter** (§5) and the **self-halt critic** (§4). *These are the
   anchors that make absence survivable; do them before scaling, not after.*
3. **All-category rollout** of the per-category loop, commercial-priority order, each ending in
   a dossier + empty punch-list.
4. **Geographic stratification + remediation synthesis** (§3) — run in parallel; paced by ingest.
5. **Wire the lab-test feedback anchor** (§1.4) — the deepest self-grounding upgrade; convert the
   ratchet from a rule into a reality-driven loop.

## 7. What must never be automated

One line, load-bearing: **no process may weaken a frozen rule or lower the defensibility bar to
make a category pass.** That temptation is the failure the entire architecture exists to
prevent. It is the one decision reserved, forever, for the ratified human residue.
