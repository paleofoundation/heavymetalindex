# Evidence Engine — Handoff Spec

**For:** Friend building the Supabase-backed evidence engine
**From:** Karen Pendergrass, Paleo Foundation
**Date:** April 28, 2026
**Pilot scope:** Category 1 — Infant and Child Foods (Ages 0–5), 16 locked rows
**Status of this document:** Locked architecture. Implementation choices are open; schema and firewall are not.

---

## 0. Read this first

This is not a generic RAG project. The output of this engine feeds two distinct systems with different legal postures:

1. **Heavy Metal Index** — public wiki at heavymetalindex.com. Editorial / reference. Cites the literature.
2. **HMTc Standards Program** — private certification standards at heavymetaltested.com. Sets numeric limits brands certify against.

The two systems share evidence but **never share inference**. Specifically:

- The wiki says what the literature supports.
- The HMTc program sets thresholds informed by the literature, plus precautionary / market-ratcheting / feasibility / regulatory-alignment rationales that are **not literature claims**.
- Brand-level data, COAs, and HMTc-internal threshold logic **must not** flow back into the public wiki.

The engine's job is to be the shared evidence substrate for both, with a hard firewall between what each system is allowed to see and publish. If the firewall fails, the epistemic-asymmetry argument that the entire program rests on collapses. Build the firewall first, the features second.

---

## 1. The shared evidence contract

These vocabularies and rules are frozen. Both systems must honor them. Schema deviations require Karen's sign-off; vocabulary additions require Karen's sign-off. The engine validates against them on ingest, not after.

### 1.1 Metals vocabulary and Category 1 testing panel

Broader corpus metals vocabulary:

```
Pb     # lead
Cd     # cadmium
iAs    # inorganic arsenic
tAs    # total arsenic
MeHg   # methylmercury
tHg    # total mercury
Ni     # nickel
Al     # aluminum
Cr     # chromium (total)
Cr-VI  # hexavalent chromium (speciation)
Sn     # tin (total elemental)
Sb     # antimony
U      # uranium
```

**Non-negotiable:** `iAs` and `tAs` are distinct values. `MeHg` and `tHg` are distinct values. The engine must reject any extraction that conflates them.

Active Category 1 HMTc testing/analyte panel:

```
Pb     # lead
tAs    # total arsenic
Cd     # cadmium
tHg    # total mercury
iAs    # inorganic arsenic
MeHg   # methylmercury, tracked specifically within mercury evidence
Ni     # nickel
Al     # aluminum
Cr-VI  # hexavalent chromium
Sn     # tin
```

For arsenic, the program tracks both total arsenic and inorganic arsenic. For mercury, the program tracks total mercury while looking for methylmercury evidence in particular where sources/speciation support it. `MeHg` remains a controlled evidence field so the engine does not lose methylmercury-specific findings, but total mercury is also retained as its own value.

`Sb`, `U`, total `Cr`, and other metals may appear in the broader Heavy Metal Index corpus and can be useful for public reference, retrieval, and future research. They are not HMTc heavy-metal standards analytes unless a standards document later adds them.

### 1.2 Product taxonomy — Category 1 rows (locked)

These 16 rows are immutable. Built from Comprehensive Testing Category Taxonomy v2.0 (March 30, 2026) per the Step 0 Protocol. Source of record: `Category1_Step_0_Output_LOCKED.md`.

