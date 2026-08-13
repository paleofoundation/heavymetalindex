# HMTc Taxonomy v2.1 — Reorganization and Expansion

> **Methodology note (2026-08-12):** This remains a taxonomy history record. Any P45/P97 or occurrence-selected limit-setting language is superseded; current initial limits are government-limit-only and the ratchet uses eligible HMTc certified-lot data.

**Status:** Active. Approved by Karen 2026-06-08 (relayed v2.1 brief from a Claude.ai session,
reconciled against the local repo). **Authority order:** CLAUDE.md Part 9, the Step Zero Protocol
lock records, and `hmtc-governing-principles.md` remain the desktop source of truth. Nothing in this
document overrides them. Where this brief and a local lock record disagree, **the local lock wins and
the conflict is flagged** (see "Flagged conflicts" below).
**Nature of the change:** additive expansion of taxonomy v2.0. It appends categories and rows, layers
a navigational grouping on top of the existing IDs, and routes the provisional scaffolds. It does not
renumber or reorder anything.
**Companion docs:** `category-24-step0-lock.md`, `category-25-step0-lock.md`,
`category-26-step0-lock.md`. Methodology: `docs/standards-methodology.md`, `hmtc-governing-principles.md`.

## §1 — The identity contract (the rule that must not break)

Category numbers and row numbers are an identity contract, not a display order. Every scaffolded page
states its own category and row in its body; the source-routing layer routes on those declarations;
`tools/autonomy/link-orphans.mjs` places pages by them. Renumbering or reordering any existing
category or row would silently break routing across the build.

Therefore every change here is **additive**:
- New top-level categories append at 24 and upward.
- New rows append at the end of an existing category's row list and take the next row number.
- Any addition to a Step Zero-locked category (Cat 1, 2, 4, 5, 6, 7, and any other carrying a recorded
  lock) is **not** an in-place edit. It is a **new Step Zero lock event**, dated and protocol-referenced,
  recorded the same way the existing locks are.
- The navigational grouping in §2 is presentational only. It sits on top of the numbers and changes none.

## §2 — Seven-domain navigational layer

A layer on top of the existing IDs for navigation and internal linking. No category number changes.

| Domain | Member categories (numbers unchanged) |
|--------|----------------------------------------|
| Foods, ingestion | 1, 3, 4, 5, 6, 7, 8, 11, + 24 (Dairy) |
| Ingestible and applied health products | 16, + 25 (Cannabis/CBD), + 26 (Peptides/research chemicals) |
| Personal care and cosmetics | 2, 13, 14, 15, 20 |
| Home and household | 12, 19, 22, 23 |
| Children, durable and contact goods | 9, 10, 21 |
| Pet products | 17, 18 |
| Methodology and crosswalk nodes | Cat 1 lead-benchmark context, regulatory crosswalk vs field findings, Cat 2 non-ingestion exposure pathways, base/bridge nodes |

## §3 — New top-level categories (proceed)

Each appends as a new number, runs Step Zero, and carries **no candidate values** in this pass
(scaffold only; derivation is a later pass).

| # | Name | Coverage / why it earns a number |
|--:|------|----------------------------------|
| 24 | Dairy and Milk Products | Cow, goat, sheep, camel milk; cheese, yogurt, cream, milk powders, condensed/evaporated. The clean home for the camel-milk work, which routes nowhere today, and for Cd/Pb in milk-as-matrix (separate from meat). Butter and ghee remain Cat 7 Row 3 and cross-link here. |
| 25 | Cannabis, Hemp, and CBD Products | Flower, edibles, tinctures, topicals, vape cartridges and hardware. Documented hyperaccumulator (used in soil phytoremediation for Pb/Cd/Ni); vape hardware leaches metals into inhaled aerosol from the coil. Large market, no incumbent mark. |
| 26 | Peptides, SARMs, and Research Chemicals | Unregulated ingestible and injectable compounds sold outside the supplement framework. Promotes the 2026-06-08 provisional scaffold. Legally distinct from Cat 16, so it cannot sit there. |

**Cat 26 forces a new pathway.** The parenteral (injection) route is absent from the taxonomy. An
injected compound bypasses the gut, so its metal load reaches the bloodstream without the absorption
discount every ingestion row assumes — arguably more severe per microgram. It carries its own pathway
note. Two derivation-time methodology variants are recorded in `category-26-step0-lock.md` and must be
written into `docs/standards-methodology.md` before any Cat 26 number is published: (i) **no regulatory
anchor exists**, so the `min(pooled percentile, regulatory ceiling)` rule loses its cap term; (ii) the
**parenteral route** may require a tighter health-based term than the oral default. The absence of any
regulatory backstop is exactly why an HMTc mark carries its highest consumer-protection value here.

