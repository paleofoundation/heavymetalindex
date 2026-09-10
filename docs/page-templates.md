# Page templates — Heavy Metal Index Wiki

This document is the operational reference for page templates. The rule-grade summary lives in CLAUDE.md; this file is the detailed YAML and section-level specification.

Every wiki page starts with YAML frontmatter. Fields vary by page type but always include `type`, `updated`, `sources`, and `audience`.

## Source page (`wiki/sources/<cite-key>.md`)

A public source page is a critical summary of the original evidence, not an ingest work log. Its metadata supplies identity and routing; its body explains findings and limitations to a reader. A completed ingest also requires structured extraction, destination coverage, regenerated outputs, checks, and a versioned record under [[docs/ingest-workflows]].

An evidence tier describes the source's evidence class; it is not an ingest-completion badge. Set `ingest_status: complete` only after the compiled-wiki gate is satisfied and its extraction/reconciliation and routing audits are present. The source-contract check rejects a claimed complete ingest with missing required metadata. Historical metadata gaps remain a recovery queue and must not be mistaken for a scientific rejection of the source.

Required metadata includes `type`, `cite_key`, `title`, authors/issuing body, publication year, `source_type`, `evidence_tier`, `raw_handle`, `raw_path`, a verified primary-artifact hash (`raw_sha256`, or a documented canonical `sha256` equivalent), `access_url`, rights/license information, `updated`, `sources`, and `audience`. Use a DOI when assigned; a verified no-DOI source carries `no_doi_assigned: true`. Preserve retrieval provenance. A supplement hash does not substitute for the primary dataset or paper's hash.

Routing metadata includes explicit `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` arrays at the specificity the source supports. Evidence Fitness must be explicit: `evidence_fitness.supports` and `evidence_fitness.does_not_support` record uses and boundaries, with the reasoning in the body. Empty or unknown fields must be addressed or recorded as a gap; placeholder metadata does not establish a completed ingest.

Illustrative template below: compute the hash and verify retrieval/rights metadata from the actual source. Do not copy bracketed placeholders into a completed source record.

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
access_url: https://doi.org/10.1186/1471-2458-13-590
retrieval_date: "<verified retrieval date>"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_3750310/FM_3750310.md
raw_sha256: "<SHA-256 computed from the primary artifact at raw_path>"
metals: [Cd]
ingredients: ["[[ingredients/rice]]", "[[ingredients/vegetables]]", "[[ingredients/seafood]]", "[[ingredients/tobacco]]"]
products: []
matrices: [dietary-intake, urine, blood]
jurisdictions: [CN]
near_duplicates: []
sample_n: 207
sample_population: "Shanghai adults over 40"
evidence_fitness:
  supports: [population-specific-dietary-exposure]
  does_not_support: [brand-level-contamination, certification-limits]
audience: [regulator, researcher, consumer, app]
sources: 0
updated: 2026-04-23
---
```

### Public source sections

Use unheaded opening prose below the H1, followed by `## Key numbers`, `## Methods (brief)`, `## Evidence fitness`, `## Limitations`, and `## Related evidence`. A source with no reportable numerical findings says so rather than inventing a Key numbers table. Related evidence links to the pages the findings actually support. Additional reader-facing sections may describe data coverage, preparation, geographic variation, verified corrections, or regulatory context where relevant.

Do not generate `Certification / Courses / App / Microbiome` planning bullets, `Wiki pages updated on ingest`, agent identities, local file paths, internal handles, extraction commands, or recovery work logs in the public body. Keep those operational details in structured metadata and internal audits. Public correction notes describe the corrected finding and its evidence, not the toolchain that performed the edit.

```markdown
# He et al. 2013 — Dietary cadmium exposure in Shanghai adults

Two to four sentences describing what was measured, what the source found, and the population or matrix to which the finding applies.

## Key numbers
Exact reported figures, with units, basis, species, statistic labels, denominators, and source table/page identifiers. Distinguish source-reported numbers from derived statistics. Preserve every reportable statistic in the structured evidence even when the public summary selects only the most useful figures.

## Methods (brief)
Sampling frame, analytical method, preparation, total versus speciated analytes, detection/reporting limits, and censoring treatment.

## Evidence fitness
Explain what these data support and what they cannot establish. A study reporting only summary statistics is still usable evidence; a modelled distribution is labeled as modelled, never as observed samples.

## Limitations
Scope, sampling uncertainty, basis or species restrictions, missing fields, and any limits on comparison with another dataset or legal instrument.

## Related evidence
- [[metals/cadmium]]
- [[ingredients/rice]]
```

