# Proposed CLAUDE.md changes — ops/QA/manufacturing audience layer

**Status:** Draft for Karen's review. Not applied to CLAUDE.md.
**Date:** 2026-04-25
**Origin:** Conversation about making the wiki valuable to QA/manufacturing leads, followed by audit of whether the existing schema would actually produce that content.

## Why this proposal exists

The strategic logic in CLAUDE.md identifies brand QA/regulatory affairs as audience layer 2 — the audit layer that determines whether HMT&C survives due diligence. The current schema serves the literature-synthesis and certification-criteria purposes well, but it has no first-class concept of operator-facing content. Future Claude sessions reading CLAUDE.md cold will produce literature summaries and not know to build the synthesis layer that QA, ops, and supplier-quality teams actually consume. Lint will not flag the absence. The result is an asymmetry: HMT&C will publish certification standards that ops teams have to operate against, but the wiki those teams audit will not contain the synthesis they need to do their job.

Twelve proposed changes follow. Each names what it touches in CLAUDE.md, the rationale, and the exact text change. Read in order; later proposals depend on earlier ones.

---

## Summary

| # | Change | Touches |
|---|---|---|
| P1 | Add `ops` to audience taxonomy | Audience layering, all page templates |
| P2 | Add structured `mitigation_options` block | Ingredient page template |
| P3 | Add `variance_profile` block | Ingredient page template |
| P4 | Define supply-chain page template | Page templates (new) |
| P5 | Define sampling-plan page convention | Testing section, page templates (new) |
| P6 | Add regulatory horizon convention | Regulation page template, workflows |
| P7 | Add cross-jurisdiction matrix convention | Regulations directory, page templates (new) |
| P8 | Add ops-coverage lint rules | Lint workflow |
| P9 | Add operator's reference drafting workflow | Workflows |
| P10 | Add Ops to source page Implications | Source page template |
| P11 | Add wiki/operator's-handbook boundary section | New top-level section |
| P12 | Update directory layout | Architecture section |

---

## P1 — Add `ops` to the audience taxonomy

**Rationale.** The current taxonomy `[regulator, educator, consumer, app]` has no slot for QA/manufacturing/supplier-quality content. Without a tag, sections cannot be marked, lint cannot check coverage, and rendered audience views cannot include ops. Strategically, ops is the daily-operator face of layer 2 (regulatory affairs is the audit face); both need to be representable.

**Where it touches CLAUDE.md.** "Audience layering" section; every page template with an `audience:` field; the strategic-logic prose where audience layers are described.

**Proposed change to "Audience layering" section.**

Existing:
```
Every substantive page carries `audience: [regulator, educator, consumer, app]` in frontmatter.
```

Proposed:
```
Every substantive page carries `audience: [regulator, educator, consumer, ops, app]` in frontmatter.

The `ops` tag covers content for QA leads, manufacturing operations, supplier quality, and incoming-materials inspection — practitioners who operate against standards day-to-day rather than auditing them at a remove. Ops sections answer "given this situation, what should we do" using literature-backed synthesis; they do not drift into how-to consulting prose (see P11 on the wiki/operator's-handbook boundary).
```

**Cascading edits.** Add `ops` to the audience array on every page template (metal, ingredient, product-category, regulation, testing, microbiome, supply-chain, sampling-plan).

---

## P2 — Add structured `mitigation_options` block to ingredient page template

**Rationale.** The current ingredient template names "Mitigation options" as a prose section but provides no structure. Compare to `contamination_profile`, which is fully specified (status, confidence, n_studies, last_reviewed, per-metal sub-blocks). The asymmetry guarantees mitigation content drifts into vague prose and the app/courses cannot consume it. The mitigation-efficacy synthesis is one of the highest-leverage ops-facing additions; structuring it now sets the bar.

**Where it touches CLAUDE.md.** Ingredient page template under "Page templates."

**Proposed addition to ingredient frontmatter** (insert after `contamination_profile` block, before `drivers`):

