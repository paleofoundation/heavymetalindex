# INGEST.md — Bulk corpus ingest workflow

This file specifies how the 23,260-paper corpus in `raw/markdown/` is brought into the wiki. Read this together with `CLAUDE.md`. Where the two conflict, `CLAUDE.md` wins; this file extends it.

## The problem this solves

`CLAUDE.md` defines a `wiki/sources/<cite-key>.md` template designed for hand-curated ingest — Claude reads the paper, writes a TL;DR, key numbers, methods note, implications, and updates affected wiki pages. That workflow is correct for papers that drive substantive wiki claims. It is not feasible for 23,260 papers, and applying it at that scale would bury the genuinely-curated sources under a flood of low-attention catalog entries.

The corpus is also valuable in aggregate, not just per-paper. Figures extracted from the literature (concentration distributions, scatter plots, geographic maps) are load-bearing for the future consumer app — users need to see "here's the distribution of iAs in 200 rice samples; here's where your value sits." Those figures are sitting unindexed inside 23k folders.

## The architectural answer

A new layer beneath `wiki/sources/`, called the **corpus**, with three properties:

1. **Built by script, not by hand.** A catalog generator walks `raw/markdown/`, parses each paper's `meta.json` and figure files, tags by metal/ingredient/product/jurisdiction/study-type, and emits a structured catalog. Index pages in `wiki/corpus/` are regenerated from the catalog, never hand-edited. This is how 23k papers stay maintainable.
2. **Promotion path to `sources/`.** When a paper is cited in actual wiki content, it is *promoted* from corpus to a full `wiki/sources/<cite-key>.md` page using the existing template. The corpus entry gains a `promoted_to` backlink. Inline citations always point to `sources/`, never to corpus entries — this preserves the inline-citation rule from CLAUDE.md without modification.
3. **Figures indexed independently.** A `figures.json` catalog records every extracted figure with its paper, page, type, path, and (where extractable) caption. Per-metal and per-ingredient figure index pages let Obsidian users browse them; the app reads the JSON directly.

The corpus does not replace `sources/`. It feeds it.

## Directory shape

```
raw/
  markdown/
    FM_<id>/
      FM_<id>.md                    # extracted paper text (untouched)
      FM_<id>_meta.json             # bibliographic metadata (untouched)
      _page_*_Figure_*.jpeg         # extracted figures (untouched)
      _page_*_Picture_*.jpeg        # extracted pictures (untouched)
  corpus_catalog.json               # generated; one record per paper
  corpus_figures.json               # generated; one record per figure
wiki/
  corpus/
    index.md                        # generated landing page
    by-metal/<metal>.md             # generated; one per metal
    by-ingredient/<commodity>.md    # generated; one per ingredient
    by-product/<category>.md        # generated; one per product category
    by-jurisdiction/<juris>.md      # generated; one per jurisdiction
    by-year.md                      # generated; chronological
    figures-by-metal/<metal>.md     # generated; one per metal, embeds figures
    figures-by-ingredient/<commodity>.md
    promotion-queue.md              # hand-edited; papers flagged for promotion to sources/
  sources/
    <cite-key>.md                   # promoted papers; existing CLAUDE.md template
tools/
  build_corpus_catalog.py           # walks raw/markdown/, emits corpus_catalog.json
  build_corpus_figures.py           # walks raw/markdown/, emits corpus_figures.json
  build_corpus_pages.py             # reads catalogs, regenerates wiki/corpus/*.md
  promote_to_sources.py             # promotes a corpus entry to wiki/sources/
  tag_rules.yaml                    # keyword tagging rules (versioned, editable)
```

Files in `raw/` are append-only and not modified, per `CLAUDE.md`. The two top-level catalog JSONs sit at `raw/corpus_catalog.json` and `raw/corpus_figures.json` because they are derived from raw and are the inputs to wiki-page generation; they are committed but regenerated, not hand-edited.

## `corpus_catalog.json` schema

One record per paper. NDJSON (one JSON object per line) is preferred for git diff legibility and streamability. Stable ordering: sort by `fm_id` ascending.

```json
{
  "fm_id": "FM_10000036",
  "cite_key": null,
  "title": "Inorganic arsenic in US rice, 2020-2023",
  "authors": ["Smith J", "Doe A"],
  "year": 2024,
  "journal": "Environ Sci Technol",
  "doi": "10.xxxx/xxxxx",
  "pmc_id": "PMC1234567",
  "abstract": "We measured inorganic arsenic in...",
  "study_type": ["primary"],
  "metals": ["iAs", "tAs"],
  "ingredients": ["rice", "rice-syrup"],
  "products": ["infant-cereal"],
  "jurisdictions": ["US"],
  "n_figures": 8,
  "raw_md_path": "raw/markdown/FM_10000036/FM_10000036.md",
  "raw_meta_path": "raw/markdown/FM_10000036/FM_10000036_meta.json",
  "promoted_to": null,
  "tagged_at": "2026-04-26T14:00:00Z",
  "tagger_version": "1.0"
}
```

