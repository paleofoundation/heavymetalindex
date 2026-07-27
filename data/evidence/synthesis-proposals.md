---
type: synthesis-proposals
updated: 2026-07-27
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

> **Routing-audit reconciliation, 2026-06-04.** This queue is maintained by hand and the planned `PROPOSE-SYNTHESIS-PAGES` signal is not yet running, so it had drifted behind the routing audit. A cross-check against `data/evidence/cells-needing-synthesis.csv` surfaced one clearly promotable thread not previously queued (tea, immediately below), confirmed the herbal-supplement thread has matured past "seeding" (see its 2026-06-04 update), and flagged three emerging clusters at the end of this section. None of these reached the corpus through this queue; the five synthesis pages established 2026-05-18 (aquaculture, bivalve, cooking-mehg, eu-timeline, se-hg) also bypassed it, which is why they were missing from the public index until 2026-06-04.

### ~~Tea (Camellia sinensis) as a distinct multi-metal bioaccumulation pathway~~ → PROMOTED 2026-06-04 to [[../../wiki/synthesis/tea-multi-metal-bioaccumulation|tea-multi-metal-bioaccumulation]] (8 anchors; the analysis below is the pre-promotion growth trace)

Anchor sources (routing audit: 13 Pb / 13 Cd / 12 Cr source pages on `camellia-sinensis`; roughly eight independent primary studies plus reviews):

- [[wiki/sources/li2021-china-national-tea-reconnaissance|Li 2021]] (national-scale Chinese tea reconnaissance, multi-metal)
- [[wiki/sources/jurowski2023-heavy-metals-green-tea-poland|Jurowski 2023]] (European-market green tea, independent geography)
- [[wiki/sources/li2015-green-tea-jiangxi-al-heavy-metals|Li 2015]] (green tea aluminium and heavy metals, Jiangxi — the aluminium-uptake angle)
- [[wiki/sources/brzezicha-cirocka2016-green-tea-geographic-origins|Brzezicha-Cirocka 2016]] (geographic-origin dependence of tea metal load)
- [[wiki/sources/hu2023-china-tea-heavy-metals|Hu 2023]] (Chinese tea, multi-metal occurrence)

Reviews (kazeminia2023, li2013, salmani2023 herbal teas) and a kombucha/ceramic Pb-leaching adjacency (munilla-garcia2023) round out the cluster.

Thesis (to confirm in a synthesis pass): the tea plant is a distinct heavy-metal bioaccumulation pathway that conventional food-matrix surveillance does not characterise. Camellia sinensis hyperaccumulates aluminium (and fluoride) and takes up Pb, Cd, and Cr in strong dependence on soil chemistry and geographic origin, so as one of the most-consumed beverages worldwide it delivers a metal exposure whose magnitude is set by sourcing region rather than by processing. The brewing-transfer fraction — how much of the dry-leaf metal load actually reaches the cup — is the load-bearing open question the synthesis must resolve, because it determines whether dry-leaf concentrations translate into meaningful consumer exposure.

Why this matters:
- Brand-legal: tea and herbal-tea brands seeking certification need a literature baseline that separates dry-leaf concentration from brewed-infusion exposure; the geographic-origin dependence supports sourcing-based risk arguments.
- Regulator: tea sits across food and botanical-supplement frameworks, and its aluminium and fluoride hyperaccumulation is a regulated endpoint in some jurisdictions and not others.
- Educator: tea is a clean teaching case for soil-to-leaf transfer, hyperaccumulation, and the concentration-versus-exposure distinction.

Promotion readiness: criteria 1 (three or more independent A/B sources), 2 (multiple metals: Pb, Cd, Cr, Al), and 4 (product-category and supplement relevance) appear met on the routing-audit evidence; criterion 3 (non-obvious) rests on the hyperaccumulation and brewing-transfer framing, which a synthesis pass should confirm by reading the anchors in full. Recommended as the next synthesis page to draft.

Suggested synthesis page slug: `tea-multi-metal-bioaccumulation`.

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

