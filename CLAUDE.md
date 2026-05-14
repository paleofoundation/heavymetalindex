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

The `docs/governance/` directory contains internal HMTc program governance rules. These files are not public wiki pages, but they are binding inputs for product-category pages, HMTc standards, crosswalks, certification thresholds, and limit-setting workflows. Read `docs/governance/hmtc-governing-principles.md` before that work, and flag conflicts between consumer protection, contamination reduction, brand value, legal defensibility, and scale instead of silently optimizing for only one principle.

AI adjudication is the default evidence workflow. Codex should perform source-to-row fit, basis, analyte species, statistic-type, censoring, unit, and routeability decisions whenever the source provides enough information, then write the decision into structured records and generated audits. Human participation should be framed as source retrieval, governance, exception review, and final approval, not routine row sorting.

### Canonical location

The canonical local repo is `~/Desktop/heavy-metal-index/`. The GitHub remote is github.com/paleofoundation/heavymetalindex. Builds from this repo publish to heavymetalindex.com. Do not ask Karen to mount, switch, relocate, or designate a different canonical. The canonical is final, and re-asking the question is itself a failure mode that has cost real time across LLM sessions. If a session is operating on a copy or scratchpad of CLAUDE.md or the wiki and notices it is not in the canonical repo, the correct action is to surface that fact and stop, not to ask Karen to re-mount anywhere.

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

The frontmatter the model fills on each source page is the input to the routing layer described in Part 5b. Routing fan-out, ingredient `contamination_profile` updates, and product-page table regeneration all depend on this frontmatter being accurate and at the right level of specificity. See Part 5b for what the routing layer does with the frontmatter and Part 9 for what the synthesis pass does after.

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

## Part 5b — Routing layer (system rule, not a per-session task)

The wiki has a routing layer that is the system's responsibility, not the model's. No session, ingest or otherwise, is expected to maintain routing by hand. No prompt should ask the model to write routing rows directly. If a session finds itself maintaining routing by hand, that is a session-architecture failure to surface to Karen, not work to complete.

### What routing is

Routing is the mapping from each source to every product-category, ingredient, metal, and regulation page it should appear on. A single paper that measures "lead in 230 infant formulas, 192 cow-milk-based powders and 38 soy-based powders" should appear on the non-soy powder, soy-based powder, non-soy RTF, and soy-based RTF product pages (as direct evidence on the first two and broad-format-context on the second two), on `metals/lead`, and on the relevant cow-milk-derived and soy-protein-derived ingredient pages. The routing layer expresses that fan-out.

The routing layer is the answer to a recurring failure mode: papers get ingested with frontmatter that correctly names the products and ingredients they touch, but no downstream process reads that frontmatter and fans the source out to the sibling pages. Without the routing layer, every later session has to re-derive routing from scratch, which is slow and lossy. With the routing layer, fan-out happens once, persists in a CSV, and gets refreshed automatically when source pages change.

### Where routing lives

`data/evidence/product_source_routing_audit.csv` is the canonical routing artifact. One row per (source, target-page, route_kind) triple. The `route_kind` vocabulary is fixed: `direct_evidence`, `broad_formula_context`, `broad_powder_context`, `broad_product_context`, `exposure_only`, `regulatory_context`. Two sibling logs catch failures: `data/evidence/routing_unresolved.csv` (source frontmatter does not connect to any known target page) and `data/evidence/routing_malformed.csv` (source frontmatter is missing required fields).

### How routing is maintained

`tools/evidence/build-routing-audit.mjs` (or successor) reads every file in `wiki/sources/` and emits the audit. It runs on three triggers and is not invoked manually:

1. File watcher: a `chokidar` watcher on `wiki/sources/` triggers a rebuild of the audit within seconds of any source page being created or modified. This runs as part of `npm run serve`.
2. Pre-commit hook: any commit touching `wiki/sources/` runs the audit and aborts if the audit cannot be regenerated cleanly (unresolved or malformed entries above a configurable threshold).
3. Prebuild: `npm run build` runs the audit as part of the existing `prebuild` script. The build fails if the audit is stale relative to source pages or if `routing_malformed.csv` is non-empty.

If any of these triggers reports work, the assumption is that ingest happened and routing recovered automatically. Karen should never see a stale audit.

### What models are responsible for during ingest

The model writes the source page. It fills in frontmatter accurately, especially the `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` arrays, because those arrays are the routing layer's input. If a source touches infant formula generally without specifying soy vs non-soy, the frontmatter should say `matrices: [infant-formula]`, not `matrices: [infant-formula-powder-non-soy]`. The routing layer fans broad scopes out to sibling pages; the model does not pre-decide that fan-out by overspecifying frontmatter.

### What models are NOT responsible for during ingest

The model does not edit `product_source_routing_audit.csv`. The model does not update product-category page tables (those are regenerated by the generators in `tools/evidence/` downstream of the audit). The model does not maintain a mental map of which pages a source should land on. If a session begins by reading the routing audit to refresh its understanding of which sources sit where, that is fine; if a session attempts to maintain routing by hand or recompute fan-out per paper, that is a system failure to surface to Karen.

The routing layer's output also feeds the synthesis workflow in Part 9. When the audit reports that an (ingredient, metal) cell has accumulated a new contributing source, the synthesis pass can then read the contributing sources together and update the ingredient page's `contamination_profile`. The model writes source pages during ingest and runs synthesis as a separate workflow; the routing audit is what connects the two.

### What lint catches

The lint pass in Part 18 fails the build if:

- `routing_unresolved.csv` is non-empty (the model declared frontmatter that does not match any product or ingredient page; needs new-page proposal or frontmatter fix)
- `routing_malformed.csv` is non-empty (a source page is missing required frontmatter fields)
- The routing audit's last-modified timestamp is older than any file in `wiki/sources/` (stale audit)
- Any product-category page references a source whose routing row has been removed (orphaned reference)

### Migration note

Pages and sources that predate this routing layer were ingested by sessions that did not write routing rows or whose frontmatter fan-out was incomplete. A one-time routing-recovery pass over `wiki/sources/` produces the initial audit; after that pass, the file watcher and pre-commit and prebuild triggers keep the audit current automatically. If a product-category page looks thin (few sources, or fewer sources than its sibling pages), the most likely cause is that the routing layer has not been built yet for the corpus, not that the corpus is missing those sources.

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

Two to four sentences of un-headed opening prose summarizing what the authors measured, what they found, and why it matters. The prose sits directly under the `# H1` title with no `## TL;DR` heading; the wiki reads as authoritative reference, not as a list of casual TL;DRs. Source pages created before 2026-05-08 may still carry the legacy heading; remove it on touch.

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
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
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

