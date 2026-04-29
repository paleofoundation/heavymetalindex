---
type: metal
symbol: As
name: Arsenic
species: [As(III), As(V), iAs, MMA, DMA, AsB, arsenobetaine]
audience: [regulator, educator, consumer, app]
microbiome_relevance: high
wikibiome_crosswalk: ["[[microbiome/arsenic-gut-axis]]", "[[microbiome/arsenic-microbial-methylation]]"]
updated: 2026-04-25
sources: 9
---

# Arsenic

_This page draws on the [[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]] Toxicological Profile for Arsenic ([[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]]), the EPA IRIS January 2025 inorganic arsenic toxicological review ([[sources/epa-iris-inorganic-arsenic-2025|EPA IRIS iAs 2025]]), the EFSA CONTAM 2009 Scientific Opinion on Arsenic in Food ([[sources/efsa-arsenic-contam-2009|EFSA As 2009]]), the [[sources/jecfa-82nd-arsenic|JECFA 82nd meeting]] arsenic monograph ([[sources/jecfa-82nd-arsenic|JECFA 82nd]]), the OEHHA Proposition 65 inorganic arsenic listing ([[sources/oehha-arsenic-prop65-listing|OEHHA Prop 65 As]]), the EPA drinking water arsenic MCL rule ([[sources/epa-arsenic-drinking-water-mcl|EPA As MCL]]), the FDA inorganic arsenic infant [[ingredients/rice|rice]] cereal action level ([[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]), the joint FDA/EPA fish consumption advice ([[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]]), and the [[sources/thomas-2021-arsenic-methylation|Thomas 2021]] review of arsenic methylation ([[sources/thomas-2021-arsenic-methylation|Thomas 2021]])._

## Overview
<!-- audience: regulator, educator, consumer -->

Arsenic is a metalloid that occurs in food and water as multiple chemical species with substantially different toxicity profiles. Inorganic arsenic (iAs) species, principally arsenite (As(III)) and arsenate (As(V)), are the toxicologically dominant forms and are classified as Group 1 human carcinogens by IARC, with documented dose-response associations for lung, bladder, and skin cancer at chronic exposures occurring in groundwater-exposed populations worldwide ([[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]], [[sources/efsa-arsenic-contam-2009|EFSA 2009]]). The wiki's arsenic content is organized primarily around inorganic arsenic because that is the species relevant to dietary risk and to all major regulatory reference values.

The dominant dietary exposure route for inorganic arsenic in non-groundwater-affected populations is [[ingredients/rice|rice]] and [[ingredients/rice|rice]]-based foods; [[ingredients/rice|rice]] efficiently accumulates iAs from flooded-paddy soils because flooded conditions reduce arsenic to the As(III) species which is more bioavailable to plants ([[sources/efsa-arsenic-contam-2009|EFSA 2009]], [[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]). Major regulatory bodies have concluded that the prior threshold-based reference values for iAs (notably the JECFA PTWI of 15 µg/kg b.w./week) are no longer appropriate because cancer occurs at exposures below those thresholds; modern regulatory framing operates against benchmark dose lower confidence limits and matrix-specific action levels rather than a single international PTWI ([[sources/efsa-arsenic-contam-2009|EFSA 2009]], [[sources/jecfa-82nd-arsenic|JECFA 82nd]]). EPA finalized a major IRIS reassessment of inorganic arsenic in January 2025, the most consequential US arsenic regulatory update in decades ([[sources/epa-iris-inorganic-arsenic-2025|EPA IRIS 2025]]).

## At a glance
<!-- audience: consumer -->

Three facts that matter most for a consumer trying to interpret arsenic exposure.

First, the form of arsenic matters more than the amount. Inorganic arsenic in [[ingredients/rice|rice]], [[ingredients/rice|rice]]-based foods, drinking water, and certain juices is the carcinogen of regulatory concern ([[sources/efsa-arsenic-contam-2009|EFSA 2009]]). Total-arsenic measurements that do not distinguish between inorganic and organic species are not informative for risk; the wiki's content focuses on inorganic arsenic specifically. When you see a "total arsenic" number on a product test or in a news article, the actionable question is what fraction is inorganic, which often requires speciation analysis (HPLC-ICP-MS) rather than total-arsenic ICP-MS ([[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]]).

Second, [[ingredients/rice|rice]] is the dominant single dietary source of inorganic arsenic for non-groundwater-affected US and European consumers ([[sources/efsa-arsenic-contam-2009|EFSA 2009]]). Brown [[ingredients/rice|rice]] carries more inorganic arsenic than white [[ingredients/rice|rice]] because the bran layer concentrates the metal ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]). Rice cereal is often the first solid food introduced to infants, which is why FDA established a 100 ppb action level for infant [[ingredients/rice|rice]] cereal in 2020 ([[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Frequent [[ingredients/rice|rice]] consumers (gluten-free diets, certain regional cuisines) and parents of infants on [[ingredients/rice|rice]] cereal should treat [[ingredients/rice|rice]] as their primary inorganic-arsenic exposure variable.

Third, private well water is not regulated under EPA's 10 ppb drinking-water Maximum Contaminant Level; private-well users in regions with documented elevated groundwater arsenic should test their water and treat or substitute water sources where concentrations exceed 10 µg/L ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]).

## Toxicology
<!-- audience: regulator, educator -->

Inorganic arsenic is a Group 1 human carcinogen (IARC) with dose-response associations for lung, bladder, and skin cancer at chronic exposures including via drinking water and food. [[sources/efsa-arsenic-contam-2009|EFSA 2009]] reports BMDL01 values for cancer endpoints ranging 0.3 to 8 µg iAs/kg b.w./day depending on endpoint and study selection, and concludes that the prior JECFA PTWI of 15 µg iAs/kg b.w./week is no longer appropriate because cancer occurs at exposures below the PTWI. [[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]] derives a chronic oral MRL of 0.3 µg As/kg/day anchored on dermal effects (hyperpigmentation, palmar/plantar keratosis) observed in chronically exposed populations, with cancer dose-response derived through EPA IRIS rather than ATSDR.

Non-cancer endpoints documented in the inorganic arsenic literature include cardiovascular effects (atherosclerosis, blackfoot disease in highly exposed Taiwanese populations), neurodevelopmental effects in children, dermal effects (the basis of the ATSDR chronic oral MRL), peripheral neuropathy in adults, reproductive effects, immunological effects, and emerging diabetes-mellitus associations ([[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]]). Arsenic mechanism includes binding to vicinal sulfhydryl groups in proteins and enzymes, oxidative stress generation, methylation interference (biomethylation of inorganic arsenic to MMA and DMA species; see below), and direct genotoxicity through indirect pathways (arsenic does not produce direct DNA adducts but operates through oxidative stress and DNA repair inhibition) ([[sources/thomas-2021-arsenic-methylation|Thomas 2021]]).

Inorganic arsenic biomethylation, reviewed by [[sources/thomas-2021-arsenic-methylation|Thomas 2021]] across three decades of research, is the major in vivo metabolic transformation: AS3MT methyltransferase catalyzes sequential methylation of inorganic arsenic to monomethylated (MMA) and dimethylated (DMA) species. The toxicokinetic and toxicodynamic implications were long debated as detoxification (dimethylated species are excreted faster) versus toxification (some intermediates may be more reactive than the inorganic precursors). Inter-individual variation in methylation efficiency, driven by AS3MT polymorphisms and dietary cofactors (folate, B12), influences susceptibility to chronic arsenic effects. Methylation patterns are themselves biomarkers used in cancer-risk studies of arsenic-exposed populations.

The January 2025 EPA IRIS Toxicological Review of Inorganic Arsenic is the current US federal scientific anchor for arsenic dose-response and supersedes prior IRIS values. The full quantitative outputs (oral RfD, oral cancer slope factor) require detailed extraction from the review document and are pending consolidation on this wiki.

## Typical exposure routes
<!-- audience: regulator, educator -->

Drinking water is the dominant inorganic arsenic exposure route in groundwater-affected regions worldwide. The EPA Maximum Contaminant Level for arsenic in drinking water is 10 ppb (10 µg/L), established in 2001 to replace the prior 50 ppb standard, applicable to community water systems and non-transient non-community water systems but not to private wells ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]). The 50-to-10 ppb reduction was driven by accumulating cancer-epidemiology evidence in moderately exposed populations ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]).

