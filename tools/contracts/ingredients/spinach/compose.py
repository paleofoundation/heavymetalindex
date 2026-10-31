"""Compose the spinach synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the primary-text extraction
records (leafy-greens audit directory, read only), to this page's own WHO GEMS/Food and FDA
TDS spinach extraction (prepare-datasets.py) and to HMI calculations over those records,
which are reproduced in the comments beside the sentences that use them.
"""
import json, pathlib, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach'
leafy = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'

gems = 'who-gemsfood-heavy-metal-contaminants'; fda = 'fda2022-tds-elements-fy2018-fy2020'; efcd = 'efsa-cadmium-contam-2009'
eu = 'eu-2023-915-contaminants-maximum-levels'; euni = 'eu-2024-1987-nickel-maximum-levels'; cx = 'codex-cxs-193-1995'
cn = 'usda-fas2023-china-gb-2762-2022-translation'; kr = 'mfds2012-food-code-heavy-metals'; hk = 'cfs2019-hk-metallic-contamination-guidelines'
mar = 'martin-leon2023-canary-leafy-vegetables-elements'; see = 'see2025-malaysia-leafy-vegetables-icp-oes'; hkt = 'cfs2013-hktds-metallic-contaminants'; hka = 'cfs2012-hktds-inorganic-arsenic'
nas = 'naser2018-leafy-vegetables-bangladesh-metals'; kul = 'chemistry2022-bio-accumulation-of-heavy-metals-in-some-north'; kib = 'authors2022-compared-to-the-chemical-fertilizer-in-organic-fertilizer'
cla = 'clair-caliot2021-arsenic-irrigated-vegetables-burkina'; hus = 'hussain2016-spinach-cadmium-zinc'; she = 'sheikh2025-spinach-biochar-cadmium'
crs = 'authors2022-chromium-through-cr-stressed-life-sciences-faculty-of'; sen = 'authors2026-muhammad-shoaib-rana-gel-alleviates-chromium'; sey = 'seyfferth2024-spinach-cd-pb-review'
jia = 'jiang2020-henan-battery-factory-crops-metals'; abu = 'abubakar2025-faisalabad-sewage-vegetables'; sha_ = 'sharma2016-spinach-wastewater-metals'; sul = 'sultana2022-dhaka-root-leafy-vegetables'
sad = 'sadee2022-erbil-vegetables'; sal = 'saleem2025-nd-vegetables-hra'; elb = 'elbagermi2012-misurata-fruits-vegetables-metals'; che = 'cherfi2014-algeria-fruits-vegetables-metals'
pan = 'pan2016-zhejiang-vegetables-metals'; hua = 'huang2014-zhejiang-vegetables-heavy-metals'; kur = 'kurniawati2021-jakarta-staple-foods-naa'; ush = 'us-house-subcommittee2021-baby-foods-tainted-heavy-metals'
alt = 'altunay2023-cadmium-food-turkey'; jos = 'joseph2025-gobbiya-dam-vegetable-metals'; gha = 'ghasemidehkordi2018-markazi-vegetables-pb-hg'; pal = 'pal2017-wastewater-vegetables-heavy-metals'
moh = 'mohod2015-spinach-tomato-metals'; hab = 'authors2025-ecological-risk-and-bioaccumulation-of-heavy-metals-in'; sule = 'authors2025-assessment-of-heavy-metal-contamination-in-soils-and'
abd = 'abdolahpour2023-heavy-metals-babol-vegetables'; emm = 'emmanuel2025-kano-urban-vegetables-metals'; imo = 'imongben2026-kaduna-vegetables-hra'
fly = 'flyvholm1984-nickel-content-food-dietary-intake'; zem = 'zemanova2015-spinach-cadmium-amino-fatty-acids'; bed = 'bedoya-perales2023-moquegua-peru-mining-dataset'
bar = 'barber2025-baby-food-elements-us'; adb = 'adebayo2020-wastewater-irrigated-spinach'; hos = 'hossain2016-bangladesh-vegetables-pb-cd-cr'; ahm19 = 'ahmed2019-irrigation-water-bangladesh-seasonal'
ull = 'ullah2022-khyber-vegetables-metals'

def P(*sentences):
    """Join (sentence, sources) pairs; each cited sentence gets its own placement."""
    text = ' '.join(s for s, _ in sentences)
    keys = []
    for _, src in sentences:
        for k in src:
            if k not in keys: keys.append(k)
    spans = [{'after': s, 'source_keys': src} for s, src in sentences if src]
    return {'text': text, 'source_keys': keys, 'citation_spans': spans} if keys else {'text': text, 'source_keys': []}

# HMI calculations over this page's GEMS/Food spinach records (primary/gemsfood-spinach-records.csv):
#  raw fresh-weight Cd: 105 of 2,262 records with a lower bound above 200 µg/kg; frozen 48 of 773; cooked 11 of 105.
#  raw fresh-weight Pb: 23 of 2,111 records above 300 µg/kg.
#  raw fresh-weight Cd by FoodOrigin: domestic median 50 µg/kg (n 688), imported 49 (n 341).
#  EURO random-sampling Cd: 2000–2009 median 26 (n 1,181), 2010–2019 median 51 (n 896).
# FDA TDS FY2018–FY2020 raw spinach: Cd above 200 µg/kg in 10 of 27 composites; Pb above 10 µg/kg in 4 of 27.

