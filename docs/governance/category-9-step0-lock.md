# Category 9 — Infant and Child Contact Products (Ages 0-5) — Step 0 Lock

**Status:** Scope lock (2026-08-10). First non-food category to lock under Method v2.0.
**Taxonomy:** HMTc v2.2, Category 9 (Infant and Child Contact Products, Ages 0-5), 8 rows (taxonomy `n=9`).
**Panel:** the HMTc 10-analyte certification set — Pb, tAs, iAs, Cd, tHg, MeHg, Ni, Al, Cr-VI, Sn — with the contact-product speciation rules in the methodology section below.
**Exposure pathway:** oral (mouthing) + dermal (contact with mucous membranes, saliva); for the food-contact rows, incidental ingestion via migration into milk/food.

## Why Category 9 locks its row scope now (and why it is not a percentile decision)

Category 9's eight rows are a **regulatory-instrument-mandated** split, not a
data-driven percentile decision. Which sovereign limit governs a product is
determined by what the product *is* and how a child is exposed to it, and the
governing instrument changes across the eight rows:

- **Food-contact articles** (bottles, nipples/spouts, sippy cups, food-storage
  items, feeding accessories) are governed by food-contact-material (FCM) law:
  EU Regulation 10/2011 specific migration limits into food, the EU framework
  regulation, US FDA 21 CFR food-contact provisions, and — for stainless-steel
  drinkware — nickel release under the former EU Nickel Directive 94/27/EC
  (now REACH Annex XVII entry 27). The measured quantity is migration *into
  food*, in mg/kg food or µg/kg food.
- **Mouthable toys / childcare articles** (pacifiers and sucking/teething aids,
  teething toys/teethers) are governed by toy-safety and mouthable-article law:
  EU Toy Safety Directive 2009/48/EC Annex II Part III element migration limits,
  the EN 71-3 test standard, ASTM F963 (US) soluble-migration limits, EU REACH
  entry 63 lead in mouthable articles, and CPSIA total lead in children's
  products. The measured quantity is element migration *from the toy material*
  under simulated saliva conditions, in mg/kg of material.
- **Skin-contact / absorbent hygiene articles** (diapers and diaper components)
  have no established metal-migration pathway from the cellulose / super-
  absorbent-polymer core; the relevant limits are the REACH extractable-metal
  limits for the textile and elastic components, and most panel analytes resolve
  to a substantiated *not-material* determination rather than a number.

Locking these eight rows as **routable scaffolds** is therefore safe: the split
comes from the structure of product-safety law, not from waiting on our own
occurrence data. This is the same logic under which Category 6 (Seafood) locked
its six rows on a toxicologically-mandated split — here the mandate is
regulatory rather than toxicological, but the principle is identical.

## Basis is the load-bearing distinction for this category (Method v2.0 adaptation)

Category 9 is the first HMTc category whose limits are **not dietary maximum
levels**. They are migration limits and total-content limits drawn from toy-
safety, childcare-article, and food-contact-material regulation. The single most
important rule for this category is that **basis is never conflated**. The
register (`data/evidence/regulatory_limits.csv`) holds Category-9-relevant limits
in at least five non-comparable bases:

| Basis family | Measured quantity | Example instruments |
| --- | --- | --- |
| **Toy migration** | acid-soluble element migrating from toy material (simulated saliva) | EU 2009/48/EC Annex II Pt III; EN 71-3; ASTM F963; China GB 21027; Mexico NOM-252; Australia Customs coating |
| **Food migration** | element migrating into food (specific migration, SML) | EU 10/2011 Annex II; EU ceramics analog (Uruguay RBN); Korea/Japan composition where migration is not set |
| **Total content** | element content of the whole product or a component | US CPSIA 100 ppm; Washington CSPA; EU REACH entry 63 (mouthable lead); California SB929 |
| **Surface-coating content** | element in the non-volatile content of a paint/coating | US CPSIA 90 ppm; Canada SOR/2011-17; Australia Customs |
| **Skin extraction** | element extractable from a homogeneous material after extraction | EU REACH entry 72 (textiles); REACH entry 47 (Cr-VI leather) |
| **Release rate** | element release per unit area per unit time | EU Nickel Directive 94/27/EC / REACH entry 27 — µg/cm²/week (cannot be expressed in µg/kg) |