Dietary intake is the dominant route in non-groundwater-affected populations ([[sources/efsa-arsenic-contam-2009|EFSA 2009]]). Rice and [[ingredients/rice|rice]]-based foods carry the highest inorganic arsenic concentrations among common dietary commodities; brown [[ingredients/rice|rice]] is higher than white [[ingredients/rice|rice]] because the bran concentrates the metal ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]); [[ingredients/rice|rice]]-based infant cereal is a particular concern because [[ingredients/rice|rice]] is often the first solid food ([[sources/fda-iAs-rice-cereal-2020|FDA 2020]]).

## Food sources
<!-- audience: regulator, educator, app -->

| Matrix | Inorganic arsenic concern |
| --- | --- |
| Rice and [[ingredients/rice|rice]]-based foods | Dominant single dietary contributor; brown [[ingredients/rice|rice]] > white [[ingredients/rice|rice]]; 100 ppb FDA action level for infant [[ingredients/rice|rice]] cereal |
| Drinking water (private wells, groundwater-affected) | Dominant in groundwater-affected populations; EPA 10 ppb MCL applies to public systems |
| Seaweed (especially hijiki) | Can carry elevated inorganic As; species variation substantial |
| Apple and grape juice | Documented elevated inorganic As in some products; FDA has issued guidance |
| Certain leafy vegetables grown on As-contaminated soil | Geography-dependent |
| Finfish | Mostly arsenobetaine (organic, nontoxic); dietary risk minimal for As specifically |
| Bivalves and crustaceans | Mixed organic and inorganic species; total-As tests can mislead |
| Rice protein powder and [[ingredients/rice|rice]] syrup | Concentrate iAs from source [[ingredients/rice|rice]]; per-product characterization needed |

