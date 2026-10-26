"""Compose the apple synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/ingredient-rollout-2026-10-22/apple/extraction/, to
primary/gemsfood-apple-records.csv and gemsfood-apple-analysis.json (WHO GEMS/Food individual
results), primary/fda-elements.txt (FDA TDS food 78) and regulatory-apple.json (verified limits).
"""
import json, pathlib, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple'

gems = 'who-gemsfood-heavy-metal-contaminants'; fda = 'fda2022-tds-elements-fy2018-fy2020'; f16 = 'fda2016-infant-toddler-foods-inorganic-arsenic'
hk = 'cfs2013-hktds-metallic-contaminants'; hki = 'cfs2012-hktds-inorganic-arsenic'; hou = 'houlihan2019-hbbf-whats-in-baby-food'
lee = 'lee2023-south-korea-fresh-fruits-seven-metals'; rus = 'rusin2021-vegetables-fruits-cadmium-lead-poland'; rec = 'reczajska2005-chromium-plant-foods-poland'
bra = 'bramwell2022-urban-garden-produce-lead'; wang = 'wang2020-jilin-total-diet-metals'; amer = 'amer2019-egyptian-fruits-heavy-metals'
afr = 'afrin2020-heavy-metals-fruits-dhaka'; nas = 'nasirpour2026-apple-wastewater-metals'; elb = 'elbagermi2012-misurata-fruits-vegetables-metals'
naw = 'authors2017-levels-dietary-intake-and-health-risk-of-potentially'; rah = 'rahim2020-toxic-heavy-metals-fruits-pakistan'; sem = 'sembratowicz2010-nitrates-pb-cd-lublin-fruits'
lia = 'liang2019-beijing-foodstuffs-health-risk'; sal = 'salhotra2017-vegetables-fruits-heavy-metals'; alt = 'altunay2023-cadmium-food-turkey'
rez = 'rezaei2020-fruits-markazi-essential-elements'; hadi = 'hadi2025-dried-fruits-heavy-metals-iraq'; mah = 'mahmood2025-dried-fruit-metals'
man = 'mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland'; una = 'unaegbu2016-fruit-heavy-metals-enugu'; bora = 'bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing'
eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'; cn = 'chinanhc2025-gb-2762-contaminants'; anz = 'fsanz2024-schedule-19-contaminants'
hkr = 'hongkong2025-cap-132v-metallic-contamination'; bfr = 'bfr2020-aluminium-faq-consumer-products'; nap = 'napier2024-wanabana-lead-apple-cinnamon'
fdj = 'fda2023-ias-apple-juice-guidance'

# Ledger counts used in the review section, computed from the extraction records.
disp = collections.Counter()
for f in (audit / 'extraction').glob('*.json'):
    disp[json.loads(f.read_text())['disposition'].split(':')[0]] += 1
