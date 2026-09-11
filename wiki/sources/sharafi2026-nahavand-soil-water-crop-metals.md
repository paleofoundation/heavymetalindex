---
type: "source"
raw_handle: "RPCRVI_5"
cite_key: "sharafi2026-nahavand-soil-water-crop-metals"
title: "Soil–water–crop pathways of heavy metal contamination and human health risks in intensive smallholder farms of the Nahavand Plain, Iran"
authors: ["Saeed Sharafi", "Maryam Sharafi", "Maryam Lorvand"]
year: 2026
publication: "Scientific Reports 16:9947"
doi: "10.1038/s41598-026-38637-x"
access_url: "https://www.nature.com/articles/s41598-026-38637-x"
retrieval_date: "2026-09-11"
source_type: "peer-reviewed"
evidence_tier: "A"
license: "CC BY-NC-ND 4.0; factual extraction and original paraphrase only; no adapted article redistribution"
raw_path: "raw/Research Pull Chromium Deep Dive/Infant formula powder/Hexavalent chromium soil Infant formula powder/s41598-026-38637-x.pdf"
raw_sha256: "58055f8b386ec5b06d96a73ed68aa363eba644d59b30626ce5f61bcf78a44161"
metals: ["Cd", "Pb", "tHg", "Cr", "Ni", "Cu", "Zn"]
ingredients: []
products: []
matrices: ["soil", "irrigation-water", "above-ground-plant-biomass"]
jurisdictions: ["IR"]
evidence_fitness: {"supports": ["Qualified environmental and whole-biomass occurrence with source contradictions visible", "Study sampling and analytical-method context", "Audit of inconsistent correlation and risk-model reporting"], "does_not_support": ["Edible wheat/barley grain or sugar-beet root occurrence", "Cr(VI) or methylmercury measurements", "Verified legal limits", "Unqualified risk estimates or causal fertilizer source attribution"]}
ingest_status: "complete"
near_duplicates: []
sample_n: 150
sample_population: "150 Nahavand Plain farms: soil composites, whole above-ground crop biomass and irrigation water; November 2024"
audience: ["researcher", "educator", "regulator"]
sources: 0
updated: "2026-09-11"
data_path: "data/evidence/library-drain/batch-01-extractions.json"
audit_path: "data/evidence/library-drain/batch-01-audit.md"
---

# Sharafi et al. 2026 — Soil, irrigation water and crop biomass in the Nahavand Plain

This study sampled 150 smallholder farms in western Iran and reported seven metals in soil, irrigation water and whole above-ground crop biomass. It provides environmental and plant-pathway context, but substantial disagreements between its prose, figures and risk calculations limit quantitative reuse. The crop material was not separated into edible grain or roots.

## Key numbers

| Source fact | Reported result | Location and limitation |
| --- | --- | --- |
| Farm sampling frame | 150 farms: 45 wheat, 30 barley, 35 sugar beet and 40 coriander | Abstract and Methods; one sampling campaign in November 2024. |
| Soil collection | Five subsamples per farm, composited from 0–30 cm | Methods p4; five subsamples are not five independent farms. |
| Irrigation-water samples | 150 | Methods p5; mixed surface-water, well and spring sources are later called groundwater. |
| Crop preparation | Whole above-ground biomass, dry-weight reporting | Methods p4; edible grain and sugar-beet root were not isolated. |
| Wheat soil Cd–Pb correlation | Prose +0.69 versus Figure 4 −0.084 | Results p11 and Figure 4 p12; unresolved sign and magnitude conflict. |
| Sugar-beet crop zinc | Prose says greater than 3,400 mg/kg dry weight; crop figure uses an axis ending near 600 mg/kg | Results p10 and Figure 3; the soil panel, not the crop panel, spans the larger magnitude. |

Source-stated concentrations, model inputs and correlation coefficients are retained with their locations. Approximate readings of graphical shapes are marked as such and are not reconstructed sample values or verified means.

## Methods (brief)

Each farm supplied composite surface soil and whole above-ground crop biomass. Soil was air-dried and sieved; plant biomass was shade-dried and ground. Irrigation samples were acidified. Acid digestion and ICP-AES measured Cd, Pb, Cr, Ni, Cu and Zn; separate aqua-regia digestion and atomic fluorescence were described for mercury. Chromium and mercury were not speciated. The paper states 85–105% analytical recovery and triplicate measurements, but does not identify numerical detection limits or the certified reference material. Fertilizer inputs were described through interviews without quantitative input records.

## Evidence fitness

Useful for documenting an environmental sampling study and the limitations of its reported results. Whole biomass cannot establish concentrations in edible wheat or barley grain, sugar-beet root, or prepared coriander. Total chromium does not establish Cr(VI), and total mercury does not establish methylmercury. Correlations without measured input composition do not establish fertilizer causation.

## Limitations

Many correlation coefficients differ between Figure 4 and the text. Concentration descriptions also conflict with figure magnitudes and sometimes with other statements in the same paragraph. The paper gives an age-specific pollution-load index even though its defining equation has no age term. Cancer-risk graphics disagree with their captions and assign prominent values to metals lacking cancer slope factors in the paper's own input table. Several risk graphics print concentration or dose units for quantities that should be dimensionless. Their outputs do not support an unqualified health-risk conclusion.

The raw numerical dataset is not publicly supplied. Ambiguous graphical legends and overlapping symbols prevent reliable recovery of exact sample-level concentrations or distribution statistics. A single season and mixed irrigation-source types further constrain generalization. Legal and toxicity comparators quoted by the paper have not been verified from primary instruments.

## Related evidence

- [[supply-chain/soil-to-plant-transfer]]
- [[supply-chain/irrigation-and-soil-amendments]]
- [[supply-chain/source-attribution-environmental-burden-apportionment]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/copper]]
- [[metals/zinc]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