### Dataset downloads

Where redistribution is permitted, publish the source's actual structured samples, summaries, and routes as applicable. The source frontmatter declares `data_downloads` entries with a reader-facing `label` and a site-local `path` under `static/data/`; supported extensions are CSV and JSON. The export must exist before the source advertises it. The manifest records each download's hash and bytes, and the page rail exposes the links. Internal `data_path`, `summary_path`, or route-register pointers are not public download URLs.

```yaml
data_downloads:
  - label: Analytical results (CSV)
    path: static/data/source-results.csv
  - label: Summary statistics (CSV)
    path: static/data/source-summary.csv
  - label: Food-to-ingredient routes (CSV)
    path: static/data/source-routes.csv
```

For a reviewed primary structured dataset, `extraction_authority: primary-structured` identifies the authoritative extraction and prevents a prose-table heuristic from being treated as an equivalent source of sample values. That field is not a review approval by itself. Pending source records (`status: tier1-stub` or `evidence_tier: pending`) remain recovery items and are excluded from public pages and evidence manifests.

## Metal page (`wiki/metals/<metal>.md`)

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
sources: 0
---
```

Sections: Overview, Toxicology, Typical exposure routes, Food sources (linked to `ingredients/`), Regulatory limits (linked to `regulations/`), Testing (linked to `testing/`), Microbiome effects (linked to `microbiome/`), Vulnerable populations, Open questions, Sources.

## Ingredient page (`wiki/ingredients/<commodity>.md`)

Backbone of the future app. Keep it structured.

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
  Cd: { ... same shape ... }
  iAs: { ... }
  tAs: { ... }
  tHg: { ... }
  Ni: { ... }
  Al: { ... }
  Cr: { ... }
  Sn: { ... }
  U: { ... }
drivers: [soil-uptake, flooded-paddy, geography, cultivar, processing]
lower_risk_variants: ["[[ingredients/basmati-india]]", "[[ingredients/california-rice]]"]
higher_risk_variants: ["[[ingredients/brown-rice]]", "[[ingredients/rice-bran]]", "[[ingredients/rice-protein-concentrate]]"]
used_in_products: ["[[products/infant-cereal]]", "[[products/rice-milk]]", "[[products/protein-powder]]", "[[products/crackers]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-22
---
```

The metal set is the ten metals: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U. See [[docs/schema-history]] for migration history. Cr carries total chromium; Cr-VI lives on `metals/chromium-hexavalent`. MeHg is matrix-driven and not in the ingredient profile.

### Mandatory ingredient-page sections (enforced)

Every non-stub ingredient page must carry these `## H2` headings in order. Stubs (all-pending `contamination_profile`, no contributing sources) are exempt. The lint check in CLAUDE.md Part 18 enforces these; failed pages surface via the `COMPLETE-INGREDIENT-SECTIONS` action.

1. `## Why this commodity accumulates heavy metals` — soil, plant biology, processing, or sourcing reason. One to three paragraphs of prose.
2. `## Heavy metal contamination profile` — body-level synthesis table (see Body table section below). Generator-managed; never hand-edited inside its marker bounds.
3. `## Ranges by source, region, and variety` — geographic and varietal variation, anchored on sources.
4. `## Processing effects` — polishing, rinsing, parboiling, fermentation, drying, milling, refining. Cite the source for each claim.
5. `## Ingredient-derivative risk` — derivatives that concentrate or dilute which metals. Bran-vs-whole-vs-white is the canonical case.
6. `## Mitigation options` — practical interventions ordered by impact magnitude. Subsection order: sourcing → agronomic → processing → formulation → testing/QC → packaging/storage. Each lever is a one-paragraph entry naming the magnitude with a cited source. Cross-link to dedicated `mitigation/<topic>.md` pages.
7. `## Regulatory limits that apply` — Codex, EU, FDA, and other operative limits. Limit value, matrix scope, basis (product as placed, as consumed, dry weight). Cross-link to `regulations/<rule-id>`.
8. `## Sources` — source legend table auto-generated by `tools/evidence/build-source-legend.mjs`.