## §4 — Reserved decisions (HELD pending Karen; do not execute)

1. **Tobacco, nicotine, and vaping as Cat 27** — contamination science is textbook (Cd/Pb in tobacco;
   metals in pouches and vape aerosol), but whether HMTc should appear on these products is a values
   call. In scope or out.
2. **Vape hardware factoring** — cannabis-vape and nicotine-vape coils leach metal by the identical
   mechanism. Keep hardware inside each product category, or create one shared inhalable-hardware
   treatment both reference.

## §5 — Within-category additions and splits

Each appends at the end of its category's row list; each locked category gets a new Step Zero event.

**Proceeding now:**
- **Mushrooms family, cultivated-vs-wild split → Cat 4 (Produce).** Wild mushrooms are a Cd/Hg/Pb (and
  radiocesium) platform; cultivated button mushrooms are the clean counterpart — the same split pattern
  as spinach vs leafy greens. Resolves three scaffolds at once: Wild Mushrooms, Canned Mushrooms,
  Pickled Mushrooms (processed-wild routes to the contaminated side). New Step Zero event in Cat 4.
- **Children's metal jewelry row → Cat 21 (Toys/crafts).** A leading Pb/Cd recall category with only a
  provisional scaffold today. Cross-links to the existing Piercing Post Assemblies (nickel-contact)
  node. New Step Zero event in Cat 21.

**Candidates (HELD pending Karen — see §4 decision 3):** imported/ethnic confectionery row (Cat 7),
wine & spirits handling (Cat 5), non-food pet toys/chews (Pet domain — new category or row family TBD).

## §6 — Candles and incense (Cat 22 framing; proceed)

The rows already exist (scented candles, wax melts, incense). The gap is the pathway model. Cat 22
currently treats everything as ambient air emission, blending two mechanically different things:
**evaporative** emitters (diffusers, plug-ins, reed diffusers) and **combustion** emitters (candles,
wax melts in use, incense). Combustion pulls in platforms evaporation does not: lead-cored wicks (banned
from US manufacture/sale since 2003 but present in some imports) and metal-bearing colorants/fragrance
carriers that volatilize when burned, putting Ni and Pb into the breathing zone as particulate. Add a
**clean-vs-combustion framing** inside Cat 22 (evaporative = lower-load group; combustion = platform
group) with a contamination-platform note naming the wick and colorant routes. No new category number.

## §7 — Provisional-scaffold routing table

Each auto-created scaffold gets one decision: promote, redirect/merge, or assign. Grouped by destination.

| Scaffold page or group | Routing decision |
|------------------------|------------------|
| Research Chemicals, Peptides & SARMs | Promote to new **Cat 26** master node. |
| Milk and Dairy | Promote to new **Cat 24** master node. |
| Wild / Canned / Pickled Mushrooms | Merge into the new **Cat 4** mushrooms family (wild + processed-wild → contaminated side). |
| Children's Jewelry | Promote to the new **Cat 21** children's metal jewelry row. |
| Spices | Merge into **Cat 7 Row 8** (dried seasonings; turmeric is the Pb-adulteration platform inside that row). |
| Chocolate | Merge into **Cat 7 Row 7** (chocolate products; populate early — high Cd/Pb salience). |
| Honey | Confirm against **Cat 7 Row 4** (honey & syrups) and merge. |
| Nail Polish | Adult → **Cat 13 Row 13** (manicuring); children's already at Cat 2 Row 14. |
| Bathing soaps | Route to **Cat 14 Row 5** (hand soap), or split a soaps row by Step Zero if bar bathing soap warrants it. |
| Snacks, General + Snacks Crackers Biscuits redirect | Route to **Cat 7** snacks rows. |
| Mixed Meals / Prepared Foods | Adult → **Cat 7** prepared-foods row; infant mixed meals stay **Cat 1** Rows 12/13. |
| Canned Foods General + Canned Fruit/Tomatoes/Vegetables/Tomato Paste/Sauce redirects | Already aliased to the **Cat 7** canned-foods parent. Confirm parent node and close. |
| Canned Fish redirect + Canned seafood | Already routed to **Cat 6 Row 6**. Confirm and close. |
| Infant Formula/Food family (Powder Dairy, RTF Dairy, RTF Soy, Stage1, Dairy Free, Porridges, Puree, Ready-To-Eat stubs) | Merge into the **Cat 1** locked rows and base/bridge nodes. Ingest artifacts, not new categories. |
| Baby Food, Infant And Child Foods Master | Route to the **Cat 1** master rollup. |
| Cereal Meals, Cereal Products, Breakfast Cereals | Route to **Cat 3** cereal rows. |
| Dietary Supplements auto-stub | Route to the **Cat 16** master. |
| Tea, Tea Infusions | Route to **Cat 5** true-tea / herbal-infusion rows and the tea coarse node. |
| Piercing Post Assemblies | Keep as a specialized nickel-contact node; cross-link to the new children's jewelry row. |

