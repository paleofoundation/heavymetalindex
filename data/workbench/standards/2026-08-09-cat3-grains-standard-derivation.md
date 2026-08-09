# Category 3 — Grains, Cereals, and Rice Products: HMTc standard derivation

**Date:** 2026-08-09
**Method:** HMTc Method v2.0 — government-limit default (CLAUDE.md Part 19).
**Taxonomy:** `data/taxonomy/hmtc-v2.json` category `n=3`, 12 subcategories.
**Engine:** `tools/standards/compile-cat1.mjs --config=tools/standards/cat3-config.json --outdir=data/workbench/standards/cat3-compiled`
**Staff/HMTc content — not a public wiki page** (Part 2 / Part 19 firewall). The public product-category pages render only the literature-native view; all percentile/clean-dirty/pooling arithmetic and the numeric standard live here in `data/workbench/standards/`.

---

## 1. What was built

One deterministic government-limit standard per subcategory (12 JSON records in `cat3-compiled/`), each cell tracing to a named row in `data/evidence/regulatory_limits.csv`, converted at most once to the subcategory's native basis, strictest across jurisdictions. Human-readable tables: `cat3-standards-tables.md` (regenerate with `tools/standards/render-cat3-standards-tables.mjs`).

Binding matrix (ppb µg/kg; **bold** = government ML, n/m = registered not-material or confirmed no-ML):

| Subcategory | Role | Pb | iAs | tHg | Cd | Cr | Ni | Sn | Al |
|---|---|---|---|---|---|---|---|---|---|
| flour-non-rice | clean | 100 | n/m | 30 | 100 | n/m | 800 | n/m | n/m |
| bread-and-baked-goods | clean | 100 | n/m | 30 | 100 | n/m | 800 | n/m | n/m |
| pasta-wheat-based | clean | 100 | n/m | 30 | 100 | n/m | 800 | n/m | n/m |
| breakfast-cereal-non-rice | clean | 100 | n/m | 30 | 100 | n/m | 800 | n/m | n/m |
| other-grain-products | clean | 100 | n/m | 30 | 50 | n/m | 800 | n/m | n/m |
| grain-based-snacks | clean | 100 | n/m | 30 | 100 | n/m | 800 | n/m | n/m |
| rice-bulk-grain | dirty | 200 | 150 | 30 | 100 | n/m | 1500 | n/m | n/m |
| pasta-rice-based | dirty | 200 | 250 | 30 | 100 | n/m | 1500 | n/m | n/m |
| rice-noodles | dirty | 200 | 250 | 30 | 100 | n/m | 1500 | n/m | n/m |
| breakfast-cereal-rice-based | dirty | 200 | 300 | 30 | 100 | n/m | 1500 | n/m | n/m |
| rice-snacks-crackers | dirty | 200 | 300 | 30 | 100 | n/m | 1500 | n/m | n/m |
| rice-beverages-rice-milk | dirty | n/m | 30 | n/m | n/m | n/m | n/m | n/m | n/m |

## 2. The clean/dirty structure IS the government limits

The taxonomy maintains rice and non-rice subcategories as explicit pairs "to support the Clean Counterpart Cap," because "rice is a known contamination platform for iAs, Cd, and Pb. Non-rice grains are the clean counterpart." Under Method v2.0 that structure does not need to be imposed by an occurrence-pooling clean/dirty split — **it falls straight out of the government limits themselves:**

- **Inorganic arsenic is the differentiator.** Every rice subcategory carries a binding iAs ML (EU 2015/1006, now consolidated in EU 2023/915: non-parboiled milled rice 150, parboiled/husked/rice-flour 250, rice products/waffles/cakes 300, non-alcoholic rice drinks 30; FDA 100 ppb action level applies to *infant* rice cereal, which routes to Category 1; Codex CXS 193 mirrors the GSO/polished-rice values). No government sets an iAs ML for any non-rice grain, because non-rice cereals do not hyperaccumulate arsenic — so iAs resolves **not-material** on all six non-rice subcategories. The rice-based vs non-rice split therefore reproduces exactly as: iAs binding on rice, not-material on non-rice.
- **iAs is dose-scaled by product form** within the rice block: milled white rice 150 < rice flour / parboiled / husked (rice pasta, rice noodles) 250 < rice products / cakes / flakes (rice snacks, rice breakfast cereal) 300 > rice drink 30 (dilution). This is the EU regulation's own product-form split, adopted face value.
- **Cd and Pb** (the other Tier-1 grain concerns) are set by government cereal MLs across the board (see §4).

## 3. Occurrence-pooling determination (why pooling is NOT invoked here)

Method v2.0 retains occurrence pooling *selectively* — for Tier-1 toxics where clean producers demonstrably beat the government floor, and for cells no government regulates. **Neither condition is met defensibly for Category 3, so pooling is not invoked and the government MLs are the standard.** Two reasons:

