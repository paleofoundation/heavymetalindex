---
title: "HMTc standards set — infant formula powder, 8-analyte panel"
type: workbench-standards-set
audience: [internal]
noindex: true
rows: [infant-formula-powder-non-soy, infant-formula-powder-soy-based]
panel: [Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]
updated: 2026-08-01
---

# HMTc standards set — infant formula powder, 8-analyte panel

Staff-only. Percentile arithmetic and threshold values do not appear on
heavymetalindex.com (Part 19 / Part 2 firewall).

Panel is `panel_metals` from `data/taxonomy/hmtc-v2.json`: Pb, iAs, Hg, Cd, Cr, Ni, Sn,
Al. Note this is the 8-metal panel, not the 10-analyte split the Program Manual renders
(which separates tAs/iAs and tHg/MeHg). Both rows publish in powder-as-placed-on-market
basis.

## Infant formula, powder (non-soy)

Role: clean benchmark (within-pair). Every panel cell carries a determination.

| Panel | Species | HMTc value | Rationale | Sources | Pooled n | State |
|---|---|---|---:|---:|---:|---|
| Pb | Pb | 20 ppb | regulatory-alignment (EU 2023/915 powder) | 7 | 477 | firm |
| iAs | iAs | 10.9 ppb | literature-baseline | 2 | 54 | firm |
| Hg | tHg | 1.50 ppb | literature-baseline | 2 | 290 | firm |
| Cd | Cd | 8.03 ppb | literature-baseline | 8 | 489 | firm |
| Cr | Cr-VI | no limit | **not material** | — | — | resolved |
| Ni | Ni | 250 ppb | regulatory-alignment (EU 2024/1987 powder) | 3 | 123 | firm |
| Sn | Sn | 76.2 ppb | literature-baseline | 2 | 61 | provisional |
| Al | Al | 3500 ppb | regulatory-alignment (AU/NZ Sch 19, converted) | 8 | 327 | firm |

Six firm, one resolved as not-material, one provisional. No cell is undetermined.

## Infant formula, powder (soy-based)

Role: independent (clean by default). Every panel cell carries a determination, but the
pools are materially thinner and most cells must publish provisional.

| Panel | Species | HMTc value | Rationale | Sources | Pooled n | State |
|---|---|---|---:|---:|---:|---|
| Pb | Pb | 20 ppb | regulatory-alignment | 5 | 79 | provisional |
| iAs | iAs | 10.5 ppb | literature-baseline | 2 | 7 | provisional |
| Hg | tHg | 0.79 ppb | literature-baseline | 2 | 48 | provisional |
| Cd | Cd | 20 ppb | regulatory-alignment (EU soy powder) | 6 | 124 | firm |
| Cr | Cr-VI | no limit | **not material** | — | — | resolved |
| Ni | Ni | 400 ppb | regulatory-alignment (EU soy powder) | 2 | 2 | provisional |
| Sn | Sn | 24.6 ppb | literature-baseline | 1 | 10 | provisional |
| Al | Al | 7000 ppb | regulatory-alignment (AU/NZ Sch 19, converted) | 5 | 72 | provisional |

The four regulatory-alignment cells are defensible at any pool depth because the legal
ceiling binds, not the percentile. The provisional flag on them is an n-floor artifact of
the gate rather than a statement that the value is wrong.

## Why "provisional" is not a gap

The QC gate's C11a and C11b checks do not say a value is incorrect. They say a cell may
not render *firm* at a given pool depth: C11a where the target percentile sits beyond the
pool's resolution, C11b where n is below the 99 needed for a 95% bound. A provisional
value with a stated reason is a publishable determination. A gap is a cell with no
determination at all, and there are none here.

Two cells outside the 8-panel remain open on the non-soy row and are worth naming because
the Manual renders them: tAs publishes provisional pending the demir2023 market-
stratification ruling (below), and MeHg is still generated from zero sources.

## Chromium

Cr-VI is registered not-material for both rows. Two independent modern speciation studies
fail to detect it in this matrix — saraiva2021 (species-specific isotope dilution
HPLC-ICP-MS, LOQ 0.049 ppb, not quantified in any infant formula sample) and hernandez2019
(ANSES, 68 brands, LC-ICP-MS, not detected) — and hernandez2019 explicitly attributes
prior positive findings, naming the Soares work this pool relied on, to "analytical
artefacts or lack of specificity." Full arbitration in
[[2026-07-31-chromium-formula-adjudication]].

Total Cr is a separate question and is not published here. Its pool is method-split by
roughly 30× between closed-vessel ICP-MS and dry-ashing/AAS methods, and needs outlier
adjudication before it can carry a value. No jurisdiction except China regulates Cr in
this matrix, and the China ML (2000 ppb, milk powder) sits about two orders of magnitude
above the clean-method literature.

## Open decisions for Karen

**demir2023 market stratification (blocks firm tAs on the non-soy row).** Its tAs mean of
529 ppb is a verified-correct transcription and roughly 20× every other source in the
pool. It is currently excluded, so the published 24.0 ppb is demir-free. I did not clear
this: excluding a correctly transcribed high value tightens the standard by hiding real
market variation, and including it imports a single non-target market. That is a
stratification policy call, not an arithmetic one. Note the sibling tHg register entry
*was* cleared — its 8600 ppb was a 1000× typo for 8.6 ppb.

**Soy-row pool depth.** Seven of eight cells publish provisional on n. The library holds
45 sources routed to these rows with local PDFs, none yet extracted; filling them is the
path from provisional to firm.

**China GB 2762 category fit.** The tAs cap (500 ppb) and the unmapped Cr cap (2000 ppb)
both rest on reading "milk powder and modified milk powder" as covering infant formula.
Confirm against GB 2762 Appendix A. Neither binds today.

**Manual defects, unrelated to this set.** The Part 4 chapters still justify P97 with an
asserted analyte correlation of ~0.6 that the repo's own adversarial audit calls
"asserted but not derived," and still emit a MeHg row at three-decimal precision from
zero sources.

## Provenance

Pool values from `data/evidence/hmtc_aggregate_distributions.csv`; verdicts from
`data/evidence/standards-qc-gate-report.csv`. Both regenerated 2026-08-01 after the
decontamination in commit `accfa3a74`. Reproduce with:

```
node tools/evidence/build-standards-gap-report.mjs
node tools/evidence/build-hmtc-aggregate-distributions.mjs
node tools/evidence/build-standards-qc-gate.mjs
```