#### Mandatory ingredient-page sections (enforced)

Every non-stub ingredient page must carry the following sections as `## H2` headings in this order. Stubs (all-pending `contamination_profile`, no contributing sources) are exempt. The lint check in Part 18 enforces these on non-stubs; pages that fail surface in the audit and feed an orchestrator action that drafts the missing sections from the routing audit.

1. `## Why this commodity accumulates heavy metals` — the soil, plant biology, processing, or sourcing reason this ingredient is on the wiki. One to three paragraphs of prose.
2. `## Heavy metal contamination profile` — the body-level synthesis table per the Part 6 ingredient-table template (analyte × coverage × typical ppb × p95 ppb × confidence × key sources). Auto-generated by `tools/evidence/build-source-legend.mjs` companion and the synthesis subprocess; never hand-edited inside its marker bounds.
3. `## Ranges by source, region, and variety` — geographic and varietal variation, anchored on sources. Where geographic or seasonal variance data exists in the per-metal sub-block, this section presents it.
4. `## Processing effects` — polishing, rinsing, parboiling, fermentation, drying, milling, refining, and how each step shifts concentrations of which metals. Cite the source for each claim.
5. `## Ingredient-derivative risk` — when this ingredient is processed into syrups, concentrates, flours, brans, or other derivatives, which derivatives concentrate or dilute which metals. Bran-vs-whole-vs-white examples are the canonical case.
6. `## Mitigation options` — practical interventions to reduce heavy-metal load, ordered by impact magnitude. Subsections in this priority order: sourcing levers (origin region, supplier specification, soil-Cd or paddy-iAs pre-screening), agronomic levers (soil amendments, water management, cultivar selection), processing levers (rinsing, polishing, fermentation, drying), formulation levers (substitute or dilute), testing and QC levers (lot-level vs spot-check, internal vs third-party), packaging and storage levers (where relevant). Each lever is a one-paragraph entry naming the magnitude of the effect with a cited source. Cross-link to dedicated `mitigation/<topic>.md` pages where they exist.
7. `## Regulatory limits that apply` — Codex, EU, FDA, and other operative limits for this ingredient or its derived products, with the limit value, the matrix scope, and the basis (product as placed on market, as consumed, dry weight, etc.). Cross-link to `regulations/<rule-id>` pages.
8. `## Sources` — the source legend table auto-generated by `tools/evidence/build-source-legend.mjs` per the Part 6 source-legend template. Hand-edited only inside the marker block when adding "Used on this page for" descriptions; never restructured outside the markers.

Stub pages (`status: pending` across all `contamination_profile` sub-blocks and zero contributing sources in the routing audit) carry only sections 2 (the body table, all rows marked as data gap) and 8 (the source legend with the empty-corpus message). When a stub crosses the threshold of two-plus contributing A-tier sources, the section-completion subprocess action drafts sections 1, 3, 4, 5, 6, and 7 from the routing audit and the contributing source pages.

Sections: Why this commodity accumulates heavy metals, Heavy metal contamination profile (body table), Ranges by source/region/variety, Processing effects, Ingredient-derivative risk, Mitigation options, Regulatory limits that apply, Sources.

The `contamination_profile` block is deliberately machine-readable. The app will consume it directly.

#### Geographic and seasonal variance sub-fields (added 2026-05-12)

Each metal sub-block carries two optional variance arrays — `geographic_breakdown` and `seasonal_variance` — that hold the regional and harvest-period range data brand legal teams need to defend against a cherry-picked-maximum attack. See OPERATING.md Part 7 standing initiative 7 for the strategic frame.

```yaml
  Cd:
    status: populated
    typical_ppb: [80, 240]
    p95_ppb: 410
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-12
    geographic_breakdown:
      - region: "Côte d'Ivoire"
        range_ppb: [60, 180]
        n: 124
        sources: ["[[sources/example-cocoa-cdv-2024]]"]
      - region: "Ecuador, high altitude"
        range_ppb: [220, 540]
        n: 87
        sources: ["[[sources/example-ecuador-cocoa-2023]]"]
      - region: "Ghana"
        range_ppb: [70, 210]
        n: 92
        sources: ["[[sources/example-ghana-cocoa-2022]]"]
    seasonal_variance:
      - period: "El Niño years (Ecuador 2015-2016, 2023)"
        range_ppb: [180, 620]
        n: 41
        sources: ["[[sources/example-elnino-cocoa-2024]]"]
        note: "Drought-stress concentrates Cd uptake; values run roughly 40 percent higher than non-El-Niño-year baselines."
```

Schema rules:

- Both arrays are optional and default to empty. A populated `contamination_profile` is valid with or without variance entries.
- Each entry carries `region` (or `period`), `range_ppb`, `n` (sample count from the cited source set), `sources` (list of contributing source wikilinks), and optional `note` (one-line caveat).
- Regional entries are non-overlapping enough to read sensibly (state-level, country-level, or production-region-level, depending on what the literature reports). Mixing state-level US entries with whole-country EU entries is fine; mixing state-level US with sub-state US (county-level) is not.
- Seasonal entries name an explicit period or condition (harvest year, drought, monsoon timing, El Niño phase). Avoid vague periods like "summer" without geographic context.
- Variance entries are populated by the synthesis pass per Part 9 when sources report the data, or lazily added when materials drop into `raw/manual-fetch/seasonal-geographic-variance/` per OPERATING.md initiative 7 Phase C. The ingredient page does not need every metal × region cell pre-stubbed.