Method v2.0 sets the standard for each `(row, analyte)` to the **strictest
credible government limit in the correct basis**, by lookup — never a
cross-basis minimum. A migration limit (EU 2009/48/EC scraped-off Pb) and a
total-content limit (CPSIA 100 ppm Pb) are different quantities that a laboratory
measures by different methods; a certified product must meet each *in its own
basis*, and the standard publishes each with its basis stated. Where two bases
genuinely co-govern a row (a mouthable toy faces both a migration limit and a
total-lead-content limit), both are published as separate ceilings, exactly as
Seafood publishes total mercury and methylmercury as two ceilings that must both
be met. The occurrence-percentile machinery (P97/P45, clean/dirty splits) does
**not** run for this category: contact-product occurrence data is sparse and the
governing values are sovereign limits, so the standard is a government-limit
lookup end to end.

## Contact-product speciation rules (why iAs and MeHg are not-material here)

Two analytes in the HMTc panel are speciation forms defined by an ingestion /
dietary context and have no counterpart in contact-product regulation:

- **Inorganic arsenic (iAs)** is a dietary speciation. Every contact-product
  arsenic limit (toy migration, soluble migration, FCM) regulates the **total
  arsenic element**, not the inorganic fraction. The arsenic cell for this
  category is therefore **tAs**, bounded by the governing total-arsenic limit;
  iAs resolves to *not-material* (no separate inorganic-arsenic limit exists in
  any contact-product instrument, and the total-As ceiling bounds it).
- **Methylmercury (MeHg)** is a marine-bioaccumulation speciation. No metallo-
  organic mercury pathway exists in a bottle, teether, or diaper; every contact-
  product mercury limit is on **total mercury (tHg)**. MeHg resolves to
  *not-material*, bounded by the governing tHg limit.

Both determinations are recorded in `data/evidence/standards-not-material.csv`
per row, not omitted. This satisfies the "no silent gaps" rule: every panel cell
resolves explicitly to one of {government-limit, read-across, occurrence,
substantiated not-material}.

### A not-material determination is rebuttable, and is tested against the evidence