Stub pages carry only sections 2 (body table, all rows marked data gap) and 8 (source legend with empty-corpus message). When a stub crosses two-plus contributing A-tier sources, the section-completion subprocess action drafts sections 1, 3, 4, 5, 6, and 7 from the routing audit and contributing source pages.

The `contamination_profile` block is deliberately machine-readable. The app consumes it directly.

### Geographic and seasonal variance sub-fields

Each metal sub-block carries two optional variance arrays — `geographic_breakdown` and `seasonal_variance` — that hold regional and harvest-period range data brand legal teams need to defend against a cherry-picked-maximum attack. See OPERATING.md Part 7 initiative 7.

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
    seasonal_variance:
      - period: "El Niño years (Ecuador 2015-2016, 2023)"
        range_ppb: [180, 620]
        n: 41
        sources: ["[[sources/example-elnino-cocoa-2024]]"]
        note: "Drought-stress concentrates Cd uptake; values run roughly 40 percent higher than non-El-Niño-year baselines."
```

Schema rules:

- Both arrays are optional and default to empty.
- Each entry: `region` (or `period`), `range_ppb`, `n`, `sources` list, optional `note`.
- Regional entries non-overlapping enough to read sensibly (state/country/production-region).
- Seasonal entries name an explicit period or condition (harvest year, drought, monsoon, El Niño phase). Avoid vague periods.
- Variance entries are populated by the synthesis pass per CLAUDE.md Part 9 or lazily added when materials drop into `raw/manual-fetch/seasonal-geographic-variance/`.

### The three-field state system

Each metal sub-block has two orthogonal concepts:

`status` is the data-state field. Have we researched this combination yet?
- `pending` — template placeholder, no research done. Values are `null`. Initial state.
- `in_progress` — research started, some values populated, review incomplete.
- `populated` — research complete. Values reflect current best understanding as of `last_reviewed`.

`confidence` is the evidence-state field. Given the research, how much and how consistent?
- Only meaningful when `status: populated`. Otherwise `null`.
- `low` — 1 to 2 studies, or wide disagreement.
- `medium` — 3 to 10 studies, moderate agreement.
- `high` — more than 10 studies, strong agreement.

`n_studies` is the count of A-tier or B-tier sources contributing values. `n_studies: 0` with `status: populated` is a legitimate finding: the literature is silent on this combination; the app should treat as data gap rather than "probably clean." `n_studies: 0` with `status: pending` is the template default.

`last_reviewed` is the date Claude last integrated new evidence into this sub-block. Full-resynthesis tracking lives in `data/evidence/review_events.jsonl`, not on the page.

### Coverage rule: all ten analytes addressed per ingest

When any ingest touches an ingredient page (advances at least one sub-block to `in_progress` or `populated`), all ten sub-blocks must move out of `pending` in the same pass. Sub-blocks the source does not cover advance to `status: populated, n_studies: 0, confidence: null, last_reviewed: <today>` — the declared-data-gap state. Mixed-state pages (some `populated`, some `pending`) are a lint failure. All-`pending` stubs (no ingest yet) are not lint failures; they are the legitimate stub state.

Declaring an analyte a data gap is a finding, not a placeholder: it tells the app, the certifier, and downstream readers that the wiki has reviewed and found nothing usable for this commodity-analyte combination.

### Body table: "Heavy metal contamination profile"

The `contamination_profile` YAML is for the app. Human readers (regulators, brand QA, journalists, plaintiff and defense experts) read the page body. Every touched ingredient page must carry a body-level table:

```markdown
## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb  | n=2       | 50–200 | low    | [[sources/foo2024-bar\|1]], [[sources/baz2023-qux\|2]] |
| Cd  | n=5       | 100–600 | medium | [[sources/...\|3]], [[sources/...\|4]] |
| iAs | data gap  | —      | —      | — |
| tAs | n=3       | ...    | low    | ... |
| tHg | data gap  | —      | —      | — |
| Ni  | n=1       | 800    | low    | [[sources/...\|5]] |
| Al  | n=1       | 20,000 | low    | ... |
| Cr  | n=1       | 200    | low    | ... |
| Sn  | data gap  | —      | —      | — |
| U   | data gap  | —      | —      | — |

