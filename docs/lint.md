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

**Contamination-profile integrity:** populated `contamination_profile` metal blocks that understate contamination through one of two artifact signatures. (1) `degenerate-upper-tail`: `p95_ppb` does not exceed the typical-range maximum (`typical_ppb[1]`) while `n_studies > 5`, meaning a collapsed single-value pool was published as a distribution. (2) `censored-zero-at-high-confidence`: `typical_ppb [0, 0]` and `p95_ppb 0` at `confidence: high`, meaning below-LOQ non-detects were coded as literal zeros and pooled as zero rather than left-censored at the reporting limit. Both are Part 2 drift (softening reported contamination) and originate in the 2026-06-11 rice Pb/iAs/tHg/Cr/U artifact (drift audit finding A1). Run via `node tools/audit-contamination-profile-integrity.mjs` (exit 1 on failure). Wired into `prebuild` as build-blocking. The pre-existing 182-cell / 49-page backlog (mostly FDA-TDS-derived produce, dairy, and meat non-detects) was drained by source-grounded resynthesis across batches 1–4 on 2026-06-11; with the backlog at zero the audit now blocks the build on any newly introduced understating cell, mirroring the `audit-routing-discipline` precedent. A `populated` cell with `p95_ppb: null` is reported as a non-blocking advisory, not a failure (a null upper tail is an honest "not yet computed", not a fabricated low value).

**Ingredient mandatory sections:** non-stub ingredient pages missing any of the eight `## H2` section headings required (see [[docs/page-templates]]). Stubs are exempt. Audit: `tools/audit-ingredient-mandatory-sections.mjs`. Failures surface as `COMPLETE-INGREDIENT-SECTIONS`.

**Product-page mandatory sections:** non-stub product-category pages missing any of the ten `## H2` section headings required (see [[docs/page-templates]]). Stubs (zero contributing sources) are exempt. Audit: `tools/audit-product-mandatory-sections.mjs`. The Levers section is the brand-legal-actionable surface; pages missing it specifically are escalated rather than just flagged.

**Routing audit malformed:** `data/evidence/routing_malformed.csv` is non-empty. Source page missing required frontmatter (`cite_key`, `products`, `ingredients`, `matrices`, `metals`, `jurisdictions`, `source_type`, `evidence_tier`).

**Routing audit stale:** routing audit last-modified older than any file in `wiki/sources/`. Re-run `tools/evidence/build-routing-audit.mjs`.

**Orphaned routing reference:** product-category page references a source whose routing row was removed.

**Source missing products field on food/personal-care paper:** source has populated `matrices:` with product-shaped slugs but `products: []` and no `provisional_scaffold`/`pending_category_lock` flag. Run via `node tools/audit-routing-discipline.mjs`. Currently `--warn-only`; flip to fail-on-error after Phase 1 frontmatter discipline stabilizes. See `docs/order-of-operations.md` Phase 1.

**HMTc-locked product page has zero routed sources:** product page has both `hmtc_category` and `hmtc_row` but no source declares it. Either the scaffold has not yet received its Phase 1 ingest, or sources declare incorrect slugs. `--warn-only`. See `docs/order-of-operations.md` Phase 5.

**Source declares product page requiring Step 0 Lock:** `routing_unresolved.csv` row whose `target_kind` is `product` and `declared_target` corresponds to a not-yet-locked HMTc category. The provisional-product-scaffold tool creates the routing destination immediately so ingest continues. Step 0 Lock then promotes the provisional scaffold to a locked HMTc row in a separate governance pass.

**Product page exists but lacks Step 0 Lock:** `provisional_scaffold: true` (or legacy `pending_category_lock: true`) is in the frontmatter. Surfaced in the morning report so Step 0 Locks can be prioritized for the categories with the most pulled-through evidence. Not a build-blocking lint failure — the provisional state is intentional and reversible. The audit `tools/autonomy/audit-pending-locks.mjs` counts these and ranks by routed-source count.

