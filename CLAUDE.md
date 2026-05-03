# CLAUDE.md — Heavy Metal Index Wiki

## Why this wiki exists (read this first)

This wiki is not a documentation project. It is commercial infrastructure for the Paleo Foundation's Heavy Metal Tested & Certified (HMT&C) program, which is the revenue engine. Every design choice in this document is made in service of that purpose, and future design choices should be evaluated against it.

The strategic logic in one paragraph: operating a curated corpus of the complete heavy metals food-and-supply-chain literature gives the Paleo Foundation epistemic asymmetry. In any dispute — with a hostile brand, a plaintiff's expert in a class action, a regulator questioning HMT&C thresholds, or a competing standards body — the side that can credibly say "we have reviewed the complete literature and here is what it says" dominates any side that can only cite selected papers. This is the dynamic that gives Cochrane systematic reviews their authority in medicine. Heavy Metal Index is positioning to be Cochrane for heavy metals in food.

The three audience layers this unlocks, in order of pricing power:

1. **Brand founders and marketing leads** (layer one). Small-to-mid brands. Already handled by current infrastructure. Certification fees low-to-moderate.
2. **Brand regulatory affairs and quality assurance teams** (layer two). They check whether the scientific basis is traceable to peer-reviewed literature. This wiki is what they'll audit. Infrastructure must survive their due diligence.
3. **Brand legal teams preparing for class-action scenarios** (layer three). They price certification as litigation insurance. "The standards rest on self-published reports on the certifier's own website" is the attack line a plaintiff's expert will use if this wiki isn't defensible. Making that line unavailable is this wiki's job.

Adjacent audiences that compound the value: retailers (Whole Foods, Sprouts, Target approved-certification lists), regulators (FDA Closer to Zero public comments, state AG offices), and journalists (Consumer Reports, NYT, congressional hearings all quote whoever operates the canonical reference).

**Deliberate architectural separation.** The wiki lives at `heavymetalindex.com`. The certification program lives at `heavymetaltested.com`. These are separate properties by design. The wiki reports what the literature says; the certification program applies those findings to set standards. Keeping them architecturally separate is what lets the wiki remain defensible when HMT&C standards are challenged — the wiki is not the certifier's self-published justification, it is an independent reference that the certifier happens to operate. One-way cross-linking is fine (HMT&C documents can cite wiki pages); the wiki does not endorse or even mention HMT&C-certified brands.

**Database-rights positioning.** The Paleo Foundation operates from Cyprus. EU database-rights law provides stronger protection for curated databases than US equivalents. This is a structural advantage to design around, not incidental. Terms of service, access controls, and commercial licensing will leverage this.

## The wiki/HMT&C relationship (critical, read before editing)

The wiki and HMT&C operate in **different epistemic registers**, and keeping them in those registers is the single most important thing this document asks of you.

**The wiki reports what the peer-reviewed and regulatory literature supports.** That's its whole job. It does not advocate, it does not market, it does not harmonize with HMT&C, it does not soften claims that make HMT&C look weak, and it does not strengthen claims to make HMT&C thresholds look more evidence-based than the literature supports.

**HMT&C sets certification thresholds that can be tighter than the literature floor, by design.** HMT&C is explicitly a ratcheting program — its purpose is to drive market change by certifying to standards tighter than status quo regulatory floors, so that certified products pull the category toward cleaner product over time. HMT&C thresholds being tighter than what the literature strictly mandates is a feature of the program, not a bug. The gap between what the wiki says the science supports and what HMT&C certifies to is deliberate and should be visible, not hidden.

**This means there are two directions of drift to watch for, and both destroy defensibility equally.**

The first direction: softening wiki claims to hide the gap between literature and HMT&C thresholds. Example: literature supports 5 ppb as the concentration at which toxicological effects become concerning for infants; HMT&C certifies at 10 ppb for feasibility reasons; future Claude session writes the wiki to suggest 10 ppb is "safe" to make HMT&C look aligned with science. This corrupts the wiki into marketing for HMT&C and destroys the epistemic asymmetry argument.

The second direction: strengthening wiki claims to make HMT&C thresholds look more evidence-based than literature supports. Example: HMT&C sets an aggressive 2 ppb threshold for market-ratcheting reasons; future Claude session finds marginal studies suggesting 2 ppb is where effects start, overweights them in the wiki synthesis, and presents the threshold as consensus science when it is actually a policy choice. This corrupts the wiki into justification for HMT&C decisions and destroys its independent authority.

**The rule.** The wiki says what the literature supports, honestly. HMT&C certification pages reference the wiki for the literature baseline and explain the rationale for any deviation — precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment. The gap is stated, not hidden. The gap is the point; it is how ratcheting works.

When in doubt about whether a proposed edit softens or strengthens a wiki claim in a direction that serves HMT&C rather than the literature, stop and ask Karen. This is the single most important form of drift to catch, and Claude sessions drift in this direction naturally because it feels helpful. It is not helpful. It is the failure mode that, if it happens unchecked, makes the whole strategic architecture collapse.

