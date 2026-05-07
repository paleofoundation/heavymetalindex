# CLAUDE.md — Heavy Metal Index Wiki

This document is the operating manual for Claude sessions working on the Heavy Metal Index wiki. It is written for Claude to read and execute. Karen is the second reader; rationale is included where a Claude session might otherwise drift from it.

## Part 1 — Strategic frame (read before making any decision)

### Why this wiki exists

This wiki is not a documentation project. It is commercial infrastructure for the Paleo Foundation's Heavy Metal Tested & Certified (HMT&C) program, which is the revenue engine. Every design choice in this document is made in service of that purpose, and future design choices must be evaluated against it.

The strategic logic in one paragraph: operating a curated corpus of the complete heavy metals food-and-supply-chain literature gives the Paleo Foundation epistemic asymmetry. In any dispute — with a hostile brand, a plaintiff's expert in a class action, a regulator questioning HMT&C thresholds, or a competing standards body — the side that can credibly say "we have reviewed the complete literature and here is what it says" dominates any side that can only cite selected papers. This is the dynamic that gives Cochrane systematic reviews their authority in medicine. Heavy Metal Index is positioning to be Cochrane for heavy metals in food.

### Three audience layers, in order of pricing power

Brand founders and marketing leads are the first layer. Small-to-mid brands, already handled by current certification infrastructure, low-to-moderate fees.

Brand regulatory affairs and quality assurance teams are the second layer. They check whether the scientific basis is traceable to peer-reviewed literature. This wiki is what they audit; the infrastructure must survive their due diligence.

Brand legal teams preparing for class-action scenarios are the third layer. They price certification as litigation insurance. "The standards rest on self-published reports on the certifier's own website" is the attack line a plaintiff's expert will use if this wiki is not defensible. Making that line unavailable is this wiki's job.

Adjacent audiences compound the value: retailers (Whole Foods, Sprouts, Target approved-certification lists), regulators (FDA Closer to Zero public comments, state AG offices), and journalists (Consumer Reports, NYT, congressional hearings all quote whoever operates the canonical reference).

### Deliberate architectural separation

The wiki lives at `heavymetalindex.com`. The certification program lives at `heavymetaltested.com`. These are separate properties by design. The wiki reports what the literature says; the certification program applies those findings to set standards. Keeping them architecturally separate is what lets the wiki remain defensible when HMT&C standards are challenged. The wiki is not the certifier's self-published justification; it is an independent reference that the certifier happens to operate. One-way cross-linking is fine (HMT&C documents can cite wiki pages); the wiki does not endorse or even mention HMT&C-certified brands.

### Database-rights positioning

The Paleo Foundation operates from Cyprus. EU database-rights law provides stronger protection for curated databases than US equivalents. This is a structural advantage to design around, not incidental. Terms of service, access controls, and commercial licensing will leverage this. Claude sessions should preserve per-claim provenance (which source page supports which wiki claim) so that if any source is later withdrawn or contested, the wiki can be re-derived from its source pages without silent data contamination.

## Part 2 — The wiki/HMT&C relationship (the single most important rule)

The wiki and HMT&C operate in different epistemic registers, and keeping them in those registers is the single most important thing this document asks of Claude.

The wiki reports what the peer-reviewed and regulatory literature supports. That is its whole job. It does not advocate, it does not market, it does not harmonize with HMT&C, it does not soften claims that make HMT&C look weak, and it does not strengthen claims to make HMT&C thresholds look more evidence-based than the literature supports.

HMT&C sets certification thresholds that can be tighter than the literature floor, by design. HMT&C is explicitly a ratcheting program. Its purpose is to drive market change by certifying to standards tighter than status quo regulatory floors, so that certified products pull the category toward cleaner product over time. HMT&C thresholds being tighter than what the literature strictly mandates is a feature of the program, not a bug. The gap between what the wiki says the science supports and what HMT&C certifies to is deliberate and should be visible, not hidden.

### Two directions of drift, both destroy defensibility equally

The first direction: softening wiki claims to hide the gap between literature and HMT&C thresholds. Example: literature supports 5 ppb as the concentration at which toxicological effects become concerning for infants; HMT&C certifies at 10 ppb for feasibility reasons; a future Claude session writes the wiki to suggest 10 ppb is "safe" to make HMT&C look aligned with science. This corrupts the wiki into marketing for HMT&C and destroys the epistemic asymmetry argument.

The second direction: strengthening wiki claims to make HMT&C thresholds look more evidence-based than literature supports. Example: HMT&C sets an aggressive 2 ppb threshold for market-ratcheting reasons; a future Claude session finds marginal studies suggesting 2 ppb is where effects start, overweights them in the wiki synthesis, and presents the threshold as consensus science when it is actually a policy choice. This corrupts the wiki into justification for HMT&C decisions and destroys its independent authority.

### The rule

The wiki says what the literature supports, honestly. HMT&C certification pages reference the wiki for the literature baseline and explain the rationale for any deviation. Deviations are labeled as precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment. The gap is stated, not hidden. The gap is the point; it is how ratcheting works.

When in doubt about whether a proposed edit softens or strengthens a wiki claim in a direction that serves HMT&C rather than the literature, stop and ask Karen. This is the single most important form of drift to catch. Claude sessions drift in this direction naturally because it feels helpful. It is not helpful. It is the failure mode that, if it happens unchecked, makes the whole strategic architecture collapse.

## Part 3 — Products this wiki serves

The wiki is the shared knowledge substrate behind four products.

The Heavy Metal Tested & Certified program (heavymetaltested.com) uses the wiki as evidence base for certification criteria, limits, and auditor guidance. References the wiki one-way.

The Journal of Food Metallomics (at heavymetaltested.com/journal-of-food-metallomics) is the peer-reviewed publication venue for synthesis work that builds on the wiki. The wiki is the corpus; the journal publishes synthesis of the corpus.

Educational courses for brands, suppliers, co-packers, QA teams, and supply-chain operators cross-reference the wiki rather than duplicating it.

A future consumer app estimates heavy metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. The app consumes `contamination_profile` blocks from ingredient pages as structured data.

Secondary: federation with WikiBiome (wikibiome.com). Microbiome material that relates to heavy metal exposure lives here in draft form and is lifted to WikiBiome with minimal edits. WikiBiome is the canonical home for microbiome content; this wiki hosts heavy-metals-and-microbiome content because it touches the metals domain directly.

Public-facing destination: heavymetalindex.com. Pages should be written so that with light editing they can be published there.

Claude owns the wiki. Karen curates sources, asks questions, and decides direction. Claude does the reading, summarizing, cross-referencing, filing, and maintenance. Karen reads in Obsidian while Claude works; treat that as a live code review.

## Part 4 — Architecture

Four layers.

The `raw/` directory contains immutable source documents. PDFs of studies, agency reports, clipped articles, lab data, images, and — for this project — Marker-converted markdown files that stand in for the original PDFs. Never modify anything here. Treat as append-only source of truth.

