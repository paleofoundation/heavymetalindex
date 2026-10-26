"""Compose the honey synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction
records in data/evidence/contracts/ingredient-rollout-2026-10-22/honey/extraction/.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey'

fda = 'fda2022-tds-elements-fy2018-fy2020'; gems = 'who-gemsfood-heavy-metal-contaminants'; eu = 'eu-2023-915-contaminants-maximum-levels'
fs11 = 'fsanz2011-23rd-australian-total-diet-study'; fs19 = 'fsanz2019-25th-australian-total-diet-study'
agh = 'aghamirlou2015-iranian-honey-metals'; abe = 'abeslami2025-moroccan-honey-minerals'; nac = 'naccari2025-honey-toxic-metals-microelements'
tom = 'tomczyk2020-polish-honey-metal-transfer'; wise = 'wise2025-elevated-metals-us-honeys'; bek = 'bektashi2021-honey-metals-sugars-balkans'
gun = 'gunes2021-yalova-chestnut-honey-metals'; shu = 'shukla2020-honey-prayagraj-metals'; abu = 'aburas2023-libyan-honey-lead-cadmium'
sal = 'salama2019-libya-honey-metals'; tef = 'teferi2026-honey-ethiopia-kellem-wollega'; alj = 'aljedani2017-honeybee-honey-saudi-arabia'
man = 'manouchehri2021-honey-heavy-metals-review'; mar = 'margaoan2024-bee-products-heavy-metals'; kno = 'knoll2024-honeybee-cadmium-review'
zha = 'zhang2024-mip-pb-honey-cyprus'; mer = 'mercosur2011-gmc-res-12-inorganic-contaminants'; hk = 'hongkong2025-cap-132v-metallic-contamination'
cn = 'usda-fas2023-china-gb-2762-2022-translation'; hid = 'hidalgo2015-gluten-free-cereal-bars-argentina'; dep = 'depa2019-baby-food-lead-cadmium'
wil = 'wilczynska2026-poland-organic-honey-metals'

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
 P(('Large monitoring datasets find most honey lead, cadmium and mercury results at or below their reporting limits.', [gems, fda]),
   ('In WHO GEMS/Food, about one third of 4,901 European lead results and about a quarter of 1,000 results from the Americas were above detection, and the most recent European period had the fewest results definitely above the EU limit.', [gems]),
   ('All three FDA Total Diet Study honey composites from 2018–2020 were below every reporting limit, including 4 µg/kg for lead.', [fda])),
 P(('Lead is still the metal that decides most honey questions.', []),
   ('The EU sets a binding maximum of 0.10 mg/kg (100 µg/kg) for lead in honey and no honey limit for the other metals.', [eu]),
   ('Australia’s total diet studies found lead in honey at a median of 40 µg/kg and later a mean of 24 µg/kg, placing honey among the highest-lead foods tested, though honey contributed little to most people’s lead intake.', [fs11, fs19])),
 P(('Small apiary surveys tell a different and less consistent story.', []),
   ('Means of 90–190 µg/kg in eastern Morocco and 205–935 µg/kg across four Iranian regions sit above the pooled honey reference, while Balkan and Turkish surveys and most Polish surveys sit within it.', [abe, agh, bek, tom, gun, wil]),
   ('One small Polish study of 15 honeys (12 organic, 3 conventional) reported a mean of 147 µg/kg lead and up to 644 µg/kg, and said 7 of the 12 organic honeys exceeded the EU limit; it states no detection limit, reference material or recovery, so its rows are shown as printed and not used to rate honey.', [wil]),
   ('Several of the highest reported values fail checks against their own papers, so the page shows them but does not compare them.', [sal, tef, wise]),
   ('For a buyer, the supported priority is a lot-specific lead result measured with a method able to see well below 100 µg/kg; country of origin alone does not settle it.', [eu, zha])),
],
'identity': [
 P(('This page covers honey as sold or collected from the hive: blossom honeys named by floral source, honeydew honey, and multifloral blends, measured as they are eaten without moisture conversion.', [nac, tom, gems]),
   ('Bee-fed sugar syrup, a Libyan “black honey” made from sugar cane, and foods that contain honey are outside this scope, as is the “honey mushroom”, a fungus that shares the name in Hong Kong’s contaminant schedule.', [abu, hk, hid, dep])),
 P(('Honey’s identity matters because studies use different words for different things.', []),
   ('A “region” in GEMS/Food is a WHO reporting region, not where bees foraged, and several surveys report the place of purchase rather than the apiary.', [gems, bek])),
],
'occurrence': [
 P(('The table holds every honey result extracted from 17 survey, total diet and monitoring sources: one row for each statistic a source reports for a subgroup and metal, so a mean, a median and a range from the same samples appear as separate rows.', [gems, fda, fs11, fs19, tom, nac]),
   ('Ratings place a mean, median or single result against a pooled HMI honey reference built from seven lead sampling families and six cadmium families; non-detects remain intervals and are never read as zero.', [gems, fda, nac, shu, bek]),
   ('Rows that failed a check against their own paper stay visible with the reason and are not compared.', [sal, tef, wise])),
],
'pathways': [
 P(('Metals reach honey mainly through what bees collect: nectar and honeydew from plants rooted in local soil, and particles deposited from the air.', [tom, man, mar]),
   ('The best measured chain in the ledger, from Podkarpackie in Poland, found lead falling at every step from soil (21.3 mg/kg) to plants (0.52), bees (0.13) and honey (0.05 mg/kg).', [tom]),
   ('Cadmium followed the same pattern, with honey at about a thirtieth of the level in bee bodies (0.02 against 0.63 mg/kg), and its movement along the chain was faster on acidic soils.', [tom])),
 P(('Location effects are real but uneven.', []),
   ('In north-west Iran, honey from the most industrialised district averaged 935 µg/kg lead against 205–595 µg/kg elsewhere, the only metal with a significant regional difference.', [agh]),
   ('In Poland, by contrast, honeys from urbanised and ecologically clean areas were comparable for cadmium, lead, aluminium and nickel.', [tom]),
   ('A review of bee studies also reports substantial cadmium in bees from farmland and apparently unpolluted rural areas, sometimes above industrial sites.', [kno])),
 P(('Contact after harvest is a plausible second route.', []),
   ('Honey is acidic, and reviews and survey authors warn that bare metal, soldered or galvanised containers can add lead, tin, chromium or zinc; none of the sources measured this directly in honey.', [man, agh, tef])),
],
'variation': [
 P(('For lead, the lowest results come from routinely monitored retail honey.', [fda, gems, fs19]),
   ('FDA’s US composites were below 4 µg/kg, most European GEMS/Food results were below detection, and Australian honey averaged 24 µg/kg.', [fda, gems, fs19]),
   ('Among apiary surveys, five Balkan samples (33–55 µg/kg), Turkish chestnut honey (21 µg/kg mean) and Polish honeys (20–90 µg/kg means by habitat and variety) were lowest, while Iranian, Moroccan and Libyan honeys were highest.', [bek, gun, tom, agh, abe, abu]),
   ('These are lowest observed values in different studies with different methods, not a ranking of countries.', [])),
 P(('Within single studies, comparisons are more reliable.', []),
   ('In Calabria, chestnut honey had the lowest lead mean (79 µg/kg) and wildflower the highest (125 µg/kg), with 80% of wildflower samples above 100 µg/kg against 25% of chestnut and heather honeys.', [nac]),
   ('In Iran the less industrial south was lowest (205 µg/kg mean).', [agh]),
   ('These are tentative patterns from one region each, not a supported preference for a floral type everywhere.', [])),
 P(('Cadmium, mercury and arsenic are usually low, so their comparisons rarely change a decision.', [gems, fda]),
   ('The exception in the library is the same small Polish study, which reported arsenic up to 287.72 µg/kg in one organic honey in its Table 4 but a maximum of 387 µg/kg in its Table 6; both are shown as printed.', [wil]),
   ('European GEMS/Food cadmium results above detection had a median of 7.5 µg/kg, and US composites were below 1 µg/kg.', [gems, fda]),
   ('Aluminium is the exception that moves with type: Polish honeydew honey carried far more aluminium than the blossom honeys from the same apiaries.', [tom])),
],
'processing': [
 P(('No source in the ledger measured a processing step, filtration or storage time against a control for metals in honey.', []),
   ('The processing evidence is guidance: avoid soldered, uncoated or galvanised metal containers for acidic honey, and be aware that aluminium equipment may add aluminium.', [man, agh, nac]),
   ('One review notes comb (waxed) honey carrying more lead than other samples and attributes it to metal storage and wax; that is an observation from cited studies, not a tested effect.', [man])),
],
'controls': [
 P(('Controls for honey act at the apiary, at extraction and storage, and at the release test.', []),
   ('The only measured comparisons are observational: siting away from industrial districts coincided with lower lead in Iran, while urban and clean habitats did not differ in Poland.', [agh, tom]),
   ('Container and equipment controls are guidance without measured effects, and testing detects lead without removing it.', [man, agh, zha])),
],
'tradeoffs': [
 P(('Moving hives toward “clean” countryside is not a guaranteed fix.', [tom, kno]),
   ('Farmland can carry cadmium from phosphate fertiliser and soil, and the Polish clean-area honeys were not measurably lower than urban ones.', [kno, tom])),
 P(('Choosing floral type for lower lead can raise another metal.', []),
   ('Honeydew honey in Poland was higher in aluminium and manganese, while Calabrian honeydew sat in the middle for lead.', [tom, nac]),
   ('Cheaper screening tools carry their own trade-off: a published lead sensor’s detection limit, once its 20-fold dilution is counted, is about 378 µg/kg, too high to check the EU limit.', [zha])),
],
'testing': [
 P(('A useful honey lead test must be able to see well below 100 µg/kg.', [eu]),
   ('FDA’s reporting limit was 4 µg/kg and many European laboratories reported limits of a few µg/kg, but some GEMS/Food submissions carried limits of 200 µg/kg or more, which cannot show whether honey meets the EU limit.', [fda, gems]),
   ('Several surveys reported no detection limit, reference material or recovery at all.', [bek, alj, sal, wise])),
 P(('Report non-detects with their limit, keep the method and laboratory, and treat a single composite or a supplier’s average as different from a lot result.', [fda, gems]),
   ('Arsenic and mercury in honey should be read as totals; no source here measured their species.', [gun, shu, wise])),
],
'procurement': [
 P(('Ask for lot-specific lead results with the laboratory’s quantification limit, compared with the EU 100 µg/kg maximum or the limit in the destination market.', [eu, mer, cn]),
   ('Limits differ: MERCOSUR sets 300 µg/kg for lead, China 500 µg/kg, and Hong Kong 100 µg/kg for honey and sugar-based candies.', [mer, cn, hk])),
 P(('Record where the bees foraged as well as where the honey was packed or bought, because most datasets identify only the market.', [gems, bek]),
   ('Blends from several origins can hide a high-lead component that a single average will not reveal.', [])),
],
'product': [
 P(('Honey is eaten in small amounts, so even its relatively high lead median adds little to most diets.', [fs19]),
   ('Australia’s 25th Total Diet Study found honey was a minor contributor to lead exposure for every age group except children aged 2–5, where it contributed 6%.', [fs19])),
 P(('One US paper reports that honey intakes exceed tolerable weekly limits, but its intake table is mislabelled by a factor of 1,000.', [wise]),
   ('Recomputing with the paper’s own formula puts its lead intake at about 1.5% of the reference value it cites, so the paper does not show an exceedance.', [wise]),
   ('No source in the ledger measured metals in honey-containing foods together with the honey that went into them.', [hid, dep])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to honey or mentions it, plus every honey row in the WHO GEMS/Food, FDA and other indexed datasets; each has a recorded decision based on its content.', []),
   ('Three sources are held in part because their values could not be reconciled with their own methods or figures.', [sal, tef, wise]),
   ('Two gaps remain: the Australian total diet studies’ appendices with honey cadmium, arsenic and mercury, and the German MEAL study’s per-food supplement.', [fs11, fs19])),
],
}

headings = {'summary': 'Honey overview', 'identity': 'What counts as honey', 'occurrence': 'Heavy metal contamination profile of honey',
 'pathways': 'How metals reach honey', 'variation': 'Which honeys and origins measured lower', 'processing': 'Processing, storage and packaging',
 'controls': 'Mitigation from apiary to jar', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing honey for metals',
 'procurement': 'Buying and verifying honey', 'product': 'Exposure from honey', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Honey as sold or hive-collected, by floral source, honeydew and blends; as-eaten basis.', nac, tom, gems),
             A('Sugar syrup fed to bees, cane “black honey”, honey-containing foods and honey mushrooms are excluded.', abu, hid, hk),
             A('No moisture or recipe conversion is applied; mg/L results without density stay unconverted.', alj)],
'summary': [A('Most monitored honey is low or non-detect for Pb, Cd and Hg; lead is the deciding metal against the EU 100 µg/kg limit.', gems, fda, eu),
            A('Small apiary surveys report higher and less consistent lead, several failing internal checks.', agh, abe, sal, tef),
            A('Lot-specific lead results with an adequate quantification limit are the supported buyer control.', eu, zha)],
'occurrence': [A('Pb, Cd, total As, total Hg, Ni, Cr, Al, Sn and U are reported as totals in 17 sources.', gems, fda, nac, tom),
               A('Pooled HMI references use 73 lead and 61 cadmium subgroup units from multiple families.', gems, fda, nac, shu, bek),
               A('Non-detects are bounded intervals; held values are shown with reasons and not compared.', gems, fda, sal)],
'pathways': [A('Forage nectar, honeydew and airborne deposition are the main routes; lead falls from soil to honey.', tom, man),
             A('Industrial siting coincided with higher lead in Iran; Polish urban and clean areas did not differ.', agh, tom),
             A('Container and equipment contact is a plausible route stated as guidance, not measured.', man, agh)],
'variation': [A('Monitored retail honey (US, Europe, Australia) shows the lowest lead; apiary surveys vary widely.', fda, gems, fs19, bek),
              A('Within Calabria, chestnut honey had the lowest lead mean and wildflower the highest.', nac),
              A('No supported country or floral-type sourcing preference; comparisons are lowest observed or tentative.', agh, abe, nac)],
'processing': [A('No measured processing or storage effect on honey metals in the ledger.', man),
               A('Guidance: avoid soldered, uncoated or galvanised metal containers for acidic honey.', man, agh, tef),
               A('Aluminium equipment is cited as a possible aluminium source, not measured.', nac)],
'controls': [A('Apiary siting away from industrial districts: observational association with lower lead.', agh),
             A('Habitat label alone (urban versus clean) showed no measured difference in Poland.', tom),
             A('Testing detects lead and supports exclusion; it does not remove contamination.', eu, zha)],
'tradeoffs': [A('Rural or farmland siting can still expose bees to cadmium.', kno, tom),
              A('Honeydew honey is higher in aluminium while not lowest in lead.', tom, nac),
              A('Low-cost sensors may lack the sensitivity needed for the EU lead limit.', zha)],
'testing': [A('Quantification limits must sit well below 100 µg/kg for lead; some submissions used 200 µg/kg or more.', fda, gems, eu),
            A('Several surveys reported no detection limit, reference material or recovery.', bek, alj, sal, wise),
            A('Arsenic and mercury species were not measured in honey; totals only.', gun, shu)],
'procurement': [A('Request lot lead results with LOQ, compared with the destination-market limit.', eu, mer, cn, hk),
                A('Record forage location separately from packing or purchase market.', gems, bek),
                A('Blends can mask high-lead components; a single average is not a lot result.', gems)],
'product': [A('Honey contributed 6% of lead exposure for Australian children aged 2–5 and less for other ages.', fs19),
            A('The US intake exceedance claim rests on a ×1000 unit error in the paper’s table.', wise),
            A('No paired measurement of honey and the honey-containing food exists in the ledger.', hid, dep)],
'assessment': [A('50 records dispositioned on content; 16 occurrence families extracted.', gems, fda),
               A('Held values: Salama 2019, Teferi 2026 lead and cadmium, Wise 2025 mercury and inconsistent means.', sal, tef, wise),
               A('Access gaps: FSANZ appendices and BfR MEAL per-food supplement.', fs11, fs19)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which honey types measured lowest in lead?',
  P(('In the one study comparing floral types side by side, Calabrian chestnut honey averaged 79 µg/kg lead, below citrus (124), honeydew (109), heather (104) and wildflower (125 µg/kg).', [nac]),
    ('In Morocco, thyme honey averaged 90 µg/kg and multifloral 190 µg/kg.', [abe]),
    ('Each pattern comes from one region and a handful of samples per type.', []))),
 ('Is urban honey higher in metals than rural honey?',
  P(('Not consistently.', []),
    ('In Poland, honeys from urbanised and ecologically clean areas were comparable for all four measured metals.', [tom]),
    ('In north-west Iran, the most industrialised district had the highest lead, and in Prayagraj, India, lead was detected in only four of fourteen hives, in both urban and rural sites.', [agh, shu]))),
],
'testing': [
 ('Why do some studies report very high lead in honey?',
  P(('Some very high values do not survive a check against their own papers.', []),
    ('One Ethiopian study reports about 20 mg/kg lead, a level its own detection limits could not have measured after its stated dilution, and a Libyan survey reports 2.4–11 mg/kg means with no quality control.', [tef, sal]),
    ('Other high results, such as 1.55 mg/kg in a Libyan market honey, are single values without replicate or method detail.', [abu]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in honey?',
  P(('Lead is the metal most often found at levels that matter; cadmium, mercury and arsenic are usually low or below detection.', [gems, fda]),
    ('Honey can also contain aluminium, nickel and chromium, which vary with honey type and processing.', [tom, nac, bek])), 'GEMS/Food honey extraction; FDA food 172; Tomczyk Table 2; Naccari Tables 2–3'),
 ('ING-FAQ-02', 'How do heavy metals get into honey?',
  P(('Bees carry metals from nectar, honeydew and airborne dust into the hive, but much is filtered out along the way.', [tom, man]),
    ('In Poland, lead fell from 21.3 mg/kg in soil to 0.05 mg/kg in honey.', [tom])), 'Tomczyk Table 3'),
 ('ING-FAQ-03', 'Is raw or organic honey free from heavy metals?',
  P(('No source in the HMI ledger compares organic-certified and conventional honey for metals, so there is no evidence either way.', []),
    ('Raw honey from beekeepers is not automatically lower: five Balkan samples, four from beekeepers and one from a shop, all had lead between 33 and 55 µg/kg.', [bek])), 'Bektashi Table 2'),
 ('ING-FAQ-04', 'Which types of honey have the lowest levels?',
  P(('Within one Italian study, chestnut honey had the lowest lead and wildflower the highest, but no study shows a floral type that is reliably lower everywhere.', [nac]),
    ('Honeydew honey tends to carry more aluminium.', [tom])), 'Naccari Table 2; Tomczyk Table 2'),
 ('ING-FAQ-05', 'Which countries or regions produce honey with the lowest lead?',
  P(('Monitored retail honey in the US, Europe and Australia shows the lowest lead in the evidence, with US composites below 4 µg/kg and most European results below detection.', [fda, gems, fs19]),
    ('Surveys from Iran, Morocco and Libya report higher values, but they used different methods and sampling, so they cannot rank countries.', [agh, abe, abu])), 'FDA food 172; GEMS/Food EURO; FSANZ 25th Table 7'),
 ('ING-FAQ-06', 'Do foods made with honey also contain heavy metals?',
  P(('No study in the ledger measured both a honey and the food made with it.', []),
    ('Honey-sweetened cereal bars and infant cereals have been tested, but their lead cannot be attributed to the honey.', [hid, dep])), 'Hidalgo; Depa'),
 ('ING-FAQ-07', 'What do the levels in honey mean for health?',
  P(('Because honey is eaten in small amounts, it contributes little lead to most diets: in Australia it was a minor source for all ages except children aged 2–5, where it supplied 6%.', [fs19]),
    ('A widely cited US claim that honey exceeds tolerable intakes rests on a unit error in that paper.', [wise])), 'FSANZ 25th p. 50; Wise Table 2'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in honey?',
  P(('Yes, mostly for lead: the EU allows 0.10 mg/kg, Hong Kong 0.1 mg/kg, MERCOSUR 0.30 mg/kg and China 0.5 mg/kg.', [eu, hk, mer, cn]),
    ('MERCOSUR also sets cadmium (0.10) and total arsenic (0.30 mg/kg) limits for honey.', [mer])), 'EU 2023/915 3.1.17; Cap. 132V; GMC 12/11; GB 2762'),
 ('ING-FAQ-09', 'Can processing or filtering remove heavy metals from honey?',
  P(('No study in the ledger measured metal removal by filtering or processing honey.', []),
    ('The supported advice is preventive: keep honey out of soldered, uncoated or galvanised metal containers.', [man, agh])), 'Manouchehri p. 242; Aghamirlou p. 6'),
 ('HONEY-FAQ-01', 'Is honeydew honey different from blossom honey?',
  P(('Yes for aluminium: Polish honeydew honey carried far more aluminium than blossom honeys from the same apiaries.', [tom]),
    ('For lead it was neither lowest nor highest in the Calabrian study.', [nac])), 'Tomczyk Table 2; Naccari Table 2'),
 ('HONEY-FAQ-02', 'Should honey be stored in metal containers?',
  P(('Survey authors and reviews advise against soldered, uncoated or galvanised metal, because acidic honey can corrode it and pick up lead, tin or zinc.', [man, agh, tef]),
    ('This is guidance; no source measured the effect.', [])), 'Manouchehri p. 242; Aghamirlou p. 6; Teferi p. 9'),
 ('HONEY-FAQ-03', 'How can I tell whether a honey lead test is good enough?',
  P(('Check that the laboratory’s quantification limit is far below 100 µg/kg; FDA reported down to 4 µg/kg.', [fda, eu]),
    ('A published low-cost lead sensor could only see about 378 µg/kg in honey, too high to check the EU limit.', [zha])), 'FDA food 172; Karagözlü et al. section 3.3'),
 ('HONEY-FAQ-04', 'Has lead in honey been falling?',
  P(('In European GEMS/Food submissions, the share of results definitely above 100 µg/kg fell from 6.7% in 2003–2007 to 1.3% in 2013–2019.', [gems]),
    ('These are national monitoring submissions, not a fixed panel of producers.', [])), 'GEMS/Food EURO lead by period'),
 ('HONEY-FAQ-05', 'Does honey contain mercury or arsenic?',
  P(('Usually very little: about four in five European mercury results were below detection, and US composites were below 1 µg/kg mercury and 3 µg/kg arsenic.', [gems, fda]),
    ('A US paper reporting mercury in the mg/kg range used an unverified method and is not used here.', [wise])), 'GEMS/Food EURO mercury; FDA food 172; Wise Fig. 2c'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-honey-v1', 'family': 'ingredient', 'slug': 'honey', 'title': 'Honey', 'display_title': 'Honey', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, mercury and other metals in honey: monitoring results, apiary surveys, origins and floral types, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Honey FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, total Hg, Ni, Cr, Al, Sn, U as reported totals; no species measured', 'material_form': 'Honey as sold or hive-collected: blossom, honeydew, multifloral; sugar syrup, cane black honey and honey-containing foods excluded',
               'basis': 'As eaten; µg/kg; no moisture conversion; mg/L results without density left unconverted', 'geography_market': 'Production area, apiary site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 1998–2023 where reported; unreported dates stay unknown', 'stage': 'Apiary forage, extraction, storage, retail and release testing',
               'population_route': 'Dietary ingestion; total diet study exposure shares', 'comparator_outcome': 'Pooled HMI honey reference positions; same-study subgroup contrasts; observational siting comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to honey or naming honey, plus honey rows in GEMS/Food, FDA TDS and BfR MEAL datasets',
                'protocol_ref': 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/honey/extraction/'],
                'screening_ref': 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'HMI-Library volume not mounted; backup copies read'],
                'unresolved_access': ['FSANZ 23rd and 25th ATDS honey appendix tables', 'Fechner 2022 BfR MEAL per-food supplement']},
     'source_catalogue': {'topic': 'ingredients/honey'}, 'retain_history_only': True}

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

quick = P(('Most monitored honey is low in metals, but lead is the one to check: the EU limit is 100 µg/kg, and small apiary surveys report much higher and less consistent results.', [gems, eu, agh]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead decides most honey questions; cadmium, mercury and arsenic are usually near or below detection.', [gems, fda]),
 ('Main drivers', 'Forage area and nearby industry, honey type for aluminium, and contact with metal containers.', [agh, tom, man]),
 ('Practical framing', 'Ask for lot-specific lead results with a quantification limit well below 100 µg/kg.', [eu, fda])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-honey-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-10', 'status': 'covered', 'reason': 'No arsenic or mercury species measured in honey; ING-FAQ answer on mercury/arsenic and Testing explain totals only.'},
 {'id': 'ING-FAQ-11', 'status': 'not_applicable', 'reason': 'Honey has no whole/refined fraction pair with comparable measurements.'},
 {'id': 'ING-FAQ-12', 'status': 'deferred', 'reason': 'No matched metal comparison of honey with alternative sweeteners in the ledger.'},
 {'id': 'ING-FAQ-13', 'status': 'covered', 'reason': 'Children’s exposure share (6% for ages 2–5) is answered in ING-FAQ-07 and Exposure; no infant-specific metal evidence.'},
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Cooking is not an assessed honey preparation for metals.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking does not apply to honey.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative honey serving guidance for metals; no frequency is invented.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for honey metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale):
    return {'id': f'honey-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/honey.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Honey', 'audiences': ['supplier', 'brand'] + (['consumer'] if stage == 'packaging and storage' else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Forage availability, other metals and cost not quantified.',
            'verification_summary': 'Confirm with lot-specific lead results using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational survey' if kind == 'observational' else 'Measured habitat comparison' if kind == 'measured' else 'Author or review guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching nectar, honeydew or honey, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'No controlled honey intervention study in the library; keep effect unquantified unless measured.'}], 'review': {'record_ref': 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': 'Honey as collected', 'locator': locator, 'source_values_note': 'Source-reported means; observational, not a controlled intervention.'}
controls = [
 control(1, agh, 'Aghamirlou et al. 2015', 'https://doi.org/10.1186/s40201-015-0189-8', 'apiary siting', 'Site apiaries away from industrial districts', 'observational', 'Honey from 25 apiaries, Ardabil province, Iran',
   'Honey from the most industrialised district averaged 935 µg/kg lead against 205–595 µg/kg in the other three regions; the regional difference was significant for lead only.',
   'Industrial East region versus North, South and West regions of the same province, 2013.',
   [out('Pb', 'lower', 935.48, 205.4, 'Lower lead away from industry (observational)', 'Regional mean honey lead', 'East (industrial) versus South', 'Table 3, p. 5; ANOVA P = 0.002'),
    out('Cd', 'context', 53.64, None, 'No significant regional difference', 'Regional mean honey cadmium', 'East versus other regions', 'Table 3, p. 5; P = 0.107')],
   'One province; regions differ in more than industry.', 'Observational association; no siting intervention was tested.', 'Table 3', 'Field survey'),
 control(2, tom, 'Tomczyk et al. 2020', 'https://doi.org/10.2478/aucft-2020-0005', 'apiary siting', 'Do not rely on a “clean area” label alone', 'measured', 'Five honey varieties from 10 apiaries, Podkarpackie, Poland',
   'Honeys from urbanised and ecologically clean areas were comparable for cadmium, lead, aluminium and nickel (no significant habitat effect).',
   'Same varieties from five urbanised versus five ecologically clean apiaries.',
   [out('Pb', 'context', None, None, 'No significant difference', 'Honey lead by habitat', 'Urbanised versus clean area', 'Abstract; Table 2'),
    out('Cd', 'context', None, None, 'No significant difference', 'Honey cadmium by habitat', 'Urbanised versus clean area', 'Abstract; Table 2')],
   'One region; habitat classification by the authors.', 'Null result in one region; does not show siting is irrelevant elsewhere.', 'Table 2', 'Field survey'),
 control(3, tom, 'Tomczyk et al. 2020', 'https://doi.org/10.2478/aucft-2020-0005', 'apiary siting', 'Check forage soils for acidity and cadmium', 'measured', 'Soil, forage plants, bees and honey, Podkarpackie',
   'Cadmium moved along the soil–plant–bee–honey chain faster on acidic soils, and goldenrod and dandelion accumulated cadmium; honey cadmium stayed about a thirtieth of bee-body levels.',
   'Soil pH and plant bioaccumulation factors across sampling sites.',
   [out('Cd', 'context', None, None, 'Faster transfer on acidic soils', 'Cadmium transfer along the chain', 'Lower versus higher soil pH', 'Abstract; Tables 1, 3–4')],
   'One region; correlations not tabulated.', 'Association only; no soil treatment tested.', 'Tables 1, 3, 4', 'Field survey'),
 control(4, nac, 'Naccari et al. 2025', 'https://doi.org/10.3390/foods14111986', 'sourcing and procurement', 'Consider floral source when lead is the concern', 'observational', '38 honeys of five types, Calabria, Italy',
   '80% of wildflower samples exceeded 100 µg/kg lead against 25% of chestnut and heather honeys; chestnut had the lowest lead mean.',
   'Five floral types from apiaries in one region, one season.',
   [out('Pb', 'lower', 125, 79, 'Lower lead in chestnut honey (observational)', 'Mean honey lead by floral type', 'Wildflower versus chestnut', 'Table 2; Figures 2–3')],
   'One region; small groups (6–10 samples).', 'Descriptive; no significance test across types.', 'Table 2', 'Field survey'),
 control(5, man, 'Manouchehri et al. 2021', 'https://doi.org/10.31467/uluaricilik.973053', 'packaging and storage', 'Avoid soldered, uncoated or galvanised metal containers', 'guidance', 'Stored honey (review)',
   'Acidic honey (average pH 3.9) can corrode metal cans; coated, solder-free containers are advised to limit lead and tin.',
   'Guidance; no measured comparison.',
   [out('Pb', 'context', None, None, 'Guidance; effect not measured', 'Container contact', 'Coated versus uncoated metal', 'p. 242')],
   'Applies to metal storage of honey.', 'No measured effect size.', 'p. 242', 'Review guidance'),
 control(6, nac, 'Naccari et al. 2025', 'https://doi.org/10.3390/foods14111986', 'extraction and storage', 'Avoid aluminium contact surfaces in extraction', 'guidance', 'Honey processing (cited literature)',
   'The authors note that aluminium equipment used before marketing can raise aluminium in honey; not measured in their samples.',
   'Guidance; no measured comparison.',
   [out('Al', 'context', None, None, 'Guidance; effect not measured', 'Equipment contact', 'Aluminium versus other surfaces', 'Discussion, p. 13')],
   'Applies to processing equipment.', 'Cited literature, not tested.', 'Discussion', 'Author guidance'),
 control(7, zha, 'Karagözlü et al. 2024', 'https://doi.org/10.3390/polym16131782', 'lot acceptance and release', 'Test lots with a method able to see well below 100 µg/kg', 'context', 'Honey lead screening',
   'A published low-cost lead sensor reaches only about 378 µg/kg in honey after its 20-fold dilution, above the EU limit; testing detects lead and does not remove it.',
   'Sensor detection limit versus the EU 100 µg/kg maximum.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Method detection limit in honey', 'Sensor versus required sensitivity', 'Section 3.3')],
   'Any lot-release testing for lead.', 'Method fitness only.', 'Section 3.3', 'Laboratory method'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
