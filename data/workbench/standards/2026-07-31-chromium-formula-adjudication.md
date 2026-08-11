---
title: "Chromium in infant formula — species arbitration and cell disposition"
type: workbench-standards-adjudication
audience: [internal]
noindex: true
rows: [infant-formula-powder-non-soy, infant-formula-powder-soy-based]
analytes: [Cr-VI, Cr-total, Cr-III]
updated: 2026-07-31
---

# Chromium in infant formula — species arbitration and cell disposition

Staff-only. Triggered by a request for a gap-free 8-analyte infant formula standard
set, where Cr was the one panel analyte with no defensible value.

## Summary

Two findings, in order of importance.

The first is that the published Cr-VI candidate for infant formula powder (non-soy)
rests on a single source whose method is superseded, and the modern reference method
finds no quantifiable Cr-VI in the same matrix. The Cr-VI cell should not publish a
literature-baseline value.

The second is that chromium in infant formula is not a literature gap. Twenty distinct
sources already in the corpus declare Cr, carry local PDFs, and are routed to infant
formula rows. All twenty sit at `source_on_page_no_structured_value` in
`data/evidence/local_reingest_queue.csv` — ingested and routed, never extracted. The
empty pool is an extraction backlog, not an absence of science.

## The Cr-VI arbitration

Two A-tier-eligible sources disagree by roughly three orders of magnitude. Part 9
requires the pass to re-read both in full and arbitrate.

| | soares2000 | saraiva2021 |
|---|---|---|
| Cite key | `soares2000-chromium-vi-powdered-milk-formulas` | `saraiva2021-chromium-speciation-milk-meat-cooking-france` |
| Year | 2000 | 2021 |
| Method | Ion exchange (Chromabond NH2) + electrothermal atomization AAS, 357.9 nm | Species-specific isotope dilution + HPLC-ICP-MS (SS-ID) |
| Detection/quantification limit | 1.8 µg/L in reconstituted milk | 0.049 µg/kg for Cr(VI) |
| Matrix | 20 commercial powdered milk products, Portugal | Infant formula milk, semi-skimmed milk, bovine meat, France |
| Cr-VI finding | Group means 24, 12, 33 ppb; maxima to 75 ppb; lower end censored at <10 ng/g | **Not quantified in any sample** |
| Cr-III finding | not reported | 2.63 ± 0.05 µg/kg (Table 2); 2.72 ± 0.06 µg/kg (Table 3, n=3) |
| Cr-total finding | not reported | 2.97 ± 0.15 µg/kg (ICP-MS) |
| Data form | Grouped means/ranges | Sample-level, replicated (n=6 / n=3) |

Three reasons the 2021 result governs.

**Method hierarchy.** SS-ID HPLC-ICP-MS is the reference approach for Cr speciation
precisely because isotope dilution corrects for species interconversion during sample
preparation. The 2000 ion-exchange/ETAAS approach has no such correction: it infers
Cr-VI from what an anion-exchange column retains, which cannot distinguish chromate
from other anionic Cr complexes formed during protein precipitation and elution.

**The 2021 paper measures the interconversion directly and it is near-total.** Spiked
Cr-VI was quantitatively reduced during sample preparation (β ≅ 100%), while no
oxidation of Cr-III occurred. A method that cannot correct for that reduction is
measuring an artifact of its own workup. Note that the Cr-VI column values in the 2021
Table 2 (0.25, 0.23, 0.27 µg/kg for infant formula milk) are **spike-recovery values**
from deliberately fortified samples, not native occurrence; the native result is the
abstract's statement that Cr-VI was not quantified in any sample.

**Sensitivity.** The 2000 method's detection limit (1.8 µg/L reconstituted) is roughly
37× coarser than the 2021 quantification limit. Values reported near a coarse detection
limit, with the lower end censored, are the classic shape of a false positive.

**The wiki's own grading already said so.** `wiki/sources/soares2000-chromium-vi-powdered-milk-formulas.md`
grades the source EF-3 (modeled or limited evidence), states it "is not sufficient by
itself for HMTc benchmark-pool math," and warns that "comparability to newer Cr
speciation methods should be reviewed before cross-source pooling." The pooling engine
admitted it as the sole contributor to a published Cr-VI candidate anyway. That is a
pool-admission defect independent of the science: an explicitly context-only source
became the entire basis for a limit.

There is also a basis error. soares2000 reconstitutes at 1 g in 15 mL, roughly 1:16 by
mass. The engine's powder↔prepared factor is 1:7. Any conversion of the soares values
into powder-as-placed basis using the standard factor is wrong by more than a factor of
two on top of the species problem.

### Independent corroboration (added 2026-08-01)

`hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france` (ANSES, Guérin; *Food Additives &
Contaminants Part B*) determined total Cr and Cr(VI) by LC-ICP-MS in **68 brands** of
milk, dairy and cereal products. Its finding: "Cr(VI) was not detected in these samples
despite the very high sensitivity of the method used. It was therefore assumed that
total chromium is only present in the Cr(III) form."

The paper goes further and names the artifact hypothesis directly. It contrasts its
result with "previous studies using off-line speciation methods that found that Cr(VI)
represented between 1.3% and 20% of total chromium in milk, bread, tea and mushroom
samples (Figueiredo et al. 2007; Ambushe et al. 2009; **Soares et al. 2010**; Mandiwana
et al. 2011)," and concludes that "the detected Cr(VI) in previous studies was probably
due to **analytical artefacts or lack of specificity**."

That is the published literature independently reaching the same conclusion about the
same method family this adjudication rejects. Scope caveat: hernandez2019 covers milk,
dairy and cereal products (38 milk/dairy + 30 cereal), not infant formula specifically,
so it is mechanism-level corroboration for the matrix rather than direct formula
occurrence evidence.

Total Cr in its milk/dairy categories, UB, µg/kg fresh weight: milk 9.5 (n=3),
ultra-fresh dairy 5.9 (n=24), cheese 25 (n=11); 58% of milk and dairy above LOQ.

### Disposition

Cr-VI is registered not-material for both infant formula powder rows. The rationale is
the speciation science, not an absence of interest: Cr-VI does not persist in this
matrix, two independent modern speciation studies fail to detect it, and the published
literature attributes the older positive findings to method artifacts. This is recorded
in `data/evidence/standards-not-material.csv`.

soares2000 should be excluded from the Cr-VI pool on method grounds. It remains a
legitimate source page and a good teaching example of why species and method
validation matter; it is not standards-grade occurrence evidence.

## The Cr-total cell — recoverable, not absent

Chromium as total Cr is the measurable species in this matrix and it is well
represented in sources already held locally. Twenty distinct sources routed to infant
formula rows declare Cr and have local PDFs, all unextracted. Those directly on the two
powder rows:

| Source | Metals declared | Local PDF |
|---|---|---|
| `saraiva2021-chromium-speciation-milk-meat-cooking-france` | Cr-VI; Cr-III; Cr-total | yes |
| `saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta` | Cr; Cr-VI | yes |
| `mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals` | Pb; Cd; Ni; Cr; Cu | yes |
| `rahati2026-infant-formula-baby-food-iran-health-risk` | Pb; Cd; tHg; Al; Cr; Co; … | yes |
| `eticha2018-infant-formula-metals-mekelle-ethiopia` | Pb; Cd; As; Cr | yes |
| `igweze2019-trace-metals-infant-formula-nigeria` | Cr; Fe; Zn; Mn | yes (26 formulae) |
| `abstract2020-content-dietary-exposure-toxic` | Pb; Cd; tAs; Cr | yes |

Further formula-relevant Cr sources currently queued against alias slugs rather than the
evidence-bearing rows: `chekri2019-french-infant-toddler-tds-trace-elements` (French
infant TDS, reports a chromium LB/UB level of 52/64 µg/kg),
`chung2021-china-infant-formula-toxic-elements`, `hopfner2025-infant-formula-dietary-exposure-germany`,
`lodico2015-infant-formula-metals`, `gredilla2022-powdered-milk-hazardous-elements`,
`sipahi2014-toxic-metals-infant-formulas-turkey`, `lutfullah2014-peshawar-dried-fluid-milk-metals`.

Text packets already exist for several of these under
`data/evidence/local_reingest_packets/infant-formula-powder-non-soy/`, so extraction
does not require re-fetching.

Known anchor value pending extraction: saraiva2021 infant formula milk, Cr-total
2.97 ± 0.15 µg/kg as-consumed (≈ 20.8 µg/kg powder-as-placed at the 1:7 factor).

### The Cr-total pool is method-split by roughly 30× (added 2026-08-01)

First extraction pass on the packets surfaces a contradiction that must be adjudicated
before this cell can publish.

| Source | Cr-total | Basis | n | Method |
|---|---|---|---|---|
| `saraiva2021` | 2.97 ± 0.15 µg/kg | as-consumed (≈20.8 powder) | 6 | SS-ID HPLC-ICP-MS; closed-vessel microwave digestion |
| `hernandez2019` (milk, not formula) | 9.5 µg/kg mean | fresh weight | 3 | LC-ICP-MS; closed-vessel microwave digestion |
| `igweze2019` | **610 ± 700 µg/kg** (milk-based mean); range 2–2080 | powder as sold | 26 | AAS after HNO₃/HClO₄ digestion **and 18 h dry-ashing to 450 °C** |

