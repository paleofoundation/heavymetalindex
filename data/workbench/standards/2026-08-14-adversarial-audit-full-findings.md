{
  "summary": "Adversarially audit every compiled HMTc category to >95% confidence that each cell reflects the strictest government limit in existence: verify global-strictest, 8-analyte coverage, challenge every not-material, normalize to ppb",
  "agentCount": 41,
  "logs": [],
  "result": {
    "audited": [
      {
        "category": "Category 1 — Infant & Child Foods",
        "cells_audited": 161,
        "category_confidence": 0.45,
        "coverage_gaps": [
          {
            "subcat": "ALL 12 baby-food subcats (both formula variants)",
            "analyte": "tAs",
            "issue": "Mandatory total tAs is entirely absent from every Cat-1 baby-food cell (only iAs present). iAs cannot satisfy tAs (Method v2.0). India FSSAI regulates tAs=50 ppb for 'Infant milk substitute and infant foods' (register row in_tas_infant-milk-substitute-and-infant-foods_50); SG=100, CN=500, IL=1000 also exist. Cells' own scope_include already matches the IN row. This is a coverage gap AND a tighten (see candidates)."
          },
          {
            "subcat": "ALL 12 baby-food subcats",
            "analyte": "Cr-VI",
            "issue": "No explicit Cr-VI species determination cell; Cr-VI is folded implicitly into the Cr reflex-speciation control text. Defensible (no food Cr-VI ML exists anywhere; lowest is toys 5 / water 10) but should be an explicit not_material/control determination cell for the mandatory species panel rather than only prose inside the Cr block."
          },
          {
            "subcat": "seafood cells: canned-seafood, cephalopods, fish-freshwater, fish-marine-non-predatory, fish-marine-predatory, shellfish, seaweed-kelp-foods",
            "analyte": "Ni, Al, Cr",
            "issue": "These 7 seafood JSONs sit in data/workbench/standards/cat1-compiled/ but are NOT Cat-1 subcategories (absent from cat1-config.json) — they are Cat-6 seafood content misfiled into the Cat-1 directory (adult-fish limits, as_consumed basis, Pb 200-300/Cd 500-1000). They drop Ni/Al/Cr entirely. Ni/Al drop is defensible (no seafood ML), but Cr drop is contradicted by HK Cap 132V Fish Cr=1000 and IN all-fishery-products Cr=12000. Recommend relocating these to Cat-6 and, wherever they live, adding a Cr cell (HK Fish=1000)."
          },
          {
            "subcat": "infant-formula-powder (soy variant)",
            "analyte": "Cd",
            "issue": "soy Cd binds il_fcs2016_cd_14_1 (NON-soy powder=10) instead of the soy split (EU eu2023_cd_formula_soy_powder_20 / IL 14_3=20 / GSO=20). Result 10 is over-strict and not traceable to a soy-specific government instrument; Method v2.0 says preserve the formulation split, i.e. soy powder Cd should be 20. Not a loosening (it is tighter), but a traceability defect for the exact cell."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "baby-cereals-dry-non-rice",
            "analyte": "tAs",
            "current_value_ppb": "none (cell absent)",
            "current_binding": "none",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "IN (India FSSAI)",
            "proposed_instrument": "FSS (Contaminants, Toxins and Residues) Regulations 2011 — Infant milk substitute and infant foods, arsenic 0.05 mg/kg (labelled 'Arsenic' = total, not speciated)",
            "source": "register: in_tas_infant-milk-substitute-and-infant-foods_50 — PRIMARY-CONFIRMED against FSSAI 2011 text (this review: arsenic row 'Infant Milk substitute and Infant foods 0.05')",
            "confidence": "high — value verified real/current/total-species; strictest infant tAs in register (next SG 100); clean as_sold-to-as_sold basis; mandatory total genuinely absent from cell"
          },
          {
            "subcat": "baby-cereals-dry-rice-based",
            "analyte": "tAs",
            "current_value_ppb": "none (cell absent)",
            "current_binding": "none",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "IN (India FSSAI)",
            "proposed_instrument": "FSS Contaminants Regs 2011 — infant milk substitute & infant foods tAs 0.05 mg/kg (total)",
            "source": "register: in_tas_infant-milk-substitute-and-infant-foods_50 — FSSAI primary text confirmed",
            "confidence": "high on value — but COHERENCE FLAG: this cell binds iAs=100 (US FDA rice-cereal) and iAs<=tAs is a physical identity, so tAs=50 renders the iAs=100 cell non-binding and exposes that the standard's own inorganic-As cell (100) exceeds its total-As cell (50). Adopt tAs=50 and revisit the iAs cell; not a reason to reject the tAs value"
          },
          {
            "subcat": "fruit-purees-general / non-root-vegetable-purees / root-vegetable-purees / mixed-meals-non-rice / mixed-meals-rice / teething-and-snacks (all non-seafood solids)",
            "analyte": "tAs",
            "current_value_ppb": "none (cell absent)",
            "current_binding": "none",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "IN (India FSSAI); SG baby-food 100 as fallback",
            "proposed_instrument": "IN FSS Contaminants Regs — infant foods tAs 0.05 mg/kg (product 'as such'); SG Food Regs Tenth Schedule baby food tAs 0.1 mg/kg",
            "source": "register: in_tas_...50 (primary-confirmed) ; sg_foodregs_2026_baby_food_tas_100",
            "confidence": "high — IN 50 'as such' applies at face value to both as_sold (teething) and as_consumed fresh purees/mixed-meals; strictest applicable total-As"
          },
          {
            "subcat": "infant-formula-powder / infant-formula-rtf-liquid (cow+soy)",
            "analyte": "tAs",
            "current_value_ppb": "none (cell absent)",
            "current_binding": "none",
            "proposed_value_ppb": "50 (powder, direct) / RTF needs basis handling",
            "proposed_jurisdiction": "IN (India FSSAI); SG infant-formula 100 fallback",
            "proposed_instrument": "IN infant milk substitute tAs 0.05 mg/kg as-sold; SG infant formula tAs 0.1 mg/kg",
            "source": "register: in_tas_...50 (primary-confirmed) ; sg_foodregs_2026_infant_formula_tas_100",
            "confidence": "medium — powder cells clean (as_sold IN 50 direct); RTF-liquid (as_consumed) basis ambiguous because IN 'infant milk substitute as such' is powder-basis, so 50 on a ready-to-feed liquid is unconfirmed and may need conversion rather than face value"
          },
          {
            "subcat": "baby-cereals-dry-non-rice / baby-cereals-dry-rice-based / teething-and-snacks (grain-based)",
            "analyte": "Cr",
            "current_value_ppb": "none (registered not_material)",
            "current_binding": "not_material",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "HK (Hong Kong Cap 132V)",
            "proposed_instrument": "Food Adulteration (Metallic Contamination) Regulations Cap 132V, Part 2 item 7 (Chromium) — Cereals total-Cr 1.0 mg/kg",
            "source": "register: hk_cap132v_crtotal_cereals_1000 — this review confirmed chromium is metal item 7 in Cap 132V and Cereals is a regulated food group (CFS Sept-2025 guidelines current); cereals=1 mg/kg corroborated by secondary source",
            "confidence": "high — real, current, correct species (total Cr, not Cr-VI), same-matrix (cereals->baby cereals) read-across, clean as_sold(dry)-to-as_sold(dry) basis; compiler's not_material rationale weighed only a China dairy analogy and overlooked this stronger same-matrix source"
          },
          {
            "subcat": "non-root-vegetable-purees / root-vegetable-purees-single-ingredient",
            "analyte": "Cr",
            "current_value_ppb": "none (registered not_material)",
            "current_binding": "not_material",
            "proposed_value_ppb": "500",
            "proposed_jurisdiction": "HK (Hong Kong Cap 132V)",
            "proposed_instrument": "Cap 132V Part 2 item 7 — Vegetables (other than pulses) total-Cr 0.5 mg/kg",
            "source": "register: hk_cap132v_crtotal_vegetables-other-than-pulses_500 — HK vegetables-Cr confirmed regulated (item 7); exact 0.5 mg/kg is register-sourced, not independently web-confirmed this pass",
            "confidence": "medium — read-across is valid (vegetables->veg puree, fresh-to-fresh basis comparable); exact proposed number depends on HK veg Cr=0.5 mg/kg (register) vs 1.0 mg/kg (one unreliable secondary summary) — verify the figure before publishing"
          },
          {
            "subcat": "mixed-meals-non-rice / mixed-meals-rice-containing",
            "analyte": "Cr",
            "current_value_ppb": "none (registered not_material)",
            "current_binding": "not_material",
            "proposed_value_ppb": "500 (strictest applicable component = vegetables; cereal/meat components = 1000)",
            "proposed_jurisdiction": "HK (Hong Kong Cap 132V)",
            "proposed_instrument": "Cap 132V Part 2 item 7 — component read-across (Vegetables 0.5 / Cereals & Meat & Fish 1.0 mg/kg)",
            "source": "register: hk_cap132v_crtotal_vegetables-other-than-pulses_500 (+ _cereals_1000, _meat-of-animal_1000, _fish_1000)",
            "confidence": "medium — HK regulates every component so a component read-across is defensible; the value choice (500 strictest-component vs 1000 dominant cereal/meat component) is a governance judgment, not a settled number"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "baby-cereals-dry-non-rice / baby-cereals-dry-rice-based / teething-and-snacks (grain)",
            "analyte": "Cr",
            "verdict": "WEAK / not-material is not the best-supported tag (CONFIRMED, on corrected grounds). The audit's stated premise ('the only food Cr limits in the register are dairy') is a misquote — the compiled rationale actually says 'no government sets a Cr ML for any non-dairy INFANT food' (true, HK's are general-food) plus a Cr-III/Cr-VI materiality argument. But the rationale overlooked HK Cap 132V Cereals total-Cr 1.0 mg/kg, a strong SAME-MATRIX general read-across (verified real: chromium = Cap 132V metal item 7; current Sept-2025). Method v2.0 prefers a disclosed near-neighbour read-across over an n/m determination when a good one exists, so the label should move.",
            "recommendation": "reclassify Cr from not_material to gov read-across = HK Cap 132V Cereals 1000 ppb; KEEP the reflex Cr-VI speciation as an additional control. Net effect tightens (a real ceiling replaces 'none')."
          },
          {
            "subcat": "non-root-vegetable-purees / root-vegetable-purees-single-ingredient",
            "analyte": "Cr",
            "verdict": "WEAK (CONFIRMED, same corrected grounds) — HK Cap 132V Vegetables (other than pulses) total-Cr 0.5 mg/kg is a same-matrix read-across (vegetables->vegetable puree, fresh-to-fresh basis) that the not_material rationale overlooked. HK chromium regulation of vegetables is verified (item 7); the exact 0.5 mg/kg figure is register-sourced and should be re-confirmed against Part 2 of the Schedule before publishing.",
            "recommendation": "reclassify to gov read-across = HK Vegetables 500 ppb (verify exact figure); keep reflex Cr-VI speciation control."
          },
          {
            "subcat": "mixed-meals-non-rice / mixed-meals-rice-containing",
            "analyte": "Cr",
            "verdict": "WEAK (CONFIRMED) — mixed meals contain cereal/vegetable/meat/fish components, all of which HK Cap 132V regulates for total-Cr (0.5-1.0 mg/kg, verified as metal item 7). A component read-across therefore exists and not_material understates the available basis. The specific value (500 strictest-component vs 1000 dominant-component) remains a governance judgment.",
            "recommendation": "reclassify to component read-across (strictest applicable component, vegetables 500); keep speciation control."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification of the Cat-1 audit against origin/main. Verdict: 7 of 8 tighten candidates CONFIRMED, 1 REJECTED; 3 of 7 weak_not_material entries CONFIRMED as corrections, 4 dropped. Coverage_gaps (4) and ppb_pushbacks (0) kept as-is (structural). Two external regs were run to primary/near-primary sources. (1) INDIA FSSAI tAs: verified against the FSS (Contaminants) 2011 text — arsenic for 'Infant Milk substitute and Infant foods' = 0.05 mg/kg (50 ppb), labelled 'Arsenic' hence TOTAL (not speciated), product 'as such' (as-sold). Confirmed as the strictest infant/baby tAs in the register (next SG 100). tAs is genuinely absent from all 12 baby-food cells (mandatory total; iAs cannot satisfy it), so all 4 tAs candidates are CONFIRMED. Caveats carried into the candidates: (a) the rice-based-cereal cell binds US iAs=100 while the proposed IN tAs=50 is lower — physically iAs<=tAs, so tAs=50 renders the iAs cell non-binding and reveals an internal iAs>tAs inconsistency to resolve (does not invalidate the value); (b) the RTF-liquid formula cell is as_consumed while IN's 'infant milk substitute as such' is powder-basis, so applying 50 at face value to a ready-to-feed liquid is a basis question (candidate downgraded to medium). (2) HONG KONG Cap 132V chromium: verified real and current — chromium is metal item 7 in Part 2 of the Schedule; Cereals, Vegetables (other than pulses) and Fish are confirmed regulated food groups; latest CFS guidelines are Sept 2025 and chromium was among the original regulated metals (the 2025 amendment ADDED 27 MLs, it did not remove chromium). Species (total Cr, not Cr-VI) and basis both check out (cereals dry->HK cereals dry; puree fresh->HK vegetables fresh). The compiled not_material rationale weighed only a China dairy analogy and overlooked these stronger same-matrix HK read-across values, so the 3 grain/vegetable/mixed-meal Cr corrections are CONFIRMED (reclassify not_material -> gov read-across, keep the reflex Cr-VI speciation as an additional control). Exact values: cereals 1.0 mg/kg (secondary-confirmed) and fish 1.0 mg/kg accepted; the vegetables 0.5 mg/kg figure is register-only and flagged for a Part-2-Schedule re-check (candidate at medium). REJECTED: the seafood-cell Cr tighten (HK Fish 1000) — those 7 JSONs are confirmed NON-Cat-1 (absent from cat1-config.json's 12 subcats; they are misfiled Cat-6 seafood), so the correct action is relocation to Cat-6, where seafood Cr is adjudicated in context; injecting a Cr cell into misfiled Cat-1 files is scope-inappropriate. DROPPED from weak_not_material: fruit-juice Cr (not-material upheld — no on-point sovereign Cr limit for fruit juice; HK regulates vegetables/cereals/fish, not fruit juice), and the three seafood/seaweed items (fresh-seafood Sn TRUE, seaweed MeHg TRUE, predatory-fish MeHg WEAK) — all Cat-6 misfiled cells, deferred to the Cat-6 standard (the predatory-fish MeHg 'add an explicit tHg-bounds-MeHg determination' point is valid but belongs to Cat-6). Confirmed but kept in coverage_gaps (not a tighten): the soy formula-powder Cd mis-binds to IL's general powder row il_fcs2016_cd_14_1 (=10, soy_class 'both') instead of the soy-specific 20 (EU/GSO/IL-14_3) — verified in the compiled JSON. category_confidence lowered to 0.45: min-selection on the 7 present analytes is trustworthy, but the review CONFIRMED the compiled standard omits the mandatory tAs total everywhere, mislabels Cr not_material on ~10 cells where a real HK read-across exists, and mis-binds soy Cd — so current limits do not fully reflect the strictest-government position. Finding laddered to the ledger as OI-20260814-cat1-tas-cr-verified (human-gated)."
      },
      {
        "category": "Cat 3 — Grains, Cereals, and Rice Products",
        "cells_audited": 132,
        "category_confidence": 0.3,
        "coverage_gaps": [
          {
            "subcat": "ALL 12 subcats (rice-bulk-grain, breakfast-cereal-rice-based, pasta-rice-based, rice-noodles, rice-snacks-crackers, flour-non-rice, breakfast-cereal-non-rice, pasta-wheat-based, bread-and-baked-goods, grain-based-snacks, other-grain-products, rice-beverages)",
            "analyte": "total Cr",
            "issue": "No distinct total-Cr cell exists in the panel; total Cr is folded into a single Cr-VI not_material cell whose control text asserts 'No government sets a total-chromium ML for grain/cereal products in any jurisdiction.' That is FALSE. Our OWN register row hk_cap132v_crtotal_cereals_1000 (HK Cap 132V, Cereals, Cr-total = 1000 ug/kg) is directly applicable and was never selected, and China GB 2762-2022 Table 7 sets grain + milled-grain-products total Cr = 1.0 mg/kg = 1000 ug/kg (rice counted as brown rice). total Cr should be a gov cell = 1000 ppb (binding HK Cap 132V, corroborated CN GB 2762) for every solid grain subcat; Cr-VI species stays as reflex-speciation control. This is one of the 8 mandatory totals and is currently uncovered."
          },
          {
            "subcat": "bread-and-baked-goods, grain-based-snacks, rice-noodles (type=gov CN) + flour-non-rice, breakfast-cereal-non-rice, breakfast-cereal-rice-based, rice-snacks-crackers (type=read_across CN)",
            "analyte": "Al",
            "issue": "Al values (100000 / 200000 ppb) are sourced from China GB 2760-2024, which is the food-ADDITIVE use standard (permitted aluminium-additive residue in leavened/baked/starch products), NOT a contaminant maximum level. GB 2762 (the contaminants standard) does not regulate Al at all in any food. Presenting an additive-use residue cap as the contaminant 'government limit' conflates two regulatory instruments; the config's own _read_across_canon states 'no government sets a grain Al ML anywhere.' Al should resolve as not_material/control (additive-derived Al governed by ADI, reflex control), not as a gov/read_across number."
          },
          {
            "subcat": "other-grain-products, pasta-rice-based, pasta-wheat-based, rice-bulk-grain, rice-beverages-rice-milk",
            "analyte": "Al",
            "issue": "These Al cells carry basis_kind 'occurrence' (5000/1500/1000 ppb; 'UK FERA TDS provisional') or 'precautionary' (rice-beverages 1000 ppb). Occurrence, precautionary, feasibility-selected and literature-baseline numeric rationales are RETIRED under CLAUDE.md Part 19 / Method v2.0 and carry no compliance weight. These are live method-drift violations: an occurrence/precautionary number is being published as a certification ceiling. Reclassify to not_material/control."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "rice-bulk-grain",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022 Table 3) corroborated by HK (Cap 132V item 12, amended eff. 2025-09-05)",
            "proposed_instrument": "GB 2762-2022 Table 3 total mercury, 'Grains and grain products: paddy/brown rice, rice powder, corn, corn flour/grit, wheat, wheat flour' = 0.02 mg/kg; = HK Cap 132V item 12 (Mercury as total mercury), rice/husked/polished rice 0.02 mg/kg",
            "source": "GB 2762-2022 Table 3 (USDA GAIN CH2023-0040, web-verified) + register hk_cap132v_thg_...rice-maize-wheat_20. EU 2018/73 10 ppb REJECTED (pesticide-residue MRL, not a contaminant ML).",
            "confidence": "high — rice directly named in both GB and HK; species=total Hg (not MeHg), basis=as-sold, both instruments current"
          },
          {
            "subcat": "breakfast-cereal-rice-based",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 rice/rice-powder total mercury 0.02 mg/kg = HK Cap 132V item 12; read-across to processed rice cereal",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium-high — read-across from named rice forms to a processed rice cereal"
          },
          {
            "subcat": "pasta-rice-based",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 rice (powder) total mercury 0.02 mg/kg = HK Cap 132V item 12; read-across to rice pasta",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium-high — read-across from rice flour to rice pasta"
          },
          {
            "subcat": "rice-noodles",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 rice (powder) total mercury 0.02 mg/kg = HK Cap 132V item 12; read-across to rice noodles",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium-high — read-across from rice flour to rice noodles"
          },
          {
            "subcat": "rice-snacks-crackers",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 rice total mercury 0.02 mg/kg = HK Cap 132V item 12; read-across to rice snacks",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium-high — read-across from milled rice to rice snacks"
          },
          {
            "subcat": "flour-non-rice",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 names 'corn flour' and 'wheat flour' at 0.02 mg/kg; = HK Cap 132V item 12 (maize flour, wheat flour)",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...maize-flour-wheat_20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "high — wheat flour and corn/maize flour named directly in both instruments"
          },
          {
            "subcat": "breakfast-cereal-non-rice",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 corn/corn flour/wheat/wheat flour 0.02 mg/kg = HK Cap 132V item 12; oat/barley portion by read-across",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...maize-wheat_20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium-high — corn/wheat named; read-across to processed cereal and unnamed grains"
          },
          {
            "subcat": "pasta-wheat-based",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 wheat/wheat flour 0.02 mg/kg = HK Cap 132V item 12 (wheat, wheat flour); durum semolina is milled wheat",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...wheat_20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "high — wheat and wheat flour named directly; pasta is a wheat-flour product"
          },
          {
            "subcat": "bread-and-baked-goods",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 wheat flour 0.02 mg/kg read-across; = HK Cap 132V item 12. EU 2018/73 cereals MRL 0.01 (10 ppb) NOT used — pesticide-residue instrument, not a contaminant ML.",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...wheat_20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium — read-across from wheat flour to a multi-ingredient baked product; value is 20, not the audit's alternative 10"
          },
          {
            "subcat": "grain-based-snacks",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 corn/wheat 0.02 mg/kg read-across; = HK Cap 132V item 12. EU 2018/73 MRL 0.01 (10 ppb) NOT used.",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium — read-across to heterogeneous grain snacks; value is 20, not 10"
          },
          {
            "subcat": "other-grain-products",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL il_fcs2016_thg_4_cereals_and_cereal_products_including_wheat_and_rice_30",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "CN (GB 2762-2022) / HK (Cap 132V) by read-across",
            "proposed_instrument": "GB 2762-2022 Table 3 named cereals 0.02 mg/kg; oat/barley/millet/quinoa take 20 by read-across from the nearest named grain. EU 2018/73 MRL 0.01 (10 ppb) NOT used (pesticide instrument).",
            "source": "GB 2762-2022 Table 3 (GAIN CH2023-0040) + register hk_cap132v_thg_...20. EU-2018/73 10 ppb REJECTED.",
            "confidence": "medium — read-across to unnamed grains; defensible value is 20, not the audit's 10"
          },
          {
            "subcat": "rice-bulk-grain (+ total-Cr for all 11 solid subcats)",
            "analyte": "total Cr",
            "current_value_ppb": "not_material (published as 'no total-Cr ML anywhere')",
            "current_binding": "none (Cr-VI not_material control; config even read-across from GB 2762 milk powder 2000)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "CN (GB 2762-2022 Table 7) corroborated by HK (Cap 132V item 7, Cereals)",
            "proposed_instrument": "GB 2762-2022 Table 7 chromium 'Grains 1.0 / Milled grain products 1.0 mg/kg' (Cr basis = total chromium) = HK Cap 132V item 7 Chromium, Cereals 1.0 mg/kg",
            "source": "GB 2762-2022 Table 7 (USDA GAIN CH2023-0040, web-verified) + register hk_cap132v_crtotal_cereals_1000. Species=total Cr (mandatory total), distinct from Cr-VI reflex control.",
            "confidence": "high — two credible sovereigns set an explicit grain total-Cr ML; the current 'no ML' claim is false"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "ALL 12 subcats",
            "analyte": "Cr-VI / total Cr",
            "verdict": "FALSE as written — CONFIRMED. The control text says 'No government sets a total-chromium ML for grain/cereal products in any jurisdiction.' Verified against primary source: GB 2762-2022 Table 7 sets grain total Cr = 1.0 mg/kg (Grains 1.0 / Milled grain products 1.0), and HK Cap 132V item 7 sets Cereals Cr = 1.0 mg/kg. A total-Cr ML demonstrably exists in two sovereign standards.",
            "recommendation": "Reclassify: total Cr = gov 1000 ppb (binding HK Cap 132V, corroborated CN GB 2762-2022 Table 7). Keep Cr-VI (species) as not_material/reflex-speciation control (no government sets a Cr-VI species ML for grain). Rewrite the control text so it stops denying the total-Cr ML. Also fix the config default that read-across from GB 2762 milk powder (2000) when a direct GB 2762 grain value (1000) exists in the same standard."
          },
          {
            "subcat": "ALL solid subcats",
            "analyte": "Sn",
            "verdict": "TRUE — CONFIRMED. Every tin ML in the register and in GB 2762-2022 Table 5 is scoped to tin-plated/canned containers; bulk/packaged grain is not sold in tinplate. No contaminant pathway for as-sold dry grain.",
            "recommendation": "Keep not-material. Optional: attach an explicit control noting canned grain products route to Cat 7 and carry the Sn 250 mg/kg / EU 50 mg/kg canned flag there, for defensibility."
          },
          {
            "subcat": "ALL subcats",
            "analyte": "MeHg",
            "verdict": "TRUE — CONFIRMED. GB 2762-2022 Table 3 methylmercury column is populated only for aquatic animals and edible fungi; grains show '—'. EU 2023/915 methylmercury applies only to fishery products. No grain MeHg ML exists; the fraction is bounded by the tHg control.",
            "recommendation": "Keep not-material; ensure the bounding tHg value is corrected to 20 ppb per the confirmed tHg tighten (currently states 30)."
          },
          {
            "subcat": "all non-rice subcats (flour-non-rice, bread, breakfast-cereal-non-rice, pasta-wheat, grain-based-snacks, other-grain-products)",
            "analyte": "iAs",
            "verdict": "TRUE — CONFIRMED. GB 2762-2022 Table 4 sets inorganic arsenic only for rice forms (paddy/brown rice 0.35, rice powder 0.2); non-rice grains and milled products carry a total-arsenic limit (0.5 mg/kg) only, with iAs '—'. Arsenic hyperaccumulation is rice-specific.",
            "recommendation": "Keep not-material; the tAs gov cell already covers the arsenic pathway for these non-rice forms."
          },
          {
            "subcat": "rice-beverages-rice-milk",
            "analyte": "Pb (Cd/tAs/Ni no-ML upheld)",
            "verdict": "CHALLENGEABLE — CONFIRMED for Pb, NARROWED. Verified GB 2762-2022 Table 1: 'Beverages (excluding packaged drinking water, fruit/veg juice, milk-containing drink, powdered drink)' Pb = 0.3 mg/kg (300 ppb). A liquid plant-based rice drink is not carved out, so a sovereign general-beverage Pb ML applies; the current control cell's 'no lead ML specific to...' basis is overstated for Pb. However Cd/tAs/Ni no-ML claims HOLD: GB 2762 Table 2 has no general-beverage Cd, Table 4 lists only packaged water for beverages (no general tAs), and EU 2024/1987 nickel is scoped to cereal grains and juices/nectars, not rice drinks.",
            "recommendation": "Reclassify rice-beverage Pb from not_material/control to gov (or disclosed read-across) at CN general-beverage Pb 300 ppb, as_consumed/wet-weight basis. Keep Cd, tAs, and Ni as not-material (verified no applicable general-beverage ML)."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "bread, grain-based-snacks, rice-noodles, flour-non-rice, breakfast-cereal-non-rice, breakfast-cereal-rice-based, rice-snacks-crackers",
            "analyte": "Al",
            "issue": "The Al number is dimensionally ppb (mass basis) so the unit is fine, but the BASIS is wrong: GB 2760-2024's 100/200 mg/kg is a permitted-additive residue limit (aluminium-containing leavening/firming agents), regulated as an additive-use maximum and ultimately by ADI, not a contaminant mass-fraction ML. Correct basis: additive-use residue (or not_material contaminant with reflex control), never a contaminant 'government limit' cell."
          },
          {
            "subcat": "rice-beverages-rice-milk",
            "analyte": "iAs (and all cells)",
            "issue": "native_basis is as_consumed liquid. The binding EU rice-drink iAs 30 is expressed ug/kg (wet weight); for a liquid this is effectively ug/L (rice-milk density ~1.0, so ppb ug/kg ~ ug/L). ppb is acceptable but the cell should state wet-weight/as-consumed basis explicitly so it is never silently compared against the as_sold dry-grain rice cells (150 ppb milled)."
          }
        ],
        "summary": "Adversarial re-verification of the 13 Cat-3 tighten candidates against origin/main register + primary sources. CONFIRMED 12, REJECTED 1, and rejected one embedded sub-variant across the tHg set. (1) tHg 30->20 CONFIRMED for all 11 solid subcats: GB 2762-2022 Table 3 sets total mercury for 'Grains and grain products (paddy/brown rice, rice powder, corn, corn flour/grit, wheat, wheat flour)' = 0.02 mg/kg (20 ppb), verified via USDA GAIN CH2023-0040; corroborated by HK Cap 132V item 12 (total mercury, same cereal scope), current under the amendment effective 2025-09-05. Species (total Hg, not MeHg), basis (as-sold), and currency all check out. REJECTED the EU 2018/73 10-ppb alternative bundled into several candidates: it is a pesticide-residue MRL under Reg 396/2005, a different instrument/basis than a contaminant ML (the register row itself flags it as 'not the 2023/915 contaminants framework'). The defensible tightened value is 20, not 10, for every solid subcat including other-grain-products (oat/barley/millet/quinoa = 20 by read-across from named cereals). (2) total Cr -> gov 1000 CONFIRMED for all 11 solid subcats: GB 2762-2022 Table 7 sets Grains 1.0 / Milled grain products 1.0 mg/kg (Cr basis = total chromium), verified via GAIN; corroborated by HK Cap 132V item 7 (Cereals 1.0). The Cr-VI cell's control text ('No government sets a total-chromium ML for grain/cereal products in any jurisdiction') is demonstrably FALSE; total Cr is a mandatory total and is currently uncovered, and the config even read-across from GB 2762 milk powder (2000) while a direct GB 2762 grain value (1000) sat in the same standard. (3) REJECTED Pb 200->100 (processed rice-based via Cuba NC 877 'processed cereals' 100): does not clearly hold. The value lives in NC 493:2008, which the register note admits is not present in the source PDF (only cross-referenced), and the parallel MERCOSUR/Paraguay instrument treats 'rice derivatives' as a category DISTINCT from processed cereals (Pb 200) — direct evidence that this regulatory tradition does not fold rice products into 'processed cereals'; the scope extension to rice-based products is unconfirmable, so it fails the default-reject bar (audit itself marked it LOW). weak_not_material: Cr-VI/total-Cr FALSE CONFIRMED; Sn (canned-only, GB 2762 Table 5), MeHg (fish/fungi-only, GB 2762 Table 3 + EU 2023/915), and non-rice iAs (GB 2762 Table 4 sets iAs only for rice forms; non-rice grains get tAs 0.5 only) all CONFIRMED correctly not-material; rice-beverage not_material CONFIRMED challengeable but NARROWED to Pb only — GB 2762 Table 1 general-beverage Pb 0.3 mg/kg (300 ppb) applies to liquid rice drinks (not carved out), so the 'no ML' basis is overstated for Pb, while Cd/tAs/Ni no-ML claims hold. category_confidence 0.30: the two structural findings (tHg too loose, total Cr uncovered) are confirmed wrong across the whole category and Al is structurally mis-provenanced per the coverage gaps, so current cells do not reflect the world-strictest limit. Currency note: GB 2762-2022 is in force today (2026-08-14); GB 2762-2025 takes effect 2026-09-02 and its grain Hg/Cr entries should be re-checked before the changeover, though the 2022 mercury amendment touched only aquatic animals/fungi (grains unchanged)."
      },
      {
        "category": "Category 6 — Seafood (config-based: tools/standards/seafood-config.json; compiled cells in data/workbench/standards/cat1-compiled/{fish-freshwater,fish-marine-non-predatory,fish-marine-predatory,shellfish,cephalopods,canned-seafood,seaweed-kelp-foods}.json on origin/main)",
        "cells_audited": 77,
        "coverage_gaps": [
          {
            "subcat": "all-7-subcats",
            "analyte": "total Cr",
            "issue": "total Cr (a mandatory Big-8 total) is OMITTED from the compiled panel for EVERY seafood subcat, yet the register already contains applicable government MLs: hk_cap132v_crtotal_fish_1000 (HK Cap 132V, fish, 1000 ppb) and in_fssai2016_crtotal_001_all_fishery_products_12000 (India FSSAI 2016, all fishery products, 12000 ppb). China GB 2762 also sets total Cr for aquatic animals at 2.0 mg/kg (2000 ppb). REGISTER-MISS: the seafood-config panel omits Cr entirely so no cell was generated. Fillable now: finfish subcats -> HK 1000 (gov); shellfish/cephalopods/canned -> HK 1000 read-across or India 12000 (gov, all fishery products). VERIFIED against register: hk_cap132v_crtotal_fish_1000 and in_fssai2016_crtotal_001_all_fishery_products_12000 both present; all six animal-seafood compiled cells show total Cr ABSENT."
          },
          {
            "subcat": "seaweed-kelp-foods",
            "analyte": "Ni",
            "issue": "Ni cell is absent, but the register HAS a government ML for this exact form: eu2024_ni_seaweed_30000 (EU 2024/1987, seaweed except wakame, 30000 ppb), eu2024_ni_wakame_40000 (40000 ppb), and ch_vhk_2026_ni_seetang_30000 (Switzerland, 30000 ppb). REGISTER-MISS: seaweed Ni should be a gov cell at 30000 ppb (wakame variant 40000). The config panel excludes Ni so it was never emitted. VERIFIED against register: all three IDs present."
          },
          {
            "subcat": "fish/shellfish/cephalopods/canned (6 non-seaweed subcats)",
            "analyte": "Ni",
            "issue": "Ni cell absent for all animal-seafood subcats. No government sets a Ni ML for fish/crustaceans/molluscs/cephalopods anywhere in the register or (verified) worldwide — EU 2024/1987 nickel covers plant foods and seaweed only, not fishery products. Genuinely unregulated, so Ni here should be published as a substantiated control or not-material cell; currently it is simply MISSING (no determination on record)."
          },
          {
            "subcat": "all-7-subcats",
            "analyte": "Al",
            "issue": "Al (mandatory Big-8 total) absent for every subcat. No government sets an aluminium contaminant ML for seafood (the only register Al 'all food' row, CN 100000, is an aluminium-additive use limit, not a contaminant ML, and does not apply). Al should carry a substantiated not-material/control determination per subcat; currently no cell and no determination exists."
          },
          {
            "subcat": "all-7-subcats",
            "analyte": "Cr-VI",
            "issue": "Cr-VI species control absent for every subcat. No government sets a food Cr-VI ML anywhere in the register (Cr-VI rows are drinking-water, textiles, leather, fertiliser, toys only). In a reducing food matrix Cr-VI is a method artifact; it should carry an explicit not-material/subsumed-under-total-Cr determination, but no such cell or record exists."
          },
          {
            "subcat": "canned-seafood",
            "analyte": "iAs",
            "issue": "per_country map pools cn_ias_canned-complementary-foods-for-infants-a_100 (an INFANT complementary-food scope limit) into an adult canned-tuna cell. Value 100 equals EU 100 so the binding is unaffected, but this is a scope/provenance defect: an infant-food row was routed into a general canned-seafood cell."
          },
          {
            "subcat": "fish-freshwater",
            "analyte": "tHg",
            "issue": "minor scope stretch (conservative direction): freshwater subcat (tilapia, catfish, carp, trout) binds eu2023_hg_fish_low_300, whose register scope is 'listed lower-mercury fish and cephalopods/marine gastropods'. Trout is listed; tilapia/catfish/carp are not individually EU-listed, so applying 300 rather than the EU general 500 is a slight over-reach in the stricter (consumer-protective) direction. Not a consumer-protection risk; flag only for citation precision."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "seaweed-kelp-foods",
            "analyte": "Cd",
            "current_value_ppb": "2000",
            "current_binding": "gov — TH th_moph414_2020_cd_dried_seaweed_2000; per_country {TH 2000, SG 2000, IL 5000}; dried-seaweed / dry-weight (cell native_basis=as_sold)",
            "proposed_value_ppb": "500",
            "proposed_jurisdiction": "FR (France)",
            "proposed_instrument": "CSHPF edible-seaweed maximum for Cd = 0.5 mg/kg dry matter (recommendations of 14 June 1988 and 9 January 1990), enforced by DGCCRF for official controls; CONFIRMED verbatim in ANSES opinion 2017-SA-0070 Table 3 (and lines 90-91: 'a maximum cadmium concentration in edible seaweed of 0.5 mg.kg-1 dry weight'). ANSES proposes tightening to 0.35 mg/kg DM but that is an unadopted advisory, so under government-limit-only the selectable value is 0.5 mg/kg DM = 500 ppb, not 350. Instrument caveat: the CSHPF value is a government recommendation, not a decree — but that is the same instrument class as the FDA final-guidance action levels the register already tags as gov, so it qualifies as a regulatory-alignment sovereign anchor.",
            "source": "https://www.anses.fr/en/system/files/ERCA2017SA0070EN.pdf (ANSES opinion 2017-SA-0070, Table 3 'Maximum values for trace elements and iodine in seaweed used as a vegetable or condiment recommended by the CSHPF, in mg.kg-1 DM': Cadmium 0.5). Register FR-row count = 0 (France entirely absent), which is why the cell missed it.",
            "confidence": "high — primary-source confirmed; dry-weight basis matches the dried-seaweed cell exactly; Cd species match; not superseded (ANSES/2017-SA-0070 states EU sets no seaweed-food Cd ML, only supplements at 3.0 mg/kg). Sole caveat: CSHPF instrument is an enforced recommendation, not a decree."
          },
          {
            "subcat": "seaweed-kelp-foods",
            "analyte": "tHg",
            "current_value_ppb": "2500",
            "current_binding": "gov — IL il_fcs2016_thg_7_1_dried_seaweed_2500 (sole per_country entry); dried-seaweed / dry-weight (cell native_basis=as_sold)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "FR (France)",
            "proposed_instrument": "CSHPF edible-seaweed maximum for Mercury (TOTAL mercury) = 0.1 mg/kg dry matter (recommendations of 14 June 1988 and 9 January 1990); CONFIRMED verbatim in ANSES opinion 2017-SA-0070 Table 3 (Element 'Mercury', Maximum level 0.1 mg.kg-1 DM). The French table value is total mercury, which is the correct species for the tHg cell (not MeHg). Same government-recommendation instrument note as the Cd row.",
            "source": "https://www.anses.fr/en/system/files/ERCA2017SA0070EN.pdf (ANSES opinion 2017-SA-0070, Table 3: Mercury 0.1 mg/kg DM). Cross-corroborated by CEVA 2019 regulatory review and the Banach et al. China/Europe comparative assessment (ScienceDirect S0924224423003199).",
            "confidence": "high — primary-source confirmed via Table 3; dry-weight basis matches the dried-seaweed cell; total-Hg species matches the tHg cell; not superseded (no EU seaweed-food Hg ML). Same enforced-recommendation caveat as Cd; 25x stricter than the current IL 2500 binding, so highly material."
          }
        ],
        "weak_not_material": [
          {
            "subcat": "all non-canned subcats (freshwater, marine non-predatory, marine predatory, shellfish, cephalopods, seaweed)",
            "analyte": "Sn",
            "verdict": "CONFIRMED TRUE — challenge fails. Full register Sn sweep: every Sn row is either canned-product, tinplate/tin-coated-container, or a canned catch-all ('any food' / 'foods in general' set at the ~250 mg/kg tin-migration ceiling, e.g. sg_foodregs_2026_any_food_sn_250000, th_moph414_2020_sn_food_other_250000). The only historic 'All food' Sn row (hk_cap132v_sn_superseded_all-food-230_pre2018) is explicitly SUPERSEDED and replaced by canned-only rows. No sovereign sets a non-canned-seafood Sn matrix-accumulation limit. Tin is a can-migration analyte; fresh/frozen product without tinplate contact has no tin exposure pathway. not-material holds.",
            "recommendation": "keep not-material, retain the canned-reflex control + ICP-MS verification already on the cell; investigate any quantifiable tin as unintended metal contact."
          },
          {
            "subcat": "seaweed-kelp-foods",
            "analyte": "MeHg",
            "verdict": "CONFIRMED TRUE — challenge fails. Full register MeHg sweep: every MeHg row is fish / fishery / crustacean scope; there are zero seaweed MeHg MLs in the register or (verified) worldwide. Seaweed is a marine primary producer; methylmercury biomagnifies up the food chain, not into algae, so MeHg is a negligible fraction of total Hg and is bounded by the tHg cell (dried-seaweed tHg 2500, tightening to France 100). MeHg <= tHg holds.",
            "recommendation": "keep not-material; note the bound tightens automatically if the tHg cell is tightened to France 100 ppb. Consider a tHg-triggered reflex MeHg speciation (already specified)."
          },
          {
            "subcat": "fish/shellfish/cephalopods/canned",
            "analyte": "MeHg",
            "verdict": "CONFIRMED — subsumption sound. Verified compiled tHg bindings against the lowest applicable register MeHg per cell: marine-non-predatory / freshwater / cephalopods tHg=300 vs general-fish MeHg=500 (tHg stricter); shellfish tHg=500 vs crustacean MeHg=1000 (tHg stricter); canned-seafood tHg=500 vs MeHg 500/1000; marine-predatory tHg=1000 vs lowest predatory MeHg=1000 (equal). Because MeHg is a fraction of total mercury, passing tHg guarantees MeHg compliance in every cell, and no MeHg ML sits below the binding tHg ceiling. On origin/main all six MeHg cells are already type=subsumed (not dual-valued). MeHg <= tHg holds.",
            "recommendation": "keep subsumed; no separate MeHg ceiling warranted."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "seaweed-kelp-foods (all cells)",
            "analyte": "Pb, iAs, tAs, tHg, Cd",
            "issue": "ppb (mass µg/kg) is the correct unit, BUT these cells are on a DRY-WEIGHT (as_sold dried) basis while all six animal-seafood subcats are as-consumed WET weight. ppb is fine as long as the dry-weight basis is disclosed and never numerically compared against the wet-weight fish ppb values. Correct basis label: µg/kg dry weight. NOTE: the two confirmed France tightenings (Cd 500, tHg 100) are themselves mg/kg dry-matter values, so they are basis-consistent with these dry-weight seaweed cells."
          },
          {
            "subcat": "canned-seafood",
            "analyte": "Sn",
            "issue": "ppb technically fits (MX 100 mg/kg = 100000 µg/kg) and is retained, but note the value is a can-migration ceiling, not a matrix-accumulation limit; keep it flagged as tinplate-migration so it is not read as an intrinsic-contamination number."
          }
        ],
        "category_confidence": 0.5,
        "summary": "Adversarial verification of Cat-6 Seafood on origin/main. Both tighten candidates CONFIRMED (2/2), all three not-material determinations CONFIRMED (3/3), zero rejected. TIGHTEN CANDIDATES: seaweed Cd 2000->500 and seaweed tHg 2500->100 both verified against the PRIMARY source — ANSES opinion 2017-SA-0070 Table 3 tabulates the CSHPF edible-seaweed maxima as Cadmium 0.5 and Mercury 0.1 mg/kg dry matter (also iAs 3, Pb 5, Sn 5, iodine 2000). They pass all three adversarial gates: REAL (primary-source, not a hallucination); APPLICABLE (dry-matter basis matches the as_sold dried-seaweed cell; Cd=Cd; the French 'Mercury' value is TOTAL mercury, matching the tHg cell, not MeHg; form = edible seaweed as vegetable/condiment = nori/wakame/kombu/dulse); and CURRENT/not-superseded (ANSES states the EU sets no seaweed-food Cd/Hg ML — only supplements Cd 3.0 — so the French national maxima stand; ANSES's proposed 0.35 Cd is an unadopted advisory, so 500 remains the selectable government value, not 350). France has 0 rows in the register, which is exactly why the compiler missed these. Sole caveat carried into the confidence notes: the CSHPF value is an enforced government recommendation rather than a decree, but that is the same instrument class as the FDA final-guidance action levels already tagged gov in the register, so it qualifies as a regulatory-alignment anchor. NOT-MATERIAL: (1) Sn on non-canned subcats — a full register sweep shows every Sn row is canned/tinplate-migration or a canned 'any food' catch-all at the ~250 mg/kg migration ceiling, and the one historic 'all food' Sn row is explicitly superseded, so no non-canned Sn matrix limit exists; holds. (2) MeHg on seaweed — zero seaweed MeHg MLs exist and algae (primary producers) do not biomagnify MeHg; holds. (3) MeHg subsumed on fish/shellfish/cephalopods/canned — verified tHg bindings (300/500/1000) are <= the lowest applicable MeHg limits (500/1000) in every cell, and MeHg is a fraction of tHg, so subsumption is sound. coverage_gaps and ppb_pushbacks retained as-is (structural, not candidates); they remain material — total Cr, Ni (seaweed), Al, and Cr-VI are omitted from every subcat and two of those (total Cr via HK 1000 / India 12000; seaweed Ni via EU 2024/1987 30000) are register-miss gaps fillable immediately. category_confidence lowered slightly to 0.50: the animal-seafood cells are MIN-clean and well-anchored, but verification CONFIRMS the seaweed cells are not the global-strictest (France beats them 4x on Cd and 25x on tHg) and that four mandatory panel analytes are missing."
      },
      {
        "category": "Category 9 — Infant and Child Contact Products (non-food; migration/content basis)",
        "cells_audited": 80,
        "coverage_gaps": [
          {
            "subcat": "teething-toys-teethers",
            "analyte": "total Cr",
            "issue": "Panel carries Cr-VI (EU Cat III 53 ppb) but NO standalone total-Cr total. total Cr is one of the 8 mandatory HMTc totals. Register HAS applicable toy-migration total-Cr values (astm_f963_crtotal_soluble 60000, mx_nom252 60000, cn_gb21027 60000, au_customs 60000) that are not bound anywhere. Add a total-Cr cell bound to the strictest same-basis value."
          },
          {
            "subcat": "pacifiers-and-sucking-teething-aids",
            "analyte": "total Cr",
            "issue": "No total-Cr total. Toy soluble/migration total-Cr limits (60000 ppb, ASTM/MX/CN/AU) exist in-register and are unbound. Cr-VI alone does not satisfy the mandatory total-Cr total."
          },
          {
            "subcat": "infant-bottles",
            "analyte": "total Cr",
            "issue": "No standalone total-Cr total; the total-Cr SML (eu_10_2011_crtotal_sml_nd = 10 ppb ND) is present but filed only as the read-across bound under Cr-VI. Surface it as its own total-Cr total per the 8-total requirement."
          },
          {
            "subcat": "infant-bottle-nipples",
            "analyte": "total Cr",
            "issue": "Same as bottles: total-Cr SML value (10 ppb ND) exists as the Cr-VI bound but no standalone total-Cr total is reported."
          },
          {
            "subcat": "sippy-cups-toddler-drinkware",
            "analyte": "total Cr",
            "issue": "No standalone total-Cr total; total-Cr SML (10 ppb ND) present only as Cr-VI bound."
          },
          {
            "subcat": "infant-food-storage-items",
            "analyte": "total Cr",
            "issue": "No standalone total-Cr total; total-Cr SML (10 ppb ND) present only as Cr-VI bound."
          },
          {
            "subcat": "feeding-accessories-child-sized",
            "analyte": "total Cr",
            "issue": "No standalone total-Cr total; total-Cr SML (10 ppb ND) present only as Cr-VI bound."
          },
          {
            "subcat": "diapers-and-components",
            "analyte": "total Cr",
            "issue": "No standalone total-Cr total. Cr-VI reads across REACH entry 72 (1000 ppb). REACH textile entry 72 sets extractable limits for Cr(VI) specifically; no total-Cr textile extractable value exists, so a substantiated not-material/control for total Cr (bounded by the reported metal set) should be recorded rather than leaving the mandatory total silently absent."
          }
        ],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "feeding-accessories-child-sized",
            "analyte": "Sn",
            "verdict": "CONFIRMED WEAK (silicone portion only). Verified against config + repo: the row scope explicitly includes silicone ('spoons, forks, plates, bowls (plastic, stainless steel, silicone, or ceramic)'), yet the Sn not-material rationale lists only 'plastic, stainless, or ceramic' and omits silicone. Condensation-cured silicone uses organotin (DBTDL / tin-octoate) catalysts — the repo's own sibling nipples row already flags an organotin (DBT/DOT) reflex screen and the diaper Sn cell binds REACH entry 20 organotin, so the pathway is established in-repo. Concrete internal inconsistency: two silicone-bearing rows treated differently. NOTE: the inorganic-Sn/tinplate not-material is itself TRUE (no tinplate here); the real gap is the organotin SPECIES, which the inorganic-Sn cell does not bound.",
            "recommendation": "Do NOT reclassify to 'control' (organotin carries its own EU 10/2011 specific-migration limits, so it is not a no-sovereign-number case). Match the nipples-row treatment: keep inorganic-Sn not-material and add a DBT/DOT organotin reflex screen (platinum-cure documentation or organotin speciation) to the reference_method for the silicone portion of the row."
          },
          {
            "subcat": "diapers-and-components",
            "analyte": "tHg",
            "verdict": "CONFIRMED SOUND — adversarial challenge fails. Nyamukamba 2023 (the diaper-metals source routed to this row) measured Pb/Cu/tAs/Zn/Co/Ni/Cr/Cd/Mn/Se and did NOT measure Hg; no mercury source in cellulose fluff / SAP / PE-PP nonwoven; no sovereign diaper-Hg limit. Not-material stands.",
            "recommendation": "Keep not-material; the incoming-material CoA screen is adequate substantiation."
          },
          {
            "subcat": "pacifiers-and-sucking-teething-aids",
            "analyte": "iAs / MeHg",
            "verdict": "CONFIRMED SOUND (applies to all 8 subcategories). No sovereign sets an inorganic-arsenic or methylmercury migration/content limit for any contact product; both are dietary/marine speciations bounded by the reported tAs/tHg ceilings. Consistent with the Category 9 Step-0 lock speciation rules.",
            "recommendation": "Keep not-material across all 8 subcategories; substantiation is sound."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "diapers-and-components",
            "analyte": "Ni",
            "issue": "Cell value 0.5 is NOT ppb and must never be normalized to ppb. Correct native basis is nickel RELEASE, 0.5 µg/cm²/week (EN 1811 / REACH entry 27), a per-area-per-time flux for prolonged skin contact. Config correctly encodes it as `special` with unit µg/cm²/week — preserve that; do not force a mass-basis ppb."
          },
          {
            "subcat": "infant-bottles",
            "analyte": "Pb (all food-contact SML cells)",
            "issue": "Values (Pb 10, Cd 2, tAs 10, tHg 10) are µg/kg of FOOD / food simulant (EU 10/2011 specific migration), not µg/kg of product. Reporting them as bare 'ppb' invites conflation with product-content ppb. Correct basis label: specific migration, mg/kg food simulant. Applies to bottles, nipples, sippy cups, storage, feeding accessories."
          },
          {
            "subcat": "teething-toys-teethers",
            "analyte": "Pb (all toy-migration cells)",
            "issue": "Values are µg/kg of scraped TOY MATERIAL (EN 71-3 element migration), not product content ppb and not µg/kg food. Dimensionally µg/kg, but the basis is migration-from-material — keep the 'element migration, mg/kg toy material' label so it is not read as total product content. Applies to pacifiers and teething-toys rows."
          },
          {
            "subcat": "diapers-and-components",
            "analyte": "Pb (REACH entry 72 read-across cells)",
            "issue": "Values (1000 = 1 mg/kg) are extractable metal µg/kg of homogeneous material after EN 16711 extraction — an extraction basis, not total content and not migration-into-food. Retain the extractable-after-extraction basis label; ppb here is µg/kg material, not µg/kg product."
          }
        ],
        "category_confidence": 0.82,
        "summary": "Adversarial verification against primary regulatory text: 0 of 7 tighten candidates survive; 1 of 5 not-material 'weak' corrections survives (with a corrected remedy); both not-material affirmations verify sound. category_confidence raised 0.6->0.82 because the audit's central doubt was refuted by primary text.\n\nTOY-ROW CATEGORY CANDIDATES REJECTED (the two largest, plus the surface-coating flag). The audit's premise — that a molded soft-silicone/rubber pacifier or teether is a 'pliable' material binding EN 71-3 Category I/II (12-46x stricter across the whole row) — is a category MISREADING. Verbatim primary text (EN 71-3:2013, law.resource.org): clause 7.3.3.2 'Polymeric and similar materials, including laminates' sits UNDER '7.3.3 Category III: Scraped-off', and Table 1 ('Cross-reference table for determining category') assigns solid polymeric materials to Category III. 'Pliable' in the Category I label refers ONLY to 'Pliable modelling materials, including modelling clays and plaster.' A solid molded silicone/rubber pacifier teat or teether is a solid polymeric material = Category III; the config's Cat III binding (Pb 23000, tAs 47000, tHg 94000, Cr-VI 53) is the CORRECT category, not 'the loosest by default.' (Two WebFetch summaries that said 'Category I' were X-column misparses; the 7.3.2-vs-7.3.3 section structure settles it.) Candidate 7 (feeding-accessories -> EN 71-3 Cat I coating) fails on the same misreading plus a self-admitted migration-vs-content basis mismatch.\n\nTOY-ROW tAs/tHg CANDIDATES REJECTED (47000->25000; 94000->60000). The proposed 25/60 come from the single-category ISO 8124-3 soluble-migration family (ASTM F963; China GB 6675.4 = ISO 8124-3, confirmed; Mexico NOM-252 'bioavailable soluble') and Australia Customs (coating-CONTENT basis) — a DIFFERENT regime/basis than EU 2009/48 Cat III three-category scraped-off migration (different test convention, different derived values). Taking the lower nominal across these regimes is the cross-basis min the methodology forbids. The audit's lever — that the analytical-correction defense is 'valid against ASTM but not established for China GB 6675.4' — is factually wrong: GB 6675.4 IS ISO 8124-3 and carries the same soluble-migration/analytical-adjustment convention as ASTM (config's documented defense applies identically). Additionally GB 6675.4 is NOT in the register (only cn_gb21027, student articles: pens/crayons/erasers — a different product scope), and the AU value is coating-content, not migration. Does not clearly hold; audit itself rated these low-medium and conceded the ASTM defense.\n\nNOT-MATERIAL: feeding-accessories Sn CONFIRMED weak for the silicone portion only (row scope explicitly includes silicone; condensation-cured silicone uses organotin catalysts; sibling nipples row already flags an organotin reflex screen while this row's rationale omits silicone) — but the correct remedy is to MATCH the nipples row (keep inorganic-Sn not-material + add a DBT/DOT reflex screen), NOT reclassify to 'control' (organotin has its own EU 10/2011 SMLs). Three other Sn 'weak' claims REJECTED: bottle bodies (PP/PES/PPSU/glass/steel) and PE milk-storage bags carry no organotin pathway, and the sippy-cup config scope is stated as plastic/stainless (no silicone) — the inorganic-Sn tinplate not-material is defensible for these. Diaper-Al 'weak' REJECTED: it is pure analogy to the retired Ni cell — Nyamukamba 2023 measured Pb/Cu/tAs/Zn/Co/Ni/Cr/Cd/Mn/Se but NOT aluminium (verified in wiki/sources/nyamukamba2023-...md), so there is no real, on-point contradicting Al evidence; the Ni cell was retired on an actual Ni exceedance measurement, and the Step-0 methodology retires not-material only when a routed source MEASURES the analyte (the doc explicitly states the Al cell 'carries no contradicting routed source and stand[s]'). Diaper-tHg and pacifier-iAs/MeHg affirmations verify SOUND.\n\ncoverage_gaps (missing standalone total-Cr total on all 8 rows) and ppb_pushbacks (migration/SML/extraction values are ug/kg of food-simulant / toy-material / extraction-material, not product-content ppb; diaper Ni is 0.5 ug/cm2/week, not ppb) retained as-is — both valid, structural, and unaffected by candidate verification."
      },
      {
        "category": "Household Cleaning (Cat 12) — config-based, NOT compiled on origin/main (adversarially verified)",
        "cells_audited": 0,
        "category_confidence": 0.05,
        "coverage_gaps": [
          {
            "subcat": "ALL 21 subcats (all-purpose, kitchen/countertop, bathroom/tub/tile, toilet-bowl, window/glass, floor-cleaners, floor-finishes/strippers, carpet-cleaners, carpet-spot-removers, degreasers, oven/grill/BBQ, appliance-cleaners, descalers, dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids, cleaning-wipes, drain-maintainers, odor-removers, specialty-cleaners-other, disinfectants/sanitizers)",
            "analyte": "Pb",
            "issue": "NO compiled cell exists on origin/main. There is no tools/standards/cat12-config.json, no data/workbench/standards/cat12-compiled/ dir, and no binding-value structure anywhere in origin/main data. The wiki product pages state verbatim 'no peer-reviewed primary or government sources have yet been ingested' and 'thresholds ... continue to be developed ... not on this public page.' Defense dossiers report sources_with_structured_values: 0. The memory-noted 'Cat-12 LIVE (21 subcats, GB 14930.1 anchor)' is on an unmerged branch (claude/exciting-hamilton-33cfe4) or the separate cert repo, NOT on origin/main. Pb IS regulated: GB 14930.1-2022 'heavy metal as Pb' Type A <=30 mg/kg, Type B <=100 mg/kg — but that row was never ingested into regulatory_limits.csv (register holds only the two tAs rows)."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "Cd",
            "issue": "No cell. No sovereign ML found for cleaning products (GB 14930.1 has no standalone Cd limit; EPA Safer Choice / Green Seal GS-8/GS-37 / EU Ecolabel are voluntary program criteria, not sovereign MLs; NY DEC BMP is disclosure-only). Yet occurrence evidence exists: iwegbue2019 quantified Cd in powdered detergents/dish soaps. Gap = needs read-across anchor or a substantiated control; a not-material claim would be FALSE on occurrence grounds."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "tAs",
            "issue": "Only partially anchored. Register has GB 14930.1-2022 tAs Type A=3000 ppb (food-cleaning) and Type B=5000 ppb (tableware/food-contact) — but these two rows are the ONLY sovereign detergent rows in the entire 2994-row register, and they legitimately apply only to the ~4 food-contact subcats (dish soaps manual, automatic dishwasher detergents, rinse aids, food-contact wipes). For the ~17 non-food-contact subcats there is NO sovereign tAs ML at all; they require disclosed read-across or a control. No cell is compiled for any subcat."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "tHg",
            "issue": "No cell, no sovereign ML located for cleaning products. Green Seal/EPA restrict Hg but as voluntary formulation prohibitions, not mass MLs. Requires control or read-across; not-material must be substantiated against Hg occurrence in surfactant feedstocks."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "Ni",
            "issue": "No cell, no sovereign ML. Occurrence documented (iwegbue2019 measured Ni in household hygienic products). A not-material claim would be FALSE; needs control-or-limit."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "Sn",
            "issue": "No cell, no sovereign ML. Organotin occurrence is plausible in some formulations (yamada1993 organotin in household commodities is routed to this category). Needs control or substantiated not-material."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "Al",
            "issue": "No cell, no sovereign ML. Al is a common builder/filler in powdered detergents (high expected occurrence). not-material almost certainly FALSE; needs control or read-across."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "total Cr",
            "issue": "No cell, no sovereign ML. Occurrence documented in BOTH routed occurrence sources (iwegbue2019 Cr in detergents; tjandraatmadja2010 CSIRO Cr in dishwasher detergents, dish soaps, rinse aids, toilet-bowl/floor/all-purpose cleaners). not-material would be demonstrably FALSE."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "iAs (species control)",
            "issue": "No cell. GB 14930.1 regulates tAs only; no iAs speciation control is defined for any subcat."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "Cr-VI (species control)",
            "issue": "No cell. Given Cr occurrence is confirmed in-category, a Cr-VI reflex/control is required but none exists."
          },
          {
            "subcat": "ALL 21 subcats",
            "analyte": "MeHg (species control)",
            "issue": "No cell. Almost certainly correctly not-material for cleaning products (no methylation pathway in an abiotic surfactant matrix), but this determination has not been recorded anywhere on origin/main — it is an undocumented gap, not a substantiated determination."
          }
        ],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "food-contact + hard-surface cleaning subcats routed on origin/main (dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids, pre-treaters/spot-removers, toilet-bowl, floor, all-purpose, specialty-other)",
            "analyte": "Cd / Ni / total Cr (Sb confirmed but out-of-panel)",
            "verdict": "CONFIRMED TRUE under adversarial challenge — a not-material claim for Cd/Ni/total Cr would be FALSE. The contradicting occurrence evidence is real, on-point, and actually routed to Cat-12 on origin/main. iwegbue2019 (tier B; DOI 10.1016/j.toxrep.2019.08.014; measured panel Cd,Pb,Cr,Cu,Co,Ni,Mn,Zn,Fe; routed to dish-soaps-manual + pre-treaters-stain-removers) quantifies Cd, Ni and Cr in cleaning products. tjandraatmadja2010 CSIRO (tier B; measured panel Sb,Cr,Co,Mo,Se; routed to automatic-dishwasher-detergents, dish-soaps-manual, rinse-aids, toilet-bowl, floor, all-purpose, specialty-other) measures total Cr (detected in 64% of products, 0.002-6.2 mg/kg) and Sb (9.6% detection). Sb occurrence is confirmed but Sb is NOT one of the 8 mandatory HMTc totals (Pb,Cd,tAs,tHg,Ni,Sn,Al,total Cr) or 3 species controls, so a not-material determination for Sb is moot for the canonical panel.",
            "recommendation": "When Cat-12 is compiled, do NOT classify Cd / Ni / total Cr as not-material for these occurrence-covered subcats. No sovereign ML exists for them, so set a control (analytical method + escalation rule) at minimum, or a disclosed read-across — occurrence is proven. Total Cr occurrence additionally forces a Cr-VI reflex/control (see coverage_gaps). Treat Sb as an out-of-panel surveillance screen, not a mandatory cell."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "food-contact detergents (Type A/B)",
            "analyte": "Pb",
            "issue": "GB 14930.1-2022 expresses Pb as '重金属(以Pb计)' = 'heavy metals (as Pb)' — a SUMMED heavy-metals index reported as lead equivalents, NOT a Pb-only mass limit. Converting 30/100 mg/kg to 30000/100000 ppb and labelling it a 'Pb' cell mis-states the analyte. Correct basis: a combined-heavy-metals-as-Pb ceiling on the as-sold product (mg/kg = ppb ×1000 is valid arithmetically, but the cell must be tagged as a summed-index, not per-analyte Pb). This is a defensibility landmine — a plaintiff's expert would note our 'Pb 100 ppm' is actually China's aggregate-metals index."
          },
          {
            "subcat": "food-contact detergents (Type A/B)",
            "analyte": "tAs",
            "issue": "The tAs rows ARE valid mass-basis ppb (3.0/5.0 mg/kg as-sold -> 3000/5000 ppb; basis 'product as placed on the market' is already recorded). No pushback on the ppb basis itself; pushback is only on SCOPE — the GB limits govern food-cleaning/food-contact detergents, so applying them by read-across to non-food-contact cleaners (toilet-bowl, floor, carpet, oven, degreaser) must be disclosed as read-across, not presented as a directly-applicable sovereign ML."
          }
        ],
        "summary": "ADVERSARIAL RESULT: 0 of 3 tighten candidates confirmed (all 3 rejected); 1 of 2 weak_not_material corrections confirmed (Cd/Ni/total Cr held; Al rejected). The audit's structural diagnosis is sound — Cat-12 is uncompiled on origin/main (git-verified: no cat12-config.json, nothing in tools/standards, register holds only the two GB 14930.1-2022 tAs rows), and GB 14930.1-2022 is the only sovereign detergent ML worldwide — but every proposed numeric anchor is either analyte-mislabeled or scope-misassigned, so none survives verification as written.\\n\\nTIGHTEN CANDIDATES — all REJECTED:\\n(1) Pb Type B 100 mg/kg = 100000 ppb (food-contact detergents): REJECTED on analyte/species mismatch. Web-verified (codeofchina.com, food.chemlinked.com) that GB 14930.1-2022 Table 1's metric is '重金属(以Pb计)/Heavy metal (by Pb)' measured by a colorimetric method — a SUMMED sulfide-precipitable-heavy-metals index expressed as Pb-equivalent, not a per-analyte Pb (铅/Pb) determination. The candidate's own confidence note and the ppb_pushback both concede this. Setting a 'Pb' cell from it fails criterion (b) same-analyte-species and is the exact defensibility landmine the audit flags; separately, 100000 ppb (100 ppm) is not a meaningful tightening for Pb. Correct disposition (summed-index control) already lives in ppb_pushbacks.\\n(2) Pb Type A 30 mg/kg = 30000 ppb (dish-soaps-manual): REJECTED — DOUBLE defect. Same summed-index analyte mismatch as (1), PLUS a scope/form mismatch: GB 14930.1-2022 Class A = detergents used to wash food directly (produce), Class B = tableware/utensil/food-contact-equipment cleaners (web-confirmed and matching the register's own scope notes). Dish soap cleans tableware -> it is Class B, so even the summed-index value applicable to it would be Type B 100 mg/kg, never Type A 30 mg/kg.\\n(3) tAs Type A 3000 ppb (dish-soaps-manual / automatic-dishwasher-detergents / rinse-aids): REJECTED on scope/form mismatch. These are Class B products (tableware/food-contact-equipment cleaning); the applicable sovereign value is the already-registered Type B tAs = 5000 ppb, not Type A = 3000 ppb. Class A (3.0 mg/kg) governs detergents that directly wash food. Assigning the stricter Class A limit to Class B products would set a certification value stricter than the applicable ML — not defensible regulatory-alignment. Criterion (b) comparable-form fails.\\n\\nWEAK NOT-MATERIAL — 1 confirmed, 1 rejected:\\nCONFIRMED (Cd/Ni/total Cr): contradicting occurrence evidence is real, on-point, and routed to Cat-12 on origin/main. iwegbue2019 (measured Cd/Ni/Cr; routed to dish-soaps-manual + pre-treaters-stain-removers) and tjandraatmadja2010 CSIRO (total Cr 64% detection 0.002-6.2 mg/kg + Sb 9.6%; routed to dishwasher/dish/rinse/toilet/floor/all-purpose/specialty cleaners) verify that not-material for Cd/Ni/total Cr would be FALSE. Sb occurrence is real but out-of-panel (not among the 8 mandatory totals/3 species), so its not-material is moot for the canonical panel.\\nREJECTED (Al): NO ingested/routed source on origin/main measures Al in cleaning products — iwegbue2019 and tjandraatmadja2010 elemental panels contain no Al, and yamada1993 is Sn-only. The 'not-material would be FALSE' verdict rests solely on 'expected occurrence' (aluminosilicate/zeolite builders), which is a plausible formulation inference but NOT real, on-point, measured occurrence evidence. Al is an undocumented coverage gap (already listed in coverage_gaps), not an evidence-contradicted not-material.\\n\\nCURRENCY: GB 14930.1-2022 verified current (supersedes GB 14930.1-2015; no newer detergent revision; GB 2762-2025 is the separate food-contaminant standard and does not apply to detergents). No candidate was rejected on currency grounds — all failed on analyte-species (1,2) or product-form/scope (2,3).\\n\\nSTRUCTURAL NOTE (coverage_gaps kept verbatim per instructions): the Sn gap states yamada1993 is 'routed to this category,' but on origin/main yamada1993's product routing is to textile contact-products (bibs, diapers-and-components, period-underwear, infant-clothing), NOT to any Cat-12 cleaning subcat. So Sn should be treated as an undocumented gap with no in-corpus Cat-12 occurrence, not as occurrence-supported. coverage_gaps and ppb_pushbacks are otherwise carried through unchanged."
      },
      {
        "category": "HMTc Category 15 — Feminine Care (mucosal)",
        "cells_audited": 110,
        "category_confidence": 0.85,
        "coverage_gaps": [
          {
            "subcat": "period-underwear-reusable-garments",
            "analyte": "Pb/Cd/tAs/Cr-VI",
            "issue": "The device-family cells declare 'no jurisdiction sets a heavy-metal content limit for this device form' and hold every metal as bare control, but period underwear IS consumer clothing/textile with prolonged skin contact. The applicable sovereign textile regime — EU REACH Annex XVII entry 72 (Reg. 2018/1513): Pb/Cd/tAs/Cr-VI = 1 mg/kg (1000 ppb) after extraction — was never placed in jurisdictions_checked (all control cells have jurisdictions_checked=\"\"). This regime is already in our own register (eu_2018_1513_*_consumer_textiles_1mgkg) and was missed."
          },
          {
            "subcat": "menstrual-pads",
            "analyte": "Pb/Cd/tAs/Cr-VI",
            "issue": "Reusable cloth pads, and the woven/nonwoven topsheet of single-use pads, plausibly fall under EU 2018/1513 'textiles other than clothing which under normal use come into skin contact to an extent similar to clothing' (1000 ppb Pb/Cd/tAs/Cr-VI). Not considered; scope is arguable for single-use but should be adjudicated, not silently omitted."
          },
          {
            "subcat": "all device subcats",
            "analyte": "Ni/Al/Sn",
            "issue": "jurisdictions_checked is empty ('') on every device control cell, so the 'no sovereign content limit exists' assertion is undocumented — it lists no jurisdictions actually screened. For a Daubert-facing standard the negative claim needs an explicit checked-jurisdiction roster (textile, toy/CPSIA, medical-device, cosmetic regimes) the way the MeHg cell has one."
          }
        ],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "feminine-wipes / feminine-deodorants / douches-vaginal-irrigation / intimate-washes-cleansers",
            "analyte": "Sn",
            "verdict": "NOT-MATERIAL IS TRUE under adversarial challenge — the audit's 'possibly FALSE' claim is REFUTED. Verified marcelis2024's scope directly from its source page: its inorganic leachables panel (Table 2-10, the only table reporting Sn) measured tin exclusively in DEVICE forms (adult novelties Sn max 2159 ng/mL, menstrual cups 239 ng/mL, Kegel devices, sea sponges) from organotin catalysts in polymer/silicone. Its products frontmatter is tampons/pads/cups/menstrual-intimate-products-other — the 'other intimate products' are adult novelties/Kegel devices/sea sponges, ALL physical devices, none an aqueous or leave-on cosmetic. marcelis2024 therefore does not contradict the cosmetic Sn not-material's claim 'no routed source reports tin in a feminine-cosmetic product,' and both halves of the determination hold (no sovereign cosmetic Sn ML; no cosmetic-form Sn occurrence; no tinplate-contact pathway for a bottled/tubed/sachet cosmetic).",
            "recommendation": "KEEP not-material — reject the reclassification. Zero real contradicting evidence; the substantiation gate is satisfied. (Device Sn correctly remains a separate mandatory control via the organotin-catalyst pathway; the two treatments are not in tension.)"
          },
          {
            "subcat": "all 10 subcats",
            "analyte": "MeHg",
            "verdict": "TRUE. No microbial methylation pathway in cellulose/polymer/silicone devices or aqueous/leave-on cosmetics; no dietary Hg source; intimate-product surveys quantify tHg not MeHg; bounded by the tHg control/ceiling; no sovereign sets a MeHg ML outside fish/seafood. The cell carries a populated jurisdictions_checked roster. Withstands adversarial challenge.",
            "recommendation": "Keep not-material (speciation-bounded by tHg). No change needed."
          },
          {
            "subcat": "cosmetic subcats",
            "analyte": "Al",
            "verdict": "TRUE that no sovereign cosmetic Al content ML exists; correctly held as control not not-material (Al has occurrence/pathway, so not-material would fail substantiation). For feminine-deodorants, aluminium may be an intentional antiperspirant active and the cell carves that out — the CONTAMINANT-Al control is appropriate.",
            "recommendation": "Keep control; confirm the deodorant intentional-Al carve-out is enforced so a formulated Al active is not mis-scored against the contaminant cell."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "period-underwear-reusable-garments (and any pad textile read-across)",
            "analyte": "Pb/Cd/tAs/Cr-VI",
            "issue": "The proposed EU 2018/1513 anchors ARE numerically ppb (1 mg/kg = 1000 ppb by mass), so ppb is fine as a number — BUT the basis is 'concentration in the homogeneous material AFTER a standardized extraction', i.e. an extractable/leachable-after-extraction content, not the device family's declared native basis ('total heavy-metal content of the finished article per unit mass'). Extractable content <= total content, so the two must NOT be silently equated. If adopted, disclose it as an extractable-after-extraction textile basis, distinct from the finished-article total-content basis — otherwise the standard conflates two bases, the exact defect the Cat-15 method warns against."
          },
          {
            "subcat": "cosmetic subcats",
            "analyte": "Ni",
            "issue": "Correct handling to note: the EU's better-known nickel cosmetic rule is a RELEASE-RATE (0.5 ug/cm2/week) which is NOT a ppb mass-content basis and correctly cannot be forced into ppb — the compiler rightly did not use it. The only ppb-basis sovereign cosmetic Ni values are finished-product content MLs (KR 10000; EU tattoo/PMU mixture 5000). ppb basis is valid for those two only."
          }
        ],
        "summary": "Adversarial re-verification on branch claude/stoic-bhaskara-c858d3. Result: 0 of 5 tighten candidates confirmed (all 5 rejected); 0 of 1 proposed not-material reclassification confirmed (Sn reclassification rejected); the 2 not-material/control affirmations (MeHg, Al) verified correct. tighten_candidates returned empty.\n\nCandidates 1-4 — period underwear Pb/Cd/tAs/Cr-VI -> EU 2018/1513 entry 72 @ 1000 ppb: instrument REAL and CURRENT, scope legitimately reaches skin-contact clothing, and species match (entry 72 'arsenic compounds' -> tAs; 'chromium VI' -> Cr-VI). REJECTED on BASIS MISMATCH. Web-confirmed (SGS/Intertek/ChemSafetyPro/ecomundo) that entry 72's 1 mg/kg is an EXTRACTABLE-after-extraction content ('mg that can be extracted from the material'), while the device cell's native basis is TOTAL content by microwave-assisted acid digestion and the cell explicitly declares itself 'not a leachate/migration number.' Extractable <= total; anchoring a total-content mucosal-device cell to an extractable apparel number conflates the two basis families the Cat-15 method forbids. For Cr-VI it is additionally a LOOSENING (the existing 'any quantifiable Cr-VI fails' ALARA control is stricter than a 1000 ppb ceiling). The EXISTENCE of the missed textile regime remains valid and is preserved in coverage_gaps + ppb_pushbacks; only the numeric anchor onto the total-content cell is rejected — the correct fix is a disclosed, basis-flagged read-across, not a silent tightening.\n\nCandidate 5 — cosmetic Ni 10000 -> 5000 via REACH 2020/2081 tattoo/PMU: value REAL (entry 75 Ni 0.0005% = 5 mg/kg, web-confirmed) but REJECTED on FORM/exposure-route mismatch — tattoo/PMU ink is intradermally implanted and 'absorbed into the body' through a deliberately broken skin barrier, categorically unlike topical mucosal contact by a wipe/deodorant/douche/wash. It is also legally NOT a cosmetic (regulated under REACH entry 75, not the Cosmetics Regulation), so it does not falsify the cell's 'only sovereign cosmetic Ni content limit' statement; KR MFDS 10000 stands as the strictest applicable cosmetic Ni value. Audit's own confidence was low.\n\nNot-material: Sn reclassification REFUTED — marcelis2024 (the study the audit leaned on) measured Sn only in device forms; its 'other intimate products' (menstrual-intimate-products-other = adult novelties/Kegel devices/sea sponges) are all devices, never a cosmetic formulation, so it cannot contradict the cosmetic Sn not-material. MeHg (all subcats) and cosmetic Al control verified correct.\n\nNet: Cat-15 numeric cells (cosmetic BVL 2017 mucosal-tier reads; device ALARA controls) and not-material/control classifications all stand under adversarial challenge. category_confidence raised to 0.85: no valid tightening exists and current cells reflect the strictest applicable government treatment; the only actionable residue is documentation hygiene already captured in coverage_gaps/ppb_pushbacks — populate the empty device jurisdictions_checked rosters and adjudicate/DISCLOSE the entry-72 textile regime as a distinct extractable basis rather than adopting it as a total-content anchor."
      },
      {
        "category": "Category 16 — Dietary Supplements (child-protective)",
        "cells_audited": 264,
        "coverage_gaps": [],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "ALL 24 subcats (uniform)",
            "analyte": "Cr (total)",
            "verdict": "CONFIRMED under independent challenge. Register cross-check (origin/main, 2993 rows) returns 0 total-Cr MLs scoped to infant/child food and 0 scoped to dietary supplements in any jurisdiction. General-food total-Cr MLs DO exist — China GB 2762-2022 milk powder 2000, HK Cap 132V cereals/meat/fish 1000 and vegetables 500, India gelatin 10000 / fishery 12000, Switzerland VHK gelatine/collagen 10000 — but none is infant-food- or supplement-scoped, and every one is 200-2400x looser than any child anchor, so reading one across would LOOSEN, not tighten. Web pass confirms agencies regulate Cr(VI) as a contaminant and treat Cr(III) as an essential nutrient with no total-Cr food maximum for the essential form; a total-Cr number would conflate essential Cr(III) with toxic Cr(VI). No defensible child-protective numeric anchor exists.",
            "recommendation": "Keep as control — do NOT reject. It is stronger than a numeric limit: mandatory ICP-MS every lot and it gates the Cr-VI speciation reflex at total-Cr >=100 µg/kg. Do NOT read across a general-food total-Cr ML (all far looser and species-conflating)."
          },
          {
            "subcat": "ALL 24 subcats (uniform)",
            "analyte": "Cr-VI",
            "verdict": "CONFIRMED under independent challenge. Register cross-check returns 0 Cr-VI FOOD concentration limits anywhere: every Cr-VI row is a drinking-water MCL (CA/AU 10-50 µg/L), toy migration (EU 2009/48 5-53), textiles/leather (EU 1000/3000), RoHS electronics, tattoo/PMU 500, or fertiliser 2000 — none food, none supplement, each a basis and product-form mismatch to a supplement content cell. California Prop 65 lists Cr-VI only as an 8.2 µg/day oral MADL (a dose-based safe-harbour warning trigger, not a concentration ML), matching the config disclosure. Web pass confirms Cr(VI) is not an intentional food/supplement ingredient and no agency sets a supplement Cr-VI maximum.",
            "recommendation": "Keep as control — do NOT reject. Functionally stricter than any limit: bounded by total Cr, reflex speciation at total-Cr >=100 µg/kg, and any quantifiable Cr-VI = certification fail (zero-tolerance). No numeric anchor exists to read across."
          },
          {
            "subcat": "ALL 24 subcats (uniform); marine subcats (algae-seaweed, oil-based) speciate every lot",
            "analyte": "MeHg",
            "verdict": "CONFIRMED under independent challenge. Register cross-check returns 0 MeHg MLs scoped to infant/child food and 0 scoped to supplements; all 27 MeHg rows are fish/fishery/marine-animal limits (500-1700 µg/kg: MX/US/TH/PH/TT/GSO/VN/HK), none below the binding tHg read-across of 4 µg/kg and none applicable to a supplement matrix by product form. Web pass confirms EU 2023/915 regulates supplement and seafood mercury as TOTAL mercury (food supplements 100 µg/kg — an adult floor, disclosed in config adult_floor) and sets MeHg maxima only for fish/seafood (300-1000 µg/kg). MeHg is bounded by tHg (MeHg <= tHg), so the tHg=4 ceiling already binds tighter than any sovereign MeHg number.",
            "recommendation": "Keep as control — do NOT reject. Marine subcats correctly upgrade to per-lot species-specific speciation (vs reflex-only for non-marine); coverage verified intact. No MeHg number below the tHg=4 ceiling exists to read across."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "All as_sold SOLID subcats (17 of 24: tablets, capsules, softgels, gummies, lozenges, powders, effervescent, teas, bars, vitamin-mineral, botanicals, amino-acids, enzymes, probiotics, protein-collagen, clay-mineral, mushroom, greens; + algae/oil marine-solids)",
            "analyte": "Cd, iAs, tHg, Ni",
            "issue": "Correct basis is µg/kg mass-basis (ppb is appropriate for supplements). BASIS-CONFLATION NOTE only: these four anchors are drawn from LIQUID / ready-to-eat infant-formula instruments — Cd eu2023_cd_formula_cow_liquid_5, iAs eu2023_ias_formula_liquid_10, tHg il_fcs2016_thg_..._ready_to_eat_4, Ni eu2024_ni_formula_liquid_100 (basis 'product as placed on market', as_consumed) — and are read across onto an as_sold solid powder WITHOUT a reconstitution/dilution adjustment. Direction is conservative (a reconstituted liquid is ~6-8x more dilute than the as-sold powder, so the cell is ~6-8x STRICTER than the equivalent powder ML), so it is NOT a too-loose defect. Surface it as a disclosed intentional over-strictness in the derivation note so a plaintiff's expert cannot frame it as an accidental wet/dry mix. The config already states 'no serving-size conversion selects a limit,' consistent with this."
          }
        ],
        "category_confidence": 0.93,
        "summary": "Adversarial re-verification of the Cat-16 audit against origin/main data/evidence/regulatory_limits.csv (2993 rows), tools/standards/cat16-config.json, and a web pass. TIGHTEN CANDIDATES: 0 proposed, 0 confirmed, 0 rejected — and the empty set is independently CORRECT. Deterministic register cross-check confirms all eight numeric anchors are the strictest infant/child-food register MINIMUM for their analyte (Pb 10 aunz_sch19; Cd 5 eu2023 liquid cow formula; tAs 50 India FSSAI; iAs 10 eu2023 liquid formula; tHg 4 il_fcs2016 RTE formula; Ni 100 eu2024 liquid formula; Sn 5000 India non-canned; Al 500 aunz non-soy). No infant-food or supplement row in ANY jurisdiction undercuts any anchor (next-strictest are Cd 10, iAs 20, tHg 8, Ni 250, etc.), and the web pass surfaced no post-register sovereign infant-food ML below these global-floor values — so no valid tightening was omitted and there is nothing to refute or add. WEAK-NOT-MATERIAL: 3 of 3 control classifications CONFIRMED, 0 rejected. (1) Total Cr — 0 infant-food and 0 supplement total-Cr MLs on register; general-food total-Cr MLs exist (China milk powder 2000, HK 1000, gelatin/collagen 10000-12000) but are unscoped-to-cell and 200-2400x looser, and Cr(III) essentiality defeats a total-Cr anchor; the measure-every-lot + Cr-VI-reflex control is stronger than a read-across. (2) Cr-VI — 0 FOOD concentration limits anywhere (all Cr-VI regs are water/toys/textiles/leather/electronics/tattoo/fertiliser; Prop 65 is an 8.2 µg/day dose MADL, not a food ML); zero-tolerance fail is stronger than a limit. (3) MeHg — 0 infant/supplement MeHg MLs; all 27 MeHg rows are fish/seafood 500-1700 µg/kg, none below the tHg=4 ceiling; EU 2023/915 regulates supplement mercury as total-Hg 100 (adult floor, disclosed), not MeHg. PPB-PUSHBACK retained as-is (structural, verified against config source_ids): the four liquid/RTE infant-formula anchors read onto as_sold solids without reconstitution are a conservative ~6-8x over-strictness to disclose, not a wet/dry defect. COVERAGE-GAPS retained empty (all 8 mandatory totals + iAs + Cr-VI + MeHg present in every cell). category_confidence 0.93 (nudged from 0.92: two independent methods — deterministic register + web — confirmed every negative and every anchor-minimum; residual is only an obscure post-2025 sub-floor sovereign infant-food ML a bounded, US-only web pass cannot fully exclude). NET VERDICT: the audit is accurate in full; refutation fails on every point."
      },
      {
        "category": "HMTc Category 17 — Pet Foods (human-grade over-compliance)",
        "cells_audited": 110,
        "category_confidence": 0.35,
        "coverage_gaps": [
          {
            "subcat": "ALL plant-carb + meat subcats (kibble, freeze-dried, semi-moist, treats, chews, canned-wet, raw, toppers)",
            "analyte": "Cr (total)",
            "issue": "Cell declared type=control ('no government sets a total-chromium maximum'). FALSE: China GB 2762-2022 sets total-Cr maxima for grains/beans and their products and for meat/meat products (~1.0 mg/kg = 1000 ppb). Those general-food GB 2762 Cr rows are ABSENT from regulatory_limits.csv (register only carries CN Cr for milk powder/liquid milk), so the compiler could not see them and wrongly emitted a control. Should be read_across to CN GB 2762 total-Cr, not control."
          },
          {
            "subcat": "ALL (register-level)",
            "analyte": "Pb/Cd/tAs/tHg/Cr — general (non-infant) foods",
            "issue": "regulatory_limits.csv has NO China GB 2762 general-food rows for cereals/meat/fish (only infant/complementary, dairy, and non-food crayon/jewellery rows). GB 2762 is the world's most comprehensive contaminant table; its absence means every plant-carb/meat/fish analog pool was built without China. For Pb/Cd/tHg China does not beat the current binding, but for total-Cr it does (see Cr gap). Register needs the GB 2762-2022/2025 general-food block ingested."
          },
          {
            "subcat": "pet-food-fish-marine-protein",
            "analyte": "MeHg",
            "issue": "MeHg marked 'subsumed' under tHg=300. Fish is the ONE matrix where MeHg is the materially-dominant, biomagnifying species; pure subsumption (no explicit cell) is the weakest point of the category. Defensible only because tHg=300 is conservative, but a class-action expert will note fish MeHg has no standalone control."
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "Sn",
            "issue": "Sn declared not_material ('non-tin-coated liquid'). Milk replacers are frequently sold CANNED (tin-coated) liquid; for a canned liquid replacer the tin-migration pathway is live. Cell should split: canned form → Sn read_across (canned-food analog, EU 200 mg/kg); non-canned → not_material."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "pet-food-canned-wet, pet-food-raw, pet-toppers-mixers-broths",
            "analyte": "tHg",
            "current_value_ppb": "200",
            "current_binding": "IL FCS 2016 (meat & meat products) read-across [il_fcs2016_thg_8_...200] — matches compiled cell",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "Hong Kong",
            "proposed_instrument": "HK Cap 132V item 12 Mercury, 'Meat of animal' 0.05 mg/kg (current per Sept-2025 CFS Guidelines; HK regime = 144 MLs, verified live)",
            "source": "hk_cap132v_thg_meat-of-animal_50 (IN-REGISTER)",
            "confidence": "high — verified in-register; same species (tHg), same meat form, same wet basis; tHg is a content limit so canned status is irrelevant; a direct stricter-row pooling miss"
          },
          {
            "subcat": "pet-food-dry-kibble, pet-food-freeze-dried, pet-food-semi-moist, pet-treats-snacks, pet-chews-dental",
            "analyte": "tHg",
            "current_value_ppb": "30",
            "current_binding": "IL FCS 2016 (cereals & cereal products) read-across [il_fcs2016_thg_4_...30] — matches compiled cell",
            "proposed_value_ppb": "20 (cereal fraction) / 10 (vegetable-tuber fraction)",
            "proposed_jurisdiction": "Hong Kong",
            "proposed_instrument": "HK Cap 132V item 12 Mercury: rice/husked/polished rice/maize/maize flour/wheat 0.02 mg/kg; 'Vegetables other than edible fungi' 0.01 mg/kg (current)",
            "source": "hk_cap132v_thg_rice-husked-rice-polished-rice-maize-maize-flour-wheat_20 + hk_cap132v_thg_vegetables-other-than-edible-fungi_10 (IN-REGISTER)",
            "confidence": "high — both HK rows in-register, same species/as-sold-dry basis; GB 2762 corroboration unnecessary"
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "tHg",
            "current_value_ppb": "50",
            "current_binding": "VN QCVN 8-2:2011 (fluid milk products) read-across [vn_qcvn8_2_2011_thg_fluid-milk-products_50] — matches compiled cell",
            "proposed_value_ppb": "10 (adult-milk analog); 4 if reclassified to infant-formula analog",
            "proposed_jurisdiction": "Hong Kong / Israel",
            "proposed_instrument": "HK Cap 132V 'Milk' tHg 0.01 mg/kg; IL FCS 2016 'Milk' tHg 0.01 mg/kg; IL infant-formula RTE tHg 0.004 mg/kg drives it to 4 under candidate-6 reclassification",
            "source": "hk_cap132v_thg_milk_10 + il_fcs2016_thg_1_milk_10 (IN-REGISTER); il_fcs2016_thg_14_...4 for the infant-formula path",
            "confidence": "high — two independent in-register liquid-milk rows at 10, same wet/as-consumed basis; even lower (4) under the infant-formula reclassification"
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "Cd",
            "current_value_ppb": "50",
            "current_binding": "PY Decreto 1335/2019 (fluid milk & dairy) read-across [py_decreto1335_2019_fluid_milk_dairy_no_addition_cd_50] — matches compiled cell",
            "proposed_value_ppb": "5",
            "proposed_jurisdiction": "Israel",
            "proposed_instrument": "IL FCS 2016 'Milk' Cd 0.005 mg/kg; corroborated by EU 2023/915 & UK liquid cow-milk formula Cd 5 ppb",
            "source": "il_fcs2016_cd_1_milk_5 (IN-REGISTER)",
            "confidence": "high — in-register stricter milk row, same species/wet basis; compiler used the looser PY 'dairy' row"
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "iAs",
            "current_value_ppb": "100",
            "current_binding": "IL FCS 2016 'Dairy products' read-across [il_fcs2016_ias_1_1_dairy_products_100] — matches compiled cell",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "Israel",
            "proposed_instrument": "IL FCS 2016 'Milk' iAs 0.01 mg/kg — stricter row in the SAME instrument (inorganic-arsenic column) than the 'Dairy products' row selected; EU 2023/915 liquid formula iAs 10 corroborates",
            "source": "il_fcs2016_ias_1_milk_10 (IN-REGISTER)",
            "confidence": "high — clean within-instrument stricter-row miss; species is iAs (not tAs), matching the cell; no species mismatch"
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "Pb",
            "current_value_ppb": "20",
            "current_binding": "IN FSSAI (secondary milk products, as consumed) read-across [in_fssai2016_pb_057_...20] — matches compiled cell",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "EU / Codex / UK / CN / BR (infant-formula liquid analog; ~worldwide)",
            "proposed_instrument": "Reclassify subcat: pet milk replacers are neonatal-animal sole-diet formulas → infant-formula analog. Infant-formula liquid Pb = 10 ppb (EU 2023/915 §3.1.24.2 [CURRENT]; Codex CXS 193; UK; CN; BR). Also drives Cd→5, iAs→10, tHg→4.",
            "source": "eu2023_pb_formula_liquid_10 (IN-REGISTER; + codex/uk/cn/br formula-liquid Pb=10 rows in-register)",
            "confidence": "high on value/basis (liquid, as_consumed, Pb species; EU 2023/915 current, not superseded) — the analog RECLASSIFICATION itself is a defensible modeling judgment the reviewer should ratify; it subsumes candidates 3-5 and deepens tHg to 4"
          },
          {
            "subcat": "pet-food-fish-marine-protein",
            "analyte": "Cr (total)",
            "current_value_ppb": "12000",
            "current_binding": "IN FSSAI 2016 'All fishery products' read-across [in_fssai2016_crtotal_001_all_fishery_products_12000] — matches compiled cell",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "Hong Kong",
            "proposed_instrument": "HK Cap 132V item 7 Chromium, 'Fish' 1.0 mg/kg (current). China GB 2762 aquatic animals 2.0 mg/kg is looser; HK is strictest.",
            "source": "hk_cap132v_crtotal_fish_1000 (IN-REGISTER)",
            "confidence": "high — species Cr-total matches (not Cr-VI), fish form, wet as-sold basis; a 12x in-register miss the audit itself flagged as 'already in-register'"
          },
          {
            "subcat": "plant-carb subcats (kibble, freeze-dried, semi-moist, treats, chews)",
            "analyte": "Cr (total)",
            "current_value_ppb": "control (no number)",
            "current_binding": "declared control — 'no government sets total-Cr for cereals' [matches compiled cell type=control]",
            "proposed_value_ppb": "1000 (cereal/pulse fraction) / 500 (vegetable fraction)",
            "proposed_jurisdiction": "Hong Kong (IN-REGISTER) — corrected from audit's 'China GB 2762'",
            "proposed_instrument": "HK Cap 132V item 7 Chromium: Cereals 1.0 mg/kg, Pulses 1.0 mg/kg, 'Vegetables other than pulses' 0.5 mg/kg (current; existing 1 ppm confirmed via LegCo/ChemLinked amendment docs). The 'no government sets total-Cr' control claim is factually FALSE.",
            "source": "hk_cap132v_crtotal_cereals_1000 / hk_cap132v_crtotal_pulses_1000 / hk_cap132v_crtotal_vegetables-other-than-pulses_500 (ALL IN-REGISTER). GB 2762 grains/beans Cr value web-UNCONFIRMED and unnecessary.",
            "confidence": "high (UPGRADED from audit's medium) — value is in-register via Hong Kong, so 'control' is provably false with NO GB 2762 ingest required; this is a pooling defect, not a register-absence defect"
          },
          {
            "subcat": "meat subcats (canned-wet, raw, toppers)",
            "analyte": "Cr (total)",
            "current_value_ppb": "control (no number)",
            "current_binding": "declared control — 'no government sets total-Cr for meat' [matches compiled cell type=control]",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "Hong Kong (IN-REGISTER) — corrected from audit's 'China GB 2762'",
            "proposed_instrument": "HK Cap 132V item 7 Chromium: 'Meat of animal' 1.0 mg/kg, 'Meat of poultry' 1.0 mg/kg (current; existing 1 ppm confirmed via LegCo/ChemLinked). Control claim false.",
            "source": "hk_cap132v_crtotal_meat-of-animal_1000 / hk_cap132v_crtotal_meat-of-poultry_1000 (IN-REGISTER). GB 2762 meat Cr value web-UNCONFIRMED and unnecessary.",
            "confidence": "high (UPGRADED from audit's medium) — in-register HK falsifies control; pooling defect, no ingest needed"
          },
          {
            "subcat": "plant-carb subcats (kibble, freeze-dried, semi-moist, treats, chews)",
            "analyte": "iAs",
            "current_value_ppb": "100",
            "current_binding": "IL FCS 2016 'Dried legumes incl. peanuts/soybeans' read-across [il_fcs2016_ias_4_...100] — matches compiled cell",
            "proposed_value_ppb": "60",
            "proposed_jurisdiction": "Israel",
            "proposed_instrument": "IL FCS 2016 'Fruits and vegetables, incl. mushrooms, edible plants' iAs 0.06 mg/kg — stricter row in the same instrument, applicable to the starchy-tuber/vegetable share (peas, potato, sweet potato common in kibble)",
            "source": "il_fcs2016_ias_3_fruits_and_vegetables_including_mushrooms_edible_pla_60 (IN-REGISTER)",
            "confidence": "medium — real in-register stricter row, same species (iAs)/basis, survives all hard-reject filters; applicability depends on the formula carrying a vegetable/tuber share (typical but not universal for a cereal/pulse-centred 'plant-carb' label)"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "plant-carb + meat subcats",
            "analyte": "Cr (total) [declared 'control']",
            "verdict": "CONFIRMED FALSE — a government DOES set a number, but the VERIFIABLE source is Hong Kong Cap 132V (IN-REGISTER: Cr-total cereals/pulses/meat/fish = 1.0 mg/kg = 1000 ppb; vegetables = 500), not China GB 2762 (whose grains/meat Cr value could NOT be web-confirmed and is unnecessary). The 'no government sets a total-chromium maximum' rationale is untrue; HK Cr-total item 7 rows are already in the register and were simply not pooled.",
            "recommendation": "reclassify control → read_across = 1000 ppb (HK Cap 132V cereals/pulses/meat) or 500 (vegetable fraction); NO register ingest required — this is a pooling defect. Retain the total-Cr-triggered Cr(VI) reflex."
          },
          {
            "subcat": "pet-food-fish-marine-protein + meat/plant subcats",
            "analyte": "Cr-VI [not_material]",
            "verdict": "TRUE (confirmed sound) — Cr(VI) reduces to Cr(III) in reducing food matrices; no stable Cr(VI) burden; bounded by total Cr with a reflex.",
            "recommendation": "keep not-material; retain the total-Cr-triggered Cr(VI) reflex control (do not drop it)."
          },
          {
            "subcat": "plant-carb / meat / milk subcats",
            "analyte": "MeHg [not_material]",
            "verdict": "TRUE (confirmed sound) — no microbial methylation pathway in terrestrial cereal/pulse/tuber/meat/dairy matrices.",
            "recommendation": "keep not-material (bounded by tHg)."
          },
          {
            "subcat": "pet-food-fish-marine-protein",
            "analyte": "MeHg [subsumed under tHg=300]",
            "verdict": "CONFIRMED WEAK — subsumption is technically valid (EU expresses fish mercury as total; tHg=300 conservative) BUT Method v2.0 / Part 14 REQUIRES an explicit MeHg applicability determination wherever a credible methylation pathway exists. Fish is the paradigm methylation matrix and MeHg is the dominant biomagnifying species, so a silent 'subsumed' (confirmed in the compiled cell, type=subsumed) is non-compliant with the stated method and is the category's single most litigable cell.",
            "recommendation": "set an explicit MeHg cell bounded by tHg=300 with reflex speciation on elevated tHg, per the Method v2.0 conditional-species rule (do not leave it silent)."
          },
          {
            "subcat": "non-canned solids (kibble, freeze-dried, semi-moist, treats, chews, raw, fish, toppers)",
            "analyte": "Sn [not_material]",
            "verdict": "TRUE (confirmed sound) — tin is a tinplate-can migration analyte with no source in non-tinplate product.",
            "recommendation": "keep not-material; retain 'any quantifiable Sn triggers a contact-material investigation' control."
          },
          {
            "subcat": "pet-milk-replacers-specialty-liquids",
            "analyte": "Sn [not_material]",
            "verdict": "PARTIALLY CONFIRMED — canned (tinplate) liquid milk replacers do exist commercially (canned kitten/puppy milk), so the Sn migration pathway is live for a canned form and not_material (which assumes non-tinplate) is incomplete for it. HOWEVER the compiled subcat is flagged canned=False, so whether canned liquid replacers are in-scope here is the open question, and the audit's proposed EU general canned-food 200 mg/kg is too loose given its own infant-formula reclassification.",
            "recommendation": "IF canned liquid replacers are in-scope, split the cell: canned → Sn read_across to the canned-INFANT-formula tier (EU/UK canned infant formula ~50 mg/kg), NOT the general canned-food 200 mg/kg; non-canned → not_material."
          },
          {
            "subcat": "all subcats except milk-replacers",
            "analyte": "Al [control]",
            "verdict": "TRUE (confirmed sound) — no sovereign sets an aluminium CONTAMINANT maximum for general (non-infant) foods; only additive-residue limits exist.",
            "recommendation": "keep control; per Karen's 'limit anyway' preference, consider a surveillance action value since Al is genuinely present in plant-heavy pet food."
          },
          {
            "subcat": "meat + fish subcats",
            "analyte": "Ni [control]",
            "verdict": "TRUE (confirmed sound) — EU 2024 nickel limits cover plant foods (cereals 800, compiled cell shows eu2024_ni_cereals_800) and infant formula only; no sovereign sets Ni for meat or finfish, consistent with the compiled Ni=control cells on fish/canned-wet.",
            "recommendation": "keep control."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification of the Cat-17 audit: 10 of 11 tighten candidates CONFIRMED, 1 REJECTED; all 8 not-material entries retained (5 keep-not-material confirmed sound, 3 corrections confirmed). Every 'current value' claim in the audit matched the actual compiled Cat-17 cells exactly (read from data/workbench/standards/cat17-compiled JSONs), so the audit faithfully represents current state. CONFIRMED tightenings, all traceable to rows ALREADY IN regulatory_limits.csv at the stated value, same analyte species, comparable product form, and same wet/as-sold-or-as-consumed basis (no basis, species, or supersession failures): (1) HK Cap 132V mercury was never pooled — meat tHg 200→50, cereal tHg 30→20 (veg 10), milk tHg 50→10; (2) the milk-replacer subcat used adult-dairy analogs where stricter IL 'Milk' rows exist in the same instrument — Cd 50→5, iAs 100→10, and (candidate 6) reclassifying these neonatal-animal formulas to the infant-formula analog gives Pb 20→10 (and tHg→4); (3) fish total-Cr 12000→1000 via HK Cap 132V (in-register); (4) iAs plant-carb 100→60 via a stricter same-instrument IL row (medium — applicability depends on a veg/tuber share). KEY STRUCTURAL CORRECTION: the total-Cr 'control' cells on plant-carb and meat subcats ARE factually false, but the verifiable source is HONG KONG Cap 132V item 7 (Cr-total cereals/pulses/meat = 1000, vegetables = 500), which is already in the register and was confirmed current via LegCo/ChemLinked and the Sept-2025 CFS Guidelines — NOT China GB 2762, whose grains/meat Cr value could not be web-confirmed and is unnecessary. This upgrades candidates 8/9 from medium to high and reframes them as a pooling defect needing NO ingest (the coverage_gaps GB-2762 framing is only half-right: GB 2762 grains/meat Cr rows are indeed absent, but the in-register HK rows already carry the value). REJECTED: candidate 11 (Panama Cd=10 on cereals/legumes) — a 4-20x outlier below every other sovereign, the register note carries no explicit source mg/kg value, the Gaceta Oficial 25932 PDF is unverifiable, and the audit itself said do not adopt; almost certainly a 0.1→0.01 mg/kg normalization error, so it fails the 'clearly holds' bar. Not-material corrections all sound: Cr control→read_across (via HK), fish-MeHg needs an explicit cell per Method v2.0 conditional-species rule, and milk-replacer-Sn should split IF canned replacers are in-scope (read across to the canned-infant-formula ~50 mg/kg tier, not the audit's 200). category_confidence 0.35 (slightly below the audit's 0.4): verification turned the misses from proposed to CONFIRMED and showed even the Cr fix is in-register, so current limits demonstrably do not reflect global-strictest in ~10 material cells — but every confirmed miss is a tightening, so the current cells are conservative/over-protective versus strictest, never looser than their analog."
      },
      {
        "category": "Category 24 — Dairy and Milk Products",
        "cells_audited": 88,
        "category_confidence": 0.35,
        "coverage_gaps": [
          {
            "subcat": "dairy-condensed-evaporated",
            "analyte": "Sn",
            "issue": "Cell is canned=true yet Sn is emitted as type:control with value:null. Canned/tinplate condensed & evaporated milk has a direct tin-migration pathway and a directly-applicable sovereign ML exists (EU 2023/915 canned foods other than beverages = 200 mg/kg). Sn is MATERIAL here and must carry a number, not a control."
          },
          {
            "subcat": "dairy-milk-goat-sheep",
            "analyte": "iAs",
            "issue": "iAs set to type:control ('dairy regs set tAs not iAs') but Israel FCS 2016 sets a milk-specific iAs ML of 10 ug/kg (il_fcs2016_ias_1_milk_10) that applies to any ruminant liquid milk. Inconsistent with dairy-milk-cow, which correctly carries a gov iAs cell. Either a gov/read-across 10 or a corrected rationale is required."
          },
          {
            "subcat": "dairy-milk-camel",
            "analyte": "iAs",
            "issue": "Same as goat/sheep: iAs=control while IL milk iAs=10 (il_fcs2016_ias_1_milk_10) is an applicable sovereign limit for liquid milk. Control rationale is factually contradicted by the register."
          },
          {
            "subcat": "dairy-cheese",
            "analyte": "iAs",
            "issue": "iAs=control; Israel sets a general dairy-products iAs ML of 100 ug/kg (il_fcs2016_ias_1_1_dairy_products_100) applicable to cheese as a dairy product. The blanket 'no separate iAs limit exists' rationale is untrue; either read-across 100 or fix the rationale."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "dairy-milk-cow",
            "analyte": "Cd",
            "current_value_ppb": "50",
            "current_binding": "gov/PY (py_decreto1335_2019_fluid_milk_dairy_no_addition_cd_50)",
            "proposed_value_ppb": "5",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "Israel FCS 2016 'Milk' cadmium maximum (0.005 mg/kg). Direct same-form row; compiler pool omitted it and used the looser IL 'Dairy products' 50.",
            "source": "il_fcs2016_cd_1_milk_5 (USDA FAS GAIN IS1101 independently confirms Israel 'Milk' Cd 0.005 vs 'Milk products' 0.05)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-cow",
            "analyte": "tHg",
            "current_value_ppb": "50",
            "current_binding": "gov/VN (vn_qcvn8_2_2011_thg_fluid-milk-products_50)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "IL / HK",
            "proposed_instrument": "Israel FCS 2016 'Milk' tHg 0.01; Hong Kong Cap.132V 'Milk' total-mercury 0.01 (as-consumed drinking milk). Two independent sovereigns.",
            "source": "il_fcs2016_thg_1_milk_10 + hk_cap132v_thg_milk_10 (both web-confirmed: USDA IS1101 Israel milk Hg 0.01; HK CFS Cap 132V Guidelines Sep-2025 lists total-mercury species)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-cow",
            "analyte": "iAs",
            "current_value_ppb": "100",
            "current_binding": "gov/IL (il_fcs2016_ias_1_1_dairy_products_100)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "Israel FCS 2016 'Milk' inorganic-arsenic maximum (milk-specific row, ~10x stricter than the general dairy-products iAs). USDA IS1101 shows Israel has a distinct 'Arsenic (Non-Organic)' column: milk 0.012, milk products 0.12.",
            "source": "il_fcs2016_ias_1_milk_10 (direction robustly confirmed; NOTE value discrepancy — USDA source shows 0.012 mg/kg=12 ppb vs register 10; pin the 2016-edition exact value before publishing)",
            "confidence": "high — CONFIRMED (value 10 vs 12 to reconcile)"
          },
          {
            "subcat": "dairy-milk-goat-sheep",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "read_across/IL (il_fcs2016_tas_1_1_dairy_products_1000)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "PY / MERCOSUR",
            "proposed_instrument": "Paraguay Decreto 1335/2019 & MERCOSUR GMC 12/2011 fluid-milk/dairy-without-addition tAs 50. Same as-consumed liquid-milk matrix already binding cow milk at 50; goat/sheep is a clean same-matrix read-across.",
            "source": "py_decreto1335_2019_fluid_milk_dairy_no_addition_tas_50 (already the trusted cow-milk tAs binding)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-goat-sheep",
            "analyte": "Cd",
            "current_value_ppb": "50",
            "current_binding": "read_across/IL (il_fcs2016_cd_1_1_dairy_products_50)",
            "proposed_value_ppb": "5",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "Read-across from Israel FCS 2016 'Milk' Cd 0.005 — the nearer same-form row than the currently-used IL 'Dairy products' 0.05. Goat/sheep liquid milk is the same product form as cow milk.",
            "source": "il_fcs2016_cd_1_milk_5 (USDA IS1101-confirmed)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-goat-sheep",
            "analyte": "tHg",
            "current_value_ppb": "100",
            "current_binding": "read_across/IL (il_fcs2016_thg_1_1_dairy_products_100)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "IL / HK",
            "proposed_instrument": "Read-across from IL 'Milk' tHg 0.01 / HK 'Milk' total-mercury 0.01 — nearer same-form row than the IL 'Dairy products' 0.1 currently used.",
            "source": "il_fcs2016_thg_1_milk_10 + hk_cap132v_thg_milk_10",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-camel",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "read_across/IL (il_fcs2016_tas_1_1_dairy_products_1000)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "PY / MERCOSUR",
            "proposed_instrument": "PY/MERCOSUR fluid-milk tAs 50; same-matrix liquid-milk read-across (standard already treats camel via liquid-milk read-across). Far stricter than IL general-dairy 1000.",
            "source": "py_decreto1335_2019_fluid_milk_dairy_no_addition_tas_50",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-camel",
            "analyte": "Cd",
            "current_value_ppb": "50",
            "current_binding": "read_across/IL (il_fcs2016_cd_1_1_dairy_products_50)",
            "proposed_value_ppb": "5",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "Read-across from Israel FCS 2016 'Milk' Cd 0.005 — nearer same-form liquid-milk row than IL 'Dairy products' 0.05.",
            "source": "il_fcs2016_cd_1_milk_5 (USDA IS1101-confirmed)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-milk-camel",
            "analyte": "tHg",
            "current_value_ppb": "100",
            "current_binding": "read_across/IL (il_fcs2016_thg_1_1_dairy_products_100)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "IL / HK",
            "proposed_instrument": "Read-across from IL/HK 'Milk' total-mercury 0.01 — nearer same-form row than IL 'Dairy products' 0.1.",
            "source": "il_fcs2016_thg_1_milk_10 + hk_cap132v_thg_milk_10",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-yogurt-cultured",
            "analyte": "Cd",
            "current_value_ppb": "1000",
            "current_binding": "gov/VN (vn_qcvn8_2_2011_cd_fermented-milk-products_1000)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "Israel FCS 2016 general 'Dairy products' Cd 0.05 applies to yogurt (yogurt is unambiguously a dairy product; no concentration mismatch — plain yogurt ~ milk water content). VN 1000 was a single-member (VN-only) pool. NOTE: audit's alternative '5' via IL 'Milk' is REJECTED — yogurt is not liquid milk.",
            "source": "il_fcs2016_cd_1_1_dairy_products_50 (USDA IS1101 confirms 'Milk products' Cd 0.05)",
            "confidence": "medium — CONFIRMED at 50 (not 5)"
          },
          {
            "subcat": "dairy-cream",
            "analyte": "tHg",
            "current_value_ppb": "100",
            "current_binding": "read_across/IL (il_fcs2016_thg_1_1_dairy_products_100)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "VN",
            "proposed_instrument": "Vietnam QCVN 8-2:2011 sets tHg 0.05 uniformly across ALL dairy forms (fluid, powder, cheese, dairy-fat, fermented); cream falls under VN dairy at 50 regardless of sub-form. Stricter than the IL general-dairy 100 read-across, same as-consumed basis, no concentration issue for mercury.",
            "source": "vn_qcvn8_2_2011_thg_dairy-fat-products_50 (and all other VN dairy tHg rows = 50)",
            "confidence": "high — CONFIRMED"
          },
          {
            "subcat": "dairy-condensed-evaporated",
            "analyte": "Sn",
            "current_value_ppb": "null (control)",
            "current_binding": "control (no numeric limit)",
            "proposed_value_ppb": "200000",
            "proposed_jurisdiction": "EU",
            "proposed_instrument": "EU Reg 2023/915 Annex I §3.5.1 — inorganic tin, canned foods other than beverages = 200 mg/kg (200,000 ug/kg). Cell is canned=true (direct tin pathway); 200,000 is the STRICTEST canned-food tin sovereign (Codex/AU-NZ/VN/SG/TH all 250,000). Israel sets the identical 200,000 for canned foods.",
            "source": "eu2023_sn_canned_foods_200000 (register row, CELEX:32023R0915 Annex I §3.5.1) + il_fcs2016_sn_1_canned_foods_except_beverages_200000",
            "confidence": "high — CONFIRMED"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "ALL (cow, goat-sheep, camel, cheese, cream, condensed, powder, yogurt)",
            "analyte": "MeHg",
            "verdict": "TRUE — CONFIRMED. No methylmercury methylation/bioaccumulation pathway in terrestrial-mammal dairy; no sovereign dairy MeHg maximum in the 2994-row register or in targeted web search (USDA/Israel dairy tables carry only total-mercury; HK Cap 132V methyl-mercury MLs exist only for fish/aquatic animals). The control is genuinely substantiated.",
            "recommendation": "keep control (bounded-by-tHg); reflex MeHg speciation only if total Hg approaches the ceiling. No standalone number warranted."
          },
          {
            "subcat": "ALL",
            "analyte": "Cr-VI",
            "verdict": "TRUE — CONFIRMED. No sovereign sets a dairy Cr-VI maximum (register has none; China GB 2762 dairy chromium is total-Cr, explicitly not Cr-VI). Cr(VI) reduces to Cr(III) in the dairy matrix. Control substantiated.",
            "recommendation": "keep control (total-Cr reflex at 100 ug/kg; any quantifiable Cr-VI fails) — a functional limit-anyway."
          },
          {
            "subcat": "non-canned cells (cow, goat-sheep, camel, cheese, cream, powder, yogurt)",
            "analyte": "Sn",
            "verdict": "TRUE — CONFIRMED for non-canned cells (no intrinsic tin pathway; no sovereign non-canned dairy Sn ML). The canned exception is also CONFIRMED: dairy-condensed-evaporated is canned=true and is FALSE as a control — it must carry EU 200,000 ug/kg.",
            "recommendation": "keep control for non-canned cells; set dairy-condensed-evaporated Sn = 200,000 ug/kg (EU 2023/915 canned-foods / IL canned-foods)."
          },
          {
            "subcat": "dairy-cheese / dairy-cream / dairy-condensed-evaporated / dairy-milk-powders / dairy-yogurt-cultured",
            "analyte": "iAs",
            "verdict": "PARTLY FALSE — CONFIRMED as a real defect. The control rationale ('dairy regulations set total-arsenic limits, not a separate inorganic-arsenic limit') is factually contradicted: USDA FAS GAIN IS1101 shows Israel FCS 2016 has a dedicated 'Arsenic (Non-Organic)' = inorganic-arsenic column with 'Milk' 0.012 and 'Milk products' 0.12 mg/kg, and HK Cap 132V lists a distinct 'arsenic (expressed as inorganic arsenic)' species. A sovereign iAs dairy limit does exist.",
            "recommendation": "reclassify to read-across (IL milk iAs ~10-12 for liquid-milk-derived; IL dairy-products iAs ~100-120 for processed) OR at minimum correct the factually-wrong rationale; align with dairy-milk-cow which already carries an iAs cell. NOTE register value 10/100 vs source 12/120 — reconcile."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarially re-verified all 19 tighten candidates and 4 not-material challenges against origin/main:data/evidence/regulatory_limits.csv plus source-document web checks (USDA FAS GAIN IS1101 Israel MoH table; Hong Kong CFS Cap 132V Guidelines Sep-2025; EU 2023/915 via register+eur-lex). VERDICT: 12 tighten candidates CONFIRMED, 7 REJECTED; all 4 not-material challenges CONFIRMED. CONFIRMED (12): all liquid-milk (cow/goat/sheep/camel) Cd->5 and tHg->10, and cow iAs->10 — grounded in Israel FCS 2016's milk-specific row, which the USDA GAIN report independently shows is a genuine separate 'Milk' line (Cd 0.005, Hg 0.01, inorganic-As 0.012) sitting 10x stricter than 'Milk products'; HK Cap 132V independently sets drinking-milk total-mercury 0.01, so tHg->10 is doubly sovereign-backed. The compiled pools provably omitted these milk rows (cow Cd pool held IL dairy-products 50 but not IL milk 5). goat/sheep/camel tAs->50 confirmed via PY/MERCOSUR fluid-milk (the same as-consumed matrix already binding cow at 50). yogurt Cd->50 confirmed via IL general 'Dairy products' (NOT the audit's alternative '5' — yogurt is not liquid milk). cream tHg->50 confirmed (VN sets tHg 50 across every dairy sub-form). canned condensed/evaporated Sn control->200,000 confirmed (EU 2023/915 Annex I §3.5.1 inorganic tin, register- and Israel-corroborated, and the strictest of the canned-food tin sovereigns; Codex/AU-NZ/VN/SG/TH all 250,000). REJECTED (7): cheese/cream/condensed Cd->50 and cheese tHg->10 fail as basis/concentration mismatches — HK reg 3(2)(b) requires MLs to be proportionally scaled UP for concentrated foods, and MERCOSUR itself encodes a deliberate concentration gradient (fluid milk Cd 50 < condensed 100 < cream 200 < cheese 500), so collapsing concentrated forms onto the milk-basis IL general-dairy 50 is exactly the concentration error the method forbids; cheese tHg->10 additionally fails because HK 'secondary milk products' mercury carries Note 10 ('products that are, or are reconstituted to be, ready to drink') — cheese is neither, and its as-consumed liquid basis cannot map to an as-sold concentrated cheese cell. yogurt tAs->50 and tHg->10 rejected — the sub-500/sub-50 routes require treating fermented milk as 'milk' (tHg) or as PY 'dairy without addition, undiluted and unconcentrated' (tAs), both contestable, while VN sets exact-form fermented-milk tAs 500 / tHg 50. milk-powders Cd re-anchor rejected — deriving a powder Cd limit from liquid dairy needs a concentration factor the method forbids outside infant formula; VN powder-milk Cd 1000 is the correct exact-basis anchor (no concrete stricter same-basis sovereign was proposed). All 4 not-material challenges hold: MeHg and Cr-VI dairy controls are genuinely substantiated (no sovereign dairy ML, no pathway); non-canned Sn control TRUE with the canned condensed/evaporated exception; the iAs 'no separate limit' rationale is confirmed FALSE (Israel and HK both set a distinct inorganic-arsenic species column). Two register transcription errors surfaced against the Israeli source (not candidates, flag for fix): il_fcs2016 milk iAs should be 0.012 (12 ppb) not 10, and il_fcs2016 dairy-products Pb should be 0.2 (200 ppb) not 0.02 — Cd and Hg milk/dairy values match the source exactly, so the Cd/Hg candidates are unaffected. Net: the audit's core thesis (compiler defaults to the lax IL general-dairy read-across and to single-member VN outlier pools instead of the strictest applicable same-form sovereign) is upheld for liquid milks, yogurt Cd, cream tHg and canned tin; but its concentrated-form Cd stretches and its fermented-milk tAs/tHg stretches do not survive basis/species/form scrutiny. category_confidence held at 0.35: the current cells still fail to reflect the global-strictest limit in ~12 verified cells (several by 10-20x). coverage_gaps and ppb_pushbacks retained unchanged."
      },
      {
        "category": "Cannabis, Hemp, and CBD Products (HMTc Category 25)",
        "cells_audited": 55,
        "category_confidence": 0.5,
        "coverage_gaps": [
          {
            "subcat": "ALL (register-level)",
            "analyte": "all",
            "issue": "regulatory_limits.csv contains cannabis rows for only US-CA, US-CO, US-MA, US-MD, US-NV and Israel. Three sovereign cannabis regimes with binding-relevant limits are entirely missing: New York OCM (8-element panel, current rev 2025-12-19), Michigan CRA (speciated inorganic arsenic + Cr/Ni/Cu), and Health Canada (a sovereign nation, not a US state). The compiler cannot select what is not loaded, so completeness cannot exceed the register. Load NY/MI/Canada cannabis rows and recompile."
          },
          {
            "subcat": "cannabis-flower / cannabis-concentrates",
            "analyte": "Ni",
            "issue": "Ni is coded control ('no loaded sovereign cannabis rule sets a total-Ni maximum'). New York sets Ni=5 ug/g (5000 ppb) for inhalable cannabis and Michigan also regulates Ni. A sovereign cannabis Ni limit exists for the inhaled cells; the cell should carry a gov/read-across number (5000 ppb, US-NY), not a bare no-number control."
          },
          {
            "subcat": "cannabis-concentrates",
            "analyte": "iAs",
            "issue": "iAs is coded control ('cannabis regulations set arsenic limits without speciation'). Michigan sets a speciated inorganic-arsenic cannabis limit (concentrate 0.200 ug/g = 200 ppb; flower 0.400; other 1.500). A sovereign speciated iAs cannabis limit exists and is not represented; for concentrates 200 ppb is below the tAs=500 bound, so it is a real protective number being omitted."
          },
          {
            "subcat": "cannabis-edibles / cannabis-tinctures-oils / cannabis-topicals",
            "analyte": "Cr",
            "issue": "Cr is set to the Maryland oral/cutaneous total-Cr value 1,100,000 ppb (1100 mg/kg), a PDE-derived number that fails nothing. New York publishes a real Cr cannabis limit (100 ug/g = 100000 ppb, inhalable) an order of magnitude below it; MD's own inhalation Cr is 600 ppb. The oral Cr cell is technically-sourced but non-protective and its per_country map considers only Maryland."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "cannabis-tinctures-oils",
            "analyte": "tHg",
            "current_value_ppb": "400",
            "current_binding": "US-NV nv2020_thg_cannabis_400 (gov); IL absent from per_country despite Israel's generic 'cannabis products' scope",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "IL",
            "proposed_instrument": "IMC-GMP SOP 152 (2016, confirmed active — Israel MoH IMC quality requirements, Ph. Eur. 1433 basis), il_imcgmp152_2016_thg_cannabis_100. Israel's approved product groups include OILS; a sublingual cannabis oil/tincture is the same as-sold oil form the compiler already binds to IL=100 in the sibling concentrates bucket, so omitting it here is a flat binding-min inconsistency. Species tHg=tHg, basis as_sold=as_sold, not superseded.",
            "source": "in-register: il_imcgmp152_2016_thg_cannabis_100 (scope + currency corroborated: Israel MoH IMC-GMP SOP 152, product groups inflorescences/cigarettes/oils/cookies)",
            "confidence": "high (was high; verified — in-register, direct oil-form match, currency confirmed)"
          },
          {
            "subcat": "cannabis-concentrates",
            "analyte": "iAs",
            "current_value_ppb": "none (control, bounded by tAs=500 [US-MA])",
            "current_binding": "control-only",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "US-MI",
            "proposed_instrument": "Michigan CRA Sampling & Testing Technical Guidance for Marihuana Products, Version 5.2 (revised 2024-09-23), Table 2 — row reads verbatim 'Inorganic Arsenic 0.400 0.200 1.500' (flower/concentrate/other ppm); concentrate = 0.200 ppm = 200 ppb. Species is LITERALLY inorganic arsenic (true iAs, not tAs — Michigan is the rare regulator that speciates), form match (MI 'Concentrates' = cannabis-concentrates), product-as-tested/as-sold basis, current, and 200 < tAs=500 bound so genuinely protective.",
            "source": "https://www.michigan.gov/cra/-/media/Project/Websites/cra/bulletin/5Technical/Sampling_and_Testing-_Technical_Guidance_for_Marijuana_Products_694124_7.pdf (primary doc read via reader proxy + independent corroborating search; both return concentrate iAs=0.200 ppm)",
            "confidence": "high (was medium; upgraded — value/species/form/basis/currency all verified against the primary Michigan document)"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "cannabis-flower / cannabis-concentrates (inhaled forms); oral/topical forms retain control",
            "analyte": "Ni",
            "verdict": "FALSE for inhaled forms (CONFIRMED) — sovereign cannabis Ni maxima DO exist: New York Ni=5 ug/g (5000 ppb, inhalable) and Michigan Ni flower 1.000 ppm (1000 ppb) / concentrate 0.500 ppm (500 ppb), verified against the Michigan CRA v5.2 table. The config's 'no LOADED sovereign Ni max' wording is a register-completeness artifact; the substantive 'no sovereign Ni limit exists' reading is false. TRUE for oral/topical forms — NY Ni is inhalable-only and Michigan 'Other Products' Ni = N/A, so no sovereign Ni limit governs edibles/tinctures/topicals.",
            "recommendation": "Reclassify flower and concentrates to gov Ni using the STRICTEST sovereign, which is MICHIGAN (flower 1000 ppb, concentrate 500 ppb) — NOT NY 5000 ppb as originally proposed (Michigan is 5-10x stricter). Keep control for edibles/tinctures/topicals (no applicable sovereign Ni limit). Requires loading NY+MI and recompiling."
          },
          {
            "subcat": "cannabis-concentrates (material effect); flower / edibles / tinctures-oils / topicals (rationale-only)",
            "analyte": "iAs",
            "verdict": "FALSE rationale (CONFIRMED) — Michigan Technical Guidance v5.2 Table 2 literally lists 'Inorganic Arsenic' (flower 0.400, concentrate 0.200, other 1.500 ppm), so the config rationale 'cannabis regulations set arsenic limits without speciation' is factually wrong. The tAs-bounds-iAs numeric logic still holds where tAs is the tighter bound.",
            "recommendation": "Correct the rationale to acknowledge Michigan's speciated inorganic-arsenic limit. Set concentrates iAs=200 ppb (below tAs=500; = confirmed tighten candidate). Flower stays tAs-bounded (tAs 200 < MI iAs 400); edibles/tinctures/topicals stay tAs-bounded (tAs 500 < MI 'other' iAs 1500). Requires loading Michigan."
          },
          {
            "subcat": "cannabis-edibles / cannabis-tinctures-oils / cannabis-topicals",
            "analyte": "Cr",
            "verdict": "CONFIRMED weak/non-protective — MD oral/cutaneous total-Cr=1,100,000 ppb is a genuine sovereign number but non-protective (nothing fails). Real lower cannabis Cr limits verified: NY total-Cr=100 ug/g (inhalable), MD inhalation total-Cr=600 ppb, and — most on-point — Michigan 'Other Products' (non-inhaled) TOTAL chromium = 2.000 ppm = 2000 ppb.",
            "recommendation": "Replace the 1.1M oral/topical cells with Michigan 'Other Products' total-Cr=2000 ppb — SAME total-Cr species AND same non-inhaled route/form (no route mismatch), 550x more protective than MD's 1.1M. Do NOT import MD-inhalation 600 or NY-inhalable 100000 into oral/cutaneous cells (that would be a route mismatch). Requires loading Michigan. Note the Cr(VI) zero-tolerance reflex already supplies the real toxicological guard for oral chromium."
          },
          {
            "subcat": "cannabis-flower / edibles / tinctures-oils / topicals / concentrates",
            "analyte": "Sn",
            "verdict": "TRUE (CONFIRMED) — no sovereign cannabis Sn maximum in CA/CO/MA/MD/NV, nor in New York's 8-element panel (Pb/Cd/As/Hg/Cr/Ni/Cu/Sb) or Michigan's panel (Pb/iAs/Hg/Cd/total-Cr/Ni/Cu), nor Israel, nor Health Canada.",
            "recommendation": "Keep not-material/control; no read-across required. Optionally a control-with-limit for packaging/solder defensibility, but no sovereign basis exists."
          },
          {
            "subcat": "cannabis-flower / edibles / tinctures-oils / topicals / concentrates",
            "analyte": "Al",
            "verdict": "TRUE (CONFIRMED) — no sovereign cannabis Al maximum anywhere checked; the expanded NY and Michigan panels add Cu/Sb/Cr/Ni but not aluminium.",
            "recommendation": "Keep control; no reclassification needed."
          },
          {
            "subcat": "cannabis-flower / edibles / tinctures-oils / topicals / concentrates",
            "analyte": "MeHg",
            "verdict": "TRUE (CONFIRMED) — no methylmercury bioaccumulation pathway in cannabis and no sovereign MeHg cannabis limit; bounded by tHg.",
            "recommendation": "Keep control."
          },
          {
            "subcat": "cannabis-flower / edibles / tinctures-oils / topicals / concentrates",
            "analyte": "Cr-VI",
            "verdict": "TRUE (CONFIRMED) — New York and Michigan both regulate TOTAL chromium, not Cr(VI); no sovereign Cr-VI cannabis limit exists. Total Cr is measured and any quantifiable Cr(VI) fails.",
            "recommendation": "Keep control (zero-tolerance reflex)."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "cannabis-vape-hardware (reserved, not compiled)",
            "analyte": "Ni / all",
            "issue": "The Step-Zero-locked vape-hardware row is correctly NOT expressed in ppb. Its governing quantity is metal RELEASE into inhaled aerosol (mass per puff or ug/day emission), not ug/kg total product content. Forcing a ppb mass basis here would be wrong; the config's reservation is correct and should stay reserved pending Karen's inhalable-hardware decision."
          },
          {
            "subcat": "cannabis-flower / concentrates (inhaled)",
            "analyte": "Ni / Pb / Cd / As",
            "issue": "The strictest inhalation-route toxicological anchors (ICH Q3D / USP <232> inhalation PDEs, e.g. Ni 6 ug/day, As 2 ug/day, Cd 3 ug/day inhalation) are dose-based ug/day exposure limits, not ppb mass concentrations. They cannot be converted to a ppb product limit without a consumption model, so they inform but do not replace the ppb cells. Flag rather than force into ppb."
          }
        ],
        "summary": "Adversarial verification on origin/claude/exciting-hamilton-33cfe4; compiled cells re-derived from data/workbench/standards/cat25-compiled. The audit's factual premise checks out: Israel il_imcgmp152_2016_thg_cannabis_100 (tHg=100, as_sold) binds flower and concentrates but is ABSENT from edibles/tinctures/topicals (which bind Nevada 400), and every iAs/Ni cell is control. TIGHTEN CANDIDATES: 2 of 4 CONFIRMED, 2 REJECTED. CONFIRMED (1) tinctures-oils tHg->100 (IL): Israel SOP 152's 'oils' product group is the same as-sold oil form as the concentrates bucket already bound to IL=100, so the omission is a flat binding-min inconsistency (tHg=tHg, as_sold=as_sold, SOP 152 confirmed active) — confidence raised to high. CONFIRMED (4) concentrates iAs->200 (US-MI): verified against the primary Michigan CRA Technical Guidance v5.2 (2024-09-23) Table 2, which LITERALLY reads 'Inorganic Arsenic ... 0.200' for concentrates — a true speciated iAs (not a tAs mislabel), concentrate form match, product-as-tested basis, current, and 200<tAs=500 bound; confidence raised medium->high. REJECTED (2) edibles tHg->100 (IL): basis mismatch — the 0.1 ppm Hg derives from Ph. Eur. 1433 (a DRIED herbal-drug monograph); applying it to a finished cannabis food edible mixes dried-herbal-drug and as-sold food bases, and Maryland already governs the exact 'edible cannabis products' cell, so it does not clearly hold (SOP 152 does list a 'cookies' group, which weakens but does not clear the basis objection). REJECTED (3) topicals tHg->100 (IL): Israel SOP 152's product groups are inflorescences/cigarettes/oils/cookies with NO topical/cream group, so the Israeli limit is not applicable to the cutaneous cell — form mismatch (audit itself rated low). NOT-MATERIAL: Ni 'no sovereign limit' CONFIRMED FALSE but only for inhaled forms (NY 5000 inhalable; Michigan flower 1000 / concentrate 500 ppb — Michigan, not NY, is the strictest, correcting the audit's NY-5000 recommendation), while oral/topical forms retain a defensible control (NY inhalable-only, MI other=N/A). iAs 'without speciation' rationale CONFIRMED FALSE (Michigan speciates iAs). Cr 1.1M non-protective CONFIRMED, and verification supplies a route-clean fix the audit missed: Michigan 'Other Products' total-Cr=2000 ppb (same total-Cr species AND non-inhaled form, 550x below MD) rather than a route-mismatched inhalation value. Sn/Al/MeHg/Cr-VI not-material verdicts CONFIRMED TRUE — neither NY's 8-element panel (adds Cu/Sb) nor Michigan's (adds Cu) contains tin, aluminium, methylmercury, or hexavalent chromium. Net: the loaded-jurisdiction binding-min arithmetic is correct, but verification HARDENS the conclusion that the compiled standard misses real stricter sovereign limits (Michigan speciated iAs, Michigan Ni, Michigan non-inhaled total-Cr) because NY/MI/Canada are not loaded; category_confidence lowered 0.6->0.5 because current compiled limits demonstrably do not reflect the global-strictest in at least four cells."
      },
      {
        "category": "HMTc Category 26 — Peptides, SARMs, and Research Chemicals (all-control regulatory-vacuum standard)",
        "cells_audited": 55,
        "coverage_gaps": [],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "peptides-injectable-hormones",
            "analyte": "MeHg",
            "verdict": "CONFIRMED under independent adversarial re-verification (not rejected). (a) Biomethylation science is textbook-correct: MeHg forms only via microbial methylation in anoxic aquatic/sediment environments and reaches humans through marine bioaccumulation; abiotic synthesis, purification and reconstitution of injectable peptides has no methylation step. (b) REGISTER CROSS-CHECK (decisive): all 27 MeHg rows in the 2994-row origin/main register are fish/marine-food limits (MX NOM-242, US-FDA CPG 540.600, TH MOPH 414, PH PNS 194, TT Food&Drugs, GSO 193:2021, VN QCVN 8-2) — ZERO for pharmaceuticals/peptides/SARMs, so no sovereign MeHg product limit reaches this class. (c) ICH Q3D lists the PDE explicitly as 'Mercury (inorganic)' (mercuric-chloride basis; oral 30 / parenteral 3 / inhalation 1 ug/day, web-verified), and USP <232> — the pharmacopeial chapter governing this drug class — controls mercury as inorganic/total with no MeHg cell; USP <2232>'s MeHg limit is a dietary-supplement reference (that class routes to Category 16, not here), is dose-based not a ug/kg content limit, and is bounded by tHg regardless. (d) Fail-safe: the tHg total-mercury control cell bounds any organomercury fraction.",
            "recommendation": "keep not-material — no-pathway basis is sound, no sovereign MeHg limit exists for this unapproved-drug class, and the tHg total-mercury control is a fail-safe backstop for any organomercury fraction. No standalone MeHg number or reflex warranted."
          },
          {
            "subcat": "aas-injectable",
            "analyte": "MeHg",
            "verdict": "CONFIRMED (not rejected). Same no-biomethylation logic verified for illicit anabolic-androgenic steroid oils: no marine/microbial methylation step exists in AAS manufacture, and the oil carriers are plant-based (grapeseed/cottonseed/sesame/MCT per the standard's Craven-2025 seed evidence), not marine — so no bioaccumulation route for organomercury. Register cross-check confirms no sovereign AAS/pharma MeHg product limit (all 27 MeHg rows are fish/marine). Any Hg present is inorganic from reagents/catalysts/apparatus and is captured by the tHg total-mercury control.",
            "recommendation": "keep not-material; bounded by the tHg total-mercury control."
          },
          {
            "subcat": "sarms-oral",
            "analyte": "MeHg",
            "verdict": "CONFIRMED (not rejected). Oral SARMs are chemically synthesized APIs with no biomethylation route; no sovereign sets a MeHg product-content limit for this gray-market oral drug class (register MeHg rows are exclusively fish/marine food; USP <232> pharma chapter has no MeHg cell). Any Hg is inorganic and captured by the tHg control.",
            "recommendation": "keep not-material; bounded by the tHg total-mercury control."
          },
          {
            "subcat": "research-chem-raw-powders",
            "analyte": "MeHg",
            "verdict": "CONFIRMED (not rejected). Raw pre-formulation powders are synthetic APIs; no biomethylation route exists in their manufacture. No sovereign MeHg product limit applies to this class (verified against the full register). Any Hg is inorganic and bounded by the tHg total-mercury control.",
            "recommendation": "keep not-material; bounded by the tHg total-mercury control."
          },
          {
            "subcat": "peptides-nasal-sublingual",
            "analyte": "MeHg",
            "verdict": "CONFIRMED (not rejected). Mucosal peptide preparations (nasal/sublingual/troche) share the synthetic-manufacture pathway with the injectable and oral rows; no biomethylation route exists, and carriers are aqueous/glycerin rather than marine. No sovereign MeHg product-content limit reaches this class (register MeHg rows are all fish/marine; USP <232> has no MeHg cell). Any Hg is inorganic and bounded by the tHg total-mercury control.",
            "recommendation": "keep not-material; bounded by the tHg total-mercury control."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "ALL (5 subcats)",
            "analyte": "Pb, Cd, tAs, iAs, tHg, Ni, Sn, Cr, Cr-VI (all 50 control cells)",
            "issue": "ppb (µg/kg) mass-basis does not fit ANY cell in this category. There is no government product-content (µg/kg) limit for this unapproved-drug class, so every cell is deliberately `control` with value:null. The attached escalation anchors are route-appropriate ICH Q3D/USP<232> PDEs expressed in µg/DAY (dose-based permitted daily exposure), not µg/kg. Correct basis = implied elemental daily intake (µg/day) computed from the product's labeled single/max-daily dose, judged against the route PDE. Forcing these into a fixed ppb would REQUIRE the discredited occurrence-percentile term (firewalled staff-only per Part 2/Part 19) and would understate risk for the highest-severity injected route."
          },
          {
            "subcat": "peptides-injectable-hormones / aas-injectable / research-chem-raw-powders",
            "analyte": "Al (parenteral)",
            "issue": "Not ppb. Anchor is FDA 21 CFR 201.323 = 25 µg/L in the finished parenteral SOLUTION as administered (a volume/concentration basis on the injected liquid, plus at-expiry labeling for SVP/pharmacy-bulk). Aluminium is not even an ICH Q3D element. Correct basis = µg/L finished solution as injected, never a µg/kg dry-powder/oil content number."
          },
          {
            "subcat": "sarms-oral",
            "analyte": "Al (oral)",
            "issue": "Not ppb. Anchor is the JECFA provisional tolerable weekly intake 2 mg Al/kg body weight/week and EFSA TWI 1 mg Al/kg-bw/week — a chronic body-weight-normalized intake reference (mg/kg-bw/week), not a product-content µg/kg. No sovereign sets a per-product oral Al content limit outside the lone FSANZ infant-formula entry, which does not apply here."
          },
          {
            "subcat": "peptides-nasal-sublingual",
            "analyte": "Al (mucosal) + all Tier-1/2 mucosal cells",
            "issue": "Not ppb. Al mucosal anchor = FDA 21 CFR 201.323 parenteral aluminium (25 µg/L, most-protective systemic reference) with JECFA/EFSA TWI as chronic reference; other analytes anchor to the most-protective of the parenteral and INHALATION ICH Q3D PDE (µg/day). Cr-VI anchors to the 3 µg/day Cr inhalation PDE across all routes. All dose- or volume-basis, not µg/kg."
          }
        ],
        "category_confidence": 0.9,
        "summary": "ADVERSARIAL VERDICT: the audit proposed 0 tightenings and 0 not-material reclassifications (its 5 weak_not_material entries were affirmations that not-material holds). After adversarial re-verification: 0 tighten candidates (none existed to confirm) and 5/5 not-material determinations CONFIRMED, 0 rejected. The all-control regulatory-vacuum design withstands the challenge — nothing tightens, nothing flips to material.\\n\\nTIGHTEN (0 confirmed, 0 rejected — none proposed): I independently re-ran the vacuum scan against `git show origin/main:data/evidence/regulatory_limits.csv` (2994 rows). The compiler's scope regex (peptide|sarm|selective androgen|anabolic|androgenic|steroid|research chemical|unapproved/misbranded drug|nootropic|GLP-1|secretagogue) returns 0 hits, reproducing the build-blocking vacuum_scan in tools/standards/cat26-config.json. There is no sovereign µg/kg product-content limit for this unapproved-drug class, so there is nothing to tighten TO. The lone convertible read-across (ICH Q3D Option-1 concentration limits, which assume ≤10 g/day intake, e.g. oral Pb 5 µg/day → ~500 µg/kg) is correctly NOT a candidate: at milligram-scale dosing it is LOOSER than the dose-based control, so adopting it would WEAKEN the standard. Confirmed: keep control.\\n\\nNOT-MATERIAL (5/5 MeHg CONFIRMED): The contradicting-evidence search for a real MeHg pathway or MeHg product limit came up empty on every front. (1) All 27 MeHg rows in the register are fish/marine-food limits (MX/US-FDA/TH/PH/TT/GSO/VN) — ZERO for pharmaceuticals/peptides/SARMs — directly proving no sovereign MeHg product limit reaches this class and matching the biomethylation-in-aquatic-environments mechanism. (2) ICH Q3D (web-verified) lists the PDE as 'Mercury (inorganic)', mercuric-chloride basis; USP <232>, the pharmacopeial chapter for this drug class, has no MeHg cell (USP <2232>'s MeHg limit is a dietary-supplement dose reference that routes to Category 16, not here, and is bounded by tHg). (3) Biomethylation is microbial/environmental only; abiotic peptide/SARM/AAS/research-chemical synthesis has no methylation step, and AAS carriers are plant oils not marine. (4) The tHg total-mercury control cell is a fail-safe that bounds any organomercury fraction, so even edge cases are covered.\\n\\nSTRUCTURAL (retained as-is): coverage_gaps=[] and the 4 ppb_pushbacks are kept unchanged — independently corroborated by cat26-config.json (Al parenteral = FDA 21 CFR 201.323 25 µg/L finished solution; Al oral = JECFA/EFSA TWI mg/kg-bw/week; Cr-VI = 3 µg/day ICH Q3D inhalation PDE; every control cell value:null with a dose/volume-based anchor). ppb mass-basis genuinely does not fit any cell.\\n\\ncategory_confidence 0.9 (unchanged): verification strengthens the basis, but the residual uncertainty is fair — one cannot exhaustively prove no obscure national pharmacopoeia has adopted a speciated MeHg pharmaceutical control, though any such adoption would apply to APPROVED drugs and would be dose-based (µg/day), not a µg/kg content limit for this gray-market class, so it would not disturb the all-control design."
      },
      {
        "category": "Cat 27 — Legumes and Pulses",
        "cells_audited": 44,
        "category_confidence": 0.5,
        "coverage_gaps": [
          {
            "subcat": "legumes-pulses-other / soy-products / peanuts / peanut-butter",
            "analyte": "Cr (total)",
            "issue": "STALE COMPILE. Cat 27 cells were compiled 2026-08-13 22:16 (commit 0e9e1d9); the HK Cap. 132V register rows — including hk_cap132v_crtotal_pulses_1000 (Cr-total Pulses = 1000 ug/kg) and hk_cap132v_crtotal_vegetables-other-than-pulses_500 — were ingested 48 min later at 23:04 (commit 931178d). The compiled Cr cells therefore never saw an in-register government Cr-total ML. A recompile of origin/main flips Cr from type=control (null) to type=gov 1000 (HK binds) and also injects HK Pb/Cd pulses 100 into per_country (non-binding). Recompile is required before this standard is defensible."
          },
          {
            "subcat": "ALL (legumes-pulses-other, soy-products, peanuts, peanut-butter)",
            "analyte": "Cr (total), Pb, Cd",
            "issue": "China GB 2762-2022 legume/bean/peanut rows are ENTIRELY ABSENT from regulatory_limits.csv (grep finds zero CN legume-family rows) even though every not-material/control cell claims 'jurisdictions_checked: ...China GB 2762'. Verified missing values (GB 2762-2022, MAPA consolidated tables): Beans Cr-total 1.0 mg/kg (1000 ppb, Table 7); Beans Pb 0.2 / Cd 0.2 (200); Peanuts Cd 0.5 (500); Soy milk Pb 0.05 (50); Bean products Pb 0.3. The Cr beans 1000 is the material one — it independently confirms the HK Cr-total ML and defeats the 'no government sets total-Cr for legumes' claim. Ingest GB 2762-2022 legume rows into the register."
          },
          {
            "subcat": "ALL not-material / control cells",
            "analyte": "Cr-VI, Cr, Sn, Al, MeHg",
            "issue": "The 'jurisdictions_checked' string on every not-material/control cell lists only EU/Israel/MERCOSUR/Paraguay/GSO/FDA/AU-NZ/China GB 2762, omitting HK, Morocco (MA), Panama (PA), Vietnam, India, Thailand, Philippines — all of which are in-register with applicable legume rows, and several of which (HK, China) hold the very Cr-total MLs the cells deny exist. The stated completeness set materially understates the register that was available."
          },
          {
            "subcat": "config (tools/standards/cat27-config.json)",
            "analyte": "Cr (total)",
            "issue": "default_read_across.Cr is hardcoded control_only:true, which forces the control template. Even on a fresh compile the resolveCell path would return gov 1000 from the HK register row (direct wins before the control return), so control_only for Cr is now wrong and must be removed so the register value binds. Compounds the staleness above."
          },
          {
            "subcat": "ALL",
            "analyte": "all",
            "issue": "GB 2762-2025 becomes enforceable 2026-09-02 (~3 weeks out) and supersedes GB 2762-2022; its bean/legume values are not yet incorporated. Re-audit the four cells against GB 2762-2025 before/at that date."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "legumes-pulses-other",
            "analyte": "Cr (total)",
            "current_value_ppb": "null (type=control, 'no government sets a total-Cr ML')",
            "current_binding": "none (control)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "China (GB 2762-2022) AND Hong Kong (Cap. 132V) — both verified to bind",
            "proposed_instrument": "HK Cap. 132V Part 2 item 7 (Chromium) 'Pulses' 1 mg/kg (in-register, current 2025 amendment) AND GB 2762-2022 Table 7 'Beans and bean products / Beans' 1.0 mg/kg. Both are TOTAL chromium (not Cr-VI) on an as-sold mass basis — species, form and basis all match the cell. Verified CURRENT: GB 2762-2025 (enforceable 2026-09-02) makes no heavy-metal changes, so chromium-on-beans is durable past the transition.",
            "source": "register hk_cap132v_crtotal_pulses_1000; GB 2762-2022 Table 7 verified in USDA GAIN CH2023-0040 official translation (p.11) and GB 2762-2017 primary (FSVPS PDF p.10, 豆类 1.0)",
            "confidence": "high"
          },
          {
            "subcat": "soy-products",
            "analyte": "Cr (total)",
            "current_value_ppb": "null (type=control)",
            "current_binding": "none (control)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "China (GB 2762-2022) — soybeans are 豆类/'Beans'",
            "proposed_instrument": "GB 2762-2022 Table 7 category '豆类及其制品 / Beans and bean products' → 'Beans' 1.0 mg/kg. Soybeans are the archetypal 豆类, so the whole-soybean cell is directly covered; HK 'Pulses' excludes soy (FAO), so the binding rests on China, which does cover it. Total-Cr species, as-sold mass basis. Verified CURRENT (GB 2762-2022; GB 2762-2025 retains chromium unchanged). Note: tofu/tempeh ('bean products') are within the category header but the explicit limit line is 'Beans 1.0'; whole soybeans anchor the cell.",
            "source": "GB 2762-2022 Table 7 verified in USDA GAIN CH2023-0040 official translation (p.11) and GB 2762-2017 primary (FSVPS PDF p.10, 豆类及其制品/豆类 1.0)",
            "confidence": "high"
          },
          {
            "subcat": "legumes-pulses-other",
            "analyte": "Cd",
            "current_value_ppb": "40",
            "current_binding": "EU 2023/915 pulses (eu2023_cd_pulses_40)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "Panama (Decreto Ejecutivo 467/2007)",
            "proposed_instrument": "Decreto Ejecutivo 467/2007 heavy-metals table, Gaceta Oficial Digital No. 25932 p.24: Cadmio 'Cereales, legumbres y leguminosas' = 0.01 ppm = 10 ppb. VERIFIED AT PRIMARY SOURCE — the suspected 0.01-vs-0.1 decimal error is REFUTED: the same table uses 0.01, 0.1, 0.2 and 0.3 as distinct deliberate values (e.g. Plomo Frutas = 0.01, Cereales en grano = 0.2), so the 0.01 Cd is intentional. Legumes explicitly named ('legumbres'); Cd elemental species; product-as-marketed (as-sold) mass basis. Strictest applicable (10 < EU 40). Compiler dropped it via a spurious '\\bcereal' scope filter although the row names legumes. Residual check: confirm the 2007 decree remains in force in 2026 (no repeal found; register already treats it as a live PA source).",
            "source": "register pa_decreto467_2007_cd_cereals_legumes_leguminous_vegetables; primary Gaceta Oficial No. 25932 p.24 (via minsa.gob.pa decreto_ejecutivo_467_de_7_de_noviembre_de_2007.pdf, metals table)",
            "confidence": "high"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "ALL (legumes-pulses-other, soy-products, peanuts, peanut-butter)",
            "analyte": "Cr-VI",
            "verdict": "CONFIRMED. The not-material determination for Cr(VI) itself is TRUE — independently verified that no sovereign publishes a hexavalent-chromium food ML; every government chromium food limit found (GB 2762-2022, HK Cap. 132V) is TOTAL chromium. But the cell's written regulatory_basis is FALSE, and the contradicting evidence is real and on-point: HK Cap. 132V sets total-Cr on Pulses 1000 / Vegetables-other-than-pulses 500 (both in-register) and GB 2762-2022 Table 7 sets total-Cr on Beans 1.0 (verified) — so the claim that the only register total-Cr MLs are dairy powder, drinking water and fertiliser is untrue.",
            "recommendation": "Keep Cr-VI as not-material governed by reflex speciation, but rewrite the false regulatory_basis; and set the sibling total-Cr (Cr) cell to gov 1000 per the confirmed Cr tighten candidates."
          },
          {
            "subcat": "ALL",
            "analyte": "Sn",
            "verdict": "CONFIRMED TRUE. Independently verified GB 2762-2022 Table 5 (tin) is canned-only (canned solid food 250, canned beverages 150, canned fruit jam 250, canned infant 50; note: 'canned' = tin-plate packaging); EU 2023/915 tin is likewise canned-only. No jurisdiction sets a non-canned legume/pulse/peanut/soy tin ML. The no-migration-pathway rationale holds.",
            "recommendation": "Keep not-material. Mandatory ICP-MS Sn screen already specified; no standalone numeric limit warranted for non-canned product."
          },
          {
            "subcat": "ALL",
            "analyte": "MeHg",
            "verdict": "CONFIRMED TRUE. No government sets a methylmercury ML for any legume/pulse/peanut/soy product; MeHg MLs are fish/seafood-specific worldwide. Legumes are not a methylation matrix, and MeHg is bounded by the tHg 30 ppb ceiling.",
            "recommendation": "Keep not-material (speciation-bounded by tHg)."
          },
          {
            "subcat": "ALL",
            "analyte": "Al",
            "verdict": "CONFIRMED TRUE for whole legume/soy/peanut foods. No sovereign sets an aluminium CONTAMINANT maximum: GB 2762 explicitly eliminated aluminium (the GB 2762 preface removes maximum levels for selenium, aluminium, fluorine and rare earths — Al sits in the additive standard GB 2760, not the contaminant standard). Caveat verified: AU/NZ Std 1.4.1 Sch 19 sets Al only for soy-based INFANT FORMULA (1000 ppb) and non-soy formula (500) — the infant-formula category, not whole-soy foods.",
            "recommendation": "Keep control. Optionally note the formula-Al carve-out to pre-empt the 'you missed AU/NZ Al' challenge."
          }
        ],
        "ppb_pushbacks": [
          {
            "subcat": "ALL",
            "analyte": "Cr (total)",
            "issue": "When the Cr cell is corrected to gov, use the mass-basis value ONLY. The register's other Cr-total rows are different bases and must NOT be read across to a solid dried commodity: EU 2020/2184 drinking water = 25 ug/L (per-volume water), EU 10/2011 food-contact migration = 'not detectable' ug/kg food-simulant. The correct basis for these cells is as-sold mass ppb (ug/kg), i.e. China/HK Beans/Pulses 1000 ug/kg. Every other Cat 27 analyte is already correctly mass-basis ppb; no other ppb pushback applies."
          }
        ],
        "summary": "Adversarial re-verification of the Cat 27 audit against origin/main register + primary/official regulatory sources. TIGHTEN CANDIDATES: 3 of 6 CONFIRMED, 3 REJECTED. CONFIRMED (all raised to high confidence via source verification): (1) legumes-pulses-other Cr control->gov 1000 — HK Cap. 132V 'Pulses' Cr-total 1000 is in-register on origin/main, and GB 2762-2022 Table 7 'Beans' 1.0 mg/kg was verified in the USDA GAIN CH2023-0040 official translation and GB 2762-2017 primary (豆类 1.0); both are TOTAL Cr, as-sold mass basis, and GB 2762-2025 retains chromium unchanged so it is durable past the 2026-09-02 transition. (2) soy-products Cr control->gov 1000 — soybeans are 豆类/'Beans', so GB 2762-2022 Beans 1.0 binds directly (HK 'Pulses' excludes soy per FAO, so China is the anchor). (3) legumes-pulses-other Cd 40->10 — Panama Decreto 467/2007 'Cereales, legumbres y leguminosas' Cd = 0.01 ppm was verified at the primary Gaceta Oficial No. 25932 p.24; the audit's own suspected 0.01-vs-0.1 decimal error is REFUTED by the source (the table uses 0.01/0.1/0.2/0.3 as distinct deliberate values), and 10 is the strictest applicable (< EU 40). REJECTED: (a) peanuts Cr 1000 and (b) peanut-butter Cr 1000 — peanuts are neither pulses (FAO excludes groundnuts) nor 豆类/Beans (GB 2762-2022 chromium table has no nut/oilseed row, confirmed), so NO direct sovereign total-Cr ML applies; HK 'Pulses' and GB 'Beans' both exclude peanuts, and a bean->peanut read-across is a different provenance state, not the verified government binding the candidate claimed (applicability failure). (c) soy-products Pb 200->50 — product-form/basis mismatch: GB 2762 'Soy milk' 0.05 mg/kg is a liquid ready-to-drink beverage limit and cannot be imported onto the whole-soy-solids (soybean/tofu/tempeh) cell without mixing wet/dry bases; soy-milk routing into soy-products is also disputed, and whole-soybean Pb already binds MERCOSUR 200 = GB 2762 豆类 0.2 with no stricter same-form government value. NOT-MATERIAL: all 4 determinations CONFIRMED. Cr-VI not-material holds for the species (no sovereign sets a hexavalent-Cr food ML anywhere) but its written regulatory_basis is confirmed FALSE (HK Cap. 132V and GB 2762-2022 set TOTAL-Cr MLs on legumes) — rewrite the basis and flip the sibling total-Cr cell to gov 1000. Sn not-material holds (GB 2762-2022 tin verified canned-only; EU tin canned-only; no non-canned legume Sn ML). MeHg not-material holds (MeHg MLs are fish/seafood-only; legumes non-methylating; tHg-bounded). Al control holds (GB 2762 eliminated aluminium as a contaminant — it is a GB 2760 additive; the only Al carve-out is AU/NZ soy INFANT FORMULA, a different category). category_confidence 0.5: two confirmed control->gov 1000 Cr misses (legumes, soy) plus one confirmed Cd miss (general pulses 40->10) mean current published limits do not reflect the strictest government value in three cells, partially offset by confirmation that the peanut/peanut-butter Cr control state and the soy Pb 200 are defensible as-is. coverage_gaps and ppb_pushbacks retained as-is (structural); note that my GB 2762-2025 check found chromium unchanged, so coverage_gap #5's Cr re-audit will not move the value. One honest extension flagged but NOT added as a new candidate (task was to filter, not generate): Panama's 'legumbres y leguminosas' Cd 10 arguably also reaches the soy-products and peanuts Cd cells (currently 200), which would make those looser accumulator-specific cells challengeable."
      },
      {
        "category": "Cat 28 — Nuts, Seeds, and Their Butters (cashews; tree-nuts-high-nickel; nuts-seeds-other; sunflower-seeds; sunflower-seed-butter; nut-seed-butters-other)",
        "cells_audited": 66,
        "coverage_gaps": [
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Pb",
            "issue": "Register (regulatory_limits.csv, origin/main) contains ZERO China GB 2762 nut/seed rows and ZERO Brazil IN 160/2022 nut rows. Every China row in the register is dairy/infant-food/student-articles/adornments; every Brazil row is infant-formula/cosmetic-colorant. The compiler's not_material notes assert 'jurisdictions_checked: ...China GB 2762' but for Pb that jurisdiction was never actually in the data — China GB 2762-2022 sets 'Nuts and seeds (excl. raw/roasted coffee beans)' Pb = 0.2 mg/kg = 200 ppb, which contradicts the 1000-ppb read-across chosen. Root cause of the loose Pb across the whole category is register incompleteness, not a selection error. (VERIFIED on re-audit: git show origin/main register confirms no CN/BR nut rows; GAIN CH2023-0040 primary text confirms the 0.2 value.)"
          },
          {
            "subcat": "tree-nut subcats",
            "analyte": "tAs",
            "issue": "Brazil IN 160/2022 (RDC 722/2022) sets a tree-nut-specific total-As row 'Castanhas, incluindo nozes, pistaches, avelãs, macadâmia e amêndoas' = 0.80 mg/kg = 800 ppb, absent from the register; the compiler used IL oilseeds tAs 1000 for a tree-nut cell where a stricter sovereign tree-nut-specific value exists. (VERIFIED total-As, not inorganic.)"
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Cd",
            "issue": "No coverage defect in the cell (EU tree-nut 200 / oilseed 100 / sunflower 500 correctly selected), but the register omission of China GB 2762 was also checked here: China lists only Nuts-and-seeds/Peanut Cd 0.5 (routes to Cat 27), so China does NOT bind Cd for tree nuts/oilseeds/sunflower. EU selections stand. Recorded to show China was verified for Cd, not assumed. (VERIFIED: GAIN Cd table shows only 'Peanut 0.5' under Nuts and seeds.)"
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "cashews",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "read_across — IL FCS-2016 oilseeds & olives (il_fcs2016_pb_6_oilseeds_and_olives_1000)",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "GB 2762-2022 Table 1 (Lead), 'Nuts and seeds (excluding raw coffee beans and roasted coffee beans)' = 0.2 mg/kg. VERIFIED against USDA GAIN CH2023-0040 primary text (Table 1 row + Appendix A: 'Nuts and seeds' > 'Tree nuts'). Standard in force 2023-06-30 (current; GB 2762-2025 effective 2026-09-02, value unchanged). Basis as-sold (matches cell); species Pb. Cashew is a tree nut = direct category hit.",
            "source": "https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=China+Releases+the+Standard+for+Maximum+Levels+of+Contaminants+in+Foods_Beijing_China+-+People%27s+Republic+of_CH2023-0040.pdf (GB 2762-2022 Table 1 + Appendix A)",
            "confidence": "high — CONFIRMED (direct category hit, primary-text verified; basis/species/currency all clean)"
          },
          {
            "subcat": "tree-nuts-high-nickel",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "read_across — IL FCS-2016 oilseeds & olives",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "GB 2762-2022 Table 1 'Nuts and seeds (excl. coffee beans)' Pb 0.2 mg/kg; Appendix A 'Tree nuts' subcategory. VERIFIED. Walnut/pine nut/Brazil nut/chestnut are all tree nuts under this category. Brazil IN 160/2022 §1.3 tree-nut Pb 0.80 mg/kg is real (line 723) but looser — China 200 controls.",
            "source": "USDA GAIN CH2023-0040 (GB 2762-2022 Table 1 + Appendix A); Brazil IN 160/2022 §1.3 (secondary, looser)",
            "confidence": "high — CONFIRMED (all members are tree nuts; primary-text verified)"
          },
          {
            "subcat": "nuts-seeds-other",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds & olives",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "GB 2762-2022 Table 1 'Nuts and seeds' Pb 0.2 mg/kg; Appendix A category covers Tree nuts + 'Oil seeds (exclusive of grain seeds and beans)' (sesame/flax/pumpkin/sunflower). VERIFIED — top-level category limit, no sub-splits for lead.",
            "source": "USDA GAIN CH2023-0040 (GB 2762-2022 Table 1 + Appendix A)",
            "confidence": "high — CONFIRMED (top-level category limit spans all nut/seed members; verified)"
          },
          {
            "subcat": "sunflower-seeds",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds & olives",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "GB 2762-2022 Table 1 'Nuts and seeds' Pb 0.2 mg/kg; Appendix A lists 'Oil seeds (exclusive of grain seeds and beans)' under 'Nuts and seeds' → sunflower covered. VERIFIED.",
            "source": "USDA GAIN CH2023-0040 (GB 2762-2022 Table 1 + Appendix A)",
            "confidence": "high — CONFIRMED (sunflower is an oil seed under the category; verified)"
          },
          {
            "subcat": "sunflower-seed-butter",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds & olives",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "Read-across within GB 2762-2022: 'Nut or seed paste (such as peanut butter, etc.)' is a subcategory of 'Nuts and seeds products' under parent 'Nuts and seeds' (Appendix A). The standard sets NO separate paste lead row (VERIFIED — only 'Nuts and seeds 0.2' and 'coffee beans 0.5' in Table 1), so the parent Pb 0.2 mg/kg governs. Explicit exclusion of ROASTED coffee beans confirms processed forms are in-scope of the category.",
            "source": "USDA GAIN CH2023-0040 (GB 2762-2022 Table 1 + Appendix A line: 'Nut or seed paste')",
            "confidence": "medium — CONFIRMED (within-standard hierarchical read-across to paste subcategory; one interpretive step but well-founded)"
          },
          {
            "subcat": "nut-seed-butters-other",
            "analyte": "Pb",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds & olives",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "China (CN)",
            "proposed_instrument": "Read-across from GB 2762-2022 'Nut or seed paste' subcategory → parent 'Nuts and seeds' Pb 0.2 mg/kg (no separate paste lead row; VERIFIED). Secondary: Brazil IN 160/2022 §1.3 tree-nut Pb 0.80 mg/kg (real, looser).",
            "source": "USDA GAIN CH2023-0040 (GB 2762-2022 Table 1 + Appendix A)",
            "confidence": "medium — CONFIRMED (paste-subcategory inheritance; verified no looser paste limit exists)"
          },
          {
            "subcat": "cashews",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "read_across — IL FCS-2016 oilseeds tAs (il_fcs2016_tas_5_3_oilseeds_1000)",
            "proposed_value_ppb": "800",
            "proposed_jurisdiction": "Brazil (BR)",
            "proposed_instrument": "IN 160/2022 §1.1 'Arsênio total', 'Castanhas, incluindo nozes, pistaches, avelãs, macadâmia e amêndoas' = 0.80 mg/kg. VERIFIED as TOTAL arsenic: section header is 'Arsênio total' and this row carries NO 'LMT para arsênio inorgânico' override (only rice/infant rows do). Species matches the tAs cell (NOT iAs). Basis as-sold. Cashew = 'castanha de caju', covered by the general head-term 'Castanhas'.",
            "source": "https://nutrisafety.com.br/wp-content/uploads/2022/07/Instru%C3%A7%C3%A3o-Normativa-%E2%80%93-IN-n%C2%BA-160-de-01-de-julho-de-2022-LMT-Contaminantes-em-Alimentos.pdf (IN 160/2022 §1.1, castanhas row)",
            "confidence": "medium — CONFIRMED (total-As species verified; cashew under general 'Castanhas', not explicitly enumerated = one interpretive step)"
          },
          {
            "subcat": "tree-nuts-high-nickel",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "read_across — IL FCS-2016 oilseeds tAs",
            "proposed_value_ppb": "800",
            "proposed_jurisdiction": "Brazil (BR)",
            "proposed_instrument": "IN 160/2022 §1.1 total-As 'Castanhas, incluindo nozes, pistaches, avelãs, macadâmia e amêndoas' 0.80 mg/kg. VERIFIED total-As. Walnut = 'nozes' EXPLICITLY enumerated; Brazil nut & chestnut covered by general 'Castanhas' (the Cd section explicitly excepts 'Castanha-do-Brasil', proving the general term otherwise includes it); pine nut by read-across.",
            "source": "Brazil IN 160/2022 §1.1 (nutrisafety consolidated text, castanhas row)",
            "confidence": "medium — CONFIRMED (strongest tAs cell: walnut explicitly enumerated; total-As verified)"
          },
          {
            "subcat": "nuts-seeds-other",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds tAs",
            "proposed_value_ppb": "800",
            "proposed_jurisdiction": "Brazil (BR)",
            "proposed_instrument": "IN 160/2022 §1.1 total-As castanhas 0.80 mg/kg. VERIFIED total-As. Almond/pistachio/hazelnut/macadamia members are EXPLICITLY enumerated in the Brazil row; the cell also contains oil seeds (sunflower/sesame/flax) NOT covered, so 0.80 binds the cell as the strictest-applicable protective value across its tree-nut members.",
            "source": "Brazil IN 160/2022 §1.1 (nutrisafety consolidated text, castanhas row)",
            "confidence": "low — CONFIRMED but heterogeneous cell (tree-nut members explicitly covered; oil-seed members are a scope-stretch — bind-to-strictest is protective, not a direct cell match)"
          },
          {
            "subcat": "nut-seed-butters-other",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "gov — IL FCS-2016 oilseeds tAs",
            "proposed_value_ppb": "800",
            "proposed_jurisdiction": "Brazil (BR)",
            "proposed_instrument": "Read-across from Brazil IN 160/2022 §1.1 total-As tree-nut 0.80 mg/kg (butters are ground tree nuts; as-sold mass basis, no concentration/dilution step vs whole nut). VERIFIED total-As source.",
            "source": "Brazil IN 160/2022 §1.1 (nutrisafety consolidated text, castanhas row)",
            "confidence": "low — CONFIRMED (whole-nut→butter read-across layered on the castanhas-scope read-across; two interpretive steps but defensible)"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "ALL 6 subcats",
            "analyte": "iAs",
            "verdict": "TRUE — CONFIRMED on re-audit. No sovereign sets an inorganic-As ML for any nut/seed/butter. Critically, Brazil's nut arsenic row (Castanhas 0.80) is TOTAL arsenic (verified: no 'arsênio inorgânico' note), NOT inorganic — so it does not create an iAs ML and does not disturb this claim. Inorganic-As MLs remain scoped to rice and a few hyperaccumulating matrices; nuts do not hyperaccumulate As. Bounded-by-tAs control is sound.",
            "recommendation": "keep not-material (speciation-bounded); no change. Reflex-speciate only when tAs nears ceiling — retain."
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "MeHg",
            "verdict": "TRUE — CONFIRMED. MeHg MLs exist only for fish/seafood; nuts are not a methylation matrix. Bounded by tHg.",
            "recommendation": "keep not-material; no change."
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Cr-VI",
            "verdict": "TRUE — CONFIRMED. No sovereign sets total-Cr or Cr-VI for nuts/seeds; China GB 2762 Cr is scoped to milk powder (2000) / liquid milk (300) only (register-verified). Reflex-speciation control (>=100 ppb total-Cr triggers Cr-VI, any quantifiable Cr-VI fails) is a strong defensible control.",
            "recommendation": "keep not-material + reflex control; no change."
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Sn",
            "verdict": "TRUE for non-canned — CONFIRMED. Every Sn ML (EU/China 50000 tinplate, IN canned chestnut 250000, BR canned infant 50000) is scoped to canned/tinplate migration; whole nuts/seeds/butters are not tin-packed. Correctly routed away.",
            "recommendation": "keep not-material (no-migration-pathway); ensure any canned nut SKU routes to canned-foods Sn ML."
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Al",
            "verdict": "TRUE — CONFIRMED. No sovereign sets an Al contaminant maximum for plain nuts/seeds/butters in any jurisdiction checked (incl. GB 2762-2022, which has no Al table for these).",
            "recommendation": "keep as control (screen + additive-rule compliance). Defensibility read-across not warranted now."
          },
          {
            "subcat": "ALL 6 subcats",
            "analyte": "Cr (total)",
            "verdict": "TRUE — CONFIRMED. No sovereign total-Cr ML for nuts/seeds; register total-Cr rows are dairy powder/drinking water/fertiliser only, and GB 2762-2022 sets Cr only for milk powder/water. No standalone number defensible.",
            "recommendation": "keep as control tied to Cr-VI reflex; no standalone number defensible."
          }
        ],
        "ppb_pushbacks": [],
        "category_confidence": 0.3,
        "summary": "Adversarial re-verification of all 10 Cat-28 tighten candidates against primary sources. RESULT: 10 CONFIRMED, 0 REJECTED — both underlying regulations are real, current, correctly speciated, and basis-matched. (1) LEAD, all 6 subcats: GB 2762-2022 Table 1 (Lead) sets 'Nuts and seeds (excl. raw/roasted coffee beans)' = 0.2 mg/kg = 200 ppb, verified in the USDA GAIN CH2023-0040 primary text (line 191); Appendix A confirms the category spans Tree nuts + 'Oil seeds' (sunflower/sesame/flax) and a 'Nut or seed paste (peanut butter)' subcategory with NO separate looser paste lead row (so pastes inherit 0.2). Report explicitly states GB 2762-2022 replaces GB 2762-2017 and entered force 2023-06-30 → CURRENT (GB 2762-2025 not effective until 2026-09-02, value unchanged). Basis as-sold matches the cells; species Pb. Whole-nut cells (cashews/tree-nuts-high-Ni/nuts-seeds-other/sunflower-seeds) = HIGH; butter cells (sunflower-seed-butter/nut-seed-butters-other) = MEDIUM via within-standard paste-subcategory inheritance. (2) TOTAL ARSENIC, 4 tree-nut cells: Brazil IN 160/2022 §1.1 'Arsênio total' row 'Castanhas, incluindo nozes, pistaches, avelãs, macadâmia e amêndoas' = 0.80 mg/kg = 800 ppb, verified in the consolidated primary text (line 93). CRITICAL SPECIES CHECK PASSED — the main trap avoided: the row carries NO 'arsênio inorgânico' override (only rice/infant rows do), so it is TOTAL arsenic and correctly maps to the tAs cell, NOT iAs. Basis as-sold; current. cashews/high-Ni = MEDIUM (walnut explicitly 'nozes'; cashew/Brazil-nut/chestnut under general 'Castanhas' — the Cd section's explicit exception of Castanha-do-Brasil proves the general term includes it); nuts-seeds-other/butters = LOW (protective strictest-applicable across enumerated tree-nut members / whole-nut→butter read-across). No candidate is a species, basis, migration, canned, or currency mismatch. Cross-checks: GB 2762-2022 sets NO nut arsenic/Hg/Sn/Ni/Cr limit (only Pb 0.2 and peanut-Cd 0.5), so Brazil 800 is the strictest applicable tAs; Brazil §1.3 lead castanhas 0.80 is real but looser than China 200. Register-incompleteness root cause CONFIRMED: git-show of origin/main register shows 0 China GB 2762 nut Pb rows and 0 Brazil IN 160 tree-nut rows (all 61 CN rows are dairy/infant/student-articles/adornments; all 5 BR rows are infant/cosmetic), so the min-selection never saw the stricter sovereigns despite the not_material notes claiming China GB 2762 was 'checked'. All 6 not-material/control claims (iAs, MeHg, Cr-VI, Sn, Al, Cr-total) survive adversarial re-check and are retained. category_confidence 0.30: the current compiled Pb (all 6 subcats) and tree-nut tAs (4 cells) limits are verified to be materially looser than the strictest applicable government value."
      },
      {
        "category": "Edible Fungi (HMTc Category 29) — 3 subcategories: cultivated-mushrooms (common/button + other farmed), wild-mushrooms, cultivated-mushrooms-oyster-shiitake",
        "cells_audited": 33,
        "coverage_gaps": [
          {
            "subcat": "all-three",
            "analyte": "Pb/Cd/tAs/tHg",
            "issue": "jurisdictions_checked strings claim 'China GB 2762' was checked, but regulatory_limits.csv contains ZERO China (CN) fungi rows — China GB 2762-2022 fungi limits (Pb 500, Cd 200, total-As 500, tHg 100 ug/kg) are absent from the register. Verified via web: none of these tighten a cultivated cell, but they DO undercut the wild anchors (CN Pb 500 < wild 800; CN Cd 200 < wild 500). Register should ingest the CN GB 2762-2022 fungi rows so the per_country map is honest and the min-check is complete. (Structural traceability gap — kept as-is; verification note: China GB 2762 chromium is set for grains/vegetables/beans/meat/aquatic but NOT the separate edible-fungi 食用菌 category, so no CN total-Cr fungi row is expected.)"
          },
          {
            "subcat": "wild-mushrooms",
            "analyte": "tAs",
            "issue": "tAs binds IL 'including mushrooms' 1000 only; the MERCOSUR/PY 'mushrooms except Agaricus/Pleurotus/Lentinula/Lentinus' tAs 100 row (textually applicable to non-genera WILD species like boletus/chanterelle/morel) was excluded by the wild scope_exclude 'excluding'/'except agaricus'. Not a missing-analyte gap but a min-selection gap — see tighten_candidates."
          },
          {
            "subcat": "cultivated-mushrooms",
            "analyte": "Pb/tAs",
            "issue": "Row scope is 'button/Agaricus bisporus AND other common farmed fungi' but binds the 4-genera value (Pb 300/tAs 300). Common farmed fungi OUTSIDE the 4 genera (enoki/Flammulina, beech/Hypsizygus, maitake/Grifola, wood ear/Auricularia, nameko) fall under MERCOSUR/PY/MA 'mushrooms except...' Pb 100 / tAs 100. No sub-partition exists for them, so those species are certified 3x looser than the strictest applicable sovereign. VERIFICATION NOTE: confirmed via FAO primary source (arg115006) that MERCOSUR PARTE III lists Grifola/Flammulina/Auricularia/Hipsizygus as cultivated genera outside the 4-genera exception, so MERCOSUR Pb 100/tAs 100 genuinely applies to that slice. The correct remedy is a SCOPE SPLIT (narrow the cell to the 4 genera and add an 'other cultivated fungi' subcategory), NOT a whole-cell numeric tighten — see the two rejected cultivated tighten_candidates."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "wild-mushrooms",
            "analyte": "Cd",
            "current_value_ppb": "500",
            "current_binding": "EU eu2023_cd_wild_fungi_500 (also CH VHK 2026)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "MERCOSUR / Paraguay (Decreto 1335/2019)",
            "proposed_instrument": "MERCOSUR GMC 12/11 & PY Decreto 1335/2019 — 'Setas (hongos) excepto las del género Agaricus, Pleurotus y Lentinula o Lentinus' Cd 0,05 mg/kg. Primary source (FAO arg115006) PARTE III defines the mushroom category to INCLUDE wild species (Setas Silvestres: Agaricus, Cantharellus, Tuber, Morchella, Boletus, Lactarius, Lepista, Russula...), so wild forest fungi (boletus/chanterelle/morel) definitionally bind the except-genera row.",
            "source": "mercosur_gmc12_2011_mushrooms_except_agaricus_pleurotus_lentinula_lentinus_cd_50 ; py_decreto1335_2019_..._cd_50 ; PRIMARY-VERIFIED https://faolex.fao.org/docs/pdf/arg115006.pdf",
            "confidence": "CONFIRMED on all 3 verification criteria: value REAL (primary-source FAO PDF matches register), APPLICABLE (species Cd=Cd; fresh/wet basis = EU wet-weight fresh; reg's own PARTE III places wild species in the except-genera row), CURRENT (RES 18/21 modified only the rice-arsenic row; the cadmium table and mushroom rows are untouched). Sole barrier is the RATIFIED accumulation-biology carve-out OI-20260813 (EU/CH set the wild-specific 500 because wild fungi hyperaccumulate Cd, which would make wild boletus/porcini essentially always fail at 50). Literal Method-v2.0 strictest-applicable-sovereign points to 50 — genuine Karen-level policy decision, not a verification failure."
          },
          {
            "subcat": "wild-mushrooms",
            "analyte": "Pb",
            "current_value_ppb": "800",
            "current_binding": "EU eu2023_pb_wild_fungi_800 (also CH)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "MERCOSUR / Paraguay (Decreto 1335/2019)",
            "proposed_instrument": "MERCOSUR GMC 12/11 & PY Decreto 1335/2019 — 'Setas (hongos) excepto las del género Agaricus, Pleurotus y Lentinula o Lentinus' Pb 0,10 mg/kg (primary-verified vs FAO arg115006). Intermediate applicable sovereigns also stricter than 800: IL mushrooms 300, VN mushrooms 300. Wild non-genera species fall in the except-genera row per the reg's own PARTE III definition.",
            "source": "mercosur_gmc12_2011_mushrooms_except_agaricus_pleurotus_lentinula_lentinus_pb_100 ; py_decreto1335_2019_..._pb_100 ; PRIMARY-VERIFIED https://faolex.fao.org/docs/pdf/arg115006.pdf",
            "confidence": "CONFIRMED on all 3 criteria: REAL (FAO PDF except-genera Pb 0,10 / genera Pb 0,30 matches register exactly), APPLICABLE (Pb=Pb; fresh/wet basis; wild species definitionally in except-genera row), CURRENT (RES 18/21 did not touch the lead table). EU/CH wild-fungi 800 is among the LOOSEST sovereign Pb treatments; ≥3 sovereigns set a stricter applicable value. Same ratified accumulation-biology carve-out (OI-20260813) is the only barrier — Karen-level policy call."
          },
          {
            "subcat": "wild-mushrooms",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "IL il_fcs2016_tas ('fruits and vegetables including mushrooms')",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "MERCOSUR / Paraguay (Decreto 1335/2019)",
            "proposed_instrument": "MERCOSUR GMC 12/11 & PY Decreto 1335/2019 — 'Setas (hongos) excepto las del género Agaricus, Pleurotus y Lentinula o Lentinus' total-As 0,10 mg/kg (primary-verified vs FAO arg115006). 10x stricter than the IL 1000 currently selected; applies to wild non-genera species per the reg's own PARTE III wild-species list.",
            "source": "mercosur_gmc12_2011_mushrooms_except_agaricus_pleurotus_lentinula_lentinus_tas_100 ; py_decreto1335_2019_..._tas_100 ; PRIMARY-VERIFIED https://faolex.fao.org/docs/pdf/arg115006.pdf",
            "confidence": "CONFIRMED on all 3 criteria: REAL (FAO PDF except-genera As 0,10), APPLICABLE — SPECIES CHECK PASSED: both current (IL 1000) and proposed (MERCOSUR 100) are TOTAL arsenic, not iAs; fresh/wet basis matches. CURRENCY CHECK PASSED with the caveat verified: RES 18/21 DID amend the MERCOSUR arsenic table, but ONLY for 'Arroz y sus derivados excepto aceite' (rice) — the mushroom total-As rows are NOT superseded and remain current. Wild tAs 1000 is the single loosest cell in Cat 29; a 10x-stricter applicable sovereign sits in our own register. Same ratified carve-out (OI-20260813) is the only barrier."
          }
        ],
        "weak_not_material": [
          {
            "subcat": "all-three",
            "analyte": "Sn",
            "verdict": "CONFIRMED TRUE (no-migration-pathway) — every sovereign Sn ML in the register (incl. India canned mushrooms and Costa Rica canned fishery 200000) is scoped to canned/tin-coated product; the tinplate-migration pathway is genuinely absent in fresh, non-canned mushrooms. No fresh-fungi Sn ML exists in any jurisdiction (register-confirmed; China GB 2762 also has no fresh-fungi Sn).",
            "recommendation": "keep not-material (no-migration-pathway). Ensure canned mushroom products route to the canned-foods category where the Sn ML binds."
          },
          {
            "subcat": "all-three",
            "analyte": "Cr-VI",
            "verdict": "CONFIRMED TRUE — no total-Cr or Cr-VI ML for edible fungi in any jurisdiction. Register total-Cr rows are only CN dairy powder 2000/liquid milk 300 plus drinking-water Cr-total (CA/WHO/AU 50); none are fungi. Web-verified: China GB 2762-2022 sets chromium for grains/vegetables/beans/meat/aquatic animals but NOT the separate edible-fungi (食用菌) category, so CN vegetable Cr does not extend to fungi. Reflex-speciation control (any total-Cr >=100 ug/kg triggers Cr-VI; any quantifiable Cr-VI fails) is a firm, substantiated control.",
            "recommendation": "keep not-material with the reflex control."
          },
          {
            "subcat": "cultivated-mushrooms / cultivated-mushrooms-oyster-shiitake",
            "analyte": "MeHg",
            "verdict": "CONFIRMED — reclassify not_material→control (bounded_by tHg). The contradicting evidence is REAL and on-point: fungi bioconcentrate substrate mercury (the repo's own source falandysz2020-yunnan-fungi-mercury documents mushroom Hg accumulation), and the wild cell already (correctly) uses 'control'. Cultivated fungi grow on controlled substrate so methylation risk is lower, but not zero (contaminated substrate is possible); no MeHg ML exists for any fungi anywhere. This is a low-stakes defensibility/consistency hardening, not a correction of a false claim — behaviourally identical (reflex on lots approaching the tHg 30 ceiling).",
            "recommendation": "reclassify cultivated MeHg from not_material to control (bounded_by tHg) for consistency with the wild cell and to remove a plaintiff-exploitable asymmetry."
          },
          {
            "subcat": "all-three",
            "analyte": "Ni (control)",
            "verdict": "CONFIRMED control TRUE — web-verified: EU 2024/1987 nickel covers tree nuts, vegetables (incl. herbs/seaweed), legumes, oilseeds, cocoa, baby food, and juices but does NOT list fungi/mushrooms (EU consistently treats fungi as a separate category from 'vegetables' in its contaminant tables). No sovereign sets a fungi Ni ML (register-confirmed).",
            "recommendation": "Karen 'limit-anyway' option remains available: a disclosed read-across from EU/CH fruiting-vegetable Ni 400 ug/kg would add defensibility over a pure control, since a numeric near-neighbour sovereign value exists. Optional, not required."
          },
          {
            "subcat": "all-three",
            "analyte": "Cr (total, control) / Al (control)",
            "verdict": "CONFIRMED control TRUE — no total-Cr or Al contaminant ML for edible fungi in any jurisdiction (register-confirmed: total-Cr only CN dairy + drinking water; Al has no food contaminant ML anywhere — Al is regulated as a food additive with a JECFA PTWI, not as a contaminant maximum level). China GB 2762 Cr does not extend to fungi (web-verified).",
            "recommendation": "keep as control. Optional defensibility hardening: total-Cr could read-across CN vegetables Cr 500 ug/kg with disclosure; Al has no credible near-neighbour so control is the only honest posture."
          }
        ],
        "ppb_pushbacks": [],
        "category_confidence": 0.4,
        "summary": "VERDICT: 3 of 5 tighten candidates CONFIRMED, 2 REJECTED; all 5 not-material/control verdicts survive adversarial challenge. Confirmed (all three WILD): Cd 500→50, Pb 800→100, tAs 1000→100. These passed every verification test — (a) REAL: primary-source-verified against the FAO PDF of MERCOSUR GMC 12/11 (arg115006), which shows 'Setas (hongos) excepto las del género Agaricus, Pleurotus y Lentinula o Lentinus' at Pb 0,10 / Cd 0,05 / As 0,10 and the genera row at Pb 0,30 / Cd 0,20 / As 0,30, matching the register exactly; (b) APPLICABLE: species clean (total-As=total-As, Pb=Pb, Cd=Cd — no iAs/tAs confusion), fresh/as-sold wet-weight basis matches the EU wet-weight anchor (dried rows correctly excluded), and the regulation's OWN PARTE III definition lists Setas Silvestres (Boletus, Cantharellus, Morchella, Tuber, Lactarius…) so wild forest species definitionally fall in the strict except-genera rows; (c) CURRENT: MERCOSUR RES 18/21 modified only the rice-arsenic row of the arsenic table (verified) — the mushroom rows and the Pb/Cd tables are untouched, and Paraguay Decreto 1335/2019 stands as a current sovereign instrument. The ONLY barrier to these three is the ratified accumulation-biology carve-out OI-20260813 (EU/CH deliberately set wild-specific 500/800 because wild fungi hyperaccumulate; binding 50/100 would fail nearly all wild boletus/porcini). That is a legitimate Karen-level policy override, NOT a verification failure — under literal Method-v2.0 strictest-applicable-sovereign the facts point to 50/100/100 and the divergence is real and now primary-source-confirmed. REJECTED (both CULTIVATED numeric tightenings, Pb 300→100 and tAs 300→100): as whole-cell tightenings they would over-tighten the dominant Agaricus button + EU-named oyster/shiitake below their applicable sovereign floor (EU cultivated fungi / MERCOSUR genera = 300), which is not a strictest-applicable-sovereign move; the supporting Morocco citation is additionally REFUTED (Arrêté 2410-22 row 3.1.13 explicitly EXCLUDES champignons — 'à l'exclusion des … champignons' — and row 3.1.14 sets only the 3 cultivated genera at Pb 300, so Morocco provides no Pb 100 for non-genera fungi). The valid underlying finding (non-genera farmed species enoki/maitake/wood-ear have a stricter applicable MERCOSUR Pb 100/tAs 100 and the broad cell lacks a sub-partition) is genuine but STRUCTURAL — the remedy is a scope split, already captured in coverage_gaps (kept as-is), not a numeric tighten of the conflated cell. Not-material/control: all confirmed — Sn (no fresh-fungi migration pathway), Cr-VI and total-Cr (no fungi ML anywhere; China GB 2762 chromium excludes the edible-fungi category, web-verified), Ni (EU 2024/1987 nickel excludes fungi, web-verified), Al (regulated as additive, not contaminant); the one actionable change is reclassifying cultivated MeHg not_material→control for consistency with the wild cell (real evidence of fungal Hg bioconcentration; behaviourally identical). category_confidence 0.40: verification INCREASED certainty that the wild row does not reflect the strictest applicable sovereign (now primary-source-proven), while refuting the audit's cultivated numeric claims; the single open item is the Karen ruling on whether the ratified wild carve-out overrides literal strictest-anywhere."
      },
      {
        "category": "Cat 30 — Culinary Oils and Fats",
        "cells_audited": 22,
        "coverage_gaps": [
          {
            "subcat": "fat-spreads / margarine (no compiled subcategory)",
            "analyte": "Pb",
            "issue": "Category 30 is 'Culinary Oils and Fats' but only olive-oil and cooking-oils-other were compiled. The register carries a distinct, STRICTER fat-spreads Pb ML (GSO 193:2021 = 40; TH MOPH 414 = 40; SG Food Regs = 40; HK = 80) plus tAs 100 for fat spreads/blended spreads. These are correctly excluded from the two oil subcats (different product form) but have no home in Cat 30 at all, so a stricter sovereign number (Pb 40) sits uncovered. Create a fat-spreads/margarine subcategory or explicitly route it elsewhere."
          },
          {
            "subcat": "butter / dairy culinary fats / ghee (no compiled subcategory)",
            "analyte": "Pb",
            "issue": "Dairy-derived culinary fats carry stricter register MLs (VN QCVN 8-2:2011 dairy-fat-products Pb=20, tHg=50; CO dairy fat Pb=100) with no compiled Cat-30 home. Confirm whether butter/ghee/milkfat route to Cat 24 Dairy; if any belong in Cat 30, the VN Pb=20 is materially stricter than the oil Pb=80."
          },
          {
            "subcat": "animal fats / lard / tallow / shortening / hydrogenated fats (no compiled subcategory)",
            "analyte": "all",
            "issue": "Register has named-animal-fat MLs (IN FSSAI Pb/tAs 100; FJ Pb 100/tAs 100; IL fats/oils family) and hydrogenated fats (UY tAs 100). No compiled subcategory covers animal or hydrogenated culinary fats; hydrogenated fats are exactly where the Ni hydrogenation-catalyst pathway is real, so a dedicated cell would let Ni move from generic control to a targeted screen."
          }
        ],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "olive-oil + cooking-oils-other",
            "analyte": "Al",
            "verdict": "CONFIRMED under adversarial challenge. Not-material conclusion is TRUE for edible oils — verified no jurisdiction in the register sets an Al ML for edible oils (every Al row is water, AU-NZ infant formula, toys/EN71-3 migration, EU 10/2011 food-contact-plastic SML, or CN GB 2760 additive-residue food rows; none is an edible oil). The rationale defect the audit flagged is REAL and on-point: the compiled rationale (tools/standards/cat30-config.json; both cat30-compiled JSONs) literally states 'the only government aluminium food ML in any jurisdiction is AU-NZ infant-formula Al 500', which is falsified two independent ways — (1) the register's own CN GB 2760-2024 Al rows (cn_gb2760_2024_al_baked_foods_100000; cn_gb2760_2024_al_starch_noodles_vermicelli_200000, both primary-verified 2026-08-10 and WEB-CORROBORATED: GB 2760 finished-product Al residue cap = 100 mg/kg for bakery/fried-flour products), and (2) the register's own AU-NZ soy-formula row aunz_sch19_al_formula_soy_1000, so '500' is not even AU-NZ's only value.",
            "recommendation": "Keep not-material for oils; rewrite the rationale to drop the false universal claim and instead state that Al food MLs elsewhere (CN GB 2760 baked foods/starch products as additive-residue caps; AU-NZ infant formula 500 non-soy / 1000 soy) are additive- and matrix-specific and none reach an edible-oil uptake or migration pathway. A control (reflex Al by ICP-MS) is optionally stronger for defensibility given Al is one of the 8 mandatory totals."
          },
          {
            "subcat": "olive-oil + cooking-oils-other",
            "analyte": "MeHg",
            "verdict": "CONFIRMED. Not-material is TRUE for pressed/extracted plant oils (no aquatic microbial methylation pathway, no Hg source). Load-bearing dependency VERIFIED to hold: both subcats' scope_exclude in tools/standards/cat30-config.json includes 'fish oil' and 'essential oil', and the register's fish-oil rows (th_moph414_2020_ias_fish_oils_100; gso193_2021_ias_fish_oils_100) are real and are excluded from these subcats. A marine oil folded into cooking-oils-other WOULD make MeHg material, but no such oil currently enters the compiled cells.",
            "recommendation": "Keep not-material. Harden the exclusion: scope_exclude currently matches only the literal 'fish oil' token — broaden to krill/algal/algae/cod-liver/marine-oil synonyms and add the lint assertion the audit proposed (no marine oil may enter these subcats), so a future marine-oil ingest cannot silently flip MeHg to material."
          },
          {
            "subcat": "olive-oil + cooking-oils-other",
            "analyte": "Sn",
            "verdict": "CONFIRMED. Not-material is TRUE for non-canned oils — all 121 Sn rows in the register are canned/tinplate/tin-coated-contingent, so tin ingress is a packaging property, not a matrix property of oil. The cited corroboration is REAL and on-point: vn_qcvn8_2_2011_sn_dairy-fat-products-contained-in-tin-coated-pac_250000 exists (Sn 250000, scope explicitly 'contained in tin-coated package'), and the analogous SG 'any food' (250000) / TH 'foods other' (250000) residual rows are likewise tin-contact framed.",
            "recommendation": "Keep not-material; the compiled standard already carries canned:false. Ensure canned:false stays authoritative so a canned oil reroutes to the canned-food Sn ML rather than inheriting this not-material cell."
          },
          {
            "subcat": "olive-oil + cooking-oils-other",
            "analyte": "Cr",
            "verdict": "CONFIRMED conclusion, but the audit UNDER-corrected. Not-material is TRUE for oils — verified no edible-oil total-Cr ML exists in any jurisdiction in the register (Cr is not lipophilic and does not partition into a refined lipid matrix). The audit's cited numbers are real (HK Cap 132V meat Cr-total=1000 via hk_cap132v_crtotal_meat-of-animal_1000 / _poultry_1000; CN dairy Cr milk powder 2000 / liquid milk 300). HOWEVER the audit called the compiled rationale 'sound' — it is not. The compiled Cr rationale claims 'the only food chromium MLs in the register are dairy (milk powder, liquid milk)', which is FALSE: the register also carries Cr-total for HK meat (1000), HK vegetables (500), HK pulses/cereals/fish (1000), plus gelatin/collagen (IN/CH 10000) and fishery products (IN 12000). This is the SAME false-narrow-enumeration defect as the Al cell, which the audit missed here.",
            "recommendation": "Keep not-material with the Cr-VI reflex control, but rewrite the Cr rationale exactly as for Al: drop the false 'only food Cr MLs are dairy' clause. The load-bearing, defensible fact is simply that no jurisdiction publishes an edible-oil total-Cr ML and Cr does not partition into a refined lipid matrix — the enumeration of where Cr MLs DO exist (dairy, meat, vegetables, cereals, fish, gelatin) should either be complete or omitted, never truncated to 'dairy'."
          }
        ],
        "ppb_pushbacks": [],
        "category_confidence": 0.9,
        "summary": "Adversarial re-verification of the Cat-30 (Culinary Oils and Fats) audit, 22 cells across the two compiled subcats (olive-oil, cooking-oils-other x 11-analyte panel), all pulled from origin/main. TIGHTEN CANDIDATES: the audit proposed ZERO, and my adversarial world/register re-check confirms none survive — 0 confirmed. The binding values are correct and reflect the global-strictest applicable sovereign oil ML: Pb 80 (GSO 193:2021 / TH MOPH 414), Cd 30 (IL FCS, sole sovereign oil Cd ML), tAs 100 (Codex named-vegetable-oils + broad consensus), tHg 20 (IL FCS, sole sovereign oil Hg ML), iAs correctly subsumed at 100. No lower APPLICABLE in-register oil row was skipped: the sub-80 Pb rows (GSO/TH/SG fat-spreads = 40; VN dairy-fat = 20) are genuinely different product forms and correctly excluded — they are the coverage gap below, not tightenings for the oil cells. WEAK NOT-MATERIAL: all 4 verdicts (Al, MeHg, Sn, Cr) are CONFIRMED to survive adversarial challenge; 4 of 4 confirmed, 0 rejected. Al — conclusion survives (no edible-oil Al ML anywhere) and the audit's rationale defect is real: the compiled rationale's 'only Al food ML is AU-NZ infant-formula 500' is falsified by the register's own CN GB 2760-2024 Al rows (WEB-VERIFIED: GB 2760 finished-product Al cap 100 mg/kg for bakery/fried-flour) and by AU-NZ's own soy-formula 1000. MeHg — conclusion survives and the load-bearing fish-oil scope_exclude dependency VERIFIED HOLDS in cat30-config.json (both subcats exclude 'fish oil'/'essential oil'; register fish-oil iAs rows are real and excluded). Sn — conclusion survives (all 121 register Sn rows are tin-contact-contingent) and the cited VN dairy-fat tin-coated Sn=250000 corroboration is real. Cr — conclusion survives (no edible-oil Cr ML; Cr not lipophilic) and the cited HK Cap 132V meat Cr-total=1000 and CN dairy Cr are real, BUT I OVERTURN the audit's 'rationale is sound' judgement: the compiled Cr rationale's 'only food Cr MLs are dairy' is itself false (HK also regulates meat/veg/cereal/fish Cr-total; gelatin/collagen/fishery carry Cr-total too), the same false-enumeration defect as Al — so Cr needs the same rationale rewrite. coverage_gaps and ppb_pushbacks kept as-is (structural, not candidates); the 3 coverage gaps are grounded in the register (fat-spreads Pb=40 GSO/TH/SG; VN dairy-fat Pb=20/tHg=50; CO dairy fat Pb=100; IN named-animal-fats Pb/tAs=100; FJ; UY hydrogenated tAs=100). category_confidence 0.90: the two compiled oil cells reflect the global-strictest with high confidence and verification strengthened rather than weakened the picture; residual risk is entirely the uncovered culinary-fat subcategories where stricter in-register numbers already exist, plus two rationale-wording fixes (Al confirmed by the audit, Cr newly identified here)."
      },
      {
        "category": "Cat 31 — Sweeteners and Syrups",
        "cells_audited": 44,
        "category_confidence": 0.87,
        "tighten_candidates": [],
        "coverage_gaps": [
          {
            "subcat": "honey",
            "analyte": "Pb",
            "issue": "per_country audit map omits two sovereigns that TIE the binding: HK Cap 132V 'Sugar-based candies and honey' Pb=100 (hk_cap132v_pb_sugar-based-candies-and-honey_100, in our own register) and Codex CXS 193 honey Pb=0.1 mg/kg=100 ug/kg (adopted; not in register). Neither changes the value (IL 100 already binds) but the 'every sovereign considered' claim is incomplete. Register cross-check confirms IL 100 is the world floor for honey Pb (Codex ties). [VERIFIER NOTE: a THIRD tie omission also exists — EU 2023/915 honey Pb = 0.1 mg/kg = 100 ug/kg; likewise ties IL 100, no value change; further confirms 100 as the world floor.]"
          },
          {
            "subcat": "refined-sugar",
            "analyte": "Pb",
            "issue": "per_country omits HK Cap 132V 'White sugar, refined sugar, corn syrups and maple syrups' Pb=500 (hk_cap132v_pb_white-sugar-refined-sugar-corn-syrups-and-maple-syrups_500) and India FSSAI refined-white-sugar/dextrose Pb=500 (web). Both looser than the MERCOSUR 100 binding, but they belong in the considered set for a complete audit trail."
          },
          {
            "subcat": "syrups-maple-agave-molasses",
            "analyte": "Pb",
            "issue": "per_country omits HK Cap 132V rows for 'corn syrups and maple syrups' (Pb 500) and 'soft brown/raw/non-centrifugal sugar' (Pb 500), both in our register. Looser than MERCOSUR 100 binding; omission is audit-trail completeness only."
          },
          {
            "subcat": "refined-sugar",
            "analyte": "Cd",
            "issue": "Binding is IL 150 as the SOLE sovereign sugar Cd ML — MERCOSUR/Brazil GMC 12/2011 sets only As(100) and Pb(100) for 'azucares', not Cd (confirmed: register has no MERCOSUR sugars Cd row; web search of GMC 12/11 shows sugars category carries As/Pb only). Could not machine-read Brazil IN 160/2022 sugar Cd (image-only PDF), so a sub-150 sugar Cd in a MERCOSUR member is not 100% excluded. Residual, low-probability."
          }
        ],
        "weak_not_material": [
          {
            "subcat": "syrups-maple-agave-molasses",
            "analyte": "Cr",
            "verdict": "CONFIRMED under adversarial verification. The not-material rationale 'no chromium concentration pathway operates in a syrup' is factually wrong for the molasses member of this combined maple/agave/molasses cell: molasses is a documented chromium concentrate (reported total Cr ~0.27 mg/kg, the highest-Cr sweetener, molasses > brown sugar > refined-white sugar; widely cited as a dietary chromium source), produced by the SAME repeated-sugar-extraction mineral concentration that already justifies holding Ni as a 'control' in this exact cell. So the internal inconsistency the audit flags is real and on-point, and the contradicting evidence (molasses concentrates Cr) is real. Register cross-check confirms the value-side still holds: no sovereign sugar/syrup/honey total-Cr ML exists anywhere (the only food total-Cr MLs in the register are dairy — GB 2762 milk powder 2000, liquid milk 300), so there is no number to publish; the defect is the pathway claim, not the value.",
            "recommendation": "Reclassify the molasses total-chromium pathway to control (ICP-MS total-Cr screen under ALARA; Cr-VI remains the reflex-speciation control), matching the Ni treatment in the same cell. Keep not-material for honey and refined sugar (refining strips minerals; the documented Cr gradient is molasses >> refined white sugar)."
          },
          {
            "subcat": "honey",
            "analyte": "Ni",
            "verdict": "CONFIRMED. Register cross-check finds no sovereign honey (or any sweetener) nickel ML. Unlike molasses, honey is a nectar sugar rather than the residual mineral-concentrate fraction, so it has no repeated-extraction concentration pathway; trace foraged nickel occurs, so 'no concentration pathway' is the correct load-bearing (rebuttable) clause, not 'no occurrence'. Not-material survives adversarial challenge.",
            "recommendation": "Keep not-material; retain the rebuttable each-build register audit note."
          },
          {
            "subcat": "honey",
            "analyte": "Sn",
            "verdict": "CONFIRMED for the scoped non-canned form. Register has no sweetener tin ML; the only tin pathway is tinplate-can migration and honey is sold in glass/plastic. Holds.",
            "recommendation": "Keep; ensure any canned/tinned sweetener (e.g. tinned maple syrup) routes to a canned cell where Sn is live rather than inheriting this not-material."
          },
          {
            "subcat": "honey",
            "analyte": "MeHg",
            "verdict": "CONFIRMED. No aquatic microbial methylation pathway and no mercury source in a nectar sugar; total mercury is separately governed at VN 50 (register-verified honey tHg row vn_qcvn8_2_2011_thg_honey_50). Holds across all four subcategories.",
            "recommendation": "Keep not-material across all four subcategories."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification of the Cat 31 (Sweeteners/Syrups) audit against origin/main compiled cells + regulatory_limits.csv (2994 rows, via git show origin/main) + web (EU 2023/915, Codex CXS 193, molasses trace-metal chemistry). RESULT: 1 not-material correction CONFIRMED, 1 REJECTED; the empty tighten set confirmed correct; 3 honey not-material affirmations verified and retained.\\n\\nTIGHTEN CANDIDATES: audit proposed ZERO. Independently confirmed correct. The flagship binding — honey Pb 100 (IL) — is now triple-verified as the world floor: IL 100 = EU 2023/915 (0.1 mg/kg) = Codex CXS 193 (0.1 mg/kg) = HK Cap 132V 100, all TIE; MERCOSUR/PY 300 and VN 2000 are looser. No sub-100 sovereign exists anywhere checked, so no honey-Pb tightening was missed. The other bindings reconcile against the register as MIN-correct (honey Cd 100 MERCOSUR; sugar/syrup Pb 100 MERCOSUR over SG/IL/VN 500; sugar Cd 150 IL over VN 1000; sugar tAs 100 MERCOSUR; tHg 50 VN). tighten_candidates stays [].\\n\\nWEAK NOT-MATERIAL — 2 actual corrections adjudicated: (1) CONFIRMED molasses Cr -> control. Web-verified that molasses is a documented chromium concentrate (highest-Cr sweetener, ~0.27 mg/kg; cited as a dietary Cr source) via the identical repeated-extraction mineral-concentration pathway that already makes Ni a 'control' in the same cell — so the not-material 'no chromium pathway' rationale is factually contradicted for molasses and internally inconsistent with the cell's own Ni handling; register confirms no sovereign sweetener total-Cr ML (only dairy), so the value-side holds and the fix is a control screen, not a number. (2) REJECTED molasses Al -> control. The sugarcane-molasses heavy-metals literature enumerates the metals that concentrate (Cd, Cu, Fe, Ni, Zn, Pb, plus Ca/Na/K/Mg) — aluminium is ABSENT; Al is not a plant micronutrient/accumulator in sugar crops, and the register shows food Al is capped only where aluminium ADDITIVES are used (GB 2760 baked goods/noodles; AU-NZ formula), never on mineral-concentration grounds. The audit itself flagged the Al pathway as 'weak'; under default-reject it does not clearly hold, so not-material is correct for molasses Al and the reclassification is dropped. The 3 honey 'keep not-material' affirmations (Ni, Sn non-canned, MeHg) were independently verified TRUE against the register and retained. Net: weak_not_material = 4 entries (1 confirmed correction + 3 confirmed-keep), 1 dropped.\\n\\ncoverage_gaps and ppb_pushbacks kept as-is (structural). One added observation folded into the honey-Pb gap: EU 2023/915 honey Pb 100 is a third tie omitted from the per_country map (no value change). category_confidence 0.82 -> 0.87: flagship binding now triple-sovereign-verified and both molasses items resolved; unchanged residual is the unreadable image-only Brazil IN 160 sugar-Cd table (small chance of a sub-150 MERCOSUR-member sugar Cd) and the general risk of an unlisted minor-jurisdiction sweetener Cd/tHg."
      },
      {
        "category": "32 — Condiments, Sauces and Dressings",
        "cells_audited": 55,
        "category_confidence": 0.2,
        "coverage_gaps": [
          {
            "subcat": "ALL (compiler)",
            "analyte": "Cd/tAs/Pb",
            "issue": "ROOT CAUSE: compile-cat32.mjs selects register rows by literal scope-word regex (scope_include: \\bsauces?\\b, vinegar, tomato, mayonnaise). Credible GENERAL catch-all national codes whose product_scope lacks those words are structurally invisible to selection — specifically Uruguay RBN 'liquid/solid foods in general' (uy_rbn_general_cd_liquid_foods 100, cd_solid 200, tas_liquid 100) and Singapore 'other food not specified' (sg_foodregs_2026_other_food_cd_200). These are IN THE REGISTER, credible sovereigns, and stricter than the values selected. Method v2.0 requires 'strictest APPLICABLE sovereign maximum', and a general national food-code catch-all is applicable. Fix: selection must union the subcategory-scoped rows with credible general 'all foods / liquid foods / other food not specified' catch-alls before taking the min. VERIFIED: food-limit-compiler.mjs lines 120-121/143-150 confirm scopeMatch() gates on product_scope regex; the UY/SG catch-all scopes do not contain the scope words, so they are never selected."
          },
          {
            "subcat": "ALL",
            "analyte": "Pb",
            "issue": "REGISTER GAP: register holds only 61 CN rows (dairy/formula/toys/pet-feed/cosmetics/detergent), none condiment. China GB 2762-2022/2025 sets condiments (调味品, excluding spices) Pb 1.0 mg/kg = 1000 ppb (VERIFIED via USDA FAS CH2023-0040 authoritative English translation, lead table row 'Condiments (excluding spices) 1.0'), plus aquatic-condiment iAs. GB 2762 is the most comprehensive world code and is absent for condiments — so the deterministic min-check cannot see China's 1000 Pb for soy sauce/sauces. Ingest GB 2762-2022/2025 condiment rows."
          },
          {
            "subcat": "mustard-mayo-dressings",
            "analyte": "tAs",
            "issue": "Liquid-vs-solid basis ambiguity: pourable salad dressings/vinaigrettes are 'liquid foods' under UY RBN (tAs 100, Cd 100), not 'solid foods' (tAs 1000, Cd 200). The subcategory bundles semisolid mayo/mustard with pourable dressings; the strictest applicable for the pourable members is 100, not 1000/200."
          },
          {
            "subcat": "soy-sauce-fermented",
            "analyte": "Cr",
            "issue": "Register-substantiation gap: not_material rationale asserts 'only food chromium MLs in the register are dairy' — FALSE. Register contains HK Cap.132V Cr-total for Pulses 1000, Cereals 1000, Fish 1000, Vegetables 500, plus CN raw milk 300. Soy=pulse read-across (HK 1000) is available; the compiler likely missed them because it matched metal_species=='Cr' and these rows are labelled 'Cr-total'."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "soy-sauce-fermented",
            "analyte": "Cd",
            "current_value_ppb": "1000",
            "current_binding": "VN QCVN 8-2 'Sauce' Cd 1000 (regulatory-alignment)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "UY (Uruguay RBN, national food code)",
            "proposed_instrument": "RBN 5th ed (Decreto 315/994) 'liquid foods in general except categories with particular limits' Cd 0.1 mg/kg",
            "source": "uy_rbn_general_cd_liquid_foods_0_1mgkg (register); web-confirmed Decreto 315/994 5th ed (montevideo.gub.uy). UY sets NO sauce/vinegar/condiment particular limit, so the general liquid-foods catch-all is directly applicable to soy sauce (a liquid); SG other-food Cd 200 corroborates a weaker floor.",
            "confidence": "high (CONFIRMED: register + web-verified; species Cd=Cd, food mass basis, current instrument)"
          },
          {
            "subcat": "soy-sauce-fermented",
            "analyte": "tAs",
            "current_value_ppb": "1000",
            "current_binding": "SG 'tomato ketchup and other sauces' / VN 'Sauce' tAs 1000 (regulatory-alignment)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "UY (Uruguay RBN)",
            "proposed_instrument": "RBN 5th ed 'liquid foods in general' tAs 0.1 mg/kg",
            "source": "uy_rbn_general_tas_liquid_foods_0_1mgkg (register); web-confirmed RBN liquid-foods As 0.1 mg/kg. Same species (total As, not iAs); UY has no sauce carve-out so the liquid-foods general limit applies. (SG does not help: SG specifies sauce tAs at 1000, so its 'other food' catch-all is inapplicable here — UY carries this alone.)",
            "confidence": "high (CONFIRMED: register + web-verified; rests solely on UY liquid-foods tAs)"
          },
          {
            "subcat": "soy-sauce-fermented",
            "analyte": "Pb",
            "current_value_ppb": "2000",
            "current_binding": "SG/VN 'Sauce' Pb 2000 (regulatory-alignment)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "CN (China GB 2762-2022, in force; unchanged in GB 2762-2025)",
            "proposed_instrument": "GB 2762 lead table 'Condiments (excluding spices)' Pb 1.0 mg/kg",
            "source": "USDA FAS CH2023-0040 authoritative English translation of GB 2762-2022 (lead table: 'Condiments (excluding spices) 1.0'); NIFC confirms GB 2762-2025 makes no heavy-metal changes. Soy sauce is classified under Condiments (GB 2762 Appendix A). Genuinely absent from register (61 CN rows, no condiment).",
            "confidence": "high (CONFIRMED: value real, current not superseded, species Pb=Pb, soy sauce squarely a GB 2762 condiment)"
          },
          {
            "subcat": "vinegar",
            "analyte": "Cd",
            "current_value_ppb": "1000",
            "current_binding": "VN QCVN 8-2 'Vinegar' Cd 1000 (regulatory-alignment)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "UY (Uruguay RBN)",
            "proposed_instrument": "RBN 5th ed 'liquid foods in general' Cd 0.1 mg/kg",
            "source": "uy_rbn_general_cd_liquid_foods_0_1mgkg (register); web-confirmed. Vinegar is a liquid food with no UY-specific vinegar limit (UY 'fermented/distilled alcoholic beverages' rows do not cover non-alcoholic vinegar), so the general liquid-foods Cd applies.",
            "confidence": "high (CONFIRMED: register + web-verified; species/basis match)"
          },
          {
            "subcat": "vinegar",
            "analyte": "tAs",
            "current_value_ppb": "200",
            "current_binding": "VN QCVN 8-2 'Vinegar' tAs 200 (regulatory-alignment)",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "UY (Uruguay RBN)",
            "proposed_instrument": "RBN 5th ed 'liquid foods in general' tAs 0.1 mg/kg",
            "source": "uy_rbn_general_tas_liquid_foods_0_1mgkg (register); web-confirmed. UY liquid-foods total-As 100 < VN vinegar-specific 200; same species (total As), same as-sold food mass basis.",
            "confidence": "high (CONFIRMED: register + web-verified)"
          },
          {
            "subcat": "mustard-mayo-dressings",
            "analyte": "Cd",
            "current_value_ppb": "1000",
            "current_binding": "VN QCVN 8-2 'Sauce' Cd 1000 (regulatory-alignment)",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "UY / SG",
            "proposed_instrument": "UY RBN 'solid foods in general' Cd 0.2 mg/kg; SG reg 31(5) 'other food' Cd 0.2 mg/kg",
            "source": "uy_rbn_general_cd_solid_foods_0_2mgkg / sg_foodregs_2026_other_food_cd_200 (register). Two independent sovereigns give 200 for the semisolid members. SG applies for Cd here because SG's Tenth Schedule sauce entry sets only Pb/tAs — Cd falls to the 'other food' residual. Pourable dressings could warrant UY liquid 100 (see tAs coverage gap).",
            "confidence": "high (CONFIRMED: register-verified, two sovereigns; conservative solid-basis value)"
          },
          {
            "subcat": "mustard-mayo-dressings",
            "analyte": "Pb",
            "current_value_ppb": "2000",
            "current_binding": "SG/VN 'Sauce' Pb 2000 (regulatory-alignment)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "CN (China GB 2762-2022; unchanged 2025)",
            "proposed_instrument": "GB 2762 'Condiments (excluding spices)' Pb 1.0 mg/kg — mayonnaise/dressings/prepared mustard are compound/blended seasonings (复合调味料) under Condiments",
            "source": "USDA FAS CH2023-0040 (GB 2762-2022 lead table 'Condiments (excluding spices) 1.0'); NIFC confirms 2025 unchanged. Prepared mustard, mayonnaise and salad dressings classify as compound/blended condiments under GB 2762.",
            "confidence": "medium-high (CONFIRMED: value real+current; slight residual on Western-condiment classification, but 复合调味料/沙拉酱 placement is standard)"
          },
          {
            "subcat": "tomato-condiments",
            "analyte": "Cd",
            "current_value_ppb": "1000",
            "current_binding": "VN QCVN 8-2 'Sauce' Cd 1000 (regulatory-alignment)",
            "proposed_value_ppb": "200",
            "proposed_jurisdiction": "UY / SG",
            "proposed_instrument": "UY RBN 'solid foods in general' Cd 0.2 mg/kg; SG reg 31(5) 'other food' Cd 0.2 mg/kg",
            "source": "uy_rbn_general_cd_solid_foods_0_2mgkg / sg_foodregs_2026_other_food_cd_200 (register). Tomatoes are explicitly carved OUT of the fruiting-veg Cd 50 in VN/IN/PH, so the general catch-all (200) is the correct floor for ketchup/salsa (a paste/semisolid). Two sovereigns concur.",
            "confidence": "high (CONFIRMED: register-verified, two sovereigns; tomato carve-out corroborated in register)"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "ALL 5 subcats",
            "analyte": "Cr (total)",
            "verdict": "CONFIRMED — rationale factually FALSE. Register objectively holds non-dairy food Cr-total MLs: HK Cap.132V Vegetables 500, Pulses 1000, Cereals 1000, Meat 1000, Fish 1000; India all-fishery-products 12000; India gelatin 10000. So 'the only food chromium MLs in the register are dairy' is false. NOTE: the audit's specific 'Cr vs Cr-total species-label' mechanism is imprecise — the compiler's analyteOf() already unifies Cr and Cr-total (food-limit-compiler.mjs line 110), so the false claim is a hand-authored config rationale, not a species-filter bug. The toxicological stance (reflex Cr-VI; total Cr predominantly non-toxic Cr-III) is defensible; the stated reason is not.",
            "recommendation": "Rewrite the rationale (drop 'only dairy'); reclassify not_material -> control for all five (total-Cr ICP-MS screen + reflex Cr-VI). Read-across totals are mechanically available (analyteOf recognizes Cr-total): tomato-condiments <- HK Vegetables 500; fish-sauce <- HK Fish 1000; soy-sauce <- HK Pulses 1000."
          },
          {
            "subcat": "soy-sauce-fermented",
            "analyte": "Cr",
            "verdict": "CONFIRMED — internal inconsistency. Config-verified: vinegar Cr = control (stainless-steel migration screen) while soy-sauce Cr = not_material, though both are fermented, acidic, high-salt liquids held in prolonged stainless-steel contact (the same leach pathway the vinegar rationale invokes). not_material is not defensible when the sibling fermented-liquid cell is control.",
            "recommendation": "Make soy-sauce Cr = control (stainless-steel migration screen) to match vinegar; optionally read-across HK Pulses Cr-total 1000."
          },
          {
            "subcat": "mustard-mayo-dressings",
            "analyte": "MeHg",
            "verdict": "CONFIRMED (narrow) — blanket not_material is false for anchovy-containing members. Caesar dressing (a salad dressing squarely in this subcategory) contains anchovies, a marine fish/methylation source; the not_material 'no fish source' claim does not hold for it. True for plain mayo/mustard/vinaigrette. (Worcestershire's routing to this subcat vs soy-sauce-fermented is uncertain, but Caesar alone carries the correction.)",
            "recommendation": "Keep not_material for plain mayo/mustard/vinaigrette; add a reflex-MeHg trigger (or route to the fish-sauce marine treatment) whenever an anchovy/fish ingredient is present."
          },
          {
            "subcat": "fish-sauce",
            "analyte": "Cr",
            "verdict": "CONFIRMED — inconsistent with the subcategory's own read-across logic and the false 'only dairy' reason. Fish sauce reads across from fish for Pb/Cd/tAs/iAs/tHg/MeHg, yet Cr is declared not_material. HK Cap.132V Fish Cr-total 1000 is a real, mechanically-selectable read-across target (analyteOf unifies Cr-total -> Cr).",
            "recommendation": "Reclassify to control or read-across HK Fish Cr-total 1000, for consistency with the marine read-across used for the other metals."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification of the Cat-32 audit against origin/main register (2,994 rows), the cat32 compiler/config, and web sources. Of 10 tighten candidates, 8 CONFIRMED and 2 REJECTED; of 7 not-material challenges, 4 CONFIRMED and 3 rejected (upheld). CONFIRMED TIGHTENS: (1) Six Uruguay-RBN candidates — soy-sauce Cd 1000->100 and tAs 1000->100; vinegar Cd 1000->100 and tAs 200->100; mustard-mayo Cd 1000->200; tomato Cd 1000->200. The UY rows are in the register AND web-verified (Decreto 315/994, RBN 5th ed, montevideo.gub.uy: liquid foods As/Cd 0.1 mg/kg, solid foods As 1.0/Cd 0.2). Uruguay sets no sauce/vinegar/condiment particular limit (all UY rows enumerated), so its 'liquid/solid foods in general except categories with particular limits' catch-all is a directly-applicable national statutory maximum; species (Cd/tAs, both totals) and basis (as-sold food mass = as-consumed ppb) match; not superseded. The compiler misses them only because scopeMatch() gates on a scope-word regex (verified lines 120-121/143-150). (2) Two China GB 2762 candidates — soy-sauce and mustard-mayo Pb 2000->1000. USDA-FAS CH2023-0040 (authoritative English translation of GB 2762-2022) confirms the lead table 'Condiments (excluding spices) 1.0 mg/kg'; soy sauce and compound/blended seasonings classify under Condiments; NIFC confirms GB 2762-2025 keeps heavy metals unchanged (in force, not superseded); genuinely absent from the register (61 CN rows, none condiment). REJECTED TIGHTENS: both fish-sauce candidates — tHg 300->50 and tAs 2000->100-1000. Product-FORM/species-context mismatch: fish sauce is a marine fermentate whose contaminants follow its fish source; the cited generic terrestrial-condiment ceilings are not the applicable form — Uruguay itself carves fish out (fish-muscle tHg 500, not general-foods 50), Vietnam caps aquatic tHg at 500 and deliberately does not apply the generic-sauce 50 to nuoc mam, and fish total-As is predominantly organic arsenobetaine with the strictly-tighter iAs 100 already published as the operative toxic control. The source-appropriate fish read-across (tHg 300; tAs 2000 with iAs 100) governs; the audit's own 'low confidence / Karen judgment call' framing is upheld as a REJECT. NOT-MATERIAL: 4 CONFIRMED — Cr(total) 'only dairy MLs exist' is factually FALSE in all 5 subcats (register holds HK Cap.132V Cr-total Vegetables 500 / Pulses 1000 / Cereals 1000 / Meat 1000 / Fish 1000, India fishery 12000, gelatin 10000); reclassify to control with read-across totals available. (Refinement: the audit's 'Cr vs Cr-total species-label' bug hypothesis is imprecise — compiler analyteOf() already unifies Cr/Cr-total; the false belief is a hand-authored config rationale.) soy-sauce Cr is inconsistent with sibling vinegar Cr=control; mustard-mayo MeHg is false for anchovy dressings (Caesar); fish-sauce Cr is inconsistent with its own fish read-across (HK Fish Cr 1000 available). 3 REJECTED (not-material upheld, dropped): fish-sauce Ni, Al (all), Sn (all non-canned) — no pathway and no sovereign condiment ML, so not-material is defensible. coverage_gaps and ppb_pushbacks retained structurally (ppb correct throughout: every cell is food mass basis ug/kg = ppb). category_confidence stays 0.2 — verification confirms a large share of Cd/tAs/Pb cells are demonstrably loose versus stricter applicable sovereigns already in the register or in GB 2762."
      },
      {
        "category": "Cat 33 — Chocolate, Cocoa and Confectionery",
        "cells_audited": 33,
        "coverage_gaps": [],
        "tighten_candidates": [],
        "weak_not_material": [
          {
            "subcat": "confectionery-candy",
            "analyte": "Cd",
            "verdict": "CONFIRMED (high confidence) under adversarial challenge — the not-material claim is NOT fully true. Two independent grounds, both verified: (1) The compiled cell self-contradicts on its face. Its scope_note explicitly scopes in 'imported/ethnic sweets (tamarind, chili, and similar)', while the Cd not-material rationale asserts categorically 'no cadmium source or migration route... no soil-uptake plant tissue at the confection level.' Chili and tamarind ARE soil-uptake plant tissue, and in a chili/tamarind sweet they are defining ingredients, not traces. (2) Capsicum (chili/pepper) is a peer-reviewed, well-documented cadmium soil-accumulator with uptake INTO the fruit (the tissue that becomes chili powder): Cd accumulation/transfer pot experiments in Environ Sci Pollut Res 2019 (PMID 31728951), differential-cultivar Cd-stress work in BMC Plant Biology 2023, and low-Cd-cultivar screening in Int J Phytoremediation 2025 all confirm soil-to-fruit Cd transfer and flag human-health risk. So a documented cadmium source exists in an in-scope ingredient, contradicting the 'no cadmium source' claim and failing the not-material integrity gate's must-be-TRUE test. Register cross-check (regulatory_limits.csv) confirms NO candy/confectionery Cd ML in any jurisdiction (Cd MLs exist only for cocoa/chocolate/cocoa-paste and fruiting vegetables), so this is correctly a CONTROL, not a numeric tighten. The cell's existing 'rebuttable' clause does not cure the defect because the published categorical rationale is itself false for the chili/tamarind sweets a plaintiff would point to.",
            "recommendation": "Reclassify from not-material (no-migration-pathway) to a scoped CONTROL. Narrow the not-material to plain sugar/gelatin/pectin confections (keep rebuttable), and add a reflex Cd screen (ICP-MS) triggered when the confection contains chili, spice, or tamarind plant tissue. No numeric ML (none exists anywhere); mirror this subcategory's existing Ni control-with-trigger pattern. This makes the published rationale TRUE and preserves defensibility against a plaintiff citing cadmium in a chili-tamarind ethnic sweet."
          }
        ],
        "ppb_pushbacks": [],
        "category_confidence": 0.9,
        "summary": "Adversarial re-verification of Cat 33 (33 cells = 3 subcats x 11 analytes) against origin/main compiled cells and regulatory_limits.csv, defaulting to reject. The audit carried 0 tighten candidates (nothing to refute; none added — generating new candidates is not the adversary's remit) and 3 weak_not_material corrections. RESULT: 1 CONFIRMED, 2 REJECTED. CONFIRMED — confectionery-candy Cd: contradicting evidence is real and on-point. The cell's own scope_note scopes in tamarind/chili ethnic sweets, yet its Cd rationale asserts 'no cadmium source... no soil-uptake plant tissue at the confection level'; peer-reviewed evidence (Environ Sci Pollut Res 2019 PMID 31728951; BMC Plant Biol 2023; Int J Phytoremediation 2025) confirms Capsicum accumulates Cd from soil into the fruit/powder. Register confirms no candy Cd ML anywhere, so the fix is a scoped CONTROL screen (chili/spice/tamarind), not a number. REJECTED — chocolate Al: the audit's own verdict is that the not-material is TRUE (no sovereign Al food-contaminant ML; TWI/PTWI-managed), so there is NO contradicting evidence to confirm; additionally the cell's reference_method ALREADY prescribes a 'periodic screen', so the audit's premise of a 'silent not-material with no screen' is factually false and the recommendation is redundant rather than a defensibility defect. REJECTED — gummies-jellies Ni: the not-material is factually defensible (gelatin/pectin/sugar gummies and fruit jellies are fat-free gelled-sugar systems with no nickel accumulator); the audit's rebuttal conflates non-hydrogenated wax/oil release coatings (carnauba/beeswax/coconut) with the hydrogenated-fat nickel-catalyst pathway the sibling candy control targets — wax and non-hydrogenated coatings carry no nickel pathway, genuinely hydrogenated-fat products (caramels/coated candies) fall in the candy subcat, and US PHOs have been banned since 2018-2020, so the 'inconsistency' is a principled scope boundary, not on-point contradicting evidence. coverage_gaps and ppb_pushbacks retained as-is (structural, both empty). No numeric binds changed; category_confidence held at 0.9 (residual uncertainty is unresolved exact Korea/Taiwan/Japan/India numeric chocolate values, all evidence places them above our binds)."
      },
      {
        "category": "34 — Herbs, Spices, Seasonings and Salt",
        "cells_audited": 44,
        "category_confidence": 0.3,
        "coverage_gaps": [
          {
            "subcat": "ALL cat34 (salt, spices, hot-chili-sauces, bouillon-seasoning-blends)",
            "analyte": "Pb/tAs/iAs/Cd/tHg",
            "issue": "SYSTEMIC: China GB 2762-2022 (the single most comprehensive sovereign contaminant standard, and its 2025 successor) is ENTIRELY ABSENT from data/evidence/regulatory_limits.csv for this category — zero CN rows appear under any salt/spice/condiment/sauce scope. Every tighten candidate below was missed because of this one gap. GB 2762-2022 sets: Condiment(excl spices) Pb 1.0 mg/kg=1000ppb; Spices Pb 1.5 mg/kg=1500 (cinnamon/Sichuan-pepper/mixtures 3.0=3000); Salt Cd 0.5=500; general Condiment total-As 0.5=500; Compound condiment inorganic-As 0.1=100; Salt total-Hg 0.1=100. Ingest GB 2762-2022/2025 into the register and recompile cat34."
          },
          {
            "subcat": "spices",
            "analyte": "Cd",
            "issue": "Cd=1000 rests on a SINGLE sovereign (Vietnam QCVN 8-2:2011 'Spices including curry powder'). No EU/Codex/China dried-spice Cd ML exists to corroborate, so 'strictest that exists' = the only one that exists. Defensible but single-source; verify India FSSAI 2.11.1/Brazil ANVISA RDC 722 do not set a lower dried-spice Cd before treating 1000 as world-floor."
          },
          {
            "subcat": "hot-chili-sauces",
            "analyte": "tAs/iAs",
            "issue": "Chinese classification of chili/hot sauce is 半固态复合调味料 (semi-solid COMPOUND condiment); GB 2762-2022 caps compound-condiment inorganic-As at 0.1 mg/kg=100ppb and general-condiment total-As at 0.5=500 — both below our tAs=1000. The correct binding basis (total-As 500 vs iAs 100) turns on the compound-vs-general classification and must be resolved in the recompile."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "bouillon-seasoning-blends",
            "analyte": "iAs",
            "current_value_ppb": "null (not_material)",
            "current_binding": "not-material — 'no inorganic-As blend ML anywhere'",
            "proposed_value_ppb": "100",
            "proposed_jurisdiction": "China (GB 2762-2022, in force; identical in GB 2762-2025 eff. 2026-09-02)",
            "proposed_instrument": "GB 2762 Table 4, 复合调味料 (compound condiment) 无机砷 (inorganic As) 0.1 mg/kg. Appendix A.1 defines 复合调味料 to include 固体汤料 (solid bouillon), 鸡精/鸡粉 (chicken essence/powder) — i.e. bouillon cubes and seasoning packets. Species match (无机砷 = iAs); limit is as-sold mass basis, matching the cell's as-sold dry basis. No basis conflation.",
            "source": "VERIFIED in primary PRC text (not the audit's Spanish translation): official GB2762-2022 PDF wjw.nmg.gov.cn/.../P020220824606851329551.pdf line 646 (总砷 '—' / 无机砷 0.1); identical in official GB2762-2025 PDF fzmq.gov.cn/.../P020251117337010015987.pdf line 660",
            "confidence": "high — primary-source verified across the in-force 2022 standard and its 2025 successor"
          },
          {
            "subcat": "bouillon-seasoning-blends",
            "analyte": "Pb",
            "current_value_ppb": "2000",
            "current_binding": "read-across VN QCVN 8-2:2011 'spices incl curry powder' 2000",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "China (GB 2762-2022, in force; identical in GB 2762-2025)",
            "proposed_instrument": "GB 2762 Table 1, 调味品(香辛料类除外) [condiments excluding spices] Pb 1.0 mg/kg. A bouillon cube/seasoning blend is a 复合调味料 (compound condiment) per Appendix A.1 — a condiment that is not a spice — so it falls under the 1.0 line. Species (Pb) and as-sold mass basis both match.",
            "source": "VERIFIED primary PRC text: GB2762-2022 line 240 (调味品(香辛料类除外) 1.0); GB2762-2025 line 255 identical",
            "confidence": "high — primary-source verified"
          },
          {
            "subcat": "hot-chili-sauces",
            "analyte": "Pb",
            "current_value_ppb": "2000",
            "current_binding": "regulatory-alignment SG Food Regs 'tomato ketchup and other sauces' 2000 (VN sauce 2000 concurs)",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "China (GB 2762-2022, in force; identical in 2025) — the Colombia leg is REJECTED",
            "proposed_instrument": "GB 2762 调味品(香辛料类除外) Pb 1.0 mg/kg binds a chili sauce as a 复合调味料/其他调味品 (compound/other condiment) → 1.0=1000; even under the least-favourable 香辛料酱 (spice-paste) reading it is 1.5=1500 — every plausible GB classification is stricter than 2000. The audit's SECOND leg (Colombia Res 4506/2013 'mango hot sauce' Pb 1000) is REJECTED: that register row's scope is 'mango hot sauce AND canned mangoes,' a fruit-preserve entry bundled with a cluster of Colombia canned/pickled-fruit Pb-1000 rows (chestnuts, cucumbers, tropical fruit, olives) — a different product class and lead platform (fruit-borne, canned-fruit basis) than a bottled chili/pepper sauce. cat34-config.json ALREADY documents this exact exclusion, so the audit's 'never considered / deterministic register miss' claim is factually false.",
            "source": "VERIFIED primary PRC text GB2762-2022 line 240 / GB2762-2025 line 255; Colombia exclusion documented verbatim in tools/standards/cat34-config.json (hot-chili-sauces Pb basis_label) and register row co_res4506_2013_pb_mango_hot_sauce_canned_1000",
            "confidence": "medium (downgraded from audit's high) — the GB tightening below 2000 is solid and verified, but the exact value (1000 vs 1500) depends on the GB chili-sauce classification, and the Colombia co-justification is rejected"
          },
          {
            "subcat": "salt",
            "analyte": "Pb (unrefined form)",
            "current_value_ppb": "2000",
            "current_binding": "regulatory-alignment EU 2023/915 unrefined salt (fleur de sel / grey / manually harvested) Pb 2.0 mg/kg",
            "proposed_value_ppb": "1000",
            "proposed_jurisdiction": "China (GB 2762-2022, in force; identical in GB 2762-2025)",
            "proposed_instrument": "GB 2762 调味品(香辛料类除外) Pb 1.0 mg/kg. Appendix A.1 classifies 食用盐 (edible salt) UNDER 调味品; salt is not a spice, GB's lead table carries NO separate 食用盐 row and NO refined/unrefined split, so the 1.0 condiment-excl-spices line caps ALL edible salt including the unrefined form at 1000. (GB 2762-2017's former separate 食用盐 Pb 2.0 line was dropped in the 2022 revision — salt was moved into the general condiment line.)",
            "source": "VERIFIED primary PRC text: GB2762-2022 lead section (lines 114-348) contains NO 食用盐 row (grep-confirmed); appendix lines 1349/1352 place 食用盐 under 调味品; condiment line 240 = 1.0; GB2762-2025 identical (lines 255, 1380)",
            "confidence": "high (upgraded from audit's medium) — primary-source verified: salt sits under condiments, no separate salt-lead row, no form split, so 1.0 caps unrefined salt"
          }
        ],
        "weak_not_material": [
          {
            "subcat": "bouillon-seasoning-blends",
            "analyte": "iAs",
            "verdict": "FALSE — CONFIRMED against primary GB 2762 text. 复合调味料 (compound condiment) 无机砷 0.1 mg/kg=100 is real (GB2762-2022 line 646, GB2762-2025 line 660), and Appendix A.1 defines compound condiment to include 固体汤料/鸡精/鸡粉 (bouillon and powdered seasoning). Species (无机砷=iAs) and as-sold dry mass basis both match. The claim 'no inorganic-As blend ML anywhere' is untrue.",
            "recommendation": "reclassify iAs from not-material to a 100 ppb government limit (regulatory-alignment / read-across, China GB 2762 compound-condiment 无机砷). Basis is clean (mass, as-sold dry) — no reconstitution/wet-dry conflation."
          },
          {
            "subcat": "hot-chili-sauces",
            "analyte": "iAs",
            "verdict": "FALSE — CONFIRMED, conditional on the compound-condiment classification the audit itself asserts. If a chili/hot sauce is a 复合调味料 (semi-solid compound condiment), GB 2762 sets 无机砷 0.1=100 for it (species iAs matches; as-sold ≈ as-consumed mass basis for a non-reconstituted bottled sauce), so the not-material claim is falsified. This is the GENUINE GB effect on chili-sauce arsenic — and it is precisely why the audit's tAs→500 tighten fails, since the same compound-condiment classification is EXCLUDED from the general-condiment total-As 0.5 line.",
            "recommendation": "reclassify iAs from not-material to 100 ppb (read-across China GB 2762 compound-condiment 无机砷). Do NOT use this value to lower the tAs cell (species mismatch iAs≠tAs). Note mutual exclusivity: this holds under the compound-condiment reading; if a recompile instead classifies chili sauce as a non-compound 其他调味品, iAs not-material would survive and tAs→500 would apply instead."
          },
          {
            "subcat": "salt / bouillon-seasoning-blends",
            "analyte": "Sn",
            "verdict": "TRUE — CONFIRMED. GB 2762 tin (锡) = 250 mg/kg with footnote '仅限于采用镀锡薄钢板容器包装的食品' (foods in tinplate containers ONLY); no tin ML reaches bagged salt or a foil-pouched dry blend. No migration pathway. Inconsistent only in presentation with the spices row, which uses 'control' citing measured trace tin.",
            "recommendation": "keep not-material is defensible; optionally align to a periodic-screen 'control' for cross-subcat consistency with the spices row."
          },
          {
            "subcat": "salt",
            "analyte": "Cr-VI",
            "verdict": "TRUE — CONFIRMED. No jurisdiction sets a Cr-VI food ML (GB 2762 sets total Cr 铬, not Cr-VI); mineral salt has no lead-chromate colour-adulteration pathway (unlike turmeric/chili), Cr-VI reduces to Cr(III) in-matrix, and it is bounded by the total-Cr screen. Correctly flagged rebuttable.",
            "recommendation": "keep not-material."
          },
          {
            "subcat": "salt / spices / bouillon",
            "analyte": "MeHg",
            "verdict": "TRUE — CONFIRMED. GB 2762 sets 甲基汞 (MeHg) only for aquatic animals, never for salt/spices/condiments; no methylation pathway in a mineral or terrestrial dried matrix; arithmetically bounded by tHg (MeHg≤tHg).",
            "recommendation": "keep not-material."
          },
          {
            "subcat": "salt / spices / bouillon",
            "analyte": "Al",
            "verdict": "TRUE — CONFIRMED. Aluminium is not a GB 2762 contaminant analyte (铝 appears nowhere in the standard; GB 2762 covers Pb/Cd/Hg/As/Sn/Ni/Cr). No per-food Al contaminant ML in any credible jurisdiction; Al is additive-permitted anti-caking / natural accumulator, managed by additive law + EFSA/JECFA TWI. Note hot-chili-sauces marks Al 'control' while these mark not-material — both defensible but inconsistent.",
            "recommendation": "keep not-material; harmonize the Al treatment (control vs not-material) across the four subcats for a cleaner defensibility posture."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification of cat34 (44 cells) against the register and the OFFICIAL PRC primary texts. I downloaded and parsed both GB 2762-2022 (Inner Mongolia Health Commission PDF, currently in force) and GB 2762-2025 (Fujian PDF, effective 2026-09-02) rather than relying on the audit's Spanish MAPA translation; every disputed row is IDENTICAL across the two versions, so there is no supersession risk across the 2026-09-02 transition. RESULT: 4 of 5 tighten candidates CONFIRMED, 1 REJECTED; all 6 not-material verdicts confirmed (2 iAs reclassifications upheld, 4 keep-not-material affirmations verified TRUE against the primary text). CONFIRMED tightenings: (1) bouillon-seasoning-blends iAs not-material→100 — 复合调味料 无机砷 0.1 is real (line 646/660) and Appendix A.1 defines compound condiment to include 固体汤料/鸡精/鸡粉 (bouillon/seasoning), species+basis clean [high]; (2) bouillon Pb 2000→1000 via 调味品(香辛料类除外) 1.0 [high]; (3) hot-chili-sauces Pb 2000→1000 via GB condiment 1.0 — but ONLY the China leg; confidence downgraded to medium [value is 1000 as compound/other condiment, 1500 worst-case as spice paste]; (4) salt unrefined Pb 2000→1000 — confidence UPGRADED to high after confirming 食用盐 sits under 调味品 with no separate salt-lead row and no refined/unrefined split, so the 1.0 line caps unrefined salt. REJECTED: hot-chili-sauces tAs (candidate 4). Its 100 leg is a hard species mismatch (无机砷/iAs cannot bind a tAs cell). Its 500 leg requires classifying chili sauce as a NON-compound '其他调味品', which is mutually exclusive with the compound-condiment classification the audit relies on for its own hot-chili Pb (1000) and iAs (100) candidates — GB's general-condiment total-As 0.5 line EXPLICITLY excludes 复合调味料 (调味品(水产调味品、复合调味料和香辛料类除外)). Under the audit's own classification, no GB total-As limit reaches chili sauce, so tAs stays 1000; the genuine GB effect is an iAs cell at 100, captured in weak_not_material, not a tAs tightening. Also corrected: the audit's framing of the Colombia mango-hot-sauce Pb 1000 as a 'deterministic register miss / never considered' is FALSE — cat34-config.json documents that exclusion verbatim on product-class grounds (fruit-preserve entry bundled with canned mangoes), so it is dropped from the hot-chili Pb justification. Cross-check confirmed the audit missed no additional GB tightenings: salt Cd (500), salt tAs (500 via other-condiment total-As), salt tHg (100) all MATCH GB and are correctly non-candidates; GB sets no general/compound-condiment Cd (only salt 0.5 and fish 0.1) so bouillon Cd stays 1000; spices Pb (EU fruit 600) beats GB 1500. category_confidence 0.3 (lowered): verification confirmed the current cells are NOT global-strictest — the fix is to ingest GB 2762-2022/2025 into regulatory_limits.csv and recompile."
      },
      {
        "category": "HMTc Category 35 — Prepared and Packaged Meals (mixed-meals-prepared-foods, soups-broths-stocks, bone-broth)",
        "cells_audited": 33,
        "category_confidence": 0.25,
        "coverage_gaps": [
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks",
            "analyte": "Pb",
            "issue": "Component read-across set OMITS two components that carry stricter in-allowlist EU MLs: fruiting vegetables (EU 2023/915 = 50 ppb; tomato/pepper are principal components of most soups and prepared meals) and dairy/milk (EU 2023/915 milk = 20 ppb; cream soups, chowders, mac-and-cheese, gratins). Only root/tuber veg (100) and meat (100) were considered, so the ceiling is 100 when their own 'strictest-applicable-component' rule yields 50 (fruiting veg) or 20 (dairy)."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks",
            "analyte": "tHg",
            "issue": "Component set omits every terrestrial mercury ML. China GB 2762-2022 sets tHg for fresh vegetables 10 ppb and cereals 20 ppb; HK sets vegetables 10 and meat 50; EU pesticide MRL sets cereals(incl rice) 10. The cell instead read across from the LOOSEST component (seafood 500), inverting the strictest-applicable rule used for Pb/Cd."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks / bone-broth",
            "analyte": "Cr (total)",
            "issue": "Cell declared 'control / no credible regulator sets a total-Cr ML.' False: HK cap132v sets total-Cr for vegetables 500, cereals 1000, meat 1000, pulses 1000; China GB 2762 sets total-Cr for liquid milk 300. A read-across (HK vegetables 500) is available and was not applied."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks",
            "analyte": "iAs",
            "issue": "Component set omits cephalopods. EU 2025/1891 (already in the register as eu20251891_ias_cephalopods_50) sets cephalopod iAs = 50, stricter than the fish 100 that was selected; squid/octopus are components of seafood soups, paella-style meals, marinara."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks",
            "analyte": "Cd",
            "issue": "Component set omits fruiting vegetables. Switzerland (ch_vhk_2026_cd_fruchtgemuse_20) and Bosnia set fruiting-vegetable Cd = 20, below the selected 40 (EU pulses). Tomato is a principal soup/meal component."
          },
          {
            "subcat": "ALL (register-level)",
            "analyte": "Pb/Cd/tAs/iAs/tHg/Cr",
            "issue": "The world register's China GB 2762 coverage is limited to infant/formula/dairy/cosmetic/pet-feed/toy rows; the comprehensive GB 2762-2022/2025 general-food matrix rows (cereals, fresh vegetables, meat, fish contaminant MLs) are absent. Because GB 2762 is the most comprehensive sovereign source, its omission is the largest blind spot in every deterministic register cross-check for this category."
          }
        ],
        "tighten_candidates": [
          {
            "subcat": "mixed-meals-prepared-foods",
            "analyte": "Pb",
            "current_value_ppb": "100",
            "current_binding": "read-across (EU root/tuber veg 100 & AU-NZ meat 100)",
            "proposed_value_ppb": "50 (general row / fruiting veg); 20 for dairy-containing sub-forms",
            "proposed_jurisdiction": "EU (in-allowlist)",
            "proposed_instrument": "EU 2023/915 Annex I 3.1.4.1 fruiting vegetables Pb 0.050 mg/kg; 3.1.16 milk Pb 0.020 mg/kg",
            "source": "EU 2023/915 primary text (CELEX 32023R0915) verified: 3.1.4.1=0,050 and 3.1.16=0,020 (wet weight). NOT in origin/main register — the register/repo transcription omit both rows.",
            "confidence": "CONFIRMED high — real (primary-verified), species Pb, wet=as-consumed basis, current; fruiting veg (tomato/pepper) is a genuine principal component and is in the config's own EU allowlist. 50 binds the general row; 20 applies only to dairy sub-forms (cream soups/gratins/mac-and-cheese)."
          },
          {
            "subcat": "soups-broths-stocks",
            "analyte": "Pb",
            "current_value_ppb": "100",
            "current_binding": "read-across (EU root/tuber veg 100 & AU-NZ meat 100)",
            "proposed_value_ppb": "50 (general row / tomato-fruiting veg); 20 for cream soups & chowders",
            "proposed_jurisdiction": "EU (in-allowlist)",
            "proposed_instrument": "EU 2023/915 Annex I 3.1.4.1 fruiting vegetables Pb 0.050 mg/kg; 3.1.16 milk Pb 0.020 mg/kg",
            "source": "EU 2023/915 primary text (CELEX 32023R0915) verified 3.1.4.1=0,050 & 3.1.16=0,020. NOT in register.",
            "confidence": "CONFIRMED high — tomato soup/minestrone make fruiting veg the canonical soup component; in-allowlist EU, primary-verified, species/basis match. 50 for the row, 20 for cream/chowder sub-forms."
          },
          {
            "subcat": "mixed-meals-prepared-foods",
            "analyte": "iAs",
            "current_value_ppb": "100",
            "current_binding": "read-across EU fish (eu20251891_ias_fish_other_100)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "EU (in-allowlist)",
            "proposed_instrument": "EU 2025/1891 Annex I 3.4.8 cephalopods inorganic As 0.050 mg/kg",
            "source": "eu20251891_ias_cephalopods_50 (register-confirmed). Same instrument as the fish anchor the cell already uses (eu20251891_ias_fish_other_100).",
            "confidence": "CONFIRMED high — strongest candidate: same regulation, same species (iAs), same wet basis; the config already admits fish/seafood as the iAs component and cephalopods (squid/octopus in paella/marinara/seafood medley) carry the stricter 50 in that very instrument."
          },
          {
            "subcat": "soups-broths-stocks",
            "analyte": "iAs",
            "current_value_ppb": "100",
            "current_binding": "read-across EU fish 100",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "EU (in-allowlist)",
            "proposed_instrument": "EU 2025/1891 Annex I 3.4.8 cephalopods inorganic As 0.050 mg/kg",
            "source": "eu20251891_ias_cephalopods_50 (register-confirmed).",
            "confidence": "CONFIRMED high — cioppino/marinara/seafood-chowder soups contain cephalopods; same instrument/species/basis as the fish anchor already used."
          },
          {
            "subcat": "mixed-meals-prepared-foods",
            "analyte": "tHg",
            "current_value_ppb": "500",
            "current_binding": "read-across EU seafood 500 (LOOSEST component — strictest-applicable rule inverted)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "China (GB 2762) + Hong Kong (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 Table 3 fresh vegetables total mercury 0.01 mg/kg; HK Cap 132V vegetables-other-than-edible-fungi tHg 0.01 mg/kg",
            "source": "GB 2762-2022 primary reproduction (MAPA, Table 3: veg 0.01, grains 0.02, meat 0.05, all total mercury) + hk_cap132v_thg_vegetables-other-than-edible-fungi_10 (register). EU pesticide-MRL anchor eu2018_73_hg_cereals_mrl_10 REJECTED as an instrument mismatch (Reg 396/2005 residue MRL / LOD-floor for banned Hg pesticides, not a contaminant ML).",
            "confidence": "CONFIRMED medium (downgraded from audit's high) — regulatory fact is strong: two independent credible sovereigns, primary+register verified, current (GB 2762-2022 in force to 2026-09-02; HK current), species=total mercury, wet basis, veg is a near-universal component. ADOPTION requires widening the config's self-imposed allowlist (EU/Codex/FDA/JECFA/FSANZ/HC/UK) to admit HK/China, which the register (164 HK rows) and other HMTc categories already treat as credible — a Karen-facing methodology call, not a factual dispute. One of the audit's three anchors (EU MRL) was dropped."
          },
          {
            "subcat": "soups-broths-stocks",
            "analyte": "tHg",
            "current_value_ppb": "500",
            "current_binding": "read-across EU seafood 500 (loosest component)",
            "proposed_value_ppb": "10",
            "proposed_jurisdiction": "China (GB 2762) + Hong Kong (Cap 132V)",
            "proposed_instrument": "GB 2762-2022 fresh vegetables total mercury 0.01 mg/kg; HK Cap 132V vegetables tHg 0.01 mg/kg",
            "source": "GB 2762-2022 primary (MAPA Table 3) + hk_cap132v_thg_vegetables-other-than-edible-fungi_10 (register). EU pesticide-MRL anchor rejected as instrument mismatch.",
            "confidence": "CONFIRMED medium — same as mixed-meals tHg; corrects the config's own inversion (it selected the single loosest component). Adoption requires admitting HK/China."
          },
          {
            "subcat": "mixed-meals-prepared-foods",
            "analyte": "Cd",
            "current_value_ppb": "40",
            "current_binding": "read-across EU pulses (eu2023_cd_pulses_40)",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "EU (in-allowlist) — audit had credited only Switzerland",
            "proposed_instrument": "EU 2023/915 Annex I 3.2.4.1 fruiting vegetables Cd 0.020 mg/kg AND 3.2.7 legume vegetables 0.020 mg/kg",
            "source": "EU 2023/915 primary text (CELEX 32023R0915) verified: 3.2.4.1=0,020 and 3.2.7=0,020. Corroborated by ch_vhk_2026_cd_fruchtgemuse_20 (register).",
            "confidence": "CONFIRMED high (UPGRADED from audit's medium) — the tightening does NOT depend on out-of-allowlist Switzerland: EU itself sets fruiting-veg and legume-veg Cd at 20. The config missed its own stricter EU cadmium rows while selecting the looser pulse row (40)."
          },
          {
            "subcat": "soups-broths-stocks",
            "analyte": "Cd",
            "current_value_ppb": "40",
            "current_binding": "read-across EU pulses 40",
            "proposed_value_ppb": "20",
            "proposed_jurisdiction": "EU (in-allowlist)",
            "proposed_instrument": "EU 2023/915 Annex I 3.2.4.1 fruiting vegetables Cd 0.020 mg/kg; 3.2.7 legume vegetables 0.020 mg/kg",
            "source": "EU 2023/915 primary text verified 3.2.4.1 & 3.2.7 = 0,020; ch_vhk_2026_cd_fruchtgemuse_20 (register corroboration).",
            "confidence": "CONFIRMED high (upgraded) — tomato/legume soups; in-allowlist EU anchor, primary-verified."
          },
          {
            "subcat": "mixed-meals-prepared-foods",
            "analyte": "Cr (total)",
            "current_value_ppb": "none (control)",
            "current_binding": "control — 'no credible regulator sets total-Cr ML' (substantiation is factually FALSE)",
            "proposed_value_ppb": "500 (read-across) or control-with-companion-ML",
            "proposed_jurisdiction": "Hong Kong (Cap 132V) + China (GB 2762)",
            "proposed_instrument": "HK Cap 132V vegetables-other-than-pulses total-Cr 0.5 mg/kg; China GB 2762 liquid milk Cr 0.3 mg/kg",
            "source": "hk_cap132v_crtotal_vegetables-other-than-pulses_500 (register); china_gb2762_cr_liquid_milk_300 (register).",
            "confidence": "CONFIRMED medium — species is TOTAL Cr (correctly distinct from the Cr-VI cell), real and current. But total Cr is not the toxic species (Cr-III is an essential nutrient; hazard is Cr-VI, handled as not-material), so control-with-companion-ML citing HK/China is an acceptable alternative to a hard 500. The core confirmed correction is that the 'no credible regulator' substantiation is false. Requires admitting HK/China."
          },
          {
            "subcat": "soups-broths-stocks",
            "analyte": "Cr (total)",
            "current_value_ppb": "none (control)",
            "current_binding": "control — 'no credible regulator sets total-Cr ML' (FALSE)",
            "proposed_value_ppb": "500 (read-across) or control-with-companion-ML",
            "proposed_jurisdiction": "Hong Kong (Cap 132V) + China (GB 2762)",
            "proposed_instrument": "HK Cap 132V vegetables total-Cr 0.5 mg/kg; China GB 2762 liquid milk Cr 0.3 mg/kg",
            "source": "hk_cap132v_crtotal_vegetables-other-than-pulses_500 (register); china_gb2762_cr_liquid_milk_300 (register).",
            "confidence": "CONFIRMED medium — same basis as mixed-meals Cr-total; substantiation is false, adoption requires admitting HK/China, control-with-companion-ML is an acceptable alternative to 500."
          },
          {
            "subcat": "bone-broth",
            "analyte": "tHg",
            "current_value_ppb": "none (control)",
            "current_binding": "control — 'no credible regulator sets a mercury ML for terrestrial meat or bone' (FALSE)",
            "proposed_value_ppb": "50",
            "proposed_jurisdiction": "Hong Kong (Cap 132V) + China (GB 2762)",
            "proposed_instrument": "HK Cap 132V meat-of-animal tHg 0.05 mg/kg; GB 2762-2022 Table 3 meats total mercury 0.05 mg/kg",
            "source": "hk_cap132v_thg_meat-of-animal_50 (register); GB 2762-2022 Table 3 meats 0.05 (primary, MAPA).",
            "confidence": "CONFIRMED medium — species tHg, current; form = muscle-meat read-across, consistent with the config's OWN bone-broth Pb/Cd pattern (which reads across from FSANZ/EU muscle meat). The 'no terrestrial mercury regulator' substantiation is factually false. Adoption requires admitting HK/China."
          }
        ],
        "weak_not_material": [
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks",
            "analyte": "Cr (total)",
            "verdict": "CONFIRMED FALSE — the 'no credible regulator sets a total-chromium ML' substantiation is contradicted by real, register-verified limits: HK Cap 132V (vegetables 500; cereals/meat/pulses 1000) and China GB 2762 (liquid milk 300). Species is total Cr, correctly distinct from Cr-VI.",
            "recommendation": "Fix the false substantiation. Cite the HK/China total-Cr MLs; either read-across 500 (HK veg) or keep control-with-companion-ML. Keep the reducing-matrix argument only for the Cr-VI cell. Requires the config to admit HK/China to its credible-regulator allowlist."
          },
          {
            "subcat": "bone-broth",
            "analyte": "tHg",
            "verdict": "CONFIRMED FALSE — 'no credible regulator sets a mercury ML for terrestrial meat or bone' is contradicted by HK Cap 132V meat-of-animal tHg 50 (register) and GB 2762-2022 meats total mercury 0.05 mg/kg (primary-verified, MAPA Table 3).",
            "recommendation": "Reclassify control -> read-across 50 (HK/China meat tHg), or control-with-companion-ML citing them; do not assert zero terrestrial mercury regulation. Requires admitting HK/China."
          },
          {
            "subcat": "bone-broth",
            "analyte": "Cr (total)",
            "verdict": "CONFIRMED FALSE (but loose) — HK Cap 132V meat total-Cr 1000 (register) and CH VHK / IN FSSAI gelatine total-Cr 10000 (register) exist.",
            "recommendation": "Acknowledge the HK meat total-Cr 1000; since the values are far above any plausible ceiling, keeping control while citing them (rather than a numeric read-across) is fine, but drop the 'no regulator exists' claim."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks / bone-broth",
            "analyte": "Cr-VI",
            "verdict": "CONFIRMED TRUE — hexavalent Cr is reduced to Cr-III in a cooked, wet, protein-rich matrix and no credible regulator sets a Cr-VI FOOD ML (HK/China regulate TOTAL Cr in food, not Cr-VI).",
            "recommendation": "Keep not-material, but ensure the TOTAL-Cr cell carries the HK/China companion citation that bounds it (per the Cr-total correction above)."
          },
          {
            "subcat": "mixed-meals-prepared-foods / soups-broths-stocks / bone-broth",
            "analyte": "MeHg",
            "verdict": "CONFIRMED TRUE — MeHg <= tHg and is bounded by the total-mercury cell.",
            "recommendation": "Keep not-material, but the bounding tHg cell must first be corrected from the 500 seafood ceiling to the terrestrial ~10 (meals/soups) / ~50 (bone-broth) value per the confirmed tHg candidates."
          },
          {
            "subcat": "bone-broth",
            "analyte": "iAs",
            "verdict": "CONFIRMED TRUE (largely) — no rice/marine inorganic-arsenic source in a terrestrial bone broth; bounded by the tAs screen. Israel does set meat iAs 20 (il_fcs2016_ias_..._20, register) as an outlier signal.",
            "recommendation": "Keep not-material; optionally set a low control given the Israel meat iAs 20 signal."
          },
          {
            "subcat": "bone-broth",
            "analyte": "tAs",
            "verdict": "CONFIRMED TRUE — no credible total-arsenic ML for meat/bone/animal stock at a credible tier (Israel meat tAs 1000 is loose).",
            "recommendation": "Keep control (screen bounded by iAs)."
          },
          {
            "subcat": "bone-broth",
            "analyte": "Ni",
            "verdict": "CONFIRMED TRUE — EU nickel MLs (Reg 2024/1987; the audit's '2024/1252' cite is imprecise) are plant-matrix only (cereals, vegetables, pulses); no credible meat/animal-stock Ni ML found.",
            "recommendation": "Keep control; limit-anyway optional (Tier-2 analyte)."
          },
          {
            "subcat": "ALL",
            "analyte": "Al",
            "verdict": "CONFIRMED TRUE for contaminant MLs — aluminium is regulated as an additive (e.g. GB 2760), not as a contaminant, for these matrices; China GB 2760 noodle/baked Al are additive-use limits, not contaminant ceilings.",
            "recommendation": "Keep control; add an additive companion-ML note for noodle- and batter-containing meals."
          }
        ],
        "ppb_pushbacks": [],
        "summary": "Adversarial verification result: 12 of 12 tighten candidates CONFIRMED on the regulatory facts, 0 rejected outright, plus one anchor struck and several re-graded. Every value the audit cited is REAL — verified either in the origin/main register or at primary source (EU 2023/915 official text CELEX 32023R0915; GB 2762-2022 Table 3 official reproduction). No hallucinations, no species mismatches, no superseded instruments, no wet/dry or migration/content basis errors. HIGH-confidence (in-allowlist EU, primary-verified): Pb meals/soups 100->50 (EU 3.1.4.1 fruiting veg 0.050; 20 for dairy sub-forms via 3.1.16 milk 0.020); iAs meals/soups 100->50 (EU 2025/1891 cephalopods 50, the same instrument as the fish anchor already used); Cd meals/soups 40->20 — UPGRADED from the audit's medium because EU itself (3.2.4.1 fruiting veg, 3.2.7 legume veg = 0.020) sets it, so the tightening does not depend on out-of-allowlist Switzerland. MEDIUM-confidence, gated on one methodology decision: tHg meals/soups 500->10 and bone-broth tHg control->50 (HK Cap 132V + GB 2762-2022 terrestrial mercury, both current and dual-verified), and Cr-total control->500 (HK/China total-Cr). These are factually solid but their ADOPTION requires widening the config's self-imposed credible-regulator allowlist (EU/Codex/FDA/JECFA/FSANZ/HC/UK) to admit Hong Kong and China — both credible sovereigns already carrying 164+ register rows and anchoring other HMTc categories. This is the crux Karen must rule on; it is a policy call, not a factual dispute, and the config's substantiations that 'no credible regulator' sets terrestrial mercury/total-Cr MLs are demonstrably FALSE. One anchor REJECTED: the EU cereal Hg 'MRL 10' (eu2018_73) is a Reg 396/2005 pesticide-residue MRL (LOD-floor for banned Hg pesticides), not a contaminant ML — instrument mismatch; the tHg candidate survives on HK+China without it. The audit's core thesis is verified: the config applied its own 'strictest-applicable-component' rule inconsistently (used it for Pb/Cd/iAs but inverted it for tHg by anchoring on the single loosest component, seafood 500) and missed several stricter in-allowlist EU rows. All 9 not-material challenges survive verification: 3 FALSE-substantiation corrections confirmed (Cr-total and bone-broth tHg 'no regulator' claims are factually false), and 6 not-material cells (Cr-VI, MeHg, bone-broth iAs/tAs/Ni, Al) correctly hold. category_confidence lowered to 0.25: the anchor mechanics are sound but multiple stricter sovereign limits — including in-allowlist EU values — are demonstrably missed, so current cells do not reflect the global strictest."
      }
    ],
    "synth": {
      "per_category": [
        {
          "category": "Cat 1 — Infant & Child Foods",
          "confidence": 0.45,
          "verdict": "NEEDS-WORK",
          "tightenings": 7,
          "gaps": 4
        },
        {
          "category": "Cat 3 — Grains, Cereals & Rice",
          "confidence": 0.3,
          "verdict": "NEEDS-WORK",
          "tightenings": 12,
          "gaps": 3
        },
        {
          "category": "Cat 6 — Seafood",
          "confidence": 0.5,
          "verdict": "NEEDS-WORK",
          "tightenings": 2,
          "gaps": 7
        },
        {
          "category": "Cat 9 — Infant/Child Contact Products",
          "confidence": 0.82,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 8
        },
        {
          "category": "Cat 12 — Household Cleaning",
          "confidence": 0.05,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 11
        },
        {
          "category": "Cat 15 — Feminine Care",
          "confidence": 0.85,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 3
        },
        {
          "category": "Cat 16 — Dietary Supplements",
          "confidence": 0.93,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 0
        },
        {
          "category": "Cat 17 — Pet Foods",
          "confidence": 0.35,
          "verdict": "NEEDS-WORK",
          "tightenings": 10,
          "gaps": 4
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "confidence": 0.35,
          "verdict": "NEEDS-WORK",
          "tightenings": 12,
          "gaps": 4
        },
        {
          "category": "Cat 25 — Cannabis/Hemp/CBD",
          "confidence": 0.5,
          "verdict": "NEEDS-WORK",
          "tightenings": 2,
          "gaps": 4
        },
        {
          "category": "Cat 26 — Peptides/SARMs/Research Chem",
          "confidence": 0.9,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 0
        },
        {
          "category": "Cat 27 — Legumes & Pulses",
          "confidence": 0.5,
          "verdict": "NEEDS-WORK",
          "tightenings": 3,
          "gaps": 5
        },
        {
          "category": "Cat 28 — Nuts, Seeds & Butters",
          "confidence": 0.3,
          "verdict": "NEEDS-WORK",
          "tightenings": 10,
          "gaps": 3
        },
        {
          "category": "Cat 29 — Edible Fungi",
          "confidence": 0.4,
          "verdict": "NEEDS-WORK",
          "tightenings": 3,
          "gaps": 3
        },
        {
          "category": "Cat 30 — Culinary Oils & Fats",
          "confidence": 0.9,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 3
        },
        {
          "category": "Cat 31 — Sweeteners & Syrups",
          "confidence": 0.87,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 4
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "confidence": 0.2,
          "verdict": "NEEDS-WORK",
          "tightenings": 8,
          "gaps": 4
        },
        {
          "category": "Cat 33 — Chocolate, Cocoa & Confectionery",
          "confidence": 0.9,
          "verdict": "NEEDS-WORK",
          "tightenings": 0,
          "gaps": 0
        },
        {
          "category": "Cat 34 — Herbs, Spices, Seasonings & Salt",
          "confidence": 0.3,
          "verdict": "NEEDS-WORK",
          "tightenings": 4,
          "gaps": 3
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "confidence": 0.25,
          "verdict": "NEEDS-WORK",
          "tightenings": 11,
          "gaps": 6
        }
      ],
      "confirmed_tightenings": [
        {
          "category": "Cat 6 — Seafood",
          "subcat": "seaweed-kelp-foods",
          "analyte": "tHg",
          "from_ppb": "2500",
          "to_ppb": "100",
          "jurisdiction": "FR",
          "instrument": "CSHPF edible-seaweed maximum, total Hg 0.1 mg/kg DM (recs 1988/1990), verbatim in ANSES 2017-SA-0070 Table 3; dry-weight basis matches cell. 25x — highest single-cell fold in the fleet."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-yogurt-cultured",
          "analyte": "Cd",
          "from_ppb": "1000",
          "to_ppb": "50",
          "jurisdiction": "IL",
          "instrument": "FCS 2016 'Dairy products' Cd 0.05 mg/kg (il_fcs2016_cd_1_1_dairy_products_50); VN-1000 was a single-member pool. 20x."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-milk-goat-sheep, dairy-milk-camel",
          "analyte": "tAs",
          "from_ppb": "1000",
          "to_ppb": "50",
          "jurisdiction": "PY/MERCOSUR",
          "instrument": "Decreto 1335/2019 fluid-milk tAs 0.05 mg/kg (same as-consumed matrix already binding cow milk). 20x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-food-fish-marine-protein",
          "analyte": "Cr",
          "from_ppb": "12000",
          "to_ppb": "1000",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 7 Fish total-Cr 1.0 mg/kg (hk_cap132v_crtotal_fish_1000, in-register, pooling miss). 12x."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-milk-cow, dairy-milk-goat-sheep, dairy-milk-camel",
          "analyte": "Cd",
          "from_ppb": "50",
          "to_ppb": "5",
          "jurisdiction": "IL",
          "instrument": "FCS 2016 'Milk' Cd 0.005 mg/kg (il_fcs2016_cd_1_milk_5); compiler used looser IL 'Dairy products' 50. 10x."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-milk-cow",
          "analyte": "iAs",
          "from_ppb": "100",
          "to_ppb": "10",
          "jurisdiction": "IL",
          "instrument": "FCS 2016 'Milk' iAs 0.01 mg/kg (within-instrument stricter row vs 'Dairy products' 100). RECONCILE register value 10 vs USDA-source 12 before publish. 10x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-milk-replacers-specialty-liquids",
          "analyte": "iAs",
          "from_ppb": "100",
          "to_ppb": "10",
          "jurisdiction": "IL",
          "instrument": "FCS 2016 'Milk' iAs 0.01 mg/kg (stricter same-instrument row than 'Dairy products' 100). 10x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-milk-replacers-specialty-liquids",
          "analyte": "Cd",
          "from_ppb": "50",
          "to_ppb": "5",
          "jurisdiction": "IL",
          "instrument": "FCS 2016 'Milk' Cd 0.005 mg/kg (nearer same-form row than IL 'Dairy products' 0.05). 10x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "soy-sauce-fermented",
          "analyte": "Cd",
          "from_ppb": "1000",
          "to_ppb": "100",
          "jurisdiction": "UY",
          "instrument": "RBN 5th ed (Decreto 315/994) 'liquid foods in general' Cd 0.1 mg/kg; UY sets no sauce carve-out, so the general catch-all applies. Requires compiler to union catch-all scopes. 10x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "soy-sauce-fermented",
          "analyte": "tAs",
          "from_ppb": "1000",
          "to_ppb": "100",
          "jurisdiction": "UY",
          "instrument": "RBN 5th ed 'liquid foods in general' total-As 0.1 mg/kg. 10x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "vinegar",
          "analyte": "Cd",
          "from_ppb": "1000",
          "to_ppb": "100",
          "jurisdiction": "UY",
          "instrument": "RBN 5th ed 'liquid foods in general' Cd 0.1 mg/kg (no UY vinegar-specific limit). 10x."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-milk-cow, dairy-milk-goat-sheep, dairy-milk-camel",
          "analyte": "tHg",
          "from_ppb": "50 (cow) / 100 (goat-sheep, camel)",
          "to_ppb": "10",
          "jurisdiction": "IL/HK",
          "instrument": "IL FCS 2016 'Milk' + HK Cap 132V 'Milk' total-Hg 0.01 mg/kg (two independent sovereigns). 5-10x."
        },
        {
          "category": "Cat 6 — Seafood",
          "subcat": "seaweed-kelp-foods",
          "analyte": "Cd",
          "from_ppb": "2000",
          "to_ppb": "500",
          "jurisdiction": "FR",
          "instrument": "CSHPF edible-seaweed Cd 0.5 mg/kg DM (ANSES 2017-SA-0070 Table 3); dry-weight basis matches. France has 0 register rows — the miss reason. 4x."
        },
        {
          "category": "Cat 28 — Nuts, Seeds & Butters",
          "subcat": "cashews, tree-nuts-high-nickel, nuts-seeds-other, sunflower-seeds, sunflower-seed-butter, nut-seed-butters-other",
          "analyte": "Pb",
          "from_ppb": "1000",
          "to_ppb": "200",
          "jurisdiction": "CN",
          "instrument": "GB 2762-2022 Table 1 'Nuts and seeds (excl. coffee beans)' Pb 0.2 mg/kg (paste subcat inherits, no separate lead row). Needs GB 2762 ingest. 5x, all 6 subcats."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-food-canned-wet, pet-food-raw, pet-toppers-mixers-broths",
          "analyte": "tHg",
          "from_ppb": "200",
          "to_ppb": "50",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 12 'Meat of animal' tHg 0.05 mg/kg (hk_cap132v_thg_meat-of-animal_50, in-register pooling miss). 4x."
        },
        {
          "category": "Cat 25 — Cannabis/Hemp/CBD",
          "subcat": "cannabis-tinctures-oils",
          "analyte": "tHg",
          "from_ppb": "400",
          "to_ppb": "100",
          "jurisdiction": "IL",
          "instrument": "IMC-GMP SOP 152 'oils' product group tHg 0.1 mg/kg (same as-sold oil form already bound at 100 in concentrates bucket — binding-min inconsistency). 4x."
        },
        {
          "category": "Cat 27 — Legumes & Pulses",
          "subcat": "legumes-pulses-other",
          "analyte": "Cd",
          "from_ppb": "40",
          "to_ppb": "10",
          "jurisdiction": "PA",
          "instrument": "Decreto 467/2007 'Cereales, legumbres y leguminosas' Cd 0.01 mg/kg (primary-verified Gaceta Oficial 25932 p.24; decimal-error suspicion refuted). 4x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "mustard-mayo-dressings",
          "analyte": "Cd",
          "from_ppb": "1000",
          "to_ppb": "200",
          "jurisdiction": "UY/SG",
          "instrument": "UY RBN 'solid foods' Cd 0.2 / SG reg 31(5) 'other food' Cd 0.2 mg/kg (two sovereigns; pourable dressings could take UY liquid 100). 5x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "tomato-condiments",
          "analyte": "Cd",
          "from_ppb": "1000",
          "to_ppb": "200",
          "jurisdiction": "UY/SG",
          "instrument": "UY RBN 'solid foods' / SG 'other food' Cd 0.2 mg/kg; tomatoes carved out of fruiting-veg Cd 50, so general catch-all is the floor. 5x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-food dry-kibble, freeze-dried, semi-moist, treats, chews",
          "analyte": "tHg",
          "from_ppb": "30",
          "to_ppb": "20 (veg fraction 10)",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 12 cereals 0.02 / vegetables 0.01 mg/kg (in-register). ~1.5x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-milk-replacers-specialty-liquids",
          "analyte": "tHg",
          "from_ppb": "50",
          "to_ppb": "10 (4 if reclassified to infant-formula analog)",
          "jurisdiction": "IL/HK",
          "instrument": "IL/HK 'Milk' total-Hg 0.01 mg/kg; drops to 4 under the milk-replacer→infant-formula reclassification. 5x."
        },
        {
          "category": "Cat 17 — Pet Foods",
          "subcat": "pet-milk-replacers-specialty-liquids",
          "analyte": "Pb",
          "from_ppb": "20",
          "to_ppb": "10",
          "jurisdiction": "EU/Codex/UK/CN/BR",
          "instrument": "Reclassify neonatal-animal sole-diet formulas to infant-formula-liquid analog: Pb 10 (EU 2023/915 §3.1.24.2, ~worldwide). Modeling reclassification for reviewer ratification; subsumes Cd→5/iAs→10/tHg→4. 2x."
        },
        {
          "category": "Cat 3 — Grains, Cereals & Rice",
          "subcat": "rice-bulk-grain + 10 other solid grain subcats (all 11)",
          "analyte": "tHg",
          "from_ppb": "30",
          "to_ppb": "20",
          "jurisdiction": "CN/HK",
          "instrument": "GB 2762-2022 Table 3 grains total-Hg 0.02 mg/kg (USDA GAIN CH2023-0040) = HK Cap 132V item 12. EU 2018/73 10 ppb REJECTED (pesticide MRL, not contaminant ML). ~1.5x, 11 subcats."
        },
        {
          "category": "Cat 3 — Grains, Cereals & Rice",
          "subcat": "rice-bulk-grain + 10 other solid grain subcats (all 11)",
          "analyte": "total Cr",
          "from_ppb": "not_material ('no ML anywhere')",
          "to_ppb": "1000",
          "jurisdiction": "CN/HK",
          "instrument": "GB 2762-2022 Table 7 'Grains 1.0 / Milled grain products 1.0 mg/kg' = HK Cap 132V item 7 Cereals 1.0. Mandatory total currently uncovered; the 'no ML' claim is FALSE. Establish across 11 subcats."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "soy-sauce-fermented",
          "analyte": "Pb",
          "from_ppb": "2000",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762 'Condiments (excl. spices)' Pb 1.0 mg/kg (USDA FAS CH2023-0040). Needs GB 2762 ingest. 2x."
        },
        {
          "category": "Cat 32 — Condiments, Sauces & Dressings",
          "subcat": "mustard-mayo-dressings",
          "analyte": "Pb",
          "from_ppb": "2000",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762 'Condiments (excl. spices)' Pb 1.0 mg/kg (mayo/mustard/dressings = compound condiments 复合调味料). 2x."
        },
        {
          "category": "Cat 34 — Herbs, Spices, Seasonings & Salt",
          "subcat": "bouillon-seasoning-blends",
          "analyte": "Pb",
          "from_ppb": "2000",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762-2022/2025 调味品(香辛料类除外) Pb 1.0 mg/kg (primary PRC text line 240/255; bouillon = 复合调味料). 2x."
        },
        {
          "category": "Cat 34 — Herbs, Spices, Seasonings & Salt",
          "subcat": "hot-chili-sauces",
          "analyte": "Pb",
          "from_ppb": "2000",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762 condiment Pb 1.0 mg/kg (1500 worst-case as spice-paste; every GB reading < 2000). Colombia mango-hot-sauce leg REJECTED (fruit-preserve scope, already excluded in config). 2x."
        },
        {
          "category": "Cat 34 — Herbs, Spices, Seasonings & Salt",
          "subcat": "salt (unrefined form)",
          "analyte": "Pb",
          "from_ppb": "2000",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762 调味品(香辛料类除外) Pb 1.0 mg/kg; 食用盐 sits under 调味品 with no separate salt-lead row and no refined/unrefined split (GB 2762-2017's former salt Pb 2.0 line was dropped). 2x."
        },
        {
          "category": "Cat 34 — Herbs, Spices, Seasonings & Salt",
          "subcat": "bouillon-seasoning-blends",
          "analyte": "iAs",
          "from_ppb": "not_material",
          "to_ppb": "100",
          "jurisdiction": "CN",
          "instrument": "GB 2762 复合调味料 (compound condiment, incl. 固体汤料/鸡精/鸡粉) 无机砷 0.1 mg/kg (primary text line 646/660). Species iAs, as-sold dry basis. Establish."
        },
        {
          "category": "Cat 25 — Cannabis/Hemp/CBD",
          "subcat": "cannabis-concentrates",
          "analyte": "iAs",
          "from_ppb": "control (bounded by tAs 500)",
          "to_ppb": "200",
          "jurisdiction": "US-MI",
          "instrument": "Michigan CRA Technical Guidance v5.2 (2024-09-23) Table 2 'Inorganic Arsenic 0.200' ppm for concentrates (literally speciated iAs, 200<tAs 500). Needs MI rows loaded. Establish."
        },
        {
          "category": "Cat 24 — Dairy & Milk Products",
          "subcat": "dairy-condensed-evaporated",
          "analyte": "Sn",
          "from_ppb": "control (null)",
          "to_ppb": "200000",
          "jurisdiction": "EU",
          "instrument": "EU 2023/915 Annex I §3.5.1 inorganic tin, canned foods 200 mg/kg (cell is canned=true; strictest canned-food tin sovereign). Establish — Sn is MATERIAL here."
        },
        {
          "category": "Cat 1 — Infant & Child Foods",
          "subcat": "baby-food solids (cereals non-rice/rice, fruit/veg purees, mixed-meals, teething-and-snacks)",
          "analyte": "tAs",
          "from_ppb": "none (mandatory total absent)",
          "to_ppb": "50",
          "jurisdiction": "IN",
          "instrument": "FSSAI FSS (Contaminants) Regs 2011 'Infant milk substitute and infant foods' arsenic (total) 0.05 mg/kg, 'as such'. Strictest infant tAs in register (next SG 100). Establish mandatory total."
        },
        {
          "category": "Cat 1 — Infant & Child Foods",
          "subcat": "infant-formula-powder (direct); infant-formula-rtf-liquid (basis-flagged)",
          "analyte": "tAs",
          "from_ppb": "none (mandatory total absent)",
          "to_ppb": "50",
          "jurisdiction": "IN",
          "instrument": "FSSAI infant milk substitute tAs 0.05 mg/kg. Powder cells clean (as_sold direct); RTF-liquid as_consumed basis unconfirmed vs powder-basis IN row — may need conversion, not face value. Establish."
        },
        {
          "category": "Cat 1 — Infant & Child Foods",
          "subcat": "baby-cereals-dry-non-rice, baby-cereals-dry-rice-based, teething-and-snacks (grain)",
          "analyte": "Cr",
          "from_ppb": "not_material",
          "to_ppb": "1000",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 7 Cereals total-Cr 1.0 mg/kg (same-matrix read-across; not_material rationale overlooked it). Keep Cr-VI reflex as additional control. Reclassify + establish."
        },
        {
          "category": "Cat 1 — Infant & Child Foods",
          "subcat": "non-root-vegetable-purees, root-vegetable-purees-single-ingredient",
          "analyte": "Cr",
          "from_ppb": "not_material",
          "to_ppb": "500",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 7 Vegetables (other than pulses) total-Cr 0.5 mg/kg. VERIFY exact 0.5 figure against Part-2 Schedule before publish (register-only). Reclassify + establish."
        },
        {
          "category": "Cat 1 — Infant & Child Foods",
          "subcat": "mixed-meals-non-rice, mixed-meals-rice-containing",
          "analyte": "Cr",
          "from_ppb": "not_material",
          "to_ppb": "500 (strictest component = vegetables; cereal/meat components 1000)",
          "jurisdiction": "HK",
          "instrument": "Cap 132V item 7 component read-across (Vegetables 0.5 / Cereals & Meat 1.0). Value choice (500 vs 1000) is a governance judgment. Reclassify + establish."
        },
        {
          "category": "Cat 27 — Legumes & Pulses",
          "subcat": "legumes-pulses-other",
          "analyte": "Cr",
          "from_ppb": "control ('no gov sets total-Cr')",
          "to_ppb": "1000",
          "jurisdiction": "CN/HK",
          "instrument": "GB 2762-2022 Table 7 'Beans' 1.0 mg/kg = HK Cap 132V item 7 'Pulses' 1.0 (in-register). Recompile (stale — HK rows ingested 48 min post-compile) + remove config Cr control_only flag. Establish."
        },
        {
          "category": "Cat 27 — Legumes & Pulses",
          "subcat": "soy-products",
          "analyte": "Cr",
          "from_ppb": "control",
          "to_ppb": "1000",
          "jurisdiction": "CN",
          "instrument": "GB 2762-2022 Table 7 豆类/'Beans' 1.0 mg/kg (soybeans are archetypal 豆类; HK 'Pulses' excludes soy so China anchors). Establish."
        },
        {
          "category": "Cat 28 — Nuts, Seeds & Butters",
          "subcat": "cashews, tree-nuts-high-nickel, nuts-seeds-other, nut-seed-butters-other (4 tree-nut cells)",
          "analyte": "tAs",
          "from_ppb": "1000",
          "to_ppb": "800",
          "jurisdiction": "BR",
          "instrument": "IN 160/2022 §1.1 'Arsênio total' castanhas 0.80 mg/kg (verified TOTAL, no iAs override; walnut='nozes' explicit). Needs BR ingest. 1.25x, 4 tree-nut subcats."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "mixed-meals-prepared-foods, soups-broths-stocks",
          "analyte": "Pb",
          "from_ppb": "100",
          "to_ppb": "50 (dairy sub-forms 20)",
          "jurisdiction": "EU",
          "instrument": "EU 2023/915 3.1.4.1 fruiting-veg Pb 0.050 / 3.1.16 milk 0.020 mg/kg (IN-ALLOWLIST, adoptable now; primary-verified, not in register). Component set omitted its own stricter EU rows. 2x."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "mixed-meals-prepared-foods, soups-broths-stocks",
          "analyte": "iAs",
          "from_ppb": "100",
          "to_ppb": "50",
          "jurisdiction": "EU",
          "instrument": "EU 2025/1891 3.4.8 cephalopods iAs 0.050 mg/kg (eu20251891_ias_cephalopods_50, same instrument as the fish anchor already used; IN-ALLOWLIST, adoptable now). 2x."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "mixed-meals-prepared-foods, soups-broths-stocks",
          "analyte": "Cd",
          "from_ppb": "40",
          "to_ppb": "20",
          "jurisdiction": "EU",
          "instrument": "EU 2023/915 3.2.4.1 fruiting-veg / 3.2.7 legume-veg Cd 0.020 mg/kg (IN-ALLOWLIST EU, does NOT depend on Switzerland; config missed its own stricter EU rows). 2x."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "mixed-meals-prepared-foods, soups-broths-stocks",
          "analyte": "tHg",
          "from_ppb": "500",
          "to_ppb": "10",
          "jurisdiction": "CN/HK",
          "instrument": "[GATED — HK/China allowlist decision] GB 2762-2022 fresh-veg total-Hg 0.01 = HK Cap 132V veg 0.01 mg/kg. Corrects the config's strictest-applicable-component INVERSION (it anchored the single loosest component, seafood 500). EU-MRL 10 anchor struck. 50x once admitted."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "mixed-meals-prepared-foods, soups-broths-stocks",
          "analyte": "Cr (total)",
          "from_ppb": "control ('no credible regulator' — FALSE)",
          "to_ppb": "500",
          "jurisdiction": "HK/CN",
          "instrument": "[GATED — HK/China allowlist decision] HK Cap 132V vegetables total-Cr 0.5 mg/kg (or control-with-companion-ML). Substantiation is demonstrably false."
        },
        {
          "category": "Cat 35 — Prepared & Packaged Meals",
          "subcat": "bone-broth",
          "analyte": "tHg",
          "from_ppb": "control ('no terrestrial-meat regulator' — FALSE)",
          "to_ppb": "50",
          "jurisdiction": "HK/CN",
          "instrument": "[GATED — HK/China allowlist decision] HK Cap 132V meat-of-animal tHg 0.05 = GB 2762-2022 meats 0.05 mg/kg; consistent with the cell's own Pb/Cd muscle-meat read-across."
        },
        {
          "category": "Cat 29 — Edible Fungi",
          "subcat": "wild-mushrooms",
          "analyte": "Cd",
          "from_ppb": "500",
          "to_ppb": "50",
          "jurisdiction": "MERCOSUR/PY",
          "instrument": "[GATED — reverses ratified carve-out OI-20260813] GMC 12/11 'except-genera' Cd 0.05 mg/kg (primary-verified FAO arg115006). EU/CH set the wild-specific 500 BECAUSE wild fungi hyperaccumulate Cd; binding 50 fails nearly all wild boletus/porcini. Karen-level policy call. 10x."
        },
        {
          "category": "Cat 29 — Edible Fungi",
          "subcat": "wild-mushrooms",
          "analyte": "Pb",
          "from_ppb": "800",
          "to_ppb": "100",
          "jurisdiction": "MERCOSUR/PY",
          "instrument": "[GATED — carve-out OI-20260813] GMC 12/11 'except-genera' Pb 0.10 mg/kg (FAO-verified; IL 300/VN 300 also stricter than 800). 8x."
        },
        {
          "category": "Cat 29 — Edible Fungi",
          "subcat": "wild-mushrooms",
          "analyte": "tAs",
          "from_ppb": "1000",
          "to_ppb": "100",
          "jurisdiction": "MERCOSUR/PY",
          "instrument": "[GATED — carve-out OI-20260813] GMC 12/11 'except-genera' total-As 0.10 mg/kg (FAO-verified; species=total-As matches, not iAs). Single loosest cell in Cat 29. 10x."
        }
      ],
      "coverage_gaps": [
        "SYSTEMIC (root cause across 7 categories, highest-leverage register fix): China GB 2762-2022 (in force) + GB 2762-2025 (eff. 2026-09-02) general-food matrix rows — cereals, fresh vegetables, meat, fish, beans/legumes, nuts/seeds, condiments, salt — are ENTIRELY ABSENT from data/evidence/regulatory_limits.csv (only infant/dairy/toy/pet-feed/cosmetic CN rows exist). GB 2762 is the most comprehensive sovereign contaminant standard; its absence is named as the coverage-gap root cause in Cat 3, 17, 27, 28, 32, 34, and 35. Ingest + recompile.",
        "Cat 1: mandatory tAs total absent on ALL 12 baby-food subcats (iAs cannot satisfy tAs — fill with IN FSSAI 50); no explicit Cr-VI species determination cell; 7 seafood JSONs are misfiled Cat-6 content sitting in cat1-compiled/ (relocate to Cat-6); soy formula-powder Cd mis-binds IL general powder 10 instead of the soy-specific 20 (EU/GSO/IL-14_3).",
        "Cat 3: total Cr folded into a single Cr-VI not_material cell whose text falsely denies any grain total-Cr ML (GB 2762-2022 Table 7 + HK Cap 132V item 7 both set 1000); Al cells mis-provenanced (GB 2760 additive-residue cap presented as a contaminant ML) and several carry RETIRED occurrence/precautionary bases.",
        "Cat 6: total Cr (all 7 subcats; HK fish 1000 / IN all-fishery 12000 in-register), seaweed Ni (EU 2024/1987 30000/wakame 40000 in-register), Al (all 7), and Cr-VI (all 7) are omitted from the panel — 4 mandatory panel analytes missing per subcat.",
        "Cat 9: no standalone total-Cr total on any of the 8 subcats (folded into the Cr-VI cell); the mandatory Big-8 total is silently absent, with in-register toy-migration (60000) and SML (10 ND) values unbound.",
        "Cat 12: uncompiled on origin/main (no config, no cells) — all 8 mandatory totals + iAs/Cr-VI/MeHg uncovered; register holds only 2 GB 14930.1 tAs rows; the Pb summed-index and detergent Cd/Ni/Cr occurrence pathways have no cell.",
        "Cat 15: every device-family cell has an EMPTY jurisdictions_checked roster (undocumented negative claim); EU 2018/1513 textile regime (period-underwear/pads, prolonged skin contact) was never screened.",
        "Cat 17: total-Cr control cells on plant/meat subcats are fillable from in-register HK Cap 132V (1000/500 — pooling defect, no ingest); no explicit fish MeHg determination (Method v2.0 conditional species); milk-replacer canned-form Sn split missing.",
        "Cat 24: condensed/evaporated Sn absent though canned=true (EU 200 mg/kg applies); goat/sheep/camel/cheese iAs held as control though IL milk iAs 10 / dairy-products iAs 100 rows apply.",
        "Cat 25: NY OCM, Michigan CRA, and Health Canada cannabis regimes not loaded — Ni (MI/NY inhaled), speciated iAs (MI), and non-inhaled total-Cr (MI 2000) cells are consequently uncovered.",
        "Cat 27: STALE COMPILE — Cat-27 cells compiled 48 min before the HK Cap 132V Cr rows were ingested, so the Cr cells never saw an in-register government value; GB 2762 legume rows also absent.",
        "Cat 28: GB 2762 nut Pb (0.2 mg/kg) and Brazil IN 160/2022 tree-nut tAs (0.80) are absent from the register, so min-selection never saw the stricter sovereigns (root cause of loose Pb across all 6 subcats).",
        "Cat 30: no fat-spreads/margarine, butter/dairy-fat, or animal/hydrogenated-fat subcategories exist despite stricter in-register culinary-fat MLs (fat-spreads Pb 40; VN dairy-fat Pb 20; hydrogenated-fat is exactly where the Ni catalyst pathway is real).",
        "Cat 32: compile-cat32 selects register rows by literal scope-word regex, making credible GENERAL catch-alls (UY RBN 'liquid/solid foods in general'; SG 'other food not specified') structurally invisible — union catch-all scopes before taking the min; GB 2762 condiment rows also absent.",
        "Cat 35: component read-across omits fruiting-veg (EU Pb 50/Cd 20), dairy (EU Pb 20), cephalopods (EU iAs 50), and every terrestrial mercury ML (CN/HK veg 10, meat 50) while the total-Cr cell falsely asserts 'no credible regulator'."
      ],
      "not_material_actions": [
        "Cat 1 (CORRECT — reclassify): Cr not_material→gov read-across on grain (HK cereals 1000), veg-puree (HK vegetables 500), and mixed-meal (component) cells; keep the Cr-VI reflex speciation as an ADDITIONAL control. Net effect tightens (a real ceiling replaces 'none').",
        "Cat 3 (CORRECT — reclassify): total-Cr 'no ML anywhere' is FALSE → gov 1000 (GB 2762 Table 7 / HK item 7) and rewrite the control text; rice-beverage Pb not_material→gov 300 (CN general-beverage, narrowed to Pb only — Cd/tAs/Ni no-ML claims HOLD). Keep Cr-VI/Sn/MeHg/non-rice-iAs not-material.",
        "Cat 12 (when compiled — do NOT classify as not-material): Cd, Ni and total-Cr are occurrence-proven for the routed subcats (iwegbue2019 measured Cd/Ni/Cr; tjandraatmadja2010 measured Cr 64% detection) — set control or disclosed read-across, never not-material; total-Cr additionally forces a Cr-VI reflex. Sb is real but out-of-panel.",
        "Cat 17 (CORRECT — reclassify): Cr control→read-across HK 1000/500 (pooling defect, NO ingest needed); add an explicit fish MeHg applicability determination (Method v2.0 conditional-species rule — the single most litigable cell); split milk-replacer Sn (canned→infant-formula ~50 mg/kg tier, not general canned 200).",
        "Cat 24 (CORRECT — reclassify): the iAs 'dairy regs set tAs not iAs' rationale is FALSE (IL milk iAs 10-12 / dairy-products iAs 100-120; HK distinct iAs species) → read-across; condensed/evaporated Sn control→200000 (canned). Keep MeHg + Cr-VI + non-canned Sn controls (verified sound).",
        "Cat 25 (CORRECT — reclassify): Ni control→gov for inhaled forms (Michigan flower 1000/concentrate 500 — MI is stricter than NY 5000; keep control for edibles/tinctures/topicals); iAs 'without speciation' rationale FALSE (MI speciates); replace the Cr 1.1M oral/topical cells with Michigan 'Other Products' total-Cr 2000 (route-clean, 550x more protective). Keep Sn/Al/MeHg/Cr-VI not-material.",
        "Cat 27 (CORRECT — rewrite basis + flip sibling): Cr-VI not-material is TRUE for the species but its regulatory_basis is FALSE (HK/GB set TOTAL-Cr on legumes) — rewrite the basis and set the sibling total-Cr cell to gov 1000. Keep Sn (canned-only), MeHg (fish/seafood-only), Al (GB 2762 eliminated Al as contaminant).",
        "Cat 29 (CORRECT — reclassify for consistency): cultivated MeHg not_material→control (fungi bioconcentrate substrate Hg; matches the wild cell, removes a plaintiff-exploitable asymmetry; behaviourally identical). Keep Sn/Cr-VI/total-Cr/Ni/Al controls.",
        "Cat 30 (CORRECT — rewrite rationale, keep classification): Al AND Cr rationales carry a FALSE narrow enumeration ('only Al ML is AU-NZ formula 500'; 'only food Cr MLs are dairy') — drop the false universal claims but keep not-material for oils (no edible-oil Al/Cr uptake). Harden the fish-oil scope_exclude with krill/algal/cod-liver synonyms.",
        "Cat 31 (CORRECT — reclassify one): molasses total-Cr not_material→control (documented Cr concentrate ~0.27 mg/kg; matches the cell's own Ni control). Keep honey Ni/Sn/MeHg not-material (nectar sugar, no concentration pathway). Al reclassification REJECTED (Al is not a sugar-crop accumulator).",
        "Cat 32 (CORRECT — reclassify): total-Cr 'only dairy MLs' is FALSE in all 5 subcats → control with HK read-across available (tomato←veg 500, fish-sauce←fish 1000, soy-sauce←pulses 1000); soy-sauce Cr→control (match sibling vinegar); mustard-mayo MeHg FALSE for anchovy dressings (Caesar) → reflex trigger; fish-sauce Cr→control/read-across.",
        "Cat 33 (CORRECT — reclassify one): confectionery-candy Cd not_material→scoped control — the cell's own scope_note scopes in chili/tamarind sweets (soil-uptake plant tissue; Capsicum is a peer-reviewed Cd accumulator), so the 'no cadmium source' rationale is false; narrow not-material to plain sugar/gelatin/pectin + add a chili/spice/tamarind reflex screen. Chocolate-Al and gummies-Ni reclassifications REJECTED.",
        "Cat 34 (CORRECT — reclassify): bouillon-seasoning-blends iAs AND hot-chili-sauces iAs not_material→gov 100 (GB 2762 复合调味料 无机砷 0.1). Harmonize the Al/Sn control-vs-not-material presentation across the 4 subcats. Keep salt Cr-VI/MeHg/Al not-material (verified against primary PRC text).",
        "Cat 35 (CORRECT — rewrite substantiation): total-Cr AND bone-broth tHg 'no credible regulator sets an ML' substantiations are demonstrably FALSE (HK Cap 132V + GB 2762 set them) → read-across or control-with-companion-ML. Keep Cr-VI/MeHg/bone-broth iAs/tAs/Ni/Al not-material — but correct their bounding tHg from the 500 seafood ceiling to the terrestrial ~10/~50 first.",
        "TRUE-BUT-LIMIT-ANYWAY (Karen's 'or limited anyway' preference): Cat 17 Al→optional surveillance action value (plant-heavy pet food); Cat 29 Ni→optional read-across EU fruiting-veg 400 for defensibility; Cat 16 total-Cr/Cr-VI/MeHg controls are functionally STRICTER than any available read-across (measure-every-lot + zero-tolerance Cr-VI + tHg=4 bound) — keep as controls; Cat 26 all-control-by-design is stronger than the (looser) ICH Q3D concentration read-across — keep.",
        "AFFIRMED SOUND — challenges FAILED, no change (do not touch): Cat 6 Sn + both MeHg; Cat 9 diaper-tHg + pacifier-iAs/MeHg; Cat 15 MeHg + cosmetic-Al + Sn (marcelis2024 measured Sn only in device forms); Cat 16 all 3 controls (register cross-check: 0 infant/supplement total-Cr/Cr-VI/MeHg MLs); Cat 26 all 5 MeHg (all 27 register MeHg rows are fish/marine); Cat 28 all 6 (iAs/MeHg/Cr-VI/Sn/Al/total-Cr)."
      ],
      "ppb_pushbacks": [
        "Cat 26 (STRUCTURAL — ppb fits NO cell in the category): all 50 control cells are dose-based µg/DAY PDE (ICH Q3D / USP<232>), not µg/kg content; Al parenteral = 25 µg/L finished solution (21 CFR 201.323), Al oral = JECFA/EFSA TWI mg/kg-bw/week. Forcing a ppb mass basis here would require the firewalled occurrence-percentile term. Keep value:null + implied-daily-intake basis.",
        "Cat 9 (STRUCTURAL — ppb doesn't fit several cells): diaper Ni = 0.5 µg/cm²/week RELEASE (EN 1811/REACH 27), never normalize to ppb; food-contact SML values (Pb 10/Cd 2/tAs 10/tHg 10) = µg/kg FOOD SIMULANT (EU 10/2011); toy-migration values = µg/kg scraped TOY MATERIAL (EN 71-3); REACH entry-72 diaper values = extractable-after-EN-16711-extraction µg/kg material. Label each basis distinctly; never read as product-content ppb.",
        "Cat 15: the proposed EU 2018/1513 entry-72 textile anchors (1000 ppb) are EXTRACTABLE-after-extraction content (≤ total content) — disclose as a distinct textile basis, do NOT adopt as a total-content anchor on the device cells (that conflation is why all 5 tighten candidates were rejected); cosmetic Ni release-rate (0.5 µg/cm²/week) correctly not forced into ppb.",
        "Cat 6: seaweed cells are DRY-WEIGHT (as_sold dried) while all 6 animal-seafood subcats are as-consumed WET — ppb is fine but label µg/kg dry weight and never numerically compare against wet-weight fish ppb (the France Cd 500/tHg 100 tightenings are themselves mg/kg DM, so basis-consistent); canned Sn is a tinplate-migration ceiling, not matrix accumulation.",
        "Cat 16: the four liquid/RTE infant-formula anchors (Cd 5, iAs 10, tHg 4, Ni 100) read onto as_sold SOLID supplements without a reconstitution adjustment — this is a conservative ~6-8x OVER-strictness (a reconstituted liquid is more dilute), so it is not a wet/dry defect; disclose it as intentional over-strictness so a plaintiff cannot frame it as an accidental wet/dry mix.",
        "Cat 3: Al cells are basis-wrong — GB 2760-2024's 100/200 mg/kg is a permitted-additive residue cap (governed by ADI), NOT a contaminant ML; reclassify to additive-use/not-material with reflex control, never a contaminant 'government limit' cell. Rice-beverage cells are as_consumed liquid (µg/kg ≈ µg/L) — state wet-weight/as-consumed explicitly so they are not compared against as_sold dry-grain rice (150 milled).",
        "Cat 27/30/32: total-Cr and all other cells are correctly mass-basis µg/kg — but when correcting a total-Cr cell to gov, use the as-sold mass value ONLY (China/HK Beans/Pulses/Veg 1000/500); do NOT read across the register's drinking-water Cr (25 µg/L) or food-contact migration Cr (ND µg/kg simulant), which are different bases.",
        "Cat 25: the Step-0-locked vape-hardware row is correctly NOT in ppb — its governing quantity is metal RELEASE into inhaled aerosol (µg/puff or µg/day emission); keep it reserved pending Karen's inhalable-hardware decision. Inhalation ICH Q3D/USP<232> PDEs (Ni 6/As 2/Cd 3 µg/day) are dose-based and cannot become a ppb product limit without a consumption model.",
        "Cat 12 (when compiled): GB 14930.1-2022 Pb 30/100 mg/kg is a SUMMED sulfide-precipitable heavy-metals-as-Pb index measured colorimetrically, NOT a per-analyte Pb ML — tag it a summed-index cell, never a 'Pb' cell (a plaintiff's expert would note our 'Pb 100 ppm' is actually China's aggregate-metals index). The tAs rows ARE valid mass-basis ppb but food-cleaning-scoped (Class A/B) — disclose read-across when applied to the ~17 non-food-contact cleaner subcats."
      ],
      "below_95_confidence": [
        "Cat 12 — Household Cleaning (0.05): the whole standard is uncompiled on origin/main (no config, no cells; only 2 GB 14930.1 tAs rows in the register). Needs: build/compile the category, ingest the GB 14930.1 Pb summed-index row, set Cd/Ni/total-Cr as controls (occurrence-proven, not not-material), and resolve the food-contact Class A vs B scope. This is a build-from-scratch item, not a tightening pass.",
        "Cat 32 — Condiments (0.20): a large share of Cd/tAs/Pb cells are demonstrably loose. Needs: fix the compiler scope-word regex to union credible general 'all foods/liquid foods/other food' catch-alls (UY RBN, SG); apply the 8 confirmed UY/CN tightenings; ingest GB 2762 condiment rows; reclassify total-Cr not_material→control on all 5 subcats.",
        "Cat 35 — Prepared Meals (0.25): anchor mechanics are sound but multiple stricter sovereign limits are missed. Needs: adopt the 6 in-allowlist EU tightenings (Pb/iAs/Cd) NOW; DECIDE the HK/China credible-regulator allowlist to unlock tHg 500→10 & total-Cr; fix the strictest-applicable-component inversion; ingest GB 2762 general-food rows.",
        "Cat 3 — Grains (0.30): two structural findings confirmed wrong across the whole category. Needs: apply tHg 30→20 (11 subcats) + establish total-Cr 1000 (11 subcats); fix the Al additive-vs-contaminant mis-provenance and retire the occurrence/precautionary Al cells; reclassify rice-beverage Pb→gov 300. Re-check GB 2762-2025 grain rows at the 2026-09-02 changeover.",
        "Cat 28 — Nuts/Seeds (0.30): current Pb (all 6) and tree-nut tAs (4) are materially looser than the strictest sovereign. Needs: ingest GB 2762 nut Pb (0.2) + Brazil IN 160 tree-nut tAs (0.80) into the register, then recompile to land Pb 1000→200 and tAs 1000→800.",
        "Cat 34 — Herbs/Spices/Salt (0.30): current cells are not global-strictest. Needs: ingest GB 2762-2022/2025 salt/spice/condiment rows and recompile to apply Pb 2000→1000 (bouillon/chili/salt) and establish bouillon/chili iAs 100.",
        "Cat 17 — Pet Foods (0.35): ~10 material cells demonstrably loose (all conservative-direction misses). Needs: pool the in-register HK Cap 132V rows that were never selected (tHg, milk-replacer Cd/iAs/Pb, fish Cr, plant/meat Cr control→1000) and add the explicit fish MeHg determination — mostly a pooling/recompile fix, minimal ingest.",
        "Cat 24 — Dairy (0.35): ~12 verified cells loose by up to 20x. Needs: apply the milk/yogurt/cream/condensed tightenings (pool the IL 'Milk'-specific + VN + EU canned rows instead of the lax IL general-dairy read-across and single-member VN pools); fix 2 register transcription errors (IL milk iAs = 12 not 10; IL dairy Pb = 200 not 20); reclassify the iAs 'no separate limit' rationale.",
        "Cat 29 — Fungi (0.40): the wild row is primary-source-proven not to reflect the strictest applicable sovereign, but the fix is gated. Needs: a KAREN RULING on whether MERCOSUR 50/100/100 overrides the ratified hyperaccumulation carve-out OI-20260813 (recommend the carve-out stands); scope-split cultivated (4-genera vs other farmed); ingest GB 2762 fungi rows; reclassify cultivated MeHg→control.",
        "Cat 1 — Infant Foods (0.45): the standard omits the mandatory tAs total everywhere, mislabels Cr not_material on ~10 cells where a real HK read-across exists, and mis-binds soy Cd. Needs: establish tAs=50 across all 12 subcats; reclassify Cr→HK read-across (grain 1000/veg 500); relocate the 7 misfiled seafood JSONs to Cat-6; fix the soy formula-powder Cd binding (10→20).",
        "Cat 6 — Seafood (0.50): animal-seafood cells are clean but seaweed is not global-strictest and 4 panel analytes are missing. Needs: apply seaweed Cd 2000→500 & tHg 2500→100 (France CSHPF); fill total-Cr (HK 1000/IN 12000), seaweed Ni (EU 30000), Al, and Cr-VI determinations on every subcat.",
        "Cat 25 — Cannabis (0.50): compiled limits miss real stricter sovereigns because NY/MI/Canada are not loaded. Needs: load NY OCM + Michigan CRA + Health Canada cannabis rows and recompile; apply tinctures tHg 400→100 & concentrates iAs→200; reclassify Ni control→MI gov (inhaled) and Cr 1.1M→MI 2000 (oral/topical).",
        "Cat 27 — Legumes (0.50): two confirmed Cr control→1000 misses plus a Cd 40→10 miss, largely from a stale compile. Needs: recompile origin/main (HK Cr rows were ingested 48 min after the compile); remove the config Cr control_only flag; apply legumes/soy Cr→1000 and legumes Cd→10; ingest GB 2762 legume rows.",
        "Cat 9 — Contact Products (0.82): the audit's central doubt was refuted (0/7 tightenings survived — the EN 71-3 Category-III bindings are correct), so numeric cells are sound. Needs: add a standalone total-Cr total to all 8 subcats (the mandatory total is folded into Cr-VI); add a DBT/DOT organotin reflex screen to the silicone portion of feeding-accessories; disclose the migration/SML/extraction bases so they aren't read as product-content ppb.",
        "Cat 15 — Feminine Care (0.85): all numeric cells and classifications survived adversarial challenge (0/5 tightenings, Sn reclassification refuted). Needs only documentation hygiene: populate the empty device jurisdictions_checked rosters, and adjudicate + DISCLOSE the EU 2018/1513 entry-72 textile regime as a distinct extractable basis (do NOT adopt it as a total-content anchor).",
        "Cat 31 — Sweeteners (0.87): flagship honey-Pb binding is triple-sovereign-verified and no tightening exists. Needs: reclassify molasses total-Cr not_material→control; complete the honey-Pb per_country tie roster (HK/Codex/EU all tie IL 100, no value change); resolve the unreadable image-only Brazil IN 160 sugar-Cd table (small chance of a sub-150 MERCOSUR-member value).",
        "Cat 26 — Peptides/SARMs (0.90): the all-control regulatory-vacuum design withstands challenge (0 tightenings, 5/5 MeHg controls confirmed) and is essentially at target. Residual is only theoretical — an obscure national pharmacopoeia MeHg control, which would be dose-based and would not disturb the design. Keep; document the µg/day dose basis.",
        "Cat 30 — Culinary Oils (0.90): the two compiled oil subcats reflect global-strictest with high confidence (0 tightenings). Needs: two rationale rewrites (Al and Cr false 'only-formula'/'only-dairy' enumerations) and creation of the fat-spreads/butter/animal-fat/hydrogenated subcategories where stricter in-register numbers already exist (Pb 40/20).",
        "Cat 33 — Chocolate/Confectionery (0.90): 0 tightenings, binds verified. Needs: reclassify confectionery-candy Cd not_material→scoped control (chili/tamarind soil-uptake) to make the published rationale TRUE; optionally verify the obscure Korea/Taiwan/Japan/India numeric chocolate values (all evidence places them above our binds).",
        "Cat 16 — Supplements (0.93 — closest to the bar): all 8 anchors verified as the strictest infant/child-food register minimum, and all 3 controls confirmed by two independent methods. The only thing keeping it under 95% is an obscure post-2025 sovereign infant-food sub-floor a bounded, US-only web pass cannot fully exclude. Optional: a broader worldwide web sweep to close the last ~2%."
      ],
      "highest_leverage": "\"Ingest the China GB 2762-2022 (in force) + GB 2762-2025 (eff. 2026-09-02) GENERAL-FOOD matrix rows — Pb/Cd/tAs/iAs/tHg/total-Cr for cereals, fresh vegetables, meat, fish, beans/legumes, nuts/seeds, condiments, and salt — into data/evidence/regulatory_limits.csv, confirm the already-in-register Hong Kong Cap 132V rows are being POOLED (they are present but were never selected in several categories), then RECOMPILE every food category. This single register+recompile pipeline is named as the root-cause coverage gap in SEVEN separate category findings and lands the majority of confirmed tightenings and the biggest coverage gaps at once: Cat 3 total-Cr (11 cells) + tHg (11 cells), Cat 17 Cr (plant/meat/fish) + HK tHg pooling, Cat 27 legumes/soy Cr (also fixes the stale compile), Cat 28 Pb (6 subcats), Cat 32 Pb + total-Cr, Cat 34 Pb + iAs, Cat 35 tHg/Cr (pending the allowlist call), and Cat 1 Cr reclassifications. Every one of these edits moves the cell TOWARD the stricter government limit, so the entire set is Part-2-clean (toward strictest-government, never softening a gap) and needs no firewall escalation. Sequence it AFTER the current fleet of sessions drains to avoid index-lock churn, and remember standards go live only via the separate render-into-cert step (build-category-standard-pages.mjs), not the staff-JSON compile. TWO items sit OUTSIDE this pipeline and must NOT be auto-applied — they are genuinely Karen's: (1) Cat 29 wild-mushroom MERCOSUR tightenings (Cd 500→50, Pb 800→100, tAs 1000→100) would REVERSE the ratified accumulation-biology carve-out OI-20260813 — leave the carve-out standing unless Karen overrides, because binding 50/100 fails nearly all wild boletus/porcini; (2) Cat 35's HK/China credible-regulator allowlist-widening — recommend admitting them (every other food category already treats HK Cap 132V and GB 2762 as credible sovereigns, so the exclusion is an inconsistency, not a considered policy), but flag it as a methodology ratification rather than deciding it silently. Separately, Cat 12 must be BUILT from scratch (uncompiled) and Cat 9/26 are the two categories where ppb structurally does not fit (migration/dose bases) — none of these three are part of the GB 2762 pipeline.\"",
      "overall": "\"Adversarial synthesis across 20 HMTc categories (~1,506 cells audited). Verified result: ~80 confirmed tightening cell-findings (≈53 consolidated rows after bundling identical multi-subcat values), plus ~15 coverage-gap clusters, ~14 not-material corrections, and a set of basis (ppb) pushbacks. The single most important finding against Karen's >95%-per-cell bar: ZERO of 20 categories currently clears it — the fleet-high is Cat 16 at 0.93, followed by Cat 26/30/33 at 0.90, Cat 31 at 0.87, Cat 15 at 0.85, Cat 9 at 0.82, and everything else at 0.50 or below (Cat 12 at 0.05, uncompiled). Every category is therefore NEEDS-WORK today. The reassuring structural pattern: the standard is systematically over-LOOSE in specific cells, but the misses are consistently in the RECOVERABLE, protective direction — the compilers' min-selection logic is trustworthy; they simply cannot select sovereign rows that were never ingested (China GB 2762 general-food matrix), were ingested after the compile ran (Cat 27), or were present but not pooled (HK Cap 132V in Cat 1/6/17). So the binding constraint is register data quality and recompile hygiene, not methodology. Applying the confirmed tightenings makes cells stricter (toward the strictest government limit), which is Part-2-clean in every case — no firewall escalation is needed to APPLY tightenings. The genuinely-Karen decisions are narrow and must not be auto-enacted: (1) the Cat 29 wild-mushroom carve-out OI-20260813 (whether MERCOSUR strictest-anywhere overrides a ratified hyperaccumulation exception — recommend the carve-out stands); (2) the Cat 35 HK/China allowlist-widening (recommend admitting them for consistency with every other food category); and (3) two counsel-frozen entity items (Cyprus/EU database-rights, 'non-profit') that are unrelated here. Highest-leverage action by a wide margin: ingest GB 2762-2022/2025 + confirm HK Cap 132V pooling, then recompile the food categories — it discharges the bulk of Cat 3/17/27/28/32/34/35 in one pipeline. Two categories need special handling outside that pipeline: Cat 12 must be built from scratch (uncompiled), and Cat 9 + Cat 26 are where ppb structurally fails (migration-into-simulant, extractable-after-extraction, and dose-based µg/day PDE bases) — those cells need basis labels, not ppb normalization. This report is the driver for the per-category tightening application; each confirmed_tightenings row carries the from→to value, jurisdiction, and instrument needed to execute.\""
    }
  },
  "workflowProgress": [
    {
      "type": "workflow_phase",
      "index": 1,
      "title": "Audit"
    },
    {
      "type": "workflow_phase",
      "index": 2,
      "title": "Verify"
    },
    {
      "type": "workflow_phase",
      "index": 3,
      "title": "Synthesize"
    },
    {
      "type": "workflow_agent",
      "index": 1,
      "label": "audit:cat1",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a2dec8c7ad352d0c6",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720938542,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 1 — Infant & Child Foods",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 1 (Infant & Child Foods). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPUTS: the …",
      "lastProgressAt": 1786721381507,
      "tokens": 129950,
      "toolCalls": 18,
      "durationMs": 440977,
      "resultPreview": "{\"category\":\"Category 1 — Infant & Child Foods\",\"category_confidence\":0.5,\"cells_audited\":161,\"summary\":\"Audited origin/main cat1-compiled: 12 genuine Cat-1 baby-food subcategories (infant-formula-powder/rtf each split cow+soy) plus 7 seafood subcategories that are actually Cat-6 content misfiled into the cat1-compiled directory (they are NOT in tools/standards/cat1-config.json, which lists only t…"
    },
    {
      "type": "workflow_agent",
      "index": 2,
      "label": "audit:cat3",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a68b6d6e04a5dbb37",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720938397,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 3 — Grains, Cereals, and Rice Products",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 3 (Grains/Cereals/Rice). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPUTS: the c…",
      "lastProgressAt": 1786721468858,
      "tokens": 145429,
      "toolCalls": 21,
      "durationMs": 530460,
      "resultPreview": "{\"category\":\"Cat 3 — Grains, Cereals, and Rice Products\",\"cells_audited\":132,\"category_confidence\":0.35,\"coverage_gaps\":[{\"subcat\":\"ALL 12 subcats (rice-bulk-grain, breakfast-cereal-rice-based, pasta-rice-based, rice-noodles, rice-snacks-crackers, flour-non-rice, breakfast-cereal-non-rice, pasta-wheat-based, bread-and-baked-goods, grain-based-snacks, other-grain-products, rice-beverages)\",\"analyte…"
    },
    {
      "type": "workflow_agent",
      "index": 3,
      "label": "audit:cat6",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a9b75a2c845e63dfd",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720939011,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 6 — Seafood (config-based: tools/standards/seafood…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 6 (Seafood (config-based; find seafood-config.json / cert pages if no -compiled dir)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes cove…",
      "lastProgressAt": 1786721427812,
      "tokens": 162743,
      "toolCalls": 25,
      "durationMs": 487281,
      "resultPreview": "{\"category\":\"Category 6 — Seafood (config-based: tools/standards/seafood-config.json; compiled cells in data/workbench/standards/cat1-compiled/{fish-freshwater,fish-marine-non-predatory,fish-marine-predatory,shellfish,cephalopods,canned-seafood,seaweed-kelp-foods}.json on origin/main)\",\"cells_audited\":77,\"coverage_gaps\":[{\"subcat\":\"all-7-subcats\",\"analyte\":\"total Cr\",\"issue\":\"total Cr (a mandatory…"
    },
    {
      "type": "workflow_agent",
      "index": 4,
      "label": "audit:cat9",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a69dcfb83f28a0e6a",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720939920,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 9 — Infant and Child Contact Products (non-food; m…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 9 (Contact Products (non-food; migration/content basis)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE,…",
      "lastProgressAt": 1786721353921,
      "tokens": 119903,
      "toolCalls": 15,
      "durationMs": 413390,
      "resultPreview": "{\"category\":\"Category 9 — Infant and Child Contact Products (non-food; migration/content basis)\",\"cells_audited\":80,\"coverage_gaps\":[{\"subcat\":\"teething-toys-teethers\",\"analyte\":\"total Cr\",\"issue\":\"Panel carries Cr-VI (EU Cat III 53 ppb) but NO standalone total-Cr total. total Cr is one of the 8 mandatory HMTc totals. Register HAS applicable toy-migration total-Cr values (astm_f963_crtotal_soluble…"
    },
    {
      "type": "workflow_agent",
      "index": 5,
      "label": "audit:cat12",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a38c6545b4f569da3",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720938469,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Household Cleaning (Cat 12) — config-based, NOT compiled on…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 12 (Household Cleaning (config-based)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.…",
      "lastProgressAt": 1786721183962,
      "tokens": 106009,
      "toolCalls": 13,
      "durationMs": 243433,
      "resultPreview": "{\"category\":\"Household Cleaning (Cat 12) — config-based, NOT compiled on origin/main\",\"cells_audited\":0,\"category_confidence\":0.05,\"coverage_gaps\":[{\"subcat\":\"ALL 21 subcats (all-purpose, kitchen/countertop, bathroom/tub/tile, toilet-bowl, window/glass, floor-cleaners, floor-finishes/strippers, carpet-cleaners, carpet-spot-removers, degreasers, oven/grill/BBQ, appliance-cleaners, descalers, dish-s…"
    },
    {
      "type": "workflow_agent",
      "index": 6,
      "label": "audit:cat15",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a1dc0cd9a148b9ed2",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720938523,
      "queuedAt": 1786720935083,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 15 — Feminine Care (mucosal)",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 15 (Feminine Care (mucosal; branch)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/claude/stoic-bhaskara-c858d3 (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material T…",
      "lastProgressAt": 1786721327637,
      "tokens": 129312,
      "toolCalls": 17,
      "durationMs": 387107,
      "resultPreview": "{\"category\":\"HMTc Category 15 — Feminine Care (mucosal)\",\"cells_audited\":110,\"coverage_gaps\":[{\"subcat\":\"period-underwear-reusable-garments\",\"analyte\":\"Pb/Cd/tAs/Cr-VI\",\"issue\":\"The device-family cells declare 'no jurisdiction sets a heavy-metal content limit for this device form' and hold every metal as bare control, but period underwear IS consumer clothing/textile with prolonged skin contact. T…"
    },
    {
      "type": "workflow_agent",
      "index": 7,
      "label": "audit:cat16",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a6e822f18d7119721",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720941457,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 16 — Dietary Supplements (child-protective)",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 16 (Dietary Supplements (child-protective)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in…",
      "lastProgressAt": 1786721180893,
      "tokens": 110044,
      "toolCalls": 11,
      "durationMs": 239435,
      "resultPreview": "{\"category\":\"Category 16 — Dietary Supplements (child-protective)\",\"cells_audited\":264,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"ALL 24 subcats (uniform)\",\"analyte\":\"Cr (total)\",\"verdict\":\"TRUE — register has 0 infant/child-food total-Cr MLs and 0 supplement total-Cr MLs in any jurisdiction; Cr(III) is nutritionally essential, so no defensible numeric anchor exists…"
    },
    {
      "type": "workflow_agent",
      "index": 8,
      "label": "audit:cat17",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "ab227b15a5d70a0bf",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786720942785,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 17 — Pet Foods (human-grade over-compliance)",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 17 (Pet Foods (human-grade; branch)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/claude/exciting-hamilton-33cfe4 (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-materia…",
      "lastProgressAt": 1786721354141,
      "tokens": 123402,
      "toolCalls": 18,
      "durationMs": 411355,
      "resultPreview": "{\"category\":\"HMTc Category 17 — Pet Foods (human-grade over-compliance)\",\"cells_audited\":110,\"category_confidence\":0.4,\"coverage_gaps\":[{\"subcat\":\"ALL plant-carb + meat subcats (kibble, freeze-dried, semi-moist, treats, chews, canned-wet, raw, toppers)\",\"analyte\":\"Cr (total)\",\"issue\":\"Cell declared type=control ('no government sets a total-chromium maximum'). FALSE: China GB 2762-2022 sets total-C…"
    },
    {
      "type": "workflow_agent",
      "index": 9,
      "label": "audit:cat24",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a2c6ec8fd5de4db3c",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721184432,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 24 — Dairy and Milk Products",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 24 (Dairy (branch)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/claude/exciting-hamilton-33cfe4 (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed…",
      "lastProgressAt": 1786721610511,
      "tokens": 128742,
      "toolCalls": 17,
      "durationMs": 426078,
      "resultPreview": "{\"category\":\"Category 24 — Dairy and Milk Products\",\"cells_audited\":88,\"category_confidence\":0.34,\"coverage_gaps\":[{\"subcat\":\"dairy-condensed-evaporated\",\"analyte\":\"Sn\",\"issue\":\"Cell is canned=true yet Sn is emitted as type:control with value:null. Canned/tinplate condensed & evaporated milk has a direct tin-migration pathway and a directly-applicable sovereign ML exists (EU 2023/915 canned foods …"
    },
    {
      "type": "workflow_agent",
      "index": 10,
      "label": "audit:cat25",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "ac21c5913bb7a6eae",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721188697,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cannabis, Hemp, and CBD Products (HMTc Category 25)",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 25 (Cannabis (branch; vape reserved)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/claude/exciting-hamilton-33cfe4 (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-materi…",
      "lastProgressAt": 1786721630196,
      "tokens": 116596,
      "toolCalls": 22,
      "durationMs": 441498,
      "resultPreview": "{\"category\":\"Cannabis, Hemp, and CBD Products (HMTc Category 25)\",\"cells_audited\":55,\"category_confidence\":0.6,\"coverage_gaps\":[{\"subcat\":\"ALL (register-level)\",\"analyte\":\"all\",\"issue\":\"regulatory_limits.csv contains cannabis rows for only US-CA, US-CO, US-MA, US-MD, US-NV and Israel. Three sovereign cannabis regimes with binding-relevant limits are entirely missing: New York OCM (8-element panel,…"
    },
    {
      "type": "workflow_agent",
      "index": 11,
      "label": "audit:cat26",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a03a1c19799414010",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721331093,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 26 — Peptides, SARMs, and Research Chemicals …",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 26 (Peptides/SARMs (all-control)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINP…",
      "lastProgressAt": 1786721551914,
      "tokens": 116556,
      "toolCalls": 11,
      "durationMs": 220820,
      "resultPreview": "{\"category\":\"HMTc Category 26 — Peptides, SARMs, and Research Chemicals (all-control regulatory-vacuum standard)\",\"cells_audited\":55,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"peptides-injectable-hormones\",\"analyte\":\"MeHg\",\"verdict\":\"TRUE. No biomethylation pathway exists in abiotic chemical synthesis/purification/reconstitution of injectable peptides; MeHg forms on…"
    },
    {
      "type": "workflow_agent",
      "index": 12,
      "label": "audit:cat27",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "ad2e5557fe59e0b4a",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721359815,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 27 — Legumes and Pulses",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 27 (Legumes & Pulses). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPUTS: the com…",
      "lastProgressAt": 1786721983881,
      "tokens": 160605,
      "toolCalls": 24,
      "durationMs": 624065,
      "resultPreview": "{\"category\":\"Cat 27 — Legumes and Pulses\",\"cells_audited\":44,\"category_confidence\":0.55,\"coverage_gaps\":[{\"subcat\":\"legumes-pulses-other / soy-products / peanuts / peanut-butter\",\"analyte\":\"Cr (total)\",\"issue\":\"STALE COMPILE. Cat 27 cells were compiled 2026-08-13 22:16 (commit 0e9e1d9); the HK Cap. 132V register rows — including hk_cap132v_crtotal_pulses_1000 (Cr-total Pulses = 1000 ug/kg) and hk_…"
    },
    {
      "type": "workflow_agent",
      "index": 13,
      "label": "audit:cat28",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a8f6ce21e13d4c47e",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721360048,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 28 — Nuts, Seeds, and Their Butters (cashews; tree-nuts…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 28 (Nuts/Seeds/Butters (+high-Ni split)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in pp…",
      "lastProgressAt": 1786721816647,
      "tokens": 129120,
      "toolCalls": 23,
      "durationMs": 456598,
      "resultPreview": "{\"category\":\"Cat 28 — Nuts, Seeds, and Their Butters (cashews; tree-nuts-high-nickel; nuts-seeds-other; sunflower-seeds; sunflower-seed-butter; nut-seed-butters-other)\",\"cells_audited\":66,\"category_confidence\":0.35,\"coverage_gaps\":[{\"subcat\":\"ALL 6 subcats\",\"analyte\":\"Pb\",\"issue\":\"Register (regulatory_limits.csv, origin/main) contains ZERO China GB 2762 nut/seed rows and ZERO Brazil IN 160/2022 nu…"
    },
    {
      "type": "workflow_agent",
      "index": 14,
      "label": "audit:cat29",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "ad5ea80c3fa698a98",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721385361,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Edible Fungi (HMTc Category 29) — 3 subcategories: cultivat…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 29 (Edible Fungi (+oyster/shiitake split)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in …",
      "lastProgressAt": 1786721790487,
      "tokens": 126885,
      "toolCalls": 18,
      "durationMs": 405125,
      "resultPreview": "{\"category\":\"Edible Fungi (HMTc Category 29) — 3 subcategories: cultivated-mushrooms (common/button), wild-mushrooms, cultivated-mushrooms-oyster-shiitake\",\"cells_audited\":33,\"category_confidence\":0.45,\"coverage_gaps\":[{\"subcat\":\"all-three\",\"analyte\":\"Pb/Cd/tAs/tHg\",\"issue\":\"jurisdictions_checked strings claim 'China GB 2762' was checked, but regulatory_limits.csv contains ZERO China (CN) fungi ro…"
    },
    {
      "type": "workflow_agent",
      "index": 15,
      "label": "audit:cat30",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a45a31899e9bd2bfd",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721431251,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 30 — Culinary Oils and Fats",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 30 (Culinary Oils/Fats). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPUTS: the c…",
      "lastProgressAt": 1786721717950,
      "tokens": 122709,
      "toolCalls": 14,
      "durationMs": 286698,
      "resultPreview": "{\"category\":\"Cat 30 — Culinary Oils and Fats\",\"cells_audited\":22,\"coverage_gaps\":[{\"subcat\":\"fat-spreads / margarine (no compiled subcategory)\",\"analyte\":\"Pb\",\"issue\":\"Category 30 is 'Culinary Oils and Fats' but only olive-oil and cooking-oils-other were compiled. The register carries a distinct, STRICTER fat-spreads Pb ML (GSO 193:2021 = 40; TH MOPH 414 = 40; SG Food Regs = 40; HK = 80) plus tAs …"
    },
    {
      "type": "workflow_agent",
      "index": 16,
      "label": "audit:cat31",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a6592d0dc5733fc4c",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721472476,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 31 — Sweeteners and Syrups",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 31 (Sweeteners/Syrups). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPUTS: the co…",
      "lastProgressAt": 1786721884773,
      "tokens": 136942,
      "toolCalls": 25,
      "durationMs": 412297,
      "resultPreview": "{\"category\":\"Cat 31 — Sweeteners and Syrups\",\"cells_audited\":44,\"category_confidence\":0.82,\"tighten_candidates\":[],\"coverage_gaps\":[{\"subcat\":\"honey\",\"analyte\":\"Pb\",\"issue\":\"per_country audit map omits two sovereigns that TIE the binding: HK Cap 132V 'Sugar-based candies and honey' Pb=100 (hk_cap132v_pb_sugar-based-candies-and-honey_100, in our own register) and Codex CXS 193 honey Pb=0.1 mg/kg=10…"
    },
    {
      "type": "workflow_agent",
      "index": 17,
      "label": "audit:cat32",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a464bc5d1ebd6c813",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721555281,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "32 — Condiments, Sauces and Dressings",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 32 (Condiments/Sauces/Dressings). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINPU…",
      "lastProgressAt": 1786722126125,
      "tokens": 154709,
      "toolCalls": 21,
      "durationMs": 570843,
      "resultPreview": "{\"category\":\"32 — Condiments, Sauces and Dressings\",\"cells_audited\":55,\"category_confidence\":0.2,\"coverage_gaps\":[{\"subcat\":\"ALL (compiler)\",\"analyte\":\"Cd/tAs/Pb\",\"issue\":\"ROOT CAUSE: compile-cat32.mjs selects register rows by literal scope-word regex (scope_include: \\\\bsauces?\\\\b, vinegar, tomato, mayonnaise). Credible GENERAL catch-all national codes whose product_scope lacks those words are str…"
    },
    {
      "type": "workflow_agent",
      "index": 18,
      "label": "audit:cat33",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a6982d9ccfb4763c1",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721614128,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 33 — Chocolate, Cocoa and Confectionery",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 33 (Chocolate/Cocoa/Confectionery). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nIN…",
      "lastProgressAt": 1786721927060,
      "tokens": 123661,
      "toolCalls": 18,
      "durationMs": 312931,
      "resultPreview": "{\"category\":\"Cat 33 — Chocolate, Cocoa and Confectionery\",\"cells_audited\":33,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"confectionery-candy\",\"analyte\":\"Cd\",\"verdict\":\"NOT fully true. The rationale asserts 'no cadmium source or migration route... no soil-uptake plant tissue at the confection level.' False for the imported/ethnic sweets this subcategory explicitly sco…"
    },
    {
      "type": "workflow_agent",
      "index": 19,
      "label": "audit:cat34",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a891f0c57f1f814e5",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721634481,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "34 — Herbs, Spices, Seasonings and Salt",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 34 (Herbs/Spices/Seasonings/Salt). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/main (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-material TRUE, expressed in ppb.\n\nINP…",
      "lastProgressAt": 1786722134685,
      "tokens": 137411,
      "toolCalls": 31,
      "durationMs": 500203,
      "resultPreview": "{\"category\":\"34 — Herbs, Spices, Seasonings and Salt\",\"cells_audited\":44,\"category_confidence\":0.35,\"coverage_gaps\":[{\"subcat\":\"ALL cat34 (salt, spices, hot-chili-sauces, bouillon-seasoning-blends)\",\"analyte\":\"Pb/tAs/iAs/Cd/tHg\",\"issue\":\"SYSTEMIC: China GB 2762-2022 (the single most comprehensive sovereign contaminant standard, and its 2025 successor) is ENTIRELY ABSENT from data/evidence/regulato…"
    },
    {
      "type": "workflow_agent",
      "index": 20,
      "label": "audit:cat35",
      "phaseIndex": 1,
      "phaseTitle": "Audit",
      "agentId": "a3c25bb2bc9eea61f",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721721644,
      "queuedAt": 1786720935084,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 35 — Prepared and Packaged Meals (mixed-meals…",
      "promptPreview": "ADVERSARIAL STANDARDS AUDIT — HMTc Category 35 (Prepared Meals + Bone Broth (branch)). Repo: /Users/karenpendergrass/Desktop/heavy-metal-index. Read from git ref origin/claude/serene-meitner-009b2c (do NOT use the working tree — it is a stale dead lane). Goal: to >95% confidence, verify every cell reflects the STRICTEST government limit that exists ANYWHERE, all 8 analytes covered, every not-mater…",
      "lastProgressAt": 1786722256582,
      "tokens": 148763,
      "toolCalls": 22,
      "durationMs": 534937,
      "resultPreview": "{\"category\":\"HMTc Category 35 — Prepared and Packaged Meals (mixed-meals-prepared-foods, soups-broths-stocks, bone-broth)\",\"cells_audited\":33,\"category_confidence\":0.3,\"coverage_gaps\":[{\"subcat\":\"mixed-meals-prepared-foods / soups-broths-stocks\",\"analyte\":\"Pb\",\"issue\":\"Component read-across set OMITS two components that carry stricter in-allowlist EU MLs: fruiting vegetables (EU 2023/915 = 50 ppb;…"
    },
    {
      "type": "workflow_agent",
      "index": 21,
      "label": "verify:cat16",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a1da0aea1c4ca84c7",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721794454,
      "queuedAt": 1786721182653,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 16 — Dietary Supplements (child-protective)",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 16 (Dietary Supplements (child-protective)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regu…",
      "lastProgressAt": 1786722184115,
      "tokens": 127542,
      "toolCalls": 10,
      "durationMs": 389660,
      "resultPreview": "{\"category\":\"Category 16 — Dietary Supplements (child-protective)\",\"cells_audited\":264,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"ALL 24 subcats (uniform)\",\"analyte\":\"Cr (total)\",\"verdict\":\"CONFIRMED under independent challenge. Register cross-check (origin/main, 2993 rows) returns 0 total-Cr MLs scoped to infant/child food and 0 scoped to dietary supplements in any…"
    },
    {
      "type": "workflow_agent",
      "index": 22,
      "label": "verify:cat12",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ad141d7280f6c29c3",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721820364,
      "queuedAt": 1786721186775,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Household Cleaning (Cat 12) — config-based, NOT compiled on…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 12 (Household Cleaning (config-based)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulatio…",
      "lastProgressAt": 1786722257691,
      "tokens": 102681,
      "toolCalls": 9,
      "durationMs": 437326,
      "resultPreview": "{\"category\":\"Household Cleaning (Cat 12) — config-based, NOT compiled on origin/main (adversarially verified)\",\"cells_audited\":0,\"category_confidence\":0.05,\"coverage_gaps\":[{\"subcat\":\"ALL 21 subcats (all-purpose, kitchen/countertop, bathroom/tub/tile, toilet-bowl, window/glass, floor-cleaners, floor-finishes/strippers, carpet-cleaners, carpet-spot-removers, degreasers, oven/grill/BBQ, appliance-cl…"
    },
    {
      "type": "workflow_agent",
      "index": 23,
      "label": "verify:cat15",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "aa04517170e5cf475",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721889518,
      "queuedAt": 1786721329325,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 15 — Feminine Care (mucosal)",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 15 (Feminine Care (mucosal; branch)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.…",
      "lastProgressAt": 1786722402895,
      "tokens": 122822,
      "toolCalls": 13,
      "durationMs": 513374,
      "resultPreview": "{\"category\":\"HMTc Category 15 — Feminine Care (mucosal)\",\"cells_audited\":110,\"category_confidence\":0.85,\"coverage_gaps\":[{\"subcat\":\"period-underwear-reusable-garments\",\"analyte\":\"Pb/Cd/tAs/Cr-VI\",\"issue\":\"The device-family cells declare 'no jurisdiction sets a heavy-metal content limit for this device form' and hold every metal as bare control, but period underwear IS consumer clothing/textile wit…"
    },
    {
      "type": "workflow_agent",
      "index": 24,
      "label": "verify:cat17",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a709d8a3181c2df25",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721930674,
      "queuedAt": 1786721358144,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 17 — Pet Foods (human-grade over-compliance)",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 17 (Pet Foods (human-grade; branch)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.…",
      "lastProgressAt": 1786722859653,
      "tokens": 181561,
      "toolCalls": 21,
      "durationMs": 928977,
      "resultPreview": "{\"category\":\"HMTc Category 17 — Pet Foods (human-grade over-compliance)\",\"cells_audited\":110,\"category_confidence\":0.35,\"coverage_gaps\":[{\"subcat\":\"ALL plant-carb + meat subcats (kibble, freeze-dried, semi-moist, treats, chews, canned-wet, raw, toppers)\",\"analyte\":\"Cr (total)\",\"issue\":\"Cell declared type=control ('no government sets a total-chromium maximum'). FALSE: China GB 2762-2022 sets total-…"
    },
    {
      "type": "workflow_agent",
      "index": 25,
      "label": "verify:cat9",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a1f9fa03db4bf4b01",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786721989991,
      "queuedAt": 1786721358324,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 9 — Infant and Child Contact Products (non-food; m…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 9 (Contact Products (non-food; migration/content basis)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any w…",
      "lastProgressAt": 1786722891347,
      "tokens": 171050,
      "toolCalls": 22,
      "durationMs": 901356,
      "resultPreview": "{\"category\":\"Category 9 — Infant and Child Contact Products (non-food; migration/content basis)\",\"cells_audited\":80,\"coverage_gaps\":[{\"subcat\":\"teething-toys-teethers\",\"analyte\":\"total Cr\",\"issue\":\"Panel carries Cr-VI (EU Cat III 53 ppb) but NO standalone total-Cr total. total Cr is one of the 8 mandatory HMTc totals. Register HAS applicable toy-migration total-Cr values (astm_f963_crtotal_soluble…"
    },
    {
      "type": "workflow_agent",
      "index": 26,
      "label": "verify:cat1",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a97ce54952779289d",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722130158,
      "queuedAt": 1786721383587,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 1 — Infant & Child Foods",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 1 (Infant & Child Foods). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each T…",
      "lastProgressAt": 1786723177288,
      "tokens": 185265,
      "toolCalls": 37,
      "durationMs": 1047129,
      "resultPreview": "{\"category\":\"Category 1 — Infant & Child Foods\",\"cells_audited\":161,\"category_confidence\":0.45,\"coverage_gaps\":[{\"subcat\":\"ALL 12 baby-food subcats (both formula variants)\",\"analyte\":\"tAs\",\"issue\":\"Mandatory total tAs is entirely absent from every Cat-1 baby-food cell (only iAs present). iAs cannot satisfy tAs (Method v2.0). India FSSAI regulates tAs=50 ppb for 'Infant milk substitute and infant f…"
    },
    {
      "type": "workflow_agent",
      "index": 27,
      "label": "verify:cat6",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "abde183abf9945f35",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722138858,
      "queuedAt": 1786721429544,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 6 — Seafood (config-based: tools/standards/seafood…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 6 (Seafood (config-based; find seafood-config.json / cert pages if no -compiled dir)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSea…",
      "lastProgressAt": 1786722675971,
      "tokens": 135750,
      "toolCalls": 18,
      "durationMs": 537112,
      "resultPreview": "{\"category\":\"Category 6 — Seafood (config-based: tools/standards/seafood-config.json; compiled cells in data/workbench/standards/cat1-compiled/{fish-freshwater,fish-marine-non-predatory,fish-marine-predatory,shellfish,cephalopods,canned-seafood,seaweed-kelp-foods}.json on origin/main)\",\"cells_audited\":77,\"coverage_gaps\":[{\"subcat\":\"all-7-subcats\",\"analyte\":\"total Cr\",\"issue\":\"total Cr (a mandatory…"
    },
    {
      "type": "workflow_agent",
      "index": 28,
      "label": "verify:cat3",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ac9e597d8206d0634",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722187969,
      "queuedAt": 1786721470576,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 3 — Grains, Cereals, and Rice Products",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 3 (Grains/Cereals/Rice). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each TI…",
      "lastProgressAt": 1786722926966,
      "tokens": 142034,
      "toolCalls": 27,
      "durationMs": 738995,
      "resultPreview": "{\"category\":\"Cat 3 — Grains, Cereals, and Rice Products\",\"cells_audited\":132,\"category_confidence\":0.3,\"coverage_gaps\":[{\"subcat\":\"ALL 12 subcats (rice-bulk-grain, breakfast-cereal-rice-based, pasta-rice-based, rice-noodles, rice-snacks-crackers, flour-non-rice, breakfast-cereal-non-rice, pasta-wheat-based, bread-and-baked-goods, grain-based-snacks, other-grain-products, rice-beverages)\",\"analyte\"…"
    },
    {
      "type": "workflow_agent",
      "index": 29,
      "label": "verify:cat26",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "acfeb490d5e121e62",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722260029,
      "queuedAt": 1786721553648,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 26 — Peptides, SARMs, and Research Chemicals …",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 26 (Peptides/SARMs (all-control)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nF…",
      "lastProgressAt": 1786722597030,
      "tokens": 114548,
      "toolCalls": 15,
      "durationMs": 337000,
      "resultPreview": "{\"category\":\"HMTc Category 26 — Peptides, SARMs, and Research Chemicals (all-control regulatory-vacuum standard)\",\"cells_audited\":55,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"peptides-injectable-hormones\",\"analyte\":\"MeHg\",\"verdict\":\"CONFIRMED under independent adversarial re-verification (not rejected). (a) Biomethylation science is textbook-correct: MeHg forms onl…"
    },
    {
      "type": "workflow_agent",
      "index": 30,
      "label": "verify:cat24",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ab104eeca67ce0e9c",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722261724,
      "queuedAt": 1786721612338,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Category 24 — Dairy and Milk Products",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 24 (Dairy (branch)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each TIGHTE…",
      "lastProgressAt": 1786723352693,
      "tokens": 209138,
      "toolCalls": 27,
      "durationMs": 1090969,
      "resultPreview": "{\"category\":\"Category 24 — Dairy and Milk Products\",\"cells_audited\":88,\"category_confidence\":0.35,\"coverage_gaps\":[{\"subcat\":\"dairy-condensed-evaporated\",\"analyte\":\"Sn\",\"issue\":\"Cell is canned=true yet Sn is emitted as type:control with value:null. Canned/tinplate condensed & evaporated milk has a direct tin-migration pathway and a directly-applicable sovereign ML exists (EU 2023/915 canned foods …"
    },
    {
      "type": "workflow_agent",
      "index": 31,
      "label": "verify:cat25",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a16a51935b31353f4",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722406468,
      "queuedAt": 1786721632374,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cannabis, Hemp, and CBD Products (HMTc Category 25)",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 25 (Cannabis (branch; vape reserved)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation…",
      "lastProgressAt": 1786723273955,
      "tokens": 150548,
      "toolCalls": 21,
      "durationMs": 867485,
      "resultPreview": "{\"category\":\"Cannabis, Hemp, and CBD Products (HMTc Category 25)\",\"cells_audited\":55,\"category_confidence\":0.5,\"coverage_gaps\":[{\"subcat\":\"ALL (register-level)\",\"analyte\":\"all\",\"issue\":\"regulatory_limits.csv contains cannabis rows for only US-CA, US-CO, US-MA, US-MD, US-NV and Israel. Three sovereign cannabis regimes with binding-relevant limits are entirely missing: New York OCM (8-element panel,…"
    },
    {
      "type": "workflow_agent",
      "index": 32,
      "label": "verify:cat30",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ad3945d007a6d01c0",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722600447,
      "queuedAt": 1786721719775,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 30 — Culinary Oils and Fats",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 30 (Culinary Oils/Fats). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each TI…",
      "lastProgressAt": 1786723090454,
      "tokens": 165377,
      "toolCalls": 20,
      "durationMs": 490006,
      "resultPreview": "{\"category\":\"Cat 30 — Culinary Oils and Fats\",\"cells_audited\":22,\"coverage_gaps\":[{\"subcat\":\"fat-spreads / margarine (no compiled subcategory)\",\"analyte\":\"Pb\",\"issue\":\"Category 30 is 'Culinary Oils and Fats' but only olive-oil and cooking-oils-other were compiled. The register carries a distinct, STRICTER fat-spreads Pb ML (GSO 193:2021 = 40; TH MOPH 414 = 40; SG Food Regs = 40; HK = 80) plus tAs …"
    },
    {
      "type": "workflow_agent",
      "index": 33,
      "label": "verify:cat29",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ad87f0357cce51086",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722679933,
      "queuedAt": 1786721792268,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Edible Fungi (HMTc Category 29) — 3 subcategories: cultivat…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 29 (Edible Fungi (+oyster/shiitake split)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regul…",
      "lastProgressAt": 1786723534909,
      "tokens": 201295,
      "toolCalls": 24,
      "durationMs": 854975,
      "resultPreview": "{\"category\":\"Edible Fungi (HMTc Category 29) — 3 subcategories: cultivated-mushrooms (common/button + other farmed), wild-mushrooms, cultivated-mushrooms-oyster-shiitake\",\"cells_audited\":33,\"coverage_gaps\":[{\"subcat\":\"all-three\",\"analyte\":\"Pb/Cd/tAs/tHg\",\"issue\":\"jurisdictions_checked strings claim 'China GB 2762' was checked, but regulatory_limits.csv contains ZERO China (CN) fungi rows — China G…"
    },
    {
      "type": "workflow_agent",
      "index": 34,
      "label": "verify:cat28",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a636fdbc2fd2de01a",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722864805,
      "queuedAt": 1786721818548,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 28 — Nuts, Seeds, and Their Butters (cashews; tree-nuts…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 28 (Nuts/Seeds/Butters (+high-Ni split)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulat…",
      "lastProgressAt": 1786723549982,
      "tokens": 155595,
      "toolCalls": 22,
      "durationMs": 685176,
      "resultPreview": "{\"category\":\"Cat 28 — Nuts, Seeds, and Their Butters (cashews; tree-nuts-high-nickel; nuts-seeds-other; sunflower-seeds; sunflower-seed-butter; nut-seed-butters-other)\",\"cells_audited\":66,\"coverage_gaps\":[{\"subcat\":\"ALL 6 subcats\",\"analyte\":\"Pb\",\"issue\":\"Register (regulatory_limits.csv, origin/main) contains ZERO China GB 2762 nut/seed rows and ZERO Brazil IN 160/2022 nut rows. Every China row in …"
    },
    {
      "type": "workflow_agent",
      "index": 35,
      "label": "verify:cat31",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ae31bf45330eeeaa1",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722894961,
      "queuedAt": 1786721887296,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 31 — Sweeteners and Syrups",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 31 (Sweeteners/Syrups). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each TIG…",
      "lastProgressAt": 1786723368080,
      "tokens": 131172,
      "toolCalls": 18,
      "durationMs": 473118,
      "resultPreview": "{\"category\":\"Cat 31 — Sweeteners and Syrups\",\"cells_audited\":44,\"category_confidence\":0.87,\"tighten_candidates\":[],\"coverage_gaps\":[{\"subcat\":\"honey\",\"analyte\":\"Pb\",\"issue\":\"per_country audit map omits two sovereigns that TIE the binding: HK Cap 132V 'Sugar-based candies and honey' Pb=100 (hk_cap132v_pb_sugar-based-candies-and-honey_100, in our own register) and Codex CXS 193 honey Pb=0.1 mg/kg=10…"
    },
    {
      "type": "workflow_agent",
      "index": 36,
      "label": "verify:cat33",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a4d808ca42e63e89a",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786722930566,
      "queuedAt": 1786721928748,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 33 — Chocolate, Cocoa and Confectionery",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 33 (Chocolate/Cocoa/Confectionery). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\n…",
      "lastProgressAt": 1786723293714,
      "tokens": 113958,
      "toolCalls": 10,
      "durationMs": 363147,
      "resultPreview": "{\"category\":\"Cat 33 — Chocolate, Cocoa and Confectionery\",\"cells_audited\":33,\"coverage_gaps\":[],\"tighten_candidates\":[],\"weak_not_material\":[{\"subcat\":\"confectionery-candy\",\"analyte\":\"Cd\",\"verdict\":\"CONFIRMED (high confidence) under adversarial challenge — the not-material claim is NOT fully true. Two independent grounds, both verified: (1) The compiled cell self-contradicts on its face. Its scope…"
    },
    {
      "type": "workflow_agent",
      "index": 37,
      "label": "verify:cat27",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "ad80dfbd705c88d9f",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786723095121,
      "queuedAt": 1786721987133,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "Cat 27 — Legumes and Pulses",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 27 (Legumes & Pulses). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFor each TIGH…",
      "lastProgressAt": 1786723998394,
      "tokens": 173267,
      "toolCalls": 30,
      "durationMs": 903272,
      "resultPreview": "{\"category\":\"Cat 27 — Legumes and Pulses\",\"cells_audited\":44,\"category_confidence\":0.5,\"coverage_gaps\":[{\"subcat\":\"legumes-pulses-other / soy-products / peanuts / peanut-butter\",\"analyte\":\"Cr (total)\",\"issue\":\"STALE COMPILE. Cat 27 cells were compiled 2026-08-13 22:16 (commit 0e9e1d9); the HK Cap. 132V register rows — including hk_cap132v_crtotal_pulses_1000 (Cr-total Pulses = 1000 ug/kg) and hk_c…"
    },
    {
      "type": "workflow_agent",
      "index": 38,
      "label": "verify:cat32",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "aede8318848006c75",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786723181233,
      "queuedAt": 1786722128047,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "32 — Condiments, Sauces and Dressings",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 32 (Condiments/Sauces/Dressings). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nFo…",
      "lastProgressAt": 1786723969894,
      "tokens": 158800,
      "toolCalls": 23,
      "durationMs": 788660,
      "resultPreview": "{\"category\":\"32 — Condiments, Sauces and Dressings\",\"cells_audited\":55,\"category_confidence\":0.2,\"coverage_gaps\":[{\"subcat\":\"ALL (compiler)\",\"analyte\":\"Cd/tAs/Pb\",\"issue\":\"ROOT CAUSE: compile-cat32.mjs selects register rows by literal scope-word regex (scope_include: \\\\bsauces?\\\\b, vinegar, tomato, mayonnaise). Credible GENERAL catch-all national codes whose product_scope lacks those words are str…"
    },
    {
      "type": "workflow_agent",
      "index": 39,
      "label": "verify:cat34",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a2539cf7a5095d901",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786723278240,
      "queuedAt": 1786722136748,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "34 — Herbs, Spices, Seasonings and Salt",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 34 (Herbs/Spices/Seasonings/Salt). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regulation.\n\nF…",
      "lastProgressAt": 1786724130864,
      "tokens": 166000,
      "toolCalls": 25,
      "durationMs": 852621,
      "resultPreview": "{\"category\":\"34 — Herbs, Spices, Seasonings and Salt\",\"cells_audited\":44,\"category_confidence\":0.3,\"coverage_gaps\":[{\"subcat\":\"ALL cat34 (salt, spices, hot-chili-sauces, bouillon-seasoning-blends)\",\"analyte\":\"Pb/tAs/iAs/Cd/tHg\",\"issue\":\"SYSTEMIC: China GB 2762-2022 (the single most comprehensive sovereign contaminant standard, and its 2025 successor) is ENTIRELY ABSENT from data/evidence/regulator…"
    },
    {
      "type": "workflow_agent",
      "index": 40,
      "label": "verify:cat35",
      "phaseIndex": 2,
      "phaseTitle": "Verify",
      "agentId": "a179d12e1aa05b09e",
      "agentType": "general-purpose",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786723297950,
      "queuedAt": 1786722258343,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "HMTc Category 35 — Prepared and Packaged Meals (mixed-meals…",
      "promptPreview": "ADVERSARIAL VERIFICATION — HMTc Category 35 (Prepared Meals + Bone Broth (branch)). An audit proposed tightenings and not-material corrections. Your job is to REFUTE each, defaulting to reject unless it clearly holds. Repo /Users/karenpendergrass/Desktop/heavy-metal-index; register at `git show origin/main:data/evidence/regulatory_limits.csv`; use WebSearch/WebFetch to confirm any web-found regula…",
      "lastProgressAt": 1786724238004,
      "tokens": 176423,
      "toolCalls": 29,
      "durationMs": 940053,
      "resultPreview": "{\"category\":\"HMTc Category 35 — Prepared and Packaged Meals (mixed-meals-prepared-foods, soups-broths-stocks, bone-broth)\",\"cells_audited\":33,\"category_confidence\":0.25,\"coverage_gaps\":[{\"subcat\":\"mixed-meals-prepared-foods / soups-broths-stocks\",\"analyte\":\"Pb\",\"issue\":\"Component read-across set OMITS two components that carry stricter in-allowlist EU MLs: fruiting vegetables (EU 2023/915 = 50 ppb…"
    },
    {
      "type": "workflow_agent",
      "index": 41,
      "label": "synthesis",
      "phaseIndex": 3,
      "phaseTitle": "Synthesize",
      "agentId": "aea1d4cd5dea7bfbe",
      "model": "claude-opus-4-8",
      "state": "done",
      "startedAt": 1786724248941,
      "queuedAt": 1786724240199,
      "attempt": 1,
      "lastToolName": "StructuredOutput",
      "lastToolSummary": "\"Ingest the China GB 2762-2022 (in force) + GB 2762-2025 (e…",
      "promptPreview": "Synthesize the adversarial standards audit into a master action report. Karen's goal: every HMTc cell reflects the strictest government limit in existence (>95% confidence), all 8 analytes covered, every not-material true (or limited anyway), expressed in ppb with pushback where ppb does not fit.\n\nProduce: (1) a per-category table: cells_audited, #confirmed tightenings, #coverage gaps, #not-materi…",
      "lastProgressAt": 1786724915808,
      "tokens": 177380,
      "toolCalls": 1,
      "durationMs": 666866,
      "resultPreview": "{\"per_category\":[{\"category\":\"Cat 1 — Infant & Child Foods\",\"confidence\":0.45,\"verdict\":\"NEEDS-WORK\",\"tightenings\":7,\"gaps\":4},{\"category\":\"Cat 3 — Grains, Cereals & Rice\",\"confidence\":0.3,\"verdict\":\"NEEDS-WORK\",\"tightenings\":12,\"gaps\":3},{\"category\":\"Cat 6 — Seafood\",\"confidence\":0.5,\"verdict\":\"NEEDS-WORK\",\"tightenings\":2,\"gaps\":7},{\"category\":\"Cat 9 — Infant/Child Contact Products\",\"confidence\":…"
    }
  ],
  "totalTokens": 5891697,
  "totalToolCalls": 806
}