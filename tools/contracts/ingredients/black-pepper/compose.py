"""Compose the black pepper synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction
records in data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/extraction/
and to the HMI-calculated GEMS/Food summaries in primary/gemsfood-black-pepper-contrasts.json.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper'
reg = json.loads((audit / 'regulatory-black-pepper.json').read_text())

gems = 'who-gemsfood-heavy-metal-contaminants'
tin = 'tinggi2025-spices-herbs-queensland'; mou = 'moussa2024-spices-herbs-lebanon'; cic = 'cicero2022-minerals-spices-aromatic-herbs'
ose = 'oseisafo2024-ghana-spices-metals'; ziy = 'ziyaina2014-libya-spices-lead-cadmium'; mer = 'mercan-yucel2022-van-spices-heavy-metals'
mat = 'matloob2016-iraq-spices-heavy-metals'; kow = 'kowalska2021-metals-herbs-spices-tea-coffee-poland'; win = 'winiarska-mieczan2023-cd-pb-polish-herbs-spices'
sab = 'sabri2025-moroccan-spices-casablanca-metals'; can = 'cantoral2024-lead-levels-mexican-foods'; isl = 'islam2023-noakhali-spices-bangladesh'
eri = 'ericson2020-georgian-spices-lead'; sav = 'savic2019-serbian-spices-minerals'; gil = 'gill2021-consumer-reports-spices'
her = 'hernandez-montoya2026-heavy-metals-foods-review'; amm = 'ammar2023-element-migration-aluminum-cookware'; dor = 'dordevic2019-aluminum-foil-culinary-baking-czech'
REG = {l['source_id'] for l in reg['limits'] if l.get('primary_verified')}
eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'; cn = 'chinanhc2025-gb-2762-contaminants'; vn = 'vietnam2011-qcvn-8-2-heavy-metals-en'

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
 P(('Black pepper usually carries lead, cadmium and arsenic in the tens to low hundreds of µg/kg, with aluminium, nickel and chromium far higher.', [gems, tin, cic]),
   ('In WHO GEMS/Food, 362 black pepper lead results had a median of about 53–60 µg/kg, and 9 (2.5%) were definitely above 600 µg/kg.', [gems]),
   ('Total arsenic was below detection in most of 197 results, and cadmium had a median below 7 µg/kg.', [gems])),
 P(('Lead is the metal most likely to decide a black pepper question, because a minority of lots are far higher than the rest.', []),
   ('The EU sets a binding maximum of 0.60 mg/kg (600 µg/kg) for lead in dried fruit spices, the class that covers peppercorns as dried fruits, and Codex adopted the same 0.6 mg/kg for dried fruit and berry spices; neither sets a cadmium limit for pepper.', [eu, cx]),
   ('Market surveys outside routine monitoring report much higher lead: means of 714 µg/kg in Malaysian-grown pepper bought in Accra, 730–820 µg/kg in Libya and 2,470 µg/kg in bulk pepper from eastern Turkey.', [ose, ziy, mer])),
 P(('For a buyer, the supported priorities are a lot-specific lead result with a quantification limit well below the applicable limit, a cadmium result for markets that set one, and a supply chain that keeps grinding and handling under control.', [eu, gems]),
   ('Whole pepper had a lower lead median than ground pepper in monitoring data, but growing origin alone did not settle the question: Malaysian-grown pepper measured 100 µg/kg in Queensland and 714 µg/kg in Accra.', [gems, tin, ose])),
],
'identity': [
 P(('This page covers black pepper, the dried fruit of Piper nigrum, sold whole, cracked or ground, measured as the dry spice without moisture conversion.', [tin, cic, gems]),
   ('White pepper, green and long pepper, chilli and bell peppers, spice blends and foods seasoned with pepper are outside its scope.', [mat, mou, gems])),
 P(('Pepper identity matters because monitoring categories and surveys use different labels.', []),
   ('The EU monitoring category “Pepper, black and white (Piper nigrum)” does not separate black from white pepper, so its 1,051 GEMS/Food results are shown separately and not compared with the black pepper reference.', [gems]),
   ('A WHO region in GEMS/Food is a reporting region, and most surveys report where the pepper was bought rather than where it was grown.', [gems, tin, ose])),
],
'occurrence': [
 P(('The table holds every black pepper result extracted from sixteen survey and monitoring sources: one row for each statistic a source reports for a subgroup and metal, so a mean and a range from the same samples appear as separate rows.', [gems, tin, mou, ziy, kow]),
   ('Ratings place a mean, median or single result against a pooled HMI black pepper reference built from six lead sampling families and six cadmium families; non-detects remain intervals and are never read as zero.', [gems, tin, mou, cic, can, amm]),
   ('Rows that failed a check against their own paper stay visible with the reason and are not compared.', [kow, mat, sab, sav])),
 P(('Typical pepper results differ greatly by metal.', []),
   ('In Queensland retail pepper, means were 130 µg/kg lead, 26 µg/kg cadmium, 180 µg/kg total arsenic, 560 µg/kg chromium, 2,080 µg/kg nickel and 144,000 µg/kg aluminium.', [tin]),
   ('Mercury was mostly below detection: all 26 Polish samples were below 5 µg/kg, and 14 of 17 Western Pacific GEMS/Food results were non-detects.', [kow, gems])),
],
'pathways': [
 P(('Metals reach black pepper through the vine’s uptake from soil and through surfaces and equipment that contact the berries during drying and grinding.', [mat, tin]),
   ('The very high aluminium in pepper (29–540 mg/kg in Queensland retail samples) is attributed by those authors to aluminium utensils and containers in processing and to accumulation by the plant, and an Iraqi survey names drying on bare ground and wear of milling machinery as routes.', [tin, mat])),
 P(('Grinding and handling after import are plausible additions.', []),
   ('In Libya, ground pepper bought at retail averaged 320 µg/kg cadmium against 150 µg/kg in wholesale lots sampled on arrival, and lead was also higher at retail (820 against 730 µg/kg).', [ziy]),
   ('Stainless steel and aluminium equipment are discussed as possible sources of chromium, nickel and aluminium, but no source measured them in pepper processing.', [tin])),
 P(('Deliberate lead adulteration, reported for turmeric, has not been shown for black pepper in this evidence.', [tin, eri]),
   ('A Georgian household survey found one black pepper sample at 48 mg/kg lead by handheld X-ray fluorescence, but four of five were below its 4–8 mg/kg detection limit, and the paper does not say whether that sample was among those confirmed by laboratory analysis.', [eri])),
],
'variation': [
 P(('For lead, the clearest comparison is form: in GEMS/Food, whole black pepper had a median of 30–52 µg/kg (28 results) against 61–68 µg/kg for ground or cracked pepper (211 results).', [gems]),
   ('Cadmium and arsenic medians in both forms sat below the reporting limits, so form does not change those comparisons.', [gems]),
   ('This is a descriptive difference across many laboratories, not a controlled grinding experiment.', [])),
 P(('Within one study, origin comparisons are more reliable.', []),
   ('Among Queensland retail pepper, Vietnamese-grown pepper (two samples) had the lowest means of any origin for lead (60 µg/kg), cadmium (9) and arsenic (16), while Indian pepper (four samples) had the highest chromium (840) and aluminium (162,000 µg/kg) and Chinese pepper the highest arsenic (860 µg/kg, driven by one sample at 1,700).', [tin]),
   ('For chromium and aluminium, Vietnamese pepper (240 and 85,000 µg/kg) was also lower than Chinese (640 and 125,000) and Indian pepper (840 and 162,000), and single samples from Sri Lanka (50 and 39,000) and Malaysia (140 and 57,000) were lowest of all.', [tin]),
   ('A single Vietnamese whole pepper bought in Saudi Arabia measured 8 µg/kg lead and 3 µg/kg cadmium.', [cic]),
   ('With one to four samples per origin these are tentative patterns, not a supported preference for a country.', [])),
 P(('Retail and packaging comparisons point in different directions by metal.', []),
   ('In Lebanon, bulk pepper had the highest cadmium (154 µg/kg against 121–136 for packaged) but the lowest arsenic (126 against 189–200), and lead was similar (284–346 µg/kg).', [mou]),
   ('Ten packaged US retail products all fell in the lowest concern band of a consumer test for arsenic, cadmium and lead, while unpackaged pepper from eastern Turkey averaged 2,470 µg/kg lead.', [gil, mer]),
   ('Chromium varied widely, from 96 µg/kg in one Vietnamese sample to a 3,620 µg/kg mean in bulk Moroccan pepper.', [cic, sab])),
],
'processing': [
 P(('No source measured a pepper processing step against a control for metals.', []),
   ('Across 23 Iraqi spices pooled, unwashed portions carried 7% more lead and 14% more cadmium than washed portions, but no pepper-specific effect was reported.', [mat]),
   ('Steam treatment, irradiation and sterilisation were not assessed for metals in any source here.', [])),
 P(('Grinding is the processing step most likely to matter.', [gems, mat]),
   ('Ground pepper had a higher lead median than whole pepper in monitoring data, and one survey author avoided commercially milled spices because milling machinery can add trace elements.', [gems, mat]),
   ('White pepper, made by removing the outer layer, is outside this page; the Lebanese survey measured it separately.', [mou])),
],
'controls': [
 P(('Controls for black pepper act at drying and handling, at grinding, at procurement and at the release test.', []),
   ('The only measured comparisons are observational: retail lots in Libya carried more cadmium than wholesale lots on arrival, and a food safety management system at Lebanese packers did not lower lead or cadmium.', [ziy, mou]),
   ('Drying off the ground, controlled milling and lot testing are guidance without measured pepper effects, and testing detects metals without removing them.', [mat, tin, eri])),
],
'tradeoffs': [
 P(('Packaging is not a guaranteed fix.', [mou]),
   ('Packaged Lebanese pepper had less cadmium than bulk but more arsenic, and imported packaged pepper had the highest lead mean of the four groups (346 µg/kg).', [mou]),
   ('The survey authors note that packaging helps only if the material itself is food grade and does not release metals.', [mou])),
 P(('Choosing an origin for lower lead can raise another metal or simply move the risk.', [tin, ose]),
   ('In Queensland, the origin lowest in lead was not lowest in nickel, and Malaysian-grown pepper measured 100 µg/kg lead in Australia but 714 µg/kg in Ghana.', [tin, ose]),
   ('Cheaper screening has its own trade-off: handheld X-ray fluorescence found lead in spices quickly, but its 4–8 mg/kg detection limit is far above the EU limit of 0.6 mg/kg.', [eri, eu])),
],
'testing': [
 P(('A useful black pepper test must see well below the applicable limit, which for lead in the EU is 600 µg/kg.', [eu]),
   ('Laboratory methods in the evidence reached 2–5 µg/kg for lead (ICP-MS in Queensland and Poland), while handheld X-ray fluorescence could not see below about 4,000 µg/kg.', [tin, kow, eri]),
   ('Several surveys reported means outside their own ranges or below their own detection limits, so method, limits and reference-material checks should come with every result.', [sab, kow, ose])),
 P(('Report non-detects with their limit, keep the method and laboratory, and separate total arsenic from inorganic arsenic.', [gems]),
   ('Only 14 GEMS/Food pepper results measured inorganic arsenic; eight of nine black pepper results were below detection limits of 5–18 µg/kg and one was 31 µg/kg, so total arsenic results cannot be read as inorganic arsenic.', [gems]),
   ('Mercury, when measured after dry ashing at 550 °C, can be lost, which makes such results unreliable.', [mat])),
],
'procurement': [
 P(('Ask for lot-specific lead results with the laboratory’s quantification limit, compared with the EU fruit-spice maximum of 600 µg/kg or the limit in the destination market, and cadmium results where that market sets a cadmium limit.', [eu]),
   ('Limits differ by market: China sets 1.5 mg/kg lead for spices, and Vietnam 2.0 mg/kg lead, 1.0 mg/kg cadmium, 5.0 mg/kg arsenic and 0.05 mg/kg mercury.', [cn, vn]),
   ('The EU and Codex values apply to fruit and berry spices; the commodity list that formally assigns black pepper to that class is not in the HMI library, so the assignment rests on pepper being a dried fruit.', [eu, cx])),
 P(('Record the growing origin separately from the packing country and the market where the pepper was bought, because most datasets identify only the market.', [gems, tin, ose]),
   ('Blends of several origins can hide a high-lead lot that a single average will not reveal.', [])),
 P(('Specify the form and keep control of grinding.', [gems]),
   ('Whole pepper had a lower lead median in monitoring data, and retail ground pepper in Libya had more cadmium than the wholesale pepper it came from.', [gems, ziy]),
   ('Ask whether the supplier screens imported lots: several survey authors recommend routine monitoring of imported spices, and one notes that its market did not test them at the point of entry.', [mou, ziy, tin])),
],
'product': [
 P(('Black pepper is eaten in small amounts, so its typical results add little to most diets.', [tin]),
   ('Assuming 1.9 g of all spices and herbs a day, a Queensland study estimated that spices supplied about 0.65% of the lead reference point and 1.0% of the cadmium tolerable weekly intake for an adult, without singling out black pepper.', [tin]),
   ('A consumer test classed all ten packaged US black pepper products as lowest concern at three quarters of a teaspoon a day.', [gil])),
 P(('No source measured metals in a pepper-containing food together with the pepper that went into it.', []),
   ('Seasoned foods in GEMS/Food, such as cod and peanuts with black pepper, were excluded because the pepper’s contribution cannot be separated.', [gems])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to black pepper or mentions it, plus every black pepper row in WHO GEMS/Food and other indexed datasets; each has a recorded decision based on its content.', []),
   ('The FDA Total Diet Study has no black pepper or spice food, so it contributes no results.', []),
   ('Six sources are held in part because their values could not be reconciled with their own methods or figures.', [kow, mat, mou, ose, sab, sav])),
 P(('The main gaps are speciation and origin.', []),
   ('Inorganic arsenic was measured in only 14 monitoring results and chromium species not at all, and only three studies report where pepper was grown.', [gems, tin, ose, cic])),
],
}

headings = {'summary': 'Black pepper overview', 'identity': 'What counts as black pepper', 'occurrence': 'Heavy metal contamination profile of black pepper',
 'pathways': 'How metals reach black pepper', 'variation': 'Which forms and origins measured lower', 'processing': 'Processing, grinding and handling',
 'controls': 'Mitigation from farm to grinder', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing black pepper for metals',
 'procurement': 'Buying and verifying black pepper', 'product': 'Exposure from black pepper', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Black pepper (Piper nigrum dried fruit), whole, cracked or ground; dry spice basis without moisture conversion.', tin, cic, gems),
             A('White, green and long pepper, chilli and bell peppers, spice blends and pepper-seasoned foods are excluded.', mat, mou, gems),
             A('The EU “black and white pepper” category is kept separate because it does not separate the two.', gems)],
'summary': [A('Most monitored black pepper has Pb around 50–60 µg/kg and Cd and As near or below detection; Pb is the deciding metal against the EU 600 µg/kg limit.', gems, eu),
            A('Market surveys in Ghana, Libya and eastern Turkey report much higher lead means (714–2,470 µg/kg).', ose, ziy, mer),
            A('Lot-specific lead results with an adequate quantification limit and control of grinding are the supported buyer controls.', eu, gems)],
'occurrence': [A('Pb, Cd, total As, iAs, total Hg, Cr, Ni, Al and Sn are reported, from 16 occurrence sources.', gems, tin, cic, mou),
               A('Pooled HMI references use 45 lead and 23 cadmium subgroup units from six families each.', gems, tin, mou, cic, can, amm),
               A('Non-detects are bounded intervals; held values are shown with reasons and not compared.', gems, kow, sab)],
'pathways': [A('Soil uptake, ground contact during drying, processing utensils and grinding equipment are the supported routes.', tin, mat),
             A('Retail ground pepper in Libya had more cadmium than wholesale lots on arrival.', ziy),
             A('Lead adulteration has not been shown for black pepper; one unconfirmed XRF reading reached 48 mg/kg.', eri)],
'variation': [A('Whole pepper had a lower lead median than ground pepper in GEMS/Food (30–52 against 61–68 µg/kg).', gems),
              A('Within Queensland retail pepper, Vietnamese-grown pepper had the lowest Pb, Cd and As; Indian the highest Cr and Al.', tin),
              A('No supported country preference; packaging changes metals in different directions.', mou, ose, tin)],
'processing': [A('No measured pepper processing step; unwashed portions of pooled Iraqi spices carried more lead and cadmium than washed portions.', mat),
               A('Ground pepper carries more lead than whole in monitoring data; milling machinery is a cited source.', gems, mat),
               A('White pepper is outside this page.', mou)],
'controls': [A('Control of grinding and handling after import: retail lots had more cadmium than wholesale lots in Libya.', ziy),
             A('A packer food safety management system did not lower lead or cadmium in Lebanon.', mou),
             A('Testing detects lead and supports exclusion; it does not remove contamination.', eu, eri)],
'tradeoffs': [A('Packaged pepper had less cadmium but more arsenic than bulk in Lebanon.', mou),
              A('An origin low in lead may be high in nickel, and the same origin varied by market.', tin, ose),
              A('Handheld XRF screening cannot check the EU lead limit.', eri, eu)],
'testing': [A('Quantification limits should sit well below 600 µg/kg for lead; ICP-MS reached 2–5 µg/kg.', eu, tin, kow),
            A('Several surveys printed means outside their own ranges or below their own limits.', sab, kow, ose),
            A('Inorganic arsenic was measured in only 14 monitoring results; totals cannot be read as species.', gems)],
'procurement': [A('Request lot lead results with LOQ, compared with the destination-market limit (EU and Codex 0.6, China 1.5, Vietnam 2.0 mg/kg).', eu, cx, cn, vn),
                A('Record growing origin separately from packing country and purchase market.', gems, tin, ose),
                A('Specify form and control grinding; whole pepper was lower in lead.', gems, ziy)],
'product': [A('Spices and herbs together supplied about 0.65% of the lead reference point and 1.0% of the cadmium TWI in a Queensland estimate.', tin),
            A('Ten packaged US products were all lowest concern at three quarters of a teaspoon a day.', gil),
            A('No paired measurement of pepper and pepper-containing food exists in the ledger.', gems)],
'assessment': [A('32 source records and 3,725 indexed dataset rows dispositioned on content; 16 occurrence families extracted.', gems, tin),
               A('Held values: Kowalska Cd and As means, Matloob Hg and Cr, Moussa one Hg mean, Osei-Safo As, Sabri Pb, As and Ni, Savic Pb and Al.', kow, mat, mou, ose, sab, sav),
               A('Gaps: speciation, growing origin and the FDA Total Diet Study, which has no spice food.', gems, tin)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Is whole black pepper lower in metals than ground pepper?',
  P(('For lead, yes in monitoring data: whole black pepper had a GEMS/Food median of 30–52 µg/kg against 61–68 µg/kg for ground or cracked pepper.', [gems]),
    ('Cadmium and arsenic medians in both forms were below reporting limits, and no single study compared whole and ground pepper from the same lots.', [gems]))),
 ('Which growing countries measured lowest?',
  P(('Within one Queensland study, Vietnamese-grown pepper had the lowest lead (60 µg/kg), cadmium (9) and arsenic (16 µg/kg) means of five origins.', [tin]),
    ('Across studies, Malaysian-grown pepper measured 100 µg/kg lead in Australia but 714 µg/kg in Ghana, so the market and handling chain matter as much as the origin.', [tin, ose]))),
 ('Is bulk or loose pepper higher than packaged pepper?',
  P(('Not consistently.', []),
    ('In Lebanon bulk pepper had more cadmium (154 against 121–136 µg/kg) but less arsenic (126 against 189–200), and lead was similar.', [mou]),
    ('The highest lead means came from unpackaged pepper in eastern Turkey (2,470 µg/kg) and ground pepper in Libya (730–820 µg/kg), while ten packaged US products were all lowest concern.', [mer, ziy, gil]))),
],
'testing': [
 ('Why do some studies report very high lead in black pepper?',
  P(('Some high or inconsistent values do not survive a check against their own papers.', []),
    ('A Moroccan survey printed a lead mean below its own minimum, and a Serbian survey reported lead below the detection limit implied by its own method.', [sab, sav]),
    ('Others are genuine but come from small market surveys with wide spread, such as 2,470 ± 3,510 µg/kg in eastern Turkey.', [mer]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in black pepper?',
  P(('Lead is the metal most often found at levels that matter; cadmium, arsenic and mercury are usually low or below detection.', [gems, kow]),
    ('Black pepper also carries much more aluminium, nickel and chromium than lead or cadmium, in the hundreds to hundreds of thousands of µg/kg.', [tin, cic])), 'GEMS/Food black pepper extraction; Tinggi Table 4; Kowalska Table 2'),
 ('ING-FAQ-02', 'How do heavy metals get into black pepper?',
  P(('Through the vine’s uptake from soil, contact with the ground during drying, and equipment during grinding and handling.', [tin, mat]),
    ('In Libya, retail ground pepper had twice the cadmium of the wholesale lots it came from (320 against 150 µg/kg).', [ziy])), 'Tinggi Introduction; Matloob Discussion; Ziyaina Table 3'),
 ('ING-FAQ-03', 'Is organic black pepper free from heavy metals?',
  P(('No. In GEMS/Food, 15 organic black pepper lead results had a median of 53 µg/kg, close to 60 µg/kg for 63 conventional results.', [gems]),
    ('The organic label describes how pepper was grown, not a metal test of the lot.', [])), 'GEMS/Food production-method labels, lead'),
 ('ING-FAQ-04', 'Is whole or ground black pepper lower in heavy metals?',
  P(('Whole pepper was lower in lead in monitoring data, with a median of 30–52 µg/kg against 61–68 µg/kg for ground or cracked pepper.', [gems]),
    ('Grinding is a plausible source, but no study compared whole and ground pepper from the same lot.', [mat])), 'GEMS/Food form labels, lead; Matloob sampling section'),
 ('ING-FAQ-05', 'Which countries grow black pepper with the lowest heavy metals?',
  P(('In the one study that compared growing origins, Vietnamese pepper had the lowest lead, cadmium and arsenic, and Indian pepper the highest chromium and aluminium, from one to four samples each.', [tin]),
    ('The same origin can measure very differently in different markets, as Malaysian pepper did in Australia (100 µg/kg lead) and Ghana (714 µg/kg).', [tin, ose])), 'Tinggi Supplementary Table 1; Osei-Safo Table 5'),
 ('ING-FAQ-06', 'Do foods seasoned with black pepper also contain heavy metals?',
  P(('No study in the ledger measured both a pepper and the food made with it.', []),
    ('Monitoring records for pepper-seasoned cod and peanuts exist, but their metals cannot be attributed to the pepper.', [gems])), 'GEMS/Food out-of-scope rows'),
 ('ING-FAQ-07', 'What do the levels in black pepper mean for health?',
  P(('Because pepper is eaten in small amounts, it contributes little to most diets: a Queensland estimate for all spices and herbs together put lead at about 0.65% of the reference point for adults.', [tin]),
    ('A consumer test classed all ten packaged US pepper products as lowest concern at three quarters of a teaspoon a day.', [gil])), 'Tinggi Table 6; Consumer Reports p. 45'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in black pepper?',
  P(('Yes for lead: the EU allows 0.60 mg/kg in dried fruit spices and Codex 0.6 mg/kg in dried fruit and berry spices, whole or ground, the classes that cover peppercorns as dried fruits.', [eu, cx]),
    ('China sets 1.5 mg/kg lead for spices, and Vietnam sets lead, cadmium, arsenic and mercury limits for spices (2.0, 1.0, 5.0 and 0.05 mg/kg); the EU and Codex set no cadmium or arsenic limit for pepper.', [cn, vn, eu, cx])), 'EU 2023/915 Annex I 3.1.12.2; CXS 193 lead table p. 66; GB 2762-2025 Table 1; QCVN 8-2:2011'),
 ('ING-FAQ-09', 'Can washing or processing remove heavy metals from black pepper?',
  P(('No study measured metal removal from black pepper itself.', []),
    ('Across 23 Iraqi spices pooled, unwashed portions carried 7% more lead and 14% more cadmium than washed portions, consistent with part of the load sitting on the surface.', [mat])), 'Matloob Washed and Unwashed Spices'),
 ('ING-FAQ-10', 'Is the arsenic in black pepper inorganic?',
  P(('Mostly unknown: nearly all studies measured total arsenic only.', [tin, kow]),
    ('Eight of nine black pepper inorganic arsenic results in GEMS/Food were below detection limits of 5–18 µg/kg, and the ninth was 31 µg/kg.', [gems])), 'GEMS/Food inorganic arsenic rows'),
 ('ING-FAQ-12', 'Is white pepper lower in heavy metals than black pepper?',
  P(('The evidence here cannot say.', []),
    ('White pepper was measured separately in the Lebanese survey and is outside this page, and the EU monitoring category mixes the two.', [mou, gems])), 'Moussa S1 Table; GEMS/Food category'),
 ('PEPPER-FAQ-01', 'Is bulk or loose pepper riskier than packaged pepper?',
  P(('Not consistently: bulk pepper in Lebanon had more cadmium but less arsenic than packaged, and similar lead.', [mou]),
    ('The highest lead means came from unpackaged pepper in eastern Turkey and retail ground pepper in Libya.', [mer, ziy])), 'Moussa Table 1; Mercan-Yücel Table 2; Ziyaina Table 3'),
 ('PEPPER-FAQ-02', 'How common is black pepper above the EU lead limit?',
  P(('In GEMS/Food, 9 of 362 black pepper lead results (2.5%) were definitely above 600 µg/kg, and 20 of 409 results (4.9%) in the mixed black and white pepper category.', [gems]),
    ('Several small market surveys reported means near or above the limit, including 714 µg/kg in Ghana and 730–820 µg/kg in Libya.', [ose, ziy])), 'GEMS/Food lead, share above 600 µg/kg'),
 ('PEPPER-FAQ-03', 'Is lead added to black pepper on purpose?',
  P(('There is no evidence of that in the sources here.', []),
    ('Lead chromate adulteration has been reported for turmeric, and a Georgian survey concluded that lead is likely added to some spices to enhance colour, but its single high black pepper reading was not shown to be adulteration.', [tin, eri])), 'Tinggi Discussion; Ericson Discussion'),
 ('PEPPER-FAQ-04', 'Why is black pepper so high in aluminium?',
  P(('Aluminium in Queensland retail pepper ranged from 29 to 540 mg/kg, far above lead or cadmium.', [tin]),
    ('The Queensland authors attribute it to aluminium utensils and containers in processing and to accumulation by the plant, and put all spices together at about 3.4% of the tolerable weekly aluminium intake for adults.', [tin])), 'Tinggi Table 4 and Table 6'),
 ('PEPPER-FAQ-05', 'How can I tell whether a black pepper lead test is good enough?',
  P(('Check that the laboratory’s quantification limit is far below 600 µg/kg; ICP-MS in the surveys here reached 2–5 µg/kg.', [eu, tin, kow]),
    ('Handheld X-ray fluorescence could not see below about 4,000 µg/kg, too high to check the limit.', [eri])), 'Tinggi Methods; Kowalska Table 1; Ericson Methods'),
 ('PEPPER-FAQ-06', 'Does black pepper contain mercury?',
  P(('Very little: all 26 Polish samples were below 5 µg/kg and Queensland pepper reached at most 17 µg/kg.', [kow, tin]),
    ('One Iraqi study reported 311 µg/kg, but it measured mercury after ashing at 550 °C, which drives mercury off, so that value is not used.', [mat])), 'Kowalska Table 2; Tinggi Table 4; Matloob Methods'),
]

# ------------------------------------------------------------------ build the record
qreg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-black-pepper-v1', 'family': 'ingredient', 'slug': 'black-pepper', 'title': 'Black Pepper', 'display_title': 'Black Pepper', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, arsenic and other metals in black pepper: monitoring results, market surveys, whole and ground forms, origins, packaging, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Black pepper FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, iAs, total Hg, Cr, Ni, Al, Sn as reported; inorganic arsenic in 14 monitoring results only; no chromium or mercury species measured', 'material_form': 'Black pepper (Piper nigrum dried fruit), whole, cracked or ground; white, green and long pepper, chilli, blends and pepper-seasoned foods excluded; EU mixed black-and-white category kept separate',
               'basis': 'Dried spice as sold or dry weight; µg/kg; no moisture conversion', 'geography_market': 'Growing origin, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 2003–2025 where reported; unreported dates stay unknown', 'stage': 'Cultivation, drying, grinding, packing, retail and release testing',
               'population_route': 'Dietary ingestion; spice-and-herb exposure estimates', 'comparator_outcome': 'Pooled HMI black pepper reference positions; same-study packaging, market-channel and origin contrasts; observational washing comparison'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to black pepper or naming it, plus black pepper rows in WHO GEMS/Food and other indexed datasets; FDA TDS food list checked',
                'protocol_ref': 'data/evidence/contracts/black-pepper/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/extraction/'],
                'screening_ref': 'data/evidence/contracts/black-pepper/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'Library backup copies read where the mounted volume lacked the file'],
                'unresolved_access': ['Osei-Safo 2024 per-sample and per-market appendices (online only)', 'Moussa 2024 brand-level sample register beyond composites', 'Islam 2023 journal version with printed black pepper values']},
     'source_catalogue': {'topic': 'ingredients/black-pepper'}, 'retain_history_only': True}
s['key_evidence'] = [
  {'label': 'Typical lead', 'text': 'Monitored black pepper had a lead median of about 53–60 µg/kg; 2.5% of results were above the EU limit.', 'href': '#heavy-metal-contamination-profile-of-black-pepper', 'link_label': 'Profile'},
  {'label': 'Limits', 'text': 'The EU and Codex limit for lead in dried fruit spices, the class covering peppercorns, is 0.60 mg/kg.', 'href': '#buying-and-verifying-black-pepper', 'link_label': 'Limits'},
  {'label': 'Key distinction', 'text': 'Whole pepper measured lower in lead than ground; origin alone did not predict lead.', 'href': '#which-forms-and-origins-measured-lower', 'link_label': 'Variation'}]

for sec in qreg['families']['ingredient']['sections']:
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

quick = P(('Most monitored black pepper is low in lead, cadmium and arsenic, but lead is the metal to check: the EU limit is 600 µg/kg, and several market surveys report means near or above it.', [gems, eu, ose, ziy]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead decides most black pepper questions; aluminium, nickel and chromium are high, but estimated spice intakes sit far below their health reference values.', [gems, tin]),
 ('Main drivers', 'Grinding and handling after harvest, the market chain, and growing origin, which alone did not predict lead.', [gems, ziy, tin, ose]),
 ('Practical framing', 'Prefer whole pepper or controlled grinding, and ask for lot lead results with a quantification limit well below 600 µg/kg.', [gems, eu])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-black-pepper-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-11', 'status': 'covered', 'reason': 'Whole versus ground is the defined form pair for pepper; answered by ING-FAQ-04 with monitoring data.'},
 {'id': 'ING-FAQ-13', 'status': 'deferred', 'reason': 'No pepper-specific evidence for infants or children; exposure estimates are adult and for all spices together.'},
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Cooking does not change elemental content; no source measured cooking with pepper.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not a pepper preparation.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative pepper serving guidance for metals; no frequency is invented from an average concentration.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for pepper metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale):
    return {'id': f'black-pepper-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/black-pepper.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Black pepper', 'audiences': ['supplier', 'brand'] + (['consumer'] if stage in ('home preparation', 'sourcing and procurement') else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, flavour and cost not quantified.',
            'verification_summary': 'Confirm with lot-specific lead results using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational survey' if kind == 'observational' else 'Measured comparison' if kind == 'measured' else 'Author guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or added to the pepper, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'No controlled black pepper intervention study in the library; keep effect unquantified unless measured.'}], 'review': {'record_ref': 'data/evidence/contracts/black-pepper/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, note='Source-reported means; observational, not a controlled intervention.'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': 'Dried pepper as reported', 'locator': locator, 'source_values_note': note}
controls = [
 control(1, mat, 'Matloob 2016', 'https://doi.org/10.15244/pjoes/62401', 'primary production', 'Dry pepper off bare ground', 'guidance', 'Spices including black pepper, Babil, Iraq',
   'The author names drying on the ground as a contamination route for spices; not measured for pepper.',
   'Guidance; no measured comparison.',
   [out('Pb', 'context', None, None, 'Guidance; effect not measured', 'Drying surface', 'Ground versus raised drying', 'Washed and Unwashed Spices, p. 2067')],
   'Applies to post-harvest drying.', 'No measured effect size.', 'p. 2067', 'Author guidance'),
 control(2, mat, 'Matloob 2016', 'https://doi.org/10.15244/pjoes/62401', 'food processing', 'Clean surface soil from spices before grinding', 'measured', '23 spices pooled, Iraq',
   'Unwashed spices carried more lead (7%), cadmium (14%) and mercury (11%) than washed spices across 23 spices pooled; no black-pepper-specific effect reported.',
   'Washed versus unwashed portions of the same spices.',
   [out('Pb', 'lower', None, None, 'Unwashed about 7% higher than washed (23 spices pooled)', 'Spice lead', 'Unwashed versus washed', 'Washed and Unwashed Spices; Fig. 1', 'Percentage difference reported for all spices pooled; not pepper specific.'),
    out('Cd', 'lower', None, None, 'Unwashed about 14% higher than washed (23 spices pooled)', 'Spice cadmium', 'Unwashed versus washed', 'Washed and Unwashed Spices; Fig. 1', 'Percentage difference reported for all spices pooled; not pepper specific.')],
   'Pooled across spice types; washing is not a usual commercial step for pepper.', 'Pepper-specific effect unknown; mercury values from this study are held.', 'Washed and Unwashed Spices', 'Laboratory'),
 control(3, mat, 'Matloob 2016', 'https://doi.org/10.15244/pjoes/62401', 'food processing', 'Control milling equipment wear', 'guidance', 'Commercially milled spices, Iraq',
   'The author avoided commercially milled spices because milling machinery can add trace elements; whole pepper had a lower lead median than ground pepper in monitoring data.',
   'Guidance; no same-lot comparison.',
   [out('Pb', 'context', None, None, 'Guidance; effect not measured in one lot', 'Milling contact', 'Milled versus unmilled', 'Sampling and Classification')],
   'Applies to grinding and cracking.', 'No measured pepper effect.', 'Sampling and Classification', 'Author guidance'),
 control(4, ziy, 'Ziyaina et al. 2014', 'https://doi.org/10.5897/AJBR2014.0766', 'storage and handling', 'Control handling between import and retail', 'observational', 'Ground black pepper, Libya, 2011',
   'Retail ground pepper averaged 320 µg/kg cadmium and 820 µg/kg lead against 150 and 730 µg/kg in wholesale lots sampled on arrival.',
   'Retail (36 samples) versus wholesale (24 samples) in the same survey.',
   [out('Cd', 'higher', 150, 320, 'Higher at retail than wholesale (observational)', 'Mean pepper cadmium', 'Wholesale versus retail', 'Table 3'),
    out('Pb', 'higher', 730, 820, 'Higher at retail than wholesale (observational)', 'Mean pepper lead', 'Wholesale versus retail', 'Table 3')],
   'One country and year; lots were not tracked from wholesale to retail.', 'Observational; printed SDs are inconsistent with the ranges.', 'Table 3', 'Market survey'),
 control(5, mou, 'Moussa et al. 2024', 'https://doi.org/10.1371/journal.pone.0307884', 'sourcing and procurement', 'Do not rely on packaging alone', 'observational', 'Black pepper composites, Lebanon, 2020',
   'Bulk pepper had more cadmium (154 µg/kg) than packaged pepper (121–136) but less arsenic (126 against 189–200), and lead was similar (284–346 µg/kg).',
   'Bulk versus three packaged groups, two composites of five brands each.',
   [out('Cd', 'lower', 154, 127, 'Lower cadmium in imported packaged pepper (observational)', 'Mean pepper cadmium', 'Bulk versus imported packaged', 'Table 1; S1 Table'),
    out('tAs', 'higher', 126, 197, 'Higher arsenic in imported packaged pepper (observational)', 'Mean pepper total arsenic', 'Bulk versus imported packaged', 'Table 1; S1 Table'),
    out('Pb', 'higher', 295, 346, 'Higher lead in imported packaged pepper (observational)', 'Mean pepper lead', 'Bulk versus imported packaged', 'Table 1; S1 Table')],
   'One country; composites of five brands; two collections.', 'Two composites per group; no significance test for pepper alone.', 'Table 1; S1 Table', 'Market survey'),
 control(6, mou, 'Moussa et al. 2024', 'https://doi.org/10.1371/journal.pone.0307884', 'sourcing and procurement', 'Do not rely on a packer food safety system alone', 'observational', 'Black pepper composites, Lebanon, 2020',
   'Local packers with a food safety management system had lead of 330 µg/kg against 284 µg/kg without one; across all spices the share above limits did not differ.',
   'Local packers with versus without a food safety management system.',
   [out('Pb', 'higher', 284, 330, 'No reduction with a management system (observational)', 'Mean pepper lead', 'Without versus with system', 'Table 1; Discussion')],
   'One country; raw material judged the main contributor by the authors.', 'Observational; two composites per group.', 'Table 1; Discussion', 'Market survey'),
 control(7, eri, 'Ericson et al. 2020', 'https://doi.org/10.5334/aogh.3044', 'lot acceptance and release', 'Screen with handheld XRF only alongside laboratory confirmation', 'context', 'Household spices, Georgia, 2019',
   'Handheld X-ray fluorescence tracked laboratory ICP-MS results closely in 15 spices (R² 0.98) but its 4–8 mg/kg detection limit is far above the 0.6 mg/kg lead limit for pepper; testing detects lead and does not remove it.',
   'XRF versus ICP-MS on the same spices.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Method detection limit', 'XRF versus required sensitivity', 'Results; Figs 1–2')],
   'Any lot-release testing for lead.', 'Method fitness only.', 'Results; Figs 1–2', 'Laboratory method'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
