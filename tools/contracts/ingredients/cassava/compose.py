"""Compose the cassava synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/extraction/ and to
primary/gemsfood-cassava-records.csv (WHO GEMS/Food individual results).
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava'

gems = 'who-gemsfood-heavy-metal-contaminants'; eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'
jac = 'bhunia2023-open-access-potential-toxic-levels-of-cyanide'; alb = 'albishi2026-cassava-flour-biofortification'
iya = 'iyabo2015-ekiti-staple-foods-metals'; ome = 'ezema2023-evaluation-of-pesticide-residues-and-heavy-metals'
rom = 'romero-crespo2023-trace-elements-crops-ecuador-mining'; cai = 'authors2023-health-risk-assessment-for-human-exposure-to-heavy'
bar = 'barber2025-baby-food-elements-us'
adj = 'adjorlologasokpoh2012-mercury-cassava-goldmines-ghana'; fob = 'fobi2025-boiling-cassava-cocoyam-kade-ghana'
bor = 'borteysam2015-tarkwa-cassava-plantain-soil-metals'; ori = 'orisakwe2012-owerri-food-crops-fruits-metals'
eny = 'enyoh2023-garri-microplastics-ptes-west-africa'; ame = 'adjeimensah2021-ghana-mining-home-processing-crops'

def P(*sentences):
    """Join (sentence, sources) pairs; each cited sentence gets its own placement."""
    text = ' '.join(s for s, _ in sentences)
    keys = []
    for _, src in sentences:
        for k in src:
            if k not in keys: keys.append(k)
    spans = [{'after': s, 'source_keys': src} for s, src in sentences if src]
    return {'text': text, 'source_keys': keys, 'citation_spans': spans} if keys else {'text': text, 'source_keys': []}

# ------------------------------------------------------------------ visible prose
prose = {
'summary': [
 P(('Lead is the metal that decides most cassava questions.', []),
   ('In WHO GEMS/Food, European cassava root results had a median of 46 µg/kg in random sampling and 92 µg/kg where sampling was not described, and 18 of 50 results exceeded 100 µg/kg, the EU and Codex maximum for root and tuber vegetables.', [gems, eu, cx]),
   ('Results submitted from the Americas were lower, with a median of 9 µg/kg and a maximum of 82 µg/kg across 26 roots.', [gems])),
 P(('Cadmium, arsenic and mercury were mostly low or below detection in monitored cassava.', [gems]),
   ('No European cassava root result exceeded the EU cadmium limit of 50 µg/kg for tropical roots and tubers, and most total arsenic and mercury results were non-detects.', [gems, eu]),
   ('The exceptions are gold-mining areas: in Ghana, cassava root carried 120–430 µg/kg mercury, and peeled roots from two mining towns averaged 2,110 µg/kg lead, while a root from an Ecuadorian mining orchard had 60 µg/kg cadmium.', [adj, fob, ame, rom])),
 P(('The evidence is thin outside monitoring data.', []),
   ('Twelve sources measured cassava itself, mostly small studies from Nigerian markets and Ghanaian mining districts, and several report values their own methods cannot support; those values are shown but not compared.', [jac, alb, iya, ome, rom, adj, fob, eny, ame, bor, ori]),
   ('The supported buyer control is a lot-specific lead result on the form being bought, measured with a method that can see well below 100 µg/kg.', [eu, gems])),
],
'identity': [
 P(('This page covers cassava (Manihot esculenta) root and the foods made directly from it: raw, boiled, fried or roasted root and its peel, cassava flour including fermented lafun and amala flour, gari, fufu, and cassava starch sold as tapioca.', [gems, jac, iya, adj, ame, eny]),
   ('Each form is kept separate because drying, fermentation, roasting and starch extraction change both the food and the basis on which a result is reported.', [alb, gems])),
 P(('Cassava leaves, eaten as a vegetable in parts of Africa, are a different food and are not covered here; nor are animal feeds, snacks or infant foods that only contain cassava or tapioca.', [gems, bar]),
   ('Cyanide from cassava’s cyanogenic glycosides is a natural toxicant rather than a heavy metal, so it is outside this page even though the EU sets limits of 50 mg/kg for fresh peeled root and 10 mg/kg for cassava and tapioca flour.', [eu])),
 P(('Names need care.', []),
   ('GEMS/Food includes results labelled only “Tapioca” or “tapioca, see cassava”, which may describe the root or the starch, so this page reports them as tapioca of unstated form.', [gems]),
   ('In Nigerian studies, amala and fufu are named dishes whose raw material and moisture state are not always stated.', [iya])),
],
'occurrence': [
 P(('The table holds every cassava result extracted from WHO GEMS/Food and eleven field, market, mining-area and processing studies: one row for each statistic a source reports for a form of cassava, group and metal.', [gems, jac, alb, iya, ome, rom, adj, fob, eny, ame, bor, ori]),
   ('GEMS/Food rows are HMI-calculated medians of individual national submissions by WHO region and sampling type; non-detects remain intervals between zero and the reporting limit and are never read as zero.', [gems]),
   ('Ratings place a result against an HMI reference for the same form and basis, built from GEMS/Food region-by-year medians and, for flour, the five market values in a Nigerian lafun survey.', [gems, jac])),
 P(('Dry-weight laboratory results and results with no stated basis are never pooled with as-sold monitoring results.', [alb, iya, ome]),
   ('Values that fail a check against their own paper are held and stay visible with the reason: low arsenic measured by atomic absorption without hydride generation in three studies, implausible chromium and nickel in garri, and cadmium and roasted-cassava lead cells that contradict their own tables.', [alb, jac, fob, eny, ame, iya])),
],
'pathways': [
 P(('Cassava takes up metals from the soil it grows in.', [rom]),
   ('In an orchard on gold-mining waste in Ponce Enríquez, Ecuador, where soils held 1.06–1.94 mg/kg cadmium and up to 422 mg/kg arsenic, the cassava root carried 60 µg/kg cadmium and 2,350 µg/kg nickel but arsenic and lead below 200 and 100 µg/kg.', [rom]),
   ('In the same orchards cassava was one of three crops with arsenic below detection and among the lowest in cadmium of nine crops, while lettuce reached 12,500 µg/kg arsenic.', [rom])),
 P(('Most of the lead found in monitoring is likely surface or soil-related contamination of the root or post-harvest contact rather than a property of the plant, but no source in the ledger tested that directly.', []),
   ('The EU limit for root and tuber vegetables applies after washing and separating the edible part, which shows where regulators expect soil to be removed.', [eu]),
   ('A Nigerian lafun survey attributes its low cadmium to reduced use of cadmium-containing fertilisers, without data on fertiliser use.', [jac])),
 P(('Gold mining is the clearest source in the evidence.', []),
   ('Near goldmines at Bogoso and Prestea in Ghana, peeled cassava flesh carried 122–168 µg/kg mercury at sites 1.5 to 14 km from the mines, with no clear fall-off with distance.', [adj]),
   ('In the Kade mining area, raw cassava held 301–426 µg/kg mercury and 24–30 µg/kg cadmium on a dry-weight basis, and peeled roots bought in the mining towns of Obuasi and Akwatia averaged 2,110 µg/kg lead and 120–160 µg/kg mercury, on a basis the paper does not state.', [fob, ame]),
   ('Around Tarkwa’s gold mines, 33 cassava roots from 11 farming communities had a geometric mean of 180 µg/kg lead, with about 30% at 370–450 µg/kg, but only 4 µg/kg mercury; the paper labels its results as both wet and dry weight, so the basis is unresolved.', [bor]),
   ('Mercury sat in the edible flesh as well as the peel: at all four Ghanaian sites the outer skin held less mercury than the flesh beneath it, and the inner cortex held less at three.', [adj])),
 P(('Processing water is another route.', []),
   ('When peeled roots were soaked for flour, the soaking water itself gained lead, cadmium and chromium, showing that metals move between the root and the water in both directions depending on its quality.', [alb])),
],
'variation': [
 P(('For lead in raw cassava root, the lowest results in the evidence are those submitted to GEMS/Food from the Americas: a median of 9 µg/kg across 26 imported roots in 2014–2016, with a maximum of 82 µg/kg.', [gems]),
   ('European submissions were higher, with medians of 46 µg/kg under random sampling and 92 µg/kg where sampling was not described.', [gems]),
   ('WHO regions are reporting regions, not growing areas, so this is a lowest observed pattern by market, not a ranking of producing countries.', [])),
 P(('Within Europe, lead fell over time and differed by origin label.', [gems]),
   ('17 of 39 root results from 2008–2012 exceeded 100 µg/kg against 1 of 11 from 2013–2019, and roots labelled imported had a median of 140 µg/kg against 64 µg/kg for those labelled domestic.', [gems]),
   ('These are national monitoring submissions, not a fixed panel of suppliers, and the export does not name the country of growth.', [gems])),
 P(('Among processed forms, cassava starch and flour submitted from the Americas were lowest for lead, at a median of 10 µg/kg (15 starch and 3 flour results).', [gems]),
   ('Results labelled “Tapioca” in Europe were among the highest, with a median of 115 µg/kg and 12 of 22 above 100 µg/kg, but their form is not stated.', [gems]),
   ('In Nigeria, market lafun ranged from 28 to 53 µg/kg lead across five towns, while single vendor samples of amala flour, fufu and garri reported 140, 150 and 300 µg/kg, and cassava from around Owerri 330 µg/kg lead and 100 µg/kg cadmium, all on an unstated basis.', [jac, iya, ori])),
 P(('The highest values in the evidence come from cassava grown in gold-mining districts, not from any market.', [adj, fob, ame]),
   ('Ghanaian mining-area roots carried mercury of 120–430 µg/kg, far above the European monitoring results, where most mercury results were below detection.', [adj, fob, gems]),
   ('Because the mining studies report dry-weight or unstated bases while monitoring reports fresh weight, these are not rated against the market references.', [fob, ame, adj])),
 P(('For cadmium, monitored cassava root is consistently low, with a European median below 4 µg/kg and a maximum of 22 µg/kg.', [gems]),
   ('Nigerian flours measured higher, 34–65 µg/kg in market lafun and about 60 µg/kg dry weight in laboratory flour from one farm, so the cadmium evidence for flour comes from few studies in one country.', [jac, alb])),
],
'processing': [
 P(('Two kinds of processing evidence exist, and neither is large.', []),
   ('In a laboratory experiment with one cultivar from one farm, soaking peeled roots in tap water for 48 hours before drying and milling gave flour about 11% lower in lead (61 against 69 µg/kg dry weight), 8% lower in cadmium and 4% lower in chromium than unsoaked roots.', [alb]),
   ('Soaking in plant-extract solutions with 1% plant powder added to the flour gave larger reductions, down to 21 µg/kg lead and 27 µg/kg cadmium, but the extracts and powders were never tested for metals and the results are repeat analyses of a single lot per treatment.', [alb])),
 P(('Cooking lowered lead and mercury per kilogram in the one study that measured the same roots before and after.', [ame]),
   ('In two Ghanaian mining towns, peeled cassava averaged 2,110 µg/kg lead; boiling for 30 minutes gave 600–610 µg/kg, frying 70–80 µg/kg and roasting 100 µg/kg in Akwatia, while mercury fell from 120–160 to 50–60 µg/kg when boiled and 20–30 µg/kg when fried, and fell least when roasted (110 µg/kg in both towns).', [ame]),
   ('The results were not corrected for water lost or gained or oil taken up during cooking, and heat does not destroy metals, so part of the drop may reflect transfer to cooking water or dilution rather than removal.', [ame])),
 P(('A second Ghanaian study reports large reductions in mercury and cadmium after boiling, but it measured raw cassava on a dry-weight basis and does not state the basis for boiled cassava, so its raw-to-boiled differences cannot be read as a cooking effect.', [fob]),
   ('African total diet monitoring adds that cooked dried cassava had a median of 82 µg/kg lead against 35 µg/kg for cooked fresh cassava in 2018 submissions; these are different foods sampled as eaten.', [gems])),
],
'controls': [
 P(('Controls for metals in cassava act at the field, during flour processing and at lot release.', []),
   ('The only measured processing comparison is laboratory soaking, which lowered lead by about a tenth in water alone; the larger plant-extract effects come from one experiment without a check on the added materials.', [alb]),
   ('Field evidence is observational: cassava from a mining-waste orchard stayed below detection for lead and arsenic but exceeded the EU cadmium limit for tropical roots.', [rom, eu])),
 P(('Boiling or frying peeled roots lowered lead and mercury per kilogram in one laboratory comparison from Ghanaian mining towns, but peeling did not remove mercury, which was present in the flesh.', [ame, adj]),
   ('The measured cooking effects come from one study without moisture correction, so they are tentative.', [ame])),
 P(('Sourcing controls rest on monitoring patterns rather than tested interventions.', [gems]),
   ('European lead results were higher for imported roots and before 2013, and testing a lot detects lead but does not remove it.', [gems, eu])),
],
'tradeoffs': [
 P(('Soaking that leaches metals also moves them into the soaking water, which then needs to be treated as waste rather than reused.', [alb]),
   ('The plant-extract treatments added clove, turmeric and moringa material that was not tested for lead, so a lower measured value in the flour could hide a contribution from the additive.', [alb])),
 P(('Cooking changes the food as well as its metal content.', []),
   ('Frying gave the lowest lead and mercury per kilogram in the Ghanaian comparison, but it adds oil and removes water in ways the study did not measure, and boiling moves metals into water that is then discarded.', [ame])),
 P(('Choosing a crop for contaminated land involves trade-offs between metals.', []),
   ('In the Ecuadorian mining area cassava was one of three crops with arsenic below detection but carried more nickel than most of the nine crops and cadmium above the EU tropical-root limit.', [rom, eu]),
   ('Drying cassava into flour or gari concentrates whatever metal the root carried, so a fresh-weight root result cannot be read directly against a dry product.', [alb, gems])),
],
'testing': [
 P(('A useful cassava lead test must be able to see well below 100 µg/kg.', [eu, cx]),
   ('Laboratories reporting to GEMS/Food from the Americas used limits of 1–5 µg/kg for root lead, but many European arsenic non-detects carried limits of 80–300 µg/kg, too high to show whether arsenic is present at levels of interest.', [gems]),
   ('Several Nigerian and Ghanaian studies reported no detection limit, reference material or recovery, one reported non-detects as 0.00 without a limit, and a garri study used X-ray fluorescence that gave implausible chromium and nickel values.', [jac, alb, ome, fob, eny])),
 P(('State the form and basis on every result: raw root on a fresh-weight basis, flour or gari as sold, and laboratory flour on a dry-weight basis are not interchangeable.', [eu, alb]),
   ('Arsenic in cassava should be read as total arsenic unless speciated; only six inorganic arsenic results exist, all for starch, and all but one were below detection.', [gems])),
],
'procurement': [
 P(('Ask for lot-specific lead results on the form being bought, with the laboratory’s quantification limit, compared with the destination-market limit.', [eu, cx]),
   ('The EU sets 0.10 mg/kg lead, 0.050 mg/kg cadmium and 0.90 mg/kg nickel for fresh root and tuber vegetables including tropical roots, on a wet-weight basis after washing and separating the edible part.', [eu]),
   ('Codex sets 0.1 mg/kg for both lead and cadmium in root and tuber vegetables.', [cx]),
   ('Neither sets a lead or cadmium limit specific to cassava flour, gari or tapioca starch.', [eu, cx])),
 P(('Record where the cassava was grown as well as where it was packed or bought, because monitoring datasets identify only the reporting market and an imported or domestic label.', [gems]),
   ('Avoid roots grown on mining waste or in gold-mining districts unless lot testing shows otherwise; Ghanaian and Ecuadorian mining-area cassava carried the highest mercury, lead and cadmium in the evidence.', [rom, adj, fob, ame])),
],
'product': [
 P(('Cassava is a staple in much of Africa, Latin America and Asia, so intake can be large where it is eaten daily, but no source in the ledger estimated lead or cadmium exposure from cassava with verified concentrations.', []),
   ('A Colombian study reported a cadmium hazard quotient of 1.32 for cassava in one municipality, but the quotient cannot be reproduced from the reference dose the paper states and its concentrations are only in a supplement that is not in the library.', [cai]),
   ('A Ghanaian mining-area study reports daily intake estimates for boiled cassava, but they cannot be reproduced from its own tables.', [fob]),
   ('In the United States, one children’s dry food whose main ingredient was cassava flour had 44 µg/kg total mercury, which the authors treated as an outlier needing follow-up rather than a property of cassava.', [bar])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that names cassava, plus every cassava, manioc and tapioca row in the WHO GEMS/Food exports; each has a recorded decision based on its content.', [gems]),
   ('Twelve sources contribute results for cassava itself, including four open-access papers added in a targeted gap search, and six are held in part because their values could not be reconciled with their own methods.', [jac, alb, iya, fob, eny, ame, adj, bor, ori]),
   ('Remaining gaps are the concentrations behind a Colombian exposure study, held only in its supplement, and several Nigerian cassava surveys cited in reviews that are not yet in the library.', [cai])),
],
}

headings = {'summary': 'Cassava overview', 'identity': 'What counts as cassava', 'occurrence': 'Heavy metal contamination profile of cassava',
 'pathways': 'How metals reach cassava', 'variation': 'Which forms and markets measured lower', 'processing': 'Soaking, drying and cooking',
 'controls': 'Mitigation from field to flour', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing cassava for metals',
 'procurement': 'Buying and verifying cassava', 'product': 'Exposure from cassava', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Cassava root and directly derived foods (flour, lafun, amala flour, gari, fufu, starch/tapioca), each kept as a separate form.', gems, jac, iya),
             A('Cassava leaves, feed, snacks and composite foods are excluded; cyanide is outside the metal scope.', gems, eu, bar),
             A('Basis is kept as reported: fresh or as sold, dry weight, or unstated; no moisture conversion is applied.', alb, gems)],
'summary': [A('Lead decides most cassava questions: 18 of 50 European root results exceeded 100 µg/kg; Americas submissions were lower.', gems, eu, cx),
            A('Cadmium, arsenic and mercury are mostly low or non-detect in monitoring; gold-mining areas in Ghana and Ecuador are the exception.', gems, rom, adj, fob, ame),
            A('Lot-specific lead results on the purchased form with an adequate quantification limit are the supported buyer control.', eu, gems)],
'occurrence': [A('Pb, Cd, total As, iAs, total Hg, Ni, Cr and Sn reported across twelve sources and the root, peel, cooked forms, flour, gari, fufu and starch.', gems, jac, alb, iya, ome, rom, adj, fob, eny, ame),
               A('HMI references by form and basis use GEMS/Food region-by-year medians and Nigerian lafun market values.', gems, jac),
               A('Non-detects are bounded intervals; held values are shown with reasons and not compared.', alb, jac, iya, fob, eny, ame)],
'pathways': [A('Gold mining: Ghanaian roots carried 120–430 µg/kg Hg near Bogoso and Kade, 2,110 µg/kg Pb in two towns and a 180 µg/kg Pb geometric mean around Tarkwa; an Ecuadorian mining orchard root had 60 µg/kg Cd.', adj, fob, ame, bor, rom),
             A('Surface soil and post-harvest contact are plausible lead routes; the EU limit applies after washing and separating the edible part.', eu),
             A('Soaking water exchanges metals with the root during flour processing.', alb)],
'variation': [A('Lowest observed root lead: Americas submissions (median 9 µg/kg); Europe higher (46–92 µg/kg).', gems),
              A('European lead fell from 17/39 above 100 µg/kg (2008–2012) to 1/11 (2013–2019); imported roots higher than domestic.', gems),
              A('No supported country preference; Nigerian flour cadmium (34–65 µg/kg) rests on few studies.', jac, alb, iya)],
'processing': [A('Water soaking lowered lab flour lead about 11%, cadmium 8%, chromium 4% (dry weight, one lot).', alb),
               A('Plant-extract soaking reduced lead to 21 µg/kg but additives were untested for metals.', alb),
               A('Boiling and frying peeled roots lowered Pb and Hg per kilogram in one Ghanaian study (Pb 2,110 to 600–610 boiled, 70–80 fried), without moisture correction.', ame)],
'controls': [A('Measured processing controls: laboratory soaking (modest) and boiling or frying (large per-kilogram drops, one study); peeling did not remove mercury.', alb, ame, adj),
             A('Avoiding mining-waste or industrial land is supported observationally.', rom, eu),
             A('Testing detects lead and supports exclusion; it does not remove contamination.', eu, gems)],
'tradeoffs': [A('Leached metals move into soaking water, which becomes a waste stream.', alb),
              A('Cassava on mining land: arsenic below detection but Cd above the EU limit and more Ni than most crops.', rom, eu),
              A('Drying concentrates metals; fresh-weight root results cannot be read against dry products.', alb, gems)],
'testing': [A('Quantification limits must sit well below 100 µg/kg for lead; many European arsenic non-detects had limits of 80–300 µg/kg.', gems, eu),
            A('Several studies reported no detection limit, reference material or recovery.', jac, alb, ome),
            A('Arsenic is mostly total arsenic; six inorganic arsenic results exist, all for starch.', gems)],
'procurement': [A('Request lot lead results with LOQ against EU 0.10 mg/kg Pb, 0.050 Cd, 0.90 Ni or Codex 0.1 Pb and Cd (fresh root).', eu, cx),
                A('No lead or cadmium limit is specific to cassava flour, gari or tapioca starch in EU or Codex law.', eu, cx),
                A('Record growing location separately from packing or purchase market; avoid mining-area roots.', gems, rom)],
'product': [A('No verified exposure estimate for metals from cassava exists in the ledger.', cai),
            A('A reported Colombian cadmium hazard quotient of 1.32 cannot be reproduced from the paper’s stated reference dose.', cai),
            A('One US children’s food based on cassava flour had 44 µg/kg mercury, treated as an outlier by its authors.', bar)],
'assessment': [A('Every cassava-naming source record and every cassava, manioc and tapioca GEMS/Food row dispositioned on content.', gems),
               A('Held values: arsenic in Albishi 2026, Jacob 2023 and Fobi 2025; Enyoh 2023 garri Cr and Ni; Adjei-Mensah 2021 Cd and Obuasi roasted Pb; Iyabo 2015 garri Cd.', alb, jac, fob, eny, ame, iya),
               A('Gaps: Caicedo-Rivas 2023 supplementary concentrations, paywalled Ghanaian and Tanzanian mining-area cassava studies, and Nigerian surveys cited in reviews.', cai)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which form of cassava measured lowest in lead?',
  P(('Starch and flour submitted to GEMS/Food from the Americas were lowest, at a median of 10 µg/kg, followed by raw root from the same region at 9 µg/kg median.', [gems]),
    ('European “tapioca” of unstated form and European root were higher, and Nigerian vendor samples of garri, fufu and amala reported 140–300 µg/kg on an unstated basis.', [gems, iya]),
    ('These forms come from different markets and laboratories, so the pattern is a lowest observed comparison, not a ranking of processing methods.', []))),
 ('Is imported cassava higher in lead than locally grown cassava?',
  P(('In European GEMS/Food submissions, roots labelled imported had a median of 140 µg/kg lead against 64 µg/kg for those labelled domestic, and 12 of 21 imported roots exceeded 100 µg/kg against 6 of 28 domestic ones.', [gems]),
    ('The export does not name the country of growth, so this cannot identify which producing countries are higher.', [gems]))),
],
'processing': [
 ('Does soaking cassava remove heavy metals?',
  P(('Only partly, and the evidence is one laboratory experiment.', []),
    ('Soaking peeled roots in tap water for 48 hours lowered flour lead by about 11% and cadmium by 8%, and the metals appeared in the soaking water.', [alb]),
    ('No study measured the traditional long fermentation used for fufu or lafun against unfermented flour.', []))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in cassava?',
  P(('Lead is the metal most often found at levels that matter; cadmium, arsenic and mercury are usually low or below detection in monitored cassava.', [gems]),
    ('Nickel and chromium have been measured only in a few small studies, with one mining-area root reaching 2,350 µg/kg nickel.', [rom, ome, alb])), 'GEMS/Food cassava records; Romero-Crespo Table 2; Omeje Table 1; Albishi Table 6'),
 ('ING-FAQ-02', 'How do heavy metals get into cassava?',
  P(('Cassava takes up metals from soil, and lead can also come from soil clinging to the root or from handling after harvest.', [rom, eu]),
    ('On mining-waste soil in Ecuador cassava took up cadmium and nickel but stayed below detection for arsenic and lead.', [rom])), 'Romero-Crespo Table 2; EU 2023/915 3.1.2 remarks'),
 ('ING-FAQ-04', 'Which forms of cassava have the lowest levels?',
  P(('For lead, starch and flour submitted from the Americas were lowest at a median of 10 µg/kg, while European tapioca of unstated form was highest at 115 µg/kg.', [gems]),
    ('For cadmium, monitored root was lowest, below 4 µg/kg median, and Nigerian flours measured 34–65 µg/kg.', [gems, jac])), 'GEMS/Food PAHO starch/flour and EURO tapioca; Jacob Table 1'),
 ('ING-FAQ-05', 'Which countries or regions produce cassava with the lowest lead?',
  P(('Cassava root submitted to GEMS/Food from the Americas had the lowest lead, a median of 9 µg/kg, against 46–92 µg/kg in European submissions.', [gems]),
    ('These are reporting markets, mostly of imported roots, so the evidence cannot name the producing countries with the lowest lead.', [gems])), 'GEMS/Food PAHO and EURO cassava root lead'),
 ('ING-FAQ-06', 'Do foods made with cassava also contain heavy metals?',
  P(('Yes, at levels that depend on the food: Nigerian market lafun carried 28–53 µg/kg lead, and vendor garri, fufu and amala 140–300 µg/kg on an unstated basis.', [jac, iya]),
    ('One US children’s dry food made mainly from cassava flour had 44 µg/kg mercury, which its authors treated as an outlier.', [bar])), 'Jacob Table 1; Iyabo Table 1; Barber p. 7–8'),
 ('ING-FAQ-07', 'What do the levels in cassava mean for health?',
  P(('No source in the ledger estimated exposure from cassava with verified concentrations, so the evidence cannot say how much cassava contributes to lead or cadmium intake.', []),
    ('A Colombian study reported a cadmium hazard quotient above 1 for cassava in one municipality, but the figure cannot be reproduced from its own stated reference dose.', [cai])), 'Caicedo-Rivas Table 1'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in cassava?',
  P(('Yes, for fresh root: the EU allows 0.10 mg/kg lead, 0.050 mg/kg cadmium and 0.90 mg/kg nickel in tropical roots and tubers, and Codex sets 0.1 mg/kg for lead and cadmium in root and tuber vegetables.', [eu, cx]),
    ('Neither sets a metal limit specific to cassava flour, gari or tapioca, although both regulate cyanide in those products.', [eu, cx])), 'EU 2023/915 3.1.2.1, 3.2.2.7, 3.6.2, 2.3.5–2.3.6; CXS 193 pp. 60, 63, 84'),
 ('ING-FAQ-09', 'Can processing reduce heavy metals in cassava?',
  P(('Modestly, in the only measured case: soaking peeled roots in water for 48 hours lowered lead in the resulting flour by about 11% and cadmium by 8%.', [alb]),
    ('Larger reductions with plant-extract soaks come from one laboratory lot and untested additives, so they are not an established method.', [alb])), 'Albishi Table 6; Table 3'),
 ('ING-FAQ-14', 'Does cooking cassava get rid of heavy metals?',
  P(('Heat does not destroy metals, but boiling and frying lowered lead and mercury per kilogram in one study of peeled roots from Ghanaian mining towns: lead fell from 2,110 µg/kg to about 600 µg/kg when boiled and 70–80 µg/kg when fried.', [ame]),
    ('The study did not correct for water or oil, so some of the drop may be dilution or transfer to cooking water; roasting lowered mercury least.', [ame])), 'Adjei-Mensah Tables 2–6'),
 ('ING-FAQ-11', 'Does peeling cassava remove mercury?',
  P(('Not reliably: near Ghanaian goldmines, the peeled flesh held 122–168 µg/kg mercury, and the outer skin held less than the flesh at all four sites.', [adj]),
    ('Peeling remains standard practice and the EU lead and cadmium limits apply to the edible part after washing, but no study measured lead or cadmium in peel against flesh.', [eu])), 'Adjorlolo-Gasokpoh Table 1; EU 2023/915 3.1.2'),
 ('ING-FAQ-15', 'Does soaking cassava overnight help?',
  P(('Soaking for 48 hours in plain water lowered flour lead and cadmium by about a tenth in a laboratory study, and the metals moved into the water.', [alb]),
    ('Overnight soaking and traditional fermentation have not been measured for metals.', [])), 'Albishi Table 6, Table 3'),
 ('CASSAVA-FAQ-01', 'Is the cyanide in cassava a heavy metal?',
  P(('No; cyanide comes from natural compounds in the plant and is controlled separately, for example at 50 mg/kg in fresh peeled root and 10 mg/kg in cassava and tapioca flour in the EU.', [eu]),
    ('Proper processing to remove cyanide does not by itself show anything about lead or cadmium.', [])), 'EU 2023/915 2.3.5–2.3.6'),
 ('CASSAVA-FAQ-02', 'Has lead in cassava been falling?',
  P(('In European GEMS/Food submissions, 17 of 39 root results from 2008–2012 exceeded 100 µg/kg against 1 of 11 from 2013–2019.', [gems]),
    ('These are national monitoring submissions with changing coverage, not a fixed panel of producers.', [gems])), 'GEMS/Food EURO cassava root lead by year'),
 ('CASSAVA-FAQ-03', 'Is tapioca lower in metals than cassava root?',
  P(('Starch labelled as cassava or tapioca starch from the Americas was low in lead (median 10 µg/kg), similar to root from the same region.', [gems]),
    ('European results labelled only “Tapioca” were higher (median 115 µg/kg), but their form is not stated, so the evidence does not show that starch is reliably lower.', [gems])), 'GEMS/Food PAHO starch; EURO tapioca'),
 ('CASSAVA-FAQ-04', 'Is cassava grown near gold mines higher in metals?',
  P(('Yes, in the evidence available: cassava from Ghanaian gold-mining districts carried 120–430 µg/kg mercury near Bogoso and Kade, peeled roots from two mining towns averaged 2,110 µg/kg lead, about 30% of roots around Tarkwa had 370–450 µg/kg lead, and an Ecuadorian mining-orchard root had 60 µg/kg cadmium, above the EU limit of 50 µg/kg for tropical roots.', [adj, fob, ame, bor, rom, eu]),
    ('These studies used different bases and small samples, so roots from mining areas need lot testing rather than an assumed safe level.', [fob, ame])), 'Adjorlolo-Gasokpoh Table 1; Fobi Table 4; Adjei-Mensah Table 2; Romero-Crespo Table 2'),
 ('CASSAVA-FAQ-05', 'Are gari and fufu higher in lead than cassava root?',
  P(('Single vendor samples in Ado-Ekiti, Nigeria, reported 300 µg/kg lead in garri and 150 µg/kg in fufu, but the basis was not stated and the same 300 µg/kg figure is printed for six different tuber foods.', [iya]),
    ('A garri study from Nigeria and Japan measured only chromium and nickel, with implausibly high values, so it adds no usable lead or cadmium evidence.', [eny])), 'Iyabo Table 1; Enyoh Table 3'),
 ('CASSAVA-FAQ-06', 'How can I tell whether a cassava lead test is good enough?',
  P(('Check that the quantification limit is far below 100 µg/kg; laboratories reporting cassava to GEMS/Food from the Americas used 1–5 µg/kg.', [gems, eu]),
    ('Ask for the form and basis tested, because a dry flour result and a fresh root result are not directly comparable.', [alb, eu])), 'GEMS/Food PAHO cassava lead limits; EU 2023/915 3.1.2'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-cassava-v1', 'family': 'ingredient', 'slug': 'cassava', 'title': 'Cassava', 'display_title': 'Cassava', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, arsenic and other metals in cassava root, flour, gari and tapioca: monitoring results, markets, processing, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Cassava FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, iAs, total Hg, Ni, Cr, Sn as reported; arsenic speciated only for six starch results', 'material_form': 'Cassava root raw or cooked, cassava flour (including lafun and amala flour), gari, fufu, cassava starch and tapioca; leaves, feed and composite foods excluded',
               'basis': 'As reported: as sold or as eaten, fresh weight, dry weight or unstated; µg/kg; no moisture conversion', 'geography_market': 'WHO reporting region, purchase market or growing area as each source reports',
               'period': 'Source collection years 2003–2023 where reported; unreported dates stay unknown', 'stage': 'Field, flour processing, cooking, retail and release testing',
               'population_route': 'Dietary ingestion', 'comparator_outcome': 'HMI cassava references by form and basis; same-study treatment and form contrasts; observational siting comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record naming cassava (and the manioc, tapioca and Manihot synonyms), plus cassava, manioc and tapioca rows in WHO GEMS/Food exports',
                'protocol_ref': 'data/evidence/contracts/cassava/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/extraction/'],
                'screening_ref': 'data/evidence/contracts/cassava/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'No FDA Total Diet Study food is cassava'],
                'unresolved_access': ['Caicedo-Rivas 2023 Supplementary Table S3 (plant concentrations)']},
     'source_catalogue': {'topic': 'ingredients/cassava'}, 'retain_history_only': True}

for sec in reg['families']['ingredient']['sections']:
    sid = sec['id']; a = []
    for qid, (txt, src) in zip(sec['question_ids'], answers[sid]):
        x = P((txt, src)); x.update(question_id=qid, kind='evidence', presentation='record_only', public_context_section=sid); a.append(x)
    for q, p in support.get(sid, []):
        p = dict(p); p['question'] = q; a[0].setdefault('passages', []).append(p)
    pres = dict(prose[sid][0]); pres['narrative'] = 'overview_and_questions'; pres['passages'] = [dict(x) for x in prose[sid][1:]]
    s['sections'].append({'id': sid, 'answers': a, 'presentation': pres})

for ident, q, p, loc in faqs:
    p = dict(p); p.update(question=q, placement='universal_faq')
    s['sections'][0]['answers'][0].setdefault('passages', []).append(p)

quick = P(('Lead is the metal to check in cassava: 18 of 50 European root results exceeded the 100 µg/kg limit, while roots from the Americas were far lower; cadmium, arsenic and mercury were mostly low.', [gems, eu]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead decides most cassava questions; mercury, lead and cadmium are highest in cassava from gold-mining districts.', [gems, adj, ame, rom]),
 ('Main drivers', 'Growing soil and nearby mining, the market sampled, the form of cassava and how it is cooked.', [rom, fob, gems, ame]),
 ('Practical framing', 'Ask for lot-specific lead results on the form bought, with a quantification limit well below 100 µg/kg.', [eu, gems])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-cassava-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-03', 'status': 'deferred', 'reason': 'Only four GEMS/Food cassava-flour and starch arsenic records carry an organic-production label; no comparison of organic and conventional cassava for metals exists in the ledger.'},
 {'id': 'ING-FAQ-10', 'status': 'covered', 'reason': 'Arsenic species: only six inorganic arsenic results (starch) exist; Testing explains totals versus inorganic arsenic.'},
 {'id': 'ING-FAQ-12', 'status': 'not_applicable', 'reason': 'No direct metal comparison of cassava with a commonly confused alternative (yam, taro) on the same basis in the ledger.'},
 {'id': 'ING-FAQ-13', 'status': 'covered', 'reason': 'Children: the only evidence is one US children’s product with cassava flour (ING-FAQ-06); no infant-specific exposure evidence.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative cassava serving guidance for metals; no frequency is invented.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for cassava metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, consumer=False):
    return {'id': f'cassava-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/cassava.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Cassava', 'audiences': ['supplier', 'brand'] + (['consumer'] if consumer else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, yield, taste and cost not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific lead and cadmium results on the form sold, using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational survey' if kind == 'observational' else 'Laboratory processing experiment' if kind == 'measured' else 'Regulatory or author guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or remaining in cassava, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'Percentages are calculated from the source means shown in outcomes.', 'basis_yield_mass_balance': 'Basis as stated in outcomes; no mass balance reported.',
            'other_contaminants': 'Cyanide is outside this table.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled field or commercial-scale intervention effect', 'next_action': 'No controlled field or commercial cassava intervention study in the library; keep effects unquantified unless measured.'}],
            'review': {'record_ref': 'data/evidence/contracts/cassava/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Cassava flour, dry weight', note='Source-reported means of repeat determinations of one flour lot per arm; laboratory scale.'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
ALB = ('Albishi et al. 2026', 'https://doi.org/10.3389/fnut.2025.1731737')
controls = [
 control(1, rom, 'Romero-Crespo et al. 2023', 'https://doi.org/10.1007/s10653-023-01514-x', 'cultivation', 'Avoid growing cassava on mining waste or contaminated soil', 'observational', 'Cassava root from a gold-mining-area orchard, Ponce Enríquez, Ecuador',
   'Cassava grown on mining-influenced soil had lead and arsenic below detection but cadmium at 60 µg/kg, above the EU limit for tropical roots, and nickel at 2,350 µg/kg; it was one of three of nine crops grown there with arsenic below detection.',
   'Cassava against eight other crops from the same orchards and against the EU tropical-root cadmium limit; one cassava sample, June 2021.',
   [out('Cd', 'context', 60, None, 'Above the EU 50 µg/kg tropical-root limit (one sample)', 'Root cadmium, fresh weight', 'Mining-area cassava versus EU limit', 'Table 2, p. 7', 'Cassava root, fresh weight', 'Single sample; observational.'),
    out('tAs', 'context', None, None, 'Below detection (<200 µg/kg), as in two other crops', 'Root arsenic, fresh weight', 'Cassava versus other crops on the same land', 'Table 2, p. 7', 'Cassava root, fresh weight', 'Single sample; observational.')],
   'One mining district; one cassava sample.', 'Observational; no siting intervention was tested.', 'Field survey'),
 control(2, jac, 'Jacob et al. 2023', 'https://doi.org/10.3389/fsufs.2023.1165501', 'cultivation', 'Limit cadmium-containing fertiliser on cassava fields', 'guidance', 'Fermented cassava flour (lafun), Oke Ogun markets, Nigeria',
   'The authors recommend prohibiting cadmium-containing fertilisers and attribute the cadmium they found to fertiliser use, without measuring it.',
   'Guidance; no measured comparison.',
   [out('Cd', 'context', None, None, 'Guidance; effect not measured', 'Flour cadmium', 'Fertiliser practice', 'Section 5 discussion; Section 7 recommendations', 'Fermented cassava flour, as sold', 'Author recommendation.')],
   'Applies where phosphate or cadmium-bearing fertilisers are used.', 'No measured effect size.', 'Author guidance'),
 control(3, eu, 'Commission Regulation (EU) 2023/915', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915', 'food processing', 'Wash and separate the edible part before testing or processing', 'guidance', 'Fresh cassava and other tropical roots',
   'EU limits for lead, cadmium and nickel in root and tuber vegetables apply on a wet-weight basis after washing and separating the edible part, which defines where soil is expected to be removed.',
   'Regulatory definition; no measured comparison of peeled and unpeeled cassava.',
   [out('Pb', 'context', None, None, 'Regulatory definition; effect not measured', 'Lead limit basis', 'Edible part after washing', 'Annex I 3.1.2 remarks', 'Fresh root, wet weight', 'Regulatory text.'),
    out('Cd', 'context', None, None, 'Regulatory definition; effect not measured', 'Cadmium limit basis', 'Edible part after washing', 'Annex I 3.2.2 remarks', 'Fresh root, wet weight', 'Regulatory text.')],
   'Fresh cassava placed on the EU market.', 'No measured effect size for peeling or washing cassava.', 'Regulation', True),
 control(4, alb, *ALB, 'food processing', 'Soak peeled roots in clean water before drying and milling', 'measured', 'Laboratory cassava flour, cultivar TME 419, one farm, Delta State, Nigeria',
   'Soaking peeled roots in tap water for 48 hours gave flour about 11% lower in lead, 8% lower in cadmium and 4% lower in chromium than unsoaked roots; the soaking water gained these metals.',
   'Control B (water-soaked) against Control A (unsoaked), one flour lot each, three repeat determinations.',
   [out('Pb', 'lower', 68.67, 61.33, 'About 11% lower', 'Flour lead, dry weight', 'Water-soaked versus unsoaked', 'Table 6 Control A/B'),
    out('Cd', 'lower', 63.0, 57.67, 'About 8% lower', 'Flour cadmium, dry weight', 'Water-soaked versus unsoaked', 'Table 6 Control A/B'),
    out('Cr', 'lower', 68.0, 65.0, 'About 4% lower', 'Flour chromium, dry weight', 'Water-soaked versus unsoaked', 'Table 6 Control A/B')],
   'Laboratory flour from one cultivar, farm and season.', 'Repeat analyses of one lot per arm; not independent samples or a significance test.', 'Laboratory', True),
 control(5, alb, *ALB, 'food processing', 'Soak roots in plant-extract solutions (experimental)', 'measured', 'Laboratory cassava flour, cultivar TME 419, one farm, Delta State, Nigeria',
   'Soaking in clove, turmeric and moringa extracts with 1% plant powder blended into the flour gave the lowest values, down to 21 µg/kg lead and 27 µg/kg cadmium; the added plant materials were not tested for metals.',
   'Treatment F11 against Control A (unsoaked), one flour lot each, three repeat determinations.',
   [out('Pb', 'lower', 68.67, 21.33, 'About 69% lower (experimental)', 'Flour lead, dry weight', 'F11 versus unsoaked', 'Table 6 F11/Control A'),
    out('Cd', 'lower', 63.0, 27.33, 'About 57% lower (experimental)', 'Flour cadmium, dry weight', 'F11 versus unsoaked', 'Table 6 F11/Control A'),
    out('Cr', 'lower', 68.0, 55.33, 'About 19% lower (experimental)', 'Flour chromium, dry weight', 'F11 versus unsoaked', 'Table 6 F11/Control A')],
   'Laboratory experiment only; not an established or approved processing method.', 'Additives untested for metals; one lot per arm; arsenic results held.', 'Laboratory'),
 control(6, gems, 'WHO GEMS/Food', 'https://extranet.who.int/gemsfood/?DisplayFormat=1', 'sourcing and procurement', 'Ask for origin and lot lead results on imported roots', 'observational', 'Cassava root submitted to GEMS/Food from Europe',
   'In European submissions, roots labelled imported had a median of 140 µg/kg lead against 64 µg/kg for those labelled domestic, and 12 of 21 imported roots exceeded 100 µg/kg.',
   'Imported against domestic labels within European cassava root submissions, 2008–2019.',
   [out('Pb', 'higher', 64, 140, 'Imported roots higher (observational)', 'Median root lead', 'Imported against domestic label', 'primary/gemsfood-cassava-records.csv EURO root lead', 'Cassava root, as sold', 'HMI-calculated medians of individual monitoring results; country of growth not exported.')],
   'European market submissions; country of growth not identified.', 'Observational; labels describe origin relative to the reporting country only.', 'Monitoring dataset'),
 control(7, gems, 'WHO GEMS/Food', 'https://extranet.who.int/gemsfood/?DisplayFormat=1', 'lot acceptance and release', 'Test lots with a method able to see well below 100 µg/kg', 'context', 'Cassava root, flour and starch',
   'Laboratories reporting cassava lead from the Americas used limits of 1–5 µg/kg, while many European arsenic non-detects carried limits of 80–300 µg/kg, too high to show whether levels of interest are present; testing detects metals and does not remove them.',
   'Reporting limits in submissions against the 100 µg/kg lead limit.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Method reporting limit', 'Reported limits versus required sensitivity', 'primary/gemsfood-cassava-records.csv LOD/LOQ fields', 'As sold', 'Reporting limits as submitted.')],
   'Any lot-release testing for cassava.', 'Method fitness only.', 'Laboratory method'),
]
AME = ('Adjei-Mensah et al. 2021', 'https://doi.org/10.1016/j.toxrep.2021.11.001')
def ghana(i, how, minutes, pb, hg, locator):
    return control(i, ame, *AME, 'home preparation', f'{how} peeled cassava before eating', 'measured', 'Peeled cassava from Obuasi and Akwatia mining towns, Ghana, 2019',
      f'{how} peeled roots in the laboratory lowered lead and mercury per kilogram in both mining towns; results were not corrected for water lost or gained or oil taken up.',
      f'{how} ({minutes}) against unprocessed portions of the same peeled roots, Obuasi and Akwatia.',
      [out('Pb', 'lower', 2110, pb[0], f'Lower lead per kilogram, Obuasi', 'Cassava lead', f'{how} versus unprocessed, Obuasi', locator, 'Cassava as prepared; basis not stated', 'Source means; not moisture-corrected; laboratory preparation.'),
       out('Pb', 'lower', 2110, pb[1], f'Lower lead per kilogram, Akwatia', 'Cassava lead', f'{how} versus unprocessed, Akwatia', locator, 'Cassava as prepared; basis not stated', 'Source means; not moisture-corrected; laboratory preparation.'),
       out('tHg', 'lower', 120, hg[0], f'Lower mercury per kilogram, Obuasi', 'Cassava total mercury', f'{how} versus unprocessed, Obuasi', locator, 'Cassava as prepared; basis not stated', 'Source means; not moisture-corrected.'),
       out('tHg', 'lower', 160, hg[1], f'Lower mercury per kilogram, Akwatia', 'Cassava total mercury', f'{how} versus unprocessed, Akwatia', locator, 'Cassava as prepared; basis not stated', 'Source means; not moisture-corrected.')],
      'Peeled roots from gold-mining towns; laboratory preparation.', 'One study; n per cell not reported; no moisture correction.', 'Laboratory', True)
controls += [
 ghana(8, 'Boiling', '30 minutes in deionised water', (610, 600), (60, 50), 'Tables 2–3, 6'),
 ghana(9, 'Frying', '25 minutes in oil', (70, 80), (20, 30), 'Tables 2–3, 6'),
 control(10, adj, 'Adjorlolo-Gasokpoh et al. 2012', 'https://doi.org/10.1007/s00128-012-0849-7', 'home preparation', 'Do not rely on peeling to remove mercury', 'measured', 'Cassava near goldmines at Bogoso and Prestea, Ghana',
   'Peeled flesh held 122–168 µg/kg mercury; the outer skin held less than the flesh at all four sites, so peeling did not remove mercury from the part that is eaten.',
   'Outer peel against flesh of the same roots at four sites 1.5–14 km from mines.',
   [out('tHg', 'lower', 127.45, 66.6, 'Outer skin lower than flesh (Bogoso entrance)', 'Cassava mercury by tissue', 'Outer skin versus flesh', 'Table 1', 'Dried tissue; basis not stated', 'Source means.'),
    out('tHg', 'higher', 152.11, 195.47, 'Inner cortex higher than flesh (Prestea)', 'Cassava mercury by tissue', 'Inner cortex versus flesh', 'Table 1', 'Dried tissue; basis not stated', 'Source means.')],
   'Gold-mining areas using mercury amalgamation.', 'Four sites; number of independent plants unclear.', 'Field survey', True),
 control(11, fob, 'Fobi et al. 2025', 'https://doi.org/10.1155/ijfo/5137953', 'home preparation', 'Boil cassava from mining areas (basis caveat)', 'measured', 'Cassava from six points in the Kade gold-mining area, Ghana, May 2024',
   'The authors report large drops in mercury and cadmium after boiling, but raw cassava was measured on a dry-weight basis and the boiled basis is not stated, so the size of the effect cannot be established.',
   'Boiled against raw cassava from the same sampling points; bases differ.',
   [out('tHg', 'context', 301, None, 'Effect size not established (bases differ)', 'Cassava mercury', 'Boiled versus raw', 'Tables 4–5', 'Raw: dry weight; boiled: not stated', 'Source means; one composite per point.'),
    out('Cd', 'context', 28, None, 'Effect size not established (bases differ)', 'Cassava cadmium', 'Boiled versus raw', 'Tables 4–5', 'Raw: dry weight; boiled: not stated', 'Source means; one composite per point.')],
   'Gold-mining area; one composite per sampling point.', 'Basis mismatch between raw and boiled results; no detection limits.', 'Field and laboratory'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