[[sources/efsa-arsenic-contam-2009|EFSA 2009]] reports inorganic arsenic exposure across 19 European countries: 0.13 to 0.56 µg/kg b.w./day for average consumers, 0.37 to 1.22 µg/kg b.w./day for 95th-percentile consumers. Children under three years are exposed at 2 to 3 times adult per-kg rates due to greater per-kg food intake.

### What this means for food choice
<!-- audience: consumer -->

For consumers without elevated drinking-water arsenic, [[ingredients/rice|rice]] is the dominant single dietary lever. The leverage points in approximate order of impact:

For infants: [[ingredients/rice|rice]] cereal as a first food is the highest-leverage exposure variable. Alternatives include oat cereal, multi-grain cereal that is not [[ingredients/rice|rice]]-dominant, and barley cereal, all of which carry substantially less inorganic arsenic per serving than [[ingredients/rice|rice]] cereal. The FDA 100 ppb infant [[ingredients/rice|rice]] cereal action level is a non-binding industry guidance, not a consumer-product label commitment; choosing brands that publicly test for and report iAs concentration in their infant [[ingredients/rice|rice]] cereal is the consumer-facing version of this regulation.

For older children and adults: white [[ingredients/rice|rice]] carries less inorganic arsenic than brown [[ingredients/rice|rice]] from the same source, on the order of 50 percent less by mass ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]).

## Regulatory limits
<!-- audience: regulator, educator -->