The `data/evidence/` directory contains the structured evidence register. Candidate values, approved values, routing audits, reviewer queues, claims, schemas, and review events live here. Deterministic extraction belongs here first. A PDF is not "ingested" just because it exists in `raw/`; it must leave a structured trace in `data/evidence/` or an explicit gap/audit record.

The `wiki/` directory contains everything Claude writes. Markdown pages, interlinked, organized by the taxonomy below. Claude owns this layer entirely.

CLAUDE.md (this file), the methodology pages, and the ingest scripts together define the schema and automation layer. Karen and Claude co-evolve this as they learn what works.

This build is a compiled wiki, not a query-time RAG surface. Queries may read raw files when needed, but the default goal of ingest is to compile durable knowledge once into source pages, evidence registers, routed wiki pages, and generated public outputs so the same work does not need to be rediscovered from scratch on every question.

### Version control

The wiki is in git. Commit after every ingest, query, lint, or schema change. Commit messages follow the `log.md` format (see Part 10). Git history is the versioning mechanism; the `updated:` frontmatter field is a convenience, not the source of truth. When a wiki page is cited in future HMT&C documentation, litigation response, or regulatory submission, it must be possible to reconstruct exactly what the page said on a specific date. Git handles this if commits are disciplined. Do not skip commits because "nothing much changed."

For bulk ingest runs (see Part 8), commit after each batch of 200 papers rather than per-paper. Per-paper commits at 23,000-paper scale produce unusable git history. Batch commits with descriptive batch reports preserve reconstructibility without overwhelming the log.

### Directory layout

```
raw/
  markdown/           # Marker-converted .md files, one folder per source
  studies/            # original PDFs (kept for reference)
  reports/            # FDA, EFSA, WHO, EPA, Codex, Consumer Reports, HBBF, etc.
  industry/           # trade publications, brand statements
  news/               # news articles, press releases
  lab-data/           # COAs, test results (FIREWALL — see Part 12)
  assets/             # images, figures extracted from sources
  manifest/           # triage manifest CSVs, dedup reports
wiki/
  index.md            # master catalog, organized by category
  log.md              # append-only chronological log
  overview.md         # top-level synthesis for newcomers
  synthesis.md        # evolving thesis / current best understanding
  metals/             # one page per metal (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Sb, U)
  ingredients/        # commodity risk profiles (rice, cocoa, spinach, carrots, whey, etc.)
  products/           # product-category pages (baby food, protein powder, chocolate, tea, seafood)
  supply-chain/       # soil, water, fertilizer, equipment, packaging, storage
  regulations/        # one page per jurisdiction/rule (FDA-CTZ, EU-2023-915, Prop65, BFSA, Codex)
  testing/            # ICP-MS, AAS, XRF, speciation methods, sampling plans, LODs
  health/             # toxicology, exposure routes, vulnerable populations, dose-response
  microbiome/         # metal-microbiome mechanisms, WikiBiome crosswalk pages
  certification/      # HMT&C program pages — proposed criteria, auditor notes, gap analyses vs FDA/EU/Codex
  mitigation/         # remediation strategies — agronomic, processing, supply-chain screening, formulation
  courses/            # course outlines, module pages, learning objectives
  app/                # app-model pages: ingredient→risk mappings, recipe inference logic
  sources/            # one page per source document (summary + metadata + cite key)
  queries/            # filed answers to questions Karen asks (compounding exploration)
  lint/               # lint reports, contradiction logs, gap lists
  batch-reports/      # per-batch ingest reports for bulk-ingest runs
```

## Part 5 — Source-file handling (this project's specific input)