### ~~Dietary and herbal supplement Pb contamination (seeding)~~ → PROMOTED 2026-07-27 to [[../../wiki/synthesis/supplement-botanical-lead-pathway|supplement-botanical-lead-pathway]] (corpus screen confirmed 4 independent A/B-tier anchors; growth trace below)

Anchor sources (1 B-tier study; seeding only):

Batch 12 adds: [[wiki/sources/thomas2024-lead-poisoning-ayurvedic-herbal|Thomas 2024]] (case report: Ayurvedic herbal diabetes capsule containing 40,657 ppm Pb — 4,066× the API permissible limit for heavy metals in Ayurvedic preparations — causing clinical Pb poisoning in a Kerala patient, blood Pb 121.20 µg/dL).

Batch 13 adds: [[wiki/sources/inada2023-herbal-medicine-heavy-metal-regulations|Inada 2023]] (comparison of Pb, Cd, Hg, As limits for herbal medicines across 9 pharmacopoeias: JP, EU, USP, ChP, KP, TaiwanP, IP, BP, WHO). This is a B-tier regulatory review, not a contamination measurement, so it does not advance criterion 1. It does provide useful regulatory-comparison context for the synthesis narrative: EU Pb limit for herbal preparations is 5 ppm, WHO limit 20 ppm; the thomas2024 capsule at 40,657 ppm violated even the most permissive limit by a factor of 8,131. The cross-jurisdiction comparison also documents that the hazard has been recognized across regulatory frameworks for decades, strengthening the framing that regulatory surveillance standards exist but enforcement and market testing are inconsistent. Does not move the thread beyond 1 of 4 criteria met.

Thesis (nascent): Dietary supplements and traditional herbal preparations are a distinct Pb exposure pathway that is systematically undercaptured by food-matrix surveillance focused on conventional food categories. The thomas2024 result is extreme (40,657 ppm is several orders of magnitude above the worst findings in any food-matrix category in the current corpus), suggesting that the supplement and herbal medicine supply chain may be operating with testing and regulatory standards that are materially weaker than conventional food supply chains. If two or more independent studies document high Pb in supplements or traditional medicines across different product categories or jurisdictions, the thread warrants a synthesis page targeting brand-legal (supplement brands seeking HMT&C certification) and regulator (harmonization of supplement testing requirements) audiences.

Promotion readiness: 1 of 4 criteria met. Criterion 3 (non-obvious) is met — a 40,657 ppm finding in a consumer product is not derivable from conventional food-chain surveillance. Promote when two or more independent A/B-tier studies document high Pb in supplements or herbal preparations, or when a regulatory body takes an enforcement action against supplement Pb that enters the corpus as a regulation page.

**Update 2026-06-04 (routing-audit reconciliation):** the `herbal-botanicals` routing bucket now carries 19 Pb source pages, but that count conflates spices (which belong to `spice-adulteration-lead-infants`) and general vegetables. Stripping those out leaves roughly four to five genuinely supplement/botanical Pb studies — ciocan2021 and thomas2024 (Ayurvedic), hu2024 (Lycium and Glycyrrhiza), porwollik2026 (Rhodiola, US market), with inada2023 as cross-pharmacopoeia regulatory context. That meets criterion 1. This thread is now promotion-ready pending a synthesis pass that confirms the studies are independent and reads them in full; suggested slug `supplement-botanical-lead-pathway`.

### Emerging clusters (surfaced 2026-06-04 from cells-needing-synthesis.csv, not yet worked against the four criteria)

These crossed the evidence-density threshold in the routing audit but have not been evaluated in full. Recorded so they are not lost:

- ~~**Milk, dairy, and infant formula heavy metals** (Cd 21, Pb 20, tAs 16, tHg 14, Al 12, Ni 11 source pages).~~ The infant-formula slice was promoted 2026-07-27 as [[../../wiki/synthesis/infant-formula-metal-amplification|infant-formula-metal-amplification]] (the non-obvious finding is aluminium dominance plus a soy-and-powder amplification gradient). The broader dairy/milk cadmium slice remains a fold-in to a future dietary-cadmium synthesis, which does not yet exist as a page.
- ~~**Breastmilk heavy metals** (Pb 10, tAs 10).~~ Promoted 2026-07-27 as [[../../wiki/synthesis/breastmilk-heavy-metal-exposure-pathway|breastmilk-heavy-metal-exposure-pathway]]; the corpus screen found six independent bodies of evidence, past the "watch for a third study" bar.
- **Cereals/wheat cadmium** (Cd 39) and **leafy-greens cadmium** (Cd 22). High density, but these are the canonical population-level cadmium drivers and almost certainly belong inside the in-progress cadmium synthesis rather than as standalone pages. Fold in, do not duplicate.

## Promoted

> **2026-07-27 batch (8 pages).** A fresh corpus-promotability screen (re-verifying the four criteria against the current corpus rather than the hand queue, which had drifted ~7 weeks behind with the `PROPOSE-SYNTHESIS-PAGES` signal still not running) surfaced eight promotable threads. One (`supplement-botanical-lead-pathway`) was already queued in Pending; two (`breastmilk-heavy-metal-exposure-pathway`, `infant-formula-metal-amplification`) were queued only as Emerging clusters; five (`dietary-nickel-plant-staple-accumulation`, `tin-canned-food-acidic-matrix-migration`, `wastewater-irrigation-multimetal-crop-pathway`, `organ-meat-cadmium-lead-accumulation`, `cookware-utensil-metal-leaching-pathway`) were surfaced by a gap-hunter and had never been queued. Each page was drafted from full anchor reads and passed an adversarial fact-check before publication (no fabrication found; six pages took precision corrections for overreach). `dual-metal-soil-co-mitigation` and `root-vegetable-cadmium-lead-uptake` were re-checked and remain NOT promotable (still 1 qualifying source, and fails the non-obvious criterion, respectively).

### Dietary nickel is an intrinsic accumulation trait of plant staples, not a contamination signal

Promoted 2026-07-27. Anchor sources: EFSA 2015, Flyvholm 1984, Mania 2020, Han 2024, Ćwieląg-Drabek 2025, Manfredi 2025. Six independent A-tier sources across five jurisdictions and four decades. Strategically load-bearing: Ni is one of the ten HMTc certification analytes. Synthesis page: [[../../wiki/synthesis/dietary-nickel-plant-staple-accumulation|dietary-nickel-plant-staple-accumulation]].

### Inorganic tin in food is a can-format-and-acidity migration contaminant

Promoted 2026-07-27. Anchor sources: Benoy 1971, EU SCF 2002, Blunden 2003, Mania 2021, Buculei 2012. Sn is an HMTc certification analyte; the acute-GI toxicological register and tinplate-migration mechanism are distinct from every other analyte. Synthesis page: [[../../wiki/synthesis/tin-canned-food-acidic-matrix-migration|tin-canned-food-acidic-matrix-migration]].

### Human breastmilk is an infant heavy-metal exposure pathway distinct from formula

Promoted 2026-07-27. Anchor sources: Thoerig 2025, Moon 2025, Chen 2023, Naspolini 2024, Katrynska 2026, Aisyiah 2025. Vulnerable-population pathway invisible to food-matrix surveillance. Synthesis page: [[../../wiki/synthesis/breastmilk-heavy-metal-exposure-pathway|breastmilk-heavy-metal-exposure-pathway]].

### Manufactured infant formula delivers an aluminium-dominated metal load

Promoted 2026-07-27. Anchor sources: Dabeka 2011, Kazi 2009, Burrell 2010, Chuchu 2013, Collado-López 2025, de Paiva 2020, Milani 2023. Seven datasets across five independent research lineages; soy-based and powdered formats amplify the load. Synthesis page: [[../../wiki/synthesis/infant-formula-metal-amplification|infant-formula-metal-amplification]].

### Wastewater irrigation is a single upstream pathway that co-elevates multiple metals

Promoted 2026-07-27. Anchor sources: Ali 2022, Adebayo 2020, Chiutula 2025, Clair-Caliot 2021, Pal 2017. The irrigation water, not the cultivar or soil parent material, is the correlated multi-metal driver in peri-urban leafy greens. Synthesis page: [[../../wiki/synthesis/wastewater-irrigation-multimetal-crop-pathway|wastewater-irrigation-multimetal-crop-pathway]].