## Purpose (the products this wiki serves)

This is the project schema for the Heavy Metal Index living wiki, maintained by Claude in collaboration with the Paleo Foundation team. The wiki is the shared knowledge substrate behind four products:

1. **Heavy Metal Tested & Certified program** (Paleo Foundation, at heavymetaltested.com) — evidence base for certification criteria, limits, and auditor guidance. References the wiki one-way.
2. **Journal of Food Metallomics** (at heavymetaltested.com/journal-of-food-metallomics) — peer-reviewed publication venue for synthesis work that builds on the wiki. The wiki is the corpus; the journal publishes synthesis of the corpus.
3. **Educational courses** for brands, suppliers, co-packers, QA teams, and supply-chain operators. Course content cross-references the wiki; doesn't duplicate it.
4. **A future consumer app** that estimates heavy metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. The app consumes `contamination_profile` blocks from ingredient pages as structured data.

Secondary: **federation with WikiBiome** (wikibiome.com) — microbiome material that relates to heavy metal exposure lives here in draft form and is lifted to WikiBiome with minimal edits. WikiBiome is the canonical home for microbiome content; this wiki hosts heavy-metals-and-microbiome content because it touches the metals domain directly.

Public-facing destination: **heavymetalindex.com**. Pages should be written so that with light editing they can be published there.

You (Claude) own the wiki. I curate sources, ask questions, and decide direction. You do the reading, summarizing, cross-referencing, filing, and maintenance. I read in Obsidian while you work; treat that as a live code review.

## Architecture

Three layers:

- **`raw/`** — immutable source documents. PDFs of studies, agency reports, clipped articles, lab data, images. Never modify anything here. Treat as append-only source of truth.
- **`wiki/`** — everything you write. Markdown pages, interlinked, organized by the taxonomy below. You own this layer entirely.
- **`CLAUDE.md`** (this file) — conventions, workflows, page templates. We co-evolve this as we learn what works.

**Version control.** The wiki is in git. Commit after every ingest, query, lint, or schema change. Commit messages follow the `log.md` format (see below). Git history is the versioning mechanism — the `updated:` frontmatter field is a convenience, not the source of truth. When a wiki page is cited in future HMT&C documentation, litigation response, or regulatory submission, it must be possible to reconstruct exactly what the page said on a specific date. Git handles this if we commit disciplined. Do not skip commits because "nothing much changed."

### Directory layout

```
raw/
  studies/            # peer-reviewed papers (PDFs)
  reports/            # FDA, EFSA, WHO, EPA, Codex, Consumer Reports, HBBF, etc.
  industry/           # trade publications, brand statements, COAs
  news/               # news articles, press releases
  lab-data/           # COAs, test results, internal data
  assets/             # images, figures extracted from sources
wiki/
  index.md            # master catalog, organized by category
  log.md              # append-only chronological log
  overview.md         # top-level synthesis for newcomers
  synthesis.md        # evolving thesis / current best understanding
  metals/             # one page per metal (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Sb, U...)
  ingredients/        # commodity risk profiles (rice, cocoa, spinach, carrots, whey, etc.)
  products/           # product-category pages (baby food, protein powder, chocolate, tea, seafood)
  supply-chain/       # soil, water, fertilizer, equipment, packaging, storage
  regulations/        # one page per jurisdiction/rule (FDA-CTZ, EU-2023-915, Prop65, BFSA, Codex)
  testing/            # ICP-MS, AAS, XRF, speciation methods, sampling plans, LODs
  health/             # toxicology, exposure routes, vulnerable populations, dose-response
  microbiome/         # metal–microbiome mechanisms, WikiBiome crosswalk pages
  certification/      # HMT&C program pages — proposed criteria, auditor notes, gap analyses vs FDA/EU/Codex
  courses/            # course outlines, module pages, learning objectives
  app/                # app-model pages: ingredient→risk mappings, recipe inference logic
  sources/            # one page per source document (summary + metadata + cite key)
  queries/            # filed answers to questions I've asked (compounding exploration)
  lint/               # lint reports, contradiction logs, gap lists
```

## Page templates

Every wiki page starts with YAML frontmatter. Fields vary by page type but always include `type`, `updated`, `sources`, and `audience`.

### Source page (`wiki/sources/<cite-key>.md`)

```yaml
---
type: source
cite_key: smith2024-rice-arsenic         # author-year-slug, used as canonical handle
title: "Inorganic arsenic in US rice, 2020–2023"
authors: [Smith J, Doe A]
year: 2024
publication: "Environ Sci Technol"
doi: 10.xxxx/xxxxx
source_type: peer-reviewed                # peer-reviewed | gov-report | industry | ngo | news | lab-data
evidence_tier: A                          # A (peer-reviewed/gov) | B (industry/NGO) | C (news/blog)
raw_path: raw/studies/smith2024.pdf
metals: [iAs, tAs]
ingredients: [rice, rice-syrup, rice-flour]
products: [baby-cereal, rice-milk]
jurisdictions: [US]
updated: 2026-04-22
---
```

