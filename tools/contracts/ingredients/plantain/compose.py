"""Compose the plantain synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/ingredient-rollout-2026-10-22/plantain/extraction/ and to the
verified limits in regulatory-plantain.json. Plantain is the cooking banana; dessert banana
and the herb Plantago are different foods and no value is borrowed from them.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain'

gems = 'who-gemsfood-heavy-metal-contaminants'; adj = 'adjeimensah2021-ghana-mining-home-processing-crops'
bor = 'borteysam2015-tarkwa-cassava-plantain-soil-metals'; ori = 'orisakwe2012-owerri-food-crops-fruits-metals'
eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'; co = 'colombiaminsalud2013-resolucion-4506-contaminants'
atr = 'authors2023-health-risk-assessment-for-human-exposure-to-heavy'; iya = 'iyabo2015-ekiti-staple-foods-metals'
kow = 'kowalska2021-metals-herbs-spices-tea-coffee-poland'; mod = 'mode2026-calcium-carbide-ripening-climacteric-fruits'

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
 P(('Plantain has little monitoring data for metals, and the evidence that exists points in two directions.', []),
   ('Plantain submitted to WHO GEMS/Food was mostly low: three cooked plantain samples from the WHO African region in 2018 had lead of 5 µg/kg or less and no detectable cadmium, mercury or arsenic, and four of five fresh plantain samples from the Americas in 2014–2016 had 1.5 µg/kg lead or less than detection limits of 1–5 µg/kg.', [gems]),
   ('The exception was one imported fresh plantain in 2016 at 174 µg/kg lead, above the 100 µg/kg limit that Codex and the EU apply to fruit.', [gems, cx, eu])),
 P(('Plantain grown beside rivers used for illegal gold and diamond mining in Ghana measured far higher.', []),
   ('Raw peeled pulp from farms at Obuasi and Akwatia averaged 1,020 and 1,110 µg/kg lead and 120–130 µg/kg mercury in 2019, on a basis the paper does not state but that appears to be the wet pulp.', [adj]),
   ('Plantain from farms around the Tarkwa gold mines, sampled in 2012, had a geometric mean of only 7 µg/kg lead, so a mining district alone does not predict high lead.', [bor]),
   ('Ripening can add arsenic: in a Nigerian experiment, plantain ripened with calcium carbide had 5,930–9,940 µg/kg total arsenic against 1,640 µg/kg when ripened naturally, although that study’s arsenic levels are far above all other plantain data.', [mod])),
 P(('For a buyer, the supported priority is lead, measured on the edible pulp on a stated fresh-weight basis with a method that can see well below 100 µg/kg, together with the farm area where the plantain grew.', [eu, co, gems]),
   ('In the one study that tested household cooking, boiling and frying left lead at 40–70 µg/kg from about 1,000 µg/kg in the raw pulp, a change in concentration rather than a measured removal.', [adj])),
],
'identity': [
 P(('This page covers plantain, the starchy cooking banana (Musa, often written Musa × paradisiaca), eaten cooked or as chips.', [gems, adj]),
   ('It does not cover the sweet dessert banana, which has its own page, and no banana value is used here.', []),
   ('The herb also called plantain, Plantago (ribwort or narrowleaf plantain), is a different plant used in teas and herbal products, so its results are excluded.', [gems, kow])),
 P(('Mixed dishes are also outside this page.', []),
   ('A Nigerian survey reported metals in "beans with plantain", but the plantain’s share of that dish cannot be separated from the beans.', [iya]),
   ('A Colombian study listed "Musa × paradisiaca" among local fruits without saying whether it meant plantain or banana, and its plant concentrations sit in a supplement the library does not hold.', [atr])),
],
'occurrence': [
 P(('The table holds every plantain result extracted from five sources: 23 individual WHO GEMS/Food records, three field studies from Ghana and Nigeria and one Nigerian ripening experiment, one row for each statistic a source reports for a subgroup and metal.', [gems, adj, bor, ori, mod]),
   ('Fresh, cooked, dry-weight, ripened and unstated-basis results are kept apart because no study reported the moisture needed to convert between them.', [adj, bor, ori, mod]),
   ('No plantain basis yet has the four reference units needed for an HMI rating, so the comparisons shown are within two studies: boiled, fried and roasted portions cut from the same raw Ghanaian samples, and carbide-ripened against naturally ripened plantain from one bunch.', [adj, mod, gems])),
 P(('Four values are held and shown without comparison: three Tarkwa cells whose digits cannot be read unambiguously in the library’s copy, and one ripening-study control lead value printed identically to that study’s mango result.', [bor, mod]),
   ('Non-detects remain intervals up to their reporting limit and are never read as zero.', [gems])),
],
'pathways': [
 P(('The plantain studies point to soil, river water and dust in mining areas as the main sources.', []),
   ('In Ghana, farms beside rivers used for illegal small-scale mining produced plantain pulp with about 1 mg/kg lead and 0.12–0.13 mg/kg mercury.', [adj]),
   ('Around Tarkwa, soil-to-plantain transfer was lowest for chromium and highest for nickel (mean factor 2.2, the only metal above 1), and transfer did not correlate with soil pH or organic matter.', [bor])),
 P(('Arsenic may also arrive from the air.', []),
   ('The Tarkwa authors linked arsenic in plantain, an aerial fruit, to wind-borne arsenic from ore roasting rather than to soil uptake, an explanation they did not test.', [bor]),
   ('Plantain is eaten peeled, and the Ghanaian study washed and peeled every sample before analysis, so none of the measured values includes the peel.', [adj])),
 P(('Contamination can also be added after harvest.', []),
   ('The technical calcium carbide used to ripen fruit in a Nigerian experiment contained 21.75 mg/kg arsenic and 0.881 mg/kg lead, and plantain ripened with it had more arsenic than plantain ripened naturally.', [mod])),
],
'variation': [
 P(('For lead, the lowest results come from monitored plantain and from the Tarkwa farms.', [gems, bor]),
   ('Three cooked samples from the WHO African region (below 1.3 to 5 µg/kg) and four of five fresh samples from the Americas (1.5 µg/kg or below detection limits of 1–5 µg/kg) were lowest, followed by Tarkwa farm plantain (median 5 µg/kg, range 2.2–20 µg/kg).', [gems, bor]),
   ('The highest were raw pulp from Ghanaian farms on mining-polluted rivers (1,020–1,110 µg/kg) and one imported fresh sample in the Americas (174 µg/kg).', [adj, gems]),
   ('These are lowest observed values in different studies with different bases and methods, not a ranking of countries or a sourcing preference.', [])),
 P(('The two Ghanaian mining districts show why origin alone is not a reliable guide.', []),
   ('Tarkwa plantain in 2012 and Obuasi and Akwatia plantain in 2019 all grew in gold or diamond mining areas, yet their lead differed more than fiftyfold even allowing for the unclear bases.', [bor, adj]),
   ('The studies differ in year, basis and method, and the Ghanaian farms sat on rivers used for mining, so the gap cannot be attributed to any one cause.', [adj, bor])),
 P(('Cadmium, mercury and arsenic were usually low.', [gems, bor, adj]),
   ('Cadmium was below 0.3 µg/kg in cooked monitoring samples and about 1 µg/kg at Tarkwa, though one Nigerian study reported 110 µg/kg on a dry-weight basis.', [gems, bor, ori]),
   ('Mercury was below 4.2 µg/kg in monitoring and 1 µg/kg at Tarkwa, but 120–130 µg/kg in the Ghanaian mining-river plantain.', [gems, bor, adj]),
   ('Arsenic was below 1–20 µg/kg in monitoring and 12–20 µg/kg in the Ghanaian studies, but the Sokoto ripening study reported 1,640 µg/kg in naturally ripened plantain, with no detection limit or quality control reported, so that level is not comparable.', [gems, bor, adj, mod]),
   ('Nickel is high wherever it was measured: 3,600 µg/kg geometric mean at Tarkwa and 1,000 µg/kg dry weight in Owerri, Nigeria.', [bor, ori])),
],
'processing': [
 P(('Only one study measured household processing of plantain, and it gives within-study comparisons from the same samples.', [adj]),
   ('Boiling and frying lowered lead in peeled pulp from 1,020–1,110 µg/kg to 40–70 µg/kg at both towns, while roasting left 130 µg/kg at Obuasi and 750 µg/kg at Akwatia.', [adj]),
   ('Mercury fell from 130 to 40–50 µg/kg after boiling or frying of Akwatia plantain, but changed little at Obuasi or after roasting.', [adj])),
 P(('These are changes in concentration on a basis the paper does not state, without moisture or mass-balance data, so they do not show how much metal left the food.', [adj]),
   ('Arsenic changes sit at the paper’s 0.01 mg/kg reporting step and cannot be distinguished.', [adj]),
   ('Plantain chips, a common processed form, had 0.75 µg/kg inorganic arsenic in the single monitoring record, just above its 0.66 µg/kg detection limit.', [gems])),
 P(('Ripening is the other measured step.', []),
   ('Plantain ripened with 10 or 30 g of calcium carbide per kg of fruit had 5,930 and 9,940 µg/kg total arsenic against 1,640 µg/kg in naturally ripened fruit from the same bunch, significant increases in the authors’ analysis.', [mod]),
   ('Lead rose to 143–183 µg/kg in the carbide groups, but the natural-ripening lead value is printed identically to the mango control, so that comparison is not used; cadmium stayed at 1–3 µg/kg without a significant change.', [mod])),
],
'controls': [
 P(('Controls for plantain act at the farm, in the kitchen and at the lot test.', []),
   ('The only measured control is household cooking in one Ghanaian study, where boiling and frying gave much lower lead concentrations than raw pulp and roasting gave less change.', [adj]),
   ('Ripening without calcium carbide is supported by one controlled experiment in which carbide raised arsenic in plantain.', [mod]),
   ('Farm siting and lot testing rest on observational evidence and on the fruit limits of Codex, the EU and Colombia.', [bor, cx, eu, co])),
],
'tradeoffs': [
 P(('Cooking is not a substitute for clean supply.', []),
   ('Even after boiling, plantain from the mining-river farms carried 60–70 µg/kg lead, more than every monitoring result except one, and roasting at Akwatia still left 750 µg/kg.', [adj, gems]),
   ('Mercury in Obuasi plantain stayed near 100–110 µg/kg after every method.', [adj])),
 P(('Frying changed lead concentration about as much as boiling, but it adds oil and was tested only in the laboratory with fresh oil.', [adj]),
   ('Moving away from a mining district is also not enough on its own: Tarkwa plantain was low in lead but still high in nickel, which transferred from soil more readily than any other metal.', [bor])),
],
'testing': [
 P(('A useful plantain lead test must report the edible pulp, its basis and a limit well below 100 µg/kg.', [eu, co]),
   ('Monitoring laboratories reported lead limits of 1–5 µg/kg, while the Ghanaian processing study reported results only to 0.01 mg/kg (10 µg/kg) and gave no usable detection limit.', [gems, adj]),
   ('The European arsenic submissions covered the whole fruit including inedible parts, two with a 20 µg/kg detection limit, so they cannot be compared with pulp results.', [gems])),
 P(('State fresh or dry weight every time.', []),
   ('The Tarkwa study labels its plantain results wet weight in one place and dry weight in another, and the Owerri study analysed dried powder without labelling its table.', [bor, ori]),
   ('Arsenic in plantain was measured as total arsenic except in one plantain-chip record that measured inorganic arsenic, and the ripening study did not describe how it measured arsenic by AAS or its detection limit.', [gems, bor, mod])),
],
'procurement': [
 P(('Ask for lot-specific lead results on the washed, peeled edible part, on a fresh-weight basis, with the laboratory’s quantification limit.', [eu, co]),
   ('The EU sets 0.10 mg/kg (100 µg/kg) lead for fruit other than a few named berries, wet weight after washing and separating the edible part; Codex and Colombia also set 0.1 mg/kg for fruit.', [eu, cx, co]),
   ('For cadmium the EU sets 0.020 mg/kg for bananas and 0.050 mg/kg for most other fruit, and Colombia sets 0.050 mg/kg; whether EU law files plantain under bananas was not confirmed for this review.', [eu, co])),
 P(('Record the farm area and any nearby mining or polluted irrigation water, not only the market where the plantain was bought.', [adj, gems]),
   ('Monitoring records give only a reporting region, and several submissions were imported, so the growing area of the highest monitoring result is unknown.', [gems]),
   ('Ask how the fruit was ripened, since carbide ripening raised arsenic in the one study that tested it.', [mod])),
],
'product': [
 P(('Plantain is a staple in parts of West Africa, so its metal content matters more there than its small share of most Western diets.', []),
   ('The Ghanaian processing study assumed average consumption of 101.8 kg of plantain per person per year.', [adj]),
   ('No source in the ledger estimates plantain’s share of dietary metal intake in a way that can be checked: the Ghanaian study’s intake and hazard tables do not follow from its own concentration table.', [adj])),
 P(('For most plantain eaten cooked, the monitoring results suggest little lead, cadmium, mercury or arsenic.', [gems]),
   ('Where plantain grows beside mining-polluted rivers, the raw pulp was far above the 100 µg/kg fruit lead limit, and boiled or fried portions (40–70 µg/kg) still exceeded every monitoring result except the single 174 µg/kg import.', [adj, eu, gems])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to plantain or mentions it, every plantain row in WHO GEMS/Food, and library papers found by searching their text for plantain and its scientific name.', []),
   ('Four studies had no source record and are proposed for addition, two of them checked against publisher PDFs supplied for this review; two other library papers measured only plantain leaves or pooled plantain with other vegetables and are not used.', [adj, bor, ori, mod]),
   ('One Colombian study is access-blocked because its plantain-like results are only in an online supplement.', [atr])),
 P(('The evidence is thin: five sampling families, no total diet study, very few monitoring records and no cultivar comparisons.', [gems]),
   ('Total diet studies and monitoring from Nigeria, Ghana, Cameroon, Côte d’Ivoire, Uganda and the plantain-eating countries of Latin America are the main gaps.', [])),
],
}

headings = {'summary': 'Plantain overview', 'identity': 'What counts as plantain', 'occurrence': 'Heavy metal contamination profile of plantain',
 'pathways': 'How metals reach plantain', 'variation': 'Which plantain forms and origins measured lower', 'processing': 'Cooking and processing',
 'controls': 'Mitigation from farm to plate', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing plantain for metals',
 'procurement': 'Buying and verifying plantain', 'product': 'Exposure from plantain', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Plantain is the cooking banana (Musa AAB/ABB, often Musa × paradisiaca): fresh, cooked, chips and flour.', gems, adj),
             A('Dessert banana, the herb Plantago and mixed dishes containing plantain are excluded.', kow, iya, ori),
             A('Fresh, cooked, dry-weight and unstated-basis results are not converted or pooled.', adj, bor, ori)],
'summary': [A('Monitored plantain is mostly low; one 2016 import in the Americas had 174 µg/kg lead.', gems, cx, eu),
            A('Plantain from Ghanaian mining-river farms had about 1,000 µg/kg lead and 120–130 µg/kg mercury raw.', adj),
            A('Lot lead results on edible pulp, fresh weight, with an adequate quantification limit are the supported buyer control.', eu, co)],
'occurrence': [A('Pb, Cd, total As, inorganic As (chips), total Hg, Ni and total Cr are reported in five sources.', gems, adj, bor, ori, mod),
               A('No basis has four HMI reference units; comparisons are within-study processing and ripening contrasts.', gems, adj, mod),
               A('Three Tarkwa cells and one ripening-study control lead value are held.', bor, mod)],
'pathways': [A('Soil, river water and dust in mining areas are the supported sources.', adj, bor),
             A('Soil-to-plantain transfer was lowest for chromium and above 1 only for nickel.', bor),
             A('Calcium carbide used for ripening raised plantain arsenic in one controlled study.', mod)],
'variation': [A('Lowest lead: monitored cooked and fresh plantain and Tarkwa farm plantain.', gems, bor),
              A('Highest lead: raw pulp from Ghanaian mining-river farms; one imported fresh sample at 174 µg/kg.', adj, gems),
              A('No cultivar comparisons and no supported country preference; mining districts differed a hundredfold.', adj, bor)],
'processing': [A('Boiling and frying lowered lead concentration from about 1,000 to 40–70 µg/kg in one study.', adj),
               A('Roasting changed lead less (130 and 750 µg/kg) and mercury hardly at all.', adj),
               A('Calcium carbide ripening raised total arsenic from 1,640 to 5,930–9,940 µg/kg in one study.', mod)],
'controls': [A('Household boiling or frying: measured within-study concentration change.', adj),
             A('Natural ripening rather than calcium carbide: one controlled experiment.', mod),
             A('Lot testing against the 100 µg/kg fruit lead limit detects lead; it does not remove it.', eu, cx, co)],
'tradeoffs': [A('Cooked mining-river plantain still exceeded nearly every monitoring result for lead.', adj, gems),
              A('Mercury persisted after cooking at Obuasi.', adj),
              A('Low-lead sites can still carry high nickel.', bor)],
'testing': [A('Lead limits of 1–5 µg/kg are achievable; some studies reported only to 10 µg/kg.', gems, adj),
            A('Basis must be stated; Tarkwa contradicts itself on wet versus dry weight.', bor, ori),
            A('Arsenic is total except one inorganic arsenic chip record; the ripening study gives no arsenic detection limit.', gems, mod)],
'procurement': [A('EU, Codex and Colombia set 0.1 mg/kg lead for fruit; EU cadmium 0.020 for bananas, 0.050 other fruit.', eu, cx, co),
                A('Record the growing farm and nearby mining or irrigation water, not only the market.', adj, gems),
                A('Whether EU law files plantain under bananas was not confirmed.', eu)],
'product': [A('Plantain is a West African staple; one study assumed 101.8 kg per person per year in Ghana.', adj),
            A('No checkable estimate of plantain’s share of dietary metal intake exists in the ledger.', adj),
            A('Raw mining-river plantain was far above the fruit lead limit.', adj, eu)],
'assessment': [A('Every plantain record and GEMS/Food row dispositioned; four studies proposed as new source records.', gems, adj, bor, ori, mod),
               A('Access gap: the Atrato (Colombia) supplement with per-species plant concentrations.', atr),
               A('Thin evidence: four sampling families, no total diet study, no cultivar comparison.', gems)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Is plantain from mining areas always higher in metals?',
  P(('No.', []),
    ('Plantain from farms around the Tarkwa gold mines had a geometric mean of 7 µg/kg lead and 1 µg/kg mercury in 2012.', [bor]),
    ('Plantain from farms on rivers used for illegal mining at Obuasi and Akwatia had about 1,000 µg/kg lead and 120–130 µg/kg mercury in 2019.', [adj]),
    ('The studies differ in year, basis and method, so the comparison shows a range of outcomes rather than a rule.', []))),
 ('Why is nickel so high in plantain?',
  P(('Nickel was the one metal that plantain took up from soil more readily than the soil held it: the Tarkwa soil-to-plantain factor averaged 2.2.', [bor]),
    ('Plantain there had 3,600 µg/kg nickel, and Owerri plantain had 1,000 µg/kg on a dry-weight basis.', [bor, ori]))),
],
'testing': [
 ('Why do studies of plantain report such different lead levels?',
  P(('Sampling location explains part of it: the highest values come from farms beside rivers used for illegal mining.', [adj]),
    ('Method and basis explain more: some studies report dried powder, some do not state the basis, and some report only to 10 µg/kg.', [ori, bor, adj]),
    ('Monitoring laboratories reporting to 1–5 µg/kg found most plantain near or below those limits.', [gems]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in plantain?',
  P(('Lead is the metal that matters most; cadmium, mercury and arsenic were usually low or below detection in monitoring.', [gems]),
    ('Plantain from mining-polluted farms in Ghana also carried mercury, nickel was high wherever it was measured, and plantain ripened with calcium carbide carried more arsenic.', [adj, bor, ori, mod])), 'GEMS/Food plantain records; Adjei-Mensah Table 4; Bortey-Sam Table 1; Orisakwe Table 1; Mode Table 3'),
 ('ING-FAQ-02', 'How do heavy metals get into plantain?',
  P(('Through soil, irrigation or river water and airborne dust where the plant grows, especially near mining.', [adj, bor]),
    ('At Tarkwa, nickel moved from soil into plantain more readily than any other metal measured.', [bor])), 'Adjei-Mensah Sections 2.2.1, 3.3; Bortey-Sam Section 3.2, Table 2'),
 ('ING-FAQ-04', 'Which types of plantain have the lowest levels?',
  P(('No study in the ledger compares plantain cultivars.', []),
    ('By form, cooked plantain and most fresh plantain in monitoring were lowest for lead, at 5 µg/kg or below.', [gems])), 'GEMS/Food plantain records'),
 ('ING-FAQ-05', 'Which growing regions produce plantain with the lowest levels?',
  P(('The evidence cannot rank regions.', []),
    ('Monitoring records from Africa and the Americas were mostly low, Tarkwa farm plantain was low in lead, and farm plantain from mining-polluted rivers at Obuasi and Akwatia was about 1,000 µg/kg.', [gems, bor, adj]),
    ('Monitoring gives only a reporting region, not where the plantain grew.', [gems])), 'GEMS/Food; Bortey-Sam Table 1; Adjei-Mensah Table 4'),
 ('ING-FAQ-06', 'Do foods made from plantain also contain heavy metals?',
  P(('The one plantain-chip record had 0.75 µg/kg inorganic arsenic, just above its detection limit.', [gems]),
    ('No study in the ledger measured metals in plantain flour.', [])), 'GEMS/Food PAHO 2011 inorganic arsenic record'),
 ('ING-FAQ-07', 'What do the levels in plantain mean for health?',
  P(('Most monitored plantain carries little lead, cadmium, mercury or arsenic.', [gems]),
    ('Raw plantain from mining-polluted farms in Ghana was far above the 100 µg/kg fruit lead limit, which matters because plantain is a staple there.', [adj, eu]),
    ('No source gives a checkable estimate of how much plantain adds to anyone’s total intake.', [adj])), 'GEMS/Food; Adjei-Mensah Table 4 and Section 2.4'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in plantain?',
  P(('Plantain falls under general fruit limits: lead 0.1 mg/kg in Codex, the EU and Colombia.', [cx, eu, co]),
    ('For cadmium the EU sets 0.020 mg/kg for bananas and 0.050 mg/kg for most other fruit, and Colombia sets 0.050 mg/kg; no limit names plantain itself.', [eu, co])), 'Codex CXS 193 lead table; EU 2023/915 3.1.1.2, 3.2.1; Colombia Res. 4506/2013 rows 11.8, 12.8'),
 ('ING-FAQ-09', 'Can cooking or processing reduce metals in plantain?',
  P(('In one Ghanaian study, boiling and frying gave lead concentrations of 40–70 µg/kg from about 1,000 µg/kg raw, while roasting changed lead less.', [adj]),
    ('The study did not measure moisture or weigh the metal lost, so how much lead left the food is unknown.', [adj])), 'Adjei-Mensah Tables 4 and 6'),
 ('ING-FAQ-10', 'Is the arsenic in plantain the toxic inorganic form?',
  P(('Almost every plantain arsenic result is total arsenic, so the form is unknown.', [gems, bor, adj]),
    ('Total arsenic was below 1–20 µg/kg in monitoring and 12–20 µg/kg in the Ghanaian studies; the single inorganic arsenic result, for plantain chips, was 0.75 µg/kg.', [gems, bor, adj])), 'GEMS/Food; Bortey-Sam Table 1; Adjei-Mensah Table 4'),
 ('PLANTAIN-FAQ-05', 'Does ripening plantain with calcium carbide add heavy metals?',
  P(('In the one experiment that tested it, yes for arsenic: carbide-ripened plantain had 5,930–9,940 µg/kg total arsenic against 1,640 µg/kg when ripened naturally, and the carbide itself contained 21.75 mg/kg arsenic.', [mod]),
    ('Cadmium did not change significantly, and the study’s arsenic levels are far above other plantain data, so the size of the effect is uncertain.', [mod])), 'Mode Table 3, p. 12'),
 ('ING-FAQ-12', 'Is banana lower in metals than plantain?',
  P(('They are different fruits, and this page uses no banana values.', []),
    ('In the one study that measured both by the same method, in Owerri, banana had more lead (0.46 mg/kg) and plantain more cadmium and nickel, so neither was lower overall.', [ori])), 'Orisakwe Tables 1 and 2'),
 ('ING-FAQ-14', 'Does cooking destroy heavy metals in plantain?',
  P(('No; heat cannot destroy a metal.', []),
    ('Cooking can change the concentration by moving water, oil or metal in or out of the food, which is what the Ghanaian study measured.', [adj])), 'Adjei-Mensah Section 3.6'),
 ('PLANTAIN-FAQ-01', 'Is plantain the same as the herb called plantain?',
  P(('No.', []),
    ('The herb is Plantago (ribwort or narrowleaf plantain), used in teas and herbal medicines, and its metal results are excluded from this page.', [gems, kow])), 'GEMS/Food herbal-tea records; Kowalska Section 2.1'),
 ('PLANTAIN-FAQ-02', 'Does growing plantain near mining raise metal levels?',
  P(('It can.', []),
    ('Plantain from farms on rivers used for illegal mining in Ghana was far above the fruit lead limit, but plantain from farms around the Tarkwa gold mines was low in lead.', [adj, bor])), 'Adjei-Mensah Table 4; Bortey-Sam Table 1'),
 ('PLANTAIN-FAQ-03', 'Does plantain contain mercury?',
  P(('Usually very little: monitoring found none above 4.2 µg/kg and Tarkwa plantain had 1 µg/kg.', [gems, bor]),
    ('Plantain from Ghanaian mining-river farms had 120–130 µg/kg, which cooking did not reliably lower.', [adj])), 'GEMS/Food; Bortey-Sam Table 1; Adjei-Mensah Table 4'),
 ('PLANTAIN-FAQ-04', 'What should a plantain lead test report?',
  P(('The edible pulp, fresh weight, the laboratory’s quantification limit and the farm area.', [eu, co]),
    ('Monitoring laboratories reached 1–5 µg/kg for lead, well below the 100 µg/kg fruit limit.', [gems, eu])), 'GEMS/Food LOD fields; EU 2023/915 3.1.1'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-plantain-v1', 'family': 'ingredient', 'slug': 'plantain', 'title': 'Plantain', 'display_title': 'Plantain', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, mercury, arsenic and nickel in plantain (cooking banana): monitoring results, mining-area farm studies, cooking and ripening effects, limits and testing.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Plantain FAQs', 'aliases': []},
     'history_note': '22 October 2026 — New page built from every plantain record in the library: WHO GEMS/Food plantain results, three Ghanaian and Nigerian field studies, a measured household-cooking comparison, a calcium-carbide ripening experiment, verified fruit limits and stage-led controls.',
     'key_evidence': [
       {'label': 'Monitoring', 'text': 'Most monitored plantain had 5 µg/kg lead or less; one 2016 import had 174 µg/kg.', 'href': '#heavy-metal-contamination-profile-of-plantain', 'link_label': 'Profile'},
       {'label': 'Mining areas', 'text': 'Raw plantain from Ghanaian mining-river farms averaged about 1,000 µg/kg lead.', 'href': '#which-plantain-forms-and-origins-measured-lower', 'link_label': 'Variation'},
       {'label': 'Cooking', 'text': 'In one study, boiling or frying gave 40–70 µg/kg lead from about 1,000 µg/kg raw.', 'href': '#cooking-and-processing', 'link_label': 'Processing'}],
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As (one chip record), total Hg, Ni, total Cr as reported', 'material_form': 'Plantain (cooking banana): fresh, cooked, chips, peeled pulp after household processing; dessert banana, Plantago herb, leaves and mixed dishes excluded',
               'basis': 'Fresh weight as sold or eaten, unstated basis and dry weight kept separate; no moisture conversion', 'geography_market': 'Farm area, town or WHO reporting region as each source reports',
               'period': 'Source collection years 2011–2022 where reported; unreported dates stay unknown', 'stage': 'Cultivation, household cooking, procurement and lot testing',
               'population_route': 'Dietary ingestion', 'comparator_outcome': 'Within-study processed versus raw contrasts; HMI references below display minimum'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to plantain or naming it, plantain rows in WHO GEMS/Food, and a full-text search of the library’s converted papers for plantain, Musa paradisiaca and cooking banana',
                'protocol_ref': 'data/evidence/contracts/plantain/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/plantain/extraction/'],
                'screening_ref': 'data/evidence/contracts/plantain/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library plus the HMI-GAP-INGEST-1 batch-01 publisher PDFs; no new external literature search', 'Four studies lack wiki source records and are proposed for central adoption'],
                'unresolved_access': ['Supplementary Table S3 of the Atrato (Colombia) study, doi 10.3390/ijerph20010435']},
     'source_catalogue': {'topic': 'ingredients/plantain'}, 'retain_history_only': True}

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

quick = P(('Most monitored plantain is low in metals, but lead is the one to check: plantain grown beside mining-polluted rivers in Ghana averaged about 1,000 µg/kg, far above the 100 µg/kg fruit limit.', [gems, adj, eu]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead decides most plantain questions; mercury matters near gold mining, and nickel is high wherever measured.', [adj, bor, ori]),
 ('Main drivers', 'Farm location near mining and polluted river water, and ripening with calcium carbide, which raised arsenic in one study.', [adj, bor, mod]),
 ('Practical framing', 'Ask for lot lead results on the edible pulp, fresh weight, with a limit well below 100 µg/kg.', [eu, gems])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-plantain-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-03', 'status': 'deferred', 'reason': 'No study in the ledger compares organic-certified and conventional plantain for metals.'},
 {'id': 'ING-FAQ-11', 'status': 'deferred', 'reason': 'The only peel-versus-pulp plantain data (Kumasi and Obuasi arsenic) are in a library paper whose bibliography cannot yet be verified; it is a fetch target, not page evidence.'},
 {'id': 'ING-FAQ-13', 'status': 'deferred', 'reason': 'No plantain-specific infant or child exposure evidence in the ledger; Tarkwa child hazard quotients are unreadable in the library copy.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not an assessed plantain preparation for metals.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative serving guidance for plantain metals; no frequency is invented.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for plantain metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
URL = {mod: 'https://doi.org/10.1155/ijfo/7226409', adj: 'https://doi.org/10.1016/j.toxrep.2021.11.001', bor: f'../sources/{bor}', ori: 'https://doi.org/10.1186/1752-153X-6-77', eu: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915',
       cx: 'https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/', co: f'../sources/{co}', gems: 'https://extranet.who.int/gemsfood/'}
def control(i, sid, label, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, audiences=None):
    return {'id': f'plantain-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': URL[sid], 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/plantain.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Plantain', 'audiences': audiences or ['supplier', 'brand'],
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; processed portions cut from the same raw samples are not independent.', 'tradeoff_summary': 'Moisture, oil uptake, nutrients and cost not quantified.',
            'verification_summary': 'Confirm with lot-specific results on the edible pulp, fresh weight, with an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Paired laboratory processing of farm samples' if kind == 'measured' else 'Observational field survey' if kind == 'observational' else 'Regulatory limit or guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Changes metal concentration in the eaten food, limits metal reaching the fruit, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'No moisture, yield or mass balance reported.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Cooking water and oil not analysed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'No replicated plantain intervention study in the library; keep effects as reported.'}], 'review': {'record_ref': 'data/evidence/contracts/plantain/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Peeled pulp, basis not stated', note='Source-reported means; paired portions of the same farm samples.'):
    return {'analyte': analyte, 'direction': direction, 'period': 'March–June 2019' if start is not None and basis.startswith('Peeled') else 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
AM = 'Adjei-Mensah et al. 2021'
controls = [
 control(1, bor, 'Bortey-Sam et al. 2015', 'cultivation', 'Expect nickel uptake even where lead uptake is low', 'observational', '32 plantain samples and farm soils, Tarkwa, Ghana (June 2012)',
   'Soil-to-plantain transfer factors were lowest for chromium and highest for nickel (mean 2.2), the only metal above 1; soil pH and organic matter did not explain transfer.',
   'Plantain versus the topsoil of the same farms.',
   [out('Ni', 'context', None, None, 'Transfer factor above 1 (observational)', 'Soil-to-plantain bioconcentration factor', 'Plantain versus farm soil', 'Section 3.2; Table 2', basis='Dry weight ratio', note='Authors’ mean factor; per-community cells unreadable in the library copy.'),
    out('Cr', 'context', None, None, 'Lowest transfer from soil (observational)', 'Soil-to-plantain bioconcentration factor', 'Plantain versus farm soil', 'Section 3.2; Table 2', basis='Dry weight ratio', note='Authors’ mean factor 0.0021.')],
   'Gold-mining area farms; one season.', 'Association only; no soil treatment or siting change was tested.', 'Field survey'),
 control(2, adj, AM, 'cultivation', 'Avoid farms watered or flooded by mining-polluted rivers', 'observational', 'Plantain from farms on the Birim, Pra and Tano rivers, Ghana (2019)',
   'Peeled raw pulp from farms beside rivers used for illegal small-scale mining averaged 1,020–1,110 µg/kg lead and 120–130 µg/kg mercury, far above the fruit lead limit.',
   'No non-mining comparison farms in the same study; the fruit lead limit is the reference.',
   [out('Pb', 'context', 1020, None, 'High lead at mining-river farms (observational)', 'Mean raw pulp lead', 'Obuasi farms versus 100 µg/kg fruit limit', 'Table 4, p. 1834'),
    out('tHg', 'context', 120, None, 'Elevated mercury (observational)', 'Mean raw pulp mercury', 'Obuasi farms', 'Table 4, p. 1834')],
   'Farms in active illegal-mining catchments.', 'No unexposed comparison farms; siting was not tested as an intervention.', 'Field survey'),
 control(3, adj, AM, 'home preparation', 'Boil peeled plantain', 'measured', 'Peeled plantain pulp from Obuasi and Akwatia farms',
   'Laboratory boiling of peeled pulp gave lead of 60–70 µg/kg against 1,020–1,110 µg/kg in the raw portion of the same samples; mercury fell at Akwatia only.',
   'Unprocessed portion of the same peeled farm samples.',
   [out('Pb', 'lower', 1020, 60, 'Lower lead concentration after boiling', 'Mean pulp lead', 'Obuasi raw versus boiled', 'Table 4, p. 1834'),
    out('Pb', 'lower', 1110, 70, 'Lower lead concentration after boiling', 'Mean pulp lead', 'Akwatia raw versus boiled', 'Table 4, p. 1834'),
    out('tHg', 'lower', 130, 50, 'Lower mercury concentration after boiling', 'Mean pulp mercury', 'Akwatia raw versus boiled', 'Table 4, p. 1834'),
    out('tHg', 'context', None, None, 'No clear mercury change (120 to 110 µg/kg, within rounding)', 'Mean pulp mercury', 'Obuasi raw versus boiled', 'Table 4, p. 1834')],
   'Household-style boiling of peeled pulp.', 'Concentration change on an unstated basis; no moisture or mass balance, so removal is not measured.', 'Laboratory', ['consumer', 'supplier']),
 control(4, adj, AM, 'home preparation', 'Fry peeled plantain', 'measured', 'Peeled plantain pulp from Obuasi and Akwatia farms',
   'Laboratory frying gave lead of 40–50 µg/kg against 1,020–1,110 µg/kg raw; mercury fell at Akwatia (130 to 40 µg/kg) but not clearly at Obuasi.',
   'Unprocessed portion of the same peeled farm samples.',
   [out('Pb', 'lower', 1020, 40, 'Lower lead concentration after frying', 'Mean pulp lead', 'Obuasi raw versus fried', 'Table 4, p. 1834'),
    out('Pb', 'lower', 1110, 50, 'Lower lead concentration after frying', 'Mean pulp lead', 'Akwatia raw versus fried', 'Table 4, p. 1834'),
    out('tHg', 'lower', 130, 40, 'Lower mercury concentration after frying', 'Mean pulp mercury', 'Akwatia raw versus fried', 'Table 4, p. 1834')],
   'Household-style frying in fresh oil.', 'Oil uptake and water loss change the basis; removal is not measured.', 'Laboratory', ['consumer', 'supplier']),
 control(5, adj, AM, 'home preparation', 'Do not rely on roasting', 'measured', 'Peeled plantain pulp from Obuasi and Akwatia farms',
   'Roasting in a microwave griller left lead at 130 µg/kg (Obuasi) and 750 µg/kg (Akwatia), and mercury at 110–120 µg/kg, close to raw.',
   'Unprocessed portion of the same peeled farm samples.',
   [out('Pb', 'lower', 1110, 750, 'Smaller lead change after roasting', 'Mean pulp lead', 'Akwatia raw versus roasted', 'Table 4, p. 1834'),
    out('tHg', 'context', None, None, 'No clear mercury change (130 to 120 µg/kg, within rounding)', 'Mean pulp mercury', 'Akwatia raw versus roasted', 'Table 4, p. 1834')],
   'Dry-heat roasting of peeled chips.', 'Roasting concentrates by drying; the Akwatia value and its significance letter are inconsistent in the paper.', 'Laboratory', ['consumer', 'supplier']),
 control(6, eu, 'Regulation (EU) 2023/915', 'lot acceptance and release', 'Test lots against the 100 µg/kg fruit lead limit', 'guidance', 'Fruit, wet weight after washing and separating the edible part',
   'The EU sets 0.10 mg/kg lead for fruit other than a few named berries, applied to the washed edible part on a wet-weight basis; testing detects lead and does not remove it.',
   'Lot result versus the legal maximum.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Legal maximum for fruit', 'Lot result versus 100 µg/kg', 'Annex I 3.1.1.2, OJ L 119/129', basis='Wet weight, edible part', note='Regulatory limit; not a measured effect.')],
   'Fruit placed on the EU market.', 'Whether EU law files plantain under bananas for cadmium was not confirmed.', 'Regulation'),
 control(7, co, 'Colombia Resolución 4506/2013', 'sourcing and procurement', 'Specify fresh weight and edible part in purchase specifications', 'guidance', 'Fruit, fresh weight after washing and separating the edible part',
   'Colombia sets 0.10 mg/kg lead for fruit (except berries) and 0.050 mg/kg cadmium for most fruit and vegetables, fresh weight, after washing and separating the edible part.',
   'Supplier result versus the national maximum.',
   [out('Pb', 'context', None, None, 'Specification, not removal', 'Legal maximum for fruit', 'Lot result versus 100 µg/kg', 'Article 3 table, row 11.8', basis='Fresh weight, edible part', note='Regulatory limit; not a measured effect.'),
    out('Cd', 'context', None, None, 'Specification, not removal', 'Legal maximum for fruit and vegetables', 'Lot result versus 50 µg/kg', 'Article 3 table, row 12.8', basis='Fresh weight, edible part', note='Regulatory limit; not a measured effect.')],
   'Fruit sold in Colombia, a large plantain-eating market.', 'Limits apply to fruit generally; plantain is not named.', 'Regulation'),
 control(8, mod, 'Mode et al. 2026', 'storage and handling', 'Ripen plantain without calcium carbide', 'measured', 'Mature green plantain from one bunch, Sokoto, Nigeria',
   'Plantain ripened with technical calcium carbide (10 or 30 g/kg of fruit) had significantly more total arsenic than naturally ripened plantain; the carbide contained 21.75 mg/kg arsenic and 0.881 mg/kg lead.',
   'Naturally ripened plantain from the same bunch (five fruits per group).',
   [out('tAs', 'higher', 1640, 5930, 'Higher arsenic after carbide ripening (10 g/kg)', 'Mean fruit total arsenic', 'Natural versus 10 g/kg carbide', 'Table 3, p. 12', basis='Homogenised ripened fruit, fresh basis', note='Source means of five fruits; arsenic method and detection limit not described.'),
    out('tAs', 'higher', 1640, 9940, 'Higher arsenic after carbide ripening (30 g/kg)', 'Mean fruit total arsenic', 'Natural versus 30 g/kg carbide', 'Table 3, p. 12', basis='Homogenised ripened fruit, fresh basis', note='Source means of five fruits; arsenic method and detection limit not described.'),
    out('Cd', 'context', None, None, 'No significant cadmium change (1 to 3 µg/kg)', 'Mean fruit cadmium', 'Natural versus carbide', 'Table 3, p. 12', basis='Homogenised ripened fruit, fresh basis', note='Same significance letter as the control.')],
   'Postharvest ripening with technical-grade carbide at market-typical doses.', 'One bunch and source; absolute arsenic levels far above other plantain data; plantain control lead printed identically to mango, so lead is not compared.', 'Laboratory', ['supplier', 'brand', 'consumer']),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
