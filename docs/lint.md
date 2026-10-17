# Lint — Heavy Metal Index Wiki

This is the full lint check list, split out of CLAUDE.md Part 18 to keep the operating manual under the context-budget threshold. CLAUDE.md Part 18 carries the summary and points here for the complete enumeration.

When Karen (or Karen's Lab) runs lint across the wiki, the lint pass checks for:

**Contradictions:** claims across pages that disagree. List with page references.

**Stale claims:** pages that cite only pre-2020 sources in fast-moving areas, or pages not updated after a newer source was ingested that should have touched them.

**Orphans:** pages with no inbound links.

**Missing frontmatter:** required fields absent or malformed.

**Regulatory-value drift:** any regulation page whose `limit_value` differs from what the agency source currently states. Run automatically when any agency source is newly ingested.

**Silent threshold deviation:** certification pages that cite different values than the referenced wiki pages without stating a rationale (precautionary, market-ratcheting, feasibility-driven, regulatory-alignment). This is the wiki/HMT&C drift check from Part 2.

**Evidence-tier mismatch:** synthesis claims supported only by B-tier or C-tier sources when A-tier sources exist in the corpus.

**Provenance gaps:** wiki claims that do not trace to a specific source page. Every numerical claim in the wiki must link to a source; claims without provenance are a lint failure.

**Routing audit unresolved:** `data/evidence/routing_unresolved.csv` is non-empty. A source's frontmatter declares products, ingredients, or matrices that do not match any existing target page. Each unresolved entry is either a frontmatter correction or a new-page proposal (see [[docs/page-creation]]).

**Ingredient coverage asymmetry:** ingredient pages where some `contamination_profile` sub-blocks are `in_progress` or `populated` while others remain `pending`. Per the coverage rule, any ingest that touches an ingredient page must advance all ten sub-blocks out of `pending`. Mixed-state pages indicate an ingest that addressed some analytes and silently skipped others. All-`pending` stubs (untouched) are not flagged. Run via `node tools/audit-ingredient-metal-coverage.mjs`.

**Ingredient body-table presence:** ingredient pages whose frontmatter has any sub-block at `populated` or `in_progress` but whose body lacks the "Heavy metal contamination profile" table.

**Contamination-profile integrity:** literal zero profiles fail regardless of confidence or study count. Below-reporting-limit results must carry explicit censoring, source identity, sample count and reporting limits; they cannot be rendered as measured zero or a population distribution. Source-specific observations retain species, food preparation, basis and time/market scope. `node tools/audit-contamination-profile-integrity.mjs` blocks prebuild, and the open-data drift check verifies the same values and provenance survive export. Null population summaries remain honest unknowns.

**Ingredient mandatory sections:** non-stub ingredient pages missing any of the body roles required (see [[docs/page-structure]] and [[docs/page-templates]]). Stubs are exempt from presence. Audit: `tools/audit-ingredient-mandatory-sections.mjs`, which checks presence and not order. Failures surface as `COMPLETE-INGREDIENT-SECTIONS`. Order is the page-structure audit below.

**Product-page mandatory sections:** non-stub product-category pages missing any of the body roles in [[docs/page-structure]] (see [[docs/page-templates]]). Stubs (zero contributing sources, or a body under 500 characters) are exempt from presence. Audit: `tools/audit-product-mandatory-sections.mjs`, which checks presence and not order. The Levers section is the actionable surface; pages missing it specifically are escalated rather than just flagged. Order is the page-structure audit below.

**Page structure (warn-only against a baseline):** `node tools/audit-page-structure.mjs --check` scans `wiki/ingredients/`, `wiki/products/`, and `wiki/metals/`, excluding family index pages. The rule text is [[docs/page-structure]]. Current debt is recorded in `data/evidence/page-structure-baseline.json` and does not fail CI. A page that newly fails a check does. `--warn-only` prints the counts and exits 0. `--write-baseline` rewrites the baseline after a deliberate content pass, not as part of ordinary editing. Stubs are exempt only from section presence and order. The checks, one page count each:

- **Answer block:** a handwritten `Direct answer` or `Key facts` section longer than 60 words, not 2 or 3 sentences, containing a citation, or paired with a second answer heading.
- **DOIs or author-year in prose:** a DOI, an author-year or agency-year citation, or a source wikilink whose visible text is not a number. References, Sources, Update history, generated blocks, and tables are excluded.
- **Generic headings:** Overview, Direct answer, Key facts, Quick read, At a glance, Introduction, Background, Discussion, Conclusion, Miscellaneous, General, Notes, Summary, and headings that begin with Additional or Other.
- **Metal symbols in prose:** a symbol token (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, Hg, U, and the same forms) outside tables, frontmatter, and the footer. `U.S.` and `U.K.` are not symbols.
- **Consumer audience:** frontmatter `audience` contains `consumer`, a section comment tags `consumer`, or a heading addresses families, parents, or consumers.
- **Section presence and order:** a non-stub page is missing a required role for its type, or the roles that are present are out of the order in [[docs/page-structure]]. The rendered answer block and the uncertainty note are separate checks. Metal pages include Mitigation, which resolves the old template-versus-schema split.
- **Uncertainty note:** the page has no `## What remains uncertain` heading. Stubs are included.

**Page openings:** `node tools/build-page-openings.mjs --check` (or `npm run lint:page-openings`) checks top-level Markdown pages in `wiki/metals/`, `wiki/ingredients/` and `wiki/products/`, excluding `index.md` and generated-hero pages. Metal and ingredient openings are required; product openings are optional but validated when present. Draft pages are skipped. The baseline only shrinks: new failures and already-compliant baseline entries fail the check. Regenerate from reviewed `quick_read` frontmatter with `node tools/build-page-openings.mjs --apply <files...>`.

For pilot or staging files, add `--allow-dir <dir>` explicitly, for example `node tools/build-page-openings.mjs --allow-dir wiki/pilot --apply wiki/pilot/lead.md`, followed by `node tools/build-page-openings.mjs --allow-dir wiki/pilot --check wiki/pilot/lead.md`. Under that extra directory, frontmatter `type: metal` selects metals rules, `ingredient` selects ingredients rules, and `product` or `product-category` selects products rules. Unsupported types and `index.md` are excluded. With no file arguments, the extra directory is scanned recursively alongside the default canonical scope. The option does not alter default scope, draft skipping, generated-page exclusions or baseline behavior. Dedicated CLI regression tests run with `node --test tools/build-page-openings.test.mjs`.

**Source public prose:** `node tools/clean-source-public-prose.mjs --check` blocks public source bodies containing local execution paths or agent identities. The repair tool preserves full originals and edit records; scientific caveats and named analytical software are retained.

**Source completion contract:** `node tools/evidence/audit-source-contract.mjs` records missing provenance, access and fitness fields in `data/evidence/source_contract_gaps.json`; explicitly marking an incomplete record `ingest_status: complete` blocks the build. A grade is not a completed-ingest claim. Legacy gaps remain a recovery queue and require source-grounded adjudication.

**Routing audit malformed:** `data/evidence/routing_malformed.csv` is non-empty. Source page missing required frontmatter (`cite_key`, `products`, `ingredients`, `matrices`, `metals`, `jurisdictions`, `source_type`, `evidence_tier`). All severities block. Explicit empty arrays are valid declarations; unresolved extraction inputs additionally carry `routing_input_gaps` and are not completed ingests.

**Routing audit stale:** routing audit last-modified older than any file in `wiki/sources/`. Re-run `tools/evidence/build-routing-audit.mjs`.

**Orphaned routing reference:** product-category page references a source whose routing row was removed.

**Source missing products field on food/personal-care paper:** source has populated `matrices:` with product-shaped slugs but `products: []` and no `provisional_scaffold`/`pending_category_lock` flag. Run via `node tools/audit-routing-discipline.mjs`. Currently `--warn-only`; flip to fail-on-error after Phase 1 frontmatter discipline stabilizes. See `docs/order-of-operations.md` Phase 1.

**HMTc-locked product page has zero routed sources:** product page has both `hmtc_category` and `hmtc_row` but no source declares it. Either the scaffold has not yet received its Phase 1 ingest, or sources declare incorrect slugs. `--warn-only`. See `docs/order-of-operations.md` Phase 5.

**Source declares product page requiring Step 0 Lock:** `routing_unresolved.csv` row whose `target_kind` is `product` and `declared_target` corresponds to a not-yet-locked HMTc category. The provisional-product-scaffold tool creates the routing destination immediately so ingest continues. Step 0 Lock then promotes the provisional scaffold to a locked HMTc row in a separate governance pass.

**Product page exists but lacks Step 0 Lock:** `provisional_scaffold: true` (or legacy `pending_category_lock: true`) is in the frontmatter. Surfaced in the morning report so Step 0 Locks can be prioritized for the categories with the most pulled-through evidence. Not a build-blocking lint failure — the provisional state is intentional and reversible. The audit `tools/autonomy/audit-pending-locks.mjs` counts these and ranks by routed-source count.

**Internal vocabulary in a published footer block:** an `## Update history` or `## References` block containing certification-program references (HMTc, heavymetaltested, threshold-setting, standards workbench), outside product names (Examine, microbiomemedicine, WikiBiome), agent or toolchain codenames, internal process vocabulary (placeholder, scaffold, backlog, quarantine), or file paths and code identifiers. This shipped: update-history rows once rendered raw git commit subjects, publishing lines such as "category SECTION pages + lean directory (Examine hierarchy)" and "HMTc product-category picker" onto heavymetalindex.com, which is precisely the "this wiki is the certifier's own marketing" line CLAUDE.md Part 2 exists to make unavailable. Run via `node tools/audit-page-history-leaks.mjs` (exit 1 on any finding, build-blocking in prebuild). Two term groups apply: the program-firewall group everywhere, and the toolchain group on update-history only, because agency names and build codenames collide (Codex Alimentarius Commission is a food-standards body and a correct reference entry). The descriptions themselves are derived from commit diffs rather than commit prose, so a finding means a regression in `tools/build-page-changelogs.mjs`, not a wording slip.

## Writing-style checks (language-judgment, no .mjs tool)

These categories require reading judgment rather than a structural script, so they have no `.mjs` audit. They are run as a delegated sweep (see `docs/tasks/prose-style-sweep.md`) that writes a findings report to `wiki/lint/<YYYY-MM-DD>-prose-style-sweep.md`; the report is triaged and applied by an editing-capable session, never auto-applied.

- **Em dashes in new prose:** em dashes outside direct quotes and citation text. Per [[docs/writing-style]], use commas, semicolons, periods, or parentheticals instead.
- **Inline bold for emphasis:** bolded words inside running prose. Bold is reserved for headings and explicit definition labels.
- **Bullets where prose is required:** study summaries, mechanism explanations, synthesis paragraphs, and implications sections rendered as bullet lists instead of prose. Study results belong in the evidence table in [[docs/page-structure]].
- **Undefined qualifiers:** "small," "trace," "safe," "dangerous," "high," "low" and similar used without a quantitative anchor (dose, population, matrix). Heavy Metal Index does not write consumer or family sections; that register belongs to Metallopathy. Per [[docs/page-structure]] and [[docs/conventions]].

## Other delegated semantic sweeps (language-judgment, no .mjs tool)

Read-only reader sweeps that fill semantic gaps the structural audits cannot reach. Each writes a dated report to `wiki/lint/`, triaged and applied by an editing-capable session, never auto-applied.

- **Citation-support sweep** ([[docs/tasks/citation-support-sweep]]): `audit-claim-provenance.mjs` confirms a `[[sources/...]]` citation exists near every numeric claim but cannot verify the source actually states the value (its own deferred "v2"). This sweep reads each cited source page and checks it supports the number, flagging mismatch / not-in-source / wrong-source. Highest defensibility value.
- **Source-tagging fidelity sweep** ([[docs/tasks/source-tagging-fidelity-sweep]]): reads each `wiki/sources/` abstract against its `products`/`ingredients`/`matrices`/`metals`/`jurisdictions` frontmatter and flags measured analytes or matrices missing from the tags (which silently breaks routing fan-out, Part 5b), over-specific scopes, and over-tagging.
- **Prose-vs-frontmatter consistency sweep** ([[docs/tasks/prose-frontmatter-consistency-sweep]]): checks each ingredient/metal page's narrative and body table against its own `contamination_profile` numbers, flagging table≠frontmatter staleness, prose magnitude that contradicts the data, and confidence/coverage mismatches.

**Internal vocabulary in a published footer block:** an `## Update history` or `## References` block containing certification-program references (HMTc, heavymetaltested, threshold-setting, standards workbench), outside product names (Examine, microbiomemedicine, WikiBiome), agent or toolchain codenames, internal process vocabulary (placeholder, scaffold, backlog, quarantine), or file paths and code identifiers. This shipped: update-history rows once rendered raw git commit subjects, publishing lines such as "category SECTION pages + lean directory (Examine hierarchy)" and "HMTc product-category picker" onto heavymetalindex.com, which is precisely the "this wiki is the certifier's own marketing" line CLAUDE.md Part 2 exists to make unavailable. Run via `node tools/audit-page-history-leaks.mjs` (exit 1 on any finding, build-blocking in prebuild). Two term groups apply: the program-firewall group everywhere, and the toolchain group on update-history only, because agency names and build codenames collide (Codex Alimentarius Commission is a food-standards body and a correct reference entry). The descriptions themselves are derived from commit diffs rather than commit prose, so a finding means a regression in `tools/build-page-changelogs.mjs`, not a wording slip.

**Certification-framed surface on the index domain (firewall no-threshold lint):** a directory of certification-framed evidence records, or workbench derivation frontmatter (`step0_basis` and the rationale-tag vocabulary of CLAUDE.md Part 19), present on `heavymetalindex.com` rather than the certification plane. Run via `node tools/autonomy/firewall-no-threshold-lint.mjs` (exit 1 on a structural finding). **Build-blocking in `prebuild` as of 2026-07-30**, when the 351 `wiki/dossiers/` pages and both dossier generators were removed together; it had run `--warn-only` while that backlog stood. Deliberately no blanket ppb ban — regulatory caps are literature-class and belong on the index. Structural findings block; workbench-frontmatter and prose findings are advisory. Note the precedent the blocking flag exists to hold: `b6c971f01` removed the dossier pages and `af9c97a50` regenerated them straight back, because the generators stayed in `prebuild` — page removal without generator removal regresses silently, and this lint is what now catches it.

**Homepage layout:** `wiki/index.md` contains a markdown heading, or any prose outside the designed homepage sections. The public homepage is one HTML layout. Batch logs ("recently added", "added on <date>", source lists parked after the closing wrapper) are a lint failure. Run via `node tools/audit-homepage-layout.mjs` (exit 1 on any finding). It runs in `npm test`, `.husky/pre-commit`, and `prebuild`, after the homepage generators. Those generators may refresh their marker blocks, including the library ledger, and then re-check the file. They do not append free prose.

**Public batch-log prose:** any page Quartz publishes (everything under `wiki/` except `batch-reports/`, `lint/`, `log.md`, `briefings/`, `queries/`, `private/`, `templates/`, and `raw/`) contains ingest bookkeeping. The patterns include verification notes, ingest logs, routing-audit placeholders, "pending ingest", "routing layer", "how this page was promoted", "downstream pages updated", and "ingest receipt". Update history is exempt. A legitimate match goes in `tools/audit-public-batch-prose.allowlist.txt`, one path per line. Run via `node tools/audit-public-batch-prose.mjs`. It runs in `npm test`, `.husky/pre-commit`, and `prebuild`. Batch detail belongs in `wiki/batch-reports/`, which the Quartz build does not publish.

## Output and log conventions

Lint results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`. Lint entries in `log.md` use `op: lint`. Routing lint failures should block builds, not just produce reports, because routing drift propagates silently.