1. **Every material Tier-1 grain cell has a government ML.** iAs (rice), Cd, and Pb are all governed by named government maximum levels that this build resolves cleanly. There is no no-ML Tier-1 cell that would *require* an occurrence value.
2. **The rice-occurrence pool is known-contaminated.** The pre-existing pooled rows for Category 3 in `data/evidence/hmtc_aggregate_distributions.csv` are visibly poisoned: `rice-bulk-grain` pools to tHg **2337 ppb** (mercury in rice is characteristically < 5 ppb), Cd **297 ppb** (3× the government cap), and `rice-snacks-crackers` pools to iAs **0.042 ppb** from a single source (extrapolation past the pool's resolution). These are the censored-zero / degenerate-upper-tail / ×7-basis / unit-mis-scale artifacts documented across prior audits. A pooled percentile built on this data would understate or wildly overstate contamination; a value that moves when the pool is de-poisoned means the pool was incomplete. The defensible anchor is the government ML.

The clean-producers-beat-the-floor refinement is therefore deferred until a de-poisoned, target-market-stratified rice-occurrence pool exists. When that pool is recovered, the Tier-1 rice cells (iAs, Cd, Pb) can be revisited as `min(occurrence percentile, government ML)` per §Method-v2.0; until then the government ML governs. This determination is recorded so a later session does not silently re-introduce the poisoned pool.

### Consequence: the pooled `hmtc_aggregate_distributions.csv` Cat-3 rows must be superseded

The pooled rows are what the public product-category table generator (`build-category-standards-tables.mjs`) and the Publication QC Gate read. For Category 3 they are partly `regulatory-alignment` (candidate = cap, coincidentally matching this build in several cells) and partly poisoned `literature-baseline` (the tHg/Cd/iAs artifacts above). Notably the pooling engine **failed to map the regulatory caps that this government-limit build found** (the poisoned rows show "NO mapped cap" for cells whose caps are Cd 100, Pb 200, iAs 150, tHg 30, Ni 1500). This government-limit standard supersedes those rows; reconciling the pooled pipeline is logged as an outstanding item, not fixed here.

## 4. Analyte-by-analyte basis

- **iAs** — see §2. All values EU 2023/915, adopted at face value (as-sold dry, except rice drink as-consumed). Rice-bulk adopts the strictest of EU's own milled-150 / husked-250 split (150).
- **Cd** — non-rice cereals: EU general-cereals 100 (barley/rye 50, the strictest EU cereal-Cd, binds `other-grain-products`). Rice: **uniformly 100 (FSANZ/AU-NZ rice)** across the whole rice platform — the strictest rice-inclusive credible-regulator Cd. (This was resolved from an earlier bulk-100/products-150 split; see §5 item 3 and §6.) Reached via a per-analyte scope override (Cd cell only) so FSANZ's bare-"rice" ML binds without perturbing the product-form iAs cells.
- **Pb** — non-rice: the strictest cited value is Cuba NC 877:2012 processed-cereals/wheat-flour 100 (see §5 provenance caveat); the broad government consensus is 200 (AU-NZ, GSO, Codex-aligned, MERCOSUR, and ~10 others). Rice: 200 (rice-and-derivatives, MERCOSUR/PY). EU sets no general (non-infant) cereal Pb ML (dropped in the 2021 revision), so the Pb floor comes from the non-EU consensus.
- **tHg** — Israel FCS-2016 cereals-and-cereal-products (incl. wheat and rice) 30 ppb (0.03 mg/kg), the strictest *contaminant* mercury ML for cereals. **The EU "cereals including rice" mercury 10 ppb value is a pesticide-residue MRL (Reg 2018/73 amending 396/2005), a categorically different legal instrument, and is correctly excluded** by a new systemic `PESTICIDE` guard added to `compile-cat1.mjs` (matches exactly one register row today). Mercury is toxicologically immaterial in grains; 30 ppb is far above typical occurrence and is carried as the honest government floor.
- **Ni** — EU 2024/1987 (in force for cereals from 2026-07-01): common cereals 800 (binds non-rice and the barley member of other-grain), durum/rice 1500 (binds rice products), husked rice 2000, pseudocereals/millet 3000, oats 5000. See §5 for the mixed-subcategory ceiling question.
- **Cr** — registered not-material (reflex speciation): no government sets a total-Cr or Cr(VI) ML for grains; cereal-matrix Cr is Cr(III); firm control is reflex Cr(VI) speciation on any total-Cr ≥ 100 ppb.
- **Sn** — registered not-material: every government tin ML is scoped to canned/tin-coated product; canned grain products route to Category 7 and carry the tin flag there.
- **Al** — registered confirmed no-ML: no government sets an aluminium ML for any grain product; in leavened/baked products Al is permitted-additive-derived (regulated by additive ADI, not a contaminant ML).

## 5. Open judgment calls (adjudicated in the audit / for Karen)

1. **CU Pb 100 vs 200 consensus (non-rice Pb).** The strictest cited non-rice Pb is Cuba NC 877:2012 (100 ppb), but its register note flags that the value is a *secondary citation* (NC 877:2012 quotes NC 493:2008; the full NC 493 table is not in the source PDF). The broad primary-regulator consensus is 200. Decision needed: keep 100 (strictest floor) or fall back to 200 pending primary verification. *(See audit adjudication, §6.)*
2. **PA Cd cereals 10 (suspected units artifact).** Panama Decreto 467/2007 sets Cd for "cereals, legumes, and leguminous vegetables" at 10 ppb — 10× stricter than the universal 100 ppb cereal-Cd floor, while the *same decree* sets Pb cereals at the 200 consensus. It is currently kept out of the Cat-3 standard by a legume scope filter (legumes are a distinct food group), but it should be verified against the Panama source and, if a confirmed transcription/units artifact, quarantined in the register (Guyana-seafood precedent). *(See audit adjudication, §6.)*
3. **Rice-platform Cd — RESOLVED to 100.** Initially bulk raw rice bound FSANZ rice 100 while processed rice products bound EU rice 150, because the subcategory-wide scope could not reach FSANZ's bare-"rice" row for products without dragging raw-rice iAs into the product cells. The completeness oracle (§6) flagged this as a genuine "strictest credible government ML" miss (150 bound where a rice-inclusive 100 exists). Fixed by adding a small, general **per-analyte scope override** to `compile-cat1.mjs`: because rows are filtered by analyte species first, adding `\brice\b` to the *Cd cell only* reaches FSANZ rice Cd 100 and physically cannot pull the same-scope-text iAs rows (different species). The whole rice platform now binds Cd 100 uniformly, method-compliant and consistent (a processed rice product is not held looser than the rice it is made from).
4. **Ni mixed subcategory `other-grain-products`.** The bundle (oat/millet/quinoa/barley) spans EU Ni MLs from 800 (barley, via general cereals) to 3000 (millet/quinoa) to 5000 (oats). The single-value ceiling adopts the strictest constituent, 800, which over-tightens oat/millet/quinoa products (ratchet direction, disclosed). Same pattern for Cd (barley/rye 50 binds the bundle). Alternative: split the subcategory. Left as a taxonomy-refinement flag.

## 6. Verification

### 6a. Deterministic completeness oracle (independent of the config)

`tools/standards/cat3-completeness-oracle.mjs` re-derives, for every (subcategory, analyte) cell, the strictest government ML using a **deliberately over-permissive** product matcher and only the hard method-mandated exclusions (draft, feed, pesticide, quarantine, canned-for-non-canned, non-food, off-group, legume, infant [multilingual], and "cereals-except-rice" clause parsing). It does **not** trust the config's scope regexes — it is an independent oracle. A cell where the oracle's strictest is stricter than the bound value = a possible scope-regex gap.

Result: the oracle found **one genuine miss** — rice-product Cd bound at 150 when the rice-inclusive FSANZ 100 exists (fixed, §5.3). After the fix, the only residual flags are the four rice-product iAs cells where EU non-parboiled-milled-rice 150 is stricter than the bound 250/300. **These are correct, not misses:** EU 2023/915 splits rice iAs by product form (milled 150 → parboiled/husked/flour 250 → products/cakes/flakes 300) because processing concentrates arsenic in the bran; Method v2.0 adopts the law's own formulation split, so a rice cake maps to the rice-products ML (300), not to a different product form's milled-rice ML (150). The oracle's naive strictest-across-forms is the wrong lens for a form-split regulation; the config is correct.

The oracle also independently **corroborated** several anchors against non-English government rows it does not otherwise use: Switzerland "Reis, geschliffen, nicht parboiled" (white rice) iAs 150 matches the EU milled-rice 150; CH "Reis, parboiled oder geschält" 250 matches the EU flour/parboiled 250; MA "Galettes de riz" 300 matches the EU rice-products 300. Every stricter non-English row (MA/CH Cd 40, iAs 100, Pb 20/50; CH Ni 3000) is infant-scoped and correctly routes to Category 1.

### 6b. Adversarial audit adjudication

*(Filled after the LLM adversarial audit returns — it independently re-checks scope-fit, verifies the CU Pb 100 and PA Cd 10 primary sources by web fetch, and cross-checks basis/species. Findings and any resulting fixes recorded here.)*

## 7. Provenance & reproducibility

- Config: `tools/standards/cat3-config.json` (scope regexes use product-headed exclusion tokens; see the file's `_scope_note` for why bare `rice`/`oil`/`durum`/`except`/`excluding` tokens are avoided).
- Compiler hardening this build: added a systemic `PESTICIDE` status guard to `compile-cat1.mjs` (drops pesticide-residue MRLs from contaminant strictest-selection, exactly as `FEED` and `QUARANTINE` do). Regression-checked byte-identical against the shipped Cat-1 and Cat-6 compiled outputs.
- Roles: `data/workbench/standards/subcategory-roles.json` (12 Cat-3 entries; percentiles/stratify documentary since pooling is not invoked).
- Determinations: `data/evidence/standards-not-material.csv` (+32 rows), `data/evidence/standards-no-ml-confirmed.csv` (+14 rows).
- Every binding value reproduces from `regulatory_limits.csv` by re-running the compiler; every cell's `binding_id` / `source_id` names its register row.
