"""Compose the wheat synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/ingredient-rollout-2026-10-22/wheat/extraction/ and to the
HMI-calculated GEMS/Food summaries in primary/gemsfood-wheat-contrasts.json, which this
script re-reads so the monitoring figures in the prose cannot drift from the data.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/wheat'
C = json.loads((audit / 'primary/gemsfood-wheat-contrasts.json').read_text())

def med(a, m):
    lo, hi = C[a]['by_material'][m]['median']
    return f'{lo:g}' if lo == hi else (f'below {hi:g}' if lo == 0 else f'{lo:g}–{hi:g}')
def n(a, m): return f"{C[a]['by_material'][m]['n']:,}"
# Values the prose states; checked here against the computed summaries so a re-extraction cannot silently change them.
assert C['Cd']['by_material']['grain']['median'] == [28.0, 29.0] and C['Cd']['by_material']['durum_grain']['median'] == [70.0, 70.0]
assert C['Cd']['by_material']['bran']['median'] == [64.0, 64.0] and C['Cd']['by_material']['germ']['median'] == [110.0, 110.0]
assert C['Cd']['grain_soft_vs_durum_local']['Wheat grain, soft']['median'] == [20.0, 20.0]
assert abs(C['Cd']['by_material']['grain']['share_above_100'] - 0.0415) < 1e-4

gems = 'who-gemsfood-heavy-metal-contaminants'
pom = 'pompa2021-durum-wheat-cd-pb-hg-italy'; mor = 'moradi2015-iran-isfahan-soil-crops-metals'; ale = 'alemu2022-wheat-flour-metals-ethiopia'
rec = 'reczajska2005-chromium-plant-foods-poland'; lig = 'li2022-guizhou-cd-grains'; lip = 'li2022-wheat-pte-guizhou-health-risk'
pal = 'palombieri2023-triticum-turgidum-cadmium'; mot = 'motta-romero2021-wheat-cadmium-fungicide'; mac = 'maccaferri2019-durum-wheat-genome-cadmium'
ozk = 'ozkutlu2026-wheat-cd-zinc-mitigation'; ef9 = 'efsa-cadmium-contam-2009'; ef14 = 'efsa2014-dietary-exposure-iAs'; jec = 'jecfa-64th-cadmium-tin-2006'
j91 = 'jecfa-91st-cadmium-2022'; sta = 'stahl2017-aluminum-food-contact-part1'; hes = 'heshmati2020-iran-vegetables-cereals-pb-cd'; nej = 'nejabat2017-iran-golestan-wheat-metals'
isl = 'islam2014-bangladesh-cereals-pulses-metals'; fly = 'flyvholm1984-nickel-content-food-dietary-intake'; jia = 'jiang2020-henan-battery-factory-crops-metals'
xu = 'xu2022-crop-grains-heavy-metals'; liu = 'liu2025-nanyang-crops-heavy-metals'; kum = 'kumar2024-arsenic-breast-milk-bihar-gangetic'; rub = 'rubio2023-metals-cereals-madeira-azores'
ata = 'ataee2016-iran-cereals-pb-cd'; sal = 'salehipour2015-iran-isfahan-cereals-vegetables-metals'; pir = 'pirsaheb2015-iran-kermanshah-cereals-metals'
get = 'getu2022-heavy-metals-cereals-ethiopia'; jai = 'jaishree2015-effluent-irrigated-crops-metals'; i15 = 'islam2015-bangladesh-foods-heavy-metals'
slp = 'slepecka2017-ecological-cereal-heavy-metals-poland'; alt = 'altunay2023-cadmium-food-turkey'
eu = 'eu-2023-915-contaminants-maximum-levels'; euni = 'eu-2024-1987-nickel-maximum-levels'; cx = 'codex-cxs-193-1995'; cn = 'china2022-gb-2762-contaminants-original'
fsz = 'fsanz2024-schedule-19-contaminants'; mer = 'mercosur2011-gmc-res-12-inorganic-contaminants'; song = 'song2017-china-dietary-cadmium-exposure'
glo = 'jiang2025-global-patterns-and-exposure-assessment-of-cereal'; tho = 'authors2018-toxic-metals-like-arsenic-cadmium-and-lead-as'
hg = 'authors2023-mercury-speciation-in-selenium-enriched-wheat'

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
 P(('Cadmium is the metal that decides most wheat questions.', []),
   (f'In WHO GEMS/Food, {n("Cd", "grain")} common wheat grain results had a median of 28–29 µg/kg, and 4.2% were above the EU maximum of 100 µg/kg for common wheat; lead, total arsenic and total mercury medians sat below their reporting limits.', [gems, eu]),
   ('Wheat contributes so much dietary cadmium because it is eaten in large amounts, not because its concentrations are unusually high: the joint FAO/WHO expert committee identified wheat as one of the main sources, at 3–29% of the tolerable intake across regional diets.', [jec])),
 P(('Two comparisons matter more than any country ranking.', []),
   (f'Durum wheat, the hard wheat used for pasta, had a monitoring median of 70 µg/kg cadmium against 20 µg/kg for soft wheat reported by the same European programme, and the EU allows it a higher limit (180 against 100 µg/kg).', [gems, eu]),
   (f'Within the kernel, cadmium concentrates in the outer and germ fractions: bran had a median of 64 µg/kg and germ 110 µg/kg, against 28–29 µg/kg in whole grain.', [gems]),
   ('Grain from fields beside steel mills, battery plants and mines carried several times more cadmium and lead than grain from background farmland in the same studies.', [mor, jia, xu])),
 P(('For a buyer, the supported priorities are a lot-specific cadmium result compared with the limit for the right wheat type (common, durum, bran or germ), a lead result, and knowledge of where and on what soil the grain was grown.', [eu, cx, gems]),
   ('Imported durum grain from Australia, Turkey and Russia measured lower in cadmium than durum from the United States and Canada at Italian border controls, and low-cadmium durum cultivars exist, but these are patterns to verify by testing rather than guarantees.', [pom, mac])),
],
'identity': [
 P(('This page covers wheat grain: common or bread wheat (Triticum aestivum), durum and other tetraploid wheats, the hulled wheats spelt, einkorn and emmer, and the bran and germ milled from them.', [gems, pom, pal]),
   ('Wheat flour, bread, pasta, noodles, breakfast cereals and infant cereals have their own pages and their results are not used here, even when a study measured them alongside grain.', [ef9, rub, ale])),
 P(('Material and basis are kept separate because they change the numbers.', []),
   ('Durum, spelt, bran, germ and hulled, cracked or rolled grain such as bulgur and flakes are separate rows and separate references, and dry-weight results are never pooled with results on an as-sold or unstated basis.', [gems, lip, ale]),
   ('A WHO region in GEMS/Food is a reporting region, not where the wheat grew, and the European cadmium category “wheat grains and flour” mixes grain with flour, so it is shown separately.', [gems, ef9])),
],
'occurrence': [
 P(('The table holds every wheat result extracted from thirty survey and field sources and the WHO GEMS/Food monitoring database: one row for each statistic a source reports for a subgroup, material and metal, so a mean and a range from the same samples appear as separate rows.', [gems, pom, lip, rec, ale]),
   ('Ratings place a mean, median or single result against a pooled HMI wheat reference for the same material and basis, built from every compatible sampling family; non-detects remain intervals and are never read as zero.', [gems, lip, ale, ata]),
   ('Rows that failed a check against their own paper stay visible with the reason and are not compared, and grain from contaminated sites is compared within its own study but does not set the reference.', [i15, jai, get, jia])),
 P(('Typical concentrations differ greatly by metal.', []),
   (f'In GEMS/Food common wheat grain, cadmium was detected in 9,522 of {n("Cd", "grain")} results, while lead was quantified in only 2,342 of {n("Pb", "grain")} and total mercury in 157 of {n("tHg", "grain")}, so their medians are bounded by reporting limits (below 20 µg/kg for lead and 5 µg/kg for mercury).', [gems]),
   ('Inorganic arsenic in grain had a median of 2–9 µg/kg in monitoring results, and the European estimate for wheat grain was 9–25 µg/kg between its lower and upper bounds.', [gems, ef14]),
   ('Nickel and chromium run higher: Bijie wheat in Guizhou had medians of 468 µg/kg nickel and 1,488 µg/kg chromium, while Polish grain had a chromium median of 27 µg/kg.', [lip, rec])),
],
'pathways': [
 P(('Metals reach wheat grain mainly through the roots from soil and irrigation water, and their uptake depends on soil cadmium, soil pH, zinc supply and the plant’s genetics.', [xu, ozk, mac]),
   ('In a mining-area survey, grain cadmium rose with the available soil cadmium and fell as soil pH increased, and in greenhouse pots grain cadmium climbed from about 50 µg/kg on unspiked soil to more than 2,400 µg/kg when soil was spiked with 5 mg/kg cadmium.', [xu, ozk])),
 P(('Point sources and naturally high-cadmium soils both matter.', []),
   ('Near a steel mill in Isfahan, grain carried 280–310 µg/kg cadmium and 2,000–2,100 µg/kg lead against 60 and 290 µg/kg at a background site, and grain from a village beside a battery factory in Henan had 320 µg/kg cadmium.', [mor, jia]),
   ('Karst soils in Guizhou with high natural cadmium gave a mean of 135 µg/kg in 102 farm samples, 45% of them above China’s 100 µg/kg limit.', [lig])),
 P(('Inside the plant, the HMA3 transporter decides how much cadmium is held in the roots.', [mac]),
   ('A non-functional version of its gene, carried by 68% of modern durum cultivars, gives two- to threefold more cadmium transport to shoots and grain, which helps explain why durum accumulates more than common wheat.', [mac])),
],
'variation': [
 P(('For cadmium, wheat type is the clearest supported difference.', []),
   ('Within European monitoring, soft wheat grain had a median of 20 µg/kg (1,952 results) and durum grain 70 µg/kg (473 results); 21% of durum results were above 100 µg/kg against 1.5% of soft wheat.', [gems]),
   ('Spelt, einkorn and emmer grain had a median of 31 µg/kg, close to common wheat, and hulled, cracked or rolled grain such as bulgur and flakes 22–23 µg/kg.', [gems]),
   ('This is a supported pattern for cadmium, consistent with the genetics of durum, not a guarantee for any lot.', [mac])),
 P(('Among imported durum lots sampled in Italy in 2015–2020, cadmium medians were lowest for grain grown in Australia (8.5 µg/kg, 4 lots) and Turkey (17 µg/kg, 10 lots), then Russia (20 µg/kg, 105 lots) and Kazakhstan (25 µg/kg, 151 lots), and highest for Canada (54 µg/kg, 51 lots) and the United States (94 µg/kg, 25 lots).', [pom]),
   ('The Russian and Kazakh lots are numerous enough to call tentatively lower than North American durum; the Australian and Turkish figures rest on too few lots for a sourcing preference, and lead pointed the other way, with Turkish durum the highest.', [pom]),
   ('Among Ethiopian varieties grown at research centres, the local Wolaita wheat had 47 µg/kg cadmium against 199 µg/kg for the variety Ogolcho, on a dry-weight basis.', [ale])),
 P(('Lead, arsenic and mercury offer fewer usable contrasts because most monitoring results are non-detects.', [gems]),
   ('Where lead was measured above detection, background farmland differed sharply from contaminated sites, as in Isfahan (290 against 2,000–2,100 µg/kg), and Bijie grain had a lead median of 29 µg/kg.', [mor, lip]),
   ('Total arsenic in Bijie grain had a median of 54 µg/kg, and households in arsenic-affected districts of Bihar reported raw wheat from below 100 to 500 µg/kg, so groundwater arsenic regions are the main exception to the low arsenic of most wheat.', [lip, kum])),
 P(('Chromium and nickel varied by region more than by wheat type.', []),
   ('In Poland, grain from Lubelskie had a chromium mean of 23 µg/kg against 62 µg/kg in Kujawsko-Pomorskie, and nickel in Ethiopian varieties ranged from 164 to 817 µg/kg.', [rec, ale]),
   ('The cadmium origin comparisons do not carry over to these metals, and none of the evidence ranks a country as lowest for every metal.', [pom, rec])),
],
'processing': [
 P(('Milling separates the bran and germ, where cadmium is concentrated, from the starchy endosperm that becomes white flour.', [gems, ef9]),
   ('Monitoring medians were 64 µg/kg for bran and 110 µg/kg for germ against 28–29 µg/kg for whole grain, and inorganic arsenic was also higher in bran (median 14–17 µg/kg) than in grain.', [gems]),
   ('The European cadmium opinion likewise reported bran and germ at a mean of 64.7 µg/kg against 30.0 µg/kg for wheat grains and flour.', [ef9])),
 P(('A review citing durum milling studies reports that milling reduced nickel most, then arsenic, cadmium and lead, but gives no measured percentages.', [tho]),
   ('Flour and finished foods are assessed on their own pages, so this page does not state how much cadmium a given flour retains.', [])),
 P(('No study in the library measured cleaning, sorting or washing of wheat grain against a control for metals.', []),
   ('Roasting and crushing grain for soy sauce did not remove cadmium: the roasted, crushed wheat used in one Japanese brewing study still carried 57 µg/kg.', ['shindoh2010-cadmium-soy-sauce-miso-processing'])),
],
'controls': [
 P(('Controls for wheat act mainly in the field: choosing soils and sites, wheat type and cultivar, zinc nutrition and crop protection.', [mor, mac, ozk, mot]),
   ('Measured effects come from a field trial with fungicide, a greenhouse zinc trial on spiked soil and genetic studies of durum; site and pH comparisons are observational.', [mot, ozk, mac, xu]),
   ('After harvest, separating bran and germ lowers cadmium in the remaining fraction, and lot testing against the right limit detects high lots without removing anything.', [gems, jec])),
],
'tradeoffs': [
 P(('Low-cadmium choices can move the problem rather than solve it.', [mac, pom]),
   ('A low-cadmium durum line grew less under zinc deficiency, and Turkish durum, among the lowest in cadmium at Italian border controls, had the highest lead.', [mac, pom]),
   ('Whole-grain and bran products keep fibre and minerals that refined flour loses, but they also keep more cadmium.', [gems, ef9])),
 P(('Some field measures help one metal and not another.', []),
   ('Selenium given to wheat as selenite or selenate raised mercury in grain in a hydroponic experiment, and only a 1:1 mixture lowered it.', [hg]),
   ('Zinc fertilisation lowered grain cadmium in a spiked-soil trial, but could not bring grain from soil with 1 mg/kg added cadmium below 200 µg/kg.', [ozk])),
],
'testing': [
 P(('A useful wheat test must quantify well below the applicable cadmium limit, which in the EU is 100 µg/kg for common wheat, 180 µg/kg for durum, 150 µg/kg for bran and 200 µg/kg for germ.', [eu]),
   ('Monitoring laboratories reported cadmium limits of a few µg/kg, and a border-control study of durum used ICP-MS with quantification limits of 4 µg/kg cadmium and 12 µg/kg lead.', [gems, pom]),
   ('Several surveys reported values that cannot be reconciled with their own methods, including means below their own quantification limits and results above the calibration range, so method, limits and reference-material checks should accompany every result.', [rub, ata, get, liu])),
 P(('Report non-detects with their limit, keep the method and laboratory, and separate total from inorganic arsenic.', [gems]),
   ('Most European inorganic arsenic values for wheat were estimated as 70% of total arsenic rather than measured, so a measured inorganic arsenic result is more informative than a converted one.', [ef14]),
   ('Arsenic measured after dry ashing at 550 °C, as in one Iranian survey, can be lost and is not used.', [sal])),
],
'procurement': [
 P(('Ask for lot-specific cadmium and lead results with the laboratory’s quantification limit, compared with the limit for the exact material: EU 100 µg/kg cadmium for common wheat, 180 for durum, 150 for bran and 200 for germ, and 200 µg/kg lead for cereals.', [eu]),
   ('Limits differ by market: Codex sets 0.2 mg/kg cadmium for wheat, China 0.1 mg/kg cadmium, 0.2 lead, 0.02 mercury, 0.5 total arsenic and 1.0 chromium, Australia and New Zealand 0.1 mg/kg cadmium, and MERCOSUR 0.20 mg/kg for cadmium, lead and arsenic in wheat and its derivatives.', [cx, cn, fsz, mer]),
   ('From July 2026 the EU also limits nickel to 0.80 mg/kg in common wheat and 1.5 mg/kg in durum.', [euni])),
 P(('Specify the wheat type and record the growing country and region separately from the market where the grain was bought.', [gems, pom]),
   ('For durum, origin and cultivar both shifted cadmium in the evidence: border-control lots from Russia and Kazakhstan were lower than those from Canada and the United States, and cultivars carrying the functional HMA3 allele accumulate less.', [pom, mac]),
   ('Ask whether fields are near mines, smelters, battery or steel plants or irrigated with wastewater, and for soil cadmium and pH where the grower knows them.', [mor, jia, xu])),
],
'product': [
 P(('Wheat matters for exposure because of how much is eaten.', [jec, song]),
   ('In China, a wheat and wheat flour monitoring group averaged 21 µg/kg cadmium in 20,925 samples and was eaten at about 145 g a day.', [song]),
   ('The joint FAO/WHO committee estimated that a cadmium limit of 100 µg/kg for wheat, rather than 200, would lower mean wheat cadmium by 22% but cut the highest intake by only about 6% of the tolerable intake.', [jec])),
 P(('Bread, pasta and other products made from wheat are measured on their own pages, and this page does not transfer grain concentrations to them.', []),
   ('In the European cadmium opinion, bread and pasta averaged 13.7 µg/kg against 30.0 µg/kg for wheat grains and flour, which reflects dilution with water and milling rather than removal.', [ef9])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to wheat or names it, plus every wheat row in WHO GEMS/Food, the FDA Total Diet Study and other indexed datasets; each has a recorded decision based on its content.', []),
   ('The FDA Total Diet Study has no wheat grain food, only bread, cereals, pasta, flour and cream of wheat, so it contributes no rows here.', []),
   ('Thirteen sources are held in part because their values could not be reconciled with their own methods or figures.', [ale, ata, get, hes, i15, jai, kum, liu, rec, rub, sal, slp])),
 P(('The main gaps are origin, inorganic arsenic and controlled interventions.', []),
   ('Monitoring data identify reporting regions rather than growing countries, inorganic arsenic was measured in a few hundred grain results, and most mitigation evidence comes from pots, a single field trial or genetics rather than commercial fields.', [gems, ozk, mot, mac])),
],
}

headings = {'summary': 'Wheat overview', 'identity': 'What counts as wheat grain', 'occurrence': 'Heavy metal contamination profile of wheat',
 'pathways': 'How metals reach wheat grain', 'variation': 'Which wheat types and origins measured lower', 'processing': 'Milling fractions and processing',
 'controls': 'Mitigation from field to mill', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing wheat for metals',
 'procurement': 'Buying and verifying wheat', 'product': 'Exposure from wheat', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Wheat grain (common, durum and other tetraploid, spelt, einkorn, emmer) and its bran and germ; flour, bread, pasta and cereals are on other pages.', gems, pom, pal),
             A('Dry-weight and as-sold results are kept apart, and each material has its own reference.', gems, lip),
             A('GEMS/Food regions are reporting regions; the EU “wheat grains and flour” category is kept separate.', gems, ef9)],
'summary': [A('Cadmium decides most wheat questions: common wheat grain median 28–29 µg/kg, 4.2% above the EU 100 µg/kg limit.', gems, eu),
            A('Durum grain (median 70 µg/kg), bran (64) and germ (110) carry more cadmium than common wheat grain.', gems),
            A('Lot cadmium and lead results against the limit for the exact material, plus origin and soil context, are the supported buyer controls.', eu, pom, mac)],
'occurrence': [A('Cd, Pb, total As, iAs, DMA, total Hg, Ni, Cr, Al and Sn are reported from 30 survey and field sources and GEMS/Food.', gems, lip, rec),
               A('Pooled HMI references are built per material and basis from every compatible family.', gems, lip, ale),
               A('Non-detects are bounded intervals; held values and contaminated-site grain do not set references.', gems, i15, jia)],
'pathways': [A('Root uptake from soil and water, governed by soil Cd, pH, zinc and genetics.', xu, ozk, mac),
             A('Steel mills, battery plants and mines raised grain Cd and Pb several-fold over background sites.', mor, jia, xu),
             A('A non-functional HMA3 allele in 68% of modern durum cultivars raises grain Cd two- to threefold.', mac)],
'variation': [A('Soft wheat grain Cd median 20 µg/kg against 70 µg/kg for durum in European monitoring.', gems),
              A('Imported durum: Australia, Turkey, Russia and Kazakhstan lower in Cd than Canada and the USA; Turkey highest in Pb.', pom),
              A('No country is lowest for every metal; arsenic is high mainly in groundwater-arsenic regions.', pom, rec, kum)],
'processing': [A('Bran and germ carry about two and four times the cadmium of whole grain.', gems, ef9),
               A('Milling durum is reported to reduce Ni, As, Cd and Pb, without measured percentages.', tho),
               A('No cleaning or washing study for wheat grain metals exists in the library.', gems)],
'controls': [A('Fungicide at booting lowered cultivar grain Cd ranges from 100–190 to 70–140 µg/kg on high-Cd soil.', mot),
             A('Soil plus foliar zinc lowered grain Cd in spiked-soil pots, but not below 200 µg/kg at higher Cd doses.', ozk),
             A('Lot testing against the right limit detects high lots; it does not remove cadmium.', eu, jec)],
'tradeoffs': [A('A low-Cd durum line grew less under zinc deficiency.', mac),
              A('Low-Cd Turkish durum had the highest lead among origins.', pom),
              A('Selenite or selenate raised grain mercury in a hydroponic trial; only a 1:1 mix lowered it.', hg)],
'testing': [A('Quantification limits should sit well below 100 µg/kg Cd (common wheat) and the Pb limit of 200 µg/kg.', eu, pom),
            A('Several surveys printed values below their own limits or outside their calibration range.', rub, ata, get),
            A('European wheat iAs values were mostly estimated as 70% of total As.', ef14)],
'procurement': [A('EU Cd 100 (common), 180 (durum), 150 (bran), 200 (germ) µg/kg; Pb 200 µg/kg; Codex Cd 0.2 mg/kg.', eu, cx),
                A('EU nickel limits from July 2026: 0.80 mg/kg common wheat, 1.5 mg/kg durum.', euni),
                A('Record growing origin, cultivar and field context separately from the purchase market.', pom, mac, mor)],
'product': [A('Wheat supplies dietary cadmium through quantity eaten; China wheat and flour 21 µg/kg at about 145 g a day.', song, jec),
            A('A 100 µg/kg limit instead of 200 would cut mean wheat Cd 22% but highest intake only about 6% of the tolerable intake.', jec),
            A('Bread and pasta are assessed on their own pages; EU bread and pasta averaged 13.7 µg/kg Cd.', ef9)],
'assessment': [A('Every wheat-tagged or wheat-naming source record and every wheat dataset row decided on content.', gems),
               A('Held values in thirteen sources are shown with reasons and not compared.', ale, i15, jai, liu, rub),
               A('Gaps: growing origin, measured inorganic arsenic and commercial-scale interventions.', gems, ozk, mot)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Is durum wheat higher in cadmium than common wheat?',
  P(('Yes, in the monitoring and genetic evidence: European durum grain had a cadmium median of 70 µg/kg against 20 µg/kg for soft wheat, and 21% of durum results exceeded 100 µg/kg.', [gems]),
    ('Most modern durum cultivars carry an HMA3 allele that raises cadmium transport to the grain two- to threefold, and the EU sets a higher durum limit of 180 µg/kg to reflect this.', [mac, eu]))),
 ('Which durum origins measured lowest in cadmium?',
  P(('At Italian border controls in 2015–2020, durum from Australia (median 8.5 µg/kg, 4 lots), Turkey (17), Russia (20) and Kazakhstan (25) was lower than durum from Canada (54) and the United States (94).', [pom]),
    ('Turkish durum had the highest lead, so an origin chosen for cadmium should still be tested for lead.', [pom]))),
 ('Do some wheat varieties accumulate less cadmium?',
  P(('Yes. Durum cultivars with the functional HMA3 allele accumulate less cadmium, Polish wheat (Triticum polonicum) was lower than durum and Khorasan wheat grown in the same Italian field, and Ethiopian varieties ranged from 47 to 199 µg/kg.', [mac, pal, ale]),
    ('In a Nebraska trial of 18 hard winter wheat cultivars, newer cultivars carried slightly more cadmium, about 0.4 µg/kg per year of registration.', [mot]))),
],
'processing': [
 ('Does removing bran and germ lower cadmium?',
  P(('It moves cadmium out of the main stream: bran (median 64 µg/kg) and germ (110 µg/kg) carry more than whole grain (28–29 µg/kg), so flour milled from the endosperm carries less than the grain it came from.', [gems]),
    ('The removed bran and germ keep the cadmium, which is why the EU sets higher limits for them (150 and 200 µg/kg).', [eu]))),
],
'testing': [
 ('Why do some studies report very high metals in wheat?',
  P(('Some come from contaminated sites, such as grain beside a steel mill in Isfahan (2,000–2,100 µg/kg lead).', [mor]),
    ('Others do not survive a check against their own papers: a Bangladeshi survey labelled oven-dried samples as fresh weight, and an Indian effluent study gave no consistent unit.', [i15, jai]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in wheat?',
  P(('Cadmium is found in almost every wheat sample, typically 20–70 µg/kg depending on the wheat type, while lead, arsenic and mercury are usually below detection.', [gems]),
    ('Wheat also carries nickel and chromium in the hundreds of µg/kg, and aluminium in the thousands.', [lip, sta])), 'GEMS/Food wheat extraction; Li et al. 2022 Table 1; Stahl et al. 2017 Table 3'),
 ('ING-FAQ-02', 'How do heavy metals get into wheat?',
  P(('Through the roots, from soil and irrigation water; uptake rises with soil cadmium and falls as soil pH rises.', [xu]),
    ('Fields near steel mills, battery plants and mines give grain with several times more cadmium and lead than background farmland.', [mor, jia])), 'Xu et al. 2022 Table 5; Moradi et al. 2015 Table 3; Jiang et al. 2020 Table 4'),
 ('ING-FAQ-03', 'Is organic wheat lower in heavy metals?',
  P(('The library holds no reliable comparison of organic and conventional wheat grain.', []),
    ('The one survey of ecological bran reported cadmium values that failed checks against the paper itself, so it cannot answer the question.', [slp])), 'Slepecka et al. 2017 Figure 2 and text'),
 ('ING-FAQ-04', 'Which types of wheat have the lowest cadmium?',
  P(('Common (soft) wheat and spelt measured lower than durum: European medians were 20 µg/kg for soft wheat, 31 for spelt, einkorn and emmer, and 70 for durum.', [gems]),
    ('Within durum, cultivars with the functional HMA3 allele accumulate less.', [mac])), 'GEMS/Food local names; Maccaferri et al. 2019 p.893'),
 ('ING-FAQ-05', 'Which countries grow wheat with the lowest cadmium?',
  P(('For durum sampled at Italian border controls, Australia, Turkey, Russia and Kazakhstan were lower than Canada and the United States (medians 8.5–25 against 54–94 µg/kg).', [pom]),
    ('For common wheat, monitoring data identify only reporting regions, not growing countries, so no country ranking is supported.', [gems])), 'Pompa et al. 2021 Table 4; GEMS/Food region field'),
 ('ING-FAQ-06', 'Do bread, pasta and flour made from wheat also contain heavy metals?',
  P(('Yes, but at concentrations set by milling and recipe: in the European cadmium opinion, bread and pasta averaged 13.7 µg/kg against 30.0 for wheat grains and flour.', [ef9]),
    ('Each product is assessed on its own page from its own measurements.', [])), 'EFSA 2009 occurrence table'),
 ('ING-FAQ-07', 'What do the cadmium levels in wheat mean for health?',
  P(('Wheat is a major dietary source of cadmium because it is a staple: the joint FAO/WHO committee estimated it at 3–29% of the tolerable intake across regional diets.', [jec]),
    ('Cadmium accumulates in the kidney over years, so the concern is long-term intake from staple foods rather than any single meal; occurrence data alone do not establish individual risk.', [jec])), 'JECFA 64th report, cadmium evaluation and Table 6'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in wheat?',
  P(('Yes. The EU sets cadmium at 100 µg/kg for common wheat, 180 for durum, 150 for bran and 200 for germ, and lead at 200 µg/kg for cereals; Codex sets 0.2 mg/kg cadmium for wheat.', [eu, cx]),
    ('China sets 0.1 mg/kg cadmium, 0.2 lead, 0.02 mercury, 0.5 total arsenic and 1.0 chromium for grain, and from July 2026 the EU limits nickel to 0.80 mg/kg in common wheat and 1.5 mg/kg in durum.', [cn, euni])), 'EU 2023/915 Annex I 3.1.11, 3.2.12; CXS 193 cadmium table; GB 2762-2022; EU 2024/1987'),
 ('ING-FAQ-09', 'Can milling or processing reduce heavy metals in wheat?',
  P(('Milling separates the cadmium-rich bran and germ from the endosperm used for white flour, but it moves cadmium rather than destroying it.', [gems]),
    ('No study in the library measured cleaning or washing grain against a control.', [])), 'GEMS/Food material contrasts'),
 ('ING-FAQ-10', 'Is the arsenic in wheat inorganic?',
  P(('Wheat contains little arsenic of any form outside groundwater-arsenic regions: inorganic arsenic in monitored grain had a median of 2–9 µg/kg.', [gems]),
    ('Most European figures were estimated as 70% of total arsenic rather than measured, so a measured inorganic arsenic result is the better evidence.', [ef14])), 'GEMS/Food inorganic arsenic rows; EFSA 2014 Table 4'),
 ('ING-FAQ-11', 'Does whole wheat contain more cadmium than white wheat?',
  P(('Whole grain contains the bran and germ, which carry more cadmium (medians 64 and 110 µg/kg) than whole grain overall (28–29 µg/kg).', [gems]),
    ('Products made from whole grain therefore keep more of the grain’s cadmium than refined flour does; flour itself is measured on the wheat flour page.', [ef9])), 'GEMS/Food material contrasts; EFSA 2009'),
 ('ING-FAQ-12', 'Is spelt or ancient wheat lower in heavy metals?',
  P(('For cadmium, spelt, einkorn and emmer grain had a monitoring median of 31 µg/kg, about the same as common wheat, and lower than durum.', [gems]),
    ('A German laboratory found less aluminium in spelt (median 370 µg/kg) than in wheat (3,000 µg/kg), though the table does not say whether the samples were grain or milled.', [sta])), 'GEMS/Food hulled wheats; Stahl et al. 2017 Table 3'),
 ('WHEAT-FAQ-01', 'How often does wheat exceed the EU cadmium limit?',
  P(('In GEMS/Food, 4.2% of common wheat grain results exceeded 100 µg/kg, 1.1% of durum results exceeded 180, 1.7% of bran results exceeded 150 and 4.2% of germ results exceeded 200.', [gems, eu]),
    ('Exceedance was common in high-cadmium regions: 45% of wheat from Guizhou karst soils exceeded China’s 100 µg/kg limit.', [lig])), 'GEMS/Food shares above the EU 2023/915 limits; Li et al. 2022'),
 ('WHEAT-FAQ-02', 'Does zinc fertiliser lower cadmium in wheat?',
  P(('In a greenhouse trial with durum on cadmium-spiked soil, adequate soil zinc plus a foliar zinc spray gave the lowest grain cadmium at every cadmium dose.', [ozk]),
    ('At the 0.2 mg/kg dose grain fell from 239 to 182 µg/kg, but zinc could not bring grain from more heavily spiked soil below 200 µg/kg.', [ozk])), 'Ozkutlu et al. 2026 Results and Figure 2b'),
 ('WHEAT-FAQ-03', 'Do modern wheat varieties carry more cadmium?',
  P(('In a Nebraska field trial of 18 hard winter wheat cultivars released between 1933 and 2013, newer cultivars carried slightly more cadmium, about 0.4 µg/kg per year of registration, without fungicide.', [mot]),
    ('For durum, the high-cadmium HMA3 allele is more common in modern cultivars (68%) than in landraces (26%).', [mac])), 'Motta-Romero et al. 2021 Fig. 3; Maccaferri et al. 2019 Fig. 8b'),
 ('WHEAT-FAQ-04', 'Does fungicide affect cadmium in wheat?',
  P(('In the same Nebraska trial, a single fungicide application at booting lowered the range of cultivar cadmium means from 100–190 to 70–140 µg/kg.', [mot]),
    ('The authors attribute this to larger yields diluting cadmium and caution that other fungicide chemistries were not tested.', [mot])), 'Motta-Romero et al. 2021 Results and Discussion'),
 ('WHEAT-FAQ-05', 'Does wheat grown near mines or factories have more heavy metals?',
  P(('Yes, in every such study here: grain near a steel mill in Isfahan had 280–310 µg/kg cadmium and 2,000–2,100 µg/kg lead against 60 and 290 at a background site.', [mor]),
    ('Grain beside a battery factory in Henan had 320 µg/kg cadmium, and 24 of 25 fields in a Chinese copper mining area exceeded 100 µg/kg.', [jia, xu])), 'Moradi et al. 2015 Table 3; Jiang et al. 2020 Table 4; Xu et al. 2022'),
 ('WHEAT-FAQ-06', 'Is nickel a concern in wheat?',
  P(('Wheat grain carries hundreds of µg/kg of nickel: 330 µg/kg on average in an early Nordic compilation and a median of 468 µg/kg in Bijie, Guizhou.', [fly, lip]),
    ('From July 2026 the EU sets nickel limits of 0.80 mg/kg for common wheat and 1.5 mg/kg for durum, and the Bijie maximum (5,034 µg/kg) shows that some grain exceeds them.', [euni, lip])), 'Flyvholm et al. 1984 Table 2; Li et al. 2022 Table 1; EU 2024/1987'),
 ('WHEAT-FAQ-07', 'Is wheat bran or wheat germ higher in metals?',
  P(('Germ was higher in cadmium than bran in monitoring data (median 110 against 64 µg/kg), and both were higher than whole grain.', [gems]),
    ('For inorganic arsenic, bran (median 14–17 µg/kg) was higher than grain; too few germ results exist to compare.', [gems])), 'GEMS/Food material contrasts'),
]

# ------------------------------------------------------------------ build the record
qreg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-wheat-v1', 'family': 'ingredient', 'slug': 'wheat', 'title': 'Wheat', 'display_title': 'Wheat', 'version': 1, 'date': '2026-10-22',
     'description': 'Cadmium, lead, arsenic and other metals in wheat grain: monitoring results, durum and common wheat, bran and germ, origins, cultivars, contaminated sites, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Wheat FAQs', 'aliases': []},
     'scope': {'analytes': 'Cd, Pb, total As, iAs, DMA, total Hg, Ni, Cr, Al, Sn as reported; inorganic arsenic in a few hundred monitoring results; no chromium or mercury species measured in grain',
               'material_form': 'Wheat grain (common, durum and other tetraploid, spelt, einkorn, emmer), bran, germ and hulled, cracked, rolled or parboiled grain; flour, bread, pasta, noodles, cereals and infant cereals excluded',
               'basis': 'Dry weight and as-sold (including fresh and unstated) kept separate; µg/kg; no moisture conversion', 'geography_market': 'Growing origin, field site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 1975–2023 where reported; unreported dates stay unknown', 'stage': 'Soil and site, cultivar, field management, harvest, milling fractions, lot release',
               'population_route': 'Dietary ingestion; wheat contribution to cadmium intake', 'comparator_outcome': 'Pooled HMI wheat reference positions per material and basis; same-study origin, cultivar, site, species and fraction contrasts; field and pot control effects'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to wheat or naming it, plus wheat rows in WHO GEMS/Food, the FDA Total Diet Study and other indexed datasets',
                'protocol_ref': 'data/evidence/contracts/wheat/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/wheat/extraction/'],
                'screening_ref': 'data/evidence/contracts/wheat/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search', 'Library backup copies read where the mounted volume lacked the file'],
                'unresolved_access': ['Supplementary tables with per-sample or per-cultivar values for Pompa 2021, Palombieri 2023, Motta-Romero 2021, Maccaferri 2019 and Ozkutlu 2026', 'Primary studies cited by reviews (Guo 2018, Al-Othman 2016, Cubadda durum milling)']},
     'source_catalogue': {'topic': 'ingredients/wheat'}, 'retain_history_only': True}
s['key_evidence'] = [
  {'label': 'Typical cadmium', 'text': 'Common wheat grain had a cadmium median of 28–29 µg/kg; 4.2% of results exceeded the EU 100 µg/kg limit.', 'href': '#heavy-metal-contamination-profile-of-wheat', 'link_label': 'Profile'},
  {'label': 'Key distinction', 'text': 'Durum grain (median 70 µg/kg), bran (64) and germ (110) carry more cadmium than common wheat grain.', 'href': '#which-wheat-types-and-origins-measured-lower', 'link_label': 'Variation'},
  {'label': 'Limits', 'text': 'EU cadmium limits: 100 µg/kg common wheat, 180 durum, 150 bran, 200 germ; lead 200 µg/kg.', 'href': '#buying-and-verifying-wheat', 'link_label': 'Limits'}]

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

quick = P(('Wheat grain usually carries 20–70 µg/kg cadmium and little detectable lead, arsenic or mercury; cadmium is the metal to check, against EU limits of 100 µg/kg for common wheat and 180 µg/kg for durum.', [gems, eu]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Cadmium decides most wheat questions; nickel and chromium are higher in concentration, and lead is a concern mainly near contaminated sites.', [gems, lip, mor]),
 ('Main drivers', 'Wheat type (durum accumulates more), soil cadmium and pH, nearby mines or factories, and the bran and germ fractions.', [gems, xu, mor, mac]),
 ('Practical framing', 'Specify the wheat type and origin, and ask for lot cadmium and lead results compared with the limit for that exact material.', [eu, pom])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-wheat-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-13', 'status': 'deferred', 'reason': 'Wheat-based infant cereals are assessed on the baby-cereals pages; no infant-specific wheat grain evidence or guidance exists in the ledger.'},
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Cooking does not remove elements and no source measured cooking of wheat grain; cooked products are on their own pages.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not an ordinary preparation of wheat grain and no source measured it.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative wheat serving guidance for metals; no frequency is invented from an average concentration.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for wheat metals; wheat is a staple and the evidence addresses supply-side controls.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale, design=None, tradeoff='Other metals, yield and cost not quantified unless stated.'):
    return {'id': f'wheat-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/wheat.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Wheat', 'audiences': ['supplier', 'brand'] + (['consumer'] if stage in ('sourcing and procurement',) else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; plots, pots or lots as stated.', 'tradeoff_summary': tradeoff,
            'verification_summary': 'Confirm with lot-specific cadmium and lead results using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': design or ('Observational survey' if kind == 'observational' else 'Measured comparison' if kind == 'measured' else 'Author guidance or regulatory assessment'),
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching or retained in the grain, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable unless stated.',
            'other_contaminants': 'Not assessed unless stated.', 'nutrition_quality_yield': 'Not assessed unless stated.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'commercial-scale effect', 'next_action': 'No commercial-field intervention study in the library; keep effects scoped to the tested scale.'}], 'review': {'record_ref': 'data/evidence/contracts/wheat/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, note='Source-reported values; see the conditions for the tested scale.', basis='Grain as reported'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
doi = lambda d: f'https://doi.org/{d}'
def url(sid):
    import re
    t = (root / f'wiki/sources/{sid}.md').read_text()
    m = re.search(r'^doi:\s*["\']?([^\s"\']+)', t, re.M)
    if m and m.group(1) not in ('null', 'None', ''): return doi(m.group(1))
    m = re.search(r'^(?:url|access_url|source_url):\s*["\']?(\S+?)["\']?$', t, re.M)
    return m.group(1) if m else f'../sources/{sid}'
controls = [
 control(1, mor, 'Moradi et al. 2015', url(mor), 'primary production', 'Grow wheat away from point sources of metals', 'observational', 'Wheat grain from three regions of Isfahan, Iran',
   'Grain from the background Natanz region carried less cadmium, lead and nickel than grain from two regions beside a steel mill.',
   'Background region versus two steel-mill regions in the same study (three field composites each).',
   [out('Cd', 'lower', 310, 60, 'Lower at the background site (observational)', 'Mean grain cadmium', 'Steel-mill region (Zarrinshahr) versus background (Natanz)', 'Table 3', basis='Dry weight'),
    out('Pb', 'lower', 2000, 290, 'Lower at the background site (observational)', 'Mean grain lead', 'Steel-mill region versus background', 'Table 3', basis='Dry weight'),
    out('Ni', 'lower', 1420, 210, 'Lower at the background site (observational)', 'Mean grain nickel', 'Steel-mill region versus background', 'Table 3', basis='Dry weight')],
   'Site selection for new supply; one province and one study.', 'Observational; three composites per region; soil cadmium also differed (0.59 against 1.9–2.1 mg/kg).', 'Table 3', 'Field survey'),
 control(2, xu, 'Xu et al. 2022', url(xu), 'primary production', 'Manage soil pH on cadmium-affected fields', 'observational', 'Wheat grain, Tongling mining area, China',
   'Across 25 wheat fields, grain cadmium rose with available soil cadmium and fell as soil pH rose (regression coefficient −0.145 per pH unit on log grain cadmium).',
   'Regression across fields with soil pH 5.4–8.0.',
   [out('Cd', 'lower', None, None, 'Lower at higher soil pH (association)', 'Grain cadmium', 'Across-field regression', 'Table 5', 'Association in a mining area; no liming trial.', basis='Dry weight')],
   'Contaminated mining-area farmland; not a liming intervention.', 'Observational association; effect of deliberate liming not measured for wheat in the library.', 'Table 5', 'Field survey'),
 control(3, mac, 'Maccaferri et al. 2019', url(mac), 'cultivation', 'Choose durum cultivars with the functional HMA3 allele', 'measured', 'Durum wheat germplasm and near-isogenic lines',
   'The non-functional TdHMA3-B1b allele gives two- to threefold more cadmium transport to shoots and grain than the functional B1a allele; a PCR marker distinguishes low- and high-cadmium lines.',
   'Near-isogenic lines and a global durum collection, B1a versus B1b.',
   [out('Cd', 'lower', None, None, 'Two- to threefold lower transport to grain with the functional allele', 'Grain cadmium', 'B1a versus B1b lines', 'p. 893; Fig. 8', 'Grain concentrations are in supplementary files not in the library.')],
   'Durum breeding and cultivar choice; 68% of modern durum cultivars carry the high-cadmium allele.', 'No grain concentrations in the main text.', 'p. 892–893', 'Genetic study',
   tradeoff='The low-cadmium line grew less under zinc deficiency; no agronomic penalty under adequate zinc.'),
 control(4, pal, 'Palombieri et al. 2023', url(pal), 'cultivation', 'Consider low-cadmium tetraploid wheats', 'measured', 'Durum, Khorasan and Polish wheat, Viterbo, Italy, 2019–2020',
   'Polish wheat (Triticum polonicum) had significantly lower grain cadmium than durum and Khorasan wheat grown in the same field over two seasons; one accession was lowest in both.',
   'Subspecies grown side by side, two seasons.',
   [out('Cd', 'lower', 8.3, 6.7, 'Lower in Polish wheat (2019 medians, read from a figure)', 'Median grain cadmium', 'Durum versus Polish wheat, 2019', 'Figure 2E; Table 4', 'Approximate figure readings; large genotype-by-year interaction.', basis='Dry weight')],
   'One low-cadmium site; absolute differences are a few µg/kg.', 'Rankings were not stable between years; values near the method’s quantification range.', 'Section 3.4; Table 4', 'Field trial'),
 control(5, mot, 'Motta-Romero et al. 2021', url(mot), 'cultivation', 'Fungicide at booting on high-cadmium soil', 'measured', 'Hard winter wheat, 18 cultivars, Nebraska, 2017–2018',
   'A single metconazole application at booting lowered the range of cultivar grain cadmium means from 100–190 to 70–140 µg/kg.',
   'Untreated plots of the same cultivars, site and years.',
   [out('Cd', 'lower', 190, 140, 'Lower with fungicide (upper end of cultivar range)', 'Grain cadmium, cultivar means', 'Untreated versus fungicide', 'Results p. 10; Table 2'),
    out('Cd', 'lower', 100, 70, 'Lower with fungicide (lower end of cultivar range)', 'Grain cadmium, cultivar means', 'Untreated versus fungicide', 'Results p. 10; Table 2')],
   'One site with naturally elevated soil cadmium; one fungicide chemistry.', 'Attributed to yield dilution; other chemistries untested.', 'Results; Discussion', 'Field trial'),
 control(6, mot, 'Motta-Romero et al. 2021', url(mot), 'cultivation', 'Screen modern cultivars for cadmium', 'measured', 'Hard winter wheat cultivars registered 1933–2013',
   'Without fungicide, grain cadmium rose by about 0.4 µg/kg per year of cultivar registration.',
   'Regression on registration year, 18 cultivars.',
   [out('Cd', 'higher', None, None, 'Higher in newer cultivars (0.4 µg/kg per year)', 'Grain cadmium', 'Older versus newer cultivars', 'Fig. 3')],
   'One site; hard winter wheat only.', 'Regression slope; cultivar values are in an unavailable supplement.', 'Fig. 3', 'Field trial'),
 control(7, ozk, 'Ozkutlu et al. 2026', url(ozk), 'cultivation', 'Soil plus foliar zinc on zinc-deficient soil', 'measured', 'Durum wheat (Diyarbakir 81), calcareous soil, greenhouse pots',
   'Adequate or high soil zinc with a 0.3% foliar zinc sulphate spray gave the lowest grain cadmium at each soil cadmium dose; zinc could not bring grain from soil with 1 or 5 mg/kg added cadmium below 200 µg/kg.',
   'Zinc treatments at each spiked soil cadmium level.',
   [out('Cd', 'lower', 238.89, 182.12, 'Lower with foliar zinc added to high soil zinc (0.2 mg/kg Cd dose)', 'Grain cadmium', 'High soil zinc alone versus with foliar zinc', 'Results', 'Pot trial on spiked soil.', basis='Dry weight'),
    out('Cd', 'lower', 1224.32, 631.48, 'Lower with high soil plus foliar zinc (1 mg/kg Cd dose)', 'Grain cadmium', 'Inadequate zinc versus high soil plus foliar zinc', 'Results', 'Pot trial on spiked soil.', basis='Dry weight')],
   'Zinc-deficient calcareous soil (pH 8.1); greenhouse scale.', 'Spiked soil; supplementary means unavailable; one text value disagrees with the figure.', 'Results; Figure 2b', 'Pot experiment'),
 control(8, hg, 'Manivannan et al. 2023', url(hg), 'cultivation', 'Selenium biofortification under mercury exposure', 'measured', 'Common wheat, hydroponic, mercury-spiked solution',
   'Selenite or selenate alone raised grain mercury; only a 1:1 selenite–selenate mixture lowered it compared with mercury alone.',
   'Mercury-only plants versus each selenium form.',
   [out('tHg', 'lower', 9200, 7100, 'Lower with the 1:1 selenium mixture (read from a figure)', 'Grain total mercury', 'Mercury only versus mixture', 'Fig. 1', 'Hydroponic, spiked; preprint.', basis='Dry weight'),
    out('tHg', 'higher', 9200, 32000, 'Higher with selenate (read from a figure)', 'Grain total mercury', 'Mercury only versus selenate', 'Fig. 1', 'Hydroponic, spiked; preprint.', basis='Dry weight')],
   'Laboratory hydroponics only.', 'Bar-chart readings; no detection limit or reference material.', 'Fig. 1; Table 2', 'Laboratory'),
 control(9, gems, 'WHO GEMS/Food', 'https://extranet.who.int/gemsfood/', 'grain processing', 'Separate bran and germ in milling', 'observational', 'Wheat grain, bran and germ, international monitoring',
   'Bran and germ carried more cadmium than whole grain, so the endosperm fraction carries less than the grain it is milled from.',
   'Material medians across all submissions; not paired lots.',
   [out('Cd', 'higher', 28.5, 64, 'Higher in bran than whole grain (medians)', 'Median cadmium', 'Grain versus bran', 'primary/gemsfood-wheat-contrasts.json', 'Unpaired monitoring medians.'),
    out('Cd', 'higher', 28.5, 110, 'Higher in germ than whole grain (medians)', 'Median cadmium', 'Grain versus germ', 'primary/gemsfood-wheat-contrasts.json', 'Unpaired monitoring medians.')],
   'Applies to milling; cadmium is moved into bran and germ, not removed.', 'Unpaired material medians; flour itself is on its own page.', 'GEMS/Food material summaries', 'Monitoring dataset', tradeoff='Bran and germ keep the cadmium removed from flour; whole-grain products lose that reduction.'),
 control(10, tho, 'Thielecke and Nugent 2018', url(tho), 'grain processing', 'Milling durum wheat', 'guidance', 'Durum wheat (review of milling studies)',
   'The review reports that milling durum wheat reduced nickel most, then arsenic, cadmium and lead, without measured percentages.',
   'Durum grain versus milled products (secondary citation).',
   [out('Ni', 'context', None, None, 'Reported reduction; no values', 'Milled product', 'Grain versus milled product', 'p. 13'),
    out('Cd', 'context', None, None, 'Reported reduction; no values', 'Milled product', 'Grain versus milled product', 'p. 13')],
   'Durum milling.', 'Secondary citation without numbers.', 'p. 13', 'Review'),
 control(11, pom, 'Pompa et al. 2021', url(pom), 'sourcing and procurement', 'Choose durum origins with lower cadmium and verify lead', 'observational', 'Imported durum grain lots, Italy, 2015–2020',
   'Durum from Russia and Kazakhstan had lower cadmium medians than durum from Canada and the United States; Turkish durum, low in cadmium, had the highest lead.',
   'Country-of-production subgroups at the same border-control laboratory.',
   [out('Cd', 'lower', 94, 20, 'Lower median in Russian than US durum (observational)', 'Median grain cadmium', 'United States (25 lots) versus Russia (105 lots)', 'Table 4'),
    out('Cd', 'lower', 54, 25, 'Lower median in Kazakh than Canadian durum (observational)', 'Median grain cadmium', 'Canada (51 lots) versus Kazakhstan (151 lots)', 'Table 4')],
   'Durum imported into Italy; harvest years unknown.', 'Observational; values below quantification substituted by half the limit in the source.', 'Table 4', 'Border monitoring'),
 control(12, jec, 'JECFA 64th report', url(jec), 'lot acceptance and release', 'Enforce a cadmium maximum level on wheat lots', 'guidance', 'Wheat grain, international occurrence data',
   'Excluding lots above a maximum level of 100 µg/kg would lower mean wheat cadmium by 22% (10% of samples excluded), against 6% at 200 µg/kg (1% excluded); the cut in highest intake was about 6% and 1% of the tolerable intake.',
   'Modelled truncation of the international distribution (mean 54 µg/kg).',
   [out('Cd', 'lower', 54, None, '22% lower mean with a 100 µg/kg limit (modelled)', 'Mean wheat cadmium', 'No limit versus 100 µg/kg limit', 'Table 6', 'Modelled, not measured.'),
    out('Cd', 'lower', 54, None, '6% lower mean with a 200 µg/kg limit (modelled)', 'Mean wheat cadmium', 'No limit versus 200 µg/kg limit', 'Table 6', 'Modelled, not measured.')],
   'Regulatory or buyer lot rejection.', 'Modelled on 2006-era data; testing detects lots and does not remove cadmium.', 'Table 6', 'Regulatory assessment'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