## §8 — Governing-text changes

- Bump the taxonomy to **v2.1** with a dated changelog entry listing the new categories and rows, so v2.0
  page self-descriptions stay valid and the work reads as additive, not a correction.
- Update the taxonomy JSON `$comment` (currently "23-category structure") to the new envelope (~26–28 once
  Cat 24–26 and any decided Cat 27 are in).
- **Local reconciliation:** the v2.1 brief expected `hmtc-governing-principles.md` to list "scalable to 23
  categories" as Principle 5. The local file does not — Principle 5 reads "Make it the de facto standard /
  scale across **all** product categories." No numeric edit is needed there; a changelog note suffices.

## Flagged conflicts (brief vs local)

1. **Canned / snacks (matrix-beats-format) — RESOLVED 2026-06-09 by design panel.** The earlier
   recommendation (retire the locked Cat 6 `canned-seafood` row, redistribute canned by matrix with a tin
   flag) and the v2.1 brief §7 ("keep canned/snacks in place") were adjudicated by a four-lens, repo-grounded
   design panel (strategic, adversarial-defensibility, execution-cost, methodology) — unanimous on the
   outcome. **Matrix-beats-format is adopted as the governing rule** (`docs/standards-methodology.md`
   §"Packaging and processing format is a flag, not a category"), which resolves the four-way Sn-governance
   incoherence (Cat 6/7/11/23) at the rule level. The **physical** redistribution is **staged**, not executed
   this sprint, because the panel established that the locked Cat 6 row carries **147 species-unresolved
   sources** (per-source judgment, not mechanical), a same-week reversal of a dated lock is a defensibility
   liability, and the canned-tin flag mechanism must precede any retirement. See
   `category-6-step0-amendment-1.md` (the canned-seafood MeHg matrix-mixing artifact — P97 ≈ 30.5 vs
   predatory ≈ 829 — plus the staged fish-species redistribution; tin cap = lowest applicable **inorganic**
   ceiling, not the looser Codex total-tin value) and `category-7-step0-amendment-1.md` (canned produce →
   Cat 4 matrix rows with a tin flag; `canned-foods-general` reframed as the cross-matrix tin-evidence node,
   not retired; snacks **deferred, not dissolved** — an empty provisional row). The MeHg-correctness point
   (sardines pooled with tuna) is the load-bearing defect the rule fixes.
2. **"Scalable to 23 categories."** Brief §8 expected this in the governing principles; it is not there
   (see §8 above). No conflict in substance; the "23" lives in the JSON `$comment`.

## Drift direction (Part 2 check)

Additive expansion, no threshold movement. New categories/rows are scaffolded with **no candidate values**;
the one shipped Sn threshold (Cat 6 canned-seafood) is left untouched. No claim is softened or strengthened
to suit an HMTc convenience.

## Changelog

- 2026-06-08 — v2.1 authored and approved. Seven-domain navigational layer; new categories 24 (Dairy), 25
  (Cannabis/CBD), 26 (Peptides/SARMs/Research Chemicals) scaffolded via Step Zero with no candidate values;
  mushrooms cultivated-vs-wild split (Cat 4) and children's metal jewelry row (Cat 21) as new Step Zero
  events; Cat 22 evaporative-vs-combustion framing; provisional-scaffold routing table. Reserved for Karen:
  Cat 27 (tobacco/nicotine/vaping), vape-hardware factoring, candidate rows (confectionery/wine/pet-toys).
  Canned/snacks matrix-beats-format reconciliation: not executed (kept in place per local lock + v2.1 brief);
  logged as deferred. Authored by Claude (co-architect mode) on Karen's relayed v2.1 brief.
