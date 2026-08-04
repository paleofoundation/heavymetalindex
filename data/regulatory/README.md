# data/regulatory

Government regulatory-limit data for heavy metals in food — the tracked, reusable
layer behind the Central Library's regulatory pathway
([[tools/central-library/lib/regulatory.mjs]]) and, downstream, Method v2.0's
government-limit lookup ([[docs/standards-methodology]]). This is **regulatory
reference data (public facts), not HMTc standards** — no candidate values, no
percentile arithmetic. Those live under `data/workbench/standards/` per CLAUDE.md
Part 19.

## Files

- **`registry.json`** — the canonical catalog of the world's maximum-level
  instruments (jurisdiction × analyte × program-category), with source URLs,
  access classification, `verified` status, and `local_docs` pointers into the
  corpus. This is the input to the fetch engine and the Regulatory tab. Edit it
  through `merge-regulatory-registry.mjs` or targeted patches; it carries
  `scope_type`/`categories`/`region` that agents don't produce.

- **`extracted-limits-infant-child-2026-08-03.json`** — 141 structured limit rows
  (12 jurisdictions, 8 metals) extracted by the 2026-08-03 external gathering
  package: `{jurisdiction, instrument, metal, food_category, limit_value, unit,
  speciation, notes, source_doc, source_url}`. **UNVALIDATED** — spot-checked
  against the synthesis, not yet reconciled against the primary PDFs. Do **not**
  feed it into HMTc standards before validation. Known discrepancy to resolve:
  Codex Pb infant-formula reads 0.02 mg/kg here vs 0.01 in some sources — check
  `Codex_CXS193_2023.pdf`. No jurisdiction sets a numeric Cr-VI limit for infant
  food (Chromium rows are total-Cr; consistent with the Cr-VI-not-material
  determination for formula).

- **`synthesis-infant-child-2026-08-03.md`** — the human-readable 11-jurisdiction
  compilation with per-jurisdiction limit tables and citations. Companion to the
  JSON; same provenance and same validation caveat.

- **`source-package-manifest-2026-08-03.json`** — provenance for every document in
  the 2026-08-03 package: source URL, filename, download status.

## The document corpus

The actual regulatory PDFs/HTML are the source of truth and live in the corpus at
`raw/regulatory/` (gitignored, on the HMI-Library drive):

- `raw/regulatory/<jurisdiction>/` — documents pulled by the fetch engine.
- `raw/regulatory/_source-packages/2026-08-03-infant-child-global/` — the external
  gathering package, preserved intact (docs/, extracted text, the JSON+synthesis,
  and the `*.py` scripts that built it). `registry.json`'s `local_docs` fields
  point here.

## Before these limits feed standards

Validate `extracted-limits-*.json` row-by-row against the primary PDFs in the
package (`local_docs`), resolve unit/basis (ready-to-use vs powder), and reconcile
against the registry. Only then is it safe as Method v2.0 lookup input. See
[[project_regulatory_fetch_pathway]] in memory for the open items.