### Dietary supplements and traditional herbal preparations are an under-surveilled Pb pathway

Promoted 2026-07-27. Anchor sources: Porwollik 2026, Inada 2023, Ciocan 2021, Thomas 2024. Contamination magnitudes reach thousands of times conventional food limits under materially weaker enforcement. Synthesis page: [[../../wiki/synthesis/supplement-botanical-lead-pathway|supplement-botanical-lead-pathway]].

### Liver and kidney are physiological cadmium accumulation sinks above skeletal muscle

Promoted 2026-07-27. Anchor sources: Rabeey 2025, Kamaly 2023, Morshed 2024 (with Hossain 2023 on lead, and Marcelino 2026 / Khatemeh 2022 on liver as the standard monitored matrix). Offal is a distinct matrix that muscle-focused surveillance does not represent. Synthesis page: [[../../wiki/synthesis/organ-meat-cadmium-lead-accumulation|organ-meat-cadmium-lead-accumulation]].

### Cooking vessels are a post-harvest metal-leaching pathway

Promoted 2026-07-27. Anchor sources: Abdulrasheed 2026, Alrajhi 2021, Rittirong 2018, Sultan 2023, Mahdi 2024. A clean ingredient can become a contaminated meal through the vessel, breaking the assumption that ingredient testing bounds exposure. Synthesis page: [[../../wiki/synthesis/cookware-utensil-metal-leaching-pathway|cookware-utensil-metal-leaching-pathway]].

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

### Spice adulteration with lead chromate as a non-agricultural Pb pathway reaching infants

Promoted 2026-05-13. Anchor sources: Forsyth 2024 (n=356, South Asia, max 2,935 µg/g Pb, Pb:Cr ratio confirming PbCrO4), Forsyth 2019 (n=524, Bangladesh supply chain, 152 interviews, practice documented for 30+ years), Lech 2020 (n=127, US retail, max 7,590 ppb), Troeschel 2024 (CDC MMWR, WanaBana recall, n=566 childhood Pb poisoning cases from cinnamon applesauce), Rylander 2025 (Georgian children, spice use OR 1.47), FDA Import Alert 99-42 (DWPE enforcement since 1990s), Gafner 2026 (PRISMA-ScR scoping review, 48 publications, n=2,235 commercial turmeric samples across 22 countries on 6 continents, 20.0% overall adulteration rate, Bangladesh enforcement success story 47%→0%). Seven sources across six continents, two spice types, supply-chain, epidemiological, and systematic-review evidence. Synthesis page: [[../../wiki/synthesis/spice-adulteration-lead-infants|spice-adulteration-lead-infants]].

### Organic certification is not protective against heavy-metal contamination

Promoted 2026-05-16. Anchor sources: Hands 2024 (US cocoa multi-year n=72, Welch T-test organic Cd statistically significantly higher), Brum 2025 (European flaxseed n=52 ICP-OES, organic Pb mean 652 µg/kg vs conventional 249 µg/kg, p<0.05), Potortì 2026 (Italian-market tahini n=7, sole EU-exceedance outlier T-1 was Turkey-origin organic, Cd 0.35 mg/kg = 3.5× limit and Pb 0.50 mg/kg = 5× fats/oils limit), Słepecka 2017 (Polish cereal products, ecological bran Cd 26.3 mg/kg vs undetectable conventional; ecological flour Cd 12.28 mg/kg), Gardener 2019 (US baby foods Clean Label Project n=564, Wilcoxon p=0.65 Cd / p=0.28 Pb — organic null), Grochowska-Niedworok 2020 (Polish tomatoes, organic higher dry-mass Cd than conventional), Dearing 2025 (NZ vegetables n=153 composites post-Cyclone-Gabrielle, counterexample: organic LOWER Cd p=0.003 and Ni p<0.001). Seven datasets across four continents, six matrices (cocoa, flaxseed, sesame paste, cereal/bran, infant formula and baby food, tomatoes; NZ mixed vegetables as the bounded counterexample). Mechanism rests on input-vs-occurrence orthogonality of USDA NOP and EU 2018/848, single-origin organic sourcing selecting for high-contamination soil regions, manure and natural-phosphate input streams higher in Cd than EU-Cd-limited synthetic NPK, and lower-pH organic farm soils increasing Cd bioavailability. Load-bearing for brand-legal defense, consumer communication, and articulating the complementary-versus-substitutable relationship between organic certification and HMTc. Synthesis page: [[../../wiki/synthesis/organic-certification-not-protective|organic-certification-not-protective]].

