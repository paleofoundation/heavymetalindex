"""Compose the fish synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/most-studied-rollout-2026-10-22/fish/extraction/ (locators kept there).
Species groups, preparation forms, mercury and arsenic species, and wet versus dry weight
are never pooled in a stated comparison.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
HELD = len(json.loads((audit / 'holds.json').read_text())['holds'])

G = 'who-gemsfood-heavy-metal-contaminants'; F = 'fda2022-tds-elements-fy2018-fy2020'
EH = 'efsa-mercury-methylmercury-2012'; EC = 'efsa-cadmium-contam-2009'; EL = 'efsa-lead-contam-2010'; EI = 'efsa2014-dietary-exposure-iAs'
EU = 'eu-2023-915-contaminants-maximum-levels'; EUA = 'europeancommission2025-inorganic-arsenic-fish-seafood'; CX = 'codex-cccf17-2024'
ADV = 'fda-epa-fish-consumption-advice'; FSZ = 'fsanz2024-schedule-19-contaminants'; CN = 'usda-fas2023-china-gb-2762-2022-translation'
JE = 'jecfa-61st-methylmercury'; ESC = 'efsa-sc2015-fish-seafood-mehg-risk-benefit'; ATS = 'atsdr-mercury-toxprofile-2024'
WAT = 'watanabe2017-retail-fish-mercury-methylmercury-japan'; SAL = 'authors2020-pcbs-and-heavy-metals-in-farmed-escaped-and'
BFT = 'authors2019-bluefin-tuna-thunnus-thynnus-l-muscle'; COD = 'authors2020-iodine-and-mercury-content-in-raw-boiled'
CK = 'authors2021-the-effect-of-cooking-on-methylmercury-arsenic-and'; CYS = 'authors2024-new-insight-into-mercury-removal-from-fish-meat'
DOR = 'dordevic2019-aluminum-foil-culinary-baking-czech'; JER = 'jermilova2025-mackenzie-mercury-fish-bayesian'; PAP = 'pappalardo2017-canned-tuna-metals-italy'
TRA = 'trandafir2012-tin-canned-foods-icp-ms'; ABB = 'abbas2023-sparus-aurata-egypt-metals'; LUV = 'luvonga2021-seafood-arsenic-speciation'
BRO = 'brooke1981-fish-shellfish-inorganic-arsenic'; HK = 'cfs2013-hktds-metallic-contaminants'; FZ25 = 'fsanz2019-25th-australian-total-diet-study'
BFR = 'bfr2024-methylmercury-fish-seafood-germany'; ULU = 'ulusoy2023-canned-tuna-toxic-metals'; ZAH = 'zahran2023-mercury-tilapia-nannochloropsis'
ABD = 'abdel-tawwab2023-cadmium-seabream-yeast'; KIM = 'kim2019-jeju-shark-metals'; SHA = 'shaalan2024-nile-tilapia-heavy-metals-egypt'
TOR = 'torabi2024-persian-gulf-marine-fish-metals'; RAY = 'ray2025-fish-chennai-metals'; MEA = 'meli2024-chemical-characterization-baby-food-italy'
FAL = 'falconer1983-north-sea-seafood-arsenic'; MAT = 'matsumoto-tanibuchi2019-seaweed-seafood-ias'; BEN = 'benoy1971-tin-toxicity-canned-fruit-juices'
BRD = 'brodziak-dopierala2023-mercury-oil-supplements-poland'; EAO = 'efsa2024-organoarsenic-species'; BHO = 'bhoyroo2015-scombrids-heavy-metals-mauritius'; TOV = 'torovic2024-mercury-fish-oil-supplements-serbia'; NAE = 'naess2020-norwegian-seafood-metals'
CIR = 'cirillo2010-campania-seafood-metals'; ECS = 'ec2004-scoop-heavy-metals-dietary-exposure'; HKA = 'cfs2012-hktds-inorganic-arsenic'

def P(*sentences):
    """Join (sentence, sources) pairs; each cited sentence gets its own citation placement."""
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
 P(('Mercury decides most questions about fish, and the species on the plate matters far more than anything else that has been measured.', []),
   ('Across European monitoring results compiled by EFSA, mean total mercury in fish muscle ran from about 31–35 µg/kg in salmon and trout and 32–44 µg/kg in sardine, through 91–96 µg/kg in cod and whiting and 286–291 µg/kg in tuna, to 688–695 µg/kg in shark and 1,210–1,214 µg/kg in swordfish (lower- to upper-bound means, wet weight).', [EH]),
   ('WHO GEMS/Food submissions from Europe show the same order, with a median of about 184 µg/kg for tuna against 80 µg/kg for cod and 18–30 µg/kg for sardine.', [G])),
 P(('Most of the mercury in fish muscle is methylmercury, the form that drives intake limits.', []),
   ('In 210 retail fish samples from Japan, methylmercury made up about 60–90% of total mercury once total mercury was at least 100 µg/kg, close enough that total mercury is used as a screening measure.', [WAT]),
   ('The EU sets 500 µg/kg of total mercury for most fish muscle and 1,000 µg/kg for large predators such as tuna, swordfish and shark, while Codex sets methylmercury levels of 1,200 µg/kg for tuna and 1,600 µg/kg for shark.', [EU, CX])),
 P(('Lead and cadmium are usually low in fish muscle where monitoring is routine, and arsenic in fish is mostly in organic forms.', []),
   ('US Total Diet Study composites of baked cod, salmon and tilapia had lead below 4 µg/kg and cadmium at or below about 1 µg/kg, and EFSA’s European fish muscle data gave a cadmium median of 5 µg/kg.', [F, EC]),
   ('Total arsenic in marine fish is often in the thousands of µg/kg, such as 4,500 µg/kg in US baked cod, but inorganic arsenic averaged only 0.7–20 µg/kg (lower bound) across European fish species.', [F, EI])),
 P(('Higher lead and cadmium values come mostly from small surveys of rivers, lagoons and coasts near mining, industry or wastewater, and many of the most extreme ones fail checks against their own papers.', [SHA, TOR, RAY]),
   ('For a buyer or a regular eater, the supported priorities are species and size choice for mercury, verified lot results for the analyte that applies to the species, and keeping total and inorganic arsenic apart.', [EU, ADV, EUA])),
],
'identity': [
 P(('This page covers finfish eaten by people: the muscle, fillet or whole small fish of marine, freshwater and farmed species, and the canned, smoked, dried, salted, fermented and processed products made from them.', [EU, G, F]),
   ('Fish oils and fish-liver oils, fish sauce and fish products such as fingers, cakes and collagen supplements are kept as separate forms and never pooled with flesh.', [BRD, TOV, MAT])),
 P(('Shellfish, crustaceans, cephalopods, marine mammals, fish feed and fish offal are outside the scope, as are fish-containing infant foods, which have their own product page.', [G, MEA]),
   ('Categories that mix finfish with shellfish, common in total diet studies and some European summaries, are also excluded because their results cannot be attributed to fish.', [ECS, G])),
 P(('Measurements are kept in the basis the source reports: wet weight (as sold or eaten), dry weight, or basis not stated; dry-weight results are not converted without the paper’s own moisture data.', [SAL, ABB]),
   ('Total mercury, methylmercury and mercury of unstated form are separate analytes, as are total, inorganic and organic arsenic species.', [WAT, EI, BRO])),
],
'occurrence': [
 P(('The table holds every finfish result extracted from about 250 monitoring datasets, total diet studies and surveys: one row for each statistic a source reports for a species group, form, site and metal, so a mean, a median and a range from the same fish appear as separate rows.', [G, F, EH, EC]),
   ('Ratings place a reported mean, median or sample value against an HMI reference built only from the same species group, preparation form, analyte and basis; non-detects remain intervals and are never read as zero.', [G, F, WAT]),
   ('Rows that failed a check against their own paper stay visible with the specific reason and are not compared.', [SHA, TOR, RAY])),
],
'pathways': [
 P(('Methylmercury builds up through the food web, so fish that are older, larger and higher in the food chain carry more of it.', [EH, JE]),
   ('Within one species the same pattern holds: modelled mean mercury in northern pike from Great Slave Lake was 740 µg/kg in fish of 600 mm or longer against 300 µg/kg in smaller fish, and young yellowtail in Japanese markets averaged 80 µg/kg total mercury against 520 µg/kg in adults.', [JER, WAT]),
   ('Large wild bluefin tuna caught off Sardinia averaged 1,680 µg/kg total mercury, against 610 µg/kg in bluefin fattened on a Maltese farm.', [BFT])),
 P(('Cadmium, lead and inorganic arsenic in fish come mainly from the water, sediment and feed of the place where the fish lived, rather than building up with age along the food chain as methylmercury does.', [EC, EL, ABB]),
   ('This is why the higher muscle values cluster in studies from polluted rivers, lagoons and coastal sites, while large national monitoring programmes report low medians.', [G, EC, ABB])),
 P(('Arsenic follows a different route: arsenobetaine, an organic compound, is the major form of arsenic in fish, which is why total arsenic can be high while inorganic arsenic stays low.', [EAO, EI]),
   ('In UK samples analysed by two procedures, herring had 1,100 µg/kg total arsenic and 20–40 µg/kg inorganic arsenic, and haddock 2,600 µg/kg total against 20 µg/kg inorganic.', [BRO])),
],
'variation': [
 P(('For mercury, species is the strongest and most consistent lower-contamination lever.', [EH, G, WAT]),
   ('In EFSA’s European data the lowest mean total mercury among commonly eaten fish was in salmon and trout (31–35 µg/kg), sardine and pilchard (32–44 µg/kg) and herring (36 µg/kg), with carp (55 µg/kg) and anchovy (73–92 µg/kg) also low; the highest were swordfish, shark, pike (394 µg/kg) and tuna.', [EH]),
   ('Hong Kong’s total diet study gave the same picture for methylmercury in local fish as eaten, from 4.5 µg/kg in grass carp and 7.9 µg/kg in sole to 330 µg/kg in tuna.', [HK]),
   ('Because these rankings recur across European, Asian and US datasets with different methods, choosing small, short-lived and plankton-eating species is a supported preference for lower mercury, not just a single-study observation.', [EH, HK, F, ADV])),
 P(('Within a species, farming and size can matter as much as origin.', []),
   ('Farmed Atlantic salmon from Norway averaged 18 µg/kg total mercury against 56 µg/kg in wild salmon from the same coast, and farmed bluefin tuna and yellowtail in Japanese retail were lower than wild fish (530 against 760 µg/kg, and 130 against 520 µg/kg).', [SAL, WAT]),
   ('Arsenic did not follow mercury: the same Norwegian study found 860 µg/kg arsenic in farmed salmon against 2,560 µg/kg in wild, while a US comparison of coho salmon found more total arsenic in the farmed fish (597 against 354 µg/kg, one sample each).', [SAL, LUV]),
   ('These are within-study observations for particular farms and fisheries; they support asking for species, size and farm or catch origin, not a general rule that farmed fish are always lower.', [])),
 P(('Origin comparisons for the same species are weaker than species comparisons.', []),
   ('Canned tuna bought in 36 countries had country means from 20 to 950 µg/kg total mercury, with both the lowest and some of the highest means from skipjack-labelled cans; only three cans were tested per country, and purchase country was not catch area.', [ULU]),
   ('For cadmium and lead the lowest monitored medians come from routine national programmes such as GEMS/Food in Europe, where most cod, trout and salmon results were below detection, rather than from any single producing region.', [G, F]),
   ('For inorganic arsenic, European fish means ranged from 0.7 µg/kg in herring to 20 µg/kg in sardine at the lower bound, so species differences are small compared with the EU limits of 100 and 500 µg/kg.', [EI, EUA]),
   ('Total arsenic, mostly organic, is far lower in freshwater fish: GEMS/Food European medians were about 55–75 µg/kg for freshwater fish against 3,100 µg/kg for marine fish, and US baked tilapia had 100 µg/kg against 4,500 µg/kg in baked cod.', [G, F])),
],
'processing': [
 P(('Cooking does not remove mercury from fish; it concentrates it as water is lost.', [COD, CK]),
   ('Atlantic cod fillets lost no measurable mercury when boiled, pan-fried or oven-baked, but the concentration per 100 g rose, for example from 33 to 43 µg/kg after pan-frying.', [COD]),
   ('In a feeding trial with pigs, oven-cooked tuna delivered the same methylmercury to the blood as raw tuna, although laboratory digestion tests had suggested less was available.', [CK])),
 P(('Canning, drying and smoking change the measured concentration mainly through water content and the species that are canned.', [F, PAP, BFR]),
   ('US canned light tuna in water had a median of 220 µg/kg total mercury, Italian cans of skipjack and yellowfin ranged from 50 to 290 µg/kg, and smoked dogfish belly flaps in Germany had 580 µg/kg methylmercury against 30–70 µg/kg in herring products.', [F, PAP, BFR]),
   ('Experimental soaking of canned or fresh tuna in a cysteine solution extracted about 13–38% of the mercury, but this is a laboratory treatment, not an approved or household method.', [CYS])),
 P(('Packaging and cooking materials can add metals that are not from the fish.', []),
   ('Fish baked in aluminium foil with a lemon and salt marinade picked up 4,560–21,000 µg/kg aluminium, against under 1,140 µg/kg without the marinade and none detected when baked in glass.', [DOR]),
   ('Resin-coated cans kept tin low in canned tuna (700 µg/kg), far below the EU limit of 200,000 µg/kg for canned food.', [TRA, EU])),
],
'controls': [
 P(('The controls with measured effects act on mercury through what is caught and sold: species, size and, for some species, farming.', [JER, WAT, SAL]),
   ('Choosing smaller fish within a species more than halved mean mercury in northern pike and cut it more than sixfold in yellowtail, and lot testing with total mercury as a screen is built into the Codex sampling plan.', [JER, WAT, CX]),
   ('Household preparation and cooking do not lower mercury, and the measured processing reductions come from laboratory treatments not used in commercial fish.', [COD, CK, CYS])),
 P(('For cadmium, lead and inorganic arsenic, the evidence on controls is mostly observational: higher values cluster at polluted sites, so siting of farms and fishing grounds is the main lever.', [ABB, EC]),
   ('Feed additives tested in dosed laboratory fish lowered muscle cadmium or mercury, but the doses were far above environmental levels, so they show a mechanism, not a proven farm control.', [ABD, ZAH])),
],
'tradeoffs': [
 P(('The lowest-mercury choice is not always lowest in every metal.', []),
   ('Sardine, anchovy and mackerel, all low in mercury, sit in the EU’s higher cadmium limit groups of 100–250 µg/kg, and farming lowered both mercury and arsenic in Norwegian salmon but came with more total arsenic in a US farmed coho sample.', [EU, SAL, LUV]),
   ('Flatfish, which are low in mercury, carry some of the highest total arsenic, mostly as organic arsenic, and the EU sets a higher inorganic arsenic limit of 500 µg/kg for flatfish, haddock and anglerfish.', [FAL, EUA])),
 P(('Avoiding fish to avoid mercury also removes a main dietary source of omega-3 fatty acids.', [ESC, ADV]),
   ('EFSA’s scientific committee and US federal advice both pair limits on high-mercury species with encouragement to eat lower-mercury fish, rather than advising against fish in general.', [ESC, ADV])),
],
'testing': [
 P(('A useful fish test reports the analyte species that the limit uses, on wet weight, with a quantification limit well below that limit.', [EU, CX, FSZ]),
   ('The EU and Codex mercury limits for most fish (500 µg/kg) and the EU inorganic arsenic limit (100 µg/kg) need methods that can see far lower, as FDA’s 4 µg/kg lead reporting limit and EFSA’s speciated arsenic data show is achievable.', [EU, EUA, F, EI])),
 P(('Codex allows total mercury as a screen: a sample at or below the methylmercury limit for total mercury is compliant, and only higher samples need methylmercury analysis.', [CX, WAT]),
   ('Its sampling plan groups lots by one species and comparable size and takes muscle near the tail for tuna, because mercury varies with fish size and body part.', [CX])),
 P(('Many surveys in the evidence report dry-weight results, mercury without stating its form, or total arsenic only, and some measured mercury after dry ashing at 450–500 °C, a step that can lose mercury.', [CIR, BHO]),
   ('These results stay on the page but cannot be compared with wet-weight limits or with speciated results, and several are held because their values conflict with their own methods.', [CIR, BHO, SHA, TOR])),
],
'procurement': [
 P(('Ask suppliers for the species and, where possible, the size or weight class and the catch or farm area, because mercury depends most on these.', [CX, WAT, JER]),
   ('Lot results should be on wet weight, name the analyte as total mercury or methylmercury, and be compared with the limit for that species in the destination market.', [EU, CX, FSZ])),
 P(('Limits differ by market and by species group.', []),
   ('The EU sets total mercury at 300 µg/kg for anchovy, sardine, herring, mackerel, cod, Alaska pollock, salmon and trout, 500 µg/kg for most other fish and 1,000 µg/kg for large predators such as tuna, swordfish, shark and pike, with cadmium at 50–250 µg/kg and lead at 300 µg/kg.', [EU]),
   ('Australia and New Zealand use mean mercury levels of 500 or 1,000 µg/kg depending on species, and China sets methylmercury at 500 µg/kg for non-carnivorous fish, 1,000 µg/kg for carnivorous fish and 1,200 µg/kg for tuna.', [FSZ, CN]),
   ('For inorganic arsenic, the EU has applied 100 µg/kg to most fish and 500 µg/kg to flatfish, haddock and anglerfish since 8 October 2025, while Australia and New Zealand set 2,000 µg/kg.', [EUA, FSZ])),
 P(('Canned fish carry two extra checks: tin from the can, limited to 200 mg/kg in the EU and 250 mg/kg under Codex and FSANZ, and the species inside, since tuna cans labelled light, skipjack or yellowfin differ in mercury.', [EU, FSZ, TRA, PAP])),
],
'product': [
 P(('Fish is the main dietary source of methylmercury, and how much it adds depends on the species, portion and how often it is eaten.', [JE, ESC]),
   ('JECFA set a tolerable weekly intake of 1.6 µg/kg body weight for methylmercury and EFSA 1.3 µg/kg; EFSA’s scientific committee found that high consumers of predatory fish in several countries could exceed it.', [JE, ESC])),
 P(('US advice for pregnancy and breastfeeding recommends 8–12 ounces (two to three servings) a week from lower-mercury choices such as salmon, sardines, cod, pollock, tilapia and trout, and avoiding king mackerel, marlin, orange roughy, shark, swordfish, Gulf of Mexico tilefish and bigeye tuna.', [ADV]),
   ('These categories match the measured species differences on this page.', [ADV, EH, HK])),
 P(('No source measured metals in a fish-containing food together with the fish that went into it, so finished-product results cannot be traced back to the raw fish.', []),
   ('Fish fingers in the US Total Diet Study had 6 µg/kg total mercury and baked fish fillets in Germany 20 µg/kg methylmercury.', [F, BFR])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to fish or mentions it (1,341 records), every matching fish row in WHO GEMS/Food and the FDA Total Diet Study, and the HMI index rows that route sources to fish; each has a recorded decision based on its content.', [G, F]),
   (f'About 250 sources supplied finfish occurrence results, and {HELD} extracted results are held because their values conflict with their own papers.', [SHA, TOR, RAY]),
   ('Remaining gaps are per-fish supplementary tables that were not in the library, a handful of reports with no readable primary text, and EFSA and national datasets that mix fish with shellfish.', [ECS, FZ25])),
],
}

headings = {'summary': 'Fish overview', 'identity': 'What counts as fish on this page', 'occurrence': 'Heavy metal contamination profile of fish',
 'pathways': 'How metals reach fish', 'variation': 'Which species and sources measured lower', 'processing': 'Cooking, canning and other processing',
 'controls': 'Mitigation from catch to plate', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing fish for metals',
 'procurement': 'Buying and verifying fish', 'product': 'Exposure from fish', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Finfish flesh and fish products (canned, smoked, dried, salted, fermented, oils, sauces, fingers) of marine, freshwater and farmed species.', EU, G, F),
             A('Shellfish, crustaceans, cephalopods, marine mammals, feed, offal, fish-containing infant foods and mixed fish-and-shellfish categories are excluded.', G, MEA, ECS),
             A('Results keep their reported basis (wet, dry or not stated) and analyte species; no moisture conversion is applied without the source’s own data.', SAL, ABB, EI)],
'summary': [A('Mercury, mostly methylmercury, is the deciding metal; it varies about thirtyfold between low- and high-mercury species.', EH, G, WAT),
            A('Lead and cadmium are usually low in monitored fish muscle; arsenic is mostly organic, with low inorganic arsenic.', F, EC, EI),
            A('Species and size choice, verified lot results for the applicable analyte and separating arsenic species are the supported priorities.', EU, ADV, CX)],
'occurrence': [A('Total and methyl mercury, unspecified mercury, Cd, Pb, total, inorganic and organic arsenic species, Ni, Cr, Al, Sn, Sb and U are reported.', G, F, EH),
               A('HMI references are built only within one species group, form, analyte and basis from GEMS/Food, FDA, sample values and published medians.', G, F, WAT),
               A(f'Non-detects are bounded intervals; {HELD} results that conflict with their own papers are held and not compared.', G, SHA, TOR)],
'pathways': [A('Methylmercury biomagnifies, so larger, older and predatory fish carry more.', EH, JE, JER),
             A('Cadmium and lead reflect local water, sediment and feed and concentrate in organs more than muscle.', EC, EL, ABB),
             A('Marine arsenic is mostly arsenobetaine; inorganic arsenic is a small fraction of total arsenic.', BRO, EI)],
'variation': [A('Salmon, trout, sardine, herring, carp and anchovy are lowest in mean total mercury; swordfish, shark, pike and tuna highest.', EH, HK, G),
              A('Farmed salmon, bluefin and yellowtail measured lower in mercury than wild fish in the same studies; arsenic did not follow.', SAL, WAT, BFT, LUV),
              A('Origin rankings for the same species are weak; purchase country is not catch area.', ULU, G)],
'processing': [A('Cooking does not remove mercury and raises its concentration through water loss.', COD, CK),
               A('Laboratory cysteine soaking extracted 13–38% of tuna mercury; not a household or approved method.', CYS),
               A('Acidic marinades in aluminium foil add aluminium; coated cans keep tin low.', DOR, TRA)],
'controls': [A('Choosing smaller fish within a species lowers mercury severalfold in the measured studies.', JER, WAT),
             A('Codex lot sampling uses total mercury as a screen for methylmercury compliance.', CX),
             A('Feed additives lowered muscle Cd or Hg only in dosed laboratory fish.', ABD, ZAH)],
'tradeoffs': [A('Low-mercury fish can be higher in arsenic or sit in higher cadmium limit groups.', SAL, EU, FAL),
              A('Avoiding fish removes omega-3 benefits; advice favours lower-mercury species over avoidance.', ESC, ADV),
              A('Farming lowered mercury but raised arsenic in one of two salmon comparisons.', SAL, LUV)],
'testing': [A('Report the limit’s analyte species, on wet weight, with an adequate quantification limit.', EU, CX, EUA),
            A('Total mercury at or below the methylmercury limit is compliant under Codex.', CX, WAT),
            A('Dry-weight, unspeciated or dry-ashed mercury results cannot be compared with limits.', CIR, SHA)],
'procurement': [A('Specify species, size class and catch or farm area with lot results.', CX, WAT, JER),
                A('EU, Codex, FSANZ and China limits differ by species group and analyte species.', EU, CX, FSZ, CN),
                A('Canned fish adds tin and species-in-can checks.', EU, TRA, PAP)],
'product': [A('Fish is the main methylmercury source; intake depends on species, portion and frequency.', JE, ESC),
            A('US advice lists lower-mercury choices for pregnancy and children and species to avoid.', ADV),
            A('No paired measurement of a fish product and its raw fish exists in the evidence.', F, BFR)],
'assessment': [A('1,341 source records and all matching GEMS/Food and FDA rows dispositioned on content; about 250 sources extracted.', G, F),
               A(f'{HELD} results held for integrity conflicts with their own papers.', SHA, TOR, RAY),
               A('Gaps: unavailable supplements, a few unreadable reports, and fish-plus-shellfish categories.', ECS, FZ25)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which fish are lowest in mercury?',
  P(('Across European monitoring data, salmon and trout (31–35 µg/kg), sardine and pilchard (32–44 µg/kg), herring (36 µg/kg) and carp (55 µg/kg) had the lowest mean total mercury among commonly eaten fish.', [EH]),
    ('US Total Diet Study tilapia had a median of 5.1 µg/kg and salmon 18 µg/kg, and GEMS/Food European medians were 18–30 µg/kg for sardine and 23–29 µg/kg for trout.', [F, G]),
    ('These are species averages; individual large or old fish can be much higher.', [JER]))),
 ('Is farmed fish lower in metals than wild fish?',
  P(('For mercury, the measured comparisons found farmed fish lower: Norwegian farmed salmon 18 against 56 µg/kg wild, and Japanese farmed yellowtail 130 against 520 µg/kg.', [SAL, WAT]),
    ('For arsenic the result was mixed, lower in farmed salmon in Norway but higher in a US farmed coho sample.', [SAL, LUV]),
    ('Farm siting and feed can raise cadmium and lead where water is polluted, as in some Egyptian farms and lagoons.', [ABB]))),
],
'processing': [
 ('Does cooking reduce mercury in fish?',
  P(('No: boiling, frying and baking cod left the mercury in the fillet unchanged, and concentrations rose as water was lost.', [COD]),
    ('Cooked tuna fed to pigs delivered the same methylmercury to the blood as raw tuna.', [CK]))),
],
'testing': [
 ('Why do some studies report very high lead or cadmium in fish?',
  P(('Several of the highest values cannot be reconciled with their own papers: one Egyptian tilapia study prints mg/kg where its methods state µg/kg, a Persian Gulf study prints species means outside their own ranges, and an Indian survey’s intake figures imply values a thousand times higher than its table.', [SHA, TOR, RAY]),
    ('These results are shown but held from comparisons.', []))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in fish?',
  P(('Mercury, mostly as methylmercury, is the metal found at levels that matter in fish; lead and cadmium are usually low in monitored fish muscle, and arsenic is mostly in organic forms.', [EH, F, EI, EAO]),
    ('Fish can also contain nickel, chromium, aluminium and tin, usually from processing, packaging or polluted water.', [DOR, TRA, G])), 'EFSA 2012 Table A9; FDA TDS fish foods; EFSA 2014 Table 10'),
 ('ING-FAQ-02', 'How does mercury get into fish?',
  P(('Methylmercury builds up through the food chain, so large, old and predatory fish carry the most.', [EH, JE]),
    ('In northern pike, fish 600 mm or longer had about two to three times the mercury of smaller pike.', [JER])), 'EFSA 2012; JECFA 61; Jermilova 2025 Results'),
 ('ING-FAQ-04', 'Which fish have the lowest mercury?',
  P(('Salmon, trout, sardines, herring, anchovy, carp, tilapia, cod and pollock are consistently low; swordfish, shark, marlin, king mackerel and large tuna are highest.', [EH, F, HK, ADV]),
    ('In EFSA’s European data, swordfish averaged about 1,212 µg/kg total mercury and salmon and trout about 33 µg/kg.', [EH])), 'EFSA 2012 Table A9; FDA TDS; CFS 2013 Table E; FDA/EPA chart'),
 ('ING-FAQ-05', 'Does where fish come from affect its metal levels?',
  P(('For mercury, species and size matter more than country; origin comparisons for the same species are few and mostly use purchase country rather than catch area.', [ULU, WAT]),
    ('For lead and cadmium, origin matters most at polluted rivers, lagoons and coasts, where some local surveys report much higher values than national monitoring.', [ABB, G])), 'Ulusoy 2023 Table 4; GEMS/Food; Abbas 2023 Table 2'),
 ('FISH-FAQ-01', 'Is farmed fish safer than wild fish?',
  P(('For mercury, farmed salmon, bluefin tuna and yellowtail measured lower than wild fish in the same studies.', [SAL, BFT, WAT]),
    ('This did not hold for every metal: arsenic was higher in a farmed US coho salmon, and farmed fish in polluted water can carry more cadmium or lead.', [LUV, ABB])), 'Lerøy/authors 2020 Table 5; Malta/Sardinia Table 3; Watanabe Table 2'),
 ('FISH-FAQ-02', 'How much mercury is in canned tuna?',
  P(('US canned light tuna in water had a median of 220 µg/kg total mercury, and Italian cans of skipjack and yellowfin ranged from 50 to 290 µg/kg.', [F, PAP]),
    ('Canned tuna bought in 36 countries had country means from 20 to 950 µg/kg, all below the Codex tuna limit of 1,200 µg/kg methylmercury.', [ULU, CX])), 'FDA TDS tuna; Pappalardo Table II; Ulusoy Table 4; Codex Annex I'),
 ('ING-FAQ-10', 'What is the difference between total mercury and methylmercury in fish?',
  P(('Total mercury counts all forms; methylmercury is the toxic organic form that makes up most of it in fish muscle, about 60–90% in Japanese retail fish.', [WAT]),
    ('Limits use either one, so a result must name which was measured.', [EU, CX, CN])), 'Watanabe 2017 Results 4; EU 2023/915; Codex; GB 2762'),
 ('FISH-FAQ-03', 'Is the arsenic in fish dangerous?',
  P(('Most arsenic in fish is arsenobetaine, which EFSA notes is widely assumed to be of no toxicological concern; inorganic arsenic, the form of concern, averaged 0.7–20 µg/kg across European fish species at the lower bound.', [EAO, EI]),
    ('The EU now limits inorganic arsenic in fish to 100 µg/kg, or 500 µg/kg for flatfish, haddock and anglerfish.', [EUA])), 'Brooke 1981 Table V; EFSA 2014 Table 10; Reg. 2025/1891'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in fish?',
  P(('Yes: the EU sets total mercury at 300–1,000 µg/kg by species, cadmium at 50–250 µg/kg, lead at 300 µg/kg and inorganic arsenic at 100–500 µg/kg in fish muscle.', [EU, EUA]),
    ('Codex sets methylmercury at 1,200 µg/kg for tuna and 1,600 µg/kg for shark, and the US uses a 1 mg/kg methylmercury action level.', [CX, ATS])), 'EU 2023/915 Annex I 3.1.15, 3.2.14, 3.3.1; Reg. 2025/1891; Codex; ATSDR Table 7-1'),
 ('ING-FAQ-14', 'Does cooking fish remove mercury?',
  P(('No: cooking leaves mercury in the fish and raises its concentration as water is lost, as boiled, fried and baked cod showed.', [COD]),
    ('Cooked tuna delivered as much methylmercury to the blood of test animals as raw tuna.', [CK])), 'Cod Table 4; Tuna pig study Table 2'),
 ('ING-FAQ-09', 'Can processing remove heavy metals from fish?',
  P(('No ordinary processing step in the evidence lowered mercury; a laboratory cysteine soak removed about 13–38% of mercury from tuna, but it is not an approved commercial or household method.', [CYS]),
    ('Cooking, canning and drying change concentrations mainly through water loss.', [COD, F])), 'Cysteine study Figs 2–5; Cod Table 4'),
 ('FISH-FAQ-04', 'Do fish oil supplements contain mercury?',
  P(('Fish oil supplements tested in Serbia averaged 1.9 µg/kg mercury, with a maximum of 5.7 µg/kg.', [TOV]),
    ('The EU limit for mercury in food supplements is 100 µg/kg.', [EU])), 'Torović 2024; EU 2023/915 3.3.2'),
 ('ING-FAQ-13', 'Which fish should pregnant women and children choose?',
  P(('US advice recommends 8–12 ounces (two to three servings) a week of lower-mercury fish such as salmon, sardines, cod, pollock, tilapia and trout, and avoiding shark, swordfish, king mackerel, marlin, orange roughy, Gulf tilefish and bigeye tuna.', [ADV]),
    ('This follows the measured species differences in mercury.', [EH, HK])), 'FDA/EPA advice chart'),
 ('ING-FAQ-16', 'How much fish is safe to eat each week?',
  P(('No single amount applies to every fish: national advice sets servings by species group and life stage, such as two to three servings a week of lower-mercury fish in US advice for pregnancy.', [ADV, ESC]),
    ('JECFA’s tolerable weekly intake for methylmercury is 1.6 µg/kg body weight; how quickly a diet reaches it depends on the species eaten.', [JE])), 'FDA/EPA advice; EFSA 2015; JECFA 61'),
 ('ING-FAQ-17', 'Should I stop eating fish because of mercury?',
  P(('Health agencies advise choosing lower-mercury species rather than avoiding fish, because fish supply omega-3 fatty acids and other nutrients.', [ESC, ADV]),
    ('Limiting the highest-mercury species makes the largest difference to intake.', [ESC])), 'EFSA SC 2015; FDA/EPA advice'),
 ('ING-FAQ-06', 'Do fish fingers and other fish products contain heavy metals?',
  P(('They are usually low in mercury because they are made from white fish: US fish sticks had 6 µg/kg total mercury and German baked fish fillets 20 µg/kg methylmercury.', [F, BFR]),
    ('No study measured a product alongside the fish used to make it.', [])), 'FDA TDS fish sticks; BfR 2024 Table 1'),
 ('FISH-FAQ-05', 'Are smaller fish lower in mercury?',
  P(('Within a species, yes in the measured studies: young yellowtail averaged 80 µg/kg against 520 µg/kg in adults, and pike under 600 mm had less than half the mercury of larger pike.', [WAT, JER])), 'Watanabe Results 2; Jermilova Results'),
 ('FISH-FAQ-06', 'Can aluminium foil add metals to cooked fish?',
  P(('Yes, with acidic or salty marinades: fish baked in foil with lemon and salt took up 4,560–21,000 µg/kg aluminium, while fish baked in glass had none detected.', [DOR])), 'Dordević 2019 Table 2'),
 ('ING-FAQ-03', 'Is organic or sustainably labelled fish lower in metals?',
  P(('No source in the evidence compared organic-certified or eco-labelled fish with conventional fish for metals, so there is no measured answer.', []),
    ('Species, size and the water the fish lived in are the measured drivers.', [EH, JER])), 'No comparison in the ledger'),
 ('FISH-FAQ-07', 'How is fish tested for mercury?',
  P(('Laboratories measure total mercury and, where needed, methylmercury by speciation methods; Codex treats a total mercury result at or below the methylmercury limit as compliant.', [CX, WAT]),
    ('Samples are taken from muscle, near the tail for tuna, in lots of one species and size.', [CX])), 'Codex CCCF17 Appendix III'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-fish-v1', 'family': 'ingredient', 'slug': 'fish', 'title': 'Fish', 'display_title': 'Fish', 'version': 1, 'date': '2026-10-22',
     'description': 'Mercury, cadmium, lead and arsenic in fish: species and size differences, farmed and wild fish, cooking and canning, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Fish FAQs', 'aliases': []},
     'scope': {'analytes': 'Total, methyl, inorganic and unspecified mercury; Cd; Pb; total, inorganic, organic and unspecified arsenic species; Ni; Cr; Cr(VI); Al; Sn; Sb; U',
               'material_form': 'Finfish flesh and fish products (fresh, cooked, canned, smoked/dried/salted/fermented, oils, sauces, products); shellfish, offal, feed and infant foods excluded',
               'basis': 'As reported: wet weight, dry weight or not stated; µg/kg; no moisture conversion without source data; mg/L results left unconverted',
               'geography_market': 'Catch or farm area, sampling site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years as reported; unreported dates stay unknown', 'stage': 'Capture, aquaculture, processing, cooking, packaging, lot release and consumer advice',
               'population_route': 'Dietary ingestion; total diet study exposure and official intake guidance', 'comparator_outcome': 'HMI references within species group, form, analyte and basis; same-study farmed/wild, preparation and total contrasts'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to fish or naming fish or its aliases, plus fish rows in GEMS/Food, FDA TDS and HMI indexes',
                'protocol_ref': 'data/evidence/contracts/fish/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/fish/extraction/'],
                'screening_ref': 'data/evidence/contracts/fish/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'Supplementary per-fish tables not in the library were not retrieved'],
                'unresolved_access': ['Access-blocked records listed in the evidence ledger with retrieval requests']},
     'source_catalogue': {'topic': 'ingredients/fish'}, 'retain_history_only': True,
     'key_evidence': [
       {'label': 'Species', 'text': 'Mean total mercury ran from about 33 µg/kg in salmon and trout to 1,212 µg/kg in swordfish in European data.', 'href': '#which-species-and-sources-measured-lower', 'link_label': 'Variation'},
       {'label': 'Limits', 'text': 'The EU sets 300–1,000 µg/kg total mercury by species; Codex 1,200 µg/kg methylmercury for tuna.', 'href': '#buying-and-verifying-fish', 'link_label': 'Limits by market'},
       {'label': 'Key distinction', 'text': 'Most fish arsenic is organic; inorganic arsenic averaged under 20 µg/kg across European fish species.', 'href': '#how-metals-reach-fish', 'link_label': 'Pathways'}]}

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

quick = P(('Mercury is the metal to check in fish, and species is the main driver: mean total mercury in European data ran from about 33 µg/kg in salmon and trout to 1,212 µg/kg in swordfish.', [EH, G]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Methylmercury in large predatory fish; lead and cadmium are usually low in monitored fish, and most arsenic is organic.', [EH, F, EI]),
 ('Main drivers', 'Species, size and age, farmed or wild origin, and polluted waters for cadmium and lead.', [EH, JER, SAL, ABB]),
 ('Practical framing', 'Choose lower-mercury species and ask for wet-weight lot results naming total mercury or methylmercury.', [ADV, CX])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-fish-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-07', 'status': 'covered', 'reason': 'Health meaning is answered through intake limits and advice in ING-FAQ-13, ING-FAQ-16 and the Exposure section; no individual risk claim is made from occurrence data.'},
 {'id': 'ING-FAQ-11', 'status': 'not_applicable', 'reason': 'Fish has no whole/refined fraction pair; skin and fat removal is covered in ING-FAQ-09.'},
 {'id': 'ING-FAQ-12', 'status': 'covered', 'reason': 'Farmed versus wild (FISH-FAQ-01) is the confused-alternative question with direct evidence.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking in water is not an assessed fish preparation; the laboratory cysteine soak is covered in ING-FAQ-09.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
import re
def meta(sid):
    t = (root / f'wiki/sources/{sid}.md').read_text()
    fm = t.split('---')[1]
    doi = re.search(r'^doi:\s*["\']?([^"\'\n]+)', fm, re.M); url = re.search(r'^(?:access_url|url|source_url):\s*["\']?([^"\'\n]+)', fm, re.M)
    d = doi.group(1).strip() if doi and doi.group(1).strip() not in ('null', '') else None
    return f'https://doi.org/{d}' if d else (url.group(1).strip() if url else f'../sources/{sid}')
def control(i, sid, label, _url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, audiences=('supplier', 'brand')):
    return {'id': f'fish-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': meta(sid), 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/fish.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Fish', 'audiences': list(audiences),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, nutrition and cost not quantified unless stated.',
            'verification_summary': 'Confirm with species-specific lot results on wet weight naming the analyte species.', 'comparator': comparator,
            'source_design_kind': kind, 'design': {'observational': 'Observational comparison', 'measured': 'Measured comparison', 'guidance': 'Official guidance'}.get(kind, 'Author or review guidance'),
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces the metal in fish as caught, sold or eaten, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Wet weight unless stated.',
            'other_contaminants': 'Not assessed unless stated.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'Keep effects unquantified unless measured in the source.'}],
            'review': {'record_ref': 'data/evidence/contracts/fish/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, unit='µg/kg', basis='Fish muscle, wet weight'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': unit, 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported values; see the source for design and replication.'}
controls = [
 control(1, JER, 'Jermilova et al. 2025', 'https://doi.org/10.1016/j.scitotenv.2025.178706', 'capture and landing', 'Select smaller fish within a species', 'observational', 'Northern pike, Great Slave Lake, Canada',
   'Modelled mean mercury in pike under 600 mm was about two to three times lower than in pike of 600 mm or longer.', 'Large (≥600 mm) versus small (<600 mm) pike, same lake area.',
   [out('Hg_unspecified', 'lower', 740, 300, 'Lower in smaller fish (observational)', 'Mean muscle mercury', 'Large versus small pike, GSL Outlet', 'Results, Risk to human health')],
   'Freshwater predatory fish; one basin.', 'Model-based means from monitoring data; mercury form not stated.', 'Monitoring dataset', ('supplier', 'brand', 'consumer')),
 control(2, WAT, 'Watanabe et al. 2017', 'https://doi.org/10.3358/shokueishi.58.80', 'sourcing and procurement', 'Prefer younger fish of the same species', 'observational', 'Retail yellowtail, Japan',
   'Young yellowtail (inada) averaged 80 µg/kg total mercury against 520 µg/kg in natural adult yellowtail.', 'Young versus adult yellowtail at retail, 2014–2015.',
   [out('tHg', 'lower', 520, 80, 'Lower in young fish (observational)', 'Mean total mercury', 'Adult versus young yellowtail', 'Results 2, p. 84')],
   'One species and market.', 'Retail sampling; sizes not standardised.', 'Retail survey'),
 control(3, SAL, 'Lerøy salmon study 2020', 'https://doi.org/10.1016/j.fct.2020.111222', 'aquaculture', 'Farmed rather than wild Atlantic salmon for lower mercury', 'observational', 'Atlantic salmon fillets, northern Norway',
   'Farmed salmon averaged 18 µg/kg total mercury against 56 µg/kg in wild salmon, while arsenic was 860 against 2,560 µg/kg.', 'Farmed versus wild salmon from the same coast, 2017–2018.',
   [out('tHg', 'lower', 56.3, 18.1, 'Lower in farmed salmon (observational)', 'Mean fillet total mercury', 'Wild versus farmed', 'Table 5'),
    out('As_unspecified', 'lower', 2560, 860, 'Lower in farmed salmon (observational)', 'Mean fillet arsenic', 'Wild versus farmed', 'Table 5')],
   'One farm and one wild stock.', 'Observational; farm feed and site not varied.', 'Field comparison'),
 control(4, BFT, 'Bluefin farming study 2019', 'https://doi.org/10.1016/j.marpolbul.2019.110594', 'aquaculture', 'Ranched bluefin tuna versus wild-caught adults', 'observational', 'Atlantic bluefin tuna muscle, Malta and Sardinia',
   'Bluefin fattened on a Maltese farm averaged 610 µg/kg total mercury against 1,680 µg/kg in large wild bluefin from Sardinia.', 'Farmed (Malta, 2015) versus wild (Sardinia, 2017).',
   [out('tHg', 'lower', 1680, 610, 'Lower in farmed bluefin (observational)', 'Mean muscle total mercury', 'Wild versus farmed', 'Table 3')],
   'Ranched fish differ in size and diet from the wild fish sampled.', 'Different years and sizes; not a controlled comparison.', 'Field comparison'),
 control(5, ZAH, 'Zahran et al. 2023', 'https://doi.org/10.1007/s12011-023-03562-x', 'aquaculture', 'Microalga feed supplement in mercury-exposed tilapia', 'measured', 'Nile tilapia, laboratory exposure',
   'Feeding 5–10% Nannochloropsis lowered muscle mercury in tilapia dosed with mercury in water, compared with dosed fish on the basal diet.', 'Dosed fish with versus without supplement.',
   [out('Hg_unspecified', 'lower', None, None, 'Lower with supplement in dosed fish', 'Muscle mercury', 'Supplemented versus basal diet', 'Results; Table 3')],
   'Laboratory dosing far above environmental levels.', 'Mechanistic; not a farm trial; text gives inconsistent values.', 'Laboratory'),
 control(6, ABD, 'Abdel-Tawwab et al. 2023', 'https://doi.org/10.1007/s12011-023-03688-y', 'aquaculture', 'Dietary yeast in cadmium-exposed seabream', 'measured', 'Gilthead seabream, laboratory exposure',
   'Dietary baker’s yeast lowered muscle cadmium in seabream exposed to 1–2 mg/L cadmium in water.', 'Yeast-supplemented versus unsupplemented exposed fish.',
   [out('Cd', 'lower', None, None, 'Lower with supplement in dosed fish', 'Muscle cadmium', 'Supplemented versus control diet', 'Table 4')],
   'Laboratory dosing far above environmental levels.', 'Printed units implausible; values not converted.', 'Laboratory'),
 control(7, CYS, 'Mercury removal study 2024', 'https://doi.org/10.1016/j.foodchem.2024.139420', 'food processing', 'Cysteine soaking of tuna meat', 'measured', 'Canned and fresh tuna',
   'Soaking in 1.2% cysteine solution extracted about 13% of mercury from whole canned tuna and 36–38% from minced canned tuna.', 'Untreated control tuna.',
   [out('tHg', 'lower', None, None, 'About 13–38% extracted (laboratory)', 'Mercury removed from tuna meat', 'Treated versus untreated', 'Figures 2–5')],
   'Laboratory treatment; not an approved process.', 'Values read from figures.', 'Laboratory'),
 control(8, COD, 'Cod cooking study 2020', 'https://doi.org/10.1016/j.jfca.2020.103581', 'home preparation', 'Do not rely on cooking to lower mercury', 'measured', 'Atlantic cod fillets',
   'Boiling, pan-frying and oven-baking left mercury per fillet unchanged; concentration rose with water loss (33 to 43 µg/kg after frying).', 'Raw half versus cooked half of the same fillet.',
   [out('tHg', 'higher', 33, 43, 'Higher concentration after frying', 'Total mercury per kg', 'Raw versus pan-fried', 'Table 4'),
    out('tHg', 'higher', 29, 32, 'Higher concentration after boiling', 'Total mercury per kg', 'Raw versus boiled', 'Table 4')],
   'Household cooking of white fish.', 'Ten fillets per method.', 'Laboratory kitchen', ('consumer', 'brand')),
 control(9, DOR, 'Dordević et al. 2019', 'https://doi.org/10.17221/179/2018-CJFS', 'home preparation', 'Avoid acidic marinades on fish baked in aluminium foil', 'measured', 'Salmon and mackerel fillets baked in foil',
   'Marinated fish baked in aluminium foil took up 4,560–21,000 µg/kg aluminium; unmarinated fish under 1,140 µg/kg and fish baked in glass none detected.', 'Marinated versus unmarinated, foil versus glass.',
   [out('Al', 'higher', 540, 21000, 'Higher with marinade in foil', 'Aluminium in baked fish', 'Unmarinated versus marinated salmon, foil', 'Table 2')],
   'Baking in foil with lemon and salt.', 'One laboratory; foil brands varied.', 'Laboratory kitchen', ('consumer', 'brand')),
 control(10, TRA, 'Trandafir et al. 2012', 'https://doi.org/10.1007/s10812-012-9590-z', 'packaging and storage', 'Use resin-coated cans for fish', 'observational', 'Canned tuna and other canned foods',
   'Tuna in resin-coated cans had 700 µg/kg tin against up to 73,680 µg/kg in acidic tomato products in uncoated cans.', 'Coated tuna cans versus acidic fruit and vegetable cans.',
   [out('Sn', 'lower', None, 700, 'Low tin in coated cans', 'Tin in canned tuna', 'Coated tuna can', 'Table 3')],
   'Canned fish.', 'Different foods compared; not a controlled can trial.', 'Market survey'),
 control(11, CX, 'Codex CCCF17 2024', 'https://www.fao.org/fao-who-codexalimentarius', 'lot acceptance and release', 'Lot sampling for methylmercury with total mercury screening', 'guidance', 'Fish lots in trade',
   'Lots are grouped by one species and comparable size; a total mercury result at or below the methylmercury limit is compliant, otherwise methylmercury is measured.', 'Codex methylmercury limits (tuna 1,200 µg/kg; shark 1,600 µg/kg).',
   [out('MeHg', 'context', None, None, 'Detection, not removal', 'Lot compliance decision', 'Sampling plan', 'Appendix III')],
   'International trade lots.', 'Guidance; no measured effect.', 'Official guidance'),
 control(12, ADV, 'FDA/EPA fish advice', 'https://www.fda.gov/food/consumers/advice-about-eating-fish', 'dietary exposure', 'Choose lower-mercury species', 'guidance', 'Fish eaten by pregnant women and children',
   'Two to three servings a week from Best Choices such as salmon, sardines, cod and tilapia; avoid shark, swordfish, king mackerel, marlin, orange roughy, Gulf tilefish and bigeye tuna.', 'Best Choices versus Choices to Avoid categories.',
   [out('MeHg', 'context', None, None, 'Lower intake by species choice (guidance)', 'Dietary methylmercury', 'Category choice', 'Advice chart')],
   'US consumers, pregnancy and childhood.', 'Guidance; categories based on FDA monitoring.', 'Official guidance', ('consumer',)),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
