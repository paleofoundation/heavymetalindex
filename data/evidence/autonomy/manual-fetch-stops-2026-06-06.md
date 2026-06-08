# Manual-fetch stops — 2026-06-06

## STOP: duplicate-of-existing-page

- **PDF:** `raw/Manual Fetch Discovery/song2017-dietary-cadmium-exposure-assessment.pdf`
- **Folder:** Manual Fetch Discovery
- **Suggested handle:** MFD_song2017-dietary-cadmium-exposure-assessment
- **Existing page:** `wiki/sources/song2017-china-dietary-cadmium-exposure.md`
- **DOI match:** 10.1371/journal.pone.0177978 (Song et al. 2017, PLOS ONE 12(5):e0177978 — "Dietary cadmium exposure assessment among the Chinese population")

### Why stopped

`/discover` skill auto-fetched the same paper that was already ingested via the Kimi condiments-folder corruption-recovery flow (raw_handle `KADC_12-china-dietary-cadmium-exposure-2017`, ingested 2026-06-02 commit `1d3a63a`, audited-promote 2026-06-02 commit `9426986`). The DOI grep against `wiki/sources/` returns one clean hit.

The existing page is:

- Post-schema (`updated: 2026-06-02`, after the 2026-05-14 cutoff)
- Already audited PROMOTE via fresh-context Agent subagent
- Comprehensive: full Table 1 (32 food groups), Table 2 (6 age-sex strata), Table 3 (north/south), Fig 2 contributions, complete methods + speciation + QC + uncertainties sections, 20 umbrella-ingredient slugs covering paper food-group granularity
- Brand-firewall clean (source names no brand)
- Part 2 firewall clean (PTMI reported as JECFA reference, not wiki-endorsed threshold)

### Routing-audit status

- `routing_unresolved.csv`: not present (clean).
- `routing_malformed.csv`: present at **advisory severity only** (`missing_blocking` empty, `missing_strict` empty, `missing_advisory: products`). The `products: []` is intentionally correct — this is a national dietary exposure assessment, not a packaged-product study — and is documented in the page's verification notes. The advisory row is expected, not a defect.

Per skill v2.0 criterion 1, a PDF is "next" only if it has no existing page, or the page is pre-2026-05-14, or it is in malformed at a blocking level. None of those apply here, so no merge-enhance is warranted.

### Action

- No new ingest commit.
- No edits to the existing wiki source page.
- No edits to routing-audit artifacts.
- PDF left in place; recommend the orchestrator/daemon treat this Manual Fetch Discovery file as a duplicate against the existing `song2017-china-dietary-cadmium-exposure` cite-key so it is not re-offered.

### Final stdout line

```
STOP: duplicate-of-existing-page (song2017-china-dietary-cadmium-exposure, DOI 10.1371/journal.pone.0177978)
```