**Internal vocabulary in a published footer block:** an `## Update history` or `## References` block containing certification-program references (HMTc, heavymetaltested, threshold-setting, standards workbench), outside product names (Examine, microbiomemedicine, WikiBiome), agent or toolchain codenames, internal process vocabulary (placeholder, scaffold, backlog, quarantine), or file paths and code identifiers. This shipped: update-history rows once rendered raw git commit subjects, publishing lines such as "category SECTION pages + lean directory (Examine hierarchy)" and "HMTc product-category picker" onto heavymetalindex.com, which is precisely the "this wiki is the certifier's own marketing" line CLAUDE.md Part 2 exists to make unavailable. Run via `node tools/audit-page-history-leaks.mjs` (exit 1 on any finding, build-blocking in prebuild). Two term groups apply: the program-firewall group everywhere, and the toolchain group on update-history only, because agency names and build codenames collide (Codex Alimentarius Commission is a food-standards body and a correct reference entry). The descriptions themselves are derived from commit diffs rather than commit prose, so a finding means a regression in `tools/build-page-changelogs.mjs`, not a wording slip.

**Layout-component liveness ("mounted but empty"):** a Quartz component mounted in `quartz.layout.ts` (or rendered directly by `renderPage.tsx`) whose data source, generator output, or inline script did not come with it, so it renders empty or ships no working behaviour — with no build error. This is the recurring failure documented in [[project_quartz_layout_unships_scripts]] and findings F-05: components are collected for asset-shipping by identity the moment they occupy a layout slot, deduped globally and regardless of whether their render ever produces DOM, so "mounted but empty" throws neither a build error nor a missing-asset error. Run via `node tools/audit-layout-liveness.mjs` (`--warn-only` in prebuild while the backlog drains; `--update-baseline` blesses the accepted set + the per-component shipped-asset snapshot). The tool resolves the active component set (layout slots, `renderPage` direct-renders, transitive composition, following wrapper forwarding), classifies each headless / visible / wrapper, and checks: imported inline `scripts/*.inline` / `styles/*.scss` exist, are non-empty, and are actually wired to a lifecycle slot (`UNWIRED_ASSET` catches a present-but-tree-shaken import; `ASSET_REGRESSION` catches a component that dropped an asset it used to ship — the fully-removed-import mega-menu class); generated data inputs the component or its inline scripts read (`static/*.json` fetches, `./generated/*` modules) exist and are non-empty (`MISSING_DATA_INPUT`); link-graph consumers are not mounted against a corpus with no internal links (`EMPTY_LINK_GRAPH`); a self-gating component's slug/type allowlist matches real pages (`GATE_MATCHES_NO_PAGES` when it matches none; `STALE_GATE_ENTRY` when some allowlist entries are dead, e.g. a stale index-taxonomy allowlist copied onto the cert site); and every mounted component proves at least one liveness signal (`HEADLESS_DEAD`, `UNPROVEN_LIVENESS`). It is static and cheap (no build; corpus scans use `grep`); a render-based variant was prototyped and rejected as low-signal (synthetic props cannot distinguish "component broken" from "props too thin"), left as future work. The same file runs in the `heavymetalcertified` repo (auto-detects `content/` vs `wiki/`).

## Writing-style and consumer-language checks (language-judgment, no .mjs tool)

These categories require reading judgment rather than a structural script, so they have no `.mjs` audit. They are run as a delegated sweep (see `docs/tasks/prose-style-sweep.md`) that writes a findings report to `wiki/lint/<YYYY-MM-DD>-prose-style-sweep.md`; the report is triaged and applied by an editing-capable session, never auto-applied.

