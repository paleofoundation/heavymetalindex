# Category 16 — Dietary Supplements (Human): child-protective standard derivation

Generated 2026-08-13 from `data/evidence/regulatory_limits.csv` by `tools/standards/compile-cat16.mjs` (config `tools/standards/cat16-config.json`). This is a staff/HMTc workbench document. Per the Part 2 / Part 19 firewall the numeric standard is certification content and does not live in `wiki/` or on heavymetalindex.com.

## The decided method

For every (subcategory, analyte) the published HMTc supplement limit is the strictest sovereign **infant-and-child-food** maximum level (HMTc Category 1, Ages 0–5), read across to **all** dietary supplements regardless of adult or child labeling, as a deliberate voluntary over-compliance. It is the same logic as human-grade-for-pets (Category 17): the law that governs the product form is lax, and HMTc certifies to the stricter analog by choice.

Why the child is the binding case. Children consume adult dietary supplements — gummy multivitamins, protein and greens powders, elderberry syrups, melatonin — and the safety-relevant quantity is dose per kilogram of body weight. A serving that clears an adult intake reference delivers several times that dose per kilogram to a 15 kg child. The regulatory floor for supplements (FDA DSHEA, which sets no heavy-metal maxima; USP <2232>, whose permitted daily exposures are computed for an adult consumer; the food-supplement maximum levels several governments publish) is adult-oriented and lax. Rather than certify two tiers, HMTc holds the entire category to the level that protects the most vulnerable consumer.

Provenance discipline. Every emitted number traces to exactly one named sovereign register row (an infant-food maximum level), converted at most once and never across an incompatible basis. No occurrence statistic, no invented value, and no serving-size conversion selects a certification limit. The cell type is `read_across` with `child_protective: true` — never `gov`, because no government sets an infant-food limit for an adult supplement; HMTc adopts the child limit, and that honesty is the defensibility. Allowed provenance tags: `read_across`, `control`, `regulatory-alignment`; retired occurrence/percentile tags are absent.

## Per-analyte child-protective anchor, and the adult floor it exceeds

The anchor is uniform across all 24 subcategories (that is the point of the over-compliance); the adult floor is the laxer reference the standard clears. Concentrations are µg/kg unless a µg/day intake basis is named.

| Analyte | HMTc limit (all supplements) | Binding infant-food source | Strictest adult supplement ML (register) | USP <2232> adult PDE | Prop 65 developmental MADL | Over-compliance vs strictest adult ML |
| --- | ---: | --- | ---: | ---: | ---: | ---: |
| Pb (lead) | 10 | AU-NZ infant formula (`aunz_sch19_pb_formula_10`) | 1000 (TH); range to 10000 (SG) | 5 µg/day (≈500 µg/kg at 10 g/day) | 0.5 µg/day | 100× |
| Cd (cadmium) | 5 | EU 2023/915 infant formula (`eu2023_cd_formula_cow_liquid_5`) | 300 (TH/ASEAN/SG); range to 1000 (EU) | 5 µg/day (≈500 µg/kg) | 4.1 µg/day | 60× |
| tAs (total arsenic) | 50 | India FSSAI infant foods (`in_tas_infant-milk-substitute-and-infant-foods_50`) | 300 (ASEAN-PH); range to 5000 | — | — | 6× |
| iAs (inorganic arsenic) | 10 | EU 2023/915 infant formula (`eu2023_ias_formula_liquid_10`) | none (no sovereign supplement iAs ML) | 15 µg/day (≈1500 µg/kg) | — | — (150× below USP concentration floor) |
| tHg (total mercury) | 4 | Israel infant/toddler formula RTE (`il_fcs2016_thg_14_infant_and_toddler_formulas_ready_to_eat_4`) | 100 (GSO/IL/VN); range to 500 | 15 µg/day (≈1500 µg/kg) | — | 25× |
| Ni (nickel) | 100 | EU 2024/1987 liquid infant formula (`eu2024_ni_formula_liquid_100`) | none | none (USP sets no Ni limit) | — | total (adult framework silent) |
| Sn (tin) | 5000 | India FSSAI infant foods (`in_sn_infant-milk-substitute-and-infant-foods_5000`) | none | none | — | total; can-migration analyte, any tin on a non-canned supplement triggers a packaging investigation |
| Al (aluminium) | 500 | AU-NZ non-soy infant formula (`aunz_sch19_al_formula_nonsoy_500`) | none | none | — | total; only sovereign food Al ML in any jurisdiction |
| Cr (total chromium) | control | no infant-food total-Cr ML exists | none | none | — | mandatory surveillance; gates the Cr(VI) reflex |
| Cr-VI (hexavalent) | control | reduces to Cr(III) in a reducing matrix | none | none | 8.2 µg/day (oral) | reflex speciation on total-Cr ≥ 100; any quantifiable Cr(VI) fails |
| MeHg (methylmercury) | control | bounded by tHg | none | 2 µg/day (≈200 µg/kg) | — | lot speciation on marine-source classes; reflex otherwise |