```markdown
# Smith et al. 2024 — Inorganic arsenic in US rice

## TL;DR
[2–4 sentences: what they measured, what they found, why it matters.]

## Key numbers
[Pull exact figures: sample sizes, means, 95th percentiles, LODs, geographic breakdown. Include page/table references.]

## Methods (brief)
[Analytical method, speciation or total, sample prep, LOD/LOQ. Flag any limitations.]

## Implications
- Certification: ...
- Courses: ...
- App: ...
- Microbiome (if applicable): ...

## Wiki pages updated on ingest
- [[metals/arsenic-inorganic]]
- [[ingredients/rice]]
- [[products/infant-rice-cereal]]
- [[regulations/fda-closer-to-zero]]
```

### Metal page (`wiki/metals/<metal>.md`)

```yaml
---
type: metal
symbol: Pb
name: Lead
species: [Pb2+, tetraethyl-lead]
audience: [regulator, educator, consumer]
microbiome_relevance: high                # for WikiBiome federation
wikibiome_crosswalk: [gut-lead-axis, lead-dysbiosis]
updated: 2026-04-22
sources: 0                                # bump on every ingest that touches this page
---
```

Sections: Overview → Toxicology → Typical exposure routes → Food sources (linked to `ingredients/`) → Regulatory limits (linked to `regulations/`) → Testing (linked to `testing/`) → Microbiome effects (linked to `microbiome/`) → Vulnerable populations → Open questions → Sources.

### Ingredient page (`wiki/ingredients/<commodity>.md`)

This is the backbone of the future app. Keep it structured.

```yaml
---
type: ingredient
commodity: rice
aliases: [rice flour, rice syrup, brown rice syrup, rice protein, rice starch]
category: grain
contamination_profile:
  Pb:
    status: pending                # pending | in_progress | populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null               # low | medium | high (only meaningful when status: populated)
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-uptake, flooded-paddy, geography, cultivar, processing]
lower_risk_variants: [basmati-india, california-rice]
higher_risk_variants: [brown-rice, rice-bran, rice-protein-concentrate]
used_in_products: [infant-cereal, rice-milk, gluten-free-baking, protein-powder, crackers]
audience: [regulator, educator, consumer, app]
updated: 2026-04-22
---
```

Sections: Why this commodity accumulates [metal] → Ranges by source/region/variety → Processing effects (polishing, rinsing, parboiling) → Ingredient-derivative risk (bran > whole > white; syrup concentrates) → Mitigation options → Regulatory limits that apply → Sources.

The `contamination_profile` block is deliberately machine-readable. The app will consume it directly.

**The three-field state system is the core design.** Each metal sub-block has two orthogonal concepts that must not be conflated:

- **`status`** is the data-state field. It answers: have we researched this combination yet?
  - `pending` — template placeholder, no research done yet. Values are `null`. This is the initial state for every metal on every new ingredient page.
  - `in_progress` — research started, some values populated, review incomplete. Used when an ingest has touched the ingredient but additional sources are expected or pending.
  - `populated` — research complete. Values reflect the current best understanding of the literature as of `last_reviewed`.

- **`confidence`** is the evidence-state field. It answers: given the research we have done, how much of it is there and how consistent is it?
  - Only meaningful when `status: populated`. When `status: pending` or `in_progress`, `confidence` is `null`.
  - `low` — 1–2 studies, or wide disagreement among sources.
  - `medium` — 3–10 studies, moderate agreement.
  - `high` — more than 10 studies, strong agreement.

- **`n_studies`** is the count of A-tier or B-tier sources contributing to the values. `n_studies: 0` with `status: populated` is a legitimate finding — it means the literature is silent on this combination, and the app should treat it as a data gap rather than as "probably clean." `n_studies: 0` with `status: pending` is simply the template default.

This structure resolves what would otherwise be a persistent lint-noise problem (every new ingredient page born in a lint-failure state). It also surfaces a real-world distinction that matters for the app: genuine data gaps behave differently from unprocessed templates, and the consumer app should communicate that difference honestly.

### Product-category page (`wiki/products/<category>.md`)

```yaml
---
type: product-category
category: infant-rice-cereal
typical_ingredients: [rice-flour, rice-cereal, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-iAs-cereal-100ppb, eu-2023-915]
updated: 2026-04-22
---
```

Sections: Why this category is high-risk → What drives variance across brands → How the app would estimate risk from an ingredient list → Historical recalls/enforcement (frame as regulatory events, not brand rankings — see firewall below) → Sources.

### Regulation page (`wiki/regulations/<rule-id>.md`)

```yaml
---
type: regulation
rule_id: fda-ctz-iAs-cereal-100ppb
jurisdiction: US
agency: FDA
program: Closer to Zero
metal: iAs
matrix: infant-rice-cereal
limit_value: 100
limit_unit: ppb
status: finalized                         # proposed | draft-guidance | finalized | enforced
effective_date: 2023-08-01
sunset_date: null
source_refs: [fda2023-ctz-guidance]
updated: 2026-04-22
---
```

