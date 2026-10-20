# Shared Sources index

The existing `/sources/index` archive is the single public source catalogue. It keeps the five-column structure: **# / Citation / Year / Type / Used on the Index for**. Existing source pages remain the destinations for original findings, methods, limitations and source downloads. The catalogue is not a new source register and does not change scientific appraisal states.

`tools/sources/build-source-index.mjs` owns `wiki/sources/index.md`, the public JSON and CSV in `wiki/static/data/`, and the internal build audit in `data/evidence/source-index/`. The prior archive text is preserved there. Regenerate after changes to source metadata, citations or page relationships; `--check` detects drift. The regular prebuild and the isolated pilot build invoke this owner without running a whole-library build.

## Relationship meanings

**Verified citation use** means an explicit source citation was located in article content, including a supporting table. The row links to the citing page and its section. It verifies placement, not scientific support or completed appraisal. Repeated citations and canonical aliases merge into one source–page relationship while retaining distinct sections.

**Discovery candidate** means a topic relationship exists through source metadata, a retained source legend, bibliography-only navigation or the frozen candidate inventory, without a citation in that page's article content. A source can be used on one page and remain a discovery candidate on another. Filters must evaluate the selected page's relationship, rather than promoting every relationship when a source is cited somewhere else.

Generated References, Sources legends, history, code examples and hidden provenance ledgers cannot establish article use. Navigation-only and bibliography pages establish discovery relationships. A source's unknown eligibility is not an exclusion finding and is not evidence that it supports the topic. Source records without any recorded use or topic relationship remain searchable when their bibliographic identity is ready for public display.

Follow the existing publication rules for draft, pending, retired, duplicate and unresolved bibliographic records. Preserve excluded identities and unresolved citation targets in the internal audit; never invent an identity or count an unverified source as support. Local numbered-copy page files are not separate Index destinations. No source files are deleted or their scientific states promoted by this catalogue.

## Reading and navigation

The article opens with findings-oriented explanatory prose, then search, initially collapsed **Filter findings**, and the table. Filters cover source type, year, contaminant, Index page and relationship status; sort by year or title. Search includes title, author/agency, DOI, cite key and related page names. Serve 50 rows per result page, retain the selection in a shareable URL, and keep reset, empty results and keyboard controls usable. On phones the same five labelled fields stack into records. The complete CSV is also available when JavaScript is unavailable.

Rice keeps its complete References and replaces the inherited Sources table with a short explanation and **Rice Sources** link to `/sources/index?topic=ingredients%2Frice`. This opens the same catalogue filtered to Rice, including separately identified discovery candidates. Frozen candidate inventories preserve the original relationships without exposing legacy pilot bookkeeping in the article. Other article source lists are not migrated by this local Rice change.

The local pilot compiles the archive and its assets, reusing already rendered public destinations for catalogue links. Reused pages retain their previous content; their presence in the preview does not claim a fresh scientific review. This remains a local preview and authoring change, not a deployment.