Anchor citations:
- **USP <2232>** — USP General Chapter <2232> Elemental Contaminants in Dietary Supplements. Oral PDE in µg/day; Option 2 assumes ≤10 g/day maximum daily intake, so the concentration equivalent is PDE ÷ 0.01 kg = PDE × 100 µg/kg. USP <2232> covers only lead, cadmium, inorganic arsenic, and mercury; it sets no limit for nickel, tin, aluminium, or chromium.
- **Proposition 65 MADL** — California OEHHA Maximum Allowable Dose Levels (safe-harbour warning triggers in µg/day, not food maximum levels): lead 0.5 µg/day (reproductive/developmental), cadmium 4.1 µg/day (developmental), hexavalent chromium 8.2 µg/day. No oral safe-harbour for inorganic arsenic or nickel. Consistent with the cert briefing *Named as a Hazard, Left Unlimited*.

## Species controls

- **Total chromium** — no government sets a total-chromium maximum for any infant-and-child food, so there is no child-protective numeric anchor and none is invented. Total Cr is measured on every lot as a mandatory surveillance control and gates the Cr(VI) reflex. Cr(III) is nutritionally essential.
- **Hexavalent chromium** — a measurement artifact in a reducing supplement matrix (reduces to Cr(III), carries no stable burden); bounded by total Cr. Any total-Cr ≥ 100 µg/kg triggers Cr(VI) speciation (EPA 3060A + IC-ICP-MS / EN 15192); any quantifiable Cr(VI) fails.
- **Methylmercury** — bounded by total mercury (MeHg ≤ tHg). For classes with a credible marine methylation/biomagnification pathway (algae/seaweed, oil-based/fish-oil), MeHg is measured on every lot by species-specific speciation, not only reflexively. For all other classes total Hg is measured every lot and reflex MeHg speciation is triggered when marine-derived ingredients are present or total Hg approaches the 4 µg/kg ceiling.

## Hazard classes — the line is held

The occurrence-priority classes get the identical strict child-protective numbers; the compiler never relaxes a limit for a high-occurrence class. `hazard_note` records the reason on each:

- **Clay/mineral/earth-derived** (bentonite, diatomaceous earth, zeolite, shilajit) — the highest lead- and arsenic-occurrence class in the category; shilajit routinely carries lead and arsenic far above every child-food limit. Held at Pb 10 / iAs 10 / tAs 50 / Cd 5. This is where the over-compliance bites hardest and the adult framework is effectively silent.
- **Greens/superfood blends** — leaf, root, algae, and cereal-grass material that hyperaccumulate lead, cadmium, and inorganic arsenic. Held at full strictness; algae-containing blends also carry the marine MeHg reflex.
- **Botanicals/herbs/traditional formulas** — documented lead and arsenic source (soil uptake; some traditional preparations intentionally metal-containing). Held.
- **Algae/seaweed** — cadmium and inorganic-arsenic hyperaccumulator plus marine MeHg pathway. Held; MeHg measured every lot.
- **Protein/collagen powders** — plant-protein isolates (rice, pea) carry iAs and Cd; marine collagen carries a MeHg pathway (mercury reflex control). Held.
- **Mushroom/fungal extracts** — chaga and reishi hyperaccumulate cadmium and mercury from substrate. Held; mercury reflex control applies.

## Audit

`node tools/standards/compile-current-standards.mjs --check` (Cat 16 wired into the fixed job list, `compiler: cat16`, planned 24 rows):

```
Cat 16: 24/24 rows; 168/192 numeric total cells; 24 controlled; 0 defects
```

Every cell resolves to a type in the canonical set (`read_across`, `control`), every numeric cell carries a sovereign source identifier, every control carries an explanation and a reference method, and every species cell is bounded or controlled. The `--check` path recompiles each record into a temporary directory and compares bytes, so the committed records are proven non-stale.

## Verify

- Standards audit (`compile-current-standards.mjs --check`): 0 defects across all eight compiled categories.
- Not-material substantiation gate (`tools/evidence/audit-not-material-substantiation.mjs`): 82/82 PASS. Cat 16 adds no not-material determinations (all species cells are `control`, the maximally protective posture — a control asserts mandatory measurement and cannot understate a hazard), so it neither perturbs nor is contradicted by the occurrence pools the gate tests against.
- Method-drift lint (`tools/audit-current-hmtc-method.mjs`): government-only initial method verified; no retired-generator or public-wiki drift.
- Index firewall no-threshold lint (`tools/autonomy/firewall-no-threshold-lint.mjs --block-frontmatter`): 0 structural errors, 0 frontmatter backlog. The standard is workbench-only; no threshold surface reaches the index domain.

## Version and lineage

- **Edition** — Cat 16 v1.0 (2026-08-13). Method: HMTc Method v2.0, child-protective over-compliance form.
- **Method lineage** — forked from `compile-cat17.mjs` (Category 17 human-grade over-compliance), which was itself forked from `compile-cat1.mjs` (the government-limit-default reference compiler). The child-protective read-across is the mirror of Cat-17's human-grade read-across: Cat 17 reads a pet-feed floor up to human food; Cat 16 reads an adult-supplement floor up to infant-and-child food. Both disclose the floor and never let it select the number.
- **Anchor lineage** — the eight infant-food anchors are the strictest sovereign infant/child-food MLs on the register as of 2026-08-13 and coincide with the audited Cat-1 read-across picks (tHg takes the strictest infant value, 4, rather than Cat-1's non-formula porridge value of 8, because supplements are held to the strictest child value in the category). If a stricter infant-food ML enters the register, the anchor moves with it and this edition is superseded.
- **Governance status** — direction is decided (Karen); numeric standard compiled QC-clean; publication of cert standard pages is a downstream step gated by governance acceptance of the disclosed read-across and control determinations.