### Seaweed and kelp as systematic Cd and As exposure pathways

Promoted 2026-05-16. Anchor sources: Nepper-Davidsen 2023 (Journal of Applied Phycology, NZ Ecklonia radiata 12-site spatial-temporal survey, mean tAs 49 ppm DW, mean Cd 1.2 ppm DW), Hahn 2022 (PLOS ONE, Salish Sea 43-site n=58 three-species survey, bull kelp Cd 5.69 mg/kg DW exceeding international limits at every site, Pb spike 13.2 mg/kg at industrial-adjacent site), EFSA CONTAM 2023 (definitive EU scientific opinion, n=2,093 Cd / 1,988 Pb / 1,934 tAs / 920 iAs / 1,499 tHg occurrence data points, laver Cd 1,675–1,676 µg/kg wet weight, kombu/kelp among highest iAs of any food matrix). Three independent A-tier sources across three geographic regions (Pacific Northwest, New Zealand, EU regulatory dataset) and across brown and red algae species. Mechanism: brown algae bioaccumulate Cd through cell-wall alginate binding and As through arsenosugar metabolism; the contamination is a biological feature of the product class with accumulation factors of 10⁵–10⁶ from typical coastal seawater. Distinct from the organoarsenical-inertness synthesis (which addresses speciation) — this synthesis addresses contamination magnitude and the regulatory surveillance blind spot. Load-bearing for seaweed-snack and kelp-supplement HMTc priority-category selection. Synthesis page: [[../../wiki/synthesis/seaweed-cd-as-contamination|seaweed-cd-as-contamination]].

### Mining-impacted freshwater fish as a globally distributed multi-metal contamination pathway

Promoted 2026-05-16. Anchor sources: Fuentes-López 2025 (Colombia San Jorge River n=326 carnivorous freshwater fish, mean tHg 0.31 µg/g ww, HQ>1 for vulnerable groups), Lucchini 2025 (Amazon Basin review, fish tHg 0.10–4.73 µg/g, hair Hg 3.07–24.6 µg/g in exposed populations), Shumba 2025 (Zambia Kafue River tilapia n=79, mining-area 0.015 mg/kg vs non-mining 0.007 mg/kg, statistically significant), Shaalan 2024 (Egypt Eastern Delta industrial canal Nile tilapia n=120, Pb 33.4 / Cd 2.3 / Hg 10.4 mg/kg — multi-metal co-elevation closing criterion 2), Barquero 2024 (Almadén Spain bass tHg 7.61 mg/kg, legacy mining), Willacker 2023 (US Snake River smallmouth bass, reservoir-reach tHg 76% higher than free-flowing, 52–80% vs 6–17% exceeding consumption benchmark — dam impoundment driver), Leclerc 2023 (Québec run-of-river St. Maurice, periphyton-mediated MeHg/tHg ratio 2.9× higher in impounded reaches), Stahl 2023 (US EPA NRSA probability-based n=353+290, 23.5–26.0% of US river-kilometers contain fish above health-protective Hg), Lepak 2023 (Colorado sport fish 26% exceed FDA advisory), Zhou 2025 (paddy microbial-methylation mechanistic anchor, sulfate-reducing and iron-reducing bacterial methylator clades). Ten A-tier sources across six continents and three contamination drivers (ASGM, industrial pollution, dam impoundment). Multi-metal claim established by Shaalan 2024; mercury-only documentation across the other 9 sources. Complements the established subsistence-fishing-mehg-disparity synthesis: this synthesis is the supply-side dimension (contamination driver), that synthesis is the consumer-side dimension (vulnerable population). Synthesis page: [[../../wiki/synthesis/mining-impacted-freshwater-fish|mining-impacted-freshwater-fish]].

