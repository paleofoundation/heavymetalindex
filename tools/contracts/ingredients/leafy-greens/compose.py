"""Compose the leafy-greens synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/extraction/ and to
the HMI-calculated WHO GEMS/Food and FDA TDS summaries written by prepare-datasets.py.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'

gems = 'who-gemsfood-heavy-metal-contaminants'; fda = 'fda2022-tds-elements-fy2018-fy2020'
efcd = 'efsa-cadmium-contam-2009'; efpb = 'efsa-lead-contam-2010'; ef12 = 'efsa2012-cadmium-dietary-exposure-europe'
jec64 = 'jecfa-64th-cadmium-tin-2006'; jec91 = 'jecfa-91st-cadmium-2022'
eu = 'eu-2023-915-contaminants-maximum-levels'; euni = 'eu-2024-1987-nickel-maximum-levels'; cx = 'codex-cxs-193-1995'
cn = 'usda-fas2023-china-gb-2762-2022-translation'; kr = 'mfds2012-food-code-heavy-metals'; hk = 'cfs2019-hk-metallic-contamination-guidelines'
mar = 'martin-leon2023-canary-leafy-vegetables-elements'; fera = 'fera2015-uk-tds-metals'; hkt = 'cfs2013-hktds-metallic-contaminants'; hka = 'cfs2012-hktds-inorganic-arsenic'
kim = 'kim2024-metals-kale-urban-rural-maryland'; dea = 'dearing2025-nz-organic-nonorganic-vegetables-cyclone'; rem = 'rempelos2023-vegetable-organic-conventional-metals'
adh = 'adhikari2024-leafy-vegetables-johannesburg'; bora = 'bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing'
li = 'li2017-mercury-coal-power-plants-vegetables-grains'; wang21 = 'wang2021-houttuynia-mercury-china'; nas = 'naser2018-leafy-vegetables-bangladesh-metals'
ros = 'rossini-oliva2024-urban-garden-vegetables-spain'; ahm = 'ahmed2017-bangladesh-vegetable-arsenic'; cla = 'clair-caliot2021-arsenic-irrigated-vegetables-burkina'
kul = 'chemistry2022-bio-accumulation-of-heavy-metals-in-some-north'; zha = 'zhang2024-lettuce-cadmium-greenhouse-amendments'; sun = 'sun2025-biochar-alginate-cadmium-lettuce'
yil = 'yildirim2021-humic-fulvic-cd-garden-cress'; hus = 'hussain2016-spinach-cadmium-zinc'; kan = 'kananke2026-sri-lanka-leaf-bioaccessibility'
wij = 'wijeyaratne2021-alternanthera-metals-sri-lanka'; song = 'song2017-china-dietary-cadmium-exposure'; w19 = 'wang2019-dietary-lead-guangzhou'
dai = 'dai2024-chongqing-dietary-arsenic-exposure'; han = 'han2024-nickel-zhejiang-china'; mas = 'masri2025-toxicant-foods-california'
san = 'sandil2023-arsenic-bean-lettuce'; kib = 'authors2022-compared-to-the-chemical-fertilizer-in-organic-fertilizer'; guo = 'guo2024-cadmium-bioaccessibility-pak-choi'
she = 'sheikh2025-spinach-biochar-cadmium'; che = 'cherfi2014-algeria-fruits-vegetables-metals'; sul = 'sultana2022-dhaka-root-leafy-vegetables'; liu = 'liu2023-yuyao-soil-crop-metals'
bed = 'bedoya-perales2023-moquegua-peru-mining-dataset'; chen24 = 'chen2024-shanghai-hydroponic-vegetables'; sou = 'souri2019-leafy-vegetables-growth-stage-metals'

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
 P(('Cadmium is the metal that most often decides a leafy-green question, and the leaf type matters more than any other single factor in the monitoring data.', [gems, fda]),
   ('Across more than 2,200 WHO GEMS/Food spinach results the median was about 41 µg/kg fresh weight, against 19–20 µg/kg for leaf lettuce, 11–12 µg/kg for head lettuce and 2–4 µg/kg for head cabbage.', [gems]),
   ('The FDA Total Diet Study found the same order in US market composites from 2018 to 2020: spinach 200, leaf lettuce 57, iceberg lettuce 27 and cabbage 5.1 µg/kg as medians.', [fda]),
   ('European monitoring summarised by EFSA gave spinach a mean of 61.5 µg/kg and other leafy vegetables 23.1 µg/kg, with 3.9% of spinach samples above the EU limit.', [efcd])),
 P(('Lead is usually low in routinely monitored retail leaves.', [gems, fda]),
   ('Most head lettuce and cabbage results in GEMS/Food were below detection, most FDA lettuce and cabbage composites were below a 4 µg/kg reporting limit, and EFSA’s European leafy-vegetable median was 10 µg/kg.', [gems, fda, efpb]),
   ('The EU limits are 0.30 mg/kg (300 µg/kg) lead for leaf vegetables and 0.10 mg/kg cadmium, raised to 0.20 mg/kg for spinach and similar leaves and fresh herbs.', [eu])),
 P(('Field studies near mining, smelting, coal power plants, wastewater irrigation or heavy traffic report leaves tens to hundreds of times more contaminated than market monitoring.', [nas, li, ros, adh]),
   ('Many of those studies report on a dry-weight basis, which by itself raises concentrations about ten-fold, and several fail checks against their own methods, so the page shows them without comparing them.', [che, sul, liu]),
   ('For a buyer the supported priorities are the growing site and irrigation water, the leaf type, and lot results for cadmium and lead reported on a fresh-weight basis.', [eu, li, cla])),
],
'identity': [
 P(('This page covers edible leaves eaten as vegetables, each kept as its own material: spinach, leaf, head and romaine lettuce, head cabbage, Chinese cabbage, pak choi, kale, chard, amaranth, water spinach, mustard greens, watercress, lamb’s lettuce, rocket and leafy herbs such as coriander, parsley, mint and dill.', [gems, mar, hkt]),
   ('Cooked, frozen, canned, fermented and dried leaves are kept apart from raw leaves, because preparation changes water content and can add or remove metals.', [gems, cla])),
 P(('The basis of a result matters as much as the leaf.', []),
   ('Fresh leaves are mostly water, about 92% in the Algerian spinach and salad samples, so a dry-weight result is roughly ten times the fresh-weight value for the same leaf.', [che]),
   ('The page never converts between fresh and dry weight, and results whose basis is not stated stay separate.', [che, kim]),
   ('Seaweed sold as sea lettuce, tea and medicinal herb leaves, mixed baby foods that contain spinach, Brussels sprouts, roots and stems are outside this scope.', [gems, fda, fera])),
],
'occurrence': [
 P(('The table holds every leafy-green result extracted from 98 sampling families, including WHO GEMS/Food submissions summarised by leaf, region and sampling type, the FDA and UK total diet studies, Hong Kong’s total diet study and every field and market survey in the library.', [gems, fda, fera, hkt, mar]),
   ('Each row is one statistic for one leaf, group and metal on its stated basis; ratings place a mean, median or sample value against a pooled HMI reference for the same leaf and basis.', [gems, fda, kim])),
 P(('Non-detects stay as intervals from zero to the reporting limit and are never read as zero.', [gems, fda]),
   ('Rows that fail a check against their own paper, and values read from a figure rather than printed, stay visible with the reason and are not compared.', [sul, liu, adh])),
],
'pathways': [
 P(('Leaves take metals up from soil and irrigation water, and cadmium moves into leaves more readily than lead.', [nas, cla]),
   ('In Gazipur, Bangladesh, spinach leaves from a highly polluted industrial area carried 5,970 µg/kg lead and 1,020 µg/kg cadmium dry weight, against 1,160 and 430 µg/kg on a low-pollution research field.', [nas]),
   ('In a greenhouse trial, irrigating with water containing 500 µg/L arsenic raised spinach leaf arsenic from 1.05 to 6.57 µg/g dry matter.', [cla])),
 P(('Dust and air deposition add a surface load.', []),
   ('Near coal-fired power plants in China, water spinach carried 86.7 µg/kg mercury fresh weight at 1 km and 23.9 µg/kg at 10 km, against 0.85 µg/kg in grocery-store leaves, and rinsing removed 19–63% of the mercury.', [li]),
   ('Kale grown on urban farms in Baltimore averaged 130 µg/kg lead fresh weight against 10 µg/kg on rural farms nearby.', [kim]),
   ('Unwashed coriander from a Johannesburg roadside market carried 191.9 mg/kg cadmium dry weight against 6.6 mg/kg once washed.', [adh])),
 P(('Inputs and land use also shape levels.', []),
   ('Phosphate fertilisers raised lettuce cadmium by up to 91% in a Chinese greenhouse field trial, while farmyard manure lowered cadmium in cabbage and lettuce compared with mineral fertiliser in a long-term English trial.', [zha, rem]),
   ('Manures raised spinach lead from 0.11 to 0.50–0.75 mg/kg in a Turkish field trial.', [kib]),
   ('Mining areas raised mercury in Houttuynia leaves to 260 µg/kg dry weight against 40 µg/kg elsewhere, and lead in chard from Spanish mining-town gardens to 698 µg/kg against 118 µg/kg from a city market.', [wang21, ros])),
],
'variation': [
 P(('For cadmium the leaf type gives the most consistent lower-contamination choice.', [gems, fda, mar]),
   ('Head cabbage was among the lowest in every large dataset: GEMS/Food median 2–4 µg/kg fresh weight (only lamb’s lettuce lower), the lowest of the five FDA foods at 5.1 µg/kg, 6 µg/kg against 25 µg/kg for lettuce in the UK total diet study, and 4.6–5.4 µg/kg in an English field trial.', [gems, fda, fera, rem]),
   ('Head and iceberg lettuce were lower than leaf and romaine lettuce (GEMS/Food 11–12 against 19–20 µg/kg; FDA 27 against 57 µg/kg; Gran Canaria iceberg 4.0 against romaine 11.9 µg/kg), and spinach was highest in all of them.', [gems, fda, mar]),
   ('Lamb’s lettuce and watercress were among the lowest-cadmium leaves where they were measured (GEMS/Food lamb’s lettuce median 0–2 µg/kg; Gran Canaria 1.1 and 1.9 µg/kg).', [gems, mar]),
   ('Because the order repeats across independent European, US and Spanish datasets, this is a supported pattern for cadmium, not a single-study observation.', [])),
 P(('Lead and arsenic do not follow the cadmium order, so the lowest-cadmium leaf is not automatically lowest in everything.', [gems, mar]),
   ('Lamb’s lettuce had the highest total-arsenic median among the leaves in GEMS/Food (22–23 µg/kg) and in Gran Canaria (18.9 µg/kg), and a higher lead median (23–25 µg/kg) than lettuce or cabbage.', [gems, mar]),
   ('Iceberg lettuce was lowest for lead (2.0 µg/kg), arsenic (0.5 µg/kg) and aluminium (1,581 µg/kg) in Gran Canaria, and FDA detected lead in none of 27 iceberg or cabbage composites.', [mar, fda]),
   ('In Hong Kong, water spinach carried 74 µg/kg inorganic arsenic as eaten, against non-detects for European cabbage and lettuce, and watercress had the highest lead (96 µg/kg).', [hka, hkt])),
 P(('Origin comparisons are weaker, because GEMS/Food records the reporting region rather than where leaves were grown and the regions cover different years.', [gems]),
   ('Lead was higher in Western Pacific submissions from 2001–2009 (median about 107 µg/kg for leafy vegetables, 47–50 µg/kg for pak choi) than in European ones (4–21 and 0–10 µg/kg), while cadmium in spinach and leaf lettuce was higher in the Americas (125 and 40 µg/kg) than in Europe (40 and 18–19 µg/kg).', [gems]),
   ('These are tentative regional differences, not a supported country ranking; within single studies, the clearest lower-contamination origin is simply a site away from industry, mining, roads and contaminated water.', [li, kim, ros, kul])),
],
'processing': [
 P(('Washing removes surface deposits but not metal taken up into the leaf.', [adh, li, bora]),
   ('Washing halves of the same Johannesburg roadside purchases lowered the group mean cadmium from 51.5 to 6.8 mg/kg and nickel from 199 to 8 mg/kg dry weight, yet the washed leaves stayed above supermarket leaves for cadmium.', [adh]),
   ('A 10% vinegar soak lowered lead in market lettuce from 155 to 95 µg/kg fresh weight but left farm lettuce unchanged (73.3 against 73.1 µg/kg), consistent with removal of surface lead only.', [bora])),
 P(('Cooking acts differently on different metals and leaves.', []),
   ('Boiling in clean water removed 55–69% of the arsenic from amaranth but only 3–31% from spinach, while boiling market spinach in water containing 1,000 µg/L arsenic raised it from 0.01 to 0.75 µg/g fresh mass.', [cla]),
   ('Cooking with coconut milk or oil generally lowered the in-vitro bioaccessible fraction of nickel, cadmium, chromium and lead in Sri Lankan leaves, but not in every case, and bioaccessibility is not the total concentration.', [kan]),
   ('Frozen, canned and fermented leaves are reported separately in GEMS/Food; sauerkraut, for example, had a lead median of 13–14 µg/kg, which is not a measure of what fermentation does to a given cabbage.', [gems])),
],
'controls': [
 P(('Controls for leafy greens act mainly where the leaf grows: choosing the site, the irrigation water and the soil inputs.', [li, cla, zha]),
   ('Covering contaminated greenhouse soil with 15 cm of clean soil cut lettuce cadmium by 62% (2.57 to 0.98 mg/kg dry weight), and a biochar–alginate amendment cut it by 63% in pots and 77% in the field.', [zha, sun]),
   ('Arsenic-free irrigation water is the control that the irrigation trials support for arsenic.', [cla, san])),
 P(('After harvest, washing and testing are the levers.', []),
   ('Washing lowers surface lead, mercury and cadmium, and testing finds high lots without removing anything; the EU limits apply to the edible part after washing.', [adh, li, eu]),
   ('Most amendment evidence comes from pot or greenhouse experiments with spiked soils, so effect sizes do not transfer directly to commercial fields.', [yil, hus, she])),
],
'tradeoffs': [
 P(('Soil amendments can raise the metal they are meant to lower.', [zha, guo]),
   ('In the same greenhouse field trial that found clean-soil covering effective, corn-straw biochar raised lettuce cadmium at most application rates (by up to 44%) and attapulgite clay raised it by 24–56%.', [zha]),
   ('Wollastonite raised pak choi cadmium in three of four soils, in one case from 7.63 to 16.62 mg/kg.', [guo])),
 P(('Organic or manure-based growing is not uniformly cleaner.', []),
   ('Manures that lowered arsenic, chromium and nickel in Turkish spinach raised its lead four- to seven-fold, while farmyard manure lowered cadmium in English cabbage and lettuce without changing lead.', [kib, rem]),
   ('Organic crop protection changed only cabbage nickel in the English trial, and organic certification was associated with lower cadmium and nickel in New Zealand market-garden vegetables but not consistently across leaves.', [rem, dea])),
 P(('Choosing a leaf for low cadmium can trade off against other metals.', []),
   ('Lamb’s lettuce is low in cadmium but higher in arsenic and lead than lettuce, and watercress was low in cadmium in Gran Canaria but highest in lead in Hong Kong.', [gems, mar, hkt])),
],
'testing': [
 P(('Results are only comparable when the basis is stated.', [che, kim]),
   ('Many surveys report dry weight and then compare their values with fresh-weight limits, which overstates exceedance about ten-fold for leaves that are around 90% water.', [che, sul]),
   ('A useful report gives the leaf, fresh-weight basis, the edible part analysed, whether it was washed, and the quantification limit for each metal.', [eu, fda])),
 P(('Detection limits must sit well below the limits being checked.', [fda, gems]),
   ('FDA reported lead down to 4 µg/kg, but several surveys report values below their own stated detection limits, and those rows are held.', [fda, sul, liu]),
   ('Total arsenic is not inorganic arsenic, and inorganic mercury submitted to GEMS/Food is not total mercury; the page keeps each species separate.', [gems, hka])),
],
'procurement': [
 P(('Limits differ by market and by leaf.', [eu, cx, cn]),
   ('The EU sets 0.30 mg/kg lead for leaf vegetables (fresh herbs excluded) and 0.10 mg/kg cadmium, or 0.20 mg/kg for spinach, similar leaves and fresh herbs, and from 1 July 2025 0.50 mg/kg nickel for leafy vegetables and 1.2 mg/kg for fresh herbs.', [eu, euni]),
   ('Codex sets 0.3 mg/kg lead (the edition held in the library excludes spinach from that entry) and 0.2 mg/kg cadmium for leafy vegetables, China 0.3 mg/kg lead and 0.2 mg/kg cadmium, Korea the same values for spinach and Chinese cabbage, and Hong Kong 0.2 mg/kg cadmium.', [cx, cn, kr, hk])),
 P(('Spinach is the leaf most likely to approach a cadmium limit.', [gems, efcd]),
   ('In GEMS/Food, 105 of 2,262 spinach results were definitely above 0.20 mg/kg cadmium and 193 of 3,456 leaf lettuce results above 0.10 mg/kg, against 11 of 3,523 head cabbage results.', [gems]),
   ('Ask for lot results by leaf with the growing site and irrigation source, because most datasets identify only the market and the clearest high-contamination cases are site-specific.', [gems, li, nas])),
],
'product': [
 P(('Leafy greens are a modest but real share of dietary cadmium and lead.', [ef12, jec91]),
   ('In Europe leafy vegetables supplied 3.9% of cadmium exposure overall and 4.8–5.9% for adults and the elderly; JECFA cites national estimates of 11% in China and 20% in the USA.', [ef12, jec91]),
   ('In Guangzhou, leafy vegetables supplied 20% of dietary lead, and in Chongqing 4.9–8.9% of arsenic exposure.', [w19, dai])),
 P(('Exposure depends on how much is eaten as much as on concentration.', []),
   ('A Southern California food-frequency survey found a mean intake of 33.6 g of leafy greens a day, and JECFA estimated that leafy vegetables gave less than 5% of the tolerable cadmium intake in every GEMS/Food region it assessed in 2006.', [mas, jec64]),
   ('No source in the ledger measured metals in finished leafy products together with the leaves that went into them.', [])),
],
'assessment': [
 P(('This assessment covers every source record in the library tagged to leafy greens or naming a leafy vegetable, and every leafy-vegetable row in WHO GEMS/Food, the FDA Total Diet Study and the other indexed datasets; each item has a recorded decision based on its content.', [gems, fda]),
   ('Values from more than 30 sources that could not be reconciled with their own methods or figures are shown and held.', [sul, liu, adh])),
 P(('Remaining gaps are specific.', []),
   ('The Peruvian mining-region dataset with chard, spinach and lettuce results is held in an external repository not in the library, several papers print leaf values only as charts, and the Korean Food Code was recovered from the library volume rather than the declared file.', [bed, kr])),
],
}

headings = {'summary': 'Leafy greens overview', 'identity': 'Leafy greens and their preparations', 'occurrence': 'Heavy metal contamination profile of leafy greens',
 'pathways': 'How contamination reaches leafy greens', 'variation': 'Lower measured levels by source and type', 'processing': 'Washing, preparation and derivatives',
 'controls': 'Controls for leafy greens', 'tradeoffs': 'Trade-offs and failure modes', 'testing': 'Sampling and testing leafy greens',
 'procurement': 'Sourcing and supplier evidence', 'product': 'Finished products and dietary exposure', 'assessment': 'Evidence review and remaining questions'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Edible leaves eaten as vegetables, each leaf a separate material; leafy herbs included; seaweed, tea and medicinal leaves excluded.', gems, mar, hkt),
             A('Raw, cooked, frozen, canned, fermented and dried forms are separate; mixed foods containing leaves are excluded.', gems, fda),
             A('Fresh weight, dry weight and unstated bases are never converted into each other.', che, kim)],
'summary': [A('Cadmium is the deciding metal and spinach is consistently the highest-cadmium common leaf.', gems, fda, efcd),
            A('Lead is mostly low in monitored retail leaves; EU limits are 0.30 mg/kg Pb and 0.10–0.20 mg/kg Cd.', gems, fda, eu),
            A('Site, irrigation water and leaf type are the supported levers; lot results on fresh weight verify them.', li, cla, eu)],
'occurrence': [A('Pb, Cd, total and inorganic As, DMA, total Hg, MeHg, Ni, Cr, Al, Sn and U are reported across 98 sampling families.', gems, fda, mar, kim),
               A('Pooled HMI references use subgroup medians and sample values for the same leaf and basis.', gems, fda, kim),
               A('Non-detects are intervals; held and figure-read values are shown but not compared.', gems, sul, adh)],
'pathways': [A('Soil and irrigation water uptake, with cadmium the most mobile into leaves.', nas, cla),
             A('Atmospheric deposition near coal plants, traffic and cities adds surface metal.', li, kim, adh),
             A('Phosphate fertiliser and manures change Cd and Pb; mining areas raise Hg and Pb.', zha, rem, kib, wang21, ros)],
'variation': [A('Cadmium: head cabbage among the lowest and spinach highest in GEMS/Food and FDA; iceberg below romaine and spinach in Gran Canaria.', gems, fda, mar),
              A('Lead and arsenic: iceberg lettuce and cabbage lowest; lamb’s lettuce higher in As and Pb; water spinach high in iAs.', mar, fda, hka),
              A('Regional GEMS/Food differences are tentative; site away from industry is the clearest lower-contamination origin.', gems, li, ros)],
'processing': [A('Washing removes surface deposits (Cd, Ni, Hg) but not metal taken up by the leaf.', adh, li, bora),
               A('Boiling removed 55–69% of As from amaranth and 3–31% from spinach; As-contaminated cooking water adds arsenic.', cla),
               A('Frozen, canned and fermented leaves are reported separately without paired before-and-after measurements.', gems)],
'controls': [A('Clean-soil covering and some amendments cut lettuce Cd by 62–77% in trials.', zha, sun),
             A('Arsenic-free irrigation water and siting away from point sources are supported controls.', cla, li),
             A('Washing and lot testing act after harvest; testing does not remove contamination.', adh, eu)],
'tradeoffs': [A('Biochar, clay and wollastonite raised Cd in several trials.', zha, guo),
              A('Manures lowered As, Cr and Ni but raised Pb in spinach; organic labels are not uniformly cleaner.', kib, rem, dea),
              A('Low-Cd leaves such as lamb’s lettuce and watercress can be higher in As or Pb.', gems, mar, hkt)],
'testing': [A('State the basis; dry-weight results compared with fresh-weight limits overstate exceedance.', che, sul),
            A('Quantification limits must sit well below limits; several surveys report values below their own LOD.', fda, sul, liu),
            A('Keep total and inorganic arsenic, and total and inorganic mercury, separate.', gems, hka)],
'procurement': [A('EU, Codex, China, Korea and Hong Kong limits verified for Pb, Cd and Ni.', eu, euni, cx, cn, kr, hk),
                A('Spinach and leaf lettuce are the leaves most often above cadmium limits in GEMS/Food.', gems, efcd),
                A('Record growing site and irrigation source as well as the market.', gems, li, nas)],
'product': [A('Leafy vegetables give 3.9–5.9% of European Cd exposure; 11–20% in China and the USA.', ef12, jec91),
            A('Leafy vegetables gave 20% of dietary Pb in Guangzhou and 4.9–8.9% of As in Chongqing.', w19, dai),
            A('No paired measurement of a finished leafy product and its leaves is in the ledger.', mas)],
'assessment': [A('Every tagged or naming source record and every leafy dataset row has a content-based decision.', gems, fda),
               A('Values from more than 30 sources are held for integrity failures.', sul, liu, adh),
               A('Remaining gaps: an external Peruvian dataset and chart-only leaf values.', bed)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which leaves measured lowest in arsenic?',
  P(('In Gran Canaria supermarkets, iceberg (0.5 µg/kg) and romaine lettuce (1.6 µg/kg) had the lowest total arsenic and lamb’s lettuce the highest (18.9 µg/kg).', [mar]),
    ('In Hong Kong, inorganic arsenic was not detected in European cabbage or lettuce, while water spinach averaged 74 µg/kg.', [hka]),
    ('Near contaminated irrigation in Gazipur, the aquatic leaf helencha carried 1.85–2.02 mg/kg arsenic dry weight.', [ahm]))),
 ('Which leaves were lowest in nickel and aluminium?',
  P(('In Gran Canaria, watercress (33 µg/kg) and romaine lettuce (39 µg/kg) had the lowest nickel and spinach the highest (86 µg/kg), while aluminium ranged from 1,581 µg/kg in iceberg lettuce to 41,947 µg/kg in spinach.', [mar]),
    ('In Hong Kong, Chinese cabbage (200 µg/kg) and European cabbage and lettuce (320 µg/kg) were lowest in aluminium and Chinese spinach highest (35,000 µg/kg).', [hkt]))),
],
'testing': [
 ('Why do some studies report extreme values?',
  P(('Some extreme values do not survive a check against their own papers.', []),
    ('In a Dhaka study every detected lead value was below the method’s own detection limit, and in a Yuyao study every mustard mean was below the crop detection limits printed in the same paper.', [sul, liu]),
    ('Other high values are real but site-specific, such as unwashed roadside coriander in Johannesburg.', [adh]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals have been measured in leafy greens?',
  P(('Cadmium and lead are measured most often, and cadmium is the one most often found at levels that matter, especially in spinach.', [gems, fda]),
    ('Studies also report total and inorganic arsenic, mercury, nickel, chromium, aluminium, tin and uranium; most mercury and arsenic results in monitored retail leaves are near or below detection.', [gems, fda, mar])), 'GEMS/Food leafy extraction; FDA foods 108–411; Martín-León Tables 3 and 5'),
 ('ING-FAQ-02', 'How do heavy metals get into leafy greens?',
  P(('Through roots from soil and irrigation water, and on the leaf surface from dust and air deposition.', [nas, cla, li]),
    ('Near coal power plants, water spinach mercury fell from 86.7 µg/kg at 1 km to 23.9 µg/kg at 10 km.', [li])), 'Naser Table 3; Clair-Caliot Table 5; Li Table 2'),
 ('LG-FAQ-01', 'Can leafy greens become contaminated after harvest?',
  P(('Yes, through dust, handling and cooking water.', [adh, cla]),
    ('Leaves sold at a Johannesburg roadside carried far more cadmium unwashed than washed, and boiling spinach in arsenic-contaminated water raised its arsenic from 0.01 to 0.75 µg/g.', [adh, cla])), 'Adhikari Table 2; Clair-Caliot Table 4'),
 ('ING-FAQ-03', 'Does this evidence show that organic leafy greens are cleaner?',
  P(('Not consistently.', []),
    ('In a long-term English trial, organic crop protection changed only cabbage nickel, while farmyard manure lowered cadmium; in New Zealand, organic market-garden vegetables were lower in cadmium and nickel overall but not consistently by leaf.', [rem, dea]),
    ('Manures raised lead in Turkish spinach, so an organic label alone does not establish lower metals.', [kib])), 'Rempelos Table 10; Dearing Tables 4–6; Kibar Table 7'),
 ('ING-FAQ-04', 'Which leafy greens have the lowest cadmium?',
  P(('Head cabbage, followed by head and iceberg lettuce; lamb’s lettuce and watercress were also low where measured.', [gems, fda, mar]),
    ('Spinach was highest in every large dataset, with a GEMS/Food median of about 41 µg/kg against 2–4 µg/kg for cabbage.', [gems])), 'GEMS/Food leaf medians; FDA foods 109, 357, 406, 408; Martín-León Table 3'),
 ('LG-FAQ-02', 'Which leafy greens have the lowest lead?',
  P(('Iceberg lettuce and cabbage in monitored markets: FDA detected lead in none of 27 composites of either, and iceberg had the lowest lead median (2.0 µg/kg) in Gran Canaria.', [fda, mar]),
    ('Kale, spinach and lamb’s lettuce had higher lead medians (13–25 µg/kg) in GEMS/Food.', [gems])), 'FDA foods 109 and 406; Martín-León Table 3; GEMS/Food lead medians'),
 ('LG-FAQ-03', 'Which leafy vegetables had the lowest measured aluminium?',
  P(('Iceberg lettuce (1,581 µg/kg) in Gran Canaria and Chinese cabbage (200 µg/kg) in Hong Kong; spinach and Chinese spinach were highest.', [mar, hkt]),
    ('Aluminium varies more than twenty-fold between leaves in the same survey, so leaf type matters more than origin.', [mar])), 'Martín-León Table 5; Hong Kong TDS Appendix'),
 ('ING-FAQ-05', 'Which growing country has the lowest heavy metal levels?',
  P(('No country ranking is supported.', []),
    ('GEMS/Food reports reporting regions rather than growing countries: lead was higher in Western Pacific submissions from 2001–2009 and cadmium in spinach higher in the Americas than in Europe, but these regions cover different years.', [gems]),
    ('The clearest lower-contamination origin is a growing site away from mining, industry, roads and contaminated water.', [li, ros, kim])), 'GEMS/Food regional medians; Li Table 2; Rossini-Oliva Table 3'),
 ('ING-FAQ-07', 'Do these measurements predict my personal health risk?',
  P(('No.', []),
    ('They describe concentrations; risk depends on how much you eat, your other diet and your health.', [ef12, mas]),
    ('In Europe leafy vegetables supplied about 4–6% of adult cadmium exposure.', [ef12])), 'EFSA 2012 Tables 18–20; Masri Table 2'),
 ('LG-FAQ-04', 'Does washing remove every metal from leafy greens?',
  P(('No.', []),
    ('Washing removed most surface cadmium, nickel and mercury in roadside and power-plant studies, but a vinegar soak left lead in farm lettuce unchanged, because metal taken up into the leaf stays.', [adh, li, bora])), 'Adhikari Table 2; Li Table 4; Bora Tables 1–3'),
 ('ING-FAQ-10', 'Is total arsenic the same as inorganic arsenic?',
  P(('No.', []),
    ('Inorganic arsenic is the more toxic part; Hong Kong measured it directly and found 74 µg/kg in water spinach but none detected in European cabbage or lettuce.', [hka]),
    ('Most surveys report total arsenic only.', [gems, mar])), 'Hong Kong TDS iAs Appendix 1'),
 ('ING-FAQ-15', 'Does soaking overnight reduce metals?',
  P(('No study in the library tested an overnight water soak.', []),
    ('A 5–10 minute vinegar soak lowered surface lead in market lettuce, and boiling in clean water removed part of the arsenic from amaranth.', [bora, cla])), 'Bora Table 3; Clair-Caliot Table 2'),
 ('LG-FAQ-05', 'Can non-detects identify the cleanest type?',
  P(('Only when the detection limits are low enough.', [gems, fda]),
    ('A result below a 4 µg/kg limit says more than one below 200 µg/kg, and non-detects with different limits cannot be ranked against each other.', [fda, gems])), 'FDA reporting limits; GEMS/Food LOD fields'),
 ('LG-FAQ-06', 'Does a supermarket guarantee lower levels?',
  P(('No, though supermarket leaves were lower than roadside leaves in Johannesburg.', [adh]),
    ('Supermarket monitoring datasets still include spinach and lettuce results above EU cadmium limits.', [gems, efcd])), 'Adhikari Table 2; GEMS/Food exceedance counts'),
 ('LG-FAQ-07', 'Why are dry-weight results different from fresh-weight results?',
  P(('Because fresh leaves are about 90% water.', [che]),
    ('Removing the water concentrates the metal, so a dry-weight result is roughly ten times the fresh-weight value; limits are set on fresh weight.', [che, eu])), 'Cherfi moisture; EU 2023/915 Annex I'),
 ('ING-FAQ-14', 'Does cooking reduce metals in leafy greens?',
  P(('Sometimes, and it depends on the metal and leaf.', [cla, kan]),
    ('Boiling removed 55–69% of arsenic from amaranth but only 3–31% from spinach, and cooking with coconut milk or oil generally lowered the bioaccessible fraction of several metals.', [cla, kan])), 'Clair-Caliot Table 2; Kananke Tables 1–2'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in leafy greens?',
  P(('Yes: the EU sets 0.30 mg/kg lead and 0.10 mg/kg cadmium (0.20 mg/kg for spinach and fresh herbs), Codex 0.3 mg/kg lead and 0.2 mg/kg cadmium, and China 0.3 and 0.2 mg/kg.', [eu, cx, cn]),
    ('The EU also sets 0.50 mg/kg nickel for leafy vegetables from 1 July 2025.', [euni])), 'EU 2023/915; EU 2024/1987; CXS 193; GB 2762-2022'),
 ('LG-FAQ-08', 'Does wastewater irrigation raise metals in leafy greens?',
  P(('Yes, in the field studies that compared it.', [nas, cla]),
    ('Leaves near industrial effluent in Bangladesh carried several times the lead and cadmium of leaves from a low-pollution field, and arsenic in irrigation water raised leaf arsenic in proportion.', [nas, cla])), 'Naser Table 3; Clair-Caliot Table 5'),
 ('LG-FAQ-09', 'What should a supplier laboratory report identify?',
  P(('The leaf, the edible part analysed, whether it was washed, the fresh-weight basis, the quantification limit for each metal and the growing site.', [eu, fda]),
    ('For arsenic and mercury it should say whether totals or species were measured.', [hka, gems])), 'EU 2023/915 Annex I notes; FDA reporting limits'),
 ('ING-FAQ-13', 'Are leafy greens a major source of cadmium in the diet?',
  P(('A modest one.', [ef12, jec91]),
    ('In Europe they supplied 3.9% of cadmium exposure overall; national estimates cited by JECFA are 11% in China and 20% in the USA.', [ef12, jec91])), 'EFSA 2012 Tables 18–20; JECFA 91 section 2'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-leafy-greens-v1', 'family': 'ingredient', 'slug': 'leafy-greens', 'title': 'Leafy greens', 'display_title': 'Leafy greens', 'version': 2, 'date': '2026-10-22',
     'description': 'Cadmium, lead, arsenic, mercury and other metals in spinach, lettuce, cabbage, kale and other leafy greens: monitoring data, leaf types, growing sites, washing, limits and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Leafy greens FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As, DMA, total Hg, MeHg, Ni, Cr, Al, Sn, U as reported', 'material_form': 'Edible leaves eaten as vegetables, each named leaf separately; raw, cooked, frozen, canned, fermented and dried kept apart',
               'basis': 'Fresh weight, dry weight or unstated, never converted; µg/kg; mg/L results left unconverted', 'geography_market': 'Growing site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years where reported; unreported dates stay unknown', 'stage': 'Growing site, irrigation, soil inputs, harvest, washing, cooking, retail and lot testing',
               'population_route': 'Dietary ingestion; total diet study exposure shares', 'comparator_outcome': 'Pooled HMI leaf references; same-study control or total contrasts; paired intervention outcomes'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to leafy greens or naming a leafy vegetable, plus leafy rows in GEMS/Food, FDA TDS and other indexed datasets',
                'protocol_ref': 'data/evidence/contracts/leafy-greens/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/extraction/'],
                'screening_ref': 'data/evidence/contracts/leafy-greens/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Bedoya-Perales 2023 Figshare dataset (external repository)']},
     'source_catalogue': {'topic': 'ingredients/leafy-greens'}, 'retain_history_only': True}

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

quick = P(('Spinach carries the most cadmium of the common leafy greens and head cabbage among the least; lead is usually low in monitored retail leaves but rises sharply near mining, industry, roads and contaminated irrigation water.', [gems, fda, nas]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Cadmium decides most leafy-green questions; lead matters near pollution sources; arsenic is high in some aquatic leaves.', [gems, efcd, hka]),
 ('Main drivers', 'Leaf type, growing site and irrigation water, then surface dust that washing can remove.', [gems, li, adh]),
 ('Practical framing', 'Ask for lot cadmium and lead results by leaf on a fresh-weight basis, with the growing site.', [eu, fda])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-leafy-greens-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-06', 'status': 'covered', 'reason': 'No paired measurement of a finished leafy product and its leaves; stated in Finished products and dietary exposure. Mixed baby foods are out of scope.'},
 {'id': 'ING-FAQ-09', 'status': 'covered', 'reason': 'Answered by the washing, cooking and soaking FAQs and the Washing, preparation and derivatives section.'},
 {'id': 'ING-FAQ-11', 'status': 'covered', 'reason': 'Unwashed versus washed leaves are answered in the washing FAQ; no whole/refined fraction pair applies to leaves.'},
 {'id': 'ING-FAQ-12', 'status': 'not_applicable', 'reason': 'No commonly confused alternative with direct comparative evidence; sea lettuce (a seaweed) is out of scope.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative leafy-green serving guidance for metals in the ledger; no frequency is invented from concentrations.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitution guidance for leafy greens; occurrence data alone cannot support one.'},
 {'id': 'LG-FAQ-dropped', 'status': 'covered', 'reason': 'Earlier questions "Are unwashed leaves higher than washed leaves?", "Is a stronger vinegar wash always better?" and "Does washing affect other elements too?" are consolidated into the washing FAQ and the Washing section.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
import re
def meta(sid):
    """Label and link from the shared source record itself (never typed by hand)."""
    t = (root / f'wiki/sources/{sid}.md').read_text()
    fm = t.split('---', 2)[1]
    get = lambda k: (re.search(rf'^{k}:\s*(.+)$', fm, re.M) or [None, None])[1]
    doi = (get('doi') or '').strip().strip('"\'')
    url = f'https://doi.org/{doi}' if doi and doi.lower() not in ('null', 'none', '') else (get('access_url') or get('url') or '').strip().strip('"\'') or f'../sources/{sid}'
    if url in ('null', 'None'): url = f'../sources/{sid}'
    labels = json.loads((audit / 'source-labels.json').read_text())['labels']
    m = re.search(r'^authors:\s*\[(.*)\]', fm, re.M)
    n_auth = len(m.group(1).split(',')) if m else 1
    k = re.match(r'^([a-z][a-z-]*?)-?((?:19|20)\d{2})', sid)
    label = labels.get(sid) or (f"{'-'.join(w.capitalize() for w in k.group(1).split('-'))}{' et al.' if n_auth > 1 else ''} {k.group(2)}" if k else sid)
    return url, label
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, audiences=('supplier', 'brand')):
    url, label = meta(sid)
    if sid == eu: label = 'Regulation (EU) 2023/915'
    return {'id': f'leafy-greens-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/leafy-greens.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Leafy greens', 'audiences': list(audiences),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Effects on other metals, yield and cost are given where the source reports them.',
            'verification_summary': 'Confirm with lot results by leaf on a fresh-weight basis with an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': {'observational': 'Observational field or market comparison', 'measured': 'Measured paired comparison or trial', 'guidance': 'Regulatory or author guidance'}.get(kind, 'Context'),
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or remaining in the edible leaf, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Basis as stated in each outcome; no conversion.',
            'other_contaminants': 'As reported in outcomes.', 'nutrition_quality_yield': 'Not assessed unless stated.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'commercial-scale effect', 'next_action': 'Most evidence is from single sites or pot trials; keep effects source-scoped.'}], 'review': {'record_ref': 'data/evidence/contracts/leafy-greens/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis, unit='µg/kg'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': unit, 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported values; see the evidence drawer for design.'}
DW, FW = 'Dry weight', 'Fresh weight'
controls = [
 control(1, li, 'Li et al. 2017', 'https://doi.org/10.3390/ijerph14091061', 'cultivation', 'Grow leaves away from coal-fired power plants', 'observational', 'Lettuce, amaranth and water spinach, Guizhou, China',
   'Leaf mercury fell with distance from two coal-fired power plants, from 86.7 µg/kg at 1 km to 23.9 µg/kg at 10 km in water spinach; grocery-store leaves from more than 55 km away were below 1 µg/kg.',
   'Farms at 1, 3, 5 and 10 km from the plants and grocery-store produce.',
   [out('tHg', 'lower', 86.69, 23.88, 'Lower mercury farther from the plant (observational)', 'Water spinach mean total mercury', '1 km versus 10 km', 'Table 2', FW),
    out('tHg', 'lower', 39.04, 7.23, 'Lower mercury farther from the plant (observational)', 'Lettuce mean total mercury', '1 km versus 10 km', 'Table 2', FW)],
   'Areas with point-source air emissions.', 'Observational; distance is confounded with soil mercury.', 'Field survey'),
 control(2, cla, 'Clair-Caliot et al. 2021', 'https://doi.org/10.1021/acsestwater.1c00031', 'cultivation', 'Irrigate with arsenic-free water', 'measured', 'Spinach, lettuce and amaranth, greenhouse trial, Burkina Faso',
   'Leaf arsenic rose roughly in proportion to irrigation-water arsenic; at 500 µg/L spinach reached 6.57 µg/g dry matter against 1.05 µg/g with arsenic-free water.',
   'Arsenic-free irrigation versus water spiked to 100, 500 and 1,000 µg/L arsenic(V), same soil.',
   [out('tAs', 'higher', 1050, 6570, 'Higher arsenic with contaminated irrigation water', 'Spinach leaf total arsenic', '0 versus 500 µg/L irrigation arsenic', 'Table 5', DW),
    out('tAs', 'higher', 120, 2230, 'Higher arsenic with contaminated irrigation water', 'Amaranth leaf total arsenic', '0 versus 500 µg/L irrigation arsenic', 'Table 5', DW)],
   'Areas with arsenic-bearing groundwater.', 'Greenhouse experiment; control-plant values differ between the paper’s tables.', 'Greenhouse trial'),
 control(3, zha, 'Zhang et al. 2024', 'https://doi.org/10.3390/agronomy14040776', 'soil remediation', 'Cover contaminated soil with clean soil', 'measured', 'Lettuce, greenhouse field trial on cadmium-enriched soil, China',
   'A 15 cm layer of uncontaminated soil cut lettuce cadmium by 62%; deep ploughing to 30–50 cm cut it by 11–28%.',
   'Covered or ploughed plots versus untreated plots in the same greenhouse.',
   [out('Cd', 'lower', 2570, 980, 'Lower cadmium with a clean-soil cover', 'Lettuce cadmium', 'Untreated versus 15 cm cover', 'Figure 1', DW),
    out('Cd', 'lower', 2570, 1840, 'Lower cadmium with deep ploughing', 'Lettuce cadmium', 'Untreated versus 40 cm ploughing', 'Figure 1', DW)],
   'Protected cultivation on naturally cadmium-enriched soil.', 'One greenhouse; the abstract and figure give different values (figure used).', 'Field trial'),
 control(4, zha, 'Zhang et al. 2024', 'https://doi.org/10.3390/agronomy14040776', 'cultivation', 'Limit phosphate fertiliser on cadmium-prone soil', 'measured', 'Lettuce, greenhouse field trial, China',
   'All three phosphate fertilisers raised lettuce cadmium, by up to 91% at the highest superphosphate rate.',
   'Fertilised versus unfertilised plots.',
   [out('Cd', 'higher', 990, 1890, 'Higher cadmium with superphosphate', 'Lettuce cadmium', 'No phosphate versus 225 kg/ha P2O5 superphosphate', 'Figure 2', DW)],
   'Phosphate-fertilised leafy crops.', 'One site; untreated means differ between experiments.', 'Field trial'),
 control(5, rem, 'Rempelos et al. 2023', 'https://doi.org/10.3390/foods12010087', 'cultivation', 'Use farmyard manure rather than mineral NPK', 'measured', 'White cabbage and iceberg lettuce, long-term factorial trial, England',
   'Farmyard manure gave lower cadmium in cabbage and lettuce and lower nickel in cabbage than mineral fertiliser at the same nitrogen input; lead was unaffected.',
   'Mineral NPK versus farmyard manure, main-effect means over six seasons.',
   [out('Cd', 'lower', 14.2, 11.4, 'Lower cadmium with manure', 'Lettuce cadmium', 'NPK versus manure', 'Table 10', FW),
    out('Cd', 'lower', 5.4, 4.6, 'Lower cadmium with manure', 'Cabbage cadmium', 'NPK versus manure', 'Table 10', FW),
    out('Ni', 'lower', 23, 17, 'Lower nickel with manure', 'Cabbage nickel', 'NPK versus manure', 'Table 10', FW),
    out('Pb', 'higher', 8.0, 9.3, 'Slightly higher, not significant', 'Lettuce lead', 'NPK versus manure', 'Table 10', FW)],
   'Temperate field vegetables.', 'One trial site; per-mean sample counts not stated.', 'Field trial'),
 control(6, kib, 'Kibar and Yaman Türkkan 2022', 'https://doi.org/10.15832/ankutbd.873089', 'cultivation', 'Check manures for lead before use', 'measured', 'Spinach, open-field trial, Bolu, Turkey',
   'Chicken, sheep and cattle manure and vermicompost raised spinach lead four- to seven-fold while lowering arsenic, chromium and nickel.',
   'Unfertilised control plots versus each fertiliser.',
   [out('Pb', 'higher', 110, 750, 'Higher lead with chicken manure', 'Spinach lead', 'Control versus chicken manure', 'Table 7', 'Basis not stated'),
    out('tAs', 'lower', 410, 350, 'Lower arsenic with chicken manure', 'Spinach arsenic', 'Control versus chicken manure', 'Table 7', 'Basis not stated')],
   'Manure-fertilised leafy crops.', 'One season; basis not stated; no detection limits reported.', 'Field trial'),
 control(7, sun, 'Sun et al. 2025', 'https://doi.org/10.3390/agronomy15010019', 'soil remediation', 'Immobilise soil cadmium with a biochar–alginate composite', 'measured', 'Lettuce on cadmium-polluted paddy soil, pot and field, China',
   'The amendment cut lettuce cadmium by 63% in pots and 77% in the field.',
   'Amended versus unamended soil.',
   [out('Cd', 'lower', None, None, 'Lower cadmium (63–77%)', 'Lettuce cadmium', 'Unamended versus amended', 'Abstract; Figure 5', 'Basis not stated')],
   'Cadmium-polluted soils.', 'Values shown only in a figure; percentages from the abstract.', 'Pot and field trial'),
 control(8, guo, 'Guo et al. 2024', 'https://doi.org/10.1016/j.ecoenv.2024.116196', 'soil remediation', 'Test immobilising amendments before relying on them', 'measured', 'Pak choi, pot trial at four soil cadmium levels',
   'Wollastonite-based amendments raised soil pH but increased pak choi cadmium in most soils.',
   'Amended versus untreated soil at the same cadmium level.',
   [out('Cd', 'higher', 7630, 16620, 'Higher cadmium with wollastonite', 'Pak choi cadmium', 'Untreated versus wollastonite, moderate soil', 'Table 4', DW)],
   'Any soil amendment programme.', 'Pot experiment.', 'Pot trial'),
 control(9, adh, 'Adhikari and Struwig 2024', 'https://doi.org/10.1016/j.heliyon.2024.e31206', 'food preparation', 'Wash leaves thoroughly under running water', 'measured', 'Five leafy vegetables, roadside markets, Johannesburg',
   'Washing halves of the same roadside purchases lowered the group mean cadmium from 51.5 to 6.8 mg/kg and nickel from 199 to 8 mg/kg dry weight; washed roadside leaves stayed above supermarket leaves for cadmium.',
   'Unwashed versus washed halves of one composite.',
   [out('Cd', 'lower', 51470, 6840, 'Lower cadmium after washing', 'Group mean cadmium', 'Unwashed versus washed', 'Table 2', DW),
    out('Ni', 'lower', 198710, 8000, 'Lower nickel after washing', 'Group mean nickel', 'Unwashed versus washed', 'Table 2', DW)],
   'Leaves exposed to traffic dust.', 'Single composites; some leaf–metal pairs rose after washing.', 'Market survey', ('supplier', 'brand', 'consumer')),
 control(10, li, 'Li et al. 2017', 'https://doi.org/10.3390/ijerph14091061', 'home preparation', 'Rinse leaves before eating', 'measured', 'Lettuce and amaranth near coal power plants',
   'Rinsing lowered leaf mercury by 19–63%.',
   'Unwashed versus rinsed leaves from the same site.',
   [out('tHg', 'lower', 35.7, 21.03, 'Lower mercury after rinsing', 'Lettuce total mercury', 'Unwashed versus washed, 1 km site', 'Table 4', FW)],
   'Leaves with deposited dust or fly ash.', 'Removes surface mercury only.', 'Field survey', ('consumer', 'supplier')),
 control(11, bora, 'Bora et al. 2022', 'https://doi.org/10.3390/horticulturae8090775', 'home preparation', 'Vinegar soak after washing', 'measured', 'Lettuce and cabbage, Galați, Romania',
   'A 10% vinegar soak lowered market-lettuce lead from 155 to 95 µg/kg and cadmium from 46.9 to 36.2 µg/kg, but left farm lettuce lead unchanged.',
   'Tap-water washing versus vinegar soak.',
   [out('Pb', 'lower', 155.07, 94.52, 'Lower lead after vinegar soak', 'Market lettuce lead', 'Tap water versus 10% vinegar', 'Tables 1 and 3', FW),
    out('Pb', 'lower', 73.25, 73.14, 'Essentially unchanged', 'Farm lettuce lead', 'Tap water versus 10% vinegar', 'Tables 1 and 3', FW)],
   'Household or commercial washing.', 'Analytical replicates; lot identity across treatments not stated.', 'Laboratory test', ('consumer',)),
 control(12, cla, 'Clair-Caliot et al. 2021', 'https://doi.org/10.1021/acsestwater.1c00031', 'home preparation', 'Boil leaves in arsenic-free water', 'measured', 'Amaranth and spinach',
   'Boiling in excess clean water removed 55–69% of arsenic from amaranth but 3–31% from spinach; arsenic-contaminated cooking water added arsenic.',
   'Raw versus boiled leaves; clean versus contaminated cooking water.',
   [out('tAs', 'lower', 2230, 1010, 'Lower arsenic after boiling', 'Amaranth total arsenic', 'Raw versus boiled', 'Table 2', DW),
    out('tAs', 'higher', 10, 750, 'Higher arsenic with contaminated cooking water', 'Market spinach total arsenic', 'Clean versus 1,000 µg/L cooking water', 'Table 4', FW)],
   'Arsenic-affected areas.', 'Greenhouse-grown leaves.', 'Laboratory test', ('consumer',)),
 control(13, eu, 'Regulation (EU) 2023/915', 'https://eur-lex.europa.eu/eli/reg/2023/915/oj', 'lot acceptance and release', 'Test lots against leaf-specific limits', 'guidance', 'Leaf vegetables and leafy brassica (EU)',
   'Lead 0.30 mg/kg and cadmium 0.10 mg/kg (0.20 mg/kg for spinach, similar leaves and fresh herbs), wet weight, after washing and separating the edible part.',
   'Regulatory maximum levels.',
   [out('Cd', 'context', None, None, 'Limit 0.10–0.20 mg/kg', 'Cadmium maximum level', 'Leaf vegetables; spinach', 'Annex I 3.2.6', FW),
    out('Pb', 'context', None, None, 'Limit 0.30 mg/kg', 'Lead maximum level', 'Leaf vegetables', 'Annex I 3.1.6', FW)],
   'Leaves placed on the EU market.', 'A limit detects non-compliant lots; it does not lower contamination.', 'Regulation'),
 control(14, adh, 'Adhikari and Struwig 2024', 'https://doi.org/10.1016/j.heliyon.2024.e31206', 'sourcing and procurement', 'Buy from controlled supply rather than roadside stalls', 'observational', 'Five leafy vegetables, Johannesburg',
   'Washed roadside leaves still carried more cadmium (6.84 mg/kg) than leaves from large stores (2.10–2.50 mg/kg dry weight).',
   'Roadside versus supermarket and vegetable-market purchases.',
   [out('Cd', 'lower', 6840, 2500, 'Lower cadmium in large-store leaves (observational)', 'Group mean cadmium', 'Washed roadside versus supermarket', 'Table 2', DW)],
   'Urban retail sourcing.', 'Observational; growing sites not identified.', 'Market survey'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