### Source legend
1. [[sources/foo2024-bar]] — short description of what this source contributes
2. [[sources/baz2023-qux]] — ...
```

Coverage cells use `n=<count>` when `n_studies > 0` and `data gap` when `n_studies = 0` with `status: populated`. Numerical cells use `—` for data gaps. Key-sources cells cite the top two or three contributing sources using numbered-alias convention. Per-page tail percentile (formerly `p95 (ppb)` column) stays staff-side per CLAUDE.md Part 19; the `p95_ppb` field remains in machine-readable frontmatter but does not surface on the public page. This 5-column table is a sanctioned exception to the multi-column-tables-discouraged guidance in [[docs/writing-style]].

## Product-category page (`wiki/products/<category>.md`)

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

**This is the public, literature-native view of the product category.** The wiki/HMT&C firewall in CLAUDE.md Part 2 applies: percentile-selection arithmetic (p10, p30, p50, p90, p95, p100), CC eligibility verdicts, n_a_tier counts, clean/dirty subcategory designations, and Path A/Path B status do not appear on this page. They appear on the staff workbench snapshot at `wiki/workbench/standards/<product-slug>.md`. The staff workbench is the home for threshold-selection content; this public page is the home for literature evidence.

The `Methodology` section, near the top, states the rules that govern the rest of the page: speciation is non-substitutable; basis is preserved and labeled, never silently converted; non-detect handling preserves the source's own reporting convention; source pooling is avoided across LOQ, period, geography, and analytical-basis differences; row-fit is determined by author scope, not by re-derivation; evidence tiers and confidence ratings follow CLAUDE.md.

The `Literature Evidence Summary` is generator-managed inside `hmi-hmtc-evidence-summary` markers. Columns are literature-native: analyte, subcategory designation in plain language, reported concentration range across cited sources (means and medians plus highest reported value), detection rate where supported, applicable regulatory cap with jurisdiction and basis, source count, confidence rating, basis note. No internal codenames, no percentile arithmetic, no CSV paths.

The `Source Evidence Inventory` separates measured product concentrations from intake or exposure estimates. Shows what each source actually reports: metal, evidence scope, n, statistic type, reported values, units, max or p100 if directly reported, row-fit, brief evidence note. Do not add p10/p50/p90/p95 columns unless the source itself reports those.

Row-fit is determined by what authors state their scope to be, not what the ingest can re-derive from data tables. If title/abstract/methods/table-defining footnotes specify the matrix (milk-based powdered infant formula, soy-based, brown rice cereal, fluid cow milk), row-fit is exact. Mark `partial` only when authors use a vague umbrella term and tables do not narrow. Mark `unknown` only when authors are silent and tables genuinely do not resolve. Tables that visibly contradict the stated scope are flagged for curator review, not silently downgraded. Default posture: trust author scope statements.

Row-fit is a compound classification with two axes: **matrix axis** (milk-based vs soy-based vs hydrolyzed; rice-based vs non-rice; root vegetable vs leafy green) and **format axis** (powdered vs ready-to-feed vs concentrated liquid; dry vs as-consumed; jar vs pouch). Each axis is exact, partial, or unknown independently. Source-page TL;DR and frontmatter `matrices` / `products` should record both axes explicitly when known.

The `Broad Product Context: Author-Scope Index` is generator-managed inside `hmi-broad-context-sources` markers. Catalogues sources whose author-stated scope is broader than this row.

The `Federal/Regulatory Limits vs Field Findings` is generator-managed inside `hmi-product-crosswalk` markers. Compares applicable regulatory cap to cited field-evidence on a like-for-like basis when conversion is well-defined (powder-as-placed at 1:7 reconstitution), or anchors to the speciation rule when conversion is not possible (total arsenic vs inorganic arsenic, total mercury vs methylmercury, total chromium vs Cr-VI).

Do not combine geography, period, and product-fit scopes without labeling the consequence. Product fit, analytical basis, sample size, detection handling, period, and jurisdiction are recorded as metadata. Pooling across jurisdictions is a staff-side decision recorded in the workbench snapshot, not a public-page claim.

Inline and table citations on product-category pages use numbered aliases `[[sources/<cite-key>|1]]`. A `Sources` block at the end maps each number to the full source page.

### Mandatory product-category-page sections (enforced)

Every non-stub product-category page must carry these `## H2` headings. Stubs (no contributing sources in routing audit) are exempt.