| Jurisdiction / Body | Type | Value | Page |
| --- | --- | --- | --- |
| EPA (US) | Drinking water MCL (total As) | 10 ppb | [[regulations/epa-arsenic-mcl]] |
| EPA (US) | IRIS oral RfD and cancer slope (iAs) | January 2025 finalized; values pending detailed extraction | [[regulations/epa-iris-inorganic-arsenic-rfd]] |
| FDA (US) | CTZ infant [[ingredients/rice|rice]] cereal action level (iAs) | 100 ppb | [[regulations/fda-iAs-rice-cereal-100ppb]] |
| ATSDR (US) | Chronic oral MRL (iAs) | 0.3 µg As/kg/day | [[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]] |
| OEHHA (US-CA) | Prop 65 cancer listing (iAs) | NSRL pending separate ingest | [[regulations/oehha-arsenic-prop65]] |
| EFSA (EU) | BMDL01 anchors (no PTWI) | Cancer BMDL01 0.3 to 8 µg iAs/kg b.w./day depending on endpoint | [[regulations/efsa-arsenic-contam-2009]] |
| JECFA (international) | PTWI | Withdrawn (15 µg iAs/kg b.w./week deemed inappropriate at JECFA 72nd, 2010) | [[sources/jecfa-82nd-arsenic|JECFA 82nd]] |

### What the reference values mean in practice
<!-- audience: consumer -->

Arsenic is structurally similar to lead in that the major regulatory bodies have explicitly declined to set a single tolerable intake level for inorganic arsenic. JECFA withdrew its PTWI in 2010 (the same meeting that withdrew the Pb PTWI); EFSA reports BMDLs without setting a TWI; EPA IRIS (January 2025) provides quantitative dose-response that the wiki has not yet extracted. The operational anchors are the EPA drinking water MCL (10 ppb), the FDA infant [[ingredients/rice|rice]] cereal action level (100 ppb), and the ATSDR chronic oral MRL (0.3 µg As/kg/day, anchored on dermal effects rather than cancer).

For a 70-kilogram adult, the ATSDR MRL corresponds to approximately 21 µg iAs/day. EFSA's average European adult iAs exposure of 0.13 to 0.56 µg/kg b.w./day corresponds to approximately 9 to 39 µg/day for the same adult, placing typical exposure at roughly half the ATSDR MRL on the low end and approximately twofold above on the high end. EFSA's 95th percentile (0.37 to 1.22 µg/kg b.w./day, or 26 to 85 µg/day for the 70 kg adult) is consistently above the ATSDR MRL. Average European children are exposed at 2 to 3 times adult per-kg rates.

The practical consumer position: there is no internationally harmonized "safe daily inorganic arsenic intake," but the ATSDR MRL of 0.3 µg/kg/day (dermal-effects anchor) and the EPA drinking water MCL of 10 ppb (cancer-driven derivation) are useful benchmarks. Total dietary iAs above 21 µg/day for a 70 kg adult, or above approximately 6 µg/day for a 20 kg child, is approaching or exceeding the most-conservative regulatory threshold currently in force.

## Testing
<!-- audience: educator -->

Inorganic arsenic measurement requires speciation analysis to distinguish iAs from organic arsenic species (arsenobetaine, arsenosugars, MMA, DMA). The standard analytical method is HPLC-ICP-MS, in which liquid chromatography separates the species before ICP-MS detection. Detection limits in the 0.001 to 0.1 µg/L range are achievable ([[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]]).

Biomonitoring for arsenic exposure typically measures urinary inorganic arsenic plus its methylation metabolites (sum of iAs + MMA + DMA, sometimes denoted U-iAs) ([[sources/thomas-2021-arsenic-methylation|Thomas 2021]]).

The FDA Toxic Elements Program uses ICP-MS for total arsenic in food matrices, with HPLC-ICP-MS speciation for the regulatory action level enforcement on infant [[ingredients/rice|rice]] cereal ([[sources/fda-tds-elements-2018-2020|FDA TDS 2018-2020]]).

## Microbiome effects
<!-- audience: educator -->

_Pending dedicated microbiome ingests. Arsenic biomethylation is an area where the gut microbiome is mechanistically implicated: gut bacteria can methylate inorganic arsenic and demethylate methylated species, contributing to interspecies and inter-individual variation in arsenic biotransformation. The [[sources/thomas-2021-arsenic-methylation|Thomas 2021]] review summarizes the AS3MT-pathway evidence (host enzymatic methylation), but the gut microbiome's complementary contribution remains an active research area. The wikibiome-crosswalk anchors are tentatively `arsenic-gut-axis` and `arsenic-microbial-methylation`._