# ------------------------------------------------------------------ visible prose
prose = {
'summary': [
 P(('Cadmium is the metal that decides most spinach questions.', [gems, fda, efcd]),
   ('Spinach takes cadmium up from soil and moves it into the leaf, and the large monitoring datasets agree that ordinary retail spinach carries tens to a few hundred micrograms per kilogram on a fresh-weight basis: a median of 40 µg/kg across 2,077 randomly sampled European submissions to WHO GEMS/Food, 125 µg/kg in submissions from the Americas and 200 µg/kg in US Total Diet Study composites from 2018 to 2020.', [gems, fda]),
   ('EU monitoring from 2003 to 2007 summarised by EFSA gave a median of 50 µg/kg and a mean of 61.5 µg/kg, against 23.1 µg/kg for other leafy vegetables.', [efcd]),
   ('Against the EU maximum of 0.20 mg/kg for spinach, 105 of 2,262 raw spinach results in GEMS/Food and 10 of 27 US market composites were above the limit.', [eu, gems, fda])),
 P(('Lead, arsenic and mercury are usually low in monitored retail spinach.', [gems, fda, mar]),
   ('US composites had a lead median of 6.2 µg/kg and a total-arsenic median of 5.9 µg/kg, and mercury was detected in 3 of 27; European and Canary Islands supermarket spinach showed the same picture, with lead medians of 13–22 µg/kg and mercury mostly below detection.', [fda, gems, mar]),
   ('Spinach is, however, rich in aluminium, around 41,000 µg/kg in Canary Islands and Malaysian market samples.', [mar, see])),
 P(('The highest values in the library come from fields irrigated with sewage or industrial wastewater and from sites near a battery factory or industrial zones, where spinach carried several milligrams of cadmium, lead or nickel per kilogram.', [jia, abu, nas]),
   ('Many of those studies report dry weight or do not state the basis, so they cannot be ranked against fresh-weight market data, but within single studies the polluted fields were consistently higher than cleaner comparison fields.', [nas, kul, sey]),
   ('For a buyer the supported priorities are the growing site and its irrigation water, then lot results for cadmium and lead on a fresh-weight basis; packaging form (fresh, frozen or canned) does not reliably change cadmium.', [nas, gems, eu])),
],
'identity': [
 P(('This page covers spinach, Spinacia oleracea: raw leaves, baby spinach, cooked, frozen and canned spinach and spinach purée used as an ingredient, each kept as its own material.', [gems, fda, ush]),
   ('Several plants are also sold as spinach but are different species: amaranth (African, red or Chinese spinach), water spinach (Ipomoea aquatica) and Malabar or Indian spinach (Basella).', [adb, hos, hkt]),
   ('Results for those plants, including the GEMS/Food submissions filed under the spinach code whose local names show water spinach, Chinese spinach or a mustard-green dish, are not counted here.', [gems])),
 P(('The basis of a result matters as much as the form.', []),
   ('Fresh spinach is about 93% water, so a dry-weight concentration is roughly 14 times the fresh-weight value for the same leaves; the page never converts between the two, and results whose basis is not stated stay separate.', [sey]),
   ('Some field studies from Nigeria and South Asia name the crop only as spinach; where a paper identifies the plant as an amaranth it is excluded, and the remaining reports are taken at their word.', [fatai := 'fatai2024-african-spinach-tomato-nigeria', adb, sha_]),
   ('Mixed baby foods, creamed spinach, spinach tortillas and snacks that contain spinach are outside this scope, because their results cannot be attributed to the leaf.', [gems, fda, bar])),
],
'occurrence': [
 P(('The table holds every spinach result extracted from 37 sampling families: WHO GEMS/Food submissions summarised by WHO region, form and sampling type, the US and Hong Kong total diet studies, EU monitoring summarised by EFSA, and every market, farm, wastewater-site and field-trial study in the library.', [gems, fda, hkt, efcd, mar]),
   ('Each row is one statistic for one form, group and metal on its stated basis; ratings place a mean, median or sample value against a pooled reference for the same form and basis built from retail, monitoring and ordinary farm samples.', [gems, fda, sul])),
 P(('Retail cadmium spans about one order of magnitude.', [gems, fda, mar]),
   ('In GEMS/Food the middle half of randomly sampled European raw spinach lay between about 10 and 79 µg/kg, against 65–281 µg/kg for the Americas; US composites ranged from 100 to 400 µg/kg, and Gran Canaria supermarket spinach had a median of 21.5 µg/kg.', [gems, fda, mar]),
   ('Lead was below reporting limits in about a third of European results, and the US composites ranged from below 4 to 18 µg/kg.', [gems, fda])),
 P(('Non-detects stay as intervals from zero to the reporting limit and are never read as zero.', [gems, fda]),
   ('Fourteen rows that fail a check against their own paper, for example lead values below the paper’s own detection limit in a Dhaka market study and a cadmium standard deviation eleven times its mean in an Iranian field study, are shown with the reason and not compared.', [sul, abd, alt]),
   ('Values read from a figure rather than printed are labelled and not compared.', [sha_, pal, hua])),
],
'pathways': [
 P(('Spinach takes cadmium up through its roots and moves it readily to the leaves, while lead binds strongly in soil and moves little into leaves, so leaf lead mostly reflects soil or dust on the surface.', [sey]),
   ('Chloride in soil or irrigation water makes cadmium more mobile and available to the plant, and older leaves accumulate more cadmium than young leaves because uptake follows transpiration.', [sey])),
 P(('Irrigation water and industrial pollution raise every metal.', [nas, cla]),
   ('In Gazipur, Bangladesh, spinach from a field irrigated with heavily polluted river water carried 1,020 µg/kg cadmium, 5,970 µg/kg lead and 31,900 µg/kg nickel dry weight, against 430, 1,160 and 5,480 µg/kg on a non-industrial research field.', [nas]),
   ('In a greenhouse trial, irrigating with water containing 500 µg/L arsenic raised spinach leaf arsenic from 1.05 to 6.57 µg/g dry matter.', [cla]),
   ('Near a battery factory in Henan, village spinach carried 5,040 µg/kg cadmium and 1,930 µg/kg lead, and sewage-irrigated spinach in Faisalabad 3,580 and 6,130 µg/kg (basis not stated in either).', [jia, abu])),
 P(('Fertiliser and manure choices change lead and arsenic more than cadmium.', [kib]),
   ('In a Turkish open-field trial, chicken, sheep and cattle manure and vermicompost raised spinach lead from 110 to 500–750 µg/kg, while cadmium stayed between 400 and 530 µg/kg in every treatment and arsenic, nickel and chromium fell below the unfertilised control.', [kib]),
   ('Spiking pot soil with 3 mg/kg cadmium raised spinach leaf cadmium from 0.01 to 3.29 mg/kg dry weight, showing how directly soil cadmium transfers to the leaf.', [hus])),
],
'variation': [
 P(('For cadmium, the clearest lower-contamination choice is a growing site away from polluted irrigation water and industry, because that is the only difference measured within the same studies.', [nas, kul]),
   ('A non-industrial field in Gazipur gave 430 µg/kg dry weight against 1,020 µg/kg beside a polluted river, and a walled garden in Dehradun watered from a tube well and rain gave 260 µg/kg against 470 µg/kg in market spinach grown with mixed and partly wastewater irrigation.', [nas, kul]),
   ('Across monitoring datasets, the lowest observed retail cadmium was in Europe and the Canary Islands (GEMS/Food European median 40 µg/kg, Gran Canaria 21.5 µg/kg, a single Malaysian wholesale lot below 4 µg/kg), with the Americas (125 µg/kg) and US composites (200 µg/kg) higher.', [gems, mar, see, fda]),
   ('These are purchase markets, not growing origins, and the periods differ, so they are tentative regional patterns rather than a supported country ranking.', [gems, fda])),
 P(('A 2024 review of US data supports part of that pattern: spinach sampled in the 1980s, mostly from lower-cadmium soils, would all have met a 0.20 mg/kg limit, while 40–50% of recent California and Arizona samples would not.', [sey]),
   ('Within GEMS/Food, domestic and imported spinach had the same cadmium median (50 and 49 µg/kg), so the domestic-or-imported label alone does not identify lower-cadmium supply.', [gems]),
   ('The review also reports that baby spinach had lower cadmium than the later bunching crop in a New Zealand field study; the library holds that comparison only as reported in the review, and GEMS/Food holds a single baby-spinach result, a lead non-detect below 5 µg/kg.', [sey, gems])),
 P(('For lead, nickel and chromium the same site contrast holds, and the size of the gap is larger than for cadmium.', [nas, kul]),
   ('Lead fell from 5,970 to 1,160 µg/kg and nickel from 31,900 to 5,480 µg/kg between the polluted and non-industrial Gazipur fields, and lead from 2,740 to 1,260 µg/kg and chromium from 2,710 to 1,090 µg/kg between Dehradun market spinach and the walled garden.', [nas, kul]),
   ('In retail data lead was lowest, apart from one Malaysian lot below 4 µg/kg, in US composites (median 6.2 µg/kg) and Americas submissions (10 µg/kg), with Europe at 14–22 µg/kg; total arsenic was low everywhere it was measured (US 5.9, Gran Canaria 8 and Western Pacific 7.45 µg/kg).', [fda, gems, mar]),
   ('No study in the library compares field-grown with greenhouse or hydroponic spinach for any metal, so no growing-system preference can be stated; organic spinach appears in only two GEMS/Food cadmium results, too few to compare.', [gems])),
],
'processing': [
 P(('Freezing, cooking and canning did not lower cadmium in the monitoring data.', [gems]),
   ('In randomly sampled European GEMS/Food submissions, frozen spinach had a cadmium median of 71 µg/kg and cooked spinach 66 µg/kg, against 40 µg/kg for raw; in the Americas cooked spinach (116 µg/kg) was close to raw (125 µg/kg).', [gems]),
   ('These are different samples, not paired before-and-after measurements, so the differences cannot be read as an effect of processing; cooking does drive off water, which concentrates cadmium per kilogram of cooked leaf.', [gems, sey])),
 P(('Washing removes soil and dust but little of the cadmium inside the leaf.', [sey]),
   ('The 2024 review estimates that leaf washing lowers spinach cadmium by only about 8–15%, compared with 20–80% for zinc amendment of soil.', [sey]),
   ('Boiling in clean water removed 3–31% of the arsenic from greenhouse spinach, but boiling market spinach in water containing 1,000 µg/L arsenic raised it from 0.01 to 0.75 µg/g fresh mass, so the cooking water itself can add arsenic.', [cla])),
 P(('Spinach purée and canned spinach behave as concentrated or prepared forms.', [ush, gems]),
   ('Cadmium in spinach purée tested by a US baby-food manufacturer before use (143 µg/kg) was in the same range as its fresh spinach lots (101–142 µg/kg), and canned spinach in the Americas had a lead median of 8.5 µg/kg.', [ush, gems]),
   ('The library holds no paired measurement of a spinach purée or canned product and the leaves that went into it.', [])),
],
'controls': [
 P(('Controls for spinach act mainly where it grows: choosing the field, the irrigation water and the soil inputs.', [nas, cla, sey]),
   ('In pot trials, zinc added to cadmium-spiked soil at 300 mg/kg lowered spinach leaf cadmium from 3.29 to 1.96 mg/kg dry weight, while 30 mg/kg had no effect, and acidified biochar at 1.2% lowered shoot cadmium by 33–59%.', [hus, she]),
   ('The 2024 review rates lime with zinc and limiting chloride inputs as the most effective field measures, at about 60% and 40% cadmium reduction, and cultivar choice at 0–50%.', [sey])),
 P(('For lead and arsenic the controls are site and water rather than amendments.', [kib, cla]),
   ('Avoiding lead-bearing manures matters, because manures raised spinach lead four- to sevenfold in an open-field trial, and arsenic-free irrigation and cooking water are the controls the Burkina Faso trials support for arsenic.', [kib, cla]),
   ('After harvest, lot testing against the spinach limits detects high lots but does not lower contamination.', [eu])),
],
'tradeoffs': [
 P(('Measures that lower one metal can raise another.', [kib]),
   ('The manures that lowered arsenic, nickel and chromium in Turkish spinach raised its lead, and vermicompost, the only treatment that lowered cadmium slightly (400 against 430 µg/kg), raised lead to 540 µg/kg.', [kib]),
   ('Zinc at the effective rate also cut spinach shoot growth by about 17% in the pot trial.', [hus])),
 P(('Pot-trial effects do not transfer directly to commercial fields.', [hus, she, crs]),
   ('The zinc, biochar and chromium-stress trials used spiked or contaminated soils in pots, and several read their spinach results only from charts, so their percentage effects describe those conditions.', [hus, she, crs, sen]),
   ('Spinach also contains oxalate, which the 2024 review notes may bind cadmium in the leaf and affect how much is absorbed when eaten; that effect on exposure has not been measured.', [sey])),
],
'testing': [
 P(('A spinach result is only comparable when the basis is stated.', []),
   ('Many field studies report dry weight, which is about 14 times the fresh-weight value, and then compare it with fresh-weight limits, overstating exceedance; the EU limits apply to wet weight after washing and separating the edible part.', [sey, eu]),
   ('A useful report gives the form (raw, baby, frozen, cooked or purée), fresh-weight basis, whether it was washed, the growing site and the quantification limit for each metal.', [eu, fda])),
 P(('Reporting limits must sit well below the decision level.', [fda, gems]),
   ('US composites reported lead down to 4 µg/kg and cadmium to 1 µg/kg, while several surveys print values below their own detection limits, and one Pakistani study reports mercury after open digestion at 200 °C, conditions that lose mercury; those rows are held.', [fda, sul, abu]),
   ('Total arsenic is not inorganic arsenic, and inorganic mercury submitted to GEMS/Food is not total mercury; the page keeps each species separate.', [gems, hka])),
],
'procurement': [
 P(('Spinach has its own cadmium limit in several markets.', [eu, kr, hk]),
   ('The EU sets 0.20 mg/kg cadmium for spinach and similar leaves, double the 0.10 mg/kg for other leaf vegetables, 0.30 mg/kg lead for leaf vegetables and, from 1 July 2025, 0.50 mg/kg nickel for leafy vegetables, all on wet weight.', [eu, euni]),
   ('Korea sets 0.3 mg/kg lead and 0.2 mg/kg cadmium for spinach, China 0.3 mg/kg lead and 0.2 mg/kg cadmium for leafy vegetables, and Hong Kong 0.2 mg/kg cadmium for leafy vegetables; the Codex 0.3 mg/kg lead level for leafy vegetables in the edition held in the library excludes spinach.', [kr, cn, hk, cx])),
 P(('Cadmium is the result most likely to approach a limit.', [gems, efcd, fda]),
   ('In GEMS/Food, 105 of 2,262 raw, 48 of 773 frozen and 11 of 105 cooked spinach results were above 0.20 mg/kg cadmium, against 23 of 2,111 raw results above 0.30 mg/kg lead; EFSA counted 34 of 867 (3.9%) EU spinach samples above the cadmium limit.', [gems, efcd]),
   ('Ask for lot cadmium and lead on a fresh-weight basis with the growing region and irrigation source, because most datasets identify only the market and the clearest high-contamination cases are site-specific.', [gems, nas, sey])),
],
'product': [
 P(('Spinach is a measurable contributor to cadmium and nickel intake for people who eat it often.', [fly, sey]),
   ('In a Danish average-diet estimate spinach supplied about 1.04 µg of nickel a day from a literature mean of 0.52 mg/kg, with the highest nickel load factor of the vegetables listed.', [fly]),
   ('The 2024 review cites baby-food testing in which products containing leafy greens such as kale and spinach tended to contain more cadmium, and an FDA survey of baby foods found that 18 of 20 purées and mixtures above its cadmium 95th percentile listed tomato, spinach or carrot among their ingredients.', [sey, bar])),
 P(('Exposure depends on how much is eaten and in what form.', [sey, fda]),
   ('Raw spinach is mostly water, so a cooked portion that has lost water carries more cadmium per gram than the same leaves raw.', [sey]),
   ('No source in the library measured metals in a finished spinach product together with the spinach that went into it, so finished-product concentrations cannot be inferred from the leaf values here.', [])),
],
'assessment': [
 P(('This assessment covers every source record in the library tagged to spinach or naming it, and every spinach row in WHO GEMS/Food, the FDA Total Diet Study and the other indexed datasets; each item has a recorded decision based on its content.', [gems, fda]),
   ('Studies of amaranth, water spinach and Malabar spinach, papers that print spinach values only in charts and pooled vegetable groups are recorded but not used as spinach results.', [adb, ahm19, ull])),
 P(('Remaining gaps are specific.', []),
   ('The Peruvian mining-region dataset with spinach results is held in an external repository not in the library, the New Zealand comparison of baby and bunching spinach is available only through a review, and no study compares field-grown with greenhouse or hydroponic spinach.', [bed, sey]),
   ('Inorganic arsenic was measured directly only in GEMS/Food submissions and the Hong Kong total diet study.', [gems, hka])),
],
}