```yaml
mitigation_options:
  iAs:
    status: pending                # pending | in_progress | populated
    interventions:
      - name: rinsing-pre-cook
        efficacy_pct_reduction: [null, null]   # [low, high] from literature
        cost_class: null                       # low | medium | high
        supply_chain_lead_time_months: null
        sensory_impact: null                   # minimal | moderate | significant
        n_studies: 0
        sources: []
    last_reviewed: null
  Cd:
    status: pending
    interventions: []
    last_reviewed: null
  # one block per metal of concern for this commodity
```

**Section guidance to add to template prose.** A new "Mitigation efficacy" section after "Processing effects," presenting interventions in prose with quantitative efficacy ranges and citations. The structured frontmatter mirrors the prose; the prose is the synthesis, the YAML is the consumable form.

**Status semantics mirror `contamination_profile`.** `pending` = template default, `in_progress` = research started, `populated` = research complete. Empty `interventions: []` with `status: populated` is a legitimate finding (literature is silent on mitigation for this metal/commodity pair).

---

## P3 — Add `variance_profile` block to ingredient page template

**Rationale.** `contamination_profile` captures `typical_ppb` (range) and `p95_ppb` per metal — matrix-level point estimates. Real ops variance work needs by-origin, by-season, intra-lot vs. inter-lot decomposition. Ops leads use this to distinguish "your supplier changed something" from routine noise. Extending `contamination_profile` would clutter it; a parallel block keeps the existing structure lean and surfaces variance work as a first-class concept.

**Where it touches CLAUDE.md.** Ingredient page template, after `mitigation_options`.

**Proposed addition:**

```yaml
variance_profile:
  iAs:
    status: pending
    by_origin:
      # populated entries: { origin, n_samples, mean_ppb, p95_ppb, sources }
    by_season:
      # populated entries: { season, n_samples, mean_ppb, p95_ppb, sources }
    intra_lot_cv: null                # coefficient of variation within a single lot
    inter_lot_cv: null                # coefficient of variation across lots from same origin
    n_studies: 0
    last_reviewed: null
  # repeat per metal of concern
```

**Prose section.** A "Variance and origin effects" section presenting the by-origin distributions narratively with cited sources. The YAML feeds the app and any benchmarking work; the prose is the analytical synthesis ops teams will read.

---

## P4 — Define supply-chain page template

**Rationale.** The schema lists `supply-chain/` in the directory layout ("soil, water, fertilizer, equipment, packaging, storage") and references it in workflows, but provides no template. Without one, supply-chain content will be built ad-hoc and incoherently if at all. Incidental contamination routes (equipment, packaging, water, colorants, pigments, lubricants) are exactly where ops teams discover their problems — the cinnamon/lead-chromate adulteration and applesauce/Pb pouch incidents are textbook. This needs structure.

**Where it touches CLAUDE.md.** New subsection under "Page templates," after the testing-method template.

**Proposed template (`wiki/supply-chain/<route>.md`):**

```yaml
---
type: supply-chain-route
route: equipment-leaching         # soil | water | fertilizer | equipment | packaging | storage | colorants | pigments | lubricants | cleaning-agents | gases | cross-contamination
metals: [Pb, Cd, Cr, Ni]
matrices_at_risk: [acidic-foods, beverages, fermented-foods]
mechanism_summary: brief-one-line
audience: [ops, regulator, educator]
updated: 2026-04-22
sources: 0
---
```

Sections: Mechanism (how the route introduces metal contamination) → Matrices most at risk → Conditions that elevate risk (pH, temperature, contact time) → Detection and testing → Mitigation options → Regulatory framing (where applicable) → Sources.

---

## P5 — Define sampling-plan page convention

**Rationale.** Sampling guidance currently lives as a half-sentence inside method pages and inside the certification workflow. There is no per-matrix sampling guidance, no statistical-basis requirement, no first-class concept. This is among the most ops-relevant content the wiki could host, and the literature does support real synthesis (FDA TDS methodology, ISO standards, agricultural variance studies).

**Where it touches CLAUDE.md.** New subsection under "Page templates," after the testing-method template; update directory layout to include `wiki/testing/sampling-plans/`.

**Proposed template (`wiki/testing/sampling-plans/<matrix>.md`):**

