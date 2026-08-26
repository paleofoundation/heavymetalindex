# Portal testing-scope engine — correctness audit (2026-08-26)

Kasandrinos (olive oil) is the **seeded test subject / canary** for the heavymetalcertified.com portal. Its scope panel, LOQ, cost, and pass/fail all come from **generic engine code that runs for every (brand, product, market)**. A failure for the Kasandrinos entry is a latent error for all entries. This audit (9-agent workflow, `wf_25bc5e0d-f6c`) mapped every per-entry code path, traced four archetype entries, and synthesized the defects + the fix. Two of the gravest findings were verified directly against the code.

## The safety blocker (verified against code)

**The portal can certify product above the strict headline the mark promises, by market selection, with no backstop.**

1. `resolve-standard.ts` `marketLimit()` returns the **selected market's local ML** (`per_market[market]`) as the pass/fail ceiling, not the strictest-floor headline. For a looser market this loosens the certification limit — e.g. infant-formula-powder Pb **20 → 200 (India, 10×)**; canned-seafood Cd **50 → 1000 (Thailand)**. Measured across the vendored finder: **145+ Tier-1 (product, analyte) cells** loosen this way.
2. The government **hard-stop is dead in production**: `compute-readiness.ts` fires it only against `input.governmentLimits`, but the one real caller (`assess-brand.ts:263`) never passes it, so `hardStop` is always `false`. (The doc comment claims an HMTc-limit fallback the code does not implement.)

Net: a brand in a looser market certifies to that market's law, and nothing catches it. This contradicts the "strictest-existing-floor" promise the whole program rests on. **Requires a policy confirmation (strictest-floor-everywhere vs per-market certification) before the fix.**

## Ranked defects

| # | Severity | Defect | Affects |
|---|---|---|---|
| 1 | blocker | Market-loosening pass/fail + dead hard-stop (above) | Every (product, market) where the selected market is looser; 145+ Tier-1 cells |
| 2 | blocker | Engine never reads the obligation source of truth — no module references `required-analytes.json` or the compiled standards; it reads only the folded, stale cert finder | Every entry: wrong required panel + wrong per-lot obligation |
| 3 | blocker | Basis-blind method — `methodFor()` orders content acid-digest ICP-MS for migration-basis (cookware/packaging, Cat-9/21/23) and pharmacopeial (Cat-26) products; violates the `basis_guard` ("never acid-digest a pan") | All contact-material + pharmacopeial SKUs |
| 4 | serious | Null control cells treated as primary pass/fail gaps → a clean cosmetic/cookware can **never** certify (permanent `insufficient_data`), and a real detected value is discarded instead of failing | Every control-cell category (cosmetics, cookware, contact) |
| 5 | serious | Cost double-surface — application quote bills all 10 `PANEL_CODES` (over-bills ~40%; Kasandrinos $2,159.96 vs correct), funds a real prepaid deposit, omits total Cr, bills speciation the ruling makes reflex; persisted `lot_test_schedule` is wrong | Every submitted product |
| 6 | serious | `Cr-VI` limit hardcoded to the string `"regulatory only"`, discarding the resolved firm value; can't express `not_applicable` | Every product's scope PDF |
| 7 | serious | Stale one-way vendored projection (`source 2.2, 2026-06-09`), sync ships stale silently (exit 0), no staleness signal; pre-dates the 2026-08-25 completion + this ruling | Whole app |
| 8 | serious | Coverage dead-end — `resolveStandard` throws for categories absent from the finder (Cat-9, Cat-17 ≈18 products) → silent no-op | ~18 products + any compiled-but-unvendored category |
| 9 | serious | Mandatory-speciation subsumed — seafood MeHg credited from a plain total-Hg reading; `completionPanel` classifies MeHg reflex and excludes it | All mandatory-speciation products (marine MeHg, rice/seaweed iAs, apple-juice iAs) |

## The fix (one engine context + one obligation function)

**Data / fan-out.** New index generator `tools/standards/build-engine-context.mjs` JOINS the compiled `*-compiled` cells (limits, `per_country`, provenance TYPE gov/read_across/control/not_material/baseline_screen, `native_basis`/`measurement_basis`) with `required-analytes.json` (obligation, tier, `reflex_trigger_ppb`, `screens_for`, `bounded_by`) into one projection per (product, variant). Fan out: index generator → cert static export → `sync-standards.mjs` vendors it, stamping `source_standard_version` and **failing / bannering on staleness** instead of exit-0.

**`resolve-standard.ts`.** Carry `provenanceType` + `measurementBasis`; distinguish control/not_material/baseline_screen from a genuine gap. `marketLimit()`: Tier-1 pass/fail uses the **strictest across `per_country`** (the strictest-floor headline), never a looser selected-market ML; any stratification is restricted to machine-side regulatory-equivalent target markets.

**New `lib/readiness/required-panel.ts`** — `requiredPanel(standard)` reads the obligation + basis and drives **all three consumers** (scope-panel, application cost, completion cost) so they agree. `methodFor` becomes basis-aware (content → ICP-MS/HPLC-ICP-MS; migration → element-release/specific-migration; USP → USP <232>/<2232>).

**`reporting-limits.ts`** — Tier-safe method-LOQ floor for monitored/control analytes with no numeric ceiling; never a `—` LOQ for a required analyte.

**`compute-readiness.ts` / `assess-brand.ts`** — pass `governmentLimits` (lowest applicable `per_country` ML) so the hard-stop is live; add a `monitored` (non-gating) decision so a clean control-cell product can certify; a null Tier-1 cell with a real detected value routes to remediation, never discarded into `insufficient_data`.

## Fallback contract (34 categories not yet in the registry)

The generator **derives** an obligation deterministically from each compiled cell type, failing safe on ambiguity: Tier-1 total with any firm value → `per_lot_total` always; Tier-2 total → `per_lot_total` (base run) or `baseline_monitor`; species with own firm limit and no parent → `mandatory_speciation`; species bounded-by-total → `reflex_speciation` (trigger `min(species limit, 50% parent)`); species the matrix removes (Cr-VI in food/lipid) → `not_applicable` only where the compiled cell says so. Null limit is **never** a pass and never a bare `—`: control → "measured every lot; no numeric ceiling" + method-LOQ + monitored; genuine Tier-1 gap → explicit visible block naming the analyte. Migration/USP basis → correct method, never content acid-digest. Missing market → strictest `per_country`, never looser. Category absent from context → explicit "standard not yet available", never a 404 or silent null.

## Test plan

Canary (Kasandrinos olive-oil/US) asserts the engine matches `cat30 required-analytes.json`: 8 per-lot totals (incl. total Cr LOQ 60) content ICP-MS; iAs/MeHg reflex and excluded from per-lot cost; Cr-VI `not_applicable` (no IC-ICP-MS row, firm 10 retained, not "regulatory only"); application-quote analyte set == completion-cost set; Pb ceiling 80 does not loosen on market change. Plus one archetype test each: rice cereal (iAs mandatory; Pb stays 20 in IN; hard-stop fires on Pb 150), cookware (element-release method; no permanent `insufficient_data`), lipstick (clean → certifiable; null Tier-1 detected → remediation; Cr-VI not "regulatory only"), canned seafood (MeHg mandatory; total Cr in panel; Cd stays 50 in TH). Guard tests: staleness surfaces; absent category returns "not yet available".