Field rules.

- `fm_id` — directory name, the stable handle for the corpus entry.
- `cite_key` — null until promoted; set to the canonical `<firstauthor><year>-<slug>` on promotion.
- `study_type` — array, drawn from a controlled vocabulary: `systematic-review`, `meta-analysis`, `narrative-review`, `primary`, `case-study`, `commentary`, `methods`, `regulatory-document`, `other`.
- `metals` — controlled vocabulary matching `wiki/metals/` slugs: `Pb`, `Cd`, `iAs`, `tAs`, `MeHg`, `tHg`, `Ni`, `Cr`, `Cr-VI`, `Al`, `Sb`, `U`. The iAs/tAs distinction is non-negotiable per CLAUDE.md — do not collapse them.
- `ingredients` and `products` — slugs matching wiki page filenames where they exist; new slugs allowed but should be added to `tag_rules.yaml` so subsequent runs are consistent.
- `promoted_to` — null until promoted, then set to the relative path of the source page (e.g., `wiki/sources/smith2024-rice-arsenic.md`).
- `tagger_version` — version of `tag_rules.yaml` that produced these tags. When tag rules change, papers can be re-tagged selectively.

## `corpus_figures.json` schema

One record per extracted image. NDJSON. Stable ordering: sort by `fm_id` then `page` then `figure_index`.

```json
{
  "fm_id": "FM_10000036",
  "page": 4,
  "figure_index": 2,
  "kind": "figure",
  "path": "raw/markdown/FM_10000036/_page_4_Figure_2.jpeg",
  "caption": "Distribution of inorganic arsenic across 200 US rice samples by region.",
  "caption_source": "extracted",
  "metals": ["iAs"],
  "ingredients": ["rice"],
  "figure_type": ["distribution"],
  "tagged_at": "2026-04-26T14:00:00Z"
}
```

Field rules.

- `kind` — `figure` or `picture` based on the filename pattern.
- `caption` — extracted from the surrounding markdown when possible. Use the heuristic: search the paper's `.md` for the nearest "Figure 2" / "Fig. 2" / "Figure 2:" reference within 500 characters of the figure's page-position; if found, take the sentence following it. If not found, leave null and set `caption_source` to `none`.
- `caption_source` — `extracted` (parsed from md), `inferred` (heuristic, lower confidence), or `none`.
- `figure_type` — controlled vocabulary, inferred from caption keywords: `distribution`, `scatter`, `boxplot`, `map`, `time-series`, `dose-response`, `bar-chart`, `flow-diagram`, `microscopy`, `chemical-structure`, `other`. Multi-tag allowed.
- `metals` and `ingredients` — inherited from the paper's catalog entry by default; refined by caption parsing where the caption names a specific metal or ingredient that is a subset of the paper's tags.

## Tagging rules (`tools/tag_rules.yaml`)

Keyword-based tagging is heuristic and improvable. Keep the rules in a versioned YAML file so changes are reviewable. Suggested initial structure:

```yaml
metals:
  Pb:
    aliases: [lead, "Pb²⁺", "plumbum"]
    require_word_boundary: true
  iAs:
    aliases: ["inorganic arsenic", "iAs", "As(III)", "As(V)", "arsenite", "arsenate"]
    require_word_boundary: false
  tAs:
    aliases: ["total arsenic", "tAs"]
    # also tag tAs whenever 'arsenic' appears without 'inorganic' or 'organic' qualifier
    fallback_when_metal_tagged: arsenic
ingredients:
  rice:
    aliases: [rice, "Oryza sativa", "rice flour", "rice bran", "rice syrup", "brown rice", "white rice"]
  cocoa:
    aliases: [cocoa, cacao, "Theobroma cacao", chocolate]
products:
  infant-cereal:
    aliases: ["infant cereal", "infant rice cereal", "baby cereal"]
study_types:
  systematic-review:
    title_or_abstract_contains: ["systematic review"]
  meta-analysis:
    title_or_abstract_contains: ["meta-analysis", "meta analysis"]
```

Tagging is performed against `title + abstract + journal + (first 5000 chars of full text)`. Word-boundary matching prevents `Pb` from matching inside `Pbouquet`. Case-insensitive by default.

## Generated wiki pages

