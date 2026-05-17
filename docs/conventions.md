# Conventions — Heavy Metal Index Wiki

This document covers operational conventions: units, naming, links, cite-keys, evidence grading, index/log formats, and out-of-scope rules. Rule-grade summary lives in CLAUDE.md.

## Units and metal names

**Units:** Always ppb (µg/kg) for food matrices unless a source uses different units, in which case convert and note the original. Always specify wet weight vs dry weight.

**Metal names:** Use Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U. Spell out on first use per page. The iAs vs tAs distinction is non-negotiable; never conflate them. The tHg vs MeHg distinction is also non-negotiable. Total Cr must never be treated as Cr-VI unless the source speciates hexavalent chromium.

**HMT&C analyte vocabulary:** The current certification testing program tracks ten analytes: Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn. The wiki may discuss other metals in the corpus, but product-category threshold-development pages must keep this official analyte list distinct from broader literature metals. See [[docs/schema-history]] for the 8-vs-10 reconciliation.

**Dates:** ISO-8601 (YYYY-MM-DD) everywhere.

## Cite keys

Format: `<firstauthor><year>-<slug>`, lowercase, hyphenated. One cite key per source, globally unique. Disambiguate collisions with `-a`, `-b`, etc.

## Wikilinks

Use Obsidian wikilinks `[[folder/slug]]` to cross-link wiki pages, and prefer linking to canonical pages over duplicating content. In page bodies, write the wikilink bare: `[[ingredients/rice]]`.

**Frontmatter wikilinks:** Page-reference arrays in frontmatter use the quoted-wikilink form `["[[folder/slug]]", "[[folder/slug]]"]`. Quoting is required because YAML reserves `[` as a flow-sequence delimiter; without quotes, `[[` is parsed as a nested empty list. Wrapping page-reference arrays as wikilinks is what makes Obsidian's graph view surface relationships sourced from frontmatter.

Page-reference fields requiring the wikilink form:
- `source_refs` → `[[sources/...]]`
- `ingredients` → `[[ingredients/...]]`
- `products` → `[[products/...]]`
- `used_in_products` → `[[products/...]]`
- `higher_risk_variants`, `lower_risk_variants` → `[[ingredients/...]]`
- `wikibiome_crosswalk` → `[[microbiome/...]]`

All other frontmatter array fields stay bare; they are tag/classifier vocabularies (`metals`, `jurisdictions`, `audience`, `species`, `drivers`, `aliases`, `mechanism`, `disease_links`, `matrices`, `applicable_regulations`, `typical_ingredients`, `near_duplicates`), not page references.

Unresolved-target wikilinks (frontmatter or body wikilinks pointing to pages that do not yet exist) are intentional backlog markers, not lint errors. They render as dotted nodes in Obsidian's graph and indicate where the wiki is expected to grow next.

## Numbers, regulatory values, uncertainty

**Numbers:** Always include sample size and method when citing a concentration. "Rice has high arsenic" is not a wiki-quality claim; "FDA TDS 2014 found mean iAs of 92 ppb (n=76) in white rice by ICP-MS with HPLC speciation" is. Verify every numeric claim against the source before writing it. Do not round, approximate, or harmonize values across sources; preserve the actual numbers.

**Regulatory values:** Never silently substitute or round a regulatory threshold. FDA's action level for iAs in infant rice cereal is 100 ppb, not "approximately 100 ppb" and not "about 0.1 ppm." Cite the exact value from the agency source and note the unit the agency used. If converting units for comparison, show both.

**Uncertainty:** When you do not know or sources disagree, say so. Under-claim rather than over-claim. This is a certification and consumer-safety domain; false confidence is the biggest risk.

**Consumer language:** In `audience: consumer` sections, avoid jargon, avoid fear-mongering, be specific about dose and population. The goal is informed decisions, not panic.

## Evidence grading

Every source gets an `evidence_tier`.

- **A-tier:** peer-reviewed primary studies, government reports (FDA, EFSA, EPA, WHO, Codex), authoritative meta-analyses.
- **B-tier:** industry white papers, NGO reports (HBBF, Consumer Reports, EWG), reputable trade publications, conference proceedings.
- **C-tier:** news articles, blog posts, press releases, social-media claims.

Synthesis pages should lean on A-tier, use B-tier with attribution, and treat C-tier as leads to verify rather than as evidence. Courses and certification criteria should cite A-tier sources.

Flag contradictions explicitly. If a B-tier source conflicts with an A-tier source, note both and explain. Do not silently average.

## `index.md` structure

Organized by category. Each entry: `- [[path/page]] — one-line summary (N sources).`

