---
title: "Cereals"
type: ingredient
commodity: cereals
label: "Cereals"
aliases: [cereal grains, grain foods, grain-based foods]
category: grain
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-uptake, geography, processing, fortification]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/oat]]", "[[ingredients/wheat]]"]
used_in_products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 8
---

# Cereals

Cereals is the regulatory umbrella term used by EFSA, JECFA, and Codex Alimentarius for grain-based human foods. It encompasses rice, wheat, oat, maize, barley, rye, and the products derived from them. Per-commodity contamination profiles live on the individual grain pages ([[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], etc.); this page is the structural parent that lets regulatory documents addressing "cereals" as a category route correctly.

The cereals category is the dominant cadmium dietary-exposure pathway in EFSA and JECFA assessments and a primary source of inorganic arsenic exposure where rice-based products are prevalent. Cereal-based infant foods (referenced in EU Commission Regulation 2023/915 and FDA Closer-to-Zero guidance) carry tighter regulatory limits than adult cereal products because of the higher per-kg-body-weight intake in early life.

## Routing

This node is the umbrella for grain-based regulatory documents. Per-grain detail belongs on [[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], [[ingredients/corn]], and related pages. Product-level routing flows through [[products/baby-cereals-dry-rice-based]] and [[products/baby-cereals-dry-non-rice]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. This umbrella page carries no per-commodity values; concentrations and exposure data live on the individual grain pages and on the regulatory pages referenced below.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Codex CCCF17 session report; initiated a new Code of Practice for Cd in Foods with cereal and rice annexes as priority commodities, establishing the current international governance trajectory for cereals Cd limits |
| 2 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/altunay2023-cadmium-food-turkey\|Altunay et al. 2023]]. *Ultra-Sensitive Determination of Cadmium in Food and Water by Flame-AAS after a New Polyvinyl Benzyl Xanthate as an Adsorbent Based Vortex Assisted Dispersive Solid-Phase Microextraction: Multivariate Optimization*, Foods 2023, 12, 3620 | 2023 | Peer-reviewed | Cd measurement by FAAS in 13 Turkish market foods including oat, corn, wheat, and three rice variants; values are anomalously high relative to EU surveillance data and should be treated with caution pending curator review |
| 4 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA CONTAM Panel Ni risk assessment using 47,000+ European occurrence data points; cereals identified as a dietary Ni contributor alongside cocoa, peanuts, and lentils, with TDI set at 13 µg/kg bw/day |
| 6 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology reference chapter; synthesizes cereal grains' role as a major population-level Cd exposure pathway and anchors the toxicokinetic frame for interpreting cereal Cd concentration data |
| 7 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA document establishing the cadmium PTMI of 25 µg/kg bw/month; cereals and rice identified as the primary dietary Cd exposure pathways underpinning this international reference value |
| 8 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA CONTAM Panel Pb risk assessment; identifies cereals as the dominant dietary Pb contributor in European adults, with child exposure estimates (0.80–3.10 µg/kg bw/day) driven substantially by cereal-based foods |
| 9 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Panel Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; cereals identified as the largest single dietary Cd exposure pathway for European adults and the anchor for EU cereal Cd maximum levels |
| 10 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative international Codex standard setting MLs for Cd, Pb, Hg, iAs, and Sn across food commodities; cereals and rice are the primary Cd ML categories and the international regulatory reference against which domestic limits are compared |
<!-- END: hmi-source-legend -->

