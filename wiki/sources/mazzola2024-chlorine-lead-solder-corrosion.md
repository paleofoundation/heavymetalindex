---
type: source
raw_handle: FM_11526352
cite_key: mazzola2024-chlorine-lead-solder-corrosion
title: "Free Chlorine Can Inhibit Lead Solder Corrosion via Electrochemical Reversal"
authors: [Mazzola P, Lopez MJ, Edwards MA]
year: 2024
publication: "Environmental Science and Technology"
doi: 10.1021/acs.est.4c07375
access_url: "https://doi.org/10.1021/acs.est.4c07375"
source_type: peer-reviewed
evidence_tier: A
license: "PMC OA subset"
raw_path: raw/markdown/FM_11526352/FM_11526352.md
metals: [Pb]
ingredients: ["[[ingredients/water]]"]
products: []
matrices: [drinking-water]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Laboratory pipe-loop corrosion experiment; synthesized waters with low alkalinity (12 to 17 mg/L as CaCO3), low hardness, and varying chloride-to-sulfate mass ratio; copper pipe segments with 50:50 Pb/Sn solder joints; Phase 1 over 8 months; Phase 2 over 4 months; Virginia Tech laboratory"
wiki_doi: null
sampling_locations: [Virginia Tech laboratory]
sampling_year_range: "2023-2024"
updated: 2026-11-06
---

# Mazzola et al. 2024 -- Free chlorine and electrochemical reversal of lead solder corrosion

## Overview

This laboratory pipe-loop study demonstrated that free chlorine disinfection can inhibit galvanic corrosion of lead-tin solder in copper pipes through an electrochemical reversal mechanism: free chlorine oxidizes lead at the solder-water interface to form a Pb(IV) oxide scale (plattnerite-type), which inverts the galvanic couple so that the solder becomes cathodic (protected) rather than anodic (corroding). The practical consequence is that some utilities using free chlorine will observe much lower lead release from solder than expected from water chemistry alone. Switching from free chlorine to chloramine disinfection eliminates this protective mechanism and can produce up to 100-fold more lead release over comparable exposure periods.

## Key numbers

Lead release from 50:50 Pb/Sn solder joints (laboratory bench-scale, µg/L per water change):
- Pre-conditioning (baseline): 1,090 to 1,290 µg/L per water exchange cycle
- After sustained free chlorine at pH 8.3 (Phase 1, over 8 months): dramatic reduction as Pb(IV) scale formed (exact values not fully extracted from full text; described as markedly lower than baseline)
- Free chlorine versus chloramine comparison (Phase 2, 4 months): free chlorine conditions with electrochemical reversal produced on average approximately 40 percent lower lead release than chloramine; at the extreme, the galvanic connection between solder and copper produced 3.9 µg/L under free chlorine versus 84 µg/L under chloramine (p = 0.08)
- Mean lead at the end of Phase 2 without reversal conditions (Water B, free Cl2): 5.0 µg/L on average after reversal; Water A chloramine: 25 µg/L on average

The chloramine-versus-free-chlorine difference (up to 100-fold in some conditions over longer periods) is cited from companion experiments and prior literature.

## Methods (brief)

Laboratory pipe-loop corrosion system with continuously recirculating synthetic water. 50:50 Pb/Sn solder connecting copper pipe segments. Free chlorine (sodium hypochlorite) and monochloramine conditions tested in parallel. Total lead by ICP-MS (Thermo iCAP RQ). Water chemistry: alkalinity 12 to 17 mg/L as CaCO3; pH 7.3 to 8.3 (varied by condition); CSMR varied between high and low; orthophosphate also tested in one condition.

## Evidence fitness

Supports: establishing the electrochemical reversal mechanism as a practical explanation for lower-than-expected solder lead in some free-chlorine utilities; demonstrating that disinfectant type interacts with solder lead in ways not fully captured by traditional corrosion indices; identifying the conditions (sustained free chlorine, formation of Pb(IV) scale) under which the protective effect occurs.

Does not support: predicting field-scale lead release rates from individual utilities without site-specific pipe loop testing; extrapolating from solder lead to lead service line lead (different corrosion chemistry); applying the absolute concentration values (which reflect bench-scale solder joints in synthesized water) to residential tap water occurrence data.

## Limitations

Bench-scale static and flow experiments do not replicate shear forces, pipe scale development, or biofilm interactions in distribution systems. Lead-tin solder (50:50) is the only plumbing material tested; lead service lines have different corrosion chemistry and would not show the same electrochemical reversal. Orthophosphate was shown to inhibit Pb(IV) scale formation, meaning that utilities using orthophosphate for corrosion control would not benefit from this protective mechanism. The chloramine comparison condition does not reflect all chloramine chemistries (monochloramine only was tested).

## Related evidence

- [[metals/lead]]
- [[ingredients/water]]
- [[testing/tap-water-lead-sampling]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