A not-material call is a presumption ("no source, no pathway, no government
limit"), not a permanent exclusion. It is defensible only if it is actually tested
against the literature and revised when a source measures the analyte in the
product. The procedure: the routing layer lands every source that measured an
analyte on the product row; when a source reports a not-material analyte,
`tools/evidence/audit-not-material-integrity.mjs` flags the cell as a
contradiction; the cell is re-adjudicated to either a real limit/screen (retire
not-material) or a kept determination that now cites the source as verified
trace/artifact. The check runs in the prebuild (`--warn-only` while the
corpus-wide backlog drains) and is the enforcement this category's first cut
lacked.

This is not hypothetical for Category 9. The diaper row initially carried tin and
nickel as not-material; the integrity check found two sources already routed to
the row that contradict both — `smajgl2015-tin-baby-diapers-croatia` (total tin to
23 mg/kg, organotin PVC stabilisers, 20–100% of the organotin TDI) and
`nyamukamba2023-south-africa-diapers-metals-formaldehyde` (extractable nickel
above the 0.1 mg/kg skin-contact limit in 2/20 diapers). Both determinations were
retired: tin now binds REACH Annex XVII entry 20 (organotin, 0.1% = 1000 mg/kg as
Sn, reflex organotin speciation) and nickel binds the former Nickel Directive
94/27/EC release limit (0.5 µg/cm²/week, prolonged skin contact). The remaining
diaper not-material cells (iAs, tHg, MeHg, Al) carry no contradicting routed
source and stand.

Antimony (Sb) is regulated in the toy-migration instruments (Cat III 560 mg/kg
and the soluble-migration family at 60 mg/kg) but is **not** one of the HMTc ten
certification analytes; it is surfaced as a controlled screen on the mouthable-
toy rows, not published as a panel ceiling.

## Row architecture and lock status

| Row | Slug | Governing basis (primary) | Companion basis | Confidence | Routed sources |
|----:|------|---------------------------|-----------------|-----------|---------------:|
| 1 | infant-bottles | food migration (EU 10/2011 SML) | total-lead content (CPSIA); Ni release (steel) | low | 5 |
| 2 | infant-bottle-nipples | food migration (EU 10/2011 SML) | total-lead content (CPSIA) | low | 3 |
| 3 | sippy-cups-toddler-drinkware | food migration (EU 10/2011 SML) | total-lead content (CPSIA); Ni release (steel) | low | 6 |
| 4 | pacifiers-and-sucking-teething-aids | toy migration (EU 2009/48/EC Cat III) | total-lead content (CPSIA; REACH mouthable) | low-medium | 9 |
| 5 | teething-toys-teethers | toy migration (EU 2009/48/EC Cat III) | total-lead content (CPSIA) | low | created this lock |
| 6 | infant-food-storage-items | food migration (EU 10/2011 SML) | total-lead content (CPSIA) | low | created this lock |
| 7 | diapers-and-components | skin extraction (REACH entry 72) / not-material | — | low | 16 |
| 8 | feeding-accessories-child-sized | food migration (EU 10/2011 SML) | total-lead content (CPSIA); surface-coating (painted) | low | 0 |

All eight rows are scope-locked. `products_status` moves from `scaffold` to
`locked` and `splits_locked` to `true` on the six pre-existing pages; two new
routing destinations (`teething-toys-teethers`, `infant-food-storage-items`) are
created by this lock. Per-analyte limit numbers are set by the Method v2.0
government-limit compiler (`tools/standards/compile-cat9.mjs`), not on the public
Index pages — the Index pages carry the literature-native view and the
regulatory-cap crosswalk only, per the wiki/HMTc firewall (CLAUDE.md Part 2).

## What waits, and what does not

- **Locked now:** the eight-row scope, the basis assignment per row, the iAs/MeHg
  not-material determinations, and the government-limit derivations for every cell
  whose governing instrument is loaded in the register.
- **Loaded by this lock:** the two absent primary instruments — EU Toy Safety
  Directive 2009/48/EC Annex II Part III (all three material categories) and EU
  Regulation 10/2011 Annex II metal SMLs — transcribed into the register with
  per-row provenance and a new `wiki/regulations/` source page each, plus ASTM
  F963 soluble limits as the US member of the toy-migration family.
- **Waits:** literature synthesis of the routed occurrence evidence (the
  contact-product sources already routed to rows 1–7) into the Index product-page
  evidence summaries; that is a synthesis-workflow task, independent of the
  certification standard, which is government-limit-driven and does not depend on
  occurrence depth.

## Applicability caveats and pending tightening (adversarial audit, 2026-08-10)

A Daubert-style adversarial audit of the compiled standard confirmed every numeric
value against primary text (all EU 2009/48/EC Category III values current, including
the amended aluminium 28130 — not the superseded 70000 — lead 23, and Cr(VI) 0.053)
and confirmed the no-cross-basis-min architecture is implemented in code. It also
surfaced applicability-framing points, all resolved in this lock:

- **Pacifiers are excluded from the Toy Safety Directive itself** (2009/48/EC Annex I
  item 16, babies' soothers). The pacifier row therefore does not assert direct
  governance by 2009/48/EC; it reads the EN 71-3 / Category III migration limits
  across via the **EN 1400 soother standard**, which requires them. The limit values
  are identical. The teething-toys row is directly governed (teething toys are toys).
- **Disposable diapers are excluded from REACH Annex XVII entry 72** (paragraph 1(b),
  disposable textiles). The 1 mg/kg extraction limits bind reusable-cloth components
  directly and are read across as the benchmark for disposable-diaper skin-contact
  components; framed as read-across, not direct governance.
- **tAs and tHg on the toy rows bind the EU 2009/48/EC Category III raw limits (47 /
  94 mg/kg), not the lower ASTM F963 nominal (25 / 60).** ASTM F963 incorporates an
  analytical-correction convention that EN 71-3:2013+ abolished; applied as enforced,
  the EU raw limit is the stricter ceiling. Adopting the ASTM nominal as a raw ceiling
  would be a synthetic value neither sovereign enforces, so the EU raw limit binds.
- **Regulation 10/2011 is plastics-scope.** Its SMLs are applied to glass and
  stainless-steel food-contact components as a conservative read-across (no stricter
  metal-food-contact sovereign limit exists), labelled as such.

**Pending tightening (ratchet trigger).** Regulation (EU) 2025/2509, the successor Toy
Safety Regulation (in force 2026-01-01, applicable 2030-08-01, repealing 2009/48/EC),
is reported to roughly halve several element-migration limits. It is recorded in
`data/evidence/regulatory-ingest-gaps.csv` as future-effective. When its Annex values
are transcribed, the toy and pacifier rows tighten accordingly; the program should
adopt or cite them ahead of the 2030 application date consistent with its ratcheting
posture. This is the one deliberately-deferred item from the audit; it does not change
any currently-published value.

## Change log
- 2026-08-10 — Initial scope lock. 8 rows scope-locked (6 pre-existing scaffolds
  promoted, +2 created: teething-toys-teethers, infant-food-storage-items).
  Basis-family methodology recorded; iAs/MeHg not-material for contact products;
  EU 2009/48/EC and EU 10/2011 loaded into the register. Authored by Claude
  (co-architect mode), Karen review.