## Historical context: groundwater arsenic and the 10 ppb drinking water rule
<!-- audience: educator, regulator -->

The current EPA drinking water MCL of 10 ppb represents a 5-fold reduction from the 50 ppb standard that had been in place since 1942. The reduction was finalized in 2001 and effective for compliance from January 23, 2006 ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]). EPA's 2001 final rule represents the policy translation of the conclusion that arsenic-induced cancer occurs at exposures well below the 1942-era 50 ppb threshold ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]). The driving evidence base for the chronic oral MRL was the dermal-effects literature in chronically exposed populations including the Tseng et al. Taiwanese cohort ([[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]]).

## Vulnerable populations
<!-- audience: regulator, educator, consumer -->

| Population | Basis |
| --- | --- |
| Infants on [[ingredients/rice|rice]] cereal | First-solid-food exposure; FDA 100 ppb action level addresses this specifically |
| Children under 3 | [[sources/efsa-arsenic-contam-2009|EFSA 2009]]: 2 to 3 times adult per-kg inorganic arsenic exposure |
| Private-well users in arsenic-affected geographies | Outside EPA MCL coverage; concentrations can substantially exceed 10 ppb without public-health monitoring ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]) |
| Individuals with low folate or B12 status | Reduced methylation efficiency increases retention of inorganic species ([[sources/thomas-2021-arsenic-methylation|Thomas 2021]]) |

### If you are in one of these groups
<!-- audience: consumer -->

For parents of infants and young children: choose non-rice or [[ingredients/rice|rice]]-minor first cereals where possible (oat, barley, multi-grain). When [[ingredients/rice|rice]] cereal is consumed, choose products with documented testing programs publishing per-batch inorganic arsenic concentrations. Rinse-and-excess-water cooking practice reduces iAs in cooked [[ingredients/rice|rice]] by approximately 40 to 50 percent.

For pregnant women: the OEHHA Proposition 65 California listing for inorganic arsenic compounds (cancer) applies to consumer products sold in California ([[sources/oehha-arsenic-prop65-listing|OEHHA Prop 65]]).

For private-well users in known arsenic-affected regions: test well water through an EPA-certified laboratory; if levels exceed 10 µg/L, treat or substitute or reduce consumption from that source ([[sources/epa-arsenic-drinking-water-mcl|EPA Arsenic MCL]]).

For frequent [[ingredients/rice|rice]] consumers (gluten-free diets, certain regional cuisines, vegetarians and vegans relying on [[ingredients/rice|rice]] as a primary grain): white [[ingredients/rice|rice]] carries less iAs than brown [[ingredients/rice|rice]] from the same source ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]).

## App-layer integration
<!-- audience: app -->

Machine-readable takeaways from this synthesis for the Heavy Metal Index consumer app pipeline.

The reference-value scale for inorganic arsenic, like lead, is qualitatively complicated by the absence of an internationally harmonized PTWI. The app should reference (a) the EPA drinking water MCL of 10 µg/L for water-source iAs benchmarking, (b) the FDA infant [[ingredients/rice|rice]] cereal action level of 100 ppb for the [[ingredients/rice|rice]]-cereal infant exposure case, (c) the ATSDR chronic oral MRL of 0.3 µg As/kg/day for general dietary benchmarking, and (d) the EFSA cancer BMDL01 range of 0.3 to 8 µg iAs/kg/day depending on endpoint for users wanting an explicit cancer-risk anchor.

Critical app handling: total-arsenic measurements are not interchangeable with inorganic-arsenic measurements. The app must distinguish total-As from iAs in any input data and must not display "percent of MRL" or "percent of MCL" against total-As when the relevant reference is iAs. For seafood especially, total-As measurements substantially overstate iAs because arsenobetaine and other organic species dominate.

Pediatric multipliers for arsenic: 2 to 3x adult per-kg for children under age 3, per [[sources/efsa-arsenic-contam-2009|EFSA 2009]]. Combined with the high GI absorption of inorganic arsenic (80 to 90 percent of soluble forms), pediatric exposure-to-blood translation is approximately linear with intake.