n_sources = sum(disp.values()) + len(json.loads((audit / 'ledger-dispositions.json').read_text())); n_occ = disp['occurrence_extracted']

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
 P(('Fresh apples are usually low in lead in large monitoring datasets, but not uniformly so.', []),
   ('In WHO GEMS/Food, the median lead result for fresh apple was below laboratory reporting limits in every large regional set, and 15 of 3,321 European results and 13 of 982 results from the Americas exceeded 100 µg/kg, the EU and Codex maximum for fruit.', [gems, eu, cx]),
   ('Apples submitted from the Western Pacific region under random sampling were higher, with a median of about 24 µg/kg, and all 56 of the 806 regional results above 100 µg/kg were collected between 2001 and 2008.', [gems])),
 P(('Cadmium, arsenic and mercury in fresh apple are mostly below detection.', [gems, fda]),
   ('All 27 FDA Total Diet Study composites of raw red apple bought in the United States in 2017–2020 were below reporting limits for lead (4 µg/kg), cadmium (1 µg/kg), mercury (1 µg/kg) and nickel (40 µg/kg), and seven had total arsenic between 3 and 20 µg/kg.', [fda]),
   ('Cadmium is the metal closest to its limit in Europe: 112 of 4,582 European results exceeded 20 µg/kg, the EU maximum for pome fruit, although the European median stayed below 2 µg/kg.', [gems, eu])),
 P(('Dried apple carries more metal per kilogram than fresh apple because drying removes water, and several small market studies report much higher values that their own methods cannot support.', [gems, rus, rah, sem]),
   ('The practical control is a lot-specific lead and cadmium result on the fresh fruit, measured with a quantification limit well below 20 µg/kg, rather than an assumption based on variety or origin.', [eu, gems])),
],
'identity': [
 P(('This page covers fresh apple fruit (Malus domestica) as bought or harvested: whole apples with the peel on, peeled apple flesh and apples analysed washed or unwashed, together with dried apple as a separate form.', [gems, fda, lee, rus]),
   ('Each form is kept apart because peeling removes the skin, washing removes surface soil, and drying concentrates everything the fruit carried, so results on different forms are not interchangeable.', [eu, rus, gems])),
 P(('Apple juice and applesauce have their own pages, and apple baby foods (purees, pouches, juices and cereals with apple) belong with applesauce and infant foods, so their results are not used here.', [gems, fda, nap]),
   ('Nor are cider, vinegar, pomace, pies and other foods that only contain apple, or other fruits called apple, such as pineapple, custard apple, star apple, rose apple and crab apple.', [gems])),
 P(('Basis matters for apples, which are about 85% water.', [elb]),
   ('Monitoring programmes report results on the fruit as sold or eaten, while several laboratory studies report dry weight, which for fruit of that water content is roughly six to seven times the fresh-weight value; this page never mixes the two.', [gems, afr, nas, elb])),
],
'occurrence': [
 P((f'The table holds every apple result extracted from WHO GEMS/Food, the FDA Total Diet Study and {n_occ - 2} further monitoring, market, orchard and diet studies: one row for each statistic a source reports for a form of apple, group and metal.', [gems, fda, f16, hk, hki, hou, lee, rus, rec, bra, wang, amer, afr, nas, elb, naw, rah, sem, lia, sal, alt, rez, hadi, mah, man, una, bora, 'atsdr2005-tin-toxicological-profile']),
   ('GEMS/Food rows are HMI-calculated medians of individual national submissions by WHO region, sampling type and portion label; non-detects remain intervals between zero and the reporting limit and are never read as zero.', [gems]),
   ('Ratings place a result against an HMI reference for the same form of apple and basis, built from GEMS/Food region-by-year medians, FDA Total Diet Study collections, ten raw apples analysed by FDA in 2016 and published survey medians.', [gems, fda, f16, rec, bra])),
 P(('Because most fresh-apple results are below detection, the lead, cadmium and arsenic references have no clearly separated middle range, so many rows cannot be rated and are compared within their own dataset instead.', [gems, fda]),
   ('Dry-weight laboratory results and results with no stated basis are never pooled with as-sold results, and values that fail a check against their own paper are held and stay visible with the reason.', [afr, nas, rah, sem, lia, sal, alt, naw, rez, wang])),
],
'pathways': [
 P(('Metals reach apples from orchard soil and water through the tree, and from dust and soil on the fruit surface.', [nas, bra, eu]),
   ('The EU applies its lead limit for fruit after washing and separating the edible part, which reflects where regulators expect surface soil to be removed.', [eu])),
 P(('Apple trees appear to move little lead into the fruit.', [bra]),
   ('On urban allotments in Newcastle, where soils averaged 327 mg/kg lead, apples had a median of 1 µg/kg lead on a fresh-weight basis, the lowest of every crop group measured, against medians of 23 µg/kg for root vegetables and 19 µg/kg for shrub fruit such as raspberries.', [bra])),
 P(('Irrigation water can matter for arsenic.', [nas]),
   ('In a Golden Delicious orchard near Mashhad, Iran, fruit from trees watered with treated municipal wastewater carried about 380–390 µg/kg arsenic on a dry-weight basis in the second year against 140–150 µg/kg with well water, while first-year results did not separate clearly (630–780 µg/kg in every treatment).', [nas]),
   ('These values were read from a bar chart, the method was not one usually sensitive enough for arsenic, and no detection limit or reference material was reported, so the direction is more reliable than the size.', [nas])),
 P(('Older orchard practices are a possible lead source that no study in the library measured directly.', []),
   ('In the Newcastle study, eating more bought tree fruit was associated with higher blood lead in gardeners and non-gardeners alike, and the authors suggested historic lead arsenate sprays as one explanation without testing it.', [bra])),
],
'variation': [
 P(('For lead in fresh apple, the lowest results in the evidence come from the Americas and the United States.', [gems, fda]),
   ('Results submitted to GEMS/Food from the Americas in 2000–2017 had a median at or below 2.1 µg/kg across 982 apples, and all 27 FDA Total Diet Study composites from 2017–2020 were below 4 µg/kg.', [gems, fda]),
   ('European submissions had a median below 10 µg/kg across 3,321 apples, with reporting limits of 3–50 µg/kg that make lower European values impossible to resolve.', [gems])),
 P(('Higher lead was reported from the Western Pacific and South-East Asia regions.', [gems]),
   ('Western Pacific apples under random sampling had a median of about 24 µg/kg, and 32 of 262 random-sampling results from 1998–2004 exceeded 100 µg/kg against none of 12 from 2010–2014, so this pattern belongs mostly to older submissions.', [gems]),
   ('Ten apples from South-East Asia in 2012–2013 had a median of 75 µg/kg; ten results cannot represent a region.', [gems]),
   ('WHO regions are reporting regions, not growing areas, so these are lowest observed patterns by market, not rankings of producing countries.', [])),
 P(('Within European monitoring, imported and domestic apples differed mainly in the high tail.', [gems]),
   ('None of 1,222 apples labelled imported exceeded 100 µg/kg lead against 14 of 1,875 labelled domestic, while the share above 50 µg/kg was similar (3.5% against 3.7%).', [gems]),
   ('The export does not name the country of growth, so this cannot show which producing countries are lower.', [gems])),
 P(('For cadmium, monitored apple is consistently low, and the Americas were again lowest.', [gems]),
   ('Only 20 of 650 apples submitted from the Americas had detectable cadmium, the highest at 50 µg/kg, while 112 of 4,582 European results exceeded the 20 µg/kg EU limit for pome fruit, with a maximum of 500 µg/kg.', [gems, eu]),
   ('Total arsenic was mostly below detection in Europe and the Western Pacific, and inorganic arsenic has too few results (13 in GEMS/Food, ten in the FDA 2016 survey) to compare regions.', [gems, f16])),
 P(('No variety or production label measured reliably lower.', [gems, f16]),
   ('Cultivar labels submitted from the Americas in 2014–2016 (Gala, McIntosh, Red Delicious, Golden Delicious, Granny Smith, Spartan and others) all had lead medians below the 5 µg/kg reporting limit, and apples labelled organic had a median of 1–2 µg/kg against no more than 2.2 µg/kg for others.', [gems]),
   ('In the FDA 2016 survey, inorganic arsenic was below detection in all ten apples, organic and conventional, across nine named varieties.', [f16])),
],
'processing': [
 P(('Washing, peeling and drying are the processing steps with apple evidence, and only drying has a clear measured effect.', []),
   ('In a 1998 Western Pacific survey, washed and unwashed apples both had lead, cadmium, arsenic and mercury medians below reporting limits of 2.5–5 µg/kg, so washing could not be shown to lower these metals at such low levels.', [gems]),
   ('No study measured peeled and unpeeled apples from the same lot; peeled apples bought in South Korea averaged 46 µg/kg lead and peeled apples on the Polish market 9 µg/kg, a difference between markets and laboratories rather than an effect of peeling.', [lee, rus])),
 P(('Drying concentrates metals per kilogram.', [gems, rus]),
   ('Dried apple submitted to GEMS/Food from Europe had a lead median of 26–29 µg/kg under random sampling against below 10 µg/kg for fresh apple, and on the Polish market dried apple averaged 127 µg/kg lead and 23 µg/kg cadmium on a dry-weight basis against 9 and 1 µg/kg in fresh peeled apple.', [gems, rus]),
   ('Single dried-apple products have reported 897 µg/kg cadmium (an Iranian product sold in Iraq), 63 µg/kg lead and 257 µg/kg chromium (Iraq) and 16 µg/kg mercury (an import to Poland), on bases the papers do not state.', [hadi, mah, man])),
],
'controls': [
 P(('Controls for metals in apples act at the orchard, during handling and storage, and at lot release.', []),
   ('The only measured orchard comparison is irrigation water: wastewater-irrigated Golden Delicious fruit carried more arsenic than well-water fruit in one of two years, while the choice among three rootstocks made no significant difference to fruit arsenic.', [nas]),
   ('Siting evidence is observational: apples grown on lead-contaminated urban allotment soil still had the lowest lead of any crop measured there.', [bra])),
 P(('Handling controls rest on guidance and descriptive comparisons rather than tested effects.', [eu, bfr, gems]),
   ('The EU defines its limits on washed fruit with the edible part separated, German risk assessors advise against wrapping cut apples or storing apple puree in aluminium foil, and washed and unwashed apples in one survey could not be told apart because both were below detection.', [eu, bfr, gems]),
   ('Testing a lot detects lead and cadmium but does not remove them, so release testing is a verification step rather than a reduction.', [eu])),
],
'tradeoffs': [
 P(('Treated wastewater saves fresh water for orchards but raised fruit arsenic in one of two years in the only apple study, and the authors still recommended diluted or alternating use.', [nas]),
   ('Its rootstock comparison found that rootstocks changed lead and nickel in the leaves without any fruit measurement for those metals, so a rootstock chosen for one metal cannot be assumed neutral for others.', [nas])),
 P(('Peeling may remove surface soil along with part of the fruit, but no study in the library measured how much lead or cadmium peeling removes from apples.', []),
   ('Drying turns a low fresh concentration into a higher dried one, so a dried-apple result must be read against a dried-fruit limit, such as China’s 0.5 mg/kg for lead, rather than the 0.10 mg/kg fresh-fruit limit.', [cn, eu, gems]),
   ('Aluminium foil is convenient for packing cut fruit, but acidic foods such as apple can take up aluminium from it.', [bfr])),
],
'testing': [
 P(('A useful apple test must be able to see well below the limits it is checked against.', [eu, cx]),
   ('Laboratories reporting apple lead to GEMS/Food from the Americas mostly used detection limits of 1–5 µg/kg, but European limits ranged from 3 to 50 µg/kg, and 50 European lead non-detects had limits of 100 µg/kg or more, too high to show whether the 100 µg/kg limit was met.', [gems]),
   ('For cadmium, 42 European non-detects had limits above the 20 µg/kg EU pome-fruit maximum.', [gems, eu])),
 P(('Several small studies report values that their own methods cannot support.', [rah, sem, lia, sal, alt, naw, rez, wang]),
   ('Market surveys from Pakistan, Poland, China, India and Turkey printed apple means below their stated detection limits, cadmium near 1,000 µg/kg alongside implausible iron, nickel near 12,000 µg/kg with similar values in every food tested, or identical substituted values across foods; these are held on this page and shown with the specific conflict.', [rah, sem, lia, sal, alt, naw, wang])),
 P(('State the form and basis on every result: fresh apple as sold, peeled apple and dried apple are different materials, and a dry-weight result is several times a fresh-weight one.', [eu, rus, nas]),
   ('Arsenic in apples should be read as total arsenic unless speciated; where it was speciated, inorganic arsenic was below 2.2 µg/kg in ten US-bought apples and averaged 6 µg/kg in Hong Kong retail apples.', [f16, hki])),
],
'procurement': [
 P(('Ask for lot-specific lead and cadmium results on the fresh fruit, with the laboratory’s quantification limit, compared with the destination-market limit.', [eu, cx]),
   ('The EU sets 0.10 mg/kg lead for fruit and 0.020 mg/kg cadmium for pome fruit on a wet-weight basis, after washing and separating the edible part.', [eu]),
   ('Codex sets 0.1 mg/kg lead for fruits, measured on the whole fruit after removing stems, and no cadmium limit for fruit.', [cx]),
   ('China sets 0.1 mg/kg lead and 0.05 mg/kg cadmium for fresh fruit and 0.5 mg/kg lead for dried fruit, and Australia, New Zealand and Hong Kong set 0.1 mg/kg lead for fruit.', [cn, anz, hkr])),
 P(('None of these markets sets an arsenic or mercury limit for fresh fruit, and the EU nickel limits added in 2024 do not cover fruit.', [eu, cx, cn, anz, hkr]),
   ('Record where the apples were grown as well as where they were packed or bought, because monitoring datasets identify only the reporting market and an imported or domestic label.', [gems]),
   ('Ask for dried apple to be tested as dried product and judged against a dried-fruit limit where one applies; the EU instead requires fresh-fruit limits to be adjusted for the drying factor.', [cn, eu, gems])),
],
'product': [
 P(('Fresh apple is widely eaten by children and adults, but no source in the library estimated lead or cadmium exposure from fresh apples with verified concentrations.', []),
   ('In total diet studies, apple was below detection for lead, cadmium and mercury in the United States and averaged 11 µg/kg lead and 6 µg/kg inorganic arsenic as eaten in Hong Kong.', [fda, hk, hki])),
 P(('The apple products most associated with exposure concerns are juice and purees, which have their own pages.', [fdj, nap]),
   ('The United States has an action level of 10 parts per billion inorganic arsenic for apple juice, and the 2023 lead poisoning cluster linked to apple-cinnamon fruit puree pouches was traced to the cinnamon, not to the apples.', [fdj, nap]),
   ('In the Newcastle gardeners’ study, eating more bought tree fruit was associated with higher blood lead, an observational link that does not identify apples as the cause.', [bra])),
],
'assessment': [
 P((f'This assessment covers every source record in the HMI library that names apple, plus every apple row in the WHO GEMS/Food exports and the FDA Total Diet Study and baby-food datasets; each of the {n_sources} source records has a recorded decision based on its content.', [gems, fda]),
   (f'{n_occ} sources contribute apple results, and 11 contain values held in part because they could not be reconciled with their own methods.', [rah, sem, lia, sal, alt, naw, rez, wang, una, f16, hou])),
 P(('Remaining gaps are origin-linked data: no source links apple metal results to the country or orchard where the fruit was grown at scale, and inorganic arsenic in apples rests on fewer than 30 results.', [gems, f16, hki]),
   ('Several primary papers cited by reviews in the library, including a Bangladeshi market survey of apples, are not yet in the library.', [])),
],
}