### Climate change is projected to increase methylmercury in marine fish

Promoted 2026-05-16. Anchor sources: Sonke 2023 (Ambio CC BY global biogeochemical-cycle review, $117 billion annual economic-cost framing, 10–30% fish MeHg increase projection under climate warming), Wang 2023 (PNAS coupled climate-biogeochemistry model, RCP8.5 upper-trophic fish MeHg +5–20% by 2100, OMZ-expansion mechanism with methylation rate enhancement up to 2× in high-latitudes), Motta 2022 (PNAS Hg-isotope stable-isotope analysis on North Pacific marine organisms, methylation located in upper-400m marine particles less than 53 µm, mechanistic chain connecting climate forcing to pelagic-fish endpoint). Three independent PNAS-level sources (review + projection + mechanism). FDA action level (1.0 ppm tHg, 1979), EFSA TWI (1.3 µg/kg bw/week, 2012), EPA RfD (0.1 µg/kg/day, 2001), JECFA PTWI (1.6 µg/kg bw/week, 2003) all calibrated against pre-climate-projection baselines. Promotion was borderline on criterion 1 (three independent projections preferred over review+projection+mechanism); the synthesis is the most provisional of the 2026-05-16 batch and is explicitly flagged for resynthesis when a second independent quantitative projection enters the corpus or when IPCC AR7 incorporates ocean-mercury cycling. Synthesis page: [[../../wiki/synthesis/climate-fish-mehg-projections|climate-fish-mehg-projections]].

## Archive (promoted, growth trace preserved)

Entries below were promoted to dedicated synthesis pages; their Pending-section narratives (batch-by-batch evidence accumulation) are kept here as a growth trace. The canonical short-form record lives in the `## Promoted` section; the full page lives in `wiki/synthesis/`.

### ~~Mining-impacted freshwater fish as a global Hg contamination driver~~ → PROMOTED 2026-05-16 (see Promoted section)

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

Batch 13 adds: [[wiki/sources/shaalan2024-nile-tilapia-heavy-metals-egypt|Shaalan 2024]] (Nile tilapia from Egyptian industrial-effluent canal, ICP-OES, n=120; El-Rayah site values Pb 33.4 mg/kg, Cd 2.3 mg/kg, Hg 10.4 mg/kg — extreme multi-metal co-elevation, HI>1 across multiple metals). This is industrial pollution rather than ASGM but directly supports criterion 2 (spans multiple metals): Pb, Cd, and Hg are co-elevated by a factor of 10–1000× beyond food safety limits in a freshwater fish from a contaminated system. The multi-metal pattern in industrial-impacted freshwater fish is now documented for Africa (Zambia ASGM, Egypt industrial), South America (Colombia ASGM, Amazon), and Europe (Almadén Spain). Also adds [[wiki/sources/melnyk2021-mercury-anadromous-fish-penobscot|Melnyk 2021]] (US EPA/ATSDR tHg in 6 anadromous species, Penobscot River ME, 75 composites; sea lamprey mean 628 µg/kg).

Batch 14 adds: [[wiki/sources/oliveira2022-mercury-fish-pregnant-women-tapajos|Oliveira 2022]] (Tapajos River basin, Brazil; piscivorous fish tHg exceeds FDA/EPA 0.5 mg/kg in at least one season; 48% of 110 pregnant women exceed US EPA hair Hg reference dose). This adds further Amazon human-exposure documentation (subsistence fishing endpoint) that strengthens the subsistence-fishing-mehg-disparity page. It is mercury-only and does not advance the multi-metal criterion.