| row_no | row_slug                                | row_name                                              | variant_type           | platform_metals    |
|--------|-----------------------------------------|-------------------------------------------------------|------------------------|--------------------|
| 1      | infant-formula-powder-non-soy           | Infant formula, powder (non-soy)                      | clean_benchmark        | —                  |
| 2      | infant-formula-powder-soy-based         | Infant formula, powder (soy-based)                    | contamination_platform | Al, Ni, Cd         |
| 3      | infant-formula-rtf-liquid-non-soy       | Infant formula, RTF liquid (non-soy)                  | clean_benchmark        | —                  |
| 4      | infant-formula-rtf-liquid-soy-based     | Infant formula, RTF liquid (soy-based)                | contamination_platform | Al, Ni, Cd         |
| 5      | baby-cereals-dry-non-rice               | Baby cereals / grain products, dry (non-rice)         | clean_benchmark        | —                  |
| 6      | baby-cereals-dry-rice-based             | Baby cereals / grain products, dry (rice-based)       | contamination_platform | iAs, Cd, Pb        |
| 7      | fruit-purees                            | Fruit purées (general)                                | no_split               | —                  |
| 8      | non-root-vegetable-purees               | Non-root vegetable purées                             | no_split               | —                  |
| 9      | root-vegetable-purees                   | Root-vegetable purées                                 | no_split (cross-row CC)| Cd, Pb (from #8)   |
| 10     | meat-and-poultry-purees                 | Meat and poultry purées                               | added_no_home          | —                  |
| 11     | fish-containing-baby-foods              | Fish-containing baby foods                            | added_platform         | MeHg               |
| 12     | mixed-meals-non-rice                    | Mixed meals, non-rice                                 | clean_benchmark        | —                  |
| 13     | mixed-meals-rice-containing             | Mixed meals, rice-containing                          | contamination_platform | iAs, Cd, Pb        |
| 14     | fruit-juice-not-canned                  | Fruit juice (not canned)                              | no_split               | —                  |
| 15     | teething-and-snacks-non-rice            | Teething & snacks (non-rice)                          | clean_benchmark        | —                  |
| 16     | teething-and-snacks-rice-based          | Teething & snacks (rice-based)                        | contamination_platform | iAs, Cd, Pb        |

`row_slug` is the canonical join key between the engine and both downstream systems. **Never invent slugs. Never rename slugs. Never collapse rows. Slash notation is retired — every variant is its own row.**

### 1.3 Evidence tiers

| tier | definition |
|------|------------|
| A    | Peer-reviewed primary studies; government reports (FDA, EFSA, EPA, WHO, JECFA, Codex); authoritative meta-analyses. |
| B    | Industry white papers; NGO reports (HBBF, Consumer Reports, EWG); reputable trade publications; conference proceedings. |
| C    | News articles, blog posts, press releases, social-media claims. Treat as leads to verify, not as evidence. |

Synthesis claims for the public wiki must lean on A. HMTc threshold-setting may use B but must explicitly tag rationale type when deviating from A-tier literature.

### 1.4 Source types (controlled vocabulary)

```
peer_reviewed       # journal article in indexed venue
gov_report          # FDA, EFSA, EPA, WHO, JECFA, Codex, Health Canada, etc.
regulation          # the regulation itself (text of 2023/915, CTZ guidance, Prop 65 listing, etc.)
ngo_report          # HBBF, Consumer Reports, EWG, etc.
industry            # trade publication, white paper, brand statement
conference          # peer-reviewed conference proceeding
preprint            # bioRxiv / chemRxiv / SSRN
news                # journalism
lab_data            # COAs, internal lab results — PRIVATE side only
unknown             # ingest could not determine; flag for review
```

### 1.5 Jurisdictions (controlled vocabulary)

```
US-FDA              # Food and Drug Administration
US-EPA              # Environmental Protection Agency
US-CPSC             # Consumer Product Safety Commission
US-CA-OEHHA         # California Office of Environmental Health Hazard Assessment (Prop 65)
US-state-other      # other state-level (NY, WA, etc.)
EU-EC               # European Commission regulations
EU-EFSA             # European Food Safety Authority
EU-ECHA             # European Chemicals Agency (REACH)
UK-FSA
CA-HC               # Health Canada
AU-NZ-FSANZ
INT-Codex           # Codex Alimentarius
INT-WHO
INT-JECFA           # FAO/WHO Joint Expert Committee on Food Additives
INT-IARC
INT-ICH             # International Council for Harmonisation
```

### 1.6 Unit normalization rules

- **Storage unit for food-matrix concentrations:** `ppb` (µg/kg). Equivalent: µg/L for liquids.
- The engine **must not silently convert** between units when ingesting regulatory values. Store the agency's original value in `value_original` with `unit_original`, then store a normalized `value_ppb` separately. If the agency wrote "0.10 mg/kg," store both "0.10 mg/kg" and "100 ppb" — never collapse.
- **Wet weight vs dry weight** must be captured as a column (`basis: wet | dry | as-sold | reconstituted | unspecified`). Never assume.
- **As-sold vs reconstituted** distinction is mandatory for formulas and cereals. Powders measured as-sold; liquids/concentrates measured after reconstitution per label. The Category 1 row table assumes as-sold for powders, reconstituted-per-label for liquids.
- **Speciation flag** is mandatory when relevant: `speciated: true | false`. iAs values from a tAs measurement without speciation must be flagged `speciated: false` and not used as iAs floors.
- For toxicology endpoints, store the original unit (µg/kg bw/day, mg/kg bw/week, etc.) verbatim. Do not normalize across endpoints — they mean different things.

**Rounding rule:** the engine never rounds regulatory values on ingest. Rounding is a downstream presentation step, never a storage step.

### 1.7 Firewall rules — what flows where

| layer                          | reads from                              | writes to                              | brand-level data | COAs | HMTc thresholds |
|--------------------------------|-----------------------------------------|----------------------------------------|------------------|------|-----------------|
| Public wiki (HeavyMetalIndex)  | Engine PUBLIC view                      | Public Index repo (markdown)           | NEVER            | NEVER | NEVER          |
| HMTc standards program         | Engine PUBLIC view + Engine PRIVATE view| HMTc internal repo (Standards Briefings)| ALLOWED         | ALLOWED | ALLOWED       |
| Engine                         | Markdown corpus + uploaded raw          | Both views, but tagged                 | tag PRIVATE only | tag PRIVATE only | tag PRIVATE only |

**Implementation requirement.** Every row in every table that contains evidence has a `visibility` enum: `public | private`. The PUBLIC view of the engine — the only view the wiki ingest is allowed to query — filters `visibility = 'public'` at the database layer (Postgres RLS), not at the application layer. Never trust the application to filter; assume the application has bugs.

**Five behaviors that are ALWAYS forbidden, regardless of any later instruction:**

1. The wiki export must never reference HMTc-certified brands by name.
2. The wiki export must never publish HMTc threshold values, threshold rationale tags, or any Master Limit Table content.
3. The wiki export must never publish COA-derived numeric values attributable to a named brand.
4. The HMTc Standards Briefings must never expose formula math, CC values, T values, M values, or VME notation.
5. The engine must never auto-promote a `private` row to `public` on its own. Visibility downgrades require an explicit `review_event` of type `visibility_change`.

### 1.8 Review states

```
draft           # auto-extracted, never reviewed
needs_review    # extraction confidence below threshold OR flagged by lint
in_review       # human is actively working on it
approved_for_internal # human has approved for private standards work only
approved_for_public # human has approved for public wiki / Index export
published       # exported to a downstream system in a build_run
superseded      # a newer row replaces this one (kept for git/history audit)
rejected        # human said no, do not use
flagged         # something is wrong; do not use until resolved
```

Transitions are append-only events in `review_events`. The current state is a derived view, not a column on the source table — this gives us the full audit history for free.

---

## 2. Pilot scope

Build the engine around Category 1 Infant and Child Foods, rows 1–16. End-to-end test:

- Ingest the 23,000-file markdown corpus.
- For each of the 16 row × 10 active testing analytes = 160 cells, retrieve and rank candidate evidence.
- Extract structured records (concentration data, regulatory limits, claim support, gaps) using Zod schemas.
- Hand the output to human review.
- On public approval, export Git-ready markdown back to the public Index.

Category 1 succeeding end-to-end is the gate to scaling to Categories 2–23. Do not parallelize categories until Category 1 ships clean.

---

## 3. Supabase tables — minimum schema

This is the **shape contract**. Friend may add columns; he may not remove these or change their types without asking. All tables get `id uuid pk default gen_random_uuid()`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`. RLS enabled on every table; default deny.

### 3.1 `documents`

The 23k markdown files plus anything else ingested.

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| file_path       | text unique | absolute path in the corpus (immutable handle)                        |
| checksum        | text        | SHA-256 of file bytes                                                 |
| title           | text        | extracted from frontmatter or first H1                                |
| cite_key        | text        | `firstauthor-year-slug`, lowercase-hyphenated; UNIQUE when present    |
| source_type     | text        | controlled vocab from §1.4                                            |
| evidence_tier   | text        | A, B, C — populated by ingest heuristic, confirmable by reviewer      |
| jurisdictions   | text[]      | controlled vocab from §1.5                                            |
| metals_detected | text[]      | controlled vocab from §1.1                                            |
| products_detected| text[]     | row_slugs from §1.2 (or a free-text taxonomy for future categories)   |
| publication_year| int         |                                                                       |
| doi             | text        |                                                                       |
| visibility      | text        | `public` or `private`                                                 |
| ingest_run_id   | uuid        | which run created this row                                            |
| raw             | jsonb       | full frontmatter + any other parsed metadata                          |

Indexes: GIN on `metals_detected`, `products_detected`, `jurisdictions`. B-tree on `checksum`, `cite_key`, `publication_year`.

### 3.2 `document_chunks`

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| document_id     | uuid fk     |                                                                       |
| chunk_index     | int         | position in document                                                  |
| heading_path    | text[]      | breadcrumb of headings the chunk is under                             |
| page_number     | int         | for PDF-derived markdown, if known                                    |
| text            | text        | chunk body (suggested 600–1000 tokens, 100-token overlap)             |
| tsv             | tsvector    | full-text search vector                                               |
| embedding       | vector(1536)| pgvector — choose one embedding model and stay on it                  |
| visibility      | text        | inherited from document                                               |

Indexes: GIN on `tsv`, IVFFlat or HNSW on `embedding`.

### 3.3 `source_records`

A normalized "this is a source" record. Distinct from `documents` because one document can register multiple sources (e.g., a review paper that we treat as a B-tier secondary source AND as a pointer to the A-tier primaries it cites).

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| document_id     | uuid fk     | the file this came from                                               |
| cite_key        | text        |                                                                       |
| title           | text        |                                                                       |
| authors         | text[]      |                                                                       |
| year            | int         |                                                                       |
| publication     | text        |                                                                       |
| doi             | text        |                                                                       |
| source_type     | text        | controlled vocab                                                      |
| evidence_tier   | text        | A, B, C                                                               |
| review_state    | text        | controlled vocab                                                      |
| visibility      | text        |                                                                       |

### 3.4 `product_categories`

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| row_slug        | text unique | from §1.2                                                             |
| row_no          | int         |                                                                       |
| category_no     | int         | 1 for now; 1–23 as we scale                                           |
| row_name        | text        |                                                                       |
| variant_type    | text        | `clean_benchmark | contamination_platform | no_split | added_no_home | added_platform` |
| platform        | text        | `soy | rice | root_vegetables | predatory_fish | …`                   |
| platform_metals | text[]      | which metals the platform affects                                     |
| sister_row_slug | text        | slug of clean counterpart for contamination-platform rows             |
| locked          | boolean     | true for Category 1                                                   |

### 3.5 `metals`

Static reference, populated once.

| column     | type | notes                                                |
|------------|------|------------------------------------------------------|
| symbol     | text | from §1.1                                            |
| name       | text |                                                      |
| speciation_of | text | for iAs → tAs, MeHg → tHg, Cr-VI → Cr; else NULL |

### 3.6 `jurisdictions`

Static reference, populated once. Columns from §1.5.

### 3.7 `claims`

A claim is something a source asserts. "EU 2023/915 §3.2.19 sets baby food Cd at 10 ppb." "Smith 2024 found mean iAs of 92 ppb in white rice (n=76)."

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| claim_text      | text        | normalized statement                                                  |
| claim_type      | text        | `regulatory_limit | concentration_datum | toxicology_endpoint | mechanism | jurisdiction_comparison | other` |
| metals          | text[]      |                                                                       |
| product_rows    | text[]      | row_slugs                                                             |
| jurisdictions   | text[]      |                                                                       |
| review_state    | text        |                                                                       |
| visibility      | text        |                                                                       |

### 3.8 `claim_evidence`

Which document chunks support which claim. Many-to-many.

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| claim_id        | uuid fk     |                                                                       |
| document_id     | uuid fk     |                                                                       |
| chunk_id        | uuid fk     | nullable (claim might cite whole doc)                                 |
| relation        | text        | `directly_supports | partially_supports | contradicts | provides_context` |
| extracted_quote | text        | verbatim from the chunk; for provenance                               |
| page_number     | int         |                                                                       |
| confidence      | numeric     | 0–1; engine's confidence in the link                                  |

### 3.9 `regulatory_limits`

A finalized or draft regulatory value. Critical: this is the ONLY table the regulatory floor is computed from. Wrong values here corrupt every downstream limit.

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| jurisdiction    | text        |                                                                       |
| agency          | text        | `FDA, EFSA, EC, EPA, JECFA, Codex, OEHHA, …`                          |
| program         | text        | `Closer to Zero, Reg 2023/915, Prop 65, CXS 193-1995, …`              |
| citation        | text        | exact section/article/annex (e.g., "§3.2.19 Annex I")                 |
| metal           | text        |                                                                       |
| matrix_row_slug | text        | the row_slug this limit applies to                                    |
| matrix_inferred | boolean     | true if the regulation does not name this row but we mapped it        |
| value_original  | numeric     | exact value as written by the agency                                  |
| unit_original   | text        | exact unit as written                                                 |
| value_ppb       | numeric     | normalized                                                            |
| basis           | text        | `wet, dry, as-sold, reconstituted, unspecified`                       |
| status          | text        | `proposed, draft_guidance, finalized, enforced, withdrawn`            |
| effective_date  | date        |                                                                       |
| sunset_date     | date        |                                                                       |
| source_document_id | uuid fk  | the agency document itself                                            |
| review_state    | text        |                                                                       |
| visibility      | text        | almost always `public`                                                |

Constraint: no two `(jurisdiction, agency, program, citation, metal, matrix_row_slug)` rows. If the agency revises, insert a new row and mark the old one `superseded` via a `review_event`.

### 3.10 `concentration_data`

Measured values from the literature.

| column          | type        | notes                                                                 |
|-----------------|-------------|-----------------------------------------------------------------------|
| source_id       | uuid fk     | source_records                                                        |
| metal           | text        |                                                                       |
| product_row_slug| text        | nullable if the source talks about a broader category                 |
| ingredient      | text        | optional — for ingredient-level pages                                 |
| jurisdiction    | text        | sample provenance                                                     |
| n               | int         | sample size                                                           |
| statistic       | text        | `mean, median, p90, p95, max, range, …`                               |
| value_ppb       | numeric     |                                                                       |
| value_lower     | numeric     | for ranges                                                            |
| value_upper     | numeric     |                                                                       |
| basis           | text        | wet/dry/as-sold/reconstituted/unspecified                             |
| speciated       | boolean     |                                                                       |
| method          | text        | `ICP-MS, ICP-OES, GFAAS, CVAAS, HPLC-ICP-MS, …`                       |
| lod_ppb         | numeric     |                                                                       |
| loq_ppb         | numeric     |                                                                       |
| collection_year | int         |                                                                       |
| review_state    | text        |                                                                       |
| visibility      | text        |                                                                       |

### 3.11 `standard_candidates` (PRIVATE only)

HMTc-internal candidate thresholds. **`visibility` must be `private` on every row. RLS enforces.** Wiki ingest cannot read this table.

| column          | type    | notes                                                                     |
|-----------------|---------|---------------------------------------------------------------------------|
| product_row_slug| text    |                                                                           |
| metal           | text    |                                                                           |
| candidate_value_ppb | numeric |                                                                       |
| rationale_tag   | text    | `precautionary, market-ratcheting, feasibility-driven, regulatory-alignment` |
| backing_concentration_ids | uuid[] | references to concentration_data rows                          |
| floor_check_passed | boolean | candidate ≤ regulatory floor?                                          |
| review_state    | text    |                                                                           |

### 3.12 `build_runs`

| column          | type      | notes                                                                |
|-----------------|-----------|----------------------------------------------------------------------|
| kind            | text      | `ingest, retrieval, extraction, export, audit`                       |
| started_at      | timestamptz |                                                                    |
| ended_at        | timestamptz |                                                                    |
| input_summary   | jsonb     | what triggered this run                                              |
| output_summary  | jsonb     | counts, gaps, flags                                                  |
| status          | text      | `running, succeeded, failed, partial`                                |
| operator        | text      | username or service account                                          |

### 3.13 `artifacts`

Files the engine produces (markdown for the wiki, briefings for HMTc, reports, etc.).

| column          | type      | notes                                                                |
|-----------------|-----------|----------------------------------------------------------------------|
| build_run_id    | uuid fk   |                                                                      |
| kind            | text      | `wiki_source_md, wiki_product_md, wiki_lint_md, missing_source_log, ingest_log, hmtc_briefing_docx, audit_report` |
| path            | text      | relative path in the destination repo                                |
| content_hash    | text      |                                                                      |
| body            | text      | when small enough to store inline                                    |
| visibility      | text      |                                                                      |
| review_state    | text      |                                                                      |

### 3.14 `review_events`

Append-only audit trail for everything reviewable.

| column          | type      | notes                                                                |
|-----------------|-----------|----------------------------------------------------------------------|
| target_table    | text      |                                                                      |
| target_id       | uuid      |                                                                      |
| event_type      | text      | `state_change, edit, visibility_change, comment, override`           |
| from_value      | jsonb     |                                                                      |
| to_value        | jsonb     |                                                                      |
| reviewer        | text      |                                                                      |
| reviewer_role   | text      | `researcher, scientific_reviewer, regulatory_reviewer, editorial_reviewer, legal_reviewer, publisher, admin, automated` |
| note            | text      |                                                                      |

This table is never updated and never deleted from. `current state` of any row is the latest event for that target.

---

## 4. Ingest

### 4.1 Ordering

1. Compute SHA-256 checksum. Skip if already ingested at same checksum.
2. Parse YAML frontmatter; extract title, cite_key, authors, year, publication, DOI if present.
3. Detect metals by regex over the controlled vocab (case-sensitive for `iAs/tAs/MeHg/tHg/Cr-VI`).
4. Detect product rows by matching against the row_name aliases in §1.2 plus a lightweight synonym table (e.g., "infant formula" → both formula rows pending further disambiguation).
5. Guess source_type from filename heuristics + frontmatter `type` field if present.
6. Set initial evidence_tier from source_type (peer_reviewed/gov_report → A; ngo_report/industry → B; news → C; unknown → null).
7. Default `visibility` to `public` UNLESS the file path contains `lab-data/`, `coa/`, or `private/`, OR frontmatter `visibility: private`.
8. Chunk: split on H2/H3 boundaries first, then by token count if a chunk is too large. 600–1000 tokens, ~100-token overlap. Preserve `heading_path` on each chunk.
9. Build `tsv` and `embedding` for each chunk.
10. Insert into `documents` and `document_chunks`. Log to `build_runs` (kind=ingest).

### 4.2 Search precedence

**Exact (lexical) search runs first.** Vector search is the second pass. Reasons:

- Regulatory citations, cite keys, agency program names, and exact section numbers must match exactly. Embeddings approximate them and lose precision.
- Speciation distinctions (`iAs` vs `tAs`) are case- and token-sensitive; embeddings smear them.
- For chunks where exact lexical match scores high (e.g., chunk contains "EU 2023/915 §3.2.19" verbatim), prefer that chunk over a higher-cosine but less precise neighbor.

The retrieval ranker (§5) treats lexical and vector scores as separate signals.

---

## 5. Retrieval and ranking

For each (row_slug, metal) cell — 16 × 10 = 160 cells in Category 1 — retrieve candidate chunks. Score each chunk on these signals; rank.

| signal                              | weight (start; tune) | how to compute                                                |
|-------------------------------------|-----------------------|---------------------------------------------------------------|
| exact product-row match             | 0.20                  | row_slug or row_name verbatim in chunk                        |
| metal match                         | 0.15                  | metal symbol (case-sensitive) in chunk                        |
| source authority (evidence tier)    | 0.15                  | A=1.0, B=0.6, C=0.2                                           |
| evidence tier of containing document| 0.05                  | smoothed if doc tier is set but chunk tier isn't              |
| has concentration data              | 0.10                  | presence of ppb/µg/kg/mg/kg with a numeric                    |
| has regulatory data                 | 0.10                  | presence of regulation name + section + value                 |
| recency                             | 0.10                  | (year - 2010) / (current_year - 2010), clipped 0–1            |
| jurisdiction relevance              | 0.10                  | match to category's relevant jurisdictions                    |
| lexical score (tsv match)           | 0.05                  | normalized                                                    |

Top-K (start with K=20) per cell. Pass to extraction.

For Category 1, the relevant jurisdictions are: US-FDA, US-CA-OEHHA, EU-EC, EU-EFSA, INT-Codex, INT-JECFA, INT-WHO. A chunk grounded in any of these scores 1.0; otherwise scale by relevance heuristic.

---

## 6. Zod extraction schemas

Loose prose responses are not allowed. Every extraction call must validate against one of these schemas; on failure, reject and re-prompt or flag for review. Field names match the database columns above; optional fields can be `null` but must be present.

### 6.1 `SourceCandidate`

```ts
const SourceCandidate = z.object({
  document_id: z.string().uuid(),
  cite_key: z.string().regex(/^[a-z0-9]+\d{4}-[a-z0-9-]+$/).nullable(),
  title: z.string().min(3),
  authors: z.array(z.string()).default([]),
  year: z.number().int().min(1900).max(2100).nullable(),
  publication: z.string().nullable(),
  doi: z.string().nullable(),
  source_type: z.enum([
    "peer_reviewed","gov_report","regulation","ngo_report",
    "industry","conference","preprint","news","lab_data","unknown"
  ]),
  evidence_tier: z.enum(["A","B","C"]).nullable(),
  jurisdictions: z.array(z.string()).default([]),
  metals_detected: z.array(z.string()).default([]),
  products_detected: z.array(z.string()).default([]),
  visibility: z.enum(["public","private"]),
  notes: z.string().nullable()
});
```

### 6.2 `ConcentrationDatum`

```ts
const ConcentrationDatum = z.object({
  source_id: z.string().uuid(),
  metal: z.enum(["Pb","Cd","iAs","tAs","MeHg","tHg","Ni","Al","Cr","Cr-VI","Sn","Sb","U"]),
  product_row_slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).nullable(),
  ingredient: z.string().nullable(),
  jurisdiction: z.string().nullable(),
  n: z.number().int().min(1).nullable(),
  statistic: z.enum(["mean","median","p50","p75","p90","p95","p99","max","min","range","single","gm","unspecified"]),
  value_ppb: z.number().nullable(),
  value_lower: z.number().nullable(),
  value_upper: z.number().nullable(),
  value_original: z.number(),
  unit_original: z.string(),
  basis: z.enum(["wet","dry","as-sold","reconstituted","unspecified"]),
  speciated: z.boolean().nullable(),
  method: z.string().nullable(),
  lod_ppb: z.number().nullable(),
  loq_ppb: z.number().nullable(),
  collection_year: z.number().int().nullable(),
  page_number: z.number().int().nullable(),
  extracted_quote: z.string().min(1)  // verbatim, for provenance
});
```

### 6.3 `RegulatoryLimit`

```ts
const RegulatoryLimit = z.object({
  source_document_id: z.string().uuid(),
  jurisdiction: z.string(),
  agency: z.string(),
  program: z.string(),
  citation: z.string().min(1),
  metal: z.enum(["Pb","Cd","iAs","tAs","MeHg","tHg","Ni","Al","Cr","Cr-VI","Sn","Sb","U"]),
  matrix_row_slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  matrix_inferred: z.boolean(),
  value_original: z.number(),
  unit_original: z.string(),
  value_ppb: z.number(),
  basis: z.enum(["wet","dry","as-sold","reconstituted","unspecified"]),
  status: z.enum(["proposed","draft_guidance","finalized","enforced","withdrawn"]),
  effective_date: z.string().nullable(),  // ISO-8601
  sunset_date: z.string().nullable(),
  extracted_quote: z.string().min(1)
});
```

### 6.4 `ProductRowEvidence`

The roll-up the engine produces per (row_slug, metal). What downstream systems consume.

```ts
const ProductRowEvidence = z.object({
  product_row_slug: z.string(),
  metal: z.enum(["Pb","tAs","Cd","tHg","iAs","MeHg","Ni","Al","Cr-VI","Sn"]),
  best_sources: z.array(z.object({
    source_id: z.string().uuid(),
    cite_key: z.string().nullable(),
    evidence_tier: z.enum(["A","B","C"]),
    rank_score: z.number()
  })),
  concentration_summary: z.object({
    n_records: z.number().int(),
    p50: z.number().nullable(),
    p90: z.number().nullable(),
    p95: z.number().nullable(),
    max: z.number().nullable(),
    basis_mix: z.array(z.string())
  }),
  regulatory_limits: z.array(z.object({
    jurisdiction: z.string(),
    agency: z.string(),
    citation: z.string(),
    value_ppb: z.number(),
    status: z.string()
  })),
  applicable_floor_ppb: z.number().nullable(),  // most protective finalized value
  floor_inferred: z.boolean(),
  evidence_gaps: z.array(z.string()),
  visibility: z.enum(["public","private"])
});
```

### 6.5 `ClaimSupport`

Every claim has at least one supporting passage from a source.

```ts
const ClaimSupport = z.object({
  claim_id: z.string().uuid(),
  document_id: z.string().uuid(),
  chunk_id: z.string().uuid().nullable(),
  relation: z.enum(["directly_supports","partially_supports","contradicts","provides_context"]),
  extracted_quote: z.string().min(10),
  page_number: z.number().int().nullable(),
  confidence: z.number().min(0).max(1)
});
```

### 6.6 `UnresolvedGap`

```ts
const UnresolvedGap = z.object({
  product_row_slug: z.string(),
  metal: z.enum(["Pb","tAs","Cd","tHg","iAs","MeHg","Ni","Al","Cr-VI","Sn"]),
  gap_type: z.enum([
    "no_concentration_data","no_regulatory_data","speciation_missing",
    "basis_unclear","jurisdiction_missing","contradicting_sources","tier_imbalance","other"
  ]),
  description: z.string().min(5),
  suggested_searches: z.array(z.string()).default([]),
  blocks_publication: z.boolean()
});
```

### 6.7 `InternalStandardCandidate` (PRIVATE only)

```ts
const InternalStandardCandidate = z.object({
  product_row_slug: z.string(),
  metal: z.enum(["Pb","tAs","Cd","tHg","iAs","MeHg","Ni","Al","Cr-VI","Sn"]),
  candidate_value_ppb: z.number(),
  rationale_tag: z.enum([
    "precautionary","market-ratcheting","feasibility-driven","regulatory-alignment"
  ]),
  backing_concentration_ids: z.array(z.string().uuid()),
  applicable_floor_ppb: z.number().nullable(),
  floor_check_passed: z.boolean(),
  notes: z.string().nullable()
});
```

The engine inserts these only when explicitly invoked from the HMTc side. The wiki side has no entry point that produces these.

---

## 7. Category 1 test build — what the engine produces

For every (row_slug, metal) cell — 160 cells; many will be `—` for non-relevant metals — the engine produces:

1. **Best source candidates.** Top 5 ranked sources, tier A first.
2. **Relevant chunks.** Top 20 chunks with `extracted_quote` and `page_number`.
3. **Extracted concentration values.** All `ConcentrationDatum` records, validated.
4. **Applicable regulations.** All `RegulatoryLimit` records covering this cell.
5. **Computed regulatory floor.** Most protective finalized value, with `floor_inferred` flag if matrix mapping required inference (e.g., #11 fish baby foods Pb mapping).
6. **Evidence gaps.** All `UnresolvedGap` records for this cell.
7. **Suggested claims.** Draft `claims` with `claim_evidence` linkages.
8. **Unresolved/uncited items.** Anything the engine couldn't tie back to a source.

### 7.1 Acceptance criteria — Category 1 pilot

The pilot is "passed" when, on a sample audited by Karen:

- [ ] All 16 row_slugs are recognized end-to-end with no slug drift, no row collapse, no slash notation.
- [ ] Metals are stored using the controlled vocab; iAs/tAs and MeHg/tHg are never conflated.
- [ ] For every cell where a finalized regulatory floor exists in the locked Step 0 output, the engine recovers that exact value with the correct citation. Specifically:
  - Pb floors match: rows 1–4 = 10; rows 5–6 = 20; rows 7–8 = 10; row 9 = 20; rows 10–13 = 10; row 14 = blank (FDA CTZ juice draft, not finalized); rows 15–16 = 10.
  - Cd floors match: rows 1–4 = 5; rows 5–6 = 40; rows 7–16 = 10.
  - Ni floors match: rows 1, 2 = 250 / 400; rows 3, 4 = 100 / 100; rows 5, 6 = 3000; rows 7–13, 15, 16 = 500; row 14 = 250.
  - iAs floor on row 6 = 100 ppb (FDA action level).
  - Mercury floor on row 11 = 100 ppb (most-protective EU species-specific value, INFERRED mapping). Extracted mercury evidence must still remain speciated as `MeHg` or `tHg`; do not store a generic `Hg` evidence value.
  - Floors marked INFERRED in Step 0 carry `matrix_inferred = true` in `regulatory_limits`.
- [ ] No HMTc threshold value, no CC value, no T value, no formula notation appears anywhere in artifacts with `visibility = public`.
- [ ] No brand-identifying contamination data appears in any artifact with `visibility = public`.
- [ ] No A-tier source is silently demoted; no B/C-tier source is silently promoted to A.
- [ ] Every `claim` has at least one `claim_evidence` row pointing to a real chunk with a real `extracted_quote`. Zero orphaned claims.
- [ ] Citations resolve. If the engine can't verify a citation, it's flagged `needs_review`, not published.
- [ ] Every regulatory value that gets published carries the original agency value and unit alongside the normalized ppb value.
- [ ] The export, run twice on identical inputs, produces byte-identical artifacts (for audit reproducibility).

If any of the above fails, do not move to Category 2. The pilot is the gate.

---

## 8. Human review

The engine never auto-publishes. Karen (or a designated reviewer) approves:

- Valid sources — does the source_type, evidence_tier, jurisdiction tagging look right?
- Valid extracted values — does the value match what the paper or regulation actually says?
- Valid row mappings — is this concentration datum actually about this row_slug?
- Valid public claims — does the wording over-claim, under-claim, soften toward HMTc, or strengthen toward HMTc?
- Valid internal-only standard logic — does the rationale tag match the actual reasoning, and does the candidate value pass the regulatory floor check?

Reviews write `review_events`. Internal approval flips `review_state` to `approved_for_internal`; public approval flips `review_state` to `approved_for_public`. Only `approved_for_public` rows are eligible for public Index export.

---

## 9. Export back to the public Index

Evidence approved for public export becomes Git-ready markdown that lands in the public Index repo. File shapes:

- `wiki/sources/<cite-key>.md` — one per `approved_for_public` source. Frontmatter matches §3.3; body follows the Source page template in `CLAUDE.md`.
- `wiki/products/<row_slug>.md` — one per Category 1 row, updated with newly approved evidence. Body discusses what the literature says, jurisdiction by jurisdiction.
- `wiki/lint/<YYYY-MM-DD>-coverage.md` — coverage report: which (row, metal) cells have ≥3 A-tier sources, which are thin, which are empty.
- `wiki/lint/<YYYY-MM-DD>-missing-source-backlog.md` — `UnresolvedGap` records the engine surfaced. Karen works this into the next ingest priority list.
- `wiki/log.md` — append: `## [YYYY-MM-DD] ingest | <run-id> — <short summary>`. One entry per build_run.