Index pages in `wiki/corpus/` are pure outputs of `build_corpus_pages.py`. Each starts with a generated-file header so no human edits them by hand:

```markdown
<!-- GENERATED FILE — do not edit by hand. Regenerate with: python tools/build_corpus_pages.py -->
<!-- Source: raw/corpus_catalog.json (rebuilt: 2026-04-26T14:00:00Z) -->
```

### `wiki/corpus/index.md`

Top-level corpus landing page. Counts (total papers, by metal, by ingredient, by year), links into the per-axis index pages, and a note explaining the corpus/sources distinction for any reader who lands here directly.

### `wiki/corpus/by-metal/<metal>.md`

One page per metal in the controlled vocabulary. Lists papers tagged for that metal, sorted year-descending then first-author-ascending. Each line:

```
- **Smith J et al. 2024.** Inorganic arsenic in US rice, 2020-2023. *Environ Sci Technol*. [primary, 8 figs] — [[corpus/entries/FM_10000036]] · [raw md](../../raw/markdown/FM_10000036/FM_10000036.md)
```

The bracketed `[primary, 8 figs]` shows study type and figure count at a glance.

Per-paper detail pages at `wiki/corpus/entries/FM_<id>.md` are optional in the first iteration. The catalog JSON is the source of truth; the per-axis index pages are the navigable surface. Per-paper Obsidian pages can be added later if Karen wants them.

### `wiki/corpus/by-ingredient/<commodity>.md` and `by-product/<category>.md`

Same structure as by-metal. One page per commodity slug that has at least one tagged paper.

### `wiki/corpus/figures-by-metal/<metal>.md`

Inline-embeds figures tagged to that metal, with caption and link to the parent paper. Obsidian renders embedded images via `![[path]]`. Format:

```markdown
### Figure: distribution of iAs in 200 US rice samples
![[raw/markdown/FM_10000036/_page_4_Figure_2.jpeg]]
*Caption:* Distribution of inorganic arsenic across 200 US rice samples by region.
*From:* Smith J et al. 2024. — [[corpus/entries/FM_10000036]]
```

Cap each page at ~200 figures; if a metal has more, paginate (`figures-by-metal/Pb-1.md`, `figures-by-metal/Pb-2.md`).

### `wiki/corpus/by-year.md`

Chronological. Useful for spotting recent literature and for the "regulatory drift" lint check.

## Promotion workflow

Promotion happens when a wiki page wants to cite a specific paper inline. The flow:

1. Identify the corpus entry by `fm_id` (search `corpus_catalog.json` by title or DOI).
2. Run `python tools/promote_to_sources.py FM_10000036`. The script:
   - Generates `cite_key` as `<firstauthor-lower><year>-<slug-from-title>`. Verifies uniqueness against existing `wiki/sources/`.
   - Creates `wiki/sources/<cite-key>.md` from the CLAUDE.md source-page template, pre-filling all metadata fields from `corpus_catalog.json`.
   - Leaves the `## TL;DR`, `## Key numbers`, `## Methods`, `## Implications` sections as stubs marked `<!-- pending Claude read -->`.
   - Sets `evidence_tier` from `study_type` heuristically: A for systematic-review, meta-analysis, regulatory-document; B for primary, methods; otherwise leave as `<!-- TBD -->` for human review.
   - Updates the corpus entry's `promoted_to` field.
   - Appends a log entry to `wiki/log.md` per CLAUDE.md format.
3. Claude reads the paper at `raw/markdown/<fm_id>/<fm_id>.md` and fills in the stub sections per the existing CLAUDE.md ingest workflow.
4. Wiki page making the citation links to `[[sources/<cite-key>]]`. Never to `[[corpus/...]]`.
5. Commit.

The promotion script is what enforces the rule that sources/ is the only thing wiki claims cite — corpus entries cannot be linked from wiki content as inline citations because they don't have `cite_key` set and don't exist as named pages in the inline-citation namespace.

### `wiki/corpus/promotion-queue.md`

Hand-edited list of papers Karen or Claude has identified as worth promoting but hasn't read yet. Format: one line per paper, with `fm_id`, why it's queued, and target wiki pages it would support. The queue is reviewed during ingest sessions.

## Update cadence

The catalog and figure index are rebuilt whenever `raw/markdown/` changes. In practice:

1. New PDFs are extracted to `raw/markdown/FM_<new-id>/`.
2. Run `python tools/build_corpus_catalog.py` and `python tools/build_corpus_figures.py`. Both are idempotent — re-running over an unchanged corpus produces zero diff.
3. Run `python tools/build_corpus_pages.py`. Regenerates all `wiki/corpus/*.md` files.
4. Inspect git diff. Commit with message: `corpus: rebuild — added N papers, M figures`.
5. If `tag_rules.yaml` changed, the catalog needs full re-tagging (run with `--retag`). Bump `tagger_version`. Commit.