Sections: Scope → Exact limit and units → How tested (official method) → Enforcement posture → History of changes → How it compares to EU / Codex / state law → Sources.

Always cross-link to the parallel rules in other jurisdictions. **Never silently substitute or round regulatory values** — preserve the exact values from the agency source. If a value is ambiguous in the source, note the ambiguity rather than resolving it unilaterally.

### Testing method page (`wiki/testing/<method>.md`)

Sections: Principle → What it measures (and what it doesn't — e.g., total vs speciated As) → Typical LOD/LOQ for each metal → Sample prep pitfalls → Cost/throughput → When to choose this method → Sources.

Speciation deserves its own page — `testing/arsenic-speciation.md` — because the regulatory and health distinction between inorganic and organic arsenic is central to the whole domain.

### Microbiome page (`wiki/microbiome/<topic>.md`)

```yaml
---
type: microbiome
wikibiome_crosswalk: <slug>               # anticipated slug on wikibiome.com
metals: [Pb, Cd]
mechanism: [barrier-disruption, taxa-shift, SCFA-reduction]
disease_links: [IBD, metabolic-syndrome]
updated: 2026-04-22
---
```

Sections: Mechanism of action → Taxa-level effects (with genus/species) → Functional/metabolic consequences → Human vs animal evidence → Disease-process implications → Sources.

These pages should be written so they can be lifted into WikiBiome with minimal edits. Use WikiBiome's conventions for taxon naming when confirmed.

**Scope discipline.** Microbiome content belongs here only when the primary link is metal exposure. General microbiome mechanisms (without a metals angle) belong on WikiBiome. When in doubt, ask Karen.

### Certification page (`wiki/certification/*.md`)

For the Paleo Foundation HMT&C program. Include proposed limits, tier definitions (e.g., standard / infant-grade / ultra), sampling plans, auditor checklists, decision trees, and gap analyses against FDA/EU/Codex.

**These pages reference wiki evidence; they do not define wiki evidence.** When an HMT&C page specifies a threshold, it should cite the wiki for the literature baseline and explicitly state the rationale for any deviation:

- **Precautionary** — the threshold is tighter than the literature floor because vulnerable populations, cumulative exposure, or uncertainty warrant a safety margin beyond what minimum-effect-level data supports.
- **Market-ratcheting** — the threshold is tighter than the literature floor because the certification program's purpose is to move the market toward cleaner product; the threshold is a policy choice, not an assertion about where toxicological effects begin.
- **Feasibility-driven** — the threshold is looser than the literature floor because current analytical methods, supply chain realities, or achievable agricultural practice don't yet support the tighter value. Paired with a sunset plan to tighten as feasibility improves.
- **Regulatory-alignment** — the threshold matches an external regulatory framework (FDA, EU, Codex) for commercial or legal reasons, whether or not that framework aligns with the literature.

The deviation itself is fine and often intentional. Silently softening the wiki to hide the deviation, or strengthening the wiki to make the deviation look evidence-based, is the failure mode. State the rationale; do not paper over the gap.

### Course page (`wiki/courses/*.md`)

Each course has an outline page and module pages. Module pages include: Learning objectives → Core content (drawn from wiki pages via transclusion or links) → Case studies (linked to `sources/` and `products/`) → Quiz items → Further reading. Keep content DRY — module pages should link into the canonical wiki pages, not duplicate them.

### App-model page (`wiki/app/*.md`)

This is where we codify the logic for the ingredient-list → contamination-risk estimator. Key pages:

- `app/ingredient-mapping.md` — how raw ingredient-list strings map to `ingredients/` pages (synonyms, parenthetical modifiers, "organic", country of origin).
- `app/recipe-inference.md` — how ingredient-order + nutrition-facts back-solve approximate proportions.
- `app/risk-scoring.md` — how per-ingredient contamination profiles combine into a per-serving estimate, with uncertainty.
- `app/vulnerable-population-flags.md` — when to flag for infants, pregnancy, frequent consumers.
- `app/disclaimer-language.md` — careful consumer-facing wording that educates without overclaiming.

## Audience layering

Every substantive page carries `audience: [regulator, educator, consumer, app]` in frontmatter. Within long pages, you can tag sections:

```markdown
## Mechanism
<!-- audience: educator, regulator -->
[technical content]

## What this means for families
<!-- audience: consumer -->
[plain-language content]
```

This lets us render the same wiki three ways without maintaining three wikis.

**Consumer translation is dose-and-population-specific.** This is the highest-risk interpretive work in the wiki. "Rice contains small amounts of inorganic arsenic" is true for an adult with a varied diet and false for an infant on rice cereal. Consumer-audience sections must specify dose, population, and consumption frequency. Never use undefined qualifiers ("small," "trace," "safe," "dangerous") without a quantitative anchor. When a consumer-audience section makes a claim, the same claim should be traceable upward to the technical sections and downward to the source. If a plaintiff's expert or defense expert reads your consumer language, they should find it specific, defensible, and free of both fear-mongering and false reassurance.

## Evidence grading

Every source gets an `evidence_tier`:

- **A** — peer-reviewed primary studies, government reports (FDA/EFSA/EPA/WHO/Codex), authoritative meta-analyses.
- **B** — industry white papers, NGO reports (HBBF, Consumer Reports, EWG), reputable trade publications, conference proceedings.
- **C** — news articles, blog posts, press releases, social-media claims.

Synthesis pages should lean on A, use B with attribution, and treat C as leads to verify rather than as evidence. Courses and certification criteria should cite A-tier sources.

Flag contradictions explicitly. If a B-tier source conflicts with an A-tier source, note both and explain. Don't silently average.

## Workflows

### Ingest a new source

When I drop a file into `raw/` and say "ingest this":

1. **Read it.** For PDFs, actually extract and read the text. For images/figures, view them.
2. **Tell me the TL;DR first** — 3–5 sentences, before writing anything. Wait for my reaction so I can redirect if needed.
3. **Create the source page** at `wiki/sources/<cite-key>.md` using the template.
4. **Identify affected pages** — which metals, ingredients, products, regulations, testing methods, microbiome topics, certification criteria does this touch? List them for me.
5. **Update each affected page.** Weave in new findings. If a claim is superseded, don't just overwrite — note the change (e.g., "Earlier estimates of 250 ppb (Jones 2019) have been revised to 180 ppb by Smith 2024.") and flag contradictions. When updating an ingredient's `contamination_profile`, advance `status` from `pending` to `in_progress` or `populated` as appropriate, and populate `confidence`, `n_studies`, and `last_reviewed` when moving to `populated`.
6. **Update `index.md`** with the new source page and any newly created pages.
7. **Append to `log.md`** using the format: `## [YYYY-MM-DD] ingest | <cite-key> — <title>` followed by a short note on what changed.
8. **Commit to git.** Message format matches the log entry.
9. **Report back** with a summary of pages touched and any open questions the source raises.

Bias toward surfacing surprises. If a new study contradicts the wiki's current synthesis, say so loudly.

### Bulk ingest

When I drop many PDFs at once:

1. First, produce a manifest — one line per file with inferred title, year, topic, and priority — and wait for my go-ahead.
2. Process in priority order. After every ~5 sources, pause and summarize what's changed.
3. Keep `log.md` entries per-source so the history stays granular.
4. Commit after each source or each small batch — not one giant commit at the end.

### Query

When I ask a question:

1. Read `index.md` first to locate relevant pages.
2. Read those pages. If needed, drill into `sources/` for primary evidence.
3. Answer with citations to wiki pages (which link onward to sources).
4. Ask me: "Should I file this as a page?" For anything substantive, the answer is usually yes. File under `wiki/queries/<YYYY-MM-DD>-<slug>.md` with frontmatter linking to the pages it drew from.
5. Append a short query entry to `log.md` and commit.

Output format can vary by question: markdown page, comparison table, chart (matplotlib), slide deck (Marp), decision tree. Use your judgment; ask if unclear.

### Lint

When I say "lint the wiki":

1. **Contradictions** — claims across pages that disagree. List with page references.
2. **Stale claims** — pages that cite only pre-2020 sources in fast-moving areas, or pages not updated after a newer source was ingested that should have touched them.
3. **Orphans** — pages with no inbound links.
4. **Missing pages** — concepts/entities mentioned ≥3 times with no dedicated page.
5. **Broken cross-references.**
6. **Regulatory drift** — `regulations/` pages older than 6 months that should be re-checked against agency websites.
7. **Evidence-tier imbalance** — synthesis pages leaning on B/C sources where A-tier exists.
8. **Data gaps** — ingredient profiles with `status: pending` or `status: in_progress` or `confidence: low` **that are referenced by other pages or by the app layer**. Orphaned template states don't trigger. Genuinely populated-but-sparse states (`status: populated` with `n_studies: 0` or `confidence: low`) trigger with a softer flag — they are real findings, not errors, but deserve attention if the app depends on them.
9. **Staleness on populated profiles** — ingredient profiles with `status: populated` and `last_reviewed` older than 18 months.
10. **Microbiome crosswalk gaps** — metal pages marked `microbiome_relevance: high` with no corresponding `microbiome/` page.
11. **Certification-evidence gaps** — HMT&C pages proposing limits that rest on fewer than 3 A-tier sources, OR that deviate from cited literature without an explicit rationale tag (precautionary/market-ratcheting/feasibility-driven/regulatory-alignment).
12. **Consumer-translation integrity** — consumer-audience sections making claims that don't trace cleanly to the technical sections on the same page.
13. **Uncited claims** — substantive claims with no inline `[[sources/<cite-key>]]` link in the same paragraph as the claim. Triggers on toxicology assertions, mechanism explanations, concentration values and ranges, regulatory thresholds, processing effects, regional variation claims, comparisons across categories, and recall or enforcement summaries. Does not trigger on stub placeholder language (`pending ingest`), navigational and audience-tagging text, or definitional sentences that name a category without asserting a finding. Claims already marked `<!-- UNCITED -->` are tracked as a remediation queue rather than counted as new findings — list them so they don't fall off the radar, but separate them from new uncited claims discovered this pass. Pages relying on a Sources section at the bottom for attribution rather than inline citations fail this check across the board.
14. **Suggest next sources** — based on the gaps, propose 5–10 specific papers/reports to seek out.

File the lint report at `wiki/lint/<YYYY-MM-DD>-lint.md`, append to `log.md`, and commit.

### Certification-criteria drafting

When working on HMT&C program pages:

1. Always root proposed limits in both toxicology (`health/`) and feasibility (what achievable levels look like in real-world testing data from `ingredients/` and `sources/`).
2. Show your work: cite the studies, show the distributions, show where the proposed limit sits on that distribution (e.g., "80th percentile of current market").
3. Compare against FDA, EU, Codex, California Prop 65, and the Baby Food Safety Act (if applicable).
4. Flag sampling plan implications — a limit is only as good as its sampling and method.
5. **Name the rationale for any gap between literature and proposed limit.** Tag with one of: precautionary, market-ratcheting, feasibility-driven, regulatory-alignment. The gap itself is fine and often intentional. Failing to name the rationale is the lint failure.

### Course drafting

When writing course content:

1. Start from learning objectives, not from existing wiki content.
2. Link into canonical wiki pages rather than duplicating. If a wiki page isn't educator-friendly enough, improve the wiki page (with an `audience: educator` section) rather than forking content into the course.
3. Every technical claim in a course must trace through the wiki to an A- or B-tier source.

### App-layer work

When working on `wiki/app/` pages:

1. Keep ingredient frontmatter machine-readable and consistent. The app will parse these directly.
2. When `contamination_profile` values change, advance or update `status`, bump `last_reviewed`, bump the page `updated` field, log why, and commit.
3. Document uncertainty explicitly — ranges, confidence levels, number of underlying studies. The app must never report a point estimate it can't defend.
4. The app must handle `status: pending` gracefully — either by excluding the ingredient from the estimate, by communicating "not yet characterized" to the user, or by falling back to category-level defaults. Never silently substitute a null for a zero.

### WikiBiome federation prep

When writing `microbiome/` pages or microbiome sections of metal pages:

1. Use `wikibiome_crosswalk` slugs in frontmatter — treat them as stable anchors for future federation.
2. Prefer mechanistic framing: exposure → microbiome change → functional consequence → disease process.
3. Name taxa at genus or species level where the source supports it; don't aggregate up to phylum unless that's what the source did.
4. Keep these pages self-contained enough to be lifted into WikiBiome without requiring the rest of our wiki as context.

## `index.md` structure

Organized by category, each entry is: `- [[path/page]] — one-line summary (N sources).`

Sections: Overview & synthesis → Metals → Ingredients → Product categories → Regulations (by jurisdiction) → Supply chain → Testing methods → Health & toxicology → Microbiome → Certification → Courses → App model → Queries → Sources (chronological).

Update on every ingest. If the index gets long (>500 entries), split into `index.md` + per-category index files and link between them.

## `log.md` format

Append-only. Each entry:

```markdown
## [YYYY-MM-DD] <op> | <handle> — <short title>
Pages touched: [[a]], [[b]], [[c]]
Notes: <1–3 sentences on what changed or what I learned>
```

Where `<op>` is `ingest | query | lint | certification | course | app | schema`. Consistent prefix means `grep "^## \[" log.md | tail -20` gives a clean recent history. Git commit messages mirror log entries.

## Conventions

- **Units.** Always ppb (µg/kg) for food matrices unless a source uses different units, in which case convert and note the original. Always specify wet weight vs dry weight.
- **Metal names.** Use Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sb, U. Spell out on first use per page. iAs vs tAs distinction is non-negotiable — never conflate.
- **Dates.** ISO-8601 (YYYY-MM-DD) everywhere.
- **Cite keys.** `<firstauthor><year>-<slug>`, lowercase, hyphenated. One cite key per source, globally unique.
- **Links.** Use Obsidian wikilinks `[[path/page]]`. Prefer linking to canonical pages over duplicating content.
- **Inline citations.** Every substantive claim must be followed by a wikilink to its source page in the same paragraph as the claim, using the form `[[sources/<cite-key>]]`. "Substantive" includes toxicology assertions, mechanism explanations, concentration values and ranges, regulatory thresholds, processing effects, regional variation claims, comparisons across categories, and recall or enforcement summaries. The Sources section at the bottom of a page is a roll-up index, not a substitute for inline attribution; a page that aggregates citations only at the bottom does not satisfy this rule. Three categories of sentence are exempt: stub placeholder language ("pending ingest of CXC 81-2022"), navigational and audience-tagging text, and definitional sentences that name a category without asserting a finding ("Cocoa is the seed of Theobroma cacao"). Everything else requires an inline citation. If a claim cannot be sourced, do one of three things — find the source and add it, mark the claim `<!-- UNCITED -->` inline so the next lint pass surfaces it, or remove the claim. Never invent a citation, paraphrase a non-existent source, or attach a wikilink that doesn't actually support the claim.
- **Numbers.** Always include sample size and method when citing a concentration. "Rice has high arsenic" is not a wiki-quality claim; "FDA TDS 2014 found mean iAs of 92 ppb (n=76) in white rice by ICP-MS with HPLC speciation" is. **Verify every numeric claim against the source before writing it. Do not round, approximate, or harmonize values across sources — preserve the actual numbers.**
- **Regulatory values.** Never silently substitute or round a regulatory threshold. FDA's action level for iAs in infant rice cereal is 100 ppb, not "approximately 100 ppb" and not "about 0.1 ppm" — cite the exact value from the agency source and note the unit the agency used. If you need to convert units for comparison, show both.
- **Uncertainty.** When you don't know or sources disagree, say so. Under-claim rather than over-claim. This is a certification/consumer-safety domain; false confidence is the biggest risk.
- **Consumer language.** In `audience: consumer` sections, avoid jargon, avoid fear-mongering, be specific about dose and population. The goal is informed decisions, not panic.

## Writing style for wiki content

This specification document (CLAUDE.md) uses bullets because it is genuinely list-shaped — conventions, lint rules, workflow steps, directory layouts. Wiki content itself is different. The wiki must read as authoritative scientific reference, not as internal documentation or marketing summary. The register you're aiming for is Cochrane review, EFSA scientific opinion, or WHO monograph.

**Default to prose paragraphs for narrative sections.** This includes overview, mechanism, implications, discussion of contradictions, synthesis, consumer translations, and any section that presents reasoning rather than enumerating facts. Prose signals considered analysis; bullets signal slides or notes. A future reader — plaintiff's expert, defense counsel, FDA reviewer, journalist — will form a judgment about the wiki's authority within the first page they read. Prose produces the correct judgment.

**Bullets require justification.** Before using a bullet list in wiki content, pause and ask: is this content genuinely enumerative — three to seven discrete parallel items with no analytical connective tissue between them? If yes, bullets are appropriate. If you're reaching for bullets to flatten analysis into items because it feels easier, stop and write prose instead.

**Legitimate uses of bullets in wiki content.**

- Enumerated regulatory values or thresholds across jurisdictions
- Stepwise procedures (testing methods, sampling plans, mitigation options)
- Section tables of contents at the top of long pages
- Parallel lists of discrete items (taxa, ingredients in a category, vulnerable populations)
- Audience tagging metadata

**Illegitimate uses of bullets in wiki content.**

- Summaries of individual studies (use prose, with full citation)
- Explanations of mechanisms (use prose, develop the argument)
- Synthesis paragraphs (use prose, make the connections)
- Consumer-facing explanations of risk (use prose, contextualize the dose)
- Implications sections (use prose, reason through the implications)

**Structured data belongs in frontmatter YAML or two-column tables, not in bullets.** Regulatory limits, concentration values, study details, test method parameters are reference data, not analytical claims. They go in YAML where the app can parse them or in two-column tables where humans can scan them. Multi-column tables are discouraged because they render poorly on mobile and in narrow Obsidian panes; if you think you need a multi-column table, consider whether the data should be split across several two-column tables or represented as structured YAML.

**Avoid em dashes.** Use commas, semicolons, periods, or parentheticals instead. Em dashes are fine inside direct quotes and citation text; do not introduce them in your own writing.

**No bolded words inside running prose for emphasis.** Bold is for headings and for explicit labels (e.g., the start of a definition). Inline bold for emphasis creates a marketing-copy register that undermines authority.

## Handling images and figures

Some sources (especially agency reports and COAs) have critical information in figures and tables. When ingesting:

1. Read the text first.
2. Then explicitly view the figures/tables that matter.
3. If a figure contains data we need structured (e.g., a concentration distribution), transcribe it into a markdown table on the source page.
4. Store extracted images in `raw/assets/<cite-key>/` if the source doesn't already have them attached.

## Things I want you to proactively do

- **Flag regulatory changes.** If during a web-augmented query you discover an FDA/EU/Codex update we don't yet have, tell me and suggest an ingest.
- **Suggest new sources.** At the end of any substantial ingest or query, propose 2–5 papers/reports to read next and why.
- **Propose schema changes.** If this file is getting in the way or missing something, say so. We evolve it together.
- **Call out weak spots.** If an ingredient page is driving app logic on the back of a single 2015 study, say so. If an HMT&C proposed threshold is driven by weak evidence, say so more loudly — those have direct commercial and legal consequences.
- **Maintain the synthesis.** `wiki/synthesis.md` should reflect our current best understanding. Update it when ingests move the needle. If I haven't asked you to update it in a while, ask whether it's time.
- **Protect both directions of drift.** If you notice the wiki softening claims to cover for HMT&C, flag it. If you notice the wiki strengthening claims to justify HMT&C thresholds beyond what the literature supports, flag it. Both destroy the epistemic asymmetry that this project depends on.

## Out of scope (for now)

- Writing original lab procedures (we'll source these from validated methods).
- Regulatory advice for specific brands (we can summarize rules, not prescribe compliance).
- Medical claims (we describe mechanisms and exposures; we don't diagnose or treat).

## Brand-level data — hard firewall

Brand-specific lab results, COAs, and internal test data **do not live in this wiki**. This wiki is the public-facing knowledge base behind heavymetalindex.com, the HMT&C program's published criteria, and courses. Brand-identifying contamination data in any of those channels creates legal and commercial risk we're not taking on.

**Rules:**

- **No `wiki/brands/` directory.** If a source names brands in its findings (e.g., Consumer Reports rankings, HBBF brand tables, FDA recall notices), summarize the category-level and ingredient-level signal on the relevant `products/` or `ingredients/` page. Do not create brand pages and do not list brand-by-brand values in the wiki.
- **Recalls and enforcement actions** are fine to name on `regulations/` and `products/` pages because they're already public record — but frame them as regulatory events, not as brand rankings.
- **Published third-party testing** (Consumer Reports, HBBF, etc.) can be cited as sources, and their methodology can be discussed, but don't reproduce their brand-level tables into the wiki. Link to the source page instead.
- **COAs and internal lab data** belong in the private build described below, not here. If I drop a COA into `raw/` by accident, flag it and ask before ingesting.
- **HMT&C certified brands are never mentioned in the wiki.** Not in page bodies, not in examples, not in case studies. The wiki is evidentially separate from the certification program; treating it as promotional infrastructure for HMT&C would destroy the defensibility argument this whole project rests on.

If you're ever unsure whether something crosses the line, ask before writing.

## Future build — private brand-intelligence wiki

Separate, private project. **Not this repo.** Documented here so the context isn't lost.

**Purpose.** An internal-only wiki that ingests brand-level lab data (COAs, Consumer Reports tables, HBBF datasets, HMT&C program testing results, and — pending a partnership conversation — Light Labs data) and builds a structured picture of how brands actually perform on Pb, Cd, iAs, and tHg across product categories. Used internally to identify outliers, benchmark the certification program, spot category-wide problems, and inform which ingredients and products the public wiki should prioritize.

**Why separate.** Different audience (internal only), different legal posture (brand-identifying data), different retention rules, different access controls. Keeping it in its own repo means the public wiki can never accidentally leak brand-level specifics through a shared index, a stray link, or a lint report.

**Shape (rough, to refine when we build it).**

- `raw/` — COAs, scraped/licensed third-party datasets, HMT&C program results, Light Labs feed (if licensed).
- `wiki/brands/<brand>.md` — per-brand profile: product lines tested, metal-by-metal distribution, outlier flags, trend over time.
- `wiki/categories/<category>.md` — category-level distributions with brand names attached, percentile rankings, outlier lists.
- `wiki/outliers/` — running list of flagged results (high and anomalously low) with follow-up status.
- `wiki/datasets/<source>.md` — one page per data source documenting provenance, license terms, methodology, and what we're allowed to do with it.
- Schema mirrors this file's conventions (frontmatter, evidence tiers, cite keys) so ingestion workflows feel familiar.

**Open questions to resolve before building.**

- **Light Labs partnership.** Can we license a data feed? What are the terms — raw results, aggregated, brand-identified? What's the refresh cadence? Who owns derived analyses?
- **Data-use agreements.** Review what Consumer Reports, HBBF, and other published datasets actually allow for internal re-analysis and re-hosting. Cite-and-link may be fine; re-hosting brand-level tables usually isn't.
- **Retention and access.** Who on the team gets access? Is it git-based with private remote, or does it need something with stronger audit logging? Are there brands we have NDAs with whose data needs tighter isolation?
- **Federation with the public wiki.** The private wiki can read the public wiki for context (ingredient profiles, regulations, testing methods). The public wiki must never read or import from the private one. One-way link only.
- **Anonymization path.** If category-level aggregates from the private wiki would strengthen the public wiki or courses (e.g., "across 400 samples of infant rice cereal, the 90th percentile for iAs is X ppb"), define the rule for when aggregates are safe to publish — sample size thresholds, no brand-identifiable cell sizes, legal review.

When we're ready to start this build, spin up a new repo with its own `CLAUDE.md` derived from this one, and log the kickoff here so the two projects know about each other.

## Kickoff

When I drop the first batch of PDFs:

1. Propose a manifest.
2. Propose an initial top-level skeleton — which metal pages, ingredient pages, regulation pages, and testing pages to create as stubs before ingesting, so ingests have somewhere to attach. Wait for my approval.
3. Create `index.md`, `log.md`, `overview.md`, and `synthesis.md` as stubs.
4. Initialize git if not already initialized. Make the first commit with this CLAUDE.md and the stub files.
5. Begin ingesting in priority order, pausing for check-ins as described above. Commit after each ingest.

Let's build.