headings = {'summary': 'Spinach overview', 'identity': 'Spinach and its preparations', 'occurrence': 'Heavy metal contamination profile of spinach',
 'pathways': 'How contamination reaches spinach', 'variation': 'Lower measured levels by site, region and type', 'processing': 'Freezing, cooking, washing and purée',
 'controls': 'Controls for spinach', 'tradeoffs': 'Trade-offs and failure modes', 'testing': 'Sampling and testing spinach',
 'procurement': 'Sourcing and supplier evidence', 'product': 'Spinach in foods and dietary exposure', 'assessment': 'Evidence review and remaining questions'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Spinacia oleracea leaves: raw, baby, cooked, frozen, canned and purée forms; amaranth, water spinach and Malabar spinach excluded.', gems, adb, hkt),
             A('Raw, baby, cooked, frozen, canned and purée spinach are separate materials; creamed spinach and mixed foods are excluded.', gems, fda),
             A('Fresh weight, dry weight and unstated bases are never converted into each other.', sey, che)],
'summary': [A('Cadmium is the deciding metal; lead, arsenic and mercury are mostly low in retail spinach; aluminium is high.', gems, fda, mar),
            A('Growing site and irrigation water first, then fresh-weight lot results for Cd and Pb.', nas, kul, eu),
            A('Gaps: no field versus greenhouse comparison, baby-leaf evidence only through a review, an external mining-region dataset.', sey, bed)],