`build_corpus_catalog.py` should accept `--only FM_<id>` for incremental rebuilds when only one paper has changed.

## Lint additions

The lint workflow in `CLAUDE.md` gains these checks when corpus exists:

1. **Promotable claims** — wiki pages with `<!-- UNCITED -->` markers should be cross-referenced against `corpus_catalog.json` by topic. Suggest candidate papers (top 5 by tag overlap) for each uncited claim. Lint output: "Page X has uncited claim about iAs in rice; corpus has 47 candidate papers. Top 5: ..."
2. **Promotion-queue staleness** — papers in `promotion-queue.md` older than 90 days that haven't been promoted. Either promote, deprioritize, or remove.
3. **Orphaned promotions** — entries in `wiki/sources/` whose `cite_key` doesn't match any corpus entry's `promoted_to`. These predate the corpus or were hand-curated; flag for verification but don't auto-fix.
4. **Catalog/page drift** — `wiki/corpus/*.md` pages whose generation timestamp lags `raw/corpus_catalog.json`. Means someone updated the catalog without regenerating pages.

## Things this does not do (and why)

- **It does not auto-promote.** Promotion is a deliberate act because the source-page template requires Claude to actually read the paper. Auto-promotion would create thousands of empty source-page stubs that fail the inline-citation rule's spirit.
- **It does not write `sources/` content.** Promotion creates the page skeleton; filling in TL;DR, key numbers, and implications is the existing CLAUDE.md ingest workflow, performed by Claude reading the raw markdown.
- **It does not move files out of `raw/`.** All 269k files stay where they are. The wiki points into `raw/`. Moving would break Obsidian's image embeds and would violate CLAUDE.md's "raw is append-only" rule.
- **It does not extend `index.md`.** The wiki's main `index.md` lists curated wiki pages. Corpus entries are not curated wiki pages. They are reachable from `wiki/corpus/index.md`, which `index.md` links to once.
- **It does not duplicate the inline-citation rule.** Inline citations still go to `[[sources/<cite-key>]]`. The corpus is the substrate that feeds sources; it is not a parallel citation namespace.

## Bootstrap order

When Obsidian-Claude executes this for the first time:

1. Create `tools/` directory and `tag_rules.yaml` with initial keyword sets drawn from existing wiki page slugs (`wiki/metals/`, `wiki/ingredients/`, `wiki/products/`).
2. Write `tools/build_corpus_catalog.py`. Run it on a small subset first (`--limit 50`) and inspect output before running on all 23k.
3. Hand-spot-check 10 random catalog entries against the underlying meta.json and abstract — verify metals/ingredients tags are correct. Adjust `tag_rules.yaml` if systematic mistagging shows up.
4. Run on the full corpus. Commit `raw/corpus_catalog.json`.
5. Write `tools/build_corpus_figures.py`. Same incremental approach. Commit `raw/corpus_figures.json`.
6. Write `tools/build_corpus_pages.py`. Generate `wiki/corpus/` pages. Commit.
7. Write `tools/promote_to_sources.py`. Test on one paper. Commit.
8. Append to `wiki/log.md`: `## [YYYY-MM-DD] schema | corpus — initial build (N papers, M figures)`.

Each step commits before moving to the next. If a script needs to be rewritten, the prior committed catalog still works.

## Failure modes to watch for

- **Tag drift between corpus and wiki ingredients.** If `tag_rules.yaml` uses `rice-syrup` but the wiki page is `rice_syrup.md`, links break. Tag slug = wiki filename slug. Enforce with a lint check.
- **Catalog promoted to authority.** The corpus is heuristic. A paper tagged `metals: [Pb]` is "the tagger thinks this paper is about Pb"; it is not "this paper has been verified as a Pb source." Wiki claims must not cite corpus tags as evidence; only `sources/` pages (which Claude has read) carry that authority.
- **Figure caption hallucination.** If `caption_source: none`, do not invent a caption for the figure-by-metal pages. Show "*Caption: not extracted*" and leave it. Inventing captions would be a CLAUDE.md violation (false confidence in a certification-adjacent context).
- **Mass-promote pressure.** When a wiki page needs to cite something, it is tempting to promote 50 corpus entries at once and fill them all in shallowly. Don't. Each promoted source gets a proper read. If 50 papers are needed for a synthesis, that synthesis is a multi-session piece of work, not a single ingest.