```yaml
---
type: sampling-plan
matrix: infant-rice-cereal
metals: [iAs, Cd, Pb]
recommended_n_per_lot: null
sampling_strategy: null            # composite | individual | stratified-by-origin
recommended_frequency: null        # per-lot | per-week | per-shipment | rotating
statistical_basis: null            # one-line summary with cite
applicable_regulations: []
audience: [ops, regulator]
updated: 2026-04-22
sources: 0
---
```

Sections: Why this matrix needs a defined sampling plan → Variance considerations (linking to the ingredient `variance_profile`) → Recommended sample size with statistical justification → Composite vs. individual reasoning → Frequency guidance → Method pairing (which testing methods are appropriate at which sample sizes) → Regulatory acceptance → Sources.

---

## P6 — Add regulatory horizon convention

**Rationale.** Per-rule pages have `status` (proposed | draft-guidance | finalized | enforced) and `effective_date`. Lint rule 6 covers "regulatory drift" for stale finalized rules. Nothing surfaces the horizon of pending rules — what is coming in 12–24 months. Ops teams plan capex and supplier qualification on those timelines. A proposed rule with no `expected_effective_date` is missing the field that makes horizon planning possible.

**Where it touches CLAUDE.md.** Regulation page template (add field); workflows section (add aggregation behavior); lint rules (P8 handles).

**Proposed addition to regulation frontmatter:**

```yaml
expected_effective_date: null      # for status: proposed | draft-guidance — agency's current target or best estimate, with cite
horizon_notes: null                # one-line: what would change, who is most affected
```

**Proposed aggregation page convention.** `wiki/regulations/horizon.md` is auto-curated on every lint pass: a single page listing all regulations with `status: proposed` or `status: draft-guidance`, sorted by `expected_effective_date`, with horizon_notes inline. The lint workflow regenerates it (see P8, rule 17).

---

## P7 — Add cross-jurisdiction matrix convention

**Rationale.** Each regulation page is per-jurisdiction; the workflow says to cross-link parallel rules. There is no aggregation that answers the operator's actual question: "for product X sold into markets A, B, C, what's the binding threshold per metal and which jurisdiction sets it." That requires synthesis across regulation pages, organized by matrix.

**Where it touches CLAUDE.md.** Directory layout (add `wiki/regulations/matrices/`); new subsection under "Page templates."

**Proposed template (`wiki/regulations/matrices/<matrix>.md`):**

```yaml
---
type: regulatory-matrix
matrix: infant-rice-cereal
metals_covered: [iAs, Cd, Pb]
jurisdictions_covered: [US, EU, Canada, Codex, California-Prop65]
binding_thresholds:
  iAs:
    threshold_ppb: 100
    binding_jurisdiction: US
    binding_rule: fda-ctz-iAs-cereal-100ppb
    rationale: tightest-finalized-rule-applicable
  Cd:
    threshold_ppb: null
    binding_jurisdiction: null
    binding_rule: null
    rationale: no-rule-currently-applies
audience: [ops, regulator]
updated: 2026-04-22
---
```

Sections: How to read this matrix → Binding constraint per metal with reasoning → How thresholds compare across jurisdictions (two-column tables, one per metal) → Pending rules that would change the binding constraint → Sources.

The matrix references but does not duplicate per-rule pages. Per-rule pages remain the canonical home for any single rule.

---

## P8 — Add lint rules for ops coverage

**Rationale.** Without lint coverage, ops gaps compound silently. Six new rules to add to the existing thirteen.

**Where it touches CLAUDE.md.** Lint workflow section, appending after rule 13.

**Proposed additions:**

```
14. **Mitigation gaps** — ingredient pages with `contamination_profile.{metal}.status: populated` but `mitigation_options.{metal}.status: pending` or empty `interventions: []` with `status: populated` and `n_studies: 0` (genuine literature silence is fine but flagged softly).
15. **Sampling plan gaps** — product-category pages with no linked sampling plan in `testing/sampling-plans/`, or matrix pages referenced by certification work that lack a sampling plan.
16. **Supply-chain staleness** — supply-chain pages with `updated:` older than 12 months, especially equipment, packaging, and water routes where industry practice changes.
17. **Regulatory horizon refresh** — regenerate `regulations/horizon.md` from all per-rule pages with `status: proposed` or `status: draft-guidance`. Flag any such rule missing `expected_effective_date`.
18. **Cross-jurisdiction matrix gaps** — per-matrix pages missing a parallel jurisdiction that exists in `regulations/` for the same matrix; binding-threshold cells with stale or contradicted source data.
19. **Ops audience coverage** — pages typed as ingredient, supply-chain, testing, regulatory-matrix, or sampling-plan that do not include `ops` in their `audience:` array.
```

