---
type: regulation
rule_id: epa-eco-ssl-nickel
jurisdiction: US
agency: EPA
program: Ecological Soil Screening Level (Eco-SSL) series
metal: Ni
matrix: soil
limit_value: null
limit_unit: mg/kg-soil
status: in-force
effective_date: 2007-03-01
sunset_date: null
source_refs: ["[[sources/epa-eco-ssl-nickel-2007]]"]
updated: 2026-05-01
audience: [regulator, educator]
---

# EPA — Ecological Soil Screening Levels for Nickel

The US Environmental Protection Agency, Office of Solid Waste and Emergency Response, derived Ecological Soil Screening Levels (Eco-SSLs) for nickel in March 2007 (OSWER Directive 9285.7-76). Eco-SSLs are soil concentration thresholds below which exposure is presumed to pose acceptably low ecological risk to four receptor groups (plants, soil invertebrates, birds, and mammals) at hazardous-waste sites being evaluated under the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA). They are screening tools for site assessment, not enforceable cleanup standards, and not human-health regulatory limits ([[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]]).

The wiki references the nickel Eco-SSL document for two reasons: it is one of four secondary references currently underpinning the [[metals/nickel|nickel metal page]], and the soil-concentration thresholds it establishes are the operative screening framework in the [[supply-chain/soil-nickel-screening|soil-nickel screening reference]] page that bridges the metal coverage to the agricultural-soil supply-chain question. EPA's finding of agriculturally-relevant nickel soil concentrations becomes commercially salient given EFSA's 2020 finding that dietary nickel exposure routinely exceeds the chronic TDI in subpopulations ([[sources/efsa-nickel-contam-2020|EFSA 2020]]).

## Eco-SSL values

| Receptor | Eco-SSL | Notes |
| --- | --- | --- |
| Plants | _Pending transcription_ | Source: [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]] |
| Soil invertebrates | _Pending transcription_ | Source: [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]] |
| Avian wildlife | _Pending transcription_ | Source: [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]] |
| Mammalian wildlife | _Pending transcription_ | Source: [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]] |

Specific Eco-SSL values for each receptor group require transcription from the source PDF, which is staged at `raw/reports/eco-ssl_nickel.pdf` per the source-page provenance ([[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]]). The lowest value among the four receptors is the operative screening trigger at any given site.

## Derivation framework

Eco-SSLs are derived through receptor-specific dose-response evaluations: plant and soil-invertebrate values from soil-spike or field-survey studies relating soil nickel concentration to direct toxicity endpoints, and avian and mammalian wildlife values from food-chain modeling that translates dietary nickel exposure (via prey items growing on or consumed from contaminated soil) back to a soil concentration that would produce an acceptable wildlife dose. The derivation methodology and the underlying study selection for nickel will be populated during ingest of the primary EPA Eco-SSL document.

## Use in the supply chain

The CERCLA-screening application is the document's primary operational context. The agricultural-supply-chain application — using the Eco-SSL framework to evaluate soils intended for crop production for nickel-rich serpentine geology, former or current refinery proximity, or historical biosolid or nickel-containing fertilizer application — is the secondary application that the [[supply-chain/soil-nickel-screening|soil-nickel screening reference]] page tracks. EPA's Eco-SSL framework is not the regulatory floor for agricultural soils in the United States (no federal regulation directly limits nickel in farmland), but it is the most widely-cited US technical reference for soil-nickel concentration screening.

## Relationship to other nickel reference values

The Eco-SSL framework is expressed in mg Ni per kg soil and addresses ecological receptor exposure rather than human dietary exposure. It is not directly comparable to the [[regulations/efsa-nickel-tdi|EFSA chronic TDI]] of 13 µg Ni/kg b.w./day ([[sources/efsa-nickel-contam-2020|EFSA 2020]]) or to the [[regulations/atsdr-nickel-mrls|ATSDR oral MRLs]]. The connection between soil-nickel concentration and dietary-nickel intake is matrix-specific and crop-specific (nickel uptake varies by plant family and by soil pH and organic-matter content); translating an Eco-SSL value to a dietary intake would require a soil-to-plant-to-human transfer model that is outside the Eco-SSL document's scope.

## Sources

- [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]] — EPA Office of Solid Waste and Emergency Response, March 2007. Ecological Soil Screening Levels for Nickel — Interim Final (OSWER Directive 9285.7-76).