- **Em dashes in new prose:** em dashes outside direct quotes and citation text. Per [[docs/writing-style]], use commas, semicolons, periods, or parentheticals instead.
- **Inline bold for emphasis:** bolded words inside running prose. Bold is reserved for headings and explicit definition labels.
- **Bullets where prose is required:** study summaries, mechanism explanations, synthesis paragraphs, consumer risk explanations, and implications sections rendered as bullet lists instead of prose.
- **Undefined consumer qualifiers:** "small," "trace," "safe," "dangerous," "high," "low" and similar used without a quantitative anchor (dose, population, consumption frequency). Per Part 7 and [[docs/conventions]], consumer translations must specify dose, population, and frequency.

## Other delegated semantic sweeps (language-judgment, no .mjs tool)

Read-only reader sweeps that fill semantic gaps the structural audits cannot reach. Each writes a dated report to `wiki/lint/`, triaged and applied by an editing-capable session, never auto-applied.

- **Citation-support sweep** ([[docs/tasks/citation-support-sweep]]): `audit-claim-provenance.mjs` confirms a `[[sources/...]]` citation exists near every numeric claim but cannot verify the source actually states the value (its own deferred "v2"). This sweep reads each cited source page and checks it supports the number, flagging mismatch / not-in-source / wrong-source. Highest defensibility value.
- **Source-tagging fidelity sweep** ([[docs/tasks/source-tagging-fidelity-sweep]]): reads each `wiki/sources/` abstract against its `products`/`ingredients`/`matrices`/`metals`/`jurisdictions` frontmatter and flags measured analytes or matrices missing from the tags (which silently breaks routing fan-out, Part 5b), over-specific scopes, and over-tagging.
- **Prose-vs-frontmatter consistency sweep** ([[docs/tasks/prose-frontmatter-consistency-sweep]]): checks each ingredient/metal page's narrative and body table against its own `contamination_profile` numbers, flagging table≠frontmatter staleness, prose magnitude that contradicts the data, and confidence/coverage mismatches.

**Internal vocabulary in a published footer block:** an `## Update history` or `## References` block containing certification-program references (HMTc, heavymetaltested, threshold-setting, standards workbench), outside product names (Examine, microbiomemedicine, WikiBiome), agent or toolchain codenames, internal process vocabulary (placeholder, scaffold, backlog, quarantine), or file paths and code identifiers. This shipped: update-history rows once rendered raw git commit subjects, publishing lines such as "category SECTION pages + lean directory (Examine hierarchy)" and "HMTc product-category picker" onto heavymetalindex.com, which is precisely the "this wiki is the certifier's own marketing" line CLAUDE.md Part 2 exists to make unavailable. Run via `node tools/audit-page-history-leaks.mjs` (exit 1 on any finding, build-blocking in prebuild). Two term groups apply: the program-firewall group everywhere, and the toolchain group on update-history only, because agency names and build codenames collide (Codex Alimentarius Commission is a food-standards body and a correct reference entry). The descriptions themselves are derived from commit diffs rather than commit prose, so a finding means a regression in `tools/build-page-changelogs.mjs`, not a wording slip.

**Certification-framed surface on the index domain (firewall no-threshold lint):** a directory of certification-framed evidence records, or workbench derivation frontmatter (`step0_basis` and the rationale-tag vocabulary of CLAUDE.md Part 19), present on `heavymetalindex.com` rather than the certification plane. Run via `node tools/autonomy/firewall-no-threshold-lint.mjs` (exit 1 on a structural finding). **Build-blocking in `prebuild` as of 2026-07-30**, when the 351 `wiki/dossiers/` pages and both dossier generators were removed together; it had run `--warn-only` while that backlog stood. Deliberately no blanket ppb ban — regulatory caps are literature-class and belong on the index. Structural findings block; workbench-frontmatter and prose findings are advisory. Note the precedent the blocking flag exists to hold: `b6c971f01` removed the dossier pages and `af9c97a50` regenerated them straight back, because the generators stayed in `prebuild` — page removal without generator removal regresses silently, and this lint is what now catches it.

## Output and log conventions

Lint results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`. Lint entries in `log.md` use `op: lint`. Routing lint failures should block builds, not just produce reports, because routing drift propagates silently.