headings = {'summary': 'Apple overview', 'identity': 'What counts as apple', 'occurrence': 'Heavy metal contamination profile of apples',
 'pathways': 'How metals reach apples', 'variation': 'Which apples and markets measured lower', 'processing': 'Washing, peeling and drying',
 'controls': 'Mitigation from orchard to market', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing apples for metals',
 'procurement': 'Buying and verifying apples', 'product': 'Exposure from apples', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Fresh apple fruit (Malus domestica): whole with peel, peeled, washed or unwashed, plus dried apple as a separate form.', gems, fda, lee, rus),
             A('Apple juice, applesauce, apple baby foods, cider, vinegar, pomace, composite foods and other fruits called apple are excluded.', gems, fda),
             A('Basis is kept as reported (as sold or fresh weight, dry weight, or unstated); no moisture conversion is applied.', gems, afr, nas)],
'summary': [A('Lead medians in fresh apple are below reporting limits in large monitoring sets; 15 of 3,321 European and 13 of 982 Americas results exceeded 100 µg/kg.', gems, eu, cx),
            A('Cadmium, arsenic and mercury are mostly below detection; 112 of 4,582 European cadmium results exceeded the 20 µg/kg EU pome-fruit limit.', gems, fda, eu),
            A('Dried apple is higher per kilogram; several small studies report values their methods cannot support and are held.', gems, rus, rah, sem)],
