# HMTc Taxonomy Completeness Audit & Execution — June 2026

> **Historical taxonomy audit (method superseded 2026-08-12).** Category coverage and never-renumber decisions remain useful. The clean/dirty mechanics described below are retired as certification pathways; occurrence comparisons are descriptive only, initial limits are government-limit-only, and later tightening uses eligible HMTc certified-lot data.

**Status:** Active, 2026-06-09. Output of a six-architect whole-taxonomy audit (intuitiveness, clean/dirty
mechanics, gap-discovery, plus per-domain audits of cosmetics/household/children/supplements/pet) against
the governance principles in `hmtc-governing-principles.md` and `docs/standards-methodology.md`. Authority:
Karen directive "make the categories more comprehensive and intuitive while meeting governance principles."
**Guardrail:** never renumber; every change is retire-in-place + append; clean/dirty coherence per category.

## Design principle reaffirmed
The **public category** is the intuitive aisle/section a person, brand, or regulator walks to (simple). The
**row layer** carries clean/dirty splits and format flags (canned, frozen, dosage-form). A category whose
rows do not split clean-vs-dirty on a SHARED analyte axis is broken (the condiments-general / canned-seafood
defect). Format/packaging is a flag, never a category or a freestanding row.

## EXECUTED 2026-06-09 (committed)
- **Canonical JSON synced to live** (stops the source-of-truth contradicting the locks): Cat 2 → 16-row
  2026-05-16 lock (`category-2-step0-amendment-1.md`); Cat 4 → 7-row v2.2 slim; Cat 5 → 16 live rows.
- **New rows appended** (append-only, scaffolded, no candidate values):
  - Food: Cat 3 r12 grain-based-snacks (non-rice clean counterpart to rice-snacks); Cat 4 r8 pickled/
    fermented vegetables; Cat 11 r9 plant-based-meat-alternatives; Cat 34 r4 bouillon/seasoning-blends;
    Cat 35 r2 soups/broths/stocks; Cat 5 r17 cocoa beverage-mixes (resolves the Cat 33 dangling cross-ref).
  - Non-food: Cat 12 r21 disinfectants/sanitizers; Cat 13 r16 traditional eye cosmetics (kohl/surma — the
    extreme-Pb cosmetic platform); Cat 14 r12 bar/bath soap; Cat 16 r22-24 clay-mineral / mushroom-fungal /
    greens-superfood supplement platforms; Cat 17 r10 fish/marine-protein pet diet; Cat 26 r5 nasal/
    sublingual peptides.
  - **Clean/dirty sibling splits** (append-only): Cat 13 r17 sun-suntan-mineral (↔ r10 chemical), r18
    dusting-powder-cornstarch (↔ r2 talc), r19 antiperspirant (↔ r9 deodorant) — mirroring the locked Cat 2
    chemical/mineral + cornstarch/talc pairs.