'occurrence': [A('Pb, Cd, total and inorganic As, total Hg, Ni, Cr, Al, Sn and U.', gems, fda, mar),
               A('Retail Cd medians 21.5–200 µg/kg fresh weight; Pb mostly below 25 µg/kg; polluted sites reach several mg/kg.', gems, fda, nas),
               A('Inorganic arsenic measured only by GEMS/Food and Hong Kong; figure-only and pooled studies are not results.', gems, hka, ahm19)],
'pathways': [A('Root uptake of cadmium with transfer to leaves; lead mostly from soil and surface deposits.', sey),
             A('Polluted irrigation water, industrial sites and manures raise Pb, Cd, Ni and As.', nas, jia, kib, cla),
             A('Site contrasts are measured within studies; regional differences are descriptive.', nas, kul, gems)],
'variation': [A('Polluted sites higher than clean fields for every metal; Europe and Canary Islands lowest retail Cd, US highest.', nas, kul, gems, fda),
              A('Domestic and imported GEMS/Food spinach had equal Cd medians; no supplier-level data.', gems),
              A('Site and irrigation support a sourcing decision; country rankings from purchase markets do not.', nas, gems, sey)],
'processing': [A('Freezing, cooking and canning did not lower Cd in unpaired monitoring data.', gems),
               A('Purée Cd was in the range of fresh lots; no paired product data.', ush),
               A('Cooking concentrates per weight by water loss; washing removes surface soil only.', sey, cla)],