'occurrence': [A(f'Every apple result from GEMS/Food, FDA TDS and {n_occ - 2} further studies appears as one row per statistic, form, group and metal.', gems, fda),
               A('Non-detects stay as zero-to-limit intervals; GEMS/Food rows are HMI-calculated medians by region, sampling type and portion.', gems),
               A('References by form and basis; many fresh-apple rows cannot be rated because most results are non-detects, and are compared within their dataset.', gems, fda, f16)],
'pathways': [A('Soil and water through the tree, and surface soil and dust on the fruit.', nas, bra, eu),
             A('Apples on lead-contaminated allotment soil had the lowest lead of any crop measured (median 1 µg/kg fw).', bra),
             A('Wastewater irrigation raised fruit arsenic in one of two years in one orchard study.', nas)],
'variation': [A('Lowest lead: Americas GEMS/Food (median ≤2.1 µg/kg) and US FDA TDS (all <4 µg/kg); higher in older Western Pacific submissions.', gems, fda),
              A('EURO imported apples had no lead results above 100 µg/kg (0 of 1,222) against 14 of 1,875 domestic; growing country not identified.', gems),
              A('No cultivar or organic label measured reliably lower; inorganic arsenic was below detection across varieties in FDA 2016.', gems, f16)],
'processing': [A('Washed and unwashed apples could not be distinguished (both below detection) in one 1998 survey.', gems),
               A('No same-lot peeled versus unpeeled comparison exists.', lee, rus),
               A('Drying raises metals per kilogram: EURO dried apple lead median 26–29 µg/kg against <10 fresh.', gems, rus)],
'controls': [A('Irrigation water quality (measured, one study) and orchard siting (observational).', nas, bra),
             A('Rootstock choice did not change fruit arsenic significantly.', nas),
             A('Washing definition (EU), aluminium foil guidance (BfR) and release testing with adequate limits.', eu, bfr, gems)],
'tradeoffs': [A('Wastewater reuse versus fruit arsenic.', nas),
              A('Peeling removes part of the fruit with an unmeasured metal benefit; no paired peel study exists.', lee, rus),
              A('Dried apple must be judged against dried-fruit limits.', cn, gems)],
'testing': [A('Quantification limits must sit well below 100 µg/kg lead and 20 µg/kg cadmium; many European non-detects did not.', gems, eu),
            A('Results failing their own method checks are held with the specific conflict.', rah, sem, lia, sal, alt, naw, wang),
            A('Report form and basis; speciate arsenic where inorganic arsenic matters.', f16, hki)],
'procurement': [A('EU Pb 0.10 mg/kg fruit, Cd 0.020 mg/kg pome fruit; Codex Pb 0.1; China Pb 0.1, Cd 0.05, dried fruit Pb 0.5; Australia/NZ and Hong Kong Pb 0.1.', eu, cx, cn, anz, hkr),
                A('No verified arsenic, mercury or nickel limit specific to fresh apple.', eu, cx, cn),
                A('Record growing origin as well as purchase market; test dried apple as dried product.', gems, cn)],
'product': [A('No verified exposure estimate for metals from fresh apples exists in the ledger.', fda, hk),
            A('Juice and puree exposure belong to their own pages; the apple-cinnamon pouch lead cluster was traced to cinnamon.', fdj, nap),
            A('Observational link between bought tree fruit and blood lead in one UK cohort.', bra)],