Input to this wiki is 23,262 Marker-converted markdown files. Each paper sits in its own folder under `raw/markdown/`, named by its filesystem handle (an `FM_XXXXXXX` identifier from Karen's triage pipeline), and contains the markdown file plus any extracted figure images and a metadata JSON.

### Filesystem handle vs. cite-key

Two identifiers per source, deliberately separate.

The filesystem handle is the `FM_XXXXXXX` identifier. It is stable, globally unique, and collision-free. It is used for `raw/markdown/` folder names, the `raw_handle` frontmatter field on source pages, and any cross-reference that needs to be unambiguous across Claude sessions. Claude must never change or re-derive a filesystem handle.

The cite-key is human-readable: lowercase, hyphenated, formed as `<firstauthor><year>-<slug>` (for example, `he2013-shanghai-cadmium`). It is used in wiki content, in `[[sources/<cite-key>]]` wikilinks, and in prose citations. The cite-key is derived from the paper's metadata, which the triage manifest pre-populates wherever DOI lookup succeeded.

When the triage manifest provides a cite-key, use it. When it does not, derive one from the first author, year, and a short topic slug, then record it in the source page's frontmatter. If two papers would generate the same cite-key, append `-a`, `-b`, etc. Claude should prefer the manifest's pre-populated cite-key over re-deriving on the fly, to prevent inconsistency across sessions.

### Source page creation

Every ingested file produces exactly one source page at `wiki/sources/<cite-key>.md`. The source page frontmatter includes both identifiers:

```yaml
raw_handle: FM_3750310
cite_key: he2013-shanghai-cadmium
```

This lets Claude and humans trace from the filesystem up to wiki content and back down to the raw markdown.

### Deduplication rule

The triage manifest identifies exact duplicates (identical SHA-256 hash) and near-duplicates (different hashes but high textual overlap).

For exact duplicates, ingest only one file. Log the skip to `log.md` in the form `## [YYYY-MM-DD] skip | FM_XXXXX is SHA-identical to FM_YYYYY, not ingested`. Keep both files in `raw/markdown/` — storage is cheap and preserving both protects against the rare case where dedup logic turns out to be wrong.

For near-duplicates (papers flagged in the manifest's cluster column), prefer the higher-evidence-tier version. Published versions beat preprints; peer-reviewed versions beat conference abstracts. Create one source page for the preferred version. Note the near-duplicate relationship in the source page frontmatter:

```yaml
near_duplicates: [FM_YYYYY, FM_ZZZZZ]
```

Other cluster members are referenced but not individually ingested.

### Pre-populated frontmatter

The triage manifest provides, for each paper, the fields the ingest script can prepopulate before Claude reads the content:

```yaml
raw_handle: FM_XXXXXXX
cite_key: <derived>
year: <from manifest>
doi: <from manifest, may be null>
license: <from manifest>
publisher: <from manifest>
metals: <from manifest text-mining>
ingredients: <from manifest text-mining>
matrices: <from manifest text-mining>
jurisdictions: <from manifest text-mining>
```

These are pre-populated as draft values. Claude verifies each field against the actual paper content during ingest and corrects any that the manifest got wrong. A silent correction is fine; a large disagreement (for example, manifest says `[Pb]` but paper is clearly about arsenic only) is flagged to Karen for review.

## Part 6 — Page templates

Every wiki page starts with YAML frontmatter. Fields vary by page type but always include `type`, `updated`, `sources`, and `audience`.

### Source page (`wiki/sources/<cite-key>.md`)

```yaml
---
type: source
raw_handle: FM_3750310
cite_key: he2013-shanghai-cadmium
title: "Exposure assessment of dietary cadmium: findings from shanghainese over 40 years, China"
authors: [He P, Lu Y, Liang Y, Chen B, Wu M, Li S, He G, Jin T]
year: 2013
publication: "BMC Public Health"
doi: 10.1186/1471-2458-13-590
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_3750310/FM_3750310.md
metals: [Cd]
ingredients: ["[[ingredients/rice]]", "[[ingredients/vegetables]]", "[[ingredients/seafood]]", "[[ingredients/tobacco]]"]
products: []
matrices: [dietary-intake, urine, blood]
jurisdictions: [CN]
near_duplicates: []
sample_n: 207
sample_population: "Shanghai adults over 40"
updated: 2026-04-23
---
```

```markdown
# He et al. 2013 — Dietary cadmium exposure in Shanghai adults

## TL;DR
Two to four sentences summarizing what they measured, what they found, and why it matters.

## Key numbers
Pull exact figures: sample sizes, means, 95th percentiles, LODs, geographic breakdown. Include page and table references from the source markdown. Preserve units and do not round.

## Methods (brief)
Analytical method, speciation or total, sample prep, LOD/LOQ. Flag any limitations.

## Implications
Certification: ...
Courses: ...
App: ...
Microbiome (if applicable): ...

## Wiki pages updated on ingest
- [[metals/cadmium]]
- [[ingredients/rice]]
- [[ingredients/leafy-vegetables]]
- [[regulations/china-gb-2762-2005]]
```

### Metal page (`wiki/metals/<metal>.md`)

```yaml
---
type: metal
symbol: Pb
name: Lead
species: [Pb2+, tetraethyl-lead]
audience: [regulator, educator, consumer]
microbiome_relevance: high
wikibiome_crosswalk: ["[[microbiome/gut-lead-axis]]", "[[microbiome/lead-dysbiosis]]"]
updated: 2026-04-22
sources: 0                                # bump on every ingest that touches this page
---
```

Sections: Overview, Toxicology, Typical exposure routes, Food sources (linked to `ingredients/`), Regulatory limits (linked to `regulations/`), Testing (linked to `testing/`), Microbiome effects (linked to `microbiome/`), Vulnerable populations, Open questions, Sources.

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
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-uptake, flooded-paddy, geography, cultivar, processing]
lower_risk_variants: ["[[ingredients/basmati-india]]", "[[ingredients/california-rice]]"]
higher_risk_variants: ["[[ingredients/brown-rice]]", "[[ingredients/rice-bran]]", "[[ingredients/rice-protein-concentrate]]"]
used_in_products: ["[[products/infant-cereal]]", "[[products/rice-milk]]", "[[products/gluten-free-baking]]", "[[products/protein-powder]]", "[[products/crackers]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-22
---
```

Sections: Why this commodity accumulates the metal, Ranges by source/region/variety, Processing effects (polishing, rinsing, parboiling), Ingredient-derivative risk (bran > whole > white; syrup concentrates), Mitigation options, Regulatory limits that apply, Sources.

The `contamination_profile` block is deliberately machine-readable. The app will consume it directly.

The metal set is the eight metals with dedicated `wiki/metals/` pages: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn. Earlier ingredient pages (pre-2026-05) used a 4-metal subset (Pb, Cd, iAs, tHg) and were schema-extended on 2026-05-03 to the 8-metal standard so that the app receives a consistent feature vector for every ingredient. Adding a ninth metal in the future requires extending all existing ingredient pages in lockstep; the schema-extension is mechanical and idempotent (see `tools/` if a script is added, or perform via targeted edits).

The `last_full_resynthesis` field referenced in Part 9 is no longer carried per-metal-sub-block on ingredient pages. Resynthesis events are now tracked in the structured-evidence layer at `data/evidence/review_events.jsonl`, which is authoritative. Part 9's conceptual logic (when to trigger full resynthesis vs incremental update) still applies; only the implementation has moved off the page frontmatter.

#### The three-field state system

Each metal sub-block has two orthogonal concepts that must not be conflated.

The `status` field is the data-state field. It answers: have we researched this combination yet?

- `pending` means the template placeholder, no research done yet. Values are `null`. This is the initial state for every metal on every new ingredient page.
- `in_progress` means research started, some values populated, review incomplete. Used when an ingest has touched the ingredient but additional sources are expected or pending.
- `populated` means research complete. Values reflect the current best understanding of the literature as of `last_reviewed`.

The `confidence` field is the evidence-state field. It answers: given the research we have done, how much of it is there and how consistent is it?

- Only meaningful when `status: populated`. When `status: pending` or `in_progress`, `confidence` is `null`.
- `low` means 1 to 2 studies, or wide disagreement among sources.
- `medium` means 3 to 10 studies, moderate agreement.
- `high` means more than 10 studies, strong agreement.

The `n_studies` field is the count of A-tier or B-tier sources contributing to the values. A value of `n_studies: 0` with `status: populated` is a legitimate finding: it means the literature is silent on this combination, and the app should treat it as a data gap rather than as "probably clean." A value of `n_studies: 0` with `status: pending` is simply the template default.

The `last_reviewed` field is the date Claude last integrated new evidence into this metal sub-block (per-page tracking of incremental updates). Full-resynthesis tracking — the date Claude last re-read all contributing sources and regenerated the synthesis from scratch — lives in the structured-evidence layer at `data/evidence/review_events.jsonl`, not on the ingredient page itself; Part 9 describes the resynthesis logic and the structured layer applies it.

This structure resolves what would otherwise be a persistent lint-noise problem. Every new ingredient page is born in a valid state (`pending` with `null` values) rather than a lint-failure state. It also surfaces a real-world distinction that matters for the app: genuine data gaps behave differently from unprocessed templates.

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

Sections: Source evidence inventory, CC candidate summary, How standards math uses this page, Exposure estimates, Why this category is high-risk, What drives variance across brands, How the app would estimate risk from an ingredient list, Historical recalls and enforcement (frame as regulatory events, not brand rankings — see Part 12), Source legend, Sources.

The `Source evidence inventory` section separates measured product concentrations from intake or exposure estimates. It should show what each source actually reports: metal, evidence scope, n, statistic type, reported values, units, max/p100 if directly reported or derivable from a range, row-fit, and whether the source is eligible for HMT&C CC selection. Do not add p10, p50, p90, or p95 columns to source rows unless the source itself reports those statistics.

The `CC candidate summary` section is the only public product-page section that should display p90 for threshold math. It has one row per subcategory x HMT&C analyte cell and mirrors the Step 0F CC Source Data Package: Path A uses the 90th percentile of the selected clean-platform distribution; Path B uses 5x LOQ when Path A data is insufficient. If the CC candidate has not been computed or validated yet, say so rather than displaying a provisional-looking number.

The `How standards math uses this page` section explains that p90 is an aggregate or selected-dataset value, not a per-source decoration. For lower-is-better concentration data, p100/max in a source evidence row means the highest observed concentration in that source's scoped pool. p90 means the cutoff at which roughly 90 percent of the selected clean-platform distribution would pass, and it belongs in the CC candidate package after inclusion/exclusion and scoping decisions are made.

Do not combine geography, period, and product-fit scopes without labeling the consequence. Product fit, analytical basis, sample size, detection handling, period, and jurisdiction must be recorded as metadata for confidence and applicability review, but a p90 candidate does not need to be U.S.-based. When enough source-backed row-fit evidence exists in aggregate, the standards workflow may compute a global or mixed-jurisdiction p90 with the required confidence target, currently 95% confidence, and then document jurisdiction composition and any applicability caveats. Geography can affect weighting or scope notes; it is not a hard exclusion rule.

Inline and table citations on product-category pages should use numbered source aliases, for example `[[sources/<cite-key>|1]]`, so the rendered page stays readable. Add a `Source legend` near the end of the page mapping each number to the full source page and describing what that source contributes. Full source names should not be used as inline citation labels in dense tables.

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
source_refs: ["[[sources/fda2023-ctz-guidance]]"]
updated: 2026-04-22
---
```

Sections: Scope, Exact limit and units, How tested (official method), Enforcement posture, History of changes, How it compares to EU/Codex/state law, Sources.

Always cross-link to the parallel rules in other jurisdictions. Never silently substitute or round regulatory values. Preserve the exact values from the agency source. If a value is ambiguous in the source, note the ambiguity rather than resolving it unilaterally.

### Testing method page (`wiki/testing/<method>.md`)

Sections: Principle, What it measures (and what it does not — for example, total vs speciated arsenic), Typical LOD/LOQ for each metal, Sample prep pitfalls, Cost and throughput, When to choose this method, Sources.

Speciation deserves its own page (`testing/arsenic-speciation.md`) because the regulatory and health distinction between inorganic and organic arsenic is central to the whole domain.

### Microbiome page (`wiki/microbiome/<topic>.md`)

```yaml
---
type: microbiome
wikibiome_crosswalk: <slug>
metals: [Pb, Cd]
mechanism: [barrier-disruption, taxa-shift, SCFA-reduction]
disease_links: [IBD, metabolic-syndrome]
updated: 2026-04-22
---
```

Sections: Mechanism of action, Taxa-level effects (with genus and species), Functional and metabolic consequences, Human vs animal evidence, Disease-process implications, Sources.

These pages should be written so they can be lifted into WikiBiome with minimal edits. Use WikiBiome's conventions for taxon naming when confirmed.

Scope discipline: microbiome content belongs here only when the primary link is metal exposure. General microbiome mechanisms without a metals angle belong on WikiBiome. When in doubt, ask Karen.

### Certification page (`wiki/certification/*.md`)

For the Paleo Foundation HMT&C program. Include proposed limits, tier definitions (standard, infant-grade, ultra), sampling plans, auditor checklists, decision trees, and gap analyses against FDA/EU/Codex.

These pages reference wiki evidence; they do not define wiki evidence. When an HMT&C page specifies a threshold, it cites the wiki for the literature baseline and explicitly states the rationale for any deviation.

Precautionary means the threshold is tighter than the literature floor because vulnerable populations, cumulative exposure, or uncertainty warrant a safety margin beyond what minimum-effect-level data supports.

Market-ratcheting means the threshold is tighter than the literature floor because the certification program's purpose is to move the market toward cleaner product; the threshold is a policy choice, not an assertion about where toxicological effects begin.

Feasibility-driven means the threshold is looser than the literature floor because current analytical methods, supply chain realities, or achievable agricultural practice do not yet support the tighter value. Paired with a sunset plan to tighten as feasibility improves.

Regulatory-alignment means the threshold matches an external regulatory framework (FDA, EU, Codex) for commercial or legal reasons, whether or not that framework aligns with the literature.

The deviation itself is fine and often intentional. Silently softening the wiki to hide the deviation, or strengthening the wiki to make the deviation look evidence-based, is the failure mode. State the rationale; do not paper over the gap.

### Course page (`wiki/courses/*.md`)

Each course has an outline page and module pages. Module pages include Learning objectives, Core content (drawn from wiki pages via links), Case studies (linked to `sources/` and `products/`), Quiz items, and Further reading. Keep content DRY: module pages link into the canonical wiki pages rather than duplicating them.

### App-model page (`wiki/app/*.md`)

This is where the logic for the ingredient-list → contamination-risk estimator is codified. Key pages:

`app/ingredient-mapping.md` describes how raw ingredient-list strings map to `ingredients/` pages (synonyms, parenthetical modifiers, "organic", country of origin).

`app/recipe-inference.md` describes how ingredient-order and nutrition-facts back-solve approximate proportions.

`app/risk-scoring.md` describes how per-ingredient contamination profiles combine into a per-serving estimate, with uncertainty.

`app/vulnerable-population-flags.md` describes when to flag for infants, pregnancy, or frequent consumers.

`app/disclaimer-language.md` contains careful consumer-facing wording that educates without overclaiming.

## Part 7 — Audience layering

Every substantive page carries `audience: [regulator, educator, consumer, app]` in frontmatter. Within long pages, section tagging is allowed:

```markdown
## Mechanism
<!-- audience: educator, regulator -->
[technical content]

## What this means for families
<!-- audience: consumer -->
[plain-language content]
```

This lets the same wiki render three ways without maintaining three wikis.

Consumer translation is dose-and-population-specific. This is the highest-risk interpretive work in the wiki. "Rice contains small amounts of inorganic arsenic" is true for an adult with a varied diet and false for an infant on rice cereal. Consumer-audience sections must specify dose, population, and consumption frequency. Never use undefined qualifiers ("small," "trace," "safe," "dangerous") without a quantitative anchor. When a consumer-audience section makes a claim, the same claim should be traceable upward to the technical sections and downward to the source. If a plaintiff's expert or defense expert reads the consumer language, they should find it specific, defensible, and free of both fear-mongering and false reassurance.

## Part 8 — Ingest workflows

Three distinct workflows with different constraints.

### Compiled-wiki rule

For this build, ingest means compiling a source into the persistent wiki system. It does not mean "the file is searchable now."

A source is not counted as ingested until all applicable steps below are complete:

1. preserve the raw source and verify provenance;
2. create or update the canonical source page;
3. extract deterministic evidence into `data/evidence/` with basis, species, unit, statistic-type, and row-fit metadata;
4. route the evidence to the correct wiki page family;
5. create a stub first if the destination page does not yet exist, especially for ingredient pages and direct product-page destinations;
6. regenerate any affected product-page evidence surfaces, including the standards matrix, measured-values ledger exports, and routing-audit outputs when applicable;
7. update `index.md` and `log.md`, run checks, and commit.

If automation cannot place evidence cleanly, do not silently drop the source. Emit or update the routing audit, reingest queue, gap report, or candidate-only record so the missing placement remains visible and recoverable.

### Single-paper ingest (Karen drops one file and says "ingest this")

When Karen drops a file into `raw/` and says "ingest this":

1. Read the file. For PDFs, actually extract and read the text. For Marker-converted markdown, read the markdown. For images or figures, view them.
2. Tell Karen the TL;DR first — three to five sentences — before writing anything. Wait for Karen's reaction so she can redirect.
3. Create the source page at `wiki/sources/<cite-key>.md` using the template in Part 6.
4. Identify affected pages: metals, ingredients, products, regulations, testing methods, microbiome topics, certification criteria. List them for Karen.
5. Update each affected page. Weave in new findings. When a claim is superseded, do not just overwrite — note the change and flag contradictions. For example, "Earlier estimates of 250 ppb (Jones 2019) have been revised to 180 ppb by Smith 2024." When updating an ingredient's `contamination_profile`, advance `status` from `pending` to `in_progress` or `populated` as appropriate, and populate `confidence`, `n_studies`, and `last_reviewed` when moving to `populated`.
6. Update `index.md` with the new source page and any newly created pages.
7. Append to `log.md` using the format `## [YYYY-MM-DD] ingest | <cite-key> — <title>` followed by a short note on what changed.
8. Commit to git. Message format matches the log entry.
9. Report back with a summary of pages touched and any open questions the source raises.

Bias toward surfacing surprises. If a new study contradicts the wiki's current synthesis, say so loudly.

### Bulk ingest (23,000-paper corpus)

When ingesting the full Marker-converted corpus (or any batch over ~20 papers), the single-paper rules do not scale. Instead:

1. Verify or generate the batch manifest. For this project, the triage manifest is authoritative; Claude does not re-derive it.
2. Process in priority order. Priority ordering is defined in Part 11.
3. Process in batches of 200 papers. Within a batch, do not pause for human review; process each paper end-to-end (read, create source page, update affected pages) without waiting.
4. Commit after each batch of 200, not per-paper. A single commit per batch with a message like `ingest batch 03 (papers 401-600): 47 ingredient pages updated, 3 new regulations added`.
5. At the end of each batch, produce a batch report at `wiki/batch-reports/batch-NN.md`. The batch report contains:
   - Number of papers ingested, number skipped (with reasons)
   - New pages created (list)
   - Existing pages updated with significant change (defined as any change to a `contamination_profile` value, any new regulation, any contradiction flagged)
   - New metals, ingredients, or products encountered not previously in the wiki
   - Any papers that failed to ingest and why
   - Any papers whose manifest-provided metadata disagreed substantially with actual content
6. Karen reads batch reports at her own pace. Karen's Lab (the external lint/QA system) runs linting across batches.
7. Do not pause for per-paper TL;DR approval during bulk ingest. The batch report is the review artifact.

### Query workflow (Karen asks a question)

When Karen asks a question:

1. Read `index.md` first to locate relevant pages.
2. Read those pages. If needed, drill into `sources/` for primary evidence.
3. Answer with citations to wiki pages (which link onward to sources).
4. Ask Karen: "Should I file this as a page?" For anything substantive, the answer is usually yes. File under `wiki/queries/<YYYY-MM-DD>-<slug>.md` with frontmatter linking to the pages it drew from.
5. Append a short query entry to `log.md` and commit.

Output format can vary by question: markdown page, comparison table, chart (matplotlib), slide deck (Marp), decision tree. Use judgment; ask if unclear.

## Part 9 — Synthesis and re-synthesis

This is a new policy area that the scale of this corpus demands.

### When to populate a contamination_profile value

On first ingest of a paper that reports a concentration value for a given ingredient/metal combination, advance `status` from `pending` to `in_progress`. Record the value in scratch on the source page. Do not yet populate the ingredient page's `contamination_profile` numerical fields.

When a second paper arrives with a concentration value for the same combination, integrate the two sources and populate the ingredient page: `typical_ppb`, `p95_ppb`, `n_studies: 2`, `confidence: low`, `last_reviewed: <today>`, `last_full_resynthesis: <today>`, `status: populated`.

### Incremental update behavior

After `status: populated`, subsequent papers update the page incrementally rather than triggering a full resynthesis.

On each new paper touching an already-populated combination, Claude reads the incoming paper, the current page state, and the source pages for the top 5 most-cited prior contributing sources (identifiable via the wiki's internal backlinks). Based on that context, Claude updates the values if warranted, increments `n_studies`, updates `last_reviewed`, and leaves `last_full_resynthesis` unchanged.

This is the middle path between naive overwriting (which drifts) and full re-read of all contributing sources (which is token-prohibitively expensive at scale).

### When to trigger full resynthesis

A full resynthesis means Claude re-reads every source page contributing to a given `contamination_profile` entry and regenerates the synthesized values from scratch.

Trigger full resynthesis when any of these conditions are met:

- `n_studies` has doubled since `last_full_resynthesis` (for example, resynthesize when reaching 20 if `last_full_resynthesis` happened at 10).
- A new incoming paper's values disagree with the current page state by more than 2x in either direction for any of `typical_ppb` or `p95_ppb`.
- Karen explicitly requests a resynthesis.
- A contradiction is flagged between two A-tier sources and cannot be resolved incrementally.

Record each full resynthesis in `log.md` with the page, the trigger, and the resulting change (if any) to the values.

### Synthesis tracking metadata

Every `contamination_profile` metal sub-block carries `last_reviewed` (date of most recent incremental update) and `last_full_resynthesis` (date of most recent full resynthesis). These fields together answer the question "how current is this synthesis, and how recently has it been rebuilt from primary sources?"

## Part 10 — Page creation and naming

### When to create a new ingredient, product, or regulation page

For ingredients: create a new page when 5 or more papers treat the sub-variant as a distinct commodity with its own risk profile. Below that threshold, add the variant as an `aliases` entry on the parent page with a short note in the page body.

Example: if 3 papers mention "rice bran" alongside papers about rice generally, rice bran goes in `ingredients/rice.md` aliases. If 10 papers focus specifically on rice bran contamination distinct from whole rice, create `ingredients/rice-bran.md` and link the two pages.

When the threshold is crossed, Claude proposes the new page to Karen rather than silently creating it. The proposal happens in the batch report, not per-paper.

For products: create a new product-category page when 3 or more papers address the product category specifically. Product categories are a smaller universe than ingredients, so the threshold is lower.

For regulations: create a new regulation page on first encounter. Regulations have hard identifiers (rule numbers, official names) and benefit from being captured immediately rather than accumulating in a parent page.

For metals: create a new metal page on first encounter, but only for metals that appear in the corpus with reasonable frequency. Exotic or trace metals mentioned incidentally stay as notes on related metal pages until they accumulate their own evidence base.

### When to merge pages

Pages should occasionally be merged. If `ingredients/carrots.md` and `ingredients/root-vegetables.md` end up covering substantially the same literature with different framings, propose a merge in the next batch report. Claude does not merge pages autonomously.

### Orphan prevention

New pages must be linked from `index.md` on creation. They must also be linked from at least one parent category page (metal, ingredient, product, regulation, testing method) or they become orphans. Lint catches orphans, but prevention is cheaper than detection.

## Part 11 — Priority ordering for bulk ingest

The 23,000-paper corpus is too large to ingest without prioritization. The triage manifest assigns priority signals to every paper. Claude ingests in this order.

### Priority 1 — HMT&C Path A candidates

Papers flagged in the manifest as HMT&C Path A source candidates. These are papers directly relevant to certification threshold setting: they report concentration values for specific metals in specific food matrices, with adequate sample size, from credible methods. Approximately 647 papers. Target: complete Priority 1 before beginning Priority 2.

### Priority 2 — LOQ source candidates

Papers flagged as Limit of Quantification source candidates. These ground the testing methodology discussion. Approximately 2,399 papers.

### Priority 3 — Agency and regulatory sources

Papers from or citing FDA, EFSA, WHO, EPA, Codex, or national agencies. Approximately 934 agency-hit papers in the current manifest. Note: this count is thin; Karen has flagged supplementing agency coverage as a future task. Process what the corpus has and flag gaps.

### Priority 4 — High-evidence peer-reviewed papers

Papers with A-tier evidence indicators (peer-reviewed, 2020+, reputable publisher, CC-licensed so the wiki can reference them freely). Majority of the remaining corpus.

### Priority 5 — Everything else

Remaining papers, including preprints, non-English where translation is imperfect, older papers that may be superseded, and papers flagged with retraction language for individual review.

Within each priority tier, sub-order by publication year descending (2025 first, working backward). Newer papers generally supersede older ones in fast-moving areas.

## Part 12 — Brand-level data: hard firewall

Brand-specific lab results, COAs, and internal test data do not live in this wiki. This wiki is the public-facing knowledge base behind heavymetalindex.com, the HMT&C program's published criteria, and courses. Brand-identifying contamination data in any of those channels creates legal and commercial risk.

Rules:

There is no `wiki/brands/` directory. If a source names brands in its findings (for example, Consumer Reports rankings, HBBF brand tables, FDA recall notices), summarize the category-level and ingredient-level signal on the relevant `products/` or `ingredients/` page. Do not create brand pages and do not list brand-by-brand values in the wiki.

Recalls and enforcement actions are fine to name on `regulations/` and `products/` pages because they are already public record, but frame them as regulatory events, not as brand rankings.

Published third-party testing (Consumer Reports, HBBF, etc.) can be cited as sources, and their methodology can be discussed, but do not reproduce their brand-level tables into the wiki. Link to the source page instead.

COAs and internal lab data belong in the private build described in Part 15, not here. If Karen drops a COA into `raw/` by accident, flag it and ask before ingesting.

HMT&C certified brands are never mentioned in the wiki. Not in page bodies, not in examples, not in case studies. The wiki is evidentially separate from the certification program; treating it as promotional infrastructure for HMT&C would destroy the defensibility argument this whole project rests on.

If ever unsure whether something crosses the line, ask before writing.

## Part 13 — Evidence grading

Every source gets an `evidence_tier`.

A-tier is peer-reviewed primary studies, government reports (FDA, EFSA, EPA, WHO, Codex), and authoritative meta-analyses.

B-tier is industry white papers, NGO reports (HBBF, Consumer Reports, EWG), reputable trade publications, and conference proceedings.

C-tier is news articles, blog posts, press releases, and social-media claims.

Synthesis pages should lean on A-tier, use B-tier with attribution, and treat C-tier as leads to verify rather than as evidence. Courses and certification criteria should cite A-tier sources.

Flag contradictions explicitly. If a B-tier source conflicts with an A-tier source, note both and explain. Do not silently average.

## Part 14 — Conventions

Units: Always ppb (µg/kg) for food matrices unless a source uses different units, in which case convert and note the original. Always specify wet weight vs dry weight.

Metal names: Use Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U. Spell out on first use per page. The iAs vs tAs distinction is non-negotiable; never conflate them. The tHg vs MeHg distinction is also non-negotiable, and total Cr must never be treated as Cr-VI unless the source speciates hexavalent chromium.

HMT&C analyte vocabulary: The current certification testing program tracks ten analytes: Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, and Sn. The wiki may discuss other metals in the corpus, but product-category threshold-development pages must keep this official analyte list distinct from broader literature metals. If an older HMT&C protocol refers to an "8 metals grid," reconcile it to the current analyte list before hardening schemas or publishing standards values.

Dates: ISO-8601 (YYYY-MM-DD) everywhere.

Cite keys: `<firstauthor><year>-<slug>`, lowercase, hyphenated. One cite key per source, globally unique. Disambiguate collisions with `-a`, `-b`, etc.

Links: Use Obsidian wikilinks `[[folder/slug]]` to cross-link wiki pages, and prefer linking to canonical pages over duplicating content. In page bodies, write the wikilink bare: `[[ingredients/rice]]`.

Frontmatter wikilinks: Page-reference arrays in frontmatter use the quoted-wikilink form `["[[folder/slug]]", "[[folder/slug]]"]`. The quoting is required because YAML reserves `[` as a flow-sequence delimiter; without quotes, the `[[` is parsed as a nested empty list. Wrapping page-reference arrays as wikilinks is what makes Obsidian's graph view surface relationships sourced from frontmatter (graph edges fan out to roughly 600 nodes across the corpus once this convention is applied). The page-reference fields are: `source_refs` → `[[sources/...]]`, `ingredients` → `[[ingredients/...]]`, `products` → `[[products/...]]`, `used_in_products` → `[[products/...]]`, `higher_risk_variants` → `[[ingredients/...]]`, `lower_risk_variants` → `[[ingredients/...]]`, `wikibiome_crosswalk` → `[[microbiome/...]]`. All other frontmatter array fields stay bare; they are tag/classifier vocabularies (for example `metals`, `jurisdictions`, `audience`, `species`, `drivers`, `aliases`, `mechanism`, `disease_links`, `matrices`, `applicable_regulations`, `typical_ingredients`, `near_duplicates`), not page references, and wrapping them would create spurious or duplicate graph edges.

Unresolved-target wikilinks (frontmatter or body wikilinks pointing to pages that do not yet exist in the wiki) are intentional backlog markers, not lint errors. They render as dotted nodes in Obsidian's graph and indicate where the wiki is expected to grow next; lint should not flag them as broken cross-references on the basis of frontmatter alone.

Numbers: Always include sample size and method when citing a concentration. "Rice has high arsenic" is not a wiki-quality claim; "FDA TDS 2014 found mean iAs of 92 ppb (n=76) in white rice by ICP-MS with HPLC speciation" is. Verify every numeric claim against the source before writing it. Do not round, approximate, or harmonize values across sources; preserve the actual numbers.

Regulatory values: Never silently substitute or round a regulatory threshold. FDA's action level for iAs in infant rice cereal is 100 ppb, not "approximately 100 ppb" and not "about 0.1 ppm." Cite the exact value from the agency source and note the unit the agency used. If converting units for comparison, show both.

Uncertainty: When you do not know or sources disagree, say so. Under-claim rather than over-claim. This is a certification and consumer-safety domain; false confidence is the biggest risk.

Consumer language: In `audience: consumer` sections, avoid jargon, avoid fear-mongering, be specific about dose and population. The goal is informed decisions, not panic.

## Part 15 — Writing style for wiki content

This specification document uses bullets because it is genuinely list-shaped. Wiki content itself is different. The wiki must read as authoritative scientific reference, not as internal documentation or marketing summary. The register to aim for is Cochrane review, EFSA scientific opinion, or WHO monograph.

Default to prose paragraphs for narrative sections. This includes overview, mechanism, implications, discussion of contradictions, synthesis, consumer translations, and any section that presents reasoning rather than enumerating facts. Prose signals considered analysis; bullets signal slides or notes. A future reader (plaintiff's expert, defense counsel, FDA reviewer, journalist) will form a judgment about the wiki's authority within the first page they read. Prose produces the correct judgment.

Bullets require justification. Before using a bullet list in wiki content, pause and ask: is this content genuinely enumerative? Three to seven discrete parallel items with no analytical connective tissue between them? If yes, bullets are appropriate. If reaching for bullets to flatten analysis into items because it feels easier, stop and write prose instead.

Legitimate uses of bullets in wiki content: enumerated regulatory values or thresholds across jurisdictions, stepwise procedures (testing methods, sampling plans, mitigation options), section tables of contents at the top of long pages, parallel lists of discrete items (taxa, ingredients in a category, vulnerable populations), audience tagging metadata.

Illegitimate uses: summaries of individual studies (use prose with full citation), explanations of mechanisms (use prose, develop the argument), synthesis paragraphs (use prose, make the connections), consumer-facing explanations of risk (use prose, contextualize the dose), implications sections (use prose, reason through the implications).

Structured data belongs in frontmatter YAML or two-column tables, not in bullets. Regulatory limits, concentration values, study details, and test method parameters are reference data, not analytical claims. They go in YAML where the app can parse them, or in two-column tables where humans can scan them. Multi-column tables are discouraged because they render poorly on mobile and in narrow Obsidian panes; if a multi-column table seems necessary, consider whether the data should be split across several two-column tables or represented as structured YAML.

Avoid em dashes. Use commas, semicolons, periods, or parentheticals instead. Em dashes are fine inside direct quotes and citation text; do not introduce them in new writing.

No bolded words inside running prose for emphasis. Bold is for headings and for explicit labels (for example, the start of a definition). Inline bold for emphasis creates a marketing-copy register that undermines authority.

## Part 16 — `index.md` structure

Organized by category. Each entry is: `- [[path/page]] — one-line summary (N sources).`

Sections: Overview and synthesis, Metals, Ingredients, Product categories, Regulations (by jurisdiction), Supply chain, Testing methods, Health and toxicology, Microbiome, Certification, Courses, App model, Queries, Sources (chronological), Batch reports (chronological).

Update on every ingest (in bulk mode, once per batch). If the index exceeds 500 entries, split into `index.md` plus per-category index files and link between them.

## Part 17 — `log.md` format

Append-only. Each entry:

```markdown
## [YYYY-MM-DD] <op> | <handle> — <short title>
Pages touched: [[a]], [[b]], [[c]]
Notes: <1-3 sentences on what changed or what was learned>
```

Where `<op>` is one of: `ingest`, `batch`, `query`, `lint`, `resynthesis`, `certification`, `course`, `app`, `schema`, `skip`.

Consistent prefix means `grep "^## \[" log.md | tail -20` gives a clean recent history. Git commit messages mirror log entries.

For bulk ingest, per-paper entries are replaced by per-batch entries:

```markdown
## [2026-04-24] batch | batch-03 (papers 401-600) — 200 papers ingested
Pages touched: 47 ingredient pages, 12 metal pages, 3 new regulation pages
Notes: First batch to push iAs concentrations in rice above 120 ppb average. Flagged contradiction between Smith 2024 (n=1000) and Jones 2023 (n=50) on Hg in tuna. Batch report: [[batch-reports/batch-03]].
```

## Part 18 — Lint

When Karen (or Karen's Lab) runs lint across the wiki, the lint pass checks for:

Contradictions: claims across pages that disagree. List with page references.

Stale claims: pages that cite only pre-2020 sources in fast-moving areas, or pages not updated after a newer source was ingested that should have touched them.

Orphans: pages with no inbound links.

Missing frontmatter: required fields absent or malformed.

Regulatory-value drift: any regulation page whose `limit_value` differs from what the agency source currently states. Run this check automatically when any agency source is newly ingested.

Silent threshold deviation: certification pages that cite different values than the referenced wiki pages without stating a rationale (precautionary, market-ratcheting, feasibility-driven, regulatory-alignment). This is the wiki/HMT&C drift check from Part 2.

Evidence-tier mismatch: synthesis claims supported only by B-tier or C-tier sources when A-tier sources exist in the corpus.

Provenance gaps: wiki claims that do not trace to a specific source page. Every numerical claim in the wiki must link to a source; claims without provenance are a lint failure.

Lint results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`. Lint entries in `log.md` use `op: lint`.

## Part 19 — HMT&C threshold-setting workflow

When Karen asks Claude to propose a threshold for HMT&C:

Start from the wiki's current synthesis for the relevant metal and ingredient or product.

Show the work: cite the studies, show the source evidence inventory, then show the selected aggregate or selected-dataset CC candidate. p90 is derived from the selected clean-platform distribution in the Step 0F CC Source Data Package; it is not shown as a separate value for every paper unless that paper itself is the selected Path A dataset. For lower-is-better source evidence, p100/max is the highest observed concentration in that source's scoped pool.

Do not use intake or exposure estimates as if they were product concentration percentiles. Intake tables can inform exposure context, but HMT&C product thresholds need concentration distributions in ppb by matrix, metal, geography, and product fit.

Compare against FDA, EU, Codex, California Prop 65, and the Baby Food Safety Act (if applicable).

Flag sampling plan implications. A limit is only as good as its sampling and method.

Name the rationale for any gap between literature and proposed limit. Tag with one of: precautionary, market-ratcheting, feasibility-driven, regulatory-alignment. The gap itself is fine and often intentional. Failing to name the rationale is the lint failure.

## Part 20 — Course drafting workflow

When writing course content:

Start from learning objectives, not from existing wiki content.

Link into canonical wiki pages rather than duplicating. If a wiki page is not educator-friendly enough, improve the wiki page (with an `audience: educator` section) rather than forking content into the course.

Every technical claim in a course must trace through the wiki to an A-tier or B-tier source.

## Part 21 — App-layer workflow

When working on `wiki/app/` pages:

Keep ingredient frontmatter machine-readable and consistent. The app will parse these directly.

When `contamination_profile` values change, advance or update `status`, bump `last_reviewed`, bump the page `updated` field, log why, and commit.

Document uncertainty explicitly: ranges, confidence levels, number of underlying studies. The app must never report a point estimate it cannot defend.

The app must handle `status: pending` gracefully, either by excluding the ingredient from the estimate, by communicating "not yet characterized" to the user, or by falling back to category-level defaults. Never silently substitute a null for a zero.

## Part 22 — WikiBiome federation prep

When writing `microbiome/` pages or microbiome sections of metal pages:

Use `wikibiome_crosswalk` slugs in frontmatter; treat them as stable anchors for future federation.

Prefer mechanistic framing: exposure → microbiome change → functional consequence → disease process.

Name taxa at genus or species level where the source supports it; do not aggregate up to phylum unless that is what the source did.

Keep these pages self-contained enough to be lifted into WikiBiome without requiring the rest of this wiki as context.

## Part 23 — Images and figures

Some sources (especially agency reports and COAs) have critical information in figures and tables. When ingesting:

Read the text first.

Then explicitly view the figures and tables that matter. For Marker-converted input, figures are extracted as separate image files in the source's `raw/markdown/FM_XXXXX/` folder; Claude views them directly.

If a figure contains data we need structured (for example, a concentration distribution), transcribe it into a markdown table on the source page.

Store extracted images in `raw/assets/<cite-key>/` if the source does not already have them attached.

## Part 24 — Things to proactively do

Flag regulatory changes. If during a web-augmented query Claude discovers an FDA, EU, or Codex update not yet in the wiki, tell Karen and suggest an ingest.

Suggest new sources. At the end of any substantial ingest or query, propose two to five papers or reports to read next and why.

Propose schema changes. If this file is getting in the way or missing something, say so. Karen and Claude evolve it together.

Call out weak spots. If an ingredient page is driving app logic on the back of a single 2015 study, say so. If an HMT&C proposed threshold is driven by weak evidence, say so more loudly; those have direct commercial and legal consequences.

Maintain the synthesis. `wiki/synthesis.md` should reflect the current best understanding. Update it when ingests move the needle. If Karen has not asked for a synthesis update in a while, ask whether it is time.

Protect both directions of drift. If the wiki is softening claims to cover for HMT&C, flag it. If the wiki is strengthening claims to justify HMT&C thresholds beyond what the literature supports, flag it. Both destroy the epistemic asymmetry this project depends on.

## Part 25 — Out of scope (for now)

Writing original lab procedures. These will be sourced from validated methods.

Regulatory advice for specific brands. Claude can summarize rules, not prescribe compliance.

Medical claims. Claude describes mechanisms and exposures; it does not diagnose or treat.

## Part 26 — Future build: private brand-intelligence wiki

Separate, private project. Not this repo. Documented here so the context is not lost.

Purpose: an internal-only wiki that ingests brand-level lab data (COAs, Consumer Reports tables, HBBF datasets, HMT&C program testing results, and, pending a partnership conversation, Light Labs data) and builds a structured picture of how brands actually perform on Pb, Cd, iAs, and tHg across product categories. Used internally to identify outliers, benchmark the certification program, spot category-wide problems, and inform which ingredients and products the public wiki should prioritize.

Why separate: different audience (internal only), different legal posture (brand-identifying data), different retention rules, different access controls. Keeping it in its own repo means the public wiki can never accidentally leak brand-level specifics through a shared index, a stray link, or a lint report.

Rough shape, to refine when built:

`raw/` — COAs, scraped or licensed third-party datasets, HMT&C program results, Light Labs feed (if licensed).

`wiki/brands/<brand>.md` — per-brand profile: product lines tested, metal-by-metal distribution, outlier flags, trend over time.

`wiki/categories/<category>.md` — category-level distributions with brand names attached, percentile rankings, outlier lists.

`wiki/outliers/` — running list of flagged results (high and anomalously low) with follow-up status.

`wiki/datasets/<source>.md` — one page per data source documenting provenance, license terms, methodology, and what is allowed.

Schema mirrors this file's conventions (frontmatter, evidence tiers, cite keys) so ingestion workflows feel familiar.

Open questions to resolve before building:

Light Labs partnership: can a data feed be licensed? What are the terms — raw results, aggregated, brand-identified? What is the refresh cadence? Who owns derived analyses?

Data-use agreements: review what Consumer Reports, HBBF, and other published datasets actually allow for internal re-analysis and re-hosting. Cite-and-link may be fine; re-hosting brand-level tables usually is not.

Retention and access: who on the team gets access? Is it git-based with private remote, or does it need something with stronger audit logging? Are there brands under NDA whose data needs tighter isolation?

Federation with the public wiki: the private wiki can read the public wiki for context (ingredient profiles, regulations, testing methods). The public wiki must never read or import from the private one. One-way link only.

Anonymization path: if category-level aggregates from the private wiki would strengthen the public wiki or courses (for example, "across 400 samples of infant rice cereal, the 90th percentile for iAs is X ppb"), define the rule for when aggregates are safe to publish — sample size thresholds, no brand-identifiable cell sizes, legal review.

When ready to start this build, spin up a new repo with its own CLAUDE.md derived from this one, and log the kickoff here so the two projects know about each other.

## Part 27 — Kickoff procedure

When Karen drops the first batch of Marker-converted markdown:

Propose a manifest summary: total papers, breakdown by priority tier, any unusual flags from the triage data.

Propose an initial top-level skeleton. Which metal pages, ingredient pages, regulation pages, and testing pages to create as stubs before ingesting, so ingests have somewhere to attach. Wait for Karen's approval.

Create `index.md`, `log.md`, `overview.md`, and `synthesis.md` as stubs.

Initialize git if not already initialized. Make the first commit with this CLAUDE.md and the stub files.

Begin ingesting in priority order (Part 11), processing in batches of 200 (Part 8). Produce batch reports after each batch. Commit after each batch.

Karen reads batch reports and runs Karen's Lab lint checks at her own pace. Escalations from batch reports get handled before the next batch begins if they affect downstream ingests; otherwise they queue for end-of-corpus review.

Let's build.
