# Adversarial Standards Audit — Remediation Blueprint (2026-08-14)

Source: workflow waaw41b7s (41 agents, 5.9M tokens). Full findings:
`/private/tmp/claude-501/-Users-karenpendergrass-Desktop-heavy-metal-index/1907bb07-5c37-4938-9b7f-468f095f9784/tasks/waaw41b7s.output`
Per-agent detail: same dir `/subagents/workflows/wf_f9108f62-1a8/journal.jsonl`

## Headline
ZERO of 20 categories clears the >95% bar today. Highest: Cat 16 (0.93), Cat 26/30/33 (0.90), Cat 31 (0.87), Cat 15 (0.85), Cat 9 (0.82). Everything else ≤0.50; Cat 12 = 0.05 (uncompiled).
Root cause = register data quality + recompile hygiene, NOT methodology. Compiler min-selection is trustworthy; it simply never saw rows that weren't ingested (China GB 2762), were ingested after compile (Cat 27/HK), or weren't pooled (HK Cap 132V in Cat 1/6/17). All tightenings move TOWARD the strictest government limit → Part-2-clean, no firewall escalation to APPLY.

## Confidence scorecard (before remediation)
Cat1 0.45 · Cat3 0.30 · Cat6 0.50 · Cat9 0.82 · Cat12 0.05 · Cat15 0.85 · Cat16 0.93 · Cat17 0.35 · Cat24 0.35 · Cat25 0.50 · Cat26 0.90 · Cat27 0.50 · Cat28 0.30 · Cat29 0.40 · Cat30 0.90 · Cat31 0.87 · Cat32 0.20 · Cat33 0.90 · Cat34 0.30 · Cat35 0.25

## HIGHEST-LEVERAGE ROOT FIX (lands the majority)
Ingest **China GB 2762-2022 (in force) + GB 2762-2025 (eff 2026-09-02)** general-food matrix rows — Pb/Cd/tAs/iAs/tHg/total-Cr for cereals, fresh vegetables, meat, fish, beans/legumes, nuts/seeds, condiments, salt — into `data/evidence/regulatory_limits.csv`; CONFIRM the already-in-register **HK Cap 132V** rows are being POOLED (present but never selected in Cat 1/6/17); then RECOMPILE every food category. Root cause named in 7 category findings.

## 49 CONFIRMED TIGHTENINGS (verified real/applicable/current; ppb)
- Cat1 baby-food solids tAs none→50 [IN FSSAI]; infant-formula-powder tAs none→50 [IN]; grain Cr not_material→1000 [HK Cap132V cereals]; veg-puree Cr nm→500 [HK veg]; mixed-meal Cr nm→500 (component) [HK]
- Cat3 grains tHg 30→20 (11 subcats) [GB2762/HK]; total-Cr not_material→1000 (11) [GB2762 Tbl7/HK]
- Cat6 seaweed tHg 2500→100 [FR CSHPF]; seaweed Cd 2000→500 [FR/ANSES]
- Cat17 pet fish Cr 12000→1000 [HK]; canned/wet tHg 200→50 [HK meat]; dry/freeze tHg 30→20 (veg 10) [HK]; milk-replacer iAs 100→10, Cd 50→5, Pb 20→10, tHg 50→10/4 [IL/HK Milk]
- Cat24 milk Cd 50→5, iAs 100→10, tHg →10 [IL FCS2016 Milk]; yogurt Cd 1000→50 [IL Dairy]; goat/sheep tAs 1000→50 [PY/MERCOSUR]; condensed Sn control→200000 [EU canned]
- Cat25 tinctures-oils tHg 400→100 [IL IMC-GMP]; concentrates iAs control→200 [US-MI]
- Cat27 legumes Cd 40→10 [PA]; legumes Cr control→1000 [GB2762/HK]; soy Cr control→1000 [GB2762]
- Cat28 cashews/tree-nuts Pb 1000→200 [GB2762]; tree-nut tAs 1000→800 [BR IN160]
- Cat32 soy-sauce Cd 1000→100, tAs 1000→100, Pb 2000→1000 [UY RBN / GB2762]; vinegar Cd 1000→100 [UY]; mustard/mayo Cd 1000→200, Pb 2000→1000 [UY/SG/GB2762]; tomato Cd 1000→200 [UY/SG]
- Cat34 bouillon Pb 2000→1000, iAs nm→100 [GB2762 compound-condiment]; hot-chili Pb 2000→1000; salt(unrefined) Pb 2000→1000 [GB2762]
- Cat35 mixed-meals Pb 100→50, iAs 100→50, Cd 40→20 [EU 2023/915 + 2025/1891]
### KAREN RULED (2026-08-14) — both gated decisions decided
- Cat29 wild-mushrooms Cd/Pb/tAs — **CONFIRMED: carve-out STANDS. DO NOT tighten.** Wild-mushroom values stay as-is (hyperaccumulation exception OI-20260813 holds). No change.
- Cat35 mixed-meals tHg 500→10, Cr control→500; bone-broth tHg control→50 [HK/CN] — **APPROVED: ADMIT HK/China. APPLY these tightenings.** The HK/China allowlist is widened for the composite-meal read-across (consistent with every other food category). Apply as part of the Cat 35 recompile.