---

## P9 — Add operator's reference drafting workflow

**Rationale.** The defined workflows (ingest, bulk ingest, query, lint, certification, course, app, WikiBiome federation) cover every existing audience except ops. Without an explicit workflow, future sessions will not know what register to use, what structured fields to populate, or where the wiki/operator's-handbook line sits.

**Where it touches CLAUDE.md.** Workflows section, new subsection between "Course drafting" and "App-layer work."

**Proposed addition:**

```
### Operator's reference drafting

When writing or updating ops-facing content (mitigation_options, variance_profile, supply-chain pages, sampling plans, cross-jurisdiction matrices):

1. Stay in the literature register. Ops content reports what the published efficacy/variance/sampling literature supports; it does not become how-to instruction. "The published efficacy data for pre-cook rinsing of long-grain rice indicates iAs reduction of 10–30% (Smith 2024, Jones 2022)" is in register. "Rinse rice before cooking to reduce arsenic" is not. The decision support comes from how content is organized and what is surfaced, not from softening into prescriptive prose.
2. Populate the structured fields. Mitigation efficacy, variance, and sampling are designed to be machine-readable for the same reason `contamination_profile` is — courses, certification work, and the consumer app will consume them. Prose without structured fields is half the deliverable.
3. Quantify or defer. Every efficacy claim, variance estimate, and sampling recommendation must trace to A-tier or B-tier sources with sample sizes named. If the literature does not support a quantitative claim, say so explicitly (status: populated with empty interventions and n_studies: 0 is the right way to record literature silence). Never substitute practitioner intuition for cited evidence.
4. Watch the operator's-handbook line (see boundary section). Mitigation efficacy synthesis: wiki. Sampling plans rooted in published statistical work: wiki. Worksheets, calculators, supplier-qualification questionnaires, audit checklists: not wiki — they belong in courses or in a future operator's handbook property.
5. Cross-reference the certification layer where relevant. Mitigation options that move a commodity into HMT&C-achievable thresholds should link to the relevant certification page so the connection is visible. The wiki does not endorse the certification; it documents that the technical pathway exists.
```

---

## P10 — Add Ops to source page Implications block

**Rationale.** The source page template Implications block lists certification, courses, app, microbiome. It does not surface whether a source contributes mitigation-efficacy data, variance data, sampling guidance, or supply-chain insight. Without the prompt, ingest workflows will not flag ops-relevant findings for ops-relevant pages.

**Where it touches CLAUDE.md.** Source page template prose.

**Proposed change to the Implications section:**

Existing:
```markdown
## Implications
- Certification: ...
- Courses: ...
- App: ...
- Microbiome (if applicable): ...
```

Proposed:
```markdown
## Implications
- Certification: ...
- Courses: ...
- App: ...
- Ops (mitigation efficacy, variance data, sampling guidance, supply-chain route): ...
- Microbiome (if applicable): ...
```

---

## P11 — Add wiki/operator's-handbook boundary section

**Rationale.** Some ops-relevant deliverables (templates, worksheets, calculators, supplier-qualification questionnaires, audit checklists) are not literature synthesis — they are practitioner tooling. Putting them in the wiki erodes the literature register that makes the wiki defensible. CLAUDE.md already has the brand firewall and the future brand-intelligence build documented as boundary sections; the wiki/operator's-handbook line deserves the same treatment so future sessions do not drift across it.

**Where it touches CLAUDE.md.** New top-level section, parallel to "Brand-level data — hard firewall," before "Future build — private brand-intelligence wiki."

**Proposed section:**