'assessment': [A(f'All {n_sources} apple-naming source records and every apple GEMS/Food and FDA dataset row dispositioned on content.', gems, fda),
               A('Values failing integrity checks are held, not used in references.', rah, sem, lia, sal, alt, naw, rez, wang),
               A('Gaps: origin-linked results and inorganic arsenic in apples.', gems, f16)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which regions or markets measured lowest in lead?',
  P(('Apples submitted to GEMS/Food from the Americas (median at or below 2.1 µg/kg, 982 results) and the US Total Diet Study (all 27 composites below 4 µg/kg) were lowest.', [gems, fda]),
    ('European results had a median below 10 µg/kg, and Western Pacific random-sampling results a median of about 24 µg/kg, mostly from 1998–2009.', [gems]),
    ('Reporting limits differ between regions, so part of the gap between the Americas and Europe reflects laboratory sensitivity rather than the fruit.', [gems]))),
 ('Does apple variety change lead or cadmium?',
  P(('Not measurably in the evidence: every named cultivar submitted from the Americas in 2014–2016 had a lead median below the 5 µg/kg reporting limit, and only single results reached 63 µg/kg (McIntosh) and 43 µg/kg (Gala).', [gems]),
    ('No study compared cultivars for cadmium.', []))),
],
'processing': [
 ('Does peeling an apple remove lead?',
  P(('No study in the library measured peeled and unpeeled apples from the same lot, so the size of any reduction is unknown.', [lee, rus]),
    ('Peeled apples in two market surveys averaged 46 µg/kg lead in South Korea and 9 µg/kg in Poland, a difference that tracks the market and laboratory rather than peeling.', [lee, rus]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in apples?',
  P(('Lead is the metal most often detected in fresh apples, usually at a few micrograms per kilogram; cadmium, arsenic and mercury are mostly below detection.', [gems, fda]),
    ('Aluminium occurs at higher levels, around 380 µg/kg in Hong Kong retail apples and a median of 930 µg/kg in 16 European results.', [hk, gems])), 'GEMS/Food apple records; FDA TDS food 78; Hong Kong TDS 2013 apple row'),
 ('ING-FAQ-02', 'How do heavy metals get into apples?',
  P(('From orchard soil and irrigation water through the tree, and from soil and dust on the skin.', [nas, eu]),
    ('Apple trees move little lead into the fruit: apples on lead-contaminated allotment soil had a median of 1 µg/kg lead, the lowest of every crop measured there.', [bra])), 'Nasirpour Fig. 1U; EU 2023/915 3.1.1; Bramwell Discussion p.3507'),
 ('ING-FAQ-03', 'Are organic apples lower in heavy metals?',
  P(('Not measurably: apples labelled organic in GEMS/Food submissions from the Americas had a lead median of 1–2 µg/kg against no more than 2.2 µg/kg for other apples, and inorganic arsenic was below detection in organic and conventional apples alike in the FDA 2016 survey.', [gems, f16]),
    ('An organic label describes how the fruit was grown, not a test result for metals.', [])), 'GEMS/Food PAHO organic label 2014–2016; FDA 2016 Full Analytical Results p.15'),
 ('ING-FAQ-04', 'Which apple varieties have the lowest levels?',
  P(('None can be named: every cultivar submitted from the Americas in 2014–2016, including Gala, McIntosh, Red Delicious, Golden Delicious and Granny Smith, had a lead median below the 5 µg/kg reporting limit.', [gems]),
    ('In the FDA 2016 survey, inorganic arsenic was below detection in all nine named varieties tested.', [f16])), 'GEMS/Food PAHO cultivar labels; FDA 2016 p.15'),
 ('ING-FAQ-05', 'Which countries or regions produce apples with the lowest lead?',
  P(('Apples reported from the Americas and the United States were lowest: a GEMS/Food median at or below 2.1 µg/kg and all 27 US Total Diet Study composites below 4 µg/kg.', [gems, fda]),
    ('These are reporting markets, not growing areas, so the evidence cannot name the producing countries with the lowest lead.', [gems])), 'GEMS/Food PAHO and EURO apple lead; FDA TDS food 78'),
 ('ING-FAQ-06', 'Do foods made from apples also contain heavy metals?',
  P(('Dried apple carries more per kilogram because water is removed: European dried apple had a lead median of 26–29 µg/kg against below 10 µg/kg for fresh.', [gems]),
    ('Apple juice and applesauce are covered on their own pages and are not compared here.', [])), 'GEMS/Food EURO dried apple lead'),
 ('ING-FAQ-07', 'What do the levels in apples mean for health?',
  P(('No source in the library estimated how much lead or cadmium people take in from fresh apples, so the evidence cannot say what share of intake apples supply.', []),
    ('Measured fresh-apple levels are mostly below the limits set for fruit, but a concentration below a limit is not by itself a measure of individual risk.', [gems, eu])), 'GEMS/Food; EU 2023/915'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in apples?',
  P(('Yes: the EU sets 0.10 mg/kg lead for fruit and 0.020 mg/kg cadmium for pome fruit, Codex 0.1 mg/kg lead for fruits, and China 0.1 mg/kg lead and 0.05 mg/kg cadmium for fresh fruit.', [eu, cx, cn]),
    ('Australia, New Zealand and Hong Kong set 0.1 mg/kg lead for fruit, and China sets 0.5 mg/kg lead for dried fruit; none of these markets sets an arsenic or mercury limit for fresh apple.', [anz, hkr, cn])), 'EU 2023/915 3.1.1.2, 3.2.1.2; CXS 193 p.61; GB 2762-2025 pp.4, 7; FSANZ S19-4; Cap 132V Sch. Part 2 item 9'),
 ('ING-FAQ-09', 'Does washing apples remove heavy metals?',
  P(('Washing removes soil and dust from the skin, and the EU applies its limits to washed fruit, but the only apple comparison could not show an effect because washed and unwashed apples were both below detection.', [eu, gems]),),
  'EU 2023/915 3.1.1 remark; GEMS/Food WPRO 1998 washed/unwashed'),
 ('ING-FAQ-11', 'Does peeling apples lower heavy metals?',
  P(('Unknown for apples: no study in the library measured peeled and unpeeled fruit from the same lot.', [lee, rus]),
    ('Peeled apples bought in South Korea and Poland averaged 46 and 9 µg/kg lead, a difference between markets rather than an effect of peeling.', [lee, rus])), 'Lee Table 1; Rusin Table 4'),
 ('ING-FAQ-10', 'Is the arsenic in apples the more toxic inorganic form?',
  P(('Where it was measured, inorganic arsenic in apples was low: below 2.2 µg/kg in all ten US-bought apples in the FDA 2016 survey and an average of 6 µg/kg in Hong Kong retail apples.', [f16, hki]),
    ('Most apple arsenic results are total arsenic, which includes less toxic organic forms, and fewer than 30 inorganic arsenic results exist.', [gems, f16])), 'FDA 2016 p.15; Hong Kong TDS 2012 apple row; GEMS/Food iAs records'),
 ('ING-FAQ-13', 'Are apples a concern for babies and children?',
  P(('Fresh apple itself measured low in the studies here, but the 2023 lead poisoning cluster linked to apple-cinnamon fruit puree pouches was traced to the cinnamon, not the apples.', [gems, fda, nap]),
    ('Apple juice and apple baby foods are covered on their own pages.', [])), 'Napier MMWR 2024; GEMS/Food; FDA TDS'),
 ('APPLE-FAQ-01', 'Is dried apple higher in heavy metals than fresh apple?',
  P(('Per kilogram, yes, because drying removes most of the water: on the Polish market dried apple averaged 127 µg/kg lead and 23 µg/kg cadmium on a dry-weight basis against 9 and 1 µg/kg in fresh peeled apple.', [rus]),
    ('Single dried products from Iraq and Iran reported up to 897 µg/kg cadmium on an unstated basis, so dried apple is worth testing as dried product.', [hadi, mah])), 'Rusin Table 4; Hadi Table 2; Mahmood Table 1'),
 ('APPLE-FAQ-02', 'Do apples from orchards irrigated with wastewater carry more arsenic?',
  P(('In the one apple study, yes in the second year: Golden Delicious fruit watered with treated wastewater carried about 380–390 µg/kg arsenic on a dry-weight basis against 140–150 µg/kg with well water.', [nas]),
    ('First-year results did not separate clearly, and the values were read from a chart without a reported detection limit.', [nas])), 'Nasirpour Fig. 1U, Table 3'),
 ('APPLE-FAQ-03', 'Are apples grown in urban gardens high in lead?',
  P(('Not in the evidence available: on Newcastle allotments with soil averaging 327 mg/kg lead, apples had a median of 1 µg/kg lead, lower than every other crop measured.', [bra]),
    ('Root vegetables and soft fruit from the same sites were much higher, so the crop matters more than the site for apples.', [bra])), 'Bramwell Discussion p.3507'),
 ('APPLE-FAQ-04', 'Are imported apples higher in lead than locally grown ones?',
  P(('In European monitoring the opposite held in the high tail: none of 1,222 apples labelled imported exceeded 100 µg/kg lead against 14 of 1,875 labelled domestic.', [gems]),
    ('The share above 50 µg/kg was similar, and the export does not name the country of growth.', [gems])), 'GEMS/Food EURO apple lead by origin label'),
 ('APPLE-FAQ-05', 'Has lead in apples been falling?',
  P(('In Western Pacific submissions it fell: 32 of 262 random-sampling results from 1998–2004 exceeded 100 µg/kg against none of 12 from 2010–2014.', [gems]),
    ('In Europe the median stayed below 10 µg/kg from 2000 to 2020, with fewer than 1% of results above 100 µg/kg in each period.', [gems])), 'GEMS/Food WPRO and EURO apple lead by period'),
 ('APPLE-FAQ-06', 'How can I tell whether an apple metals test is good enough?',
  P(('Check that the quantification limit is far below the limit being checked: under 20 µg/kg for cadmium and well under 100 µg/kg for lead.', [eu]),
    ('Laboratories reporting apples from the Americas used lead limits of 1–5 µg/kg, while some European non-detects had limits of 100 µg/kg or more, which cannot show compliance.', [gems])), 'GEMS/Food LOD fields; EU 2023/915 3.1.1.2, 3.2.1.2'),
 ('APPLE-FAQ-07', 'Can aluminium foil add aluminium to cut apples?',
  P(('German risk assessors advise against wrapping cut apples or storing apple puree in aluminium foil or uncoated aluminium, because acidic foods take up aluminium from it.', [bfr]),
    ('The advice is qualitative; no apple measurement is given.', [bfr])), 'BfR aluminium FAQ'),
 ('APPLE-FAQ-08', 'Why do some studies report much higher heavy metals in apples?',
  P(('Mostly because of basis and method: dry-weight results are several times fresh-weight ones, and several market surveys printed values below their own detection limits or implausibly high across every food tested.', [afr, nas, rah, sem, naw, sal]),
    ('Those values are shown on this page but held from comparisons, with the specific conflict stated.', [rah, sem, naw, sal])), 'Held rows: Rahim Table 2; Sembratowicz Tables 2–3; Nawab Table 2; Salhotra Table 1'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-apple-v1', 'family': 'ingredient', 'slug': 'apple', 'title': 'Apple', 'display_title': 'Apple', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, arsenic and other metals in fresh and dried apples: monitoring results, markets, varieties, washing and drying, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Apple FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, iAs, DMA, total Hg, Ni, Cr, Al, Sn, Sb, U as reported', 'material_form': 'Fresh apple (peel on or not stated, peeled, washed or unwashed) and dried apple; juice, sauce, baby foods, composite foods and other fruits called apple excluded',
               'basis': 'As reported: as sold or as eaten, fresh weight, dry weight or unstated; µg/kg; no moisture conversion', 'geography_market': 'WHO reporting region, purchase market or growing area as each source reports',
               'period': 'Source collection years 1998–2025 where reported; unreported dates stay unknown', 'stage': 'Orchard, washing and peeling, drying, storage, retail and release testing',
               'population_route': 'Dietary ingestion', 'comparator_outcome': 'HMI apple references by form and basis; same-study region, washing, drying, irrigation and area contrasts'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record naming apple, plus apple rows in WHO GEMS/Food exports, FDA Total Diet Study FY2018–FY2020 and FDA baby-food and juice datasets',
                'protocol_ref': 'data/evidence/contracts/apple/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/apple/extraction/'],
                'screening_ref': 'data/evidence/contracts/apple/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Supplementary Table S1 of Lee et al. 2023 (growing origin of the Korean apples)', 'Primary market survey behind the apple values quoted by Islam et al. 2024 (Rahman and Islam 2019)']},
     'source_catalogue': {'topic': 'ingredients/apple'}, 'retain_history_only': True}

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

