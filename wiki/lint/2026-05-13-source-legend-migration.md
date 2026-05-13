---
type: lint
op: lint
date: 2026-05-13
scope: source-legend-migration
status: deferred
priority: low
---

# Source legend migration follow-up — 2026-05-13

The Tier 1 source-legend generator (`tools/evidence/build-source-legend.mjs`) skipped 3 pages because they already carry hand-curated `## Sources` content that should not be clobbered by auto-generation. These pages need manual migration into the marker-bounded format used elsewhere.

## Workflow

For each flagged page:

1. Compare the existing hand-curated `## Sources` table with what the generator would produce (run `node tools/evidence/build-source-legend.mjs --dry-run --only <kind>` to preview).
2. Decide which "Used on this page for" descriptions in the hand-curated table to preserve — those are the higher-quality version of what Tier 2 will eventually generate.
3. Wrap the hand-curated table in `<!-- BEGIN: hmi-source-legend -->` and `<!-- END: hmi-source-legend -->` markers.
4. Re-run the generator — it will see the markers and respect the hand-curated content.

## Flagged pages (3)

- `wiki/metals/cadmium.md` — existing content snippet: "- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opi"...
- `wiki/metals/lead.md` — existing content snippet: "- [[sources/atsdr-lead-toxprofile-2020|ATSDR 2020]] — ATSDR, August 2020. Toxicological Profile for Lead.\n- [[sources/cd"...
- `wiki/metals/tin.md` — existing content snippet: "- [[sources/atsdr2005-tin-toxicological-profile|ATSDR 2005]] — Comprehensive ATSDR Toxicological Profile for Tin and Tin"...