---
type: source
raw_handle: papers-cube
cite_key: khan2015-heavy-metals-food-plants-bioaccumulation
title: "The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review"
authors: [Khan A, Khan S, Khan MA, Qamar Z, Waqas M]
year: 2015
publication: "Environmental Science and Pollution Research"
doi: 10.1007/s11356-015-4881-0
source_type: review
evidence_tier: A
license: unknown
raw_path: "raw/Papers Cube Manual Fetch/khan2015.pdf"
metals: [Pb, Cd, tAs, tHg, Ni, Al, Cr, Zn, Cu]
ingredients: ["[[ingredients/leafy-vegetables]]", "[[ingredients/root-vegetables]]", "[[ingredients/cereals]]", "[[ingredients/legumes]]"]
products: []
matrices: [soil, plant-tissue, leaf, root, stem, tuber, grain]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "Narrative review of global literature on heavy metal accumulation in food plants"
updated: 2026-05-15
---

# Khan et al. 2015 — Heavy metal uptake and bioaccumulation in food plants

Khan and colleagues review the mechanisms by which food plants take up heavy metals from contaminated soils, how metals redistribute across plant tissues, the effects of metal accumulation on plant nutritional quality, and the resulting health risks for human consumers. This is a wide-scope A-tier review covering Pb, Cd, As, Hg, Ni, Cr, Zn, Cu, and Mn across leafy vegetables, root vegetables, cereals, and legumes. It is particularly useful for the supply-chain section of this wiki because it provides a systematic view of the soil-to-plant transfer pathway that is upstream of food occurrence data.

## Soil-to-plant transfer mechanisms

The authors identify six primary uptake routes. Passive diffusion across root cell membranes is the dominant mechanism for cationic metals (Pb²⁺, Cd²⁺, Ni²⁺) under conditions of low soil pH and high metal bioavailability. Cadmium enters plant roots via the same calcium and zinc transporter systems (including ZIP family transporters and IRT1) that serve essential micronutrient uptake — a structural reason why Cd accumulation is difficult to prevent by metabolic exclusion alone. Arsenic enters as arsenate through phosphate transporters (particularly PHT1 family) because arsenate mimics phosphate in shape and charge; arsenite enters through aquaporin channels (NIPs — nodulin-26-like intrinsic proteins). Mercury is taken up primarily as inorganic Hg²⁺ through aquaporins; methylmercury uptake via roots is limited but not zero. Lead uptake at the root surface is partially blocked by the apoplastic barrier (endodermis, Casparian strip), which is why stem and grain Pb concentrations typically fall below root concentrations by one to two orders of magnitude.

## Bioaccumulation patterns across plant parts

The review documents a consistent bioaccumulation hierarchy for non-hyperaccumulating crops: **leaf > root ≈ stem > tuber > grain** for most metals. Exceptions are notable: cadmium is more mobile in the phloem than most divalent metals, so it reaches grain and fruit at proportionally higher fractions than lead. Arsenic (as arsenate) is largely immobilized in root vacuoles and has low phloem mobility, except in rice where silicon transporter activity and waterlogged-paddy conditions create a specialized high-As grain pathway. The practical consequence is that leafy vegetables generally carry the highest multi-metal contamination burden per edible portion across crops grown on contaminated soil.

## Effects of heavy metals on plant nutritional quality

A section of the review that is less commonly cited but directly relevant to consumer-facing risk assessment: metal contamination degrades plant nutritional composition independently of direct metal toxicity to the consumer. The authors synthesize data showing that:

- Cadmium and lead reduce total protein and amino acid content, particularly in cereal grains, by interfering with nitrogen assimilation enzymes (nitrate reductase, glutamate synthase).
- Arsenic disrupts carbohydrate metabolism, reducing glucose and starch in contaminated wheat and rice.
- Heavy metals at phytotoxic concentrations deplete ascorbic acid (vitamin C), carotenoids, and chlorophyll.
- Nickel and chromium suppress root growth and lateral root branching, reducing uptake of phosphorus and micronutrients (Fe, Mn, Zn) even when those elements are adequate in the soil.

The practical implication: populations relying heavily on crops from contaminated soils face a double burden — metal exposure and nutritional impairment — a coupling particularly relevant to developing-country agricultural systems where malnutrition and metal contamination co-occur.

## Transfer factor data

The review synthesizes transfer factor (TF) data — the ratio of metal concentration in plant dry matter to metal concentration in soil — from multiple studies. Reported TF ranges for the most commonly measured crops:

- Cd in leafy vegetables: TF = 1–10 (high bioavailability; some species exceed 10, classifying as hyperaccumulators)
- Cd in cereals: TF = 0.1–1.0
- Pb in leafy vegetables: TF = 0.01–0.5 (low bioavailability; Pb is largely immobilized in soil organic matter and root apoplast)
- Pb in root vegetables: TF = 0.01–0.2
- As in rice grain: TF = 0.02–0.2 (highly variable; waterlogging and silica status are primary determinants)
- Ni in leafy vegetables: TF = 0.5–5

The authors note that TF values span orders of magnitude within species because soil pH, organic matter, and redox potential are as important as total soil metal concentration. A soil with 2 mg/kg Cd at pH 5 can produce higher plant Cd than a soil with 5 mg/kg Cd at pH 7.

## Implications

Supply chain: supports the [[supply-chain/soil]] page's framing that soil pH and speciation are the primary determinants of plant-available metal load, not total soil metal concentration alone. The TF data provide quantitative anchors for ingredient-page risk-driver sections.

Ingredients: directly relevant to [[ingredients/leafy-vegetables]], [[ingredients/root-vegetables]], [[ingredients/cereals]], [[ingredients/legumes]]. The bioaccumulation hierarchy (leaf > root > grain) is the foundational organizing principle for ingredient risk comparisons.

Mitigation: the soil-pH and organic-matter modulation strategies described in the review underpin the sourcing and agronomic lever sections across ingredient pages. The cadmium-via-zinc-transporter mechanism explains why zinc-adequate soils reduce cadmium uptake — a mitigation lever with published evidence.

App: the transfer factor data are the conceptual basis for ingredient-to-soil-risk reverse inference; the app can use ingredient TF ranges to flag high-Cd-risk leafy green products when the supply chain is known to draw from acidic, high-Cd soils.

Courses: the dual burden (metal exposure + nutritional impairment) is a strong pedagogical hook for supply-chain courses aimed at brand QA and formulation teams.

## Wiki pages updated on ingest

- [[supply-chain/soil]]
- [[ingredients/leafy-vegetables]]
- [[ingredients/root-vegetables]]