quick = P(('Fresh apples are usually low in lead, with medians below reporting limits in large monitoring sets, but some regional submissions and dried apple run higher; cadmium is the metal closest to the EU pome-fruit limit.', [gems, fda, eu]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead and cadmium; arsenic and mercury are mostly below detection in fresh apple.', [gems, fda]),
 ('Main drivers', 'The market and laboratory sampled, irrigation water, and drying, which concentrates metals.', [gems, nas, rus]),
 ('Practical framing', 'Ask for lot-specific lead and cadmium results on the fruit, with a quantification limit well below 20 µg/kg.', [eu, gems])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-apple-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-12', 'status': 'not_applicable', 'reason': 'No direct metal comparison of apple with a commonly confused alternative (pear, quince) on the same basis in the ledger.'},
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Cooked apple is applesauce or compote, covered on the applesauce page; no plain cooked-apple result is in scope.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not a practice for apples and no apple soaking evidence exists.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative serving guidance for metals from fresh apples; no frequency is invented.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for apples and metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, consumer=False):
    return {'id': f'apple-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/apple.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Apple', 'audiences': ['supplier', 'brand'] + (['consumer'] if consumer else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, yield, taste and cost not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific lead and cadmium results on the fresh fruit, using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational survey' if kind == 'observational' else 'Orchard field experiment' if kind == 'measured' else 'Regulatory or official guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or remaining on apples, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'Ratios are calculated from the source values shown in outcomes.', 'basis_yield_mass_balance': 'Basis as stated in outcomes; no mass balance reported.',
            'other_contaminants': 'Pesticide residues are outside this table.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled commercial-scale apple intervention effect', 'next_action': 'No controlled commercial apple intervention study in the library; keep effects unquantified unless measured.'}],
            'review': {'record_ref': 'data/evidence/contracts/apple/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Fresh apple, as sold', note='Source values.'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
NAS = ('Nasirpour et al. 2026', 'https://doi.org/10.1186/s12870-025-08080-7')
GEMS = ('WHO GEMS/Food', 'https://extranet.who.int/gemsfood/?DisplayFormat=1')
controls = [
 control(1, nas, *NAS, 'cultivation', 'Irrigate with well water rather than treated wastewater', 'measured', 'Golden Delicious apples, orchard near Mashhad, Iran, 2021–2022',
   'Fruit from trees irrigated with 100% or 50% treated municipal wastewater carried about 2.5–2.8 times the arsenic of well-water fruit in the second year; first-year results did not separate clearly.',
   'Well-water control against 50% and 100% treated wastewater, same orchard, cultivar and year; three rootstocks pooled.',
   [out('tAs', 'higher', 140, 390, 'About 2.8 times higher with 100% wastewater (year 2)', 'Fruit total arsenic, dry weight', '100% wastewater versus well water, year 2', 'Fig. 1U p.7; Table 3 p.4', 'Whole fruit, dry weight', 'Means read from the bar chart; precision about ±20 µg/kg.'),
    out('tAs', 'higher', 140, 380, 'About 2.7 times higher with 50% wastewater (year 2)', 'Fruit total arsenic, dry weight', '50% wastewater versus well water, year 2', 'Fig. 1U p.7', 'Whole fruit, dry weight', 'Means read from the bar chart.'),
    out('tAs', 'context', None, None, 'Not clearly different in year 1 (about 780 against 690 µg/kg)', 'Fruit total arsenic, dry weight', '100% wastewater versus well water, year 1', 'Fig. 1U p.7; Duncan letters', 'Whole fruit, dry weight', 'Means read from the bar chart; treatments share significance letters.')],
   'One orchard and cultivar over two seasons.', 'No detection limit, reference material or recovery reported; values read from a chart.', 'Field'),
 control(2, nas, *NAS, 'cultivation', 'Rootstock choice (MM111, MM106 or EM9)', 'measured', 'Golden Delicious apples, orchard near Mashhad, Iran',
   'Rootstock had no significant effect on fruit arsenic; it changed leaf lead and nickel, but fruit lead and nickel were not reported.',
   'Three rootstocks under the same irrigation treatments.',
   [out('tAs', 'context', None, None, 'No significant rootstock effect on fruit arsenic', 'Fruit total arsenic, dry weight', 'Rootstock main effect', 'Table 3 p.4', 'Whole fruit, dry weight', 'Analysis of variance reported by the source.')],
   'One orchard and cultivar.', 'Fruit lead and nickel not reported.', 'Field'),
 control(3, bra, 'Bramwell et al. 2022', 'https://doi.org/10.1007/s10653-021-01095-7', 'primary production', 'Grow apples rather than root vegetables on lead-contaminated soil', 'observational', 'Apples from urban allotments, Newcastle upon Tyne, UK',
   'On allotment soils averaging 327 mg/kg lead, apples had a median of 1 µg/kg lead on a fresh-weight basis, the lowest of every crop group, against 23 µg/kg for root vegetables.',
   'Apples against other crop groups grown on the same sites.',
   [out('Pb', 'lower', 23, 1, 'Lowest crop group on the same soils', 'Median fruit or vegetable lead, fresh weight', 'Apples versus root vegetables, same sites', 'Discussion p.3507', 'Fresh weight', 'Medians restated from Entwistle et al. 2019; n not given.')],
   'Urban allotments on lead-enriched soil.', 'Observational; sample numbers not given in this paper.', 'Field survey', True),
 control(4, gems, *GEMS, 'food preparation', 'Wash apples before analysis or eating', 'observational', 'Apples in a 1998 Western Pacific targeted survey',
   'Washed and unwashed apples both had lead, cadmium, arsenic and mercury medians below reporting limits of 2.5–5 µg/kg, so any effect of washing could not be measured at these levels.',
   'Washed against unwashed apples in the same survey (24 and 18 results).',
   [out('Pb', 'context', None, None, 'Both below detection (<5 µg/kg)', 'Median lead', 'Washed versus unwashed', 'primary/gemsfood-apple-records.csv WPRO 1998 washed/unwashed', 'Fresh apple, as analysed', 'HMI-calculated medians of individual results.'),
    out('Cd', 'context', None, None, 'Both below detection (<2.5 µg/kg)', 'Median cadmium', 'Washed versus unwashed', 'primary/gemsfood-apple-records.csv WPRO 1998 washed/unwashed', 'Fresh apple, as analysed', 'HMI-calculated medians of individual results.')],
   'One national survey; reporting limits above most apple values.', 'Observational; not a controlled washing experiment.', 'Monitoring dataset', True),
 control(5, eu, 'Commission Regulation (EU) 2023/915', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915', 'lot acceptance and release', 'Test the washed edible part against the fruit limits', 'guidance', 'Fresh fruit including apples, EU market',
   'EU limits of 0.10 mg/kg lead for fruit and 0.020 mg/kg cadmium for pome fruit apply on a wet-weight basis after washing and separating the edible part.',
   'Regulatory definition; no measured comparison.',
   [out('Pb', 'context', None, None, 'Regulatory definition; effect not measured', 'Lead limit basis', 'Washed edible part', 'Annex I 3.1.1.2 and group remark 3.1.1, PDF p.27', 'Fresh fruit, wet weight', 'Regulatory text.'),
    out('Cd', 'context', None, None, 'Regulatory definition; effect not measured', 'Cadmium limit basis', 'Washed edible part', 'Annex I 3.2.1.2 and group remark 3.2.1, PDF p.31', 'Fresh fruit, wet weight', 'Regulatory text.')],
   'Apples placed on the EU market.', 'No measured effect size for washing apples.', 'Regulation', True),
 control(6, gems, *GEMS, 'sourcing and procurement', 'Ask for growing origin and lot lead results', 'observational', 'Fresh apples submitted to GEMS/Food from Europe, 2000–2020',
   'None of 1,222 apples labelled imported exceeded 100 µg/kg lead against 14 of 1,875 labelled domestic; the share above 50 µg/kg was similar.',
   'Imported against domestic labels within European apple submissions.',
   [out('Pb', 'context', None, None, 'Fewer high results among imports (observational)', 'Lead results above 100 µg/kg', 'Imported versus domestic label', 'primary/gemsfood-apple-records.csv EURO apple lead by FoodOriginName', 'Fresh apple, as sold', 'Counts of individual monitoring results; country of growth not exported.')],
   'European market submissions; country of growth not identified.', 'Observational; labels describe origin relative to the reporting country only.', 'Monitoring dataset'),
 control(7, gems, *GEMS, 'food processing', 'Judge dried apple against dried-fruit limits', 'observational', 'Dried and fresh apple submitted to GEMS/Food from Europe',
   'Dried apple had a lead median of 26–29 µg/kg under random sampling against below 10 µg/kg for fresh apple, because drying removes water.',
   'Dried against fresh apple in the same dataset, region and sampling type.',
   [out('Pb', 'higher', 10, 29, 'Higher per kilogram after drying (observational)', 'Median lead', 'Dried versus fresh apple, EURO random sampling', 'primary/gemsfood-apple-records.csv EURO dried and fresh lead', 'As sold', 'HMI-calculated medians; fresh value is an upper reporting bound.')],
   'Dried apple as sold.', 'Different products and laboratories; not a paired drying experiment.', 'Monitoring dataset'),
 control(8, bfr, 'German Federal Institute for Risk Assessment (BfR)', 'https://www.bfr.bund.de/en/a-z_index/aluminium-4772.html', 'storage and handling', 'Do not wrap cut apples or store apple puree in aluminium foil', 'guidance', 'Cut apples and apple puree in household storage',
   'Acidic foods such as cut apples take up aluminium from foil and uncoated aluminium containers; the advice is to use other materials.',
   'Official guidance; no measured apple comparison.',
   [out('Al', 'context', None, None, 'Guidance; effect not measured', 'Aluminium uptake from foil', 'Foil versus other storage', 'BfR aluminium FAQ', 'As stored', 'Qualitative guidance.')],
   'Household and catering storage.', 'No apple measurement reported.', 'Official guidance', True),
 control(9, gems, *GEMS, 'lot acceptance and release', 'Use a method that sees well below the limit', 'context', 'Fresh apple results submitted to GEMS/Food',
   'Laboratories in the Americas mostly reported apple lead with detection limits of 1–5 µg/kg, while 50 European lead non-detects had limits of 100 µg/kg or more and 42 cadmium non-detects limits above 20 µg/kg; testing detects metals and does not remove them.',
   'Reporting limits in submissions against the fruit limits.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Method reporting limit', 'Reported limits versus required sensitivity', 'primary/gemsfood-apple-records.csv LOD/LOQ fields', 'As sold', 'Reporting limits as submitted.'),
    out('Cd', 'context', None, None, 'Detection, not removal', 'Method reporting limit', 'Reported limits versus required sensitivity', 'primary/gemsfood-apple-records.csv LOD/LOQ fields', 'As sold', 'Reporting limits as submitted.')],
   'Any lot-release testing for apples.', 'Method fitness only.', 'Laboratory method'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls), 'sources', n_sources, 'occurrence', n_occ)