Sections: Overview and synthesis, Metals, Ingredients, Product categories, Regulations (by jurisdiction), Supply chain, Testing methods, Health and toxicology, Microbiome, Certification, Courses, App model, Queries, Sources (chronological), Batch reports (chronological).

Update on every ingest (in bulk mode, once per batch). If the index exceeds 500 entries, split into `index.md` plus per-category index files.

## `log.md` format

Append-only. Each entry:

```markdown
## [YYYY-MM-DD] <op> | <handle> — <short title>
Pages touched: [[a]], [[b]], [[c]]
Notes: <1-3 sentences on what changed or what was learned>
```

`<op>` is one of: `ingest`, `batch`, `query`, `lint`, `resynthesis`, `certification`, `course`, `app`, `schema`, `skip`.

Consistent prefix means `grep "^## \[" log.md | tail -20` gives a clean recent history. Git commit messages mirror log entries.

For bulk ingest, per-paper entries are replaced by per-batch entries:

```markdown
## [2026-04-24] batch | batch-03 (papers 401-600) — 200 source pages ingested
Source pages: 200 created. Routing rows added by the audit refresh: 162. New-page proposals: 4. Synthesis triggers fired downstream: 11 cells crossed the second-source threshold and are queued for the synthesis pass per CLAUDE.md Part 9. Batch report: [[batch-reports/batch-03]].
Notes: Flagged contradiction between Smith 2024 (n=1000) and Jones 2023 (n=50) on Hg in tuna; queued for the synthesis pass to arbitrate.
```

The bulk-ingest session's deliverable is the source pages and the new-page proposals. The routing audit refresh, the synthesis pass, and the product-page generator runs are downstream system passes that execute after the batch commits.

## Out of scope

- **Writing original lab procedures.** Sourced from validated methods.
- **Regulatory advice for specific brands.** Claude can summarize rules, not prescribe compliance.
- **Medical claims.** Claude describes mechanisms and exposures; does not diagnose or treat.

## Proactive maintenance

Things to proactively do:

- **Flag regulatory changes.** If during a web-augmented query Claude discovers an FDA, EU, or Codex update not yet in the wiki, tell Karen and suggest an ingest.
- **Suggest new sources.** At the end of any substantial ingest or query, propose two to five papers or reports to read next and why.
- **Propose schema changes.** If CLAUDE.md is getting in the way or missing something, say so. Karen and Claude evolve it together.
- **Call out weak spots.** If an ingredient page is driving app logic on the back of a single 2015 study, say so. If an HMT&C proposed threshold is driven by weak evidence, say so more loudly; those have direct commercial and legal consequences.
- **Maintain the synthesis.** `wiki/synthesis.md` should reflect the current best understanding. Update it when ingests move the needle. If Karen has not asked for a synthesis update in a while, ask whether it is time.
- **Protect both directions of drift.** If the wiki is softening claims to cover for HMT&C, flag it. If the wiki is strengthening claims to justify HMT&C thresholds beyond what the literature supports, flag it. Both destroy the epistemic asymmetry this project depends on.

## Directory layout

```
raw/
  markdown/           # Marker-converted .md files, one folder per source
  studies/            # original PDFs (kept for reference)
  reports/            # FDA, EFSA, WHO, EPA, Codex, Consumer Reports, HBBF, etc.
  industry/           # trade publications, brand statements
  news/               # news articles, press releases
  lab-data/           # COAs, test results (FIREWALL — see CLAUDE.md Part 12)
  assets/             # images, figures extracted from sources
  manifest/           # triage manifest CSVs, dedup reports
wiki/
  index.md            # master catalog, organized by category
  log.md              # append-only chronological log
  overview.md         # top-level synthesis for newcomers
  synthesis.md        # evolving thesis / current best understanding
  metals/             # one page per metal (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Sb, U)
  ingredients/        # commodity risk profiles
  products/           # product-category pages
  supply-chain/       # soil, water, fertilizer, equipment, packaging, storage
  regulations/        # one page per jurisdiction/rule
  testing/            # ICP-MS, AAS, XRF, speciation methods, sampling plans, LODs
  health/             # toxicology, exposure routes, vulnerable populations, dose-response
  microbiome/         # metal-microbiome mechanisms, WikiBiome crosswalk pages
  certification/      # HMT&C program pages
  mitigation/         # remediation strategies
  courses/            # course outlines, module pages
  app/                # app-model pages
  sources/            # one page per source document
  queries/            # filed answers to questions
  lint/               # lint reports, contradiction logs, gap lists
  batch-reports/      # per-batch ingest reports
```