- **Page gaps filled**: `dentifrices` (Cat 20 r1, adult — was a phantom link while toothpaste.md held only
  children's evidence); `canned-meats` (Cat 11 r8).
- **Platform-axis annotations** (clean/dirty made explicit at the category level):
  - Cat 22 — evaporative (clean) vs combustion candles/wax-melts/incense (Pb/Ni dirty: lead-cored wicks,
    volatilized colorants). Operationalizes the §6 framing that previously existed only as a changelog string.
  - Cat 23 — three migration bands never pooled: packaging-migration (r1-11 Sn/Pb), glaze/decoration-leach
    (r12-16 Pb/Cd), alloy-leach (r17-28 Al/Ni/Cr); water filters (29-30) a distinct treatment-device sub-platform.

## STAGED — fully specified, execute next (governance-compliant, never-renumber)
- **Orphan homing** (redirect/merge; create no new pages): mushrooms + pickled-mushrooms → Cat 29;
  nail-polish → Cat 13 r13 manicuring; tea-infusions → merge into Cat 5 tea coarse node; dietary-supplements
  → new Cat 16 master rollup (mirror cannabis-products/research-chemicals masters) then redirect; bathing-soaps
  → Cat 14 r12 bar/bath-soap; biscuits + snack-bars → Cat 3 r12 grain-based-snacks; piercing-post-assemblies →
  rewrite frontmatter (drop food fields, add adult Ni/EN-1811 node) + delete the two pasted Cat-4-produce
  sections, cross-link from Cat 21 r22. Coarse infant/seafood/cereal nodes → promote into Cat 1/3/6 bridge
  sections. (Routing layer fans sources; model does NOT hand-edit product_source_routing_audit.csv — Part 5b.)
- **Cat 16 single-axis re-cut**: demote form-factor rows 1-13 to within-row dosage-form flags (non-standards-
  bearing; keep numbers), keep ingredient-platform rows 14-21+ live. Source distribution proves it (ingredient
  rows hold the evidence; form rows ~0). Document via category-16-step0 amendment, mirroring canned-as-flag.
- **Cat 17 matrix-axis re-cut**: demote dry/wet/canned/raw/freeze-dried rows 1-5 to format flags (canned-wet
  → Sn flag referencing Cat 23, not a freestanding canned row); append protein-matrix rows. Treats/chews/
  toppers/milk-replacers (6-9) stay.
- **Cat 21 r20 art-craft split**: liquid/paste colorants; solid drawing media; modeling/sculpting media;
  decorative particulates. Move "jewelry/craft kits" clause into r22. r20 retires to a parent; r21 stays catch-all.
- **Cat 13 parent-row notes**: add boundary notes on r2/r9/r10 pointing to their new clean/dirty siblings.
- **Cat 9/10 additions + boundary rules**: Cat 9 milk-handling/breast-pump parts row + pacifier-vs-teether
  boundary rule; Cat 10 footwear row, infant sleep-surface row, car-seats hedge resolution; Cat 21 non-metal
  children's jewelry row (coating-migration axis).
- **Per-source decomposition (Tier 6, last)**: re-point condiments-general's 25 sources to Cat 32 r2/r3/r4 +
  Cat 34 r1/r2/r3 + Cat 35 soups + broad_product_context per the verified per-source map (hot-sauce/chili →
  Cat 34; ketchup/tomato → Cat 32 r4 / Cat 4; soy → r2; fish sauce → r3; broad TDS → context). Dissolve
  canned-foods-general to a redirect (canned produce → Cat 4 + tin flag; canned beans → Cat 27; canned soup →
  Cat 35). Fan snacks-general 23 sources by matrix (grain → Cat 3 r12; lamb → Cat 11 processed-meats; TDS →
  context). Then retire the grab-bag pages in place to REDIRECTs.

## RESERVED — Karen values calls (DO NOT execute; surface only)
- **New top-level categories** (append at 36+ if accepted): **Cat 36 Alcoholic Beverages** (wine/beer/cider/
  spirits — single largest genuine gap; Pb/As platform; is HMTc in the alcohol business?); **Cat 37 Tobacco,
  Nicotine & Vaping** (Cd/Pb leaf + coil-leached Pb/Ni/Cr; pair vape-hardware factoring with Cat 25); **Cat 38
  Pet Non-Food Products** (toys/chews-as-objects/bowls/collars/bedding/litter — real recall class, currently homeless).
- **Cat 13 ceremonial powders** (sindoor/kumkum/vermilion — sindoor up to 130,000 mg/kg Pb): dedicated dirty
  row vs advisory-only (parallel to the skin-lightening advisory ruling)?
- **Cat 10 adult body-jewelry** row vs keeping piercing-post-assemblies a standalone node.

## Audit provenance
Six-architect workflow run 2026-06-09 (835k subagent tokens). Full master plan + per-domain audits archived in
the run transcript; the executable substance is captured above. No threshold values were computed or moved in
this pass (scaffold + annotation only).