Promotion readiness: 3 of 4 criteria met. Criterion 2 (spans multiple metals) is now adequately supported via the shaalan2024 multi-metal industrial-impacted finding. The remaining gap is that the multi-metal co-elevation is documented for industrial-effluent contexts rather than ASGM specifically; a single ASGM paper reporting co-elevated Pb or Cd alongside Hg would complete this criterion cleanly. Promote when: (a) one ASGM paper reports multi-metal co-elevation (Pb or Cd alongside Hg), or (b) a third ASGM continent (Asia or Oceania) enters the corpus. South America (Colombia, Amazon), Africa (Zambia), and Europe (Almadén) are confirmed for the mining driver.

Archived 2026-05-28: already in `## Promoted` with synthesis page at `wiki/synthesis/mining-impacted-freshwater-fish-as-a-global-hg-contamination-driver`.

### ~~Spice and cinnamon adulteration as a Pb exposure pathway for infants and toddlers~~ → PROMOTED 2026-05-13

Karen provided 4 papers (Forsyth 2024, Forsyth 2019, Lech 2020, FDA Import Alert 99-42) that, combined with existing troeschel2024 and rylander2025, satisfy all 4 promotion criteria. See Promoted section below.

Archived 2026-05-28: already in `## Promoted` with synthesis page at `wiki/synthesis/spice-and-cinnamon-adulteration-as-a-pb-exposure-pathway-for-infants-and-toddler`.

### ~~Seaweed and kelp as systematic Cd and As exposure pathways~~ → PROMOTED 2026-05-16 (see Promoted section)

Anchor sources (3 A-tier studies):

- [[wiki/sources/nepper-davidsen2023-kelp-biomass-composition-nz|Nepper-Davidsen 2023]] (batch 13: Ecklonia radiata kelp, 12 NZ sites, ICP-MS, mean tAs 49 ppm DW, Cd 1.2 ppm DW; significant temporal autocorrelation for As and Hg; iAs speciation absent)
- [[wiki/sources/hahn2022-salish-seaweed-contaminants|Hahn 2022]] (batch 15: bull kelp Nereocystis luetkeana, 43 Salish Sea sites; Cd exceeded international limits at every site, mean 5.69 mg/kg DW; tAs up to 72.5 mg/kg DW; iAs typically 1–5% of tAs; Pb spike to 13.2 mg/kg at industrial-adjacent site)
- [[wiki/sources/efsa2023-heavy-metals-seaweed|EFSA 2023]] (batch 16: EFSA CONTAM Panel scientific opinion on heavy metals in seaweeds and halophytes as food and feed; n=2,093 Cd occurrence data points; laver mean Cd 1,675–1,676 µg/kg DW; full dietary exposure assessment across Cd, Pb, tAs, iAs, tHg for laver, kombu/wakame, spirulina, chlorella; iAs fraction characterised; EU regulatory risk characterisation)

Thesis: Commercial seaweed and kelp products — sold as health foods, dietary supplements, and food ingredients — carry systematically elevated Cd and As that is poorly characterised by the food-safety surveillance frameworks applied to conventional food categories. The Cd finding is confirmed across three independent geographic regions (Pacific Northwest, New Zealand, European regulatory dataset) and spans multiple commercial species. The arsenosugar/iAs speciation issue in seaweed is already covered in the promoted organoarsenical-inertness-assumption synthesis page; the Cd contamination angle is distinct and not currently captured in any wiki synthesis page. EFSA 2023 is the definitive regulatory anchor: its n=2,093 Cd occurrence dataset and full EU dietary exposure assessment document the risk at a population-regulatory level.

Promotion criteria met:
1. Three independent A-tier sources ✓
2. Spans multiple metals (Cd and As across multiple species and regions) ✓
3. Non-obvious: consumer seaweed products frequently marketed without heavy metal characterisation; Cd levels not derivable from terrestrial food-chain surveillance; iAs/tAs speciation non-substitutability (iAs typically 1–5% of tAs) compounds risk underestimation ✓
4. Actionable: EFSA CONTAM opinion indicates active EU regulatory attention; HMT&C ingredient pages for seaweed-containing products lack populated Cd profiles; ingredient Cd exceedances are material for brand-legal and certification audiences ✓

Suggested synthesis page slug: `seaweed-cd-as-contamination`.

Archived 2026-05-28: already in `## Promoted` with synthesis page at `wiki/synthesis/seaweed-cd-as-contamination`.