## COVERAGE GAPS (fill)
Cat1 tAs absent on ALL 12 subcats (fill IN 50) + explicit Cr-VI determination; Cat3 total-Cr folded into false Cr-VI nm cell; Cat6 total-Cr all 7 + seaweed Ni [EU 2024/1987] + Al all 7; Cat9 no standalone total-Cr on 8 subcats; Cat12 UNCOMPILED (needs full build; only 2 GB14930.1 tAs rows); Cat15 empty jurisdictions_checked rosters + EU 2018/1513 textile regime (period underwear); Cat17 total-Cr HK poolable + fish MeHg; Cat24 condensed Sn + goat/cheese iAs; Cat25 NY/MI/Canada regimes not loaded; Cat27 STALE COMPILE (recompile for HK Cr); Cat28 GB nut Pb + BR nut tAs absent from register; Cat30 missing fat-spread/butter/animal-fat subcats; Cat32 compiler scope-word REGEX BUG (misses UY/SG general catch-alls); Cat35 component read-across omits fruiting-veg/dairy/cephalopod/terrestrial-Hg.

## NOT-MATERIAL CORRECTIONS (16 — mostly FALSE nm → gov/control)
Cat1 Cr nm→gov read-across; Cat3 total-Cr "no ML anywhere" FALSE→1000; Cat17 Cr control→HK read-across; Cat24 iAs "regs set tAs not iAs" FALSE (IL milk iAs 10); Cat25 Ni control→gov inhaled (MI); Cat27 Cr-VI nm TRUE but basis FALSE (rewrite); Cat29 cultivated MeHg nm→control (consistency); Cat30 Al/Cr rationales carry FALSE narrow enumeration (rewrite, keep class); Cat31 molasses total-Cr nm→control; Cat32 total-Cr "only dairy MLs" FALSE→control w/ HK read-across; Cat33 confectionery-candy Cd nm→scoped control (chili/tamarind sweets); Cat34 bouillon+hot-chili iAs nm→gov 100 [GB compound-condiment]; Cat35 total-Cr + bone-broth tHg "no regulator" FALSE.
- TRUE-BUT-LIMIT-ANYWAY (Karen's preference): Cat17 Al→surveillance value; Cat29 Ni→surveillance value.
- AFFIRMED SOUND (challenge FAILED — DO NOT touch): Cat6 Sn+both MeHg; Cat9 diaper-tHg+pacifier-iAs/MeHg; Cat15 MeHg+cosmetic-Al; Cat16 all 8 anchors + 3 controls; Cat26 all-control 5/5 MeHg; Cat9 EN71-3 Cat-III bindings.

## PPB PUSHBACKS (9 — keep OUT of ppb / label basis)
Cat26 ALL cells dose-based µg/DAY PDE (ICH Q3D/USP<232>) — ppb fits nothing; Cat9 diaper Ni µg/cm²/week RELEASE + food-contact SML; Cat15 EU2018/1513 = extractable-after-extraction content (distinct basis); Cat6 seaweed DRY-weight (label µg/kg DW vs wet); Cat16 liquid-formula anchors onto solid supplements need reconstitution note; Cat3 Al = GB2760 permitted-additive residue (ADI-governed) NOT contaminant ML — reclassify; Cat25 vape-hardware = release µg/puff (Step-0 locked, keep out of ppb); Cat12 GB14930.1 Pb = summed sulfide-precipitable index, not per-element.

## SEQUENCING
Run AFTER the current fleet drains (reconcile task_7202cd95 lands the 4 branch categories on main; publish task_89c70e5e completes) to avoid index-lock churn. Recompile from CLEAN worktrees off origin/main; never the dead-lane codex/methodology-sync.
