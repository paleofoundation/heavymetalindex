---
type: doc
purpose: Manual-fetch ingest stops for 2026-06-07
updated: 2026-06-07
---

# Manual-fetch ingest stops — 2026-06-07

## STOP: jakubczyk2021-fluoride-trace-elements-kombucha (out of scope)

- **PDF:** `raw/Manual Fetch Discovery/jakubczyk2021-fluoride-trace-elements-kombucha.pdf`
- **DOI:** 10.1007/s12011-020-02445-9
- **Title:** Evaluation of Fluoride and Selected Chemical Parameters in Kombucha Derived from White, Green, Black and Red Tea
- **Journal:** Biological Trace Element Research (2021) 199:3547–3552
- **Folder:** Manual Fetch Discovery (auto-fetched by `discover` skill)

### Why stop

The paper measures **only fluoride (F⁻)** and the chemical parameters pH, sucrose, acetic acid, and ethanol. It does not measure any HMI-scoped analyte:

- HMI metals taxonomy (`wiki/metals/`): Al, Pb, Cd, As, Hg, Ni, Cr, Cr-VI, Sn, Sb, Be, Ba, Co, Cu, Fe, Au, Li, Mg, Mn, Mo, Pd, Pt, Ag, Te, Tl, Ti, U, V, Zn, Cs — **fluoride is not in this list**.
- HMTc 10-analyte cert vocabulary: Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn — **fluoride not on this list either**.
- No measurements of any of the above in the paper. Results tables (Tables 1 and 2) report only F⁻ concentration and the four chemical parameters.

The filename string "trace-elements" is misleading; it tracks the journal title (*Biological Trace Element Research*), not the analyte scope. The paper's own title and Methods make clear that fluoride is the only inorganic species quantified.

### Precedent

`wiki/sources/knappett2022-arsenic-fluoride-aquifer-mexico.md` (FM_9250112) co-reports arsenic and fluoride but was ingested with `metals: [tAs]` only; fluoride appears in body prose for context but is not routed as a metal. That precedent confirms fluoride alone does not constitute an HMI scope. A fluoride-only paper would produce `metals: []`, which the routing audit treats as a malformed source.

### Likely root cause

The `discover` skill is topic-driven and pulled this paper on a kombucha topic run (`b9f7cb7 discover: kombucha-heavy-metals topic run 2026-06-07`). Keyword overlap on "trace elements" / "kombucha" surfaced it as a candidate, but the abstract-only triage did not catch that the only quantified analyte is fluoride. This is an expected discover-time false positive, not an ingest-pipeline failure.

### Recommended disposition for Karen

Options for the PDF in `raw/Manual Fetch Discovery/`:

1. **Move to `raw/Manual Fetch Discovery/_out_of_scope/`** and drop. Cleanest — fluoride is not in HMI scope, no current downstream use.
2. **Keep on disk, mark as ingested-skipped.** Useful if Karen wants the discover skill's dedupe to know the PDF was seen and rejected on scope grounds (so a future re-discovery does not re-fetch).
3. **Expand HMI scope to include fluoride** as a parallel-tracked analyte (separate metals/fluoride.md page, routing extensions, taxonomy snapshot edit). This is a substantive schema change requiring a Step 0 Lock for the fluoride analyte itself. Argument for: fluoride co-occurrence with iAs in groundwater is a documented public-health pattern; HMI already has knappett2022 sitting on the boundary. Argument against: fluoride toxicology is a separate field, and HMI's commercial frame (HMT&C certification) does not currently certify on fluoride.

Claude's recommendation: option 1. The third option is real but a separate strategic decision Karen should make deliberately, not by accreting fluoride papers through routine ingest.

### Files changed

None. No wiki source page written, no commit made, no routing audit run, no audit subagent spawned, no audit-queue entry. Folder PDF untouched.

STOP: jakubczyk2021-fluoride-trace-elements-kombucha out-of-scope (fluoride-only, no HMI analyte)
