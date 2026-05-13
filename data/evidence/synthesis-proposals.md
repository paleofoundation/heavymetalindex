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

Batch 12 adds: [[wiki/sources/lucchini2025-amazon-mercury-co-exposures|Lucchini 2025]] (Amazon basin scoping review; fish tHg 0.10–4.73 µg/g; hair Hg 3.07–24.6 µg/g in exposed populations; ASGM as primary anthropogenic Hg source; framing includes co-exposures with agrochemicals and microplastics). This adds further South American ASGM documentation but is mercury-only and does not resolve the multi-metal criterion.

Promotion readiness: 3 of 4 criteria met. Criterion 2 (spans multiple metals, ingredients, or products) is borderline — this is a mercury-only thread focused on freshwater fish. Promote when one more study corroborates the multi-metal dimension (As, Pb, or Cd co-elevation in ASGM contexts) or when a third continent's ASGM data enters the corpus. Note: South America (Colombia, Amazon) and Africa (Zambia) are documented; a third ASGM continent (Asia or Oceania) would satisfy the geographic trigger regardless of the multi-metal gap.

### Simultaneous Pb+As co-mitigation via single soil amendment intervention

Anchor sources (1 A-tier study; seeding):

- [[wiki/sources/sowers2023-jarosite-pb-as-remediation|Sowers 2023]] (PNAS: jarosite mineral treatment reduces soil Pb bioaccessibility from ~65% to <10% and As bioaccessibility from ~70% to <10% simultaneously in a single application)

Thesis: Most soil remediation and agricultural mitigation strategies address one heavy metal at a time, and often involve trade-offs (raising soil pH to reduce Pb bioaccessibility can increase As mobility; adding phosphate to immobilise Pb can mobilise As). Sowers 2023 is the first PNAS-level report of a single mineral amendment — jarosite, an iron(III) sulfate mineral that forms in acid mine drainage — that simultaneously immobilises both Pb and As via distinct but co-operative mechanisms (Pb adsorption/substitution into jarosite structure; As(V) adsorption onto ferric iron surface sites). The reduction from approximately 65–70% bioaccessibility to below 10% for both metals in a single treatment is the strongest co-mitigation magnitude result in the current corpus for any two-metal combination.

Why this matters:
- Brand-legal: co-contamination of Pb and As in the same soil and crop matrix is common (mining-adjacent soils, legacy urban soils, high-As paddy soils with co-occurring Pb from airborne deposition). A single intervention that addresses both reduces the remediation cost calculus and strengthens the argument that suppliers in co-contaminated regions can achieve multi-metal threshold compliance.
- Regulator: if replicated, jarosite treatment could inform voluntary Code of Practice requirements for multi-metal management in soil remediation, analogous to CXC 81-2022 for cocoa Cd.
- Educator: illustrates the co-mitigation vs trade-off landscape in soil chemistry; the contrast with pH manipulation (which helps Pb but can worsen As) is a teaching example for why multi-metal thinking is necessary.

Promotion readiness: 1 of 4 criteria met (criterion 3, non-obvious from any single source; the significance is the magnitude and dual-metal nature of the result). Criterion 1 requires 2 additional corroborating studies. Criterion 2 is borderline — this is a soil chemistry result, not yet demonstrated in food matrix concentrations. Promote when: (a) a field study shows jarosite treatment reduces Pb and As in crop tissue simultaneously, or (b) two additional soil amendment studies achieve comparable dual-metal bioaccessibility reductions via any mechanism, or (c) a regulatory body or Code of Practice adopts a jarosite-class treatment recommendation.

Suggested synthesis page slug: `dual-metal-soil-co-mitigation` (broader framing that can absorb corroborating papers on any co-mitigation approach, not just jarosite).

### Spice and cinnamon adulteration as a Pb exposure pathway for infants and toddlers

Anchor sources (2 A/B-tier studies; seeding):