The high values are ~30× the clean-method values even after basis conversion. Two
reasons to treat `igweze2019` as a probable contamination artifact rather than a
genuine occurrence signal:

The sample preparation is the known failure mode. hernandez2019 explicitly attributes
elevated total Cr in the second French Total Diet Study to "the use of **stainless steel
equipment for the sample grinding and cooking**," and contrasts it with its own study,
which avoided that. igweze2019 ashes at 450 °C for 18 h in a muffle oven and reports
LOQ 40 µg/kg — an order of magnitude above the entire clean-method occurrence range,
meaning most true values would be unquantifiable by that method.

The framing is nutritional, not contaminant. igweze2019 measures Cr against an **RDA**
and treats it as an essential trace element alongside Fe, Zn, Mn and Co; its headline
finding is that Cr intake *exceeded* the RDA. That is a fortification/nutrition paper,
not a contamination survey.

Do not pool these together at face value. The cell needs an outlier adjudication in the
sense of [[project_standards_pool_completeness]]: verify each high source, then decide
admission. A pooled P97 spanning both method families would be an artifact of the split,
not a percentile of anything real.

Note on essentiality, since it will come up: EFSA (2014b) concluded there is no
convincing evidence of beneficial effects from chromium intake in healthy subjects and
that setting an adequate intake is not appropriate. So the "Cr is a deliberately added
nutrient, therefore not a contaminant" argument — the shape that closed `salt, Al` —
does **not** transfer cleanly to the EU context and should not be used as the rationale
here. Cr(III) does have low oral toxicity and poor absorption (0.4–2.5%), which is a
separate and better-supported point.

## Regulatory status

No chromium maximum level for infant formula is present in the loaded registry
(`data/evidence/regulatory_limits.csv`, 164 rows). Metals carrying an infant-formula ML
in the registry are Al, Cd, Ni, Pb, Sn, and iAs only. EU 2023/915, Codex, FDA, and
AU/NZ Schedule 19 set no Cr limit for this matrix.

**China GB 2762-2022 does set a total-Cr ML, and it is not loaded.**
`wiki/sources/usda-fas2023-china-gb-2762-2022-translation.md` reproduces Table 7
(section 4.7, testing per GB 5009.123), which is explicitly total Cr and not Cr-VI:

| GB 2762 food category | Cr limit |
|---|---|
| Milk powder and modified milk powder | 2.0 mg/kg = 2000 µg/kg |
| Raw, pasteurized, sterilized, modified, fermented milk | 0.3 mg/kg = 300 µg/kg |
| Grains; milled grain products | 1.0 mg/kg |

Two caveats before this is mapped as a cap.

The category mapping is a judgment call. GB 2762 Table 7 does not name infant formula
as its own row; "milk powder and modified milk powder" is the nearest applicable
category, and Chinese food-category taxonomy treats infant formula food as a distinct
class elsewhere in the standard (Table 8 carries explicit infant/young-child formula
rows for nitrite/nitrate). The mapping is plausible but should be confirmed against
GB 2762 Appendix A before the cap is loaded.

The basis factor differs from ours. The same source page notes GB 2762 uses an 8:1
liquid:powder conversion ratio, where the engine's factor is 1:7. Any conversion of a
GB 2762 value into a prepared basis must use the standard's own ratio.

Practically, the cap does not change the answer. The available literature anchor
(saraiva2021, 2.97 µg/kg Cr-total as-consumed ≈ 21 µg/kg powder-as-placed) sits roughly
two orders of magnitude below the 2000 µg/kg milk-powder ML. Under
`min(percentile, cap)` the literature binds and the rationale tag is
`literature-baseline`. The cap's value is that it closes the QC gate's C1b
cap-completeness check and removes "no mapped regulatory ceiling" as a defensibility
attack; it does not rescue the cell. The extraction is still the gating work.

## What this means for the 8-analyte set

The panel in `data/taxonomy/hmtc-v2.json` is Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al.

- Cr-VI: closed as not-material, on the arbitration above. No jurisdiction regulates
  Cr-VI in this matrix; China GB 2762 Table 7 is explicitly total Cr.
- Cr-total: blocked on extraction, not on evidence. Roughly 7 directly-routed sources
  plus 7 alias-routed sources are available locally.

The set remains held pending the Cr-total extraction pass, per the decision to recover
evidence before publishing. Publishing a Cr value today would mean either republishing
the soares2000 artifact or inventing an LOQ-anchored policy number while real evidence
sat unextracted on disk.