1. `## Who this page is for` — stakeholder framing per OPERATING.md Part 2 brand-legal-priority hierarchy.
2. `## Methodology` — speciation, basis-preservation, row-fit, and pooling rules.
3. `## Literature Evidence Summary` — generator-managed inside `hmi-hmtc-evidence-summary` markers.
4. `## Source Evidence Inventory` — what each source reports at the sample level; hand-curated.
5. `## Broad Product Context: Author-Scope Index` — generator-managed inside `hmi-broad-context-sources` markers.
6. `## Federal/Regulatory Limits vs Field Findings` — generator-managed inside `hmi-product-crosswalk` markers.
7. `## Levers to reduce contamination` — practical interventions ordered by impact magnitude. Sourcing → agronomic → processing → formulation → testing-and-QC → packaging-and-storage. Each lever names magnitude with a cited source.
8. `## How standards math uses this page` — explanation that the row-standard percentile is an aggregate, not a per-source decoration.
9. `## Historical recalls and enforcement` — public-record regulatory events, framed as events not brand rankings (per CLAUDE.md Part 12).
10. `## Sources` — source legend table auto-generated by `tools/evidence/build-source-legend.mjs`.

The Levers section is the brand-legal-actionable surface of the product page. Pages missing it specifically are escalated rather than just flagged.

## Regulation page (`wiki/regulations/<rule-id>.md`)

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

Cross-link to parallel rules in other jurisdictions. Never silently substitute or round regulatory values. Preserve exact agency-source values. If a value is ambiguous in the source, note the ambiguity rather than resolving unilaterally.

## Regulator (body) page (`wiki/regulators/<body>.md`)

The parent layer above the per-instrument regulation pages: one page per regulatory body (EFSA, JECFA, US FDA, US EPA, ATSDR, US CDC, OEHHA, Codex, European Commission). Mostly generated by `tools/build-regulator-pages.mjs` from `wiki/static/regulations.json` filtered to the body via `tools/regulators/agency-map.json`; only the prose is hand-authored. Full rules in [[docs/architecture/category-page-architecture]] §B.

```yaml
---
type: regulator
regulator_id: efsa
title: "European Food Safety Authority (EFSA)"
name: "European Food Safety Authority"
abbreviation: "EFSA"
jurisdiction: [EU]                        # ISO-style codes; drives areaServed in JSON-LD
regulator_kind: advisory                  # advisory | binding | guidance | mixed | international-standard | reference
established: "2002"
homepage: https://www.efsa.europa.eu
sameAs: ["https://www.efsa.europa.eu", "https://www.wikidata.org/wiki/Q279493"]
audience: [regulator, brand-legal, brand-qa, educator, journalist]
wiki_doi: null
updated: 2026-06-23
---
```

Fixed sections, in order (enforced by `tools/audit-regulator-mandatory-sections.mjs`): `## Quick read` (hand) → `## Mandate & scope` (hand) → `## Positions across metals` (generated, marker `hmi-regulator-positions`) → `## Where it diverges` (hand interpretation + generated table, marker `hmi-regulator-divergence`) → `## Update log` (generated, `hmi-regulator-updatelog`) → `## Key documents` (generated, `hmi-regulator-keydocs`) → `## References`. Generated blocks live between `<!-- BEGIN/END: hmi-regulator-* -->` markers and are regenerated each prebuild; prose outside the markers is preserved.

Rules: `regulator_kind` is the load-bearing binding-vs-advisory framing (a limit is not a safe level; advice is not enforceable) — state it honestly per CLAUDE.md Part 2. The divergence table compares each body's position side by side and only annotates a ratio when value-type **and** unit match; it never fabricates a "Nx divergence" across incomparable bases (intake µg/kg-bw vs concentration ppb vs BMDL). Every metals-page Regulatory-limits row links its Body cell to `[[regulators/<body>]]` and its instrument to `[[regulations/<rule-id>]]`. A body is the parent of its `/regulations/` instruments. Auto-generated cross-cuts (`wiki/regulators/index.md`, `by-metal.md`) carry `auto_generated: true` and are not hand-edited.

## Testing method page (`wiki/testing/<method>.md`)

Sections: Principle, What it measures (and what it does not — total vs speciated arsenic), Typical LOD/LOQ per metal, Sample prep pitfalls, Cost and throughput, When to choose this method, Sources.

Speciation deserves its own page (`testing/arsenic-speciation.md`) because the regulatory and health distinction between inorganic and organic arsenic is central to the whole domain.