Batch 12 adds: [[wiki/sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] (CDC MMWR, WanaBana/Schnucks/Weis cinnamon applesauce recall; n=566 elevated BLL cases; median BLL 7.2 µg/dL, range 3.5–39.3; Pb in cinnamon 1.9–3.0 ppm; lead chromate identified as adulterant; 55% of cases in children under 2 years; largest documented infant/toddler Pb poisoning event from a processed food product in recent US history); [[wiki/sources/rylander2025-georgia-children-blood-lead|Rylander 2025]] (EHP; n=1,635 Georgian children 5–7 years; 39.8% BLL ≥3.5 µg/dL; spice use independent predictor OR approximately 1.47; VAMS blood collection; corroborates spice as a cross-context Pb exposure vector, not limited to the US recall event).

Thesis: Lead chromate is used industrially as a yellow-orange pigment and, in some supply chains, as an adulterant in spices including cinnamon, turmeric, and chili pepper. The WanaBana recall (troeschel2024) documents that a processed food product targeting infants and toddlers — cinnamon applesauce pouches — reached hundreds of thousands of US households with Pb levels generating median BLL 7.2 µg/dL before detection. The Georgian surveillance data (rylander2025) shows that elevated BLL in children is independently associated with spice consumption in a completely different context, suggesting the WanaBana event reflects a broader pattern of spice-sourcing vulnerability rather than a single isolated adulteration incident. The mechanism (lead chromate as a density or coloring adulterant in spice supply chains) is distinct from the soil-uptake and ASGM mechanisms that dominate other wiki threads, and the exposure population (infants and toddlers via flavored purees and blended products) is the highest-concern demographic.

Why this matters:
- Brand-legal: any food brand that uses cinnamon or spice flavorings in products targeting infants and toddlers has a supply-chain testing obligation that the WanaBana case makes visible and defensible to courts. The wiki's role is to document what the literature says the hazard is, so that HMT&C testing requirements for spice ingredients can be anchored to evidence.
- Regulator: the CDC MMWR establishes this as a documented regulatory event. The thread's synthesis value is showing it is not isolated.
- Educator: explains how a non-agricultural contamination mechanism (deliberate adulteration with an industrial chemical) reaches the food chain and why ingredient-level testing is required in addition to finished-product testing.

Promotion readiness: 2 of 4 criteria met. Criterion 3 (non-obvious) and criterion 4 (strategic relevance) are met. Criterion 1 requires at least one additional independent A-tier or high-quality B-tier study; a third paper documenting spice adulteration as a Pb source in a third context (turmeric adulteration, another national surveillance study showing spice-BLL association) would satisfy criterion 1. Criterion 2 is borderline — this is primarily a Pb thread (lead chromate as adulterant), though it spans multiple spice types and processed food product formats. Promote when a third independent study enters the corpus. Suggested slug: `spice-adulteration-lead-infants`.

### Dietary and herbal supplement Pb contamination (seeding)

Anchor sources (1 B-tier study; seeding only):

Batch 12 adds: [[wiki/sources/thomas2024-lead-poisoning-ayurvedic-herbal|Thomas 2024]] (case report: Ayurvedic herbal diabetes capsule containing 40,657 ppm Pb — 4,066× the API permissible limit for heavy metals in Ayurvedic preparations — causing clinical Pb poisoning in a Kerala patient, blood Pb 121.20 µg/dL).

Thesis (nascent): Dietary supplements and traditional herbal preparations are a distinct Pb exposure pathway that is systematically undercaptured by food-matrix surveillance focused on conventional food categories. The thomas2024 result is extreme (40,657 ppm is several orders of magnitude above the worst findings in any food-matrix category in the current corpus), suggesting that the supplement and herbal medicine supply chain may be operating with testing and regulatory standards that are materially weaker than conventional food supply chains. If two or more independent studies document high Pb in supplements or traditional medicines across different product categories or jurisdictions, the thread warrants a synthesis page targeting brand-legal (supplement brands seeking HMT&C certification) and regulator (harmonization of supplement testing requirements) audiences.

Promotion readiness: 1 of 4 criteria met. Criterion 3 (non-obvious) is met — a 40,657 ppm finding in a consumer product is not derivable from conventional food-chain surveillance. Promote when two or more independent A/B-tier studies document high Pb in supplements or herbal preparations, or when a regulatory body takes an enforcement action against supplement Pb that enters the corpus as a regulation page.

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

### The organoarsenical inertness assumption is increasingly contested

Promoted 2026-05-13. Anchor sources: Davydiuk 2023 (biomonitoring confound), Liu 2023 (digestion-phase As(V) conversion), Kagawa 2023 (n=2,709 Japanese cohort hypertension signal), Raab 2024 (microalgae arsenolipids 57% of tAs), Walenta 2024 (novel arsenobetaine amide in mushrooms), Sim 2024 (seaweed iAs >50% tAs), Hull 2023, Sadee 2023. Eight A-tier anchors spanning seafood, fungi, microalgae, and seaweed. Synthesis page: [[../../wiki/synthesis/organoarsenical-inertness-assumption|organoarsenical-inertness-assumption]].

## Workflow notes

When a candidate is ready to promote, the workflow is:

1. Move its block from `## Pending candidates` to `## Promoted` with a brief one-line summary and a link to the synthesis page that will be created.
2. Draft the synthesis page at `wiki/synthesis/<topic-slug>.md` using the template established in [[../../wiki/synthesis/climate-metals-tradeoffs|the climate-metals page]].
3. Add the new page to the index in `wiki/synthesis.md` under `## Synthesis findings pages`.
4. Commit with a message like `synthesis: promote <topic> — N anchor sources, brand-legal-facing`.
5. The synthesis page is provisional. Re-synthesis is expected when two corroborating studies enter the corpus after promotion, or when an anchor source is contradicted by later evidence.