```markdown
## Operator tooling — what belongs in the wiki and what does not

The wiki is literature-backed reference, written in literature register. Ops-facing synthesis (mitigation efficacy ranges, variance baselines, sampling guidance, cross-jurisdiction matrices, supply-chain route documentation) belongs here because it is genuinely synthesizable from peer-reviewed and regulatory sources, and because it makes the wiki uniquely valuable to layer-2 audit audiences.

Operator tooling — downloadable templates, calculators, worksheets, supplier-qualification questionnaires, internal audit checklists, decision-tree diagrams written as how-to — does not belong in the wiki. Tooling drifts into prescriptive register and consulting-deliverable shape, and eroding the literature register is the failure mode that costs the wiki its defensibility. Tooling belongs in:

- **Courses** — when the tool is part of structured education (a sampling-plan worksheet attached to a sampling module).
- **A future operator's handbook property** — separate property, separate access tier, written explicitly for practitioners. Out of scope for this build; documented here so the boundary is named.
- **HMT&C program documentation** — at heavymetaltested.com — where checklists and auditor guidance naturally live.

The wiki documents what the literature supports about, e.g., sampling for iAs in infant cereal. The operator's handbook would publish the worksheet a QA lead fills out to apply that guidance to their lot. Both can exist; they live in different properties.

When in doubt: if the deliverable is read as "here is what the published evidence supports," it is wiki. If the deliverable is read as "here is what to do," it is not.
```

---

## P12 — Update directory layout

**Rationale.** Directory layout in the Architecture section needs to reflect the new conventions so they are discoverable from the schema overview.

**Where it touches CLAUDE.md.** "Directory layout" subsection.

**Proposed additions** (insert into the existing tree):

```
wiki/
  ...
  testing/
    sampling-plans/   # per-matrix sampling guidance with statistical basis
  regulations/
    horizon.md        # auto-curated view of pending rules
    matrices/         # per-matrix cross-jurisdiction binding-threshold synthesis
  supply-chain/       # incidental contamination routes (template defined)
  ...
```

The existing entries for `testing/`, `regulations/`, and `supply-chain/` remain; the additions are subdirectories and one aggregation page.

---

## Open questions for Karen's decision

1. **Audience taxonomy granularity.** Single `ops` tag, or split into `ops` (manufacturing/QA daily operators) and `regaff` (regulatory affairs at brand-side, distinct from government `regulator`)? I proposed single `ops`; splitting later is easy if a need emerges. Splitting now adds lint surface and tagging burden for unclear gain.

2. **Variance structure location.** Separate `variance_profile` block (proposed) versus extending `contamination_profile` with by-origin/by-season fields. Separate keeps `contamination_profile` lean and signals variance as first-class; extending keeps related data physically adjacent. Either works.

3. **Sampling plans location.** Under `testing/sampling-plans/` (proposed) versus a top-level `wiki/sampling-plans/` directory. Under testing puts them adjacent to methods and reflects that sampling is a method-adjacent concern; top-level signals first-class importance. I prefer the proposed nesting; flag if you'd rather elevate.

4. **Operator's handbook future build.** P11 documents the boundary but does not propose building the operator's handbook now. Worth a separate strategic conversation about whether/when that property gets stood up — particularly whether courses absorb that role or whether it warrants its own property like the brand-intelligence build.

5. **Mitigation status semantics.** I mirrored `contamination_profile`'s three-state system (`pending` | `in_progress` | `populated`) for mitigation. Is the parallel useful, or does mitigation need its own state model (e.g., distinguishing "intervention exists in literature" from "efficacy quantified")? My instinct is parallel-with-`contamination_profile` keeps the schema coherent, but worth your call.

---

## How to apply, when you're ready

1. Read the full proposal. Push back on anything that feels wrong, particularly anything that risks softening the literature register or blurring the wiki/HMT&C firewall.
2. Resolve the five open questions above.
3. Either I produce a final clean CLAUDE.md with all changes integrated, or we apply changes incrementally section-by-section. Recommendation: clean rewrite, single commit, since the changes are coherent and an incremental application would muddle the diff history.
4. Log the schema change in `log.md` as `## [2026-04-25] schema | claude-md-ops-layer — added ops audience layer and supporting structures`.
5. Commit. CLAUDE.md is the constitution; the commit message should be substantive.

After application, the next step is the kickoff workflow described in CLAUDE.md (manifest from your first batch of PDFs, top-level skeleton proposal, then ingest in priority order).