All exports go through the PUBLIC view of the engine. The export step is a function that hard-asserts `visibility = public` on every record it touches; if any private record sneaks in, the export aborts and writes a critical flag to `build_runs.output_summary`.

After export, Karen commits and pushes to the Heavy Metal Index repo. Vercel rebuilds the public site.

---

## 10. What's not in scope for the pilot

- Categories 2–23. Don't build them yet. The schema is general enough; the row_slug list grows.
- The HMTc Standards Briefing pipeline (Inngest dev server, 11-step audit, 9 publication gates). The engine feeds it; building it is separate.
- Brand-level data ingest. The private brand-intelligence wiki is a future, separate repo per `CLAUDE.md`.
- Light Labs licensing flow.
- The consumer app's `contamination_profile` consumption pattern.
- Federation with WikiBiome.

These are noted so that schema choices today don't preclude them tomorrow.

---

## 11. Open questions for the friend

These need decisions before final implementation, not before starting:

1. Embedding model? (Recommend a single one chosen for stability; budget for re-embedding if we change.)
2. Chunk size and overlap — fine to tune empirically on the Category 1 corpus; start with 600–1000 tokens / 100 overlap.
3. Where does the engine run — Supabase Edge Functions, a separate Node service, or Inngest? Either works as long as RLS and visibility filters are enforced at Postgres, not at the app.
4. Reviewer UI — does Karen review in Supabase Studio, in a custom app, or via PR comments on generated markdown? Pilot can ship with Studio + markdown PRs; a real UI comes later.
5. What's the canonical clock for `effective_date` and `superseded`? Recommend: agency-stated effective date for regulations; ingest date for everything else.

---

## 12. Provenance

This document is locked against:

- `Category1_Step_0_Output_LOCKED.md` (April 2, 2026) — the 16 rows and the regulatory floor table.
- `HMTc_Methodology_Reference_v4_1.md` (April 2026) — controlled vocab, regulatory floor rule, formula concealment rule, increment ladder.
- `HMTc_Clean_Benchmark_Policy.md` — the clean-benchmark principle and settled decisions.
- `HMTc_Master_Handoff.md` — the 5 governing principles and the settled-decisions list.
- `CLAUDE.md` (Heavy Metal Index repo) — wiki firewall rules, evidence tiers, page templates, conventions.
- `heavy_metal_index_handoff.md` — strategic frame for the index.

If anything in this document conflicts with those source files, those source files win. Tell Karen and the conflict gets resolved in the source files first, then propagated here.
