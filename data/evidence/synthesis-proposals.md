---
type: synthesis-proposals
updated: 2026-05-13
audience: [internal]
noindex: true
---

# Synthesis findings — candidate threads

This file is the queue of candidate threads for promotion to dedicated synthesis findings pages at `wiki/synthesis/<topic-slug>.md`. Each candidate is evaluated against the four criteria in [[../../wiki/synthesis|the synthesis index]]:

1. At least three independent A-tier or high-quality B-tier sources support the finding.
2. The finding spans multiple metals, ingredients, or products.
3. The finding is not obvious from any single source page.
4. The finding has strategic relevance for at least one wiki audience (brand-legal, regulator, educator).

When all four are met, the candidate moves to `## Promoted` below with a link to its synthesis page, and the page itself is drafted following CLAUDE.md Part 15 prose conventions.

Candidates can be added by any session that reads the corpus. Ingest sessions surface candidates in batch report `Synthesis threads` notes; the orchestrator's planned `PROPOSE-SYNTHESIS-PAGES` signal will surface candidates from routing-audit clustering; Karen adds candidates ad hoc.

## Pending candidates

### Mining-impacted freshwater fish as a global Hg contamination driver

Anchor sources (7+ A-tier studies, growing):

Batch 9 adds: [[wiki/sources/shumba2025-tilapia-mercury-zambia-mining|Shumba 2025]] (Zambia artisanal gold mining, tilapia tHg 0.12–1.94 µg/g); [[wiki/sources/stahl2023-us-river-fish-mercury|Stahl 2023]] (US NRSA rivers, n=1,250+, 8% exceed FDA 1.0 µg/g); [[wiki/sources/lepak2023-sport-fish-mercury-colorado|Lepak 2023]] (Colorado sport fish, 26% exceed FDA advisory for vulnerable groups); [[wiki/sources/marriott2023-lake-victoria-aquaculture-biogeochemistry|Marriott 2023]] (Lake Victoria, industrial + agricultural runoff signatures); [[wiki/sources/hussein2023-freshwater-marine-fish-egypt|Hussein 2023]] (Egyptian freshwater fish, Pb exceedances vs EU ML).

Pre-existing anchors: [[wiki/sources/fuenteslopez2025-colombia-freshwater-fish-mercury|Fuentes-López 2025]] (Colombia artisanal gold mining, La Mojana); [[wiki/sources/barquero2024-almaden-freshwater-bass-mercury|Barquero 2024]] (Almadén mine district Spain, 7.61 mg/kg tHg in bass); plus Li 2024 (PNAS global model) and Wu 2025 (PNAS China projection) already anchoring the [[wiki/synthesis/subsistence-fishing-mehg-disparity]] page.

Thesis: Industrial mining (hard rock and coal), artisanal and small-scale gold mining (ASGM), and legacy contamination from decommissioned mine sites each produce elevated dissolved Hg in freshwater systems, where microbial methylation (now mechanistically documented by [[wiki/sources/zhou2025-microbial-methylmercury-rice-china|Zhou 2025]] for paddy systems) converts inorganic Hg to MeHg that biomagnifies up the food chain. The pattern is global (Africa, Asia, Europe, North and South America documented) and affects both subsistence and recreational fisheries. Regulatory thresholds for fish consumption are set against aggregate population means, not against populations with elevated consumption of fish from contaminated systems.

Why this matters:
- Brand-legal: the subsistence-fishing synthesis page identifies the vulnerable population; this candidate identifies the contamination source mechanism and its global distribution, enabling the defense argument that HMTc seafood standards calibrated to commercial market supply chains cannot rely on existing FDA/EFSA limits to protect populations reliant on artisanal or recreational catch.
- Regulator: the geographic scope (global, confirmed across six continents) is the non-obvious finding. Regulatory frameworks are mostly national; the cross-national scope of the same driver is a synthesis-page contribution.
- Educator: explains why "follow FDA fish advisory" does not apply uniformly to all fish consumption contexts.

This candidate is distinct from the promoted subsistence-fishing-mehg-disparity page, which focuses on population vulnerability. This candidate focuses on the contamination driver and geographic scope.

Batch 11 adds: [[wiki/sources/willacker2023-mercury-fish-snake-river|Willacker 2023]] (Snake River reservoirs; thermal stratification drives tHg 76% higher in fish; 52–80% exceed consumption benchmarks vs 6–17% in free-flowing reaches); [[wiki/sources/leclerc2023-methylmercury-periphyton-river|Leclerc 2023]] (Quebec run-of-river dam, periphyton methylation hotspots, MeHg/tHg ratio 2.9× in impounded reaches); [[wiki/sources/paez-osuna2024-fish-mercury-selenium-mexico|Paez-Osuna 2024]] (El Comedero dam Mexico post-mine-tailing spill, elevated MeHg/tHg ratio). These add dam-related impoundment as a Hg methylation driver that is mechanistically parallel to ASGM. The synthesis page should present both drivers (mining and impoundment) as co-mechanisms for the same anoxic-bottom-sediment methylation pathway.

