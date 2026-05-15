---
type: source
raw_handle: papers-cube
cite_key: meng2023-electrochemical-sensors-food-heavy-metals
title: "The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors"
authors: [Meng R, Zhu Q, Long T, He X, Luo Z, Gu R, Wang W, Xiang P]
year: 2023
publication: "Food Control"
doi: 10.1016/j.foodcont.2023.109743
source_type: review
evidence_tier: B
license: "CC BY"
raw_path: "raw/Papers Cube Manual Fetch/article (1) copy 4.pdf"
metals: [Pb, Cd, tAs, tHg, Ni, Cr]
ingredients: []
products: []
matrices: [food, water, vegetable, tea, peanut, cereal]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "Review of electrochemical sensor literature for heavy metal detection in food matrices"
updated: 2026-05-15
---

# Meng et al. 2023 — Electrochemical sensors for heavy metal detection in food

Meng and colleagues survey the state of electrochemical sensor (ECS) technology for detecting heavy metals in food matrices, covering the period through approximately 2022. The review is organized by electrode modification material — inorganic materials (gold nanoparticles, bismuth, metal oxides, carbon nanotubes, graphene), organic/biological materials (DNA aptamers, molecularly imprinted polymers, proteins), and composite nanomaterials — and assesses each class for sensitivity, selectivity, linear detection range, limit of detection, and food-matrix applicability. A concluding section synthesizes which material combinations the authors regard as most promising for field-deployable food safety monitoring.

## Why electrochemical sensing matters for heavy metal testing

The paper's framing is directly relevant to the testing section of this wiki: conventional analytical methods for heavy metals in food (ICP-MS, ICP-OES, atomic absorption spectrophotometry) deliver very low detection limits and high accuracy but require expensive instrumentation, specialized sample preparation, and skilled operators, making them impractical for on-site supply-chain screening or low-resource regulatory environments. Electrochemical sensors can approach or match the detection limits of ICP methods for some analytes while being portable, low-cost, and adaptable to non-expert operation. The food matrices discussed include vegetables, cereals, peanuts, tea, and water — overlapping substantially with the HMT&C analyte and ingredient scope.

## Technical scope

The dominant technique reviewed is stripping voltammetry, particularly square wave anodic stripping voltammetry (SWASV) and differential pulse anodic stripping voltammetry (DPASV), which are well-suited to simultaneous multi-metal detection at trace concentrations. A modified electrode (typically a glassy carbon electrode, GCE, or screen-printed carbon electrode, SPCE) is used as the working electrode in a three-electrode cell. Electrodeposition concentrates target metal ions onto the electrode surface during a deposition step; the subsequent stripping step produces peaks whose position identifies the metal and whose area quantifies the concentration.

**Key performance data cited for selected systems:**

- FGP/AuNC (fluorinated graphene/gold nanocage) composite on GCE: linear ranges of Cd²⁺ (4–6,000 µg/L), Pb²⁺ (6–5,000 µg/L), Hg²⁺; LODs below WHO and Chinese regulatory limits; validated in peanut and tea matrices.
- Fe₃O₄-AuNPs modified SPCE for As³⁺: linear range 1.0–10.0 µg/L; LOD 0.8 ng/L — among the lowest reported for As in food-relevant matrices.
- DNA aptamer-modified electrodes for Pb²⁺ detection in tap water: LOD of 326 pmol/L.

The authors' synthesis is that iron oxide/graphene/nucleic acid composites represent the optimal material combination for electrochemical electrodes at present, balancing economy, sensitivity, specificity, and stability. They note that interferent management (distinguishing target metals from co-existing ions with overlapping stripping potentials) remains an active challenge, particularly for simultaneous Cd and Pb detection in complex food matrices with high Ca and Mg backgrounds.

## Comparison to reference methods

The review does not present head-to-head validation data against ICP-MS for real food samples, which limits its direct applicability for testing protocol guidance. It notes that regulatory frameworks (WHO, Chinese GB standards) use concentration-based limits against which sensor LODs are benchmarked, and several reviewed systems achieve LODs below these limits in spiked or simplified matrices. Performance in unspiked real food matrices after full sample digestion is less consistently reported, and that gap is a limitation of the ECS literature as a whole.

## Relevance to testing pages

The review does not cover ICP-MS or AAS, which are the regulatory-standard methods discussed on [[testing/icp-ms]]. It is useful for the wiki as a reference for the landscape of emerging detection methods, particularly for a future [[testing/electrochemical-sensors]] page or an additions section on [[testing/index]] covering point-of-care and field-deployable methods. The food matrices relevant to HMT&C (vegetables, cereals, peanuts, tea) are all represented in the reviewed sensor literature.

## Limitations

This is a B-tier industry methods review. The CC BY license makes it freely citable. The review is comprehensive for ECS literature but does not cover ICP-MS, ICP-OES, AAS, XRF, or other non-electrochemical methods. For comparative method evaluation, it should be supplemented with A-tier analytical chemistry references.

## Implications

Testing: anchors a future [[testing/electrochemical-sensors]] stub page and supports the testing index's coverage of emerging methods.

Courses: useful for module content on the landscape of heavy metal testing methods, particularly for brand QA audiences who need to understand what alternative/emerging methods can and cannot do.

## Wiki pages updated on ingest

- [[testing/index]]