'controls': [A('Zinc and biochar soil amendments lowered spinach Cd in pot trials; lime plus zinc and low chloride rated most effective in review.', hus, she, sey),
             A('Site, irrigation water and lead-free soil inputs; arsenic-free irrigation and cooking water.', kib, cla),
             A('Commercial-scale evidence is limited to review estimates; lot testing verifies.', sey, eu)],
'tradeoffs': [A('Manures lowered As, Ni and Cr but raised Pb.', kib),
              A('Zinc at the effective rate reduced shoot growth by about 17%.', hus),
              A('Pot-trial effects in spiked soils do not transfer directly to fields.', hus, she, crs, sen)],
'testing': [A('Composite lots with a stated fresh-weight basis and growing site.', eu, fda),
            A('Quantification limits well below 0.20 mg/kg Cd and 0.30 mg/kg Pb; species kept separate.', fda, gems, hka),
            A('A non-detect establishes only a bound at the reporting limit.', gems, fda)],
'procurement': [A('Request growing region, irrigation source and fresh-weight Cd and Pb per lot.', gems, nas, sey),
                A('EU 0.20 mg/kg Cd for spinach; Korea, China and Hong Kong 0.2 mg/kg Cd; lead 0.3 mg/kg.', eu, kr, cn, hk),
                A('A lot near 0.20 mg/kg Cd or a change of growing region warrants retesting.', gems, sey)],
'product': [A('Cooked or puréed spinach carries more Cd per gram than raw leaves because of water loss.', sey, ush),
            A('Spinach contributes measurably to Ni intake in a Danish estimate and to Cd in infant purées.', fly, bar),
            A('No paired finished-product measurement is in the library.', ush)],
