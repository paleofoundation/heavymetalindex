"""Compose the corn synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/ingredient-rollout-2026-10-22/corn/extraction/, to
primary/gemsfood-corn-records.csv (WHO GEMS/Food individual results), primary/fda-elements.txt
(FDA TDS food 54) and regulatory-corn.json (limits read from primary text).
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn'

gems = 'who-gemsfood-heavy-metal-contaminants'; fda = 'fda2022-tds-elements-fy2018-fy2020'
eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'; cn = 'china2022-gb-2762-contaminants-original'
hk = 'hongkong2025-cap-132v-metallic-contamination'; mer = 'mercosur2011-gmc-res-12-inorganic-contaminants'; fsz = 'fsanz2024-schedule-19-contaminants'
kr = 'mfds2012-food-code-heavy-metals'; ind = 'fssai2016-heavy-metals-third-amendment'
aba = 'abatemi-usman2023-corn-cement-nigeria'; abd = 'abdullahi2024-heavy-metals-maize-nigeria-seasonal'; elh = 'el-hassanin2020-egypt-maize-pb-cd'
li17 = 'li2017-mercury-coal-power-plants-vegetables-grains'; li22 = 'li2022-guizhou-cd-grains'; liu22 = 'liu2022-heavy-metals-rice-maize-chengdu'
liu25 = 'liu2025-nanyang-crops-heavy-metals'; gu = 'gu2019-maize-peanut-heavy-metals-guangxi'; edi = 'edirisinghe2019-sri-lanka-legumes-cereals-as-cd'
isl = 'islam2014-bangladesh-cereals-pulses-metals'; isl15 = 'islam2015-bangladesh-foods-heavy-metals'; baz = 'bazie2022-burkina-faso-foodstuffs-metals'
bed = 'bedoya-perales2023-moquegua-peru-mining-dataset'; rom = 'romero-crespo2023-trace-elements-crops-ecuador-mining'; zhu = 'zhu2024-mycotoxins-and-heavy-metals-in-rice-maize'
jia = 'jiang2020-henan-battery-factory-crops-metals'; sal = 'saleem2025-nd-vegetables-hra'; aga = 'agarwal2022-heavy-metals-vegetables-east-kolkata'
roc = 'roman-ochoa2021-arequipa-grains-health-risk'; pir = 'pirsaheb2015-iran-kermanshah-cereals-metals'; bai = 'bai2022-arsenic-coal-burning-shaanxi'
car = 'carey2018-rice-dilution-infant-food-eu-arsenic'; tia = 'tian2021-magnetic-purification-cadmium-lead-grain'; efl = 'efsa-lead-contam-2010'
fly = 'flyvholm1984-nickel-content-food-dietary-intake'; get = 'getu2022-heavy-metals-cereals-ethiopia'; gho = 'gholami2025-heavy-metals-corn-iran-khuzestan'
ibr = 'ibrahim2024-food-heavy-metals-nigeria'; zha = 'zhang2026-trace-metals-five-crops-chongqing'; mas = 'masite2022-mopane-trace-metals'

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
 P(('Most corn sold as maize grain or sweet corn carries lead, cadmium, arsenic and mercury below or near the limits laboratories can measure.', []),
   ('In WHO GEMS/Food, European maize grain had a median lead result below 20 µg/kg across 890 results from 2001 to 2020, and 8 exceeded the EU and Codex cereal limit of 200 µg/kg; cadmium had a median below 3.2 µg/kg, with 3 of 1,238 results above the 100 µg/kg limit.', [gems, eu, cx]),
   ('Frozen corn boiled as eaten in the US Total Diet Study had lead, arsenic and mercury below detection in all 27 national composites, and a median cadmium of 2.6 µg/kg.', [fda])),
 P(('The exceptions come from where the corn grew.', []),
   ('Maize from farms downwind of a Nigerian cement plant averaged 230–380 µg/kg lead against 20 µg/kg at a control farm, maize irrigated with wastewater in Egypt carried 260–550 µg/kg lead against 30–40 µg/kg or less with fresh or ground water, and maize within 1 km of Chinese coal-fired power plants held about 21 µg/kg mercury against about 1 µg/kg at 5 km and 0.72 µg/kg in maize from a distant grocery store.', [aba, elh, li17]),
   ('Field surveys in China, Bangladesh and Burkina Faso also report cadmium or lead in ordinary maize at or above the cereal limits, though several use dry-weight or unstated bases that cannot be set directly beside monitoring results.', [li22, liu22, isl, baz])),
 P(('For a buyer the practical points are the growing area, the form bought and the laboratory’s quantification limit.', []),
   ('Maize grain and sweet corn have different legal limits: the EU allows 200 µg/kg lead and 100 µg/kg cadmium in cereals but 100 µg/kg lead and 20 µg/kg cadmium in sweet corn, on a wet-weight basis.', [eu]),
   ('Lot results with a quantification limit well below those values are the supported check; testing finds contamination but does not remove it.', [gems, eu])),
],
'identity': [
 P(('This page covers corn (Zea mays) in two forms that are measured and regulated differently: mature maize grain, the dry kernels sold as a cereal, and fresh corn, meaning sweet corn or green ears eaten as a vegetable raw, frozen or cooked, together with baby corn.', [gems, fda, eu]),
   ('Each form is kept separate because sweet corn is mostly water and grain is dry, so the same amount of metal gives a much lower concentration per kilogram of sweet corn.', [eu, cx])),
 P(('Foods made from corn have their own pages and their results are not used here: canned corn, corn flour and meal, grits, polenta, corn flakes, popcorn, tortillas, cornbread, corn oil and corn syrup.', [gems, fda]),
   ('Animal feed, maize silage, infant cereals that contain corn and corn salad, a leafy vegetable that is not corn at all, are also outside this page.', [gems])),
 P(('Results are kept on the basis each source reports.', []),
   ('Monitoring programmes report corn as sold or as eaten, field studies often report dried grain, and several papers do not say which, so dry-weight, as-sold and unstated results are never pooled.', [gems, aba, abd, baz])),
],
'occurrence': [
 P(('The table holds every corn result extracted from WHO GEMS/Food, the FDA Total Diet Study and 30 field, market and contaminated-site studies: one row for each statistic a source reports for a form of corn, group and metal.', [gems, fda, aba, abd, elh, li17, li22, liu22, liu25, edi, isl, baz, bed, rom, zhu, jia, sal]),
   ('GEMS/Food rows are HMI-calculated medians of individual national submissions by WHO region, sampling type and basis; non-detects remain intervals between zero and the reporting limit and are never read as zero.', [gems])),
 P(('Ratings place a result against an HMI reference for the same form of corn and basis, built from GEMS/Food region-by-year medians, the 27 FDA composites for cooked sweet corn and printed medians from ordinary farms and markets.', [gems, fda, edi]),
   ('Because more than half of most monitoring results are below reporting limits, many medians span the reference quartiles and cannot be placed; those rows are left unrated rather than forced into a category.', [gems, fda])),
 P(('Field studies in contaminated areas are shown with their own controls instead of being rated against ordinary corn.', [aba, elh, li17]),
   ('Values that fail a check against their own paper are held and stay visible with the reason, including a mining-area maize table that duplicates another crop’s values, a cadmium result with a standard deviation near its mean in a single composite, and conflicting means across one paper’s tables.', [zha, get, gho, isl15, ibr])),
],
'pathways': [
 P(('Corn takes up cadmium and nickel from soil into the grain, while lead and mercury reach the grain more from air and dust deposited on the plant.', [gu, li17, aba]),
   ('In Guangxi, maize grain cadmium and lead uptake fell as soil organic carbon and manganese rose, and cadmium uptake also fell with higher soil pH, across 65 paired grain and soil samples.', [gu]),
   ('In Bangladesh, soil-to-grain transfer factors for maize were 0.054 for cadmium and 0.014 for lead, so grain carried a small fraction of soil levels.', [isl])),
 P(('Industrial emissions raise the metals in corn grown nearby.', []),
   ('At five farms around a cement plant at Obajana, Kogi State, Nigeria, maize harvested in 2017 averaged 230–380 µg/kg lead on a dry-weight basis at the three downwind farms against 20 µg/kg at a control farm 18 km upwind.', [aba]),
   ('Near two Chinese coal-fired power plants, maize mercury fell from about 21 µg/kg at 1 km to 4.7–6.7 µg/kg at 3 km and 1.06 µg/kg at 5 km, on a fresh-weight basis, against 0.72 µg/kg in maize from a grocery store more than 55 km away.', [li17]),
   ('Maize from a village 2.5 km from a battery plant in Henan averaged 140 µg/kg lead and 70 µg/kg mercury, with the basis not stated.', [jia])),
 P(('Irrigation water and mining waste are the other routes in the evidence.', []),
   ('In Egypt, maize irrigated with sewage or industrial wastewater carried 260–550 µg/kg lead and 38–112 µg/kg cadmium, against 30–40 µg/kg lead and 9–10 µg/kg cadmium or less with Nile or ground water, basis not stated.', [elh]),
   ('In a high-arsenic coal-burning area of Shaanxi, China, corn dried before analysis held 4,240 µg/kg arsenic, and a corn sample from a gold-mining orchard in Ecuador held 740 µg/kg arsenic and 1,620 µg/kg nickel.', [bai, rom])),
],
'variation': [
 P(('For lead, fresh and cooked sweet corn measured lowest in the evidence.', []),
   ('Frozen corn boiled as eaten had lead below 4 µg/kg in all 27 US Total Diet Study composites from 2017 to 2020, and only 1 of 65 cooked sweet corn results submitted to GEMS/Food from the Americas in 2000–2017 was detected.', [fda, gems]),
   ('Raw sweet corn had median lead below 10 µg/kg in European and South-East Asian submissions and below 1.4 µg/kg in 65 results from the Americas in 2014–2016, while maize grain had a median below 20 µg/kg in Europe.', [gems]),
   ('Sweet corn is mostly water, so these per-kilogram differences do not show that sweet corn plants take up less lead than grain maize.', [])),
 P(('Among regions reporting maize grain, European results were lowest for lead and Western Pacific results highest.', [gems]),
   ('Western Pacific submissions from 2001 to 2010, almost all labelled domestic, had a median of 29–50 µg/kg and 24 of 327 above 200 µg/kg, against 8 of 890 in Europe.', [gems]),
   ('Within Europe, maize labelled imported had a median below 17 µg/kg and a highest detected value of 155 µg/kg, against a median below 20 µg/kg and a highest value of 790 µg/kg for domestic maize, a tentative difference from 48 imported results.', [gems]),
   ('WHO regions are reporting regions, not growing areas, so this does not identify producing countries with lower lead.', [])),
 P(('European maize lead also fell over time.', [gems]),
   ('4 of 233 grain results from 2001–2007 and 4 of 257 from 2008–2013 exceeded 200 µg/kg, against none of 400 from 2014–2020.', [gems])),
 P(('For cadmium, monitored maize grain and sweet corn were both low, and imported sweet corn measured lower than domestic sweet corn in Europe.', [gems]),
   ('European grain had a median below 3.2 µg/kg, and European sweet corn a median of 1–4 µg/kg; sweet corn labelled imported had a median below 2.4 µg/kg against 2.6–4 µg/kg for domestic, from 138 and 129 results.', [gems]),
   ('Field surveys in China were higher: maize from Guizhou karst fields averaged 43 µg/kg with 13.5% above 100 µg/kg, and maize from an industrial area near Chengdu averaged 260 µg/kg, both on a dry-weight basis.', [li22, liu22]),
   ('Maize from Nanyang Basin fields in Henan averaged 18 µg/kg cadmium on an air-dried basis, showing that ordinary Chinese fields are not uniformly high.', [liu25])),
 P(('For arsenic, maize grain is generally low but has a wider upper tail than sweet corn.', [gems]),
   ('European total arsenic medians were below 12–15 µg/kg for grain and below 10 µg/kg for sweet corn, but 7 of 721 grain results exceeded 300 µg/kg, the Mercosur cereal limit, against a highest sweet corn value of 27 µg/kg in Europe.', [gems, mer]),
   ('Only 12 maize results were speciated for inorganic arsenic, and 2 were detected, at 8 and 310 µg/kg.', [gems]),
   ('Maize from Bangladesh fields averaged 640 µg/kg total arsenic on a dry-weight basis, and Sri Lankan farm maize averaged 91 µg/kg wet weight with most results below detection, so arsenic depends strongly on local soil and water.', [isl, edi])),
],
'processing': [
 P(('No study in the library measured the same corn before and after washing, husking, milling, soaking or cooking for metals.', []),
   ('Cooking was compared only across different samples: cooked sweet corn submitted to GEMS/Food had lead and cadmium medians similar to raw sweet corn from the same region, with overlapping reporting limits.', [gems]),
   ('Heat does not destroy metals, so cooking can lower a concentration only by moving metal into water or adding water to the food.', [])),
 P(('Drying works the other way.', []),
   ('Field studies report dried grain, and drying raises the concentration per kilogram because water is removed, so dry-weight results cannot be set against sweet corn as eaten.', [aba, li22, sal]),
   ('Fresh sweet corn from a North Dakota farmers’ market, measured after oven drying, had 7 µg/kg lead and 6 µg/kg cadmium on a dry-weight basis.', [sal])),
 P(('Milled and processed maize foods are outside this page, but one comparison shows why corn matters to their contamination.', []),
   ('European infant porridges and cakes that mixed rice with maize and other grains had median inorganic arsenic of 10 and 8 µg/kg against 66 and 60 µg/kg for pure rice products, although maize’s own contribution was not separated.', [car])),
],
'controls': [
 P(('Measured or observed controls for metals in corn act at the field and at lot release.', []),
   ('Field siting has the clearest evidence: grain from farms downwind of a cement plant, irrigated with wastewater, or within 3 km of coal-fired power plants carried several to many times more lead or mercury than grain from control sites in the same studies.', [aba, elh, li17]),
   ('These are observational comparisons, not tested interventions, and they come from single studies in Nigeria, Egypt and China.', [aba, elh, li17])),
 P(('Crop choice changes exposure on contaminated land.', []),
   ('Near the Chinese power plants, maize held about a third of the mercury of rice at the same locations (21 against 63 µg/kg at 1 km), and in the Chengdu industrial area maize averaged 260 µg/kg cadmium against 460 µg/kg for rice.', [li17, liu22]),
   ('In Guangxi, soils richer in organic carbon and manganese, and with higher pH, gave lower cadmium uptake into maize grain, which supports liming and organic amendments as plausible levers, although no amendment was tested on maize grain in the library.', [gu])),
 P(('At release, the supported control is lot testing against the destination limit with an adequate method.', [eu, cx]),
   ('A portable screening method recovered 95–110% of cadmium and lead added to corn, which supports rapid screening, while laboratory confirmation remains necessary.', [tia])),
],
'tradeoffs': [
 P(('Choosing corn instead of rice on contaminated land lowers mercury and cadmium in the grain but does not remove the source.', [li17, liu22]),
   ('The same Chengdu maize still averaged 290 µg/kg lead, above the 200 µg/kg cereal limit, so a crop switch can trade one problem for another.', [liu22, eu])),
 P(('Metals do not move together.', []),
   ('In Burkina Faso markets, maize from Ouagadougou and Cinkassé had the same median lead (230 µg/kg) but nickel of 670 against 1,090 µg/kg, and maize from Bangladesh fields carried 1,900 µg/kg chromium and 1,400 µg/kg nickel alongside 310 µg/kg lead on a dry-weight basis.', [baz, isl]),
   ('A lot that passes a lead limit therefore says little about cadmium, arsenic or nickel unless those are tested as well.', [eu])),
 P(('Grain and sweet corn are judged against different limits.', []),
   ('A sweet corn lot at 50 µg/kg lead is within the EU sweet corn limit of 100 µg/kg, while the same value in grain would be a quarter of the cereal limit; comparing them per kilogram without moisture mixes two different foods.', [eu])),
],
'testing': [
 P(('A useful corn test reports total lead, cadmium and arsenic with quantification limits well below the limits that apply.', [eu, cx]),
   ('Many GEMS/Food maize non-detects carried limits of 20–40 µg/kg for lead and 10–25 µg/kg for arsenic, adequate for grain but coarse for sweet corn, where the EU cadmium limit is 20 µg/kg.', [gems, eu]),
   ('The FDA reported cooked corn with limits of 4 µg/kg for lead, 3 µg/kg for arsenic and 1 µg/kg for mercury.', [fda])),
 P(('Several field studies lacked basic quality checks.', []),
   ('A Nigerian seasonal survey measured mercury after dry ashing at 550 °C, which drives mercury off, and an Ethiopian market composite was read below the lowest calibration standard; these values are shown but held.', [abd, get]),
   ('Arsenic in maize should be read as total arsenic unless the laboratory speciated it, because only 12 inorganic arsenic results exist for maize in the evidence.', [gems])),
 P(('State the form and basis on every result.', []),
   ('A dried-grain result, an as-sold grain result and a sweet corn result as eaten are not interchangeable, and the EU and Codex limits for sweet corn apply to kernels and cob without husk on a wet-weight basis.', [eu, cx])),
],
'procurement': [
 P(('Ask for lot-specific lead and cadmium results on the form being bought, with the quantification limit, compared with the destination-market limit.', [eu, cx]),
   ('For maize grain the EU, Codex, China, Hong Kong, Korea and India set 200 µg/kg lead and 100 µg/kg cadmium; China and Hong Kong add 20 µg/kg total mercury for maize and 500 µg/kg total arsenic for cereals other than rice, and Mercosur sets 300 µg/kg arsenic.', [eu, cx, cn, hk, kr, ind, mer]),
   ('For sweet corn the EU sets 100 µg/kg lead and 20 µg/kg cadmium and Codex 50 µg/kg for both, and the EU adds nickel limits of 400 µg/kg for fruiting vegetables including sweet corn, applied since July 2025, and 800 µg/kg for cereals from July 2026.', [eu, cx])),
 P(('Record where the corn was grown, not only where it was packed.', [gems]),
   ('The evidence supports avoiding grain from fields downwind of cement or battery plants, near coal-fired power plants, irrigated with wastewater or on mining land unless lot testing shows otherwise.', [aba, jia, li17, elh, rom, bed])),
 P(('Within the monitoring evidence, the lowest-lead options were sweet corn and European-reported maize grain, and recent European grain had no lead results above the cereal limit in 2014–2020.', [gems, fda]),
   ('These are descriptive patterns from reporting markets; they support asking for origin and test data, not a preference for any producing country.', [gems])),
],
'product': [
 P(('Corn is a staple in Africa and Latin America and a common vegetable elsewhere, so its share of metal intake depends heavily on how much is eaten.', []),
   ('No source in the ledger gives a verified population estimate of lead or cadmium intake from maize grain or sweet corn.', []),
   ('A Henan village study estimated that adults ate 13.5 g of corn a day, and several field studies report intake indices, but most rest on dry-weight values applied to as-eaten intake or on concentrations held for integrity problems.', [jia, isl, elh])),
 P(('Monitoring results bound the contribution for typical retail corn.', []),
   ('With cooked US sweet corn below 4 µg/kg lead and 1 µg/kg mercury in every composite, and median cadmium of 2.6 µg/kg, ordinary retail sweet corn adds little per serving compared with the limits.', [fda]),
   ('Where maize is eaten daily as a staple, the field results above 200 µg/kg lead in Burkina Faso, Bangladesh and contaminated areas are the cases that would matter for intake, but none was turned into a verified exposure estimate.', [baz, isl, aba, elh])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that names corn or maize, every corn row in the WHO GEMS/Food exports and every corn food in the FDA Total Diet Study; each has a recorded decision based on its content.', [gems, fda]),
   ('Thirty literature sources contribute results for maize grain or fresh corn, and values from 13 are held in part because they could not be reconciled with their own methods or tables.', [zha, get, gho, isl15, ibr, abd, zhu, mas, pir])),
 P(('The main gaps are origin-linked monitoring of maize grain outside Europe and the Western Pacific, inorganic arsenic in maize, and any study that measures the same corn before and after cleaning, milling or cooking.', [gems]),
   ('Two records about Health Canada diaper-rash monographs matched the search but have no readable file; they are unrelated to corn.', [])),
],
}

headings = {'summary': 'Corn overview', 'identity': 'What counts as corn', 'occurrence': 'Heavy metal contamination profile of corn',
 'pathways': 'How metals reach corn', 'variation': 'Which forms and regions measured lower', 'processing': 'Drying, cooking and processing',
 'controls': 'Mitigation from field to lot', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing corn for metals',
 'procurement': 'Buying and verifying corn', 'product': 'Exposure from corn', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Maize grain and fresh corn (sweet corn raw, frozen or cooked; baby corn), each kept as a separate form.', gems, fda, eu),
             A('Canned corn, flour, meal, grits, flakes, popcorn, tortillas, oil, syrup, feed, infant foods and corn salad are excluded.', gems, fda),
             A('Basis is kept as reported: as sold or eaten, dry weight, or unstated; no moisture conversion is applied.', gems, aba, abd)],
'summary': [A('Monitored maize grain and sweet corn are mostly below reporting limits for Pb, Cd, As and Hg; 8 of 890 European grain Pb results exceeded 200 µg/kg.', gems, eu, cx),
            A('Contaminated growing areas (cement plant, wastewater, coal power plants, mining) raise Pb, Cd, Hg or As several-fold.', aba, elh, li17, rom),
            A('Ask for lot results with adequate quantification limits against the grain or sweet corn limit that applies.', eu, gems)],
'occurrence': [A('Pb, Cd, total As, iAs, total Hg, Ni, Cr, Al, Sn and U reported across GEMS/Food, FDA TDS and 30 literature sources.', gems, fda, aba, abd, elh, li22, bed),
               A('HMI references by form and basis use GEMS/Food region-by-year medians, FDA composites and ordinary-field medians.', gems, fda, edi),
               A('Non-detects are bounded intervals; held values are shown with reasons and not compared.', zha, get, gho, isl15)],
'pathways': [A('Soil uptake (Cd, Ni) modulated by organic carbon, Mn and pH; transfer factors 0.054 Cd and 0.014 Pb in Bangladesh.', gu, isl),
             A('Industrial deposition: cement plant downwind Pb 230–380 vs 20 µg/kg dw; coal power plant Hg 21 vs 0.55 µg/kg fw.', aba, li17),
             A('Wastewater irrigation (Pb 260–550 µg/kg) and mining or coal-burning areas (As 740–4,240 µg/kg).', elh, rom, bai)],
'variation': [A('Lowest observed lead: cooked and raw sweet corn (US TDS all <4 µg/kg; raw sweet corn medians <1.4–10 µg/kg).', fda, gems),
              A('Maize grain Pb: Europe 8 of 890 above 200 µg/kg against 24 of 327 in Western Pacific submissions; European exceedances fell to 0 of 400 in 2014–2020.', gems),
              A('Cd: imported European sweet corn lower than domestic; Chinese field surveys higher (43–260 µg/kg dw).', gems, li22, liu22)],
'processing': [A('No before-and-after processing study for metals in corn exists in the library.', gems),
               A('Drying raises concentration per kilogram; dry-weight field results cannot be compared with sweet corn as eaten.', aba, sal),
               A('Mixing maize and other grains with rice lowered infant-food iAs medians (10 vs 66 µg/kg), maize contribution not isolated.', car)],
'controls': [A('Field siting away from cement plants, wastewater irrigation and coal power plants is supported observationally.', aba, elh, li17),
             A('Maize accumulates less Hg and Cd than rice on the same contaminated land.', li17, liu22),
             A('Lot testing with adequate methods; portable screening recovered 95–110% of added Cd and Pb in corn.', eu, tia)],
'tradeoffs': [A('Crop switching on contaminated land can leave Pb above the cereal limit (Chengdu maize 290 µg/kg).', liu22, eu),
              A('Metals vary independently; low lead does not imply low nickel or chromium.', baz, isl),
              A('Grain and sweet corn have different limits; per-kilogram comparisons mix foods of different moisture.', eu)],
'testing': [A('Quantification limits must sit well below 200 µg/kg Pb and 100 µg/kg Cd for grain and 20 µg/kg Cd for sweet corn.', gems, eu, fda),
            A('Several field studies lacked detection limits or valid methods; their values are held.', abd, get),
            A('Arsenic is mostly total arsenic; only 12 inorganic arsenic results exist for maize.', gems)],
'procurement': [A('Grain: Pb 200 and Cd 100 µg/kg (EU, Codex, China, HK, Korea, India); Hg 20 µg/kg and As 500 µg/kg (China, HK); As 300 µg/kg (Mercosur).', eu, cx, cn, hk, kr, ind, mer),
                A('Sweet corn: EU Pb 100 and Cd 20 µg/kg; Codex 50 µg/kg each; EU Ni 400 µg/kg fruiting vegetables.', eu, cx),
                A('Record growing location; avoid grain from industrial, wastewater-irrigated or mining land without lot results.', aba, elh, li17, rom)],
'product': [A('No verified population exposure estimate for metals from corn exists in the ledger.', jia),
            A('Cooked US sweet corn below 4 µg/kg Pb in all composites; median Cd 2.6 µg/kg.', fda),
            A('Staple-maize settings with field Pb above 200 µg/kg are where intake would matter; none was converted into verified exposure.', baz, isl)],
'assessment': [A('All corn- and maize-naming source records, GEMS/Food rows and FDA TDS corn foods dispositioned on content.', gems, fda),
               A('Held values in 13 sources (integrity conflicts); two unrelated Health Canada records unreadable.', zha, get, gho, isl15, ibr),
               A('Gaps: origin-linked grain monitoring outside Europe, inorganic arsenic, processing before-and-after studies.', gems)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Is sweet corn lower in heavy metals than maize grain?',
  P(('Per kilogram, yes, for lead in the monitoring evidence: raw sweet corn medians were below 1.4–10 µg/kg and cooked US sweet corn was below 4 µg/kg in every composite, against a European grain median below 20 µg/kg.', [gems, fda]),
    ('Sweet corn is mostly water and grain is dry, so this reflects the food as eaten rather than lower uptake, and the EU sets a lower lead limit for sweet corn (100 µg/kg) than for cereals (200 µg/kg).', [eu]))),
 ('Which regions reported the lowest lead in maize grain?',
  P(('European submissions, with a median below 20 µg/kg and 8 of 890 results above 200 µg/kg, against 24 of 327 above 200 µg/kg in Western Pacific submissions from 2001–2010.', [gems]),
    ('These are reporting markets, mostly of domestic grain, so they show where testing found lower lead rather than which countries grow cleaner maize.', [gems]))),
],
'pathways': [
 ('Does living near a factory or power plant affect corn grown there?',
  P(('In the studies available, yes: maize downwind of a cement plant averaged 230–380 µg/kg lead against 20 µg/kg at a control farm, and maize within 1 km of coal-fired power plants held about 21 µg/kg mercury against about 1 µg/kg at 5 km.', [aba, li17]),
    ('These are single observational studies, so the size of the effect elsewhere depends on emissions, wind and distance.', [aba, li17]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in corn?',
  P(('Lead, cadmium, arsenic and mercury are measured most often, and in monitored maize grain and sweet corn most results are below reporting limits.', [gems, fda]),
    ('Field studies also report nickel and chromium, which reached about 1,400–1,900 µg/kg in dried maize from Bangladesh fields.', [isl])), 'GEMS/Food corn records; FDA TDS food 54; Islam 2014 Table 3'),
 ('ING-FAQ-02', 'How do heavy metals get into corn?',
  P(('Corn takes up cadmium and nickel from soil, and lead and mercury also reach it from dust and emissions settling on the plant.', [gu, aba, li17]),
    ('Wastewater irrigation and mining or industrial land raised lead, cadmium, mercury or arsenic in the studies available.', [elh, rom, bai])), 'Gu 2019 regression; Abatemi-Usman Table 4; Li 2017 Table 2; El-Hassanin Tables 4–5'),
 ('ING-FAQ-04', 'Which types of corn have the lowest levels?',
  P(('For lead, sweet corn measured lowest per kilogram: cooked US sweet corn was below 4 µg/kg in all 27 composites and raw sweet corn medians were below 1.4–10 µg/kg.', [fda, gems]),
    ('Maize grain had a European median below 20 µg/kg, and the higher figure largely reflects that grain is dry.', [gems])), 'FDA TDS food 54; GEMS/Food sweet corn and grain lead'),
 ('ING-FAQ-05', 'Which countries or regions produce corn with the lowest lead?',
  P(('Among reporting regions, European maize grain had the fewest results above the 200 µg/kg cereal limit (8 of 890), against 24 of 327 in Western Pacific submissions.', [gems]),
    ('GEMS/Food does not name the country where corn was grown, so the evidence cannot rank producing countries; growing near industry, wastewater or mines matters more in the field studies.', [gems, aba, elh])), 'GEMS/Food EURO and WPRO maize lead'),
 ('ING-FAQ-06', 'Do foods made from corn also contain heavy metals?',
  P(('Corn flour, flakes, popcorn, canned corn and other corn foods are measured separately and have their own pages, so their results are not repeated here.', [gems, fda]),
    ('One European study found that infant porridges mixing rice with maize and other grains had lower inorganic arsenic than pure rice porridges (median 10 against 66 µg/kg).', [car])), 'Carey 2018 Results'),
 ('ING-FAQ-07', 'What do the levels in corn mean for health?',
  P(('No source in the ledger turned corn concentrations into a verified estimate of population intake, so the evidence cannot say how much corn contributes to lead or cadmium exposure overall.', []),
    ('Typical retail sweet corn is low per serving, while maize eaten daily as a staple from contaminated fields is the case where intake could matter.', [fda, baz, isl])), 'FDA TDS food 54; Bazie Table 1; Islam 2014 Table 3'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in corn?',
  P(('Yes: for maize grain the EU, Codex, China, Hong Kong, Korea and India set 200 µg/kg lead and 100 µg/kg cadmium, and China and Hong Kong set 20 µg/kg total mercury for maize.', [eu, cx, cn, hk, kr, ind]),
    ('For sweet corn the EU sets 100 µg/kg lead and 20 µg/kg cadmium on a wet-weight basis, and Codex sets 50 µg/kg for each.', [eu, cx])), 'EU 2023/915 Annex I 3.1.4.2, 3.1.11, 3.2.4.1, 3.2.12.1; CXS 193 lead and cadmium tables; GB 2762 Tables 1–3'),
 ('ING-FAQ-09', 'Can processing reduce heavy metals in corn?',
  P(('No study in the library measured the same corn before and after cleaning, husking, milling or cooking, so no reduction can be stated.', []),
    ('Drying raises the concentration per kilogram because water is removed, which is why dried-grain results look higher than sweet corn as eaten.', [aba, sal])), 'Assessment of extracted studies; Saleem 2025 Table 1'),
 ('ING-FAQ-14', 'Does cooking corn get rid of heavy metals?',
  P(('Heat does not destroy metals, and no study measured the same corn before and after cooking.', []),
    ('Cooked sweet corn in monitoring had lead and cadmium similar to raw sweet corn from the same regions, mostly below reporting limits.', [gems, fda])), 'GEMS/Food cooked versus raw sweet corn; FDA TDS food 54'),
 ('ING-FAQ-10', 'Does corn contain inorganic arsenic like rice?',
  P(('Much less is known: only 12 maize results were speciated for inorganic arsenic, and 2 were detected, at 8 and 310 µg/kg.', [gems]),
    ('Total arsenic in monitored maize grain had a median below 12–15 µg/kg, but field maize from Bangladesh and arsenic-affected areas of China and Ecuador was far higher.', [gems, isl, bai, rom])), 'GEMS/Food iAs and tAs maize; Islam 2014; Bai 2022; Romero-Crespo Table 2'),
 ('ING-FAQ-12', 'Is corn lower in arsenic and cadmium than rice?',
  P(('In the same contaminated areas, maize carried less than rice: about a third of the mercury near Chinese coal-fired power plants and 260 against 460 µg/kg cadmium near Chengdu.', [li17, liu22]),
    ('Maize lead was similar to rice in Chengdu (290 against 300 µg/kg), so the advantage is not universal.', [liu22])), 'Li 2017 Table 2; Liu 2022 Table 2'),
 ('ING-FAQ-13', 'Is corn a concern for babies and children?',
  P(('Infant cereals and baby foods containing corn are covered on their own pages; on this page, retail sweet corn was low in lead, with every cooked US composite below 4 µg/kg.', [fda]),
    ('Maize from contaminated fields would matter most where it is a daily staple for children, and the evidence has no child-specific exposure estimate.', [aba, elh])), 'FDA TDS food 54'),
 ('CORN-FAQ-01', 'Is sweet corn safer than field corn?',
  P(('Sweet corn had lower lead per kilogram in monitoring, but it is mostly water and is judged against a lower lead limit (100 against 200 µg/kg in the EU).', [gems, fda, eu]),
    ('Both forms grown near industry, wastewater or mines can carry more metal, so where the corn grew matters more than the type.', [aba, elh, li17])), 'GEMS/Food; FDA TDS food 54; EU 2023/915'),
 ('CORN-FAQ-02', 'Has lead in corn been falling?',
  P(('In European maize grain submitted to GEMS/Food, 4 of 233 results from 2001–2007 and 4 of 257 from 2008–2013 exceeded 200 µg/kg lead, against none of 400 from 2014–2020.', [gems]),
    ('Coverage changed over the years, so this is a monitoring pattern rather than a fixed panel of farms.', [gems])), 'GEMS/Food EURO maize lead by year'),
 ('CORN-FAQ-03', 'Is imported corn higher in metals than locally grown corn?',
  P(('In European submissions, imported maize grain had lead and cadmium similar to domestic grain, and imported sweet corn had lower cadmium (median below 2.4 against 2.6–4 µg/kg).', [gems]),
    ('The export does not name the producing country, so this cannot identify which origins are higher.', [gems])), 'GEMS/Food EURO maize and sweet corn by origin label'),
 ('CORN-FAQ-04', 'Is corn grown near mines or factories higher in metals?',
  P(('Yes, in every such study available: downwind of a cement plant, beside coal-fired power plants, near a battery plant, on wastewater-irrigated fields and in mining areas, corn carried more lead, mercury, cadmium or arsenic than control or market corn.', [aba, li17, jia, elh, rom, bed]),
    ('The size of the increase varied widely between sites and metals.', [aba, li17, elh])), 'Abatemi-Usman Table 4; Li 2017 Table 2; Jiang 2020 Table 4; El-Hassanin Tables 4–5'),
 ('CORN-FAQ-05', 'How can I tell whether a corn metal test is good enough?',
  P(('Check that the quantification limit sits well below the limit for the form tested, for example below 20 µg/kg cadmium for sweet corn in the EU, and that the result states the form and basis.', [eu]),
    ('The FDA reported cooked corn with limits of 4 µg/kg lead, 3 µg/kg arsenic and 1 µg/kg mercury, a useful benchmark for sensitivity.', [fda])), 'EU 2023/915 3.2.4.1; FDA TDS reporting limits'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-corn-v1', 'family': 'ingredient', 'slug': 'corn', 'title': 'Corn', 'display_title': 'Corn', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, arsenic and mercury in maize grain and sweet corn: monitoring results, contaminated fields, regions, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Corn FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, iAs, total Hg, Ni, Cr, Al, Sn, U as reported; arsenic speciated for only 12 maize grain results', 'material_form': 'Maize grain; sweet corn raw, frozen or cooked; baby corn; corn of unstated form. Canned corn, flour, meal, grits, flakes, popcorn, tortillas, oil, syrup, feed, infant foods and corn salad excluded',
               'basis': 'As reported: as sold or as eaten, fresh or wet weight, dry weight or unstated; µg/kg; no moisture conversion', 'geography_market': 'WHO reporting region, purchase market or growing area as each source reports',
               'period': 'Source collection years 1999–2023 where reported; unreported dates stay unknown', 'stage': 'Field siting, irrigation, drying, cooking, retail and release testing',
               'population_route': 'Dietary ingestion', 'comparator_outcome': 'HMI corn references by form and basis; same-study site, season and form contrasts; observational siting comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record naming corn or maize, every corn row in WHO GEMS/Food exports and every corn food in the FDA Total Diet Study FY2018–FY2020',
                'protocol_ref': 'data/evidence/contracts/corn/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/corn/extraction/'],
                'screening_ref': 'data/evidence/contracts/corn/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'GEMS/Food exports identify reporting region, not growing country'],
                'unresolved_access': ['Health Canada diaper-rash product monographs (two records, unrelated to corn): no readable file']},
     'source_catalogue': {'topic': 'ingredients/corn'}, 'retain_history_only': True}

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

quick = P(('Monitored maize grain and sweet corn are mostly below reporting limits for lead, cadmium, arsenic and mercury; corn grown downwind of industry, beside power plants, on wastewater-irrigated fields or in mining areas carried several times more.', [gems, fda, aba, elh, li17]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead and cadmium in maize grain from contaminated fields; arsenic where soil or water is high in it; mercury near coal-fired power plants.', [aba, liu22, isl, li17]),
 ('Main drivers', 'Where the corn grew, irrigation water, the form bought (dry grain or sweet corn) and the basis a result is reported on.', [elh, gu, gems]),
 ('Practical framing', 'Ask for lot results with quantification limits well below 200 µg/kg lead and 100 µg/kg cadmium for grain, or 20 µg/kg cadmium for sweet corn.', [eu, cx])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-corn-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-03', 'status': 'deferred', 'reason': 'A few GEMS/Food maize records carry an organic-production label, too few for a comparison; no study compares organic and conventional corn for metals.'},
 {'id': 'ING-FAQ-11', 'status': 'not_applicable', 'reason': 'No study compares husked and unhusked, or whole and degermed, corn for metals; milled products belong to other pages.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'No study measured soaking or nixtamalisation of corn for metals in the library.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative corn serving guidance for metals; no frequency is invented.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for corn metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, consumer=False):
    return {'id': f'corn-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/corn.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Corn', 'audiences': ['supplier', 'brand'] + (['consumer'] if consumer else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, yield and cost not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific lead and cadmium results on the form sold, using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational field survey' if kind == 'observational' else 'Measured method or processing comparison' if kind == 'measured' else 'Regulatory or author guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching corn, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'Differences are read from the source means or medians shown in outcomes.', 'basis_yield_mass_balance': 'Basis as stated in outcomes; no mass balance reported.',
            'other_contaminants': 'Mycotoxins are outside this table.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled field or commercial-scale intervention effect', 'next_action': 'No controlled field or commercial corn intervention study in the library; keep effects unquantified unless measured.'}],
            'review': {'record_ref': 'data/evidence/contracts/corn/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis, note):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
controls = [
 control(1, aba, 'Abatemi-Usman et al. 2023', 'https://doi.org/10.1038/s41370-023-00548-8', 'cultivation', 'Grow corn away from cement plants and other industrial emitters', 'observational', 'Maize grain from five farms around a cement plant, Obajana, Kogi State, Nigeria, 2017 harvest',
   'Maize from the three farms downwind of the plant averaged 230–380 µg/kg lead, against 20 µg/kg at a control farm 18 km upwind; a farm 2.7 km upwind averaged 10 µg/kg.',
   'Downwind farms against the upwind control farm, same harvest and method; 12–24 cobs per farm.',
   [out('Pb', 'higher', 20, 380, 'Downwind farms higher (observational)', 'Grain lead, dry weight', 'Farm 2.3 km downwind against control farm', 'Table 4, p. 5', 'Maize grain, dry weight', 'Source means of 14 and 19 cobs.'),
    out('Pb', 'higher', 20, 230, 'Downwind farms higher (observational)', 'Grain lead, dry weight', 'Farm 0.7 km downwind against control farm', 'Table 4, p. 5', 'Maize grain, dry weight', 'Source means of 24 and 19 cobs.')],
   'Farmland near a cement plant; wind direction mattered more than distance.', 'Observational; one plant and harvest.', 'Field survey'),
 control(2, elh, 'El-Hassanin et al. 2020', 'https://doi.org/10.1016/j.toxrep.2019.11.018', 'cultivation', 'Irrigate corn with fresh or ground water, not wastewater', 'observational', 'Maize grain from nine sites in Beheira, Kafr El-Sheikh and Giza, Egypt, August 2017',
   'Maize irrigated with sewage or industrial wastewater carried 260–550 µg/kg lead and 38–112 µg/kg cadmium; maize irrigated with Nile or ground water in the same governorates carried 30 µg/kg lead and 10 µg/kg cadmium or less.',
   'Wastewater-irrigated sites against the fresh-water site in the same governorate; three field points per site.',
   [out('Pb', 'higher', 30, 550, 'Wastewater irrigation higher (observational)', 'Grain lead', 'Kafr-Dokhmais against Al-Hawia (Kafr El-Sheikh)', 'Table 4', 'Maize grain, basis not stated', 'Source site means of three field points.'),
    out('Cd', 'higher', 10, 112, 'Wastewater irrigation higher (observational)', 'Grain cadmium', 'Al-Nasiria against Al-Hawia (Kafr El-Sheikh)', 'Table 5', 'Maize grain, basis not stated', 'Source site means of three field points.')],
   'Where low-quality irrigation water is used.', 'Observational; basis not stated; one season.', 'Field survey'),
 control(3, li17, 'Li et al. 2017', 'https://doi.org/10.1038/srep46545', 'cultivation', 'Keep corn fields away from coal-fired power plants', 'observational', 'Maize grain near two coal-fired power plants, China, 2015',
   'Maize mercury fell from about 21 µg/kg at 1 km to 4.7–6.7 µg/kg at 3 km and 1.06 µg/kg at 5 km; maize bought at a grocery store more than 55 km away held 0.72 µg/kg.',
   'Distance gradient from each plant against a retail control.',
   [out('tHg', 'higher', 0.72, 21.18, 'Near-plant maize higher (observational)', 'Grain mercury, fresh weight', '1 km from plant B against grocery control', 'Table 2', 'Maize grain, fresh weight', 'Source means.'),
    out('tHg', 'lower', 21.18, 1.06, 'Lower with distance (observational)', 'Grain mercury, fresh weight', '5 km against 1 km from plant B', 'Table 2', 'Maize grain, fresh weight', 'Source means.')],
   'Areas downwind of coal combustion.', 'Observational; sample counts per site not stated.', 'Field survey'),
 control(4, li17, 'Li et al. 2017', 'https://doi.org/10.1038/srep46545', 'cultivation', 'Prefer maize to rice on mercury-affected land', 'observational', 'Maize and rice grain from the same locations near coal-fired power plants, China, 2015',
   'Rice held more mercury than maize at every location, for example 62.95 against 21.02 µg/kg at 1 km from plant A.',
   'Rice against maize grain from the same locations.',
   [out('tHg', 'lower', 62.95, 21.02, 'Maize lower than rice (observational)', 'Grain mercury, fresh weight', 'Maize against rice at site A1', 'Table 2', 'Grain, fresh weight', 'Source means.')],
   'Crop choice on mercury-affected land; does not remove the source.', 'Observational; one study.', 'Field survey'),
 control(5, liu22, 'Liu et al. 2022', 'https://doi.org/10.3389/fchem.2022.988587', 'cultivation', 'Prefer maize to rice on cadmium-affected land', 'observational', 'Maize and rice grain from an industrial and agricultural area near Chengdu, China',
   'Maize averaged 260 µg/kg cadmium against 460 µg/kg for rice from the same area, while lead was similar (290 against 300 µg/kg).',
   'Maize (10 composites) against rice (40 composites) from the same study area.',
   [out('Cd', 'lower', 460, 260, 'Maize lower than rice (observational)', 'Grain cadmium, dry weight', 'Maize against rice', 'Table 2', 'Grain, dry weight', 'Source means.'),
    out('Pb', 'lower', 300, 290, 'About the same as rice; above the cereal limit', 'Grain lead, dry weight', 'Maize against rice', 'Table 2', 'Grain, dry weight', 'Source means.')],
   'Crop choice on cadmium-affected land.', 'Observational; one study; maize lead stayed above 200 µg/kg.', 'Field survey'),
 control(6, gu, 'Gu et al. 2019', 'https://doi.org/10.1016/j.etap.2019.103199', 'soil remediation', 'Raise soil pH and organic matter where cadmium is a concern', 'observational', 'Maize grain and rhizosphere soil, Guangxi, China, 2015',
   'Across 65 paired samples, maize grain cadmium and lead uptake fell as soil organic carbon and manganese rose, and cadmium uptake fell with higher pH; no amendment was applied.',
   'Regression across 65 paired grain and soil samples; no treatment comparison.',
   [out('Cd', 'context', None, None, 'Association only; effect of amendment not measured', 'Grain cadmium bioaccumulation', 'Soil pH, organic carbon and manganese', 'Regression equations, Results', 'Maize grain, dry weight', 'Regression coefficients; not an intervention effect.')],
   'Acidic, low-organic soils with cadmium.', 'Associational; no tested liming or amendment on maize grain in the library.', 'Field survey'),
 control(7, gems, 'WHO GEMS/Food', 'https://extranet.who.int/gemsfood/?DisplayFormat=1', 'sourcing and procurement', 'Ask for origin and lot lead results on maize grain', 'observational', 'Maize grain submitted to GEMS/Food from Europe and the Western Pacific',
   'Western Pacific submissions from 2001–2010 had 24 of 327 lead results above 200 µg/kg against 8 of 890 in Europe, and European exceedances fell to none of 400 in 2014–2020.',
   'Reporting regions and periods within one monitoring dataset.',
   [out('Pb', 'higher', 20, 50, 'Western Pacific medians higher (observational)', 'Median grain lead (upper bounds)', 'WPRO against EURO random sampling', 'primary/gemsfood-corn-records.csv', 'Maize grain, as sold', 'HMI-calculated median bounds of individual monitoring results; country of growth not exported.')],
   'Buyers sourcing maize grain internationally.', 'Observational; reporting regions are not growing areas.', 'Monitoring dataset'),
 control(8, eu, 'Commission Regulation (EU) 2023/915', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915', 'lot acceptance and release', 'Test each lot against the limit for its form', 'guidance', 'Maize grain and sweet corn placed on the EU market',
   'The EU limits lead at 200 µg/kg and cadmium at 100 µg/kg for cereals, and lead at 100 µg/kg and cadmium at 20 µg/kg for sweet corn, on a wet-weight basis; nickel limits apply from July 2025 for sweet corn (400 µg/kg) and July 2026 for cereals (800 µg/kg).',
   'Regulatory limits; no measured effect.',
   [out('Pb', 'context', None, None, 'Regulatory limit; detection, not removal', 'Lead limit', 'Cereals 200 µg/kg; sweet corn 100 µg/kg', 'Annex I 3.1.11, 3.1.4.2', 'Wet weight', 'Regulatory text.'),
    out('Cd', 'context', None, None, 'Regulatory limit; detection, not removal', 'Cadmium limit', 'Cereals 100 µg/kg; sweet corn 20 µg/kg', 'Annex I 3.2.12.1, 3.2.4.1', 'Wet weight', 'Regulatory text.')],
   'Corn placed on the EU market.', 'Testing detects contamination; it does not remove it.', 'Regulation', True),
 control(9, tia, 'Tian et al. 2023', 'https://doi.org/10.1016/j.fochx.2023.100636', 'lot acceptance and release', 'Screen lots rapidly, then confirm in the laboratory', 'measured', 'Corn spiked with cadmium and lead, laboratory method study',
   'A magnetic clean-up with a portable electrochemical sensor recovered 95–110% of cadmium and lead added to corn, supporting on-site screening before laboratory confirmation.',
   'Recovery of added cadmium and lead in corn samples.',
   [out('Cd', 'context', None, None, 'Method recovery 95–110% (screening performance)', 'Recovery of added cadmium', 'Spiked corn', 'Table 2', 'Corn as analysed', 'Method validation; not an occurrence result.'),
    out('Pb', 'context', None, None, 'Method recovery 95–110% (screening performance)', 'Recovery of added lead', 'Spiked corn', 'Table 2', 'Corn as analysed', 'Method validation; not an occurrence result.')],
   'Grain buyers needing rapid screening.', 'Method validation only; detection limits as published.', 'Laboratory method'),
 control(10, car, 'Carey et al. 2018', 'https://doi.org/10.1371/journal.pone.0194700', 'product formulation', 'Blend maize and other grains with rice in infant foods', 'observational', 'Infant porridges and cakes sold in Europe',
   'Infant porridges and cakes mixing rice with maize and other gluten-free grains had median inorganic arsenic of 10 and 8 µg/kg, against 66 and 60 µg/kg for pure rice products; maize’s own share was not measured.',
   'Multi-grain against pure-rice products, as sold.',
   [out('iAs', 'lower', 66, 10, 'Multi-grain porridge lower (observational)', 'Median inorganic arsenic', 'Multi-grain against pure-rice porridge', 'Results', 'As sold', 'Source medians.'),
    out('iAs', 'lower', 60, 8, 'Multi-grain cakes lower (observational)', 'Median inorganic arsenic', 'Multi-grain against pure-rice cakes', 'Results', 'As sold', 'Source medians.')],
   'Infant food formulation; maize contribution not isolated.', 'Observational market comparison.', 'Market survey'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
