---
type: source
cite_key: bischoff2024-e171-ros-tim1-digestion
title: "Investigating the ROS Formation and Particle Behavior of Food-Grade Titanium Dioxide (E171) in the TIM-1 Dynamic Gastrointestinal Digestion Model"
authors: ["Bischoff SC", "et al."]
year: 2024
publication: "Nanomaterials (Basel, Switzerland)"
doi: 10.3390/nano15010008
pmcid: PMC11721885
pmid: "39791769"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: "raw/deposits/HMI-METAL-TITANIUM-1/10.3390_nano15010008.pdf"
sha256: c037a22b23c1793cd0d1c50da46a5b35456b4c72cb34ab3ce38b39d4571b99aa
access_date: 2026-11-03
access_url: https://doi.org/10.3390/nano15010008
license: cc by
metals: [Ti]
ingredients: []
products: []
matrices: [food-additive, in-vitro]
jurisdictions: []
sample_n: null
sample_population: "In vitro study using the validated TNO TIM-1 dynamic gastrointestinal model (simulates stomach plus small intestine over 6 hours) with ileal efflux fractions collected hourly. E171 tested in two conditions: aqueous dispersion (fasted state) and dispersed in yogurt (fed state). Physiologically derived dose: 140 mg E171 per day based on EFSA mean adult exposure of 2.0 mg/kg body weight per day times 70 kg adult."
superseded_by: null
wiki_doi: null
updated: 2026-11-06
---

# Bischoff et al. 2024: E171 reactive oxygen species formation and particle behavior in TIM-1 digestion model

Bischoff et al. studied the reactive oxygen species (ROS) formation capacity and particle behavior of food-grade titanium dioxide (E171) during simulated gastrointestinal digestion using the validated TNO TIM-1 dynamic model. The study showed that pristine E171 dispersed in aqueous conditions generates hydroxyl radicals at physiologically relevant concentrations (0.22 mg/mL, significant at p less than 0.01), but this ROS-forming capacity was completely abolished after passage through the TIM-1 digestion model in both aqueous and yogurt (fed-state) conditions. The yogurt food matrix additionally suppressed ROS formation even before digestion. This study was conducted as a parallel companion to [[sources/bischoff2026-e171-colon-transcriptome-human|Bischoff et al. 2026]] using the same E171 formulation and dose rationale.

## Key numbers

E171 particle characterization (Table 1):

| Material and condition | Method | Median size | Nanoparticle fraction |
| --- | --- | --- | --- |
| Pristine E171 | spICP-MS | 78 nm | 75% less than 100 nm |
| Pristine E171 | TEM | 79 nm | 73% less than 100 nm |
| E171 dispersed in yogurt | spICP-MS | 330 nm | approximately 20% less than 100 nm |
| E171 dispersed in water (DLS) | DLS hydrodynamic diameter | approximately 353 nm (PDI 0.19) | n/a |
| E171 yogurt aggregate (DLS) | DLS | greater than 6,000 nm (exceeded instrument range) | n/a |

Particle size after TIM-1 digestion (Figure 4):

| Fraction | E171-aqueous median size | Nanoparticle fraction | E171-yogurt median size | Nanoparticle fraction |
| --- | --- | --- | --- | --- |
| Pristine (before digestion) | n/a | 72 to 75% | n/a | 20% |
| Ileal efflux (all 6 hourly fractions) | approximately 330 nm | 1 to 7% | approximately 290 nm | 1 to 5% |

ROS formation by ESR spectroscopy with DMPO spin trap:

| Condition | ROS (DMPO-OH signal vs. control) |
| --- | --- |
| E171-aqueous at 0.22 mg/mL (pre-digestion) | significantly increased; p less than 0.01 |
| E171-aqueous at 20 mg/mL (pre-digestion) | significantly increased; p less than 0.001 |
| E171-yogurt (pre-digestion) | at or near baseline; yogurt matrix suppressed ROS |
| E171-aqueous, all post-digestion ileal fractions | no detectable ROS |
| E171-yogurt, all post-digestion ileal fractions | no detectable ROS |
| Direct addition to ileal fluid (bypassing digestion) | ROS only at concentrations at or above 2 mg/mL |

Protein corona formation: time-dependent increase in protein binding to both E171-aqueous and E171-yogurt particles throughout the 6 hours of TIM-1 digestion (Figure 6), identified by LDS-PAGE. Protein corona formation is proposed as the mechanism by which GI digestion abolishes ROS activity.

TIM-1 dilution: starting meal of 140 mg E171 in 310 mL (E171-aqueous 20 mg/mL; E171-yogurt 0.9 mg/mL) diluted to approximately 0.01 mg/mL by ileal efflux fraction 6 (Table 2).

## Methods (brief)

TNO TIM-1 dynamic gastrointestinal model (validated, commercially available), simulating stomach and small intestine over 6 hours with physiological secretions and pH gradients. E171 dose: 140 mg per day derived from EFSA mean exposure scenario (2.0 mg/kg bw per day times 70 kg adult). Two matrices: aqueous dispersion (fasted state) and yogurt (fed state, 0.9 mg E171/mL, matching the Bischoff et al. 2026 human study formulation). Particle characterization by spICP-MS, TEM, and DLS. ROS measurement by ESR spectroscopy with DMPO spin trap. Protein corona by LDS-PAGE. No LOD or LOQ reported for titanium quantification.

## Evidence fitness

Supports: ROS-forming capacity of pristine aqueous E171 at physiologically achievable concentrations; suppression of ROS formation by yogurt food matrix; abolition of E171 ROS capacity during GI digestion; particle aggregation behavior of E171 in aqueous and food matrix conditions and during digestion; nanoparticle fraction reduction from greater than 70% to 1 to 7% after digestion; protein corona formation as a proposed mechanism for ROS abolition.

Does not support: in vivo ROS generation in humans; food product titanium concentrations; long-term carcinogenicity outcomes; ROS formation from non-aqueous food matrices other than yogurt.

## Limitations

In vitro digestion model does not replicate the complexity of the human intestinal environment (no mucus layer, microbiome, immune cells, or cellular uptake). The discrepancy between pre-digestion ROS formation and in vivo or organoid findings underscores the limitation of using cell-free ROS assays to predict biological outcomes. Only two food matrices tested (water and yogurt). Single titanium dioxide source (E171). Protein corona composition was not fully characterized by proteomics.

## Related evidence

- [[metals/titanium]]
- [[sources/bischoff2026-e171-colon-transcriptome-human]]
- [[sources/efsa2021-e171-titanium-dioxide-safety]]