The metal set is the ten metals: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U. Schema history: pre-2026-05 ingredient pages used a 4-metal subset (Pb, Cd, iAs, tHg); 2026-05-03 extended to an 8-metal set (added Ni, Al, Cr, Sn); 2026-05-08 extended to the current 10-metal set (added tAs as a separate sub-block from iAs because most occurrence surveys report total arsenic and the iAs/tAs split is non-negotiable per Part 14, and added U because the wiki's scope is "heavy metals in food" rather than "HMTc-certified analytes" and uranium is a recognized toxic heavy metal of rising public-health attention even though it is not in the HMTc-10 analyte vocabulary); 2026-05-12 added the `geographic_breakdown` and `seasonal_variance` sub-fields per metal for brand-legal defensibility per OPERATING.md initiative 7. The Cr sub-block carries total chromium; Cr-VI evidence belongs on [[metals/chromium-hexavalent]] and is never substituted for total Cr in the ingredient profile. MeHg deliberately stays out of the ingredient profile because it is matrix-driven (fish/seafood-specific); MeHg evidence is captured in body prose on the small set of pages where it matters and at the product layer. Adding an eleventh metal in the future requires extending all existing ingredient pages in lockstep; the schema-extension is mechanical and idempotent (see `tools/` if a script is added, or perform via targeted edits).

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

#### Coverage rule: all ten analytes addressed per ingest

When any ingest touches an ingredient page (advances at least one sub-block to `in_progress` or `populated`), all ten sub-blocks must move out of `pending` in the same pass. Sub-blocks for analytes the source does not cover are advanced to `status: populated, n_studies: 0, confidence: null, last_reviewed: <today>` — the declared-data-gap state described above. A page whose sub-blocks are split between `in_progress`/`populated` and `pending` is a lint failure (see Part 18): it represents asymmetric coverage where some analytes have been considered and others were silently skipped. This rule exists because HMT&C certifies products against the full analyte vocabulary (Part 14); ingredient pages that report on iAs but are silent on Ni leave the certification's literature anchor visibly incomplete and create the defensibility gap described in Part 2. Pages still carrying all-`pending` sub-blocks (no ingest has yet touched them) are not lint failures; they are the legitimate stub state.

The coverage rule applies to the ten metals in the ingredient `contamination_profile` schema (Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U). MeHg is not in the ingredient profile (matrix-driven, captured at the product layer per Part 6); Cr-VI evidence lives on [[metals/chromium-hexavalent]] and is never substituted for total Cr in the ingredient profile (Part 14). Declaring an analyte a data gap is a finding, not a placeholder: it tells the app, the certifier, and downstream readers that the wiki has reviewed the literature for this commodity-analyte combination and found nothing usable, which is materially different from "we have not looked."

#### Body table: "Heavy metal contamination profile"

The `contamination_profile` YAML is for the app. Human readers — regulators, brand QA, journalists, plaintiff and defense experts — read the page body. Every ingredient page that has been touched by an ingest must therefore carry a body-level table summarizing per-analyte coverage:

```markdown
## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2       | 50–200 | 350    | low    | [[sources/foo2024-bar\|1]], [[sources/baz2023-qux\|2]] |
| Cd  | n=5       | 100–600 | 1,200 | medium | [[sources/...\|3]], [[sources/...\|4]] |
| iAs | data gap  | —      | —      | —      | — |
| tAs | n=3       | ...    | ...    | low    | ... |
| tHg | data gap  | —      | —      | —      | — |
| Ni  | n=1       | 800    | —      | low    | [[sources/...\|5]] |
| Al  | n=1       | 20,000 | —      | low    | ... |
| Cr  | n=1       | 200    | —      | low    | ... |
| Sn  | data gap  | —      | —      | —      | — |
| U   | data gap  | —      | —      | —      | — |

### Source legend
1. [[sources/foo2024-bar]] — short description of what this source contributes
2. [[sources/baz2023-qux]] — ...
```

Coverage cells use `n=<count>` when `n_studies > 0` and `data gap` when `n_studies = 0` with `status: populated`. Numerical cells use `—` for data gaps. Key-sources cells cite the top two or three contributing sources using the numbered-alias convention (see product-category pages above), with a `Source legend` section below the table mapping each number to the full source page and what it contributes. This table is a sanctioned exception to Part 15's "multi-column tables discouraged" guidance; the stakeholder-snapshot use case warrants the format, and the same data lives in machine-readable form in frontmatter for any rendering surface that cannot accommodate the wide table.

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

Sections, in render order: Methodology, Literature Evidence Summary (generator-managed under the `hmi-hmtc-evidence-summary` marker), Federal/Regulatory Limits vs Field Findings (generator-managed under the `hmi-product-crosswalk` marker), Evidence Governance, Lead Benchmark Context (generator-managed under `lead-benchmark-context` marker, where applicable), Page Completeness, Source Evidence Inventory, Structured Concentration Rows (where sample-level data exists), Broad Product Context: Author-Scope Index (generator-managed under `hmi-broad-context-sources` marker), Internal Standards Boundary, Evidence Used For This Row, Exposure Estimates (where relevant), Row Relationship, Why This Category Is High-Risk, What Drives Variance Across Brands, How The App Would Estimate Risk From An Ingredient List, Historical Recalls/Enforcement (frame as regulatory events, not brand rankings, see Part 12), Sources.

**This page is the public, literature-native view of the product category.** The wiki/HMT&C firewall in Part 2 applies: percentile-selection arithmetic (p10, p30, p50, p90, p95, p100), CC eligibility verdicts, n_a_tier counts, clean/dirty subcategory designations, and Path A / Path B status do not appear on this page. They appear on the staff workbench snapshot at `wiki/workbench/standards/<product-slug>.md`, auto-generated by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`. The staff workbench is the home for threshold-selection content; this public page is the home for literature evidence.

The `Methodology` section, near the top of the page, states the rules that govern the rest of the page: speciation is treated as non-substitutable; basis is preserved and labeled, never silently converted; non-detect handling preserves the source's own reporting convention; source pooling is avoided across LOQ, period, geography, and analytical-basis differences; row-fit is determined by author scope, not by re-derivation; evidence tiers and confidence ratings follow CLAUDE.md Parts 6 and 13. Downstream sections anchor to this Methodology block rather than restating the rules.

The `Literature Evidence Summary` section is generator-managed inside the `hmi-hmtc-evidence-summary` BEGIN/END markers. Its columns are literature-native: analyte, subcategory designation in plain language, reported concentration range across cited sources (means and medians plus highest reported value), detection rate where the underlying source supports it, applicable regulatory cap with jurisdiction and basis, source count, low/medium/high confidence rating per Part 6, and basis note. No internal codenames, no percentile arithmetic, no CSV paths. The generator emits a parallel staff snapshot to `wiki/workbench/standards/<product-slug>.md` carrying the percentile arithmetic.

The `Source Evidence Inventory` section separates measured product concentrations from intake or exposure estimates. It shows what each source actually reports: metal, evidence scope, n, statistic type, reported values, units, max or p100 if directly reported or derivable from a range, row-fit, and a brief evidence note. Do not add p10, p50, p90, or p95 columns to source rows unless the source itself reports those statistics. The inventory remains hand-curated; the generator does not own it.

Row-fit is determined by what the authors state their scope to be, not by what the ingest can independently re-derive from the data tables. If the title, abstract, methods, or table-defining footnotes specify the matrix (milk-based powdered infant formula, soy-based infant formula, brown rice cereal, fluid cow milk, etc.), row-fit for that subcategory is exact. Mark row-fit as partial only when the authors themselves use a vague umbrella term ("infant formula" without specifying base, "leafy greens" without specifying species) and tables do not narrow the scope. Mark row-fit as unknown only when authors are silent on matrix and the data tables genuinely do not resolve it. Tables that visibly contradict the stated scope (a paper titled "milk-based" reporting samples labeled as soy-based hydrolysate) are flagged for curator review, not silently downgraded. The default posture is: trust author scope statements; over-hedging row-fit destroys the value of the source evidence inventory.

Row-fit is a compound classification with two axes: the **matrix axis** (milk-based vs soy-based vs hydrolyzed; rice-based vs non-rice; root vegetable vs leafy green) and the **format axis** (powdered vs ready-to-feed vs concentrated liquid; dry vs as-consumed; jar vs pouch). Each axis is classified independently as exact, partial, or unknown per the rule above. A paper exact on matrix but silent on format counts toward matrix-scoped pools only, not format-narrowed ones. For example, Chung 2021 reports 93 cow milk-based formulas without splitting powder from ready-to-feed liquid, so it counts toward a non-soy matrix evidence pool but not toward the format-narrowed non-soy-powder pool. Source-page TL;DR and frontmatter `matrices` / `products` should record both axes explicitly when known.

The `Broad Product Context: Author-Scope Index` section is generator-managed inside the `hmi-broad-context-sources` BEGIN/END markers. It catalogues sources whose author-stated scope is broader than this row (broad formula context, broad powder context, broad product context per the routing layer's `route_kind` vocabulary) and labels each source's matrix-axis and format-axis classification plus where it appears canonically on the page. Cross-references prevent double-counting.

The `Federal/Regulatory Limits vs Field Findings` section is generator-managed inside the `hmi-product-crosswalk` BEGIN/END markers. It compares the applicable regulatory cap to the cited field-evidence on a like-for-like basis when conversion is well-defined (for example, prepared-for-feeding to powder-as-placed at the conservative 1:7 reconstitution), or anchors to the Methodology section's speciation rule when conversion is not possible (total arsenic vs inorganic arsenic, total mercury vs methylmercury, total chromium vs Cr-VI).

Do not combine geography, period, and product-fit scopes without labeling the consequence. Product fit, analytical basis, sample size, detection handling, period, and jurisdiction must be recorded as metadata for confidence and applicability review. The standards workflow may pool across jurisdictions when documented confidence is sufficient; pooling is a staff-side decision recorded in the workbench snapshot, not a public-page claim. Geography can affect weighting or scope notes; it is not a hard exclusion rule.

Inline and table citations on product-category pages use numbered source aliases, for example `[[sources/<cite-key>|1]]`, so the rendered page stays readable. A `Sources` block near the end maps each number to the full source page and describes what that source contributes. Full source names should not be used as inline citation labels in dense tables.

#### Mandatory product-category-page sections (enforced)

Every non-stub product-category page must carry the following sections as `## H2` headings. Stubs (no contributing sources in the routing audit) are exempt. The lint check in Part 18 enforces these on non-stubs; pages that fail surface in the audit and feed an orchestrator action that drafts the missing sections.

1. `## Who this page is for` — stakeholder framing per the brand-legal-priority audience hierarchy in OPERATING.md Part 2. One paragraph naming who reads this page and what they are looking for.
2. `## Methodology` — the speciation, basis-preservation, row-fit, and pooling rules that govern downstream sections.
3. `## Literature Evidence Summary` — generator-managed inside the `hmi-hmtc-evidence-summary` markers.
4. `## Source Evidence Inventory` — what each source reports at the sample level, hand-curated.
5. `## Broad Product Context: Author-Scope Index` — generator-managed inside the `hmi-broad-context-sources` markers.
6. `## Federal/Regulatory Limits vs Field Findings` — generator-managed inside the `hmi-product-crosswalk` markers.
7. `## Levers to reduce contamination` — practical interventions to reduce heavy-metal load, ordered by impact magnitude. Either a table or paragraph-per-lever format, whichever is most intuitive for the product class. The five lever categories must each be addressed (sourcing, agronomic, processing, formulation, testing-and-QC, packaging-and-storage where relevant) and ordered by impact in descending order. Each lever names the magnitude of effect with a cited source. Cross-link to dedicated `mitigation/<topic>.md` pages where they exist, to the relevant ingredient pages' Mitigation options sections, and to the relevant regulatory pages.
8. `## How standards math uses this page` — explanation that the row-standard percentile is an aggregate, not a per-source decoration.
9. `## Historical recalls and enforcement` — public-record regulatory events, framed as events not brand rankings (per Part 12).
10. `## Sources` — the source legend table auto-generated by `tools/evidence/build-source-legend.mjs`.

The Levers section is the brand-legal-actionable surface of the product page. It exists because brand legal and QA readers reading the page to evaluate certification or risk-mitigation pathways need a clear ranked list of what changes most-effectively reduce heavy-metal load, ordered by magnitude. A page that documents contamination without naming the levers is half a page. The lever-by-lever magnitude claims are cited; the ordering is the synthesis judgment of the wiki across the contributing sources and the relevant `mitigation/` pages.

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

For this build, ingest means compiling a source into the persistent wiki system. It does not mean "the file is searchable now." The work is split across actors: the **model** writes prose content (source pages, narrative wiki content where appropriate); **system** scripts handle routing and structured-evidence emission; **generators** rebuild product-page tables and other compiled views; **Karen** decides scope, names new pages, and approves limit-setting work. Each step below is tagged with the responsible actor so any session can see, on first read, what is and is not the model's job.

A source is not counted as ingested until all applicable steps below are complete:

1. [Karen] preserve the raw source and verify provenance.
2. [model] create or update the canonical source page at `wiki/sources/<cite-key>.md`, filling in frontmatter accurately per Part 5 (especially the `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` arrays, which feed the routing layer in Part 5b).
3. [system, future] extract deterministic evidence into `data/evidence/` with basis, species, unit, statistic-type, and row-fit metadata. Where the evidence is sample-level and the source structure permits, this is mechanical. Until the structured-extraction tooling exists, the model may manually transcribe a small number of key tables to `data/evidence/` per Karen's request, but this is not the default for routine ingest.
4. [system, per Part 5b] route the source to the correct wiki page family by rebuilding `data/evidence/product_source_routing_audit.csv` from source-page frontmatter. The model does not write routing rows.
5. [model, on Karen's approval] create a stub page if the destination page does not yet exist (an ingredient or product page the routing layer reports as `routing_unresolved`). The model proposes; Karen approves; the model creates the stub with required frontmatter.
6. [generator, per Part 6 product-category template] regenerate affected product-page evidence surfaces (the marker-bounded sections written by `tools/evidence/apply-product-*.mjs` and `tools/apply-product-crosswalk-sections.mjs`). The model does not edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers; the next generator run will overwrite them.
7. [model, then Karen] update `index.md` and `log.md` (until those are auto-emitted per Part 16 and Part 17), run `npm run prebuild` and `npm run check`, and commit.

If automation cannot place evidence cleanly, do not silently drop the source. The routing audit emits `routing_unresolved.csv` and `routing_malformed.csv` when source frontmatter does not connect to any known page or is missing required fields; the structured-evidence reingest queue and standards gap report flag the value-level extraction work. The missing placement stays visible and recoverable in those artifacts; the model does not have to remember it.

### Single-paper ingest (Karen drops one file and says "ingest this")

When Karen drops a file into `raw/` and says "ingest this", the model's deliverable is the source page plus a list of any new pages the routing layer flags as unresolved. Routing fan-out, ingredient `contamination_profile` updates, and product-page table regeneration are downstream system passes (Part 5b, Part 9), not part of the ingest itself.

1. [model] Read the file. For PDFs, actually extract and read the text. For Marker-converted markdown, read the markdown. For images or figures, view them.
2. [model] Tell Karen the TL;DR first, three to five sentences, before writing anything. Wait for Karen's reaction so she can redirect.
3. [model] Create the source page at `wiki/sources/<cite-key>.md` using the template in Part 6. Frontmatter accuracy is load-bearing because it feeds the routing layer (Part 5b); fill `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` at the level of specificity the source actually states, not at the level you guess the routing layer will need.
4. [system] Rebuild the routing audit by running `npm run evidence:source-routes` (or letting the watcher pick up the new source page once Part 5b's watcher is wired). The audit names the affected product, ingredient, metal, and regulation pages. The model reads the audit; the model does not re-derive fan-out from the source's content.
5. [model, on Karen's approval] If the routing audit flags a `routing_unresolved` entry (the source declares a product or ingredient page that does not exist yet), surface the proposal to Karen. She approves; you create the stub with required frontmatter. Do not silently create new pages for unresolved routes; per Part 10, new ingredient pages are proposed in batch reports, not invented per-source.
6. [generator] Run `npm run prebuild` (or `npm run crosswalk:apply`) so the affected product-page generators regenerate their marker-bounded sections from the updated routing audit and structured evidence. Do not edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers by hand.
7. [model, where Part 9 applies] If the source contributes to an ingredient's `contamination_profile`, advance `status` from `pending` to `in_progress` or `populated` for analytes the source addresses and populate `confidence`, `n_studies`, and `last_reviewed` accordingly. Apply the Part 6 coverage rule: any remaining `pending` sub-blocks on the same page advance to `populated` with `n_studies: 0` to declare the data gap explicitly, so a touched ingredient page never leaves the ingest with mixed `pending` / `populated` sub-blocks. Update or create the body-level "Heavy metal contamination profile" table to match the new state. Where a (metal, ingredient) combination already has loaded synthesis, run the Part 9 incremental-update rules; treat the synthesis workflow as triggered by the routing audit, not as part of writing the source page.
8. [model, until auto-emit per Part 17] Append a one-line entry to `log.md` and update `index.md` if a new page was created.
9. [model] Commit to git with a message that mirrors the log entry. Report back with a summary of what was written, what the routing audit reported, and any new-page proposals the audit surfaced.

Bias toward surfacing surprises. If a new source contradicts the wiki's current synthesis, say so loudly. The synthesis pass per Part 9 is where contradictions get resolved into updated values; the ingest itself just notes that the contradiction exists.

### Bulk ingest (23,000-paper corpus)

When ingesting the full Marker-converted corpus (or any batch over ~20 papers), the single-paper rules do not scale. Instead:

1. Verify or generate the batch manifest. For this project, the triage manifest is authoritative; Claude does not re-derive it. The manifest was built on 2026-05-12 (commit `fa96392`) and lives at `raw/manifest/triage-manifest.csv` with 23,260 rows, one per FM folder. Actual tier counts: P1 (HMT&C Path A candidates) = 54, P2 (LOQ source candidates) = 488, P3 (agency-affiliated) = 18, P4 (post-2020 peer-reviewed with metal content) = 6,571, P5 (everything else) = 16,129. These supersede the aspirational counts (~647 / 2,399 / 934) in Part 11; Part 11's text is left as historical context but the manifest is now ground truth. Note that the P1 pre-filter is a text-mining heuristic scanning the first 4,000 chars of each paper; many true HMT&C Path A papers report values in tables deeper in the document and are classified P4 by the pre-filter. Bulk ingest reading full content will upgrade them implicitly. Treat the tier label as a rough sort key, not a final gate.
2. Process in priority order. Priority ordering is defined in Part 11.
3. Process in batches of 200 papers. Within a batch, do not pause for human review; process each paper end-to-end (read, create source page) without waiting. Routing fan-out is handled by the routing layer per Part 5b after the batch completes, not per-paper.
4. Commit after each batch of 200, not per-paper. A single commit per batch with a message like `ingest batch 03 (papers 401-600): 47 source pages added`.
5. At the end of each batch, produce a batch report at `wiki/batch-reports/batch-NN.md`. The batch report contains:
   - Number of papers ingested, number skipped (with reasons)
   - New source pages created (list of cite-keys)
   - New metals, ingredients, or products encountered not previously in the wiki (proposals for new pages, not creations; see Part 10)
   - Any papers that failed to ingest and why
   - Any papers whose manifest-provided metadata disagreed substantially with actual content
6. Karen reads batch reports at her own pace. Karen's Lab (the external lint/QA system) runs linting across batches.
7. Do not pause for per-paper TL;DR approval during bulk ingest. The batch report is the review artifact.

**The model's only output during bulk ingest is source pages.** Bulk ingest sessions do not edit product-category page tables, do not edit `data/evidence/product_source_routing_audit.csv`, do not edit `data/evidence/values.jsonl`, and do not advance `contamination_profile` blocks on ingredient pages. Those layers are downstream artifacts. Routing is handled automatically per Part 5b; value-level extraction and synthesis are handled in separate dedicated passes per Part 9. If a bulk session finds itself wanting to update a product page or routing audit by hand, that is a signal to stop and surface the misunderstanding to Karen, not work to complete.

Frontmatter accuracy on source pages is load-bearing because it feeds the routing layer. The model fills in `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` arrays at the level of specificity the source actually states. A source that does not split soy vs non-soy formula gets `matrices: [infant-formula]`, not `matrices: [infant-formula-powder-non-soy]`. Overspecifying frontmatter to "pre-decide" routing is worse than leaving the routing layer to handle fan-out.

### Query workflow (Karen asks a question)

When Karen asks a question:

1. Read `index.md` first to locate relevant pages.
2. Read those pages. If needed, drill into `sources/` for primary evidence.
3. Answer with citations to wiki pages (which link onward to sources).
4. Ask Karen: "Should I file this as a page?" For anything substantive, the answer is usually yes. File under `wiki/queries/<YYYY-MM-DD>-<slug>.md` with frontmatter linking to the pages it drew from.
5. Append a short query entry to `log.md` and commit.

Output format can vary by question: markdown page, comparison table, chart (matplotlib), slide deck (Marp), decision tree. Use judgment; ask if unclear.

## Part 9 — Synthesis and re-synthesis

Synthesis is the workflow that turns accumulated source-page evidence into the `contamination_profile` values on ingredient pages, the narrative summaries on metal pages, and the cross-source claims in regulation pages. **It is a workflow, not an ingest step.** Source pages get written during ingest (Part 8); synthesis happens later, as a dedicated pass triggered either by the routing audit signaling that an ingredient/metal cell has new evidence or by Karen requesting it.

This separation matters because synthesis is analytical work that requires reading multiple sources together. Doing it during ingest forces every ingest session to re-derive synthesis from scratch for every paper, which does not scale to 23,000 papers and produces drift across sessions. Doing it as a separate workflow, triggered when the evidence base for a cell crosses a threshold, lets each synthesis pass do the full job once and persist its result.

### Trigger conditions for a synthesis pass

A synthesis pass for a given (ingredient, metal) cell runs when any of the following is true:

- The routing audit reports that the cell has accumulated a second contributing source since `last_reviewed`. This is the initial-population trigger: the cell moves from `status: pending` to `status: populated` with `confidence: low` and the first two-source synthesis.
- The cell's `n_studies` has doubled since `last_full_resynthesis` (resynthesize at 4, 8, 16, 32...). This is the periodic full-resynthesis trigger: re-read every contributing source page and rebuild the values from scratch.
- A new source's values disagree with the current page state by more than 2x in either direction for `typical_ppb` or `p95_ppb`. This is the contradiction trigger: a single source can warrant a synthesis pass on its own when it shifts the picture materially.
- Two A-tier sources contradict each other on a synthesis claim. The pass arbitrates by re-reading both in full.
- Karen explicitly requests resynthesis.

The triggers fire on the routing audit's signal, not on the ingest session's awareness. A bulk-ingest session does not run synthesis. A query session may trigger synthesis if Karen asks "what does the literature say about X" and the current synthesis is stale. A dedicated synthesis session runs when Karen says "resynthesize cocoa cadmium" or when the lint check (Part 18) flags stale cells.

### Initial population (first two sources)

When the routing audit reports the second contributing source for an (ingredient, metal) cell that is currently `status: pending`, run the initial-population pass:

1. Read the source pages for the two contributing sources in full.
2. Compute `typical_ppb`, `p95_ppb`, `n_studies: 2`, `confidence: low`.
3. Update the ingredient page's `contamination_profile` for that metal: `status: populated`, the four values above, `last_reviewed: <today>`, `last_full_resynthesis: <today>`.
4. Log the synthesis event to `data/evidence/review_events.jsonl` (the structured-evidence layer's authoritative record of resynthesis history) and to `log.md` for human-readable history.

### Incremental update (after initial population)

After `status: populated`, subsequent papers touching the cell are integrated incrementally rather than triggering full resynthesis.

When the routing audit reports a new source for an already-populated cell:

1. Read the incoming paper in full.
2. Read the current page state.
3. Read the source pages for the top 5 most-cited prior contributing sources (identifiable via wiki backlinks).
4. Update values if warranted, increment `n_studies`, update `last_reviewed`, leave `last_full_resynthesis` unchanged.

This is the middle path between naive overwriting (which drifts) and full re-read of all contributing sources (token-prohibitively expensive at scale).

### Full resynthesis (n_studies doubled, or trigger fired)

A full resynthesis re-reads every source page contributing to the cell and regenerates the values from scratch.

1. Identify every contributing source via wiki backlinks plus the routing audit.
2. Read each source page in full.
3. Recompute the values from the complete evidence set, not by patching the existing values.
4. Update `last_full_resynthesis: <today>` and log the event to `data/evidence/review_events.jsonl` with the trigger and the value change (if any).

### Synthesis tracking

Every `contamination_profile` metal sub-block carries `last_reviewed` (date of most recent incremental update) and `last_full_resynthesis` (date of most recent full pass). Both fields are model-maintained on the ingredient page. The authoritative resynthesis history lives in `data/evidence/review_events.jsonl`; until that file is consistently populated, the page-level fields are the working source of truth, and the lint check in Part 18 should flag mismatches between the two layers.

## Part 10 — Page creation and naming

New-page proposals (ingredient, product, regulation) surface from two places: the routing audit's `routing_unresolved.csv` when a source's frontmatter declares a page that does not exist, and the model's own pattern-noticing when a sub-variant accumulates enough independent evidence to warrant its own page (see thresholds below). Either way, Karen approves before pages are created; the model does not silently invent ingredient or product pages mid-ingest. See Part 5b for the routing layer's role and Part 8 single-paper ingest step 5 for how proposals get surfaced during ingest.

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

COAs and internal lab data belong in the private brand-intelligence build described in Part 26, not here. If Karen drops a COA into `raw/` by accident, flag it and ask before ingesting.

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

Structured data belongs in frontmatter YAML or two-column tables, not in bullets. Regulatory limits, concentration values, study details, and test method parameters are reference data, not analytical claims. They go in YAML where the app can parse them, or in two-column tables where humans can scan them. Multi-column tables are discouraged because they render poorly on mobile and in narrow Obsidian panes; if a multi-column table seems necessary, consider whether the data should be split across several two-column tables or represented as structured YAML. The ingredient-page "Heavy metal contamination profile" table defined in Part 6 is a sanctioned exception to this guidance: the stakeholder-snapshot use case (a single scannable view of all ten analytes for one commodity, read by regulators, brand QA, and legal reviewers) warrants the wide format, and the same data is available in machine-readable form in the frontmatter for any rendering surface that cannot accommodate it.

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
## [2026-04-24] batch | batch-03 (papers 401-600) — 200 source pages ingested
Source pages: 200 created. Routing rows added by the audit refresh: 162. New-page proposals (ingredient or product) surfaced to Karen: 4. Synthesis triggers fired downstream: 11 cells crossed the second-source threshold and are queued for the synthesis pass per Part 9. Batch report: [[batch-reports/batch-03]].
Notes: Flagged contradiction between Smith 2024 (n=1000) and Jones 2023 (n=50) on Hg in tuna; queued for the synthesis pass to arbitrate.
```

The bulk-ingest session's deliverable is the source pages and the new-page proposals. The routing audit refresh, the synthesis pass, and the product-page generator runs are downstream system passes that execute after the batch commits per Part 5b and Part 9. Earlier versions of this example tallied ingredient, metal, and regulation page touches; under the current architecture the session does not touch those pages directly.

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

Routing audit unresolved: `data/evidence/routing_unresolved.csv` is non-empty. A source's frontmatter declares products, ingredients, or matrices that do not match any existing target page, and the routing layer (Part 5b) could not fan the source out. Each unresolved entry is either a frontmatter correction (the model wrote the wrong slug) or a new-page proposal (the slug refers to a page that legitimately needs to exist; see Part 10).

Ingredient coverage asymmetry: ingredient pages where some `contamination_profile` sub-blocks are `in_progress` or `populated` while others remain `pending`. Per the Part 6 coverage rule, any ingest that touches an ingredient page must advance all ten sub-blocks out of `pending`; analytes the source does not address advance to `populated, n_studies: 0` as declared data gaps. Mixed-state pages indicate an ingest that addressed some analytes and silently skipped others, leaving HMT&C-relevant analytes without visible coverage decisions. Pages still carrying all-`pending` sub-blocks (untouched stubs) are not flagged by this check; only mixed-state pages are. Run via `node tools/audit-ingredient-metal-coverage.mjs`.

Ingredient body-table presence: ingredient pages whose frontmatter `contamination_profile` has any sub-block at `populated` or `in_progress` but whose page body lacks the "Heavy metal contamination profile" table from Part 6. The YAML is machine-readable; the body table is the stakeholder-facing surface and must travel with the data.

Ingredient mandatory sections: non-stub ingredient pages missing any of the eight `## H2` section headings required by Part 6 (Why this commodity accumulates heavy metals; Heavy metal contamination profile; Ranges by source, region, and variety; Processing effects; Ingredient-derivative risk; Mitigation options; Regulatory limits that apply; Sources). Stubs (all-pending contamination_profile and zero contributing sources) are exempt. The audit script is `tools/audit-ingredient-mandatory-sections.mjs` (to be built); the orchestrator surfaces failed pages as `COMPLETE-INGREDIENT-SECTIONS` candidate actions.

Product-page mandatory sections: non-stub product-category pages missing any of the ten `## H2` section headings required by Part 6 (Who this page is for; Methodology; Literature Evidence Summary; Source Evidence Inventory; Broad Product Context: Author-Scope Index; Federal/Regulatory Limits vs Field Findings; Levers to reduce contamination; How standards math uses this page; Historical recalls and enforcement; Sources). Stubs (zero contributing sources in routing audit) are exempt. The audit script is `tools/audit-product-mandatory-sections.mjs` (to be built); the orchestrator surfaces failed pages as `COMPLETE-PRODUCT-SECTIONS` candidate actions. The Levers section is the brand-legal-actionable surface of the product page and is the load-bearing addition; pages missing it specifically are escalated rather than just flagged.

Routing audit malformed: `data/evidence/routing_malformed.csv` is non-empty. A source page is missing required frontmatter fields (`cite_key`, `products`, `ingredients`, `matrices`, `metals`, `jurisdictions`, `source_type`, `evidence_tier`). The source page needs frontmatter repair before the routing layer can place it.

Routing audit stale: `data/evidence/product_source_routing_audit.csv` last-modified timestamp is older than any file in `wiki/sources/`. The routing layer (Part 5b) has not run since the source layer changed, so product pages may not reflect the current source corpus. Re-run `tools/evidence/build-routing-audit.mjs` (the watcher and prebuild hooks should make this automatic; a stale audit in lint means automation has broken).

Orphaned routing reference: a product-category page references a source whose row in the routing audit has been removed. Either the source was deleted (in which case the page reference should be removed too) or the audit was regenerated incorrectly.

Lint results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`. Lint entries in `log.md` use `op: lint`. Routing lint failures should block builds, not just produce reports, because routing drift propagates silently and is much cheaper to catch at the audit layer than to fix downstream.

## Part 19 — HMT&C threshold-setting workflow (staff-only outputs)

This workflow produces certification thresholds. **Its outputs are staff and HMT&C certification content, not public wiki content, and they do not live inside `wiki/`.** Per the wiki/HMT&C firewall in Part 2, percentile-selection arithmetic (any P-value computation), clean/dirty subcategory designations, pooling math, sensitivity bands, and final candidate values appear under `data/workbench/standards/` and on the local staff Standards Workbench tool — not on heavymetalindex.com and not in `wiki/`. Public product-category pages on this wiki render only the literature-native view per Part 6's product-category template: analyte, reported concentration range across cited sources, detection rate where sources support it, applicable regulatory cap, source count, confidence rating, basis note.

### The locked methodology

The methodology is fixed, system-wide, and applies to every category and every row in the index. It is not infant-and-child-foods-specific.

**Per-analyte standard for a clean subcategory = P97** of that subcategory's marginal occurrence distribution for that analyte.

**Per-analyte standard for a dirty subcategory = P45** of that subcategory's marginal occurrence distribution for that analyte.

**Per-analyte standard for an independent (no within-pair partner) row = P97** of that row's marginal distribution, treated as clean-by-default. Override slot exists in the schema for rows where evidence justifies dirty treatment.

**Each row's standard is in the native basis of the product form.** Powder rows use powder-as-placed-on-market. RTF liquid rows use as-consumed. Dry cereal rows use dry-as-sold. Puree rows use as-consumed. Brands ship and test in their product's native form; the HMT&C standard matches that form. Sources reporting in other bases get converted into the row's native basis during the pooling math — never the other way around. The 1:7 reconstitution factor lives in `tools/evidence/basis-conversion.mjs` as the shared source-of-truth.

**Final HMT&C value = `min(per-analyte percentile, lowest applicable regulatory ceiling)`** with both expressed in the row's native basis. The cap is converted into native basis if it was published in a different one. The auto-emitted rationale tag is `literature-baseline` when the pooled percentile binds and `regulatory-alignment` when the cap binds.

**ALARA + the §80th-percentile ratchet trigger** (per Governing Principles §"Two Percentile Mechanisms") drive tightening *after* publication. Remediation plans handle initial-publication brands above the limit. The standards-setting math in this Part is for initial publication only.

### Why P97 and P45 (the row-pass calibration)

Setting each analyte's limit at the raw P90 (clean) or P30 (dirty) of its marginal distribution *under independence* would deliver joint row-pass rates of approximately 0.9^10 = 35% (clean) and 0.3^10 ≈ 0% (dirty) across the ten HMTc analytes. Analytes correlate in real markets — supply-chain hygiene drives multiple metals together — so the actual joint pass rate is somewhere between independence and perfect correlation, typically 50-70% for clean and 10-15% for dirty at raw P90/P30.

The Governing Principles require approximately 90% of clean-subcategory brands and 30% of dirty-subcategory brands to pass row-level certification — not per-analyte certification. To deliver the row-level outcome, per-analyte limits are uplifted: P90 → P97 (clean), P30 → P45 (dirty). Under typical analyte correlation (≈0.6), these uplifted per-analyte percentiles deliver joint row-pass rates close to the 90/30 target.

The heuristic uplift is uniform across all analytes today. Per-analyte differentiation (e.g., Pb tighter than Ni based on regulatory pressure or toxicology) is a Tier 2 calibration deferred until HMT&C has lot-testing data to measure the actual joint pass rate empirically (target review: 6-12 months post-launch).

### Clean and dirty subcategory framework

Within a parent category that has multiple subcategories (for example, infant formula split into milk-based, soy-based, and hydrolyzed; or baby cereals split into rice-based and non-rice), classify each subcategory per-analyte as the clean subcategory or the dirty subcategory based on whether its empirical distribution for that analyte is meaningfully lower (clean) or higher (dirty) than the parent-category median. Clean and dirty are designations within a parent category, not fixed labels on a subcategory; the same subcategory can be clean for one analyte and dirty for another. If only one subcategory has data for an analyte, the comparison cannot be made; report what is available and note the missing comparison rather than guessing.

### Pool admission, basis homogenization, and pooling math

Every source loaded for a (row, metal) cell contributes to the pooled distribution unless it is explicitly dispositioned out with a stated reason. The admission rule is:

- Sample-level data: use raw values directly.
- Reported P-vector with N: 4-quantile fit; reconstruct N pseudo-samples by quantile interpolation.
- Mean + SD + N: log-normal moment-match; generate N pseudo-samples.
- Mean + median + max + N: log-normal fit on mean and CV-from-(max/mean); generate N pseudo-samples.
- Mean + N only: assume CV = 1.0 (EFSA/JECFA convention for contaminant occurrence data); generate N pseudo-samples; mark "weak."
- Lower-bound / upper-bound mean (LOD-censored): Tobit-style interval; generate N pseudo-samples between bounds.
- Range / min / max only, no mean: uniform across range; min(N, 10) pseudo-samples; mark "range_only_weak."
- Single value, no N: 1 pseudo-sample at the reported value, weight 1; mark "single_point_weak."

Pseudo-samples are pooled with source-N weighting (capped at 2× the median per-source N across the cell's pool to prevent any one large survey from dominating). Percentiles are computed on the pooled distribution. Sensitivity is reported across three parametric assumptions (log-normal headline, gamma alternative, nonparametric reconstruction); a spread within ±25% is "stable," 25-50% is "provisional," >50% is "needs review."

This is standard practice in environmental exposure assessment (WHO/JECFA pooled TDS methodology; EFSA Scientific Opinions on Pb and Cd in food). The novelty is only in formalizing it as deterministic code rather than doing it ad hoc per cell.

Final HMT&C values must not exceed the lowest applicable loaded regulatory cap regardless of where the pooled percentile falls. Intake and exposure estimates are not substitutes for product-occurrence distributions; intake tables inform exposure context only.

### Rationale tagging on staged standards

When a decision is staged in the workbench, one rationale tag is required:

- `literature-baseline` — the pooled per-analyte percentile is the binding value.
- `regulatory-alignment` — the lowest applicable regulatory cap is the binding value (pooled percentile would have been higher).
- `precautionary` — staff selects a value lower than both the pooled percentile and the regulatory cap, with documented rationale (vulnerable population concern, cumulative exposure, scientific uncertainty).
- `feasibility-driven` — staff selects a value higher than the pooled percentile because current analytical methods or supply-chain realities do not support the tighter value, paired with a sunset plan to tighten as feasibility improves.

The gap between literature-baseline and the final value, if any, is stated honestly. Failing to name the rationale is the lint failure.

Earlier wiki conventions referred to "clean-platform" / "contaminated-platform" rows with default percentiles of P90 (clean) and P10 or P20 (contaminated). Those defaults are superseded by the P97 / P45 framework above. Any tooling or documentation still using the older percentiles is stale and should be updated.

## Part 20 — Course drafting workflow

When writing course content:

Start from learning objectives, not from existing wiki content.

Link into canonical wiki pages rather than duplicating. If a wiki page is not educator-friendly enough, improve the wiki page (with an `audience: educator` section) rather than forking content into the course.

Every technical claim in a course must trace through the wiki to an A-tier or B-tier source.

## Part 21 — App-layer workflow

When working on `wiki/app/` pages:

Keep ingredient frontmatter machine-readable and consistent. The app will parse these directly.

When `contamination_profile` values change, advance or update `status`, bump `last_reviewed`, bump the page `updated` field, log why, and commit. The change happens during the synthesis pass per Part 9, not during ingest; see Part 9 for trigger conditions and the incremental-vs-full-resynthesis rules.

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

**Read the prompt catalog at `docs/prompt-catalog.md` at the start of any session that involves running build pipelines, autonomous ingest, manual regeneration, or wiki synthesis work.** The catalog is the canonical index of every prompt and command pipeline in the project, organized by autonomous (daemon-driven), semi-autonomous (operator-triggered), tactical (one-shot), and maintenance categories. It is graded by efficiency for the goal each prompt serves. Future Claude sessions should not rediscover commands by grepping the codebase; the catalog exists so the right command is one read away.

Companion documents the catalog points to:
- `data/evidence/autonomy/8hr-build/00-plan.md` (8-hour autonomous build plan)
- `data/evidence/autonomy/8hr-build/04-warp-execution-guide.md` (run-from-Warp instructions)
- `data/workbench/standards-book/adversarial-audit.md` (Pre-work 6 audit output)
- `data/workbench/standards-book/coherence-audit.md` (source-document consistency check)

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