Structured outputs:

- Methylation efficiency (population mean): approximately 60 to 80 percent of iAs methylated to MMA + DMA; varies with AS3MT genotype, folate, and B12 status ([[sources/thomas-2021-arsenic-methylation|Thomas 2021]]).
- Speciation flag: any input must specify whether values are total As or iAs; default treatment of unflagged "arsenic" measurements should warn the user that speciation matters.
- Rice variety multiplier: brown [[ingredients/rice|rice]] is approximately 2x white [[ingredients/rice|rice]] ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]).

Consumer-facing risk communication should never average total-As and iAs into a single "arsenic" number. Acceptable framings: "your estimated weekly inorganic arsenic intake from these products is X µg, which is Y percent of the ATSDR chronic oral MRL for your body weight" or "this product's inorganic arsenic concentration is below the FDA infant [[ingredients/rice|rice]] cereal action level of 100 ppb."

## Open questions
<!-- audience: regulator, educator -->

Three load-bearing open questions for arsenic, surfaced by the current ingest:

First, the January 2025 EPA IRIS Inorganic Arsenic Toxicological Review (EPA/635/R-25/005) is finalized but the wiki has not yet extracted the full quantitative outputs (oral RfD, oral cancer slope factor, inhalation unit risk, critical study identification per endpoint). This is a scoped follow-up: the IRIS document is the most consequential US arsenic regulatory update in decades, and the synthesis page will gain substantial precision when those values land on the regulation page.

Second, the dietary contribution to inorganic arsenic cancer risk at general-population exposure levels remains an area where the regulatory bodies have been cautious about quantitative dose-response. Most of the cancer-epidemiology evidence comes from groundwater-arsenic-affected populations at exposures far above typical US dietary iAs levels; extrapolation to the lower dietary range introduces uncertainty that [[sources/efsa-arsenic-contam-2009|EFSA 2009]] explicitly acknowledged with its BMDL01 range of 0.3 to 8 µg iAs/kg/day depending on endpoint. The [[sources/epa-iris-inorganic-arsenic-2025|EPA IRIS 2025]] reassessment may resolve some of this uncertainty.

Third, the contribution of gut-microbiome-mediated arsenic methylation to inter-individual susceptibility is an active research area with implications for biomarker interpretation and for the operational meaning of "individual exposure" in chronic-disease risk modeling. The [[sources/thomas-2021-arsenic-methylation|Thomas 2021]] review summarizes host-enzyme AS3MT-pathway evidence; microbiome contributions complicate the simple dose-response framing and are flagged for future microbiome-ingest synthesis.

## Sources

- [[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]] — ATSDR, August 2007. Toxicological Profile for Arsenic.
- [[sources/epa-iris-inorganic-arsenic-2025|EPA IRIS iAs 2025]] — EPA, January 2025. IRIS Toxicological Review of Inorganic Arsenic.
- [[sources/efsa-arsenic-contam-2009|EFSA As 2009]] — EFSA CONTAM Panel, 2009. Scientific Opinion on Arsenic in Food.
- [[sources/jecfa-82nd-arsenic|JECFA 82nd]] — [[sources/jecfa-82nd-arsenic|JECFA 82nd meeting]]. Arsenic monograph (WHO FAS 73).
- [[sources/oehha-arsenic-prop65-listing|OEHHA Prop 65 As]] — OEHHA. Inorganic Arsenic Compounds, Proposition 65 cancer listing.
- [[sources/epa-arsenic-drinking-water-mcl|EPA As MCL]] — EPA Office of Water. Final Rule for Arsenic in Drinking Water.
- [[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]] — FDA, August 2020. Inorganic Arsenic in Rice Cereals for Infants Action Level.
- [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]] — FDA / EPA. Advice About Eating Fish (joint guidance).
- [[sources/thomas-2021-arsenic-methylation|Thomas 2021]] — Thomas DJ, 2021. Arsenic methylation: lessons from three decades of research (Toxicology).

See also [[studies/arsenic-primary-literature]] for the citable index of arsenic-focused primary research articles in raw/studies/.