### ~~Climate change will increase MeHg in marine fish~~ → PROMOTED 2026-05-16 (see Promoted section)

Anchor sources (2 A-tier projection studies + 1 mechanistic anchor):

- [[wiki/sources/sonke2023-mercury-global-change|Sonke 2023]] (batch 13: Ambio CC BY; global Hg biogeochemical cycling review; climate warming projected to raise fish MeHg 10–30%; US$117B annual economic cost attributed to Hg; background rate of global MeHg accumulation established)
- [[wiki/sources/wang2023-climate-marine-mercury|Wang 2023]] (batch 16: PNAS biogeochemical model; ocean warming and deoxygenation under RCP8.5 scenario projected to increase MeHg in upper-trophic fish 5–20% by 2100; ocean minimum zone (OMZ) expansion drives anaerobic methylation rate increase as primary mechanism)
- [[wiki/sources/motta2022-marine-hg-isotopes|Motta 2022]] (batch 16: PNAS stable-isotope study; MeHg in North Pacific pelagic food web traced to marine particles <53 µm rather than dissolved Hg; revises mechanistic understanding of pelagic fish MeHg bioaccumulation; relevant to why climate-driven OMZ changes affect particulate-phase methylation rates)

Thesis (nascent): Current regulatory fish advisory frameworks and certification program seafood standards are calibrated against historical MeHg distributions in commercially harvested fish. Two independent PNAS-level modelling studies now project that ocean warming and deoxygenation will increase MeHg in upper-trophic fish by 5–30% by 2100, with the mechanism confirmed as expanded anaerobic methylation in oxygen minimum zones rather than increased total Hg loading. The Motta 2022 mechanistic study provides the particle-phase pathway that connects OMZ expansion to pelagic food-web MeHg. If this projection is correct, present-day HMT&C seafood standards, FDA/EPA fish advisories, and EFSA tolerances are all calibrated against a baseline that is shifting upward — a forward-looking regulatory blind spot.

Why this matters:
- Brand-legal: seafood brands using current FDA/EPA consumption advisories as the ceiling for safety arguments may face a moving target; documenting the projection literature now establishes the wiki as the reference for this forward-looking risk.
- Regulator: existing regulatory frameworks are based on historical data; climate-MeHg projections are not yet incorporated into US or EU risk characterisations.
- Educator: illustrates why heavy metal thresholds are not permanent and why ongoing surveillance matters.

Promotion readiness: 2 of 4 criteria met. Criterion 1 (≥3 sources) is borderline — sonke2023 and wang2023 are independent projection studies; motta2022 is mechanistic rather than a projection; a third independent forward-looking study would complete criterion 1. Criterion 3 (non-obvious) is met. Promote when: a third independent peer-reviewed projection confirms the direction and magnitude of climate-driven fish MeHg increase.

Suggested synthesis page slug: `climate-fish-mehg-projections`.

Archived 2026-05-28: already in `## Promoted` with synthesis page at `wiki/synthesis/climate-fish-mehg-projections`.


## Retired (not synthesis-page-worthy)

Entries below were proposed as synthesis-findings-page candidates but explicitly recommend against promotion in their body text. They are kept here for transparency; the recommended follow-up action lives inside each block.

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

Retired 2026-05-28: classification confirmed as methodology-note rather than synthesis-page-worthy per the recommendation in the block body.


## Workflow notes

When a candidate is ready to promote, the workflow is:

1. Move its block from `## Pending candidates` to `## Promoted` with a brief one-line summary and a link to the synthesis page that will be created.
2. Draft the synthesis page at `wiki/synthesis/<topic-slug>.md` using the template established in [[../../wiki/synthesis/climate-metals-tradeoffs|the climate-metals page]].
3. Add the new page to the index in `wiki/synthesis.md` under `## Synthesis findings pages`.
4. Commit with a message like `synthesis: promote <topic> — N anchor sources, brand-legal-facing`.
5. The synthesis page is provisional. Re-synthesis is expected when two corroborating studies enter the corpus after promotion, or when an anchor source is contradicted by later evidence.