'assessment': [A('EU 2023/915 (Cd 0.20 mg/kg spinach; Pb 0.30 mg/kg), EU 2024/1987 (Ni), Korea, China, Hong Kong and Codex instruments verified.', eu, euni, kr, cn, hk, cx),
               A('Every tagged or naming source record and every spinach dataset row has a content-based decision.', gems, fda),
               A('Remaining gaps: external Peruvian dataset, baby-leaf comparison, growing-system comparison; reviewed 22 October 2026.', bed, sey)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which spinach had the lowest measured lead and arsenic?',
  P(('Retail spinach was low in both: lead medians of 6.2 µg/kg in US composites, 10 µg/kg in Americas submissions and 12.8 µg/kg in Gran Canaria, and total arsenic 5.9–8 µg/kg.', [fda, gems, mar]),
    ('Inorganic arsenic averaged 5 µg/kg in Hong Kong spinach, and five of seven European GEMS/Food results were below a 6 µg/kg reporting limit.', [hka, gems]),
    ('The highest lead values came from wastewater-irrigated and industrial sites in Bangladesh, India, Pakistan and China.', [nas, moh, abu, jia]))),
 ('Is frozen or canned spinach lower in cadmium than fresh?',
  P(('Not in the monitoring data.', [gems]),
    ('European frozen spinach had a higher cadmium median (71 µg/kg) than raw spinach (40 µg/kg), and the single canned European result was 130 µg/kg; these are different samples, so the comparison does not show what processing does to a given lot.', [gems]))),
],
'testing': [
 ('Why do some studies report extreme values?',
  P(('Some extreme values do not survive a check against their own papers.', []),
    ('In a Dhaka market study every detected lead value was below the method’s own detection limit, and in an Iranian field study the cadmium standard deviation was eleven times the mean.', [sul, abd]),
    ('Other high values are real but come from wastewater-irrigated or industrial sites and from dry-weight measurements, which are about 14 times fresh-weight values.', [nas, jia, sey]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in spinach?',
  P(('Cadmium is found in almost every spinach sample and is the one most often at levels that matter.', [gems, fda]),
    ('Lead, total and inorganic arsenic, mercury, nickel, chromium, aluminium, tin and uranium have also been measured; in monitored retail spinach lead and arsenic are usually low and mercury mostly below detection.', [gems, fda, mar])), 'GEMS/Food spinach extraction; FDA food 408; Martín-León Tables 3 and 5'),
 ('ING-FAQ-02', 'Why does spinach contain cadmium?',
  P(('Spinach roots take cadmium up from soil and the plant moves it into the leaves, more readily than lead; chloride in soil or water increases its uptake.', [sey]),
    ('Spiking pot soil with 3 mg/kg cadmium raised leaf cadmium from 0.01 to 3.29 mg/kg dry weight.', [hus])), 'Seyfferth sections 3.1–3.2; Hussain Table 3'),
 ('ING-FAQ-08', 'Is there a legal limit for cadmium in spinach?',
  P(('Yes, in several markets.', [eu, kr]),
    ('The EU maximum is 0.20 mg/kg wet weight for spinach and similar leaves, and Korea, China and Hong Kong set 0.2 mg/kg for spinach or leafy vegetables; lead limits are 0.3 mg/kg.', [eu, kr, cn, hk]),
    ('No US cadmium limit for spinach appears in the sources held; the 2024 US review evaluates US data against the EU value.', [sey])), 'EU 2023/915 Annex I 3.2.6.2; Korean Food Code Art. 2; GB 2762; HK guidelines; Seyfferth section 2.1'),
 ('SP-FAQ-01', 'How often does spinach exceed the cadmium limit?',
  P(('In GEMS/Food, 105 of 2,262 raw spinach results (about 5%) were above 0.20 mg/kg, and EFSA counted 3.9% of EU samples above the limit.', [gems, efcd]),
    ('US market composites from 2018 to 2020 exceeded 0.20 mg/kg in 10 of 27 cases.', [fda])), 'GEMS/Food spinach records; EFSA 2009 Table 8 and text; FDA food 408 composites'),
 ('ING-FAQ-05', 'Which growing regions produce spinach with the least cadmium?',
  P(('The supported answer is a site rather than a country: fields away from polluted irrigation water and industry.', [nas, kul]),
    ('Retail monitoring found lower medians in Europe (40 µg/kg) and Gran Canaria (21.5 µg/kg) than in the Americas (125 µg/kg) and US composites (200 µg/kg), but these record where spinach was bought, not where it grew.', [gems, mar, fda]),
    ('A US review reports higher cadmium in recent California and Arizona spinach than in 1980s samples from lower-cadmium soils.', [sey])), 'Naser Table 3; Kulshrestha Table 2; GEMS/Food regions; Seyfferth section 2.1'),
 ('ING-FAQ-04', 'Does baby spinach have less cadmium than mature spinach?',
  P(('Probably, but the library holds only indirect evidence.', [sey]),
    ('A 2024 review explains that older leaves accumulate more cadmium and cites a New Zealand field study in which baby spinach had lower cadmium than the later bunching crop; the only direct baby-spinach result in the library is one lead non-detect.', [sey, gems])), 'Seyfferth section 3.3; GEMS/Food baby spinach record'),
 ('ING-FAQ-03', 'Is organic spinach lower in heavy metals?',
  P(('The library cannot say.', [gems]),
    ('Only two organic spinach cadmium results are in GEMS/Food, and the one fertiliser trial found that organic manures raised spinach lead four- to sevenfold while leaving cadmium almost unchanged.', [gems, kib])), 'GEMS/Food local names; Kibar Table 7'),
 ('ING-FAQ-09', 'Does washing spinach remove heavy metals?',
  P(('Only the part on the surface.', [sey]),
    ('Washing removes soil and dust, which carry most surface lead, but the 2024 review estimates only an 8–15% cadmium reduction, because cadmium is inside the leaf.', [sey])), 'Seyfferth Table 1'),
 ('ING-FAQ-14', 'Does cooking spinach reduce cadmium or arsenic?',
  P(('Cooking does not destroy metals.', [sey, cla]),
    ('Boiling in clean water removed 3–31% of arsenic from spinach, but boiling in water with 1,000 µg/L arsenic raised spinach arsenic about 75-fold, and the water lost in cooking concentrates cadmium per gram.', [cla, sey]),
    ('Cooked spinach in monitoring data had cadmium medians similar to or above raw spinach.', [gems])), 'Clair-Caliot Tables 2 and 4; Seyfferth section 4.2; GEMS/Food cooked spinach'),
 ('SP-FAQ-02', 'Is frozen spinach different from fresh?',
  P(('Not lower in cadmium.', [gems]),
    ('European frozen spinach had a cadmium median of 71 µg/kg against 40 µg/kg for raw, and a lead median below 20 µg/kg, similar to raw; these are different samples, not the same lots before and after freezing.', [gems])), 'GEMS/Food EURO random sampling'),
 ('SP-FAQ-03', 'Why do some studies report very high metal levels in spinach?',
  P(('Most come from spinach grown on wastewater-irrigated or industrial sites, and many are on a dry-weight basis, about 14 times fresh-weight values.', [nas, jia, abu, sey]),
    ('Some extreme values fail checks against their own papers and are held on this page.', [sul, abd])), 'Naser Table 3; Jiang Table 2; Abubakar Table 3; holds'),
 ('ING-FAQ-13', 'Is spinach a concern for babies and young children?',
  P(('Spinach is one of the cadmium sources identified for infant foods.', [sey, bar]),
    ('An FDA survey found that 18 of 20 purées and mixtures with the highest cadmium listed tomato, spinach or carrot, and spinach and purée tested by a manufacturer before use carried 101–143 µg/kg cadmium.', [bar, ush]),
    ('No authoritative serving guidance for spinach and metals is in the library.', [])), 'Barber results, cadmium; US House report pp. 29–30'),
 ('SP-FAQ-04', 'How much aluminium is in spinach?',
  P(('A lot compared with other leaves.', [mar, see]),
    ('Gran Canaria supermarket spinach had a median of 41,900 µg/kg and Malaysian market spinach averaged 41,400 µg/kg, and cooked spinach in Hong Kong 13,000 µg/kg, the highest of the leaves in the Gran Canaria survey.', [mar, see, hkt])), 'Martín-León Table 5; See Table 2; HKTDS 2013'),
 ('ING-FAQ-10', 'Is the arsenic in spinach inorganic?',
  P(('Mostly it is measured only as total arsenic, which was low in retail spinach (medians 5.9–8 µg/kg).', [fda, mar]),
    ('Where inorganic arsenic was measured directly it averaged 5 µg/kg in Hong Kong, and five of seven European submissions were below a 6 µg/kg reporting limit.', [hka, gems])), 'FDA food 408; HKTDS 2012; GEMS/Food iAs'),
 ('SP-FAQ-05', 'What should a buyer ask a spinach supplier for?',
  P(('Lot results for cadmium and lead on a fresh-weight basis with quantification limits well below 0.20 and 0.30 mg/kg, the growing region and field, and the irrigation water source.', [eu, fda, nas]),
    ('For arsenic-affected regions, the arsenic content of irrigation water.', [cla])), 'EU 2023/915 notes; FDA reporting limits; Clair-Caliot Table 5'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-spinach-v1', 'family': 'ingredient', 'slug': 'spinach', 'title': 'Spinach', 'display_title': 'Spinach', 'version': 1, 'date': '2026-10-22',
     'description': 'Cadmium, lead, arsenic, nickel and other metals in spinach: monitoring data by region and form, wastewater and industrial sites, limits, cooking and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Spinach FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As, total Hg, Ni, Cr, Al, Sn, U as reported', 'material_form': 'Spinacia oleracea: raw, baby, cooked, frozen, canned and purée kept apart; amaranth, water spinach and Malabar spinach excluded',
               'basis': 'Fresh weight, dry weight or unstated, never converted; µg/kg; unconvertible units left as reported', 'geography_market': 'Growing site, purchase market or WHO reporting region as each source reports; polluted and wastewater-irrigated sites labelled',
               'period': 'Source collection years where reported; unreported dates stay unknown', 'stage': 'Growing site, irrigation, soil inputs, harvest, washing, freezing, cooking, retail and lot testing',
               'population_route': 'Dietary ingestion; infant foods; dietary nickel estimate', 'comparator_outcome': 'Pooled HMI spinach references; same-study control or total contrasts; paired intervention outcomes'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to spinach or naming it, plus spinach rows in GEMS/Food, FDA TDS and other indexed datasets',
                'protocol_ref': 'data/evidence/contracts/spinach/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/extraction/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/extraction/'],
                'screening_ref': 'data/evidence/contracts/spinach/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Bedoya-Perales 2023 Figshare dataset (external repository)']},
     'source_catalogue': {'topic': 'ingredients/spinach'}, 'retain_history_only': True}

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

