# Category-lock adjudication — 2026-06-20

Autonomous clean/dirty Gate-1 adjudication of the 7 held rows (Claude, under Karen's
"you should be locking categories, not me" directive). Method: per-row evidence
adjudicator + two adversarial skeptics (pool-completeness lens + split-necessity lens)
+ synthesis. Workflow `wf_405d9a4c-600` (22 agents). Full transcript in the session
task output.

## Result: 0 clean APPLY, 7 HOLD

No `across_row_review_hook` is safe to mark RESOLVED as-is. Each row has a specific,
mostly-mechanical blocker. This is the correct conservative outcome — the seaweed
lesson (an unstable/incomplete pool must be held, not shipped) applied seven times.

## ⚠ The systemic finding (the real lever)

**Regulatory caps are not loaded into `hmtc_aggregate_distributions.csv` for several
rows** — honey, vinegar, and both cereals show `lowest_regulatory_cap_ppb=''` even
though the caps demonstrably exist (e.g. EU honey Pb ML = 100 ppb; the honey candidate
Pb is published at 1410 ppb, **14× above** a real EU ceiling). The "conservative-cap"
resolution path (the spices precedent) is *uncomputable* without the cap loaded, so
these rows can't resolve no matter how the clean/dirty question is judged. **Loading
the applicable regulatory caps into the aggregate is a mechanical system fix that
unblocks multiple rows at once — it is the highest-leverage next action, and it is a
cap-loader task, not a per-row judgment.**

## Per-row HOLD blockers + unblock conditions

| Rank | Row | Blocker | Unblock |
|---|---|---|---|
| 1 | **salt** | The no-split decision is correct (no sea/rock/Himalayan sub-pools exist — both skeptics confirm). Defect: the value direction — methodology `min(percentile, cap)` and the QC gate bind the **lower literature-baseline** values (Pb P97 181.8→**180**, Cd 16.6→**16** under the new round-down rule), not the caps. Publishing caps would be a Part-2 *loosening* drift. | Write the RESOLVED hook publishing the literature-baseline `min()` values (Pb ~180 firm; Cd ~16 **provisional**, `sens_band=needs_review`); Al stays NOT_MATERIAL; record the geology axis as an open post-publication ratchet. Then RESOLVED-no-split. |
| 2 | **breakfast-cereal-rice-based** | Skeptic downgrade. iAs/Cd were mislabeled `publish_literature` over a `distinct_sources=0` BLOCKED pool; page hook is ACTIVE; caps not loaded. | Relabel to `publish_cap`; load EU 2023/915 iAs 300 + Cd 100; clear the active page hook; register tAs not-material. Closest after these 4 mechanical fixes. |
| 3 | **olive-oil** | **CONTESTED — needs a call.** Recommendation holds Ni for a refined/unrefined split; the split-necessity skeptic shows the rationale imports a hydrogenation/margarine mechanism *physically inapplicable to liquid olive oil*, that lin2024 refined-vs-EVOO rows show no gap, that the 577 ppb P97 is a sparse-tail artifact (p50=27.8), and that the QC gate already passes Ni 577 literature-baseline (hold cleared 2026-06-18). Pb is already firm at the EU 100 ppb cap; Cd/tAs settled NOT_MATERIAL. | **Karen/methodology adjudicates the Ni mechanism dispute (margarine-catalyst vs degenerate-tail).** If the skeptic is right, the action is a missing RESOLVED marker + a single round-down Ni value, and the whole row resolves. Reconcile stale `primary_metals_of_concern` → effective `[Pb, Ni]`. |
| 4 | **chocolate** | Pb pool structurally unstable (dark-vs-milk bimodality, sens_spread 0.807; p97/p50=38.5) with no chocolate Pb ML to cap; tAs single-source + species defect (tAs where only iAs is regulated). Outlier register already: "NOT SHIPPABLE as a single blended row." | **Cd carve-out is firm now** (EU 2023/915 milk-chocolate 100 ppb, stable) *if the publication layer supports per-analyte firmness on a held row*. Pb needs dark/milk (cocoa-%) sub-variant pools (a Cat-33 taxonomy decision). |
| 5 | **vinegar** | No caps loaded. Pb has an ACTIVE temporal-stratification governance hold (acosta1993 1993 datum swings P97 ~500 vs ~868-1000, DECISION NEEDED). tAs is total-As from 2 sources (wrong species). | Map a plausibly-applicable fruit/wine Pb cap (EU fruit-juice 30-50 / superseded wine 100) — likely binds below both; resolve acosta1993 temporal inclusion; pool speciated iAs. |
| 6 | **breakfast-cereal-non-rice** | Pool empty (Pb/Cd `distinct_sources=0`, BLOCKED) AND no cap. Neither cap nor split executable. | Extract/route the named recoverable sources (Pb: dabeka1995, ec2004; Cd: +efsa2012) in as_sold basis; load + basis-check EU general-cereal Pb/Cd caps; re-pool. |
| 7 | **honey** | Most blockers: no caps loaded (EU honey Pb 100 unloaded; candidate 14× over it); tAs pool contaminated by jackson2012 brown-rice-syrup (wrong commodity/basis/species); Cd + Al unstable (Al degenerate p97=139,113); Sn (the syrup-split analyte) absent from the pool entirely. | Load EU/Codex honey caps (cap-loader fix); purge jackson2012 + resolve iAs speciation; re-run Cd/Al sensitivity. Then most analytes resolve regulatory-alignment-capped, no split. |

## What I am NOT doing (and why)

Not writing any RESOLVED hook this pass. Even the #1-ranked row (salt) was held by the
synthesis on a value-direction defect, and the #3 row (olive-oil) turns on a genuine
methodology dispute. Applying a standard is litigation-facing; the workflow's
conservative 7×HOLD is the defensible call. The next action is the **cap-loader system
fix** (unblocks honey, vinegar, both cereals via the conservative path), then a focused
per-row apply pass (salt + rice-cereal first), then Karen's call on the olive-oil Ni
mechanism and the chocolate Cd-carve-out publication-layer question.