## Supply-chain page (`wiki/supply-chain/<pathway>.md`)

```yaml
---
type: supply-chain
status: in_progress
metals: [Cd, iAs, tAs, Pb, Ni]
audience: [regulator, educator, commercial, researcher]
updated: 2026-06-10
---
```

Supply-chain pages are the hub/synthesis pages for the **upstream** half of the corpus: how heavy metals reach a consumable before it is ever a finished product, and which sources put them there. They cover soil geochemistry and root uptake; irrigation/ground/process/waste water; marine and estuarine sediment and water (the ocean is the upstream matrix for the seafood, shellfish, algae, and seaweed supply chain); fertilisers, sewage sludge and biosolids; atmospheric deposition from smelting, mining, shipping, traffic, and aviation (leaded avgas); animal feed; food-contact equipment, packaging, and storage; and **source attribution** — which industry or activity loads metals into the shared environment (the burden-apportionment evidence that supports a brand's ambient/shared-liability defense, Governing Principle 4). The archetype is `supply-chain/soil-to-plant-transfer.md`. The section is organised as pathway hubs (`soil-to-plant-transfer`, `aquatic-bioaccumulation`, `atmospheric-deposition`, `irrigation-and-soil-amendments`), a cross-cutting `source-attribution-environmental-burden-apportionment` hub, and element- or material-specific pages (`soil-nickel-screening`, `aluminum-based-packaging`). Each upstream study is ingested as an ordinary source page in `wiki/sources/` and routed by the routing layer to its pathway hub.

Sections: the pathway mechanism; the quantitative discipline governing how the upstream evidence may be used (transfer factors, bioavailability); element-specific behaviour; agronomic and environmental drivers; anthropogenic vs geogenic sources; and how upstream-source evidence connects to the downstream `ingredients`/`products` pages.

Load-bearing rule (the Part 2 firewall in operational form): **soil/sediment/water concentration is not food concentration.** A supply-chain page reports transfer factors, uptake mechanisms, and drivers; it never promotes an upstream number into the measured food-occurrence record on an ingredient page, and upstream numbers never enter the HMT&C threshold percentiles. Individual upstream studies are ingested as ordinary **source pages** in `wiki/sources/` (with `products: []`, `ingredients: []`, and an environmental `matrices:` slug such as `soil`/`sediment`/`irrigation-water`); the routing layer attaches each to the relevant supply-chain hub and to the food crop it informs as upstream context, never as direct food-occurrence evidence. This is the in-scope **Supply-chain source / contamination pathway** dimension in [[docs/conventions]] "Ingest scope" and lane (a3) of the Codex sprint-ingest prompt.

## Microbiome page (`wiki/microbiome/<topic>.md`)

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

Sections: Mechanism of action, Taxa-level effects (genus and species), Functional and metabolic consequences, Human vs animal evidence, Disease-process implications, Sources.

Write so they can be lifted to WikiBiome with minimal edits. Use WikiBiome's taxon naming when confirmed. Microbiome content belongs here only when the primary link is metal exposure; general microbiome mechanisms without a metals angle belong on WikiBiome.

WikiBiome federation: use `wikibiome_crosswalk` slugs in frontmatter as stable anchors. Prefer mechanistic framing: exposure → microbiome change → functional consequence → disease process. Name taxa at genus or species level where the source supports; do not aggregate up to phylum unless the source did. Keep self-contained enough to lift without the rest of this wiki as context.

## Certification page (`wiki/certification/*.md`)

For the Paleo Foundation HMT&C program. Include proposed limits, tier definitions (standard, infant-grade, ultra), sampling plans, auditor checklists, decision trees, and gap analyses against FDA/EU/Codex.

These pages reference wiki evidence; they do not define wiki evidence. When an HMT&C page specifies a threshold, it cites the wiki for the literature baseline and explicitly states the rationale for any deviation:

- **Precautionary** — tighter than literature floor because vulnerable populations, cumulative exposure, or uncertainty warrant a safety margin beyond minimum-effect-level data.
- **Market-ratcheting** — tighter than literature floor because the program drives market toward cleaner product; a policy choice, not an assertion about where effects begin.
- **Feasibility-driven** — looser than literature floor because current methods, supply chain realities, or achievable agricultural practice do not yet support the tighter value. Paired with a sunset plan to tighten as feasibility improves.
- **Regulatory-alignment** — matches an external regulatory framework (FDA, EU, Codex) for commercial or legal reasons.

The deviation itself is fine and often intentional. Silently softening the wiki to hide the deviation, or strengthening the wiki to make the deviation look evidence-based, is the failure mode. State the rationale; do not paper over the gap.

## Course page (`wiki/courses/*.md`)

Each course has an outline page and module pages. Module pages include Learning objectives, Core content (drawn from wiki pages via links), Case studies (linked to `sources/` and `products/`), Quiz items, Further reading. Keep DRY: link to canonical wiki pages rather than duplicating.

Course-drafting workflow:
- Start from learning objectives, not from existing wiki content.
- Link into canonical wiki pages rather than duplicating. If a wiki page is not educator-friendly enough, improve the wiki page (`audience: educator` section) rather than forking content into the course.
- Every technical claim in a course must trace through the wiki to an A-tier or B-tier source.

## App-model page (`wiki/app/*.md`)

This is where the logic for the ingredient-list → contamination-risk estimator is codified.

- `app/ingredient-mapping.md` — how raw ingredient-list strings map to `ingredients/` pages (synonyms, parenthetical modifiers, "organic", country of origin).
- `app/recipe-inference.md` — how ingredient-order and nutrition-facts back-solve approximate proportions.
- `app/risk-scoring.md` — how per-ingredient contamination profiles combine into a per-serving estimate, with uncertainty.
- `app/vulnerable-population-flags.md` — when to flag for infants, pregnancy, or frequent consumers.
- `app/disclaimer-language.md` — consumer-facing wording that educates without overclaiming.

App-layer workflow:
- Keep ingredient frontmatter machine-readable and consistent. The app parses these directly.
- When `contamination_profile` values change, advance or update `status`, bump `last_reviewed`, bump the page `updated` field, log why, and commit. The change happens during the synthesis pass per CLAUDE.md Part 9, not during ingest.
- Document uncertainty explicitly: ranges, confidence levels, number of underlying studies. Never report a point estimate the app cannot defend.
- Handle `status: pending` gracefully: exclude from estimate, communicate "not yet characterized" to the user, or fall back to category-level defaults. Never silently substitute a null for a zero.

## Generated footer blocks (every reader-facing page)

Three marker-bounded blocks close every page in `metals/`, `ingredients/`, `products/`, `regulations/`, `regulators/`, `synthesis/`, `testing/`, `microbiome/`, `mitigation/`, `supply-chain/`, `health/`, `methodology/`, `certification/`, `studies/` and (for the last two blocks) `sources/`. They are generated in this order and are never hand-edited inside their markers. They are apparatus rather than content, so the left section-nav drops them and links them from its utility icons instead.

**`## References`** (`hmi-page-references`, `tools/build-page-references.mjs`) — the works this page's prose actually cites, numbered in the order the citations appear, in full citation form: authors, year, title, publication, DOI or publisher link, source type and evidence tier, and a link to the source record. `citeSuperscript.inline.ts` reads its numbering from this list rather than assigning its own, so superscript `[7]` and reference 7 cannot drift apart; a citation the list does not carry is left as a plain link instead of being numbered into a sequence the list cannot resolve.

**`## Sources`** (`hmi-source-legend`, `tools/evidence/build-source-legend.mjs`) — the corpus set: every source routed to this page by source-page frontmatter, cited or not, with what each contributes. This is the coverage record, and it is a different artifact from References. On a mature metal page it runs to hundreds of rows; a reader checking one claim needs References, and a reviewer checking coverage needs Sources.

**`## Update history`** (`hmi-page-history`, `tools/build-page-changelogs.mjs`) — the five most recent substantive edits, each classified `major` (sources entered or left the page, sections added, contamination-profile values revised), `correction` (a published value or statement was wrong and has been fixed), or `minor` (narrative rewritten without changing the evidence). Descriptions are derived from what the commit's diff did to this page, never from commit prose: measured against 1,387 substantive commits, only 2% of commit subjects could be rendered to a public reader, and the rest carried certification-program references, outside product names, and toolchain codenames that CLAUDE.md Part 2 and Part 12 keep off the public site. `tools/audit-page-history-leaks.mjs` is the build-blocking guard on that boundary. Regeneration passes that touch only generated blocks are excluded, and each entry links the commit as the authoritative record.

## Audience layering

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