quick = P(('Spinach accumulates more cadmium than most vegetables, with retail medians from about 20 to 200 µg/kg fresh weight and some lots above the EU limit of 0.20 mg/kg; lead and arsenic are usually low in retail spinach but rise sharply on wastewater-irrigated and industrial sites.', [gems, fda, eu, nas]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Cadmium in ordinary spinach; lead and nickel where fields are polluted; aluminium is naturally high.', [gems, nas, mar]),
 ('Main drivers', 'Soil cadmium and chloride, irrigation water and industrial sites; freezing, cooking and washing do not reliably lower cadmium.', [sey, nas, gems]),
 ('Practical framing', 'Ask for fresh-weight cadmium and lead results by lot with the growing site and irrigation source.', [eu, fda])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-spinach-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-06', 'status': 'covered', 'reason': 'No paired measurement of a finished spinach product and its leaves; stated in Spinach in foods and dietary exposure, with purée and infant-food evidence in the babies FAQ.'},
 {'id': 'ING-FAQ-07', 'status': 'deferred', 'reason': 'No authoritative spinach-specific health assessment in the ledger; occurrence values are not converted into a health conclusion. Limits and exceedance are answered instead.'},
 {'id': 'ING-FAQ-11', 'status': 'not_applicable', 'reason': 'Spinach has no whole versus refined fraction; leaf age (baby versus mature) is answered in its own FAQ.'},
 {'id': 'ING-FAQ-12', 'status': 'covered', 'reason': 'Amaranth, water spinach and Malabar spinach are different species without direct comparative evidence on this page; the identity section explains the exclusion.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not a spinach preparation practice with evidence in the ledger.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative spinach serving guidance for metals in the ledger; no frequency is invented from concentrations.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitution guidance for spinach; occurrence data alone cannot support one.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
labels = json.loads((leafy / 'source-labels.json').read_text())['labels']
def meta(sid):
    """Label and link from the shared source record itself (never typed by hand)."""
    t = (root / f'wiki/sources/{sid}.md').read_text()
    fm = t.split('---', 2)[1]
    get = lambda k: (re.search(rf'^{k}:\s*(.+)$', fm, re.M) or [None, None])[1]
    doi = (get('doi') or '').strip().strip('"\'')
    url = f'https://doi.org/{doi}' if doi and doi.lower() not in ('null', 'none', '') else (get('access_url') or get('url') or '').strip().strip('"\'') or f'../sources/{sid}'
    if url in ('null', 'None'): url = f'../sources/{sid}'
    m = re.search(r'^authors:\s*\[(.*)\]', fm, re.M)
    n_auth = len(m.group(1).split(',')) if m else 1
    k = re.match(r'^([a-z][a-z-]*?)-?((?:19|20)\d{2})', sid)
    label = labels.get(sid) or (f"{'-'.join(w.capitalize() for w in k.group(1).split('-'))}{' et al.' if n_auth > 1 else ''} {k.group(2)}" if k else sid)
    return url, label
def control(i, sid, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, audiences=('supplier', 'brand')):
    url, label = meta(sid)
    if sid == eu: label = 'Regulation (EU) 2023/915'
    return {'id': f'spinach-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/spinach.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Spinach', 'audiences': list(audiences),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Effects on other metals, yield and cost are given where the source reports them.',
            'verification_summary': 'Confirm with lot results for spinach on a fresh-weight basis with an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': {'observational': 'Observational field or market comparison', 'measured': 'Measured paired comparison or trial', 'guidance': 'Regulatory or review guidance'}.get(kind, 'Context'),
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or remaining in the edible leaf, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Basis as stated in each outcome; no conversion.',
            'other_contaminants': 'As reported in outcomes.', 'nutrition_quality_yield': 'Not assessed unless stated.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'commercial-scale effect', 'next_action': 'Most evidence is from single sites or pot trials; keep effects source-scoped.'}], 'review': {'record_ref': 'data/evidence/contracts/spinach/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis, unit='µg/kg'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': unit, 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported values; see the evidence drawer for design.'}
DW, FW, NS = 'Dry weight', 'Fresh weight', 'Basis not stated'
controls = [
 control(1, nas, 'sourcing and procurement', 'Source spinach from fields away from polluted irrigation water and industry', 'observational', 'Spinach fields at three pollution levels, Gazipur, Bangladesh',
   'Spinach from a field irrigated with heavily polluted river water carried far more cadmium, lead and nickel than spinach from a non-industrial research field.',
   'High-pollution versus low-pollution fields in the same district, same analysis.',
   [out('Cd', 'lower', 1020, 430, 'Lower cadmium on the non-industrial field (observational)', 'Spinach leaf cadmium', 'High- versus low-pollution field', 'Table 3', DW),
    out('Pb', 'lower', 5970, 1160, 'Lower lead on the non-industrial field (observational)', 'Spinach leaf lead', 'High- versus low-pollution field', 'Table 3', DW),
    out('Ni', 'lower', 31900, 5480, 'Lower nickel on the non-industrial field (observational)', 'Spinach leaf nickel', 'High- versus low-pollution field', 'Table 3', DW)],
   'Areas with industrial effluent in irrigation water.', 'Observational; sample counts per field not stated; dry weight.', 'Field survey'),
 control(2, kul, 'sourcing and procurement', 'Prefer spinach grown with clean water and no street runoff', 'observational', 'Spinach, Dehradun, India',
   'Spinach from a walled garden watered from a tube well and rain carried less cadmium, lead, nickel and chromium than market spinach grown with mixed and partly wastewater irrigation.',
   'Market spinach versus walled-garden spinach, same laboratory.',
   [out('Cd', 'lower', 470, 260, 'Lower cadmium in walled-garden spinach (observational)', 'Spinach cadmium', 'Market versus walled garden', 'Table 2', DW),
    out('Pb', 'lower', 2740, 1260, 'Lower lead in walled-garden spinach (observational)', 'Spinach lead', 'Market versus walled garden', 'Table 2', DW),
    out('Cr', 'lower', 2710, 1090, 'Lower chromium in walled-garden spinach (observational)', 'Spinach chromium', 'Market versus walled garden', 'Table 2', DW)],
   'Urban and peri-urban supply with mixed irrigation sources.', 'Observational; five samples per group.', 'Market survey'),
 control(3, cla, 'cultivation', 'Irrigate with arsenic-free water', 'measured', 'Spinach, greenhouse trial, Burkina Faso',
   'Spinach leaf arsenic rose with irrigation-water arsenic; at 500 µg/L it reached 6.57 µg/g dry matter against 1.05 µg/g with arsenic-free water.',
   'Arsenic-free irrigation versus water spiked to 500 µg/L arsenic(V), same soil.',
   [out('tAs', 'higher', 1050, 6570, 'Higher arsenic with contaminated irrigation water', 'Spinach leaf total arsenic', '0 versus 500 µg/L irrigation arsenic', 'Table 5', DW)],
   'Areas with arsenic-bearing groundwater.', 'Greenhouse experiment.', 'Greenhouse trial'),
 control(4, kib, 'cultivation', 'Check manures and composts for lead before use', 'measured', 'Spinach, open-field trial, Bolu, Turkey',
   'Chicken, sheep and cattle manure and vermicompost raised spinach lead four- to sevenfold while lowering arsenic and nickel slightly; cadmium changed little.',
   'Unfertilised control plots versus each fertiliser.',
   [out('Pb', 'higher', 110, 750, 'Higher lead with chicken manure', 'Spinach lead', 'Control versus chicken manure', 'Table 7', NS),
    out('Cd', 'lower', 430, 400, 'Slightly lower cadmium with vermicompost', 'Spinach cadmium', 'Control versus vermicompost', 'Table 7', NS),
    out('tAs', 'lower', 410, 350, 'Lower arsenic with chicken manure', 'Spinach arsenic', 'Control versus chicken manure', 'Table 7', NS)],
   'Manure-fertilised spinach.', 'One season; basis not stated; no detection limits reported.', 'Field trial'),
 control(5, hus, 'soil remediation', 'Raise soil zinc on cadmium-affected land', 'measured', 'Spinach, glasshouse pot trial on cadmium-spiked soil',
   'Zinc at 300 mg/kg soil lowered spinach leaf cadmium from 3.29 to 1.96 mg/kg dry weight; 30 mg/kg zinc did not, and the effective rate reduced shoot growth by about 17%.',
   'Cadmium-spiked soil without zinc versus with zinc.',
   [out('Cd', 'lower', 3290, 1960, 'Lower cadmium with zinc at 300 mg/kg', 'Spinach leaf cadmium', 'No zinc versus Cd:Zn 1:100', 'Table 3', DW),
    out('Cd', 'higher', 3290, 3670, 'No reduction at the lower zinc rate', 'Spinach leaf cadmium', 'No zinc versus Cd:Zn 1:10', 'Table 3', DW)],
   'Cadmium-affected soils.', 'Pot experiment with spiked soil.', 'Pot trial'),
 control(6, she, 'soil remediation', 'Amend soil with acidified biochar', 'measured', 'Savoy spinach, pot trial, Bahawalpur, Pakistan',
   'Acidified cotton-stick biochar lowered spinach shoot cadmium by 17–59% in unspiked soil and 17–33% in soil spiked with 20 mg/kg cadmium, increasing with dose.',
   'No biochar versus 0.45, 0.90 and 1.20% biochar.',
   [out('Cd', 'lower', None, None, 'Lower cadmium (33–59% at 1.2% biochar)', 'Spinach shoot cadmium', 'No biochar versus 1.20% biochar', 'Results text; Figure 5D', 'Basis not stated')],
   'Cadmium-affected soils.', 'Pot experiment; values shown only in a figure, percentages from the text.', 'Pot trial'),
 control(7, sey, 'cultivation', 'Limit chloride inputs and use lime with zinc on cadmium-prone soils', 'guidance', 'US spinach production (review)',
   'A review of the literature and grower interviews rates lime with zinc (about 60%) and limiting chloride inputs (about 40%) as the most effective cadmium reductions, cultivar choice at 0–50% and leaf washing at 8–15%.',
   'Review estimates from the literature it cites; not a single measured comparison.',
   [out('Cd', 'lower', None, None, 'Estimated 40–60% lower cadmium', 'Spinach cadmium', 'Lime plus zinc; low-chloride irrigation and fertiliser', 'Table 1', 'Basis not stated'),
    out('Cd', 'lower', None, None, 'Estimated 8–15% lower cadmium', 'Spinach cadmium', 'Leaf washing', 'Table 1', 'Basis not stated')],
   'Commercial spinach growing.', 'Review estimates; effects depend on soil and source.', 'Review', ('supplier', 'brand', 'consumer')),
 control(8, cla, 'home preparation', 'Cook in arsenic-free water', 'measured', 'Market spinach, Ouagadougou',
   'Boiling market spinach in water containing arsenic raised its arsenic from 0.01 to 0.75 µg/g fresh mass; boiling in clean water removed 3–31% of arsenic from greenhouse spinach.',
   'Clean versus arsenic-contaminated cooking water.',
   [out('tAs', 'higher', 10, 750, 'Higher arsenic with contaminated cooking water', 'Market spinach total arsenic', 'Clean versus 1,000 µg/L cooking water', 'Table 4', FW)],
   'Arsenic-affected areas.', 'Laboratory cooking test.', 'Laboratory test', ('consumer',)),
 control(9, eu, 'lot acceptance and release', 'Test lots against spinach-specific limits', 'guidance', 'Spinach (EU)',
   'Cadmium 0.20 mg/kg for spinach and similar leaves and lead 0.30 mg/kg for leaf vegetables, wet weight, after washing and separating the edible part.',
   'Regulatory maximum levels.',
   [out('Cd', 'context', None, None, 'Limit 0.20 mg/kg', 'Cadmium maximum level', 'Spinach', 'Annex I 3.2.6.2', FW),
    out('Pb', 'context', None, None, 'Limit 0.30 mg/kg', 'Lead maximum level', 'Leaf vegetables', 'Annex I 3.1.6', FW)],
   'Spinach placed on the EU market.', 'A limit detects non-compliant lots; it does not lower contamination.', 'Regulation'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 1, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