Promotion readiness: 3 of 4 criteria met. Criterion 2 (spans multiple metals, ingredients, or products) is borderline — this is a mercury-only thread focused on freshwater fish. Willacker 2023 and Paez-Osuna 2024 strengthen the thread but do not yet resolve the multi-metal gap. Promote when one more study corroborates the multi-metal dimension (As, Pb, or Cd co-elevation in ASGM contexts) or when a third continent's ASGM data enters the corpus.

### Seafood arsenic speciation: "organic As is benign" is increasingly contested

**Promotion readiness: all 4 criteria met (updated batch 11). Ready to promote.**

Anchor sources (8 A-tier studies across batches 9-11):

- [[wiki/sources/davydiuk2023-arsenosugars-methylation|Davydiuk 2023]] (critical review: arsenosugars/arsenolipids from seafood elevate urinary DMA independently of iAs methylation efficiency, confounding biomonitoring)
- [[wiki/sources/liu2023-arsenic-seafood-digestion|Liu 2023]] (in vitro: organic As in crab/scallop converts to As(V) 2–3× during GI digestion via pH-dependent free radical mechanism)
- [[wiki/sources/kagawa2023-fish-arsenic-hypertension-japan|Kagawa 2023]] (J-MICC Daiko, n=2,709: serum tAs from fish — 98% arsenobetaine — associated with dose-dependent hypertension risk)
- [[wiki/sources/hull2023-arsenic-lake-foodweb|Hull 2023]] (Puget Sound legacy lakes: sediment As predicts fish iAs; %iAs increases at lower trophic levels, organic As enriches at higher)
- [[wiki/sources/sadee2023-arsenic-speciation-vegetables|Sadee 2023]] (review of HPLC-ICP-MS speciation methods for vegetable As)
- [[wiki/sources/walenta2024-arsenic-speciation-mushrooms|Walenta 2024]] (batch 11: novel arsenobetaine amide discovered in mushrooms — extends unexpected organoarsenical metabolite pattern to terrestrial fungi)
- [[wiki/sources/raab2024-arsenolipids-chlamydomonas|Raab 2024]] (batch 11: first AsSugPhytol report in any organism; 57% of tAs as arsenolipids in microalgae — affects spirulina, chlorella, algae protein ingredients)
- [[wiki/sources/sim2024-inorganic-arsenic-seaweed-hplc|Sim 2024]] (batch 11: Laminaria digitata iAs >50% of tAs; HPLC-ICP-MS method validated for EU 2023/915 seaweed iAs compliance testing)

Thesis: Regulatory and public health guidance treats marine organoarsenicals (principally arsenobetaine) as toxicologically inert and uses urinary %DMA as a proxy for inorganic arsenic methylation efficiency in biomonitoring studies. The accumulating evidence challenges both assumptions: (1) arsenosugars and arsenolipids from seafood are metabolized to DMA independently of iAs methylation pathways, inflating apparent methylation efficiency in populations with high seafood intake; (2) organic As forms in seafood partially convert to As(V) during GI digestion via pH-dependent oxidation, meaning the speciation at consumption does not equal speciation at absorption; (3) epidemiological evidence from a large Japanese cohort shows dose-dependent hypertension association even with serum tAs dominated by arsenobetaine; (4) the pattern extends beyond marine fish to terrestrial fungi (novel arsenobetaine amide in mushrooms) and microalgae-derived ingredients (57% arsenolipids in Chlamydomonas; >50% iAs fraction in kelp). Together these findings span four food matrix types (seafood, mushrooms, microalgae, seaweed) and two exposure pathways (dietary intake and urinary biomonitoring), satisfying criterion 2.

Why this matters:
- Brand-legal: products using microalgae-derived protein, spirulina, chlorella, or kelp ingredients that test only for tAs may be undercharacterizing the iAs-equivalent health-relevant fraction. The EU's 2023/915 seaweed iAs limit is now operative; the sim2024 method is the compliance-relevant tool.
- Regulator: biomonitoring reference values derived from seafood-eating populations using urinary %DMA as a methylation index may systematically underestimate iAs exposure. Organoarsenical metabolism from diet is not controlled in standard biomonitoring designs.
- Educator: teaches the non-substitutability of iAs and tAs (CLAUDE.md Part 14) with concrete mechanistic examples; illustrates why "fish arsenic is arsenobetaine and therefore safe" is an incomplete framing.

Suggest synthesis page slug: `organoarsenical-inertness-assumption`

### Egypt regulatory baseline as a multi-jurisdiction interpretation hazard

Anchor sources (meta-finding about corpus pattern, not a single-paper thesis):

- [[../../wiki/sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim 2024]], [[../../wiki/sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim 2025]], [[../../wiki/sources/kamouh2024-heavy-metals-chicken-meat-egypt|Kamouh 2024]], [[../../wiki/sources/hussein2024-toxic-metals-canned-fish-egypt|Hussein 2024]], [[../../wiki/sources/erol2025-turkish-cheese-metals|Erol 2025 Turkish cheese]] (geographic neighbor, similar regulatory regime).
- Additional Egyptian and Middle Eastern food-safety surveys throughout batches 6-9.

Thesis: A cluster of Egyptian and neighboring-jurisdiction food-safety surveys document elevated Pb, Cd, and other metal concentrations relative to EU or Codex limits. The framing in most of these papers reports the exceedance against EU limits even though Egyptian and Turkish national limits are systematically lower or absent for the matrices studied. A reader of the wiki, encountering many Egyptian papers reporting "exceedance," may incorrectly infer that Egyptian food supply is uniquely contaminated when the operative finding is that Egyptian regulatory baselines do not yet match EU or Codex frameworks, and that papers are using EU as a comparative reference rather than enforcing it.

Why this matters:

- Brand-legal: avoids the wiki being read as making a jurisdiction-specific contamination claim that is actually a regulatory-floor artifact.
- Regulator: case for harmonization between national food-safety reference values and Codex.
- Educator: introduces the methodological care needed when reading multi-jurisdiction occurrence data.

Status: **recommendation — do not promote as a synthesis findings page.** The Egypt-baseline observation is a methodological note about how to read multi-jurisdiction occurrence data, not a finding about contamination patterns or regulatory architecture. It fails the third promotion criterion ("the finding is not obvious from any single source page"): once a reader knows that Egyptian national reference values differ from EU and Codex limits, the observation that papers using EU as a comparative benchmark report "exceedances" follows directly without any synthesis pass adding value. The pattern repeats across many jurisdictions (Iran, Pakistan, Nigeria, multiple sub-Saharan African countries); singling out Egypt risks framing it as a country-specific issue when it is a generic methodological care item.

Recommended placement instead:

1. Add a one-paragraph methodology note to [[../../wiki/CLAUDE|CLAUDE.md]] Part 14 (conventions) covering how multi-jurisdiction occurrence data should be reported on wiki source pages: state the reference value the paper compared against; state the operative national reference value for the matrix in the originating jurisdiction (if known); flag where the two differ materially. This is a one-paragraph addition with no synthesis-page overhead.

2. Add a sidebar to [[../../wiki/regulations]] or to a dedicated [[../../wiki/regulations/multi-jurisdiction-comparison]] page once enough national reference-value pages exist to support it. This is the right home long-term and is parallel work to the synthesis-page architecture, not a substitute for it.

3. On each product-category and ingredient page where multiple non-EU non-Codex jurisdictions contribute evidence, the page's methodology section should briefly note that exceedance framings reflect the cited reference value, not necessarily the operative national reference value. This is per-page work that happens during the synthesis pass on each ingredient or product, not synthesis-page work.

Resolution: this entry can be retired from the candidate queue. Implementing the three recommendations above is the right follow-up, but each is a small ingest-time or methodology-time intervention rather than a synthesis page in its own right.

## Promoted

### Climate adaptation creates new heavy-metal trade-offs

Promoted 2026-05-13. Anchor sources: Seyfferth 2025, Limmer 2024, Wu 2025. Synthesis page: [[../../wiki/synthesis/climate-metals-tradeoffs|climate-metals-tradeoffs]].

### Subsistence fishing methylmercury as a global vulnerable-population pattern

Promoted 2026-05-13. Anchor sources: Li 2024 (PNAS), Wu 2025 (PNAS), Auzier-Guimarães 2025. Synthesis page: [[../../wiki/synthesis/subsistence-fishing-mehg-disparity|subsistence-fishing-mehg-disparity]].

### Single-metal regulatory limits systematically underprotect

Promoted 2026-05-13. Anchor sources: Suomi 2023 (Finnish cumulative HI), JECFA 91st 2022 (Cd PTMI saturation in children), EFSA 2024 (iAs MOE below 1 across adult European range). Synthesis page: [[../../wiki/synthesis/combined-exposure-underprotection|combined-exposure-underprotection]]. Note: cite-key for the Suomi anchor is `suomi2023-finland-dietary-metals-cumulative` (not `-cumulative-dietary-hi` as originally listed in the pending entry).

### US chocolate lead temporal decline

Promoted 2026-05-13. Anchor sources: Abt 2018 (US baseline), Hands 2024 (multi-year trajectory), Zhao 2024 (global mechanistic context). Synthesis page: [[../../wiki/synthesis/us-chocolate-lead-temporal-decline|us-chocolate-lead-temporal-decline]].

## Workflow notes

When a candidate is ready to promote, the workflow is:

1. Move its block from `## Pending candidates` to `## Promoted` with a brief one-line summary and a link to the synthesis page that will be created.
2. Draft the synthesis page at `wiki/synthesis/<topic-slug>.md` using the template established in [[../../wiki/synthesis/climate-metals-tradeoffs|the climate-metals page]].
3. Add the new page to the index in `wiki/synthesis.md` under `## Synthesis findings pages`.
4. Commit with a message like `synthesis: promote <topic> — N anchor sources, brand-legal-facing`.
5. The synthesis page is provisional. Re-synthesis is expected when two corroborating studies enter the corpus after promotion, or when an anchor source is contradicted by later evidence.
